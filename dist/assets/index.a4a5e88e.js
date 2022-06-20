var el=Object.defineProperty,tl=Object.defineProperties;var nl=Object.getOwnPropertyDescriptors;var ps=Object.getOwnPropertySymbols;var il=Object.prototype.hasOwnProperty,sl=Object.prototype.propertyIsEnumerable;var gs=(e,t,n)=>t in e?el(e,t,{enumerable:!0,configurable:!0,writable:!0,value:n}):e[t]=n,ys=(e,t)=>{for(var n in t||(t={}))il.call(t,n)&&gs(e,n,t[n]);if(ps)for(var n of ps(t))sl.call(t,n)&&gs(e,n,t[n]);return e},_s=(e,t)=>tl(e,nl(t));const rl=function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const s of document.querySelectorAll('link[rel="modulepreload"]'))i(s);new MutationObserver(s=>{for(const r of s)if(r.type==="childList")for(const o of r.addedNodes)o.tagName==="LINK"&&o.rel==="modulepreload"&&i(o)}).observe(document,{childList:!0,subtree:!0});function n(s){const r={};return s.integrity&&(r.integrity=s.integrity),s.referrerpolicy&&(r.referrerPolicy=s.referrerpolicy),s.crossorigin==="use-credentials"?r.credentials="include":s.crossorigin==="anonymous"?r.credentials="omit":r.credentials="same-origin",r}function i(s){if(s.ep)return;s.ep=!0;const r=n(s);fetch(s.href,r)}};rl();function Ui(e,t){const n=Object.create(null),i=e.split(",");for(let s=0;s<i.length;s++)n[i[s]]=!0;return t?s=>!!n[s.toLowerCase()]:s=>!!n[s]}const ol="itemscope,allowfullscreen,formnovalidate,ismap,nomodule,novalidate,readonly",ll=Ui(ol);function Er(e){return!!e||e===""}function Fi(e){if(z(e)){const t={};for(let n=0;n<e.length;n++){const i=e[n],s=ue(i)?dl(i):Fi(i);if(s)for(const r in s)t[r]=s[r]}return t}else{if(ue(e))return e;if(le(e))return e}}const al=/;(?![^(]*\))/g,cl=/:(.+)/;function dl(e){const t={};return e.split(al).forEach(n=>{if(n){const i=n.split(cl);i.length>1&&(t[i[0].trim()]=i[1].trim())}}),t}function Hi(e){let t="";if(ue(e))t=e;else if(z(e))for(let n=0;n<e.length;n++){const i=Hi(e[n]);i&&(t+=i+" ")}else if(le(e))for(const n in e)e[n]&&(t+=n+" ");return t.trim()}function ul(e,t){if(e.length!==t.length)return!1;let n=!0;for(let i=0;n&&i<e.length;i++)n=Nt(e[i],t[i]);return n}function Nt(e,t){if(e===t)return!0;let n=bs(e),i=bs(t);if(n||i)return n&&i?e.getTime()===t.getTime():!1;if(n=ln(e),i=ln(t),n||i)return e===t;if(n=z(e),i=z(t),n||i)return n&&i?ul(e,t):!1;if(n=le(e),i=le(t),n||i){if(!n||!i)return!1;const s=Object.keys(e).length,r=Object.keys(t).length;if(s!==r)return!1;for(const o in e){const l=e.hasOwnProperty(o),a=t.hasOwnProperty(o);if(l&&!a||!l&&a||!Nt(e[o],t[o]))return!1}}return String(e)===String(t)}function fl(e,t){return e.findIndex(n=>Nt(n,t))}const hl=e=>ue(e)?e:e==null?"":z(e)||le(e)&&(e.toString===Cr||!H(e.toString))?JSON.stringify(e,Rr,2):String(e),Rr=(e,t)=>t&&t.__v_isRef?Rr(e,t.value):Dt(t)?{[`Map(${t.size})`]:[...t.entries()].reduce((n,[i,s])=>(n[`${i} =>`]=s,n),{})}:Qn(t)?{[`Set(${t.size})`]:[...t.values()]}:le(t)&&!z(t)&&!Ar(t)?String(t):t,ee={},St=[],De=()=>{},ml=()=>!1,pl=/^on[^a-z]/,jn=e=>pl.test(e),ji=e=>e.startsWith("onUpdate:"),_e=Object.assign,Qi=(e,t)=>{const n=e.indexOf(t);n>-1&&e.splice(n,1)},gl=Object.prototype.hasOwnProperty,Q=(e,t)=>gl.call(e,t),z=Array.isArray,Dt=e=>_n(e)==="[object Map]",Qn=e=>_n(e)==="[object Set]",bs=e=>_n(e)==="[object Date]",H=e=>typeof e=="function",ue=e=>typeof e=="string",ln=e=>typeof e=="symbol",le=e=>e!==null&&typeof e=="object",Ir=e=>le(e)&&H(e.then)&&H(e.catch),Cr=Object.prototype.toString,_n=e=>Cr.call(e),yl=e=>_n(e).slice(8,-1),Ar=e=>_n(e)==="[object Object]",Vi=e=>ue(e)&&e!=="NaN"&&e[0]!=="-"&&""+parseInt(e,10)===e,An=Ui(",key,ref,ref_for,ref_key,onVnodeBeforeMount,onVnodeMounted,onVnodeBeforeUpdate,onVnodeUpdated,onVnodeBeforeUnmount,onVnodeUnmounted"),Vn=e=>{const t=Object.create(null);return n=>t[n]||(t[n]=e(n))},_l=/-(\w)/g,zt=Vn(e=>e.replace(_l,(t,n)=>n?n.toUpperCase():"")),bl=/\B([A-Z])/g,jt=Vn(e=>e.replace(bl,"-$1").toLowerCase()),Or=Vn(e=>e.charAt(0).toUpperCase()+e.slice(1)),ii=Vn(e=>e?`on${Or(e)}`:""),an=(e,t)=>!Object.is(e,t),On=(e,t)=>{for(let n=0;n<e.length;n++)e[n](t)},$n=(e,t,n)=>{Object.defineProperty(e,t,{configurable:!0,enumerable:!1,value:n})},Mn=e=>{const t=parseFloat(e);return isNaN(t)?e:t};let vs;const vl=()=>vs||(vs=typeof globalThis!="undefined"?globalThis:typeof self!="undefined"?self:typeof window!="undefined"?window:typeof global!="undefined"?global:{});let Ue;class wl{constructor(t=!1){this.active=!0,this.effects=[],this.cleanups=[],!t&&Ue&&(this.parent=Ue,this.index=(Ue.scopes||(Ue.scopes=[])).push(this)-1)}run(t){if(this.active){const n=Ue;try{return Ue=this,t()}finally{Ue=n}}}on(){Ue=this}off(){Ue=this.parent}stop(t){if(this.active){let n,i;for(n=0,i=this.effects.length;n<i;n++)this.effects[n].stop();for(n=0,i=this.cleanups.length;n<i;n++)this.cleanups[n]();if(this.scopes)for(n=0,i=this.scopes.length;n<i;n++)this.scopes[n].stop(!0);if(this.parent&&!t){const s=this.parent.scopes.pop();s&&s!==this&&(this.parent.scopes[this.index]=s,s.index=this.index)}this.active=!1}}}function xl(e,t=Ue){t&&t.active&&t.effects.push(e)}const Wi=e=>{const t=new Set(e);return t.w=0,t.n=0,t},Tr=e=>(e.w&dt)>0,kr=e=>(e.n&dt)>0,El=({deps:e})=>{if(e.length)for(let t=0;t<e.length;t++)e[t].w|=dt},Rl=e=>{const{deps:t}=e;if(t.length){let n=0;for(let i=0;i<t.length;i++){const s=t[i];Tr(s)&&!kr(s)?s.delete(e):t[n++]=s,s.w&=~dt,s.n&=~dt}t.length=n}},gi=new WeakMap;let Jt=0,dt=1;const yi=30;let Pe;const yt=Symbol(""),_i=Symbol("");class Ki{constructor(t,n=null,i){this.fn=t,this.scheduler=n,this.active=!0,this.deps=[],this.parent=void 0,xl(this,i)}run(){if(!this.active)return this.fn();let t=Pe,n=ot;for(;t;){if(t===this)return;t=t.parent}try{return this.parent=Pe,Pe=this,ot=!0,dt=1<<++Jt,Jt<=yi?El(this):ws(this),this.fn()}finally{Jt<=yi&&Rl(this),dt=1<<--Jt,Pe=this.parent,ot=n,this.parent=void 0,this.deferStop&&this.stop()}}stop(){Pe===this?this.deferStop=!0:this.active&&(ws(this),this.onStop&&this.onStop(),this.active=!1)}}function ws(e){const{deps:t}=e;if(t.length){for(let n=0;n<t.length;n++)t[n].delete(e);t.length=0}}let ot=!0;const Pr=[];function Qt(){Pr.push(ot),ot=!1}function Vt(){const e=Pr.pop();ot=e===void 0?!0:e}function Ie(e,t,n){if(ot&&Pe){let i=gi.get(e);i||gi.set(e,i=new Map);let s=i.get(n);s||i.set(n,s=Wi()),Sr(s)}}function Sr(e,t){let n=!1;Jt<=yi?kr(e)||(e.n|=dt,n=!Tr(e)):n=!e.has(Pe),n&&(e.add(Pe),Pe.deps.push(e))}function qe(e,t,n,i,s,r){const o=gi.get(e);if(!o)return;let l=[];if(t==="clear")l=[...o.values()];else if(n==="length"&&z(e))o.forEach((a,u)=>{(u==="length"||u>=i)&&l.push(a)});else switch(n!==void 0&&l.push(o.get(n)),t){case"add":z(e)?Vi(n)&&l.push(o.get("length")):(l.push(o.get(yt)),Dt(e)&&l.push(o.get(_i)));break;case"delete":z(e)||(l.push(o.get(yt)),Dt(e)&&l.push(o.get(_i)));break;case"set":Dt(e)&&l.push(o.get(yt));break}if(l.length===1)l[0]&&bi(l[0]);else{const a=[];for(const u of l)u&&a.push(...u);bi(Wi(a))}}function bi(e,t){const n=z(e)?e:[...e];for(const i of n)i.computed&&xs(i);for(const i of n)i.computed||xs(i)}function xs(e,t){(e!==Pe||e.allowRecurse)&&(e.scheduler?e.scheduler():e.run())}const Il=Ui("__proto__,__v_isRef,__isVue"),Dr=new Set(Object.getOwnPropertyNames(Symbol).filter(e=>e!=="arguments"&&e!=="caller").map(e=>Symbol[e]).filter(ln)),Cl=Yi(),Al=Yi(!1,!0),Ol=Yi(!0),Es=Tl();function Tl(){const e={};return["includes","indexOf","lastIndexOf"].forEach(t=>{e[t]=function(...n){const i=K(this);for(let r=0,o=this.length;r<o;r++)Ie(i,"get",r+"");const s=i[t](...n);return s===-1||s===!1?i[t](...n.map(K)):s}}),["push","pop","shift","unshift","splice"].forEach(t=>{e[t]=function(...n){Qt();const i=K(this)[t].apply(this,n);return Vt(),i}}),e}function Yi(e=!1,t=!1){return function(i,s,r){if(s==="__v_isReactive")return!e;if(s==="__v_isReadonly")return e;if(s==="__v_isShallow")return t;if(s==="__v_raw"&&r===(e?t?Vl:Br:t?zr:Nr).get(i))return i;const o=z(i);if(!e&&o&&Q(Es,s))return Reflect.get(Es,s,r);const l=Reflect.get(i,s,r);return(ln(s)?Dr.has(s):Il(s))||(e||Ie(i,"get",s),t)?l:me(l)?o&&Vi(s)?l:l.value:le(l)?e?Lr(l):bn(l):l}}const kl=$r(),Pl=$r(!0);function $r(e=!1){return function(n,i,s,r){let o=n[i];if(cn(o)&&me(o)&&!me(s))return!1;if(!e&&!cn(s)&&(vi(s)||(s=K(s),o=K(o)),!z(n)&&me(o)&&!me(s)))return o.value=s,!0;const l=z(n)&&Vi(i)?Number(i)<n.length:Q(n,i),a=Reflect.set(n,i,s,r);return n===K(r)&&(l?an(s,o)&&qe(n,"set",i,s):qe(n,"add",i,s)),a}}function Sl(e,t){const n=Q(e,t);e[t];const i=Reflect.deleteProperty(e,t);return i&&n&&qe(e,"delete",t,void 0),i}function Dl(e,t){const n=Reflect.has(e,t);return(!ln(t)||!Dr.has(t))&&Ie(e,"has",t),n}function $l(e){return Ie(e,"iterate",z(e)?"length":yt),Reflect.ownKeys(e)}const Mr={get:Cl,set:kl,deleteProperty:Sl,has:Dl,ownKeys:$l},Ml={get:Ol,set(e,t){return!0},deleteProperty(e,t){return!0}},Nl=_e({},Mr,{get:Al,set:Pl}),qi=e=>e,Wn=e=>Reflect.getPrototypeOf(e);function vn(e,t,n=!1,i=!1){e=e.__v_raw;const s=K(e),r=K(t);n||(t!==r&&Ie(s,"get",t),Ie(s,"get",r));const{has:o}=Wn(s),l=i?qi:n?Xi:dn;if(o.call(s,t))return l(e.get(t));if(o.call(s,r))return l(e.get(r));e!==s&&e.get(t)}function wn(e,t=!1){const n=this.__v_raw,i=K(n),s=K(e);return t||(e!==s&&Ie(i,"has",e),Ie(i,"has",s)),e===s?n.has(e):n.has(e)||n.has(s)}function xn(e,t=!1){return e=e.__v_raw,!t&&Ie(K(e),"iterate",yt),Reflect.get(e,"size",e)}function Rs(e){e=K(e);const t=K(this);return Wn(t).has.call(t,e)||(t.add(e),qe(t,"add",e,e)),this}function Is(e,t){t=K(t);const n=K(this),{has:i,get:s}=Wn(n);let r=i.call(n,e);r||(e=K(e),r=i.call(n,e));const o=s.call(n,e);return n.set(e,t),r?an(t,o)&&qe(n,"set",e,t):qe(n,"add",e,t),this}function Cs(e){const t=K(this),{has:n,get:i}=Wn(t);let s=n.call(t,e);s||(e=K(e),s=n.call(t,e)),i&&i.call(t,e);const r=t.delete(e);return s&&qe(t,"delete",e,void 0),r}function As(){const e=K(this),t=e.size!==0,n=e.clear();return t&&qe(e,"clear",void 0,void 0),n}function En(e,t){return function(i,s){const r=this,o=r.__v_raw,l=K(o),a=t?qi:e?Xi:dn;return!e&&Ie(l,"iterate",yt),o.forEach((u,f)=>i.call(s,a(u),a(f),r))}}function Rn(e,t,n){return function(...i){const s=this.__v_raw,r=K(s),o=Dt(r),l=e==="entries"||e===Symbol.iterator&&o,a=e==="keys"&&o,u=s[e](...i),f=n?qi:t?Xi:dn;return!t&&Ie(r,"iterate",a?_i:yt),{next(){const{value:p,done:g}=u.next();return g?{value:p,done:g}:{value:l?[f(p[0]),f(p[1])]:f(p),done:g}},[Symbol.iterator](){return this}}}}function Xe(e){return function(...t){return e==="delete"?!1:this}}function zl(){const e={get(r){return vn(this,r)},get size(){return xn(this)},has:wn,add:Rs,set:Is,delete:Cs,clear:As,forEach:En(!1,!1)},t={get(r){return vn(this,r,!1,!0)},get size(){return xn(this)},has:wn,add:Rs,set:Is,delete:Cs,clear:As,forEach:En(!1,!0)},n={get(r){return vn(this,r,!0)},get size(){return xn(this,!0)},has(r){return wn.call(this,r,!0)},add:Xe("add"),set:Xe("set"),delete:Xe("delete"),clear:Xe("clear"),forEach:En(!0,!1)},i={get(r){return vn(this,r,!0,!0)},get size(){return xn(this,!0)},has(r){return wn.call(this,r,!0)},add:Xe("add"),set:Xe("set"),delete:Xe("delete"),clear:Xe("clear"),forEach:En(!0,!0)};return["keys","values","entries",Symbol.iterator].forEach(r=>{e[r]=Rn(r,!1,!1),n[r]=Rn(r,!0,!1),t[r]=Rn(r,!1,!0),i[r]=Rn(r,!0,!0)}),[e,n,t,i]}const[Bl,Ll,Ul,Fl]=zl();function Gi(e,t){const n=t?e?Fl:Ul:e?Ll:Bl;return(i,s,r)=>s==="__v_isReactive"?!e:s==="__v_isReadonly"?e:s==="__v_raw"?i:Reflect.get(Q(n,s)&&s in i?n:i,s,r)}const Hl={get:Gi(!1,!1)},jl={get:Gi(!1,!0)},Ql={get:Gi(!0,!1)},Nr=new WeakMap,zr=new WeakMap,Br=new WeakMap,Vl=new WeakMap;function Wl(e){switch(e){case"Object":case"Array":return 1;case"Map":case"Set":case"WeakMap":case"WeakSet":return 2;default:return 0}}function Kl(e){return e.__v_skip||!Object.isExtensible(e)?0:Wl(yl(e))}function bn(e){return cn(e)?e:Ji(e,!1,Mr,Hl,Nr)}function Yl(e){return Ji(e,!1,Nl,jl,zr)}function Lr(e){return Ji(e,!0,Ml,Ql,Br)}function Ji(e,t,n,i,s){if(!le(e)||e.__v_raw&&!(t&&e.__v_isReactive))return e;const r=s.get(e);if(r)return r;const o=Kl(e);if(o===0)return e;const l=new Proxy(e,o===2?i:n);return s.set(e,l),l}function $t(e){return cn(e)?$t(e.__v_raw):!!(e&&e.__v_isReactive)}function cn(e){return!!(e&&e.__v_isReadonly)}function vi(e){return!!(e&&e.__v_isShallow)}function Ur(e){return $t(e)||cn(e)}function K(e){const t=e&&e.__v_raw;return t?K(t):e}function Fr(e){return $n(e,"__v_skip",!0),e}const dn=e=>le(e)?bn(e):e,Xi=e=>le(e)?Lr(e):e;function Hr(e){ot&&Pe&&(e=K(e),Sr(e.dep||(e.dep=Wi())))}function jr(e,t){e=K(e),e.dep&&bi(e.dep)}function me(e){return!!(e&&e.__v_isRef===!0)}function ql(e){return Qr(e,!1)}function Gl(e){return Qr(e,!0)}function Qr(e,t){return me(e)?e:new Jl(e,t)}class Jl{constructor(t,n){this.__v_isShallow=n,this.dep=void 0,this.__v_isRef=!0,this._rawValue=n?t:K(t),this._value=n?t:dn(t)}get value(){return Hr(this),this._value}set value(t){t=this.__v_isShallow?t:K(t),an(t,this._rawValue)&&(this._rawValue=t,this._value=this.__v_isShallow?t:dn(t),jr(this))}}function Zt(e){return me(e)?e.value:e}const Xl={get:(e,t,n)=>Zt(Reflect.get(e,t,n)),set:(e,t,n,i)=>{const s=e[t];return me(s)&&!me(n)?(s.value=n,!0):Reflect.set(e,t,n,i)}};function Vr(e){return $t(e)?e:new Proxy(e,Xl)}class Zl{constructor(t,n,i,s){this._setter=n,this.dep=void 0,this.__v_isRef=!0,this._dirty=!0,this.effect=new Ki(t,()=>{this._dirty||(this._dirty=!0,jr(this))}),this.effect.computed=this,this.effect.active=this._cacheable=!s,this.__v_isReadonly=i}get value(){const t=K(this);return Hr(t),(t._dirty||!t._cacheable)&&(t._dirty=!1,t._value=t.effect.run()),t._value}set value(t){this._setter(t)}}function ea(e,t,n=!1){let i,s;const r=H(e);return r?(i=e,s=De):(i=e.get,s=e.set),new Zl(i,s,r||!s,n)}function lt(e,t,n,i){let s;try{s=i?e(...i):e()}catch(r){Kn(r,t,n)}return s}function $e(e,t,n,i){if(H(e)){const r=lt(e,t,n,i);return r&&Ir(r)&&r.catch(o=>{Kn(o,t,n)}),r}const s=[];for(let r=0;r<e.length;r++)s.push($e(e[r],t,n,i));return s}function Kn(e,t,n,i=!0){const s=t?t.vnode:null;if(t){let r=t.parent;const o=t.proxy,l=n;for(;r;){const u=r.ec;if(u){for(let f=0;f<u.length;f++)if(u[f](e,o,l)===!1)return}r=r.parent}const a=t.appContext.config.errorHandler;if(a){lt(a,null,10,[e,o,l]);return}}ta(e,n,s,i)}function ta(e,t,n,i=!0){console.error(e)}let Nn=!1,wi=!1;const Ee=[];let Ye=0;const en=[];let Xt=null,Tt=0;const tn=[];let tt=null,kt=0;const Wr=Promise.resolve();let Zi=null,xi=null;function Kr(e){const t=Zi||Wr;return e?t.then(this?e.bind(this):e):t}function na(e){let t=Ye+1,n=Ee.length;for(;t<n;){const i=t+n>>>1;un(Ee[i])<e?t=i+1:n=i}return t}function Yr(e){(!Ee.length||!Ee.includes(e,Nn&&e.allowRecurse?Ye+1:Ye))&&e!==xi&&(e.id==null?Ee.push(e):Ee.splice(na(e.id),0,e),qr())}function qr(){!Nn&&!wi&&(wi=!0,Zi=Wr.then(Xr))}function ia(e){const t=Ee.indexOf(e);t>Ye&&Ee.splice(t,1)}function Gr(e,t,n,i){z(e)?n.push(...e):(!t||!t.includes(e,e.allowRecurse?i+1:i))&&n.push(e),qr()}function sa(e){Gr(e,Xt,en,Tt)}function ra(e){Gr(e,tt,tn,kt)}function Yn(e,t=null){if(en.length){for(xi=t,Xt=[...new Set(en)],en.length=0,Tt=0;Tt<Xt.length;Tt++)Xt[Tt]();Xt=null,Tt=0,xi=null,Yn(e,t)}}function Jr(e){if(Yn(),tn.length){const t=[...new Set(tn)];if(tn.length=0,tt){tt.push(...t);return}for(tt=t,tt.sort((n,i)=>un(n)-un(i)),kt=0;kt<tt.length;kt++)tt[kt]();tt=null,kt=0}}const un=e=>e.id==null?1/0:e.id;function Xr(e){wi=!1,Nn=!0,Yn(e),Ee.sort((n,i)=>un(n)-un(i));const t=De;try{for(Ye=0;Ye<Ee.length;Ye++){const n=Ee[Ye];n&&n.active!==!1&&lt(n,null,14)}}finally{Ye=0,Ee.length=0,Jr(),Nn=!1,Zi=null,(Ee.length||en.length||tn.length)&&Xr(e)}}function oa(e,t,...n){if(e.isUnmounted)return;const i=e.vnode.props||ee;let s=n;const r=t.startsWith("update:"),o=r&&t.slice(7);if(o&&o in i){const f=`${o==="modelValue"?"model":o}Modifiers`,{number:p,trim:g}=i[f]||ee;g&&(s=n.map(c=>c.trim())),p&&(s=n.map(Mn))}let l,a=i[l=ii(t)]||i[l=ii(zt(t))];!a&&r&&(a=i[l=ii(jt(t))]),a&&$e(a,e,6,s);const u=i[l+"Once"];if(u){if(!e.emitted)e.emitted={};else if(e.emitted[l])return;e.emitted[l]=!0,$e(u,e,6,s)}}function Zr(e,t,n=!1){const i=t.emitsCache,s=i.get(e);if(s!==void 0)return s;const r=e.emits;let o={},l=!1;if(!H(e)){const a=u=>{const f=Zr(u,t,!0);f&&(l=!0,_e(o,f))};!n&&t.mixins.length&&t.mixins.forEach(a),e.extends&&a(e.extends),e.mixins&&e.mixins.forEach(a)}return!r&&!l?(i.set(e,null),null):(z(r)?r.forEach(a=>o[a]=null):_e(o,r),i.set(e,o),o)}function qn(e,t){return!e||!jn(t)?!1:(t=t.slice(2).replace(/Once$/,""),Q(e,t[0].toLowerCase()+t.slice(1))||Q(e,jt(t))||Q(e,t))}let je=null,eo=null;function zn(e){const t=je;return je=e,eo=e&&e.type.__scopeId||null,t}function la(e,t=je,n){if(!t||e._n)return e;const i=(...s)=>{i._d&&zs(-1);const r=zn(t),o=e(...s);return zn(r),i._d&&zs(1),o};return i._n=!0,i._c=!0,i._d=!0,i}function si(e){const{type:t,vnode:n,proxy:i,withProxy:s,props:r,propsOptions:[o],slots:l,attrs:a,emit:u,render:f,renderCache:p,data:g,setupState:c,ctx:R,inheritAttrs:S}=e;let A,T;const N=zn(e);try{if(n.shapeFlag&4){const L=s||i;A=Fe(f.call(L,L,p,r,c,g,R)),T=a}else{const L=t;A=Fe(L.length>1?L(r,{attrs:a,slots:l,emit:u}):L(r,null)),T=t.props?a:aa(a)}}catch(L){nn.length=0,Kn(L,e,1),A=ve(vt)}let U=A;if(T&&S!==!1){const L=Object.keys(T),{shapeFlag:ae}=U;L.length&&ae&7&&(o&&L.some(ji)&&(T=ca(T,o)),U=Bt(U,T))}return n.dirs&&(U=Bt(U),U.dirs=U.dirs?U.dirs.concat(n.dirs):n.dirs),n.transition&&(U.transition=n.transition),A=U,zn(N),A}const aa=e=>{let t;for(const n in e)(n==="class"||n==="style"||jn(n))&&((t||(t={}))[n]=e[n]);return t},ca=(e,t)=>{const n={};for(const i in e)(!ji(i)||!(i.slice(9)in t))&&(n[i]=e[i]);return n};function da(e,t,n){const{props:i,children:s,component:r}=e,{props:o,children:l,patchFlag:a}=t,u=r.emitsOptions;if(t.dirs||t.transition)return!0;if(n&&a>=0){if(a&1024)return!0;if(a&16)return i?Os(i,o,u):!!o;if(a&8){const f=t.dynamicProps;for(let p=0;p<f.length;p++){const g=f[p];if(o[g]!==i[g]&&!qn(u,g))return!0}}}else return(s||l)&&(!l||!l.$stable)?!0:i===o?!1:i?o?Os(i,o,u):!0:!!o;return!1}function Os(e,t,n){const i=Object.keys(t);if(i.length!==Object.keys(e).length)return!0;for(let s=0;s<i.length;s++){const r=i[s];if(t[r]!==e[r]&&!qn(n,r))return!0}return!1}function ua({vnode:e,parent:t},n){for(;t&&t.subTree===e;)(e=t.vnode).el=n,t=t.parent}const fa=e=>e.__isSuspense;function ha(e,t){t&&t.pendingBranch?z(e)?t.effects.push(...e):t.effects.push(e):ra(e)}function Tn(e,t){if(he){let n=he.provides;const i=he.parent&&he.parent.provides;i===n&&(n=he.provides=Object.create(i)),n[e]=t}}function at(e,t,n=!1){const i=he||je;if(i){const s=i.parent==null?i.vnode.appContext&&i.vnode.appContext.provides:i.parent.provides;if(s&&e in s)return s[e];if(arguments.length>1)return n&&H(t)?t.call(i.proxy):t}}const Ts={};function kn(e,t,n){return to(e,t,n)}function to(e,t,{immediate:n,deep:i,flush:s,onTrack:r,onTrigger:o}=ee){const l=he;let a,u=!1,f=!1;if(me(e)?(a=()=>e.value,u=vi(e)):$t(e)?(a=()=>e,i=!0):z(e)?(f=!0,u=e.some(T=>$t(T)||vi(T)),a=()=>e.map(T=>{if(me(T))return T.value;if($t(T))return gt(T);if(H(T))return lt(T,l,2)})):H(e)?t?a=()=>lt(e,l,2):a=()=>{if(!(l&&l.isUnmounted))return p&&p(),$e(e,l,3,[g])}:a=De,t&&i){const T=a;a=()=>gt(T())}let p,g=T=>{p=A.onStop=()=>{lt(T,l,4)}};if(hn)return g=De,t?n&&$e(t,l,3,[a(),f?[]:void 0,g]):a(),De;let c=f?[]:Ts;const R=()=>{if(!!A.active)if(t){const T=A.run();(i||u||(f?T.some((N,U)=>an(N,c[U])):an(T,c)))&&(p&&p(),$e(t,l,3,[T,c===Ts?void 0:c,g]),c=T)}else A.run()};R.allowRecurse=!!t;let S;s==="sync"?S=R:s==="post"?S=()=>be(R,l&&l.suspense):S=()=>sa(R);const A=new Ki(a,S);return t?n?R():c=A.run():s==="post"?be(A.run.bind(A),l&&l.suspense):A.run(),()=>{A.stop(),l&&l.scope&&Qi(l.scope.effects,A)}}function ma(e,t,n){const i=this.proxy,s=ue(e)?e.includes(".")?no(i,e):()=>i[e]:e.bind(i,i);let r;H(t)?r=t:(r=t.handler,n=t);const o=he;Lt(this);const l=to(s,r.bind(i),n);return o?Lt(o):_t(),l}function no(e,t){const n=t.split(".");return()=>{let i=e;for(let s=0;s<n.length&&i;s++)i=i[n[s]];return i}}function gt(e,t){if(!le(e)||e.__v_skip||(t=t||new Set,t.has(e)))return e;if(t.add(e),me(e))gt(e.value,t);else if(z(e))for(let n=0;n<e.length;n++)gt(e[n],t);else if(Qn(e)||Dt(e))e.forEach(n=>{gt(n,t)});else if(Ar(e))for(const n in e)gt(e[n],t);return e}function es(e){return H(e)?{setup:e,name:e.name}:e}const Pn=e=>!!e.type.__asyncLoader,io=e=>e.type.__isKeepAlive;function pa(e,t){so(e,"a",t)}function ga(e,t){so(e,"da",t)}function so(e,t,n=he){const i=e.__wdc||(e.__wdc=()=>{let s=n;for(;s;){if(s.isDeactivated)return;s=s.parent}return e()});if(Gn(t,i,n),n){let s=n.parent;for(;s&&s.parent;)io(s.parent.vnode)&&ya(i,t,n,s),s=s.parent}}function ya(e,t,n,i){const s=Gn(t,e,i,!0);ro(()=>{Qi(i[t],s)},n)}function Gn(e,t,n=he,i=!1){if(n){const s=n[e]||(n[e]=[]),r=t.__weh||(t.__weh=(...o)=>{if(n.isUnmounted)return;Qt(),Lt(n);const l=$e(t,n,e,o);return _t(),Vt(),l});return i?s.unshift(r):s.push(r),r}}const Ge=e=>(t,n=he)=>(!hn||e==="sp")&&Gn(e,t,n),_a=Ge("bm"),ba=Ge("m"),va=Ge("bu"),wa=Ge("u"),xa=Ge("bum"),ro=Ge("um"),Ea=Ge("sp"),Ra=Ge("rtg"),Ia=Ge("rtc");function Ca(e,t=he){Gn("ec",e,t)}function W(e,t){const n=je;if(n===null)return e;const i=Zn(n)||n.proxy,s=e.dirs||(e.dirs=[]);for(let r=0;r<t.length;r++){let[o,l,a,u=ee]=t[r];H(o)&&(o={mounted:o,updated:o}),o.deep&&gt(l),s.push({dir:o,instance:i,value:l,oldValue:void 0,arg:a,modifiers:u})}return e}function ut(e,t,n,i){const s=e.dirs,r=t&&t.dirs;for(let o=0;o<s.length;o++){const l=s[o];r&&(l.oldValue=r[o].value);let a=l.dir[i];a&&(Qt(),$e(a,n,8,[e.el,l,e,t]),Vt())}}const Aa=Symbol();function ks(e,t,n,i){let s;const r=n&&n[i];if(z(e)||ue(e)){s=new Array(e.length);for(let o=0,l=e.length;o<l;o++)s[o]=t(e[o],o,void 0,r&&r[o])}else if(typeof e=="number"){s=new Array(e);for(let o=0;o<e;o++)s[o]=t(o+1,o,void 0,r&&r[o])}else if(le(e))if(e[Symbol.iterator])s=Array.from(e,(o,l)=>t(o,l,void 0,r&&r[l]));else{const o=Object.keys(e);s=new Array(o.length);for(let l=0,a=o.length;l<a;l++){const u=o[l];s[l]=t(e[u],u,l,r&&r[l])}}else s=[];return n&&(n[i]=s),s}const Ei=e=>e?bo(e)?Zn(e)||e.proxy:Ei(e.parent):null,Bn=_e(Object.create(null),{$:e=>e,$el:e=>e.vnode.el,$data:e=>e.data,$props:e=>e.props,$attrs:e=>e.attrs,$slots:e=>e.slots,$refs:e=>e.refs,$parent:e=>Ei(e.parent),$root:e=>Ei(e.root),$emit:e=>e.emit,$options:e=>lo(e),$forceUpdate:e=>e.f||(e.f=()=>Yr(e.update)),$nextTick:e=>e.n||(e.n=Kr.bind(e.proxy)),$watch:e=>ma.bind(e)}),Oa={get({_:e},t){const{ctx:n,setupState:i,data:s,props:r,accessCache:o,type:l,appContext:a}=e;let u;if(t[0]!=="$"){const c=o[t];if(c!==void 0)switch(c){case 1:return i[t];case 2:return s[t];case 4:return n[t];case 3:return r[t]}else{if(i!==ee&&Q(i,t))return o[t]=1,i[t];if(s!==ee&&Q(s,t))return o[t]=2,s[t];if((u=e.propsOptions[0])&&Q(u,t))return o[t]=3,r[t];if(n!==ee&&Q(n,t))return o[t]=4,n[t];Ri&&(o[t]=0)}}const f=Bn[t];let p,g;if(f)return t==="$attrs"&&Ie(e,"get",t),f(e);if((p=l.__cssModules)&&(p=p[t]))return p;if(n!==ee&&Q(n,t))return o[t]=4,n[t];if(g=a.config.globalProperties,Q(g,t))return g[t]},set({_:e},t,n){const{data:i,setupState:s,ctx:r}=e;return s!==ee&&Q(s,t)?(s[t]=n,!0):i!==ee&&Q(i,t)?(i[t]=n,!0):Q(e.props,t)||t[0]==="$"&&t.slice(1)in e?!1:(r[t]=n,!0)},has({_:{data:e,setupState:t,accessCache:n,ctx:i,appContext:s,propsOptions:r}},o){let l;return!!n[o]||e!==ee&&Q(e,o)||t!==ee&&Q(t,o)||(l=r[0])&&Q(l,o)||Q(i,o)||Q(Bn,o)||Q(s.config.globalProperties,o)},defineProperty(e,t,n){return n.get!=null?e._.accessCache[t]=0:Q(n,"value")&&this.set(e,t,n.value,null),Reflect.defineProperty(e,t,n)}};let Ri=!0;function Ta(e){const t=lo(e),n=e.proxy,i=e.ctx;Ri=!1,t.beforeCreate&&Ps(t.beforeCreate,e,"bc");const{data:s,computed:r,methods:o,watch:l,provide:a,inject:u,created:f,beforeMount:p,mounted:g,beforeUpdate:c,updated:R,activated:S,deactivated:A,beforeDestroy:T,beforeUnmount:N,destroyed:U,unmounted:L,render:ae,renderTracked:fe,renderTriggered:Ae,errorCaptured:Me,serverPrefetch:Ne,expose:Je,inheritAttrs:Ve,components:Oe,directives:Et,filters:Rt}=t;if(u&&ka(u,i,null,e.appContext.config.unwrapInjectedRef),o)for(const te in o){const Y=o[te];H(Y)&&(i[te]=Y.bind(n))}if(s){const te=s.call(n,n);le(te)&&(e.data=bn(te))}if(Ri=!0,r)for(const te in r){const Y=r[te],we=H(Y)?Y.bind(n,n):H(Y.get)?Y.get.bind(n,n):De,Ct=!H(Y)&&H(Y.set)?Y.set.bind(n):De,We=He({get:we,set:Ct});Object.defineProperty(i,te,{enumerable:!0,configurable:!0,get:()=>We.value,set:ze=>We.value=ze})}if(l)for(const te in l)oo(l[te],i,n,te);if(a){const te=H(a)?a.call(n):a;Reflect.ownKeys(te).forEach(Y=>{Tn(Y,te[Y])})}f&&Ps(f,e,"c");function ce(te,Y){z(Y)?Y.forEach(we=>te(we.bind(n))):Y&&te(Y.bind(n))}if(ce(_a,p),ce(ba,g),ce(va,c),ce(wa,R),ce(pa,S),ce(ga,A),ce(Ca,Me),ce(Ia,fe),ce(Ra,Ae),ce(xa,N),ce(ro,L),ce(Ea,Ne),z(Je))if(Je.length){const te=e.exposed||(e.exposed={});Je.forEach(Y=>{Object.defineProperty(te,Y,{get:()=>n[Y],set:we=>n[Y]=we})})}else e.exposed||(e.exposed={});ae&&e.render===De&&(e.render=ae),Ve!=null&&(e.inheritAttrs=Ve),Oe&&(e.components=Oe),Et&&(e.directives=Et)}function ka(e,t,n=De,i=!1){z(e)&&(e=Ii(e));for(const s in e){const r=e[s];let o;le(r)?"default"in r?o=at(r.from||s,r.default,!0):o=at(r.from||s):o=at(r),me(o)&&i?Object.defineProperty(t,s,{enumerable:!0,configurable:!0,get:()=>o.value,set:l=>o.value=l}):t[s]=o}}function Ps(e,t,n){$e(z(e)?e.map(i=>i.bind(t.proxy)):e.bind(t.proxy),t,n)}function oo(e,t,n,i){const s=i.includes(".")?no(n,i):()=>n[i];if(ue(e)){const r=t[e];H(r)&&kn(s,r)}else if(H(e))kn(s,e.bind(n));else if(le(e))if(z(e))e.forEach(r=>oo(r,t,n,i));else{const r=H(e.handler)?e.handler.bind(n):t[e.handler];H(r)&&kn(s,r,e)}}function lo(e){const t=e.type,{mixins:n,extends:i}=t,{mixins:s,optionsCache:r,config:{optionMergeStrategies:o}}=e.appContext,l=r.get(t);let a;return l?a=l:!s.length&&!n&&!i?a=t:(a={},s.length&&s.forEach(u=>Ln(a,u,o,!0)),Ln(a,t,o)),r.set(t,a),a}function Ln(e,t,n,i=!1){const{mixins:s,extends:r}=t;r&&Ln(e,r,n,!0),s&&s.forEach(o=>Ln(e,o,n,!0));for(const o in t)if(!(i&&o==="expose")){const l=Pa[o]||n&&n[o];e[o]=l?l(e[o],t[o]):t[o]}return e}const Pa={data:Ss,props:ht,emits:ht,methods:ht,computed:ht,beforeCreate:ye,created:ye,beforeMount:ye,mounted:ye,beforeUpdate:ye,updated:ye,beforeDestroy:ye,beforeUnmount:ye,destroyed:ye,unmounted:ye,activated:ye,deactivated:ye,errorCaptured:ye,serverPrefetch:ye,components:ht,directives:ht,watch:Da,provide:Ss,inject:Sa};function Ss(e,t){return t?e?function(){return _e(H(e)?e.call(this,this):e,H(t)?t.call(this,this):t)}:t:e}function Sa(e,t){return ht(Ii(e),Ii(t))}function Ii(e){if(z(e)){const t={};for(let n=0;n<e.length;n++)t[e[n]]=e[n];return t}return e}function ye(e,t){return e?[...new Set([].concat(e,t))]:t}function ht(e,t){return e?_e(_e(Object.create(null),e),t):t}function Da(e,t){if(!e)return t;if(!t)return e;const n=_e(Object.create(null),e);for(const i in t)n[i]=ye(e[i],t[i]);return n}function $a(e,t,n,i=!1){const s={},r={};$n(r,Jn,1),e.propsDefaults=Object.create(null),ao(e,t,s,r);for(const o in e.propsOptions[0])o in s||(s[o]=void 0);n?e.props=i?s:Yl(s):e.type.props?e.props=s:e.props=r,e.attrs=r}function Ma(e,t,n,i){const{props:s,attrs:r,vnode:{patchFlag:o}}=e,l=K(s),[a]=e.propsOptions;let u=!1;if((i||o>0)&&!(o&16)){if(o&8){const f=e.vnode.dynamicProps;for(let p=0;p<f.length;p++){let g=f[p];if(qn(e.emitsOptions,g))continue;const c=t[g];if(a)if(Q(r,g))c!==r[g]&&(r[g]=c,u=!0);else{const R=zt(g);s[R]=Ci(a,l,R,c,e,!1)}else c!==r[g]&&(r[g]=c,u=!0)}}}else{ao(e,t,s,r)&&(u=!0);let f;for(const p in l)(!t||!Q(t,p)&&((f=jt(p))===p||!Q(t,f)))&&(a?n&&(n[p]!==void 0||n[f]!==void 0)&&(s[p]=Ci(a,l,p,void 0,e,!0)):delete s[p]);if(r!==l)for(const p in r)(!t||!Q(t,p)&&!0)&&(delete r[p],u=!0)}u&&qe(e,"set","$attrs")}function ao(e,t,n,i){const[s,r]=e.propsOptions;let o=!1,l;if(t)for(let a in t){if(An(a))continue;const u=t[a];let f;s&&Q(s,f=zt(a))?!r||!r.includes(f)?n[f]=u:(l||(l={}))[f]=u:qn(e.emitsOptions,a)||(!(a in i)||u!==i[a])&&(i[a]=u,o=!0)}if(r){const a=K(n),u=l||ee;for(let f=0;f<r.length;f++){const p=r[f];n[p]=Ci(s,a,p,u[p],e,!Q(u,p))}}return o}function Ci(e,t,n,i,s,r){const o=e[n];if(o!=null){const l=Q(o,"default");if(l&&i===void 0){const a=o.default;if(o.type!==Function&&H(a)){const{propsDefaults:u}=s;n in u?i=u[n]:(Lt(s),i=u[n]=a.call(null,t),_t())}else i=a}o[0]&&(r&&!l?i=!1:o[1]&&(i===""||i===jt(n))&&(i=!0))}return i}function co(e,t,n=!1){const i=t.propsCache,s=i.get(e);if(s)return s;const r=e.props,o={},l=[];let a=!1;if(!H(e)){const f=p=>{a=!0;const[g,c]=co(p,t,!0);_e(o,g),c&&l.push(...c)};!n&&t.mixins.length&&t.mixins.forEach(f),e.extends&&f(e.extends),e.mixins&&e.mixins.forEach(f)}if(!r&&!a)return i.set(e,St),St;if(z(r))for(let f=0;f<r.length;f++){const p=zt(r[f]);Ds(p)&&(o[p]=ee)}else if(r)for(const f in r){const p=zt(f);if(Ds(p)){const g=r[f],c=o[p]=z(g)||H(g)?{type:g}:g;if(c){const R=Ns(Boolean,c.type),S=Ns(String,c.type);c[0]=R>-1,c[1]=S<0||R<S,(R>-1||Q(c,"default"))&&l.push(p)}}}const u=[o,l];return i.set(e,u),u}function Ds(e){return e[0]!=="$"}function $s(e){const t=e&&e.toString().match(/^\s*function (\w+)/);return t?t[1]:e===null?"null":""}function Ms(e,t){return $s(e)===$s(t)}function Ns(e,t){return z(t)?t.findIndex(n=>Ms(n,e)):H(t)&&Ms(t,e)?0:-1}const uo=e=>e[0]==="_"||e==="$stable",ts=e=>z(e)?e.map(Fe):[Fe(e)],Na=(e,t,n)=>{if(t._n)return t;const i=la((...s)=>ts(t(...s)),n);return i._c=!1,i},fo=(e,t,n)=>{const i=e._ctx;for(const s in e){if(uo(s))continue;const r=e[s];if(H(r))t[s]=Na(s,r,i);else if(r!=null){const o=ts(r);t[s]=()=>o}}},ho=(e,t)=>{const n=ts(t);e.slots.default=()=>n},za=(e,t)=>{if(e.vnode.shapeFlag&32){const n=t._;n?(e.slots=K(t),$n(t,"_",n)):fo(t,e.slots={})}else e.slots={},t&&ho(e,t);$n(e.slots,Jn,1)},Ba=(e,t,n)=>{const{vnode:i,slots:s}=e;let r=!0,o=ee;if(i.shapeFlag&32){const l=t._;l?n&&l===1?r=!1:(_e(s,t),!n&&l===1&&delete s._):(r=!t.$stable,fo(t,s)),o=t}else t&&(ho(e,t),o={default:1});if(r)for(const l in s)!uo(l)&&!(l in o)&&delete s[l]};function mo(){return{app:null,config:{isNativeTag:ml,performance:!1,globalProperties:{},optionMergeStrategies:{},errorHandler:void 0,warnHandler:void 0,compilerOptions:{}},mixins:[],components:{},directives:{},provides:Object.create(null),optionsCache:new WeakMap,propsCache:new WeakMap,emitsCache:new WeakMap}}let La=0;function Ua(e,t){return function(i,s=null){H(i)||(i=Object.assign({},i)),s!=null&&!le(s)&&(s=null);const r=mo(),o=new Set;let l=!1;const a=r.app={_uid:La++,_component:i,_props:s,_container:null,_context:r,_instance:null,version:sc,get config(){return r.config},set config(u){},use(u,...f){return o.has(u)||(u&&H(u.install)?(o.add(u),u.install(a,...f)):H(u)&&(o.add(u),u(a,...f))),a},mixin(u){return r.mixins.includes(u)||r.mixins.push(u),a},component(u,f){return f?(r.components[u]=f,a):r.components[u]},directive(u,f){return f?(r.directives[u]=f,a):r.directives[u]},mount(u,f,p){if(!l){const g=ve(i,s);return g.appContext=r,f&&t?t(g,u):e(g,u,p),l=!0,a._container=u,u.__vue_app__=a,Zn(g.component)||g.component.proxy}},unmount(){l&&(e(null,a._container),delete a._container.__vue_app__)},provide(u,f){return r.provides[u]=f,a}};return a}}function Ai(e,t,n,i,s=!1){if(z(e)){e.forEach((g,c)=>Ai(g,t&&(z(t)?t[c]:t),n,i,s));return}if(Pn(i)&&!s)return;const r=i.shapeFlag&4?Zn(i.component)||i.component.proxy:i.el,o=s?null:r,{i:l,r:a}=e,u=t&&t.r,f=l.refs===ee?l.refs={}:l.refs,p=l.setupState;if(u!=null&&u!==a&&(ue(u)?(f[u]=null,Q(p,u)&&(p[u]=null)):me(u)&&(u.value=null)),H(a))lt(a,l,12,[o,f]);else{const g=ue(a),c=me(a);if(g||c){const R=()=>{if(e.f){const S=g?f[a]:a.value;s?z(S)&&Qi(S,r):z(S)?S.includes(r)||S.push(r):g?(f[a]=[r],Q(p,a)&&(p[a]=f[a])):(a.value=[r],e.k&&(f[e.k]=a.value))}else g?(f[a]=o,Q(p,a)&&(p[a]=o)):c&&(a.value=o,e.k&&(f[e.k]=o))};o?(R.id=-1,be(R,n)):R()}}}const be=ha;function Fa(e){return Ha(e)}function Ha(e,t){const n=vl();n.__VUE__=!0;const{insert:i,remove:s,patchProp:r,createElement:o,createText:l,createComment:a,setText:u,setElementText:f,parentNode:p,nextSibling:g,setScopeId:c=De,cloneNode:R,insertStaticContent:S}=e,A=(d,m,y,v=null,b=null,E=null,O=!1,x=null,I=!!m.dynamicChildren)=>{if(d===m)return;d&&!Yt(d,m)&&(v=D(d),Ce(d,b,E,!0),d=null),m.patchFlag===-2&&(I=!1,m.dynamicChildren=null);const{type:w,ref:$,shapeFlag:k}=m;switch(w){case ns:T(d,m,y,v);break;case vt:N(d,m,y,v);break;case Sn:d==null&&U(m,y,v,O);break;case ke:Et(d,m,y,v,b,E,O,x,I);break;default:k&1?fe(d,m,y,v,b,E,O,x,I):k&6?Rt(d,m,y,v,b,E,O,x,I):(k&64||k&128)&&w.process(d,m,y,v,b,E,O,x,I,ne)}$!=null&&b&&Ai($,d&&d.ref,E,m||d,!m)},T=(d,m,y,v)=>{if(d==null)i(m.el=l(m.children),y,v);else{const b=m.el=d.el;m.children!==d.children&&u(b,m.children)}},N=(d,m,y,v)=>{d==null?i(m.el=a(m.children||""),y,v):m.el=d.el},U=(d,m,y,v)=>{[d.el,d.anchor]=S(d.children,m,y,v,d.el,d.anchor)},L=({el:d,anchor:m},y,v)=>{let b;for(;d&&d!==m;)b=g(d),i(d,y,v),d=b;i(m,y,v)},ae=({el:d,anchor:m})=>{let y;for(;d&&d!==m;)y=g(d),s(d),d=y;s(m)},fe=(d,m,y,v,b,E,O,x,I)=>{O=O||m.type==="svg",d==null?Ae(m,y,v,b,E,O,x,I):Je(d,m,b,E,O,x,I)},Ae=(d,m,y,v,b,E,O,x)=>{let I,w;const{type:$,props:k,shapeFlag:M,transition:B,patchFlag:V,dirs:G}=d;if(d.el&&R!==void 0&&V===-1)I=d.el=R(d.el);else{if(I=d.el=o(d.type,E,k&&k.is,k),M&8?f(I,d.children):M&16&&Ne(d.children,I,null,v,b,E&&$!=="foreignObject",O,x),G&&ut(d,null,v,"created"),k){for(const se in k)se!=="value"&&!An(se)&&r(I,se,null,k[se],E,d.children,v,b,C);"value"in k&&r(I,"value",null,k.value),(w=k.onVnodeBeforeMount)&&Le(w,v,d)}Me(I,d,d.scopeId,O,v)}G&&ut(d,null,v,"beforeMount");const J=(!b||b&&!b.pendingBranch)&&B&&!B.persisted;J&&B.beforeEnter(I),i(I,m,y),((w=k&&k.onVnodeMounted)||J||G)&&be(()=>{w&&Le(w,v,d),J&&B.enter(I),G&&ut(d,null,v,"mounted")},b)},Me=(d,m,y,v,b)=>{if(y&&c(d,y),v)for(let E=0;E<v.length;E++)c(d,v[E]);if(b){let E=b.subTree;if(m===E){const O=b.vnode;Me(d,O,O.scopeId,O.slotScopeIds,b.parent)}}},Ne=(d,m,y,v,b,E,O,x,I=0)=>{for(let w=I;w<d.length;w++){const $=d[w]=x?nt(d[w]):Fe(d[w]);A(null,$,m,y,v,b,E,O,x)}},Je=(d,m,y,v,b,E,O)=>{const x=m.el=d.el;let{patchFlag:I,dynamicChildren:w,dirs:$}=m;I|=d.patchFlag&16;const k=d.props||ee,M=m.props||ee;let B;y&&ft(y,!1),(B=M.onVnodeBeforeUpdate)&&Le(B,y,m,d),$&&ut(m,d,y,"beforeUpdate"),y&&ft(y,!0);const V=b&&m.type!=="foreignObject";if(w?Ve(d.dynamicChildren,w,x,y,v,V,E):O||we(d,m,x,null,y,v,V,E,!1),I>0){if(I&16)Oe(x,m,k,M,y,v,b);else if(I&2&&k.class!==M.class&&r(x,"class",null,M.class,b),I&4&&r(x,"style",k.style,M.style,b),I&8){const G=m.dynamicProps;for(let J=0;J<G.length;J++){const se=G[J],Te=k[se],At=M[se];(At!==Te||se==="value")&&r(x,se,Te,At,b,d.children,y,v,C)}}I&1&&d.children!==m.children&&f(x,m.children)}else!O&&w==null&&Oe(x,m,k,M,y,v,b);((B=M.onVnodeUpdated)||$)&&be(()=>{B&&Le(B,y,m,d),$&&ut(m,d,y,"updated")},v)},Ve=(d,m,y,v,b,E,O)=>{for(let x=0;x<m.length;x++){const I=d[x],w=m[x],$=I.el&&(I.type===ke||!Yt(I,w)||I.shapeFlag&70)?p(I.el):y;A(I,w,$,null,v,b,E,O,!0)}},Oe=(d,m,y,v,b,E,O)=>{if(y!==v){for(const x in v){if(An(x))continue;const I=v[x],w=y[x];I!==w&&x!=="value"&&r(d,x,w,I,O,m.children,b,E,C)}if(y!==ee)for(const x in y)!An(x)&&!(x in v)&&r(d,x,y[x],null,O,m.children,b,E,C);"value"in v&&r(d,"value",y.value,v.value)}},Et=(d,m,y,v,b,E,O,x,I)=>{const w=m.el=d?d.el:l(""),$=m.anchor=d?d.anchor:l("");let{patchFlag:k,dynamicChildren:M,slotScopeIds:B}=m;B&&(x=x?x.concat(B):B),d==null?(i(w,y,v),i($,y,v),Ne(m.children,y,$,b,E,O,x,I)):k>0&&k&64&&M&&d.dynamicChildren?(Ve(d.dynamicChildren,M,y,b,E,O,x),(m.key!=null||b&&m===b.subTree)&&po(d,m,!0)):we(d,m,y,$,b,E,O,x,I)},Rt=(d,m,y,v,b,E,O,x,I)=>{m.slotScopeIds=x,d==null?m.shapeFlag&512?b.ctx.activate(m,y,v,O,I):It(m,y,v,b,E,O,I):ce(d,m,I)},It=(d,m,y,v,b,E,O)=>{const x=d.component=Xa(d,v,b);if(io(d)&&(x.ctx.renderer=ne),Za(x),x.asyncDep){if(b&&b.registerDep(x,te),!d.el){const I=x.subTree=ve(vt);N(null,I,m,y)}return}te(x,d,m,y,b,E,O)},ce=(d,m,y)=>{const v=m.component=d.component;if(da(d,m,y))if(v.asyncDep&&!v.asyncResolved){Y(v,m,y);return}else v.next=m,ia(v.update),v.update();else m.el=d.el,v.vnode=m},te=(d,m,y,v,b,E,O)=>{const x=()=>{if(d.isMounted){let{next:$,bu:k,u:M,parent:B,vnode:V}=d,G=$,J;ft(d,!1),$?($.el=V.el,Y(d,$,O)):$=V,k&&On(k),(J=$.props&&$.props.onVnodeBeforeUpdate)&&Le(J,B,$,V),ft(d,!0);const se=si(d),Te=d.subTree;d.subTree=se,A(Te,se,p(Te.el),D(Te),d,b,E),$.el=se.el,G===null&&ua(d,se.el),M&&be(M,b),(J=$.props&&$.props.onVnodeUpdated)&&be(()=>Le(J,B,$,V),b)}else{let $;const{el:k,props:M}=m,{bm:B,m:V,parent:G}=d,J=Pn(m);if(ft(d,!1),B&&On(B),!J&&($=M&&M.onVnodeBeforeMount)&&Le($,G,m),ft(d,!0),k&&F){const se=()=>{d.subTree=si(d),F(k,d.subTree,d,b,null)};J?m.type.__asyncLoader().then(()=>!d.isUnmounted&&se()):se()}else{const se=d.subTree=si(d);A(null,se,y,v,d,b,E),m.el=se.el}if(V&&be(V,b),!J&&($=M&&M.onVnodeMounted)){const se=m;be(()=>Le($,G,se),b)}(m.shapeFlag&256||G&&Pn(G.vnode)&&G.vnode.shapeFlag&256)&&d.a&&be(d.a,b),d.isMounted=!0,m=y=v=null}},I=d.effect=new Ki(x,()=>Yr(w),d.scope),w=d.update=()=>I.run();w.id=d.uid,ft(d,!0),w()},Y=(d,m,y)=>{m.component=d;const v=d.vnode.props;d.vnode=m,d.next=null,Ma(d,m.props,v,y),Ba(d,m.children,y),Qt(),Yn(void 0,d.update),Vt()},we=(d,m,y,v,b,E,O,x,I=!1)=>{const w=d&&d.children,$=d?d.shapeFlag:0,k=m.children,{patchFlag:M,shapeFlag:B}=m;if(M>0){if(M&128){We(w,k,y,v,b,E,O,x,I);return}else if(M&256){Ct(w,k,y,v,b,E,O,x,I);return}}B&8?($&16&&C(w,b,E),k!==w&&f(y,k)):$&16?B&16?We(w,k,y,v,b,E,O,x,I):C(w,b,E,!0):($&8&&f(y,""),B&16&&Ne(k,y,v,b,E,O,x,I))},Ct=(d,m,y,v,b,E,O,x,I)=>{d=d||St,m=m||St;const w=d.length,$=m.length,k=Math.min(w,$);let M;for(M=0;M<k;M++){const B=m[M]=I?nt(m[M]):Fe(m[M]);A(d[M],B,y,null,b,E,O,x,I)}w>$?C(d,b,E,!0,!1,k):Ne(m,y,v,b,E,O,x,I,k)},We=(d,m,y,v,b,E,O,x,I)=>{let w=0;const $=m.length;let k=d.length-1,M=$-1;for(;w<=k&&w<=M;){const B=d[w],V=m[w]=I?nt(m[w]):Fe(m[w]);if(Yt(B,V))A(B,V,y,null,b,E,O,x,I);else break;w++}for(;w<=k&&w<=M;){const B=d[k],V=m[M]=I?nt(m[M]):Fe(m[M]);if(Yt(B,V))A(B,V,y,null,b,E,O,x,I);else break;k--,M--}if(w>k){if(w<=M){const B=M+1,V=B<$?m[B].el:v;for(;w<=M;)A(null,m[w]=I?nt(m[w]):Fe(m[w]),y,V,b,E,O,x,I),w++}}else if(w>M)for(;w<=k;)Ce(d[w],b,E,!0),w++;else{const B=w,V=w,G=new Map;for(w=V;w<=M;w++){const xe=m[w]=I?nt(m[w]):Fe(m[w]);xe.key!=null&&G.set(xe.key,w)}let J,se=0;const Te=M-V+1;let At=!1,fs=0;const Kt=new Array(Te);for(w=0;w<Te;w++)Kt[w]=0;for(w=B;w<=k;w++){const xe=d[w];if(se>=Te){Ce(xe,b,E,!0);continue}let Be;if(xe.key!=null)Be=G.get(xe.key);else for(J=V;J<=M;J++)if(Kt[J-V]===0&&Yt(xe,m[J])){Be=J;break}Be===void 0?Ce(xe,b,E,!0):(Kt[Be-V]=w+1,Be>=fs?fs=Be:At=!0,A(xe,m[Be],y,null,b,E,O,x,I),se++)}const hs=At?ja(Kt):St;for(J=hs.length-1,w=Te-1;w>=0;w--){const xe=V+w,Be=m[xe],ms=xe+1<$?m[xe+1].el:v;Kt[w]===0?A(null,Be,y,ms,b,E,O,x,I):At&&(J<0||w!==hs[J]?ze(Be,y,ms,2):J--)}}},ze=(d,m,y,v,b=null)=>{const{el:E,type:O,transition:x,children:I,shapeFlag:w}=d;if(w&6){ze(d.component.subTree,m,y,v);return}if(w&128){d.suspense.move(m,y,v);return}if(w&64){O.move(d,m,y,ne);return}if(O===ke){i(E,m,y);for(let k=0;k<I.length;k++)ze(I[k],m,y,v);i(d.anchor,m,y);return}if(O===Sn){L(d,m,y);return}if(v!==2&&w&1&&x)if(v===0)x.beforeEnter(E),i(E,m,y),be(()=>x.enter(E),b);else{const{leave:k,delayLeave:M,afterLeave:B}=x,V=()=>i(E,m,y),G=()=>{k(E,()=>{V(),B&&B()})};M?M(E,V,G):G()}else i(E,m,y)},Ce=(d,m,y,v=!1,b=!1)=>{const{type:E,props:O,ref:x,children:I,dynamicChildren:w,shapeFlag:$,patchFlag:k,dirs:M}=d;if(x!=null&&Ai(x,null,y,d,!0),$&256){m.ctx.deactivate(d);return}const B=$&1&&M,V=!Pn(d);let G;if(V&&(G=O&&O.onVnodeBeforeUnmount)&&Le(G,m,d),$&6)P(d.component,y,v);else{if($&128){d.suspense.unmount(y,v);return}B&&ut(d,null,m,"beforeUnmount"),$&64?d.type.remove(d,m,y,b,ne,v):w&&(E!==ke||k>0&&k&64)?C(w,m,y,!1,!0):(E===ke&&k&384||!b&&$&16)&&C(I,m,y),v&&ni(d)}(V&&(G=O&&O.onVnodeUnmounted)||B)&&be(()=>{G&&Le(G,m,d),B&&ut(d,null,m,"unmounted")},y)},ni=d=>{const{type:m,el:y,anchor:v,transition:b}=d;if(m===ke){_(y,v);return}if(m===Sn){ae(d);return}const E=()=>{s(y),b&&!b.persisted&&b.afterLeave&&b.afterLeave()};if(d.shapeFlag&1&&b&&!b.persisted){const{leave:O,delayLeave:x}=b,I=()=>O(y,E);x?x(d.el,E,I):I()}else E()},_=(d,m)=>{let y;for(;d!==m;)y=g(d),s(d),d=y;s(m)},P=(d,m,y)=>{const{bum:v,scope:b,update:E,subTree:O,um:x}=d;v&&On(v),b.stop(),E&&(E.active=!1,Ce(O,d,m,y)),x&&be(x,m),be(()=>{d.isUnmounted=!0},m),m&&m.pendingBranch&&!m.isUnmounted&&d.asyncDep&&!d.asyncResolved&&d.suspenseId===m.pendingId&&(m.deps--,m.deps===0&&m.resolve())},C=(d,m,y,v=!1,b=!1,E=0)=>{for(let O=E;O<d.length;O++)Ce(d[O],m,y,v,b)},D=d=>d.shapeFlag&6?D(d.component.subTree):d.shapeFlag&128?d.suspense.next():g(d.anchor||d.el),q=(d,m,y)=>{d==null?m._vnode&&Ce(m._vnode,null,null,!0):A(m._vnode||null,d,m,null,null,null,y),Jr(),m._vnode=d},ne={p:A,um:Ce,m:ze,r:ni,mt:It,mc:Ne,pc:we,pbc:Ve,n:D,o:e};let j,F;return t&&([j,F]=t(ne)),{render:q,hydrate:j,createApp:Ua(q,j)}}function ft({effect:e,update:t},n){e.allowRecurse=t.allowRecurse=n}function po(e,t,n=!1){const i=e.children,s=t.children;if(z(i)&&z(s))for(let r=0;r<i.length;r++){const o=i[r];let l=s[r];l.shapeFlag&1&&!l.dynamicChildren&&((l.patchFlag<=0||l.patchFlag===32)&&(l=s[r]=nt(s[r]),l.el=o.el),n||po(o,l))}}function ja(e){const t=e.slice(),n=[0];let i,s,r,o,l;const a=e.length;for(i=0;i<a;i++){const u=e[i];if(u!==0){if(s=n[n.length-1],e[s]<u){t[i]=s,n.push(i);continue}for(r=0,o=n.length-1;r<o;)l=r+o>>1,e[n[l]]<u?r=l+1:o=l;u<e[n[r]]&&(r>0&&(t[i]=n[r-1]),n[r]=i)}}for(r=n.length,o=n[r-1];r-- >0;)n[r]=o,o=t[o];return n}const Qa=e=>e.__isTeleport,ke=Symbol(void 0),ns=Symbol(void 0),vt=Symbol(void 0),Sn=Symbol(void 0),nn=[];let Se=null;function X(e=!1){nn.push(Se=e?null:[])}function Va(){nn.pop(),Se=nn[nn.length-1]||null}let fn=1;function zs(e){fn+=e}function go(e){return e.dynamicChildren=fn>0?Se||St:null,Va(),fn>0&&Se&&Se.push(e),e}function ie(e,t,n,i,s,r){return go(h(e,t,n,i,s,r,!0))}function Wa(e,t,n,i,s){return go(ve(e,t,n,i,s,!0))}function Oi(e){return e?e.__v_isVNode===!0:!1}function Yt(e,t){return e.type===t.type&&e.key===t.key}const Jn="__vInternal",yo=({key:e})=>e!=null?e:null,Dn=({ref:e,ref_key:t,ref_for:n})=>e!=null?ue(e)||me(e)||H(e)?{i:je,r:e,k:t,f:!!n}:e:null;function h(e,t=null,n=null,i=0,s=null,r=e===ke?0:1,o=!1,l=!1){const a={__v_isVNode:!0,__v_skip:!0,type:e,props:t,key:t&&yo(t),ref:t&&Dn(t),scopeId:eo,slotScopeIds:null,children:n,component:null,suspense:null,ssContent:null,ssFallback:null,dirs:null,transition:null,el:null,anchor:null,target:null,targetAnchor:null,staticCount:0,shapeFlag:r,patchFlag:i,dynamicProps:s,dynamicChildren:null,appContext:null};return l?(is(a,n),r&128&&e.normalize(a)):n&&(a.shapeFlag|=ue(n)?8:16),fn>0&&!o&&Se&&(a.patchFlag>0||r&6)&&a.patchFlag!==32&&Se.push(a),a}const ve=Ka;function Ka(e,t=null,n=null,i=0,s=null,r=!1){if((!e||e===Aa)&&(e=vt),Oi(e)){const l=Bt(e,t,!0);return n&&is(l,n),fn>0&&!r&&Se&&(l.shapeFlag&6?Se[Se.indexOf(e)]=l:Se.push(l)),l.patchFlag|=-2,l}if(ic(e)&&(e=e.__vccOpts),t){t=Ya(t);let{class:l,style:a}=t;l&&!ue(l)&&(t.class=Hi(l)),le(a)&&(Ur(a)&&!z(a)&&(a=_e({},a)),t.style=Fi(a))}const o=ue(e)?1:fa(e)?128:Qa(e)?64:le(e)?4:H(e)?2:0;return h(e,t,n,i,s,o,r,!0)}function Ya(e){return e?Ur(e)||Jn in e?_e({},e):e:null}function Bt(e,t,n=!1){const{props:i,ref:s,patchFlag:r,children:o}=e,l=t?qa(i||{},t):i;return{__v_isVNode:!0,__v_skip:!0,type:e.type,props:l,key:l&&yo(l),ref:t&&t.ref?n&&s?z(s)?s.concat(Dn(t)):[s,Dn(t)]:Dn(t):s,scopeId:e.scopeId,slotScopeIds:e.slotScopeIds,children:o,target:e.target,targetAnchor:e.targetAnchor,staticCount:e.staticCount,shapeFlag:e.shapeFlag,patchFlag:t&&e.type!==ke?r===-1?16:r|16:r,dynamicProps:e.dynamicProps,dynamicChildren:e.dynamicChildren,appContext:e.appContext,dirs:e.dirs,transition:e.transition,component:e.component,suspense:e.suspense,ssContent:e.ssContent&&Bt(e.ssContent),ssFallback:e.ssFallback&&Bt(e.ssFallback),el:e.el,anchor:e.anchor}}function Xn(e=" ",t=0){return ve(ns,null,e,t)}function _o(e,t){const n=ve(Sn,null,e);return n.staticCount=t,n}function pe(e="",t=!1){return t?(X(),Wa(vt,null,e)):ve(vt,null,e)}function Fe(e){return e==null||typeof e=="boolean"?ve(vt):z(e)?ve(ke,null,e.slice()):typeof e=="object"?nt(e):ve(ns,null,String(e))}function nt(e){return e.el===null||e.memo?e:Bt(e)}function is(e,t){let n=0;const{shapeFlag:i}=e;if(t==null)t=null;else if(z(t))n=16;else if(typeof t=="object")if(i&65){const s=t.default;s&&(s._c&&(s._d=!1),is(e,s()),s._c&&(s._d=!0));return}else{n=32;const s=t._;!s&&!(Jn in t)?t._ctx=je:s===3&&je&&(je.slots._===1?t._=1:(t._=2,e.patchFlag|=1024))}else H(t)?(t={default:t,_ctx:je},n=32):(t=String(t),i&64?(n=16,t=[Xn(t)]):n=8);e.children=t,e.shapeFlag|=n}function qa(...e){const t={};for(let n=0;n<e.length;n++){const i=e[n];for(const s in i)if(s==="class")t.class!==i.class&&(t.class=Hi([t.class,i.class]));else if(s==="style")t.style=Fi([t.style,i.style]);else if(jn(s)){const r=t[s],o=i[s];o&&r!==o&&!(z(r)&&r.includes(o))&&(t[s]=r?[].concat(r,o):o)}else s!==""&&(t[s]=i[s])}return t}function Le(e,t,n,i=null){$e(e,t,7,[n,i])}const Ga=mo();let Ja=0;function Xa(e,t,n){const i=e.type,s=(t?t.appContext:e.appContext)||Ga,r={uid:Ja++,vnode:e,type:i,parent:t,appContext:s,root:null,next:null,subTree:null,effect:null,update:null,scope:new wl(!0),render:null,proxy:null,exposed:null,exposeProxy:null,withProxy:null,provides:t?t.provides:Object.create(s.provides),accessCache:null,renderCache:[],components:null,directives:null,propsOptions:co(i,s),emitsOptions:Zr(i,s),emit:null,emitted:null,propsDefaults:ee,inheritAttrs:i.inheritAttrs,ctx:ee,data:ee,props:ee,attrs:ee,slots:ee,refs:ee,setupState:ee,setupContext:null,suspense:n,suspenseId:n?n.pendingId:0,asyncDep:null,asyncResolved:!1,isMounted:!1,isUnmounted:!1,isDeactivated:!1,bc:null,c:null,bm:null,m:null,bu:null,u:null,um:null,bum:null,da:null,a:null,rtg:null,rtc:null,ec:null,sp:null};return r.ctx={_:r},r.root=t?t.root:r,r.emit=oa.bind(null,r),e.ce&&e.ce(r),r}let he=null;const Lt=e=>{he=e,e.scope.on()},_t=()=>{he&&he.scope.off(),he=null};function bo(e){return e.vnode.shapeFlag&4}let hn=!1;function Za(e,t=!1){hn=t;const{props:n,children:i}=e.vnode,s=bo(e);$a(e,n,s,t),za(e,i);const r=s?ec(e,t):void 0;return hn=!1,r}function ec(e,t){const n=e.type;e.accessCache=Object.create(null),e.proxy=Fr(new Proxy(e.ctx,Oa));const{setup:i}=n;if(i){const s=e.setupContext=i.length>1?nc(e):null;Lt(e),Qt();const r=lt(i,e,0,[e.props,s]);if(Vt(),_t(),Ir(r)){if(r.then(_t,_t),t)return r.then(o=>{Bs(e,o,t)}).catch(o=>{Kn(o,e,0)});e.asyncDep=r}else Bs(e,r,t)}else vo(e,t)}function Bs(e,t,n){H(t)?e.type.__ssrInlineRender?e.ssrRender=t:e.render=t:le(t)&&(e.setupState=Vr(t)),vo(e,n)}let Ls;function vo(e,t,n){const i=e.type;if(!e.render){if(!t&&Ls&&!i.render){const s=i.template;if(s){const{isCustomElement:r,compilerOptions:o}=e.appContext.config,{delimiters:l,compilerOptions:a}=i,u=_e(_e({isCustomElement:r,delimiters:l},o),a);i.render=Ls(s,u)}}e.render=i.render||De}Lt(e),Qt(),Ta(e),Vt(),_t()}function tc(e){return new Proxy(e.attrs,{get(t,n){return Ie(e,"get","$attrs"),t[n]}})}function nc(e){const t=i=>{e.exposed=i||{}};let n;return{get attrs(){return n||(n=tc(e))},slots:e.slots,emit:e.emit,expose:t}}function Zn(e){if(e.exposed)return e.exposeProxy||(e.exposeProxy=new Proxy(Vr(Fr(e.exposed)),{get(t,n){if(n in t)return t[n];if(n in Bn)return Bn[n](e)}}))}function ic(e){return H(e)&&"__vccOpts"in e}const He=(e,t)=>ea(e,t,hn);function wo(e,t,n){const i=arguments.length;return i===2?le(t)&&!z(t)?Oi(t)?ve(e,null,[t]):ve(e,t):ve(e,null,t):(i>3?n=Array.prototype.slice.call(arguments,2):i===3&&Oi(n)&&(n=[n]),ve(e,t,n))}const sc="3.2.37",rc="http://www.w3.org/2000/svg",pt=typeof document!="undefined"?document:null,Us=pt&&pt.createElement("template"),oc={insert:(e,t,n)=>{t.insertBefore(e,n||null)},remove:e=>{const t=e.parentNode;t&&t.removeChild(e)},createElement:(e,t,n,i)=>{const s=t?pt.createElementNS(rc,e):pt.createElement(e,n?{is:n}:void 0);return e==="select"&&i&&i.multiple!=null&&s.setAttribute("multiple",i.multiple),s},createText:e=>pt.createTextNode(e),createComment:e=>pt.createComment(e),setText:(e,t)=>{e.nodeValue=t},setElementText:(e,t)=>{e.textContent=t},parentNode:e=>e.parentNode,nextSibling:e=>e.nextSibling,querySelector:e=>pt.querySelector(e),setScopeId(e,t){e.setAttribute(t,"")},cloneNode(e){const t=e.cloneNode(!0);return"_value"in e&&(t._value=e._value),t},insertStaticContent(e,t,n,i,s,r){const o=n?n.previousSibling:t.lastChild;if(s&&(s===r||s.nextSibling))for(;t.insertBefore(s.cloneNode(!0),n),!(s===r||!(s=s.nextSibling)););else{Us.innerHTML=i?`<svg>${e}</svg>`:e;const l=Us.content;if(i){const a=l.firstChild;for(;a.firstChild;)l.appendChild(a.firstChild);l.removeChild(a)}t.insertBefore(l,n)}return[o?o.nextSibling:t.firstChild,n?n.previousSibling:t.lastChild]}};function lc(e,t,n){const i=e._vtc;i&&(t=(t?[t,...i]:[...i]).join(" ")),t==null?e.removeAttribute("class"):n?e.setAttribute("class",t):e.className=t}function ac(e,t,n){const i=e.style,s=ue(n);if(n&&!s){for(const r in n)Ti(i,r,n[r]);if(t&&!ue(t))for(const r in t)n[r]==null&&Ti(i,r,"")}else{const r=i.display;s?t!==n&&(i.cssText=n):t&&e.removeAttribute("style"),"_vod"in e&&(i.display=r)}}const Fs=/\s*!important$/;function Ti(e,t,n){if(z(n))n.forEach(i=>Ti(e,t,i));else if(n==null&&(n=""),t.startsWith("--"))e.setProperty(t,n);else{const i=cc(e,t);Fs.test(n)?e.setProperty(jt(i),n.replace(Fs,""),"important"):e[i]=n}}const Hs=["Webkit","Moz","ms"],ri={};function cc(e,t){const n=ri[t];if(n)return n;let i=zt(t);if(i!=="filter"&&i in e)return ri[t]=i;i=Or(i);for(let s=0;s<Hs.length;s++){const r=Hs[s]+i;if(r in e)return ri[t]=r}return t}const js="http://www.w3.org/1999/xlink";function dc(e,t,n,i,s){if(i&&t.startsWith("xlink:"))n==null?e.removeAttributeNS(js,t.slice(6,t.length)):e.setAttributeNS(js,t,n);else{const r=ll(t);n==null||r&&!Er(n)?e.removeAttribute(t):e.setAttribute(t,r?"":n)}}function uc(e,t,n,i,s,r,o){if(t==="innerHTML"||t==="textContent"){i&&o(i,s,r),e[t]=n==null?"":n;return}if(t==="value"&&e.tagName!=="PROGRESS"&&!e.tagName.includes("-")){e._value=n;const a=n==null?"":n;(e.value!==a||e.tagName==="OPTION")&&(e.value=a),n==null&&e.removeAttribute(t);return}let l=!1;if(n===""||n==null){const a=typeof e[t];a==="boolean"?n=Er(n):n==null&&a==="string"?(n="",l=!0):a==="number"&&(n=0,l=!0)}try{e[t]=n}catch{}l&&e.removeAttribute(t)}const[xo,fc]=(()=>{let e=Date.now,t=!1;if(typeof window!="undefined"){Date.now()>document.createEvent("Event").timeStamp&&(e=performance.now.bind(performance));const n=navigator.userAgent.match(/firefox\/(\d+)/i);t=!!(n&&Number(n[1])<=53)}return[e,t]})();let ki=0;const hc=Promise.resolve(),mc=()=>{ki=0},pc=()=>ki||(hc.then(mc),ki=xo());function st(e,t,n,i){e.addEventListener(t,n,i)}function gc(e,t,n,i){e.removeEventListener(t,n,i)}function yc(e,t,n,i,s=null){const r=e._vei||(e._vei={}),o=r[t];if(i&&o)o.value=i;else{const[l,a]=_c(t);if(i){const u=r[t]=bc(i,s);st(e,l,u,a)}else o&&(gc(e,l,o,a),r[t]=void 0)}}const Qs=/(?:Once|Passive|Capture)$/;function _c(e){let t;if(Qs.test(e)){t={};let n;for(;n=e.match(Qs);)e=e.slice(0,e.length-n[0].length),t[n[0].toLowerCase()]=!0}return[jt(e.slice(2)),t]}function bc(e,t){const n=i=>{const s=i.timeStamp||xo();(fc||s>=n.attached-1)&&$e(vc(i,n.value),t,5,[i])};return n.value=e,n.attached=pc(),n}function vc(e,t){if(z(t)){const n=e.stopImmediatePropagation;return e.stopImmediatePropagation=()=>{n.call(e),e._stopped=!0},t.map(i=>s=>!s._stopped&&i&&i(s))}else return t}const Vs=/^on[a-z]/,wc=(e,t,n,i,s=!1,r,o,l,a)=>{t==="class"?lc(e,i,s):t==="style"?ac(e,n,i):jn(t)?ji(t)||yc(e,t,n,i,o):(t[0]==="."?(t=t.slice(1),!0):t[0]==="^"?(t=t.slice(1),!1):xc(e,t,i,s))?uc(e,t,i,r,o,l,a):(t==="true-value"?e._trueValue=i:t==="false-value"&&(e._falseValue=i),dc(e,t,i,s))};function xc(e,t,n,i){return i?!!(t==="innerHTML"||t==="textContent"||t in e&&Vs.test(t)&&H(n)):t==="spellcheck"||t==="draggable"||t==="translate"||t==="form"||t==="list"&&e.tagName==="INPUT"||t==="type"&&e.tagName==="TEXTAREA"||Vs.test(t)&&ue(n)?!1:t in e}const Ut=e=>{const t=e.props["onUpdate:modelValue"]||!1;return z(t)?n=>On(t,n):t};function Ec(e){e.target.composing=!0}function Ws(e){const t=e.target;t.composing&&(t.composing=!1,t.dispatchEvent(new Event("input")))}const oe={created(e,{modifiers:{lazy:t,trim:n,number:i}},s){e._assign=Ut(s);const r=i||s.props&&s.props.type==="number";st(e,t?"change":"input",o=>{if(o.target.composing)return;let l=e.value;n&&(l=l.trim()),r&&(l=Mn(l)),e._assign(l)}),n&&st(e,"change",()=>{e.value=e.value.trim()}),t||(st(e,"compositionstart",Ec),st(e,"compositionend",Ws),st(e,"change",Ws))},mounted(e,{value:t}){e.value=t==null?"":t},beforeUpdate(e,{value:t,modifiers:{lazy:n,trim:i,number:s}},r){if(e._assign=Ut(r),e.composing||document.activeElement===e&&e.type!=="range"&&(n||i&&e.value.trim()===t||(s||e.type==="number")&&Mn(e.value)===t))return;const o=t==null?"":t;e.value!==o&&(e.value=o)}},Ke={created(e,{value:t},n){e.checked=Nt(t,n.props.value),e._assign=Ut(n),st(e,"change",()=>{e._assign(mn(e))})},beforeUpdate(e,{value:t,oldValue:n},i){e._assign=Ut(i),t!==n&&(e.checked=Nt(t,i.props.value))}},Rc={deep:!0,created(e,{value:t,modifiers:{number:n}},i){const s=Qn(t);st(e,"change",()=>{const r=Array.prototype.filter.call(e.options,o=>o.selected).map(o=>n?Mn(mn(o)):mn(o));e._assign(e.multiple?s?new Set(r):r:r[0])}),e._assign=Ut(i)},mounted(e,{value:t}){Ks(e,t)},beforeUpdate(e,t,n){e._assign=Ut(n)},updated(e,{value:t}){Ks(e,t)}};function Ks(e,t){const n=e.multiple;if(!(n&&!z(t)&&!Qn(t))){for(let i=0,s=e.options.length;i<s;i++){const r=e.options[i],o=mn(r);if(n)z(t)?r.selected=fl(t,o)>-1:r.selected=t.has(o);else if(Nt(mn(r),t)){e.selectedIndex!==i&&(e.selectedIndex=i);return}}!n&&e.selectedIndex!==-1&&(e.selectedIndex=-1)}}function mn(e){return"_value"in e?e._value:e.value}const Ic=["ctrl","shift","alt","meta"],Cc={stop:e=>e.stopPropagation(),prevent:e=>e.preventDefault(),self:e=>e.target!==e.currentTarget,ctrl:e=>!e.ctrlKey,shift:e=>!e.shiftKey,alt:e=>!e.altKey,meta:e=>!e.metaKey,left:e=>"button"in e&&e.button!==0,middle:e=>"button"in e&&e.button!==1,right:e=>"button"in e&&e.button!==2,exact:(e,t)=>Ic.some(n=>e[`${n}Key`]&&!t.includes(n))},oi=(e,t)=>(n,...i)=>{for(let s=0;s<t.length;s++){const r=Cc[t[s]];if(r&&r(n,t))return}return e(n,...i)},Ac=_e({patchProp:wc},oc);let Ys;function Oc(){return Ys||(Ys=Fa(Ac))}const Tc=(...e)=>{const t=Oc().createApp(...e),{mount:n}=t;return t.mount=i=>{const s=kc(i);if(!s)return;const r=t._component;!H(r)&&!r.render&&!r.template&&(r.template=s.innerHTML),s.innerHTML="";const o=n(s,!1,s instanceof SVGElement);return s instanceof Element&&(s.removeAttribute("v-cloak"),s.setAttribute("data-v-app","")),o},t};function kc(e){return ue(e)?document.querySelector(e):e}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 *//**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Eo=function(e){const t=[];let n=0;for(let i=0;i<e.length;i++){let s=e.charCodeAt(i);s<128?t[n++]=s:s<2048?(t[n++]=s>>6|192,t[n++]=s&63|128):(s&64512)===55296&&i+1<e.length&&(e.charCodeAt(i+1)&64512)===56320?(s=65536+((s&1023)<<10)+(e.charCodeAt(++i)&1023),t[n++]=s>>18|240,t[n++]=s>>12&63|128,t[n++]=s>>6&63|128,t[n++]=s&63|128):(t[n++]=s>>12|224,t[n++]=s>>6&63|128,t[n++]=s&63|128)}return t},Pc=function(e){const t=[];let n=0,i=0;for(;n<e.length;){const s=e[n++];if(s<128)t[i++]=String.fromCharCode(s);else if(s>191&&s<224){const r=e[n++];t[i++]=String.fromCharCode((s&31)<<6|r&63)}else if(s>239&&s<365){const r=e[n++],o=e[n++],l=e[n++],a=((s&7)<<18|(r&63)<<12|(o&63)<<6|l&63)-65536;t[i++]=String.fromCharCode(55296+(a>>10)),t[i++]=String.fromCharCode(56320+(a&1023))}else{const r=e[n++],o=e[n++];t[i++]=String.fromCharCode((s&15)<<12|(r&63)<<6|o&63)}}return t.join("")},Sc={byteToCharMap_:null,charToByteMap_:null,byteToCharMapWebSafe_:null,charToByteMapWebSafe_:null,ENCODED_VALS_BASE:"ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",get ENCODED_VALS(){return this.ENCODED_VALS_BASE+"+/="},get ENCODED_VALS_WEBSAFE(){return this.ENCODED_VALS_BASE+"-_."},HAS_NATIVE_SUPPORT:typeof atob=="function",encodeByteArray(e,t){if(!Array.isArray(e))throw Error("encodeByteArray takes an array as a parameter");this.init_();const n=t?this.byteToCharMapWebSafe_:this.byteToCharMap_,i=[];for(let s=0;s<e.length;s+=3){const r=e[s],o=s+1<e.length,l=o?e[s+1]:0,a=s+2<e.length,u=a?e[s+2]:0,f=r>>2,p=(r&3)<<4|l>>4;let g=(l&15)<<2|u>>6,c=u&63;a||(c=64,o||(g=64)),i.push(n[f],n[p],n[g],n[c])}return i.join("")},encodeString(e,t){return this.HAS_NATIVE_SUPPORT&&!t?btoa(e):this.encodeByteArray(Eo(e),t)},decodeString(e,t){return this.HAS_NATIVE_SUPPORT&&!t?atob(e):Pc(this.decodeStringToByteArray(e,t))},decodeStringToByteArray(e,t){this.init_();const n=t?this.charToByteMapWebSafe_:this.charToByteMap_,i=[];for(let s=0;s<e.length;){const r=n[e.charAt(s++)],l=s<e.length?n[e.charAt(s)]:0;++s;const u=s<e.length?n[e.charAt(s)]:64;++s;const p=s<e.length?n[e.charAt(s)]:64;if(++s,r==null||l==null||u==null||p==null)throw Error();const g=r<<2|l>>4;if(i.push(g),u!==64){const c=l<<4&240|u>>2;if(i.push(c),p!==64){const R=u<<6&192|p;i.push(R)}}}return i},init_(){if(!this.byteToCharMap_){this.byteToCharMap_={},this.charToByteMap_={},this.byteToCharMapWebSafe_={},this.charToByteMapWebSafe_={};for(let e=0;e<this.ENCODED_VALS.length;e++)this.byteToCharMap_[e]=this.ENCODED_VALS.charAt(e),this.charToByteMap_[this.byteToCharMap_[e]]=e,this.byteToCharMapWebSafe_[e]=this.ENCODED_VALS_WEBSAFE.charAt(e),this.charToByteMapWebSafe_[this.byteToCharMapWebSafe_[e]]=e,e>=this.ENCODED_VALS_BASE.length&&(this.charToByteMap_[this.ENCODED_VALS_WEBSAFE.charAt(e)]=e,this.charToByteMapWebSafe_[this.ENCODED_VALS.charAt(e)]=e)}}},Dc=function(e){const t=Eo(e);return Sc.encodeByteArray(t,!0)},Ro=function(e){return Dc(e).replace(/\./g,"")};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class $c{constructor(){this.reject=()=>{},this.resolve=()=>{},this.promise=new Promise((t,n)=>{this.resolve=t,this.reject=n})}wrapCallback(t){return(n,i)=>{n?this.reject(n):this.resolve(i),typeof t=="function"&&(this.promise.catch(()=>{}),t.length===1?t(n):t(n,i))}}}function Mc(){return typeof indexedDB=="object"}function Nc(){return new Promise((e,t)=>{try{let n=!0;const i="validate-browser-context-for-indexeddb-analytics-module",s=self.indexedDB.open(i);s.onsuccess=()=>{s.result.close(),n||self.indexedDB.deleteDatabase(i),e(!0)},s.onupgradeneeded=()=>{n=!1},s.onerror=()=>{var r;t(((r=s.error)===null||r===void 0?void 0:r.message)||"")}}catch(n){t(n)}})}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const zc="FirebaseError";class ei extends Error{constructor(t,n,i){super(n),this.code=t,this.customData=i,this.name=zc,Object.setPrototypeOf(this,ei.prototype),Error.captureStackTrace&&Error.captureStackTrace(this,Io.prototype.create)}}class Io{constructor(t,n,i){this.service=t,this.serviceName=n,this.errors=i}create(t,...n){const i=n[0]||{},s=`${this.service}/${t}`,r=this.errors[t],o=r?Bc(r,i):"Error",l=`${this.serviceName}: ${o} (${s}).`;return new ei(s,l,i)}}function Bc(e,t){return e.replace(Lc,(n,i)=>{const s=t[i];return s!=null?String(s):`<${i}?>`})}const Lc=/\{\$([^}]+)}/g;function Pi(e,t){if(e===t)return!0;const n=Object.keys(e),i=Object.keys(t);for(const s of n){if(!i.includes(s))return!1;const r=e[s],o=t[s];if(qs(r)&&qs(o)){if(!Pi(r,o))return!1}else if(r!==o)return!1}for(const s of i)if(!n.includes(s))return!1;return!0}function qs(e){return e!==null&&typeof e=="object"}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function ss(e){return e&&e._delegate?e._delegate:e}class pn{constructor(t,n,i){this.name=t,this.instanceFactory=n,this.type=i,this.multipleInstances=!1,this.serviceProps={},this.instantiationMode="LAZY",this.onInstanceCreated=null}setInstantiationMode(t){return this.instantiationMode=t,this}setMultipleInstances(t){return this.multipleInstances=t,this}setServiceProps(t){return this.serviceProps=t,this}setInstanceCreatedCallback(t){return this.onInstanceCreated=t,this}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const mt="[DEFAULT]";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Uc{constructor(t,n){this.name=t,this.container=n,this.component=null,this.instances=new Map,this.instancesDeferred=new Map,this.instancesOptions=new Map,this.onInitCallbacks=new Map}get(t){const n=this.normalizeInstanceIdentifier(t);if(!this.instancesDeferred.has(n)){const i=new $c;if(this.instancesDeferred.set(n,i),this.isInitialized(n)||this.shouldAutoInitialize())try{const s=this.getOrInitializeService({instanceIdentifier:n});s&&i.resolve(s)}catch{}}return this.instancesDeferred.get(n).promise}getImmediate(t){var n;const i=this.normalizeInstanceIdentifier(t==null?void 0:t.identifier),s=(n=t==null?void 0:t.optional)!==null&&n!==void 0?n:!1;if(this.isInitialized(i)||this.shouldAutoInitialize())try{return this.getOrInitializeService({instanceIdentifier:i})}catch(r){if(s)return null;throw r}else{if(s)return null;throw Error(`Service ${this.name} is not available`)}}getComponent(){return this.component}setComponent(t){if(t.name!==this.name)throw Error(`Mismatching Component ${t.name} for Provider ${this.name}.`);if(this.component)throw Error(`Component for ${this.name} has already been provided`);if(this.component=t,!!this.shouldAutoInitialize()){if(Hc(t))try{this.getOrInitializeService({instanceIdentifier:mt})}catch{}for(const[n,i]of this.instancesDeferred.entries()){const s=this.normalizeInstanceIdentifier(n);try{const r=this.getOrInitializeService({instanceIdentifier:s});i.resolve(r)}catch{}}}}clearInstance(t=mt){this.instancesDeferred.delete(t),this.instancesOptions.delete(t),this.instances.delete(t)}async delete(){const t=Array.from(this.instances.values());await Promise.all([...t.filter(n=>"INTERNAL"in n).map(n=>n.INTERNAL.delete()),...t.filter(n=>"_delete"in n).map(n=>n._delete())])}isComponentSet(){return this.component!=null}isInitialized(t=mt){return this.instances.has(t)}getOptions(t=mt){return this.instancesOptions.get(t)||{}}initialize(t={}){const{options:n={}}=t,i=this.normalizeInstanceIdentifier(t.instanceIdentifier);if(this.isInitialized(i))throw Error(`${this.name}(${i}) has already been initialized`);if(!this.isComponentSet())throw Error(`Component ${this.name} has not been registered yet`);const s=this.getOrInitializeService({instanceIdentifier:i,options:n});for(const[r,o]of this.instancesDeferred.entries()){const l=this.normalizeInstanceIdentifier(r);i===l&&o.resolve(s)}return s}onInit(t,n){var i;const s=this.normalizeInstanceIdentifier(n),r=(i=this.onInitCallbacks.get(s))!==null&&i!==void 0?i:new Set;r.add(t),this.onInitCallbacks.set(s,r);const o=this.instances.get(s);return o&&t(o,s),()=>{r.delete(t)}}invokeOnInitCallbacks(t,n){const i=this.onInitCallbacks.get(n);if(!!i)for(const s of i)try{s(t,n)}catch{}}getOrInitializeService({instanceIdentifier:t,options:n={}}){let i=this.instances.get(t);if(!i&&this.component&&(i=this.component.instanceFactory(this.container,{instanceIdentifier:Fc(t),options:n}),this.instances.set(t,i),this.instancesOptions.set(t,n),this.invokeOnInitCallbacks(i,t),this.component.onInstanceCreated))try{this.component.onInstanceCreated(this.container,t,i)}catch{}return i||null}normalizeInstanceIdentifier(t=mt){return this.component?this.component.multipleInstances?t:mt:t}shouldAutoInitialize(){return!!this.component&&this.component.instantiationMode!=="EXPLICIT"}}function Fc(e){return e===mt?void 0:e}function Hc(e){return e.instantiationMode==="EAGER"}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class jc{constructor(t){this.name=t,this.providers=new Map}addComponent(t){const n=this.getProvider(t.name);if(n.isComponentSet())throw new Error(`Component ${t.name} has already been registered with ${this.name}`);n.setComponent(t)}addOrOverwriteComponent(t){this.getProvider(t.name).isComponentSet()&&this.providers.delete(t.name),this.addComponent(t)}getProvider(t){if(this.providers.has(t))return this.providers.get(t);const n=new Uc(t,this);return this.providers.set(t,n),n}getProviders(){return Array.from(this.providers.values())}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */var re;(function(e){e[e.DEBUG=0]="DEBUG",e[e.VERBOSE=1]="VERBOSE",e[e.INFO=2]="INFO",e[e.WARN=3]="WARN",e[e.ERROR=4]="ERROR",e[e.SILENT=5]="SILENT"})(re||(re={}));const Qc={debug:re.DEBUG,verbose:re.VERBOSE,info:re.INFO,warn:re.WARN,error:re.ERROR,silent:re.SILENT},Vc=re.INFO,Wc={[re.DEBUG]:"log",[re.VERBOSE]:"log",[re.INFO]:"info",[re.WARN]:"warn",[re.ERROR]:"error"},Kc=(e,t,...n)=>{if(t<e.logLevel)return;const i=new Date().toISOString(),s=Wc[t];if(s)console[s](`[${i}]  ${e.name}:`,...n);else throw new Error(`Attempted to log a message with an invalid logType (value: ${t})`)};class Yc{constructor(t){this.name=t,this._logLevel=Vc,this._logHandler=Kc,this._userLogHandler=null}get logLevel(){return this._logLevel}set logLevel(t){if(!(t in re))throw new TypeError(`Invalid value "${t}" assigned to \`logLevel\``);this._logLevel=t}setLogLevel(t){this._logLevel=typeof t=="string"?Qc[t]:t}get logHandler(){return this._logHandler}set logHandler(t){if(typeof t!="function")throw new TypeError("Value assigned to `logHandler` must be a function");this._logHandler=t}get userLogHandler(){return this._userLogHandler}set userLogHandler(t){this._userLogHandler=t}debug(...t){this._userLogHandler&&this._userLogHandler(this,re.DEBUG,...t),this._logHandler(this,re.DEBUG,...t)}log(...t){this._userLogHandler&&this._userLogHandler(this,re.VERBOSE,...t),this._logHandler(this,re.VERBOSE,...t)}info(...t){this._userLogHandler&&this._userLogHandler(this,re.INFO,...t),this._logHandler(this,re.INFO,...t)}warn(...t){this._userLogHandler&&this._userLogHandler(this,re.WARN,...t),this._logHandler(this,re.WARN,...t)}error(...t){this._userLogHandler&&this._userLogHandler(this,re.ERROR,...t),this._logHandler(this,re.ERROR,...t)}}const qc=(e,t)=>t.some(n=>e instanceof n);let Gs,Js;function Gc(){return Gs||(Gs=[IDBDatabase,IDBObjectStore,IDBIndex,IDBCursor,IDBTransaction])}function Jc(){return Js||(Js=[IDBCursor.prototype.advance,IDBCursor.prototype.continue,IDBCursor.prototype.continuePrimaryKey])}const Co=new WeakMap,Si=new WeakMap,Ao=new WeakMap,li=new WeakMap,rs=new WeakMap;function Xc(e){const t=new Promise((n,i)=>{const s=()=>{e.removeEventListener("success",r),e.removeEventListener("error",o)},r=()=>{n(ct(e.result)),s()},o=()=>{i(e.error),s()};e.addEventListener("success",r),e.addEventListener("error",o)});return t.then(n=>{n instanceof IDBCursor&&Co.set(n,e)}).catch(()=>{}),rs.set(t,e),t}function Zc(e){if(Si.has(e))return;const t=new Promise((n,i)=>{const s=()=>{e.removeEventListener("complete",r),e.removeEventListener("error",o),e.removeEventListener("abort",o)},r=()=>{n(),s()},o=()=>{i(e.error||new DOMException("AbortError","AbortError")),s()};e.addEventListener("complete",r),e.addEventListener("error",o),e.addEventListener("abort",o)});Si.set(e,t)}let Di={get(e,t,n){if(e instanceof IDBTransaction){if(t==="done")return Si.get(e);if(t==="objectStoreNames")return e.objectStoreNames||Ao.get(e);if(t==="store")return n.objectStoreNames[1]?void 0:n.objectStore(n.objectStoreNames[0])}return ct(e[t])},set(e,t,n){return e[t]=n,!0},has(e,t){return e instanceof IDBTransaction&&(t==="done"||t==="store")?!0:t in e}};function ed(e){Di=e(Di)}function td(e){return e===IDBDatabase.prototype.transaction&&!("objectStoreNames"in IDBTransaction.prototype)?function(t,...n){const i=e.call(ai(this),t,...n);return Ao.set(i,t.sort?t.sort():[t]),ct(i)}:Jc().includes(e)?function(...t){return e.apply(ai(this),t),ct(Co.get(this))}:function(...t){return ct(e.apply(ai(this),t))}}function nd(e){return typeof e=="function"?td(e):(e instanceof IDBTransaction&&Zc(e),qc(e,Gc())?new Proxy(e,Di):e)}function ct(e){if(e instanceof IDBRequest)return Xc(e);if(li.has(e))return li.get(e);const t=nd(e);return t!==e&&(li.set(e,t),rs.set(t,e)),t}const ai=e=>rs.get(e);function id(e,t,{blocked:n,upgrade:i,blocking:s,terminated:r}={}){const o=indexedDB.open(e,t),l=ct(o);return i&&o.addEventListener("upgradeneeded",a=>{i(ct(o.result),a.oldVersion,a.newVersion,ct(o.transaction))}),n&&o.addEventListener("blocked",()=>n()),l.then(a=>{r&&a.addEventListener("close",()=>r()),s&&a.addEventListener("versionchange",()=>s())}).catch(()=>{}),l}const sd=["get","getKey","getAll","getAllKeys","count"],rd=["put","add","delete","clear"],ci=new Map;function Xs(e,t){if(!(e instanceof IDBDatabase&&!(t in e)&&typeof t=="string"))return;if(ci.get(t))return ci.get(t);const n=t.replace(/FromIndex$/,""),i=t!==n,s=rd.includes(n);if(!(n in(i?IDBIndex:IDBObjectStore).prototype)||!(s||sd.includes(n)))return;const r=async function(o,...l){const a=this.transaction(o,s?"readwrite":"readonly");let u=a.store;return i&&(u=u.index(l.shift())),(await Promise.all([u[n](...l),s&&a.done]))[0]};return ci.set(t,r),r}ed(e=>_s(ys({},e),{get:(t,n,i)=>Xs(t,n)||e.get(t,n,i),has:(t,n)=>!!Xs(t,n)||e.has(t,n)}));/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class od{constructor(t){this.container=t}getPlatformInfoString(){return this.container.getProviders().map(n=>{if(ld(n)){const i=n.getImmediate();return`${i.library}/${i.version}`}else return null}).filter(n=>n).join(" ")}}function ld(e){const t=e.getComponent();return(t==null?void 0:t.type)==="VERSION"}const $i="@firebase/app",Zs="0.7.26";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const os=new Yc("@firebase/app"),ad="@firebase/app-compat",cd="@firebase/analytics-compat",dd="@firebase/analytics",ud="@firebase/app-check-compat",fd="@firebase/app-check",hd="@firebase/auth",md="@firebase/auth-compat",pd="@firebase/database",gd="@firebase/database-compat",yd="@firebase/functions",_d="@firebase/functions-compat",bd="@firebase/installations",vd="@firebase/installations-compat",wd="@firebase/messaging",xd="@firebase/messaging-compat",Ed="@firebase/performance",Rd="@firebase/performance-compat",Id="@firebase/remote-config",Cd="@firebase/remote-config-compat",Ad="@firebase/storage",Od="@firebase/storage-compat",Td="@firebase/firestore",kd="@firebase/firestore-compat",Pd="firebase",Sd="9.8.3";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Oo="[DEFAULT]",Dd={[$i]:"fire-core",[ad]:"fire-core-compat",[dd]:"fire-analytics",[cd]:"fire-analytics-compat",[fd]:"fire-app-check",[ud]:"fire-app-check-compat",[hd]:"fire-auth",[md]:"fire-auth-compat",[pd]:"fire-rtdb",[gd]:"fire-rtdb-compat",[yd]:"fire-fn",[_d]:"fire-fn-compat",[bd]:"fire-iid",[vd]:"fire-iid-compat",[wd]:"fire-fcm",[xd]:"fire-fcm-compat",[Ed]:"fire-perf",[Rd]:"fire-perf-compat",[Id]:"fire-rc",[Cd]:"fire-rc-compat",[Ad]:"fire-gcs",[Od]:"fire-gcs-compat",[Td]:"fire-fst",[kd]:"fire-fst-compat","fire-js":"fire-js",[Pd]:"fire-js-all"};/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Un=new Map,Mi=new Map;function $d(e,t){try{e.container.addComponent(t)}catch(n){os.debug(`Component ${t.name} failed to register with FirebaseApp ${e.name}`,n)}}function Fn(e){const t=e.name;if(Mi.has(t))return os.debug(`There were multiple attempts to register component ${t}.`),!1;Mi.set(t,e);for(const n of Un.values())$d(n,e);return!0}function Md(e,t){const n=e.container.getProvider("heartbeat").getImmediate({optional:!0});return n&&n.triggerHeartbeat(),e.container.getProvider(t)}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Nd={["no-app"]:"No Firebase App '{$appName}' has been created - call Firebase App.initializeApp()",["bad-app-name"]:"Illegal App name: '{$appName}",["duplicate-app"]:"Firebase App named '{$appName}' already exists with different options or config",["app-deleted"]:"Firebase App named '{$appName}' already deleted",["invalid-app-argument"]:"firebase.{$appName}() takes either no argument or a Firebase App instance.",["invalid-log-argument"]:"First argument to `onLog` must be null or a function.",["storage-open"]:"Error thrown when opening storage. Original error: {$originalErrorMessage}.",["storage-get"]:"Error thrown when reading from storage. Original error: {$originalErrorMessage}.",["storage-set"]:"Error thrown when writing to storage. Original error: {$originalErrorMessage}.",["storage-delete"]:"Error thrown when deleting from storage. Original error: {$originalErrorMessage}."},wt=new Io("app","Firebase",Nd);/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class zd{constructor(t,n,i){this._isDeleted=!1,this._options=Object.assign({},t),this._config=Object.assign({},n),this._name=n.name,this._automaticDataCollectionEnabled=n.automaticDataCollectionEnabled,this._container=i,this.container.addComponent(new pn("app",()=>this,"PUBLIC"))}get automaticDataCollectionEnabled(){return this.checkDestroyed(),this._automaticDataCollectionEnabled}set automaticDataCollectionEnabled(t){this.checkDestroyed(),this._automaticDataCollectionEnabled=t}get name(){return this.checkDestroyed(),this._name}get options(){return this.checkDestroyed(),this._options}get config(){return this.checkDestroyed(),this._config}get container(){return this._container}get isDeleted(){return this._isDeleted}set isDeleted(t){this._isDeleted=t}checkDestroyed(){if(this.isDeleted)throw wt.create("app-deleted",{appName:this._name})}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Bd=Sd;function Ld(e,t={}){typeof t!="object"&&(t={name:t});const n=Object.assign({name:Oo,automaticDataCollectionEnabled:!1},t),i=n.name;if(typeof i!="string"||!i)throw wt.create("bad-app-name",{appName:String(i)});const s=Un.get(i);if(s){if(Pi(e,s.options)&&Pi(n,s.config))return s;throw wt.create("duplicate-app",{appName:i})}const r=new jc(i);for(const l of Mi.values())r.addComponent(l);const o=new zd(e,n,r);return Un.set(i,o),o}function Ud(e=Oo){const t=Un.get(e);if(!t)throw wt.create("no-app",{appName:e});return t}function Mt(e,t,n){var i;let s=(i=Dd[e])!==null&&i!==void 0?i:e;n&&(s+=`-${n}`);const r=s.match(/\s|\//),o=t.match(/\s|\//);if(r||o){const l=[`Unable to register library "${s}" with version "${t}":`];r&&l.push(`library name "${s}" contains illegal characters (whitespace or "/")`),r&&o&&l.push("and"),o&&l.push(`version name "${t}" contains illegal characters (whitespace or "/")`),os.warn(l.join(" "));return}Fn(new pn(`${s}-version`,()=>({library:s,version:t}),"VERSION"))}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Fd="firebase-heartbeat-database",Hd=1,gn="firebase-heartbeat-store";let di=null;function To(){return di||(di=id(Fd,Hd,{upgrade:(e,t)=>{switch(t){case 0:e.createObjectStore(gn)}}}).catch(e=>{throw wt.create("storage-open",{originalErrorMessage:e.message})})),di}async function jd(e){var t;try{return(await To()).transaction(gn).objectStore(gn).get(ko(e))}catch(n){throw wt.create("storage-get",{originalErrorMessage:(t=n)===null||t===void 0?void 0:t.message})}}async function er(e,t){var n;try{const s=(await To()).transaction(gn,"readwrite");return await s.objectStore(gn).put(t,ko(e)),s.done}catch(i){throw wt.create("storage-set",{originalErrorMessage:(n=i)===null||n===void 0?void 0:n.message})}}function ko(e){return`${e.name}!${e.options.appId}`}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Qd=1024,Vd=30*24*60*60*1e3;class Wd{constructor(t){this.container=t,this._heartbeatsCache=null;const n=this.container.getProvider("app").getImmediate();this._storage=new Yd(n),this._heartbeatsCachePromise=this._storage.read().then(i=>(this._heartbeatsCache=i,i))}async triggerHeartbeat(){const n=this.container.getProvider("platform-logger").getImmediate().getPlatformInfoString(),i=tr();if(this._heartbeatsCache===null&&(this._heartbeatsCache=await this._heartbeatsCachePromise),!(this._heartbeatsCache.lastSentHeartbeatDate===i||this._heartbeatsCache.heartbeats.some(s=>s.date===i)))return this._heartbeatsCache.heartbeats.push({date:i,agent:n}),this._heartbeatsCache.heartbeats=this._heartbeatsCache.heartbeats.filter(s=>{const r=new Date(s.date).valueOf();return Date.now()-r<=Vd}),this._storage.overwrite(this._heartbeatsCache)}async getHeartbeatsHeader(){if(this._heartbeatsCache===null&&await this._heartbeatsCachePromise,this._heartbeatsCache===null||this._heartbeatsCache.heartbeats.length===0)return"";const t=tr(),{heartbeatsToSend:n,unsentEntries:i}=Kd(this._heartbeatsCache.heartbeats),s=Ro(JSON.stringify({version:2,heartbeats:n}));return this._heartbeatsCache.lastSentHeartbeatDate=t,i.length>0?(this._heartbeatsCache.heartbeats=i,await this._storage.overwrite(this._heartbeatsCache)):(this._heartbeatsCache.heartbeats=[],this._storage.overwrite(this._heartbeatsCache)),s}}function tr(){return new Date().toISOString().substring(0,10)}function Kd(e,t=Qd){const n=[];let i=e.slice();for(const s of e){const r=n.find(o=>o.agent===s.agent);if(r){if(r.dates.push(s.date),nr(n)>t){r.dates.pop();break}}else if(n.push({agent:s.agent,dates:[s.date]}),nr(n)>t){n.pop();break}i=i.slice(1)}return{heartbeatsToSend:n,unsentEntries:i}}class Yd{constructor(t){this.app=t,this._canUseIndexedDBPromise=this.runIndexedDBEnvironmentCheck()}async runIndexedDBEnvironmentCheck(){return Mc()?Nc().then(()=>!0).catch(()=>!1):!1}async read(){return await this._canUseIndexedDBPromise?await jd(this.app)||{heartbeats:[]}:{heartbeats:[]}}async overwrite(t){var n;if(await this._canUseIndexedDBPromise){const s=await this.read();return er(this.app,{lastSentHeartbeatDate:(n=t.lastSentHeartbeatDate)!==null&&n!==void 0?n:s.lastSentHeartbeatDate,heartbeats:t.heartbeats})}else return}async add(t){var n;if(await this._canUseIndexedDBPromise){const s=await this.read();return er(this.app,{lastSentHeartbeatDate:(n=t.lastSentHeartbeatDate)!==null&&n!==void 0?n:s.lastSentHeartbeatDate,heartbeats:[...s.heartbeats,...t.heartbeats]})}else return}}function nr(e){return Ro(JSON.stringify({version:2,heartbeats:e})).length}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function qd(e){Fn(new pn("platform-logger",t=>new od(t),"PRIVATE")),Fn(new pn("heartbeat",t=>new Wd(t),"PRIVATE")),Mt($i,Zs,e),Mt($i,Zs,"esm2017"),Mt("fire-js","")}qd("");var Gd="firebase",Jd="9.8.3";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */Mt(Gd,Jd,"app");/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Po="firebasestorage.googleapis.com",So="storageBucket",Xd=2*60*1e3,Zd=10*60*1e3;/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class de extends ei{constructor(t,n){super(ui(t),`Firebase Storage: ${n} (${ui(t)})`),this.customData={serverResponse:null},this._baseMessage=this.message,Object.setPrototypeOf(this,de.prototype)}_codeEquals(t){return ui(t)===this.code}get serverResponse(){return this.customData.serverResponse}set serverResponse(t){this.customData.serverResponse=t,this.customData.serverResponse?this.message=`${this._baseMessage}
${this.customData.serverResponse}`:this.message=this._baseMessage}}function ui(e){return"storage/"+e}function ls(){const e="An unknown error occurred, please check the error payload for server response.";return new de("unknown",e)}function eu(e){return new de("quota-exceeded","Quota for bucket '"+e+"' exceeded, please view quota on https://firebase.google.com/pricing/.")}function tu(){const e="User is not authenticated, please authenticate using Firebase Authentication and try again.";return new de("unauthenticated",e)}function nu(){return new de("unauthorized-app","This app does not have permission to access Firebase Storage on this project.")}function iu(e){return new de("unauthorized","User does not have permission to access '"+e+"'.")}function su(){return new de("retry-limit-exceeded","Max retry time for operation exceeded, please try again.")}function ru(){return new de("canceled","User canceled the upload/download.")}function ou(e){return new de("invalid-url","Invalid URL '"+e+"'.")}function lu(e){return new de("invalid-default-bucket","Invalid default bucket '"+e+"'.")}function au(){return new de("no-default-bucket","No default bucket found. Did you set the '"+So+"' property when initializing the app?")}function cu(){return new de("cannot-slice-blob","Cannot slice blob for upload. Please retry the upload.")}function Ni(e){return new de("invalid-argument",e)}function Do(){return new de("app-deleted","The Firebase app was deleted.")}function du(e){return new de("invalid-root-operation","The operation '"+e+"' cannot be performed on a root reference, create a non-root reference using child, such as .child('file.png').")}function sn(e,t){return new de("invalid-format","String does not match format '"+e+"': "+t)}function qt(e){throw new de("internal-error","Internal error: "+e)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Re{constructor(t,n){this.bucket=t,this.path_=n}get path(){return this.path_}get isRoot(){return this.path.length===0}fullServerUrl(){const t=encodeURIComponent;return"/b/"+t(this.bucket)+"/o/"+t(this.path)}bucketOnlyServerUrl(){return"/b/"+encodeURIComponent(this.bucket)+"/o"}static makeFromBucketSpec(t,n){let i;try{i=Re.makeFromUrl(t,n)}catch{return new Re(t,"")}if(i.path==="")return i;throw lu(t)}static makeFromUrl(t,n){let i=null;const s="([A-Za-z0-9.\\-_]+)";function r(L){L.path.charAt(L.path.length-1)==="/"&&(L.path_=L.path_.slice(0,-1))}const o="(/(.*))?$",l=new RegExp("^gs://"+s+o,"i"),a={bucket:1,path:3};function u(L){L.path_=decodeURIComponent(L.path)}const f="v[A-Za-z0-9_]+",p=n.replace(/[.]/g,"\\."),g="(/([^?#]*).*)?$",c=new RegExp(`^https?://${p}/${f}/b/${s}/o${g}`,"i"),R={bucket:1,path:3},S=n===Po?"(?:storage.googleapis.com|storage.cloud.google.com)":n,A="([^?#]*)",T=new RegExp(`^https?://${S}/${s}/${A}`,"i"),U=[{regex:l,indices:a,postModify:r},{regex:c,indices:R,postModify:u},{regex:T,indices:{bucket:1,path:2},postModify:u}];for(let L=0;L<U.length;L++){const ae=U[L],fe=ae.regex.exec(t);if(fe){const Ae=fe[ae.indices.bucket];let Me=fe[ae.indices.path];Me||(Me=""),i=new Re(Ae,Me),ae.postModify(i);break}}if(i==null)throw ou(t);return i}}class uu{constructor(t){this.promise_=Promise.reject(t)}getPromise(){return this.promise_}cancel(t=!1){}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function fu(e,t,n){let i=1,s=null,r=null,o=!1,l=0;function a(){return l===2}let u=!1;function f(...A){u||(u=!0,t.apply(null,A))}function p(A){s=setTimeout(()=>{s=null,e(c,a())},A)}function g(){r&&clearTimeout(r)}function c(A,...T){if(u){g();return}if(A){g(),f.call(null,A,...T);return}if(a()||o){g(),f.call(null,A,...T);return}i<64&&(i*=2);let U;l===1?(l=2,U=0):U=(i+Math.random())*1e3,p(U)}let R=!1;function S(A){R||(R=!0,g(),!u&&(s!==null?(A||(l=2),clearTimeout(s),p(0)):A||(l=1)))}return p(0),r=setTimeout(()=>{o=!0,S(!0)},n),S}function hu(e){e(!1)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function mu(e){return e!==void 0}function pu(e){return typeof e=="object"&&!Array.isArray(e)}function $o(e){return typeof e=="string"||e instanceof String}function ir(e){return as()&&e instanceof Blob}function as(){return typeof Blob!="undefined"}function sr(e,t,n,i){if(i<t)throw Ni(`Invalid value for '${e}'. Expected ${t} or greater.`);if(i>n)throw Ni(`Invalid value for '${e}'. Expected ${n} or less.`)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function gu(e,t,n){let i=t;return n==null&&(i=`https://${t}`),`${n}://${i}/v0${e}`}function yu(e){const t=encodeURIComponent;let n="?";for(const i in e)if(e.hasOwnProperty(i)){const s=t(i)+"="+t(e[i]);n=n+s+"&"}return n=n.slice(0,-1),n}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */var bt;(function(e){e[e.NO_ERROR=0]="NO_ERROR",e[e.NETWORK_ERROR=1]="NETWORK_ERROR",e[e.ABORT=2]="ABORT"})(bt||(bt={}));/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class _u{constructor(t,n,i,s,r,o,l,a,u,f,p){this.url_=t,this.method_=n,this.headers_=i,this.body_=s,this.successCodes_=r,this.additionalRetryCodes_=o,this.callback_=l,this.errorCallback_=a,this.timeout_=u,this.progressCallback_=f,this.connectionFactory_=p,this.pendingConnection_=null,this.backoffId_=null,this.canceled_=!1,this.appDelete_=!1,this.promise_=new Promise((g,c)=>{this.resolve_=g,this.reject_=c,this.start_()})}start_(){const t=(i,s)=>{if(s){i(!1,new In(!1,null,!0));return}const r=this.connectionFactory_();this.pendingConnection_=r;const o=l=>{const a=l.loaded,u=l.lengthComputable?l.total:-1;this.progressCallback_!==null&&this.progressCallback_(a,u)};this.progressCallback_!==null&&r.addUploadProgressListener(o),r.send(this.url_,this.method_,this.body_,this.headers_).then(()=>{this.progressCallback_!==null&&r.removeUploadProgressListener(o),this.pendingConnection_=null;const l=r.getErrorCode()===bt.NO_ERROR,a=r.getStatus();if(!l||this.isRetryStatusCode_(a)){const f=r.getErrorCode()===bt.ABORT;i(!1,new In(!1,null,f));return}const u=this.successCodes_.indexOf(a)!==-1;i(!0,new In(u,r))})},n=(i,s)=>{const r=this.resolve_,o=this.reject_,l=s.connection;if(s.wasSuccessCode)try{const a=this.callback_(l,l.getResponse());mu(a)?r(a):r()}catch(a){o(a)}else if(l!==null){const a=ls();a.serverResponse=l.getErrorText(),this.errorCallback_?o(this.errorCallback_(l,a)):o(a)}else if(s.canceled){const a=this.appDelete_?Do():ru();o(a)}else{const a=su();o(a)}};this.canceled_?n(!1,new In(!1,null,!0)):this.backoffId_=fu(t,n,this.timeout_)}getPromise(){return this.promise_}cancel(t){this.canceled_=!0,this.appDelete_=t||!1,this.backoffId_!==null&&hu(this.backoffId_),this.pendingConnection_!==null&&this.pendingConnection_.abort()}isRetryStatusCode_(t){const n=t>=500&&t<600,s=[408,429].indexOf(t)!==-1,r=this.additionalRetryCodes_.indexOf(t)!==-1;return n||s||r}}class In{constructor(t,n,i){this.wasSuccessCode=t,this.connection=n,this.canceled=!!i}}function bu(e,t){t!==null&&t.length>0&&(e.Authorization="Firebase "+t)}function vu(e,t){e["X-Firebase-Storage-Version"]="webjs/"+(t!=null?t:"AppManager")}function wu(e,t){t&&(e["X-Firebase-GMPID"]=t)}function xu(e,t){t!==null&&(e["X-Firebase-AppCheck"]=t)}function Eu(e,t,n,i,s,r){const o=yu(e.urlParams),l=e.url+o,a=Object.assign({},e.headers);return wu(a,t),bu(a,n),vu(a,r),xu(a,i),new _u(l,e.method,a,e.body,e.successCodes,e.additionalRetryCodes,e.handler,e.errorHandler,e.timeout,e.progressCallback,s)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Ru(){return typeof BlobBuilder!="undefined"?BlobBuilder:typeof WebKitBlobBuilder!="undefined"?WebKitBlobBuilder:void 0}function Iu(...e){const t=Ru();if(t!==void 0){const n=new t;for(let i=0;i<e.length;i++)n.append(e[i]);return n.getBlob()}else{if(as())return new Blob(e);throw new de("unsupported-environment","This browser doesn't seem to support creating Blobs")}}function Cu(e,t,n){return e.webkitSlice?e.webkitSlice(t,n):e.mozSlice?e.mozSlice(t,n):e.slice?e.slice(t,n):null}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Au(e){return atob(e)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Qe={RAW:"raw",BASE64:"base64",BASE64URL:"base64url",DATA_URL:"data_url"};class fi{constructor(t,n){this.data=t,this.contentType=n||null}}function Ou(e,t){switch(e){case Qe.RAW:return new fi(Mo(t));case Qe.BASE64:case Qe.BASE64URL:return new fi(No(e,t));case Qe.DATA_URL:return new fi(ku(t),Pu(t))}throw ls()}function Mo(e){const t=[];for(let n=0;n<e.length;n++){let i=e.charCodeAt(n);if(i<=127)t.push(i);else if(i<=2047)t.push(192|i>>6,128|i&63);else if((i&64512)===55296)if(!(n<e.length-1&&(e.charCodeAt(n+1)&64512)===56320))t.push(239,191,189);else{const r=i,o=e.charCodeAt(++n);i=65536|(r&1023)<<10|o&1023,t.push(240|i>>18,128|i>>12&63,128|i>>6&63,128|i&63)}else(i&64512)===56320?t.push(239,191,189):t.push(224|i>>12,128|i>>6&63,128|i&63)}return new Uint8Array(t)}function Tu(e){let t;try{t=decodeURIComponent(e)}catch{throw sn(Qe.DATA_URL,"Malformed data URL.")}return Mo(t)}function No(e,t){switch(e){case Qe.BASE64:{const s=t.indexOf("-")!==-1,r=t.indexOf("_")!==-1;if(s||r)throw sn(e,"Invalid character '"+(s?"-":"_")+"' found: is it base64url encoded?");break}case Qe.BASE64URL:{const s=t.indexOf("+")!==-1,r=t.indexOf("/")!==-1;if(s||r)throw sn(e,"Invalid character '"+(s?"+":"/")+"' found: is it base64 encoded?");t=t.replace(/-/g,"+").replace(/_/g,"/");break}}let n;try{n=Au(t)}catch{throw sn(e,"Invalid character found")}const i=new Uint8Array(n.length);for(let s=0;s<n.length;s++)i[s]=n.charCodeAt(s);return i}class zo{constructor(t){this.base64=!1,this.contentType=null;const n=t.match(/^data:([^,]+)?,/);if(n===null)throw sn(Qe.DATA_URL,"Must be formatted 'data:[<mediatype>][;base64],<data>");const i=n[1]||null;i!=null&&(this.base64=Su(i,";base64"),this.contentType=this.base64?i.substring(0,i.length-7):i),this.rest=t.substring(t.indexOf(",")+1)}}function ku(e){const t=new zo(e);return t.base64?No(Qe.BASE64,t.rest):Tu(t.rest)}function Pu(e){return new zo(e).contentType}function Su(e,t){return e.length>=t.length?e.substring(e.length-t.length)===t:!1}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class rt{constructor(t,n){let i=0,s="";ir(t)?(this.data_=t,i=t.size,s=t.type):t instanceof ArrayBuffer?(n?this.data_=new Uint8Array(t):(this.data_=new Uint8Array(t.byteLength),this.data_.set(new Uint8Array(t))),i=this.data_.length):t instanceof Uint8Array&&(n?this.data_=t:(this.data_=new Uint8Array(t.length),this.data_.set(t)),i=t.length),this.size_=i,this.type_=s}size(){return this.size_}type(){return this.type_}slice(t,n){if(ir(this.data_)){const i=this.data_,s=Cu(i,t,n);return s===null?null:new rt(s)}else{const i=new Uint8Array(this.data_.buffer,t,n-t);return new rt(i,!0)}}static getBlob(...t){if(as()){const n=t.map(i=>i instanceof rt?i.data_:i);return new rt(Iu.apply(null,n))}else{const n=t.map(o=>$o(o)?Ou(Qe.RAW,o).data:o.data_);let i=0;n.forEach(o=>{i+=o.byteLength});const s=new Uint8Array(i);let r=0;return n.forEach(o=>{for(let l=0;l<o.length;l++)s[r++]=o[l]}),new rt(s,!0)}}uploadData(){return this.data_}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Du(e){let t;try{t=JSON.parse(e)}catch{return null}return pu(t)?t:null}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function $u(e){if(e.length===0)return null;const t=e.lastIndexOf("/");return t===-1?"":e.slice(0,t)}function Mu(e,t){const n=t.split("/").filter(i=>i.length>0).join("/");return e.length===0?n:e+"/"+n}function Bo(e){const t=e.lastIndexOf("/",e.length-2);return t===-1?e:e.slice(t+1)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Nu(e,t){return t}class ge{constructor(t,n,i,s){this.server=t,this.local=n||t,this.writable=!!i,this.xform=s||Nu}}let Cn=null;function zu(e){return!$o(e)||e.length<2?e:Bo(e)}function Bu(){if(Cn)return Cn;const e=[];e.push(new ge("bucket")),e.push(new ge("generation")),e.push(new ge("metageneration")),e.push(new ge("name","fullPath",!0));function t(r,o){return zu(o)}const n=new ge("name");n.xform=t,e.push(n);function i(r,o){return o!==void 0?Number(o):o}const s=new ge("size");return s.xform=i,e.push(s),e.push(new ge("timeCreated")),e.push(new ge("updated")),e.push(new ge("md5Hash",null,!0)),e.push(new ge("cacheControl",null,!0)),e.push(new ge("contentDisposition",null,!0)),e.push(new ge("contentEncoding",null,!0)),e.push(new ge("contentLanguage",null,!0)),e.push(new ge("contentType",null,!0)),e.push(new ge("metadata","customMetadata",!0)),Cn=e,Cn}function Lu(e,t){function n(){const i=e.bucket,s=e.fullPath,r=new Re(i,s);return t._makeStorageReference(r)}Object.defineProperty(e,"ref",{get:n})}function Uu(e,t,n){const i={};i.type="file";const s=n.length;for(let r=0;r<s;r++){const o=n[r];i[o.local]=o.xform(i,t[o.server])}return Lu(i,e),i}function Fu(e,t,n){const i=Du(t);return i===null?null:Uu(e,i,n)}function Hu(e,t){const n={},i=t.length;for(let s=0;s<i;s++){const r=t[s];r.writable&&(n[r.server]=e[r.local])}return JSON.stringify(n)}class ju{constructor(t,n,i,s){this.url=t,this.method=n,this.handler=i,this.timeout=s,this.urlParams={},this.headers={},this.body=null,this.errorHandler=null,this.progressCallback=null,this.successCodes=[200],this.additionalRetryCodes=[]}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Qu(e){if(!e)throw ls()}function Vu(e,t){function n(i,s){const r=Fu(e,s,t);return Qu(r!==null),r}return n}function Wu(e){function t(n,i){let s;return n.getStatus()===401?n.getErrorText().includes("Firebase App Check token is invalid")?s=nu():s=tu():n.getStatus()===402?s=eu(e.bucket):n.getStatus()===403?s=iu(e.path):s=i,s.serverResponse=i.serverResponse,s}return t}function Ku(e,t){return e&&e.contentType||t&&t.type()||"application/octet-stream"}function Yu(e,t,n){const i=Object.assign({},n);return i.fullPath=e.path,i.size=t.size(),i.contentType||(i.contentType=Ku(null,t)),i}function qu(e,t,n,i,s){const r=t.bucketOnlyServerUrl(),o={"X-Goog-Upload-Protocol":"multipart"};function l(){let U="";for(let L=0;L<2;L++)U=U+Math.random().toString().slice(2);return U}const a=l();o["Content-Type"]="multipart/related; boundary="+a;const u=Yu(t,i,s),f=Hu(u,n),p="--"+a+`\r
Content-Type: application/json; charset=utf-8\r
\r
`+f+`\r
--`+a+`\r
Content-Type: `+u.contentType+`\r
\r
`,g=`\r
--`+a+"--",c=rt.getBlob(p,i,g);if(c===null)throw cu();const R={name:u.fullPath},S=gu(r,e.host,e._protocol),A="POST",T=e.maxUploadRetryTime,N=new ju(S,A,Vu(e,n),T);return N.urlParams=R,N.headers=o,N.body=c.uploadData(),N.errorHandler=Wu(t),N}class Gu{constructor(){this.sent_=!1,this.xhr_=new XMLHttpRequest,this.initXhr(),this.errorCode_=bt.NO_ERROR,this.sendPromise_=new Promise(t=>{this.xhr_.addEventListener("abort",()=>{this.errorCode_=bt.ABORT,t()}),this.xhr_.addEventListener("error",()=>{this.errorCode_=bt.NETWORK_ERROR,t()}),this.xhr_.addEventListener("load",()=>{t()})})}send(t,n,i,s){if(this.sent_)throw qt("cannot .send() more than once");if(this.sent_=!0,this.xhr_.open(n,t,!0),s!==void 0)for(const r in s)s.hasOwnProperty(r)&&this.xhr_.setRequestHeader(r,s[r].toString());return i!==void 0?this.xhr_.send(i):this.xhr_.send(),this.sendPromise_}getErrorCode(){if(!this.sent_)throw qt("cannot .getErrorCode() before sending");return this.errorCode_}getStatus(){if(!this.sent_)throw qt("cannot .getStatus() before sending");try{return this.xhr_.status}catch{return-1}}getResponse(){if(!this.sent_)throw qt("cannot .getResponse() before sending");return this.xhr_.response}getErrorText(){if(!this.sent_)throw qt("cannot .getErrorText() before sending");return this.xhr_.statusText}abort(){this.xhr_.abort()}getResponseHeader(t){return this.xhr_.getResponseHeader(t)}addUploadProgressListener(t){this.xhr_.upload!=null&&this.xhr_.upload.addEventListener("progress",t)}removeUploadProgressListener(t){this.xhr_.upload!=null&&this.xhr_.upload.removeEventListener("progress",t)}}class Ju extends Gu{initXhr(){this.xhr_.responseType="text"}}function Xu(){return new Ju}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class xt{constructor(t,n){this._service=t,n instanceof Re?this._location=n:this._location=Re.makeFromUrl(n,t.host)}toString(){return"gs://"+this._location.bucket+"/"+this._location.path}_newRef(t,n){return new xt(t,n)}get root(){const t=new Re(this._location.bucket,"");return this._newRef(this._service,t)}get bucket(){return this._location.bucket}get fullPath(){return this._location.path}get name(){return Bo(this._location.path)}get storage(){return this._service}get parent(){const t=$u(this._location.path);if(t===null)return null;const n=new Re(this._location.bucket,t);return new xt(this._service,n)}_throwIfRoot(t){if(this._location.path==="")throw du(t)}}function Zu(e,t,n){e._throwIfRoot("uploadBytes");const i=qu(e.storage,e._location,Bu(),new rt(t,!0),n);return e.storage.makeRequestWithTokens(i,Xu).then(s=>({metadata:s,ref:e}))}function ef(e,t){const n=Mu(e._location.path,t),i=new Re(e._location.bucket,n);return new xt(e.storage,i)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function tf(e){return/^[A-Za-z]+:\/\//.test(e)}function nf(e,t){return new xt(e,t)}function Lo(e,t){if(e instanceof cs){const n=e;if(n._bucket==null)throw au();const i=new xt(n,n._bucket);return t!=null?Lo(i,t):i}else return t!==void 0?ef(e,t):e}function sf(e,t){if(t&&tf(t)){if(e instanceof cs)return nf(e,t);throw Ni("To use ref(service, url), the first argument must be a Storage instance.")}else return Lo(e,t)}function rr(e,t){const n=t==null?void 0:t[So];return n==null?null:Re.makeFromBucketSpec(n,e)}class cs{constructor(t,n,i,s,r){this.app=t,this._authProvider=n,this._appCheckProvider=i,this._url=s,this._firebaseVersion=r,this._bucket=null,this._host=Po,this._protocol="https",this._appId=null,this._deleted=!1,this._maxOperationRetryTime=Xd,this._maxUploadRetryTime=Zd,this._requests=new Set,s!=null?this._bucket=Re.makeFromBucketSpec(s,this._host):this._bucket=rr(this._host,this.app.options)}get host(){return this._host}set host(t){this._host=t,this._url!=null?this._bucket=Re.makeFromBucketSpec(this._url,t):this._bucket=rr(t,this.app.options)}get maxUploadRetryTime(){return this._maxUploadRetryTime}set maxUploadRetryTime(t){sr("time",0,Number.POSITIVE_INFINITY,t),this._maxUploadRetryTime=t}get maxOperationRetryTime(){return this._maxOperationRetryTime}set maxOperationRetryTime(t){sr("time",0,Number.POSITIVE_INFINITY,t),this._maxOperationRetryTime=t}async _getAuthToken(){if(this._overrideAuthToken)return this._overrideAuthToken;const t=this._authProvider.getImmediate({optional:!0});if(t){const n=await t.getToken();if(n!==null)return n.accessToken}return null}async _getAppCheckToken(){const t=this._appCheckProvider.getImmediate({optional:!0});return t?(await t.getToken()).token:null}_delete(){return this._deleted||(this._deleted=!0,this._requests.forEach(t=>t.cancel()),this._requests.clear()),Promise.resolve()}_makeStorageReference(t){return new xt(this,t)}_makeRequest(t,n,i,s){if(this._deleted)return new uu(Do());{const r=Eu(t,this._appId,i,s,n,this._firebaseVersion);return this._requests.add(r),r.getPromise().then(()=>this._requests.delete(r),()=>this._requests.delete(r)),r}}async makeRequestWithTokens(t,n){const[i,s]=await Promise.all([this._getAuthToken(),this._getAppCheckToken()]);return this._makeRequest(t,n,i,s).getPromise()}}const or="@firebase/storage",lr="0.9.7";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Uo="storage";function rf(e,t,n){return e=ss(e),Zu(e,t,n)}function of(e,t){return e=ss(e),sf(e,t)}function lf(e=Ud(),t){return e=ss(e),Md(e,Uo).getImmediate({identifier:t})}function af(e,{instanceIdentifier:t}){const n=e.getProvider("app").getImmediate(),i=e.getProvider("auth-internal"),s=e.getProvider("app-check-internal");return new cs(n,i,s,t,Bd)}function cf(){Fn(new pn(Uo,af,"PUBLIC").setMultipleInstances(!0)),Mt(or,lr,""),Mt(or,lr,"esm2017")}cf();const df={apiKey:"AIzaSyDyo2D9Sme7ugWZIDmpOMEugVaMxy3kx8w",authDomain:"quizz-2fc55.firebaseapp.com",projectId:"quizz-2fc55",storageBucket:"quizz-2fc55.appspot.com",messagingSenderId:"695564902353",appId:"1:695564902353:web:13f3cefb320ca664460af0",measurementId:"G-Z1MG7PLL92"},uf=Ld(df),ff=lf(uf);async function hf(e,t){const n=of(ff,t);try{let i=await rf(n,e);return console.log(i),`https://firebasestorage.googleapis.com/v0/b/quizz-2fc55.appspot.com/o/${i.metadata.fullPath}?alt=media`}catch{return"Couldn't upload a file"}}var mf=(e,t)=>{const n=e.__vccOpts||e;for(const[i,s]of t)n[i]=s;return n};const pf=es({data(){return{step:0,previous:[],reduce_operations:"",useful_info:"",number_employes_step3:"",quarters:[],valid_revenue:[],quarter:"",_941_fields:[],num_employees:"",conclusion_text:"",_2021_total:0,_2020_total:0,resultType:!0,firstname:"",lastname:"",email:"",phone:"",business_name:"",payroll_employees:0,is_revenue_input:!1,revenue_inputs:{_1:"",_2:"",_3:"",_4:"",_5:"",_6:"",_7:"",_8:"",_9:"",_10:"",_11:""},_941_fields_data:{redfund1:"",redfund2:"",redfund3:"",redfund4:"",redfund5:"",redfund6:"",redfund7:"",employees1:"",employees2:"",employees3:"",employees4:"",employees5:"",employees6:"",employees7:"",payroll1:"",payroll2:"",payroll3:"",payroll4:"",payroll5:"",payroll6:"",payroll7:""},is_downloading:!1}},methods:{formatToCurruency(e){},async download(e){e.preventDefault(),this.is_downloading=!0;let t=this.generateHTML();var n=new File([t],`${this.firstname+this.lastname}.html`,{type:"text/html"});let i=await hf(n,`${this.lastname+this.firstname+new Date().getMilliseconds().toString()+new Date().getSeconds().toString()+new Date().getHours().toString()}`.replace(" ","")),s=await this.createItem(i);console.log(s),this.is_downloading=!1},async createItem(e){var n,i;let t=`mutation { create_item (board_id:${2827249366},group_id:  "topics",item_name: "${this.firstname+" "+this.lastname+" "+this.email}",column_values: "{\\"text\\":\\"${this.firstname}\\",\\"text4\\":\\"${this.lastname}\\",\\"text44\\":\\"${this.email}\\",\\"text8\\":\\"${this.phone}\\",\\"text83\\":\\"${e}\\"}"){id}}`;try{let s=await fetch("https://api.monday.com/v2",{method:"post",headers:{"Content-Type":"application/json",Authorization:"eyJhbGciOiJIUzI1NiJ9.eyJ0aWQiOjE2NjI2OTQ5NywidWlkIjozMTQ0MjYzMywiaWFkIjoiMjAyMi0wNi0xOVQxMjozMzoyNC4wMDBaIiwicGVyIjoibWU6d3JpdGUiLCJhY3RpZCI6MTI1MzkwODksInJnbiI6InVzZTEifQ.fD_7tZjq9bi28gjwHTh2a-AhG5gcQS_17eMoeknNr4I"},body:JSON.stringify({query:t})});return parseInt((i=(n=(await s.json()).data)==null?void 0:n.create_item)==null?void 0:i.id)}catch{return-1}},generateHTML(){let e=`               
                <div style="
                  font-family: system-ui;
                  font-size: 1.3rem;
                  font-weight: bold;
                  margin-bottom: 1rem;">
                  Let's get started.
               </div>
               <div>
                  <div style="
                     font-family: system-ui;
                     font-size: 1rem;
                     font-weight: bold;
                     margin-bottom: 0.4rem;">
                     ENTER YOUR FULL NAME BELOW
                  </div>
                  <div style="
                     font-family: system-ui;
                     font-size: 1rem;
                     font-weight: 400;
                     border: 0.5px solid #cccccc4f;
                     width: 90%;
                     padding: 0.4rem;
                     padding-right: 0;">
                     ${this.firstname} ${this.lastname}
                  </div>
               </div>
               <div style="    
                  display: flex;
                  width: 90%;
                  margin-top: 0.7rem;">
                  <div style="flex:1">
                     <div style="
                        font-family: system-ui;
                        font-size: 1rem;
                        font-weight: bold;
                        margin-bottom: 0.4rem;">
                        Phone
                     </div>
                     <div style="
                        font-family: system-ui;
                        font-size: 1rem;
                        font-weight: 400;
                        border: 0.5px solid #cccccc4f;
                        width: 90%;
                        padding: 0.4rem;
                        padding-right: 0;">
                        ${this.phone}
                     </div>
                  </div>
                  <div style="flex:1">
                     <div style="
                        font-family: system-ui;
                        font-size: 1rem;
                        font-weight: bold;
                        margin-bottom: 0.4rem;">
                        EMAIL
                     </div>
                     <div style="
                        font-family: system-ui;
                        font-size: 1rem;
                        font-weight: 400;
                        border: 0.5px solid #cccccc4f;
                        width: 90%;
                        padding: 0.4rem;
                        padding-right: 0;">
                        ${this.email}
                     </div>
                  </div>
               </div>
               <div>
                  <div style="
                     font-family: system-ui;
                     font-size: 1rem;
                     font-weight: bold;
                     margin-top: 0.7rem;">
                     BUSINESS NAME
                  </div>
                  <div style="
                     font-family: system-ui;
                     font-size: 1rem;
                     font-weight: 400;
                     border: 0.5px solid #cccccc4f;
                     width: 90%;
                     padding: 0.4rem;
                     padding-right: 0;">
                     ${this.business_name}
                  </div>
               </div>
               <div>
                  <div style="
                     font-family: system-ui;
                     font-size: 1rem;
                     font-weight: bold;
                     margin-top: 0.7rem;">
                     AMOUNT OF W2 EMPLOYEES ON PAYROLL?
                  </div>
                  <div style="
                     font-family: system-ui;
                     font-size: 1rem;
                     font-weight: 400;
                     border: 0.5px solid #cccccc4f;
                     width: 90%;
                     padding: 0.4rem;
                     padding-right: 0;">
                     35
                  </div>
               </div>
               <div>
                  <div style="
                     font-family: system-ui;
                     font-size: 1rem;
                     font-weight: bold;
                     margin-top: 0.7rem;">
                     WHAT INFORMATION DO YOU HAVE HANDY?
                  </div>
                  <div style="
                     font-family: system-ui;
                     font-size: 1rem;
                     font-weight: 400;
                     border: 0.5px solid #cccccc4f;
                     width: 90%;
                     padding: 0.4rem;
                     padding-right: 0;">
                     ${parseInt(this.useful_info)==0?"I have my 2019 \u2013 2021 quarterly P/Ls":parseInt(this.useful_info)==1?"I have my 2020 \u2013 2021 Quarterly 941s":parseInt(this.useful_info)==2?"I have both.":"I have none."}
                  </div>
               </div>
               <div>
                  <div style="
                     font-family: system-ui;
                     font-size: 1rem;
                     font-weight: bold;
                     margin-top: 0.7rem;">
                     HOW MANY EMPLOYEES DO YOU HAVE?
                  </div>
                  <div style="
                     font-family: system-ui;
                     font-size: 1rem;
                     font-weight: 400;
                     border: 0.5px solid #cccccc4f;
                     width: 90%;
                     padding: 0.4rem;
                     padding-right: 0;">
                     ${parseInt(this.number_employes_step3)==0?"Under 100":parseInt(this.number_employes_step3)==1?"Over 100":"Over 500"}
                  </div>
               </div>
               <div style="
                  font-family: system-ui;
                  font-size: 1rem;
                  font-weight: 400;
                  border: 0.5px solid #cccccc4f;
                  width: 90%;
                  padding: 0.4rem;
                  margin-top: 0.7rem;
                  padding-right: 0;">
                  - Since your company is a Startup, you are automatically eligible for Q3 & Q4 of 2021 with a
                  maximum
                  eligibility of 50K for EACH quarter.
               </div>
`,t=this.is_revenue_input?`               

              <div style="
                  font-family: system-ui;
                  font-size: 1.2rem;
                  font-weight: bold;
                  margin-bottom: 1rem;
                  margin-top: 1rem;">
                  Revenue Input
               </div>
               <div style="    
                  display: flex;
                  width: 90%;
                  margin-top: 0.7rem;
                  justify-content: space-between;">
                  <div style="width:30%">
                     <div style="
                        font-family: system-ui;
                        font-size: 1.2rem;
                        font-weight: bold;
                        margin-bottom: 1rem;
                        margin-top: 1rem;
                        border: 0.5px solid #cccccc4f;
                        padding: 3rem 0rem 1rem 0rem;
                        text-align: center;">
                        2019 Revenue
                     </div>
                  </div>
                  <div style="width:30%">
                     <div style="
                        font-family: system-ui;
                        font-size: 1.2rem;
                        font-weight: bold;
                        margin-bottom: 1rem;
                        margin-top: 1rem;
                        border: 0.5px solid #cccccc4f;
                        padding: 3rem 0rem 1rem 0rem;
                        text-align: center;">
                        2020 Revenue
                     </div>
                  </div>
                  <div style="width:30%">
                     <div style="
                        font-family: system-ui;
                        font-size: 1.2rem;
                        font-weight: bold;
                        margin-bottom: 1rem;
                        margin-top: 1rem;
                        border: 0.5px solid #cccccc4f;
                        padding: 3rem 0rem 1rem 0rem;
                        text-align: center;">
                        2021 Revenue
                     </div>
                  </div>
               </div>
               <div style="    
                  display: flex;
                  width: 90%;
                  margin-top: 0.7rem;">
                  <div style="flex:1">
                     <div style="
                        font-family: system-ui;
                        font-size: 1rem;
                        font-weight: bold;
                        margin-bottom: 0.4rem;">
                        2019 QUARTER 1 REVENUE
                     </div>
                     <div style="
                        font-family: system-ui;
                        font-size: 1rem;
                        font-weight: 400;
                        border: 0.5px solid #cccccc4f;
                        width: 90%;
                        padding: 0.4rem;
                        padding-right: 0;">
                        ${this.revenue_inputs._1}
                     </div>
                  </div>
                  <div style="flex:1">
                     <div style="
                        font-family: system-ui;
                        font-size: 1rem;
                        font-weight: bold;
                        margin-bottom: 0.4rem;">
                        2020 QUARTER 1 REVENUE
                     </div>
                     <div style="
                        font-family: system-ui;
                        font-size: 1rem;
                        font-weight: 400;
                        border: 0.5px solid #cccccc4f;
                        width: 90%;
                        padding: 0.4rem;
                        padding-right: 0;">
                        ${this.revenue_inputs._2}
                     </div>
                  </div>
                  <div style="flex:1">
                     <div style="
                        font-family: system-ui;
                        font-size: 1rem;
                        font-weight: bold;
                        margin-bottom: 0.4rem;">
                        2021 QUARTER 1 REVENUE
                     </div>
                     <div style="
                        font-family: system-ui;
                        font-size: 1rem;
                        font-weight: 400;
                        border: 0.5px solid #cccccc4f;
                        width: 90%;
                        padding: 0.4rem;
                        padding-right: 0;">
                        ${this.revenue_inputs._3}
                     </div>
                  </div>
               </div>
               <div style="    
                  display: flex;
                  width: 90%;
                  margin-top: 0.7rem;">
                  <div style="flex:1">
                     <div style="
                        font-family: system-ui;
                        font-size: 1rem;
                        font-weight: bold;
                        margin-bottom: 0.4rem;">
                        2019 QUARTER 2
                     </div>
                     <div style="
                        font-family: system-ui;
                        font-size: 1rem;
                        font-weight: 400;
                        border: 0.5px solid #cccccc4f;
                        width: 90%;
                        padding: 0.4rem;
                        padding-right: 0;">
                        ${this.revenue_inputs._4}
                     </div>
                  </div>
                  <div style="flex:1">
                     <div style="
                        font-family: system-ui;
                        font-size: 1rem;
                        font-weight: bold;
                        margin-bottom: 0.4rem;">
                        2020 QUARTER 2
                     </div>
                     <div style="
                        font-family: system-ui;
                        font-size: 1rem;
                        font-weight: 400;
                        border: 0.5px solid #cccccc4f;
                        width: 90%;
                        padding: 0.4rem;
                        padding-right: 0;">
                        ${this.revenue_inputs._5}
                     </div>
                  </div>
                  <div style="flex:1">
                     <div style="
                        font-family: system-ui;
                        font-size: 1rem;
                        font-weight: bold;
                        margin-bottom: 0.4rem;">
                        2021 QUARTER 2
                     </div>
                     <div style="
                        font-family: system-ui;
                        font-size: 1rem;
                        font-weight: 400;
                        border: 0.5px solid #cccccc4f;
                        width: 90%;
                        padding: 0.4rem;
                        padding-right: 0;">
                        ${this.revenue_inputs._6}
                     </div>
                  </div>
               </div>
               <div style="    
                  display: flex;
                  width: 90%;
                  margin-top: 0.7rem;">
                  <div style="flex:1">
                     <div style="
                        font-family: system-ui;
                        font-size: 1rem;
                        font-weight: bold;
                        margin-bottom: 0.4rem;">
                        2019 QUARTER 3
                     </div>
                     <div style="
                        font-family: system-ui;
                        font-size: 1rem;
                        font-weight: 400;
                        border: 0.5px solid #cccccc4f;
                        width: 90%;
                        padding: 0.4rem;
                        padding-right: 0;">
                        ${this.revenue_inputs._7}
                     </div>
                  </div>
                  <div style="flex:1">
                     <div style="
                        font-family: system-ui;
                        font-size: 1rem;
                        font-weight: bold;
                        margin-bottom: 0.4rem;">
                        2020 QUARTER 3
                     </div>
                     <div style="
                        font-family: system-ui;
                        font-size: 1rem;
                        font-weight: 400;
                        border: 0.5px solid #cccccc4f;
                        width: 90%;
                        padding: 0.4rem;
                        padding-right: 0;">
                        ${this.revenue_inputs._8}
                     </div>
                  </div>
                  <div style="flex:1">
                     <div style="
                        font-family: system-ui;
                        font-size: 1rem;
                        font-weight: bold;
                        margin-bottom: 0.4rem;">
                        2021 QUARTER 3
                     </div>
                     <div style="
                        font-family: system-ui;
                        font-size: 1rem;
                        font-weight: 400;
                        border: 0.5px solid #cccccc4f;
                        width: 90%;
                        padding: 0.4rem;
                        padding-right: 0;">
                        ${this.revenue_inputs._9}
                     </div>
                  </div>
               </div>
               <div style="    
                  display: flex;
                  width: 90%;
                  margin-top: 0.7rem;">
                  <div style="flex:1">
                     <div style="
                        font-family: system-ui;
                        font-size: 1rem;
                        font-weight: bold;
                        margin-bottom: 0.4rem;">
                        2019 QUARTER 4
                     </div>
                     <div style="
                        font-family: system-ui;
                        font-size: 1rem;
                        font-weight: 400;
                        border: 0.5px solid #cccccc4f;
                        width: 90%;
                        padding: 0.4rem;
                        padding-right: 0;">
                        ${this.revenue_inputs._10}
                     </div>
                  </div>
                  <div style="flex:1">
                     <div style="
                        font-family: system-ui;
                        font-size: 1rem;
                        font-weight: bold;
                        margin-bottom: 0.4rem;">
                        2020 QUARTER 4
                     </div>
                     <div style="
                        font-family: system-ui;
                        font-size: 1rem;
                        font-weight: 400;
                        border: 0.5px solid #cccccc4f;
                        width: 90%;
                        padding: 0.4rem;
                        padding-right: 0;">
                        ${this.revenue_inputs._11}
                     </div>
                  </div>
                  <div style="flex:1">
                     <div style="
                        font-family: system-ui;
                        font-size: 1rem;
                        font-weight: bold;
                        margin-bottom: 0.4rem;">
                        2021 QUARTER 4
                     </div>
                     <div style="
                        font-family: system-ui;
                        font-size: 1rem;
                        font-weight: 400;
                        border: 0.5px solid #cccccc4f;
                        width: 90%;
                        padding: 0.4rem;
                        padding-right: 0;">
                        Q4 for 2021 is not applicable.
                     </div>
                  </div>
               </div>`:!1,n=this.is_revenue_input?`               
              <div style="
                  font-family: system-ui;
                  font-size: 1.2rem;
                  font-weight: bold;
                  margin-top: 1rem;">
                  941 info below
               </div>
               <div style="    
                  display: flex;
                  width: 90%;
                  margin-top: 0.7rem;
                  justify-content: space-between;">
                  <div style="width:30%">
                     <div style="
                        font-family: system-ui;
                        font-size: 1.2rem;
                        font-weight: bold;
                        margin-bottom: 1rem;
                        margin-top: 1rem;
                        border: 0.5px solid #cccccc4f;
                        padding: 2rem 0rem 2rem 0rem;
                        color:rgb(66,111,181);
                        text-align: center;">
                        2020 Payroll
                     </div>
                  </div>
                  <div style="width:30%">
                     <div style="
                        font-family: system-ui;
                        font-size: 1.2rem;
                        font-weight: bold;
                        margin-bottom: 1rem;
                        margin-top: 1rem;
                        border: 0.5px solid #cccccc4f;
                        padding: 2rem 0rem 2rem 0rem;
                        color:rgb(66,111,181);
                        text-align: center;">
                        W2 Employees 2020
                     </div>
                  </div>
                  <div style="width:30%">
                     <div style="
                        font-family: system-ui;
                        font-size: 1.2rem;
                        font-weight: bold;
                        margin-bottom: 1rem;
                        margin-top: 1rem;
                        border: 0.5px solid #cccccc4f;
                        padding: 2rem 0rem 2rem 0rem;
                        color:rgb(66,111,181);
                        text-align: center;">
                        0 Quarterly Refunds 2020
                     </div>
                  </div>
               </div>
               <div style="    
                  display: flex;
                  width: 90%;
                  margin-top: 0.7rem;">
                  <div style="flex:1">
                     <div style="
                        font-family: system-ui;
                        font-size: 1rem;
                        font-weight: bold;
                        margin-bottom: 0.4rem;">
                        Q1 2020 PAYROLL
                     </div>
                     <div style="
                        font-family: system-ui;
                        font-size: 1rem;
                        font-weight: 400;
                        border: 0.5px solid #cccccc4f;
                        width: 90%;
                        padding: 0.4rem;
                        padding-right: 0;">
                        ${this._941_fields_data.payroll1!=""?this._941_fields_data.payroll1:"Illegible"}
                     </div>
                  </div>
                  <div style="flex:1">
                     <div style="
                        font-family: system-ui;
                        font-size: 1rem;
                        font-weight: bold;
                        margin-bottom: 0.4rem;">
                        EMPLOYEES HIRED Q1 2020
                     </div>
                     <div style="
                        font-family: system-ui;
                        font-size: 1rem;
                        font-weight: 400;
                        border: 0.5px solid #cccccc4f;
                        width: 90%;
                        padding: 0.4rem;
                        padding-right: 0;">
                        ${this._941_fields_data.employees1!=""?this._941_fields_data.employees1:"Illegible"}
                     </div>
                  </div>
                  <div style="flex:1">
                     <div style="
                        font-family: system-ui;
                        font-size: 1rem;
                        font-weight: bold;
                        margin-bottom: 0.4rem;">
                        FINAL AMOUNT FOR Q1
                     </div>
                     <div style="
                        font-family: system-ui;
                        font-size: 1rem;
                        font-weight: 400;
                        border: 0.5px solid #cccccc4f;
                        width: 90%;
                        padding: 0.4rem;
                        padding-right: 0;">
                        ${this._941_fields_data.redfund1!=""?this._941_fields_data.redfund1:"Illegible"}
                     </div>
                  </div>
               </div>
              `:`
              <div style="
                  font-family: system-ui;
                  font-size: 1.2rem;
                  font-weight: bold;
                  margin-top: 1rem;">
                  941 info below
               </div>
               <div style="    
                  display: flex;
                  width: 90%;
                  margin-top: 0.7rem;
                  justify-content: space-between;">
                  <div style="width:30%">
                     <div style="
                        font-family: system-ui;
                        font-size: 1.2rem;
                        font-weight: bold;
                        margin-bottom: 1rem;
                        margin-top: 1rem;
                        border: 0.5px solid #cccccc4f;
                        padding: 2rem 0rem 2rem 0rem;
                        color:rgb(66,111,181);
                        text-align: center;">
                        2020 Payroll
                     </div>
                  </div>
                  <div style="width:30%">
                     <div style="
                        font-family: system-ui;
                        font-size: 1.2rem;
                        font-weight: bold;
                        margin-bottom: 1rem;
                        margin-top: 1rem;
                        border: 0.5px solid #cccccc4f;
                        padding: 2rem 0rem 2rem 0rem;
                        color:rgb(66,111,181);
                        text-align: center;">
                        W2 Employees 2020
                     </div>
                  </div>
                  <div style="width:30%">
                     <div style="
                        font-family: system-ui;
                        font-size: 1.2rem;
                        font-weight: bold;
                        margin-bottom: 1rem;
                        margin-top: 1rem;
                        border: 0.5px solid #cccccc4f;
                        padding: 2rem 0rem 2rem 0rem;
                        color:rgb(66,111,181);
                        text-align: center;">
                        Quarterly Refunds 2020
                     </div>
                  </div>
               </div>
               <div style="    
                  display: flex;
                  width: 90%;
                  margin-top: 0.7rem;">
                  <div style="flex:1">
                     <div style="
                        font-family: system-ui;
                        font-size: 1rem;
                        font-weight: bold;
                        margin-bottom: 0.4rem;">
                        Q1 2020 PAYROLL
                     </div>
                     <div style="
                        font-family: system-ui;
                        font-size: 1rem;
                        font-weight: 400;
                        border: 0.5px solid #cccccc4f;
                        width: 90%;
                        padding: 0.4rem;
                        padding-right: 0;">
                        ${this._941_fields_data.payroll1!=""?this._941_fields_data.payroll1:"Illegible"}
                     </div>
                  </div>
                  <div style="flex:1">
                     <div style="
                        font-family: system-ui;
                        font-size: 1rem;
                        font-weight: bold;
                        margin-bottom: 0.4rem;">
                        EMPLOYEES HIRED Q1 2020
                     </div>
                     <div style="
                        font-family: system-ui;
                        font-size: 1rem;
                        font-weight: 400;
                        border: 0.5px solid #cccccc4f;
                        width: 90%;
                        padding: 0.4rem;
                        padding-right: 0;">
                        ${this._941_fields_data.employees1!=""?this._941_fields_data.employees1:"Illegible"}
                     </div>
                  </div>
                  <div style="flex:1">
                     <div style="
                        font-family: system-ui;
                        font-size: 1rem;
                        font-weight: bold;
                        margin-bottom: 0.4rem;">
                        FINAL AMOUNT FOR Q1
                     </div>
                     <div style="
                        font-family: system-ui;
                        font-size: 1rem;
                        font-weight: 400;
                        border: 0.5px solid #cccccc4f;
                        width: 90%;
                        padding: 0.4rem;
                        padding-right: 0;">
                        ${this._941_fields_data.redfund1!=""?this._941_fields_data.redfund1:"Illegible"}
                     </div>
                  </div>
               </div>
               <div style="    
               display: flex;
               width: 90%;
               margin-top: 0.7rem;">
               <div style="flex:1">
                  <div style="
                     font-family: system-ui;
                     font-size: 1rem;
                     font-weight: bold;
                     margin-bottom: 0.4rem;">
                     Q2 OF 2020 PAYROLL
                  </div>
                  <div style="
                     font-family: system-ui;
                     font-size: 1rem;
                     font-weight: 400;
                     border: 0.5px solid #cccccc4f;
                     width: 90%;
                     padding: 0.4rem;
                     padding-right: 0;">
                     ${this._941_fields_data.payroll2!=""?this._941_fields_data.payroll2:"Illegible"}
                  </div>
               </div>
               <div style="flex:1">
                  <div style="
                     font-family: system-ui;
                     font-size: 1rem;
                     font-weight: bold;
                     margin-bottom: 0.4rem;">
                     EMPLOYEES HIRED Q2 2020
                  </div>
                  <div style="
                     font-family: system-ui;
                     font-size: 1rem;
                     font-weight: 400;
                     border: 0.5px solid #cccccc4f;
                     width: 90%;
                     padding: 0.4rem;
                     padding-right: 0;">
                     ${this._941_fields_data.employees2!=""?this._941_fields_data.employees2:"Illegible"}
                  </div>
               </div>
               <div style="flex:1">
                  <div style="
                     font-family: system-ui;
                     font-size: 1rem;
                     font-weight: bold;
                     margin-bottom: 0.4rem;">
                     FINAL AMOUNT FOR Q2
                  </div>
                  <div style="
                     font-family: system-ui;
                     font-size: 1rem;
                     font-weight: 400;
                     border: 0.5px solid #cccccc4f;
                     width: 90%;
                     padding: 0.4rem;
                     padding-right: 0;">
                     ${this._941_fields_data.redfund2!=""?this._941_fields_data.redfund2:"Illegible"}
                  </div>
               </div>
            </div>
            <div style="    
               display: flex;
               width: 90%;
               margin-top: 0.7rem;">
               <div style="flex:1">
                  <div style="
                     font-family: system-ui;
                     font-size: 1rem;
                     font-weight: bold;
                     margin-bottom: 0.4rem;">
                     Q3 OF 2020 PAYROLL
                  </div>
                  <div style="
                     font-family: system-ui;
                     font-size: 1rem;
                     font-weight: 400;
                     border: 0.5px solid #cccccc4f;
                     width: 90%;
                     padding: 0.4rem;
                     padding-right: 0;">
                     ${this._941_fields_data.payroll3!=""?this._941_fields_data.payroll3:"Illegible"}
                  </div>
               </div>
               <div style="flex:1">
                  <div style="
                     font-family: system-ui;
                     font-size: 1rem;
                     font-weight: bold;
                     margin-bottom: 0.4rem;">
                     EMPLOYEES HIRED Q3 2020
                  </div>
                  <div style="
                     font-family: system-ui;
                     font-size: 1rem;
                     font-weight: 400;
                     border: 0.5px solid #cccccc4f;
                     width: 90%;
                     padding: 0.4rem;
                     padding-right: 0;">
                     ${this._941_fields_data.employees3!=""?this._941_fields_data.employees3:"Illegible"}
                  </div>
               </div>
               <div style="flex:1">
                  <div style="
                     font-family: system-ui;
                     font-size: 1rem;
                     font-weight: bold;
                     margin-bottom: 0.4rem;">
                     FINAL AMOUNT FOR Q3
                  </div>
                  <div style="
                     font-family: system-ui;
                     font-size: 1rem;
                     font-weight: 400;
                     border: 0.5px solid #cccccc4f;
                     width: 90%;
                     padding: 0.4rem;
                     padding-right: 0;">
                     ${this._941_fields_data.redfund3!=""?this._941_fields_data.redfund3:"Illegible"}
                  </div>
               </div>
            </div>
            <div style="    
               display: flex;
               width: 90%;
               margin-top: 0.7rem;">
               <div style="flex:1">
                  <div style="
                     font-family: system-ui;
                     font-size: 1rem;
                     font-weight: bold;
                     margin-bottom: 0.4rem;">
                     Q4 OF 2020 PAYROLL
                  </div>
                  <div style="
                     font-family: system-ui;
                     font-size: 1rem;
                     font-weight: 400;
                     border: 0.5px solid #cccccc4f;
                     width: 90%;
                     padding: 0.4rem;
                     padding-right: 0;">
                     ${this._941_fields_data.payroll4!=""?this._941_fields_data.payroll4:"Illegible"}
                  </div>
               </div>
               <div style="flex:1">
                  <div style="
                     font-family: system-ui;
                     font-size: 1rem;
                     font-weight: bold;
                     margin-bottom: 0.4rem;">
                     EMPLOYEES HIRED Q4 2020
                  </div>
                  <div style="
                     font-family: system-ui;
                     font-size: 1rem;
                     font-weight: 400;
                     border: 0.5px solid #cccccc4f;
                     width: 90%;
                     padding: 0.4rem;
                     padding-right: 0;">
                     ${this._941_fields_data.employees4!=""?this._941_fields_data.employees4:"Illegible"}
                  </div>
               </div>
               <div style="flex:1">
                  <div style="
                     font-family: system-ui;
                     font-size: 1rem;
                     font-weight: bold;
                     margin-bottom: 0.4rem;">
                     FINAL AMOUNT FOR Q4
                  </div>
                  <div style="
                     font-family: system-ui;
                     font-size: 1rem;
                     font-weight: 400;
                     border: 0.5px solid #cccccc4f;
                     width: 90%;
                     padding: 0.4rem;
                     padding-right: 0;">
                     ${this._941_fields_data.redfund4!=""?this._941_fields_data.redfund4:"Illegible"}
                  </div>
               </div>
            </div>
            <div style="    
            display: flex;
            width: 90%;
            margin-top: 0.7rem;
            justify-content: space-between;">
            <div style="width:30%">
               <div style="
                  font-family: system-ui;
                  font-size: 1.2rem;
                  font-weight: bold;
                  margin-bottom: 1rem;
                  margin-top: 1rem;
                  border: 0.5px solid #cccccc4f;
                  padding: 2rem 0rem 2rem 0rem;
                  color:rgb(66,111,181);
                  text-align: center;">
                  2021 Payroll
               </div>
            </div>
            <div style="width:30%">
               <div style="
                  font-family: system-ui;
                  font-size: 1.2rem;
                  font-weight: bold;
                  margin-bottom: 1rem;
                  margin-top: 1rem;
                  border: 0.5px solid #cccccc4f;
                  padding: 2rem 0rem 2rem 0rem;
                  color:rgb(66,111,181);
                  text-align: center;">
                  W2 Employees 2021
               </div>
            </div>
            <div style="width:30%">
               <div style="
                  font-family: system-ui;
                  font-size: 1.2rem;
                  font-weight: bold;
                  margin-bottom: 1rem;
                  margin-top: 1rem;
                  border: 0.5px solid #cccccc4f;
                  padding: 2rem 0rem 2rem 0rem;
                  color:rgb(66,111,181);
                  text-align: center;">
                  Quarterly Refunds 2021
               </div>
            </div>
         </div>
         <div style="    
         display: flex;
         width: 90%;
         margin-top: 0.7rem;">
         <div style="flex:1">
            <div style="
               font-family: system-ui;
               font-size: 1rem;
               font-weight: bold;
               margin-bottom: 0.4rem;">
               Q1 OF 2021 PAYROLL
            </div>
            <div style="
               font-family: system-ui;
               font-size: 1rem;
               font-weight: 400;
               border: 0.5px solid #cccccc4f;
               width: 90%;
               padding: 0.4rem;
               padding-right: 0;">
               ${this._941_fields_data.payroll5!=""?this._941_fields_data.payroll5:"Illegible"}
            </div>
         </div>
         <div style="flex:1">
            <div style="
               font-family: system-ui;
               font-size: 1rem;
               font-weight: bold;
               margin-bottom: 0.4rem;">
               EMPLOYEES HIRED DURING Q1 2021
            </div>
            <div style="
               font-family: system-ui;
               font-size: 1rem;
               font-weight: 400;
               border: 0.5px solid #cccccc4f;
               width: 90%;
               padding: 0.4rem;
               padding-right: 0;">
               ${this._941_fields_data.employees5!=""?this._941_fields_data.employees5:"Illegible"}
            </div>
         </div>
         <div style="flex:1">
            <div style="
               font-family: system-ui;
               font-size: 1rem;
               font-weight: bold;
               margin-bottom: 0.4rem;">
               Q1 2021 TOTAL REFUND:
            </div>
            <div style="
               font-family: system-ui;
               font-size: 1rem;
               font-weight: 400;
               border: 0.5px solid #cccccc4f;
               width: 90%;
               padding: 0.4rem;
               padding-right: 0;">
               ${this._941_fields_data.redfund5!=""?this._941_fields_data.redfund5:"Illegible"}
            </div>
         </div>
      </div>
            `,i=this.is_revenue_input?`
                   <div style="    
               display: flex;
               width: 90%;
               margin-top: 0.7rem;">
               <div style="flex:1">
                  <div style="
                     font-family: system-ui;
                     font-size: 1rem;
                     font-weight: bold;
                     margin-bottom: 0.4rem;">
                     Q2 OF 2020 PAYROLL
                  </div>
                  <div style="
                     font-family: system-ui;
                     font-size: 1rem;
                     font-weight: 400;
                     border: 0.5px solid #cccccc4f;
                     width: 90%;
                     padding: 0.4rem;
                     padding-right: 0;">
                     ${this._941_fields_data.payroll2!=""?this._941_fields_data.payroll2:"Illegible"}
                  </div>
               </div>
               <div style="flex:1">
                  <div style="
                     font-family: system-ui;
                     font-size: 1rem;
                     font-weight: bold;
                     margin-bottom: 0.4rem;">
                     EMPLOYEES HIRED Q2 2020
                  </div>
                  <div style="
                     font-family: system-ui;
                     font-size: 1rem;
                     font-weight: 400;
                     border: 0.5px solid #cccccc4f;
                     width: 90%;
                     padding: 0.4rem;
                     padding-right: 0;">
                     ${this._941_fields_data.employees2!=""?this._941_fields_data.employees2:"Illegible"}
                  </div>
               </div>
               <div style="flex:1">
                  <div style="
                     font-family: system-ui;
                     font-size: 1rem;
                     font-weight: bold;
                     margin-bottom: 0.4rem;">
                     FINAL AMOUNT FOR Q2
                  </div>
                  <div style="
                     font-family: system-ui;
                     font-size: 1rem;
                     font-weight: 400;
                     border: 0.5px solid #cccccc4f;
                     width: 90%;
                     padding: 0.4rem;
                     padding-right: 0;">
                     ${this._941_fields_data.redfund2!=""?this._941_fields_data.redfund2:"Illegible"}
                  </div>
               </div>
            </div>
            <div style="    
               display: flex;
               width: 90%;
               margin-top: 0.7rem;">
               <div style="flex:1">
                  <div style="
                     font-family: system-ui;
                     font-size: 1rem;
                     font-weight: bold;
                     margin-bottom: 0.4rem;">
                     Q3 OF 2020 PAYROLL
                  </div>
                  <div style="
                     font-family: system-ui;
                     font-size: 1rem;
                     font-weight: 400;
                     border: 0.5px solid #cccccc4f;
                     width: 90%;
                     padding: 0.4rem;
                     padding-right: 0;">
                     ${this._941_fields_data.payroll3!=""?this._941_fields_data.payroll3:"Illegible"}
                  </div>
               </div>
               <div style="flex:1">
                  <div style="
                     font-family: system-ui;
                     font-size: 1rem;
                     font-weight: bold;
                     margin-bottom: 0.4rem;">
                     EMPLOYEES HIRED Q3 2020
                  </div>
                  <div style="
                     font-family: system-ui;
                     font-size: 1rem;
                     font-weight: 400;
                     border: 0.5px solid #cccccc4f;
                     width: 90%;
                     padding: 0.4rem;
                     padding-right: 0;">
                     ${this._941_fields_data.employees3!=""?this._941_fields_data.employees3:"Illegible"}
                  </div>
               </div>
               <div style="flex:1">
                  <div style="
                     font-family: system-ui;
                     font-size: 1rem;
                     font-weight: bold;
                     margin-bottom: 0.4rem;">
                     FINAL AMOUNT FOR Q3
                  </div>
                  <div style="
                     font-family: system-ui;
                     font-size: 1rem;
                     font-weight: 400;
                     border: 0.5px solid #cccccc4f;
                     width: 90%;
                     padding: 0.4rem;
                     padding-right: 0;">
                     ${this._941_fields_data.redfund3!=""?this._941_fields_data.redfund3:"Illegible"}
                  </div>
               </div>
            </div>
            <div style="    
               display: flex;
               width: 90%;
               margin-top: 0.7rem;">
               <div style="flex:1">
                  <div style="
                     font-family: system-ui;
                     font-size: 1rem;
                     font-weight: bold;
                     margin-bottom: 0.4rem;">
                     Q4 OF 2020 PAYROLL
                  </div>
                  <div style="
                     font-family: system-ui;
                     font-size: 1rem;
                     font-weight: 400;
                     border: 0.5px solid #cccccc4f;
                     width: 90%;
                     padding: 0.4rem;
                     padding-right: 0;">
                     ${this._941_fields_data.payroll4!=""?this._941_fields_data.payroll4:"Illegible"}
                  </div>
               </div>
               <div style="flex:1">
                  <div style="
                     font-family: system-ui;
                     font-size: 1rem;
                     font-weight: bold;
                     margin-bottom: 0.4rem;">
                     EMPLOYEES HIRED Q4 2020
                  </div>
                  <div style="
                     font-family: system-ui;
                     font-size: 1rem;
                     font-weight: 400;
                     border: 0.5px solid #cccccc4f;
                     width: 90%;
                     padding: 0.4rem;
                     padding-right: 0;">
                     ${this._941_fields_data.employees4!=""?this._941_fields_data.employees4:"Illegible"}
                  </div>
               </div>
               <div style="flex:1">
                  <div style="
                     font-family: system-ui;
                     font-size: 1rem;
                     font-weight: bold;
                     margin-bottom: 0.4rem;">
                     FINAL AMOUNT FOR Q4
                  </div>
                  <div style="
                     font-family: system-ui;
                     font-size: 1rem;
                     font-weight: 400;
                     border: 0.5px solid #cccccc4f;
                     width: 90%;
                     padding: 0.4rem;
                     padding-right: 0;">
                     ${this._941_fields_data.redfund4!=""?this._941_fields_data.redfund4:"Illegible"}
                  </div>
               </div>
            </div>
            <div style="    
            display: flex;
            width: 90%;
            margin-top: 0.7rem;
            justify-content: space-between;">
            <div style="width:30%">
               <div style="
                  font-family: system-ui;
                  font-size: 1.2rem;
                  font-weight: bold;
                  margin-bottom: 1rem;
                  margin-top: 1rem;
                  border: 0.5px solid #cccccc4f;
                  padding: 2rem 0rem 2rem 0rem;
                  color:rgb(66,111,181);
                  text-align: center;">
                  2021 Payroll
               </div>
            </div>
            <div style="width:30%">
               <div style="
                  font-family: system-ui;
                  font-size: 1.2rem;
                  font-weight: bold;
                  margin-bottom: 1rem;
                  margin-top: 1rem;
                  border: 0.5px solid #cccccc4f;
                  padding: 2rem 0rem 2rem 0rem;
                  color:rgb(66,111,181);
                  text-align: center;">
                  W2 Employees 2021
               </div>
            </div>
            <div style="width:30%">
               <div style="
                  font-family: system-ui;
                  font-size: 1.2rem;
                  font-weight: bold;
                  margin-bottom: 1rem;
                  margin-top: 1rem;
                  border: 0.5px solid #cccccc4f;
                  padding: 2rem 0rem 2rem 0rem;
                  color:rgb(66,111,181);
                  text-align: center;">
                  Quarterly Refunds 2021
               </div>
            </div>
         </div>
         <div style="    
         display: flex;
         width: 90%;
         margin-top: 0.7rem;">
         <div style="flex:1">
            <div style="
               font-family: system-ui;
               font-size: 1rem;
               font-weight: bold;
               margin-bottom: 0.4rem;">
               Q1 OF 2021 PAYROLL
            </div>
            <div style="
               font-family: system-ui;
               font-size: 1rem;
               font-weight: 400;
               border: 0.5px solid #cccccc4f;
               width: 90%;
               padding: 0.4rem;
               padding-right: 0;">
               ${this._941_fields_data.payroll5!=""?this._941_fields_data.payroll5:"Illegible"}
            </div>
         </div>
         <div style="flex:1">
            <div style="
               font-family: system-ui;
               font-size: 1rem;
               font-weight: bold;
               margin-bottom: 0.4rem;">
               EMPLOYEES HIRED DURING Q1 2021
            </div>
            <div style="
               font-family: system-ui;
               font-size: 1rem;
               font-weight: 400;
               border: 0.5px solid #cccccc4f;
               width: 90%;
               padding: 0.4rem;
               padding-right: 0;">
               ${this._941_fields_data.employees5!=""?this._941_fields_data.employees5:"Illegible"}
            </div>
         </div>
         <div style="flex:1">
            <div style="
               font-family: system-ui;
               font-size: 1rem;
               font-weight: bold;
               margin-bottom: 0.4rem;">
               Q1 2021 TOTAL REFUND:
            </div>
            <div style="
               font-family: system-ui;
               font-size: 1rem;
               font-weight: 400;
               border: 0.5px solid #cccccc4f;
               width: 90%;
               padding: 0.4rem;
               padding-right: 0;">
               ${this._941_fields_data.redfund5!=""?this._941_fields_data.redfund5:"Illegible"}
            </div>
         </div>
      </div>
      <div style="    
         display: flex;
         width: 90%;
         margin-top: 0.7rem;">
         <div style="flex:1">
            <div style="
               font-family: system-ui;
               font-size: 1rem;
               font-weight: bold;
               margin-bottom: 0.4rem;">
               Q2 OF 2021 PAYROLL
            </div>
            <div style="
               font-family: system-ui;
               font-size: 1rem;
               font-weight: 400;
               border: 0.5px solid #cccccc4f;
               width: 90%;
               padding: 0.4rem;
               padding-right: 0;">
               ${this._941_fields_data.payroll6!=""?this._941_fields_data.payroll6:"Illegible"}
            </div>
         </div>
         <div style="flex:1">
            <div style="
               font-family: system-ui;
               font-size: 1rem;
               font-weight: bold;
               margin-bottom: 0.4rem;">
               EMPLOYEES HIRED DURING Q2 2021
            </div>
            <div style="
               font-family: system-ui;
               font-size: 1rem;
               font-weight: 400;
               border: 0.5px solid #cccccc4f;
               width: 90%;
               padding: 0.4rem;
               padding-right: 0;">
               ${this._941_fields_data.employees6!=""?this._941_fields_data.employees6:"Illegible"}
            </div>
         </div>
         <div style="flex:1">
            <div style="
               font-family: system-ui;
               font-size: 1rem;
               font-weight: bold;
               margin-bottom: 0.4rem;">
               Q2 2021 TOTAL REFUND:
            </div>
            <div style="
               font-family: system-ui;
               font-size: 1rem;
               font-weight: 400;
               border: 0.5px solid #cccccc4f;
               width: 90%;
               padding: 0.4rem;
               padding-right: 0;">
               ${this._941_fields_data.redfund6!=""?this._941_fields_data.redfund6:"Illegible"}
            </div>
    `:`
          <div style="    
         display: flex;
         width: 90%;
         margin-top: 0.7rem;">
         <div style="flex:1">
            <div style="
               font-family: system-ui;
               font-size: 1rem;
               font-weight: bold;
               margin-bottom: 0.4rem;">
               Q3 OF 2021 PAYROLL
            </div>
            <div style="
               font-family: system-ui;
               font-size: 1rem;
               font-weight: 400;
               border: 0.5px solid #cccccc4f;
               width: 90%;
               padding: 0.4rem;
               padding-right: 0;">
               ${this._941_fields_data.payroll7!=""?this._941_fields_data.payroll7:"Illegible"}
            </div>
         </div>
         <div style="flex:1">
            <div style="
               font-family: system-ui;
               font-size: 1rem;
               font-weight: bold;
               margin-bottom: 0.4rem;">
               EMPLOYEES HIRED DURING Q3 2021
            </div>
            <div style="
               font-family: system-ui;
               font-size: 1rem;
               font-weight: 400;
               border: 0.5px solid #cccccc4f;
               width: 90%;
               padding: 0.4rem;
               padding-right: 0;">
               ${this._941_fields_data.employees7!=""?this._941_fields_data.employees7:"Illegible"}
            </div>
         </div>
         <div style="flex:1">
            <div style="
               font-family: system-ui;
               font-size: 1rem;
               font-weight: bold;
               margin-bottom: 0.4rem;">
               Q3 2021 TOTAL REFUND:
            </div>
            <div style="
               font-family: system-ui;
               font-size: 1rem;
               font-weight: 400;
               border: 0.5px solid #cccccc4f;
               width: 90%;
               padding: 0.4rem;
               padding-right: 0;">
               ${this._941_fields_data.redfund7!=""?this._941_fields_data.redfund7:"Illegible"}
            </div>
         </div>
      </div>
      <div>
        <div style="
           font-family: system-ui;
           font-size: 1rem;
           font-weight: bold;
           margin-top: 1.4rem;">
           TOTAL CREDIT AMOUNT FOR 2021:
        </div>
        <div style="
           font-family: system-ui;
           font-size: 1rem;
           font-weight: 400;
           border: 0.5px solid #cccccc4f;
           width: 90%;
           padding: 0.4rem;
           padding-right: 0;">
           ${this._2021_total+this._2020_total}
        </div>
     </div>
           <div style="    
         display: flex;
         width: 90%;
         margin-top: 0.7rem;">
         <div style="flex:1">
            <div style="
               font-family: system-ui;
               font-size: 1rem;
               font-weight: bold;
               margin-bottom: 0.4rem;">
               Q2 OF 2021 PAYROLL
            </div>
            <div style="
               font-family: system-ui;
               font-size: 1rem;
               font-weight: 400;
               border: 0.5px solid #cccccc4f;
               width: 90%;
               padding: 0.4rem;
               padding-right: 0;">
               ${this._941_fields_data.payroll6!=""?this._941_fields_data.payroll6:"Illegible"}
            </div>
         </div>
         <div style="flex:1">
            <div style="
               font-family: system-ui;
               font-size: 1rem;
               font-weight: bold;
               margin-bottom: 0.4rem;">
               EMPLOYEES HIRED DURING Q2 2021
            </div>
            <div style="
               font-family: system-ui;
               font-size: 1rem;
               font-weight: 400;
               border: 0.5px solid #cccccc4f;
               width: 90%;
               padding: 0.4rem;
               padding-right: 0;">
               ${this._941_fields_data.employees6!=""?this._941_fields_data.employees6:"Illegible"}
            </div>
         </div>
         <div style="flex:1">
            <div style="
               font-family: system-ui;
               font-size: 1rem;
               font-weight: bold;
               margin-bottom: 0.4rem;">
               Q2 2021 TOTAL REFUND:
            </div>
            <div style="
               font-family: system-ui;
               font-size: 1rem;
               font-weight: 400;
               border: 0.5px solid #cccccc4f;
               width: 90%;
               padding: 0.4rem;
               padding-right: 0;">
               ${this._941_fields_data.redfund6!=""?this._941_fields_data.redfund6:"Illegible"}
            </div>
            </div>
</div>

     `;return`
   <html lang="en">
   <head>
      <meta charset="UTF-8">
      <meta http-equiv="X-UA-Compatible" content="IE=edge">
      <meta name="viewport" content="width=device-width, initial-scale=1.0">
      <title>Document</title>
   </head>
   <body>
      <div style="    
         position: absolute;
         top: 0;
         left: 0;
         margin: 0;
         padding: 0;
         border: 0;
         bottom: 0;
         right: 0;
         overflow: auto;
         background-color: #9e9e9e;
         transition: left 500ms;">
         <div id="pf1" style="    
            position: relative;
            background-color: white;
            overflow: hidden;
            border: 0;
            margin: 13px auto;
            box-shadow: 1px 1px 3px 1px #333;
            border-collapse: separate;
            height: 1262.835000px;
            width: 892.920000px;" data-page-no="1">
            <div style="    
               border-collapse: separate;
               position: absolute;
               border: 0;
               padding: 0;
               margin: 0;
               top: 0;
               left: 0;
               overflow: hidden;
               -webkit-transform-origin: 0 0;
               height: 1262.835000px;
               width: 892.920000px;
               display: block;
               animation: fadein 100ms;
               padding: 3rem;">
              ${e}
              ${t}
              ${n}
            </div>
          </div>

                    <div id="pf2" style="    
                        position: relative;
                        background-color: white;
                        overflow: hidden;
                        border: 0;
                        margin: 13px auto;
                        box-shadow: 1px 1px 3px 1px #333;
                        border-collapse: separate;
                        height: 1262.835000px;
                        width: 892.920000px;" data-page-no="2">
                        <div style="    
                            border-collapse: separate;
                            position: absolute;
                            border: 0;
                            padding: 0;
                            margin: 0;
                            top: 0;
                            left: 0;
                            overflow: hidden;
                            -webkit-transform-origin: 0 0;
                            height: 1262.835000px;
                            width: 892.920000px;
                            display: block;
                            animation: fadein 100ms;
                            padding: 3rem;">
                              ${i}
                        </div>
                      </div>

      </div>
      </body>
      </html>
     `},updateRefund(e){let t=parseInt(document.getElementById("input"+e+e).value),n=parseInt(document.getElementById("input"+e).value);if(console.log(t,n,"first"),!isNaN(t)&&!isNaN(n)){let i=n/t,s=i>=7e3?7e3:i*.7,r=s*t;console.log(i,s,r,"second");let o=document.getElementById("input"+e+e+e),l=o.value.replace("$","");o.value=r>0?"$"+r.toFixed(2):r.toFixed(2),this._2021_total=this._2021_total+(r-(parseInt(l)>0?parseInt(l):0))}},validateForm(e){e.preventDefault()},async next(e,t=0){await setTimeout(()=>{e.preventDefault(),console.log(this.step,"start"),this.previous.push(this.step),t>12?this.step=t:this.step?this.step===12?this.step=1:this.step===1?this.step=this.reduce_operations?2:3:this.step===3?!parseInt(this.useful_info)||parseInt(this.useful_info)===2?this.step=4:this.step=parseInt(this.useful_info)===1?5:7:this.step===4?this.step=this.useful_info?5:6:this.step=this.step+1:this.step=12,console.log(this.step,"end")},100)},prev(){this.step=this.previous.length?this.previous.pop():0},handleCheckboxes(e){if(console.log(e),!this.quarters.includes(e))this.quarters.push(e);else{let t=this.quarters.indexOf(e);this.quarters.splice(t,1)}console.log(this.quarters)},getQuarterName(e){return e>0&&e<=4?`Quarter ${e} 2020`:`Quarter ${e} 2021`},convertToNumber(e){return typeof e=="string"?parseInt(e):e}},computed:{_2020_fields(){return this._941_fields.filter(e=>e<=4)},_2021_fields(){return this._941_fields.filter(e=>e>4)}},watch:{step(e,t){var r,o;let n="Based on your submission, we are unable to help at this point in time.",i="Based on your answers our AI calculator has determined you are Illegible for the ERC credit.",s="Congratulations on prequalifying for the ERC! A consultant will be reaching out shortly.";if(t===6){this._2020_total=parseInt(document.getElementById("ref2020").value.replace("$","")),this._2020_total=isNaN(this._2020_total)?0:this._2020_total;try{this._941_fields_data.redfund1=document.getElementById("input111").value}catch{}try{this._941_fields_data.redfund2=document.getElementById("input222").value}catch{}try{this._941_fields_data.redfund3=document.getElementById("input333").value}catch{}try{this._941_fields_data.redfund4=document.getElementById("input444").value}catch{}try{this._941_fields_data.redfund5=document.getElementById("input555").value}catch{}try{this._941_fields_data.redfund6=document.getElementById("input666").value}catch{}try{this._941_fields_data.redfund7=document.getElementById("input777").value}catch{}}if(this.step===7&&(console.log(this._2021_total+this._2020_total<1e5?n:s),parseInt(this.useful_info)==3?this.conclusion_text=n:parseInt(this.useful_info)==1?(this.conclusion_text=this._2021_total+this._2020_total<1e5?n:s,console.log("in 1",this.conclusion_text)):parseInt(this.num_employees)<2?(console.log("in 2",this.conclusion_text),this.convertToNumber(this.useful_info)?parseInt(this.useful_info)==2&&(console.log("in 4",this.conclusion_text),this.valid_revenue.length?(this.conclusion_text=this._2021_total+this._2020_total<1e5?n:s,console.log("in 5",this.conclusion_text)):this.valid_revenue.length||(this.conclusion_text=i,console.log("in 6",this.conclusion_text))):(this.conclusion_text=n,console.log("in 3",this.conclusion_text))):parseInt(this.num_employees)>=2?(console.log("in 7",this.conclusion_text),this.convertToNumber(this.useful_info)?parseInt(this.useful_info)==2&&(console.log("in 9",this.conclusion_text),this.valid_revenue.length?(this.conclusion_text=this._2021_total+this._2020_total<1e5?n:s,console.log("in 10",this.conclusion_text)):!this.valid_revenue.length&&!this.convertToNumber(this.reduce_operations)?(this.conclusion_text=i,console.log("in 11",this.conclusion_text)):this.valid_revenue.length&&this.convertToNumber(this.reduce_operations)&&(this.conclusion_text=this._2021_total+this._2020_total<1e5?n:s,console.log("in 12",this.conclusion_text))):(this.conclusion_text=this.valid_revenue.length?s:n,console.log("in 8",this.conclusion_text))):this.conclusion_text="path impossible",this.resultType=this.conclusion_text=="Congratulations on prequalifying for the ERC! A consultant will be reaching out shortly."),this.step===6?setTimeout(()=>{if(parseInt(this.useful_info)!==0&&parseInt(this.useful_info)!==2)console.log("we are here for now ... 11"),this._941_fields=[1,2,3,4,5,6,7];else if(parseInt(this.useful_info)==0||parseInt(this.useful_info)==2){console.log("we are here for now ... 22");let a=[...this.valid_revenue],u=this.quarters.filter(function(f){return a.indexOf(f)===-1});this._941_fields=[...u,...a]}var l=document.createElement("script");l.setAttribute("src","../_941_calculator.js"),l.setAttribute("id","my_awesome_script1"),document.head.appendChild(l)},500):(r=document.getElementById("my_awesome_script1"))==null||r.remove(),t===4){e>4&&(this.is_revenue_input=!0);let l=[];document.querySelectorAll(".is-valid").forEach(a=>l.push(parseInt(a.getAttribute("data")))),this.valid_revenue=[...l]}this.step===4?setTimeout(()=>{var l=document.createElement("script");l.setAttribute("src","../revenue.js"),l.setAttribute("id","my_awesome_script"),document.head.appendChild(l)},500):(o=document.getElementById("my_awesome_script"))==null||o.remove()}}}),gf={key:0,class:"d-flex justify-content-center align-items-center h-100"},yf={class:"container card min"},_f=h("div",{class:"row form-row"},[h("div",{class:"col",style:{"text-align":"center"}},"2019 Revenue"),h("div",{class:"col",style:{"text-align":"center"}},"2020 Revenue"),h("div",{class:"col",style:{"text-align":"center"}},"2021 Revenue")],-1),bf={class:"row form-row"},vf={class:"col"},wf={class:"col"},xf={class:"col"},Ef={class:"row form-row"},Rf={class:"col"},If={class:"col"},Cf={class:"col"},Af={class:"row form-row"},Of={class:"col"},Tf={class:"col"},kf={class:"col"},Pf={class:"row form-row"},Sf={class:"col"},Df={class:"col"},$f=h("div",{class:"col"},[h("input",{data:"8",name:"input43",id:"input43",type:"text",class:"form-control",placeholder:"Q4 for 2021 is not applicable.","aria-label":"Q4 for 2021 is not applicable.",disabled:""})],-1),Mf={class:"d-flex justify-content-center p-2"},Nf=h("button",{type:"submit",class:"btn btn btn-primary m-2"},"Next",-1),zf={key:1},Bf=h("h2",null,"Disclaimer",-1),Lf=h("hr",null,null,-1),Uf=h("p",null," The estimates provided by this calculator are for illustrative purposes only and should not be relied upon as an accurate indication of the Employee Retention Credit amount your business is or may be entitled to. No determination or opinion as to eligibility is hereby offered, and your use of this calculator tool in no way creates any legal relationship between you and ERTCFunding LLC. Eligibility is complex and multi-faceted, and many factors not considered by this tool may be relevant to your eligibility and/or your eligible credit amount (i.e. ppp/owner relatives). ERTCFunding LLC is not an accounting firm, and no tax advice is hereby offered or provided. ERTCFunding LLC does not guarantee that this calculator is reliable, accurate or complete or that it will be compatible with your computer. Should your business have opened post January 1, 2019, this calculator will not correctly assess eligibility. ",-1),Ff={class:"d-flex justify-content-center p-2"},Hf={key:2},jf=h("h2",null," How many W2 employees did you average in 2020 and 2021? ",-1),Qf=h("hr",null,null,-1),Vf=_o('<option value="" selected> How many W2 employees did you average in 2020 and 2021? </option><option value="0">1-10</option><option value="1">10-20</option><option value="2">20-50</option><option value="3">50-100</option><option value="4">100+</option>',6),Wf=[Vf],Kf={class:"d-flex justify-content-center p-2"},Yf={key:3},qf=h("h2",null," Was your business forced to reduce operations in any way due to government restrictions? ",-1),Gf=h("hr",null,null,-1),Jf={class:"form-check",style:{"margin-bottom":"1rem"}},Xf=h("label",{class:"btn btn-outline-success w-100",for:"flexRadioDefault1"}," Yes ",-1),Zf={class:"form-check"},eh=h("label",{class:"btn btn-outline-success w-100",for:"flexRadioDefault2"}," No ",-1),th={class:"d-flex justify-content-center p-2"},nh={key:4},ih=h("h2",null," Please select the quarter(s) your business was affected by Government Restrictions. ",-1),sh=h("hr",null,null,-1),rh=h("h3",{style:{"text-align":"center",margin:"1rem 0"}},"2020",-1),oh={class:"d-flex"},lh={class:"form-check",style:{flex:"1","margin-left":"0"}},ah=["checked"],ch=h("label",{class:"btn btn-outline-success w-100",for:"defaultCheck1",id:"test",style:{"border-radius":"0"}}," Quarter 1 ",-1),dh={class:"form-check",style:{flex:"1","margin-left":"0"}},uh=["checked"],fh=h("label",{class:"btn btn-outline-success w-100",for:"defaultCheck2",style:{"border-radius":"0"}}," Quarter 2 ",-1),hh={class:"form-check",style:{flex:"1","margin-left":"0"}},mh=["checked"],ph=h("label",{class:"btn btn-outline-success w-100",for:"defaultCheck3",style:{"border-radius":"0"}}," Quarter 3 ",-1),gh={class:"form-check",style:{flex:"1","margin-left":"0"}},yh=["checked"],_h=h("label",{class:"btn btn-outline-success w-100",for:"defaultCheck4",style:{"border-radius":"0"}}," Quarter 4 ",-1),bh=h("h3",{style:{"text-align":"center",margin:"1rem 0"}},"2021",-1),vh={class:"d-flex"},wh={class:"form-check",style:{flex:"1","margin-left":"0"}},xh=["checked"],Eh=h("label",{class:"btn btn-outline-success w-100",for:"defaultCheck5",style:{"border-radius":"0"}}," Quarter 1 ",-1),Rh={class:"form-check",style:{flex:"1","margin-left":"0"}},Ih=["checked"],Ch=h("label",{class:"btn btn-outline-success w-100",for:"defaultCheck6",style:{"border-radius":"0"}}," Quarter 2 ",-1),Ah={class:"form-check",style:{flex:"1","margin-left":"0"}},Oh=["checked"],Th=h("label",{class:"btn btn-outline-success w-100",for:"defaultCheck7",style:{"border-radius":"0"}}," Quarter 3 ",-1),kh={class:"d-flex justify-content-center p-2"},Ph={key:5},Sh=h("h2",null,"What information do you have handy?",-1),Dh=h("hr",null,null,-1),$h={class:"form-check"},Mh=h("label",{class:"btn btn-outline-success w-100",for:"flexRadioDefault1"}," I have my 2019 \u2013 2021 quarterly P/Ls ",-1),Nh={class:"form-check"},zh=h("label",{class:"btn btn-outline-success w-100",for:"flexRadioDefault2"}," I have my 2020 \u2013 2021 Quarterly 941s ",-1),Bh={class:"form-check"},Lh=h("label",{class:"btn btn-outline-success w-100",for:"flexRadioDefault3"}," I have both. ",-1),Uh={class:"form-check"},Fh=h("label",{class:"btn btn-outline-success w-100",for:"flexRadioDefault4"}," I have none. ",-1),Hh={class:"d-flex justify-content-center p-2"},jh={key:6},Qh=h("h2",null," How many employees did you average over the 2019 fiscal year across all aggregated entities? ",-1),Vh=h("hr",null,null,-1),Wh={class:"form-check"},Kh=h("label",{class:"btn btn-outline-success w-100",for:"flexRadioDefault1"}," Under 100 ",-1),Yh={class:"form-check"},qh=h("label",{class:"btn btn-outline-success w-100",for:"flexRadioDefault2"}," Over 100 ",-1),Gh={class:"form-check"},Jh=h("label",{class:"btn btn-outline-success w-100",for:"flexRadioDefault3"}," Over 500 ",-1),Xh={class:"d-flex justify-content-center p-2"},Zh={key:0},em=h("h2",null," How many employees did you average over the 2019 fiscal year across all aggregated entities? ",-1),tm=h("br",null,null,-1),nm=h("p",null," taxable wages (941 line 5c/d) and your employee amount (941 line 3) below. ",-1),im={key:0},sm={key:1},rm=h("hr",null,null,-1),om=h("br",null,null,-1),lm=h("div",{class:"row form-row"},[h("div",{class:"col",style:{"text-align":"center"}},"2020 Payroll"),h("div",{class:"col",style:{"text-align":"center"}},"W2 Employees 2020"),h("div",{class:"col",style:{"text-align":"center"}}," Quarterly Refunds 2020 ")],-1),am={class:"col"},cm=["name","id","placeholder","aria-label","onUpdate:modelValue","test","data","tabindex"],dm={class:"col"},um=["name","id","placeholder","aria-label","onUpdate:modelValue","test","tabindex"],fm={class:"col"},hm=["name","id","placeholder","aria-label","test"],mm=_o('<br><h3>Total Refunds 2020</h3><input name="ref2020" id="ref2020" type="text" class="form-control" placeholder="$0.00" aria-label="$0.00" disabled><br><hr><br><div class="row form-row"><div class="col" style="text-align:center;">2021 Payroll</div><div class="col" style="text-align:center;">W2 Employees 2021</div><div class="col" style="text-align:center;"> Quarterly Refunds 2021 </div></div>',7),pm={class:"col"},gm=["name","id","placeholder","aria-label","onUpdate:modelValue","test","onBlur","tabindex"],ym={class:"col"},_m=["name","id","placeholder","aria-label","onUpdate:modelValue","test","onBlur","tabindex"],bm={class:"col"},vm=["name","id","placeholder","aria-label","test"],wm=h("h3",null,"Total Refunds 2021:",-1),xm=["value"],Em=h("br",null,null,-1),Rm={class:"d-flex justify-content-center p-2"},Im=h("button",{tabindex:51,type:"submit",class:"btn btn btn-primary m-2"}," Next ",-1),Cm={key:7,style:{margin:"auto"}},Am={class:"text-center"},Om=h("br",null,null,-1),Tm={key:0,class:"text-center"},km=h("br",null,null,-1),Pm={key:1,class:"d-flex justify-content-center p-2"},Sm=h("i",{style:{"font-size":"2rem","margin-bottom":"5px"},class:"fa-solid fa-user-tie"},null,-1),Dm=Xn(" Speak to a specialist"),$m=[Sm,Dm],Mm=h("i",{style:{"font-size":"2rem","margin-bottom":"5px"},class:"fa-solid fa-handshake"},null,-1),Nm=Xn(" Partner with us"),zm=[Mm,Nm],Bm={key:1,id:"form"},Lm={class:"row"},Um={class:"col-lg-7 mx-auto"},Fm={class:"card mt-2 mx-auto p-4 bg-light"},Hm={class:"text-center mt-5"},jm={key:0},Qm={key:1},Vm={class:"card-body bg-light"},Wm={class:"controls"},Km={class:"row mb-3"},Ym={class:"col-md-6"},qm={class:"form-group"},Gm={class:"col-md-6"},Jm={class:"form-group"},Xm={class:"row mb-3"},Zm={class:"col-md-6"},ep={class:"form-group"},tp={class:"col-md-6"},np={class:"form-group"},ip={class:"row mb-3"},sp={key:0,class:"col-md-6"},rp={class:"form-group"},op={key:1,class:"col-md-12"},lp={class:"form-group"},ap={key:2,class:"col-md-6"},cp=h("a",{target:"_blank",href:"https://calendly.com/izzy-28/ertc-funding-partner",class:"btn btn-primary"},[h("i",{class:"fa-solid fa-clock"}),Xn(" Schedule a call")],-1),dp=[cp],up={class:"row mb-3"},fp=h("div",{class:"col-md-12"},[h("div",{class:"form-group"},[h("textarea",{id:"form_message",name:"message",class:"form-control",placeholder:"Comments?",rows:"4","data-error":"Please, leave us a message."})])],-1),hp={class:"col-md-12 mt-2 self-center",style:{display:"flex","justify-content":"center"}},mp={key:0,type:"submit",class:"btn btn-primary btn-send pt-2 btn-block",value:"Submit"},pp={key:1,type:"submit",class:"btn btn-primary btn-send pt-2 btn-block",disabled:""},gp=h("span",{style:{"margin-right":"1rem"},class:"spinner-border spinner-border-sm",role:"status","aria-hidden":"true"},null,-1),yp=h("span",null,"Submitting...",-1),_p=[gp,yp];function bp(e,t,n,i,s,r){var o,l,a,u,f,p,g;return e.step<=12?(X(),ie("div",gf,[h("div",yf,[e.step==4?(X(),ie("form",{key:0,method:"POST",onSubmit:t[12]||(t[12]=oi(c=>e.next(c,4),["prevent"]))},[_f,h("div",bf,[h("div",vf,[W(h("input",{name:"input11",id:"input11",type:"text",class:"form-control",placeholder:"Quarter 1 2019 ","aria-label":"Quarter 1 2019","onUpdate:modelValue":t[0]||(t[0]=c=>e.revenue_inputs._1=c),required:"",tabindex:"1"},null,512),[[oe,e.revenue_inputs._1]])]),h("div",wf,[W(h("input",{data:"1",name:"input12",id:"input12",type:"text",class:"form-control",placeholder:"Quarter 1 2020","aria-label":"Quarter 1 2020","onUpdate:modelValue":t[1]||(t[1]=c=>e.revenue_inputs._2=c),required:"",tabindex:"5",style:{"background-image":"unset"}},null,512),[[oe,e.revenue_inputs._2]])]),h("div",xf,[W(h("input",{data:"5",name:"input13",id:"input13",type:"text",class:"form-control",placeholder:"Quarter 1 2021","aria-label":"Quarter 1 2021","onUpdate:modelValue":t[2]||(t[2]=c=>e.revenue_inputs._3=c),required:"",tabindex:"9",style:{"background-image":"unset"}},null,512),[[oe,e.revenue_inputs._3]])])]),h("div",Ef,[h("div",Rf,[W(h("input",{name:"input21",id:"input21",type:"text",class:"form-control",placeholder:"Quarter 2 2019 ","aria-label":"Quarter 2 2019","onUpdate:modelValue":t[3]||(t[3]=c=>e.revenue_inputs._4=c),required:"",tabindex:"2"},null,512),[[oe,e.revenue_inputs._4]])]),h("div",If,[W(h("input",{data:"2",name:"input22",id:"input22",type:"text",class:"form-control",placeholder:"Quarter 2 2020","aria-label":"Quarter 2 2020","onUpdate:modelValue":t[4]||(t[4]=c=>e.revenue_inputs._5=c),required:"",tabindex:"6",style:{"background-image":"unset"}},null,512),[[oe,e.revenue_inputs._5]])]),h("div",Cf,[W(h("input",{data:"6",name:"input23",id:"input23",type:"text",class:"form-control",placeholder:"Quarter 2 2021","aria-label":"Quarter 2 2021","onUpdate:modelValue":t[5]||(t[5]=c=>e.revenue_inputs._6=c),required:"",tabindex:"10",style:{"background-image":"unset"}},null,512),[[oe,e.revenue_inputs._6]])])]),h("div",Af,[h("div",Of,[W(h("input",{name:"input31",id:"input31",type:"text",class:"form-control",placeholder:"Quarter 3 2019 ","aria-label":"Quarter 3 2019","onUpdate:modelValue":t[6]||(t[6]=c=>e.revenue_inputs._7=c),required:"",tabindex:"3"},null,512),[[oe,e.revenue_inputs._7]])]),h("div",Tf,[W(h("input",{data:"3",name:"input32",id:"input32",type:"text",class:"form-control",placeholder:"Quarter 3 2020","aria-label":"Quarter 3 2020","onUpdate:modelValue":t[7]||(t[7]=c=>e.revenue_inputs._8=c),required:"",tabindex:"7",style:{"background-image":"unset"}},null,512),[[oe,e.revenue_inputs._8]])]),h("div",kf,[W(h("input",{data:"7",name:"input33",id:"input33",type:"text",class:"form-control",placeholder:"Quarter 3 2021","aria-label":"Quarter 3 2021","onUpdate:modelValue":t[8]||(t[8]=c=>e.revenue_inputs._9=c),required:"",tabindex:"11",style:{"background-image":"unset"}},null,512),[[oe,e.revenue_inputs._9]])])]),h("div",Pf,[h("div",Sf,[W(h("input",{name:"input41",id:"input41",type:"text",class:"form-control",placeholder:"Quarter 4 2019 ","aria-label":"Quarter 4 2019","onUpdate:modelValue":t[9]||(t[9]=c=>e.revenue_inputs._10=c),required:"",tabindex:"4"},null,512),[[oe,e.revenue_inputs._10]])]),h("div",Df,[W(h("input",{data:"4",name:"input42",id:"input42",type:"text",class:"form-control",placeholder:"Quarter 4 2020","aria-label":"Quarter 4 2020","onUpdate:modelValue":t[10]||(t[10]=c=>e.revenue_inputs._11=c),required:"",tabindex:"8",style:{"background-image":"unset"}},null,512),[[oe,e.revenue_inputs._11]])]),$f]),h("div",Mf,[h("button",{type:"button",onClick:t[11]||(t[11]=c=>e.prev()),class:"btn btn btn-danger m-2"}," Previous "),Nf])],32)):pe("",!0),e.step?pe("",!0):(X(),ie("div",zf,[Bf,Lf,Uf,h("div",Ff,[h("button",{onClick:t[13]||(t[13]=c=>e.prev()),class:"btn btn btn-danger m-2"},"Refuse"),h("button",{onClick:t[14]||(t[14]=c=>e.next(c)),class:"btn btn btn-primary m-2"}," Accept ")])])),e.step==12?(X(),ie("div",Hf,[jf,Qf,W(h("select",{"onUpdate:modelValue":t[15]||(t[15]=c=>e.num_employees=c),class:"form-select form-select","aria-label":".form-select-sm example",onChange:t[16]||(t[16]=c=>e.next(c))},Wf,544),[[Rc,e.num_employees]]),h("div",Kf,[h("button",{onClick:t[17]||(t[17]=c=>e.prev()),class:"btn btn btn-danger m-2"}," Previous ")])])):pe("",!0),e.step==1?(X(),ie("div",Yf,[qf,Gf,h("div",Jf,[W(h("input",{"onUpdate:modelValue":t[18]||(t[18]=c=>e.reduce_operations=c),class:"btn-check",type:"radio",name:"flexRadioDefault",id:"flexRadioDefault1",value:!0,onClick:t[19]||(t[19]=c=>e.next(c))},null,512),[[Ke,e.reduce_operations]]),Xf]),h("div",Zf,[W(h("input",{"onUpdate:modelValue":t[20]||(t[20]=c=>e.reduce_operations=c),class:"btn-check",type:"radio",name:"flexRadioDefault",id:"flexRadioDefault2",value:!1,onClick:t[21]||(t[21]=c=>e.next(c))},null,512),[[Ke,e.reduce_operations]]),eh]),h("div",th,[h("button",{onClick:t[22]||(t[22]=c=>e.prev()),class:"btn btn btn-danger m-2"}," Previous ")])])):pe("",!0),e.step==2?(X(),ie("div",nh,[ih,sh,rh,h("div",oh,[h("div",lh,[h("input",{class:"btn-check",type:"checkbox",value:"",id:"defaultCheck1",onChange:t[23]||(t[23]=c=>e.handleCheckboxes(1)),checked:(o=e.quarters)==null?void 0:o.includes(1)},null,40,ah),ch]),h("div",dh,[h("input",{class:"btn-check",type:"checkbox",value:"",id:"defaultCheck2",onChange:t[24]||(t[24]=c=>e.handleCheckboxes(2)),checked:(l=e.quarters)==null?void 0:l.includes(2)},null,40,uh),fh]),h("div",hh,[h("input",{class:"btn-check",type:"checkbox",value:"",id:"defaultCheck3",onChange:t[25]||(t[25]=c=>e.handleCheckboxes(3)),checked:(a=e.quarters)==null?void 0:a.includes(3)},null,40,mh),ph]),h("div",gh,[h("input",{class:"btn-check",type:"checkbox",value:"",id:"defaultCheck4",onChange:t[26]||(t[26]=c=>e.handleCheckboxes(4)),checked:(u=e.quarters)==null?void 0:u.includes(4)},null,40,yh),_h])]),bh,h("div",vh,[h("div",wh,[h("input",{class:"btn-check",type:"checkbox",id:"defaultCheck5",onChange:t[27]||(t[27]=c=>e.handleCheckboxes(5)),checked:(f=e.quarters)==null?void 0:f.includes(5)},null,40,xh),Eh]),h("div",Rh,[h("input",{class:"btn-check",type:"checkbox",value:"",id:"defaultCheck6","true-value":"q6","false-value":"q6",onChange:t[28]||(t[28]=c=>e.handleCheckboxes(6)),checked:(p=e.quarters)==null?void 0:p.includes(6)},null,40,Ih),Ch]),h("div",Ah,[h("input",{class:"btn-check",type:"checkbox",value:"",id:"defaultCheck7",onChange:t[29]||(t[29]=c=>e.handleCheckboxes(7)),checked:(g=e.quarters)==null?void 0:g.includes(7)},null,40,Oh),Th])]),h("div",kh,[h("button",{onClick:t[30]||(t[30]=c=>e.prev()),class:"btn btn btn-danger m-2"}," Previous "),h("button",{onClick:t[31]||(t[31]=c=>e.next(c)),class:"btn btn btn-primary m-2"}," Next ")])])):pe("",!0),e.step==3?(X(),ie("div",Ph,[Sh,Dh,h("div",$h,[W(h("input",{"onUpdate:modelValue":t[32]||(t[32]=c=>e.useful_info=c),class:"btn-check",type:"radio",name:"flexRadioDefault2",id:"flexRadioDefault1",value:0,onClick:t[33]||(t[33]=c=>e.next(c))},null,512),[[Ke,e.useful_info]]),Mh]),h("div",Nh,[W(h("input",{"onUpdate:modelValue":t[34]||(t[34]=c=>e.useful_info=c),class:"btn-check",type:"radio",name:"flexRadioDefault2",id:"flexRadioDefault2",value:1,onClick:t[35]||(t[35]=c=>e.next(c))},null,512),[[Ke,e.useful_info]]),zh]),h("div",Bh,[W(h("input",{"onUpdate:modelValue":t[36]||(t[36]=c=>e.useful_info=c),class:"btn-check",type:"radio",name:"flexRadioDefault2",id:"flexRadioDefault3",value:2,onClick:t[37]||(t[37]=c=>e.next(c))},null,512),[[Ke,e.useful_info]]),Lh]),h("div",Uh,[W(h("input",{"onUpdate:modelValue":t[38]||(t[38]=c=>e.useful_info=c),class:"btn-check",type:"radio",name:"flexRadioDefault2",id:"flexRadioDefault4",value:3,onClick:t[39]||(t[39]=c=>e.next(c))},null,512),[[Ke,e.useful_info]]),Fh]),h("div",Hh,[h("button",{onClick:t[40]||(t[40]=c=>e.prev()),class:"btn btn btn-danger m-2"}," Previous ")])])):pe("",!0),e.step==5?(X(),ie("div",jh,[Qh,Vh,h("div",Wh,[W(h("input",{"onUpdate:modelValue":t[41]||(t[41]=c=>e.number_employes_step3=c),class:"btn-check",type:"radio",name:"flexRadioDefault3",id:"flexRadioDefault1",value:0,onClick:t[42]||(t[42]=c=>e.next(c))},null,512),[[Ke,e.number_employes_step3]]),Kh]),h("div",Yh,[W(h("input",{"onUpdate:modelValue":t[43]||(t[43]=c=>e.number_employes_step3=c),class:"btn-check",type:"radio",name:"flexRadioDefault3",id:"flexRadioDefault2",value:1,onClick:t[44]||(t[44]=c=>e.next(c))},null,512),[[Ke,e.number_employes_step3]]),qh]),h("div",Gh,[W(h("input",{"onUpdate:modelValue":t[45]||(t[45]=c=>e.number_employes_step3=c),class:"btn-check",type:"radio",name:"flexRadioDefault3",id:"flexRadioDefault3",value:2,onClick:t[46]||(t[46]=c=>e.next(c))},null,512),[[Ke,e.number_employes_step3]]),Jh]),h("div",Xh,[h("button",{onClick:t[47]||(t[47]=c=>e.prev()),class:"btn btn btn-danger m-2"}," Previous ")])])):pe("",!0),h("form",{method:"POST",onSubmit:t[49]||(t[49]=oi(c=>e.next(c),["prevent"]))},[e.step==6?(X(),ie("div",Zh,[em,tm,nm,e.number_employes_step3==1?(X(),ie("p",im,"**a large employer (over 100 employees) is eligible for all wages paid in 2021. In 2020 only wages paid to non-working employees are eligible**")):e.number_employes_step3==2?(X(),ie("p",sm,"**a large employer (over 500 employees) is only eligible for wages paid to non-working employees**")):pe("",!0),rm,om,lm,(X(!0),ie(ke,null,ks(e._2020_fields,(c,R)=>(X(),ie("div",{class:"row form-row",key:R},[h("div",am,[W(h("input",{name:"input"+c,id:"input"+c,type:"text",class:"form-control is-2020 fetch",placeholder:"Q"+c+" Payroll","aria-label":"Q"+c+" Payroll","onUpdate:modelValue":S=>e._941_fields_data["payroll"+c]=S,test:"payroll"+c,data:c,tabindex:R===0?1:R},null,8,cm),[[oe,e._941_fields_data["payroll"+c]]])]),h("div",dm,[W(h("input",{name:"input"+c+c,id:"input"+c+c,type:"text",class:"form-control fetch",placeholder:"# of employees Q"+c,"aria-label":"# of employees Q"+c,"onUpdate:modelValue":S=>e._941_fields_data["employees"+c]=S,test:"employees"+c,tabindex:R+e._2020_fields.length},null,8,um),[[oe,e._941_fields_data["employees"+c]]])]),h("div",fm,[h("input",{name:"input"+c+c+c,id:"input"+c+c+c,type:"text",class:"form-control",placeholder:"Final Refunds Q"+c,"aria-label":"Final Refunds Q"+c,test:"refund"+c,disabled:""},null,8,hm)])]))),128)),mm,(X(!0),ie(ke,null,ks(e._2021_fields,(c,R)=>(X(),ie("div",{class:"row form-row",key:R},[h("div",pm,[W(h("input",{name:"input"+c,id:"input"+c,type:"text",class:"form-control",placeholder:"Q"+(c-4)+" Payroll","aria-label":"Q"+(c-4)+" Payroll","onUpdate:modelValue":S=>e._941_fields_data["payroll"+c]=S,test:"payroll"+c,onBlur:S=>e.updateRefund(c),tabindex:R+e._2020_fields.length*2},null,40,gm),[[oe,e._941_fields_data["payroll"+c]]])]),h("div",ym,[W(h("input",{data:"1",name:"input"+c+c,id:"input"+c+c,type:"text",class:"form-control",placeholder:"# of employees Q"+(c-4),"aria-label":"# of employees Q"+(c-4),"onUpdate:modelValue":S=>e._941_fields_data["employees"+c]=S,test:"employees"+c,onBlur:S=>e.updateRefund(c),tabindex:R+e._2020_fields.length*2+e._2021_fields.length},null,40,_m),[[oe,e._941_fields_data["employees"+c]]])]),h("div",bm,[h("input",{data:"5",name:"input"+c+c+c,id:"input"+c+c+c,type:"text",class:"form-control",placeholder:"Final Refunds Q"+(c-4),"aria-label":"Final Refunds Q"+(c-4),test:"redfund"+c,disabled:""},null,8,vm)])]))),128)),wm,h("input",{name:"ref2021",id:"ref2021",type:"text",class:"form-control",placeholder:"$0.00","aria-label":"$0.00",value:"$"+e._2021_total.toFixed(2),tabindex:50,readonly:""},null,8,xm),Em,h("div",Rm,[h("button",{tabindex:52,onClick:t[48]||(t[48]=c=>e.prev()),class:"btn btn btn-danger m-2"}," Previous "),Im])])):pe("",!0)],32),e.step==7?(X(),ie("div",Cm,[h("h2",Am,hl(e.conclusion_text),1),Om,e.resultType?(X(),ie("p",Tm," Thank you for your submission. Please click below to take advantage of ERTC Fundings compliance team and ERC Optimization software. ")):pe("",!0),km,e.resultType?(X(),ie("div",Pm,[h("button",{onClick:t[50]||(t[50]=c=>e.next(c,13)),class:"btn btn-primary",style:{"margin-left":"2.5rem",display:"flex","flex-direction":"column","justify-content":"center","align-items":"center",width:"11rem"}},$m),h("button",{onClick:t[51]||(t[51]=c=>e.next(c,14)),class:"btn btn-primary",style:{"margin-left":"2.5rem",display:"flex","flex-direction":"column","justify-content":"center","align-items":"center",width:"11rem"}},zm)])):pe("",!0)])):pe("",!0)])])):(X(),ie("div",Bm,[h("div",Lm,[h("div",Um,[h("div",Fm,[h("div",Hm,[e.step==13?(X(),ie("h1",jm,"Speak To A Specialist")):(X(),ie("h1",Qm,"Partner With Us"))]),h("div",Vm,[h("div",null,[h("form",{method:"POST",id:"contact-form",role:"form",onSubmit:t[58]||(t[58]=oi(c=>e.download(c),["prevent"]))},[h("div",Wm,[h("div",Km,[h("div",Ym,[h("div",qm,[W(h("input",{id:"form_name",type:"text",name:"name",class:"form-control",placeholder:"First Name *",required:!0,"data-error":"Firstname is required.","onUpdate:modelValue":t[52]||(t[52]=c=>e.firstname=c)},null,512),[[oe,e.firstname]])])]),h("div",Gm,[h("div",Jm,[W(h("input",{id:"form_lastname",type:"text",name:"surname",class:"form-control",placeholder:"Last Name *",required:!0,"data-error":"Lastname is required.","onUpdate:modelValue":t[53]||(t[53]=c=>e.lastname=c)},null,512),[[oe,e.lastname]])])])]),h("div",Xm,[h("div",Zm,[h("div",ep,[W(h("input",{id:"form_email",type:"email",name:"email",class:"form-control",placeholder:"Email *",required:!0,"data-error":"Valid email is required.","onUpdate:modelValue":t[54]||(t[54]=c=>e.email=c)},null,512),[[oe,e.email]])])]),h("div",tp,[h("div",np,[W(h("input",{id:"form_phone",type:"tel",name:"phone",class:"form-control",placeholder:"Phone Number *",required:!0,"data-error":"Valid phone number is required.","onUpdate:modelValue":t[55]||(t[55]=c=>e.phone=c)},null,512),[[oe,e.phone]])])])]),h("div",ip,[e.step==14?(X(),ie("div",sp,[h("div",rp,[W(h("input",{id:"form_companyname",type:"text",name:"form_companyname",class:"form-control",placeholder:"Company Name *",required:!0,"data-error":"Company name is required.","onUpdate:modelValue":t[56]||(t[56]=c=>e.business_name=c)},null,512),[[oe,e.business_name]])])])):pe("",!0),e.step==13?(X(),ie("div",op,[h("div",lp,[W(h("input",{id:"form_businessname",type:"text",name:"form_businessname",class:"form-control",placeholder:"Business Name *",required:!0,"data-error":"Business name is required.","onUpdate:modelValue":t[57]||(t[57]=c=>e.business_name=c)},null,512),[[oe,e.business_name]])])])):pe("",!0),e.step==14?(X(),ie("div",ap,dp)):pe("",!0)]),h("div",up,[fp,h("div",hp,[e.is_downloading?(X(),ie("button",pp,_p)):(X(),ie("input",mp))])])])],32)])])])])])]))}var vp=mf(pf,[["render",bp]]);/*!
  * vue-router v4.0.16
  * (c) 2022 Eduardo San Martin Morote
  * @license MIT
  */const Fo=typeof Symbol=="function"&&typeof Symbol.toStringTag=="symbol",Wt=e=>Fo?Symbol(e):"_vr_"+e,wp=Wt("rvlm"),ar=Wt("rvd"),ds=Wt("r"),Ho=Wt("rl"),zi=Wt("rvl"),Pt=typeof window!="undefined";function xp(e){return e.__esModule||Fo&&e[Symbol.toStringTag]==="Module"}const Z=Object.assign;function hi(e,t){const n={};for(const i in t){const s=t[i];n[i]=Array.isArray(s)?s.map(e):e(s)}return n}const rn=()=>{},Ep=/\/$/,Rp=e=>e.replace(Ep,"");function mi(e,t,n="/"){let i,s={},r="",o="";const l=t.indexOf("?"),a=t.indexOf("#",l>-1?l:0);return l>-1&&(i=t.slice(0,l),r=t.slice(l+1,a>-1?a:t.length),s=e(r)),a>-1&&(i=i||t.slice(0,a),o=t.slice(a,t.length)),i=Op(i!=null?i:t,n),{fullPath:i+(r&&"?")+r+o,path:i,query:s,hash:o}}function Ip(e,t){const n=t.query?e(t.query):"";return t.path+(n&&"?")+n+(t.hash||"")}function cr(e,t){return!t||!e.toLowerCase().startsWith(t.toLowerCase())?e:e.slice(t.length)||"/"}function Cp(e,t,n){const i=t.matched.length-1,s=n.matched.length-1;return i>-1&&i===s&&Ft(t.matched[i],n.matched[s])&&jo(t.params,n.params)&&e(t.query)===e(n.query)&&t.hash===n.hash}function Ft(e,t){return(e.aliasOf||e)===(t.aliasOf||t)}function jo(e,t){if(Object.keys(e).length!==Object.keys(t).length)return!1;for(const n in e)if(!Ap(e[n],t[n]))return!1;return!0}function Ap(e,t){return Array.isArray(e)?dr(e,t):Array.isArray(t)?dr(t,e):e===t}function dr(e,t){return Array.isArray(t)?e.length===t.length&&e.every((n,i)=>n===t[i]):e.length===1&&e[0]===t}function Op(e,t){if(e.startsWith("/"))return e;if(!e)return t;const n=t.split("/"),i=e.split("/");let s=n.length-1,r,o;for(r=0;r<i.length;r++)if(o=i[r],!(s===1||o==="."))if(o==="..")s--;else break;return n.slice(0,s).join("/")+"/"+i.slice(r-(r===i.length?1:0)).join("/")}var yn;(function(e){e.pop="pop",e.push="push"})(yn||(yn={}));var on;(function(e){e.back="back",e.forward="forward",e.unknown=""})(on||(on={}));function Tp(e){if(!e)if(Pt){const t=document.querySelector("base");e=t&&t.getAttribute("href")||"/",e=e.replace(/^\w+:\/\/[^\/]+/,"")}else e="/";return e[0]!=="/"&&e[0]!=="#"&&(e="/"+e),Rp(e)}const kp=/^[^#]+#/;function Pp(e,t){return e.replace(kp,"#")+t}function Sp(e,t){const n=document.documentElement.getBoundingClientRect(),i=e.getBoundingClientRect();return{behavior:t.behavior,left:i.left-n.left-(t.left||0),top:i.top-n.top-(t.top||0)}}const ti=()=>({left:window.pageXOffset,top:window.pageYOffset});function Dp(e){let t;if("el"in e){const n=e.el,i=typeof n=="string"&&n.startsWith("#"),s=typeof n=="string"?i?document.getElementById(n.slice(1)):document.querySelector(n):n;if(!s)return;t=Sp(s,e)}else t=e;"scrollBehavior"in document.documentElement.style?window.scrollTo(t):window.scrollTo(t.left!=null?t.left:window.pageXOffset,t.top!=null?t.top:window.pageYOffset)}function ur(e,t){return(history.state?history.state.position-t:-1)+e}const Bi=new Map;function $p(e,t){Bi.set(e,t)}function Mp(e){const t=Bi.get(e);return Bi.delete(e),t}let Np=()=>location.protocol+"//"+location.host;function Qo(e,t){const{pathname:n,search:i,hash:s}=t,r=e.indexOf("#");if(r>-1){let l=s.includes(e.slice(r))?e.slice(r).length:1,a=s.slice(l);return a[0]!=="/"&&(a="/"+a),cr(a,"")}return cr(n,e)+i+s}function zp(e,t,n,i){let s=[],r=[],o=null;const l=({state:g})=>{const c=Qo(e,location),R=n.value,S=t.value;let A=0;if(g){if(n.value=c,t.value=g,o&&o===R){o=null;return}A=S?g.position-S.position:0}else i(c);s.forEach(T=>{T(n.value,R,{delta:A,type:yn.pop,direction:A?A>0?on.forward:on.back:on.unknown})})};function a(){o=n.value}function u(g){s.push(g);const c=()=>{const R=s.indexOf(g);R>-1&&s.splice(R,1)};return r.push(c),c}function f(){const{history:g}=window;!g.state||g.replaceState(Z({},g.state,{scroll:ti()}),"")}function p(){for(const g of r)g();r=[],window.removeEventListener("popstate",l),window.removeEventListener("beforeunload",f)}return window.addEventListener("popstate",l),window.addEventListener("beforeunload",f),{pauseListeners:a,listen:u,destroy:p}}function fr(e,t,n,i=!1,s=!1){return{back:e,current:t,forward:n,replaced:i,position:window.history.length,scroll:s?ti():null}}function Bp(e){const{history:t,location:n}=window,i={value:Qo(e,n)},s={value:t.state};s.value||r(i.value,{back:null,current:i.value,forward:null,position:t.length-1,replaced:!0,scroll:null},!0);function r(a,u,f){const p=e.indexOf("#"),g=p>-1?(n.host&&document.querySelector("base")?e:e.slice(p))+a:Np()+e+a;try{t[f?"replaceState":"pushState"](u,"",g),s.value=u}catch(c){console.error(c),n[f?"replace":"assign"](g)}}function o(a,u){const f=Z({},t.state,fr(s.value.back,a,s.value.forward,!0),u,{position:s.value.position});r(a,f,!0),i.value=a}function l(a,u){const f=Z({},s.value,t.state,{forward:a,scroll:ti()});r(f.current,f,!0);const p=Z({},fr(i.value,a,null),{position:f.position+1},u);r(a,p,!1),i.value=a}return{location:i,state:s,push:l,replace:o}}function Lp(e){e=Tp(e);const t=Bp(e),n=zp(e,t.state,t.location,t.replace);function i(r,o=!0){o||n.pauseListeners(),history.go(r)}const s=Z({location:"",base:e,go:i,createHref:Pp.bind(null,e)},t,n);return Object.defineProperty(s,"location",{enumerable:!0,get:()=>t.location.value}),Object.defineProperty(s,"state",{enumerable:!0,get:()=>t.state.value}),s}function Up(e){return typeof e=="string"||e&&typeof e=="object"}function Vo(e){return typeof e=="string"||typeof e=="symbol"}const Ze={path:"/",name:void 0,params:{},query:{},hash:"",fullPath:"/",matched:[],meta:{},redirectedFrom:void 0},Wo=Wt("nf");var hr;(function(e){e[e.aborted=4]="aborted",e[e.cancelled=8]="cancelled",e[e.duplicated=16]="duplicated"})(hr||(hr={}));function Ht(e,t){return Z(new Error,{type:e,[Wo]:!0},t)}function et(e,t){return e instanceof Error&&Wo in e&&(t==null||!!(e.type&t))}const mr="[^/]+?",Fp={sensitive:!1,strict:!1,start:!0,end:!0},Hp=/[.+*?^${}()[\]/\\]/g;function jp(e,t){const n=Z({},Fp,t),i=[];let s=n.start?"^":"";const r=[];for(const u of e){const f=u.length?[]:[90];n.strict&&!u.length&&(s+="/");for(let p=0;p<u.length;p++){const g=u[p];let c=40+(n.sensitive?.25:0);if(g.type===0)p||(s+="/"),s+=g.value.replace(Hp,"\\$&"),c+=40;else if(g.type===1){const{value:R,repeatable:S,optional:A,regexp:T}=g;r.push({name:R,repeatable:S,optional:A});const N=T||mr;if(N!==mr){c+=10;try{new RegExp(`(${N})`)}catch(L){throw new Error(`Invalid custom RegExp for param "${R}" (${N}): `+L.message)}}let U=S?`((?:${N})(?:/(?:${N}))*)`:`(${N})`;p||(U=A&&u.length<2?`(?:/${U})`:"/"+U),A&&(U+="?"),s+=U,c+=20,A&&(c+=-8),S&&(c+=-20),N===".*"&&(c+=-50)}f.push(c)}i.push(f)}if(n.strict&&n.end){const u=i.length-1;i[u][i[u].length-1]+=.7000000000000001}n.strict||(s+="/?"),n.end?s+="$":n.strict&&(s+="(?:/|$)");const o=new RegExp(s,n.sensitive?"":"i");function l(u){const f=u.match(o),p={};if(!f)return null;for(let g=1;g<f.length;g++){const c=f[g]||"",R=r[g-1];p[R.name]=c&&R.repeatable?c.split("/"):c}return p}function a(u){let f="",p=!1;for(const g of e){(!p||!f.endsWith("/"))&&(f+="/"),p=!1;for(const c of g)if(c.type===0)f+=c.value;else if(c.type===1){const{value:R,repeatable:S,optional:A}=c,T=R in u?u[R]:"";if(Array.isArray(T)&&!S)throw new Error(`Provided param "${R}" is an array but it is not repeatable (* or + modifiers)`);const N=Array.isArray(T)?T.join("/"):T;if(!N)if(A)g.length<2&&e.length>1&&(f.endsWith("/")?f=f.slice(0,-1):p=!0);else throw new Error(`Missing required param "${R}"`);f+=N}}return f}return{re:o,score:i,keys:r,parse:l,stringify:a}}function Qp(e,t){let n=0;for(;n<e.length&&n<t.length;){const i=t[n]-e[n];if(i)return i;n++}return e.length<t.length?e.length===1&&e[0]===40+40?-1:1:e.length>t.length?t.length===1&&t[0]===40+40?1:-1:0}function Vp(e,t){let n=0;const i=e.score,s=t.score;for(;n<i.length&&n<s.length;){const r=Qp(i[n],s[n]);if(r)return r;n++}if(Math.abs(s.length-i.length)===1){if(pr(i))return 1;if(pr(s))return-1}return s.length-i.length}function pr(e){const t=e[e.length-1];return e.length>0&&t[t.length-1]<0}const Wp={type:0,value:""},Kp=/[a-zA-Z0-9_]/;function Yp(e){if(!e)return[[]];if(e==="/")return[[Wp]];if(!e.startsWith("/"))throw new Error(`Invalid path "${e}"`);function t(c){throw new Error(`ERR (${n})/"${u}": ${c}`)}let n=0,i=n;const s=[];let r;function o(){r&&s.push(r),r=[]}let l=0,a,u="",f="";function p(){!u||(n===0?r.push({type:0,value:u}):n===1||n===2||n===3?(r.length>1&&(a==="*"||a==="+")&&t(`A repeatable param (${u}) must be alone in its segment. eg: '/:ids+.`),r.push({type:1,value:u,regexp:f,repeatable:a==="*"||a==="+",optional:a==="*"||a==="?"})):t("Invalid state to consume buffer"),u="")}function g(){u+=a}for(;l<e.length;){if(a=e[l++],a==="\\"&&n!==2){i=n,n=4;continue}switch(n){case 0:a==="/"?(u&&p(),o()):a===":"?(p(),n=1):g();break;case 4:g(),n=i;break;case 1:a==="("?n=2:Kp.test(a)?g():(p(),n=0,a!=="*"&&a!=="?"&&a!=="+"&&l--);break;case 2:a===")"?f[f.length-1]=="\\"?f=f.slice(0,-1)+a:n=3:f+=a;break;case 3:p(),n=0,a!=="*"&&a!=="?"&&a!=="+"&&l--,f="";break;default:t("Unknown state");break}}return n===2&&t(`Unfinished custom RegExp for param "${u}"`),p(),o(),s}function qp(e,t,n){const i=jp(Yp(e.path),n),s=Z(i,{record:e,parent:t,children:[],alias:[]});return t&&!s.record.aliasOf==!t.record.aliasOf&&t.children.push(s),s}function Gp(e,t){const n=[],i=new Map;t=yr({strict:!1,end:!0,sensitive:!1},t);function s(f){return i.get(f)}function r(f,p,g){const c=!g,R=Xp(f);R.aliasOf=g&&g.record;const S=yr(t,f),A=[R];if("alias"in f){const U=typeof f.alias=="string"?[f.alias]:f.alias;for(const L of U)A.push(Z({},R,{components:g?g.record.components:R.components,path:L,aliasOf:g?g.record:R}))}let T,N;for(const U of A){const{path:L}=U;if(p&&L[0]!=="/"){const ae=p.record.path,fe=ae[ae.length-1]==="/"?"":"/";U.path=p.record.path+(L&&fe+L)}if(T=qp(U,p,S),g?g.alias.push(T):(N=N||T,N!==T&&N.alias.push(T),c&&f.name&&!gr(T)&&o(f.name)),"children"in R){const ae=R.children;for(let fe=0;fe<ae.length;fe++)r(ae[fe],T,g&&g.children[fe])}g=g||T,a(T)}return N?()=>{o(N)}:rn}function o(f){if(Vo(f)){const p=i.get(f);p&&(i.delete(f),n.splice(n.indexOf(p),1),p.children.forEach(o),p.alias.forEach(o))}else{const p=n.indexOf(f);p>-1&&(n.splice(p,1),f.record.name&&i.delete(f.record.name),f.children.forEach(o),f.alias.forEach(o))}}function l(){return n}function a(f){let p=0;for(;p<n.length&&Vp(f,n[p])>=0&&(f.record.path!==n[p].record.path||!Ko(f,n[p]));)p++;n.splice(p,0,f),f.record.name&&!gr(f)&&i.set(f.record.name,f)}function u(f,p){let g,c={},R,S;if("name"in f&&f.name){if(g=i.get(f.name),!g)throw Ht(1,{location:f});S=g.record.name,c=Z(Jp(p.params,g.keys.filter(N=>!N.optional).map(N=>N.name)),f.params),R=g.stringify(c)}else if("path"in f)R=f.path,g=n.find(N=>N.re.test(R)),g&&(c=g.parse(R),S=g.record.name);else{if(g=p.name?i.get(p.name):n.find(N=>N.re.test(p.path)),!g)throw Ht(1,{location:f,currentLocation:p});S=g.record.name,c=Z({},p.params,f.params),R=g.stringify(c)}const A=[];let T=g;for(;T;)A.unshift(T.record),T=T.parent;return{name:S,path:R,params:c,matched:A,meta:eg(A)}}return e.forEach(f=>r(f)),{addRoute:r,resolve:u,removeRoute:o,getRoutes:l,getRecordMatcher:s}}function Jp(e,t){const n={};for(const i of t)i in e&&(n[i]=e[i]);return n}function Xp(e){return{path:e.path,redirect:e.redirect,name:e.name,meta:e.meta||{},aliasOf:void 0,beforeEnter:e.beforeEnter,props:Zp(e),children:e.children||[],instances:{},leaveGuards:new Set,updateGuards:new Set,enterCallbacks:{},components:"components"in e?e.components||{}:{default:e.component}}}function Zp(e){const t={},n=e.props||!1;if("component"in e)t.default=n;else for(const i in e.components)t[i]=typeof n=="boolean"?n:n[i];return t}function gr(e){for(;e;){if(e.record.aliasOf)return!0;e=e.parent}return!1}function eg(e){return e.reduce((t,n)=>Z(t,n.meta),{})}function yr(e,t){const n={};for(const i in e)n[i]=i in t?t[i]:e[i];return n}function Ko(e,t){return t.children.some(n=>n===e||Ko(e,n))}const Yo=/#/g,tg=/&/g,ng=/\//g,ig=/=/g,sg=/\?/g,qo=/\+/g,rg=/%5B/g,og=/%5D/g,Go=/%5E/g,lg=/%60/g,Jo=/%7B/g,ag=/%7C/g,Xo=/%7D/g,cg=/%20/g;function us(e){return encodeURI(""+e).replace(ag,"|").replace(rg,"[").replace(og,"]")}function dg(e){return us(e).replace(Jo,"{").replace(Xo,"}").replace(Go,"^")}function Li(e){return us(e).replace(qo,"%2B").replace(cg,"+").replace(Yo,"%23").replace(tg,"%26").replace(lg,"`").replace(Jo,"{").replace(Xo,"}").replace(Go,"^")}function ug(e){return Li(e).replace(ig,"%3D")}function fg(e){return us(e).replace(Yo,"%23").replace(sg,"%3F")}function hg(e){return e==null?"":fg(e).replace(ng,"%2F")}function Hn(e){try{return decodeURIComponent(""+e)}catch{}return""+e}function mg(e){const t={};if(e===""||e==="?")return t;const i=(e[0]==="?"?e.slice(1):e).split("&");for(let s=0;s<i.length;++s){const r=i[s].replace(qo," "),o=r.indexOf("="),l=Hn(o<0?r:r.slice(0,o)),a=o<0?null:Hn(r.slice(o+1));if(l in t){let u=t[l];Array.isArray(u)||(u=t[l]=[u]),u.push(a)}else t[l]=a}return t}function _r(e){let t="";for(let n in e){const i=e[n];if(n=ug(n),i==null){i!==void 0&&(t+=(t.length?"&":"")+n);continue}(Array.isArray(i)?i.map(r=>r&&Li(r)):[i&&Li(i)]).forEach(r=>{r!==void 0&&(t+=(t.length?"&":"")+n,r!=null&&(t+="="+r))})}return t}function pg(e){const t={};for(const n in e){const i=e[n];i!==void 0&&(t[n]=Array.isArray(i)?i.map(s=>s==null?null:""+s):i==null?i:""+i)}return t}function Gt(){let e=[];function t(i){return e.push(i),()=>{const s=e.indexOf(i);s>-1&&e.splice(s,1)}}function n(){e=[]}return{add:t,list:()=>e,reset:n}}function it(e,t,n,i,s){const r=i&&(i.enterCallbacks[s]=i.enterCallbacks[s]||[]);return()=>new Promise((o,l)=>{const a=p=>{p===!1?l(Ht(4,{from:n,to:t})):p instanceof Error?l(p):Up(p)?l(Ht(2,{from:t,to:p})):(r&&i.enterCallbacks[s]===r&&typeof p=="function"&&r.push(p),o())},u=e.call(i&&i.instances[s],t,n,a);let f=Promise.resolve(u);e.length<3&&(f=f.then(a)),f.catch(p=>l(p))})}function pi(e,t,n,i){const s=[];for(const r of e)for(const o in r.components){let l=r.components[o];if(!(t!=="beforeRouteEnter"&&!r.instances[o]))if(gg(l)){const u=(l.__vccOpts||l)[t];u&&s.push(it(u,n,i,r,o))}else{let a=l();s.push(()=>a.then(u=>{if(!u)return Promise.reject(new Error(`Couldn't resolve component "${o}" at "${r.path}"`));const f=xp(u)?u.default:u;r.components[o]=f;const g=(f.__vccOpts||f)[t];return g&&it(g,n,i,r,o)()}))}}return s}function gg(e){return typeof e=="object"||"displayName"in e||"props"in e||"__vccOpts"in e}function br(e){const t=at(ds),n=at(Ho),i=He(()=>t.resolve(Zt(e.to))),s=He(()=>{const{matched:a}=i.value,{length:u}=a,f=a[u-1],p=n.matched;if(!f||!p.length)return-1;const g=p.findIndex(Ft.bind(null,f));if(g>-1)return g;const c=vr(a[u-2]);return u>1&&vr(f)===c&&p[p.length-1].path!==c?p.findIndex(Ft.bind(null,a[u-2])):g}),r=He(()=>s.value>-1&&vg(n.params,i.value.params)),o=He(()=>s.value>-1&&s.value===n.matched.length-1&&jo(n.params,i.value.params));function l(a={}){return bg(a)?t[Zt(e.replace)?"replace":"push"](Zt(e.to)).catch(rn):Promise.resolve()}return{route:i,href:He(()=>i.value.href),isActive:r,isExactActive:o,navigate:l}}const yg=es({name:"RouterLink",compatConfig:{MODE:3},props:{to:{type:[String,Object],required:!0},replace:Boolean,activeClass:String,exactActiveClass:String,custom:Boolean,ariaCurrentValue:{type:String,default:"page"}},useLink:br,setup(e,{slots:t}){const n=bn(br(e)),{options:i}=at(ds),s=He(()=>({[wr(e.activeClass,i.linkActiveClass,"router-link-active")]:n.isActive,[wr(e.exactActiveClass,i.linkExactActiveClass,"router-link-exact-active")]:n.isExactActive}));return()=>{const r=t.default&&t.default(n);return e.custom?r:wo("a",{"aria-current":n.isExactActive?e.ariaCurrentValue:null,href:n.href,onClick:n.navigate,class:s.value},r)}}}),_g=yg;function bg(e){if(!(e.metaKey||e.altKey||e.ctrlKey||e.shiftKey)&&!e.defaultPrevented&&!(e.button!==void 0&&e.button!==0)){if(e.currentTarget&&e.currentTarget.getAttribute){const t=e.currentTarget.getAttribute("target");if(/\b_blank\b/i.test(t))return}return e.preventDefault&&e.preventDefault(),!0}}function vg(e,t){for(const n in t){const i=t[n],s=e[n];if(typeof i=="string"){if(i!==s)return!1}else if(!Array.isArray(s)||s.length!==i.length||i.some((r,o)=>r!==s[o]))return!1}return!0}function vr(e){return e?e.aliasOf?e.aliasOf.path:e.path:""}const wr=(e,t,n)=>e!=null?e:t!=null?t:n,wg=es({name:"RouterView",inheritAttrs:!1,props:{name:{type:String,default:"default"},route:Object},compatConfig:{MODE:3},setup(e,{attrs:t,slots:n}){const i=at(zi),s=He(()=>e.route||i.value),r=at(ar,0),o=He(()=>s.value.matched[r]);Tn(ar,r+1),Tn(wp,o),Tn(zi,s);const l=ql();return kn(()=>[l.value,o.value,e.name],([a,u,f],[p,g,c])=>{u&&(u.instances[f]=a,g&&g!==u&&a&&a===p&&(u.leaveGuards.size||(u.leaveGuards=g.leaveGuards),u.updateGuards.size||(u.updateGuards=g.updateGuards))),a&&u&&(!g||!Ft(u,g)||!p)&&(u.enterCallbacks[f]||[]).forEach(R=>R(a))},{flush:"post"}),()=>{const a=s.value,u=o.value,f=u&&u.components[e.name],p=e.name;if(!f)return xr(n.default,{Component:f,route:a});const g=u.props[e.name],c=g?g===!0?a.params:typeof g=="function"?g(a):g:null,S=wo(f,Z({},c,t,{onVnodeUnmounted:A=>{A.component.isUnmounted&&(u.instances[p]=null)},ref:l}));return xr(n.default,{Component:S,route:a})||S}}});function xr(e,t){if(!e)return null;const n=e(t);return n.length===1?n[0]:n}const xg=wg;function Eg(e){const t=Gp(e.routes,e),n=e.parseQuery||mg,i=e.stringifyQuery||_r,s=e.history,r=Gt(),o=Gt(),l=Gt(),a=Gl(Ze);let u=Ze;Pt&&e.scrollBehavior&&"scrollRestoration"in history&&(history.scrollRestoration="manual");const f=hi.bind(null,_=>""+_),p=hi.bind(null,hg),g=hi.bind(null,Hn);function c(_,P){let C,D;return Vo(_)?(C=t.getRecordMatcher(_),D=P):D=_,t.addRoute(D,C)}function R(_){const P=t.getRecordMatcher(_);P&&t.removeRoute(P)}function S(){return t.getRoutes().map(_=>_.record)}function A(_){return!!t.getRecordMatcher(_)}function T(_,P){if(P=Z({},P||a.value),typeof _=="string"){const F=mi(n,_,P.path),d=t.resolve({path:F.path},P),m=s.createHref(F.fullPath);return Z(F,d,{params:g(d.params),hash:Hn(F.hash),redirectedFrom:void 0,href:m})}let C;if("path"in _)C=Z({},_,{path:mi(n,_.path,P.path).path});else{const F=Z({},_.params);for(const d in F)F[d]==null&&delete F[d];C=Z({},_,{params:p(_.params)}),P.params=p(P.params)}const D=t.resolve(C,P),q=_.hash||"";D.params=f(g(D.params));const ne=Ip(i,Z({},_,{hash:dg(q),path:D.path})),j=s.createHref(ne);return Z({fullPath:ne,hash:q,query:i===_r?pg(_.query):_.query||{}},D,{redirectedFrom:void 0,href:j})}function N(_){return typeof _=="string"?mi(n,_,a.value.path):Z({},_)}function U(_,P){if(u!==_)return Ht(8,{from:P,to:_})}function L(_){return Ae(_)}function ae(_){return L(Z(N(_),{replace:!0}))}function fe(_){const P=_.matched[_.matched.length-1];if(P&&P.redirect){const{redirect:C}=P;let D=typeof C=="function"?C(_):C;return typeof D=="string"&&(D=D.includes("?")||D.includes("#")?D=N(D):{path:D},D.params={}),Z({query:_.query,hash:_.hash,params:_.params},D)}}function Ae(_,P){const C=u=T(_),D=a.value,q=_.state,ne=_.force,j=_.replace===!0,F=fe(C);if(F)return Ae(Z(N(F),{state:q,force:ne,replace:j}),P||C);const d=C;d.redirectedFrom=P;let m;return!ne&&Cp(i,D,C)&&(m=Ht(16,{to:d,from:D}),Ct(D,D,!0,!1)),(m?Promise.resolve(m):Ne(d,D)).catch(y=>et(y)?et(y,2)?y:we(y):te(y,d,D)).then(y=>{if(y){if(et(y,2))return Ae(Z(N(y.to),{state:q,force:ne,replace:j}),P||d)}else y=Ve(d,D,!0,j,q);return Je(d,D,y),y})}function Me(_,P){const C=U(_,P);return C?Promise.reject(C):Promise.resolve()}function Ne(_,P){let C;const[D,q,ne]=Rg(_,P);C=pi(D.reverse(),"beforeRouteLeave",_,P);for(const F of D)F.leaveGuards.forEach(d=>{C.push(it(d,_,P))});const j=Me.bind(null,_,P);return C.push(j),Ot(C).then(()=>{C=[];for(const F of r.list())C.push(it(F,_,P));return C.push(j),Ot(C)}).then(()=>{C=pi(q,"beforeRouteUpdate",_,P);for(const F of q)F.updateGuards.forEach(d=>{C.push(it(d,_,P))});return C.push(j),Ot(C)}).then(()=>{C=[];for(const F of _.matched)if(F.beforeEnter&&!P.matched.includes(F))if(Array.isArray(F.beforeEnter))for(const d of F.beforeEnter)C.push(it(d,_,P));else C.push(it(F.beforeEnter,_,P));return C.push(j),Ot(C)}).then(()=>(_.matched.forEach(F=>F.enterCallbacks={}),C=pi(ne,"beforeRouteEnter",_,P),C.push(j),Ot(C))).then(()=>{C=[];for(const F of o.list())C.push(it(F,_,P));return C.push(j),Ot(C)}).catch(F=>et(F,8)?F:Promise.reject(F))}function Je(_,P,C){for(const D of l.list())D(_,P,C)}function Ve(_,P,C,D,q){const ne=U(_,P);if(ne)return ne;const j=P===Ze,F=Pt?history.state:{};C&&(D||j?s.replace(_.fullPath,Z({scroll:j&&F&&F.scroll},q)):s.push(_.fullPath,q)),a.value=_,Ct(_,P,C,j),we()}let Oe;function Et(){Oe||(Oe=s.listen((_,P,C)=>{const D=T(_),q=fe(D);if(q){Ae(Z(q,{replace:!0}),D).catch(rn);return}u=D;const ne=a.value;Pt&&$p(ur(ne.fullPath,C.delta),ti()),Ne(D,ne).catch(j=>et(j,12)?j:et(j,2)?(Ae(j.to,D).then(F=>{et(F,20)&&!C.delta&&C.type===yn.pop&&s.go(-1,!1)}).catch(rn),Promise.reject()):(C.delta&&s.go(-C.delta,!1),te(j,D,ne))).then(j=>{j=j||Ve(D,ne,!1),j&&(C.delta?s.go(-C.delta,!1):C.type===yn.pop&&et(j,20)&&s.go(-1,!1)),Je(D,ne,j)}).catch(rn)}))}let Rt=Gt(),It=Gt(),ce;function te(_,P,C){we(_);const D=It.list();return D.length?D.forEach(q=>q(_,P,C)):console.error(_),Promise.reject(_)}function Y(){return ce&&a.value!==Ze?Promise.resolve():new Promise((_,P)=>{Rt.add([_,P])})}function we(_){return ce||(ce=!_,Et(),Rt.list().forEach(([P,C])=>_?C(_):P()),Rt.reset()),_}function Ct(_,P,C,D){const{scrollBehavior:q}=e;if(!Pt||!q)return Promise.resolve();const ne=!C&&Mp(ur(_.fullPath,0))||(D||!C)&&history.state&&history.state.scroll||null;return Kr().then(()=>q(_,P,ne)).then(j=>j&&Dp(j)).catch(j=>te(j,_,P))}const We=_=>s.go(_);let ze;const Ce=new Set;return{currentRoute:a,addRoute:c,removeRoute:R,hasRoute:A,getRoutes:S,resolve:T,options:e,push:L,replace:ae,go:We,back:()=>We(-1),forward:()=>We(1),beforeEach:r.add,beforeResolve:o.add,afterEach:l.add,onError:It.add,isReady:Y,install(_){const P=this;_.component("RouterLink",_g),_.component("RouterView",xg),_.config.globalProperties.$router=P,Object.defineProperty(_.config.globalProperties,"$route",{enumerable:!0,get:()=>Zt(a)}),Pt&&!ze&&a.value===Ze&&(ze=!0,L(s.location).catch(q=>{}));const C={};for(const q in Ze)C[q]=He(()=>a.value[q]);_.provide(ds,P),_.provide(Ho,bn(C)),_.provide(zi,a);const D=_.unmount;Ce.add(_),_.unmount=function(){Ce.delete(_),Ce.size<1&&(u=Ze,Oe&&Oe(),Oe=null,a.value=Ze,ze=!1,ce=!1),D()}}}}function Ot(e){return e.reduce((t,n)=>t.then(()=>n()),Promise.resolve())}function Rg(e,t){const n=[],i=[],s=[],r=Math.max(t.matched.length,e.matched.length);for(let o=0;o<r;o++){const l=t.matched[o];l&&(e.matched.find(u=>Ft(u,l))?i.push(l):n.push(l));const a=e.matched[o];a&&(t.matched.find(u=>Ft(u,a))||s.push(a))}return[n,i,s]}const Ig=Eg({history:Lp("/quizz-app/"),routes:[]}),Zo=Tc(vp);Zo.use(Ig);Zo.mount("#app");
