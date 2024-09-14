const __vite__mapDeps=(i,m=__vite__mapDeps,d=(m.f||(m.f=["./C1DAMmL-.js","./BoWmXLwL.js","./CAIxOLWK.js","./DlAUqK2U.js","./D_nrkLsb.js","./76fNMmEd.js","./BlF2LMBi.js","./Spinner.ZxSAjLa7.css","./dashboard.D3rqu6o3.css","./2ZjLWIty.js","./Cv4tkWmp.js","./DPjjJfQt.js","./error-404.DXySnQZL.css","./C-9SEywE.js","./error-500.CIkJDsQj.css"])))=>i.map(i=>d[i]);
/**
* @vue/shared v3.5.4
* (c) 2018-present Yuxi (Evan) You and Vue contributors
* @license MIT
**//*! #__NO_SIDE_EFFECTS__ */function hu(t){const e=Object.create(null);for(const n of t.split(","))e[n]=1;return n=>n in e}const De={},hs=[],an=()=>{},lE=()=>!1,Yi=t=>t.charCodeAt(0)===111&&t.charCodeAt(1)===110&&(t.charCodeAt(2)>122||t.charCodeAt(2)<97),fu=t=>t.startsWith("onUpdate:"),Xe=Object.assign,du=(t,e)=>{const n=t.indexOf(e);n>-1&&t.splice(n,1)},uE=Object.prototype.hasOwnProperty,Se=(t,e)=>uE.call(t,e),ie=Array.isArray,fs=t=>Fs(t)==="[object Map]",Ls=t=>Fs(t)==="[object Set]",Rf=t=>Fs(t)==="[object Date]",hE=t=>Fs(t)==="[object RegExp]",fe=t=>typeof t=="function",Le=t=>typeof t=="string",fn=t=>typeof t=="symbol",ke=t=>t!==null&&typeof t=="object",dg=t=>(ke(t)||fe(t))&&fe(t.then)&&fe(t.catch),pg=Object.prototype.toString,Fs=t=>pg.call(t),fE=t=>Fs(t).slice(8,-1),gg=t=>Fs(t)==="[object Object]",pu=t=>Le(t)&&t!=="NaN"&&t[0]!=="-"&&""+parseInt(t,10)===t,ds=hu(",key,ref,ref_for,ref_key,onVnodeBeforeMount,onVnodeMounted,onVnodeBeforeUpdate,onVnodeUpdated,onVnodeBeforeUnmount,onVnodeUnmounted"),Ba=t=>{const e=Object.create(null);return n=>e[n]||(e[n]=t(n))},dE=/-(\w)/g,Jt=Ba(t=>t.replace(dE,(e,n)=>n?n.toUpperCase():"")),pE=/\B([A-Z])/g,Hr=Ba(t=>t.replace(pE,"-$1").toLowerCase()),ja=Ba(t=>t.charAt(0).toUpperCase()+t.slice(1)),Vc=Ba(t=>t?`on${ja(t)}`:""),or=(t,e)=>!Object.is(t,e),ps=(t,...e)=>{for(let n=0;n<t.length;n++)t[n](...e)},mg=(t,e,n,r=!1)=>{Object.defineProperty(t,e,{configurable:!0,enumerable:!1,writable:r,value:n})},aa=t=>{const e=parseFloat(t);return isNaN(e)?t:e},_g=t=>{const e=Le(t)?Number(t):NaN;return isNaN(e)?t:e};let Sf;const yg=()=>Sf||(Sf=typeof globalThis<"u"?globalThis:typeof self<"u"?self:typeof window<"u"?window:typeof global<"u"?global:{});function $a(t){if(ie(t)){const e={};for(let n=0;n<t.length;n++){const r=t[n],s=Le(r)?yE(r):$a(r);if(s)for(const i in s)e[i]=s[i]}return e}else if(Le(t)||ke(t))return t}const gE=/;(?![^(]*\))/g,mE=/:([^]+)/,_E=/\/\*[^]*?\*\//g;function yE(t){const e={};return t.replace(_E,"").split(gE).forEach(n=>{if(n){const r=n.split(mE);r.length>1&&(e[r[0].trim()]=r[1].trim())}}),e}function Ha(t){let e="";if(Le(t))e=t;else if(ie(t))for(let n=0;n<t.length;n++){const r=Ha(t[n]);r&&(e+=r+" ")}else if(ke(t))for(const n in t)t[n]&&(e+=n+" ");return e.trim()}function vE(t){if(!t)return null;let{class:e,style:n}=t;return e&&!Le(e)&&(t.class=Ha(e)),n&&(t.style=$a(n)),t}const EE="itemscope,allowfullscreen,formnovalidate,ismap,nomodule,novalidate,readonly",TE=hu(EE);function vg(t){return!!t||t===""}function wE(t,e){if(t.length!==e.length)return!1;let n=!0;for(let r=0;n&&r<t.length;r++)n=Lr(t[r],e[r]);return n}function Lr(t,e){if(t===e)return!0;let n=Rf(t),r=Rf(e);if(n||r)return n&&r?t.getTime()===e.getTime():!1;if(n=fn(t),r=fn(e),n||r)return t===e;if(n=ie(t),r=ie(e),n||r)return n&&r?wE(t,e):!1;if(n=ke(t),r=ke(e),n||r){if(!n||!r)return!1;const s=Object.keys(t).length,i=Object.keys(e).length;if(s!==i)return!1;for(const o in t){const c=t.hasOwnProperty(o),l=e.hasOwnProperty(o);if(c&&!l||!c&&l||!Lr(t[o],e[o]))return!1}}return String(t)===String(e)}function gu(t,e){return t.findIndex(n=>Lr(n,e))}const Eg=t=>!!(t&&t.__v_isRef===!0),IE=t=>Le(t)?t:t==null?"":ie(t)||ke(t)&&(t.toString===pg||!fe(t.toString))?Eg(t)?IE(t.value):JSON.stringify(t,Tg,2):String(t),Tg=(t,e)=>Eg(e)?Tg(t,e.value):fs(e)?{[`Map(${e.size})`]:[...e.entries()].reduce((n,[r,s],i)=>(n[xc(r,i)+" =>"]=s,n),{})}:Ls(e)?{[`Set(${e.size})`]:[...e.values()].map(n=>xc(n))}:fn(e)?xc(e):ke(e)&&!ie(e)&&!gg(e)?String(e):e,xc=(t,e="")=>{var n;return fn(t)?`Symbol(${(n=t.description)!=null?n:e})`:t};/**
* @vue/reactivity v3.5.4
* (c) 2018-present Yuxi (Evan) You and Vue contributors
* @license MIT
**/let Ct;class wg{constructor(e=!1){this.detached=e,this._active=!0,this.effects=[],this.cleanups=[],this._isPaused=!1,this.parent=Ct,!e&&Ct&&(this.index=(Ct.scopes||(Ct.scopes=[])).push(this)-1)}get active(){return this._active}pause(){if(this._active){this._isPaused=!0;let e,n;if(this.scopes)for(e=0,n=this.scopes.length;e<n;e++)this.scopes[e].pause();for(e=0,n=this.effects.length;e<n;e++)this.effects[e].pause()}}resume(){if(this._active&&this._isPaused){this._isPaused=!1;let e,n;if(this.scopes)for(e=0,n=this.scopes.length;e<n;e++)this.scopes[e].resume();for(e=0,n=this.effects.length;e<n;e++)this.effects[e].resume()}}run(e){if(this._active){const n=Ct;try{return Ct=this,e()}finally{Ct=n}}}on(){Ct=this}off(){Ct=this.parent}stop(e){if(this._active){let n,r;for(n=0,r=this.effects.length;n<r;n++)this.effects[n].stop();for(n=0,r=this.cleanups.length;n<r;n++)this.cleanups[n]();if(this.scopes)for(n=0,r=this.scopes.length;n<r;n++)this.scopes[n].stop(!0);if(!this.detached&&this.parent&&!e){const s=this.parent.scopes.pop();s&&s!==this&&(this.parent.scopes[this.index]=s,s.index=this.index)}this.parent=void 0,this._active=!1}}}function bE(t){return new wg(t)}function Ig(){return Ct}let Ne;const Mc=new WeakSet;class bg{constructor(e){this.fn=e,this.deps=void 0,this.depsTail=void 0,this.flags=5,this.nextEffect=void 0,this.cleanup=void 0,this.scheduler=void 0,Ct&&Ct.active&&Ct.effects.push(this)}pause(){this.flags|=64}resume(){this.flags&64&&(this.flags&=-65,Mc.has(this)&&(Mc.delete(this),this.trigger()))}notify(){this.flags&2&&!(this.flags&32)||this.flags&8||(this.flags|=8,this.nextEffect=yi,yi=this)}run(){if(!(this.flags&1))return this.fn();this.flags|=2,Pf(this),Rg(this);const e=Ne,n=Gt;Ne=this,Gt=!0;try{return this.fn()}finally{Sg(this),Ne=e,Gt=n,this.flags&=-3}}stop(){if(this.flags&1){for(let e=this.deps;e;e=e.nextDep)yu(e);this.deps=this.depsTail=void 0,Pf(this),this.onStop&&this.onStop(),this.flags&=-2}}trigger(){this.flags&64?Mc.add(this):this.scheduler?this.scheduler():this.runIfDirty()}runIfDirty(){fl(this)&&this.run()}get dirty(){return fl(this)}}let Ag=0,yi;function mu(){Ag++}function _u(){if(--Ag>0)return;let t;for(;yi;){let e=yi;for(yi=void 0;e;){const n=e.nextEffect;if(e.nextEffect=void 0,e.flags&=-9,e.flags&1)try{e.trigger()}catch(r){t||(t=r)}e=n}}if(t)throw t}function Rg(t){for(let e=t.deps;e;e=e.nextDep)e.version=-1,e.prevActiveLink=e.dep.activeLink,e.dep.activeLink=e}function Sg(t){let e,n=t.depsTail;for(let r=n;r;r=r.prevDep)r.version===-1?(r===n&&(n=r.prevDep),yu(r),AE(r)):e=r,r.dep.activeLink=r.prevActiveLink,r.prevActiveLink=void 0;t.deps=e,t.depsTail=n}function fl(t){for(let e=t.deps;e;e=e.nextDep)if(e.dep.version!==e.version||e.dep.computed&&Pg(e.dep.computed)||e.dep.version!==e.version)return!0;return!!t._dirty}function Pg(t){if(t.flags&4&&!(t.flags&16)||(t.flags&=-17,t.globalVersion===Oi))return;t.globalVersion=Oi;const e=t.dep;if(t.flags|=2,e.version>0&&!t.isSSR&&!fl(t)){t.flags&=-3;return}const n=Ne,r=Gt;Ne=t,Gt=!0;try{Rg(t);const s=t.fn(t._value);(e.version===0||or(s,t._value))&&(t._value=s,e.version++)}catch(s){throw e.version++,s}finally{Ne=n,Gt=r,Sg(t),t.flags&=-3}}function yu(t){const{dep:e,prevSub:n,nextSub:r}=t;if(n&&(n.nextSub=r,t.prevSub=void 0),r&&(r.prevSub=n,t.nextSub=void 0),e.subs===t&&(e.subs=n),!e.subs&&e.computed){e.computed.flags&=-5;for(let s=e.computed.deps;s;s=s.nextDep)yu(s)}}function AE(t){const{prevDep:e,nextDep:n}=t;e&&(e.nextDep=n,t.prevDep=void 0),n&&(n.prevDep=e,t.nextDep=void 0)}let Gt=!0;const Cg=[];function fr(){Cg.push(Gt),Gt=!1}function dr(){const t=Cg.pop();Gt=t===void 0?!0:t}function Pf(t){const{cleanup:e}=t;if(t.cleanup=void 0,e){const n=Ne;Ne=void 0;try{e()}finally{Ne=n}}}let Oi=0;class vu{constructor(e){this.computed=e,this.version=0,this.activeLink=void 0,this.subs=void 0}track(e){if(!Ne||!Gt||Ne===this.computed)return;let n=this.activeLink;if(n===void 0||n.sub!==Ne)n=this.activeLink={dep:this,sub:Ne,version:this.version,nextDep:void 0,prevDep:void 0,nextSub:void 0,prevSub:void 0,prevActiveLink:void 0},Ne.deps?(n.prevDep=Ne.depsTail,Ne.depsTail.nextDep=n,Ne.depsTail=n):Ne.deps=Ne.depsTail=n,Ne.flags&4&&kg(n);else if(n.version===-1&&(n.version=this.version,n.nextDep)){const r=n.nextDep;r.prevDep=n.prevDep,n.prevDep&&(n.prevDep.nextDep=r),n.prevDep=Ne.depsTail,n.nextDep=void 0,Ne.depsTail.nextDep=n,Ne.depsTail=n,Ne.deps===n&&(Ne.deps=r)}return n}trigger(e){this.version++,Oi++,this.notify(e)}notify(e){mu();try{for(let n=this.subs;n;n=n.prevSub)n.sub.notify()}finally{_u()}}}function kg(t){const e=t.dep.computed;if(e&&!t.dep.subs){e.flags|=20;for(let r=e.deps;r;r=r.nextDep)kg(r)}const n=t.dep.subs;n!==t&&(t.prevSub=n,n&&(n.nextSub=t)),t.dep.subs=t}const ca=new WeakMap,kr=Symbol(""),dl=Symbol(""),Ni=Symbol("");function _t(t,e,n){if(Gt&&Ne){let r=ca.get(t);r||ca.set(t,r=new Map);let s=r.get(n);s||r.set(n,s=new vu),s.track()}}function Rn(t,e,n,r,s,i){const o=ca.get(t);if(!o){Oi++;return}const c=l=>{l&&l.trigger()};if(mu(),e==="clear")o.forEach(c);else{const l=ie(t),u=l&&pu(n);if(l&&n==="length"){const h=Number(r);o.forEach((d,g)=>{(g==="length"||g===Ni||!fn(g)&&g>=h)&&c(d)})}else switch(n!==void 0&&c(o.get(n)),u&&c(o.get(Ni)),e){case"add":l?u&&c(o.get("length")):(c(o.get(kr)),fs(t)&&c(o.get(dl)));break;case"delete":l||(c(o.get(kr)),fs(t)&&c(o.get(dl)));break;case"set":fs(t)&&c(o.get(kr));break}}_u()}function RE(t,e){var n;return(n=ca.get(t))==null?void 0:n.get(e)}function ts(t){const e=Ae(t);return e===t?e:(_t(e,"iterate",Ni),Lt(t)?e:e.map(gt))}function qa(t){return _t(t=Ae(t),"iterate",Ni),t}const SE={__proto__:null,[Symbol.iterator](){return Lc(this,Symbol.iterator,gt)},concat(...t){return ts(this).concat(...t.map(e=>ie(e)?ts(e):e))},entries(){return Lc(this,"entries",t=>(t[1]=gt(t[1]),t))},every(t,e){return _n(this,"every",t,e,void 0,arguments)},filter(t,e){return _n(this,"filter",t,e,n=>n.map(gt),arguments)},find(t,e){return _n(this,"find",t,e,gt,arguments)},findIndex(t,e){return _n(this,"findIndex",t,e,void 0,arguments)},findLast(t,e){return _n(this,"findLast",t,e,gt,arguments)},findLastIndex(t,e){return _n(this,"findLastIndex",t,e,void 0,arguments)},forEach(t,e){return _n(this,"forEach",t,e,void 0,arguments)},includes(...t){return Fc(this,"includes",t)},indexOf(...t){return Fc(this,"indexOf",t)},join(t){return ts(this).join(t)},lastIndexOf(...t){return Fc(this,"lastIndexOf",t)},map(t,e){return _n(this,"map",t,e,void 0,arguments)},pop(){return ai(this,"pop")},push(...t){return ai(this,"push",t)},reduce(t,...e){return Cf(this,"reduce",t,e)},reduceRight(t,...e){return Cf(this,"reduceRight",t,e)},shift(){return ai(this,"shift")},some(t,e){return _n(this,"some",t,e,void 0,arguments)},splice(...t){return ai(this,"splice",t)},toReversed(){return ts(this).toReversed()},toSorted(t){return ts(this).toSorted(t)},toSpliced(...t){return ts(this).toSpliced(...t)},unshift(...t){return ai(this,"unshift",t)},values(){return Lc(this,"values",gt)}};function Lc(t,e,n){const r=qa(t),s=r[e]();return r!==t&&!Lt(t)&&(s._next=s.next,s.next=()=>{const i=s._next();return i.value&&(i.value=n(i.value)),i}),s}const PE=Array.prototype;function _n(t,e,n,r,s,i){const o=qa(t),c=o!==t&&!Lt(t),l=o[e];if(l!==PE[e]){const d=l.apply(t,i);return c?gt(d):d}let u=n;o!==t&&(c?u=function(d,g){return n.call(this,gt(d),g,t)}:n.length>2&&(u=function(d,g){return n.call(this,d,g,t)}));const h=l.call(o,u,r);return c&&s?s(h):h}function Cf(t,e,n,r){const s=qa(t);let i=n;return s!==t&&(Lt(t)?n.length>3&&(i=function(o,c,l){return n.call(this,o,c,l,t)}):i=function(o,c,l){return n.call(this,o,gt(c),l,t)}),s[e](i,...r)}function Fc(t,e,n){const r=Ae(t);_t(r,"iterate",Ni);const s=r[e](...n);return(s===-1||s===!1)&&Iu(n[0])?(n[0]=Ae(n[0]),r[e](...n)):s}function ai(t,e,n=[]){fr(),mu();const r=Ae(t)[e].apply(t,n);return _u(),dr(),r}const CE=hu("__proto__,__v_isRef,__isVue"),Og=new Set(Object.getOwnPropertyNames(Symbol).filter(t=>t!=="arguments"&&t!=="caller").map(t=>Symbol[t]).filter(fn));function kE(t){fn(t)||(t=String(t));const e=Ae(this);return _t(e,"has",t),e.hasOwnProperty(t)}class Ng{constructor(e=!1,n=!1){this._isReadonly=e,this._isShallow=n}get(e,n,r){const s=this._isReadonly,i=this._isShallow;if(n==="__v_isReactive")return!s;if(n==="__v_isReadonly")return s;if(n==="__v_isShallow")return i;if(n==="__v_raw")return r===(s?i?HE:Mg:i?xg:Vg).get(e)||Object.getPrototypeOf(e)===Object.getPrototypeOf(r)?e:void 0;const o=ie(e);if(!s){let l;if(o&&(l=SE[n]))return l;if(n==="hasOwnProperty")return kE}const c=Reflect.get(e,n,tt(e)?e:r);return(fn(n)?Og.has(n):CE(n))||(s||_t(e,"get",n),i)?c:tt(c)?o&&pu(n)?c:c.value:ke(c)?s?Lg(c):pr(c):c}}class Dg extends Ng{constructor(e=!1){super(!1,e)}set(e,n,r,s){let i=e[n];if(!this._isShallow){const l=ar(i);if(!Lt(r)&&!ar(r)&&(i=Ae(i),r=Ae(r)),!ie(e)&&tt(i)&&!tt(r))return l?!1:(i.value=r,!0)}const o=ie(e)&&pu(n)?Number(n)<e.length:Se(e,n),c=Reflect.set(e,n,r,tt(e)?e:s);return e===Ae(s)&&(o?or(r,i)&&Rn(e,"set",n,r):Rn(e,"add",n,r)),c}deleteProperty(e,n){const r=Se(e,n);e[n];const s=Reflect.deleteProperty(e,n);return s&&r&&Rn(e,"delete",n,void 0),s}has(e,n){const r=Reflect.has(e,n);return(!fn(n)||!Og.has(n))&&_t(e,"has",n),r}ownKeys(e){return _t(e,"iterate",ie(e)?"length":kr),Reflect.ownKeys(e)}}class OE extends Ng{constructor(e=!1){super(!0,e)}set(e,n){return!0}deleteProperty(e,n){return!0}}const NE=new Dg,DE=new OE,VE=new Dg(!0);const Eu=t=>t,Wa=t=>Reflect.getPrototypeOf(t);function Co(t,e,n=!1,r=!1){t=t.__v_raw;const s=Ae(t),i=Ae(e);n||(or(e,i)&&_t(s,"get",e),_t(s,"get",i));const{has:o}=Wa(s),c=r?Eu:n?bu:gt;if(o.call(s,e))return c(t.get(e));if(o.call(s,i))return c(t.get(i));t!==s&&t.get(e)}function ko(t,e=!1){const n=this.__v_raw,r=Ae(n),s=Ae(t);return e||(or(t,s)&&_t(r,"has",t),_t(r,"has",s)),t===s?n.has(t):n.has(t)||n.has(s)}function Oo(t,e=!1){return t=t.__v_raw,!e&&_t(Ae(t),"iterate",kr),Reflect.get(t,"size",t)}function kf(t,e=!1){!e&&!Lt(t)&&!ar(t)&&(t=Ae(t));const n=Ae(this);return Wa(n).has.call(n,t)||(n.add(t),Rn(n,"add",t,t)),this}function Of(t,e,n=!1){!n&&!Lt(e)&&!ar(e)&&(e=Ae(e));const r=Ae(this),{has:s,get:i}=Wa(r);let o=s.call(r,t);o||(t=Ae(t),o=s.call(r,t));const c=i.call(r,t);return r.set(t,e),o?or(e,c)&&Rn(r,"set",t,e):Rn(r,"add",t,e),this}function Nf(t){const e=Ae(this),{has:n,get:r}=Wa(e);let s=n.call(e,t);s||(t=Ae(t),s=n.call(e,t)),r&&r.call(e,t);const i=e.delete(t);return s&&Rn(e,"delete",t,void 0),i}function Df(){const t=Ae(this),e=t.size!==0,n=t.clear();return e&&Rn(t,"clear",void 0,void 0),n}function No(t,e){return function(r,s){const i=this,o=i.__v_raw,c=Ae(o),l=e?Eu:t?bu:gt;return!t&&_t(c,"iterate",kr),o.forEach((u,h)=>r.call(s,l(u),l(h),i))}}function Do(t,e,n){return function(...r){const s=this.__v_raw,i=Ae(s),o=fs(i),c=t==="entries"||t===Symbol.iterator&&o,l=t==="keys"&&o,u=s[t](...r),h=n?Eu:e?bu:gt;return!e&&_t(i,"iterate",l?dl:kr),{next(){const{value:d,done:g}=u.next();return g?{value:d,done:g}:{value:c?[h(d[0]),h(d[1])]:h(d),done:g}},[Symbol.iterator](){return this}}}}function jn(t){return function(...e){return t==="delete"?!1:t==="clear"?void 0:this}}function xE(){const t={get(i){return Co(this,i)},get size(){return Oo(this)},has:ko,add:kf,set:Of,delete:Nf,clear:Df,forEach:No(!1,!1)},e={get(i){return Co(this,i,!1,!0)},get size(){return Oo(this)},has:ko,add(i){return kf.call(this,i,!0)},set(i,o){return Of.call(this,i,o,!0)},delete:Nf,clear:Df,forEach:No(!1,!0)},n={get(i){return Co(this,i,!0)},get size(){return Oo(this,!0)},has(i){return ko.call(this,i,!0)},add:jn("add"),set:jn("set"),delete:jn("delete"),clear:jn("clear"),forEach:No(!0,!1)},r={get(i){return Co(this,i,!0,!0)},get size(){return Oo(this,!0)},has(i){return ko.call(this,i,!0)},add:jn("add"),set:jn("set"),delete:jn("delete"),clear:jn("clear"),forEach:No(!0,!0)};return["keys","values","entries",Symbol.iterator].forEach(i=>{t[i]=Do(i,!1,!1),n[i]=Do(i,!0,!1),e[i]=Do(i,!1,!0),r[i]=Do(i,!0,!0)}),[t,n,e,r]}const[ME,LE,FE,UE]=xE();function Tu(t,e){const n=e?t?UE:FE:t?LE:ME;return(r,s,i)=>s==="__v_isReactive"?!t:s==="__v_isReadonly"?t:s==="__v_raw"?r:Reflect.get(Se(n,s)&&s in r?n:r,s,i)}const BE={get:Tu(!1,!1)},jE={get:Tu(!1,!0)},$E={get:Tu(!0,!1)};const Vg=new WeakMap,xg=new WeakMap,Mg=new WeakMap,HE=new WeakMap;function qE(t){switch(t){case"Object":case"Array":return 1;case"Map":case"Set":case"WeakMap":case"WeakSet":return 2;default:return 0}}function WE(t){return t.__v_skip||!Object.isExtensible(t)?0:qE(fE(t))}function pr(t){return ar(t)?t:wu(t,!1,NE,BE,Vg)}function wn(t){return wu(t,!1,VE,jE,xg)}function Lg(t){return wu(t,!0,DE,$E,Mg)}function wu(t,e,n,r,s){if(!ke(t)||t.__v_raw&&!(e&&t.__v_isReactive))return t;const i=s.get(t);if(i)return i;const o=WE(t);if(o===0)return t;const c=new Proxy(t,o===2?r:n);return s.set(t,c),c}function Or(t){return ar(t)?Or(t.__v_raw):!!(t&&t.__v_isReactive)}function ar(t){return!!(t&&t.__v_isReadonly)}function Lt(t){return!!(t&&t.__v_isShallow)}function Iu(t){return t?!!t.__v_raw:!1}function Ae(t){const e=t&&t.__v_raw;return e?Ae(e):t}function KE(t){return!Se(t,"__v_skip")&&Object.isExtensible(t)&&mg(t,"__v_skip",!0),t}const gt=t=>ke(t)?pr(t):t,bu=t=>ke(t)?Lg(t):t;function tt(t){return t?t.__v_isRef===!0:!1}function cn(t){return Fg(t,!1)}function Di(t){return Fg(t,!0)}function Fg(t,e){return tt(t)?t:new zE(t,e)}class zE{constructor(e,n){this.dep=new vu,this.__v_isRef=!0,this.__v_isShallow=!1,this._rawValue=n?e:Ae(e),this._value=n?e:gt(e),this.__v_isShallow=n}get value(){return this.dep.track(),this._value}set value(e){const n=this._rawValue,r=this.__v_isShallow||Lt(e)||ar(e);e=r?e:Ae(e),or(e,n)&&(this._rawValue=e,this._value=r?e:gt(e),this.dep.trigger())}}function Me(t){return tt(t)?t.value:t}const GE={get:(t,e,n)=>e==="__v_raw"?t:Me(Reflect.get(t,e,n)),set:(t,e,n,r)=>{const s=t[e];return tt(s)&&!tt(n)?(s.value=n,!0):Reflect.set(t,e,n,r)}};function Ug(t){return Or(t)?t:new Proxy(t,GE)}class QE{constructor(e,n,r){this._object=e,this._key=n,this._defaultValue=r,this.__v_isRef=!0,this._value=void 0}get value(){const e=this._object[this._key];return this._value=e===void 0?this._defaultValue:e}set value(e){this._object[this._key]=e}get dep(){return RE(Ae(this._object),this._key)}}class JE{constructor(e){this._getter=e,this.__v_isRef=!0,this.__v_isReadonly=!0,this._value=void 0}get value(){return this._value=this._getter()}}function XE(t,e,n){return tt(t)?t:fe(t)?new JE(t):ke(t)&&arguments.length>1?YE(t,e,n):cn(t)}function YE(t,e,n){const r=t[e];return tt(r)?r:new QE(t,e,n)}class ZE{constructor(e,n,r){this.fn=e,this.setter=n,this._value=void 0,this.dep=new vu(this),this.__v_isRef=!0,this.deps=void 0,this.depsTail=void 0,this.flags=16,this.globalVersion=Oi-1,this.effect=this,this.__v_isReadonly=!n,this.isSSR=r}notify(){this.flags|=16,Ne!==this&&this.dep.notify()}get value(){const e=this.dep.track();return Pg(this),e&&(e.version=this.dep.version),this._value}set value(e){this.setter&&this.setter(e)}}function eT(t,e,n=!1){let r,s;return fe(t)?r=t:(r=t.get,s=t.set),new ZE(r,s,n)}const Vo={},la=new WeakMap;let br;function tT(t,e=!1,n=br){if(n){let r=la.get(n);r||la.set(n,r=[]),r.push(t)}}function nT(t,e,n=De){const{immediate:r,deep:s,once:i,scheduler:o,augmentJob:c,call:l}=n,u=C=>s?C:Lt(C)||s===!1||s===0?En(C,1):En(C);let h,d,g,m,P=!1,k=!1;if(tt(t)?(d=()=>t.value,P=Lt(t)):Or(t)?(d=()=>u(t),P=!0):ie(t)?(k=!0,P=t.some(C=>Or(C)||Lt(C)),d=()=>t.map(C=>{if(tt(C))return C.value;if(Or(C))return u(C);if(fe(C))return l?l(C,2):C()})):fe(t)?e?d=l?()=>l(t,2):t:d=()=>{if(g){fr();try{g()}finally{dr()}}const C=br;br=h;try{return l?l(t,3,[m]):t(m)}finally{br=C}}:d=an,e&&s){const C=d,x=s===!0?1/0:s;d=()=>En(C(),x)}const O=Ig(),V=()=>{h.stop(),O&&du(O.effects,h)};if(i)if(e){const C=e;e=(...x)=>{C(...x),V()}}else{const C=d;d=()=>{C(),V()}}let N=k?new Array(t.length).fill(Vo):Vo;const b=C=>{if(!(!(h.flags&1)||!h.dirty&&!C))if(e){const x=h.run();if(s||P||(k?x.some((F,I)=>or(F,N[I])):or(x,N))){g&&g();const F=br;br=h;try{const I=[x,N===Vo?void 0:k&&N[0]===Vo?[]:N,m];l?l(e,3,I):e(...I),N=x}finally{br=F}}}else h.run()};return c&&c(b),h=new bg(d),h.scheduler=o?()=>o(b,!1):b,m=C=>tT(C,!1,h),g=h.onStop=()=>{const C=la.get(h);if(C){if(l)l(C,4);else for(const x of C)x();la.delete(h)}},e?r?b(!0):N=h.run():o?o(b.bind(null,!0),!0):h.run(),V.pause=h.pause.bind(h),V.resume=h.resume.bind(h),V.stop=V,V}function En(t,e=1/0,n){if(e<=0||!ke(t)||t.__v_skip||(n=n||new Set,n.has(t)))return t;if(n.add(t),e--,tt(t))En(t.value,e,n);else if(ie(t))for(let r=0;r<t.length;r++)En(t[r],e,n);else if(Ls(t)||fs(t))t.forEach(r=>{En(r,e,n)});else if(gg(t)){for(const r in t)En(t[r],e,n);for(const r of Object.getOwnPropertySymbols(t))Object.prototype.propertyIsEnumerable.call(t,r)&&En(t[r],e,n)}return t}/**
* @vue/runtime-core v3.5.4
* (c) 2018-present Yuxi (Evan) You and Vue contributors
* @license MIT
**/function Zi(t,e,n,r){try{return r?t(...r):t()}catch(s){Us(s,e,n)}}function Xt(t,e,n,r){if(fe(t)){const s=Zi(t,e,n,r);return s&&dg(s)&&s.catch(i=>{Us(i,e,n)}),s}if(ie(t)){const s=[];for(let i=0;i<t.length;i++)s.push(Xt(t[i],e,n,r));return s}}function Us(t,e,n,r=!0){const s=e?e.vnode:null,{errorHandler:i,throwUnhandledErrorInProduction:o}=e&&e.appContext.config||De;if(e){let c=e.parent;const l=e.proxy,u=`https://vuejs.org/error-reference/#runtime-${n}`;for(;c;){const h=c.ec;if(h){for(let d=0;d<h.length;d++)if(h[d](t,l,u)===!1)return}c=c.parent}if(i){fr(),Zi(i,null,10,[t,l,u]),dr();return}}rT(t,n,s,r,o)}function rT(t,e,n,r=!0,s=!1){if(s)throw t;console.error(t)}let Vi=!1,pl=!1;const wt=[];let tn=0;const gs=[];let Wn=null,rs=0;const Bg=Promise.resolve();let Au=null;function Bs(t){const e=Au||Bg;return t?e.then(this?t.bind(this):t):e}function sT(t){let e=Vi?tn+1:0,n=wt.length;for(;e<n;){const r=e+n>>>1,s=wt[r],i=xi(s);i<t||i===t&&s.flags&2?e=r+1:n=r}return e}function Ka(t){if(!(t.flags&1)){const e=xi(t),n=wt[wt.length-1];!n||!(t.flags&2)&&e>=xi(n)?wt.push(t):wt.splice(sT(e),0,t),t.flags|=1,jg()}}function jg(){!Vi&&!pl&&(pl=!0,Au=Bg.then($g))}function gl(t){ie(t)?gs.push(...t):Wn&&t.id===-1?Wn.splice(rs+1,0,t):t.flags&1||(gs.push(t),t.flags|=1),jg()}function Vf(t,e,n=Vi?tn+1:0){for(;n<wt.length;n++){const r=wt[n];if(r&&r.flags&2){if(t&&r.id!==t.uid)continue;wt.splice(n,1),n--,r.flags&4&&(r.flags&=-2),r(),r.flags&=-2}}}function ua(t){if(gs.length){const e=[...new Set(gs)].sort((n,r)=>xi(n)-xi(r));if(gs.length=0,Wn){Wn.push(...e);return}for(Wn=e,rs=0;rs<Wn.length;rs++){const n=Wn[rs];n.flags&4&&(n.flags&=-2),n.flags&8||n(),n.flags&=-2}Wn=null,rs=0}}const xi=t=>t.id==null?t.flags&2?-1:1/0:t.id;function $g(t){pl=!1,Vi=!0;try{for(tn=0;tn<wt.length;tn++){const e=wt[tn];e&&!(e.flags&8)&&(e.flags&4&&(e.flags&=-2),Zi(e,e.i,e.i?15:14),e.flags&=-2)}}finally{for(;tn<wt.length;tn++){const e=wt[tn];e&&(e.flags&=-2)}tn=0,wt.length=0,ua(),Vi=!1,Au=null,(wt.length||gs.length)&&$g()}}let It=null,Hg=null;function ha(t){const e=It;return It=t,Hg=t&&t.type.__scopeId||null,e}function qg(t,e=It,n){if(!e||t._n)return t;const r=(...s)=>{r._d&&zf(-1);const i=ha(e);let o;try{o=t(...s)}finally{ha(i),r._d&&zf(1)}return o};return r._n=!0,r._c=!0,r._d=!0,r}function eN(t,e){if(It===null)return t;const n=Xa(It),r=t.dirs||(t.dirs=[]);for(let s=0;s<e.length;s++){let[i,o,c,l=De]=e[s];i&&(fe(i)&&(i={mounted:i,updated:i}),i.deep&&En(o),r.push({dir:i,instance:n,value:o,oldValue:void 0,arg:c,modifiers:l}))}return t}function nn(t,e,n,r){const s=t.dirs,i=e&&e.dirs;for(let o=0;o<s.length;o++){const c=s[o];i&&(c.oldValue=i[o].value);let l=c.dir[r];l&&(fr(),Xt(l,n,8,[t.el,c,t,e]),dr())}}const iT=Symbol("_vte"),Wg=t=>t.__isTeleport,Kn=Symbol("_leaveCb"),xo=Symbol("_enterCb");function oT(){const t={isMounted:!1,isLeaving:!1,isUnmounting:!1,leavingVNodes:new Map};return Su(()=>{t.isMounted=!0}),Ga(()=>{t.isUnmounting=!0}),t}const Vt=[Function,Array],Kg={mode:String,appear:Boolean,persisted:Boolean,onBeforeEnter:Vt,onEnter:Vt,onAfterEnter:Vt,onEnterCancelled:Vt,onBeforeLeave:Vt,onLeave:Vt,onAfterLeave:Vt,onLeaveCancelled:Vt,onBeforeAppear:Vt,onAppear:Vt,onAfterAppear:Vt,onAppearCancelled:Vt},zg=t=>{const e=t.subTree;return e.component?zg(e.component):e},aT={name:"BaseTransition",props:Kg,setup(t,{slots:e}){const n=Ja(),r=oT();return()=>{const s=e.default&&Jg(e.default(),!0);if(!s||!s.length)return;const i=Gg(s),o=Ae(t),{mode:c}=o;if(r.isLeaving)return Uc(i);const l=xf(i);if(!l)return Uc(i);let u=ml(l,o,r,n,g=>u=g);l.type!==et&&Is(l,u);const h=n.subTree,d=h&&xf(h);if(d&&d.type!==et&&!Wt(l,d)&&zg(n).type!==et){const g=ml(d,o,r,n);if(Is(d,g),c==="out-in"&&l.type!==et)return r.isLeaving=!0,g.afterLeave=()=>{r.isLeaving=!1,n.job.flags&8||n.update(),delete g.afterLeave},Uc(i);c==="in-out"&&l.type!==et&&(g.delayLeave=(m,P,k)=>{const O=Qg(r,d);O[String(d.key)]=d,m[Kn]=()=>{P(),m[Kn]=void 0,delete u.delayedLeave},u.delayedLeave=k})}return i}}};function Gg(t){let e=t[0];if(t.length>1){for(const n of t)if(n.type!==et){e=n;break}}return e}const cT=aT;function Qg(t,e){const{leavingVNodes:n}=t;let r=n.get(e.type);return r||(r=Object.create(null),n.set(e.type,r)),r}function ml(t,e,n,r,s){const{appear:i,mode:o,persisted:c=!1,onBeforeEnter:l,onEnter:u,onAfterEnter:h,onEnterCancelled:d,onBeforeLeave:g,onLeave:m,onAfterLeave:P,onLeaveCancelled:k,onBeforeAppear:O,onAppear:V,onAfterAppear:N,onAppearCancelled:b}=e,C=String(t.key),x=Qg(n,t),F=(y,E)=>{y&&Xt(y,r,9,E)},I=(y,E)=>{const S=E[1];F(y,E),ie(y)?y.every(A=>A.length<=1)&&S():y.length<=1&&S()},v={mode:o,persisted:c,beforeEnter(y){let E=l;if(!n.isMounted)if(i)E=O||l;else return;y[Kn]&&y[Kn](!0);const S=x[C];S&&Wt(t,S)&&S.el[Kn]&&S.el[Kn](),F(E,[y])},enter(y){let E=u,S=h,A=d;if(!n.isMounted)if(i)E=V||u,S=N||h,A=b||d;else return;let T=!1;const pe=y[xo]=Ee=>{T||(T=!0,Ee?F(A,[y]):F(S,[y]),v.delayedLeave&&v.delayedLeave(),y[xo]=void 0)};E?I(E,[y,pe]):pe()},leave(y,E){const S=String(t.key);if(y[xo]&&y[xo](!0),n.isUnmounting)return E();F(g,[y]);let A=!1;const T=y[Kn]=pe=>{A||(A=!0,E(),pe?F(k,[y]):F(P,[y]),y[Kn]=void 0,x[S]===t&&delete x[S])};x[S]=t,m?I(m,[y,T]):T()},clone(y){const E=ml(y,e,n,r,s);return s&&s(E),E}};return v}function Uc(t){if(eo(t))return t=Pn(t),t.children=null,t}function xf(t){if(!eo(t))return Wg(t.type)&&t.children?Gg(t.children):t;const{shapeFlag:e,children:n}=t;if(n){if(e&16)return n[0];if(e&32&&fe(n.default))return n.default()}}function Is(t,e){t.shapeFlag&6&&t.component?(t.transition=e,Is(t.component.subTree,e)):t.shapeFlag&128?(t.ssContent.transition=e.clone(t.ssContent),t.ssFallback.transition=e.clone(t.ssFallback)):t.transition=e}function Jg(t,e=!1,n){let r=[],s=0;for(let i=0;i<t.length;i++){let o=t[i];const c=n==null?o.key:String(n)+String(o.key!=null?o.key:i);o.type===kt?(o.patchFlag&128&&s++,r=r.concat(Jg(o.children,e,c))):(e||o.type!==et)&&r.push(c!=null?Pn(o,{key:c}):o)}if(s>1)for(let i=0;i<r.length;i++)r[i].patchFlag=-2;return r}/*! #__NO_SIDE_EFFECTS__ */function js(t,e){return fe(t)?Xe({name:t.name},e,{setup:t}):t}function Ru(t){t.ids=[t.ids[0]+t.ids[2]+++"-",0,0]}function fa(t,e,n,r,s=!1){if(ie(t)){t.forEach((P,k)=>fa(P,e&&(ie(e)?e[k]:e),n,r,s));return}if(Nr(r)&&!s)return;const i=r.shapeFlag&4?Xa(r.component):r.el,o=s?null:i,{i:c,r:l}=t,u=e&&e.r,h=c.refs===De?c.refs={}:c.refs,d=c.setupState,g=Ae(d),m=d===De?()=>!1:P=>Se(g,P);if(u!=null&&u!==l&&(Le(u)?(h[u]=null,m(u)&&(d[u]=null)):tt(u)&&(u.value=null)),fe(l))Zi(l,c,12,[o,h]);else{const P=Le(l),k=tt(l);if(P||k){const O=()=>{if(t.f){const V=P?m(l)?d[l]:h[l]:l.value;s?ie(V)&&du(V,i):ie(V)?V.includes(i)||V.push(i):P?(h[l]=[i],m(l)&&(d[l]=h[l])):(l.value=[i],t.k&&(h[t.k]=l.value))}else P?(h[l]=o,m(l)&&(d[l]=o)):k&&(l.value=o,t.k&&(h[t.k]=o))};o?(O.id=-1,st(O,n)):O()}}}let Mf=!1;const ns=()=>{Mf||(console.error("Hydration completed but contains mismatches."),Mf=!0)},lT=t=>t.namespaceURI.includes("svg")&&t.tagName!=="foreignObject",uT=t=>t.namespaceURI.includes("MathML"),Mo=t=>{if(t.nodeType===1){if(lT(t))return"svg";if(uT(t))return"mathml"}},cs=t=>t.nodeType===8;function hT(t){const{mt:e,p:n,o:{patchProp:r,createText:s,nextSibling:i,parentNode:o,remove:c,insert:l,createComment:u}}=t,h=(b,C)=>{if(!C.hasChildNodes()){n(null,b,C),ua(),C._vnode=b;return}d(C.firstChild,b,null,null,null),ua(),C._vnode=b},d=(b,C,x,F,I,v=!1)=>{v=v||!!C.dynamicChildren;const y=cs(b)&&b.data==="[",E=()=>k(b,C,x,F,I,y),{type:S,ref:A,shapeFlag:T,patchFlag:pe}=C;let Ee=b.nodeType;C.el=b,pe===-2&&(v=!1,C.dynamicChildren=null);let Z=null;switch(S){case xr:Ee!==3?C.children===""?(l(C.el=s(""),o(b),b),Z=b):Z=E():(b.data!==C.children&&(ns(),b.data=C.children),Z=i(b));break;case et:N(b)?(Z=i(b),V(C.el=b.content.firstChild,b,x)):Ee!==8||y?Z=E():Z=i(b);break;case Ei:if(y&&(b=i(b),Ee=b.nodeType),Ee===1||Ee===3){Z=b;const ue=!C.children.length;for(let re=0;re<C.staticCount;re++)ue&&(C.children+=Z.nodeType===1?Z.outerHTML:Z.data),re===C.staticCount-1&&(C.anchor=Z),Z=i(Z);return y?i(Z):Z}else E();break;case kt:y?Z=P(b,C,x,F,I,v):Z=E();break;default:if(T&1)(Ee!==1||C.type.toLowerCase()!==b.tagName.toLowerCase())&&!N(b)?Z=E():Z=g(b,C,x,F,I,v);else if(T&6){C.slotScopeIds=I;const ue=o(b);if(y?Z=O(b):cs(b)&&b.data==="teleport start"?Z=O(b,b.data,"teleport end"):Z=i(b),e(C,ue,null,x,F,Mo(ue),v),Nr(C)){let re;y?(re=qe(kt),re.anchor=Z?Z.previousSibling:ue.lastChild):re=b.nodeType===3?Dm(""):qe("div"),re.el=b,C.component.subTree=re}}else T&64?Ee!==8?Z=E():Z=C.type.hydrate(b,C,x,F,I,v,t,m):T&128&&(Z=C.type.hydrate(b,C,x,F,Mo(o(b)),I,v,t,d))}return A!=null&&fa(A,null,F,C),Z},g=(b,C,x,F,I,v)=>{v=v||!!C.dynamicChildren;const{type:y,props:E,patchFlag:S,shapeFlag:A,dirs:T,transition:pe}=C,Ee=y==="input"||y==="option";if(Ee||S!==-1){T&&nn(C,null,x,"created");let Z=!1;if(N(b)){Z=vm(F,pe)&&x&&x.vnode.props&&x.vnode.props.appear;const re=b.content.firstChild;Z&&pe.beforeEnter(re),V(re,b,x),C.el=b=re}if(A&16&&!(E&&(E.innerHTML||E.textContent))){let re=m(b.firstChild,C,b,x,F,I,v);for(;re;){Lo(b,1)||ns();const Fe=re;re=re.nextSibling,c(Fe)}}else A&8&&b.textContent!==C.children&&(Lo(b,0)||ns(),b.textContent=C.children);if(E){if(Ee||!v||S&48){const re=b.tagName.includes("-");for(const Fe in E)(Ee&&(Fe.endsWith("value")||Fe==="indeterminate")||Yi(Fe)&&!ds(Fe)||Fe[0]==="."||re)&&r(b,Fe,null,E[Fe],void 0,x)}else if(E.onClick)r(b,"onClick",null,E.onClick,void 0,x);else if(S&4&&Or(E.style))for(const re in E.style)E.style[re]}let ue;(ue=E&&E.onVnodeBeforeMount)&&At(ue,x,C),T&&nn(C,null,x,"beforeMount"),((ue=E&&E.onVnodeMounted)||T||Z)&&Rm(()=>{ue&&At(ue,x,C),Z&&pe.enter(b),T&&nn(C,null,x,"mounted")},F)}return b.nextSibling},m=(b,C,x,F,I,v,y)=>{y=y||!!C.dynamicChildren;const E=C.children,S=E.length;for(let A=0;A<S;A++){const T=y?E[A]:E[A]=Ot(E[A]),pe=T.type===xr;b?(pe&&!y&&A+1<S&&Ot(E[A+1]).type===xr&&(l(s(b.data.slice(T.children.length)),x,i(b)),b.data=T.children),b=d(b,T,F,I,v,y)):pe&&!T.children?l(T.el=s(""),x):(Lo(x,1)||ns(),n(null,T,x,null,F,I,Mo(x),v))}return b},P=(b,C,x,F,I,v)=>{const{slotScopeIds:y}=C;y&&(I=I?I.concat(y):y);const E=o(b),S=m(i(b),C,E,x,F,I,v);return S&&cs(S)&&S.data==="]"?i(C.anchor=S):(ns(),l(C.anchor=u("]"),E,S),S)},k=(b,C,x,F,I,v)=>{if(Lo(b.parentElement,1)||ns(),C.el=null,v){const S=O(b);for(;;){const A=i(b);if(A&&A!==S)c(A);else break}}const y=i(b),E=o(b);return c(b),n(null,C,E,y,x,F,Mo(E),I),y},O=(b,C="[",x="]")=>{let F=0;for(;b;)if(b=i(b),b&&cs(b)&&(b.data===C&&F++,b.data===x)){if(F===0)return i(b);F--}return b},V=(b,C,x)=>{const F=C.parentNode;F&&F.replaceChild(b,C);let I=x;for(;I;)I.vnode.el===C&&(I.vnode.el=I.subTree.el=b),I=I.parent},N=b=>b.nodeType===1&&b.tagName.toLowerCase()==="template";return[h,d]}const Lf="data-allow-mismatch",fT={0:"text",1:"children",2:"class",3:"style",4:"attribute"};function Lo(t,e){if(e===0||e===1)for(;t&&!t.hasAttribute(Lf);)t=t.parentElement;const n=t&&t.getAttribute(Lf);if(n==null)return!1;if(n==="")return!0;{const r=n.split(",");return e===0&&r.includes("children")?!0:n.split(",").includes(fT[e])}}function dT(t,e){if(cs(t)&&t.data==="["){let n=1,r=t.nextSibling;for(;r;){if(r.nodeType===1)e(r);else if(cs(r))if(r.data==="]"){if(--n===0)break}else r.data==="["&&n++;r=r.nextSibling}}else e(t)}const Nr=t=>!!t.type.__asyncLoader;/*! #__NO_SIDE_EFFECTS__ */function Ff(t){fe(t)&&(t={loader:t});const{loader:e,loadingComponent:n,errorComponent:r,delay:s=200,hydrate:i,timeout:o,suspensible:c=!0,onError:l}=t;let u=null,h,d=0;const g=()=>(d++,u=null,m()),m=()=>{let P;return u||(P=u=e().catch(k=>{if(k=k instanceof Error?k:new Error(String(k)),l)return new Promise((O,V)=>{l(k,()=>O(g()),()=>V(k),d+1)});throw k}).then(k=>P!==u&&u?u:(k&&(k.__esModule||k[Symbol.toStringTag]==="Module")&&(k=k.default),h=k,k)))};return js({name:"AsyncComponentWrapper",__asyncLoader:m,__asyncHydrate(P,k,O){const V=i?()=>{const N=i(O,b=>dT(P,b));N&&(k.bum||(k.bum=[])).push(N)}:O;h?V():m().then(()=>!k.isUnmounted&&V())},get __asyncResolved(){return h},setup(){const P=Ge;if(Ru(P),h)return()=>Bc(h,P);const k=b=>{u=null,Us(b,P,13,!r)};if(c&&P.suspense||no)return m().then(b=>()=>Bc(b,P)).catch(b=>(k(b),()=>r?qe(r,{error:b}):null));const O=cn(!1),V=cn(),N=cn(!!s);return s&&setTimeout(()=>{N.value=!1},s),o!=null&&setTimeout(()=>{if(!O.value&&!V.value){const b=new Error(`Async component timed out after ${o}ms.`);k(b),V.value=b}},o),m().then(()=>{O.value=!0,P.parent&&eo(P.parent.vnode)&&Ka(P.parent.update)}).catch(b=>{k(b),V.value=b}),()=>{if(O.value&&h)return Bc(h,P);if(V.value&&r)return qe(r,{error:V.value});if(n&&!N.value)return qe(n)}}})}function Bc(t,e){const{ref:n,props:r,children:s,ce:i}=e.vnode,o=qe(t,r,s);return o.ref=n,o.ce=i,delete e.vnode.ce,o}const eo=t=>t.type.__isKeepAlive,pT={name:"KeepAlive",__isKeepAlive:!0,props:{include:[String,RegExp,Array],exclude:[String,RegExp,Array],max:[String,Number]},setup(t,{slots:e}){const n=Ja(),r=n.ctx;if(!r.renderer)return()=>{const N=e.default&&e.default();return N&&N.length===1?N[0]:N};const s=new Map,i=new Set;let o=null;const c=n.suspense,{renderer:{p:l,m:u,um:h,o:{createElement:d}}}=r,g=d("div");r.activate=(N,b,C,x,F)=>{const I=N.component;u(N,b,C,0,c),l(I.vnode,N,b,C,I,c,x,N.slotScopeIds,F),st(()=>{I.isDeactivated=!1,I.a&&ps(I.a);const v=N.props&&N.props.onVnodeMounted;v&&At(v,I.parent,N)},c)},r.deactivate=N=>{const b=N.component;pa(b.m),pa(b.a),u(N,g,null,1,c),st(()=>{b.da&&ps(b.da);const C=N.props&&N.props.onVnodeUnmounted;C&&At(C,b.parent,N),b.isDeactivated=!0},c)};function m(N){jc(N),h(N,n,c,!0)}function P(N){s.forEach((b,C)=>{const x=bl(b.type);x&&!N(x)&&k(C)})}function k(N){const b=s.get(N);b&&(!o||!Wt(b,o))?m(b):o&&jc(o),s.delete(N),i.delete(N)}Vr(()=>[t.include,t.exclude],([N,b])=>{N&&P(C=>hi(N,C)),b&&P(C=>!hi(b,C))},{flush:"post",deep:!0});let O=null;const V=()=>{O!=null&&(ga(n.subTree.type)?st(()=>{s.set(O,Fo(n.subTree))},n.subTree.suspense):s.set(O,Fo(n.subTree)))};return Su(V),em(V),Ga(()=>{s.forEach(N=>{const{subTree:b,suspense:C}=n,x=Fo(b);if(N.type===x.type&&N.key===x.key){jc(x);const F=x.component.da;F&&st(F,C);return}m(N)})}),()=>{if(O=null,!e.default)return o=null;const N=e.default(),b=N[0];if(N.length>1)return o=null,N;if(!Li(b)||!(b.shapeFlag&4)&&!(b.shapeFlag&128))return o=null,b;let C=Fo(b);if(C.type===et)return o=null,C;const x=C.type,F=bl(Nr(C)?C.type.__asyncResolved||{}:x),{include:I,exclude:v,max:y}=t;if(I&&(!F||!hi(I,F))||v&&F&&hi(v,F))return C.shapeFlag&=-257,o=C,b;const E=C.key==null?x:C.key,S=s.get(E);return C.el&&(C=Pn(C),b.shapeFlag&128&&(b.ssContent=C)),O=E,S?(C.el=S.el,C.component=S.component,C.transition&&Is(C,C.transition),C.shapeFlag|=512,i.delete(E),i.add(E)):(i.add(E),y&&i.size>parseInt(y,10)&&k(i.values().next().value)),C.shapeFlag|=256,o=C,ga(b.type)?b:C}}},gT=pT;function hi(t,e){return ie(t)?t.some(n=>hi(n,e)):Le(t)?t.split(",").includes(e):hE(t)?(t.lastIndex=0,t.test(e)):!1}function Xg(t,e){Zg(t,"a",e)}function Yg(t,e){Zg(t,"da",e)}function Zg(t,e,n=Ge){const r=t.__wdc||(t.__wdc=()=>{let s=n;for(;s;){if(s.isDeactivated)return;s=s.parent}return t()});if(za(e,r,n),n){let s=n.parent;for(;s&&s.parent;)eo(s.parent.vnode)&&mT(r,e,n,s),s=s.parent}}function mT(t,e,n,r){const s=za(e,t,r,!0);tm(()=>{du(r[e],s)},n)}function jc(t){t.shapeFlag&=-257,t.shapeFlag&=-513}function Fo(t){return t.shapeFlag&128?t.ssContent:t}function za(t,e,n=Ge,r=!1){if(n){const s=n[t]||(n[t]=[]),i=e.__weh||(e.__weh=(...o)=>{fr();const c=to(n),l=Xt(e,n,t,o);return c(),dr(),l});return r?s.unshift(i):s.push(i),i}}const Dn=t=>(e,n=Ge)=>{(!no||t==="sp")&&za(t,(...r)=>e(...r),n)},_T=Dn("bm"),Su=Dn("m"),yT=Dn("bu"),em=Dn("u"),Ga=Dn("bum"),tm=Dn("um"),vT=Dn("sp"),ET=Dn("rtg"),TT=Dn("rtc");function nm(t,e=Ge){za("ec",t,e)}const rm="components";function tN(t,e){return im(rm,t,!0,e)||t}const sm=Symbol.for("v-ndc");function wT(t){return Le(t)?im(rm,t,!1)||t:t||sm}function im(t,e,n=!0,r=!1){const s=It||Ge;if(s){const i=s.type;{const c=bl(i,!1);if(c&&(c===e||c===Jt(e)||c===ja(Jt(e))))return i}const o=Uf(s[t]||i[t],e)||Uf(s.appContext[t],e);return!o&&r?i:o}}function Uf(t,e){return t&&(t[e]||t[Jt(e)]||t[ja(Jt(e))])}function nN(t,e,n,r){let s;const i=n,o=ie(t);if(o||Le(t)){const c=o&&Or(t);let l=!1;c&&(l=!Lt(t),t=qa(t)),s=new Array(t.length);for(let u=0,h=t.length;u<h;u++)s[u]=e(l?gt(t[u]):t[u],u,void 0,i)}else if(typeof t=="number"){s=new Array(t);for(let c=0;c<t;c++)s[c]=e(c+1,c,void 0,i)}else if(ke(t))if(t[Symbol.iterator])s=Array.from(t,(c,l)=>e(c,l,void 0,i));else{const c=Object.keys(t);s=new Array(c.length);for(let l=0,u=c.length;l<u;l++){const h=c[l];s[l]=e(t[h],h,l,i)}}else s=[];return s}const _l=t=>t?Vm(t)?Xa(t):_l(t.parent):null,vi=Xe(Object.create(null),{$:t=>t,$el:t=>t.vnode.el,$data:t=>t.data,$props:t=>t.props,$attrs:t=>t.attrs,$slots:t=>t.slots,$refs:t=>t.refs,$parent:t=>_l(t.parent),$root:t=>_l(t.root),$host:t=>t.ce,$emit:t=>t.emit,$options:t=>Pu(t),$forceUpdate:t=>t.f||(t.f=()=>{Ka(t.update)}),$nextTick:t=>t.n||(t.n=Bs.bind(t.proxy)),$watch:t=>HT.bind(t)}),$c=(t,e)=>t!==De&&!t.__isScriptSetup&&Se(t,e),IT={get({_:t},e){if(e==="__v_skip")return!0;const{ctx:n,setupState:r,data:s,props:i,accessCache:o,type:c,appContext:l}=t;let u;if(e[0]!=="$"){const m=o[e];if(m!==void 0)switch(m){case 1:return r[e];case 2:return s[e];case 4:return n[e];case 3:return i[e]}else{if($c(r,e))return o[e]=1,r[e];if(s!==De&&Se(s,e))return o[e]=2,s[e];if((u=t.propsOptions[0])&&Se(u,e))return o[e]=3,i[e];if(n!==De&&Se(n,e))return o[e]=4,n[e];yl&&(o[e]=0)}}const h=vi[e];let d,g;if(h)return e==="$attrs"&&_t(t.attrs,"get",""),h(t);if((d=c.__cssModules)&&(d=d[e]))return d;if(n!==De&&Se(n,e))return o[e]=4,n[e];if(g=l.config.globalProperties,Se(g,e))return g[e]},set({_:t},e,n){const{data:r,setupState:s,ctx:i}=t;return $c(s,e)?(s[e]=n,!0):r!==De&&Se(r,e)?(r[e]=n,!0):Se(t.props,e)||e[0]==="$"&&e.slice(1)in t?!1:(i[e]=n,!0)},has({_:{data:t,setupState:e,accessCache:n,ctx:r,appContext:s,propsOptions:i}},o){let c;return!!n[o]||t!==De&&Se(t,o)||$c(e,o)||(c=i[0])&&Se(c,o)||Se(r,o)||Se(vi,o)||Se(s.config.globalProperties,o)},defineProperty(t,e,n){return n.get!=null?t._.accessCache[e]=0:Se(n,"value")&&this.set(t,e,n.value,null),Reflect.defineProperty(t,e,n)}};function Bf(t){return ie(t)?t.reduce((e,n)=>(e[n]=null,e),{}):t}let yl=!0;function bT(t){const e=Pu(t),n=t.proxy,r=t.ctx;yl=!1,e.beforeCreate&&jf(e.beforeCreate,t,"bc");const{data:s,computed:i,methods:o,watch:c,provide:l,inject:u,created:h,beforeMount:d,mounted:g,beforeUpdate:m,updated:P,activated:k,deactivated:O,beforeDestroy:V,beforeUnmount:N,destroyed:b,unmounted:C,render:x,renderTracked:F,renderTriggered:I,errorCaptured:v,serverPrefetch:y,expose:E,inheritAttrs:S,components:A,directives:T,filters:pe}=e;if(u&&AT(u,r,null),o)for(const ue in o){const re=o[ue];fe(re)&&(r[ue]=re.bind(n))}if(s){const ue=s.call(n,n);ke(ue)&&(t.data=pr(ue))}if(yl=!0,i)for(const ue in i){const re=i[ue],Fe=fe(re)?re.bind(n,n):fe(re.get)?re.get.bind(n,n):an,$t=!fe(re)&&fe(re.set)?re.set.bind(n):an,Nt=Kt({get:Fe,set:$t});Object.defineProperty(r,ue,{enumerable:!0,configurable:!0,get:()=>Nt.value,set:Ue=>Nt.value=Ue})}if(c)for(const ue in c)om(c[ue],r,n,ue);if(l){const ue=fe(l)?l.call(n):l;Reflect.ownKeys(ue).forEach(re=>{ms(re,ue[re])})}h&&jf(h,t,"c");function Z(ue,re){ie(re)?re.forEach(Fe=>ue(Fe.bind(n))):re&&ue(re.bind(n))}if(Z(_T,d),Z(Su,g),Z(yT,m),Z(em,P),Z(Xg,k),Z(Yg,O),Z(nm,v),Z(TT,F),Z(ET,I),Z(Ga,N),Z(tm,C),Z(vT,y),ie(E))if(E.length){const ue=t.exposed||(t.exposed={});E.forEach(re=>{Object.defineProperty(ue,re,{get:()=>n[re],set:Fe=>n[re]=Fe})})}else t.exposed||(t.exposed={});x&&t.render===an&&(t.render=x),S!=null&&(t.inheritAttrs=S),A&&(t.components=A),T&&(t.directives=T),y&&Ru(t)}function AT(t,e,n=an){ie(t)&&(t=vl(t));for(const r in t){const s=t[r];let i;ke(s)?"default"in s?i=St(s.from||r,s.default,!0):i=St(s.from||r):i=St(s),tt(i)?Object.defineProperty(e,r,{enumerable:!0,configurable:!0,get:()=>i.value,set:o=>i.value=o}):e[r]=i}}function jf(t,e,n){Xt(ie(t)?t.map(r=>r.bind(e.proxy)):t.bind(e.proxy),e,n)}function om(t,e,n,r){let s=r.includes(".")?wm(n,r):()=>n[r];if(Le(t)){const i=e[t];fe(i)&&Vr(s,i)}else if(fe(t))Vr(s,t.bind(n));else if(ke(t))if(ie(t))t.forEach(i=>om(i,e,n,r));else{const i=fe(t.handler)?t.handler.bind(n):e[t.handler];fe(i)&&Vr(s,i,t)}}function Pu(t){const e=t.type,{mixins:n,extends:r}=e,{mixins:s,optionsCache:i,config:{optionMergeStrategies:o}}=t.appContext,c=i.get(e);let l;return c?l=c:!s.length&&!n&&!r?l=e:(l={},s.length&&s.forEach(u=>da(l,u,o,!0)),da(l,e,o)),ke(e)&&i.set(e,l),l}function da(t,e,n,r=!1){const{mixins:s,extends:i}=e;i&&da(t,i,n,!0),s&&s.forEach(o=>da(t,o,n,!0));for(const o in e)if(!(r&&o==="expose")){const c=RT[o]||n&&n[o];t[o]=c?c(t[o],e[o]):e[o]}return t}const RT={data:$f,props:Hf,emits:Hf,methods:fi,computed:fi,beforeCreate:Tt,created:Tt,beforeMount:Tt,mounted:Tt,beforeUpdate:Tt,updated:Tt,beforeDestroy:Tt,beforeUnmount:Tt,destroyed:Tt,unmounted:Tt,activated:Tt,deactivated:Tt,errorCaptured:Tt,serverPrefetch:Tt,components:fi,directives:fi,watch:PT,provide:$f,inject:ST};function $f(t,e){return e?t?function(){return Xe(fe(t)?t.call(this,this):t,fe(e)?e.call(this,this):e)}:e:t}function ST(t,e){return fi(vl(t),vl(e))}function vl(t){if(ie(t)){const e={};for(let n=0;n<t.length;n++)e[t[n]]=t[n];return e}return t}function Tt(t,e){return t?[...new Set([].concat(t,e))]:e}function fi(t,e){return t?Xe(Object.create(null),t,e):e}function Hf(t,e){return t?ie(t)&&ie(e)?[...new Set([...t,...e])]:Xe(Object.create(null),Bf(t),Bf(e??{})):e}function PT(t,e){if(!t)return e;if(!e)return t;const n=Xe(Object.create(null),t);for(const r in e)n[r]=Tt(t[r],e[r]);return n}function am(){return{app:null,config:{isNativeTag:lE,performance:!1,globalProperties:{},optionMergeStrategies:{},errorHandler:void 0,warnHandler:void 0,compilerOptions:{}},mixins:[],components:{},directives:{},provides:Object.create(null),optionsCache:new WeakMap,propsCache:new WeakMap,emitsCache:new WeakMap}}let CT=0;function kT(t,e){return function(r,s=null){fe(r)||(r=Xe({},r)),s!=null&&!ke(s)&&(s=null);const i=am(),o=new WeakSet,c=[];let l=!1;const u=i.app={_uid:CT++,_component:r,_props:s,_container:null,_context:i,_instance:null,version:Mm,get config(){return i.config},set config(h){},use(h,...d){return o.has(h)||(h&&fe(h.install)?(o.add(h),h.install(u,...d)):fe(h)&&(o.add(h),h(u,...d))),u},mixin(h){return i.mixins.includes(h)||i.mixins.push(h),u},component(h,d){return d?(i.components[h]=d,u):i.components[h]},directive(h,d){return d?(i.directives[h]=d,u):i.directives[h]},mount(h,d,g){if(!l){const m=u._ceVNode||qe(r,s);return m.appContext=i,g===!0?g="svg":g===!1&&(g=void 0),d&&e?e(m,h):t(m,h,g),l=!0,u._container=h,h.__vue_app__=u,Xa(m.component)}},onUnmount(h){c.push(h)},unmount(){l&&(Xt(c,u._instance,16),t(null,u._container),delete u._container.__vue_app__)},provide(h,d){return i.provides[h]=d,u},runWithContext(h){const d=Dr;Dr=u;try{return h()}finally{Dr=d}}};return u}}let Dr=null;function ms(t,e){if(Ge){let n=Ge.provides;const r=Ge.parent&&Ge.parent.provides;r===n&&(n=Ge.provides=Object.create(r)),n[t]=e}}function St(t,e,n=!1){const r=Ge||It;if(r||Dr){const s=Dr?Dr._context.provides:r?r.parent==null?r.vnode.appContext&&r.vnode.appContext.provides:r.parent.provides:void 0;if(s&&t in s)return s[t];if(arguments.length>1)return n&&fe(e)?e.call(r&&r.proxy):e}}function cm(){return!!(Ge||It||Dr)}const lm={},um=()=>Object.create(lm),hm=t=>Object.getPrototypeOf(t)===lm;function OT(t,e,n,r=!1){const s={},i=um();t.propsDefaults=Object.create(null),fm(t,e,s,i);for(const o in t.propsOptions[0])o in s||(s[o]=void 0);n?t.props=r?s:wn(s):t.type.props?t.props=s:t.props=i,t.attrs=i}function NT(t,e,n,r){const{props:s,attrs:i,vnode:{patchFlag:o}}=t,c=Ae(s),[l]=t.propsOptions;let u=!1;if((r||o>0)&&!(o&16)){if(o&8){const h=t.vnode.dynamicProps;for(let d=0;d<h.length;d++){let g=h[d];if(Qa(t.emitsOptions,g))continue;const m=e[g];if(l)if(Se(i,g))m!==i[g]&&(i[g]=m,u=!0);else{const P=Jt(g);s[P]=El(l,c,P,m,t,!1)}else m!==i[g]&&(i[g]=m,u=!0)}}}else{fm(t,e,s,i)&&(u=!0);let h;for(const d in c)(!e||!Se(e,d)&&((h=Hr(d))===d||!Se(e,h)))&&(l?n&&(n[d]!==void 0||n[h]!==void 0)&&(s[d]=El(l,c,d,void 0,t,!0)):delete s[d]);if(i!==c)for(const d in i)(!e||!Se(e,d))&&(delete i[d],u=!0)}u&&Rn(t.attrs,"set","")}function fm(t,e,n,r){const[s,i]=t.propsOptions;let o=!1,c;if(e)for(let l in e){if(ds(l))continue;const u=e[l];let h;s&&Se(s,h=Jt(l))?!i||!i.includes(h)?n[h]=u:(c||(c={}))[h]=u:Qa(t.emitsOptions,l)||(!(l in r)||u!==r[l])&&(r[l]=u,o=!0)}if(i){const l=Ae(n),u=c||De;for(let h=0;h<i.length;h++){const d=i[h];n[d]=El(s,l,d,u[d],t,!Se(u,d))}}return o}function El(t,e,n,r,s,i){const o=t[n];if(o!=null){const c=Se(o,"default");if(c&&r===void 0){const l=o.default;if(o.type!==Function&&!o.skipFactory&&fe(l)){const{propsDefaults:u}=s;if(n in u)r=u[n];else{const h=to(s);r=u[n]=l.call(null,e),h()}}else r=l;s.ce&&s.ce._setProp(n,r)}o[0]&&(i&&!c?r=!1:o[1]&&(r===""||r===Hr(n))&&(r=!0))}return r}const DT=new WeakMap;function dm(t,e,n=!1){const r=n?DT:e.propsCache,s=r.get(t);if(s)return s;const i=t.props,o={},c=[];let l=!1;if(!fe(t)){const h=d=>{l=!0;const[g,m]=dm(d,e,!0);Xe(o,g),m&&c.push(...m)};!n&&e.mixins.length&&e.mixins.forEach(h),t.extends&&h(t.extends),t.mixins&&t.mixins.forEach(h)}if(!i&&!l)return ke(t)&&r.set(t,hs),hs;if(ie(i))for(let h=0;h<i.length;h++){const d=Jt(i[h]);qf(d)&&(o[d]=De)}else if(i)for(const h in i){const d=Jt(h);if(qf(d)){const g=i[h],m=o[d]=ie(g)||fe(g)?{type:g}:Xe({},g),P=m.type;let k=!1,O=!0;if(ie(P))for(let V=0;V<P.length;++V){const N=P[V],b=fe(N)&&N.name;if(b==="Boolean"){k=!0;break}else b==="String"&&(O=!1)}else k=fe(P)&&P.name==="Boolean";m[0]=k,m[1]=O,(k||Se(m,"default"))&&c.push(d)}}const u=[o,c];return ke(t)&&r.set(t,u),u}function qf(t){return t[0]!=="$"&&!ds(t)}const pm=t=>t[0]==="_"||t==="$stable",Cu=t=>ie(t)?t.map(Ot):[Ot(t)],VT=(t,e,n)=>{if(e._n)return e;const r=qg((...s)=>Cu(e(...s)),n);return r._c=!1,r},gm=(t,e,n)=>{const r=t._ctx;for(const s in t){if(pm(s))continue;const i=t[s];if(fe(i))e[s]=VT(s,i,r);else if(i!=null){const o=Cu(i);e[s]=()=>o}}},mm=(t,e)=>{const n=Cu(e);t.slots.default=()=>n},_m=(t,e,n)=>{for(const r in e)(n||r!=="_")&&(t[r]=e[r])},xT=(t,e,n)=>{const r=t.slots=um();if(t.vnode.shapeFlag&32){const s=e._;s?(_m(r,e,n),n&&mg(r,"_",s,!0)):gm(e,r)}else e&&mm(t,e)},MT=(t,e,n)=>{const{vnode:r,slots:s}=t;let i=!0,o=De;if(r.shapeFlag&32){const c=e._;c?n&&c===1?i=!1:_m(s,e,n):(i=!e.$stable,gm(e,s)),o=e}else e&&(mm(t,e),o={default:1});if(i)for(const c in s)!pm(c)&&o[c]==null&&delete s[c]},st=Rm;function LT(t){return ym(t)}function FT(t){return ym(t,hT)}function ym(t,e){const n=yg();n.__VUE__=!0;const{insert:r,remove:s,patchProp:i,createElement:o,createText:c,createComment:l,setText:u,setElementText:h,parentNode:d,nextSibling:g,setScopeId:m=an,insertStaticContent:P}=t,k=(w,R,M,j=null,U=null,H=null,Q=void 0,z=null,K=!!R.dynamicChildren)=>{if(w===R)return;w&&!Wt(w,R)&&(j=B(w),Ue(w,U,H,!0),w=null),R.patchFlag===-2&&(K=!1,R.dynamicChildren=null);const{type:q,ref:oe,shapeFlag:X}=R;switch(q){case xr:O(w,R,M,j);break;case et:V(w,R,M,j);break;case Ei:w==null&&N(R,M,j,Q);break;case kt:A(w,R,M,j,U,H,Q,z,K);break;default:X&1?x(w,R,M,j,U,H,Q,z,K):X&6?T(w,R,M,j,U,H,Q,z,K):(X&64||X&128)&&q.process(w,R,M,j,U,H,Q,z,K,ee)}oe!=null&&U&&fa(oe,w&&w.ref,H,R||w,!R)},O=(w,R,M,j)=>{if(w==null)r(R.el=c(R.children),M,j);else{const U=R.el=w.el;R.children!==w.children&&u(U,R.children)}},V=(w,R,M,j)=>{w==null?r(R.el=l(R.children||""),M,j):R.el=w.el},N=(w,R,M,j)=>{[w.el,w.anchor]=P(w.children,R,M,j,w.el,w.anchor)},b=({el:w,anchor:R},M,j)=>{let U;for(;w&&w!==R;)U=g(w),r(w,M,j),w=U;r(R,M,j)},C=({el:w,anchor:R})=>{let M;for(;w&&w!==R;)M=g(w),s(w),w=M;s(R)},x=(w,R,M,j,U,H,Q,z,K)=>{R.type==="svg"?Q="svg":R.type==="math"&&(Q="mathml"),w==null?F(R,M,j,U,H,Q,z,K):y(w,R,U,H,Q,z,K)},F=(w,R,M,j,U,H,Q,z)=>{let K,q;const{props:oe,shapeFlag:X,transition:se,dirs:te}=w;if(K=w.el=o(w.type,H,oe&&oe.is,oe),X&8?h(K,w.children):X&16&&v(w.children,K,null,j,U,Hc(w,H),Q,z),te&&nn(w,null,j,"created"),I(K,w,w.scopeId,Q,j),oe){for(const Re in oe)Re!=="value"&&!ds(Re)&&i(K,Re,null,oe[Re],H,j);"value"in oe&&i(K,"value",null,oe.value,H),(q=oe.onVnodeBeforeMount)&&At(q,j,w)}te&&nn(w,null,j,"beforeMount");const le=vm(U,se);le&&se.beforeEnter(K),r(K,R,M),((q=oe&&oe.onVnodeMounted)||le||te)&&st(()=>{q&&At(q,j,w),le&&se.enter(K),te&&nn(w,null,j,"mounted")},U)},I=(w,R,M,j,U)=>{if(M&&m(w,M),j)for(let H=0;H<j.length;H++)m(w,j[H]);if(U){let H=U.subTree;if(R===H||ga(H.type)&&(H.ssContent===R||H.ssFallback===R)){const Q=U.vnode;I(w,Q,Q.scopeId,Q.slotScopeIds,U.parent)}}},v=(w,R,M,j,U,H,Q,z,K=0)=>{for(let q=K;q<w.length;q++){const oe=w[q]=z?zn(w[q]):Ot(w[q]);k(null,oe,R,M,j,U,H,Q,z)}},y=(w,R,M,j,U,H,Q)=>{const z=R.el=w.el;let{patchFlag:K,dynamicChildren:q,dirs:oe}=R;K|=w.patchFlag&16;const X=w.props||De,se=R.props||De;let te;if(M&&Er(M,!1),(te=se.onVnodeBeforeUpdate)&&At(te,M,R,w),oe&&nn(R,w,M,"beforeUpdate"),M&&Er(M,!0),(X.innerHTML&&se.innerHTML==null||X.textContent&&se.textContent==null)&&h(z,""),q?E(w.dynamicChildren,q,z,M,j,Hc(R,U),H):Q||re(w,R,z,null,M,j,Hc(R,U),H,!1),K>0){if(K&16)S(z,X,se,M,U);else if(K&2&&X.class!==se.class&&i(z,"class",null,se.class,U),K&4&&i(z,"style",X.style,se.style,U),K&8){const le=R.dynamicProps;for(let Re=0;Re<le.length;Re++){const we=le[Re],lt=X[we],Ye=se[we];(Ye!==lt||we==="value")&&i(z,we,lt,Ye,U,M)}}K&1&&w.children!==R.children&&h(z,R.children)}else!Q&&q==null&&S(z,X,se,M,U);((te=se.onVnodeUpdated)||oe)&&st(()=>{te&&At(te,M,R,w),oe&&nn(R,w,M,"updated")},j)},E=(w,R,M,j,U,H,Q)=>{for(let z=0;z<R.length;z++){const K=w[z],q=R[z],oe=K.el&&(K.type===kt||!Wt(K,q)||K.shapeFlag&70)?d(K.el):M;k(K,q,oe,null,j,U,H,Q,!0)}},S=(w,R,M,j,U)=>{if(R!==M){if(R!==De)for(const H in R)!ds(H)&&!(H in M)&&i(w,H,R[H],null,U,j);for(const H in M){if(ds(H))continue;const Q=M[H],z=R[H];Q!==z&&H!=="value"&&i(w,H,z,Q,U,j)}"value"in M&&i(w,"value",R.value,M.value,U)}},A=(w,R,M,j,U,H,Q,z,K)=>{const q=R.el=w?w.el:c(""),oe=R.anchor=w?w.anchor:c("");let{patchFlag:X,dynamicChildren:se,slotScopeIds:te}=R;te&&(z=z?z.concat(te):te),w==null?(r(q,M,j),r(oe,M,j),v(R.children||[],M,oe,U,H,Q,z,K)):X>0&&X&64&&se&&w.dynamicChildren?(E(w.dynamicChildren,se,M,U,H,Q,z),(R.key!=null||U&&R===U.subTree)&&Em(w,R,!0)):re(w,R,M,oe,U,H,Q,z,K)},T=(w,R,M,j,U,H,Q,z,K)=>{R.slotScopeIds=z,w==null?R.shapeFlag&512?U.ctx.activate(R,M,j,Q,K):pe(R,M,j,U,H,Q,K):Ee(w,R,K)},pe=(w,R,M,j,U,H,Q)=>{const z=w.component=ow(w,j,U);if(eo(w)&&(z.ctx.renderer=ee),aw(z,!1,Q),z.asyncDep){if(U&&U.registerDep(z,Z,Q),!w.el){const K=z.subTree=qe(et);V(null,K,R,M)}}else Z(z,w,R,M,U,H,Q)},Ee=(w,R,M)=>{const j=R.component=w.component;if(QT(w,R,M))if(j.asyncDep&&!j.asyncResolved){ue(j,R,M);return}else j.next=R,j.update();else R.el=w.el,j.vnode=R},Z=(w,R,M,j,U,H,Q)=>{const z=()=>{if(w.isMounted){let{next:X,bu:se,u:te,parent:le,vnode:Re}=w;{const ut=Tm(w);if(ut){X&&(X.el=Re.el,ue(w,X,Q)),ut.asyncDep.then(()=>{w.isUnmounted||z()});return}}let we=X,lt;Er(w,!1),X?(X.el=Re.el,ue(w,X,Q)):X=Re,se&&ps(se),(lt=X.props&&X.props.onVnodeBeforeUpdate)&&At(lt,le,X,Re),Er(w,!0);const Ye=qc(w),nt=w.subTree;w.subTree=Ye,k(nt,Ye,d(nt.el),B(nt),w,U,H),X.el=Ye.el,we===null&&Ou(w,Ye.el),te&&st(te,U),(lt=X.props&&X.props.onVnodeUpdated)&&st(()=>At(lt,le,X,Re),U)}else{let X;const{el:se,props:te}=R,{bm:le,m:Re,parent:we,root:lt,type:Ye}=w,nt=Nr(R);if(Er(w,!1),le&&ps(le),!nt&&(X=te&&te.onVnodeBeforeMount)&&At(X,we,R),Er(w,!0),se&&Ce){const ut=()=>{w.subTree=qc(w),Ce(se,w.subTree,w,U,null)};nt&&Ye.__asyncHydrate?Ye.__asyncHydrate(se,w,ut):ut()}else{lt.ce&&lt.ce._injectChildStyle(Ye);const ut=w.subTree=qc(w);k(null,ut,M,j,w,U,H),R.el=ut.el}if(Re&&st(Re,U),!nt&&(X=te&&te.onVnodeMounted)){const ut=R;st(()=>At(X,we,ut),U)}(R.shapeFlag&256||we&&Nr(we.vnode)&&we.vnode.shapeFlag&256)&&w.a&&st(w.a,U),w.isMounted=!0,R=M=j=null}};w.scope.on();const K=w.effect=new bg(z);w.scope.off();const q=w.update=K.run.bind(K),oe=w.job=K.runIfDirty.bind(K);oe.i=w,oe.id=w.uid,K.scheduler=()=>Ka(oe),Er(w,!0),q()},ue=(w,R,M)=>{R.component=w;const j=w.vnode.props;w.vnode=R,w.next=null,NT(w,R.props,j,M),MT(w,R.children,M),fr(),Vf(w),dr()},re=(w,R,M,j,U,H,Q,z,K=!1)=>{const q=w&&w.children,oe=w?w.shapeFlag:0,X=R.children,{patchFlag:se,shapeFlag:te}=R;if(se>0){if(se&128){$t(q,X,M,j,U,H,Q,z,K);return}else if(se&256){Fe(q,X,M,j,U,H,Q,z,K);return}}te&8?(oe&16&&bt(q,U,H),X!==q&&h(M,X)):oe&16?te&16?$t(q,X,M,j,U,H,Q,z,K):bt(q,U,H,!0):(oe&8&&h(M,""),te&16&&v(X,M,j,U,H,Q,z,K))},Fe=(w,R,M,j,U,H,Q,z,K)=>{w=w||hs,R=R||hs;const q=w.length,oe=R.length,X=Math.min(q,oe);let se;for(se=0;se<X;se++){const te=R[se]=K?zn(R[se]):Ot(R[se]);k(w[se],te,M,null,U,H,Q,z,K)}q>oe?bt(w,U,H,!0,!1,X):v(R,M,j,U,H,Q,z,K,X)},$t=(w,R,M,j,U,H,Q,z,K)=>{let q=0;const oe=R.length;let X=w.length-1,se=oe-1;for(;q<=X&&q<=se;){const te=w[q],le=R[q]=K?zn(R[q]):Ot(R[q]);if(Wt(te,le))k(te,le,M,null,U,H,Q,z,K);else break;q++}for(;q<=X&&q<=se;){const te=w[X],le=R[se]=K?zn(R[se]):Ot(R[se]);if(Wt(te,le))k(te,le,M,null,U,H,Q,z,K);else break;X--,se--}if(q>X){if(q<=se){const te=se+1,le=te<oe?R[te].el:j;for(;q<=se;)k(null,R[q]=K?zn(R[q]):Ot(R[q]),M,le,U,H,Q,z,K),q++}}else if(q>se)for(;q<=X;)Ue(w[q],U,H,!0),q++;else{const te=q,le=q,Re=new Map;for(q=le;q<=se;q++){const vt=R[q]=K?zn(R[q]):Ot(R[q]);vt.key!=null&&Re.set(vt.key,q)}let we,lt=0;const Ye=se-le+1;let nt=!1,ut=0;const Ln=new Array(Ye);for(q=0;q<Ye;q++)Ln[q]=0;for(q=te;q<=X;q++){const vt=w[q];if(lt>=Ye){Ue(vt,U,H,!0);continue}let Dt;if(vt.key!=null)Dt=Re.get(vt.key);else for(we=le;we<=se;we++)if(Ln[we-le]===0&&Wt(vt,R[we])){Dt=we;break}Dt===void 0?Ue(vt,U,H,!0):(Ln[Dt-le]=q+1,Dt>=ut?ut=Dt:nt=!0,k(vt,R[Dt],M,null,U,H,Q,z,K),lt++)}const Qr=nt?UT(Ln):hs;for(we=Qr.length-1,q=Ye-1;q>=0;q--){const vt=le+q,Dt=R[vt],Jr=vt+1<oe?R[vt+1].el:j;Ln[q]===0?k(null,Dt,M,Jr,U,H,Q,z,K):nt&&(we<0||q!==Qr[we]?Nt(Dt,M,Jr,2):we--)}}},Nt=(w,R,M,j,U=null)=>{const{el:H,type:Q,transition:z,children:K,shapeFlag:q}=w;if(q&6){Nt(w.component.subTree,R,M,j);return}if(q&128){w.suspense.move(R,M,j);return}if(q&64){Q.move(w,R,M,ee);return}if(Q===kt){r(H,R,M);for(let X=0;X<K.length;X++)Nt(K[X],R,M,j);r(w.anchor,R,M);return}if(Q===Ei){b(w,R,M);return}if(j!==2&&q&1&&z)if(j===0)z.beforeEnter(H),r(H,R,M),st(()=>z.enter(H),U);else{const{leave:X,delayLeave:se,afterLeave:te}=z,le=()=>r(H,R,M),Re=()=>{X(H,()=>{le(),te&&te()})};se?se(H,le,Re):Re()}else r(H,R,M)},Ue=(w,R,M,j=!1,U=!1)=>{const{type:H,props:Q,ref:z,children:K,dynamicChildren:q,shapeFlag:oe,patchFlag:X,dirs:se,cacheIndex:te}=w;if(X===-2&&(U=!1),z!=null&&fa(z,null,M,w,!0),te!=null&&(R.renderCache[te]=void 0),oe&256){R.ctx.deactivate(w);return}const le=oe&1&&se,Re=!Nr(w);let we;if(Re&&(we=Q&&Q.onVnodeBeforeUnmount)&&At(we,R,w),oe&6)en(w.component,M,j);else{if(oe&128){w.suspense.unmount(M,j);return}le&&nn(w,null,R,"beforeUnmount"),oe&64?w.type.remove(w,R,M,ee,j):q&&!q.hasOnce&&(H!==kt||X>0&&X&64)?bt(q,R,M,!1,!0):(H===kt&&X&384||!U&&oe&16)&&bt(K,R,M),j&&Be(w)}(Re&&(we=Q&&Q.onVnodeUnmounted)||le)&&st(()=>{we&&At(we,R,w),le&&nn(w,null,R,"unmounted")},M)},Be=w=>{const{type:R,el:M,anchor:j,transition:U}=w;if(R===kt){Mn(M,j);return}if(R===Ei){C(w);return}const H=()=>{s(M),U&&!U.persisted&&U.afterLeave&&U.afterLeave()};if(w.shapeFlag&1&&U&&!U.persisted){const{leave:Q,delayLeave:z}=U,K=()=>Q(M,H);z?z(w.el,H,K):K()}else H()},Mn=(w,R)=>{let M;for(;w!==R;)M=g(w),s(w),w=M;s(R)},en=(w,R,M)=>{const{bum:j,scope:U,job:H,subTree:Q,um:z,m:K,a:q}=w;pa(K),pa(q),j&&ps(j),U.stop(),H&&(H.flags|=8,Ue(Q,w,R,M)),z&&st(z,R),st(()=>{w.isUnmounted=!0},R),R&&R.pendingBranch&&!R.isUnmounted&&w.asyncDep&&!w.asyncResolved&&w.suspenseId===R.pendingId&&(R.deps--,R.deps===0&&R.resolve())},bt=(w,R,M,j=!1,U=!1,H=0)=>{for(let Q=H;Q<w.length;Q++)Ue(w[Q],R,M,j,U)},B=w=>{if(w.shapeFlag&6)return B(w.component.subTree);if(w.shapeFlag&128)return w.suspense.next();const R=g(w.anchor||w.el),M=R&&R[iT];return M?g(M):R};let Y=!1;const J=(w,R,M)=>{w==null?R._vnode&&Ue(R._vnode,null,null,!0):k(R._vnode||null,w,R,null,null,null,M),R._vnode=w,Y||(Y=!0,Vf(),ua(),Y=!1)},ee={p:k,um:Ue,m:Nt,r:Be,mt:pe,mc:v,pc:re,pbc:E,n:B,o:t};let ye,Ce;return e&&([ye,Ce]=e(ee)),{render:J,hydrate:ye,createApp:kT(J,ye)}}function Hc({type:t,props:e},n){return n==="svg"&&t==="foreignObject"||n==="mathml"&&t==="annotation-xml"&&e&&e.encoding&&e.encoding.includes("html")?void 0:n}function Er({effect:t,job:e},n){n?(t.flags|=32,e.flags|=4):(t.flags&=-33,e.flags&=-5)}function vm(t,e){return(!t||t&&!t.pendingBranch)&&e&&!e.persisted}function Em(t,e,n=!1){const r=t.children,s=e.children;if(ie(r)&&ie(s))for(let i=0;i<r.length;i++){const o=r[i];let c=s[i];c.shapeFlag&1&&!c.dynamicChildren&&((c.patchFlag<=0||c.patchFlag===32)&&(c=s[i]=zn(s[i]),c.el=o.el),!n&&c.patchFlag!==-2&&Em(o,c)),c.type===xr&&(c.el=o.el)}}function UT(t){const e=t.slice(),n=[0];let r,s,i,o,c;const l=t.length;for(r=0;r<l;r++){const u=t[r];if(u!==0){if(s=n[n.length-1],t[s]<u){e[r]=s,n.push(r);continue}for(i=0,o=n.length-1;i<o;)c=i+o>>1,t[n[c]]<u?i=c+1:o=c;u<t[n[i]]&&(i>0&&(e[r]=n[i-1]),n[i]=r)}}for(i=n.length,o=n[i-1];i-- >0;)n[i]=o,o=e[o];return n}function Tm(t){const e=t.subTree.component;if(e)return e.asyncDep&&!e.asyncResolved?e:Tm(e)}function pa(t){if(t)for(let e=0;e<t.length;e++)t[e].flags|=8}const BT=Symbol.for("v-scx"),jT=()=>St(BT);function $T(t,e){return ku(t,null,e)}function Vr(t,e,n){return ku(t,e,n)}function ku(t,e,n=De){const{immediate:r,deep:s,flush:i,once:o}=n,c=Xe({},n);let l;if(no)if(i==="sync"){const g=jT();l=g.__watcherHandles||(g.__watcherHandles=[])}else if(!e||r)c.once=!0;else return{stop:an,resume:an,pause:an};const u=Ge;c.call=(g,m,P)=>Xt(g,u,m,P);let h=!1;i==="post"?c.scheduler=g=>{st(g,u&&u.suspense)}:i!=="sync"&&(h=!0,c.scheduler=(g,m)=>{m?g():Ka(g)}),c.augmentJob=g=>{e&&(g.flags|=4),h&&(g.flags|=2,u&&(g.id=u.uid,g.i=u))};const d=nT(t,e,c);return l&&l.push(d),d}function HT(t,e,n){const r=this.proxy,s=Le(t)?t.includes(".")?wm(r,t):()=>r[t]:t.bind(r,r);let i;fe(e)?i=e:(i=e.handler,n=e);const o=to(this),c=ku(s,i.bind(r),n);return o(),c}function wm(t,e){const n=e.split(".");return()=>{let r=t;for(let s=0;s<n.length&&r;s++)r=r[n[s]];return r}}const qT=(t,e)=>e==="modelValue"||e==="model-value"?t.modelModifiers:t[`${e}Modifiers`]||t[`${Jt(e)}Modifiers`]||t[`${Hr(e)}Modifiers`];function WT(t,e,...n){if(t.isUnmounted)return;const r=t.vnode.props||De;let s=n;const i=e.startsWith("update:"),o=i&&qT(r,e.slice(7));o&&(o.trim&&(s=n.map(h=>Le(h)?h.trim():h)),o.number&&(s=n.map(aa)));let c,l=r[c=Vc(e)]||r[c=Vc(Jt(e))];!l&&i&&(l=r[c=Vc(Hr(e))]),l&&Xt(l,t,6,s);const u=r[c+"Once"];if(u){if(!t.emitted)t.emitted={};else if(t.emitted[c])return;t.emitted[c]=!0,Xt(u,t,6,s)}}function Im(t,e,n=!1){const r=e.emitsCache,s=r.get(t);if(s!==void 0)return s;const i=t.emits;let o={},c=!1;if(!fe(t)){const l=u=>{const h=Im(u,e,!0);h&&(c=!0,Xe(o,h))};!n&&e.mixins.length&&e.mixins.forEach(l),t.extends&&l(t.extends),t.mixins&&t.mixins.forEach(l)}return!i&&!c?(ke(t)&&r.set(t,null),null):(ie(i)?i.forEach(l=>o[l]=null):Xe(o,i),ke(t)&&r.set(t,o),o)}function Qa(t,e){return!t||!Yi(e)?!1:(e=e.slice(2).replace(/Once$/,""),Se(t,e[0].toLowerCase()+e.slice(1))||Se(t,Hr(e))||Se(t,e))}function qc(t){const{type:e,vnode:n,proxy:r,withProxy:s,propsOptions:[i],slots:o,attrs:c,emit:l,render:u,renderCache:h,props:d,data:g,setupState:m,ctx:P,inheritAttrs:k}=t,O=ha(t);let V,N;try{if(n.shapeFlag&4){const C=s||r,x=C;V=Ot(u.call(x,C,h,d,m,g,P)),N=c}else{const C=e;V=Ot(C.length>1?C(d,{attrs:c,slots:o,emit:l}):C(d,null)),N=e.props?c:zT(c)}}catch(C){Ti.length=0,Us(C,t,1),V=qe(et)}let b=V;if(N&&k!==!1){const C=Object.keys(N),{shapeFlag:x}=b;C.length&&x&7&&(i&&C.some(fu)&&(N=GT(N,i)),b=Pn(b,N,!1,!0))}return n.dirs&&(b=Pn(b,null,!1,!0),b.dirs=b.dirs?b.dirs.concat(n.dirs):n.dirs),n.transition&&Is(b,n.transition),V=b,ha(O),V}function KT(t,e=!0){let n;for(let r=0;r<t.length;r++){const s=t[r];if(Li(s)){if(s.type!==et||s.children==="v-if"){if(n)return;n=s}}else return}return n}const zT=t=>{let e;for(const n in t)(n==="class"||n==="style"||Yi(n))&&((e||(e={}))[n]=t[n]);return e},GT=(t,e)=>{const n={};for(const r in t)(!fu(r)||!(r.slice(9)in e))&&(n[r]=t[r]);return n};function QT(t,e,n){const{props:r,children:s,component:i}=t,{props:o,children:c,patchFlag:l}=e,u=i.emitsOptions;if(e.dirs||e.transition)return!0;if(n&&l>=0){if(l&1024)return!0;if(l&16)return r?Wf(r,o,u):!!o;if(l&8){const h=e.dynamicProps;for(let d=0;d<h.length;d++){const g=h[d];if(o[g]!==r[g]&&!Qa(u,g))return!0}}}else return(s||c)&&(!c||!c.$stable)?!0:r===o?!1:r?o?Wf(r,o,u):!0:!!o;return!1}function Wf(t,e,n){const r=Object.keys(e);if(r.length!==Object.keys(t).length)return!0;for(let s=0;s<r.length;s++){const i=r[s];if(e[i]!==t[i]&&!Qa(n,i))return!0}return!1}function Ou({vnode:t,parent:e},n){for(;e;){const r=e.subTree;if(r.suspense&&r.suspense.activeBranch===t&&(r.el=t.el),r===t)(t=e.vnode).el=n,e=e.parent;else break}}const ga=t=>t.__isSuspense;let Tl=0;const JT={name:"Suspense",__isSuspense:!0,process(t,e,n,r,s,i,o,c,l,u){if(t==null)XT(e,n,r,s,i,o,c,l,u);else{if(i&&i.deps>0&&!t.suspense.isInFallback){e.suspense=t.suspense,e.suspense.vnode=e,e.el=t.el;return}YT(t,e,n,r,s,o,c,l,u)}},hydrate:ZT,normalize:ew},bm=JT;function Mi(t,e){const n=t.props&&t.props[e];fe(n)&&n()}function XT(t,e,n,r,s,i,o,c,l){const{p:u,o:{createElement:h}}=l,d=h("div"),g=t.suspense=Am(t,s,r,e,d,n,i,o,c,l);u(null,g.pendingBranch=t.ssContent,d,null,r,g,i,o),g.deps>0?(Mi(t,"onPending"),Mi(t,"onFallback"),u(null,t.ssFallback,e,n,r,null,i,o),_s(g,t.ssFallback)):g.resolve(!1,!0)}function YT(t,e,n,r,s,i,o,c,{p:l,um:u,o:{createElement:h}}){const d=e.suspense=t.suspense;d.vnode=e,e.el=t.el;const g=e.ssContent,m=e.ssFallback,{activeBranch:P,pendingBranch:k,isInFallback:O,isHydrating:V}=d;if(k)d.pendingBranch=g,Wt(g,k)?(l(k,g,d.hiddenContainer,null,s,d,i,o,c),d.deps<=0?d.resolve():O&&(V||(l(P,m,n,r,s,null,i,o,c),_s(d,m)))):(d.pendingId=Tl++,V?(d.isHydrating=!1,d.activeBranch=k):u(k,s,d),d.deps=0,d.effects.length=0,d.hiddenContainer=h("div"),O?(l(null,g,d.hiddenContainer,null,s,d,i,o,c),d.deps<=0?d.resolve():(l(P,m,n,r,s,null,i,o,c),_s(d,m))):P&&Wt(g,P)?(l(P,g,n,r,s,d,i,o,c),d.resolve(!0)):(l(null,g,d.hiddenContainer,null,s,d,i,o,c),d.deps<=0&&d.resolve()));else if(P&&Wt(g,P))l(P,g,n,r,s,d,i,o,c),_s(d,g);else if(Mi(e,"onPending"),d.pendingBranch=g,g.shapeFlag&512?d.pendingId=g.component.suspenseId:d.pendingId=Tl++,l(null,g,d.hiddenContainer,null,s,d,i,o,c),d.deps<=0)d.resolve();else{const{timeout:N,pendingId:b}=d;N>0?setTimeout(()=>{d.pendingId===b&&d.fallback(m)},N):N===0&&d.fallback(m)}}function Am(t,e,n,r,s,i,o,c,l,u,h=!1){const{p:d,m:g,um:m,n:P,o:{parentNode:k,remove:O}}=u;let V;const N=tw(t);N&&e&&e.pendingBranch&&(V=e.pendingId,e.deps++);const b=t.props?_g(t.props.timeout):void 0,C=i,x={vnode:t,parent:e,parentComponent:n,namespace:o,container:r,hiddenContainer:s,deps:0,pendingId:Tl++,timeout:typeof b=="number"?b:-1,activeBranch:null,pendingBranch:null,isInFallback:!h,isHydrating:h,isUnmounted:!1,effects:[],resolve(F=!1,I=!1){const{vnode:v,activeBranch:y,pendingBranch:E,pendingId:S,effects:A,parentComponent:T,container:pe}=x;let Ee=!1;x.isHydrating?x.isHydrating=!1:F||(Ee=y&&E.transition&&E.transition.mode==="out-in",Ee&&(y.transition.afterLeave=()=>{S===x.pendingId&&(g(E,pe,i===C?P(y):i,0),gl(A))}),y&&(k(y.el)===pe&&(i=P(y)),m(y,T,x,!0)),Ee||g(E,pe,i,0)),_s(x,E),x.pendingBranch=null,x.isInFallback=!1;let Z=x.parent,ue=!1;for(;Z;){if(Z.pendingBranch){Z.effects.push(...A),ue=!0;break}Z=Z.parent}!ue&&!Ee&&gl(A),x.effects=[],N&&e&&e.pendingBranch&&V===e.pendingId&&(e.deps--,e.deps===0&&!I&&e.resolve()),Mi(v,"onResolve")},fallback(F){if(!x.pendingBranch)return;const{vnode:I,activeBranch:v,parentComponent:y,container:E,namespace:S}=x;Mi(I,"onFallback");const A=P(v),T=()=>{x.isInFallback&&(d(null,F,E,A,y,null,S,c,l),_s(x,F))},pe=F.transition&&F.transition.mode==="out-in";pe&&(v.transition.afterLeave=T),x.isInFallback=!0,m(v,y,null,!0),pe||T()},move(F,I,v){x.activeBranch&&g(x.activeBranch,F,I,v),x.container=F},next(){return x.activeBranch&&P(x.activeBranch)},registerDep(F,I,v){const y=!!x.pendingBranch;y&&x.deps++;const E=F.vnode.el;F.asyncDep.catch(S=>{Us(S,F,0)}).then(S=>{if(F.isUnmounted||x.isUnmounted||x.pendingId!==F.suspenseId)return;F.asyncResolved=!0;const{vnode:A}=F;Il(F,S,!1),E&&(A.el=E);const T=!E&&F.subTree.el;I(F,A,k(E||F.subTree.el),E?null:P(F.subTree),x,o,v),T&&O(T),Ou(F,A.el),y&&--x.deps===0&&x.resolve()})},unmount(F,I){x.isUnmounted=!0,x.activeBranch&&m(x.activeBranch,n,F,I),x.pendingBranch&&m(x.pendingBranch,n,F,I)}};return x}function ZT(t,e,n,r,s,i,o,c,l){const u=e.suspense=Am(e,r,n,t.parentNode,document.createElement("div"),null,s,i,o,c,!0),h=l(t,u.pendingBranch=e.ssContent,n,u,i,o);return u.deps===0&&u.resolve(!1,!0),h}function ew(t){const{shapeFlag:e,children:n}=t,r=e&32;t.ssContent=Kf(r?n.default:n),t.ssFallback=r?Kf(n.fallback):qe(et)}function Kf(t){let e;if(fe(t)){const n=bs&&t._c;n&&(t._d=!1,rn()),t=t(),n&&(t._d=!0,e=Rt,Sm())}return ie(t)&&(t=KT(t)),t=Ot(t),e&&!t.dynamicChildren&&(t.dynamicChildren=e.filter(n=>n!==t)),t}function Rm(t,e){e&&e.pendingBranch?ie(t)?e.effects.push(...t):e.effects.push(t):gl(t)}function _s(t,e){t.activeBranch=e;const{vnode:n,parentComponent:r}=t;let s=e.el;for(;!s&&e.component;)e=e.component.subTree,s=e.el;n.el=s,r&&r.subTree===n&&(r.vnode.el=s,Ou(r,s))}function tw(t){const e=t.props&&t.props.suspensible;return e!=null&&e!==!1}const kt=Symbol.for("v-fgt"),xr=Symbol.for("v-txt"),et=Symbol.for("v-cmt"),Ei=Symbol.for("v-stc"),Ti=[];let Rt=null;function rn(t=!1){Ti.push(Rt=t?null:[])}function Sm(){Ti.pop(),Rt=Ti[Ti.length-1]||null}let bs=1;function zf(t){bs+=t,t<0&&Rt&&(Rt.hasOnce=!0)}function Pm(t){return t.dynamicChildren=bs>0?Rt||hs:null,Sm(),bs>0&&Rt&&Rt.push(t),t}function Cm(t,e,n,r,s,i){return Pm(Om(t,e,n,r,s,i,!0))}function Sr(t,e,n,r,s){return Pm(qe(t,e,n,r,s,!0))}function Li(t){return t?t.__v_isVNode===!0:!1}function Wt(t,e){return t.type===e.type&&t.key===e.key}const km=({key:t})=>t??null,Go=({ref:t,ref_key:e,ref_for:n})=>(typeof t=="number"&&(t=""+t),t!=null?Le(t)||tt(t)||fe(t)?{i:It,r:t,k:e,f:!!n}:t:null);function Om(t,e=null,n=null,r=0,s=null,i=t===kt?0:1,o=!1,c=!1){const l={__v_isVNode:!0,__v_skip:!0,type:t,props:e,key:e&&km(e),ref:e&&Go(e),scopeId:Hg,slotScopeIds:null,children:n,component:null,suspense:null,ssContent:null,ssFallback:null,dirs:null,transition:null,el:null,anchor:null,target:null,targetStart:null,targetAnchor:null,staticCount:0,shapeFlag:i,patchFlag:r,dynamicProps:s,dynamicChildren:null,appContext:null,ctx:It};return c?(Nu(l,n),i&128&&t.normalize(l)):n&&(l.shapeFlag|=Le(n)?8:16),bs>0&&!o&&Rt&&(l.patchFlag>0||i&6)&&l.patchFlag!==32&&Rt.push(l),l}const qe=nw;function nw(t,e=null,n=null,r=0,s=null,i=!1){if((!t||t===sm)&&(t=et),Li(t)){const c=Pn(t,e,!0);return n&&Nu(c,n),bs>0&&!i&&Rt&&(c.shapeFlag&6?Rt[Rt.indexOf(t)]=c:Rt.push(c)),c.patchFlag=-2,c}if(hw(t)&&(t=t.__vccOpts),e){e=Nm(e);let{class:c,style:l}=e;c&&!Le(c)&&(e.class=Ha(c)),ke(l)&&(Iu(l)&&!ie(l)&&(l=Xe({},l)),e.style=$a(l))}const o=Le(t)?1:ga(t)?128:Wg(t)?64:ke(t)?4:fe(t)?2:0;return Om(t,e,n,r,s,o,i,!0)}function Nm(t){return t?Iu(t)||hm(t)?Xe({},t):t:null}function Pn(t,e,n=!1,r=!1){const{props:s,ref:i,patchFlag:o,children:c,transition:l}=t,u=e?rw(s||{},e):s,h={__v_isVNode:!0,__v_skip:!0,type:t.type,props:u,key:u&&km(u),ref:e&&e.ref?n&&i?ie(i)?i.concat(Go(e)):[i,Go(e)]:Go(e):i,scopeId:t.scopeId,slotScopeIds:t.slotScopeIds,children:c,target:t.target,targetStart:t.targetStart,targetAnchor:t.targetAnchor,staticCount:t.staticCount,shapeFlag:t.shapeFlag,patchFlag:e&&t.type!==kt?o===-1?16:o|16:o,dynamicProps:t.dynamicProps,dynamicChildren:t.dynamicChildren,appContext:t.appContext,dirs:t.dirs,transition:l,component:t.component,suspense:t.suspense,ssContent:t.ssContent&&Pn(t.ssContent),ssFallback:t.ssFallback&&Pn(t.ssFallback),el:t.el,anchor:t.anchor,ctx:t.ctx,ce:t.ce};return l&&r&&Is(h,l.clone(h)),h}function Dm(t=" ",e=0){return qe(xr,null,t,e)}function rN(t,e){const n=qe(Ei,null,t);return n.staticCount=e,n}function sN(t="",e=!1){return e?(rn(),Sr(et,null,t)):qe(et,null,t)}function Ot(t){return t==null||typeof t=="boolean"?qe(et):ie(t)?qe(kt,null,t.slice()):typeof t=="object"?zn(t):qe(xr,null,String(t))}function zn(t){return t.el===null&&t.patchFlag!==-1||t.memo?t:Pn(t)}function Nu(t,e){let n=0;const{shapeFlag:r}=t;if(e==null)e=null;else if(ie(e))n=16;else if(typeof e=="object")if(r&65){const s=e.default;s&&(s._c&&(s._d=!1),Nu(t,s()),s._c&&(s._d=!0));return}else{n=32;const s=e._;!s&&!hm(e)?e._ctx=It:s===3&&It&&(It.slots._===1?e._=1:(e._=2,t.patchFlag|=1024))}else fe(e)?(e={default:e,_ctx:It},n=32):(e=String(e),r&64?(n=16,e=[Dm(e)]):n=8);t.children=e,t.shapeFlag|=n}function rw(...t){const e={};for(let n=0;n<t.length;n++){const r=t[n];for(const s in r)if(s==="class")e.class!==r.class&&(e.class=Ha([e.class,r.class]));else if(s==="style")e.style=$a([e.style,r.style]);else if(Yi(s)){const i=e[s],o=r[s];o&&i!==o&&!(ie(i)&&i.includes(o))&&(e[s]=i?[].concat(i,o):o)}else s!==""&&(e[s]=r[s])}return e}function At(t,e,n,r=null){Xt(t,e,7,[n,r])}const sw=am();let iw=0;function ow(t,e,n){const r=t.type,s=(e?e.appContext:t.appContext)||sw,i={uid:iw++,vnode:t,type:r,parent:e,appContext:s,root:null,next:null,subTree:null,effect:null,update:null,job:null,scope:new wg(!0),render:null,proxy:null,exposed:null,exposeProxy:null,withProxy:null,provides:e?e.provides:Object.create(s.provides),ids:e?e.ids:["",0,0],accessCache:null,renderCache:[],components:null,directives:null,propsOptions:dm(r,s),emitsOptions:Im(r,s),emit:null,emitted:null,propsDefaults:De,inheritAttrs:r.inheritAttrs,ctx:De,data:De,props:De,attrs:De,slots:De,refs:De,setupState:De,setupContext:null,suspense:n,suspenseId:n?n.pendingId:0,asyncDep:null,asyncResolved:!1,isMounted:!1,isUnmounted:!1,isDeactivated:!1,bc:null,c:null,bm:null,m:null,bu:null,u:null,um:null,bum:null,da:null,a:null,rtg:null,rtc:null,ec:null,sp:null};return i.ctx={_:i},i.root=e?e.root:i,i.emit=WT.bind(null,i),t.ce&&t.ce(i),i}let Ge=null;const Ja=()=>Ge||It;let ma,wl;{const t=yg(),e=(n,r)=>{let s;return(s=t[n])||(s=t[n]=[]),s.push(r),i=>{s.length>1?s.forEach(o=>o(i)):s[0](i)}};ma=e("__VUE_INSTANCE_SETTERS__",n=>Ge=n),wl=e("__VUE_SSR_SETTERS__",n=>no=n)}const to=t=>{const e=Ge;return ma(t),t.scope.on(),()=>{t.scope.off(),ma(e)}},Gf=()=>{Ge&&Ge.scope.off(),ma(null)};function Vm(t){return t.vnode.shapeFlag&4}let no=!1;function aw(t,e=!1,n=!1){e&&wl(e);const{props:r,children:s}=t.vnode,i=Vm(t);OT(t,r,i,e),xT(t,s,n);const o=i?cw(t,e):void 0;return e&&wl(!1),o}function cw(t,e){const n=t.type;t.accessCache=Object.create(null),t.proxy=new Proxy(t.ctx,IT);const{setup:r}=n;if(r){const s=t.setupContext=r.length>1?uw(t):null,i=to(t);fr();const o=Zi(r,t,0,[t.props,s]);if(dr(),i(),dg(o)){if(Nr(t)||Ru(t),o.then(Gf,Gf),e)return o.then(c=>{Il(t,c,e)}).catch(c=>{Us(c,t,0)});t.asyncDep=o}else Il(t,o,e)}else xm(t,e)}function Il(t,e,n){fe(e)?t.type.__ssrInlineRender?t.ssrRender=e:t.render=e:ke(e)&&(t.setupState=Ug(e)),xm(t,n)}let Qf;function xm(t,e,n){const r=t.type;if(!t.render){if(!e&&Qf&&!r.render){const s=r.template||Pu(t).template;if(s){const{isCustomElement:i,compilerOptions:o}=t.appContext.config,{delimiters:c,compilerOptions:l}=r,u=Xe(Xe({isCustomElement:i,delimiters:c},o),l);r.render=Qf(s,u)}}t.render=r.render||an}{const s=to(t);fr();try{bT(t)}finally{dr(),s()}}}const lw={get(t,e){return _t(t,"get",""),t[e]}};function uw(t){const e=n=>{t.exposed=n||{}};return{attrs:new Proxy(t.attrs,lw),slots:t.slots,emit:t.emit,expose:e}}function Xa(t){return t.exposed?t.exposeProxy||(t.exposeProxy=new Proxy(Ug(KE(t.exposed)),{get(e,n){if(n in e)return e[n];if(n in vi)return vi[n](t)},has(e,n){return n in e||n in vi}})):t.proxy}function bl(t,e=!0){return fe(t)?t.displayName||t.name:t.name||e&&t.__name}function hw(t){return fe(t)&&"__vccOpts"in t}const Kt=(t,e)=>eT(t,e,no);function sn(t,e,n){const r=arguments.length;return r===2?ke(e)&&!ie(e)?Li(e)?qe(t,null,[e]):qe(t,e):qe(t,null,e):(r>3?n=Array.prototype.slice.call(arguments,2):r===3&&Li(n)&&(n=[n]),qe(t,e,n))}const Mm="3.5.4";/**
* @vue/runtime-dom v3.5.4
* (c) 2018-present Yuxi (Evan) You and Vue contributors
* @license MIT
**/let Al;const Jf=typeof window<"u"&&window.trustedTypes;if(Jf)try{Al=Jf.createPolicy("vue",{createHTML:t=>t})}catch{}const Lm=Al?t=>Al.createHTML(t):t=>t,fw="http://www.w3.org/2000/svg",dw="http://www.w3.org/1998/Math/MathML",vn=typeof document<"u"?document:null,Xf=vn&&vn.createElement("template"),pw={insert:(t,e,n)=>{e.insertBefore(t,n||null)},remove:t=>{const e=t.parentNode;e&&e.removeChild(t)},createElement:(t,e,n,r)=>{const s=e==="svg"?vn.createElementNS(fw,t):e==="mathml"?vn.createElementNS(dw,t):n?vn.createElement(t,{is:n}):vn.createElement(t);return t==="select"&&r&&r.multiple!=null&&s.setAttribute("multiple",r.multiple),s},createText:t=>vn.createTextNode(t),createComment:t=>vn.createComment(t),setText:(t,e)=>{t.nodeValue=e},setElementText:(t,e)=>{t.textContent=e},parentNode:t=>t.parentNode,nextSibling:t=>t.nextSibling,querySelector:t=>vn.querySelector(t),setScopeId(t,e){t.setAttribute(e,"")},insertStaticContent(t,e,n,r,s,i){const o=n?n.previousSibling:e.lastChild;if(s&&(s===i||s.nextSibling))for(;e.insertBefore(s.cloneNode(!0),n),!(s===i||!(s=s.nextSibling)););else{Xf.innerHTML=Lm(r==="svg"?`<svg>${t}</svg>`:r==="mathml"?`<math>${t}</math>`:t);const c=Xf.content;if(r==="svg"||r==="mathml"){const l=c.firstChild;for(;l.firstChild;)c.appendChild(l.firstChild);c.removeChild(l)}e.insertBefore(c,n)}return[o?o.nextSibling:e.firstChild,n?n.previousSibling:e.lastChild]}},$n="transition",ci="animation",Fi=Symbol("_vtc"),Fm={name:String,type:String,css:{type:Boolean,default:!0},duration:[String,Number,Object],enterFromClass:String,enterActiveClass:String,enterToClass:String,appearFromClass:String,appearActiveClass:String,appearToClass:String,leaveFromClass:String,leaveActiveClass:String,leaveToClass:String},gw=Xe({},Kg,Fm),mw=t=>(t.displayName="Transition",t.props=gw,t),_w=mw((t,{slots:e})=>sn(cT,yw(t),e)),Tr=(t,e=[])=>{ie(t)?t.forEach(n=>n(...e)):t&&t(...e)},Yf=t=>t?ie(t)?t.some(e=>e.length>1):t.length>1:!1;function yw(t){const e={};for(const A in t)A in Fm||(e[A]=t[A]);if(t.css===!1)return e;const{name:n="v",type:r,duration:s,enterFromClass:i=`${n}-enter-from`,enterActiveClass:o=`${n}-enter-active`,enterToClass:c=`${n}-enter-to`,appearFromClass:l=i,appearActiveClass:u=o,appearToClass:h=c,leaveFromClass:d=`${n}-leave-from`,leaveActiveClass:g=`${n}-leave-active`,leaveToClass:m=`${n}-leave-to`}=t,P=vw(s),k=P&&P[0],O=P&&P[1],{onBeforeEnter:V,onEnter:N,onEnterCancelled:b,onLeave:C,onLeaveCancelled:x,onBeforeAppear:F=V,onAppear:I=N,onAppearCancelled:v=b}=e,y=(A,T,pe)=>{wr(A,T?h:c),wr(A,T?u:o),pe&&pe()},E=(A,T)=>{A._isLeaving=!1,wr(A,d),wr(A,m),wr(A,g),T&&T()},S=A=>(T,pe)=>{const Ee=A?I:N,Z=()=>y(T,A,pe);Tr(Ee,[T,Z]),Zf(()=>{wr(T,A?l:i),Hn(T,A?h:c),Yf(Ee)||ed(T,r,k,Z)})};return Xe(e,{onBeforeEnter(A){Tr(V,[A]),Hn(A,i),Hn(A,o)},onBeforeAppear(A){Tr(F,[A]),Hn(A,l),Hn(A,u)},onEnter:S(!1),onAppear:S(!0),onLeave(A,T){A._isLeaving=!0;const pe=()=>E(A,T);Hn(A,d),Hn(A,g),ww(),Zf(()=>{A._isLeaving&&(wr(A,d),Hn(A,m),Yf(C)||ed(A,r,O,pe))}),Tr(C,[A,pe])},onEnterCancelled(A){y(A,!1),Tr(b,[A])},onAppearCancelled(A){y(A,!0),Tr(v,[A])},onLeaveCancelled(A){E(A),Tr(x,[A])}})}function vw(t){if(t==null)return null;if(ke(t))return[Wc(t.enter),Wc(t.leave)];{const e=Wc(t);return[e,e]}}function Wc(t){return _g(t)}function Hn(t,e){e.split(/\s+/).forEach(n=>n&&t.classList.add(n)),(t[Fi]||(t[Fi]=new Set)).add(e)}function wr(t,e){e.split(/\s+/).forEach(r=>r&&t.classList.remove(r));const n=t[Fi];n&&(n.delete(e),n.size||(t[Fi]=void 0))}function Zf(t){requestAnimationFrame(()=>{requestAnimationFrame(t)})}let Ew=0;function ed(t,e,n,r){const s=t._endId=++Ew,i=()=>{s===t._endId&&r()};if(n)return setTimeout(i,n);const{type:o,timeout:c,propCount:l}=Tw(t,e);if(!o)return r();const u=o+"end";let h=0;const d=()=>{t.removeEventListener(u,g),i()},g=m=>{m.target===t&&++h>=l&&d()};setTimeout(()=>{h<l&&d()},c+1),t.addEventListener(u,g)}function Tw(t,e){const n=window.getComputedStyle(t),r=P=>(n[P]||"").split(", "),s=r(`${$n}Delay`),i=r(`${$n}Duration`),o=td(s,i),c=r(`${ci}Delay`),l=r(`${ci}Duration`),u=td(c,l);let h=null,d=0,g=0;e===$n?o>0&&(h=$n,d=o,g=i.length):e===ci?u>0&&(h=ci,d=u,g=l.length):(d=Math.max(o,u),h=d>0?o>u?$n:ci:null,g=h?h===$n?i.length:l.length:0);const m=h===$n&&/\b(transform|all)(,|$)/.test(r(`${$n}Property`).toString());return{type:h,timeout:d,propCount:g,hasTransform:m}}function td(t,e){for(;t.length<e.length;)t=t.concat(t);return Math.max(...e.map((n,r)=>nd(n)+nd(t[r])))}function nd(t){return t==="auto"?0:Number(t.slice(0,-1).replace(",","."))*1e3}function ww(){return document.body.offsetHeight}function Iw(t,e,n){const r=t[Fi];r&&(e=(e?[e,...r]:[...r]).join(" ")),e==null?t.removeAttribute("class"):n?t.setAttribute("class",e):t.className=e}const rd=Symbol("_vod"),bw=Symbol("_vsh"),Aw=Symbol(""),Rw=/(^|;)\s*display\s*:/;function Sw(t,e,n){const r=t.style,s=Le(n);let i=!1;if(n&&!s){if(e)if(Le(e))for(const o of e.split(";")){const c=o.slice(0,o.indexOf(":")).trim();n[c]==null&&Qo(r,c,"")}else for(const o in e)n[o]==null&&Qo(r,o,"");for(const o in n)o==="display"&&(i=!0),Qo(r,o,n[o])}else if(s){if(e!==n){const o=r[Aw];o&&(n+=";"+o),r.cssText=n,i=Rw.test(n)}}else e&&t.removeAttribute("style");rd in t&&(t[rd]=i?r.display:"",t[bw]&&(r.display="none"))}const sd=/\s*!important$/;function Qo(t,e,n){if(ie(n))n.forEach(r=>Qo(t,e,r));else if(n==null&&(n=""),e.startsWith("--"))t.setProperty(e,n);else{const r=Pw(t,e);sd.test(n)?t.setProperty(Hr(r),n.replace(sd,""),"important"):t[r]=n}}const id=["Webkit","Moz","ms"],Kc={};function Pw(t,e){const n=Kc[e];if(n)return n;let r=Jt(e);if(r!=="filter"&&r in t)return Kc[e]=r;r=ja(r);for(let s=0;s<id.length;s++){const i=id[s]+r;if(i in t)return Kc[e]=i}return e}const od="http://www.w3.org/1999/xlink";function ad(t,e,n,r,s,i=TE(e)){r&&e.startsWith("xlink:")?n==null?t.removeAttributeNS(od,e.slice(6,e.length)):t.setAttributeNS(od,e,n):n==null||i&&!vg(n)?t.removeAttribute(e):t.setAttribute(e,i?"":fn(n)?String(n):n)}function Cw(t,e,n,r){if(e==="innerHTML"||e==="textContent"){n!=null&&(t[e]=e==="innerHTML"?Lm(n):n);return}const s=t.tagName;if(e==="value"&&s!=="PROGRESS"&&!s.includes("-")){const o=s==="OPTION"?t.getAttribute("value")||"":t.value,c=n==null?t.type==="checkbox"?"on":"":String(n);(o!==c||!("_value"in t))&&(t.value=c),n==null&&t.removeAttribute(e),t._value=n;return}let i=!1;if(n===""||n==null){const o=typeof t[e];o==="boolean"?n=vg(n):n==null&&o==="string"?(n="",i=!0):o==="number"&&(n=0,i=!0)}try{t[e]=n}catch{}i&&t.removeAttribute(e)}function Tn(t,e,n,r){t.addEventListener(e,n,r)}function kw(t,e,n,r){t.removeEventListener(e,n,r)}const cd=Symbol("_vei");function Ow(t,e,n,r,s=null){const i=t[cd]||(t[cd]={}),o=i[e];if(r&&o)o.value=r;else{const[c,l]=Nw(e);if(r){const u=i[e]=xw(r,s);Tn(t,c,u,l)}else o&&(kw(t,c,o,l),i[e]=void 0)}}const ld=/(?:Once|Passive|Capture)$/;function Nw(t){let e;if(ld.test(t)){e={};let r;for(;r=t.match(ld);)t=t.slice(0,t.length-r[0].length),e[r[0].toLowerCase()]=!0}return[t[2]===":"?t.slice(3):Hr(t.slice(2)),e]}let zc=0;const Dw=Promise.resolve(),Vw=()=>zc||(Dw.then(()=>zc=0),zc=Date.now());function xw(t,e){const n=r=>{if(!r._vts)r._vts=Date.now();else if(r._vts<=n.attached)return;Xt(Mw(r,n.value),e,5,[r])};return n.value=t,n.attached=Vw(),n}function Mw(t,e){if(ie(e)){const n=t.stopImmediatePropagation;return t.stopImmediatePropagation=()=>{n.call(t),t._stopped=!0},e.map(r=>s=>!s._stopped&&r&&r(s))}else return e}const ud=t=>t.charCodeAt(0)===111&&t.charCodeAt(1)===110&&t.charCodeAt(2)>96&&t.charCodeAt(2)<123,Lw=(t,e,n,r,s,i)=>{const o=s==="svg";e==="class"?Iw(t,r,o):e==="style"?Sw(t,n,r):Yi(e)?fu(e)||Ow(t,e,n,r,i):(e[0]==="."?(e=e.slice(1),!0):e[0]==="^"?(e=e.slice(1),!1):Fw(t,e,r,o))?(Cw(t,e,r),!t.tagName.includes("-")&&(e==="value"||e==="checked"||e==="selected")&&ad(t,e,r,o,i,e!=="value")):(e==="true-value"?t._trueValue=r:e==="false-value"&&(t._falseValue=r),ad(t,e,r,o))};function Fw(t,e,n,r){if(r)return!!(e==="innerHTML"||e==="textContent"||e in t&&ud(e)&&fe(n));if(e==="spellcheck"||e==="draggable"||e==="translate"||e==="form"||e==="list"&&t.tagName==="INPUT"||e==="type"&&t.tagName==="TEXTAREA")return!1;if(e==="width"||e==="height"){const s=t.tagName;if(s==="IMG"||s==="VIDEO"||s==="CANVAS"||s==="SOURCE")return!1}return ud(e)&&Le(n)?!1:!!(e in t||t._isVueCE&&(/[A-Z]/.test(e)||!Le(n)))}const cr=t=>{const e=t.props["onUpdate:modelValue"]||!1;return ie(e)?n=>ps(e,n):e};function Uw(t){t.target.composing=!0}function hd(t){const e=t.target;e.composing&&(e.composing=!1,e.dispatchEvent(new Event("input")))}const Ft=Symbol("_assign"),fd={created(t,{modifiers:{lazy:e,trim:n,number:r}},s){t[Ft]=cr(s);const i=r||s.props&&s.props.type==="number";Tn(t,e?"change":"input",o=>{if(o.target.composing)return;let c=t.value;n&&(c=c.trim()),i&&(c=aa(c)),t[Ft](c)}),n&&Tn(t,"change",()=>{t.value=t.value.trim()}),e||(Tn(t,"compositionstart",Uw),Tn(t,"compositionend",hd),Tn(t,"change",hd))},mounted(t,{value:e}){t.value=e??""},beforeUpdate(t,{value:e,oldValue:n,modifiers:{lazy:r,trim:s,number:i}},o){if(t[Ft]=cr(o),t.composing)return;const c=(i||t.type==="number")&&!/^0\d/.test(t.value)?aa(t.value):t.value,l=e??"";c!==l&&(document.activeElement===t&&t.type!=="range"&&(r&&e===n||s&&t.value.trim()===l)||(t.value=l))}},Bw={deep:!0,created(t,e,n){t[Ft]=cr(n),Tn(t,"change",()=>{const r=t._modelValue,s=As(t),i=t.checked,o=t[Ft];if(ie(r)){const c=gu(r,s),l=c!==-1;if(i&&!l)o(r.concat(s));else if(!i&&l){const u=[...r];u.splice(c,1),o(u)}}else if(Ls(r)){const c=new Set(r);i?c.add(s):c.delete(s),o(c)}else o(Um(t,i))})},mounted:dd,beforeUpdate(t,e,n){t[Ft]=cr(n),dd(t,e,n)}};function dd(t,{value:e,oldValue:n},r){t._modelValue=e;let s;ie(e)?s=gu(e,r.props.value)>-1:Ls(e)?s=e.has(r.props.value):s=Lr(e,Um(t,!0)),t.checked!==s&&(t.checked=s)}const jw={created(t,{value:e},n){t.checked=Lr(e,n.props.value),t[Ft]=cr(n),Tn(t,"change",()=>{t[Ft](As(t))})},beforeUpdate(t,{value:e,oldValue:n},r){t[Ft]=cr(r),e!==n&&(t.checked=Lr(e,r.props.value))}},$w={deep:!0,created(t,{value:e,modifiers:{number:n}},r){const s=Ls(e);Tn(t,"change",()=>{const i=Array.prototype.filter.call(t.options,o=>o.selected).map(o=>n?aa(As(o)):As(o));t[Ft](t.multiple?s?new Set(i):i:i[0]),t._assigning=!0,Bs(()=>{t._assigning=!1})}),t[Ft]=cr(r)},mounted(t,{value:e,modifiers:{number:n}}){pd(t,e)},beforeUpdate(t,e,n){t[Ft]=cr(n)},updated(t,{value:e,modifiers:{number:n}}){t._assigning||pd(t,e)}};function pd(t,e,n){const r=t.multiple,s=ie(e);if(!(r&&!s&&!Ls(e))){for(let i=0,o=t.options.length;i<o;i++){const c=t.options[i],l=As(c);if(r)if(s){const u=typeof l;u==="string"||u==="number"?c.selected=e.some(h=>String(h)===String(l)):c.selected=gu(e,l)>-1}else c.selected=e.has(l);else if(Lr(As(c),e)){t.selectedIndex!==i&&(t.selectedIndex=i);return}}!r&&t.selectedIndex!==-1&&(t.selectedIndex=-1)}}function As(t){return"_value"in t?t._value:t.value}function Um(t,e){const n=e?"_trueValue":"_falseValue";return n in t?t[n]:e}const iN={created(t,e,n){Uo(t,e,n,null,"created")},mounted(t,e,n){Uo(t,e,n,null,"mounted")},beforeUpdate(t,e,n,r){Uo(t,e,n,r,"beforeUpdate")},updated(t,e,n,r){Uo(t,e,n,r,"updated")}};function Hw(t,e){switch(t){case"SELECT":return $w;case"TEXTAREA":return fd;default:switch(e){case"checkbox":return Bw;case"radio":return jw;default:return fd}}}function Uo(t,e,n,r,s){const o=Hw(t.tagName,n.props&&n.props.type)[s];o&&o(t,e,n,r)}const qw=["ctrl","shift","alt","meta"],Ww={stop:t=>t.stopPropagation(),prevent:t=>t.preventDefault(),self:t=>t.target!==t.currentTarget,ctrl:t=>!t.ctrlKey,shift:t=>!t.shiftKey,alt:t=>!t.altKey,meta:t=>!t.metaKey,left:t=>"button"in t&&t.button!==0,middle:t=>"button"in t&&t.button!==1,right:t=>"button"in t&&t.button!==2,exact:(t,e)=>qw.some(n=>t[`${n}Key`]&&!e.includes(n))},oN=(t,e)=>{const n=t._withMods||(t._withMods={}),r=e.join(".");return n[r]||(n[r]=(s,...i)=>{for(let o=0;o<e.length;o++){const c=Ww[e[o]];if(c&&c(s,e))return}return t(s,...i)})},Bm=Xe({patchProp:Lw},pw);let wi,gd=!1;function Kw(){return wi||(wi=LT(Bm))}function zw(){return wi=gd?wi:FT(Bm),gd=!0,wi}const Gw=(...t)=>{const e=Kw().createApp(...t),{mount:n}=e;return e.mount=r=>{const s=$m(r);if(!s)return;const i=e._component;!fe(i)&&!i.render&&!i.template&&(i.template=s.innerHTML),s.nodeType===1&&(s.textContent="");const o=n(s,!1,jm(s));return s instanceof Element&&(s.removeAttribute("v-cloak"),s.setAttribute("data-v-app","")),o},e},Qw=(...t)=>{const e=zw().createApp(...t),{mount:n}=e;return e.mount=r=>{const s=$m(r);if(s)return n(s,!0,jm(s))},e};function jm(t){if(t instanceof SVGElement)return"svg";if(typeof MathMLElement=="function"&&t instanceof MathMLElement)return"mathml"}function $m(t){return Le(t)?document.querySelector(t):t}const Jw=/"(?:_|\\u0{2}5[Ff]){2}(?:p|\\u0{2}70)(?:r|\\u0{2}72)(?:o|\\u0{2}6[Ff])(?:t|\\u0{2}74)(?:o|\\u0{2}6[Ff])(?:_|\\u0{2}5[Ff]){2}"\s*:/,Xw=/"(?:c|\\u0063)(?:o|\\u006[Ff])(?:n|\\u006[Ee])(?:s|\\u0073)(?:t|\\u0074)(?:r|\\u0072)(?:u|\\u0075)(?:c|\\u0063)(?:t|\\u0074)(?:o|\\u006[Ff])(?:r|\\u0072)"\s*:/,Yw=/^\s*["[{]|^\s*-?\d{1,16}(\.\d{1,17})?([Ee][+-]?\d+)?\s*$/;function Zw(t,e){if(t==="__proto__"||t==="constructor"&&e&&typeof e=="object"&&"prototype"in e){eI(t);return}return e}function eI(t){console.warn(`[destr] Dropping "${t}" key to prevent prototype pollution.`)}function _a(t,e={}){if(typeof t!="string")return t;const n=t.trim();if(t[0]==='"'&&t.endsWith('"')&&!t.includes("\\"))return n.slice(1,-1);if(n.length<=9){const r=n.toLowerCase();if(r==="true")return!0;if(r==="false")return!1;if(r==="undefined")return;if(r==="null")return null;if(r==="nan")return Number.NaN;if(r==="infinity")return Number.POSITIVE_INFINITY;if(r==="-infinity")return Number.NEGATIVE_INFINITY}if(!Yw.test(t)){if(e.strict)throw new SyntaxError("[destr] Invalid JSON");return t}try{if(Jw.test(t)||Xw.test(t)){if(e.strict)throw new Error("[destr] Possible prototype pollution");return JSON.parse(t,Zw)}return JSON.parse(t)}catch(r){if(e.strict)throw r;return t}}const tI=/#/g,nI=/&/g,rI=/\//g,sI=/=/g,Du=/\+/g,iI=/%5e/gi,oI=/%60/gi,aI=/%7c/gi,cI=/%20/gi;function lI(t){return encodeURI(""+t).replace(aI,"|")}function Rl(t){return lI(typeof t=="string"?t:JSON.stringify(t)).replace(Du,"%2B").replace(cI,"+").replace(tI,"%23").replace(nI,"%26").replace(oI,"`").replace(iI,"^").replace(rI,"%2F")}function Gc(t){return Rl(t).replace(sI,"%3D")}function ya(t=""){try{return decodeURIComponent(""+t)}catch{return""+t}}function uI(t){return ya(t.replace(Du," "))}function hI(t){return ya(t.replace(Du," "))}function fI(t=""){const e={};t[0]==="?"&&(t=t.slice(1));for(const n of t.split("&")){const r=n.match(/([^=]+)=?(.*)/)||[];if(r.length<2)continue;const s=uI(r[1]);if(s==="__proto__"||s==="constructor")continue;const i=hI(r[2]||"");e[s]===void 0?e[s]=i:Array.isArray(e[s])?e[s].push(i):e[s]=[e[s],i]}return e}function dI(t,e){return(typeof e=="number"||typeof e=="boolean")&&(e=String(e)),e?Array.isArray(e)?e.map(n=>`${Gc(t)}=${Rl(n)}`).join("&"):`${Gc(t)}=${Rl(e)}`:Gc(t)}function pI(t){return Object.keys(t).filter(e=>t[e]!==void 0).map(e=>dI(e,t[e])).filter(Boolean).join("&")}const gI=/^[\s\w\0+.-]{2,}:([/\\]{1,2})/,mI=/^[\s\w\0+.-]{2,}:([/\\]{2})?/,_I=/^([/\\]\s*){2,}[^/\\]/,yI=/^[\s\0]*(blob|data|javascript|vbscript):$/i,vI=/\/$|\/\?|\/#/,EI=/^\.?\//;function qr(t,e={}){return typeof e=="boolean"&&(e={acceptRelative:e}),e.strict?gI.test(t):mI.test(t)||(e.acceptRelative?_I.test(t):!1)}function TI(t){return!!t&&yI.test(t)}function Sl(t="",e){return e?vI.test(t):t.endsWith("/")}function Vu(t="",e){if(!e)return(Sl(t)?t.slice(0,-1):t)||"/";if(!Sl(t,!0))return t||"/";let n=t,r="";const s=t.indexOf("#");s>=0&&(n=t.slice(0,s),r=t.slice(s));const[i,...o]=n.split("?");return((i.endsWith("/")?i.slice(0,-1):i)||"/")+(o.length>0?`?${o.join("?")}`:"")+r}function Pl(t="",e){if(!e)return t.endsWith("/")?t:t+"/";if(Sl(t,!0))return t||"/";let n=t,r="";const s=t.indexOf("#");if(s>=0&&(n=t.slice(0,s),r=t.slice(s),!n))return r;const[i,...o]=n.split("?");return i+"/"+(o.length>0?`?${o.join("?")}`:"")+r}function wI(t=""){return t.startsWith("/")}function md(t=""){return wI(t)?t:"/"+t}function II(t,e){if(qm(e)||qr(t))return t;const n=Vu(e);return t.startsWith(n)?t:xu(n,t)}function _d(t,e){if(qm(e))return t;const n=Vu(e);if(!t.startsWith(n))return t;const r=t.slice(n.length);return r[0]==="/"?r:"/"+r}function Hm(t,e){const n=RI(t),r={...fI(n.search),...e};return n.search=pI(r),SI(n)}function qm(t){return!t||t==="/"}function bI(t){return t&&t!=="/"}function xu(t,...e){let n=t||"";for(const r of e.filter(s=>bI(s)))if(n){const s=r.replace(EI,"");n=Pl(n)+s}else n=r;return n}function Wm(...t){var o,c,l,u;const e=/\/(?!\/)/,n=t.filter(Boolean),r=[];let s=0;for(const h of n)if(!(!h||h==="/")){for(const[d,g]of h.split(e).entries())if(!(!g||g===".")){if(g===".."){if(r.length===1&&qr(r[0]))continue;r.pop(),s--;continue}if(d===1&&((o=r[r.length-1])!=null&&o.endsWith(":/"))){r[r.length-1]+="/"+g;continue}r.push(g),s++}}let i=r.join("/");return s>=0?(c=n[0])!=null&&c.startsWith("/")&&!i.startsWith("/")?i="/"+i:(l=n[0])!=null&&l.startsWith("./")&&!i.startsWith("./")&&(i="./"+i):i="../".repeat(-1*s)+i,(u=n[n.length-1])!=null&&u.endsWith("/")&&!i.endsWith("/")&&(i+="/"),i}function AI(t,e,n={}){return n.trailingSlash||(t=Pl(t),e=Pl(e)),n.leadingSlash||(t=md(t),e=md(e)),n.encoding||(t=ya(t),e=ya(e)),t===e}const Km=Symbol.for("ufo:protocolRelative");function RI(t="",e){const n=t.match(/^[\s\0]*(blob:|data:|javascript:|vbscript:)(.*)/i);if(n){const[,d,g=""]=n;return{protocol:d.toLowerCase(),pathname:g,href:d+g,auth:"",host:"",search:"",hash:""}}if(!qr(t,{acceptRelative:!0}))return yd(t);const[,r="",s,i=""]=t.replace(/\\/g,"/").match(/^[\s\0]*([\w+.-]{2,}:)?\/\/([^/@]+@)?(.*)/)||[];let[,o="",c=""]=i.match(/([^#/?]*)(.*)?/)||[];r==="file:"&&(c=c.replace(/\/(?=[A-Za-z]:)/,""));const{pathname:l,search:u,hash:h}=yd(c);return{protocol:r.toLowerCase(),auth:s?s.slice(0,Math.max(0,s.length-1)):"",host:o,pathname:l,search:u,hash:h,[Km]:!r}}function yd(t=""){const[e="",n="",r=""]=(t.match(/([^#?]*)(\?[^#]*)?(#.*)?/)||[]).splice(1);return{pathname:e,search:n,hash:r}}function SI(t){const e=t.pathname||"",n=t.search?(t.search.startsWith("?")?"":"?")+t.search:"",r=t.hash||"",s=t.auth?t.auth+"@":"",i=t.host||"";return(t.protocol||t[Km]?(t.protocol||"")+"//":"")+s+i+e+n+r}class PI extends Error{constructor(e,n){super(e,n),this.name="FetchError",n!=null&&n.cause&&!this.cause&&(this.cause=n.cause)}}function CI(t){var l,u,h,d,g;const e=((l=t.error)==null?void 0:l.message)||((u=t.error)==null?void 0:u.toString())||"",n=((h=t.request)==null?void 0:h.method)||((d=t.options)==null?void 0:d.method)||"GET",r=((g=t.request)==null?void 0:g.url)||String(t.request)||"/",s=`[${n}] ${JSON.stringify(r)}`,i=t.response?`${t.response.status} ${t.response.statusText}`:"<no response>",o=`${s}: ${i}${e?` ${e}`:""}`,c=new PI(o,t.error?{cause:t.error}:void 0);for(const m of["request","options","response"])Object.defineProperty(c,m,{get(){return t[m]}});for(const[m,P]of[["data","_data"],["status","status"],["statusCode","status"],["statusText","statusText"],["statusMessage","statusText"]])Object.defineProperty(c,m,{get(){return t.response&&t.response[P]}});return c}const kI=new Set(Object.freeze(["PATCH","POST","PUT","DELETE"]));function vd(t="GET"){return kI.has(t.toUpperCase())}function OI(t){if(t===void 0)return!1;const e=typeof t;return e==="string"||e==="number"||e==="boolean"||e===null?!0:e!=="object"?!1:Array.isArray(t)?!0:t.buffer?!1:t.constructor&&t.constructor.name==="Object"||typeof t.toJSON=="function"}const NI=new Set(["image/svg","application/xml","application/xhtml","application/html"]),DI=/^application\/(?:[\w!#$%&*.^`~-]*\+)?json(;.+)?$/i;function VI(t=""){if(!t)return"json";const e=t.split(";").shift()||"";return DI.test(e)?"json":NI.has(e)||e.startsWith("text/")?"text":"blob"}function xI(t,e,n=globalThis.Headers){const r={...e,...t};if(e!=null&&e.params&&(t!=null&&t.params)&&(r.params={...e==null?void 0:e.params,...t==null?void 0:t.params}),e!=null&&e.query&&(t!=null&&t.query)&&(r.query={...e==null?void 0:e.query,...t==null?void 0:t.query}),e!=null&&e.headers&&(t!=null&&t.headers)){r.headers=new n((e==null?void 0:e.headers)||{});for(const[s,i]of new n((t==null?void 0:t.headers)||{}))r.headers.set(s,i)}return r}const MI=new Set([408,409,425,429,500,502,503,504]),LI=new Set([101,204,205,304]);function zm(t={}){const{fetch:e=globalThis.fetch,Headers:n=globalThis.Headers,AbortController:r=globalThis.AbortController}=t;async function s(c){const l=c.error&&c.error.name==="AbortError"&&!c.options.timeout||!1;if(c.options.retry!==!1&&!l){let h;typeof c.options.retry=="number"?h=c.options.retry:h=vd(c.options.method)?0:1;const d=c.response&&c.response.status||500;if(h>0&&(Array.isArray(c.options.retryStatusCodes)?c.options.retryStatusCodes.includes(d):MI.has(d))){const g=c.options.retryDelay||0;return g>0&&await new Promise(m=>setTimeout(m,g)),i(c.request,{...c.options,retry:h-1})}}const u=CI(c);throw Error.captureStackTrace&&Error.captureStackTrace(u,i),u}const i=async function(l,u={}){var m;const h={request:l,options:xI(u,t.defaults,n),response:void 0,error:void 0};h.options.method=(m=h.options.method)==null?void 0:m.toUpperCase(),h.options.onRequest&&await h.options.onRequest(h),typeof h.request=="string"&&(h.options.baseURL&&(h.request=II(h.request,h.options.baseURL)),(h.options.query||h.options.params)&&(h.request=Hm(h.request,{...h.options.params,...h.options.query}))),h.options.body&&vd(h.options.method)&&(OI(h.options.body)?(h.options.body=typeof h.options.body=="string"?h.options.body:JSON.stringify(h.options.body),h.options.headers=new n(h.options.headers||{}),h.options.headers.has("content-type")||h.options.headers.set("content-type","application/json"),h.options.headers.has("accept")||h.options.headers.set("accept","application/json")):("pipeTo"in h.options.body&&typeof h.options.body.pipeTo=="function"||typeof h.options.body.pipe=="function")&&("duplex"in h.options||(h.options.duplex="half")));let d;if(!h.options.signal&&h.options.timeout){const P=new r;d=setTimeout(()=>P.abort(),h.options.timeout),h.options.signal=P.signal}try{h.response=await e(h.request,h.options)}catch(P){return h.error=P,h.options.onRequestError&&await h.options.onRequestError(h),await s(h)}finally{d&&clearTimeout(d)}if(h.response.body&&!LI.has(h.response.status)&&h.options.method!=="HEAD"){const P=(h.options.parseResponse?"json":h.options.responseType)||VI(h.response.headers.get("content-type")||"");switch(P){case"json":{const k=await h.response.text(),O=h.options.parseResponse||_a;h.response._data=O(k);break}case"stream":{h.response._data=h.response.body;break}default:h.response._data=await h.response[P]()}}return h.options.onResponse&&await h.options.onResponse(h),!h.options.ignoreResponseError&&h.response.status>=400&&h.response.status<600?(h.options.onResponseError&&await h.options.onResponseError(h),await s(h)):h.response},o=async function(l,u){return(await i(l,u))._data};return o.raw=i,o.native=(...c)=>e(...c),o.create=(c={})=>zm({...t,defaults:{...t.defaults,...c}}),o}const Mu=function(){if(typeof globalThis<"u")return globalThis;if(typeof self<"u")return self;if(typeof window<"u")return window;if(typeof global<"u")return global;throw new Error("unable to locate global object")}(),FI=Mu.fetch||(()=>Promise.reject(new Error("[ofetch] global.fetch is not supported!"))),UI=Mu.Headers,BI=Mu.AbortController,jI=zm({fetch:FI,Headers:UI,AbortController:BI}),$I=jI,HI=()=>{var t;return((t=window==null?void 0:window.__NUXT__)==null?void 0:t.config)||{}},va=HI().app,qI=()=>va.baseURL,WI=()=>va.buildAssetsDir,Lu=(...t)=>Wm(Gm(),WI(),...t),Gm=(...t)=>{const e=va.cdnURL||va.baseURL;return t.length?Wm(e,...t):e};globalThis.__buildAssetsURL=Lu,globalThis.__publicAssetsURL=Gm;globalThis.$fetch||(globalThis.$fetch=$I.create({baseURL:qI()}));function Cl(t,e={},n){for(const r in t){const s=t[r],i=n?`${n}:${r}`:r;typeof s=="object"&&s!==null?Cl(s,e,i):typeof s=="function"&&(e[i]=s)}return e}const KI={run:t=>t()},zI=()=>KI,Qm=typeof console.createTask<"u"?console.createTask:zI;function GI(t,e){const n=e.shift(),r=Qm(n);return t.reduce((s,i)=>s.then(()=>r.run(()=>i(...e))),Promise.resolve())}function QI(t,e){const n=e.shift(),r=Qm(n);return Promise.all(t.map(s=>r.run(()=>s(...e))))}function Qc(t,e){for(const n of[...t])n(e)}class JI{constructor(){this._hooks={},this._before=void 0,this._after=void 0,this._deprecatedMessages=void 0,this._deprecatedHooks={},this.hook=this.hook.bind(this),this.callHook=this.callHook.bind(this),this.callHookWith=this.callHookWith.bind(this)}hook(e,n,r={}){if(!e||typeof n!="function")return()=>{};const s=e;let i;for(;this._deprecatedHooks[e];)i=this._deprecatedHooks[e],e=i.to;if(i&&!r.allowDeprecated){let o=i.message;o||(o=`${s} hook has been deprecated`+(i.to?`, please use ${i.to}`:"")),this._deprecatedMessages||(this._deprecatedMessages=new Set),this._deprecatedMessages.has(o)||(console.warn(o),this._deprecatedMessages.add(o))}if(!n.name)try{Object.defineProperty(n,"name",{get:()=>"_"+e.replace(/\W+/g,"_")+"_hook_cb",configurable:!0})}catch{}return this._hooks[e]=this._hooks[e]||[],this._hooks[e].push(n),()=>{n&&(this.removeHook(e,n),n=void 0)}}hookOnce(e,n){let r,s=(...i)=>(typeof r=="function"&&r(),r=void 0,s=void 0,n(...i));return r=this.hook(e,s),r}removeHook(e,n){if(this._hooks[e]){const r=this._hooks[e].indexOf(n);r!==-1&&this._hooks[e].splice(r,1),this._hooks[e].length===0&&delete this._hooks[e]}}deprecateHook(e,n){this._deprecatedHooks[e]=typeof n=="string"?{to:n}:n;const r=this._hooks[e]||[];delete this._hooks[e];for(const s of r)this.hook(e,s)}deprecateHooks(e){Object.assign(this._deprecatedHooks,e);for(const n in e)this.deprecateHook(n,e[n])}addHooks(e){const n=Cl(e),r=Object.keys(n).map(s=>this.hook(s,n[s]));return()=>{for(const s of r.splice(0,r.length))s()}}removeHooks(e){const n=Cl(e);for(const r in n)this.removeHook(r,n[r])}removeAllHooks(){for(const e in this._hooks)delete this._hooks[e]}callHook(e,...n){return n.unshift(e),this.callHookWith(GI,e,...n)}callHookParallel(e,...n){return n.unshift(e),this.callHookWith(QI,e,...n)}callHookWith(e,n,...r){const s=this._before||this._after?{name:n,args:r,context:{}}:void 0;this._before&&Qc(this._before,s);const i=e(n in this._hooks?[...this._hooks[n]]:[],r);return i instanceof Promise?i.finally(()=>{this._after&&s&&Qc(this._after,s)}):(this._after&&s&&Qc(this._after,s),i)}beforeEach(e){return this._before=this._before||[],this._before.push(e),()=>{if(this._before!==void 0){const n=this._before.indexOf(e);n!==-1&&this._before.splice(n,1)}}}afterEach(e){return this._after=this._after||[],this._after.push(e),()=>{if(this._after!==void 0){const n=this._after.indexOf(e);n!==-1&&this._after.splice(n,1)}}}}function Jm(){return new JI}function XI(t={}){let e,n=!1;const r=o=>{if(e&&e!==o)throw new Error("Context conflict")};let s;if(t.asyncContext){const o=t.AsyncLocalStorage||globalThis.AsyncLocalStorage;o?s=new o:console.warn("[unctx] `AsyncLocalStorage` is not provided.")}const i=()=>{if(s&&e===void 0){const o=s.getStore();if(o!==void 0)return o}return e};return{use:()=>{const o=i();if(o===void 0)throw new Error("Context is not available");return o},tryUse:()=>i(),set:(o,c)=>{c||r(o),e=o,n=!0},unset:()=>{e=void 0,n=!1},call:(o,c)=>{r(o),e=o;try{return s?s.run(o,c):c()}finally{n||(e=void 0)}},async callAsync(o,c){e=o;const l=()=>{e=o},u=()=>e===o?l:void 0;kl.add(u);try{const h=s?s.run(o,c):c();return n||(e=void 0),await h}finally{kl.delete(u)}}}}function YI(t={}){const e={};return{get(n,r={}){return e[n]||(e[n]=XI({...t,...r})),e[n],e[n]}}}const Ea=typeof globalThis<"u"?globalThis:typeof self<"u"?self:typeof global<"u"?global:typeof window<"u"?window:{},Ed="__unctx__",ZI=Ea[Ed]||(Ea[Ed]=YI()),e0=(t,e={})=>ZI.get(t,e),Td="__unctx_async_handlers__",kl=Ea[Td]||(Ea[Td]=new Set);function ys(t){const e=[];for(const s of kl){const i=s();i&&e.push(i)}const n=()=>{for(const s of e)s()};let r=t();return r&&typeof r=="object"&&"catch"in r&&(r=r.catch(s=>{throw n(),s})),[r,n]}const Ol=!1,t0=!1,aN={componentName:"NuxtLink",prefetch:!0,prefetchOn:{visibility:!0}},n0=null,r0="#__nuxt",Xm="nuxt-app",wd=36e5;function Ym(t=Xm){return e0(t,{asyncContext:!1})}const s0="__nuxt_plugin";function i0(t){var s;let e=0;const n={_id:t.id||Xm||"nuxt-app",_scope:bE(),provide:void 0,globalName:"nuxt",versions:{get nuxt(){return"3.13.1"},get vue(){return n.vueApp.version}},payload:wn({...((s=t.ssrContext)==null?void 0:s.payload)||{},data:wn({}),state:pr({}),once:new Set,_errors:wn({})}),static:{data:{}},runWithContext(i){return n._scope.active&&!Ig()?n._scope.run(()=>Id(n,i)):Id(n,i)},isHydrating:!0,deferHydration(){if(!n.isHydrating)return()=>{};e++;let i=!1;return()=>{if(!i&&(i=!0,e--,e===0))return n.isHydrating=!1,n.callHook("app:suspense:resolve")}},_asyncDataPromises:{},_asyncData:wn({}),_payloadRevivers:{},...t};{const i=window.__NUXT__;if(i)for(const o in i)switch(o){case"data":case"state":case"_errors":Object.assign(n.payload[o],i[o]);break;default:n.payload[o]=i[o]}}n.hooks=Jm(),n.hook=n.hooks.hook,n.callHook=n.hooks.callHook,n.provide=(i,o)=>{const c="$"+i;Bo(n,c,o),Bo(n.vueApp.config.globalProperties,c,o)},Bo(n.vueApp,"$nuxt",n),Bo(n.vueApp.config.globalProperties,"$nuxt",n);{window.addEventListener("nuxt.preloadError",o=>{n.callHook("app:chunkError",{error:o.payload})}),window.useNuxtApp=window.useNuxtApp||ze;const i=n.hook("app:error",(...o)=>{console.error("[nuxt] error caught during app initialization",...o)});n.hook("app:mounted",i)}const r=n.payload.config;return n.provide("config",r),n}function o0(t,e){e.hooks&&t.hooks.addHooks(e.hooks)}async function a0(t,e){if(typeof e=="function"){const{provide:n}=await t.runWithContext(()=>e(t))||{};if(n&&typeof n=="object")for(const r in n)t.provide(r,n[r])}}async function c0(t,e){const n=[],r=[],s=[],i=[];let o=0;async function c(l){var h;const u=((h=l.dependsOn)==null?void 0:h.filter(d=>e.some(g=>g._name===d)&&!n.includes(d)))??[];if(u.length>0)r.push([new Set(u),l]);else{const d=a0(t,l).then(async()=>{l._name&&(n.push(l._name),await Promise.all(r.map(async([g,m])=>{g.has(l._name)&&(g.delete(l._name),g.size===0&&(o++,await c(m)))})))});l.parallel?s.push(d.catch(g=>i.push(g))):await d}}for(const l of e)o0(t,l);for(const l of e)await c(l);if(await Promise.all(s),o)for(let l=0;l<o;l++)await Promise.all(s);if(i.length)throw i[0]}function Vn(t){if(typeof t=="function")return t;const e=t._name||t.name;return delete t.name,Object.assign(t.setup||(()=>{}),t,{[s0]:!0,_name:e})}function Id(t,e,n){const r=()=>e();return Ym(t._id).set(t),t.vueApp.runWithContext(r)}function l0(t){var n;let e;return cm()&&(e=(n=Ja())==null?void 0:n.appContext.app.$nuxt),e=e||Ym(t).tryUse(),e||null}function ze(t){const e=l0(t);if(!e)throw new Error("[nuxt] instance unavailable");return e}function Ya(t){return ze().$config}function Bo(t,e,n){Object.defineProperty(t,e,{get:()=>n})}function u0(t,e){return{ctx:{table:t},matchAll:n=>e_(n,t)}}function Zm(t){const e={};for(const n in t)e[n]=n==="dynamic"?new Map(Object.entries(t[n]).map(([r,s])=>[r,Zm(s)])):new Map(Object.entries(t[n]));return e}function h0(t){return u0(Zm(t))}function e_(t,e,n){t.endsWith("/")&&(t=t.slice(0,-1)||"/");const r=[];for(const[i,o]of bd(e.wildcard))(t===i||t.startsWith(i+"/"))&&r.push(o);for(const[i,o]of bd(e.dynamic))if(t.startsWith(i+"/")){const c="/"+t.slice(i.length).split("/").splice(2).join("/");r.push(...e_(c,o))}const s=e.static.get(t);return s&&r.push(s),r.filter(Boolean)}function bd(t){return[...t.entries()].sort((e,n)=>e[0].length-n[0].length)}function Jc(t){if(t===null||typeof t!="object")return!1;const e=Object.getPrototypeOf(t);return e!==null&&e!==Object.prototype&&Object.getPrototypeOf(e)!==null||Symbol.iterator in t?!1:Symbol.toStringTag in t?Object.prototype.toString.call(t)==="[object Module]":!0}function Nl(t,e,n=".",r){if(!Jc(e))return Nl(t,{},n,r);const s=Object.assign({},e);for(const i in t){if(i==="__proto__"||i==="constructor")continue;const o=t[i];o!=null&&(r&&r(s,i,o,n)||(Array.isArray(o)&&Array.isArray(s[i])?s[i]=[...o,...s[i]]:Jc(o)&&Jc(s[i])?s[i]=Nl(o,s[i],(n?`${n}.`:"")+i.toString(),r):s[i]=o))}return s}function f0(t){return(...e)=>e.reduce((n,r)=>Nl(n,r,"",t),{})}const t_=f0();function d0(t,e){try{return e in t}catch{return!1}}var p0=Object.defineProperty,g0=(t,e,n)=>e in t?p0(t,e,{enumerable:!0,configurable:!0,writable:!0,value:n}):t[e]=n,Ar=(t,e,n)=>(g0(t,typeof e!="symbol"?e+"":e,n),n);class Dl extends Error{constructor(e,n={}){super(e,n),Ar(this,"statusCode",500),Ar(this,"fatal",!1),Ar(this,"unhandled",!1),Ar(this,"statusMessage"),Ar(this,"data"),Ar(this,"cause"),n.cause&&!this.cause&&(this.cause=n.cause)}toJSON(){const e={message:this.message,statusCode:xl(this.statusCode,500)};return this.statusMessage&&(e.statusMessage=n_(this.statusMessage)),this.data!==void 0&&(e.data=this.data),e}}Ar(Dl,"__h3_error__",!0);function Vl(t){if(typeof t=="string")return new Dl(t);if(m0(t))return t;const e=new Dl(t.message??t.statusMessage??"",{cause:t.cause||t});if(d0(t,"stack"))try{Object.defineProperty(e,"stack",{get(){return t.stack}})}catch{try{e.stack=t.stack}catch{}}if(t.data&&(e.data=t.data),t.statusCode?e.statusCode=xl(t.statusCode,e.statusCode):t.status&&(e.statusCode=xl(t.status,e.statusCode)),t.statusMessage?e.statusMessage=t.statusMessage:t.statusText&&(e.statusMessage=t.statusText),e.statusMessage){const n=e.statusMessage;n_(e.statusMessage)!==n&&console.warn("[h3] Please prefer using `message` for longer error messages instead of `statusMessage`. In the future, `statusMessage` will be sanitized by default.")}return t.fatal!==void 0&&(e.fatal=t.fatal),t.unhandled!==void 0&&(e.unhandled=t.unhandled),e}function m0(t){var e;return((e=t==null?void 0:t.constructor)==null?void 0:e.__h3_error__)===!0}const _0=/[^\u0009\u0020-\u007E]/g;function n_(t=""){return t.replace(_0,"")}function xl(t,e=200){return!t||(typeof t=="string"&&(t=Number.parseInt(t,10)),t<100||t>999)?e:t}const y0=Symbol("layout-meta"),Za=Symbol("route"),Yt=()=>{var t;return(t=ze())==null?void 0:t.$router},r_=()=>cm()?St(Za,ze()._route):ze()._route;const v0=()=>{try{if(ze()._processingMiddleware)return!0}catch{return!1}return!1},cN=(t,e)=>{t||(t="/");const n=typeof t=="string"?t:"path"in t?E0(t):Yt().resolve(t).href;if(e!=null&&e.open){const{target:l="_blank",windowFeatures:u={}}=e.open,h=Object.entries(u).filter(([d,g])=>g!==void 0).map(([d,g])=>`${d.toLowerCase()}=${g}`).join(", ");return open(n,l,h),Promise.resolve()}const r=qr(n,{acceptRelative:!0}),s=(e==null?void 0:e.external)||r;if(s){if(!(e!=null&&e.external))throw new Error("Navigating to an external URL is not allowed by default. Use `navigateTo(url, { external: true })`.");const{protocol:l}=new URL(n,window.location.href);if(l&&TI(l))throw new Error(`Cannot navigate to a URL with '${l}' protocol.`)}const i=v0();if(!s&&i)return t;const o=Yt(),c=ze();return s?(c._scope.stop(),e!=null&&e.replace?location.replace(n):location.href=n,i?c.isHydrating?new Promise(()=>{}):!1:Promise.resolve()):e!=null&&e.replace?o.replace(t):o.push(t)};function E0(t){return Hm(t.path||"",t.query||{})+(t.hash||"")}const s_="__nuxt_error",ec=()=>XE(ze().payload,"error"),ls=t=>{const e=tc(t);try{const n=ze(),r=ec();n.hooks.callHook("app:error",e),r.value=r.value||e}catch{throw e}return e},T0=async(t={})=>{const e=ze(),n=ec();e.callHook("app:error:cleared",t),t.redirect&&await Yt().replace(t.redirect),n.value=n0},w0=t=>!!t&&typeof t=="object"&&s_ in t,tc=t=>{const e=Vl(t);return Object.defineProperty(e,s_,{value:!0,configurable:!1,writable:!1}),e},I0=-1,b0=-2,A0=-3,R0=-4,S0=-5,P0=-6;function C0(t,e){return k0(JSON.parse(t),e)}function k0(t,e){if(typeof t=="number")return s(t,!0);if(!Array.isArray(t)||t.length===0)throw new Error("Invalid input");const n=t,r=Array(n.length);function s(i,o=!1){if(i===I0)return;if(i===A0)return NaN;if(i===R0)return 1/0;if(i===S0)return-1/0;if(i===P0)return-0;if(o)throw new Error("Invalid input");if(i in r)return r[i];const c=n[i];if(!c||typeof c!="object")r[i]=c;else if(Array.isArray(c))if(typeof c[0]=="string"){const l=c[0],u=e==null?void 0:e[l];if(u)return r[i]=u(s(c[1]));switch(l){case"Date":r[i]=new Date(c[1]);break;case"Set":const h=new Set;r[i]=h;for(let m=1;m<c.length;m+=1)h.add(s(c[m]));break;case"Map":const d=new Map;r[i]=d;for(let m=1;m<c.length;m+=2)d.set(s(c[m]),s(c[m+1]));break;case"RegExp":r[i]=new RegExp(c[1],c[2]);break;case"Object":r[i]=Object(c[1]);break;case"BigInt":r[i]=BigInt(c[1]);break;case"null":const g=Object.create(null);r[i]=g;for(let m=1;m<c.length;m+=2)g[c[m]]=s(c[m+1]);break;default:throw new Error(`Unknown type ${l}`)}}else{const l=new Array(c.length);r[i]=l;for(let u=0;u<c.length;u+=1){const h=c[u];h!==b0&&(l[u]=s(h))}}else{const l={};r[i]=l;for(const u in c){const h=c[u];l[u]=s(h)}}return r[i]}return s(0)}const O0=new Set(["title","titleTemplate","script","style","noscript"]),Jo=new Set(["base","meta","link","style","script","noscript"]),N0=new Set(["title","titleTemplate","templateParams","base","htmlAttrs","bodyAttrs","meta","link","style","script","noscript"]),D0=new Set(["base","title","titleTemplate","bodyAttrs","htmlAttrs","templateParams"]),i_=new Set(["tagPosition","tagPriority","tagDuplicateStrategy","children","innerHTML","textContent","processTemplateParams"]),V0=typeof window<"u";function Ta(t){let e=9;for(let n=0;n<t.length;)e=Math.imul(e^t.charCodeAt(n++),9**9);return((e^e>>>9)+65536).toString(16).substring(1,8).toLowerCase()}function Ml(t){if(t._h)return t._h;if(t._d)return Ta(t._d);let e=`${t.tag}:${t.textContent||t.innerHTML||""}:`;for(const n in t.props)e+=`${n}:${String(t.props[n])},`;return Ta(e)}function x0(t,e){return t instanceof Promise?t.then(e):e(t)}function Ll(t,e,n,r){const s=r||a_(typeof e=="object"&&typeof e!="function"&&!(e instanceof Promise)?{...e}:{[t==="script"||t==="noscript"||t==="style"?"innerHTML":"textContent"]:e},t==="templateParams"||t==="titleTemplate");if(s instanceof Promise)return s.then(o=>Ll(t,e,n,o));const i={tag:t,props:s};for(const o of i_){const c=i.props[o]!==void 0?i.props[o]:n[o];c!==void 0&&((!(o==="innerHTML"||o==="textContent"||o==="children")||O0.has(i.tag))&&(i[o==="children"?"innerHTML":o]=c),delete i.props[o])}return i.props.body&&(i.tagPosition="bodyClose",delete i.props.body),i.tag==="script"&&typeof i.innerHTML=="object"&&(i.innerHTML=JSON.stringify(i.innerHTML),i.props.type=i.props.type||"application/json"),Array.isArray(i.props.content)?i.props.content.map(o=>({...i,props:{...i.props,content:o}})):i}function M0(t,e){var r;const n=t==="class"?" ":";";return e&&typeof e=="object"&&!Array.isArray(e)&&(e=Object.entries(e).filter(([,s])=>s).map(([s,i])=>t==="style"?`${s}:${i}`:s)),(r=String(Array.isArray(e)?e.join(n):e))==null?void 0:r.split(n).filter(s=>!!s.trim()).join(n)}function o_(t,e,n,r){for(let s=r;s<n.length;s+=1){const i=n[s];if(i==="class"||i==="style"){t[i]=M0(i,t[i]);continue}if(t[i]instanceof Promise)return t[i].then(o=>(t[i]=o,o_(t,e,n,s)));if(!e&&!i_.has(i)){const o=String(t[i]),c=i.startsWith("data-");o==="true"||o===""?t[i]=c?"true":!0:t[i]||(c&&o==="false"?t[i]="false":delete t[i])}}}function a_(t,e=!1){const n=o_(t,e,Object.keys(t),0);return n instanceof Promise?n.then(()=>t):t}const L0=10;function c_(t,e,n){for(let r=n;r<e.length;r+=1){const s=e[r];if(s instanceof Promise)return s.then(i=>(e[r]=i,c_(t,e,r)));Array.isArray(s)?t.push(...s):t.push(s)}}function F0(t){const e=[],n=t.resolvedInput;for(const s in n){if(!Object.prototype.hasOwnProperty.call(n,s))continue;const i=n[s];if(!(i===void 0||!N0.has(s))){if(Array.isArray(i)){for(const o of i)e.push(Ll(s,o,t));continue}e.push(Ll(s,i,t))}}if(e.length===0)return[];const r=[];return x0(c_(r,e,0),()=>r.map((s,i)=>(s._e=t._i,t.mode&&(s._m=t.mode),s._p=(t._i<<L0)+i,s)))}const Ad=new Set(["onload","onerror","onabort","onprogress","onloadstart"]),Rd={base:-10,title:10},Sd={critical:-80,high:-10,low:20};function wa(t){const e=t.tagPriority;if(typeof e=="number")return e;let n=100;return t.tag==="meta"?t.props["http-equiv"]==="content-security-policy"?n=-30:t.props.charset?n=-20:t.props.name==="viewport"&&(n=-15):t.tag==="link"&&t.props.rel==="preconnect"?n=20:t.tag in Rd&&(n=Rd[t.tag]),e&&e in Sd?n+Sd[e]:n}const U0=[{prefix:"before:",offset:-1},{prefix:"after:",offset:1}],B0=["name","property","http-equiv"];function l_(t){const{props:e,tag:n}=t;if(D0.has(n))return n;if(n==="link"&&e.rel==="canonical")return"canonical";if(e.charset)return"charset";if(e.id)return`${n}:id:${e.id}`;for(const r of B0)if(e[r]!==void 0)return`${n}:${r}:${e[r]}`;return!1}const Gn="%separator";function j0(t,e){var r;let n;if(e==="s"||e==="pageTitle")n=t.pageTitle;else if(e.includes(".")){const s=e.indexOf(".");n=(r=t[e.substring(0,s)])==null?void 0:r[e.substring(s+1)]}else n=t[e];return n!==void 0?(n||"").replace(/"/g,'\\"'):void 0}const $0=new RegExp(`${Gn}(?:\\s*${Gn})*`,"g");function jo(t,e,n){if(typeof t!="string"||!t.includes("%"))return t;let r=t;try{r=decodeURI(t)}catch{}const s=r.match(/%\w+(?:\.\w+)?/g);if(!s)return t;const i=t.includes(Gn);return t=t.replace(/%\w+(?:\.\w+)?/g,o=>{if(o===Gn||!s.includes(o))return o;const c=j0(e,o.slice(1));return c!==void 0?c:o}).trim(),i&&(t.endsWith(Gn)&&(t=t.slice(0,-Gn.length)),t.startsWith(Gn)&&(t=t.slice(Gn.length)),t=t.replace($0,n).trim()),t}function Pd(t,e){return t==null?e||null:typeof t=="function"?t(e):t}async function u_(t,e={}){const n=e.document||t.resolvedOptions.document;if(!n||!t.dirty)return;const r={shouldRender:!0,tags:[]};if(await t.hooks.callHook("dom:beforeRender",r),!!r.shouldRender)return t._domUpdatePromise||(t._domUpdatePromise=new Promise(async s=>{var d;const i=(await t.resolveTags()).map(g=>({tag:g,id:Jo.has(g.tag)?Ml(g):g.tag,shouldRender:!0}));let o=t._dom;if(!o){o={elMap:{htmlAttrs:n.documentElement,bodyAttrs:n.body}};const g=new Set;for(const m of["body","head"]){const P=(d=n[m])==null?void 0:d.children;for(const k of P){const O=k.tagName.toLowerCase();if(!Jo.has(O))continue;const V={tag:O,props:await a_(k.getAttributeNames().reduce((x,F)=>({...x,[F]:k.getAttribute(F)}),{})),innerHTML:k.innerHTML},N=l_(V);let b=N,C=1;for(;b&&g.has(b);)b=`${N}:${C++}`;b&&(V._d=b,g.add(b)),o.elMap[k.getAttribute("data-hid")||Ml(V)]=k}}}o.pendingSideEffects={...o.sideEffects},o.sideEffects={};function c(g,m,P){const k=`${g}:${m}`;o.sideEffects[k]=P,delete o.pendingSideEffects[k]}function l({id:g,$el:m,tag:P}){const k=P.tag.endsWith("Attrs");if(o.elMap[g]=m,k||(P.textContent&&P.textContent!==m.textContent&&(m.textContent=P.textContent),P.innerHTML&&P.innerHTML!==m.innerHTML&&(m.innerHTML=P.innerHTML),c(g,"el",()=>{var O;(O=o.elMap[g])==null||O.remove(),delete o.elMap[g]})),P._eventHandlers)for(const O in P._eventHandlers)Object.prototype.hasOwnProperty.call(P._eventHandlers,O)&&m.getAttribute(`data-${O}`)!==""&&((P.tag==="bodyAttrs"?n.defaultView:m).addEventListener(O.substring(2),P._eventHandlers[O].bind(m)),m.setAttribute(`data-${O}`,""));for(const O in P.props){if(!Object.prototype.hasOwnProperty.call(P.props,O))continue;const V=P.props[O],N=`attr:${O}`;if(O==="class"){if(!V)continue;for(const b of V.split(" "))k&&c(g,`${N}:${b}`,()=>m.classList.remove(b)),!m.classList.contains(b)&&m.classList.add(b)}else if(O==="style"){if(!V)continue;for(const b of V.split(";")){const C=b.indexOf(":"),x=b.substring(0,C).trim(),F=b.substring(C+1).trim();c(g,`${N}:${x}`,()=>{m.style.removeProperty(x)}),m.style.setProperty(x,F)}}else m.getAttribute(O)!==V&&m.setAttribute(O,V===!0?"":String(V)),k&&c(g,N,()=>m.removeAttribute(O))}}const u=[],h={bodyClose:void 0,bodyOpen:void 0,head:void 0};for(const g of i){const{tag:m,shouldRender:P,id:k}=g;if(P){if(m.tag==="title"){n.title=m.textContent;continue}g.$el=g.$el||o.elMap[k],g.$el?l(g):Jo.has(m.tag)&&u.push(g)}}for(const g of u){const m=g.tag.tagPosition||"head";g.$el=n.createElement(g.tag.tag),l(g),h[m]=h[m]||n.createDocumentFragment(),h[m].appendChild(g.$el)}for(const g of i)await t.hooks.callHook("dom:renderTag",g,n,c);h.head&&n.head.appendChild(h.head),h.bodyOpen&&n.body.insertBefore(h.bodyOpen,n.body.firstChild),h.bodyClose&&n.body.appendChild(h.bodyClose);for(const g in o.pendingSideEffects)o.pendingSideEffects[g]();t._dom=o,await t.hooks.callHook("dom:rendered",{renders:i}),s()}).finally(()=>{t._domUpdatePromise=void 0,t.dirty=!1})),t._domUpdatePromise}function H0(t,e={}){const n=e.delayFn||(r=>setTimeout(r,10));return t._domDebouncedUpdatePromise=t._domDebouncedUpdatePromise||new Promise(r=>n(()=>u_(t,e).then(()=>{delete t._domDebouncedUpdatePromise,r()})))}function q0(t){return e=>{var r,s;const n=((s=(r=e.resolvedOptions.document)==null?void 0:r.head.querySelector('script[id="unhead:payload"]'))==null?void 0:s.innerHTML)||!1;return n&&e.push(JSON.parse(n)),{mode:"client",hooks:{"entries:updated":i=>{H0(i,t)}}}}}const W0=new Set(["templateParams","htmlAttrs","bodyAttrs"]),K0={hooks:{"tag:normalise":({tag:t})=>{t.props.hid&&(t.key=t.props.hid,delete t.props.hid),t.props.vmid&&(t.key=t.props.vmid,delete t.props.vmid),t.props.key&&(t.key=t.props.key,delete t.props.key);const e=l_(t);e&&!e.startsWith("meta:og:")&&!e.startsWith("meta:twitter:")&&delete t.key;const n=e||(t.key?`${t.tag}:${t.key}`:!1);n&&(t._d=n)},"tags:resolve":t=>{const e=Object.create(null);for(const r of t.tags){const s=(r.key?`${r.tag}:${r.key}`:r._d)||Ml(r),i=e[s];if(i){let c=r==null?void 0:r.tagDuplicateStrategy;if(!c&&W0.has(r.tag)&&(c="merge"),c==="merge"){const l=i.props;l.style&&r.props.style&&(l.style[l.style.length-1]!==";"&&(l.style+=";"),r.props.style=`${l.style} ${r.props.style}`),l.class&&r.props.class?r.props.class=`${l.class} ${r.props.class}`:l.class&&(r.props.class=l.class),e[s].props={...l,...r.props};continue}else if(r._e===i._e){i._duped=i._duped||[],r._d=`${i._d}:${i._duped.length+1}`,i._duped.push(r);continue}else if(wa(r)>wa(i))continue}if(!(r.innerHTML||r.textContent||Object.keys(r.props).length!==0)&&Jo.has(r.tag)){delete e[s];continue}e[s]=r}const n=[];for(const r in e){const s=e[r],i=s._duped;n.push(s),i&&(delete s._duped,n.push(...i))}t.tags=n,t.tags=t.tags.filter(r=>!(r.tag==="meta"&&(r.props.name||r.props.property)&&!r.props.content))}}},z0=new Set(["script","link","bodyAttrs"]),G0=t=>({hooks:{"tags:resolve":e=>{for(const n of e.tags){if(!z0.has(n.tag))continue;const r=n.props;for(const s in r){if(s[0]!=="o"||s[1]!=="n"||!Object.prototype.hasOwnProperty.call(r,s))continue;const i=r[s];typeof i=="function"&&(t.ssr&&Ad.has(s)?r[s]=`this.dataset.${s}fired = true`:delete r[s],n._eventHandlers=n._eventHandlers||{},n._eventHandlers[s]=i)}t.ssr&&n._eventHandlers&&(n.props.src||n.props.href)&&(n.key=n.key||Ta(n.props.src||n.props.href))}},"dom:renderTag":({$el:e,tag:n})=>{var s,i;const r=e==null?void 0:e.dataset;if(r)for(const o in r){if(!o.endsWith("fired"))continue;const c=o.slice(0,-5);Ad.has(c)&&((i=(s=n._eventHandlers)==null?void 0:s[c])==null||i.call(e,new Event(c.substring(2))))}}}}),Q0=new Set(["link","style","script","noscript"]),J0={hooks:{"tag:normalise":({tag:t})=>{t.key&&Q0.has(t.tag)&&(t.props["data-hid"]=t._h=Ta(t.key))}}},X0={mode:"server",hooks:{"tags:beforeResolve":t=>{const e={};let n=!1;for(const r of t.tags)r._m!=="server"||r.tag!=="titleTemplate"&&r.tag!=="templateParams"&&r.tag!=="title"||(e[r.tag]=r.tag==="title"||r.tag==="titleTemplate"?r.textContent:r.props,n=!0);n&&t.tags.push({tag:"script",innerHTML:JSON.stringify(e),props:{id:"unhead:payload",type:"application/json"}})}}},Y0={hooks:{"tags:resolve":t=>{var e;for(const n of t.tags)if(typeof n.tagPriority=="string")for(const{prefix:r,offset:s}of U0){if(!n.tagPriority.startsWith(r))continue;const i=n.tagPriority.substring(r.length),o=(e=t.tags.find(c=>c._d===i))==null?void 0:e._p;if(o!==void 0){n._p=o+s;break}}t.tags.sort((n,r)=>{const s=wa(n),i=wa(r);return s<i?-1:s>i?1:n._p-r._p})}}},Z0={meta:"content",link:"href",htmlAttrs:"lang"},eb=["innerHTML","textContent"],tb=t=>({hooks:{"tags:resolve":e=>{var o;const{tags:n}=e;let r;for(let c=0;c<n.length;c+=1)n[c].tag==="templateParams"&&(r=e.tags.splice(c,1)[0].props,c-=1);const s=r||{},i=s.separator||"|";delete s.separator,s.pageTitle=jo(s.pageTitle||((o=n.find(c=>c.tag==="title"))==null?void 0:o.textContent)||"",s,i);for(const c of n){if(c.processTemplateParams===!1)continue;const l=Z0[c.tag];if(l&&typeof c.props[l]=="string")c.props[l]=jo(c.props[l],s,i);else if(c.processTemplateParams||c.tag==="titleTemplate"||c.tag==="title")for(const u of eb)typeof c[u]=="string"&&(c[u]=jo(c[u],s,i))}t._templateParams=s,t._separator=i},"tags:afterResolve":({tags:e})=>{let n;for(let r=0;r<e.length;r+=1){const s=e[r];s.tag==="title"&&s.processTemplateParams!==!1&&(n=s)}n!=null&&n.textContent&&(n.textContent=jo(n.textContent,t._templateParams,t._separator))}}}),nb={hooks:{"tags:resolve":t=>{const{tags:e}=t;let n,r;for(let s=0;s<e.length;s+=1){const i=e[s];i.tag==="title"?n=i:i.tag==="titleTemplate"&&(r=i)}if(r&&n){const s=Pd(r.textContent,n.textContent);s!==null?n.textContent=s||n.textContent:t.tags.splice(t.tags.indexOf(n),1)}else if(r){const s=Pd(r.textContent);s!==null&&(r.textContent=s,r.tag="title",r=void 0)}r&&t.tags.splice(t.tags.indexOf(r),1)}}},rb={hooks:{"tags:afterResolve":t=>{for(const e of t.tags)typeof e.innerHTML=="string"&&(e.innerHTML&&(e.props.type==="application/ld+json"||e.props.type==="application/json")?e.innerHTML=e.innerHTML.replace(/</g,"\\u003C"):e.innerHTML=e.innerHTML.replace(new RegExp(`</${e.tag}`,"g"),`<\\/${e.tag}`))}}};let h_;function sb(t={}){const e=ib(t);return e.use(q0()),h_=e}function Cd(t,e){return!t||t==="server"&&e||t==="client"&&!e}function ib(t={}){const e=Jm();e.addHooks(t.hooks||{}),t.document=t.document||(V0?document:void 0);const n=!t.document,r=()=>{c.dirty=!0,e.callHook("entries:updated",c)};let s=0,i=[];const o=[],c={plugins:o,dirty:!1,resolvedOptions:t,hooks:e,headEntries(){return i},use(l){const u=typeof l=="function"?l(c):l;(!u.key||!o.some(h=>h.key===u.key))&&(o.push(u),Cd(u.mode,n)&&e.addHooks(u.hooks||{}))},push(l,u){u==null||delete u.head;const h={_i:s++,input:l,...u};return Cd(h.mode,n)&&(i.push(h),r()),{dispose(){i=i.filter(d=>d._i!==h._i),r()},patch(d){for(const g of i)g._i===h._i&&(g.input=h.input=d);r()}}},async resolveTags(){const l={tags:[],entries:[...i]};await e.callHook("entries:resolve",l);for(const u of l.entries){const h=u.resolvedInput||u.input;if(u.resolvedInput=await(u.transform?u.transform(h):h),u.resolvedInput)for(const d of await F0(u)){const g={tag:d,entry:u,resolvedOptions:c.resolvedOptions};await e.callHook("tag:normalise",g),l.tags.push(g.tag)}}return await e.callHook("tags:beforeResolve",l),await e.callHook("tags:resolve",l),await e.callHook("tags:afterResolve",l),l.tags},ssr:n};return[K0,X0,G0,J0,Y0,tb,nb,rb,...(t==null?void 0:t.plugins)||[]].forEach(l=>c.use(l)),c.hooks.callHook("init",c),c}function ob(){return h_}const ab=Mm[0]==="3";function cb(t){return typeof t=="function"?t():Me(t)}function Ia(t){if(t instanceof Promise||t instanceof Date||t instanceof RegExp)return t;const e=cb(t);if(!t||!e)return e;if(Array.isArray(e))return e.map(n=>Ia(n));if(typeof e=="object"){const n={};for(const r in e)if(Object.prototype.hasOwnProperty.call(e,r)){if(r==="titleTemplate"||r[0]==="o"&&r[1]==="n"){n[r]=Me(e[r]);continue}n[r]=Ia(e[r])}return n}return e}const lb={hooks:{"entries:resolve":t=>{for(const e of t.entries)e.resolvedInput=Ia(e.input)}}},f_="usehead";function ub(t){return{install(n){ab&&(n.config.globalProperties.$unhead=t,n.config.globalProperties.$head=t,n.provide(f_,t))}}.install}function hb(t={}){t.domDelayFn=t.domDelayFn||(n=>Bs(()=>setTimeout(()=>n(),0)));const e=sb(t);return e.use(lb),e.install=ub(e),e}const Fl=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{},Ul="__unhead_injection_handler__";function fb(t){Fl[Ul]=t}function db(){if(Ul in Fl)return Fl[Ul]();const t=St(f_);return t||ob()}function pb(t,e={}){const n=e.head||db();if(n)return n.ssr?n.push(t,e):gb(n,t,e)}function gb(t,e,n={}){const r=cn(!1),s=cn({});$T(()=>{s.value=r.value?{}:Ia(e)});const i=t.push(s.value,n);return Vr(s,c=>{i.patch(c)}),Ja()&&(Ga(()=>{i.dispose()}),Yg(()=>{r.value=!0}),Xg(()=>{r.value=!1})),i}let Xo,Yo;function mb(){return Xo=$fetch(Lu(`builds/meta/${Ya().app.buildId}.json`),{responseType:"json"}),Xo.then(t=>{Yo=h0(t.matcher)}).catch(t=>{console.error("[nuxt] Error fetching app manifest.",t)}),Xo}function nc(){return Xo||mb()}async function Fu(t){if(await nc(),!Yo)return console.error("[nuxt] Error creating app manifest matcher.",Yo),{};try{return t_({},...Yo.matchAll(t).reverse())}catch(e){return console.error("[nuxt] Error matching route rules.",e),{}}}async function kd(t,e={}){const n=await yb(t,e),r=ze(),s=r._payloadCache=r._payloadCache||{};return n in s||(s[n]=p_(t).then(i=>i?d_(n).then(o=>o||(delete s[n],null)):(s[n]=null,null))),s[n]}const _b="_payload.json";async function yb(t,e={}){const n=new URL(t,"http://localhost");if(n.host!=="localhost"||qr(n.pathname,{acceptRelative:!0}))throw new Error("Payload URL must not include hostname: "+t);const r=Ya(),s=e.hash||(e.fresh?Date.now():r.app.buildId),i=r.app.cdnURL,o=i&&await p_(t)?i:r.app.baseURL;return xu(o,n.pathname,_b+(s?`?${s}`:""))}async function d_(t){const e=fetch(t).then(n=>n.text().then(g_));try{return await e}catch(n){console.warn("[nuxt] Cannot load payload ",t,n)}return null}async function p_(t=r_().path){if(t=Vu(t),(await nc()).prerendered.includes(t))return!0;const n=await Fu(t);return!!n.prerender&&!n.redirect}let Ir=null;async function vb(){var r;if(Ir)return Ir;const t=document.getElementById("__NUXT_DATA__");if(!t)return{};const e=await g_(t.textContent||""),n=t.dataset.src?await d_(t.dataset.src):void 0;return Ir={...e,...n,...window.__NUXT__},(r=Ir.config)!=null&&r.public&&(Ir.config.public=pr(Ir.config.public)),Ir}async function g_(t){return await C0(t,ze()._payloadRevivers)}function Eb(t,e){ze()._payloadRevivers[t]=e}const Od={NuxtError:t=>tc(t),EmptyShallowRef:t=>Di(t==="_"?void 0:t==="0n"?BigInt(0):_a(t)),EmptyRef:t=>cn(t==="_"?void 0:t==="0n"?BigInt(0):_a(t)),ShallowRef:t=>Di(t),ShallowReactive:t=>wn(t),Ref:t=>cn(t),Reactive:t=>pr(t)},Tb=Vn({name:"nuxt:revive-payload:client",order:-30,async setup(t){let e,n;for(const r in Od)Eb(r,Od[r]);Object.assign(t.payload,([e,n]=ys(()=>t.runWithContext(vb)),e=await e,n(),e)),window.__NUXT__=t.payload}}),wb=[],Ib=Vn({name:"nuxt:head",enforce:"pre",setup(t){const e=hb({plugins:wb});fb(()=>ze().vueApp._context.provides.usehead),t.vueApp.use(e);{let n=!0;const r=async()=>{n=!1,await u_(e)};e.hooks.hook("dom:beforeRender",s=>{s.shouldRender=!n}),t.hooks.hook("page:start",()=>{n=!0}),t.hooks.hook("page:finish",()=>{t.isHydrating||r()}),t.hooks.hook("app:error",r),t.hooks.hook("app:suspense:resolve",r)}}});/*!
  * vue-router v4.4.5
  * (c) 2024 Eduardo San Martin Morote
  * @license MIT
  */const ss=typeof document<"u";function m_(t){return typeof t=="object"||"displayName"in t||"props"in t||"__vccOpts"in t}function bb(t){return t.__esModule||t[Symbol.toStringTag]==="Module"||t.default&&m_(t.default)}const Pe=Object.assign;function Xc(t,e){const n={};for(const r in e){const s=e[r];n[r]=Zt(s)?s.map(t):t(s)}return n}const Ii=()=>{},Zt=Array.isArray,__=/#/g,Ab=/&/g,Rb=/\//g,Sb=/=/g,Pb=/\?/g,y_=/\+/g,Cb=/%5B/g,kb=/%5D/g,v_=/%5E/g,Ob=/%60/g,E_=/%7B/g,Nb=/%7C/g,T_=/%7D/g,Db=/%20/g;function Uu(t){return encodeURI(""+t).replace(Nb,"|").replace(Cb,"[").replace(kb,"]")}function Vb(t){return Uu(t).replace(E_,"{").replace(T_,"}").replace(v_,"^")}function Bl(t){return Uu(t).replace(y_,"%2B").replace(Db,"+").replace(__,"%23").replace(Ab,"%26").replace(Ob,"`").replace(E_,"{").replace(T_,"}").replace(v_,"^")}function xb(t){return Bl(t).replace(Sb,"%3D")}function Mb(t){return Uu(t).replace(__,"%23").replace(Pb,"%3F")}function Lb(t){return t==null?"":Mb(t).replace(Rb,"%2F")}function Ui(t){try{return decodeURIComponent(""+t)}catch{}return""+t}const Fb=/\/$/,Ub=t=>t.replace(Fb,"");function Yc(t,e,n="/"){let r,s={},i="",o="";const c=e.indexOf("#");let l=e.indexOf("?");return c<l&&c>=0&&(l=-1),l>-1&&(r=e.slice(0,l),i=e.slice(l+1,c>-1?c:e.length),s=t(i)),c>-1&&(r=r||e.slice(0,c),o=e.slice(c,e.length)),r=Hb(r??e,n),{fullPath:r+(i&&"?")+i+o,path:r,query:s,hash:Ui(o)}}function Bb(t,e){const n=e.query?t(e.query):"";return e.path+(n&&"?")+n+(e.hash||"")}function Nd(t,e){return!e||!t.toLowerCase().startsWith(e.toLowerCase())?t:t.slice(e.length)||"/"}function jb(t,e,n){const r=e.matched.length-1,s=n.matched.length-1;return r>-1&&r===s&&Rs(e.matched[r],n.matched[s])&&w_(e.params,n.params)&&t(e.query)===t(n.query)&&e.hash===n.hash}function Rs(t,e){return(t.aliasOf||t)===(e.aliasOf||e)}function w_(t,e){if(Object.keys(t).length!==Object.keys(e).length)return!1;for(const n in t)if(!$b(t[n],e[n]))return!1;return!0}function $b(t,e){return Zt(t)?Dd(t,e):Zt(e)?Dd(e,t):t===e}function Dd(t,e){return Zt(e)?t.length===e.length&&t.every((n,r)=>n===e[r]):t.length===1&&t[0]===e}function Hb(t,e){if(t.startsWith("/"))return t;if(!t)return e;const n=e.split("/"),r=t.split("/"),s=r[r.length-1];(s===".."||s===".")&&r.push("");let i=n.length-1,o,c;for(o=0;o<r.length;o++)if(c=r[o],c!==".")if(c==="..")i>1&&i--;else break;return n.slice(0,i).join("/")+"/"+r.slice(o).join("/")}const qt={path:"/",name:void 0,params:{},query:{},hash:"",fullPath:"/",matched:[],meta:{},redirectedFrom:void 0};var Bi;(function(t){t.pop="pop",t.push="push"})(Bi||(Bi={}));var bi;(function(t){t.back="back",t.forward="forward",t.unknown=""})(bi||(bi={}));function qb(t){if(!t)if(ss){const e=document.querySelector("base");t=e&&e.getAttribute("href")||"/",t=t.replace(/^\w+:\/\/[^\/]+/,"")}else t="/";return t[0]!=="/"&&t[0]!=="#"&&(t="/"+t),Ub(t)}const Wb=/^[^#]+#/;function Kb(t,e){return t.replace(Wb,"#")+e}function zb(t,e){const n=document.documentElement.getBoundingClientRect(),r=t.getBoundingClientRect();return{behavior:e.behavior,left:r.left-n.left-(e.left||0),top:r.top-n.top-(e.top||0)}}const rc=()=>({left:window.scrollX,top:window.scrollY});function Gb(t){let e;if("el"in t){const n=t.el,r=typeof n=="string"&&n.startsWith("#"),s=typeof n=="string"?r?document.getElementById(n.slice(1)):document.querySelector(n):n;if(!s)return;e=zb(s,t)}else e=t;"scrollBehavior"in document.documentElement.style?window.scrollTo(e):window.scrollTo(e.left!=null?e.left:window.scrollX,e.top!=null?e.top:window.scrollY)}function Vd(t,e){return(history.state?history.state.position-e:-1)+t}const jl=new Map;function Qb(t,e){jl.set(t,e)}function Jb(t){const e=jl.get(t);return jl.delete(t),e}let Xb=()=>location.protocol+"//"+location.host;function I_(t,e){const{pathname:n,search:r,hash:s}=e,i=t.indexOf("#");if(i>-1){let c=s.includes(t.slice(i))?t.slice(i).length:1,l=s.slice(c);return l[0]!=="/"&&(l="/"+l),Nd(l,"")}return Nd(n,t)+r+s}function Yb(t,e,n,r){let s=[],i=[],o=null;const c=({state:g})=>{const m=I_(t,location),P=n.value,k=e.value;let O=0;if(g){if(n.value=m,e.value=g,o&&o===P){o=null;return}O=k?g.position-k.position:0}else r(m);s.forEach(V=>{V(n.value,P,{delta:O,type:Bi.pop,direction:O?O>0?bi.forward:bi.back:bi.unknown})})};function l(){o=n.value}function u(g){s.push(g);const m=()=>{const P=s.indexOf(g);P>-1&&s.splice(P,1)};return i.push(m),m}function h(){const{history:g}=window;g.state&&g.replaceState(Pe({},g.state,{scroll:rc()}),"")}function d(){for(const g of i)g();i=[],window.removeEventListener("popstate",c),window.removeEventListener("beforeunload",h)}return window.addEventListener("popstate",c),window.addEventListener("beforeunload",h,{passive:!0}),{pauseListeners:l,listen:u,destroy:d}}function xd(t,e,n,r=!1,s=!1){return{back:t,current:e,forward:n,replaced:r,position:window.history.length,scroll:s?rc():null}}function Zb(t){const{history:e,location:n}=window,r={value:I_(t,n)},s={value:e.state};s.value||i(r.value,{back:null,current:r.value,forward:null,position:e.length-1,replaced:!0,scroll:null},!0);function i(l,u,h){const d=t.indexOf("#"),g=d>-1?(n.host&&document.querySelector("base")?t:t.slice(d))+l:Xb()+t+l;try{e[h?"replaceState":"pushState"](u,"",g),s.value=u}catch(m){console.error(m),n[h?"replace":"assign"](g)}}function o(l,u){const h=Pe({},e.state,xd(s.value.back,l,s.value.forward,!0),u,{position:s.value.position});i(l,h,!0),r.value=l}function c(l,u){const h=Pe({},s.value,e.state,{forward:l,scroll:rc()});i(h.current,h,!0);const d=Pe({},xd(r.value,l,null),{position:h.position+1},u);i(l,d,!1),r.value=l}return{location:r,state:s,push:c,replace:o}}function b_(t){t=qb(t);const e=Zb(t),n=Yb(t,e.state,e.location,e.replace);function r(i,o=!0){o||n.pauseListeners(),history.go(i)}const s=Pe({location:"",base:t,go:r,createHref:Kb.bind(null,t)},e,n);return Object.defineProperty(s,"location",{enumerable:!0,get:()=>e.location.value}),Object.defineProperty(s,"state",{enumerable:!0,get:()=>e.state.value}),s}function eA(t){return t=location.host?t||location.pathname+location.search:"",t.includes("#")||(t+="#"),b_(t)}function tA(t){return typeof t=="string"||t&&typeof t=="object"}function A_(t){return typeof t=="string"||typeof t=="symbol"}const R_=Symbol("");var Md;(function(t){t[t.aborted=4]="aborted",t[t.cancelled=8]="cancelled",t[t.duplicated=16]="duplicated"})(Md||(Md={}));function Ss(t,e){return Pe(new Error,{type:t,[R_]:!0},e)}function yn(t,e){return t instanceof Error&&R_ in t&&(e==null||!!(t.type&e))}const Ld="[^/]+?",nA={sensitive:!1,strict:!1,start:!0,end:!0},rA=/[.+*?^${}()[\]/\\]/g;function sA(t,e){const n=Pe({},nA,e),r=[];let s=n.start?"^":"";const i=[];for(const u of t){const h=u.length?[]:[90];n.strict&&!u.length&&(s+="/");for(let d=0;d<u.length;d++){const g=u[d];let m=40+(n.sensitive?.25:0);if(g.type===0)d||(s+="/"),s+=g.value.replace(rA,"\\$&"),m+=40;else if(g.type===1){const{value:P,repeatable:k,optional:O,regexp:V}=g;i.push({name:P,repeatable:k,optional:O});const N=V||Ld;if(N!==Ld){m+=10;try{new RegExp(`(${N})`)}catch(C){throw new Error(`Invalid custom RegExp for param "${P}" (${N}): `+C.message)}}let b=k?`((?:${N})(?:/(?:${N}))*)`:`(${N})`;d||(b=O&&u.length<2?`(?:/${b})`:"/"+b),O&&(b+="?"),s+=b,m+=20,O&&(m+=-8),k&&(m+=-20),N===".*"&&(m+=-50)}h.push(m)}r.push(h)}if(n.strict&&n.end){const u=r.length-1;r[u][r[u].length-1]+=.7000000000000001}n.strict||(s+="/?"),n.end?s+="$":n.strict&&(s+="(?:/|$)");const o=new RegExp(s,n.sensitive?"":"i");function c(u){const h=u.match(o),d={};if(!h)return null;for(let g=1;g<h.length;g++){const m=h[g]||"",P=i[g-1];d[P.name]=m&&P.repeatable?m.split("/"):m}return d}function l(u){let h="",d=!1;for(const g of t){(!d||!h.endsWith("/"))&&(h+="/"),d=!1;for(const m of g)if(m.type===0)h+=m.value;else if(m.type===1){const{value:P,repeatable:k,optional:O}=m,V=P in u?u[P]:"";if(Zt(V)&&!k)throw new Error(`Provided param "${P}" is an array but it is not repeatable (* or + modifiers)`);const N=Zt(V)?V.join("/"):V;if(!N)if(O)g.length<2&&(h.endsWith("/")?h=h.slice(0,-1):d=!0);else throw new Error(`Missing required param "${P}"`);h+=N}}return h||"/"}return{re:o,score:r,keys:i,parse:c,stringify:l}}function iA(t,e){let n=0;for(;n<t.length&&n<e.length;){const r=e[n]-t[n];if(r)return r;n++}return t.length<e.length?t.length===1&&t[0]===80?-1:1:t.length>e.length?e.length===1&&e[0]===80?1:-1:0}function S_(t,e){let n=0;const r=t.score,s=e.score;for(;n<r.length&&n<s.length;){const i=iA(r[n],s[n]);if(i)return i;n++}if(Math.abs(s.length-r.length)===1){if(Fd(r))return 1;if(Fd(s))return-1}return s.length-r.length}function Fd(t){const e=t[t.length-1];return t.length>0&&e[e.length-1]<0}const oA={type:0,value:""},aA=/[a-zA-Z0-9_]/;function cA(t){if(!t)return[[]];if(t==="/")return[[oA]];if(!t.startsWith("/"))throw new Error(`Invalid path "${t}"`);function e(m){throw new Error(`ERR (${n})/"${u}": ${m}`)}let n=0,r=n;const s=[];let i;function o(){i&&s.push(i),i=[]}let c=0,l,u="",h="";function d(){u&&(n===0?i.push({type:0,value:u}):n===1||n===2||n===3?(i.length>1&&(l==="*"||l==="+")&&e(`A repeatable param (${u}) must be alone in its segment. eg: '/:ids+.`),i.push({type:1,value:u,regexp:h,repeatable:l==="*"||l==="+",optional:l==="*"||l==="?"})):e("Invalid state to consume buffer"),u="")}function g(){u+=l}for(;c<t.length;){if(l=t[c++],l==="\\"&&n!==2){r=n,n=4;continue}switch(n){case 0:l==="/"?(u&&d(),o()):l===":"?(d(),n=1):g();break;case 4:g(),n=r;break;case 1:l==="("?n=2:aA.test(l)?g():(d(),n=0,l!=="*"&&l!=="?"&&l!=="+"&&c--);break;case 2:l===")"?h[h.length-1]=="\\"?h=h.slice(0,-1)+l:n=3:h+=l;break;case 3:d(),n=0,l!=="*"&&l!=="?"&&l!=="+"&&c--,h="";break;default:e("Unknown state");break}}return n===2&&e(`Unfinished custom RegExp for param "${u}"`),d(),o(),s}function lA(t,e,n){const r=sA(cA(t.path),n),s=Pe(r,{record:t,parent:e,children:[],alias:[]});return e&&!s.record.aliasOf==!e.record.aliasOf&&e.children.push(s),s}function uA(t,e){const n=[],r=new Map;e=$d({strict:!1,end:!0,sensitive:!1},e);function s(d){return r.get(d)}function i(d,g,m){const P=!m,k=Bd(d);k.aliasOf=m&&m.record;const O=$d(e,d),V=[k];if("alias"in d){const C=typeof d.alias=="string"?[d.alias]:d.alias;for(const x of C)V.push(Bd(Pe({},k,{components:m?m.record.components:k.components,path:x,aliasOf:m?m.record:k})))}let N,b;for(const C of V){const{path:x}=C;if(g&&x[0]!=="/"){const F=g.record.path,I=F[F.length-1]==="/"?"":"/";C.path=g.record.path+(x&&I+x)}if(N=lA(C,g,O),m?m.alias.push(N):(b=b||N,b!==N&&b.alias.push(N),P&&d.name&&!jd(N)&&o(d.name)),P_(N)&&l(N),k.children){const F=k.children;for(let I=0;I<F.length;I++)i(F[I],N,m&&m.children[I])}m=m||N}return b?()=>{o(b)}:Ii}function o(d){if(A_(d)){const g=r.get(d);g&&(r.delete(d),n.splice(n.indexOf(g),1),g.children.forEach(o),g.alias.forEach(o))}else{const g=n.indexOf(d);g>-1&&(n.splice(g,1),d.record.name&&r.delete(d.record.name),d.children.forEach(o),d.alias.forEach(o))}}function c(){return n}function l(d){const g=dA(d,n);n.splice(g,0,d),d.record.name&&!jd(d)&&r.set(d.record.name,d)}function u(d,g){let m,P={},k,O;if("name"in d&&d.name){if(m=r.get(d.name),!m)throw Ss(1,{location:d});O=m.record.name,P=Pe(Ud(g.params,m.keys.filter(b=>!b.optional).concat(m.parent?m.parent.keys.filter(b=>b.optional):[]).map(b=>b.name)),d.params&&Ud(d.params,m.keys.map(b=>b.name))),k=m.stringify(P)}else if(d.path!=null)k=d.path,m=n.find(b=>b.re.test(k)),m&&(P=m.parse(k),O=m.record.name);else{if(m=g.name?r.get(g.name):n.find(b=>b.re.test(g.path)),!m)throw Ss(1,{location:d,currentLocation:g});O=m.record.name,P=Pe({},g.params,d.params),k=m.stringify(P)}const V=[];let N=m;for(;N;)V.unshift(N.record),N=N.parent;return{name:O,path:k,params:P,matched:V,meta:fA(V)}}t.forEach(d=>i(d));function h(){n.length=0,r.clear()}return{addRoute:i,resolve:u,removeRoute:o,clearRoutes:h,getRoutes:c,getRecordMatcher:s}}function Ud(t,e){const n={};for(const r of e)r in t&&(n[r]=t[r]);return n}function Bd(t){const e={path:t.path,redirect:t.redirect,name:t.name,meta:t.meta||{},aliasOf:t.aliasOf,beforeEnter:t.beforeEnter,props:hA(t),children:t.children||[],instances:{},leaveGuards:new Set,updateGuards:new Set,enterCallbacks:{},components:"components"in t?t.components||null:t.component&&{default:t.component}};return Object.defineProperty(e,"mods",{value:{}}),e}function hA(t){const e={},n=t.props||!1;if("component"in t)e.default=n;else for(const r in t.components)e[r]=typeof n=="object"?n[r]:n;return e}function jd(t){for(;t;){if(t.record.aliasOf)return!0;t=t.parent}return!1}function fA(t){return t.reduce((e,n)=>Pe(e,n.meta),{})}function $d(t,e){const n={};for(const r in t)n[r]=r in e?e[r]:t[r];return n}function dA(t,e){let n=0,r=e.length;for(;n!==r;){const i=n+r>>1;S_(t,e[i])<0?r=i:n=i+1}const s=pA(t);return s&&(r=e.lastIndexOf(s,r-1)),r}function pA(t){let e=t;for(;e=e.parent;)if(P_(e)&&S_(t,e)===0)return e}function P_({record:t}){return!!(t.name||t.components&&Object.keys(t.components).length||t.redirect)}function gA(t){const e={};if(t===""||t==="?")return e;const r=(t[0]==="?"?t.slice(1):t).split("&");for(let s=0;s<r.length;++s){const i=r[s].replace(y_," "),o=i.indexOf("="),c=Ui(o<0?i:i.slice(0,o)),l=o<0?null:Ui(i.slice(o+1));if(c in e){let u=e[c];Zt(u)||(u=e[c]=[u]),u.push(l)}else e[c]=l}return e}function Hd(t){let e="";for(let n in t){const r=t[n];if(n=xb(n),r==null){r!==void 0&&(e+=(e.length?"&":"")+n);continue}(Zt(r)?r.map(i=>i&&Bl(i)):[r&&Bl(r)]).forEach(i=>{i!==void 0&&(e+=(e.length?"&":"")+n,i!=null&&(e+="="+i))})}return e}function mA(t){const e={};for(const n in t){const r=t[n];r!==void 0&&(e[n]=Zt(r)?r.map(s=>s==null?null:""+s):r==null?r:""+r)}return e}const _A=Symbol(""),qd=Symbol(""),sc=Symbol(""),C_=Symbol(""),$l=Symbol("");function li(){let t=[];function e(r){return t.push(r),()=>{const s=t.indexOf(r);s>-1&&t.splice(s,1)}}function n(){t=[]}return{add:e,list:()=>t.slice(),reset:n}}function Qn(t,e,n,r,s,i=o=>o()){const o=r&&(r.enterCallbacks[s]=r.enterCallbacks[s]||[]);return()=>new Promise((c,l)=>{const u=g=>{g===!1?l(Ss(4,{from:n,to:e})):g instanceof Error?l(g):tA(g)?l(Ss(2,{from:e,to:g})):(o&&r.enterCallbacks[s]===o&&typeof g=="function"&&o.push(g),c())},h=i(()=>t.call(r&&r.instances[s],e,n,u));let d=Promise.resolve(h);t.length<3&&(d=d.then(u)),d.catch(g=>l(g))})}function Zc(t,e,n,r,s=i=>i()){const i=[];for(const o of t)for(const c in o.components){let l=o.components[c];if(!(e!=="beforeRouteEnter"&&!o.instances[c]))if(m_(l)){const h=(l.__vccOpts||l)[e];h&&i.push(Qn(h,n,r,o,c,s))}else{let u=l();i.push(()=>u.then(h=>{if(!h)throw new Error(`Couldn't resolve component "${c}" at "${o.path}"`);const d=bb(h)?h.default:h;o.mods[c]=h,o.components[c]=d;const m=(d.__vccOpts||d)[e];return m&&Qn(m,n,r,o,c,s)()}))}}return i}function Wd(t){const e=St(sc),n=St(C_),r=Kt(()=>{const l=Me(t.to);return e.resolve(l)}),s=Kt(()=>{const{matched:l}=r.value,{length:u}=l,h=l[u-1],d=n.matched;if(!h||!d.length)return-1;const g=d.findIndex(Rs.bind(null,h));if(g>-1)return g;const m=Kd(l[u-2]);return u>1&&Kd(h)===m&&d[d.length-1].path!==m?d.findIndex(Rs.bind(null,l[u-2])):g}),i=Kt(()=>s.value>-1&&TA(n.params,r.value.params)),o=Kt(()=>s.value>-1&&s.value===n.matched.length-1&&w_(n.params,r.value.params));function c(l={}){return EA(l)?e[Me(t.replace)?"replace":"push"](Me(t.to)).catch(Ii):Promise.resolve()}return{route:r,href:Kt(()=>r.value.href),isActive:i,isExactActive:o,navigate:c}}const yA=js({name:"RouterLink",compatConfig:{MODE:3},props:{to:{type:[String,Object],required:!0},replace:Boolean,activeClass:String,exactActiveClass:String,custom:Boolean,ariaCurrentValue:{type:String,default:"page"}},useLink:Wd,setup(t,{slots:e}){const n=pr(Wd(t)),{options:r}=St(sc),s=Kt(()=>({[zd(t.activeClass,r.linkActiveClass,"router-link-active")]:n.isActive,[zd(t.exactActiveClass,r.linkExactActiveClass,"router-link-exact-active")]:n.isExactActive}));return()=>{const i=e.default&&e.default(n);return t.custom?i:sn("a",{"aria-current":n.isExactActive?t.ariaCurrentValue:null,href:n.href,onClick:n.navigate,class:s.value},i)}}}),vA=yA;function EA(t){if(!(t.metaKey||t.altKey||t.ctrlKey||t.shiftKey)&&!t.defaultPrevented&&!(t.button!==void 0&&t.button!==0)){if(t.currentTarget&&t.currentTarget.getAttribute){const e=t.currentTarget.getAttribute("target");if(/\b_blank\b/i.test(e))return}return t.preventDefault&&t.preventDefault(),!0}}function TA(t,e){for(const n in e){const r=e[n],s=t[n];if(typeof r=="string"){if(r!==s)return!1}else if(!Zt(s)||s.length!==r.length||r.some((i,o)=>i!==s[o]))return!1}return!0}function Kd(t){return t?t.aliasOf?t.aliasOf.path:t.path:""}const zd=(t,e,n)=>t??e??n,wA=js({name:"RouterView",inheritAttrs:!1,props:{name:{type:String,default:"default"},route:Object},compatConfig:{MODE:3},setup(t,{attrs:e,slots:n}){const r=St($l),s=Kt(()=>t.route||r.value),i=St(qd,0),o=Kt(()=>{let u=Me(i);const{matched:h}=s.value;let d;for(;(d=h[u])&&!d.components;)u++;return u}),c=Kt(()=>s.value.matched[o.value]);ms(qd,Kt(()=>o.value+1)),ms(_A,c),ms($l,s);const l=cn();return Vr(()=>[l.value,c.value,t.name],([u,h,d],[g,m,P])=>{h&&(h.instances[d]=u,m&&m!==h&&u&&u===g&&(h.leaveGuards.size||(h.leaveGuards=m.leaveGuards),h.updateGuards.size||(h.updateGuards=m.updateGuards))),u&&h&&(!m||!Rs(h,m)||!g)&&(h.enterCallbacks[d]||[]).forEach(k=>k(u))},{flush:"post"}),()=>{const u=s.value,h=t.name,d=c.value,g=d&&d.components[h];if(!g)return Gd(n.default,{Component:g,route:u});const m=d.props[h],P=m?m===!0?u.params:typeof m=="function"?m(u):m:null,O=sn(g,Pe({},P,e,{onVnodeUnmounted:V=>{V.component.isUnmounted&&(d.instances[h]=null)},ref:l}));return Gd(n.default,{Component:O,route:u})||O}}});function Gd(t,e){if(!t)return null;const n=t(e);return n.length===1?n[0]:n}const k_=wA;function IA(t){const e=uA(t.routes,t),n=t.parseQuery||gA,r=t.stringifyQuery||Hd,s=t.history,i=li(),o=li(),c=li(),l=Di(qt);let u=qt;ss&&t.scrollBehavior&&"scrollRestoration"in history&&(history.scrollRestoration="manual");const h=Xc.bind(null,B=>""+B),d=Xc.bind(null,Lb),g=Xc.bind(null,Ui);function m(B,Y){let J,ee;return A_(B)?(J=e.getRecordMatcher(B),ee=Y):ee=B,e.addRoute(ee,J)}function P(B){const Y=e.getRecordMatcher(B);Y&&e.removeRoute(Y)}function k(){return e.getRoutes().map(B=>B.record)}function O(B){return!!e.getRecordMatcher(B)}function V(B,Y){if(Y=Pe({},Y||l.value),typeof B=="string"){const R=Yc(n,B,Y.path),M=e.resolve({path:R.path},Y),j=s.createHref(R.fullPath);return Pe(R,M,{params:g(M.params),hash:Ui(R.hash),redirectedFrom:void 0,href:j})}let J;if(B.path!=null)J=Pe({},B,{path:Yc(n,B.path,Y.path).path});else{const R=Pe({},B.params);for(const M in R)R[M]==null&&delete R[M];J=Pe({},B,{params:d(R)}),Y.params=d(Y.params)}const ee=e.resolve(J,Y),ye=B.hash||"";ee.params=h(g(ee.params));const Ce=Bb(r,Pe({},B,{hash:Vb(ye),path:ee.path})),w=s.createHref(Ce);return Pe({fullPath:Ce,hash:ye,query:r===Hd?mA(B.query):B.query||{}},ee,{redirectedFrom:void 0,href:w})}function N(B){return typeof B=="string"?Yc(n,B,l.value.path):Pe({},B)}function b(B,Y){if(u!==B)return Ss(8,{from:Y,to:B})}function C(B){return I(B)}function x(B){return C(Pe(N(B),{replace:!0}))}function F(B){const Y=B.matched[B.matched.length-1];if(Y&&Y.redirect){const{redirect:J}=Y;let ee=typeof J=="function"?J(B):J;return typeof ee=="string"&&(ee=ee.includes("?")||ee.includes("#")?ee=N(ee):{path:ee},ee.params={}),Pe({query:B.query,hash:B.hash,params:ee.path!=null?{}:B.params},ee)}}function I(B,Y){const J=u=V(B),ee=l.value,ye=B.state,Ce=B.force,w=B.replace===!0,R=F(J);if(R)return I(Pe(N(R),{state:typeof R=="object"?Pe({},ye,R.state):ye,force:Ce,replace:w}),Y||J);const M=J;M.redirectedFrom=Y;let j;return!Ce&&jb(r,ee,J)&&(j=Ss(16,{to:M,from:ee}),Nt(ee,ee,!0,!1)),(j?Promise.resolve(j):E(M,ee)).catch(U=>yn(U)?yn(U,2)?U:$t(U):re(U,M,ee)).then(U=>{if(U){if(yn(U,2))return I(Pe({replace:w},N(U.to),{state:typeof U.to=="object"?Pe({},ye,U.to.state):ye,force:Ce}),Y||M)}else U=A(M,ee,!0,w,ye);return S(M,ee,U),U})}function v(B,Y){const J=b(B,Y);return J?Promise.reject(J):Promise.resolve()}function y(B){const Y=Mn.values().next().value;return Y&&typeof Y.runWithContext=="function"?Y.runWithContext(B):B()}function E(B,Y){let J;const[ee,ye,Ce]=bA(B,Y);J=Zc(ee.reverse(),"beforeRouteLeave",B,Y);for(const R of ee)R.leaveGuards.forEach(M=>{J.push(Qn(M,B,Y))});const w=v.bind(null,B,Y);return J.push(w),bt(J).then(()=>{J=[];for(const R of i.list())J.push(Qn(R,B,Y));return J.push(w),bt(J)}).then(()=>{J=Zc(ye,"beforeRouteUpdate",B,Y);for(const R of ye)R.updateGuards.forEach(M=>{J.push(Qn(M,B,Y))});return J.push(w),bt(J)}).then(()=>{J=[];for(const R of Ce)if(R.beforeEnter)if(Zt(R.beforeEnter))for(const M of R.beforeEnter)J.push(Qn(M,B,Y));else J.push(Qn(R.beforeEnter,B,Y));return J.push(w),bt(J)}).then(()=>(B.matched.forEach(R=>R.enterCallbacks={}),J=Zc(Ce,"beforeRouteEnter",B,Y,y),J.push(w),bt(J))).then(()=>{J=[];for(const R of o.list())J.push(Qn(R,B,Y));return J.push(w),bt(J)}).catch(R=>yn(R,8)?R:Promise.reject(R))}function S(B,Y,J){c.list().forEach(ee=>y(()=>ee(B,Y,J)))}function A(B,Y,J,ee,ye){const Ce=b(B,Y);if(Ce)return Ce;const w=Y===qt,R=ss?history.state:{};J&&(ee||w?s.replace(B.fullPath,Pe({scroll:w&&R&&R.scroll},ye)):s.push(B.fullPath,ye)),l.value=B,Nt(B,Y,J,w),$t()}let T;function pe(){T||(T=s.listen((B,Y,J)=>{if(!en.listening)return;const ee=V(B),ye=F(ee);if(ye){I(Pe(ye,{replace:!0}),ee).catch(Ii);return}u=ee;const Ce=l.value;ss&&Qb(Vd(Ce.fullPath,J.delta),rc()),E(ee,Ce).catch(w=>yn(w,12)?w:yn(w,2)?(I(w.to,ee).then(R=>{yn(R,20)&&!J.delta&&J.type===Bi.pop&&s.go(-1,!1)}).catch(Ii),Promise.reject()):(J.delta&&s.go(-J.delta,!1),re(w,ee,Ce))).then(w=>{w=w||A(ee,Ce,!1),w&&(J.delta&&!yn(w,8)?s.go(-J.delta,!1):J.type===Bi.pop&&yn(w,20)&&s.go(-1,!1)),S(ee,Ce,w)}).catch(Ii)}))}let Ee=li(),Z=li(),ue;function re(B,Y,J){$t(B);const ee=Z.list();return ee.length?ee.forEach(ye=>ye(B,Y,J)):console.error(B),Promise.reject(B)}function Fe(){return ue&&l.value!==qt?Promise.resolve():new Promise((B,Y)=>{Ee.add([B,Y])})}function $t(B){return ue||(ue=!B,pe(),Ee.list().forEach(([Y,J])=>B?J(B):Y()),Ee.reset()),B}function Nt(B,Y,J,ee){const{scrollBehavior:ye}=t;if(!ss||!ye)return Promise.resolve();const Ce=!J&&Jb(Vd(B.fullPath,0))||(ee||!J)&&history.state&&history.state.scroll||null;return Bs().then(()=>ye(B,Y,Ce)).then(w=>w&&Gb(w)).catch(w=>re(w,B,Y))}const Ue=B=>s.go(B);let Be;const Mn=new Set,en={currentRoute:l,listening:!0,addRoute:m,removeRoute:P,clearRoutes:e.clearRoutes,hasRoute:O,getRoutes:k,resolve:V,options:t,push:C,replace:x,go:Ue,back:()=>Ue(-1),forward:()=>Ue(1),beforeEach:i.add,beforeResolve:o.add,afterEach:c.add,onError:Z.add,isReady:Fe,install(B){const Y=this;B.component("RouterLink",vA),B.component("RouterView",k_),B.config.globalProperties.$router=Y,Object.defineProperty(B.config.globalProperties,"$route",{enumerable:!0,get:()=>Me(l)}),ss&&!Be&&l.value===qt&&(Be=!0,C(s.location).catch(ye=>{}));const J={};for(const ye in qt)Object.defineProperty(J,ye,{get:()=>l.value[ye],enumerable:!0});B.provide(sc,Y),B.provide(C_,wn(J)),B.provide($l,l);const ee=B.unmount;Mn.add(B),B.unmount=function(){Mn.delete(B),Mn.size<1&&(u=qt,T&&T(),T=null,l.value=qt,Be=!1,ue=!1),ee()}}};function bt(B){return B.reduce((Y,J)=>Y.then(()=>y(J)),Promise.resolve())}return en}function bA(t,e){const n=[],r=[],s=[],i=Math.max(e.matched.length,t.matched.length);for(let o=0;o<i;o++){const c=e.matched[o];c&&(t.matched.find(u=>Rs(u,c))?r.push(c):n.push(c));const l=t.matched[o];l&&(e.matched.find(u=>Rs(u,l))||s.push(l))}return[n,r,s]}function lN(){return St(sc)}const AA=(t,e)=>e.path.replace(/(:\w+)\([^)]+\)/g,"$1").replace(/(:\w+)[?+*]/g,"$1").replace(/:\w+/g,n=>{var r;return((r=t.params[n.slice(1)])==null?void 0:r.toString())||""}),Hl=(t,e)=>{const n=t.route.matched.find(s=>{var i;return((i=s.components)==null?void 0:i.default)===t.Component.type}),r=e??(n==null?void 0:n.meta.key)??(n&&AA(t.route,n));return typeof r=="function"?r(t.route):r},RA=(t,e)=>({default:()=>t?sn(gT,t===!0?{}:t,e):e});function Bu(t){return Array.isArray(t)?t:[t]}const SA="modulepreload",PA=function(t,e){return new URL(t,e).href},Qd={},CA=function(e,n,r){let s=Promise.resolve();if(n&&n.length>0){const o=document.getElementsByTagName("link"),c=document.querySelector("meta[property=csp-nonce]"),l=(c==null?void 0:c.nonce)||(c==null?void 0:c.getAttribute("nonce"));s=Promise.allSettled(n.map(u=>{if(u=PA(u,r),u in Qd)return;Qd[u]=!0;const h=u.endsWith(".css"),d=h?'[rel="stylesheet"]':"";if(!!r)for(let P=o.length-1;P>=0;P--){const k=o[P];if(k.href===u&&(!h||k.rel==="stylesheet"))return}else if(document.querySelector(`link[href="${u}"]${d}`))return;const m=document.createElement("link");if(m.rel=h?"stylesheet":SA,h||(m.as="script"),m.crossOrigin="",m.href=u,l&&m.setAttribute("nonce",l),document.head.appendChild(m),h)return new Promise((P,k)=>{m.addEventListener("load",P),m.addEventListener("error",()=>k(new Error(`Unable to preload CSS for ${u}`)))})}))}function i(o){const c=new Event("vite:preloadError",{cancelable:!0});if(c.payload=o,window.dispatchEvent(c),!c.defaultPrevented)throw o}return s.then(o=>{for(const c of o||[])c.status==="rejected"&&i(c.reason);return e().catch(i)})},us=(...t)=>CA(...t).catch(e=>{const n=new Event("nuxt.preloadError");throw n.payload=e,window.dispatchEvent(n),e}),el=[{name:"credentials",path:"/credentials",component:()=>us(()=>import("./C1DAMmL-.js"),__vite__mapDeps([0,1,2,3]),import.meta.url).then(t=>t.default||t)},{name:"dashboard",path:"/dashboard",component:()=>us(()=>import("./D_nrkLsb.js"),__vite__mapDeps([4,2,3,5,1,6,7,8]),import.meta.url).then(t=>t.default||t)},{name:"donate",path:"/donate",component:()=>us(()=>import("./2ZjLWIty.js"),__vite__mapDeps([9,2,3,1,6,7]),import.meta.url).then(t=>t.default||t)},{name:"login",path:"/login",component:()=>us(()=>import("./Cv4tkWmp.js"),__vite__mapDeps([10,2,3]),import.meta.url).then(t=>t.default||t)}],kA=(t,e,n)=>(e=e===!0?{}:e,{default:()=>{var r;return e?sn(t,e,n):(r=n.default)==null?void 0:r.call(n)}});function Jd(t){const e=(t==null?void 0:t.meta.key)??t.path.replace(/(:\w+)\([^)]+\)/g,"$1").replace(/(:\w+)[?+*]/g,"$1").replace(/:\w+/g,n=>{var r;return((r=t.params[n.slice(1)])==null?void 0:r.toString())||""});return typeof e=="function"?e(t):e}function OA(t,e){return t===e||e===qt?!1:Jd(t)!==Jd(e)?!0:!t.matched.every((r,s)=>{var i,o;return r.components&&r.components.default===((o=(i=e.matched[s])==null?void 0:i.components)==null?void 0:o.default)})}const NA={scrollBehavior(t,e,n){var u;const r=ze(),s=((u=Yt().options)==null?void 0:u.scrollBehaviorType)??"auto";let i=n||void 0;const o=typeof t.meta.scrollToTop=="function"?t.meta.scrollToTop(t,e):t.meta.scrollToTop;if(!i&&e&&t&&o!==!1&&OA(t,e)&&(i={left:0,top:0}),t.path===e.path)return e.hash&&!t.hash?{left:0,top:0}:t.hash?{el:t.hash,top:Xd(t.hash),behavior:s}:!1;const c=h=>!!(h.meta.pageTransition??Ol),l=c(e)&&c(t)?"page:transition:finish":"page:finish";return new Promise(h=>{r.hooks.hookOnce(l,async()=>{await new Promise(d=>setTimeout(d,0)),t.hash&&(i={el:t.hash,top:Xd(t.hash),behavior:s}),h(i)})})}};function Xd(t){try{const e=document.querySelector(t);if(e)return(Number.parseFloat(getComputedStyle(e).scrollMarginTop)||0)+(Number.parseFloat(getComputedStyle(document.documentElement).scrollPaddingTop)||0)}catch{}return 0}const DA={hashMode:!1,scrollBehaviorType:"auto"},xt={...DA,...NA},VA=async t=>{var l;let e,n;if(!((l=t.meta)!=null&&l.validate))return;const r=ze(),s=Yt(),i=([e,n]=ys(()=>Promise.resolve(t.meta.validate(t))),e=await e,n(),e);if(i===!0)return;const o=tc({statusCode:i&&i.statusCode||404,statusMessage:i&&i.statusMessage||`Page Not Found: ${t.fullPath}`,data:{path:t.fullPath}}),c=s.beforeResolve(u=>{if(c(),u===t){const h=s.afterEach(async()=>{h(),await r.runWithContext(()=>ls(o)),window==null||window.history.pushState({},"",t.fullPath)});return!1}})},xA=async t=>{let e,n;const r=([e,n]=ys(()=>Fu(t.path)),e=await e,n(),e);if(r.redirect)return qr(r.redirect,{acceptRelative:!0})?(window.location.href=r.redirect,!1):r.redirect},MA=[VA,xA],Ai={};function LA(t,e,n){const{pathname:r,search:s,hash:i}=e,o=t.indexOf("#");if(o>-1){const u=i.includes(t.slice(o))?t.slice(o).length:1;let h=i.slice(u);return h[0]!=="/"&&(h="/"+h),_d(h,"")}const c=_d(r,t),l=!n||AI(c,n,{trailingSlash:!0})?c:n;return l+(l.includes("?")?"":s)+i}const FA=Vn({name:"nuxt:router",enforce:"pre",async setup(t){var O;let e,n,r=Ya().app.baseURL;xt.hashMode&&!r.includes("#")&&(r+="#");const s=((O=xt.history)==null?void 0:O.call(xt,r))??(xt.hashMode?eA(r):b_(r)),i=xt.routes?([e,n]=ys(()=>xt.routes(el)),e=await e,n(),e??el):el;let o;const c=IA({...xt,scrollBehavior:(V,N,b)=>{if(N===qt){o=b;return}if(xt.scrollBehavior){if(c.options.scrollBehavior=xt.scrollBehavior,"scrollRestoration"in window.history){const C=c.beforeEach(()=>{C(),window.history.scrollRestoration="manual"})}return xt.scrollBehavior(V,qt,o||b)}},history:s,routes:i});"scrollRestoration"in window.history&&(window.history.scrollRestoration="auto"),t.vueApp.use(c);const l=Di(c.currentRoute.value);c.afterEach((V,N)=>{l.value=N}),Object.defineProperty(t.vueApp.config.globalProperties,"previousRoute",{get:()=>l.value});const u=LA(r,window.location,t.payload.path),h=Di(c.currentRoute.value),d=()=>{h.value=c.currentRoute.value};t.hook("page:finish",d),c.afterEach((V,N)=>{var b,C,x,F;((C=(b=V.matched[0])==null?void 0:b.components)==null?void 0:C.default)===((F=(x=N.matched[0])==null?void 0:x.components)==null?void 0:F.default)&&d()});const g={};for(const V in h.value)Object.defineProperty(g,V,{get:()=>h.value[V]});t._route=wn(g),t._middleware=t._middleware||{global:[],named:{}};const m=ec();c.afterEach(async(V,N,b)=>{delete t._processingMiddleware,!t.isHydrating&&m.value&&await t.runWithContext(T0),b&&await t.callHook("page:loading:end"),V.matched.length===0&&await t.runWithContext(()=>ls(Vl({statusCode:404,fatal:!1,statusMessage:`Page not found: ${V.fullPath}`,data:{path:V.fullPath}})))});try{[e,n]=ys(()=>c.isReady()),await e,n()}catch(V){[e,n]=ys(()=>t.runWithContext(()=>ls(V))),await e,n()}const P=u!==c.currentRoute.value.fullPath?c.resolve(u):c.currentRoute.value;d();const k=t.payload.state._layout;return c.beforeEach(async(V,N)=>{var b;await t.callHook("page:loading:start"),V.meta=pr(V.meta),t.isHydrating&&k&&!ar(V.meta.layout)&&(V.meta.layout=k),t._processingMiddleware=!0;{const C=new Set([...MA,...t._middleware.global]);for(const x of V.matched){const F=x.meta.middleware;if(F)for(const I of Bu(F))C.add(I)}{const x=await t.runWithContext(()=>Fu(V.path));if(x.appMiddleware)for(const F in x.appMiddleware)x.appMiddleware[F]?C.add(F):C.delete(F)}for(const x of C){const F=typeof x=="string"?t._middleware.named[x]||await((b=Ai[x])==null?void 0:b.call(Ai).then(v=>v.default||v)):x;if(!F)throw new Error(`Unknown route middleware: '${x}'.`);const I=await t.runWithContext(()=>F(V,N));if(!t.payload.serverRendered&&t.isHydrating&&(I===!1||I instanceof Error)){const v=I||Vl({statusCode:404,statusMessage:`Page Not Found: ${u}`});return await t.runWithContext(()=>ls(v)),!1}if(I!==!0&&(I||I===!1))return I}}}),c.onError(async()=>{delete t._processingMiddleware,await t.callHook("page:loading:end")}),t.hooks.hookOnce("app:created",async()=>{try{"name"in P&&(P.name=void 0),await c.replace({...P,force:!0}),c.options.scrollBehavior=xt.scrollBehavior}catch(V){await t.runWithContext(()=>ls(V))}}),{provide:{router:c}}}}),Yd=globalThis.requestIdleCallback||(t=>{const e=Date.now(),n={didTimeout:!1,timeRemaining:()=>Math.max(0,50-(Date.now()-e))};return setTimeout(()=>{t(n)},1)}),uN=globalThis.cancelIdleCallback||(t=>{clearTimeout(t)}),ju=t=>{const e=ze();e.isHydrating?e.hooks.hookOnce("app:suspense:resolve",()=>{Yd(()=>t())}):Yd(()=>t())},UA=Vn({name:"nuxt:payload",setup(t){Yt().beforeResolve(async(e,n)=>{if(e.path===n.path)return;const r=await kd(e.path);r&&Object.assign(t.static.data,r.data)}),ju(()=>{var e;t.hooks.hook("link:prefetch",async n=>{const{hostname:r}=new URL(n,window.location.href);r===window.location.hostname&&await kd(n)}),((e=navigator.connection)==null?void 0:e.effectiveType)!=="slow-2g"&&setTimeout(nc,1e3)})}}),BA=Vn(()=>{const t=Yt();ju(()=>{t.beforeResolve(async()=>{await new Promise(e=>{setTimeout(e,100),requestAnimationFrame(()=>{setTimeout(e,0)})})})})}),jA=Vn(t=>{let e;async function n(){const r=await nc();e&&clearTimeout(e),e=setTimeout(n,wd);try{const s=await $fetch(Lu("builds/latest.json")+`?${Date.now()}`);s.id!==r.id&&t.hooks.callHook("app:manifest:update",s)}catch{}}ju(()=>{e=setTimeout(n,wd)})});function $A(t={}){const e=t.path||window.location.pathname;let n={};try{n=_a(sessionStorage.getItem("nuxt:reload")||"{}")}catch{}if(t.force||(n==null?void 0:n.path)!==e||(n==null?void 0:n.expires)<Date.now()){try{sessionStorage.setItem("nuxt:reload",JSON.stringify({path:e,expires:Date.now()+(t.ttl??1e4)}))}catch{}if(t.persistState)try{sessionStorage.setItem("nuxt:reload:state",JSON.stringify({state:ze().payload.state}))}catch{}window.location.pathname!==e?window.location.href=e:window.location.reload()}}const HA=Vn({name:"nuxt:chunk-reload",setup(t){const e=Yt(),n=Ya(),r=new Set;e.beforeEach(()=>{r.clear()}),t.hook("app:chunkError",({error:i})=>{r.add(i)});function s(i){const c="href"in i&&i.href[0]==="#"?n.app.baseURL+i.href:xu(n.app.baseURL,i.fullPath);$A({path:c,persistState:!0})}t.hook("app:manifest:update",()=>{e.beforeResolve(s)}),e.onError((i,o)=>{r.has(i)&&s(o)})}}),qA=Vn({name:"nuxt:global-components"}),$o={},WA=Vn({name:"nuxt:prefetch",setup(t){const e=Yt();t.hooks.hook("app:mounted",()=>{e.beforeEach(async n=>{var s;const r=(s=n==null?void 0:n.meta)==null?void 0:s.layout;r&&typeof $o[r]=="function"&&await $o[r]()})}),t.hooks.hook("link:prefetch",n=>{if(qr(n))return;const r=e.resolve(n);if(!r)return;const s=r.meta.layout;let i=Bu(r.meta.middleware);i=i.filter(o=>typeof o=="string");for(const o of i)typeof Ai[o]=="function"&&Ai[o]();s&&typeof $o[s]=="function"&&$o[s]()})}}),KA=[Tb,Ib,FA,UA,BA,jA,HA,qA,WA],zA=js({props:{vnode:{type:Object,required:!0},route:{type:Object,required:!0},vnodeRef:Object,renderKey:String,trackRootNodes:Boolean},setup(t){const e=t.renderKey,n=t.route,r={};for(const s in t.route)Object.defineProperty(r,s,{get:()=>e===t.renderKey?t.route[s]:n[s]});return ms(Za,wn(r)),()=>sn(t.vnode,{ref:t.vnodeRef})}}),GA=js({name:"NuxtPage",inheritAttrs:!1,props:{name:{type:String},transition:{type:[Boolean,Object],default:void 0},keepalive:{type:[Boolean,Object],default:void 0},route:{type:Object},pageKey:{type:[Function,String],default:null}},setup(t,{attrs:e,slots:n,expose:r}){const s=ze(),i=cn(),o=St(Za,null);let c;r({pageRef:i});const l=St(y0,null);let u;const h=s.deferHydration();if(s.isHydrating){const d=s.hooks.hookOnce("app:error",h);Yt().beforeEach(d)}return t.pageKey&&Vr(()=>t.pageKey,(d,g)=>{d!==g&&s.callHook("page:loading:start")}),()=>sn(k_,{name:t.name,route:t.route,...e},{default:d=>{const g=JA(o,d.route,d.Component),m=o&&o.matched.length===d.route.matched.length;if(!d.Component){if(u&&!m)return u;h();return}if(u&&l&&!l.isCurrent(d.route))return u;if(g&&o&&(!l||l!=null&&l.isCurrent(o)))return m?u:null;const P=Hl(d,t.pageKey);!s.isHydrating&&!XA(o,d.route,d.Component)&&c===P&&s.callHook("page:loading:end"),c=P;const k=!!(t.transition??d.route.meta.pageTransition??Ol),O=k&&QA([t.transition,d.route.meta.pageTransition,Ol,{onAfterLeave:()=>{s.callHook("page:transition:finish",d.Component)}}].filter(Boolean)),V=t.keepalive??d.route.meta.keepalive??t0;return u=kA(_w,k&&O,RA(V,sn(bm,{suspensible:!0,onPending:()=>s.callHook("page:start",d.Component),onResolve:()=>{Bs(()=>s.callHook("page:finish",d.Component).then(()=>s.callHook("page:loading:end")).finally(h))}},{default:()=>{const N=sn(zA,{key:P||void 0,vnode:n.default?sn(kt,void 0,n.default(d)):d.Component,route:d.route,renderKey:P||void 0,trackRootNodes:k,vnodeRef:i});return V&&(N.type.name=d.Component.type.name||d.Component.type.__name||"RouteProvider"),N}}))).default(),u}})}});function QA(t){const e=t.map(n=>({...n,onAfterLeave:n.onAfterLeave?Bu(n.onAfterLeave):void 0}));return t_(...e)}function JA(t,e,n){if(!t)return!1;const r=e.matched.findIndex(s=>{var i;return((i=s.components)==null?void 0:i.default)===(n==null?void 0:n.type)});return!r||r===-1?!1:e.matched.slice(0,r).some((s,i)=>{var o,c,l;return((o=s.components)==null?void 0:o.default)!==((l=(c=t.matched[i])==null?void 0:c.components)==null?void 0:l.default)})||n&&Hl({route:e,Component:n})!==Hl({route:t,Component:n})}function XA(t,e,n){return t?e.matched.findIndex(s=>{var i;return((i=s.components)==null?void 0:i.default)===(n==null?void 0:n.type)})<e.matched.length-1:!1}var Zd={};/**
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
 */const O_=function(t){const e=[];let n=0;for(let r=0;r<t.length;r++){let s=t.charCodeAt(r);s<128?e[n++]=s:s<2048?(e[n++]=s>>6|192,e[n++]=s&63|128):(s&64512)===55296&&r+1<t.length&&(t.charCodeAt(r+1)&64512)===56320?(s=65536+((s&1023)<<10)+(t.charCodeAt(++r)&1023),e[n++]=s>>18|240,e[n++]=s>>12&63|128,e[n++]=s>>6&63|128,e[n++]=s&63|128):(e[n++]=s>>12|224,e[n++]=s>>6&63|128,e[n++]=s&63|128)}return e},YA=function(t){const e=[];let n=0,r=0;for(;n<t.length;){const s=t[n++];if(s<128)e[r++]=String.fromCharCode(s);else if(s>191&&s<224){const i=t[n++];e[r++]=String.fromCharCode((s&31)<<6|i&63)}else if(s>239&&s<365){const i=t[n++],o=t[n++],c=t[n++],l=((s&7)<<18|(i&63)<<12|(o&63)<<6|c&63)-65536;e[r++]=String.fromCharCode(55296+(l>>10)),e[r++]=String.fromCharCode(56320+(l&1023))}else{const i=t[n++],o=t[n++];e[r++]=String.fromCharCode((s&15)<<12|(i&63)<<6|o&63)}}return e.join("")},N_={byteToCharMap_:null,charToByteMap_:null,byteToCharMapWebSafe_:null,charToByteMapWebSafe_:null,ENCODED_VALS_BASE:"ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",get ENCODED_VALS(){return this.ENCODED_VALS_BASE+"+/="},get ENCODED_VALS_WEBSAFE(){return this.ENCODED_VALS_BASE+"-_."},HAS_NATIVE_SUPPORT:typeof atob=="function",encodeByteArray(t,e){if(!Array.isArray(t))throw Error("encodeByteArray takes an array as a parameter");this.init_();const n=e?this.byteToCharMapWebSafe_:this.byteToCharMap_,r=[];for(let s=0;s<t.length;s+=3){const i=t[s],o=s+1<t.length,c=o?t[s+1]:0,l=s+2<t.length,u=l?t[s+2]:0,h=i>>2,d=(i&3)<<4|c>>4;let g=(c&15)<<2|u>>6,m=u&63;l||(m=64,o||(g=64)),r.push(n[h],n[d],n[g],n[m])}return r.join("")},encodeString(t,e){return this.HAS_NATIVE_SUPPORT&&!e?btoa(t):this.encodeByteArray(O_(t),e)},decodeString(t,e){return this.HAS_NATIVE_SUPPORT&&!e?atob(t):YA(this.decodeStringToByteArray(t,e))},decodeStringToByteArray(t,e){this.init_();const n=e?this.charToByteMapWebSafe_:this.charToByteMap_,r=[];for(let s=0;s<t.length;){const i=n[t.charAt(s++)],c=s<t.length?n[t.charAt(s)]:0;++s;const u=s<t.length?n[t.charAt(s)]:64;++s;const d=s<t.length?n[t.charAt(s)]:64;if(++s,i==null||c==null||u==null||d==null)throw new ZA;const g=i<<2|c>>4;if(r.push(g),u!==64){const m=c<<4&240|u>>2;if(r.push(m),d!==64){const P=u<<6&192|d;r.push(P)}}}return r},init_(){if(!this.byteToCharMap_){this.byteToCharMap_={},this.charToByteMap_={},this.byteToCharMapWebSafe_={},this.charToByteMapWebSafe_={};for(let t=0;t<this.ENCODED_VALS.length;t++)this.byteToCharMap_[t]=this.ENCODED_VALS.charAt(t),this.charToByteMap_[this.byteToCharMap_[t]]=t,this.byteToCharMapWebSafe_[t]=this.ENCODED_VALS_WEBSAFE.charAt(t),this.charToByteMapWebSafe_[this.byteToCharMapWebSafe_[t]]=t,t>=this.ENCODED_VALS_BASE.length&&(this.charToByteMap_[this.ENCODED_VALS_WEBSAFE.charAt(t)]=t,this.charToByteMapWebSafe_[this.ENCODED_VALS.charAt(t)]=t)}}};class ZA extends Error{constructor(){super(...arguments),this.name="DecodeBase64StringError"}}const eR=function(t){const e=O_(t);return N_.encodeByteArray(e,!0)},ba=function(t){return eR(t).replace(/\./g,"")},D_=function(t){try{return N_.decodeString(t,!0)}catch(e){console.error("base64Decode failed: ",e)}return null};/**
 * @license
 * Copyright 2022 Google LLC
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
 */function tR(){if(typeof self<"u")return self;if(typeof window<"u")return window;if(typeof global<"u")return global;throw new Error("Unable to locate global object.")}/**
 * @license
 * Copyright 2022 Google LLC
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
 */const nR=()=>tR().__FIREBASE_DEFAULTS__,rR=()=>{if(typeof process>"u"||typeof Zd>"u")return;const t=Zd.__FIREBASE_DEFAULTS__;if(t)return JSON.parse(t)},sR=()=>{if(typeof document>"u")return;let t;try{t=document.cookie.match(/__FIREBASE_DEFAULTS__=([^;]+)/)}catch{return}const e=t&&D_(t[1]);return e&&JSON.parse(e)},ic=()=>{try{return nR()||rR()||sR()}catch(t){console.info(`Unable to get __FIREBASE_DEFAULTS__ due to: ${t}`);return}},V_=t=>{var e,n;return(n=(e=ic())===null||e===void 0?void 0:e.emulatorHosts)===null||n===void 0?void 0:n[t]},iR=t=>{const e=V_(t);if(!e)return;const n=e.lastIndexOf(":");if(n<=0||n+1===e.length)throw new Error(`Invalid host ${e} with no separate hostname and port!`);const r=parseInt(e.substring(n+1),10);return e[0]==="["?[e.substring(1,n-1),r]:[e.substring(0,n),r]},x_=()=>{var t;return(t=ic())===null||t===void 0?void 0:t.config},M_=t=>{var e;return(e=ic())===null||e===void 0?void 0:e[`_${t}`]};/**
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
 */class oR{constructor(){this.reject=()=>{},this.resolve=()=>{},this.promise=new Promise((e,n)=>{this.resolve=e,this.reject=n})}wrapCallback(e){return(n,r)=>{n?this.reject(n):this.resolve(r),typeof e=="function"&&(this.promise.catch(()=>{}),e.length===1?e(n):e(n,r))}}}/**
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
 */function aR(t,e){if(t.uid)throw new Error('The "uid" field is no longer supported by mockUserToken. Please use "sub" instead for Firebase Auth User ID.');const n={alg:"none",type:"JWT"},r=e||"demo-project",s=t.iat||0,i=t.sub||t.user_id;if(!i)throw new Error("mockUserToken must contain 'sub' or 'user_id' field!");const o=Object.assign({iss:`https://securetoken.google.com/${r}`,aud:r,iat:s,exp:s+3600,auth_time:s,sub:i,user_id:i,firebase:{sign_in_provider:"custom",identities:{}}},t);return[ba(JSON.stringify(n)),ba(JSON.stringify(o)),""].join(".")}/**
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
 */function yt(){return typeof navigator<"u"&&typeof navigator.userAgent=="string"?navigator.userAgent:""}function cR(){return typeof window<"u"&&!!(window.cordova||window.phonegap||window.PhoneGap)&&/ios|iphone|ipod|ipad|android|blackberry|iemobile/i.test(yt())}function lR(){var t;const e=(t=ic())===null||t===void 0?void 0:t.forceEnvironment;if(e==="node")return!0;if(e==="browser")return!1;try{return Object.prototype.toString.call(globalThis.process)==="[object process]"}catch{return!1}}function uR(){const t=typeof chrome=="object"?chrome.runtime:typeof browser=="object"?browser.runtime:void 0;return typeof t=="object"&&t.id!==void 0}function hR(){return typeof navigator=="object"&&navigator.product==="ReactNative"}function fR(){const t=yt();return t.indexOf("MSIE ")>=0||t.indexOf("Trident/")>=0}function dR(){return!lR()&&!!navigator.userAgent&&navigator.userAgent.includes("Safari")&&!navigator.userAgent.includes("Chrome")}function pR(){try{return typeof indexedDB=="object"}catch{return!1}}function gR(){return new Promise((t,e)=>{try{let n=!0;const r="validate-browser-context-for-indexeddb-analytics-module",s=self.indexedDB.open(r);s.onsuccess=()=>{s.result.close(),n||self.indexedDB.deleteDatabase(r),t(!0)},s.onupgradeneeded=()=>{n=!1},s.onerror=()=>{var i;e(((i=s.error)===null||i===void 0?void 0:i.message)||"")}}catch(n){e(n)}})}/**
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
 */const mR="FirebaseError";class xn extends Error{constructor(e,n,r){super(n),this.code=e,this.customData=r,this.name=mR,Object.setPrototypeOf(this,xn.prototype),Error.captureStackTrace&&Error.captureStackTrace(this,ro.prototype.create)}}class ro{constructor(e,n,r){this.service=e,this.serviceName=n,this.errors=r}create(e,...n){const r=n[0]||{},s=`${this.service}/${e}`,i=this.errors[e],o=i?_R(i,r):"Error",c=`${this.serviceName}: ${o} (${s}).`;return new xn(s,c,r)}}function _R(t,e){return t.replace(yR,(n,r)=>{const s=e[r];return s!=null?String(s):`<${r}?>`})}const yR=/\{\$([^}]+)}/g;function vR(t){for(const e in t)if(Object.prototype.hasOwnProperty.call(t,e))return!1;return!0}function Aa(t,e){if(t===e)return!0;const n=Object.keys(t),r=Object.keys(e);for(const s of n){if(!r.includes(s))return!1;const i=t[s],o=e[s];if(ep(i)&&ep(o)){if(!Aa(i,o))return!1}else if(i!==o)return!1}for(const s of r)if(!n.includes(s))return!1;return!0}function ep(t){return t!==null&&typeof t=="object"}/**
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
 */function so(t){const e=[];for(const[n,r]of Object.entries(t))Array.isArray(r)?r.forEach(s=>{e.push(encodeURIComponent(n)+"="+encodeURIComponent(s))}):e.push(encodeURIComponent(n)+"="+encodeURIComponent(r));return e.length?"&"+e.join("&"):""}function di(t){const e={};return t.replace(/^\?/,"").split("&").forEach(r=>{if(r){const[s,i]=r.split("=");e[decodeURIComponent(s)]=decodeURIComponent(i)}}),e}function pi(t){const e=t.indexOf("?");if(!e)return"";const n=t.indexOf("#",e);return t.substring(e,n>0?n:void 0)}function ER(t,e){const n=new TR(t,e);return n.subscribe.bind(n)}class TR{constructor(e,n){this.observers=[],this.unsubscribes=[],this.observerCount=0,this.task=Promise.resolve(),this.finalized=!1,this.onNoObservers=n,this.task.then(()=>{e(this)}).catch(r=>{this.error(r)})}next(e){this.forEachObserver(n=>{n.next(e)})}error(e){this.forEachObserver(n=>{n.error(e)}),this.close(e)}complete(){this.forEachObserver(e=>{e.complete()}),this.close()}subscribe(e,n,r){let s;if(e===void 0&&n===void 0&&r===void 0)throw new Error("Missing Observer.");wR(e,["next","error","complete"])?s=e:s={next:e,error:n,complete:r},s.next===void 0&&(s.next=tl),s.error===void 0&&(s.error=tl),s.complete===void 0&&(s.complete=tl);const i=this.unsubscribeOne.bind(this,this.observers.length);return this.finalized&&this.task.then(()=>{try{this.finalError?s.error(this.finalError):s.complete()}catch{}}),this.observers.push(s),i}unsubscribeOne(e){this.observers===void 0||this.observers[e]===void 0||(delete this.observers[e],this.observerCount-=1,this.observerCount===0&&this.onNoObservers!==void 0&&this.onNoObservers(this))}forEachObserver(e){if(!this.finalized)for(let n=0;n<this.observers.length;n++)this.sendOne(n,e)}sendOne(e,n){this.task.then(()=>{if(this.observers!==void 0&&this.observers[e]!==void 0)try{n(this.observers[e])}catch(r){typeof console<"u"&&console.error&&console.error(r)}})}close(e){this.finalized||(this.finalized=!0,e!==void 0&&(this.finalError=e),this.task.then(()=>{this.observers=void 0,this.onNoObservers=void 0}))}}function wR(t,e){if(typeof t!="object"||t===null)return!1;for(const n of e)if(n in t&&typeof t[n]=="function")return!0;return!1}function tl(){}/**
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
 */function Bt(t){return t&&t._delegate?t._delegate:t}class Fr{constructor(e,n,r){this.name=e,this.instanceFactory=n,this.type=r,this.multipleInstances=!1,this.serviceProps={},this.instantiationMode="LAZY",this.onInstanceCreated=null}setInstantiationMode(e){return this.instantiationMode=e,this}setMultipleInstances(e){return this.multipleInstances=e,this}setServiceProps(e){return this.serviceProps=e,this}setInstanceCreatedCallback(e){return this.onInstanceCreated=e,this}}/**
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
 */const Rr="[DEFAULT]";/**
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
 */class IR{constructor(e,n){this.name=e,this.container=n,this.component=null,this.instances=new Map,this.instancesDeferred=new Map,this.instancesOptions=new Map,this.onInitCallbacks=new Map}get(e){const n=this.normalizeInstanceIdentifier(e);if(!this.instancesDeferred.has(n)){const r=new oR;if(this.instancesDeferred.set(n,r),this.isInitialized(n)||this.shouldAutoInitialize())try{const s=this.getOrInitializeService({instanceIdentifier:n});s&&r.resolve(s)}catch{}}return this.instancesDeferred.get(n).promise}getImmediate(e){var n;const r=this.normalizeInstanceIdentifier(e==null?void 0:e.identifier),s=(n=e==null?void 0:e.optional)!==null&&n!==void 0?n:!1;if(this.isInitialized(r)||this.shouldAutoInitialize())try{return this.getOrInitializeService({instanceIdentifier:r})}catch(i){if(s)return null;throw i}else{if(s)return null;throw Error(`Service ${this.name} is not available`)}}getComponent(){return this.component}setComponent(e){if(e.name!==this.name)throw Error(`Mismatching Component ${e.name} for Provider ${this.name}.`);if(this.component)throw Error(`Component for ${this.name} has already been provided`);if(this.component=e,!!this.shouldAutoInitialize()){if(AR(e))try{this.getOrInitializeService({instanceIdentifier:Rr})}catch{}for(const[n,r]of this.instancesDeferred.entries()){const s=this.normalizeInstanceIdentifier(n);try{const i=this.getOrInitializeService({instanceIdentifier:s});r.resolve(i)}catch{}}}}clearInstance(e=Rr){this.instancesDeferred.delete(e),this.instancesOptions.delete(e),this.instances.delete(e)}async delete(){const e=Array.from(this.instances.values());await Promise.all([...e.filter(n=>"INTERNAL"in n).map(n=>n.INTERNAL.delete()),...e.filter(n=>"_delete"in n).map(n=>n._delete())])}isComponentSet(){return this.component!=null}isInitialized(e=Rr){return this.instances.has(e)}getOptions(e=Rr){return this.instancesOptions.get(e)||{}}initialize(e={}){const{options:n={}}=e,r=this.normalizeInstanceIdentifier(e.instanceIdentifier);if(this.isInitialized(r))throw Error(`${this.name}(${r}) has already been initialized`);if(!this.isComponentSet())throw Error(`Component ${this.name} has not been registered yet`);const s=this.getOrInitializeService({instanceIdentifier:r,options:n});for(const[i,o]of this.instancesDeferred.entries()){const c=this.normalizeInstanceIdentifier(i);r===c&&o.resolve(s)}return s}onInit(e,n){var r;const s=this.normalizeInstanceIdentifier(n),i=(r=this.onInitCallbacks.get(s))!==null&&r!==void 0?r:new Set;i.add(e),this.onInitCallbacks.set(s,i);const o=this.instances.get(s);return o&&e(o,s),()=>{i.delete(e)}}invokeOnInitCallbacks(e,n){const r=this.onInitCallbacks.get(n);if(r)for(const s of r)try{s(e,n)}catch{}}getOrInitializeService({instanceIdentifier:e,options:n={}}){let r=this.instances.get(e);if(!r&&this.component&&(r=this.component.instanceFactory(this.container,{instanceIdentifier:bR(e),options:n}),this.instances.set(e,r),this.instancesOptions.set(e,n),this.invokeOnInitCallbacks(r,e),this.component.onInstanceCreated))try{this.component.onInstanceCreated(this.container,e,r)}catch{}return r||null}normalizeInstanceIdentifier(e=Rr){return this.component?this.component.multipleInstances?e:Rr:e}shouldAutoInitialize(){return!!this.component&&this.component.instantiationMode!=="EXPLICIT"}}function bR(t){return t===Rr?void 0:t}function AR(t){return t.instantiationMode==="EAGER"}/**
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
 */class RR{constructor(e){this.name=e,this.providers=new Map}addComponent(e){const n=this.getProvider(e.name);if(n.isComponentSet())throw new Error(`Component ${e.name} has already been registered with ${this.name}`);n.setComponent(e)}addOrOverwriteComponent(e){this.getProvider(e.name).isComponentSet()&&this.providers.delete(e.name),this.addComponent(e)}getProvider(e){if(this.providers.has(e))return this.providers.get(e);const n=new IR(e,this);return this.providers.set(e,n),n}getProviders(){return Array.from(this.providers.values())}}/**
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
 */var ve;(function(t){t[t.DEBUG=0]="DEBUG",t[t.VERBOSE=1]="VERBOSE",t[t.INFO=2]="INFO",t[t.WARN=3]="WARN",t[t.ERROR=4]="ERROR",t[t.SILENT=5]="SILENT"})(ve||(ve={}));const SR={debug:ve.DEBUG,verbose:ve.VERBOSE,info:ve.INFO,warn:ve.WARN,error:ve.ERROR,silent:ve.SILENT},PR=ve.INFO,CR={[ve.DEBUG]:"log",[ve.VERBOSE]:"log",[ve.INFO]:"info",[ve.WARN]:"warn",[ve.ERROR]:"error"},kR=(t,e,...n)=>{if(e<t.logLevel)return;const r=new Date().toISOString(),s=CR[e];if(s)console[s](`[${r}]  ${t.name}:`,...n);else throw new Error(`Attempted to log a message with an invalid logType (value: ${e})`)};class $u{constructor(e){this.name=e,this._logLevel=PR,this._logHandler=kR,this._userLogHandler=null}get logLevel(){return this._logLevel}set logLevel(e){if(!(e in ve))throw new TypeError(`Invalid value "${e}" assigned to \`logLevel\``);this._logLevel=e}setLogLevel(e){this._logLevel=typeof e=="string"?SR[e]:e}get logHandler(){return this._logHandler}set logHandler(e){if(typeof e!="function")throw new TypeError("Value assigned to `logHandler` must be a function");this._logHandler=e}get userLogHandler(){return this._userLogHandler}set userLogHandler(e){this._userLogHandler=e}debug(...e){this._userLogHandler&&this._userLogHandler(this,ve.DEBUG,...e),this._logHandler(this,ve.DEBUG,...e)}log(...e){this._userLogHandler&&this._userLogHandler(this,ve.VERBOSE,...e),this._logHandler(this,ve.VERBOSE,...e)}info(...e){this._userLogHandler&&this._userLogHandler(this,ve.INFO,...e),this._logHandler(this,ve.INFO,...e)}warn(...e){this._userLogHandler&&this._userLogHandler(this,ve.WARN,...e),this._logHandler(this,ve.WARN,...e)}error(...e){this._userLogHandler&&this._userLogHandler(this,ve.ERROR,...e),this._logHandler(this,ve.ERROR,...e)}}const OR=(t,e)=>e.some(n=>t instanceof n);let tp,np;function NR(){return tp||(tp=[IDBDatabase,IDBObjectStore,IDBIndex,IDBCursor,IDBTransaction])}function DR(){return np||(np=[IDBCursor.prototype.advance,IDBCursor.prototype.continue,IDBCursor.prototype.continuePrimaryKey])}const L_=new WeakMap,ql=new WeakMap,F_=new WeakMap,nl=new WeakMap,Hu=new WeakMap;function VR(t){const e=new Promise((n,r)=>{const s=()=>{t.removeEventListener("success",i),t.removeEventListener("error",o)},i=()=>{n(tr(t.result)),s()},o=()=>{r(t.error),s()};t.addEventListener("success",i),t.addEventListener("error",o)});return e.then(n=>{n instanceof IDBCursor&&L_.set(n,t)}).catch(()=>{}),Hu.set(e,t),e}function xR(t){if(ql.has(t))return;const e=new Promise((n,r)=>{const s=()=>{t.removeEventListener("complete",i),t.removeEventListener("error",o),t.removeEventListener("abort",o)},i=()=>{n(),s()},o=()=>{r(t.error||new DOMException("AbortError","AbortError")),s()};t.addEventListener("complete",i),t.addEventListener("error",o),t.addEventListener("abort",o)});ql.set(t,e)}let Wl={get(t,e,n){if(t instanceof IDBTransaction){if(e==="done")return ql.get(t);if(e==="objectStoreNames")return t.objectStoreNames||F_.get(t);if(e==="store")return n.objectStoreNames[1]?void 0:n.objectStore(n.objectStoreNames[0])}return tr(t[e])},set(t,e,n){return t[e]=n,!0},has(t,e){return t instanceof IDBTransaction&&(e==="done"||e==="store")?!0:e in t}};function MR(t){Wl=t(Wl)}function LR(t){return t===IDBDatabase.prototype.transaction&&!("objectStoreNames"in IDBTransaction.prototype)?function(e,...n){const r=t.call(rl(this),e,...n);return F_.set(r,e.sort?e.sort():[e]),tr(r)}:DR().includes(t)?function(...e){return t.apply(rl(this),e),tr(L_.get(this))}:function(...e){return tr(t.apply(rl(this),e))}}function FR(t){return typeof t=="function"?LR(t):(t instanceof IDBTransaction&&xR(t),OR(t,NR())?new Proxy(t,Wl):t)}function tr(t){if(t instanceof IDBRequest)return VR(t);if(nl.has(t))return nl.get(t);const e=FR(t);return e!==t&&(nl.set(t,e),Hu.set(e,t)),e}const rl=t=>Hu.get(t);function UR(t,e,{blocked:n,upgrade:r,blocking:s,terminated:i}={}){const o=indexedDB.open(t,e),c=tr(o);return r&&o.addEventListener("upgradeneeded",l=>{r(tr(o.result),l.oldVersion,l.newVersion,tr(o.transaction),l)}),n&&o.addEventListener("blocked",l=>n(l.oldVersion,l.newVersion,l)),c.then(l=>{i&&l.addEventListener("close",()=>i()),s&&l.addEventListener("versionchange",u=>s(u.oldVersion,u.newVersion,u))}).catch(()=>{}),c}const BR=["get","getKey","getAll","getAllKeys","count"],jR=["put","add","delete","clear"],sl=new Map;function rp(t,e){if(!(t instanceof IDBDatabase&&!(e in t)&&typeof e=="string"))return;if(sl.get(e))return sl.get(e);const n=e.replace(/FromIndex$/,""),r=e!==n,s=jR.includes(n);if(!(n in(r?IDBIndex:IDBObjectStore).prototype)||!(s||BR.includes(n)))return;const i=async function(o,...c){const l=this.transaction(o,s?"readwrite":"readonly");let u=l.store;return r&&(u=u.index(c.shift())),(await Promise.all([u[n](...c),s&&l.done]))[0]};return sl.set(e,i),i}MR(t=>({...t,get:(e,n,r)=>rp(e,n)||t.get(e,n,r),has:(e,n)=>!!rp(e,n)||t.has(e,n)}));/**
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
 */class $R{constructor(e){this.container=e}getPlatformInfoString(){return this.container.getProviders().map(n=>{if(HR(n)){const r=n.getImmediate();return`${r.library}/${r.version}`}else return null}).filter(n=>n).join(" ")}}function HR(t){const e=t.getComponent();return(e==null?void 0:e.type)==="VERSION"}const Kl="@firebase/app",sp="0.10.10";/**
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
 */const Cn=new $u("@firebase/app"),qR="@firebase/app-compat",WR="@firebase/analytics-compat",KR="@firebase/analytics",zR="@firebase/app-check-compat",GR="@firebase/app-check",QR="@firebase/auth",JR="@firebase/auth-compat",XR="@firebase/database",YR="@firebase/database-compat",ZR="@firebase/functions",eS="@firebase/functions-compat",tS="@firebase/installations",nS="@firebase/installations-compat",rS="@firebase/messaging",sS="@firebase/messaging-compat",iS="@firebase/performance",oS="@firebase/performance-compat",aS="@firebase/remote-config",cS="@firebase/remote-config-compat",lS="@firebase/storage",uS="@firebase/storage-compat",hS="@firebase/firestore",fS="@firebase/vertexai-preview",dS="@firebase/firestore-compat",pS="firebase",gS="10.13.1";/**
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
 */const zl="[DEFAULT]",mS={[Kl]:"fire-core",[qR]:"fire-core-compat",[KR]:"fire-analytics",[WR]:"fire-analytics-compat",[GR]:"fire-app-check",[zR]:"fire-app-check-compat",[QR]:"fire-auth",[JR]:"fire-auth-compat",[XR]:"fire-rtdb",[YR]:"fire-rtdb-compat",[ZR]:"fire-fn",[eS]:"fire-fn-compat",[tS]:"fire-iid",[nS]:"fire-iid-compat",[rS]:"fire-fcm",[sS]:"fire-fcm-compat",[iS]:"fire-perf",[oS]:"fire-perf-compat",[aS]:"fire-rc",[cS]:"fire-rc-compat",[lS]:"fire-gcs",[uS]:"fire-gcs-compat",[hS]:"fire-fst",[dS]:"fire-fst-compat",[fS]:"fire-vertex","fire-js":"fire-js",[pS]:"fire-js-all"};/**
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
 */const Ra=new Map,_S=new Map,Gl=new Map;function ip(t,e){try{t.container.addComponent(e)}catch(n){Cn.debug(`Component ${e.name} failed to register with FirebaseApp ${t.name}`,n)}}function Ps(t){const e=t.name;if(Gl.has(e))return Cn.debug(`There were multiple attempts to register component ${e}.`),!1;Gl.set(e,t);for(const n of Ra.values())ip(n,t);for(const n of _S.values())ip(n,t);return!0}function qu(t,e){const n=t.container.getProvider("heartbeat").getImmediate({optional:!0});return n&&n.triggerHeartbeat(),t.container.getProvider(e)}function on(t){return t.settings!==void 0}/**
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
 */const yS={"no-app":"No Firebase App '{$appName}' has been created - call initializeApp() first","bad-app-name":"Illegal App name: '{$appName}'","duplicate-app":"Firebase App named '{$appName}' already exists with different options or config","app-deleted":"Firebase App named '{$appName}' already deleted","server-app-deleted":"Firebase Server App has been deleted","no-options":"Need to provide options, when not being deployed to hosting via source.","invalid-app-argument":"firebase.{$appName}() takes either no argument or a Firebase App instance.","invalid-log-argument":"First argument to `onLog` must be null or a function.","idb-open":"Error thrown when opening IndexedDB. Original error: {$originalErrorMessage}.","idb-get":"Error thrown when reading from IndexedDB. Original error: {$originalErrorMessage}.","idb-set":"Error thrown when writing to IndexedDB. Original error: {$originalErrorMessage}.","idb-delete":"Error thrown when deleting from IndexedDB. Original error: {$originalErrorMessage}.","finalization-registry-not-supported":"FirebaseServerApp deleteOnDeref field defined but the JS runtime does not support FinalizationRegistry.","invalid-server-app-environment":"FirebaseServerApp is not for use in browser environments."},nr=new ro("app","Firebase",yS);/**
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
 */class vS{constructor(e,n,r){this._isDeleted=!1,this._options=Object.assign({},e),this._config=Object.assign({},n),this._name=n.name,this._automaticDataCollectionEnabled=n.automaticDataCollectionEnabled,this._container=r,this.container.addComponent(new Fr("app",()=>this,"PUBLIC"))}get automaticDataCollectionEnabled(){return this.checkDestroyed(),this._automaticDataCollectionEnabled}set automaticDataCollectionEnabled(e){this.checkDestroyed(),this._automaticDataCollectionEnabled=e}get name(){return this.checkDestroyed(),this._name}get options(){return this.checkDestroyed(),this._options}get config(){return this.checkDestroyed(),this._config}get container(){return this._container}get isDeleted(){return this._isDeleted}set isDeleted(e){this._isDeleted=e}checkDestroyed(){if(this.isDeleted)throw nr.create("app-deleted",{appName:this._name})}}/**
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
 */const $s=gS;function U_(t,e={}){let n=t;typeof e!="object"&&(e={name:e});const r=Object.assign({name:zl,automaticDataCollectionEnabled:!1},e),s=r.name;if(typeof s!="string"||!s)throw nr.create("bad-app-name",{appName:String(s)});if(n||(n=x_()),!n)throw nr.create("no-options");const i=Ra.get(s);if(i){if(Aa(n,i.options)&&Aa(r,i.config))return i;throw nr.create("duplicate-app",{appName:s})}const o=new RR(s);for(const l of Gl.values())o.addComponent(l);const c=new vS(n,r,o);return Ra.set(s,c),c}function B_(t=zl){const e=Ra.get(t);if(!e&&t===zl&&x_())return U_();if(!e)throw nr.create("no-app",{appName:t});return e}function rr(t,e,n){var r;let s=(r=mS[t])!==null&&r!==void 0?r:t;n&&(s+=`-${n}`);const i=s.match(/\s|\//),o=e.match(/\s|\//);if(i||o){const c=[`Unable to register library "${s}" with version "${e}":`];i&&c.push(`library name "${s}" contains illegal characters (whitespace or "/")`),i&&o&&c.push("and"),o&&c.push(`version name "${e}" contains illegal characters (whitespace or "/")`),Cn.warn(c.join(" "));return}Ps(new Fr(`${s}-version`,()=>({library:s,version:e}),"VERSION"))}/**
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
 */const ES="firebase-heartbeat-database",TS=1,ji="firebase-heartbeat-store";let il=null;function j_(){return il||(il=UR(ES,TS,{upgrade:(t,e)=>{switch(e){case 0:try{t.createObjectStore(ji)}catch(n){console.warn(n)}}}}).catch(t=>{throw nr.create("idb-open",{originalErrorMessage:t.message})})),il}async function wS(t){try{const n=(await j_()).transaction(ji),r=await n.objectStore(ji).get($_(t));return await n.done,r}catch(e){if(e instanceof xn)Cn.warn(e.message);else{const n=nr.create("idb-get",{originalErrorMessage:e==null?void 0:e.message});Cn.warn(n.message)}}}async function op(t,e){try{const r=(await j_()).transaction(ji,"readwrite");await r.objectStore(ji).put(e,$_(t)),await r.done}catch(n){if(n instanceof xn)Cn.warn(n.message);else{const r=nr.create("idb-set",{originalErrorMessage:n==null?void 0:n.message});Cn.warn(r.message)}}}function $_(t){return`${t.name}!${t.options.appId}`}/**
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
 */const IS=1024,bS=30*24*60*60*1e3;class AS{constructor(e){this.container=e,this._heartbeatsCache=null;const n=this.container.getProvider("app").getImmediate();this._storage=new SS(n),this._heartbeatsCachePromise=this._storage.read().then(r=>(this._heartbeatsCache=r,r))}async triggerHeartbeat(){var e,n;try{const s=this.container.getProvider("platform-logger").getImmediate().getPlatformInfoString(),i=ap();return((e=this._heartbeatsCache)===null||e===void 0?void 0:e.heartbeats)==null&&(this._heartbeatsCache=await this._heartbeatsCachePromise,((n=this._heartbeatsCache)===null||n===void 0?void 0:n.heartbeats)==null)||this._heartbeatsCache.lastSentHeartbeatDate===i||this._heartbeatsCache.heartbeats.some(o=>o.date===i)?void 0:(this._heartbeatsCache.heartbeats.push({date:i,agent:s}),this._heartbeatsCache.heartbeats=this._heartbeatsCache.heartbeats.filter(o=>{const c=new Date(o.date).valueOf();return Date.now()-c<=bS}),this._storage.overwrite(this._heartbeatsCache))}catch(r){Cn.warn(r)}}async getHeartbeatsHeader(){var e;try{if(this._heartbeatsCache===null&&await this._heartbeatsCachePromise,((e=this._heartbeatsCache)===null||e===void 0?void 0:e.heartbeats)==null||this._heartbeatsCache.heartbeats.length===0)return"";const n=ap(),{heartbeatsToSend:r,unsentEntries:s}=RS(this._heartbeatsCache.heartbeats),i=ba(JSON.stringify({version:2,heartbeats:r}));return this._heartbeatsCache.lastSentHeartbeatDate=n,s.length>0?(this._heartbeatsCache.heartbeats=s,await this._storage.overwrite(this._heartbeatsCache)):(this._heartbeatsCache.heartbeats=[],this._storage.overwrite(this._heartbeatsCache)),i}catch(n){return Cn.warn(n),""}}}function ap(){return new Date().toISOString().substring(0,10)}function RS(t,e=IS){const n=[];let r=t.slice();for(const s of t){const i=n.find(o=>o.agent===s.agent);if(i){if(i.dates.push(s.date),cp(n)>e){i.dates.pop();break}}else if(n.push({agent:s.agent,dates:[s.date]}),cp(n)>e){n.pop();break}r=r.slice(1)}return{heartbeatsToSend:n,unsentEntries:r}}class SS{constructor(e){this.app=e,this._canUseIndexedDBPromise=this.runIndexedDBEnvironmentCheck()}async runIndexedDBEnvironmentCheck(){return pR()?gR().then(()=>!0).catch(()=>!1):!1}async read(){if(await this._canUseIndexedDBPromise){const n=await wS(this.app);return n!=null&&n.heartbeats?n:{heartbeats:[]}}else return{heartbeats:[]}}async overwrite(e){var n;if(await this._canUseIndexedDBPromise){const s=await this.read();return op(this.app,{lastSentHeartbeatDate:(n=e.lastSentHeartbeatDate)!==null&&n!==void 0?n:s.lastSentHeartbeatDate,heartbeats:e.heartbeats})}else return}async add(e){var n;if(await this._canUseIndexedDBPromise){const s=await this.read();return op(this.app,{lastSentHeartbeatDate:(n=e.lastSentHeartbeatDate)!==null&&n!==void 0?n:s.lastSentHeartbeatDate,heartbeats:[...s.heartbeats,...e.heartbeats]})}else return}}function cp(t){return ba(JSON.stringify({version:2,heartbeats:t})).length}/**
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
 */function PS(t){Ps(new Fr("platform-logger",e=>new $R(e),"PRIVATE")),Ps(new Fr("heartbeat",e=>new AS(e),"PRIVATE")),rr(Kl,sp,t),rr(Kl,sp,"esm2017"),rr("fire-js","")}PS("");var CS="firebase",kS="10.13.1";/**
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
 */rr(CS,kS,"app");function Wu(t,e){var n={};for(var r in t)Object.prototype.hasOwnProperty.call(t,r)&&e.indexOf(r)<0&&(n[r]=t[r]);if(t!=null&&typeof Object.getOwnPropertySymbols=="function")for(var s=0,r=Object.getOwnPropertySymbols(t);s<r.length;s++)e.indexOf(r[s])<0&&Object.prototype.propertyIsEnumerable.call(t,r[s])&&(n[r[s]]=t[r[s]]);return n}function H_(){return{"dependent-sdk-initialized-before-auth":"Another Firebase SDK was initialized and is trying to use Auth before Auth is initialized. Please be sure to call `initializeAuth` or `getAuth` before starting any other Firebase SDK."}}const OS=H_,q_=new ro("auth","Firebase",H_());/**
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
 */const Sa=new $u("@firebase/auth");function NS(t,...e){Sa.logLevel<=ve.WARN&&Sa.warn(`Auth (${$s}): ${t}`,...e)}function Zo(t,...e){Sa.logLevel<=ve.ERROR&&Sa.error(`Auth (${$s}): ${t}`,...e)}/**
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
 */function jt(t,...e){throw zu(t,...e)}function Qt(t,...e){return zu(t,...e)}function Ku(t,e,n){const r=Object.assign(Object.assign({},OS()),{[e]:n});return new ro("auth","Firebase",r).create(e,{appName:t.name})}function sr(t){return Ku(t,"operation-not-supported-in-this-environment","Operations that alter the current user are not supported in conjunction with FirebaseServerApp")}function DS(t,e,n){const r=n;if(!(e instanceof r))throw r.name!==e.constructor.name&&jt(t,"argument-error"),Ku(t,"argument-error",`Type of ${e.constructor.name} does not match expected instance.Did you pass a reference from a different Auth SDK?`)}function zu(t,...e){if(typeof t!="string"){const n=e[0],r=[...e.slice(1)];return r[0]&&(r[0].appName=t.name),t._errorFactory.create(n,...r)}return q_.create(t,...e)}function he(t,e,...n){if(!t)throw zu(e,...n)}function In(t){const e="INTERNAL ASSERTION FAILED: "+t;throw Zo(e),new Error(e)}function kn(t,e){t||In(e)}/**
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
 */function Ql(){var t;return typeof self<"u"&&((t=self.location)===null||t===void 0?void 0:t.href)||""}function VS(){return lp()==="http:"||lp()==="https:"}function lp(){var t;return typeof self<"u"&&((t=self.location)===null||t===void 0?void 0:t.protocol)||null}/**
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
 */function xS(){return typeof navigator<"u"&&navigator&&"onLine"in navigator&&typeof navigator.onLine=="boolean"&&(VS()||uR()||"connection"in navigator)?navigator.onLine:!0}function MS(){if(typeof navigator>"u")return null;const t=navigator;return t.languages&&t.languages[0]||t.language||null}/**
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
 */class io{constructor(e,n){this.shortDelay=e,this.longDelay=n,kn(n>e,"Short delay should be less than long delay!"),this.isMobile=cR()||hR()}get(){return xS()?this.isMobile?this.longDelay:this.shortDelay:Math.min(5e3,this.shortDelay)}}/**
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
 */function Gu(t,e){kn(t.emulator,"Emulator should always be set here");const{url:n}=t.emulator;return e?`${n}${e.startsWith("/")?e.slice(1):e}`:n}/**
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
 */class W_{static initialize(e,n,r){this.fetchImpl=e,n&&(this.headersImpl=n),r&&(this.responseImpl=r)}static fetch(){if(this.fetchImpl)return this.fetchImpl;if(typeof self<"u"&&"fetch"in self)return self.fetch;if(typeof globalThis<"u"&&globalThis.fetch)return globalThis.fetch;if(typeof fetch<"u")return fetch;In("Could not find fetch implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}static headers(){if(this.headersImpl)return this.headersImpl;if(typeof self<"u"&&"Headers"in self)return self.Headers;if(typeof globalThis<"u"&&globalThis.Headers)return globalThis.Headers;if(typeof Headers<"u")return Headers;In("Could not find Headers implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}static response(){if(this.responseImpl)return this.responseImpl;if(typeof self<"u"&&"Response"in self)return self.Response;if(typeof globalThis<"u"&&globalThis.Response)return globalThis.Response;if(typeof Response<"u")return Response;In("Could not find Response implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}}/**
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
 */const LS={CREDENTIAL_MISMATCH:"custom-token-mismatch",MISSING_CUSTOM_TOKEN:"internal-error",INVALID_IDENTIFIER:"invalid-email",MISSING_CONTINUE_URI:"internal-error",INVALID_PASSWORD:"wrong-password",MISSING_PASSWORD:"missing-password",INVALID_LOGIN_CREDENTIALS:"invalid-credential",EMAIL_EXISTS:"email-already-in-use",PASSWORD_LOGIN_DISABLED:"operation-not-allowed",INVALID_IDP_RESPONSE:"invalid-credential",INVALID_PENDING_TOKEN:"invalid-credential",FEDERATED_USER_ID_ALREADY_LINKED:"credential-already-in-use",MISSING_REQ_TYPE:"internal-error",EMAIL_NOT_FOUND:"user-not-found",RESET_PASSWORD_EXCEED_LIMIT:"too-many-requests",EXPIRED_OOB_CODE:"expired-action-code",INVALID_OOB_CODE:"invalid-action-code",MISSING_OOB_CODE:"internal-error",CREDENTIAL_TOO_OLD_LOGIN_AGAIN:"requires-recent-login",INVALID_ID_TOKEN:"invalid-user-token",TOKEN_EXPIRED:"user-token-expired",USER_NOT_FOUND:"user-token-expired",TOO_MANY_ATTEMPTS_TRY_LATER:"too-many-requests",PASSWORD_DOES_NOT_MEET_REQUIREMENTS:"password-does-not-meet-requirements",INVALID_CODE:"invalid-verification-code",INVALID_SESSION_INFO:"invalid-verification-id",INVALID_TEMPORARY_PROOF:"invalid-credential",MISSING_SESSION_INFO:"missing-verification-id",SESSION_EXPIRED:"code-expired",MISSING_ANDROID_PACKAGE_NAME:"missing-android-pkg-name",UNAUTHORIZED_DOMAIN:"unauthorized-continue-uri",INVALID_OAUTH_CLIENT_ID:"invalid-oauth-client-id",ADMIN_ONLY_OPERATION:"admin-restricted-operation",INVALID_MFA_PENDING_CREDENTIAL:"invalid-multi-factor-session",MFA_ENROLLMENT_NOT_FOUND:"multi-factor-info-not-found",MISSING_MFA_ENROLLMENT_ID:"missing-multi-factor-info",MISSING_MFA_PENDING_CREDENTIAL:"missing-multi-factor-session",SECOND_FACTOR_EXISTS:"second-factor-already-in-use",SECOND_FACTOR_LIMIT_EXCEEDED:"maximum-second-factor-count-exceeded",BLOCKING_FUNCTION_ERROR_RESPONSE:"internal-error",RECAPTCHA_NOT_ENABLED:"recaptcha-not-enabled",MISSING_RECAPTCHA_TOKEN:"missing-recaptcha-token",INVALID_RECAPTCHA_TOKEN:"invalid-recaptcha-token",INVALID_RECAPTCHA_ACTION:"invalid-recaptcha-action",MISSING_CLIENT_TYPE:"missing-client-type",MISSING_RECAPTCHA_VERSION:"missing-recaptcha-version",INVALID_RECAPTCHA_VERSION:"invalid-recaptcha-version",INVALID_REQ_TYPE:"invalid-req-type"};/**
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
 */const FS=new io(3e4,6e4);function Wr(t,e){return t.tenantId&&!e.tenantId?Object.assign(Object.assign({},e),{tenantId:t.tenantId}):e}async function gr(t,e,n,r,s={}){return K_(t,s,async()=>{let i={},o={};r&&(e==="GET"?o=r:i={body:JSON.stringify(r)});const c=so(Object.assign({key:t.config.apiKey},o)).slice(1),l=await t._getAdditionalHeaders();return l["Content-Type"]="application/json",t.languageCode&&(l["X-Firebase-Locale"]=t.languageCode),W_.fetch()(z_(t,t.config.apiHost,n,c),Object.assign({method:e,headers:l,referrerPolicy:"no-referrer"},i))})}async function K_(t,e,n){t._canInitEmulator=!1;const r=Object.assign(Object.assign({},LS),e);try{const s=new BS(t),i=await Promise.race([n(),s.promise]);s.clearNetworkTimeout();const o=await i.json();if("needConfirmation"in o)throw Ho(t,"account-exists-with-different-credential",o);if(i.ok&&!("errorMessage"in o))return o;{const c=i.ok?o.errorMessage:o.error.message,[l,u]=c.split(" : ");if(l==="FEDERATED_USER_ID_ALREADY_LINKED")throw Ho(t,"credential-already-in-use",o);if(l==="EMAIL_EXISTS")throw Ho(t,"email-already-in-use",o);if(l==="USER_DISABLED")throw Ho(t,"user-disabled",o);const h=r[l]||l.toLowerCase().replace(/[_\s]+/g,"-");if(u)throw Ku(t,h,u);jt(t,h)}}catch(s){if(s instanceof xn)throw s;jt(t,"network-request-failed",{message:String(s)})}}async function oc(t,e,n,r,s={}){const i=await gr(t,e,n,r,s);return"mfaPendingCredential"in i&&jt(t,"multi-factor-auth-required",{_serverResponse:i}),i}function z_(t,e,n,r){const s=`${e}${n}?${r}`;return t.config.emulator?Gu(t.config,s):`${t.config.apiScheme}://${s}`}function US(t){switch(t){case"ENFORCE":return"ENFORCE";case"AUDIT":return"AUDIT";case"OFF":return"OFF";default:return"ENFORCEMENT_STATE_UNSPECIFIED"}}class BS{constructor(e){this.auth=e,this.timer=null,this.promise=new Promise((n,r)=>{this.timer=setTimeout(()=>r(Qt(this.auth,"network-request-failed")),FS.get())})}clearNetworkTimeout(){clearTimeout(this.timer)}}function Ho(t,e,n){const r={appName:t.name};n.email&&(r.email=n.email),n.phoneNumber&&(r.phoneNumber=n.phoneNumber);const s=Qt(t,e,r);return s.customData._tokenResponse=n,s}function up(t){return t!==void 0&&t.enterprise!==void 0}class jS{constructor(e){if(this.siteKey="",this.recaptchaEnforcementState=[],e.recaptchaKey===void 0)throw new Error("recaptchaKey undefined");this.siteKey=e.recaptchaKey.split("/")[3],this.recaptchaEnforcementState=e.recaptchaEnforcementState}getProviderEnforcementState(e){if(!this.recaptchaEnforcementState||this.recaptchaEnforcementState.length===0)return null;for(const n of this.recaptchaEnforcementState)if(n.provider&&n.provider===e)return US(n.enforcementState);return null}isProviderEnabled(e){return this.getProviderEnforcementState(e)==="ENFORCE"||this.getProviderEnforcementState(e)==="AUDIT"}}async function $S(t,e){return gr(t,"GET","/v2/recaptchaConfig",Wr(t,e))}/**
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
 */async function HS(t,e){return gr(t,"POST","/v1/accounts:delete",e)}async function G_(t,e){return gr(t,"POST","/v1/accounts:lookup",e)}/**
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
 */function Ri(t){if(t)try{const e=new Date(Number(t));if(!isNaN(e.getTime()))return e.toUTCString()}catch{}}async function qS(t,e=!1){const n=Bt(t),r=await n.getIdToken(e),s=Qu(r);he(s&&s.exp&&s.auth_time&&s.iat,n.auth,"internal-error");const i=typeof s.firebase=="object"?s.firebase:void 0,o=i==null?void 0:i.sign_in_provider;return{claims:s,token:r,authTime:Ri(ol(s.auth_time)),issuedAtTime:Ri(ol(s.iat)),expirationTime:Ri(ol(s.exp)),signInProvider:o||null,signInSecondFactor:(i==null?void 0:i.sign_in_second_factor)||null}}function ol(t){return Number(t)*1e3}function Qu(t){const[e,n,r]=t.split(".");if(e===void 0||n===void 0||r===void 0)return Zo("JWT malformed, contained fewer than 3 sections"),null;try{const s=D_(n);return s?JSON.parse(s):(Zo("Failed to decode base64 JWT payload"),null)}catch(s){return Zo("Caught error parsing JWT payload as JSON",s==null?void 0:s.toString()),null}}function hp(t){const e=Qu(t);return he(e,"internal-error"),he(typeof e.exp<"u","internal-error"),he(typeof e.iat<"u","internal-error"),Number(e.exp)-Number(e.iat)}/**
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
 */async function $i(t,e,n=!1){if(n)return e;try{return await e}catch(r){throw r instanceof xn&&WS(r)&&t.auth.currentUser===t&&await t.auth.signOut(),r}}function WS({code:t}){return t==="auth/user-disabled"||t==="auth/user-token-expired"}/**
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
 */class KS{constructor(e){this.user=e,this.isRunning=!1,this.timerId=null,this.errorBackoff=3e4}_start(){this.isRunning||(this.isRunning=!0,this.schedule())}_stop(){this.isRunning&&(this.isRunning=!1,this.timerId!==null&&clearTimeout(this.timerId))}getInterval(e){var n;if(e){const r=this.errorBackoff;return this.errorBackoff=Math.min(this.errorBackoff*2,96e4),r}else{this.errorBackoff=3e4;const s=((n=this.user.stsTokenManager.expirationTime)!==null&&n!==void 0?n:0)-Date.now()-3e5;return Math.max(0,s)}}schedule(e=!1){if(!this.isRunning)return;const n=this.getInterval(e);this.timerId=setTimeout(async()=>{await this.iteration()},n)}async iteration(){try{await this.user.getIdToken(!0)}catch(e){(e==null?void 0:e.code)==="auth/network-request-failed"&&this.schedule(!0);return}this.schedule()}}/**
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
 */class Jl{constructor(e,n){this.createdAt=e,this.lastLoginAt=n,this._initializeTime()}_initializeTime(){this.lastSignInTime=Ri(this.lastLoginAt),this.creationTime=Ri(this.createdAt)}_copy(e){this.createdAt=e.createdAt,this.lastLoginAt=e.lastLoginAt,this._initializeTime()}toJSON(){return{createdAt:this.createdAt,lastLoginAt:this.lastLoginAt}}}/**
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
 */async function Pa(t){var e;const n=t.auth,r=await t.getIdToken(),s=await $i(t,G_(n,{idToken:r}));he(s==null?void 0:s.users.length,n,"internal-error");const i=s.users[0];t._notifyReloadListener(i);const o=!((e=i.providerUserInfo)===null||e===void 0)&&e.length?Q_(i.providerUserInfo):[],c=GS(t.providerData,o),l=t.isAnonymous,u=!(t.email&&i.passwordHash)&&!(c!=null&&c.length),h=l?u:!1,d={uid:i.localId,displayName:i.displayName||null,photoURL:i.photoUrl||null,email:i.email||null,emailVerified:i.emailVerified||!1,phoneNumber:i.phoneNumber||null,tenantId:i.tenantId||null,providerData:c,metadata:new Jl(i.createdAt,i.lastLoginAt),isAnonymous:h};Object.assign(t,d)}async function zS(t){const e=Bt(t);await Pa(e),await e.auth._persistUserIfCurrent(e),e.auth._notifyListenersIfCurrent(e)}function GS(t,e){return[...t.filter(r=>!e.some(s=>s.providerId===r.providerId)),...e]}function Q_(t){return t.map(e=>{var{providerId:n}=e,r=Wu(e,["providerId"]);return{providerId:n,uid:r.rawId||"",displayName:r.displayName||null,email:r.email||null,phoneNumber:r.phoneNumber||null,photoURL:r.photoUrl||null}})}/**
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
 */async function QS(t,e){const n=await K_(t,{},async()=>{const r=so({grant_type:"refresh_token",refresh_token:e}).slice(1),{tokenApiHost:s,apiKey:i}=t.config,o=z_(t,s,"/v1/token",`key=${i}`),c=await t._getAdditionalHeaders();return c["Content-Type"]="application/x-www-form-urlencoded",W_.fetch()(o,{method:"POST",headers:c,body:r})});return{accessToken:n.access_token,expiresIn:n.expires_in,refreshToken:n.refresh_token}}async function JS(t,e){return gr(t,"POST","/v2/accounts:revokeToken",Wr(t,e))}/**
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
 */class vs{constructor(){this.refreshToken=null,this.accessToken=null,this.expirationTime=null}get isExpired(){return!this.expirationTime||Date.now()>this.expirationTime-3e4}updateFromServerResponse(e){he(e.idToken,"internal-error"),he(typeof e.idToken<"u","internal-error"),he(typeof e.refreshToken<"u","internal-error");const n="expiresIn"in e&&typeof e.expiresIn<"u"?Number(e.expiresIn):hp(e.idToken);this.updateTokensAndExpiration(e.idToken,e.refreshToken,n)}updateFromIdToken(e){he(e.length!==0,"internal-error");const n=hp(e);this.updateTokensAndExpiration(e,null,n)}async getToken(e,n=!1){return!n&&this.accessToken&&!this.isExpired?this.accessToken:(he(this.refreshToken,e,"user-token-expired"),this.refreshToken?(await this.refresh(e,this.refreshToken),this.accessToken):null)}clearRefreshToken(){this.refreshToken=null}async refresh(e,n){const{accessToken:r,refreshToken:s,expiresIn:i}=await QS(e,n);this.updateTokensAndExpiration(r,s,Number(i))}updateTokensAndExpiration(e,n,r){this.refreshToken=n||null,this.accessToken=e||null,this.expirationTime=Date.now()+r*1e3}static fromJSON(e,n){const{refreshToken:r,accessToken:s,expirationTime:i}=n,o=new vs;return r&&(he(typeof r=="string","internal-error",{appName:e}),o.refreshToken=r),s&&(he(typeof s=="string","internal-error",{appName:e}),o.accessToken=s),i&&(he(typeof i=="number","internal-error",{appName:e}),o.expirationTime=i),o}toJSON(){return{refreshToken:this.refreshToken,accessToken:this.accessToken,expirationTime:this.expirationTime}}_assign(e){this.accessToken=e.accessToken,this.refreshToken=e.refreshToken,this.expirationTime=e.expirationTime}_clone(){return Object.assign(new vs,this.toJSON())}_performRefresh(){return In("not implemented")}}/**
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
 */function qn(t,e){he(typeof t=="string"||typeof t>"u","internal-error",{appName:e})}class bn{constructor(e){var{uid:n,auth:r,stsTokenManager:s}=e,i=Wu(e,["uid","auth","stsTokenManager"]);this.providerId="firebase",this.proactiveRefresh=new KS(this),this.reloadUserInfo=null,this.reloadListener=null,this.uid=n,this.auth=r,this.stsTokenManager=s,this.accessToken=s.accessToken,this.displayName=i.displayName||null,this.email=i.email||null,this.emailVerified=i.emailVerified||!1,this.phoneNumber=i.phoneNumber||null,this.photoURL=i.photoURL||null,this.isAnonymous=i.isAnonymous||!1,this.tenantId=i.tenantId||null,this.providerData=i.providerData?[...i.providerData]:[],this.metadata=new Jl(i.createdAt||void 0,i.lastLoginAt||void 0)}async getIdToken(e){const n=await $i(this,this.stsTokenManager.getToken(this.auth,e));return he(n,this.auth,"internal-error"),this.accessToken!==n&&(this.accessToken=n,await this.auth._persistUserIfCurrent(this),this.auth._notifyListenersIfCurrent(this)),n}getIdTokenResult(e){return qS(this,e)}reload(){return zS(this)}_assign(e){this!==e&&(he(this.uid===e.uid,this.auth,"internal-error"),this.displayName=e.displayName,this.photoURL=e.photoURL,this.email=e.email,this.emailVerified=e.emailVerified,this.phoneNumber=e.phoneNumber,this.isAnonymous=e.isAnonymous,this.tenantId=e.tenantId,this.providerData=e.providerData.map(n=>Object.assign({},n)),this.metadata._copy(e.metadata),this.stsTokenManager._assign(e.stsTokenManager))}_clone(e){const n=new bn(Object.assign(Object.assign({},this),{auth:e,stsTokenManager:this.stsTokenManager._clone()}));return n.metadata._copy(this.metadata),n}_onReload(e){he(!this.reloadListener,this.auth,"internal-error"),this.reloadListener=e,this.reloadUserInfo&&(this._notifyReloadListener(this.reloadUserInfo),this.reloadUserInfo=null)}_notifyReloadListener(e){this.reloadListener?this.reloadListener(e):this.reloadUserInfo=e}_startProactiveRefresh(){this.proactiveRefresh._start()}_stopProactiveRefresh(){this.proactiveRefresh._stop()}async _updateTokensIfNecessary(e,n=!1){let r=!1;e.idToken&&e.idToken!==this.stsTokenManager.accessToken&&(this.stsTokenManager.updateFromServerResponse(e),r=!0),n&&await Pa(this),await this.auth._persistUserIfCurrent(this),r&&this.auth._notifyListenersIfCurrent(this)}async delete(){if(on(this.auth.app))return Promise.reject(sr(this.auth));const e=await this.getIdToken();return await $i(this,HS(this.auth,{idToken:e})),this.stsTokenManager.clearRefreshToken(),this.auth.signOut()}toJSON(){return Object.assign(Object.assign({uid:this.uid,email:this.email||void 0,emailVerified:this.emailVerified,displayName:this.displayName||void 0,isAnonymous:this.isAnonymous,photoURL:this.photoURL||void 0,phoneNumber:this.phoneNumber||void 0,tenantId:this.tenantId||void 0,providerData:this.providerData.map(e=>Object.assign({},e)),stsTokenManager:this.stsTokenManager.toJSON(),_redirectEventId:this._redirectEventId},this.metadata.toJSON()),{apiKey:this.auth.config.apiKey,appName:this.auth.name})}get refreshToken(){return this.stsTokenManager.refreshToken||""}static _fromJSON(e,n){var r,s,i,o,c,l,u,h;const d=(r=n.displayName)!==null&&r!==void 0?r:void 0,g=(s=n.email)!==null&&s!==void 0?s:void 0,m=(i=n.phoneNumber)!==null&&i!==void 0?i:void 0,P=(o=n.photoURL)!==null&&o!==void 0?o:void 0,k=(c=n.tenantId)!==null&&c!==void 0?c:void 0,O=(l=n._redirectEventId)!==null&&l!==void 0?l:void 0,V=(u=n.createdAt)!==null&&u!==void 0?u:void 0,N=(h=n.lastLoginAt)!==null&&h!==void 0?h:void 0,{uid:b,emailVerified:C,isAnonymous:x,providerData:F,stsTokenManager:I}=n;he(b&&I,e,"internal-error");const v=vs.fromJSON(this.name,I);he(typeof b=="string",e,"internal-error"),qn(d,e.name),qn(g,e.name),he(typeof C=="boolean",e,"internal-error"),he(typeof x=="boolean",e,"internal-error"),qn(m,e.name),qn(P,e.name),qn(k,e.name),qn(O,e.name),qn(V,e.name),qn(N,e.name);const y=new bn({uid:b,auth:e,email:g,emailVerified:C,displayName:d,isAnonymous:x,photoURL:P,phoneNumber:m,tenantId:k,stsTokenManager:v,createdAt:V,lastLoginAt:N});return F&&Array.isArray(F)&&(y.providerData=F.map(E=>Object.assign({},E))),O&&(y._redirectEventId=O),y}static async _fromIdTokenResponse(e,n,r=!1){const s=new vs;s.updateFromServerResponse(n);const i=new bn({uid:n.localId,auth:e,stsTokenManager:s,isAnonymous:r});return await Pa(i),i}static async _fromGetAccountInfoResponse(e,n,r){const s=n.users[0];he(s.localId!==void 0,"internal-error");const i=s.providerUserInfo!==void 0?Q_(s.providerUserInfo):[],o=!(s.email&&s.passwordHash)&&!(i!=null&&i.length),c=new vs;c.updateFromIdToken(r);const l=new bn({uid:s.localId,auth:e,stsTokenManager:c,isAnonymous:o}),u={uid:s.localId,displayName:s.displayName||null,photoURL:s.photoUrl||null,email:s.email||null,emailVerified:s.emailVerified||!1,phoneNumber:s.phoneNumber||null,tenantId:s.tenantId||null,providerData:i,metadata:new Jl(s.createdAt,s.lastLoginAt),isAnonymous:!(s.email&&s.passwordHash)&&!(i!=null&&i.length)};return Object.assign(l,u),l}}/**
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
 */const fp=new Map;function An(t){kn(t instanceof Function,"Expected a class definition");let e=fp.get(t);return e?(kn(e instanceof t,"Instance stored in cache mismatched with class"),e):(e=new t,fp.set(t,e),e)}/**
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
 */class J_{constructor(){this.type="NONE",this.storage={}}async _isAvailable(){return!0}async _set(e,n){this.storage[e]=n}async _get(e){const n=this.storage[e];return n===void 0?null:n}async _remove(e){delete this.storage[e]}_addListener(e,n){}_removeListener(e,n){}}J_.type="NONE";const dp=J_;/**
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
 */function ea(t,e,n){return`firebase:${t}:${e}:${n}`}class Es{constructor(e,n,r){this.persistence=e,this.auth=n,this.userKey=r;const{config:s,name:i}=this.auth;this.fullUserKey=ea(this.userKey,s.apiKey,i),this.fullPersistenceKey=ea("persistence",s.apiKey,i),this.boundEventHandler=n._onStorageEvent.bind(n),this.persistence._addListener(this.fullUserKey,this.boundEventHandler)}setCurrentUser(e){return this.persistence._set(this.fullUserKey,e.toJSON())}async getCurrentUser(){const e=await this.persistence._get(this.fullUserKey);return e?bn._fromJSON(this.auth,e):null}removeCurrentUser(){return this.persistence._remove(this.fullUserKey)}savePersistenceForRedirect(){return this.persistence._set(this.fullPersistenceKey,this.persistence.type)}async setPersistence(e){if(this.persistence===e)return;const n=await this.getCurrentUser();if(await this.removeCurrentUser(),this.persistence=e,n)return this.setCurrentUser(n)}delete(){this.persistence._removeListener(this.fullUserKey,this.boundEventHandler)}static async create(e,n,r="authUser"){if(!n.length)return new Es(An(dp),e,r);const s=(await Promise.all(n.map(async u=>{if(await u._isAvailable())return u}))).filter(u=>u);let i=s[0]||An(dp);const o=ea(r,e.config.apiKey,e.name);let c=null;for(const u of n)try{const h=await u._get(o);if(h){const d=bn._fromJSON(e,h);u!==i&&(c=d),i=u;break}}catch{}const l=s.filter(u=>u._shouldAllowMigration);return!i._shouldAllowMigration||!l.length?new Es(i,e,r):(i=l[0],c&&await i._set(o,c.toJSON()),await Promise.all(n.map(async u=>{if(u!==i)try{await u._remove(o)}catch{}})),new Es(i,e,r))}}/**
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
 */function pp(t){const e=t.toLowerCase();if(e.includes("opera/")||e.includes("opr/")||e.includes("opios/"))return"Opera";if(ey(e))return"IEMobile";if(e.includes("msie")||e.includes("trident/"))return"IE";if(e.includes("edge/"))return"Edge";if(X_(e))return"Firefox";if(e.includes("silk/"))return"Silk";if(ny(e))return"Blackberry";if(ry(e))return"Webos";if(Y_(e))return"Safari";if((e.includes("chrome/")||Z_(e))&&!e.includes("edge/"))return"Chrome";if(ty(e))return"Android";{const n=/([a-zA-Z\d\.]+)\/[a-zA-Z\d\.]*$/,r=t.match(n);if((r==null?void 0:r.length)===2)return r[1]}return"Other"}function X_(t=yt()){return/firefox\//i.test(t)}function Y_(t=yt()){const e=t.toLowerCase();return e.includes("safari/")&&!e.includes("chrome/")&&!e.includes("crios/")&&!e.includes("android")}function Z_(t=yt()){return/crios\//i.test(t)}function ey(t=yt()){return/iemobile/i.test(t)}function ty(t=yt()){return/android/i.test(t)}function ny(t=yt()){return/blackberry/i.test(t)}function ry(t=yt()){return/webos/i.test(t)}function Ju(t=yt()){return/iphone|ipad|ipod/i.test(t)||/macintosh/i.test(t)&&/mobile/i.test(t)}function XS(t=yt()){var e;return Ju(t)&&!!(!((e=window.navigator)===null||e===void 0)&&e.standalone)}function YS(){return fR()&&document.documentMode===10}function sy(t=yt()){return Ju(t)||ty(t)||ry(t)||ny(t)||/windows phone/i.test(t)||ey(t)}/**
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
 */function iy(t,e=[]){let n;switch(t){case"Browser":n=pp(yt());break;case"Worker":n=`${pp(yt())}-${t}`;break;default:n=t}const r=e.length?e.join(","):"FirebaseCore-web";return`${n}/JsCore/${$s}/${r}`}/**
 * @license
 * Copyright 2022 Google LLC
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
 */class ZS{constructor(e){this.auth=e,this.queue=[]}pushCallback(e,n){const r=i=>new Promise((o,c)=>{try{const l=e(i);o(l)}catch(l){c(l)}});r.onAbort=n,this.queue.push(r);const s=this.queue.length-1;return()=>{this.queue[s]=()=>Promise.resolve()}}async runMiddleware(e){if(this.auth.currentUser===e)return;const n=[];try{for(const r of this.queue)await r(e),r.onAbort&&n.push(r.onAbort)}catch(r){n.reverse();for(const s of n)try{s()}catch{}throw this.auth._errorFactory.create("login-blocked",{originalMessage:r==null?void 0:r.message})}}}/**
 * @license
 * Copyright 2023 Google LLC
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
 */async function eP(t,e={}){return gr(t,"GET","/v2/passwordPolicy",Wr(t,e))}/**
 * @license
 * Copyright 2023 Google LLC
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
 */const tP=6;class nP{constructor(e){var n,r,s,i;const o=e.customStrengthOptions;this.customStrengthOptions={},this.customStrengthOptions.minPasswordLength=(n=o.minPasswordLength)!==null&&n!==void 0?n:tP,o.maxPasswordLength&&(this.customStrengthOptions.maxPasswordLength=o.maxPasswordLength),o.containsLowercaseCharacter!==void 0&&(this.customStrengthOptions.containsLowercaseLetter=o.containsLowercaseCharacter),o.containsUppercaseCharacter!==void 0&&(this.customStrengthOptions.containsUppercaseLetter=o.containsUppercaseCharacter),o.containsNumericCharacter!==void 0&&(this.customStrengthOptions.containsNumericCharacter=o.containsNumericCharacter),o.containsNonAlphanumericCharacter!==void 0&&(this.customStrengthOptions.containsNonAlphanumericCharacter=o.containsNonAlphanumericCharacter),this.enforcementState=e.enforcementState,this.enforcementState==="ENFORCEMENT_STATE_UNSPECIFIED"&&(this.enforcementState="OFF"),this.allowedNonAlphanumericCharacters=(s=(r=e.allowedNonAlphanumericCharacters)===null||r===void 0?void 0:r.join(""))!==null&&s!==void 0?s:"",this.forceUpgradeOnSignin=(i=e.forceUpgradeOnSignin)!==null&&i!==void 0?i:!1,this.schemaVersion=e.schemaVersion}validatePassword(e){var n,r,s,i,o,c;const l={isValid:!0,passwordPolicy:this};return this.validatePasswordLengthOptions(e,l),this.validatePasswordCharacterOptions(e,l),l.isValid&&(l.isValid=(n=l.meetsMinPasswordLength)!==null&&n!==void 0?n:!0),l.isValid&&(l.isValid=(r=l.meetsMaxPasswordLength)!==null&&r!==void 0?r:!0),l.isValid&&(l.isValid=(s=l.containsLowercaseLetter)!==null&&s!==void 0?s:!0),l.isValid&&(l.isValid=(i=l.containsUppercaseLetter)!==null&&i!==void 0?i:!0),l.isValid&&(l.isValid=(o=l.containsNumericCharacter)!==null&&o!==void 0?o:!0),l.isValid&&(l.isValid=(c=l.containsNonAlphanumericCharacter)!==null&&c!==void 0?c:!0),l}validatePasswordLengthOptions(e,n){const r=this.customStrengthOptions.minPasswordLength,s=this.customStrengthOptions.maxPasswordLength;r&&(n.meetsMinPasswordLength=e.length>=r),s&&(n.meetsMaxPasswordLength=e.length<=s)}validatePasswordCharacterOptions(e,n){this.updatePasswordCharacterOptionsStatuses(n,!1,!1,!1,!1);let r;for(let s=0;s<e.length;s++)r=e.charAt(s),this.updatePasswordCharacterOptionsStatuses(n,r>="a"&&r<="z",r>="A"&&r<="Z",r>="0"&&r<="9",this.allowedNonAlphanumericCharacters.includes(r))}updatePasswordCharacterOptionsStatuses(e,n,r,s,i){this.customStrengthOptions.containsLowercaseLetter&&(e.containsLowercaseLetter||(e.containsLowercaseLetter=n)),this.customStrengthOptions.containsUppercaseLetter&&(e.containsUppercaseLetter||(e.containsUppercaseLetter=r)),this.customStrengthOptions.containsNumericCharacter&&(e.containsNumericCharacter||(e.containsNumericCharacter=s)),this.customStrengthOptions.containsNonAlphanumericCharacter&&(e.containsNonAlphanumericCharacter||(e.containsNonAlphanumericCharacter=i))}}/**
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
 */class rP{constructor(e,n,r,s){this.app=e,this.heartbeatServiceProvider=n,this.appCheckServiceProvider=r,this.config=s,this.currentUser=null,this.emulatorConfig=null,this.operations=Promise.resolve(),this.authStateSubscription=new gp(this),this.idTokenSubscription=new gp(this),this.beforeStateQueue=new ZS(this),this.redirectUser=null,this.isProactiveRefreshEnabled=!1,this.EXPECTED_PASSWORD_POLICY_SCHEMA_VERSION=1,this._canInitEmulator=!0,this._isInitialized=!1,this._deleted=!1,this._initializationPromise=null,this._popupRedirectResolver=null,this._errorFactory=q_,this._agentRecaptchaConfig=null,this._tenantRecaptchaConfigs={},this._projectPasswordPolicy=null,this._tenantPasswordPolicies={},this.lastNotifiedUid=void 0,this.languageCode=null,this.tenantId=null,this.settings={appVerificationDisabledForTesting:!1},this.frameworks=[],this.name=e.name,this.clientVersion=s.sdkClientVersion}_initializeWithPersistence(e,n){return n&&(this._popupRedirectResolver=An(n)),this._initializationPromise=this.queue(async()=>{var r,s;if(!this._deleted&&(this.persistenceManager=await Es.create(this,e),!this._deleted)){if(!((r=this._popupRedirectResolver)===null||r===void 0)&&r._shouldInitProactively)try{await this._popupRedirectResolver._initialize(this)}catch{}await this.initializeCurrentUser(n),this.lastNotifiedUid=((s=this.currentUser)===null||s===void 0?void 0:s.uid)||null,!this._deleted&&(this._isInitialized=!0)}}),this._initializationPromise}async _onStorageEvent(){if(this._deleted)return;const e=await this.assertedPersistence.getCurrentUser();if(!(!this.currentUser&&!e)){if(this.currentUser&&e&&this.currentUser.uid===e.uid){this._currentUser._assign(e),await this.currentUser.getIdToken();return}await this._updateCurrentUser(e,!0)}}async initializeCurrentUserFromIdToken(e){try{const n=await G_(this,{idToken:e}),r=await bn._fromGetAccountInfoResponse(this,n,e);await this.directlySetCurrentUser(r)}catch(n){console.warn("FirebaseServerApp could not login user with provided authIdToken: ",n),await this.directlySetCurrentUser(null)}}async initializeCurrentUser(e){var n;if(on(this.app)){const o=this.app.settings.authIdToken;return o?new Promise(c=>{setTimeout(()=>this.initializeCurrentUserFromIdToken(o).then(c,c))}):this.directlySetCurrentUser(null)}const r=await this.assertedPersistence.getCurrentUser();let s=r,i=!1;if(e&&this.config.authDomain){await this.getOrInitRedirectPersistenceManager();const o=(n=this.redirectUser)===null||n===void 0?void 0:n._redirectEventId,c=s==null?void 0:s._redirectEventId,l=await this.tryRedirectSignIn(e);(!o||o===c)&&(l!=null&&l.user)&&(s=l.user,i=!0)}if(!s)return this.directlySetCurrentUser(null);if(!s._redirectEventId){if(i)try{await this.beforeStateQueue.runMiddleware(s)}catch(o){s=r,this._popupRedirectResolver._overrideRedirectResult(this,()=>Promise.reject(o))}return s?this.reloadAndSetCurrentUserOrClear(s):this.directlySetCurrentUser(null)}return he(this._popupRedirectResolver,this,"argument-error"),await this.getOrInitRedirectPersistenceManager(),this.redirectUser&&this.redirectUser._redirectEventId===s._redirectEventId?this.directlySetCurrentUser(s):this.reloadAndSetCurrentUserOrClear(s)}async tryRedirectSignIn(e){let n=null;try{n=await this._popupRedirectResolver._completeRedirectFn(this,e,!0)}catch{await this._setRedirectUser(null)}return n}async reloadAndSetCurrentUserOrClear(e){try{await Pa(e)}catch(n){if((n==null?void 0:n.code)!=="auth/network-request-failed")return this.directlySetCurrentUser(null)}return this.directlySetCurrentUser(e)}useDeviceLanguage(){this.languageCode=MS()}async _delete(){this._deleted=!0}async updateCurrentUser(e){if(on(this.app))return Promise.reject(sr(this));const n=e?Bt(e):null;return n&&he(n.auth.config.apiKey===this.config.apiKey,this,"invalid-user-token"),this._updateCurrentUser(n&&n._clone(this))}async _updateCurrentUser(e,n=!1){if(!this._deleted)return e&&he(this.tenantId===e.tenantId,this,"tenant-id-mismatch"),n||await this.beforeStateQueue.runMiddleware(e),this.queue(async()=>{await this.directlySetCurrentUser(e),this.notifyAuthListeners()})}async signOut(){return on(this.app)?Promise.reject(sr(this)):(await this.beforeStateQueue.runMiddleware(null),(this.redirectPersistenceManager||this._popupRedirectResolver)&&await this._setRedirectUser(null),this._updateCurrentUser(null,!0))}setPersistence(e){return on(this.app)?Promise.reject(sr(this)):this.queue(async()=>{await this.assertedPersistence.setPersistence(An(e))})}_getRecaptchaConfig(){return this.tenantId==null?this._agentRecaptchaConfig:this._tenantRecaptchaConfigs[this.tenantId]}async validatePassword(e){this._getPasswordPolicyInternal()||await this._updatePasswordPolicy();const n=this._getPasswordPolicyInternal();return n.schemaVersion!==this.EXPECTED_PASSWORD_POLICY_SCHEMA_VERSION?Promise.reject(this._errorFactory.create("unsupported-password-policy-schema-version",{})):n.validatePassword(e)}_getPasswordPolicyInternal(){return this.tenantId===null?this._projectPasswordPolicy:this._tenantPasswordPolicies[this.tenantId]}async _updatePasswordPolicy(){const e=await eP(this),n=new nP(e);this.tenantId===null?this._projectPasswordPolicy=n:this._tenantPasswordPolicies[this.tenantId]=n}_getPersistence(){return this.assertedPersistence.persistence.type}_updateErrorMap(e){this._errorFactory=new ro("auth","Firebase",e())}onAuthStateChanged(e,n,r){return this.registerStateListener(this.authStateSubscription,e,n,r)}beforeAuthStateChanged(e,n){return this.beforeStateQueue.pushCallback(e,n)}onIdTokenChanged(e,n,r){return this.registerStateListener(this.idTokenSubscription,e,n,r)}authStateReady(){return new Promise((e,n)=>{if(this.currentUser)e();else{const r=this.onAuthStateChanged(()=>{r(),e()},n)}})}async revokeAccessToken(e){if(this.currentUser){const n=await this.currentUser.getIdToken(),r={providerId:"apple.com",tokenType:"ACCESS_TOKEN",token:e,idToken:n};this.tenantId!=null&&(r.tenantId=this.tenantId),await JS(this,r)}}toJSON(){var e;return{apiKey:this.config.apiKey,authDomain:this.config.authDomain,appName:this.name,currentUser:(e=this._currentUser)===null||e===void 0?void 0:e.toJSON()}}async _setRedirectUser(e,n){const r=await this.getOrInitRedirectPersistenceManager(n);return e===null?r.removeCurrentUser():r.setCurrentUser(e)}async getOrInitRedirectPersistenceManager(e){if(!this.redirectPersistenceManager){const n=e&&An(e)||this._popupRedirectResolver;he(n,this,"argument-error"),this.redirectPersistenceManager=await Es.create(this,[An(n._redirectPersistence)],"redirectUser"),this.redirectUser=await this.redirectPersistenceManager.getCurrentUser()}return this.redirectPersistenceManager}async _redirectUserForId(e){var n,r;return this._isInitialized&&await this.queue(async()=>{}),((n=this._currentUser)===null||n===void 0?void 0:n._redirectEventId)===e?this._currentUser:((r=this.redirectUser)===null||r===void 0?void 0:r._redirectEventId)===e?this.redirectUser:null}async _persistUserIfCurrent(e){if(e===this.currentUser)return this.queue(async()=>this.directlySetCurrentUser(e))}_notifyListenersIfCurrent(e){e===this.currentUser&&this.notifyAuthListeners()}_key(){return`${this.config.authDomain}:${this.config.apiKey}:${this.name}`}_startProactiveRefresh(){this.isProactiveRefreshEnabled=!0,this.currentUser&&this._currentUser._startProactiveRefresh()}_stopProactiveRefresh(){this.isProactiveRefreshEnabled=!1,this.currentUser&&this._currentUser._stopProactiveRefresh()}get _currentUser(){return this.currentUser}notifyAuthListeners(){var e,n;if(!this._isInitialized)return;this.idTokenSubscription.next(this.currentUser);const r=(n=(e=this.currentUser)===null||e===void 0?void 0:e.uid)!==null&&n!==void 0?n:null;this.lastNotifiedUid!==r&&(this.lastNotifiedUid=r,this.authStateSubscription.next(this.currentUser))}registerStateListener(e,n,r,s){if(this._deleted)return()=>{};const i=typeof n=="function"?n:n.next.bind(n);let o=!1;const c=this._isInitialized?Promise.resolve():this._initializationPromise;if(he(c,this,"internal-error"),c.then(()=>{o||i(this.currentUser)}),typeof n=="function"){const l=e.addObserver(n,r,s);return()=>{o=!0,l()}}else{const l=e.addObserver(n);return()=>{o=!0,l()}}}async directlySetCurrentUser(e){this.currentUser&&this.currentUser!==e&&this._currentUser._stopProactiveRefresh(),e&&this.isProactiveRefreshEnabled&&e._startProactiveRefresh(),this.currentUser=e,e?await this.assertedPersistence.setCurrentUser(e):await this.assertedPersistence.removeCurrentUser()}queue(e){return this.operations=this.operations.then(e,e),this.operations}get assertedPersistence(){return he(this.persistenceManager,this,"internal-error"),this.persistenceManager}_logFramework(e){!e||this.frameworks.includes(e)||(this.frameworks.push(e),this.frameworks.sort(),this.clientVersion=iy(this.config.clientPlatform,this._getFrameworks()))}_getFrameworks(){return this.frameworks}async _getAdditionalHeaders(){var e;const n={"X-Client-Version":this.clientVersion};this.app.options.appId&&(n["X-Firebase-gmpid"]=this.app.options.appId);const r=await((e=this.heartbeatServiceProvider.getImmediate({optional:!0}))===null||e===void 0?void 0:e.getHeartbeatsHeader());r&&(n["X-Firebase-Client"]=r);const s=await this._getAppCheckToken();return s&&(n["X-Firebase-AppCheck"]=s),n}async _getAppCheckToken(){var e;const n=await((e=this.appCheckServiceProvider.getImmediate({optional:!0}))===null||e===void 0?void 0:e.getToken());return n!=null&&n.error&&NS(`Error while retrieving App Check token: ${n.error}`),n==null?void 0:n.token}}function Kr(t){return Bt(t)}class gp{constructor(e){this.auth=e,this.observer=null,this.addObserver=ER(n=>this.observer=n)}get next(){return he(this.observer,this.auth,"internal-error"),this.observer.next.bind(this.observer)}}/**
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
 */let ac={async loadJS(){throw new Error("Unable to load external scripts")},recaptchaV2Script:"",recaptchaEnterpriseScript:"",gapiScript:""};function sP(t){ac=t}function oy(t){return ac.loadJS(t)}function iP(){return ac.recaptchaEnterpriseScript}function oP(){return ac.gapiScript}function aP(t){return`__${t}${Math.floor(Math.random()*1e6)}`}const cP="recaptcha-enterprise",lP="NO_RECAPTCHA";class uP{constructor(e){this.type=cP,this.auth=Kr(e)}async verify(e="verify",n=!1){async function r(i){if(!n){if(i.tenantId==null&&i._agentRecaptchaConfig!=null)return i._agentRecaptchaConfig.siteKey;if(i.tenantId!=null&&i._tenantRecaptchaConfigs[i.tenantId]!==void 0)return i._tenantRecaptchaConfigs[i.tenantId].siteKey}return new Promise(async(o,c)=>{$S(i,{clientType:"CLIENT_TYPE_WEB",version:"RECAPTCHA_ENTERPRISE"}).then(l=>{if(l.recaptchaKey===void 0)c(new Error("recaptcha Enterprise site key undefined"));else{const u=new jS(l);return i.tenantId==null?i._agentRecaptchaConfig=u:i._tenantRecaptchaConfigs[i.tenantId]=u,o(u.siteKey)}}).catch(l=>{c(l)})})}function s(i,o,c){const l=window.grecaptcha;up(l)?l.enterprise.ready(()=>{l.enterprise.execute(i,{action:e}).then(u=>{o(u)}).catch(()=>{o(lP)})}):c(Error("No reCAPTCHA enterprise script loaded."))}return new Promise((i,o)=>{r(this.auth).then(c=>{if(!n&&up(window.grecaptcha))s(c,i,o);else{if(typeof window>"u"){o(new Error("RecaptchaVerifier is only supported in browser"));return}let l=iP();l.length!==0&&(l+=c),oy(l).then(()=>{s(c,i,o)}).catch(u=>{o(u)})}}).catch(c=>{o(c)})})}}async function mp(t,e,n,r=!1){const s=new uP(t);let i;try{i=await s.verify(n)}catch{i=await s.verify(n,!0)}const o=Object.assign({},e);return r?Object.assign(o,{captchaResp:i}):Object.assign(o,{captchaResponse:i}),Object.assign(o,{clientType:"CLIENT_TYPE_WEB"}),Object.assign(o,{recaptchaVersion:"RECAPTCHA_ENTERPRISE"}),o}async function _p(t,e,n,r){var s;if(!((s=t._getRecaptchaConfig())===null||s===void 0)&&s.isProviderEnabled("EMAIL_PASSWORD_PROVIDER")){const i=await mp(t,e,n,n==="getOobCode");return r(t,i)}else return r(t,e).catch(async i=>{if(i.code==="auth/missing-recaptcha-token"){console.log(`${n} is protected by reCAPTCHA Enterprise for this project. Automatically triggering the reCAPTCHA flow and restarting the flow.`);const o=await mp(t,e,n,n==="getOobCode");return r(t,o)}else return Promise.reject(i)})}/**
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
 */function hP(t,e){const n=qu(t,"auth");if(n.isInitialized()){const s=n.getImmediate(),i=n.getOptions();if(Aa(i,e??{}))return s;jt(s,"already-initialized")}return n.initialize({options:e})}function fP(t,e){const n=(e==null?void 0:e.persistence)||[],r=(Array.isArray(n)?n:[n]).map(An);e!=null&&e.errorMap&&t._updateErrorMap(e.errorMap),t._initializeWithPersistence(r,e==null?void 0:e.popupRedirectResolver)}function dP(t,e,n){const r=Kr(t);he(r._canInitEmulator,r,"emulator-config-failed"),he(/^https?:\/\//.test(e),r,"invalid-emulator-scheme");const s=!1,i=ay(e),{host:o,port:c}=pP(e),l=c===null?"":`:${c}`;r.config.emulator={url:`${i}//${o}${l}/`},r.settings.appVerificationDisabledForTesting=!0,r.emulatorConfig=Object.freeze({host:o,port:c,protocol:i.replace(":",""),options:Object.freeze({disableWarnings:s})}),gP()}function ay(t){const e=t.indexOf(":");return e<0?"":t.substr(0,e+1)}function pP(t){const e=ay(t),n=/(\/\/)?([^?#/]+)/.exec(t.substr(e.length));if(!n)return{host:"",port:null};const r=n[2].split("@").pop()||"",s=/^(\[[^\]]+\])(:|$)/.exec(r);if(s){const i=s[1];return{host:i,port:yp(r.substr(i.length+1))}}else{const[i,o]=r.split(":");return{host:i,port:yp(o)}}}function yp(t){if(!t)return null;const e=Number(t);return isNaN(e)?null:e}function gP(){function t(){const e=document.createElement("p"),n=e.style;e.innerText="Running in emulator mode. Do not use with production credentials.",n.position="fixed",n.width="100%",n.backgroundColor="#ffffff",n.border=".1em solid #000000",n.color="#b50000",n.bottom="0px",n.left="0px",n.margin="0px",n.zIndex="10000",n.textAlign="center",e.classList.add("firebase-emulator-warning"),document.body.appendChild(e)}typeof console<"u"&&typeof console.info=="function"&&console.info("WARNING: You are using the Auth Emulator, which is intended for local testing only.  Do not use with production credentials."),typeof window<"u"&&typeof document<"u"&&(document.readyState==="loading"?window.addEventListener("DOMContentLoaded",t):t())}/**
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
 */class Xu{constructor(e,n){this.providerId=e,this.signInMethod=n}toJSON(){return In("not implemented")}_getIdTokenResponse(e){return In("not implemented")}_linkToIdToken(e,n){return In("not implemented")}_getReauthenticationResolver(e){return In("not implemented")}}async function mP(t,e){return gr(t,"POST","/v1/accounts:signUp",e)}/**
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
 */async function _P(t,e){return oc(t,"POST","/v1/accounts:signInWithPassword",Wr(t,e))}/**
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
 */async function yP(t,e){return oc(t,"POST","/v1/accounts:signInWithEmailLink",Wr(t,e))}async function vP(t,e){return oc(t,"POST","/v1/accounts:signInWithEmailLink",Wr(t,e))}/**
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
 */class Hi extends Xu{constructor(e,n,r,s=null){super("password",r),this._email=e,this._password=n,this._tenantId=s}static _fromEmailAndPassword(e,n){return new Hi(e,n,"password")}static _fromEmailAndCode(e,n,r=null){return new Hi(e,n,"emailLink",r)}toJSON(){return{email:this._email,password:this._password,signInMethod:this.signInMethod,tenantId:this._tenantId}}static fromJSON(e){const n=typeof e=="string"?JSON.parse(e):e;if(n!=null&&n.email&&(n!=null&&n.password)){if(n.signInMethod==="password")return this._fromEmailAndPassword(n.email,n.password);if(n.signInMethod==="emailLink")return this._fromEmailAndCode(n.email,n.password,n.tenantId)}return null}async _getIdTokenResponse(e){switch(this.signInMethod){case"password":const n={returnSecureToken:!0,email:this._email,password:this._password,clientType:"CLIENT_TYPE_WEB"};return _p(e,n,"signInWithPassword",_P);case"emailLink":return yP(e,{email:this._email,oobCode:this._password});default:jt(e,"internal-error")}}async _linkToIdToken(e,n){switch(this.signInMethod){case"password":const r={idToken:n,returnSecureToken:!0,email:this._email,password:this._password,clientType:"CLIENT_TYPE_WEB"};return _p(e,r,"signUpPassword",mP);case"emailLink":return vP(e,{idToken:n,email:this._email,oobCode:this._password});default:jt(e,"internal-error")}}_getReauthenticationResolver(e){return this._getIdTokenResponse(e)}}/**
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
 */async function Ts(t,e){return oc(t,"POST","/v1/accounts:signInWithIdp",Wr(t,e))}/**
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
 */const EP="http://localhost";class Ur extends Xu{constructor(){super(...arguments),this.pendingToken=null}static _fromParams(e){const n=new Ur(e.providerId,e.signInMethod);return e.idToken||e.accessToken?(e.idToken&&(n.idToken=e.idToken),e.accessToken&&(n.accessToken=e.accessToken),e.nonce&&!e.pendingToken&&(n.nonce=e.nonce),e.pendingToken&&(n.pendingToken=e.pendingToken)):e.oauthToken&&e.oauthTokenSecret?(n.accessToken=e.oauthToken,n.secret=e.oauthTokenSecret):jt("argument-error"),n}toJSON(){return{idToken:this.idToken,accessToken:this.accessToken,secret:this.secret,nonce:this.nonce,pendingToken:this.pendingToken,providerId:this.providerId,signInMethod:this.signInMethod}}static fromJSON(e){const n=typeof e=="string"?JSON.parse(e):e,{providerId:r,signInMethod:s}=n,i=Wu(n,["providerId","signInMethod"]);if(!r||!s)return null;const o=new Ur(r,s);return o.idToken=i.idToken||void 0,o.accessToken=i.accessToken||void 0,o.secret=i.secret,o.nonce=i.nonce,o.pendingToken=i.pendingToken||null,o}_getIdTokenResponse(e){const n=this.buildRequest();return Ts(e,n)}_linkToIdToken(e,n){const r=this.buildRequest();return r.idToken=n,Ts(e,r)}_getReauthenticationResolver(e){const n=this.buildRequest();return n.autoCreate=!1,Ts(e,n)}buildRequest(){const e={requestUri:EP,returnSecureToken:!0};if(this.pendingToken)e.pendingToken=this.pendingToken;else{const n={};this.idToken&&(n.id_token=this.idToken),this.accessToken&&(n.access_token=this.accessToken),this.secret&&(n.oauth_token_secret=this.secret),n.providerId=this.providerId,this.nonce&&!this.pendingToken&&(n.nonce=this.nonce),e.postBody=so(n)}return e}}/**
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
 */function TP(t){switch(t){case"recoverEmail":return"RECOVER_EMAIL";case"resetPassword":return"PASSWORD_RESET";case"signIn":return"EMAIL_SIGNIN";case"verifyEmail":return"VERIFY_EMAIL";case"verifyAndChangeEmail":return"VERIFY_AND_CHANGE_EMAIL";case"revertSecondFactorAddition":return"REVERT_SECOND_FACTOR_ADDITION";default:return null}}function wP(t){const e=di(pi(t)).link,n=e?di(pi(e)).deep_link_id:null,r=di(pi(t)).deep_link_id;return(r?di(pi(r)).link:null)||r||n||e||t}class Yu{constructor(e){var n,r,s,i,o,c;const l=di(pi(e)),u=(n=l.apiKey)!==null&&n!==void 0?n:null,h=(r=l.oobCode)!==null&&r!==void 0?r:null,d=TP((s=l.mode)!==null&&s!==void 0?s:null);he(u&&h&&d,"argument-error"),this.apiKey=u,this.operation=d,this.code=h,this.continueUrl=(i=l.continueUrl)!==null&&i!==void 0?i:null,this.languageCode=(o=l.languageCode)!==null&&o!==void 0?o:null,this.tenantId=(c=l.tenantId)!==null&&c!==void 0?c:null}static parseLink(e){const n=wP(e);try{return new Yu(n)}catch{return null}}}/**
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
 */class Hs{constructor(){this.providerId=Hs.PROVIDER_ID}static credential(e,n){return Hi._fromEmailAndPassword(e,n)}static credentialWithLink(e,n){const r=Yu.parseLink(n);return he(r,"argument-error"),Hi._fromEmailAndCode(e,r.code,r.tenantId)}}Hs.PROVIDER_ID="password";Hs.EMAIL_PASSWORD_SIGN_IN_METHOD="password";Hs.EMAIL_LINK_SIGN_IN_METHOD="emailLink";/**
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
 */class Zu{constructor(e){this.providerId=e,this.defaultLanguageCode=null,this.customParameters={}}setDefaultLanguage(e){this.defaultLanguageCode=e}setCustomParameters(e){return this.customParameters=e,this}getCustomParameters(){return this.customParameters}}/**
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
 */class oo extends Zu{constructor(){super(...arguments),this.scopes=[]}addScope(e){return this.scopes.includes(e)||this.scopes.push(e),this}getScopes(){return[...this.scopes]}}/**
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
 */class Jn extends oo{constructor(){super("facebook.com")}static credential(e){return Ur._fromParams({providerId:Jn.PROVIDER_ID,signInMethod:Jn.FACEBOOK_SIGN_IN_METHOD,accessToken:e})}static credentialFromResult(e){return Jn.credentialFromTaggedObject(e)}static credentialFromError(e){return Jn.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e||!("oauthAccessToken"in e)||!e.oauthAccessToken)return null;try{return Jn.credential(e.oauthAccessToken)}catch{return null}}}Jn.FACEBOOK_SIGN_IN_METHOD="facebook.com";Jn.PROVIDER_ID="facebook.com";/**
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
 */class Xn extends oo{constructor(){super("google.com"),this.addScope("profile")}static credential(e,n){return Ur._fromParams({providerId:Xn.PROVIDER_ID,signInMethod:Xn.GOOGLE_SIGN_IN_METHOD,idToken:e,accessToken:n})}static credentialFromResult(e){return Xn.credentialFromTaggedObject(e)}static credentialFromError(e){return Xn.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e)return null;const{oauthIdToken:n,oauthAccessToken:r}=e;if(!n&&!r)return null;try{return Xn.credential(n,r)}catch{return null}}}Xn.GOOGLE_SIGN_IN_METHOD="google.com";Xn.PROVIDER_ID="google.com";/**
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
 */class Yn extends oo{constructor(){super("github.com")}static credential(e){return Ur._fromParams({providerId:Yn.PROVIDER_ID,signInMethod:Yn.GITHUB_SIGN_IN_METHOD,accessToken:e})}static credentialFromResult(e){return Yn.credentialFromTaggedObject(e)}static credentialFromError(e){return Yn.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e||!("oauthAccessToken"in e)||!e.oauthAccessToken)return null;try{return Yn.credential(e.oauthAccessToken)}catch{return null}}}Yn.GITHUB_SIGN_IN_METHOD="github.com";Yn.PROVIDER_ID="github.com";/**
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
 */class Zn extends oo{constructor(){super("twitter.com")}static credential(e,n){return Ur._fromParams({providerId:Zn.PROVIDER_ID,signInMethod:Zn.TWITTER_SIGN_IN_METHOD,oauthToken:e,oauthTokenSecret:n})}static credentialFromResult(e){return Zn.credentialFromTaggedObject(e)}static credentialFromError(e){return Zn.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e)return null;const{oauthAccessToken:n,oauthTokenSecret:r}=e;if(!n||!r)return null;try{return Zn.credential(n,r)}catch{return null}}}Zn.TWITTER_SIGN_IN_METHOD="twitter.com";Zn.PROVIDER_ID="twitter.com";/**
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
 */class Cs{constructor(e){this.user=e.user,this.providerId=e.providerId,this._tokenResponse=e._tokenResponse,this.operationType=e.operationType}static async _fromIdTokenResponse(e,n,r,s=!1){const i=await bn._fromIdTokenResponse(e,r,s),o=vp(r);return new Cs({user:i,providerId:o,_tokenResponse:r,operationType:n})}static async _forOperation(e,n,r){await e._updateTokensIfNecessary(r,!0);const s=vp(r);return new Cs({user:e,providerId:s,_tokenResponse:r,operationType:n})}}function vp(t){return t.providerId?t.providerId:"phoneNumber"in t?"phone":null}/**
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
 */class Ca extends xn{constructor(e,n,r,s){var i;super(n.code,n.message),this.operationType=r,this.user=s,Object.setPrototypeOf(this,Ca.prototype),this.customData={appName:e.name,tenantId:(i=e.tenantId)!==null&&i!==void 0?i:void 0,_serverResponse:n.customData._serverResponse,operationType:r}}static _fromErrorAndOperation(e,n,r,s){return new Ca(e,n,r,s)}}function cy(t,e,n,r){return(e==="reauthenticate"?n._getReauthenticationResolver(t):n._getIdTokenResponse(t)).catch(i=>{throw i.code==="auth/multi-factor-auth-required"?Ca._fromErrorAndOperation(t,i,e,r):i})}async function IP(t,e,n=!1){const r=await $i(t,e._linkToIdToken(t.auth,await t.getIdToken()),n);return Cs._forOperation(t,"link",r)}/**
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
 */async function bP(t,e,n=!1){const{auth:r}=t;if(on(r.app))return Promise.reject(sr(r));const s="reauthenticate";try{const i=await $i(t,cy(r,s,e,t),n);he(i.idToken,r,"internal-error");const o=Qu(i.idToken);he(o,r,"internal-error");const{sub:c}=o;return he(t.uid===c,r,"user-mismatch"),Cs._forOperation(t,s,i)}catch(i){throw(i==null?void 0:i.code)==="auth/user-not-found"&&jt(r,"user-mismatch"),i}}/**
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
 */async function ly(t,e,n=!1){if(on(t.app))return Promise.reject(sr(t));const r="signIn",s=await cy(t,r,e),i=await Cs._fromIdTokenResponse(t,r,s);return n||await t._updateCurrentUser(i.user),i}async function AP(t,e){return ly(Kr(t),e)}/**
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
 */async function RP(t){const e=Kr(t);e._getPasswordPolicyInternal()&&await e._updatePasswordPolicy()}function hN(t,e,n){return on(t.app)?Promise.reject(sr(t)):AP(Bt(t),Hs.credential(e,n)).catch(async r=>{throw r.code==="auth/password-does-not-meet-requirements"&&RP(t),r})}function SP(t,e,n,r){return Bt(t).onIdTokenChanged(e,n,r)}function PP(t,e,n){return Bt(t).beforeAuthStateChanged(e,n)}function fN(t,e,n,r){return Bt(t).onAuthStateChanged(e,n,r)}const ka="__sak";/**
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
 */class uy{constructor(e,n){this.storageRetriever=e,this.type=n}_isAvailable(){try{return this.storage?(this.storage.setItem(ka,"1"),this.storage.removeItem(ka),Promise.resolve(!0)):Promise.resolve(!1)}catch{return Promise.resolve(!1)}}_set(e,n){return this.storage.setItem(e,JSON.stringify(n)),Promise.resolve()}_get(e){const n=this.storage.getItem(e);return Promise.resolve(n?JSON.parse(n):null)}_remove(e){return this.storage.removeItem(e),Promise.resolve()}get storage(){return this.storageRetriever()}}/**
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
 */const CP=1e3,kP=10;class hy extends uy{constructor(){super(()=>window.localStorage,"LOCAL"),this.boundEventHandler=(e,n)=>this.onStorageEvent(e,n),this.listeners={},this.localCache={},this.pollTimer=null,this.fallbackToPolling=sy(),this._shouldAllowMigration=!0}forAllChangedKeys(e){for(const n of Object.keys(this.listeners)){const r=this.storage.getItem(n),s=this.localCache[n];r!==s&&e(n,s,r)}}onStorageEvent(e,n=!1){if(!e.key){this.forAllChangedKeys((o,c,l)=>{this.notifyListeners(o,l)});return}const r=e.key;n?this.detachListener():this.stopPolling();const s=()=>{const o=this.storage.getItem(r);!n&&this.localCache[r]===o||this.notifyListeners(r,o)},i=this.storage.getItem(r);YS()&&i!==e.newValue&&e.newValue!==e.oldValue?setTimeout(s,kP):s()}notifyListeners(e,n){this.localCache[e]=n;const r=this.listeners[e];if(r)for(const s of Array.from(r))s(n&&JSON.parse(n))}startPolling(){this.stopPolling(),this.pollTimer=setInterval(()=>{this.forAllChangedKeys((e,n,r)=>{this.onStorageEvent(new StorageEvent("storage",{key:e,oldValue:n,newValue:r}),!0)})},CP)}stopPolling(){this.pollTimer&&(clearInterval(this.pollTimer),this.pollTimer=null)}attachListener(){window.addEventListener("storage",this.boundEventHandler)}detachListener(){window.removeEventListener("storage",this.boundEventHandler)}_addListener(e,n){Object.keys(this.listeners).length===0&&(this.fallbackToPolling?this.startPolling():this.attachListener()),this.listeners[e]||(this.listeners[e]=new Set,this.localCache[e]=this.storage.getItem(e)),this.listeners[e].add(n)}_removeListener(e,n){this.listeners[e]&&(this.listeners[e].delete(n),this.listeners[e].size===0&&delete this.listeners[e]),Object.keys(this.listeners).length===0&&(this.detachListener(),this.stopPolling())}async _set(e,n){await super._set(e,n),this.localCache[e]=JSON.stringify(n)}async _get(e){const n=await super._get(e);return this.localCache[e]=JSON.stringify(n),n}async _remove(e){await super._remove(e),delete this.localCache[e]}}hy.type="LOCAL";const OP=hy;/**
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
 */class fy extends uy{constructor(){super(()=>window.sessionStorage,"SESSION")}_addListener(e,n){}_removeListener(e,n){}}fy.type="SESSION";const dy=fy;/**
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
 */function NP(t){return Promise.all(t.map(async e=>{try{return{fulfilled:!0,value:await e}}catch(n){return{fulfilled:!1,reason:n}}}))}/**
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
 */class cc{constructor(e){this.eventTarget=e,this.handlersMap={},this.boundEventHandler=this.handleEvent.bind(this)}static _getInstance(e){const n=this.receivers.find(s=>s.isListeningto(e));if(n)return n;const r=new cc(e);return this.receivers.push(r),r}isListeningto(e){return this.eventTarget===e}async handleEvent(e){const n=e,{eventId:r,eventType:s,data:i}=n.data,o=this.handlersMap[s];if(!(o!=null&&o.size))return;n.ports[0].postMessage({status:"ack",eventId:r,eventType:s});const c=Array.from(o).map(async u=>u(n.origin,i)),l=await NP(c);n.ports[0].postMessage({status:"done",eventId:r,eventType:s,response:l})}_subscribe(e,n){Object.keys(this.handlersMap).length===0&&this.eventTarget.addEventListener("message",this.boundEventHandler),this.handlersMap[e]||(this.handlersMap[e]=new Set),this.handlersMap[e].add(n)}_unsubscribe(e,n){this.handlersMap[e]&&n&&this.handlersMap[e].delete(n),(!n||this.handlersMap[e].size===0)&&delete this.handlersMap[e],Object.keys(this.handlersMap).length===0&&this.eventTarget.removeEventListener("message",this.boundEventHandler)}}cc.receivers=[];/**
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
 */function eh(t="",e=10){let n="";for(let r=0;r<e;r++)n+=Math.floor(Math.random()*10);return t+n}/**
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
 */class DP{constructor(e){this.target=e,this.handlers=new Set}removeMessageHandler(e){e.messageChannel&&(e.messageChannel.port1.removeEventListener("message",e.onMessage),e.messageChannel.port1.close()),this.handlers.delete(e)}async _send(e,n,r=50){const s=typeof MessageChannel<"u"?new MessageChannel:null;if(!s)throw new Error("connection_unavailable");let i,o;return new Promise((c,l)=>{const u=eh("",20);s.port1.start();const h=setTimeout(()=>{l(new Error("unsupported_event"))},r);o={messageChannel:s,onMessage(d){const g=d;if(g.data.eventId===u)switch(g.data.status){case"ack":clearTimeout(h),i=setTimeout(()=>{l(new Error("timeout"))},3e3);break;case"done":clearTimeout(i),c(g.data.response);break;default:clearTimeout(h),clearTimeout(i),l(new Error("invalid_response"));break}}},this.handlers.add(o),s.port1.addEventListener("message",o.onMessage),this.target.postMessage({eventType:e,eventId:u,data:n},[s.port2])}).finally(()=>{o&&this.removeMessageHandler(o)})}}/**
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
 */function ln(){return window}function VP(t){ln().location.href=t}/**
 * @license
 * Copyright 2020 Google LLC.
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
 */function py(){return typeof ln().WorkerGlobalScope<"u"&&typeof ln().importScripts=="function"}async function xP(){if(!(navigator!=null&&navigator.serviceWorker))return null;try{return(await navigator.serviceWorker.ready).active}catch{return null}}function MP(){var t;return((t=navigator==null?void 0:navigator.serviceWorker)===null||t===void 0?void 0:t.controller)||null}function LP(){return py()?self:null}/**
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
 */const gy="firebaseLocalStorageDb",FP=1,Oa="firebaseLocalStorage",my="fbase_key";class ao{constructor(e){this.request=e}toPromise(){return new Promise((e,n)=>{this.request.addEventListener("success",()=>{e(this.request.result)}),this.request.addEventListener("error",()=>{n(this.request.error)})})}}function lc(t,e){return t.transaction([Oa],e?"readwrite":"readonly").objectStore(Oa)}function UP(){const t=indexedDB.deleteDatabase(gy);return new ao(t).toPromise()}function Xl(){const t=indexedDB.open(gy,FP);return new Promise((e,n)=>{t.addEventListener("error",()=>{n(t.error)}),t.addEventListener("upgradeneeded",()=>{const r=t.result;try{r.createObjectStore(Oa,{keyPath:my})}catch(s){n(s)}}),t.addEventListener("success",async()=>{const r=t.result;r.objectStoreNames.contains(Oa)?e(r):(r.close(),await UP(),e(await Xl()))})})}async function Ep(t,e,n){const r=lc(t,!0).put({[my]:e,value:n});return new ao(r).toPromise()}async function BP(t,e){const n=lc(t,!1).get(e),r=await new ao(n).toPromise();return r===void 0?null:r.value}function Tp(t,e){const n=lc(t,!0).delete(e);return new ao(n).toPromise()}const jP=800,$P=3;class _y{constructor(){this.type="LOCAL",this._shouldAllowMigration=!0,this.listeners={},this.localCache={},this.pollTimer=null,this.pendingWrites=0,this.receiver=null,this.sender=null,this.serviceWorkerReceiverAvailable=!1,this.activeServiceWorker=null,this._workerInitializationPromise=this.initializeServiceWorkerMessaging().then(()=>{},()=>{})}async _openDb(){return this.db?this.db:(this.db=await Xl(),this.db)}async _withRetries(e){let n=0;for(;;)try{const r=await this._openDb();return await e(r)}catch(r){if(n++>$P)throw r;this.db&&(this.db.close(),this.db=void 0)}}async initializeServiceWorkerMessaging(){return py()?this.initializeReceiver():this.initializeSender()}async initializeReceiver(){this.receiver=cc._getInstance(LP()),this.receiver._subscribe("keyChanged",async(e,n)=>({keyProcessed:(await this._poll()).includes(n.key)})),this.receiver._subscribe("ping",async(e,n)=>["keyChanged"])}async initializeSender(){var e,n;if(this.activeServiceWorker=await xP(),!this.activeServiceWorker)return;this.sender=new DP(this.activeServiceWorker);const r=await this.sender._send("ping",{},800);r&&!((e=r[0])===null||e===void 0)&&e.fulfilled&&!((n=r[0])===null||n===void 0)&&n.value.includes("keyChanged")&&(this.serviceWorkerReceiverAvailable=!0)}async notifyServiceWorker(e){if(!(!this.sender||!this.activeServiceWorker||MP()!==this.activeServiceWorker))try{await this.sender._send("keyChanged",{key:e},this.serviceWorkerReceiverAvailable?800:50)}catch{}}async _isAvailable(){try{if(!indexedDB)return!1;const e=await Xl();return await Ep(e,ka,"1"),await Tp(e,ka),!0}catch{}return!1}async _withPendingWrite(e){this.pendingWrites++;try{await e()}finally{this.pendingWrites--}}async _set(e,n){return this._withPendingWrite(async()=>(await this._withRetries(r=>Ep(r,e,n)),this.localCache[e]=n,this.notifyServiceWorker(e)))}async _get(e){const n=await this._withRetries(r=>BP(r,e));return this.localCache[e]=n,n}async _remove(e){return this._withPendingWrite(async()=>(await this._withRetries(n=>Tp(n,e)),delete this.localCache[e],this.notifyServiceWorker(e)))}async _poll(){const e=await this._withRetries(s=>{const i=lc(s,!1).getAll();return new ao(i).toPromise()});if(!e)return[];if(this.pendingWrites!==0)return[];const n=[],r=new Set;if(e.length!==0)for(const{fbase_key:s,value:i}of e)r.add(s),JSON.stringify(this.localCache[s])!==JSON.stringify(i)&&(this.notifyListeners(s,i),n.push(s));for(const s of Object.keys(this.localCache))this.localCache[s]&&!r.has(s)&&(this.notifyListeners(s,null),n.push(s));return n}notifyListeners(e,n){this.localCache[e]=n;const r=this.listeners[e];if(r)for(const s of Array.from(r))s(n)}startPolling(){this.stopPolling(),this.pollTimer=setInterval(async()=>this._poll(),jP)}stopPolling(){this.pollTimer&&(clearInterval(this.pollTimer),this.pollTimer=null)}_addListener(e,n){Object.keys(this.listeners).length===0&&this.startPolling(),this.listeners[e]||(this.listeners[e]=new Set,this._get(e)),this.listeners[e].add(n)}_removeListener(e,n){this.listeners[e]&&(this.listeners[e].delete(n),this.listeners[e].size===0&&delete this.listeners[e]),Object.keys(this.listeners).length===0&&this.stopPolling()}}_y.type="LOCAL";const HP=_y;new io(3e4,6e4);/**
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
 */function yy(t,e){return e?An(e):(he(t._popupRedirectResolver,t,"argument-error"),t._popupRedirectResolver)}/**
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
 */class th extends Xu{constructor(e){super("custom","custom"),this.params=e}_getIdTokenResponse(e){return Ts(e,this._buildIdpRequest())}_linkToIdToken(e,n){return Ts(e,this._buildIdpRequest(n))}_getReauthenticationResolver(e){return Ts(e,this._buildIdpRequest())}_buildIdpRequest(e){const n={requestUri:this.params.requestUri,sessionId:this.params.sessionId,postBody:this.params.postBody,tenantId:this.params.tenantId,pendingToken:this.params.pendingToken,returnSecureToken:!0,returnIdpCredential:!0};return e&&(n.idToken=e),n}}function qP(t){return ly(t.auth,new th(t),t.bypassAuthState)}function WP(t){const{auth:e,user:n}=t;return he(n,e,"internal-error"),bP(n,new th(t),t.bypassAuthState)}async function KP(t){const{auth:e,user:n}=t;return he(n,e,"internal-error"),IP(n,new th(t),t.bypassAuthState)}/**
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
 */class vy{constructor(e,n,r,s,i=!1){this.auth=e,this.resolver=r,this.user=s,this.bypassAuthState=i,this.pendingPromise=null,this.eventManager=null,this.filter=Array.isArray(n)?n:[n]}execute(){return new Promise(async(e,n)=>{this.pendingPromise={resolve:e,reject:n};try{this.eventManager=await this.resolver._initialize(this.auth),await this.onExecution(),this.eventManager.registerConsumer(this)}catch(r){this.reject(r)}})}async onAuthEvent(e){const{urlResponse:n,sessionId:r,postBody:s,tenantId:i,error:o,type:c}=e;if(o){this.reject(o);return}const l={auth:this.auth,requestUri:n,sessionId:r,tenantId:i||void 0,postBody:s||void 0,user:this.user,bypassAuthState:this.bypassAuthState};try{this.resolve(await this.getIdpTask(c)(l))}catch(u){this.reject(u)}}onError(e){this.reject(e)}getIdpTask(e){switch(e){case"signInViaPopup":case"signInViaRedirect":return qP;case"linkViaPopup":case"linkViaRedirect":return KP;case"reauthViaPopup":case"reauthViaRedirect":return WP;default:jt(this.auth,"internal-error")}}resolve(e){kn(this.pendingPromise,"Pending promise was never set"),this.pendingPromise.resolve(e),this.unregisterAndCleanUp()}reject(e){kn(this.pendingPromise,"Pending promise was never set"),this.pendingPromise.reject(e),this.unregisterAndCleanUp()}unregisterAndCleanUp(){this.eventManager&&this.eventManager.unregisterConsumer(this),this.pendingPromise=null,this.cleanUp()}}/**
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
 */const zP=new io(2e3,1e4);async function dN(t,e,n){if(on(t.app))return Promise.reject(Qt(t,"operation-not-supported-in-this-environment"));const r=Kr(t);DS(t,e,Zu);const s=yy(r,n);return new Pr(r,"signInViaPopup",e,s).executeNotNull()}class Pr extends vy{constructor(e,n,r,s,i){super(e,n,s,i),this.provider=r,this.authWindow=null,this.pollId=null,Pr.currentPopupAction&&Pr.currentPopupAction.cancel(),Pr.currentPopupAction=this}async executeNotNull(){const e=await this.execute();return he(e,this.auth,"internal-error"),e}async onExecution(){kn(this.filter.length===1,"Popup operations only handle one event");const e=eh();this.authWindow=await this.resolver._openPopup(this.auth,this.provider,this.filter[0],e),this.authWindow.associatedEvent=e,this.resolver._originValidation(this.auth).catch(n=>{this.reject(n)}),this.resolver._isIframeWebStorageSupported(this.auth,n=>{n||this.reject(Qt(this.auth,"web-storage-unsupported"))}),this.pollUserCancellation()}get eventId(){var e;return((e=this.authWindow)===null||e===void 0?void 0:e.associatedEvent)||null}cancel(){this.reject(Qt(this.auth,"cancelled-popup-request"))}cleanUp(){this.authWindow&&this.authWindow.close(),this.pollId&&window.clearTimeout(this.pollId),this.authWindow=null,this.pollId=null,Pr.currentPopupAction=null}pollUserCancellation(){const e=()=>{var n,r;if(!((r=(n=this.authWindow)===null||n===void 0?void 0:n.window)===null||r===void 0)&&r.closed){this.pollId=window.setTimeout(()=>{this.pollId=null,this.reject(Qt(this.auth,"popup-closed-by-user"))},8e3);return}this.pollId=window.setTimeout(e,zP.get())};e()}}Pr.currentPopupAction=null;/**
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
 */const GP="pendingRedirect",ta=new Map;class QP extends vy{constructor(e,n,r=!1){super(e,["signInViaRedirect","linkViaRedirect","reauthViaRedirect","unknown"],n,void 0,r),this.eventId=null}async execute(){let e=ta.get(this.auth._key());if(!e){try{const r=await JP(this.resolver,this.auth)?await super.execute():null;e=()=>Promise.resolve(r)}catch(n){e=()=>Promise.reject(n)}ta.set(this.auth._key(),e)}return this.bypassAuthState||ta.set(this.auth._key(),()=>Promise.resolve(null)),e()}async onAuthEvent(e){if(e.type==="signInViaRedirect")return super.onAuthEvent(e);if(e.type==="unknown"){this.resolve(null);return}if(e.eventId){const n=await this.auth._redirectUserForId(e.eventId);if(n)return this.user=n,super.onAuthEvent(e);this.resolve(null)}}async onExecution(){}cleanUp(){}}async function JP(t,e){const n=ZP(e),r=YP(t);if(!await r._isAvailable())return!1;const s=await r._get(n)==="true";return await r._remove(n),s}function XP(t,e){ta.set(t._key(),e)}function YP(t){return An(t._redirectPersistence)}function ZP(t){return ea(GP,t.config.apiKey,t.name)}async function eC(t,e,n=!1){if(on(t.app))return Promise.reject(sr(t));const r=Kr(t),s=yy(r,e),o=await new QP(r,s,n).execute();return o&&!n&&(delete o.user._redirectEventId,await r._persistUserIfCurrent(o.user),await r._setRedirectUser(null,e)),o}/**
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
 */const tC=10*60*1e3;class nC{constructor(e){this.auth=e,this.cachedEventUids=new Set,this.consumers=new Set,this.queuedRedirectEvent=null,this.hasHandledPotentialRedirect=!1,this.lastProcessedEventTime=Date.now()}registerConsumer(e){this.consumers.add(e),this.queuedRedirectEvent&&this.isEventForConsumer(this.queuedRedirectEvent,e)&&(this.sendToConsumer(this.queuedRedirectEvent,e),this.saveEventToCache(this.queuedRedirectEvent),this.queuedRedirectEvent=null)}unregisterConsumer(e){this.consumers.delete(e)}onEvent(e){if(this.hasEventBeenHandled(e))return!1;let n=!1;return this.consumers.forEach(r=>{this.isEventForConsumer(e,r)&&(n=!0,this.sendToConsumer(e,r),this.saveEventToCache(e))}),this.hasHandledPotentialRedirect||!rC(e)||(this.hasHandledPotentialRedirect=!0,n||(this.queuedRedirectEvent=e,n=!0)),n}sendToConsumer(e,n){var r;if(e.error&&!Ey(e)){const s=((r=e.error.code)===null||r===void 0?void 0:r.split("auth/")[1])||"internal-error";n.onError(Qt(this.auth,s))}else n.onAuthEvent(e)}isEventForConsumer(e,n){const r=n.eventId===null||!!e.eventId&&e.eventId===n.eventId;return n.filter.includes(e.type)&&r}hasEventBeenHandled(e){return Date.now()-this.lastProcessedEventTime>=tC&&this.cachedEventUids.clear(),this.cachedEventUids.has(wp(e))}saveEventToCache(e){this.cachedEventUids.add(wp(e)),this.lastProcessedEventTime=Date.now()}}function wp(t){return[t.type,t.eventId,t.sessionId,t.tenantId].filter(e=>e).join("-")}function Ey({type:t,error:e}){return t==="unknown"&&(e==null?void 0:e.code)==="auth/no-auth-event"}function rC(t){switch(t.type){case"signInViaRedirect":case"linkViaRedirect":case"reauthViaRedirect":return!0;case"unknown":return Ey(t);default:return!1}}/**
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
 */async function sC(t,e={}){return gr(t,"GET","/v1/projects",e)}/**
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
 */const iC=/^\d{1,3}\.\d{1,3}\.\d{1,3}\.\d{1,3}$/,oC=/^https?/;async function aC(t){if(t.config.emulator)return;const{authorizedDomains:e}=await sC(t);for(const n of e)try{if(cC(n))return}catch{}jt(t,"unauthorized-domain")}function cC(t){const e=Ql(),{protocol:n,hostname:r}=new URL(e);if(t.startsWith("chrome-extension://")){const o=new URL(t);return o.hostname===""&&r===""?n==="chrome-extension:"&&t.replace("chrome-extension://","")===e.replace("chrome-extension://",""):n==="chrome-extension:"&&o.hostname===r}if(!oC.test(n))return!1;if(iC.test(t))return r===t;const s=t.replace(/\./g,"\\.");return new RegExp("^(.+\\."+s+"|"+s+")$","i").test(r)}/**
 * @license
 * Copyright 2020 Google LLC.
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
 */const lC=new io(3e4,6e4);function Ip(){const t=ln().___jsl;if(t!=null&&t.H){for(const e of Object.keys(t.H))if(t.H[e].r=t.H[e].r||[],t.H[e].L=t.H[e].L||[],t.H[e].r=[...t.H[e].L],t.CP)for(let n=0;n<t.CP.length;n++)t.CP[n]=null}}function uC(t){return new Promise((e,n)=>{var r,s,i;function o(){Ip(),gapi.load("gapi.iframes",{callback:()=>{e(gapi.iframes.getContext())},ontimeout:()=>{Ip(),n(Qt(t,"network-request-failed"))},timeout:lC.get()})}if(!((s=(r=ln().gapi)===null||r===void 0?void 0:r.iframes)===null||s===void 0)&&s.Iframe)e(gapi.iframes.getContext());else if(!((i=ln().gapi)===null||i===void 0)&&i.load)o();else{const c=aP("iframefcb");return ln()[c]=()=>{gapi.load?o():n(Qt(t,"network-request-failed"))},oy(`${oP()}?onload=${c}`).catch(l=>n(l))}}).catch(e=>{throw na=null,e})}let na=null;function hC(t){return na=na||uC(t),na}/**
 * @license
 * Copyright 2020 Google LLC.
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
 */const fC=new io(5e3,15e3),dC="__/auth/iframe",pC="emulator/auth/iframe",gC={style:{position:"absolute",top:"-100px",width:"1px",height:"1px"},"aria-hidden":"true",tabindex:"-1"},mC=new Map([["identitytoolkit.googleapis.com","p"],["staging-identitytoolkit.sandbox.googleapis.com","s"],["test-identitytoolkit.sandbox.googleapis.com","t"]]);function _C(t){const e=t.config;he(e.authDomain,t,"auth-domain-config-required");const n=e.emulator?Gu(e,pC):`https://${t.config.authDomain}/${dC}`,r={apiKey:e.apiKey,appName:t.name,v:$s},s=mC.get(t.config.apiHost);s&&(r.eid=s);const i=t._getFrameworks();return i.length&&(r.fw=i.join(",")),`${n}?${so(r).slice(1)}`}async function yC(t){const e=await hC(t),n=ln().gapi;return he(n,t,"internal-error"),e.open({where:document.body,url:_C(t),messageHandlersFilter:n.iframes.CROSS_ORIGIN_IFRAMES_FILTER,attributes:gC,dontclear:!0},r=>new Promise(async(s,i)=>{await r.restyle({setHideOnLeave:!1});const o=Qt(t,"network-request-failed"),c=ln().setTimeout(()=>{i(o)},fC.get());function l(){ln().clearTimeout(c),s(r)}r.ping(l).then(l,()=>{i(o)})}))}/**
 * @license
 * Copyright 2020 Google LLC.
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
 */const vC={location:"yes",resizable:"yes",statusbar:"yes",toolbar:"no"},EC=500,TC=600,wC="_blank",IC="http://localhost";class bp{constructor(e){this.window=e,this.associatedEvent=null}close(){if(this.window)try{this.window.close()}catch{}}}function bC(t,e,n,r=EC,s=TC){const i=Math.max((window.screen.availHeight-s)/2,0).toString(),o=Math.max((window.screen.availWidth-r)/2,0).toString();let c="";const l=Object.assign(Object.assign({},vC),{width:r.toString(),height:s.toString(),top:i,left:o}),u=yt().toLowerCase();n&&(c=Z_(u)?wC:n),X_(u)&&(e=e||IC,l.scrollbars="yes");const h=Object.entries(l).reduce((g,[m,P])=>`${g}${m}=${P},`,"");if(XS(u)&&c!=="_self")return AC(e||"",c),new bp(null);const d=window.open(e||"",c,h);he(d,t,"popup-blocked");try{d.focus()}catch{}return new bp(d)}function AC(t,e){const n=document.createElement("a");n.href=t,n.target=e;const r=document.createEvent("MouseEvent");r.initMouseEvent("click",!0,!0,window,1,0,0,0,0,!1,!1,!1,!1,1,null),n.dispatchEvent(r)}/**
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
 */const RC="__/auth/handler",SC="emulator/auth/handler",PC=encodeURIComponent("fac");async function Ap(t,e,n,r,s,i){he(t.config.authDomain,t,"auth-domain-config-required"),he(t.config.apiKey,t,"invalid-api-key");const o={apiKey:t.config.apiKey,appName:t.name,authType:n,redirectUrl:r,v:$s,eventId:s};if(e instanceof Zu){e.setDefaultLanguage(t.languageCode),o.providerId=e.providerId||"",vR(e.getCustomParameters())||(o.customParameters=JSON.stringify(e.getCustomParameters()));for(const[h,d]of Object.entries({}))o[h]=d}if(e instanceof oo){const h=e.getScopes().filter(d=>d!=="");h.length>0&&(o.scopes=h.join(","))}t.tenantId&&(o.tid=t.tenantId);const c=o;for(const h of Object.keys(c))c[h]===void 0&&delete c[h];const l=await t._getAppCheckToken(),u=l?`#${PC}=${encodeURIComponent(l)}`:"";return`${CC(t)}?${so(c).slice(1)}${u}`}function CC({config:t}){return t.emulator?Gu(t,SC):`https://${t.authDomain}/${RC}`}/**
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
 */const al="webStorageSupport";class kC{constructor(){this.eventManagers={},this.iframes={},this.originValidationPromises={},this._redirectPersistence=dy,this._completeRedirectFn=eC,this._overrideRedirectResult=XP}async _openPopup(e,n,r,s){var i;kn((i=this.eventManagers[e._key()])===null||i===void 0?void 0:i.manager,"_initialize() not called before _openPopup()");const o=await Ap(e,n,r,Ql(),s);return bC(e,o,eh())}async _openRedirect(e,n,r,s){await this._originValidation(e);const i=await Ap(e,n,r,Ql(),s);return VP(i),new Promise(()=>{})}_initialize(e){const n=e._key();if(this.eventManagers[n]){const{manager:s,promise:i}=this.eventManagers[n];return s?Promise.resolve(s):(kn(i,"If manager is not set, promise should be"),i)}const r=this.initAndGetManager(e);return this.eventManagers[n]={promise:r},r.catch(()=>{delete this.eventManagers[n]}),r}async initAndGetManager(e){const n=await yC(e),r=new nC(e);return n.register("authEvent",s=>(he(s==null?void 0:s.authEvent,e,"invalid-auth-event"),{status:r.onEvent(s.authEvent)?"ACK":"ERROR"}),gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER),this.eventManagers[e._key()]={manager:r},this.iframes[e._key()]=n,r}_isIframeWebStorageSupported(e,n){this.iframes[e._key()].send(al,{type:al},s=>{var i;const o=(i=s==null?void 0:s[0])===null||i===void 0?void 0:i[al];o!==void 0&&n(!!o),jt(e,"internal-error")},gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER)}_originValidation(e){const n=e._key();return this.originValidationPromises[n]||(this.originValidationPromises[n]=aC(e)),this.originValidationPromises[n]}get _shouldInitProactively(){return sy()||Y_()||Ju()}}const OC=kC;var Rp="@firebase/auth",Sp="1.7.8";/**
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
 */class NC{constructor(e){this.auth=e,this.internalListeners=new Map}getUid(){var e;return this.assertAuthConfigured(),((e=this.auth.currentUser)===null||e===void 0?void 0:e.uid)||null}async getToken(e){return this.assertAuthConfigured(),await this.auth._initializationPromise,this.auth.currentUser?{accessToken:await this.auth.currentUser.getIdToken(e)}:null}addAuthTokenListener(e){if(this.assertAuthConfigured(),this.internalListeners.has(e))return;const n=this.auth.onIdTokenChanged(r=>{e((r==null?void 0:r.stsTokenManager.accessToken)||null)});this.internalListeners.set(e,n),this.updateProactiveRefresh()}removeAuthTokenListener(e){this.assertAuthConfigured();const n=this.internalListeners.get(e);n&&(this.internalListeners.delete(e),n(),this.updateProactiveRefresh())}assertAuthConfigured(){he(this.auth._initializationPromise,"dependent-sdk-initialized-before-auth")}updateProactiveRefresh(){this.internalListeners.size>0?this.auth._startProactiveRefresh():this.auth._stopProactiveRefresh()}}/**
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
 */function DC(t){switch(t){case"Node":return"node";case"ReactNative":return"rn";case"Worker":return"webworker";case"Cordova":return"cordova";case"WebExtension":return"web-extension";default:return}}function VC(t){Ps(new Fr("auth",(e,{options:n})=>{const r=e.getProvider("app").getImmediate(),s=e.getProvider("heartbeat"),i=e.getProvider("app-check-internal"),{apiKey:o,authDomain:c}=r.options;he(o&&!o.includes(":"),"invalid-api-key",{appName:r.name});const l={apiKey:o,authDomain:c,clientPlatform:t,apiHost:"identitytoolkit.googleapis.com",tokenApiHost:"securetoken.googleapis.com",apiScheme:"https",sdkClientVersion:iy(t)},u=new rP(r,s,i,l);return fP(u,n),u},"PUBLIC").setInstantiationMode("EXPLICIT").setInstanceCreatedCallback((e,n,r)=>{e.getProvider("auth-internal").initialize()})),Ps(new Fr("auth-internal",e=>{const n=Kr(e.getProvider("auth").getImmediate());return(r=>new NC(r))(n)},"PRIVATE").setInstantiationMode("EXPLICIT")),rr(Rp,Sp,DC(t)),rr(Rp,Sp,"esm2017")}/**
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
 */const xC=5*60,MC=M_("authIdTokenMaxAge")||xC;let Pp=null;const LC=t=>async e=>{const n=e&&await e.getIdTokenResult(),r=n&&(new Date().getTime()-Date.parse(n.issuedAtTime))/1e3;if(r&&r>MC)return;const s=n==null?void 0:n.token;Pp!==s&&(Pp=s,await fetch(t,{method:s?"POST":"DELETE",headers:s?{Authorization:`Bearer ${s}`}:{}}))};function FC(t=B_()){const e=qu(t,"auth");if(e.isInitialized())return e.getImmediate();const n=hP(t,{popupRedirectResolver:OC,persistence:[HP,OP,dy]}),r=M_("authTokenSyncURL");if(r&&typeof isSecureContext=="boolean"&&isSecureContext){const i=new URL(r,location.origin);if(location.origin===i.origin){const o=LC(i.toString());PP(n,o,()=>o(n.currentUser)),SP(n,c=>o(c))}}const s=V_("auth");return s&&dP(n,`http://${s}`),n}function UC(){var t,e;return(e=(t=document.getElementsByTagName("head"))===null||t===void 0?void 0:t[0])!==null&&e!==void 0?e:document}sP({loadJS(t){return new Promise((e,n)=>{const r=document.createElement("script");r.setAttribute("src",t),r.onload=e,r.onerror=s=>{const i=Qt("internal-error");i.customData=s,n(i)},r.type="text/javascript",r.charset="UTF-8",UC().appendChild(r)})},gapiScript:"https://apis.google.com/js/api.js",recaptchaV2Script:"https://www.google.com/recaptcha/api.js",recaptchaEnterpriseScript:"https://www.google.com/recaptcha/enterprise.js?render="});VC("Browser");var Cp=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{};/** @license
Copyright The Closure Library Authors.
SPDX-License-Identifier: Apache-2.0
*/var Mr,Ty;(function(){var t;/** @license

 Copyright The Closure Library Authors.
 SPDX-License-Identifier: Apache-2.0
*/function e(I,v){function y(){}y.prototype=v.prototype,I.D=v.prototype,I.prototype=new y,I.prototype.constructor=I,I.C=function(E,S,A){for(var T=Array(arguments.length-2),pe=2;pe<arguments.length;pe++)T[pe-2]=arguments[pe];return v.prototype[S].apply(E,T)}}function n(){this.blockSize=-1}function r(){this.blockSize=-1,this.blockSize=64,this.g=Array(4),this.B=Array(this.blockSize),this.o=this.h=0,this.s()}e(r,n),r.prototype.s=function(){this.g[0]=1732584193,this.g[1]=4023233417,this.g[2]=2562383102,this.g[3]=271733878,this.o=this.h=0};function s(I,v,y){y||(y=0);var E=Array(16);if(typeof v=="string")for(var S=0;16>S;++S)E[S]=v.charCodeAt(y++)|v.charCodeAt(y++)<<8|v.charCodeAt(y++)<<16|v.charCodeAt(y++)<<24;else for(S=0;16>S;++S)E[S]=v[y++]|v[y++]<<8|v[y++]<<16|v[y++]<<24;v=I.g[0],y=I.g[1],S=I.g[2];var A=I.g[3],T=v+(A^y&(S^A))+E[0]+3614090360&4294967295;v=y+(T<<7&4294967295|T>>>25),T=A+(S^v&(y^S))+E[1]+3905402710&4294967295,A=v+(T<<12&4294967295|T>>>20),T=S+(y^A&(v^y))+E[2]+606105819&4294967295,S=A+(T<<17&4294967295|T>>>15),T=y+(v^S&(A^v))+E[3]+3250441966&4294967295,y=S+(T<<22&4294967295|T>>>10),T=v+(A^y&(S^A))+E[4]+4118548399&4294967295,v=y+(T<<7&4294967295|T>>>25),T=A+(S^v&(y^S))+E[5]+1200080426&4294967295,A=v+(T<<12&4294967295|T>>>20),T=S+(y^A&(v^y))+E[6]+2821735955&4294967295,S=A+(T<<17&4294967295|T>>>15),T=y+(v^S&(A^v))+E[7]+4249261313&4294967295,y=S+(T<<22&4294967295|T>>>10),T=v+(A^y&(S^A))+E[8]+1770035416&4294967295,v=y+(T<<7&4294967295|T>>>25),T=A+(S^v&(y^S))+E[9]+2336552879&4294967295,A=v+(T<<12&4294967295|T>>>20),T=S+(y^A&(v^y))+E[10]+4294925233&4294967295,S=A+(T<<17&4294967295|T>>>15),T=y+(v^S&(A^v))+E[11]+2304563134&4294967295,y=S+(T<<22&4294967295|T>>>10),T=v+(A^y&(S^A))+E[12]+1804603682&4294967295,v=y+(T<<7&4294967295|T>>>25),T=A+(S^v&(y^S))+E[13]+4254626195&4294967295,A=v+(T<<12&4294967295|T>>>20),T=S+(y^A&(v^y))+E[14]+2792965006&4294967295,S=A+(T<<17&4294967295|T>>>15),T=y+(v^S&(A^v))+E[15]+1236535329&4294967295,y=S+(T<<22&4294967295|T>>>10),T=v+(S^A&(y^S))+E[1]+4129170786&4294967295,v=y+(T<<5&4294967295|T>>>27),T=A+(y^S&(v^y))+E[6]+3225465664&4294967295,A=v+(T<<9&4294967295|T>>>23),T=S+(v^y&(A^v))+E[11]+643717713&4294967295,S=A+(T<<14&4294967295|T>>>18),T=y+(A^v&(S^A))+E[0]+3921069994&4294967295,y=S+(T<<20&4294967295|T>>>12),T=v+(S^A&(y^S))+E[5]+3593408605&4294967295,v=y+(T<<5&4294967295|T>>>27),T=A+(y^S&(v^y))+E[10]+38016083&4294967295,A=v+(T<<9&4294967295|T>>>23),T=S+(v^y&(A^v))+E[15]+3634488961&4294967295,S=A+(T<<14&4294967295|T>>>18),T=y+(A^v&(S^A))+E[4]+3889429448&4294967295,y=S+(T<<20&4294967295|T>>>12),T=v+(S^A&(y^S))+E[9]+568446438&4294967295,v=y+(T<<5&4294967295|T>>>27),T=A+(y^S&(v^y))+E[14]+3275163606&4294967295,A=v+(T<<9&4294967295|T>>>23),T=S+(v^y&(A^v))+E[3]+4107603335&4294967295,S=A+(T<<14&4294967295|T>>>18),T=y+(A^v&(S^A))+E[8]+1163531501&4294967295,y=S+(T<<20&4294967295|T>>>12),T=v+(S^A&(y^S))+E[13]+2850285829&4294967295,v=y+(T<<5&4294967295|T>>>27),T=A+(y^S&(v^y))+E[2]+4243563512&4294967295,A=v+(T<<9&4294967295|T>>>23),T=S+(v^y&(A^v))+E[7]+1735328473&4294967295,S=A+(T<<14&4294967295|T>>>18),T=y+(A^v&(S^A))+E[12]+2368359562&4294967295,y=S+(T<<20&4294967295|T>>>12),T=v+(y^S^A)+E[5]+4294588738&4294967295,v=y+(T<<4&4294967295|T>>>28),T=A+(v^y^S)+E[8]+2272392833&4294967295,A=v+(T<<11&4294967295|T>>>21),T=S+(A^v^y)+E[11]+1839030562&4294967295,S=A+(T<<16&4294967295|T>>>16),T=y+(S^A^v)+E[14]+4259657740&4294967295,y=S+(T<<23&4294967295|T>>>9),T=v+(y^S^A)+E[1]+2763975236&4294967295,v=y+(T<<4&4294967295|T>>>28),T=A+(v^y^S)+E[4]+1272893353&4294967295,A=v+(T<<11&4294967295|T>>>21),T=S+(A^v^y)+E[7]+4139469664&4294967295,S=A+(T<<16&4294967295|T>>>16),T=y+(S^A^v)+E[10]+3200236656&4294967295,y=S+(T<<23&4294967295|T>>>9),T=v+(y^S^A)+E[13]+681279174&4294967295,v=y+(T<<4&4294967295|T>>>28),T=A+(v^y^S)+E[0]+3936430074&4294967295,A=v+(T<<11&4294967295|T>>>21),T=S+(A^v^y)+E[3]+3572445317&4294967295,S=A+(T<<16&4294967295|T>>>16),T=y+(S^A^v)+E[6]+76029189&4294967295,y=S+(T<<23&4294967295|T>>>9),T=v+(y^S^A)+E[9]+3654602809&4294967295,v=y+(T<<4&4294967295|T>>>28),T=A+(v^y^S)+E[12]+3873151461&4294967295,A=v+(T<<11&4294967295|T>>>21),T=S+(A^v^y)+E[15]+530742520&4294967295,S=A+(T<<16&4294967295|T>>>16),T=y+(S^A^v)+E[2]+3299628645&4294967295,y=S+(T<<23&4294967295|T>>>9),T=v+(S^(y|~A))+E[0]+4096336452&4294967295,v=y+(T<<6&4294967295|T>>>26),T=A+(y^(v|~S))+E[7]+1126891415&4294967295,A=v+(T<<10&4294967295|T>>>22),T=S+(v^(A|~y))+E[14]+2878612391&4294967295,S=A+(T<<15&4294967295|T>>>17),T=y+(A^(S|~v))+E[5]+4237533241&4294967295,y=S+(T<<21&4294967295|T>>>11),T=v+(S^(y|~A))+E[12]+1700485571&4294967295,v=y+(T<<6&4294967295|T>>>26),T=A+(y^(v|~S))+E[3]+2399980690&4294967295,A=v+(T<<10&4294967295|T>>>22),T=S+(v^(A|~y))+E[10]+4293915773&4294967295,S=A+(T<<15&4294967295|T>>>17),T=y+(A^(S|~v))+E[1]+2240044497&4294967295,y=S+(T<<21&4294967295|T>>>11),T=v+(S^(y|~A))+E[8]+1873313359&4294967295,v=y+(T<<6&4294967295|T>>>26),T=A+(y^(v|~S))+E[15]+4264355552&4294967295,A=v+(T<<10&4294967295|T>>>22),T=S+(v^(A|~y))+E[6]+2734768916&4294967295,S=A+(T<<15&4294967295|T>>>17),T=y+(A^(S|~v))+E[13]+1309151649&4294967295,y=S+(T<<21&4294967295|T>>>11),T=v+(S^(y|~A))+E[4]+4149444226&4294967295,v=y+(T<<6&4294967295|T>>>26),T=A+(y^(v|~S))+E[11]+3174756917&4294967295,A=v+(T<<10&4294967295|T>>>22),T=S+(v^(A|~y))+E[2]+718787259&4294967295,S=A+(T<<15&4294967295|T>>>17),T=y+(A^(S|~v))+E[9]+3951481745&4294967295,I.g[0]=I.g[0]+v&4294967295,I.g[1]=I.g[1]+(S+(T<<21&4294967295|T>>>11))&4294967295,I.g[2]=I.g[2]+S&4294967295,I.g[3]=I.g[3]+A&4294967295}r.prototype.u=function(I,v){v===void 0&&(v=I.length);for(var y=v-this.blockSize,E=this.B,S=this.h,A=0;A<v;){if(S==0)for(;A<=y;)s(this,I,A),A+=this.blockSize;if(typeof I=="string"){for(;A<v;)if(E[S++]=I.charCodeAt(A++),S==this.blockSize){s(this,E),S=0;break}}else for(;A<v;)if(E[S++]=I[A++],S==this.blockSize){s(this,E),S=0;break}}this.h=S,this.o+=v},r.prototype.v=function(){var I=Array((56>this.h?this.blockSize:2*this.blockSize)-this.h);I[0]=128;for(var v=1;v<I.length-8;++v)I[v]=0;var y=8*this.o;for(v=I.length-8;v<I.length;++v)I[v]=y&255,y/=256;for(this.u(I),I=Array(16),v=y=0;4>v;++v)for(var E=0;32>E;E+=8)I[y++]=this.g[v]>>>E&255;return I};function i(I,v){var y=c;return Object.prototype.hasOwnProperty.call(y,I)?y[I]:y[I]=v(I)}function o(I,v){this.h=v;for(var y=[],E=!0,S=I.length-1;0<=S;S--){var A=I[S]|0;E&&A==v||(y[S]=A,E=!1)}this.g=y}var c={};function l(I){return-128<=I&&128>I?i(I,function(v){return new o([v|0],0>v?-1:0)}):new o([I|0],0>I?-1:0)}function u(I){if(isNaN(I)||!isFinite(I))return d;if(0>I)return O(u(-I));for(var v=[],y=1,E=0;I>=y;E++)v[E]=I/y|0,y*=4294967296;return new o(v,0)}function h(I,v){if(I.length==0)throw Error("number format error: empty string");if(v=v||10,2>v||36<v)throw Error("radix out of range: "+v);if(I.charAt(0)=="-")return O(h(I.substring(1),v));if(0<=I.indexOf("-"))throw Error('number format error: interior "-" character');for(var y=u(Math.pow(v,8)),E=d,S=0;S<I.length;S+=8){var A=Math.min(8,I.length-S),T=parseInt(I.substring(S,S+A),v);8>A?(A=u(Math.pow(v,A)),E=E.j(A).add(u(T))):(E=E.j(y),E=E.add(u(T)))}return E}var d=l(0),g=l(1),m=l(16777216);t=o.prototype,t.m=function(){if(k(this))return-O(this).m();for(var I=0,v=1,y=0;y<this.g.length;y++){var E=this.i(y);I+=(0<=E?E:4294967296+E)*v,v*=4294967296}return I},t.toString=function(I){if(I=I||10,2>I||36<I)throw Error("radix out of range: "+I);if(P(this))return"0";if(k(this))return"-"+O(this).toString(I);for(var v=u(Math.pow(I,6)),y=this,E="";;){var S=C(y,v).g;y=V(y,S.j(v));var A=((0<y.g.length?y.g[0]:y.h)>>>0).toString(I);if(y=S,P(y))return A+E;for(;6>A.length;)A="0"+A;E=A+E}},t.i=function(I){return 0>I?0:I<this.g.length?this.g[I]:this.h};function P(I){if(I.h!=0)return!1;for(var v=0;v<I.g.length;v++)if(I.g[v]!=0)return!1;return!0}function k(I){return I.h==-1}t.l=function(I){return I=V(this,I),k(I)?-1:P(I)?0:1};function O(I){for(var v=I.g.length,y=[],E=0;E<v;E++)y[E]=~I.g[E];return new o(y,~I.h).add(g)}t.abs=function(){return k(this)?O(this):this},t.add=function(I){for(var v=Math.max(this.g.length,I.g.length),y=[],E=0,S=0;S<=v;S++){var A=E+(this.i(S)&65535)+(I.i(S)&65535),T=(A>>>16)+(this.i(S)>>>16)+(I.i(S)>>>16);E=T>>>16,A&=65535,T&=65535,y[S]=T<<16|A}return new o(y,y[y.length-1]&-2147483648?-1:0)};function V(I,v){return I.add(O(v))}t.j=function(I){if(P(this)||P(I))return d;if(k(this))return k(I)?O(this).j(O(I)):O(O(this).j(I));if(k(I))return O(this.j(O(I)));if(0>this.l(m)&&0>I.l(m))return u(this.m()*I.m());for(var v=this.g.length+I.g.length,y=[],E=0;E<2*v;E++)y[E]=0;for(E=0;E<this.g.length;E++)for(var S=0;S<I.g.length;S++){var A=this.i(E)>>>16,T=this.i(E)&65535,pe=I.i(S)>>>16,Ee=I.i(S)&65535;y[2*E+2*S]+=T*Ee,N(y,2*E+2*S),y[2*E+2*S+1]+=A*Ee,N(y,2*E+2*S+1),y[2*E+2*S+1]+=T*pe,N(y,2*E+2*S+1),y[2*E+2*S+2]+=A*pe,N(y,2*E+2*S+2)}for(E=0;E<v;E++)y[E]=y[2*E+1]<<16|y[2*E];for(E=v;E<2*v;E++)y[E]=0;return new o(y,0)};function N(I,v){for(;(I[v]&65535)!=I[v];)I[v+1]+=I[v]>>>16,I[v]&=65535,v++}function b(I,v){this.g=I,this.h=v}function C(I,v){if(P(v))throw Error("division by zero");if(P(I))return new b(d,d);if(k(I))return v=C(O(I),v),new b(O(v.g),O(v.h));if(k(v))return v=C(I,O(v)),new b(O(v.g),v.h);if(30<I.g.length){if(k(I)||k(v))throw Error("slowDivide_ only works with positive integers.");for(var y=g,E=v;0>=E.l(I);)y=x(y),E=x(E);var S=F(y,1),A=F(E,1);for(E=F(E,2),y=F(y,2);!P(E);){var T=A.add(E);0>=T.l(I)&&(S=S.add(y),A=T),E=F(E,1),y=F(y,1)}return v=V(I,S.j(v)),new b(S,v)}for(S=d;0<=I.l(v);){for(y=Math.max(1,Math.floor(I.m()/v.m())),E=Math.ceil(Math.log(y)/Math.LN2),E=48>=E?1:Math.pow(2,E-48),A=u(y),T=A.j(v);k(T)||0<T.l(I);)y-=E,A=u(y),T=A.j(v);P(A)&&(A=g),S=S.add(A),I=V(I,T)}return new b(S,I)}t.A=function(I){return C(this,I).h},t.and=function(I){for(var v=Math.max(this.g.length,I.g.length),y=[],E=0;E<v;E++)y[E]=this.i(E)&I.i(E);return new o(y,this.h&I.h)},t.or=function(I){for(var v=Math.max(this.g.length,I.g.length),y=[],E=0;E<v;E++)y[E]=this.i(E)|I.i(E);return new o(y,this.h|I.h)},t.xor=function(I){for(var v=Math.max(this.g.length,I.g.length),y=[],E=0;E<v;E++)y[E]=this.i(E)^I.i(E);return new o(y,this.h^I.h)};function x(I){for(var v=I.g.length+1,y=[],E=0;E<v;E++)y[E]=I.i(E)<<1|I.i(E-1)>>>31;return new o(y,I.h)}function F(I,v){var y=v>>5;v%=32;for(var E=I.g.length-y,S=[],A=0;A<E;A++)S[A]=0<v?I.i(A+y)>>>v|I.i(A+y+1)<<32-v:I.i(A+y);return new o(S,I.h)}r.prototype.digest=r.prototype.v,r.prototype.reset=r.prototype.s,r.prototype.update=r.prototype.u,Ty=r,o.prototype.add=o.prototype.add,o.prototype.multiply=o.prototype.j,o.prototype.modulo=o.prototype.A,o.prototype.compare=o.prototype.l,o.prototype.toNumber=o.prototype.m,o.prototype.toString=o.prototype.toString,o.prototype.getBits=o.prototype.i,o.fromNumber=u,o.fromString=h,Mr=o}).apply(typeof Cp<"u"?Cp:typeof self<"u"?self:typeof window<"u"?window:{});var qo=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{};/** @license
Copyright The Closure Library Authors.
SPDX-License-Identifier: Apache-2.0
*/var wy,Iy,gi,by,ra,Yl,Ay,Ry,Sy;(function(){var t,e=typeof Object.defineProperties=="function"?Object.defineProperty:function(a,f,p){return a==Array.prototype||a==Object.prototype||(a[f]=p.value),a};function n(a){a=[typeof globalThis=="object"&&globalThis,a,typeof window=="object"&&window,typeof self=="object"&&self,typeof qo=="object"&&qo];for(var f=0;f<a.length;++f){var p=a[f];if(p&&p.Math==Math)return p}throw Error("Cannot find global object")}var r=n(this);function s(a,f){if(f)e:{var p=r;a=a.split(".");for(var _=0;_<a.length-1;_++){var D=a[_];if(!(D in p))break e;p=p[D]}a=a[a.length-1],_=p[a],f=f(_),f!=_&&f!=null&&e(p,a,{configurable:!0,writable:!0,value:f})}}function i(a,f){a instanceof String&&(a+="");var p=0,_=!1,D={next:function(){if(!_&&p<a.length){var L=p++;return{value:f(L,a[L]),done:!1}}return _=!0,{done:!0,value:void 0}}};return D[Symbol.iterator]=function(){return D},D}s("Array.prototype.values",function(a){return a||function(){return i(this,function(f,p){return p})}});/** @license

 Copyright The Closure Library Authors.
 SPDX-License-Identifier: Apache-2.0
*/var o=o||{},c=this||self;function l(a){var f=typeof a;return f=f!="object"?f:a?Array.isArray(a)?"array":f:"null",f=="array"||f=="object"&&typeof a.length=="number"}function u(a){var f=typeof a;return f=="object"&&a!=null||f=="function"}function h(a,f,p){return a.call.apply(a.bind,arguments)}function d(a,f,p){if(!a)throw Error();if(2<arguments.length){var _=Array.prototype.slice.call(arguments,2);return function(){var D=Array.prototype.slice.call(arguments);return Array.prototype.unshift.apply(D,_),a.apply(f,D)}}return function(){return a.apply(f,arguments)}}function g(a,f,p){return g=Function.prototype.bind&&Function.prototype.bind.toString().indexOf("native code")!=-1?h:d,g.apply(null,arguments)}function m(a,f){var p=Array.prototype.slice.call(arguments,1);return function(){var _=p.slice();return _.push.apply(_,arguments),a.apply(this,_)}}function P(a,f){function p(){}p.prototype=f.prototype,a.aa=f.prototype,a.prototype=new p,a.prototype.constructor=a,a.Qb=function(_,D,L){for(var G=Array(arguments.length-2),Oe=2;Oe<arguments.length;Oe++)G[Oe-2]=arguments[Oe];return f.prototype[D].apply(_,G)}}function k(a){const f=a.length;if(0<f){const p=Array(f);for(let _=0;_<f;_++)p[_]=a[_];return p}return[]}function O(a,f){for(let p=1;p<arguments.length;p++){const _=arguments[p];if(l(_)){const D=a.length||0,L=_.length||0;a.length=D+L;for(let G=0;G<L;G++)a[D+G]=_[G]}else a.push(_)}}class V{constructor(f,p){this.i=f,this.j=p,this.h=0,this.g=null}get(){let f;return 0<this.h?(this.h--,f=this.g,this.g=f.next,f.next=null):f=this.i(),f}}function N(a){return/^[\s\xa0]*$/.test(a)}function b(){var a=c.navigator;return a&&(a=a.userAgent)?a:""}function C(a){return C[" "](a),a}C[" "]=function(){};var x=b().indexOf("Gecko")!=-1&&!(b().toLowerCase().indexOf("webkit")!=-1&&b().indexOf("Edge")==-1)&&!(b().indexOf("Trident")!=-1||b().indexOf("MSIE")!=-1)&&b().indexOf("Edge")==-1;function F(a,f,p){for(const _ in a)f.call(p,a[_],_,a)}function I(a,f){for(const p in a)f.call(void 0,a[p],p,a)}function v(a){const f={};for(const p in a)f[p]=a[p];return f}const y="constructor hasOwnProperty isPrototypeOf propertyIsEnumerable toLocaleString toString valueOf".split(" ");function E(a,f){let p,_;for(let D=1;D<arguments.length;D++){_=arguments[D];for(p in _)a[p]=_[p];for(let L=0;L<y.length;L++)p=y[L],Object.prototype.hasOwnProperty.call(_,p)&&(a[p]=_[p])}}function S(a){var f=1;a=a.split(":");const p=[];for(;0<f&&a.length;)p.push(a.shift()),f--;return a.length&&p.push(a.join(":")),p}function A(a){c.setTimeout(()=>{throw a},0)}function T(){var a=Fe;let f=null;return a.g&&(f=a.g,a.g=a.g.next,a.g||(a.h=null),f.next=null),f}class pe{constructor(){this.h=this.g=null}add(f,p){const _=Ee.get();_.set(f,p),this.h?this.h.next=_:this.g=_,this.h=_}}var Ee=new V(()=>new Z,a=>a.reset());class Z{constructor(){this.next=this.g=this.h=null}set(f,p){this.h=f,this.g=p,this.next=null}reset(){this.next=this.g=this.h=null}}let ue,re=!1,Fe=new pe,$t=()=>{const a=c.Promise.resolve(void 0);ue=()=>{a.then(Nt)}};var Nt=()=>{for(var a;a=T();){try{a.h.call(a.g)}catch(p){A(p)}var f=Ee;f.j(a),100>f.h&&(f.h++,a.next=f.g,f.g=a)}re=!1};function Ue(){this.s=this.s,this.C=this.C}Ue.prototype.s=!1,Ue.prototype.ma=function(){this.s||(this.s=!0,this.N())},Ue.prototype.N=function(){if(this.C)for(;this.C.length;)this.C.shift()()};function Be(a,f){this.type=a,this.g=this.target=f,this.defaultPrevented=!1}Be.prototype.h=function(){this.defaultPrevented=!0};var Mn=function(){if(!c.addEventListener||!Object.defineProperty)return!1;var a=!1,f=Object.defineProperty({},"passive",{get:function(){a=!0}});try{const p=()=>{};c.addEventListener("test",p,f),c.removeEventListener("test",p,f)}catch{}return a}();function en(a,f){if(Be.call(this,a?a.type:""),this.relatedTarget=this.g=this.target=null,this.button=this.screenY=this.screenX=this.clientY=this.clientX=0,this.key="",this.metaKey=this.shiftKey=this.altKey=this.ctrlKey=!1,this.state=null,this.pointerId=0,this.pointerType="",this.i=null,a){var p=this.type=a.type,_=a.changedTouches&&a.changedTouches.length?a.changedTouches[0]:null;if(this.target=a.target||a.srcElement,this.g=f,f=a.relatedTarget){if(x){e:{try{C(f.nodeName);var D=!0;break e}catch{}D=!1}D||(f=null)}}else p=="mouseover"?f=a.fromElement:p=="mouseout"&&(f=a.toElement);this.relatedTarget=f,_?(this.clientX=_.clientX!==void 0?_.clientX:_.pageX,this.clientY=_.clientY!==void 0?_.clientY:_.pageY,this.screenX=_.screenX||0,this.screenY=_.screenY||0):(this.clientX=a.clientX!==void 0?a.clientX:a.pageX,this.clientY=a.clientY!==void 0?a.clientY:a.pageY,this.screenX=a.screenX||0,this.screenY=a.screenY||0),this.button=a.button,this.key=a.key||"",this.ctrlKey=a.ctrlKey,this.altKey=a.altKey,this.shiftKey=a.shiftKey,this.metaKey=a.metaKey,this.pointerId=a.pointerId||0,this.pointerType=typeof a.pointerType=="string"?a.pointerType:bt[a.pointerType]||"",this.state=a.state,this.i=a,a.defaultPrevented&&en.aa.h.call(this)}}P(en,Be);var bt={2:"touch",3:"pen",4:"mouse"};en.prototype.h=function(){en.aa.h.call(this);var a=this.i;a.preventDefault?a.preventDefault():a.returnValue=!1};var B="closure_listenable_"+(1e6*Math.random()|0),Y=0;function J(a,f,p,_,D){this.listener=a,this.proxy=null,this.src=f,this.type=p,this.capture=!!_,this.ha=D,this.key=++Y,this.da=this.fa=!1}function ee(a){a.da=!0,a.listener=null,a.proxy=null,a.src=null,a.ha=null}function ye(a){this.src=a,this.g={},this.h=0}ye.prototype.add=function(a,f,p,_,D){var L=a.toString();a=this.g[L],a||(a=this.g[L]=[],this.h++);var G=w(a,f,_,D);return-1<G?(f=a[G],p||(f.fa=!1)):(f=new J(f,this.src,L,!!_,D),f.fa=p,a.push(f)),f};function Ce(a,f){var p=f.type;if(p in a.g){var _=a.g[p],D=Array.prototype.indexOf.call(_,f,void 0),L;(L=0<=D)&&Array.prototype.splice.call(_,D,1),L&&(ee(f),a.g[p].length==0&&(delete a.g[p],a.h--))}}function w(a,f,p,_){for(var D=0;D<a.length;++D){var L=a[D];if(!L.da&&L.listener==f&&L.capture==!!p&&L.ha==_)return D}return-1}var R="closure_lm_"+(1e6*Math.random()|0),M={};function j(a,f,p,_,D){if(Array.isArray(f)){for(var L=0;L<f.length;L++)j(a,f[L],p,_,D);return null}return p=se(p),a&&a[B]?a.K(f,p,u(_)?!!_.capture:!!_,D):U(a,f,p,!1,_,D)}function U(a,f,p,_,D,L){if(!f)throw Error("Invalid event type");var G=u(D)?!!D.capture:!!D,Oe=oe(a);if(Oe||(a[R]=Oe=new ye(a)),p=Oe.add(f,p,_,G,L),p.proxy)return p;if(_=H(),p.proxy=_,_.src=a,_.listener=p,a.addEventListener)Mn||(D=G),D===void 0&&(D=!1),a.addEventListener(f.toString(),_,D);else if(a.attachEvent)a.attachEvent(K(f.toString()),_);else if(a.addListener&&a.removeListener)a.addListener(_);else throw Error("addEventListener and attachEvent are unavailable.");return p}function H(){function a(p){return f.call(a.src,a.listener,p)}const f=q;return a}function Q(a,f,p,_,D){if(Array.isArray(f))for(var L=0;L<f.length;L++)Q(a,f[L],p,_,D);else _=u(_)?!!_.capture:!!_,p=se(p),a&&a[B]?(a=a.i,f=String(f).toString(),f in a.g&&(L=a.g[f],p=w(L,p,_,D),-1<p&&(ee(L[p]),Array.prototype.splice.call(L,p,1),L.length==0&&(delete a.g[f],a.h--)))):a&&(a=oe(a))&&(f=a.g[f.toString()],a=-1,f&&(a=w(f,p,_,D)),(p=-1<a?f[a]:null)&&z(p))}function z(a){if(typeof a!="number"&&a&&!a.da){var f=a.src;if(f&&f[B])Ce(f.i,a);else{var p=a.type,_=a.proxy;f.removeEventListener?f.removeEventListener(p,_,a.capture):f.detachEvent?f.detachEvent(K(p),_):f.addListener&&f.removeListener&&f.removeListener(_),(p=oe(f))?(Ce(p,a),p.h==0&&(p.src=null,f[R]=null)):ee(a)}}}function K(a){return a in M?M[a]:M[a]="on"+a}function q(a,f){if(a.da)a=!0;else{f=new en(f,this);var p=a.listener,_=a.ha||a.src;a.fa&&z(a),a=p.call(_,f)}return a}function oe(a){return a=a[R],a instanceof ye?a:null}var X="__closure_events_fn_"+(1e9*Math.random()>>>0);function se(a){return typeof a=="function"?a:(a[X]||(a[X]=function(f){return a.handleEvent(f)}),a[X])}function te(){Ue.call(this),this.i=new ye(this),this.M=this,this.F=null}P(te,Ue),te.prototype[B]=!0,te.prototype.removeEventListener=function(a,f,p,_){Q(this,a,f,p,_)};function le(a,f){var p,_=a.F;if(_)for(p=[];_;_=_.F)p.push(_);if(a=a.M,_=f.type||f,typeof f=="string")f=new Be(f,a);else if(f instanceof Be)f.target=f.target||a;else{var D=f;f=new Be(_,a),E(f,D)}if(D=!0,p)for(var L=p.length-1;0<=L;L--){var G=f.g=p[L];D=Re(G,_,!0,f)&&D}if(G=f.g=a,D=Re(G,_,!0,f)&&D,D=Re(G,_,!1,f)&&D,p)for(L=0;L<p.length;L++)G=f.g=p[L],D=Re(G,_,!1,f)&&D}te.prototype.N=function(){if(te.aa.N.call(this),this.i){var a=this.i,f;for(f in a.g){for(var p=a.g[f],_=0;_<p.length;_++)ee(p[_]);delete a.g[f],a.h--}}this.F=null},te.prototype.K=function(a,f,p,_){return this.i.add(String(a),f,!1,p,_)},te.prototype.L=function(a,f,p,_){return this.i.add(String(a),f,!0,p,_)};function Re(a,f,p,_){if(f=a.i.g[String(f)],!f)return!0;f=f.concat();for(var D=!0,L=0;L<f.length;++L){var G=f[L];if(G&&!G.da&&G.capture==p){var Oe=G.listener,rt=G.ha||G.src;G.fa&&Ce(a.i,G),D=Oe.call(rt,_)!==!1&&D}}return D&&!_.defaultPrevented}function we(a,f,p){if(typeof a=="function")p&&(a=g(a,p));else if(a&&typeof a.handleEvent=="function")a=g(a.handleEvent,a);else throw Error("Invalid listener argument");return 2147483647<Number(f)?-1:c.setTimeout(a,f||0)}function lt(a){a.g=we(()=>{a.g=null,a.i&&(a.i=!1,lt(a))},a.l);const f=a.h;a.h=null,a.m.apply(null,f)}class Ye extends Ue{constructor(f,p){super(),this.m=f,this.l=p,this.h=null,this.i=!1,this.g=null}j(f){this.h=arguments,this.g?this.i=!0:lt(this)}N(){super.N(),this.g&&(c.clearTimeout(this.g),this.g=null,this.i=!1,this.h=null)}}function nt(a){Ue.call(this),this.h=a,this.g={}}P(nt,Ue);var ut=[];function Ln(a){F(a.g,function(f,p){this.g.hasOwnProperty(p)&&z(f)},a),a.g={}}nt.prototype.N=function(){nt.aa.N.call(this),Ln(this)},nt.prototype.handleEvent=function(){throw Error("EventHandler.handleEvent not implemented")};var Qr=c.JSON.stringify,vt=c.JSON.parse,Dt=class{stringify(a){return c.JSON.stringify(a,void 0)}parse(a){return c.JSON.parse(a,void 0)}};function Jr(){}Jr.prototype.h=null;function Vh(a){return a.h||(a.h=a.i())}function xh(){}var Gs={OPEN:"a",kb:"b",Ja:"c",wb:"d"};function Ec(){Be.call(this,"d")}P(Ec,Be);function Tc(){Be.call(this,"c")}P(Tc,Be);var mr={},Mh=null;function go(){return Mh=Mh||new te}mr.La="serverreachability";function Lh(a){Be.call(this,mr.La,a)}P(Lh,Be);function Qs(a){const f=go();le(f,new Lh(f))}mr.STAT_EVENT="statevent";function Fh(a,f){Be.call(this,mr.STAT_EVENT,a),this.stat=f}P(Fh,Be);function Et(a){const f=go();le(f,new Fh(f,a))}mr.Ma="timingevent";function Uh(a,f){Be.call(this,mr.Ma,a),this.size=f}P(Uh,Be);function Js(a,f){if(typeof a!="function")throw Error("Fn must not be null and must be a function");return c.setTimeout(function(){a()},f)}function Xs(){this.g=!0}Xs.prototype.xa=function(){this.g=!1};function Bv(a,f,p,_,D,L){a.info(function(){if(a.g)if(L)for(var G="",Oe=L.split("&"),rt=0;rt<Oe.length;rt++){var Ie=Oe[rt].split("=");if(1<Ie.length){var ht=Ie[0];Ie=Ie[1];var ft=ht.split("_");G=2<=ft.length&&ft[1]=="type"?G+(ht+"="+Ie+"&"):G+(ht+"=redacted&")}}else G=null;else G=L;return"XMLHTTP REQ ("+_+") [attempt "+D+"]: "+f+`
`+p+`
`+G})}function jv(a,f,p,_,D,L,G){a.info(function(){return"XMLHTTP RESP ("+_+") [ attempt "+D+"]: "+f+`
`+p+`
`+L+" "+G})}function Xr(a,f,p,_){a.info(function(){return"XMLHTTP TEXT ("+f+"): "+Hv(a,p)+(_?" "+_:"")})}function $v(a,f){a.info(function(){return"TIMEOUT: "+f})}Xs.prototype.info=function(){};function Hv(a,f){if(!a.g)return f;if(!f)return null;try{var p=JSON.parse(f);if(p){for(a=0;a<p.length;a++)if(Array.isArray(p[a])){var _=p[a];if(!(2>_.length)){var D=_[1];if(Array.isArray(D)&&!(1>D.length)){var L=D[0];if(L!="noop"&&L!="stop"&&L!="close")for(var G=1;G<D.length;G++)D[G]=""}}}}return Qr(p)}catch{return f}}var mo={NO_ERROR:0,gb:1,tb:2,sb:3,nb:4,rb:5,ub:6,Ia:7,TIMEOUT:8,xb:9},Bh={lb:"complete",Hb:"success",Ja:"error",Ia:"abort",zb:"ready",Ab:"readystatechange",TIMEOUT:"timeout",vb:"incrementaldata",yb:"progress",ob:"downloadprogress",Pb:"uploadprogress"},wc;function _o(){}P(_o,Jr),_o.prototype.g=function(){return new XMLHttpRequest},_o.prototype.i=function(){return{}},wc=new _o;function Fn(a,f,p,_){this.j=a,this.i=f,this.l=p,this.R=_||1,this.U=new nt(this),this.I=45e3,this.H=null,this.o=!1,this.m=this.A=this.v=this.L=this.F=this.S=this.B=null,this.D=[],this.g=null,this.C=0,this.s=this.u=null,this.X=-1,this.J=!1,this.O=0,this.M=null,this.W=this.K=this.T=this.P=!1,this.h=new jh}function jh(){this.i=null,this.g="",this.h=!1}var $h={},Ic={};function bc(a,f,p){a.L=1,a.v=To(gn(f)),a.m=p,a.P=!0,Hh(a,null)}function Hh(a,f){a.F=Date.now(),yo(a),a.A=gn(a.v);var p=a.A,_=a.R;Array.isArray(_)||(_=[String(_)]),rf(p.i,"t",_),a.C=0,p=a.j.J,a.h=new jh,a.g=wf(a.j,p?f:null,!a.m),0<a.O&&(a.M=new Ye(g(a.Y,a,a.g),a.O)),f=a.U,p=a.g,_=a.ca;var D="readystatechange";Array.isArray(D)||(D&&(ut[0]=D.toString()),D=ut);for(var L=0;L<D.length;L++){var G=j(p,D[L],_||f.handleEvent,!1,f.h||f);if(!G)break;f.g[G.key]=G}f=a.H?v(a.H):{},a.m?(a.u||(a.u="POST"),f["Content-Type"]="application/x-www-form-urlencoded",a.g.ea(a.A,a.u,a.m,f)):(a.u="GET",a.g.ea(a.A,a.u,null,f)),Qs(),Bv(a.i,a.u,a.A,a.l,a.R,a.m)}Fn.prototype.ca=function(a){a=a.target;const f=this.M;f&&mn(a)==3?f.j():this.Y(a)},Fn.prototype.Y=function(a){try{if(a==this.g)e:{const ft=mn(this.g);var f=this.g.Ba();const es=this.g.Z();if(!(3>ft)&&(ft!=3||this.g&&(this.h.h||this.g.oa()||hf(this.g)))){this.J||ft!=4||f==7||(f==8||0>=es?Qs(3):Qs(2)),Ac(this);var p=this.g.Z();this.X=p;t:if(qh(this)){var _=hf(this.g);a="";var D=_.length,L=mn(this.g)==4;if(!this.h.i){if(typeof TextDecoder>"u"){_r(this),Ys(this);var G="";break t}this.h.i=new c.TextDecoder}for(f=0;f<D;f++)this.h.h=!0,a+=this.h.i.decode(_[f],{stream:!(L&&f==D-1)});_.length=0,this.h.g+=a,this.C=0,G=this.h.g}else G=this.g.oa();if(this.o=p==200,jv(this.i,this.u,this.A,this.l,this.R,ft,p),this.o){if(this.T&&!this.K){t:{if(this.g){var Oe,rt=this.g;if((Oe=rt.g?rt.g.getResponseHeader("X-HTTP-Initial-Response"):null)&&!N(Oe)){var Ie=Oe;break t}}Ie=null}if(p=Ie)Xr(this.i,this.l,p,"Initial handshake response via X-HTTP-Initial-Response"),this.K=!0,Rc(this,p);else{this.o=!1,this.s=3,Et(12),_r(this),Ys(this);break e}}if(this.P){p=!0;let Ht;for(;!this.J&&this.C<G.length;)if(Ht=qv(this,G),Ht==Ic){ft==4&&(this.s=4,Et(14),p=!1),Xr(this.i,this.l,null,"[Incomplete Response]");break}else if(Ht==$h){this.s=4,Et(15),Xr(this.i,this.l,G,"[Invalid Chunk]"),p=!1;break}else Xr(this.i,this.l,Ht,null),Rc(this,Ht);if(qh(this)&&this.C!=0&&(this.h.g=this.h.g.slice(this.C),this.C=0),ft!=4||G.length!=0||this.h.h||(this.s=1,Et(16),p=!1),this.o=this.o&&p,!p)Xr(this.i,this.l,G,"[Invalid Chunked Response]"),_r(this),Ys(this);else if(0<G.length&&!this.W){this.W=!0;var ht=this.j;ht.g==this&&ht.ba&&!ht.M&&(ht.j.info("Great, no buffering proxy detected. Bytes received: "+G.length),Nc(ht),ht.M=!0,Et(11))}}else Xr(this.i,this.l,G,null),Rc(this,G);ft==4&&_r(this),this.o&&!this.J&&(ft==4?yf(this.j,this):(this.o=!1,yo(this)))}else aE(this.g),p==400&&0<G.indexOf("Unknown SID")?(this.s=3,Et(12)):(this.s=0,Et(13)),_r(this),Ys(this)}}}catch{}finally{}};function qh(a){return a.g?a.u=="GET"&&a.L!=2&&a.j.Ca:!1}function qv(a,f){var p=a.C,_=f.indexOf(`
`,p);return _==-1?Ic:(p=Number(f.substring(p,_)),isNaN(p)?$h:(_+=1,_+p>f.length?Ic:(f=f.slice(_,_+p),a.C=_+p,f)))}Fn.prototype.cancel=function(){this.J=!0,_r(this)};function yo(a){a.S=Date.now()+a.I,Wh(a,a.I)}function Wh(a,f){if(a.B!=null)throw Error("WatchDog timer not null");a.B=Js(g(a.ba,a),f)}function Ac(a){a.B&&(c.clearTimeout(a.B),a.B=null)}Fn.prototype.ba=function(){this.B=null;const a=Date.now();0<=a-this.S?($v(this.i,this.A),this.L!=2&&(Qs(),Et(17)),_r(this),this.s=2,Ys(this)):Wh(this,this.S-a)};function Ys(a){a.j.G==0||a.J||yf(a.j,a)}function _r(a){Ac(a);var f=a.M;f&&typeof f.ma=="function"&&f.ma(),a.M=null,Ln(a.U),a.g&&(f=a.g,a.g=null,f.abort(),f.ma())}function Rc(a,f){try{var p=a.j;if(p.G!=0&&(p.g==a||Sc(p.h,a))){if(!a.K&&Sc(p.h,a)&&p.G==3){try{var _=p.Da.g.parse(f)}catch{_=null}if(Array.isArray(_)&&_.length==3){var D=_;if(D[0]==0){e:if(!p.u){if(p.g)if(p.g.F+3e3<a.F)Ro(p),bo(p);else break e;Oc(p),Et(18)}}else p.za=D[1],0<p.za-p.T&&37500>D[2]&&p.F&&p.v==0&&!p.C&&(p.C=Js(g(p.Za,p),6e3));if(1>=Gh(p.h)&&p.ca){try{p.ca()}catch{}p.ca=void 0}}else vr(p,11)}else if((a.K||p.g==a)&&Ro(p),!N(f))for(D=p.Da.g.parse(f),f=0;f<D.length;f++){let Ie=D[f];if(p.T=Ie[0],Ie=Ie[1],p.G==2)if(Ie[0]=="c"){p.K=Ie[1],p.ia=Ie[2];const ht=Ie[3];ht!=null&&(p.la=ht,p.j.info("VER="+p.la));const ft=Ie[4];ft!=null&&(p.Aa=ft,p.j.info("SVER="+p.Aa));const es=Ie[5];es!=null&&typeof es=="number"&&0<es&&(_=1.5*es,p.L=_,p.j.info("backChannelRequestTimeoutMs_="+_)),_=p;const Ht=a.g;if(Ht){const Po=Ht.g?Ht.g.getResponseHeader("X-Client-Wire-Protocol"):null;if(Po){var L=_.h;L.g||Po.indexOf("spdy")==-1&&Po.indexOf("quic")==-1&&Po.indexOf("h2")==-1||(L.j=L.l,L.g=new Set,L.h&&(Pc(L,L.h),L.h=null))}if(_.D){const Dc=Ht.g?Ht.g.getResponseHeader("X-HTTP-Session-Id"):null;Dc&&(_.ya=Dc,xe(_.I,_.D,Dc))}}p.G=3,p.l&&p.l.ua(),p.ba&&(p.R=Date.now()-a.F,p.j.info("Handshake RTT: "+p.R+"ms")),_=p;var G=a;if(_.qa=Tf(_,_.J?_.ia:null,_.W),G.K){Qh(_.h,G);var Oe=G,rt=_.L;rt&&(Oe.I=rt),Oe.B&&(Ac(Oe),yo(Oe)),_.g=G}else mf(_);0<p.i.length&&Ao(p)}else Ie[0]!="stop"&&Ie[0]!="close"||vr(p,7);else p.G==3&&(Ie[0]=="stop"||Ie[0]=="close"?Ie[0]=="stop"?vr(p,7):kc(p):Ie[0]!="noop"&&p.l&&p.l.ta(Ie),p.v=0)}}Qs(4)}catch{}}var Wv=class{constructor(a,f){this.g=a,this.map=f}};function Kh(a){this.l=a||10,c.PerformanceNavigationTiming?(a=c.performance.getEntriesByType("navigation"),a=0<a.length&&(a[0].nextHopProtocol=="hq"||a[0].nextHopProtocol=="h2")):a=!!(c.chrome&&c.chrome.loadTimes&&c.chrome.loadTimes()&&c.chrome.loadTimes().wasFetchedViaSpdy),this.j=a?this.l:1,this.g=null,1<this.j&&(this.g=new Set),this.h=null,this.i=[]}function zh(a){return a.h?!0:a.g?a.g.size>=a.j:!1}function Gh(a){return a.h?1:a.g?a.g.size:0}function Sc(a,f){return a.h?a.h==f:a.g?a.g.has(f):!1}function Pc(a,f){a.g?a.g.add(f):a.h=f}function Qh(a,f){a.h&&a.h==f?a.h=null:a.g&&a.g.has(f)&&a.g.delete(f)}Kh.prototype.cancel=function(){if(this.i=Jh(this),this.h)this.h.cancel(),this.h=null;else if(this.g&&this.g.size!==0){for(const a of this.g.values())a.cancel();this.g.clear()}};function Jh(a){if(a.h!=null)return a.i.concat(a.h.D);if(a.g!=null&&a.g.size!==0){let f=a.i;for(const p of a.g.values())f=f.concat(p.D);return f}return k(a.i)}function Kv(a){if(a.V&&typeof a.V=="function")return a.V();if(typeof Map<"u"&&a instanceof Map||typeof Set<"u"&&a instanceof Set)return Array.from(a.values());if(typeof a=="string")return a.split("");if(l(a)){for(var f=[],p=a.length,_=0;_<p;_++)f.push(a[_]);return f}f=[],p=0;for(_ in a)f[p++]=a[_];return f}function zv(a){if(a.na&&typeof a.na=="function")return a.na();if(!a.V||typeof a.V!="function"){if(typeof Map<"u"&&a instanceof Map)return Array.from(a.keys());if(!(typeof Set<"u"&&a instanceof Set)){if(l(a)||typeof a=="string"){var f=[];a=a.length;for(var p=0;p<a;p++)f.push(p);return f}f=[],p=0;for(const _ in a)f[p++]=_;return f}}}function Xh(a,f){if(a.forEach&&typeof a.forEach=="function")a.forEach(f,void 0);else if(l(a)||typeof a=="string")Array.prototype.forEach.call(a,f,void 0);else for(var p=zv(a),_=Kv(a),D=_.length,L=0;L<D;L++)f.call(void 0,_[L],p&&p[L],a)}var Yh=RegExp("^(?:([^:/?#.]+):)?(?://(?:([^\\\\/?#]*)@)?([^\\\\/?#]*?)(?::([0-9]+))?(?=[\\\\/?#]|$))?([^?#]+)?(?:\\?([^#]*))?(?:#([\\s\\S]*))?$");function Gv(a,f){if(a){a=a.split("&");for(var p=0;p<a.length;p++){var _=a[p].indexOf("="),D=null;if(0<=_){var L=a[p].substring(0,_);D=a[p].substring(_+1)}else L=a[p];f(L,D?decodeURIComponent(D.replace(/\+/g," ")):"")}}}function yr(a){if(this.g=this.o=this.j="",this.s=null,this.m=this.l="",this.h=!1,a instanceof yr){this.h=a.h,vo(this,a.j),this.o=a.o,this.g=a.g,Eo(this,a.s),this.l=a.l;var f=a.i,p=new ti;p.i=f.i,f.g&&(p.g=new Map(f.g),p.h=f.h),Zh(this,p),this.m=a.m}else a&&(f=String(a).match(Yh))?(this.h=!1,vo(this,f[1]||"",!0),this.o=Zs(f[2]||""),this.g=Zs(f[3]||"",!0),Eo(this,f[4]),this.l=Zs(f[5]||"",!0),Zh(this,f[6]||"",!0),this.m=Zs(f[7]||"")):(this.h=!1,this.i=new ti(null,this.h))}yr.prototype.toString=function(){var a=[],f=this.j;f&&a.push(ei(f,ef,!0),":");var p=this.g;return(p||f=="file")&&(a.push("//"),(f=this.o)&&a.push(ei(f,ef,!0),"@"),a.push(encodeURIComponent(String(p)).replace(/%25([0-9a-fA-F]{2})/g,"%$1")),p=this.s,p!=null&&a.push(":",String(p))),(p=this.l)&&(this.g&&p.charAt(0)!="/"&&a.push("/"),a.push(ei(p,p.charAt(0)=="/"?Xv:Jv,!0))),(p=this.i.toString())&&a.push("?",p),(p=this.m)&&a.push("#",ei(p,Zv)),a.join("")};function gn(a){return new yr(a)}function vo(a,f,p){a.j=p?Zs(f,!0):f,a.j&&(a.j=a.j.replace(/:$/,""))}function Eo(a,f){if(f){if(f=Number(f),isNaN(f)||0>f)throw Error("Bad port number "+f);a.s=f}else a.s=null}function Zh(a,f,p){f instanceof ti?(a.i=f,eE(a.i,a.h)):(p||(f=ei(f,Yv)),a.i=new ti(f,a.h))}function xe(a,f,p){a.i.set(f,p)}function To(a){return xe(a,"zx",Math.floor(2147483648*Math.random()).toString(36)+Math.abs(Math.floor(2147483648*Math.random())^Date.now()).toString(36)),a}function Zs(a,f){return a?f?decodeURI(a.replace(/%25/g,"%2525")):decodeURIComponent(a):""}function ei(a,f,p){return typeof a=="string"?(a=encodeURI(a).replace(f,Qv),p&&(a=a.replace(/%25([0-9a-fA-F]{2})/g,"%$1")),a):null}function Qv(a){return a=a.charCodeAt(0),"%"+(a>>4&15).toString(16)+(a&15).toString(16)}var ef=/[#\/\?@]/g,Jv=/[#\?:]/g,Xv=/[#\?]/g,Yv=/[#\?@]/g,Zv=/#/g;function ti(a,f){this.h=this.g=null,this.i=a||null,this.j=!!f}function Un(a){a.g||(a.g=new Map,a.h=0,a.i&&Gv(a.i,function(f,p){a.add(decodeURIComponent(f.replace(/\+/g," ")),p)}))}t=ti.prototype,t.add=function(a,f){Un(this),this.i=null,a=Yr(this,a);var p=this.g.get(a);return p||this.g.set(a,p=[]),p.push(f),this.h+=1,this};function tf(a,f){Un(a),f=Yr(a,f),a.g.has(f)&&(a.i=null,a.h-=a.g.get(f).length,a.g.delete(f))}function nf(a,f){return Un(a),f=Yr(a,f),a.g.has(f)}t.forEach=function(a,f){Un(this),this.g.forEach(function(p,_){p.forEach(function(D){a.call(f,D,_,this)},this)},this)},t.na=function(){Un(this);const a=Array.from(this.g.values()),f=Array.from(this.g.keys()),p=[];for(let _=0;_<f.length;_++){const D=a[_];for(let L=0;L<D.length;L++)p.push(f[_])}return p},t.V=function(a){Un(this);let f=[];if(typeof a=="string")nf(this,a)&&(f=f.concat(this.g.get(Yr(this,a))));else{a=Array.from(this.g.values());for(let p=0;p<a.length;p++)f=f.concat(a[p])}return f},t.set=function(a,f){return Un(this),this.i=null,a=Yr(this,a),nf(this,a)&&(this.h-=this.g.get(a).length),this.g.set(a,[f]),this.h+=1,this},t.get=function(a,f){return a?(a=this.V(a),0<a.length?String(a[0]):f):f};function rf(a,f,p){tf(a,f),0<p.length&&(a.i=null,a.g.set(Yr(a,f),k(p)),a.h+=p.length)}t.toString=function(){if(this.i)return this.i;if(!this.g)return"";const a=[],f=Array.from(this.g.keys());for(var p=0;p<f.length;p++){var _=f[p];const L=encodeURIComponent(String(_)),G=this.V(_);for(_=0;_<G.length;_++){var D=L;G[_]!==""&&(D+="="+encodeURIComponent(String(G[_]))),a.push(D)}}return this.i=a.join("&")};function Yr(a,f){return f=String(f),a.j&&(f=f.toLowerCase()),f}function eE(a,f){f&&!a.j&&(Un(a),a.i=null,a.g.forEach(function(p,_){var D=_.toLowerCase();_!=D&&(tf(this,_),rf(this,D,p))},a)),a.j=f}function tE(a,f){const p=new Xs;if(c.Image){const _=new Image;_.onload=m(Bn,p,"TestLoadImage: loaded",!0,f,_),_.onerror=m(Bn,p,"TestLoadImage: error",!1,f,_),_.onabort=m(Bn,p,"TestLoadImage: abort",!1,f,_),_.ontimeout=m(Bn,p,"TestLoadImage: timeout",!1,f,_),c.setTimeout(function(){_.ontimeout&&_.ontimeout()},1e4),_.src=a}else f(!1)}function nE(a,f){const p=new Xs,_=new AbortController,D=setTimeout(()=>{_.abort(),Bn(p,"TestPingServer: timeout",!1,f)},1e4);fetch(a,{signal:_.signal}).then(L=>{clearTimeout(D),L.ok?Bn(p,"TestPingServer: ok",!0,f):Bn(p,"TestPingServer: server error",!1,f)}).catch(()=>{clearTimeout(D),Bn(p,"TestPingServer: error",!1,f)})}function Bn(a,f,p,_,D){try{D&&(D.onload=null,D.onerror=null,D.onabort=null,D.ontimeout=null),_(p)}catch{}}function rE(){this.g=new Dt}function sE(a,f,p){const _=p||"";try{Xh(a,function(D,L){let G=D;u(D)&&(G=Qr(D)),f.push(_+L+"="+encodeURIComponent(G))})}catch(D){throw f.push(_+"type="+encodeURIComponent("_badmap")),D}}function ni(a){this.l=a.Ub||null,this.j=a.eb||!1}P(ni,Jr),ni.prototype.g=function(){return new wo(this.l,this.j)},ni.prototype.i=function(a){return function(){return a}}({});function wo(a,f){te.call(this),this.D=a,this.o=f,this.m=void 0,this.status=this.readyState=0,this.responseType=this.responseText=this.response=this.statusText="",this.onreadystatechange=null,this.u=new Headers,this.h=null,this.B="GET",this.A="",this.g=!1,this.v=this.j=this.l=null}P(wo,te),t=wo.prototype,t.open=function(a,f){if(this.readyState!=0)throw this.abort(),Error("Error reopening a connection");this.B=a,this.A=f,this.readyState=1,si(this)},t.send=function(a){if(this.readyState!=1)throw this.abort(),Error("need to call open() first. ");this.g=!0;const f={headers:this.u,method:this.B,credentials:this.m,cache:void 0};a&&(f.body=a),(this.D||c).fetch(new Request(this.A,f)).then(this.Sa.bind(this),this.ga.bind(this))},t.abort=function(){this.response=this.responseText="",this.u=new Headers,this.status=0,this.j&&this.j.cancel("Request was aborted.").catch(()=>{}),1<=this.readyState&&this.g&&this.readyState!=4&&(this.g=!1,ri(this)),this.readyState=0},t.Sa=function(a){if(this.g&&(this.l=a,this.h||(this.status=this.l.status,this.statusText=this.l.statusText,this.h=a.headers,this.readyState=2,si(this)),this.g&&(this.readyState=3,si(this),this.g)))if(this.responseType==="arraybuffer")a.arrayBuffer().then(this.Qa.bind(this),this.ga.bind(this));else if(typeof c.ReadableStream<"u"&&"body"in a){if(this.j=a.body.getReader(),this.o){if(this.responseType)throw Error('responseType must be empty for "streamBinaryChunks" mode responses.');this.response=[]}else this.response=this.responseText="",this.v=new TextDecoder;sf(this)}else a.text().then(this.Ra.bind(this),this.ga.bind(this))};function sf(a){a.j.read().then(a.Pa.bind(a)).catch(a.ga.bind(a))}t.Pa=function(a){if(this.g){if(this.o&&a.value)this.response.push(a.value);else if(!this.o){var f=a.value?a.value:new Uint8Array(0);(f=this.v.decode(f,{stream:!a.done}))&&(this.response=this.responseText+=f)}a.done?ri(this):si(this),this.readyState==3&&sf(this)}},t.Ra=function(a){this.g&&(this.response=this.responseText=a,ri(this))},t.Qa=function(a){this.g&&(this.response=a,ri(this))},t.ga=function(){this.g&&ri(this)};function ri(a){a.readyState=4,a.l=null,a.j=null,a.v=null,si(a)}t.setRequestHeader=function(a,f){this.u.append(a,f)},t.getResponseHeader=function(a){return this.h&&this.h.get(a.toLowerCase())||""},t.getAllResponseHeaders=function(){if(!this.h)return"";const a=[],f=this.h.entries();for(var p=f.next();!p.done;)p=p.value,a.push(p[0]+": "+p[1]),p=f.next();return a.join(`\r
`)};function si(a){a.onreadystatechange&&a.onreadystatechange.call(a)}Object.defineProperty(wo.prototype,"withCredentials",{get:function(){return this.m==="include"},set:function(a){this.m=a?"include":"same-origin"}});function of(a){let f="";return F(a,function(p,_){f+=_,f+=":",f+=p,f+=`\r
`}),f}function Cc(a,f,p){e:{for(_ in p){var _=!1;break e}_=!0}_||(p=of(p),typeof a=="string"?p!=null&&encodeURIComponent(String(p)):xe(a,f,p))}function $e(a){te.call(this),this.headers=new Map,this.o=a||null,this.h=!1,this.v=this.g=null,this.D="",this.m=0,this.l="",this.j=this.B=this.u=this.A=!1,this.I=null,this.H="",this.J=!1}P($e,te);var iE=/^https?$/i,oE=["POST","PUT"];t=$e.prototype,t.Ha=function(a){this.J=a},t.ea=function(a,f,p,_){if(this.g)throw Error("[goog.net.XhrIo] Object is active with another request="+this.D+"; newUri="+a);f=f?f.toUpperCase():"GET",this.D=a,this.l="",this.m=0,this.A=!1,this.h=!0,this.g=this.o?this.o.g():wc.g(),this.v=this.o?Vh(this.o):Vh(wc),this.g.onreadystatechange=g(this.Ea,this);try{this.B=!0,this.g.open(f,String(a),!0),this.B=!1}catch(L){af(this,L);return}if(a=p||"",p=new Map(this.headers),_)if(Object.getPrototypeOf(_)===Object.prototype)for(var D in _)p.set(D,_[D]);else if(typeof _.keys=="function"&&typeof _.get=="function")for(const L of _.keys())p.set(L,_.get(L));else throw Error("Unknown input type for opt_headers: "+String(_));_=Array.from(p.keys()).find(L=>L.toLowerCase()=="content-type"),D=c.FormData&&a instanceof c.FormData,!(0<=Array.prototype.indexOf.call(oE,f,void 0))||_||D||p.set("Content-Type","application/x-www-form-urlencoded;charset=utf-8");for(const[L,G]of p)this.g.setRequestHeader(L,G);this.H&&(this.g.responseType=this.H),"withCredentials"in this.g&&this.g.withCredentials!==this.J&&(this.g.withCredentials=this.J);try{uf(this),this.u=!0,this.g.send(a),this.u=!1}catch(L){af(this,L)}};function af(a,f){a.h=!1,a.g&&(a.j=!0,a.g.abort(),a.j=!1),a.l=f,a.m=5,cf(a),Io(a)}function cf(a){a.A||(a.A=!0,le(a,"complete"),le(a,"error"))}t.abort=function(a){this.g&&this.h&&(this.h=!1,this.j=!0,this.g.abort(),this.j=!1,this.m=a||7,le(this,"complete"),le(this,"abort"),Io(this))},t.N=function(){this.g&&(this.h&&(this.h=!1,this.j=!0,this.g.abort(),this.j=!1),Io(this,!0)),$e.aa.N.call(this)},t.Ea=function(){this.s||(this.B||this.u||this.j?lf(this):this.bb())},t.bb=function(){lf(this)};function lf(a){if(a.h&&typeof o<"u"&&(!a.v[1]||mn(a)!=4||a.Z()!=2)){if(a.u&&mn(a)==4)we(a.Ea,0,a);else if(le(a,"readystatechange"),mn(a)==4){a.h=!1;try{const G=a.Z();e:switch(G){case 200:case 201:case 202:case 204:case 206:case 304:case 1223:var f=!0;break e;default:f=!1}var p;if(!(p=f)){var _;if(_=G===0){var D=String(a.D).match(Yh)[1]||null;!D&&c.self&&c.self.location&&(D=c.self.location.protocol.slice(0,-1)),_=!iE.test(D?D.toLowerCase():"")}p=_}if(p)le(a,"complete"),le(a,"success");else{a.m=6;try{var L=2<mn(a)?a.g.statusText:""}catch{L=""}a.l=L+" ["+a.Z()+"]",cf(a)}}finally{Io(a)}}}}function Io(a,f){if(a.g){uf(a);const p=a.g,_=a.v[0]?()=>{}:null;a.g=null,a.v=null,f||le(a,"ready");try{p.onreadystatechange=_}catch{}}}function uf(a){a.I&&(c.clearTimeout(a.I),a.I=null)}t.isActive=function(){return!!this.g};function mn(a){return a.g?a.g.readyState:0}t.Z=function(){try{return 2<mn(this)?this.g.status:-1}catch{return-1}},t.oa=function(){try{return this.g?this.g.responseText:""}catch{return""}},t.Oa=function(a){if(this.g){var f=this.g.responseText;return a&&f.indexOf(a)==0&&(f=f.substring(a.length)),vt(f)}};function hf(a){try{if(!a.g)return null;if("response"in a.g)return a.g.response;switch(a.H){case"":case"text":return a.g.responseText;case"arraybuffer":if("mozResponseArrayBuffer"in a.g)return a.g.mozResponseArrayBuffer}return null}catch{return null}}function aE(a){const f={};a=(a.g&&2<=mn(a)&&a.g.getAllResponseHeaders()||"").split(`\r
`);for(let _=0;_<a.length;_++){if(N(a[_]))continue;var p=S(a[_]);const D=p[0];if(p=p[1],typeof p!="string")continue;p=p.trim();const L=f[D]||[];f[D]=L,L.push(p)}I(f,function(_){return _.join(", ")})}t.Ba=function(){return this.m},t.Ka=function(){return typeof this.l=="string"?this.l:String(this.l)};function ii(a,f,p){return p&&p.internalChannelParams&&p.internalChannelParams[a]||f}function ff(a){this.Aa=0,this.i=[],this.j=new Xs,this.ia=this.qa=this.I=this.W=this.g=this.ya=this.D=this.H=this.m=this.S=this.o=null,this.Ya=this.U=0,this.Va=ii("failFast",!1,a),this.F=this.C=this.u=this.s=this.l=null,this.X=!0,this.za=this.T=-1,this.Y=this.v=this.B=0,this.Ta=ii("baseRetryDelayMs",5e3,a),this.cb=ii("retryDelaySeedMs",1e4,a),this.Wa=ii("forwardChannelMaxRetries",2,a),this.wa=ii("forwardChannelRequestTimeoutMs",2e4,a),this.pa=a&&a.xmlHttpFactory||void 0,this.Xa=a&&a.Tb||void 0,this.Ca=a&&a.useFetchStreams||!1,this.L=void 0,this.J=a&&a.supportsCrossDomainXhr||!1,this.K="",this.h=new Kh(a&&a.concurrentRequestLimit),this.Da=new rE,this.P=a&&a.fastHandshake||!1,this.O=a&&a.encodeInitMessageHeaders||!1,this.P&&this.O&&(this.O=!1),this.Ua=a&&a.Rb||!1,a&&a.xa&&this.j.xa(),a&&a.forceLongPolling&&(this.X=!1),this.ba=!this.P&&this.X&&a&&a.detectBufferingProxy||!1,this.ja=void 0,a&&a.longPollingTimeout&&0<a.longPollingTimeout&&(this.ja=a.longPollingTimeout),this.ca=void 0,this.R=0,this.M=!1,this.ka=this.A=null}t=ff.prototype,t.la=8,t.G=1,t.connect=function(a,f,p,_){Et(0),this.W=a,this.H=f||{},p&&_!==void 0&&(this.H.OSID=p,this.H.OAID=_),this.F=this.X,this.I=Tf(this,null,this.W),Ao(this)};function kc(a){if(df(a),a.G==3){var f=a.U++,p=gn(a.I);if(xe(p,"SID",a.K),xe(p,"RID",f),xe(p,"TYPE","terminate"),oi(a,p),f=new Fn(a,a.j,f),f.L=2,f.v=To(gn(p)),p=!1,c.navigator&&c.navigator.sendBeacon)try{p=c.navigator.sendBeacon(f.v.toString(),"")}catch{}!p&&c.Image&&(new Image().src=f.v,p=!0),p||(f.g=wf(f.j,null),f.g.ea(f.v)),f.F=Date.now(),yo(f)}Ef(a)}function bo(a){a.g&&(Nc(a),a.g.cancel(),a.g=null)}function df(a){bo(a),a.u&&(c.clearTimeout(a.u),a.u=null),Ro(a),a.h.cancel(),a.s&&(typeof a.s=="number"&&c.clearTimeout(a.s),a.s=null)}function Ao(a){if(!zh(a.h)&&!a.s){a.s=!0;var f=a.Ga;ue||$t(),re||(ue(),re=!0),Fe.add(f,a),a.B=0}}function cE(a,f){return Gh(a.h)>=a.h.j-(a.s?1:0)?!1:a.s?(a.i=f.D.concat(a.i),!0):a.G==1||a.G==2||a.B>=(a.Va?0:a.Wa)?!1:(a.s=Js(g(a.Ga,a,f),vf(a,a.B)),a.B++,!0)}t.Ga=function(a){if(this.s)if(this.s=null,this.G==1){if(!a){this.U=Math.floor(1e5*Math.random()),a=this.U++;const D=new Fn(this,this.j,a);let L=this.o;if(this.S&&(L?(L=v(L),E(L,this.S)):L=this.S),this.m!==null||this.O||(D.H=L,L=null),this.P)e:{for(var f=0,p=0;p<this.i.length;p++){t:{var _=this.i[p];if("__data__"in _.map&&(_=_.map.__data__,typeof _=="string")){_=_.length;break t}_=void 0}if(_===void 0)break;if(f+=_,4096<f){f=p;break e}if(f===4096||p===this.i.length-1){f=p+1;break e}}f=1e3}else f=1e3;f=gf(this,D,f),p=gn(this.I),xe(p,"RID",a),xe(p,"CVER",22),this.D&&xe(p,"X-HTTP-Session-Id",this.D),oi(this,p),L&&(this.O?f="headers="+encodeURIComponent(String(of(L)))+"&"+f:this.m&&Cc(p,this.m,L)),Pc(this.h,D),this.Ua&&xe(p,"TYPE","init"),this.P?(xe(p,"$req",f),xe(p,"SID","null"),D.T=!0,bc(D,p,null)):bc(D,p,f),this.G=2}}else this.G==3&&(a?pf(this,a):this.i.length==0||zh(this.h)||pf(this))};function pf(a,f){var p;f?p=f.l:p=a.U++;const _=gn(a.I);xe(_,"SID",a.K),xe(_,"RID",p),xe(_,"AID",a.T),oi(a,_),a.m&&a.o&&Cc(_,a.m,a.o),p=new Fn(a,a.j,p,a.B+1),a.m===null&&(p.H=a.o),f&&(a.i=f.D.concat(a.i)),f=gf(a,p,1e3),p.I=Math.round(.5*a.wa)+Math.round(.5*a.wa*Math.random()),Pc(a.h,p),bc(p,_,f)}function oi(a,f){a.H&&F(a.H,function(p,_){xe(f,_,p)}),a.l&&Xh({},function(p,_){xe(f,_,p)})}function gf(a,f,p){p=Math.min(a.i.length,p);var _=a.l?g(a.l.Na,a.l,a):null;e:{var D=a.i;let L=-1;for(;;){const G=["count="+p];L==-1?0<p?(L=D[0].g,G.push("ofs="+L)):L=0:G.push("ofs="+L);let Oe=!0;for(let rt=0;rt<p;rt++){let Ie=D[rt].g;const ht=D[rt].map;if(Ie-=L,0>Ie)L=Math.max(0,D[rt].g-100),Oe=!1;else try{sE(ht,G,"req"+Ie+"_")}catch{_&&_(ht)}}if(Oe){_=G.join("&");break e}}}return a=a.i.splice(0,p),f.D=a,_}function mf(a){if(!a.g&&!a.u){a.Y=1;var f=a.Fa;ue||$t(),re||(ue(),re=!0),Fe.add(f,a),a.v=0}}function Oc(a){return a.g||a.u||3<=a.v?!1:(a.Y++,a.u=Js(g(a.Fa,a),vf(a,a.v)),a.v++,!0)}t.Fa=function(){if(this.u=null,_f(this),this.ba&&!(this.M||this.g==null||0>=this.R)){var a=2*this.R;this.j.info("BP detection timer enabled: "+a),this.A=Js(g(this.ab,this),a)}},t.ab=function(){this.A&&(this.A=null,this.j.info("BP detection timeout reached."),this.j.info("Buffering proxy detected and switch to long-polling!"),this.F=!1,this.M=!0,Et(10),bo(this),_f(this))};function Nc(a){a.A!=null&&(c.clearTimeout(a.A),a.A=null)}function _f(a){a.g=new Fn(a,a.j,"rpc",a.Y),a.m===null&&(a.g.H=a.o),a.g.O=0;var f=gn(a.qa);xe(f,"RID","rpc"),xe(f,"SID",a.K),xe(f,"AID",a.T),xe(f,"CI",a.F?"0":"1"),!a.F&&a.ja&&xe(f,"TO",a.ja),xe(f,"TYPE","xmlhttp"),oi(a,f),a.m&&a.o&&Cc(f,a.m,a.o),a.L&&(a.g.I=a.L);var p=a.g;a=a.ia,p.L=1,p.v=To(gn(f)),p.m=null,p.P=!0,Hh(p,a)}t.Za=function(){this.C!=null&&(this.C=null,bo(this),Oc(this),Et(19))};function Ro(a){a.C!=null&&(c.clearTimeout(a.C),a.C=null)}function yf(a,f){var p=null;if(a.g==f){Ro(a),Nc(a),a.g=null;var _=2}else if(Sc(a.h,f))p=f.D,Qh(a.h,f),_=1;else return;if(a.G!=0){if(f.o)if(_==1){p=f.m?f.m.length:0,f=Date.now()-f.F;var D=a.B;_=go(),le(_,new Uh(_,p)),Ao(a)}else mf(a);else if(D=f.s,D==3||D==0&&0<f.X||!(_==1&&cE(a,f)||_==2&&Oc(a)))switch(p&&0<p.length&&(f=a.h,f.i=f.i.concat(p)),D){case 1:vr(a,5);break;case 4:vr(a,10);break;case 3:vr(a,6);break;default:vr(a,2)}}}function vf(a,f){let p=a.Ta+Math.floor(Math.random()*a.cb);return a.isActive()||(p*=2),p*f}function vr(a,f){if(a.j.info("Error code "+f),f==2){var p=g(a.fb,a),_=a.Xa;const D=!_;_=new yr(_||"//www.google.com/images/cleardot.gif"),c.location&&c.location.protocol=="http"||vo(_,"https"),To(_),D?tE(_.toString(),p):nE(_.toString(),p)}else Et(2);a.G=0,a.l&&a.l.sa(f),Ef(a),df(a)}t.fb=function(a){a?(this.j.info("Successfully pinged google.com"),Et(2)):(this.j.info("Failed to ping google.com"),Et(1))};function Ef(a){if(a.G=0,a.ka=[],a.l){const f=Jh(a.h);(f.length!=0||a.i.length!=0)&&(O(a.ka,f),O(a.ka,a.i),a.h.i.length=0,k(a.i),a.i.length=0),a.l.ra()}}function Tf(a,f,p){var _=p instanceof yr?gn(p):new yr(p);if(_.g!="")f&&(_.g=f+"."+_.g),Eo(_,_.s);else{var D=c.location;_=D.protocol,f=f?f+"."+D.hostname:D.hostname,D=+D.port;var L=new yr(null);_&&vo(L,_),f&&(L.g=f),D&&Eo(L,D),p&&(L.l=p),_=L}return p=a.D,f=a.ya,p&&f&&xe(_,p,f),xe(_,"VER",a.la),oi(a,_),_}function wf(a,f,p){if(f&&!a.J)throw Error("Can't create secondary domain capable XhrIo object.");return f=a.Ca&&!a.pa?new $e(new ni({eb:p})):new $e(a.pa),f.Ha(a.J),f}t.isActive=function(){return!!this.l&&this.l.isActive(this)};function If(){}t=If.prototype,t.ua=function(){},t.ta=function(){},t.sa=function(){},t.ra=function(){},t.isActive=function(){return!0},t.Na=function(){};function So(){}So.prototype.g=function(a,f){return new Pt(a,f)};function Pt(a,f){te.call(this),this.g=new ff(f),this.l=a,this.h=f&&f.messageUrlParams||null,a=f&&f.messageHeaders||null,f&&f.clientProtocolHeaderRequired&&(a?a["X-Client-Protocol"]="webchannel":a={"X-Client-Protocol":"webchannel"}),this.g.o=a,a=f&&f.initMessageHeaders||null,f&&f.messageContentType&&(a?a["X-WebChannel-Content-Type"]=f.messageContentType:a={"X-WebChannel-Content-Type":f.messageContentType}),f&&f.va&&(a?a["X-WebChannel-Client-Profile"]=f.va:a={"X-WebChannel-Client-Profile":f.va}),this.g.S=a,(a=f&&f.Sb)&&!N(a)&&(this.g.m=a),this.v=f&&f.supportsCrossDomainXhr||!1,this.u=f&&f.sendRawJson||!1,(f=f&&f.httpSessionIdParam)&&!N(f)&&(this.g.D=f,a=this.h,a!==null&&f in a&&(a=this.h,f in a&&delete a[f])),this.j=new Zr(this)}P(Pt,te),Pt.prototype.m=function(){this.g.l=this.j,this.v&&(this.g.J=!0),this.g.connect(this.l,this.h||void 0)},Pt.prototype.close=function(){kc(this.g)},Pt.prototype.o=function(a){var f=this.g;if(typeof a=="string"){var p={};p.__data__=a,a=p}else this.u&&(p={},p.__data__=Qr(a),a=p);f.i.push(new Wv(f.Ya++,a)),f.G==3&&Ao(f)},Pt.prototype.N=function(){this.g.l=null,delete this.j,kc(this.g),delete this.g,Pt.aa.N.call(this)};function bf(a){Ec.call(this),a.__headers__&&(this.headers=a.__headers__,this.statusCode=a.__status__,delete a.__headers__,delete a.__status__);var f=a.__sm__;if(f){e:{for(const p in f){a=p;break e}a=void 0}(this.i=a)&&(a=this.i,f=f!==null&&a in f?f[a]:void 0),this.data=f}else this.data=a}P(bf,Ec);function Af(){Tc.call(this),this.status=1}P(Af,Tc);function Zr(a){this.g=a}P(Zr,If),Zr.prototype.ua=function(){le(this.g,"a")},Zr.prototype.ta=function(a){le(this.g,new bf(a))},Zr.prototype.sa=function(a){le(this.g,new Af)},Zr.prototype.ra=function(){le(this.g,"b")},So.prototype.createWebChannel=So.prototype.g,Pt.prototype.send=Pt.prototype.o,Pt.prototype.open=Pt.prototype.m,Pt.prototype.close=Pt.prototype.close,Sy=function(){return new So},Ry=function(){return go()},Ay=mr,Yl={mb:0,pb:1,qb:2,Jb:3,Ob:4,Lb:5,Mb:6,Kb:7,Ib:8,Nb:9,PROXY:10,NOPROXY:11,Gb:12,Cb:13,Db:14,Bb:15,Eb:16,Fb:17,ib:18,hb:19,jb:20},mo.NO_ERROR=0,mo.TIMEOUT=8,mo.HTTP_ERROR=6,ra=mo,Bh.COMPLETE="complete",by=Bh,xh.EventType=Gs,Gs.OPEN="a",Gs.CLOSE="b",Gs.ERROR="c",Gs.MESSAGE="d",te.prototype.listen=te.prototype.K,gi=xh,Iy=ni,$e.prototype.listenOnce=$e.prototype.L,$e.prototype.getLastError=$e.prototype.Ka,$e.prototype.getLastErrorCode=$e.prototype.Ba,$e.prototype.getStatus=$e.prototype.Z,$e.prototype.getResponseJson=$e.prototype.Oa,$e.prototype.getResponseText=$e.prototype.oa,$e.prototype.send=$e.prototype.ea,$e.prototype.setWithCredentials=$e.prototype.Ha,wy=$e}).apply(typeof qo<"u"?qo:typeof self<"u"?self:typeof window<"u"?window:{});const kp="@firebase/firestore";/**
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
 */class pt{constructor(e){this.uid=e}isAuthenticated(){return this.uid!=null}toKey(){return this.isAuthenticated()?"uid:"+this.uid:"anonymous-user"}isEqual(e){return e.uid===this.uid}}pt.UNAUTHENTICATED=new pt(null),pt.GOOGLE_CREDENTIALS=new pt("google-credentials-uid"),pt.FIRST_PARTY=new pt("first-party-uid"),pt.MOCK_USER=new pt("mock-user");/**
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
 */let qs="10.13.1";/**
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
 */const Br=new $u("@firebase/firestore");function ui(){return Br.logLevel}function ne(t,...e){if(Br.logLevel<=ve.DEBUG){const n=e.map(nh);Br.debug(`Firestore (${qs}): ${t}`,...n)}}function On(t,...e){if(Br.logLevel<=ve.ERROR){const n=e.map(nh);Br.error(`Firestore (${qs}): ${t}`,...n)}}function ks(t,...e){if(Br.logLevel<=ve.WARN){const n=e.map(nh);Br.warn(`Firestore (${qs}): ${t}`,...n)}}function nh(t){if(typeof t=="string")return t;try{/**
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
*/return function(n){return JSON.stringify(n)}(t)}catch{return t}}/**
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
 */function de(t="Unexpected state"){const e=`FIRESTORE (${qs}) INTERNAL ASSERTION FAILED: `+t;throw On(e),new Error(e)}function Ve(t,e){t||de()}function me(t,e){return t}/**
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
 */const W={OK:"ok",CANCELLED:"cancelled",UNKNOWN:"unknown",INVALID_ARGUMENT:"invalid-argument",DEADLINE_EXCEEDED:"deadline-exceeded",NOT_FOUND:"not-found",ALREADY_EXISTS:"already-exists",PERMISSION_DENIED:"permission-denied",UNAUTHENTICATED:"unauthenticated",RESOURCE_EXHAUSTED:"resource-exhausted",FAILED_PRECONDITION:"failed-precondition",ABORTED:"aborted",OUT_OF_RANGE:"out-of-range",UNIMPLEMENTED:"unimplemented",INTERNAL:"internal",UNAVAILABLE:"unavailable",DATA_LOSS:"data-loss"};class ae extends xn{constructor(e,n){super(e,n),this.code=e,this.message=n,this.toString=()=>`${this.name}: [code=${this.code}]: ${this.message}`}}/**
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
 */class ir{constructor(){this.promise=new Promise((e,n)=>{this.resolve=e,this.reject=n})}}/**
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
 */class Py{constructor(e,n){this.user=n,this.type="OAuth",this.headers=new Map,this.headers.set("Authorization",`Bearer ${e}`)}}class BC{getToken(){return Promise.resolve(null)}invalidateToken(){}start(e,n){e.enqueueRetryable(()=>n(pt.UNAUTHENTICATED))}shutdown(){}}class jC{constructor(e){this.token=e,this.changeListener=null}getToken(){return Promise.resolve(this.token)}invalidateToken(){}start(e,n){this.changeListener=n,e.enqueueRetryable(()=>n(this.token.user))}shutdown(){this.changeListener=null}}class $C{constructor(e){this.t=e,this.currentUser=pt.UNAUTHENTICATED,this.i=0,this.forceRefresh=!1,this.auth=null}start(e,n){let r=this.i;const s=l=>this.i!==r?(r=this.i,n(l)):Promise.resolve();let i=new ir;this.o=()=>{this.i++,this.currentUser=this.u(),i.resolve(),i=new ir,e.enqueueRetryable(()=>s(this.currentUser))};const o=()=>{const l=i;e.enqueueRetryable(async()=>{await l.promise,await s(this.currentUser)})},c=l=>{ne("FirebaseAuthCredentialsProvider","Auth detected"),this.auth=l,this.auth.addAuthTokenListener(this.o),o()};this.t.onInit(l=>c(l)),setTimeout(()=>{if(!this.auth){const l=this.t.getImmediate({optional:!0});l?c(l):(ne("FirebaseAuthCredentialsProvider","Auth not yet detected"),i.resolve(),i=new ir)}},0),o()}getToken(){const e=this.i,n=this.forceRefresh;return this.forceRefresh=!1,this.auth?this.auth.getToken(n).then(r=>this.i!==e?(ne("FirebaseAuthCredentialsProvider","getToken aborted due to token change."),this.getToken()):r?(Ve(typeof r.accessToken=="string"),new Py(r.accessToken,this.currentUser)):null):Promise.resolve(null)}invalidateToken(){this.forceRefresh=!0}shutdown(){this.auth&&this.auth.removeAuthTokenListener(this.o)}u(){const e=this.auth&&this.auth.getUid();return Ve(e===null||typeof e=="string"),new pt(e)}}class HC{constructor(e,n,r){this.l=e,this.h=n,this.P=r,this.type="FirstParty",this.user=pt.FIRST_PARTY,this.I=new Map}T(){return this.P?this.P():null}get headers(){this.I.set("X-Goog-AuthUser",this.l);const e=this.T();return e&&this.I.set("Authorization",e),this.h&&this.I.set("X-Goog-Iam-Authorization-Token",this.h),this.I}}class qC{constructor(e,n,r){this.l=e,this.h=n,this.P=r}getToken(){return Promise.resolve(new HC(this.l,this.h,this.P))}start(e,n){e.enqueueRetryable(()=>n(pt.FIRST_PARTY))}shutdown(){}invalidateToken(){}}class WC{constructor(e){this.value=e,this.type="AppCheck",this.headers=new Map,e&&e.length>0&&this.headers.set("x-firebase-appcheck",this.value)}}class KC{constructor(e){this.A=e,this.forceRefresh=!1,this.appCheck=null,this.R=null}start(e,n){const r=i=>{i.error!=null&&ne("FirebaseAppCheckTokenProvider",`Error getting App Check token; using placeholder token instead. Error: ${i.error.message}`);const o=i.token!==this.R;return this.R=i.token,ne("FirebaseAppCheckTokenProvider",`Received ${o?"new":"existing"} token.`),o?n(i.token):Promise.resolve()};this.o=i=>{e.enqueueRetryable(()=>r(i))};const s=i=>{ne("FirebaseAppCheckTokenProvider","AppCheck detected"),this.appCheck=i,this.appCheck.addTokenListener(this.o)};this.A.onInit(i=>s(i)),setTimeout(()=>{if(!this.appCheck){const i=this.A.getImmediate({optional:!0});i?s(i):ne("FirebaseAppCheckTokenProvider","AppCheck not yet detected")}},0)}getToken(){const e=this.forceRefresh;return this.forceRefresh=!1,this.appCheck?this.appCheck.getToken(e).then(n=>n?(Ve(typeof n.token=="string"),this.R=n.token,new WC(n.token)):null):Promise.resolve(null)}invalidateToken(){this.forceRefresh=!0}shutdown(){this.appCheck&&this.appCheck.removeTokenListener(this.o)}}/**
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
 */function zC(t){const e=typeof self<"u"&&(self.crypto||self.msCrypto),n=new Uint8Array(t);if(e&&typeof e.getRandomValues=="function")e.getRandomValues(n);else for(let r=0;r<t;r++)n[r]=Math.floor(256*Math.random());return n}/**
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
 */class Cy{static newId(){const e="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",n=Math.floor(256/e.length)*e.length;let r="";for(;r.length<20;){const s=zC(40);for(let i=0;i<s.length;++i)r.length<20&&s[i]<n&&(r+=e.charAt(s[i]%e.length))}return r}}function be(t,e){return t<e?-1:t>e?1:0}function Os(t,e,n){return t.length===e.length&&t.every((r,s)=>n(r,e[s]))}/**
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
 */class Je{constructor(e,n){if(this.seconds=e,this.nanoseconds=n,n<0)throw new ae(W.INVALID_ARGUMENT,"Timestamp nanoseconds out of range: "+n);if(n>=1e9)throw new ae(W.INVALID_ARGUMENT,"Timestamp nanoseconds out of range: "+n);if(e<-62135596800)throw new ae(W.INVALID_ARGUMENT,"Timestamp seconds out of range: "+e);if(e>=253402300800)throw new ae(W.INVALID_ARGUMENT,"Timestamp seconds out of range: "+e)}static now(){return Je.fromMillis(Date.now())}static fromDate(e){return Je.fromMillis(e.getTime())}static fromMillis(e){const n=Math.floor(e/1e3),r=Math.floor(1e6*(e-1e3*n));return new Je(n,r)}toDate(){return new Date(this.toMillis())}toMillis(){return 1e3*this.seconds+this.nanoseconds/1e6}_compareTo(e){return this.seconds===e.seconds?be(this.nanoseconds,e.nanoseconds):be(this.seconds,e.seconds)}isEqual(e){return e.seconds===this.seconds&&e.nanoseconds===this.nanoseconds}toString(){return"Timestamp(seconds="+this.seconds+", nanoseconds="+this.nanoseconds+")"}toJSON(){return{seconds:this.seconds,nanoseconds:this.nanoseconds}}valueOf(){const e=this.seconds- -62135596800;return String(e).padStart(12,"0")+"."+String(this.nanoseconds).padStart(9,"0")}}/**
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
 */class ge{constructor(e){this.timestamp=e}static fromTimestamp(e){return new ge(e)}static min(){return new ge(new Je(0,0))}static max(){return new ge(new Je(253402300799,999999999))}compareTo(e){return this.timestamp._compareTo(e.timestamp)}isEqual(e){return this.timestamp.isEqual(e.timestamp)}toMicroseconds(){return 1e6*this.timestamp.seconds+this.timestamp.nanoseconds/1e3}toString(){return"SnapshotVersion("+this.timestamp.toString()+")"}toTimestamp(){return this.timestamp}}/**
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
 */class qi{constructor(e,n,r){n===void 0?n=0:n>e.length&&de(),r===void 0?r=e.length-n:r>e.length-n&&de(),this.segments=e,this.offset=n,this.len=r}get length(){return this.len}isEqual(e){return qi.comparator(this,e)===0}child(e){const n=this.segments.slice(this.offset,this.limit());return e instanceof qi?e.forEach(r=>{n.push(r)}):n.push(e),this.construct(n)}limit(){return this.offset+this.length}popFirst(e){return e=e===void 0?1:e,this.construct(this.segments,this.offset+e,this.length-e)}popLast(){return this.construct(this.segments,this.offset,this.length-1)}firstSegment(){return this.segments[this.offset]}lastSegment(){return this.get(this.length-1)}get(e){return this.segments[this.offset+e]}isEmpty(){return this.length===0}isPrefixOf(e){if(e.length<this.length)return!1;for(let n=0;n<this.length;n++)if(this.get(n)!==e.get(n))return!1;return!0}isImmediateParentOf(e){if(this.length+1!==e.length)return!1;for(let n=0;n<this.length;n++)if(this.get(n)!==e.get(n))return!1;return!0}forEach(e){for(let n=this.offset,r=this.limit();n<r;n++)e(this.segments[n])}toArray(){return this.segments.slice(this.offset,this.limit())}static comparator(e,n){const r=Math.min(e.length,n.length);for(let s=0;s<r;s++){const i=e.get(s),o=n.get(s);if(i<o)return-1;if(i>o)return 1}return e.length<n.length?-1:e.length>n.length?1:0}}class He extends qi{construct(e,n,r){return new He(e,n,r)}canonicalString(){return this.toArray().join("/")}toString(){return this.canonicalString()}toUriEncodedString(){return this.toArray().map(encodeURIComponent).join("/")}static fromString(...e){const n=[];for(const r of e){if(r.indexOf("//")>=0)throw new ae(W.INVALID_ARGUMENT,`Invalid segment (${r}). Paths must not contain // in them.`);n.push(...r.split("/").filter(s=>s.length>0))}return new He(n)}static emptyPath(){return new He([])}}const GC=/^[_a-zA-Z][_a-zA-Z0-9]*$/;class ot extends qi{construct(e,n,r){return new ot(e,n,r)}static isValidIdentifier(e){return GC.test(e)}canonicalString(){return this.toArray().map(e=>(e=e.replace(/\\/g,"\\\\").replace(/`/g,"\\`"),ot.isValidIdentifier(e)||(e="`"+e+"`"),e)).join(".")}toString(){return this.canonicalString()}isKeyField(){return this.length===1&&this.get(0)==="__name__"}static keyField(){return new ot(["__name__"])}static fromServerFormat(e){const n=[];let r="",s=0;const i=()=>{if(r.length===0)throw new ae(W.INVALID_ARGUMENT,`Invalid field path (${e}). Paths must not be empty, begin with '.', end with '.', or contain '..'`);n.push(r),r=""};let o=!1;for(;s<e.length;){const c=e[s];if(c==="\\"){if(s+1===e.length)throw new ae(W.INVALID_ARGUMENT,"Path has trailing escape character: "+e);const l=e[s+1];if(l!=="\\"&&l!=="."&&l!=="`")throw new ae(W.INVALID_ARGUMENT,"Path has invalid escape sequence: "+e);r+=l,s+=2}else c==="`"?(o=!o,s++):c!=="."||o?(r+=c,s++):(i(),s++)}if(i(),o)throw new ae(W.INVALID_ARGUMENT,"Unterminated ` in path: "+e);return new ot(n)}static emptyPath(){return new ot([])}}/**
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
 */class ce{constructor(e){this.path=e}static fromPath(e){return new ce(He.fromString(e))}static fromName(e){return new ce(He.fromString(e).popFirst(5))}static empty(){return new ce(He.emptyPath())}get collectionGroup(){return this.path.popLast().lastSegment()}hasCollectionId(e){return this.path.length>=2&&this.path.get(this.path.length-2)===e}getCollectionGroup(){return this.path.get(this.path.length-2)}getCollectionPath(){return this.path.popLast()}isEqual(e){return e!==null&&He.comparator(this.path,e.path)===0}toString(){return this.path.toString()}static comparator(e,n){return He.comparator(e.path,n.path)}static isDocumentKey(e){return e.length%2==0}static fromSegments(e){return new ce(new He(e.slice()))}}function QC(t,e){const n=t.toTimestamp().seconds,r=t.toTimestamp().nanoseconds+1,s=ge.fromTimestamp(r===1e9?new Je(n+1,0):new Je(n,r));return new lr(s,ce.empty(),e)}function JC(t){return new lr(t.readTime,t.key,-1)}class lr{constructor(e,n,r){this.readTime=e,this.documentKey=n,this.largestBatchId=r}static min(){return new lr(ge.min(),ce.empty(),-1)}static max(){return new lr(ge.max(),ce.empty(),-1)}}function XC(t,e){let n=t.readTime.compareTo(e.readTime);return n!==0?n:(n=ce.comparator(t.documentKey,e.documentKey),n!==0?n:be(t.largestBatchId,e.largestBatchId))}/**
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
 */const YC="The current tab is not in the required state to perform this operation. It might be necessary to refresh the browser tab.";class ZC{constructor(){this.onCommittedListeners=[]}addOnCommittedListener(e){this.onCommittedListeners.push(e)}raiseOnCommittedEvent(){this.onCommittedListeners.forEach(e=>e())}}/**
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
 */async function co(t){if(t.code!==W.FAILED_PRECONDITION||t.message!==YC)throw t;ne("LocalStore","Unexpectedly lost primary lease")}/**
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
 */class ${constructor(e){this.nextCallback=null,this.catchCallback=null,this.result=void 0,this.error=void 0,this.isDone=!1,this.callbackAttached=!1,e(n=>{this.isDone=!0,this.result=n,this.nextCallback&&this.nextCallback(n)},n=>{this.isDone=!0,this.error=n,this.catchCallback&&this.catchCallback(n)})}catch(e){return this.next(void 0,e)}next(e,n){return this.callbackAttached&&de(),this.callbackAttached=!0,this.isDone?this.error?this.wrapFailure(n,this.error):this.wrapSuccess(e,this.result):new $((r,s)=>{this.nextCallback=i=>{this.wrapSuccess(e,i).next(r,s)},this.catchCallback=i=>{this.wrapFailure(n,i).next(r,s)}})}toPromise(){return new Promise((e,n)=>{this.next(e,n)})}wrapUserFunction(e){try{const n=e();return n instanceof $?n:$.resolve(n)}catch(n){return $.reject(n)}}wrapSuccess(e,n){return e?this.wrapUserFunction(()=>e(n)):$.resolve(n)}wrapFailure(e,n){return e?this.wrapUserFunction(()=>e(n)):$.reject(n)}static resolve(e){return new $((n,r)=>{n(e)})}static reject(e){return new $((n,r)=>{r(e)})}static waitFor(e){return new $((n,r)=>{let s=0,i=0,o=!1;e.forEach(c=>{++s,c.next(()=>{++i,o&&i===s&&n()},l=>r(l))}),o=!0,i===s&&n()})}static or(e){let n=$.resolve(!1);for(const r of e)n=n.next(s=>s?$.resolve(s):r());return n}static forEach(e,n){const r=[];return e.forEach((s,i)=>{r.push(n.call(this,s,i))}),this.waitFor(r)}static mapArray(e,n){return new $((r,s)=>{const i=e.length,o=new Array(i);let c=0;for(let l=0;l<i;l++){const u=l;n(e[u]).next(h=>{o[u]=h,++c,c===i&&r(o)},h=>s(h))}})}static doWhile(e,n){return new $((r,s)=>{const i=()=>{e()===!0?n().next(()=>{i()},s):r()};i()})}}function ek(t){const e=t.match(/Android ([\d.]+)/i),n=e?e[1].split(".").slice(0,2).join("."):"-1";return Number(n)}function lo(t){return t.name==="IndexedDbTransactionError"}/**
 * @license
 * Copyright 2018 Google LLC
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
 */class rh{constructor(e,n){this.previousValue=e,n&&(n.sequenceNumberHandler=r=>this.ie(r),this.se=r=>n.writeSequenceNumber(r))}ie(e){return this.previousValue=Math.max(e,this.previousValue),this.previousValue}next(){const e=++this.previousValue;return this.se&&this.se(e),e}}rh.oe=-1;function uc(t){return t==null}function Na(t){return t===0&&1/t==-1/0}function tk(t){return typeof t=="number"&&Number.isInteger(t)&&!Na(t)&&t<=Number.MAX_SAFE_INTEGER&&t>=Number.MIN_SAFE_INTEGER}/**
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
 */function Op(t){let e=0;for(const n in t)Object.prototype.hasOwnProperty.call(t,n)&&e++;return e}function Ws(t,e){for(const n in t)Object.prototype.hasOwnProperty.call(t,n)&&e(n,t[n])}function ky(t){for(const e in t)if(Object.prototype.hasOwnProperty.call(t,e))return!1;return!0}/**
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
 */class je{constructor(e,n){this.comparator=e,this.root=n||it.EMPTY}insert(e,n){return new je(this.comparator,this.root.insert(e,n,this.comparator).copy(null,null,it.BLACK,null,null))}remove(e){return new je(this.comparator,this.root.remove(e,this.comparator).copy(null,null,it.BLACK,null,null))}get(e){let n=this.root;for(;!n.isEmpty();){const r=this.comparator(e,n.key);if(r===0)return n.value;r<0?n=n.left:r>0&&(n=n.right)}return null}indexOf(e){let n=0,r=this.root;for(;!r.isEmpty();){const s=this.comparator(e,r.key);if(s===0)return n+r.left.size;s<0?r=r.left:(n+=r.left.size+1,r=r.right)}return-1}isEmpty(){return this.root.isEmpty()}get size(){return this.root.size}minKey(){return this.root.minKey()}maxKey(){return this.root.maxKey()}inorderTraversal(e){return this.root.inorderTraversal(e)}forEach(e){this.inorderTraversal((n,r)=>(e(n,r),!1))}toString(){const e=[];return this.inorderTraversal((n,r)=>(e.push(`${n}:${r}`),!1)),`{${e.join(", ")}}`}reverseTraversal(e){return this.root.reverseTraversal(e)}getIterator(){return new Wo(this.root,null,this.comparator,!1)}getIteratorFrom(e){return new Wo(this.root,e,this.comparator,!1)}getReverseIterator(){return new Wo(this.root,null,this.comparator,!0)}getReverseIteratorFrom(e){return new Wo(this.root,e,this.comparator,!0)}}class Wo{constructor(e,n,r,s){this.isReverse=s,this.nodeStack=[];let i=1;for(;!e.isEmpty();)if(i=n?r(e.key,n):1,n&&s&&(i*=-1),i<0)e=this.isReverse?e.left:e.right;else{if(i===0){this.nodeStack.push(e);break}this.nodeStack.push(e),e=this.isReverse?e.right:e.left}}getNext(){let e=this.nodeStack.pop();const n={key:e.key,value:e.value};if(this.isReverse)for(e=e.left;!e.isEmpty();)this.nodeStack.push(e),e=e.right;else for(e=e.right;!e.isEmpty();)this.nodeStack.push(e),e=e.left;return n}hasNext(){return this.nodeStack.length>0}peek(){if(this.nodeStack.length===0)return null;const e=this.nodeStack[this.nodeStack.length-1];return{key:e.key,value:e.value}}}class it{constructor(e,n,r,s,i){this.key=e,this.value=n,this.color=r??it.RED,this.left=s??it.EMPTY,this.right=i??it.EMPTY,this.size=this.left.size+1+this.right.size}copy(e,n,r,s,i){return new it(e??this.key,n??this.value,r??this.color,s??this.left,i??this.right)}isEmpty(){return!1}inorderTraversal(e){return this.left.inorderTraversal(e)||e(this.key,this.value)||this.right.inorderTraversal(e)}reverseTraversal(e){return this.right.reverseTraversal(e)||e(this.key,this.value)||this.left.reverseTraversal(e)}min(){return this.left.isEmpty()?this:this.left.min()}minKey(){return this.min().key}maxKey(){return this.right.isEmpty()?this.key:this.right.maxKey()}insert(e,n,r){let s=this;const i=r(e,s.key);return s=i<0?s.copy(null,null,null,s.left.insert(e,n,r),null):i===0?s.copy(null,n,null,null,null):s.copy(null,null,null,null,s.right.insert(e,n,r)),s.fixUp()}removeMin(){if(this.left.isEmpty())return it.EMPTY;let e=this;return e.left.isRed()||e.left.left.isRed()||(e=e.moveRedLeft()),e=e.copy(null,null,null,e.left.removeMin(),null),e.fixUp()}remove(e,n){let r,s=this;if(n(e,s.key)<0)s.left.isEmpty()||s.left.isRed()||s.left.left.isRed()||(s=s.moveRedLeft()),s=s.copy(null,null,null,s.left.remove(e,n),null);else{if(s.left.isRed()&&(s=s.rotateRight()),s.right.isEmpty()||s.right.isRed()||s.right.left.isRed()||(s=s.moveRedRight()),n(e,s.key)===0){if(s.right.isEmpty())return it.EMPTY;r=s.right.min(),s=s.copy(r.key,r.value,null,null,s.right.removeMin())}s=s.copy(null,null,null,null,s.right.remove(e,n))}return s.fixUp()}isRed(){return this.color}fixUp(){let e=this;return e.right.isRed()&&!e.left.isRed()&&(e=e.rotateLeft()),e.left.isRed()&&e.left.left.isRed()&&(e=e.rotateRight()),e.left.isRed()&&e.right.isRed()&&(e=e.colorFlip()),e}moveRedLeft(){let e=this.colorFlip();return e.right.left.isRed()&&(e=e.copy(null,null,null,null,e.right.rotateRight()),e=e.rotateLeft(),e=e.colorFlip()),e}moveRedRight(){let e=this.colorFlip();return e.left.left.isRed()&&(e=e.rotateRight(),e=e.colorFlip()),e}rotateLeft(){const e=this.copy(null,null,it.RED,null,this.right.left);return this.right.copy(null,null,this.color,e,null)}rotateRight(){const e=this.copy(null,null,it.RED,this.left.right,null);return this.left.copy(null,null,this.color,null,e)}colorFlip(){const e=this.left.copy(null,null,!this.left.color,null,null),n=this.right.copy(null,null,!this.right.color,null,null);return this.copy(null,null,!this.color,e,n)}checkMaxDepth(){const e=this.check();return Math.pow(2,e)<=this.size+1}check(){if(this.isRed()&&this.left.isRed()||this.right.isRed())throw de();const e=this.left.check();if(e!==this.right.check())throw de();return e+(this.isRed()?0:1)}}it.EMPTY=null,it.RED=!0,it.BLACK=!1;it.EMPTY=new class{constructor(){this.size=0}get key(){throw de()}get value(){throw de()}get color(){throw de()}get left(){throw de()}get right(){throw de()}copy(e,n,r,s,i){return this}insert(e,n,r){return new it(e,n)}remove(e,n){return this}isEmpty(){return!0}inorderTraversal(e){return!1}reverseTraversal(e){return!1}minKey(){return null}maxKey(){return null}isRed(){return!1}checkMaxDepth(){return!0}check(){return 0}};/**
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
 */class at{constructor(e){this.comparator=e,this.data=new je(this.comparator)}has(e){return this.data.get(e)!==null}first(){return this.data.minKey()}last(){return this.data.maxKey()}get size(){return this.data.size}indexOf(e){return this.data.indexOf(e)}forEach(e){this.data.inorderTraversal((n,r)=>(e(n),!1))}forEachInRange(e,n){const r=this.data.getIteratorFrom(e[0]);for(;r.hasNext();){const s=r.getNext();if(this.comparator(s.key,e[1])>=0)return;n(s.key)}}forEachWhile(e,n){let r;for(r=n!==void 0?this.data.getIteratorFrom(n):this.data.getIterator();r.hasNext();)if(!e(r.getNext().key))return}firstAfterOrEqual(e){const n=this.data.getIteratorFrom(e);return n.hasNext()?n.getNext().key:null}getIterator(){return new Np(this.data.getIterator())}getIteratorFrom(e){return new Np(this.data.getIteratorFrom(e))}add(e){return this.copy(this.data.remove(e).insert(e,!0))}delete(e){return this.has(e)?this.copy(this.data.remove(e)):this}isEmpty(){return this.data.isEmpty()}unionWith(e){let n=this;return n.size<e.size&&(n=e,e=this),e.forEach(r=>{n=n.add(r)}),n}isEqual(e){if(!(e instanceof at)||this.size!==e.size)return!1;const n=this.data.getIterator(),r=e.data.getIterator();for(;n.hasNext();){const s=n.getNext().key,i=r.getNext().key;if(this.comparator(s,i)!==0)return!1}return!0}toArray(){const e=[];return this.forEach(n=>{e.push(n)}),e}toString(){const e=[];return this.forEach(n=>e.push(n)),"SortedSet("+e.toString()+")"}copy(e){const n=new at(this.comparator);return n.data=e,n}}class Np{constructor(e){this.iter=e}getNext(){return this.iter.getNext().key}hasNext(){return this.iter.hasNext()}}/**
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
 */class zt{constructor(e){this.fields=e,e.sort(ot.comparator)}static empty(){return new zt([])}unionWith(e){let n=new at(ot.comparator);for(const r of this.fields)n=n.add(r);for(const r of e)n=n.add(r);return new zt(n.toArray())}covers(e){for(const n of this.fields)if(n.isPrefixOf(e))return!0;return!1}isEqual(e){return Os(this.fields,e.fields,(n,r)=>n.isEqual(r))}}/**
 * @license
 * Copyright 2023 Google LLC
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
 */class Oy extends Error{constructor(){super(...arguments),this.name="Base64DecodeError"}}/**
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
 */class ct{constructor(e){this.binaryString=e}static fromBase64String(e){const n=function(s){try{return atob(s)}catch(i){throw typeof DOMException<"u"&&i instanceof DOMException?new Oy("Invalid base64 string: "+i):i}}(e);return new ct(n)}static fromUint8Array(e){const n=function(s){let i="";for(let o=0;o<s.length;++o)i+=String.fromCharCode(s[o]);return i}(e);return new ct(n)}[Symbol.iterator](){let e=0;return{next:()=>e<this.binaryString.length?{value:this.binaryString.charCodeAt(e++),done:!1}:{value:void 0,done:!0}}}toBase64(){return function(n){return btoa(n)}(this.binaryString)}toUint8Array(){return function(n){const r=new Uint8Array(n.length);for(let s=0;s<n.length;s++)r[s]=n.charCodeAt(s);return r}(this.binaryString)}approximateByteSize(){return 2*this.binaryString.length}compareTo(e){return be(this.binaryString,e.binaryString)}isEqual(e){return this.binaryString===e.binaryString}}ct.EMPTY_BYTE_STRING=new ct("");const nk=new RegExp(/^\d{4}-\d\d-\d\dT\d\d:\d\d:\d\d(?:\.(\d+))?Z$/);function ur(t){if(Ve(!!t),typeof t=="string"){let e=0;const n=nk.exec(t);if(Ve(!!n),n[1]){let s=n[1];s=(s+"000000000").substr(0,9),e=Number(s)}const r=new Date(t);return{seconds:Math.floor(r.getTime()/1e3),nanos:e}}return{seconds:We(t.seconds),nanos:We(t.nanos)}}function We(t){return typeof t=="number"?t:typeof t=="string"?Number(t):0}function jr(t){return typeof t=="string"?ct.fromBase64String(t):ct.fromUint8Array(t)}/**
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
 */function sh(t){var e,n;return((n=(((e=t==null?void 0:t.mapValue)===null||e===void 0?void 0:e.fields)||{}).__type__)===null||n===void 0?void 0:n.stringValue)==="server_timestamp"}function ih(t){const e=t.mapValue.fields.__previous_value__;return sh(e)?ih(e):e}function Wi(t){const e=ur(t.mapValue.fields.__local_write_time__.timestampValue);return new Je(e.seconds,e.nanos)}/**
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
 */class rk{constructor(e,n,r,s,i,o,c,l,u){this.databaseId=e,this.appId=n,this.persistenceKey=r,this.host=s,this.ssl=i,this.forceLongPolling=o,this.autoDetectLongPolling=c,this.longPollingOptions=l,this.useFetchStreams=u}}class Ki{constructor(e,n){this.projectId=e,this.database=n||"(default)"}static empty(){return new Ki("","")}get isDefaultDatabase(){return this.database==="(default)"}isEqual(e){return e instanceof Ki&&e.projectId===this.projectId&&e.database===this.database}}/**
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
 */const Ko={mapValue:{fields:{__type__:{stringValue:"__max__"}}}};function $r(t){return"nullValue"in t?0:"booleanValue"in t?1:"integerValue"in t||"doubleValue"in t?2:"timestampValue"in t?3:"stringValue"in t?5:"bytesValue"in t?6:"referenceValue"in t?7:"geoPointValue"in t?8:"arrayValue"in t?9:"mapValue"in t?sh(t)?4:ik(t)?9007199254740991:sk(t)?10:11:de()}function dn(t,e){if(t===e)return!0;const n=$r(t);if(n!==$r(e))return!1;switch(n){case 0:case 9007199254740991:return!0;case 1:return t.booleanValue===e.booleanValue;case 4:return Wi(t).isEqual(Wi(e));case 3:return function(s,i){if(typeof s.timestampValue=="string"&&typeof i.timestampValue=="string"&&s.timestampValue.length===i.timestampValue.length)return s.timestampValue===i.timestampValue;const o=ur(s.timestampValue),c=ur(i.timestampValue);return o.seconds===c.seconds&&o.nanos===c.nanos}(t,e);case 5:return t.stringValue===e.stringValue;case 6:return function(s,i){return jr(s.bytesValue).isEqual(jr(i.bytesValue))}(t,e);case 7:return t.referenceValue===e.referenceValue;case 8:return function(s,i){return We(s.geoPointValue.latitude)===We(i.geoPointValue.latitude)&&We(s.geoPointValue.longitude)===We(i.geoPointValue.longitude)}(t,e);case 2:return function(s,i){if("integerValue"in s&&"integerValue"in i)return We(s.integerValue)===We(i.integerValue);if("doubleValue"in s&&"doubleValue"in i){const o=We(s.doubleValue),c=We(i.doubleValue);return o===c?Na(o)===Na(c):isNaN(o)&&isNaN(c)}return!1}(t,e);case 9:return Os(t.arrayValue.values||[],e.arrayValue.values||[],dn);case 10:case 11:return function(s,i){const o=s.mapValue.fields||{},c=i.mapValue.fields||{};if(Op(o)!==Op(c))return!1;for(const l in o)if(o.hasOwnProperty(l)&&(c[l]===void 0||!dn(o[l],c[l])))return!1;return!0}(t,e);default:return de()}}function zi(t,e){return(t.values||[]).find(n=>dn(n,e))!==void 0}function Ns(t,e){if(t===e)return 0;const n=$r(t),r=$r(e);if(n!==r)return be(n,r);switch(n){case 0:case 9007199254740991:return 0;case 1:return be(t.booleanValue,e.booleanValue);case 2:return function(i,o){const c=We(i.integerValue||i.doubleValue),l=We(o.integerValue||o.doubleValue);return c<l?-1:c>l?1:c===l?0:isNaN(c)?isNaN(l)?0:-1:1}(t,e);case 3:return Dp(t.timestampValue,e.timestampValue);case 4:return Dp(Wi(t),Wi(e));case 5:return be(t.stringValue,e.stringValue);case 6:return function(i,o){const c=jr(i),l=jr(o);return c.compareTo(l)}(t.bytesValue,e.bytesValue);case 7:return function(i,o){const c=i.split("/"),l=o.split("/");for(let u=0;u<c.length&&u<l.length;u++){const h=be(c[u],l[u]);if(h!==0)return h}return be(c.length,l.length)}(t.referenceValue,e.referenceValue);case 8:return function(i,o){const c=be(We(i.latitude),We(o.latitude));return c!==0?c:be(We(i.longitude),We(o.longitude))}(t.geoPointValue,e.geoPointValue);case 9:return Vp(t.arrayValue,e.arrayValue);case 10:return function(i,o){var c,l,u,h;const d=i.fields||{},g=o.fields||{},m=(c=d.value)===null||c===void 0?void 0:c.arrayValue,P=(l=g.value)===null||l===void 0?void 0:l.arrayValue,k=be(((u=m==null?void 0:m.values)===null||u===void 0?void 0:u.length)||0,((h=P==null?void 0:P.values)===null||h===void 0?void 0:h.length)||0);return k!==0?k:Vp(m,P)}(t.mapValue,e.mapValue);case 11:return function(i,o){if(i===Ko.mapValue&&o===Ko.mapValue)return 0;if(i===Ko.mapValue)return 1;if(o===Ko.mapValue)return-1;const c=i.fields||{},l=Object.keys(c),u=o.fields||{},h=Object.keys(u);l.sort(),h.sort();for(let d=0;d<l.length&&d<h.length;++d){const g=be(l[d],h[d]);if(g!==0)return g;const m=Ns(c[l[d]],u[h[d]]);if(m!==0)return m}return be(l.length,h.length)}(t.mapValue,e.mapValue);default:throw de()}}function Dp(t,e){if(typeof t=="string"&&typeof e=="string"&&t.length===e.length)return be(t,e);const n=ur(t),r=ur(e),s=be(n.seconds,r.seconds);return s!==0?s:be(n.nanos,r.nanos)}function Vp(t,e){const n=t.values||[],r=e.values||[];for(let s=0;s<n.length&&s<r.length;++s){const i=Ns(n[s],r[s]);if(i)return i}return be(n.length,r.length)}function Ds(t){return Zl(t)}function Zl(t){return"nullValue"in t?"null":"booleanValue"in t?""+t.booleanValue:"integerValue"in t?""+t.integerValue:"doubleValue"in t?""+t.doubleValue:"timestampValue"in t?function(n){const r=ur(n);return`time(${r.seconds},${r.nanos})`}(t.timestampValue):"stringValue"in t?t.stringValue:"bytesValue"in t?function(n){return jr(n).toBase64()}(t.bytesValue):"referenceValue"in t?function(n){return ce.fromName(n).toString()}(t.referenceValue):"geoPointValue"in t?function(n){return`geo(${n.latitude},${n.longitude})`}(t.geoPointValue):"arrayValue"in t?function(n){let r="[",s=!0;for(const i of n.values||[])s?s=!1:r+=",",r+=Zl(i);return r+"]"}(t.arrayValue):"mapValue"in t?function(n){const r=Object.keys(n.fields||{}).sort();let s="{",i=!0;for(const o of r)i?i=!1:s+=",",s+=`${o}:${Zl(n.fields[o])}`;return s+"}"}(t.mapValue):de()}function eu(t){return!!t&&"integerValue"in t}function oh(t){return!!t&&"arrayValue"in t}function xp(t){return!!t&&"nullValue"in t}function Mp(t){return!!t&&"doubleValue"in t&&isNaN(Number(t.doubleValue))}function sa(t){return!!t&&"mapValue"in t}function sk(t){var e,n;return((n=(((e=t==null?void 0:t.mapValue)===null||e===void 0?void 0:e.fields)||{}).__type__)===null||n===void 0?void 0:n.stringValue)==="__vector__"}function Si(t){if(t.geoPointValue)return{geoPointValue:Object.assign({},t.geoPointValue)};if(t.timestampValue&&typeof t.timestampValue=="object")return{timestampValue:Object.assign({},t.timestampValue)};if(t.mapValue){const e={mapValue:{fields:{}}};return Ws(t.mapValue.fields,(n,r)=>e.mapValue.fields[n]=Si(r)),e}if(t.arrayValue){const e={arrayValue:{values:[]}};for(let n=0;n<(t.arrayValue.values||[]).length;++n)e.arrayValue.values[n]=Si(t.arrayValue.values[n]);return e}return Object.assign({},t)}function ik(t){return(((t.mapValue||{}).fields||{}).__type__||{}).stringValue==="__max__"}/**
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
 */class Mt{constructor(e){this.value=e}static empty(){return new Mt({mapValue:{}})}field(e){if(e.isEmpty())return this.value;{let n=this.value;for(let r=0;r<e.length-1;++r)if(n=(n.mapValue.fields||{})[e.get(r)],!sa(n))return null;return n=(n.mapValue.fields||{})[e.lastSegment()],n||null}}set(e,n){this.getFieldsMap(e.popLast())[e.lastSegment()]=Si(n)}setAll(e){let n=ot.emptyPath(),r={},s=[];e.forEach((o,c)=>{if(!n.isImmediateParentOf(c)){const l=this.getFieldsMap(n);this.applyChanges(l,r,s),r={},s=[],n=c.popLast()}o?r[c.lastSegment()]=Si(o):s.push(c.lastSegment())});const i=this.getFieldsMap(n);this.applyChanges(i,r,s)}delete(e){const n=this.field(e.popLast());sa(n)&&n.mapValue.fields&&delete n.mapValue.fields[e.lastSegment()]}isEqual(e){return dn(this.value,e.value)}getFieldsMap(e){let n=this.value;n.mapValue.fields||(n.mapValue={fields:{}});for(let r=0;r<e.length;++r){let s=n.mapValue.fields[e.get(r)];sa(s)&&s.mapValue.fields||(s={mapValue:{fields:{}}},n.mapValue.fields[e.get(r)]=s),n=s}return n.mapValue.fields}applyChanges(e,n,r){Ws(n,(s,i)=>e[s]=i);for(const s of r)delete e[s]}clone(){return new Mt(Si(this.value))}}function Ny(t){const e=[];return Ws(t.fields,(n,r)=>{const s=new ot([n]);if(sa(r)){const i=Ny(r.mapValue).fields;if(i.length===0)e.push(s);else for(const o of i)e.push(s.child(o))}else e.push(s)}),new zt(e)}/**
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
 */class mt{constructor(e,n,r,s,i,o,c){this.key=e,this.documentType=n,this.version=r,this.readTime=s,this.createTime=i,this.data=o,this.documentState=c}static newInvalidDocument(e){return new mt(e,0,ge.min(),ge.min(),ge.min(),Mt.empty(),0)}static newFoundDocument(e,n,r,s){return new mt(e,1,n,ge.min(),r,s,0)}static newNoDocument(e,n){return new mt(e,2,n,ge.min(),ge.min(),Mt.empty(),0)}static newUnknownDocument(e,n){return new mt(e,3,n,ge.min(),ge.min(),Mt.empty(),2)}convertToFoundDocument(e,n){return!this.createTime.isEqual(ge.min())||this.documentType!==2&&this.documentType!==0||(this.createTime=e),this.version=e,this.documentType=1,this.data=n,this.documentState=0,this}convertToNoDocument(e){return this.version=e,this.documentType=2,this.data=Mt.empty(),this.documentState=0,this}convertToUnknownDocument(e){return this.version=e,this.documentType=3,this.data=Mt.empty(),this.documentState=2,this}setHasCommittedMutations(){return this.documentState=2,this}setHasLocalMutations(){return this.documentState=1,this.version=ge.min(),this}setReadTime(e){return this.readTime=e,this}get hasLocalMutations(){return this.documentState===1}get hasCommittedMutations(){return this.documentState===2}get hasPendingWrites(){return this.hasLocalMutations||this.hasCommittedMutations}isValidDocument(){return this.documentType!==0}isFoundDocument(){return this.documentType===1}isNoDocument(){return this.documentType===2}isUnknownDocument(){return this.documentType===3}isEqual(e){return e instanceof mt&&this.key.isEqual(e.key)&&this.version.isEqual(e.version)&&this.documentType===e.documentType&&this.documentState===e.documentState&&this.data.isEqual(e.data)}mutableCopy(){return new mt(this.key,this.documentType,this.version,this.readTime,this.createTime,this.data.clone(),this.documentState)}toString(){return`Document(${this.key}, ${this.version}, ${JSON.stringify(this.data.value)}, {createTime: ${this.createTime}}), {documentType: ${this.documentType}}), {documentState: ${this.documentState}})`}}/**
 * @license
 * Copyright 2022 Google LLC
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
 */class Da{constructor(e,n){this.position=e,this.inclusive=n}}function Lp(t,e,n){let r=0;for(let s=0;s<t.position.length;s++){const i=e[s],o=t.position[s];if(i.field.isKeyField()?r=ce.comparator(ce.fromName(o.referenceValue),n.key):r=Ns(o,n.data.field(i.field)),i.dir==="desc"&&(r*=-1),r!==0)break}return r}function Fp(t,e){if(t===null)return e===null;if(e===null||t.inclusive!==e.inclusive||t.position.length!==e.position.length)return!1;for(let n=0;n<t.position.length;n++)if(!dn(t.position[n],e.position[n]))return!1;return!0}/**
 * @license
 * Copyright 2022 Google LLC
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
 */class Va{constructor(e,n="asc"){this.field=e,this.dir=n}}function ok(t,e){return t.dir===e.dir&&t.field.isEqual(e.field)}/**
 * @license
 * Copyright 2022 Google LLC
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
 */class Dy{}class Qe extends Dy{constructor(e,n,r){super(),this.field=e,this.op=n,this.value=r}static create(e,n,r){return e.isKeyField()?n==="in"||n==="not-in"?this.createKeyFieldInFilter(e,n,r):new ck(e,n,r):n==="array-contains"?new hk(e,r):n==="in"?new fk(e,r):n==="not-in"?new dk(e,r):n==="array-contains-any"?new pk(e,r):new Qe(e,n,r)}static createKeyFieldInFilter(e,n,r){return n==="in"?new lk(e,r):new uk(e,r)}matches(e){const n=e.data.field(this.field);return this.op==="!="?n!==null&&this.matchesComparison(Ns(n,this.value)):n!==null&&$r(this.value)===$r(n)&&this.matchesComparison(Ns(n,this.value))}matchesComparison(e){switch(this.op){case"<":return e<0;case"<=":return e<=0;case"==":return e===0;case"!=":return e!==0;case">":return e>0;case">=":return e>=0;default:return de()}}isInequality(){return["<","<=",">",">=","!=","not-in"].indexOf(this.op)>=0}getFlattenedFilters(){return[this]}getFilters(){return[this]}}class pn extends Dy{constructor(e,n){super(),this.filters=e,this.op=n,this.ae=null}static create(e,n){return new pn(e,n)}matches(e){return Vy(this)?this.filters.find(n=>!n.matches(e))===void 0:this.filters.find(n=>n.matches(e))!==void 0}getFlattenedFilters(){return this.ae!==null||(this.ae=this.filters.reduce((e,n)=>e.concat(n.getFlattenedFilters()),[])),this.ae}getFilters(){return Object.assign([],this.filters)}}function Vy(t){return t.op==="and"}function xy(t){return ak(t)&&Vy(t)}function ak(t){for(const e of t.filters)if(e instanceof pn)return!1;return!0}function tu(t){if(t instanceof Qe)return t.field.canonicalString()+t.op.toString()+Ds(t.value);if(xy(t))return t.filters.map(e=>tu(e)).join(",");{const e=t.filters.map(n=>tu(n)).join(",");return`${t.op}(${e})`}}function My(t,e){return t instanceof Qe?function(r,s){return s instanceof Qe&&r.op===s.op&&r.field.isEqual(s.field)&&dn(r.value,s.value)}(t,e):t instanceof pn?function(r,s){return s instanceof pn&&r.op===s.op&&r.filters.length===s.filters.length?r.filters.reduce((i,o,c)=>i&&My(o,s.filters[c]),!0):!1}(t,e):void de()}function Ly(t){return t instanceof Qe?function(n){return`${n.field.canonicalString()} ${n.op} ${Ds(n.value)}`}(t):t instanceof pn?function(n){return n.op.toString()+" {"+n.getFilters().map(Ly).join(" ,")+"}"}(t):"Filter"}class ck extends Qe{constructor(e,n,r){super(e,n,r),this.key=ce.fromName(r.referenceValue)}matches(e){const n=ce.comparator(e.key,this.key);return this.matchesComparison(n)}}class lk extends Qe{constructor(e,n){super(e,"in",n),this.keys=Fy("in",n)}matches(e){return this.keys.some(n=>n.isEqual(e.key))}}class uk extends Qe{constructor(e,n){super(e,"not-in",n),this.keys=Fy("not-in",n)}matches(e){return!this.keys.some(n=>n.isEqual(e.key))}}function Fy(t,e){var n;return(((n=e.arrayValue)===null||n===void 0?void 0:n.values)||[]).map(r=>ce.fromName(r.referenceValue))}class hk extends Qe{constructor(e,n){super(e,"array-contains",n)}matches(e){const n=e.data.field(this.field);return oh(n)&&zi(n.arrayValue,this.value)}}class fk extends Qe{constructor(e,n){super(e,"in",n)}matches(e){const n=e.data.field(this.field);return n!==null&&zi(this.value.arrayValue,n)}}class dk extends Qe{constructor(e,n){super(e,"not-in",n)}matches(e){if(zi(this.value.arrayValue,{nullValue:"NULL_VALUE"}))return!1;const n=e.data.field(this.field);return n!==null&&!zi(this.value.arrayValue,n)}}class pk extends Qe{constructor(e,n){super(e,"array-contains-any",n)}matches(e){const n=e.data.field(this.field);return!(!oh(n)||!n.arrayValue.values)&&n.arrayValue.values.some(r=>zi(this.value.arrayValue,r))}}/**
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
 */class gk{constructor(e,n=null,r=[],s=[],i=null,o=null,c=null){this.path=e,this.collectionGroup=n,this.orderBy=r,this.filters=s,this.limit=i,this.startAt=o,this.endAt=c,this.ue=null}}function Up(t,e=null,n=[],r=[],s=null,i=null,o=null){return new gk(t,e,n,r,s,i,o)}function ah(t){const e=me(t);if(e.ue===null){let n=e.path.canonicalString();e.collectionGroup!==null&&(n+="|cg:"+e.collectionGroup),n+="|f:",n+=e.filters.map(r=>tu(r)).join(","),n+="|ob:",n+=e.orderBy.map(r=>function(i){return i.field.canonicalString()+i.dir}(r)).join(","),uc(e.limit)||(n+="|l:",n+=e.limit),e.startAt&&(n+="|lb:",n+=e.startAt.inclusive?"b:":"a:",n+=e.startAt.position.map(r=>Ds(r)).join(",")),e.endAt&&(n+="|ub:",n+=e.endAt.inclusive?"a:":"b:",n+=e.endAt.position.map(r=>Ds(r)).join(",")),e.ue=n}return e.ue}function ch(t,e){if(t.limit!==e.limit||t.orderBy.length!==e.orderBy.length)return!1;for(let n=0;n<t.orderBy.length;n++)if(!ok(t.orderBy[n],e.orderBy[n]))return!1;if(t.filters.length!==e.filters.length)return!1;for(let n=0;n<t.filters.length;n++)if(!My(t.filters[n],e.filters[n]))return!1;return t.collectionGroup===e.collectionGroup&&!!t.path.isEqual(e.path)&&!!Fp(t.startAt,e.startAt)&&Fp(t.endAt,e.endAt)}function nu(t){return ce.isDocumentKey(t.path)&&t.collectionGroup===null&&t.filters.length===0}/**
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
 */class hc{constructor(e,n=null,r=[],s=[],i=null,o="F",c=null,l=null){this.path=e,this.collectionGroup=n,this.explicitOrderBy=r,this.filters=s,this.limit=i,this.limitType=o,this.startAt=c,this.endAt=l,this.ce=null,this.le=null,this.he=null,this.startAt,this.endAt}}function mk(t,e,n,r,s,i,o,c){return new hc(t,e,n,r,s,i,o,c)}function lh(t){return new hc(t)}function Bp(t){return t.filters.length===0&&t.limit===null&&t.startAt==null&&t.endAt==null&&(t.explicitOrderBy.length===0||t.explicitOrderBy.length===1&&t.explicitOrderBy[0].field.isKeyField())}function _k(t){return t.collectionGroup!==null}function Pi(t){const e=me(t);if(e.ce===null){e.ce=[];const n=new Set;for(const i of e.explicitOrderBy)e.ce.push(i),n.add(i.field.canonicalString());const r=e.explicitOrderBy.length>0?e.explicitOrderBy[e.explicitOrderBy.length-1].dir:"asc";(function(o){let c=new at(ot.comparator);return o.filters.forEach(l=>{l.getFlattenedFilters().forEach(u=>{u.isInequality()&&(c=c.add(u.field))})}),c})(e).forEach(i=>{n.has(i.canonicalString())||i.isKeyField()||e.ce.push(new Va(i,r))}),n.has(ot.keyField().canonicalString())||e.ce.push(new Va(ot.keyField(),r))}return e.ce}function un(t){const e=me(t);return e.le||(e.le=yk(e,Pi(t))),e.le}function yk(t,e){if(t.limitType==="F")return Up(t.path,t.collectionGroup,e,t.filters,t.limit,t.startAt,t.endAt);{e=e.map(s=>{const i=s.dir==="desc"?"asc":"desc";return new Va(s.field,i)});const n=t.endAt?new Da(t.endAt.position,t.endAt.inclusive):null,r=t.startAt?new Da(t.startAt.position,t.startAt.inclusive):null;return Up(t.path,t.collectionGroup,e,t.filters,t.limit,n,r)}}function ru(t,e,n){return new hc(t.path,t.collectionGroup,t.explicitOrderBy.slice(),t.filters.slice(),e,n,t.startAt,t.endAt)}function fc(t,e){return ch(un(t),un(e))&&t.limitType===e.limitType}function Uy(t){return`${ah(un(t))}|lt:${t.limitType}`}function is(t){return`Query(target=${function(n){let r=n.path.canonicalString();return n.collectionGroup!==null&&(r+=" collectionGroup="+n.collectionGroup),n.filters.length>0&&(r+=`, filters: [${n.filters.map(s=>Ly(s)).join(", ")}]`),uc(n.limit)||(r+=", limit: "+n.limit),n.orderBy.length>0&&(r+=`, orderBy: [${n.orderBy.map(s=>function(o){return`${o.field.canonicalString()} (${o.dir})`}(s)).join(", ")}]`),n.startAt&&(r+=", startAt: ",r+=n.startAt.inclusive?"b:":"a:",r+=n.startAt.position.map(s=>Ds(s)).join(",")),n.endAt&&(r+=", endAt: ",r+=n.endAt.inclusive?"a:":"b:",r+=n.endAt.position.map(s=>Ds(s)).join(",")),`Target(${r})`}(un(t))}; limitType=${t.limitType})`}function dc(t,e){return e.isFoundDocument()&&function(r,s){const i=s.key.path;return r.collectionGroup!==null?s.key.hasCollectionId(r.collectionGroup)&&r.path.isPrefixOf(i):ce.isDocumentKey(r.path)?r.path.isEqual(i):r.path.isImmediateParentOf(i)}(t,e)&&function(r,s){for(const i of Pi(r))if(!i.field.isKeyField()&&s.data.field(i.field)===null)return!1;return!0}(t,e)&&function(r,s){for(const i of r.filters)if(!i.matches(s))return!1;return!0}(t,e)&&function(r,s){return!(r.startAt&&!function(o,c,l){const u=Lp(o,c,l);return o.inclusive?u<=0:u<0}(r.startAt,Pi(r),s)||r.endAt&&!function(o,c,l){const u=Lp(o,c,l);return o.inclusive?u>=0:u>0}(r.endAt,Pi(r),s))}(t,e)}function vk(t){return t.collectionGroup||(t.path.length%2==1?t.path.lastSegment():t.path.get(t.path.length-2))}function By(t){return(e,n)=>{let r=!1;for(const s of Pi(t)){const i=Ek(s,e,n);if(i!==0)return i;r=r||s.field.isKeyField()}return 0}}function Ek(t,e,n){const r=t.field.isKeyField()?ce.comparator(e.key,n.key):function(i,o,c){const l=o.data.field(i),u=c.data.field(i);return l!==null&&u!==null?Ns(l,u):de()}(t.field,e,n);switch(t.dir){case"asc":return r;case"desc":return-1*r;default:return de()}}/**
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
 */class Ks{constructor(e,n){this.mapKeyFn=e,this.equalsFn=n,this.inner={},this.innerSize=0}get(e){const n=this.mapKeyFn(e),r=this.inner[n];if(r!==void 0){for(const[s,i]of r)if(this.equalsFn(s,e))return i}}has(e){return this.get(e)!==void 0}set(e,n){const r=this.mapKeyFn(e),s=this.inner[r];if(s===void 0)return this.inner[r]=[[e,n]],void this.innerSize++;for(let i=0;i<s.length;i++)if(this.equalsFn(s[i][0],e))return void(s[i]=[e,n]);s.push([e,n]),this.innerSize++}delete(e){const n=this.mapKeyFn(e),r=this.inner[n];if(r===void 0)return!1;for(let s=0;s<r.length;s++)if(this.equalsFn(r[s][0],e))return r.length===1?delete this.inner[n]:r.splice(s,1),this.innerSize--,!0;return!1}forEach(e){Ws(this.inner,(n,r)=>{for(const[s,i]of r)e(s,i)})}isEmpty(){return ky(this.inner)}size(){return this.innerSize}}/**
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
 */const Tk=new je(ce.comparator);function Nn(){return Tk}const jy=new je(ce.comparator);function mi(...t){let e=jy;for(const n of t)e=e.insert(n.key,n);return e}function $y(t){let e=jy;return t.forEach((n,r)=>e=e.insert(n,r.overlayedDocument)),e}function Cr(){return Ci()}function Hy(){return Ci()}function Ci(){return new Ks(t=>t.toString(),(t,e)=>t.isEqual(e))}const wk=new je(ce.comparator),Ik=new at(ce.comparator);function _e(...t){let e=Ik;for(const n of t)e=e.add(n);return e}const bk=new at(be);function Ak(){return bk}/**
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
 */function uh(t,e){if(t.useProto3Json){if(isNaN(e))return{doubleValue:"NaN"};if(e===1/0)return{doubleValue:"Infinity"};if(e===-1/0)return{doubleValue:"-Infinity"}}return{doubleValue:Na(e)?"-0":e}}function qy(t){return{integerValue:""+t}}function Rk(t,e){return tk(e)?qy(e):uh(t,e)}/**
 * @license
 * Copyright 2018 Google LLC
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
 */class pc{constructor(){this._=void 0}}function Sk(t,e,n){return t instanceof xa?function(s,i){const o={fields:{__type__:{stringValue:"server_timestamp"},__local_write_time__:{timestampValue:{seconds:s.seconds,nanos:s.nanoseconds}}}};return i&&sh(i)&&(i=ih(i)),i&&(o.fields.__previous_value__=i),{mapValue:o}}(n,e):t instanceof Gi?Ky(t,e):t instanceof Qi?zy(t,e):function(s,i){const o=Wy(s,i),c=jp(o)+jp(s.Pe);return eu(o)&&eu(s.Pe)?qy(c):uh(s.serializer,c)}(t,e)}function Pk(t,e,n){return t instanceof Gi?Ky(t,e):t instanceof Qi?zy(t,e):n}function Wy(t,e){return t instanceof Ma?function(r){return eu(r)||function(i){return!!i&&"doubleValue"in i}(r)}(e)?e:{integerValue:0}:null}class xa extends pc{}class Gi extends pc{constructor(e){super(),this.elements=e}}function Ky(t,e){const n=Gy(e);for(const r of t.elements)n.some(s=>dn(s,r))||n.push(r);return{arrayValue:{values:n}}}class Qi extends pc{constructor(e){super(),this.elements=e}}function zy(t,e){let n=Gy(e);for(const r of t.elements)n=n.filter(s=>!dn(s,r));return{arrayValue:{values:n}}}class Ma extends pc{constructor(e,n){super(),this.serializer=e,this.Pe=n}}function jp(t){return We(t.integerValue||t.doubleValue)}function Gy(t){return oh(t)&&t.arrayValue.values?t.arrayValue.values.slice():[]}function Ck(t,e){return t.field.isEqual(e.field)&&function(r,s){return r instanceof Gi&&s instanceof Gi||r instanceof Qi&&s instanceof Qi?Os(r.elements,s.elements,dn):r instanceof Ma&&s instanceof Ma?dn(r.Pe,s.Pe):r instanceof xa&&s instanceof xa}(t.transform,e.transform)}class kk{constructor(e,n){this.version=e,this.transformResults=n}}class Sn{constructor(e,n){this.updateTime=e,this.exists=n}static none(){return new Sn}static exists(e){return new Sn(void 0,e)}static updateTime(e){return new Sn(e)}get isNone(){return this.updateTime===void 0&&this.exists===void 0}isEqual(e){return this.exists===e.exists&&(this.updateTime?!!e.updateTime&&this.updateTime.isEqual(e.updateTime):!e.updateTime)}}function ia(t,e){return t.updateTime!==void 0?e.isFoundDocument()&&e.version.isEqual(t.updateTime):t.exists===void 0||t.exists===e.isFoundDocument()}class gc{}function Qy(t,e){if(!t.hasLocalMutations||e&&e.fields.length===0)return null;if(e===null)return t.isNoDocument()?new Xy(t.key,Sn.none()):new uo(t.key,t.data,Sn.none());{const n=t.data,r=Mt.empty();let s=new at(ot.comparator);for(let i of e.fields)if(!s.has(i)){let o=n.field(i);o===null&&i.length>1&&(i=i.popLast(),o=n.field(i)),o===null?r.delete(i):r.set(i,o),s=s.add(i)}return new zr(t.key,r,new zt(s.toArray()),Sn.none())}}function Ok(t,e,n){t instanceof uo?function(s,i,o){const c=s.value.clone(),l=Hp(s.fieldTransforms,i,o.transformResults);c.setAll(l),i.convertToFoundDocument(o.version,c).setHasCommittedMutations()}(t,e,n):t instanceof zr?function(s,i,o){if(!ia(s.precondition,i))return void i.convertToUnknownDocument(o.version);const c=Hp(s.fieldTransforms,i,o.transformResults),l=i.data;l.setAll(Jy(s)),l.setAll(c),i.convertToFoundDocument(o.version,l).setHasCommittedMutations()}(t,e,n):function(s,i,o){i.convertToNoDocument(o.version).setHasCommittedMutations()}(0,e,n)}function ki(t,e,n,r){return t instanceof uo?function(i,o,c,l){if(!ia(i.precondition,o))return c;const u=i.value.clone(),h=qp(i.fieldTransforms,l,o);return u.setAll(h),o.convertToFoundDocument(o.version,u).setHasLocalMutations(),null}(t,e,n,r):t instanceof zr?function(i,o,c,l){if(!ia(i.precondition,o))return c;const u=qp(i.fieldTransforms,l,o),h=o.data;return h.setAll(Jy(i)),h.setAll(u),o.convertToFoundDocument(o.version,h).setHasLocalMutations(),c===null?null:c.unionWith(i.fieldMask.fields).unionWith(i.fieldTransforms.map(d=>d.field))}(t,e,n,r):function(i,o,c){return ia(i.precondition,o)?(o.convertToNoDocument(o.version).setHasLocalMutations(),null):c}(t,e,n)}function Nk(t,e){let n=null;for(const r of t.fieldTransforms){const s=e.data.field(r.field),i=Wy(r.transform,s||null);i!=null&&(n===null&&(n=Mt.empty()),n.set(r.field,i))}return n||null}function $p(t,e){return t.type===e.type&&!!t.key.isEqual(e.key)&&!!t.precondition.isEqual(e.precondition)&&!!function(r,s){return r===void 0&&s===void 0||!(!r||!s)&&Os(r,s,(i,o)=>Ck(i,o))}(t.fieldTransforms,e.fieldTransforms)&&(t.type===0?t.value.isEqual(e.value):t.type!==1||t.data.isEqual(e.data)&&t.fieldMask.isEqual(e.fieldMask))}class uo extends gc{constructor(e,n,r,s=[]){super(),this.key=e,this.value=n,this.precondition=r,this.fieldTransforms=s,this.type=0}getFieldMask(){return null}}class zr extends gc{constructor(e,n,r,s,i=[]){super(),this.key=e,this.data=n,this.fieldMask=r,this.precondition=s,this.fieldTransforms=i,this.type=1}getFieldMask(){return this.fieldMask}}function Jy(t){const e=new Map;return t.fieldMask.fields.forEach(n=>{if(!n.isEmpty()){const r=t.data.field(n);e.set(n,r)}}),e}function Hp(t,e,n){const r=new Map;Ve(t.length===n.length);for(let s=0;s<n.length;s++){const i=t[s],o=i.transform,c=e.data.field(i.field);r.set(i.field,Pk(o,c,n[s]))}return r}function qp(t,e,n){const r=new Map;for(const s of t){const i=s.transform,o=n.data.field(s.field);r.set(s.field,Sk(i,o,e))}return r}class Xy extends gc{constructor(e,n){super(),this.key=e,this.precondition=n,this.type=2,this.fieldTransforms=[]}getFieldMask(){return null}}class Dk extends gc{constructor(e,n){super(),this.key=e,this.precondition=n,this.type=3,this.fieldTransforms=[]}getFieldMask(){return null}}/**
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
 */class Vk{constructor(e,n,r,s){this.batchId=e,this.localWriteTime=n,this.baseMutations=r,this.mutations=s}applyToRemoteDocument(e,n){const r=n.mutationResults;for(let s=0;s<this.mutations.length;s++){const i=this.mutations[s];i.key.isEqual(e.key)&&Ok(i,e,r[s])}}applyToLocalView(e,n){for(const r of this.baseMutations)r.key.isEqual(e.key)&&(n=ki(r,e,n,this.localWriteTime));for(const r of this.mutations)r.key.isEqual(e.key)&&(n=ki(r,e,n,this.localWriteTime));return n}applyToLocalDocumentSet(e,n){const r=Hy();return this.mutations.forEach(s=>{const i=e.get(s.key),o=i.overlayedDocument;let c=this.applyToLocalView(o,i.mutatedFields);c=n.has(s.key)?null:c;const l=Qy(o,c);l!==null&&r.set(s.key,l),o.isValidDocument()||o.convertToNoDocument(ge.min())}),r}keys(){return this.mutations.reduce((e,n)=>e.add(n.key),_e())}isEqual(e){return this.batchId===e.batchId&&Os(this.mutations,e.mutations,(n,r)=>$p(n,r))&&Os(this.baseMutations,e.baseMutations,(n,r)=>$p(n,r))}}class hh{constructor(e,n,r,s){this.batch=e,this.commitVersion=n,this.mutationResults=r,this.docVersions=s}static from(e,n,r){Ve(e.mutations.length===r.length);let s=function(){return wk}();const i=e.mutations;for(let o=0;o<i.length;o++)s=s.insert(i[o].key,r[o].version);return new hh(e,n,r,s)}}/**
 * @license
 * Copyright 2022 Google LLC
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
 */class xk{constructor(e,n){this.largestBatchId=e,this.mutation=n}getKey(){return this.mutation.key}isEqual(e){return e!==null&&this.mutation===e.mutation}toString(){return`Overlay{
      largestBatchId: ${this.largestBatchId},
      mutation: ${this.mutation.toString()}
    }`}}/**
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
 */class Mk{constructor(e,n){this.count=e,this.unchangedNames=n}}/**
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
 */var Ke,Te;function Lk(t){switch(t){default:return de();case W.CANCELLED:case W.UNKNOWN:case W.DEADLINE_EXCEEDED:case W.RESOURCE_EXHAUSTED:case W.INTERNAL:case W.UNAVAILABLE:case W.UNAUTHENTICATED:return!1;case W.INVALID_ARGUMENT:case W.NOT_FOUND:case W.ALREADY_EXISTS:case W.PERMISSION_DENIED:case W.FAILED_PRECONDITION:case W.ABORTED:case W.OUT_OF_RANGE:case W.UNIMPLEMENTED:case W.DATA_LOSS:return!0}}function Yy(t){if(t===void 0)return On("GRPC error has no .code"),W.UNKNOWN;switch(t){case Ke.OK:return W.OK;case Ke.CANCELLED:return W.CANCELLED;case Ke.UNKNOWN:return W.UNKNOWN;case Ke.DEADLINE_EXCEEDED:return W.DEADLINE_EXCEEDED;case Ke.RESOURCE_EXHAUSTED:return W.RESOURCE_EXHAUSTED;case Ke.INTERNAL:return W.INTERNAL;case Ke.UNAVAILABLE:return W.UNAVAILABLE;case Ke.UNAUTHENTICATED:return W.UNAUTHENTICATED;case Ke.INVALID_ARGUMENT:return W.INVALID_ARGUMENT;case Ke.NOT_FOUND:return W.NOT_FOUND;case Ke.ALREADY_EXISTS:return W.ALREADY_EXISTS;case Ke.PERMISSION_DENIED:return W.PERMISSION_DENIED;case Ke.FAILED_PRECONDITION:return W.FAILED_PRECONDITION;case Ke.ABORTED:return W.ABORTED;case Ke.OUT_OF_RANGE:return W.OUT_OF_RANGE;case Ke.UNIMPLEMENTED:return W.UNIMPLEMENTED;case Ke.DATA_LOSS:return W.DATA_LOSS;default:return de()}}(Te=Ke||(Ke={}))[Te.OK=0]="OK",Te[Te.CANCELLED=1]="CANCELLED",Te[Te.UNKNOWN=2]="UNKNOWN",Te[Te.INVALID_ARGUMENT=3]="INVALID_ARGUMENT",Te[Te.DEADLINE_EXCEEDED=4]="DEADLINE_EXCEEDED",Te[Te.NOT_FOUND=5]="NOT_FOUND",Te[Te.ALREADY_EXISTS=6]="ALREADY_EXISTS",Te[Te.PERMISSION_DENIED=7]="PERMISSION_DENIED",Te[Te.UNAUTHENTICATED=16]="UNAUTHENTICATED",Te[Te.RESOURCE_EXHAUSTED=8]="RESOURCE_EXHAUSTED",Te[Te.FAILED_PRECONDITION=9]="FAILED_PRECONDITION",Te[Te.ABORTED=10]="ABORTED",Te[Te.OUT_OF_RANGE=11]="OUT_OF_RANGE",Te[Te.UNIMPLEMENTED=12]="UNIMPLEMENTED",Te[Te.INTERNAL=13]="INTERNAL",Te[Te.UNAVAILABLE=14]="UNAVAILABLE",Te[Te.DATA_LOSS=15]="DATA_LOSS";/**
 * @license
 * Copyright 2023 Google LLC
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
 */function Fk(){return new TextEncoder}/**
 * @license
 * Copyright 2022 Google LLC
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
 */const Uk=new Mr([4294967295,4294967295],0);function Wp(t){const e=Fk().encode(t),n=new Ty;return n.update(e),new Uint8Array(n.digest())}function Kp(t){const e=new DataView(t.buffer),n=e.getUint32(0,!0),r=e.getUint32(4,!0),s=e.getUint32(8,!0),i=e.getUint32(12,!0);return[new Mr([n,r],0),new Mr([s,i],0)]}class fh{constructor(e,n,r){if(this.bitmap=e,this.padding=n,this.hashCount=r,n<0||n>=8)throw new _i(`Invalid padding: ${n}`);if(r<0)throw new _i(`Invalid hash count: ${r}`);if(e.length>0&&this.hashCount===0)throw new _i(`Invalid hash count: ${r}`);if(e.length===0&&n!==0)throw new _i(`Invalid padding when bitmap length is 0: ${n}`);this.Ie=8*e.length-n,this.Te=Mr.fromNumber(this.Ie)}Ee(e,n,r){let s=e.add(n.multiply(Mr.fromNumber(r)));return s.compare(Uk)===1&&(s=new Mr([s.getBits(0),s.getBits(1)],0)),s.modulo(this.Te).toNumber()}de(e){return(this.bitmap[Math.floor(e/8)]&1<<e%8)!=0}mightContain(e){if(this.Ie===0)return!1;const n=Wp(e),[r,s]=Kp(n);for(let i=0;i<this.hashCount;i++){const o=this.Ee(r,s,i);if(!this.de(o))return!1}return!0}static create(e,n,r){const s=e%8==0?0:8-e%8,i=new Uint8Array(Math.ceil(e/8)),o=new fh(i,s,n);return r.forEach(c=>o.insert(c)),o}insert(e){if(this.Ie===0)return;const n=Wp(e),[r,s]=Kp(n);for(let i=0;i<this.hashCount;i++){const o=this.Ee(r,s,i);this.Ae(o)}}Ae(e){const n=Math.floor(e/8),r=e%8;this.bitmap[n]|=1<<r}}class _i extends Error{constructor(){super(...arguments),this.name="BloomFilterError"}}/**
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
 */class mc{constructor(e,n,r,s,i){this.snapshotVersion=e,this.targetChanges=n,this.targetMismatches=r,this.documentUpdates=s,this.resolvedLimboDocuments=i}static createSynthesizedRemoteEventForCurrentChange(e,n,r){const s=new Map;return s.set(e,ho.createSynthesizedTargetChangeForCurrentChange(e,n,r)),new mc(ge.min(),s,new je(be),Nn(),_e())}}class ho{constructor(e,n,r,s,i){this.resumeToken=e,this.current=n,this.addedDocuments=r,this.modifiedDocuments=s,this.removedDocuments=i}static createSynthesizedTargetChangeForCurrentChange(e,n,r){return new ho(r,n,_e(),_e(),_e())}}/**
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
 */class oa{constructor(e,n,r,s){this.Re=e,this.removedTargetIds=n,this.key=r,this.Ve=s}}class Zy{constructor(e,n){this.targetId=e,this.me=n}}class ev{constructor(e,n,r=ct.EMPTY_BYTE_STRING,s=null){this.state=e,this.targetIds=n,this.resumeToken=r,this.cause=s}}class zp{constructor(){this.fe=0,this.ge=Qp(),this.pe=ct.EMPTY_BYTE_STRING,this.ye=!1,this.we=!0}get current(){return this.ye}get resumeToken(){return this.pe}get Se(){return this.fe!==0}get be(){return this.we}De(e){e.approximateByteSize()>0&&(this.we=!0,this.pe=e)}ve(){let e=_e(),n=_e(),r=_e();return this.ge.forEach((s,i)=>{switch(i){case 0:e=e.add(s);break;case 2:n=n.add(s);break;case 1:r=r.add(s);break;default:de()}}),new ho(this.pe,this.ye,e,n,r)}Ce(){this.we=!1,this.ge=Qp()}Fe(e,n){this.we=!0,this.ge=this.ge.insert(e,n)}Me(e){this.we=!0,this.ge=this.ge.remove(e)}xe(){this.fe+=1}Oe(){this.fe-=1,Ve(this.fe>=0)}Ne(){this.we=!0,this.ye=!0}}class Bk{constructor(e){this.Le=e,this.Be=new Map,this.ke=Nn(),this.qe=Gp(),this.Qe=new je(be)}Ke(e){for(const n of e.Re)e.Ve&&e.Ve.isFoundDocument()?this.$e(n,e.Ve):this.Ue(n,e.key,e.Ve);for(const n of e.removedTargetIds)this.Ue(n,e.key,e.Ve)}We(e){this.forEachTarget(e,n=>{const r=this.Ge(n);switch(e.state){case 0:this.ze(n)&&r.De(e.resumeToken);break;case 1:r.Oe(),r.Se||r.Ce(),r.De(e.resumeToken);break;case 2:r.Oe(),r.Se||this.removeTarget(n);break;case 3:this.ze(n)&&(r.Ne(),r.De(e.resumeToken));break;case 4:this.ze(n)&&(this.je(n),r.De(e.resumeToken));break;default:de()}})}forEachTarget(e,n){e.targetIds.length>0?e.targetIds.forEach(n):this.Be.forEach((r,s)=>{this.ze(s)&&n(s)})}He(e){const n=e.targetId,r=e.me.count,s=this.Je(n);if(s){const i=s.target;if(nu(i))if(r===0){const o=new ce(i.path);this.Ue(n,o,mt.newNoDocument(o,ge.min()))}else Ve(r===1);else{const o=this.Ye(n);if(o!==r){const c=this.Ze(e),l=c?this.Xe(c,e,o):1;if(l!==0){this.je(n);const u=l===2?"TargetPurposeExistenceFilterMismatchBloom":"TargetPurposeExistenceFilterMismatch";this.Qe=this.Qe.insert(n,u)}}}}}Ze(e){const n=e.me.unchangedNames;if(!n||!n.bits)return null;const{bits:{bitmap:r="",padding:s=0},hashCount:i=0}=n;let o,c;try{o=jr(r).toUint8Array()}catch(l){if(l instanceof Oy)return ks("Decoding the base64 bloom filter in existence filter failed ("+l.message+"); ignoring the bloom filter and falling back to full re-query."),null;throw l}try{c=new fh(o,s,i)}catch(l){return ks(l instanceof _i?"BloomFilter error: ":"Applying bloom filter failed: ",l),null}return c.Ie===0?null:c}Xe(e,n,r){return n.me.count===r-this.nt(e,n.targetId)?0:2}nt(e,n){const r=this.Le.getRemoteKeysForTarget(n);let s=0;return r.forEach(i=>{const o=this.Le.tt(),c=`projects/${o.projectId}/databases/${o.database}/documents/${i.path.canonicalString()}`;e.mightContain(c)||(this.Ue(n,i,null),s++)}),s}rt(e){const n=new Map;this.Be.forEach((i,o)=>{const c=this.Je(o);if(c){if(i.current&&nu(c.target)){const l=new ce(c.target.path);this.ke.get(l)!==null||this.it(o,l)||this.Ue(o,l,mt.newNoDocument(l,e))}i.be&&(n.set(o,i.ve()),i.Ce())}});let r=_e();this.qe.forEach((i,o)=>{let c=!0;o.forEachWhile(l=>{const u=this.Je(l);return!u||u.purpose==="TargetPurposeLimboResolution"||(c=!1,!1)}),c&&(r=r.add(i))}),this.ke.forEach((i,o)=>o.setReadTime(e));const s=new mc(e,n,this.Qe,this.ke,r);return this.ke=Nn(),this.qe=Gp(),this.Qe=new je(be),s}$e(e,n){if(!this.ze(e))return;const r=this.it(e,n.key)?2:0;this.Ge(e).Fe(n.key,r),this.ke=this.ke.insert(n.key,n),this.qe=this.qe.insert(n.key,this.st(n.key).add(e))}Ue(e,n,r){if(!this.ze(e))return;const s=this.Ge(e);this.it(e,n)?s.Fe(n,1):s.Me(n),this.qe=this.qe.insert(n,this.st(n).delete(e)),r&&(this.ke=this.ke.insert(n,r))}removeTarget(e){this.Be.delete(e)}Ye(e){const n=this.Ge(e).ve();return this.Le.getRemoteKeysForTarget(e).size+n.addedDocuments.size-n.removedDocuments.size}xe(e){this.Ge(e).xe()}Ge(e){let n=this.Be.get(e);return n||(n=new zp,this.Be.set(e,n)),n}st(e){let n=this.qe.get(e);return n||(n=new at(be),this.qe=this.qe.insert(e,n)),n}ze(e){const n=this.Je(e)!==null;return n||ne("WatchChangeAggregator","Detected inactive target",e),n}Je(e){const n=this.Be.get(e);return n&&n.Se?null:this.Le.ot(e)}je(e){this.Be.set(e,new zp),this.Le.getRemoteKeysForTarget(e).forEach(n=>{this.Ue(e,n,null)})}it(e,n){return this.Le.getRemoteKeysForTarget(e).has(n)}}function Gp(){return new je(ce.comparator)}function Qp(){return new je(ce.comparator)}const jk={asc:"ASCENDING",desc:"DESCENDING"},$k={"<":"LESS_THAN","<=":"LESS_THAN_OR_EQUAL",">":"GREATER_THAN",">=":"GREATER_THAN_OR_EQUAL","==":"EQUAL","!=":"NOT_EQUAL","array-contains":"ARRAY_CONTAINS",in:"IN","not-in":"NOT_IN","array-contains-any":"ARRAY_CONTAINS_ANY"},Hk={and:"AND",or:"OR"};class qk{constructor(e,n){this.databaseId=e,this.useProto3Json=n}}function su(t,e){return t.useProto3Json||uc(e)?e:{value:e}}function La(t,e){return t.useProto3Json?`${new Date(1e3*e.seconds).toISOString().replace(/\.\d*/,"").replace("Z","")}.${("000000000"+e.nanoseconds).slice(-9)}Z`:{seconds:""+e.seconds,nanos:e.nanoseconds}}function tv(t,e){return t.useProto3Json?e.toBase64():e.toUint8Array()}function Wk(t,e){return La(t,e.toTimestamp())}function hn(t){return Ve(!!t),ge.fromTimestamp(function(n){const r=ur(n);return new Je(r.seconds,r.nanos)}(t))}function dh(t,e){return iu(t,e).canonicalString()}function iu(t,e){const n=function(s){return new He(["projects",s.projectId,"databases",s.database])}(t).child("documents");return e===void 0?n:n.child(e)}function nv(t){const e=He.fromString(t);return Ve(av(e)),e}function ou(t,e){return dh(t.databaseId,e.path)}function cl(t,e){const n=nv(e);if(n.get(1)!==t.databaseId.projectId)throw new ae(W.INVALID_ARGUMENT,"Tried to deserialize key from different project: "+n.get(1)+" vs "+t.databaseId.projectId);if(n.get(3)!==t.databaseId.database)throw new ae(W.INVALID_ARGUMENT,"Tried to deserialize key from different database: "+n.get(3)+" vs "+t.databaseId.database);return new ce(sv(n))}function rv(t,e){return dh(t.databaseId,e)}function Kk(t){const e=nv(t);return e.length===4?He.emptyPath():sv(e)}function au(t){return new He(["projects",t.databaseId.projectId,"databases",t.databaseId.database]).canonicalString()}function sv(t){return Ve(t.length>4&&t.get(4)==="documents"),t.popFirst(5)}function Jp(t,e,n){return{name:ou(t,e),fields:n.value.mapValue.fields}}function zk(t,e){let n;if("targetChange"in e){e.targetChange;const r=function(u){return u==="NO_CHANGE"?0:u==="ADD"?1:u==="REMOVE"?2:u==="CURRENT"?3:u==="RESET"?4:de()}(e.targetChange.targetChangeType||"NO_CHANGE"),s=e.targetChange.targetIds||[],i=function(u,h){return u.useProto3Json?(Ve(h===void 0||typeof h=="string"),ct.fromBase64String(h||"")):(Ve(h===void 0||h instanceof Buffer||h instanceof Uint8Array),ct.fromUint8Array(h||new Uint8Array))}(t,e.targetChange.resumeToken),o=e.targetChange.cause,c=o&&function(u){const h=u.code===void 0?W.UNKNOWN:Yy(u.code);return new ae(h,u.message||"")}(o);n=new ev(r,s,i,c||null)}else if("documentChange"in e){e.documentChange;const r=e.documentChange;r.document,r.document.name,r.document.updateTime;const s=cl(t,r.document.name),i=hn(r.document.updateTime),o=r.document.createTime?hn(r.document.createTime):ge.min(),c=new Mt({mapValue:{fields:r.document.fields}}),l=mt.newFoundDocument(s,i,o,c),u=r.targetIds||[],h=r.removedTargetIds||[];n=new oa(u,h,l.key,l)}else if("documentDelete"in e){e.documentDelete;const r=e.documentDelete;r.document;const s=cl(t,r.document),i=r.readTime?hn(r.readTime):ge.min(),o=mt.newNoDocument(s,i),c=r.removedTargetIds||[];n=new oa([],c,o.key,o)}else if("documentRemove"in e){e.documentRemove;const r=e.documentRemove;r.document;const s=cl(t,r.document),i=r.removedTargetIds||[];n=new oa([],i,s,null)}else{if(!("filter"in e))return de();{e.filter;const r=e.filter;r.targetId;const{count:s=0,unchangedNames:i}=r,o=new Mk(s,i),c=r.targetId;n=new Zy(c,o)}}return n}function Gk(t,e){let n;if(e instanceof uo)n={update:Jp(t,e.key,e.value)};else if(e instanceof Xy)n={delete:ou(t,e.key)};else if(e instanceof zr)n={update:Jp(t,e.key,e.data),updateMask:r1(e.fieldMask)};else{if(!(e instanceof Dk))return de();n={verify:ou(t,e.key)}}return e.fieldTransforms.length>0&&(n.updateTransforms=e.fieldTransforms.map(r=>function(i,o){const c=o.transform;if(c instanceof xa)return{fieldPath:o.field.canonicalString(),setToServerValue:"REQUEST_TIME"};if(c instanceof Gi)return{fieldPath:o.field.canonicalString(),appendMissingElements:{values:c.elements}};if(c instanceof Qi)return{fieldPath:o.field.canonicalString(),removeAllFromArray:{values:c.elements}};if(c instanceof Ma)return{fieldPath:o.field.canonicalString(),increment:c.Pe};throw de()}(0,r))),e.precondition.isNone||(n.currentDocument=function(s,i){return i.updateTime!==void 0?{updateTime:Wk(s,i.updateTime)}:i.exists!==void 0?{exists:i.exists}:de()}(t,e.precondition)),n}function Qk(t,e){return t&&t.length>0?(Ve(e!==void 0),t.map(n=>function(s,i){let o=s.updateTime?hn(s.updateTime):hn(i);return o.isEqual(ge.min())&&(o=hn(i)),new kk(o,s.transformResults||[])}(n,e))):[]}function Jk(t,e){return{documents:[rv(t,e.path)]}}function Xk(t,e){const n={structuredQuery:{}},r=e.path;let s;e.collectionGroup!==null?(s=r,n.structuredQuery.from=[{collectionId:e.collectionGroup,allDescendants:!0}]):(s=r.popLast(),n.structuredQuery.from=[{collectionId:r.lastSegment()}]),n.parent=rv(t,s);const i=function(u){if(u.length!==0)return ov(pn.create(u,"and"))}(e.filters);i&&(n.structuredQuery.where=i);const o=function(u){if(u.length!==0)return u.map(h=>function(g){return{field:os(g.field),direction:e1(g.dir)}}(h))}(e.orderBy);o&&(n.structuredQuery.orderBy=o);const c=su(t,e.limit);return c!==null&&(n.structuredQuery.limit=c),e.startAt&&(n.structuredQuery.startAt=function(u){return{before:u.inclusive,values:u.position}}(e.startAt)),e.endAt&&(n.structuredQuery.endAt=function(u){return{before:!u.inclusive,values:u.position}}(e.endAt)),{_t:n,parent:s}}function Yk(t){let e=Kk(t.parent);const n=t.structuredQuery,r=n.from?n.from.length:0;let s=null;if(r>0){Ve(r===1);const h=n.from[0];h.allDescendants?s=h.collectionId:e=e.child(h.collectionId)}let i=[];n.where&&(i=function(d){const g=iv(d);return g instanceof pn&&xy(g)?g.getFilters():[g]}(n.where));let o=[];n.orderBy&&(o=function(d){return d.map(g=>function(P){return new Va(as(P.field),function(O){switch(O){case"ASCENDING":return"asc";case"DESCENDING":return"desc";default:return}}(P.direction))}(g))}(n.orderBy));let c=null;n.limit&&(c=function(d){let g;return g=typeof d=="object"?d.value:d,uc(g)?null:g}(n.limit));let l=null;n.startAt&&(l=function(d){const g=!!d.before,m=d.values||[];return new Da(m,g)}(n.startAt));let u=null;return n.endAt&&(u=function(d){const g=!d.before,m=d.values||[];return new Da(m,g)}(n.endAt)),mk(e,s,o,i,c,"F",l,u)}function Zk(t,e){const n=function(s){switch(s){case"TargetPurposeListen":return null;case"TargetPurposeExistenceFilterMismatch":return"existence-filter-mismatch";case"TargetPurposeExistenceFilterMismatchBloom":return"existence-filter-mismatch-bloom";case"TargetPurposeLimboResolution":return"limbo-document";default:return de()}}(e.purpose);return n==null?null:{"goog-listen-tags":n}}function iv(t){return t.unaryFilter!==void 0?function(n){switch(n.unaryFilter.op){case"IS_NAN":const r=as(n.unaryFilter.field);return Qe.create(r,"==",{doubleValue:NaN});case"IS_NULL":const s=as(n.unaryFilter.field);return Qe.create(s,"==",{nullValue:"NULL_VALUE"});case"IS_NOT_NAN":const i=as(n.unaryFilter.field);return Qe.create(i,"!=",{doubleValue:NaN});case"IS_NOT_NULL":const o=as(n.unaryFilter.field);return Qe.create(o,"!=",{nullValue:"NULL_VALUE"});default:return de()}}(t):t.fieldFilter!==void 0?function(n){return Qe.create(as(n.fieldFilter.field),function(s){switch(s){case"EQUAL":return"==";case"NOT_EQUAL":return"!=";case"GREATER_THAN":return">";case"GREATER_THAN_OR_EQUAL":return">=";case"LESS_THAN":return"<";case"LESS_THAN_OR_EQUAL":return"<=";case"ARRAY_CONTAINS":return"array-contains";case"IN":return"in";case"NOT_IN":return"not-in";case"ARRAY_CONTAINS_ANY":return"array-contains-any";default:return de()}}(n.fieldFilter.op),n.fieldFilter.value)}(t):t.compositeFilter!==void 0?function(n){return pn.create(n.compositeFilter.filters.map(r=>iv(r)),function(s){switch(s){case"AND":return"and";case"OR":return"or";default:return de()}}(n.compositeFilter.op))}(t):de()}function e1(t){return jk[t]}function t1(t){return $k[t]}function n1(t){return Hk[t]}function os(t){return{fieldPath:t.canonicalString()}}function as(t){return ot.fromServerFormat(t.fieldPath)}function ov(t){return t instanceof Qe?function(n){if(n.op==="=="){if(Mp(n.value))return{unaryFilter:{field:os(n.field),op:"IS_NAN"}};if(xp(n.value))return{unaryFilter:{field:os(n.field),op:"IS_NULL"}}}else if(n.op==="!="){if(Mp(n.value))return{unaryFilter:{field:os(n.field),op:"IS_NOT_NAN"}};if(xp(n.value))return{unaryFilter:{field:os(n.field),op:"IS_NOT_NULL"}}}return{fieldFilter:{field:os(n.field),op:t1(n.op),value:n.value}}}(t):t instanceof pn?function(n){const r=n.getFilters().map(s=>ov(s));return r.length===1?r[0]:{compositeFilter:{op:n1(n.op),filters:r}}}(t):de()}function r1(t){const e=[];return t.fields.forEach(n=>e.push(n.canonicalString())),{fieldPaths:e}}function av(t){return t.length>=4&&t.get(0)==="projects"&&t.get(2)==="databases"}/**
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
 */class er{constructor(e,n,r,s,i=ge.min(),o=ge.min(),c=ct.EMPTY_BYTE_STRING,l=null){this.target=e,this.targetId=n,this.purpose=r,this.sequenceNumber=s,this.snapshotVersion=i,this.lastLimboFreeSnapshotVersion=o,this.resumeToken=c,this.expectedCount=l}withSequenceNumber(e){return new er(this.target,this.targetId,this.purpose,e,this.snapshotVersion,this.lastLimboFreeSnapshotVersion,this.resumeToken,this.expectedCount)}withResumeToken(e,n){return new er(this.target,this.targetId,this.purpose,this.sequenceNumber,n,this.lastLimboFreeSnapshotVersion,e,null)}withExpectedCount(e){return new er(this.target,this.targetId,this.purpose,this.sequenceNumber,this.snapshotVersion,this.lastLimboFreeSnapshotVersion,this.resumeToken,e)}withLastLimboFreeSnapshotVersion(e){return new er(this.target,this.targetId,this.purpose,this.sequenceNumber,this.snapshotVersion,e,this.resumeToken,this.expectedCount)}}/**
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
 */class s1{constructor(e){this.ct=e}}function i1(t){const e=Yk({parent:t.parent,structuredQuery:t.structuredQuery});return t.limitType==="LAST"?ru(e,e.limit,"L"):e}/**
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
 */class o1{constructor(){this.un=new a1}addToCollectionParentIndex(e,n){return this.un.add(n),$.resolve()}getCollectionParents(e,n){return $.resolve(this.un.getEntries(n))}addFieldIndex(e,n){return $.resolve()}deleteFieldIndex(e,n){return $.resolve()}deleteAllFieldIndexes(e){return $.resolve()}createTargetIndexes(e,n){return $.resolve()}getDocumentsMatchingTarget(e,n){return $.resolve(null)}getIndexType(e,n){return $.resolve(0)}getFieldIndexes(e,n){return $.resolve([])}getNextCollectionGroupToUpdate(e){return $.resolve(null)}getMinOffset(e,n){return $.resolve(lr.min())}getMinOffsetFromCollectionGroup(e,n){return $.resolve(lr.min())}updateCollectionGroup(e,n,r){return $.resolve()}updateIndexEntries(e,n){return $.resolve()}}class a1{constructor(){this.index={}}add(e){const n=e.lastSegment(),r=e.popLast(),s=this.index[n]||new at(He.comparator),i=!s.has(r);return this.index[n]=s.add(r),i}has(e){const n=e.lastSegment(),r=e.popLast(),s=this.index[n];return s&&s.has(r)}getEntries(e){return(this.index[e]||new at(He.comparator)).toArray()}}/**
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
 */class Vs{constructor(e){this.Ln=e}next(){return this.Ln+=2,this.Ln}static Bn(){return new Vs(0)}static kn(){return new Vs(-1)}}/**
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
 */class c1{constructor(){this.changes=new Ks(e=>e.toString(),(e,n)=>e.isEqual(n)),this.changesApplied=!1}addEntry(e){this.assertNotApplied(),this.changes.set(e.key,e)}removeEntry(e,n){this.assertNotApplied(),this.changes.set(e,mt.newInvalidDocument(e).setReadTime(n))}getEntry(e,n){this.assertNotApplied();const r=this.changes.get(n);return r!==void 0?$.resolve(r):this.getFromCache(e,n)}getEntries(e,n){return this.getAllFromCache(e,n)}apply(e){return this.assertNotApplied(),this.changesApplied=!0,this.applyChanges(e)}assertNotApplied(){}}/**
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
 * Copyright 2022 Google LLC
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
 */class l1{constructor(e,n){this.overlayedDocument=e,this.mutatedFields=n}}/**
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
 */class u1{constructor(e,n,r,s){this.remoteDocumentCache=e,this.mutationQueue=n,this.documentOverlayCache=r,this.indexManager=s}getDocument(e,n){let r=null;return this.documentOverlayCache.getOverlay(e,n).next(s=>(r=s,this.remoteDocumentCache.getEntry(e,n))).next(s=>(r!==null&&ki(r.mutation,s,zt.empty(),Je.now()),s))}getDocuments(e,n){return this.remoteDocumentCache.getEntries(e,n).next(r=>this.getLocalViewOfDocuments(e,r,_e()).next(()=>r))}getLocalViewOfDocuments(e,n,r=_e()){const s=Cr();return this.populateOverlays(e,s,n).next(()=>this.computeViews(e,n,s,r).next(i=>{let o=mi();return i.forEach((c,l)=>{o=o.insert(c,l.overlayedDocument)}),o}))}getOverlayedDocuments(e,n){const r=Cr();return this.populateOverlays(e,r,n).next(()=>this.computeViews(e,n,r,_e()))}populateOverlays(e,n,r){const s=[];return r.forEach(i=>{n.has(i)||s.push(i)}),this.documentOverlayCache.getOverlays(e,s).next(i=>{i.forEach((o,c)=>{n.set(o,c)})})}computeViews(e,n,r,s){let i=Nn();const o=Ci(),c=function(){return Ci()}();return n.forEach((l,u)=>{const h=r.get(u.key);s.has(u.key)&&(h===void 0||h.mutation instanceof zr)?i=i.insert(u.key,u):h!==void 0?(o.set(u.key,h.mutation.getFieldMask()),ki(h.mutation,u,h.mutation.getFieldMask(),Je.now())):o.set(u.key,zt.empty())}),this.recalculateAndSaveOverlays(e,i).next(l=>(l.forEach((u,h)=>o.set(u,h)),n.forEach((u,h)=>{var d;return c.set(u,new l1(h,(d=o.get(u))!==null&&d!==void 0?d:null))}),c))}recalculateAndSaveOverlays(e,n){const r=Ci();let s=new je((o,c)=>o-c),i=_e();return this.mutationQueue.getAllMutationBatchesAffectingDocumentKeys(e,n).next(o=>{for(const c of o)c.keys().forEach(l=>{const u=n.get(l);if(u===null)return;let h=r.get(l)||zt.empty();h=c.applyToLocalView(u,h),r.set(l,h);const d=(s.get(c.batchId)||_e()).add(l);s=s.insert(c.batchId,d)})}).next(()=>{const o=[],c=s.getReverseIterator();for(;c.hasNext();){const l=c.getNext(),u=l.key,h=l.value,d=Hy();h.forEach(g=>{if(!i.has(g)){const m=Qy(n.get(g),r.get(g));m!==null&&d.set(g,m),i=i.add(g)}}),o.push(this.documentOverlayCache.saveOverlays(e,u,d))}return $.waitFor(o)}).next(()=>r)}recalculateAndSaveOverlaysForDocumentKeys(e,n){return this.remoteDocumentCache.getEntries(e,n).next(r=>this.recalculateAndSaveOverlays(e,r))}getDocumentsMatchingQuery(e,n,r,s){return function(o){return ce.isDocumentKey(o.path)&&o.collectionGroup===null&&o.filters.length===0}(n)?this.getDocumentsMatchingDocumentQuery(e,n.path):_k(n)?this.getDocumentsMatchingCollectionGroupQuery(e,n,r,s):this.getDocumentsMatchingCollectionQuery(e,n,r,s)}getNextDocuments(e,n,r,s){return this.remoteDocumentCache.getAllFromCollectionGroup(e,n,r,s).next(i=>{const o=s-i.size>0?this.documentOverlayCache.getOverlaysForCollectionGroup(e,n,r.largestBatchId,s-i.size):$.resolve(Cr());let c=-1,l=i;return o.next(u=>$.forEach(u,(h,d)=>(c<d.largestBatchId&&(c=d.largestBatchId),i.get(h)?$.resolve():this.remoteDocumentCache.getEntry(e,h).next(g=>{l=l.insert(h,g)}))).next(()=>this.populateOverlays(e,u,i)).next(()=>this.computeViews(e,l,u,_e())).next(h=>({batchId:c,changes:$y(h)})))})}getDocumentsMatchingDocumentQuery(e,n){return this.getDocument(e,new ce(n)).next(r=>{let s=mi();return r.isFoundDocument()&&(s=s.insert(r.key,r)),s})}getDocumentsMatchingCollectionGroupQuery(e,n,r,s){const i=n.collectionGroup;let o=mi();return this.indexManager.getCollectionParents(e,i).next(c=>$.forEach(c,l=>{const u=function(d,g){return new hc(g,null,d.explicitOrderBy.slice(),d.filters.slice(),d.limit,d.limitType,d.startAt,d.endAt)}(n,l.child(i));return this.getDocumentsMatchingCollectionQuery(e,u,r,s).next(h=>{h.forEach((d,g)=>{o=o.insert(d,g)})})}).next(()=>o))}getDocumentsMatchingCollectionQuery(e,n,r,s){let i;return this.documentOverlayCache.getOverlaysForCollection(e,n.path,r.largestBatchId).next(o=>(i=o,this.remoteDocumentCache.getDocumentsMatchingQuery(e,n,r,i,s))).next(o=>{i.forEach((l,u)=>{const h=u.getKey();o.get(h)===null&&(o=o.insert(h,mt.newInvalidDocument(h)))});let c=mi();return o.forEach((l,u)=>{const h=i.get(l);h!==void 0&&ki(h.mutation,u,zt.empty(),Je.now()),dc(n,u)&&(c=c.insert(l,u))}),c})}}/**
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
 */class h1{constructor(e){this.serializer=e,this.hr=new Map,this.Pr=new Map}getBundleMetadata(e,n){return $.resolve(this.hr.get(n))}saveBundleMetadata(e,n){return this.hr.set(n.id,function(s){return{id:s.id,version:s.version,createTime:hn(s.createTime)}}(n)),$.resolve()}getNamedQuery(e,n){return $.resolve(this.Pr.get(n))}saveNamedQuery(e,n){return this.Pr.set(n.name,function(s){return{name:s.name,query:i1(s.bundledQuery),readTime:hn(s.readTime)}}(n)),$.resolve()}}/**
 * @license
 * Copyright 2022 Google LLC
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
 */class f1{constructor(){this.overlays=new je(ce.comparator),this.Ir=new Map}getOverlay(e,n){return $.resolve(this.overlays.get(n))}getOverlays(e,n){const r=Cr();return $.forEach(n,s=>this.getOverlay(e,s).next(i=>{i!==null&&r.set(s,i)})).next(()=>r)}saveOverlays(e,n,r){return r.forEach((s,i)=>{this.ht(e,n,i)}),$.resolve()}removeOverlaysForBatchId(e,n,r){const s=this.Ir.get(r);return s!==void 0&&(s.forEach(i=>this.overlays=this.overlays.remove(i)),this.Ir.delete(r)),$.resolve()}getOverlaysForCollection(e,n,r){const s=Cr(),i=n.length+1,o=new ce(n.child("")),c=this.overlays.getIteratorFrom(o);for(;c.hasNext();){const l=c.getNext().value,u=l.getKey();if(!n.isPrefixOf(u.path))break;u.path.length===i&&l.largestBatchId>r&&s.set(l.getKey(),l)}return $.resolve(s)}getOverlaysForCollectionGroup(e,n,r,s){let i=new je((u,h)=>u-h);const o=this.overlays.getIterator();for(;o.hasNext();){const u=o.getNext().value;if(u.getKey().getCollectionGroup()===n&&u.largestBatchId>r){let h=i.get(u.largestBatchId);h===null&&(h=Cr(),i=i.insert(u.largestBatchId,h)),h.set(u.getKey(),u)}}const c=Cr(),l=i.getIterator();for(;l.hasNext()&&(l.getNext().value.forEach((u,h)=>c.set(u,h)),!(c.size()>=s)););return $.resolve(c)}ht(e,n,r){const s=this.overlays.get(r.key);if(s!==null){const o=this.Ir.get(s.largestBatchId).delete(r.key);this.Ir.set(s.largestBatchId,o)}this.overlays=this.overlays.insert(r.key,new xk(n,r));let i=this.Ir.get(n);i===void 0&&(i=_e(),this.Ir.set(n,i)),this.Ir.set(n,i.add(r.key))}}/**
 * @license
 * Copyright 2024 Google LLC
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
 */class d1{constructor(){this.sessionToken=ct.EMPTY_BYTE_STRING}getSessionToken(e){return $.resolve(this.sessionToken)}setSessionToken(e,n){return this.sessionToken=n,$.resolve()}}/**
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
 */class ph{constructor(){this.Tr=new at(Ze.Er),this.dr=new at(Ze.Ar)}isEmpty(){return this.Tr.isEmpty()}addReference(e,n){const r=new Ze(e,n);this.Tr=this.Tr.add(r),this.dr=this.dr.add(r)}Rr(e,n){e.forEach(r=>this.addReference(r,n))}removeReference(e,n){this.Vr(new Ze(e,n))}mr(e,n){e.forEach(r=>this.removeReference(r,n))}gr(e){const n=new ce(new He([])),r=new Ze(n,e),s=new Ze(n,e+1),i=[];return this.dr.forEachInRange([r,s],o=>{this.Vr(o),i.push(o.key)}),i}pr(){this.Tr.forEach(e=>this.Vr(e))}Vr(e){this.Tr=this.Tr.delete(e),this.dr=this.dr.delete(e)}yr(e){const n=new ce(new He([])),r=new Ze(n,e),s=new Ze(n,e+1);let i=_e();return this.dr.forEachInRange([r,s],o=>{i=i.add(o.key)}),i}containsKey(e){const n=new Ze(e,0),r=this.Tr.firstAfterOrEqual(n);return r!==null&&e.isEqual(r.key)}}class Ze{constructor(e,n){this.key=e,this.wr=n}static Er(e,n){return ce.comparator(e.key,n.key)||be(e.wr,n.wr)}static Ar(e,n){return be(e.wr,n.wr)||ce.comparator(e.key,n.key)}}/**
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
 */class p1{constructor(e,n){this.indexManager=e,this.referenceDelegate=n,this.mutationQueue=[],this.Sr=1,this.br=new at(Ze.Er)}checkEmpty(e){return $.resolve(this.mutationQueue.length===0)}addMutationBatch(e,n,r,s){const i=this.Sr;this.Sr++,this.mutationQueue.length>0&&this.mutationQueue[this.mutationQueue.length-1];const o=new Vk(i,n,r,s);this.mutationQueue.push(o);for(const c of s)this.br=this.br.add(new Ze(c.key,i)),this.indexManager.addToCollectionParentIndex(e,c.key.path.popLast());return $.resolve(o)}lookupMutationBatch(e,n){return $.resolve(this.Dr(n))}getNextMutationBatchAfterBatchId(e,n){const r=n+1,s=this.vr(r),i=s<0?0:s;return $.resolve(this.mutationQueue.length>i?this.mutationQueue[i]:null)}getHighestUnacknowledgedBatchId(){return $.resolve(this.mutationQueue.length===0?-1:this.Sr-1)}getAllMutationBatches(e){return $.resolve(this.mutationQueue.slice())}getAllMutationBatchesAffectingDocumentKey(e,n){const r=new Ze(n,0),s=new Ze(n,Number.POSITIVE_INFINITY),i=[];return this.br.forEachInRange([r,s],o=>{const c=this.Dr(o.wr);i.push(c)}),$.resolve(i)}getAllMutationBatchesAffectingDocumentKeys(e,n){let r=new at(be);return n.forEach(s=>{const i=new Ze(s,0),o=new Ze(s,Number.POSITIVE_INFINITY);this.br.forEachInRange([i,o],c=>{r=r.add(c.wr)})}),$.resolve(this.Cr(r))}getAllMutationBatchesAffectingQuery(e,n){const r=n.path,s=r.length+1;let i=r;ce.isDocumentKey(i)||(i=i.child(""));const o=new Ze(new ce(i),0);let c=new at(be);return this.br.forEachWhile(l=>{const u=l.key.path;return!!r.isPrefixOf(u)&&(u.length===s&&(c=c.add(l.wr)),!0)},o),$.resolve(this.Cr(c))}Cr(e){const n=[];return e.forEach(r=>{const s=this.Dr(r);s!==null&&n.push(s)}),n}removeMutationBatch(e,n){Ve(this.Fr(n.batchId,"removed")===0),this.mutationQueue.shift();let r=this.br;return $.forEach(n.mutations,s=>{const i=new Ze(s.key,n.batchId);return r=r.delete(i),this.referenceDelegate.markPotentiallyOrphaned(e,s.key)}).next(()=>{this.br=r})}On(e){}containsKey(e,n){const r=new Ze(n,0),s=this.br.firstAfterOrEqual(r);return $.resolve(n.isEqual(s&&s.key))}performConsistencyCheck(e){return this.mutationQueue.length,$.resolve()}Fr(e,n){return this.vr(e)}vr(e){return this.mutationQueue.length===0?0:e-this.mutationQueue[0].batchId}Dr(e){const n=this.vr(e);return n<0||n>=this.mutationQueue.length?null:this.mutationQueue[n]}}/**
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
 */class g1{constructor(e){this.Mr=e,this.docs=function(){return new je(ce.comparator)}(),this.size=0}setIndexManager(e){this.indexManager=e}addEntry(e,n){const r=n.key,s=this.docs.get(r),i=s?s.size:0,o=this.Mr(n);return this.docs=this.docs.insert(r,{document:n.mutableCopy(),size:o}),this.size+=o-i,this.indexManager.addToCollectionParentIndex(e,r.path.popLast())}removeEntry(e){const n=this.docs.get(e);n&&(this.docs=this.docs.remove(e),this.size-=n.size)}getEntry(e,n){const r=this.docs.get(n);return $.resolve(r?r.document.mutableCopy():mt.newInvalidDocument(n))}getEntries(e,n){let r=Nn();return n.forEach(s=>{const i=this.docs.get(s);r=r.insert(s,i?i.document.mutableCopy():mt.newInvalidDocument(s))}),$.resolve(r)}getDocumentsMatchingQuery(e,n,r,s){let i=Nn();const o=n.path,c=new ce(o.child("")),l=this.docs.getIteratorFrom(c);for(;l.hasNext();){const{key:u,value:{document:h}}=l.getNext();if(!o.isPrefixOf(u.path))break;u.path.length>o.length+1||XC(JC(h),r)<=0||(s.has(h.key)||dc(n,h))&&(i=i.insert(h.key,h.mutableCopy()))}return $.resolve(i)}getAllFromCollectionGroup(e,n,r,s){de()}Or(e,n){return $.forEach(this.docs,r=>n(r))}newChangeBuffer(e){return new m1(this)}getSize(e){return $.resolve(this.size)}}class m1 extends c1{constructor(e){super(),this.cr=e}applyChanges(e){const n=[];return this.changes.forEach((r,s)=>{s.isValidDocument()?n.push(this.cr.addEntry(e,s)):this.cr.removeEntry(r)}),$.waitFor(n)}getFromCache(e,n){return this.cr.getEntry(e,n)}getAllFromCache(e,n){return this.cr.getEntries(e,n)}}/**
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
 */class _1{constructor(e){this.persistence=e,this.Nr=new Ks(n=>ah(n),ch),this.lastRemoteSnapshotVersion=ge.min(),this.highestTargetId=0,this.Lr=0,this.Br=new ph,this.targetCount=0,this.kr=Vs.Bn()}forEachTarget(e,n){return this.Nr.forEach((r,s)=>n(s)),$.resolve()}getLastRemoteSnapshotVersion(e){return $.resolve(this.lastRemoteSnapshotVersion)}getHighestSequenceNumber(e){return $.resolve(this.Lr)}allocateTargetId(e){return this.highestTargetId=this.kr.next(),$.resolve(this.highestTargetId)}setTargetsMetadata(e,n,r){return r&&(this.lastRemoteSnapshotVersion=r),n>this.Lr&&(this.Lr=n),$.resolve()}Kn(e){this.Nr.set(e.target,e);const n=e.targetId;n>this.highestTargetId&&(this.kr=new Vs(n),this.highestTargetId=n),e.sequenceNumber>this.Lr&&(this.Lr=e.sequenceNumber)}addTargetData(e,n){return this.Kn(n),this.targetCount+=1,$.resolve()}updateTargetData(e,n){return this.Kn(n),$.resolve()}removeTargetData(e,n){return this.Nr.delete(n.target),this.Br.gr(n.targetId),this.targetCount-=1,$.resolve()}removeTargets(e,n,r){let s=0;const i=[];return this.Nr.forEach((o,c)=>{c.sequenceNumber<=n&&r.get(c.targetId)===null&&(this.Nr.delete(o),i.push(this.removeMatchingKeysForTargetId(e,c.targetId)),s++)}),$.waitFor(i).next(()=>s)}getTargetCount(e){return $.resolve(this.targetCount)}getTargetData(e,n){const r=this.Nr.get(n)||null;return $.resolve(r)}addMatchingKeys(e,n,r){return this.Br.Rr(n,r),$.resolve()}removeMatchingKeys(e,n,r){this.Br.mr(n,r);const s=this.persistence.referenceDelegate,i=[];return s&&n.forEach(o=>{i.push(s.markPotentiallyOrphaned(e,o))}),$.waitFor(i)}removeMatchingKeysForTargetId(e,n){return this.Br.gr(n),$.resolve()}getMatchingKeysForTargetId(e,n){const r=this.Br.yr(n);return $.resolve(r)}containsKey(e,n){return $.resolve(this.Br.containsKey(n))}}/**
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
 */class y1{constructor(e,n){this.qr={},this.overlays={},this.Qr=new rh(0),this.Kr=!1,this.Kr=!0,this.$r=new d1,this.referenceDelegate=e(this),this.Ur=new _1(this),this.indexManager=new o1,this.remoteDocumentCache=function(s){return new g1(s)}(r=>this.referenceDelegate.Wr(r)),this.serializer=new s1(n),this.Gr=new h1(this.serializer)}start(){return Promise.resolve()}shutdown(){return this.Kr=!1,Promise.resolve()}get started(){return this.Kr}setDatabaseDeletedListener(){}setNetworkEnabled(){}getIndexManager(e){return this.indexManager}getDocumentOverlayCache(e){let n=this.overlays[e.toKey()];return n||(n=new f1,this.overlays[e.toKey()]=n),n}getMutationQueue(e,n){let r=this.qr[e.toKey()];return r||(r=new p1(n,this.referenceDelegate),this.qr[e.toKey()]=r),r}getGlobalsCache(){return this.$r}getTargetCache(){return this.Ur}getRemoteDocumentCache(){return this.remoteDocumentCache}getBundleCache(){return this.Gr}runTransaction(e,n,r){ne("MemoryPersistence","Starting transaction:",e);const s=new v1(this.Qr.next());return this.referenceDelegate.zr(),r(s).next(i=>this.referenceDelegate.jr(s).next(()=>i)).toPromise().then(i=>(s.raiseOnCommittedEvent(),i))}Hr(e,n){return $.or(Object.values(this.qr).map(r=>()=>r.containsKey(e,n)))}}class v1 extends ZC{constructor(e){super(),this.currentSequenceNumber=e}}class gh{constructor(e){this.persistence=e,this.Jr=new ph,this.Yr=null}static Zr(e){return new gh(e)}get Xr(){if(this.Yr)return this.Yr;throw de()}addReference(e,n,r){return this.Jr.addReference(r,n),this.Xr.delete(r.toString()),$.resolve()}removeReference(e,n,r){return this.Jr.removeReference(r,n),this.Xr.add(r.toString()),$.resolve()}markPotentiallyOrphaned(e,n){return this.Xr.add(n.toString()),$.resolve()}removeTarget(e,n){this.Jr.gr(n.targetId).forEach(s=>this.Xr.add(s.toString()));const r=this.persistence.getTargetCache();return r.getMatchingKeysForTargetId(e,n.targetId).next(s=>{s.forEach(i=>this.Xr.add(i.toString()))}).next(()=>r.removeTargetData(e,n))}zr(){this.Yr=new Set}jr(e){const n=this.persistence.getRemoteDocumentCache().newChangeBuffer();return $.forEach(this.Xr,r=>{const s=ce.fromPath(r);return this.ei(e,s).next(i=>{i||n.removeEntry(s,ge.min())})}).next(()=>(this.Yr=null,n.apply(e)))}updateLimboDocument(e,n){return this.ei(e,n).next(r=>{r?this.Xr.delete(n.toString()):this.Xr.add(n.toString())})}Wr(e){return 0}ei(e,n){return $.or([()=>$.resolve(this.Jr.containsKey(n)),()=>this.persistence.getTargetCache().containsKey(e,n),()=>this.persistence.Hr(e,n)])}}/**
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
 */class mh{constructor(e,n,r,s){this.targetId=e,this.fromCache=n,this.$i=r,this.Ui=s}static Wi(e,n){let r=_e(),s=_e();for(const i of n.docChanges)switch(i.type){case 0:r=r.add(i.doc.key);break;case 1:s=s.add(i.doc.key)}return new mh(e,n.fromCache,r,s)}}/**
 * @license
 * Copyright 2023 Google LLC
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
 */class E1{constructor(){this._documentReadCount=0}get documentReadCount(){return this._documentReadCount}incrementDocumentReadCount(e){this._documentReadCount+=e}}/**
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
 */class T1{constructor(){this.Gi=!1,this.zi=!1,this.ji=100,this.Hi=function(){return dR()?8:ek(yt())>0?6:4}()}initialize(e,n){this.Ji=e,this.indexManager=n,this.Gi=!0}getDocumentsMatchingQuery(e,n,r,s){const i={result:null};return this.Yi(e,n).next(o=>{i.result=o}).next(()=>{if(!i.result)return this.Zi(e,n,s,r).next(o=>{i.result=o})}).next(()=>{if(i.result)return;const o=new E1;return this.Xi(e,n,o).next(c=>{if(i.result=c,this.zi)return this.es(e,n,o,c.size)})}).next(()=>i.result)}es(e,n,r,s){return r.documentReadCount<this.ji?(ui()<=ve.DEBUG&&ne("QueryEngine","SDK will not create cache indexes for query:",is(n),"since it only creates cache indexes for collection contains","more than or equal to",this.ji,"documents"),$.resolve()):(ui()<=ve.DEBUG&&ne("QueryEngine","Query:",is(n),"scans",r.documentReadCount,"local documents and returns",s,"documents as results."),r.documentReadCount>this.Hi*s?(ui()<=ve.DEBUG&&ne("QueryEngine","The SDK decides to create cache indexes for query:",is(n),"as using cache indexes may help improve performance."),this.indexManager.createTargetIndexes(e,un(n))):$.resolve())}Yi(e,n){if(Bp(n))return $.resolve(null);let r=un(n);return this.indexManager.getIndexType(e,r).next(s=>s===0?null:(n.limit!==null&&s===1&&(n=ru(n,null,"F"),r=un(n)),this.indexManager.getDocumentsMatchingTarget(e,r).next(i=>{const o=_e(...i);return this.Ji.getDocuments(e,o).next(c=>this.indexManager.getMinOffset(e,r).next(l=>{const u=this.ts(n,c);return this.ns(n,u,o,l.readTime)?this.Yi(e,ru(n,null,"F")):this.rs(e,u,n,l)}))})))}Zi(e,n,r,s){return Bp(n)||s.isEqual(ge.min())?$.resolve(null):this.Ji.getDocuments(e,r).next(i=>{const o=this.ts(n,i);return this.ns(n,o,r,s)?$.resolve(null):(ui()<=ve.DEBUG&&ne("QueryEngine","Re-using previous result from %s to execute query: %s",s.toString(),is(n)),this.rs(e,o,n,QC(s,-1)).next(c=>c))})}ts(e,n){let r=new at(By(e));return n.forEach((s,i)=>{dc(e,i)&&(r=r.add(i))}),r}ns(e,n,r,s){if(e.limit===null)return!1;if(r.size!==n.size)return!0;const i=e.limitType==="F"?n.last():n.first();return!!i&&(i.hasPendingWrites||i.version.compareTo(s)>0)}Xi(e,n,r){return ui()<=ve.DEBUG&&ne("QueryEngine","Using full collection scan to execute query:",is(n)),this.Ji.getDocumentsMatchingQuery(e,n,lr.min(),r)}rs(e,n,r,s){return this.Ji.getDocumentsMatchingQuery(e,r,s).next(i=>(n.forEach(o=>{i=i.insert(o.key,o)}),i))}}/**
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
 */class w1{constructor(e,n,r,s){this.persistence=e,this.ss=n,this.serializer=s,this.os=new je(be),this._s=new Ks(i=>ah(i),ch),this.us=new Map,this.cs=e.getRemoteDocumentCache(),this.Ur=e.getTargetCache(),this.Gr=e.getBundleCache(),this.ls(r)}ls(e){this.documentOverlayCache=this.persistence.getDocumentOverlayCache(e),this.indexManager=this.persistence.getIndexManager(e),this.mutationQueue=this.persistence.getMutationQueue(e,this.indexManager),this.localDocuments=new u1(this.cs,this.mutationQueue,this.documentOverlayCache,this.indexManager),this.cs.setIndexManager(this.indexManager),this.ss.initialize(this.localDocuments,this.indexManager)}collectGarbage(e){return this.persistence.runTransaction("Collect garbage","readwrite-primary",n=>e.collect(n,this.os))}}function I1(t,e,n,r){return new w1(t,e,n,r)}async function cv(t,e){const n=me(t);return await n.persistence.runTransaction("Handle user change","readonly",r=>{let s;return n.mutationQueue.getAllMutationBatches(r).next(i=>(s=i,n.ls(e),n.mutationQueue.getAllMutationBatches(r))).next(i=>{const o=[],c=[];let l=_e();for(const u of s){o.push(u.batchId);for(const h of u.mutations)l=l.add(h.key)}for(const u of i){c.push(u.batchId);for(const h of u.mutations)l=l.add(h.key)}return n.localDocuments.getDocuments(r,l).next(u=>({hs:u,removedBatchIds:o,addedBatchIds:c}))})})}function b1(t,e){const n=me(t);return n.persistence.runTransaction("Acknowledge batch","readwrite-primary",r=>{const s=e.batch.keys(),i=n.cs.newChangeBuffer({trackRemovals:!0});return function(c,l,u,h){const d=u.batch,g=d.keys();let m=$.resolve();return g.forEach(P=>{m=m.next(()=>h.getEntry(l,P)).next(k=>{const O=u.docVersions.get(P);Ve(O!==null),k.version.compareTo(O)<0&&(d.applyToRemoteDocument(k,u),k.isValidDocument()&&(k.setReadTime(u.commitVersion),h.addEntry(k)))})}),m.next(()=>c.mutationQueue.removeMutationBatch(l,d))}(n,r,e,i).next(()=>i.apply(r)).next(()=>n.mutationQueue.performConsistencyCheck(r)).next(()=>n.documentOverlayCache.removeOverlaysForBatchId(r,s,e.batch.batchId)).next(()=>n.localDocuments.recalculateAndSaveOverlaysForDocumentKeys(r,function(c){let l=_e();for(let u=0;u<c.mutationResults.length;++u)c.mutationResults[u].transformResults.length>0&&(l=l.add(c.batch.mutations[u].key));return l}(e))).next(()=>n.localDocuments.getDocuments(r,s))})}function lv(t){const e=me(t);return e.persistence.runTransaction("Get last remote snapshot version","readonly",n=>e.Ur.getLastRemoteSnapshotVersion(n))}function A1(t,e){const n=me(t),r=e.snapshotVersion;let s=n.os;return n.persistence.runTransaction("Apply remote event","readwrite-primary",i=>{const o=n.cs.newChangeBuffer({trackRemovals:!0});s=n.os;const c=[];e.targetChanges.forEach((h,d)=>{const g=s.get(d);if(!g)return;c.push(n.Ur.removeMatchingKeys(i,h.removedDocuments,d).next(()=>n.Ur.addMatchingKeys(i,h.addedDocuments,d)));let m=g.withSequenceNumber(i.currentSequenceNumber);e.targetMismatches.get(d)!==null?m=m.withResumeToken(ct.EMPTY_BYTE_STRING,ge.min()).withLastLimboFreeSnapshotVersion(ge.min()):h.resumeToken.approximateByteSize()>0&&(m=m.withResumeToken(h.resumeToken,r)),s=s.insert(d,m),function(k,O,V){return k.resumeToken.approximateByteSize()===0||O.snapshotVersion.toMicroseconds()-k.snapshotVersion.toMicroseconds()>=3e8?!0:V.addedDocuments.size+V.modifiedDocuments.size+V.removedDocuments.size>0}(g,m,h)&&c.push(n.Ur.updateTargetData(i,m))});let l=Nn(),u=_e();if(e.documentUpdates.forEach(h=>{e.resolvedLimboDocuments.has(h)&&c.push(n.persistence.referenceDelegate.updateLimboDocument(i,h))}),c.push(R1(i,o,e.documentUpdates).next(h=>{l=h.Ps,u=h.Is})),!r.isEqual(ge.min())){const h=n.Ur.getLastRemoteSnapshotVersion(i).next(d=>n.Ur.setTargetsMetadata(i,i.currentSequenceNumber,r));c.push(h)}return $.waitFor(c).next(()=>o.apply(i)).next(()=>n.localDocuments.getLocalViewOfDocuments(i,l,u)).next(()=>l)}).then(i=>(n.os=s,i))}function R1(t,e,n){let r=_e(),s=_e();return n.forEach(i=>r=r.add(i)),e.getEntries(t,r).next(i=>{let o=Nn();return n.forEach((c,l)=>{const u=i.get(c);l.isFoundDocument()!==u.isFoundDocument()&&(s=s.add(c)),l.isNoDocument()&&l.version.isEqual(ge.min())?(e.removeEntry(c,l.readTime),o=o.insert(c,l)):!u.isValidDocument()||l.version.compareTo(u.version)>0||l.version.compareTo(u.version)===0&&u.hasPendingWrites?(e.addEntry(l),o=o.insert(c,l)):ne("LocalStore","Ignoring outdated watch update for ",c,". Current version:",u.version," Watch version:",l.version)}),{Ps:o,Is:s}})}function S1(t,e){const n=me(t);return n.persistence.runTransaction("Get next mutation batch","readonly",r=>(e===void 0&&(e=-1),n.mutationQueue.getNextMutationBatchAfterBatchId(r,e)))}function P1(t,e){const n=me(t);return n.persistence.runTransaction("Allocate target","readwrite",r=>{let s;return n.Ur.getTargetData(r,e).next(i=>i?(s=i,$.resolve(s)):n.Ur.allocateTargetId(r).next(o=>(s=new er(e,o,"TargetPurposeListen",r.currentSequenceNumber),n.Ur.addTargetData(r,s).next(()=>s))))}).then(r=>{const s=n.os.get(r.targetId);return(s===null||r.snapshotVersion.compareTo(s.snapshotVersion)>0)&&(n.os=n.os.insert(r.targetId,r),n._s.set(e,r.targetId)),r})}async function cu(t,e,n){const r=me(t),s=r.os.get(e),i=n?"readwrite":"readwrite-primary";try{n||await r.persistence.runTransaction("Release target",i,o=>r.persistence.referenceDelegate.removeTarget(o,s))}catch(o){if(!lo(o))throw o;ne("LocalStore",`Failed to update sequence numbers for target ${e}: ${o}`)}r.os=r.os.remove(e),r._s.delete(s.target)}function Xp(t,e,n){const r=me(t);let s=ge.min(),i=_e();return r.persistence.runTransaction("Execute query","readwrite",o=>function(l,u,h){const d=me(l),g=d._s.get(h);return g!==void 0?$.resolve(d.os.get(g)):d.Ur.getTargetData(u,h)}(r,o,un(e)).next(c=>{if(c)return s=c.lastLimboFreeSnapshotVersion,r.Ur.getMatchingKeysForTargetId(o,c.targetId).next(l=>{i=l})}).next(()=>r.ss.getDocumentsMatchingQuery(o,e,n?s:ge.min(),n?i:_e())).next(c=>(C1(r,vk(e),c),{documents:c,Ts:i})))}function C1(t,e,n){let r=t.us.get(e)||ge.min();n.forEach((s,i)=>{i.readTime.compareTo(r)>0&&(r=i.readTime)}),t.us.set(e,r)}class Yp{constructor(){this.activeTargetIds=Ak()}fs(e){this.activeTargetIds=this.activeTargetIds.add(e)}gs(e){this.activeTargetIds=this.activeTargetIds.delete(e)}Vs(){const e={activeTargetIds:this.activeTargetIds.toArray(),updateTimeMs:Date.now()};return JSON.stringify(e)}}class k1{constructor(){this.so=new Yp,this.oo={},this.onlineStateHandler=null,this.sequenceNumberHandler=null}addPendingMutation(e){}updateMutationState(e,n,r){}addLocalQueryTarget(e){return this.so.fs(e),this.oo[e]||"not-current"}updateQueryState(e,n,r){this.oo[e]=n}removeLocalQueryTarget(e){this.so.gs(e)}isLocalQueryTarget(e){return this.so.activeTargetIds.has(e)}clearQueryState(e){delete this.oo[e]}getAllActiveQueryTargets(){return this.so.activeTargetIds}isActiveQueryTarget(e){return this.so.activeTargetIds.has(e)}start(){return this.so=new Yp,Promise.resolve()}handleUserChange(e,n,r){}setOnlineState(e){}shutdown(){}writeSequenceNumber(e){}notifyBundleLoaded(e){}}/**
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
 */class O1{_o(e){}shutdown(){}}/**
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
 */class Zp{constructor(){this.ao=()=>this.uo(),this.co=()=>this.lo(),this.ho=[],this.Po()}_o(e){this.ho.push(e)}shutdown(){window.removeEventListener("online",this.ao),window.removeEventListener("offline",this.co)}Po(){window.addEventListener("online",this.ao),window.addEventListener("offline",this.co)}uo(){ne("ConnectivityMonitor","Network connectivity changed: AVAILABLE");for(const e of this.ho)e(0)}lo(){ne("ConnectivityMonitor","Network connectivity changed: UNAVAILABLE");for(const e of this.ho)e(1)}static D(){return typeof window<"u"&&window.addEventListener!==void 0&&window.removeEventListener!==void 0}}/**
 * @license
 * Copyright 2023 Google LLC
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
 */let zo=null;function ll(){return zo===null?zo=function(){return 268435456+Math.round(2147483648*Math.random())}():zo++,"0x"+zo.toString(16)}/**
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
 */const N1={BatchGetDocuments:"batchGet",Commit:"commit",RunQuery:"runQuery",RunAggregationQuery:"runAggregationQuery"};/**
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
 */class D1{constructor(e){this.Io=e.Io,this.To=e.To}Eo(e){this.Ao=e}Ro(e){this.Vo=e}mo(e){this.fo=e}onMessage(e){this.po=e}close(){this.To()}send(e){this.Io(e)}yo(){this.Ao()}wo(){this.Vo()}So(e){this.fo(e)}bo(e){this.po(e)}}/**
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
 */const dt="WebChannelConnection";class V1 extends class{constructor(n){this.databaseInfo=n,this.databaseId=n.databaseId;const r=n.ssl?"https":"http",s=encodeURIComponent(this.databaseId.projectId),i=encodeURIComponent(this.databaseId.database);this.Do=r+"://"+n.host,this.vo=`projects/${s}/databases/${i}`,this.Co=this.databaseId.database==="(default)"?`project_id=${s}`:`project_id=${s}&database_id=${i}`}get Fo(){return!1}Mo(n,r,s,i,o){const c=ll(),l=this.xo(n,r.toUriEncodedString());ne("RestConnection",`Sending RPC '${n}' ${c}:`,l,s);const u={"google-cloud-resource-prefix":this.vo,"x-goog-request-params":this.Co};return this.Oo(u,i,o),this.No(n,l,u,s).then(h=>(ne("RestConnection",`Received RPC '${n}' ${c}: `,h),h),h=>{throw ks("RestConnection",`RPC '${n}' ${c} failed with error: `,h,"url: ",l,"request:",s),h})}Lo(n,r,s,i,o,c){return this.Mo(n,r,s,i,o)}Oo(n,r,s){n["X-Goog-Api-Client"]=function(){return"gl-js/ fire/"+qs}(),n["Content-Type"]="text/plain",this.databaseInfo.appId&&(n["X-Firebase-GMPID"]=this.databaseInfo.appId),r&&r.headers.forEach((i,o)=>n[o]=i),s&&s.headers.forEach((i,o)=>n[o]=i)}xo(n,r){const s=N1[n];return`${this.Do}/v1/${r}:${s}`}terminate(){}}{constructor(e){super(e),this.forceLongPolling=e.forceLongPolling,this.autoDetectLongPolling=e.autoDetectLongPolling,this.useFetchStreams=e.useFetchStreams,this.longPollingOptions=e.longPollingOptions}No(e,n,r,s){const i=ll();return new Promise((o,c)=>{const l=new wy;l.setWithCredentials(!0),l.listenOnce(by.COMPLETE,()=>{try{switch(l.getLastErrorCode()){case ra.NO_ERROR:const h=l.getResponseJson();ne(dt,`XHR for RPC '${e}' ${i} received:`,JSON.stringify(h)),o(h);break;case ra.TIMEOUT:ne(dt,`RPC '${e}' ${i} timed out`),c(new ae(W.DEADLINE_EXCEEDED,"Request time out"));break;case ra.HTTP_ERROR:const d=l.getStatus();if(ne(dt,`RPC '${e}' ${i} failed with status:`,d,"response text:",l.getResponseText()),d>0){let g=l.getResponseJson();Array.isArray(g)&&(g=g[0]);const m=g==null?void 0:g.error;if(m&&m.status&&m.message){const P=function(O){const V=O.toLowerCase().replace(/_/g,"-");return Object.values(W).indexOf(V)>=0?V:W.UNKNOWN}(m.status);c(new ae(P,m.message))}else c(new ae(W.UNKNOWN,"Server responded with status "+l.getStatus()))}else c(new ae(W.UNAVAILABLE,"Connection failed."));break;default:de()}}finally{ne(dt,`RPC '${e}' ${i} completed.`)}});const u=JSON.stringify(s);ne(dt,`RPC '${e}' ${i} sending request:`,s),l.send(n,"POST",u,r,15)})}Bo(e,n,r){const s=ll(),i=[this.Do,"/","google.firestore.v1.Firestore","/",e,"/channel"],o=Sy(),c=Ry(),l={httpSessionIdParam:"gsessionid",initMessageHeaders:{},messageUrlParams:{database:`projects/${this.databaseId.projectId}/databases/${this.databaseId.database}`},sendRawJson:!0,supportsCrossDomainXhr:!0,internalChannelParams:{forwardChannelRequestTimeoutMs:6e5},forceLongPolling:this.forceLongPolling,detectBufferingProxy:this.autoDetectLongPolling},u=this.longPollingOptions.timeoutSeconds;u!==void 0&&(l.longPollingTimeout=Math.round(1e3*u)),this.useFetchStreams&&(l.xmlHttpFactory=new Iy({})),this.Oo(l.initMessageHeaders,n,r),l.encodeInitMessageHeaders=!0;const h=i.join("");ne(dt,`Creating RPC '${e}' stream ${s}: ${h}`,l);const d=o.createWebChannel(h,l);let g=!1,m=!1;const P=new D1({Io:O=>{m?ne(dt,`Not sending because RPC '${e}' stream ${s} is closed:`,O):(g||(ne(dt,`Opening RPC '${e}' stream ${s} transport.`),d.open(),g=!0),ne(dt,`RPC '${e}' stream ${s} sending:`,O),d.send(O))},To:()=>d.close()}),k=(O,V,N)=>{O.listen(V,b=>{try{N(b)}catch(C){setTimeout(()=>{throw C},0)}})};return k(d,gi.EventType.OPEN,()=>{m||(ne(dt,`RPC '${e}' stream ${s} transport opened.`),P.yo())}),k(d,gi.EventType.CLOSE,()=>{m||(m=!0,ne(dt,`RPC '${e}' stream ${s} transport closed`),P.So())}),k(d,gi.EventType.ERROR,O=>{m||(m=!0,ks(dt,`RPC '${e}' stream ${s} transport errored:`,O),P.So(new ae(W.UNAVAILABLE,"The operation could not be completed")))}),k(d,gi.EventType.MESSAGE,O=>{var V;if(!m){const N=O.data[0];Ve(!!N);const b=N,C=b.error||((V=b[0])===null||V===void 0?void 0:V.error);if(C){ne(dt,`RPC '${e}' stream ${s} received error:`,C);const x=C.status;let F=function(y){const E=Ke[y];if(E!==void 0)return Yy(E)}(x),I=C.message;F===void 0&&(F=W.INTERNAL,I="Unknown error status: "+x+" with message "+C.message),m=!0,P.So(new ae(F,I)),d.close()}else ne(dt,`RPC '${e}' stream ${s} received:`,N),P.bo(N)}}),k(c,Ay.STAT_EVENT,O=>{O.stat===Yl.PROXY?ne(dt,`RPC '${e}' stream ${s} detected buffering proxy`):O.stat===Yl.NOPROXY&&ne(dt,`RPC '${e}' stream ${s} detected no buffering proxy`)}),setTimeout(()=>{P.wo()},0),P}}function ul(){return typeof document<"u"?document:null}/**
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
 */function _c(t){return new qk(t,!0)}/**
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
 */class uv{constructor(e,n,r=1e3,s=1.5,i=6e4){this.ui=e,this.timerId=n,this.ko=r,this.qo=s,this.Qo=i,this.Ko=0,this.$o=null,this.Uo=Date.now(),this.reset()}reset(){this.Ko=0}Wo(){this.Ko=this.Qo}Go(e){this.cancel();const n=Math.floor(this.Ko+this.zo()),r=Math.max(0,Date.now()-this.Uo),s=Math.max(0,n-r);s>0&&ne("ExponentialBackoff",`Backing off for ${s} ms (base delay: ${this.Ko} ms, delay with jitter: ${n} ms, last attempt: ${r} ms ago)`),this.$o=this.ui.enqueueAfterDelay(this.timerId,s,()=>(this.Uo=Date.now(),e())),this.Ko*=this.qo,this.Ko<this.ko&&(this.Ko=this.ko),this.Ko>this.Qo&&(this.Ko=this.Qo)}jo(){this.$o!==null&&(this.$o.skipDelay(),this.$o=null)}cancel(){this.$o!==null&&(this.$o.cancel(),this.$o=null)}zo(){return(Math.random()-.5)*this.Ko}}/**
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
 */class hv{constructor(e,n,r,s,i,o,c,l){this.ui=e,this.Ho=r,this.Jo=s,this.connection=i,this.authCredentialsProvider=o,this.appCheckCredentialsProvider=c,this.listener=l,this.state=0,this.Yo=0,this.Zo=null,this.Xo=null,this.stream=null,this.e_=0,this.t_=new uv(e,n)}n_(){return this.state===1||this.state===5||this.r_()}r_(){return this.state===2||this.state===3}start(){this.e_=0,this.state!==4?this.auth():this.i_()}async stop(){this.n_()&&await this.close(0)}s_(){this.state=0,this.t_.reset()}o_(){this.r_()&&this.Zo===null&&(this.Zo=this.ui.enqueueAfterDelay(this.Ho,6e4,()=>this.__()))}a_(e){this.u_(),this.stream.send(e)}async __(){if(this.r_())return this.close(0)}u_(){this.Zo&&(this.Zo.cancel(),this.Zo=null)}c_(){this.Xo&&(this.Xo.cancel(),this.Xo=null)}async close(e,n){this.u_(),this.c_(),this.t_.cancel(),this.Yo++,e!==4?this.t_.reset():n&&n.code===W.RESOURCE_EXHAUSTED?(On(n.toString()),On("Using maximum backoff delay to prevent overloading the backend."),this.t_.Wo()):n&&n.code===W.UNAUTHENTICATED&&this.state!==3&&(this.authCredentialsProvider.invalidateToken(),this.appCheckCredentialsProvider.invalidateToken()),this.stream!==null&&(this.l_(),this.stream.close(),this.stream=null),this.state=e,await this.listener.mo(n)}l_(){}auth(){this.state=1;const e=this.h_(this.Yo),n=this.Yo;Promise.all([this.authCredentialsProvider.getToken(),this.appCheckCredentialsProvider.getToken()]).then(([r,s])=>{this.Yo===n&&this.P_(r,s)},r=>{e(()=>{const s=new ae(W.UNKNOWN,"Fetching auth token failed: "+r.message);return this.I_(s)})})}P_(e,n){const r=this.h_(this.Yo);this.stream=this.T_(e,n),this.stream.Eo(()=>{r(()=>this.listener.Eo())}),this.stream.Ro(()=>{r(()=>(this.state=2,this.Xo=this.ui.enqueueAfterDelay(this.Jo,1e4,()=>(this.r_()&&(this.state=3),Promise.resolve())),this.listener.Ro()))}),this.stream.mo(s=>{r(()=>this.I_(s))}),this.stream.onMessage(s=>{r(()=>++this.e_==1?this.E_(s):this.onNext(s))})}i_(){this.state=5,this.t_.Go(async()=>{this.state=0,this.start()})}I_(e){return ne("PersistentStream",`close with error: ${e}`),this.stream=null,this.close(4,e)}h_(e){return n=>{this.ui.enqueueAndForget(()=>this.Yo===e?n():(ne("PersistentStream","stream callback skipped by getCloseGuardedDispatcher."),Promise.resolve()))}}}class x1 extends hv{constructor(e,n,r,s,i,o){super(e,"listen_stream_connection_backoff","listen_stream_idle","health_check_timeout",n,r,s,o),this.serializer=i}T_(e,n){return this.connection.Bo("Listen",e,n)}E_(e){return this.onNext(e)}onNext(e){this.t_.reset();const n=zk(this.serializer,e),r=function(i){if(!("targetChange"in i))return ge.min();const o=i.targetChange;return o.targetIds&&o.targetIds.length?ge.min():o.readTime?hn(o.readTime):ge.min()}(e);return this.listener.d_(n,r)}A_(e){const n={};n.database=au(this.serializer),n.addTarget=function(i,o){let c;const l=o.target;if(c=nu(l)?{documents:Jk(i,l)}:{query:Xk(i,l)._t},c.targetId=o.targetId,o.resumeToken.approximateByteSize()>0){c.resumeToken=tv(i,o.resumeToken);const u=su(i,o.expectedCount);u!==null&&(c.expectedCount=u)}else if(o.snapshotVersion.compareTo(ge.min())>0){c.readTime=La(i,o.snapshotVersion.toTimestamp());const u=su(i,o.expectedCount);u!==null&&(c.expectedCount=u)}return c}(this.serializer,e);const r=Zk(this.serializer,e);r&&(n.labels=r),this.a_(n)}R_(e){const n={};n.database=au(this.serializer),n.removeTarget=e,this.a_(n)}}class M1 extends hv{constructor(e,n,r,s,i,o){super(e,"write_stream_connection_backoff","write_stream_idle","health_check_timeout",n,r,s,o),this.serializer=i}get V_(){return this.e_>0}start(){this.lastStreamToken=void 0,super.start()}l_(){this.V_&&this.m_([])}T_(e,n){return this.connection.Bo("Write",e,n)}E_(e){return Ve(!!e.streamToken),this.lastStreamToken=e.streamToken,Ve(!e.writeResults||e.writeResults.length===0),this.listener.f_()}onNext(e){Ve(!!e.streamToken),this.lastStreamToken=e.streamToken,this.t_.reset();const n=Qk(e.writeResults,e.commitTime),r=hn(e.commitTime);return this.listener.g_(r,n)}p_(){const e={};e.database=au(this.serializer),this.a_(e)}m_(e){const n={streamToken:this.lastStreamToken,writes:e.map(r=>Gk(this.serializer,r))};this.a_(n)}}/**
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
 */class L1 extends class{}{constructor(e,n,r,s){super(),this.authCredentials=e,this.appCheckCredentials=n,this.connection=r,this.serializer=s,this.y_=!1}w_(){if(this.y_)throw new ae(W.FAILED_PRECONDITION,"The client has already been terminated.")}Mo(e,n,r,s){return this.w_(),Promise.all([this.authCredentials.getToken(),this.appCheckCredentials.getToken()]).then(([i,o])=>this.connection.Mo(e,iu(n,r),s,i,o)).catch(i=>{throw i.name==="FirebaseError"?(i.code===W.UNAUTHENTICATED&&(this.authCredentials.invalidateToken(),this.appCheckCredentials.invalidateToken()),i):new ae(W.UNKNOWN,i.toString())})}Lo(e,n,r,s,i){return this.w_(),Promise.all([this.authCredentials.getToken(),this.appCheckCredentials.getToken()]).then(([o,c])=>this.connection.Lo(e,iu(n,r),s,o,c,i)).catch(o=>{throw o.name==="FirebaseError"?(o.code===W.UNAUTHENTICATED&&(this.authCredentials.invalidateToken(),this.appCheckCredentials.invalidateToken()),o):new ae(W.UNKNOWN,o.toString())})}terminate(){this.y_=!0,this.connection.terminate()}}class F1{constructor(e,n){this.asyncQueue=e,this.onlineStateHandler=n,this.state="Unknown",this.S_=0,this.b_=null,this.D_=!0}v_(){this.S_===0&&(this.C_("Unknown"),this.b_=this.asyncQueue.enqueueAfterDelay("online_state_timeout",1e4,()=>(this.b_=null,this.F_("Backend didn't respond within 10 seconds."),this.C_("Offline"),Promise.resolve())))}M_(e){this.state==="Online"?this.C_("Unknown"):(this.S_++,this.S_>=1&&(this.x_(),this.F_(`Connection failed 1 times. Most recent error: ${e.toString()}`),this.C_("Offline")))}set(e){this.x_(),this.S_=0,e==="Online"&&(this.D_=!1),this.C_(e)}C_(e){e!==this.state&&(this.state=e,this.onlineStateHandler(e))}F_(e){const n=`Could not reach Cloud Firestore backend. ${e}
This typically indicates that your device does not have a healthy Internet connection at the moment. The client will operate in offline mode until it is able to successfully connect to the backend.`;this.D_?(On(n),this.D_=!1):ne("OnlineStateTracker",n)}x_(){this.b_!==null&&(this.b_.cancel(),this.b_=null)}}/**
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
 */class U1{constructor(e,n,r,s,i){this.localStore=e,this.datastore=n,this.asyncQueue=r,this.remoteSyncer={},this.O_=[],this.N_=new Map,this.L_=new Set,this.B_=[],this.k_=i,this.k_._o(o=>{r.enqueueAndForget(async()=>{Gr(this)&&(ne("RemoteStore","Restarting streams for network reachability change."),await async function(l){const u=me(l);u.L_.add(4),await fo(u),u.q_.set("Unknown"),u.L_.delete(4),await yc(u)}(this))})}),this.q_=new F1(r,s)}}async function yc(t){if(Gr(t))for(const e of t.B_)await e(!0)}async function fo(t){for(const e of t.B_)await e(!1)}function fv(t,e){const n=me(t);n.N_.has(e.targetId)||(n.N_.set(e.targetId,e),Eh(n)?vh(n):zs(n).r_()&&yh(n,e))}function _h(t,e){const n=me(t),r=zs(n);n.N_.delete(e),r.r_()&&dv(n,e),n.N_.size===0&&(r.r_()?r.o_():Gr(n)&&n.q_.set("Unknown"))}function yh(t,e){if(t.Q_.xe(e.targetId),e.resumeToken.approximateByteSize()>0||e.snapshotVersion.compareTo(ge.min())>0){const n=t.remoteSyncer.getRemoteKeysForTarget(e.targetId).size;e=e.withExpectedCount(n)}zs(t).A_(e)}function dv(t,e){t.Q_.xe(e),zs(t).R_(e)}function vh(t){t.Q_=new Bk({getRemoteKeysForTarget:e=>t.remoteSyncer.getRemoteKeysForTarget(e),ot:e=>t.N_.get(e)||null,tt:()=>t.datastore.serializer.databaseId}),zs(t).start(),t.q_.v_()}function Eh(t){return Gr(t)&&!zs(t).n_()&&t.N_.size>0}function Gr(t){return me(t).L_.size===0}function pv(t){t.Q_=void 0}async function B1(t){t.q_.set("Online")}async function j1(t){t.N_.forEach((e,n)=>{yh(t,e)})}async function $1(t,e){pv(t),Eh(t)?(t.q_.M_(e),vh(t)):t.q_.set("Unknown")}async function H1(t,e,n){if(t.q_.set("Online"),e instanceof ev&&e.state===2&&e.cause)try{await async function(s,i){const o=i.cause;for(const c of i.targetIds)s.N_.has(c)&&(await s.remoteSyncer.rejectListen(c,o),s.N_.delete(c),s.Q_.removeTarget(c))}(t,e)}catch(r){ne("RemoteStore","Failed to remove targets %s: %s ",e.targetIds.join(","),r),await Fa(t,r)}else if(e instanceof oa?t.Q_.Ke(e):e instanceof Zy?t.Q_.He(e):t.Q_.We(e),!n.isEqual(ge.min()))try{const r=await lv(t.localStore);n.compareTo(r)>=0&&await function(i,o){const c=i.Q_.rt(o);return c.targetChanges.forEach((l,u)=>{if(l.resumeToken.approximateByteSize()>0){const h=i.N_.get(u);h&&i.N_.set(u,h.withResumeToken(l.resumeToken,o))}}),c.targetMismatches.forEach((l,u)=>{const h=i.N_.get(l);if(!h)return;i.N_.set(l,h.withResumeToken(ct.EMPTY_BYTE_STRING,h.snapshotVersion)),dv(i,l);const d=new er(h.target,l,u,h.sequenceNumber);yh(i,d)}),i.remoteSyncer.applyRemoteEvent(c)}(t,n)}catch(r){ne("RemoteStore","Failed to raise snapshot:",r),await Fa(t,r)}}async function Fa(t,e,n){if(!lo(e))throw e;t.L_.add(1),await fo(t),t.q_.set("Offline"),n||(n=()=>lv(t.localStore)),t.asyncQueue.enqueueRetryable(async()=>{ne("RemoteStore","Retrying IndexedDB access"),await n(),t.L_.delete(1),await yc(t)})}function gv(t,e){return e().catch(n=>Fa(t,n,e))}async function vc(t){const e=me(t),n=hr(e);let r=e.O_.length>0?e.O_[e.O_.length-1].batchId:-1;for(;q1(e);)try{const s=await S1(e.localStore,r);if(s===null){e.O_.length===0&&n.o_();break}r=s.batchId,W1(e,s)}catch(s){await Fa(e,s)}mv(e)&&_v(e)}function q1(t){return Gr(t)&&t.O_.length<10}function W1(t,e){t.O_.push(e);const n=hr(t);n.r_()&&n.V_&&n.m_(e.mutations)}function mv(t){return Gr(t)&&!hr(t).n_()&&t.O_.length>0}function _v(t){hr(t).start()}async function K1(t){hr(t).p_()}async function z1(t){const e=hr(t);for(const n of t.O_)e.m_(n.mutations)}async function G1(t,e,n){const r=t.O_.shift(),s=hh.from(r,e,n);await gv(t,()=>t.remoteSyncer.applySuccessfulWrite(s)),await vc(t)}async function Q1(t,e){e&&hr(t).V_&&await async function(r,s){if(function(o){return Lk(o)&&o!==W.ABORTED}(s.code)){const i=r.O_.shift();hr(r).s_(),await gv(r,()=>r.remoteSyncer.rejectFailedWrite(i.batchId,s)),await vc(r)}}(t,e),mv(t)&&_v(t)}async function eg(t,e){const n=me(t);n.asyncQueue.verifyOperationInProgress(),ne("RemoteStore","RemoteStore received new credentials");const r=Gr(n);n.L_.add(3),await fo(n),r&&n.q_.set("Unknown"),await n.remoteSyncer.handleCredentialChange(e),n.L_.delete(3),await yc(n)}async function J1(t,e){const n=me(t);e?(n.L_.delete(2),await yc(n)):e||(n.L_.add(2),await fo(n),n.q_.set("Unknown"))}function zs(t){return t.K_||(t.K_=function(n,r,s){const i=me(n);return i.w_(),new x1(r,i.connection,i.authCredentials,i.appCheckCredentials,i.serializer,s)}(t.datastore,t.asyncQueue,{Eo:B1.bind(null,t),Ro:j1.bind(null,t),mo:$1.bind(null,t),d_:H1.bind(null,t)}),t.B_.push(async e=>{e?(t.K_.s_(),Eh(t)?vh(t):t.q_.set("Unknown")):(await t.K_.stop(),pv(t))})),t.K_}function hr(t){return t.U_||(t.U_=function(n,r,s){const i=me(n);return i.w_(),new M1(r,i.connection,i.authCredentials,i.appCheckCredentials,i.serializer,s)}(t.datastore,t.asyncQueue,{Eo:()=>Promise.resolve(),Ro:K1.bind(null,t),mo:Q1.bind(null,t),f_:z1.bind(null,t),g_:G1.bind(null,t)}),t.B_.push(async e=>{e?(t.U_.s_(),await vc(t)):(await t.U_.stop(),t.O_.length>0&&(ne("RemoteStore",`Stopping write stream with ${t.O_.length} pending writes`),t.O_=[]))})),t.U_}/**
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
 */class Th{constructor(e,n,r,s,i){this.asyncQueue=e,this.timerId=n,this.targetTimeMs=r,this.op=s,this.removalCallback=i,this.deferred=new ir,this.then=this.deferred.promise.then.bind(this.deferred.promise),this.deferred.promise.catch(o=>{})}get promise(){return this.deferred.promise}static createAndSchedule(e,n,r,s,i){const o=Date.now()+r,c=new Th(e,n,o,s,i);return c.start(r),c}start(e){this.timerHandle=setTimeout(()=>this.handleDelayElapsed(),e)}skipDelay(){return this.handleDelayElapsed()}cancel(e){this.timerHandle!==null&&(this.clearTimeout(),this.deferred.reject(new ae(W.CANCELLED,"Operation cancelled"+(e?": "+e:""))))}handleDelayElapsed(){this.asyncQueue.enqueueAndForget(()=>this.timerHandle!==null?(this.clearTimeout(),this.op().then(e=>this.deferred.resolve(e))):Promise.resolve())}clearTimeout(){this.timerHandle!==null&&(this.removalCallback(this),clearTimeout(this.timerHandle),this.timerHandle=null)}}function wh(t,e){if(On("AsyncQueue",`${e}: ${t}`),lo(t))return new ae(W.UNAVAILABLE,`${e}: ${t}`);throw t}/**
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
 */class ws{constructor(e){this.comparator=e?(n,r)=>e(n,r)||ce.comparator(n.key,r.key):(n,r)=>ce.comparator(n.key,r.key),this.keyedMap=mi(),this.sortedSet=new je(this.comparator)}static emptySet(e){return new ws(e.comparator)}has(e){return this.keyedMap.get(e)!=null}get(e){return this.keyedMap.get(e)}first(){return this.sortedSet.minKey()}last(){return this.sortedSet.maxKey()}isEmpty(){return this.sortedSet.isEmpty()}indexOf(e){const n=this.keyedMap.get(e);return n?this.sortedSet.indexOf(n):-1}get size(){return this.sortedSet.size}forEach(e){this.sortedSet.inorderTraversal((n,r)=>(e(n),!1))}add(e){const n=this.delete(e.key);return n.copy(n.keyedMap.insert(e.key,e),n.sortedSet.insert(e,null))}delete(e){const n=this.get(e);return n?this.copy(this.keyedMap.remove(e),this.sortedSet.remove(n)):this}isEqual(e){if(!(e instanceof ws)||this.size!==e.size)return!1;const n=this.sortedSet.getIterator(),r=e.sortedSet.getIterator();for(;n.hasNext();){const s=n.getNext().key,i=r.getNext().key;if(!s.isEqual(i))return!1}return!0}toString(){const e=[];return this.forEach(n=>{e.push(n.toString())}),e.length===0?"DocumentSet ()":`DocumentSet (
  `+e.join(`  
`)+`
)`}copy(e,n){const r=new ws;return r.comparator=this.comparator,r.keyedMap=e,r.sortedSet=n,r}}/**
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
 */class tg{constructor(){this.W_=new je(ce.comparator)}track(e){const n=e.doc.key,r=this.W_.get(n);r?e.type!==0&&r.type===3?this.W_=this.W_.insert(n,e):e.type===3&&r.type!==1?this.W_=this.W_.insert(n,{type:r.type,doc:e.doc}):e.type===2&&r.type===2?this.W_=this.W_.insert(n,{type:2,doc:e.doc}):e.type===2&&r.type===0?this.W_=this.W_.insert(n,{type:0,doc:e.doc}):e.type===1&&r.type===0?this.W_=this.W_.remove(n):e.type===1&&r.type===2?this.W_=this.W_.insert(n,{type:1,doc:r.doc}):e.type===0&&r.type===1?this.W_=this.W_.insert(n,{type:2,doc:e.doc}):de():this.W_=this.W_.insert(n,e)}G_(){const e=[];return this.W_.inorderTraversal((n,r)=>{e.push(r)}),e}}class xs{constructor(e,n,r,s,i,o,c,l,u){this.query=e,this.docs=n,this.oldDocs=r,this.docChanges=s,this.mutatedKeys=i,this.fromCache=o,this.syncStateChanged=c,this.excludesMetadataChanges=l,this.hasCachedResults=u}static fromInitialDocuments(e,n,r,s,i){const o=[];return n.forEach(c=>{o.push({type:0,doc:c})}),new xs(e,n,ws.emptySet(n),o,r,s,!0,!1,i)}get hasPendingWrites(){return!this.mutatedKeys.isEmpty()}isEqual(e){if(!(this.fromCache===e.fromCache&&this.hasCachedResults===e.hasCachedResults&&this.syncStateChanged===e.syncStateChanged&&this.mutatedKeys.isEqual(e.mutatedKeys)&&fc(this.query,e.query)&&this.docs.isEqual(e.docs)&&this.oldDocs.isEqual(e.oldDocs)))return!1;const n=this.docChanges,r=e.docChanges;if(n.length!==r.length)return!1;for(let s=0;s<n.length;s++)if(n[s].type!==r[s].type||!n[s].doc.isEqual(r[s].doc))return!1;return!0}}/**
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
 */class X1{constructor(){this.z_=void 0,this.j_=[]}H_(){return this.j_.some(e=>e.J_())}}class Y1{constructor(){this.queries=ng(),this.onlineState="Unknown",this.Y_=new Set}terminate(){(function(n,r){const s=me(n),i=s.queries;s.queries=ng(),i.forEach((o,c)=>{for(const l of c.j_)l.onError(r)})})(this,new ae(W.ABORTED,"Firestore shutting down"))}}function ng(){return new Ks(t=>Uy(t),fc)}async function Z1(t,e){const n=me(t);let r=3;const s=e.query;let i=n.queries.get(s);i?!i.H_()&&e.J_()&&(r=2):(i=new X1,r=e.J_()?0:1);try{switch(r){case 0:i.z_=await n.onListen(s,!0);break;case 1:i.z_=await n.onListen(s,!1);break;case 2:await n.onFirstRemoteStoreListen(s)}}catch(o){const c=wh(o,`Initialization of query '${is(e.query)}' failed`);return void e.onError(c)}n.queries.set(s,i),i.j_.push(e),e.Z_(n.onlineState),i.z_&&e.X_(i.z_)&&Ih(n)}async function eO(t,e){const n=me(t),r=e.query;let s=3;const i=n.queries.get(r);if(i){const o=i.j_.indexOf(e);o>=0&&(i.j_.splice(o,1),i.j_.length===0?s=e.J_()?0:1:!i.H_()&&e.J_()&&(s=2))}switch(s){case 0:return n.queries.delete(r),n.onUnlisten(r,!0);case 1:return n.queries.delete(r),n.onUnlisten(r,!1);case 2:return n.onLastRemoteStoreUnlisten(r);default:return}}function tO(t,e){const n=me(t);let r=!1;for(const s of e){const i=s.query,o=n.queries.get(i);if(o){for(const c of o.j_)c.X_(s)&&(r=!0);o.z_=s}}r&&Ih(n)}function nO(t,e,n){const r=me(t),s=r.queries.get(e);if(s)for(const i of s.j_)i.onError(n);r.queries.delete(e)}function Ih(t){t.Y_.forEach(e=>{e.next()})}var lu,rg;(rg=lu||(lu={})).ea="default",rg.Cache="cache";class rO{constructor(e,n,r){this.query=e,this.ta=n,this.na=!1,this.ra=null,this.onlineState="Unknown",this.options=r||{}}X_(e){if(!this.options.includeMetadataChanges){const r=[];for(const s of e.docChanges)s.type!==3&&r.push(s);e=new xs(e.query,e.docs,e.oldDocs,r,e.mutatedKeys,e.fromCache,e.syncStateChanged,!0,e.hasCachedResults)}let n=!1;return this.na?this.ia(e)&&(this.ta.next(e),n=!0):this.sa(e,this.onlineState)&&(this.oa(e),n=!0),this.ra=e,n}onError(e){this.ta.error(e)}Z_(e){this.onlineState=e;let n=!1;return this.ra&&!this.na&&this.sa(this.ra,e)&&(this.oa(this.ra),n=!0),n}sa(e,n){if(!e.fromCache||!this.J_())return!0;const r=n!=="Offline";return(!this.options._a||!r)&&(!e.docs.isEmpty()||e.hasCachedResults||n==="Offline")}ia(e){if(e.docChanges.length>0)return!0;const n=this.ra&&this.ra.hasPendingWrites!==e.hasPendingWrites;return!(!e.syncStateChanged&&!n)&&this.options.includeMetadataChanges===!0}oa(e){e=xs.fromInitialDocuments(e.query,e.docs,e.mutatedKeys,e.fromCache,e.hasCachedResults),this.na=!0,this.ta.next(e)}J_(){return this.options.source!==lu.Cache}}/**
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
 */class yv{constructor(e){this.key=e}}class vv{constructor(e){this.key=e}}class sO{constructor(e,n){this.query=e,this.Ta=n,this.Ea=null,this.hasCachedResults=!1,this.current=!1,this.da=_e(),this.mutatedKeys=_e(),this.Aa=By(e),this.Ra=new ws(this.Aa)}get Va(){return this.Ta}ma(e,n){const r=n?n.fa:new tg,s=n?n.Ra:this.Ra;let i=n?n.mutatedKeys:this.mutatedKeys,o=s,c=!1;const l=this.query.limitType==="F"&&s.size===this.query.limit?s.last():null,u=this.query.limitType==="L"&&s.size===this.query.limit?s.first():null;if(e.inorderTraversal((h,d)=>{const g=s.get(h),m=dc(this.query,d)?d:null,P=!!g&&this.mutatedKeys.has(g.key),k=!!m&&(m.hasLocalMutations||this.mutatedKeys.has(m.key)&&m.hasCommittedMutations);let O=!1;g&&m?g.data.isEqual(m.data)?P!==k&&(r.track({type:3,doc:m}),O=!0):this.ga(g,m)||(r.track({type:2,doc:m}),O=!0,(l&&this.Aa(m,l)>0||u&&this.Aa(m,u)<0)&&(c=!0)):!g&&m?(r.track({type:0,doc:m}),O=!0):g&&!m&&(r.track({type:1,doc:g}),O=!0,(l||u)&&(c=!0)),O&&(m?(o=o.add(m),i=k?i.add(h):i.delete(h)):(o=o.delete(h),i=i.delete(h)))}),this.query.limit!==null)for(;o.size>this.query.limit;){const h=this.query.limitType==="F"?o.last():o.first();o=o.delete(h.key),i=i.delete(h.key),r.track({type:1,doc:h})}return{Ra:o,fa:r,ns:c,mutatedKeys:i}}ga(e,n){return e.hasLocalMutations&&n.hasCommittedMutations&&!n.hasLocalMutations}applyChanges(e,n,r,s){const i=this.Ra;this.Ra=e.Ra,this.mutatedKeys=e.mutatedKeys;const o=e.fa.G_();o.sort((h,d)=>function(m,P){const k=O=>{switch(O){case 0:return 1;case 2:case 3:return 2;case 1:return 0;default:return de()}};return k(m)-k(P)}(h.type,d.type)||this.Aa(h.doc,d.doc)),this.pa(r),s=s!=null&&s;const c=n&&!s?this.ya():[],l=this.da.size===0&&this.current&&!s?1:0,u=l!==this.Ea;return this.Ea=l,o.length!==0||u?{snapshot:new xs(this.query,e.Ra,i,o,e.mutatedKeys,l===0,u,!1,!!r&&r.resumeToken.approximateByteSize()>0),wa:c}:{wa:c}}Z_(e){return this.current&&e==="Offline"?(this.current=!1,this.applyChanges({Ra:this.Ra,fa:new tg,mutatedKeys:this.mutatedKeys,ns:!1},!1)):{wa:[]}}Sa(e){return!this.Ta.has(e)&&!!this.Ra.has(e)&&!this.Ra.get(e).hasLocalMutations}pa(e){e&&(e.addedDocuments.forEach(n=>this.Ta=this.Ta.add(n)),e.modifiedDocuments.forEach(n=>{}),e.removedDocuments.forEach(n=>this.Ta=this.Ta.delete(n)),this.current=e.current)}ya(){if(!this.current)return[];const e=this.da;this.da=_e(),this.Ra.forEach(r=>{this.Sa(r.key)&&(this.da=this.da.add(r.key))});const n=[];return e.forEach(r=>{this.da.has(r)||n.push(new vv(r))}),this.da.forEach(r=>{e.has(r)||n.push(new yv(r))}),n}ba(e){this.Ta=e.Ts,this.da=_e();const n=this.ma(e.documents);return this.applyChanges(n,!0)}Da(){return xs.fromInitialDocuments(this.query,this.Ra,this.mutatedKeys,this.Ea===0,this.hasCachedResults)}}class iO{constructor(e,n,r){this.query=e,this.targetId=n,this.view=r}}class oO{constructor(e){this.key=e,this.va=!1}}class aO{constructor(e,n,r,s,i,o){this.localStore=e,this.remoteStore=n,this.eventManager=r,this.sharedClientState=s,this.currentUser=i,this.maxConcurrentLimboResolutions=o,this.Ca={},this.Fa=new Ks(c=>Uy(c),fc),this.Ma=new Map,this.xa=new Set,this.Oa=new je(ce.comparator),this.Na=new Map,this.La=new ph,this.Ba={},this.ka=new Map,this.qa=Vs.kn(),this.onlineState="Unknown",this.Qa=void 0}get isPrimaryClient(){return this.Qa===!0}}async function cO(t,e,n=!0){const r=Av(t);let s;const i=r.Fa.get(e);return i?(r.sharedClientState.addLocalQueryTarget(i.targetId),s=i.view.Da()):s=await Ev(r,e,n,!0),s}async function lO(t,e){const n=Av(t);await Ev(n,e,!0,!1)}async function Ev(t,e,n,r){const s=await P1(t.localStore,un(e)),i=s.targetId,o=n?t.sharedClientState.addLocalQueryTarget(i):"not-current";let c;return r&&(c=await uO(t,e,i,o==="current",s.resumeToken)),t.isPrimaryClient&&n&&fv(t.remoteStore,s),c}async function uO(t,e,n,r,s){t.Ka=(d,g,m)=>async function(k,O,V,N){let b=O.view.ma(V);b.ns&&(b=await Xp(k.localStore,O.query,!1).then(({documents:I})=>O.view.ma(I,b)));const C=N&&N.targetChanges.get(O.targetId),x=N&&N.targetMismatches.get(O.targetId)!=null,F=O.view.applyChanges(b,k.isPrimaryClient,C,x);return ig(k,O.targetId,F.wa),F.snapshot}(t,d,g,m);const i=await Xp(t.localStore,e,!0),o=new sO(e,i.Ts),c=o.ma(i.documents),l=ho.createSynthesizedTargetChangeForCurrentChange(n,r&&t.onlineState!=="Offline",s),u=o.applyChanges(c,t.isPrimaryClient,l);ig(t,n,u.wa);const h=new iO(e,n,o);return t.Fa.set(e,h),t.Ma.has(n)?t.Ma.get(n).push(e):t.Ma.set(n,[e]),u.snapshot}async function hO(t,e,n){const r=me(t),s=r.Fa.get(e),i=r.Ma.get(s.targetId);if(i.length>1)return r.Ma.set(s.targetId,i.filter(o=>!fc(o,e))),void r.Fa.delete(e);r.isPrimaryClient?(r.sharedClientState.removeLocalQueryTarget(s.targetId),r.sharedClientState.isActiveQueryTarget(s.targetId)||await cu(r.localStore,s.targetId,!1).then(()=>{r.sharedClientState.clearQueryState(s.targetId),n&&_h(r.remoteStore,s.targetId),uu(r,s.targetId)}).catch(co)):(uu(r,s.targetId),await cu(r.localStore,s.targetId,!0))}async function fO(t,e){const n=me(t),r=n.Fa.get(e),s=n.Ma.get(r.targetId);n.isPrimaryClient&&s.length===1&&(n.sharedClientState.removeLocalQueryTarget(r.targetId),_h(n.remoteStore,r.targetId))}async function dO(t,e,n){const r=EO(t);try{const s=await function(o,c){const l=me(o),u=Je.now(),h=c.reduce((m,P)=>m.add(P.key),_e());let d,g;return l.persistence.runTransaction("Locally write mutations","readwrite",m=>{let P=Nn(),k=_e();return l.cs.getEntries(m,h).next(O=>{P=O,P.forEach((V,N)=>{N.isValidDocument()||(k=k.add(V))})}).next(()=>l.localDocuments.getOverlayedDocuments(m,P)).next(O=>{d=O;const V=[];for(const N of c){const b=Nk(N,d.get(N.key).overlayedDocument);b!=null&&V.push(new zr(N.key,b,Ny(b.value.mapValue),Sn.exists(!0)))}return l.mutationQueue.addMutationBatch(m,u,V,c)}).next(O=>{g=O;const V=O.applyToLocalDocumentSet(d,k);return l.documentOverlayCache.saveOverlays(m,O.batchId,V)})}).then(()=>({batchId:g.batchId,changes:$y(d)}))}(r.localStore,e);r.sharedClientState.addPendingMutation(s.batchId),function(o,c,l){let u=o.Ba[o.currentUser.toKey()];u||(u=new je(be)),u=u.insert(c,l),o.Ba[o.currentUser.toKey()]=u}(r,s.batchId,n),await po(r,s.changes),await vc(r.remoteStore)}catch(s){const i=wh(s,"Failed to persist write");n.reject(i)}}async function Tv(t,e){const n=me(t);try{const r=await A1(n.localStore,e);e.targetChanges.forEach((s,i)=>{const o=n.Na.get(i);o&&(Ve(s.addedDocuments.size+s.modifiedDocuments.size+s.removedDocuments.size<=1),s.addedDocuments.size>0?o.va=!0:s.modifiedDocuments.size>0?Ve(o.va):s.removedDocuments.size>0&&(Ve(o.va),o.va=!1))}),await po(n,r,e)}catch(r){await co(r)}}function sg(t,e,n){const r=me(t);if(r.isPrimaryClient&&n===0||!r.isPrimaryClient&&n===1){const s=[];r.Fa.forEach((i,o)=>{const c=o.view.Z_(e);c.snapshot&&s.push(c.snapshot)}),function(o,c){const l=me(o);l.onlineState=c;let u=!1;l.queries.forEach((h,d)=>{for(const g of d.j_)g.Z_(c)&&(u=!0)}),u&&Ih(l)}(r.eventManager,e),s.length&&r.Ca.d_(s),r.onlineState=e,r.isPrimaryClient&&r.sharedClientState.setOnlineState(e)}}async function pO(t,e,n){const r=me(t);r.sharedClientState.updateQueryState(e,"rejected",n);const s=r.Na.get(e),i=s&&s.key;if(i){let o=new je(ce.comparator);o=o.insert(i,mt.newNoDocument(i,ge.min()));const c=_e().add(i),l=new mc(ge.min(),new Map,new je(be),o,c);await Tv(r,l),r.Oa=r.Oa.remove(i),r.Na.delete(e),bh(r)}else await cu(r.localStore,e,!1).then(()=>uu(r,e,n)).catch(co)}async function gO(t,e){const n=me(t),r=e.batch.batchId;try{const s=await b1(n.localStore,e);Iv(n,r,null),wv(n,r),n.sharedClientState.updateMutationState(r,"acknowledged"),await po(n,s)}catch(s){await co(s)}}async function mO(t,e,n){const r=me(t);try{const s=await function(o,c){const l=me(o);return l.persistence.runTransaction("Reject batch","readwrite-primary",u=>{let h;return l.mutationQueue.lookupMutationBatch(u,c).next(d=>(Ve(d!==null),h=d.keys(),l.mutationQueue.removeMutationBatch(u,d))).next(()=>l.mutationQueue.performConsistencyCheck(u)).next(()=>l.documentOverlayCache.removeOverlaysForBatchId(u,h,c)).next(()=>l.localDocuments.recalculateAndSaveOverlaysForDocumentKeys(u,h)).next(()=>l.localDocuments.getDocuments(u,h))})}(r.localStore,e);Iv(r,e,n),wv(r,e),r.sharedClientState.updateMutationState(e,"rejected",n),await po(r,s)}catch(s){await co(s)}}function wv(t,e){(t.ka.get(e)||[]).forEach(n=>{n.resolve()}),t.ka.delete(e)}function Iv(t,e,n){const r=me(t);let s=r.Ba[r.currentUser.toKey()];if(s){const i=s.get(e);i&&(n?i.reject(n):i.resolve(),s=s.remove(e)),r.Ba[r.currentUser.toKey()]=s}}function uu(t,e,n=null){t.sharedClientState.removeLocalQueryTarget(e);for(const r of t.Ma.get(e))t.Fa.delete(r),n&&t.Ca.$a(r,n);t.Ma.delete(e),t.isPrimaryClient&&t.La.gr(e).forEach(r=>{t.La.containsKey(r)||bv(t,r)})}function bv(t,e){t.xa.delete(e.path.canonicalString());const n=t.Oa.get(e);n!==null&&(_h(t.remoteStore,n),t.Oa=t.Oa.remove(e),t.Na.delete(n),bh(t))}function ig(t,e,n){for(const r of n)r instanceof yv?(t.La.addReference(r.key,e),_O(t,r)):r instanceof vv?(ne("SyncEngine","Document no longer in limbo: "+r.key),t.La.removeReference(r.key,e),t.La.containsKey(r.key)||bv(t,r.key)):de()}function _O(t,e){const n=e.key,r=n.path.canonicalString();t.Oa.get(n)||t.xa.has(r)||(ne("SyncEngine","New document in limbo: "+n),t.xa.add(r),bh(t))}function bh(t){for(;t.xa.size>0&&t.Oa.size<t.maxConcurrentLimboResolutions;){const e=t.xa.values().next().value;t.xa.delete(e);const n=new ce(He.fromString(e)),r=t.qa.next();t.Na.set(r,new oO(n)),t.Oa=t.Oa.insert(n,r),fv(t.remoteStore,new er(un(lh(n.path)),r,"TargetPurposeLimboResolution",rh.oe))}}async function po(t,e,n){const r=me(t),s=[],i=[],o=[];r.Fa.isEmpty()||(r.Fa.forEach((c,l)=>{o.push(r.Ka(l,e,n).then(u=>{var h;if((u||n)&&r.isPrimaryClient){const d=u?!u.fromCache:(h=n==null?void 0:n.targetChanges.get(l.targetId))===null||h===void 0?void 0:h.current;r.sharedClientState.updateQueryState(l.targetId,d?"current":"not-current")}if(u){s.push(u);const d=mh.Wi(l.targetId,u);i.push(d)}}))}),await Promise.all(o),r.Ca.d_(s),await async function(l,u){const h=me(l);try{await h.persistence.runTransaction("notifyLocalViewChanges","readwrite",d=>$.forEach(u,g=>$.forEach(g.$i,m=>h.persistence.referenceDelegate.addReference(d,g.targetId,m)).next(()=>$.forEach(g.Ui,m=>h.persistence.referenceDelegate.removeReference(d,g.targetId,m)))))}catch(d){if(!lo(d))throw d;ne("LocalStore","Failed to update sequence numbers: "+d)}for(const d of u){const g=d.targetId;if(!d.fromCache){const m=h.os.get(g),P=m.snapshotVersion,k=m.withLastLimboFreeSnapshotVersion(P);h.os=h.os.insert(g,k)}}}(r.localStore,i))}async function yO(t,e){const n=me(t);if(!n.currentUser.isEqual(e)){ne("SyncEngine","User change. New user:",e.toKey());const r=await cv(n.localStore,e);n.currentUser=e,function(i,o){i.ka.forEach(c=>{c.forEach(l=>{l.reject(new ae(W.CANCELLED,o))})}),i.ka.clear()}(n,"'waitForPendingWrites' promise is rejected due to a user change."),n.sharedClientState.handleUserChange(e,r.removedBatchIds,r.addedBatchIds),await po(n,r.hs)}}function vO(t,e){const n=me(t),r=n.Na.get(e);if(r&&r.va)return _e().add(r.key);{let s=_e();const i=n.Ma.get(e);if(!i)return s;for(const o of i){const c=n.Fa.get(o);s=s.unionWith(c.view.Va)}return s}}function Av(t){const e=me(t);return e.remoteStore.remoteSyncer.applyRemoteEvent=Tv.bind(null,e),e.remoteStore.remoteSyncer.getRemoteKeysForTarget=vO.bind(null,e),e.remoteStore.remoteSyncer.rejectListen=pO.bind(null,e),e.Ca.d_=tO.bind(null,e.eventManager),e.Ca.$a=nO.bind(null,e.eventManager),e}function EO(t){const e=me(t);return e.remoteStore.remoteSyncer.applySuccessfulWrite=gO.bind(null,e),e.remoteStore.remoteSyncer.rejectFailedWrite=mO.bind(null,e),e}class og{constructor(){this.synchronizeTabs=!1}async initialize(e){this.serializer=_c(e.databaseInfo.databaseId),this.sharedClientState=this.createSharedClientState(e),this.persistence=this.createPersistence(e),await this.persistence.start(),this.localStore=this.createLocalStore(e),this.gcScheduler=this.createGarbageCollectionScheduler(e,this.localStore),this.indexBackfillerScheduler=this.createIndexBackfillerScheduler(e,this.localStore)}createGarbageCollectionScheduler(e,n){return null}createIndexBackfillerScheduler(e,n){return null}createLocalStore(e){return I1(this.persistence,new T1,e.initialUser,this.serializer)}createPersistence(e){return new y1(gh.Zr,this.serializer)}createSharedClientState(e){return new k1}async terminate(){var e,n;(e=this.gcScheduler)===null||e===void 0||e.stop(),(n=this.indexBackfillerScheduler)===null||n===void 0||n.stop(),this.sharedClientState.shutdown(),await this.persistence.shutdown()}}class TO{async initialize(e,n){this.localStore||(this.localStore=e.localStore,this.sharedClientState=e.sharedClientState,this.datastore=this.createDatastore(n),this.remoteStore=this.createRemoteStore(n),this.eventManager=this.createEventManager(n),this.syncEngine=this.createSyncEngine(n,!e.synchronizeTabs),this.sharedClientState.onlineStateHandler=r=>sg(this.syncEngine,r,1),this.remoteStore.remoteSyncer.handleCredentialChange=yO.bind(null,this.syncEngine),await J1(this.remoteStore,this.syncEngine.isPrimaryClient))}createEventManager(e){return function(){return new Y1}()}createDatastore(e){const n=_c(e.databaseInfo.databaseId),r=function(i){return new V1(i)}(e.databaseInfo);return function(i,o,c,l){return new L1(i,o,c,l)}(e.authCredentials,e.appCheckCredentials,r,n)}createRemoteStore(e){return function(r,s,i,o,c){return new U1(r,s,i,o,c)}(this.localStore,this.datastore,e.asyncQueue,n=>sg(this.syncEngine,n,0),function(){return Zp.D()?new Zp:new O1}())}createSyncEngine(e,n){return function(s,i,o,c,l,u,h){const d=new aO(s,i,o,c,l,u);return h&&(d.Qa=!0),d}(this.localStore,this.remoteStore,this.eventManager,this.sharedClientState,e.initialUser,e.maxConcurrentLimboResolutions,n)}async terminate(){var e,n;await async function(s){const i=me(s);ne("RemoteStore","RemoteStore shutting down."),i.L_.add(5),await fo(i),i.k_.shutdown(),i.q_.set("Unknown")}(this.remoteStore),(e=this.datastore)===null||e===void 0||e.terminate(),(n=this.eventManager)===null||n===void 0||n.terminate()}}/**
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
 */class wO{constructor(e){this.observer=e,this.muted=!1}next(e){this.observer.next&&this.Ga(this.observer.next,e)}error(e){this.observer.error?this.Ga(this.observer.error,e):On("Uncaught Error in snapshot listener:",e.toString())}za(){this.muted=!0}Ga(e,n){this.muted||setTimeout(()=>{this.muted||e(n)},0)}}/**
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
 */class IO{constructor(e,n,r,s){this.authCredentials=e,this.appCheckCredentials=n,this.asyncQueue=r,this.databaseInfo=s,this.user=pt.UNAUTHENTICATED,this.clientId=Cy.newId(),this.authCredentialListener=()=>Promise.resolve(),this.appCheckCredentialListener=()=>Promise.resolve(),this.authCredentials.start(r,async i=>{ne("FirestoreClient","Received user=",i.uid),await this.authCredentialListener(i),this.user=i}),this.appCheckCredentials.start(r,i=>(ne("FirestoreClient","Received new app check token=",i),this.appCheckCredentialListener(i,this.user)))}get configuration(){return{asyncQueue:this.asyncQueue,databaseInfo:this.databaseInfo,clientId:this.clientId,authCredentials:this.authCredentials,appCheckCredentials:this.appCheckCredentials,initialUser:this.user,maxConcurrentLimboResolutions:100}}setCredentialChangeListener(e){this.authCredentialListener=e}setAppCheckTokenChangeListener(e){this.appCheckCredentialListener=e}verifyNotTerminated(){if(this.asyncQueue.isShuttingDown)throw new ae(W.FAILED_PRECONDITION,"The client has already been terminated.")}terminate(){this.asyncQueue.enterRestrictedMode();const e=new ir;return this.asyncQueue.enqueueAndForgetEvenWhileRestricted(async()=>{try{this._onlineComponents&&await this._onlineComponents.terminate(),this._offlineComponents&&await this._offlineComponents.terminate(),this.authCredentials.shutdown(),this.appCheckCredentials.shutdown(),e.resolve()}catch(n){const r=wh(n,"Failed to shutdown persistence");e.reject(r)}}),e.promise}}async function hl(t,e){t.asyncQueue.verifyOperationInProgress(),ne("FirestoreClient","Initializing OfflineComponentProvider");const n=t.configuration;await e.initialize(n);let r=n.initialUser;t.setCredentialChangeListener(async s=>{r.isEqual(s)||(await cv(e.localStore,s),r=s)}),e.persistence.setDatabaseDeletedListener(()=>t.terminate()),t._offlineComponents=e}async function ag(t,e){t.asyncQueue.verifyOperationInProgress();const n=await AO(t);ne("FirestoreClient","Initializing OnlineComponentProvider"),await e.initialize(n,t.configuration),t.setCredentialChangeListener(r=>eg(e.remoteStore,r)),t.setAppCheckTokenChangeListener((r,s)=>eg(e.remoteStore,s)),t._onlineComponents=e}function bO(t){return t.name==="FirebaseError"?t.code===W.FAILED_PRECONDITION||t.code===W.UNIMPLEMENTED:!(typeof DOMException<"u"&&t instanceof DOMException)||t.code===22||t.code===20||t.code===11}async function AO(t){if(!t._offlineComponents)if(t._uninitializedComponentsProvider){ne("FirestoreClient","Using user provided OfflineComponentProvider");try{await hl(t,t._uninitializedComponentsProvider._offline)}catch(e){const n=e;if(!bO(n))throw n;ks("Error using user provided cache. Falling back to memory cache: "+n),await hl(t,new og)}}else ne("FirestoreClient","Using default OfflineComponentProvider"),await hl(t,new og);return t._offlineComponents}async function Rv(t){return t._onlineComponents||(t._uninitializedComponentsProvider?(ne("FirestoreClient","Using user provided OnlineComponentProvider"),await ag(t,t._uninitializedComponentsProvider._online)):(ne("FirestoreClient","Using default OnlineComponentProvider"),await ag(t,new TO))),t._onlineComponents}function RO(t){return Rv(t).then(e=>e.syncEngine)}async function SO(t){const e=await Rv(t),n=e.eventManager;return n.onListen=cO.bind(null,e.syncEngine),n.onUnlisten=hO.bind(null,e.syncEngine),n.onFirstRemoteStoreListen=lO.bind(null,e.syncEngine),n.onLastRemoteStoreUnlisten=fO.bind(null,e.syncEngine),n}function PO(t,e,n={}){const r=new ir;return t.asyncQueue.enqueueAndForget(async()=>function(i,o,c,l,u){const h=new wO({next:g=>{o.enqueueAndForget(()=>eO(i,d));const m=g.docs.has(c);!m&&g.fromCache?u.reject(new ae(W.UNAVAILABLE,"Failed to get document because the client is offline.")):m&&g.fromCache&&l&&l.source==="server"?u.reject(new ae(W.UNAVAILABLE,'Failed to get document from server. (However, this document does exist in the local cache. Run again without setting source to "server" to retrieve the cached document.)')):u.resolve(g)},error:g=>u.reject(g)}),d=new rO(lh(c.path),h,{includeMetadataChanges:!0,_a:!0});return Z1(i,d)}(await SO(t),t.asyncQueue,e,n,r)),r.promise}/**
 * @license
 * Copyright 2023 Google LLC
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
 */function Sv(t){const e={};return t.timeoutSeconds!==void 0&&(e.timeoutSeconds=t.timeoutSeconds),e}/**
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
 */const cg=new Map;/**
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
 */function CO(t,e,n){if(!n)throw new ae(W.INVALID_ARGUMENT,`Function ${t}() cannot be called with an empty ${e}.`)}function kO(t,e,n,r){if(e===!0&&r===!0)throw new ae(W.INVALID_ARGUMENT,`${t} and ${n} cannot be used together.`)}function lg(t){if(!ce.isDocumentKey(t))throw new ae(W.INVALID_ARGUMENT,`Invalid document reference. Document references must have an even number of segments, but ${t} has ${t.length}.`)}function Ah(t){if(t===void 0)return"undefined";if(t===null)return"null";if(typeof t=="string")return t.length>20&&(t=`${t.substring(0,20)}...`),JSON.stringify(t);if(typeof t=="number"||typeof t=="boolean")return""+t;if(typeof t=="object"){if(t instanceof Array)return"an array";{const e=function(r){return r.constructor?r.constructor.name:null}(t);return e?`a custom ${e} object`:"an object"}}return typeof t=="function"?"a function":de()}function Ji(t,e){if("_delegate"in t&&(t=t._delegate),!(t instanceof e)){if(e.name===t.constructor.name)throw new ae(W.INVALID_ARGUMENT,"Type does not match the expected instance. Did you pass a reference from a different Firestore SDK?");{const n=Ah(t);throw new ae(W.INVALID_ARGUMENT,`Expected type '${e.name}', but it was: ${n}`)}}return t}/**
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
 */class ug{constructor(e){var n,r;if(e.host===void 0){if(e.ssl!==void 0)throw new ae(W.INVALID_ARGUMENT,"Can't provide ssl option if host option is not set");this.host="firestore.googleapis.com",this.ssl=!0}else this.host=e.host,this.ssl=(n=e.ssl)===null||n===void 0||n;if(this.credentials=e.credentials,this.ignoreUndefinedProperties=!!e.ignoreUndefinedProperties,this.localCache=e.localCache,e.cacheSizeBytes===void 0)this.cacheSizeBytes=41943040;else{if(e.cacheSizeBytes!==-1&&e.cacheSizeBytes<1048576)throw new ae(W.INVALID_ARGUMENT,"cacheSizeBytes must be at least 1048576");this.cacheSizeBytes=e.cacheSizeBytes}kO("experimentalForceLongPolling",e.experimentalForceLongPolling,"experimentalAutoDetectLongPolling",e.experimentalAutoDetectLongPolling),this.experimentalForceLongPolling=!!e.experimentalForceLongPolling,this.experimentalForceLongPolling?this.experimentalAutoDetectLongPolling=!1:e.experimentalAutoDetectLongPolling===void 0?this.experimentalAutoDetectLongPolling=!0:this.experimentalAutoDetectLongPolling=!!e.experimentalAutoDetectLongPolling,this.experimentalLongPollingOptions=Sv((r=e.experimentalLongPollingOptions)!==null&&r!==void 0?r:{}),function(i){if(i.timeoutSeconds!==void 0){if(isNaN(i.timeoutSeconds))throw new ae(W.INVALID_ARGUMENT,`invalid long polling timeout: ${i.timeoutSeconds} (must not be NaN)`);if(i.timeoutSeconds<5)throw new ae(W.INVALID_ARGUMENT,`invalid long polling timeout: ${i.timeoutSeconds} (minimum allowed value is 5)`);if(i.timeoutSeconds>30)throw new ae(W.INVALID_ARGUMENT,`invalid long polling timeout: ${i.timeoutSeconds} (maximum allowed value is 30)`)}}(this.experimentalLongPollingOptions),this.useFetchStreams=!!e.useFetchStreams}isEqual(e){return this.host===e.host&&this.ssl===e.ssl&&this.credentials===e.credentials&&this.cacheSizeBytes===e.cacheSizeBytes&&this.experimentalForceLongPolling===e.experimentalForceLongPolling&&this.experimentalAutoDetectLongPolling===e.experimentalAutoDetectLongPolling&&function(r,s){return r.timeoutSeconds===s.timeoutSeconds}(this.experimentalLongPollingOptions,e.experimentalLongPollingOptions)&&this.ignoreUndefinedProperties===e.ignoreUndefinedProperties&&this.useFetchStreams===e.useFetchStreams}}class Rh{constructor(e,n,r,s){this._authCredentials=e,this._appCheckCredentials=n,this._databaseId=r,this._app=s,this.type="firestore-lite",this._persistenceKey="(lite)",this._settings=new ug({}),this._settingsFrozen=!1}get app(){if(!this._app)throw new ae(W.FAILED_PRECONDITION,"Firestore was not initialized using the Firebase SDK. 'app' is not available");return this._app}get _initialized(){return this._settingsFrozen}get _terminated(){return this._terminateTask!==void 0}_setSettings(e){if(this._settingsFrozen)throw new ae(W.FAILED_PRECONDITION,"Firestore has already been started and its settings can no longer be changed. You can only modify settings before calling any other methods on a Firestore object.");this._settings=new ug(e),e.credentials!==void 0&&(this._authCredentials=function(r){if(!r)return new BC;switch(r.type){case"firstParty":return new qC(r.sessionIndex||"0",r.iamToken||null,r.authTokenFactory||null);case"provider":return r.client;default:throw new ae(W.INVALID_ARGUMENT,"makeAuthCredentialsProvider failed due to invalid credential type")}}(e.credentials))}_getSettings(){return this._settings}_freezeSettings(){return this._settingsFrozen=!0,this._settings}_delete(){return this._terminateTask||(this._terminateTask=this._terminate()),this._terminateTask}toJSON(){return{app:this._app,databaseId:this._databaseId,settings:this._settings}}_terminate(){return function(n){const r=cg.get(n);r&&(ne("ComponentProvider","Removing Datastore"),cg.delete(n),r.terminate())}(this),Promise.resolve()}}function OO(t,e,n,r={}){var s;const i=(t=Ji(t,Rh))._getSettings(),o=`${e}:${n}`;if(i.host!=="firestore.googleapis.com"&&i.host!==o&&ks("Host has been set in both settings() and connectFirestoreEmulator(), emulator host will be used."),t._setSettings(Object.assign(Object.assign({},i),{host:o,ssl:!1})),r.mockUserToken){let c,l;if(typeof r.mockUserToken=="string")c=r.mockUserToken,l=pt.MOCK_USER;else{c=aR(r.mockUserToken,(s=t._app)===null||s===void 0?void 0:s.options.projectId);const u=r.mockUserToken.sub||r.mockUserToken.user_id;if(!u)throw new ae(W.INVALID_ARGUMENT,"mockUserToken must contain 'sub' or 'user_id' field!");l=new pt(u)}t._authCredentials=new jC(new Py(c,l))}}/**
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
 */class Sh{constructor(e,n,r){this.converter=n,this._query=r,this.type="query",this.firestore=e}withConverter(e){return new Sh(this.firestore,e,this._query)}}class Ut{constructor(e,n,r){this.converter=n,this._key=r,this.type="document",this.firestore=e}get _path(){return this._key.path}get id(){return this._key.path.lastSegment()}get path(){return this._key.path.canonicalString()}get parent(){return new Xi(this.firestore,this.converter,this._key.path.popLast())}withConverter(e){return new Ut(this.firestore,e,this._key)}}class Xi extends Sh{constructor(e,n,r){super(e,n,lh(r)),this._path=r,this.type="collection"}get id(){return this._query.path.lastSegment()}get path(){return this._query.path.canonicalString()}get parent(){const e=this._path.popLast();return e.isEmpty()?null:new Ut(this.firestore,null,new ce(e))}withConverter(e){return new Xi(this.firestore,e,this._path)}}function _N(t,e,...n){if(t=Bt(t),arguments.length===1&&(e=Cy.newId()),CO("doc","path",e),t instanceof Rh){const r=He.fromString(e,...n);return lg(r),new Ut(t,null,new ce(r))}{if(!(t instanceof Ut||t instanceof Xi))throw new ae(W.INVALID_ARGUMENT,"Expected first argument to collection() to be a CollectionReference, a DocumentReference or FirebaseFirestore");const r=t._path.child(He.fromString(e,...n));return lg(r),new Ut(t.firestore,t instanceof Xi?t.converter:null,new ce(r))}}/**
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
 */class NO{constructor(){this.au=Promise.resolve(),this.uu=[],this.cu=!1,this.lu=[],this.hu=null,this.Pu=!1,this.Iu=!1,this.Tu=[],this.t_=new uv(this,"async_queue_retry"),this.Eu=()=>{const n=ul();n&&ne("AsyncQueue","Visibility state changed to "+n.visibilityState),this.t_.jo()};const e=ul();e&&typeof e.addEventListener=="function"&&e.addEventListener("visibilitychange",this.Eu)}get isShuttingDown(){return this.cu}enqueueAndForget(e){this.enqueue(e)}enqueueAndForgetEvenWhileRestricted(e){this.du(),this.Au(e)}enterRestrictedMode(e){if(!this.cu){this.cu=!0,this.Iu=e||!1;const n=ul();n&&typeof n.removeEventListener=="function"&&n.removeEventListener("visibilitychange",this.Eu)}}enqueue(e){if(this.du(),this.cu)return new Promise(()=>{});const n=new ir;return this.Au(()=>this.cu&&this.Iu?Promise.resolve():(e().then(n.resolve,n.reject),n.promise)).then(()=>n.promise)}enqueueRetryable(e){this.enqueueAndForget(()=>(this.uu.push(e),this.Ru()))}async Ru(){if(this.uu.length!==0){try{await this.uu[0](),this.uu.shift(),this.t_.reset()}catch(e){if(!lo(e))throw e;ne("AsyncQueue","Operation failed with retryable error: "+e)}this.uu.length>0&&this.t_.Go(()=>this.Ru())}}Au(e){const n=this.au.then(()=>(this.Pu=!0,e().catch(r=>{this.hu=r,this.Pu=!1;const s=function(o){let c=o.message||"";return o.stack&&(c=o.stack.includes(o.message)?o.stack:o.message+`
`+o.stack),c}(r);throw On("INTERNAL UNHANDLED ERROR: ",s),r}).then(r=>(this.Pu=!1,r))));return this.au=n,n}enqueueAfterDelay(e,n,r){this.du(),this.Tu.indexOf(e)>-1&&(n=0);const s=Th.createAndSchedule(this,e,n,r,i=>this.Vu(i));return this.lu.push(s),s}du(){this.hu&&de()}verifyOperationInProgress(){}async mu(){let e;do e=this.au,await e;while(e!==this.au)}fu(e){for(const n of this.lu)if(n.timerId===e)return!0;return!1}gu(e){return this.mu().then(()=>{this.lu.sort((n,r)=>n.targetTimeMs-r.targetTimeMs);for(const n of this.lu)if(n.skipDelay(),e!=="all"&&n.timerId===e)break;return this.mu()})}pu(e){this.Tu.push(e)}Vu(e){const n=this.lu.indexOf(e);this.lu.splice(n,1)}}class Ph extends Rh{constructor(e,n,r,s){super(e,n,r,s),this.type="firestore",this._queue=function(){return new NO}(),this._persistenceKey=(s==null?void 0:s.name)||"[DEFAULT]"}_terminate(){return this._firestoreClient||Cv(this),this._firestoreClient.terminate()}}function DO(t,e){const n=typeof t=="object"?t:B_(),r=typeof t=="string"?t:"(default)",s=qu(n,"firestore").getImmediate({identifier:r});if(!s._initialized){const i=iR("firestore");i&&OO(s,...i)}return s}function Pv(t){return t._firestoreClient||Cv(t),t._firestoreClient.verifyNotTerminated(),t._firestoreClient}function Cv(t){var e,n,r;const s=t._freezeSettings(),i=function(c,l,u,h){return new rk(c,l,u,h.host,h.ssl,h.experimentalForceLongPolling,h.experimentalAutoDetectLongPolling,Sv(h.experimentalLongPollingOptions),h.useFetchStreams)}(t._databaseId,((e=t._app)===null||e===void 0?void 0:e.options.appId)||"",t._persistenceKey,s);t._firestoreClient=new IO(t._authCredentials,t._appCheckCredentials,t._queue,i),!((n=s.localCache)===null||n===void 0)&&n._offlineComponentProvider&&(!((r=s.localCache)===null||r===void 0)&&r._onlineComponentProvider)&&(t._firestoreClient._uninitializedComponentsProvider={_offlineKind:s.localCache.kind,_offline:s.localCache._offlineComponentProvider,_online:s.localCache._onlineComponentProvider})}/**
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
 */class Ms{constructor(e){this._byteString=e}static fromBase64String(e){try{return new Ms(ct.fromBase64String(e))}catch(n){throw new ae(W.INVALID_ARGUMENT,"Failed to construct data from Base64 string: "+n)}}static fromUint8Array(e){return new Ms(ct.fromUint8Array(e))}toBase64(){return this._byteString.toBase64()}toUint8Array(){return this._byteString.toUint8Array()}toString(){return"Bytes(base64: "+this.toBase64()+")"}isEqual(e){return this._byteString.isEqual(e._byteString)}}/**
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
 */class Ch{constructor(...e){for(let n=0;n<e.length;++n)if(e[n].length===0)throw new ae(W.INVALID_ARGUMENT,"Invalid field name at argument $(i + 1). Field names must not be empty.");this._internalPath=new ot(e)}isEqual(e){return this._internalPath.isEqual(e._internalPath)}}/**
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
 */class kv{constructor(e){this._methodName=e}}/**
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
 */class kh{constructor(e,n){if(!isFinite(e)||e<-90||e>90)throw new ae(W.INVALID_ARGUMENT,"Latitude must be a number between -90 and 90, but was: "+e);if(!isFinite(n)||n<-180||n>180)throw new ae(W.INVALID_ARGUMENT,"Longitude must be a number between -180 and 180, but was: "+n);this._lat=e,this._long=n}get latitude(){return this._lat}get longitude(){return this._long}isEqual(e){return this._lat===e._lat&&this._long===e._long}toJSON(){return{latitude:this._lat,longitude:this._long}}_compareTo(e){return be(this._lat,e._lat)||be(this._long,e._long)}}/**
 * @license
 * Copyright 2024 Google LLC
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
 */class Oh{constructor(e){this._values=(e||[]).map(n=>n)}toArray(){return this._values.map(e=>e)}isEqual(e){return function(r,s){if(r.length!==s.length)return!1;for(let i=0;i<r.length;++i)if(r[i]!==s[i])return!1;return!0}(this._values,e._values)}}/**
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
 */const VO=/^__.*__$/;class xO{constructor(e,n,r){this.data=e,this.fieldMask=n,this.fieldTransforms=r}toMutation(e,n){return this.fieldMask!==null?new zr(e,this.data,this.fieldMask,n,this.fieldTransforms):new uo(e,this.data,n,this.fieldTransforms)}}function Ov(t){switch(t){case 0:case 2:case 1:return!0;case 3:case 4:return!1;default:throw de()}}class Nh{constructor(e,n,r,s,i,o){this.settings=e,this.databaseId=n,this.serializer=r,this.ignoreUndefinedProperties=s,i===void 0&&this.yu(),this.fieldTransforms=i||[],this.fieldMask=o||[]}get path(){return this.settings.path}get wu(){return this.settings.wu}Su(e){return new Nh(Object.assign(Object.assign({},this.settings),e),this.databaseId,this.serializer,this.ignoreUndefinedProperties,this.fieldTransforms,this.fieldMask)}bu(e){var n;const r=(n=this.path)===null||n===void 0?void 0:n.child(e),s=this.Su({path:r,Du:!1});return s.vu(e),s}Cu(e){var n;const r=(n=this.path)===null||n===void 0?void 0:n.child(e),s=this.Su({path:r,Du:!1});return s.yu(),s}Fu(e){return this.Su({path:void 0,Du:!0})}Mu(e){return Ua(e,this.settings.methodName,this.settings.xu||!1,this.path,this.settings.Ou)}contains(e){return this.fieldMask.find(n=>e.isPrefixOf(n))!==void 0||this.fieldTransforms.find(n=>e.isPrefixOf(n.field))!==void 0}yu(){if(this.path)for(let e=0;e<this.path.length;e++)this.vu(this.path.get(e))}vu(e){if(e.length===0)throw this.Mu("Document fields must not be empty");if(Ov(this.wu)&&VO.test(e))throw this.Mu('Document fields cannot begin and end with "__"')}}class MO{constructor(e,n,r){this.databaseId=e,this.ignoreUndefinedProperties=n,this.serializer=r||_c(e)}Nu(e,n,r,s=!1){return new Nh({wu:e,methodName:n,Ou:r,path:ot.emptyPath(),Du:!1,xu:s},this.databaseId,this.serializer,this.ignoreUndefinedProperties)}}function LO(t){const e=t._freezeSettings(),n=_c(t._databaseId);return new MO(t._databaseId,!!e.ignoreUndefinedProperties,n)}function FO(t,e,n,r,s,i={}){const o=t.Nu(i.merge||i.mergeFields?2:0,e,n,s);xv("Data must be an object, but it was:",o,r);const c=Dv(r,o);let l,u;if(i.merge)l=new zt(o.fieldMask),u=o.fieldTransforms;else if(i.mergeFields){const h=[];for(const d of i.mergeFields){const g=UO(e,d,n);if(!o.contains(g))throw new ae(W.INVALID_ARGUMENT,`Field '${g}' is specified in your field mask but missing from your input data.`);jO(h,g)||h.push(g)}l=new zt(h),u=o.fieldTransforms.filter(d=>l.covers(d.field))}else l=null,u=o.fieldTransforms;return new xO(new Mt(c),l,u)}function Nv(t,e){if(Vv(t=Bt(t)))return xv("Unsupported field value:",e,t),Dv(t,e);if(t instanceof kv)return function(r,s){if(!Ov(s.wu))throw s.Mu(`${r._methodName}() can only be used with update() and set()`);if(!s.path)throw s.Mu(`${r._methodName}() is not currently supported inside arrays`);const i=r._toFieldTransform(s);i&&s.fieldTransforms.push(i)}(t,e),null;if(t===void 0&&e.ignoreUndefinedProperties)return null;if(e.path&&e.fieldMask.push(e.path),t instanceof Array){if(e.settings.Du&&e.wu!==4)throw e.Mu("Nested arrays are not supported");return function(r,s){const i=[];let o=0;for(const c of r){let l=Nv(c,s.Fu(o));l==null&&(l={nullValue:"NULL_VALUE"}),i.push(l),o++}return{arrayValue:{values:i}}}(t,e)}return function(r,s){if((r=Bt(r))===null)return{nullValue:"NULL_VALUE"};if(typeof r=="number")return Rk(s.serializer,r);if(typeof r=="boolean")return{booleanValue:r};if(typeof r=="string")return{stringValue:r};if(r instanceof Date){const i=Je.fromDate(r);return{timestampValue:La(s.serializer,i)}}if(r instanceof Je){const i=new Je(r.seconds,1e3*Math.floor(r.nanoseconds/1e3));return{timestampValue:La(s.serializer,i)}}if(r instanceof kh)return{geoPointValue:{latitude:r.latitude,longitude:r.longitude}};if(r instanceof Ms)return{bytesValue:tv(s.serializer,r._byteString)};if(r instanceof Ut){const i=s.databaseId,o=r.firestore._databaseId;if(!o.isEqual(i))throw s.Mu(`Document reference is for database ${o.projectId}/${o.database} but should be for database ${i.projectId}/${i.database}`);return{referenceValue:dh(r.firestore._databaseId||s.databaseId,r._key.path)}}if(r instanceof Oh)return function(o,c){return{mapValue:{fields:{__type__:{stringValue:"__vector__"},value:{arrayValue:{values:o.toArray().map(l=>{if(typeof l!="number")throw c.Mu("VectorValues must only contain numeric values.");return uh(c.serializer,l)})}}}}}}(r,s);throw s.Mu(`Unsupported field value: ${Ah(r)}`)}(t,e)}function Dv(t,e){const n={};return ky(t)?e.path&&e.path.length>0&&e.fieldMask.push(e.path):Ws(t,(r,s)=>{const i=Nv(s,e.bu(r));i!=null&&(n[r]=i)}),{mapValue:{fields:n}}}function Vv(t){return!(typeof t!="object"||t===null||t instanceof Array||t instanceof Date||t instanceof Je||t instanceof kh||t instanceof Ms||t instanceof Ut||t instanceof kv||t instanceof Oh)}function xv(t,e,n){if(!Vv(n)||!function(s){return typeof s=="object"&&s!==null&&(Object.getPrototypeOf(s)===Object.prototype||Object.getPrototypeOf(s)===null)}(n)){const r=Ah(n);throw r==="an object"?e.Mu(t+" a custom object"):e.Mu(t+" "+r)}}function UO(t,e,n){if((e=Bt(e))instanceof Ch)return e._internalPath;if(typeof e=="string")return Mv(t,e);throw Ua("Field path arguments must be of type string or ",t,!1,void 0,n)}const BO=new RegExp("[~\\*/\\[\\]]");function Mv(t,e,n){if(e.search(BO)>=0)throw Ua(`Invalid field path (${e}). Paths must not contain '~', '*', '/', '[', or ']'`,t,!1,void 0,n);try{return new Ch(...e.split("."))._internalPath}catch{throw Ua(`Invalid field path (${e}). Paths must not be empty, begin with '.', end with '.', or contain '..'`,t,!1,void 0,n)}}function Ua(t,e,n,r,s){const i=r&&!r.isEmpty(),o=s!==void 0;let c=`Function ${e}() called with invalid data`;n&&(c+=" (via `toFirestore()`)"),c+=". ";let l="";return(i||o)&&(l+=" (found",i&&(l+=` in field ${r}`),o&&(l+=` in document ${s}`),l+=")"),new ae(W.INVALID_ARGUMENT,c+t+l)}function jO(t,e){return t.some(n=>n.isEqual(e))}/**
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
 */class Lv{constructor(e,n,r,s,i){this._firestore=e,this._userDataWriter=n,this._key=r,this._document=s,this._converter=i}get id(){return this._key.path.lastSegment()}get ref(){return new Ut(this._firestore,this._converter,this._key)}exists(){return this._document!==null}data(){if(this._document){if(this._converter){const e=new $O(this._firestore,this._userDataWriter,this._key,this._document,null);return this._converter.fromFirestore(e)}return this._userDataWriter.convertValue(this._document.data.value)}}get(e){if(this._document){const n=this._document.data.field(Fv("DocumentSnapshot.get",e));if(n!==null)return this._userDataWriter.convertValue(n)}}}class $O extends Lv{data(){return super.data()}}function Fv(t,e){return typeof e=="string"?Mv(t,e):e instanceof Ch?e._internalPath:e._delegate._internalPath}class HO{convertValue(e,n="none"){switch($r(e)){case 0:return null;case 1:return e.booleanValue;case 2:return We(e.integerValue||e.doubleValue);case 3:return this.convertTimestamp(e.timestampValue);case 4:return this.convertServerTimestamp(e,n);case 5:return e.stringValue;case 6:return this.convertBytes(jr(e.bytesValue));case 7:return this.convertReference(e.referenceValue);case 8:return this.convertGeoPoint(e.geoPointValue);case 9:return this.convertArray(e.arrayValue,n);case 11:return this.convertObject(e.mapValue,n);case 10:return this.convertVectorValue(e.mapValue);default:throw de()}}convertObject(e,n){return this.convertObjectMap(e.fields,n)}convertObjectMap(e,n="none"){const r={};return Ws(e,(s,i)=>{r[s]=this.convertValue(i,n)}),r}convertVectorValue(e){var n,r,s;const i=(s=(r=(n=e.fields)===null||n===void 0?void 0:n.value.arrayValue)===null||r===void 0?void 0:r.values)===null||s===void 0?void 0:s.map(o=>We(o.doubleValue));return new Oh(i)}convertGeoPoint(e){return new kh(We(e.latitude),We(e.longitude))}convertArray(e,n){return(e.values||[]).map(r=>this.convertValue(r,n))}convertServerTimestamp(e,n){switch(n){case"previous":const r=ih(e);return r==null?null:this.convertValue(r,n);case"estimate":return this.convertTimestamp(Wi(e));default:return null}}convertTimestamp(e){const n=ur(e);return new Je(n.seconds,n.nanos)}convertDocumentKey(e,n){const r=He.fromString(e);Ve(av(r));const s=new Ki(r.get(1),r.get(3)),i=new ce(r.popFirst(5));return s.isEqual(n)||On(`Document ${i} contains a document reference within a different database (${s.projectId}/${s.database}) which is not supported. It will be treated as a reference in the current database (${n.projectId}/${n.database}) instead.`),i}}/**
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
 */function qO(t,e,n){let r;return r=t?n&&(n.merge||n.mergeFields)?t.toFirestore(e,n):t.toFirestore(e):e,r}/**
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
 */class WO{constructor(e,n){this.hasPendingWrites=e,this.fromCache=n}isEqual(e){return this.hasPendingWrites===e.hasPendingWrites&&this.fromCache===e.fromCache}}class Uv extends Lv{constructor(e,n,r,s,i,o){super(e,n,r,s,o),this._firestore=e,this._firestoreImpl=e,this.metadata=i}exists(){return super.exists()}data(e={}){if(this._document){if(this._converter){const n=new KO(this._firestore,this._userDataWriter,this._key,this._document,this.metadata,null);return this._converter.fromFirestore(n,e)}return this._userDataWriter.convertValue(this._document.data.value,e.serverTimestamps)}}get(e,n={}){if(this._document){const r=this._document.data.field(Fv("DocumentSnapshot.get",e));if(r!==null)return this._userDataWriter.convertValue(r,n.serverTimestamps)}}}class KO extends Uv{data(e={}){return super.data(e)}}/**
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
 */function yN(t){t=Ji(t,Ut);const e=Ji(t.firestore,Ph);return PO(Pv(e),t._key).then(n=>QO(e,t,n))}class zO extends HO{constructor(e){super(),this.firestore=e}convertBytes(e){return new Ms(e)}convertReference(e){const n=this.convertDocumentKey(e,this.firestore._databaseId);return new Ut(this.firestore,null,n)}}function vN(t,e,n){t=Ji(t,Ut);const r=Ji(t.firestore,Ph),s=qO(t.converter,e,n);return GO(r,[FO(LO(r),"setDoc",t._key,s,t.converter!==null,n).toMutation(t._key,Sn.none())])}function GO(t,e){return function(r,s){const i=new ir;return r.asyncQueue.enqueueAndForget(async()=>dO(await RO(r),s,i)),i.promise}(Pv(t),e)}function QO(t,e,n){const r=n.docs.get(e._key),s=new zO(t);return new Uv(t,s,e._key,r,new WO(n.hasPendingWrites,n.fromCache),e.converter)}(function(e,n=!0){(function(s){qs=s})($s),Ps(new Fr("firestore",(r,{instanceIdentifier:s,options:i})=>{const o=r.getProvider("app").getImmediate(),c=new Ph(new $C(r.getProvider("auth-internal")),new KC(r.getProvider("app-check-internal")),function(u,h){if(!Object.prototype.hasOwnProperty.apply(u.options,["projectId"]))throw new ae(W.INVALID_ARGUMENT,'"projectId" not provided in firebase.initializeApp.');return new Ki(u.options.projectId,h)}(o,s),o);return i=Object.assign({useFetchStreams:n},i),c._setSettings(i),c},"PUBLIC").setMultipleInstances(!0)),rr(kp,"4.7.1",e),rr(kp,"4.7.1","esm2017")})();const JO={apiKey:"AIzaSyDT2vb-sMcMnDH92HpYe0zFZkB9KeWg0J4",authDomain:"care-cove.firebaseapp.com",projectId:"care-cove",storageBucket:"care-cove.appspot.com",messagingSenderId:"206987749536",appId:"1:206987749536:web:cf0625e1d6a41cb108c1c5",measurementId:"G-7CY3YDPWCV"},Dh=U_(JO);FC(Dh);const EN=DO(Dh),XO=js({__name:"app",setup(t){return Dh.automaticDataCollectionEnabled,pb({title:"CareCove",meta:[{name:"description",content:"Donation platform using tbDEX SDK"}]}),(e,n)=>{const r=GA;return rn(),Cm("div",null,[qe(r)])}}}),YO={__name:"nuxt-error-page",props:{error:Object},setup(t){const n=t.error;n.stack&&n.stack.split(`
`).splice(1).map(d=>({text:d.replace("webpack:/","").replace(".vue",".js").trim(),internal:d.includes("node_modules")&&!d.includes(".cache")||d.includes("internal")||d.includes("new Promise")})).map(d=>`<span class="stack${d.internal?" internal":""}">${d.text}</span>`).join(`
`);const r=Number(n.statusCode||500),s=r===404,i=n.statusMessage??(s?"Page Not Found":"Internal Server Error"),o=n.message||n.toString(),c=void 0,h=s?Ff(()=>us(()=>import("./DPjjJfQt.js"),__vite__mapDeps([11,5,3,12]),import.meta.url).then(d=>d.default||d)):Ff(()=>us(()=>import("./C-9SEywE.js"),__vite__mapDeps([13,3,14]),import.meta.url).then(d=>d.default||d));return(d,g)=>(rn(),Sr(Me(h),vE(Nm({statusCode:Me(r),statusMessage:Me(i),description:Me(o),stack:Me(c)})),null,16))}},ZO={key:0},hg={__name:"nuxt-root",setup(t){const e=()=>null,n=ze(),r=n.deferHydration();if(n.isHydrating){const l=n.hooks.hookOnce("app:error",r);Yt().beforeEach(l)}const s=!1;ms(Za,r_()),n.hooks.callHookWith(l=>l.map(u=>u()),"vue:setup");const i=ec(),o=!1;nm((l,u,h)=>{if(n.hooks.callHook("vue:error",l,u,h).catch(d=>console.error("[nuxt] Error in `vue:error` hook",d)),w0(l)&&(l.fatal||l.unhandled))return n.runWithContext(()=>ls(l)),!1});const c=!1;return(l,u)=>(rn(),Sr(bm,{onResolve:Me(r)},{default:qg(()=>[Me(o)?(rn(),Cm("div",ZO)):Me(i)?(rn(),Sr(Me(YO),{key:1,error:Me(i)},null,8,["error"])):Me(c)?(rn(),Sr(Me(e),{key:2,context:Me(c)},null,8,["context"])):Me(s)?(rn(),Sr(wT(Me(s)),{key:3})):(rn(),Sr(Me(XO),{key:4}))]),_:1},8,["onResolve"]))}};let fg;{let t;fg=async function(){var o,c;if(t)return t;const r=!!(((o=window.__NUXT__)==null?void 0:o.serverRendered)??((c=document.getElementById("__NUXT_DATA__"))==null?void 0:c.dataset.ssr)==="true")?Qw(hg):Gw(hg),s=i0({vueApp:r});async function i(l){await s.callHook("app:error",l),s.payload.error=s.payload.error||tc(l)}r.config.errorHandler=i;try{await c0(s,KA)}catch(l){i(l)}try{await s.hooks.callHook("app:created",r),await s.hooks.callHook("app:beforeMount",r),r.mount(r0),await s.hooks.callHook("app:mounted",r),await Bs()}catch(l){i(l)}return r.config.errorHandler===i&&(r.config.errorHandler=void 0),r},t=fg().catch(e=>{throw console.error("Error while mounting app:",e),e})}export{rN as $,Ga as A,uN as B,sn as C,tN as D,fI as E,kt as F,aN as G,qr as H,E0 as I,xu as J,cN as K,Ya as L,Pl as M,Vu as N,Vr as O,Ha as P,iN as Q,pr as R,FC as S,fN as T,_N as U,EN as V,yN as W,vN as X,Xn as Y,dN as Z,hN as _,Om as a,qe as b,Cm as c,Dm as d,lN as e,oN as f,eN as g,Kt as h,Me as i,$w as j,tt as k,nN as l,sN as m,Su as n,rn as o,Sr as p,Yt as q,cn as r,js as s,IE as t,pb as u,fd as v,qg as w,ze as x,ju as y,Yd as z};
