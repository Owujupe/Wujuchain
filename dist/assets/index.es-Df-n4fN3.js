import{e as od,i as rl,s as il,a as Qh,f as e0,p as t0,N as r0,O as i0,k as n0,b as s0,c as tc,o as zi,E as o0,y as Pn,g as ad,I as cd,d as Tt,h as a0,x as c0,j as Xo,K as nl}from"./index.es-BXcRYxxW.js";import{de as Es,a2 as l0}from"./index-BIGtf26a.js";var As={exports:{}},sl;function u0(){return sl||(sl=1,function(t,e){var r=typeof globalThis<"u"&&globalThis||typeof self<"u"&&self||typeof Es<"u"&&Es,i=function(){function s(){this.fetch=!1,this.DOMException=r.DOMException}return s.prototype=r,new s}();(function(s){(function(o){var a=typeof s<"u"&&s||typeof self<"u"&&self||typeof Es<"u"&&Es||{},c={searchParams:"URLSearchParams"in a,iterable:"Symbol"in a&&"iterator"in Symbol,blob:"FileReader"in a&&"Blob"in a&&function(){try{return new Blob,!0}catch{return!1}}(),formData:"FormData"in a,arrayBuffer:"ArrayBuffer"in a};function l(f){return f&&DataView.prototype.isPrototypeOf(f)}if(c.arrayBuffer)var u=["[object Int8Array]","[object Uint8Array]","[object Uint8ClampedArray]","[object Int16Array]","[object Uint16Array]","[object Int32Array]","[object Uint32Array]","[object Float32Array]","[object Float64Array]"],d=ArrayBuffer.isView||function(f){return f&&u.indexOf(Object.prototype.toString.call(f))>-1};function h(f){if(typeof f!="string"&&(f=String(f)),/[^a-z0-9\-#$%&'*+.^_`|~!]/i.test(f)||f==="")throw new TypeError('Invalid character in header field name: "'+f+'"');return f.toLowerCase()}function p(f){return typeof f!="string"&&(f=String(f)),f}function v(f){var m={next:function(){var I=f.shift();return{done:I===void 0,value:I}}};return c.iterable&&(m[Symbol.iterator]=function(){return m}),m}function g(f){this.map={},f instanceof g?f.forEach(function(m,I){this.append(I,m)},this):Array.isArray(f)?f.forEach(function(m){if(m.length!=2)throw new TypeError("Headers constructor: expected name/value pair to be length 2, found"+m.length);this.append(m[0],m[1])},this):f&&Object.getOwnPropertyNames(f).forEach(function(m){this.append(m,f[m])},this)}g.prototype.append=function(f,m){f=h(f),m=p(m);var I=this.map[f];this.map[f]=I?I+", "+m:m},g.prototype.delete=function(f){delete this.map[h(f)]},g.prototype.get=function(f){return f=h(f),this.has(f)?this.map[f]:null},g.prototype.has=function(f){return this.map.hasOwnProperty(h(f))},g.prototype.set=function(f,m){this.map[h(f)]=p(m)},g.prototype.forEach=function(f,m){for(var I in this.map)this.map.hasOwnProperty(I)&&f.call(m,this.map[I],I,this)},g.prototype.keys=function(){var f=[];return this.forEach(function(m,I){f.push(I)}),v(f)},g.prototype.values=function(){var f=[];return this.forEach(function(m){f.push(m)}),v(f)},g.prototype.entries=function(){var f=[];return this.forEach(function(m,I){f.push([I,m])}),v(f)},c.iterable&&(g.prototype[Symbol.iterator]=g.prototype.entries);function b(f){if(!f._noBody){if(f.bodyUsed)return Promise.reject(new TypeError("Already read"));f.bodyUsed=!0}}function C(f){return new Promise(function(m,I){f.onload=function(){m(f.result)},f.onerror=function(){I(f.error)}})}function A(f){var m=new FileReader,I=C(m);return m.readAsArrayBuffer(f),I}function x(f){var m=new FileReader,I=C(m),N=/charset=([A-Za-z0-9_-]+)/.exec(f.type),B=N?N[1]:"utf-8";return m.readAsText(f,B),I}function k(f){for(var m=new Uint8Array(f),I=new Array(m.length),N=0;N<m.length;N++)I[N]=String.fromCharCode(m[N]);return I.join("")}function P(f){if(f.slice)return f.slice(0);var m=new Uint8Array(f.byteLength);return m.set(new Uint8Array(f)),m.buffer}function T(){return this.bodyUsed=!1,this._initBody=function(f){this.bodyUsed=this.bodyUsed,this._bodyInit=f,f?typeof f=="string"?this._bodyText=f:c.blob&&Blob.prototype.isPrototypeOf(f)?this._bodyBlob=f:c.formData&&FormData.prototype.isPrototypeOf(f)?this._bodyFormData=f:c.searchParams&&URLSearchParams.prototype.isPrototypeOf(f)?this._bodyText=f.toString():c.arrayBuffer&&c.blob&&l(f)?(this._bodyArrayBuffer=P(f.buffer),this._bodyInit=new Blob([this._bodyArrayBuffer])):c.arrayBuffer&&(ArrayBuffer.prototype.isPrototypeOf(f)||d(f))?this._bodyArrayBuffer=P(f):this._bodyText=f=Object.prototype.toString.call(f):(this._noBody=!0,this._bodyText=""),this.headers.get("content-type")||(typeof f=="string"?this.headers.set("content-type","text/plain;charset=UTF-8"):this._bodyBlob&&this._bodyBlob.type?this.headers.set("content-type",this._bodyBlob.type):c.searchParams&&URLSearchParams.prototype.isPrototypeOf(f)&&this.headers.set("content-type","application/x-www-form-urlencoded;charset=UTF-8"))},c.blob&&(this.blob=function(){var f=b(this);if(f)return f;if(this._bodyBlob)return Promise.resolve(this._bodyBlob);if(this._bodyArrayBuffer)return Promise.resolve(new Blob([this._bodyArrayBuffer]));if(this._bodyFormData)throw new Error("could not read FormData body as blob");return Promise.resolve(new Blob([this._bodyText]))}),this.arrayBuffer=function(){if(this._bodyArrayBuffer){var f=b(this);return f||(ArrayBuffer.isView(this._bodyArrayBuffer)?Promise.resolve(this._bodyArrayBuffer.buffer.slice(this._bodyArrayBuffer.byteOffset,this._bodyArrayBuffer.byteOffset+this._bodyArrayBuffer.byteLength)):Promise.resolve(this._bodyArrayBuffer))}else{if(c.blob)return this.blob().then(A);throw new Error("could not read as ArrayBuffer")}},this.text=function(){var f=b(this);if(f)return f;if(this._bodyBlob)return x(this._bodyBlob);if(this._bodyArrayBuffer)return Promise.resolve(k(this._bodyArrayBuffer));if(this._bodyFormData)throw new Error("could not read FormData body as text");return Promise.resolve(this._bodyText)},c.formData&&(this.formData=function(){return this.text().then(R)}),this.json=function(){return this.text().then(JSON.parse)},this}var j=["CONNECT","DELETE","GET","HEAD","OPTIONS","PATCH","POST","PUT","TRACE"];function $(f){var m=f.toUpperCase();return j.indexOf(m)>-1?m:f}function _(f,m){if(!(this instanceof _))throw new TypeError('Please use the "new" operator, this DOM object constructor cannot be called as a function.');m=m||{};var I=m.body;if(f instanceof _){if(f.bodyUsed)throw new TypeError("Already read");this.url=f.url,this.credentials=f.credentials,m.headers||(this.headers=new g(f.headers)),this.method=f.method,this.mode=f.mode,this.signal=f.signal,!I&&f._bodyInit!=null&&(I=f._bodyInit,f.bodyUsed=!0)}else this.url=String(f);if(this.credentials=m.credentials||this.credentials||"same-origin",(m.headers||!this.headers)&&(this.headers=new g(m.headers)),this.method=$(m.method||this.method||"GET"),this.mode=m.mode||this.mode||null,this.signal=m.signal||this.signal||function(){if("AbortController"in a){var L=new AbortController;return L.signal}}(),this.referrer=null,(this.method==="GET"||this.method==="HEAD")&&I)throw new TypeError("Body not allowed for GET or HEAD requests");if(this._initBody(I),(this.method==="GET"||this.method==="HEAD")&&(m.cache==="no-store"||m.cache==="no-cache")){var N=/([?&])_=[^&]*/;if(N.test(this.url))this.url=this.url.replace(N,"$1_="+new Date().getTime());else{var B=/\?/;this.url+=(B.test(this.url)?"&":"?")+"_="+new Date().getTime()}}}_.prototype.clone=function(){return new _(this,{body:this._bodyInit})};function R(f){var m=new FormData;return f.trim().split("&").forEach(function(I){if(I){var N=I.split("="),B=N.shift().replace(/\+/g," "),L=N.join("=").replace(/\+/g," ");m.append(decodeURIComponent(B),decodeURIComponent(L))}}),m}function U(f){var m=new g,I=f.replace(/\r?\n[\t ]+/g," ");return I.split("\r").map(function(N){return N.indexOf(`
`)===0?N.substr(1,N.length):N}).forEach(function(N){var B=N.split(":"),L=B.shift().trim();if(L){var ne=B.join(":").trim();try{m.append(L,ne)}catch(ue){console.warn("Response "+ue.message)}}}),m}T.call(_.prototype);function X(f,m){if(!(this instanceof X))throw new TypeError('Please use the "new" operator, this DOM object constructor cannot be called as a function.');if(m||(m={}),this.type="default",this.status=m.status===void 0?200:m.status,this.status<200||this.status>599)throw new RangeError("Failed to construct 'Response': The status provided (0) is outside the range [200, 599].");this.ok=this.status>=200&&this.status<300,this.statusText=m.statusText===void 0?"":""+m.statusText,this.headers=new g(m.headers),this.url=m.url||"",this._initBody(f)}T.call(X.prototype),X.prototype.clone=function(){return new X(this._bodyInit,{status:this.status,statusText:this.statusText,headers:new g(this.headers),url:this.url})},X.error=function(){var f=new X(null,{status:200,statusText:""});return f.ok=!1,f.status=0,f.type="error",f};var pe=[301,302,303,307,308];X.redirect=function(f,m){if(pe.indexOf(m)===-1)throw new RangeError("Invalid status code");return new X(null,{status:m,headers:{location:f}})},o.DOMException=a.DOMException;try{new o.DOMException}catch{o.DOMException=function(m,I){this.message=m,this.name=I;var N=Error(m);this.stack=N.stack},o.DOMException.prototype=Object.create(Error.prototype),o.DOMException.prototype.constructor=o.DOMException}function S(f,m){return new Promise(function(I,N){var B=new _(f,m);if(B.signal&&B.signal.aborted)return N(new o.DOMException("Aborted","AbortError"));var L=new XMLHttpRequest;function ne(){L.abort()}L.onload=function(){var se={statusText:L.statusText,headers:U(L.getAllResponseHeaders()||"")};B.url.indexOf("file://")===0&&(L.status<200||L.status>599)?se.status=200:se.status=L.status,se.url="responseURL"in L?L.responseURL:se.headers.get("X-Request-URL");var xe="response"in L?L.response:L.responseText;setTimeout(function(){I(new X(xe,se))},0)},L.onerror=function(){setTimeout(function(){N(new TypeError("Network request failed"))},0)},L.ontimeout=function(){setTimeout(function(){N(new TypeError("Network request timed out"))},0)},L.onabort=function(){setTimeout(function(){N(new o.DOMException("Aborted","AbortError"))},0)};function ue(se){try{return se===""&&a.location.href?a.location.href:se}catch{return se}}if(L.open(B.method,ue(B.url),!0),B.credentials==="include"?L.withCredentials=!0:B.credentials==="omit"&&(L.withCredentials=!1),"responseType"in L&&(c.blob?L.responseType="blob":c.arrayBuffer&&(L.responseType="arraybuffer")),m&&typeof m.headers=="object"&&!(m.headers instanceof g||a.Headers&&m.headers instanceof a.Headers)){var fe=[];Object.getOwnPropertyNames(m.headers).forEach(function(se){fe.push(h(se)),L.setRequestHeader(se,p(m.headers[se]))}),B.headers.forEach(function(se,xe){fe.indexOf(xe)===-1&&L.setRequestHeader(xe,se)})}else B.headers.forEach(function(se,xe){L.setRequestHeader(xe,se)});B.signal&&(B.signal.addEventListener("abort",ne),L.onreadystatechange=function(){L.readyState===4&&B.signal.removeEventListener("abort",ne)}),L.send(typeof B._bodyInit>"u"?null:B._bodyInit)})}return S.polyfill=!0,a.fetch||(a.fetch=S,a.Headers=g,a.Request=_,a.Response=X),o.Headers=g,o.Request=_,o.Response=X,o.fetch=S,Object.defineProperty(o,"__esModule",{value:!0}),o})({})})(i),i.fetch.ponyfill=!0,delete i.fetch.polyfill;var n=r.fetch?r:i;e=n.fetch,e.default=n.fetch,e.fetch=n.fetch,e.Headers=n.Headers,e.Request=n.Request,e.Response=n.Response,t.exports=e}(As,As.exports)),As.exports}var d0=u0();const ol=l0(d0);var h0=Object.defineProperty,p0=Object.defineProperties,f0=Object.getOwnPropertyDescriptors,al=Object.getOwnPropertySymbols,g0=Object.prototype.hasOwnProperty,w0=Object.prototype.propertyIsEnumerable,cl=(t,e,r)=>e in t?h0(t,e,{enumerable:!0,configurable:!0,writable:!0,value:r}):t[e]=r,ll=(t,e)=>{for(var r in e||(e={}))g0.call(e,r)&&cl(t,r,e[r]);if(al)for(var r of al(e))w0.call(e,r)&&cl(t,r,e[r]);return t},ul=(t,e)=>p0(t,f0(e));const m0={Accept:"application/json","Content-Type":"application/json"},v0="POST",dl={headers:m0,method:v0},hl=10;let Ot=class{constructor(e,r=!1){if(this.url=e,this.disableProviderPing=r,this.events=new od.EventEmitter,this.isAvailable=!1,this.registering=!1,!rl(e))throw new Error(`Provided URL is not compatible with HTTP connection: ${e}`);this.url=e,this.disableProviderPing=r}get connected(){return this.isAvailable}get connecting(){return this.registering}on(e,r){this.events.on(e,r)}once(e,r){this.events.once(e,r)}off(e,r){this.events.off(e,r)}removeListener(e,r){this.events.removeListener(e,r)}async open(e=this.url){await this.register(e)}async close(){if(!this.isAvailable)throw new Error("Connection already closed");this.onClose()}async send(e){this.isAvailable||await this.register();try{const r=il(e),i=await(await ol(this.url,ul(ll({},dl),{body:r}))).json();this.onPayload({data:i})}catch(r){this.onError(e.id,r)}}async register(e=this.url){if(!rl(e))throw new Error(`Provided URL is not compatible with HTTP connection: ${e}`);if(this.registering){const r=this.events.getMaxListeners();return(this.events.listenerCount("register_error")>=r||this.events.listenerCount("open")>=r)&&this.events.setMaxListeners(r+1),new Promise((i,n)=>{this.events.once("register_error",s=>{this.resetMaxListeners(),n(s)}),this.events.once("open",()=>{if(this.resetMaxListeners(),typeof this.isAvailable>"u")return n(new Error("HTTP connection is missing or invalid"));i()})})}this.url=e,this.registering=!0;try{if(!this.disableProviderPing){const r=il({id:1,jsonrpc:"2.0",method:"test",params:[]});await ol(e,ul(ll({},dl),{body:r}))}this.onOpen()}catch(r){const i=this.parseError(r);throw this.events.emit("register_error",i),this.onClose(),i}}onOpen(){this.isAvailable=!0,this.registering=!1,this.events.emit("open")}onClose(){this.isAvailable=!1,this.registering=!1,this.events.emit("close")}onPayload(e){if(typeof e.data>"u")return;const r=typeof e.data=="string"?Qh(e.data):e.data;this.events.emit("payload",r)}onError(e,r){const i=this.parseError(r),n=i.message||i.toString(),s=e0(e,n);this.events.emit("payload",s)}parseError(e,r=this.url){return t0(e,r,"HTTP")}resetMaxListeners(){this.events.getMaxListeners()>hl&&this.events.setMaxListeners(hl)}};const pl="error",b0="wss://relay.walletconnect.org",y0="wc",C0="universal_provider",ks=`${y0}@2:${C0}:`,ld="https://rpc.walletconnect.org/v1/",Si="generic",x0=`${ld}bundler`,xt={DEFAULT_CHAIN_CHANGED:"default_chain_changed"};function E0(){}function Pc(t){return t==null||typeof t!="object"&&typeof t!="function"}function _c(t){return ArrayBuffer.isView(t)&&!(t instanceof DataView)}function A0(t){if(Pc(t))return t;if(Array.isArray(t)||_c(t)||t instanceof ArrayBuffer||typeof SharedArrayBuffer<"u"&&t instanceof SharedArrayBuffer)return t.slice(0);const e=Object.getPrototypeOf(t),r=e.constructor;if(t instanceof Date||t instanceof Map||t instanceof Set)return new r(t);if(t instanceof RegExp){const i=new r(t);return i.lastIndex=t.lastIndex,i}if(t instanceof DataView)return new r(t.buffer.slice(0));if(t instanceof Error){const i=new r(t.message);return i.stack=t.stack,i.name=t.name,i.cause=t.cause,i}if(typeof File<"u"&&t instanceof File)return new r([t],t.name,{type:t.type,lastModified:t.lastModified});if(typeof t=="object"){const i=Object.create(e);return Object.assign(i,t)}return t}function fl(t){return typeof t=="object"&&t!==null}function ud(t){return Object.getOwnPropertySymbols(t).filter(e=>Object.prototype.propertyIsEnumerable.call(t,e))}function dd(t){return t==null?t===void 0?"[object Undefined]":"[object Null]":Object.prototype.toString.call(t)}const k0="[object RegExp]",hd="[object String]",pd="[object Number]",fd="[object Boolean]",gd="[object Arguments]",I0="[object Symbol]",N0="[object Date]",S0="[object Map]",P0="[object Set]",_0="[object Array]",T0="[object ArrayBuffer]",O0="[object Object]",$0="[object DataView]",R0="[object Uint8Array]",L0="[object Uint8ClampedArray]",B0="[object Uint16Array]",U0="[object Uint32Array]",M0="[object Int8Array]",z0="[object Int16Array]",j0="[object Int32Array]",D0="[object Float32Array]",H0="[object Float64Array]";function W0(t,e){return Ui(t,void 0,t,new Map,e)}function Ui(t,e,r,i=new Map,n=void 0){const s=n==null?void 0:n(t,e,r,i);if(s!=null)return s;if(Pc(t))return t;if(i.has(t))return i.get(t);if(Array.isArray(t)){const o=new Array(t.length);i.set(t,o);for(let a=0;a<t.length;a++)o[a]=Ui(t[a],a,r,i,n);return Object.hasOwn(t,"index")&&(o.index=t.index),Object.hasOwn(t,"input")&&(o.input=t.input),o}if(t instanceof Date)return new Date(t.getTime());if(t instanceof RegExp){const o=new RegExp(t.source,t.flags);return o.lastIndex=t.lastIndex,o}if(t instanceof Map){const o=new Map;i.set(t,o);for(const[a,c]of t)o.set(a,Ui(c,a,r,i,n));return o}if(t instanceof Set){const o=new Set;i.set(t,o);for(const a of t)o.add(Ui(a,void 0,r,i,n));return o}if(typeof Buffer<"u"&&Buffer.isBuffer(t))return t.subarray();if(_c(t)){const o=new(Object.getPrototypeOf(t)).constructor(t.length);i.set(t,o);for(let a=0;a<t.length;a++)o[a]=Ui(t[a],a,r,i,n);return o}if(t instanceof ArrayBuffer||typeof SharedArrayBuffer<"u"&&t instanceof SharedArrayBuffer)return t.slice(0);if(t instanceof DataView){const o=new DataView(t.buffer.slice(0),t.byteOffset,t.byteLength);return i.set(t,o),Dr(o,t,r,i,n),o}if(typeof File<"u"&&t instanceof File){const o=new File([t],t.name,{type:t.type});return i.set(t,o),Dr(o,t,r,i,n),o}if(t instanceof Blob){const o=new Blob([t],{type:t.type});return i.set(t,o),Dr(o,t,r,i,n),o}if(t instanceof Error){const o=new t.constructor;return i.set(t,o),o.message=t.message,o.name=t.name,o.stack=t.stack,o.cause=t.cause,Dr(o,t,r,i,n),o}if(typeof t=="object"&&F0(t)){const o=Object.create(Object.getPrototypeOf(t));return i.set(t,o),Dr(o,t,r,i,n),o}return t}function Dr(t,e,r=t,i,n){const s=[...Object.keys(e),...ud(e)];for(let o=0;o<s.length;o++){const a=s[o],c=Object.getOwnPropertyDescriptor(t,a);(c==null||c.writable)&&(t[a]=Ui(e[a],a,r,i,n))}}function F0(t){switch(dd(t)){case gd:case _0:case T0:case $0:case fd:case N0:case D0:case H0:case M0:case z0:case j0:case S0:case pd:case O0:case k0:case P0:case hd:case I0:case R0:case L0:case B0:case U0:return!0;default:return!1}}function q0(t,e){return W0(t,(r,i,n,s)=>{if(typeof t=="object")switch(Object.prototype.toString.call(t)){case pd:case hd:case fd:{const o=new t.constructor(t==null?void 0:t.valueOf());return Dr(o,t),o}case gd:{const o={};return Dr(o,t),o.length=t.length,o[Symbol.iterator]=t[Symbol.iterator],o}default:return}})}function gl(t){return q0(t)}function wl(t){return t!==null&&typeof t=="object"&&dd(t)==="[object Arguments]"}function V0(t){return _c(t)}function Z0(t){var r;if(typeof t!="object"||t==null)return!1;if(Object.getPrototypeOf(t)===null)return!0;if(Object.prototype.toString.call(t)!=="[object Object]"){const i=t[Symbol.toStringTag];return i==null||!((r=Object.getOwnPropertyDescriptor(t,Symbol.toStringTag))!=null&&r.writable)?!1:t.toString()===`[object ${i}]`}let e=t;for(;Object.getPrototypeOf(e)!==null;)e=Object.getPrototypeOf(e);return Object.getPrototypeOf(t)===e}function G0(t,...e){const r=e.slice(0,-1),i=e[e.length-1];let n=t;for(let s=0;s<r.length;s++){const o=r[s];n=rc(n,o,i,new Map)}return n}function rc(t,e,r,i){if(Pc(t)&&(t=Object(t)),e==null||typeof e!="object")return t;if(i.has(e))return A0(i.get(e));if(i.set(e,t),Array.isArray(e)){e=e.slice();for(let s=0;s<e.length;s++)e[s]=e[s]??void 0}const n=[...Object.keys(e),...ud(e)];for(let s=0;s<n.length;s++){const o=n[s];let a=e[o],c=t[o];if(wl(a)&&(a={...a}),wl(c)&&(c={...c}),typeof Buffer<"u"&&Buffer.isBuffer(a)&&(a=gl(a)),Array.isArray(a))if(typeof c=="object"&&c!=null){const u=[],d=Reflect.ownKeys(c);for(let h=0;h<d.length;h++){const p=d[h];u[p]=c[p]}c=u}else c=[];const l=r(c,a,o,t,e,i);l!=null?t[o]=l:Array.isArray(a)||fl(c)&&fl(a)?t[o]=rc(c,a,r,i):c==null&&Z0(a)?t[o]=rc({},a,r,i):c==null&&V0(a)?t[o]=gl(a):(c===void 0||a!==void 0)&&(t[o]=a)}return t}function K0(t,...e){return G0(t,...e,E0)}var Y0=Object.defineProperty,J0=Object.defineProperties,X0=Object.getOwnPropertyDescriptors,ml=Object.getOwnPropertySymbols,Q0=Object.prototype.hasOwnProperty,e1=Object.prototype.propertyIsEnumerable,vl=(t,e,r)=>e in t?Y0(t,e,{enumerable:!0,configurable:!0,writable:!0,value:r}):t[e]=r,Is=(t,e)=>{for(var r in e||(e={}))Q0.call(e,r)&&vl(t,r,e[r]);if(ml)for(var r of ml(e))e1.call(e,r)&&vl(t,r,e[r]);return t},t1=(t,e)=>J0(t,X0(e));function lt(t,e,r){var i;const n=cd(t);return((i=e.rpcMap)==null?void 0:i[n.reference])||`${ld}?chainId=${n.namespace}:${n.reference}&projectId=${r}`}function si(t){return t.includes(":")?t.split(":")[1]:t}function wd(t){return t.map(e=>`${e.split(":")[0]}:${e.split(":")[1]}`)}function r1(t,e){const r=Object.keys(e.namespaces).filter(n=>n.includes(t));if(!r.length)return[];const i=[];return r.forEach(n=>{const s=e.namespaces[n].accounts;i.push(...s)}),i}function Qo(t={},e={}){const r=bl(t),i=bl(e);return K0(r,i)}function bl(t){var e,r,i,n;const s={};if(!c0(t))return s;for(const[o,a]of Object.entries(t)){const c=ad(o)?[o]:a.chains,l=a.methods||[],u=a.events||[],d=a.rpcMap||{},h=Pn(o);s[h]=t1(Is(Is({},s[h]),a),{chains:Xo(c,(e=s[h])==null?void 0:e.chains),methods:Xo(l,(r=s[h])==null?void 0:r.methods),events:Xo(u,(i=s[h])==null?void 0:i.events),rpcMap:Is(Is({},d),(n=s[h])==null?void 0:n.rpcMap)})}return s}function yl(t){return t.includes(":")?t.split(":")[2]:t}function Cl(t){const e={};for(const[r,i]of Object.entries(t)){const n=i.methods||[],s=i.events||[],o=i.accounts||[],a=ad(r)?[r]:i.chains?i.chains:wd(i.accounts);e[r]={chains:a,methods:n,events:s,accounts:o}}return e}function ea(t){return typeof t=="number"?t:t.includes("0x")?parseInt(t,16):(t=t.includes(":")?t.split(":")[1]:t,isNaN(Number(t))?t:Number(t))}const md={},ge=t=>md[t],ta=(t,e)=>{md[t]=e};var i1=Object.defineProperty,n1=(t,e,r)=>e in t?i1(t,e,{enumerable:!0,configurable:!0,writable:!0,value:r}):t[e]=r,oi=(t,e,r)=>n1(t,typeof e!="symbol"?e+"":e,r);let s1=class{constructor(e){oi(this,"name","polkadot"),oi(this,"client"),oi(this,"httpProviders"),oi(this,"events"),oi(this,"namespace"),oi(this,"chainId"),this.namespace=e.namespace,this.events=ge("events"),this.client=ge("client"),this.chainId=this.getDefaultChain(),this.httpProviders=this.createHttpProviders()}updateNamespace(e){this.namespace=Object.assign(this.namespace,e)}requestAccounts(){return this.getAccounts()}getDefaultChain(){if(this.chainId)return this.chainId;if(this.namespace.defaultChain)return this.namespace.defaultChain;const e=this.namespace.chains[0];if(!e)throw new Error("ChainId not found");return e.split(":")[1]}request(e){return this.namespace.methods.includes(e.request.method)?this.client.request(e):this.getHttpProvider().request(e.request)}setDefaultChain(e,r){this.httpProviders[e]||this.setHttpProvider(e,r),this.chainId=e,this.events.emit(xt.DEFAULT_CHAIN_CHANGED,`${this.name}:${e}`)}getAccounts(){const e=this.namespace.accounts;return e?e.filter(r=>r.split(":")[1]===this.chainId.toString()).map(r=>r.split(":")[2])||[]:[]}createHttpProviders(){const e={};return this.namespace.chains.forEach(r=>{var i;const n=si(r);e[n]=this.createHttpProvider(n,(i=this.namespace.rpcMap)==null?void 0:i[r])}),e}getHttpProvider(){const e=`${this.name}:${this.chainId}`,r=this.httpProviders[e];if(typeof r>"u")throw new Error(`JSON-RPC provider for ${e} not found`);return r}setHttpProvider(e,r){const i=this.createHttpProvider(e,r);i&&(this.httpProviders[e]=i)}createHttpProvider(e,r){const i=r||lt(e,this.namespace,this.client.core.projectId);if(!i)throw new Error(`No RPC url provided for chainId: ${e}`);return new Tt(new Ot(i,ge("disableProviderPing")))}};var o1=Object.defineProperty,a1=Object.defineProperties,c1=Object.getOwnPropertyDescriptors,xl=Object.getOwnPropertySymbols,l1=Object.prototype.hasOwnProperty,u1=Object.prototype.propertyIsEnumerable,ic=(t,e,r)=>e in t?o1(t,e,{enumerable:!0,configurable:!0,writable:!0,value:r}):t[e]=r,El=(t,e)=>{for(var r in e||(e={}))l1.call(e,r)&&ic(t,r,e[r]);if(xl)for(var r of xl(e))u1.call(e,r)&&ic(t,r,e[r]);return t},Al=(t,e)=>a1(t,c1(e)),ai=(t,e,r)=>ic(t,typeof e!="symbol"?e+"":e,r);let d1=class{constructor(e){ai(this,"name","eip155"),ai(this,"client"),ai(this,"chainId"),ai(this,"namespace"),ai(this,"httpProviders"),ai(this,"events"),this.namespace=e.namespace,this.events=ge("events"),this.client=ge("client"),this.httpProviders=this.createHttpProviders(),this.chainId=parseInt(this.getDefaultChain())}async request(e){switch(e.request.method){case"eth_requestAccounts":return this.getAccounts();case"eth_accounts":return this.getAccounts();case"wallet_switchEthereumChain":return await this.handleSwitchChain(e);case"eth_chainId":return parseInt(this.getDefaultChain());case"wallet_getCapabilities":return await this.getCapabilities(e);case"wallet_getCallsStatus":return await this.getCallStatus(e)}return this.namespace.methods.includes(e.request.method)?await this.client.request(e):this.getHttpProvider().request(e.request)}updateNamespace(e){this.namespace=Object.assign(this.namespace,e)}setDefaultChain(e,r){this.httpProviders[e]||this.setHttpProvider(parseInt(e),r),this.chainId=parseInt(e),this.events.emit(xt.DEFAULT_CHAIN_CHANGED,`${this.name}:${e}`)}requestAccounts(){return this.getAccounts()}getDefaultChain(){if(this.chainId)return this.chainId.toString();if(this.namespace.defaultChain)return this.namespace.defaultChain;const e=this.namespace.chains[0];if(!e)throw new Error("ChainId not found");return e.split(":")[1]}createHttpProvider(e,r){const i=r||lt(`${this.name}:${e}`,this.namespace,this.client.core.projectId);if(!i)throw new Error(`No RPC url provided for chainId: ${e}`);return new Tt(new Ot(i,ge("disableProviderPing")))}setHttpProvider(e,r){const i=this.createHttpProvider(e,r);i&&(this.httpProviders[e]=i)}createHttpProviders(){const e={};return this.namespace.chains.forEach(r=>{var i;const n=parseInt(si(r));e[n]=this.createHttpProvider(n,(i=this.namespace.rpcMap)==null?void 0:i[r])}),e}getAccounts(){const e=this.namespace.accounts;return e?[...new Set(e.filter(r=>r.split(":")[1]===this.chainId.toString()).map(r=>r.split(":")[2]))]:[]}getHttpProvider(){const e=this.chainId,r=this.httpProviders[e];if(typeof r>"u")throw new Error(`JSON-RPC provider for ${e} not found`);return r}async handleSwitchChain(e){var r,i;let n=e.request.params?(r=e.request.params[0])==null?void 0:r.chainId:"0x0";n=n.startsWith("0x")?n:`0x${n}`;const s=parseInt(n,16);if(this.isChainApproved(s))this.setDefaultChain(`${s}`);else if(this.namespace.methods.includes("wallet_switchEthereumChain"))await this.client.request({topic:e.topic,request:{method:e.request.method,params:[{chainId:n}]},chainId:(i=this.namespace.chains)==null?void 0:i[0]}),this.setDefaultChain(`${s}`);else throw new Error(`Failed to switch to chain 'eip155:${s}'. The chain is not approved or the wallet does not support 'wallet_switchEthereumChain' method.`);return null}isChainApproved(e){return this.namespace.chains.includes(`${this.name}:${e}`)}async getCapabilities(e){var r,i,n;const s=(i=(r=e.request)==null?void 0:r.params)==null?void 0:i[0];if(!s)throw new Error("Missing address parameter in `wallet_getCapabilities` request");const o=this.client.session.get(e.topic),a=((n=o==null?void 0:o.sessionProperties)==null?void 0:n.capabilities)||{};if(a!=null&&a[s])return a==null?void 0:a[s];const c=await this.client.request(e);try{await this.client.session.update(e.topic,{sessionProperties:Al(El({},o.sessionProperties||{}),{capabilities:Al(El({},a||{}),{[s]:c})})})}catch(l){console.warn("Failed to update session with capabilities",l)}return c}async getCallStatus(e){var r,i;const n=this.client.session.get(e.topic),s=(r=n.sessionProperties)==null?void 0:r.bundler_name;if(s){const a=this.getBundlerUrl(e.chainId,s);try{return await this.getUserOperationReceipt(a,e)}catch(c){console.warn("Failed to fetch call status from bundler",c,a)}}const o=(i=n.sessionProperties)==null?void 0:i.bundler_url;if(o)try{return await this.getUserOperationReceipt(o,e)}catch(a){console.warn("Failed to fetch call status from custom bundler",a,o)}if(this.namespace.methods.includes(e.request.method))return await this.client.request(e);throw new Error("Fetching call status not approved by the wallet.")}async getUserOperationReceipt(e,r){var i;const n=new URL(e),s=await fetch(n,{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify(a0("eth_getUserOperationReceipt",[(i=r.request.params)==null?void 0:i[0]]))});if(!s.ok)throw new Error(`Failed to fetch user operation receipt - ${s.status}`);return await s.json()}getBundlerUrl(e,r){return`${x0}?projectId=${this.client.core.projectId}&chainId=${e}&bundler=${r}`}};var h1=Object.defineProperty,p1=(t,e,r)=>e in t?h1(t,e,{enumerable:!0,configurable:!0,writable:!0,value:r}):t[e]=r,ci=(t,e,r)=>p1(t,typeof e!="symbol"?e+"":e,r);let f1=class{constructor(e){ci(this,"name","solana"),ci(this,"client"),ci(this,"httpProviders"),ci(this,"events"),ci(this,"namespace"),ci(this,"chainId"),this.namespace=e.namespace,this.events=ge("events"),this.client=ge("client"),this.chainId=this.getDefaultChain(),this.httpProviders=this.createHttpProviders()}updateNamespace(e){this.namespace=Object.assign(this.namespace,e)}requestAccounts(){return this.getAccounts()}request(e){return this.namespace.methods.includes(e.request.method)?this.client.request(e):this.getHttpProvider().request(e.request)}setDefaultChain(e,r){this.httpProviders[e]||this.setHttpProvider(e,r),this.chainId=e,this.events.emit(xt.DEFAULT_CHAIN_CHANGED,`${this.name}:${e}`)}getDefaultChain(){if(this.chainId)return this.chainId;if(this.namespace.defaultChain)return this.namespace.defaultChain;const e=this.namespace.chains[0];if(!e)throw new Error("ChainId not found");return e.split(":")[1]}getAccounts(){const e=this.namespace.accounts;return e?[...new Set(e.filter(r=>r.split(":")[1]===this.chainId.toString()).map(r=>r.split(":")[2]))]:[]}createHttpProviders(){const e={};return this.namespace.chains.forEach(r=>{var i;const n=si(r);e[n]=this.createHttpProvider(n,(i=this.namespace.rpcMap)==null?void 0:i[r])}),e}getHttpProvider(){const e=`${this.name}:${this.chainId}`,r=this.httpProviders[e];if(typeof r>"u")throw new Error(`JSON-RPC provider for ${e} not found`);return r}setHttpProvider(e,r){const i=this.createHttpProvider(e,r);i&&(this.httpProviders[e]=i)}createHttpProvider(e,r){const i=r||lt(e,this.namespace,this.client.core.projectId);if(!i)throw new Error(`No RPC url provided for chainId: ${e}`);return new Tt(new Ot(i,ge("disableProviderPing")))}};var g1=Object.defineProperty,w1=(t,e,r)=>e in t?g1(t,e,{enumerable:!0,configurable:!0,writable:!0,value:r}):t[e]=r,li=(t,e,r)=>w1(t,typeof e!="symbol"?e+"":e,r);let m1=class{constructor(e){li(this,"name","cosmos"),li(this,"client"),li(this,"httpProviders"),li(this,"events"),li(this,"namespace"),li(this,"chainId"),this.namespace=e.namespace,this.events=ge("events"),this.client=ge("client"),this.chainId=this.getDefaultChain(),this.httpProviders=this.createHttpProviders()}updateNamespace(e){this.namespace=Object.assign(this.namespace,e)}requestAccounts(){return this.getAccounts()}getDefaultChain(){if(this.chainId)return this.chainId;if(this.namespace.defaultChain)return this.namespace.defaultChain;const e=this.namespace.chains[0];if(!e)throw new Error("ChainId not found");return e.split(":")[1]}request(e){return this.namespace.methods.includes(e.request.method)?this.client.request(e):this.getHttpProvider().request(e.request)}setDefaultChain(e,r){this.httpProviders[e]||this.setHttpProvider(e,r),this.chainId=e,this.events.emit(xt.DEFAULT_CHAIN_CHANGED,`${this.name}:${this.chainId}`)}getAccounts(){const e=this.namespace.accounts;return e?[...new Set(e.filter(r=>r.split(":")[1]===this.chainId.toString()).map(r=>r.split(":")[2]))]:[]}createHttpProviders(){const e={};return this.namespace.chains.forEach(r=>{var i;const n=si(r);e[n]=this.createHttpProvider(n,(i=this.namespace.rpcMap)==null?void 0:i[r])}),e}getHttpProvider(){const e=`${this.name}:${this.chainId}`,r=this.httpProviders[e];if(typeof r>"u")throw new Error(`JSON-RPC provider for ${e} not found`);return r}setHttpProvider(e,r){const i=this.createHttpProvider(e,r);i&&(this.httpProviders[e]=i)}createHttpProvider(e,r){const i=r||lt(e,this.namespace,this.client.core.projectId);if(!i)throw new Error(`No RPC url provided for chainId: ${e}`);return new Tt(new Ot(i,ge("disableProviderPing")))}};var v1=Object.defineProperty,b1=(t,e,r)=>e in t?v1(t,e,{enumerable:!0,configurable:!0,writable:!0,value:r}):t[e]=r,ui=(t,e,r)=>b1(t,typeof e!="symbol"?e+"":e,r);let y1=class{constructor(e){ui(this,"name","algorand"),ui(this,"client"),ui(this,"httpProviders"),ui(this,"events"),ui(this,"namespace"),ui(this,"chainId"),this.namespace=e.namespace,this.events=ge("events"),this.client=ge("client"),this.chainId=this.getDefaultChain(),this.httpProviders=this.createHttpProviders()}updateNamespace(e){this.namespace=Object.assign(this.namespace,e)}requestAccounts(){return this.getAccounts()}request(e){return this.namespace.methods.includes(e.request.method)?this.client.request(e):this.getHttpProvider().request(e.request)}setDefaultChain(e,r){if(!this.httpProviders[e]){const i=r||lt(`${this.name}:${e}`,this.namespace,this.client.core.projectId);if(!i)throw new Error(`No RPC url provided for chainId: ${e}`);this.setHttpProvider(e,i)}this.chainId=e,this.events.emit(xt.DEFAULT_CHAIN_CHANGED,`${this.name}:${this.chainId}`)}getDefaultChain(){if(this.chainId)return this.chainId;if(this.namespace.defaultChain)return this.namespace.defaultChain;const e=this.namespace.chains[0];if(!e)throw new Error("ChainId not found");return e.split(":")[1]}getAccounts(){const e=this.namespace.accounts;return e?[...new Set(e.filter(r=>r.split(":")[1]===this.chainId.toString()).map(r=>r.split(":")[2]))]:[]}createHttpProviders(){const e={};return this.namespace.chains.forEach(r=>{var i;e[r]=this.createHttpProvider(r,(i=this.namespace.rpcMap)==null?void 0:i[r])}),e}getHttpProvider(){const e=`${this.name}:${this.chainId}`,r=this.httpProviders[e];if(typeof r>"u")throw new Error(`JSON-RPC provider for ${e} not found`);return r}setHttpProvider(e,r){const i=this.createHttpProvider(e,r);i&&(this.httpProviders[e]=i)}createHttpProvider(e,r){const i=r||lt(e,this.namespace,this.client.core.projectId);return typeof i>"u"?void 0:new Tt(new Ot(i,ge("disableProviderPing")))}};var C1=Object.defineProperty,x1=(t,e,r)=>e in t?C1(t,e,{enumerable:!0,configurable:!0,writable:!0,value:r}):t[e]=r,di=(t,e,r)=>x1(t,typeof e!="symbol"?e+"":e,r);class E1{constructor(e){di(this,"name","cip34"),di(this,"client"),di(this,"httpProviders"),di(this,"events"),di(this,"namespace"),di(this,"chainId"),this.namespace=e.namespace,this.events=ge("events"),this.client=ge("client"),this.chainId=this.getDefaultChain(),this.httpProviders=this.createHttpProviders()}updateNamespace(e){this.namespace=Object.assign(this.namespace,e)}requestAccounts(){return this.getAccounts()}getDefaultChain(){if(this.chainId)return this.chainId;if(this.namespace.defaultChain)return this.namespace.defaultChain;const e=this.namespace.chains[0];if(!e)throw new Error("ChainId not found");return e.split(":")[1]}request(e){return this.namespace.methods.includes(e.request.method)?this.client.request(e):this.getHttpProvider().request(e.request)}setDefaultChain(e,r){this.httpProviders[e]||this.setHttpProvider(e,r),this.chainId=e,this.events.emit(xt.DEFAULT_CHAIN_CHANGED,`${this.name}:${this.chainId}`)}getAccounts(){const e=this.namespace.accounts;return e?[...new Set(e.filter(r=>r.split(":")[1]===this.chainId.toString()).map(r=>r.split(":")[2]))]:[]}createHttpProviders(){const e={};return this.namespace.chains.forEach(r=>{const i=this.getCardanoRPCUrl(r),n=si(r);e[n]=this.createHttpProvider(n,i)}),e}getHttpProvider(){const e=`${this.name}:${this.chainId}`,r=this.httpProviders[e];if(typeof r>"u")throw new Error(`JSON-RPC provider for ${e} not found`);return r}getCardanoRPCUrl(e){const r=this.namespace.rpcMap;if(r)return r[e]}setHttpProvider(e,r){const i=this.createHttpProvider(e,r);i&&(this.httpProviders[e]=i)}createHttpProvider(e,r){const i=r||this.getCardanoRPCUrl(e);if(!i)throw new Error(`No RPC url provided for chainId: ${e}`);return new Tt(new Ot(i,ge("disableProviderPing")))}}var A1=Object.defineProperty,k1=(t,e,r)=>e in t?A1(t,e,{enumerable:!0,configurable:!0,writable:!0,value:r}):t[e]=r,hi=(t,e,r)=>k1(t,typeof e!="symbol"?e+"":e,r);class I1{constructor(e){hi(this,"name","elrond"),hi(this,"client"),hi(this,"httpProviders"),hi(this,"events"),hi(this,"namespace"),hi(this,"chainId"),this.namespace=e.namespace,this.events=ge("events"),this.client=ge("client"),this.chainId=this.getDefaultChain(),this.httpProviders=this.createHttpProviders()}updateNamespace(e){this.namespace=Object.assign(this.namespace,e)}requestAccounts(){return this.getAccounts()}request(e){return this.namespace.methods.includes(e.request.method)?this.client.request(e):this.getHttpProvider().request(e.request)}setDefaultChain(e,r){this.httpProviders[e]||this.setHttpProvider(e,r),this.chainId=e,this.events.emit(xt.DEFAULT_CHAIN_CHANGED,`${this.name}:${e}`)}getDefaultChain(){if(this.chainId)return this.chainId;if(this.namespace.defaultChain)return this.namespace.defaultChain;const e=this.namespace.chains[0];if(!e)throw new Error("ChainId not found");return e.split(":")[1]}getAccounts(){const e=this.namespace.accounts;return e?[...new Set(e.filter(r=>r.split(":")[1]===this.chainId.toString()).map(r=>r.split(":")[2]))]:[]}createHttpProviders(){const e={};return this.namespace.chains.forEach(r=>{var i;const n=si(r);e[n]=this.createHttpProvider(n,(i=this.namespace.rpcMap)==null?void 0:i[r])}),e}getHttpProvider(){const e=`${this.name}:${this.chainId}`,r=this.httpProviders[e];if(typeof r>"u")throw new Error(`JSON-RPC provider for ${e} not found`);return r}setHttpProvider(e,r){const i=this.createHttpProvider(e,r);i&&(this.httpProviders[e]=i)}createHttpProvider(e,r){const i=r||lt(e,this.namespace,this.client.core.projectId);if(!i)throw new Error(`No RPC url provided for chainId: ${e}`);return new Tt(new Ot(i,ge("disableProviderPing")))}}var N1=Object.defineProperty,S1=(t,e,r)=>e in t?N1(t,e,{enumerable:!0,configurable:!0,writable:!0,value:r}):t[e]=r,pi=(t,e,r)=>S1(t,typeof e!="symbol"?e+"":e,r);let P1=class{constructor(e){pi(this,"name","multiversx"),pi(this,"client"),pi(this,"httpProviders"),pi(this,"events"),pi(this,"namespace"),pi(this,"chainId"),this.namespace=e.namespace,this.events=ge("events"),this.client=ge("client"),this.chainId=this.getDefaultChain(),this.httpProviders=this.createHttpProviders()}updateNamespace(e){this.namespace=Object.assign(this.namespace,e)}requestAccounts(){return this.getAccounts()}request(e){return this.namespace.methods.includes(e.request.method)?this.client.request(e):this.getHttpProvider().request(e.request)}setDefaultChain(e,r){this.httpProviders[e]||this.setHttpProvider(e,r),this.chainId=e,this.events.emit(xt.DEFAULT_CHAIN_CHANGED,`${this.name}:${e}`)}getDefaultChain(){if(this.chainId)return this.chainId;if(this.namespace.defaultChain)return this.namespace.defaultChain;const e=this.namespace.chains[0];if(!e)throw new Error("ChainId not found");return e.split(":")[1]}getAccounts(){const e=this.namespace.accounts;return e?[...new Set(e.filter(r=>r.split(":")[1]===this.chainId.toString()).map(r=>r.split(":")[2]))]:[]}createHttpProviders(){const e={};return this.namespace.chains.forEach(r=>{var i;const n=si(r);e[n]=this.createHttpProvider(n,(i=this.namespace.rpcMap)==null?void 0:i[r])}),e}getHttpProvider(){const e=`${this.name}:${this.chainId}`,r=this.httpProviders[e];if(typeof r>"u")throw new Error(`JSON-RPC provider for ${e} not found`);return r}setHttpProvider(e,r){const i=this.createHttpProvider(e,r);i&&(this.httpProviders[e]=i)}createHttpProvider(e,r){const i=r||lt(e,this.namespace,this.client.core.projectId);if(!i)throw new Error(`No RPC url provided for chainId: ${e}`);return new Tt(new Ot(i,ge("disableProviderPing")))}};var _1=Object.defineProperty,T1=(t,e,r)=>e in t?_1(t,e,{enumerable:!0,configurable:!0,writable:!0,value:r}):t[e]=r,fi=(t,e,r)=>T1(t,typeof e!="symbol"?e+"":e,r);let O1=class{constructor(e){fi(this,"name","near"),fi(this,"client"),fi(this,"httpProviders"),fi(this,"events"),fi(this,"namespace"),fi(this,"chainId"),this.namespace=e.namespace,this.events=ge("events"),this.client=ge("client"),this.chainId=this.getDefaultChain(),this.httpProviders=this.createHttpProviders()}updateNamespace(e){this.namespace=Object.assign(this.namespace,e)}requestAccounts(){return this.getAccounts()}getDefaultChain(){if(this.chainId)return this.chainId;if(this.namespace.defaultChain)return this.namespace.defaultChain;const e=this.namespace.chains[0];if(!e)throw new Error("ChainId not found");return e.split(":")[1]}request(e){return this.namespace.methods.includes(e.request.method)?this.client.request(e):this.getHttpProvider().request(e.request)}setDefaultChain(e,r){if(this.chainId=e,!this.httpProviders[e]){const i=r||lt(`${this.name}:${e}`,this.namespace);if(!i)throw new Error(`No RPC url provided for chainId: ${e}`);this.setHttpProvider(e,i)}this.events.emit(xt.DEFAULT_CHAIN_CHANGED,`${this.name}:${this.chainId}`)}getAccounts(){const e=this.namespace.accounts;return e?e.filter(r=>r.split(":")[1]===this.chainId.toString()).map(r=>r.split(":")[2])||[]:[]}createHttpProviders(){const e={};return this.namespace.chains.forEach(r=>{var i;e[r]=this.createHttpProvider(r,(i=this.namespace.rpcMap)==null?void 0:i[r])}),e}getHttpProvider(){const e=`${this.name}:${this.chainId}`,r=this.httpProviders[e];if(typeof r>"u")throw new Error(`JSON-RPC provider for ${e} not found`);return r}setHttpProvider(e,r){const i=this.createHttpProvider(e,r);i&&(this.httpProviders[e]=i)}createHttpProvider(e,r){const i=r||lt(e,this.namespace);return typeof i>"u"?void 0:new Tt(new Ot(i,ge("disableProviderPing")))}};var $1=Object.defineProperty,R1=(t,e,r)=>e in t?$1(t,e,{enumerable:!0,configurable:!0,writable:!0,value:r}):t[e]=r,gi=(t,e,r)=>R1(t,typeof e!="symbol"?e+"":e,r);let L1=class{constructor(e){gi(this,"name","tezos"),gi(this,"client"),gi(this,"httpProviders"),gi(this,"events"),gi(this,"namespace"),gi(this,"chainId"),this.namespace=e.namespace,this.events=ge("events"),this.client=ge("client"),this.chainId=this.getDefaultChain(),this.httpProviders=this.createHttpProviders()}updateNamespace(e){this.namespace=Object.assign(this.namespace,e)}requestAccounts(){return this.getAccounts()}getDefaultChain(){if(this.chainId)return this.chainId;if(this.namespace.defaultChain)return this.namespace.defaultChain;const e=this.namespace.chains[0];if(!e)throw new Error("ChainId not found");return e.split(":")[1]}request(e){return this.namespace.methods.includes(e.request.method)?this.client.request(e):this.getHttpProvider().request(e.request)}setDefaultChain(e,r){if(this.chainId=e,!this.httpProviders[e]){const i=r||lt(`${this.name}:${e}`,this.namespace);if(!i)throw new Error(`No RPC url provided for chainId: ${e}`);this.setHttpProvider(e,i)}this.events.emit(xt.DEFAULT_CHAIN_CHANGED,`${this.name}:${this.chainId}`)}getAccounts(){const e=this.namespace.accounts;return e?e.filter(r=>r.split(":")[1]===this.chainId.toString()).map(r=>r.split(":")[2])||[]:[]}createHttpProviders(){const e={};return this.namespace.chains.forEach(r=>{e[r]=this.createHttpProvider(r)}),e}getHttpProvider(){const e=`${this.name}:${this.chainId}`,r=this.httpProviders[e];if(typeof r>"u")throw new Error(`JSON-RPC provider for ${e} not found`);return r}setHttpProvider(e,r){const i=this.createHttpProvider(e,r);i&&(this.httpProviders[e]=i)}createHttpProvider(e,r){const i=r||lt(e,this.namespace);return typeof i>"u"?void 0:new Tt(new Ot(i))}};var B1=Object.defineProperty,U1=(t,e,r)=>e in t?B1(t,e,{enumerable:!0,configurable:!0,writable:!0,value:r}):t[e]=r,wi=(t,e,r)=>U1(t,typeof e!="symbol"?e+"":e,r);let M1=class{constructor(e){wi(this,"name",Si),wi(this,"client"),wi(this,"httpProviders"),wi(this,"events"),wi(this,"namespace"),wi(this,"chainId"),this.namespace=e.namespace,this.events=ge("events"),this.client=ge("client"),this.chainId=this.getDefaultChain(),this.httpProviders=this.createHttpProviders()}updateNamespace(e){this.namespace.chains=[...new Set((this.namespace.chains||[]).concat(e.chains||[]))],this.namespace.accounts=[...new Set((this.namespace.accounts||[]).concat(e.accounts||[]))],this.namespace.methods=[...new Set((this.namespace.methods||[]).concat(e.methods||[]))],this.namespace.events=[...new Set((this.namespace.events||[]).concat(e.events||[]))],this.httpProviders=this.createHttpProviders()}requestAccounts(){return this.getAccounts()}request(e){return this.namespace.methods.includes(e.request.method)?this.client.request(e):this.getHttpProvider(e.chainId).request(e.request)}setDefaultChain(e,r){this.httpProviders[e]||this.setHttpProvider(e,r),this.chainId=e,this.events.emit(xt.DEFAULT_CHAIN_CHANGED,`${this.name}:${e}`)}getDefaultChain(){if(this.chainId)return this.chainId;if(this.namespace.defaultChain)return this.namespace.defaultChain;const e=this.namespace.chains[0];if(!e)throw new Error("ChainId not found");return e.split(":")[1]}getAccounts(){const e=this.namespace.accounts;return e?[...new Set(e.filter(r=>r.split(":")[1]===this.chainId.toString()).map(r=>r.split(":")[2]))]:[]}createHttpProviders(){var e,r;const i={};return(r=(e=this.namespace)==null?void 0:e.accounts)==null||r.forEach(n=>{const s=cd(n);i[`${s.namespace}:${s.reference}`]=this.createHttpProvider(n)}),i}getHttpProvider(e){const r=this.httpProviders[e];if(typeof r>"u")throw new Error(`JSON-RPC provider for ${e} not found`);return r}setHttpProvider(e,r){const i=this.createHttpProvider(e,r);i&&(this.httpProviders[e]=i)}createHttpProvider(e,r){const i=r||lt(e,this.namespace,this.client.core.projectId);if(!i)throw new Error(`No RPC url provided for chainId: ${e}`);return new Tt(new Ot(i,ge("disableProviderPing")))}};var z1=Object.defineProperty,j1=Object.defineProperties,D1=Object.getOwnPropertyDescriptors,kl=Object.getOwnPropertySymbols,H1=Object.prototype.hasOwnProperty,W1=Object.prototype.propertyIsEnumerable,nc=(t,e,r)=>e in t?z1(t,e,{enumerable:!0,configurable:!0,writable:!0,value:r}):t[e]=r,Ns=(t,e)=>{for(var r in e||(e={}))H1.call(e,r)&&nc(t,r,e[r]);if(kl)for(var r of kl(e))W1.call(e,r)&&nc(t,r,e[r]);return t},ra=(t,e)=>j1(t,D1(e)),ht=(t,e,r)=>nc(t,typeof e!="symbol"?e+"":e,r);class Uo{constructor(e){ht(this,"client"),ht(this,"namespaces"),ht(this,"optionalNamespaces"),ht(this,"sessionProperties"),ht(this,"scopedProperties"),ht(this,"events",new r0),ht(this,"rpcProviders",{}),ht(this,"session"),ht(this,"providerOpts"),ht(this,"logger"),ht(this,"uri"),ht(this,"disableProviderPing",!1),this.providerOpts=e,this.logger=typeof(e==null?void 0:e.logger)<"u"&&typeof(e==null?void 0:e.logger)!="string"?e.logger:i0(n0({level:(e==null?void 0:e.logger)||pl})),this.disableProviderPing=(e==null?void 0:e.disableProviderPing)||!1}static async init(e){const r=new Uo(e);return await r.initialize(),r}async request(e,r,i){const[n,s]=this.validateChain(r);if(!this.session)throw new Error("Please call connect() before request()");return await this.getProvider(n).request({request:Ns({},e),chainId:`${n}:${s}`,topic:this.session.topic,expiry:i})}sendAsync(e,r,i,n){const s=new Date().getTime();this.request(e,i,n).then(o=>r(null,s0(s,o))).catch(o=>r(o,void 0))}async enable(){if(!this.client)throw new Error("Sign Client not initialized");return this.session||await this.connect({namespaces:this.namespaces,optionalNamespaces:this.optionalNamespaces,sessionProperties:this.sessionProperties,scopedProperties:this.scopedProperties}),await this.requestAccounts()}async disconnect(){var e;if(!this.session)throw new Error("Please call connect() before enable()");await this.client.disconnect({topic:(e=this.session)==null?void 0:e.topic,reason:tc("USER_DISCONNECTED")}),await this.cleanup()}async connect(e){if(!this.client)throw new Error("Sign Client not initialized");if(this.setNamespaces(e),await this.cleanupPendingPairings(),!e.skipPairing)return await this.pair(e.pairingTopic)}async authenticate(e,r){if(!this.client)throw new Error("Sign Client not initialized");this.setNamespaces(e),await this.cleanupPendingPairings();const{uri:i,response:n}=await this.client.authenticate(e,r);i&&(this.uri=i,this.events.emit("display_uri",i));const s=await n();if(this.session=s.session,this.session){const o=Cl(this.session.namespaces);this.namespaces=Qo(this.namespaces,o),await this.persist("namespaces",this.namespaces),this.onConnect()}return s}on(e,r){this.events.on(e,r)}once(e,r){this.events.once(e,r)}removeListener(e,r){this.events.removeListener(e,r)}off(e,r){this.events.off(e,r)}get isWalletConnect(){return!0}async pair(e){const{uri:r,approval:i}=await this.client.connect({pairingTopic:e,requiredNamespaces:this.namespaces,optionalNamespaces:this.optionalNamespaces,sessionProperties:this.sessionProperties,scopedProperties:this.scopedProperties});r&&(this.uri=r,this.events.emit("display_uri",r));const n=await i();this.session=n;const s=Cl(n.namespaces);return this.namespaces=Qo(this.namespaces,s),await this.persist("namespaces",this.namespaces),await this.persist("optionalNamespaces",this.optionalNamespaces),this.onConnect(),this.session}setDefaultChain(e,r){try{if(!this.session)return;const[i,n]=this.validateChain(e),s=this.getProvider(i);s.name===Si?s.setDefaultChain(`${i}:${n}`,r):s.setDefaultChain(n,r)}catch(i){if(!/Please call connect/.test(i.message))throw i}}async cleanupPendingPairings(e={}){this.logger.info("Cleaning up inactive pairings...");const r=this.client.pairing.getAll();if(zi(r)){for(const i of r)e.deletePairings?this.client.core.expirer.set(i.topic,0):await this.client.core.relayer.subscriber.unsubscribe(i.topic);this.logger.info(`Inactive pairings cleared: ${r.length}`)}}abortPairingAttempt(){this.logger.warn("abortPairingAttempt is deprecated. This is now a no-op.")}async checkStorage(){this.namespaces=await this.getFromStore("namespaces")||{},this.optionalNamespaces=await this.getFromStore("optionalNamespaces")||{},this.session&&this.createProviders()}async initialize(){this.logger.trace("Initialized"),await this.createClient(),await this.checkStorage(),this.registerEventListeners()}async createClient(){var e,r;if(this.client=this.providerOpts.client||await o0.init({core:this.providerOpts.core,logger:this.providerOpts.logger||pl,relayUrl:this.providerOpts.relayUrl||b0,projectId:this.providerOpts.projectId,metadata:this.providerOpts.metadata,storageOptions:this.providerOpts.storageOptions,storage:this.providerOpts.storage,name:this.providerOpts.name,customStoragePrefix:this.providerOpts.customStoragePrefix,telemetryEnabled:this.providerOpts.telemetryEnabled}),this.providerOpts.session)try{this.session=this.client.session.get(this.providerOpts.session.topic)}catch(i){throw this.logger.error("Failed to get session",i),new Error(`The provided session: ${(r=(e=this.providerOpts)==null?void 0:e.session)==null?void 0:r.topic} doesn't exist in the Sign client`)}else{const i=this.client.session.getAll();this.session=i[0]}this.logger.trace("SignClient Initialized")}createProviders(){if(!this.client)throw new Error("Sign Client not initialized");if(!this.session)throw new Error("Session not initialized. Please call connect() before enable()");const e=[...new Set(Object.keys(this.session.namespaces).map(r=>Pn(r)))];ta("client",this.client),ta("events",this.events),ta("disableProviderPing",this.disableProviderPing),e.forEach(r=>{if(!this.session)return;const i=r1(r,this.session),n=wd(i),s=Qo(this.namespaces,this.optionalNamespaces),o=ra(Ns({},s[r]),{accounts:i,chains:n});switch(r){case"eip155":this.rpcProviders[r]=new d1({namespace:o});break;case"algorand":this.rpcProviders[r]=new y1({namespace:o});break;case"solana":this.rpcProviders[r]=new f1({namespace:o});break;case"cosmos":this.rpcProviders[r]=new m1({namespace:o});break;case"polkadot":this.rpcProviders[r]=new s1({namespace:o});break;case"cip34":this.rpcProviders[r]=new E1({namespace:o});break;case"elrond":this.rpcProviders[r]=new I1({namespace:o});break;case"multiversx":this.rpcProviders[r]=new P1({namespace:o});break;case"near":this.rpcProviders[r]=new O1({namespace:o});break;case"tezos":this.rpcProviders[r]=new L1({namespace:o});break;default:this.rpcProviders[Si]?this.rpcProviders[Si].updateNamespace(o):this.rpcProviders[Si]=new M1({namespace:o})}})}registerEventListeners(){if(typeof this.client>"u")throw new Error("Sign Client is not initialized");this.client.on("session_ping",e=>{var r;const{topic:i}=e;i===((r=this.session)==null?void 0:r.topic)&&this.events.emit("session_ping",e)}),this.client.on("session_event",e=>{var r;const{params:i,topic:n}=e;if(n!==((r=this.session)==null?void 0:r.topic))return;const{event:s}=i;if(s.name==="accountsChanged"){const o=s.data;o&&zi(o)&&this.events.emit("accountsChanged",o.map(yl))}else if(s.name==="chainChanged"){const o=i.chainId,a=i.event.data,c=Pn(o),l=ea(o)!==ea(a)?`${c}:${ea(a)}`:o;this.onChainChanged(l)}else this.events.emit(s.name,s.data);this.events.emit("session_event",e)}),this.client.on("session_update",({topic:e,params:r})=>{var i,n;if(e!==((i=this.session)==null?void 0:i.topic))return;const{namespaces:s}=r,o=(n=this.client)==null?void 0:n.session.get(e);this.session=ra(Ns({},o),{namespaces:s}),this.onSessionUpdate(),this.events.emit("session_update",{topic:e,params:r})}),this.client.on("session_delete",async e=>{var r;e.topic===((r=this.session)==null?void 0:r.topic)&&(await this.cleanup(),this.events.emit("session_delete",e),this.events.emit("disconnect",ra(Ns({},tc("USER_DISCONNECTED")),{data:e.topic})))}),this.on(xt.DEFAULT_CHAIN_CHANGED,e=>{this.onChainChanged(e,!0)})}getProvider(e){return this.rpcProviders[e]||this.rpcProviders[Si]}onSessionUpdate(){Object.keys(this.rpcProviders).forEach(e=>{var r;this.getProvider(e).updateNamespace((r=this.session)==null?void 0:r.namespaces[e])})}setNamespaces(e){const{namespaces:r,optionalNamespaces:i,sessionProperties:n,scopedProperties:s}=e;r&&Object.keys(r).length&&(this.namespaces=r),i&&Object.keys(i).length&&(this.optionalNamespaces=i),this.sessionProperties=n,this.scopedProperties=s}validateChain(e){const[r,i]=(e==null?void 0:e.split(":"))||["",""];if(!this.namespaces||!Object.keys(this.namespaces).length)return[r,i];if(r&&!Object.keys(this.namespaces||{}).map(o=>Pn(o)).includes(r))throw new Error(`Namespace '${r}' is not configured. Please call connect() first with namespace config.`);if(r&&i)return[r,i];const n=Pn(Object.keys(this.namespaces)[0]),s=this.rpcProviders[n].getDefaultChain();return[n,s]}async requestAccounts(){const[e]=this.validateChain();return await this.getProvider(e).requestAccounts()}async onChainChanged(e,r=!1){if(!this.namespaces)return;const[i,n]=this.validateChain(e);if(!n)return;this.updateNamespaceChain(i,n),this.events.emit("chainChanged",n);const s=this.getProvider(i).getDefaultChain();r||this.getProvider(i).setDefaultChain(n),this.emitAccountsChangedOnChainChange({namespace:i,previousChainId:s,newChainId:e}),await this.persist("namespaces",this.namespaces)}emitAccountsChangedOnChainChange({namespace:e,previousChainId:r,newChainId:i}){var n,s;try{if(r===i)return;const o=(s=(n=this.session)==null?void 0:n.namespaces[e])==null?void 0:s.accounts;if(!o)return;const a=o.filter(c=>c.includes(`${i}:`)).map(yl);if(!zi(a))return;this.events.emit("accountsChanged",a)}catch(o){this.logger.warn("Failed to emit accountsChanged on chain change",o)}}updateNamespaceChain(e,r){if(!this.namespaces)return;const i=this.namespaces[e]?e:`${e}:${r}`,n={chains:[],methods:[],events:[],defaultChain:r};this.namespaces[i]?this.namespaces[i]&&(this.namespaces[i].defaultChain=r):this.namespaces[i]=n}onConnect(){this.createProviders(),this.events.emit("connect",{session:this.session})}async cleanup(){this.namespaces=void 0,this.optionalNamespaces=void 0,this.sessionProperties=void 0,await this.deleteFromStore("namespaces"),await this.deleteFromStore("optionalNamespaces"),await this.deleteFromStore("sessionProperties"),this.session=void 0,await this.cleanupPendingPairings({deletePairings:!0}),await this.cleanupStorage()}async persist(e,r){var i;const n=((i=this.session)==null?void 0:i.topic)||"";await this.client.core.storage.setItem(`${ks}/${e}${n}`,r)}async getFromStore(e){var r;const i=((r=this.session)==null?void 0:r.topic)||"";return await this.client.core.storage.getItem(`${ks}/${e}${i}`)}async deleteFromStore(e){var r;const i=((r=this.session)==null?void 0:r.topic)||"";await this.client.core.storage.removeItem(`${ks}/${e}${i}`)}async cleanupStorage(){var e;try{if(((e=this.client)==null?void 0:e.session.length)>0)return;const r=await this.client.core.storage.getKeys();for(const i of r)i.startsWith(ks)&&await this.client.core.storage.removeItem(i)}catch(r){this.logger.warn("Failed to cleanup storage",r)}}}const F1=Uo,xo={};var Il={};const q1="wc",V1="ethereum_provider",Z1=`${q1}@2:${V1}:`,G1="https://rpc.walletconnect.org/v1/",sc=["eth_sendTransaction","personal_sign"],K1=["eth_accounts","eth_requestAccounts","eth_sendRawTransaction","eth_sign","eth_signTransaction","eth_signTypedData","eth_signTypedData_v3","eth_signTypedData_v4","eth_sendTransaction","personal_sign","wallet_switchEthereumChain","wallet_addEthereumChain","wallet_getPermissions","wallet_requestPermissions","wallet_registerOnboarding","wallet_watchAsset","wallet_scanQRCode","wallet_sendCalls","wallet_getCapabilities","wallet_getCallsStatus","wallet_showCallsStatus"],oc=["chainChanged","accountsChanged"],Y1=["chainChanged","accountsChanged","message","disconnect","connect"];var J1=Object.defineProperty,X1=Object.defineProperties,Q1=Object.getOwnPropertyDescriptors,Nl=Object.getOwnPropertySymbols,ep=Object.prototype.hasOwnProperty,tp=Object.prototype.propertyIsEnumerable,ac=(t,e,r)=>e in t?J1(t,e,{enumerable:!0,configurable:!0,writable:!0,value:r}):t[e]=r,zr=(t,e)=>{for(var r in e||(e={}))ep.call(e,r)&&ac(t,r,e[r]);if(Nl)for(var r of Nl(e))tp.call(e,r)&&ac(t,r,e[r]);return t},rn=(t,e)=>X1(t,Q1(e)),it=(t,e,r)=>ac(t,typeof e!="symbol"?e+"":e,r);function Eo(t){return Number(t[0].split(":")[1])}function Ss(t){return`0x${t.toString(16)}`}function rp(t){const{chains:e,optionalChains:r,methods:i,optionalMethods:n,events:s,optionalEvents:o,rpcMap:a}=t;if(!zi(e))throw new Error("Invalid chains");const c={chains:e,methods:i||sc,events:s||oc,rpcMap:zr({},e.length?{[Eo(e)]:a[Eo(e)]}:{})},l=s==null?void 0:s.filter(p=>!oc.includes(p)),u=i==null?void 0:i.filter(p=>!sc.includes(p));if(!r&&!o&&!n&&!(l!=null&&l.length)&&!(u!=null&&u.length))return{required:e.length?c:void 0};const d=(l==null?void 0:l.length)&&(u==null?void 0:u.length)||!r,h={chains:[...new Set(d?c.chains.concat(r||[]):r)],methods:[...new Set(c.methods.concat(n!=null&&n.length?n:K1))],events:[...new Set(c.events.concat(o!=null&&o.length?o:Y1))],rpcMap:a};return{required:e.length?c:void 0,optional:r.length?h:void 0}}class Tc{constructor(){it(this,"events",new od.EventEmitter),it(this,"namespace","eip155"),it(this,"accounts",[]),it(this,"signer"),it(this,"chainId",1),it(this,"modal"),it(this,"rpc"),it(this,"STORAGE_KEY",Z1),it(this,"on",(e,r)=>(this.events.on(e,r),this)),it(this,"once",(e,r)=>(this.events.once(e,r),this)),it(this,"removeListener",(e,r)=>(this.events.removeListener(e,r),this)),it(this,"off",(e,r)=>(this.events.off(e,r),this)),it(this,"parseAccount",e=>this.isCompatibleChainId(e)?this.parseAccountId(e).address:e),this.signer={},this.rpc={}}static async init(e){const r=new Tc;return await r.initialize(e),r}async request(e,r){return await this.signer.request(e,this.formatChainId(this.chainId),r)}sendAsync(e,r,i){this.signer.sendAsync(e,r,this.formatChainId(this.chainId),i)}get connected(){return this.signer.client?this.signer.client.core.relayer.connected:!1}get connecting(){return this.signer.client?this.signer.client.core.relayer.connecting:!1}async enable(){return this.session||await this.connect(),await this.request({method:"eth_requestAccounts"})}async connect(e){var r;if(!this.signer.client)throw new Error("Provider not initialized. Call init() first");this.loadConnectOpts(e);const{required:i,optional:n}=rp(this.rpc);try{const s=await new Promise(async(a,c)=>{var l,u;this.rpc.showQrModal&&((l=this.modal)==null||l.open(),(u=this.modal)==null||u.subscribeState(h=>{!h.open&&!this.signer.session&&(this.signer.abortPairingAttempt(),c(new Error("Connection request reset. Please try again.")))}));const d=e!=null&&e.scopedProperties?{[this.namespace]:e.scopedProperties}:void 0;await this.signer.connect(rn(zr({namespaces:zr({},i&&{[this.namespace]:i})},n&&{optionalNamespaces:{[this.namespace]:n}}),{pairingTopic:e==null?void 0:e.pairingTopic,scopedProperties:d})).then(h=>{a(h)}).catch(h=>{var p;(p=this.modal)==null||p.showErrorMessage("Unable to connect"),c(new Error(h.message))})});if(!s)return;const o=nl(s.namespaces,[this.namespace]);this.setChainIds(this.rpc.chains.length?this.rpc.chains:o),this.setAccounts(o),this.events.emit("connect",{chainId:Ss(this.chainId)})}catch(s){throw this.signer.logger.error(s),s}finally{(r=this.modal)==null||r.close()}}async authenticate(e,r){var i;if(!this.signer.client)throw new Error("Provider not initialized. Call init() first");this.loadConnectOpts({chains:e==null?void 0:e.chains});try{const n=await new Promise(async(o,a)=>{var c,l;this.rpc.showQrModal&&((c=this.modal)==null||c.open(),(l=this.modal)==null||l.subscribeState(u=>{!u.open&&!this.signer.session&&(this.signer.abortPairingAttempt(),a(new Error("Connection request reset. Please try again.")))})),await this.signer.authenticate(rn(zr({},e),{chains:this.rpc.chains}),r).then(u=>{o(u)}).catch(u=>{var d;(d=this.modal)==null||d.showErrorMessage("Unable to connect"),a(new Error(u.message))})}),s=n.session;if(s){const o=nl(s.namespaces,[this.namespace]);this.setChainIds(this.rpc.chains.length?this.rpc.chains:o),this.setAccounts(o),this.events.emit("connect",{chainId:Ss(this.chainId)})}return n}catch(n){throw this.signer.logger.error(n),n}finally{(i=this.modal)==null||i.close()}}async disconnect(){this.session&&await this.signer.disconnect(),this.reset()}get isWalletConnect(){return!0}get session(){return this.signer.session}registerEventListeners(){this.signer.on("session_event",e=>{const{params:r}=e,{event:i}=r;i.name==="accountsChanged"?(this.accounts=this.parseAccounts(i.data),this.events.emit("accountsChanged",this.accounts)):i.name==="chainChanged"?this.setChainId(this.formatChainId(i.data)):this.events.emit(i.name,i.data),this.events.emit("session_event",e)}),this.signer.on("accountsChanged",e=>{this.accounts=this.parseAccounts(e),this.events.emit("accountsChanged",this.accounts)}),this.signer.on("chainChanged",e=>{const r=parseInt(e);this.chainId=r,this.events.emit("chainChanged",Ss(this.chainId)),this.persist()}),this.signer.on("session_update",e=>{this.events.emit("session_update",e)}),this.signer.on("session_delete",e=>{this.reset(),this.events.emit("session_delete",e),this.events.emit("disconnect",rn(zr({},tc("USER_DISCONNECTED")),{data:e.topic,name:"USER_DISCONNECTED"}))}),this.signer.on("display_uri",e=>{this.events.emit("display_uri",e)})}switchEthereumChain(e){this.request({method:"wallet_switchEthereumChain",params:[{chainId:e.toString(16)}]})}isCompatibleChainId(e){return typeof e=="string"?e.startsWith(`${this.namespace}:`):!1}formatChainId(e){return`${this.namespace}:${e}`}parseChainId(e){return Number(e.split(":")[1])}setChainIds(e){const r=e.filter(i=>this.isCompatibleChainId(i)).map(i=>this.parseChainId(i));r.length&&(this.chainId=r[0],this.events.emit("chainChanged",Ss(this.chainId)),this.persist())}setChainId(e){if(this.isCompatibleChainId(e)){const r=this.parseChainId(e);this.chainId=r,this.switchEthereumChain(r)}}parseAccountId(e){const[r,i,n]=e.split(":");return{chainId:`${r}:${i}`,address:n}}setAccounts(e){this.accounts=e.filter(r=>this.parseChainId(this.parseAccountId(r).chainId)===this.chainId).map(r=>this.parseAccountId(r).address),this.events.emit("accountsChanged",this.accounts)}getRpcConfig(e){var r,i;const n=(r=e==null?void 0:e.chains)!=null?r:[],s=(i=e==null?void 0:e.optionalChains)!=null?i:[],o=n.concat(s);if(!o.length)throw new Error("No chains specified in either `chains` or `optionalChains`");const a=n.length?(e==null?void 0:e.methods)||sc:[],c=n.length?(e==null?void 0:e.events)||oc:[],l=(e==null?void 0:e.optionalMethods)||[],u=(e==null?void 0:e.optionalEvents)||[],d=(e==null?void 0:e.rpcMap)||this.buildRpcMap(o,e.projectId),h=(e==null?void 0:e.qrModalOptions)||void 0;return{chains:n==null?void 0:n.map(p=>this.formatChainId(p)),optionalChains:s.map(p=>this.formatChainId(p)),methods:a,events:c,optionalMethods:l,optionalEvents:u,rpcMap:d,showQrModal:!!(e!=null&&e.showQrModal),qrModalOptions:h,projectId:e.projectId,metadata:e.metadata}}buildRpcMap(e,r){const i={};return e.forEach(n=>{i[n]=this.getRpcUrl(n,r)}),i}async initialize(e){if(this.rpc=this.getRpcConfig(e),this.chainId=this.rpc.chains.length?Eo(this.rpc.chains):Eo(this.rpc.optionalChains),this.signer=await F1.init({projectId:this.rpc.projectId,metadata:this.rpc.metadata,disableProviderPing:e.disableProviderPing,relayUrl:e.relayUrl,storage:e.storage,storageOptions:e.storageOptions,customStoragePrefix:e.customStoragePrefix,telemetryEnabled:e.telemetryEnabled,logger:e.logger}),this.registerEventListeners(),await this.loadPersistedSession(),this.rpc.showQrModal){let r;try{const{createAppKit:i}=await Promise.resolve().then(function(){return p2}),{convertWCMToAppKitOptions:n}=await Promise.resolve().then(function(){return A2}),s=n(rn(zr({},this.rpc.qrModalOptions),{chains:[...new Set([...this.rpc.chains,...this.rpc.optionalChains])],metadata:this.rpc.metadata,projectId:this.rpc.projectId}));if(!s.networks.length)throw new Error("No networks found for WalletConnect·");r=i(rn(zr({},s),{universalProvider:this.signer,manualWCControl:!0}))}catch{throw new Error("To use QR modal, please install @reown/appkit package")}if(r)try{this.modal=r}catch(i){throw this.signer.logger.error(i),new Error("Could not generate WalletConnectModal Instance")}}}loadConnectOpts(e){if(!e)return;const{chains:r,optionalChains:i,rpcMap:n}=e;r&&zi(r)&&(this.rpc.chains=r.map(s=>this.formatChainId(s)),r.forEach(s=>{this.rpc.rpcMap[s]=(n==null?void 0:n[s])||this.getRpcUrl(s)})),i&&zi(i)&&(this.rpc.optionalChains=[],this.rpc.optionalChains=i==null?void 0:i.map(s=>this.formatChainId(s)),i.forEach(s=>{this.rpc.rpcMap[s]=(n==null?void 0:n[s])||this.getRpcUrl(s)}))}getRpcUrl(e,r){var i;return((i=this.rpc.rpcMap)==null?void 0:i[e])||`${G1}?chainId=eip155:${e}&projectId=${r||this.rpc.projectId}`}async loadPersistedSession(){if(this.session)try{const e=await this.signer.client.core.storage.getItem(`${this.STORAGE_KEY}/chainId`),r=this.session.namespaces[`${this.namespace}:${e}`]?this.session.namespaces[`${this.namespace}:${e}`]:this.session.namespaces[this.namespace];this.setChainIds(e?[this.formatChainId(e)]:r==null?void 0:r.accounts),this.setAccounts(r==null?void 0:r.accounts)}catch(e){this.signer.logger.error("Failed to load persisted session, clearing state..."),this.signer.logger.error(e),await this.disconnect().catch(r=>this.signer.logger.warn(r))}}reset(){this.chainId=1,this.accounts=[]}persist(){this.session&&this.signer.client.core.storage.setItem(`${this.STORAGE_KEY}/chainId`,this.chainId)}parseAccounts(e){return typeof e=="string"||e instanceof String?[this.parseAccount(e)]:e.map(r=>this.parseAccount(r))}}const U4=Tc;var Mo=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{},vd={exports:{}};(function(t,e){(function(r,i){t.exports=i()})(Mo,function(){var r=1e3,i=6e4,n=36e5,s="millisecond",o="second",a="minute",c="hour",l="day",u="week",d="month",h="quarter",p="year",v="date",g="Invalid Date",b=/^(\d{4})[-/]?(\d{1,2})?[-/]?(\d{0,2})[Tt\s]*(\d{1,2})?:?(\d{1,2})?:?(\d{1,2})?[.:]?(\d+)?$/,C=/\[([^\]]+)]|Y{1,4}|M{1,4}|D{1,2}|d{1,4}|H{1,2}|h{1,2}|a|A|m{1,2}|s{1,2}|Z{1,2}|SSS/g,A={name:"en",weekdays:"Sunday_Monday_Tuesday_Wednesday_Thursday_Friday_Saturday".split("_"),months:"January_February_March_April_May_June_July_August_September_October_November_December".split("_"),ordinal:function(S){var f=["th","st","nd","rd"],m=S%100;return"["+S+(f[(m-20)%10]||f[m]||f[0])+"]"}},x=function(S,f,m){var I=String(S);return!I||I.length>=f?S:""+Array(f+1-I.length).join(m)+S},k={s:x,z:function(S){var f=-S.utcOffset(),m=Math.abs(f),I=Math.floor(m/60),N=m%60;return(f<=0?"+":"-")+x(I,2,"0")+":"+x(N,2,"0")},m:function S(f,m){if(f.date()<m.date())return-S(m,f);var I=12*(m.year()-f.year())+(m.month()-f.month()),N=f.clone().add(I,d),B=m-N<0,L=f.clone().add(I+(B?-1:1),d);return+(-(I+(m-N)/(B?N-L:L-N))||0)},a:function(S){return S<0?Math.ceil(S)||0:Math.floor(S)},p:function(S){return{M:d,y:p,w:u,d:l,D:v,h:c,m:a,s:o,ms:s,Q:h}[S]||String(S||"").toLowerCase().replace(/s$/,"")},u:function(S){return S===void 0}},P="en",T={};T[P]=A;var j="$isDayjsObject",$=function(S){return S instanceof X||!(!S||!S[j])},_=function S(f,m,I){var N;if(!f)return P;if(typeof f=="string"){var B=f.toLowerCase();T[B]&&(N=B),m&&(T[B]=m,N=B);var L=f.split("-");if(!N&&L.length>1)return S(L[0])}else{var ne=f.name;T[ne]=f,N=ne}return!I&&N&&(P=N),N||!I&&P},R=function(S,f){if($(S))return S.clone();var m=typeof f=="object"?f:{};return m.date=S,m.args=arguments,new X(m)},U=k;U.l=_,U.i=$,U.w=function(S,f){return R(S,{locale:f.$L,utc:f.$u,x:f.$x,$offset:f.$offset})};var X=function(){function S(m){this.$L=_(m.locale,null,!0),this.parse(m),this.$x=this.$x||m.x||{},this[j]=!0}var f=S.prototype;return f.parse=function(m){this.$d=function(I){var N=I.date,B=I.utc;if(N===null)return new Date(NaN);if(U.u(N))return new Date;if(N instanceof Date)return new Date(N);if(typeof N=="string"&&!/Z$/i.test(N)){var L=N.match(b);if(L){var ne=L[2]-1||0,ue=(L[7]||"0").substring(0,3);return B?new Date(Date.UTC(L[1],ne,L[3]||1,L[4]||0,L[5]||0,L[6]||0,ue)):new Date(L[1],ne,L[3]||1,L[4]||0,L[5]||0,L[6]||0,ue)}}return new Date(N)}(m),this.init()},f.init=function(){var m=this.$d;this.$y=m.getFullYear(),this.$M=m.getMonth(),this.$D=m.getDate(),this.$W=m.getDay(),this.$H=m.getHours(),this.$m=m.getMinutes(),this.$s=m.getSeconds(),this.$ms=m.getMilliseconds()},f.$utils=function(){return U},f.isValid=function(){return this.$d.toString()!==g},f.isSame=function(m,I){var N=R(m);return this.startOf(I)<=N&&N<=this.endOf(I)},f.isAfter=function(m,I){return R(m)<this.startOf(I)},f.isBefore=function(m,I){return this.endOf(I)<R(m)},f.$g=function(m,I,N){return U.u(m)?this[I]:this.set(N,m)},f.unix=function(){return Math.floor(this.valueOf()/1e3)},f.valueOf=function(){return this.$d.getTime()},f.startOf=function(m,I){var N=this,B=!!U.u(I)||I,L=U.p(m),ne=function(Ve,Re){var Ze=U.w(N.$u?Date.UTC(N.$y,Re,Ve):new Date(N.$y,Re,Ve),N);return B?Ze:Ze.endOf(l)},ue=function(Ve,Re){return U.w(N.toDate()[Ve].apply(N.toDate("s"),(B?[0,0,0,0]:[23,59,59,999]).slice(Re)),N)},fe=this.$W,se=this.$M,xe=this.$D,He="set"+(this.$u?"UTC":"");switch(L){case p:return B?ne(1,0):ne(31,11);case d:return B?ne(1,se):ne(0,se+1);case u:var Et=this.$locale().weekStart||0,tt=(fe<Et?fe+7:fe)-Et;return ne(B?xe-tt:xe+(6-tt),se);case l:case v:return ue(He+"Hours",0);case c:return ue(He+"Minutes",1);case a:return ue(He+"Seconds",2);case o:return ue(He+"Milliseconds",3);default:return this.clone()}},f.endOf=function(m){return this.startOf(m,!1)},f.$set=function(m,I){var N,B=U.p(m),L="set"+(this.$u?"UTC":""),ne=(N={},N[l]=L+"Date",N[v]=L+"Date",N[d]=L+"Month",N[p]=L+"FullYear",N[c]=L+"Hours",N[a]=L+"Minutes",N[o]=L+"Seconds",N[s]=L+"Milliseconds",N)[B],ue=B===l?this.$D+(I-this.$W):I;if(B===d||B===p){var fe=this.clone().set(v,1);fe.$d[ne](ue),fe.init(),this.$d=fe.set(v,Math.min(this.$D,fe.daysInMonth())).$d}else ne&&this.$d[ne](ue);return this.init(),this},f.set=function(m,I){return this.clone().$set(m,I)},f.get=function(m){return this[U.p(m)]()},f.add=function(m,I){var N,B=this;m=Number(m);var L=U.p(I),ne=function(se){var xe=R(B);return U.w(xe.date(xe.date()+Math.round(se*m)),B)};if(L===d)return this.set(d,this.$M+m);if(L===p)return this.set(p,this.$y+m);if(L===l)return ne(1);if(L===u)return ne(7);var ue=(N={},N[a]=i,N[c]=n,N[o]=r,N)[L]||1,fe=this.$d.getTime()+m*ue;return U.w(fe,this)},f.subtract=function(m,I){return this.add(-1*m,I)},f.format=function(m){var I=this,N=this.$locale();if(!this.isValid())return N.invalidDate||g;var B=m||"YYYY-MM-DDTHH:mm:ssZ",L=U.z(this),ne=this.$H,ue=this.$m,fe=this.$M,se=N.weekdays,xe=N.months,He=N.meridiem,Et=function(Re,Ze,rt,dt){return Re&&(Re[Ze]||Re(I,B))||rt[Ze].slice(0,dt)},tt=function(Re){return U.s(ne%12||12,Re,"0")},Ve=He||function(Re,Ze,rt){var dt=Re<12?"AM":"PM";return rt?dt.toLowerCase():dt};return B.replace(C,function(Re,Ze){return Ze||function(rt){switch(rt){case"YY":return String(I.$y).slice(-2);case"YYYY":return U.s(I.$y,4,"0");case"M":return fe+1;case"MM":return U.s(fe+1,2,"0");case"MMM":return Et(N.monthsShort,fe,xe,3);case"MMMM":return Et(xe,fe);case"D":return I.$D;case"DD":return U.s(I.$D,2,"0");case"d":return String(I.$W);case"dd":return Et(N.weekdaysMin,I.$W,se,2);case"ddd":return Et(N.weekdaysShort,I.$W,se,3);case"dddd":return se[I.$W];case"H":return String(ne);case"HH":return U.s(ne,2,"0");case"h":return tt(1);case"hh":return tt(2);case"a":return Ve(ne,ue,!0);case"A":return Ve(ne,ue,!1);case"m":return String(ue);case"mm":return U.s(ue,2,"0");case"s":return String(I.$s);case"ss":return U.s(I.$s,2,"0");case"SSS":return U.s(I.$ms,3,"0");case"Z":return L}return null}(Re)||L.replace(":","")})},f.utcOffset=function(){return 15*-Math.round(this.$d.getTimezoneOffset()/15)},f.diff=function(m,I,N){var B,L=this,ne=U.p(I),ue=R(m),fe=(ue.utcOffset()-this.utcOffset())*i,se=this-ue,xe=function(){return U.m(L,ue)};switch(ne){case p:B=xe()/12;break;case d:B=xe();break;case h:B=xe()/3;break;case u:B=(se-fe)/6048e5;break;case l:B=(se-fe)/864e5;break;case c:B=se/n;break;case a:B=se/i;break;case o:B=se/r;break;default:B=se}return N?B:U.a(B)},f.daysInMonth=function(){return this.endOf(d).$D},f.$locale=function(){return T[this.$L]},f.locale=function(m,I){if(!m)return this.$L;var N=this.clone(),B=_(m,I,!0);return B&&(N.$L=B),N},f.clone=function(){return U.w(this.$d,this)},f.toDate=function(){return new Date(this.valueOf())},f.toJSON=function(){return this.isValid()?this.toISOString():null},f.toISOString=function(){return this.$d.toISOString()},f.toString=function(){return this.$d.toUTCString()},S}(),pe=X.prototype;return R.prototype=pe,[["$ms",s],["$s",o],["$m",a],["$H",c],["$W",l],["$M",d],["$y",p],["$D",v]].forEach(function(S){pe[S[1]]=function(f){return this.$g(f,S[0],S[1])}}),R.extend=function(S,f){return S.$i||(S(f,X,R),S.$i=!0),R},R.locale=_,R.isDayjs=$,R.unix=function(S){return R(1e3*S)},R.en=T[P],R.Ls=T,R.p={},R})})(vd);var cc=vd.exports,bd={exports:{}};(function(t,e){(function(r,i){t.exports=i()})(Mo,function(){return{name:"en",weekdays:"Sunday_Monday_Tuesday_Wednesday_Thursday_Friday_Saturday".split("_"),months:"January_February_March_April_May_June_July_August_September_October_November_December".split("_"),ordinal:function(r){var i=["th","st","nd","rd"],n=r%100;return"["+r+(i[(n-20)%10]||i[n]||i[0])+"]"}}})})(bd);var ip=bd.exports,yd={exports:{}};(function(t,e){(function(r,i){t.exports=i()})(Mo,function(){return function(r,i,n){r=r||{};var s=i.prototype,o={future:"in %s",past:"%s ago",s:"a few seconds",m:"a minute",mm:"%d minutes",h:"an hour",hh:"%d hours",d:"a day",dd:"%d days",M:"a month",MM:"%d months",y:"a year",yy:"%d years"};function a(l,u,d,h){return s.fromToBase(l,u,d,h)}n.en.relativeTime=o,s.fromToBase=function(l,u,d,h,p){for(var v,g,b,C=d.$locale().relativeTime||o,A=r.thresholds||[{l:"s",r:44,d:"second"},{l:"m",r:89},{l:"mm",r:44,d:"minute"},{l:"h",r:89},{l:"hh",r:21,d:"hour"},{l:"d",r:35},{l:"dd",r:25,d:"day"},{l:"M",r:45},{l:"MM",r:10,d:"month"},{l:"y",r:17},{l:"yy",d:"year"}],x=A.length,k=0;k<x;k+=1){var P=A[k];P.d&&(v=h?n(l).diff(d,P.d,!0):d.diff(l,P.d,!0));var T=(r.rounding||Math.round)(Math.abs(v));if(b=v>0,T<=P.r||!P.r){T<=1&&k>0&&(P=A[k-1]);var j=C[P.l];p&&(T=p(""+T)),g=typeof j=="string"?j.replace("%d",T):j(T,u,P.l,b);break}}if(u)return g;var $=b?C.future:C.past;return typeof $=="function"?$(g):$.replace("%s",g)},s.to=function(l,u){return a(l,u,this,!0)},s.from=function(l,u){return a(l,u,this)};var c=function(l){return l.$u?n.utc():n()};s.toNow=function(l){return this.to(c(this),l)},s.fromNow=function(l){return this.from(c(this),l)}}})})(yd);var np=yd.exports,Cd={exports:{}};(function(t,e){(function(r,i){t.exports=i()})(Mo,function(){return function(r,i,n){n.updateLocale=function(s,o){var a=n.Ls[s];if(a)return(o?Object.keys(o):[]).forEach(function(c){a[c]=o[c]}),a}}})})(Cd);var sp=Cd.exports;cc.extend(np),cc.extend(sp);const op={...ip,name:"en-web3-modal",relativeTime:{future:"in %s",past:"%s ago",s:"%d sec",m:"1 min",mm:"%d min",h:"1 hr",hh:"%d hrs",d:"1 d",dd:"%d d",M:"1 mo",MM:"%d mo",y:"1 yr",yy:"%d yr"}};cc.locale("en-web3-modal",op);const xd={caipNetworkIdToNumber(t){return t?Number(t.split(":")[1]):void 0},parseEvmChainId(t){return typeof t=="string"?this.caipNetworkIdToNumber(t):t},getNetworksByNamespace(t,e){return(t==null?void 0:t.filter(r=>r.chainNamespace===e))||[]},getFirstNetworkByNamespace(t,e){return this.getNetworksByNamespace(t,e)[0]}};var ap=20,cp=1,mi=1e6,lp=1e6,up=-7,dp=21,hp=!1,Ln="[big.js] ",Vr=Ln+"Invalid ",Ps=Vr+"decimal places",pp=Vr+"rounding mode",Sl=Ln+"Division by zero",Ce={},zt=void 0,fp=/^-?(\d+(\.\d*)?|\.\d+)(e[+-]?\d+)?$/i;function Ed(){function t(e){var r=this;if(!(r instanceof t))return e===zt?Ed():new t(e);if(e instanceof t)r.s=e.s,r.e=e.e,r.c=e.c.slice();else{if(typeof e!="string"){if(t.strict===!0&&typeof e!="bigint")throw TypeError(Vr+"value");e=e===0&&1/e<0?"-0":String(e)}gp(r,e)}r.constructor=t}return t.prototype=Ce,t.DP=ap,t.RM=cp,t.NE=up,t.PE=dp,t.strict=hp,t.roundDown=0,t.roundHalfUp=1,t.roundHalfEven=2,t.roundUp=3,t}function gp(t,e){var r,i,n;if(!fp.test(e))throw Error(Vr+"number");for(t.s=e.charAt(0)=="-"?(e=e.slice(1),-1):1,(r=e.indexOf("."))>-1&&(e=e.replace(".","")),(i=e.search(/e/i))>0?(r<0&&(r=i),r+=+e.slice(i+1),e=e.substring(0,i)):r<0&&(r=e.length),n=e.length,i=0;i<n&&e.charAt(i)=="0";)++i;if(i==n)t.c=[t.e=0];else{for(;n>0&&e.charAt(--n)=="0";);for(t.e=r-i-1,t.c=[],r=0;i<=n;)t.c[r++]=+e.charAt(i++)}return t}function Er(t,e,r,i){var n=t.c;if(r===zt&&(r=t.constructor.RM),r!==0&&r!==1&&r!==2&&r!==3)throw Error(pp);if(e<1)i=r===3&&(i||!!n[0])||e===0&&(r===1&&n[0]>=5||r===2&&(n[0]>5||n[0]===5&&(i||n[1]!==zt))),n.length=1,i?(t.e=t.e-e+1,n[0]=1):n[0]=t.e=0;else if(e<n.length){if(i=r===1&&n[e]>=5||r===2&&(n[e]>5||n[e]===5&&(i||n[e+1]!==zt||n[e-1]&1))||r===3&&(i||!!n[0]),n.length=e,i){for(;++n[--e]>9;)if(n[e]=0,e===0){++t.e,n.unshift(1);break}}for(e=n.length;!n[--e];)n.pop()}return t}function Ar(t,e,r){var i=t.e,n=t.c.join(""),s=n.length;if(e)n=n.charAt(0)+(s>1?"."+n.slice(1):"")+(i<0?"e":"e+")+i;else if(i<0){for(;++i;)n="0"+n;n="0."+n}else if(i>0)if(++i>s)for(i-=s;i--;)n+="0";else i<s&&(n=n.slice(0,i)+"."+n.slice(i));else s>1&&(n=n.charAt(0)+"."+n.slice(1));return t.s<0&&r?"-"+n:n}Ce.abs=function(){var t=new this.constructor(this);return t.s=1,t},Ce.cmp=function(t){var e,r=this,i=r.c,n=(t=new r.constructor(t)).c,s=r.s,o=t.s,a=r.e,c=t.e;if(!i[0]||!n[0])return i[0]?s:n[0]?-o:0;if(s!=o)return s;if(e=s<0,a!=c)return a>c^e?1:-1;for(o=(a=i.length)<(c=n.length)?a:c,s=-1;++s<o;)if(i[s]!=n[s])return i[s]>n[s]^e?1:-1;return a==c?0:a>c^e?1:-1},Ce.div=function(t){var e=this,r=e.constructor,i=e.c,n=(t=new r(t)).c,s=e.s==t.s?1:-1,o=r.DP;if(o!==~~o||o<0||o>mi)throw Error(Ps);if(!n[0])throw Error(Sl);if(!i[0])return t.s=s,t.c=[t.e=0],t;var a,c,l,u,d,h=n.slice(),p=a=n.length,v=i.length,g=i.slice(0,a),b=g.length,C=t,A=C.c=[],x=0,k=o+(C.e=e.e-t.e)+1;for(C.s=s,s=k<0?0:k,h.unshift(0);b++<a;)g.push(0);do{for(l=0;l<10;l++){if(a!=(b=g.length))u=a>b?1:-1;else for(d=-1,u=0;++d<a;)if(n[d]!=g[d]){u=n[d]>g[d]?1:-1;break}if(u<0){for(c=b==a?n:h;b;){if(g[--b]<c[b]){for(d=b;d&&!g[--d];)g[d]=9;--g[d],g[b]+=10}g[b]-=c[b]}for(;!g[0];)g.shift()}else break}A[x++]=u?l:++l,g[0]&&u?g[b]=i[p]||0:g=[i[p]]}while((p++<v||g[0]!==zt)&&s--);return!A[0]&&x!=1&&(A.shift(),C.e--,k--),x>k&&Er(C,k,r.RM,g[0]!==zt),C},Ce.eq=function(t){return this.cmp(t)===0},Ce.gt=function(t){return this.cmp(t)>0},Ce.gte=function(t){return this.cmp(t)>-1},Ce.lt=function(t){return this.cmp(t)<0},Ce.lte=function(t){return this.cmp(t)<1},Ce.minus=Ce.sub=function(t){var e,r,i,n,s=this,o=s.constructor,a=s.s,c=(t=new o(t)).s;if(a!=c)return t.s=-c,s.plus(t);var l=s.c.slice(),u=s.e,d=t.c,h=t.e;if(!l[0]||!d[0])return d[0]?t.s=-c:l[0]?t=new o(s):t.s=1,t;if(a=u-h){for((n=a<0)?(a=-a,i=l):(h=u,i=d),i.reverse(),c=a;c--;)i.push(0);i.reverse()}else for(r=((n=l.length<d.length)?l:d).length,a=c=0;c<r;c++)if(l[c]!=d[c]){n=l[c]<d[c];break}if(n&&(i=l,l=d,d=i,t.s=-t.s),(c=(r=d.length)-(e=l.length))>0)for(;c--;)l[e++]=0;for(c=e;r>a;){if(l[--r]<d[r]){for(e=r;e&&!l[--e];)l[e]=9;--l[e],l[r]+=10}l[r]-=d[r]}for(;l[--c]===0;)l.pop();for(;l[0]===0;)l.shift(),--h;return l[0]||(t.s=1,l=[h=0]),t.c=l,t.e=h,t},Ce.mod=function(t){var e,r=this,i=r.constructor,n=r.s,s=(t=new i(t)).s;if(!t.c[0])throw Error(Sl);return r.s=t.s=1,e=t.cmp(r)==1,r.s=n,t.s=s,e?new i(r):(n=i.DP,s=i.RM,i.DP=i.RM=0,r=r.div(t),i.DP=n,i.RM=s,this.minus(r.times(t)))},Ce.neg=function(){var t=new this.constructor(this);return t.s=-t.s,t},Ce.plus=Ce.add=function(t){var e,r,i,n=this,s=n.constructor;if(t=new s(t),n.s!=t.s)return t.s=-t.s,n.minus(t);var o=n.e,a=n.c,c=t.e,l=t.c;if(!a[0]||!l[0])return l[0]||(a[0]?t=new s(n):t.s=n.s),t;if(a=a.slice(),e=o-c){for(e>0?(c=o,i=l):(e=-e,i=a),i.reverse();e--;)i.push(0);i.reverse()}for(a.length-l.length<0&&(i=l,l=a,a=i),e=l.length,r=0;e;a[e]%=10)r=(a[--e]=a[e]+l[e]+r)/10|0;for(r&&(a.unshift(r),++c),e=a.length;a[--e]===0;)a.pop();return t.c=a,t.e=c,t},Ce.pow=function(t){var e=this,r=new e.constructor("1"),i=r,n=t<0;if(t!==~~t||t<-1e6||t>lp)throw Error(Vr+"exponent");for(n&&(t=-t);t&1&&(i=i.times(e)),t>>=1,!!t;)e=e.times(e);return n?r.div(i):i},Ce.prec=function(t,e){if(t!==~~t||t<1||t>mi)throw Error(Vr+"precision");return Er(new this.constructor(this),t,e)},Ce.round=function(t,e){if(t===zt)t=0;else if(t!==~~t||t<-1e6||t>mi)throw Error(Ps);return Er(new this.constructor(this),t+this.e+1,e)},Ce.sqrt=function(){var t,e,r,i=this,n=i.constructor,s=i.s,o=i.e,a=new n("0.5");if(!i.c[0])return new n(i);if(s<0)throw Error(Ln+"No square root");s=Math.sqrt(+Ar(i,!0,!0)),s===0||s===1/0?(e=i.c.join(""),e.length+o&1||(e+="0"),s=Math.sqrt(e),o=((o+1)/2|0)-(o<0||o&1),t=new n((s==1/0?"5e":(s=s.toExponential()).slice(0,s.indexOf("e")+1))+o)):t=new n(s+""),o=t.e+(n.DP+=4);do r=t,t=a.times(r.plus(i.div(r)));while(r.c.slice(0,o).join("")!==t.c.slice(0,o).join(""));return Er(t,(n.DP-=4)+t.e+1,n.RM)},Ce.times=Ce.mul=function(t){var e,r=this,i=r.constructor,n=r.c,s=(t=new i(t)).c,o=n.length,a=s.length,c=r.e,l=t.e;if(t.s=r.s==t.s?1:-1,!n[0]||!s[0])return t.c=[t.e=0],t;for(t.e=c+l,o<a&&(e=n,n=s,s=e,l=o,o=a,a=l),e=new Array(l=o+a);l--;)e[l]=0;for(c=a;c--;){for(a=0,l=o+c;l>c;)a=e[l]+s[c]*n[l-c-1]+a,e[l--]=a%10,a=a/10|0;e[l]=a}for(a?++t.e:e.shift(),c=e.length;!e[--c];)e.pop();return t.c=e,t},Ce.toExponential=function(t,e){var r=this,i=r.c[0];if(t!==zt){if(t!==~~t||t<0||t>mi)throw Error(Ps);for(r=Er(new r.constructor(r),++t,e);r.c.length<t;)r.c.push(0)}return Ar(r,!0,!!i)},Ce.toFixed=function(t,e){var r=this,i=r.c[0];if(t!==zt){if(t!==~~t||t<0||t>mi)throw Error(Ps);for(r=Er(new r.constructor(r),t+r.e+1,e),t=t+r.e+1;r.c.length<t;)r.c.push(0)}return Ar(r,!1,!!i)},Ce[Symbol.for("nodejs.util.inspect.custom")]=Ce.toJSON=Ce.toString=function(){var t=this,e=t.constructor;return Ar(t,t.e<=e.NE||t.e>=e.PE,!!t.c[0])},Ce.toNumber=function(){var t=+Ar(this,!0,!0);if(this.constructor.strict===!0&&!this.eq(t.toString()))throw Error(Ln+"Imprecise conversion");return t},Ce.toPrecision=function(t,e){var r=this,i=r.constructor,n=r.c[0];if(t!==zt){if(t!==~~t||t<1||t>mi)throw Error(Vr+"precision");for(r=Er(new i(r),t,e);r.c.length<t;)r.c.push(0)}return Ar(r,t<=r.e||r.e<=i.NE||r.e>=i.PE,!!n)},Ce.valueOf=function(){var t=this,e=t.constructor;if(e.strict===!0)throw Error(Ln+"valueOf disallowed");return Ar(t,t.e<=e.NE||t.e>=e.PE,!0)};var nn=Ed();const _s={bigNumber(t){return t?new nn(t):new nn(0)},multiply(t,e){if(t===void 0||e===void 0)return new nn(0);const r=new nn(t),i=new nn(e);return r.times(i)},formatNumberToLocalString(t,e=2){return t===void 0?"0.00":typeof t=="number"?t.toLocaleString("en-US",{maximumFractionDigits:e,minimumFractionDigits:e}):parseFloat(t).toLocaleString("en-US",{maximumFractionDigits:e,minimumFractionDigits:e})},parseLocalStringToNumber(t){return t===void 0?0:parseFloat(t.replace(/,/gu,""))}},wp=[{type:"function",name:"transfer",stateMutability:"nonpayable",inputs:[{name:"_to",type:"address"},{name:"_value",type:"uint256"}],outputs:[{name:"",type:"bool"}]},{type:"function",name:"transferFrom",stateMutability:"nonpayable",inputs:[{name:"_from",type:"address"},{name:"_to",type:"address"},{name:"_value",type:"uint256"}],outputs:[{name:"",type:"bool"}]}],mp=[{type:"function",name:"approve",stateMutability:"nonpayable",inputs:[{name:"spender",type:"address"},{name:"amount",type:"uint256"}],outputs:[{type:"bool"}]}],vp=[{type:"function",name:"transfer",stateMutability:"nonpayable",inputs:[{name:"recipient",type:"address"},{name:"amount",type:"uint256"}],outputs:[]},{type:"function",name:"transferFrom",stateMutability:"nonpayable",inputs:[{name:"sender",type:"address"},{name:"recipient",type:"address"},{name:"amount",type:"uint256"}],outputs:[{name:"",type:"bool"}]}],Q={WC_NAME_SUFFIX:".reown.id",WC_NAME_SUFFIX_LEGACY:".wcn.id",BLOCKCHAIN_API_RPC_URL:"https://rpc.walletconnect.org",PULSE_API_URL:"https://pulse.walletconnect.org",W3M_API_URL:"https://api.web3modal.org",CONNECTOR_ID:{WALLET_CONNECT:"walletConnect",INJECTED:"injected",WALLET_STANDARD:"announced",COINBASE:"coinbaseWallet",COINBASE_SDK:"coinbaseWalletSDK",SAFE:"safe",LEDGER:"ledger",OKX:"okx",EIP6963:"eip6963",AUTH:"ID_AUTH"},CONNECTOR_NAMES:{AUTH:"Auth"},AUTH_CONNECTOR_SUPPORTED_CHAINS:["eip155","solana"],LIMITS:{PENDING_TRANSACTIONS:99},CHAIN:{EVM:"eip155",SOLANA:"solana",POLKADOT:"polkadot",BITCOIN:"bip122"},CHAIN_NAME_MAP:{eip155:"EVM Networks",solana:"Solana",polkadot:"Polkadot",bip122:"Bitcoin"},ADAPTER_TYPES:{BITCOIN:"bitcoin",SOLANA:"solana",WAGMI:"wagmi",ETHERS:"ethers",ETHERS5:"ethers5"},USDT_CONTRACT_ADDRESSES:["0xdac17f958d2ee523a2206206994597c13d831ec7","0xc2132d05d31c914a87c6611c10748aeb04b58e8f","0x9702230a8ea53601f5cd2dc00fdbc13d4df4a8c7","0x919C1c267BC06a7039e03fcc2eF738525769109c","0x48065fbBE25f71C9282ddf5e1cD6D6A887483D5e","0x55d398326f99059fF775485246999027B3197955","0xfd086bc7cd5c481dcc9c85ebe478a1c0b69fcbb9"],HTTP_STATUS_CODES:{SERVICE_UNAVAILABLE:503,FORBIDDEN:403},UNSUPPORTED_NETWORK_NAME:"Unknown Network"},bp={getERC20Abi:t=>Q.USDT_CONTRACT_ADDRESSES.includes(t)?vp:wp,getSwapAbi:()=>mp},nr={validateCaipAddress(t){var e;if(((e=t.split(":"))==null?void 0:e.length)!==3)throw new Error("Invalid CAIP Address");return t},parseCaipAddress(t){const e=t.split(":");if(e.length!==3)throw new Error(`Invalid CAIP-10 address: ${t}`);const[r,i,n]=e;if(!r||!i||!n)throw new Error(`Invalid CAIP-10 address: ${t}`);return{chainNamespace:r,chainId:i,address:n}},parseCaipNetworkId(t){const e=t.split(":");if(e.length!==2)throw new Error(`Invalid CAIP-2 network id: ${t}`);const[r,i]=e;if(!r||!i)throw new Error(`Invalid CAIP-2 network id: ${t}`);return{chainNamespace:r,chainId:i}}},ce={WALLET_ID:"@appkit/wallet_id",WALLET_NAME:"@appkit/wallet_name",SOLANA_WALLET:"@appkit/solana_wallet",SOLANA_CAIP_CHAIN:"@appkit/solana_caip_chain",ACTIVE_CAIP_NETWORK_ID:"@appkit/active_caip_network_id",CONNECTED_SOCIAL:"@appkit/connected_social",CONNECTED_SOCIAL_USERNAME:"@appkit-wallet/SOCIAL_USERNAME",RECENT_WALLETS:"@appkit/recent_wallets",DEEPLINK_CHOICE:"WALLETCONNECT_DEEPLINK_CHOICE",ACTIVE_NAMESPACE:"@appkit/active_namespace",CONNECTED_NAMESPACES:"@appkit/connected_namespaces",CONNECTION_STATUS:"@appkit/connection_status",SIWX_AUTH_TOKEN:"@appkit/siwx-auth-token",SIWX_NONCE_TOKEN:"@appkit/siwx-nonce-token",TELEGRAM_SOCIAL_PROVIDER:"@appkit/social_provider",NATIVE_BALANCE_CACHE:"@appkit/native_balance_cache",PORTFOLIO_CACHE:"@appkit/portfolio_cache",ENS_CACHE:"@appkit/ens_cache",IDENTITY_CACHE:"@appkit/identity_cache",PREFERRED_ACCOUNT_TYPES:"@appkit/preferred_account_types"};function ia(t){if(!t)throw new Error("Namespace is required for CONNECTED_CONNECTOR_ID");return`@appkit/${t}:connected_connector_id`}const oe={setItem(t,e){_n()&&e!==void 0&&localStorage.setItem(t,e)},getItem(t){if(_n())return localStorage.getItem(t)||void 0},removeItem(t){_n()&&localStorage.removeItem(t)},clear(){_n()&&localStorage.clear()}};function _n(){return typeof window<"u"&&typeof localStorage<"u"}function fr(t,e){return e==="light"?{"--w3m-accent":(t==null?void 0:t["--w3m-accent"])||"hsla(231, 100%, 70%, 1)","--w3m-background":"#fff"}:{"--w3m-accent":(t==null?void 0:t["--w3m-accent"])||"hsla(230, 100%, 67%, 1)","--w3m-background":"#121313"}}const yp=Symbol(),Pl=Object.getPrototypeOf,lc=new WeakMap,Cp=t=>t&&(lc.has(t)?lc.get(t):Pl(t)===Object.prototype||Pl(t)===Array.prototype),xp=t=>Cp(t)&&t[yp]||null,_l=(t,e=!0)=>{lc.set(t,e)},na=t=>typeof t=="object"&&t!==null,dr=new WeakMap,Tn=new WeakSet,Ep=(t=Object.is,e=(l,u)=>new Proxy(l,u),r=l=>na(l)&&!Tn.has(l)&&(Array.isArray(l)||!(Symbol.iterator in l))&&!(l instanceof WeakMap)&&!(l instanceof WeakSet)&&!(l instanceof Error)&&!(l instanceof Number)&&!(l instanceof Date)&&!(l instanceof String)&&!(l instanceof RegExp)&&!(l instanceof ArrayBuffer),i=l=>{switch(l.status){case"fulfilled":return l.value;case"rejected":throw l.reason;default:throw l}},n=new WeakMap,s=(l,u,d=i)=>{const h=n.get(l);if((h==null?void 0:h[0])===u)return h[1];const p=Array.isArray(l)?[]:Object.create(Object.getPrototypeOf(l));return _l(p,!0),n.set(l,[u,p]),Reflect.ownKeys(l).forEach(v=>{if(Object.getOwnPropertyDescriptor(p,v))return;const g=Reflect.get(l,v),{enumerable:b}=Reflect.getOwnPropertyDescriptor(l,v),C={value:g,enumerable:b,configurable:!0};if(Tn.has(g))_l(g,!1);else if(g instanceof Promise)delete C.value,C.get=()=>d(g);else if(dr.has(g)){const[A,x]=dr.get(g);C.value=s(A,x(),d)}Object.defineProperty(p,v,C)}),Object.preventExtensions(p)},o=new WeakMap,a=[1,1],c=l=>{if(!na(l))throw new Error("object required");const u=o.get(l);if(u)return u;let d=a[0];const h=new Set,p=($,_=++a[0])=>{d!==_&&(d=_,h.forEach(R=>R($,_)))};let v=a[1];const g=($=++a[1])=>(v!==$&&!h.size&&(v=$,C.forEach(([_])=>{const R=_[1]($);R>d&&(d=R)})),d),b=$=>(_,R)=>{const U=[..._];U[1]=[$,...U[1]],p(U,R)},C=new Map,A=($,_)=>{if((xo?"production":void 0)!=="production"&&C.has($))throw new Error("prop listener already exists");if(h.size){const R=_[3](b($));C.set($,[_,R])}else C.set($,[_])},x=$=>{var _;const R=C.get($);R&&(C.delete($),(_=R[1])==null||_.call(R))},k=$=>(h.add($),h.size===1&&C.forEach(([_,R],U)=>{if((xo?"production":void 0)!=="production"&&R)throw new Error("remove already exists");const X=_[3](b(U));C.set(U,[_,X])}),()=>{h.delete($),h.size===0&&C.forEach(([_,R],U)=>{R&&(R(),C.set(U,[_]))})}),P=Array.isArray(l)?[]:Object.create(Object.getPrototypeOf(l)),T=e(P,{deleteProperty($,_){const R=Reflect.get($,_);x(_);const U=Reflect.deleteProperty($,_);return U&&p(["delete",[_],R]),U},set($,_,R,U){const X=Reflect.has($,_),pe=Reflect.get($,_,U);if(X&&(t(pe,R)||o.has(R)&&t(pe,o.get(R))))return!0;x(_),na(R)&&(R=xp(R)||R);let S=R;if(R instanceof Promise)R.then(f=>{R.status="fulfilled",R.value=f,p(["resolve",[_],f])}).catch(f=>{R.status="rejected",R.reason=f,p(["reject",[_],f])});else{!dr.has(R)&&r(R)&&(S=c(R));const f=!Tn.has(S)&&dr.get(S);f&&A(_,f)}return Reflect.set($,_,S,U),p(["set",[_],R,pe]),!0}});o.set(l,T);const j=[P,g,s,k];return dr.set(T,j),Reflect.ownKeys(l).forEach($=>{const _=Object.getOwnPropertyDescriptor(l,$);"value"in _&&(T[$]=l[$],delete _.value,delete _.writable),Object.defineProperty(P,$,_)}),T})=>[c,dr,Tn,t,e,r,i,n,s,o,a],[Ap]=Ep();function Ae(t={}){return Ap(t)}function De(t,e,r){const i=dr.get(t);(xo?"production":void 0)!=="production"&&!i&&console.warn("Please use proxy object");let n;const s=[],o=i[3];let a=!1;const c=o(l=>{s.push(l),n||(n=Promise.resolve().then(()=>{n=void 0,a&&e(s.splice(0))}))});return a=!0,()=>{a=!1,c()}}function Dn(t,e){const r=dr.get(t);(xo?"production":void 0)!=="production"&&!r&&console.warn("Please use proxy object");const[i,n,s]=r;return s(i,n(),e)}function Xr(t){return Tn.add(t),t}function qe(t,e,r,i){let n=t[e];return De(t,()=>{const s=t[e];Object.is(n,s)||r(n=s)},i)}function kp(t){const e=Ae({data:Array.from([]),has(r){return this.data.some(i=>i[0]===r)},set(r,i){const n=this.data.find(s=>s[0]===r);return n?n[1]=i:this.data.push([r,i]),this},get(r){var i;return(i=this.data.find(n=>n[0]===r))==null?void 0:i[1]},delete(r){const i=this.data.findIndex(n=>n[0]===r);return i===-1?!1:(this.data.splice(i,1),!0)},clear(){this.data.splice(0)},get size(){return this.data.length},toJSON(){return new Map(this.data)},forEach(r){this.data.forEach(i=>{r(i[1],i[0],this)})},keys(){return this.data.map(r=>r[0]).values()},values(){return this.data.map(r=>r[1]).values()},entries(){return new Map(this.data).entries()},get[Symbol.toStringTag](){return"Map"},[Symbol.iterator](){return this.entries()}});return Object.defineProperties(e,{data:{enumerable:!1},size:{enumerable:!1},toJSON:{enumerable:!1}}),Object.seal(e),e}const sa=(typeof process<"u"&&typeof Il<"u"?Il.NEXT_PUBLIC_SECURE_SITE_ORIGIN:void 0)||"https://secure.walletconnect.org",Ip=[{label:"Coinbase",name:"coinbase",feeRange:"1-2%",url:"",supportedChains:["eip155"]},{label:"Meld.io",name:"meld",feeRange:"1-2%",url:"https://meldcrypto.com",supportedChains:["eip155","solana"]}],Oe={FOUR_MINUTES_MS:24e4,TEN_SEC_MS:1e4,FIVE_SEC_MS:5e3,THREE_SEC_MS:3e3,ONE_SEC_MS:1e3,SECURE_SITE:sa,SECURE_SITE_DASHBOARD:`${sa}/dashboard`,SECURE_SITE_FAVICON:`${sa}/images/favicon.png`,RESTRICTED_TIMEZONES:["ASIA/SHANGHAI","ASIA/URUMQI","ASIA/CHONGQING","ASIA/HARBIN","ASIA/KASHGAR","ASIA/MACAU","ASIA/HONG_KONG","ASIA/MACAO","ASIA/BEIJING","ASIA/HARBIN"],WC_COINBASE_PAY_SDK_CHAINS:["ethereum","arbitrum","polygon","berachain","avalanche-c-chain","optimism","celo","base"],WC_COINBASE_PAY_SDK_FALLBACK_CHAIN:"ethereum",WC_COINBASE_PAY_SDK_CHAIN_NAME_MAP:{Ethereum:"ethereum","Arbitrum One":"arbitrum",Polygon:"polygon",Berachain:"berachain",Avalanche:"avalanche-c-chain","OP Mainnet":"optimism",Celo:"celo",Base:"base"},WC_COINBASE_ONRAMP_APP_ID:"bf18c88d-495a-463b-b249-0b9d3656cf5e",SWAP_SUGGESTED_TOKENS:["ETH","UNI","1INCH","AAVE","SOL","ADA","AVAX","DOT","LINK","NITRO","GAIA","MILK","TRX","NEAR","GNO","WBTC","DAI","WETH","USDC","USDT","ARB","BAL","BICO","CRV","ENS","MATIC","OP"],SWAP_POPULAR_TOKENS:["ETH","UNI","1INCH","AAVE","SOL","ADA","AVAX","DOT","LINK","NITRO","GAIA","MILK","TRX","NEAR","GNO","WBTC","DAI","WETH","USDC","USDT","ARB","BAL","BICO","CRV","ENS","MATIC","OP","METAL","DAI","CHAMP","WOLF","SALE","BAL","BUSD","MUST","BTCpx","ROUTE","HEX","WELT","amDAI","VSQ","VISION","AURUM","pSP","SNX","VC","LINK","CHP","amUSDT","SPHERE","FOX","GIDDY","GFC","OMEN","OX_OLD","DE","WNT"],BALANCE_SUPPORTED_CHAINS:["eip155","solana"],SWAP_SUPPORTED_NETWORKS:["eip155:1","eip155:42161","eip155:10","eip155:324","eip155:8453","eip155:56","eip155:137","eip155:100","eip155:43114","eip155:250","eip155:8217","eip155:1313161554"],NAMES_SUPPORTED_CHAIN_NAMESPACES:["eip155"],ONRAMP_SUPPORTED_CHAIN_NAMESPACES:["eip155","solana"],ACTIVITY_ENABLED_CHAIN_NAMESPACES:["eip155"],NATIVE_TOKEN_ADDRESS:{eip155:"0xeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeee",solana:"So11111111111111111111111111111111111111111",polkadot:"0x",bip122:"0x"},CONVERT_SLIPPAGE_TOLERANCE:1,CONNECT_LABELS:{MOBILE:"Open and continue in a new browser tab"},DEFAULT_FEATURES:{swaps:!0,onramp:!0,receive:!0,send:!0,email:!0,emailShowWallets:!0,socials:["google","x","discord","farcaster","github","apple","facebook"],connectorTypeOrder:["walletConnect","recent","injected","featured","custom","external","recommended"],history:!0,analytics:!0,allWallets:!0,legalCheckbox:!1,smartSessions:!1,collapseWallets:!1,walletFeaturesOrder:["onramp","swaps","receive","send"],connectMethodsOrder:void 0},DEFAULT_ACCOUNT_TYPES:{bip122:"payment",eip155:"smartAccount",polkadot:"eoa",solana:"eoa"},ADAPTER_TYPES:{UNIVERSAL:"universal",SOLANA:"solana",WAGMI:"wagmi",ETHERS:"ethers",ETHERS5:"ethers5",BITCOIN:"bitcoin"}},G={cacheExpiry:{portfolio:3e4,nativeBalance:3e4,ens:3e5,identity:3e5},isCacheExpired(t,e){return Date.now()-t>e},getActiveNetworkProps(){const t=G.getActiveNamespace(),e=G.getActiveCaipNetworkId(),r=e?e.split(":")[1]:void 0,i=r?isNaN(Number(r))?r:Number(r):void 0;return{namespace:t,caipNetworkId:e,chainId:i}},setWalletConnectDeepLink({name:t,href:e}){try{oe.setItem(ce.DEEPLINK_CHOICE,JSON.stringify({href:e,name:t}))}catch{console.info("Unable to set WalletConnect deep link")}},getWalletConnectDeepLink(){try{const t=oe.getItem(ce.DEEPLINK_CHOICE);if(t)return JSON.parse(t)}catch{console.info("Unable to get WalletConnect deep link")}},deleteWalletConnectDeepLink(){try{oe.removeItem(ce.DEEPLINK_CHOICE)}catch{console.info("Unable to delete WalletConnect deep link")}},setActiveNamespace(t){try{oe.setItem(ce.ACTIVE_NAMESPACE,t)}catch{console.info("Unable to set active namespace")}},setActiveCaipNetworkId(t){try{oe.setItem(ce.ACTIVE_CAIP_NETWORK_ID,t),G.setActiveNamespace(t.split(":")[0])}catch{console.info("Unable to set active caip network id")}},getActiveCaipNetworkId(){try{return oe.getItem(ce.ACTIVE_CAIP_NETWORK_ID)}catch{console.info("Unable to get active caip network id");return}},deleteActiveCaipNetworkId(){try{oe.removeItem(ce.ACTIVE_CAIP_NETWORK_ID)}catch{console.info("Unable to delete active caip network id")}},deleteConnectedConnectorId(t){try{const e=ia(t);oe.removeItem(e)}catch{console.info("Unable to delete connected connector id")}},setAppKitRecent(t){try{const e=G.getRecentWallets();e.find(r=>r.id===t.id)||(e.unshift(t),e.length>2&&e.pop(),oe.setItem(ce.RECENT_WALLETS,JSON.stringify(e)))}catch{console.info("Unable to set AppKit recent")}},getRecentWallets(){try{const t=oe.getItem(ce.RECENT_WALLETS);return t?JSON.parse(t):[]}catch{console.info("Unable to get AppKit recent")}return[]},setConnectedConnectorId(t,e){try{const r=ia(t);oe.setItem(r,e)}catch{console.info("Unable to set Connected Connector Id")}},getActiveNamespace(){try{return oe.getItem(ce.ACTIVE_NAMESPACE)}catch{console.info("Unable to get active namespace")}},getConnectedConnectorId(t){if(t)try{const e=ia(t);return oe.getItem(e)}catch{console.info("Unable to get connected connector id in namespace ",t)}},setConnectedSocialProvider(t){try{oe.setItem(ce.CONNECTED_SOCIAL,t)}catch{console.info("Unable to set connected social provider")}},getConnectedSocialProvider(){try{return oe.getItem(ce.CONNECTED_SOCIAL)}catch{console.info("Unable to get connected social provider")}},deleteConnectedSocialProvider(){try{oe.removeItem(ce.CONNECTED_SOCIAL)}catch{console.info("Unable to delete connected social provider")}},getConnectedSocialUsername(){try{return oe.getItem(ce.CONNECTED_SOCIAL_USERNAME)}catch{console.info("Unable to get connected social username")}},getStoredActiveCaipNetworkId(){var t,e;return(e=(t=oe.getItem(ce.ACTIVE_CAIP_NETWORK_ID))==null?void 0:t.split(":"))==null?void 0:e[1]},setConnectionStatus(t){try{oe.setItem(ce.CONNECTION_STATUS,t)}catch{console.info("Unable to set connection status")}},getConnectionStatus(){try{return oe.getItem(ce.CONNECTION_STATUS)}catch{return}},getConnectedNamespaces(){try{const t=oe.getItem(ce.CONNECTED_NAMESPACES);return t!=null&&t.length?t.split(","):[]}catch{return[]}},setConnectedNamespaces(t){try{const e=Array.from(new Set(t));oe.setItem(ce.CONNECTED_NAMESPACES,e.join(","))}catch{console.info("Unable to set namespaces in storage")}},addConnectedNamespace(t){try{const e=G.getConnectedNamespaces();e.includes(t)||(e.push(t),G.setConnectedNamespaces(e))}catch{console.info("Unable to add connected namespace")}},removeConnectedNamespace(t){try{const e=G.getConnectedNamespaces(),r=e.indexOf(t);r>-1&&(e.splice(r,1),G.setConnectedNamespaces(e))}catch{console.info("Unable to remove connected namespace")}},getTelegramSocialProvider(){try{return oe.getItem(ce.TELEGRAM_SOCIAL_PROVIDER)}catch{return console.info("Unable to get telegram social provider"),null}},setTelegramSocialProvider(t){try{oe.setItem(ce.TELEGRAM_SOCIAL_PROVIDER,t)}catch{console.info("Unable to set telegram social provider")}},removeTelegramSocialProvider(){try{oe.removeItem(ce.TELEGRAM_SOCIAL_PROVIDER)}catch{console.info("Unable to remove telegram social provider")}},getBalanceCache(){let t={};try{const e=oe.getItem(ce.PORTFOLIO_CACHE);t=e?JSON.parse(e):{}}catch{console.info("Unable to get balance cache")}return t},removeAddressFromBalanceCache(t){try{const e=G.getBalanceCache();oe.setItem(ce.PORTFOLIO_CACHE,JSON.stringify({...e,[t]:void 0}))}catch{console.info("Unable to remove address from balance cache",t)}},getBalanceCacheForCaipAddress(t){try{const e=G.getBalanceCache()[t];if(e&&!this.isCacheExpired(e.timestamp,this.cacheExpiry.portfolio))return e.balance;G.removeAddressFromBalanceCache(t)}catch{console.info("Unable to get balance cache for address",t)}},updateBalanceCache(t){try{const e=G.getBalanceCache();e[t.caipAddress]=t,oe.setItem(ce.PORTFOLIO_CACHE,JSON.stringify(e))}catch{console.info("Unable to update balance cache",t)}},getNativeBalanceCache(){let t={};try{const e=oe.getItem(ce.NATIVE_BALANCE_CACHE);t=e?JSON.parse(e):{}}catch{console.info("Unable to get balance cache")}return t},removeAddressFromNativeBalanceCache(t){try{const e=G.getBalanceCache();oe.setItem(ce.NATIVE_BALANCE_CACHE,JSON.stringify({...e,[t]:void 0}))}catch{console.info("Unable to remove address from balance cache",t)}},getNativeBalanceCacheForCaipAddress(t){try{const e=G.getNativeBalanceCache()[t];if(e&&!this.isCacheExpired(e.timestamp,this.cacheExpiry.nativeBalance))return e;console.info("Discarding cache for address",t),G.removeAddressFromBalanceCache(t)}catch{console.info("Unable to get balance cache for address",t)}},updateNativeBalanceCache(t){try{const e=G.getNativeBalanceCache();e[t.caipAddress]=t,oe.setItem(ce.NATIVE_BALANCE_CACHE,JSON.stringify(e))}catch{console.info("Unable to update balance cache",t)}},getEnsCache(){let t={};try{const e=oe.getItem(ce.ENS_CACHE);t=e?JSON.parse(e):{}}catch{console.info("Unable to get ens name cache")}return t},getEnsFromCacheForAddress(t){try{const e=G.getEnsCache()[t];if(e&&!this.isCacheExpired(e.timestamp,this.cacheExpiry.ens))return e.ens;G.removeEnsFromCache(t)}catch{console.info("Unable to get ens name from cache",t)}},updateEnsCache(t){try{const e=G.getEnsCache();e[t.address]=t,oe.setItem(ce.ENS_CACHE,JSON.stringify(e))}catch{console.info("Unable to update ens name cache",t)}},removeEnsFromCache(t){try{const e=G.getEnsCache();oe.setItem(ce.ENS_CACHE,JSON.stringify({...e,[t]:void 0}))}catch{console.info("Unable to remove ens name from cache",t)}},getIdentityCache(){let t={};try{const e=oe.getItem(ce.IDENTITY_CACHE);t=e?JSON.parse(e):{}}catch{console.info("Unable to get identity cache")}return t},getIdentityFromCacheForAddress(t){try{const e=G.getIdentityCache()[t];if(e&&!this.isCacheExpired(e.timestamp,this.cacheExpiry.identity))return e.identity;G.removeIdentityFromCache(t)}catch{console.info("Unable to get identity from cache",t)}},updateIdentityCache(t){try{const e=G.getIdentityCache();e[t.address]={identity:t.identity,timestamp:t.timestamp},oe.setItem(ce.IDENTITY_CACHE,JSON.stringify(e))}catch{console.info("Unable to update identity cache",t)}},removeIdentityFromCache(t){try{const e=G.getIdentityCache();oe.setItem(ce.IDENTITY_CACHE,JSON.stringify({...e,[t]:void 0}))}catch{console.info("Unable to remove identity from cache",t)}},clearAddressCache(){try{oe.removeItem(ce.PORTFOLIO_CACHE),oe.removeItem(ce.NATIVE_BALANCE_CACHE),oe.removeItem(ce.ENS_CACHE),oe.removeItem(ce.IDENTITY_CACHE)}catch{console.info("Unable to clear address cache")}},setPreferredAccountTypes(t){try{oe.setItem(ce.PREFERRED_ACCOUNT_TYPES,JSON.stringify(t))}catch{console.info("Unable to set preferred account types",t)}},getPreferredAccountTypes(){try{const t=oe.getItem(ce.PREFERRED_ACCOUNT_TYPES);return JSON.parse(t)}catch{console.info("Unable to get preferred account types")}}},M={isMobile(){var t;return this.isClient()?!!((t=window==null?void 0:window.matchMedia("(pointer:coarse)"))!=null&&t.matches||/Android|webOS|iPhone|iPad|iPod|BlackBerry|Opera Mini/u.test(navigator.userAgent)):!1},checkCaipNetwork(t,e=""){return t==null?void 0:t.caipNetworkId.toLocaleLowerCase().includes(e.toLowerCase())},isAndroid(){if(!this.isMobile())return!1;const t=window==null?void 0:window.navigator.userAgent.toLowerCase();return M.isMobile()&&t.includes("android")},isIos(){if(!this.isMobile())return!1;const t=window==null?void 0:window.navigator.userAgent.toLowerCase();return t.includes("iphone")||t.includes("ipad")},isSafari(){return this.isClient()?(window==null?void 0:window.navigator.userAgent.toLowerCase()).includes("safari"):!1},isClient(){return typeof window<"u"},isPairingExpired(t){return t?t-Date.now()<=Oe.TEN_SEC_MS:!0},isAllowedRetry(t,e=Oe.ONE_SEC_MS){return Date.now()-t>=e},copyToClopboard(t){navigator.clipboard.writeText(t)},isIframe(){try{return(window==null?void 0:window.self)!==(window==null?void 0:window.top)}catch{return!1}},getPairingExpiry(){return Date.now()+Oe.FOUR_MINUTES_MS},getNetworkId(t){return t==null?void 0:t.split(":")[1]},getPlainAddress(t){return t==null?void 0:t.split(":")[2]},async wait(t){return new Promise(e=>{setTimeout(e,t)})},debounce(t,e=500){let r;return(...i)=>{function n(){t(...i)}r&&clearTimeout(r),r=setTimeout(n,e)}},isHttpUrl(t){return t.startsWith("http://")||t.startsWith("https://")},formatNativeUrl(t,e){if(M.isHttpUrl(t))return this.formatUniversalUrl(t,e);let r=t;r.includes("://")||(r=t.replaceAll("/","").replaceAll(":",""),r=`${r}://`),r.endsWith("/")||(r=`${r}/`),this.isTelegram()&&this.isAndroid()&&(e=encodeURIComponent(e));const i=encodeURIComponent(e);return{redirect:`${r}wc?uri=${i}`,href:r}},formatUniversalUrl(t,e){if(!M.isHttpUrl(t))return this.formatNativeUrl(t,e);let r=t;r.endsWith("/")||(r=`${r}/`);const i=encodeURIComponent(e);return{redirect:`${r}wc?uri=${i}`,href:r}},getOpenTargetForPlatform(t){return t==="popupWindow"?t:this.isTelegram()?G.getTelegramSocialProvider()?"_top":"_blank":t},openHref(t,e,r){window==null||window.open(t,this.getOpenTargetForPlatform(e),r||"noreferrer noopener")},returnOpenHref(t,e,r){return window==null?void 0:window.open(t,this.getOpenTargetForPlatform(e),r||"noreferrer noopener")},isTelegram(){return typeof window<"u"&&(!!window.TelegramWebviewProxy||!!window.Telegram||!!window.TelegramWebviewProxyProto)},async preloadImage(t){const e=new Promise((r,i)=>{const n=new Image;n.onload=r,n.onerror=i,n.crossOrigin="anonymous",n.src=t});return Promise.race([e,M.wait(2e3)])},formatBalance(t,e){let r="0.000";if(typeof t=="string"){const i=Number(t);if(i){const n=Math.floor(i*1e3)/1e3;n&&(r=n.toString())}}return`${r}${e?` ${e}`:""}`},formatBalance2(t,e){var i;let r;if(t==="0")r="0";else if(typeof t=="string"){const n=Number(t);n&&(r=(i=n.toString().match(/^-?\d+(?:\.\d{0,3})?/u))==null?void 0:i[0])}return{value:r??"0",rest:r==="0"?"000":"",symbol:e}},getApiUrl(){return Q.W3M_API_URL},getBlockchainApiUrl(){return Q.BLOCKCHAIN_API_RPC_URL},getAnalyticsUrl(){return Q.PULSE_API_URL},getUUID(){return crypto!=null&&crypto.randomUUID?crypto.randomUUID():"xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx".replace(/[xy]/gu,t=>{const e=Math.random()*16|0;return(t==="x"?e:e&3|8).toString(16)})},parseError(t){var e,r;return typeof t=="string"?t:typeof((r=(e=t==null?void 0:t.issues)==null?void 0:e[0])==null?void 0:r.message)=="string"?t.issues[0].message:t instanceof Error?t.message:"Unknown error"},sortRequestedNetworks(t,e=[]){const r={};return e&&t&&(t.forEach((i,n)=>{r[i]=n}),e.sort((i,n)=>{const s=r[i.id],o=r[n.id];return s!==void 0&&o!==void 0?s-o:s!==void 0?-1:o!==void 0?1:0})),e},calculateBalance(t){let e=0;for(const r of t)e+=r.value??0;return e},formatTokenBalance(t){const e=t.toFixed(2),[r,i]=e.split(".");return{dollars:r,pennies:i}},isAddress(t,e="eip155"){switch(e){case"eip155":if(/^(?:0x)?[0-9a-f]{40}$/iu.test(t)){if(/^(?:0x)?[0-9a-f]{40}$/iu.test(t)||/^(?:0x)?[0-9A-F]{40}$/iu.test(t))return!0}else return!1;return!1;case"solana":return/[1-9A-HJ-NP-Za-km-z]{32,44}$/iu.test(t);default:return!1}},uniqueBy(t,e){const r=new Set;return t.filter(i=>{const n=i[e];return r.has(n)?!1:(r.add(n),!0)})},generateSdkVersion(t,e,r){const i=t.length===0?Oe.ADAPTER_TYPES.UNIVERSAL:t.map(n=>n.adapterType).join(",");return`${e}-${i}-${r}`},createAccount(t,e,r,i,n){return{namespace:t,address:e,type:r,publicKey:i,path:n}},isCaipAddress(t){if(typeof t!="string")return!1;const e=t.split(":"),r=e[0];return e.filter(Boolean).length===3&&r in Q.CHAIN_NAME_MAP},isMac(){const t=window==null?void 0:window.navigator.userAgent.toLowerCase();return t.includes("macintosh")&&!t.includes("safari")},formatTelegramSocialLoginUrl(t){const e=`--${encodeURIComponent(window==null?void 0:window.location.href)}`,r="state=";if(new URL(t).host==="auth.magic.link"){const i="provider_authorization_url=",n=t.substring(t.indexOf(i)+i.length),s=this.injectIntoUrl(decodeURIComponent(n),r,e);return t.replace(n,encodeURIComponent(s))}return this.injectIntoUrl(t,r,e)},injectIntoUrl(t,e,r){const i=t.indexOf(e);if(i===-1)throw new Error(`${e} parameter not found in the URL: ${t}`);const n=t.indexOf("&",i),s=e.length,o=n!==-1?n:t.length,a=t.substring(0,i+s),c=t.substring(i+s,o),l=t.substring(n),u=c+r;return a+u+l}};async function sn(...t){const e=await fetch(...t);if(!e.ok)throw new Error(`HTTP status code: ${e.status}`,{cause:e});return e}class zo{constructor({baseUrl:e,clientId:r}){this.baseUrl=e,this.clientId=r}async get({headers:e,signal:r,cache:i,...n}){const s=this.createUrl(n);return(await sn(s,{method:"GET",headers:e,signal:r,cache:i})).json()}async getBlob({headers:e,signal:r,...i}){const n=this.createUrl(i);return(await sn(n,{method:"GET",headers:e,signal:r})).blob()}async post({body:e,headers:r,signal:i,...n}){const s=this.createUrl(n);return(await sn(s,{method:"POST",headers:r,body:e?JSON.stringify(e):void 0,signal:i})).json()}async put({body:e,headers:r,signal:i,...n}){const s=this.createUrl(n);return(await sn(s,{method:"PUT",headers:r,body:e?JSON.stringify(e):void 0,signal:i})).json()}async delete({body:e,headers:r,signal:i,...n}){const s=this.createUrl(n);return(await sn(s,{method:"DELETE",headers:r,body:e?JSON.stringify(e):void 0,signal:i})).json()}createUrl({path:e,params:r}){const i=new URL(e,this.baseUrl);return r&&Object.entries(r).forEach(([n,s])=>{s&&i.searchParams.append(n,s)}),this.clientId&&i.searchParams.append("clientId",this.clientId),i}}const Np={handleSolanaDeeplinkRedirect(t){if(w.state.activeChain===Q.CHAIN.SOLANA){const e=window.location.href,r=encodeURIComponent(e);if(t==="Phantom"&&!("phantom"in window)){const i=e.startsWith("https")?"https":"http",n=e.split("/")[2],s=encodeURIComponent(`${i}://${n}`);window.location.href=`https://phantom.app/ul/browse/${r}?ref=${s}`}t==="Coinbase Wallet"&&!("coinbaseSolana"in window)&&(window.location.href=`https://go.cb-w.com/dapp?cb_url=${r}`)}}},nt=Ae({walletImages:{},networkImages:{},chainImages:{},connectorImages:{},tokenImages:{},currencyImages:{}}),Qe={state:nt,subscribeNetworkImages(t){return De(nt.networkImages,()=>t(nt.networkImages))},subscribeKey(t,e){return qe(nt,t,e)},subscribe(t){return De(nt,()=>t(nt))},setWalletImage(t,e){nt.walletImages[t]=e},setNetworkImage(t,e){nt.networkImages[t]=e},setChainImage(t,e){nt.chainImages[t]=e},setConnectorImage(t,e){nt.connectorImages={...nt.connectorImages,[t]:e}},setTokenImage(t,e){nt.tokenImages[t]=e},setCurrencyImage(t,e){nt.currencyImages[t]=e}},Sp={eip155:"ba0ba0cd-17c6-4806-ad93-f9d174f17900",solana:"a1b58899-f671-4276-6a5e-56ca5bd59700",polkadot:"",bip122:"0b4838db-0161-4ffe-022d-532bf03dba00"},oa=Ae({networkImagePromises:{}}),$e={async fetchWalletImage(t){if(t)return await W._fetchWalletImage(t),this.getWalletImageById(t)},async fetchNetworkImage(t){return t?this.getNetworkImageById(t)||(oa.networkImagePromises[t]||(oa.networkImagePromises[t]=W._fetchNetworkImage(t)),await oa.networkImagePromises[t],this.getNetworkImageById(t)):void 0},getWalletImageById(t){if(t)return Qe.state.walletImages[t]},getWalletImage(t){if(t!=null&&t.image_url)return t==null?void 0:t.image_url;if(t!=null&&t.image_id)return Qe.state.walletImages[t.image_id]},getNetworkImage(t){var e,r,i;if((e=t==null?void 0:t.assets)!=null&&e.imageUrl)return(r=t==null?void 0:t.assets)==null?void 0:r.imageUrl;if((i=t==null?void 0:t.assets)!=null&&i.imageId)return Qe.state.networkImages[t.assets.imageId]},getNetworkImageById(t){if(t)return Qe.state.networkImages[t]},getConnectorImage(t){if(t!=null&&t.imageUrl)return t.imageUrl;if(t!=null&&t.imageId)return Qe.state.connectorImages[t.imageId]},getChainImage(t){return Qe.state.networkImages[Sp[t]]}},Pp={getFeatureValue(t,e){const r=e==null?void 0:e[t];return r===void 0?Oe.DEFAULT_FEATURES[t]:r},filterSocialsByPlatform(t){if(!t||!t.length)return t;if(M.isTelegram()){if(M.isIos())return t.filter(e=>e!=="google");if(M.isMac())return t.filter(e=>e!=="x");if(M.isAndroid())return t.filter(e=>!["facebook","x"].includes(e))}return t}},re=Ae({features:Oe.DEFAULT_FEATURES,projectId:"",sdkType:"appkit",sdkVersion:"html-wagmi-undefined",defaultAccountTypes:{solana:"eoa",bip122:"payment",polkadot:"eoa",eip155:"smartAccount"},enableNetworkSwitch:!0}),O={state:re,subscribeKey(t,e){return qe(re,t,e)},setOptions(t){Object.assign(re,t)},setFeatures(t){if(!t)return;re.features||(re.features=Oe.DEFAULT_FEATURES);const e={...re.features,...t};re.features=e,re.features.socials&&(re.features.socials=Pp.filterSocialsByPlatform(re.features.socials))},setProjectId(t){re.projectId=t},setCustomRpcUrls(t){re.customRpcUrls=t},setAllWallets(t){re.allWallets=t},setIncludeWalletIds(t){re.includeWalletIds=t},setExcludeWalletIds(t){re.excludeWalletIds=t},setFeaturedWalletIds(t){re.featuredWalletIds=t},setTokens(t){re.tokens=t},setTermsConditionsUrl(t){re.termsConditionsUrl=t},setPrivacyPolicyUrl(t){re.privacyPolicyUrl=t},setCustomWallets(t){re.customWallets=t},setIsSiweEnabled(t){re.isSiweEnabled=t},setIsUniversalProvider(t){re.isUniversalProvider=t},setSdkVersion(t){re.sdkVersion=t},setMetadata(t){re.metadata=t},setDisableAppend(t){re.disableAppend=t},setEIP6963Enabled(t){re.enableEIP6963=t},setDebug(t){re.debug=t},setEnableWalletConnect(t){re.enableWalletConnect=t},setEnableWalletGuide(t){re.enableWalletGuide=t},setEnableAuthLogger(t){re.enableAuthLogger=t},setEnableWallets(t){re.enableWallets=t},setHasMultipleAddresses(t){re.hasMultipleAddresses=t},setSIWX(t){re.siwx=t},setConnectMethodsOrder(t){re.features={...re.features,connectMethodsOrder:t}},setWalletFeaturesOrder(t){re.features={...re.features,walletFeaturesOrder:t}},setSocialsOrder(t){re.features={...re.features,socials:t}},setCollapseWallets(t){re.features={...re.features,collapseWallets:t}},setEnableEmbedded(t){re.enableEmbedded=t},setAllowUnsupportedChain(t){re.allowUnsupportedChain=t},setManualWCControl(t){re.manualWCControl=t},setEnableNetworkSwitch(t){re.enableNetworkSwitch=t},setDefaultAccountTypes(t={}){Object.entries(t).forEach(([e,r])=>{r&&(re.defaultAccountTypes[e]=r)})},setUniversalProviderConfigOverride(t){re.universalProviderConfigOverride=t},getUniversalProviderConfigOverride(){return re.universalProviderConfigOverride},getSnapshot(){return Dn(re)}},sr=Ae({message:"",variant:"info",open:!1}),wr={state:sr,subscribeKey(t,e){return qe(sr,t,e)},open(t,e){const{debug:r}=O.state,{shortMessage:i,longMessage:n}=t;r&&(sr.message=i,sr.variant=e,sr.open=!0),n&&console.error(typeof n=="function"?n():n)},close(){sr.open=!1,sr.message="",sr.variant="info"}},_p=M.getAnalyticsUrl(),Tp=new zo({baseUrl:_p,clientId:null}),Op=["MODAL_CREATED"],Ht=Ae({timestamp:Date.now(),reportedErrors:{},data:{type:"track",event:"MODAL_CREATED"}}),le={state:Ht,subscribe(t){return De(Ht,()=>t(Ht))},getSdkProperties(){const{projectId:t,sdkType:e,sdkVersion:r}=O.state;return{projectId:t,st:e,sv:r||"html-wagmi-4.2.2"}},async _sendAnalyticsEvent(t){try{const e=Y.state.address;if(Op.includes(t.data.event)||typeof window>"u")return;await Tp.post({path:"/e",params:le.getSdkProperties(),body:{eventId:M.getUUID(),url:window.location.href,domain:window.location.hostname,timestamp:t.timestamp,props:{...t.data,address:e}}}),Ht.reportedErrors.FORBIDDEN=!1}catch(e){e instanceof Error&&e.cause instanceof Response&&e.cause.status===Q.HTTP_STATUS_CODES.FORBIDDEN&&!Ht.reportedErrors.FORBIDDEN&&(wr.open({shortMessage:"Invalid App Configuration",longMessage:`Origin ${_n()?window.origin:"uknown"} not found on Allowlist - update configuration on cloud.reown.com`},"error"),Ht.reportedErrors.FORBIDDEN=!0)}},sendEvent(t){var e;Ht.timestamp=Date.now(),Ht.data=t,(e=O.state.features)!=null&&e.analytics&&le._sendAnalyticsEvent(Ht)}},$p=["1ca0bdd4747578705b1939af023d120677c64fe6ca76add81fda36e350605e79","fd20dc426fb37566d803205b19bbc1d4096b248ac04548e3cfb6b3a38bd033aa","a797aa35c0fadbfc1a53e7f675162ed5226968b44a19ee3d24385c64d1d3c393"],Rp=M.getApiUrl(),pt=new zo({baseUrl:Rp,clientId:null}),Lp=40,Tl=4,Bp=20,be=Ae({promises:{},page:1,count:0,featured:[],allFeatured:[],recommended:[],allRecommended:[],wallets:[],search:[],isAnalyticsEnabled:!1,excludedWallets:[],isFetchingRecommendedWallets:!1}),W={state:be,subscribeKey(t,e){return qe(be,t,e)},_getSdkProperties(){const{projectId:t,sdkType:e,sdkVersion:r}=O.state;return{projectId:t,st:e||"appkit",sv:r||"html-wagmi-4.2.2"}},_filterOutExtensions(t){return O.state.isUniversalProvider?t.filter(e=>!!(e.mobile_link||e.desktop_link||e.webapp_link)):t},async _fetchWalletImage(t){const e=`${pt.baseUrl}/getWalletImage/${t}`,r=await pt.getBlob({path:e,params:W._getSdkProperties()});Qe.setWalletImage(t,URL.createObjectURL(r))},async _fetchNetworkImage(t){const e=`${pt.baseUrl}/public/getAssetImage/${t}`,r=await pt.getBlob({path:e,params:W._getSdkProperties()});Qe.setNetworkImage(t,URL.createObjectURL(r))},async _fetchConnectorImage(t){const e=`${pt.baseUrl}/public/getAssetImage/${t}`,r=await pt.getBlob({path:e,params:W._getSdkProperties()});Qe.setConnectorImage(t,URL.createObjectURL(r))},async _fetchCurrencyImage(t){const e=`${pt.baseUrl}/public/getCurrencyImage/${t}`,r=await pt.getBlob({path:e,params:W._getSdkProperties()});Qe.setCurrencyImage(t,URL.createObjectURL(r))},async _fetchTokenImage(t){const e=`${pt.baseUrl}/public/getTokenImage/${t}`,r=await pt.getBlob({path:e,params:W._getSdkProperties()});Qe.setTokenImage(t,URL.createObjectURL(r))},async fetchNetworkImages(){var e;const t=(e=w.getAllRequestedCaipNetworks())==null?void 0:e.map(({assets:r})=>r==null?void 0:r.imageId).filter(Boolean).filter(r=>!$e.getNetworkImageById(r));t&&await Promise.allSettled(t.map(r=>W._fetchNetworkImage(r)))},async fetchConnectorImages(){const{connectors:t}=F.state,e=t.map(({imageId:r})=>r).filter(Boolean);await Promise.allSettled(e.map(r=>W._fetchConnectorImage(r)))},async fetchCurrencyImages(t=[]){await Promise.allSettled(t.map(e=>W._fetchCurrencyImage(e)))},async fetchTokenImages(t=[]){await Promise.allSettled(t.map(e=>W._fetchTokenImage(e)))},async fetchWallets(t){var r,i;const e=t.exclude??[];return W._getSdkProperties().sv.startsWith("html-core-")&&e.push(...$p),await pt.get({path:"/getWallets",params:{...W._getSdkProperties(),...t,page:String(t.page),entries:String(t.entries),include:(r=t.include)==null?void 0:r.join(","),exclude:(i=t.exclude)==null?void 0:i.join(",")}})},async fetchFeaturedWallets(){const{featuredWalletIds:t}=O.state;if(t!=null&&t.length){const e={...W._getSdkProperties(),page:1,entries:(t==null?void 0:t.length)??Tl,include:t},{data:r}=await W.fetchWallets(e);r.sort((n,s)=>t.indexOf(n.id)-t.indexOf(s.id));const i=r.map(n=>n.image_id).filter(Boolean);await Promise.allSettled(i.map(n=>W._fetchWalletImage(n))),be.featured=r,be.allFeatured=r}},async fetchRecommendedWallets(){try{be.isFetchingRecommendedWallets=!0;const{includeWalletIds:t,excludeWalletIds:e,featuredWalletIds:r}=O.state,i=[...e??[],...r??[]].filter(Boolean),n=w.getRequestedCaipNetworkIds().join(","),s={page:1,entries:Tl,include:t,exclude:i,chains:n},{data:o,count:a}=await W.fetchWallets(s),c=G.getRecentWallets(),l=o.map(d=>d.image_id).filter(Boolean),u=c.map(d=>d.image_id).filter(Boolean);await Promise.allSettled([...l,...u].map(d=>W._fetchWalletImage(d))),be.recommended=o,be.allRecommended=o,be.count=a??0}catch{}finally{be.isFetchingRecommendedWallets=!1}},async fetchWalletsByPage({page:t}){const{includeWalletIds:e,excludeWalletIds:r,featuredWalletIds:i}=O.state,n=w.getRequestedCaipNetworkIds().join(","),s=[...be.recommended.map(({id:u})=>u),...r??[],...i??[]].filter(Boolean),o={page:t,entries:Lp,include:e,exclude:s,chains:n},{data:a,count:c}=await W.fetchWallets(o),l=a.slice(0,Bp).map(u=>u.image_id).filter(Boolean);await Promise.allSettled(l.map(u=>W._fetchWalletImage(u))),be.wallets=M.uniqueBy([...be.wallets,...W._filterOutExtensions(a)],"id"),be.count=c>be.count?c:be.count,be.page=t},async initializeExcludedWallets({ids:t}){const e=w.getRequestedCaipNetworkIds().join(","),r={page:1,entries:t.length,include:t,chains:e},{data:i}=await W.fetchWallets(r);i&&i.forEach(n=>{be.excludedWallets.push({rdns:n.rdns,name:n.name})})},async searchWallet({search:t,badge:e}){const{includeWalletIds:r,excludeWalletIds:i}=O.state,n=w.getRequestedCaipNetworkIds().join(",");be.search=[];const s={page:1,entries:100,search:t==null?void 0:t.trim(),badge_type:e,include:r,exclude:i,chains:n},{data:o}=await W.fetchWallets(s);le.sendEvent({type:"track",event:"SEARCH_WALLET",properties:{badge:e??"",search:t??""}});const a=o.map(c=>c.image_id).filter(Boolean);await Promise.allSettled([...a.map(c=>W._fetchWalletImage(c)),M.wait(300)]),be.search=W._filterOutExtensions(o)},initPromise(t,e){return be.promises[t]||(be.promises[t]=e())},prefetch({fetchConnectorImages:t=!0,fetchFeaturedWallets:e=!0,fetchRecommendedWallets:r=!0,fetchNetworkImages:i=!0}={}){const n=[t&&W.initPromise("connectorImages",W.fetchConnectorImages),e&&W.initPromise("featuredWallets",W.fetchFeaturedWallets),r&&W.initPromise("recommendedWallets",W.fetchRecommendedWallets),i&&W.initPromise("networkImages",W.fetchNetworkImages)].filter(Boolean);return Promise.allSettled(n)},prefetchAnalyticsConfig(){var t;(t=O.state.features)!=null&&t.analytics&&W.fetchAnalyticsConfig()},async fetchAnalyticsConfig(){try{const{isAnalyticsEnabled:t}=await pt.get({path:"/getAnalyticsConfig",params:W._getSdkProperties()});O.setFeatures({analytics:t})}catch{O.setFeatures({analytics:!1})}},setFilterByNamespace(t){if(!t){be.featured=be.allFeatured,be.recommended=be.allRecommended;return}const e=w.getRequestedCaipNetworkIds().join(",");be.featured=be.allFeatured.filter(r=>{var i;return(i=r.chains)==null?void 0:i.some(n=>e.includes(n))}),be.recommended=be.allRecommended.filter(r=>{var i;return(i=r.chains)==null?void 0:i.some(n=>e.includes(n))})}},ve=Ae({view:"Connect",history:["Connect"],transactionStack:[]}),H={state:ve,subscribeKey(t,e){return qe(ve,t,e)},pushTransactionStack(t){ve.transactionStack.push(t)},popTransactionStack(t){var r,i;const e=ve.transactionStack.pop();if(e)if(t)this.goBack(),(r=e==null?void 0:e.onCancel)==null||r.call(e);else{if(e.goBack)this.goBack();else if(e.replace){const n=ve.history.indexOf("ConnectingSiwe");n>0?this.goBackToIndex(n-1):(he.close(),ve.history=[])}else e.view&&this.reset(e.view);(i=e==null?void 0:e.onSuccess)==null||i.call(e)}},push(t,e){t!==ve.view&&(ve.view=t,ve.history.push(t),ve.data=e)},reset(t,e){ve.view=t,ve.history=[t],ve.data=e},replace(t,e){ve.history.at(-1)===t||(ve.view=t,ve.history[ve.history.length-1]=t,ve.data=e)},goBack(){var e;const t=!w.state.activeCaipAddress&&this.state.view==="ConnectingFarcaster";if(ve.history.length>1&&!ve.history.includes("UnsupportedChain")){ve.history.pop();const[r]=ve.history.slice(-1);r&&(ve.view=r)}else he.close();(e=ve.data)!=null&&e.wallet&&(ve.data.wallet=void 0),setTimeout(()=>{var r,i,n;if(t){Y.setFarcasterUrl(void 0,w.state.activeChain);const s=F.getAuthConnector();(r=s==null?void 0:s.provider)==null||r.reload();const o=Dn(O.state);(n=(i=s==null?void 0:s.provider)==null?void 0:i.syncDappData)==null||n.call(i,{metadata:o.metadata,sdkVersion:o.sdkVersion,projectId:o.projectId,sdkType:o.sdkType})}},100)},goBackToIndex(t){if(ve.history.length>1){ve.history=ve.history.slice(0,t+1);const[e]=ve.history.slice(-1);e&&(ve.view=e)}}},Wt=Ae({themeMode:"dark",themeVariables:{},w3mThemeVariables:void 0}),Te={state:Wt,subscribe(t){return De(Wt,()=>t(Wt))},setThemeMode(t){Wt.themeMode=t;try{const e=F.getAuthConnector();if(e){const r=Te.getSnapshot().themeVariables;e.provider.syncTheme({themeMode:t,themeVariables:r,w3mThemeVariables:fr(r,t)})}}catch{console.info("Unable to sync theme to auth connector")}},setThemeVariables(t){Wt.themeVariables={...Wt.themeVariables,...t};try{const e=F.getAuthConnector();if(e){const r=Te.getSnapshot().themeVariables;e.provider.syncTheme({themeVariables:r,w3mThemeVariables:fr(Wt.themeVariables,Wt.themeMode)})}}catch{console.info("Unable to sync theme to auth connector")}},getSnapshot(){return Dn(Wt)}},Ad={eip155:void 0,solana:void 0,polkadot:void 0,bip122:void 0},ye=Ae({allConnectors:[],connectors:[],activeConnector:void 0,filterByNamespace:void 0,activeConnectorIds:{...Ad}}),F={state:ye,subscribe(t){return De(ye,()=>{t(ye)})},subscribeKey(t,e){return qe(ye,t,e)},initialize(t){t.forEach(e=>{const r=G.getConnectedConnectorId(e);r&&this.setConnectorId(r,e)})},setActiveConnector(t){t&&(ye.activeConnector=Xr(t))},setConnectors(t){t.filter(e=>!ye.allConnectors.some(r=>r.id===e.id&&this.getConnectorName(r.name)===this.getConnectorName(e.name)&&r.chain===e.chain)).forEach(e=>{e.type!=="MULTI_CHAIN"&&ye.allConnectors.push(Xr(e))}),ye.connectors=this.mergeMultiChainConnectors(ye.allConnectors)},removeAdapter(t){ye.allConnectors=ye.allConnectors.filter(e=>e.chain!==t),ye.connectors=this.mergeMultiChainConnectors(ye.allConnectors)},mergeMultiChainConnectors(t){const e=this.generateConnectorMapByName(t),r=[];return e.forEach(i=>{const n=i[0],s=(n==null?void 0:n.id)===Q.CONNECTOR_ID.AUTH;i.length>1&&n?r.push({name:n.name,imageUrl:n.imageUrl,imageId:n.imageId,connectors:[...i],type:s?"AUTH":"MULTI_CHAIN",chain:"eip155",id:(n==null?void 0:n.id)||""}):n&&r.push(n)}),r},generateConnectorMapByName(t){const e=new Map;return t.forEach(r=>{const{name:i}=r,n=this.getConnectorName(i);if(!n)return;const s=e.get(n)||[];s.find(o=>o.chain===r.chain)||s.push(r),e.set(n,s)}),e},getConnectorName(t){return t&&({"Trust Wallet":"Trust"}[t]||t)},getUniqueConnectorsByName(t){const e=[];return t.forEach(r=>{e.find(i=>i.chain===r.chain)||e.push(r)}),e},addConnector(t){var e,r,i;if(t.id===Q.CONNECTOR_ID.AUTH){const n=t,s=Dn(O.state),o=Te.getSnapshot().themeMode,a=Te.getSnapshot().themeVariables;(r=(e=n==null?void 0:n.provider)==null?void 0:e.syncDappData)==null||r.call(e,{metadata:s.metadata,sdkVersion:s.sdkVersion,projectId:s.projectId,sdkType:s.sdkType}),(i=n==null?void 0:n.provider)==null||i.syncTheme({themeMode:o,themeVariables:a,w3mThemeVariables:fr(a,o)}),this.setConnectors([t])}else this.setConnectors([t])},getAuthConnector(t){var i;const e=t||w.state.activeChain,r=ye.connectors.find(n=>n.id===Q.CONNECTOR_ID.AUTH);if(r)return(i=r==null?void 0:r.connectors)!=null&&i.length?r.connectors.find(n=>n.chain===e):r},getAnnouncedConnectorRdns(){return ye.connectors.filter(t=>t.type==="ANNOUNCED").map(t=>{var e;return(e=t.info)==null?void 0:e.rdns})},getConnectorById(t){return ye.allConnectors.find(e=>e.id===t)},getConnector(t,e){return ye.allConnectors.filter(r=>r.chain===w.state.activeChain).find(r=>{var i;return r.explorerId===t||((i=r.info)==null?void 0:i.rdns)===e})},syncIfAuthConnector(t){var s,o;if(t.id!=="ID_AUTH")return;const e=t,r=Dn(O.state),i=Te.getSnapshot().themeMode,n=Te.getSnapshot().themeVariables;(o=(s=e==null?void 0:e.provider)==null?void 0:s.syncDappData)==null||o.call(s,{metadata:r.metadata,sdkVersion:r.sdkVersion,sdkType:r.sdkType,projectId:r.projectId}),e.provider.syncTheme({themeMode:i,themeVariables:n,w3mThemeVariables:fr(n,i)})},getConnectorsByNamespace(t){const e=ye.allConnectors.filter(r=>r.chain===t);return this.mergeMultiChainConnectors(e)},selectWalletConnector(t){const e=F.getConnector(t.id,t.rdns);w.state.activeChain===Q.CHAIN.SOLANA&&Np.handleSolanaDeeplinkRedirect((e==null?void 0:e.name)||t.name||""),e?H.push("ConnectingExternal",{connector:e}):H.push("ConnectingWalletConnect",{wallet:t})},getConnectors(t){return t?this.getConnectorsByNamespace(t):this.mergeMultiChainConnectors(ye.allConnectors)},setFilterByNamespace(t){ye.filterByNamespace=t,ye.connectors=this.getConnectors(t),W.setFilterByNamespace(t)},setConnectorId(t,e){t&&(ye.activeConnectorIds={...ye.activeConnectorIds,[e]:t},G.setConnectedConnectorId(e,t))},removeConnectorId(t){ye.activeConnectorIds={...ye.activeConnectorIds,[t]:void 0},G.deleteConnectedConnectorId(t)},getConnectorId(t){if(t)return ye.activeConnectorIds[t]},isConnected(t){return t?!!ye.activeConnectorIds[t]:Object.values(ye.activeConnectorIds).some(e=>!!e)},resetConnectorIds(){ye.activeConnectorIds={...Ad}}};function Ts(t,e){return F.getConnectorId(t)===e}function Up(t){const e=Array.from(w.state.chains.keys());let r=[];return t?(r.push([t,w.state.chains.get(t)]),Ts(t,Q.CONNECTOR_ID.WALLET_CONNECT)?e.forEach(i=>{i!==t&&Ts(i,Q.CONNECTOR_ID.WALLET_CONNECT)&&r.push([i,w.state.chains.get(i)])}):Ts(t,Q.CONNECTOR_ID.AUTH)&&e.forEach(i=>{i!==t&&Ts(i,Q.CONNECTOR_ID.AUTH)&&r.push([i,w.state.chains.get(i)])})):r=Array.from(w.state.chains.entries()),r}const hr={SAFE_RPC_METHODS:["eth_accounts","eth_blockNumber","eth_call","eth_chainId","eth_estimateGas","eth_feeHistory","eth_gasPrice","eth_getAccount","eth_getBalance","eth_getBlockByHash","eth_getBlockByNumber","eth_getBlockReceipts","eth_getBlockTransactionCountByHash","eth_getBlockTransactionCountByNumber","eth_getCode","eth_getFilterChanges","eth_getFilterLogs","eth_getLogs","eth_getProof","eth_getStorageAt","eth_getTransactionByBlockHashAndIndex","eth_getTransactionByBlockNumberAndIndex","eth_getTransactionByHash","eth_getTransactionCount","eth_getTransactionReceipt","eth_getUncleCountByBlockHash","eth_getUncleCountByBlockNumber","eth_maxPriorityFeePerGas","eth_newBlockFilter","eth_newFilter","eth_newPendingTransactionFilter","eth_sendRawTransaction","eth_syncing","eth_uninstallFilter","wallet_getCapabilities","wallet_getCallsStatus","eth_getUserOperationReceipt","eth_estimateUserOperationGas","eth_getUserOperationByHash","eth_supportedEntryPoints","wallet_getAssets"],NOT_SAFE_RPC_METHODS:["personal_sign","eth_signTypedData_v4","eth_sendTransaction","solana_signMessage","solana_signTransaction","solana_signAllTransactions","solana_signAndSendTransaction","wallet_sendCalls","wallet_grantPermissions","wallet_revokePermissions","eth_sendUserOperation"],GET_CHAIN_ID:"eth_chainId",RPC_METHOD_NOT_ALLOWED_MESSAGE:"Requested RPC call is not allowed",RPC_METHOD_NOT_ALLOWED_UI_MESSAGE:"Action not allowed",ACCOUNT_TYPES:{EOA:"eoa",SMART_ACCOUNT:"smartAccount"}},jr=Object.freeze({message:"",variant:"success",svg:void 0,open:!1,autoClose:!0}),_e=Ae({...jr}),Ee={state:_e,subscribeKey(t,e){return qe(_e,t,e)},showLoading(t,e={}){this._showMessage({message:t,variant:"loading",...e})},showSuccess(t){this._showMessage({message:t,variant:"success"})},showSvg(t,e){this._showMessage({message:t,svg:e})},showError(t){const e=M.parseError(t);this._showMessage({message:e,variant:"error"})},hide(){_e.message=jr.message,_e.variant=jr.variant,_e.svg=jr.svg,_e.open=jr.open,_e.autoClose=jr.autoClose},_showMessage({message:t,svg:e,variant:r="success",autoClose:i=jr.autoClose}){_e.open?(_e.open=!1,setTimeout(()=>{_e.message=t,_e.variant=r,_e.svg=e,_e.open=!0,_e.autoClose=i},150)):(_e.message=t,_e.variant=r,_e.svg=e,_e.open=!0,_e.autoClose=i)}},mr={getSIWX(){return O.state.siwx},async initializeIfEnabled(){var s;const t=O.state.siwx,e=w.getActiveCaipAddress();if(!(t&&e))return;const[r,i,n]=e.split(":");if(w.checkIfSupportedNetwork(r))try{if((await t.getSessions(`${r}:${i}`,n)).length)return;await he.open({view:"SIWXSignMessage"})}catch(o){console.error("SIWXUtil:initializeIfEnabled",o),le.sendEvent({type:"track",event:"SIWX_AUTH_ERROR",properties:this.getSIWXEventProperties()}),await((s=K._getClient())==null?void 0:s.disconnect().catch(console.error)),H.reset("Connect"),Ee.showError("A problem occurred while trying initialize authentication")}},async requestSignMessage(){const t=O.state.siwx,e=M.getPlainAddress(w.getActiveCaipAddress()),r=w.getActiveCaipNetwork(),i=K._getClient();if(!t)throw new Error("SIWX is not enabled");if(!e)throw new Error("No ActiveCaipAddress found");if(!r)throw new Error("No ActiveCaipNetwork or client found");if(!i)throw new Error("No ConnectionController client found");try{const n=await t.createMessage({chainId:r.caipNetworkId,accountAddress:e}),s=n.toString();F.getConnectorId(r.chainNamespace)===Q.CONNECTOR_ID.AUTH&&H.pushTransactionStack({view:null,goBack:!1,replace:!0});const o=await i.signMessage(s);await t.addSession({data:n,message:s,signature:o}),he.close(),le.sendEvent({type:"track",event:"SIWX_AUTH_SUCCESS",properties:this.getSIWXEventProperties()})}catch(n){const s=this.getSIWXEventProperties();(!he.state.open||H.state.view==="ApproveTransaction")&&await he.open({view:"SIWXSignMessage"}),s.isSmartAccount?Ee.showError("This application might not support Smart Accounts"):Ee.showError("Signature declined"),le.sendEvent({type:"track",event:"SIWX_AUTH_ERROR",properties:s}),console.error("SWIXUtil:requestSignMessage",n)}},async cancelSignMessage(){var t,e;try{(e=(t=this.getSIWX())==null?void 0:t.getRequired)!=null&&e.call(t)?await K.disconnect():he.close(),H.reset("Connect"),le.sendEvent({event:"CLICK_CANCEL_SIWX",type:"track",properties:this.getSIWXEventProperties()})}catch(r){console.error("SIWXUtil:cancelSignMessage",r)}},async getSessions(){const t=O.state.siwx,e=M.getPlainAddress(w.getActiveCaipAddress()),r=w.getActiveCaipNetwork();return t&&e&&r?t.getSessions(r.caipNetworkId,e):[]},async isSIWXCloseDisabled(){var e;const t=this.getSIWX();if(t){const r=H.state.view==="ApproveTransaction",i=H.state.view==="SIWXSignMessage";if(r||i)return((e=t.getRequired)==null?void 0:e.call(t))&&(await this.getSessions()).length===0}return!1},async universalProviderAuthenticate({universalProvider:t,chains:e,methods:r}){var a,c,l;const i=mr.getSIWX(),n=new Set(e.map(u=>u.split(":")[0]));if(!i||n.size!==1||!n.has("eip155"))return!1;const s=await i.createMessage({chainId:((a=w.getActiveCaipNetwork())==null?void 0:a.caipNetworkId)||"",accountAddress:""}),o=await t.authenticate({nonce:s.nonce,domain:s.domain,uri:s.uri,exp:s.expirationTime,iat:s.issuedAt,nbf:s.notBefore,requestId:s.requestId,version:s.version,resources:s.resources,statement:s.statement,chainId:s.chainId,methods:r,chains:[s.chainId,...e.filter(u=>u!==s.chainId)]});if(Ee.showLoading("Authenticating...",{autoClose:!1}),Y.setConnectedWalletInfo({...o.session.peer.metadata,name:o.session.peer.metadata.name,icon:(c=o.session.peer.metadata.icons)==null?void 0:c[0],type:"WALLET_CONNECT"},Array.from(n)[0]),(l=o==null?void 0:o.auths)==null?void 0:l.length){const u=o.auths.map(d=>{const h=t.client.formatAuthMessage({request:d.p,iss:d.p.iss});return{data:{...d.p,accountAddress:d.p.iss.split(":").slice(-1).join(""),chainId:d.p.iss.split(":").slice(2,4).join(":"),uri:d.p.aud,version:d.p.version||s.version,expirationTime:d.p.exp,issuedAt:d.p.iat,notBefore:d.p.nbf},message:h,signature:d.s.s,cacao:d}});try{await i.setSessions(u),le.sendEvent({type:"track",event:"SIWX_AUTH_SUCCESS",properties:mr.getSIWXEventProperties()})}catch(d){throw console.error("SIWX:universalProviderAuth - failed to set sessions",d),le.sendEvent({type:"track",event:"SIWX_AUTH_ERROR",properties:mr.getSIWXEventProperties()}),await t.disconnect().catch(console.error),d}finally{Ee.hide()}}return!0},getSIWXEventProperties(){var e,r;const t=w.state.activeChain;return{network:((e=w.state.activeCaipNetwork)==null?void 0:e.caipNetworkId)||"",isSmartAccount:((r=Y.state.preferredAccountTypes)==null?void 0:r[t])===hr.ACCOUNT_TYPES.SMART_ACCOUNT}},async clearSessions(){const t=this.getSIWX();t&&await t.setSessions([])}},ke=Ae({transactions:[],coinbaseTransactions:{},transactionsByYear:{},lastNetworkInView:void 0,loading:!1,empty:!1,next:void 0}),Mp={state:ke,subscribe(t){return De(ke,()=>t(ke))},setLastNetworkInView(t){ke.lastNetworkInView=t},async fetchTransactions(t,e){var r,i;if(!t)throw new Error("Transactions can't be fetched without an accountAddress");ke.loading=!0;try{const n=await ie.fetchTransactions({account:t,cursor:ke.next,onramp:e,cache:e==="coinbase"?"no-cache":void 0,chainId:(r=w.state.activeCaipNetwork)==null?void 0:r.caipNetworkId}),s=this.filterSpamTransactions(n.data),o=this.filterByConnectedChain(s),a=[...ke.transactions,...o];ke.loading=!1,e==="coinbase"?ke.coinbaseTransactions=this.groupTransactionsByYearAndMonth(ke.coinbaseTransactions,n.data):(ke.transactions=a,ke.transactionsByYear=this.groupTransactionsByYearAndMonth(ke.transactionsByYear,o)),ke.empty=a.length===0,ke.next=n.next?n.next:void 0}catch{const n=w.state.activeChain;le.sendEvent({type:"track",event:"ERROR_FETCH_TRANSACTIONS",properties:{address:t,projectId:O.state.projectId,cursor:ke.next,isSmartAccount:((i=Y.state.preferredAccountTypes)==null?void 0:i[n])===hr.ACCOUNT_TYPES.SMART_ACCOUNT}}),Ee.showError("Failed to fetch transactions"),ke.loading=!1,ke.empty=!0,ke.next=void 0}},groupTransactionsByYearAndMonth(t={},e=[]){const r=t;return e.forEach(i=>{const n=new Date(i.metadata.minedAt).getFullYear(),s=new Date(i.metadata.minedAt).getMonth(),o=r[n]??{},a=(o[s]??[]).filter(c=>c.id!==i.id);r[n]={...o,[s]:[...a,i].sort((c,l)=>new Date(l.metadata.minedAt).getTime()-new Date(c.metadata.minedAt).getTime())}}),r},filterSpamTransactions(t){return t.filter(e=>!e.transfers.every(r=>{var i;return((i=r.nft_info)==null?void 0:i.flags.is_spam)===!0}))},filterByConnectedChain(t){var r;const e=(r=w.state.activeCaipNetwork)==null?void 0:r.caipNetworkId;return t.filter(i=>i.metadata.chain===e)},clearCursor(){ke.next=void 0},resetTransactions(){ke.transactions=[],ke.transactionsByYear={},ke.lastNetworkInView=void 0,ke.loading=!1,ke.empty=!1,ke.next=void 0}},Ie=Ae({wcError:!1,buffering:!1,status:"disconnected"});let vi;const K={state:Ie,subscribeKey(t,e){return qe(Ie,t,e)},_getClient(){return Ie._client},setClient(t){Ie._client=Xr(t)},async connectWalletConnect(){var t,e,r,i;if(M.isTelegram()||M.isSafari()&&M.isIos()){if(vi){await vi,vi=void 0;return}if(!M.isPairingExpired(Ie==null?void 0:Ie.wcPairingExpiry)){const n=Ie.wcUri;Ie.wcUri=n;return}vi=(e=(t=this._getClient())==null?void 0:t.connectWalletConnect)==null?void 0:e.call(t).catch(()=>{}),this.state.status="connecting",await vi,vi=void 0,Ie.wcPairingExpiry=void 0,this.state.status="connected"}else await((i=(r=this._getClient())==null?void 0:r.connectWalletConnect)==null?void 0:i.call(r))},async connectExternal(t,e,r=!0){var i,n;await((n=(i=this._getClient())==null?void 0:i.connectExternal)==null?void 0:n.call(i,t)),r&&w.setActiveNamespace(e)},async reconnectExternal(t){var r,i;await((i=(r=this._getClient())==null?void 0:r.reconnectExternal)==null?void 0:i.call(r,t));const e=t.chain||w.state.activeChain;e&&F.setConnectorId(t.id,e)},async setPreferredAccountType(t,e){var i;he.setLoading(!0,w.state.activeChain);const r=F.getAuthConnector();r&&(Y.setPreferredAccountType(t,e),await r.provider.setPreferredAccount(t),G.setPreferredAccountTypes(Y.state.preferredAccountTypes??{[e]:t}),await this.reconnectExternal(r),he.setLoading(!1,w.state.activeChain),le.sendEvent({type:"track",event:"SET_PREFERRED_ACCOUNT_TYPE",properties:{accountType:t,network:((i=w.state.activeCaipNetwork)==null?void 0:i.caipNetworkId)||""}}))},async signMessage(t){var e;return(e=this._getClient())==null?void 0:e.signMessage(t)},parseUnits(t,e){var r;return(r=this._getClient())==null?void 0:r.parseUnits(t,e)},formatUnits(t,e){var r;return(r=this._getClient())==null?void 0:r.formatUnits(t,e)},async sendTransaction(t){var e;return(e=this._getClient())==null?void 0:e.sendTransaction(t)},async getCapabilities(t){var e;return(e=this._getClient())==null?void 0:e.getCapabilities(t)},async grantPermissions(t){var e;return(e=this._getClient())==null?void 0:e.grantPermissions(t)},async walletGetAssets(t){var e;return((e=this._getClient())==null?void 0:e.walletGetAssets(t))??{}},async estimateGas(t){var e;return(e=this._getClient())==null?void 0:e.estimateGas(t)},async writeContract(t){var e;return(e=this._getClient())==null?void 0:e.writeContract(t)},async getEnsAddress(t){var e;return(e=this._getClient())==null?void 0:e.getEnsAddress(t)},async getEnsAvatar(t){var e;return(e=this._getClient())==null?void 0:e.getEnsAvatar(t)},checkInstalled(t){var e,r;return((r=(e=this._getClient())==null?void 0:e.checkInstalled)==null?void 0:r.call(e,t))||!1},resetWcConnection(){Ie.wcUri=void 0,Ie.wcPairingExpiry=void 0,Ie.wcLinking=void 0,Ie.recentWallet=void 0,Ie.status="disconnected",Mp.resetTransactions(),G.deleteWalletConnectDeepLink()},resetUri(){Ie.wcUri=void 0,Ie.wcPairingExpiry=void 0},finalizeWcConnection(){var r,i;const{wcLinking:t,recentWallet:e}=K.state;t&&G.setWalletConnectDeepLink(t),e&&G.setAppKitRecent(e),le.sendEvent({type:"track",event:"CONNECT_SUCCESS",properties:{method:t?"mobile":"qrcode",name:((i=(r=H.state.data)==null?void 0:r.wallet)==null?void 0:i.name)||"Unknown"}})},setWcBasic(t){Ie.wcBasic=t},setUri(t){Ie.wcUri=t,Ie.wcPairingExpiry=M.getPairingExpiry()},setWcLinking(t){Ie.wcLinking=t},setWcError(t){Ie.wcError=t,Ie.buffering=!1},setRecentWallet(t){Ie.recentWallet=t},setBuffering(t){Ie.buffering=t},setStatus(t){Ie.status=t},async disconnect(t){try{he.setLoading(!0,t),await mr.clearSessions(),await w.disconnect(t),he.setLoading(!1,t),F.setFilterByNamespace(void 0)}catch{throw new Error("Failed to disconnect")}}},bi=Ae({loading:!1,open:!1,selectedNetworkId:void 0,activeChain:void 0,initialized:!1}),tr={state:bi,subscribe(t){return De(bi,()=>t(bi))},subscribeOpen(t){return qe(bi,"open",t)},set(t){Object.assign(bi,{...bi,...t})}};function gs(t,{strict:e=!0}={}){return!t||typeof t!="string"?!1:e?/^0x[0-9a-fA-F]*$/.test(t):t.startsWith("0x")}function Hi(t){return gs(t,{strict:!1})?Math.ceil((t.length-2)/2):t.length}const kd="2.27.0";let on={getDocsUrl:({docsBaseUrl:t,docsPath:e="",docsSlug:r})=>e?`${t??"https://viem.sh"}${e}${r?`#${r}`:""}`:void 0,version:`viem@${kd}`};class we extends Error{constructor(e,r={}){var a,c;const i=r.cause instanceof we?r.cause.details:(a=r.cause)!=null&&a.message?r.cause.message:r.details,n=r.cause instanceof we&&r.cause.docsPath||r.docsPath,s=(c=on.getDocsUrl)==null?void 0:c.call(on,{...r,docsPath:n}),o=[e||"An error occurred.","",...r.metaMessages?[...r.metaMessages,""]:[],...s?[`Docs: ${s}`]:[],...i?[`Details: ${i}`]:[],...on.version?[`Version: ${on.version}`]:[]].join(`
`);super(o,r.cause?{cause:r.cause}:void 0),Object.defineProperty(this,"details",{enumerable:!0,configurable:!0,writable:!0,value:void 0}),Object.defineProperty(this,"docsPath",{enumerable:!0,configurable:!0,writable:!0,value:void 0}),Object.defineProperty(this,"metaMessages",{enumerable:!0,configurable:!0,writable:!0,value:void 0}),Object.defineProperty(this,"shortMessage",{enumerable:!0,configurable:!0,writable:!0,value:void 0}),Object.defineProperty(this,"version",{enumerable:!0,configurable:!0,writable:!0,value:void 0}),Object.defineProperty(this,"name",{enumerable:!0,configurable:!0,writable:!0,value:"BaseError"}),this.details=i,this.docsPath=n,this.metaMessages=r.metaMessages,this.name=r.name??this.name,this.shortMessage=e,this.version=kd}walk(e){return Id(this,e)}}function Id(t,e){return e!=null&&e(t)?t:t&&typeof t=="object"&&"cause"in t&&t.cause!==void 0?Id(t.cause,e):e?null:t}class zp extends we{constructor({offset:e,position:r,size:i}){super(`Slice ${r==="start"?"starting":"ending"} at offset "${e}" is out-of-bounds (size: ${i}).`,{name:"SliceOffsetOutOfBoundsError"})}}class Nd extends we{constructor({size:e,targetSize:r,type:i}){super(`${i.charAt(0).toUpperCase()}${i.slice(1).toLowerCase()} size (${e}) exceeds padding size (${r}).`,{name:"SizeExceedsPaddingSizeError"})}}function Xi(t,{dir:e,size:r=32}={}){return typeof t=="string"?jp(t,{dir:e,size:r}):Dp(t,{dir:e,size:r})}function jp(t,{dir:e,size:r=32}={}){if(r===null)return t;const i=t.replace("0x","");if(i.length>r*2)throw new Nd({size:Math.ceil(i.length/2),targetSize:r,type:"hex"});return`0x${i[e==="right"?"padEnd":"padStart"](r*2,"0")}`}function Dp(t,{dir:e,size:r=32}={}){if(r===null)return t;if(t.length>r)throw new Nd({size:t.length,targetSize:r,type:"bytes"});const i=new Uint8Array(r);for(let n=0;n<r;n++){const s=e==="right";i[s?n:r-n-1]=t[s?n:t.length-n-1]}return i}class Hp extends we{constructor({max:e,min:r,signed:i,size:n,value:s}){super(`Number "${s}" is not in safe ${n?`${n*8}-bit ${i?"signed":"unsigned"} `:""}integer range ${e?`(${r} to ${e})`:`(above ${r})`}`,{name:"IntegerOutOfRangeError"})}}class Wp extends we{constructor({givenSize:e,maxSize:r}){super(`Size cannot exceed ${r} bytes. Given size: ${e} bytes.`,{name:"SizeOverflowError"})}}function Ao(t,{dir:e="left"}={}){let r=typeof t=="string"?t.replace("0x",""):t,i=0;for(let n=0;n<r.length-1&&r[e==="left"?n:r.length-n-1].toString()==="0";n++)i++;return r=e==="left"?r.slice(i):r.slice(0,r.length-i),typeof t=="string"?(r.length===1&&e==="right"&&(r=`${r}0`),`0x${r.length%2===1?`0${r}`:r}`):r}function Qi(t,{size:e}){if(Hi(t)>e)throw new Wp({givenSize:Hi(t),maxSize:e})}function Pi(t,e={}){const{signed:r}=e;e.size&&Qi(t,{size:e.size});const i=BigInt(t);if(!r)return i;const n=(t.length-2)/2,s=(1n<<BigInt(n)*8n-1n)-1n;return i<=s?i:i-BigInt(`0x${"f".padStart(n*2,"f")}`)-1n}function ko(t,e={}){return Number(Pi(t,e))}const Fp=Array.from({length:256},(t,e)=>e.toString(16).padStart(2,"0"));function ae(t,e={}){return typeof t=="number"||typeof t=="bigint"?Sd(t,e):typeof t=="string"?Pd(t,e):typeof t=="boolean"?qp(t,e):xr(t,e)}function qp(t,e={}){const r=`0x${Number(t)}`;return typeof e.size=="number"?(Qi(r,{size:e.size}),Xi(r,{size:e.size})):r}function xr(t,e={}){let r="";for(let n=0;n<t.length;n++)r+=Fp[t[n]];const i=`0x${r}`;return typeof e.size=="number"?(Qi(i,{size:e.size}),Xi(i,{dir:"right",size:e.size})):i}function Sd(t,e={}){const{signed:r,size:i}=e,n=BigInt(t);let s;i?r?s=(1n<<BigInt(i)*8n-1n)-1n:s=2n**(BigInt(i)*8n)-1n:typeof t=="number"&&(s=BigInt(Number.MAX_SAFE_INTEGER));const o=typeof s=="bigint"&&r?-s-1n:0;if(s&&n>s||n<o){const c=typeof t=="bigint"?"n":"";throw new Hp({max:s?`${s}${c}`:void 0,min:`${o}${c}`,signed:r,size:i,value:`${t}${c}`})}const a=`0x${(r&&n<0?(1n<<BigInt(i*8))+BigInt(n):n).toString(16)}`;return i?Xi(a,{size:i}):a}const Vp=new TextEncoder;function Pd(t,e={}){const r=Vp.encode(t);return xr(r,e)}const Zp=new TextEncoder;function _d(t,e={}){return typeof t=="number"||typeof t=="bigint"?Kp(t,e):typeof t=="boolean"?Gp(t,e):gs(t)?Qr(t,e):Td(t,e)}function Gp(t,e={}){const r=new Uint8Array(1);return r[0]=Number(t),typeof e.size=="number"?(Qi(r,{size:e.size}),Xi(r,{size:e.size})):r}const Ft={zero:48,nine:57,A:65,F:70,a:97,f:102};function Ol(t){if(t>=Ft.zero&&t<=Ft.nine)return t-Ft.zero;if(t>=Ft.A&&t<=Ft.F)return t-(Ft.A-10);if(t>=Ft.a&&t<=Ft.f)return t-(Ft.a-10)}function Qr(t,e={}){let r=t;e.size&&(Qi(r,{size:e.size}),r=Xi(r,{dir:"right",size:e.size}));let i=r.slice(2);i.length%2&&(i=`0${i}`);const n=i.length/2,s=new Uint8Array(n);for(let o=0,a=0;o<n;o++){const c=Ol(i.charCodeAt(a++)),l=Ol(i.charCodeAt(a++));if(c===void 0||l===void 0)throw new we(`Invalid byte sequence ("${i[a-2]}${i[a-1]}" in "${i}").`);s[o]=c*16+l}return s}function Kp(t,e){const r=Sd(t,e);return Qr(r)}function Td(t,e={}){const r=Zp.encode(t);return typeof e.size=="number"?(Qi(r,{size:e.size}),Xi(r,{dir:"right",size:e.size})):r}function Io(t){if(!Number.isSafeInteger(t)||t<0)throw new Error("positive integer expected, got "+t)}function Yp(t){return t instanceof Uint8Array||ArrayBuffer.isView(t)&&t.constructor.name==="Uint8Array"}function ws(t,...e){if(!Yp(t))throw new Error("Uint8Array expected");if(e.length>0&&!e.includes(t.length))throw new Error("Uint8Array expected of length "+e+", got length="+t.length)}function Jp(t){if(typeof t!="function"||typeof t.create!="function")throw new Error("Hash should be wrapped by utils.wrapConstructor");Io(t.outputLen),Io(t.blockLen)}function Wi(t,e=!0){if(t.destroyed)throw new Error("Hash instance has been destroyed");if(e&&t.finished)throw new Error("Hash#digest() has already been called")}function Od(t,e){ws(t);const r=e.outputLen;if(t.length<r)throw new Error("digestInto() expects output buffer of length at least "+r)}const Os=BigInt(2**32-1),$l=BigInt(32);function Xp(t,e=!1){return e?{h:Number(t&Os),l:Number(t>>$l&Os)}:{h:Number(t>>$l&Os)|0,l:Number(t&Os)|0}}function Qp(t,e=!1){let r=new Uint32Array(t.length),i=new Uint32Array(t.length);for(let n=0;n<t.length;n++){const{h:s,l:o}=Xp(t[n],e);[r[n],i[n]]=[s,o]}return[r,i]}const ef=(t,e,r)=>t<<r|e>>>32-r,tf=(t,e,r)=>e<<r|t>>>32-r,rf=(t,e,r)=>e<<r-32|t>>>64-r,nf=(t,e,r)=>t<<r-32|e>>>64-r,yi=typeof globalThis=="object"&&"crypto"in globalThis?globalThis.crypto:void 0;function sf(t){return new Uint32Array(t.buffer,t.byteOffset,Math.floor(t.byteLength/4))}function aa(t){return new DataView(t.buffer,t.byteOffset,t.byteLength)}function $t(t,e){return t<<32-e|t>>>e}const Rl=new Uint8Array(new Uint32Array([287454020]).buffer)[0]===68;function of(t){return t<<24&4278190080|t<<8&16711680|t>>>8&65280|t>>>24&255}function Ll(t){for(let e=0;e<t.length;e++)t[e]=of(t[e])}function af(t){if(typeof t!="string")throw new Error("utf8ToBytes expected string, got "+typeof t);return new Uint8Array(new TextEncoder().encode(t))}function jo(t){return typeof t=="string"&&(t=af(t)),ws(t),t}function cf(...t){let e=0;for(let i=0;i<t.length;i++){const n=t[i];ws(n),e+=n.length}const r=new Uint8Array(e);for(let i=0,n=0;i<t.length;i++){const s=t[i];r.set(s,n),n+=s.length}return r}class Oc{clone(){return this._cloneInto()}}function $d(t){const e=i=>t().update(jo(i)).digest(),r=t();return e.outputLen=r.outputLen,e.blockLen=r.blockLen,e.create=()=>t(),e}function lf(t=32){if(yi&&typeof yi.getRandomValues=="function")return yi.getRandomValues(new Uint8Array(t));if(yi&&typeof yi.randomBytes=="function")return yi.randomBytes(t);throw new Error("crypto.getRandomValues must be defined")}const Rd=[],Ld=[],Bd=[],uf=BigInt(0),an=BigInt(1),df=BigInt(2),hf=BigInt(7),pf=BigInt(256),ff=BigInt(113);for(let t=0,e=an,r=1,i=0;t<24;t++){[r,i]=[i,(2*r+3*i)%5],Rd.push(2*(5*i+r)),Ld.push((t+1)*(t+2)/2%64);let n=uf;for(let s=0;s<7;s++)e=(e<<an^(e>>hf)*ff)%pf,e&df&&(n^=an<<(an<<BigInt(s))-an);Bd.push(n)}const[gf,wf]=Qp(Bd,!0),Bl=(t,e,r)=>r>32?rf(t,e,r):ef(t,e,r),Ul=(t,e,r)=>r>32?nf(t,e,r):tf(t,e,r);function mf(t,e=24){const r=new Uint32Array(10);for(let i=24-e;i<24;i++){for(let o=0;o<10;o++)r[o]=t[o]^t[o+10]^t[o+20]^t[o+30]^t[o+40];for(let o=0;o<10;o+=2){const a=(o+8)%10,c=(o+2)%10,l=r[c],u=r[c+1],d=Bl(l,u,1)^r[a],h=Ul(l,u,1)^r[a+1];for(let p=0;p<50;p+=10)t[o+p]^=d,t[o+p+1]^=h}let n=t[2],s=t[3];for(let o=0;o<24;o++){const a=Ld[o],c=Bl(n,s,a),l=Ul(n,s,a),u=Rd[o];n=t[u],s=t[u+1],t[u]=c,t[u+1]=l}for(let o=0;o<50;o+=10){for(let a=0;a<10;a++)r[a]=t[o+a];for(let a=0;a<10;a++)t[o+a]^=~r[(a+2)%10]&r[(a+4)%10]}t[0]^=gf[i],t[1]^=wf[i]}r.fill(0)}class $c extends Oc{constructor(e,r,i,n=!1,s=24){if(super(),this.blockLen=e,this.suffix=r,this.outputLen=i,this.enableXOF=n,this.rounds=s,this.pos=0,this.posOut=0,this.finished=!1,this.destroyed=!1,Io(i),0>=this.blockLen||this.blockLen>=200)throw new Error("Sha3 supports only keccak-f1600 function");this.state=new Uint8Array(200),this.state32=sf(this.state)}keccak(){Rl||Ll(this.state32),mf(this.state32,this.rounds),Rl||Ll(this.state32),this.posOut=0,this.pos=0}update(e){Wi(this);const{blockLen:r,state:i}=this;e=jo(e);const n=e.length;for(let s=0;s<n;){const o=Math.min(r-this.pos,n-s);for(let a=0;a<o;a++)i[this.pos++]^=e[s++];this.pos===r&&this.keccak()}return this}finish(){if(this.finished)return;this.finished=!0;const{state:e,suffix:r,pos:i,blockLen:n}=this;e[i]^=r,(r&128)!==0&&i===n-1&&this.keccak(),e[n-1]^=128,this.keccak()}writeInto(e){Wi(this,!1),ws(e),this.finish();const r=this.state,{blockLen:i}=this;for(let n=0,s=e.length;n<s;){this.posOut>=i&&this.keccak();const o=Math.min(i-this.posOut,s-n);e.set(r.subarray(this.posOut,this.posOut+o),n),this.posOut+=o,n+=o}return e}xofInto(e){if(!this.enableXOF)throw new Error("XOF is not possible for this instance");return this.writeInto(e)}xof(e){return Io(e),this.xofInto(new Uint8Array(e))}digestInto(e){if(Od(e,this),this.finished)throw new Error("digest() was already called");return this.writeInto(e),this.destroy(),e}digest(){return this.digestInto(new Uint8Array(this.outputLen))}destroy(){this.destroyed=!0,this.state.fill(0)}_cloneInto(e){const{blockLen:r,suffix:i,outputLen:n,rounds:s,enableXOF:o}=this;return e||(e=new $c(r,i,n,o,s)),e.state32.set(this.state32),e.pos=this.pos,e.posOut=this.posOut,e.finished=this.finished,e.rounds=s,e.suffix=i,e.outputLen=n,e.enableXOF=o,e.destroyed=this.destroyed,e}}const vf=(t,e,r)=>$d(()=>new $c(e,t,r)),Ud=vf(1,136,256/8);function bf(t,e){const r=e,i=Ud(gs(t,{strict:!1})?_d(t):t);return r==="bytes"?i:ae(i)}class ei extends we{constructor({address:e}){super(`Address "${e}" is invalid.`,{metaMessages:["- Address must be a hex value of 20 bytes (40 hex characters).","- Address must match its checksum counterpart."],name:"InvalidAddressError"})}}class Do extends Map{constructor(e){super(),Object.defineProperty(this,"maxSize",{enumerable:!0,configurable:!0,writable:!0,value:void 0}),this.maxSize=e}get(e){const r=super.get(e);return super.has(e)&&r!==void 0&&(this.delete(e),super.set(e,r)),r}set(e,r){if(super.set(e,r),this.maxSize&&this.size>this.maxSize){const i=this.keys().next().value;i&&this.delete(i)}return this}}const ca=new Do(8192);function yf(t,e){if(ca.has(`${t}.${e}`))return ca.get(`${t}.${e}`);const r=t.substring(2).toLowerCase(),i=bf(Td(r),"bytes"),n=r.split("");for(let o=0;o<40;o+=2)i[o>>1]>>4>=8&&n[o]&&(n[o]=n[o].toUpperCase()),(i[o>>1]&15)>=8&&n[o+1]&&(n[o+1]=n[o+1].toUpperCase());const s=`0x${n.join("")}`;return ca.set(`${t}.${e}`,s),s}const Cf=/^0x[a-fA-F0-9]{40}$/,la=new Do(8192);function ti(t,e){const{strict:r=!0}=e??{},i=`${t}.${r}`;if(la.has(i))return la.get(i);const n=Cf.test(t)?t.toLowerCase()===t?!0:r?yf(t)===t:!0:!1;return la.set(i,n),n}function ms(t){return`0x${t.reduce((e,r)=>e+r.replace("0x",""),"")}`}function xf(t,e,r,{strict:i}={}){return gs(t,{strict:!1})?Af(t,e,r,{strict:i}):Ef(t,e,r,{strict:i})}function Md(t,e,r){if(Hi(t)!==r-e)throw new zp({offset:r,position:"end",size:Hi(t)})}function Ef(t,e,r,{strict:i}={}){const n=t.slice(e,r);return i&&Md(n,e,r),n}function Af(t,e,r,{strict:i}={}){const n=`0x${t.replace("0x","").slice(e*2,r*2)}`;return i&&Md(n,e,r),n}class Ml extends we{constructor({offset:e}){super(`Offset \`${e}\` cannot be negative.`,{name:"NegativeOffsetError"})}}class kf extends we{constructor({length:e,position:r}){super(`Position \`${r}\` is out of bounds (\`0 < position < ${e}\`).`,{name:"PositionOutOfBoundsError"})}}class If extends we{constructor({count:e,limit:r}){super(`Recursive read limit of \`${r}\` exceeded (recursive read count: \`${e}\`).`,{name:"RecursiveReadLimitExceededError"})}}const Nf={bytes:new Uint8Array,dataView:new DataView(new ArrayBuffer(0)),position:0,positionReadCount:new Map,recursiveReadCount:0,recursiveReadLimit:Number.POSITIVE_INFINITY,assertReadLimit(){if(this.recursiveReadCount>=this.recursiveReadLimit)throw new If({count:this.recursiveReadCount+1,limit:this.recursiveReadLimit})},assertPosition(t){if(t<0||t>this.bytes.length-1)throw new kf({length:this.bytes.length,position:t})},decrementPosition(t){if(t<0)throw new Ml({offset:t});const e=this.position-t;this.assertPosition(e),this.position=e},getReadCount(t){return this.positionReadCount.get(t||this.position)||0},incrementPosition(t){if(t<0)throw new Ml({offset:t});const e=this.position+t;this.assertPosition(e),this.position=e},inspectByte(t){const e=t??this.position;return this.assertPosition(e),this.bytes[e]},inspectBytes(t,e){const r=e??this.position;return this.assertPosition(r+t-1),this.bytes.subarray(r,r+t)},inspectUint8(t){const e=t??this.position;return this.assertPosition(e),this.bytes[e]},inspectUint16(t){const e=t??this.position;return this.assertPosition(e+1),this.dataView.getUint16(e)},inspectUint24(t){const e=t??this.position;return this.assertPosition(e+2),(this.dataView.getUint16(e)<<8)+this.dataView.getUint8(e+2)},inspectUint32(t){const e=t??this.position;return this.assertPosition(e+3),this.dataView.getUint32(e)},pushByte(t){this.assertPosition(this.position),this.bytes[this.position]=t,this.position++},pushBytes(t){this.assertPosition(this.position+t.length-1),this.bytes.set(t,this.position),this.position+=t.length},pushUint8(t){this.assertPosition(this.position),this.bytes[this.position]=t,this.position++},pushUint16(t){this.assertPosition(this.position+1),this.dataView.setUint16(this.position,t),this.position+=2},pushUint24(t){this.assertPosition(this.position+2),this.dataView.setUint16(this.position,t>>8),this.dataView.setUint8(this.position+2,t&255),this.position+=3},pushUint32(t){this.assertPosition(this.position+3),this.dataView.setUint32(this.position,t),this.position+=4},readByte(){this.assertReadLimit(),this._touch();const t=this.inspectByte();return this.position++,t},readBytes(t,e){this.assertReadLimit(),this._touch();const r=this.inspectBytes(t);return this.position+=e??t,r},readUint8(){this.assertReadLimit(),this._touch();const t=this.inspectUint8();return this.position+=1,t},readUint16(){this.assertReadLimit(),this._touch();const t=this.inspectUint16();return this.position+=2,t},readUint24(){this.assertReadLimit(),this._touch();const t=this.inspectUint24();return this.position+=3,t},readUint32(){this.assertReadLimit(),this._touch();const t=this.inspectUint32();return this.position+=4,t},get remaining(){return this.bytes.length-this.position},setPosition(t){const e=this.position;return this.assertPosition(t),this.position=t,()=>this.position=e},_touch(){if(this.recursiveReadLimit===Number.POSITIVE_INFINITY)return;const t=this.getReadCount();this.positionReadCount.set(this.position,t+1),t>0&&this.recursiveReadCount++}};function zd(t,{recursiveReadLimit:e=8192}={}){const r=Object.create(Nf);return r.bytes=t,r.dataView=new DataView(t.buffer,t.byteOffset,t.byteLength),r.positionReadCount=new Map,r.recursiveReadLimit=e,r}const Zr=(t,e,r)=>JSON.stringify(t,(i,n)=>typeof n=="bigint"?n.toString():n,r),Sf={ether:-9,wei:9};function jd(t,e){let r=t.toString();const i=r.startsWith("-");i&&(r=r.slice(1)),r=r.padStart(e,"0");let[n,s]=[r.slice(0,r.length-e),r.slice(r.length-e)];return s=s.replace(/(0+)$/,""),`${i?"-":""}${n||"0"}${s?`.${s}`:""}`}function uc(t,e="wei"){return jd(t,Sf[e])}function Pf(t){const e=Object.entries(t).map(([i,n])=>n===void 0||n===!1?null:[i,n]).filter(Boolean),r=e.reduce((i,[n])=>Math.max(i,n.length),0);return e.map(([i,n])=>`  ${`${i}:`.padEnd(r+1)}  ${n}`).join(`
`)}class _f extends we{constructor({v:e}){super(`Invalid \`v\` value "${e}". Expected 27 or 28.`,{name:"InvalidLegacyVError"})}}class Tf extends we{constructor({transaction:e}){super("Cannot infer a transaction type from provided transaction.",{metaMessages:["Provided Transaction:","{",Pf(e),"}","","To infer the type, either provide:","- a `type` to the Transaction, or","- an EIP-1559 Transaction with `maxFeePerGas`, or","- an EIP-2930 Transaction with `gasPrice` & `accessList`, or","- an EIP-4844 Transaction with `blobs`, `blobVersionedHashes`, `sidecars`, or","- an EIP-7702 Transaction with `authorizationList`, or","- a Legacy Transaction with `gasPrice`"],name:"InvalidSerializableTransactionError"})}}class Of extends we{constructor({storageKey:e}){super(`Size for storage key "${e}" is invalid. Expected 32 bytes. Got ${Math.floor((e.length-2)/2)} bytes.`,{name:"InvalidStorageKeySizeError"})}}const Rc=t=>t;class Bn extends we{constructor({body:e,cause:r,details:i,headers:n,status:s,url:o}){super("HTTP request failed.",{cause:r,details:i,metaMessages:[s&&`Status: ${s}`,`URL: ${Rc(o)}`,e&&`Request body: ${Zr(e)}`].filter(Boolean),name:"HttpRequestError"}),Object.defineProperty(this,"body",{enumerable:!0,configurable:!0,writable:!0,value:void 0}),Object.defineProperty(this,"headers",{enumerable:!0,configurable:!0,writable:!0,value:void 0}),Object.defineProperty(this,"status",{enumerable:!0,configurable:!0,writable:!0,value:void 0}),Object.defineProperty(this,"url",{enumerable:!0,configurable:!0,writable:!0,value:void 0}),this.body=e,this.headers=n,this.status=s,this.url=o}}class Dd extends we{constructor({body:e,error:r,url:i}){super("RPC Request failed.",{cause:r,details:r.message,metaMessages:[`URL: ${Rc(i)}`,`Request body: ${Zr(e)}`],name:"RpcRequestError"}),Object.defineProperty(this,"code",{enumerable:!0,configurable:!0,writable:!0,value:void 0}),Object.defineProperty(this,"data",{enumerable:!0,configurable:!0,writable:!0,value:void 0}),this.code=r.code,this.data=r.data}}class zl extends we{constructor({body:e,url:r}){super("The request took too long to respond.",{details:"The request timed out.",metaMessages:[`URL: ${Rc(r)}`,`Request body: ${Zr(e)}`],name:"TimeoutError"})}}const $f=-1;class et extends we{constructor(e,{code:r,docsPath:i,metaMessages:n,name:s,shortMessage:o}){super(o,{cause:e,docsPath:i,metaMessages:n||(e==null?void 0:e.metaMessages),name:s||"RpcError"}),Object.defineProperty(this,"code",{enumerable:!0,configurable:!0,writable:!0,value:void 0}),this.name=s||e.name,this.code=e instanceof Dd?e.code:r??$f}}class ut extends et{constructor(e,r){super(e,r),Object.defineProperty(this,"data",{enumerable:!0,configurable:!0,writable:!0,value:void 0}),this.data=r.data}}class Hn extends et{constructor(e){super(e,{code:Hn.code,name:"ParseRpcError",shortMessage:"Invalid JSON was received by the server. An error occurred on the server while parsing the JSON text."})}}Object.defineProperty(Hn,"code",{enumerable:!0,configurable:!0,writable:!0,value:-32700});class Wn extends et{constructor(e){super(e,{code:Wn.code,name:"InvalidRequestRpcError",shortMessage:"JSON is not a valid request object."})}}Object.defineProperty(Wn,"code",{enumerable:!0,configurable:!0,writable:!0,value:-32600});class Fn extends et{constructor(e,{method:r}={}){super(e,{code:Fn.code,name:"MethodNotFoundRpcError",shortMessage:`The method${r?` "${r}"`:""} does not exist / is not available.`})}}Object.defineProperty(Fn,"code",{enumerable:!0,configurable:!0,writable:!0,value:-32601});class qn extends et{constructor(e){super(e,{code:qn.code,name:"InvalidParamsRpcError",shortMessage:["Invalid parameters were provided to the RPC method.","Double check you have provided the correct parameters."].join(`
`)})}}Object.defineProperty(qn,"code",{enumerable:!0,configurable:!0,writable:!0,value:-32602});class Fi extends et{constructor(e){super(e,{code:Fi.code,name:"InternalRpcError",shortMessage:"An internal error was received."})}}Object.defineProperty(Fi,"code",{enumerable:!0,configurable:!0,writable:!0,value:-32603});class Vn extends et{constructor(e){super(e,{code:Vn.code,name:"InvalidInputRpcError",shortMessage:["Missing or invalid parameters.","Double check you have provided the correct parameters."].join(`
`)})}}Object.defineProperty(Vn,"code",{enumerable:!0,configurable:!0,writable:!0,value:-32e3});class Zn extends et{constructor(e){super(e,{code:Zn.code,name:"ResourceNotFoundRpcError",shortMessage:"Requested resource not found."}),Object.defineProperty(this,"name",{enumerable:!0,configurable:!0,writable:!0,value:"ResourceNotFoundRpcError"})}}Object.defineProperty(Zn,"code",{enumerable:!0,configurable:!0,writable:!0,value:-32001});class Gn extends et{constructor(e){super(e,{code:Gn.code,name:"ResourceUnavailableRpcError",shortMessage:"Requested resource not available."})}}Object.defineProperty(Gn,"code",{enumerable:!0,configurable:!0,writable:!0,value:-32002});class qi extends et{constructor(e){super(e,{code:qi.code,name:"TransactionRejectedRpcError",shortMessage:"Transaction creation failed."})}}Object.defineProperty(qi,"code",{enumerable:!0,configurable:!0,writable:!0,value:-32003});class Fr extends et{constructor(e,{method:r}={}){super(e,{code:Fr.code,name:"MethodNotSupportedRpcError",shortMessage:`Method${r?` "${r}"`:""} is not supported.`})}}Object.defineProperty(Fr,"code",{enumerable:!0,configurable:!0,writable:!0,value:-32004});class Vi extends et{constructor(e){super(e,{code:Vi.code,name:"LimitExceededRpcError",shortMessage:"Request exceeds defined limit."})}}Object.defineProperty(Vi,"code",{enumerable:!0,configurable:!0,writable:!0,value:-32005});class Kn extends et{constructor(e){super(e,{code:Kn.code,name:"JsonRpcVersionUnsupportedError",shortMessage:"Version of JSON-RPC protocol is not supported."})}}Object.defineProperty(Kn,"code",{enumerable:!0,configurable:!0,writable:!0,value:-32006});class Gr extends ut{constructor(e){super(e,{code:Gr.code,name:"UserRejectedRequestError",shortMessage:"User rejected the request."})}}Object.defineProperty(Gr,"code",{enumerable:!0,configurable:!0,writable:!0,value:4001});class Yn extends ut{constructor(e){super(e,{code:Yn.code,name:"UnauthorizedProviderError",shortMessage:"The requested method and/or account has not been authorized by the user."})}}Object.defineProperty(Yn,"code",{enumerable:!0,configurable:!0,writable:!0,value:4100});class Jn extends ut{constructor(e,{method:r}={}){super(e,{code:Jn.code,name:"UnsupportedProviderMethodError",shortMessage:`The Provider does not support the requested method${r?` " ${r}"`:""}.`})}}Object.defineProperty(Jn,"code",{enumerable:!0,configurable:!0,writable:!0,value:4200});class Xn extends ut{constructor(e){super(e,{code:Xn.code,name:"ProviderDisconnectedError",shortMessage:"The Provider is disconnected from all chains."})}}Object.defineProperty(Xn,"code",{enumerable:!0,configurable:!0,writable:!0,value:4900});class Qn extends ut{constructor(e){super(e,{code:Qn.code,name:"ChainDisconnectedError",shortMessage:"The Provider is not connected to the requested chain."})}}Object.defineProperty(Qn,"code",{enumerable:!0,configurable:!0,writable:!0,value:4901});class es extends ut{constructor(e){super(e,{code:es.code,name:"SwitchChainError",shortMessage:"An error occurred when attempting to switch chain."})}}Object.defineProperty(es,"code",{enumerable:!0,configurable:!0,writable:!0,value:4902});class ts extends ut{constructor(e){super(e,{code:ts.code,name:"UnsupportedNonOptionalCapabilityError",shortMessage:"This Wallet does not support a capability that was not marked as optional."})}}Object.defineProperty(ts,"code",{enumerable:!0,configurable:!0,writable:!0,value:5700});class rs extends ut{constructor(e){super(e,{code:rs.code,name:"UnsupportedChainIdError",shortMessage:"This Wallet does not support the requested chain ID."})}}Object.defineProperty(rs,"code",{enumerable:!0,configurable:!0,writable:!0,value:5710});class is extends ut{constructor(e){super(e,{code:is.code,name:"DuplicateIdError",shortMessage:"There is already a bundle submitted with this ID."})}}Object.defineProperty(is,"code",{enumerable:!0,configurable:!0,writable:!0,value:5720});class ns extends ut{constructor(e){super(e,{code:ns.code,name:"UnknownBundleIdError",shortMessage:"This bundle id is unknown / has not been submitted"})}}Object.defineProperty(ns,"code",{enumerable:!0,configurable:!0,writable:!0,value:5730});class ss extends ut{constructor(e){super(e,{code:ss.code,name:"BundleTooLargeError",shortMessage:"The call bundle is too large for the Wallet to process."})}}Object.defineProperty(ss,"code",{enumerable:!0,configurable:!0,writable:!0,value:5740});class os extends ut{constructor(e){super(e,{code:os.code,name:"AtomicReadyWalletRejectedUpgradeError",shortMessage:"The Wallet can support atomicity after an upgrade, but the user rejected the upgrade."})}}Object.defineProperty(os,"code",{enumerable:!0,configurable:!0,writable:!0,value:5750});class as extends ut{constructor(e){super(e,{code:as.code,name:"AtomicityNotSupportedError",shortMessage:"The wallet does not support atomic execution but the request requires it."})}}Object.defineProperty(as,"code",{enumerable:!0,configurable:!0,writable:!0,value:5760});class Rf extends et{constructor(e){super(e,{name:"UnknownRpcError",shortMessage:"An unknown RPC error occurred."})}}function en(t,e="hex"){const r=Hd(t),i=zd(new Uint8Array(r.length));return r.encode(i),e==="hex"?xr(i.bytes):i.bytes}function Hd(t){return Array.isArray(t)?Lf(t.map(e=>Hd(e))):Bf(t)}function Lf(t){const e=t.reduce((i,n)=>i+n.length,0),r=Wd(e);return{length:e<=55?1+e:1+r+e,encode(i){e<=55?i.pushByte(192+e):(i.pushByte(247+r),r===1?i.pushUint8(e):r===2?i.pushUint16(e):r===3?i.pushUint24(e):i.pushUint32(e));for(const{encode:n}of t)n(i)}}}function Bf(t){const e=typeof t=="string"?Qr(t):t,r=Wd(e.length);return{length:e.length===1&&e[0]<128?1:e.length<=55?1+e.length:1+r+e.length,encode(i){e.length===1&&e[0]<128?i.pushBytes(e):e.length<=55?(i.pushByte(128+e.length),i.pushBytes(e)):(i.pushByte(183+r),r===1?i.pushUint8(e.length):r===2?i.pushUint16(e.length):r===3?i.pushUint24(e.length):i.pushUint32(e.length),i.pushBytes(e))}}}function Wd(t){if(t<2**8)return 1;if(t<2**16)return 2;if(t<2**24)return 3;if(t<2**32)return 4;throw new we("Length is too large.")}class dc extends we{constructor({cause:e,message:r}={}){var n;const i=(n=r==null?void 0:r.replace("execution reverted: ",""))==null?void 0:n.replace("execution reverted","");super(`Execution reverted ${i?`with reason: ${i}`:"for an unknown reason"}.`,{cause:e,name:"ExecutionRevertedError"})}}Object.defineProperty(dc,"code",{enumerable:!0,configurable:!0,writable:!0,value:3}),Object.defineProperty(dc,"nodeMessage",{enumerable:!0,configurable:!0,writable:!0,value:/execution reverted/});class Ho extends we{constructor({cause:e,maxFeePerGas:r}={}){super(`The fee cap (\`maxFeePerGas\`${r?` = ${uc(r)} gwei`:""}) cannot be higher than the maximum allowed value (2^256-1).`,{cause:e,name:"FeeCapTooHighError"})}}Object.defineProperty(Ho,"nodeMessage",{enumerable:!0,configurable:!0,writable:!0,value:/max fee per gas higher than 2\^256-1|fee cap higher than 2\^256-1/});class Fd extends we{constructor({cause:e,maxPriorityFeePerGas:r,maxFeePerGas:i}={}){super([`The provided tip (\`maxPriorityFeePerGas\`${r?` = ${uc(r)} gwei`:""}) cannot be higher than the fee cap (\`maxFeePerGas\`${i?` = ${uc(i)} gwei`:""}).`].join(`
`),{cause:e,name:"TipAboveFeeCapError"})}}Object.defineProperty(Fd,"nodeMessage",{enumerable:!0,configurable:!0,writable:!0,value:/max priority fee per gas higher than max fee per gas|tip higher than fee cap/});function Lc(t,e){return({exclude:r,format:i})=>({exclude:r,format:n=>{const s=e(n);if(r)for(const o of r)delete s[o];return{...s,...i(n)}},type:t})}const Bc=2n**256n-1n,qd={"0x0":"legacy","0x1":"eip2930","0x2":"eip1559","0x3":"eip4844","0x4":"eip7702"};function Uc(t){const e={...t,blockHash:t.blockHash?t.blockHash:null,blockNumber:t.blockNumber?BigInt(t.blockNumber):null,chainId:t.chainId?ko(t.chainId):void 0,gas:t.gas?BigInt(t.gas):void 0,gasPrice:t.gasPrice?BigInt(t.gasPrice):void 0,maxFeePerBlobGas:t.maxFeePerBlobGas?BigInt(t.maxFeePerBlobGas):void 0,maxFeePerGas:t.maxFeePerGas?BigInt(t.maxFeePerGas):void 0,maxPriorityFeePerGas:t.maxPriorityFeePerGas?BigInt(t.maxPriorityFeePerGas):void 0,nonce:t.nonce?ko(t.nonce):void 0,to:t.to?t.to:null,transactionIndex:t.transactionIndex?Number(t.transactionIndex):null,type:t.type?qd[t.type]:void 0,typeHex:t.type?t.type:void 0,value:t.value?BigInt(t.value):void 0,v:t.v?BigInt(t.v):void 0};return t.authorizationList&&(e.authorizationList=Mf(t.authorizationList)),e.yParity=(()=>{if(t.yParity)return Number(t.yParity);if(typeof e.v=="bigint"){if(e.v===0n||e.v===27n)return 0;if(e.v===1n||e.v===28n)return 1;if(e.v>=35n)return e.v%2n===0n?1:0}})(),e.type==="legacy"&&(delete e.accessList,delete e.maxFeePerBlobGas,delete e.maxFeePerGas,delete e.maxPriorityFeePerGas,delete e.yParity),e.type==="eip2930"&&(delete e.maxFeePerBlobGas,delete e.maxFeePerGas,delete e.maxPriorityFeePerGas),e.type==="eip1559"&&delete e.maxFeePerBlobGas,e}const Uf=Lc("transaction",Uc);function Mf(t){return t.map(e=>({address:e.address,chainId:Number(e.chainId),nonce:Number(e.nonce),r:e.r,s:e.s,yParity:Number(e.yParity)}))}function zf(t){const e=(t.transactions??[]).map(r=>typeof r=="string"?r:Uc(r));return{...t,baseFeePerGas:t.baseFeePerGas?BigInt(t.baseFeePerGas):null,blobGasUsed:t.blobGasUsed?BigInt(t.blobGasUsed):void 0,difficulty:t.difficulty?BigInt(t.difficulty):void 0,excessBlobGas:t.excessBlobGas?BigInt(t.excessBlobGas):void 0,gasLimit:t.gasLimit?BigInt(t.gasLimit):void 0,gasUsed:t.gasUsed?BigInt(t.gasUsed):void 0,hash:t.hash?t.hash:null,logsBloom:t.logsBloom?t.logsBloom:null,nonce:t.nonce?t.nonce:null,number:t.number?BigInt(t.number):null,size:t.size?BigInt(t.size):void 0,timestamp:t.timestamp?BigInt(t.timestamp):void 0,transactions:e,totalDifficulty:t.totalDifficulty?BigInt(t.totalDifficulty):null}}const jf=Lc("block",zf);function Vd(t){const{kzg:e}=t,r=t.to??(typeof t.blobs[0]=="string"?"hex":"bytes"),i=typeof t.blobs[0]=="string"?t.blobs.map(s=>Qr(s)):t.blobs,n=[];for(const s of i)n.push(Uint8Array.from(e.blobToKzgCommitment(s)));return r==="bytes"?n:n.map(s=>xr(s))}function Zd(t){const{kzg:e}=t,r=t.to??(typeof t.blobs[0]=="string"?"hex":"bytes"),i=typeof t.blobs[0]=="string"?t.blobs.map(o=>Qr(o)):t.blobs,n=typeof t.commitments[0]=="string"?t.commitments.map(o=>Qr(o)):t.commitments,s=[];for(let o=0;o<i.length;o++){const a=i[o],c=n[o];s.push(Uint8Array.from(e.computeBlobKzgProof(a,c)))}return r==="bytes"?s:s.map(o=>xr(o))}function Df(t,e,r,i){if(typeof t.setBigUint64=="function")return t.setBigUint64(e,r,i);const n=BigInt(32),s=BigInt(4294967295),o=Number(r>>n&s),a=Number(r&s),c=i?4:0,l=i?0:4;t.setUint32(e+c,o,i),t.setUint32(e+l,a,i)}function Hf(t,e,r){return t&e^~t&r}function Wf(t,e,r){return t&e^t&r^e&r}class Ff extends Oc{constructor(e,r,i,n){super(),this.blockLen=e,this.outputLen=r,this.padOffset=i,this.isLE=n,this.finished=!1,this.length=0,this.pos=0,this.destroyed=!1,this.buffer=new Uint8Array(e),this.view=aa(this.buffer)}update(e){Wi(this);const{view:r,buffer:i,blockLen:n}=this;e=jo(e);const s=e.length;for(let o=0;o<s;){const a=Math.min(n-this.pos,s-o);if(a===n){const c=aa(e);for(;n<=s-o;o+=n)this.process(c,o);continue}i.set(e.subarray(o,o+a),this.pos),this.pos+=a,o+=a,this.pos===n&&(this.process(r,0),this.pos=0)}return this.length+=e.length,this.roundClean(),this}digestInto(e){Wi(this),Od(e,this),this.finished=!0;const{buffer:r,view:i,blockLen:n,isLE:s}=this;let{pos:o}=this;r[o++]=128,this.buffer.subarray(o).fill(0),this.padOffset>n-o&&(this.process(i,0),o=0);for(let d=o;d<n;d++)r[d]=0;Df(i,n-8,BigInt(this.length*8),s),this.process(i,0);const a=aa(e),c=this.outputLen;if(c%4)throw new Error("_sha2: outputLen should be aligned to 32bit");const l=c/4,u=this.get();if(l>u.length)throw new Error("_sha2: outputLen bigger than state");for(let d=0;d<l;d++)a.setUint32(4*d,u[d],s)}digest(){const{buffer:e,outputLen:r}=this;this.digestInto(e);const i=e.slice(0,r);return this.destroy(),i}_cloneInto(e){e||(e=new this.constructor),e.set(...this.get());const{blockLen:r,buffer:i,length:n,finished:s,destroyed:o,pos:a}=this;return e.length=n,e.pos=a,e.finished=s,e.destroyed=o,n%r&&e.buffer.set(i),e}}const qf=new Uint32Array([1116352408,1899447441,3049323471,3921009573,961987163,1508970993,2453635748,2870763221,3624381080,310598401,607225278,1426881987,1925078388,2162078206,2614888103,3248222580,3835390401,4022224774,264347078,604807628,770255983,1249150122,1555081692,1996064986,2554220882,2821834349,2952996808,3210313671,3336571891,3584528711,113926993,338241895,666307205,773529912,1294757372,1396182291,1695183700,1986661051,2177026350,2456956037,2730485921,2820302411,3259730800,3345764771,3516065817,3600352804,4094571909,275423344,430227734,506948616,659060556,883997877,958139571,1322822218,1537002063,1747873779,1955562222,2024104815,2227730452,2361852424,2428436474,2756734187,3204031479,3329325298]),or=new Uint32Array([1779033703,3144134277,1013904242,2773480762,1359893119,2600822924,528734635,1541459225]),ar=new Uint32Array(64);class Vf extends Ff{constructor(){super(64,32,8,!1),this.A=or[0]|0,this.B=or[1]|0,this.C=or[2]|0,this.D=or[3]|0,this.E=or[4]|0,this.F=or[5]|0,this.G=or[6]|0,this.H=or[7]|0}get(){const{A:e,B:r,C:i,D:n,E:s,F:o,G:a,H:c}=this;return[e,r,i,n,s,o,a,c]}set(e,r,i,n,s,o,a,c){this.A=e|0,this.B=r|0,this.C=i|0,this.D=n|0,this.E=s|0,this.F=o|0,this.G=a|0,this.H=c|0}process(e,r){for(let d=0;d<16;d++,r+=4)ar[d]=e.getUint32(r,!1);for(let d=16;d<64;d++){const h=ar[d-15],p=ar[d-2],v=$t(h,7)^$t(h,18)^h>>>3,g=$t(p,17)^$t(p,19)^p>>>10;ar[d]=g+ar[d-7]+v+ar[d-16]|0}let{A:i,B:n,C:s,D:o,E:a,F:c,G:l,H:u}=this;for(let d=0;d<64;d++){const h=$t(a,6)^$t(a,11)^$t(a,25),p=u+h+Hf(a,c,l)+qf[d]+ar[d]|0,v=($t(i,2)^$t(i,13)^$t(i,22))+Wf(i,n,s)|0;u=l,l=c,c=a,a=o+p|0,o=s,s=n,n=i,i=p+v|0}i=i+this.A|0,n=n+this.B|0,s=s+this.C|0,o=o+this.D|0,a=a+this.E|0,c=c+this.F|0,l=l+this.G|0,u=u+this.H|0,this.set(i,n,s,o,a,c,l,u)}roundClean(){ar.fill(0)}destroy(){this.set(0,0,0,0,0,0,0,0),this.buffer.fill(0)}}const Gd=$d(()=>new Vf);function Zf(t,e){const r=e,i=Gd(gs(t,{strict:!1})?_d(t):t);return r==="bytes"?i:ae(i)}function Gf(t){const{commitment:e,version:r=1}=t,i=t.to??(typeof e=="string"?"hex":"bytes"),n=Zf(e,"bytes");return n.set([r],0),i==="bytes"?n:xr(n)}function Kf(t){const{commitments:e,version:r}=t,i=t.to??(typeof e[0]=="string"?"hex":"bytes"),n=[];for(const s of e)n.push(Gf({commitment:s,to:i,version:r}));return n}const jl=6,Kd=32,Mc=4096,Yd=Kd*Mc,Dl=Yd*jl-1-1*Mc*jl,Jd=1;class Yf extends we{constructor({maxSize:e,size:r}){super("Blob size is too large.",{metaMessages:[`Max: ${e} bytes`,`Given: ${r} bytes`],name:"BlobSizeTooLargeError"})}}class Xd extends we{constructor(){super("Blob data must not be empty.",{name:"EmptyBlobError"})}}class Jf extends we{constructor({hash:e,size:r}){super(`Versioned hash "${e}" size is invalid.`,{metaMessages:["Expected: 32",`Received: ${r}`],name:"InvalidVersionedHashSizeError"})}}class Xf extends we{constructor({hash:e,version:r}){super(`Versioned hash "${e}" version is invalid.`,{metaMessages:[`Expected: ${Jd}`,`Received: ${r}`],name:"InvalidVersionedHashVersionError"})}}function Qf(t){const e=t.to??(typeof t.data=="string"?"hex":"bytes"),r=typeof t.data=="string"?Qr(t.data):t.data,i=Hi(r);if(!i)throw new Xd;if(i>Dl)throw new Yf({maxSize:Dl,size:i});const n=[];let s=!0,o=0;for(;s;){const a=zd(new Uint8Array(Yd));let c=0;for(;c<Mc;){const l=r.slice(o,o+(Kd-1));if(a.pushByte(0),a.pushBytes(l),l.length<31){a.pushByte(128),s=!1;break}c++,o+=31}n.push(a)}return e==="bytes"?n.map(a=>a.bytes):n.map(a=>xr(a.bytes))}function eg(t){const{data:e,kzg:r,to:i}=t,n=t.blobs??Qf({data:e,to:i}),s=t.commitments??Vd({blobs:n,kzg:r,to:i}),o=t.proofs??Zd({blobs:n,commitments:s,kzg:r,to:i}),a=[];for(let c=0;c<n.length;c++)a.push({blob:n[c],commitment:s[c],proof:o[c]});return a}function tg(t){if(t.type)return t.type;if(typeof t.authorizationList<"u")return"eip7702";if(typeof t.blobs<"u"||typeof t.blobVersionedHashes<"u"||typeof t.maxFeePerBlobGas<"u"||typeof t.sidecars<"u")return"eip4844";if(typeof t.maxFeePerGas<"u"||typeof t.maxPriorityFeePerGas<"u")return"eip1559";if(typeof t.gasPrice<"u")return typeof t.accessList<"u"?"eip2930":"legacy";throw new Tf({transaction:t})}function rg(t,{args:e,eventName:r}={}){return{...t,blockHash:t.blockHash?t.blockHash:null,blockNumber:t.blockNumber?BigInt(t.blockNumber):null,logIndex:t.logIndex?Number(t.logIndex):null,transactionHash:t.transactionHash?t.transactionHash:null,transactionIndex:t.transactionIndex?Number(t.transactionIndex):null,...r?{args:e,eventName:r}:{}}}class Wo extends we{constructor({chainId:e}){super(typeof e=="number"?`Chain ID "${e}" is invalid.`:"Chain ID is invalid.",{name:"InvalidChainIdError"})}}function ig(){let t=()=>{},e=()=>{};return{promise:new Promise((r,i)=>{t=r,e=i}),resolve:t,reject:e}}const ua=new Map;function ng({fn:t,id:e,shouldSplitBatch:r,wait:i=0,sort:n}){const s=async()=>{const u=c();o();const d=u.map(({args:h})=>h);d.length!==0&&t(d).then(h=>{n&&Array.isArray(h)&&h.sort(n);for(let p=0;p<u.length;p++){const{resolve:v}=u[p];v==null||v([h[p],h])}}).catch(h=>{for(let p=0;p<u.length;p++){const{reject:v}=u[p];v==null||v(h)}})},o=()=>ua.delete(e),a=()=>c().map(({args:u})=>u),c=()=>ua.get(e)||[],l=u=>ua.set(e,[...c(),u]);return{flush:o,async schedule(u){const{promise:d,resolve:h,reject:p}=ig();return r!=null&&r([...a(),u])&&s(),c().length>0?(l({args:u,resolve:h,reject:p}),d):(l({args:u,resolve:h,reject:p}),setTimeout(s,i),d)}}}async function Qd(t){return new Promise(e=>setTimeout(e,t))}new Do(128);const hc=256;let $s=hc,Rs;function sg(t=11){if(!Rs||$s+t>hc*2){Rs="",$s=0;for(let e=0;e<hc;e++)Rs+=(256+Math.random()*256|0).toString(16).substring(1)}return Rs.substring($s,$s+++t)}const Ls=new Do(8192);function og(t,{enabled:e=!0,id:r}){if(!e||!r)return t();if(Ls.get(r))return Ls.get(r);const i=t().finally(()=>Ls.delete(r));return Ls.set(r,i),i}function ag(t,{delay:e=100,retryCount:r=2,shouldRetry:i=()=>!0}={}){return new Promise((n,s)=>{const o=async({count:a=0}={})=>{const c=async({error:l})=>{const u=typeof e=="function"?e({count:a,error:l}):e;u&&await Qd(u),o({count:a+1})};try{const l=await t();n(l)}catch(l){if(a<r&&await i({count:a,error:l}))return c({error:l});s(l)}};o()})}function cg(t,e={}){return async(r,i={})=>{var d;const{dedupe:n=!1,methods:s,retryDelay:o=150,retryCount:a=3,uid:c}={...e,...i},{method:l}=r;if((d=s==null?void 0:s.exclude)!=null&&d.includes(l))throw new Fr(new Error("method not supported"),{method:l});if(s!=null&&s.include&&!s.include.includes(l))throw new Fr(new Error("method not supported"),{method:l});const u=n?Pd(`${c}.${Zr(r)}`):void 0;return og(()=>ag(async()=>{try{return await t(r)}catch(h){const p=h;switch(p.code){case Hn.code:throw new Hn(p);case Wn.code:throw new Wn(p);case Fn.code:throw new Fn(p,{method:r.method});case qn.code:throw new qn(p);case Fi.code:throw new Fi(p);case Vn.code:throw new Vn(p);case Zn.code:throw new Zn(p);case Gn.code:throw new Gn(p);case qi.code:throw new qi(p);case Fr.code:throw new Fr(p,{method:r.method});case Vi.code:throw new Vi(p);case Kn.code:throw new Kn(p);case Gr.code:throw new Gr(p);case Yn.code:throw new Yn(p);case Jn.code:throw new Jn(p);case Xn.code:throw new Xn(p);case Qn.code:throw new Qn(p);case es.code:throw new es(p);case ts.code:throw new ts(p);case rs.code:throw new rs(p);case is.code:throw new is(p);case ns.code:throw new ns(p);case ss.code:throw new ss(p);case os.code:throw new os(p);case as.code:throw new as(p);case 5e3:throw new Gr(p);default:throw h instanceof we?h:new Rf(p)}}},{delay:({count:h,error:p})=>{var v;if(p&&p instanceof Bn){const g=(v=p==null?void 0:p.headers)==null?void 0:v.get("Retry-After");if(g!=null&&g.match(/\d/))return Number.parseInt(g)*1e3}return~~(1<<h)*o},retryCount:a,shouldRetry:({error:h})=>lg(h)}),{enabled:n,id:u})}}function lg(t){return"code"in t&&typeof t.code=="number"?t.code===-1||t.code===Vi.code||t.code===Fi.code:t instanceof Bn&&t.status?t.status===403||t.status===408||t.status===413||t.status===429||t.status===500||t.status===502||t.status===503||t.status===504:!0}function eh({key:t,methods:e,name:r,request:i,retryCount:n=3,retryDelay:s=150,timeout:o,type:a},c){const l=sg();return{config:{key:t,methods:e,name:r,request:i,retryCount:n,retryDelay:s,timeout:o,type:a},request:cg(i,{methods:e,retryCount:n,retryDelay:s,uid:l}),value:c}}function Hl(t,e={}){const{key:r="fallback",name:i="Fallback",rank:n=!1,shouldThrow:s=ug,retryCount:o,retryDelay:a}=e;return({chain:c,pollingInterval:l=4e3,timeout:u,...d})=>{let h=t,p=()=>{};const v=eh({key:r,name:i,async request({method:g,params:b}){let C;const A=async(x=0)=>{const k=h[x]({...d,chain:c,retryCount:0,timeout:u});try{const P=await k.request({method:g,params:b});return p({method:g,params:b,response:P,transport:k,status:"success"}),P}catch(P){if(p({error:P,method:g,params:b,transport:k,status:"error"}),s(P)||x===h.length-1||(C??(C=h.slice(x+1).some(T=>{const{include:j,exclude:$}=T({chain:c}).config.methods||{};return j?j.includes(g):$?!$.includes(g):!0})),!C))throw P;return A(x+1)}};return A()},retryCount:o,retryDelay:a,type:"fallback"},{onResponse:g=>p=g,transports:h.map(g=>g({chain:c,retryCount:0}))});if(n){const g=typeof n=="object"?n:{};dg({chain:c,interval:g.interval??l,onTransports:b=>h=b,ping:g.ping,sampleCount:g.sampleCount,timeout:g.timeout,transports:h,weights:g.weights})}return v}}function ug(t){return!!("code"in t&&typeof t.code=="number"&&(t.code===qi.code||t.code===Gr.code||dc.nodeMessage.test(t.message)||t.code===5e3))}function dg({chain:t,interval:e=4e3,onTransports:r,ping:i,sampleCount:n=10,timeout:s=1e3,transports:o,weights:a={}}){const{stability:c=.7,latency:l=.3}=a,u=[],d=async()=>{const h=await Promise.all(o.map(async g=>{const b=g({chain:t,retryCount:0,timeout:s}),C=Date.now();let A,x;try{await(i?i({transport:b}):b.request({method:"net_listening"})),x=1}catch{x=0}finally{A=Date.now()}return{latency:A-C,success:x}}));u.push(h),u.length>n&&u.shift();const p=Math.max(...u.map(g=>Math.max(...g.map(({latency:b})=>b)))),v=o.map((g,b)=>{const C=u.map(P=>P[b].latency),A=1-C.reduce((P,T)=>P+T,0)/C.length/p,x=u.map(P=>P[b].success),k=x.reduce((P,T)=>P+T,0)/x.length;return k===0?[0,b]:[l*A+c*k,b]}).sort((g,b)=>b[0]-g[0]);r(v.map(([,g])=>o[g])),await Qd(e),d()};d()}class hg extends we{constructor(){super("No URL was provided to the Transport. Please provide a valid RPC URL to the Transport.",{docsPath:"/docs/clients/intro",name:"UrlRequiredError"})}}function pg(t,{errorInstance:e=new Error("timed out"),timeout:r,signal:i}){return new Promise((n,s)=>{(async()=>{let o;try{const a=new AbortController;r>0&&(o=setTimeout(()=>{i?a.abort():s(e)},r)),n(await t({signal:(a==null?void 0:a.signal)||null}))}catch(a){(a==null?void 0:a.name)==="AbortError"&&s(e),s(a)}finally{clearTimeout(o)}})()})}function fg(){return{current:0,take(){return this.current++},reset(){this.current=0}}}const Wl=fg();function gg(t,e={}){return{async request(r){var d;const{body:i,onRequest:n=e.onRequest,onResponse:s=e.onResponse,timeout:o=e.timeout??1e4}=r,a={...e.fetchOptions??{},...r.fetchOptions??{}},{headers:c,method:l,signal:u}=a;try{const h=await pg(async({signal:v})=>{const g={...a,body:Array.isArray(i)?Zr(i.map(A=>({jsonrpc:"2.0",id:A.id??Wl.take(),...A}))):Zr({jsonrpc:"2.0",id:i.id??Wl.take(),...i}),headers:{"Content-Type":"application/json",...c},method:l||"POST",signal:u||(o>0?v:null)},b=new Request(t,g),C=await(n==null?void 0:n(b,g))??{...g,url:t};return await fetch(C.url??t,C)},{errorInstance:new zl({body:i,url:t}),timeout:o,signal:!0});s&&await s(h);let p;if((d=h.headers.get("Content-Type"))!=null&&d.startsWith("application/json"))p=await h.json();else{p=await h.text();try{p=JSON.parse(p||"{}")}catch(v){if(h.ok)throw v;p={error:p}}}if(!h.ok)throw new Bn({body:i,details:Zr(p.error)||h.statusText,headers:h.headers,status:h.status,url:t});return p}catch(h){throw h instanceof Bn||h instanceof zl?h:new Bn({body:i,cause:h,url:t})}}}}function Bs(t,e={}){const{batch:r,fetchOptions:i,key:n="http",methods:s,name:o="HTTP JSON-RPC",onFetchRequest:a,onFetchResponse:c,retryDelay:l,raw:u}=e;return({chain:d,retryCount:h,timeout:p})=>{const{batchSize:v=1e3,wait:g=0}=typeof r=="object"?r:{},b=e.retryCount??h,C=p??e.timeout??1e4,A=t||(d==null?void 0:d.rpcUrls.default.http[0]);if(!A)throw new hg;const x=gg(A,{fetchOptions:i,onRequest:a,onResponse:c,timeout:C});return eh({key:n,methods:s,name:o,async request({method:k,params:P}){const T={method:k,params:P},{schedule:j}=ng({id:A,wait:g,shouldSplitBatch(U){return U.length>v},fn:U=>x.request({body:U}),sort:(U,X)=>U.id-X.id}),$=async U=>r?j(U):[await x.request({body:U})],[{error:_,result:R}]=await $(T);if(u)return{error:_,result:R};if(_)throw new Dd({body:T,error:_,url:A});return R},retryCount:b,retryDelay:l,timeout:C,type:"http"},{fetchOptions:i,url:A})}}function _t(t){return{formatters:void 0,fees:void 0,serializers:void 0,...t}}function wg(t){const{authorizationList:e}=t;if(e)for(const r of e){const{chainId:i}=r,n=r.address;if(!ti(n))throw new ei({address:n});if(i<0)throw new Wo({chainId:i})}zc(t)}function mg(t){const{blobVersionedHashes:e}=t;if(e){if(e.length===0)throw new Xd;for(const r of e){const i=Hi(r),n=ko(xf(r,0,1));if(i!==32)throw new Jf({hash:r,size:i});if(n!==Jd)throw new Xf({hash:r,version:n})}}zc(t)}function zc(t){const{chainId:e,maxPriorityFeePerGas:r,maxFeePerGas:i,to:n}=t;if(e<=0)throw new Wo({chainId:e});if(n&&!ti(n))throw new ei({address:n});if(i&&i>Bc)throw new Ho({maxFeePerGas:i});if(r&&i&&r>i)throw new Fd({maxFeePerGas:i,maxPriorityFeePerGas:r})}function vg(t){const{chainId:e,maxPriorityFeePerGas:r,gasPrice:i,maxFeePerGas:n,to:s}=t;if(e<=0)throw new Wo({chainId:e});if(s&&!ti(s))throw new ei({address:s});if(r||n)throw new we("`maxFeePerGas`/`maxPriorityFeePerGas` is not a valid EIP-2930 Transaction attribute.");if(i&&i>Bc)throw new Ho({maxFeePerGas:i})}function bg(t){const{chainId:e,maxPriorityFeePerGas:r,gasPrice:i,maxFeePerGas:n,to:s}=t;if(s&&!ti(s))throw new ei({address:s});if(typeof e<"u"&&e<=0)throw new Wo({chainId:e});if(r||n)throw new we("`maxFeePerGas`/`maxPriorityFeePerGas` is not a valid Legacy Transaction attribute.");if(i&&i>Bc)throw new Ho({maxFeePerGas:i})}function Fo(t){if(!t||t.length===0)return[];const e=[];for(let r=0;r<t.length;r++){const{address:i,storageKeys:n}=t[r];for(let s=0;s<n.length;s++)if(n[s].length-2!==64)throw new Of({storageKey:n[s]});if(!ti(i,{strict:!1}))throw new ei({address:i});e.push([i,n])}return e}function yg(t,e){const r=tg(t);return r==="eip1559"?Eg(t,e):r==="eip2930"?Ag(t,e):r==="eip4844"?xg(t,e):r==="eip7702"?Cg(t,e):kg(t,e)}function Cg(t,e){const{authorizationList:r,chainId:i,gas:n,nonce:s,to:o,value:a,maxFeePerGas:c,maxPriorityFeePerGas:l,accessList:u,data:d}=t;wg(t);const h=Fo(u),p=Ig(r);return ms(["0x04",en([ae(i),s?ae(s):"0x",l?ae(l):"0x",c?ae(c):"0x",n?ae(n):"0x",o??"0x",a?ae(a):"0x",d??"0x",h,p,...vs(t,e)])])}function xg(t,e){const{chainId:r,gas:i,nonce:n,to:s,value:o,maxFeePerBlobGas:a,maxFeePerGas:c,maxPriorityFeePerGas:l,accessList:u,data:d}=t;mg(t);let h=t.blobVersionedHashes,p=t.sidecars;if(t.blobs&&(typeof h>"u"||typeof p>"u")){const x=typeof t.blobs[0]=="string"?t.blobs:t.blobs.map(T=>xr(T)),k=t.kzg,P=Vd({blobs:x,kzg:k});if(typeof h>"u"&&(h=Kf({commitments:P})),typeof p>"u"){const T=Zd({blobs:x,commitments:P,kzg:k});p=eg({blobs:x,commitments:P,proofs:T})}}const v=Fo(u),g=[ae(r),n?ae(n):"0x",l?ae(l):"0x",c?ae(c):"0x",i?ae(i):"0x",s??"0x",o?ae(o):"0x",d??"0x",v,a?ae(a):"0x",h??[],...vs(t,e)],b=[],C=[],A=[];if(p)for(let x=0;x<p.length;x++){const{blob:k,commitment:P,proof:T}=p[x];b.push(k),C.push(P),A.push(T)}return ms(["0x03",en(p?[g,b,C,A]:g)])}function Eg(t,e){const{chainId:r,gas:i,nonce:n,to:s,value:o,maxFeePerGas:a,maxPriorityFeePerGas:c,accessList:l,data:u}=t;zc(t);const d=Fo(l),h=[ae(r),n?ae(n):"0x",c?ae(c):"0x",a?ae(a):"0x",i?ae(i):"0x",s??"0x",o?ae(o):"0x",u??"0x",d,...vs(t,e)];return ms(["0x02",en(h)])}function Ag(t,e){const{chainId:r,gas:i,data:n,nonce:s,to:o,value:a,accessList:c,gasPrice:l}=t;vg(t);const u=Fo(c),d=[ae(r),s?ae(s):"0x",l?ae(l):"0x",i?ae(i):"0x",o??"0x",a?ae(a):"0x",n??"0x",u,...vs(t,e)];return ms(["0x01",en(d)])}function kg(t,e){const{chainId:r=0,gas:i,data:n,nonce:s,to:o,value:a,gasPrice:c}=t;bg(t);let l=[s?ae(s):"0x",c?ae(c):"0x",i?ae(i):"0x",o??"0x",a?ae(a):"0x",n??"0x"];if(e){const u=(()=>{if(e.v>=35n)return(e.v-35n)/2n>0?e.v:27n+(e.v===35n?0n:1n);if(r>0)return BigInt(r*2)+BigInt(35n+e.v-27n);const p=27n+(e.v===27n?0n:1n);if(e.v!==p)throw new _f({v:e.v});return p})(),d=Ao(e.r),h=Ao(e.s);l=[...l,ae(u),d==="0x00"?"0x":d,h==="0x00"?"0x":h]}else r>0&&(l=[...l,ae(r),"0x","0x"]);return en(l)}function vs(t,e){const r=e??t,{v:i,yParity:n}=r;if(typeof r.r>"u")return[];if(typeof r.s>"u")return[];if(typeof i>"u"&&typeof n>"u")return[];const s=Ao(r.r),o=Ao(r.s);return[typeof n=="number"?n?ae(1):"0x":i===0n?"0x":i===1n?ae(1):i===27n?"0x":ae(1),s==="0x00"?"0x":s,o==="0x00"?"0x":o]}function Ig(t){if(!t||t.length===0)return[];const e=[];for(const r of t){const{chainId:i,nonce:n,...s}=r,o=r.address;e.push([i?ae(i):"0x",o,n?ae(n):"0x",...vs({},s)])}return e}const Ng={"0x0":"reverted","0x1":"success"};function Sg(t){const e={...t,blockNumber:t.blockNumber?BigInt(t.blockNumber):null,contractAddress:t.contractAddress?t.contractAddress:null,cumulativeGasUsed:t.cumulativeGasUsed?BigInt(t.cumulativeGasUsed):null,effectiveGasPrice:t.effectiveGasPrice?BigInt(t.effectiveGasPrice):null,gasUsed:t.gasUsed?BigInt(t.gasUsed):null,logs:t.logs?t.logs.map(r=>rg(r)):null,to:t.to?t.to:null,transactionIndex:t.transactionIndex?ko(t.transactionIndex):null,status:t.status?Ng[t.status]:null,type:t.type?qd[t.type]||t.type:null};return t.blobGasPrice&&(e.blobGasPrice=BigInt(t.blobGasPrice)),t.blobGasUsed&&(e.blobGasUsed=BigInt(t.blobGasUsed)),e}const Pg=Lc("transactionReceipt",Sg),_g=new Uint8Array([7,4,13,1,10,6,15,3,12,0,9,5,2,14,11,8]),th=new Uint8Array(new Array(16).fill(0).map((t,e)=>e)),Tg=th.map(t=>(9*t+5)%16);let Og=[th],$g=[Tg];for(let t=0;t<4;t++)for(let e of[Og,$g])e.push(e[t].map(r=>_g[r]));/*! noble-curves - MIT License (c) 2022 Paul Miller (paulmillr.com) */const qo=BigInt(0),Vo=BigInt(1),Rg=BigInt(2);function ri(t){return t instanceof Uint8Array||ArrayBuffer.isView(t)&&t.constructor.name==="Uint8Array"}function bs(t){if(!ri(t))throw new Error("Uint8Array expected")}function Zi(t,e){if(typeof e!="boolean")throw new Error(t+" boolean expected, got "+e)}const Lg=Array.from({length:256},(t,e)=>e.toString(16).padStart(2,"0"));function Gi(t){bs(t);let e="";for(let r=0;r<t.length;r++)e+=Lg[t[r]];return e}function Mi(t){const e=t.toString(16);return e.length&1?"0"+e:e}function jc(t){if(typeof t!="string")throw new Error("hex string expected, got "+typeof t);return t===""?qo:BigInt("0x"+t)}const qt={_0:48,_9:57,A:65,F:70,a:97,f:102};function Fl(t){if(t>=qt._0&&t<=qt._9)return t-qt._0;if(t>=qt.A&&t<=qt.F)return t-(qt.A-10);if(t>=qt.a&&t<=qt.f)return t-(qt.a-10)}function Ki(t){if(typeof t!="string")throw new Error("hex string expected, got "+typeof t);const e=t.length,r=e/2;if(e%2)throw new Error("hex string expected, got unpadded hex of length "+e);const i=new Uint8Array(r);for(let n=0,s=0;n<r;n++,s+=2){const o=Fl(t.charCodeAt(s)),a=Fl(t.charCodeAt(s+1));if(o===void 0||a===void 0){const c=t[s]+t[s+1];throw new Error('hex string expected, got non-hex character "'+c+'" at index '+s)}i[n]=o*16+a}return i}function Kr(t){return jc(Gi(t))}function Dc(t){return bs(t),jc(Gi(Uint8Array.from(t).reverse()))}function Yi(t,e){return Ki(t.toString(16).padStart(e*2,"0"))}function Hc(t,e){return Yi(t,e).reverse()}function Bg(t){return Ki(Mi(t))}function Pt(t,e,r){let i;if(typeof e=="string")try{i=Ki(e)}catch(s){throw new Error(t+" must be hex string or Uint8Array, cause: "+s)}else if(ri(e))i=Uint8Array.from(e);else throw new Error(t+" must be hex string or Uint8Array");const n=i.length;if(typeof r=="number"&&n!==r)throw new Error(t+" of length "+r+" expected, got "+n);return i}function cs(...t){let e=0;for(let i=0;i<t.length;i++){const n=t[i];bs(n),e+=n.length}const r=new Uint8Array(e);for(let i=0,n=0;i<t.length;i++){const s=t[i];r.set(s,n),n+=s.length}return r}function Ug(t,e){if(t.length!==e.length)return!1;let r=0;for(let i=0;i<t.length;i++)r|=t[i]^e[i];return r===0}function Mg(t){if(typeof t!="string")throw new Error("string expected");return new Uint8Array(new TextEncoder().encode(t))}const da=t=>typeof t=="bigint"&&qo<=t;function Zo(t,e,r){return da(t)&&da(e)&&da(r)&&e<=t&&t<r}function Yr(t,e,r,i){if(!Zo(e,r,i))throw new Error("expected valid "+t+": "+r+" <= n < "+i+", got "+e)}function rh(t){let e;for(e=0;t>qo;t>>=Vo,e+=1);return e}function zg(t,e){return t>>BigInt(e)&Vo}function jg(t,e,r){return t|(r?Vo:qo)<<BigInt(e)}const Wc=t=>(Rg<<BigInt(t-1))-Vo,ha=t=>new Uint8Array(t),ql=t=>Uint8Array.from(t);function ih(t,e,r){if(typeof t!="number"||t<2)throw new Error("hashLen must be a number");if(typeof e!="number"||e<2)throw new Error("qByteLen must be a number");if(typeof r!="function")throw new Error("hmacFn must be a function");let i=ha(t),n=ha(t),s=0;const o=()=>{i.fill(1),n.fill(0),s=0},a=(...u)=>r(n,i,...u),c=(u=ha())=>{n=a(ql([0]),u),i=a(),u.length!==0&&(n=a(ql([1]),u),i=a())},l=()=>{if(s++>=1e3)throw new Error("drbg: tried 1000 values");let u=0;const d=[];for(;u<e;){i=a();const h=i.slice();d.push(h),u+=i.length}return cs(...d)};return(u,d)=>{o(),c(u);let h;for(;!(h=d(l()));)c();return o(),h}}const Dg={bigint:t=>typeof t=="bigint",function:t=>typeof t=="function",boolean:t=>typeof t=="boolean",string:t=>typeof t=="string",stringOrUint8Array:t=>typeof t=="string"||ri(t),isSafeInteger:t=>Number.isSafeInteger(t),array:t=>Array.isArray(t),field:(t,e)=>e.Fp.isValid(t),hash:t=>typeof t=="function"&&Number.isSafeInteger(t.outputLen)};function ys(t,e,r={}){const i=(n,s,o)=>{const a=Dg[s];if(typeof a!="function")throw new Error("invalid validator function");const c=t[n];if(!(o&&c===void 0)&&!a(c,t))throw new Error("param "+String(n)+" is invalid. Expected "+s+", got "+c)};for(const[n,s]of Object.entries(e))i(n,s,!1);for(const[n,s]of Object.entries(r))i(n,s,!0);return t}const Hg=()=>{throw new Error("not implemented")};function pc(t){const e=new WeakMap;return(r,...i)=>{const n=e.get(r);if(n!==void 0)return n;const s=t(r,...i);return e.set(r,s),s}}var Wg=Object.freeze({__proto__:null,isBytes:ri,abytes:bs,abool:Zi,bytesToHex:Gi,numberToHexUnpadded:Mi,hexToNumber:jc,hexToBytes:Ki,bytesToNumberBE:Kr,bytesToNumberLE:Dc,numberToBytesBE:Yi,numberToBytesLE:Hc,numberToVarBytesBE:Bg,ensureBytes:Pt,concatBytes:cs,equalBytes:Ug,utf8ToBytes:Mg,inRange:Zo,aInRange:Yr,bitLen:rh,bitGet:zg,bitSet:jg,bitMask:Wc,createHmacDrbg:ih,validateObject:ys,notImplemented:Hg,memoized:pc});const Fg="0.1.1";function qg(){return Fg}class Fe extends Error{constructor(e,r={}){const i=(()=>{var a;if(r.cause instanceof Fe){if(r.cause.details)return r.cause.details;if(r.cause.shortMessage)return r.cause.shortMessage}return(a=r.cause)!=null&&a.message?r.cause.message:r.details})(),n=r.cause instanceof Fe&&r.cause.docsPath||r.docsPath,s=`https://oxlib.sh${n??""}`,o=[e||"An error occurred.",...r.metaMessages?["",...r.metaMessages]:[],...i||n?["",i?`Details: ${i}`:void 0,n?`See: ${s}`:void 0]:[]].filter(a=>typeof a=="string").join(`
`);super(o,r.cause?{cause:r.cause}:void 0),Object.defineProperty(this,"details",{enumerable:!0,configurable:!0,writable:!0,value:void 0}),Object.defineProperty(this,"docs",{enumerable:!0,configurable:!0,writable:!0,value:void 0}),Object.defineProperty(this,"docsPath",{enumerable:!0,configurable:!0,writable:!0,value:void 0}),Object.defineProperty(this,"shortMessage",{enumerable:!0,configurable:!0,writable:!0,value:void 0}),Object.defineProperty(this,"cause",{enumerable:!0,configurable:!0,writable:!0,value:void 0}),Object.defineProperty(this,"name",{enumerable:!0,configurable:!0,writable:!0,value:"BaseError"}),Object.defineProperty(this,"version",{enumerable:!0,configurable:!0,writable:!0,value:`ox@${qg()}`}),this.cause=r.cause,this.details=i,this.docs=s,this.docsPath=n,this.shortMessage=e}walk(e){return nh(this,e)}}function nh(t,e){return e!=null&&e(t)?t:t&&typeof t=="object"&&"cause"in t&&t.cause?nh(t.cause,e):e?null:t}function Vg(t,e){if(Zl(t)>e)throw new ew({givenSize:Zl(t),maxSize:e})}const Vt={zero:48,nine:57,A:65,F:70,a:97,f:102};function Vl(t){if(t>=Vt.zero&&t<=Vt.nine)return t-Vt.zero;if(t>=Vt.A&&t<=Vt.F)return t-(Vt.A-10);if(t>=Vt.a&&t<=Vt.f)return t-(Vt.a-10)}function Zg(t,e={}){const{dir:r,size:i=32}=e;if(i===0)return t;if(t.length>i)throw new tw({size:t.length,targetSize:i,type:"Bytes"});const n=new Uint8Array(i);for(let s=0;s<i;s++){const o=r==="right";n[o?s:i-s-1]=t[o?s:t.length-s-1]}return n}function Fc(t,e){if(fc(t)>e)throw new cw({givenSize:fc(t),maxSize:e})}function sh(t,e={}){const{dir:r,size:i=32}=e;if(i===0)return t;const n=t.replace("0x","");if(n.length>i*2)throw new lw({size:Math.ceil(n.length/2),targetSize:i,type:"Hex"});return`0x${n[r==="right"?"padEnd":"padStart"](i*2,"0")}`}const Gg=new TextEncoder;function Kg(t){return t instanceof Uint8Array?t:typeof t=="string"?Jg(t):Yg(t)}function Yg(t){return t instanceof Uint8Array?t:new Uint8Array(t)}function Jg(t,e={}){const{size:r}=e;let i=t;r&&(Fc(t,r),i=qc(t,r));let n=i.slice(2);n.length%2&&(n=`0${n}`);const s=n.length/2,o=new Uint8Array(s);for(let a=0,c=0;a<s;a++){const l=Vl(n.charCodeAt(c++)),u=Vl(n.charCodeAt(c++));if(l===void 0||u===void 0)throw new Fe(`Invalid byte sequence ("${n[c-2]}${n[c-1]}" in "${n}").`);o[a]=l*16+u}return o}function Xg(t,e={}){const{size:r}=e,i=Gg.encode(t);return typeof r=="number"?(Vg(i,r),Qg(i,r)):i}function Qg(t,e){return Zg(t,{dir:"right",size:e})}function Zl(t){return t.length}class ew extends Fe{constructor({givenSize:e,maxSize:r}){super(`Size cannot exceed \`${r}\` bytes. Given size: \`${e}\` bytes.`),Object.defineProperty(this,"name",{enumerable:!0,configurable:!0,writable:!0,value:"Bytes.SizeOverflowError"})}}class tw extends Fe{constructor({size:e,targetSize:r,type:i}){super(`${i.charAt(0).toUpperCase()}${i.slice(1).toLowerCase()} size (\`${e}\`) exceeds padding size (\`${r}\`).`),Object.defineProperty(this,"name",{enumerable:!0,configurable:!0,writable:!0,value:"Bytes.SizeExceedsPaddingSizeError"})}}const rw=new TextEncoder,iw=Array.from({length:256},(t,e)=>e.toString(16).padStart(2,"0"));function oh(...t){return`0x${t.reduce((e,r)=>e+r.replace("0x",""),"")}`}function nw(t,e={}){const r=`0x${Number(t)}`;return typeof e.size=="number"?(Fc(r,e.size),No(r,e.size)):r}function ah(t,e={}){let r="";for(let n=0;n<t.length;n++)r+=iw[t[n]];const i=`0x${r}`;return typeof e.size=="number"?(Fc(i,e.size),qc(i,e.size)):i}function sw(t,e={}){const{signed:r,size:i}=e,n=BigInt(t);let s;i?r?s=(1n<<BigInt(i)*8n-1n)-1n:s=2n**(BigInt(i)*8n)-1n:typeof t=="number"&&(s=BigInt(Number.MAX_SAFE_INTEGER));const o=typeof s=="bigint"&&r?-s-1n:0;if(s&&n>s||n<o){const c=typeof t=="bigint"?"n":"";throw new aw({max:s?`${s}${c}`:void 0,min:`${o}${c}`,signed:r,size:i,value:`${t}${c}`})}const a=`0x${(r&&n<0?(1n<<BigInt(i*8))+BigInt(n):n).toString(16)}`;return i?No(a,i):a}function ow(t,e={}){return ah(rw.encode(t),e)}function No(t,e){return sh(t,{dir:"left",size:e})}function qc(t,e){return sh(t,{dir:"right",size:e})}function fc(t){return Math.ceil((t.length-2)/2)}class aw extends Fe{constructor({max:e,min:r,signed:i,size:n,value:s}){super(`Number \`${s}\` is not in safe${n?` ${n*8}-bit`:""}${i?" signed":" unsigned"} integer range ${e?`(\`${r}\` to \`${e}\`)`:`(above \`${r}\`)`}`),Object.defineProperty(this,"name",{enumerable:!0,configurable:!0,writable:!0,value:"Hex.IntegerOutOfRangeError"})}}class cw extends Fe{constructor({givenSize:e,maxSize:r}){super(`Size cannot exceed \`${r}\` bytes. Given size: \`${e}\` bytes.`),Object.defineProperty(this,"name",{enumerable:!0,configurable:!0,writable:!0,value:"Hex.SizeOverflowError"})}}class lw extends Fe{constructor({size:e,targetSize:r,type:i}){super(`${i.charAt(0).toUpperCase()}${i.slice(1).toLowerCase()} size (\`${e}\`) exceeds padding size (\`${r}\`).`),Object.defineProperty(this,"name",{enumerable:!0,configurable:!0,writable:!0,value:"Hex.SizeExceedsPaddingSizeError"})}}function uw(t,e={}){const{as:r=typeof t=="string"?"Hex":"Bytes"}=e,i=Ud(Kg(t));return r==="Bytes"?i:ah(i)}class dw extends Map{constructor(e){super(),Object.defineProperty(this,"maxSize",{enumerable:!0,configurable:!0,writable:!0,value:void 0}),this.maxSize=e}get(e){const r=super.get(e);return super.has(e)&&r!==void 0&&(this.delete(e),super.set(e,r)),r}set(e,r){if(super.set(e,r),this.maxSize&&this.size>this.maxSize){const i=this.keys().next().value;i&&this.delete(i)}return this}}const hw={checksum:new dw(8192)},pa=hw.checksum,pw=/^0x[a-fA-F0-9]{40}$/;function ch(t,e={}){const{strict:r=!0}=e;if(!pw.test(t))throw new Gl({address:t,cause:new gw});if(r){if(t.toLowerCase()===t)return;if(fw(t)!==t)throw new Gl({address:t,cause:new ww})}}function fw(t){if(pa.has(t))return pa.get(t);ch(t,{strict:!1});const e=t.substring(2).toLowerCase(),r=uw(Xg(e),{as:"Bytes"}),i=e.split("");for(let s=0;s<40;s+=2)r[s>>1]>>4>=8&&i[s]&&(i[s]=i[s].toUpperCase()),(r[s>>1]&15)>=8&&i[s+1]&&(i[s+1]=i[s+1].toUpperCase());const n=`0x${i.join("")}`;return pa.set(t,n),n}class Gl extends Fe{constructor({address:e,cause:r}){super(`Address "${e}" is invalid.`,{cause:r}),Object.defineProperty(this,"name",{enumerable:!0,configurable:!0,writable:!0,value:"Address.InvalidAddressError"})}}class gw extends Fe{constructor(){super("Address is not a 20 byte (40 hexadecimal character) value."),Object.defineProperty(this,"name",{enumerable:!0,configurable:!0,writable:!0,value:"Address.InvalidInputError"})}}class ww extends Fe{constructor(){super("Address does not match its checksum counterpart."),Object.defineProperty(this,"name",{enumerable:!0,configurable:!0,writable:!0,value:"Address.InvalidChecksumError"})}}const mw=/^(.*)\[([0-9]*)\]$/,vw=/^bytes([1-9]|1[0-9]|2[0-9]|3[0-2])?$/,bw=/^(u?int)(8|16|24|32|40|48|56|64|72|80|88|96|104|112|120|128|136|144|152|160|168|176|184|192|200|208|216|224|232|240|248|256)?$/;function gc(t,e){if(t.length!==e.length)throw new Cw({expectedLength:t.length,givenLength:e.length});const r=[];for(let i=0;i<t.length;i++){const n=t[i],s=e[i];r.push(gc.encode(n,s))}return oh(...r)}(function(t){function e(r,i,n=!1){if(r==="address"){const c=i;return ch(c),No(c.toLowerCase(),n?32:0)}if(r==="string")return ow(i);if(r==="bytes")return i;if(r==="bool")return No(nw(i),n?32:1);const s=r.match(bw);if(s){const[c,l,u="256"]=s,d=Number.parseInt(u)/8;return sw(i,{size:n?32:d,signed:l==="int"})}const o=r.match(vw);if(o){const[c,l]=o;if(Number.parseInt(l)!==(i.length-2)/2)throw new yw({expectedSize:Number.parseInt(l),value:i});return qc(i,n?32:0)}const a=r.match(mw);if(a&&Array.isArray(i)){const[c,l]=a,u=[];for(let d=0;d<i.length;d++)u.push(e(l,i[d],!0));return u.length===0?"0x":oh(...u)}throw new xw(r)}t.encode=e})(gc||(gc={}));class yw extends Fe{constructor({expectedSize:e,value:r}){super(`Size of bytes "${r}" (bytes${fc(r)}) does not match expected size (bytes${e}).`),Object.defineProperty(this,"name",{enumerable:!0,configurable:!0,writable:!0,value:"AbiParameters.BytesSizeMismatchError"})}}class Cw extends Fe{constructor({expectedLength:e,givenLength:r}){super(["ABI encoding parameters/values length mismatch.",`Expected length (parameters): ${e}`,`Given length (values): ${r}`].join(`
`)),Object.defineProperty(this,"name",{enumerable:!0,configurable:!0,writable:!0,value:"AbiParameters.LengthMismatchError"})}}class xw extends Fe{constructor(e){super(`Type \`${e}\` is not a valid ABI Type.`),Object.defineProperty(this,"name",{enumerable:!0,configurable:!0,writable:!0,value:"AbiParameters.InvalidTypeError"})}}class lh extends Oc{constructor(e,r){super(),this.finished=!1,this.destroyed=!1,Jp(e);const i=jo(r);if(this.iHash=e.create(),typeof this.iHash.update!="function")throw new Error("Expected instance of class which extends utils.Hash");this.blockLen=this.iHash.blockLen,this.outputLen=this.iHash.outputLen;const n=this.blockLen,s=new Uint8Array(n);s.set(i.length>n?e.create().update(i).digest():i);for(let o=0;o<s.length;o++)s[o]^=54;this.iHash.update(s),this.oHash=e.create();for(let o=0;o<s.length;o++)s[o]^=106;this.oHash.update(s),s.fill(0)}update(e){return Wi(this),this.iHash.update(e),this}digestInto(e){Wi(this),ws(e,this.outputLen),this.finished=!0,this.iHash.digestInto(e),this.oHash.update(e),this.oHash.digestInto(e),this.destroy()}digest(){const e=new Uint8Array(this.oHash.outputLen);return this.digestInto(e),e}_cloneInto(e){e||(e=Object.create(Object.getPrototypeOf(this),{}));const{oHash:r,iHash:i,finished:n,destroyed:s,blockLen:o,outputLen:a}=this;return e=e,e.finished=n,e.destroyed=s,e.blockLen=o,e.outputLen=a,e.oHash=r._cloneInto(e.oHash),e.iHash=i._cloneInto(e.iHash),e}destroy(){this.destroyed=!0,this.oHash.destroy(),this.iHash.destroy()}}const uh=(t,e,r)=>new lh(t,e).update(r).digest();uh.create=(t,e)=>new lh(t,e);const Ue=BigInt(0),Se=BigInt(1),Hr=BigInt(2),Ew=BigInt(3),wc=BigInt(4),Kl=BigInt(5),Yl=BigInt(8);function Xe(t,e){const r=t%e;return r>=Ue?r:e+r}function Aw(t,e,r){if(e<Ue)throw new Error("invalid exponent, negatives unsupported");if(r<=Ue)throw new Error("invalid modulus");if(r===Se)return Ue;let i=Se;for(;e>Ue;)e&Se&&(i=i*t%r),t=t*t%r,e>>=Se;return i}function ft(t,e,r){let i=t;for(;e-- >Ue;)i*=i,i%=r;return i}function mc(t,e){if(t===Ue)throw new Error("invert: expected non-zero number");if(e<=Ue)throw new Error("invert: expected positive modulus, got "+e);let r=Xe(t,e),i=e,n=Ue,s=Se;for(;r!==Ue;){const o=i/r,a=i%r,c=n-s*o;i=r,r=a,n=s,s=c}if(i!==Se)throw new Error("invert: does not exist");return Xe(n,e)}function kw(t){const e=(t-Se)/Hr;let r,i,n;for(r=t-Se,i=0;r%Hr===Ue;r/=Hr,i++);for(n=Hr;n<t&&Aw(n,e,t)!==t-Se;n++)if(n>1e3)throw new Error("Cannot find square root: likely non-prime P");if(i===1){const o=(t+Se)/wc;return function(a,c){const l=a.pow(c,o);if(!a.eql(a.sqr(l),c))throw new Error("Cannot find square root");return l}}const s=(r+Se)/Hr;return function(o,a){if(o.pow(a,e)===o.neg(o.ONE))throw new Error("Cannot find square root");let c=i,l=o.pow(o.mul(o.ONE,n),r),u=o.pow(a,s),d=o.pow(a,r);for(;!o.eql(d,o.ONE);){if(o.eql(d,o.ZERO))return o.ZERO;let h=1;for(let v=o.sqr(d);h<c&&!o.eql(v,o.ONE);h++)v=o.sqr(v);const p=o.pow(l,Se<<BigInt(c-h-1));l=o.sqr(p),u=o.mul(u,p),d=o.mul(d,l),c=h}return u}}function Iw(t){if(t%wc===Ew){const e=(t+Se)/wc;return function(r,i){const n=r.pow(i,e);if(!r.eql(r.sqr(n),i))throw new Error("Cannot find square root");return n}}if(t%Yl===Kl){const e=(t-Kl)/Yl;return function(r,i){const n=r.mul(i,Hr),s=r.pow(n,e),o=r.mul(i,s),a=r.mul(r.mul(o,Hr),s),c=r.mul(o,r.sub(a,r.ONE));if(!r.eql(r.sqr(c),i))throw new Error("Cannot find square root");return c}}return kw(t)}const Nw=["create","isValid","is0","neg","inv","sqrt","sqr","eql","add","sub","mul","pow","div","addN","subN","mulN","sqrN"];function Sw(t){const e={ORDER:"bigint",MASK:"bigint",BYTES:"isSafeInteger",BITS:"isSafeInteger"},r=Nw.reduce((i,n)=>(i[n]="function",i),e);return ys(t,r)}function Pw(t,e,r){if(r<Ue)throw new Error("invalid exponent, negatives unsupported");if(r===Ue)return t.ONE;if(r===Se)return e;let i=t.ONE,n=e;for(;r>Ue;)r&Se&&(i=t.mul(i,n)),n=t.sqr(n),r>>=Se;return i}function _w(t,e){const r=new Array(e.length),i=e.reduce((s,o,a)=>t.is0(o)?s:(r[a]=s,t.mul(s,o)),t.ONE),n=t.inv(i);return e.reduceRight((s,o,a)=>t.is0(o)?s:(r[a]=t.mul(s,r[a]),t.mul(s,o)),n),r}function dh(t,e){const r=e!==void 0?e:t.toString(2).length,i=Math.ceil(r/8);return{nBitLength:r,nByteLength:i}}function hh(t,e,r=!1,i={}){if(t<=Ue)throw new Error("invalid field: expected ORDER > 0, got "+t);const{nBitLength:n,nByteLength:s}=dh(t,e);if(s>2048)throw new Error("invalid field: expected ORDER of <= 2048 bytes");let o;const a=Object.freeze({ORDER:t,isLE:r,BITS:n,BYTES:s,MASK:Wc(n),ZERO:Ue,ONE:Se,create:c=>Xe(c,t),isValid:c=>{if(typeof c!="bigint")throw new Error("invalid field element: expected bigint, got "+typeof c);return Ue<=c&&c<t},is0:c=>c===Ue,isOdd:c=>(c&Se)===Se,neg:c=>Xe(-c,t),eql:(c,l)=>c===l,sqr:c=>Xe(c*c,t),add:(c,l)=>Xe(c+l,t),sub:(c,l)=>Xe(c-l,t),mul:(c,l)=>Xe(c*l,t),pow:(c,l)=>Pw(a,c,l),div:(c,l)=>Xe(c*mc(l,t),t),sqrN:c=>c*c,addN:(c,l)=>c+l,subN:(c,l)=>c-l,mulN:(c,l)=>c*l,inv:c=>mc(c,t),sqrt:i.sqrt||(c=>(o||(o=Iw(t)),o(a,c))),invertBatch:c=>_w(a,c),cmov:(c,l,u)=>u?l:c,toBytes:c=>r?Hc(c,s):Yi(c,s),fromBytes:c=>{if(c.length!==s)throw new Error("Field.fromBytes: expected "+s+" bytes, got "+c.length);return r?Dc(c):Kr(c)}});return Object.freeze(a)}function ph(t){if(typeof t!="bigint")throw new Error("field order must be bigint");const e=t.toString(2).length;return Math.ceil(e/8)}function fh(t){const e=ph(t);return e+Math.ceil(e/2)}function Tw(t,e,r=!1){const i=t.length,n=ph(e),s=fh(e);if(i<16||i<s||i>1024)throw new Error("expected "+s+"-1024 bytes of input, got "+i);const o=r?Dc(t):Kr(t),a=Xe(o,e-Se)+Se;return r?Hc(a,n):Yi(a,n)}const Jl=BigInt(0),Us=BigInt(1);function fa(t,e){const r=e.negate();return t?r:e}function gh(t,e){if(!Number.isSafeInteger(t)||t<=0||t>e)throw new Error("invalid window size, expected [1.."+e+"], got W="+t)}function ga(t,e){gh(t,e);const r=Math.ceil(e/t)+1,i=2**(t-1);return{windows:r,windowSize:i}}function Ow(t,e){if(!Array.isArray(t))throw new Error("array expected");t.forEach((r,i)=>{if(!(r instanceof e))throw new Error("invalid point at index "+i)})}function $w(t,e){if(!Array.isArray(t))throw new Error("array of scalars expected");t.forEach((r,i)=>{if(!e.isValid(r))throw new Error("invalid scalar at index "+i)})}const wa=new WeakMap,wh=new WeakMap;function ma(t){return wh.get(t)||1}function Rw(t,e){return{constTimeNegate:fa,hasPrecomputes(r){return ma(r)!==1},unsafeLadder(r,i,n=t.ZERO){let s=r;for(;i>Jl;)i&Us&&(n=n.add(s)),s=s.double(),i>>=Us;return n},precomputeWindow(r,i){const{windows:n,windowSize:s}=ga(i,e),o=[];let a=r,c=a;for(let l=0;l<n;l++){c=a,o.push(c);for(let u=1;u<s;u++)c=c.add(a),o.push(c);a=c.double()}return o},wNAF(r,i,n){const{windows:s,windowSize:o}=ga(r,e);let a=t.ZERO,c=t.BASE;const l=BigInt(2**r-1),u=2**r,d=BigInt(r);for(let h=0;h<s;h++){const p=h*o;let v=Number(n&l);n>>=d,v>o&&(v-=u,n+=Us);const g=p,b=p+Math.abs(v)-1,C=h%2!==0,A=v<0;v===0?c=c.add(fa(C,i[g])):a=a.add(fa(A,i[b]))}return{p:a,f:c}},wNAFUnsafe(r,i,n,s=t.ZERO){const{windows:o,windowSize:a}=ga(r,e),c=BigInt(2**r-1),l=2**r,u=BigInt(r);for(let d=0;d<o;d++){const h=d*a;if(n===Jl)break;let p=Number(n&c);if(n>>=u,p>a&&(p-=l,n+=Us),p===0)continue;let v=i[h+Math.abs(p)-1];p<0&&(v=v.negate()),s=s.add(v)}return s},getPrecomputes(r,i,n){let s=wa.get(i);return s||(s=this.precomputeWindow(i,r),r!==1&&wa.set(i,n(s))),s},wNAFCached(r,i,n){const s=ma(r);return this.wNAF(s,this.getPrecomputes(s,r,n),i)},wNAFCachedUnsafe(r,i,n,s){const o=ma(r);return o===1?this.unsafeLadder(r,i,s):this.wNAFUnsafe(o,this.getPrecomputes(o,r,n),i,s)},setWindowSize(r,i){gh(i,e),wh.set(r,i),wa.delete(r)}}}function Lw(t,e,r,i){if(Ow(r,t),$w(i,e),r.length!==i.length)throw new Error("arrays of points and scalars must have equal length");const n=t.ZERO,s=rh(BigInt(r.length)),o=s>12?s-3:s>4?s-2:s?2:1,a=(1<<o)-1,c=new Array(a+1).fill(n),l=Math.floor((e.BITS-1)/o)*o;let u=n;for(let d=l;d>=0;d-=o){c.fill(n);for(let p=0;p<i.length;p++){const v=i[p],g=Number(v>>BigInt(d)&BigInt(a));c[g]=c[g].add(r[p])}let h=n;for(let p=c.length-1,v=n;p>0;p--)v=v.add(c[p]),h=h.add(v);if(u=u.add(h),d!==0)for(let p=0;p<o;p++)u=u.double()}return u}function mh(t){return Sw(t.Fp),ys(t,{n:"bigint",h:"bigint",Gx:"field",Gy:"field"},{nBitLength:"isSafeInteger",nByteLength:"isSafeInteger"}),Object.freeze({...dh(t.n,t.nBitLength),...t,p:t.Fp.ORDER})}function Xl(t){t.lowS!==void 0&&Zi("lowS",t.lowS),t.prehash!==void 0&&Zi("prehash",t.prehash)}function Bw(t){const e=mh(t);ys(e,{a:"field",b:"field"},{allowedPrivateKeyLengths:"array",wrapPrivateKey:"boolean",isTorsionFree:"function",clearCofactor:"function",allowInfinityPoint:"boolean",fromBytes:"function",toBytes:"function"});const{endo:r,Fp:i,a:n}=e;if(r){if(!i.eql(n,i.ZERO))throw new Error("invalid endomorphism, can only be defined for Koblitz curves that have a=0");if(typeof r!="object"||typeof r.beta!="bigint"||typeof r.splitScalar!="function")throw new Error("invalid endomorphism, expected beta: bigint and splitScalar: function")}return Object.freeze({...e})}const{bytesToNumberBE:Uw,hexToBytes:Mw}=Wg;class zw extends Error{constructor(e=""){super(e)}}const Qt={Err:zw,_tlv:{encode:(t,e)=>{const{Err:r}=Qt;if(t<0||t>256)throw new r("tlv.encode: wrong tag");if(e.length&1)throw new r("tlv.encode: unpadded data");const i=e.length/2,n=Mi(i);if(n.length/2&128)throw new r("tlv.encode: long form length too big");const s=i>127?Mi(n.length/2|128):"";return Mi(t)+s+n+e},decode(t,e){const{Err:r}=Qt;let i=0;if(t<0||t>256)throw new r("tlv.encode: wrong tag");if(e.length<2||e[i++]!==t)throw new r("tlv.decode: wrong tlv");const n=e[i++],s=!!(n&128);let o=0;if(!s)o=n;else{const c=n&127;if(!c)throw new r("tlv.decode(long): indefinite length not supported");if(c>4)throw new r("tlv.decode(long): byte length is too big");const l=e.subarray(i,i+c);if(l.length!==c)throw new r("tlv.decode: length bytes not complete");if(l[0]===0)throw new r("tlv.decode(long): zero leftmost byte");for(const u of l)o=o<<8|u;if(i+=c,o<128)throw new r("tlv.decode(long): not minimal encoding")}const a=e.subarray(i,i+o);if(a.length!==o)throw new r("tlv.decode: wrong value length");return{v:a,l:e.subarray(i+o)}}},_int:{encode(t){const{Err:e}=Qt;if(t<er)throw new e("integer: negative integers are not allowed");let r=Mi(t);if(Number.parseInt(r[0],16)&8&&(r="00"+r),r.length&1)throw new e("unexpected DER parsing assertion: unpadded hex");return r},decode(t){const{Err:e}=Qt;if(t[0]&128)throw new e("invalid signature integer: negative");if(t[0]===0&&!(t[1]&128))throw new e("invalid signature integer: unnecessary leading zero");return Uw(t)}},toSig(t){const{Err:e,_int:r,_tlv:i}=Qt,n=typeof t=="string"?Mw(t):t;bs(n);const{v:s,l:o}=i.decode(48,n);if(o.length)throw new e("invalid signature: left bytes after parsing");const{v:a,l:c}=i.decode(2,s),{v:l,l:u}=i.decode(2,c);if(u.length)throw new e("invalid signature: left bytes after parsing");return{r:r.decode(a),s:r.decode(l)}},hexFromSig(t){const{_tlv:e,_int:r}=Qt,i=e.encode(2,r.encode(t.r)),n=e.encode(2,r.encode(t.s)),s=i+n;return e.encode(48,s)}},er=BigInt(0),Le=BigInt(1);BigInt(2);const Ql=BigInt(3);BigInt(4);function jw(t){const e=Bw(t),{Fp:r}=e,i=hh(e.n,e.nBitLength),n=e.toBytes||((g,b,C)=>{const A=b.toAffine();return cs(Uint8Array.from([4]),r.toBytes(A.x),r.toBytes(A.y))}),s=e.fromBytes||(g=>{const b=g.subarray(1),C=r.fromBytes(b.subarray(0,r.BYTES)),A=r.fromBytes(b.subarray(r.BYTES,2*r.BYTES));return{x:C,y:A}});function o(g){const{a:b,b:C}=e,A=r.sqr(g),x=r.mul(A,g);return r.add(r.add(x,r.mul(g,b)),C)}if(!r.eql(r.sqr(e.Gy),o(e.Gx)))throw new Error("bad generator point: equation left != right");function a(g){return Zo(g,Le,e.n)}function c(g){const{allowedPrivateKeyLengths:b,nByteLength:C,wrapPrivateKey:A,n:x}=e;if(b&&typeof g!="bigint"){if(ri(g)&&(g=Gi(g)),typeof g!="string"||!b.includes(g.length))throw new Error("invalid private key");g=g.padStart(C*2,"0")}let k;try{k=typeof g=="bigint"?g:Kr(Pt("private key",g,C))}catch{throw new Error("invalid private key, expected hex or "+C+" bytes, got "+typeof g)}return A&&(k=Xe(k,x)),Yr("private key",k,Le,x),k}function l(g){if(!(g instanceof h))throw new Error("ProjectivePoint expected")}const u=pc((g,b)=>{const{px:C,py:A,pz:x}=g;if(r.eql(x,r.ONE))return{x:C,y:A};const k=g.is0();b==null&&(b=k?r.ONE:r.inv(x));const P=r.mul(C,b),T=r.mul(A,b),j=r.mul(x,b);if(k)return{x:r.ZERO,y:r.ZERO};if(!r.eql(j,r.ONE))throw new Error("invZ was invalid");return{x:P,y:T}}),d=pc(g=>{if(g.is0()){if(e.allowInfinityPoint&&!r.is0(g.py))return;throw new Error("bad point: ZERO")}const{x:b,y:C}=g.toAffine();if(!r.isValid(b)||!r.isValid(C))throw new Error("bad point: x or y not FE");const A=r.sqr(C),x=o(b);if(!r.eql(A,x))throw new Error("bad point: equation left != right");if(!g.isTorsionFree())throw new Error("bad point: not in prime-order subgroup");return!0});class h{constructor(b,C,A){if(this.px=b,this.py=C,this.pz=A,b==null||!r.isValid(b))throw new Error("x required");if(C==null||!r.isValid(C))throw new Error("y required");if(A==null||!r.isValid(A))throw new Error("z required");Object.freeze(this)}static fromAffine(b){const{x:C,y:A}=b||{};if(!b||!r.isValid(C)||!r.isValid(A))throw new Error("invalid affine point");if(b instanceof h)throw new Error("projective point not allowed");const x=k=>r.eql(k,r.ZERO);return x(C)&&x(A)?h.ZERO:new h(C,A,r.ONE)}get x(){return this.toAffine().x}get y(){return this.toAffine().y}static normalizeZ(b){const C=r.invertBatch(b.map(A=>A.pz));return b.map((A,x)=>A.toAffine(C[x])).map(h.fromAffine)}static fromHex(b){const C=h.fromAffine(s(Pt("pointHex",b)));return C.assertValidity(),C}static fromPrivateKey(b){return h.BASE.multiply(c(b))}static msm(b,C){return Lw(h,i,b,C)}_setWindowSize(b){v.setWindowSize(this,b)}assertValidity(){d(this)}hasEvenY(){const{y:b}=this.toAffine();if(r.isOdd)return!r.isOdd(b);throw new Error("Field doesn't support isOdd")}equals(b){l(b);const{px:C,py:A,pz:x}=this,{px:k,py:P,pz:T}=b,j=r.eql(r.mul(C,T),r.mul(k,x)),$=r.eql(r.mul(A,T),r.mul(P,x));return j&&$}negate(){return new h(this.px,r.neg(this.py),this.pz)}double(){const{a:b,b:C}=e,A=r.mul(C,Ql),{px:x,py:k,pz:P}=this;let T=r.ZERO,j=r.ZERO,$=r.ZERO,_=r.mul(x,x),R=r.mul(k,k),U=r.mul(P,P),X=r.mul(x,k);return X=r.add(X,X),$=r.mul(x,P),$=r.add($,$),T=r.mul(b,$),j=r.mul(A,U),j=r.add(T,j),T=r.sub(R,j),j=r.add(R,j),j=r.mul(T,j),T=r.mul(X,T),$=r.mul(A,$),U=r.mul(b,U),X=r.sub(_,U),X=r.mul(b,X),X=r.add(X,$),$=r.add(_,_),_=r.add($,_),_=r.add(_,U),_=r.mul(_,X),j=r.add(j,_),U=r.mul(k,P),U=r.add(U,U),_=r.mul(U,X),T=r.sub(T,_),$=r.mul(U,R),$=r.add($,$),$=r.add($,$),new h(T,j,$)}add(b){l(b);const{px:C,py:A,pz:x}=this,{px:k,py:P,pz:T}=b;let j=r.ZERO,$=r.ZERO,_=r.ZERO;const R=e.a,U=r.mul(e.b,Ql);let X=r.mul(C,k),pe=r.mul(A,P),S=r.mul(x,T),f=r.add(C,A),m=r.add(k,P);f=r.mul(f,m),m=r.add(X,pe),f=r.sub(f,m),m=r.add(C,x);let I=r.add(k,T);return m=r.mul(m,I),I=r.add(X,S),m=r.sub(m,I),I=r.add(A,x),j=r.add(P,T),I=r.mul(I,j),j=r.add(pe,S),I=r.sub(I,j),_=r.mul(R,m),j=r.mul(U,S),_=r.add(j,_),j=r.sub(pe,_),_=r.add(pe,_),$=r.mul(j,_),pe=r.add(X,X),pe=r.add(pe,X),S=r.mul(R,S),m=r.mul(U,m),pe=r.add(pe,S),S=r.sub(X,S),S=r.mul(R,S),m=r.add(m,S),X=r.mul(pe,m),$=r.add($,X),X=r.mul(I,m),j=r.mul(f,j),j=r.sub(j,X),X=r.mul(f,pe),_=r.mul(I,_),_=r.add(_,X),new h(j,$,_)}subtract(b){return this.add(b.negate())}is0(){return this.equals(h.ZERO)}wNAF(b){return v.wNAFCached(this,b,h.normalizeZ)}multiplyUnsafe(b){const{endo:C,n:A}=e;Yr("scalar",b,er,A);const x=h.ZERO;if(b===er)return x;if(this.is0()||b===Le)return this;if(!C||v.hasPrecomputes(this))return v.wNAFCachedUnsafe(this,b,h.normalizeZ);let{k1neg:k,k1:P,k2neg:T,k2:j}=C.splitScalar(b),$=x,_=x,R=this;for(;P>er||j>er;)P&Le&&($=$.add(R)),j&Le&&(_=_.add(R)),R=R.double(),P>>=Le,j>>=Le;return k&&($=$.negate()),T&&(_=_.negate()),_=new h(r.mul(_.px,C.beta),_.py,_.pz),$.add(_)}multiply(b){const{endo:C,n:A}=e;Yr("scalar",b,Le,A);let x,k;if(C){const{k1neg:P,k1:T,k2neg:j,k2:$}=C.splitScalar(b);let{p:_,f:R}=this.wNAF(T),{p:U,f:X}=this.wNAF($);_=v.constTimeNegate(P,_),U=v.constTimeNegate(j,U),U=new h(r.mul(U.px,C.beta),U.py,U.pz),x=_.add(U),k=R.add(X)}else{const{p:P,f:T}=this.wNAF(b);x=P,k=T}return h.normalizeZ([x,k])[0]}multiplyAndAddUnsafe(b,C,A){const x=h.BASE,k=(T,j)=>j===er||j===Le||!T.equals(x)?T.multiplyUnsafe(j):T.multiply(j),P=k(this,C).add(k(b,A));return P.is0()?void 0:P}toAffine(b){return u(this,b)}isTorsionFree(){const{h:b,isTorsionFree:C}=e;if(b===Le)return!0;if(C)return C(h,this);throw new Error("isTorsionFree() has not been declared for the elliptic curve")}clearCofactor(){const{h:b,clearCofactor:C}=e;return b===Le?this:C?C(h,this):this.multiplyUnsafe(e.h)}toRawBytes(b=!0){return Zi("isCompressed",b),this.assertValidity(),n(h,this,b)}toHex(b=!0){return Zi("isCompressed",b),Gi(this.toRawBytes(b))}}h.BASE=new h(e.Gx,e.Gy,r.ONE),h.ZERO=new h(r.ZERO,r.ONE,r.ZERO);const p=e.nBitLength,v=Rw(h,e.endo?Math.ceil(p/2):p);return{CURVE:e,ProjectivePoint:h,normPrivateKeyToScalar:c,weierstrassEquation:o,isWithinCurveOrder:a}}function Dw(t){const e=mh(t);return ys(e,{hash:"hash",hmac:"function",randomBytes:"function"},{bits2int:"function",bits2int_modN:"function",lowS:"boolean"}),Object.freeze({lowS:!0,...e})}function Hw(t){const e=Dw(t),{Fp:r,n:i}=e,n=r.BYTES+1,s=2*r.BYTES+1;function o(S){return Xe(S,i)}function a(S){return mc(S,i)}const{ProjectivePoint:c,normPrivateKeyToScalar:l,weierstrassEquation:u,isWithinCurveOrder:d}=jw({...e,toBytes(S,f,m){const I=f.toAffine(),N=r.toBytes(I.x),B=cs;return Zi("isCompressed",m),m?B(Uint8Array.from([f.hasEvenY()?2:3]),N):B(Uint8Array.from([4]),N,r.toBytes(I.y))},fromBytes(S){const f=S.length,m=S[0],I=S.subarray(1);if(f===n&&(m===2||m===3)){const N=Kr(I);if(!Zo(N,Le,r.ORDER))throw new Error("Point is not on curve");const B=u(N);let L;try{L=r.sqrt(B)}catch(ue){const fe=ue instanceof Error?": "+ue.message:"";throw new Error("Point is not on curve"+fe)}const ne=(L&Le)===Le;return(m&1)===1!==ne&&(L=r.neg(L)),{x:N,y:L}}else if(f===s&&m===4){const N=r.fromBytes(I.subarray(0,r.BYTES)),B=r.fromBytes(I.subarray(r.BYTES,2*r.BYTES));return{x:N,y:B}}else{const N=n,B=s;throw new Error("invalid Point, expected length of "+N+", or uncompressed "+B+", got "+f)}}}),h=S=>Gi(Yi(S,e.nByteLength));function p(S){const f=i>>Le;return S>f}function v(S){return p(S)?o(-S):S}const g=(S,f,m)=>Kr(S.slice(f,m));class b{constructor(f,m,I){this.r=f,this.s=m,this.recovery=I,this.assertValidity()}static fromCompact(f){const m=e.nByteLength;return f=Pt("compactSignature",f,m*2),new b(g(f,0,m),g(f,m,2*m))}static fromDER(f){const{r:m,s:I}=Qt.toSig(Pt("DER",f));return new b(m,I)}assertValidity(){Yr("r",this.r,Le,i),Yr("s",this.s,Le,i)}addRecoveryBit(f){return new b(this.r,this.s,f)}recoverPublicKey(f){const{r:m,s:I,recovery:N}=this,B=T(Pt("msgHash",f));if(N==null||![0,1,2,3].includes(N))throw new Error("recovery id invalid");const L=N===2||N===3?m+e.n:m;if(L>=r.ORDER)throw new Error("recovery id 2 or 3 invalid");const ne=(N&1)===0?"02":"03",ue=c.fromHex(ne+h(L)),fe=a(L),se=o(-B*fe),xe=o(I*fe),He=c.BASE.multiplyAndAddUnsafe(ue,se,xe);if(!He)throw new Error("point at infinify");return He.assertValidity(),He}hasHighS(){return p(this.s)}normalizeS(){return this.hasHighS()?new b(this.r,o(-this.s),this.recovery):this}toDERRawBytes(){return Ki(this.toDERHex())}toDERHex(){return Qt.hexFromSig({r:this.r,s:this.s})}toCompactRawBytes(){return Ki(this.toCompactHex())}toCompactHex(){return h(this.r)+h(this.s)}}const C={isValidPrivateKey(S){try{return l(S),!0}catch{return!1}},normPrivateKeyToScalar:l,randomPrivateKey:()=>{const S=fh(e.n);return Tw(e.randomBytes(S),e.n)},precompute(S=8,f=c.BASE){return f._setWindowSize(S),f.multiply(BigInt(3)),f}};function A(S,f=!0){return c.fromPrivateKey(S).toRawBytes(f)}function x(S){const f=ri(S),m=typeof S=="string",I=(f||m)&&S.length;return f?I===n||I===s:m?I===2*n||I===2*s:S instanceof c}function k(S,f,m=!0){if(x(S))throw new Error("first arg must be private key");if(!x(f))throw new Error("second arg must be public key");return c.fromHex(f).multiply(l(S)).toRawBytes(m)}const P=e.bits2int||function(S){if(S.length>8192)throw new Error("input is too large");const f=Kr(S),m=S.length*8-e.nBitLength;return m>0?f>>BigInt(m):f},T=e.bits2int_modN||function(S){return o(P(S))},j=Wc(e.nBitLength);function $(S){return Yr("num < 2^"+e.nBitLength,S,er,j),Yi(S,e.nByteLength)}function _(S,f,m=R){if(["recovered","canonical"].some(tt=>tt in m))throw new Error("sign() legacy options not supported");const{hash:I,randomBytes:N}=e;let{lowS:B,prehash:L,extraEntropy:ne}=m;B==null&&(B=!0),S=Pt("msgHash",S),Xl(m),L&&(S=Pt("prehashed msgHash",I(S)));const ue=T(S),fe=l(f),se=[$(fe),$(ue)];if(ne!=null&&ne!==!1){const tt=ne===!0?N(r.BYTES):ne;se.push(Pt("extraEntropy",tt))}const xe=cs(...se),He=ue;function Et(tt){const Ve=P(tt);if(!d(Ve))return;const Re=a(Ve),Ze=c.BASE.multiply(Ve).toAffine(),rt=o(Ze.x);if(rt===er)return;const dt=o(Re*o(He+rt*fe));if(dt===er)return;let tn=(Ze.x===rt?0:2)|Number(Ze.y&Le),tl=dt;return B&&p(dt)&&(tl=v(dt),tn^=1),new b(rt,tl,tn)}return{seed:xe,k2sig:Et}}const R={lowS:e.lowS,prehash:!1},U={lowS:e.lowS,prehash:!1};function X(S,f,m=R){const{seed:I,k2sig:N}=_(S,f,m),B=e;return ih(B.hash.outputLen,B.nByteLength,B.hmac)(I,N)}c.BASE._setWindowSize(8);function pe(S,f,m,I=U){var dt;const N=S;f=Pt("msgHash",f),m=Pt("publicKey",m);const{lowS:B,prehash:L,format:ne}=I;if(Xl(I),"strict"in I)throw new Error("options.strict was renamed to lowS");if(ne!==void 0&&ne!=="compact"&&ne!=="der")throw new Error("format must be compact or der");const ue=typeof N=="string"||ri(N),fe=!ue&&!ne&&typeof N=="object"&&N!==null&&typeof N.r=="bigint"&&typeof N.s=="bigint";if(!ue&&!fe)throw new Error("invalid signature, expected Uint8Array, hex string or Signature instance");let se,xe;try{if(fe&&(se=new b(N.r,N.s)),ue){try{ne!=="compact"&&(se=b.fromDER(N))}catch(tn){if(!(tn instanceof Qt.Err))throw tn}!se&&ne!=="der"&&(se=b.fromCompact(N))}xe=c.fromHex(m)}catch{return!1}if(!se||B&&se.hasHighS())return!1;L&&(f=e.hash(f));const{r:He,s:Et}=se,tt=T(f),Ve=a(Et),Re=o(tt*Ve),Ze=o(He*Ve),rt=(dt=c.BASE.multiplyAndAddUnsafe(xe,Re,Ze))==null?void 0:dt.toAffine();return rt?o(rt.x)===He:!1}return{CURVE:e,getPublicKey:A,getSharedSecret:k,sign:X,verify:pe,ProjectivePoint:c,Signature:b,utils:C}}function Ww(t){return{hash:t,hmac:(e,...r)=>uh(t,e,cf(...r)),randomBytes:lf}}function Fw(t,e){const r=i=>Hw({...t,...Ww(i)});return{...r(e),create:r}}const vh=BigInt("0xfffffffffffffffffffffffffffffffffffffffffffffffffffffffefffffc2f"),eu=BigInt("0xfffffffffffffffffffffffffffffffebaaedce6af48a03bbfd25e8cd0364141"),qw=BigInt(1),vc=BigInt(2),tu=(t,e)=>(t+e/vc)/e;function Vw(t){const e=vh,r=BigInt(3),i=BigInt(6),n=BigInt(11),s=BigInt(22),o=BigInt(23),a=BigInt(44),c=BigInt(88),l=t*t*t%e,u=l*l*t%e,d=ft(u,r,e)*u%e,h=ft(d,r,e)*u%e,p=ft(h,vc,e)*l%e,v=ft(p,n,e)*p%e,g=ft(v,s,e)*v%e,b=ft(g,a,e)*g%e,C=ft(b,c,e)*b%e,A=ft(C,a,e)*g%e,x=ft(A,r,e)*u%e,k=ft(x,o,e)*v%e,P=ft(k,i,e)*l%e,T=ft(P,vc,e);if(!bc.eql(bc.sqr(T),t))throw new Error("Cannot find square root");return T}const bc=hh(vh,void 0,void 0,{sqrt:Vw});Fw({a:BigInt(0),b:BigInt(7),Fp:bc,n:eu,Gx:BigInt("55066263022277343669578718895168534326250603453777594175500187360389116729240"),Gy:BigInt("32670510020758816978083085130507043184471273380659243275938904335757337482424"),h:BigInt(1),lowS:!0,endo:{beta:BigInt("0x7ae96a2b657c07106e64479eac3434e99cf0497512f58995c1396c28719501ee"),splitScalar:t=>{const e=eu,r=BigInt("0x3086d221a7d46bcde86c90e49284eb15"),i=-qw*BigInt("0xe4437ed6010e88286f547fa90abfe4c3"),n=BigInt("0x114ca50f7a8e2f3f657c1108d9d44cfd8"),s=r,o=BigInt("0x100000000000000000000000000000000"),a=tu(s*t,e),c=tu(-i*t,e);let l=Xe(t-a*r-c*n,e),u=Xe(-a*i-c*s,e);const d=l>o,h=u>o;if(d&&(l=e-l),h&&(u=e-u),l>o||u>o)throw new Error("splitScalar: Endomorphism failed, k="+t);return{k1neg:d,k1:l,k2neg:h,k2:u}}}},Gd),BigInt(0);const va={createBalance(t,e){const r={name:t.metadata.name||"",symbol:t.metadata.symbol||"",decimals:t.metadata.decimals||0,value:t.metadata.value||0,price:t.metadata.price||0,iconUrl:t.metadata.iconUrl||""};return{name:r.name,symbol:r.symbol,chainId:e,address:t.address==="native"?void 0:this.convertAddressToCAIP10Address(t.address,e),value:r.value,price:r.price,quantity:{decimals:r.decimals.toString(),numeric:this.convertHexToBalance({hex:t.balance,decimals:r.decimals})},iconUrl:r.iconUrl}},convertHexToBalance({hex:t,decimals:e}){return jd(BigInt(t),e)},convertAddressToCAIP10Address(t,e){return`${e}:${t}`},createCAIP2ChainId(t,e){return`${e}:${parseInt(t,16)}`},getChainIdHexFromCAIP2ChainId(t){const e=t.split(":");if(e.length<2||!e[1])return"0x0";const r=e[1],i=parseInt(r,10);return isNaN(i)?"0x0":`0x${i.toString(16)}`},isWalletGetAssetsResponse(t){return typeof t!="object"||t===null?!1:Object.values(t).every(e=>Array.isArray(e)&&e.every(r=>this.isValidAsset(r)))},isValidAsset(t){return typeof t=="object"&&t!==null&&typeof t.address=="string"&&typeof t.balance=="string"&&(t.type==="ERC20"||t.type==="NATIVE")&&typeof t.metadata=="object"&&t.metadata!==null&&typeof t.metadata.name=="string"&&typeof t.metadata.symbol=="string"&&typeof t.metadata.decimals=="number"&&typeof t.metadata.price=="number"&&typeof t.metadata.iconUrl=="string"}},ru={async getMyTokensWithBalance(t){const e=Y.state.address,r=w.state.activeCaipNetwork;if(!e||!r)return[];if(r.chainNamespace==="eip155"){const n=await this.getEIP155Balances(e,r);if(n)return this.filterLowQualityTokens(n)}const i=await ie.getBalance(e,r.caipNetworkId,t);return this.filterLowQualityTokens(i.balances)},async getEIP155Balances(t,e){var r,i,n;try{const s=va.getChainIdHexFromCAIP2ChainId(e.caipNetworkId);if(!((n=(i=(r=await K.getCapabilities(t))==null?void 0:r[s])==null?void 0:i.assetDiscovery)!=null&&n.supported))return null;const o=await K.walletGetAssets({account:t,chainFilter:[s]});return va.isWalletGetAssetsResponse(o)?(o[s]||[]).map(a=>va.createBalance(a,e.caipNetworkId)):null}catch{return null}},filterLowQualityTokens(t){return t.filter(e=>e.quantity.decimals!=="0")},mapBalancesToSwapTokens(t){return(t==null?void 0:t.map(e=>({...e,address:e!=null&&e.address?e.address:w.getActiveNetworkTokenAddress(),decimals:parseInt(e.quantity.decimals,10),logoUri:e.iconUrl,eip2612:!1})))||[]}},de=Ae({tokenBalances:[],loading:!1}),iu={state:de,subscribe(t){return De(de,()=>t(de))},subscribeKey(t,e){return qe(de,t,e)},setToken(t){t&&(de.token=Xr(t))},setTokenAmount(t){de.sendTokenAmount=t},setReceiverAddress(t){de.receiverAddress=t},setReceiverProfileImageUrl(t){de.receiverProfileImageUrl=t},setReceiverProfileName(t){de.receiverProfileName=t},setGasPrice(t){de.gasPrice=t},setGasPriceInUsd(t){de.gasPriceInUSD=t},setNetworkBalanceInUsd(t){de.networkBalanceInUSD=t},setLoading(t){de.loading=t},sendToken(){var t;switch((t=w.state.activeCaipNetwork)==null?void 0:t.chainNamespace){case"eip155":this.sendEvmToken();return;case"solana":this.sendSolanaToken();return;default:throw new Error("Unsupported chain")}},sendEvmToken(){var r,i,n,s,o,a;const t=w.state.activeChain,e=(r=Y.state.preferredAccountTypes)==null?void 0:r[t];(i=this.state.token)!=null&&i.address&&this.state.sendTokenAmount&&this.state.receiverAddress?(le.sendEvent({type:"track",event:"SEND_INITIATED",properties:{isSmartAccount:e===hr.ACCOUNT_TYPES.SMART_ACCOUNT,token:this.state.token.address,amount:this.state.sendTokenAmount,network:((n=w.state.activeCaipNetwork)==null?void 0:n.caipNetworkId)||""}}),this.sendERC20Token({receiverAddress:this.state.receiverAddress,tokenAddress:this.state.token.address,sendTokenAmount:this.state.sendTokenAmount,decimals:this.state.token.quantity.decimals})):this.state.receiverAddress&&this.state.sendTokenAmount&&this.state.gasPrice&&((s=this.state.token)!=null&&s.quantity.decimals)&&(le.sendEvent({type:"track",event:"SEND_INITIATED",properties:{isSmartAccount:e===hr.ACCOUNT_TYPES.SMART_ACCOUNT,token:(o=this.state.token)==null?void 0:o.symbol,amount:this.state.sendTokenAmount,network:((a=w.state.activeCaipNetwork)==null?void 0:a.caipNetworkId)||""}}),this.sendNativeToken({receiverAddress:this.state.receiverAddress,sendTokenAmount:this.state.sendTokenAmount,gasPrice:this.state.gasPrice,decimals:this.state.token.quantity.decimals}))},async fetchTokenBalance(t){var s,o;de.loading=!0;const e=(s=w.state.activeCaipNetwork)==null?void 0:s.caipNetworkId,r=(o=w.state.activeCaipNetwork)==null?void 0:o.chainNamespace,i=w.state.activeCaipAddress,n=i?M.getPlainAddress(i):void 0;if(de.lastRetry&&!M.isAllowedRetry(de.lastRetry,30*Oe.ONE_SEC_MS))return de.loading=!1,[];try{if(n&&e&&r){const a=await ru.getMyTokensWithBalance();return de.tokenBalances=a,de.lastRetry=void 0,a}}catch(a){de.lastRetry=Date.now(),t==null||t(a),Ee.showError("Token Balance Unavailable")}finally{de.loading=!1}return[]},fetchNetworkBalance(){if(de.tokenBalances.length===0)return;const t=ru.mapBalancesToSwapTokens(de.tokenBalances);if(!t)return;const e=t.find(r=>r.address===w.getActiveNetworkTokenAddress());e&&(de.networkBalanceInUSD=e?_s.multiply(e.quantity.numeric,e.price).toString():"0")},isInsufficientNetworkTokenForGas(t,e){const r=e||"0";return _s.bigNumber(t).eq(0)?!0:_s.bigNumber(_s.bigNumber(r)).gt(t)},hasInsufficientGasFunds(){var r;const t=w.state.activeChain;let e=!0;return((r=Y.state.preferredAccountTypes)==null?void 0:r[t])===hr.ACCOUNT_TYPES.SMART_ACCOUNT?e=!1:de.networkBalanceInUSD&&(e=this.isInsufficientNetworkTokenForGas(de.networkBalanceInUSD,de.gasPriceInUSD)),e},async sendNativeToken(t){var o,a,c,l,u,d;const e=w.state.activeChain;H.pushTransactionStack({view:"Account",goBack:!1});const r=t.receiverAddress,i=Y.state.address,n=K.parseUnits(t.sendTokenAmount.toString(),Number(t.decimals)),s="0x";try{await K.sendTransaction({chainNamespace:"eip155",to:r,address:i,data:s,value:n??BigInt(0),gasPrice:t.gasPrice}),Ee.showSuccess("Transaction started"),le.sendEvent({type:"track",event:"SEND_SUCCESS",properties:{isSmartAccount:((o=Y.state.preferredAccountTypes)==null?void 0:o[e])===hr.ACCOUNT_TYPES.SMART_ACCOUNT,token:((a=this.state.token)==null?void 0:a.symbol)||"",amount:t.sendTokenAmount,network:((c=w.state.activeCaipNetwork)==null?void 0:c.caipNetworkId)||""}}),this.resetSend()}catch(h){console.error("SendController:sendERC20Token - failed to send native token",h);const p=h instanceof Error?h.message:"Unknown error";le.sendEvent({type:"track",event:"SEND_ERROR",properties:{message:p,isSmartAccount:((l=Y.state.preferredAccountTypes)==null?void 0:l[e])===hr.ACCOUNT_TYPES.SMART_ACCOUNT,token:((u=this.state.token)==null?void 0:u.symbol)||"",amount:t.sendTokenAmount,network:((d=w.state.activeCaipNetwork)==null?void 0:d.caipNetworkId)||""}}),Ee.showError("Something went wrong")}},async sendERC20Token(t){var r,i,n;H.pushTransactionStack({view:"Account",goBack:!1});const e=K.parseUnits(t.sendTokenAmount.toString(),Number(t.decimals));try{if(Y.state.address&&t.sendTokenAmount&&t.receiverAddress&&t.tokenAddress){const s=M.getPlainAddress(t.tokenAddress);await K.writeContract({fromAddress:Y.state.address,tokenAddress:s,args:[t.receiverAddress,e??BigInt(0)],method:"transfer",abi:bp.getERC20Abi(s),chainNamespace:"eip155"}),Ee.showSuccess("Transaction started"),this.resetSend()}}catch(s){console.error("SendController:sendERC20Token - failed to send erc20 token",s);const o=s instanceof Error?s.message:"Unknown error";le.sendEvent({type:"track",event:"SEND_ERROR",properties:{message:o,isSmartAccount:((r=Y.state.preferredAccountTypes)==null?void 0:r.eip155)===hr.ACCOUNT_TYPES.SMART_ACCOUNT,token:((i=this.state.token)==null?void 0:i.symbol)||"",amount:t.sendTokenAmount,network:((n=w.state.activeCaipNetwork)==null?void 0:n.caipNetworkId)||""}}),Ee.showError("Something went wrong")}},sendSolanaToken(){if(!this.state.sendTokenAmount||!this.state.receiverAddress){Ee.showError("Please enter a valid amount and receiver address");return}H.pushTransactionStack({view:"Account",goBack:!1}),K.sendTransaction({chainNamespace:"solana",to:this.state.receiverAddress,value:this.state.sendTokenAmount}).then(()=>{this.resetSend(),Y.fetchTokenBalance()}).catch(t=>{Ee.showError("Failed to send transaction. Please try again."),console.error("SendController:sendToken - failed to send solana transaction",t)})},resetSend(){de.token=void 0,de.sendTokenAmount=void 0,de.receiverAddress=void 0,de.receiverProfileImageUrl=void 0,de.receiverProfileName=void 0,de.loading=!1,de.tokenBalances=[]}},ba={currentTab:0,tokenBalance:[],smartAccountDeployed:!1,addressLabels:new Map,allAccounts:[],user:void 0},Ms={caipNetwork:void 0,supportsAllNetworks:!0,smartAccountEnabledNetworks:[]},D=Ae({chains:kp(),activeCaipAddress:void 0,activeChain:void 0,activeCaipNetwork:void 0,noAdapters:!1,universalAdapter:{networkControllerClient:void 0,connectionControllerClient:void 0},isSwitchingNamespace:!1}),w={state:D,subscribe(t){return De(D,()=>{t(D)})},subscribeKey(t,e){return qe(D,t,e)},subscribeChainProp(t,e,r){let i;return De(D.chains,()=>{var s;const n=r||D.activeChain;if(n){const o=(s=D.chains.get(n))==null?void 0:s[t];i!==o&&(i=o,e(o))}})},initialize(t,e,r){const{chainId:i,namespace:n}=G.getActiveNetworkProps(),s=e==null?void 0:e.find(c=>c.id.toString()===(i==null?void 0:i.toString())),o=t.find(c=>(c==null?void 0:c.namespace)===n)||(t==null?void 0:t[0]),a=new Set([...(e==null?void 0:e.map(c=>c.chainNamespace))??[]]);((t==null?void 0:t.length)===0||!o)&&(D.noAdapters=!0),D.noAdapters||(D.activeChain=o==null?void 0:o.namespace,D.activeCaipNetwork=s,this.setChainNetworkData(o==null?void 0:o.namespace,{caipNetwork:s}),D.activeChain&&tr.set({activeChain:o==null?void 0:o.namespace})),a.forEach(c=>{const l=e==null?void 0:e.filter(u=>u.chainNamespace===c);w.state.chains.set(c,{namespace:c,networkState:Ae({...Ms,caipNetwork:l==null?void 0:l[0]}),accountState:Ae(ba),caipNetworks:l??[],...r}),this.setRequestedCaipNetworks(l??[],c)})},removeAdapter(t){var e,r;if(D.activeChain===t){const i=Array.from(D.chains.entries()).find(([n])=>n!==t);if(i){const n=(r=(e=i[1])==null?void 0:e.caipNetworks)==null?void 0:r[0];n&&this.setActiveCaipNetwork(n)}}D.chains.delete(t)},addAdapter(t,{networkControllerClient:e,connectionControllerClient:r},i){D.chains.set(t.namespace,{namespace:t.namespace,networkState:{...Ms,caipNetwork:i[0]},accountState:ba,caipNetworks:i,connectionControllerClient:r,networkControllerClient:e}),this.setRequestedCaipNetworks((i==null?void 0:i.filter(n=>n.chainNamespace===t.namespace))??[],t.namespace)},addNetwork(t){var r;const e=D.chains.get(t.chainNamespace);if(e){const i=[...e.caipNetworks||[]];(r=e.caipNetworks)!=null&&r.find(n=>n.id===t.id)||i.push(t),D.chains.set(t.chainNamespace,{...e,caipNetworks:i}),this.setRequestedCaipNetworks(i,t.chainNamespace)}},removeNetwork(t,e){var i,n,s;const r=D.chains.get(t);if(r){const o=((i=D.activeCaipNetwork)==null?void 0:i.id)===e,a=[...((n=r.caipNetworks)==null?void 0:n.filter(c=>c.id!==e))||[]];o&&((s=r==null?void 0:r.caipNetworks)!=null&&s[0])&&this.setActiveCaipNetwork(r.caipNetworks[0]),D.chains.set(t,{...r,caipNetworks:a}),this.setRequestedCaipNetworks(a||[],t)}},setAdapterNetworkState(t,e){const r=D.chains.get(t);r&&(r.networkState={...r.networkState||Ms,...e},D.chains.set(t,r))},setChainAccountData(t,e,r=!0){if(!t)throw new Error("Chain is required to update chain account data");const i=D.chains.get(t);if(i){const n={...i.accountState||ba,...e};D.chains.set(t,{...i,accountState:n}),(D.chains.size===1||D.activeChain===t)&&(e.caipAddress&&(D.activeCaipAddress=e.caipAddress),Y.replaceState(n))}},setChainNetworkData(t,e){if(!t)return;const r=D.chains.get(t);if(r){const i={...r.networkState||Ms,...e};D.chains.set(t,{...r,networkState:i})}},setAccountProp(t,e,r,i=!0){this.setChainAccountData(r,{[t]:e},i),t==="status"&&e==="disconnected"&&r&&F.removeConnectorId(r)},setActiveNamespace(t){var i,n;D.activeChain=t;const e=t?D.chains.get(t):void 0,r=(i=e==null?void 0:e.networkState)==null?void 0:i.caipNetwork;r!=null&&r.id&&t&&(D.activeCaipAddress=(n=e==null?void 0:e.accountState)==null?void 0:n.caipAddress,D.activeCaipNetwork=r,this.setChainNetworkData(t,{caipNetwork:r}),G.setActiveCaipNetworkId(r==null?void 0:r.caipNetworkId),tr.set({activeChain:t,selectedNetworkId:r==null?void 0:r.caipNetworkId}))},setActiveCaipNetwork(t){var r,i,n;if(!t)return;D.activeChain!==t.chainNamespace&&this.setIsSwitchingNamespace(!0);const e=D.chains.get(t.chainNamespace);D.activeChain=t.chainNamespace,D.activeCaipNetwork=t,this.setChainNetworkData(t.chainNamespace,{caipNetwork:t}),(r=e==null?void 0:e.accountState)!=null&&r.address?D.activeCaipAddress=`${t.chainNamespace}:${t.id}:${(i=e==null?void 0:e.accountState)==null?void 0:i.address}`:D.activeCaipAddress=void 0,this.setAccountProp("caipAddress",D.activeCaipAddress,t.chainNamespace),e&&Y.replaceState(e.accountState),iu.resetSend(),tr.set({activeChain:D.activeChain,selectedNetworkId:(n=D.activeCaipNetwork)==null?void 0:n.caipNetworkId}),G.setActiveCaipNetworkId(t.caipNetworkId),!this.checkIfSupportedNetwork(t.chainNamespace)&&O.state.enableNetworkSwitch&&!O.state.allowUnsupportedChain&&!K.state.wcBasic&&this.showUnsupportedChainUI()},addCaipNetwork(t){var r;if(!t)return;const e=D.chains.get(t.chainNamespace);e&&((r=e==null?void 0:e.caipNetworks)==null||r.push(t))},async switchActiveNamespace(t){var n;if(!t)return;const e=t!==w.state.activeChain,r=(n=w.getNetworkData(t))==null?void 0:n.caipNetwork,i=w.getCaipNetworkByNamespace(t,r==null?void 0:r.id);e&&i&&await w.switchActiveNetwork(i)},async switchActiveNetwork(t){var r,i;!((i=(r=w.state.chains.get(w.state.activeChain))==null?void 0:r.caipNetworks)!=null&&i.some(n=>{var s;return n.id===((s=D.activeCaipNetwork)==null?void 0:s.id)}))&&H.goBack();const e=this.getNetworkControllerClient(t.chainNamespace);e&&(await e.switchCaipNetwork(t),le.sendEvent({type:"track",event:"SWITCH_NETWORK",properties:{network:t.caipNetworkId}}))},getNetworkControllerClient(t){const e=t||D.activeChain,r=D.chains.get(e);if(!r)throw new Error("Chain adapter not found");if(!r.networkControllerClient)throw new Error("NetworkController client not set");return r.networkControllerClient},getConnectionControllerClient(t){const e=t||D.activeChain;if(!e)throw new Error("Chain is required to get connection controller client");const r=D.chains.get(e);if(!(r!=null&&r.connectionControllerClient))throw new Error("ConnectionController client not set");return r.connectionControllerClient},getAccountProp(t,e){var n;let r=D.activeChain;if(e&&(r=e),!r)return;const i=(n=D.chains.get(r))==null?void 0:n.accountState;if(i)return i[t]},getNetworkProp(t,e){var i;const r=(i=D.chains.get(e))==null?void 0:i.networkState;if(r)return r[t]},getRequestedCaipNetworks(t){const e=D.chains.get(t),{approvedCaipNetworkIds:r=[],requestedCaipNetworks:i=[]}=(e==null?void 0:e.networkState)||{};return M.sortRequestedNetworks(r,i)},getAllRequestedCaipNetworks(){const t=[];return D.chains.forEach(e=>{const r=this.getRequestedCaipNetworks(e.namespace);t.push(...r)}),t},setRequestedCaipNetworks(t,e){this.setAdapterNetworkState(e,{requestedCaipNetworks:t})},getAllApprovedCaipNetworkIds(){const t=[];return D.chains.forEach(e=>{const r=this.getApprovedCaipNetworkIds(e.namespace);t.push(...r)}),t},getActiveCaipNetwork(){return D.activeCaipNetwork},getActiveCaipAddress(){return D.activeCaipAddress},getApprovedCaipNetworkIds(t){var e,r;return((r=(e=D.chains.get(t))==null?void 0:e.networkState)==null?void 0:r.approvedCaipNetworkIds)||[]},async setApprovedCaipNetworksData(t){var r;const e=await((r=this.getNetworkControllerClient())==null?void 0:r.getApprovedCaipNetworksData());this.setAdapterNetworkState(t,{approvedCaipNetworkIds:e==null?void 0:e.approvedCaipNetworkIds,supportsAllNetworks:e==null?void 0:e.supportsAllNetworks})},checkIfSupportedNetwork(t,e){const r=e||D.activeCaipNetwork,i=this.getRequestedCaipNetworks(t);return i.length?i==null?void 0:i.some(n=>n.id===(r==null?void 0:r.id)):!0},checkIfSupportedChainId(t){var e;return D.activeChain?(e=this.getRequestedCaipNetworks(D.activeChain))==null?void 0:e.some(r=>r.id===t):!0},setSmartAccountEnabledNetworks(t,e){this.setAdapterNetworkState(e,{smartAccountEnabledNetworks:t})},checkIfSmartAccountEnabled(){var r,i;const t=xd.caipNetworkIdToNumber((r=D.activeCaipNetwork)==null?void 0:r.caipNetworkId),e=D.activeChain;return!e||!t?!1:!!((i=this.getNetworkProp("smartAccountEnabledNetworks",e))!=null&&i.includes(Number(t)))},getActiveNetworkTokenAddress(){var i,n;const t=((i=D.activeCaipNetwork)==null?void 0:i.chainNamespace)||"eip155",e=((n=D.activeCaipNetwork)==null?void 0:n.id)||1,r=Oe.NATIVE_TOKEN_ADDRESS[t];return`${t}:${e}:${r}`},showUnsupportedChainUI(){he.open({view:"UnsupportedChain"})},checkIfNamesSupported(){const t=D.activeCaipNetwork;return!!(t!=null&&t.chainNamespace&&Oe.NAMES_SUPPORTED_CHAIN_NAMESPACES.includes(t.chainNamespace))},resetNetwork(t){this.setAdapterNetworkState(t,{approvedCaipNetworkIds:void 0,supportsAllNetworks:!0,smartAccountEnabledNetworks:[]})},resetAccount(t){const e=t;if(!e)throw new Error("Chain is required to set account prop");D.activeCaipAddress=void 0,this.setChainAccountData(e,{smartAccountDeployed:!1,currentTab:0,caipAddress:void 0,address:void 0,balance:void 0,balanceSymbol:void 0,profileName:void 0,profileImage:void 0,addressExplorerUrl:void 0,tokenBalance:[],connectedWalletInfo:void 0,preferredAccountTypes:void 0,socialProvider:void 0,socialWindow:void 0,farcasterUrl:void 0,allAccounts:[],user:void 0,status:"disconnected"}),F.removeConnectorId(e)},async disconnect(t){const e=Up(t);try{iu.resetSend();const r=await Promise.allSettled(e.map(async([n,s])=>{var o;try{const{caipAddress:a}=this.getAccountData(n)||{};a&&((o=s.connectionControllerClient)!=null&&o.disconnect)&&await s.connectionControllerClient.disconnect(n),this.resetAccount(n),this.resetNetwork(n)}catch(a){throw new Error(`Failed to disconnect chain ${n}: ${a.message}`)}}));K.resetWcConnection();const i=r.filter(n=>n.status==="rejected");if(i.length>0)throw new Error(i.map(n=>n.reason.message).join(", "));G.deleteConnectedSocialProvider(),t?F.removeConnectorId(t):F.resetConnectorIds(),le.sendEvent({type:"track",event:"DISCONNECT_SUCCESS",properties:{namespace:t||"all"}})}catch(r){console.error(r.message||"Failed to disconnect chains"),le.sendEvent({type:"track",event:"DISCONNECT_ERROR",properties:{message:r.message||"Failed to disconnect chains"}})}},setIsSwitchingNamespace(t){D.isSwitchingNamespace=t},getFirstCaipNetworkSupportsAuthConnector(){var r,i;const t=[];let e;if(D.chains.forEach(n=>{Q.AUTH_CONNECTOR_SUPPORTED_CHAINS.find(s=>s===n.namespace)&&n.namespace&&t.push(n.namespace)}),t.length>0){const n=t[0];return e=n?(i=(r=D.chains.get(n))==null?void 0:r.caipNetworks)==null?void 0:i[0]:void 0,e}},getAccountData(t){var e;return t?(e=w.state.chains.get(t))==null?void 0:e.accountState:Y.state},getNetworkData(t){var r;const e=t||D.activeChain;if(e)return(r=w.state.chains.get(e))==null?void 0:r.networkState},getCaipNetworkByNamespace(t,e){var n,s,o;if(!t)return;const r=w.state.chains.get(t);return((n=r==null?void 0:r.caipNetworks)==null?void 0:n.find(a=>a.id===e))||((s=r==null?void 0:r.networkState)==null?void 0:s.caipNetwork)||((o=r==null?void 0:r.caipNetworks)==null?void 0:o[0])},getRequestedCaipNetworkIds(){const t=F.state.filterByNamespace;return(t?[D.chains.get(t)]:Array.from(D.chains.values())).flatMap(e=>(e==null?void 0:e.caipNetworks)||[]).map(e=>e.caipNetworkId)},getCaipNetworks(t){return t?w.getRequestedCaipNetworks(t):w.getAllRequestedCaipNetworks()}},Zw={purchaseCurrencies:[{id:"2b92315d-eab7-5bef-84fa-089a131333f5",name:"USD Coin",symbol:"USDC",networks:[{name:"ethereum-mainnet",display_name:"Ethereum",chain_id:"1",contract_address:"0xA0b86991c6218b36c1d19D4a2e9Eb0cE3606eB48"},{name:"polygon-mainnet",display_name:"Polygon",chain_id:"137",contract_address:"0x2791Bca1f2de4661ED88A30C99A7a9449Aa84174"}]},{id:"2b92315d-eab7-5bef-84fa-089a131333f5",name:"Ether",symbol:"ETH",networks:[{name:"ethereum-mainnet",display_name:"Ethereum",chain_id:"1",contract_address:"0xA0b86991c6218b36c1d19D4a2e9Eb0cE3606eB48"},{name:"polygon-mainnet",display_name:"Polygon",chain_id:"137",contract_address:"0x2791Bca1f2de4661ED88A30C99A7a9449Aa84174"}]}],paymentCurrencies:[{id:"USD",payment_method_limits:[{id:"card",min:"10.00",max:"7500.00"},{id:"ach_bank_account",min:"10.00",max:"25000.00"}]},{id:"EUR",payment_method_limits:[{id:"card",min:"10.00",max:"7500.00"},{id:"ach_bank_account",min:"10.00",max:"25000.00"}]}]},bh=M.getBlockchainApiUrl(),st=Ae({clientId:null,api:new zo({baseUrl:bh,clientId:null}),supportedChains:{http:[],ws:[]}}),ie={state:st,async get(t){const{st:e,sv:r}=ie.getSdkProperties(),i=O.state.projectId,n={...t.params||{},st:e,sv:r,projectId:i};return st.api.get({...t,params:n})},getSdkProperties(){const{sdkType:t,sdkVersion:e}=O.state;return{st:t||"unknown",sv:e||"unknown"}},async isNetworkSupported(t){if(!t)return!1;try{st.supportedChains.http.length||await ie.getSupportedNetworks()}catch{return!1}return st.supportedChains.http.includes(t)},async getSupportedNetworks(){const t=await ie.get({path:"v1/supported-chains"});return st.supportedChains=t,t},async fetchIdentity({address:t,caipNetworkId:e}){if(!await ie.isNetworkSupported(e))return{avatar:"",name:""};const r=G.getIdentityFromCacheForAddress(t);if(r)return r;const i=await ie.get({path:`/v1/identity/${t}`,params:{sender:w.state.activeCaipAddress?M.getPlainAddress(w.state.activeCaipAddress):void 0}});return G.updateIdentityCache({address:t,identity:i,timestamp:Date.now()}),i},async fetchTransactions({account:t,cursor:e,onramp:r,signal:i,cache:n,chainId:s}){var o;return await ie.isNetworkSupported((o=w.state.activeCaipNetwork)==null?void 0:o.caipNetworkId)?ie.get({path:`/v1/account/${t}/history`,params:{cursor:e,onramp:r,chainId:s},signal:i,cache:n}):{data:[],next:void 0}},async fetchSwapQuote({amount:t,userAddress:e,from:r,to:i,gasPrice:n}){var s;return await ie.isNetworkSupported((s=w.state.activeCaipNetwork)==null?void 0:s.caipNetworkId)?ie.get({path:"/v1/convert/quotes",headers:{"Content-Type":"application/json"},params:{amount:t,userAddress:e,from:r,to:i,gasPrice:n}}):{quotes:[]}},async fetchSwapTokens({chainId:t}){var e;return await ie.isNetworkSupported((e=w.state.activeCaipNetwork)==null?void 0:e.caipNetworkId)?ie.get({path:"/v1/convert/tokens",params:{chainId:t}}):{tokens:[]}},async fetchTokenPrice({addresses:t}){var e;return await ie.isNetworkSupported((e=w.state.activeCaipNetwork)==null?void 0:e.caipNetworkId)?st.api.post({path:"/v1/fungible/price",body:{currency:"usd",addresses:t,projectId:O.state.projectId},headers:{"Content-Type":"application/json"}}):{fungibles:[]}},async fetchSwapAllowance({tokenAddress:t,userAddress:e}){var r;return await ie.isNetworkSupported((r=w.state.activeCaipNetwork)==null?void 0:r.caipNetworkId)?ie.get({path:"/v1/convert/allowance",params:{tokenAddress:t,userAddress:e},headers:{"Content-Type":"application/json"}}):{allowance:"0"}},async fetchGasPrice({chainId:t}){var i;const{st:e,sv:r}=ie.getSdkProperties();if(!await ie.isNetworkSupported((i=w.state.activeCaipNetwork)==null?void 0:i.caipNetworkId))throw new Error("Network not supported for Gas Price");return ie.get({path:"/v1/convert/gas-price",headers:{"Content-Type":"application/json"},params:{chainId:t,st:e,sv:r}})},async generateSwapCalldata({amount:t,from:e,to:r,userAddress:i,disableEstimate:n}){var s;if(!await ie.isNetworkSupported((s=w.state.activeCaipNetwork)==null?void 0:s.caipNetworkId))throw new Error("Network not supported for Swaps");return st.api.post({path:"/v1/convert/build-transaction",headers:{"Content-Type":"application/json"},body:{amount:t,eip155:{slippage:Oe.CONVERT_SLIPPAGE_TOLERANCE},projectId:O.state.projectId,from:e,to:r,userAddress:i,disableEstimate:n}})},async generateApproveCalldata({from:t,to:e,userAddress:r}){var s;const{st:i,sv:n}=ie.getSdkProperties();if(!await ie.isNetworkSupported((s=w.state.activeCaipNetwork)==null?void 0:s.caipNetworkId))throw new Error("Network not supported for Swaps");return ie.get({path:"/v1/convert/build-approve",headers:{"Content-Type":"application/json"},params:{userAddress:r,from:t,to:e,st:i,sv:n}})},async getBalance(t,e,r){var c;const{st:i,sv:n}=ie.getSdkProperties();if(!await ie.isNetworkSupported((c=w.state.activeCaipNetwork)==null?void 0:c.caipNetworkId))return Ee.showError("Token Balance Unavailable"),{balances:[]};const s=`${e}:${t}`,o=G.getBalanceCacheForCaipAddress(s);if(o)return o;const a=await ie.get({path:`/v1/account/${t}/balance`,params:{currency:"usd",chainId:e,forceUpdate:r,st:i,sv:n}});return G.updateBalanceCache({caipAddress:s,balance:a,timestamp:Date.now()}),a},async lookupEnsName(t){var e;return await ie.isNetworkSupported((e=w.state.activeCaipNetwork)==null?void 0:e.caipNetworkId)?ie.get({path:`/v1/profile/account/${t}`,params:{apiVersion:"2"}}):{addresses:{},attributes:[]}},async reverseLookupEnsName({address:t}){var e;return await ie.isNetworkSupported((e=w.state.activeCaipNetwork)==null?void 0:e.caipNetworkId)?ie.get({path:`/v1/profile/reverse/${t}`,params:{sender:Y.state.address,apiVersion:"2"}}):[]},async getEnsNameSuggestions(t){var e;return await ie.isNetworkSupported((e=w.state.activeCaipNetwork)==null?void 0:e.caipNetworkId)?ie.get({path:`/v1/profile/suggestions/${t}`,params:{zone:"reown.id"}}):{suggestions:[]}},async registerEnsName({coinType:t,address:e,message:r,signature:i}){var n;return await ie.isNetworkSupported((n=w.state.activeCaipNetwork)==null?void 0:n.caipNetworkId)?st.api.post({path:"/v1/profile/account",body:{coin_type:t,address:e,message:r,signature:i},headers:{"Content-Type":"application/json"}}):{success:!1}},async generateOnRampURL({destinationWallets:t,partnerUserId:e,defaultNetwork:r,purchaseAmount:i,paymentAmount:n}){var s;return await ie.isNetworkSupported((s=w.state.activeCaipNetwork)==null?void 0:s.caipNetworkId)?(await st.api.post({path:"/v1/generators/onrampurl",params:{projectId:O.state.projectId},body:{destinationWallets:t,defaultNetwork:r,partnerUserId:e,defaultExperience:"buy",presetCryptoAmount:i,presetFiatAmount:n}})).url:""},async getOnrampOptions(){var t;if(!await ie.isNetworkSupported((t=w.state.activeCaipNetwork)==null?void 0:t.caipNetworkId))return{paymentCurrencies:[],purchaseCurrencies:[]};try{return await ie.get({path:"/v1/onramp/options"})}catch{return Zw}},async getOnrampQuote({purchaseCurrency:t,paymentCurrency:e,amount:r,network:i}){var n;try{return await ie.isNetworkSupported((n=w.state.activeCaipNetwork)==null?void 0:n.caipNetworkId)?await st.api.post({path:"/v1/onramp/quote",params:{projectId:O.state.projectId},body:{purchaseCurrency:t,paymentCurrency:e,amount:r,network:i}}):null}catch{return{coinbaseFee:{amount:r,currency:e.id},networkFee:{amount:r,currency:e.id},paymentSubtotal:{amount:r,currency:e.id},paymentTotal:{amount:r,currency:e.id},purchaseAmount:{amount:r,currency:e.id},quoteId:"mocked-quote-id"}}},async getSmartSessions(t){var e;return await ie.isNetworkSupported((e=w.state.activeCaipNetwork)==null?void 0:e.caipNetworkId)?ie.get({path:`/v1/sessions/${t}`}):[]},async revokeSmartSession(t,e,r){var i;return await ie.isNetworkSupported((i=w.state.activeCaipNetwork)==null?void 0:i.caipNetworkId)?st.api.post({path:`/v1/sessions/${t}/revoke`,params:{projectId:O.state.projectId},body:{pci:e,signature:r}}):{success:!1}},setClientId(t){st.clientId=t,st.api=new zo({baseUrl:bh,clientId:t})}},gt=Ae({currentTab:0,tokenBalance:[],smartAccountDeployed:!1,addressLabels:new Map,allAccounts:[]}),Y={state:gt,replaceState(t){t&&Object.assign(gt,Xr(t))},subscribe(t){return w.subscribeChainProp("accountState",e=>{if(e)return t(e)})},subscribeKey(t,e,r){let i;return w.subscribeChainProp("accountState",n=>{if(n){const s=n[t];i!==s&&(i=s,e(s))}},r)},setStatus(t,e){w.setAccountProp("status",t,e)},getCaipAddress(t){return w.getAccountProp("caipAddress",t)},setCaipAddress(t,e){const r=t?M.getPlainAddress(t):void 0;e===w.state.activeChain&&(w.state.activeCaipAddress=t),w.setAccountProp("caipAddress",t,e),w.setAccountProp("address",r,e)},setBalance(t,e,r){w.setAccountProp("balance",t,r),w.setAccountProp("balanceSymbol",e,r)},setProfileName(t,e){w.setAccountProp("profileName",t,e)},setProfileImage(t,e){w.setAccountProp("profileImage",t,e)},setUser(t,e){w.setAccountProp("user",t,e)},setAddressExplorerUrl(t,e){w.setAccountProp("addressExplorerUrl",t,e)},setSmartAccountDeployed(t,e){w.setAccountProp("smartAccountDeployed",t,e)},setCurrentTab(t){w.setAccountProp("currentTab",t,w.state.activeChain)},setTokenBalance(t,e){t&&w.setAccountProp("tokenBalance",t,e)},setShouldUpdateToAddress(t,e){w.setAccountProp("shouldUpdateToAddress",t,e)},setAllAccounts(t,e){w.setAccountProp("allAccounts",t,e)},addAddressLabel(t,e,r){const i=w.getAccountProp("addressLabels",r)||new Map;i.set(t,e),w.setAccountProp("addressLabels",i,r)},removeAddressLabel(t,e){const r=w.getAccountProp("addressLabels",e)||new Map;r.delete(t),w.setAccountProp("addressLabels",r,e)},setConnectedWalletInfo(t,e){w.setAccountProp("connectedWalletInfo",t,e,!1)},setPreferredAccountType(t,e){w.setAccountProp("preferredAccountTypes",{...gt.preferredAccountTypes,[e]:t},e)},setPreferredAccountTypes(t){gt.preferredAccountTypes=t},setSocialProvider(t,e){t&&w.setAccountProp("socialProvider",t,e)},setSocialWindow(t,e){w.setAccountProp("socialWindow",t?Xr(t):void 0,e)},setFarcasterUrl(t,e){w.setAccountProp("farcasterUrl",t,e)},async fetchTokenBalance(t){var s,o;gt.balanceLoading=!0;const e=(s=w.state.activeCaipNetwork)==null?void 0:s.caipNetworkId,r=(o=w.state.activeCaipNetwork)==null?void 0:o.chainNamespace,i=w.state.activeCaipAddress,n=i?M.getPlainAddress(i):void 0;if(gt.lastRetry&&!M.isAllowedRetry(gt.lastRetry,30*Oe.ONE_SEC_MS))return gt.balanceLoading=!1,[];try{if(n&&e&&r){const a=(await ie.getBalance(n,e)).balances.filter(c=>c.quantity.decimals!=="0");return this.setTokenBalance(a,r),gt.lastRetry=void 0,gt.balanceLoading=!1,a}}catch(a){gt.lastRetry=Date.now(),t==null||t(a),Ee.showError("Token Balance Unavailable")}finally{gt.balanceLoading=!1}return[]},resetAccount(t){w.resetAccount(t)}},Ge=Ae({loading:!1,loadingNamespaceMap:new Map,open:!1,shake:!1,namespace:void 0}),he={state:Ge,subscribe(t){return De(Ge,()=>t(Ge))},subscribeKey(t,e){return qe(Ge,t,e)},async open(t){var i;const e=Y.state.status==="connected";K.state.wcBasic?W.prefetch({fetchNetworkImages:!1,fetchConnectorImages:!1}):await W.prefetch({fetchConnectorImages:!e,fetchFeaturedWallets:!e,fetchRecommendedWallets:!e}),t!=null&&t.namespace?(await w.switchActiveNamespace(t.namespace),he.setLoading(!0,t.namespace)):he.setLoading(!0),F.setFilterByNamespace(t==null?void 0:t.namespace);const r=(i=w.getAccountData(t==null?void 0:t.namespace))==null?void 0:i.caipAddress;w.state.noAdapters&&!r?M.isMobile()?H.reset("AllWallets"):H.reset("ConnectingWalletConnectBasic"):t!=null&&t.view?H.reset(t.view,t.data):r?H.reset("Account"):H.reset("Connect"),Ge.open=!0,tr.set({open:!0}),le.sendEvent({type:"track",event:"MODAL_OPEN",properties:{connected:!!r}})},close(){const t=O.state.enableEmbedded,e=!!w.state.activeCaipAddress;Ge.open&&le.sendEvent({type:"track",event:"MODAL_CLOSE",properties:{connected:e}}),Ge.open=!1,he.clearLoading(),t?e?H.replace("Account"):H.push("Connect"):tr.set({open:!1}),K.resetUri()},setLoading(t,e){e&&Ge.loadingNamespaceMap.set(e,t),Ge.loading=t,tr.set({loading:t})},clearLoading(){Ge.loadingNamespaceMap.clear(),Ge.loading=!1},shake(){Ge.shake||(Ge.shake=!0,setTimeout(()=>{Ge.shake=!1},500))}},nu={id:"2b92315d-eab7-5bef-84fa-089a131333f5",name:"USD Coin",symbol:"USDC",networks:[{name:"ethereum-mainnet",display_name:"Ethereum",chain_id:"1",contract_address:"0xA0b86991c6218b36c1d19D4a2e9Eb0cE3606eB48"},{name:"polygon-mainnet",display_name:"Polygon",chain_id:"137",contract_address:"0x2791Bca1f2de4661ED88A30C99A7a9449Aa84174"}]},Gw={id:"USD",payment_method_limits:[{id:"card",min:"10.00",max:"7500.00"},{id:"ach_bank_account",min:"10.00",max:"25000.00"}]},Kw={providers:Ip,selectedProvider:null,error:null,purchaseCurrency:nu,paymentCurrency:Gw,purchaseCurrencies:[nu],paymentCurrencies:[],quotesLoading:!1};Ae(Kw);const Yw={initializing:!1,initialized:!1,loadingPrices:!1,loadingQuote:!1,loadingApprovalTransaction:!1,loadingBuildTransaction:!1,loadingTransaction:!1,fetchError:!1,approvalTransaction:void 0,swapTransaction:void 0,transactionError:void 0,sourceToken:void 0,sourceTokenAmount:"",sourceTokenPriceInUSD:0,toToken:void 0,toTokenAmount:"",toTokenPriceInUSD:0,networkPrice:"0",networkBalanceInUSD:"0",networkTokenSymbol:"",inputError:void 0,slippage:Oe.CONVERT_SLIPPAGE_TOLERANCE,tokens:void 0,popularTokens:void 0,suggestedTokens:void 0,foundTokens:void 0,myTokensWithBalance:void 0,tokensPriceMap:{},gasFee:"0",gasPriceInUSD:0,priceImpact:void 0,maxSlippage:void 0,providerFee:void 0};Ae(Yw);const At=Ae({message:"",open:!1,triggerRect:{width:0,height:0,top:0,left:0},variant:"shade"}),_i={state:At,subscribe(t){return De(At,()=>t(At))},subscribeKey(t,e){return qe(At,t,e)},showTooltip({message:t,triggerRect:e,variant:r}){At.open=!0,At.message=t,At.triggerRect=e,At.variant=r},hide(){At.open=!1,At.message="",At.triggerRect={width:0,height:0,top:0,left:0}}},su=2147483648,Jw={convertEVMChainIdToCoinType(t){if(t>=su)throw new Error("Invalid chainId");return(su|t)>>>0}},wt=Ae({suggestions:[],loading:!1}),yh={state:wt,subscribe(t){return De(wt,()=>t(wt))},subscribeKey(t,e){return qe(wt,t,e)},async resolveName(t){var e,r;try{return await ie.lookupEnsName(t)}catch(i){const n=i;throw new Error(((r=(e=n==null?void 0:n.reasons)==null?void 0:e[0])==null?void 0:r.description)||"Error resolving name")}},async isNameRegistered(t){try{return await ie.lookupEnsName(t),!0}catch{return!1}},async getSuggestions(t){try{wt.loading=!0,wt.suggestions=[];const e=await ie.getEnsNameSuggestions(t);return wt.suggestions=e.suggestions.map(r=>({...r,name:r.name}))||[],wt.suggestions}catch(e){const r=this.parseEnsApiError(e,"Error fetching name suggestions");throw new Error(r)}finally{wt.loading=!1}},async getNamesForAddress(t){try{if(!w.state.activeCaipNetwork)return[];const e=G.getEnsFromCacheForAddress(t);if(e)return e;const r=await ie.reverseLookupEnsName({address:t});return G.updateEnsCache({address:t,ens:r,timestamp:Date.now()}),r}catch(e){const r=this.parseEnsApiError(e,"Error fetching names for address");throw new Error(r)}},async registerName(t){const e=w.state.activeCaipNetwork;if(!e)throw new Error("Network not found");const r=Y.state.address,i=F.getAuthConnector();if(!r||!i)throw new Error("Address or auth connector not found");wt.loading=!0;try{const n=JSON.stringify({name:t,attributes:{},timestamp:Math.floor(Date.now()/1e3)});H.pushTransactionStack({view:"RegisterAccountNameSuccess",goBack:!1,replace:!0,onCancel(){wt.loading=!1}});const s=await K.signMessage(n),o=e.id;if(!o)throw new Error("Network not found");const a=Jw.convertEVMChainIdToCoinType(Number(o));await ie.registerEnsName({coinType:a,address:r,signature:s,message:n}),Y.setProfileName(t,e.chainNamespace),H.replace("RegisterAccountNameSuccess")}catch(n){const s=this.parseEnsApiError(n,`Error registering name ${t}`);throw H.replace("RegisterAccountName"),new Error(s)}finally{wt.loading=!1}},validateName(t){return/^[a-zA-Z0-9-]{4,}$/u.test(t)},parseEnsApiError(t,e){var r,i;return((i=(r=t==null?void 0:t.reasons)==null?void 0:r[0])==null?void 0:i.description)||e}};Ae({isLegalCheckboxChecked:!1});const ur={EIP155:"eip155",CONNECTOR_TYPE_WALLET_CONNECT:"WALLET_CONNECT",CONNECTOR_TYPE_INJECTED:"INJECTED",CONNECTOR_TYPE_ANNOUNCED:"ANNOUNCED"},So={NetworkImageIds:{1:"ba0ba0cd-17c6-4806-ad93-f9d174f17900",42161:"3bff954d-5cb0-47a0-9a23-d20192e74600",43114:"30c46e53-e989-45fb-4549-be3bd4eb3b00",56:"93564157-2e8e-4ce7-81df-b264dbee9b00",250:"06b26297-fe0c-4733-5d6b-ffa5498aac00",10:"ab9c186a-c52f-464b-2906-ca59d760a400",137:"41d04d42-da3b-4453-8506-668cc0727900",5e3:"e86fae9b-b770-4eea-e520-150e12c81100",295:"6a97d510-cac8-4e58-c7ce-e8681b044c00",11155111:"e909ea0a-f92a-4512-c8fc-748044ea6800",84532:"a18a7ecd-e307-4360-4746-283182228e00",1301:"4eeea7ef-0014-4649-5d1d-07271a80f600",130:"2257980a-3463-48c6-cbac-a42d2a956e00",10143:"0a728e83-bacb-46db-7844-948f05434900",100:"02b53f6a-e3d4-479e-1cb4-21178987d100",9001:"f926ff41-260d-4028-635e-91913fc28e00",324:"b310f07f-4ef7-49f3-7073-2a0a39685800",314:"5a73b3dd-af74-424e-cae0-0de859ee9400",4689:"34e68754-e536-40da-c153-6ef2e7188a00",1088:"3897a66d-40b9-4833-162f-a2c90531c900",1284:"161038da-44ae-4ec7-1208-0ea569454b00",1285:"f1d73bb6-5450-4e18-38f7-fb6484264a00",7777777:"845c60df-d429-4991-e687-91ae45791600",42220:"ab781bbc-ccc6-418d-d32d-789b15da1f00",8453:"7289c336-3981-4081-c5f4-efc26ac64a00",1313161554:"3ff73439-a619-4894-9262-4470c773a100",2020:"b8101fc0-9c19-4b6f-ec65-f6dfff106e00",2021:"b8101fc0-9c19-4b6f-ec65-f6dfff106e00",80094:"e329c2c9-59b0-4a02-83e4-212ff3779900",2741:"fc2427d1-5af9-4a9c-8da5-6f94627cd900","5eykt4UsFv8P8NJdTREpY1vzqKqZKvdp":"a1b58899-f671-4276-6a5e-56ca5bd59700","4uhcVJyU9pJkvQyS88uRDiswHXSCkY3z":"a1b58899-f671-4276-6a5e-56ca5bd59700",EtWTRABZaYq6iMfeYKouRu166VU2xqa1:"a1b58899-f671-4276-6a5e-56ca5bd59700","000000000019d6689c085ae165831e93":"0b4838db-0161-4ffe-022d-532bf03dba00","000000000933ea01ad0ee984209779ba":"39354064-d79b-420b-065d-f980c4b78200"},ConnectorImageIds:{[Q.CONNECTOR_ID.COINBASE]:"0c2840c3-5b04-4c44-9661-fbd4b49e1800",[Q.CONNECTOR_ID.COINBASE_SDK]:"0c2840c3-5b04-4c44-9661-fbd4b49e1800",[Q.CONNECTOR_ID.SAFE]:"461db637-8616-43ce-035a-d89b8a1d5800",[Q.CONNECTOR_ID.LEDGER]:"54a1aa77-d202-4f8d-0fb2-5d2bb6db0300",[Q.CONNECTOR_ID.WALLET_CONNECT]:"ef1a1fcf-7fe8-4d69-bd6d-fda1345b4400",[Q.CONNECTOR_ID.INJECTED]:"07ba87ed-43aa-4adf-4540-9e6a2b9cae00"},ConnectorNamesMap:{[Q.CONNECTOR_ID.INJECTED]:"Browser Wallet",[Q.CONNECTOR_ID.WALLET_CONNECT]:"WalletConnect",[Q.CONNECTOR_ID.COINBASE]:"Coinbase",[Q.CONNECTOR_ID.COINBASE_SDK]:"Coinbase",[Q.CONNECTOR_ID.LEDGER]:"Ledger",[Q.CONNECTOR_ID.SAFE]:"Safe"}},Vc={getCaipTokens(t){if(!t)return;const e={};return Object.entries(t).forEach(([r,i])=>{e[`${ur.EIP155}:${r}`]=i}),e},isLowerCaseMatch(t,e){return(t==null?void 0:t.toLowerCase())===(e==null?void 0:e.toLowerCase())}},zs={UniversalProviderErrors:{UNAUTHORIZED_DOMAIN_NOT_ALLOWED:{message:"Unauthorized: origin not allowed",alertErrorKey:"INVALID_APP_CONFIGURATION"},JWT_VALIDATION_ERROR:{message:"JWT validation error: JWT Token is not yet valid",alertErrorKey:"JWT_TOKEN_NOT_VALID"},INVALID_KEY:{message:"Unauthorized: invalid key",alertErrorKey:"INVALID_PROJECT_ID"}},ALERT_ERRORS:{SWITCH_NETWORK_NOT_FOUND:{shortMessage:"Network Not Found",longMessage:"Network not found - please make sure it is included in 'networks' array in createAppKit function"},INVALID_APP_CONFIGURATION:{shortMessage:"Invalid App Configuration",longMessage:()=>`Origin ${Xw()?window.origin:"unknown"} not found on Allowlist - update configuration on cloud.reown.com`},SOCIALS_TIMEOUT:{shortMessage:"Invalid App Configuration",longMessage:()=>"There was an issue loading the embedded wallet. Please verify that your domain is allowed at cloud.reown.com"},JWT_TOKEN_NOT_VALID:{shortMessage:"Session Expired",longMessage:"Invalid session found on UniversalProvider - please check your time settings and connect again"},INVALID_PROJECT_ID:{shortMessage:"Invalid App Configuration",longMessage:"Invalid Project ID - update configuration"},PROJECT_ID_NOT_CONFIGURED:{shortMessage:"Project ID Not Configured",longMessage:"Project ID Not Configured - update configuration on cloud.reown.com"}}};function Xw(){return typeof window<"u"}function Qw(t){try{return JSON.stringify(t)}catch{return'"[Circular]"'}}var em=tm;function tm(t,e,r){var i=r&&r.stringify||Qw,n=1;if(typeof t=="object"&&t!==null){var s=e.length+n;if(s===1)return t;var o=new Array(s);o[0]=i(t);for(var a=1;a<s;a++)o[a]=i(e[a]);return o.join(" ")}if(typeof t!="string")return t;var c=e.length;if(c===0)return t;for(var l="",u=1-n,d=-1,h=t&&t.length||0,p=0;p<h;){if(t.charCodeAt(p)===37&&p+1<h){switch(d=d>-1?d:0,t.charCodeAt(p+1)){case 100:case 102:if(u>=c||e[u]==null)break;d<p&&(l+=t.slice(d,p)),l+=Number(e[u]),d=p+2,p++;break;case 105:if(u>=c||e[u]==null)break;d<p&&(l+=t.slice(d,p)),l+=Math.floor(Number(e[u])),d=p+2,p++;break;case 79:case 111:case 106:if(u>=c||e[u]===void 0)break;d<p&&(l+=t.slice(d,p));var v=typeof e[u];if(v==="string"){l+="'"+e[u]+"'",d=p+2,p++;break}if(v==="function"){l+=e[u].name||"<anonymous>",d=p+2,p++;break}l+=i(e[u]),d=p+2,p++;break;case 115:if(u>=c)break;d<p&&(l+=t.slice(d,p)),l+=String(e[u]),d=p+2,p++;break;case 37:d<p&&(l+=t.slice(d,p)),l+="%",d=p+2,p++,u--;break}++u}++p}return d===-1?t:(d<h&&(l+=t.slice(d)),l)}const ou=em;var Wr=Dt;const ls=dm().console||{},rm={mapHttpRequest:js,mapHttpResponse:js,wrapRequestSerializer:ya,wrapResponseSerializer:ya,wrapErrorSerializer:ya,req:js,res:js,err:am};function im(t,e){return Array.isArray(t)?t.filter(function(r){return r!=="!stdSerializers.err"}):t===!0?Object.keys(e):!1}function Dt(t){t=t||{},t.browser=t.browser||{};const e=t.browser.transmit;if(e&&typeof e.send!="function")throw Error("pino: transmit option must have a send function");const r=t.browser.write||ls;t.browser.write&&(t.browser.asObject=!0);const i=t.serializers||{},n=im(t.browser.serialize,i);let s=t.browser.serialize;Array.isArray(t.browser.serialize)&&t.browser.serialize.indexOf("!stdSerializers.err")>-1&&(s=!1);const o=["error","fatal","warn","info","debug","trace"];typeof r=="function"&&(r.error=r.fatal=r.warn=r.info=r.debug=r.trace=r),t.enabled===!1&&(t.level="silent");const a=t.level||"info",c=Object.create(r);c.log||(c.log=us),Object.defineProperty(c,"levelVal",{get:u}),Object.defineProperty(c,"level",{get:d,set:h});const l={transmit:e,serialize:n,asObject:t.browser.asObject,levels:o,timestamp:cm(t)};c.levels=Dt.levels,c.level=a,c.setMaxListeners=c.getMaxListeners=c.emit=c.addListener=c.on=c.prependListener=c.once=c.prependOnceListener=c.removeListener=c.removeAllListeners=c.listeners=c.listenerCount=c.eventNames=c.write=c.flush=us,c.serializers=i,c._serialize=n,c._stdErrSerialize=s,c.child=p,e&&(c._logEvent=yc());function u(){return this.level==="silent"?1/0:this.levels.values[this.level]}function d(){return this._level}function h(v){if(v!=="silent"&&!this.levels.values[v])throw Error("unknown level "+v);this._level=v,Ci(l,c,"error","log"),Ci(l,c,"fatal","error"),Ci(l,c,"warn","error"),Ci(l,c,"info","log"),Ci(l,c,"debug","log"),Ci(l,c,"trace","log")}function p(v,g){if(!v)throw new Error("missing bindings for child Pino");g=g||{},n&&v.serializers&&(g.serializers=v.serializers);const b=g.serializers;if(n&&b){var C=Object.assign({},i,b),A=t.browser.serialize===!0?Object.keys(C):n;delete v.serializers,Go([v],A,C,this._stdErrSerialize)}function x(k){this._childLevel=(k._childLevel|0)+1,this.error=xi(k,v,"error"),this.fatal=xi(k,v,"fatal"),this.warn=xi(k,v,"warn"),this.info=xi(k,v,"info"),this.debug=xi(k,v,"debug"),this.trace=xi(k,v,"trace"),C&&(this.serializers=C,this._serialize=A),e&&(this._logEvent=yc([].concat(k._logEvent.bindings,v)))}return x.prototype=this,new x(this)}return c}Dt.levels={values:{fatal:60,error:50,warn:40,info:30,debug:20,trace:10},labels:{10:"trace",20:"debug",30:"info",40:"warn",50:"error",60:"fatal"}},Dt.stdSerializers=rm,Dt.stdTimeFunctions=Object.assign({},{nullTime:Ch,epochTime:xh,unixTime:lm,isoTime:um});function Ci(t,e,r,i){const n=Object.getPrototypeOf(e);e[r]=e.levelVal>e.levels.values[r]?us:n[r]?n[r]:ls[r]||ls[i]||us,nm(t,e,r)}function nm(t,e,r){!t.transmit&&e[r]===us||(e[r]=function(i){return function(){const n=t.timestamp(),s=new Array(arguments.length),o=Object.getPrototypeOf&&Object.getPrototypeOf(this)===ls?ls:this;for(var a=0;a<s.length;a++)s[a]=arguments[a];if(t.serialize&&!t.asObject&&Go(s,this._serialize,this.serializers,this._stdErrSerialize),t.asObject?i.call(o,sm(this,r,s,n)):i.apply(o,s),t.transmit){const c=t.transmit.level||e.level,l=Dt.levels.values[c],u=Dt.levels.values[r];if(u<l)return;om(this,{ts:n,methodLevel:r,methodValue:u,transmitValue:Dt.levels.values[t.transmit.level||e.level],send:t.transmit.send,val:e.levelVal},s)}}}(e[r]))}function sm(t,e,r,i){t._serialize&&Go(r,t._serialize,t.serializers,t._stdErrSerialize);const n=r.slice();let s=n[0];const o={};i&&(o.time=i),o.level=Dt.levels.values[e];let a=(t._childLevel|0)+1;if(a<1&&(a=1),s!==null&&typeof s=="object"){for(;a--&&typeof n[0]=="object";)Object.assign(o,n.shift());s=n.length?ou(n.shift(),n):void 0}else typeof s=="string"&&(s=ou(n.shift(),n));return s!==void 0&&(o.msg=s),o}function Go(t,e,r,i){for(const n in t)if(i&&t[n]instanceof Error)t[n]=Dt.stdSerializers.err(t[n]);else if(typeof t[n]=="object"&&!Array.isArray(t[n]))for(const s in t[n])e&&e.indexOf(s)>-1&&s in r&&(t[n][s]=r[s](t[n][s]))}function xi(t,e,r){return function(){const i=new Array(1+arguments.length);i[0]=e;for(var n=1;n<i.length;n++)i[n]=arguments[n-1];return t[r].apply(this,i)}}function om(t,e,r){const i=e.send,n=e.ts,s=e.methodLevel,o=e.methodValue,a=e.val,c=t._logEvent.bindings;Go(r,t._serialize||Object.keys(t.serializers),t.serializers,t._stdErrSerialize===void 0?!0:t._stdErrSerialize),t._logEvent.ts=n,t._logEvent.messages=r.filter(function(l){return c.indexOf(l)===-1}),t._logEvent.level.label=s,t._logEvent.level.value=o,i(s,t._logEvent,a),t._logEvent=yc(c)}function yc(t){return{ts:0,messages:[],bindings:t||[],level:{label:"",value:0}}}function am(t){const e={type:t.constructor.name,msg:t.message,stack:t.stack};for(const r in t)e[r]===void 0&&(e[r]=t[r]);return e}function cm(t){return typeof t.timestamp=="function"?t.timestamp:t.timestamp===!1?Ch:xh}function js(){return{}}function ya(t){return t}function us(){}function Ch(){return!1}function xh(){return Date.now()}function lm(){return Math.round(Date.now()/1e3)}function um(){return new Date(Date.now()).toISOString()}function dm(){function t(e){return typeof e<"u"&&e}try{return typeof globalThis<"u"||Object.defineProperty(Object.prototype,"globalThis",{get:function(){return delete Object.prototype.globalThis,this.globalThis=this},configurable:!0}),globalThis}catch{return t(self)||t(window)||t(this)||{}}}const hm=t=>JSON.stringify(t,(e,r)=>typeof r=="bigint"?r.toString()+"n":r);function au(t){return typeof t=="string"?t:hm(t)||""}const pm={level:"info"},Zc=1e3*1024;class fm{constructor(e){this.nodeValue=e,this.sizeInBytes=new TextEncoder().encode(this.nodeValue).length,this.next=null}get value(){return this.nodeValue}get size(){return this.sizeInBytes}}class cu{constructor(e){this.head=null,this.tail=null,this.lengthInNodes=0,this.maxSizeInBytes=e,this.sizeInBytes=0}append(e){const r=new fm(e);if(r.size>this.maxSizeInBytes)throw new Error(`[LinkedList] Value too big to insert into list: ${e} with size ${r.size}`);for(;this.size+r.size>this.maxSizeInBytes;)this.shift();this.head?(this.tail&&(this.tail.next=r),this.tail=r):(this.head=r,this.tail=r),this.lengthInNodes++,this.sizeInBytes+=r.size}shift(){if(!this.head)return;const e=this.head;this.head=this.head.next,this.head||(this.tail=null),this.lengthInNodes--,this.sizeInBytes-=e.size}toArray(){const e=[];let r=this.head;for(;r!==null;)e.push(r.value),r=r.next;return e}get length(){return this.lengthInNodes}get size(){return this.sizeInBytes}toOrderedArray(){return Array.from(this)}[Symbol.iterator](){let e=this.head;return{next:()=>{if(!e)return{done:!0,value:null};const r=e.value;return e=e.next,{done:!1,value:r}}}}}class Eh{constructor(e,r=Zc){this.level=e??"error",this.levelValue=Wr.levels.values[this.level],this.MAX_LOG_SIZE_IN_BYTES=r,this.logs=new cu(this.MAX_LOG_SIZE_IN_BYTES)}forwardToConsole(e,r){r===Wr.levels.values.error?console.error(e):r===Wr.levels.values.warn?console.warn(e):r===Wr.levels.values.debug?console.debug(e):r===Wr.levels.values.trace?console.trace(e):console.log(e)}appendToLogs(e){this.logs.append(au({timestamp:new Date().toISOString(),log:e}));const r=typeof e=="string"?JSON.parse(e).level:e.level;r>=this.levelValue&&this.forwardToConsole(e,r)}getLogs(){return this.logs}clearLogs(){this.logs=new cu(this.MAX_LOG_SIZE_IN_BYTES)}getLogArray(){return Array.from(this.logs)}logsToBlob(e){const r=this.getLogArray();return r.push(au({extraMetadata:e})),new Blob(r,{type:"application/json"})}}class gm{constructor(e,r=Zc){this.baseChunkLogger=new Eh(e,r)}write(e){this.baseChunkLogger.appendToLogs(e)}getLogs(){return this.baseChunkLogger.getLogs()}clearLogs(){this.baseChunkLogger.clearLogs()}getLogArray(){return this.baseChunkLogger.getLogArray()}logsToBlob(e){return this.baseChunkLogger.logsToBlob(e)}downloadLogsBlobInBrowser(e){const r=URL.createObjectURL(this.logsToBlob(e)),i=document.createElement("a");i.href=r,i.download=`walletconnect-logs-${new Date().toISOString()}.txt`,document.body.appendChild(i),i.click(),document.body.removeChild(i),URL.revokeObjectURL(r)}}class wm{constructor(e,r=Zc){this.baseChunkLogger=new Eh(e,r)}write(e){this.baseChunkLogger.appendToLogs(e)}getLogs(){return this.baseChunkLogger.getLogs()}clearLogs(){this.baseChunkLogger.clearLogs()}getLogArray(){return this.baseChunkLogger.getLogArray()}logsToBlob(e){return this.baseChunkLogger.logsToBlob(e)}}var mm=Object.defineProperty,vm=Object.defineProperties,bm=Object.getOwnPropertyDescriptors,lu=Object.getOwnPropertySymbols,ym=Object.prototype.hasOwnProperty,Cm=Object.prototype.propertyIsEnumerable,uu=(t,e,r)=>e in t?mm(t,e,{enumerable:!0,configurable:!0,writable:!0,value:r}):t[e]=r,Po=(t,e)=>{for(var r in e||(e={}))ym.call(e,r)&&uu(t,r,e[r]);if(lu)for(var r of lu(e))Cm.call(e,r)&&uu(t,r,e[r]);return t},_o=(t,e)=>vm(t,bm(e));function xm(t){return _o(Po({},t),{level:(t==null?void 0:t.level)||pm.level})}function Em(t){var e,r;const i=new gm((e=t.opts)==null?void 0:e.level,t.maxSizeInBytes);return{logger:Wr(_o(Po({},t.opts),{level:"trace",browser:_o(Po({},(r=t.opts)==null?void 0:r.browser),{write:n=>i.write(n)})})),chunkLoggerController:i}}function Am(t){var e;const r=new wm((e=t.opts)==null?void 0:e.level,t.maxSizeInBytes);return{logger:Wr(_o(Po({},t.opts),{level:"trace"})),chunkLoggerController:r}}function km(t){return typeof t.loggerOverride<"u"&&typeof t.loggerOverride!="string"?{logger:t.loggerOverride,chunkLoggerController:null}:typeof window<"u"?Em(t):Am(t)}const Im={createLogger(t,e="error"){const r=xm({level:e}),{logger:i}=km({opts:r});return i.error=(...n)=>{for(const s of n)if(s instanceof Error){t(s,...n);return}t(void 0,...n)},i}},Nm="rpc.walletconnect.org";function du(t,e){const r=new URL("https://rpc.walletconnect.org/v1/");return r.searchParams.set("chainId",t),r.searchParams.set("projectId",e),r.toString()}const Ca=["near:mainnet","solana:5eykt4UsFv8P8NJdTREpY1vzqKqZKvdp","eip155:1101","eip155:56","eip155:42161","eip155:7777777","eip155:59144","eip155:324","solana:EtWTRABZaYq6iMfeYKouRu166VU2xqa1","eip155:5000","solana:4sgjmw1sunhzsxgspuhpqldx6wiyjntz","eip155:80084","eip155:5003","eip155:100","eip155:8453","eip155:42220","eip155:1313161555","eip155:17000","eip155:1","eip155:300","eip155:1313161554","eip155:1329","eip155:84532","eip155:421614","eip155:11155111","eip155:8217","eip155:43114","solana:4uhcVJyU9pJkvQyS88uRDiswHXSCkY3z","eip155:999999999","eip155:11155420","eip155:80002","eip155:97","eip155:43113","eip155:137","eip155:10","eip155:1301","bip122:000000000019d6689c085ae165831e93","bip122:000000000933ea01ad0ee984209779ba"],Ti={extendRpcUrlWithProjectId(t,e){let r=!1;try{r=new URL(t).host===Nm}catch{r=!1}if(r){const i=new URL(t);return i.searchParams.has("projectId")||i.searchParams.set("projectId",e),i.toString()}return t},isCaipNetwork(t){return"chainNamespace"in t&&"caipNetworkId"in t},getChainNamespace(t){return this.isCaipNetwork(t)?t.chainNamespace:Q.CHAIN.EVM},getCaipNetworkId(t){return this.isCaipNetwork(t)?t.caipNetworkId:`${Q.CHAIN.EVM}:${t.id}`},getDefaultRpcUrl(t,e,r){var n,s,o;const i=(o=(s=(n=t.rpcUrls)==null?void 0:n.default)==null?void 0:s.http)==null?void 0:o[0];return Ca.includes(e)?du(e,r):i||""},extendCaipNetwork(t,{customNetworkImageUrls:e,projectId:r,customRpcUrls:i}){var h,p,v,g,b;const n=this.getChainNamespace(t),s=this.getCaipNetworkId(t),o=(h=t.rpcUrls.default.http)==null?void 0:h[0],a=this.getDefaultRpcUrl(t,s,r),c=((g=(v=(p=t==null?void 0:t.rpcUrls)==null?void 0:p.chainDefault)==null?void 0:v.http)==null?void 0:g[0])||o,l=((b=i==null?void 0:i[s])==null?void 0:b.map(C=>C.url))||[],u=[...l,a],d=[...l];return c&&!d.includes(c)&&d.push(c),{...t,chainNamespace:n,caipNetworkId:s,assets:{imageId:So.NetworkImageIds[t.id],imageUrl:e==null?void 0:e[t.id]},rpcUrls:{...t.rpcUrls,default:{http:u},chainDefault:{http:d}}}},extendCaipNetworks(t,{customNetworkImageUrls:e,projectId:r,customRpcUrls:i}){return t.map(n=>Ti.extendCaipNetwork(n,{customNetworkImageUrls:e,customRpcUrls:i,projectId:r}))},getViemTransport(t,e,r){var n,s,o;const i=[];return r==null||r.forEach(a=>{i.push(Bs(a.url,a.config))}),Ca.includes(t.caipNetworkId)&&i.push(Bs(du(t.caipNetworkId,e),{fetchOptions:{headers:{"Content-Type":"text/plain"}}})),(o=(s=(n=t==null?void 0:t.rpcUrls)==null?void 0:n.default)==null?void 0:s.http)==null||o.forEach(a=>{i.push(Bs(a))}),Hl(i)},extendWagmiTransports(t,e,r){if(Ca.includes(t.caipNetworkId)){const i=this.getDefaultRpcUrl(t,t.caipNetworkId,e);return Hl([r,Bs(i)])}return r},getUnsupportedNetwork(t){return{id:t.split(":")[1],caipNetworkId:t,name:Q.UNSUPPORTED_NETWORK_NAME,chainNamespace:t.split(":")[0],nativeCurrency:{name:"",decimals:0,symbol:""},rpcUrls:{default:{http:[]}}}},getCaipNetworkFromStorage(t){var a;const e=G.getActiveCaipNetworkId(),r=w.getAllRequestedCaipNetworks(),i=Array.from(((a=w.state.chains)==null?void 0:a.keys())||[]),n=e==null?void 0:e.split(":")[0],s=n?i.includes(n):!1,o=r==null?void 0:r.find(c=>c.caipNetworkId===e);return s&&!o&&e?this.getUnsupportedNetwork(e):o||t||(r==null?void 0:r[0])}},To={eip155:void 0,solana:void 0,polkadot:void 0,bip122:void 0},Ke=Ae({providers:{...To},providerIds:{...To}}),Ne={state:Ke,subscribeKey(t,e){return qe(Ke,t,e)},subscribe(t){return De(Ke,()=>{t(Ke)})},subscribeProviders(t){return De(Ke.providers,()=>t(Ke.providers))},setProvider(t,e){e&&(Ke.providers[t]=Xr(e))},getProvider(t){return Ke.providers[t]},setProviderId(t,e){e&&(Ke.providerIds[t]=e)},getProviderId(t){if(t)return Ke.providerIds[t]},reset(){Ke.providers={...To},Ke.providerIds={...To}},resetChain(t){Ke.providers[t]=void 0,Ke.providerIds[t]=void 0}};var hu;(function(t){t.Google="google",t.Github="github",t.Apple="apple",t.Facebook="facebook",t.X="x",t.Discord="discord",t.Farcaster="farcaster"})(hu||(hu={}));const gr={VIEW_DIRECTION:{Next:"next",Prev:"prev"},DEFAULT_CONNECT_METHOD_ORDER:["email","social","wallet"],ANIMATION_DURATIONS:{HeaderText:120,ModalHeight:150,ViewTransition:150}},ii={filterOutDuplicatesByRDNS(t){const e=O.state.enableEIP6963?F.state.connectors:[],r=G.getRecentWallets(),i=e.map(o=>{var a;return(a=o.info)==null?void 0:a.rdns}).filter(Boolean),n=r.map(o=>o.rdns).filter(Boolean),s=i.concat(n);if(s.includes("io.metamask.mobile")&&M.isMobile()){const o=s.indexOf("io.metamask.mobile");s[o]="io.metamask"}return t.filter(o=>!s.includes(String(o==null?void 0:o.rdns)))},filterOutDuplicatesByIds(t){const e=F.state.connectors.filter(o=>o.type==="ANNOUNCED"||o.type==="INJECTED"),r=G.getRecentWallets(),i=e.map(o=>o.explorerId),n=r.map(o=>o.id),s=i.concat(n);return t.filter(o=>!s.includes(o==null?void 0:o.id))},filterOutDuplicateWallets(t){const e=this.filterOutDuplicatesByRDNS(t);return this.filterOutDuplicatesByIds(e)},markWalletsAsInstalled(t){const{connectors:e}=F.state,r=e.filter(i=>i.type==="ANNOUNCED").reduce((i,n)=>{var s;return(s=n.info)!=null&&s.rdns&&(i[n.info.rdns]=!0),i},{});return t.map(i=>({...i,installed:!!i.rdns&&!!r[i.rdns??""]})).sort((i,n)=>Number(n.installed)-Number(i.installed))},getConnectOrderMethod(t,e){var c;const r=(t==null?void 0:t.connectMethodsOrder)||((c=O.state.features)==null?void 0:c.connectMethodsOrder),i=e||F.state.connectors;if(r)return r;const{injected:n,announced:s}=rr.getConnectorsByType(i,W.state.recommended,W.state.featured),o=n.filter(rr.showConnector),a=s.filter(rr.showConnector);return o.length||a.length?["wallet","email","social"]:gr.DEFAULT_CONNECT_METHOD_ORDER},isExcluded(t){const e=!!t.rdns&&W.state.excludedWallets.some(i=>i.rdns===t.rdns),r=!!t.name&&W.state.excludedWallets.some(i=>Vc.isLowerCaseMatch(i.name,t.name));return e||r}},rr={getConnectorsByType(t,e,r){const{customWallets:i}=O.state,n=G.getRecentWallets(),s=ii.filterOutDuplicateWallets(e),o=ii.filterOutDuplicateWallets(r),a=t.filter(d=>d.type==="MULTI_CHAIN"),c=t.filter(d=>d.type==="ANNOUNCED"),l=t.filter(d=>d.type==="INJECTED"),u=t.filter(d=>d.type==="EXTERNAL");return{custom:i,recent:n,external:u,multiChain:a,announced:c,injected:l,recommended:s,featured:o}},showConnector(t){var n;const e=(n=t.info)==null?void 0:n.rdns,r=!!e&&W.state.excludedWallets.some(s=>!!s.rdns&&s.rdns===e),i=!!t.name&&W.state.excludedWallets.some(s=>Vc.isLowerCaseMatch(s.name,t.name));return!(t.type==="INJECTED"&&(!M.isMobile()&&t.name==="Browser Wallet"||!e&&!K.checkInstalled()||r||i)||(t.type==="ANNOUNCED"||t.type==="EXTERNAL")&&(r||i))},getIsConnectedWithWC(){return Array.from(w.state.chains.values()).some(t=>F.getConnectorId(t.namespace)===Q.CONNECTOR_ID.WALLET_CONNECT)},getConnectorTypeOrder({recommended:t,featured:e,custom:r,recent:i,announced:n,injected:s,multiChain:o,external:a,overriddenConnectors:c=(l=>(l=O.state.features)==null?void 0:l.connectorTypeOrder)()??[]}){const u=rr.getIsConnectedWithWC(),d=[{type:"walletConnect",isEnabled:O.state.enableWalletConnect&&!u},{type:"recent",isEnabled:i.length>0},{type:"injected",isEnabled:[...s,...n,...o].length>0},{type:"featured",isEnabled:e.length>0},{type:"custom",isEnabled:r&&r.length>0},{type:"external",isEnabled:a.length>0},{type:"recommended",isEnabled:t.length>0}].filter(g=>g.isEnabled),h=new Set(d.map(g=>g.type)),p=c.filter(g=>h.has(g)).map(g=>({type:g,isEnabled:!0})),v=d.filter(({type:g})=>!p.some(({type:b})=>b===g));return Array.from(new Set([...p,...v].map(({type:g})=>g)))}};/**
* @license
* Copyright 2019 Google LLC
* SPDX-License-Identifier: BSD-3-Clause
*/const yo=globalThis,Gc=yo.ShadowRoot&&(yo.ShadyCSS===void 0||yo.ShadyCSS.nativeShadow)&&"adoptedStyleSheets"in Document.prototype&&"replace"in CSSStyleSheet.prototype,Kc=Symbol(),pu=new WeakMap;class Ah{constructor(e,r,i){if(this._$cssResult$=!0,i!==Kc)throw Error("CSSResult is not constructable. Use `unsafeCSS` or `css` instead.");this.cssText=e,this.t=r}get styleSheet(){let e=this.o;const r=this.t;if(Gc&&e===void 0){const i=r!==void 0&&r.length===1;i&&(e=pu.get(r)),e===void 0&&((this.o=e=new CSSStyleSheet).replaceSync(this.cssText),i&&pu.set(r,e))}return e}toString(){return this.cssText}}const Ct=t=>new Ah(typeof t=="string"?t:t+"",void 0,Kc),te=(t,...e)=>{const r=t.length===1?t[0]:e.reduce((i,n,s)=>i+(o=>{if(o._$cssResult$===!0)return o.cssText;if(typeof o=="number")return o;throw Error("Value passed to 'css' function must be a 'css' function result: "+o+". Use 'unsafeCSS' to pass non-literal values, but take care to ensure page security.")})(n)+t[s+1],t[0]);return new Ah(r,t,Kc)},Sm=(t,e)=>{if(Gc)t.adoptedStyleSheets=e.map(r=>r instanceof CSSStyleSheet?r:r.styleSheet);else for(const r of e){const i=document.createElement("style"),n=yo.litNonce;n!==void 0&&i.setAttribute("nonce",n),i.textContent=r.cssText,t.appendChild(i)}},fu=Gc?t=>t:t=>t instanceof CSSStyleSheet?(e=>{let r="";for(const i of e.cssRules)r+=i.cssText;return Ct(r)})(t):t;/**
* @license
* Copyright 2017 Google LLC
* SPDX-License-Identifier: BSD-3-Clause
*/const{is:Pm,defineProperty:_m,getOwnPropertyDescriptor:Tm,getOwnPropertyNames:Om,getOwnPropertySymbols:$m,getPrototypeOf:Rm}=Object,vr=globalThis,gu=vr.trustedTypes,Lm=gu?gu.emptyScript:"",xa=vr.reactiveElementPolyfillSupport,Un=(t,e)=>t,Oo={toAttribute(t,e){switch(e){case Boolean:t=t?Lm:null;break;case Object:case Array:t=t==null?t:JSON.stringify(t)}return t},fromAttribute(t,e){let r=t;switch(e){case Boolean:r=t!==null;break;case Number:r=t===null?null:Number(t);break;case Object:case Array:try{r=JSON.parse(t)}catch{r=null}}return r}},Yc=(t,e)=>!Pm(t,e),wu={attribute:!0,type:String,converter:Oo,reflect:!1,useDefault:!1,hasChanged:Yc};Symbol.metadata??(Symbol.metadata=Symbol("metadata")),vr.litPropertyMetadata??(vr.litPropertyMetadata=new WeakMap);class Oi extends HTMLElement{static addInitializer(e){this._$Ei(),(this.l??(this.l=[])).push(e)}static get observedAttributes(){return this.finalize(),this._$Eh&&[...this._$Eh.keys()]}static createProperty(e,r=wu){if(r.state&&(r.attribute=!1),this._$Ei(),this.prototype.hasOwnProperty(e)&&((r=Object.create(r)).wrapped=!0),this.elementProperties.set(e,r),!r.noAccessor){const i=Symbol(),n=this.getPropertyDescriptor(e,i,r);n!==void 0&&_m(this.prototype,e,n)}}static getPropertyDescriptor(e,r,i){const{get:n,set:s}=Tm(this.prototype,e)??{get(){return this[r]},set(o){this[r]=o}};return{get:n,set(o){const a=n==null?void 0:n.call(this);s==null||s.call(this,o),this.requestUpdate(e,a,i)},configurable:!0,enumerable:!0}}static getPropertyOptions(e){return this.elementProperties.get(e)??wu}static _$Ei(){if(this.hasOwnProperty(Un("elementProperties")))return;const e=Rm(this);e.finalize(),e.l!==void 0&&(this.l=[...e.l]),this.elementProperties=new Map(e.elementProperties)}static finalize(){if(this.hasOwnProperty(Un("finalized")))return;if(this.finalized=!0,this._$Ei(),this.hasOwnProperty(Un("properties"))){const r=this.properties,i=[...Om(r),...$m(r)];for(const n of i)this.createProperty(n,r[n])}const e=this[Symbol.metadata];if(e!==null){const r=litPropertyMetadata.get(e);if(r!==void 0)for(const[i,n]of r)this.elementProperties.set(i,n)}this._$Eh=new Map;for(const[r,i]of this.elementProperties){const n=this._$Eu(r,i);n!==void 0&&this._$Eh.set(n,r)}this.elementStyles=this.finalizeStyles(this.styles)}static finalizeStyles(e){const r=[];if(Array.isArray(e)){const i=new Set(e.flat(1/0).reverse());for(const n of i)r.unshift(fu(n))}else e!==void 0&&r.push(fu(e));return r}static _$Eu(e,r){const i=r.attribute;return i===!1?void 0:typeof i=="string"?i:typeof e=="string"?e.toLowerCase():void 0}constructor(){super(),this._$Ep=void 0,this.isUpdatePending=!1,this.hasUpdated=!1,this._$Em=null,this._$Ev()}_$Ev(){var e;this._$ES=new Promise(r=>this.enableUpdating=r),this._$AL=new Map,this._$E_(),this.requestUpdate(),(e=this.constructor.l)==null||e.forEach(r=>r(this))}addController(e){var r;(this._$EO??(this._$EO=new Set)).add(e),this.renderRoot!==void 0&&this.isConnected&&((r=e.hostConnected)==null||r.call(e))}removeController(e){var r;(r=this._$EO)==null||r.delete(e)}_$E_(){const e=new Map,r=this.constructor.elementProperties;for(const i of r.keys())this.hasOwnProperty(i)&&(e.set(i,this[i]),delete this[i]);e.size>0&&(this._$Ep=e)}createRenderRoot(){const e=this.shadowRoot??this.attachShadow(this.constructor.shadowRootOptions);return Sm(e,this.constructor.elementStyles),e}connectedCallback(){var e;this.renderRoot??(this.renderRoot=this.createRenderRoot()),this.enableUpdating(!0),(e=this._$EO)==null||e.forEach(r=>{var i;return(i=r.hostConnected)==null?void 0:i.call(r)})}enableUpdating(e){}disconnectedCallback(){var e;(e=this._$EO)==null||e.forEach(r=>{var i;return(i=r.hostDisconnected)==null?void 0:i.call(r)})}attributeChangedCallback(e,r,i){this._$AK(e,i)}_$ET(e,r){var s;const i=this.constructor.elementProperties.get(e),n=this.constructor._$Eu(e,i);if(n!==void 0&&i.reflect===!0){const o=(((s=i.converter)==null?void 0:s.toAttribute)!==void 0?i.converter:Oo).toAttribute(r,i.type);this._$Em=e,o==null?this.removeAttribute(n):this.setAttribute(n,o),this._$Em=null}}_$AK(e,r){var s,o;const i=this.constructor,n=i._$Eh.get(e);if(n!==void 0&&this._$Em!==n){const a=i.getPropertyOptions(n),c=typeof a.converter=="function"?{fromAttribute:a.converter}:((s=a.converter)==null?void 0:s.fromAttribute)!==void 0?a.converter:Oo;this._$Em=n,this[n]=c.fromAttribute(r,a.type)??((o=this._$Ej)==null?void 0:o.get(n))??null,this._$Em=null}}requestUpdate(e,r,i){var n;if(e!==void 0){const s=this.constructor,o=this[e];if(i??(i=s.getPropertyOptions(e)),!((i.hasChanged??Yc)(o,r)||i.useDefault&&i.reflect&&o===((n=this._$Ej)==null?void 0:n.get(e))&&!this.hasAttribute(s._$Eu(e,i))))return;this.C(e,r,i)}this.isUpdatePending===!1&&(this._$ES=this._$EP())}C(e,r,{useDefault:i,reflect:n,wrapped:s},o){i&&!(this._$Ej??(this._$Ej=new Map)).has(e)&&(this._$Ej.set(e,o??r??this[e]),s!==!0||o!==void 0)||(this._$AL.has(e)||(this.hasUpdated||i||(r=void 0),this._$AL.set(e,r)),n===!0&&this._$Em!==e&&(this._$Eq??(this._$Eq=new Set)).add(e))}async _$EP(){this.isUpdatePending=!0;try{await this._$ES}catch(r){Promise.reject(r)}const e=this.scheduleUpdate();return e!=null&&await e,!this.isUpdatePending}scheduleUpdate(){return this.performUpdate()}performUpdate(){var i;if(!this.isUpdatePending)return;if(!this.hasUpdated){if(this.renderRoot??(this.renderRoot=this.createRenderRoot()),this._$Ep){for(const[s,o]of this._$Ep)this[s]=o;this._$Ep=void 0}const n=this.constructor.elementProperties;if(n.size>0)for(const[s,o]of n){const{wrapped:a}=o,c=this[s];a!==!0||this._$AL.has(s)||c===void 0||this.C(s,void 0,o,c)}}let e=!1;const r=this._$AL;try{e=this.shouldUpdate(r),e?(this.willUpdate(r),(i=this._$EO)==null||i.forEach(n=>{var s;return(s=n.hostUpdate)==null?void 0:s.call(n)}),this.update(r)):this._$EM()}catch(n){throw e=!1,this._$EM(),n}e&&this._$AE(r)}willUpdate(e){}_$AE(e){var r;(r=this._$EO)==null||r.forEach(i=>{var n;return(n=i.hostUpdated)==null?void 0:n.call(i)}),this.hasUpdated||(this.hasUpdated=!0,this.firstUpdated(e)),this.updated(e)}_$EM(){this._$AL=new Map,this.isUpdatePending=!1}get updateComplete(){return this.getUpdateComplete()}getUpdateComplete(){return this._$ES}shouldUpdate(e){return!0}update(e){this._$Eq&&(this._$Eq=this._$Eq.forEach(r=>this._$ET(r,this[r]))),this._$EM()}updated(e){}firstUpdated(e){}}Oi.elementStyles=[],Oi.shadowRootOptions={mode:"open"},Oi[Un("elementProperties")]=new Map,Oi[Un("finalized")]=new Map,xa==null||xa({ReactiveElement:Oi}),(vr.reactiveElementVersions??(vr.reactiveElementVersions=[])).push("2.1.0");/**
* @license
* Copyright 2017 Google LLC
* SPDX-License-Identifier: BSD-3-Clause
*/const Mn=globalThis,$o=Mn.trustedTypes,mu=$o?$o.createPolicy("lit-html",{createHTML:t=>t}):void 0,kh="$lit$",pr=`lit$${Math.random().toFixed(9).slice(2)}$`,Ih="?"+pr,Bm=`<${Ih}>`,ni=document,ds=()=>ni.createComment(""),hs=t=>t===null||typeof t!="object"&&typeof t!="function",Jc=Array.isArray,Um=t=>Jc(t)||typeof(t==null?void 0:t[Symbol.iterator])=="function",Ea=`[ 	
\f\r]`,cn=/<(?:(!--|\/[^a-zA-Z])|(\/?[a-zA-Z][^>\s]*)|(\/?$))/g,vu=/-->/g,bu=/>/g,kr=RegExp(`>|${Ea}(?:([^\\s"'>=/]+)(${Ea}*=${Ea}*(?:[^ 	
\f\r"'\`<>=]|("|')|))|$)`,"g"),yu=/'/g,Cu=/"/g,Nh=/^(?:script|style|textarea|title)$/i,Sh=t=>(e,...r)=>({_$litType$:t,strings:e,values:r}),y=Sh(1),z=Sh(2),ir=Symbol.for("lit-noChange"),Pe=Symbol.for("lit-nothing"),xu=new WeakMap,qr=ni.createTreeWalker(ni,129);function Ph(t,e){if(!Jc(t)||!t.hasOwnProperty("raw"))throw Error("invalid template strings array");return mu!==void 0?mu.createHTML(e):e}const Mm=(t,e)=>{const r=t.length-1,i=[];let n,s=e===2?"<svg>":e===3?"<math>":"",o=cn;for(let a=0;a<r;a++){const c=t[a];let l,u,d=-1,h=0;for(;h<c.length&&(o.lastIndex=h,u=o.exec(c),u!==null);)h=o.lastIndex,o===cn?u[1]==="!--"?o=vu:u[1]!==void 0?o=bu:u[2]!==void 0?(Nh.test(u[2])&&(n=RegExp("</"+u[2],"g")),o=kr):u[3]!==void 0&&(o=kr):o===kr?u[0]===">"?(o=n??cn,d=-1):u[1]===void 0?d=-2:(d=o.lastIndex-u[2].length,l=u[1],o=u[3]===void 0?kr:u[3]==='"'?Cu:yu):o===Cu||o===yu?o=kr:o===vu||o===bu?o=cn:(o=kr,n=void 0);const p=o===kr&&t[a+1].startsWith("/>")?" ":"";s+=o===cn?c+Bm:d>=0?(i.push(l),c.slice(0,d)+kh+c.slice(d)+pr+p):c+pr+(d===-2?a:p)}return[Ph(t,s+(t[r]||"<?>")+(e===2?"</svg>":e===3?"</math>":"")),i]};class ps{constructor({strings:e,_$litType$:r},i){let n;this.parts=[];let s=0,o=0;const a=e.length-1,c=this.parts,[l,u]=Mm(e,r);if(this.el=ps.createElement(l,i),qr.currentNode=this.el.content,r===2||r===3){const d=this.el.content.firstChild;d.replaceWith(...d.childNodes)}for(;(n=qr.nextNode())!==null&&c.length<a;){if(n.nodeType===1){if(n.hasAttributes())for(const d of n.getAttributeNames())if(d.endsWith(kh)){const h=u[o++],p=n.getAttribute(d).split(pr),v=/([.?@])?(.*)/.exec(h);c.push({type:1,index:s,name:v[2],strings:p,ctor:v[1]==="."?jm:v[1]==="?"?Dm:v[1]==="@"?Hm:Ko}),n.removeAttribute(d)}else d.startsWith(pr)&&(c.push({type:6,index:s}),n.removeAttribute(d));if(Nh.test(n.tagName)){const d=n.textContent.split(pr),h=d.length-1;if(h>0){n.textContent=$o?$o.emptyScript:"";for(let p=0;p<h;p++)n.append(d[p],ds()),qr.nextNode(),c.push({type:2,index:++s});n.append(d[h],ds())}}}else if(n.nodeType===8)if(n.data===Ih)c.push({type:2,index:s});else{let d=-1;for(;(d=n.data.indexOf(pr,d+1))!==-1;)c.push({type:7,index:s}),d+=pr.length-1}s++}}static createElement(e,r){const i=ni.createElement("template");return i.innerHTML=e,i}}function Ji(t,e,r=t,i){var o,a;if(e===ir)return e;let n=i!==void 0?(o=r._$Co)==null?void 0:o[i]:r._$Cl;const s=hs(e)?void 0:e._$litDirective$;return(n==null?void 0:n.constructor)!==s&&((a=n==null?void 0:n._$AO)==null||a.call(n,!1),s===void 0?n=void 0:(n=new s(t),n._$AT(t,r,i)),i!==void 0?(r._$Co??(r._$Co=[]))[i]=n:r._$Cl=n),n!==void 0&&(e=Ji(t,n._$AS(t,e.values),n,i)),e}class zm{constructor(e,r){this._$AV=[],this._$AN=void 0,this._$AD=e,this._$AM=r}get parentNode(){return this._$AM.parentNode}get _$AU(){return this._$AM._$AU}u(e){const{el:{content:r},parts:i}=this._$AD,n=((e==null?void 0:e.creationScope)??ni).importNode(r,!0);qr.currentNode=n;let s=qr.nextNode(),o=0,a=0,c=i[0];for(;c!==void 0;){if(o===c.index){let l;c.type===2?l=new Cs(s,s.nextSibling,this,e):c.type===1?l=new c.ctor(s,c.name,c.strings,this,e):c.type===6&&(l=new Wm(s,this,e)),this._$AV.push(l),c=i[++a]}o!==(c==null?void 0:c.index)&&(s=qr.nextNode(),o++)}return qr.currentNode=ni,n}p(e){let r=0;for(const i of this._$AV)i!==void 0&&(i.strings!==void 0?(i._$AI(e,i,r),r+=i.strings.length-2):i._$AI(e[r])),r++}}class Cs{get _$AU(){var e;return((e=this._$AM)==null?void 0:e._$AU)??this._$Cv}constructor(e,r,i,n){this.type=2,this._$AH=Pe,this._$AN=void 0,this._$AA=e,this._$AB=r,this._$AM=i,this.options=n,this._$Cv=(n==null?void 0:n.isConnected)??!0}get parentNode(){let e=this._$AA.parentNode;const r=this._$AM;return r!==void 0&&(e==null?void 0:e.nodeType)===11&&(e=r.parentNode),e}get startNode(){return this._$AA}get endNode(){return this._$AB}_$AI(e,r=this){e=Ji(this,e,r),hs(e)?e===Pe||e==null||e===""?(this._$AH!==Pe&&this._$AR(),this._$AH=Pe):e!==this._$AH&&e!==ir&&this._(e):e._$litType$!==void 0?this.$(e):e.nodeType!==void 0?this.T(e):Um(e)?this.k(e):this._(e)}O(e){return this._$AA.parentNode.insertBefore(e,this._$AB)}T(e){this._$AH!==e&&(this._$AR(),this._$AH=this.O(e))}_(e){this._$AH!==Pe&&hs(this._$AH)?this._$AA.nextSibling.data=e:this.T(ni.createTextNode(e)),this._$AH=e}$(e){var s;const{values:r,_$litType$:i}=e,n=typeof i=="number"?this._$AC(e):(i.el===void 0&&(i.el=ps.createElement(Ph(i.h,i.h[0]),this.options)),i);if(((s=this._$AH)==null?void 0:s._$AD)===n)this._$AH.p(r);else{const o=new zm(n,this),a=o.u(this.options);o.p(r),this.T(a),this._$AH=o}}_$AC(e){let r=xu.get(e.strings);return r===void 0&&xu.set(e.strings,r=new ps(e)),r}k(e){Jc(this._$AH)||(this._$AH=[],this._$AR());const r=this._$AH;let i,n=0;for(const s of e)n===r.length?r.push(i=new Cs(this.O(ds()),this.O(ds()),this,this.options)):i=r[n],i._$AI(s),n++;n<r.length&&(this._$AR(i&&i._$AB.nextSibling,n),r.length=n)}_$AR(e=this._$AA.nextSibling,r){var i;for((i=this._$AP)==null?void 0:i.call(this,!1,!0,r);e&&e!==this._$AB;){const n=e.nextSibling;e.remove(),e=n}}setConnected(e){var r;this._$AM===void 0&&(this._$Cv=e,(r=this._$AP)==null||r.call(this,e))}}class Ko{get tagName(){return this.element.tagName}get _$AU(){return this._$AM._$AU}constructor(e,r,i,n,s){this.type=1,this._$AH=Pe,this._$AN=void 0,this.element=e,this.name=r,this._$AM=n,this.options=s,i.length>2||i[0]!==""||i[1]!==""?(this._$AH=Array(i.length-1).fill(new String),this.strings=i):this._$AH=Pe}_$AI(e,r=this,i,n){const s=this.strings;let o=!1;if(s===void 0)e=Ji(this,e,r,0),o=!hs(e)||e!==this._$AH&&e!==ir,o&&(this._$AH=e);else{const a=e;let c,l;for(e=s[0],c=0;c<s.length-1;c++)l=Ji(this,a[i+c],r,c),l===ir&&(l=this._$AH[c]),o||(o=!hs(l)||l!==this._$AH[c]),l===Pe?e=Pe:e!==Pe&&(e+=(l??"")+s[c+1]),this._$AH[c]=l}o&&!n&&this.j(e)}j(e){e===Pe?this.element.removeAttribute(this.name):this.element.setAttribute(this.name,e??"")}}class jm extends Ko{constructor(){super(...arguments),this.type=3}j(e){this.element[this.name]=e===Pe?void 0:e}}class Dm extends Ko{constructor(){super(...arguments),this.type=4}j(e){this.element.toggleAttribute(this.name,!!e&&e!==Pe)}}class Hm extends Ko{constructor(e,r,i,n,s){super(e,r,i,n,s),this.type=5}_$AI(e,r=this){if((e=Ji(this,e,r,0)??Pe)===ir)return;const i=this._$AH,n=e===Pe&&i!==Pe||e.capture!==i.capture||e.once!==i.once||e.passive!==i.passive,s=e!==Pe&&(i===Pe||n);n&&this.element.removeEventListener(this.name,this,i),s&&this.element.addEventListener(this.name,this,e),this._$AH=e}handleEvent(e){var r;typeof this._$AH=="function"?this._$AH.call(((r=this.options)==null?void 0:r.host)??this.element,e):this._$AH.handleEvent(e)}}class Wm{constructor(e,r,i){this.element=e,this.type=6,this._$AN=void 0,this._$AM=r,this.options=i}get _$AU(){return this._$AM._$AU}_$AI(e){Ji(this,e)}}const Aa=Mn.litHtmlPolyfillSupport;Aa==null||Aa(ps,Cs),(Mn.litHtmlVersions??(Mn.litHtmlVersions=[])).push("3.3.0");const Fm=(t,e,r)=>{const i=(r==null?void 0:r.renderBefore)??e;let n=i._$litPart$;if(n===void 0){const s=(r==null?void 0:r.renderBefore)??null;i._$litPart$=n=new Cs(e.insertBefore(ds(),s),s,void 0,r??{})}return n._$AI(t),n};/**
* @license
* Copyright 2017 Google LLC
* SPDX-License-Identifier: BSD-3-Clause
*/const Jr=globalThis;class Z extends Oi{constructor(){super(...arguments),this.renderOptions={host:this},this._$Do=void 0}createRenderRoot(){var r;const e=super.createRenderRoot();return(r=this.renderOptions).renderBefore??(r.renderBefore=e.firstChild),e}update(e){const r=this.render();this.hasUpdated||(this.renderOptions.isConnected=this.isConnected),super.update(e),this._$Do=Fm(r,this.renderRoot,this.renderOptions)}connectedCallback(){var e;super.connectedCallback(),(e=this._$Do)==null||e.setConnected(!0)}disconnectedCallback(){var e;super.disconnectedCallback(),(e=this._$Do)==null||e.setConnected(!1)}render(){return ir}}var sd;Z._$litElement$=!0,Z.finalized=!0,(sd=Jr.litElementHydrateSupport)==null||sd.call(Jr,{LitElement:Z});const ka=Jr.litElementPolyfillSupport;ka==null||ka({LitElement:Z}),(Jr.litElementVersions??(Jr.litElementVersions=[])).push("4.2.0");let zn,br,yr;function qm(t,e){zn=document.createElement("style"),br=document.createElement("style"),yr=document.createElement("style"),zn.textContent=ji(t).core.cssText,br.textContent=ji(t).dark.cssText,yr.textContent=ji(t).light.cssText,document.head.appendChild(zn),document.head.appendChild(br),document.head.appendChild(yr),_h(e)}function _h(t){br&&yr&&(t==="light"?(br.removeAttribute("media"),yr.media="enabled"):(yr.removeAttribute("media"),br.media="enabled"))}function Vm(t){zn&&br&&yr&&(zn.textContent=ji(t).core.cssText,br.textContent=ji(t).dark.cssText,yr.textContent=ji(t).light.cssText)}function ji(t){return{core:te`
      @import url('https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700&display=swap');
      @keyframes w3m-shake {
        0% {
          transform: scale(1) rotate(0deg);
        }
        20% {
          transform: scale(1) rotate(-1deg);
        }
        40% {
          transform: scale(1) rotate(1.5deg);
        }
        60% {
          transform: scale(1) rotate(-1.5deg);
        }
        80% {
          transform: scale(1) rotate(1deg);
        }
        100% {
          transform: scale(1) rotate(0deg);
        }
      }
      @keyframes w3m-iframe-fade-out {
        0% {
          opacity: 1;
        }
        100% {
          opacity: 0;
        }
      }
      @keyframes w3m-iframe-zoom-in {
        0% {
          transform: translateY(50px);
          opacity: 0;
        }
        100% {
          transform: translateY(0px);
          opacity: 1;
        }
      }
      @keyframes w3m-iframe-zoom-in-mobile {
        0% {
          transform: scale(0.95);
          opacity: 0;
        }
        100% {
          transform: scale(1);
          opacity: 1;
        }
      }
      :root {
        --w3m-modal-width: 360px;
        --w3m-color-mix-strength: ${Ct(t!=null&&t["--w3m-color-mix-strength"]?`${t["--w3m-color-mix-strength"]}%`:"0%")};
        --w3m-font-family: ${Ct((t==null?void 0:t["--w3m-font-family"])||"Inter, Segoe UI, Roboto, Oxygen, Ubuntu, Cantarell, Fira Sans, Droid Sans, Helvetica Neue, sans-serif;")};
        --w3m-font-size-master: ${Ct((t==null?void 0:t["--w3m-font-size-master"])||"10px")};
        --w3m-border-radius-master: ${Ct((t==null?void 0:t["--w3m-border-radius-master"])||"4px")};
        --w3m-z-index: ${Ct((t==null?void 0:t["--w3m-z-index"])||999)};

        --wui-font-family: var(--w3m-font-family);

        --wui-font-size-mini: calc(var(--w3m-font-size-master) * 0.8);
        --wui-font-size-micro: var(--w3m-font-size-master);
        --wui-font-size-tiny: calc(var(--w3m-font-size-master) * 1.2);
        --wui-font-size-small: calc(var(--w3m-font-size-master) * 1.4);
        --wui-font-size-paragraph: calc(var(--w3m-font-size-master) * 1.6);
        --wui-font-size-medium: calc(var(--w3m-font-size-master) * 1.8);
        --wui-font-size-large: calc(var(--w3m-font-size-master) * 2);
        --wui-font-size-title-6: calc(var(--w3m-font-size-master) * 2.2);
        --wui-font-size-medium-title: calc(var(--w3m-font-size-master) * 2.4);
        --wui-font-size-2xl: calc(var(--w3m-font-size-master) * 4);

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

        --wui-letter-spacing-2xl: -1.6px;
        --wui-letter-spacing-medium-title: -0.96px;
        --wui-letter-spacing-title-6: -0.88px;
        --wui-letter-spacing-large: -0.8px;
        --wui-letter-spacing-medium: -0.72px;
        --wui-letter-spacing-paragraph: -0.64px;
        --wui-letter-spacing-small: -0.56px;
        --wui-letter-spacing-tiny: -0.48px;
        --wui-letter-spacing-micro: -0.2px;
        --wui-letter-spacing-mini: -0.16px;

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
        --wui-spacing-5xl: 95px;

        --wui-icon-box-size-xxs: 14px;
        --wui-icon-box-size-xs: 20px;
        --wui-icon-box-size-sm: 24px;
        --wui-icon-box-size-md: 32px;
        --wui-icon-box-size-mdl: 36px;
        --wui-icon-box-size-lg: 40px;
        --wui-icon-box-size-2lg: 48px;
        --wui-icon-box-size-xl: 64px;

        --wui-icon-size-inherit: inherit;
        --wui-icon-size-xxs: 10px;
        --wui-icon-size-xs: 12px;
        --wui-icon-size-sm: 14px;
        --wui-icon-size-md: 16px;
        --wui-icon-size-mdl: 18px;
        --wui-icon-size-lg: 20px;
        --wui-icon-size-xl: 24px;
        --wui-icon-size-xxl: 28px;

        --wui-wallet-image-size-inherit: inherit;
        --wui-wallet-image-size-sm: 40px;
        --wui-wallet-image-size-md: 56px;
        --wui-wallet-image-size-lg: 80px;

        --wui-visual-size-size-inherit: inherit;
        --wui-visual-size-sm: 40px;
        --wui-visual-size-md: 55px;
        --wui-visual-size-lg: 80px;

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

        --wui-path-network-sm: path(
          'M15.4 2.1a5.21 5.21 0 0 1 5.2 0l11.61 6.7a5.21 5.21 0 0 1 2.61 4.52v13.4c0 1.87-1 3.59-2.6 4.52l-11.61 6.7c-1.62.93-3.6.93-5.22 0l-11.6-6.7a5.21 5.21 0 0 1-2.61-4.51v-13.4c0-1.87 1-3.6 2.6-4.52L15.4 2.1Z'
        );

        --wui-path-network-md: path(
          'M43.4605 10.7248L28.0485 1.61089C25.5438 0.129705 22.4562 0.129705 19.9515 1.61088L4.53951 10.7248C2.03626 12.2051 0.5 14.9365 0.5 17.886V36.1139C0.5 39.0635 2.03626 41.7949 4.53951 43.2752L19.9515 52.3891C22.4562 53.8703 25.5438 53.8703 28.0485 52.3891L43.4605 43.2752C45.9637 41.7949 47.5 39.0635 47.5 36.114V17.8861C47.5 14.9365 45.9637 12.2051 43.4605 10.7248Z'
        );

        --wui-path-network-lg: path(
          'M78.3244 18.926L50.1808 2.45078C45.7376 -0.150261 40.2624 -0.150262 35.8192 2.45078L7.6756 18.926C3.23322 21.5266 0.5 26.3301 0.5 31.5248V64.4752C0.5 69.6699 3.23322 74.4734 7.6756 77.074L35.8192 93.5492C40.2624 96.1503 45.7376 96.1503 50.1808 93.5492L78.3244 77.074C82.7668 74.4734 85.5 69.6699 85.5 64.4752V31.5248C85.5 26.3301 82.7668 21.5266 78.3244 18.926Z'
        );

        --wui-width-network-sm: 36px;
        --wui-width-network-md: 48px;
        --wui-width-network-lg: 86px;

        --wui-height-network-sm: 40px;
        --wui-height-network-md: 54px;
        --wui-height-network-lg: 96px;

        --wui-icon-size-network-xs: 12px;
        --wui-icon-size-network-sm: 16px;
        --wui-icon-size-network-md: 24px;
        --wui-icon-size-network-lg: 42px;

        --wui-color-inherit: inherit;

        --wui-color-inverse-100: #fff;
        --wui-color-inverse-000: #000;

        --wui-cover: rgba(20, 20, 20, 0.8);

        --wui-color-modal-bg: var(--wui-color-modal-bg-base);

        --wui-color-accent-100: var(--wui-color-accent-base-100);
        --wui-color-accent-090: var(--wui-color-accent-base-090);
        --wui-color-accent-080: var(--wui-color-accent-base-080);

        --wui-color-success-100: var(--wui-color-success-base-100);
        --wui-color-success-125: var(--wui-color-success-base-125);

        --wui-color-warning-100: var(--wui-color-warning-base-100);

        --wui-color-error-100: var(--wui-color-error-base-100);
        --wui-color-error-125: var(--wui-color-error-base-125);

        --wui-color-blue-100: var(--wui-color-blue-base-100);
        --wui-color-blue-90: var(--wui-color-blue-base-90);

        --wui-icon-box-bg-error-100: var(--wui-icon-box-bg-error-base-100);
        --wui-icon-box-bg-blue-100: var(--wui-icon-box-bg-blue-base-100);
        --wui-icon-box-bg-success-100: var(--wui-icon-box-bg-success-base-100);
        --wui-icon-box-bg-inverse-100: var(--wui-icon-box-bg-inverse-base-100);

        --wui-all-wallets-bg-100: var(--wui-all-wallets-bg-100);

        --wui-avatar-border: var(--wui-avatar-border-base);

        --wui-thumbnail-border: var(--wui-thumbnail-border-base);

        --wui-wallet-button-bg: var(--wui-wallet-button-bg-base);

        --wui-box-shadow-blue: var(--wui-color-accent-glass-020);
      }

      @supports (background: color-mix(in srgb, white 50%, black)) {
        :root {
          --wui-color-modal-bg: color-mix(
            in srgb,
            var(--w3m-color-mix) var(--w3m-color-mix-strength),
            var(--wui-color-modal-bg-base)
          );

          --wui-box-shadow-blue: color-mix(in srgb, var(--wui-color-accent-100) 20%, transparent);

          --wui-color-accent-100: color-mix(
            in srgb,
            var(--wui-color-accent-base-100) 100%,
            transparent
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
          --wui-color-accent-glass-090: color-mix(
            in srgb,
            var(--wui-color-accent-base-100) 90%,
            transparent
          );
          --wui-color-accent-glass-080: color-mix(
            in srgb,
            var(--wui-color-accent-base-100) 80%,
            transparent
          );
          --wui-color-accent-glass-020: color-mix(
            in srgb,
            var(--wui-color-accent-base-100) 20%,
            transparent
          );
          --wui-color-accent-glass-015: color-mix(
            in srgb,
            var(--wui-color-accent-base-100) 15%,
            transparent
          );
          --wui-color-accent-glass-010: color-mix(
            in srgb,
            var(--wui-color-accent-base-100) 10%,
            transparent
          );
          --wui-color-accent-glass-005: color-mix(
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
            var(--wui-color-fg-100)
          );
          --wui-color-fg-125: color-mix(
            in srgb,
            var(--w3m-color-mix) var(--w3m-color-mix-strength),
            var(--wui-color-fg-125)
          );
          --wui-color-fg-150: color-mix(
            in srgb,
            var(--w3m-color-mix) var(--w3m-color-mix-strength),
            var(--wui-color-fg-150)
          );
          --wui-color-fg-175: color-mix(
            in srgb,
            var(--w3m-color-mix) var(--w3m-color-mix-strength),
            var(--wui-color-fg-175)
          );
          --wui-color-fg-200: color-mix(
            in srgb,
            var(--w3m-color-mix) var(--w3m-color-mix-strength),
            var(--wui-color-fg-200)
          );
          --wui-color-fg-225: color-mix(
            in srgb,
            var(--w3m-color-mix) var(--w3m-color-mix-strength),
            var(--wui-color-fg-225)
          );
          --wui-color-fg-250: color-mix(
            in srgb,
            var(--w3m-color-mix) var(--w3m-color-mix-strength),
            var(--wui-color-fg-250)
          );
          --wui-color-fg-275: color-mix(
            in srgb,
            var(--w3m-color-mix) var(--w3m-color-mix-strength),
            var(--wui-color-fg-275)
          );
          --wui-color-fg-300: color-mix(
            in srgb,
            var(--w3m-color-mix) var(--w3m-color-mix-strength),
            var(--wui-color-fg-300)
          );
          --wui-color-fg-325: color-mix(
            in srgb,
            var(--w3m-color-mix) var(--w3m-color-mix-strength),
            var(--wui-color-fg-325)
          );
          --wui-color-fg-350: color-mix(
            in srgb,
            var(--w3m-color-mix) var(--w3m-color-mix-strength),
            var(--wui-color-fg-350)
          );

          --wui-color-bg-100: color-mix(
            in srgb,
            var(--w3m-color-mix) var(--w3m-color-mix-strength),
            var(--wui-color-bg-100)
          );
          --wui-color-bg-125: color-mix(
            in srgb,
            var(--w3m-color-mix) var(--w3m-color-mix-strength),
            var(--wui-color-bg-125)
          );
          --wui-color-bg-150: color-mix(
            in srgb,
            var(--w3m-color-mix) var(--w3m-color-mix-strength),
            var(--wui-color-bg-150)
          );
          --wui-color-bg-175: color-mix(
            in srgb,
            var(--w3m-color-mix) var(--w3m-color-mix-strength),
            var(--wui-color-bg-175)
          );
          --wui-color-bg-200: color-mix(
            in srgb,
            var(--w3m-color-mix) var(--w3m-color-mix-strength),
            var(--wui-color-bg-200)
          );
          --wui-color-bg-225: color-mix(
            in srgb,
            var(--w3m-color-mix) var(--w3m-color-mix-strength),
            var(--wui-color-bg-225)
          );
          --wui-color-bg-250: color-mix(
            in srgb,
            var(--w3m-color-mix) var(--w3m-color-mix-strength),
            var(--wui-color-bg-250)
          );
          --wui-color-bg-275: color-mix(
            in srgb,
            var(--w3m-color-mix) var(--w3m-color-mix-strength),
            var(--wui-color-bg-275)
          );
          --wui-color-bg-300: color-mix(
            in srgb,
            var(--w3m-color-mix) var(--w3m-color-mix-strength),
            var(--wui-color-bg-300)
          );
          --wui-color-bg-325: color-mix(
            in srgb,
            var(--w3m-color-mix) var(--w3m-color-mix-strength),
            var(--wui-color-bg-325)
          );
          --wui-color-bg-350: color-mix(
            in srgb,
            var(--w3m-color-mix) var(--w3m-color-mix-strength),
            var(--wui-color-bg-350)
          );

          --wui-color-success-100: color-mix(
            in srgb,
            var(--w3m-color-mix) var(--w3m-color-mix-strength),
            var(--wui-color-success-base-100)
          );
          --wui-color-success-125: color-mix(
            in srgb,
            var(--w3m-color-mix) var(--w3m-color-mix-strength),
            var(--wui-color-success-base-125)
          );

          --wui-color-warning-100: color-mix(
            in srgb,
            var(--w3m-color-mix) var(--w3m-color-mix-strength),
            var(--wui-color-warning-base-100)
          );

          --wui-color-error-100: color-mix(
            in srgb,
            var(--w3m-color-mix) var(--w3m-color-mix-strength),
            var(--wui-color-error-base-100)
          );
          --wui-color-blue-100: color-mix(
            in srgb,
            var(--w3m-color-mix) var(--w3m-color-mix-strength),
            var(--wui-color-blue-base-100)
          );
          --wui-color-blue-90: color-mix(
            in srgb,
            var(--w3m-color-mix) var(--w3m-color-mix-strength),
            var(--wui-color-blue-base-90)
          );
          --wui-color-error-125: color-mix(
            in srgb,
            var(--w3m-color-mix) var(--w3m-color-mix-strength),
            var(--wui-color-error-base-125)
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
            var(--wui-all-wallets-bg-100)
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

          --wui-wallet-button-bg: color-mix(
            in srgb,
            var(--w3m-color-mix) var(--w3m-color-mix-strength),
            var(--wui-wallet-button-bg-base)
          );
        }
      }
    `,light:te`
      :root {
        --w3m-color-mix: ${Ct((t==null?void 0:t["--w3m-color-mix"])||"#fff")};
        --w3m-accent: ${Ct(fr(t,"dark")["--w3m-accent"])};
        --w3m-default: #fff;

        --wui-color-modal-bg-base: ${Ct(fr(t,"dark")["--w3m-background"])};
        --wui-color-accent-base-100: var(--w3m-accent);

        --wui-color-blueberry-100: hsla(230, 100%, 67%, 1);
        --wui-color-blueberry-090: hsla(231, 76%, 61%, 1);
        --wui-color-blueberry-080: hsla(230, 59%, 55%, 1);
        --wui-color-blueberry-050: hsla(231, 100%, 70%, 0.1);

        --wui-color-fg-100: #e4e7e7;
        --wui-color-fg-125: #d0d5d5;
        --wui-color-fg-150: #a8b1b1;
        --wui-color-fg-175: #a8b0b0;
        --wui-color-fg-200: #949e9e;
        --wui-color-fg-225: #868f8f;
        --wui-color-fg-250: #788080;
        --wui-color-fg-275: #788181;
        --wui-color-fg-300: #6e7777;
        --wui-color-fg-325: #9a9a9a;
        --wui-color-fg-350: #363636;

        --wui-color-bg-100: #141414;
        --wui-color-bg-125: #191a1a;
        --wui-color-bg-150: #1e1f1f;
        --wui-color-bg-175: #222525;
        --wui-color-bg-200: #272a2a;
        --wui-color-bg-225: #2c3030;
        --wui-color-bg-250: #313535;
        --wui-color-bg-275: #363b3b;
        --wui-color-bg-300: #3b4040;
        --wui-color-bg-325: #252525;
        --wui-color-bg-350: #ffffff;

        --wui-color-success-base-100: #26d962;
        --wui-color-success-base-125: #30a46b;

        --wui-color-warning-base-100: #f3a13f;

        --wui-color-error-base-100: #f25a67;
        --wui-color-error-base-125: #df4a34;

        --wui-color-blue-base-100: rgba(102, 125, 255, 1);
        --wui-color-blue-base-90: rgba(102, 125, 255, 0.9);

        --wui-color-success-glass-001: rgba(38, 217, 98, 0.01);
        --wui-color-success-glass-002: rgba(38, 217, 98, 0.02);
        --wui-color-success-glass-005: rgba(38, 217, 98, 0.05);
        --wui-color-success-glass-010: rgba(38, 217, 98, 0.1);
        --wui-color-success-glass-015: rgba(38, 217, 98, 0.15);
        --wui-color-success-glass-020: rgba(38, 217, 98, 0.2);
        --wui-color-success-glass-025: rgba(38, 217, 98, 0.25);
        --wui-color-success-glass-030: rgba(38, 217, 98, 0.3);
        --wui-color-success-glass-060: rgba(38, 217, 98, 0.6);
        --wui-color-success-glass-080: rgba(38, 217, 98, 0.8);

        --wui-color-success-glass-reown-020: rgba(48, 164, 107, 0.2);

        --wui-color-warning-glass-reown-020: rgba(243, 161, 63, 0.2);

        --wui-color-error-glass-001: rgba(242, 90, 103, 0.01);
        --wui-color-error-glass-002: rgba(242, 90, 103, 0.02);
        --wui-color-error-glass-005: rgba(242, 90, 103, 0.05);
        --wui-color-error-glass-010: rgba(242, 90, 103, 0.1);
        --wui-color-error-glass-015: rgba(242, 90, 103, 0.15);
        --wui-color-error-glass-020: rgba(242, 90, 103, 0.2);
        --wui-color-error-glass-025: rgba(242, 90, 103, 0.25);
        --wui-color-error-glass-030: rgba(242, 90, 103, 0.3);
        --wui-color-error-glass-060: rgba(242, 90, 103, 0.6);
        --wui-color-error-glass-080: rgba(242, 90, 103, 0.8);

        --wui-color-error-glass-reown-020: rgba(223, 74, 52, 0.2);

        --wui-color-gray-glass-001: rgba(255, 255, 255, 0.01);
        --wui-color-gray-glass-002: rgba(255, 255, 255, 0.02);
        --wui-color-gray-glass-005: rgba(255, 255, 255, 0.05);
        --wui-color-gray-glass-010: rgba(255, 255, 255, 0.1);
        --wui-color-gray-glass-015: rgba(255, 255, 255, 0.15);
        --wui-color-gray-glass-020: rgba(255, 255, 255, 0.2);
        --wui-color-gray-glass-025: rgba(255, 255, 255, 0.25);
        --wui-color-gray-glass-030: rgba(255, 255, 255, 0.3);
        --wui-color-gray-glass-060: rgba(255, 255, 255, 0.6);
        --wui-color-gray-glass-080: rgba(255, 255, 255, 0.8);
        --wui-color-gray-glass-090: rgba(255, 255, 255, 0.9);

        --wui-color-dark-glass-100: rgba(42, 42, 42, 1);

        --wui-icon-box-bg-error-base-100: #3c2426;
        --wui-icon-box-bg-blue-base-100: #20303f;
        --wui-icon-box-bg-success-base-100: #1f3a28;
        --wui-icon-box-bg-inverse-base-100: #243240;

        --wui-all-wallets-bg-100: #222b35;

        --wui-avatar-border-base: #252525;

        --wui-thumbnail-border-base: #252525;

        --wui-wallet-button-bg-base: var(--wui-color-bg-125);

        --w3m-card-embedded-shadow-color: rgb(17 17 18 / 25%);
      }
    `,dark:te`
      :root {
        --w3m-color-mix: ${Ct((t==null?void 0:t["--w3m-color-mix"])||"#000")};
        --w3m-accent: ${Ct(fr(t,"light")["--w3m-accent"])};
        --w3m-default: #000;

        --wui-color-modal-bg-base: ${Ct(fr(t,"light")["--w3m-background"])};
        --wui-color-accent-base-100: var(--w3m-accent);

        --wui-color-blueberry-100: hsla(231, 100%, 70%, 1);
        --wui-color-blueberry-090: hsla(231, 97%, 72%, 1);
        --wui-color-blueberry-080: hsla(231, 92%, 74%, 1);

        --wui-color-fg-100: #141414;
        --wui-color-fg-125: #2d3131;
        --wui-color-fg-150: #474d4d;
        --wui-color-fg-175: #636d6d;
        --wui-color-fg-200: #798686;
        --wui-color-fg-225: #828f8f;
        --wui-color-fg-250: #8b9797;
        --wui-color-fg-275: #95a0a0;
        --wui-color-fg-300: #9ea9a9;
        --wui-color-fg-325: #9a9a9a;
        --wui-color-fg-350: #d0d0d0;

        --wui-color-bg-100: #ffffff;
        --wui-color-bg-125: #f5fafa;
        --wui-color-bg-150: #f3f8f8;
        --wui-color-bg-175: #eef4f4;
        --wui-color-bg-200: #eaf1f1;
        --wui-color-bg-225: #e5eded;
        --wui-color-bg-250: #e1e9e9;
        --wui-color-bg-275: #dce7e7;
        --wui-color-bg-300: #d8e3e3;
        --wui-color-bg-325: #f3f3f3;
        --wui-color-bg-350: #202020;

        --wui-color-success-base-100: #26b562;
        --wui-color-success-base-125: #30a46b;

        --wui-color-warning-base-100: #f3a13f;

        --wui-color-error-base-100: #f05142;
        --wui-color-error-base-125: #df4a34;

        --wui-color-blue-base-100: rgba(102, 125, 255, 1);
        --wui-color-blue-base-90: rgba(102, 125, 255, 0.9);

        --wui-color-success-glass-001: rgba(38, 181, 98, 0.01);
        --wui-color-success-glass-002: rgba(38, 181, 98, 0.02);
        --wui-color-success-glass-005: rgba(38, 181, 98, 0.05);
        --wui-color-success-glass-010: rgba(38, 181, 98, 0.1);
        --wui-color-success-glass-015: rgba(38, 181, 98, 0.15);
        --wui-color-success-glass-020: rgba(38, 181, 98, 0.2);
        --wui-color-success-glass-025: rgba(38, 181, 98, 0.25);
        --wui-color-success-glass-030: rgba(38, 181, 98, 0.3);
        --wui-color-success-glass-060: rgba(38, 181, 98, 0.6);
        --wui-color-success-glass-080: rgba(38, 181, 98, 0.8);

        --wui-color-success-glass-reown-020: rgba(48, 164, 107, 0.2);

        --wui-color-warning-glass-reown-020: rgba(243, 161, 63, 0.2);

        --wui-color-error-glass-001: rgba(240, 81, 66, 0.01);
        --wui-color-error-glass-002: rgba(240, 81, 66, 0.02);
        --wui-color-error-glass-005: rgba(240, 81, 66, 0.05);
        --wui-color-error-glass-010: rgba(240, 81, 66, 0.1);
        --wui-color-error-glass-015: rgba(240, 81, 66, 0.15);
        --wui-color-error-glass-020: rgba(240, 81, 66, 0.2);
        --wui-color-error-glass-025: rgba(240, 81, 66, 0.25);
        --wui-color-error-glass-030: rgba(240, 81, 66, 0.3);
        --wui-color-error-glass-060: rgba(240, 81, 66, 0.6);
        --wui-color-error-glass-080: rgba(240, 81, 66, 0.8);

        --wui-color-error-glass-reown-020: rgba(223, 74, 52, 0.2);

        --wui-icon-box-bg-error-base-100: #f4dfdd;
        --wui-icon-box-bg-blue-base-100: #d9ecfb;
        --wui-icon-box-bg-success-base-100: #daf0e4;
        --wui-icon-box-bg-inverse-base-100: #dcecfc;

        --wui-all-wallets-bg-100: #e8f1fa;

        --wui-avatar-border-base: #f3f4f4;

        --wui-thumbnail-border-base: #eaefef;

        --wui-wallet-button-bg-base: var(--wui-color-bg-125);

        --wui-color-gray-glass-001: rgba(0, 0, 0, 0.01);
        --wui-color-gray-glass-002: rgba(0, 0, 0, 0.02);
        --wui-color-gray-glass-005: rgba(0, 0, 0, 0.05);
        --wui-color-gray-glass-010: rgba(0, 0, 0, 0.1);
        --wui-color-gray-glass-015: rgba(0, 0, 0, 0.15);
        --wui-color-gray-glass-020: rgba(0, 0, 0, 0.2);
        --wui-color-gray-glass-025: rgba(0, 0, 0, 0.25);
        --wui-color-gray-glass-030: rgba(0, 0, 0, 0.3);
        --wui-color-gray-glass-060: rgba(0, 0, 0, 0.6);
        --wui-color-gray-glass-080: rgba(0, 0, 0, 0.8);
        --wui-color-gray-glass-090: rgba(0, 0, 0, 0.9);

        --wui-color-dark-glass-100: rgba(233, 233, 233, 1);

        --w3m-card-embedded-shadow-color: rgb(224 225 233 / 25%);
      }
    `}}const me=te`
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
`,ze=te`
  button,
  a {
    cursor: pointer;
    display: flex;
    justify-content: center;
    align-items: center;
    position: relative;
    transition:
      color var(--wui-duration-lg) var(--wui-ease-out-power-1),
      background-color var(--wui-duration-lg) var(--wui-ease-out-power-1),
      border var(--wui-duration-lg) var(--wui-ease-out-power-1),
      border-radius var(--wui-duration-lg) var(--wui-ease-out-power-1),
      box-shadow var(--wui-duration-lg) var(--wui-ease-out-power-1);
    will-change: background-color, color, border, box-shadow, border-radius;
    outline: none;
    border: none;
    column-gap: var(--wui-spacing-3xs);
    background-color: transparent;
    text-decoration: none;
  }

  wui-flex {
    transition: border-radius var(--wui-duration-lg) var(--wui-ease-out-power-1);
    will-change: border-radius;
  }

  button:disabled > wui-wallet-image,
  button:disabled > wui-all-wallets-image,
  button:disabled > wui-network-image,
  button:disabled > wui-image,
  button:disabled > wui-transaction-visual,
  button:disabled > wui-logo {
    filter: grayscale(1);
  }

  @media (hover: hover) and (pointer: fine) {
    button:hover:enabled {
      background-color: var(--wui-color-gray-glass-005);
    }

    button:active:enabled {
      background-color: var(--wui-color-gray-glass-010);
    }
  }

  button:disabled > wui-icon-box {
    opacity: 0.5;
  }

  input {
    border: none;
    outline: none;
    appearance: none;
  }
`,xs=te`
  .wui-color-inherit {
    color: var(--wui-color-inherit);
  }

  .wui-color-accent-100 {
    color: var(--wui-color-accent-100);
  }

  .wui-color-error-100 {
    color: var(--wui-color-error-100);
  }

  .wui-color-blue-100 {
    color: var(--wui-color-blue-100);
  }

  .wui-color-blue-90 {
    color: var(--wui-color-blue-90);
  }

  .wui-color-error-125 {
    color: var(--wui-color-error-125);
  }

  .wui-color-success-100 {
    color: var(--wui-color-success-100);
  }

  .wui-color-success-125 {
    color: var(--wui-color-success-125);
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

  .wui-color-fg-325 {
    color: var(--wui-color-fg-325);
  }

  .wui-color-fg-350 {
    color: var(--wui-color-fg-350);
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

  .wui-bg-color-error-125 {
    background-color: var(--wui-color-error-125);
  }

  .wui-bg-color-success-100 {
    background-color: var(--wui-color-success-100);
  }

  .wui-bg-color-success-125 {
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

  .wui-color-fg-325 {
    background-color: var(--wui-color-fg-325);
  }

  .wui-color-fg-350 {
    background-color: var(--wui-color-fg-350);
  }
`,Be={getSpacingStyles(t,e){if(Array.isArray(t))return t[e]?`var(--wui-spacing-${t[e]})`:void 0;if(typeof t=="string")return`var(--wui-spacing-${t})`},getFormattedDate(t){return new Intl.DateTimeFormat("en-US",{month:"short",day:"numeric"}).format(t)},getHostName(t){try{return new URL(t).hostname}catch{return""}},getTruncateString({string:t,charsStart:e,charsEnd:r,truncate:i}){return t.length<=e+r?t:i==="end"?`${t.substring(0,e)}...`:i==="start"?`...${t.substring(t.length-r)}`:`${t.substring(0,Math.floor(e))}...${t.substring(t.length-Math.floor(r))}`},generateAvatarColors(t){const e=t.toLowerCase().replace(/^0x/iu,"").replace(/[^a-f0-9]/gu,"").substring(0,6).padEnd(6,"0"),r=this.hexToRgb(e),i=getComputedStyle(document.documentElement).getPropertyValue("--w3m-border-radius-master"),n=100-3*Number(i==null?void 0:i.replace("px","")),s=`${n}% ${n}% at 65% 40%`,o=[];for(let a=0;a<5;a+=1){const c=this.tintColor(r,.15*a);o.push(`rgb(${c[0]}, ${c[1]}, ${c[2]})`)}return`
    --local-color-1: ${o[0]};
    --local-color-2: ${o[1]};
    --local-color-3: ${o[2]};
    --local-color-4: ${o[3]};
    --local-color-5: ${o[4]};
    --local-radial-circle: ${s}
   `},hexToRgb(t){const e=parseInt(t,16),r=e>>16&255,i=e>>8&255,n=e&255;return[r,i,n]},tintColor(t,e){const[r,i,n]=t,s=Math.round(r+(255-r)*e),o=Math.round(i+(255-i)*e),a=Math.round(n+(255-n)*e);return[s,o,a]},isNumber(t){return/^[0-9]+$/u.test(t)},getColorTheme(t){var e;return t||(typeof window<"u"&&window.matchMedia?(e=window.matchMedia("(prefers-color-scheme: dark)"))!=null&&e.matches?"dark":"light":"dark")},splitBalance(t){const e=t.split(".");return e.length===2?[e[0],e[1]]:["0","00"]},roundNumber(t,e,r){return t.toString().length>=e?Number(t).toFixed(r):t},formatNumberToLocalString(t,e=2){return t===void 0?"0.00":typeof t=="number"?t.toLocaleString("en-US",{maximumFractionDigits:e,minimumFractionDigits:e}):parseFloat(t).toLocaleString("en-US",{maximumFractionDigits:e,minimumFractionDigits:e})}};function Zm(t,e){const{kind:r,elements:i}=e;return{kind:r,elements:i,finisher(n){customElements.get(t)||customElements.define(t,n)}}}function Gm(t,e){return customElements.get(t)||customElements.define(t,e),e}function V(t){return function(e){return typeof e=="function"?Gm(t,e):Zm(t,e)}}function Km(t){if(t.length>=255)throw new TypeError("Alphabet too long");const e=new Uint8Array(256);for(let l=0;l<e.length;l++)e[l]=255;for(let l=0;l<t.length;l++){const u=t.charAt(l),d=u.charCodeAt(0);if(e[d]!==255)throw new TypeError(u+" is ambiguous");e[d]=l}const r=t.length,i=t.charAt(0),n=Math.log(r)/Math.log(256),s=Math.log(256)/Math.log(r);function o(l){if(l instanceof Uint8Array||(ArrayBuffer.isView(l)?l=new Uint8Array(l.buffer,l.byteOffset,l.byteLength):Array.isArray(l)&&(l=Uint8Array.from(l))),!(l instanceof Uint8Array))throw new TypeError("Expected Uint8Array");if(l.length===0)return"";let u=0,d=0,h=0;const p=l.length;for(;h!==p&&l[h]===0;)h++,u++;const v=(p-h)*s+1>>>0,g=new Uint8Array(v);for(;h!==p;){let A=l[h],x=0;for(let k=v-1;(A!==0||x<d)&&k!==-1;k--,x++)A+=256*g[k]>>>0,g[k]=A%r>>>0,A=A/r>>>0;if(A!==0)throw new Error("Non-zero carry");d=x,h++}let b=v-d;for(;b!==v&&g[b]===0;)b++;let C=i.repeat(u);for(;b<v;++b)C+=t.charAt(g[b]);return C}function a(l){if(typeof l!="string")throw new TypeError("Expected String");if(l.length===0)return new Uint8Array;let u=0,d=0,h=0;for(;l[u]===i;)d++,u++;const p=(l.length-u)*n+1>>>0,v=new Uint8Array(p);for(;u<l.length;){const A=l.charCodeAt(u);if(A>255)return;let x=e[A];if(x===255)return;let k=0;for(let P=p-1;(x!==0||k<h)&&P!==-1;P--,k++)x+=r*v[P]>>>0,v[P]=x%256>>>0,x=x/256>>>0;if(x!==0)throw new Error("Non-zero carry");h=k,u++}let g=p-h;for(;g!==p&&v[g]===0;)g++;const b=new Uint8Array(d+(p-g));let C=d;for(;g!==p;)b[C++]=v[g++];return b}function c(l){const u=a(l);if(u)return u;throw new Error("Non-base"+r+" character")}return{encode:o,decodeUnsafe:a,decode:c}}var Ym="123456789ABCDEFGHJKLMNPQRSTUVWXYZabcdefghijkmnopqrstuvwxyz",Jm=Km(Ym);const Ds={ERROR_CODE_UNRECOGNIZED_CHAIN_ID:4902,ERROR_CODE_DEFAULT:5e3,ERROR_INVALID_CHAIN_ID:32603},Th={gasPriceOracle:{address:"0x420000000000000000000000000000000000000F"},l1Block:{address:"0x4200000000000000000000000000000000000015"},l2CrossDomainMessenger:{address:"0x4200000000000000000000000000000000000007"},l2Erc721Bridge:{address:"0x4200000000000000000000000000000000000014"},l2StandardBridge:{address:"0x4200000000000000000000000000000000000010"},l2ToL1MessagePasser:{address:"0x4200000000000000000000000000000000000016"}},Xm={block:jf({format(t){var e;return{transactions:(e=t.transactions)==null?void 0:e.map(r=>{if(typeof r=="string")return r;const i=Uc(r);return i.typeHex==="0x7e"&&(i.isSystemTx=r.isSystemTx,i.mint=r.mint?Pi(r.mint):void 0,i.sourceHash=r.sourceHash,i.type="deposit"),i}),stateRoot:t.stateRoot}}}),transaction:Uf({format(t){const e={};return t.type==="0x7e"&&(e.isSystemTx=t.isSystemTx,e.mint=t.mint?Pi(t.mint):void 0,e.sourceHash=t.sourceHash,e.type="deposit"),e}}),transactionReceipt:Pg({format(t){return{l1GasPrice:t.l1GasPrice?Pi(t.l1GasPrice):null,l1GasUsed:t.l1GasUsed?Pi(t.l1GasUsed):null,l1Fee:t.l1Fee?Pi(t.l1Fee):null,l1FeeScalar:t.l1FeeScalar?Number(t.l1FeeScalar):null}}})};function Qm(t,e){return r2(t)?t2(t):yg(t,e)}const e2={transaction:Qm};function t2(t){i2(t);const{sourceHash:e,data:r,from:i,gas:n,isSystemTx:s,mint:o,to:a,value:c}=t,l=[e,i,a??"0x",o?ae(o):"0x",c?ae(c):"0x",n?ae(n):"0x",s?"0x1":"0x",r??"0x"];return ms(["0x7e",en(l)])}function r2(t){return t.type==="deposit"||typeof t.sourceHash<"u"}function i2(t){const{from:e,to:r}=t;if(e&&!ti(e))throw new ei({address:e});if(r&&!ti(r))throw new ei({address:r})}const J={contracts:Th,formatters:Xm,serializers:e2};({...J.contracts});({...J.contracts});({...J.contracts});({...J.contracts});({...J.contracts},_t({id:53456,name:"BirdLayer",nativeCurrency:{decimals:18,name:"Ether",symbol:"ETH"},rpcUrls:{default:{http:["https://rpc.birdlayer.xyz","https://rpc1.birdlayer.xyz"],webSocket:["wss://rpc.birdlayer.xyz/ws"]}},blockExplorers:{default:{name:"BirdLayer Explorer",url:"https://scan.birdlayer.xyz"}}}));({...J.contracts});const Ia=1;_t({...J,id:60808,name:"BOB",nativeCurrency:{decimals:18,name:"ETH",symbol:"ETH"},rpcUrls:{default:{http:["https://rpc.gobob.xyz"],webSocket:["wss://rpc.gobob.xyz"]}},blockExplorers:{default:{name:"BOB Explorer",url:"https://explorer.gobob.xyz"}},contracts:{...J.contracts,multicall3:{address:"0xcA11bde05977b3631167028862bE2a173976CA11",blockCreated:23131},l2OutputOracle:{[Ia]:{address:"0xdDa53E23f8a32640b04D7256e651C1db98dB11C1",blockCreated:4462615}},portal:{[Ia]:{address:"0x8AdeE124447435fE03e3CD24dF3f4cAE32E65a3E",blockCreated:4462615}}},sourceId:Ia});const Na=11155111;_t({...J,id:808813,name:"BOB Sepolia",nativeCurrency:{decimals:18,name:"ETH",symbol:"ETH"},rpcUrls:{default:{http:["https://bob-sepolia.rpc.gobob.xyz"],webSocket:["wss://bob-sepolia.rpc.gobob.xyz"]}},blockExplorers:{default:{name:"BOB Sepolia Explorer",url:"https://bob-sepolia.explorer.gobob.xyz"}},contracts:{...J.contracts,multicall3:{address:"0xcA11bde05977b3631167028862bE2a173976CA11",blockCreated:35677},l2OutputOracle:{[Na]:{address:"0x14D0069452b4AE2b250B395b8adAb771E4267d2f",blockCreated:4462615}},portal:{[Na]:{address:"0x867B1Aa872b9C8cB5E9F7755feDC45BB24Ad0ae4",blockCreated:4462615}}},testnet:!0,sourceId:Na});const n2={contracts:Th};({...n2.contracts},_t({id:44,name:"Crab Network",nativeCurrency:{decimals:18,name:"Crab Network Native Token",symbol:"CRAB"},rpcUrls:{default:{http:["https://crab-rpc.darwinia.network"],webSocket:["wss://crab-rpc.darwinia.network"]}},blockExplorers:{default:{name:"Blockscout",url:"https://crab-scan.darwinia.network"}},contracts:{multicall3:{address:"0xca11bde05977b3631167028862be2a173976ca11",blockCreated:3032593}}})),_t({id:66665,name:"Creator",nativeCurrency:{decimals:18,name:"Ether",symbol:"ETH"},rpcUrls:{default:{http:["https://rpc.creatorchain.io"]}},blockExplorers:{default:{name:"Explorer",url:"https://explorer.creatorchain.io"}},contracts:{multicall3:{address:"0xcA11bde05977b3631167028862bE2a173976CA11"}},testnet:!0}),{...J.contracts},{...J.contracts},_t({id:53457,name:"DODOchain Testnet",nativeCurrency:{decimals:18,name:"DODO",symbol:"DODO"},rpcUrls:{default:{http:["https://dodochain-testnet.alt.technology"],webSocket:["wss://dodochain-testnet.alt.technology/ws"]}},blockExplorers:{default:{name:"DODOchain Testnet (Sepolia) Explorer",url:"https://testnet-scan.dodochain.com"}},testnet:!0});({...J.contracts});({...J.contracts});({...J.contracts});({...J.contracts});({...J.contracts});const s2=11155111;_t({...J,id:3397901,network:"funkiSepolia",name:"Funki Sepolia Sandbox",nativeCurrency:{name:"Ether",symbol:"ETH",decimals:18},rpcUrls:{default:{http:["https://funki-testnet.alt.technology"]}},blockExplorers:{default:{name:"Funki Sepolia Sandbox Explorer",url:"https://sepolia-sandbox.funkichain.com/"}},testnet:!0,contracts:{...J.contracts,multicall3:{address:"0xca11bde05977b3631167028862be2a173976ca11",blockCreated:1620204}},sourceId:s2});const Hs=17e3;_t({...J,name:"Garnet Testnet",testnet:!0,id:17069,sourceId:Hs,nativeCurrency:{name:"Ether",symbol:"ETH",decimals:18},rpcUrls:{default:{http:["https://rpc.garnetchain.com"],webSocket:["wss://rpc.garnetchain.com"]}},blockExplorers:{default:{name:"Blockscout",url:"https://explorer.garnetchain.com"}},contracts:{...J.contracts,multicall3:{address:"0xca11bde05977b3631167028862be2a173976ca11"},portal:{[Hs]:{address:"0x57ee40586fbE286AfC75E67cb69511A6D9aF5909",blockCreated:1274684}},l2OutputOracle:{[Hs]:{address:"0xCb8E7AC561b8EF04F2a15865e9fbc0766FEF569B",blockCreated:1274684}},l1StandardBridge:{[Hs]:{address:"0x09bcDd311FE398F80a78BE37E489f5D440DB95DE",blockCreated:1274684}}}});({...J.contracts});({...J.contracts},_t({id:701,name:"Koi Network",nativeCurrency:{decimals:18,name:"Koi Network Native Token",symbol:"KRING"},rpcUrls:{default:{http:["https://koi-rpc.darwinia.network"],webSocket:["wss://koi-rpc.darwinia.network"]}},blockExplorers:{default:{name:"Blockscout",url:"https://koi-scan.darwinia.network"}},contracts:{multicall3:{address:"0xca11bde05977b3631167028862be2a173976ca11",blockCreated:180001}},testnet:!0}));({...J.contracts});({...J.contracts});({...J.contracts});({...J.contracts});({...J.contracts});({...J.contracts});({...J.contracts});({...J.contracts});({...J.contracts});({...J.contracts});const Eu=11155111;_t({...J,name:"Pyrope Testnet",testnet:!0,id:695569,sourceId:Eu,nativeCurrency:{name:"Ether",symbol:"ETH",decimals:18},rpcUrls:{default:{http:["https://rpc.pyropechain.com"],webSocket:["wss://rpc.pyropechain.com"]}},blockExplorers:{default:{name:"Blockscout",url:"https://pyrope.blockscout.com"}},contracts:{...J.contracts,l1StandardBridge:{[Eu]:{address:"0xC24932c31D9621aE9e792576152B7ef010cFC2F8"}}}});const Ws=1;_t({...J,name:"Redstone",id:690,sourceId:Ws,nativeCurrency:{decimals:18,name:"Ether",symbol:"ETH"},rpcUrls:{default:{http:["https://rpc.redstonechain.com"],webSocket:["wss://rpc.redstonechain.com"]}},blockExplorers:{default:{name:"Blockscout",url:"https://explorer.redstone.xyz"}},contracts:{...J.contracts,multicall3:{address:"0xca11bde05977b3631167028862be2a173976ca11"},portal:{[Ws]:{address:"0xC7bCb0e8839a28A1cFadd1CF716de9016CdA51ae",blockCreated:19578329}},l2OutputOracle:{[Ws]:{address:"0xa426A052f657AEEefc298b3B5c35a470e4739d69",blockCreated:19578337}},l1StandardBridge:{[Ws]:{address:"0xc473ca7E02af24c129c2eEf51F2aDf0411c1Df69",blockCreated:19578331}}}});({...J.contracts});({...J.contracts});({...J.contracts});({...J.contracts});({...J.contracts});({...J.contracts});({...J.contracts});({...J.contracts});({...J.contracts});({...J.contracts},{...J.contracts}),{...J.contracts};({...J.contracts});({...J.contracts});({...J.contracts});({...J.contracts});({...J.contracts});({...J.contracts});({...J.contracts});function Di(t){return{formatters:void 0,fees:void 0,serializers:void 0,...t}}const Au=Di({id:"5eykt4UsFv8P8NJdTREpY1vzqKqZKvdp",name:"Solana",network:"solana-mainnet",nativeCurrency:{name:"Solana",symbol:"SOL",decimals:9},rpcUrls:{default:{http:["https://rpc.walletconnect.org/v1"]}},blockExplorers:{default:{name:"Solscan",url:"https://solscan.io"}},testnet:!1,chainNamespace:"solana",caipNetworkId:"solana:5eykt4UsFv8P8NJdTREpY1vzqKqZKvdp",deprecatedCaipNetworkId:"solana:4sGjMW1sUnHzSxGspuhpqLDx6wiyjNtZ"}),ku=Di({id:"EtWTRABZaYq6iMfeYKouRu166VU2xqa1",name:"Solana Devnet",network:"solana-devnet",nativeCurrency:{name:"Solana",symbol:"SOL",decimals:9},rpcUrls:{default:{http:["https://rpc.walletconnect.org/v1"]}},blockExplorers:{default:{name:"Solscan",url:"https://solscan.io"}},testnet:!0,chainNamespace:"solana",caipNetworkId:"solana:EtWTRABZaYq6iMfeYKouRu166VU2xqa1",deprecatedCaipNetworkId:"solana:8E9rvCKLFQia2Y35HXjjpWzj8weVo44K"});Di({id:"4uhcVJyU9pJkvQyS88uRDiswHXSCkY3z",name:"Solana Testnet",network:"solana-testnet",nativeCurrency:{name:"Solana",symbol:"SOL",decimals:9},rpcUrls:{default:{http:["https://rpc.walletconnect.org/v1"]}},blockExplorers:{default:{name:"Solscan",url:"https://solscan.io"}},testnet:!0,chainNamespace:"solana",caipNetworkId:"solana:4uhcVJyU9pJkvQyS88uRDiswHXSCkY3z"}),Di({id:"000000000019d6689c085ae165831e93",caipNetworkId:"bip122:000000000019d6689c085ae165831e93",chainNamespace:"bip122",name:"Bitcoin",nativeCurrency:{name:"Bitcoin",symbol:"BTC",decimals:8},rpcUrls:{default:{http:["https://rpc.walletconnect.org/v1"]}}}),Di({id:"000000000933ea01ad0ee984209779ba",caipNetworkId:"bip122:000000000933ea01ad0ee984209779ba",chainNamespace:"bip122",name:"Bitcoin Testnet",nativeCurrency:{name:"Bitcoin",symbol:"BTC",decimals:8},rpcUrls:{default:{http:["https://rpc.walletconnect.org/v1"]}},testnet:!0});const o2={solana:["solana_signMessage","solana_signTransaction","solana_requestAccounts","solana_getAccounts","solana_signAllTransactions","solana_signAndSendTransaction"],eip155:["eth_accounts","eth_requestAccounts","eth_sendRawTransaction","eth_sign","eth_signTransaction","eth_signTypedData","eth_signTypedData_v3","eth_signTypedData_v4","eth_sendTransaction","personal_sign","wallet_switchEthereumChain","wallet_addEthereumChain","wallet_getPermissions","wallet_requestPermissions","wallet_registerOnboarding","wallet_watchAsset","wallet_scanQRCode","wallet_getCallsStatus","wallet_showCallsStatus","wallet_sendCalls","wallet_getCapabilities","wallet_grantPermissions","wallet_revokePermissions","wallet_getAssets"],bip122:["sendTransfer","signMessage","signPsbt","getAccountAddresses"]},Oh={getMethodsByChainNamespace(t){return o2[t]||[]},createDefaultNamespace(t){return{methods:this.getMethodsByChainNamespace(t),events:["accountsChanged","chainChanged"],chains:[],rpcMap:{}}},applyNamespaceOverrides(t,e){if(!e)return{...t};const r={...t},i=new Set;if(e.methods&&Object.keys(e.methods).forEach(n=>i.add(n)),e.chains&&Object.keys(e.chains).forEach(n=>i.add(n)),e.events&&Object.keys(e.events).forEach(n=>i.add(n)),e.rpcMap&&Object.keys(e.rpcMap).forEach(n=>{const[s]=n.split(":");s&&i.add(s)}),i.forEach(n=>{r[n]||(r[n]=this.createDefaultNamespace(n))}),e.methods&&Object.entries(e.methods).forEach(([n,s])=>{r[n]&&(r[n].methods=s)}),e.chains&&Object.entries(e.chains).forEach(([n,s])=>{r[n]&&(r[n].chains=s)}),e.events&&Object.entries(e.events).forEach(([n,s])=>{r[n]&&(r[n].events=s)}),e.rpcMap){const n=new Set;Object.entries(e.rpcMap).forEach(([s,o])=>{const[a,c]=s.split(":");!a||!c||!r[a]||(r[a].rpcMap||(r[a].rpcMap={}),n.has(a)||(r[a].rpcMap={},n.add(a)),r[a].rpcMap[c]=o)})}return r},createNamespaces(t,e){const r=t.reduce((i,n)=>{const{id:s,chainNamespace:o,rpcUrls:a}=n,c=a.default.http[0];i[o]||(i[o]=this.createDefaultNamespace(o));const l=`${o}:${s}`,u=i[o];switch(u.chains.push(l),l){case Au.caipNetworkId:u.chains.push(Au.deprecatedCaipNetworkId);break;case ku.caipNetworkId:u.chains.push(ku.deprecatedCaipNetworkId);break}return u!=null&&u.rpcMap&&c&&(u.rpcMap[s]=c),i},{});return this.applyNamespaceOverrides(r,e)},resolveReownName:async t=>{var r;const e=await yh.resolveName(t);return((r=(Object.values(e==null?void 0:e.addresses)||[])[0])==null?void 0:r.address)||!1},getChainsFromNamespaces(t={}){return Object.values(t).flatMap(e=>{const r=e.chains||[],i=e.accounts.map(n=>{const[s,o]=n.split(":");return`${s}:${o}`});return Array.from(new Set([...r,...i]))})},isSessionEventData(t){return typeof t=="object"&&t!==null&&"id"in t&&"topic"in t&&"params"in t&&typeof t.params=="object"&&t.params!==null&&"chainId"in t.params&&"event"in t.params&&typeof t.params.event=="object"&&t.params.event!==null}};class $h{constructor({provider:e,namespace:r}){this.id=Q.CONNECTOR_ID.WALLET_CONNECT,this.name=So.ConnectorNamesMap[Q.CONNECTOR_ID.WALLET_CONNECT],this.type="WALLET_CONNECT",this.imageId=So.ConnectorImageIds[Q.CONNECTOR_ID.WALLET_CONNECT],this.getCaipNetworks=w.getCaipNetworks.bind(w),this.caipNetworks=this.getCaipNetworks(),this.provider=e,this.chain=r}get chains(){return this.getCaipNetworks()}async connectWalletConnect(){if(!await this.authenticate()){const e=this.getCaipNetworks(),r=O.state.universalProviderConfigOverride,i=Oh.createNamespaces(e,r);await this.provider.connect({optionalNamespaces:i})}return{clientId:await this.provider.client.core.crypto.getClientId(),session:this.provider.session}}async disconnect(){await this.provider.disconnect()}async authenticate(){const e=this.chains.map(r=>r.caipNetworkId);return mr.universalProviderAuthenticate({universalProvider:this.provider,chains:e,methods:a2})}}const a2=["eth_accounts","eth_requestAccounts","eth_sendRawTransaction","eth_sign","eth_signTransaction","eth_signTypedData","eth_signTypedData_v3","eth_signTypedData_v4","eth_sendTransaction","personal_sign","wallet_switchEthereumChain","wallet_addEthereumChain","wallet_getPermissions","wallet_requestPermissions","wallet_registerOnboarding","wallet_watchAsset","wallet_scanQRCode","wallet_getCallsStatus","wallet_sendCalls","wallet_getCapabilities","wallet_grantPermissions","wallet_revokePermissions","wallet_getAssets"];class c2{constructor(e){this.availableConnectors=[],this.eventListeners=new Map,this.getCaipNetworks=r=>w.getCaipNetworks(r),e&&this.construct(e)}construct(e){this.projectId=e.projectId,this.namespace=e.namespace,this.adapterType=e.adapterType}get connectors(){return this.availableConnectors}get networks(){return this.getCaipNetworks(this.namespace)}setAuthProvider(e){this.addConnector({id:Q.CONNECTOR_ID.AUTH,type:"AUTH",name:Q.CONNECTOR_NAMES.AUTH,provider:e,imageId:So.ConnectorImageIds[Q.CONNECTOR_ID.AUTH],chain:this.namespace,chains:[]})}addConnector(...e){const r=new Set;this.availableConnectors=[...e,...this.availableConnectors].filter(i=>r.has(i.id)?!1:(r.add(i.id),!0)),this.emit("connectors",this.availableConnectors)}setStatus(e,r){Y.setStatus(e,r)}on(e,r){var i;this.eventListeners.has(e)||this.eventListeners.set(e,new Set),(i=this.eventListeners.get(e))==null||i.add(r)}off(e,r){const i=this.eventListeners.get(e);i&&i.delete(r)}removeAllEventListeners(){this.eventListeners.forEach(e=>{e.clear()})}emit(e,r){const i=this.eventListeners.get(e);i&&i.forEach(n=>n(r))}async connectWalletConnect(e){return{clientId:(await this.getWalletConnectConnector().connectWalletConnect()).clientId}}async switchNetwork(e){var s;const{caipNetwork:r,providerType:i}=e;if(!e.provider)return;const n="provider"in e.provider?e.provider.provider:e.provider;if(i==="WALLET_CONNECT"){n.setDefaultChain(r.caipNetworkId);return}if(n&&i==="AUTH"){const o=n,a=(s=Y.state.preferredAccountTypes)==null?void 0:s[r.chainNamespace];await o.switchNetwork(r.caipNetworkId);const c=await o.getUser({chainId:r.caipNetworkId,preferredAccountType:a});this.emit("switchNetwork",c)}}getWalletConnectConnector(){const e=this.connectors.find(r=>r instanceof $h);if(!e)throw new Error("WalletConnectConnector not found");return e}}class l2 extends c2{setUniversalProvider(e){this.addConnector(new $h({provider:e,caipNetworks:this.getCaipNetworks(),namespace:this.namespace}))}async connect(e){return Promise.resolve({id:"WALLET_CONNECT",type:"WALLET_CONNECT",chainId:Number(e.chainId),provider:this.provider,address:""})}async disconnect(){try{await this.getWalletConnectConnector().disconnect()}catch(e){console.warn("UniversalAdapter:disconnect - error",e)}}async getAccounts({namespace:e}){var i,n,s,o,a;const r=((a=(o=(s=(n=(i=this.provider)==null?void 0:i.session)==null?void 0:n.namespaces)==null?void 0:s[e])==null?void 0:o.accounts)==null?void 0:a.map(c=>{const[,,l]=c.split(":");return l}).filter((c,l,u)=>u.indexOf(c)===l))||[];return Promise.resolve({accounts:r.map(c=>M.createAccount(e,c,e==="bip122"?"payment":"eoa"))})}async syncConnectors(){return Promise.resolve()}async getBalance(e){var i,n,s,o,a;if(!(e.caipNetwork&&Oe.BALANCE_SUPPORTED_CHAINS.includes((i=e.caipNetwork)==null?void 0:i.chainNamespace))||(n=e.caipNetwork)!=null&&n.testnet)return{balance:"0.00",symbol:((s=e.caipNetwork)==null?void 0:s.nativeCurrency.symbol)||""};if(Y.state.balanceLoading&&e.chainId===((o=w.state.activeCaipNetwork)==null?void 0:o.id))return{balance:Y.state.balance||"0.00",symbol:Y.state.balanceSymbol||""};const r=(await Y.fetchTokenBalance()).find(c=>{var l,u;return c.chainId===`${(l=e.caipNetwork)==null?void 0:l.chainNamespace}:${e.chainId}`&&c.symbol===((u=e.caipNetwork)==null?void 0:u.nativeCurrency.symbol)});return{balance:(r==null?void 0:r.quantity.numeric)||"0.00",symbol:(r==null?void 0:r.symbol)||((a=e.caipNetwork)==null?void 0:a.nativeCurrency.symbol)||""}}async signMessage(e){var o,a,c;const{provider:r,message:i,address:n}=e;if(!r)throw new Error("UniversalAdapter:signMessage - provider is undefined");let s="";return((o=w.state.activeCaipNetwork)==null?void 0:o.chainNamespace)===Q.CHAIN.SOLANA?s=(await r.request({method:"solana_signMessage",params:{message:Jm.encode(new TextEncoder().encode(i)),pubkey:n}},(a=w.state.activeCaipNetwork)==null?void 0:a.caipNetworkId)).signature:s=await r.request({method:"personal_sign",params:[i,n]},(c=w.state.activeCaipNetwork)==null?void 0:c.caipNetworkId),{signature:s}}async estimateGas(){return Promise.resolve({gas:BigInt(0)})}async getProfile(){return Promise.resolve({profileImage:"",profileName:""})}async sendTransaction(){return Promise.resolve({hash:""})}walletGetAssets(e){return Promise.resolve({})}async writeContract(){return Promise.resolve({hash:""})}async getEnsAddress(){return Promise.resolve({address:!1})}parseUnits(){return 0n}formatUnits(){return"0"}async getCapabilities(){return Promise.resolve({})}async grantPermissions(){return Promise.resolve({})}async revokePermissions(){return Promise.resolve("0x")}async syncConnection(){return Promise.resolve({id:"WALLET_CONNECT",type:"WALLET_CONNECT",chainId:1,provider:this.provider,address:""})}async switchNetwork(e){var n,s,o,a,c,l;const{caipNetwork:r}=e,i=this.getWalletConnectConnector();if(r.chainNamespace===Q.CHAIN.EVM)try{await((n=i.provider)==null?void 0:n.request({method:"wallet_switchEthereumChain",params:[{chainId:ae(r.id)}]}))}catch(u){if(u.code===Ds.ERROR_CODE_UNRECOGNIZED_CHAIN_ID||u.code===Ds.ERROR_INVALID_CHAIN_ID||u.code===Ds.ERROR_CODE_DEFAULT||((o=(s=u==null?void 0:u.data)==null?void 0:s.originalError)==null?void 0:o.code)===Ds.ERROR_CODE_UNRECOGNIZED_CHAIN_ID)try{await((l=i.provider)==null?void 0:l.request({method:"wallet_addEthereumChain",params:[{chainId:ae(r.id),rpcUrls:[(a=r==null?void 0:r.rpcUrls.chainDefault)==null?void 0:a.http],chainName:r.name,nativeCurrency:r.nativeCurrency,blockExplorerUrls:[(c=r.blockExplorers)==null?void 0:c.default.url]}]}))}catch{throw new Error("Chain is not supported")}}i.provider.setDefaultChain(r.caipNetworkId)}getWalletConnectProvider(){var e;return(e=this.connectors.find(r=>r.type==="WALLET_CONNECT"))==null?void 0:e.provider}}class u2{constructor(e){this.chainNamespaces=[],this.reportedAlertErrors={},this.getCaipNetwork=(r,i)=>{var n,s,o,a;if(r){const c=(s=(n=w.getNetworkData(r))==null?void 0:n.requestedCaipNetworks)==null?void 0:s.find(u=>u.id===i);return c||((o=w.getNetworkData(r))==null?void 0:o.caipNetwork)||((a=w.getRequestedCaipNetworks(r).filter(u=>u.chainNamespace===r))==null?void 0:a[0])}return w.state.activeCaipNetwork||this.defaultCaipNetwork},this.getCaipNetworkId=()=>{const r=this.getCaipNetwork();if(r)return r.id},this.getCaipNetworks=r=>w.getCaipNetworks(r),this.getActiveChainNamespace=()=>w.state.activeChain,this.setRequestedCaipNetworks=(r,i)=>{w.setRequestedCaipNetworks(r,i)},this.getApprovedCaipNetworkIds=()=>w.getAllApprovedCaipNetworkIds(),this.getCaipAddress=r=>w.state.activeChain===r||!r?w.state.activeCaipAddress:w.getAccountProp("caipAddress",r),this.setClientId=r=>{ie.setClientId(r)},this.getProvider=r=>Ne.getProvider(r),this.getProviderType=r=>Ne.getProviderId(r),this.getPreferredAccountType=r=>{var i;return(i=Y.state.preferredAccountTypes)==null?void 0:i[r]},this.setCaipAddress=(r,i)=>{Y.setCaipAddress(r,i)},this.setBalance=(r,i,n)=>{Y.setBalance(r,i,n)},this.setProfileName=(r,i)=>{Y.setProfileName(r,i)},this.setProfileImage=(r,i)=>{Y.setProfileImage(r,i)},this.setUser=(r,i)=>{Y.setUser(r,i),O.state.enableEmbedded&&he.close()},this.resetAccount=r=>{Y.resetAccount(r)},this.setCaipNetwork=r=>{w.setActiveCaipNetwork(r)},this.setCaipNetworkOfNamespace=(r,i)=>{w.setChainNetworkData(i,{caipNetwork:r})},this.setAllAccounts=(r,i)=>{Y.setAllAccounts(r,i),O.setHasMultipleAddresses((r==null?void 0:r.length)>1)},this.setStatus=(r,i)=>{Y.setStatus(r,i),F.isConnected()?G.setConnectionStatus("connected"):G.setConnectionStatus("disconnected")},this.getAddressByChainNamespace=r=>w.getAccountProp("address",r),this.setConnectors=r=>{const i=[...F.state.allConnectors,...r];F.setConnectors(i)},this.fetchIdentity=r=>ie.fetchIdentity(r),this.getReownName=r=>yh.getNamesForAddress(r),this.getConnectors=()=>F.getConnectors(),this.getConnectorImage=r=>$e.getConnectorImage(r),this.setConnectedWalletInfo=(r,i)=>{const n=Ne.getProviderId(i),s=r?{...r,type:n}:void 0;Y.setConnectedWalletInfo(s,i)},this.getIsConnectedState=()=>!!w.state.activeCaipAddress,this.addAddressLabel=(r,i,n)=>{Y.addAddressLabel(r,i,n)},this.removeAddressLabel=(r,i)=>{Y.removeAddressLabel(r,i)},this.getAddress=r=>w.state.activeChain===r||!r?Y.state.address:w.getAccountProp("address",r),this.setApprovedCaipNetworksData=r=>w.setApprovedCaipNetworksData(r),this.resetNetwork=r=>{w.resetNetwork(r)},this.addConnector=r=>{F.addConnector(r)},this.resetWcConnection=()=>{K.resetWcConnection()},this.setAddressExplorerUrl=(r,i)=>{Y.setAddressExplorerUrl(r,i)},this.setSmartAccountDeployed=(r,i)=>{Y.setSmartAccountDeployed(r,i)},this.setSmartAccountEnabledNetworks=(r,i)=>{w.setSmartAccountEnabledNetworks(r,i)},this.setPreferredAccountType=(r,i)=>{Y.setPreferredAccountType(r,i)},this.setEIP6963Enabled=r=>{O.setEIP6963Enabled(r)},this.handleUnsafeRPCRequest=()=>{if(this.isOpen()){if(this.isTransactionStackEmpty())return;this.redirect("ApproveTransaction")}else this.open({view:"ApproveTransaction"})},this.options=e,this.version=e.sdkVersion,this.caipNetworks=this.extendCaipNetworks(e),this.chainNamespaces=this.getChainNamespacesSet(e.adapters,this.caipNetworks),this.defaultCaipNetwork=this.extendDefaultCaipNetwork(e),this.chainAdapters=this.createAdapters(e.adapters),this.initialize(e)}getChainNamespacesSet(e,r){const i=e==null?void 0:e.map(s=>s.namespace).filter(s=>!!s);if(i!=null&&i.length)return[...new Set(i)];const n=r==null?void 0:r.map(s=>s.chainNamespace);return[...new Set(n)]}async initialize(e){this.initControllers(e),await this.initChainAdapters(),await this.injectModalUi(),this.sendInitializeEvent(e),tr.set({initialized:!0}),await this.syncExistingConnection()}sendInitializeEvent(e){var i;const{...r}=e;delete r.adapters,delete r.universalProvider,le.sendEvent({type:"track",event:"INITIALIZE",properties:{...r,networks:e.networks.map(n=>n.id),siweConfig:{options:((i=e.siweConfig)==null?void 0:i.options)||{}}}})}initControllers(e){this.initializeOptionsController(e),this.initializeChainController(e),this.initializeThemeController(e),this.initializeConnectionController(e),this.initializeConnectorController()}initializeThemeController(e){e.themeMode&&Te.setThemeMode(e.themeMode),e.themeVariables&&Te.setThemeVariables(e.themeVariables)}initializeChainController(e){if(!this.connectionControllerClient||!this.networkControllerClient)throw new Error("ConnectionControllerClient and NetworkControllerClient must be set");w.initialize(e.adapters??[],this.caipNetworks,{connectionControllerClient:this.connectionControllerClient,networkControllerClient:this.networkControllerClient});const r=this.getDefaultNetwork();r&&w.setActiveCaipNetwork(r)}initializeConnectionController(e){K.setWcBasic(e.basic??!1)}initializeConnectorController(){F.initialize(this.chainNamespaces)}initializeOptionsController(e){var s;O.setDebug(e.debug!==!1),O.setEnableWalletConnect(e.enableWalletConnect!==!1),O.setEnableWalletGuide(e.enableWalletGuide!==!1),O.setEnableWallets(e.enableWallets!==!1),O.setEIP6963Enabled(e.enableEIP6963!==!1),O.setEnableNetworkSwitch(e.enableNetworkSwitch!==!1),O.setEnableAuthLogger(e.enableAuthLogger!==!1),O.setCustomRpcUrls(e.customRpcUrls),O.setSdkVersion(e.sdkVersion),O.setProjectId(e.projectId),O.setEnableEmbedded(e.enableEmbedded),O.setAllWallets(e.allWallets),O.setIncludeWalletIds(e.includeWalletIds),O.setExcludeWalletIds(e.excludeWalletIds),O.setFeaturedWalletIds(e.featuredWalletIds),O.setTokens(e.tokens),O.setTermsConditionsUrl(e.termsConditionsUrl),O.setPrivacyPolicyUrl(e.privacyPolicyUrl),O.setCustomWallets(e.customWallets),O.setFeatures(e.features),O.setAllowUnsupportedChain(e.allowUnsupportedChain),O.setUniversalProviderConfigOverride(e.universalProviderConfigOverride),O.setDefaultAccountTypes(e.defaultAccountTypes);const r=G.getPreferredAccountTypes(),i={...O.state.defaultAccountTypes,...r};Y.setPreferredAccountTypes(i);const n=this.getDefaultMetaData();if(!e.metadata&&n&&(e.metadata=n),O.setMetadata(e.metadata),O.setDisableAppend(e.disableAppend),O.setEnableEmbedded(e.enableEmbedded),O.setSIWX(e.siwx),!e.projectId){wr.open(zs.ALERT_ERRORS.PROJECT_ID_NOT_CONFIGURED,"error");return}if((s=e.adapters)!=null&&s.find(o=>o.namespace===Q.CHAIN.EVM)&&e.siweConfig){if(e.siwx)throw new Error("Cannot set both `siweConfig` and `siwx` options");O.setSIWX(e.siweConfig.mapToSIWX())}}getDefaultMetaData(){var e,r,i,n;return typeof window<"u"&&typeof document<"u"?{name:((r=(e=document.getElementsByTagName("title"))==null?void 0:e[0])==null?void 0:r.textContent)||"",description:((i=document.querySelector('meta[property="og:description"]'))==null?void 0:i.content)||"",url:window.location.origin,icons:[((n=document.querySelector('link[rel~="icon"]'))==null?void 0:n.href)||""]}:null}setUnsupportedNetwork(e){const r=this.getActiveChainNamespace();if(r){const i=Ti.getUnsupportedNetwork(`${r}:${e}`);w.setActiveCaipNetwork(i)}}getDefaultNetwork(){return Ti.getCaipNetworkFromStorage(this.defaultCaipNetwork)}extendCaipNetwork(e,r){return Ti.extendCaipNetwork(e,{customNetworkImageUrls:r.chainImages,projectId:r.projectId})}extendCaipNetworks(e){return Ti.extendCaipNetworks(e.networks,{customNetworkImageUrls:e.chainImages,customRpcUrls:e.customRpcUrls,projectId:e.projectId})}extendDefaultCaipNetwork(e){const r=e.networks.find(i=>{var n;return i.id===((n=e.defaultNetwork)==null?void 0:n.id)});return r?Ti.extendCaipNetwork(r,{customNetworkImageUrls:e.chainImages,customRpcUrls:e.customRpcUrls,projectId:e.projectId}):void 0}createClients(){this.connectionControllerClient={connectWalletConnect:async()=>{var s;const e=w.state.activeChain,r=this.getAdapter(e),i=(s=this.getCaipNetwork(e))==null?void 0:s.id;if(!r)throw new Error("Adapter not found");const n=await r.connectWalletConnect(i);this.close(),this.setClientId((n==null?void 0:n.clientId)||null),G.setConnectedNamespaces([...w.state.chains.keys()]),this.chainNamespaces.forEach(o=>{F.setConnectorId(ur.CONNECTOR_TYPE_WALLET_CONNECT,o)}),await this.syncWalletConnectAccount()},connectExternal:async({id:e,info:r,type:i,provider:n,chain:s,caipNetwork:o})=>{var p,v,g,b,C,A;const a=w.state.activeChain,c=s||a,l=this.getAdapter(c);if(s&&s!==a&&!o){const x=this.getCaipNetworks().find(k=>k.chainNamespace===s);x&&this.setCaipNetwork(x)}if(!l)throw new Error("Adapter not found");const u=this.getCaipNetwork(c),d=await l.connect({id:e,info:r,type:i,provider:n,chainId:(o==null?void 0:o.id)||(u==null?void 0:u.id),rpcUrl:((g=(v=(p=o==null?void 0:o.rpcUrls)==null?void 0:p.default)==null?void 0:v.http)==null?void 0:g[0])||((A=(C=(b=u==null?void 0:u.rpcUrls)==null?void 0:b.default)==null?void 0:C.http)==null?void 0:A[0])});if(!d)return;G.addConnectedNamespace(c),this.syncProvider({...d,chainNamespace:c});const{accounts:h}=await l.getAccounts({namespace:c,id:e});this.setAllAccounts(h,c),this.setStatus("connected",c)},reconnectExternal:async({id:e,info:r,type:i,provider:n})=>{var a;const s=w.state.activeChain,o=this.getAdapter(s);o!=null&&o.reconnect&&(await(o==null?void 0:o.reconnect({id:e,info:r,type:i,provider:n,chainId:(a=this.getCaipNetwork())==null?void 0:a.id})),G.addConnectedNamespace(s))},disconnect:async e=>{const r=e||w.state.activeChain,i=this.getAdapter(r),n=Ne.getProvider(r),s=Ne.getProviderId(r);await(i==null?void 0:i.disconnect({provider:n,providerType:s})),G.removeConnectedNamespace(r),Ne.resetChain(r),this.setUser(void 0,r),this.setStatus("disconnected",r)},checkInstalled:e=>e?e.some(r=>{var i;return!!((i=window.ethereum)!=null&&i[String(r)])}):!!window.ethereum,signMessage:async e=>{var r,i;return((i=await((r=this.getAdapter(w.state.activeChain))==null?void 0:r.signMessage({message:e,address:Y.state.address,provider:Ne.getProvider(w.state.activeChain)})))==null?void 0:i.signature)||""},sendTransaction:async e=>{var r;if(e.chainNamespace===Q.CHAIN.EVM){const i=this.getAdapter(w.state.activeChain),n=Ne.getProvider(w.state.activeChain);return((r=await(i==null?void 0:i.sendTransaction({...e,caipNetwork:this.getCaipNetwork(),provider:n})))==null?void 0:r.hash)||""}return""},estimateGas:async e=>{var r;if(e.chainNamespace===Q.CHAIN.EVM){const i=this.getAdapter(w.state.activeChain),n=Ne.getProvider(w.state.activeChain),s=this.getCaipNetwork();if(!s)throw new Error("CaipNetwork is undefined");return((r=await(i==null?void 0:i.estimateGas({...e,provider:n,caipNetwork:s})))==null?void 0:r.gas)||0n}return 0n},getEnsAvatar:async()=>{var e,r,i;return((i=await((r=this.getAdapter(w.state.activeChain))==null?void 0:r.getProfile({address:Y.state.address,chainId:Number((e=this.getCaipNetwork())==null?void 0:e.id)})))==null?void 0:i.profileImage)||!1},getEnsAddress:async e=>{var n;const r=this.getAdapter(w.state.activeChain),i=this.getCaipNetwork();return i&&((n=await(r==null?void 0:r.getEnsAddress({name:e,caipNetwork:i})))==null?void 0:n.address)||!1},writeContract:async e=>{var o;const r=this.getAdapter(w.state.activeChain),i=this.getCaipNetwork(),n=this.getCaipAddress(),s=Ne.getProvider(w.state.activeChain);if(!i||!n)throw new Error("CaipNetwork or CaipAddress is undefined");return(o=await(r==null?void 0:r.writeContract({...e,caipNetwork:i,provider:s,caipAddress:n})))==null?void 0:o.hash},parseUnits:(e,r)=>{var i;return((i=this.getAdapter(w.state.activeChain))==null?void 0:i.parseUnits({value:e,decimals:r}))??0n},formatUnits:(e,r)=>{var i;return((i=this.getAdapter(w.state.activeChain))==null?void 0:i.formatUnits({value:e,decimals:r}))??"0"},getCapabilities:async e=>{var r;return await((r=this.getAdapter(w.state.activeChain))==null?void 0:r.getCapabilities(e))},grantPermissions:async e=>{var r;return await((r=this.getAdapter(w.state.activeChain))==null?void 0:r.grantPermissions(e))},revokePermissions:async e=>{const r=this.getAdapter(w.state.activeChain);return r!=null&&r.revokePermissions?await r.revokePermissions(e):"0x"},walletGetAssets:async e=>{var r;return await((r=this.getAdapter(w.state.activeChain))==null?void 0:r.walletGetAssets(e))??{}}},this.networkControllerClient={switchCaipNetwork:async e=>await this.switchCaipNetwork(e),getApprovedCaipNetworksData:async()=>this.getApprovedCaipNetworksData()},K.setClient(this.connectionControllerClient)}getApprovedCaipNetworksData(){var e,r,i,n,s;if(Ne.getProviderId(w.state.activeChain)===ur.CONNECTOR_TYPE_WALLET_CONNECT){const o=(r=(e=this.universalProvider)==null?void 0:e.session)==null?void 0:r.namespaces;return{supportsAllNetworks:((s=(n=(i=this.universalProvider)==null?void 0:i.session)==null?void 0:n.peer)==null?void 0:s.metadata.name)==="MetaMask Wallet",approvedCaipNetworkIds:this.getChainsFromNamespaces(o)}}return{supportsAllNetworks:!0,approvedCaipNetworkIds:[]}}async switchCaipNetwork(e){var i;if(!e)return;const r=e.chainNamespace;if(this.getAddressByChainNamespace(e.chainNamespace)){const n=Ne.getProvider(r),s=Ne.getProviderId(r);if(e.chainNamespace===w.state.activeChain)await((i=this.getAdapter(r))==null?void 0:i.switchNetwork({caipNetwork:e,provider:n,providerType:s}));else if(this.setCaipNetwork(e),s===ur.CONNECTOR_TYPE_WALLET_CONNECT)this.syncWalletConnectAccount();else{const o=this.getAddressByChainNamespace(r);o&&this.syncAccount({address:o,chainId:e.id,chainNamespace:r})}}else this.setCaipNetwork(e)}getChainsFromNamespaces(e={}){return Object.values(e).flatMap(r=>{const i=r.chains||[],n=r.accounts.map(s=>{const{chainId:o,chainNamespace:a}=nr.parseCaipAddress(s);return`${a}:${o}`});return Array.from(new Set([...i,...n]))})}createAdapters(e){return this.createClients(),this.chainNamespaces.reduce((r,i)=>{var s;const n=e==null?void 0:e.find(o=>o.namespace===i);return n?(n.construct({namespace:i,projectId:(s=this.options)==null?void 0:s.projectId,networks:this.getCaipNetworks()}),r[i]=n):r[i]=new l2({namespace:i,networks:this.getCaipNetworks()}),r},{})}async initChainAdapter(e){var r;this.onConnectors(e),this.listenAdapter(e),(r=this.chainAdapters)==null||r[e].syncConnectors(this.options,this),await this.createUniversalProviderForAdapter(e)}async initChainAdapters(){await Promise.all(this.chainNamespaces.map(async e=>{await this.initChainAdapter(e)}))}onConnectors(e){var r;(r=this.getAdapter(e))==null||r.on("connectors",this.setConnectors.bind(this))}listenAdapter(e){const r=this.getAdapter(e);if(!r)return;const i=G.getConnectionStatus();i==="connected"?this.setStatus("connecting",e):i==="disconnected"?(G.clearAddressCache(),this.setStatus(i,e)):this.setStatus(i,e),r.on("switchNetwork",({address:n,chainId:s})=>{const o=this.getCaipNetworks().find(l=>l.id===s||l.caipNetworkId===s),a=w.state.activeChain===e,c=w.getAccountProp("address",e);if(o){const l=a&&n?n:c;l&&this.syncAccount({address:l,chainId:o.id,chainNamespace:e})}else this.setUnsupportedNetwork(s)}),r.on("disconnect",this.disconnect.bind(this,e)),r.on("pendingTransactions",()=>{const n=Y.state.address,s=w.state.activeCaipNetwork;!n||!(s!=null&&s.id)||this.updateNativeBalance(n,s.id,s.chainNamespace)}),r.on("accountChanged",({address:n,chainId:s})=>{var a,c;const o=w.state.activeChain===e;o&&s?this.syncAccount({address:n,chainId:s,chainNamespace:e}):o&&((a=w.state.activeCaipNetwork)!=null&&a.id)?this.syncAccount({address:n,chainId:(c=w.state.activeCaipNetwork)==null?void 0:c.id,chainNamespace:e}):this.syncAccountInfo(n,s,e)})}async createUniversalProviderForAdapter(e){var r,i,n;await this.getUniversalProvider(),this.universalProvider&&((n=(i=(r=this.chainAdapters)==null?void 0:r[e])==null?void 0:i.setUniversalProvider)==null||n.call(i,this.universalProvider))}async syncExistingConnection(){await Promise.allSettled(this.chainNamespaces.map(e=>this.syncNamespaceConnection(e)))}async syncNamespaceConnection(e){try{const r=F.getConnectorId(e);switch(this.setStatus("connecting",e),r){case Q.CONNECTOR_ID.WALLET_CONNECT:await this.syncWalletConnectAccount();break;case Q.CONNECTOR_ID.AUTH:break;default:await this.syncAdapterConnection(e)}}catch(r){console.warn("AppKit couldn't sync existing connection",r),this.setStatus("disconnected",e)}}async syncAdapterConnection(e){var o,a,c;const r=this.getAdapter(e),i=F.getConnectorId(e),n=this.getCaipNetwork(e),s=F.getConnectors(e).find(l=>l.id===i);try{if(!r||!s)throw new Error(`Adapter or connector not found for namespace ${e}`);if(!(n!=null&&n.id))throw new Error("CaipNetwork not found");const l=await(r==null?void 0:r.syncConnection({namespace:e,id:s.id,chainId:n.id,rpcUrl:(c=(a=(o=n==null?void 0:n.rpcUrls)==null?void 0:o.default)==null?void 0:a.http)==null?void 0:c[0]}));if(l){const u=await(r==null?void 0:r.getAccounts({namespace:e,id:s.id}));u&&u.accounts.length>0?this.setAllAccounts(u.accounts,e):this.setAllAccounts([M.createAccount(e,l.address,"eoa")],e),this.syncProvider({...l,chainNamespace:e}),await this.syncAccount({...l,chainNamespace:e}),this.setStatus("connected",e)}else this.setStatus("disconnected",e)}catch{this.setStatus("disconnected",e)}}async syncWalletConnectAccount(){const e=this.chainNamespaces.map(async r=>{var a,c,l,u,d;const i=this.getAdapter(r),n=((u=(l=(c=(a=this.universalProvider)==null?void 0:a.session)==null?void 0:c.namespaces)==null?void 0:l[r])==null?void 0:u.accounts)||[],s=(d=w.state.activeCaipNetwork)==null?void 0:d.id,o=n.find(h=>{const{chainId:p}=nr.parseCaipAddress(h);return p===(s==null?void 0:s.toString())})||n[0];if(o){const h=nr.validateCaipAddress(o),{chainId:p,address:v}=nr.parseCaipAddress(h);if(Ne.setProviderId(r,ur.CONNECTOR_TYPE_WALLET_CONNECT),this.caipNetworks&&w.state.activeCaipNetwork&&(i==null?void 0:i.namespace)!==Q.CHAIN.EVM){const g=i==null?void 0:i.getWalletConnectProvider({caipNetworks:this.getCaipNetworks(),provider:this.universalProvider,activeCaipNetwork:w.state.activeCaipNetwork});Ne.setProvider(r,g)}else Ne.setProvider(r,this.universalProvider);F.setConnectorId(Q.CONNECTOR_ID.WALLET_CONNECT,r),G.addConnectedNamespace(r),this.syncWalletConnectAccounts(r),await this.syncAccount({address:v,chainId:p,chainNamespace:r})}else this.setStatus("disconnected",r);await w.setApprovedCaipNetworksData(r)});await Promise.all(e)}syncWalletConnectAccounts(e){var i,n,s,o,a;const r=(a=(o=(s=(n=(i=this.universalProvider)==null?void 0:i.session)==null?void 0:n.namespaces)==null?void 0:s[e])==null?void 0:o.accounts)==null?void 0:a.map(c=>{const{address:l}=nr.parseCaipAddress(c);return l}).filter((c,l,u)=>u.indexOf(c)===l);r&&this.setAllAccounts(r.map(c=>M.createAccount(e,c,e==="bip122"?"payment":"eoa")),e)}syncProvider({type:e,provider:r,id:i,chainNamespace:n}){Ne.setProviderId(n,e),Ne.setProvider(n,r),F.setConnectorId(i,n)}async syncAccount(e){var d,h;const r=e.chainNamespace===w.state.activeChain,i=w.getCaipNetworkByNamespace(e.chainNamespace,e.chainId),{address:n,chainId:s,chainNamespace:o}=e,{chainId:a}=G.getActiveNetworkProps(),c=s||a,l=((d=w.state.activeCaipNetwork)==null?void 0:d.name)===Q.UNSUPPORTED_NETWORK_NAME,u=w.getNetworkProp("supportsAllNetworks",o);if(this.setStatus("connected",o),!(l&&!u)&&c){let p=this.getCaipNetworks().find(b=>b.id.toString()===c.toString()),v=this.getCaipNetworks().find(b=>b.chainNamespace===o);if(!u&&!p&&!v){const b=this.getApprovedCaipNetworkIds()||[],C=b.find(x=>{var k;return((k=nr.parseCaipNetworkId(x))==null?void 0:k.chainId)===c.toString()}),A=b.find(x=>{var k;return((k=nr.parseCaipNetworkId(x))==null?void 0:k.chainNamespace)===o});p=this.getCaipNetworks().find(x=>x.caipNetworkId===C),v=this.getCaipNetworks().find(x=>x.caipNetworkId===A||"deprecatedCaipNetworkId"in x&&x.deprecatedCaipNetworkId===A)}const g=p||v;(g==null?void 0:g.chainNamespace)===w.state.activeChain?O.state.enableNetworkSwitch&&!O.state.allowUnsupportedChain&&((h=w.state.activeCaipNetwork)==null?void 0:h.name)===Q.UNSUPPORTED_NETWORK_NAME?w.showUnsupportedChainUI():this.setCaipNetwork(g):r||i&&this.setCaipNetworkOfNamespace(i,o),this.syncConnectedWalletInfo(o),Vc.isLowerCaseMatch(n,Y.state.address)||this.syncAccountInfo(n,g==null?void 0:g.id,o),r?await this.syncBalance({address:n,chainId:g==null?void 0:g.id,chainNamespace:o}):await this.syncBalance({address:n,chainId:i==null?void 0:i.id,chainNamespace:o})}}async syncAccountInfo(e,r,i){const n=this.getCaipAddress(i),s=r||(n==null?void 0:n.split(":")[1]);if(!s)return;const o=`${i}:${s}:${e}`;this.setCaipAddress(o,i),await this.syncIdentity({address:e,chainId:s,chainNamespace:i})}async syncReownName(e,r){try{const i=await this.getReownName(e);if(i[0]){const n=i[0];this.setProfileName(n.name,r)}else this.setProfileName(null,r)}catch{this.setProfileName(null,r)}}syncConnectedWalletInfo(e){var n;const r=F.getConnectorId(e),i=Ne.getProviderId(e);if(i===ur.CONNECTOR_TYPE_ANNOUNCED||i===ur.CONNECTOR_TYPE_INJECTED){if(r){const s=this.getConnectors().find(o=>o.id===r);if(s){const{info:o,name:a,imageUrl:c}=s,l=c||this.getConnectorImage(s);this.setConnectedWalletInfo({name:a,icon:l,...o},e)}}}else if(i===ur.CONNECTOR_TYPE_WALLET_CONNECT){const s=Ne.getProvider(e);s!=null&&s.session&&this.setConnectedWalletInfo({...s.session.peer.metadata,name:s.session.peer.metadata.name,icon:(n=s.session.peer.metadata.icons)==null?void 0:n[0]},e)}else if(r)if(r===Q.CONNECTOR_ID.COINBASE){const s=this.getConnectors().find(o=>o.id===Q.CONNECTOR_ID.COINBASE);this.setConnectedWalletInfo({name:"Coinbase Wallet",icon:this.getConnectorImage(s)},e)}else this.setConnectedWalletInfo({name:r},e)}async syncBalance(e){!xd.getNetworksByNamespace(this.getCaipNetworks(),e.chainNamespace).find(r=>{var i;return r.id.toString()===((i=e.chainId)==null?void 0:i.toString())})||!e.chainId||await this.updateNativeBalance(e.address,e.chainId,e.chainNamespace)}async updateNativeBalance(e,r,i){const n=this.getAdapter(i),s=w.getCaipNetworkByNamespace(i,r);if(n){const o=await n.getBalance({address:e,chainId:r,caipNetwork:s,tokens:this.options.tokens});this.setBalance(o.balance,o.symbol,i)}}async initializeUniversalAdapter(){var i,n,s,o,a,c,l,u,d,h;const e=Im.createLogger((p,...v)=>{p&&this.handleAlertError(p),console.error(...v)}),r={projectId:(i=this.options)==null?void 0:i.projectId,metadata:{name:(n=this.options)!=null&&n.metadata?(s=this.options)==null?void 0:s.metadata.name:"",description:(o=this.options)!=null&&o.metadata?(a=this.options)==null?void 0:a.metadata.description:"",url:(c=this.options)!=null&&c.metadata?(l=this.options)==null?void 0:l.metadata.url:"",icons:(u=this.options)!=null&&u.metadata?(d=this.options)==null?void 0:d.metadata.icons:[""]},logger:e};O.setManualWCControl(!!((h=this.options)!=null&&h.manualWCControl)),this.universalProvider=this.options.universalProvider??await Uo.init(r),this.listenWalletConnect()}listenWalletConnect(){this.universalProvider&&(this.universalProvider.on("display_uri",e=>{K.setUri(e)}),this.universalProvider.on("connect",K.finalizeWcConnection),this.universalProvider.on("disconnect",()=>{this.chainNamespaces.forEach(e=>{this.resetAccount(e)}),K.resetWcConnection()}),this.universalProvider.on("chainChanged",e=>{const r=this.getCaipNetworks().find(n=>n.id==e),i=this.getCaipNetwork();if(!r){this.setUnsupportedNetwork(e);return}(i==null?void 0:i.id)!==(r==null?void 0:r.id)&&this.setCaipNetwork(r)}),this.universalProvider.on("session_event",e=>{if(Oh.isSessionEventData(e)){const{name:r,data:i}=e.params.event;r==="accountsChanged"&&Array.isArray(i)&&M.isCaipAddress(i[0])&&this.syncAccount(nr.parseCaipAddress(i[0]))}}))}createUniversalProvider(){var e;return!this.universalProviderInitPromise&&M.isClient()&&((e=this.options)!=null&&e.projectId)&&(this.universalProviderInitPromise=this.initializeUniversalAdapter()),this.universalProviderInitPromise}async getUniversalProvider(){if(!this.universalProvider)try{await this.createUniversalProvider()}catch(e){le.sendEvent({type:"error",event:"INTERNAL_SDK_ERROR",properties:{errorType:"UniversalProviderInitError",errorMessage:e instanceof Error?e.message:"Unknown",uncaught:!1}}),console.error("AppKit:getUniversalProvider - Cannot create provider",e)}return this.universalProvider}handleAlertError(e){const r=Object.entries(zs.UniversalProviderErrors).find(([,{message:a}])=>e.message.includes(a)),[i,n]=r??[],{message:s,alertErrorKey:o}=n??{};if(i&&s&&!this.reportedAlertErrors[i]){const a=zs.ALERT_ERRORS[o];a&&(wr.open(a,"error"),this.reportedAlertErrors[i]=!0)}}getAdapter(e){var r;if(e)return(r=this.chainAdapters)==null?void 0:r[e]}createAdapter(e){var n;if(!e)return;const r=e.namespace;if(!r)return;this.createClients();const i=e;i.namespace=r,i.construct({namespace:r,projectId:(n=this.options)==null?void 0:n.projectId,networks:this.getCaipNetworks()}),this.chainNamespaces.includes(r)||this.chainNamespaces.push(r),this.chainAdapters&&(this.chainAdapters[r]=i)}async open(e){if(await this.injectModalUi(),e!=null&&e.uri&&K.setUri(e.uri),e==null?void 0:e.arguments)switch(e==null?void 0:e.view){case"Swap":return he.open({...e,data:{swap:e.arguments}})}return he.open(e)}async close(){await this.injectModalUi(),he.close()}setLoading(e,r){he.setLoading(e,r)}async disconnect(e){await K.disconnect(e)}getError(){return""}getChainId(){var e;return(e=w.state.activeCaipNetwork)==null?void 0:e.id}async switchNetwork(e){const r=this.getCaipNetworks().find(i=>i.id===e.id);if(!r){wr.open(zs.ALERT_ERRORS.SWITCH_NETWORK_NOT_FOUND,"error");return}await w.switchActiveNetwork(r)}getWalletProvider(){return w.state.activeChain?Ne.state.providers[w.state.activeChain]:null}getWalletProviderType(){return Ne.getProviderId(w.state.activeChain)}subscribeProviders(e){return Ne.subscribeProviders(e)}getThemeMode(){return Te.state.themeMode}getThemeVariables(){return Te.state.themeVariables}setThemeMode(e){Te.setThemeMode(e),_h(Te.state.themeMode)}setTermsConditionsUrl(e){O.setTermsConditionsUrl(e)}setPrivacyPolicyUrl(e){O.setPrivacyPolicyUrl(e)}setThemeVariables(e){Te.setThemeVariables(e),Vm(Te.state.themeVariables)}subscribeTheme(e){return Te.subscribe(e)}getWalletInfo(){return Y.state.connectedWalletInfo}getAccount(e){var s;const r=F.getAuthConnector(e),i=w.getAccountData(e),n=w.state.activeChain;if(i)return{allAccounts:i.allAccounts,caipAddress:i.caipAddress,address:M.getPlainAddress(i.caipAddress),isConnected:!!i.caipAddress,status:i.status,embeddedWalletInfo:r?{user:i.user?{...i.user,username:G.getConnectedSocialUsername()}:void 0,authProvider:i.socialProvider||"email",accountType:(s=i.preferredAccountTypes)==null?void 0:s[e||n],isSmartAccountDeployed:!!i.smartAccountDeployed}:void 0}}subscribeAccount(e,r){const i=()=>{const n=this.getAccount(r);n&&e(n)};r?w.subscribeChainProp("accountState",i,r):w.subscribe(i),F.subscribe(i)}subscribeNetwork(e){return w.subscribe(({activeCaipNetwork:r})=>{e({caipNetwork:r,chainId:r==null?void 0:r.id,caipNetworkId:r==null?void 0:r.caipNetworkId})})}subscribeWalletInfo(e){return Y.subscribeKey("connectedWalletInfo",e)}subscribeShouldUpdateToAddress(e){Y.subscribeKey("shouldUpdateToAddress",e)}subscribeCaipNetworkChange(e){w.subscribeKey("activeCaipNetwork",e)}getState(){return tr.state}subscribeState(e){return tr.subscribe(e)}showErrorMessage(e){Ee.showError(e)}showSuccessMessage(e){Ee.showSuccess(e)}getEvent(){return{...le.state}}subscribeEvents(e){return le.subscribe(e)}replace(e){H.replace(e)}redirect(e){H.push(e)}popTransactionStack(e){H.popTransactionStack(e)}isOpen(){return he.state.open}isTransactionStackEmpty(){return H.state.transactionStack.length===0}isTransactionShouldReplaceView(){var e;return(e=H.state.transactionStack[H.state.transactionStack.length-1])==null?void 0:e.replace}static getInstance(){return this.instance}updateFeatures(e){O.setFeatures(e)}updateOptions(e){const r={...O.state||{},...e};O.setOptions(r)}setConnectMethodsOrder(e){O.setConnectMethodsOrder(e)}setWalletFeaturesOrder(e){O.setWalletFeaturesOrder(e)}setCollapseWallets(e){O.setCollapseWallets(e)}setSocialsOrder(e){O.setSocialsOrder(e)}getConnectMethodsOrder(){return ii.getConnectOrderMethod(O.state.features,F.getConnectors())}addNetwork(e,r){if(this.chainAdapters&&!this.chainAdapters[e])throw new Error(`Adapter for namespace ${e} doesn't exist`);const i=this.extendCaipNetwork(r,this.options);this.getCaipNetworks().find(n=>n.id===i.id)||w.addNetwork(i)}removeNetwork(e,r){if(this.chainAdapters&&!this.chainAdapters[e])throw new Error(`Adapter for namespace ${e} doesn't exist`);this.getCaipNetworks().find(i=>i.id===r)&&w.removeNetwork(e,r)}}let Iu=!1;class Rh extends u2{async open(e){F.isConnected()||await super.open(e)}async close(){await super.close(),this.options.manualWCControl&&K.finalizeWcConnection()}async syncIdentity(e){return Promise.resolve()}async syncBalance(e){return Promise.resolve()}async injectModalUi(){if(!Iu&&M.isClient()){if(await Promise.resolve().then(function(){return x3}),await Promise.resolve().then(function(){return M3}),!document.querySelector("w3m-modal")){const e=document.createElement("w3m-modal");!O.state.disableAppend&&!O.state.enableEmbedded&&document.body.insertAdjacentElement("beforeend",e)}Iu=!0}}}const d2="1.7.3";function h2(t){return new Rh({...t,basic:!0,sdkVersion:`html-core-${d2}`})}var p2=Object.freeze({__proto__:null,createAppKit:h2,AppKit:Rh}),f2=Object.defineProperty,g2=Object.defineProperties,w2=Object.getOwnPropertyDescriptors,Nu=Object.getOwnPropertySymbols,m2=Object.prototype.hasOwnProperty,v2=Object.prototype.propertyIsEnumerable,Su=(t,e,r)=>e in t?f2(t,e,{enumerable:!0,configurable:!0,writable:!0,value:r}):t[e]=r,b2=(t,e)=>{for(var r in e||(e={}))m2.call(e,r)&&Su(t,r,e[r]);if(Nu)for(var r of Nu(e))v2.call(e,r)&&Su(t,r,e[r]);return t},y2=(t,e)=>g2(t,w2(e));function C2(t){if(t)return{"--w3m-font-family":t["--wcm-font-family"],"--w3m-accent":t["--wcm-accent-color"],"--w3m-color-mix":t["--wcm-background-color"],"--w3m-z-index":t["--wcm-z-index"]?Number(t["--wcm-z-index"]):void 0,"--w3m-qr-color":t["--wcm-accent-color"],"--w3m-font-size-master":t["--wcm-text-medium-regular-size"],"--w3m-border-radius-master":t["--wcm-container-border-radius"],"--w3m-color-mix-strength":0}}const x2=t=>{const[e,r]=t.split(":");return Di({id:r,caipNetworkId:t,chainNamespace:e,name:"",nativeCurrency:{name:"",symbol:"",decimals:8},rpcUrls:{default:{http:["https://rpc.walletconnect.org/v1"]}}})};function E2(t){var e,r,i,n,s,o,a;const c=(e=t.chains)==null?void 0:e.map(x2).filter(Boolean);if(c.length===0)throw new Error("At least one chain must be specified");const l=c.find(d=>{var h;return d.id===((h=t.defaultChain)==null?void 0:h.id)}),u={projectId:t.projectId,networks:c,themeMode:t.themeMode,themeVariables:C2(t.themeVariables),chainImages:t.chainImages,connectorImages:t.walletImages,defaultNetwork:l,metadata:y2(b2({},t.metadata),{name:((r=t.metadata)==null?void 0:r.name)||"WalletConnect",description:((i=t.metadata)==null?void 0:i.description)||"Connect to WalletConnect-compatible wallets",url:((n=t.metadata)==null?void 0:n.url)||"https://walletconnect.org",icons:((s=t.metadata)==null?void 0:s.icons)||["https://walletconnect.org/walletconnect-logo.png"]}),showWallets:!0,featuredWalletIds:t.explorerRecommendedWalletIds==="NONE"?[]:Array.isArray(t.explorerRecommendedWalletIds)?t.explorerRecommendedWalletIds:[],excludeWalletIds:t.explorerExcludedWalletIds==="ALL"?[]:Array.isArray(t.explorerExcludedWalletIds)?t.explorerExcludedWalletIds:[],enableEIP6963:!1,enableInjected:!1,enableCoinbase:!0,enableWalletConnect:!0,features:{email:!1,socials:!1}};if((o=t.mobileWallets)!=null&&o.length||(a=t.desktopWallets)!=null&&a.length){const d=[...(t.mobileWallets||[]).map(v=>({id:v.id,name:v.name,links:v.links})),...(t.desktopWallets||[]).map(v=>({id:v.id,name:v.name,links:{native:v.links.native,universal:v.links.universal}}))],h=[...u.featuredWalletIds||[],...u.excludeWalletIds||[]],p=d.filter(v=>!h.includes(v.id));p.length&&(u.customWallets=p)}return u}var A2=Object.freeze({__proto__:null,convertWCMToAppKitOptions:E2});/**
* @license
* Copyright 2017 Google LLC
* SPDX-License-Identifier: BSD-3-Clause
*/const k2={attribute:!0,type:String,converter:Oo,reflect:!1,hasChanged:Yc},I2=(t=k2,e,r)=>{const{kind:i,metadata:n}=r;let s=globalThis.litPropertyMetadata.get(n);if(s===void 0&&globalThis.litPropertyMetadata.set(n,s=new Map),i==="setter"&&((t=Object.create(t)).wrapped=!0),s.set(r.name,t),i==="accessor"){const{name:o}=r;return{set(a){const c=e.get.call(this);e.set.call(this,a),this.requestUpdate(o,c,t)},init(a){return a!==void 0&&this.C(o,void 0,t,a),a}}}if(i==="setter"){const{name:o}=r;return function(a){const c=this[o];e.call(this,a),this.requestUpdate(o,c,t)}}throw Error("Unsupported decorator location: "+i)};function E(t){return(e,r)=>typeof r=="object"?I2(t,e,r):((i,n,s)=>{const o=n.hasOwnProperty(s);return n.constructor.createProperty(s,i),o?Object.getOwnPropertyDescriptor(n,s):void 0})(t,e,r)}/**
* @license
* Copyright 2017 Google LLC
* SPDX-License-Identifier: BSD-3-Clause
*/function q(t){return E({...t,state:!0,attribute:!1})}var N2=te`
  :host {
    display: flex;
    width: inherit;
    height: inherit;
  }
`,ot=function(t,e,r,i){var n=arguments.length,s=n<3?e:i,o;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")s=Reflect.decorate(t,e,r,i);else for(var a=t.length-1;a>=0;a--)(o=t[a])&&(s=(n<3?o(s):n>3?o(e,r,s):o(e,r))||s);return n>3&&s&&Object.defineProperty(e,r,s),s};let We=class extends Z{render(){return this.style.cssText=`
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
      padding-top: ${this.padding&&Be.getSpacingStyles(this.padding,0)};
      padding-right: ${this.padding&&Be.getSpacingStyles(this.padding,1)};
      padding-bottom: ${this.padding&&Be.getSpacingStyles(this.padding,2)};
      padding-left: ${this.padding&&Be.getSpacingStyles(this.padding,3)};
      margin-top: ${this.margin&&Be.getSpacingStyles(this.margin,0)};
      margin-right: ${this.margin&&Be.getSpacingStyles(this.margin,1)};
      margin-bottom: ${this.margin&&Be.getSpacingStyles(this.margin,2)};
      margin-left: ${this.margin&&Be.getSpacingStyles(this.margin,3)};
    `,y`<slot></slot>`}};We.styles=[me,N2],ot([E()],We.prototype,"flexDirection",void 0),ot([E()],We.prototype,"flexWrap",void 0),ot([E()],We.prototype,"flexBasis",void 0),ot([E()],We.prototype,"flexGrow",void 0),ot([E()],We.prototype,"flexShrink",void 0),ot([E()],We.prototype,"alignItems",void 0),ot([E()],We.prototype,"justifyContent",void 0),ot([E()],We.prototype,"columnGap",void 0),ot([E()],We.prototype,"rowGap",void 0),ot([E()],We.prototype,"gap",void 0),ot([E()],We.prototype,"padding",void 0),ot([E()],We.prototype,"margin",void 0),We=ot([V("wui-flex")],We);/**
* @license
* Copyright 2018 Google LLC
* SPDX-License-Identifier: BSD-3-Clause
*/const ee=t=>t??Pe;/**
* @license
* Copyright 2020 Google LLC
* SPDX-License-Identifier: BSD-3-Clause
*/const S2=t=>t===null||typeof t!="object"&&typeof t!="function",P2=t=>t.strings===void 0;/**
* @license
* Copyright 2017 Google LLC
* SPDX-License-Identifier: BSD-3-Clause
*/const Lh={ATTRIBUTE:1,CHILD:2},Xc=t=>(...e)=>({_$litDirective$:t,values:e});class Bh{constructor(e){}get _$AU(){return this._$AM._$AU}_$AT(e,r,i){this._$Ct=e,this._$AM=r,this._$Ci=i}_$AS(e,r){return this.update(e,r)}update(e,r){return this.render(...r)}}/**
* @license
* Copyright 2017 Google LLC
* SPDX-License-Identifier: BSD-3-Clause
*/const jn=(t,e)=>{var i;const r=t._$AN;if(r===void 0)return!1;for(const n of r)(i=n._$AO)==null||i.call(n,e,!1),jn(n,e);return!0},Ro=t=>{let e,r;do{if((e=t._$AM)===void 0)break;r=e._$AN,r.delete(t),t=e}while((r==null?void 0:r.size)===0)},Uh=t=>{for(let e;e=t._$AM;t=e){let r=e._$AN;if(r===void 0)e._$AN=r=new Set;else if(r.has(t))break;r.add(t),O2(e)}};function _2(t){this._$AN!==void 0?(Ro(this),this._$AM=t,Uh(this)):this._$AM=t}function T2(t,e=!1,r=0){const i=this._$AH,n=this._$AN;if(n!==void 0&&n.size!==0)if(e)if(Array.isArray(i))for(let s=r;s<i.length;s++)jn(i[s],!1),Ro(i[s]);else i!=null&&(jn(i,!1),Ro(i));else jn(this,t)}const O2=t=>{t.type==Lh.CHILD&&(t._$AP??(t._$AP=T2),t._$AQ??(t._$AQ=_2))};class Mh extends Bh{constructor(){super(...arguments),this._$AN=void 0}_$AT(e,r,i){super._$AT(e,r,i),Uh(this),this.isConnected=e._$AU}_$AO(e,r=!0){var i,n;e!==this.isConnected&&(this.isConnected=e,e?(i=this.reconnected)==null||i.call(this):(n=this.disconnected)==null||n.call(this)),r&&(jn(this,e),Ro(this))}setValue(e){if(P2(this._$Ct))this._$Ct._$AI(e,this);else{const r=[...this._$Ct._$AH];r[this._$Ci]=e,this._$Ct._$AI(r,this,0)}}disconnected(){}reconnected(){}}/**
* @license
* Copyright 2021 Google LLC
* SPDX-License-Identifier: BSD-3-Clause
*/class $2{constructor(e){this.G=e}disconnect(){this.G=void 0}reconnect(e){this.G=e}deref(){return this.G}}class R2{constructor(){this.Y=void 0,this.Z=void 0}get(){return this.Y}pause(){this.Y??(this.Y=new Promise(e=>this.Z=e))}resume(){var e;(e=this.Z)==null||e.call(this),this.Y=this.Z=void 0}}/**
* @license
* Copyright 2017 Google LLC
* SPDX-License-Identifier: BSD-3-Clause
*/const Pu=t=>!S2(t)&&typeof t.then=="function",_u=1073741823;class L2 extends Mh{constructor(){super(...arguments),this._$Cwt=_u,this._$Cbt=[],this._$CK=new $2(this),this._$CX=new R2}render(...e){return e.find(r=>!Pu(r))??ir}update(e,r){const i=this._$Cbt;let n=i.length;this._$Cbt=r;const s=this._$CK,o=this._$CX;this.isConnected||this.disconnected();for(let a=0;a<r.length&&!(a>this._$Cwt);a++){const c=r[a];if(!Pu(c))return this._$Cwt=a,c;a<n&&c===i[a]||(this._$Cwt=_u,n=0,Promise.resolve(c).then(async l=>{for(;o.get();)await o.get();const u=s.deref();if(u!==void 0){const d=u._$Cbt.indexOf(c);d>-1&&d<u._$Cwt&&(u._$Cwt=d,u.setValue(l))}}))}return ir}disconnected(){this._$CK.disconnect(),this._$CX.pause()}reconnected(){this._$CK.reconnect(this),this._$CX.resume()}}const B2=Xc(L2);class U2{constructor(){this.cache=new Map}set(e,r){this.cache.set(e,r)}get(e){return this.cache.get(e)}has(e){return this.cache.has(e)}delete(e){this.cache.delete(e)}clear(){this.cache.clear()}}const Sa=new U2;var M2=te`
  :host {
    display: flex;
    aspect-ratio: var(--local-aspect-ratio);
    color: var(--local-color);
    width: var(--local-width);
  }

  svg {
    width: inherit;
    height: inherit;
    object-fit: contain;
    object-position: center;
  }

  .fallback {
    width: var(--local-width);
    height: var(--local-height);
  }
`,ln=function(t,e,r,i){var n=arguments.length,s=n<3?e:i,o;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")s=Reflect.decorate(t,e,r,i);else for(var a=t.length-1;a>=0;a--)(o=t[a])&&(s=(n<3?o(s):n>3?o(e,r,s):o(e,r))||s);return n>3&&s&&Object.defineProperty(e,r,s),s};const Tu={add:async()=>(await Promise.resolve().then(function(){return j3})).addSvg,allWallets:async()=>(await Promise.resolve().then(function(){return H3})).allWalletsSvg,arrowBottomCircle:async()=>(await Promise.resolve().then(function(){return F3})).arrowBottomCircleSvg,appStore:async()=>(await Promise.resolve().then(function(){return V3})).appStoreSvg,apple:async()=>(await Promise.resolve().then(function(){return G3})).appleSvg,arrowBottom:async()=>(await Promise.resolve().then(function(){return Y3})).arrowBottomSvg,arrowLeft:async()=>(await Promise.resolve().then(function(){return X3})).arrowLeftSvg,arrowRight:async()=>(await Promise.resolve().then(function(){return e5})).arrowRightSvg,arrowTop:async()=>(await Promise.resolve().then(function(){return r5})).arrowTopSvg,bank:async()=>(await Promise.resolve().then(function(){return n5})).bankSvg,browser:async()=>(await Promise.resolve().then(function(){return o5})).browserSvg,card:async()=>(await Promise.resolve().then(function(){return c5})).cardSvg,checkmark:async()=>(await Promise.resolve().then(function(){return u5})).checkmarkSvg,checkmarkBold:async()=>(await Promise.resolve().then(function(){return h5})).checkmarkBoldSvg,chevronBottom:async()=>(await Promise.resolve().then(function(){return f5})).chevronBottomSvg,chevronLeft:async()=>(await Promise.resolve().then(function(){return w5})).chevronLeftSvg,chevronRight:async()=>(await Promise.resolve().then(function(){return v5})).chevronRightSvg,chevronTop:async()=>(await Promise.resolve().then(function(){return y5})).chevronTopSvg,chromeStore:async()=>(await Promise.resolve().then(function(){return x5})).chromeStoreSvg,clock:async()=>(await Promise.resolve().then(function(){return A5})).clockSvg,close:async()=>(await Promise.resolve().then(function(){return I5})).closeSvg,compass:async()=>(await Promise.resolve().then(function(){return S5})).compassSvg,coinPlaceholder:async()=>(await Promise.resolve().then(function(){return _5})).coinPlaceholderSvg,copy:async()=>(await Promise.resolve().then(function(){return O5})).copySvg,cursor:async()=>(await Promise.resolve().then(function(){return R5})).cursorSvg,cursorTransparent:async()=>(await Promise.resolve().then(function(){return B5})).cursorTransparentSvg,desktop:async()=>(await Promise.resolve().then(function(){return M5})).desktopSvg,disconnect:async()=>(await Promise.resolve().then(function(){return j5})).disconnectSvg,discord:async()=>(await Promise.resolve().then(function(){return H5})).discordSvg,etherscan:async()=>(await Promise.resolve().then(function(){return F5})).etherscanSvg,extension:async()=>(await Promise.resolve().then(function(){return V5})).extensionSvg,externalLink:async()=>(await Promise.resolve().then(function(){return G5})).externalLinkSvg,facebook:async()=>(await Promise.resolve().then(function(){return Y5})).facebookSvg,farcaster:async()=>(await Promise.resolve().then(function(){return X5})).farcasterSvg,filters:async()=>(await Promise.resolve().then(function(){return eb})).filtersSvg,github:async()=>(await Promise.resolve().then(function(){return rb})).githubSvg,google:async()=>(await Promise.resolve().then(function(){return nb})).googleSvg,helpCircle:async()=>(await Promise.resolve().then(function(){return ob})).helpCircleSvg,image:async()=>(await Promise.resolve().then(function(){return cb})).imageSvg,id:async()=>(await Promise.resolve().then(function(){return ub})).idSvg,infoCircle:async()=>(await Promise.resolve().then(function(){return hb})).infoCircleSvg,lightbulb:async()=>(await Promise.resolve().then(function(){return fb})).lightbulbSvg,mail:async()=>(await Promise.resolve().then(function(){return wb})).mailSvg,mobile:async()=>(await Promise.resolve().then(function(){return vb})).mobileSvg,more:async()=>(await Promise.resolve().then(function(){return yb})).moreSvg,networkPlaceholder:async()=>(await Promise.resolve().then(function(){return xb})).networkPlaceholderSvg,nftPlaceholder:async()=>(await Promise.resolve().then(function(){return Ab})).nftPlaceholderSvg,off:async()=>(await Promise.resolve().then(function(){return Ib})).offSvg,playStore:async()=>(await Promise.resolve().then(function(){return Sb})).playStoreSvg,plus:async()=>(await Promise.resolve().then(function(){return _b})).plusSvg,qrCode:async()=>(await Promise.resolve().then(function(){return Ob})).qrCodeIcon,recycleHorizontal:async()=>(await Promise.resolve().then(function(){return Rb})).recycleHorizontalSvg,refresh:async()=>(await Promise.resolve().then(function(){return Bb})).refreshSvg,search:async()=>(await Promise.resolve().then(function(){return Mb})).searchSvg,send:async()=>(await Promise.resolve().then(function(){return jb})).sendSvg,swapHorizontal:async()=>(await Promise.resolve().then(function(){return Hb})).swapHorizontalSvg,swapHorizontalMedium:async()=>(await Promise.resolve().then(function(){return Fb})).swapHorizontalMediumSvg,swapHorizontalBold:async()=>(await Promise.resolve().then(function(){return Vb})).swapHorizontalBoldSvg,swapHorizontalRoundedBold:async()=>(await Promise.resolve().then(function(){return Gb})).swapHorizontalRoundedBoldSvg,swapVertical:async()=>(await Promise.resolve().then(function(){return Yb})).swapVerticalSvg,telegram:async()=>(await Promise.resolve().then(function(){return Xb})).telegramSvg,threeDots:async()=>(await Promise.resolve().then(function(){return e4})).threeDotsSvg,twitch:async()=>(await Promise.resolve().then(function(){return r4})).twitchSvg,twitter:async()=>(await Promise.resolve().then(function(){return nd})).xSvg,twitterIcon:async()=>(await Promise.resolve().then(function(){return s4})).twitterIconSvg,verify:async()=>(await Promise.resolve().then(function(){return a4})).verifySvg,verifyFilled:async()=>(await Promise.resolve().then(function(){return l4})).verifyFilledSvg,wallet:async()=>(await Promise.resolve().then(function(){return d4})).walletSvg,walletConnect:async()=>(await Promise.resolve().then(function(){return ec})).walletConnectSvg,walletConnectLightBrown:async()=>(await Promise.resolve().then(function(){return ec})).walletConnectLightBrownSvg,walletConnectBrown:async()=>(await Promise.resolve().then(function(){return ec})).walletConnectBrownSvg,walletPlaceholder:async()=>(await Promise.resolve().then(function(){return w4})).walletPlaceholderSvg,warningCircle:async()=>(await Promise.resolve().then(function(){return v4})).warningCircleSvg,x:async()=>(await Promise.resolve().then(function(){return nd})).xSvg,info:async()=>(await Promise.resolve().then(function(){return y4})).infoSvg,exclamationTriangle:async()=>(await Promise.resolve().then(function(){return x4})).exclamationTriangleSvg,reown:async()=>(await Promise.resolve().then(function(){return A4})).reownSvg};async function z2(t){if(Sa.has(t))return Sa.get(t);const e=(Tu[t]??Tu.copy)();return Sa.set(t,e),e}let Ir=class extends Z{constructor(){super(...arguments),this.size="md",this.name="copy",this.color="fg-300",this.aspectRatio="1 / 1"}render(){return this.style.cssText=`
      --local-color: ${`var(--wui-color-${this.color});`}
      --local-width: ${`var(--wui-icon-size-${this.size});`}
      --local-aspect-ratio: ${this.aspectRatio}
    `,y`${B2(z2(this.name),y`<div class="fallback"></div>`)}`}};Ir.styles=[me,xs,M2],ln([E()],Ir.prototype,"size",void 0),ln([E()],Ir.prototype,"name",void 0),ln([E()],Ir.prototype,"color",void 0),ln([E()],Ir.prototype,"aspectRatio",void 0),Ir=ln([V("wui-icon")],Ir);/**
* @license
* Copyright 2018 Google LLC
* SPDX-License-Identifier: BSD-3-Clause
*/const zh=Xc(class extends Bh{constructor(t){var e;if(super(t),t.type!==Lh.ATTRIBUTE||t.name!=="class"||((e=t.strings)==null?void 0:e.length)>2)throw Error("`classMap()` can only be used in the `class` attribute and must be the only part in the attribute.")}render(t){return" "+Object.keys(t).filter(e=>t[e]).join(" ")+" "}update(t,[e]){var i,n;if(this.st===void 0){this.st=new Set,t.strings!==void 0&&(this.nt=new Set(t.strings.join(" ").split(/\s/).filter(s=>s!=="")));for(const s in e)e[s]&&!((i=this.nt)!=null&&i.has(s))&&this.st.add(s);return this.render(e)}const r=t.element.classList;for(const s of this.st)s in e||(r.remove(s),this.st.delete(s));for(const s in e){const o=!!e[s];o===this.st.has(s)||(n=this.nt)!=null&&n.has(s)||(o?(r.add(s),this.st.add(s)):(r.remove(s),this.st.delete(s)))}return ir}});var j2=te`
  :host {
    display: inline-flex !important;
  }

  slot {
    width: 100%;
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

  .wui-line-clamp-1 {
    overflow: hidden;
    display: -webkit-box;
    -webkit-box-orient: vertical;
    -webkit-line-clamp: 1;
  }

  .wui-line-clamp-2 {
    overflow: hidden;
    display: -webkit-box;
    -webkit-box-orient: vertical;
    -webkit-line-clamp: 2;
  }

  .wui-font-medium-400 {
    font-size: var(--wui-font-size-medium);
    font-weight: var(--wui-font-weight-light);
    letter-spacing: var(--wui-letter-spacing-medium);
  }

  .wui-font-medium-600 {
    font-size: var(--wui-font-size-medium);
    letter-spacing: var(--wui-letter-spacing-medium);
  }

  .wui-font-title-600 {
    font-size: var(--wui-font-size-title);
    letter-spacing: var(--wui-letter-spacing-title);
  }

  .wui-font-title-6-600 {
    font-size: var(--wui-font-size-title-6);
    letter-spacing: var(--wui-letter-spacing-title-6);
  }

  .wui-font-mini-700 {
    font-size: var(--wui-font-size-mini);
    letter-spacing: var(--wui-letter-spacing-mini);
    text-transform: uppercase;
  }

  .wui-font-large-500,
  .wui-font-large-600,
  .wui-font-large-700 {
    font-size: var(--wui-font-size-large);
    letter-spacing: var(--wui-letter-spacing-large);
  }

  .wui-font-2xl-500,
  .wui-font-2xl-600,
  .wui-font-2xl-700 {
    font-size: var(--wui-font-size-2xl);
    letter-spacing: var(--wui-letter-spacing-2xl);
  }

  .wui-font-paragraph-400,
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

  .wui-font-tiny-400,
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

  .wui-font-tiny-400,
  .wui-font-small-400,
  .wui-font-medium-400,
  .wui-font-paragraph-400 {
    font-weight: var(--wui-font-weight-light);
  }

  .wui-font-large-700,
  .wui-font-paragraph-700,
  .wui-font-micro-700,
  .wui-font-mini-700 {
    font-weight: var(--wui-font-weight-bold);
  }

  .wui-font-medium-600,
  .wui-font-medium-title-600,
  .wui-font-title-6-600,
  .wui-font-large-600,
  .wui-font-paragraph-600,
  .wui-font-small-600,
  .wui-font-tiny-600,
  .wui-font-micro-600 {
    font-weight: var(--wui-font-weight-medium);
  }

  :host([disabled]) {
    opacity: 0.4;
  }
`,un=function(t,e,r,i){var n=arguments.length,s=n<3?e:i,o;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")s=Reflect.decorate(t,e,r,i);else for(var a=t.length-1;a>=0;a--)(o=t[a])&&(s=(n<3?o(s):n>3?o(e,r,s):o(e,r))||s);return n>3&&s&&Object.defineProperty(e,r,s),s};let Nr=class extends Z{constructor(){super(...arguments),this.variant="paragraph-500",this.color="fg-300",this.align="left",this.lineClamp=void 0}render(){const t={[`wui-font-${this.variant}`]:!0,[`wui-color-${this.color}`]:!0,[`wui-line-clamp-${this.lineClamp}`]:!!this.lineClamp};return this.style.cssText=`
      --local-align: ${this.align};
      --local-color: var(--wui-color-${this.color});
    `,y`<slot class=${zh(t)}></slot>`}};Nr.styles=[me,j2],un([E()],Nr.prototype,"variant",void 0),un([E()],Nr.prototype,"color",void 0),un([E()],Nr.prototype,"align",void 0),un([E()],Nr.prototype,"lineClamp",void 0),Nr=un([V("wui-text")],Nr);var D2=te`
  :host {
    display: inline-flex;
    justify-content: center;
    align-items: center;
    position: relative;
    overflow: hidden;
    background-color: var(--wui-color-gray-glass-020);
    border-radius: var(--local-border-radius);
    border: var(--local-border);
    box-sizing: content-box;
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
`,Zt=function(t,e,r,i){var n=arguments.length,s=n<3?e:i,o;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")s=Reflect.decorate(t,e,r,i);else for(var a=t.length-1;a>=0;a--)(o=t[a])&&(s=(n<3?o(s):n>3?o(e,r,s):o(e,r))||s);return n>3&&s&&Object.defineProperty(e,r,s),s};let kt=class extends Z{constructor(){super(...arguments),this.size="md",this.backgroundColor="accent-100",this.iconColor="accent-100",this.background="transparent",this.border=!1,this.borderColor="wui-color-bg-125",this.icon="copy"}render(){const t=this.iconSize||this.size,e=this.size==="lg",r=this.size==="xl",i=e?"12%":"16%",n=e?"xxs":r?"s":"3xl",s=this.background==="gray",o=this.background==="opaque",a=this.backgroundColor==="accent-100"&&o||this.backgroundColor==="success-100"&&o||this.backgroundColor==="error-100"&&o||this.backgroundColor==="inverse-100"&&o;let c=`var(--wui-color-${this.backgroundColor})`;return a?c=`var(--wui-icon-box-bg-${this.backgroundColor})`:s&&(c=`var(--wui-color-gray-${this.backgroundColor})`),this.style.cssText=`
       --local-bg-value: ${c};
       --local-bg-mix: ${a||s?"100%":i};
       --local-border-radius: var(--wui-border-radius-${n});
       --local-size: var(--wui-icon-box-size-${this.size});
       --local-border: ${this.borderColor==="wui-color-bg-125"?"2px":"1px"} solid ${this.border?`var(--${this.borderColor})`:"transparent"}
   `,y` <wui-icon color=${this.iconColor} size=${t} name=${this.icon}></wui-icon> `}};kt.styles=[me,ze,D2],Zt([E()],kt.prototype,"size",void 0),Zt([E()],kt.prototype,"backgroundColor",void 0),Zt([E()],kt.prototype,"iconColor",void 0),Zt([E()],kt.prototype,"iconSize",void 0),Zt([E()],kt.prototype,"background",void 0),Zt([E({type:Boolean})],kt.prototype,"border",void 0),Zt([E()],kt.prototype,"borderColor",void 0),Zt([E()],kt.prototype,"icon",void 0),kt=Zt([V("wui-icon-box")],kt);var H2=te`
  :host {
    display: block;
    width: var(--local-width);
    height: var(--local-height);
  }

  img {
    display: block;
    width: 100%;
    height: 100%;
    object-fit: cover;
    object-position: center center;
    border-radius: inherit;
  }
`,Fs=function(t,e,r,i){var n=arguments.length,s=n<3?e:i,o;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")s=Reflect.decorate(t,e,r,i);else for(var a=t.length-1;a>=0;a--)(o=t[a])&&(s=(n<3?o(s):n>3?o(e,r,s):o(e,r))||s);return n>3&&s&&Object.defineProperty(e,r,s),s};let Ei=class extends Z{constructor(){super(...arguments),this.src="./path/to/image.jpg",this.alt="Image",this.size=void 0}render(){return this.style.cssText=`
      --local-width: ${this.size?`var(--wui-icon-size-${this.size});`:"100%"};
      --local-height: ${this.size?`var(--wui-icon-size-${this.size});`:"100%"};
      `,y`<img src=${this.src} alt=${this.alt} @error=${this.handleImageError} />`}handleImageError(){this.dispatchEvent(new CustomEvent("onLoadError",{bubbles:!0,composed:!0}))}};Ei.styles=[me,xs,H2],Fs([E()],Ei.prototype,"src",void 0),Fs([E()],Ei.prototype,"alt",void 0),Fs([E()],Ei.prototype,"size",void 0),Ei=Fs([V("wui-image")],Ei);var W2=te`
  :host {
    position: relative;
    background-color: var(--wui-color-gray-glass-002);
    display: flex;
    justify-content: center;
    align-items: center;
    width: var(--local-size);
    height: var(--local-size);
    border-radius: inherit;
    border-radius: var(--local-border-radius);
  }

  :host > wui-flex {
    overflow: hidden;
    border-radius: inherit;
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
    border: 1px solid var(--wui-color-gray-glass-010);
    pointer-events: none;
  }

  :host([name='Extension'])::after {
    border: 1px solid var(--wui-color-accent-glass-010);
  }

  :host([data-wallet-icon='allWallets']) {
    background-color: var(--wui-all-wallets-bg-100);
  }

  :host([data-wallet-icon='allWallets'])::after {
    border: 1px solid var(--wui-color-accent-glass-010);
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

  :host > wui-icon-box {
    position: absolute;
    overflow: hidden;
    right: -1px;
    bottom: -2px;
    z-index: 1;
    border: 2px solid var(--wui-color-bg-150, #1e1f1f);
    padding: 1px;
  }
`,Sr=function(t,e,r,i){var n=arguments.length,s=n<3?e:i,o;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")s=Reflect.decorate(t,e,r,i);else for(var a=t.length-1;a>=0;a--)(o=t[a])&&(s=(n<3?o(s):n>3?o(e,r,s):o(e,r))||s);return n>3&&s&&Object.defineProperty(e,r,s),s};let Gt=class extends Z{constructor(){super(...arguments),this.size="md",this.name="",this.installed=!1,this.badgeSize="xs"}render(){let t="xxs";return this.size==="lg"?t="m":this.size==="md"?t="xs":t="xxs",this.style.cssText=`
       --local-border-radius: var(--wui-border-radius-${t});
       --local-size: var(--wui-wallet-image-size-${this.size});
   `,this.walletIcon&&(this.dataset.walletIcon=this.walletIcon),y`
      <wui-flex justifyContent="center" alignItems="center"> ${this.templateVisual()} </wui-flex>
    `}templateVisual(){return this.imageSrc?y`<wui-image src=${this.imageSrc} alt=${this.name}></wui-image>`:this.walletIcon?y`<wui-icon
        data-parent-size="md"
        size="md"
        color="inherit"
        name=${this.walletIcon}
      ></wui-icon>`:y`<wui-icon
      data-parent-size=${this.size}
      size="inherit"
      color="inherit"
      name="walletPlaceholder"
    ></wui-icon>`}};Gt.styles=[ze,me,W2],Sr([E()],Gt.prototype,"size",void 0),Sr([E()],Gt.prototype,"name",void 0),Sr([E()],Gt.prototype,"imageSrc",void 0),Sr([E()],Gt.prototype,"walletIcon",void 0),Sr([E({type:Boolean})],Gt.prototype,"installed",void 0),Sr([E()],Gt.prototype,"badgeSize",void 0),Gt=Sr([V("wui-wallet-image")],Gt);var F2=te`
  :host {
    position: relative;
    border-radius: var(--wui-border-radius-xxs);
    width: 40px;
    height: 40px;
    overflow: hidden;
    background: var(--wui-color-gray-glass-002);
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
    border: 1px solid var(--wui-color-gray-glass-010);
    pointer-events: none;
  }

  :host > wui-wallet-image {
    width: 14px;
    height: 14px;
    border-radius: var(--wui-border-radius-5xs);
  }

  :host > wui-flex {
    padding: 2px;
    position: fixed;
    overflow: hidden;
    left: 34px;
    bottom: 8px;
    background: var(--dark-background-150, #1e1f1f);
    border-radius: 50%;
    z-index: 2;
    display: flex;
  }
`,Ou=function(t,e,r,i){var n=arguments.length,s=n<3?e:i,o;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")s=Reflect.decorate(t,e,r,i);else for(var a=t.length-1;a>=0;a--)(o=t[a])&&(s=(n<3?o(s):n>3?o(e,r,s):o(e,r))||s);return n>3&&s&&Object.defineProperty(e,r,s),s};const Pa=4;let qs=class extends Z{constructor(){super(...arguments),this.walletImages=[]}render(){const t=this.walletImages.length<Pa;return y`${this.walletImages.slice(0,Pa).map(({src:e,walletName:r})=>y`
            <wui-wallet-image
              size="inherit"
              imageSrc=${e}
              name=${ee(r)}
            ></wui-wallet-image>
          `)}
      ${t?[...Array(Pa-this.walletImages.length)].map(()=>y` <wui-wallet-image size="inherit" name=""></wui-wallet-image>`):null}
      <wui-flex>
        <wui-icon-box
          size="xxs"
          iconSize="xxs"
          iconcolor="success-100"
          backgroundcolor="success-100"
          icon="checkmark"
          background="opaque"
        ></wui-icon-box>
      </wui-flex>`}};qs.styles=[me,F2],Ou([E({type:Array})],qs.prototype,"walletImages",void 0),qs=Ou([V("wui-all-wallets-image")],qs);var q2=te`
  :host {
    display: flex;
    justify-content: center;
    align-items: center;
    height: var(--wui-spacing-m);
    padding: 0 var(--wui-spacing-3xs) !important;
    border-radius: var(--wui-border-radius-5xs);
    transition:
      border-radius var(--wui-duration-lg) var(--wui-ease-out-power-1),
      background-color var(--wui-duration-lg) var(--wui-ease-out-power-1);
    will-change: border-radius, background-color;
  }

  :host > wui-text {
    transform: translateY(5%);
  }

  :host([data-variant='main']) {
    background-color: var(--wui-color-accent-glass-015);
    color: var(--wui-color-accent-100);
  }

  :host([data-variant='shade']) {
    background-color: var(--wui-color-gray-glass-010);
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

  :host([data-size='lg']) {
    padding: 11px 5px !important;
  }

  :host([data-size='lg']) > wui-text {
    transform: translateY(2%);
  }
`,_a=function(t,e,r,i){var n=arguments.length,s=n<3?e:i,o;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")s=Reflect.decorate(t,e,r,i);else for(var a=t.length-1;a>=0;a--)(o=t[a])&&(s=(n<3?o(s):n>3?o(e,r,s):o(e,r))||s);return n>3&&s&&Object.defineProperty(e,r,s),s};let dn=class extends Z{constructor(){super(...arguments),this.variant="main",this.size="lg"}render(){this.dataset.variant=this.variant,this.dataset.size=this.size;const t=this.size==="md"?"mini-700":"micro-700";return y`
      <wui-text data-variant=${this.variant} variant=${t} color="inherit">
        <slot></slot>
      </wui-text>
    `}};dn.styles=[me,q2],_a([E()],dn.prototype,"variant",void 0),_a([E()],dn.prototype,"size",void 0),dn=_a([V("wui-tag")],dn);var V2=te`
  button {
    column-gap: var(--wui-spacing-s);
    padding: 7px var(--wui-spacing-l) 7px var(--wui-spacing-xs);
    width: 100%;
    background-color: var(--wui-color-gray-glass-002);
    border-radius: var(--wui-border-radius-xs);
    color: var(--wui-color-fg-100);
  }

  button > wui-text:nth-child(2) {
    display: flex;
    flex: 1;
  }

  button:disabled {
    background-color: var(--wui-color-gray-glass-015);
    color: var(--wui-color-gray-glass-015);
  }

  button:disabled > wui-tag {
    background-color: var(--wui-color-gray-glass-010);
    color: var(--wui-color-fg-300);
  }

  wui-icon {
    color: var(--wui-color-fg-200) !important;
  }
`,Ye=function(t,e,r,i){var n=arguments.length,s=n<3?e:i,o;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")s=Reflect.decorate(t,e,r,i);else for(var a=t.length-1;a>=0;a--)(o=t[a])&&(s=(n<3?o(s):n>3?o(e,r,s):o(e,r))||s);return n>3&&s&&Object.defineProperty(e,r,s),s};let je=class extends Z{constructor(){super(...arguments),this.walletImages=[],this.imageSrc="",this.name="",this.tabIdx=void 0,this.installed=!1,this.disabled=!1,this.showAllWallets=!1,this.loading=!1,this.loadingSpinnerColor="accent-100"}render(){return y`
      <button ?disabled=${this.disabled} tabindex=${ee(this.tabIdx)}>
        ${this.templateAllWallets()} ${this.templateWalletImage()}
        <wui-text variant="paragraph-500" color="inherit">${this.name}</wui-text>
        ${this.templateStatus()}
      </button>
    `}templateAllWallets(){return this.showAllWallets&&this.imageSrc?y` <wui-all-wallets-image .imageeSrc=${this.imageSrc}> </wui-all-wallets-image> `:this.showAllWallets&&this.walletIcon?y` <wui-wallet-image .walletIcon=${this.walletIcon} size="sm"> </wui-wallet-image> `:null}templateWalletImage(){return!this.showAllWallets&&this.imageSrc?y`<wui-wallet-image
        size="sm"
        imageSrc=${this.imageSrc}
        name=${this.name}
        .installed=${this.installed}
      ></wui-wallet-image>`:!this.showAllWallets&&!this.imageSrc?y`<wui-wallet-image size="sm" name=${this.name}></wui-wallet-image>`:null}templateStatus(){return this.loading?y`<wui-loading-spinner
        size="lg"
        color=${this.loadingSpinnerColor}
      ></wui-loading-spinner>`:this.tagLabel&&this.tagVariant?y`<wui-tag variant=${this.tagVariant}>${this.tagLabel}</wui-tag>`:this.icon?y`<wui-icon color="inherit" size="sm" name=${this.icon}></wui-icon>`:null}};je.styles=[me,ze,V2],Ye([E({type:Array})],je.prototype,"walletImages",void 0),Ye([E()],je.prototype,"imageSrc",void 0),Ye([E()],je.prototype,"name",void 0),Ye([E()],je.prototype,"tagLabel",void 0),Ye([E()],je.prototype,"tagVariant",void 0),Ye([E()],je.prototype,"icon",void 0),Ye([E()],je.prototype,"walletIcon",void 0),Ye([E()],je.prototype,"tabIdx",void 0),Ye([E({type:Boolean})],je.prototype,"installed",void 0),Ye([E({type:Boolean})],je.prototype,"disabled",void 0),Ye([E({type:Boolean})],je.prototype,"showAllWallets",void 0),Ye([E({type:Boolean})],je.prototype,"loading",void 0),Ye([E({type:String})],je.prototype,"loadingSpinnerColor",void 0),je=Ye([V("wui-list-wallet")],je);var hn=function(t,e,r,i){var n=arguments.length,s=n<3?e:i,o;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")s=Reflect.decorate(t,e,r,i);else for(var a=t.length-1;a>=0;a--)(o=t[a])&&(s=(n<3?o(s):n>3?o(e,r,s):o(e,r))||s);return n>3&&s&&Object.defineProperty(e,r,s),s};let Ai=class extends Z{constructor(){super(),this.unsubscribe=[],this.tabIdx=void 0,this.connectors=F.state.connectors,this.count=W.state.count,this.isFetchingRecommendedWallets=W.state.isFetchingRecommendedWallets,this.unsubscribe.push(F.subscribeKey("connectors",t=>this.connectors=t),W.subscribeKey("count",t=>this.count=t),W.subscribeKey("isFetchingRecommendedWallets",t=>this.isFetchingRecommendedWallets=t))}disconnectedCallback(){this.unsubscribe.forEach(t=>t())}render(){const t=this.connectors.find(o=>o.id==="walletConnect"),{allWallets:e}=O.state;if(!t||e==="HIDE"||e==="ONLY_MOBILE"&&!M.isMobile())return null;const r=W.state.featured.length,i=this.count+r,n=i<10?i:Math.floor(i/10)*10,s=n<i?`${n}+`:`${n}`;return y`
      <wui-list-wallet
        name="All Wallets"
        walletIcon="allWallets"
        showAllWallets
        @click=${this.onAllWallets.bind(this)}
        tagLabel=${s}
        tagVariant="shade"
        data-testid="all-wallets"
        tabIdx=${ee(this.tabIdx)}
        .loading=${this.isFetchingRecommendedWallets}
        loadingSpinnerColor=${this.isFetchingRecommendedWallets?"fg-300":"accent-100"}
      ></wui-list-wallet>
    `}onAllWallets(){le.sendEvent({type:"track",event:"CLICK_ALL_WALLETS"}),H.push("AllWallets")}};hn([E()],Ai.prototype,"tabIdx",void 0),hn([q()],Ai.prototype,"connectors",void 0),hn([q()],Ai.prototype,"count",void 0),hn([q()],Ai.prototype,"isFetchingRecommendedWallets",void 0),Ai=hn([V("w3m-all-wallets-widget")],Ai);var Ta=function(t,e,r,i){var n=arguments.length,s=n<3?e:i,o;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")s=Reflect.decorate(t,e,r,i);else for(var a=t.length-1;a>=0;a--)(o=t[a])&&(s=(n<3?o(s):n>3?o(e,r,s):o(e,r))||s);return n>3&&s&&Object.defineProperty(e,r,s),s};let Vs=class extends Z{constructor(){super(),this.unsubscribe=[],this.tabIdx=void 0,this.connectors=F.state.connectors,this.unsubscribe.push(F.subscribeKey("connectors",t=>this.connectors=t))}disconnectedCallback(){this.unsubscribe.forEach(t=>t())}render(){const t=this.connectors.filter(e=>e.type==="ANNOUNCED");return t!=null&&t.length?y`
      <wui-flex flexDirection="column" gap="xs">
        ${t.filter(rr.showConnector).map(e=>y`
              <wui-list-wallet
                imageSrc=${ee($e.getConnectorImage(e))}
                name=${e.name??"Unknown"}
                @click=${()=>this.onConnector(e)}
                tagVariant="success"
                tagLabel="installed"
                data-testid=${`wallet-selector-${e.id}`}
                .installed=${!0}
                tabIdx=${ee(this.tabIdx)}
              >
              </wui-list-wallet>
            `)}
      </wui-flex>
    `:(this.style.cssText="display: none",null)}onConnector(t){t.id==="walletConnect"?M.isMobile()?H.push("AllWallets"):H.push("ConnectingWalletConnect"):H.push("ConnectingExternal",{connector:t})}};Ta([E()],Vs.prototype,"tabIdx",void 0),Ta([q()],Vs.prototype,"connectors",void 0),Vs=Ta([V("w3m-connect-announced-widget")],Vs);var Zs=function(t,e,r,i){var n=arguments.length,s=n<3?e:i,o;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")s=Reflect.decorate(t,e,r,i);else for(var a=t.length-1;a>=0;a--)(o=t[a])&&(s=(n<3?o(s):n>3?o(e,r,s):o(e,r))||s);return n>3&&s&&Object.defineProperty(e,r,s),s};let pn=class extends Z{constructor(){super(),this.unsubscribe=[],this.tabIdx=void 0,this.connectors=F.state.connectors,this.loading=!1,this.unsubscribe.push(F.subscribeKey("connectors",t=>this.connectors=t)),M.isTelegram()&&M.isIos()&&(this.loading=!K.state.wcUri,this.unsubscribe.push(K.subscribeKey("wcUri",t=>this.loading=!t)))}disconnectedCallback(){this.unsubscribe.forEach(t=>t())}render(){const{customWallets:t}=O.state;if(!(t!=null&&t.length))return this.style.cssText="display: none",null;const e=this.filterOutDuplicateWallets(t);return y`<wui-flex flexDirection="column" gap="xs">
      ${e.map(r=>y`
          <wui-list-wallet
            imageSrc=${ee($e.getWalletImage(r))}
            name=${r.name??"Unknown"}
            @click=${()=>this.onConnectWallet(r)}
            data-testid=${`wallet-selector-${r.id}`}
            tabIdx=${ee(this.tabIdx)}
            ?loading=${this.loading}
          >
          </wui-list-wallet>
        `)}
    </wui-flex>`}filterOutDuplicateWallets(t){const e=G.getRecentWallets(),r=this.connectors.map(s=>{var o;return(o=s.info)==null?void 0:o.rdns}).filter(Boolean),i=e.map(s=>s.rdns).filter(Boolean),n=r.concat(i);if(n.includes("io.metamask.mobile")&&M.isMobile()){const s=n.indexOf("io.metamask.mobile");n[s]="io.metamask"}return t.filter(s=>!n.includes(String(s==null?void 0:s.rdns)))}onConnectWallet(t){this.loading||H.push("ConnectingWalletConnect",{wallet:t})}};Zs([E()],pn.prototype,"tabIdx",void 0),Zs([q()],pn.prototype,"connectors",void 0),Zs([q()],pn.prototype,"loading",void 0),pn=Zs([V("w3m-connect-custom-widget")],pn);var Oa=function(t,e,r,i){var n=arguments.length,s=n<3?e:i,o;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")s=Reflect.decorate(t,e,r,i);else for(var a=t.length-1;a>=0;a--)(o=t[a])&&(s=(n<3?o(s):n>3?o(e,r,s):o(e,r))||s);return n>3&&s&&Object.defineProperty(e,r,s),s};let Gs=class extends Z{constructor(){super(),this.unsubscribe=[],this.tabIdx=void 0,this.connectors=F.state.connectors,this.unsubscribe.push(F.subscribeKey("connectors",t=>this.connectors=t))}disconnectedCallback(){this.unsubscribe.forEach(t=>t())}render(){const t=this.connectors.filter(e=>e.type==="EXTERNAL").filter(rr.showConnector).filter(e=>e.id!==Q.CONNECTOR_ID.COINBASE_SDK);return t!=null&&t.length?y`
      <wui-flex flexDirection="column" gap="xs">
        ${t.map(e=>y`
            <wui-list-wallet
              imageSrc=${ee($e.getConnectorImage(e))}
              .installed=${!0}
              name=${e.name??"Unknown"}
              data-testid=${`wallet-selector-external-${e.id}`}
              @click=${()=>this.onConnector(e)}
              tabIdx=${ee(this.tabIdx)}
            >
            </wui-list-wallet>
          `)}
      </wui-flex>
    `:(this.style.cssText="display: none",null)}onConnector(t){H.push("ConnectingExternal",{connector:t})}};Oa([E()],Gs.prototype,"tabIdx",void 0),Oa([q()],Gs.prototype,"connectors",void 0),Gs=Oa([V("w3m-connect-external-widget")],Gs);var $a=function(t,e,r,i){var n=arguments.length,s=n<3?e:i,o;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")s=Reflect.decorate(t,e,r,i);else for(var a=t.length-1;a>=0;a--)(o=t[a])&&(s=(n<3?o(s):n>3?o(e,r,s):o(e,r))||s);return n>3&&s&&Object.defineProperty(e,r,s),s};let Ks=class extends Z{constructor(){super(...arguments),this.tabIdx=void 0,this.wallets=[]}render(){return this.wallets.length?y`
      <wui-flex flexDirection="column" gap="xs">
        ${this.wallets.map(t=>y`
            <wui-list-wallet
              data-testid=${`wallet-selector-featured-${t.id}`}
              imageSrc=${ee($e.getWalletImage(t))}
              name=${t.name??"Unknown"}
              @click=${()=>this.onConnectWallet(t)}
              tabIdx=${ee(this.tabIdx)}
            >
            </wui-list-wallet>
          `)}
      </wui-flex>
    `:(this.style.cssText="display: none",null)}onConnectWallet(t){F.selectWalletConnector(t)}};$a([E()],Ks.prototype,"tabIdx",void 0),$a([E()],Ks.prototype,"wallets",void 0),Ks=$a([V("w3m-connect-featured-widget")],Ks);var Ra=function(t,e,r,i){var n=arguments.length,s=n<3?e:i,o;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")s=Reflect.decorate(t,e,r,i);else for(var a=t.length-1;a>=0;a--)(o=t[a])&&(s=(n<3?o(s):n>3?o(e,r,s):o(e,r))||s);return n>3&&s&&Object.defineProperty(e,r,s),s};let Ys=class extends Z{constructor(){super(...arguments),this.tabIdx=void 0,this.connectors=[]}render(){var e;const t=this.connectors;return!(t!=null&&t.length)||t.length===1&&((e=t[0])==null?void 0:e.name)==="Browser Wallet"&&!M.isMobile()?(this.style.cssText="display: none",null):y`
      <wui-flex flexDirection="column" gap="xs">
        ${t.map(r=>{var n;const i=(n=r.info)==null?void 0:n.rdns;return!M.isMobile()&&r.name==="Browser Wallet"?null:!i&&!K.checkInstalled()?(this.style.cssText="display: none",null):rr.showConnector(r)?y`
            <wui-list-wallet
              imageSrc=${ee($e.getConnectorImage(r))}
              .installed=${!0}
              name=${r.name??"Unknown"}
              tagVariant="success"
              tagLabel="installed"
              data-testid=${`wallet-selector-${r.id}`}
              @click=${()=>this.onConnector(r)}
              tabIdx=${ee(this.tabIdx)}
            >
            </wui-list-wallet>
          `:null})}
      </wui-flex>
    `}onConnector(t){F.setActiveConnector(t),H.push("ConnectingExternal",{connector:t})}};Ra([E()],Ys.prototype,"tabIdx",void 0),Ra([E()],Ys.prototype,"connectors",void 0),Ys=Ra([V("w3m-connect-injected-widget")],Ys);var La=function(t,e,r,i){var n=arguments.length,s=n<3?e:i,o;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")s=Reflect.decorate(t,e,r,i);else for(var a=t.length-1;a>=0;a--)(o=t[a])&&(s=(n<3?o(s):n>3?o(e,r,s):o(e,r))||s);return n>3&&s&&Object.defineProperty(e,r,s),s};let Js=class extends Z{constructor(){super(),this.unsubscribe=[],this.tabIdx=void 0,this.connectors=F.state.connectors,this.unsubscribe.push(F.subscribeKey("connectors",t=>this.connectors=t))}disconnectedCallback(){this.unsubscribe.forEach(t=>t())}render(){const t=this.connectors.filter(e=>e.type==="MULTI_CHAIN"&&e.name!=="WalletConnect");return t!=null&&t.length?y`
      <wui-flex flexDirection="column" gap="xs">
        ${t.map(e=>y`
            <wui-list-wallet
              imageSrc=${ee($e.getConnectorImage(e))}
              .installed=${!0}
              name=${e.name??"Unknown"}
              tagVariant="shade"
              tagLabel="multichain"
              data-testid=${`wallet-selector-${e.id}`}
              @click=${()=>this.onConnector(e)}
              tabIdx=${ee(this.tabIdx)}
            >
            </wui-list-wallet>
          `)}
      </wui-flex>
    `:(this.style.cssText="display: none",null)}onConnector(t){F.setActiveConnector(t),H.push("ConnectingMultiChain")}};La([E()],Js.prototype,"tabIdx",void 0),La([q()],Js.prototype,"connectors",void 0),Js=La([V("w3m-connect-multi-chain-widget")],Js);var Xs=function(t,e,r,i){var n=arguments.length,s=n<3?e:i,o;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")s=Reflect.decorate(t,e,r,i);else for(var a=t.length-1;a>=0;a--)(o=t[a])&&(s=(n<3?o(s):n>3?o(e,r,s):o(e,r))||s);return n>3&&s&&Object.defineProperty(e,r,s),s};let fn=class extends Z{constructor(){super(),this.unsubscribe=[],this.tabIdx=void 0,this.connectors=F.state.connectors,this.loading=!1,this.unsubscribe.push(F.subscribeKey("connectors",t=>this.connectors=t)),M.isTelegram()&&M.isIos()&&(this.loading=!K.state.wcUri,this.unsubscribe.push(K.subscribeKey("wcUri",t=>this.loading=!t)))}render(){const t=G.getRecentWallets().filter(e=>!ii.isExcluded(e)).filter(e=>!this.hasWalletConnector(e)).filter(e=>this.isWalletCompatibleWithCurrentChain(e));return t.length?y`
      <wui-flex flexDirection="column" gap="xs">
        ${t.map(e=>y`
            <wui-list-wallet
              imageSrc=${ee($e.getWalletImage(e))}
              name=${e.name??"Unknown"}
              @click=${()=>this.onConnectWallet(e)}
              tagLabel="recent"
              tagVariant="shade"
              tabIdx=${ee(this.tabIdx)}
              ?loading=${this.loading}
            >
            </wui-list-wallet>
          `)}
      </wui-flex>
    `:(this.style.cssText="display: none",null)}onConnectWallet(t){this.loading||F.selectWalletConnector(t)}hasWalletConnector(t){return this.connectors.some(e=>e.id===t.id||e.name===t.name)}isWalletCompatibleWithCurrentChain(t){const e=w.state.activeChain;return e&&t.chains?t.chains.some(r=>{const i=r.split(":")[0];return e===i}):!0}};Xs([E()],fn.prototype,"tabIdx",void 0),Xs([q()],fn.prototype,"connectors",void 0),Xs([q()],fn.prototype,"loading",void 0),fn=Xs([V("w3m-connect-recent-widget")],fn);var Qs=function(t,e,r,i){var n=arguments.length,s=n<3?e:i,o;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")s=Reflect.decorate(t,e,r,i);else for(var a=t.length-1;a>=0;a--)(o=t[a])&&(s=(n<3?o(s):n>3?o(e,r,s):o(e,r))||s);return n>3&&s&&Object.defineProperty(e,r,s),s};let gn=class extends Z{constructor(){super(),this.unsubscribe=[],this.tabIdx=void 0,this.wallets=[],this.loading=!1,M.isTelegram()&&M.isIos()&&(this.loading=!K.state.wcUri,this.unsubscribe.push(K.subscribeKey("wcUri",t=>this.loading=!t)))}render(){const{connectors:t}=F.state,{customWallets:e,featuredWalletIds:r}=O.state,i=G.getRecentWallets(),n=t.find(l=>l.id==="walletConnect"),s=t.filter(l=>l.type==="INJECTED"||l.type==="ANNOUNCED"||l.type==="MULTI_CHAIN").filter(l=>l.name!=="Browser Wallet");if(!n)return null;if(r||e||!this.wallets.length)return this.style.cssText="display: none",null;const o=s.length+i.length,a=Math.max(0,2-o),c=ii.filterOutDuplicateWallets(this.wallets).slice(0,a);return c.length?y`
      <wui-flex flexDirection="column" gap="xs">
        ${c.map(l=>y`
            <wui-list-wallet
              imageSrc=${ee($e.getWalletImage(l))}
              name=${(l==null?void 0:l.name)??"Unknown"}
              @click=${()=>this.onConnectWallet(l)}
              tabIdx=${ee(this.tabIdx)}
              ?loading=${this.loading}
            >
            </wui-list-wallet>
          `)}
      </wui-flex>
    `:(this.style.cssText="display: none",null)}onConnectWallet(t){if(this.loading)return;const e=F.getConnector(t.id,t.rdns);e?H.push("ConnectingExternal",{connector:e}):H.push("ConnectingWalletConnect",{wallet:t})}};Qs([E()],gn.prototype,"tabIdx",void 0),Qs([E()],gn.prototype,"wallets",void 0),Qs([q()],gn.prototype,"loading",void 0),gn=Qs([V("w3m-connect-recommended-widget")],gn);var eo=function(t,e,r,i){var n=arguments.length,s=n<3?e:i,o;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")s=Reflect.decorate(t,e,r,i);else for(var a=t.length-1;a>=0;a--)(o=t[a])&&(s=(n<3?o(s):n>3?o(e,r,s):o(e,r))||s);return n>3&&s&&Object.defineProperty(e,r,s),s};let wn=class extends Z{constructor(){super(),this.unsubscribe=[],this.tabIdx=void 0,this.connectors=F.state.connectors,this.connectorImages=Qe.state.connectorImages,this.unsubscribe.push(F.subscribeKey("connectors",t=>this.connectors=t),Qe.subscribeKey("connectorImages",t=>this.connectorImages=t))}disconnectedCallback(){this.unsubscribe.forEach(t=>t())}render(){if(M.isMobile())return this.style.cssText="display: none",null;const t=this.connectors.find(r=>r.id==="walletConnect");if(!t)return this.style.cssText="display: none",null;const e=t.imageUrl||this.connectorImages[(t==null?void 0:t.imageId)??""];return y`
      <wui-list-wallet
        imageSrc=${ee(e)}
        name=${t.name??"Unknown"}
        @click=${()=>this.onConnector(t)}
        tagLabel="qr code"
        tagVariant="main"
        tabIdx=${ee(this.tabIdx)}
        data-testid="wallet-selector-walletconnect"
      >
      </wui-list-wallet>
    `}onConnector(t){F.setActiveConnector(t),H.push("ConnectingWalletConnect")}};eo([E()],wn.prototype,"tabIdx",void 0),eo([q()],wn.prototype,"connectors",void 0),eo([q()],wn.prototype,"connectorImages",void 0),wn=eo([V("w3m-connect-walletconnect-widget")],wn);var Z2=te`
  :host {
    margin-top: var(--wui-spacing-3xs);
  }
  wui-separator {
    margin: var(--wui-spacing-m) calc(var(--wui-spacing-m) * -1) var(--wui-spacing-xs)
      calc(var(--wui-spacing-m) * -1);
    width: calc(100% + var(--wui-spacing-s) * 2);
  }
`,mn=function(t,e,r,i){var n=arguments.length,s=n<3?e:i,o;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")s=Reflect.decorate(t,e,r,i);else for(var a=t.length-1;a>=0;a--)(o=t[a])&&(s=(n<3?o(s):n>3?o(e,r,s):o(e,r))||s);return n>3&&s&&Object.defineProperty(e,r,s),s};let Pr=class extends Z{constructor(){super(),this.unsubscribe=[],this.tabIdx=void 0,this.connectors=F.state.connectors,this.recommended=W.state.recommended,this.featured=W.state.featured,this.unsubscribe.push(F.subscribeKey("connectors",t=>this.connectors=t),W.subscribeKey("recommended",t=>this.recommended=t),W.subscribeKey("featured",t=>this.featured=t))}disconnectedCallback(){this.unsubscribe.forEach(t=>t())}render(){return y`
      <wui-flex flexDirection="column" gap="xs"> ${this.connectorListTemplate()} </wui-flex>
    `}connectorListTemplate(){const{custom:t,recent:e,announced:r,injected:i,multiChain:n,recommended:s,featured:o,external:a}=rr.getConnectorsByType(this.connectors,this.recommended,this.featured);return rr.getConnectorTypeOrder({custom:t,recent:e,announced:r,injected:i,multiChain:n,recommended:s,featured:o,external:a}).map(c=>{switch(c){case"injected":return y`
            ${n.length?y`<w3m-connect-multi-chain-widget
                  tabIdx=${ee(this.tabIdx)}
                ></w3m-connect-multi-chain-widget>`:null}
            ${r.length?y`<w3m-connect-announced-widget
                  tabIdx=${ee(this.tabIdx)}
                ></w3m-connect-announced-widget>`:null}
            ${i.length?y`<w3m-connect-injected-widget
                  .connectors=${i}
                  tabIdx=${ee(this.tabIdx)}
                ></w3m-connect-injected-widget>`:null}
          `;case"walletConnect":return y`<w3m-connect-walletconnect-widget
            tabIdx=${ee(this.tabIdx)}
          ></w3m-connect-walletconnect-widget>`;case"recent":return y`<w3m-connect-recent-widget
            tabIdx=${ee(this.tabIdx)}
          ></w3m-connect-recent-widget>`;case"featured":return y`<w3m-connect-featured-widget
            .wallets=${o}
            tabIdx=${ee(this.tabIdx)}
          ></w3m-connect-featured-widget>`;case"custom":return y`<w3m-connect-custom-widget
            tabIdx=${ee(this.tabIdx)}
          ></w3m-connect-custom-widget>`;case"external":return y`<w3m-connect-external-widget
            tabIdx=${ee(this.tabIdx)}
          ></w3m-connect-external-widget>`;case"recommended":return y`<w3m-connect-recommended-widget
            .wallets=${s}
            tabIdx=${ee(this.tabIdx)}
          ></w3m-connect-recommended-widget>`;default:return console.warn(`Unknown connector type: ${c}`),null}})}};Pr.styles=Z2,mn([E()],Pr.prototype,"tabIdx",void 0),mn([q()],Pr.prototype,"connectors",void 0),mn([q()],Pr.prototype,"recommended",void 0),mn([q()],Pr.prototype,"featured",void 0),Pr=mn([V("w3m-connector-list")],Pr);var G2=te`
  :host {
    display: inline-flex;
    background-color: var(--wui-color-gray-glass-002);
    border-radius: var(--wui-border-radius-3xl);
    padding: var(--wui-spacing-3xs);
    position: relative;
    height: 36px;
    min-height: 36px;
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
    background-color: var(--wui-color-gray-glass-002);
    box-shadow: inset 0 0 0 1px var(--wui-color-gray-glass-002);
    transform: translateX(calc(var(--local-tab) * var(--local-tab-width)));
    transition: transform var(--wui-ease-out-power-1) var(--wui-duration-md);
    will-change: background-color, opacity;
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
    transition: color var(--wui-e ase-out-power-1) var(--wui-duration-md);
    will-change: color;
  }

  button {
    width: var(--local-tab-width);
    transition: background-color var(--wui-ease-out-power-1) var(--wui-duration-md);
    will-change: background-color;
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
    transition: all var(--wui-ease-out-power-1) var(--wui-duration-lg);
    color: var(--wui-color-fg-125);
  }

  button:hover:enabled > wui-text,
  button:active:enabled > wui-text {
    transition: all var(--wui-ease-out-power-1) var(--wui-duration-lg);
    color: var(--wui-color-fg-125);
  }

  button {
    border-radius: var(--wui-border-radius-3xl);
  }
`,cr=function(t,e,r,i){var n=arguments.length,s=n<3?e:i,o;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")s=Reflect.decorate(t,e,r,i);else for(var a=t.length-1;a>=0;a--)(o=t[a])&&(s=(n<3?o(s):n>3?o(e,r,s):o(e,r))||s);return n>3&&s&&Object.defineProperty(e,r,s),s};let Rt=class extends Z{constructor(){super(...arguments),this.tabs=[],this.onTabChange=()=>null,this.buttons=[],this.disabled=!1,this.localTabWidth="100px",this.activeTab=0,this.isDense=!1}render(){return this.isDense=this.tabs.length>3,this.style.cssText=`
      --local-tab: ${this.activeTab};
      --local-tab-width: ${this.localTabWidth};
    `,this.dataset.type=this.isDense?"flex":"block",this.tabs.map((t,e)=>{var i;const r=e===this.activeTab;return y`
        <button
          ?disabled=${this.disabled}
          @click=${()=>this.onTabClick(e)}
          data-active=${r}
          data-testid="tab-${(i=t.label)==null?void 0:i.toLowerCase()}"
        >
          ${this.iconTemplate(t)}
          <wui-text variant="small-600" color="inherit"> ${t.label} </wui-text>
        </button>
      `})}firstUpdated(){this.shadowRoot&&this.isDense&&(this.buttons=[...this.shadowRoot.querySelectorAll("button")],setTimeout(()=>{this.animateTabs(0,!0)},0))}iconTemplate(t){return t.icon?y`<wui-icon size="xs" color="inherit" name=${t.icon}></wui-icon>`:null}onTabClick(t){this.buttons&&this.animateTabs(t,!1),this.activeTab=t,this.onTabChange(t)}animateTabs(t,e){const r=this.buttons[this.activeTab],i=this.buttons[t],n=r==null?void 0:r.querySelector("wui-text"),s=i==null?void 0:i.querySelector("wui-text"),o=i==null?void 0:i.getBoundingClientRect(),a=s==null?void 0:s.getBoundingClientRect();r&&n&&!e&&t!==this.activeTab&&(n.animate([{opacity:0}],{duration:50,easing:"ease",fill:"forwards"}),r.animate([{width:"34px"}],{duration:500,easing:"ease",fill:"forwards"})),i&&o&&a&&s&&(t!==this.activeTab||e)&&(this.localTabWidth=`${Math.round(o.width+a.width)+6}px`,i.animate([{width:`${o.width+a.width}px`}],{duration:e?0:500,fill:"forwards",easing:"ease"}),s.animate([{opacity:1}],{duration:e?0:125,delay:e?0:200,fill:"forwards",easing:"ease"}))}};Rt.styles=[me,ze,G2],cr([E({type:Array})],Rt.prototype,"tabs",void 0),cr([E()],Rt.prototype,"onTabChange",void 0),cr([E({type:Array})],Rt.prototype,"buttons",void 0),cr([E({type:Boolean})],Rt.prototype,"disabled",void 0),cr([E()],Rt.prototype,"localTabWidth",void 0),cr([q()],Rt.prototype,"activeTab",void 0),cr([q()],Rt.prototype,"isDense",void 0),Rt=cr([V("wui-tabs")],Rt);var to=function(t,e,r,i){var n=arguments.length,s=n<3?e:i,o;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")s=Reflect.decorate(t,e,r,i);else for(var a=t.length-1;a>=0;a--)(o=t[a])&&(s=(n<3?o(s):n>3?o(e,r,s):o(e,r))||s);return n>3&&s&&Object.defineProperty(e,r,s),s};let vn=class extends Z{constructor(){super(),this.platformTabs=[],this.unsubscribe=[],this.platforms=[],this.onSelectPlatfrom=void 0,this.buffering=!1,this.unsubscribe.push(K.subscribeKey("buffering",t=>this.buffering=t))}disconnectCallback(){this.unsubscribe.forEach(t=>t())}render(){const t=this.generateTabs();return y`
      <wui-flex justifyContent="center" .padding=${["0","0","l","0"]}>
        <wui-tabs
          ?disabled=${this.buffering}
          .tabs=${t}
          .onTabChange=${this.onTabChange.bind(this)}
        ></wui-tabs>
      </wui-flex>
    `}generateTabs(){const t=this.platforms.map(e=>e==="browser"?{label:"Browser",icon:"extension",platform:"browser"}:e==="mobile"?{label:"Mobile",icon:"mobile",platform:"mobile"}:e==="qrcode"?{label:"Mobile",icon:"mobile",platform:"qrcode"}:e==="web"?{label:"Webapp",icon:"browser",platform:"web"}:e==="desktop"?{label:"Desktop",icon:"desktop",platform:"desktop"}:{label:"Browser",icon:"extension",platform:"unsupported"});return this.platformTabs=t.map(({platform:e})=>e),t}onTabChange(t){var r;const e=this.platformTabs[t];e&&((r=this.onSelectPlatfrom)==null||r.call(this,e))}};to([E({type:Array})],vn.prototype,"platforms",void 0),to([E()],vn.prototype,"onSelectPlatfrom",void 0),to([q()],vn.prototype,"buffering",void 0),vn=to([V("w3m-connecting-header")],vn);var K2=te`
  :host {
    display: flex;
  }

  :host([data-size='sm']) > svg {
    width: 12px;
    height: 12px;
  }

  :host([data-size='md']) > svg {
    width: 16px;
    height: 16px;
  }

  :host([data-size='lg']) > svg {
    width: 24px;
    height: 24px;
  }

  :host([data-size='xl']) > svg {
    width: 32px;
    height: 32px;
  }

  svg {
    animation: rotate 2s linear infinite;
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
`,Ba=function(t,e,r,i){var n=arguments.length,s=n<3?e:i,o;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")s=Reflect.decorate(t,e,r,i);else for(var a=t.length-1;a>=0;a--)(o=t[a])&&(s=(n<3?o(s):n>3?o(e,r,s):o(e,r))||s);return n>3&&s&&Object.defineProperty(e,r,s),s};let bn=class extends Z{constructor(){super(...arguments),this.color="accent-100",this.size="lg"}render(){return this.style.cssText=`--local-color: ${this.color==="inherit"?"inherit":`var(--wui-color-${this.color})`}`,this.dataset.size=this.size,y`<svg viewBox="25 25 50 50">
      <circle r="20" cy="50" cx="50"></circle>
    </svg>`}};bn.styles=[me,K2],Ba([E()],bn.prototype,"color",void 0),Ba([E()],bn.prototype,"size",void 0),bn=Ba([V("wui-loading-spinner")],bn);var Y2=te`
  :host {
    width: var(--local-width);
    position: relative;
  }

  button {
    border: none;
    border-radius: var(--local-border-radius);
    width: var(--local-width);
    white-space: nowrap;
  }

  /* -- Sizes --------------------------------------------------- */
  button[data-size='md'] {
    padding: 8.2px var(--wui-spacing-l) 9px var(--wui-spacing-l);
    height: 36px;
  }

  button[data-size='md'][data-icon-left='true'][data-icon-right='false'] {
    padding: 8.2px var(--wui-spacing-l) 9px var(--wui-spacing-s);
  }

  button[data-size='md'][data-icon-right='true'][data-icon-left='false'] {
    padding: 8.2px var(--wui-spacing-s) 9px var(--wui-spacing-l);
  }

  button[data-size='lg'] {
    padding: var(--wui-spacing-m) var(--wui-spacing-2l);
    height: 48px;
  }

  /* -- Variants --------------------------------------------------------- */
  button[data-variant='main'] {
    background-color: var(--wui-color-accent-100);
    color: var(--wui-color-inverse-100);
    border: none;
    box-shadow: inset 0 0 0 1px var(--wui-color-gray-glass-010);
  }

  button[data-variant='inverse'] {
    background-color: var(--wui-color-inverse-100);
    color: var(--wui-color-inverse-000);
    border: none;
    box-shadow: inset 0 0 0 1px var(--wui-color-gray-glass-010);
  }

  button[data-variant='accent'] {
    background-color: var(--wui-color-accent-glass-010);
    color: var(--wui-color-accent-100);
    border: none;
    box-shadow: inset 0 0 0 1px var(--wui-color-gray-glass-005);
  }

  button[data-variant='accent-error'] {
    background: var(--wui-color-error-glass-015);
    color: var(--wui-color-error-100);
    border: none;
    box-shadow: inset 0 0 0 1px var(--wui-color-error-glass-010);
  }

  button[data-variant='accent-success'] {
    background: var(--wui-color-success-glass-015);
    color: var(--wui-color-success-100);
    border: none;
    box-shadow: inset 0 0 0 1px var(--wui-color-success-glass-010);
  }

  button[data-variant='neutral'] {
    background: transparent;
    color: var(--wui-color-fg-100);
    border: none;
    box-shadow: inset 0 0 0 1px var(--wui-color-gray-glass-005);
  }

  /* -- Focus states --------------------------------------------------- */
  button[data-variant='main']:focus-visible:enabled {
    background-color: var(--wui-color-accent-090);
    box-shadow:
      inset 0 0 0 1px var(--wui-color-accent-100),
      0 0 0 4px var(--wui-color-accent-glass-020);
  }
  button[data-variant='inverse']:focus-visible:enabled {
    background-color: var(--wui-color-inverse-100);
    box-shadow:
      inset 0 0 0 1px var(--wui-color-gray-glass-010),
      0 0 0 4px var(--wui-color-accent-glass-020);
  }
  button[data-variant='accent']:focus-visible:enabled {
    background-color: var(--wui-color-accent-glass-010);
    box-shadow:
      inset 0 0 0 1px var(--wui-color-accent-100),
      0 0 0 4px var(--wui-color-accent-glass-020);
  }
  button[data-variant='accent-error']:focus-visible:enabled {
    background: var(--wui-color-error-glass-015);
    box-shadow:
      inset 0 0 0 1px var(--wui-color-error-100),
      0 0 0 4px var(--wui-color-error-glass-020);
  }
  button[data-variant='accent-success']:focus-visible:enabled {
    background: var(--wui-color-success-glass-015);
    box-shadow:
      inset 0 0 0 1px var(--wui-color-success-100),
      0 0 0 4px var(--wui-color-success-glass-020);
  }
  button[data-variant='neutral']:focus-visible:enabled {
    background: var(--wui-color-gray-glass-005);
    box-shadow:
      inset 0 0 0 1px var(--wui-color-gray-glass-010),
      0 0 0 4px var(--wui-color-gray-glass-002);
  }

  /* -- Hover & Active states ----------------------------------------------------------- */
  @media (hover: hover) and (pointer: fine) {
    button[data-variant='main']:hover:enabled {
      background-color: var(--wui-color-accent-090);
    }

    button[data-variant='main']:active:enabled {
      background-color: var(--wui-color-accent-080);
    }

    button[data-variant='accent']:hover:enabled {
      background-color: var(--wui-color-accent-glass-015);
    }

    button[data-variant='accent']:active:enabled {
      background-color: var(--wui-color-accent-glass-020);
    }

    button[data-variant='accent-error']:hover:enabled {
      background: var(--wui-color-error-glass-020);
      color: var(--wui-color-error-100);
    }

    button[data-variant='accent-error']:active:enabled {
      background: var(--wui-color-error-glass-030);
      color: var(--wui-color-error-100);
    }

    button[data-variant='accent-success']:hover:enabled {
      background: var(--wui-color-success-glass-020);
      color: var(--wui-color-success-100);
    }

    button[data-variant='accent-success']:active:enabled {
      background: var(--wui-color-success-glass-030);
      color: var(--wui-color-success-100);
    }

    button[data-variant='neutral']:hover:enabled {
      background: var(--wui-color-gray-glass-002);
    }

    button[data-variant='neutral']:active:enabled {
      background: var(--wui-color-gray-glass-005);
    }

    button[data-size='lg'][data-icon-left='true'][data-icon-right='false'] {
      padding-left: var(--wui-spacing-m);
    }

    button[data-size='lg'][data-icon-right='true'][data-icon-left='false'] {
      padding-right: var(--wui-spacing-m);
    }
  }

  /* -- Disabled state --------------------------------------------------- */
  button:disabled {
    background-color: var(--wui-color-gray-glass-002);
    box-shadow: inset 0 0 0 1px var(--wui-color-gray-glass-002);
    color: var(--wui-color-gray-glass-020);
    cursor: not-allowed;
  }

  button > wui-text {
    transition: opacity var(--wui-ease-out-power-1) var(--wui-duration-md);
    will-change: opacity;
    opacity: var(--local-opacity-100);
  }

  ::slotted(*) {
    transition: opacity var(--wui-ease-out-power-1) var(--wui-duration-md);
    will-change: opacity;
    opacity: var(--local-opacity-100);
  }

  wui-loading-spinner {
    position: absolute;
    left: 50%;
    top: 50%;
    transform: translate(-50%, -50%);
    opacity: var(--local-opacity-000);
  }
`,Lt=function(t,e,r,i){var n=arguments.length,s=n<3?e:i,o;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")s=Reflect.decorate(t,e,r,i);else for(var a=t.length-1;a>=0;a--)(o=t[a])&&(s=(n<3?o(s):n>3?o(e,r,s):o(e,r))||s);return n>3&&s&&Object.defineProperty(e,r,s),s};const $u={main:"inverse-100",inverse:"inverse-000",accent:"accent-100","accent-error":"error-100","accent-success":"success-100",neutral:"fg-100",disabled:"gray-glass-020"},J2={lg:"paragraph-600",md:"small-600"},X2={lg:"md",md:"md"};let mt=class extends Z{constructor(){super(...arguments),this.size="lg",this.disabled=!1,this.fullWidth=!1,this.loading=!1,this.variant="main",this.hasIconLeft=!1,this.hasIconRight=!1,this.borderRadius="m"}render(){this.style.cssText=`
    --local-width: ${this.fullWidth?"100%":"auto"};
    --local-opacity-100: ${this.loading?0:1};
    --local-opacity-000: ${this.loading?1:0};
    --local-border-radius: var(--wui-border-radius-${this.borderRadius});
    `;const t=this.textVariant??J2[this.size];return y`
      <button
        data-variant=${this.variant}
        data-icon-left=${this.hasIconLeft}
        data-icon-right=${this.hasIconRight}
        data-size=${this.size}
        ?disabled=${this.disabled}
      >
        ${this.loadingTemplate()}
        <slot name="iconLeft" @slotchange=${()=>this.handleSlotLeftChange()}></slot>
        <wui-text variant=${t} color="inherit">
          <slot></slot>
        </wui-text>
        <slot name="iconRight" @slotchange=${()=>this.handleSlotRightChange()}></slot>
      </button>
    `}handleSlotLeftChange(){this.hasIconLeft=!0}handleSlotRightChange(){this.hasIconRight=!0}loadingTemplate(){if(this.loading){const t=X2[this.size],e=this.disabled?$u.disabled:$u[this.variant];return y`<wui-loading-spinner color=${e} size=${t}></wui-loading-spinner>`}return y``}};mt.styles=[me,ze,Y2],Lt([E()],mt.prototype,"size",void 0),Lt([E({type:Boolean})],mt.prototype,"disabled",void 0),Lt([E({type:Boolean})],mt.prototype,"fullWidth",void 0),Lt([E({type:Boolean})],mt.prototype,"loading",void 0),Lt([E()],mt.prototype,"variant",void 0),Lt([E({type:Boolean})],mt.prototype,"hasIconLeft",void 0),Lt([E({type:Boolean})],mt.prototype,"hasIconRight",void 0),Lt([E()],mt.prototype,"borderRadius",void 0),Lt([E()],mt.prototype,"textVariant",void 0),mt=Lt([V("wui-button")],mt);var Q2=te`
  button {
    padding: var(--wui-spacing-4xs) var(--wui-spacing-xxs);
    border-radius: var(--wui-border-radius-3xs);
    background-color: transparent;
    color: var(--wui-color-accent-100);
  }

  button:disabled {
    background-color: transparent;
    color: var(--wui-color-gray-glass-015);
  }

  button:hover {
    background-color: var(--wui-color-gray-glass-005);
  }
`,ro=function(t,e,r,i){var n=arguments.length,s=n<3?e:i,o;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")s=Reflect.decorate(t,e,r,i);else for(var a=t.length-1;a>=0;a--)(o=t[a])&&(s=(n<3?o(s):n>3?o(e,r,s):o(e,r))||s);return n>3&&s&&Object.defineProperty(e,r,s),s};let ki=class extends Z{constructor(){super(...arguments),this.tabIdx=void 0,this.disabled=!1,this.color="inherit"}render(){return y`
      <button ?disabled=${this.disabled} tabindex=${ee(this.tabIdx)}>
        <slot name="iconLeft"></slot>
        <wui-text variant="small-600" color=${this.color}>
          <slot></slot>
        </wui-text>
        <slot name="iconRight"></slot>
      </button>
    `}};ki.styles=[me,ze,Q2],ro([E()],ki.prototype,"tabIdx",void 0),ro([E({type:Boolean})],ki.prototype,"disabled",void 0),ro([E()],ki.prototype,"color",void 0),ki=ro([V("wui-link")],ki);var ev=te`
  :host {
    display: block;
    width: var(--wui-box-size-md);
    height: var(--wui-box-size-md);
  }

  svg {
    width: var(--wui-box-size-md);
    height: var(--wui-box-size-md);
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
`,Ru=function(t,e,r,i){var n=arguments.length,s=n<3?e:i,o;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")s=Reflect.decorate(t,e,r,i);else for(var a=t.length-1;a>=0;a--)(o=t[a])&&(s=(n<3?o(s):n>3?o(e,r,s):o(e,r))||s);return n>3&&s&&Object.defineProperty(e,r,s),s};let io=class extends Z{constructor(){super(...arguments),this.radius=36}render(){return this.svgLoaderTemplate()}svgLoaderTemplate(){const t=this.radius>50?50:this.radius,e=36-t,r=116+e,i=245+e,n=360+e*1.75;return y`
      <svg viewBox="0 0 110 110" width="110" height="110">
        <rect
          x="2"
          y="2"
          width="106"
          height="106"
          rx=${t}
          stroke-dasharray="${r} ${i}"
          stroke-dashoffset=${n}
        />
      </svg>
    `}};io.styles=[me,ev],Ru([E({type:Number})],io.prototype,"radius",void 0),io=Ru([V("wui-loading-thumbnail")],io);var tv=te`
  button {
    border: none;
    border-radius: var(--wui-border-radius-3xl);
  }

  button[data-variant='main'] {
    background-color: var(--wui-color-accent-100);
    color: var(--wui-color-inverse-100);
    box-shadow: inset 0 0 0 1px var(--wui-color-gray-glass-010);
  }

  button[data-variant='accent'] {
    background-color: var(--wui-color-accent-glass-010);
    color: var(--wui-color-accent-100);
    box-shadow: inset 0 0 0 1px var(--wui-color-gray-glass-005);
  }

  button[data-variant='gray'] {
    background-color: transparent;
    color: var(--wui-color-fg-200);
    box-shadow: inset 0 0 0 1px var(--wui-color-gray-glass-010);
  }

  button[data-variant='shade'] {
    background-color: transparent;
    color: var(--wui-color-accent-100);
    box-shadow: inset 0 0 0 1px var(--wui-color-gray-glass-010);
  }

  button[data-size='sm'] {
    height: 32px;
    padding: 0 var(--wui-spacing-s);
  }

  button[data-size='md'] {
    height: 40px;
    padding: 0 var(--wui-spacing-l);
  }

  button[data-size='sm'] > wui-image {
    width: 16px;
    height: 16px;
  }

  button[data-size='md'] > wui-image {
    width: 24px;
    height: 24px;
  }

  button[data-size='sm'] > wui-icon {
    width: 12px;
    height: 12px;
  }

  button[data-size='md'] > wui-icon {
    width: 14px;
    height: 14px;
  }

  wui-image {
    border-radius: var(--wui-border-radius-3xl);
    overflow: hidden;
  }

  button.disabled > wui-icon,
  button.disabled > wui-image {
    filter: grayscale(1);
  }

  button[data-variant='main'] > wui-image {
    box-shadow: inset 0 0 0 1px var(--wui-color-accent-090);
  }

  button[data-variant='shade'] > wui-image,
  button[data-variant='gray'] > wui-image {
    box-shadow: inset 0 0 0 1px var(--wui-color-gray-glass-010);
  }

  @media (hover: hover) and (pointer: fine) {
    button[data-variant='main']:focus-visible {
      background-color: var(--wui-color-accent-090);
    }

    button[data-variant='main']:hover:enabled {
      background-color: var(--wui-color-accent-090);
    }

    button[data-variant='main']:active:enabled {
      background-color: var(--wui-color-accent-080);
    }

    button[data-variant='accent']:hover:enabled {
      background-color: var(--wui-color-accent-glass-015);
    }

    button[data-variant='accent']:active:enabled {
      background-color: var(--wui-color-accent-glass-020);
    }

    button[data-variant='shade']:focus-visible,
    button[data-variant='gray']:focus-visible,
    button[data-variant='shade']:hover,
    button[data-variant='gray']:hover {
      background-color: var(--wui-color-gray-glass-002);
    }

    button[data-variant='gray']:active,
    button[data-variant='shade']:active {
      background-color: var(--wui-color-gray-glass-005);
    }
  }

  button.disabled {
    color: var(--wui-color-gray-glass-020);
    background-color: var(--wui-color-gray-glass-002);
    box-shadow: inset 0 0 0 1px var(--wui-color-gray-glass-002);
    pointer-events: none;
  }
`,_r=function(t,e,r,i){var n=arguments.length,s=n<3?e:i,o;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")s=Reflect.decorate(t,e,r,i);else for(var a=t.length-1;a>=0;a--)(o=t[a])&&(s=(n<3?o(s):n>3?o(e,r,s):o(e,r))||s);return n>3&&s&&Object.defineProperty(e,r,s),s};let Kt=class extends Z{constructor(){super(...arguments),this.variant="accent",this.imageSrc="",this.disabled=!1,this.icon="externalLink",this.size="md",this.text=""}render(){const t=this.size==="sm"?"small-600":"paragraph-600";return y`
      <button
        class=${this.disabled?"disabled":""}
        data-variant=${this.variant}
        data-size=${this.size}
      >
        ${this.imageSrc?y`<wui-image src=${this.imageSrc}></wui-image>`:null}
        <wui-text variant=${t} color="inherit"> ${this.text} </wui-text>
        <wui-icon name=${this.icon} color="inherit" size="inherit"></wui-icon>
      </button>
    `}};Kt.styles=[me,ze,tv],_r([E()],Kt.prototype,"variant",void 0),_r([E()],Kt.prototype,"imageSrc",void 0),_r([E({type:Boolean})],Kt.prototype,"disabled",void 0),_r([E()],Kt.prototype,"icon",void 0),_r([E()],Kt.prototype,"size",void 0),_r([E()],Kt.prototype,"text",void 0),Kt=_r([V("wui-chip-button")],Kt);var rv=te`
  wui-flex {
    width: 100%;
    background-color: var(--wui-color-gray-glass-002);
    border-radius: var(--wui-border-radius-xs);
  }
`,no=function(t,e,r,i){var n=arguments.length,s=n<3?e:i,o;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")s=Reflect.decorate(t,e,r,i);else for(var a=t.length-1;a>=0;a--)(o=t[a])&&(s=(n<3?o(s):n>3?o(e,r,s):o(e,r))||s);return n>3&&s&&Object.defineProperty(e,r,s),s};let Ii=class extends Z{constructor(){super(...arguments),this.disabled=!1,this.label="",this.buttonLabel=""}render(){return y`
      <wui-flex
        justifyContent="space-between"
        alignItems="center"
        .padding=${["1xs","2l","1xs","2l"]}
      >
        <wui-text variant="paragraph-500" color="fg-200">${this.label}</wui-text>
        <wui-chip-button size="sm" variant="shade" text=${this.buttonLabel} icon="chevronRight">
        </wui-chip-button>
      </wui-flex>
    `}};Ii.styles=[me,ze,rv],no([E({type:Boolean})],Ii.prototype,"disabled",void 0),no([E()],Ii.prototype,"label",void 0),no([E()],Ii.prototype,"buttonLabel",void 0),Ii=no([V("wui-cta-button")],Ii);var iv=te`
  :host {
    display: block;
    padding: 0 var(--wui-spacing-xl) var(--wui-spacing-xl);
  }
`,Lu=function(t,e,r,i){var n=arguments.length,s=n<3?e:i,o;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")s=Reflect.decorate(t,e,r,i);else for(var a=t.length-1;a>=0;a--)(o=t[a])&&(s=(n<3?o(s):n>3?o(e,r,s):o(e,r))||s);return n>3&&s&&Object.defineProperty(e,r,s),s};let so=class extends Z{constructor(){super(...arguments),this.wallet=void 0}render(){if(!this.wallet)return this.style.display="none",null;const{name:t,app_store:e,play_store:r,chrome_store:i,homepage:n}=this.wallet,s=M.isMobile(),o=M.isIos(),a=M.isAndroid(),c=[e,r,n,i].filter(Boolean).length>1,l=Be.getTruncateString({string:t,charsStart:12,charsEnd:0,truncate:"end"});return c&&!s?y`
        <wui-cta-button
          label=${`Don't have ${l}?`}
          buttonLabel="Get"
          @click=${()=>H.push("Downloads",{wallet:this.wallet})}
        ></wui-cta-button>
      `:!c&&n?y`
        <wui-cta-button
          label=${`Don't have ${l}?`}
          buttonLabel="Get"
          @click=${this.onHomePage.bind(this)}
        ></wui-cta-button>
      `:e&&o?y`
        <wui-cta-button
          label=${`Don't have ${l}?`}
          buttonLabel="Get"
          @click=${this.onAppStore.bind(this)}
        ></wui-cta-button>
      `:r&&a?y`
        <wui-cta-button
          label=${`Don't have ${l}?`}
          buttonLabel="Get"
          @click=${this.onPlayStore.bind(this)}
        ></wui-cta-button>
      `:(this.style.display="none",null)}onAppStore(){var t;(t=this.wallet)!=null&&t.app_store&&M.openHref(this.wallet.app_store,"_blank")}onPlayStore(){var t;(t=this.wallet)!=null&&t.play_store&&M.openHref(this.wallet.play_store,"_blank")}onHomePage(){var t;(t=this.wallet)!=null&&t.homepage&&M.openHref(this.wallet.homepage,"_blank")}};so.styles=[iv],Lu([E({type:Object})],so.prototype,"wallet",void 0),so=Lu([V("w3m-mobile-download-links")],so);var nv=te`
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
    transition-property: opacity, transform;
    transition-duration: var(--wui-duration-lg);
    transition-timing-function: var(--wui-ease-out-power-2);
    will-change: opacity, transform;
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
`,It=function(t,e,r,i){var n=arguments.length,s=n<3?e:i,o;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")s=Reflect.decorate(t,e,r,i);else for(var a=t.length-1;a>=0;a--)(o=t[a])&&(s=(n<3?o(s):n>3?o(e,r,s):o(e,r))||s);return n>3&&s&&Object.defineProperty(e,r,s),s};class Me extends Z{constructor(){var e,r,i,n,s;super(),this.wallet=(e=H.state.data)==null?void 0:e.wallet,this.connector=(r=H.state.data)==null?void 0:r.connector,this.timeout=void 0,this.secondaryBtnIcon="refresh",this.onConnect=void 0,this.onRender=void 0,this.onAutoConnect=void 0,this.isWalletConnect=!0,this.unsubscribe=[],this.imageSrc=$e.getWalletImage(this.wallet)??$e.getConnectorImage(this.connector),this.name=((i=this.wallet)==null?void 0:i.name)??((n=this.connector)==null?void 0:n.name)??"Wallet",this.isRetrying=!1,this.uri=K.state.wcUri,this.error=K.state.wcError,this.ready=!1,this.showRetry=!1,this.secondaryBtnLabel="Try again",this.secondaryLabel="Accept connection request in the wallet",this.buffering=!1,this.isLoading=!1,this.isMobile=!1,this.onRetry=void 0,this.unsubscribe.push(K.subscribeKey("wcUri",o=>{var a;this.uri=o,this.isRetrying&&this.onRetry&&(this.isRetrying=!1,(a=this.onConnect)==null||a.call(this))}),K.subscribeKey("wcError",o=>this.error=o),K.subscribeKey("buffering",o=>this.buffering=o)),(M.isTelegram()||M.isSafari())&&M.isIos()&&K.state.wcUri&&((s=this.onConnect)==null||s.call(this))}firstUpdated(){var e;(e=this.onAutoConnect)==null||e.call(this),this.showRetry=!this.onAutoConnect}disconnectedCallback(){this.unsubscribe.forEach(e=>e()),clearTimeout(this.timeout)}render(){var i;(i=this.onRender)==null||i.call(this),this.onShowRetry();const e=this.error?"Connection can be declined if a previous request is still active":this.secondaryLabel;let r=`Continue in ${this.name}`;return this.buffering&&(r="Connecting..."),this.error&&(r="Connection declined"),y`
      <wui-flex
        data-error=${ee(this.error)}
        data-retry=${this.showRetry}
        flexDirection="column"
        alignItems="center"
        .padding=${["3xl","xl","xl","xl"]}
        gap="xl"
      >
        <wui-flex justifyContent="center" alignItems="center">
          <wui-wallet-image size="lg" imageSrc=${ee(this.imageSrc)}></wui-wallet-image>

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
            ${r}
          </wui-text>
          <wui-text align="center" variant="small-500" color="fg-200">${e}</wui-text>
        </wui-flex>

        ${this.secondaryBtnLabel?y`
              <wui-button
                variant="accent"
                size="md"
                ?disabled=${this.isRetrying||!this.error&&this.buffering||this.isLoading}
                @click=${this.onTryAgain.bind(this)}
                data-testid="w3m-connecting-widget-secondary-button"
              >
                <wui-icon color="inherit" slot="iconLeft" name=${this.secondaryBtnIcon}></wui-icon>
                ${this.secondaryBtnLabel}
              </wui-button>
            `:null}
      </wui-flex>

      ${this.isWalletConnect?y`
            <wui-flex .padding=${["0","xl","xl","xl"]} justifyContent="center">
              <wui-link @click=${this.onCopyUri} color="fg-200" data-testid="wui-link-copy">
                <wui-icon size="xs" color="fg-200" slot="iconLeft" name="copy"></wui-icon>
                Copy link
              </wui-link>
            </wui-flex>
          `:null}

      <w3m-mobile-download-links .wallet=${this.wallet}></w3m-mobile-download-links>
    `}onShowRetry(){var e,r;this.error&&!this.showRetry&&(this.showRetry=!0,(r=(e=this.shadowRoot)==null?void 0:e.querySelector("wui-button"))==null||r.animate([{opacity:0},{opacity:1}],{fill:"forwards",easing:"ease"}))}onTryAgain(){var e,r;this.buffering||(K.setWcError(!1),this.onRetry?(this.isRetrying=!0,(e=this.onRetry)==null||e.call(this)):(r=this.onConnect)==null||r.call(this))}loaderTemplate(){const e=Te.state.themeVariables["--w3m-border-radius-master"],r=e?parseInt(e.replace("px",""),10):4;return y`<wui-loading-thumbnail radius=${r*9}></wui-loading-thumbnail>`}onCopyUri(){try{this.uri&&(M.copyToClopboard(this.uri),Ee.showSuccess("Link copied"))}catch{Ee.showError("Failed to copy")}}}Me.styles=nv,It([q()],Me.prototype,"isRetrying",void 0),It([q()],Me.prototype,"uri",void 0),It([q()],Me.prototype,"error",void 0),It([q()],Me.prototype,"ready",void 0),It([q()],Me.prototype,"showRetry",void 0),It([q()],Me.prototype,"secondaryBtnLabel",void 0),It([q()],Me.prototype,"secondaryLabel",void 0),It([q()],Me.prototype,"buffering",void 0),It([q()],Me.prototype,"isLoading",void 0),It([E({type:Boolean})],Me.prototype,"isMobile",void 0),It([E()],Me.prototype,"onRetry",void 0);var sv=function(t,e,r,i){var n=arguments.length,s=n<3?e:i===null?i=Object.getOwnPropertyDescriptor(e,r):i,o;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")s=Reflect.decorate(t,e,r,i);else for(var a=t.length-1;a>=0;a--)(o=t[a])&&(s=(n<3?o(s):n>3?o(e,r,s):o(e,r))||s);return n>3&&s&&Object.defineProperty(e,r,s),s};let Bu=class extends Me{constructor(){if(super(),!this.wallet)throw new Error("w3m-connecting-wc-browser: No wallet provided");this.onConnect=this.onConnectProxy.bind(this),this.onAutoConnect=this.onConnectProxy.bind(this),le.sendEvent({type:"track",event:"SELECT_WALLET",properties:{name:this.wallet.name,platform:"browser"}})}async onConnectProxy(){var t;try{this.error=!1;const{connectors:e}=F.state,r=e.find(i=>{var n,s,o;return i.type==="ANNOUNCED"&&((n=i.info)==null?void 0:n.rdns)===((s=this.wallet)==null?void 0:s.rdns)||i.type==="INJECTED"||i.name===((o=this.wallet)==null?void 0:o.name)});if(r)await K.connectExternal(r,r.chain);else throw new Error("w3m-connecting-wc-browser: No connector found");he.close(),le.sendEvent({type:"track",event:"CONNECT_SUCCESS",properties:{method:"browser",name:((t=this.wallet)==null?void 0:t.name)||"Unknown"}})}catch(e){le.sendEvent({type:"track",event:"CONNECT_ERROR",properties:{message:(e==null?void 0:e.message)??"Unknown"}}),this.error=!0}}};Bu=sv([V("w3m-connecting-wc-browser")],Bu);var ov=function(t,e,r,i){var n=arguments.length,s=n<3?e:i===null?i=Object.getOwnPropertyDescriptor(e,r):i,o;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")s=Reflect.decorate(t,e,r,i);else for(var a=t.length-1;a>=0;a--)(o=t[a])&&(s=(n<3?o(s):n>3?o(e,r,s):o(e,r))||s);return n>3&&s&&Object.defineProperty(e,r,s),s};let Uu=class extends Me{constructor(){if(super(),!this.wallet)throw new Error("w3m-connecting-wc-desktop: No wallet provided");this.onConnect=this.onConnectProxy.bind(this),this.onRender=this.onRenderProxy.bind(this),le.sendEvent({type:"track",event:"SELECT_WALLET",properties:{name:this.wallet.name,platform:"desktop"}})}onRenderProxy(){var t;!this.ready&&this.uri&&(this.ready=!0,(t=this.onConnect)==null||t.call(this))}onConnectProxy(){var t;if((t=this.wallet)!=null&&t.desktop_link&&this.uri)try{this.error=!1;const{desktop_link:e,name:r}=this.wallet,{redirect:i,href:n}=M.formatNativeUrl(e,this.uri);K.setWcLinking({name:r,href:n}),K.setRecentWallet(this.wallet),M.openHref(i,"_blank")}catch{this.error=!0}}};Uu=ov([V("w3m-connecting-wc-desktop")],Uu);var av=function(t,e,r,i){var n=arguments.length,s=n<3?e:i===null?i=Object.getOwnPropertyDescriptor(e,r):i,o;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")s=Reflect.decorate(t,e,r,i);else for(var a=t.length-1;a>=0;a--)(o=t[a])&&(s=(n<3?o(s):n>3?o(e,r,s):o(e,r))||s);return n>3&&s&&Object.defineProperty(e,r,s),s};let Mu=class extends Me{constructor(){if(super(),this.btnLabelTimeout=void 0,this.labelTimeout=void 0,this.onRender=()=>{var t;!this.ready&&this.uri&&(this.ready=!0,(t=this.onConnect)==null||t.call(this))},this.onConnect=()=>{var t;if((t=this.wallet)!=null&&t.mobile_link&&this.uri)try{this.error=!1;const{mobile_link:e,name:r}=this.wallet,{redirect:i,href:n}=M.formatNativeUrl(e,this.uri);K.setWcLinking({name:r,href:n}),K.setRecentWallet(this.wallet);const s=M.isIframe()?"_top":"_self";M.openHref(i,s),clearTimeout(this.labelTimeout),this.secondaryLabel=Oe.CONNECT_LABELS.MOBILE}catch(e){le.sendEvent({type:"track",event:"CONNECT_PROXY_ERROR",properties:{message:e instanceof Error?e.message:"Error parsing the deeplink",uri:this.uri,mobile_link:this.wallet.mobile_link,name:this.wallet.name}}),this.error=!0}},!this.wallet)throw new Error("w3m-connecting-wc-mobile: No wallet provided");this.initializeStateAndTimers(),document.addEventListener("visibilitychange",this.onBuffering.bind(this)),le.sendEvent({type:"track",event:"SELECT_WALLET",properties:{name:this.wallet.name,platform:"mobile"}})}disconnectedCallback(){super.disconnectedCallback(),document.removeEventListener("visibilitychange",this.onBuffering.bind(this)),clearTimeout(this.btnLabelTimeout),clearTimeout(this.labelTimeout)}initializeStateAndTimers(){this.secondaryBtnLabel=void 0,this.secondaryLabel=Oe.CONNECT_LABELS.MOBILE,this.btnLabelTimeout=setTimeout(()=>{this.secondaryBtnLabel="Try again",this.secondaryLabel=Oe.CONNECT_LABELS.MOBILE},Oe.FIVE_SEC_MS),this.labelTimeout=setTimeout(()=>{this.secondaryLabel="Hold tight... it's taking longer than expected"},Oe.THREE_SEC_MS)}onBuffering(){const t=M.isIos();(document==null?void 0:document.visibilityState)==="visible"&&!this.error&&t&&(K.setBuffering(!0),setTimeout(()=>{K.setBuffering(!1)},5e3))}onTryAgain(){this.buffering||(clearTimeout(this.btnLabelTimeout),clearTimeout(this.labelTimeout),this.initializeStateAndTimers(),K.setWcError(!1),this.onConnect())}};Mu=av([V("w3m-connecting-wc-mobile")],Mu);var On={},cv=function(){return typeof Promise=="function"&&Promise.prototype&&Promise.prototype.then},jh={},ct={};let Ua;const lv=[0,26,44,70,100,134,172,196,242,292,346,404,466,532,581,655,733,815,901,991,1085,1156,1258,1364,1474,1588,1706,1828,1921,2051,2185,2323,2465,2611,2761,2876,3034,3196,3362,3532,3706];ct.getSymbolSize=function(t){if(!t)throw new Error('"version" cannot be null or undefined');if(t<1||t>40)throw new Error('"version" should be in range from 1 to 40');return t*4+17},ct.getSymbolTotalCodewords=function(t){return lv[t]},ct.getBCHDigit=function(t){let e=0;for(;t!==0;)e++,t>>>=1;return e},ct.setToSJISFunction=function(t){if(typeof t!="function")throw new Error('"toSJISFunc" is not a valid function.');Ua=t},ct.isKanjiModeEnabled=function(){return typeof Ua<"u"},ct.toSJIS=function(t){return Ua(t)};var Yo={};(function(t){t.L={bit:1},t.M={bit:0},t.Q={bit:3},t.H={bit:2};function e(r){if(typeof r!="string")throw new Error("Param is not a string");switch(r.toLowerCase()){case"l":case"low":return t.L;case"m":case"medium":return t.M;case"q":case"quartile":return t.Q;case"h":case"high":return t.H;default:throw new Error("Unknown EC Level: "+r)}}t.isValid=function(r){return r&&typeof r.bit<"u"&&r.bit>=0&&r.bit<4},t.from=function(r,i){if(t.isValid(r))return r;try{return e(r)}catch{return i}}})(Yo);function Dh(){this.buffer=[],this.length=0}Dh.prototype={get:function(t){const e=Math.floor(t/8);return(this.buffer[e]>>>7-t%8&1)===1},put:function(t,e){for(let r=0;r<e;r++)this.putBit((t>>>e-r-1&1)===1)},getLengthInBits:function(){return this.length},putBit:function(t){const e=Math.floor(this.length/8);this.buffer.length<=e&&this.buffer.push(0),t&&(this.buffer[e]|=128>>>this.length%8),this.length++}};var uv=Dh;function $n(t){if(!t||t<1)throw new Error("BitMatrix size must be defined and greater than 0");this.size=t,this.data=new Uint8Array(t*t),this.reservedBit=new Uint8Array(t*t)}$n.prototype.set=function(t,e,r,i){const n=t*this.size+e;this.data[n]=r,i&&(this.reservedBit[n]=!0)},$n.prototype.get=function(t,e){return this.data[t*this.size+e]},$n.prototype.xor=function(t,e,r){this.data[t*this.size+e]^=r},$n.prototype.isReserved=function(t,e){return this.reservedBit[t*this.size+e]};var dv=$n,Hh={};(function(t){const e=ct.getSymbolSize;t.getRowColCoords=function(r){if(r===1)return[];const i=Math.floor(r/7)+2,n=e(r),s=n===145?26:Math.ceil((n-13)/(2*i-2))*2,o=[n-7];for(let a=1;a<i-1;a++)o[a]=o[a-1]-s;return o.push(6),o.reverse()},t.getPositions=function(r){const i=[],n=t.getRowColCoords(r),s=n.length;for(let o=0;o<s;o++)for(let a=0;a<s;a++)o===0&&a===0||o===0&&a===s-1||o===s-1&&a===0||i.push([n[o],n[a]]);return i}})(Hh);var Wh={};const hv=ct.getSymbolSize,zu=7;Wh.getPositions=function(t){const e=hv(t);return[[0,0],[e-zu,0],[0,e-zu]]};var Fh={};(function(t){t.Patterns={PATTERN000:0,PATTERN001:1,PATTERN010:2,PATTERN011:3,PATTERN100:4,PATTERN101:5,PATTERN110:6,PATTERN111:7};const e={N1:3,N2:3,N3:40,N4:10};t.isValid=function(i){return i!=null&&i!==""&&!isNaN(i)&&i>=0&&i<=7},t.from=function(i){return t.isValid(i)?parseInt(i,10):void 0},t.getPenaltyN1=function(i){const n=i.size;let s=0,o=0,a=0,c=null,l=null;for(let u=0;u<n;u++){o=a=0,c=l=null;for(let d=0;d<n;d++){let h=i.get(u,d);h===c?o++:(o>=5&&(s+=e.N1+(o-5)),c=h,o=1),h=i.get(d,u),h===l?a++:(a>=5&&(s+=e.N1+(a-5)),l=h,a=1)}o>=5&&(s+=e.N1+(o-5)),a>=5&&(s+=e.N1+(a-5))}return s},t.getPenaltyN2=function(i){const n=i.size;let s=0;for(let o=0;o<n-1;o++)for(let a=0;a<n-1;a++){const c=i.get(o,a)+i.get(o,a+1)+i.get(o+1,a)+i.get(o+1,a+1);(c===4||c===0)&&s++}return s*e.N2},t.getPenaltyN3=function(i){const n=i.size;let s=0,o=0,a=0;for(let c=0;c<n;c++){o=a=0;for(let l=0;l<n;l++)o=o<<1&2047|i.get(c,l),l>=10&&(o===1488||o===93)&&s++,a=a<<1&2047|i.get(l,c),l>=10&&(a===1488||a===93)&&s++}return s*e.N3},t.getPenaltyN4=function(i){let n=0;const s=i.data.length;for(let o=0;o<s;o++)n+=i.data[o];return Math.abs(Math.ceil(n*100/s/5)-10)*e.N4};function r(i,n,s){switch(i){case t.Patterns.PATTERN000:return(n+s)%2===0;case t.Patterns.PATTERN001:return n%2===0;case t.Patterns.PATTERN010:return s%3===0;case t.Patterns.PATTERN011:return(n+s)%3===0;case t.Patterns.PATTERN100:return(Math.floor(n/2)+Math.floor(s/3))%2===0;case t.Patterns.PATTERN101:return n*s%2+n*s%3===0;case t.Patterns.PATTERN110:return(n*s%2+n*s%3)%2===0;case t.Patterns.PATTERN111:return(n*s%3+(n+s)%2)%2===0;default:throw new Error("bad maskPattern:"+i)}}t.applyMask=function(i,n){const s=n.size;for(let o=0;o<s;o++)for(let a=0;a<s;a++)n.isReserved(a,o)||n.xor(a,o,r(i,a,o))},t.getBestMask=function(i,n){const s=Object.keys(t.Patterns).length;let o=0,a=1/0;for(let c=0;c<s;c++){n(c),t.applyMask(c,i);const l=t.getPenaltyN1(i)+t.getPenaltyN2(i)+t.getPenaltyN3(i)+t.getPenaltyN4(i);t.applyMask(c,i),l<a&&(a=l,o=c)}return o}})(Fh);var Lo={};const lr=Yo,oo=[1,1,1,1,1,1,1,1,1,1,2,2,1,2,2,4,1,2,4,4,2,4,4,4,2,4,6,5,2,4,6,6,2,5,8,8,4,5,8,8,4,5,8,11,4,8,10,11,4,9,12,16,4,9,16,16,6,10,12,18,6,10,17,16,6,11,16,19,6,13,18,21,7,14,21,25,8,16,20,25,8,17,23,25,9,17,23,34,9,18,25,30,10,20,27,32,12,21,29,35,12,23,34,37,12,25,34,40,13,26,35,42,14,28,38,45,15,29,40,48,16,31,43,51,17,33,45,54,18,35,48,57,19,37,51,60,19,38,53,63,20,40,56,66,21,43,59,70,22,45,62,74,24,47,65,77,25,49,68,81],ao=[7,10,13,17,10,16,22,28,15,26,36,44,20,36,52,64,26,48,72,88,36,64,96,112,40,72,108,130,48,88,132,156,60,110,160,192,72,130,192,224,80,150,224,264,96,176,260,308,104,198,288,352,120,216,320,384,132,240,360,432,144,280,408,480,168,308,448,532,180,338,504,588,196,364,546,650,224,416,600,700,224,442,644,750,252,476,690,816,270,504,750,900,300,560,810,960,312,588,870,1050,336,644,952,1110,360,700,1020,1200,390,728,1050,1260,420,784,1140,1350,450,812,1200,1440,480,868,1290,1530,510,924,1350,1620,540,980,1440,1710,570,1036,1530,1800,570,1064,1590,1890,600,1120,1680,1980,630,1204,1770,2100,660,1260,1860,2220,720,1316,1950,2310,750,1372,2040,2430];Lo.getBlocksCount=function(t,e){switch(e){case lr.L:return oo[(t-1)*4+0];case lr.M:return oo[(t-1)*4+1];case lr.Q:return oo[(t-1)*4+2];case lr.H:return oo[(t-1)*4+3];default:return}},Lo.getTotalCodewordsCount=function(t,e){switch(e){case lr.L:return ao[(t-1)*4+0];case lr.M:return ao[(t-1)*4+1];case lr.Q:return ao[(t-1)*4+2];case lr.H:return ao[(t-1)*4+3];default:return}};var qh={},co={};const yn=new Uint8Array(512),lo=new Uint8Array(256);(function(){let t=1;for(let e=0;e<255;e++)yn[e]=t,lo[t]=e,t<<=1,t&256&&(t^=285);for(let e=255;e<512;e++)yn[e]=yn[e-255]})(),co.log=function(t){if(t<1)throw new Error("log("+t+")");return lo[t]},co.exp=function(t){return yn[t]},co.mul=function(t,e){return t===0||e===0?0:yn[lo[t]+lo[e]]},function(t){const e=co;t.mul=function(r,i){const n=new Uint8Array(r.length+i.length-1);for(let s=0;s<r.length;s++)for(let o=0;o<i.length;o++)n[s+o]^=e.mul(r[s],i[o]);return n},t.mod=function(r,i){let n=new Uint8Array(r);for(;n.length-i.length>=0;){const s=n[0];for(let a=0;a<i.length;a++)n[a]^=e.mul(i[a],s);let o=0;for(;o<n.length&&n[o]===0;)o++;n=n.slice(o)}return n},t.generateECPolynomial=function(r){let i=new Uint8Array([1]);for(let n=0;n<r;n++)i=t.mul(i,new Uint8Array([1,e.exp(n)]));return i}}(qh);const ju=qh;function Cc(t){this.genPoly=void 0,this.degree=t,this.degree&&this.initialize(this.degree)}Cc.prototype.initialize=function(t){this.degree=t,this.genPoly=ju.generateECPolynomial(this.degree)},Cc.prototype.encode=function(t){if(!this.genPoly)throw new Error("Encoder not initialized");const e=new Uint8Array(t.length+this.degree);e.set(t);const r=ju.mod(e,this.genPoly),i=this.degree-r.length;if(i>0){const n=new Uint8Array(this.degree);return n.set(r,i),n}return r};var pv=Cc,Vh={},Cr={},xc={};xc.isValid=function(t){return!isNaN(t)&&t>=1&&t<=40};var jt={};const Zh="[0-9]+",fv="[A-Z $%*+\\-./:]+";let fs="(?:[u3000-u303F]|[u3040-u309F]|[u30A0-u30FF]|[uFF00-uFFEF]|[u4E00-u9FAF]|[u2605-u2606]|[u2190-u2195]|u203B|[u2010u2015u2018u2019u2025u2026u201Cu201Du2225u2260]|[u0391-u0451]|[u00A7u00A8u00B1u00B4u00D7u00F7])+";fs=fs.replace(/u/g,"\\u");const gv="(?:(?![A-Z0-9 $%*+\\-./:]|"+fs+`)(?:.|[\r
]))+`;jt.KANJI=new RegExp(fs,"g"),jt.BYTE_KANJI=new RegExp("[^A-Z0-9 $%*+\\-./:]+","g"),jt.BYTE=new RegExp(gv,"g"),jt.NUMERIC=new RegExp(Zh,"g"),jt.ALPHANUMERIC=new RegExp(fv,"g");const wv=new RegExp("^"+fs+"$"),mv=new RegExp("^"+Zh+"$"),vv=new RegExp("^[A-Z0-9 $%*+\\-./:]+$");jt.testKanji=function(t){return wv.test(t)},jt.testNumeric=function(t){return mv.test(t)},jt.testAlphanumeric=function(t){return vv.test(t)},function(t){const e=xc,r=jt;t.NUMERIC={id:"Numeric",bit:1,ccBits:[10,12,14]},t.ALPHANUMERIC={id:"Alphanumeric",bit:2,ccBits:[9,11,13]},t.BYTE={id:"Byte",bit:4,ccBits:[8,16,16]},t.KANJI={id:"Kanji",bit:8,ccBits:[8,10,12]},t.MIXED={bit:-1},t.getCharCountIndicator=function(n,s){if(!n.ccBits)throw new Error("Invalid mode: "+n);if(!e.isValid(s))throw new Error("Invalid version: "+s);return s>=1&&s<10?n.ccBits[0]:s<27?n.ccBits[1]:n.ccBits[2]},t.getBestModeForData=function(n){return r.testNumeric(n)?t.NUMERIC:r.testAlphanumeric(n)?t.ALPHANUMERIC:r.testKanji(n)?t.KANJI:t.BYTE},t.toString=function(n){if(n&&n.id)return n.id;throw new Error("Invalid mode")},t.isValid=function(n){return n&&n.bit&&n.ccBits};function i(n){if(typeof n!="string")throw new Error("Param is not a string");switch(n.toLowerCase()){case"numeric":return t.NUMERIC;case"alphanumeric":return t.ALPHANUMERIC;case"kanji":return t.KANJI;case"byte":return t.BYTE;default:throw new Error("Unknown mode: "+n)}}t.from=function(n,s){if(t.isValid(n))return n;try{return i(n)}catch{return s}}}(Cr),function(t){const e=ct,r=Lo,i=Yo,n=Cr,s=xc,o=7973,a=e.getBCHDigit(o);function c(h,p,v){for(let g=1;g<=40;g++)if(p<=t.getCapacity(g,v,h))return g}function l(h,p){return n.getCharCountIndicator(h,p)+4}function u(h,p){let v=0;return h.forEach(function(g){const b=l(g.mode,p);v+=b+g.getBitsLength()}),v}function d(h,p){for(let v=1;v<=40;v++)if(u(h,v)<=t.getCapacity(v,p,n.MIXED))return v}t.from=function(h,p){return s.isValid(h)?parseInt(h,10):p},t.getCapacity=function(h,p,v){if(!s.isValid(h))throw new Error("Invalid QR Code version");typeof v>"u"&&(v=n.BYTE);const g=e.getSymbolTotalCodewords(h),b=r.getTotalCodewordsCount(h,p),C=(g-b)*8;if(v===n.MIXED)return C;const A=C-l(v,h);switch(v){case n.NUMERIC:return Math.floor(A/10*3);case n.ALPHANUMERIC:return Math.floor(A/11*2);case n.KANJI:return Math.floor(A/13);case n.BYTE:default:return Math.floor(A/8)}},t.getBestVersionForData=function(h,p){let v;const g=i.from(p,i.M);if(Array.isArray(h)){if(h.length>1)return d(h,g);if(h.length===0)return 1;v=h[0]}else v=h;return c(v.mode,v.getLength(),g)},t.getEncodedBits=function(h){if(!s.isValid(h)||h<7)throw new Error("Invalid QR Code version");let p=h<<12;for(;e.getBCHDigit(p)-a>=0;)p^=o<<e.getBCHDigit(p)-a;return h<<12|p}}(Vh);var Gh={};const Ec=ct,Kh=1335,bv=21522,Du=Ec.getBCHDigit(Kh);Gh.getEncodedBits=function(t,e){const r=t.bit<<3|e;let i=r<<10;for(;Ec.getBCHDigit(i)-Du>=0;)i^=Kh<<Ec.getBCHDigit(i)-Du;return(r<<10|i)^bv};var Yh={};const yv=Cr;function $i(t){this.mode=yv.NUMERIC,this.data=t.toString()}$i.getBitsLength=function(t){return 10*Math.floor(t/3)+(t%3?t%3*3+1:0)},$i.prototype.getLength=function(){return this.data.length},$i.prototype.getBitsLength=function(){return $i.getBitsLength(this.data.length)},$i.prototype.write=function(t){let e,r,i;for(e=0;e+3<=this.data.length;e+=3)r=this.data.substr(e,3),i=parseInt(r,10),t.put(i,10);const n=this.data.length-e;n>0&&(r=this.data.substr(e),i=parseInt(r,10),t.put(i,n*3+1))};var Cv=$i;const xv=Cr,Ma=["0","1","2","3","4","5","6","7","8","9","A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z"," ","$","%","*","+","-",".","/",":"];function Ri(t){this.mode=xv.ALPHANUMERIC,this.data=t}Ri.getBitsLength=function(t){return 11*Math.floor(t/2)+6*(t%2)},Ri.prototype.getLength=function(){return this.data.length},Ri.prototype.getBitsLength=function(){return Ri.getBitsLength(this.data.length)},Ri.prototype.write=function(t){let e;for(e=0;e+2<=this.data.length;e+=2){let r=Ma.indexOf(this.data[e])*45;r+=Ma.indexOf(this.data[e+1]),t.put(r,11)}this.data.length%2&&t.put(Ma.indexOf(this.data[e]),6)};var Ev=Ri,Av=function(t){for(var e=[],r=t.length,i=0;i<r;i++){var n=t.charCodeAt(i);if(n>=55296&&n<=56319&&r>i+1){var s=t.charCodeAt(i+1);s>=56320&&s<=57343&&(n=(n-55296)*1024+s-56320+65536,i+=1)}if(n<128){e.push(n);continue}if(n<2048){e.push(n>>6|192),e.push(n&63|128);continue}if(n<55296||n>=57344&&n<65536){e.push(n>>12|224),e.push(n>>6&63|128),e.push(n&63|128);continue}if(n>=65536&&n<=1114111){e.push(n>>18|240),e.push(n>>12&63|128),e.push(n>>6&63|128),e.push(n&63|128);continue}e.push(239,191,189)}return new Uint8Array(e).buffer};const kv=Av,Iv=Cr;function Li(t){this.mode=Iv.BYTE,typeof t=="string"&&(t=kv(t)),this.data=new Uint8Array(t)}Li.getBitsLength=function(t){return t*8},Li.prototype.getLength=function(){return this.data.length},Li.prototype.getBitsLength=function(){return Li.getBitsLength(this.data.length)},Li.prototype.write=function(t){for(let e=0,r=this.data.length;e<r;e++)t.put(this.data[e],8)};var Nv=Li;const Sv=Cr,Pv=ct;function Bi(t){this.mode=Sv.KANJI,this.data=t}Bi.getBitsLength=function(t){return t*13},Bi.prototype.getLength=function(){return this.data.length},Bi.prototype.getBitsLength=function(){return Bi.getBitsLength(this.data.length)},Bi.prototype.write=function(t){let e;for(e=0;e<this.data.length;e++){let r=Pv.toSJIS(this.data[e]);if(r>=33088&&r<=40956)r-=33088;else if(r>=57408&&r<=60351)r-=49472;else throw new Error("Invalid SJIS character: "+this.data[e]+`
Make sure your charset is UTF-8`);r=(r>>>8&255)*192+(r&255),t.put(r,13)}};var _v=Bi,Hu={exports:{}};(function(t){var e={single_source_shortest_paths:function(r,i,n){var s={},o={};o[i]=0;var a=e.PriorityQueue.make();a.push(i,0);for(var c,l,u,d,h,p,v,g,b;!a.empty();){c=a.pop(),l=c.value,d=c.cost,h=r[l]||{};for(u in h)h.hasOwnProperty(u)&&(p=h[u],v=d+p,g=o[u],b=typeof o[u]>"u",(b||g>v)&&(o[u]=v,a.push(u,v),s[u]=l))}if(typeof n<"u"&&typeof o[n]>"u"){var C=["Could not find a path from ",i," to ",n,"."].join("");throw new Error(C)}return s},extract_shortest_path_from_predecessor_list:function(r,i){for(var n=[],s=i;s;)n.push(s),r[s],s=r[s];return n.reverse(),n},find_path:function(r,i,n){var s=e.single_source_shortest_paths(r,i,n);return e.extract_shortest_path_from_predecessor_list(s,n)},PriorityQueue:{make:function(r){var i=e.PriorityQueue,n={},s;r=r||{};for(s in i)i.hasOwnProperty(s)&&(n[s]=i[s]);return n.queue=[],n.sorter=r.sorter||i.default_sorter,n},default_sorter:function(r,i){return r.cost-i.cost},push:function(r,i){var n={value:r,cost:i};this.queue.push(n),this.queue.sort(this.sorter)},pop:function(){return this.queue.shift()},empty:function(){return this.queue.length===0}}};t.exports=e})(Hu),function(t){const e=Cr,r=Cv,i=Ev,n=Nv,s=_v,o=jt,a=ct,c=Hu.exports;function l(C){return unescape(encodeURIComponent(C)).length}function u(C,A,x){const k=[];let P;for(;(P=C.exec(x))!==null;)k.push({data:P[0],index:P.index,mode:A,length:P[0].length});return k}function d(C){const A=u(o.NUMERIC,e.NUMERIC,C),x=u(o.ALPHANUMERIC,e.ALPHANUMERIC,C);let k,P;return a.isKanjiModeEnabled()?(k=u(o.BYTE,e.BYTE,C),P=u(o.KANJI,e.KANJI,C)):(k=u(o.BYTE_KANJI,e.BYTE,C),P=[]),A.concat(x,k,P).sort(function(T,j){return T.index-j.index}).map(function(T){return{data:T.data,mode:T.mode,length:T.length}})}function h(C,A){switch(A){case e.NUMERIC:return r.getBitsLength(C);case e.ALPHANUMERIC:return i.getBitsLength(C);case e.KANJI:return s.getBitsLength(C);case e.BYTE:return n.getBitsLength(C)}}function p(C){return C.reduce(function(A,x){const k=A.length-1>=0?A[A.length-1]:null;return k&&k.mode===x.mode?(A[A.length-1].data+=x.data,A):(A.push(x),A)},[])}function v(C){const A=[];for(let x=0;x<C.length;x++){const k=C[x];switch(k.mode){case e.NUMERIC:A.push([k,{data:k.data,mode:e.ALPHANUMERIC,length:k.length},{data:k.data,mode:e.BYTE,length:k.length}]);break;case e.ALPHANUMERIC:A.push([k,{data:k.data,mode:e.BYTE,length:k.length}]);break;case e.KANJI:A.push([k,{data:k.data,mode:e.BYTE,length:l(k.data)}]);break;case e.BYTE:A.push([{data:k.data,mode:e.BYTE,length:l(k.data)}])}}return A}function g(C,A){const x={},k={start:{}};let P=["start"];for(let T=0;T<C.length;T++){const j=C[T],$=[];for(let _=0;_<j.length;_++){const R=j[_],U=""+T+_;$.push(U),x[U]={node:R,lastCount:0},k[U]={};for(let X=0;X<P.length;X++){const pe=P[X];x[pe]&&x[pe].node.mode===R.mode?(k[pe][U]=h(x[pe].lastCount+R.length,R.mode)-h(x[pe].lastCount,R.mode),x[pe].lastCount+=R.length):(x[pe]&&(x[pe].lastCount=R.length),k[pe][U]=h(R.length,R.mode)+4+e.getCharCountIndicator(R.mode,A))}}P=$}for(let T=0;T<P.length;T++)k[P[T]].end=0;return{map:k,table:x}}function b(C,A){let x;const k=e.getBestModeForData(C);if(x=e.from(A,k),x!==e.BYTE&&x.bit<k.bit)throw new Error('"'+C+'" cannot be encoded with mode '+e.toString(x)+`.
 Suggested mode is: `+e.toString(k));switch(x===e.KANJI&&!a.isKanjiModeEnabled()&&(x=e.BYTE),x){case e.NUMERIC:return new r(C);case e.ALPHANUMERIC:return new i(C);case e.KANJI:return new s(C);case e.BYTE:return new n(C)}}t.fromArray=function(C){return C.reduce(function(A,x){return typeof x=="string"?A.push(b(x,null)):x.data&&A.push(b(x.data,x.mode)),A},[])},t.fromString=function(C,A){const x=d(C,a.isKanjiModeEnabled()),k=v(x),P=g(k,A),T=c.find_path(P.map,"start","end"),j=[];for(let $=1;$<T.length-1;$++)j.push(P.table[T[$]].node);return t.fromArray(p(j))},t.rawSplit=function(C){return t.fromArray(d(C,a.isKanjiModeEnabled()))}}(Yh);const Jo=ct,za=Yo,Tv=uv,Ov=dv,$v=Hh,Rv=Wh,Ac=Fh,kc=Lo,Lv=pv,Bo=Vh,Bv=Gh,Uv=Cr,ja=Yh;function Mv(t,e){const r=t.size,i=Rv.getPositions(e);for(let n=0;n<i.length;n++){const s=i[n][0],o=i[n][1];for(let a=-1;a<=7;a++)if(!(s+a<=-1||r<=s+a))for(let c=-1;c<=7;c++)o+c<=-1||r<=o+c||(a>=0&&a<=6&&(c===0||c===6)||c>=0&&c<=6&&(a===0||a===6)||a>=2&&a<=4&&c>=2&&c<=4?t.set(s+a,o+c,!0,!0):t.set(s+a,o+c,!1,!0))}}function zv(t){const e=t.size;for(let r=8;r<e-8;r++){const i=r%2===0;t.set(r,6,i,!0),t.set(6,r,i,!0)}}function jv(t,e){const r=$v.getPositions(e);for(let i=0;i<r.length;i++){const n=r[i][0],s=r[i][1];for(let o=-2;o<=2;o++)for(let a=-2;a<=2;a++)o===-2||o===2||a===-2||a===2||o===0&&a===0?t.set(n+o,s+a,!0,!0):t.set(n+o,s+a,!1,!0)}}function Dv(t,e){const r=t.size,i=Bo.getEncodedBits(e);let n,s,o;for(let a=0;a<18;a++)n=Math.floor(a/3),s=a%3+r-8-3,o=(i>>a&1)===1,t.set(n,s,o,!0),t.set(s,n,o,!0)}function Da(t,e,r){const i=t.size,n=Bv.getEncodedBits(e,r);let s,o;for(s=0;s<15;s++)o=(n>>s&1)===1,s<6?t.set(s,8,o,!0):s<8?t.set(s+1,8,o,!0):t.set(i-15+s,8,o,!0),s<8?t.set(8,i-s-1,o,!0):s<9?t.set(8,15-s-1+1,o,!0):t.set(8,15-s-1,o,!0);t.set(i-8,8,1,!0)}function Hv(t,e){const r=t.size;let i=-1,n=r-1,s=7,o=0;for(let a=r-1;a>0;a-=2)for(a===6&&a--;;){for(let c=0;c<2;c++)if(!t.isReserved(n,a-c)){let l=!1;o<e.length&&(l=(e[o]>>>s&1)===1),t.set(n,a-c,l),s--,s===-1&&(o++,s=7)}if(n+=i,n<0||r<=n){n-=i,i=-i;break}}}function Wv(t,e,r){const i=new Tv;r.forEach(function(c){i.put(c.mode.bit,4),i.put(c.getLength(),Uv.getCharCountIndicator(c.mode,t)),c.write(i)});const n=Jo.getSymbolTotalCodewords(t),s=kc.getTotalCodewordsCount(t,e),o=(n-s)*8;for(i.getLengthInBits()+4<=o&&i.put(0,4);i.getLengthInBits()%8!==0;)i.putBit(0);const a=(o-i.getLengthInBits())/8;for(let c=0;c<a;c++)i.put(c%2?17:236,8);return Fv(i,t,e)}function Fv(t,e,r){const i=Jo.getSymbolTotalCodewords(e),n=kc.getTotalCodewordsCount(e,r),s=i-n,o=kc.getBlocksCount(e,r),a=i%o,c=o-a,l=Math.floor(i/o),u=Math.floor(s/o),d=u+1,h=l-u,p=new Lv(h);let v=0;const g=new Array(o),b=new Array(o);let C=0;const A=new Uint8Array(t.buffer);for(let j=0;j<o;j++){const $=j<c?u:d;g[j]=A.slice(v,v+$),b[j]=p.encode(g[j]),v+=$,C=Math.max(C,$)}const x=new Uint8Array(i);let k=0,P,T;for(P=0;P<C;P++)for(T=0;T<o;T++)P<g[T].length&&(x[k++]=g[T][P]);for(P=0;P<h;P++)for(T=0;T<o;T++)x[k++]=b[T][P];return x}function qv(t,e,r,i){let n;if(Array.isArray(t))n=ja.fromArray(t);else if(typeof t=="string"){let l=e;if(!l){const u=ja.rawSplit(t);l=Bo.getBestVersionForData(u,r)}n=ja.fromString(t,l||40)}else throw new Error("Invalid data");const s=Bo.getBestVersionForData(n,r);if(!s)throw new Error("The amount of data is too big to be stored in a QR Code");if(!e)e=s;else if(e<s)throw new Error(`
The chosen QR Code version cannot contain this amount of data.
Minimum version required to store current data is: `+s+`.
`);const o=Wv(e,r,n),a=Jo.getSymbolSize(e),c=new Ov(a);return Mv(c,e),zv(c),jv(c,e),Da(c,r,0),e>=7&&Dv(c,e),Hv(c,o),isNaN(i)&&(i=Ac.getBestMask(c,Da.bind(null,c,r))),Ac.applyMask(i,c),Da(c,r,i),{modules:c,version:e,errorCorrectionLevel:r,maskPattern:i,segments:n}}jh.create=function(t,e){if(typeof t>"u"||t==="")throw new Error("No input text");let r=za.M,i,n;return typeof e<"u"&&(r=za.from(e.errorCorrectionLevel,za.M),i=Bo.from(e.version),n=Ac.from(e.maskPattern),e.toSJISFunc&&Jo.setToSJISFunction(e.toSJISFunc)),qv(t,i,r,n)};var Jh={},Ic={};(function(t){function e(r){if(typeof r=="number"&&(r=r.toString()),typeof r!="string")throw new Error("Color should be defined as hex string");let i=r.slice().replace("#","").split("");if(i.length<3||i.length===5||i.length>8)throw new Error("Invalid hex color: "+r);(i.length===3||i.length===4)&&(i=Array.prototype.concat.apply([],i.map(function(s){return[s,s]}))),i.length===6&&i.push("F","F");const n=parseInt(i.join(""),16);return{r:n>>24&255,g:n>>16&255,b:n>>8&255,a:n&255,hex:"#"+i.slice(0,6).join("")}}t.getOptions=function(r){r||(r={}),r.color||(r.color={});const i=typeof r.margin>"u"||r.margin===null||r.margin<0?4:r.margin,n=r.width&&r.width>=21?r.width:void 0,s=r.scale||4;return{width:n,scale:n?4:s,margin:i,color:{dark:e(r.color.dark||"#000000ff"),light:e(r.color.light||"#ffffffff")},type:r.type,rendererOpts:r.rendererOpts||{}}},t.getScale=function(r,i){return i.width&&i.width>=r+i.margin*2?i.width/(r+i.margin*2):i.scale},t.getImageWidth=function(r,i){const n=t.getScale(r,i);return Math.floor((r+i.margin*2)*n)},t.qrToImageData=function(r,i,n){const s=i.modules.size,o=i.modules.data,a=t.getScale(s,n),c=Math.floor((s+n.margin*2)*a),l=n.margin*a,u=[n.color.light,n.color.dark];for(let d=0;d<c;d++)for(let h=0;h<c;h++){let p=(d*c+h)*4,v=n.color.light;if(d>=l&&h>=l&&d<c-l&&h<c-l){const g=Math.floor((d-l)/a),b=Math.floor((h-l)/a);v=u[o[g*s+b]?1:0]}r[p++]=v.r,r[p++]=v.g,r[p++]=v.b,r[p]=v.a}}})(Ic),function(t){const e=Ic;function r(n,s,o){n.clearRect(0,0,s.width,s.height),s.style||(s.style={}),s.height=o,s.width=o,s.style.height=o+"px",s.style.width=o+"px"}function i(){try{return document.createElement("canvas")}catch{throw new Error("You need to specify a canvas element")}}t.render=function(n,s,o){let a=o,c=s;typeof a>"u"&&(!s||!s.getContext)&&(a=s,s=void 0),s||(c=i()),a=e.getOptions(a);const l=e.getImageWidth(n.modules.size,a),u=c.getContext("2d"),d=u.createImageData(l,l);return e.qrToImageData(d.data,n,a),r(u,c,l),u.putImageData(d,0,0),c},t.renderToDataURL=function(n,s,o){let a=o;typeof a>"u"&&(!s||!s.getContext)&&(a=s,s=void 0),a||(a={});const c=t.render(n,s,a),l=a.type||"image/png",u=a.rendererOpts||{};return c.toDataURL(l,u.quality)}}(Jh);var Xh={};const Vv=Ic;function Wu(t,e){const r=t.a/255,i=e+'="'+t.hex+'"';return r<1?i+" "+e+'-opacity="'+r.toFixed(2).slice(1)+'"':i}function Ha(t,e,r){let i=t+e;return typeof r<"u"&&(i+=" "+r),i}function Zv(t,e,r){let i="",n=0,s=!1,o=0;for(let a=0;a<t.length;a++){const c=Math.floor(a%e),l=Math.floor(a/e);!c&&!s&&(s=!0),t[a]?(o++,a>0&&c>0&&t[a-1]||(i+=s?Ha("M",c+r,.5+l+r):Ha("m",n,0),n=0,s=!1),c+1<e&&t[a+1]||(i+=Ha("h",o),o=0)):n++}return i}Xh.render=function(t,e,r){const i=Vv.getOptions(e),n=t.modules.size,s=t.modules.data,o=n+i.margin*2,a=i.color.light.a?"<path "+Wu(i.color.light,"fill")+' d="M0 0h'+o+"v"+o+'H0z"/>':"",c="<path "+Wu(i.color.dark,"stroke")+' d="'+Zv(s,n,i.margin)+'"/>',l='viewBox="0 0 '+o+" "+o+'"',u='<svg xmlns="http://www.w3.org/2000/svg" '+(i.width?'width="'+i.width+'" height="'+i.width+'" ':"")+l+' shape-rendering="crispEdges">'+a+c+`</svg>
`;return typeof r=="function"&&r(null,u),u};const Gv=cv,Nc=jh,Fu=Jh,Kv=Xh;function Wa(t,e,r,i,n){const s=[].slice.call(arguments,1),o=s.length,a=typeof s[o-1]=="function";if(!a&&!Gv())throw new Error("Callback required as last argument");if(a){if(o<2)throw new Error("Too few arguments provided");o===2?(n=r,r=e,e=i=void 0):o===3&&(e.getContext&&typeof n>"u"?(n=i,i=void 0):(n=i,i=r,r=e,e=void 0))}else{if(o<1)throw new Error("Too few arguments provided");return o===1?(r=e,e=i=void 0):o===2&&!e.getContext&&(i=r,r=e,e=void 0),new Promise(function(c,l){try{const u=Nc.create(r,i);c(t(u,e,i))}catch(u){l(u)}})}try{const c=Nc.create(r,i);n(null,t(c,e,i))}catch(c){n(c)}}On.create=Nc.create,On.toCanvas=Wa.bind(null,Fu.render),On.toDataURL=Wa.bind(null,Fu.renderToDataURL),On.toString=Wa.bind(null,function(t,e,r){return Kv.render(t,r)});const Yv=.1,qu=2.5,Yt=7;function Fa(t,e,r){return t===e?!1:(t-e<0?e-t:t-e)<=r+Yv}function Jv(t,e){const r=Array.prototype.slice.call(On.create(t,{errorCorrectionLevel:e}).modules.data,0),i=Math.sqrt(r.length);return r.reduce((n,s,o)=>(o%i===0?n.push([s]):n[n.length-1].push(s))&&n,[])}const Xv={generate({uri:t,size:e,logoSize:r,dotColor:i="#141414"}){const n="transparent",s=[],o=Jv(t,"Q"),a=e/o.length,c=[{x:0,y:0},{x:1,y:0},{x:0,y:1}];c.forEach(({x:v,y:g})=>{const b=(o.length-Yt)*a*v,C=(o.length-Yt)*a*g,A=.45;for(let x=0;x<c.length;x+=1){const k=a*(Yt-x*2);s.push(z`
            <rect
              fill=${x===2?i:n}
              width=${x===0?k-5:k}
              rx= ${x===0?(k-5)*A:k*A}
              ry= ${x===0?(k-5)*A:k*A}
              stroke=${i}
              stroke-width=${x===0?5:0}
              height=${x===0?k-5:k}
              x= ${x===0?C+a*x+5/2:C+a*x}
              y= ${x===0?b+a*x+5/2:b+a*x}
            />
          `)}});const l=Math.floor((r+25)/a),u=o.length/2-l/2,d=o.length/2+l/2-1,h=[];o.forEach((v,g)=>{v.forEach((b,C)=>{if(o[g][C]&&!(g<Yt&&C<Yt||g>o.length-(Yt+1)&&C<Yt||g<Yt&&C>o.length-(Yt+1))&&!(g>u&&g<d&&C>u&&C<d)){const A=g*a+a/2,x=C*a+a/2;h.push([A,x])}})});const p={};return h.forEach(([v,g])=>{var b;p[v]?(b=p[v])==null||b.push(g):p[v]=[g]}),Object.entries(p).map(([v,g])=>{const b=g.filter(C=>g.every(A=>!Fa(C,A,a)));return[Number(v),b]}).forEach(([v,g])=>{g.forEach(b=>{s.push(z`<circle cx=${v} cy=${b} fill=${i} r=${a/qu} />`)})}),Object.entries(p).filter(([v,g])=>g.length>1).map(([v,g])=>{const b=g.filter(C=>g.some(A=>Fa(C,A,a)));return[Number(v),b]}).map(([v,g])=>{g.sort((C,A)=>C<A?-1:1);const b=[];for(const C of g){const A=b.find(x=>x.some(k=>Fa(C,k,a)));A?A.push(C):b.push([C])}return[v,b.map(C=>[C[0],C[C.length-1]])]}).forEach(([v,g])=>{g.forEach(([b,C])=>{s.push(z`
              <line
                x1=${v}
                x2=${v}
                y1=${b}
                y2=${C}
                stroke=${i}
                stroke-width=${a/(qu/2)}
                stroke-linecap="round"
              />
            `)})}),s}};var Qv=te`
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

  :host([data-clear='true']) > wui-icon {
    display: none;
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
    color: var(--local-icon-color) !important;
    transform: translateY(-50%) translateX(-50%) scale(0.25);
  }
`,Jt=function(t,e,r,i){var n=arguments.length,s=n<3?e:i,o;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")s=Reflect.decorate(t,e,r,i);else for(var a=t.length-1;a>=0;a--)(o=t[a])&&(s=(n<3?o(s):n>3?o(e,r,s):o(e,r))||s);return n>3&&s&&Object.defineProperty(e,r,s),s};const e3="#3396ff";let Nt=class extends Z{constructor(){super(...arguments),this.uri="",this.size=0,this.theme="dark",this.imageSrc=void 0,this.alt=void 0,this.arenaClear=void 0,this.farcaster=void 0}render(){return this.dataset.theme=this.theme,this.dataset.clear=String(this.arenaClear),this.style.cssText=`
     --local-size: ${this.size}px;
     --local-icon-color: ${this.color??e3}
    `,y`${this.templateVisual()} ${this.templateSvg()}`}templateSvg(){const t=this.theme==="light"?this.size:this.size-32;return z`
      <svg height=${t} width=${t}>
        ${Xv.generate({uri:this.uri,size:t,logoSize:this.arenaClear?0:t/4,dotColor:this.color})}
      </svg>
    `}templateVisual(){return this.imageSrc?y`<wui-image src=${this.imageSrc} alt=${this.alt??"logo"}></wui-image>`:this.farcaster?y`<wui-icon
        class="farcaster"
        size="inherit"
        color="inherit"
        name="farcaster"
      ></wui-icon>`:y`<wui-icon size="inherit" color="inherit" name="walletConnect"></wui-icon>`}};Nt.styles=[me,Qv],Jt([E()],Nt.prototype,"uri",void 0),Jt([E({type:Number})],Nt.prototype,"size",void 0),Jt([E()],Nt.prototype,"theme",void 0),Jt([E()],Nt.prototype,"imageSrc",void 0),Jt([E()],Nt.prototype,"alt",void 0),Jt([E()],Nt.prototype,"color",void 0),Jt([E({type:Boolean})],Nt.prototype,"arenaClear",void 0),Jt([E({type:Boolean})],Nt.prototype,"farcaster",void 0),Nt=Jt([V("wui-qr-code")],Nt);var t3=te`
  :host {
    display: block;
    box-shadow: inset 0 0 0 1px var(--wui-color-gray-glass-005);
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

  :host([variant='light']) {
    background: linear-gradient(
      120deg,
      var(--wui-color-bg-150) 5%,
      var(--wui-color-bg-150) 48%,
      var(--wui-color-bg-200) 55%,
      var(--wui-color-bg-200) 60%,
      var(--wui-color-bg-200) calc(60% + 10px),
      var(--wui-color-bg-150) calc(60% + 12px),
      var(--wui-color-bg-150) 100%
    );
    background-size: 250%;
  }

  @keyframes shimmer {
    from {
      background-position: -250% 0;
    }
    to {
      background-position: 250% 0;
    }
  }
`,Cn=function(t,e,r,i){var n=arguments.length,s=n<3?e:i,o;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")s=Reflect.decorate(t,e,r,i);else for(var a=t.length-1;a>=0;a--)(o=t[a])&&(s=(n<3?o(s):n>3?o(e,r,s):o(e,r))||s);return n>3&&s&&Object.defineProperty(e,r,s),s};let Tr=class extends Z{constructor(){super(...arguments),this.width="",this.height="",this.borderRadius="m",this.variant="default"}render(){return this.style.cssText=`
      width: ${this.width};
      height: ${this.height};
      border-radius: ${`clamp(0px,var(--wui-border-radius-${this.borderRadius}), 40px)`};
    `,y`<slot></slot>`}};Tr.styles=[t3],Cn([E()],Tr.prototype,"width",void 0),Cn([E()],Tr.prototype,"height",void 0),Cn([E()],Tr.prototype,"borderRadius",void 0),Cn([E()],Tr.prototype,"variant",void 0),Tr=Cn([V("wui-shimmer")],Tr);var r3=te`
  .reown-logo {
    height: var(--wui-spacing-xxl);
  }
`,i3=function(t,e,r,i){var n=arguments.length,s=n<3?e:i===null?i=Object.getOwnPropertyDescriptor(e,r):i,o;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")s=Reflect.decorate(t,e,r,i);else for(var a=t.length-1;a>=0;a--)(o=t[a])&&(s=(n<3?o(s):n>3?o(e,r,s):o(e,r))||s);return n>3&&s&&Object.defineProperty(e,r,s),s};let qa=class extends Z{render(){return y`
      <wui-flex
        justifyContent="center"
        alignItems="center"
        gap="xs"
        .padding=${["0","0","l","0"]}
      >
        <wui-text variant="small-500" color="fg-100"> UX by </wui-text>
        <wui-icon name="reown" size="xxxl" class="reown-logo"></wui-icon>
      </wui-flex>
    `}};qa.styles=[me,ze,r3],qa=i3([V("wui-ux-by-reown")],qa);var n3=te`
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
`,s3=function(t,e,r,i){var n=arguments.length,s=n<3?e:i===null?i=Object.getOwnPropertyDescriptor(e,r):i,o;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")s=Reflect.decorate(t,e,r,i);else for(var a=t.length-1;a>=0;a--)(o=t[a])&&(s=(n<3?o(s):n>3?o(e,r,s):o(e,r))||s);return n>3&&s&&Object.defineProperty(e,r,s),s};let Va=class extends Me{constructor(){var t;super(),this.forceUpdate=()=>{this.requestUpdate()},window.addEventListener("resize",this.forceUpdate),le.sendEvent({type:"track",event:"SELECT_WALLET",properties:{name:((t=this.wallet)==null?void 0:t.name)??"WalletConnect",platform:"qrcode"}})}disconnectedCallback(){var t;super.disconnectedCallback(),(t=this.unsubscribe)==null||t.forEach(e=>e()),window.removeEventListener("resize",this.forceUpdate)}render(){return this.onRenderProxy(),y`
      <wui-flex
        flexDirection="column"
        alignItems="center"
        .padding=${["0","xl","xl","xl"]}
        gap="xl"
      >
        <wui-shimmer borderRadius="l" width="100%"> ${this.qrCodeTemplate()} </wui-shimmer>

        <wui-text variant="paragraph-500" color="fg-100">
          Scan this QR Code with your phone
        </wui-text>
        ${this.copyTemplate()}
      </wui-flex>
      <w3m-mobile-download-links .wallet=${this.wallet}></w3m-mobile-download-links>
    `}onRenderProxy(){!this.ready&&this.uri&&(this.timeout=setTimeout(()=>{this.ready=!0},200))}qrCodeTemplate(){if(!this.uri||!this.ready)return null;const t=this.getBoundingClientRect().width-40,e=this.wallet?this.wallet.name:void 0;return K.setWcLinking(void 0),K.setRecentWallet(this.wallet),y` <wui-qr-code
      size=${t}
      theme=${Te.state.themeMode}
      uri=${this.uri}
      imageSrc=${ee($e.getWalletImage(this.wallet))}
      color=${ee(Te.state.themeVariables["--w3m-qr-color"])}
      alt=${ee(e)}
      data-testid="wui-qr-code"
    ></wui-qr-code>`}copyTemplate(){const t=!this.uri||!this.ready;return y`<wui-link
      .disabled=${t}
      @click=${this.onCopyUri}
      color="fg-200"
      data-testid="copy-wc2-uri"
    >
      <wui-icon size="xs" color="fg-200" slot="iconLeft" name="copy"></wui-icon>
      Copy link
    </wui-link>`}};Va.styles=n3,Va=s3([V("w3m-connecting-wc-qrcode")],Va);var o3=function(t,e,r,i){var n=arguments.length,s=n<3?e:i===null?i=Object.getOwnPropertyDescriptor(e,r):i,o;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")s=Reflect.decorate(t,e,r,i);else for(var a=t.length-1;a>=0;a--)(o=t[a])&&(s=(n<3?o(s):n>3?o(e,r,s):o(e,r))||s);return n>3&&s&&Object.defineProperty(e,r,s),s};let Vu=class extends Z{constructor(){var t;if(super(),this.wallet=(t=H.state.data)==null?void 0:t.wallet,!this.wallet)throw new Error("w3m-connecting-wc-unsupported: No wallet provided");le.sendEvent({type:"track",event:"SELECT_WALLET",properties:{name:this.wallet.name,platform:"browser"}})}render(){return y`
      <wui-flex
        flexDirection="column"
        alignItems="center"
        .padding=${["3xl","xl","xl","xl"]}
        gap="xl"
      >
        <wui-wallet-image
          size="lg"
          imageSrc=${ee($e.getWalletImage(this.wallet))}
        ></wui-wallet-image>

        <wui-text variant="paragraph-500" color="fg-100">Not Detected</wui-text>
      </wui-flex>

      <w3m-mobile-download-links .wallet=${this.wallet}></w3m-mobile-download-links>
    `}};Vu=o3([V("w3m-connecting-wc-unsupported")],Vu);var Zu=function(t,e,r,i){var n=arguments.length,s=n<3?e:i,o;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")s=Reflect.decorate(t,e,r,i);else for(var a=t.length-1;a>=0;a--)(o=t[a])&&(s=(n<3?o(s):n>3?o(e,r,s):o(e,r))||s);return n>3&&s&&Object.defineProperty(e,r,s),s};let Za=class extends Me{constructor(){if(super(),this.isLoading=!0,!this.wallet)throw new Error("w3m-connecting-wc-web: No wallet provided");this.onConnect=this.onConnectProxy.bind(this),this.secondaryBtnLabel="Open",this.secondaryLabel="Open and continue in a new browser tab",this.secondaryBtnIcon="externalLink",this.updateLoadingState(),this.unsubscribe.push(K.subscribeKey("wcUri",()=>{this.updateLoadingState()})),le.sendEvent({type:"track",event:"SELECT_WALLET",properties:{name:this.wallet.name,platform:"web"}})}updateLoadingState(){this.isLoading=!this.uri}onConnectProxy(){var t;if((t=this.wallet)!=null&&t.webapp_link&&this.uri)try{this.error=!1;const{webapp_link:e,name:r}=this.wallet,{redirect:i,href:n}=M.formatUniversalUrl(e,this.uri);K.setWcLinking({name:r,href:n}),K.setRecentWallet(this.wallet),M.openHref(i,"_blank")}catch{this.error=!0}}};Zu([q()],Za.prototype,"isLoading",void 0),Za=Zu([V("w3m-connecting-wc-web")],Za);var uo=function(t,e,r,i){var n=arguments.length,s=n<3?e:i,o;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")s=Reflect.decorate(t,e,r,i);else for(var a=t.length-1;a>=0;a--)(o=t[a])&&(s=(n<3?o(s):n>3?o(e,r,s):o(e,r))||s);return n>3&&s&&Object.defineProperty(e,r,s),s};let xn=class extends Z{constructor(){var t;super(),this.wallet=(t=H.state.data)==null?void 0:t.wallet,this.platform=void 0,this.platforms=[],this.isSiwxEnabled=!!O.state.siwx,this.determinePlatforms(),this.initializeConnection()}render(){return y`
      ${this.headerTemplate()}
      <div>${this.platformTemplate()}</div>
      <wui-ux-by-reown></wui-ux-by-reown>
    `}async initializeConnection(t=!1){if(!(this.platform==="browser"||O.state.manualWCControl&&!t))try{const{wcPairingExpiry:e,status:r}=K.state;(t||O.state.enableEmbedded||M.isPairingExpired(e)||r==="connecting")&&(await K.connectWalletConnect(),this.isSiwxEnabled||he.close())}catch(e){le.sendEvent({type:"track",event:"CONNECT_ERROR",properties:{message:(e==null?void 0:e.message)??"Unknown"}}),K.setWcError(!0),Ee.showError(e.message??"Connection error"),K.resetWcConnection(),H.goBack()}}determinePlatforms(){if(!this.wallet){this.platforms.push("qrcode"),this.platform="qrcode";return}if(this.platform)return;const{mobile_link:t,desktop_link:e,webapp_link:r,injected:i,rdns:n}=this.wallet,s=i==null?void 0:i.map(({injected_id:p})=>p).filter(Boolean),o=[...n?[n]:s??[]],a=O.state.isUniversalProvider?!1:o.length,c=t,l=r,u=K.checkInstalled(o),d=a&&u,h=e&&!M.isMobile();d&&!w.state.noAdapters&&this.platforms.push("browser"),c&&this.platforms.push(M.isMobile()?"mobile":"qrcode"),l&&this.platforms.push("web"),h&&this.platforms.push("desktop"),!d&&a&&!w.state.noAdapters&&this.platforms.push("unsupported"),this.platform=this.platforms[0]}platformTemplate(){switch(this.platform){case"browser":return y`<w3m-connecting-wc-browser></w3m-connecting-wc-browser>`;case"web":return y`<w3m-connecting-wc-web></w3m-connecting-wc-web>`;case"desktop":return y`
          <w3m-connecting-wc-desktop .onRetry=${()=>this.initializeConnection(!0)}>
          </w3m-connecting-wc-desktop>
        `;case"mobile":return y`
          <w3m-connecting-wc-mobile isMobile .onRetry=${()=>this.initializeConnection(!0)}>
          </w3m-connecting-wc-mobile>
        `;case"qrcode":return y`<w3m-connecting-wc-qrcode></w3m-connecting-wc-qrcode>`;default:return y`<w3m-connecting-wc-unsupported></w3m-connecting-wc-unsupported>`}}headerTemplate(){return this.platforms.length>1?y`
      <w3m-connecting-header
        .platforms=${this.platforms}
        .onSelectPlatfrom=${this.onSelectPlatform.bind(this)}
      >
      </w3m-connecting-header>
    `:null}async onSelectPlatform(t){var r;const e=(r=this.shadowRoot)==null?void 0:r.querySelector("div");e&&(await e.animate([{opacity:1},{opacity:0}],{duration:200,fill:"forwards",easing:"ease"}).finished,this.platform=t,e.animate([{opacity:0},{opacity:1}],{duration:200,fill:"forwards",easing:"ease"}))}};uo([q()],xn.prototype,"platform",void 0),uo([q()],xn.prototype,"platforms",void 0),uo([q()],xn.prototype,"isSiwxEnabled",void 0),xn=uo([V("w3m-connecting-wc-view")],xn);var Gu=function(t,e,r,i){var n=arguments.length,s=n<3?e:i,o;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")s=Reflect.decorate(t,e,r,i);else for(var a=t.length-1;a>=0;a--)(o=t[a])&&(s=(n<3?o(s):n>3?o(e,r,s):o(e,r))||s);return n>3&&s&&Object.defineProperty(e,r,s),s};let Co=class extends Z{constructor(){super(...arguments),this.isMobile=M.isMobile()}render(){if(this.isMobile){const{featured:t,recommended:e}=W.state,{customWallets:r}=O.state,i=G.getRecentWallets(),n=t.length||e.length||(r==null?void 0:r.length)||i.length;return y`<wui-flex
        flexDirection="column"
        gap="xs"
        .margin=${["3xs","s","s","s"]}
      >
        ${n?y`<w3m-connector-list></w3m-connector-list>`:null}
        <w3m-all-wallets-widget></w3m-all-wallets-widget>
      </wui-flex>`}return y`<wui-flex flexDirection="column" .padding=${["0","0","l","0"]}>
      <w3m-connecting-wc-view></w3m-connecting-wc-view>
      <wui-flex flexDirection="column" .padding=${["0","m","0","m"]}>
        <w3m-all-wallets-widget></w3m-all-wallets-widget> </wui-flex
    ></wui-flex>`}};Gu([q()],Co.prototype,"isMobile",void 0),Co=Gu([V("w3m-connecting-wc-basic-view")],Co);/**
* @license
* Copyright 2020 Google LLC
* SPDX-License-Identifier: BSD-3-Clause
*/const Qc=()=>new a3;class a3{}const Ga=new WeakMap,el=Xc(class extends Mh{render(t){return Pe}update(t,[e]){var i;const r=e!==this.G;return r&&this.G!==void 0&&this.rt(void 0),(r||this.lt!==this.ct)&&(this.G=e,this.ht=(i=t.options)==null?void 0:i.host,this.rt(this.ct=t.element)),Pe}rt(t){if(this.isConnected||(t=void 0),typeof this.G=="function"){const e=this.ht??globalThis;let r=Ga.get(e);r===void 0&&(r=new WeakMap,Ga.set(e,r)),r.get(this.G)!==void 0&&this.G.call(this.ht,void 0),r.set(this.G,t),t!==void 0&&this.G.call(this.ht,t)}else this.G.value=t}get lt(){var t,e;return typeof this.G=="function"?(t=Ga.get(this.ht??globalThis))==null?void 0:t.get(this.G):(e=this.G)==null?void 0:e.value}disconnected(){this.lt===this.ct&&this.rt(void 0)}reconnected(){this.rt(this.ct)}});var c3=te`
  :host {
    display: flex;
    align-items: center;
    justify-content: center;
  }

  label {
    position: relative;
    display: inline-block;
    width: 32px;
    height: 22px;
  }

  input {
    width: 0;
    height: 0;
    opacity: 0;
  }

  span {
    position: absolute;
    cursor: pointer;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background-color: var(--wui-color-blue-100);
    border-width: 1px;
    border-style: solid;
    border-color: var(--wui-color-gray-glass-002);
    border-radius: 999px;
    transition:
      background-color var(--wui-ease-inout-power-1) var(--wui-duration-md),
      border-color var(--wui-ease-inout-power-1) var(--wui-duration-md);
    will-change: background-color, border-color;
  }

  span:before {
    position: absolute;
    content: '';
    height: 16px;
    width: 16px;
    left: 3px;
    top: 2px;
    background-color: var(--wui-color-inverse-100);
    transition: transform var(--wui-ease-inout-power-1) var(--wui-duration-lg);
    will-change: transform;
    border-radius: 50%;
  }

  input:checked + span {
    border-color: var(--wui-color-gray-glass-005);
    background-color: var(--wui-color-blue-100);
  }

  input:not(:checked) + span {
    background-color: var(--wui-color-gray-glass-010);
  }

  input:checked + span:before {
    transform: translateX(calc(100% - 7px));
  }
`,Ku=function(t,e,r,i){var n=arguments.length,s=n<3?e:i,o;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")s=Reflect.decorate(t,e,r,i);else for(var a=t.length-1;a>=0;a--)(o=t[a])&&(s=(n<3?o(s):n>3?o(e,r,s):o(e,r))||s);return n>3&&s&&Object.defineProperty(e,r,s),s};let ho=class extends Z{constructor(){super(...arguments),this.inputElementRef=Qc(),this.checked=void 0}render(){return y`
      <label>
        <input
          ${el(this.inputElementRef)}
          type="checkbox"
          ?checked=${ee(this.checked)}
          @change=${this.dispatchChangeEvent.bind(this)}
        />
        <span></span>
      </label>
    `}dispatchChangeEvent(){var t;this.dispatchEvent(new CustomEvent("switchChange",{detail:(t=this.inputElementRef.value)==null?void 0:t.checked,bubbles:!0,composed:!0}))}};ho.styles=[me,ze,xs,c3],Ku([E({type:Boolean})],ho.prototype,"checked",void 0),ho=Ku([V("wui-switch")],ho);var l3=te`
  :host {
    height: 100%;
  }

  button {
    display: flex;
    align-items: center;
    justify-content: center;
    column-gap: var(--wui-spacing-1xs);
    padding: var(--wui-spacing-xs) var(--wui-spacing-s);
    background-color: var(--wui-color-gray-glass-002);
    border-radius: var(--wui-border-radius-xs);
    box-shadow: inset 0 0 0 1px var(--wui-color-gray-glass-002);
    transition: background-color var(--wui-ease-out-power-1) var(--wui-duration-md);
    will-change: background-color;
    cursor: pointer;
  }

  wui-switch {
    pointer-events: none;
  }
`,Yu=function(t,e,r,i){var n=arguments.length,s=n<3?e:i,o;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")s=Reflect.decorate(t,e,r,i);else for(var a=t.length-1;a>=0;a--)(o=t[a])&&(s=(n<3?o(s):n>3?o(e,r,s):o(e,r))||s);return n>3&&s&&Object.defineProperty(e,r,s),s};let po=class extends Z{constructor(){super(...arguments),this.checked=void 0}render(){return y`
      <button>
        <wui-icon size="xl" name="walletConnectBrown"></wui-icon>
        <wui-switch ?checked=${ee(this.checked)}></wui-switch>
      </button>
    `}};po.styles=[me,ze,l3],Yu([E({type:Boolean})],po.prototype,"checked",void 0),po=Yu([V("wui-certified-switch")],po);var u3=te`
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

  @media (hover: hover) and (pointer: fine) {
    button:hover:enabled {
      background-color: var(--wui-color-fg-250);
    }

    button:active:enabled {
      background-color: var(--wui-color-fg-225);
    }
  }
`,Ju=function(t,e,r,i){var n=arguments.length,s=n<3?e:i,o;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")s=Reflect.decorate(t,e,r,i);else for(var a=t.length-1;a>=0;a--)(o=t[a])&&(s=(n<3?o(s):n>3?o(e,r,s):o(e,r))||s);return n>3&&s&&Object.defineProperty(e,r,s),s};let fo=class extends Z{constructor(){super(...arguments),this.icon="copy"}render(){return y`
      <button>
        <wui-icon color="inherit" size="xxs" name=${this.icon}></wui-icon>
      </button>
    `}};fo.styles=[me,ze,u3],Ju([E()],fo.prototype,"icon",void 0),fo=Ju([V("wui-input-element")],fo);var d3=te`
  :host {
    position: relative;
    width: 100%;
    display: inline-block;
    color: var(--wui-color-fg-275);
  }

  input {
    width: 100%;
    border-radius: var(--wui-border-radius-xs);
    box-shadow: inset 0 0 0 1px var(--wui-color-gray-glass-002);
    background: var(--wui-color-gray-glass-002);
    font-size: var(--wui-font-size-paragraph);
    letter-spacing: var(--wui-letter-spacing-paragraph);
    color: var(--wui-color-fg-100);
    transition:
      background-color var(--wui-ease-inout-power-1) var(--wui-duration-md),
      border-color var(--wui-ease-inout-power-1) var(--wui-duration-md),
      box-shadow var(--wui-ease-inout-power-1) var(--wui-duration-md);
    will-change: background-color, border-color, box-shadow;
    caret-color: var(--wui-color-accent-100);
  }

  input:disabled {
    cursor: not-allowed;
    border: 1px solid var(--wui-color-gray-glass-010);
  }

  input:disabled::placeholder,
  input:disabled + wui-icon {
    color: var(--wui-color-fg-300);
  }

  input::placeholder {
    color: var(--wui-color-fg-275);
  }

  input:focus:enabled {
    background-color: var(--wui-color-gray-glass-005);
    -webkit-box-shadow:
      inset 0 0 0 1px var(--wui-color-accent-100),
      0px 0px 0px 4px var(--wui-box-shadow-blue);
    -moz-box-shadow:
      inset 0 0 0 1px var(--wui-color-accent-100),
      0px 0px 0px 4px var(--wui-box-shadow-blue);
    box-shadow:
      inset 0 0 0 1px var(--wui-color-accent-100),
      0px 0px 0px 4px var(--wui-box-shadow-blue);
  }

  input:hover:enabled {
    background-color: var(--wui-color-gray-glass-005);
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

  wui-icon + .wui-size-md,
  wui-loading-spinner + .wui-size-md {
    padding: 10.5px var(--wui-spacing-3xl) 10.5px var(--wui-spacing-3xl);
  }

  wui-icon[data-input='md'] {
    left: var(--wui-spacing-l);
  }

  .wui-size-lg {
    padding: var(--wui-spacing-s) var(--wui-spacing-s) var(--wui-spacing-s) var(--wui-spacing-l);
    letter-spacing: var(--wui-letter-spacing-medium-title);
    font-size: var(--wui-font-size-medium-title);
    font-weight: var(--wui-font-weight-light);
    line-height: 130%;
    color: var(--wui-color-fg-100);
    height: 64px;
  }

  .wui-padding-right-xs {
    padding-right: var(--wui-spacing-xs);
  }

  .wui-padding-right-s {
    padding-right: var(--wui-spacing-s);
  }

  .wui-padding-right-m {
    padding-right: var(--wui-spacing-m);
  }

  .wui-padding-right-l {
    padding-right: var(--wui-spacing-l);
  }

  .wui-padding-right-xl {
    padding-right: var(--wui-spacing-xl);
  }

  .wui-padding-right-2xl {
    padding-right: var(--wui-spacing-2xl);
  }

  .wui-padding-right-3xl {
    padding-right: var(--wui-spacing-3xl);
  }

  .wui-padding-right-4xl {
    padding-right: var(--wui-spacing-4xl);
  }

  .wui-padding-right-5xl {
    padding-right: var(--wui-spacing-5xl);
  }

  wui-icon + .wui-size-lg,
  wui-loading-spinner + .wui-size-lg {
    padding-left: 50px;
  }

  wui-icon[data-input='lg'] {
    left: var(--wui-spacing-l);
  }

  .wui-size-mdl {
    padding: 17.25px var(--wui-spacing-m) 17.25px var(--wui-spacing-m);
  }
  wui-icon + .wui-size-mdl,
  wui-loading-spinner + .wui-size-mdl {
    padding: 17.25px var(--wui-spacing-3xl) 17.25px 40px;
  }
  wui-icon[data-input='mdl'] {
    left: var(--wui-spacing-m);
  }

  input:placeholder-shown ~ ::slotted(wui-input-element),
  input:placeholder-shown ~ ::slotted(wui-icon) {
    opacity: 0;
    pointer-events: none;
  }

  input::-webkit-outer-spin-button,
  input::-webkit-inner-spin-button {
    -webkit-appearance: none;
    margin: 0;
  }

  input[type='number'] {
    -moz-appearance: textfield;
  }

  ::slotted(wui-input-element),
  ::slotted(wui-icon) {
    position: absolute;
    top: 50%;
    transform: translateY(-50%);
  }

  ::slotted(wui-input-element) {
    right: var(--wui-spacing-m);
  }

  ::slotted(wui-icon) {
    right: 0px;
  }
`,Bt=function(t,e,r,i){var n=arguments.length,s=n<3?e:i,o;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")s=Reflect.decorate(t,e,r,i);else for(var a=t.length-1;a>=0;a--)(o=t[a])&&(s=(n<3?o(s):n>3?o(e,r,s):o(e,r))||s);return n>3&&s&&Object.defineProperty(e,r,s),s};let vt=class extends Z{constructor(){super(...arguments),this.inputElementRef=Qc(),this.size="md",this.disabled=!1,this.placeholder="",this.type="text",this.value=""}render(){const t=`wui-padding-right-${this.inputRightPadding}`,e={[`wui-size-${this.size}`]:!0,[t]:!!this.inputRightPadding};return y`${this.templateIcon()}
      <input
        data-testid="wui-input-text"
        ${el(this.inputElementRef)}
        class=${zh(e)}
        type=${this.type}
        enterkeyhint=${ee(this.enterKeyHint)}
        ?disabled=${this.disabled}
        placeholder=${this.placeholder}
        @input=${this.dispatchInputChangeEvent.bind(this)}
        .value=${this.value||""}
        tabindex=${ee(this.tabIdx)}
      />
      <slot></slot>`}templateIcon(){return this.icon?y`<wui-icon
        data-input=${this.size}
        size=${this.size}
        color="inherit"
        name=${this.icon}
      ></wui-icon>`:null}dispatchInputChangeEvent(){var t;this.dispatchEvent(new CustomEvent("inputChange",{detail:(t=this.inputElementRef.value)==null?void 0:t.value,bubbles:!0,composed:!0}))}};vt.styles=[me,ze,d3],Bt([E()],vt.prototype,"size",void 0),Bt([E()],vt.prototype,"icon",void 0),Bt([E({type:Boolean})],vt.prototype,"disabled",void 0),Bt([E()],vt.prototype,"placeholder",void 0),Bt([E()],vt.prototype,"type",void 0),Bt([E()],vt.prototype,"keyHint",void 0),Bt([E()],vt.prototype,"value",void 0),Bt([E()],vt.prototype,"inputRightPadding",void 0),Bt([E()],vt.prototype,"tabIdx",void 0),vt=Bt([V("wui-input-text")],vt);var h3=te`
  :host {
    position: relative;
    display: inline-block;
    width: 100%;
  }
`,p3=function(t,e,r,i){var n=arguments.length,s=n<3?e:i===null?i=Object.getOwnPropertyDescriptor(e,r):i,o;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")s=Reflect.decorate(t,e,r,i);else for(var a=t.length-1;a>=0;a--)(o=t[a])&&(s=(n<3?o(s):n>3?o(e,r,s):o(e,r))||s);return n>3&&s&&Object.defineProperty(e,r,s),s};let Ka=class extends Z{constructor(){super(...arguments),this.inputComponentRef=Qc()}render(){return y`
      <wui-input-text
        ${el(this.inputComponentRef)}
        placeholder="Search wallet"
        icon="search"
        type="search"
        enterKeyHint="search"
        size="sm"
      >
        <wui-input-element @click=${this.clearValue} icon="close"></wui-input-element>
      </wui-input-text>
    `}clearValue(){var e;const t=(e=this.inputComponentRef.value)==null?void 0:e.inputElementRef.value;t&&(t.value="",t.focus(),t.dispatchEvent(new Event("input")))}};Ka.styles=[me,h3],Ka=p3([V("wui-search-bar")],Ka);const f3=z`<svg  viewBox="0 0 48 54" fill="none">
  <path
    d="M43.4605 10.7248L28.0485 1.61089C25.5438 0.129705 22.4562 0.129705 19.9515 1.61088L4.53951 10.7248C2.03626 12.2051 0.5 14.9365 0.5 17.886V36.1139C0.5 39.0635 2.03626 41.7949 4.53951 43.2752L19.9515 52.3891C22.4562 53.8703 25.5438 53.8703 28.0485 52.3891L43.4605 43.2752C45.9637 41.7949 47.5 39.0635 47.5 36.114V17.8861C47.5 14.9365 45.9637 12.2051 43.4605 10.7248Z"
  />
</svg>`;var g3=te`
  :host {
    display: flex;
    flex-direction: column;
    align-items: center;
    width: 104px;
    row-gap: var(--wui-spacing-xs);
    padding: var(--wui-spacing-xs) 10px;
    background-color: var(--wui-color-gray-glass-002);
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
    stroke: var(--wui-color-gray-glass-010);
    stroke-width: 1px;
  }

  @media (max-width: 350px) {
    :host {
      width: 100%;
    }
  }
`,Xu=function(t,e,r,i){var n=arguments.length,s=n<3?e:i,o;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")s=Reflect.decorate(t,e,r,i);else for(var a=t.length-1;a>=0;a--)(o=t[a])&&(s=(n<3?o(s):n>3?o(e,r,s):o(e,r))||s);return n>3&&s&&Object.defineProperty(e,r,s),s};let go=class extends Z{constructor(){super(...arguments),this.type="wallet"}render(){return y`
      ${this.shimmerTemplate()}
      <wui-shimmer width="56px" height="20px" borderRadius="xs"></wui-shimmer>
    `}shimmerTemplate(){return this.type==="network"?y` <wui-shimmer
          data-type=${this.type}
          width="48px"
          height="54px"
          borderRadius="xs"
        ></wui-shimmer>
        ${f3}`:y`<wui-shimmer width="56px" height="56px" borderRadius="xs"></wui-shimmer>`}};go.styles=[me,ze,g3],Xu([E()],go.prototype,"type",void 0),go=Xu([V("wui-card-select-loader")],go);var w3=te`
  :host {
    display: grid;
    width: inherit;
    height: inherit;
  }
`,bt=function(t,e,r,i){var n=arguments.length,s=n<3?e:i,o;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")s=Reflect.decorate(t,e,r,i);else for(var a=t.length-1;a>=0;a--)(o=t[a])&&(s=(n<3?o(s):n>3?o(e,r,s):o(e,r))||s);return n>3&&s&&Object.defineProperty(e,r,s),s};let Je=class extends Z{render(){return this.style.cssText=`
      grid-template-rows: ${this.gridTemplateRows};
      grid-template-columns: ${this.gridTemplateColumns};
      justify-items: ${this.justifyItems};
      align-items: ${this.alignItems};
      justify-content: ${this.justifyContent};
      align-content: ${this.alignContent};
      column-gap: ${this.columnGap&&`var(--wui-spacing-${this.columnGap})`};
      row-gap: ${this.rowGap&&`var(--wui-spacing-${this.rowGap})`};
      gap: ${this.gap&&`var(--wui-spacing-${this.gap})`};
      padding-top: ${this.padding&&Be.getSpacingStyles(this.padding,0)};
      padding-right: ${this.padding&&Be.getSpacingStyles(this.padding,1)};
      padding-bottom: ${this.padding&&Be.getSpacingStyles(this.padding,2)};
      padding-left: ${this.padding&&Be.getSpacingStyles(this.padding,3)};
      margin-top: ${this.margin&&Be.getSpacingStyles(this.margin,0)};
      margin-right: ${this.margin&&Be.getSpacingStyles(this.margin,1)};
      margin-bottom: ${this.margin&&Be.getSpacingStyles(this.margin,2)};
      margin-left: ${this.margin&&Be.getSpacingStyles(this.margin,3)};
    `,y`<slot></slot>`}};Je.styles=[me,w3],bt([E()],Je.prototype,"gridTemplateRows",void 0),bt([E()],Je.prototype,"gridTemplateColumns",void 0),bt([E()],Je.prototype,"justifyItems",void 0),bt([E()],Je.prototype,"alignItems",void 0),bt([E()],Je.prototype,"justifyContent",void 0),bt([E()],Je.prototype,"alignContent",void 0),bt([E()],Je.prototype,"columnGap",void 0),bt([E()],Je.prototype,"rowGap",void 0),bt([E()],Je.prototype,"gap",void 0),bt([E()],Je.prototype,"padding",void 0),bt([E()],Je.prototype,"margin",void 0),Je=bt([V("wui-grid")],Je);var m3=te`
  button {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    cursor: pointer;
    width: 104px;
    row-gap: var(--wui-spacing-xs);
    padding: var(--wui-spacing-s) var(--wui-spacing-0);
    background-color: var(--wui-color-gray-glass-002);
    border-radius: clamp(0px, var(--wui-border-radius-xs), 20px);
    transition:
      color var(--wui-duration-lg) var(--wui-ease-out-power-1),
      background-color var(--wui-duration-lg) var(--wui-ease-out-power-1),
      border-radius var(--wui-duration-lg) var(--wui-ease-out-power-1);
    will-change: background-color, color, border-radius;
    outline: none;
    border: none;
  }

  button > wui-flex > wui-text {
    color: var(--wui-color-fg-100);
    max-width: 86px;
    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;
    justify-content: center;
  }

  button > wui-flex > wui-text.certified {
    max-width: 66px;
  }

  button:hover:enabled {
    background-color: var(--wui-color-gray-glass-005);
  }

  button:disabled > wui-flex > wui-text {
    color: var(--wui-color-gray-glass-015);
  }

  [data-selected='true'] {
    background-color: var(--wui-color-accent-glass-020);
  }

  @media (hover: hover) and (pointer: fine) {
    [data-selected='true']:hover:enabled {
      background-color: var(--wui-color-accent-glass-015);
    }
  }

  [data-selected='true']:active:enabled {
    background-color: var(--wui-color-accent-glass-010);
  }

  @media (max-width: 350px) {
    button {
      width: 100%;
    }
  }
`,En=function(t,e,r,i){var n=arguments.length,s=n<3?e:i,o;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")s=Reflect.decorate(t,e,r,i);else for(var a=t.length-1;a>=0;a--)(o=t[a])&&(s=(n<3?o(s):n>3?o(e,r,s):o(e,r))||s);return n>3&&s&&Object.defineProperty(e,r,s),s};let Or=class extends Z{constructor(){super(),this.observer=new IntersectionObserver(()=>{}),this.visible=!1,this.imageSrc=void 0,this.imageLoading=!1,this.wallet=void 0,this.observer=new IntersectionObserver(t=>{t.forEach(e=>{e.isIntersecting?(this.visible=!0,this.fetchImageSrc()):this.visible=!1})},{threshold:.01})}firstUpdated(){this.observer.observe(this)}disconnectedCallback(){this.observer.disconnect()}render(){var e,r;const t=((e=this.wallet)==null?void 0:e.badge_type)==="certified";return y`
      <button>
        ${this.imageTemplate()}
        <wui-flex flexDirection="row" alignItems="center" justifyContent="center" gap="3xs">
          <wui-text
            variant="tiny-500"
            color="inherit"
            class=${ee(t?"certified":void 0)}
            >${(r=this.wallet)==null?void 0:r.name}</wui-text
          >
          ${t?y`<wui-icon size="sm" name="walletConnectBrown"></wui-icon>`:null}
        </wui-flex>
      </button>
    `}imageTemplate(){var t,e;return!this.visible&&!this.imageSrc||this.imageLoading?this.shimmerTemplate():y`
      <wui-wallet-image
        size="md"
        imageSrc=${ee(this.imageSrc)}
        name=${(t=this.wallet)==null?void 0:t.name}
        .installed=${(e=this.wallet)==null?void 0:e.installed}
        badgeSize="sm"
      >
      </wui-wallet-image>
    `}shimmerTemplate(){return y`<wui-shimmer width="56px" height="56px" borderRadius="xs"></wui-shimmer>`}async fetchImageSrc(){this.wallet&&(this.imageSrc=$e.getWalletImage(this.wallet),!this.imageSrc&&(this.imageLoading=!0,this.imageSrc=await $e.fetchWalletImage(this.wallet.image_id),this.imageLoading=!1))}};Or.styles=m3,En([q()],Or.prototype,"visible",void 0),En([q()],Or.prototype,"imageSrc",void 0),En([q()],Or.prototype,"imageLoading",void 0),En([E()],Or.prototype,"wallet",void 0),Or=En([V("w3m-all-wallets-list-item")],Or);var v3=te`
  wui-grid {
    max-height: clamp(360px, 400px, 80vh);
    overflow: scroll;
    scrollbar-width: none;
    grid-auto-rows: min-content;
    grid-template-columns: repeat(auto-fill, 104px);
  }

  @media (max-width: 350px) {
    wui-grid {
      grid-template-columns: repeat(2, 1fr);
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
`,An=function(t,e,r,i){var n=arguments.length,s=n<3?e:i,o;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")s=Reflect.decorate(t,e,r,i);else for(var a=t.length-1;a>=0;a--)(o=t[a])&&(s=(n<3?o(s):n>3?o(e,r,s):o(e,r))||s);return n>3&&s&&Object.defineProperty(e,r,s),s};const Qu="local-paginator";let $r=class extends Z{constructor(){super(),this.unsubscribe=[],this.paginationObserver=void 0,this.loading=!W.state.wallets.length,this.wallets=W.state.wallets,this.recommended=W.state.recommended,this.featured=W.state.featured,this.unsubscribe.push(W.subscribeKey("wallets",t=>this.wallets=t),W.subscribeKey("recommended",t=>this.recommended=t),W.subscribeKey("featured",t=>this.featured=t))}firstUpdated(){this.initialFetch(),this.createPaginationObserver()}disconnectedCallback(){var t;this.unsubscribe.forEach(e=>e()),(t=this.paginationObserver)==null||t.disconnect()}render(){return y`
      <wui-grid
        data-scroll=${!this.loading}
        .padding=${["0","s","s","s"]}
        columnGap="xxs"
        rowGap="l"
        justifyContent="space-between"
      >
        ${this.loading?this.shimmerTemplate(16):this.walletsTemplate()}
        ${this.paginationLoaderTemplate()}
      </wui-grid>
    `}async initialFetch(){var e;this.loading=!0;const t=(e=this.shadowRoot)==null?void 0:e.querySelector("wui-grid");t&&(await W.fetchWalletsByPage({page:1}),await t.animate([{opacity:1},{opacity:0}],{duration:200,fill:"forwards",easing:"ease"}).finished,this.loading=!1,t.animate([{opacity:0},{opacity:1}],{duration:200,fill:"forwards",easing:"ease"}))}shimmerTemplate(t,e){return[...Array(t)].map(()=>y`
        <wui-card-select-loader type="wallet" id=${ee(e)}></wui-card-select-loader>
      `)}walletsTemplate(){const t=M.uniqueBy([...this.featured,...this.recommended,...this.wallets],"id");return ii.markWalletsAsInstalled(t).map(e=>y`
        <w3m-all-wallets-list-item
          @click=${()=>this.onConnectWallet(e)}
          .wallet=${e}
        ></w3m-all-wallets-list-item>
      `)}paginationLoaderTemplate(){const{wallets:t,recommended:e,featured:r,count:i}=W.state,n=window.innerWidth<352?3:4,s=t.length+e.length;let o=Math.ceil(s/n)*n-s+n;return o-=t.length?r.length%n:0,i===0&&r.length>0?null:i===0||[...r,...t,...e].length<i?this.shimmerTemplate(o,Qu):null}createPaginationObserver(){var e;const t=(e=this.shadowRoot)==null?void 0:e.querySelector(`#${Qu}`);t&&(this.paginationObserver=new IntersectionObserver(([r])=>{if(r!=null&&r.isIntersecting&&!this.loading){const{page:i,count:n,wallets:s}=W.state;s.length<n&&W.fetchWalletsByPage({page:i+1})}}),this.paginationObserver.observe(t))}onConnectWallet(t){F.selectWalletConnector(t)}};$r.styles=v3,An([q()],$r.prototype,"loading",void 0),An([q()],$r.prototype,"wallets",void 0),An([q()],$r.prototype,"recommended",void 0),An([q()],$r.prototype,"featured",void 0),$r=An([V("w3m-all-wallets-list")],$r);var b3=te`
  wui-grid,
  wui-loading-spinner,
  wui-flex {
    height: 360px;
  }

  wui-grid {
    overflow: scroll;
    scrollbar-width: none;
    grid-auto-rows: min-content;
    grid-template-columns: repeat(auto-fill, 104px);
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

  @media (max-width: 350px) {
    wui-grid {
      grid-template-columns: repeat(2, 1fr);
    }
  }
`,wo=function(t,e,r,i){var n=arguments.length,s=n<3?e:i,o;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")s=Reflect.decorate(t,e,r,i);else for(var a=t.length-1;a>=0;a--)(o=t[a])&&(s=(n<3?o(s):n>3?o(e,r,s):o(e,r))||s);return n>3&&s&&Object.defineProperty(e,r,s),s};let Ni=class extends Z{constructor(){super(...arguments),this.prevQuery="",this.prevBadge=void 0,this.loading=!0,this.query=""}render(){return this.onSearch(),this.loading?y`<wui-loading-spinner color="accent-100"></wui-loading-spinner>`:this.walletsTemplate()}async onSearch(){(this.query.trim()!==this.prevQuery.trim()||this.badge!==this.prevBadge)&&(this.prevQuery=this.query,this.prevBadge=this.badge,this.loading=!0,await W.searchWallet({search:this.query,badge:this.badge}),this.loading=!1)}walletsTemplate(){const{search:t}=W.state,e=ii.markWalletsAsInstalled(t);return t.length?y`
      <wui-grid
        data-testid="wallet-list"
        .padding=${["0","s","s","s"]}
        rowGap="l"
        columnGap="xs"
        justifyContent="space-between"
      >
        ${e.map(r=>y`
            <w3m-all-wallets-list-item
              @click=${()=>this.onConnectWallet(r)}
              .wallet=${r}
              data-testid="wallet-search-item-${r.id}"
            ></w3m-all-wallets-list-item>
          `)}
      </wui-grid>
    `:y`
        <wui-flex
          data-testid="no-wallet-found"
          justifyContent="center"
          alignItems="center"
          gap="s"
          flexDirection="column"
        >
          <wui-icon-box
            size="lg"
            iconColor="fg-200"
            backgroundColor="fg-300"
            icon="wallet"
            background="transparent"
          ></wui-icon-box>
          <wui-text data-testid="no-wallet-found-text" color="fg-200" variant="paragraph-500">
            No Wallet found
          </wui-text>
        </wui-flex>
      `}onConnectWallet(t){F.selectWalletConnector(t)}};Ni.styles=b3,wo([q()],Ni.prototype,"loading",void 0),wo([E()],Ni.prototype,"query",void 0),wo([E()],Ni.prototype,"badge",void 0),Ni=wo([V("w3m-all-wallets-search")],Ni);var Ya=function(t,e,r,i){var n=arguments.length,s=n<3?e:i,o;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")s=Reflect.decorate(t,e,r,i);else for(var a=t.length-1;a>=0;a--)(o=t[a])&&(s=(n<3?o(s):n>3?o(e,r,s):o(e,r))||s);return n>3&&s&&Object.defineProperty(e,r,s),s};let Rn=class extends Z{constructor(){super(...arguments),this.search="",this.onDebouncedSearch=M.debounce(t=>{this.search=t})}render(){const t=this.search.length>=2;return y`
      <wui-flex .padding=${["0","s","s","s"]} gap="xs">
        <wui-search-bar @inputChange=${this.onInputChange.bind(this)}></wui-search-bar>
        <wui-certified-switch
          ?checked=${this.badge}
          @click=${this.onClick.bind(this)}
          data-testid="wui-certified-switch"
        ></wui-certified-switch>
        ${this.qrButtonTemplate()}
      </wui-flex>
      ${t||this.badge?y`<w3m-all-wallets-search
            query=${this.search}
            badge=${ee(this.badge)}
          ></w3m-all-wallets-search>`:y`<w3m-all-wallets-list badge=${ee(this.badge)}></w3m-all-wallets-list>`}
    `}onInputChange(t){this.onDebouncedSearch(t.detail)}onClick(){if(this.badge==="certified"){this.badge=void 0;return}this.badge="certified",Ee.showSvg("Only WalletConnect certified",{icon:"walletConnectBrown",iconColor:"accent-100"})}qrButtonTemplate(){return M.isMobile()?y`
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
      `:null}onWalletConnectQr(){H.push("ConnectingWalletConnect")}};Ya([q()],Rn.prototype,"search",void 0),Ya([q()],Rn.prototype,"badge",void 0),Rn=Ya([V("w3m-all-wallets-view")],Rn);var y3=te`
  button {
    column-gap: var(--wui-spacing-s);
    padding: 11px 18px 11px var(--wui-spacing-s);
    width: 100%;
    background-color: var(--wui-color-gray-glass-002);
    border-radius: var(--wui-border-radius-xs);
    color: var(--wui-color-fg-250);
    transition:
      color var(--wui-ease-out-power-1) var(--wui-duration-md),
      background-color var(--wui-ease-out-power-1) var(--wui-duration-md);
    will-change: color, background-color;
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
    box-shadow: 0 0 0 2px var(--wui-color-gray-glass-005);
    border-radius: var(--wui-border-radius-3xl);
  }

  button > wui-icon {
    width: 36px;
    height: 36px;
    transition: opacity var(--wui-ease-out-power-1) var(--wui-duration-md);
    will-change: opacity;
  }

  button > wui-icon-box[data-variant='blue'] {
    box-shadow: 0 0 0 2px var(--wui-color-accent-glass-005);
  }

  button > wui-icon-box[data-variant='overlay'] {
    box-shadow: 0 0 0 2px var(--wui-color-gray-glass-005);
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
    border: 1px solid var(--wui-color-accent-glass-010);
    pointer-events: none;
  }

  button > wui-icon:last-child {
    width: 14px;
    height: 14px;
  }

  button:disabled {
    color: var(--wui-color-gray-glass-020);
  }

  button[data-loading='true'] > wui-icon {
    opacity: 0;
  }

  wui-loading-spinner {
    position: absolute;
    right: 18px;
    top: 50%;
    transform: translateY(-50%);
  }
`,St=function(t,e,r,i){var n=arguments.length,s=n<3?e:i,o;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")s=Reflect.decorate(t,e,r,i);else for(var a=t.length-1;a>=0;a--)(o=t[a])&&(s=(n<3?o(s):n>3?o(e,r,s):o(e,r))||s);return n>3&&s&&Object.defineProperty(e,r,s),s};let at=class extends Z{constructor(){super(...arguments),this.tabIdx=void 0,this.variant="icon",this.disabled=!1,this.imageSrc=void 0,this.alt=void 0,this.chevron=!1,this.loading=!1}render(){return y`
      <button
        ?disabled=${this.loading?!0:!!this.disabled}
        data-loading=${this.loading}
        data-iconvariant=${ee(this.iconVariant)}
        tabindex=${ee(this.tabIdx)}
      >
        ${this.loadingTemplate()} ${this.visualTemplate()}
        <wui-flex gap="3xs">
          <slot></slot>
        </wui-flex>
        ${this.chevronTemplate()}
      </button>
    `}visualTemplate(){if(this.variant==="image"&&this.imageSrc)return y`<wui-image src=${this.imageSrc} alt=${this.alt??"list item"}></wui-image>`;if(this.iconVariant==="square"&&this.icon&&this.variant==="icon")return y`<wui-icon name=${this.icon}></wui-icon>`;if(this.variant==="icon"&&this.icon&&this.iconVariant){const t=["blue","square-blue"].includes(this.iconVariant)?"accent-100":"fg-200",e=this.iconVariant==="square-blue"?"mdl":"md",r=this.iconSize?this.iconSize:e;return y`
        <wui-icon-box
          data-variant=${this.iconVariant}
          icon=${this.icon}
          iconSize=${r}
          background="transparent"
          iconColor=${t}
          backgroundColor=${t}
          size=${e}
        ></wui-icon-box>
      `}return null}loadingTemplate(){return this.loading?y`<wui-loading-spinner
        data-testid="wui-list-item-loading-spinner"
        color="fg-300"
      ></wui-loading-spinner>`:y``}chevronTemplate(){return this.chevron?y`<wui-icon size="inherit" color="fg-200" name="chevronRight"></wui-icon>`:null}};at.styles=[me,ze,y3],St([E()],at.prototype,"icon",void 0),St([E()],at.prototype,"iconSize",void 0),St([E()],at.prototype,"tabIdx",void 0),St([E()],at.prototype,"variant",void 0),St([E()],at.prototype,"iconVariant",void 0),St([E({type:Boolean})],at.prototype,"disabled",void 0),St([E()],at.prototype,"imageSrc",void 0),St([E()],at.prototype,"alt",void 0),St([E({type:Boolean})],at.prototype,"chevron",void 0),St([E({type:Boolean})],at.prototype,"loading",void 0),at=St([V("wui-list-item")],at);var C3=function(t,e,r,i){var n=arguments.length,s=n<3?e:i===null?i=Object.getOwnPropertyDescriptor(e,r):i,o;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")s=Reflect.decorate(t,e,r,i);else for(var a=t.length-1;a>=0;a--)(o=t[a])&&(s=(n<3?o(s):n>3?o(e,r,s):o(e,r))||s);return n>3&&s&&Object.defineProperty(e,r,s),s};let Sc=class extends Z{constructor(){var t;super(...arguments),this.wallet=(t=H.state.data)==null?void 0:t.wallet}render(){if(!this.wallet)throw new Error("w3m-downloads-view");return y`
      <wui-flex gap="xs" flexDirection="column" .padding=${["s","s","l","s"]}>
        ${this.chromeTemplate()} ${this.iosTemplate()} ${this.androidTemplate()}
        ${this.homepageTemplate()}
      </wui-flex>
    `}chromeTemplate(){var t;return(t=this.wallet)!=null&&t.chrome_store?y`<wui-list-item
      variant="icon"
      icon="chromeStore"
      iconVariant="square"
      @click=${this.onChromeStore.bind(this)}
      chevron
    >
      <wui-text variant="paragraph-500" color="fg-100">Chrome Extension</wui-text>
    </wui-list-item>`:null}iosTemplate(){var t;return(t=this.wallet)!=null&&t.app_store?y`<wui-list-item
      variant="icon"
      icon="appStore"
      iconVariant="square"
      @click=${this.onAppStore.bind(this)}
      chevron
    >
      <wui-text variant="paragraph-500" color="fg-100">iOS App</wui-text>
    </wui-list-item>`:null}androidTemplate(){var t;return(t=this.wallet)!=null&&t.play_store?y`<wui-list-item
      variant="icon"
      icon="playStore"
      iconVariant="square"
      @click=${this.onPlayStore.bind(this)}
      chevron
    >
      <wui-text variant="paragraph-500" color="fg-100">Android App</wui-text>
    </wui-list-item>`:null}homepageTemplate(){var t;return(t=this.wallet)!=null&&t.homepage?y`
      <wui-list-item
        variant="icon"
        icon="browser"
        iconVariant="square-blue"
        @click=${this.onHomePage.bind(this)}
        chevron
      >
        <wui-text variant="paragraph-500" color="fg-100">Website</wui-text>
      </wui-list-item>
    `:null}onChromeStore(){var t;(t=this.wallet)!=null&&t.chrome_store&&M.openHref(this.wallet.chrome_store,"_blank")}onAppStore(){var t;(t=this.wallet)!=null&&t.app_store&&M.openHref(this.wallet.app_store,"_blank")}onPlayStore(){var t;(t=this.wallet)!=null&&t.play_store&&M.openHref(this.wallet.play_store,"_blank")}onHomePage(){var t;(t=this.wallet)!=null&&t.homepage&&M.openHref(this.wallet.homepage,"_blank")}};Sc=C3([V("w3m-downloads-view")],Sc);var x3=Object.freeze({__proto__:null,get W3mConnectingWcBasicView(){return Co},get W3mAllWalletsView(){return Rn},get W3mDownloadsView(){return Sc}}),E3=te`
  :host {
    display: block;
    border-radius: clamp(0px, var(--wui-border-radius-l), 44px);
    box-shadow: 0 0 0 1px var(--wui-color-gray-glass-005);
    background-color: var(--wui-color-modal-bg);
    overflow: hidden;
  }

  :host([data-embedded='true']) {
    box-shadow:
      0 0 0 1px var(--wui-color-gray-glass-005),
      0px 4px 12px 4px var(--w3m-card-embedded-shadow-color);
  }
`,A3=function(t,e,r,i){var n=arguments.length,s=n<3?e:i===null?i=Object.getOwnPropertyDescriptor(e,r):i,o;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")s=Reflect.decorate(t,e,r,i);else for(var a=t.length-1;a>=0;a--)(o=t[a])&&(s=(n<3?o(s):n>3?o(e,r,s):o(e,r))||s);return n>3&&s&&Object.defineProperty(e,r,s),s};let Ja=class extends Z{render(){return y`<slot></slot>`}};Ja.styles=[me,E3],Ja=A3([V("wui-card")],Ja);var k3=te`
  :host {
    display: flex;
    align-items: center;
    justify-content: center;
    padding: var(--wui-spacing-s);
    border-radius: var(--wui-border-radius-s);
    border: 1px solid var(--wui-color-dark-glass-100);
    box-sizing: border-box;
    background-color: var(--wui-color-bg-325);
    box-shadow: 0px 0px 16px 0px rgba(0, 0, 0, 0.25);
  }

  wui-flex {
    width: 100%;
  }

  wui-text {
    word-break: break-word;
    flex: 1;
  }

  .close {
    cursor: pointer;
  }

  .icon-box {
    height: 40px;
    width: 40px;
    border-radius: var(--wui-border-radius-3xs);
    background-color: var(--local-icon-bg-value);
  }
`,kn=function(t,e,r,i){var n=arguments.length,s=n<3?e:i,o;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")s=Reflect.decorate(t,e,r,i);else for(var a=t.length-1;a>=0;a--)(o=t[a])&&(s=(n<3?o(s):n>3?o(e,r,s):o(e,r))||s);return n>3&&s&&Object.defineProperty(e,r,s),s};let Rr=class extends Z{constructor(){super(...arguments),this.message="",this.backgroundColor="accent-100",this.iconColor="accent-100",this.icon="info"}render(){return this.style.cssText=`
      --local-icon-bg-value: var(--wui-color-${this.backgroundColor});
   `,y`
      <wui-flex flexDirection="row" justifyContent="space-between" alignItems="center">
        <wui-flex columnGap="xs" flexDirection="row" alignItems="center">
          <wui-flex
            flexDirection="row"
            alignItems="center"
            justifyContent="center"
            class="icon-box"
          >
            <wui-icon color=${this.iconColor} size="md" name=${this.icon}></wui-icon>
          </wui-flex>
          <wui-text variant="small-500" color="bg-350" data-testid="wui-alertbar-text"
            >${this.message}</wui-text
          >
        </wui-flex>
        <wui-icon
          class="close"
          color="bg-350"
          size="sm"
          name="close"
          @click=${this.onClose}
        ></wui-icon>
      </wui-flex>
    `}onClose(){wr.close()}};Rr.styles=[me,k3],kn([E()],Rr.prototype,"message",void 0),kn([E()],Rr.prototype,"backgroundColor",void 0),kn([E()],Rr.prototype,"iconColor",void 0),kn([E()],Rr.prototype,"icon",void 0),Rr=kn([V("wui-alertbar")],Rr);var I3=te`
  :host {
    display: block;
    position: absolute;
    top: var(--wui-spacing-s);
    left: var(--wui-spacing-l);
    right: var(--wui-spacing-l);
    opacity: 0;
    pointer-events: none;
  }
`,ed=function(t,e,r,i){var n=arguments.length,s=n<3?e:i,o;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")s=Reflect.decorate(t,e,r,i);else for(var a=t.length-1;a>=0;a--)(o=t[a])&&(s=(n<3?o(s):n>3?o(e,r,s):o(e,r))||s);return n>3&&s&&Object.defineProperty(e,r,s),s};const N3={info:{backgroundColor:"fg-350",iconColor:"fg-325",icon:"info"},success:{backgroundColor:"success-glass-reown-020",iconColor:"success-125",icon:"checkmark"},warning:{backgroundColor:"warning-glass-reown-020",iconColor:"warning-100",icon:"warningCircle"},error:{backgroundColor:"error-glass-reown-020",iconColor:"error-125",icon:"exclamationTriangle"}};let mo=class extends Z{constructor(){super(),this.unsubscribe=[],this.open=wr.state.open,this.onOpen(!0),this.unsubscribe.push(wr.subscribeKey("open",t=>{this.open=t,this.onOpen(!1)}))}disconnectedCallback(){this.unsubscribe.forEach(t=>t())}render(){const{message:t,variant:e}=wr.state,r=N3[e];return y`
      <wui-alertbar
        message=${t}
        backgroundColor=${r==null?void 0:r.backgroundColor}
        iconColor=${r==null?void 0:r.iconColor}
        icon=${r==null?void 0:r.icon}
      ></wui-alertbar>
    `}onOpen(t){this.open?(this.animate([{opacity:0,transform:"scale(0.85)"},{opacity:1,transform:"scale(1)"}],{duration:150,fill:"forwards",easing:"ease"}),this.style.cssText="pointer-events: auto"):t||(this.animate([{opacity:1,transform:"scale(1)"},{opacity:0,transform:"scale(0.85)"}],{duration:150,fill:"forwards",easing:"ease"}),this.style.cssText="pointer-events: none")}};mo.styles=I3,ed([q()],mo.prototype,"open",void 0),mo=ed([V("w3m-alertbar")],mo);var S3=te`
  button {
    border-radius: var(--local-border-radius);
    color: var(--wui-color-fg-100);
    padding: var(--local-padding);
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
`,In=function(t,e,r,i){var n=arguments.length,s=n<3?e:i,o;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")s=Reflect.decorate(t,e,r,i);else for(var a=t.length-1;a>=0;a--)(o=t[a])&&(s=(n<3?o(s):n>3?o(e,r,s):o(e,r))||s);return n>3&&s&&Object.defineProperty(e,r,s),s};let Lr=class extends Z{constructor(){super(...arguments),this.size="md",this.disabled=!1,this.icon="copy",this.iconColor="inherit"}render(){const t=this.size==="lg"?"--wui-border-radius-xs":"--wui-border-radius-xxs",e=this.size==="lg"?"--wui-spacing-1xs":"--wui-spacing-2xs";return this.style.cssText=`
    --local-border-radius: var(${t});
    --local-padding: var(${e});
`,y`
      <button ?disabled=${this.disabled}>
        <wui-icon color=${this.iconColor} size=${this.size} name=${this.icon}></wui-icon>
      </button>
    `}};Lr.styles=[me,ze,xs,S3],In([E()],Lr.prototype,"size",void 0),In([E({type:Boolean})],Lr.prototype,"disabled",void 0),In([E()],Lr.prototype,"icon",void 0),In([E()],Lr.prototype,"iconColor",void 0),Lr=In([V("wui-icon-link")],Lr);var P3=te`
  button {
    display: block;
    display: flex;
    align-items: center;
    padding: var(--wui-spacing-xxs);
    gap: var(--wui-spacing-xxs);
    transition: all var(--wui-ease-out-power-1) var(--wui-duration-md);
    border-radius: var(--wui-border-radius-xxs);
  }

  wui-image {
    border-radius: 100%;
    width: var(--wui-spacing-xl);
    height: var(--wui-spacing-xl);
  }

  wui-icon-box {
    width: var(--wui-spacing-xl);
    height: var(--wui-spacing-xl);
  }

  button:hover {
    background-color: var(--wui-color-gray-glass-002);
  }

  button:active {
    background-color: var(--wui-color-gray-glass-005);
  }
`,td=function(t,e,r,i){var n=arguments.length,s=n<3?e:i,o;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")s=Reflect.decorate(t,e,r,i);else for(var a=t.length-1;a>=0;a--)(o=t[a])&&(s=(n<3?o(s):n>3?o(e,r,s):o(e,r))||s);return n>3&&s&&Object.defineProperty(e,r,s),s};let vo=class extends Z{constructor(){super(...arguments),this.imageSrc=""}render(){return y`<button>
      ${this.imageTemplate()}
      <wui-icon size="xs" color="fg-200" name="chevronBottom"></wui-icon>
    </button>`}imageTemplate(){return this.imageSrc?y`<wui-image src=${this.imageSrc} alt="select visual"></wui-image>`:y`<wui-icon-box
      size="xxs"
      iconColor="fg-200"
      backgroundColor="fg-100"
      background="opaque"
      icon="networkPlaceholder"
    ></wui-icon-box>`}};vo.styles=[me,ze,xs,P3],td([E()],vo.prototype,"imageSrc",void 0),vo=td([V("wui-select")],vo);var _3=te`
  :host {
    height: 64px;
  }

  wui-text {
    text-transform: capitalize;
  }

  wui-flex.w3m-header-title {
    transform: translateY(0);
    opacity: 1;
  }

  wui-flex.w3m-header-title[view-direction='prev'] {
    animation:
      slide-down-out 120ms forwards var(--wui-ease-out-power-2),
      slide-down-in 120ms forwards var(--wui-ease-out-power-2);
    animation-delay: 0ms, 200ms;
  }

  wui-flex.w3m-header-title[view-direction='next'] {
    animation:
      slide-up-out 120ms forwards var(--wui-ease-out-power-2),
      slide-up-in 120ms forwards var(--wui-ease-out-power-2);
    animation-delay: 0ms, 200ms;
  }

  wui-icon-link[data-hidden='true'] {
    opacity: 0 !important;
    pointer-events: none;
  }

  @keyframes slide-up-out {
    from {
      transform: translateY(0px);
      opacity: 1;
    }
    to {
      transform: translateY(3px);
      opacity: 0;
    }
  }

  @keyframes slide-up-in {
    from {
      transform: translateY(-3px);
      opacity: 0;
    }
    to {
      transform: translateY(0);
      opacity: 1;
    }
  }

  @keyframes slide-down-out {
    from {
      transform: translateY(0px);
      opacity: 1;
    }
    to {
      transform: translateY(-3px);
      opacity: 0;
    }
  }

  @keyframes slide-down-in {
    from {
      transform: translateY(3px);
      opacity: 0;
    }
    to {
      transform: translateY(0);
      opacity: 1;
    }
  }
`,Ut=function(t,e,r,i){var n=arguments.length,s=n<3?e:i,o;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")s=Reflect.decorate(t,e,r,i);else for(var a=t.length-1;a>=0;a--)(o=t[a])&&(s=(n<3?o(s):n>3?o(e,r,s):o(e,r))||s);return n>3&&s&&Object.defineProperty(e,r,s),s};const T3=["SmartSessionList"];function Xa(){var s,o,a,c,l,u,d;const t=(o=(s=H.state.data)==null?void 0:s.connector)==null?void 0:o.name,e=(c=(a=H.state.data)==null?void 0:a.wallet)==null?void 0:c.name,r=(u=(l=H.state.data)==null?void 0:l.network)==null?void 0:u.name,i=e??t,n=F.getConnectors();return{Connect:`Connect ${n.length===1&&((d=n[0])==null?void 0:d.id)==="w3m-email"?"Email":""} Wallet`,Create:"Create Wallet",ChooseAccountName:void 0,Account:void 0,AccountSettings:void 0,AllWallets:"All Wallets",ApproveTransaction:"Approve Transaction",BuyInProgress:"Buy",ConnectingExternal:i??"Connect Wallet",ConnectingWalletConnect:i??"WalletConnect",ConnectingWalletConnectBasic:"WalletConnect",ConnectingSiwe:"Sign In",Convert:"Convert",ConvertSelectToken:"Select token",ConvertPreview:"Preview convert",Downloads:i?`Get ${i}`:"Downloads",EmailLogin:"Email Login",EmailVerifyOtp:"Confirm Email",EmailVerifyDevice:"Register Device",GetWallet:"Get a wallet",Networks:"Choose Network",OnRampProviders:"Choose Provider",OnRampActivity:"Activity",OnRampTokenSelect:"Select Token",OnRampFiatSelect:"Select Currency",Profile:void 0,SwitchNetwork:r??"Switch Network",SwitchAddress:"Switch Address",Transactions:"Activity",UnsupportedChain:"Switch Network",UpgradeEmailWallet:"Upgrade your Wallet",UpdateEmailWallet:"Edit Email",UpdateEmailPrimaryOtp:"Confirm Current Email",UpdateEmailSecondaryOtp:"Confirm New Email",WhatIsABuy:"What is Buy?",RegisterAccountName:"Choose name",RegisterAccountNameSuccess:"",WalletReceive:"Receive",WalletCompatibleNetworks:"Compatible Networks",Swap:"Swap",SwapSelectToken:"Select token",SwapPreview:"Preview swap",WalletSend:"Send",WalletSendPreview:"Review send",WalletSendSelectToken:"Select Token",WhatIsANetwork:"What is a network?",WhatIsAWallet:"What is a wallet?",ConnectWallets:"Connect wallet",ConnectSocials:"All socials",ConnectingSocial:Y.state.socialProvider?Y.state.socialProvider:"Connect Social",ConnectingMultiChain:"Select chain",ConnectingFarcaster:"Farcaster",SwitchActiveChain:"Switch chain",SmartSessionCreated:void 0,SmartSessionList:"Smart Sessions",SIWXSignMessage:"Sign In"}}let yt=class extends Z{constructor(){super(),this.unsubscribe=[],this.heading=Xa()[H.state.view],this.network=w.state.activeCaipNetwork,this.networkImage=$e.getNetworkImage(this.network),this.buffering=!1,this.showBack=!1,this.prevHistoryLength=1,this.view=H.state.view,this.viewDirection="",this.headerText=Xa()[H.state.view],this.unsubscribe.push(Qe.subscribeNetworkImages(()=>{this.networkImage=$e.getNetworkImage(this.network)}),H.subscribeKey("view",t=>{setTimeout(()=>{this.view=t,this.headerText=Xa()[t]},gr.ANIMATION_DURATIONS.HeaderText),this.onViewChange(),this.onHistoryChange()}),K.subscribeKey("buffering",t=>this.buffering=t),w.subscribeKey("activeCaipNetwork",t=>{this.network=t,this.networkImage=$e.getNetworkImage(this.network)}))}disconnectCallback(){this.unsubscribe.forEach(t=>t())}render(){return y`
      <wui-flex .padding=${this.getPadding()} justifyContent="space-between" alignItems="center">
        ${this.leftHeaderTemplate()} ${this.titleTemplate()} ${this.rightHeaderTemplate()}
      </wui-flex>
    `}onWalletHelp(){le.sendEvent({type:"track",event:"CLICK_WALLET_HELP"}),H.push("WhatIsAWallet")}async onClose(){H.state.view==="UnsupportedChain"||await mr.isSIWXCloseDisabled()?he.shake():he.close()}rightHeaderTemplate(){var e,r;const t=(r=(e=O==null?void 0:O.state)==null?void 0:e.features)==null?void 0:r.smartSessions;return H.state.view!=="Account"||!t?this.closeButtonTemplate():y`<wui-flex>
      <wui-icon-link
        icon="clock"
        @click=${()=>H.push("SmartSessionList")}
        data-testid="w3m-header-smart-sessions"
      ></wui-icon-link>
      ${this.closeButtonTemplate()}
    </wui-flex> `}closeButtonTemplate(){return y`
      <wui-icon-link
        ?disabled=${this.buffering}
        icon="close"
        @click=${this.onClose.bind(this)}
        data-testid="w3m-header-close"
      ></wui-icon-link>
    `}titleTemplate(){const t=T3.includes(this.view);return y`
      <wui-flex
        view-direction="${this.viewDirection}"
        class="w3m-header-title"
        alignItems="center"
        gap="xs"
      >
        <wui-text variant="paragraph-700" color="fg-100" data-testid="w3m-header-text"
          >${this.headerText}</wui-text
        >
        ${t?y`<wui-tag variant="main">Beta</wui-tag>`:null}
      </wui-flex>
    `}leftHeaderTemplate(){var c;const{view:t}=H.state,e=t==="Connect",r=O.state.enableEmbedded,i=t==="ApproveTransaction",n=t==="ConnectingSiwe",s=t==="Account",o=O.state.enableNetworkSwitch,a=i||n||e&&r;return s&&o?y`<wui-select
        id="dynamic"
        data-testid="w3m-account-select-network"
        active-network=${ee((c=this.network)==null?void 0:c.name)}
        @click=${this.onNetworks.bind(this)}
        imageSrc=${ee(this.networkImage)}
      ></wui-select>`:this.showBack&&!a?y`<wui-icon-link
        data-testid="header-back"
        id="dynamic"
        icon="chevronLeft"
        ?disabled=${this.buffering}
        @click=${this.onGoBack.bind(this)}
      ></wui-icon-link>`:y`<wui-icon-link
      data-hidden=${!e}
      id="dynamic"
      icon="helpCircle"
      @click=${this.onWalletHelp.bind(this)}
    ></wui-icon-link>`}onNetworks(){this.isAllowedNetworkSwitch()&&(le.sendEvent({type:"track",event:"CLICK_NETWORKS"}),H.push("Networks"))}isAllowedNetworkSwitch(){const t=w.getAllRequestedCaipNetworks(),e=t?t.length>1:!1,r=t==null?void 0:t.find(({id:i})=>{var n;return i===((n=this.network)==null?void 0:n.id)});return e||!r}getPadding(){return this.heading?["l","2l","l","2l"]:["0","2l","0","2l"]}onViewChange(){const{history:t}=H.state;let e=gr.VIEW_DIRECTION.Next;t.length<this.prevHistoryLength&&(e=gr.VIEW_DIRECTION.Prev),this.prevHistoryLength=t.length,this.viewDirection=e}async onHistoryChange(){var r;const{history:t}=H.state,e=(r=this.shadowRoot)==null?void 0:r.querySelector("#dynamic");t.length>1&&!this.showBack&&e?(await e.animate([{opacity:1},{opacity:0}],{duration:200,fill:"forwards",easing:"ease"}).finished,this.showBack=!0,e.animate([{opacity:0},{opacity:1}],{duration:200,fill:"forwards",easing:"ease"})):t.length<=1&&this.showBack&&e&&(await e.animate([{opacity:1},{opacity:0}],{duration:200,fill:"forwards",easing:"ease"}).finished,this.showBack=!1,e.animate([{opacity:0},{opacity:1}],{duration:200,fill:"forwards",easing:"ease"}))}onGoBack(){H.goBack()}};yt.styles=_3,Ut([q()],yt.prototype,"heading",void 0),Ut([q()],yt.prototype,"network",void 0),Ut([q()],yt.prototype,"networkImage",void 0),Ut([q()],yt.prototype,"buffering",void 0),Ut([q()],yt.prototype,"showBack",void 0),Ut([q()],yt.prototype,"prevHistoryLength",void 0),Ut([q()],yt.prototype,"view",void 0),Ut([q()],yt.prototype,"viewDirection",void 0),Ut([q()],yt.prototype,"headerText",void 0),yt=Ut([V("w3m-header")],yt);var O3=te`
  :host {
    display: flex;
    column-gap: var(--wui-spacing-s);
    align-items: center;
    padding: var(--wui-spacing-xs) var(--wui-spacing-m) var(--wui-spacing-xs) var(--wui-spacing-xs);
    border-radius: var(--wui-border-radius-s);
    border: 1px solid var(--wui-color-gray-glass-005);
    box-sizing: border-box;
    background-color: var(--wui-color-bg-175);
    box-shadow:
      0px 14px 64px -4px rgba(0, 0, 0, 0.15),
      0px 8px 22px -6px rgba(0, 0, 0, 0.15);

    max-width: 300px;
  }

  :host wui-loading-spinner {
    margin-left: var(--wui-spacing-3xs);
  }
`,Br=function(t,e,r,i){var n=arguments.length,s=n<3?e:i,o;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")s=Reflect.decorate(t,e,r,i);else for(var a=t.length-1;a>=0;a--)(o=t[a])&&(s=(n<3?o(s):n>3?o(e,r,s):o(e,r))||s);return n>3&&s&&Object.defineProperty(e,r,s),s};let Xt=class extends Z{constructor(){super(...arguments),this.backgroundColor="accent-100",this.iconColor="accent-100",this.icon="checkmark",this.message="",this.loading=!1,this.iconType="default"}render(){return y`
      ${this.templateIcon()}
      <wui-text variant="paragraph-500" color="fg-100" data-testid="wui-snackbar-message"
        >${this.message}</wui-text
      >
    `}templateIcon(){return this.loading?y`<wui-loading-spinner size="md" color="accent-100"></wui-loading-spinner>`:this.iconType==="default"?y`<wui-icon size="xl" color=${this.iconColor} name=${this.icon}></wui-icon>`:y`<wui-icon-box
      size="sm"
      iconSize="xs"
      iconColor=${this.iconColor}
      backgroundColor=${this.backgroundColor}
      icon=${this.icon}
      background="opaque"
    ></wui-icon-box>`}};Xt.styles=[me,O3],Br([E()],Xt.prototype,"backgroundColor",void 0),Br([E()],Xt.prototype,"iconColor",void 0),Br([E()],Xt.prototype,"icon",void 0),Br([E()],Xt.prototype,"message",void 0),Br([E()],Xt.prototype,"loading",void 0),Br([E()],Xt.prototype,"iconType",void 0),Xt=Br([V("wui-snackbar")],Xt);var $3=te`
  :host {
    display: block;
    position: absolute;
    opacity: 0;
    pointer-events: none;
    top: 11px;
    left: 50%;
    width: max-content;
  }
`,rd=function(t,e,r,i){var n=arguments.length,s=n<3?e:i,o;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")s=Reflect.decorate(t,e,r,i);else for(var a=t.length-1;a>=0;a--)(o=t[a])&&(s=(n<3?o(s):n>3?o(e,r,s):o(e,r))||s);return n>3&&s&&Object.defineProperty(e,r,s),s};const R3={loading:void 0,success:{backgroundColor:"success-100",iconColor:"success-100",icon:"checkmark"},error:{backgroundColor:"error-100",iconColor:"error-100",icon:"close"}};let bo=class extends Z{constructor(){super(),this.unsubscribe=[],this.timeout=void 0,this.open=Ee.state.open,this.unsubscribe.push(Ee.subscribeKey("open",t=>{this.open=t,this.onOpen()}))}disconnectedCallback(){clearTimeout(this.timeout),this.unsubscribe.forEach(t=>t())}render(){const{message:t,variant:e,svg:r}=Ee.state,i=R3[e],{icon:n,iconColor:s}=r??i??{};return y`
      <wui-snackbar
        message=${t}
        backgroundColor=${i==null?void 0:i.backgroundColor}
        iconColor=${s}
        icon=${n}
        .loading=${e==="loading"}
      ></wui-snackbar>
    `}onOpen(){clearTimeout(this.timeout),this.open?(this.animate([{opacity:0,transform:"translateX(-50%) scale(0.85)"},{opacity:1,transform:"translateX(-50%) scale(1)"}],{duration:150,fill:"forwards",easing:"ease"}),this.timeout&&clearTimeout(this.timeout),Ee.state.autoClose&&(this.timeout=setTimeout(()=>Ee.hide(),2500))):this.animate([{opacity:1,transform:"translateX(-50%) scale(1)"},{opacity:0,transform:"translateX(-50%) scale(0.85)"}],{duration:150,fill:"forwards",easing:"ease"})}};bo.styles=$3,rd([q()],bo.prototype,"open",void 0),bo=rd([V("w3m-snackbar")],bo);var L3=te`
  :host {
    pointer-events: none;
  }

  :host > wui-flex {
    display: var(--w3m-tooltip-display);
    opacity: var(--w3m-tooltip-opacity);
    padding: 9px var(--wui-spacing-s) 10px var(--wui-spacing-s);
    border-radius: var(--wui-border-radius-xxs);
    color: var(--wui-color-bg-100);
    position: fixed;
    top: var(--w3m-tooltip-top);
    left: var(--w3m-tooltip-left);
    transform: translate(calc(-50% + var(--w3m-tooltip-parent-width)), calc(-100% - 8px));
    max-width: calc(var(--w3m-modal-width) - var(--wui-spacing-xl));
    transition: opacity 0.2s var(--wui-ease-out-power-2);
    will-change: opacity;
  }

  :host([data-variant='shade']) > wui-flex {
    background-color: var(--wui-color-bg-150);
    border: 1px solid var(--wui-color-gray-glass-005);
  }

  :host([data-variant='shade']) > wui-flex > wui-text {
    color: var(--wui-color-fg-150);
  }

  :host([data-variant='fill']) > wui-flex {
    background-color: var(--wui-color-fg-100);
    border: none;
  }

  wui-icon {
    position: absolute;
    width: 12px !important;
    height: 4px !important;
    color: var(--wui-color-bg-150);
  }

  wui-icon[data-placement='top'] {
    bottom: 0px;
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
`,Nn=function(t,e,r,i){var n=arguments.length,s=n<3?e:i,o;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")s=Reflect.decorate(t,e,r,i);else for(var a=t.length-1;a>=0;a--)(o=t[a])&&(s=(n<3?o(s):n>3?o(e,r,s):o(e,r))||s);return n>3&&s&&Object.defineProperty(e,r,s),s};let Ur=class extends Z{constructor(){super(),this.unsubscribe=[],this.open=_i.state.open,this.message=_i.state.message,this.triggerRect=_i.state.triggerRect,this.variant=_i.state.variant,this.unsubscribe.push(_i.subscribe(t=>{this.open=t.open,this.message=t.message,this.triggerRect=t.triggerRect,this.variant=t.variant}))}disconnectedCallback(){this.unsubscribe.forEach(t=>t())}render(){this.dataset.variant=this.variant;const t=this.triggerRect.top,e=this.triggerRect.left;return this.style.cssText=`
    --w3m-tooltip-top: ${t}px;
    --w3m-tooltip-left: ${e}px;
    --w3m-tooltip-parent-width: ${this.triggerRect.width/2}px;
    --w3m-tooltip-display: ${this.open?"flex":"none"};
    --w3m-tooltip-opacity: ${this.open?1:0};
    `,y`<wui-flex>
      <wui-icon data-placement="top" color="fg-100" size="inherit" name="cursor"></wui-icon>
      <wui-text color="inherit" variant="small-500">${this.message}</wui-text>
    </wui-flex>`}};Ur.styles=[L3],Nn([q()],Ur.prototype,"open",void 0),Nn([q()],Ur.prototype,"message",void 0),Nn([q()],Ur.prototype,"triggerRect",void 0),Nn([q()],Ur.prototype,"variant",void 0),Ur=Nn([V("w3m-tooltip"),V("w3m-tooltip")],Ur);var B3=te`
  :host {
    --prev-height: 0px;
    --new-height: 0px;
    display: block;
  }

  div.w3m-router-container {
    transform: translateY(0);
    opacity: 1;
  }

  div.w3m-router-container[view-direction='prev'] {
    animation:
      slide-left-out 150ms forwards ease,
      slide-left-in 150ms forwards ease;
    animation-delay: 0ms, 200ms;
  }

  div.w3m-router-container[view-direction='next'] {
    animation:
      slide-right-out 150ms forwards ease,
      slide-right-in 150ms forwards ease;
    animation-delay: 0ms, 200ms;
  }

  @keyframes slide-left-out {
    from {
      transform: translateX(0px);
      opacity: 1;
    }
    to {
      transform: translateX(10px);
      opacity: 0;
    }
  }

  @keyframes slide-left-in {
    from {
      transform: translateX(-10px);
      opacity: 0;
    }
    to {
      transform: translateX(0);
      opacity: 1;
    }
  }

  @keyframes slide-right-out {
    from {
      transform: translateX(0px);
      opacity: 1;
    }
    to {
      transform: translateX(-10px);
      opacity: 0;
    }
  }

  @keyframes slide-right-in {
    from {
      transform: translateX(10px);
      opacity: 0;
    }
    to {
      transform: translateX(0);
      opacity: 1;
    }
  }
`,Qa=function(t,e,r,i){var n=arguments.length,s=n<3?e:i,o;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")s=Reflect.decorate(t,e,r,i);else for(var a=t.length-1;a>=0;a--)(o=t[a])&&(s=(n<3?o(s):n>3?o(e,r,s):o(e,r))||s);return n>3&&s&&Object.defineProperty(e,r,s),s};let Sn=class extends Z{constructor(){super(),this.resizeObserver=void 0,this.prevHeight="0px",this.prevHistoryLength=1,this.unsubscribe=[],this.view=H.state.view,this.viewDirection="",this.unsubscribe.push(H.subscribeKey("view",t=>this.onViewChange(t)))}firstUpdated(){var t;this.resizeObserver=new ResizeObserver(([e])=>{const r=`${e==null?void 0:e.contentRect.height}px`;this.prevHeight!=="0px"&&(this.style.setProperty("--prev-height",this.prevHeight),this.style.setProperty("--new-height",r),this.style.animation="w3m-view-height 150ms forwards ease",this.style.height="auto"),setTimeout(()=>{this.prevHeight=r,this.style.animation="unset"},gr.ANIMATION_DURATIONS.ModalHeight)}),(t=this.resizeObserver)==null||t.observe(this.getWrapper())}disconnectedCallback(){var t;(t=this.resizeObserver)==null||t.unobserve(this.getWrapper()),this.unsubscribe.forEach(e=>e())}render(){return y`<div class="w3m-router-container" view-direction="${this.viewDirection}">
      ${this.viewTemplate()}
    </div>`}viewTemplate(){switch(this.view){case"AccountSettings":return y`<w3m-account-settings-view></w3m-account-settings-view>`;case"Account":return y`<w3m-account-view></w3m-account-view>`;case"AllWallets":return y`<w3m-all-wallets-view></w3m-all-wallets-view>`;case"ApproveTransaction":return y`<w3m-approve-transaction-view></w3m-approve-transaction-view>`;case"BuyInProgress":return y`<w3m-buy-in-progress-view></w3m-buy-in-progress-view>`;case"ChooseAccountName":return y`<w3m-choose-account-name-view></w3m-choose-account-name-view>`;case"Connect":return y`<w3m-connect-view></w3m-connect-view>`;case"Create":return y`<w3m-connect-view walletGuide="explore"></w3m-connect-view>`;case"ConnectingWalletConnect":return y`<w3m-connecting-wc-view></w3m-connecting-wc-view>`;case"ConnectingWalletConnectBasic":return y`<w3m-connecting-wc-basic-view></w3m-connecting-wc-basic-view>`;case"ConnectingExternal":return y`<w3m-connecting-external-view></w3m-connecting-external-view>`;case"ConnectingSiwe":return y`<w3m-connecting-siwe-view></w3m-connecting-siwe-view>`;case"ConnectWallets":return y`<w3m-connect-wallets-view></w3m-connect-wallets-view>`;case"ConnectSocials":return y`<w3m-connect-socials-view></w3m-connect-socials-view>`;case"ConnectingSocial":return y`<w3m-connecting-social-view></w3m-connecting-social-view>`;case"Downloads":return y`<w3m-downloads-view></w3m-downloads-view>`;case"EmailLogin":return y`<w3m-email-login-view></w3m-email-login-view>`;case"EmailVerifyOtp":return y`<w3m-email-verify-otp-view></w3m-email-verify-otp-view>`;case"EmailVerifyDevice":return y`<w3m-email-verify-device-view></w3m-email-verify-device-view>`;case"GetWallet":return y`<w3m-get-wallet-view></w3m-get-wallet-view>`;case"Networks":return y`<w3m-networks-view></w3m-networks-view>`;case"SwitchNetwork":return y`<w3m-network-switch-view></w3m-network-switch-view>`;case"Profile":return y`<w3m-profile-view></w3m-profile-view>`;case"SwitchAddress":return y`<w3m-switch-address-view></w3m-switch-address-view>`;case"Transactions":return y`<w3m-transactions-view></w3m-transactions-view>`;case"OnRampProviders":return y`<w3m-onramp-providers-view></w3m-onramp-providers-view>`;case"OnRampActivity":return y`<w3m-onramp-activity-view></w3m-onramp-activity-view>`;case"OnRampTokenSelect":return y`<w3m-onramp-token-select-view></w3m-onramp-token-select-view>`;case"OnRampFiatSelect":return y`<w3m-onramp-fiat-select-view></w3m-onramp-fiat-select-view>`;case"UpgradeEmailWallet":return y`<w3m-upgrade-wallet-view></w3m-upgrade-wallet-view>`;case"UpdateEmailWallet":return y`<w3m-update-email-wallet-view></w3m-update-email-wallet-view>`;case"UpdateEmailPrimaryOtp":return y`<w3m-update-email-primary-otp-view></w3m-update-email-primary-otp-view>`;case"UpdateEmailSecondaryOtp":return y`<w3m-update-email-secondary-otp-view></w3m-update-email-secondary-otp-view>`;case"UnsupportedChain":return y`<w3m-unsupported-chain-view></w3m-unsupported-chain-view>`;case"Swap":return y`<w3m-swap-view></w3m-swap-view>`;case"SwapSelectToken":return y`<w3m-swap-select-token-view></w3m-swap-select-token-view>`;case"SwapPreview":return y`<w3m-swap-preview-view></w3m-swap-preview-view>`;case"WalletSend":return y`<w3m-wallet-send-view></w3m-wallet-send-view>`;case"WalletSendSelectToken":return y`<w3m-wallet-send-select-token-view></w3m-wallet-send-select-token-view>`;case"WalletSendPreview":return y`<w3m-wallet-send-preview-view></w3m-wallet-send-preview-view>`;case"WhatIsABuy":return y`<w3m-what-is-a-buy-view></w3m-what-is-a-buy-view>`;case"WalletReceive":return y`<w3m-wallet-receive-view></w3m-wallet-receive-view>`;case"WalletCompatibleNetworks":return y`<w3m-wallet-compatible-networks-view></w3m-wallet-compatible-networks-view>`;case"WhatIsAWallet":return y`<w3m-what-is-a-wallet-view></w3m-what-is-a-wallet-view>`;case"ConnectingMultiChain":return y`<w3m-connecting-multi-chain-view></w3m-connecting-multi-chain-view>`;case"WhatIsANetwork":return y`<w3m-what-is-a-network-view></w3m-what-is-a-network-view>`;case"ConnectingFarcaster":return y`<w3m-connecting-farcaster-view></w3m-connecting-farcaster-view>`;case"SwitchActiveChain":return y`<w3m-switch-active-chain-view></w3m-switch-active-chain-view>`;case"RegisterAccountName":return y`<w3m-register-account-name-view></w3m-register-account-name-view>`;case"RegisterAccountNameSuccess":return y`<w3m-register-account-name-success-view></w3m-register-account-name-success-view>`;case"SmartSessionCreated":return y`<w3m-smart-session-created-view></w3m-smart-session-created-view>`;case"SmartSessionList":return y`<w3m-smart-session-list-view></w3m-smart-session-list-view>`;case"SIWXSignMessage":return y`<w3m-siwx-sign-message-view></w3m-siwx-sign-message-view>`;default:return y`<w3m-connect-view></w3m-connect-view>`}}onViewChange(t){_i.hide();let e=gr.VIEW_DIRECTION.Next;const{history:r}=H.state;r.length<this.prevHistoryLength&&(e=gr.VIEW_DIRECTION.Prev),this.prevHistoryLength=r.length,this.viewDirection=e,setTimeout(()=>{this.view=t},gr.ANIMATION_DURATIONS.ViewTransition)}getWrapper(){var t;return(t=this.shadowRoot)==null?void 0:t.querySelector("div")}};Sn.styles=B3,Qa([q()],Sn.prototype,"view",void 0),Qa([q()],Sn.prototype,"viewDirection",void 0),Sn=Qa([V("w3m-router")],Sn);var U3=te`
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
    transition: opacity 0.2s var(--wui-ease-out-power-2);
    will-change: opacity;
  }

  :host(.open) {
    opacity: 1;
  }

  :host(.embedded) {
    position: relative;
    pointer-events: unset;
    background: none;
    width: 100%;
    opacity: 1;
  }

  wui-card {
    max-width: var(--w3m-modal-width);
    width: 100%;
    position: relative;
    animation: zoom-in 0.2s var(--wui-ease-out-power-2);
    animation-fill-mode: backwards;
    outline: none;
    transition:
      border-radius var(--wui-duration-lg) var(--wui-ease-out-power-1),
      background-color var(--wui-duration-lg) var(--wui-ease-out-power-1);
    will-change: border-radius, background-color;
  }

  :host(.embedded) wui-card {
    max-width: 400px;
  }

  wui-card[shake='true'] {
    animation:
      zoom-in 0.2s var(--wui-ease-out-power-2),
      w3m-shake 0.5s var(--wui-ease-out-power-2);
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
      border-bottom-left-radius: var(--local-border-bottom-mobile-radius);
      border-bottom-right-radius: var(--local-border-bottom-mobile-radius);
      border-bottom: none;
      animation: slide-in 0.2s var(--wui-ease-out-power-2);
    }

    wui-card[shake='true'] {
      animation:
        slide-in 0.2s var(--wui-ease-out-power-2),
        w3m-shake 0.5s var(--wui-ease-out-power-2);
    }
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

  @keyframes w3m-shake {
    0% {
      transform: scale(1) rotate(0deg);
    }
    20% {
      transform: scale(1) rotate(-1deg);
    }
    40% {
      transform: scale(1) rotate(1.5deg);
    }
    60% {
      transform: scale(1) rotate(-1.5deg);
    }
    80% {
      transform: scale(1) rotate(1deg);
    }
    100% {
      transform: scale(1) rotate(0deg);
    }
  }

  @keyframes w3m-view-height {
    from {
      height: var(--prev-height);
    }
    to {
      height: var(--new-height);
    }
  }
`,Mr=function(t,e,r,i){var n=arguments.length,s=n<3?e:i,o;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")s=Reflect.decorate(t,e,r,i);else for(var a=t.length-1;a>=0;a--)(o=t[a])&&(s=(n<3?o(s):n>3?o(e,r,s):o(e,r))||s);return n>3&&s&&Object.defineProperty(e,r,s),s};const id="scroll-lock";let Mt=class extends Z{constructor(){super(),this.unsubscribe=[],this.abortController=void 0,this.hasPrefetched=!1,this.enableEmbedded=O.state.enableEmbedded,this.open=he.state.open,this.caipAddress=w.state.activeCaipAddress,this.caipNetwork=w.state.activeCaipNetwork,this.shake=he.state.shake,this.filterByNamespace=F.state.filterByNamespace,this.initializeTheming(),W.prefetchAnalyticsConfig(),this.unsubscribe.push(he.subscribeKey("open",t=>t?this.onOpen():this.onClose()),he.subscribeKey("shake",t=>this.shake=t),w.subscribeKey("activeCaipNetwork",t=>this.onNewNetwork(t)),w.subscribeKey("activeCaipAddress",t=>this.onNewAddress(t)),O.subscribeKey("enableEmbedded",t=>this.enableEmbedded=t),F.subscribeKey("filterByNamespace",t=>{var e;this.filterByNamespace!==t&&!((e=w.getAccountData(t))!=null&&e.caipAddress)&&(W.fetchRecommendedWallets(),this.filterByNamespace=t)}))}firstUpdated(){if(this.caipAddress){if(this.enableEmbedded){he.close(),this.prefetch();return}this.onNewAddress(this.caipAddress)}this.open&&this.onOpen(),this.enableEmbedded&&this.prefetch()}disconnectedCallback(){this.unsubscribe.forEach(t=>t()),this.onRemoveKeyboardListener()}render(){return this.style.cssText=`
      --local-border-bottom-mobile-radius: ${this.enableEmbedded?"clamp(0px, var(--wui-border-radius-l), 44px)":"0px"};
    `,this.enableEmbedded?y`${this.contentTemplate()}
        <w3m-tooltip></w3m-tooltip> `:this.open?y`
          <wui-flex @click=${this.onOverlayClick.bind(this)} data-testid="w3m-modal-overlay">
            ${this.contentTemplate()}
          </wui-flex>
          <w3m-tooltip></w3m-tooltip>
        `:null}contentTemplate(){return y` <wui-card
      shake="${this.shake}"
      data-embedded="${ee(this.enableEmbedded)}"
      role="alertdialog"
      aria-modal="true"
      tabindex="0"
      data-testid="w3m-modal-card"
    >
      <w3m-header></w3m-header>
      <w3m-router></w3m-router>
      <w3m-snackbar></w3m-snackbar>
      <w3m-alertbar></w3m-alertbar>
    </wui-card>`}async onOverlayClick(t){t.target===t.currentTarget&&await this.handleClose()}async handleClose(){H.state.view==="UnsupportedChain"||await mr.isSIWXCloseDisabled()?he.shake():he.close()}initializeTheming(){const{themeVariables:t,themeMode:e}=Te.state,r=Be.getColorTheme(e);qm(t,r)}onClose(){this.open=!1,this.classList.remove("open"),this.onScrollUnlock(),Ee.hide(),this.onRemoveKeyboardListener()}onOpen(){this.open=!0,this.classList.add("open"),this.onScrollLock(),this.onAddKeyboardListener()}onScrollLock(){const t=document.createElement("style");t.dataset.w3m=id,t.textContent=`
      body {
        touch-action: none;
        overflow: hidden;
        overscroll-behavior: contain;
      }
      w3m-modal {
        pointer-events: auto;
      }
    `,document.head.appendChild(t)}onScrollUnlock(){const t=document.head.querySelector(`style[data-w3m="${id}"]`);t&&t.remove()}onAddKeyboardListener(){var e;this.abortController=new AbortController;const t=(e=this.shadowRoot)==null?void 0:e.querySelector("wui-card");t==null||t.focus(),window.addEventListener("keydown",r=>{if(r.key==="Escape")this.handleClose();else if(r.key==="Tab"){const{tagName:i}=r.target;i&&!i.includes("W3M-")&&!i.includes("WUI-")&&(t==null||t.focus())}},this.abortController)}onRemoveKeyboardListener(){var t;(t=this.abortController)==null||t.abort(),this.abortController=void 0}async onNewAddress(t){const e=w.state.isSwitchingNamespace,r=M.getPlainAddress(t);!r&&!e?he.close():e&&r&&H.goBack(),await mr.initializeIfEnabled(),this.caipAddress=t,w.setIsSwitchingNamespace(!1)}onNewNetwork(t){var v,g;const e=this.caipNetwork,r=(v=e==null?void 0:e.caipNetworkId)==null?void 0:v.toString(),i=e==null?void 0:e.chainNamespace,n=(g=t==null?void 0:t.caipNetworkId)==null?void 0:g.toString(),s=t==null?void 0:t.chainNamespace,o=r!==n,a=o&&i===s,c=(e==null?void 0:e.name)===Q.UNSUPPORTED_NETWORK_NAME,l=H.state.view==="ConnectingExternal",u=!this.caipAddress,d=H.state.view==="UnsupportedChain",h=he.state.open;let p=!1;h&&!l&&(u?o&&(p=!0):(d||a&&!c)&&(p=!0)),p&&H.state.view!=="SIWXSignMessage"&&H.goBack(),this.caipNetwork=t}prefetch(){this.hasPrefetched||(W.prefetch(),W.fetchWalletsByPage({page:1}),this.hasPrefetched=!0)}};Mt.styles=U3,Mr([E({type:Boolean})],Mt.prototype,"enableEmbedded",void 0),Mr([q()],Mt.prototype,"open",void 0),Mr([q()],Mt.prototype,"caipAddress",void 0),Mr([q()],Mt.prototype,"caipNetwork",void 0),Mr([q()],Mt.prototype,"shake",void 0),Mr([q()],Mt.prototype,"filterByNamespace",void 0),Mt=Mr([V("w3m-modal")],Mt);var M3=Object.freeze({__proto__:null,get W3mModal(){return Mt}});const z3=z`<svg
  width="14"
  height="14"
  viewBox="0 0 14 14"
  fill="none"
  xmlns="http://www.w3.org/2000/svg"
>
  <path
    fill="currentColor"
    fill-rule="evenodd"
    clip-rule="evenodd"
    d="M7.0023 0.875C7.48571 0.875 7.8776 1.26675 7.8776 1.75V6.125H12.2541C12.7375 6.125 13.1294 6.51675 13.1294 7C13.1294 7.48325 12.7375 7.875 12.2541 7.875H7.8776V12.25C7.8776 12.7332 7.48571 13.125 7.0023 13.125C6.51889 13.125 6.12701 12.7332 6.12701 12.25V7.875H1.75054C1.26713 7.875 0.875244 7.48325 0.875244 7C0.875244 6.51675 1.26713 6.125 1.75054 6.125H6.12701V1.75C6.12701 1.26675 6.51889 0.875 7.0023 0.875Z"
    fill="#667dff"
  /></svg
>`;var j3=Object.freeze({__proto__:null,addSvg:z3});const D3=z`<svg fill="none" viewBox="0 0 24 24">
  <path
    style="fill: var(--wui-color-accent-100);"
    d="M10.2 6.6a3.6 3.6 0 1 1-7.2 0 3.6 3.6 0 0 1 7.2 0ZM21 6.6a3.6 3.6 0 1 1-7.2 0 3.6 3.6 0 0 1 7.2 0ZM10.2 17.4a3.6 3.6 0 1 1-7.2 0 3.6 3.6 0 0 1 7.2 0ZM21 17.4a3.6 3.6 0 1 1-7.2 0 3.6 3.6 0 0 1 7.2 0Z"
  />
</svg>`;var H3=Object.freeze({__proto__:null,allWalletsSvg:D3});const W3=z`<svg
  fill="none"
  viewBox="0 0 21 20"
>
  <path
    fill="currentColor"
    fill-rule="evenodd"
    d="M10.5 2.42908C6.31875 2.42908 2.92859 5.81989 2.92859 10.0034C2.92859 14.1869 6.31875 17.5777 10.5 17.5777C14.6813 17.5777 18.0714 14.1869 18.0714 10.0034C18.0714 5.81989 14.6813 2.42908 10.5 2.42908ZM0.928589 10.0034C0.928589 4.71596 5.21355 0.429077 10.5 0.429077C15.7865 0.429077 20.0714 4.71596 20.0714 10.0034C20.0714 15.2908 15.7865 19.5777 10.5 19.5777C5.21355 19.5777 0.928589 15.2908 0.928589 10.0034ZM10.5 5.75003C11.0523 5.75003 11.5 6.19774 11.5 6.75003L11.5 10.8343L12.7929 9.54137C13.1834 9.15085 13.8166 9.15085 14.2071 9.54137C14.5976 9.9319 14.5976 10.5651 14.2071 10.9556L11.2071 13.9556C10.8166 14.3461 10.1834 14.3461 9.79291 13.9556L6.79291 10.9556C6.40239 10.5651 6.40239 9.9319 6.79291 9.54137C7.18343 9.15085 7.8166 9.15085 8.20712 9.54137L9.50002 10.8343L9.50002 6.75003C9.50002 6.19774 9.94773 5.75003 10.5 5.75003Z"
    clip-rule="evenodd"
  /></svg
>`;var F3=Object.freeze({__proto__:null,arrowBottomCircleSvg:W3});const q3=z`
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
</svg>`;var V3=Object.freeze({__proto__:null,appStoreSvg:q3});const Z3=z`<svg fill="none" viewBox="0 0 40 40">
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
</svg>`;var G3=Object.freeze({__proto__:null,appleSvg:Z3});const K3=z`<svg fill="none" viewBox="0 0 14 15">
  <path
    fill="currentColor"
    fill-rule="evenodd"
    d="M7 1.99a1 1 0 0 1 1 1v7.58l2.46-2.46a1 1 0 0 1 1.41 1.42L7.7 13.69a1 1 0 0 1-1.41 0L2.12 9.53A1 1 0 0 1 3.54 8.1L6 10.57V3a1 1 0 0 1 1-1Z"
    clip-rule="evenodd"
  />
</svg>`;var Y3=Object.freeze({__proto__:null,arrowBottomSvg:K3});const J3=z`<svg fill="none" viewBox="0 0 14 15">
  <path
    fill="currentColor"
    fill-rule="evenodd"
    d="M13 7.99a1 1 0 0 1-1 1H4.4l2.46 2.46a1 1 0 1 1-1.41 1.41L1.29 8.7a1 1 0 0 1 0-1.41L5.46 3.1a1 1 0 0 1 1.41 1.42L4.41 6.99H12a1 1 0 0 1 1 1Z"
    clip-rule="evenodd"
  />
</svg>`;var X3=Object.freeze({__proto__:null,arrowLeftSvg:J3});const Q3=z`<svg fill="none" viewBox="0 0 14 15">
  <path
    fill="currentColor"
    fill-rule="evenodd"
    d="M1 7.99a1 1 0 0 1 1-1h7.58L7.12 4.53A1 1 0 1 1 8.54 3.1l4.16 4.17a1 1 0 0 1 0 1.41l-4.16 4.17a1 1 0 1 1-1.42-1.41l2.46-2.46H2a1 1 0 0 1-1-1Z"
    clip-rule="evenodd"
  />
</svg>`;var e5=Object.freeze({__proto__:null,arrowRightSvg:Q3});const t5=z`<svg fill="none" viewBox="0 0 14 15">
  <path
    fill="currentColor"
    fill-rule="evenodd"
    d="M7 13.99a1 1 0 0 1-1-1V5.4L3.54 7.86a1 1 0 0 1-1.42-1.41L6.3 2.28a1 1 0 0 1 1.41 0l4.17 4.17a1 1 0 1 1-1.41 1.41L8 5.4v7.59a1 1 0 0 1-1 1Z"
    clip-rule="evenodd"
  />
</svg>`;var r5=Object.freeze({__proto__:null,arrowTopSvg:t5});const i5=z`<svg
  xmlns="http://www.w3.org/2000/svg"
  width="12"
  height="13"
  viewBox="0 0 12 13"
  fill="none"
>
  <path
    fill-rule="evenodd"
    clip-rule="evenodd"
    d="M5.61391 1.57124C5.85142 1.42873 6.14813 1.42873 6.38564 1.57124L11.0793 4.38749C11.9179 4.89067 11.5612 6.17864 10.5832 6.17864H9.96398V10.0358H10.2854C10.6996 10.0358 11.0354 10.3716 11.0354 10.7858C11.0354 11.2 10.6996 11.5358 10.2854 11.5358H1.71416C1.29995 11.5358 0.964172 11.2 0.964172 10.7858C0.964172 10.3716 1.29995 10.0358 1.71416 10.0358H2.03558L2.03558 6.17864H1.41637C0.438389 6.17864 0.0816547 4.89066 0.920263 4.38749L5.61391 1.57124ZM3.53554 6.17864V10.0358H5.24979V6.17864H3.53554ZM6.74976 6.17864V10.0358H8.46401V6.17864H6.74976ZM8.64913 4.67864H3.35043L5.99978 3.089L8.64913 4.67864Z"
    fill="currentColor"
  /></svg
>`;var n5=Object.freeze({__proto__:null,bankSvg:i5});const s5=z`<svg fill="none" viewBox="0 0 20 20">
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
</svg>`;var o5=Object.freeze({__proto__:null,browserSvg:s5});const a5=z`<svg
  xmlns="http://www.w3.org/2000/svg"
  width="12"
  height="13"
  viewBox="0 0 12 13"
  fill="none"
>
  <path
    fill-rule="evenodd"
    clip-rule="evenodd"
    d="M4.16072 2C4.17367 2 4.18665 2 4.19968 2L7.83857 2C8.36772 1.99998 8.82398 1.99996 9.19518 2.04018C9.5895 2.0829 9.97577 2.17811 10.3221 2.42971C10.5131 2.56849 10.6811 2.73647 10.8198 2.92749C11.0714 3.27379 11.1666 3.66007 11.2094 4.0544C11.2496 4.42561 11.2496 4.88188 11.2495 5.41105V7.58896C11.2496 8.11812 11.2496 8.57439 11.2094 8.94561C11.1666 9.33994 11.0714 9.72621 10.8198 10.0725C10.6811 10.2635 10.5131 10.4315 10.3221 10.5703C9.97577 10.8219 9.5895 10.9171 9.19518 10.9598C8.82398 11 8.36772 11 7.83856 11H4.16073C3.63157 11 3.17531 11 2.80411 10.9598C2.40979 10.9171 2.02352 10.8219 1.67722 10.5703C1.48621 10.4315 1.31824 10.2635 1.17946 10.0725C0.927858 9.72621 0.832652 9.33994 0.78993 8.94561C0.749713 8.5744 0.749733 8.11813 0.749757 7.58896L0.749758 5.45C0.749758 5.43697 0.749758 5.42399 0.749757 5.41104C0.749733 4.88188 0.749713 4.42561 0.78993 4.0544C0.832652 3.66007 0.927858 3.27379 1.17946 2.92749C1.31824 2.73647 1.48621 2.56849 1.67722 2.42971C2.02352 2.17811 2.40979 2.0829 2.80411 2.04018C3.17531 1.99996 3.63157 1.99998 4.16072 2ZM2.96567 3.53145C2.69897 3.56034 2.60687 3.60837 2.55888 3.64324C2.49521 3.6895 2.43922 3.74549 2.39296 3.80916C2.35809 3.85715 2.31007 3.94926 2.28117 4.21597C2.26629 4.35335 2.25844 4.51311 2.25431 4.70832H9.74498C9.74085 4.51311 9.733 4.35335 9.71812 4.21597C9.68922 3.94926 9.6412 3.85715 9.60633 3.80916C9.56007 3.74549 9.50408 3.6895 9.44041 3.64324C9.39242 3.60837 9.30031 3.56034 9.03362 3.53145C8.75288 3.50103 8.37876 3.5 7.79961 3.5H4.19968C3.62053 3.5 3.24641 3.50103 2.96567 3.53145ZM9.74956 6.20832H2.24973V7.55C2.24973 8.12917 2.25076 8.5033 2.28117 8.78404C2.31007 9.05074 2.35809 9.14285 2.39296 9.19084C2.43922 9.25451 2.49521 9.31051 2.55888 9.35677C2.60687 9.39163 2.69897 9.43966 2.96567 9.46856C3.24641 9.49897 3.62053 9.5 4.19968 9.5H7.79961C8.37876 9.5 8.75288 9.49897 9.03362 9.46856C9.30032 9.43966 9.39242 9.39163 9.44041 9.35677C9.50408 9.31051 9.56007 9.25451 9.60633 9.19084C9.6412 9.14285 9.68922 9.05075 9.71812 8.78404C9.74854 8.5033 9.74956 8.12917 9.74956 7.55V6.20832ZM6.74963 8C6.74963 7.58579 7.08541 7.25 7.49961 7.25H8.2496C8.6638 7.25 8.99958 7.58579 8.99958 8C8.99958 8.41422 8.6638 8.75 8.2496 8.75H7.49961C7.08541 8.75 6.74963 8.41422 6.74963 8Z"
    fill="currentColor"
  /></svg
>`;var c5=Object.freeze({__proto__:null,cardSvg:a5});const l5=z`<svg
  width="28"
  height="28"
  viewBox="0 0 28 28" fill="none" xmlns="http://www.w3.org/2000/svg">
  <path
    fill-rule="evenodd"
    clip-rule="evenodd"
    d="M25.5297 4.92733C26.1221 5.4242 26.1996 6.30724 25.7027 6.89966L12.2836 22.8997C12.0316 23.2001 11.6652 23.3811 11.2735 23.3986C10.8817 23.4161 10.5006 23.2686 10.2228 22.9919L2.38218 15.1815C1.83439 14.6358 1.83268 13.7494 2.37835 13.2016C2.92403 12.6538 3.81046 12.6521 4.35825 13.1978L11.1183 19.9317L23.5573 5.10036C24.0542 4.50794 24.9372 4.43047 25.5297 4.92733Z"
    fill="currentColor"/>
</svg>
`;var u5=Object.freeze({__proto__:null,checkmarkSvg:l5});const d5=z`<svg fill="none" viewBox="0 0 14 14">
  <path
    fill="currentColor"
    fill-rule="evenodd"
    d="M12.9576 2.23383C13.3807 2.58873 13.4361 3.21947 13.0812 3.64263L6.37159 11.6426C6.19161 11.8572 5.92989 11.9865 5.65009 11.999C5.3703 12.0115 5.09808 11.9062 4.89965 11.7085L0.979321 7.80331C0.588042 7.41354 0.586817 6.78038 0.976585 6.3891C1.36635 5.99782 1.99952 5.99659 2.3908 6.38636L5.53928 9.52268L11.5488 2.35742C11.9037 1.93426 12.5344 1.87893 12.9576 2.23383Z"
    clip-rule="evenodd"
  />
</svg>`;var h5=Object.freeze({__proto__:null,checkmarkBoldSvg:d5});const p5=z`<svg fill="none" viewBox="0 0 16 16">
  <path
    fill="currentColor"
    fill-rule="evenodd"
    d="M1.46 4.96a1 1 0 0 1 1.41 0L8 10.09l5.13-5.13a1 1 0 1 1 1.41 1.41l-5.83 5.84a1 1 0 0 1-1.42 0L1.46 6.37a1 1 0 0 1 0-1.41Z"
    clip-rule="evenodd"
  />
</svg>`;var f5=Object.freeze({__proto__:null,chevronBottomSvg:p5});const g5=z`<svg fill="none" viewBox="0 0 16 16">
  <path
    fill="currentColor"
    fill-rule="evenodd"
    d="M11.04 1.46a1 1 0 0 1 0 1.41L5.91 8l5.13 5.13a1 1 0 1 1-1.41 1.41L3.79 8.71a1 1 0 0 1 0-1.42l5.84-5.83a1 1 0 0 1 1.41 0Z"
    clip-rule="evenodd"
  />
</svg>`;var w5=Object.freeze({__proto__:null,chevronLeftSvg:g5});const m5=z`<svg fill="none" viewBox="0 0 16 16">
  <path
    fill="currentColor"
    fill-rule="evenodd"
    d="M4.96 14.54a1 1 0 0 1 0-1.41L10.09 8 4.96 2.87a1 1 0 0 1 1.41-1.41l5.84 5.83a1 1 0 0 1 0 1.42l-5.84 5.83a1 1 0 0 1-1.41 0Z"
    clip-rule="evenodd"
  />
</svg>`;var v5=Object.freeze({__proto__:null,chevronRightSvg:m5});const b5=z`<svg fill="none" viewBox="0 0 16 16">
  <path
    fill="currentColor"
    fill-rule="evenodd"
    d="M14.54 11.04a1 1 0 0 1-1.41 0L8 5.92l-5.13 5.12a1 1 0 1 1-1.41-1.41l5.83-5.84a1 1 0 0 1 1.42 0l5.83 5.84a1 1 0 0 1 0 1.41Z"
    clip-rule="evenodd"
  />
</svg>`;var y5=Object.freeze({__proto__:null,chevronTopSvg:b5});const C5=z`<svg width="36" height="36" fill="none">
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
</svg>`;var x5=Object.freeze({__proto__:null,chromeStoreSvg:C5});const E5=z`<svg width="14" height="14" viewBox="0 0 14 14" fill="none">
  <path 
    fill-rule="evenodd" 
    clip-rule="evenodd" 
    d="M7.00235 2C4.24 2 2.00067 4.23858 2.00067 7C2.00067 9.76142 4.24 12 7.00235 12C9.7647 12 12.004 9.76142 12.004 7C12.004 4.23858 9.7647 2 7.00235 2ZM0 7C0 3.13401 3.13506 0 7.00235 0C10.8696 0 14.0047 3.13401 14.0047 7C14.0047 10.866 10.8696 14 7.00235 14C3.13506 14 0 10.866 0 7ZM7.00235 3C7.55482 3 8.00269 3.44771 8.00269 4V6.58579L9.85327 8.43575C10.2439 8.82627 10.2439 9.45944 9.85327 9.84996C9.46262 10.2405 8.82924 10.2405 8.43858 9.84996L6.29501 7.70711C6.10741 7.51957 6.00201 7.26522 6.00201 7V4C6.00201 3.44771 6.44988 3 7.00235 3Z" 
    fill="currentColor"
  />
</svg>`;var A5=Object.freeze({__proto__:null,clockSvg:E5});const k5=z`<svg fill="none" viewBox="0 0 16 16">
  <path
    fill="currentColor"
    fill-rule="evenodd"
    d="M2.54 2.54a1 1 0 0 1 1.42 0L8 6.6l4.04-4.05a1 1 0 1 1 1.42 1.42L9.4 8l4.05 4.04a1 1 0 0 1-1.42 1.42L8 9.4l-4.04 4.05a1 1 0 0 1-1.42-1.42L6.6 8 2.54 3.96a1 1 0 0 1 0-1.42Z"
    clip-rule="evenodd"
  />
</svg>`;var I5=Object.freeze({__proto__:null,closeSvg:k5});const N5=z`<svg fill="none" viewBox="0 0 16 16">
  <path
    fill="currentColor"
    fill-rule="evenodd"
    d="M8 2a6 6 0 1 0 0 12A6 6 0 0 0 8 2ZM0 8a8 8 0 1 1 16 0A8 8 0 0 1 0 8Zm10.66-2.65a1 1 0 0 1 .23 1.06L9.83 9.24a1 1 0 0 1-.59.58l-2.83 1.06A1 1 0 0 1 5.13 9.6l1.06-2.82a1 1 0 0 1 .58-.59L9.6 5.12a1 1 0 0 1 1.06.23ZM7.9 7.89l-.13.35.35-.13.12-.35-.34.13Z"
    clip-rule="evenodd"
  />
</svg>`;var S5=Object.freeze({__proto__:null,compassSvg:N5});const P5=z`<svg fill="none" viewBox="0 0 20 20">
  <path
    fill="currentColor"
    fill-rule="evenodd"
    d="M10 3a7 7 0 0 0-6.85 8.44l8.29-8.3C10.97 3.06 10.49 3 10 3Zm3.49.93-9.56 9.56c.32.55.71 1.06 1.16 1.5L15 5.1a7.03 7.03 0 0 0-1.5-1.16Zm2.7 2.8-9.46 9.46a7 7 0 0 0 9.46-9.46ZM1.99 5.9A9 9 0 1 1 18 14.09 9 9 0 0 1 1.98 5.91Z"
    clip-rule="evenodd"
  />
</svg>`;var _5=Object.freeze({__proto__:null,coinPlaceholderSvg:P5});const T5=z`<svg
  xmlns="http://www.w3.org/2000/svg"
  width="16"
  height="16"
  viewBox="0 0 16 16"
  fill="none"
>
  <path
    fill="currentColor"
    fill-rule="evenodd"
    clip-rule="evenodd"
    d="M9.21498 1.28565H10.5944C11.1458 1.28562 11.6246 1.2856 12.0182 1.32093C12.4353 1.35836 12.853 1.44155 13.2486 1.66724C13.7005 1.92498 14.0749 2.29935 14.3326 2.75122C14.5583 3.14689 14.6415 3.56456 14.6789 3.9817C14.7143 4.37531 14.7142 4.85403 14.7142 5.40545V6.78489C14.7142 7.33631 14.7143 7.81503 14.6789 8.20865C14.6415 8.62578 14.5583 9.04345 14.3326 9.43912C14.0749 9.89099 13.7005 10.2654 13.2486 10.5231C12.853 10.7488 12.4353 10.832 12.0182 10.8694C11.7003 10.8979 11.3269 10.9034 10.9045 10.9045C10.9034 11.3269 10.8979 11.7003 10.8694 12.0182C10.832 12.4353 10.7488 12.853 10.5231 13.2486C10.2654 13.7005 9.89099 14.0749 9.43912 14.3326C9.04345 14.5583 8.62578 14.6415 8.20865 14.6789C7.81503 14.7143 7.33631 14.7142 6.78489 14.7142H5.40545C4.85403 14.7142 4.37531 14.7143 3.9817 14.6789C3.56456 14.6415 3.14689 14.5583 2.75122 14.3326C2.29935 14.0749 1.92498 13.7005 1.66724 13.2486C1.44155 12.853 1.35836 12.4353 1.32093 12.0182C1.2856 11.6246 1.28562 11.1458 1.28565 10.5944V9.21498C1.28562 8.66356 1.2856 8.18484 1.32093 7.79122C1.35836 7.37409 1.44155 6.95642 1.66724 6.56074C1.92498 6.10887 2.29935 5.73451 2.75122 5.47677C3.14689 5.25108 3.56456 5.16789 3.9817 5.13045C4.2996 5.10192 4.67301 5.09645 5.09541 5.09541C5.09645 4.67302 5.10192 4.2996 5.13045 3.9817C5.16789 3.56456 5.25108 3.14689 5.47676 2.75122C5.73451 2.29935 6.10887 1.92498 6.56074 1.66724C6.95642 1.44155 7.37409 1.35836 7.79122 1.32093C8.18484 1.2856 8.66356 1.28562 9.21498 1.28565ZM5.09541 7.09552C4.68397 7.09667 4.39263 7.10161 4.16046 7.12245C3.88053 7.14757 3.78516 7.18949 3.74214 7.21403C3.60139 7.29431 3.48478 7.41091 3.4045 7.55166C3.37997 7.59468 3.33804 7.69005 3.31292 7.96999C3.28659 8.26345 3.28565 8.65147 3.28565 9.25708V10.5523C3.28565 11.1579 3.28659 11.5459 3.31292 11.8394C3.33804 12.1193 3.37997 12.2147 3.4045 12.2577C3.48478 12.3985 3.60139 12.5151 3.74214 12.5954C3.78516 12.6199 3.88053 12.6618 4.16046 12.6869C4.45393 12.7133 4.84195 12.7142 5.44755 12.7142H6.74279C7.3484 12.7142 7.73641 12.7133 8.02988 12.6869C8.30981 12.6618 8.40518 12.6199 8.44821 12.5954C8.58895 12.5151 8.70556 12.3985 8.78584 12.2577C8.81038 12.2147 8.8523 12.1193 8.87742 11.8394C8.89825 11.6072 8.90319 11.3159 8.90435 10.9045C8.48219 10.9034 8.10898 10.8979 7.79122 10.8694C7.37409 10.832 6.95641 10.7488 6.56074 10.5231C6.10887 10.2654 5.73451 9.89099 5.47676 9.43912C5.25108 9.04345 5.16789 8.62578 5.13045 8.20865C5.10194 7.89089 5.09645 7.51767 5.09541 7.09552ZM7.96999 3.31292C7.69005 3.33804 7.59468 3.37997 7.55166 3.4045C7.41091 3.48478 7.29431 3.60139 7.21403 3.74214C7.18949 3.78516 7.14757 3.88053 7.12245 4.16046C7.09611 4.45393 7.09517 4.84195 7.09517 5.44755V6.74279C7.09517 7.3484 7.09611 7.73641 7.12245 8.02988C7.14757 8.30981 7.18949 8.40518 7.21403 8.4482C7.29431 8.58895 7.41091 8.70556 7.55166 8.78584C7.59468 8.81038 7.69005 8.8523 7.96999 8.87742C8.26345 8.90376 8.65147 8.9047 9.25708 8.9047H10.5523C11.1579 8.9047 11.5459 8.90376 11.8394 8.87742C12.1193 8.8523 12.2147 8.81038 12.2577 8.78584C12.3985 8.70556 12.5151 8.58895 12.5954 8.4482C12.6199 8.40518 12.6618 8.30981 12.6869 8.02988C12.7133 7.73641 12.7142 7.3484 12.7142 6.74279V5.44755C12.7142 4.84195 12.7133 4.45393 12.6869 4.16046C12.6618 3.88053 12.6199 3.78516 12.5954 3.74214C12.5151 3.60139 12.3985 3.48478 12.2577 3.4045C12.2147 3.37997 12.1193 3.33804 11.8394 3.31292C11.5459 3.28659 11.1579 3.28565 10.5523 3.28565H9.25708C8.65147 3.28565 8.26345 3.28659 7.96999 3.31292Z"
    fill="#788181"
  /></svg
>`;var O5=Object.freeze({__proto__:null,copySvg:T5});const $5=z` <svg fill="none" viewBox="0 0 13 4">
  <path fill="currentColor" d="M.5 0h12L8.9 3.13a3.76 3.76 0 0 1-4.8 0L.5 0Z" />
</svg>`;var R5=Object.freeze({__proto__:null,cursorSvg:$5});const L5=z`<svg fill="none" viewBox="0 0 14 6">
  <path style="fill: var(--wui-color-bg-150);" d="M0 1h14L9.21 5.12a3.31 3.31 0 0 1-4.49 0L0 1Z" />
  <path
    style="stroke: var(--wui-color-inverse-100);"
    stroke-opacity=".05"
    d="M1.33 1.5h11.32L8.88 4.75l-.01.01a2.81 2.81 0 0 1-3.8 0l-.02-.01L1.33 1.5Z"
  />
  <path
    style="fill: var(--wui-color-bg-150);"
    d="M1.25.71h11.5L9.21 3.88a3.31 3.31 0 0 1-4.49 0L1.25.71Z"
  />
</svg> `;var B5=Object.freeze({__proto__:null,cursorTransparentSvg:L5});const U5=z`<svg fill="none" viewBox="0 0 20 20">
  <path
    fill="currentColor"
    fill-rule="evenodd"
    d="M13.66 2H6.34c-1.07 0-1.96 0-2.68.08-.74.08-1.42.25-2.01.68a4 4 0 0 0-.89.89c-.43.6-.6 1.27-.68 2.01C0 6.38 0 7.26 0 8.34v.89c0 1.07 0 1.96.08 2.68.08.74.25 1.42.68 2.01a4 4 0 0 0 .89.89c.6.43 1.27.6 2.01.68a27 27 0 0 0 2.68.08h7.32a27 27 0 0 0 2.68-.08 4.03 4.03 0 0 0 2.01-.68 4 4 0 0 0 .89-.89c.43-.6.6-1.27.68-2.01.08-.72.08-1.6.08-2.68v-.89c0-1.07 0-1.96-.08-2.68a4.04 4.04 0 0 0-.68-2.01 4 4 0 0 0-.89-.89c-.6-.43-1.27-.6-2.01-.68C15.62 2 14.74 2 13.66 2ZM2.82 4.38c.2-.14.48-.25 1.06-.31C4.48 4 5.25 4 6.4 4h7.2c1.15 0 1.93 0 2.52.07.58.06.86.17 1.06.31a2 2 0 0 1 .44.44c.14.2.25.48.31 1.06.07.6.07 1.37.07 2.52v.77c0 1.15 0 1.93-.07 2.52-.06.58-.17.86-.31 1.06a2 2 0 0 1-.44.44c-.2.14-.48.25-1.06.32-.6.06-1.37.06-2.52.06H6.4c-1.15 0-1.93 0-2.52-.06-.58-.07-.86-.18-1.06-.32a2 2 0 0 1-.44-.44c-.14-.2-.25-.48-.31-1.06C2 11.1 2 10.32 2 9.17V8.4c0-1.15 0-1.93.07-2.52.06-.58.17-.86.31-1.06a2 2 0 0 1 .44-.44Z"
    clip-rule="evenodd"
  />
  <path fill="currentColor" d="M6.14 17.57a1 1 0 1 0 0 2h7.72a1 1 0 1 0 0-2H6.14Z" />
</svg>`;var M5=Object.freeze({__proto__:null,desktopSvg:U5});const z5=z`<svg fill="none" viewBox="0 0 16 16">
  <path
    fill="currentColor"
    fill-rule="evenodd"
    d="M6.07 1h.57a1 1 0 0 1 0 2h-.52c-.98 0-1.64 0-2.14.06-.48.05-.7.14-.84.24-.13.1-.25.22-.34.35-.1.14-.2.35-.25.83-.05.5-.05 1.16-.05 2.15v2.74c0 .99 0 1.65.05 2.15.05.48.14.7.25.83.1.14.2.25.34.35.14.1.36.2.84.25.5.05 1.16.05 2.14.05h.52a1 1 0 0 1 0 2h-.57c-.92 0-1.69 0-2.3-.07a3.6 3.6 0 0 1-1.8-.61c-.3-.22-.57-.49-.8-.8a3.6 3.6 0 0 1-.6-1.79C.5 11.11.5 10.35.5 9.43V6.58c0-.92 0-1.7.06-2.31a3.6 3.6 0 0 1 .62-1.8c.22-.3.48-.57.79-.79a3.6 3.6 0 0 1 1.8-.61C4.37 1 5.14 1 6.06 1ZM9.5 3a1 1 0 0 1 1.42 0l4.28 4.3a1 1 0 0 1 0 1.4L10.93 13a1 1 0 0 1-1.42-1.42L12.1 9H6.8a1 1 0 1 1 0-2h5.3L9.51 4.42a1 1 0 0 1 0-1.41Z"
    clip-rule="evenodd"
  />
</svg>`;var j5=Object.freeze({__proto__:null,disconnectSvg:z5});const D5=z`<svg fill="none" viewBox="0 0 40 40">
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
</svg>`;var H5=Object.freeze({__proto__:null,discordSvg:D5});const W5=z`<svg fill="none" viewBox="0 0 16 16">
  <path
    fill="currentColor"
    d="M4.25 7a.63.63 0 0 0-.63.63v3.97c0 .28-.2.51-.47.54l-.75.07a.93.93 0 0 1-.9-.47A7.51 7.51 0 0 1 5.54.92a7.5 7.5 0 0 1 9.54 4.62c.12.35.06.72-.16 1-.74.97-1.68 1.78-2.6 2.44V4.44a.64.64 0 0 0-.63-.64h-1.06c-.35 0-.63.3-.63.64v5.5c0 .23-.12.42-.32.5l-.52.23V6.05c0-.36-.3-.64-.64-.64H7.45c-.35 0-.64.3-.64.64v4.97c0 .25-.17.46-.4.52a5.8 5.8 0 0 0-.45.11v-4c0-.36-.3-.65-.64-.65H4.25ZM14.07 12.4A7.49 7.49 0 0 1 3.6 14.08c4.09-.58 9.14-2.5 11.87-6.6v.03a7.56 7.56 0 0 1-1.41 4.91Z"
  />
</svg>`;var F5=Object.freeze({__proto__:null,etherscanSvg:W5});const q5=z`<svg fill="none" viewBox="0 0 14 15">
  <path
    fill="currentColor"
    fill-rule="evenodd"
    d="M6.71 2.99a.57.57 0 0 0-.57.57 1 1 0 0 1-1 1c-.58 0-.96 0-1.24.03-.27.03-.37.07-.42.1a.97.97 0 0 0-.36.35c-.04.08-.09.21-.11.67a2.57 2.57 0 0 1 0 5.13c.02.45.07.6.11.66.09.15.21.28.36.36.07.04.21.1.67.12a2.57 2.57 0 0 1 5.12 0c.46-.03.6-.08.67-.12a.97.97 0 0 0 .36-.36c.03-.04.07-.14.1-.41.02-.29.03-.66.03-1.24a1 1 0 0 1 1-1 .57.57 0 0 0 0-1.15 1 1 0 0 1-1-1c0-.58 0-.95-.03-1.24a1.04 1.04 0 0 0-.1-.42.97.97 0 0 0-.36-.36 1.04 1.04 0 0 0-.42-.1c-.28-.02-.65-.02-1.24-.02a1 1 0 0 1-1-1 .57.57 0 0 0-.57-.57ZM5.15 13.98a1 1 0 0 0 .99-1v-.78a.57.57 0 0 1 1.14 0v.78a1 1 0 0 0 .99 1H8.36a66.26 66.26 0 0 0 .73 0 3.78 3.78 0 0 0 1.84-.38c.46-.26.85-.64 1.1-1.1.23-.4.32-.8.36-1.22.02-.2.03-.4.03-.63a2.57 2.57 0 0 0 0-4.75c0-.23-.01-.44-.03-.63a2.96 2.96 0 0 0-.35-1.22 2.97 2.97 0 0 0-1.1-1.1c-.4-.22-.8-.31-1.22-.35a8.7 8.7 0 0 0-.64-.04 2.57 2.57 0 0 0-4.74 0c-.23 0-.44.02-.63.04-.42.04-.83.13-1.22.35-.46.26-.84.64-1.1 1.1-.33.57-.37 1.2-.39 1.84a21.39 21.39 0 0 0 0 .72v.1a1 1 0 0 0 1 .99h.78a.57.57 0 0 1 0 1.15h-.77a1 1 0 0 0-1 .98v.1a63.87 63.87 0 0 0 0 .73c0 .64.05 1.27.38 1.83.26.47.64.85 1.1 1.11.56.32 1.2.37 1.84.38a20.93 20.93 0 0 0 .72 0h.1Z"
    clip-rule="evenodd"
  />
</svg>`;var V5=Object.freeze({__proto__:null,extensionSvg:q5});const Z5=z`<svg fill="none" viewBox="0 0 14 15">
  <path
    fill="currentColor"
    fill-rule="evenodd"
    d="M3.74 3.99a1 1 0 0 1 1-1H11a1 1 0 0 1 1 1v6.26a1 1 0 0 1-2 0V6.4l-6.3 6.3a1 1 0 0 1-1.4-1.42l6.29-6.3H4.74a1 1 0 0 1-1-1Z"
    clip-rule="evenodd"
  />
</svg>`;var G5=Object.freeze({__proto__:null,externalLinkSvg:Z5});const K5=z`<svg fill="none" viewBox="0 0 40 40">
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
</svg>`;var Y5=Object.freeze({__proto__:null,facebookSvg:K5});const J5=z`<svg style="border-radius: 9999px; overflow: hidden;"  fill="none" viewBox="0 0 1000 1000">
  <rect width="1000" height="1000" rx="9999" ry="9999" fill="#855DCD"/>
  <path fill="#855DCD" d="M0 0h1000v1000H0V0Z" />
  <path
    fill="#fff"
    d="M320 248h354v504h-51.96V521.13h-.5c-5.76-63.8-59.31-113.81-124.54-113.81s-118.78 50-124.53 113.81h-.5V752H320V248Z"
  />
  <path
    fill="#fff"
    d="m225 320 21.16 71.46h17.9v289.09a16.29 16.29 0 0 0-16.28 16.24v19.49h-3.25a16.3 16.3 0 0 0-16.28 16.24V752h182.26v-19.48a16.22 16.22 0 0 0-16.28-16.24h-3.25v-19.5a16.22 16.22 0 0 0-16.28-16.23h-19.52V320H225Zm400.3 360.55a16.3 16.3 0 0 0-15.04 10.02 16.2 16.2 0 0 0-1.24 6.22v19.49h-3.25a16.29 16.29 0 0 0-16.27 16.24V752h182.24v-19.48a16.23 16.23 0 0 0-16.27-16.24h-3.25v-19.5a16.2 16.2 0 0 0-10.04-15 16.3 16.3 0 0 0-6.23-1.23v-289.1h17.9L775 320H644.82v360.55H625.3Z"
  />
</svg>`;var X5=Object.freeze({__proto__:null,farcasterSvg:J5});const Q5=z`<svg fill="none" viewBox="0 0 16 16">
  <path
    fill="currentColor"
    fill-rule="evenodd"
    d="M0 3a1 1 0 0 1 1-1h14a1 1 0 1 1 0 2H1a1 1 0 0 1-1-1Zm2.63 5.25a1 1 0 0 1 1-1h8.75a1 1 0 1 1 0 2H3.63a1 1 0 0 1-1-1Zm2.62 5.25a1 1 0 0 1 1-1h3.5a1 1 0 0 1 0 2h-3.5a1 1 0 0 1-1-1Z"
    clip-rule="evenodd"
  />
</svg>`;var eb=Object.freeze({__proto__:null,filtersSvg:Q5});const tb=z`<svg fill="none" viewBox="0 0 40 40">
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
</svg>`;var rb=Object.freeze({__proto__:null,githubSvg:tb});const ib=z`<svg fill="none" viewBox="0 0 40 40">
  <path
    fill="#4285F4"
    d="M32.74 20.3c0-.93-.08-1.81-.24-2.66H20.26v5.03h7a6 6 0 0 1-2.62 3.91v3.28h4.22c2.46-2.27 3.88-5.6 3.88-9.56Z"
  />
  <path
    fill="#34A853"
    d="M20.26 33a12.4 12.4 0 0 0 8.6-3.14l-4.22-3.28a7.74 7.74 0 0 1-4.38 1.26 7.76 7.76 0 0 1-7.28-5.36H8.65v3.36A12.99 12.99 0 0 0 20.26 33Z"
  />
  <path
    fill="#FBBC05"
    d="M12.98 22.47a7.79 7.79 0 0 1 0-4.94v-3.36H8.65a12.84 12.84 0 0 0 0 11.66l3.37-2.63.96-.73Z"
  />
  <path
    fill="#EA4335"
    d="M20.26 12.18a7.1 7.1 0 0 1 4.98 1.93l3.72-3.72A12.47 12.47 0 0 0 20.26 7c-5.08 0-9.47 2.92-11.6 7.17l4.32 3.36a7.76 7.76 0 0 1 7.28-5.35Z"
  />
</svg>`;var nb=Object.freeze({__proto__:null,googleSvg:ib});const sb=z`<svg fill="none" viewBox="0 0 16 16">
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
</svg>`;var ob=Object.freeze({__proto__:null,helpCircleSvg:sb});const ab=z`<svg width="14" height="14" viewBox="0 0 14 14" fill="none">
  <path d="M4.98926 3.73932C4.2989 3.73932 3.73926 4.29896 3.73926 4.98932C3.73926 5.67968 4.2989 6.23932 4.98926 6.23932C5.67962 6.23932 6.23926 5.67968 6.23926 4.98932C6.23926 4.29896 5.67962 3.73932 4.98926 3.73932Z" fill="currentColor"/>
  <path fill-rule="evenodd" clip-rule="evenodd" d="M7.60497 0.500001H6.39504C5.41068 0.499977 4.59185 0.499958 3.93178 0.571471C3.24075 0.64634 2.60613 0.809093 2.04581 1.21619C1.72745 1.44749 1.44749 1.72745 1.21619 2.04581C0.809093 2.60613 0.64634 3.24075 0.571471 3.93178C0.499958 4.59185 0.499977 5.41065 0.500001 6.39501V7.57815C0.499998 8.37476 0.499995 9.05726 0.534869 9.62725C0.570123 10.2034 0.644114 10.7419 0.828442 11.2302C0.925651 11.4877 1.05235 11.7287 1.21619 11.9542C1.44749 12.2726 1.72745 12.5525 2.04581 12.7838C2.60613 13.1909 3.24075 13.3537 3.93178 13.4285C4.59185 13.5001 5.41066 13.5 6.39503 13.5H7.60496C8.58933 13.5 9.40815 13.5001 10.0682 13.4285C10.7593 13.3537 11.3939 13.1909 11.9542 12.7838C12.2726 12.5525 12.5525 12.2726 12.7838 11.9542C13.1909 11.3939 13.3537 10.7593 13.4285 10.0682C13.5 9.40816 13.5 8.58935 13.5 7.60497V6.39505C13.5 5.41068 13.5 4.59185 13.4285 3.93178C13.3537 3.24075 13.1909 2.60613 12.7838 2.04581C12.5525 1.72745 12.2726 1.44749 11.9542 1.21619C11.3939 0.809093 10.7593 0.64634 10.0682 0.571471C9.40816 0.499958 8.58933 0.499977 7.60497 0.500001ZM3.22138 2.83422C3.38394 2.71612 3.62634 2.61627 4.14721 2.55984C4.68679 2.50138 5.39655 2.5 6.45 2.5H7.55C8.60345 2.5 9.31322 2.50138 9.8528 2.55984C10.3737 2.61627 10.6161 2.71612 10.7786 2.83422C10.9272 2.94216 11.0578 3.07281 11.1658 3.22138C11.2839 3.38394 11.3837 3.62634 11.4402 4.14721C11.4986 4.68679 11.5 5.39655 11.5 6.45V6.49703C10.9674 6.11617 10.386 5.84936 9.74213 5.81948C8.40536 5.75745 7.3556 6.73051 6.40509 7.84229C6.33236 7.92737 6.27406 7.98735 6.22971 8.02911L6.1919 8.00514L6.17483 7.99427C6.09523 7.94353 5.98115 7.87083 5.85596 7.80302C5.56887 7.64752 5.18012 7.4921 4.68105 7.4921C4.66697 7.4921 4.6529 7.49239 4.63884 7.49299C3.79163 7.52878 3.09922 8.1106 2.62901 8.55472C2.58751 8.59392 2.54594 8.6339 2.50435 8.6745C2.50011 8.34653 2.5 7.97569 2.5 7.55V6.45C2.5 5.39655 2.50138 4.68679 2.55984 4.14721C2.61627 3.62634 2.71612 3.38394 2.83422 3.22138C2.94216 3.07281 3.07281 2.94216 3.22138 2.83422ZM10.3703 8.14825C10.6798 8.37526 11.043 8.71839 11.4832 9.20889C11.4744 9.44992 11.4608 9.662 11.4402 9.8528C11.3837 10.3737 11.2839 10.6161 11.1658 10.7786C11.0578 10.9272 10.9272 11.0578 10.7786 11.1658C10.6161 11.2839 10.3737 11.3837 9.8528 11.4402C9.31322 11.4986 8.60345 11.5 7.55 11.5H6.45C5.39655 11.5 4.68679 11.4986 4.14721 11.4402C3.62634 11.3837 3.38394 11.2839 3.22138 11.1658C3.15484 11.1174 3.0919 11.0645 3.03298 11.0075C3.10126 10.9356 3.16806 10.8649 3.23317 10.7959L3.29772 10.7276C3.55763 10.4525 3.78639 10.2126 4.00232 10.0087C4.22016 9.80294 4.39412 9.66364 4.53524 9.57742C4.63352 9.51738 4.69022 9.49897 4.71275 9.49345C4.76387 9.49804 4.81803 9.51537 4.90343 9.56162C4.96409 9.59447 5.02355 9.63225 5.11802 9.69238L5.12363 9.69595C5.20522 9.74789 5.32771 9.82587 5.46078 9.89278C5.76529 10.0459 6.21427 10.186 6.74977 10.0158C7.21485 9.86796 7.59367 9.52979 7.92525 9.14195C8.91377 7.98571 9.38267 7.80495 9.64941 7.81733C9.7858 7.82366 10.0101 7.884 10.3703 8.14825Z" fill="currentColor"/>
</svg>`;var cb=Object.freeze({__proto__:null,imageSvg:ab});const lb=z`<svg
 xmlns="http://www.w3.org/2000/svg"
 width="28"
 height="28"
 viewBox="0 0 28 28"
 fill="none">
  <path
    fill="#949E9E"
    fill-rule="evenodd"
    d="M7.974 2.975h12.052c1.248 0 2.296 0 3.143.092.89.096 1.723.307 2.461.844a4.9 4.9 0 0 1 1.084 1.084c.537.738.748 1.57.844 2.461.092.847.092 1.895.092 3.143v6.802c0 1.248 0 2.296-.092 3.143-.096.89-.307 1.723-.844 2.461a4.9 4.9 0 0 1-1.084 1.084c-.738.537-1.57.748-2.461.844-.847.092-1.895.092-3.143.092H7.974c-1.247 0-2.296 0-3.143-.092-.89-.096-1.723-.307-2.461-.844a4.901 4.901 0 0 1-1.084-1.084c-.537-.738-.748-1.571-.844-2.461C.35 19.697.35 18.649.35 17.4v-6.802c0-1.248 0-2.296.092-3.143.096-.89.307-1.723.844-2.461A4.9 4.9 0 0 1 2.37 3.91c.738-.537 1.571-.748 2.461-.844.847-.092 1.895-.092 3.143-.092ZM5.133 5.85c-.652.071-.936.194-1.117.326a2.1 2.1 0 0 0-.465.465c-.132.181-.255.465-.325 1.117-.074.678-.076 1.573-.076 2.917v6.65c0 1.344.002 2.239.076 2.917.07.652.193.936.325 1.117a2.1 2.1 0 0 0 .465.465c.181.132.465.255 1.117.326.678.073 1.574.075 2.917.075h11.9c1.344 0 2.239-.002 2.917-.075.652-.071.936-.194 1.117-.326.179-.13.335-.286.465-.465.132-.181.255-.465.326-1.117.073-.678.075-1.573.075-2.917v-6.65c0-1.344-.002-2.239-.075-2.917-.071-.652-.194-.936-.326-1.117a2.1 2.1 0 0 0-.465-.465c-.181-.132-.465-.255-1.117-.326-.678-.073-1.573-.075-2.917-.075H8.05c-1.343 0-2.239.002-2.917.075Zm.467 7.275a3.15 3.15 0 1 1 6.3 0 3.15 3.15 0 0 1-6.3 0Zm8.75-1.75a1.4 1.4 0 0 1 1.4-1.4h3.5a1.4 1.4 0 0 1 0 2.8h-3.5a1.4 1.4 0 0 1-1.4-1.4Zm0 5.25a1.4 1.4 0 0 1 1.4-1.4H21a1.4 1.4 0 1 1 0 2.8h-5.25a1.4 1.4 0 0 1-1.4-1.4Z"
    clip-rule="evenodd"/>
</svg>`;var ub=Object.freeze({__proto__:null,idSvg:lb});const db=z`<svg fill="none" viewBox="0 0 14 15">
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
</svg>`;var hb=Object.freeze({__proto__:null,infoCircleSvg:db});const pb=z`<svg width="10" height="10" viewBox="0 0 10 10" fill="none" xmlns="http://www.w3.org/2000/svg">
<path fill-rule="evenodd" clip-rule="evenodd" d="M5.00177 1.78569C3.8179 1.78569 2.85819 2.74508 2.85819 3.92855C2.85819 4.52287 3.09928 5.05956 3.49077 5.4485L3.5005 5.45817C3.64381 5.60054 3.76515 5.72108 3.85631 5.81845C3.93747 5.90512 4.05255 6.03218 4.12889 6.1805C4.16999 6.26034 4.19 6.30843 4.21768 6.39385C4.22145 6.40546 4.22499 6.41703 4.22833 6.42855H5.77521C5.77854 6.41703 5.78208 6.40547 5.78585 6.39385C5.81353 6.30843 5.83354 6.26034 5.87464 6.1805C5.95098 6.03218 6.06606 5.90512 6.14722 5.81845C6.23839 5.72108 6.35973 5.60053 6.50304 5.45816L6.51276 5.4485C6.90425 5.05956 7.14534 4.52287 7.14534 3.92855C7.14534 2.74508 6.18563 1.78569 5.00177 1.78569ZM5.71629 7.85712H4.28724C4.28724 8.21403 4.28876 8.40985 4.30703 8.54571C4.30727 8.54748 4.30751 8.54921 4.30774 8.55091C4.30944 8.55115 4.31118 8.55138 4.31295 8.55162C4.44884 8.56989 4.64474 8.5714 5.00177 8.5714C5.3588 8.5714 5.55469 8.56989 5.69059 8.55162C5.69236 8.55138 5.69409 8.55115 5.69579 8.55091C5.69603 8.54921 5.69627 8.54748 5.6965 8.54571C5.71477 8.40985 5.71629 8.21403 5.71629 7.85712ZM2.85819 7.14283C2.85819 6.9948 2.85796 6.91114 2.8548 6.85032C2.85461 6.84656 2.85441 6.84309 2.85421 6.83988C2.84393 6.8282 2.83047 6.81334 2.81301 6.79469C2.74172 6.71856 2.63908 6.61643 2.48342 6.46178C1.83307 5.81566 1.42914 4.91859 1.42914 3.92855C1.42914 1.9561 3.02866 0.357117 5.00177 0.357117C6.97487 0.357117 8.57439 1.9561 8.57439 3.92855C8.57439 4.91859 8.17047 5.81566 7.52012 6.46178C7.36445 6.61643 7.26182 6.71856 7.19053 6.79469C7.17306 6.81334 7.1596 6.8282 7.14932 6.83988C7.14912 6.84309 7.14892 6.84656 7.14873 6.85032C7.14557 6.91114 7.14534 6.9948 7.14534 7.14283V7.85712C7.14534 7.87009 7.14535 7.88304 7.14535 7.89598C7.14541 8.19889 7.14547 8.49326 7.11281 8.73606C7.076 9.00978 6.98631 9.32212 6.72678 9.58156C6.46726 9.841 6.15481 9.93065 5.881 9.96745C5.63813 10.0001 5.34365 10 5.04064 9.99998C5.0277 9.99998 5.01474 9.99998 5.00177 9.99998C4.98879 9.99998 4.97583 9.99998 4.96289 9.99998C4.65988 10 4.36541 10.0001 4.12253 9.96745C3.84872 9.93065 3.53628 9.841 3.27675 9.58156C3.01722 9.32212 2.92753 9.00978 2.89072 8.73606C2.85807 8.49326 2.85812 8.19889 2.85818 7.89598C2.85819 7.88304 2.85819 7.87008 2.85819 7.85712V7.14283ZM7.1243 6.86977C7.12366 6.87069 7.1233 6.87116 7.12327 6.87119C7.12323 6.87123 7.12356 6.87076 7.1243 6.86977ZM2.88027 6.8712C2.88025 6.87119 2.87988 6.8707 2.87921 6.86975C2.87995 6.87072 2.88028 6.8712 2.88027 6.8712Z" fill="#949E9E"/>
</svg>`;var fb=Object.freeze({__proto__:null,lightbulbSvg:pb});const gb=z`<svg fill="none" viewBox="0 0 16 16">
  <path
    fill="currentColor"
    fill-rule="evenodd"
    d="M4.83 1.34h6.34c.68 0 1.26 0 1.73.04.5.05.97.15 1.42.4.52.3.95.72 1.24 1.24.26.45.35.92.4 1.42.04.47.04 1.05.04 1.73v3.71c0 .69 0 1.26-.04 1.74-.05.5-.14.97-.4 1.41-.3.52-.72.95-1.24 1.25-.45.25-.92.35-1.42.4-.47.03-1.05.03-1.73.03H4.83c-.68 0-1.26 0-1.73-.04-.5-.04-.97-.14-1.42-.4-.52-.29-.95-.72-1.24-1.24a3.39 3.39 0 0 1-.4-1.41A20.9 20.9 0 0 1 0 9.88v-3.7c0-.7 0-1.27.04-1.74.05-.5.14-.97.4-1.42.3-.52.72-.95 1.24-1.24.45-.25.92-.35 1.42-.4.47-.04 1.05-.04 1.73-.04ZM3.28 3.38c-.36.03-.51.08-.6.14-.21.11-.39.29-.5.5a.8.8 0 0 0-.08.19l5.16 3.44c.45.3 1.03.3 1.48 0L13.9 4.2a.79.79 0 0 0-.08-.2c-.11-.2-.29-.38-.5-.5-.09-.05-.24-.1-.6-.13-.37-.04-.86-.04-1.6-.04H4.88c-.73 0-1.22 0-1.6.04ZM14 6.54 9.85 9.31a3.33 3.33 0 0 1-3.7 0L2 6.54v3.3c0 .74 0 1.22.03 1.6.04.36.1.5.15.6.11.2.29.38.5.5.09.05.24.1.6.14.37.03.86.03 1.6.03h6.25c.73 0 1.22 0 1.6-.03.35-.03.5-.09.6-.14.2-.12.38-.3.5-.5.05-.1.1-.24.14-.6.03-.38.03-.86.03-1.6v-3.3Z"
    clip-rule="evenodd"
  />
</svg>`;var wb=Object.freeze({__proto__:null,mailSvg:gb});const mb=z`<svg fill="none" viewBox="0 0 20 20">
  <path fill="currentColor" d="M10.81 5.81a2 2 0 1 1-4 0 2 2 0 0 1 4 0Z" />
  <path
    fill="currentColor"
    fill-rule="evenodd"
    d="M3 4.75A4.75 4.75 0 0 1 7.75 0h4.5A4.75 4.75 0 0 1 17 4.75v10.5A4.75 4.75 0 0 1 12.25 20h-4.5A4.75 4.75 0 0 1 3 15.25V4.75ZM7.75 2A2.75 2.75 0 0 0 5 4.75v10.5A2.75 2.75 0 0 0 7.75 18h4.5A2.75 2.75 0 0 0 15 15.25V4.75A2.75 2.75 0 0 0 12.25 2h-4.5Z"
    clip-rule="evenodd"
  />
</svg>`;var vb=Object.freeze({__proto__:null,mobileSvg:mb});const bb=z`<svg fill="none" viewBox="0 0 41 40">
  <path
    style="fill: var(--wui-color-fg-100);"
    fill-opacity=".05"
    d="M.6 20a20 20 0 1 1 40 0 20 20 0 0 1-40 0Z"
  />
  <path
    fill="#949E9E"
    d="M15.6 20.31a2.5 2.5 0 1 1-5 0 2.5 2.5 0 0 1 5 0ZM23.1 20.31a2.5 2.5 0 1 1-5 0 2.5 2.5 0 0 1 5 0ZM28.1 22.81a2.5 2.5 0 1 0 0-5 2.5 2.5 0 0 0 0 5Z"
  />
</svg>`;var yb=Object.freeze({__proto__:null,moreSvg:bb});const Cb=z`<svg fill="none" viewBox="0 0 22 20">
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
</svg>`;var xb=Object.freeze({__proto__:null,networkPlaceholderSvg:Cb});const Eb=z`<svg fill="none" viewBox="0 0 20 20">
  <path
    fill="currentColor"
    fill-rule="evenodd"
    d="M9.13 1h1.71c1.46 0 2.63 0 3.56.1.97.1 1.8.33 2.53.85a5 5 0 0 1 1.1 1.11c.53.73.75 1.56.86 2.53.1.93.1 2.1.1 3.55v1.72c0 1.45 0 2.62-.1 3.55-.1.97-.33 1.8-.86 2.53a5 5 0 0 1-1.1 1.1c-.73.53-1.56.75-2.53.86-.93.1-2.1.1-3.55.1H9.13c-1.45 0-2.62 0-3.56-.1-.96-.1-1.8-.33-2.52-.85a5 5 0 0 1-1.1-1.11 5.05 5.05 0 0 1-.86-2.53c-.1-.93-.1-2.1-.1-3.55V9.14c0-1.45 0-2.62.1-3.55.1-.97.33-1.8.85-2.53a5 5 0 0 1 1.1-1.1 5.05 5.05 0 0 1 2.53-.86C6.51 1 7.67 1 9.13 1ZM5.79 3.09a3.1 3.1 0 0 0-1.57.48 3 3 0 0 0-.66.67c-.24.32-.4.77-.48 1.56-.1.82-.1 1.88-.1 3.4v1.6c0 1.15 0 2.04.05 2.76l.41-.42c.5-.5.93-.92 1.32-1.24.41-.33.86-.6 1.43-.7a3 3 0 0 1 .94 0c.35.06.66.2.95.37a17.11 17.11 0 0 0 .8.45c.1-.08.2-.2.41-.4l.04-.03a27 27 0 0 1 1.95-1.84 4.03 4.03 0 0 1 1.91-.94 4 4 0 0 1 1.25 0c.73.11 1.33.46 1.91.94l.64.55V9.2c0-1.52 0-2.58-.1-3.4a3.1 3.1 0 0 0-.48-1.56 3 3 0 0 0-.66-.67 3.1 3.1 0 0 0-1.56-.48C13.37 3 12.3 3 10.79 3h-1.6c-1.52 0-2.59 0-3.4.09Zm11.18 10-.04-.05a26.24 26.24 0 0 0-1.83-1.74c-.45-.36-.73-.48-.97-.52a2 2 0 0 0-.63 0c-.24.04-.51.16-.97.52-.46.38-1.01.93-1.83 1.74l-.02.02c-.17.18-.34.34-.49.47a2.04 2.04 0 0 1-1.08.5 1.97 1.97 0 0 1-1.25-.27l-.79-.46-.02-.02a.65.65 0 0 0-.24-.1 1 1 0 0 0-.31 0c-.08.02-.21.06-.49.28-.3.24-.65.59-1.2 1.14l-.56.56-.65.66a3 3 0 0 0 .62.6c.33.24.77.4 1.57.49.81.09 1.88.09 3.4.09h1.6c1.52 0 2.58 0 3.4-.09a3.1 3.1 0 0 0 1.56-.48 3 3 0 0 0 .66-.67c.24-.32.4-.77.49-1.56l.07-1.12Zm-8.02-1.03ZM4.99 7a2 2 0 1 1 4 0 2 2 0 0 1-4 0Z"
    clip-rule="evenodd"
  />
</svg>`;var Ab=Object.freeze({__proto__:null,nftPlaceholderSvg:Eb});const kb=z`<svg fill="none" viewBox="0 0 16 16">
  <path
    fill="currentColor"
    fill-rule="evenodd"
    d="M8 0a1 1 0 0 1 1 1v5.38a1 1 0 0 1-2 0V1a1 1 0 0 1 1-1ZM5.26 2.6a1 1 0 0 1-.28 1.39 5.46 5.46 0 1 0 6.04 0 1 1 0 1 1 1.1-1.67 7.46 7.46 0 1 1-8.25 0 1 1 0 0 1 1.4.28Z"
    clip-rule="evenodd"
  />
</svg>`;var Ib=Object.freeze({__proto__:null,offSvg:kb});const Nb=z` <svg
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
</svg>`;var Sb=Object.freeze({__proto__:null,playStoreSvg:Nb});const Pb=z`<svg
  width="13"
  height="12"
  viewBox="0 0 13 12"
  fill="none"
>
  <path
    fill="currentColor"
    fill-rule="evenodd"
    clip-rule="evenodd"
    d="M0.794373 5.99982C0.794373 5.52643 1.17812 5.14268 1.6515 5.14268H5.643V1.15109C5.643 0.677701 6.02675 0.293946 6.50012 0.293945C6.9735 0.293946 7.35725 0.677701 7.35725 1.15109V5.14268H11.3488C11.8221 5.14268 12.2059 5.52643 12.2059 5.99982C12.2059 6.47321 11.8221 6.85696 11.3488 6.85696H7.35725V10.8486C7.35725 11.3219 6.9735 11.7057 6.50012 11.7057C6.02675 11.7057 5.643 11.3219 5.643 10.8486V6.85696H1.6515C1.17812 6.85696 0.794373 6.47321 0.794373 5.99982Z"
  /></svg
>`;var _b=Object.freeze({__proto__:null,plusSvg:Pb});const Tb=z`<svg fill="none" viewBox="0 0 20 20">
  <path
    fill="currentColor"
    d="M3 6a3 3 0 0 1 3-3h1a1 1 0 1 0 0-2H6a5 5 0 0 0-5 5v1a1 1 0 0 0 2 0V6ZM13 1a1 1 0 1 0 0 2h1a3 3 0 0 1 3 3v1a1 1 0 1 0 2 0V6a5 5 0 0 0-5-5h-1ZM3 13a1 1 0 1 0-2 0v1a5 5 0 0 0 5 5h1a1 1 0 1 0 0-2H6a3 3 0 0 1-3-3v-1ZM19 13a1 1 0 1 0-2 0v1a3 3 0 0 1-3 3h-1a1 1 0 1 0 0 2h1.01a5 5 0 0 0 5-5v-1ZM5.3 6.36c-.04.2-.04.43-.04.89s0 .7.05.89c.14.52.54.92 1.06 1.06.19.05.42.05.89.05.46 0 .7 0 .88-.05A1.5 1.5 0 0 0 9.2 8.14c.06-.2.06-.43.06-.89s0-.7-.06-.89A1.5 1.5 0 0 0 8.14 5.3c-.19-.05-.42-.05-.88-.05-.47 0-.7 0-.9.05a1.5 1.5 0 0 0-1.05 1.06ZM10.8 6.36c-.04.2-.04.43-.04.89s0 .7.05.89c.14.52.54.92 1.06 1.06.19.05.42.05.89.05.46 0 .7 0 .88-.05a1.5 1.5 0 0 0 1.06-1.06c.06-.2.06-.43.06-.89s0-.7-.06-.89a1.5 1.5 0 0 0-1.06-1.06c-.19-.05-.42-.05-.88-.05-.47 0-.7 0-.9.05a1.5 1.5 0 0 0-1.05 1.06ZM5.26 12.75c0-.46 0-.7.05-.89a1.5 1.5 0 0 1 1.06-1.06c.19-.05.42-.05.89-.05.46 0 .7 0 .88.05.52.14.93.54 1.06 1.06.06.2.06.43.06.89s0 .7-.06.89a1.5 1.5 0 0 1-1.06 1.06c-.19.05-.42.05-.88.05-.47 0-.7 0-.9-.05a1.5 1.5 0 0 1-1.05-1.06c-.05-.2-.05-.43-.05-.89ZM10.8 11.86c-.04.2-.04.43-.04.89s0 .7.05.89c.14.52.54.92 1.06 1.06.19.05.42.05.89.05.46 0 .7 0 .88-.05a1.5 1.5 0 0 0 1.06-1.06c.06-.2.06-.43.06-.89s0-.7-.06-.89a1.5 1.5 0 0 0-1.06-1.06c-.19-.05-.42-.05-.88-.05-.47 0-.7 0-.9.05a1.5 1.5 0 0 0-1.05 1.06Z"
  />
</svg>`;var Ob=Object.freeze({__proto__:null,qrCodeIcon:Tb});const $b=z`<svg
  fill="none"
  viewBox="0 0 21 20"
>
  <path
    fill="currentColor"
    d="M8.8071 0.292893C9.19763 0.683417 9.19763 1.31658 8.8071 1.70711L6.91421 3.6H11.8404C14.3368 3.6 16.5533 5.1975 17.3427 7.56588L17.4487 7.88377C17.6233 8.40772 17.3402 8.97404 16.8162 9.14868C16.2923 9.32333 15.726 9.04017 15.5513 8.51623L15.4453 8.19834C14.9281 6.64664 13.476 5.6 11.8404 5.6H6.91421L8.8071 7.49289C9.19763 7.88342 9.19763 8.51658 8.8071 8.90711C8.41658 9.29763 7.78341 9.29763 7.39289 8.90711L3.79289 5.30711C3.40236 4.91658 3.40236 4.28342 3.79289 3.89289L7.39289 0.292893C7.78341 -0.0976311 8.41658 -0.0976311 8.8071 0.292893ZM4.18377 10.8513C4.70771 10.6767 5.27403 10.9598 5.44868 11.4838L5.55464 11.8017C6.07188 13.3534 7.52401 14.4 9.15964 14.4L14.0858 14.4L12.1929 12.5071C11.8024 12.1166 11.8024 11.4834 12.1929 11.0929C12.5834 10.7024 13.2166 10.7024 13.6071 11.0929L17.2071 14.6929C17.5976 15.0834 17.5976 15.7166 17.2071 16.1071L13.6071 19.7071C13.2166 20.0976 12.5834 20.0976 12.1929 19.7071C11.8024 19.3166 11.8024 18.6834 12.1929 18.2929L14.0858 16.4L9.15964 16.4C6.66314 16.4 4.44674 14.8025 3.65728 12.4341L3.55131 12.1162C3.37667 11.5923 3.65983 11.026 4.18377 10.8513Z"
  /></svg
>`;var Rb=Object.freeze({__proto__:null,recycleHorizontalSvg:$b});const Lb=z`<svg fill="none" viewBox="0 0 14 16">
  <path
    fill="currentColor"
    fill-rule="evenodd"
    d="M3.94 1.04a1 1 0 0 1 .7 1.23l-.48 1.68a5.85 5.85 0 0 1 8.53 4.32 5.86 5.86 0 0 1-11.4 2.56 1 1 0 0 1 1.9-.57 3.86 3.86 0 1 0 1.83-4.5l1.87.53a1 1 0 0 1-.55 1.92l-4.1-1.15a1 1 0 0 1-.69-1.23l1.16-4.1a1 1 0 0 1 1.23-.7Z"
    clip-rule="evenodd"
  />
</svg>`;var Bb=Object.freeze({__proto__:null,refreshSvg:Lb});const Ub=z`<svg fill="none" viewBox="0 0 20 20">
  <path
    fill="currentColor"
    fill-rule="evenodd"
    d="M9.36 4.21a5.14 5.14 0 1 0 0 10.29 5.14 5.14 0 0 0 0-10.29ZM1.64 9.36a7.71 7.71 0 1 1 14 4.47l2.52 2.5a1.29 1.29 0 1 1-1.82 1.83l-2.51-2.51A7.71 7.71 0 0 1 1.65 9.36Z"
    clip-rule="evenodd"
  />
</svg>`;var Mb=Object.freeze({__proto__:null,searchSvg:Ub});const zb=z`<svg fill="none" viewBox="0 0 21 20">
  <path
    fill="currentColor"
    fill-rule="evenodd"
    d="M14.3808 4.34812C13.72 4.47798 12.8501 4.7587 11.5748 5.17296L9.00869 6.00646C6.90631 6.68935 5.40679 7.17779 4.38121 7.63178C3.87166 7.85734 3.5351 8.05091 3.32022 8.22035C3.11183 8.38466 3.07011 8.48486 3.05969 8.51817C2.98058 8.77103 2.98009 9.04195 3.05831 9.29509C3.06861 9.32844 3.10998 9.42878 3.31777 9.59384C3.53205 9.76404 3.86792 9.95881 4.37667 10.1862C5.29287 10.5957 6.58844 11.0341 8.35529 11.6164L10.8876 8.59854C11.2426 8.17547 11.8733 8.12028 12.2964 8.47528C12.7195 8.83029 12.7746 9.46104 12.4196 9.88412L9.88738 12.9019C10.7676 14.5408 11.4244 15.7406 11.9867 16.5718C12.299 17.0333 12.5491 17.3303 12.7539 17.5117C12.9526 17.6877 13.0586 17.711 13.0932 17.7154C13.3561 17.7484 13.6228 17.7009 13.8581 17.5791C13.8891 17.563 13.9805 17.5046 14.1061 17.2708C14.2357 17.0298 14.3679 16.6647 14.5015 16.1237C14.7705 15.0349 14.9912 13.4733 15.2986 11.2843L15.6738 8.61249C15.8603 7.28456 15.9857 6.37917 15.9989 5.7059C16.012 5.03702 15.9047 4.8056 15.8145 4.69183C15.7044 4.55297 15.5673 4.43792 15.4114 4.35365C15.2837 4.28459 15.0372 4.2191 14.3808 4.34812ZM7.99373 13.603C6.11919 12.9864 4.6304 12.4902 3.5606 12.0121C2.98683 11.7557 2.4778 11.4808 2.07383 11.1599C1.66337 10.8339 1.31312 10.4217 1.14744 9.88551C0.949667 9.24541 0.950886 8.56035 1.15094 7.92096C1.31852 7.38534 1.67024 6.97442 2.08185 6.64985C2.48697 6.33041 2.99697 6.05734 3.57166 5.80295C4.70309 5.3021 6.30179 4.78283 8.32903 4.12437L11.0196 3.25042C12.2166 2.86159 13.2017 2.54158 13.9951 2.38566C14.8065 2.22618 15.6202 2.19289 16.3627 2.59437C16.7568 2.80747 17.1035 3.09839 17.3818 3.4495C17.9062 4.111 18.0147 4.91815 17.9985 5.74496C17.9827 6.55332 17.8386 7.57903 17.6636 8.82534L17.2701 11.6268C16.9737 13.7376 16.7399 15.4022 16.4432 16.6034C16.2924 17.2135 16.1121 17.7632 15.8678 18.2176C15.6197 18.6794 15.2761 19.0971 14.7777 19.3551C14.1827 19.6632 13.5083 19.7833 12.8436 19.6997C12.2867 19.6297 11.82 19.3563 11.4277 19.0087C11.0415 18.6666 10.6824 18.213 10.3302 17.6925C9.67361 16.722 8.92648 15.342 7.99373 13.603Z"
    clip-rule="evenodd"
  />
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="21"
    height="20"
    viewBox="0 0 21 20"
    fill="none"
  ></svg></svg
>`;var jb=Object.freeze({__proto__:null,sendSvg:zb});const Db=z`<svg fill="none" viewBox="0 0 20 20">
  <path
    fill="currentColor"
    fill-rule="evenodd"
    d="M6.76.3a1 1 0 0 1 0 1.4L4.07 4.4h9a1 1 0 1 1 0 2h-9l2.69 2.68a1 1 0 1 1-1.42 1.42L.95 6.09a1 1 0 0 1 0-1.4l4.4-4.4a1 1 0 0 1 1.4 0Zm6.49 9.21a1 1 0 0 1 1.41 0l4.39 4.4a1 1 0 0 1 0 1.4l-4.39 4.4a1 1 0 0 1-1.41-1.42l2.68-2.68h-9a1 1 0 0 1 0-2h9l-2.68-2.68a1 1 0 0 1 0-1.42Z"
    clip-rule="evenodd"
  />
</svg>`;var Hb=Object.freeze({__proto__:null,swapHorizontalSvg:Db});const Wb=z`<svg
  width="14"
  height="14"
  viewBox="0 0 14 14"
  fill="none"
  xmlns="http://www.w3.org/2000/svg"
>
  <path
    fill-rule="evenodd"
    clip-rule="evenodd"
    d="M13.7306 3.24213C14.0725 3.58384 14.0725 4.13786 13.7306 4.47957L10.7418 7.46737C10.4 7.80908 9.84581 7.80908 9.50399 7.46737C9.16216 7.12567 9.16216 6.57165 9.50399 6.22994L10.9986 4.73585H5.34082C4.85741 4.73585 4.46553 4.3441 4.46553 3.86085C4.46553 3.3776 4.85741 2.98585 5.34082 2.98585L10.9986 2.98585L9.50399 1.49177C9.16216 1.15006 9.16216 0.596037 9.50399 0.254328C9.84581 -0.0873803 10.4 -0.0873803 10.7418 0.254328L13.7306 3.24213ZM9.52515 10.1352C9.52515 10.6185 9.13327 11.0102 8.64986 11.0102L2.9921 11.0102L4.48669 12.5043C4.82852 12.846 4.82852 13.4001 4.48669 13.7418C4.14487 14.0835 3.59066 14.0835 3.24884 13.7418L0.26003 10.754C0.0958806 10.5899 0.0036621 10.3673 0.00366211 10.1352C0.00366212 9.90318 0.0958806 9.68062 0.26003 9.51652L3.24884 6.52872C3.59066 6.18701 4.14487 6.18701 4.48669 6.52872C4.82851 6.87043 4.82851 7.42445 4.48669 7.76616L2.9921 9.26024L8.64986 9.26024C9.13327 9.26024 9.52515 9.65199 9.52515 10.1352Z"
    fill="currentColor"
  />
</svg>

`;var Fb=Object.freeze({__proto__:null,swapHorizontalMediumSvg:Wb});const qb=z`<svg width="10" height="10" viewBox="0 0 10 10">
  <path
    fill="currentColor"
    fill-rule="evenodd"
    d="M3.77986 0.566631C4.0589 0.845577 4.0589 1.29784 3.77986 1.57678L3.08261 2.2738H6.34184C6.73647 2.2738 7.05637 2.5936 7.05637 2.98808C7.05637 3.38257 6.73647 3.70237 6.34184 3.70237H3.08261L3.77986 4.39938C4.0589 4.67833 4.0589 5.13059 3.77986 5.40954C3.50082 5.68848 3.04841 5.68848 2.76937 5.40954L0.852346 3.49316C0.573306 3.21421 0.573306 2.76195 0.852346 2.48301L2.76937 0.566631C3.04841 0.287685 3.50082 0.287685 3.77986 0.566631ZM6.22 4.59102C6.49904 4.31208 6.95145 4.31208 7.23049 4.59102L9.14751 6.5074C9.42655 6.78634 9.42655 7.23861 9.14751 7.51755L7.23049 9.43393C6.95145 9.71287 6.49904 9.71287 6.22 9.43393C5.94096 9.15498 5.94096 8.70272 6.22 8.42377L6.91725 7.72676L3.65802 7.72676C3.26339 7.72676 2.94349 7.40696 2.94349 7.01247C2.94349 6.61798 3.26339 6.29819 3.65802 6.29819L6.91725 6.29819L6.22 5.60117C5.94096 5.32223 5.94096 4.86997 6.22 4.59102Z"
    clip-rule="evenodd"
  />
</svg>`;var Vb=Object.freeze({__proto__:null,swapHorizontalBoldSvg:qb});const Zb=z`<svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 20 20" fill="none">
  <path 
    fill="currentColor"
    fill-rule="evenodd" 
    clip-rule="evenodd" 
    d="M8.3071 0.292893C8.69763 0.683417 8.69763 1.31658 8.3071 1.70711L6.41421 3.6H11.3404C13.8368 3.6 16.0533 5.1975 16.8427 7.56588L16.9487 7.88377C17.1233 8.40772 16.8402 8.97404 16.3162 9.14868C15.7923 9.32333 15.226 9.04017 15.0513 8.51623L14.9453 8.19834C14.4281 6.64664 12.976 5.6 11.3404 5.6H6.41421L8.3071 7.49289C8.69763 7.88342 8.69763 8.51658 8.3071 8.90711C7.91658 9.29763 7.28341 9.29763 6.89289 8.90711L3.29289 5.30711C2.90236 4.91658 2.90236 4.28342 3.29289 3.89289L6.89289 0.292893C7.28341 -0.0976311 7.91658 -0.0976311 8.3071 0.292893ZM3.68377 10.8513C4.20771 10.6767 4.77403 10.9598 4.94868 11.4838L5.05464 11.8017C5.57188 13.3534 7.024 14.4 8.65964 14.4L13.5858 14.4L11.6929 12.5071C11.3024 12.1166 11.3024 11.4834 11.6929 11.0929C12.0834 10.7024 12.7166 10.7024 13.1071 11.0929L16.7071 14.6929C17.0976 15.0834 17.0976 15.7166 16.7071 16.1071L13.1071 19.7071C12.7166 20.0976 12.0834 20.0976 11.6929 19.7071C11.3024 19.3166 11.3024 18.6834 11.6929 18.2929L13.5858 16.4L8.65964 16.4C6.16314 16.4 3.94674 14.8025 3.15728 12.4341L3.05131 12.1162C2.87667 11.5923 3.15983 11.026 3.68377 10.8513Z" 
  />
</svg>`;var Gb=Object.freeze({__proto__:null,swapHorizontalRoundedBoldSvg:Zb});const Kb=z`<svg fill="none" viewBox="0 0 14 14">
  <path
    fill="currentColor"
    fill-rule="evenodd"
    d="M3.48 2.18a1 1 0 0 1 1.41 0l2.68 2.68a1 1 0 1 1-1.41 1.42l-.98-.98v4.56a1 1 0 0 1-2 0V5.3l-.97.98A1 1 0 0 1 .79 4.86l2.69-2.68Zm6.34 2.93a1 1 0 0 1 1 1v4.56l.97-.98a1 1 0 1 1 1.42 1.42l-2.69 2.68a1 1 0 0 1-1.41 0l-2.68-2.68a1 1 0 0 1 1.41-1.42l.98.98V6.1a1 1 0 0 1 1-1Z"
    clip-rule="evenodd"
  />
</svg>`;var Yb=Object.freeze({__proto__:null,swapVerticalSvg:Kb});const Jb=z`<svg width="32" height="32" fill="none" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32">
  <g clip-path="url(#a)">
    <path fill="url(#b)" d="M0 0h32v32H0z"/>
    <path fill-rule="evenodd" clip-rule="evenodd" d="M7.034 15.252c4.975-2.167 8.293-3.596 9.953-4.287 4.74-1.971 5.725-2.314 6.366-2.325.142-.002.457.033.662.198.172.14.22.33.243.463.022.132.05.435.028.671-.257 2.7-1.368 9.248-1.933 12.27-.24 1.28-.71 1.708-1.167 1.75-.99.091-1.743-.655-2.703-1.284-1.502-.985-2.351-1.598-3.81-2.558-1.684-1.11-.592-1.721.368-2.718.252-.261 4.619-4.233 4.703-4.594.01-.045.02-.213-.08-.301-.1-.09-.246-.059-.353-.035-.15.034-2.55 1.62-7.198 4.758-.682.468-1.298.696-1.851.684-.61-.013-1.782-.344-2.653-.628-1.069-.347-1.918-.53-1.845-1.12.039-.308.462-.623 1.27-.944Z" fill="#fff"/>
  </g>
  <path d="M.5 16C.5 7.44 7.44.5 16 .5 24.56.5 31.5 7.44 31.5 16c0 8.56-6.94 15.5-15.5 15.5C7.44 31.5.5 24.56.5 16Z" stroke="#141414" stroke-opacity=".05"/>
  <defs>
    <linearGradient id="b" x1="1600" y1="0" x2="1600" y2="3176.27" gradientUnits="userSpaceOnUse">
      <stop stop-color="#2AABEE"/>
      <stop offset="1" stop-color="#229ED9"/>
    </linearGradient>
    <clipPath id="a">
      <path d="M0 16C0 7.163 7.163 0 16 0s16 7.163 16 16-7.163 16-16 16S0 24.837 0 16Z" fill="#fff"/>
    </clipPath>
  </defs>
</svg>`;var Xb=Object.freeze({__proto__:null,telegramSvg:Jb});const Qb=z`<svg width="14" height="15" viewBox="0 0 14 15" fill="none" xmlns="http://www.w3.org/2000/svg">
  <path d="M7 3.71875C6.0335 3.71875 5.25 2.93525 5.25 1.96875C5.25 1.00225 6.0335 0.21875 7 0.21875C7.9665 0.21875 8.75 1.00225 8.75 1.96875C8.75 2.93525 7.9665 3.71875 7 3.71875Z" fill="#949E9E"/>
  <path d="M7 8.96875C6.0335 8.96875 5.25 8.18525 5.25 7.21875C5.25 6.25225 6.0335 5.46875 7 5.46875C7.9665 5.46875 8.75 6.25225 8.75 7.21875C8.75 8.18525 7.9665 8.96875 7 8.96875Z" fill="#949E9E"/>
  <path d="M5.25 12.4688C5.25 13.4352 6.0335 14.2187 7 14.2187C7.9665 14.2187 8.75 13.4352 8.75 12.4688C8.75 11.5023 7.9665 10.7188 7 10.7188C6.0335 10.7188 5.25 11.5023 5.25 12.4688Z" fill="#949E9E"/>
</svg>`;var e4=Object.freeze({__proto__:null,threeDotsSvg:Qb});const t4=z`<svg fill="none" viewBox="0 0 40 40">
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
</svg>`;var r4=Object.freeze({__proto__:null,twitchSvg:t4});const i4=z`<svg fill="none" viewBox="0 0 41 40">
  <g clip-path="url(#a)">
    <path fill="#000" d="M.8 0h40v40H.8z" />
    <path
      fill="#fff"
      d="m22.63 18.46 7.14-8.3h-1.69l-6.2 7.2-4.96-7.2H11.2l7.5 10.9-7.5 8.71h1.7l6.55-7.61 5.23 7.61h5.72l-7.77-11.31Zm-9.13-7.03h2.6l11.98 17.13h-2.6L13.5 11.43Z"
    />
  </g>
  <defs>
    <clipPath id="a"><path fill="#fff" d="M.8 20a20 20 0 1 1 40 0 20 20 0 0 1-40 0Z" /></clipPath>
  </defs>
</svg>`;var nd=Object.freeze({__proto__:null,xSvg:i4});const n4=z`<svg fill="none" viewBox="0 0 16 16">
  <path
    fill="currentColor"
    d="m14.36 4.74.01.42c0 4.34-3.3 9.34-9.34 9.34A9.3 9.3 0 0 1 0 13.03a6.6 6.6 0 0 0 4.86-1.36 3.29 3.29 0 0 1-3.07-2.28c.5.1 1 .07 1.48-.06A3.28 3.28 0 0 1 .64 6.11v-.04c.46.26.97.4 1.49.41A3.29 3.29 0 0 1 1.11 2.1a9.32 9.32 0 0 0 6.77 3.43 3.28 3.28 0 0 1 5.6-3 6.59 6.59 0 0 0 2.08-.8 3.3 3.3 0 0 1-1.45 1.82A6.53 6.53 0 0 0 16 3.04c-.44.66-1 1.23-1.64 1.7Z"
  />
</svg>`;var s4=Object.freeze({__proto__:null,twitterIconSvg:n4});const o4=z`<svg fill="none" viewBox="0 0 28 28">
  <path
    fill="currentColor"
    fill-rule="evenodd"
    d="M18.1 4.76c-.42-.73-1.33-1.01-2.09-.66l-1.42.66c-.37.18-.8.18-1.18 0l-1.4-.65a1.63 1.63 0 0 0-2.1.66l-.84 1.45c-.2.34-.53.59-.92.67l-1.7.35c-.83.17-1.39.94-1.3 1.78l.19 1.56c.04.39-.08.78-.33 1.07l-1.12 1.3c-.52.6-.52 1.5 0 2.11L5 16.38c.25.3.37.68.33 1.06l-.18 1.57c-.1.83.46 1.6 1.28 1.78l1.7.35c.4.08.73.32.93.66l.84 1.43a1.63 1.63 0 0 0 2.09.66l1.41-.66c.37-.17.8-.17 1.18 0l1.43.67c.76.35 1.66.07 2.08-.65l.86-1.45c.2-.34.54-.58.92-.66l1.68-.35A1.63 1.63 0 0 0 22.84 19l-.18-1.57a1.4 1.4 0 0 1 .33-1.06l1.12-1.32c.52-.6.52-1.5 0-2.11l-1.12-1.3a1.4 1.4 0 0 1-.33-1.07l.18-1.57c.1-.83-.46-1.6-1.28-1.77l-1.68-.35a1.4 1.4 0 0 1-.92-.66l-.86-1.47Zm-3.27-3.2a4.43 4.43 0 0 1 5.69 1.78l.54.93 1.07.22a4.43 4.43 0 0 1 3.5 4.84l-.11.96.7.83a4.43 4.43 0 0 1 .02 5.76l-.72.85.1.96a4.43 4.43 0 0 1-3.5 4.84l-1.06.22-.54.92a4.43 4.43 0 0 1-5.68 1.77l-.84-.4-.82.39a4.43 4.43 0 0 1-5.7-1.79l-.51-.89-1.09-.22a4.43 4.43 0 0 1-3.5-4.84l.1-.96-.72-.85a4.43 4.43 0 0 1 .01-5.76l.71-.83-.1-.95a4.43 4.43 0 0 1 3.5-4.84l1.08-.23.53-.9a4.43 4.43 0 0 1 5.7-1.8l.81.38.83-.39ZM18.2 9.4c.65.42.84 1.28.42 1.93l-4.4 6.87a1.4 1.4 0 0 1-2.26.14L9.5 15.39a1.4 1.4 0 0 1 2.15-1.8l1.23 1.48 3.38-5.26a1.4 1.4 0 0 1 1.93-.42Z"
    clip-rule="evenodd"
  />
</svg>`;var a4=Object.freeze({__proto__:null,verifySvg:o4});const c4=z`<svg fill="none" viewBox="0 0 14 14">
  <path
    fill="currentColor"
    fill-rule="evenodd"
    d="m4.1 12.43-.45-.78-.93-.2a1.65 1.65 0 0 1-1.31-1.8l.1-.86-.61-.71a1.65 1.65 0 0 1 0-2.16l.6-.7-.09-.85c-.1-.86.47-1.64 1.3-1.81l.94-.2.45-.78A1.65 1.65 0 0 1 6.23.9l.77.36.78-.36c.77-.36 1.69-.07 2.12.66l.47.8.91.2c.84.17 1.4.95 1.31 1.8l-.1.86.6.7c.54.62.54 1.54.01 2.16l-.6.71.09.86c.1.85-.47 1.63-1.3 1.8l-.92.2-.47.79a1.65 1.65 0 0 1-2.12.66L7 12.74l-.77.36c-.78.35-1.7.07-2.13-.67Zm5.74-6.9a1 1 0 1 0-1.68-1.07L6.32 7.3l-.55-.66a1 1 0 0 0-1.54 1.28l1.43 1.71a1 1 0 0 0 1.61-.1l2.57-4Z"
    clip-rule="evenodd"
  />
</svg>`;var l4=Object.freeze({__proto__:null,verifyFilledSvg:c4});const u4=z`<svg fill="none" viewBox="0 0 20 20">
  <path
    fill="currentColor"
    fill-rule="evenodd"
    d="M0 5.5c0-1.8 1.46-3.25 3.25-3.25H14.5c1.8 0 3.25 1.46 3.25 3.25v.28A3.25 3.25 0 0 1 20 8.88v2.24c0 1.45-.94 2.68-2.25 3.1v.28c0 1.8-1.46 3.25-3.25 3.25H3.25A3.25 3.25 0 0 1 0 14.5v-9Zm15.75 8.88h-2.38a4.38 4.38 0 0 1 0-8.76h2.38V5.5c0-.69-.56-1.25-1.25-1.25H3.25C2.56 4.25 2 4.81 2 5.5v9c0 .69.56 1.25 1.25 1.25H14.5c.69 0 1.25-.56 1.25-1.25v-.13Zm-2.38-6.76a2.37 2.37 0 1 0 0 4.75h3.38c.69 0 1.25-.55 1.25-1.24V8.87c0-.69-.56-1.24-1.25-1.24h-3.38Z"
    clip-rule="evenodd"
  />
</svg>`;var d4=Object.freeze({__proto__:null,walletSvg:u4});const h4=z`<svg fill="none" viewBox="0 0 96 67">
  <path
    fill="currentColor"
    d="M25.32 18.8a32.56 32.56 0 0 1 45.36 0l1.5 1.47c.63.62.63 1.61 0 2.22l-5.15 5.05c-.31.3-.82.3-1.14 0l-2.07-2.03a22.71 22.71 0 0 0-31.64 0l-2.22 2.18c-.31.3-.82.3-1.14 0l-5.15-5.05a1.55 1.55 0 0 1 0-2.22l1.65-1.62Zm56.02 10.44 4.59 4.5c.63.6.63 1.6 0 2.21l-20.7 20.26c-.62.61-1.63.61-2.26 0L48.28 41.83a.4.4 0 0 0-.56 0L33.03 56.21c-.63.61-1.64.61-2.27 0L10.07 35.95a1.55 1.55 0 0 1 0-2.22l4.59-4.5a1.63 1.63 0 0 1 2.27 0L31.6 43.63a.4.4 0 0 0 .57 0l14.69-14.38a1.63 1.63 0 0 1 2.26 0l14.69 14.38a.4.4 0 0 0 .57 0l14.68-14.38a1.63 1.63 0 0 1 2.27 0Z"
  />
  <path
    stroke="#000"
    stroke-opacity=".1"
    d="M25.67 19.15a32.06 32.06 0 0 1 44.66 0l1.5 1.48c.43.42.43 1.09 0 1.5l-5.15 5.05a.31.31 0 0 1-.44 0l-2.07-2.03a23.21 23.21 0 0 0-32.34 0l-2.22 2.18a.31.31 0 0 1-.44 0l-5.15-5.05a1.05 1.05 0 0 1 0-1.5l1.65-1.63ZM81 29.6l4.6 4.5c.42.41.42 1.09 0 1.5l-20.7 20.26c-.43.43-1.14.43-1.57 0L48.63 41.47a.9.9 0 0 0-1.26 0L32.68 55.85c-.43.43-1.14.43-1.57 0L10.42 35.6a1.05 1.05 0 0 1 0-1.5l4.59-4.5a1.13 1.13 0 0 1 1.57 0l14.68 14.38a.9.9 0 0 0 1.27 0l-.35-.35.35.35L47.22 29.6a1.13 1.13 0 0 1 1.56 0l14.7 14.38a.9.9 0 0 0 1.26 0L79.42 29.6a1.13 1.13 0 0 1 1.57 0Z"
  />
</svg>`,p4=z`
<svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
<g clip-path="url(#clip0_22274_4692)">
<path d="M0 6.64C0 4.17295 0 2.93942 0.525474 2.01817C0.880399 1.39592 1.39592 0.880399 2.01817 0.525474C2.93942 0 4.17295 0 6.64 0H9.36C11.8271 0 13.0606 0 13.9818 0.525474C14.6041 0.880399 15.1196 1.39592 15.4745 2.01817C16 2.93942 16 4.17295 16 6.64V9.36C16 11.8271 16 13.0606 15.4745 13.9818C15.1196 14.6041 14.6041 15.1196 13.9818 15.4745C13.0606 16 11.8271 16 9.36 16H6.64C4.17295 16 2.93942 16 2.01817 15.4745C1.39592 15.1196 0.880399 14.6041 0.525474 13.9818C0 13.0606 0 11.8271 0 9.36V6.64Z" fill="#C7B994"/>
<path d="M4.49038 5.76609C6.42869 3.86833 9.5713 3.86833 11.5096 5.76609L11.7429 5.99449C11.8398 6.08938 11.8398 6.24323 11.7429 6.33811L10.9449 7.11942C10.8964 7.16686 10.8179 7.16686 10.7694 7.11942L10.4484 6.80512C9.09617 5.48119 6.90381 5.48119 5.5516 6.80512L5.20782 7.14171C5.15936 7.18915 5.08079 7.18915 5.03234 7.14171L4.23434 6.3604C4.13742 6.26552 4.13742 6.11167 4.23434 6.01678L4.49038 5.76609ZM13.1599 7.38192L13.8702 8.07729C13.9671 8.17217 13.9671 8.32602 13.8702 8.4209L10.6677 11.5564C10.5708 11.6513 10.4137 11.6513 10.3168 11.5564L8.04388 9.33105C8.01965 9.30733 7.98037 9.30733 7.95614 9.33105L5.6833 11.5564C5.58638 11.6513 5.42925 11.6513 5.33234 11.5564L2.12982 8.42087C2.0329 8.32598 2.0329 8.17213 2.12982 8.07724L2.84004 7.38188C2.93695 7.28699 3.09408 7.28699 3.191 7.38188L5.46392 9.60726C5.48815 9.63098 5.52743 9.63098 5.55166 9.60726L7.82447 7.38188C7.92138 7.28699 8.07851 7.28699 8.17543 7.38187L10.4484 9.60726C10.4726 9.63098 10.5119 9.63098 10.5361 9.60726L12.809 7.38192C12.9059 7.28703 13.063 7.28703 13.1599 7.38192Z" fill="#202020"/>
</g>
<defs>
<clipPath id="clip0_22274_4692">
<path d="M0 8C0 3.58172 3.58172 0 8 0C12.4183 0 16 3.58172 16 8C16 12.4183 12.4183 16 8 16C3.58172 16 0 12.4183 0 8Z" fill="white"/>
</clipPath>
</defs>
</svg>
`,f4=z`
<svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
<circle cx="11" cy="11" r="11" transform="matrix(-1 0 0 1 23 1)" fill="#202020"/>
<circle cx="11" cy="11" r="11.5" transform="matrix(-1 0 0 1 23 1)" stroke="#C7B994" stroke-opacity="0.7"/>
<path d="M15.4523 11.0686L16.7472 9.78167C13.8205 6.87297 10.1838 6.87297 7.25708 9.78167L8.55201 11.0686C10.7779 8.85645 13.2279 8.85645 15.4538 11.0686H15.4523Z" fill="#C7B994"/>
<path d="M15.0199 14.067L12 11.0656L8.98 14.067L5.96004 11.0656L4.66663 12.3511L8.98 16.6393L12 13.638L15.0199 16.6393L19.3333 12.3511L18.0399 11.0656L15.0199 14.067Z" fill="#C7B994"/>
</svg>
`;var ec=Object.freeze({__proto__:null,walletConnectSvg:h4,walletConnectLightBrownSvg:p4,walletConnectBrownSvg:f4});const g4=z`
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
`;var w4=Object.freeze({__proto__:null,walletPlaceholderSvg:g4});const m4=z`<svg fill="none" viewBox="0 0 20 20">
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
</svg>`;var v4=Object.freeze({__proto__:null,warningCircleSvg:m4});const b4=z`<svg width="22" height="22" viewBox="0 0 22 22" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M9.125 6.875C9.125 6.57833 9.21298 6.28832 9.3778 6.04165C9.54262 5.79497 9.77689 5.60271 10.051 5.48918C10.3251 5.37565 10.6267 5.34594 10.9176 5.40382C11.2086 5.4617 11.4759 5.60456 11.6857 5.81434C11.8954 6.02412 12.0383 6.29139 12.0962 6.58236C12.1541 6.87334 12.1244 7.17494 12.0108 7.44903C11.8973 7.72311 11.705 7.95738 11.4584 8.1222C11.2117 8.28703 10.9217 8.375 10.625 8.375C10.2272 8.375 9.84565 8.21696 9.56434 7.93566C9.28304 7.65436 9.125 7.27282 9.125 6.875ZM21.125 11C21.125 13.0025 20.5312 14.9601 19.4186 16.6251C18.3061 18.2902 16.7248 19.5879 14.8747 20.3543C13.0246 21.1206 10.9888 21.3211 9.02471 20.9305C7.06066 20.5398 5.25656 19.5755 3.84055 18.1595C2.42454 16.7435 1.46023 14.9393 1.06955 12.9753C0.678878 11.0112 0.879387 8.97543 1.64572 7.12533C2.41206 5.27523 3.70981 3.69392 5.37486 2.58137C7.0399 1.46882 8.99747 0.875 11 0.875C13.6844 0.877978 16.258 1.94567 18.1562 3.84383C20.0543 5.74199 21.122 8.3156 21.125 11ZM18.875 11C18.875 9.44247 18.4131 7.91992 17.5478 6.62488C16.6825 5.32985 15.4526 4.32049 14.0136 3.72445C12.5747 3.12841 10.9913 2.97246 9.46367 3.27632C7.93607 3.58017 6.53288 4.3302 5.43154 5.43153C4.3302 6.53287 3.58018 7.93606 3.27632 9.46366C2.97246 10.9913 3.12841 12.5747 3.72445 14.0136C4.32049 15.4526 5.32985 16.6825 6.62489 17.5478C7.91993 18.4131 9.44248 18.875 11 18.875C13.0879 18.8728 15.0896 18.0424 16.566 16.566C18.0424 15.0896 18.8728 13.0879 18.875 11ZM12.125 14.4387V11.375C12.125 10.8777 11.9275 10.4008 11.5758 10.0492C11.2242 9.69754 10.7473 9.5 10.25 9.5C9.98433 9.4996 9.72708 9.59325 9.52383 9.76435C9.32058 9.93544 9.18444 10.173 9.13952 10.4348C9.09461 10.6967 9.14381 10.966 9.27843 11.195C9.41304 11.4241 9.62438 11.5981 9.875 11.6863V14.75C9.875 15.2473 10.0725 15.7242 10.4242 16.0758C10.7758 16.4275 11.2527 16.625 11.75 16.625C12.0157 16.6254 12.2729 16.5318 12.4762 16.3607C12.6794 16.1896 12.8156 15.952 12.8605 15.6902C12.9054 15.4283 12.8562 15.159 12.7216 14.93C12.587 14.7009 12.3756 14.5269 12.125 14.4387Z" fill="currentColor"/>
</svg>`;var y4=Object.freeze({__proto__:null,infoSvg:b4});const C4=z`<svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M15.0162 11.6312L9.55059 2.13937C9.39228 1.86862 9.16584 1.64405 8.8938 1.48798C8.62176 1.33192 8.3136 1.2498 7.99997 1.2498C7.68634 1.2498 7.37817 1.33192 7.10613 1.48798C6.83409 1.64405 6.60765 1.86862 6.44934 2.13937L0.983716 11.6312C0.830104 11.894 0.749146 12.1928 0.749146 12.4972C0.749146 12.8015 0.830104 13.1004 0.983716 13.3631C1.14027 13.6352 1.3664 13.8608 1.63889 14.0166C1.91139 14.1725 2.22044 14.253 2.53434 14.25H13.4656C13.7793 14.2528 14.0881 14.1721 14.3603 14.0163C14.6326 13.8604 14.8585 13.635 15.015 13.3631C15.1688 13.1005 15.2499 12.8017 15.2502 12.4973C15.2504 12.193 15.1696 11.8941 15.0162 11.6312ZM13.7162 12.6125C13.6908 12.6558 13.6541 12.6914 13.6101 12.7157C13.5661 12.7399 13.5164 12.7517 13.4662 12.75H2.53434C2.48415 12.7517 2.43442 12.7399 2.39042 12.7157C2.34641 12.6914 2.30976 12.6558 2.28434 12.6125C2.26278 12.5774 2.25137 12.5371 2.25137 12.4959C2.25137 12.4548 2.26278 12.4144 2.28434 12.3794L7.74997 2.88749C7.77703 2.84583 7.81408 2.8116 7.85774 2.7879C7.9014 2.7642 7.95029 2.75178 7.99997 2.75178C8.04964 2.75178 8.09854 2.7642 8.1422 2.7879C8.18586 2.8116 8.2229 2.84583 8.24997 2.88749L13.715 12.3794C13.7367 12.4143 13.7483 12.4546 13.7486 12.4958C13.7488 12.5369 13.7376 12.5773 13.7162 12.6125ZM7.24997 8.49999V6.49999C7.24997 6.30108 7.32898 6.11031 7.46964 5.96966C7.61029 5.82901 7.80105 5.74999 7.99997 5.74999C8.19888 5.74999 8.38964 5.82901 8.5303 5.96966C8.67095 6.11031 8.74997 6.30108 8.74997 6.49999V8.49999C8.74997 8.6989 8.67095 8.88967 8.5303 9.03032C8.38964 9.17097 8.19888 9.24999 7.99997 9.24999C7.80105 9.24999 7.61029 9.17097 7.46964 9.03032C7.32898 8.88967 7.24997 8.6989 7.24997 8.49999ZM8.99997 11C8.99997 11.1978 8.94132 11.3911 8.83144 11.5556C8.72155 11.72 8.56538 11.8482 8.38265 11.9239C8.19992 11.9996 7.99886 12.0194 7.80488 11.9808C7.6109 11.9422 7.43271 11.847 7.29286 11.7071C7.15301 11.5672 7.05777 11.3891 7.01918 11.1951C6.9806 11.0011 7.0004 10.8 7.07609 10.6173C7.15177 10.4346 7.27995 10.2784 7.4444 10.1685C7.60885 10.0586 7.80219 9.99999 7.99997 9.99999C8.26518 9.99999 8.51954 10.1053 8.70707 10.2929C8.89461 10.4804 8.99997 10.7348 8.99997 11Z" fill="currentColor"/>
</svg>
`;var x4=Object.freeze({__proto__:null,exclamationTriangleSvg:C4});const E4=z`<svg width="60" height="16" viewBox="0 0 60 16" fill="none"">
  <path d="M9.3335 4.66667C9.3335 2.08934 11.4229 0 14.0002 0H20.6669C23.2442 0 25.3335 2.08934 25.3335 4.66667V11.3333C25.3335 13.9106 23.2442 16 20.6669 16H14.0002C11.4229 16 9.3335 13.9106 9.3335 11.3333V4.66667Z" fill="#363636"/>
  <path d="M15.6055 11.0003L17.9448 4.66699H18.6316L16.2923 11.0003H15.6055Z" fill="#F6F6F6"/>
  <path d="M0 4.33333C0 1.9401 1.9401 0 4.33333 0C6.72657 0 8.66669 1.9401 8.66669 4.33333V11.6667C8.66669 14.0599 6.72657 16 4.33333 16C1.9401 16 0 14.0599 0 11.6667V4.33333Z" fill="#363636"/>
  <path d="M3.9165 9.99934V9.16602H4.74983V9.99934H3.9165Z" fill="#F6F6F6"/>
  <path d="M26 8C26 3.58172 29.3517 0 33.4863 0H52.5137C56.6483 0 60 3.58172 60 8C60 12.4183 56.6483 16 52.5137 16H33.4863C29.3517 16 26 12.4183 26 8Z" fill="#363636"/>
  <path d="M49.3687 9.95834V6.26232H50.0213V6.81966C50.256 6.40899 50.7326 6.16699 51.2606 6.16699C52.0599 6.16699 52.6173 6.67299 52.6173 7.65566V9.95834H51.972V7.69234C51.972 7.04696 51.6053 6.70966 51.07 6.70966C50.4906 6.70966 50.0213 7.17168 50.0213 7.82433V9.95834H49.3687Z" fill="#F6F6F6"/>
  <path d="M45.2538 9.95773L44.5718 6.26172H45.1877L45.6717 9.31242L46.3098 7.30306H46.9184L47.5491 9.29041L48.0404 6.26172H48.6564L47.9744 9.95773H47.2411L46.6178 8.03641L45.9871 9.95773H45.2538Z" fill="#F6F6F6"/>
  <path d="M42.3709 10.0536C41.2489 10.0536 40.5889 9.21765 40.5889 8.1103C40.5889 7.01035 41.2489 6.16699 42.3709 6.16699C43.4929 6.16699 44.1529 7.01035 44.1529 8.1103C44.1529 9.21765 43.4929 10.0536 42.3709 10.0536ZM42.3709 9.51096C43.1775 9.51096 43.4856 8.82164 43.4856 8.10296C43.4856 7.39163 43.1775 6.70966 42.3709 6.70966C41.5642 6.70966 41.2562 7.39163 41.2562 8.10296C41.2562 8.82164 41.5642 9.51096 42.3709 9.51096Z" fill="#F6F6F6"/>
  <path d="M38.2805 10.0536C37.1952 10.0536 36.5132 9.22499 36.5132 8.1103C36.5132 7.00302 37.1952 6.16699 38.2805 6.16699C39.1972 6.16699 40.0038 6.68766 39.9159 8.27896H37.1805C37.2319 8.96103 37.5472 9.5183 38.2805 9.5183C38.7718 9.5183 39.0945 9.21765 39.2045 8.87299H39.8499C39.7472 9.48903 39.1679 10.0536 38.2805 10.0536ZM37.1952 7.78765H39.2852C39.2338 7.04696 38.8892 6.70232 38.2805 6.70232C37.6132 6.70232 37.2832 7.18635 37.1952 7.78765Z" fill="#F6F6F6"/>
  <path d="M33.3828 9.95773V6.26172H34.0501V6.88506C34.2848 6.47439 34.6882 6.26172 35.1061 6.26172H35.9935V6.88506H35.0548C34.4682 6.88506 34.0501 7.26638 34.0501 8.00706V9.95773H33.3828Z" fill="#F6F6F6"/>
</svg>`;var A4=Object.freeze({__proto__:null,reownSvg:E4});export{U4 as EthereumProvider,Y1 as OPTIONAL_EVENTS,K1 as OPTIONAL_METHODS,oc as REQUIRED_EVENTS,sc as REQUIRED_METHODS,Tc as default};
