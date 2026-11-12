var xy=Object.defineProperty;var ff=n=>{throw TypeError(n)};var Ly=(n,e,t)=>e in n?xy(n,e,{enumerable:!0,configurable:!0,writable:!0,value:t}):n[e]=t;var bn=(n,e,t)=>Ly(n,typeof e!="symbol"?e+"":e,t),Vu=(n,e,t)=>e.has(n)||ff("Cannot "+t);var V=(n,e,t)=>(Vu(n,e,"read from private field"),t?t.call(n):e.get(n)),De=(n,e,t)=>e.has(n)?ff("Cannot add the same private member more than once"):e instanceof WeakSet?e.add(n):e.set(n,t),be=(n,e,t,r)=>(Vu(n,e,"write to private field"),r?r.call(n,t):e.set(n,t),t),de=(n,e,t)=>(Vu(n,e,"access private method"),t);(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const i of document.querySelectorAll('link[rel="modulepreload"]'))r(i);new MutationObserver(i=>{for(const s of i)if(s.type==="childList")for(const a of s.addedNodes)a.tagName==="LINK"&&a.rel==="modulepreload"&&r(a)}).observe(document,{childList:!0,subtree:!0});function t(i){const s={};return i.integrity&&(s.integrity=i.integrity),i.referrerPolicy&&(s.referrerPolicy=i.referrerPolicy),i.crossOrigin==="use-credentials"?s.credentials="include":i.crossOrigin==="anonymous"?s.credentials="omit":s.credentials="same-origin",s}function r(i){if(i.ep)return;i.ep=!0;const s=t(i);fetch(i.href,s)}})();const Dm=!1;var Gc=Array.isArray,Fy=Array.prototype.indexOf,za=Array.prototype.includes,Kc=Array.from,Om=Object.defineProperty,Fs=Object.getOwnPropertyDescriptor,Uy=Object.getOwnPropertyDescriptors,$y=Object.prototype,qy=Array.prototype,Vm=Object.getPrototypeOf,pf=Object.isExtensible;function fa(n){return typeof n=="function"}const td=()=>{};function By(n){for(var e=0;e<n.length;e++)n[e]()}function Mm(){var n,e,t=new Promise((r,i)=>{n=r,e=i});return{promise:t,resolve:n,reject:e}}function zy(n,e,t=!1){return n===void 0?t?e():e:n}function mf(n,e){if(Array.isArray(n))return n;if(e===void 0||!(Symbol.iterator in n))return Array.from(n);const t=[];for(const r of n)if(t.push(r),t.length===e)break;return t}const Nn=2,Oo=4,Qc=8,nd=1<<24,Nr=16,xr=32,ss=64,ch=128,rd=256,Vr=512,Zt=1024,vt=2048,sr=4096,Fn=8192,Pn=16384,Ko=32768,gc=1<<25,os=65536,_c=1<<17,xm=1<<18,Qo=1<<19,jy=1<<20,Qr=1<<25,vc=1<<21,vo=1<<22,Ji=1<<23,yo=Symbol("$state"),Lm=Symbol("component"),Hy=Symbol("legacy props"),Wy=Symbol(""),nc=Symbol("attributes"),uh=Symbol("class"),hh=Symbol("style"),ya=Symbol("text"),rc=Symbol("form reset"),ul=new class extends Error{constructor(){super(...arguments);bn(this,"name","StaleReactionError");bn(this,"message","The reaction that called `getAbortSignal()` was re-run or destroyed")}};var Pm;const Yc=!!((Pm=globalThis.document)!=null&&Pm.contentType)&&globalThis.document.contentType.includes("xml"),Gy=1,Ky=2,Fm=4,Qy=8,Yy=16,Jy=1,Xy=2,Um={},zt=Symbol("uninitialized"),$m="http://www.w3.org/1999/xhtml",Zy="http://www.w3.org/2000/svg",eE="@attach";function tE(){console.warn("https://svelte.dev/e/derived_inert")}function nE(){console.warn("https://svelte.dev/e/select_multiple_invalid_value")}function rE(){console.warn("https://svelte.dev/e/svelte_boundary_reset_noop")}let qm=!1;function Bm(n){return n===this.v}function iE(n,e){return n!=n?e==e:n!==e||n!==null&&typeof n=="object"||typeof n=="function"}function zm(n){return!iE(n,this.v)}function jm(n){throw new Error("https://svelte.dev/e/lifecycle_outside_component")}function sE(){throw new Error("https://svelte.dev/e/async_derived_orphan")}function oE(n,e,t){throw new Error("https://svelte.dev/e/each_key_duplicate")}function aE(n){throw new Error("https://svelte.dev/e/effect_in_teardown")}function lE(){throw new Error("https://svelte.dev/e/effect_in_unowned_derived")}function cE(n){throw new Error("https://svelte.dev/e/effect_orphan")}function uE(){throw new Error("https://svelte.dev/e/effect_update_depth_exceeded")}function hE(){throw new Error("https://svelte.dev/e/state_descriptors_fixed")}function dE(){throw new Error("https://svelte.dev/e/state_prototype_fixed")}function fE(){throw new Error("https://svelte.dev/e/state_unsafe_mutation")}function pE(){throw new Error("https://svelte.dev/e/svelte_boundary_reset_onerror")}let mE=!1;function gE(n){let e=n.p;for(;e!==null&&e.c===null;)e=e.p;return(e==null?void 0:e.c)??null}function _E(n,e){return n===null&&jm(),n.c??(n.c=new Map(gE(n)||void 0))}let kn=null;function Vo(n){kn=n}function vE(n){return _E(kn).get(n)}function id(n,e=!1,t){kn={p:kn,i:!1,c:null,e:null,s:n,x:null,r:je,l:null}}function sd(n){var e=kn,t=e.e;if(t!==null){e.e=null;for(var r of t)mg(r)}return e.i=!0,kn=e.p,Hm(n)}function Hm(n={}){return Om(n,Lm,{value:!0}),n}function Wm(){return!0}let ks=[];function Gm(){var n=ks;ks=[],By(n)}function Yr(n){if(ks.length===0&&!Oa){var e=ks;queueMicrotask(()=>{e===ks&&Gm()})}ks.push(n)}function yE(){for(;ks.length>0;)Gm()}const EE=-7169;function Ut(n,e){n.f=n.f&EE|e}function od(n){(n.f&Vr)!==0||n.deps===null?Ut(n,Zt):Ut(n,sr)}function Km(n,e){(n.f&vt)!==0?e.set(n,vt):(n.f&sr)!==0&&e.get(n)!==vt&&e.set(n,sr),Ut(n,Zt)}function wE(n,e){if(e){const t=document.body;n.autofocus=!0,Yr(()=>{document.activeElement===t&&n.focus()})}}let gf=!1;function TE(){gf||(gf=!0,document.addEventListener("reset",n=>{Promise.resolve().then(()=>{var e;if(!n.defaultPrevented)for(const t of n.target.elements)(e=t[rc])==null||e.call(t)})},{capture:!0}))}function Yo(n){var e=Se,t=je;wr(null),si(null);try{return n()}finally{wr(e),si(t)}}function ad(n,e,t,r=t){n.addEventListener(e,()=>Yo(t));const i=n[rc];i?n[rc]=()=>{i(),r(!0)}:n[rc]=()=>r(!0),TE()}function Qm(n,e,t,r){const i=Jc;var s=n.filter(E=>!E.settled),a=e.map(i);if(t.length===0&&s.length===0){r(a);return}var l=je,c=IE(),h=s.length===1?s[0].promise:s.length>1?Promise.all(s.map(E=>E.promise)):null;function f(E){if((l.f&Pn)===0){c();try{r([...a,...E])}catch(S){Kr(S,l)}yc()}}var g=Ym();if(t.length===0){h.then(()=>f([])).finally(g);return}function _(){Promise.all(t.map(E=>AE(E))).then(f).catch(E=>Kr(E,l)).finally(g)}h?h.then(()=>{if((l.f&Pn)!==0){g();return}c(),_(),yc()}):_()}function IE(){var n=je,e=Se,t=kn,r=re;return function(s=!0){si(n),wr(e),Vo(t),s&&(n.f&Pn)===0&&(r==null||r.activate(),r==null||r.apply())}}function yc(n=!0){si(null),wr(null),Vo(null),n&&(re==null||re.deactivate())}function Ym(){var n=je,e=n.b,t=re,r=!!(e!=null&&e.is_rendered());return e==null||e.update_pending_count(1,t),t.increment(r,n),()=>{e==null||e.update_pending_count(-1,t),t.decrement(r,n)}}function Jc(n){var e=Nn|vt;return je!==null&&(je.f|=Qo),{ctx:kn,deps:null,effects:null,equals:Bm,f:e,fn:n,reactions:null,rv:0,v:zt,wv:0,parent:je,ac:null}}const Ea=Symbol("obsolete");function AE(n,e,t){let r=je;r===null&&sE();var i=void 0,s=zs(zt),a=!Se,l=new Set;return $E(()=>{var E,S;var c=je,h=Mm();i=h.promise;try{Promise.resolve(n()).then(h.resolve,P=>{P!==ul&&h.reject(P)}).finally(yc)}catch(P){h.reject(P),yc()}var f=re;if(a){if((c.f&Ko)!==0)var g=Ym();if((E=r.b)!=null&&E.is_rendered())(S=f.async_deriveds.get(c))==null||S.reject(Ea);else for(const P of l.values())P.reject(Ea);l.add(h),f.async_deriveds.set(c,h)}const _=(P,I=void 0)=>{g==null||g(),l.delete(h),I!==Ea&&(f.activate(),I?(s.f|=Ji,Mo(s,I)):((s.f&Ji)!==0&&(s.f^=Ji),Mo(s,P)),f.deactivate())};h.promise.then(_,P=>_(null,P||"unknown"))}),Xc(()=>{for(const c of l)c.reject(Ea)}),new Promise(c=>{function h(f){function g(){f===i?c(s):h(i)}f.then(g,g)}h(i)})}function rr(n){const e=Jc(n);return wg(e),e}function bE(n){const e=Jc(n);return e.equals=zm,e}function SE(n){var e=n.effects;if(e!==null){n.effects=null;for(var t=0;t<e.length;t+=1)En(e[t])}}function ld(n){var e,t=je,r=n.parent;if(!as&&r!==null&&n.v!==zt&&(r.f&(Pn|Fn))!==0)return tE(),n.v;si(r);try{SE(n),e=bg(n)}finally{si(t)}return e}function Jm(n){var e=ld(n);if(!n.equals(e)&&(n.wv=Ig(),(!(re!=null&&re.is_fork)||n.deps===null)&&(re!==null?(re.capture(n,e,!0),Xi==null||Xi.capture(n,e,!0)):n.v=e,n.deps===null))){Ut(n,Zt);return}as||(yn!==null?(hd()||re!=null&&re.is_fork)&&yn.set(n,e):od(n))}function RE(n){var e;if(n.effects!==null)for(const t of n.effects)(t.teardown||t.ac)&&((e=t.teardown)==null||e.call(t),t.ac!==null&&Yo(()=>{t.ac.abort(ul),t.ac=null}),t.fn!==null&&(t.teardown=td),ja(t,0),fd(t))}function Xm(n){if(n.effects!==null)for(const e of n.effects)e.teardown&&e.fn!==null&&xo(e)}let Mu=null,ao=null,re=null,Xi=null,yn=null,dh=null,Oa=!1,xu=!1,Va=null,ic=null;var _f=0;let CE=1;var Ro,Co,Po,_i,ko,vi,ol,jr,Hr,No,Vs,Ve,fh,Zm,ph,wa,mh,eg,tg,ng,ho,PE,Ta;const jc=class jc{constructor(){De(this,Ve);bn(this,"id",CE++);bn(this,"started",!1);bn(this,"linked",!0);bn(this,"prev",null);bn(this,"next",null);bn(this,"async_deriveds",new Map);bn(this,"current",new Map);bn(this,"previous",new Map);De(this,Ro,new Set);De(this,Co,new Set);De(this,Po,0);De(this,_i,new Map);De(this,ko,null);De(this,vi,[]);De(this,ol,[]);De(this,jr,new Map);De(this,Hr,new Map);De(this,No,new Set);bn(this,"is_fork",!1);De(this,Vs,!1);ao===null?Mu=ao=this:(ao.next=this,this.prev=ao),ao=this}skip_effect(e){V(this,Hr).has(e)||V(this,Hr).set(e,{d:[],m:[]}),V(this,No).delete(e)}unskip_effect(e,t=r=>this.schedule(r)){var r=V(this,Hr).get(e);if(r){V(this,Hr).delete(e);for(var i of r.d)Ut(i,vt),t(i);for(i of r.m)Ut(i,sr),t(i)}V(this,No).add(e)}capture(e,t,r=!1){e.v!==zt&&!this.previous.has(e)&&this.previous.set(e,e.v),(e.f&Ji)===0&&(this.current.set(e,[t,r]),yn==null||yn.set(e,t)),this.is_fork||(e.v=t)}activate(){re=this}deactivate(){re=null,yn=null}flush(){try{xu=!0,re=this,de(this,Ve,wa).call(this)}finally{_f=0,dh=null,Va=null,ic=null,xu=!1,re=null,yn=null,Jr.clear()}}discard(){var e;for(const t of V(this,Co))t(this);V(this,Co).clear();for(const t of this.async_deriveds.values())t.reject(Ea);de(this,Ve,Ta).call(this),(e=V(this,ko))==null||e.resolve()}register_created_effect(e){V(this,ol).push(e)}increment(e,t){if(be(this,Po,V(this,Po)+1),e){let r=V(this,_i).get(t)??0;V(this,_i).set(t,r+1)}}decrement(e,t){if(be(this,Po,V(this,Po)-1),e){let r=V(this,_i).get(t)??0;r===1?V(this,_i).delete(t):V(this,_i).set(t,r-1)}V(this,Vs)||(be(this,Vs,!0),Yr(()=>{be(this,Vs,!1),this.linked&&this.flush()}))}transfer_reactions(e){for(const[t,r]of e)this.add_dirty_reaction(t,r);e.clear()}add_dirty_reaction(e,t){(t===vt||V(this,jr).get(e)!==vt)&&V(this,jr).set(e,t)}oncommit(e){V(this,Ro).add(e)}ondiscard(e){V(this,Co).add(e)}settled(){return(V(this,ko)??be(this,ko,Mm())).promise}static ensure(){if(re===null){const e=re=new jc;!xu&&!Oa&&Yr(()=>{e.started||e.flush()})}return re}apply(){{yn=null;return}}schedule(e){var t;if(dh=e,(t=e.b)!=null&&t.is_pending&&(e.f&(Oo|Qc|nd))!==0&&(e.f&Ko)===0){e.b.defer_effect(e);return}V(this,vi).push(e)}};Ro=new WeakMap,Co=new WeakMap,Po=new WeakMap,_i=new WeakMap,ko=new WeakMap,vi=new WeakMap,ol=new WeakMap,jr=new WeakMap,Hr=new WeakMap,No=new WeakMap,Vs=new WeakMap,Ve=new WeakSet,fh=function(){if(this.is_fork)return!0;for(const e of V(this,_i).keys())if(!de(this,Ve,Zm).call(this,e))return!0;return!1},Zm=function(e){for(var t=e;t!==null;t=t.parent)if(V(this,Hr).has(t))return!0;return!1},ph=function(){var e=[];for(const s of V(this,vi))if(!((s.f&Pn)!==0||(s.f&(vt|sr))===0)){for(var t=s,r=!1;t.parent!==null;){t=t.parent;var i=t.f;if((i&(ss|xr))!==0){if((i&Zt)===0){r=!0;break}t.f^=Zt}}r||e.push(t)}return be(this,vi,[]),e},wa=function(){var l,c,h,f;this.started=!0;for(const[g,_]of V(this,jr))Ut(g,_),this.schedule(g);this.apply();for(var e=Va=[],t=[],r=ic=[];V(this,vi).length>0;){_f++>1e3&&(de(this,Ve,Ta).call(this),NE());for(const g of de(this,Ve,ph).call(this))try{de(this,Ve,mh).call(this,g,e,t)}catch(_){throw sg(g),de(this,Ve,fh).call(this)||this.discard(),_}}if(re=null,r.length>0){var i=jc.ensure();for(const g of r)i.schedule(g)}if(Va=null,ic=null,de(this,Ve,fh).call(this)){de(this,Ve,ho).call(this,t),de(this,Ve,ho).call(this,e);for(const[g,_]of V(this,Hr))ig(g,_);r.length>0&&de(l=re,Ve,wa).call(l);return}const s=de(this,Ve,eg).call(this);if(s){de(this,Ve,ho).call(this,t),de(this,Ve,ho).call(this,e),de(c=s,Ve,ng).call(c,this);return}V(this,jr).clear();for(const g of V(this,Ro))g(this);V(this,Ro).clear(),Xi=this,vf(t),vf(e),Xi=null,(h=V(this,ko))==null||h.resolve();var a=re;V(this,Po)===0&&(V(this,vi).length===0||a!==null)&&de(this,Ve,Ta).call(this),a!==null&&(Jr.clear(),de(f=a,Ve,wa).call(f))},mh=function(e,t,r){e.f^=Zt;for(var i=e.first;i!==null;){var s=i.f,a=(s&(xr|ss))!==0,l=a&&(s&Zt)!==0,c=l||(s&Fn)!==0||V(this,Hr).has(i);if(!c&&i.fn!==null){a?i.f^=Zt:(s&Oo)!==0?t.push(i):dl(i)&&((s&Nr)!==0&&this.add_dirty_reaction(i,sr),xo(i));var h=i.first;if(h!==null){i=h;continue}}for(;i!==null;){var f=i.next;if(f!==null){i=f;break}i=i.parent}}},eg=function(){for(var e=this.prev;e!==null;e=e.prev)if(!e.is_fork&&de(this,Ve,tg).call(this,e))return e;return null},tg=function(e){for(const[t,[,r]]of this.current)if(!r&&e.current.has(t))return!0;return!1},ng=function(e){var r;for(const[i,s]of e.current)!this.previous.has(i)&&e.previous.has(i)&&this.previous.set(i,e.previous.get(i)),this.current.set(i,s);for(const[i,s]of e.async_deriveds){const a=this.async_deriveds.get(i);a&&s.promise.then(a.resolve).catch(a.reject)}e.async_deriveds.clear(),this.transfer_reactions(V(e,jr));const t=i=>{var s=i.reactions;if(s!==null&&!((i.f&Nn)!==0&&(i.f&(vt|sr))===0))for(const c of s){var a=c.f;if((a&Nn)!==0)t(c);else{var l=c;a&(vo|Nr)&&!this.async_deriveds.has(l)&&(V(this,jr).delete(l),Ut(l,vt),this.schedule(l))}}};for(const i of this.current.keys())t(i);this.oncommit(()=>e.discard()),de(r=e,Ve,Ta).call(r),re=this,de(this,Ve,wa).call(this)},ho=function(e){for(var t=0;t<e.length;t+=1)Km(e[t],V(this,jr))},PE=function(){var g,_;for(let E=Mu;E!==null;E=E.next){var e=E.id<this.id,t=[];for(const[S,[P,I]]of this.current){if(E.current.has(S)){var r=E.current.get(S)[0];if(e&&P!==r)E.current.set(S,[P,I]);else continue}t.push(S)}if(e)for(const[S,P]of this.async_deriveds){const I=E.async_deriveds.get(S);I&&P.promise.then(I.resolve).catch(I.reject)}var i=[...E.current.keys()].filter(S=>!E.current.get(S)[1]);if(!(!E.started||i.length===0)){var s=i.filter(S=>!this.current.has(S));if(s.length===0)e&&E.discard();else if(t.length>0){if(e)for(const S of V(this,No))E.unskip_effect(S,P=>{var I;(P.f&(Nr|vo))!==0?E.schedule(P):de(I=E,Ve,ho).call(I,[P])});E.activate();var a=new Set,l=new Map;for(var c of t)rg(c,s,a,l);l=new Map;var h=[...E.current].filter(([S,P])=>{const I=this.current.get(S);return I?I[0]!==P[0]||I[1]!==P[1]:!0}).map(([S])=>S);if(h.length>0)for(const S of V(this,ol))(S.f&(Pn|Fn|_c))===0&&cd(S,h,l)&&((S.f&(vo|Nr))!==0?(Ut(S,vt),E.schedule(S)):E.add_dirty_reaction(S,vt));if(V(E,vi).length>0&&!V(E,Vs)){E.apply();for(var f of de(g=E,Ve,ph).call(g))de(_=E,Ve,mh).call(_,f,[],[])}E.deactivate()}}}},Ta=function(){if(this.linked){var e=this.prev,t=this.next;e===null?Mu=t:e.next=t,t===null?ao=e:t.prev=e,this.linked=!1}};let Bs=jc;function kE(n){var e=Oa,t=Xi;Xi=null,Oa=!0;try{for(var r;;){if(yE(),re===null)return r;re.flush()}}finally{Oa=e,Xi=t}}function NE(){try{uE()}catch(n){Kr(n,dh)}}let Pr=null;function vf(n){var e=n.length;if(e!==0){for(var t=0;t<e;){var r=n[t++];if((r.f&(Pn|Fn))===0&&dl(r)&&(Pr=new Set,xo(r),r.deps===null&&r.first===null&&r.nodes===null&&r.teardown===null&&r.ac===null&&vg(r),(Pr==null?void 0:Pr.size)>0)){Jr.clear();for(const i of Pr){if((i.f&(Pn|Fn))!==0)continue;const s=[i];let a=i.parent;for(;a!==null;)Pr.has(a)&&(Pr.delete(a),s.push(a)),a=a.parent;for(let l=s.length-1;l>=0;l--){const c=s[l];(c.f&(Pn|Fn))===0&&xo(c)}}Pr.clear()}}Pr=null}}function rg(n,e,t,r){if(!t.has(n)&&(t.add(n),n.reactions!==null))for(const i of n.reactions){const s=i.f;(s&Nn)!==0?rg(i,e,t,r):(s&(vo|Nr))!==0&&(s&vt)===0&&cd(i,e,r)&&(Ut(i,vt),ud(i))}}function cd(n,e,t){const r=t.get(n);if(r!==void 0)return r;if(n.deps!==null)for(const i of n.deps){if(za.call(e,i))return!0;if((i.f&Nn)!==0&&cd(i,e,t))return t.set(i,!0),!0}return t.set(n,!1),!1}function ud(n){re.schedule(n)}function ig(n,e){if(!((n.f&xr)!==0&&(n.f&Zt)!==0)){(n.f&vt)!==0?e.d.push(n):(n.f&sr)!==0&&e.m.push(n),Ut(n,Zt);for(var t=n.first;t!==null;)ig(t,e),t=t.next}}function sg(n){Ut(n,Zt);for(var e=n.first;e!==null;)sg(e),e=e.next}let Ec=new Set;const Jr=new Map;let og=!1;function zs(n,e){var t={f:0,v:n,reactions:null,equals:Bm,rv:0,wv:0};return t}function X(n,e){const t=zs(n);return wg(t),t}function DE(n,e=!1,t=!0){const r=zs(n);return e||(r.equals=zm),r}function D(n,e,t=!1){Se!==null&&(!Dr||(Se.f&_c)!==0)&&Wm()&&(Se.f&(Nn|Nr|vo|_c))!==0&&(Xr===null||!Xr.has(n))&&fE();let r=t?_r(e):e;return Mo(n,r,ic)}var Ps=null,gh=0;function Mo(n,e,t=null){if(!n.equals(e)){as?Jr.set(n,e):Jr.has(n)||Jr.set(n,n.v);var r=Bs.ensure();if(r.capture(n,e),(n.f&Nn)!==0){const i=n;(n.f&vt)!==0&&ld(i),yn===null&&od(i)}n.wv=Ig(),Ps=null,gh=0,ag(n,vt,t),Ps=null,je!==null&&(je.f&Zt)!==0&&(je.f&(xr|ss))===0&&(fr===null?zE([n]):fr.push(n)),!r.is_fork&&Ec.size>0&&!og&&OE()}return e}function OE(){og=!1;for(const n of Ec){(n.f&Zt)!==0&&Ut(n,sr);let e;try{e=dl(n)}catch{e=!0}e&&xo(n)}Ec.clear()}function Ma(n){D(n,n.v+1)}function ag(n,e,t){var r=n.reactions;if(r!==null){var i=r.length;if(gh+=i,gh>1e5&&Ps===null&&(Ps=new Set),Ps!==null){if(Ps.has(n))return;Ps.add(n)}for(var s=0;s<i;s++){var a=r[s],l=a.f,c=(l&vt)===0;if(c&&Ut(a,e),(l&_c)!==0)Ec.add(a);else if((l&Nn)!==0){var h=a;yn==null||yn.delete(h),ag(h,sr,t)}else if(c){var f=a;(l&Nr)!==0&&Pr!==null&&Pr.add(f),t!==null?t.push(f):ud(f)}}}}function _r(n){if(typeof n!="object"||n===null||yo in n||Lm in n)return n;const e=Vm(n);if(e!==$y&&e!==qy)return n;var t=new Map,r=Gc(n),i=X(0),s=$s,a=l=>{if($s===s)return l();var c=Se,h=$s;wr(null),Tf(s);var f=l();return wr(c),Tf(h),f};return r&&t.set("length",X(n.length)),new Proxy(n,{defineProperty(l,c,h){(!("value"in h)||h.configurable===!1||h.enumerable===!1||h.writable===!1)&&hE();var f=t.get(c);return f===void 0?a(()=>{var g=X(h.value);return t.set(c,g),g}):D(f,h.value,!0),!0},deleteProperty(l,c){var h=t.get(c);if(h===void 0){if(c in l){const f=a(()=>X(zt));t.set(c,f),Ma(i)}}else D(h,zt),Ma(i);return!0},get(l,c,h){var E;if(c===yo)return n;var f=t.get(c),g=c in l;if(f===void 0&&(!g||(E=Fs(l,c))!=null&&E.writable)&&(f=a(()=>{var S=_r(g?l[c]:zt),P=X(S);return P}),t.set(c,f)),f!==void 0){var _=p(f);return _===zt?void 0:_}return Reflect.get(l,c,h)},getOwnPropertyDescriptor(l,c){var _;(_=this.has)==null||_.call(this,l,c);var h=Reflect.getOwnPropertyDescriptor(l,c),f=t.get(c);if(f!==void 0){var g=p(f);if(g===zt)return;if(h&&"value"in h)h.value=g;else return{enumerable:!0,configurable:!0,value:g,writable:!0}}return h},has(l,c){var _;if(c===yo)return!0;var h=t.get(c),f=h!==void 0&&h.v!==zt||Reflect.has(l,c);if(h!==void 0||(je!==null||Se!==null)&&(!f||(_=Fs(l,c))!=null&&_.writable)){h===void 0&&(h=a(()=>{var E=f?_r(l[c]):zt,S=X(E);return S}),t.set(c,h));var g=p(h);if(g===zt)return!1}return f},set(l,c,h,f){var q;var g=t.get(c),_=c in l;if(r&&c==="length")for(var E=h;E<g.v;E+=1){var S=t.get(E+"");S!==void 0?D(S,zt):E in l&&(S=a(()=>X(zt)),t.set(E+"",S))}if(g===void 0)(!_||(q=Fs(l,c))!=null&&q.writable)&&(g=a(()=>X(void 0)),D(g,_r(h)),t.set(c,g));else{_=g.v!==zt;var P=a(()=>_r(h));D(g,P)}var I=Reflect.getOwnPropertyDescriptor(l,c);if(I!=null&&I.set&&I.set.call(f,h),!_){if(r&&typeof c=="string"){var L=t.get("length"),U=Number(c);Number.isInteger(U)&&U>=L.v&&D(L,U+1)}Ma(i)}return!0},ownKeys(l){p(i);var c=Reflect.ownKeys(l).filter(g=>{var _=t.get(g);return _===void 0||_.v!==zt});for(var[h,f]of t)f.v!==zt&&!(h in l)&&c.push(h);return c},setPrototypeOf(){dE()}})}function yf(n){try{if(n!==null&&typeof n=="object"&&yo in n)return n[yo]}catch{}return n}function lg(n,e){return Object.is(yf(n),yf(e))}var Ef,cg,ug,hg,dg;function VE(){if(Ef===void 0){Ef=window,cg=document,ug=/Firefox/.test(navigator.userAgent);var n=Element.prototype,e=Node.prototype,t=Text.prototype;hg=Fs(e,"firstChild").get,dg=Fs(e,"nextSibling").get,pf(n)&&(n[uh]=void 0,n[nc]=null,n[hh]=void 0,n.__e=void 0),pf(t)&&(t[ya]=void 0)}}function Mr(n=""){return document.createTextNode(n)}function js(n){return hg.call(n)}function hl(n){return dg.call(n)}function R(n,e){return js(n)}function Ia(n,e=!1){{var t=js(n);return t instanceof Comment&&t.data===""?hl(t):t}}function G(n,e=!1){return js(n)}function y(n,e=1,t=!1){let r=n;for(;e--;)r=hl(r);return r}function ME(n){n.textContent=""}function fg(){return!1}function pg(n,e,t){return e==null||e===$m?t?document.createElement(n,{is:t}):document.createElement(n):t?document.createElementNS(e,n,{is:t}):document.createElementNS(e,n)}function xE(n){var e=je;if(e===null)return Se.f|=Ji,n;if((e.f&Ko)===0&&(e.f&Oo)===0)throw n;Kr(n,e)}function Kr(n,e){if(n===Um)throw n;if(!(e!==null&&(e.f&Pn)!==0)){for(;e!==null;){if((e.f&ch)!==0&&(e.f&(Pn|gc))===0){if((e.f&Ko)===0)throw n;try{e.b.error(n);return}catch(t){n=t}}e=e.parent}throw n}}function LE(n){je===null&&(Se===null&&cE(),lE()),as&&aE()}function FE(n,e){var t=e.last;t===null?e.last=e.first=n:(t.next=n,n.prev=t,e.last=n)}function ai(n,e){var t=je;t!==null&&(t.f&Fn)!==0&&(n|=Fn);var r={ctx:kn,deps:null,nodes:null,f:n|vt|Vr,first:null,fn:e,last:null,next:null,parent:t,b:t&&t.b,prev:null,teardown:null,wv:0,ac:null};re==null||re.register_created_effect(r);var i=r;if((n&Oo)!==0)Va!==null?Va.push(r):Bs.ensure().schedule(r);else if(e!==null){try{xo(r)}catch(a){throw En(r),a}i.deps===null&&i.teardown===null&&i.nodes===null&&i.first===i.last&&(i.f&Qo)===0&&(i=i.first,(n&Nr)!==0&&(n&os)!==0&&i!==null&&(i.f|=os))}if(i!==null&&(i.parent=t,t!==null&&FE(i,t),Se!==null&&(Se.f&Nn)!==0&&(n&ss)===0)){var s=Se;(s.effects??(s.effects=[])).push(i)}return r}function hd(){return Se!==null&&!Dr}function Xc(n){const e=ai(Qc,null);return Ut(e,Zt),e.teardown=n,e}function _h(n){LE();var e=je.f,t=!Se&&(e&xr)!==0&&kn!==null&&!kn.i;if(t){var r=kn;(r.e??(r.e=[])).push(n)}else return mg(n)}function mg(n){return ai(Oo|jy,n)}function UE(n){Bs.ensure();const e=ai(ss|Qo,n);return(t={})=>new Promise(r=>{t.outro?Us(e,()=>{En(e),r(void 0)}):(En(e),r(void 0))})}function Zc(n){return ai(Oo,n)}function $E(n){return ai(vo|Qo,n)}function dd(n,e=0){return ai(Qc|e,n)}function we(n,e=[],t=[],r=[]){Qm(r,e,t,i=>{ai(Qc,()=>{n(...i.map(p))})})}function Jo(n,e=0){var t=ai(Nr|e,n);return t}function gg(n,e=0){var t=ai(nd|e,n);return t}function Ln(n){return ai(xr|Qo,n)}function _g(n){var e=n.teardown;if(e!==null){const t=as,r=Se;wf(!0),wr(null);try{e.call(null)}catch(i){Kr(i,n.parent)}finally{wf(t),wr(r)}}}function fd(n,e=!1){var t=n.first;for(n.first=n.last=null;t!==null;){const i=t.ac;i!==null&&Yo(()=>{i.abort(ul)});var r=t.next;(t.f&ss)!==0?t.parent=null:En(t,e),t=r}}function qE(n){for(var e=n.first;e!==null;){var t=e.next;(e.f&xr)===0&&En(e),e=t}}function En(n,e=!0){var t=!1;(e||(n.f&xm)!==0)&&n.nodes!==null&&n.nodes.end!==null&&(BE(n.nodes.start,n.nodes.end),t=!0),n.f|=gc,fd(n,e&&!t),ja(n,0);var r=n.nodes&&n.nodes.t;if(r!==null)for(const s of r)s.stop();_g(n),n.f^=gc,n.f|=Pn;var i=n.parent;i!==null&&i.first!==null&&vg(n),n.next=n.prev=n.teardown=n.ctx=n.deps=n.fn=n.nodes=n.ac=n.b=null}function BE(n,e){for(;n!==null;){var t=n===e?null:hl(n);n.remove(),n=t}}function vg(n){var e=n.parent,t=n.prev,r=n.next;t!==null&&(t.next=r),r!==null&&(r.prev=t),e!==null&&(e.first===n&&(e.first=r),e.last===n&&(e.last=t))}function Us(n,e,t=!0){var r=[];n.f|=rd,yg(n,r,!0);var i=()=>{t&&En(n),e&&e()},s=r.length;if(s>0){var a=()=>--s||i();for(var l of r)l.out(a)}else i()}function yg(n,e,t){if((n.f&Fn)===0){n.f^=Fn;var r=n.nodes&&n.nodes.t;if(r!==null)for(const l of r)(l.is_global||t)&&e.push(l);for(var i=n.first;i!==null;){var s=i.next;if((i.f&ss)===0){var a=(i.f&os)!==0||(i.f&xr)!==0&&(n.f&Nr)!==0;yg(i,e,a?t:!1)}i=s}}}function wc(n){n.f&=~rd,Eg(n,!0)}function Eg(n,e){if((n.f&rd)===0&&(n.f&Fn)!==0){n.f^=Fn,(n.f&Zt)===0&&(Ut(n,vt),Bs.ensure().schedule(n));for(var t=n.first;t!==null;){var r=t.next,i=(t.f&os)!==0||(t.f&xr)!==0;Eg(t,i?e:!1),t=r}var s=n.nodes&&n.nodes.t;if(s!==null)for(const a of s)(a.is_global||e)&&a.in()}}function pd(n,e){if(n.nodes)for(var t=n.nodes.start,r=n.nodes.end;t!==null;){var i=t===r?null:hl(t);e.append(t),t=i}}let as=!1;function wf(n){as=n}let Se=null,Dr=!1;function wr(n){Se=n}let je=null;function si(n){je=n}let Xr=null;function wg(n){Se!==null&&((Se.f&vc)!==0||(Se.f&Nn)!==0)&&(Xr??(Xr=new Set)).add(n)}let Gn=null,nr=0,fr=null;function zE(n){fr=n}let Tg=1,Ns=0,$s=Ns;function Tf(n){$s=n}function Ig(){return++Tg}function dl(n){var e=n.f;if((e&vt)!==0)return!0;if((e&sr)!==0){for(var t=n.deps,r=t.length,i=0;i<r;i++){var s=t[i];if(dl(s)&&Jm(s),s.wv>n.wv)return!0}(e&Vr)!==0&&yn===null&&Ut(n,Zt)}return!1}function Ag(n,e,t=!0){var r=n.reactions;if(r!==null&&!(Xr!==null&&Xr.has(n)))for(var i=0;i<r.length;i++){var s=r[i];(s.f&Nn)!==0?Ag(s,e,!1):e===s&&(t?Ut(s,vt):(s.f&Zt)!==0&&Ut(s,sr),ud(s))}}function bg(n){var e=Gn,t=nr,r=fr,i=Se,s=Xr,a=kn,l=Dr,c=$s,h=n.f;Gn=null,nr=0,fr=null,Se=(h&(xr|ss))===0?n:null,Xr=null,Vo(n.ctx),Dr=!1,$s=++Ns,n.ac!==null&&(Yo(()=>{n.ac.abort(ul)}),n.ac=null);try{n.f|=vc;var f=n.fn,g=f();n.f|=Ko;var _=If(n);if(Wm()&&fr!==null&&!Dr&&_!==null&&(n.f&(Nn|sr|vt))===0)for(var E=0;E<fr.length;E++)Ag(fr[E],n);if(i!==null&&i!==n){if(Ns++,i.deps!==null)for(let S=0;S<t;S+=1)i.deps[S].rv=Ns;if(e!==null)for(const S of e)S.rv=Ns;fr!==null&&(r===null?r=fr:r.push(...fr))}return(n.f&Ji)!==0&&(n.f^=Ji),g}catch(S){return If(n),xE(S)}finally{n.f^=vc,Gn=e,nr=t,fr=r,Se=i,Xr=s,Vo(a),Dr=l,$s=c}}function If(n){var i;var e=n.deps,t=re==null?void 0:re.is_fork;if(Gn!==null){var r;if(t||ja(n,nr),e!==null&&nr>0)for(e.length=nr+Gn.length,r=0;r<Gn.length;r++)e[nr+r]=Gn[r];else n.deps=e=Gn;if(hd()&&(n.f&Vr)!==0)for(r=nr;r<e.length;r++)((i=e[r]).reactions??(i.reactions=[])).push(n)}else!t&&e!==null&&nr<e.length&&(ja(n,nr),e.length=nr);return e}function jE(n,e){let t=e.reactions;if(t!==null){var r=Fy.call(t,n);if(r!==-1){var i=t.length-1;i===0?t=e.reactions=null:(t[r]=t[i],t.pop())}}if(t===null&&(e.f&Nn)!==0&&(Gn===null||!za.call(Gn,e))){var s=e;(s.f&Vr)!==0&&(s.f^=Vr),s.v!==zt&&od(s),s.ac!==null&&Yo(()=>{s.ac.abort(ul),s.ac=null,Ut(s,vt)}),RE(s),ja(s,0)}}function ja(n,e){var t=n.deps;if(t!==null)for(var r=e;r<t.length;r++)jE(n,t[r])}function xo(n){var e=n.f;if((e&Pn)===0){Ut(n,Zt);var t=je;je=n;try{(e&(Nr|nd))!==0?qE(n):fd(n),_g(n);var r=bg(n);n.teardown=typeof r=="function"?r:null,n.wv=Tg;var i;Dm&&mE&&(n.f&vt)!==0&&n.deps}finally{je=t}}}async function HE(){await Promise.resolve(),kE()}function p(n){var e=n.f,t=(e&Nn)!==0;if(Se!==null&&!Dr){var r=je!==null&&(je.f&Pn)!==0;if(!r&&(Xr===null||!Xr.has(n))){var i=Se.deps;if((Se.f&vc)!==0)n.rv<Ns&&(n.rv=Ns,Gn===null&&i!==null&&i[nr]===n?nr++:Gn===null?Gn=[n]:Gn.push(n));else{Se.deps??(Se.deps=[]),za.call(Se.deps,n)||Se.deps.push(n);var s=n.reactions;s===null?n.reactions=[Se]:za.call(s,Se)||s.push(Se)}}}if(as&&Jr.has(n))return Jr.get(n);if(t){var a=n;if(as){var l=a.v;return((a.f&Zt)===0&&a.reactions!==null||Rg(a))&&(l=ld(a)),Jr.set(a,l),l}var c=(a.f&Vr)===0&&!Dr&&Se!==null&&(Se.f&Vr)!==0,h=(a.f&Ko)===0;dl(a)&&(c&&(a.f|=Vr),Jm(a)),c&&!h&&(Xm(a),Sg(a))}if(yn!=null&&yn.has(n))return yn.get(n);if((n.f&Ji)!==0)throw n.v;return n.v}function Sg(n){if(n.f|=Vr,n.deps!==null)for(const t of n.deps){var e=t.reactions;e===null?t.reactions=[n]:za.call(e,n)||e.push(n),(t.f&Nn)!==0&&(t.f&Vr)===0&&(Xm(t),Sg(t))}}function Rg(n){if(n.v===zt)return!0;if(n.deps===null)return!1;for(const e of n.deps)if(Jr.has(e)||(e.f&Nn)!==0&&Rg(e))return!0;return!1}function eu(n){var e=Dr;try{return Dr=!0,n()}finally{Dr=e}}function WE(n){return n.endsWith("capture")&&n!=="gotpointercapture"&&n!=="lostpointercapture"}const GE=["beforeinput","click","change","dblclick","contextmenu","focusin","focusout","input","keydown","keyup","mousedown","mousemove","mouseout","mouseover","mouseup","pointerdown","pointermove","pointerout","pointerover","pointerup","touchend","touchmove","touchstart"];function KE(n){return GE.includes(n)}const QE={formnovalidate:"formNoValidate",ismap:"isMap",nomodule:"noModule",playsinline:"playsInline",readonly:"readOnly",defaultvalue:"defaultValue",defaultchecked:"defaultChecked",srcobject:"srcObject",novalidate:"noValidate",allowfullscreen:"allowFullscreen",disablepictureinpicture:"disablePictureInPicture",disableremoteplayback:"disableRemotePlayback"};function YE(n){return n=n.toLowerCase(),QE[n]??n}const JE=["touchstart","touchmove"];function XE(n){return JE.includes(n)}const Ds=Symbol("events"),Cg=new Set,vh=new Set;function Pg(n,e,t,r={}){function i(s){if(r.capture||yh.call(e,s),!s.cancelBubble)return Yo(()=>t==null?void 0:t.call(this,s))}return n.startsWith("pointer")||n.startsWith("touch")||n==="wheel"?(i.__removed=!1,Yr(()=>{i.__removed||e.addEventListener(n,i,r)})):e.addEventListener(n,i,r),i}function lo(n,e,t,r,i){var s={capture:r,passive:i},a=Pg(n,e,t,s);(e===document.body||e===window||e===document||e instanceof HTMLMediaElement)&&Xc(()=>{a.__removed=!0,e.removeEventListener(n,a,s)})}function he(n,e,t){(e[Ds]??(e[Ds]={}))[n]=t}function kg(n){for(var e=0;e<n.length;e++)Cg.add(n[e]);for(var t of vh)t(n)}let Lu=null,Fu=!1;function yh(n){var P,I;var e=this,t=e.ownerDocument,r=n.type,i=((P=n.composedPath)==null?void 0:P.call(n))||[],s=i[0]||n.target;Lu=n,Fu||(Fu=!0,setTimeout(()=>{Fu=!1,Lu=null}));var a=0,l=Lu===n&&n[Ds];if(l){var c=i.indexOf(l);if(c!==-1&&(e===document||e===window)){n[Ds]=e;return}var h=i.indexOf(e);if(h===-1)return;c<=h&&(a=c)}if(s=i[a]||n.target,s!==e){Om(n,"currentTarget",{configurable:!0,get(){return s||t}});var f=Se,g=je;wr(null),si(null);try{for(var _,E=[];s!==null&&s!==e;){try{var S=(I=s[Ds])==null?void 0:I[r];S!=null&&(!s.disabled||n.target===s)&&S.call(s,n)}catch(L){_?E.push(L):_=L}if(n.cancelBubble)break;a++,s=a<i.length?i[a]:null}if(_){for(let L of E)queueMicrotask(()=>{throw L});throw _}}finally{n[Ds]=e,delete n.currentTarget,wr(f),si(g)}}}var km;const Uu=((km=globalThis==null?void 0:globalThis.window)==null?void 0:km.trustedTypes)&&globalThis.window.trustedTypes.createPolicy("svelte-trusted-html",{createHTML:n=>n});function ZE(n){return(Uu==null?void 0:Uu.createHTML(n))??n}function Ng(n){var e=pg("template");return e.innerHTML=ZE(n.replaceAll("<!>","<!---->")),e.content}function Lo(n,e){var t=je;t.nodes===null&&(t.nodes={start:n,end:e,a:null,t:null})}function J(n,e){var t=(e&Jy)!==0,r=(e&Xy)!==0,i,s=!n.startsWith("<!>");return()=>{i===void 0&&(i=Ng(s?n:"<!>"+n),t||(i=js(i)));var a=r||ug?document.importNode(i,!0):i.cloneNode(!0);if(t){var l=js(a),c=a.lastChild;Lo(l,c)}else Lo(a,a);return a}}function ew(n,e,t="svg"){var r=!n.startsWith("<!>"),i=`<${t}>${r?n:"<!>"+n}</${t}>`,s;return()=>{if(!s){var a=Ng(i),l=js(a);s=js(l)}var c=s.cloneNode(!0);return Lo(c,c),c}}function tw(n,e){return ew(n,e,"svg")}function nw(n=""){{var e=Mr(n+"");return Lo(e,e),e}}function rw(){var n=document.createDocumentFragment(),e=document.createComment(""),t=Mr();return n.append(e,t),Lo(e,t),n}function H(n,e){n!==null&&n.before(e)}function iw(n){let e=0,t=zs(0),r;return()=>{hd()&&(p(t),dd(()=>(e===0&&(r=eu(()=>n(()=>Ma(t)))),e+=1,()=>{Yr(()=>{e-=1,e===0&&(r==null||r(),r=void 0,Ma(t))})})))}}var sw=os|Qo;function ow(n,e,t,r){new aw(n,e,t,r)}var pr,ed,mr,Ms,Rn,Zn,xn,er,Wr,xs,Qi,Do,al,yi,Hc,$e,lw,cw,Eh,Bi,uw,wh,Aa,sc,Th,Ih;class aw{constructor(e,t,r,i){De(this,$e);bn(this,"parent");bn(this,"is_pending",!1);bn(this,"transform_error");De(this,pr);De(this,ed,null);De(this,mr);De(this,Ms);De(this,Rn);De(this,Zn,null);De(this,xn,null);De(this,er,null);De(this,Wr,null);De(this,xs,0);De(this,Qi,0);De(this,Do,!1);De(this,al,new Map);De(this,yi,null);De(this,Hc,iw(()=>(be(this,yi,zs(V(this,xs))),()=>{be(this,yi,null)})));var s;be(this,pr,e),be(this,mr,t),be(this,Ms,a=>{var l=je;l.b=this,l.f|=ch,r(a)}),this.parent=je.b,this.transform_error=i??((s=this.parent)==null?void 0:s.transform_error)??(a=>a),be(this,Rn,Jo(()=>{de(this,$e,wh).call(this)},sw))}defer_effect(e){Km(e,V(this,al))}is_rendered(){return!this.is_pending&&(!this.parent||this.parent.is_rendered())}has_pending_snippet(){return!!V(this,mr).pending}update_pending_count(e,t){de(this,$e,Th).call(this,e,t),be(this,xs,V(this,xs)+e),!(!V(this,yi)||V(this,Do))&&(be(this,Do,!0),Yr(()=>{be(this,Do,!1),V(this,yi)&&Mo(V(this,yi),V(this,xs))}))}get_effect_pending(){return V(this,Hc).call(this),p(V(this,yi))}error(e){if(e===Um||!V(this,mr).onerror&&!V(this,mr).failed)throw e;re!=null&&re.is_fork?(V(this,Zn)&&re.skip_effect(V(this,Zn)),V(this,xn)&&re.skip_effect(V(this,xn)),V(this,er)&&re.skip_effect(V(this,er)),re.oncommit(()=>{de(this,$e,Bi).call(this)||de(this,$e,Ih).call(this,e)})):de(this,$e,Ih).call(this,e)}}pr=new WeakMap,ed=new WeakMap,mr=new WeakMap,Ms=new WeakMap,Rn=new WeakMap,Zn=new WeakMap,xn=new WeakMap,er=new WeakMap,Wr=new WeakMap,xs=new WeakMap,Qi=new WeakMap,Do=new WeakMap,al=new WeakMap,yi=new WeakMap,Hc=new WeakMap,$e=new WeakSet,lw=function(){try{be(this,Zn,Ln(()=>V(this,Ms).call(this,V(this,pr))))}catch(e){this.error(e)}},cw=function(e){const t=V(this,mr).failed,{reset:r,invoke_onerror:i}=de(this,$e,Eh).call(this,e);Yr(i),t&&be(this,er,Ln(()=>{t(V(this,pr),()=>e,()=>r)}))},Eh=function(e){var t=!1,r=!1;const i=()=>{if(!de(this,$e,Bi).call(this)){if(t){rE();return}t=!0,r&&pE(),V(this,er)!==null&&Us(V(this,er),()=>{be(this,er,null)}),de(this,$e,sc).call(this,()=>{de(this,$e,wh).call(this)})}};return{reset:i,invoke_onerror:()=>{var a,l;if(!de(this,$e,Bi).call(this))try{r=!0,(l=(a=V(this,mr)).onerror)==null||l.call(a,e,i),r=!1}catch(c){Kr(c,V(this,Rn)&&V(this,Rn).parent)}}}},Bi=function(){return(V(this,Rn).f&(Pn|gc))!==0},uw=function(){const e=V(this,mr).pending;e&&(this.is_pending=!0,be(this,xn,Ln(()=>e(V(this,pr)))),Yr(()=>{if(!de(this,$e,Bi).call(this)){var t=be(this,Wr,document.createDocumentFragment()),r=Mr(),i=!1;if(t.append(r),be(this,Zn,de(this,$e,sc).call(this,()=>{try{return Ln(()=>V(this,Ms).call(this,r))}catch(s){try{this.error(s),i=!0}catch(a){Kr(a,V(this,Rn).parent)}return null}})),V(this,Zn)===null){be(this,Wr,null),i&&de(this,$e,Aa).call(this,re);return}V(this,Qi)===0&&(V(this,pr).before(t),be(this,Wr,null),Us(V(this,xn),()=>{be(this,xn,null)}),de(this,$e,Aa).call(this,re))}}))},wh=function(){try{if(this.is_pending=this.has_pending_snippet(),be(this,Qi,0),be(this,xs,0),be(this,Zn,Ln(()=>{V(this,Ms).call(this,V(this,pr))})),V(this,Qi)>0){var e=be(this,Wr,document.createDocumentFragment());pd(V(this,Zn),e);const t=V(this,mr).pending;be(this,xn,Ln(()=>t(V(this,pr))))}else de(this,$e,Aa).call(this,re)}catch(t){this.error(t)}},Aa=function(e){this.is_pending=!1,e.transfer_reactions(V(this,al))},sc=function(e){var t=je,r=Se,i=kn;si(V(this,Rn)),wr(V(this,Rn)),Vo(V(this,Rn).ctx);try{return Bs.ensure(),e()}finally{si(t),wr(r),Vo(i)}},Th=function(e,t){var r;if(!this.has_pending_snippet()){this.parent&&de(r=this.parent,$e,Th).call(r,e,t);return}be(this,Qi,V(this,Qi)+e),V(this,Qi)===0&&(de(this,$e,Aa).call(this,t),V(this,xn)&&Us(V(this,xn),()=>{be(this,xn,null)}),V(this,Wr)&&(V(this,pr).before(V(this,Wr)),be(this,Wr,null)))},Ih=function(e){V(this,Zn)&&(En(V(this,Zn)),be(this,Zn,null)),V(this,xn)&&(En(V(this,xn)),be(this,xn,null)),V(this,er)&&(En(V(this,er)),be(this,er,null));let t=V(this,mr).failed;const r=i=>{if(de(this,$e,Bi).call(this))return;const{reset:s,invoke_onerror:a}=de(this,$e,Eh).call(this,i);a(),t&&!de(this,$e,Bi).call(this)&&be(this,er,de(this,$e,sc).call(this,()=>{try{return Ln(()=>{var l=je;l.b=this,l.f|=ch,t(V(this,pr),()=>i,()=>s)})}catch(l){return Kr(l,V(this,Rn).parent),null}}))};Yr(()=>{if(!de(this,$e,Bi).call(this)){var i;try{i=this.transform_error(e)}catch(s){Kr(s,V(this,Rn)&&V(this,Rn).parent);return}i!==null&&typeof i=="object"&&typeof i.then=="function"?i.then(r,s=>Kr(s,V(this,Rn)&&V(this,Rn).parent)):r(i)}})};function j(n,e){var t=e==null?"":typeof e=="object"?`${e}`:e;t!==(n[ya]??(n[ya]=n.nodeValue))&&(n[ya]=t,n.nodeValue=`${t}`)}function hw(n,e){return dw(n,e)}const Bl=new Map;function dw(n,{target:e,anchor:t,props:r={},events:i,context:s,intro:a=!0,transformError:l}){VE();var c=void 0,h=UE(()=>{var f=t??e.appendChild(Mr());ow(f,{pending:()=>{}},E=>{id({});var S=kn;s&&(S.c=s),i&&(r.$$events=i),c=n(E,r)||Hm(),sd()},l);var g=new Set,_=E=>{for(var S=0;S<E.length;S++){var P=E[S];if(!g.has(P)){g.add(P);var I=XE(P);for(const q of[e,document]){var L=Bl.get(q);L===void 0&&(L=new Map,Bl.set(q,L));var U=L.get(P);U===void 0?(q.addEventListener(P,yh,{passive:I}),L.set(P,1)):L.set(P,U+1)}}}};return _(Kc(Cg)),vh.add(_),()=>{var I;for(var E of g)for(const L of[e,document]){var S=Bl.get(L),P=S.get(E);--P==0?(L.removeEventListener(E,yh),S.delete(E),S.size===0&&Bl.delete(L)):S.set(E,P)}vh.delete(_),f!==t&&((I=f.parentNode)==null||I.removeChild(f))}});return fw.set(c,h),c}let fw=new WeakMap;var kr,Gr,tr,Ls,ll,cl,Wc;class md{constructor(e,t=!0){bn(this,"anchor");De(this,kr,new Map);De(this,Gr,new Map);De(this,tr,new Map);De(this,Ls,new Set);De(this,ll,!0);De(this,cl,e=>{if(V(this,kr).has(e)){var t=V(this,kr).get(e),r=V(this,Gr).get(t);if(r)wc(r),V(this,Ls).delete(t);else{var i=V(this,tr).get(t);i&&(wc(i.effect),V(this,Gr).set(t,i.effect),V(this,tr).delete(t),i.fragment.lastChild.remove(),this.anchor.before(i.fragment),r=i.effect)}for(const[s,a]of V(this,kr)){if(V(this,kr).delete(s),s===e)break;const l=V(this,tr).get(a);l&&(En(l.effect),V(this,tr).delete(a))}for(const[s,a]of V(this,Gr)){if(s===t||V(this,Ls).has(s))continue;const l=()=>{if(Array.from(V(this,kr).values()).includes(s)){var h=document.createDocumentFragment();pd(a,h),h.append(Mr()),V(this,tr).set(s,{effect:a,fragment:h})}else En(a);V(this,Ls).delete(s),V(this,Gr).delete(s)};V(this,ll)||!r?(V(this,Ls).add(s),Us(a,l,!1)):l()}}});De(this,Wc,e=>{V(this,kr).delete(e);const t=Array.from(V(this,kr).values());for(const[r,i]of V(this,tr))t.includes(r)||(En(i.effect),V(this,tr).delete(r))});this.anchor=e,be(this,ll,t)}ensure(e,t){var r=re,i=fg();if(t&&!V(this,Gr).has(e)&&!V(this,tr).has(e))if(i){var s=document.createDocumentFragment(),a=Mr();s.append(a),V(this,tr).set(e,{effect:Ln(()=>t(a)),fragment:s})}else V(this,Gr).set(e,Ln(()=>t(this.anchor)));if(V(this,kr).set(r,e),i){for(const[l,c]of V(this,Gr))l===e?r.unskip_effect(c):r.skip_effect(c);for(const[l,c]of V(this,tr))l===e?r.unskip_effect(c.effect):r.skip_effect(c.effect);r.oncommit(V(this,cl)),r.ondiscard(V(this,Wc))}else V(this,cl).call(this,r)}}kr=new WeakMap,Gr=new WeakMap,tr=new WeakMap,Ls=new WeakMap,ll=new WeakMap,cl=new WeakMap,Wc=new WeakMap;function Te(n,e,t=!1){var r=new md(n),i=t?os:0;function s(a,l){r.ensure(a,l)}Jo(()=>{var a=!1;e((l,c=0)=>{a=!0,s(c,l)}),a||s(-1,null)},i)}function pw(n,e){return e}function mw(n,e,t){for(var r=[],i=e.length,s,a=e.length,l=0;l<i;l++){let g=e[l];Us(g,()=>{if(s){if(s.pending.delete(g),s.done.add(g),s.pending.size===0){var _=n.outrogroups;Ah(n,Kc(s.done)),_.delete(s),_.size===0&&(n.outrogroups=null)}}else a-=1},!1)}if(a===0){var c=r.length===0&&t!==null&&n.pending.size===0;if(c){var h=t,f=h.parentNode;ME(f),f.append(h),n.items.clear()}Ah(n,e,!c)}else s={pending:new Set(e),done:new Set},(n.outrogroups??(n.outrogroups=new Set)).add(s)}function Ah(n,e,t=!0){var r;if(n.pending.size>0){r=new Set;for(const a of n.pending.values())for(const l of a)r.add(n.items.get(l).e)}for(var i=0;i<e.length;i++){var s=e[i];if(r!=null&&r.has(s)){s.f|=Qr;const a=document.createDocumentFragment();pd(s,a)}else En(e[i],t)}}var Af;function zi(n,e,t,r,i,s=null){var a=n,l=new Map,c=(e&Fm)!==0;if(c){var h=n;a=h.appendChild(Mr())}var f=null,g=bE(()=>{var U=t();return Gc(U)?U:U==null?[]:Kc(U)}),_=new Map,E=!0;function S(U){if((L.effect.f&Pn)===0){L.pending.delete(U);var q=p(g);L.fallback=f,gw(L,q,a,e,r),f!==null&&(q.length===0?(f.f&Qr)===0?wc(f):(f.f^=Qr,ba(f,null,a)):Us(f,()=>{f=null}))}}function P(U){L.pending.delete(U)}var I=Jo(()=>{for(var U=p(g),q=U.length,Y=new Set,Me=re,Q=fg(),A=0;A<q;A+=1){var v=U[A],w=r(v,A),b=E?null:l.get(w);b?(b.v&&Mo(b.v,v),b.i&&Mo(b.i,A),Q&&Me.unskip_effect(b.e)):(b=_w(l,E?a:Af??(Af=Mr()),v,w,A,i,e,t),E||(b.e.f|=Qr),l.set(w,b)),Y.add(w)}if(q===0&&s&&!f&&(E?f=Ln(()=>s(a)):(f=Ln(()=>s(Af??(Af=Mr()))),f.f|=Qr)),q>Y.size&&oE(),!E)if(_.set(Me,Y),Q){for(const[C,k]of l)Y.has(C)||Me.skip_effect(k.e);Me.oncommit(S),Me.ondiscard(P)}else S(Me);p(g)}),L={effect:I,items:l,pending:_,outrogroups:null,fallback:f};E=!1}function pa(n){for(;n!==null&&(n.f&xr)===0;)n=n.next;return n}function gw(n,e,t,r,i){var b,C,k,T,ee,Pt,hn,ar,lr;var s=(r&Qy)!==0,a=e.length,l=n.items,c=pa(n.effect.first),h,f=null,g,_=[],E=[],S,P,I,L;if(s)for(L=0;L<a;L+=1)S=e[L],P=i(S,L),I=l.get(P).e,(I.f&Qr)===0&&((C=(b=I.nodes)==null?void 0:b.a)==null||C.measure(),(g??(g=new Set)).add(I));for(L=0;L<a;L+=1){if(S=e[L],P=i(S,L),I=l.get(P).e,n.outrogroups!==null)for(const Gt of n.outrogroups)Gt.pending.delete(I),Gt.done.delete(I);if((I.f&Fn)!==0&&(wc(I),s&&((T=(k=I.nodes)==null?void 0:k.a)==null||T.unfix(),(g??(g=new Set)).delete(I))),(I.f&Qr)!==0)if(I.f^=Qr,I===c)ba(I,null,t);else{var U=f?f.next:c;I===n.effect.last&&(n.effect.last=I.prev),I.prev&&(I.prev.next=I.next),I.next&&(I.next.prev=I.prev),$i(n,f,I),$i(n,I,U),ba(I,U,t),f=I,_=[],E=[],c=pa(f.next);continue}if(I!==c){if(h!==void 0&&h.has(I)){if(_.length<E.length){var q=E[0],Y;f=q.prev;var Me=_[0],Q=_[_.length-1];for(Y=0;Y<_.length;Y+=1)ba(_[Y],q,t);for(Y=0;Y<E.length;Y+=1)h.delete(E[Y]);$i(n,Me.prev,Q.next),$i(n,f,Me),$i(n,Q,q),c=q,f=Q,L-=1,_=[],E=[]}else h.delete(I),ba(I,c,t),$i(n,I.prev,I.next),$i(n,I,f===null?n.effect.first:f.next),$i(n,f,I),f=I;continue}for(_=[],E=[];c!==null&&c!==I;)(h??(h=new Set)).add(c),E.push(c),c=pa(c.next);if(c===null)continue}(I.f&Qr)===0&&_.push(I),f=I,c=pa(I.next)}if(n.outrogroups!==null){for(const Gt of n.outrogroups)Gt.pending.size===0&&(Ah(n,Kc(Gt.done)),(ee=n.outrogroups)==null||ee.delete(Gt));n.outrogroups.size===0&&(n.outrogroups=null)}if(c!==null||h!==void 0){var A=[];if(h!==void 0)for(I of h)(I.f&Fn)===0&&A.push(I);for(;c!==null;)(c.f&Fn)===0&&c!==n.fallback&&A.push(c),c=pa(c.next);var v=A.length;if(v>0){var w=(r&Fm)!==0&&a===0?t:null;if(s){for(L=0;L<v;L+=1)(hn=(Pt=A[L].nodes)==null?void 0:Pt.a)==null||hn.measure();for(L=0;L<v;L+=1)(lr=(ar=A[L].nodes)==null?void 0:ar.a)==null||lr.fix()}mw(n,A,w)}}s&&Yr(()=>{var Gt,Qn;if(g!==void 0)for(I of g)(Qn=(Gt=I.nodes)==null?void 0:Gt.a)==null||Qn.apply()})}function _w(n,e,t,r,i,s,a,l){var c=(a&Gy)!==0?(a&Yy)===0?DE(t,!1,!1):zs(t):null,h=(a&Ky)!==0?zs(i):null;return{v:c,i:h,e:Ln(()=>(s(e,c??t,h??i,l),()=>{n.delete(r)}))}}function ba(n,e,t){if(n.nodes)for(var r=n.nodes.start,i=n.nodes.end,s=e&&(e.f&Qr)===0?e.nodes.start:t;r!==null;){var a=hl(r);if(s.before(r),r===i)return;r=a}}function $i(n,e,t){e===null?n.effect.first=t:e.next=t,t===null?n.effect.last=e:t.prev=e}function vw(n,e,...t){var r=new md(n);Jo(()=>{const i=e()??null;r.ensure(i,i&&(s=>i(s,...t)))},os)}function yw(n,e,t,r,i,s){var a=null,l=n,c=new md(l,!1);Jo(()=>{const h=e()||null;var f=Zy;if(h===null){c.ensure(null,null);return}return c.ensure(h,g=>{if(h){var _=qm;if(a=pg(h,f),Lo(a,a),r){var E=null,S=a.appendChild(Mr());r(a,S),E==null||E.remove()}je.nodes.end=a,_||g.before(a)}}),()=>{}},os),Xc(()=>{})}function Ew(n,e){var t;t=document.head.appendChild(Mr());try{Jo(()=>{var r=Ln(()=>e(t));r.f|=xm,qm||(r.nodes===null?r.nodes={start:t,end:t,a:null,t:null}:r.nodes.end=t)})}finally{}}function ww(n,e){var t=void 0,r;gg(()=>{t!==(t=e())&&(r&&(En(r),r=null),t&&(r=Ln(()=>{Zc(()=>t(n))})))})}function Dg(n){var e,t,r="";if(typeof n=="string"||typeof n=="number")r+=n;else if(typeof n=="object")if(Array.isArray(n)){var i=n.length;for(e=0;e<i;e++)n[e]&&(t=Dg(n[e]))&&(r&&(r+=" "),r+=t)}else for(t in n)n[t]&&(r&&(r+=" "),r+=t);return r}function Tw(){for(var n,e,t=0,r="",i=arguments.length;t<i;t++)(n=arguments[t])&&(e=Dg(n))&&(r&&(r+=" "),r+=e);return r}function Iw(n){return typeof n=="object"?Tw(n):n??""}const bf=[...` 	
\r\f \v\uFEFF`];function Aw(n,e,t){var r=n==null?"":""+n;if(e&&(r=r?r+" "+e:e),t){for(var i of Object.keys(t))if(t[i])r=r?r+" "+i:i;else if(r.length)for(var s=i.length,a=0;(a=r.indexOf(i,a))>=0;){var l=a+s;(a===0||bf.includes(r[a-1]))&&(l===r.length||bf.includes(r[l]))?r=(a===0?"":r.substring(0,a))+r.substring(l+1):a=l}}return r===""?null:r}function Sf(n,e=!1){var t=e?" !important;":";",r="";for(var i of Object.keys(n)){var s=n[i];s!=null&&s!==""&&(r+=" "+i+": "+s+t)}return r}function $u(n){return n[0]!=="-"||n[1]!=="-"?n.toLowerCase():n}function bw(n,e){if(e){var t="",r,i;if(Array.isArray(e)?(r=e[0],i=e[1]):r=e,n){n=String(n).replaceAll(/\/\*.*?\*\//g,"").trim();var s=!1,a=0,l=!1,c=[];r&&c.push(...Object.keys(r).map($u)),i&&c.push(...Object.keys(i).map($u));var h=0,f=-1;const P=n.length;for(var g=0;g<P;g++){var _=n[g];if(l?_==="/"&&n[g-1]==="*"&&(l=!1):s?s===_&&(s=!1):_==="/"&&n[g+1]==="*"?l=!0:_==='"'||_==="'"?s=_:_==="("?a++:_===")"&&a--,!l&&s===!1&&a===0){if(_===":"&&f===-1)f=g;else if(_===";"||g===P-1){if(f!==-1){var E=$u(n.substring(h,f).trim());if(!c.includes(E)){_!==";"&&g++;var S=n.substring(h,g).trim();t+=" "+S+";"}}h=g+1,f=-1}}}}return r&&(t+=Sf(r)),i&&(t+=Sf(i,!0)),t=t.trim(),t===""?null:t}return n==null?null:String(n)}function _n(n,e,t,r,i,s){var a=n[uh];if(a!==t||a===void 0){var l=Aw(t,r,s);l==null?n.removeAttribute("class"):e?n.className=l:n.setAttribute("class",l),n[uh]=t}else if(s&&i!==s)for(var c in s){var h=!!s[c];(i==null||h!==!!i[c])&&n.classList.toggle(c,h)}return s}function qu(n,e={},t,r){for(var i in t){var s=t[i];e[i]!==s&&(t[i]==null?n.style.removeProperty(i):n.style.setProperty(i,s,r))}}function Sw(n,e,t,r){var i=n[hh];if(i!==e){var s=bw(e,r);s==null?n.removeAttribute("style"):n.style.cssText=s,n[hh]=e}else r&&(Array.isArray(r)?(qu(n,t==null?void 0:t[0],r[0]),qu(n,t==null?void 0:t[1],r[1],"important")):qu(n,t,r));return r}function Og(n,e){e?n.hasAttribute("selected")||n.setAttribute("selected",""):n.removeAttribute("selected")}function Rf(n,e){var t=!("__defaultValue"in n);!t&&n.__defaultValue===e||(n.__defaultValue=e,Vg(n,!t||"__value"in n))}function Vg(n,e){var t=n.__defaultValue,r=n.multiple,i=r?t??[]:null;if(!(r&&!Gc(i))){var s=n.selectedIndex,a=e&&r?new Set(n.selectedOptions):null;for(var l of n.options){var c=Eo(l);Og(l,r?i.includes(c):lg(c,t))}if(e)if(a!==null)for(l of n.options){var h=a.has(l);l.selected!==h&&(l.selected=h)}else n.selectedIndex!==s&&(n.selectedIndex=s)}}function Tc(n,e,t=!1){if(n.multiple){if(e==null)return;if(!Gc(e))return nE();for(var r of n.options)r.selected=e.includes(Eo(r));return}for(r of n.options){var i=Eo(r);if(lg(i,e)){r.selected=!0;return}}(!t||e!==void 0)&&(n.selectedIndex=-1)}function oc(n){var e=new MutationObserver(t=>{t.every(Rw)||("__defaultValue"in n&&Vg(n,!1),"__value"in n&&Tc(n,n.__value))});e.observe(n,{childList:!0,subtree:!0,attributes:!0,attributeFilter:["value"]}),Xc(()=>{e.disconnect()})}function Bu(n,e,t=e){var r=new WeakSet,i=!0;ad(n,"change",s=>{var a=s?"[selected]":":checked",l;if(n.multiple)l=[].map.call(n.querySelectorAll(a),Eo);else{var c=n.querySelector(a)??n.querySelector("option:not([disabled])");l=c&&Eo(c)}t(l),n.__value=l,re!==null&&r.add(re)}),Zc(()=>{var s=e();if(n===document.activeElement){var a=re;if(r.has(a))return}if(Tc(n,s,i),i&&s===void 0){var l=n.querySelector(":checked");l!==null&&(s=Eo(l),t(s))}n.__value=s,i=!1})}function Eo(n){return"__value"in n?n.__value:n.value}function Rw(n){if(n.target.closest("selectedcontent")!==null)return!0;if(n.type==="childList"){var e=[...n.addedNodes,...n.removedNodes];return e.length>0&&e.every(t=>t.nodeName==="SELECTEDCONTENT")}return!1}const ma=Symbol("class"),ga=Symbol("style"),Mg=Symbol("is custom element"),xg=Symbol("is html"),Cw=Yc?"input":"INPUT",Pw=Yc?"option":"OPTION",Lg=Yc?"select":"SELECT",kw=Yc?"progress":"PROGRESS";function gi(n,e,t,r){var i=Fg(n),s=i[e];s!==(i[e]=t)&&(e==="loading"&&(n[Wy]=t),t==null?n.removeAttribute(e):typeof t!="string"&&Ug(n).has(e)?n[e]=t:n.setAttribute(e,t))}function Nw(n,e,t,r,i=!1,s=!1){var a=Fg(n),l=a[Mg],c=!a[xg],h=e||{},f=n.nodeName===Pw,g=n.nodeName===Lg;try{for(var _ in e)!(_ in t)&&_[0]+_[1]!=="$$"&&(t[_]=null);t.class?t.class=Iw(t.class):(r||t[ma])&&(t.class=null),t[ga]&&(t.style??(t.style=null));var E=Ug(n);if(n.nodeName===Cw&&"type"in t&&("value"in t||"__value"in t)){var S=t.type;(S!==h.type||S===void 0&&n.hasAttribute("type"))&&(h.type=S,gi(n,"type",S,s))}for(const Q in t){let A=t[Q];if(f&&Q==="value"&&A==null){n.value=n.__value="",h[Q]=A;continue}if(Q==="class"){var P=n.namespaceURI==="http://www.w3.org/1999/xhtml";_n(n,P,A,r,e==null?void 0:e[ma],t[ma]),h[Q]=A,h[ma]=t[ma];continue}if(Q==="style"){Sw(n,A,e==null?void 0:e[ga],t[ga]),h[Q]=A,h[ga]=t[ga];continue}var I=h[Q];if(!(A===I&&!(A===void 0&&n.hasAttribute(Q)))){h[Q]=A;var L=Q[0]+Q[1];if(L!=="$$")if(L==="on"){const v={},w="$$"+Q;let b=Q.slice(2);var U=KE(b);if(WE(b)&&(b=b.slice(0,-7),v.capture=!0),!U&&I){if(A!=null)continue;n.removeEventListener(b,h[w],v),h[w]=null}if(U)he(b,n,A),kg([b]);else if(A!=null){let C=function(k){h[Q].call(this,k)};var Me=C;h[w]=Pg(b,n,C,v)}}else if(Q==="style")gi(n,Q,A);else if(Q==="autofocus")wE(n,!!A);else if(!l&&(Q==="__value"||Q==="value"&&A!=null))n.__value=A,(I==null||n.value!==A||A===0&&n.nodeName===kw)&&(n.value=A);else if(Q==="selected"&&f)Og(n,A);else{var q=Q;c||(q=YE(q));var Y=q==="defaultValue"||q==="defaultChecked";if(g&&q==="defaultValue")continue;if(A==null&&!l&&!Y)if(a[Q]=null,q==="value"||q==="checked"){let v=n;const w=e===void 0;if(q==="value"){let b=v.defaultValue;v.removeAttribute(q),v.defaultValue=b,v.value=v.__value=w?b:null}else{let b=v.defaultChecked;v.removeAttribute(q),v.defaultChecked=b,v.checked=w?b:!1}}else n.removeAttribute(Q);else Y||(l||typeof A!="string")&&E.has(q)?(n[q]=A,q in a&&(a[q]=zt)):typeof A!="function"&&gi(n,q,A,s)}}}}finally{}return h}function Cf(n,e,t=[],r=[],i=[],s,a=!1,l=!1){Qm(i,t,r,c=>{var h=void 0,f={},g=n.nodeName===Lg,_=!1;if(gg(()=>{var S=e(...c.map(p)),P=Nw(n,h,S,s,a,l);if(_&&g){var I=n;"defaultValue"in S&&Rf(I,S.defaultValue),"value"in S&&Tc(I,S.value)}for(let U of Object.getOwnPropertySymbols(f))S[U]||En(f[U]);for(let U of Object.getOwnPropertySymbols(S)){var L=S[U];U.description===eE&&(!h||L!==h[U])&&(f[U]&&En(f[U]),f[U]=Ln(()=>ww(n,()=>L))),P[U]=L}h=P}),g){var E=n;Zc(()=>{var S=h;"defaultValue"in S&&Rf(E,S.defaultValue),Tc(E,S.value,!0),oc(E)})}_=!0})}function Fg(n){return n[nc]??(n[nc]={[Mg]:n.nodeName.includes("-"),[xg]:n.namespaceURI===$m})}var Pf=new Map;function Ug(n){var e=n.getAttribute("is")||n.nodeName,t=Pf.get(e);if(t)return t;Pf.set(e,t=new Set);for(var r,i=n,s=Element.prototype;s!==i;){r=Uy(i);for(var a in r)r[a].set&&a!=="innerHTML"&&a!=="textContent"&&a!=="innerText"&&t.add(a);i=Vm(i)}return t}function Qe(n,e,t=e){var r=new WeakSet;ad(n,"input",async i=>{var s=i?n.defaultValue:n.value;if(s=zu(n)?ju(s):s,t(s),re!==null&&r.add(re),await HE(),s!==(s=e())){var a=n.selectionStart,l=n.selectionEnd,c=n.value.length;if(n.value=s??"",l!==null){var h=n.value.length;a===l&&l===c&&h>c?(n.selectionStart=h,n.selectionEnd=h):(n.selectionStart=a,n.selectionEnd=Math.min(l,h))}}}),eu(e)==null&&n.value&&(t(zu(n)?ju(n.value):n.value),re!==null&&r.add(re)),dd(()=>{var i=e();if(n===document.activeElement){var s=re;if(r.has(s))return}zu(n)&&i===ju(n.value)||n.type==="date"&&!i&&!n.value||i!==n.value&&(n.value=i??"")})}function zl(n,e,t=e){ad(n,"change",r=>{var i=r?n.defaultChecked:n.checked;t(i)}),eu(e)==null&&t(n.checked),dd(()=>{var r=e();n.checked=!!r})}function zu(n){var e=n.type;return e==="number"||e==="range"}function ju(n){return n===""?null:+n}const Dw={get(n,e){if(!n.exclude.has(e))return n.props[e]},set(n,e){return!1},getOwnPropertyDescriptor(n,e){if(!n.exclude.has(e)&&e in n.props)return{enumerable:!0,configurable:!0,value:n.props[e]}},has(n,e){return n.exclude.has(e)?!1:e in n.props},ownKeys(n){return Reflect.ownKeys(n.props).filter(e=>!n.exclude.has(e))}};function Tt(n,e,t){return new Proxy({props:n,exclude:e},Dw)}const Ow={get(n,e){let t=n.props.length;for(;t--;){let r=n.props[t];if(fa(r)&&(r=r()),typeof r=="object"&&r!==null&&e in r)return r[e]}},set(n,e,t){let r=n.props.length;for(;r--;){let i=n.props[r];fa(i)&&(i=i());const s=Fs(i,e);if(s&&s.set)return s.set(t),!0}return!1},getOwnPropertyDescriptor(n,e){let t=n.props.length;for(;t--;){let r=n.props[t];if(fa(r)&&(r=r()),typeof r=="object"&&r!==null&&e in r){const i=Fs(r,e);return i&&!i.configurable&&(i.configurable=!0),i}}},has(n,e){if(e===yo||e===Hy)return!1;for(let t of n.props)if(fa(t)&&(t=t()),t!=null&&e in t)return!0;return!1},ownKeys(n){const e=[];for(let t of n.props)if(fa(t)&&(t=t()),!!t){for(const r in t)e.includes(r)||e.push(r);for(const r of Object.getOwnPropertySymbols(t))e.includes(r)||e.push(r)}return e}};function Rt(...n){return new Proxy({props:n},Ow)}function mi(n,e,t,r){var i=void 0,s=()=>(i??(i=Jc(r)),p(i)),a;a=n[e],a===void 0&&r!==void 0&&(a=s());var l;return l=()=>{var c=n[e];return c===void 0?s():c},l}function Vw(n){kn===null&&jm(),_h(()=>{const e=eu(n);if(typeof e=="function")return e})}const Mw="5";var Nm;typeof window<"u"&&((Nm=window.__svelte??(window.__svelte={})).v??(Nm.v=new Set)).add(Mw);/**
 * @file
 * @license @lucide/svelte v1.69.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Ss={xmlns:"http://www.w3.org/2000/svg",width:24,height:24,viewBox:"0 0 24 24",fill:"none",stroke:"currentColor","stroke-width":2,"stroke-linecap":"round","stroke-linejoin":"round"};/**
 * @file
 * @license @lucide/svelte v1.69.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const bh=(...n)=>n.filter((e,t,r)=>!!e&&e.trim()!==""&&r.indexOf(e)===t).join(" ").trim();/**
 * @file
 * @license @lucide/svelte v1.69.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */function Hu(n){return n!=null}function xw(n,e={}){var _,E;const t=e.attributeNames??{},r=S=>t[S]??S,i=n.size??n.width??Ss.width,s=n.size??n.height??Ss.height,a=((_=n.aliases)==null?void 0:_.filter(S=>typeof S=="string"&&S.trim()!=="").map(S=>`lucide-${S}`))??[],l=[...n.name?[`lucide-${n.name}`]:[],...a],c=((E=e.className)==null?void 0:E.split(" ").filter(Boolean))??[],h=e.includeDefaultClasses===!1?bh(...c):bh("lucide",...l,...c),f=e.absoluteStrokeWidth?Number(e.strokeWidth??Ss["stroke-width"])*Number(n.size??n.width??Ss.width)/Number(e.size??e.width??Ss.width):e.strokeWidth??Ss["stroke-width"];return["svg",{...Object.entries(Ss).reduce((S,[P,I])=>(S[r(P)]=I,S),{}),..."color"in e&&e.color&&{[r("stroke")]:e.color},..."size"in e&&Hu(e.size)&&{[r("width")]:e.size,[r("height")]:e.size},..."width"in e&&Hu(e.width)&&{[r("width")]:e.width},..."height"in e&&Hu(e.height)&&{[r("height")]:e.height},[r("stroke-width")]:f,...h&&{[r("class")]:h},[r("viewBox")]:`0 0 ${i} ${s}`,...e.hasA11yProp===!1?{[r("aria-hidden")]:"true"}:{},..."attributes"in e&&e.attributes},n.node.map(S=>{const[P,I,L]=S,U=e.nonScalingStroke?{[r("vector-effect")]:"non-scaling-stroke",...I}:I;return L?[P,U,L]:[P,U]})]}/**
 * @file
 * @license @lucide/svelte v1.69.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Lw=n=>{for(const e in n)if(e.startsWith("aria-")||e==="role"||e==="title")return!0;return!1};/**
 * @file
 * @license @lucide/svelte v1.69.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Fw=Symbol("lucide-context"),Uw=()=>vE(Fw);var $w=new Set(["$$slots","$$events","$$legacy","color","size","width","height","strokeWidth","absoluteStrokeWidth","nonScalingStroke","iconNode","icon","class","children"]),qw=tw("<svg><!><!></svg>");function Ct(n,e){id(e,!0);const t=Uw()??{},r=mi(e,"color",19,()=>t.color??"currentColor"),i=mi(e,"size",19,()=>t.size??24),s=mi(e,"width",19,i),a=mi(e,"height",19,i),l=mi(e,"strokeWidth",19,()=>t.strokeWidth??2),c=mi(e,"absoluteStrokeWidth",19,()=>t.absoluteStrokeWidth??!1),h=mi(e,"nonScalingStroke",19,()=>t.nonScalingStroke??!1),f=mi(e,"iconNode",19,()=>[]),g=mi(e,"icon",19,()=>({node:f(),aliases:[],size:24})),_=Tt(e,$w),E=rr(()=>!!e.children||Lw(_)),S=rr(()=>xw(g(),{color:r(),width:s(),height:a(),strokeWidth:l(),absoluteStrokeWidth:c(),nonScalingStroke:h(),className:bh("lucide-icon",t.class),hasA11yProp:p(E),attributes:_})),P=rr(()=>mf(p(S),3)),I=rr(()=>p(P)[1]),L=rr(()=>zy(p(P)[2],()=>[],!0)),U=rr(()=>({...p(I),class:[...p(I).class.split(" "),e.class]}));var q=qw();Cf(q,()=>({...p(U)}));var Y=R(q);zi(Y,17,()=>p(L),pw,(Q,A)=>{var v=rr(()=>mf(p(A),2));let w=()=>p(v)[0],b=()=>p(v)[1];var C=rw(),k=Ia(C);yw(k,w,!0,(T,ee)=>{Cf(T,()=>({...b()}))}),H(Q,C)});var Me=y(Y);vw(Me,()=>e.children??td),H(n,q),sd()}const $g={name:"arrow-down-left",size:24,node:[["path",{d:"M17 7 7 17"}],["path",{d:"M17 17H7V7"}]]};$g.node;var Bw=new Set(["$$slots","$$events","$$legacy"]);function jl(n,e){let t=Tt(e,Bw);Ct(n,Rt(()=>t,{get icon(){return $g}}))}const qg={name:"arrow-left",size:24,node:[["path",{d:"m12 19-7-7 7-7"}],["path",{d:"M19 12H5"}]]};qg.node;var zw=new Set(["$$slots","$$events","$$legacy"]);function kf(n,e){let t=Tt(e,zw);Ct(n,Rt(()=>t,{get icon(){return qg}}))}const Bg={name:"arrow-right",size:24,node:[["path",{d:"M5 12h14"}],["path",{d:"m12 5 7 7-7 7"}]]};Bg.node;var jw=new Set(["$$slots","$$events","$$legacy"]);function Hl(n,e){let t=Tt(e,jw);Ct(n,Rt(()=>t,{get icon(){return Bg}}))}const zg={name:"boxes",size:24,node:[["path",{d:"M2.97 12.92A2 2 0 0 0 2 14.63v3.24a2 2 0 0 0 .97 1.71l3 1.8a2 2 0 0 0 2.06 0L12 19v-5.5l-5-3-4.03 2.42Z"}],["path",{d:"m7 16.5-4.74-2.85"}],["path",{d:"m7 16.5 5-3"}],["path",{d:"M7 16.5v5.17"}],["path",{d:"M12 13.5V19l3.97 2.38a2 2 0 0 0 2.06 0l3-1.8a2 2 0 0 0 .97-1.71v-3.24a2 2 0 0 0-.97-1.71L17 10.5l-5 3Z"}],["path",{d:"m17 16.5-5-3"}],["path",{d:"m17 16.5 4.74-2.85"}],["path",{d:"M17 16.5v5.17"}],["path",{d:"M7.97 4.42A2 2 0 0 0 7 6.13v4.37l5 3 5-3V6.13a2 2 0 0 0-.97-1.71l-3-1.8a2 2 0 0 0-2.06 0l-3 1.8Z"}],["path",{d:"M12 8 7.26 5.15"}],["path",{d:"m12 8 4.74-2.85"}],["path",{d:"M12 13.5V8"}]]};zg.node;var Hw=new Set(["$$slots","$$events","$$legacy"]);function co(n,e){let t=Tt(e,Hw);Ct(n,Rt(()=>t,{get icon(){return zg}}))}const jg={name:"check",size:24,node:[["path",{d:"M20 6 9 17l-5-5"}]]};jg.node;var Ww=new Set(["$$slots","$$events","$$legacy"]);function _a(n,e){let t=Tt(e,Ww);Ct(n,Rt(()=>t,{get icon(){return jg}}))}const Hg={name:"chevron-down",size:24,node:[["path",{d:"m6 9 6 6 6-6"}]]};Hg.node;var Gw=new Set(["$$slots","$$events","$$legacy"]);function Wu(n,e){let t=Tt(e,Gw);Ct(n,Rt(()=>t,{get icon(){return Hg}}))}const Wg={name:"circle-exclamation-point",size:24,node:[["circle",{cx:"12",cy:"12",r:"10"}],["line",{x1:"12",x2:"12",y1:"8",y2:"12"}],["line",{x1:"12",x2:"12.01",y1:"16",y2:"16"}]],aliases:["alert-circle","circle-alert"]};Wg.node;var Kw=new Set(["$$slots","$$events","$$legacy"]);function Gu(n,e){let t=Tt(e,Kw);Ct(n,Rt(()=>t,{get icon(){return Wg}}))}const Gg={name:"clipboard-list",size:24,node:[["rect",{width:"8",height:"4",x:"8",y:"2",rx:"1",ry:"1"}],["path",{d:"M16 4h2a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2V6a2 2 0 0 1 2-2h2"}],["path",{d:"M12 11h4"}],["path",{d:"M12 16h4"}],["path",{d:"M8 11h.01"}],["path",{d:"M8 16h.01"}]]};Gg.node;var Qw=new Set(["$$slots","$$events","$$legacy"]);function Nf(n,e){let t=Tt(e,Qw);Ct(n,Rt(()=>t,{get icon(){return Gg}}))}const Kg={name:"lock-keyhole",size:24,node:[["circle",{cx:"12",cy:"16",r:"1"}],["rect",{x:"3",y:"10",width:"18",height:"12",rx:"2"}],["path",{d:"M7 10V7a5 5 0 0 1 10 0v3"}]]};Kg.node;var Yw=new Set(["$$slots","$$events","$$legacy"]);function Ku(n,e){let t=Tt(e,Yw);Ct(n,Rt(()=>t,{get icon(){return Kg}}))}const Qg={name:"log-out",size:24,node:[["path",{d:"m16 17 5-5-5-5"}],["path",{d:"M21 12H9"}],["path",{d:"M9 21H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h4"}]]};Qg.node;var Jw=new Set(["$$slots","$$events","$$legacy"]);function Qu(n,e){let t=Tt(e,Jw);Ct(n,Rt(()=>t,{get icon(){return Qg}}))}const Yg={name:"minus",size:24,node:[["path",{d:"M5 12h14"}]]};Yg.node;var Xw=new Set(["$$slots","$$events","$$legacy"]);function Df(n,e){let t=Tt(e,Xw);Ct(n,Rt(()=>t,{get icon(){return Yg}}))}const Jg={name:"package-plus",size:24,node:[["path",{d:"M12 22V12"}],["path",{d:"M16 17h6"}],["path",{d:"M19 14v6"}],["path",{d:"M21 10.535V8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.729l7 4a2 2 0 0 0 2 .001l1.675-.955"}],["path",{d:"M3.29 7 12 12l8.71-5"}],["path",{d:"m7.5 4.27 8.997 5.148"}]]};Jg.node;var Zw=new Set(["$$slots","$$events","$$legacy"]);function Yu(n,e){let t=Tt(e,Zw);Ct(n,Rt(()=>t,{get icon(){return Jg}}))}const Xg={name:"plus",size:24,node:[["path",{d:"M5 12h14"}],["path",{d:"M12 5v14"}]]};Xg.node;var eT=new Set(["$$slots","$$events","$$legacy"]);function va(n,e){let t=Tt(e,eT);Ct(n,Rt(()=>t,{get icon(){return Xg}}))}const Zg={name:"search",size:24,node:[["path",{d:"m21 21-4.34-4.34"}],["circle",{cx:"11",cy:"11",r:"8"}]]};Zg.node;var tT=new Set(["$$slots","$$events","$$legacy"]);function Wl(n,e){let t=Tt(e,tT);Ct(n,Rt(()=>t,{get icon(){return Zg}}))}const e_={name:"settings-2",size:24,node:[["path",{d:"M14 17H5"}],["path",{d:"M19 7h-9"}],["circle",{cx:"17",cy:"17",r:"3"}],["circle",{cx:"7",cy:"7",r:"3"}]]};e_.node;var nT=new Set(["$$slots","$$events","$$legacy"]);function Gl(n,e){let t=Tt(e,nT);Ct(n,Rt(()=>t,{get icon(){return e_}}))}const t_={name:"shield-check",size:24,node:[["path",{d:"M20 13c0 5-3.5 7.5-7.66 8.95a1 1 0 0 1-.67-.01C7.5 20.5 4 18 4 13V6a1 1 0 0 1 1-1c2 0 4.5-1.2 6.24-2.72a1.17 1.17 0 0 1 1.52 0C14.51 3.81 17 5 19 5a1 1 0 0 1 1 1z"}],["path",{d:"m9 12 2 2 4-4"}]]};t_.node;var rT=new Set(["$$slots","$$events","$$legacy"]);function iT(n,e){let t=Tt(e,rT);Ct(n,Rt(()=>t,{get icon(){return t_}}))}const n_={name:"trash",size:24,node:[["path",{d:"M10 11v6"}],["path",{d:"M14 11v6"}],["path",{d:"M19 6v14a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2V6"}],["path",{d:"M3 6h18"}],["path",{d:"M8 6V4a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v2"}]],aliases:["trash-2"]};n_.node;var sT=new Set(["$$slots","$$events","$$legacy"]);function Of(n,e){let t=Tt(e,sT);Ct(n,Rt(()=>t,{get icon(){return n_}}))}const r_={name:"upload",size:24,node:[["path",{d:"M12 3v12"}],["path",{d:"m17 8-5-5-5 5"}],["path",{d:"M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"}]]};r_.node;var oT=new Set(["$$slots","$$events","$$legacy"]);function aT(n,e){let t=Tt(e,oT);Ct(n,Rt(()=>t,{get icon(){return r_}}))}const i_={name:"user-round",size:24,node:[["circle",{cx:"12",cy:"8",r:"5"}],["path",{d:"M20 21a8 8 0 0 0-16 0"}]],aliases:["user-2"]};i_.node;var lT=new Set(["$$slots","$$events","$$legacy"]);function cT(n,e){let t=Tt(e,lT);Ct(n,Rt(()=>t,{get icon(){return i_}}))}const s_={name:"users",size:24,node:[["path",{d:"M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2"}],["path",{d:"M16 3.128a4 4 0 0 1 0 7.744"}],["path",{d:"M22 21v-2a4 4 0 0 0-3-3.87"}],["circle",{cx:"9",cy:"7",r:"4"}]]};s_.node;var uT=new Set(["$$slots","$$events","$$legacy"]);function hT(n,e){let t=Tt(e,uT);Ct(n,Rt(()=>t,{get icon(){return s_}}))}const o_={name:"warehouse",size:24,node:[["path",{d:"M18 21V10a1 1 0 0 0-1-1H7a1 1 0 0 0-1 1v11"}],["path",{d:"M22 19a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V8a2 2 0 0 1 1.132-1.803l7.95-3.974a2 2 0 0 1 1.837 0l7.948 3.974A2 2 0 0 1 22 8z"}],["path",{d:"M6 13h12"}],["path",{d:"M6 17h12"}]]};o_.node;var dT=new Set(["$$slots","$$events","$$legacy"]);function uo(n,e){let t=Tt(e,dT);Ct(n,Rt(()=>t,{get icon(){return o_}}))}const a_={name:"wrench",size:24,node:[["path",{d:"M14.7 6.3a1 1 0 0 0 0 1.4l1.6 1.6a1 1 0 0 0 1.4 0l3.106-3.105c.32-.322.863-.22.983.218a6 6 0 0 1-8.259 7.057l-7.91 7.91a1 1 0 0 1-2.999-3l7.91-7.91a6 6 0 0 1 7.057-8.259c.438.12.54.662.219.984z"}]]};a_.node;var fT=new Set(["$$slots","$$events","$$legacy"]);function pT(n,e){let t=Tt(e,fT);Ct(n,Rt(()=>t,{get icon(){return a_}}))}const l_={name:"x",size:24,node:[["path",{d:"M18 6 6 18"}],["path",{d:"m6 6 12 12"}]]};l_.node;var mT=new Set(["$$slots","$$events","$$legacy"]);function Rs(n,e){let t=Tt(e,mT);Ct(n,Rt(()=>t,{get icon(){return l_}}))}const gT=()=>{};var Vf={};/**
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
 */const c_=function(n){const e=[];let t=0;for(let r=0;r<n.length;r++){let i=n.charCodeAt(r);i<128?e[t++]=i:i<2048?(e[t++]=i>>6|192,e[t++]=i&63|128):(i&64512)===55296&&r+1<n.length&&(n.charCodeAt(r+1)&64512)===56320?(i=65536+((i&1023)<<10)+(n.charCodeAt(++r)&1023),e[t++]=i>>18|240,e[t++]=i>>12&63|128,e[t++]=i>>6&63|128,e[t++]=i&63|128):(e[t++]=i>>12|224,e[t++]=i>>6&63|128,e[t++]=i&63|128)}return e},_T=function(n){const e=[];let t=0,r=0;for(;t<n.length;){const i=n[t++];if(i<128)e[r++]=String.fromCharCode(i);else if(i>191&&i<224){const s=n[t++];e[r++]=String.fromCharCode((i&31)<<6|s&63)}else if(i>239&&i<365){const s=n[t++],a=n[t++],l=n[t++],c=((i&7)<<18|(s&63)<<12|(a&63)<<6|l&63)-65536;e[r++]=String.fromCharCode(55296+(c>>10)),e[r++]=String.fromCharCode(56320+(c&1023))}else{const s=n[t++],a=n[t++];e[r++]=String.fromCharCode((i&15)<<12|(s&63)<<6|a&63)}}return e.join("")},gd={byteToCharMap_:null,charToByteMap_:null,byteToCharMapWebSafe_:null,charToByteMapWebSafe_:null,ENCODED_VALS_BASE:"ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",get ENCODED_VALS(){return this.ENCODED_VALS_BASE+"+/="},get ENCODED_VALS_WEBSAFE(){return this.ENCODED_VALS_BASE+"-_."},HAS_NATIVE_SUPPORT:typeof atob=="function",encodeByteArray(n,e){if(!Array.isArray(n))throw Error("encodeByteArray takes an array as a parameter");this.init_();const t=e?this.byteToCharMapWebSafe_:this.byteToCharMap_,r=[];for(let i=0;i<n.length;i+=3){const s=n[i],a=i+1<n.length,l=a?n[i+1]:0,c=i+2<n.length,h=c?n[i+2]:0,f=s>>2,g=(s&3)<<4|l>>4;let _=(l&15)<<2|h>>6,E=h&63;c||(E=64,a||(_=64)),r.push(t[f],t[g],t[_],t[E])}return r.join("")},encodeString(n,e){return this.HAS_NATIVE_SUPPORT&&!e?btoa(n):this.encodeByteArray(c_(n),e)},decodeString(n,e){return this.HAS_NATIVE_SUPPORT&&!e?atob(n):_T(this.decodeStringToByteArray(n,e))},decodeStringToByteArray(n,e){this.init_();const t=e?this.charToByteMapWebSafe_:this.charToByteMap_,r=[];for(let i=0;i<n.length;){const s=t[n.charAt(i++)],l=i<n.length?t[n.charAt(i)]:0;++i;const h=i<n.length?t[n.charAt(i)]:64;++i;const g=i<n.length?t[n.charAt(i)]:64;if(++i,s==null||l==null||h==null||g==null)throw new vT;const _=s<<2|l>>4;if(r.push(_),h!==64){const E=l<<4&240|h>>2;if(r.push(E),g!==64){const S=h<<6&192|g;r.push(S)}}}return r},init_(){if(!this.byteToCharMap_){this.byteToCharMap_={},this.charToByteMap_={},this.byteToCharMapWebSafe_={},this.charToByteMapWebSafe_={};for(let n=0;n<this.ENCODED_VALS.length;n++)this.byteToCharMap_[n]=this.ENCODED_VALS.charAt(n),this.charToByteMap_[this.byteToCharMap_[n]]=n,this.byteToCharMapWebSafe_[n]=this.ENCODED_VALS_WEBSAFE.charAt(n),this.charToByteMapWebSafe_[this.byteToCharMapWebSafe_[n]]=n,n>=this.ENCODED_VALS_BASE.length&&(this.charToByteMap_[this.ENCODED_VALS_WEBSAFE.charAt(n)]=n,this.charToByteMapWebSafe_[this.ENCODED_VALS.charAt(n)]=n)}}};class vT extends Error{constructor(){super(...arguments),this.name="DecodeBase64StringError"}}const yT=function(n){const e=c_(n);return gd.encodeByteArray(e,!0)},u_=function(n){return yT(n).replace(/\./g,"")},h_=function(n){try{return gd.decodeString(n,!0)}catch(e){console.error("base64Decode failed: ",e)}return null};/**
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
 */function ET(){if(typeof self<"u")return self;if(typeof window<"u")return window;if(typeof global<"u")return global;throw new Error("Unable to locate global object.")}/**
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
 */const wT=()=>ET().__FIREBASE_DEFAULTS__,TT=()=>{if(typeof process>"u"||typeof Vf>"u")return;const n=Vf.__FIREBASE_DEFAULTS__;if(n)return JSON.parse(n)},IT=()=>{if(typeof document>"u")return;let n;try{n=document.cookie.match(/__FIREBASE_DEFAULTS__=([^;]+)/)}catch{return}const e=n&&h_(n[1]);return e&&JSON.parse(e)},tu=()=>{try{return gT()||wT()||TT()||IT()}catch(n){console.info(`Unable to get __FIREBASE_DEFAULTS__ due to: ${n}`);return}},AT=n=>{var e,t;return(t=(e=tu())===null||e===void 0?void 0:e.emulatorHosts)===null||t===void 0?void 0:t[n]},d_=()=>{var n;return(n=tu())===null||n===void 0?void 0:n.config},f_=n=>{var e;return(e=tu())===null||e===void 0?void 0:e[`_${n}`]};/**
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
 */class Sh{constructor(){this.reject=()=>{},this.resolve=()=>{},this.promise=new Promise((e,t)=>{this.resolve=e,this.reject=t})}wrapCallback(e){return(t,r)=>{t?this.reject(t):this.resolve(r),typeof e=="function"&&(this.promise.catch(()=>{}),e.length===1?e(t):e(t,r))}}}/**
 * @license
 * Copyright 2025 Google LLC
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
 */function Xo(n){try{return(n.startsWith("http://")||n.startsWith("https://")?new URL(n).hostname:n).endsWith(".cloudworkstations.dev")}catch{return!1}}async function p_(n){return(await fetch(n,{credentials:"include"})).ok}const xa={};function bT(){const n={prod:[],emulator:[]};for(const e of Object.keys(xa))xa[e]?n.emulator.push(e):n.prod.push(e);return n}function ST(n){let e=document.getElementById(n),t=!1;return e||(e=document.createElement("div"),e.setAttribute("id",n),t=!0),{created:t,element:e}}let Mf=!1;function RT(n,e){if(typeof window>"u"||typeof document>"u"||!Xo(window.location.host)||xa[n]===e||xa[n]||Mf)return;xa[n]=e;function t(_){return`__firebase__banner__${_}`}const r="__firebase__banner",s=bT().prod.length>0;function a(){const _=document.getElementById(r);_&&_.remove()}function l(_){_.style.display="flex",_.style.background="#7faaf0",_.style.position="fixed",_.style.bottom="5px",_.style.left="5px",_.style.padding=".5em",_.style.borderRadius="5px",_.style.alignItems="center"}function c(_,E){_.setAttribute("width","24"),_.setAttribute("id",E),_.setAttribute("height","24"),_.setAttribute("viewBox","0 0 24 24"),_.setAttribute("fill","none"),_.style.marginLeft="-6px"}function h(){const _=document.createElement("span");return _.style.cursor="pointer",_.style.marginLeft="16px",_.style.fontSize="24px",_.innerHTML=" &times;",_.onclick=()=>{Mf=!0,a()},_}function f(_,E){_.setAttribute("id",E),_.innerText="Learn more",_.href="https://firebase.google.com/docs/studio/preview-apps#preview-backend",_.setAttribute("target","__blank"),_.style.paddingLeft="5px",_.style.textDecoration="underline"}function g(){const _=ST(r),E=t("text"),S=document.getElementById(E)||document.createElement("span"),P=t("learnmore"),I=document.getElementById(P)||document.createElement("a"),L=t("preprendIcon"),U=document.getElementById(L)||document.createElementNS("http://www.w3.org/2000/svg","svg");if(_.created){const q=_.element;l(q),f(I,P);const Y=h();c(U,L),q.append(U,S,I,Y),document.body.appendChild(q)}s?(S.innerText="Preview backend disconnected.",U.innerHTML=`<g clip-path="url(#clip0_6013_33858)">
<path d="M4.8 17.6L12 5.6L19.2 17.6H4.8ZM6.91667 16.4H17.0833L12 7.93333L6.91667 16.4ZM12 15.6C12.1667 15.6 12.3056 15.5444 12.4167 15.4333C12.5389 15.3111 12.6 15.1667 12.6 15C12.6 14.8333 12.5389 14.6944 12.4167 14.5833C12.3056 14.4611 12.1667 14.4 12 14.4C11.8333 14.4 11.6889 14.4611 11.5667 14.5833C11.4556 14.6944 11.4 14.8333 11.4 15C11.4 15.1667 11.4556 15.3111 11.5667 15.4333C11.6889 15.5444 11.8333 15.6 12 15.6ZM11.4 13.6H12.6V10.4H11.4V13.6Z" fill="#212121"/>
</g>
<defs>
<clipPath id="clip0_6013_33858">
<rect width="24" height="24" fill="white"/>
</clipPath>
</defs>`):(U.innerHTML=`<g clip-path="url(#clip0_6083_34804)">
<path d="M11.4 15.2H12.6V11.2H11.4V15.2ZM12 10C12.1667 10 12.3056 9.94444 12.4167 9.83333C12.5389 9.71111 12.6 9.56667 12.6 9.4C12.6 9.23333 12.5389 9.09444 12.4167 8.98333C12.3056 8.86111 12.1667 8.8 12 8.8C11.8333 8.8 11.6889 8.86111 11.5667 8.98333C11.4556 9.09444 11.4 9.23333 11.4 9.4C11.4 9.56667 11.4556 9.71111 11.5667 9.83333C11.6889 9.94444 11.8333 10 12 10ZM12 18.4C11.1222 18.4 10.2944 18.2333 9.51667 17.9C8.73889 17.5667 8.05556 17.1111 7.46667 16.5333C6.88889 15.9444 6.43333 15.2611 6.1 14.4833C5.76667 13.7056 5.6 12.8778 5.6 12C5.6 11.1111 5.76667 10.2833 6.1 9.51667C6.43333 8.73889 6.88889 8.06111 7.46667 7.48333C8.05556 6.89444 8.73889 6.43333 9.51667 6.1C10.2944 5.76667 11.1222 5.6 12 5.6C12.8889 5.6 13.7167 5.76667 14.4833 6.1C15.2611 6.43333 15.9389 6.89444 16.5167 7.48333C17.1056 8.06111 17.5667 8.73889 17.9 9.51667C18.2333 10.2833 18.4 11.1111 18.4 12C18.4 12.8778 18.2333 13.7056 17.9 14.4833C17.5667 15.2611 17.1056 15.9444 16.5167 16.5333C15.9389 17.1111 15.2611 17.5667 14.4833 17.9C13.7167 18.2333 12.8889 18.4 12 18.4ZM12 17.2C13.4444 17.2 14.6722 16.6944 15.6833 15.6833C16.6944 14.6722 17.2 13.4444 17.2 12C17.2 10.5556 16.6944 9.32778 15.6833 8.31667C14.6722 7.30555 13.4444 6.8 12 6.8C10.5556 6.8 9.32778 7.30555 8.31667 8.31667C7.30556 9.32778 6.8 10.5556 6.8 12C6.8 13.4444 7.30556 14.6722 8.31667 15.6833C9.32778 16.6944 10.5556 17.2 12 17.2Z" fill="#212121"/>
</g>
<defs>
<clipPath id="clip0_6083_34804">
<rect width="24" height="24" fill="white"/>
</clipPath>
</defs>`,S.innerText="Preview backend running in this workspace."),S.setAttribute("id",E)}document.readyState==="loading"?window.addEventListener("DOMContentLoaded",g):g()}/**
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
 */function Dn(){return typeof navigator<"u"&&typeof navigator.userAgent=="string"?navigator.userAgent:""}function CT(){return typeof window<"u"&&!!(window.cordova||window.phonegap||window.PhoneGap)&&/ios|iphone|ipod|ipad|android|blackberry|iemobile/i.test(Dn())}function PT(){var n;const e=(n=tu())===null||n===void 0?void 0:n.forceEnvironment;if(e==="node")return!0;if(e==="browser")return!1;try{return Object.prototype.toString.call(global.process)==="[object process]"}catch{return!1}}function kT(){return typeof navigator<"u"&&navigator.userAgent==="Cloudflare-Workers"}function NT(){const n=typeof chrome=="object"?chrome.runtime:typeof browser=="object"?browser.runtime:void 0;return typeof n=="object"&&n.id!==void 0}function DT(){return typeof navigator=="object"&&navigator.product==="ReactNative"}function OT(){const n=Dn();return n.indexOf("MSIE ")>=0||n.indexOf("Trident/")>=0}function VT(){return!PT()&&!!navigator.userAgent&&navigator.userAgent.includes("Safari")&&!navigator.userAgent.includes("Chrome")}function m_(){try{return typeof indexedDB=="object"}catch{return!1}}function MT(){return new Promise((n,e)=>{try{let t=!0;const r="validate-browser-context-for-indexeddb-analytics-module",i=self.indexedDB.open(r);i.onsuccess=()=>{i.result.close(),t||self.indexedDB.deleteDatabase(r),n(!0)},i.onupgradeneeded=()=>{t=!1},i.onerror=()=>{var s;e(((s=i.error)===null||s===void 0?void 0:s.message)||"")}}catch(t){e(t)}})}/**
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
 */const xT="FirebaseError";class ki extends Error{constructor(e,t,r){super(t),this.code=e,this.customData=r,this.name=xT,Object.setPrototypeOf(this,ki.prototype),Error.captureStackTrace&&Error.captureStackTrace(this,Zo.prototype.create)}}class Zo{constructor(e,t,r){this.service=e,this.serviceName=t,this.errors=r}create(e,...t){const r=t[0]||{},i=`${this.service}/${e}`,s=this.errors[e],a=s?LT(s,r):"Error",l=`${this.serviceName}: ${a} (${i}).`;return new ki(i,l,r)}}function LT(n,e){return n.replace(FT,(t,r)=>{const i=e[r];return i!=null?String(i):`<${r}?>`})}const FT=/\{\$([^}]+)}/g;function UT(n){for(const e in n)if(Object.prototype.hasOwnProperty.call(n,e))return!1;return!0}function Hs(n,e){if(n===e)return!0;const t=Object.keys(n),r=Object.keys(e);for(const i of t){if(!r.includes(i))return!1;const s=n[i],a=e[i];if(xf(s)&&xf(a)){if(!Hs(s,a))return!1}else if(s!==a)return!1}for(const i of r)if(!t.includes(i))return!1;return!0}function xf(n){return n!==null&&typeof n=="object"}/**
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
 */function fl(n){const e=[];for(const[t,r]of Object.entries(n))Array.isArray(r)?r.forEach(i=>{e.push(encodeURIComponent(t)+"="+encodeURIComponent(i))}):e.push(encodeURIComponent(t)+"="+encodeURIComponent(r));return e.length?"&"+e.join("&"):""}function Sa(n){const e={};return n.replace(/^\?/,"").split("&").forEach(r=>{if(r){const[i,s]=r.split("=");e[decodeURIComponent(i)]=decodeURIComponent(s)}}),e}function Ra(n){const e=n.indexOf("?");if(!e)return"";const t=n.indexOf("#",e);return n.substring(e,t>0?t:void 0)}function $T(n,e){const t=new qT(n,e);return t.subscribe.bind(t)}class qT{constructor(e,t){this.observers=[],this.unsubscribes=[],this.observerCount=0,this.task=Promise.resolve(),this.finalized=!1,this.onNoObservers=t,this.task.then(()=>{e(this)}).catch(r=>{this.error(r)})}next(e){this.forEachObserver(t=>{t.next(e)})}error(e){this.forEachObserver(t=>{t.error(e)}),this.close(e)}complete(){this.forEachObserver(e=>{e.complete()}),this.close()}subscribe(e,t,r){let i;if(e===void 0&&t===void 0&&r===void 0)throw new Error("Missing Observer.");BT(e,["next","error","complete"])?i=e:i={next:e,error:t,complete:r},i.next===void 0&&(i.next=Ju),i.error===void 0&&(i.error=Ju),i.complete===void 0&&(i.complete=Ju);const s=this.unsubscribeOne.bind(this,this.observers.length);return this.finalized&&this.task.then(()=>{try{this.finalError?i.error(this.finalError):i.complete()}catch{}}),this.observers.push(i),s}unsubscribeOne(e){this.observers===void 0||this.observers[e]===void 0||(delete this.observers[e],this.observerCount-=1,this.observerCount===0&&this.onNoObservers!==void 0&&this.onNoObservers(this))}forEachObserver(e){if(!this.finalized)for(let t=0;t<this.observers.length;t++)this.sendOne(t,e)}sendOne(e,t){this.task.then(()=>{if(this.observers!==void 0&&this.observers[e]!==void 0)try{t(this.observers[e])}catch(r){typeof console<"u"&&console.error&&console.error(r)}})}close(e){this.finalized||(this.finalized=!0,e!==void 0&&(this.finalError=e),this.task.then(()=>{this.observers=void 0,this.onNoObservers=void 0}))}}function BT(n,e){if(typeof n!="object"||n===null)return!1;for(const t of e)if(t in n&&typeof n[t]=="function")return!0;return!1}function Ju(){}/**
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
 */function $t(n){return n&&n._delegate?n._delegate:n}class Si{constructor(e,t,r){this.name=e,this.instanceFactory=t,this.type=r,this.multipleInstances=!1,this.serviceProps={},this.instantiationMode="LAZY",this.onInstanceCreated=null}setInstantiationMode(e){return this.instantiationMode=e,this}setMultipleInstances(e){return this.multipleInstances=e,this}setServiceProps(e){return this.serviceProps=e,this}setInstanceCreatedCallback(e){return this.onInstanceCreated=e,this}}/**
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
 */const Cs="[DEFAULT]";/**
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
 */class zT{constructor(e,t){this.name=e,this.container=t,this.component=null,this.instances=new Map,this.instancesDeferred=new Map,this.instancesOptions=new Map,this.onInitCallbacks=new Map}get(e){const t=this.normalizeInstanceIdentifier(e);if(!this.instancesDeferred.has(t)){const r=new Sh;if(this.instancesDeferred.set(t,r),this.isInitialized(t)||this.shouldAutoInitialize())try{const i=this.getOrInitializeService({instanceIdentifier:t});i&&r.resolve(i)}catch{}}return this.instancesDeferred.get(t).promise}getImmediate(e){var t;const r=this.normalizeInstanceIdentifier(e==null?void 0:e.identifier),i=(t=e==null?void 0:e.optional)!==null&&t!==void 0?t:!1;if(this.isInitialized(r)||this.shouldAutoInitialize())try{return this.getOrInitializeService({instanceIdentifier:r})}catch(s){if(i)return null;throw s}else{if(i)return null;throw Error(`Service ${this.name} is not available`)}}getComponent(){return this.component}setComponent(e){if(e.name!==this.name)throw Error(`Mismatching Component ${e.name} for Provider ${this.name}.`);if(this.component)throw Error(`Component for ${this.name} has already been provided`);if(this.component=e,!!this.shouldAutoInitialize()){if(HT(e))try{this.getOrInitializeService({instanceIdentifier:Cs})}catch{}for(const[t,r]of this.instancesDeferred.entries()){const i=this.normalizeInstanceIdentifier(t);try{const s=this.getOrInitializeService({instanceIdentifier:i});r.resolve(s)}catch{}}}}clearInstance(e=Cs){this.instancesDeferred.delete(e),this.instancesOptions.delete(e),this.instances.delete(e)}async delete(){const e=Array.from(this.instances.values());await Promise.all([...e.filter(t=>"INTERNAL"in t).map(t=>t.INTERNAL.delete()),...e.filter(t=>"_delete"in t).map(t=>t._delete())])}isComponentSet(){return this.component!=null}isInitialized(e=Cs){return this.instances.has(e)}getOptions(e=Cs){return this.instancesOptions.get(e)||{}}initialize(e={}){const{options:t={}}=e,r=this.normalizeInstanceIdentifier(e.instanceIdentifier);if(this.isInitialized(r))throw Error(`${this.name}(${r}) has already been initialized`);if(!this.isComponentSet())throw Error(`Component ${this.name} has not been registered yet`);const i=this.getOrInitializeService({instanceIdentifier:r,options:t});for(const[s,a]of this.instancesDeferred.entries()){const l=this.normalizeInstanceIdentifier(s);r===l&&a.resolve(i)}return i}onInit(e,t){var r;const i=this.normalizeInstanceIdentifier(t),s=(r=this.onInitCallbacks.get(i))!==null&&r!==void 0?r:new Set;s.add(e),this.onInitCallbacks.set(i,s);const a=this.instances.get(i);return a&&e(a,i),()=>{s.delete(e)}}invokeOnInitCallbacks(e,t){const r=this.onInitCallbacks.get(t);if(r)for(const i of r)try{i(e,t)}catch{}}getOrInitializeService({instanceIdentifier:e,options:t={}}){let r=this.instances.get(e);if(!r&&this.component&&(r=this.component.instanceFactory(this.container,{instanceIdentifier:jT(e),options:t}),this.instances.set(e,r),this.instancesOptions.set(e,t),this.invokeOnInitCallbacks(r,e),this.component.onInstanceCreated))try{this.component.onInstanceCreated(this.container,e,r)}catch{}return r||null}normalizeInstanceIdentifier(e=Cs){return this.component?this.component.multipleInstances?e:Cs:e}shouldAutoInitialize(){return!!this.component&&this.component.instantiationMode!=="EXPLICIT"}}function jT(n){return n===Cs?void 0:n}function HT(n){return n.instantiationMode==="EAGER"}/**
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
 */class WT{constructor(e){this.name=e,this.providers=new Map}addComponent(e){const t=this.getProvider(e.name);if(t.isComponentSet())throw new Error(`Component ${e.name} has already been registered with ${this.name}`);t.setComponent(e)}addOrOverwriteComponent(e){this.getProvider(e.name).isComponentSet()&&this.providers.delete(e.name),this.addComponent(e)}getProvider(e){if(this.providers.has(e))return this.providers.get(e);const t=new zT(e,this);return this.providers.set(e,t),t}getProviders(){return Array.from(this.providers.values())}}/**
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
 */var Oe;(function(n){n[n.DEBUG=0]="DEBUG",n[n.VERBOSE=1]="VERBOSE",n[n.INFO=2]="INFO",n[n.WARN=3]="WARN",n[n.ERROR=4]="ERROR",n[n.SILENT=5]="SILENT"})(Oe||(Oe={}));const GT={debug:Oe.DEBUG,verbose:Oe.VERBOSE,info:Oe.INFO,warn:Oe.WARN,error:Oe.ERROR,silent:Oe.SILENT},KT=Oe.INFO,QT={[Oe.DEBUG]:"log",[Oe.VERBOSE]:"log",[Oe.INFO]:"info",[Oe.WARN]:"warn",[Oe.ERROR]:"error"},YT=(n,e,...t)=>{if(e<n.logLevel)return;const r=new Date().toISOString(),i=QT[e];if(i)console[i](`[${r}]  ${n.name}:`,...t);else throw new Error(`Attempted to log a message with an invalid logType (value: ${e})`)};class nu{constructor(e){this.name=e,this._logLevel=KT,this._logHandler=YT,this._userLogHandler=null}get logLevel(){return this._logLevel}set logLevel(e){if(!(e in Oe))throw new TypeError(`Invalid value "${e}" assigned to \`logLevel\``);this._logLevel=e}setLogLevel(e){this._logLevel=typeof e=="string"?GT[e]:e}get logHandler(){return this._logHandler}set logHandler(e){if(typeof e!="function")throw new TypeError("Value assigned to `logHandler` must be a function");this._logHandler=e}get userLogHandler(){return this._userLogHandler}set userLogHandler(e){this._userLogHandler=e}debug(...e){this._userLogHandler&&this._userLogHandler(this,Oe.DEBUG,...e),this._logHandler(this,Oe.DEBUG,...e)}log(...e){this._userLogHandler&&this._userLogHandler(this,Oe.VERBOSE,...e),this._logHandler(this,Oe.VERBOSE,...e)}info(...e){this._userLogHandler&&this._userLogHandler(this,Oe.INFO,...e),this._logHandler(this,Oe.INFO,...e)}warn(...e){this._userLogHandler&&this._userLogHandler(this,Oe.WARN,...e),this._logHandler(this,Oe.WARN,...e)}error(...e){this._userLogHandler&&this._userLogHandler(this,Oe.ERROR,...e),this._logHandler(this,Oe.ERROR,...e)}}const JT=(n,e)=>e.some(t=>n instanceof t);let Lf,Ff;function XT(){return Lf||(Lf=[IDBDatabase,IDBObjectStore,IDBIndex,IDBCursor,IDBTransaction])}function ZT(){return Ff||(Ff=[IDBCursor.prototype.advance,IDBCursor.prototype.continue,IDBCursor.prototype.continuePrimaryKey])}const g_=new WeakMap,Rh=new WeakMap,__=new WeakMap,Xu=new WeakMap,_d=new WeakMap;function eI(n){const e=new Promise((t,r)=>{const i=()=>{n.removeEventListener("success",s),n.removeEventListener("error",a)},s=()=>{t(Zi(n.result)),i()},a=()=>{r(n.error),i()};n.addEventListener("success",s),n.addEventListener("error",a)});return e.then(t=>{t instanceof IDBCursor&&g_.set(t,n)}).catch(()=>{}),_d.set(e,n),e}function tI(n){if(Rh.has(n))return;const e=new Promise((t,r)=>{const i=()=>{n.removeEventListener("complete",s),n.removeEventListener("error",a),n.removeEventListener("abort",a)},s=()=>{t(),i()},a=()=>{r(n.error||new DOMException("AbortError","AbortError")),i()};n.addEventListener("complete",s),n.addEventListener("error",a),n.addEventListener("abort",a)});Rh.set(n,e)}let Ch={get(n,e,t){if(n instanceof IDBTransaction){if(e==="done")return Rh.get(n);if(e==="objectStoreNames")return n.objectStoreNames||__.get(n);if(e==="store")return t.objectStoreNames[1]?void 0:t.objectStore(t.objectStoreNames[0])}return Zi(n[e])},set(n,e,t){return n[e]=t,!0},has(n,e){return n instanceof IDBTransaction&&(e==="done"||e==="store")?!0:e in n}};function nI(n){Ch=n(Ch)}function rI(n){return n===IDBDatabase.prototype.transaction&&!("objectStoreNames"in IDBTransaction.prototype)?function(e,...t){const r=n.call(Zu(this),e,...t);return __.set(r,e.sort?e.sort():[e]),Zi(r)}:ZT().includes(n)?function(...e){return n.apply(Zu(this),e),Zi(g_.get(this))}:function(...e){return Zi(n.apply(Zu(this),e))}}function iI(n){return typeof n=="function"?rI(n):(n instanceof IDBTransaction&&tI(n),JT(n,XT())?new Proxy(n,Ch):n)}function Zi(n){if(n instanceof IDBRequest)return eI(n);if(Xu.has(n))return Xu.get(n);const e=iI(n);return e!==n&&(Xu.set(n,e),_d.set(e,n)),e}const Zu=n=>_d.get(n);function sI(n,e,{blocked:t,upgrade:r,blocking:i,terminated:s}={}){const a=indexedDB.open(n,e),l=Zi(a);return r&&a.addEventListener("upgradeneeded",c=>{r(Zi(a.result),c.oldVersion,c.newVersion,Zi(a.transaction),c)}),t&&a.addEventListener("blocked",c=>t(c.oldVersion,c.newVersion,c)),l.then(c=>{s&&c.addEventListener("close",()=>s()),i&&c.addEventListener("versionchange",h=>i(h.oldVersion,h.newVersion,h))}).catch(()=>{}),l}const oI=["get","getKey","getAll","getAllKeys","count"],aI=["put","add","delete","clear"],eh=new Map;function Uf(n,e){if(!(n instanceof IDBDatabase&&!(e in n)&&typeof e=="string"))return;if(eh.get(e))return eh.get(e);const t=e.replace(/FromIndex$/,""),r=e!==t,i=aI.includes(t);if(!(t in(r?IDBIndex:IDBObjectStore).prototype)||!(i||oI.includes(t)))return;const s=async function(a,...l){const c=this.transaction(a,i?"readwrite":"readonly");let h=c.store;return r&&(h=h.index(l.shift())),(await Promise.all([h[t](...l),i&&c.done]))[0]};return eh.set(e,s),s}nI(n=>({...n,get:(e,t,r)=>Uf(e,t)||n.get(e,t,r),has:(e,t)=>!!Uf(e,t)||n.has(e,t)}));/**
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
 */class lI{constructor(e){this.container=e}getPlatformInfoString(){return this.container.getProviders().map(t=>{if(cI(t)){const r=t.getImmediate();return`${r.library}/${r.version}`}else return null}).filter(t=>t).join(" ")}}function cI(n){const e=n.getComponent();return(e==null?void 0:e.type)==="VERSION"}const Ph="@firebase/app",$f="0.13.2";/**
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
 */const Ri=new nu("@firebase/app"),uI="@firebase/app-compat",hI="@firebase/analytics-compat",dI="@firebase/analytics",fI="@firebase/app-check-compat",pI="@firebase/app-check",mI="@firebase/auth",gI="@firebase/auth-compat",_I="@firebase/database",vI="@firebase/data-connect",yI="@firebase/database-compat",EI="@firebase/functions",wI="@firebase/functions-compat",TI="@firebase/installations",II="@firebase/installations-compat",AI="@firebase/messaging",bI="@firebase/messaging-compat",SI="@firebase/performance",RI="@firebase/performance-compat",CI="@firebase/remote-config",PI="@firebase/remote-config-compat",kI="@firebase/storage",NI="@firebase/storage-compat",DI="@firebase/firestore",OI="@firebase/ai",VI="@firebase/firestore-compat",MI="firebase",xI="11.10.0";/**
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
 */const kh="[DEFAULT]",LI={[Ph]:"fire-core",[uI]:"fire-core-compat",[dI]:"fire-analytics",[hI]:"fire-analytics-compat",[pI]:"fire-app-check",[fI]:"fire-app-check-compat",[mI]:"fire-auth",[gI]:"fire-auth-compat",[_I]:"fire-rtdb",[vI]:"fire-data-connect",[yI]:"fire-rtdb-compat",[EI]:"fire-fn",[wI]:"fire-fn-compat",[TI]:"fire-iid",[II]:"fire-iid-compat",[AI]:"fire-fcm",[bI]:"fire-fcm-compat",[SI]:"fire-perf",[RI]:"fire-perf-compat",[CI]:"fire-rc",[PI]:"fire-rc-compat",[kI]:"fire-gcs",[NI]:"fire-gcs-compat",[DI]:"fire-fst",[VI]:"fire-fst-compat",[OI]:"fire-vertex","fire-js":"fire-js",[MI]:"fire-js-all"};/**
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
 */const Ha=new Map,FI=new Map,Nh=new Map;function qf(n,e){try{n.container.addComponent(e)}catch(t){Ri.debug(`Component ${e.name} failed to register with FirebaseApp ${n.name}`,t)}}function ls(n){const e=n.name;if(Nh.has(e))return Ri.debug(`There were multiple attempts to register component ${e}.`),!1;Nh.set(e,n);for(const t of Ha.values())qf(t,n);for(const t of FI.values())qf(t,n);return!0}function vd(n,e){const t=n.container.getProvider("heartbeat").getImmediate({optional:!0});return t&&t.triggerHeartbeat(),n.container.getProvider(e)}function vr(n){return n==null?!1:n.settings!==void 0}/**
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
 */const UI={"no-app":"No Firebase App '{$appName}' has been created - call initializeApp() first","bad-app-name":"Illegal App name: '{$appName}'","duplicate-app":"Firebase App named '{$appName}' already exists with different options or config","app-deleted":"Firebase App named '{$appName}' already deleted","server-app-deleted":"Firebase Server App has been deleted","no-options":"Need to provide options, when not being deployed to hosting via source.","invalid-app-argument":"firebase.{$appName}() takes either no argument or a Firebase App instance.","invalid-log-argument":"First argument to `onLog` must be null or a function.","idb-open":"Error thrown when opening IndexedDB. Original error: {$originalErrorMessage}.","idb-get":"Error thrown when reading from IndexedDB. Original error: {$originalErrorMessage}.","idb-set":"Error thrown when writing to IndexedDB. Original error: {$originalErrorMessage}.","idb-delete":"Error thrown when deleting from IndexedDB. Original error: {$originalErrorMessage}.","finalization-registry-not-supported":"FirebaseServerApp deleteOnDeref field defined but the JS runtime does not support FinalizationRegistry.","invalid-server-app-environment":"FirebaseServerApp is not for use in browser environments."},es=new Zo("app","Firebase",UI);/**
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
 */class $I{constructor(e,t,r){this._isDeleted=!1,this._options=Object.assign({},e),this._config=Object.assign({},t),this._name=t.name,this._automaticDataCollectionEnabled=t.automaticDataCollectionEnabled,this._container=r,this.container.addComponent(new Si("app",()=>this,"PUBLIC"))}get automaticDataCollectionEnabled(){return this.checkDestroyed(),this._automaticDataCollectionEnabled}set automaticDataCollectionEnabled(e){this.checkDestroyed(),this._automaticDataCollectionEnabled=e}get name(){return this.checkDestroyed(),this._name}get options(){return this.checkDestroyed(),this._options}get config(){return this.checkDestroyed(),this._config}get container(){return this._container}get isDeleted(){return this._isDeleted}set isDeleted(e){this._isDeleted=e}checkDestroyed(){if(this.isDeleted)throw es.create("app-deleted",{appName:this._name})}}/**
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
 */const ea=xI;function yd(n,e={}){let t=n;typeof e!="object"&&(e={name:e});const r=Object.assign({name:kh,automaticDataCollectionEnabled:!0},e),i=r.name;if(typeof i!="string"||!i)throw es.create("bad-app-name",{appName:String(i)});if(t||(t=d_()),!t)throw es.create("no-options");const s=Ha.get(i);if(s){if(Hs(t,s.options)&&Hs(r,s.config))return s;throw es.create("duplicate-app",{appName:i})}const a=new WT(i);for(const c of Nh.values())a.addComponent(c);const l=new $I(t,r,a);return Ha.set(i,l),l}function v_(n=kh){const e=Ha.get(n);if(!e&&n===kh&&d_())return yd();if(!e)throw es.create("no-app",{appName:n});return e}function y_(){return Array.from(Ha.values())}function Ti(n,e,t){var r;let i=(r=LI[n])!==null&&r!==void 0?r:n;t&&(i+=`-${t}`);const s=i.match(/\s|\//),a=e.match(/\s|\//);if(s||a){const l=[`Unable to register library "${i}" with version "${e}":`];s&&l.push(`library name "${i}" contains illegal characters (whitespace or "/")`),s&&a&&l.push("and"),a&&l.push(`version name "${e}" contains illegal characters (whitespace or "/")`),Ri.warn(l.join(" "));return}ls(new Si(`${i}-version`,()=>({library:i,version:e}),"VERSION"))}/**
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
 */const qI="firebase-heartbeat-database",BI=1,Wa="firebase-heartbeat-store";let th=null;function E_(){return th||(th=sI(qI,BI,{upgrade:(n,e)=>{switch(e){case 0:try{n.createObjectStore(Wa)}catch(t){console.warn(t)}}}}).catch(n=>{throw es.create("idb-open",{originalErrorMessage:n.message})})),th}async function zI(n){try{const t=(await E_()).transaction(Wa),r=await t.objectStore(Wa).get(w_(n));return await t.done,r}catch(e){if(e instanceof ki)Ri.warn(e.message);else{const t=es.create("idb-get",{originalErrorMessage:e==null?void 0:e.message});Ri.warn(t.message)}}}async function Bf(n,e){try{const r=(await E_()).transaction(Wa,"readwrite");await r.objectStore(Wa).put(e,w_(n)),await r.done}catch(t){if(t instanceof ki)Ri.warn(t.message);else{const r=es.create("idb-set",{originalErrorMessage:t==null?void 0:t.message});Ri.warn(r.message)}}}function w_(n){return`${n.name}!${n.options.appId}`}/**
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
 */const jI=1024,HI=30;class WI{constructor(e){this.container=e,this._heartbeatsCache=null;const t=this.container.getProvider("app").getImmediate();this._storage=new KI(t),this._heartbeatsCachePromise=this._storage.read().then(r=>(this._heartbeatsCache=r,r))}async triggerHeartbeat(){var e,t;try{const i=this.container.getProvider("platform-logger").getImmediate().getPlatformInfoString(),s=zf();if(((e=this._heartbeatsCache)===null||e===void 0?void 0:e.heartbeats)==null&&(this._heartbeatsCache=await this._heartbeatsCachePromise,((t=this._heartbeatsCache)===null||t===void 0?void 0:t.heartbeats)==null)||this._heartbeatsCache.lastSentHeartbeatDate===s||this._heartbeatsCache.heartbeats.some(a=>a.date===s))return;if(this._heartbeatsCache.heartbeats.push({date:s,agent:i}),this._heartbeatsCache.heartbeats.length>HI){const a=QI(this._heartbeatsCache.heartbeats);this._heartbeatsCache.heartbeats.splice(a,1)}return this._storage.overwrite(this._heartbeatsCache)}catch(r){Ri.warn(r)}}async getHeartbeatsHeader(){var e;try{if(this._heartbeatsCache===null&&await this._heartbeatsCachePromise,((e=this._heartbeatsCache)===null||e===void 0?void 0:e.heartbeats)==null||this._heartbeatsCache.heartbeats.length===0)return"";const t=zf(),{heartbeatsToSend:r,unsentEntries:i}=GI(this._heartbeatsCache.heartbeats),s=u_(JSON.stringify({version:2,heartbeats:r}));return this._heartbeatsCache.lastSentHeartbeatDate=t,i.length>0?(this._heartbeatsCache.heartbeats=i,await this._storage.overwrite(this._heartbeatsCache)):(this._heartbeatsCache.heartbeats=[],this._storage.overwrite(this._heartbeatsCache)),s}catch(t){return Ri.warn(t),""}}}function zf(){return new Date().toISOString().substring(0,10)}function GI(n,e=jI){const t=[];let r=n.slice();for(const i of n){const s=t.find(a=>a.agent===i.agent);if(s){if(s.dates.push(i.date),jf(t)>e){s.dates.pop();break}}else if(t.push({agent:i.agent,dates:[i.date]}),jf(t)>e){t.pop();break}r=r.slice(1)}return{heartbeatsToSend:t,unsentEntries:r}}class KI{constructor(e){this.app=e,this._canUseIndexedDBPromise=this.runIndexedDBEnvironmentCheck()}async runIndexedDBEnvironmentCheck(){return m_()?MT().then(()=>!0).catch(()=>!1):!1}async read(){if(await this._canUseIndexedDBPromise){const t=await zI(this.app);return t!=null&&t.heartbeats?t:{heartbeats:[]}}else return{heartbeats:[]}}async overwrite(e){var t;if(await this._canUseIndexedDBPromise){const i=await this.read();return Bf(this.app,{lastSentHeartbeatDate:(t=e.lastSentHeartbeatDate)!==null&&t!==void 0?t:i.lastSentHeartbeatDate,heartbeats:e.heartbeats})}else return}async add(e){var t;if(await this._canUseIndexedDBPromise){const i=await this.read();return Bf(this.app,{lastSentHeartbeatDate:(t=e.lastSentHeartbeatDate)!==null&&t!==void 0?t:i.lastSentHeartbeatDate,heartbeats:[...i.heartbeats,...e.heartbeats]})}else return}}function jf(n){return u_(JSON.stringify({version:2,heartbeats:n})).length}function QI(n){if(n.length===0)return-1;let e=0,t=n[0].date;for(let r=1;r<n.length;r++)n[r].date<t&&(t=n[r].date,e=r);return e}/**
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
 */function YI(n){ls(new Si("platform-logger",e=>new lI(e),"PRIVATE")),ls(new Si("heartbeat",e=>new WI(e),"PRIVATE")),Ti(Ph,$f,n),Ti(Ph,$f,"esm2017"),Ti("fire-js","")}YI("");function Ed(n,e){var t={};for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&e.indexOf(r)<0&&(t[r]=n[r]);if(n!=null&&typeof Object.getOwnPropertySymbols=="function")for(var i=0,r=Object.getOwnPropertySymbols(n);i<r.length;i++)e.indexOf(r[i])<0&&Object.prototype.propertyIsEnumerable.call(n,r[i])&&(t[r[i]]=n[r[i]]);return t}function T_(){return{"dependent-sdk-initialized-before-auth":"Another Firebase SDK was initialized and is trying to use Auth before Auth is initialized. Please be sure to call `initializeAuth` or `getAuth` before starting any other Firebase SDK."}}const JI=T_,I_=new Zo("auth","Firebase",T_());/**
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
 */const Ic=new nu("@firebase/auth");function XI(n,...e){Ic.logLevel<=Oe.WARN&&Ic.warn(`Auth (${ea}): ${n}`,...e)}function ac(n,...e){Ic.logLevel<=Oe.ERROR&&Ic.error(`Auth (${ea}): ${n}`,...e)}/**
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
 */function Lr(n,...e){throw wd(n,...e)}function Zr(n,...e){return wd(n,...e)}function A_(n,e,t){const r=Object.assign(Object.assign({},JI()),{[e]:t});return new Zo("auth","Firebase",r).create(e,{appName:n.name})}function Ii(n){return A_(n,"operation-not-supported-in-this-environment","Operations that alter the current user are not supported in conjunction with FirebaseServerApp")}function wd(n,...e){if(typeof n!="string"){const t=e[0],r=[...e.slice(1)];return r[0]&&(r[0].appName=n.name),n._errorFactory.create(t,...r)}return I_.create(n,...e)}function ae(n,e,...t){if(!n)throw wd(e,...t)}function Ei(n){const e="INTERNAL ASSERTION FAILED: "+n;throw ac(e),new Error(e)}function Ci(n,e){n||Ei(e)}/**
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
 */function Dh(){var n;return typeof self<"u"&&((n=self.location)===null||n===void 0?void 0:n.href)||""}function ZI(){return Hf()==="http:"||Hf()==="https:"}function Hf(){var n;return typeof self<"u"&&((n=self.location)===null||n===void 0?void 0:n.protocol)||null}/**
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
 */function eA(){return typeof navigator<"u"&&navigator&&"onLine"in navigator&&typeof navigator.onLine=="boolean"&&(ZI()||NT()||"connection"in navigator)?navigator.onLine:!0}function tA(){if(typeof navigator>"u")return null;const n=navigator;return n.languages&&n.languages[0]||n.language||null}/**
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
 */class pl{constructor(e,t){this.shortDelay=e,this.longDelay=t,Ci(t>e,"Short delay should be less than long delay!"),this.isMobile=CT()||DT()}get(){return eA()?this.isMobile?this.longDelay:this.shortDelay:Math.min(5e3,this.shortDelay)}}/**
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
 */function Td(n,e){Ci(n.emulator,"Emulator should always be set here");const{url:t}=n.emulator;return e?`${t}${e.startsWith("/")?e.slice(1):e}`:t}/**
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
 */class b_{static initialize(e,t,r){this.fetchImpl=e,t&&(this.headersImpl=t),r&&(this.responseImpl=r)}static fetch(){if(this.fetchImpl)return this.fetchImpl;if(typeof self<"u"&&"fetch"in self)return self.fetch;if(typeof globalThis<"u"&&globalThis.fetch)return globalThis.fetch;if(typeof fetch<"u")return fetch;Ei("Could not find fetch implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}static headers(){if(this.headersImpl)return this.headersImpl;if(typeof self<"u"&&"Headers"in self)return self.Headers;if(typeof globalThis<"u"&&globalThis.Headers)return globalThis.Headers;if(typeof Headers<"u")return Headers;Ei("Could not find Headers implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}static response(){if(this.responseImpl)return this.responseImpl;if(typeof self<"u"&&"Response"in self)return self.Response;if(typeof globalThis<"u"&&globalThis.Response)return globalThis.Response;if(typeof Response<"u")return Response;Ei("Could not find Response implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}}/**
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
 */const nA={CREDENTIAL_MISMATCH:"custom-token-mismatch",MISSING_CUSTOM_TOKEN:"internal-error",INVALID_IDENTIFIER:"invalid-email",MISSING_CONTINUE_URI:"internal-error",INVALID_PASSWORD:"wrong-password",MISSING_PASSWORD:"missing-password",INVALID_LOGIN_CREDENTIALS:"invalid-credential",EMAIL_EXISTS:"email-already-in-use",PASSWORD_LOGIN_DISABLED:"operation-not-allowed",INVALID_IDP_RESPONSE:"invalid-credential",INVALID_PENDING_TOKEN:"invalid-credential",FEDERATED_USER_ID_ALREADY_LINKED:"credential-already-in-use",MISSING_REQ_TYPE:"internal-error",EMAIL_NOT_FOUND:"user-not-found",RESET_PASSWORD_EXCEED_LIMIT:"too-many-requests",EXPIRED_OOB_CODE:"expired-action-code",INVALID_OOB_CODE:"invalid-action-code",MISSING_OOB_CODE:"internal-error",CREDENTIAL_TOO_OLD_LOGIN_AGAIN:"requires-recent-login",INVALID_ID_TOKEN:"invalid-user-token",TOKEN_EXPIRED:"user-token-expired",USER_NOT_FOUND:"user-token-expired",TOO_MANY_ATTEMPTS_TRY_LATER:"too-many-requests",PASSWORD_DOES_NOT_MEET_REQUIREMENTS:"password-does-not-meet-requirements",INVALID_CODE:"invalid-verification-code",INVALID_SESSION_INFO:"invalid-verification-id",INVALID_TEMPORARY_PROOF:"invalid-credential",MISSING_SESSION_INFO:"missing-verification-id",SESSION_EXPIRED:"code-expired",MISSING_ANDROID_PACKAGE_NAME:"missing-android-pkg-name",UNAUTHORIZED_DOMAIN:"unauthorized-continue-uri",INVALID_OAUTH_CLIENT_ID:"invalid-oauth-client-id",ADMIN_ONLY_OPERATION:"admin-restricted-operation",INVALID_MFA_PENDING_CREDENTIAL:"invalid-multi-factor-session",MFA_ENROLLMENT_NOT_FOUND:"multi-factor-info-not-found",MISSING_MFA_ENROLLMENT_ID:"missing-multi-factor-info",MISSING_MFA_PENDING_CREDENTIAL:"missing-multi-factor-session",SECOND_FACTOR_EXISTS:"second-factor-already-in-use",SECOND_FACTOR_LIMIT_EXCEEDED:"maximum-second-factor-count-exceeded",BLOCKING_FUNCTION_ERROR_RESPONSE:"internal-error",RECAPTCHA_NOT_ENABLED:"recaptcha-not-enabled",MISSING_RECAPTCHA_TOKEN:"missing-recaptcha-token",INVALID_RECAPTCHA_TOKEN:"invalid-recaptcha-token",INVALID_RECAPTCHA_ACTION:"invalid-recaptcha-action",MISSING_CLIENT_TYPE:"missing-client-type",MISSING_RECAPTCHA_VERSION:"missing-recaptcha-version",INVALID_RECAPTCHA_VERSION:"invalid-recaptcha-version",INVALID_REQ_TYPE:"invalid-req-type"};/**
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
 */const rA=["/v1/accounts:signInWithCustomToken","/v1/accounts:signInWithEmailLink","/v1/accounts:signInWithIdp","/v1/accounts:signInWithPassword","/v1/accounts:signInWithPhoneNumber","/v1/token"],iA=new pl(3e4,6e4);function Ni(n,e){return n.tenantId&&!e.tenantId?Object.assign(Object.assign({},e),{tenantId:n.tenantId}):e}async function Di(n,e,t,r,i={}){return S_(n,i,async()=>{let s={},a={};r&&(e==="GET"?a=r:s={body:JSON.stringify(r)});const l=fl(Object.assign({key:n.config.apiKey},a)).slice(1),c=await n._getAdditionalHeaders();c["Content-Type"]="application/json",n.languageCode&&(c["X-Firebase-Locale"]=n.languageCode);const h=Object.assign({method:e,headers:c},s);return kT()||(h.referrerPolicy="no-referrer"),n.emulatorConfig&&Xo(n.emulatorConfig.host)&&(h.credentials="include"),b_.fetch()(await R_(n,n.config.apiHost,t,l),h)})}async function S_(n,e,t){n._canInitEmulator=!1;const r=Object.assign(Object.assign({},nA),e);try{const i=new oA(n),s=await Promise.race([t(),i.promise]);i.clearNetworkTimeout();const a=await s.json();if("needConfirmation"in a)throw Kl(n,"account-exists-with-different-credential",a);if(s.ok&&!("errorMessage"in a))return a;{const l=s.ok?a.errorMessage:a.error.message,[c,h]=l.split(" : ");if(c==="FEDERATED_USER_ID_ALREADY_LINKED")throw Kl(n,"credential-already-in-use",a);if(c==="EMAIL_EXISTS")throw Kl(n,"email-already-in-use",a);if(c==="USER_DISABLED")throw Kl(n,"user-disabled",a);const f=r[c]||c.toLowerCase().replace(/[_\s]+/g,"-");if(h)throw A_(n,f,h);Lr(n,f)}}catch(i){if(i instanceof ki)throw i;Lr(n,"network-request-failed",{message:String(i)})}}async function ml(n,e,t,r,i={}){const s=await Di(n,e,t,r,i);return"mfaPendingCredential"in s&&Lr(n,"multi-factor-auth-required",{_serverResponse:s}),s}async function R_(n,e,t,r){const i=`${e}${t}?${r}`,s=n,a=s.config.emulator?Td(n.config,i):`${n.config.apiScheme}://${i}`;return rA.includes(t)&&(await s._persistenceManagerAvailable,s._getPersistenceType()==="COOKIE")?s._getPersistence()._getFinalTarget(a).toString():a}function sA(n){switch(n){case"ENFORCE":return"ENFORCE";case"AUDIT":return"AUDIT";case"OFF":return"OFF";default:return"ENFORCEMENT_STATE_UNSPECIFIED"}}class oA{clearNetworkTimeout(){clearTimeout(this.timer)}constructor(e){this.auth=e,this.timer=null,this.promise=new Promise((t,r)=>{this.timer=setTimeout(()=>r(Zr(this.auth,"network-request-failed")),iA.get())})}}function Kl(n,e,t){const r={appName:n.name};t.email&&(r.email=t.email),t.phoneNumber&&(r.phoneNumber=t.phoneNumber);const i=Zr(n,e,r);return i.customData._tokenResponse=t,i}function Wf(n){return n!==void 0&&n.enterprise!==void 0}class aA{constructor(e){if(this.siteKey="",this.recaptchaEnforcementState=[],e.recaptchaKey===void 0)throw new Error("recaptchaKey undefined");this.siteKey=e.recaptchaKey.split("/")[3],this.recaptchaEnforcementState=e.recaptchaEnforcementState}getProviderEnforcementState(e){if(!this.recaptchaEnforcementState||this.recaptchaEnforcementState.length===0)return null;for(const t of this.recaptchaEnforcementState)if(t.provider&&t.provider===e)return sA(t.enforcementState);return null}isProviderEnabled(e){return this.getProviderEnforcementState(e)==="ENFORCE"||this.getProviderEnforcementState(e)==="AUDIT"}isAnyProviderEnabled(){return this.isProviderEnabled("EMAIL_PASSWORD_PROVIDER")||this.isProviderEnabled("PHONE_PROVIDER")}}async function lA(n,e){return Di(n,"GET","/v2/recaptchaConfig",Ni(n,e))}/**
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
 */async function cA(n,e){return Di(n,"POST","/v1/accounts:delete",e)}async function Ac(n,e){return Di(n,"POST","/v1/accounts:lookup",e)}/**
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
 */function La(n){if(n)try{const e=new Date(Number(n));if(!isNaN(e.getTime()))return e.toUTCString()}catch{}}async function uA(n,e=!1){const t=$t(n),r=await t.getIdToken(e),i=Id(r);ae(i&&i.exp&&i.auth_time&&i.iat,t.auth,"internal-error");const s=typeof i.firebase=="object"?i.firebase:void 0,a=s==null?void 0:s.sign_in_provider;return{claims:i,token:r,authTime:La(nh(i.auth_time)),issuedAtTime:La(nh(i.iat)),expirationTime:La(nh(i.exp)),signInProvider:a||null,signInSecondFactor:(s==null?void 0:s.sign_in_second_factor)||null}}function nh(n){return Number(n)*1e3}function Id(n){const[e,t,r]=n.split(".");if(e===void 0||t===void 0||r===void 0)return ac("JWT malformed, contained fewer than 3 sections"),null;try{const i=h_(t);return i?JSON.parse(i):(ac("Failed to decode base64 JWT payload"),null)}catch(i){return ac("Caught error parsing JWT payload as JSON",i==null?void 0:i.toString()),null}}function Gf(n){const e=Id(n);return ae(e,"internal-error"),ae(typeof e.exp<"u","internal-error"),ae(typeof e.iat<"u","internal-error"),Number(e.exp)-Number(e.iat)}/**
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
 */async function Ga(n,e,t=!1){if(t)return e;try{return await e}catch(r){throw r instanceof ki&&hA(r)&&n.auth.currentUser===n&&await n.auth.signOut(),r}}function hA({code:n}){return n==="auth/user-disabled"||n==="auth/user-token-expired"}/**
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
 */class dA{constructor(e){this.user=e,this.isRunning=!1,this.timerId=null,this.errorBackoff=3e4}_start(){this.isRunning||(this.isRunning=!0,this.schedule())}_stop(){this.isRunning&&(this.isRunning=!1,this.timerId!==null&&clearTimeout(this.timerId))}getInterval(e){var t;if(e){const r=this.errorBackoff;return this.errorBackoff=Math.min(this.errorBackoff*2,96e4),r}else{this.errorBackoff=3e4;const i=((t=this.user.stsTokenManager.expirationTime)!==null&&t!==void 0?t:0)-Date.now()-3e5;return Math.max(0,i)}}schedule(e=!1){if(!this.isRunning)return;const t=this.getInterval(e);this.timerId=setTimeout(async()=>{await this.iteration()},t)}async iteration(){try{await this.user.getIdToken(!0)}catch(e){(e==null?void 0:e.code)==="auth/network-request-failed"&&this.schedule(!0);return}this.schedule()}}/**
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
 */class Oh{constructor(e,t){this.createdAt=e,this.lastLoginAt=t,this._initializeTime()}_initializeTime(){this.lastSignInTime=La(this.lastLoginAt),this.creationTime=La(this.createdAt)}_copy(e){this.createdAt=e.createdAt,this.lastLoginAt=e.lastLoginAt,this._initializeTime()}toJSON(){return{createdAt:this.createdAt,lastLoginAt:this.lastLoginAt}}}/**
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
 */async function bc(n){var e;const t=n.auth,r=await n.getIdToken(),i=await Ga(n,Ac(t,{idToken:r}));ae(i==null?void 0:i.users.length,t,"internal-error");const s=i.users[0];n._notifyReloadListener(s);const a=!((e=s.providerUserInfo)===null||e===void 0)&&e.length?C_(s.providerUserInfo):[],l=pA(n.providerData,a),c=n.isAnonymous,h=!(n.email&&s.passwordHash)&&!(l!=null&&l.length),f=c?h:!1,g={uid:s.localId,displayName:s.displayName||null,photoURL:s.photoUrl||null,email:s.email||null,emailVerified:s.emailVerified||!1,phoneNumber:s.phoneNumber||null,tenantId:s.tenantId||null,providerData:l,metadata:new Oh(s.createdAt,s.lastLoginAt),isAnonymous:f};Object.assign(n,g)}async function fA(n){const e=$t(n);await bc(e),await e.auth._persistUserIfCurrent(e),e.auth._notifyListenersIfCurrent(e)}function pA(n,e){return[...n.filter(r=>!e.some(i=>i.providerId===r.providerId)),...e]}function C_(n){return n.map(e=>{var{providerId:t}=e,r=Ed(e,["providerId"]);return{providerId:t,uid:r.rawId||"",displayName:r.displayName||null,email:r.email||null,phoneNumber:r.phoneNumber||null,photoURL:r.photoUrl||null}})}/**
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
 */async function mA(n,e){const t=await S_(n,{},async()=>{const r=fl({grant_type:"refresh_token",refresh_token:e}).slice(1),{tokenApiHost:i,apiKey:s}=n.config,a=await R_(n,i,"/v1/token",`key=${s}`),l=await n._getAdditionalHeaders();l["Content-Type"]="application/x-www-form-urlencoded";const c={method:"POST",headers:l,body:r};return n.emulatorConfig&&Xo(n.emulatorConfig.host)&&(c.credentials="include"),b_.fetch()(a,c)});return{accessToken:t.access_token,expiresIn:t.expires_in,refreshToken:t.refresh_token}}async function gA(n,e){return Di(n,"POST","/v2/accounts:revokeToken",Ni(n,e))}/**
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
 */class wo{constructor(){this.refreshToken=null,this.accessToken=null,this.expirationTime=null}get isExpired(){return!this.expirationTime||Date.now()>this.expirationTime-3e4}updateFromServerResponse(e){ae(e.idToken,"internal-error"),ae(typeof e.idToken<"u","internal-error"),ae(typeof e.refreshToken<"u","internal-error");const t="expiresIn"in e&&typeof e.expiresIn<"u"?Number(e.expiresIn):Gf(e.idToken);this.updateTokensAndExpiration(e.idToken,e.refreshToken,t)}updateFromIdToken(e){ae(e.length!==0,"internal-error");const t=Gf(e);this.updateTokensAndExpiration(e,null,t)}async getToken(e,t=!1){return!t&&this.accessToken&&!this.isExpired?this.accessToken:(ae(this.refreshToken,e,"user-token-expired"),this.refreshToken?(await this.refresh(e,this.refreshToken),this.accessToken):null)}clearRefreshToken(){this.refreshToken=null}async refresh(e,t){const{accessToken:r,refreshToken:i,expiresIn:s}=await mA(e,t);this.updateTokensAndExpiration(r,i,Number(s))}updateTokensAndExpiration(e,t,r){this.refreshToken=t||null,this.accessToken=e||null,this.expirationTime=Date.now()+r*1e3}static fromJSON(e,t){const{refreshToken:r,accessToken:i,expirationTime:s}=t,a=new wo;return r&&(ae(typeof r=="string","internal-error",{appName:e}),a.refreshToken=r),i&&(ae(typeof i=="string","internal-error",{appName:e}),a.accessToken=i),s&&(ae(typeof s=="number","internal-error",{appName:e}),a.expirationTime=s),a}toJSON(){return{refreshToken:this.refreshToken,accessToken:this.accessToken,expirationTime:this.expirationTime}}_assign(e){this.accessToken=e.accessToken,this.refreshToken=e.refreshToken,this.expirationTime=e.expirationTime}_clone(){return Object.assign(new wo,this.toJSON())}_performRefresh(){return Ei("not implemented")}}/**
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
 */function qi(n,e){ae(typeof n=="string"||typeof n>"u","internal-error",{appName:e})}class Or{constructor(e){var{uid:t,auth:r,stsTokenManager:i}=e,s=Ed(e,["uid","auth","stsTokenManager"]);this.providerId="firebase",this.proactiveRefresh=new dA(this),this.reloadUserInfo=null,this.reloadListener=null,this.uid=t,this.auth=r,this.stsTokenManager=i,this.accessToken=i.accessToken,this.displayName=s.displayName||null,this.email=s.email||null,this.emailVerified=s.emailVerified||!1,this.phoneNumber=s.phoneNumber||null,this.photoURL=s.photoURL||null,this.isAnonymous=s.isAnonymous||!1,this.tenantId=s.tenantId||null,this.providerData=s.providerData?[...s.providerData]:[],this.metadata=new Oh(s.createdAt||void 0,s.lastLoginAt||void 0)}async getIdToken(e){const t=await Ga(this,this.stsTokenManager.getToken(this.auth,e));return ae(t,this.auth,"internal-error"),this.accessToken!==t&&(this.accessToken=t,await this.auth._persistUserIfCurrent(this),this.auth._notifyListenersIfCurrent(this)),t}getIdTokenResult(e){return uA(this,e)}reload(){return fA(this)}_assign(e){this!==e&&(ae(this.uid===e.uid,this.auth,"internal-error"),this.displayName=e.displayName,this.photoURL=e.photoURL,this.email=e.email,this.emailVerified=e.emailVerified,this.phoneNumber=e.phoneNumber,this.isAnonymous=e.isAnonymous,this.tenantId=e.tenantId,this.providerData=e.providerData.map(t=>Object.assign({},t)),this.metadata._copy(e.metadata),this.stsTokenManager._assign(e.stsTokenManager))}_clone(e){const t=new Or(Object.assign(Object.assign({},this),{auth:e,stsTokenManager:this.stsTokenManager._clone()}));return t.metadata._copy(this.metadata),t}_onReload(e){ae(!this.reloadListener,this.auth,"internal-error"),this.reloadListener=e,this.reloadUserInfo&&(this._notifyReloadListener(this.reloadUserInfo),this.reloadUserInfo=null)}_notifyReloadListener(e){this.reloadListener?this.reloadListener(e):this.reloadUserInfo=e}_startProactiveRefresh(){this.proactiveRefresh._start()}_stopProactiveRefresh(){this.proactiveRefresh._stop()}async _updateTokensIfNecessary(e,t=!1){let r=!1;e.idToken&&e.idToken!==this.stsTokenManager.accessToken&&(this.stsTokenManager.updateFromServerResponse(e),r=!0),t&&await bc(this),await this.auth._persistUserIfCurrent(this),r&&this.auth._notifyListenersIfCurrent(this)}async delete(){if(vr(this.auth.app))return Promise.reject(Ii(this.auth));const e=await this.getIdToken();return await Ga(this,cA(this.auth,{idToken:e})),this.stsTokenManager.clearRefreshToken(),this.auth.signOut()}toJSON(){return Object.assign(Object.assign({uid:this.uid,email:this.email||void 0,emailVerified:this.emailVerified,displayName:this.displayName||void 0,isAnonymous:this.isAnonymous,photoURL:this.photoURL||void 0,phoneNumber:this.phoneNumber||void 0,tenantId:this.tenantId||void 0,providerData:this.providerData.map(e=>Object.assign({},e)),stsTokenManager:this.stsTokenManager.toJSON(),_redirectEventId:this._redirectEventId},this.metadata.toJSON()),{apiKey:this.auth.config.apiKey,appName:this.auth.name})}get refreshToken(){return this.stsTokenManager.refreshToken||""}static _fromJSON(e,t){var r,i,s,a,l,c,h,f;const g=(r=t.displayName)!==null&&r!==void 0?r:void 0,_=(i=t.email)!==null&&i!==void 0?i:void 0,E=(s=t.phoneNumber)!==null&&s!==void 0?s:void 0,S=(a=t.photoURL)!==null&&a!==void 0?a:void 0,P=(l=t.tenantId)!==null&&l!==void 0?l:void 0,I=(c=t._redirectEventId)!==null&&c!==void 0?c:void 0,L=(h=t.createdAt)!==null&&h!==void 0?h:void 0,U=(f=t.lastLoginAt)!==null&&f!==void 0?f:void 0,{uid:q,emailVerified:Y,isAnonymous:Me,providerData:Q,stsTokenManager:A}=t;ae(q&&A,e,"internal-error");const v=wo.fromJSON(this.name,A);ae(typeof q=="string",e,"internal-error"),qi(g,e.name),qi(_,e.name),ae(typeof Y=="boolean",e,"internal-error"),ae(typeof Me=="boolean",e,"internal-error"),qi(E,e.name),qi(S,e.name),qi(P,e.name),qi(I,e.name),qi(L,e.name),qi(U,e.name);const w=new Or({uid:q,auth:e,email:_,emailVerified:Y,displayName:g,isAnonymous:Me,photoURL:S,phoneNumber:E,tenantId:P,stsTokenManager:v,createdAt:L,lastLoginAt:U});return Q&&Array.isArray(Q)&&(w.providerData=Q.map(b=>Object.assign({},b))),I&&(w._redirectEventId=I),w}static async _fromIdTokenResponse(e,t,r=!1){const i=new wo;i.updateFromServerResponse(t);const s=new Or({uid:t.localId,auth:e,stsTokenManager:i,isAnonymous:r});return await bc(s),s}static async _fromGetAccountInfoResponse(e,t,r){const i=t.users[0];ae(i.localId!==void 0,"internal-error");const s=i.providerUserInfo!==void 0?C_(i.providerUserInfo):[],a=!(i.email&&i.passwordHash)&&!(s!=null&&s.length),l=new wo;l.updateFromIdToken(r);const c=new Or({uid:i.localId,auth:e,stsTokenManager:l,isAnonymous:a}),h={uid:i.localId,displayName:i.displayName||null,photoURL:i.photoUrl||null,email:i.email||null,emailVerified:i.emailVerified||!1,phoneNumber:i.phoneNumber||null,tenantId:i.tenantId||null,providerData:s,metadata:new Oh(i.createdAt,i.lastLoginAt),isAnonymous:!(i.email&&i.passwordHash)&&!(s!=null&&s.length)};return Object.assign(c,h),c}}/**
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
 */const Kf=new Map;function wi(n){Ci(n instanceof Function,"Expected a class definition");let e=Kf.get(n);return e?(Ci(e instanceof n,"Instance stored in cache mismatched with class"),e):(e=new n,Kf.set(n,e),e)}/**
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
 */class P_{constructor(){this.type="NONE",this.storage={}}async _isAvailable(){return!0}async _set(e,t){this.storage[e]=t}async _get(e){const t=this.storage[e];return t===void 0?null:t}async _remove(e){delete this.storage[e]}_addListener(e,t){}_removeListener(e,t){}}P_.type="NONE";const Qf=P_;/**
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
 */function lc(n,e,t){return`firebase:${n}:${e}:${t}`}class To{constructor(e,t,r){this.persistence=e,this.auth=t,this.userKey=r;const{config:i,name:s}=this.auth;this.fullUserKey=lc(this.userKey,i.apiKey,s),this.fullPersistenceKey=lc("persistence",i.apiKey,s),this.boundEventHandler=t._onStorageEvent.bind(t),this.persistence._addListener(this.fullUserKey,this.boundEventHandler)}setCurrentUser(e){return this.persistence._set(this.fullUserKey,e.toJSON())}async getCurrentUser(){const e=await this.persistence._get(this.fullUserKey);if(!e)return null;if(typeof e=="string"){const t=await Ac(this.auth,{idToken:e}).catch(()=>{});return t?Or._fromGetAccountInfoResponse(this.auth,t,e):null}return Or._fromJSON(this.auth,e)}removeCurrentUser(){return this.persistence._remove(this.fullUserKey)}savePersistenceForRedirect(){return this.persistence._set(this.fullPersistenceKey,this.persistence.type)}async setPersistence(e){if(this.persistence===e)return;const t=await this.getCurrentUser();if(await this.removeCurrentUser(),this.persistence=e,t)return this.setCurrentUser(t)}delete(){this.persistence._removeListener(this.fullUserKey,this.boundEventHandler)}static async create(e,t,r="authUser"){if(!t.length)return new To(wi(Qf),e,r);const i=(await Promise.all(t.map(async h=>{if(await h._isAvailable())return h}))).filter(h=>h);let s=i[0]||wi(Qf);const a=lc(r,e.config.apiKey,e.name);let l=null;for(const h of t)try{const f=await h._get(a);if(f){let g;if(typeof f=="string"){const _=await Ac(e,{idToken:f}).catch(()=>{});if(!_)break;g=await Or._fromGetAccountInfoResponse(e,_,f)}else g=Or._fromJSON(e,f);h!==s&&(l=g),s=h;break}}catch{}const c=i.filter(h=>h._shouldAllowMigration);return!s._shouldAllowMigration||!c.length?new To(s,e,r):(s=c[0],l&&await s._set(a,l.toJSON()),await Promise.all(t.map(async h=>{if(h!==s)try{await h._remove(a)}catch{}})),new To(s,e,r))}}/**
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
 */function Yf(n){const e=n.toLowerCase();if(e.includes("opera/")||e.includes("opr/")||e.includes("opios/"))return"Opera";if(O_(e))return"IEMobile";if(e.includes("msie")||e.includes("trident/"))return"IE";if(e.includes("edge/"))return"Edge";if(k_(e))return"Firefox";if(e.includes("silk/"))return"Silk";if(M_(e))return"Blackberry";if(x_(e))return"Webos";if(N_(e))return"Safari";if((e.includes("chrome/")||D_(e))&&!e.includes("edge/"))return"Chrome";if(V_(e))return"Android";{const t=/([a-zA-Z\d\.]+)\/[a-zA-Z\d\.]*$/,r=n.match(t);if((r==null?void 0:r.length)===2)return r[1]}return"Other"}function k_(n=Dn()){return/firefox\//i.test(n)}function N_(n=Dn()){const e=n.toLowerCase();return e.includes("safari/")&&!e.includes("chrome/")&&!e.includes("crios/")&&!e.includes("android")}function D_(n=Dn()){return/crios\//i.test(n)}function O_(n=Dn()){return/iemobile/i.test(n)}function V_(n=Dn()){return/android/i.test(n)}function M_(n=Dn()){return/blackberry/i.test(n)}function x_(n=Dn()){return/webos/i.test(n)}function Ad(n=Dn()){return/iphone|ipad|ipod/i.test(n)||/macintosh/i.test(n)&&/mobile/i.test(n)}function _A(n=Dn()){var e;return Ad(n)&&!!(!((e=window.navigator)===null||e===void 0)&&e.standalone)}function vA(){return OT()&&document.documentMode===10}function L_(n=Dn()){return Ad(n)||V_(n)||x_(n)||M_(n)||/windows phone/i.test(n)||O_(n)}/**
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
 */function F_(n,e=[]){let t;switch(n){case"Browser":t=Yf(Dn());break;case"Worker":t=`${Yf(Dn())}-${n}`;break;default:t=n}const r=e.length?e.join(","):"FirebaseCore-web";return`${t}/JsCore/${ea}/${r}`}/**
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
 */class yA{constructor(e){this.auth=e,this.queue=[]}pushCallback(e,t){const r=s=>new Promise((a,l)=>{try{const c=e(s);a(c)}catch(c){l(c)}});r.onAbort=t,this.queue.push(r);const i=this.queue.length-1;return()=>{this.queue[i]=()=>Promise.resolve()}}async runMiddleware(e){if(this.auth.currentUser===e)return;const t=[];try{for(const r of this.queue)await r(e),r.onAbort&&t.push(r.onAbort)}catch(r){t.reverse();for(const i of t)try{i()}catch{}throw this.auth._errorFactory.create("login-blocked",{originalMessage:r==null?void 0:r.message})}}}/**
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
 */async function EA(n,e={}){return Di(n,"GET","/v2/passwordPolicy",Ni(n,e))}/**
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
 */const wA=6;class TA{constructor(e){var t,r,i,s;const a=e.customStrengthOptions;this.customStrengthOptions={},this.customStrengthOptions.minPasswordLength=(t=a.minPasswordLength)!==null&&t!==void 0?t:wA,a.maxPasswordLength&&(this.customStrengthOptions.maxPasswordLength=a.maxPasswordLength),a.containsLowercaseCharacter!==void 0&&(this.customStrengthOptions.containsLowercaseLetter=a.containsLowercaseCharacter),a.containsUppercaseCharacter!==void 0&&(this.customStrengthOptions.containsUppercaseLetter=a.containsUppercaseCharacter),a.containsNumericCharacter!==void 0&&(this.customStrengthOptions.containsNumericCharacter=a.containsNumericCharacter),a.containsNonAlphanumericCharacter!==void 0&&(this.customStrengthOptions.containsNonAlphanumericCharacter=a.containsNonAlphanumericCharacter),this.enforcementState=e.enforcementState,this.enforcementState==="ENFORCEMENT_STATE_UNSPECIFIED"&&(this.enforcementState="OFF"),this.allowedNonAlphanumericCharacters=(i=(r=e.allowedNonAlphanumericCharacters)===null||r===void 0?void 0:r.join(""))!==null&&i!==void 0?i:"",this.forceUpgradeOnSignin=(s=e.forceUpgradeOnSignin)!==null&&s!==void 0?s:!1,this.schemaVersion=e.schemaVersion}validatePassword(e){var t,r,i,s,a,l;const c={isValid:!0,passwordPolicy:this};return this.validatePasswordLengthOptions(e,c),this.validatePasswordCharacterOptions(e,c),c.isValid&&(c.isValid=(t=c.meetsMinPasswordLength)!==null&&t!==void 0?t:!0),c.isValid&&(c.isValid=(r=c.meetsMaxPasswordLength)!==null&&r!==void 0?r:!0),c.isValid&&(c.isValid=(i=c.containsLowercaseLetter)!==null&&i!==void 0?i:!0),c.isValid&&(c.isValid=(s=c.containsUppercaseLetter)!==null&&s!==void 0?s:!0),c.isValid&&(c.isValid=(a=c.containsNumericCharacter)!==null&&a!==void 0?a:!0),c.isValid&&(c.isValid=(l=c.containsNonAlphanumericCharacter)!==null&&l!==void 0?l:!0),c}validatePasswordLengthOptions(e,t){const r=this.customStrengthOptions.minPasswordLength,i=this.customStrengthOptions.maxPasswordLength;r&&(t.meetsMinPasswordLength=e.length>=r),i&&(t.meetsMaxPasswordLength=e.length<=i)}validatePasswordCharacterOptions(e,t){this.updatePasswordCharacterOptionsStatuses(t,!1,!1,!1,!1);let r;for(let i=0;i<e.length;i++)r=e.charAt(i),this.updatePasswordCharacterOptionsStatuses(t,r>="a"&&r<="z",r>="A"&&r<="Z",r>="0"&&r<="9",this.allowedNonAlphanumericCharacters.includes(r))}updatePasswordCharacterOptionsStatuses(e,t,r,i,s){this.customStrengthOptions.containsLowercaseLetter&&(e.containsLowercaseLetter||(e.containsLowercaseLetter=t)),this.customStrengthOptions.containsUppercaseLetter&&(e.containsUppercaseLetter||(e.containsUppercaseLetter=r)),this.customStrengthOptions.containsNumericCharacter&&(e.containsNumericCharacter||(e.containsNumericCharacter=i)),this.customStrengthOptions.containsNonAlphanumericCharacter&&(e.containsNonAlphanumericCharacter||(e.containsNonAlphanumericCharacter=s))}}/**
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
 */class IA{constructor(e,t,r,i){this.app=e,this.heartbeatServiceProvider=t,this.appCheckServiceProvider=r,this.config=i,this.currentUser=null,this.emulatorConfig=null,this.operations=Promise.resolve(),this.authStateSubscription=new Jf(this),this.idTokenSubscription=new Jf(this),this.beforeStateQueue=new yA(this),this.redirectUser=null,this.isProactiveRefreshEnabled=!1,this.EXPECTED_PASSWORD_POLICY_SCHEMA_VERSION=1,this._canInitEmulator=!0,this._isInitialized=!1,this._deleted=!1,this._initializationPromise=null,this._popupRedirectResolver=null,this._errorFactory=I_,this._agentRecaptchaConfig=null,this._tenantRecaptchaConfigs={},this._projectPasswordPolicy=null,this._tenantPasswordPolicies={},this._resolvePersistenceManagerAvailable=void 0,this.lastNotifiedUid=void 0,this.languageCode=null,this.tenantId=null,this.settings={appVerificationDisabledForTesting:!1},this.frameworks=[],this.name=e.name,this.clientVersion=i.sdkClientVersion,this._persistenceManagerAvailable=new Promise(s=>this._resolvePersistenceManagerAvailable=s)}_initializeWithPersistence(e,t){return t&&(this._popupRedirectResolver=wi(t)),this._initializationPromise=this.queue(async()=>{var r,i,s;if(!this._deleted&&(this.persistenceManager=await To.create(this,e),(r=this._resolvePersistenceManagerAvailable)===null||r===void 0||r.call(this),!this._deleted)){if(!((i=this._popupRedirectResolver)===null||i===void 0)&&i._shouldInitProactively)try{await this._popupRedirectResolver._initialize(this)}catch{}await this.initializeCurrentUser(t),this.lastNotifiedUid=((s=this.currentUser)===null||s===void 0?void 0:s.uid)||null,!this._deleted&&(this._isInitialized=!0)}}),this._initializationPromise}async _onStorageEvent(){if(this._deleted)return;const e=await this.assertedPersistence.getCurrentUser();if(!(!this.currentUser&&!e)){if(this.currentUser&&e&&this.currentUser.uid===e.uid){this._currentUser._assign(e),await this.currentUser.getIdToken();return}await this._updateCurrentUser(e,!0)}}async initializeCurrentUserFromIdToken(e){try{const t=await Ac(this,{idToken:e}),r=await Or._fromGetAccountInfoResponse(this,t,e);await this.directlySetCurrentUser(r)}catch(t){console.warn("FirebaseServerApp could not login user with provided authIdToken: ",t),await this.directlySetCurrentUser(null)}}async initializeCurrentUser(e){var t;if(vr(this.app)){const a=this.app.settings.authIdToken;return a?new Promise(l=>{setTimeout(()=>this.initializeCurrentUserFromIdToken(a).then(l,l))}):this.directlySetCurrentUser(null)}const r=await this.assertedPersistence.getCurrentUser();let i=r,s=!1;if(e&&this.config.authDomain){await this.getOrInitRedirectPersistenceManager();const a=(t=this.redirectUser)===null||t===void 0?void 0:t._redirectEventId,l=i==null?void 0:i._redirectEventId,c=await this.tryRedirectSignIn(e);(!a||a===l)&&(c!=null&&c.user)&&(i=c.user,s=!0)}if(!i)return this.directlySetCurrentUser(null);if(!i._redirectEventId){if(s)try{await this.beforeStateQueue.runMiddleware(i)}catch(a){i=r,this._popupRedirectResolver._overrideRedirectResult(this,()=>Promise.reject(a))}return i?this.reloadAndSetCurrentUserOrClear(i):this.directlySetCurrentUser(null)}return ae(this._popupRedirectResolver,this,"argument-error"),await this.getOrInitRedirectPersistenceManager(),this.redirectUser&&this.redirectUser._redirectEventId===i._redirectEventId?this.directlySetCurrentUser(i):this.reloadAndSetCurrentUserOrClear(i)}async tryRedirectSignIn(e){let t=null;try{t=await this._popupRedirectResolver._completeRedirectFn(this,e,!0)}catch{await this._setRedirectUser(null)}return t}async reloadAndSetCurrentUserOrClear(e){try{await bc(e)}catch(t){if((t==null?void 0:t.code)!=="auth/network-request-failed")return this.directlySetCurrentUser(null)}return this.directlySetCurrentUser(e)}useDeviceLanguage(){this.languageCode=tA()}async _delete(){this._deleted=!0}async updateCurrentUser(e){if(vr(this.app))return Promise.reject(Ii(this));const t=e?$t(e):null;return t&&ae(t.auth.config.apiKey===this.config.apiKey,this,"invalid-user-token"),this._updateCurrentUser(t&&t._clone(this))}async _updateCurrentUser(e,t=!1){if(!this._deleted)return e&&ae(this.tenantId===e.tenantId,this,"tenant-id-mismatch"),t||await this.beforeStateQueue.runMiddleware(e),this.queue(async()=>{await this.directlySetCurrentUser(e),this.notifyAuthListeners()})}async signOut(){return vr(this.app)?Promise.reject(Ii(this)):(await this.beforeStateQueue.runMiddleware(null),(this.redirectPersistenceManager||this._popupRedirectResolver)&&await this._setRedirectUser(null),this._updateCurrentUser(null,!0))}setPersistence(e){return vr(this.app)?Promise.reject(Ii(this)):this.queue(async()=>{await this.assertedPersistence.setPersistence(wi(e))})}_getRecaptchaConfig(){return this.tenantId==null?this._agentRecaptchaConfig:this._tenantRecaptchaConfigs[this.tenantId]}async validatePassword(e){this._getPasswordPolicyInternal()||await this._updatePasswordPolicy();const t=this._getPasswordPolicyInternal();return t.schemaVersion!==this.EXPECTED_PASSWORD_POLICY_SCHEMA_VERSION?Promise.reject(this._errorFactory.create("unsupported-password-policy-schema-version",{})):t.validatePassword(e)}_getPasswordPolicyInternal(){return this.tenantId===null?this._projectPasswordPolicy:this._tenantPasswordPolicies[this.tenantId]}async _updatePasswordPolicy(){const e=await EA(this),t=new TA(e);this.tenantId===null?this._projectPasswordPolicy=t:this._tenantPasswordPolicies[this.tenantId]=t}_getPersistenceType(){return this.assertedPersistence.persistence.type}_getPersistence(){return this.assertedPersistence.persistence}_updateErrorMap(e){this._errorFactory=new Zo("auth","Firebase",e())}onAuthStateChanged(e,t,r){return this.registerStateListener(this.authStateSubscription,e,t,r)}beforeAuthStateChanged(e,t){return this.beforeStateQueue.pushCallback(e,t)}onIdTokenChanged(e,t,r){return this.registerStateListener(this.idTokenSubscription,e,t,r)}authStateReady(){return new Promise((e,t)=>{if(this.currentUser)e();else{const r=this.onAuthStateChanged(()=>{r(),e()},t)}})}async revokeAccessToken(e){if(this.currentUser){const t=await this.currentUser.getIdToken(),r={providerId:"apple.com",tokenType:"ACCESS_TOKEN",token:e,idToken:t};this.tenantId!=null&&(r.tenantId=this.tenantId),await gA(this,r)}}toJSON(){var e;return{apiKey:this.config.apiKey,authDomain:this.config.authDomain,appName:this.name,currentUser:(e=this._currentUser)===null||e===void 0?void 0:e.toJSON()}}async _setRedirectUser(e,t){const r=await this.getOrInitRedirectPersistenceManager(t);return e===null?r.removeCurrentUser():r.setCurrentUser(e)}async getOrInitRedirectPersistenceManager(e){if(!this.redirectPersistenceManager){const t=e&&wi(e)||this._popupRedirectResolver;ae(t,this,"argument-error"),this.redirectPersistenceManager=await To.create(this,[wi(t._redirectPersistence)],"redirectUser"),this.redirectUser=await this.redirectPersistenceManager.getCurrentUser()}return this.redirectPersistenceManager}async _redirectUserForId(e){var t,r;return this._isInitialized&&await this.queue(async()=>{}),((t=this._currentUser)===null||t===void 0?void 0:t._redirectEventId)===e?this._currentUser:((r=this.redirectUser)===null||r===void 0?void 0:r._redirectEventId)===e?this.redirectUser:null}async _persistUserIfCurrent(e){if(e===this.currentUser)return this.queue(async()=>this.directlySetCurrentUser(e))}_notifyListenersIfCurrent(e){e===this.currentUser&&this.notifyAuthListeners()}_key(){return`${this.config.authDomain}:${this.config.apiKey}:${this.name}`}_startProactiveRefresh(){this.isProactiveRefreshEnabled=!0,this.currentUser&&this._currentUser._startProactiveRefresh()}_stopProactiveRefresh(){this.isProactiveRefreshEnabled=!1,this.currentUser&&this._currentUser._stopProactiveRefresh()}get _currentUser(){return this.currentUser}notifyAuthListeners(){var e,t;if(!this._isInitialized)return;this.idTokenSubscription.next(this.currentUser);const r=(t=(e=this.currentUser)===null||e===void 0?void 0:e.uid)!==null&&t!==void 0?t:null;this.lastNotifiedUid!==r&&(this.lastNotifiedUid=r,this.authStateSubscription.next(this.currentUser))}registerStateListener(e,t,r,i){if(this._deleted)return()=>{};const s=typeof t=="function"?t:t.next.bind(t);let a=!1;const l=this._isInitialized?Promise.resolve():this._initializationPromise;if(ae(l,this,"internal-error"),l.then(()=>{a||s(this.currentUser)}),typeof t=="function"){const c=e.addObserver(t,r,i);return()=>{a=!0,c()}}else{const c=e.addObserver(t);return()=>{a=!0,c()}}}async directlySetCurrentUser(e){this.currentUser&&this.currentUser!==e&&this._currentUser._stopProactiveRefresh(),e&&this.isProactiveRefreshEnabled&&e._startProactiveRefresh(),this.currentUser=e,e?await this.assertedPersistence.setCurrentUser(e):await this.assertedPersistence.removeCurrentUser()}queue(e){return this.operations=this.operations.then(e,e),this.operations}get assertedPersistence(){return ae(this.persistenceManager,this,"internal-error"),this.persistenceManager}_logFramework(e){!e||this.frameworks.includes(e)||(this.frameworks.push(e),this.frameworks.sort(),this.clientVersion=F_(this.config.clientPlatform,this._getFrameworks()))}_getFrameworks(){return this.frameworks}async _getAdditionalHeaders(){var e;const t={"X-Client-Version":this.clientVersion};this.app.options.appId&&(t["X-Firebase-gmpid"]=this.app.options.appId);const r=await((e=this.heartbeatServiceProvider.getImmediate({optional:!0}))===null||e===void 0?void 0:e.getHeartbeatsHeader());r&&(t["X-Firebase-Client"]=r);const i=await this._getAppCheckToken();return i&&(t["X-Firebase-AppCheck"]=i),t}async _getAppCheckToken(){var e;if(vr(this.app)&&this.app.settings.appCheckToken)return this.app.settings.appCheckToken;const t=await((e=this.appCheckServiceProvider.getImmediate({optional:!0}))===null||e===void 0?void 0:e.getToken());return t!=null&&t.error&&XI(`Error while retrieving App Check token: ${t.error}`),t==null?void 0:t.token}}function ms(n){return $t(n)}class Jf{constructor(e){this.auth=e,this.observer=null,this.addObserver=$T(t=>this.observer=t)}get next(){return ae(this.observer,this.auth,"internal-error"),this.observer.next.bind(this.observer)}}/**
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
 */let ru={async loadJS(){throw new Error("Unable to load external scripts")},recaptchaV2Script:"",recaptchaEnterpriseScript:"",gapiScript:""};function AA(n){ru=n}function U_(n){return ru.loadJS(n)}function bA(){return ru.recaptchaEnterpriseScript}function SA(){return ru.gapiScript}function RA(n){return`__${n}${Math.floor(Math.random()*1e6)}`}class CA{constructor(){this.enterprise=new PA}ready(e){e()}execute(e,t){return Promise.resolve("token")}render(e,t){return""}}class PA{ready(e){e()}execute(e,t){return Promise.resolve("token")}render(e,t){return""}}const kA="recaptcha-enterprise",$_="NO_RECAPTCHA";class NA{constructor(e){this.type=kA,this.auth=ms(e)}async verify(e="verify",t=!1){async function r(s){if(!t){if(s.tenantId==null&&s._agentRecaptchaConfig!=null)return s._agentRecaptchaConfig.siteKey;if(s.tenantId!=null&&s._tenantRecaptchaConfigs[s.tenantId]!==void 0)return s._tenantRecaptchaConfigs[s.tenantId].siteKey}return new Promise(async(a,l)=>{lA(s,{clientType:"CLIENT_TYPE_WEB",version:"RECAPTCHA_ENTERPRISE"}).then(c=>{if(c.recaptchaKey===void 0)l(new Error("recaptcha Enterprise site key undefined"));else{const h=new aA(c);return s.tenantId==null?s._agentRecaptchaConfig=h:s._tenantRecaptchaConfigs[s.tenantId]=h,a(h.siteKey)}}).catch(c=>{l(c)})})}function i(s,a,l){const c=window.grecaptcha;Wf(c)?c.enterprise.ready(()=>{c.enterprise.execute(s,{action:e}).then(h=>{a(h)}).catch(()=>{a($_)})}):l(Error("No reCAPTCHA enterprise script loaded."))}return this.auth.settings.appVerificationDisabledForTesting?new CA().execute("siteKey",{action:"verify"}):new Promise((s,a)=>{r(this.auth).then(l=>{if(!t&&Wf(window.grecaptcha))i(l,s,a);else{if(typeof window>"u"){a(new Error("RecaptchaVerifier is only supported in browser"));return}let c=bA();c.length!==0&&(c+=l),U_(c).then(()=>{i(l,s,a)}).catch(h=>{a(h)})}}).catch(l=>{a(l)})})}}async function Xf(n,e,t,r=!1,i=!1){const s=new NA(n);let a;if(i)a=$_;else try{a=await s.verify(t)}catch{a=await s.verify(t,!0)}const l=Object.assign({},e);if(t==="mfaSmsEnrollment"||t==="mfaSmsSignIn"){if("phoneEnrollmentInfo"in l){const c=l.phoneEnrollmentInfo.phoneNumber,h=l.phoneEnrollmentInfo.recaptchaToken;Object.assign(l,{phoneEnrollmentInfo:{phoneNumber:c,recaptchaToken:h,captchaResponse:a,clientType:"CLIENT_TYPE_WEB",recaptchaVersion:"RECAPTCHA_ENTERPRISE"}})}else if("phoneSignInInfo"in l){const c=l.phoneSignInInfo.recaptchaToken;Object.assign(l,{phoneSignInInfo:{recaptchaToken:c,captchaResponse:a,clientType:"CLIENT_TYPE_WEB",recaptchaVersion:"RECAPTCHA_ENTERPRISE"}})}return l}return r?Object.assign(l,{captchaResp:a}):Object.assign(l,{captchaResponse:a}),Object.assign(l,{clientType:"CLIENT_TYPE_WEB"}),Object.assign(l,{recaptchaVersion:"RECAPTCHA_ENTERPRISE"}),l}async function Sc(n,e,t,r,i){var s;if(!((s=n._getRecaptchaConfig())===null||s===void 0)&&s.isProviderEnabled("EMAIL_PASSWORD_PROVIDER")){const a=await Xf(n,e,t,t==="getOobCode");return r(n,a)}else return r(n,e).catch(async a=>{if(a.code==="auth/missing-recaptcha-token"){console.log(`${t} is protected by reCAPTCHA Enterprise for this project. Automatically triggering the reCAPTCHA flow and restarting the flow.`);const l=await Xf(n,e,t,t==="getOobCode");return r(n,l)}else return Promise.reject(a)})}/**
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
 */function DA(n,e){const t=vd(n,"auth");if(t.isInitialized()){const i=t.getImmediate(),s=t.getOptions();if(Hs(s,e??{}))return i;Lr(i,"already-initialized")}return t.initialize({options:e})}function OA(n,e){const t=(e==null?void 0:e.persistence)||[],r=(Array.isArray(t)?t:[t]).map(wi);e!=null&&e.errorMap&&n._updateErrorMap(e.errorMap),n._initializeWithPersistence(r,e==null?void 0:e.popupRedirectResolver)}function VA(n,e,t){const r=ms(n);ae(/^https?:\/\//.test(e),r,"invalid-emulator-scheme");const i=!1,s=q_(e),{host:a,port:l}=MA(e),c=l===null?"":`:${l}`,h={url:`${s}//${a}${c}/`},f=Object.freeze({host:a,port:l,protocol:s.replace(":",""),options:Object.freeze({disableWarnings:i})});if(!r._canInitEmulator){ae(r.config.emulator&&r.emulatorConfig,r,"emulator-config-failed"),ae(Hs(h,r.config.emulator)&&Hs(f,r.emulatorConfig),r,"emulator-config-failed");return}r.config.emulator=h,r.emulatorConfig=f,r.settings.appVerificationDisabledForTesting=!0,Xo(a)?(p_(`${s}//${a}${c}`),RT("Auth",!0)):xA()}function q_(n){const e=n.indexOf(":");return e<0?"":n.substr(0,e+1)}function MA(n){const e=q_(n),t=/(\/\/)?([^?#/]+)/.exec(n.substr(e.length));if(!t)return{host:"",port:null};const r=t[2].split("@").pop()||"",i=/^(\[[^\]]+\])(:|$)/.exec(r);if(i){const s=i[1];return{host:s,port:Zf(r.substr(s.length+1))}}else{const[s,a]=r.split(":");return{host:s,port:Zf(a)}}}function Zf(n){if(!n)return null;const e=Number(n);return isNaN(e)?null:e}function xA(){function n(){const e=document.createElement("p"),t=e.style;e.innerText="Running in emulator mode. Do not use with production credentials.",t.position="fixed",t.width="100%",t.backgroundColor="#ffffff",t.border=".1em solid #000000",t.color="#b50000",t.bottom="0px",t.left="0px",t.margin="0px",t.zIndex="10000",t.textAlign="center",e.classList.add("firebase-emulator-warning"),document.body.appendChild(e)}typeof console<"u"&&typeof console.info=="function"&&console.info("WARNING: You are using the Auth Emulator, which is intended for local testing only.  Do not use with production credentials."),typeof window<"u"&&typeof document<"u"&&(document.readyState==="loading"?window.addEventListener("DOMContentLoaded",n):n())}/**
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
 */class bd{constructor(e,t){this.providerId=e,this.signInMethod=t}toJSON(){return Ei("not implemented")}_getIdTokenResponse(e){return Ei("not implemented")}_linkToIdToken(e,t){return Ei("not implemented")}_getReauthenticationResolver(e){return Ei("not implemented")}}async function LA(n,e){return Di(n,"POST","/v1/accounts:signUp",e)}/**
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
 */async function FA(n,e){return ml(n,"POST","/v1/accounts:signInWithPassword",Ni(n,e))}async function UA(n,e){return Di(n,"POST","/v1/accounts:sendOobCode",Ni(n,e))}async function $A(n,e){return UA(n,e)}/**
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
 */async function qA(n,e){return ml(n,"POST","/v1/accounts:signInWithEmailLink",Ni(n,e))}async function BA(n,e){return ml(n,"POST","/v1/accounts:signInWithEmailLink",Ni(n,e))}/**
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
 */class Ka extends bd{constructor(e,t,r,i=null){super("password",r),this._email=e,this._password=t,this._tenantId=i}static _fromEmailAndPassword(e,t){return new Ka(e,t,"password")}static _fromEmailAndCode(e,t,r=null){return new Ka(e,t,"emailLink",r)}toJSON(){return{email:this._email,password:this._password,signInMethod:this.signInMethod,tenantId:this._tenantId}}static fromJSON(e){const t=typeof e=="string"?JSON.parse(e):e;if(t!=null&&t.email&&(t!=null&&t.password)){if(t.signInMethod==="password")return this._fromEmailAndPassword(t.email,t.password);if(t.signInMethod==="emailLink")return this._fromEmailAndCode(t.email,t.password,t.tenantId)}return null}async _getIdTokenResponse(e){switch(this.signInMethod){case"password":const t={returnSecureToken:!0,email:this._email,password:this._password,clientType:"CLIENT_TYPE_WEB"};return Sc(e,t,"signInWithPassword",FA);case"emailLink":return qA(e,{email:this._email,oobCode:this._password});default:Lr(e,"internal-error")}}async _linkToIdToken(e,t){switch(this.signInMethod){case"password":const r={idToken:t,returnSecureToken:!0,email:this._email,password:this._password,clientType:"CLIENT_TYPE_WEB"};return Sc(e,r,"signUpPassword",LA);case"emailLink":return BA(e,{idToken:t,email:this._email,oobCode:this._password});default:Lr(e,"internal-error")}}_getReauthenticationResolver(e){return this._getIdTokenResponse(e)}}/**
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
 */async function Io(n,e){return ml(n,"POST","/v1/accounts:signInWithIdp",Ni(n,e))}/**
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
 */const zA="http://localhost";class Ws extends bd{constructor(){super(...arguments),this.pendingToken=null}static _fromParams(e){const t=new Ws(e.providerId,e.signInMethod);return e.idToken||e.accessToken?(e.idToken&&(t.idToken=e.idToken),e.accessToken&&(t.accessToken=e.accessToken),e.nonce&&!e.pendingToken&&(t.nonce=e.nonce),e.pendingToken&&(t.pendingToken=e.pendingToken)):e.oauthToken&&e.oauthTokenSecret?(t.accessToken=e.oauthToken,t.secret=e.oauthTokenSecret):Lr("argument-error"),t}toJSON(){return{idToken:this.idToken,accessToken:this.accessToken,secret:this.secret,nonce:this.nonce,pendingToken:this.pendingToken,providerId:this.providerId,signInMethod:this.signInMethod}}static fromJSON(e){const t=typeof e=="string"?JSON.parse(e):e,{providerId:r,signInMethod:i}=t,s=Ed(t,["providerId","signInMethod"]);if(!r||!i)return null;const a=new Ws(r,i);return a.idToken=s.idToken||void 0,a.accessToken=s.accessToken||void 0,a.secret=s.secret,a.nonce=s.nonce,a.pendingToken=s.pendingToken||null,a}_getIdTokenResponse(e){const t=this.buildRequest();return Io(e,t)}_linkToIdToken(e,t){const r=this.buildRequest();return r.idToken=t,Io(e,r)}_getReauthenticationResolver(e){const t=this.buildRequest();return t.autoCreate=!1,Io(e,t)}buildRequest(){const e={requestUri:zA,returnSecureToken:!0};if(this.pendingToken)e.pendingToken=this.pendingToken;else{const t={};this.idToken&&(t.id_token=this.idToken),this.accessToken&&(t.access_token=this.accessToken),this.secret&&(t.oauth_token_secret=this.secret),t.providerId=this.providerId,this.nonce&&!this.pendingToken&&(t.nonce=this.nonce),e.postBody=fl(t)}return e}}/**
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
 */function jA(n){switch(n){case"recoverEmail":return"RECOVER_EMAIL";case"resetPassword":return"PASSWORD_RESET";case"signIn":return"EMAIL_SIGNIN";case"verifyEmail":return"VERIFY_EMAIL";case"verifyAndChangeEmail":return"VERIFY_AND_CHANGE_EMAIL";case"revertSecondFactorAddition":return"REVERT_SECOND_FACTOR_ADDITION";default:return null}}function HA(n){const e=Sa(Ra(n)).link,t=e?Sa(Ra(e)).deep_link_id:null,r=Sa(Ra(n)).deep_link_id;return(r?Sa(Ra(r)).link:null)||r||t||e||n}class Sd{constructor(e){var t,r,i,s,a,l;const c=Sa(Ra(e)),h=(t=c.apiKey)!==null&&t!==void 0?t:null,f=(r=c.oobCode)!==null&&r!==void 0?r:null,g=jA((i=c.mode)!==null&&i!==void 0?i:null);ae(h&&f&&g,"argument-error"),this.apiKey=h,this.operation=g,this.code=f,this.continueUrl=(s=c.continueUrl)!==null&&s!==void 0?s:null,this.languageCode=(a=c.lang)!==null&&a!==void 0?a:null,this.tenantId=(l=c.tenantId)!==null&&l!==void 0?l:null}static parseLink(e){const t=HA(e);try{return new Sd(t)}catch{return null}}}/**
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
 */class ta{constructor(){this.providerId=ta.PROVIDER_ID}static credential(e,t){return Ka._fromEmailAndPassword(e,t)}static credentialWithLink(e,t){const r=Sd.parseLink(t);return ae(r,"argument-error"),Ka._fromEmailAndCode(e,r.code,r.tenantId)}}ta.PROVIDER_ID="password";ta.EMAIL_PASSWORD_SIGN_IN_METHOD="password";ta.EMAIL_LINK_SIGN_IN_METHOD="emailLink";/**
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
 */class B_{constructor(e){this.providerId=e,this.defaultLanguageCode=null,this.customParameters={}}setDefaultLanguage(e){this.defaultLanguageCode=e}setCustomParameters(e){return this.customParameters=e,this}getCustomParameters(){return this.customParameters}}/**
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
 */class gl extends B_{constructor(){super(...arguments),this.scopes=[]}addScope(e){return this.scopes.includes(e)||this.scopes.push(e),this}getScopes(){return[...this.scopes]}}/**
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
 */class ji extends gl{constructor(){super("facebook.com")}static credential(e){return Ws._fromParams({providerId:ji.PROVIDER_ID,signInMethod:ji.FACEBOOK_SIGN_IN_METHOD,accessToken:e})}static credentialFromResult(e){return ji.credentialFromTaggedObject(e)}static credentialFromError(e){return ji.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e||!("oauthAccessToken"in e)||!e.oauthAccessToken)return null;try{return ji.credential(e.oauthAccessToken)}catch{return null}}}ji.FACEBOOK_SIGN_IN_METHOD="facebook.com";ji.PROVIDER_ID="facebook.com";/**
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
 */class Hi extends gl{constructor(){super("google.com"),this.addScope("profile")}static credential(e,t){return Ws._fromParams({providerId:Hi.PROVIDER_ID,signInMethod:Hi.GOOGLE_SIGN_IN_METHOD,idToken:e,accessToken:t})}static credentialFromResult(e){return Hi.credentialFromTaggedObject(e)}static credentialFromError(e){return Hi.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e)return null;const{oauthIdToken:t,oauthAccessToken:r}=e;if(!t&&!r)return null;try{return Hi.credential(t,r)}catch{return null}}}Hi.GOOGLE_SIGN_IN_METHOD="google.com";Hi.PROVIDER_ID="google.com";/**
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
 */class Wi extends gl{constructor(){super("github.com")}static credential(e){return Ws._fromParams({providerId:Wi.PROVIDER_ID,signInMethod:Wi.GITHUB_SIGN_IN_METHOD,accessToken:e})}static credentialFromResult(e){return Wi.credentialFromTaggedObject(e)}static credentialFromError(e){return Wi.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e||!("oauthAccessToken"in e)||!e.oauthAccessToken)return null;try{return Wi.credential(e.oauthAccessToken)}catch{return null}}}Wi.GITHUB_SIGN_IN_METHOD="github.com";Wi.PROVIDER_ID="github.com";/**
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
 */class Gi extends gl{constructor(){super("twitter.com")}static credential(e,t){return Ws._fromParams({providerId:Gi.PROVIDER_ID,signInMethod:Gi.TWITTER_SIGN_IN_METHOD,oauthToken:e,oauthTokenSecret:t})}static credentialFromResult(e){return Gi.credentialFromTaggedObject(e)}static credentialFromError(e){return Gi.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e)return null;const{oauthAccessToken:t,oauthTokenSecret:r}=e;if(!t||!r)return null;try{return Gi.credential(t,r)}catch{return null}}}Gi.TWITTER_SIGN_IN_METHOD="twitter.com";Gi.PROVIDER_ID="twitter.com";/**
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
 */async function WA(n,e){return ml(n,"POST","/v1/accounts:signUp",Ni(n,e))}/**
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
 */class Gs{constructor(e){this.user=e.user,this.providerId=e.providerId,this._tokenResponse=e._tokenResponse,this.operationType=e.operationType}static async _fromIdTokenResponse(e,t,r,i=!1){const s=await Or._fromIdTokenResponse(e,r,i),a=ep(r);return new Gs({user:s,providerId:a,_tokenResponse:r,operationType:t})}static async _forOperation(e,t,r){await e._updateTokensIfNecessary(r,!0);const i=ep(r);return new Gs({user:e,providerId:i,_tokenResponse:r,operationType:t})}}function ep(n){return n.providerId?n.providerId:"phoneNumber"in n?"phone":null}/**
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
 */class Rc extends ki{constructor(e,t,r,i){var s;super(t.code,t.message),this.operationType=r,this.user=i,Object.setPrototypeOf(this,Rc.prototype),this.customData={appName:e.name,tenantId:(s=e.tenantId)!==null&&s!==void 0?s:void 0,_serverResponse:t.customData._serverResponse,operationType:r}}static _fromErrorAndOperation(e,t,r,i){return new Rc(e,t,r,i)}}function z_(n,e,t,r){return(e==="reauthenticate"?t._getReauthenticationResolver(n):t._getIdTokenResponse(n)).catch(s=>{throw s.code==="auth/multi-factor-auth-required"?Rc._fromErrorAndOperation(n,s,e,r):s})}async function GA(n,e,t=!1){const r=await Ga(n,e._linkToIdToken(n.auth,await n.getIdToken()),t);return Gs._forOperation(n,"link",r)}/**
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
 */async function KA(n,e,t=!1){const{auth:r}=n;if(vr(r.app))return Promise.reject(Ii(r));const i="reauthenticate";try{const s=await Ga(n,z_(r,i,e,n),t);ae(s.idToken,r,"internal-error");const a=Id(s.idToken);ae(a,r,"internal-error");const{sub:l}=a;return ae(n.uid===l,r,"user-mismatch"),Gs._forOperation(n,i,s)}catch(s){throw(s==null?void 0:s.code)==="auth/user-not-found"&&Lr(r,"user-mismatch"),s}}/**
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
 */async function j_(n,e,t=!1){if(vr(n.app))return Promise.reject(Ii(n));const r="signIn",i=await z_(n,r,e),s=await Gs._fromIdTokenResponse(n,r,i);return t||await n._updateCurrentUser(s.user),s}async function QA(n,e){return j_(ms(n),e)}/**
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
 */async function H_(n){const e=ms(n);e._getPasswordPolicyInternal()&&await e._updatePasswordPolicy()}async function YA(n,e,t){const r=ms(n);await Sc(r,{requestType:"PASSWORD_RESET",email:e,clientType:"CLIENT_TYPE_WEB"},"getOobCode",$A)}async function JA(n,e,t){if(vr(n.app))return Promise.reject(Ii(n));const r=ms(n),a=await Sc(r,{returnSecureToken:!0,email:e,password:t,clientType:"CLIENT_TYPE_WEB"},"signUpPassword",WA).catch(c=>{throw c.code==="auth/password-does-not-meet-requirements"&&H_(n),c}),l=await Gs._fromIdTokenResponse(r,"signIn",a);return await r._updateCurrentUser(l.user),l}function W_(n,e,t){return vr(n.app)?Promise.reject(Ii(n)):QA($t(n),ta.credential(e,t)).catch(async r=>{throw r.code==="auth/password-does-not-meet-requirements"&&H_(n),r})}function XA(n,e,t,r){return $t(n).onIdTokenChanged(e,t,r)}function ZA(n,e,t){return $t(n).beforeAuthStateChanged(e,t)}function e0(n,e,t,r){return $t(n).onAuthStateChanged(e,t,r)}function G_(n){return $t(n).signOut()}async function t0(n){return $t(n).delete()}const Cc="__sak";/**
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
 */class K_{constructor(e,t){this.storageRetriever=e,this.type=t}_isAvailable(){try{return this.storage?(this.storage.setItem(Cc,"1"),this.storage.removeItem(Cc),Promise.resolve(!0)):Promise.resolve(!1)}catch{return Promise.resolve(!1)}}_set(e,t){return this.storage.setItem(e,JSON.stringify(t)),Promise.resolve()}_get(e){const t=this.storage.getItem(e);return Promise.resolve(t?JSON.parse(t):null)}_remove(e){return this.storage.removeItem(e),Promise.resolve()}get storage(){return this.storageRetriever()}}/**
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
 */const n0=1e3,r0=10;class Q_ extends K_{constructor(){super(()=>window.localStorage,"LOCAL"),this.boundEventHandler=(e,t)=>this.onStorageEvent(e,t),this.listeners={},this.localCache={},this.pollTimer=null,this.fallbackToPolling=L_(),this._shouldAllowMigration=!0}forAllChangedKeys(e){for(const t of Object.keys(this.listeners)){const r=this.storage.getItem(t),i=this.localCache[t];r!==i&&e(t,i,r)}}onStorageEvent(e,t=!1){if(!e.key){this.forAllChangedKeys((a,l,c)=>{this.notifyListeners(a,c)});return}const r=e.key;t?this.detachListener():this.stopPolling();const i=()=>{const a=this.storage.getItem(r);!t&&this.localCache[r]===a||this.notifyListeners(r,a)},s=this.storage.getItem(r);vA()&&s!==e.newValue&&e.newValue!==e.oldValue?setTimeout(i,r0):i()}notifyListeners(e,t){this.localCache[e]=t;const r=this.listeners[e];if(r)for(const i of Array.from(r))i(t&&JSON.parse(t))}startPolling(){this.stopPolling(),this.pollTimer=setInterval(()=>{this.forAllChangedKeys((e,t,r)=>{this.onStorageEvent(new StorageEvent("storage",{key:e,oldValue:t,newValue:r}),!0)})},n0)}stopPolling(){this.pollTimer&&(clearInterval(this.pollTimer),this.pollTimer=null)}attachListener(){window.addEventListener("storage",this.boundEventHandler)}detachListener(){window.removeEventListener("storage",this.boundEventHandler)}_addListener(e,t){Object.keys(this.listeners).length===0&&(this.fallbackToPolling?this.startPolling():this.attachListener()),this.listeners[e]||(this.listeners[e]=new Set,this.localCache[e]=this.storage.getItem(e)),this.listeners[e].add(t)}_removeListener(e,t){this.listeners[e]&&(this.listeners[e].delete(t),this.listeners[e].size===0&&delete this.listeners[e]),Object.keys(this.listeners).length===0&&(this.detachListener(),this.stopPolling())}async _set(e,t){await super._set(e,t),this.localCache[e]=JSON.stringify(t)}async _get(e){const t=await super._get(e);return this.localCache[e]=JSON.stringify(t),t}async _remove(e){await super._remove(e),delete this.localCache[e]}}Q_.type="LOCAL";const i0=Q_;/**
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
 */class Y_ extends K_{constructor(){super(()=>window.sessionStorage,"SESSION")}_addListener(e,t){}_removeListener(e,t){}}Y_.type="SESSION";const J_=Y_;/**
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
 */function s0(n){return Promise.all(n.map(async e=>{try{return{fulfilled:!0,value:await e}}catch(t){return{fulfilled:!1,reason:t}}}))}/**
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
 */class iu{constructor(e){this.eventTarget=e,this.handlersMap={},this.boundEventHandler=this.handleEvent.bind(this)}static _getInstance(e){const t=this.receivers.find(i=>i.isListeningto(e));if(t)return t;const r=new iu(e);return this.receivers.push(r),r}isListeningto(e){return this.eventTarget===e}async handleEvent(e){const t=e,{eventId:r,eventType:i,data:s}=t.data,a=this.handlersMap[i];if(!(a!=null&&a.size))return;t.ports[0].postMessage({status:"ack",eventId:r,eventType:i});const l=Array.from(a).map(async h=>h(t.origin,s)),c=await s0(l);t.ports[0].postMessage({status:"done",eventId:r,eventType:i,response:c})}_subscribe(e,t){Object.keys(this.handlersMap).length===0&&this.eventTarget.addEventListener("message",this.boundEventHandler),this.handlersMap[e]||(this.handlersMap[e]=new Set),this.handlersMap[e].add(t)}_unsubscribe(e,t){this.handlersMap[e]&&t&&this.handlersMap[e].delete(t),(!t||this.handlersMap[e].size===0)&&delete this.handlersMap[e],Object.keys(this.handlersMap).length===0&&this.eventTarget.removeEventListener("message",this.boundEventHandler)}}iu.receivers=[];/**
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
 */function Rd(n="",e=10){let t="";for(let r=0;r<e;r++)t+=Math.floor(Math.random()*10);return n+t}/**
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
 */class o0{constructor(e){this.target=e,this.handlers=new Set}removeMessageHandler(e){e.messageChannel&&(e.messageChannel.port1.removeEventListener("message",e.onMessage),e.messageChannel.port1.close()),this.handlers.delete(e)}async _send(e,t,r=50){const i=typeof MessageChannel<"u"?new MessageChannel:null;if(!i)throw new Error("connection_unavailable");let s,a;return new Promise((l,c)=>{const h=Rd("",20);i.port1.start();const f=setTimeout(()=>{c(new Error("unsupported_event"))},r);a={messageChannel:i,onMessage(g){const _=g;if(_.data.eventId===h)switch(_.data.status){case"ack":clearTimeout(f),s=setTimeout(()=>{c(new Error("timeout"))},3e3);break;case"done":clearTimeout(s),l(_.data.response);break;default:clearTimeout(f),clearTimeout(s),c(new Error("invalid_response"));break}}},this.handlers.add(a),i.port1.addEventListener("message",a.onMessage),this.target.postMessage({eventType:e,eventId:h,data:t},[i.port2])}).finally(()=>{a&&this.removeMessageHandler(a)})}}/**
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
 */function ei(){return window}function a0(n){ei().location.href=n}/**
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
 */function X_(){return typeof ei().WorkerGlobalScope<"u"&&typeof ei().importScripts=="function"}async function l0(){if(!(navigator!=null&&navigator.serviceWorker))return null;try{return(await navigator.serviceWorker.ready).active}catch{return null}}function c0(){var n;return((n=navigator==null?void 0:navigator.serviceWorker)===null||n===void 0?void 0:n.controller)||null}function u0(){return X_()?self:null}/**
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
 */const Z_="firebaseLocalStorageDb",h0=1,Pc="firebaseLocalStorage",ev="fbase_key";class _l{constructor(e){this.request=e}toPromise(){return new Promise((e,t)=>{this.request.addEventListener("success",()=>{e(this.request.result)}),this.request.addEventListener("error",()=>{t(this.request.error)})})}}function su(n,e){return n.transaction([Pc],e?"readwrite":"readonly").objectStore(Pc)}function d0(){const n=indexedDB.deleteDatabase(Z_);return new _l(n).toPromise()}function Vh(){const n=indexedDB.open(Z_,h0);return new Promise((e,t)=>{n.addEventListener("error",()=>{t(n.error)}),n.addEventListener("upgradeneeded",()=>{const r=n.result;try{r.createObjectStore(Pc,{keyPath:ev})}catch(i){t(i)}}),n.addEventListener("success",async()=>{const r=n.result;r.objectStoreNames.contains(Pc)?e(r):(r.close(),await d0(),e(await Vh()))})})}async function tp(n,e,t){const r=su(n,!0).put({[ev]:e,value:t});return new _l(r).toPromise()}async function f0(n,e){const t=su(n,!1).get(e),r=await new _l(t).toPromise();return r===void 0?null:r.value}function np(n,e){const t=su(n,!0).delete(e);return new _l(t).toPromise()}const p0=800,m0=3;class tv{constructor(){this.type="LOCAL",this._shouldAllowMigration=!0,this.listeners={},this.localCache={},this.pollTimer=null,this.pendingWrites=0,this.receiver=null,this.sender=null,this.serviceWorkerReceiverAvailable=!1,this.activeServiceWorker=null,this._workerInitializationPromise=this.initializeServiceWorkerMessaging().then(()=>{},()=>{})}async _openDb(){return this.db?this.db:(this.db=await Vh(),this.db)}async _withRetries(e){let t=0;for(;;)try{const r=await this._openDb();return await e(r)}catch(r){if(t++>m0)throw r;this.db&&(this.db.close(),this.db=void 0)}}async initializeServiceWorkerMessaging(){return X_()?this.initializeReceiver():this.initializeSender()}async initializeReceiver(){this.receiver=iu._getInstance(u0()),this.receiver._subscribe("keyChanged",async(e,t)=>({keyProcessed:(await this._poll()).includes(t.key)})),this.receiver._subscribe("ping",async(e,t)=>["keyChanged"])}async initializeSender(){var e,t;if(this.activeServiceWorker=await l0(),!this.activeServiceWorker)return;this.sender=new o0(this.activeServiceWorker);const r=await this.sender._send("ping",{},800);r&&!((e=r[0])===null||e===void 0)&&e.fulfilled&&!((t=r[0])===null||t===void 0)&&t.value.includes("keyChanged")&&(this.serviceWorkerReceiverAvailable=!0)}async notifyServiceWorker(e){if(!(!this.sender||!this.activeServiceWorker||c0()!==this.activeServiceWorker))try{await this.sender._send("keyChanged",{key:e},this.serviceWorkerReceiverAvailable?800:50)}catch{}}async _isAvailable(){try{if(!indexedDB)return!1;const e=await Vh();return await tp(e,Cc,"1"),await np(e,Cc),!0}catch{}return!1}async _withPendingWrite(e){this.pendingWrites++;try{await e()}finally{this.pendingWrites--}}async _set(e,t){return this._withPendingWrite(async()=>(await this._withRetries(r=>tp(r,e,t)),this.localCache[e]=t,this.notifyServiceWorker(e)))}async _get(e){const t=await this._withRetries(r=>f0(r,e));return this.localCache[e]=t,t}async _remove(e){return this._withPendingWrite(async()=>(await this._withRetries(t=>np(t,e)),delete this.localCache[e],this.notifyServiceWorker(e)))}async _poll(){const e=await this._withRetries(i=>{const s=su(i,!1).getAll();return new _l(s).toPromise()});if(!e)return[];if(this.pendingWrites!==0)return[];const t=[],r=new Set;if(e.length!==0)for(const{fbase_key:i,value:s}of e)r.add(i),JSON.stringify(this.localCache[i])!==JSON.stringify(s)&&(this.notifyListeners(i,s),t.push(i));for(const i of Object.keys(this.localCache))this.localCache[i]&&!r.has(i)&&(this.notifyListeners(i,null),t.push(i));return t}notifyListeners(e,t){this.localCache[e]=t;const r=this.listeners[e];if(r)for(const i of Array.from(r))i(t)}startPolling(){this.stopPolling(),this.pollTimer=setInterval(async()=>this._poll(),p0)}stopPolling(){this.pollTimer&&(clearInterval(this.pollTimer),this.pollTimer=null)}_addListener(e,t){Object.keys(this.listeners).length===0&&this.startPolling(),this.listeners[e]||(this.listeners[e]=new Set,this._get(e)),this.listeners[e].add(t)}_removeListener(e,t){this.listeners[e]&&(this.listeners[e].delete(t),this.listeners[e].size===0&&delete this.listeners[e]),Object.keys(this.listeners).length===0&&this.stopPolling()}}tv.type="LOCAL";const g0=tv;new pl(3e4,6e4);/**
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
 */function _0(n,e){return e?wi(e):(ae(n._popupRedirectResolver,n,"argument-error"),n._popupRedirectResolver)}/**
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
 */class Cd extends bd{constructor(e){super("custom","custom"),this.params=e}_getIdTokenResponse(e){return Io(e,this._buildIdpRequest())}_linkToIdToken(e,t){return Io(e,this._buildIdpRequest(t))}_getReauthenticationResolver(e){return Io(e,this._buildIdpRequest())}_buildIdpRequest(e){const t={requestUri:this.params.requestUri,sessionId:this.params.sessionId,postBody:this.params.postBody,tenantId:this.params.tenantId,pendingToken:this.params.pendingToken,returnSecureToken:!0,returnIdpCredential:!0};return e&&(t.idToken=e),t}}function v0(n){return j_(n.auth,new Cd(n),n.bypassAuthState)}function y0(n){const{auth:e,user:t}=n;return ae(t,e,"internal-error"),KA(t,new Cd(n),n.bypassAuthState)}async function E0(n){const{auth:e,user:t}=n;return ae(t,e,"internal-error"),GA(t,new Cd(n),n.bypassAuthState)}/**
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
 */class nv{constructor(e,t,r,i,s=!1){this.auth=e,this.resolver=r,this.user=i,this.bypassAuthState=s,this.pendingPromise=null,this.eventManager=null,this.filter=Array.isArray(t)?t:[t]}execute(){return new Promise(async(e,t)=>{this.pendingPromise={resolve:e,reject:t};try{this.eventManager=await this.resolver._initialize(this.auth),await this.onExecution(),this.eventManager.registerConsumer(this)}catch(r){this.reject(r)}})}async onAuthEvent(e){const{urlResponse:t,sessionId:r,postBody:i,tenantId:s,error:a,type:l}=e;if(a){this.reject(a);return}const c={auth:this.auth,requestUri:t,sessionId:r,tenantId:s||void 0,postBody:i||void 0,user:this.user,bypassAuthState:this.bypassAuthState};try{this.resolve(await this.getIdpTask(l)(c))}catch(h){this.reject(h)}}onError(e){this.reject(e)}getIdpTask(e){switch(e){case"signInViaPopup":case"signInViaRedirect":return v0;case"linkViaPopup":case"linkViaRedirect":return E0;case"reauthViaPopup":case"reauthViaRedirect":return y0;default:Lr(this.auth,"internal-error")}}resolve(e){Ci(this.pendingPromise,"Pending promise was never set"),this.pendingPromise.resolve(e),this.unregisterAndCleanUp()}reject(e){Ci(this.pendingPromise,"Pending promise was never set"),this.pendingPromise.reject(e),this.unregisterAndCleanUp()}unregisterAndCleanUp(){this.eventManager&&this.eventManager.unregisterConsumer(this),this.pendingPromise=null,this.cleanUp()}}/**
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
 */const w0=new pl(2e3,1e4);class go extends nv{constructor(e,t,r,i,s){super(e,t,i,s),this.provider=r,this.authWindow=null,this.pollId=null,go.currentPopupAction&&go.currentPopupAction.cancel(),go.currentPopupAction=this}async executeNotNull(){const e=await this.execute();return ae(e,this.auth,"internal-error"),e}async onExecution(){Ci(this.filter.length===1,"Popup operations only handle one event");const e=Rd();this.authWindow=await this.resolver._openPopup(this.auth,this.provider,this.filter[0],e),this.authWindow.associatedEvent=e,this.resolver._originValidation(this.auth).catch(t=>{this.reject(t)}),this.resolver._isIframeWebStorageSupported(this.auth,t=>{t||this.reject(Zr(this.auth,"web-storage-unsupported"))}),this.pollUserCancellation()}get eventId(){var e;return((e=this.authWindow)===null||e===void 0?void 0:e.associatedEvent)||null}cancel(){this.reject(Zr(this.auth,"cancelled-popup-request"))}cleanUp(){this.authWindow&&this.authWindow.close(),this.pollId&&window.clearTimeout(this.pollId),this.authWindow=null,this.pollId=null,go.currentPopupAction=null}pollUserCancellation(){const e=()=>{var t,r;if(!((r=(t=this.authWindow)===null||t===void 0?void 0:t.window)===null||r===void 0)&&r.closed){this.pollId=window.setTimeout(()=>{this.pollId=null,this.reject(Zr(this.auth,"popup-closed-by-user"))},8e3);return}this.pollId=window.setTimeout(e,w0.get())};e()}}go.currentPopupAction=null;/**
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
 */const T0="pendingRedirect",cc=new Map;class I0 extends nv{constructor(e,t,r=!1){super(e,["signInViaRedirect","linkViaRedirect","reauthViaRedirect","unknown"],t,void 0,r),this.eventId=null}async execute(){let e=cc.get(this.auth._key());if(!e){try{const r=await A0(this.resolver,this.auth)?await super.execute():null;e=()=>Promise.resolve(r)}catch(t){e=()=>Promise.reject(t)}cc.set(this.auth._key(),e)}return this.bypassAuthState||cc.set(this.auth._key(),()=>Promise.resolve(null)),e()}async onAuthEvent(e){if(e.type==="signInViaRedirect")return super.onAuthEvent(e);if(e.type==="unknown"){this.resolve(null);return}if(e.eventId){const t=await this.auth._redirectUserForId(e.eventId);if(t)return this.user=t,super.onAuthEvent(e);this.resolve(null)}}async onExecution(){}cleanUp(){}}async function A0(n,e){const t=R0(e),r=S0(n);if(!await r._isAvailable())return!1;const i=await r._get(t)==="true";return await r._remove(t),i}function b0(n,e){cc.set(n._key(),e)}function S0(n){return wi(n._redirectPersistence)}function R0(n){return lc(T0,n.config.apiKey,n.name)}async function C0(n,e,t=!1){if(vr(n.app))return Promise.reject(Ii(n));const r=ms(n),i=_0(r,e),a=await new I0(r,i,t).execute();return a&&!t&&(delete a.user._redirectEventId,await r._persistUserIfCurrent(a.user),await r._setRedirectUser(null,e)),a}/**
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
 */const P0=600*1e3;class k0{constructor(e){this.auth=e,this.cachedEventUids=new Set,this.consumers=new Set,this.queuedRedirectEvent=null,this.hasHandledPotentialRedirect=!1,this.lastProcessedEventTime=Date.now()}registerConsumer(e){this.consumers.add(e),this.queuedRedirectEvent&&this.isEventForConsumer(this.queuedRedirectEvent,e)&&(this.sendToConsumer(this.queuedRedirectEvent,e),this.saveEventToCache(this.queuedRedirectEvent),this.queuedRedirectEvent=null)}unregisterConsumer(e){this.consumers.delete(e)}onEvent(e){if(this.hasEventBeenHandled(e))return!1;let t=!1;return this.consumers.forEach(r=>{this.isEventForConsumer(e,r)&&(t=!0,this.sendToConsumer(e,r),this.saveEventToCache(e))}),this.hasHandledPotentialRedirect||!N0(e)||(this.hasHandledPotentialRedirect=!0,t||(this.queuedRedirectEvent=e,t=!0)),t}sendToConsumer(e,t){var r;if(e.error&&!rv(e)){const i=((r=e.error.code)===null||r===void 0?void 0:r.split("auth/")[1])||"internal-error";t.onError(Zr(this.auth,i))}else t.onAuthEvent(e)}isEventForConsumer(e,t){const r=t.eventId===null||!!e.eventId&&e.eventId===t.eventId;return t.filter.includes(e.type)&&r}hasEventBeenHandled(e){return Date.now()-this.lastProcessedEventTime>=P0&&this.cachedEventUids.clear(),this.cachedEventUids.has(rp(e))}saveEventToCache(e){this.cachedEventUids.add(rp(e)),this.lastProcessedEventTime=Date.now()}}function rp(n){return[n.type,n.eventId,n.sessionId,n.tenantId].filter(e=>e).join("-")}function rv({type:n,error:e}){return n==="unknown"&&(e==null?void 0:e.code)==="auth/no-auth-event"}function N0(n){switch(n.type){case"signInViaRedirect":case"linkViaRedirect":case"reauthViaRedirect":return!0;case"unknown":return rv(n);default:return!1}}/**
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
 */async function D0(n,e={}){return Di(n,"GET","/v1/projects",e)}/**
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
 */const O0=/^\d{1,3}\.\d{1,3}\.\d{1,3}\.\d{1,3}$/,V0=/^https?/;async function M0(n){if(n.config.emulator)return;const{authorizedDomains:e}=await D0(n);for(const t of e)try{if(x0(t))return}catch{}Lr(n,"unauthorized-domain")}function x0(n){const e=Dh(),{protocol:t,hostname:r}=new URL(e);if(n.startsWith("chrome-extension://")){const a=new URL(n);return a.hostname===""&&r===""?t==="chrome-extension:"&&n.replace("chrome-extension://","")===e.replace("chrome-extension://",""):t==="chrome-extension:"&&a.hostname===r}if(!V0.test(t))return!1;if(O0.test(n))return r===n;const i=n.replace(/\./g,"\\.");return new RegExp("^(.+\\."+i+"|"+i+")$","i").test(r)}/**
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
 */const L0=new pl(3e4,6e4);function ip(){const n=ei().___jsl;if(n!=null&&n.H){for(const e of Object.keys(n.H))if(n.H[e].r=n.H[e].r||[],n.H[e].L=n.H[e].L||[],n.H[e].r=[...n.H[e].L],n.CP)for(let t=0;t<n.CP.length;t++)n.CP[t]=null}}function F0(n){return new Promise((e,t)=>{var r,i,s;function a(){ip(),gapi.load("gapi.iframes",{callback:()=>{e(gapi.iframes.getContext())},ontimeout:()=>{ip(),t(Zr(n,"network-request-failed"))},timeout:L0.get()})}if(!((i=(r=ei().gapi)===null||r===void 0?void 0:r.iframes)===null||i===void 0)&&i.Iframe)e(gapi.iframes.getContext());else if(!((s=ei().gapi)===null||s===void 0)&&s.load)a();else{const l=RA("iframefcb");return ei()[l]=()=>{gapi.load?a():t(Zr(n,"network-request-failed"))},U_(`${SA()}?onload=${l}`).catch(c=>t(c))}}).catch(e=>{throw uc=null,e})}let uc=null;function U0(n){return uc=uc||F0(n),uc}/**
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
 */const $0=new pl(5e3,15e3),q0="__/auth/iframe",B0="emulator/auth/iframe",z0={style:{position:"absolute",top:"-100px",width:"1px",height:"1px"},"aria-hidden":"true",tabindex:"-1"},j0=new Map([["identitytoolkit.googleapis.com","p"],["staging-identitytoolkit.sandbox.googleapis.com","s"],["test-identitytoolkit.sandbox.googleapis.com","t"]]);function H0(n){const e=n.config;ae(e.authDomain,n,"auth-domain-config-required");const t=e.emulator?Td(e,B0):`https://${n.config.authDomain}/${q0}`,r={apiKey:e.apiKey,appName:n.name,v:ea},i=j0.get(n.config.apiHost);i&&(r.eid=i);const s=n._getFrameworks();return s.length&&(r.fw=s.join(",")),`${t}?${fl(r).slice(1)}`}async function W0(n){const e=await U0(n),t=ei().gapi;return ae(t,n,"internal-error"),e.open({where:document.body,url:H0(n),messageHandlersFilter:t.iframes.CROSS_ORIGIN_IFRAMES_FILTER,attributes:z0,dontclear:!0},r=>new Promise(async(i,s)=>{await r.restyle({setHideOnLeave:!1});const a=Zr(n,"network-request-failed"),l=ei().setTimeout(()=>{s(a)},$0.get());function c(){ei().clearTimeout(l),i(r)}r.ping(c).then(c,()=>{s(a)})}))}/**
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
 */const G0={location:"yes",resizable:"yes",statusbar:"yes",toolbar:"no"},K0=500,Q0=600,Y0="_blank",J0="http://localhost";class sp{constructor(e){this.window=e,this.associatedEvent=null}close(){if(this.window)try{this.window.close()}catch{}}}function X0(n,e,t,r=K0,i=Q0){const s=Math.max((window.screen.availHeight-i)/2,0).toString(),a=Math.max((window.screen.availWidth-r)/2,0).toString();let l="";const c=Object.assign(Object.assign({},G0),{width:r.toString(),height:i.toString(),top:s,left:a}),h=Dn().toLowerCase();t&&(l=D_(h)?Y0:t),k_(h)&&(e=e||J0,c.scrollbars="yes");const f=Object.entries(c).reduce((_,[E,S])=>`${_}${E}=${S},`,"");if(_A(h)&&l!=="_self")return Z0(e||"",l),new sp(null);const g=window.open(e||"",l,f);ae(g,n,"popup-blocked");try{g.focus()}catch{}return new sp(g)}function Z0(n,e){const t=document.createElement("a");t.href=n,t.target=e;const r=document.createEvent("MouseEvent");r.initMouseEvent("click",!0,!0,window,1,0,0,0,0,!1,!1,!1,!1,1,null),t.dispatchEvent(r)}/**
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
 */const eb="__/auth/handler",tb="emulator/auth/handler",nb=encodeURIComponent("fac");async function op(n,e,t,r,i,s){ae(n.config.authDomain,n,"auth-domain-config-required"),ae(n.config.apiKey,n,"invalid-api-key");const a={apiKey:n.config.apiKey,appName:n.name,authType:t,redirectUrl:r,v:ea,eventId:i};if(e instanceof B_){e.setDefaultLanguage(n.languageCode),a.providerId=e.providerId||"",UT(e.getCustomParameters())||(a.customParameters=JSON.stringify(e.getCustomParameters()));for(const[f,g]of Object.entries({}))a[f]=g}if(e instanceof gl){const f=e.getScopes().filter(g=>g!=="");f.length>0&&(a.scopes=f.join(","))}n.tenantId&&(a.tid=n.tenantId);const l=a;for(const f of Object.keys(l))l[f]===void 0&&delete l[f];const c=await n._getAppCheckToken(),h=c?`#${nb}=${encodeURIComponent(c)}`:"";return`${rb(n)}?${fl(l).slice(1)}${h}`}function rb({config:n}){return n.emulator?Td(n,tb):`https://${n.authDomain}/${eb}`}/**
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
 */const rh="webStorageSupport";class ib{constructor(){this.eventManagers={},this.iframes={},this.originValidationPromises={},this._redirectPersistence=J_,this._completeRedirectFn=C0,this._overrideRedirectResult=b0}async _openPopup(e,t,r,i){var s;Ci((s=this.eventManagers[e._key()])===null||s===void 0?void 0:s.manager,"_initialize() not called before _openPopup()");const a=await op(e,t,r,Dh(),i);return X0(e,a,Rd())}async _openRedirect(e,t,r,i){await this._originValidation(e);const s=await op(e,t,r,Dh(),i);return a0(s),new Promise(()=>{})}_initialize(e){const t=e._key();if(this.eventManagers[t]){const{manager:i,promise:s}=this.eventManagers[t];return i?Promise.resolve(i):(Ci(s,"If manager is not set, promise should be"),s)}const r=this.initAndGetManager(e);return this.eventManagers[t]={promise:r},r.catch(()=>{delete this.eventManagers[t]}),r}async initAndGetManager(e){const t=await W0(e),r=new k0(e);return t.register("authEvent",i=>(ae(i==null?void 0:i.authEvent,e,"invalid-auth-event"),{status:r.onEvent(i.authEvent)?"ACK":"ERROR"}),gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER),this.eventManagers[e._key()]={manager:r},this.iframes[e._key()]=t,r}_isIframeWebStorageSupported(e,t){this.iframes[e._key()].send(rh,{type:rh},i=>{var s;const a=(s=i==null?void 0:i[0])===null||s===void 0?void 0:s[rh];a!==void 0&&t(!!a),Lr(e,"internal-error")},gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER)}_originValidation(e){const t=e._key();return this.originValidationPromises[t]||(this.originValidationPromises[t]=M0(e)),this.originValidationPromises[t]}get _shouldInitProactively(){return L_()||N_()||Ad()}}const sb=ib;var ap="@firebase/auth",lp="1.10.8";/**
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
 */class ob{constructor(e){this.auth=e,this.internalListeners=new Map}getUid(){var e;return this.assertAuthConfigured(),((e=this.auth.currentUser)===null||e===void 0?void 0:e.uid)||null}async getToken(e){return this.assertAuthConfigured(),await this.auth._initializationPromise,this.auth.currentUser?{accessToken:await this.auth.currentUser.getIdToken(e)}:null}addAuthTokenListener(e){if(this.assertAuthConfigured(),this.internalListeners.has(e))return;const t=this.auth.onIdTokenChanged(r=>{e((r==null?void 0:r.stsTokenManager.accessToken)||null)});this.internalListeners.set(e,t),this.updateProactiveRefresh()}removeAuthTokenListener(e){this.assertAuthConfigured();const t=this.internalListeners.get(e);t&&(this.internalListeners.delete(e),t(),this.updateProactiveRefresh())}assertAuthConfigured(){ae(this.auth._initializationPromise,"dependent-sdk-initialized-before-auth")}updateProactiveRefresh(){this.internalListeners.size>0?this.auth._startProactiveRefresh():this.auth._stopProactiveRefresh()}}/**
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
 */function ab(n){switch(n){case"Node":return"node";case"ReactNative":return"rn";case"Worker":return"webworker";case"Cordova":return"cordova";case"WebExtension":return"web-extension";default:return}}function lb(n){ls(new Si("auth",(e,{options:t})=>{const r=e.getProvider("app").getImmediate(),i=e.getProvider("heartbeat"),s=e.getProvider("app-check-internal"),{apiKey:a,authDomain:l}=r.options;ae(a&&!a.includes(":"),"invalid-api-key",{appName:r.name});const c={apiKey:a,authDomain:l,clientPlatform:n,apiHost:"identitytoolkit.googleapis.com",tokenApiHost:"securetoken.googleapis.com",apiScheme:"https",sdkClientVersion:F_(n)},h=new IA(r,i,s,c);return OA(h,t),h},"PUBLIC").setInstantiationMode("EXPLICIT").setInstanceCreatedCallback((e,t,r)=>{e.getProvider("auth-internal").initialize()})),ls(new Si("auth-internal",e=>{const t=ms(e.getProvider("auth").getImmediate());return(r=>new ob(r))(t)},"PRIVATE").setInstantiationMode("EXPLICIT")),Ti(ap,lp,ab(n)),Ti(ap,lp,"esm2017")}/**
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
 */const cb=300,ub=f_("authIdTokenMaxAge")||cb;let cp=null;const hb=n=>async e=>{const t=e&&await e.getIdTokenResult(),r=t&&(new Date().getTime()-Date.parse(t.issuedAtTime))/1e3;if(r&&r>ub)return;const i=t==null?void 0:t.token;cp!==i&&(cp=i,await fetch(n,{method:i?"POST":"DELETE",headers:i?{Authorization:`Bearer ${i}`}:{}}))};function iv(n=v_()){const e=vd(n,"auth");if(e.isInitialized())return e.getImmediate();const t=DA(n,{popupRedirectResolver:sb,persistence:[g0,i0,J_]}),r=f_("authTokenSyncURL");if(r&&typeof isSecureContext=="boolean"&&isSecureContext){const s=new URL(r,location.origin);if(location.origin===s.origin){const a=hb(s.toString());ZA(t,a,()=>a(t.currentUser)),XA(t,l=>a(l))}}const i=AT("auth");return i&&VA(t,`http://${i}`),t}function db(){var n,e;return(e=(n=document.getElementsByTagName("head"))===null||n===void 0?void 0:n[0])!==null&&e!==void 0?e:document}AA({loadJS(n){return new Promise((e,t)=>{const r=document.createElement("script");r.setAttribute("src",n),r.onload=e,r.onerror=i=>{const s=Zr("internal-error");s.customData=i,t(s)},r.type="text/javascript",r.charset="UTF-8",db().appendChild(r)})},gapiScript:"https://apis.google.com/js/api.js",recaptchaV2Script:"https://www.google.com/recaptcha/api.js",recaptchaEnterpriseScript:"https://www.google.com/recaptcha/enterprise.js?render="});lb("Browser");var fb="firebase",pb="11.10.0";/**
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
 */Ti(fb,pb,"app");var up=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{};/** @license
Copyright The Closure Library Authors.
SPDX-License-Identifier: Apache-2.0
*/var ts,sv;(function(){var n;/** @license

 Copyright The Closure Library Authors.
 SPDX-License-Identifier: Apache-2.0
*/function e(A,v){function w(){}w.prototype=v.prototype,A.D=v.prototype,A.prototype=new w,A.prototype.constructor=A,A.C=function(b,C,k){for(var T=Array(arguments.length-2),ee=2;ee<arguments.length;ee++)T[ee-2]=arguments[ee];return v.prototype[C].apply(b,T)}}function t(){this.blockSize=-1}function r(){this.blockSize=-1,this.blockSize=64,this.g=Array(4),this.B=Array(this.blockSize),this.o=this.h=0,this.s()}e(r,t),r.prototype.s=function(){this.g[0]=1732584193,this.g[1]=4023233417,this.g[2]=2562383102,this.g[3]=271733878,this.o=this.h=0};function i(A,v,w){w||(w=0);var b=Array(16);if(typeof v=="string")for(var C=0;16>C;++C)b[C]=v.charCodeAt(w++)|v.charCodeAt(w++)<<8|v.charCodeAt(w++)<<16|v.charCodeAt(w++)<<24;else for(C=0;16>C;++C)b[C]=v[w++]|v[w++]<<8|v[w++]<<16|v[w++]<<24;v=A.g[0],w=A.g[1],C=A.g[2];var k=A.g[3],T=v+(k^w&(C^k))+b[0]+3614090360&4294967295;v=w+(T<<7&4294967295|T>>>25),T=k+(C^v&(w^C))+b[1]+3905402710&4294967295,k=v+(T<<12&4294967295|T>>>20),T=C+(w^k&(v^w))+b[2]+606105819&4294967295,C=k+(T<<17&4294967295|T>>>15),T=w+(v^C&(k^v))+b[3]+3250441966&4294967295,w=C+(T<<22&4294967295|T>>>10),T=v+(k^w&(C^k))+b[4]+4118548399&4294967295,v=w+(T<<7&4294967295|T>>>25),T=k+(C^v&(w^C))+b[5]+1200080426&4294967295,k=v+(T<<12&4294967295|T>>>20),T=C+(w^k&(v^w))+b[6]+2821735955&4294967295,C=k+(T<<17&4294967295|T>>>15),T=w+(v^C&(k^v))+b[7]+4249261313&4294967295,w=C+(T<<22&4294967295|T>>>10),T=v+(k^w&(C^k))+b[8]+1770035416&4294967295,v=w+(T<<7&4294967295|T>>>25),T=k+(C^v&(w^C))+b[9]+2336552879&4294967295,k=v+(T<<12&4294967295|T>>>20),T=C+(w^k&(v^w))+b[10]+4294925233&4294967295,C=k+(T<<17&4294967295|T>>>15),T=w+(v^C&(k^v))+b[11]+2304563134&4294967295,w=C+(T<<22&4294967295|T>>>10),T=v+(k^w&(C^k))+b[12]+1804603682&4294967295,v=w+(T<<7&4294967295|T>>>25),T=k+(C^v&(w^C))+b[13]+4254626195&4294967295,k=v+(T<<12&4294967295|T>>>20),T=C+(w^k&(v^w))+b[14]+2792965006&4294967295,C=k+(T<<17&4294967295|T>>>15),T=w+(v^C&(k^v))+b[15]+1236535329&4294967295,w=C+(T<<22&4294967295|T>>>10),T=v+(C^k&(w^C))+b[1]+4129170786&4294967295,v=w+(T<<5&4294967295|T>>>27),T=k+(w^C&(v^w))+b[6]+3225465664&4294967295,k=v+(T<<9&4294967295|T>>>23),T=C+(v^w&(k^v))+b[11]+643717713&4294967295,C=k+(T<<14&4294967295|T>>>18),T=w+(k^v&(C^k))+b[0]+3921069994&4294967295,w=C+(T<<20&4294967295|T>>>12),T=v+(C^k&(w^C))+b[5]+3593408605&4294967295,v=w+(T<<5&4294967295|T>>>27),T=k+(w^C&(v^w))+b[10]+38016083&4294967295,k=v+(T<<9&4294967295|T>>>23),T=C+(v^w&(k^v))+b[15]+3634488961&4294967295,C=k+(T<<14&4294967295|T>>>18),T=w+(k^v&(C^k))+b[4]+3889429448&4294967295,w=C+(T<<20&4294967295|T>>>12),T=v+(C^k&(w^C))+b[9]+568446438&4294967295,v=w+(T<<5&4294967295|T>>>27),T=k+(w^C&(v^w))+b[14]+3275163606&4294967295,k=v+(T<<9&4294967295|T>>>23),T=C+(v^w&(k^v))+b[3]+4107603335&4294967295,C=k+(T<<14&4294967295|T>>>18),T=w+(k^v&(C^k))+b[8]+1163531501&4294967295,w=C+(T<<20&4294967295|T>>>12),T=v+(C^k&(w^C))+b[13]+2850285829&4294967295,v=w+(T<<5&4294967295|T>>>27),T=k+(w^C&(v^w))+b[2]+4243563512&4294967295,k=v+(T<<9&4294967295|T>>>23),T=C+(v^w&(k^v))+b[7]+1735328473&4294967295,C=k+(T<<14&4294967295|T>>>18),T=w+(k^v&(C^k))+b[12]+2368359562&4294967295,w=C+(T<<20&4294967295|T>>>12),T=v+(w^C^k)+b[5]+4294588738&4294967295,v=w+(T<<4&4294967295|T>>>28),T=k+(v^w^C)+b[8]+2272392833&4294967295,k=v+(T<<11&4294967295|T>>>21),T=C+(k^v^w)+b[11]+1839030562&4294967295,C=k+(T<<16&4294967295|T>>>16),T=w+(C^k^v)+b[14]+4259657740&4294967295,w=C+(T<<23&4294967295|T>>>9),T=v+(w^C^k)+b[1]+2763975236&4294967295,v=w+(T<<4&4294967295|T>>>28),T=k+(v^w^C)+b[4]+1272893353&4294967295,k=v+(T<<11&4294967295|T>>>21),T=C+(k^v^w)+b[7]+4139469664&4294967295,C=k+(T<<16&4294967295|T>>>16),T=w+(C^k^v)+b[10]+3200236656&4294967295,w=C+(T<<23&4294967295|T>>>9),T=v+(w^C^k)+b[13]+681279174&4294967295,v=w+(T<<4&4294967295|T>>>28),T=k+(v^w^C)+b[0]+3936430074&4294967295,k=v+(T<<11&4294967295|T>>>21),T=C+(k^v^w)+b[3]+3572445317&4294967295,C=k+(T<<16&4294967295|T>>>16),T=w+(C^k^v)+b[6]+76029189&4294967295,w=C+(T<<23&4294967295|T>>>9),T=v+(w^C^k)+b[9]+3654602809&4294967295,v=w+(T<<4&4294967295|T>>>28),T=k+(v^w^C)+b[12]+3873151461&4294967295,k=v+(T<<11&4294967295|T>>>21),T=C+(k^v^w)+b[15]+530742520&4294967295,C=k+(T<<16&4294967295|T>>>16),T=w+(C^k^v)+b[2]+3299628645&4294967295,w=C+(T<<23&4294967295|T>>>9),T=v+(C^(w|~k))+b[0]+4096336452&4294967295,v=w+(T<<6&4294967295|T>>>26),T=k+(w^(v|~C))+b[7]+1126891415&4294967295,k=v+(T<<10&4294967295|T>>>22),T=C+(v^(k|~w))+b[14]+2878612391&4294967295,C=k+(T<<15&4294967295|T>>>17),T=w+(k^(C|~v))+b[5]+4237533241&4294967295,w=C+(T<<21&4294967295|T>>>11),T=v+(C^(w|~k))+b[12]+1700485571&4294967295,v=w+(T<<6&4294967295|T>>>26),T=k+(w^(v|~C))+b[3]+2399980690&4294967295,k=v+(T<<10&4294967295|T>>>22),T=C+(v^(k|~w))+b[10]+4293915773&4294967295,C=k+(T<<15&4294967295|T>>>17),T=w+(k^(C|~v))+b[1]+2240044497&4294967295,w=C+(T<<21&4294967295|T>>>11),T=v+(C^(w|~k))+b[8]+1873313359&4294967295,v=w+(T<<6&4294967295|T>>>26),T=k+(w^(v|~C))+b[15]+4264355552&4294967295,k=v+(T<<10&4294967295|T>>>22),T=C+(v^(k|~w))+b[6]+2734768916&4294967295,C=k+(T<<15&4294967295|T>>>17),T=w+(k^(C|~v))+b[13]+1309151649&4294967295,w=C+(T<<21&4294967295|T>>>11),T=v+(C^(w|~k))+b[4]+4149444226&4294967295,v=w+(T<<6&4294967295|T>>>26),T=k+(w^(v|~C))+b[11]+3174756917&4294967295,k=v+(T<<10&4294967295|T>>>22),T=C+(v^(k|~w))+b[2]+718787259&4294967295,C=k+(T<<15&4294967295|T>>>17),T=w+(k^(C|~v))+b[9]+3951481745&4294967295,A.g[0]=A.g[0]+v&4294967295,A.g[1]=A.g[1]+(C+(T<<21&4294967295|T>>>11))&4294967295,A.g[2]=A.g[2]+C&4294967295,A.g[3]=A.g[3]+k&4294967295}r.prototype.u=function(A,v){v===void 0&&(v=A.length);for(var w=v-this.blockSize,b=this.B,C=this.h,k=0;k<v;){if(C==0)for(;k<=w;)i(this,A,k),k+=this.blockSize;if(typeof A=="string"){for(;k<v;)if(b[C++]=A.charCodeAt(k++),C==this.blockSize){i(this,b),C=0;break}}else for(;k<v;)if(b[C++]=A[k++],C==this.blockSize){i(this,b),C=0;break}}this.h=C,this.o+=v},r.prototype.v=function(){var A=Array((56>this.h?this.blockSize:2*this.blockSize)-this.h);A[0]=128;for(var v=1;v<A.length-8;++v)A[v]=0;var w=8*this.o;for(v=A.length-8;v<A.length;++v)A[v]=w&255,w/=256;for(this.u(A),A=Array(16),v=w=0;4>v;++v)for(var b=0;32>b;b+=8)A[w++]=this.g[v]>>>b&255;return A};function s(A,v){var w=l;return Object.prototype.hasOwnProperty.call(w,A)?w[A]:w[A]=v(A)}function a(A,v){this.h=v;for(var w=[],b=!0,C=A.length-1;0<=C;C--){var k=A[C]|0;b&&k==v||(w[C]=k,b=!1)}this.g=w}var l={};function c(A){return-128<=A&&128>A?s(A,function(v){return new a([v|0],0>v?-1:0)}):new a([A|0],0>A?-1:0)}function h(A){if(isNaN(A)||!isFinite(A))return g;if(0>A)return I(h(-A));for(var v=[],w=1,b=0;A>=w;b++)v[b]=A/w|0,w*=4294967296;return new a(v,0)}function f(A,v){if(A.length==0)throw Error("number format error: empty string");if(v=v||10,2>v||36<v)throw Error("radix out of range: "+v);if(A.charAt(0)=="-")return I(f(A.substring(1),v));if(0<=A.indexOf("-"))throw Error('number format error: interior "-" character');for(var w=h(Math.pow(v,8)),b=g,C=0;C<A.length;C+=8){var k=Math.min(8,A.length-C),T=parseInt(A.substring(C,C+k),v);8>k?(k=h(Math.pow(v,k)),b=b.j(k).add(h(T))):(b=b.j(w),b=b.add(h(T)))}return b}var g=c(0),_=c(1),E=c(16777216);n=a.prototype,n.m=function(){if(P(this))return-I(this).m();for(var A=0,v=1,w=0;w<this.g.length;w++){var b=this.i(w);A+=(0<=b?b:4294967296+b)*v,v*=4294967296}return A},n.toString=function(A){if(A=A||10,2>A||36<A)throw Error("radix out of range: "+A);if(S(this))return"0";if(P(this))return"-"+I(this).toString(A);for(var v=h(Math.pow(A,6)),w=this,b="";;){var C=Y(w,v).g;w=L(w,C.j(v));var k=((0<w.g.length?w.g[0]:w.h)>>>0).toString(A);if(w=C,S(w))return k+b;for(;6>k.length;)k="0"+k;b=k+b}},n.i=function(A){return 0>A?0:A<this.g.length?this.g[A]:this.h};function S(A){if(A.h!=0)return!1;for(var v=0;v<A.g.length;v++)if(A.g[v]!=0)return!1;return!0}function P(A){return A.h==-1}n.l=function(A){return A=L(this,A),P(A)?-1:S(A)?0:1};function I(A){for(var v=A.g.length,w=[],b=0;b<v;b++)w[b]=~A.g[b];return new a(w,~A.h).add(_)}n.abs=function(){return P(this)?I(this):this},n.add=function(A){for(var v=Math.max(this.g.length,A.g.length),w=[],b=0,C=0;C<=v;C++){var k=b+(this.i(C)&65535)+(A.i(C)&65535),T=(k>>>16)+(this.i(C)>>>16)+(A.i(C)>>>16);b=T>>>16,k&=65535,T&=65535,w[C]=T<<16|k}return new a(w,w[w.length-1]&-2147483648?-1:0)};function L(A,v){return A.add(I(v))}n.j=function(A){if(S(this)||S(A))return g;if(P(this))return P(A)?I(this).j(I(A)):I(I(this).j(A));if(P(A))return I(this.j(I(A)));if(0>this.l(E)&&0>A.l(E))return h(this.m()*A.m());for(var v=this.g.length+A.g.length,w=[],b=0;b<2*v;b++)w[b]=0;for(b=0;b<this.g.length;b++)for(var C=0;C<A.g.length;C++){var k=this.i(b)>>>16,T=this.i(b)&65535,ee=A.i(C)>>>16,Pt=A.i(C)&65535;w[2*b+2*C]+=T*Pt,U(w,2*b+2*C),w[2*b+2*C+1]+=k*Pt,U(w,2*b+2*C+1),w[2*b+2*C+1]+=T*ee,U(w,2*b+2*C+1),w[2*b+2*C+2]+=k*ee,U(w,2*b+2*C+2)}for(b=0;b<v;b++)w[b]=w[2*b+1]<<16|w[2*b];for(b=v;b<2*v;b++)w[b]=0;return new a(w,0)};function U(A,v){for(;(A[v]&65535)!=A[v];)A[v+1]+=A[v]>>>16,A[v]&=65535,v++}function q(A,v){this.g=A,this.h=v}function Y(A,v){if(S(v))throw Error("division by zero");if(S(A))return new q(g,g);if(P(A))return v=Y(I(A),v),new q(I(v.g),I(v.h));if(P(v))return v=Y(A,I(v)),new q(I(v.g),v.h);if(30<A.g.length){if(P(A)||P(v))throw Error("slowDivide_ only works with positive integers.");for(var w=_,b=v;0>=b.l(A);)w=Me(w),b=Me(b);var C=Q(w,1),k=Q(b,1);for(b=Q(b,2),w=Q(w,2);!S(b);){var T=k.add(b);0>=T.l(A)&&(C=C.add(w),k=T),b=Q(b,1),w=Q(w,1)}return v=L(A,C.j(v)),new q(C,v)}for(C=g;0<=A.l(v);){for(w=Math.max(1,Math.floor(A.m()/v.m())),b=Math.ceil(Math.log(w)/Math.LN2),b=48>=b?1:Math.pow(2,b-48),k=h(w),T=k.j(v);P(T)||0<T.l(A);)w-=b,k=h(w),T=k.j(v);S(k)&&(k=_),C=C.add(k),A=L(A,T)}return new q(C,A)}n.A=function(A){return Y(this,A).h},n.and=function(A){for(var v=Math.max(this.g.length,A.g.length),w=[],b=0;b<v;b++)w[b]=this.i(b)&A.i(b);return new a(w,this.h&A.h)},n.or=function(A){for(var v=Math.max(this.g.length,A.g.length),w=[],b=0;b<v;b++)w[b]=this.i(b)|A.i(b);return new a(w,this.h|A.h)},n.xor=function(A){for(var v=Math.max(this.g.length,A.g.length),w=[],b=0;b<v;b++)w[b]=this.i(b)^A.i(b);return new a(w,this.h^A.h)};function Me(A){for(var v=A.g.length+1,w=[],b=0;b<v;b++)w[b]=A.i(b)<<1|A.i(b-1)>>>31;return new a(w,A.h)}function Q(A,v){var w=v>>5;v%=32;for(var b=A.g.length-w,C=[],k=0;k<b;k++)C[k]=0<v?A.i(k+w)>>>v|A.i(k+w+1)<<32-v:A.i(k+w);return new a(C,A.h)}r.prototype.digest=r.prototype.v,r.prototype.reset=r.prototype.s,r.prototype.update=r.prototype.u,sv=r,a.prototype.add=a.prototype.add,a.prototype.multiply=a.prototype.j,a.prototype.modulo=a.prototype.A,a.prototype.compare=a.prototype.l,a.prototype.toNumber=a.prototype.m,a.prototype.toString=a.prototype.toString,a.prototype.getBits=a.prototype.i,a.fromNumber=h,a.fromString=f,ts=a}).apply(typeof up<"u"?up:typeof self<"u"?self:typeof window<"u"?window:{});var Ql=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{};/** @license
Copyright The Closure Library Authors.
SPDX-License-Identifier: Apache-2.0
*/var ov,Ca,av,hc,Mh,lv,cv,uv;(function(){var n,e=typeof Object.defineProperties=="function"?Object.defineProperty:function(o,u,d){return o==Array.prototype||o==Object.prototype||(o[u]=d.value),o};function t(o){o=[typeof globalThis=="object"&&globalThis,o,typeof window=="object"&&window,typeof self=="object"&&self,typeof Ql=="object"&&Ql];for(var u=0;u<o.length;++u){var d=o[u];if(d&&d.Math==Math)return d}throw Error("Cannot find global object")}var r=t(this);function i(o,u){if(u)e:{var d=r;o=o.split(".");for(var m=0;m<o.length-1;m++){var N=o[m];if(!(N in d))break e;d=d[N]}o=o[o.length-1],m=d[o],u=u(m),u!=m&&u!=null&&e(d,o,{configurable:!0,writable:!0,value:u})}}function s(o,u){o instanceof String&&(o+="");var d=0,m=!1,N={next:function(){if(!m&&d<o.length){var M=d++;return{value:u(M,o[M]),done:!1}}return m=!0,{done:!0,value:void 0}}};return N[Symbol.iterator]=function(){return N},N}i("Array.prototype.values",function(o){return o||function(){return s(this,function(u,d){return d})}});/** @license

 Copyright The Closure Library Authors.
 SPDX-License-Identifier: Apache-2.0
*/var a=a||{},l=this||self;function c(o){var u=typeof o;return u=u!="object"?u:o?Array.isArray(o)?"array":u:"null",u=="array"||u=="object"&&typeof o.length=="number"}function h(o){var u=typeof o;return u=="object"&&o!=null||u=="function"}function f(o,u,d){return o.call.apply(o.bind,arguments)}function g(o,u,d){if(!o)throw Error();if(2<arguments.length){var m=Array.prototype.slice.call(arguments,2);return function(){var N=Array.prototype.slice.call(arguments);return Array.prototype.unshift.apply(N,m),o.apply(u,N)}}return function(){return o.apply(u,arguments)}}function _(o,u,d){return _=Function.prototype.bind&&Function.prototype.bind.toString().indexOf("native code")!=-1?f:g,_.apply(null,arguments)}function E(o,u){var d=Array.prototype.slice.call(arguments,1);return function(){var m=d.slice();return m.push.apply(m,arguments),o.apply(this,m)}}function S(o,u){function d(){}d.prototype=u.prototype,o.aa=u.prototype,o.prototype=new d,o.prototype.constructor=o,o.Qb=function(m,N,M){for(var z=Array(arguments.length-2),ut=2;ut<arguments.length;ut++)z[ut-2]=arguments[ut];return u.prototype[N].apply(m,z)}}function P(o){const u=o.length;if(0<u){const d=Array(u);for(let m=0;m<u;m++)d[m]=o[m];return d}return[]}function I(o,u){for(let d=1;d<arguments.length;d++){const m=arguments[d];if(c(m)){const N=o.length||0,M=m.length||0;o.length=N+M;for(let z=0;z<M;z++)o[N+z]=m[z]}else o.push(m)}}class L{constructor(u,d){this.i=u,this.j=d,this.h=0,this.g=null}get(){let u;return 0<this.h?(this.h--,u=this.g,this.g=u.next,u.next=null):u=this.i(),u}}function U(o){return/^[\s\xa0]*$/.test(o)}function q(){var o=l.navigator;return o&&(o=o.userAgent)?o:""}function Y(o){return Y[" "](o),o}Y[" "]=function(){};var Me=q().indexOf("Gecko")!=-1&&!(q().toLowerCase().indexOf("webkit")!=-1&&q().indexOf("Edge")==-1)&&!(q().indexOf("Trident")!=-1||q().indexOf("MSIE")!=-1)&&q().indexOf("Edge")==-1;function Q(o,u,d){for(const m in o)u.call(d,o[m],m,o)}function A(o,u){for(const d in o)u.call(void 0,o[d],d,o)}function v(o){const u={};for(const d in o)u[d]=o[d];return u}const w="constructor hasOwnProperty isPrototypeOf propertyIsEnumerable toLocaleString toString valueOf".split(" ");function b(o,u){let d,m;for(let N=1;N<arguments.length;N++){m=arguments[N];for(d in m)o[d]=m[d];for(let M=0;M<w.length;M++)d=w[M],Object.prototype.hasOwnProperty.call(m,d)&&(o[d]=m[d])}}function C(o){var u=1;o=o.split(":");const d=[];for(;0<u&&o.length;)d.push(o.shift()),u--;return o.length&&d.push(o.join(":")),d}function k(o){l.setTimeout(()=>{throw o},0)}function T(){var o=Gt;let u=null;return o.g&&(u=o.g,o.g=o.g.next,o.g||(o.h=null),u.next=null),u}class ee{constructor(){this.h=this.g=null}add(u,d){const m=Pt.get();m.set(u,d),this.h?this.h.next=m:this.g=m,this.h=m}}var Pt=new L(()=>new hn,o=>o.reset());class hn{constructor(){this.next=this.g=this.h=null}set(u,d){this.h=u,this.g=d,this.next=null}reset(){this.next=this.g=this.h=null}}let ar,lr=!1,Gt=new ee,Qn=()=>{const o=l.Promise.resolve(void 0);ar=()=>{o.then(li)}};var li=()=>{for(var o;o=T();){try{o.h.call(o.g)}catch(d){k(d)}var u=Pt;u.j(o),100>u.h&&(u.h++,o.next=u.g,u.g=o)}lr=!1};function On(){this.s=this.s,this.C=this.C}On.prototype.s=!1,On.prototype.ma=function(){this.s||(this.s=!0,this.N())},On.prototype.N=function(){if(this.C)for(;this.C.length;)this.C.shift()()};function st(o,u){this.type=o,this.g=this.target=u,this.defaultPrevented=!1}st.prototype.h=function(){this.defaultPrevented=!0};var $r=(function(){if(!l.addEventListener||!Object.defineProperty)return!1;var o=!1,u=Object.defineProperty({},"passive",{get:function(){o=!0}});try{const d=()=>{};l.addEventListener("test",d,u),l.removeEventListener("test",d,u)}catch{}return o})();function cr(o,u){if(st.call(this,o?o.type:""),this.relatedTarget=this.g=this.target=null,this.button=this.screenY=this.screenX=this.clientY=this.clientX=0,this.key="",this.metaKey=this.shiftKey=this.altKey=this.ctrlKey=!1,this.state=null,this.pointerId=0,this.pointerType="",this.i=null,o){var d=this.type=o.type,m=o.changedTouches&&o.changedTouches.length?o.changedTouches[0]:null;if(this.target=o.target||o.srcElement,this.g=u,u=o.relatedTarget){if(Me){e:{try{Y(u.nodeName);var N=!0;break e}catch{}N=!1}N||(u=null)}}else d=="mouseover"?u=o.fromElement:d=="mouseout"&&(u=o.toElement);this.relatedTarget=u,m?(this.clientX=m.clientX!==void 0?m.clientX:m.pageX,this.clientY=m.clientY!==void 0?m.clientY:m.pageY,this.screenX=m.screenX||0,this.screenY=m.screenY||0):(this.clientX=o.clientX!==void 0?o.clientX:o.pageX,this.clientY=o.clientY!==void 0?o.clientY:o.pageY,this.screenX=o.screenX||0,this.screenY=o.screenY||0),this.button=o.button,this.key=o.key||"",this.ctrlKey=o.ctrlKey,this.altKey=o.altKey,this.shiftKey=o.shiftKey,this.metaKey=o.metaKey,this.pointerId=o.pointerId||0,this.pointerType=typeof o.pointerType=="string"?o.pointerType:to[o.pointerType]||"",this.state=o.state,this.i=o,o.defaultPrevented&&cr.aa.h.call(this)}}S(cr,st);var to={2:"touch",3:"pen",4:"mouse"};cr.prototype.h=function(){cr.aa.h.call(this);var o=this.i;o.preventDefault?o.preventDefault():o.returnValue=!1};var oe="closure_listenable_"+(1e6*Math.random()|0),gs=0;function dn(o,u,d,m,N){this.listener=o,this.proxy=null,this.src=u,this.type=d,this.capture=!!m,this.ha=N,this.key=++gs,this.da=this.fa=!1}function qr(o){o.da=!0,o.listener=null,o.proxy=null,o.src=null,o.ha=null}function ci(o){this.src=o,this.g={},this.h=0}ci.prototype.add=function(o,u,d,m,N){var M=o.toString();o=this.g[M],o||(o=this.g[M]=[],this.h++);var z=_s(o,u,m,N);return-1<z?(u=o[z],d||(u.fa=!1)):(u=new dn(u,this.src,M,!!m,N),u.fa=d,o.push(u)),u};function Tr(o,u){var d=u.type;if(d in o.g){var m=o.g[d],N=Array.prototype.indexOf.call(m,u,void 0),M;(M=0<=N)&&Array.prototype.splice.call(m,N,1),M&&(qr(u),o.g[d].length==0&&(delete o.g[d],o.h--))}}function _s(o,u,d,m){for(var N=0;N<o.length;++N){var M=o[N];if(!M.da&&M.listener==u&&M.capture==!!d&&M.ha==m)return N}return-1}var Vi="closure_lm_"+(1e6*Math.random()|0),Mi={};function vs(o,u,d,m,N){if(Array.isArray(u)){for(var M=0;M<u.length;M++)vs(o,u[M],d,m,N);return null}return d=Rl(d),o&&o[oe]?o.K(u,d,h(m)?!!m.capture:!1,N):sa(o,u,d,!1,m,N)}function sa(o,u,d,m,N,M){if(!u)throw Error("Invalid event type");var z=h(N)?!!N.capture:!!N,ut=Li(o);if(ut||(o[Vi]=ut=new ci(o)),d=ut.add(u,d,m,z,M),d.proxy)return d;if(m=Ru(),d.proxy=m,m.src=o,m.listener=d,o.addEventListener)$r||(N=z),N===void 0&&(N=!1),o.addEventListener(u.toString(),m,N);else if(o.attachEvent)o.attachEvent(no(u.toString()),m);else if(o.addListener&&o.removeListener)o.addListener(m);else throw Error("addEventListener and attachEvent are unavailable.");return d}function Ru(){function o(d){return u.call(o.src,o.listener,d)}const u=Sl;return o}function ys(o,u,d,m,N){if(Array.isArray(u))for(var M=0;M<u.length;M++)ys(o,u[M],d,m,N);else m=h(m)?!!m.capture:!!m,d=Rl(d),o&&o[oe]?(o=o.i,u=String(u).toString(),u in o.g&&(M=o.g[u],d=_s(M,d,m,N),-1<d&&(qr(M[d]),Array.prototype.splice.call(M,d,1),M.length==0&&(delete o.g[u],o.h--)))):o&&(o=Li(o))&&(u=o.g[u.toString()],o=-1,u&&(o=_s(u,d,m,N)),(d=-1<o?u[o]:null)&&xi(d))}function xi(o){if(typeof o!="number"&&o&&!o.da){var u=o.src;if(u&&u[oe])Tr(u.i,o);else{var d=o.type,m=o.proxy;u.removeEventListener?u.removeEventListener(d,m,o.capture):u.detachEvent?u.detachEvent(no(d),m):u.addListener&&u.removeListener&&u.removeListener(m),(d=Li(u))?(Tr(d,o),d.h==0&&(d.src=null,u[Vi]=null)):qr(o)}}}function no(o){return o in Mi?Mi[o]:Mi[o]="on"+o}function Sl(o,u){if(o.da)o=!0;else{u=new cr(u,this);var d=o.listener,m=o.ha||o.src;o.fa&&xi(o),o=d.call(m,u)}return o}function Li(o){return o=o[Vi],o instanceof ci?o:null}var oa="__closure_events_fn_"+(1e9*Math.random()>>>0);function Rl(o){return typeof o=="function"?o:(o[oa]||(o[oa]=function(u){return o.handleEvent(u)}),o[oa])}function tn(){On.call(this),this.i=new ci(this),this.M=this,this.F=null}S(tn,On),tn.prototype[oe]=!0,tn.prototype.removeEventListener=function(o,u,d,m){ys(this,o,u,d,m)};function fn(o,u){var d,m=o.F;if(m)for(d=[];m;m=m.F)d.push(m);if(o=o.M,m=u.type||u,typeof u=="string")u=new st(u,o);else if(u instanceof st)u.target=u.target||o;else{var N=u;u=new st(m,o),b(u,N)}if(N=!0,d)for(var M=d.length-1;0<=M;M--){var z=u.g=d[M];N=ui(z,m,!0,u)&&N}if(z=u.g=o,N=ui(z,m,!0,u)&&N,N=ui(z,m,!1,u)&&N,d)for(M=0;M<d.length;M++)z=u.g=d[M],N=ui(z,m,!1,u)&&N}tn.prototype.N=function(){if(tn.aa.N.call(this),this.i){var o=this.i,u;for(u in o.g){for(var d=o.g[u],m=0;m<d.length;m++)qr(d[m]);delete o.g[u],o.h--}}this.F=null},tn.prototype.K=function(o,u,d,m){return this.i.add(String(o),u,!1,d,m)},tn.prototype.L=function(o,u,d,m){return this.i.add(String(o),u,!0,d,m)};function ui(o,u,d,m){if(u=o.i.g[String(u)],!u)return!0;u=u.concat();for(var N=!0,M=0;M<u.length;++M){var z=u[M];if(z&&!z.da&&z.capture==d){var ut=z.listener,gn=z.ha||z.src;z.fa&&Tr(o.i,z),N=ut.call(gn,m)!==!1&&N}}return N&&!m.defaultPrevented}function Cl(o,u,d){if(typeof o=="function")d&&(o=_(o,d));else if(o&&typeof o.handleEvent=="function")o=_(o.handleEvent,o);else throw Error("Invalid listener argument");return 2147483647<Number(u)?-1:l.setTimeout(o,u||0)}function Pl(o){o.g=Cl(()=>{o.g=null,o.i&&(o.i=!1,Pl(o))},o.l);const u=o.h;o.h=null,o.m.apply(null,u)}class kl extends On{constructor(u,d){super(),this.m=u,this.l=d,this.h=null,this.i=!1,this.g=null}j(u){this.h=arguments,this.g?this.i=!0:Pl(this)}N(){super.N(),this.g&&(l.clearTimeout(this.g),this.g=null,this.i=!1,this.h=null)}}function Es(o){On.call(this),this.h=o,this.g={}}S(Es,On);var Nl=[];function Dl(o){Q(o.g,function(u,d){this.g.hasOwnProperty(d)&&xi(u)},o),o.g={}}Es.prototype.N=function(){Es.aa.N.call(this),Dl(this)},Es.prototype.handleEvent=function(){throw Error("EventHandler.handleEvent not implemented")};var aa=l.JSON.stringify,Cu=l.JSON.parse,Pu=class{stringify(o){return l.JSON.stringify(o,void 0)}parse(o){return l.JSON.parse(o,void 0)}};function ro(){}ro.prototype.h=null;function Ol(o){return o.h||(o.h=o.i())}function nn(){}var pn={OPEN:"a",kb:"b",Ja:"c",wb:"d"};function Fi(){st.call(this,"d")}S(Fi,st);function Un(){st.call(this,"c")}S(Un,st);var hi={},Vl=null;function ws(){return Vl=Vl||new tn}hi.La="serverreachability";function Ml(o){st.call(this,hi.La,o)}S(Ml,st);function Ts(o){const u=ws();fn(u,new Ml(u))}hi.STAT_EVENT="statevent";function la(o,u){st.call(this,hi.STAT_EVENT,o),this.stat=u}S(la,st);function rn(o){const u=ws();fn(u,new la(u,o))}hi.Ma="timingevent";function xl(o,u){st.call(this,hi.Ma,o),this.size=u}S(xl,st);function Is(o,u){if(typeof o!="function")throw Error("Fn must not be null and must be a function");return l.setTimeout(function(){o()},u)}function As(){this.g=!0}As.prototype.xa=function(){this.g=!1};function ku(o,u,d,m,N,M){o.info(function(){if(o.g)if(M)for(var z="",ut=M.split("&"),gn=0;gn<ut.length;gn++){var ze=ut[gn].split("=");if(1<ze.length){var In=ze[0];ze=ze[1];var An=In.split("_");z=2<=An.length&&An[1]=="type"?z+(In+"="+ze+"&"):z+(In+"=redacted&")}}else z=null;else z=M;return"XMLHTTP REQ ("+m+") [attempt "+N+"]: "+u+`
`+d+`
`+z})}function Nu(o,u,d,m,N,M,z){o.info(function(){return"XMLHTTP RESP ("+m+") [ attempt "+N+"]: "+u+`
`+d+`
`+M+" "+z})}function di(o,u,d,m){o.info(function(){return"XMLHTTP TEXT ("+u+"): "+Ll(o,d)+(m?" "+m:"")})}function Du(o,u){o.info(function(){return"TIMEOUT: "+u})}As.prototype.info=function(){};function Ll(o,u){if(!o.g)return u;if(!u)return null;try{var d=JSON.parse(u);if(d){for(o=0;o<d.length;o++)if(Array.isArray(d[o])){var m=d[o];if(!(2>m.length)){var N=m[1];if(Array.isArray(N)&&!(1>N.length)){var M=N[0];if(M!="noop"&&M!="stop"&&M!="close")for(var z=1;z<N.length;z++)N[z]=""}}}}return aa(d)}catch{return u}}var io={NO_ERROR:0,gb:1,tb:2,sb:3,nb:4,rb:5,ub:6,Ia:7,TIMEOUT:8,xb:9},Fl={lb:"complete",Hb:"success",Ja:"error",Ia:"abort",zb:"ready",Ab:"readystatechange",TIMEOUT:"timeout",vb:"incrementaldata",yb:"progress",ob:"downloadprogress",Pb:"uploadprogress"},ca;function O(){}S(O,ro),O.prototype.g=function(){return new XMLHttpRequest},O.prototype.i=function(){return{}},ca=new O;function $(o,u,d,m){this.j=o,this.i=u,this.l=d,this.R=m||1,this.U=new Es(this),this.I=45e3,this.H=null,this.o=!1,this.m=this.A=this.v=this.L=this.F=this.S=this.B=null,this.D=[],this.g=null,this.C=0,this.s=this.u=null,this.X=-1,this.J=!1,this.O=0,this.M=null,this.W=this.K=this.T=this.P=!1,this.h=new fe}function fe(){this.i=null,this.g="",this.h=!1}var ve={},ne={};function ot(o,u,d){o.L=1,o.v=ur(Ye(u)),o.m=d,o.P=!0,ht(o,null)}function ht(o,u){o.F=Date.now(),dt(o),o.A=Ye(o.v);var d=o.A,m=o.R;Array.isArray(m)||(m=[String(m)]),gt(d.i,"t",m),o.C=0,d=o.j.J,o.h=new fe,o.g=Ul(o.j,d?u:null,!o.m),0<o.O&&(o.M=new kl(_(o.Y,o,o.g),o.O)),u=o.U,d=o.g,m=o.ca;var N="readystatechange";Array.isArray(N)||(N&&(Nl[0]=N.toString()),N=Nl);for(var M=0;M<N.length;M++){var z=vs(d,N[M],m||u.handleEvent,!1,u.h||u);if(!z)break;u.g[z.key]=z}u=o.H?v(o.H):{},o.m?(o.u||(o.u="POST"),u["Content-Type"]="application/x-www-form-urlencoded",o.g.ea(o.A,o.u,o.m,u)):(o.u="GET",o.g.ea(o.A,o.u,null,u)),Ts(),ku(o.i,o.u,o.A,o.l,o.R,o.m)}$.prototype.ca=function(o){o=o.target;const u=this.M;u&&St(o)==3?u.j():this.Y(o)},$.prototype.Y=function(o){try{if(o==this.g)e:{const An=St(this.g);var u=this.g.Ba();const oo=this.g.Z();if(!(3>An)&&(An!=3||this.g&&(this.h.h||this.g.oa()||Ar(this.g)))){this.J||An!=4||u==7||(u==8||0>=oo?Ts(3):Ts(2)),ft(this);var d=this.g.Z();this.X=d;t:if(He(this)){var m=Ar(this.g);o="";var N=m.length,M=St(this.g)==4;if(!this.h.i){if(typeof TextDecoder>"u"){We(this),nt(this);var z="";break t}this.h.i=new l.TextDecoder}for(u=0;u<N;u++)this.h.h=!0,o+=this.h.i.decode(m[u],{stream:!(M&&u==N-1)});m.length=0,this.h.g+=o,this.C=0,z=this.h.g}else z=this.g.oa();if(this.o=d==200,Nu(this.i,this.u,this.A,this.l,this.R,An,d),this.o){if(this.T&&!this.K){t:{if(this.g){var ut,gn=this.g;if((ut=gn.g?gn.g.getResponseHeader("X-HTTP-Initial-Response"):null)&&!U(ut)){var ze=ut;break t}}ze=null}if(d=ze)di(this.i,this.l,d,"Initial handshake response via X-HTTP-Initial-Response"),this.K=!0,It(this,d);else{this.o=!1,this.s=3,rn(12),We(this),nt(this);break e}}if(this.P){d=!0;let Cr;for(;!this.J&&this.C<z.length;)if(Cr=sn(this,z),Cr==ne){An==4&&(this.s=4,rn(14),d=!1),di(this.i,this.l,null,"[Incomplete Response]");break}else if(Cr==ve){this.s=4,rn(15),di(this.i,this.l,z,"[Invalid Chunk]"),d=!1;break}else di(this.i,this.l,Cr,null),It(this,Cr);if(He(this)&&this.C!=0&&(this.h.g=this.h.g.slice(this.C),this.C=0),An!=4||z.length!=0||this.h.h||(this.s=1,rn(16),d=!1),this.o=this.o&&d,!d)di(this.i,this.l,z,"[Invalid Chunked Response]"),We(this),nt(this);else if(0<z.length&&!this.W){this.W=!0;var In=this.j;In.g==this&&In.ba&&!In.M&&(In.j.info("Great, no buffering proxy detected. Bytes received: "+z.length),Fe(In),In.M=!0,rn(11))}}else di(this.i,this.l,z,null),It(this,z);An==4&&We(this),this.o&&!this.J&&(An==4?Xn(this.j,this):(this.o=!1,dt(this)))}else br(this.g),d==400&&0<z.indexOf("Unknown SID")?(this.s=3,rn(12)):(this.s=0,rn(13)),We(this),nt(this)}}}catch{}finally{}};function He(o){return o.g?o.u=="GET"&&o.L!=2&&o.j.Ca:!1}function sn(o,u){var d=o.C,m=u.indexOf(`
`,d);return m==-1?ne:(d=Number(u.substring(d,m)),isNaN(d)?ve:(m+=1,m+d>u.length?ne:(u=u.slice(m,m+d),o.C=m+d,u)))}$.prototype.cancel=function(){this.J=!0,We(this)};function dt(o){o.S=Date.now()+o.I,at(o,o.I)}function at(o,u){if(o.B!=null)throw Error("WatchDog timer not null");o.B=Is(_(o.ba,o),u)}function ft(o){o.B&&(l.clearTimeout(o.B),o.B=null)}$.prototype.ba=function(){this.B=null;const o=Date.now();0<=o-this.S?(Du(this.i,this.A),this.L!=2&&(Ts(),rn(17)),We(this),this.s=2,nt(this)):at(this,this.S-o)};function nt(o){o.j.G==0||o.J||Xn(o.j,o)}function We(o){ft(o);var u=o.M;u&&typeof u.ma=="function"&&u.ma(),o.M=null,Dl(o.U),o.g&&(u=o.g,o.g=null,u.abort(),u.ma())}function It(o,u){try{var d=o.j;if(d.G!=0&&(d.g==o||kt(d.h,o))){if(!o.K&&kt(d.h,o)&&d.G==3){try{var m=d.Da.g.parse(u)}catch{m=null}if(Array.isArray(m)&&m.length==3){var N=m;if(N[0]==0){e:if(!d.u){if(d.g)if(d.g.F+3e3<o.F)zn(d),Br(d);else break e;se(d),rn(18)}}else d.za=N[1],0<d.za-d.T&&37500>N[2]&&d.F&&d.v==0&&!d.C&&(d.C=Is(_(d.Za,d),6e3));if(1>=Ot(d.h)&&d.ca){try{d.ca()}catch{}d.ca=void 0}}else dr(d,11)}else if((o.K||d.g==o)&&zn(d),!U(u))for(N=d.Da.g.parse(u),u=0;u<N.length;u++){let ze=N[u];if(d.T=ze[0],ze=ze[1],d.G==2)if(ze[0]=="c"){d.K=ze[1],d.ia=ze[2];const In=ze[3];In!=null&&(d.la=In,d.j.info("VER="+d.la));const An=ze[4];An!=null&&(d.Aa=An,d.j.info("SVER="+d.Aa));const oo=ze[5];oo!=null&&typeof oo=="number"&&0<oo&&(m=1.5*oo,d.L=m,d.j.info("backChannelRequestTimeoutMs_="+m)),m=d;const Cr=o.g;if(Cr){const ql=Cr.g?Cr.g.getResponseHeader("X-Client-Wire-Protocol"):null;if(ql){var M=m.h;M.g||ql.indexOf("spdy")==-1&&ql.indexOf("quic")==-1&&ql.indexOf("h2")==-1||(M.j=M.l,M.g=new Set,M.h&&(Vt(M,M.h),M.h=null))}if(m.D){const Ou=Cr.g?Cr.g.getResponseHeader("X-HTTP-Session-Id"):null;Ou&&(m.ya=Ou,me(m.I,m.D,Ou))}}d.G=3,d.l&&d.l.ua(),d.ba&&(d.R=Date.now()-o.F,d.j.info("Handshake RTT: "+d.R+"ms")),m=d;var z=o;if(m.qa=ua(m,m.J?m.ia:null,m.W),z.K){xe(m.h,z);var ut=z,gn=m.L;gn&&(ut.I=gn),ut.B&&(ft(ut),dt(ut)),m.g=z}else ce(m);0<d.i.length&&Jn(d)}else ze[0]!="stop"&&ze[0]!="close"||dr(d,7);else d.G==3&&(ze[0]=="stop"||ze[0]=="close"?ze[0]=="stop"?dr(d,7):hr(d):ze[0]!="noop"&&d.l&&d.l.ta(ze),d.v=0)}}Ts(4)}catch{}}var Kt=class{constructor(o,u){this.g=o,this.map=u}};function Dt(o){this.l=o||10,l.PerformanceNavigationTiming?(o=l.performance.getEntriesByType("navigation"),o=0<o.length&&(o[0].nextHopProtocol=="hq"||o[0].nextHopProtocol=="h2")):o=!!(l.chrome&&l.chrome.loadTimes&&l.chrome.loadTimes()&&l.chrome.loadTimes().wasFetchedViaSpdy),this.j=o?this.l:1,this.g=null,1<this.j&&(this.g=new Set),this.h=null,this.i=[]}function Qt(o){return o.h?!0:o.g?o.g.size>=o.j:!1}function Ot(o){return o.h?1:o.g?o.g.size:0}function kt(o,u){return o.h?o.h==u:o.g?o.g.has(u):!1}function Vt(o,u){o.g?o.g.add(u):o.h=u}function xe(o,u){o.h&&o.h==u?o.h=null:o.g&&o.g.has(u)&&o.g.delete(u)}Dt.prototype.cancel=function(){if(this.i=te(this),this.h)this.h.cancel(),this.h=null;else if(this.g&&this.g.size!==0){for(const o of this.g.values())o.cancel();this.g.clear()}};function te(o){if(o.h!=null)return o.i.concat(o.h.D);if(o.g!=null&&o.g.size!==0){let u=o.i;for(const d of o.g.values())u=u.concat(d.D);return u}return P(o.i)}function _e(o){if(o.V&&typeof o.V=="function")return o.V();if(typeof Map<"u"&&o instanceof Map||typeof Set<"u"&&o instanceof Set)return Array.from(o.values());if(typeof o=="string")return o.split("");if(c(o)){for(var u=[],d=o.length,m=0;m<d;m++)u.push(o[m]);return u}u=[],d=0;for(m in o)u[d++]=o[m];return u}function pe(o){if(o.na&&typeof o.na=="function")return o.na();if(!o.V||typeof o.V!="function"){if(typeof Map<"u"&&o instanceof Map)return Array.from(o.keys());if(!(typeof Set<"u"&&o instanceof Set)){if(c(o)||typeof o=="string"){var u=[];o=o.length;for(var d=0;d<o;d++)u.push(d);return u}u=[],d=0;for(const m in o)u[d++]=m;return u}}}function lt(o,u){if(o.forEach&&typeof o.forEach=="function")o.forEach(u,void 0);else if(c(o)||typeof o=="string")Array.prototype.forEach.call(o,u,void 0);else for(var d=pe(o),m=_e(o),N=m.length,M=0;M<N;M++)u.call(void 0,m[M],d&&d[M],o)}var rt=RegExp("^(?:([^:/?#.]+):)?(?://(?:([^\\\\/?#]*)@)?([^\\\\/?#]*?)(?::([0-9]+))?(?=[\\\\/?#]|$))?([^?#]+)?(?:\\?([^#]*))?(?:#([\\s\\S]*))?$");function pt(o,u){if(o){o=o.split("&");for(var d=0;d<o.length;d++){var m=o[d].indexOf("="),N=null;if(0<=m){var M=o[d].substring(0,m);N=o[d].substring(m+1)}else M=o[d];u(M,N?decodeURIComponent(N.replace(/\+/g," ")):"")}}}function ct(o){if(this.g=this.o=this.j="",this.s=null,this.m=this.l="",this.h=!1,o instanceof ct){this.h=o.h,ge(this,o.j),this.o=o.o,this.g=o.g,Pe(this,o.s),this.l=o.l;var u=o.i,d=new Je;d.i=u.i,u.g&&(d.g=new Map(u.g),d.h=u.h),mt(this,d),this.m=o.m}else o&&(u=String(o).match(rt))?(this.h=!1,ge(this,u[1]||"",!0),this.o=$n(u[2]||""),this.g=$n(u[3]||"",!0),Pe(this,u[4]),this.l=$n(u[5]||"",!0),mt(this,u[6]||"",!0),this.m=$n(u[7]||"")):(this.h=!1,this.i=new Je(null,this.h))}ct.prototype.toString=function(){var o=[],u=this.j;u&&o.push(Yn(u,Ge,!0),":");var d=this.g;return(d||u=="file")&&(o.push("//"),(u=this.o)&&o.push(Yn(u,Ge,!0),"@"),o.push(encodeURIComponent(String(d)).replace(/%25([0-9a-fA-F]{2})/g,"%$1")),d=this.s,d!=null&&o.push(":",String(d))),(d=this.l)&&(this.g&&d.charAt(0)!="/"&&o.push("/"),o.push(Yn(d,d.charAt(0)=="/"?Le:Ie,!0))),(d=this.i.toString())&&o.push("?",d),(d=this.m)&&o.push("#",Yn(d,Ae)),o.join("")};function Ye(o){return new ct(o)}function ge(o,u,d){o.j=d?$n(u,!0):u,o.j&&(o.j=o.j.replace(/:$/,""))}function Pe(o,u){if(u){if(u=Number(u),isNaN(u)||0>u)throw Error("Bad port number "+u);o.s=u}else o.s=null}function mt(o,u,d){u instanceof Je?(o.i=u,on(o.i,o.h)):(d||(u=Yn(u,Ne)),o.i=new Je(u,o.h))}function me(o,u,d){o.i.set(u,d)}function ur(o){return me(o,"zx",Math.floor(2147483648*Math.random()).toString(36)+Math.abs(Math.floor(2147483648*Math.random())^Date.now()).toString(36)),o}function $n(o,u){return o?u?decodeURI(o.replace(/%25/g,"%2525")):decodeURIComponent(o):""}function Yn(o,u,d){return typeof o=="string"?(o=encodeURI(o).replace(u,Ir),d&&(o=o.replace(/%25([0-9a-fA-F]{2})/g,"%$1")),o):null}function Ir(o){return o=o.charCodeAt(0),"%"+(o>>4&15).toString(16)+(o&15).toString(16)}var Ge=/[#\/\?@]/g,Ie=/[#\?:]/g,Le=/[#\?]/g,Ne=/[#\?@]/g,Ae=/#/g;function Je(o,u){this.h=this.g=null,this.i=o||null,this.j=!!u}function Ke(o){o.g||(o.g=new Map,o.h=0,o.i&&pt(o.i,function(u,d){o.add(decodeURIComponent(u.replace(/\+/g," ")),d)}))}n=Je.prototype,n.add=function(o,u){Ke(this),this.i=null,o=Et(this,o);var d=this.g.get(o);return d||this.g.set(o,d=[]),d.push(u),this.h+=1,this};function Mt(o,u){Ke(o),u=Et(o,u),o.g.has(u)&&(o.i=null,o.h-=o.g.get(u).length,o.g.delete(u))}function At(o,u){return Ke(o),u=Et(o,u),o.g.has(u)}n.forEach=function(o,u){Ke(this),this.g.forEach(function(d,m){d.forEach(function(N){o.call(u,N,m,this)},this)},this)},n.na=function(){Ke(this);const o=Array.from(this.g.values()),u=Array.from(this.g.keys()),d=[];for(let m=0;m<u.length;m++){const N=o[m];for(let M=0;M<N.length;M++)d.push(u[m])}return d},n.V=function(o){Ke(this);let u=[];if(typeof o=="string")At(this,o)&&(u=u.concat(this.g.get(Et(this,o))));else{o=Array.from(this.g.values());for(let d=0;d<o.length;d++)u=u.concat(o[d])}return u},n.set=function(o,u){return Ke(this),this.i=null,o=Et(this,o),At(this,o)&&(this.h-=this.g.get(o).length),this.g.set(o,[u]),this.h+=1,this},n.get=function(o,u){return o?(o=this.V(o),0<o.length?String(o[0]):u):u};function gt(o,u,d){Mt(o,u),0<d.length&&(o.i=null,o.g.set(Et(o,u),P(d)),o.h+=d.length)}n.toString=function(){if(this.i)return this.i;if(!this.g)return"";const o=[],u=Array.from(this.g.keys());for(var d=0;d<u.length;d++){var m=u[d];const M=encodeURIComponent(String(m)),z=this.V(m);for(m=0;m<z.length;m++){var N=M;z[m]!==""&&(N+="="+encodeURIComponent(String(z[m]))),o.push(N)}}return this.i=o.join("&")};function Et(o,u){return u=String(u),o.j&&(u=u.toLowerCase()),u}function on(o,u){u&&!o.j&&(Ke(o),o.i=null,o.g.forEach(function(d,m){var N=m.toLowerCase();m!=N&&(Mt(this,m),gt(this,N,d))},o)),o.j=u}function Yt(o,u){const d=new As;if(l.Image){const m=new Image;m.onload=E(_t,d,"TestLoadImage: loaded",!0,u,m),m.onerror=E(_t,d,"TestLoadImage: error",!1,u,m),m.onabort=E(_t,d,"TestLoadImage: abort",!1,u,m),m.ontimeout=E(_t,d,"TestLoadImage: timeout",!1,u,m),l.setTimeout(function(){m.ontimeout&&m.ontimeout()},1e4),m.src=o}else u(!1)}function mn(o,u){const d=new As,m=new AbortController,N=setTimeout(()=>{m.abort(),_t(d,"TestPingServer: timeout",!1,u)},1e4);fetch(o,{signal:m.signal}).then(M=>{clearTimeout(N),M.ok?_t(d,"TestPingServer: ok",!0,u):_t(d,"TestPingServer: server error",!1,u)}).catch(()=>{clearTimeout(N),_t(d,"TestPingServer: error",!1,u)})}function _t(o,u,d,m,N){try{N&&(N.onload=null,N.onerror=null,N.onabort=null,N.ontimeout=null),m(d)}catch{}}function Xe(){this.g=new Pu}function ke(o,u,d){const m=d||"";try{lt(o,function(N,M){let z=N;h(N)&&(z=aa(N)),u.push(m+M+"="+encodeURIComponent(z))})}catch(N){throw u.push(m+"type="+encodeURIComponent("_badmap")),N}}function Jt(o){this.l=o.Ub||null,this.j=o.eb||!1}S(Jt,ro),Jt.prototype.g=function(){return new xt(this.l,this.j)},Jt.prototype.i=(function(o){return function(){return o}})({});function xt(o,u){tn.call(this),this.D=o,this.o=u,this.m=void 0,this.status=this.readyState=0,this.responseType=this.responseText=this.response=this.statusText="",this.onreadystatechange=null,this.u=new Headers,this.h=null,this.B="GET",this.A="",this.g=!1,this.v=this.j=this.l=null}S(xt,tn),n=xt.prototype,n.open=function(o,u){if(this.readyState!=0)throw this.abort(),Error("Error reopening a connection");this.B=o,this.A=u,this.readyState=1,ye(this)},n.send=function(o){if(this.readyState!=1)throw this.abort(),Error("need to call open() first. ");this.g=!0;const u={headers:this.u,method:this.B,credentials:this.m,cache:void 0};o&&(u.body=o),(this.D||l).fetch(new Request(this.A,u)).then(this.Sa.bind(this),this.ga.bind(this))},n.abort=function(){this.response=this.responseText="",this.u=new Headers,this.status=0,this.j&&this.j.cancel("Request was aborted.").catch(()=>{}),1<=this.readyState&&this.g&&this.readyState!=4&&(this.g=!1,Nt(this)),this.readyState=0},n.Sa=function(o){if(this.g&&(this.l=o,this.h||(this.status=this.l.status,this.statusText=this.l.statusText,this.h=o.headers,this.readyState=2,ye(this)),this.g&&(this.readyState=3,ye(this),this.g)))if(this.responseType==="arraybuffer")o.arrayBuffer().then(this.Qa.bind(this),this.ga.bind(this));else if(typeof l.ReadableStream<"u"&&"body"in o){if(this.j=o.body.getReader(),this.o){if(this.responseType)throw Error('responseType must be empty for "streamBinaryChunks" mode responses.');this.response=[]}else this.response=this.responseText="",this.v=new TextDecoder;Xt(this)}else o.text().then(this.Ra.bind(this),this.ga.bind(this))};function Xt(o){o.j.read().then(o.Pa.bind(o)).catch(o.ga.bind(o))}n.Pa=function(o){if(this.g){if(this.o&&o.value)this.response.push(o.value);else if(!this.o){var u=o.value?o.value:new Uint8Array(0);(u=this.v.decode(u,{stream:!o.done}))&&(this.response=this.responseText+=u)}o.done?Nt(this):ye(this),this.readyState==3&&Xt(this)}},n.Ra=function(o){this.g&&(this.response=this.responseText=o,Nt(this))},n.Qa=function(o){this.g&&(this.response=o,Nt(this))},n.ga=function(){this.g&&Nt(this)};function Nt(o){o.readyState=4,o.l=null,o.j=null,o.v=null,ye(o)}n.setRequestHeader=function(o,u){this.u.append(o,u)},n.getResponseHeader=function(o){return this.h&&this.h.get(o.toLowerCase())||""},n.getAllResponseHeaders=function(){if(!this.h)return"";const o=[],u=this.h.entries();for(var d=u.next();!d.done;)d=d.value,o.push(d[0]+": "+d[1]),d=u.next();return o.join(`\r
`)};function ye(o){o.onreadystatechange&&o.onreadystatechange.call(o)}Object.defineProperty(xt.prototype,"withCredentials",{get:function(){return this.m==="include"},set:function(o){this.m=o?"include":"same-origin"}});function wt(o){let u="";return Q(o,function(d,m){u+=m,u+=":",u+=d,u+=`\r
`}),u}function Lt(o,u,d){e:{for(m in d){var m=!1;break e}m=!0}m||(d=wt(d),typeof o=="string"?d!=null&&encodeURIComponent(String(d)):me(o,u,d))}function Ee(o){tn.call(this),this.headers=new Map,this.o=o||null,this.h=!1,this.v=this.g=null,this.D="",this.m=0,this.l="",this.j=this.B=this.u=this.A=!1,this.I=null,this.H="",this.J=!1}S(Ee,tn);var Vn=/^https?$/i,K=["POST","PUT"];n=Ee.prototype,n.Ha=function(o){this.J=o},n.ea=function(o,u,d,m){if(this.g)throw Error("[goog.net.XhrIo] Object is active with another request="+this.D+"; newUri="+o);u=u?u.toUpperCase():"GET",this.D=o,this.l="",this.m=0,this.A=!1,this.h=!0,this.g=this.o?this.o.g():ca.g(),this.v=this.o?Ol(this.o):Ol(ca),this.g.onreadystatechange=_(this.Ea,this);try{this.B=!0,this.g.open(u,String(o),!0),this.B=!1}catch(M){Ze(this,M);return}if(o=d||"",d=new Map(this.headers),m)if(Object.getPrototypeOf(m)===Object.prototype)for(var N in m)d.set(N,m[N]);else if(typeof m.keys=="function"&&typeof m.get=="function")for(const M of m.keys())d.set(M,m.get(M));else throw Error("Unknown input type for opt_headers: "+String(m));m=Array.from(d.keys()).find(M=>M.toLowerCase()=="content-type"),N=l.FormData&&o instanceof l.FormData,!(0<=Array.prototype.indexOf.call(K,u,void 0))||m||N||d.set("Content-Type","application/x-www-form-urlencoded;charset=utf-8");for(const[M,z]of d)this.g.setRequestHeader(M,z);this.H&&(this.g.responseType=this.H),"withCredentials"in this.g&&this.g.withCredentials!==this.J&&(this.g.withCredentials=this.J);try{qn(this),this.u=!0,this.g.send(o),this.u=!1}catch(M){Ze(this,M)}};function Ze(o,u){o.h=!1,o.g&&(o.j=!0,o.g.abort(),o.j=!1),o.l=u,o.m=5,qe(o),bt(o)}function qe(o){o.A||(o.A=!0,fn(o,"complete"),fn(o,"error"))}n.abort=function(o){this.g&&this.h&&(this.h=!1,this.j=!0,this.g.abort(),this.j=!1,this.m=o||7,fn(this,"complete"),fn(this,"abort"),bt(this))},n.N=function(){this.g&&(this.h&&(this.h=!1,this.j=!0,this.g.abort(),this.j=!1),bt(this,!0)),Ee.aa.N.call(this)},n.Ea=function(){this.s||(this.B||this.u||this.j?et(this):this.bb())},n.bb=function(){et(this)};function et(o){if(o.h&&typeof a<"u"&&(!o.v[1]||St(o)!=4||o.Z()!=2)){if(o.u&&St(o)==4)Cl(o.Ea,0,o);else if(fn(o,"readystatechange"),St(o)==4){o.h=!1;try{const z=o.Z();e:switch(z){case 200:case 201:case 202:case 204:case 206:case 304:case 1223:var u=!0;break e;default:u=!1}var d;if(!(d=u)){var m;if(m=z===0){var N=String(o.D).match(rt)[1]||null;!N&&l.self&&l.self.location&&(N=l.self.location.protocol.slice(0,-1)),m=!Vn.test(N?N.toLowerCase():"")}d=m}if(d)fn(o,"complete"),fn(o,"success");else{o.m=6;try{var M=2<St(o)?o.g.statusText:""}catch{M=""}o.l=M+" ["+o.Z()+"]",qe(o)}}finally{bt(o)}}}}function bt(o,u){if(o.g){qn(o);const d=o.g,m=o.v[0]?()=>{}:null;o.g=null,o.v=null,u||fn(o,"ready");try{d.onreadystatechange=m}catch{}}}function qn(o){o.I&&(l.clearTimeout(o.I),o.I=null)}n.isActive=function(){return!!this.g};function St(o){return o.g?o.g.readyState:0}n.Z=function(){try{return 2<St(this)?this.g.status:-1}catch{return-1}},n.oa=function(){try{return this.g?this.g.responseText:""}catch{return""}},n.Oa=function(o){if(this.g){var u=this.g.responseText;return o&&u.indexOf(o)==0&&(u=u.substring(o.length)),Cu(u)}};function Ar(o){try{if(!o.g)return null;if("response"in o.g)return o.g.response;switch(o.H){case"":case"text":return o.g.responseText;case"arraybuffer":if("mozResponseArrayBuffer"in o.g)return o.g.mozResponseArrayBuffer}return null}catch{return null}}function br(o){const u={};o=(o.g&&2<=St(o)&&o.g.getAllResponseHeaders()||"").split(`\r
`);for(let m=0;m<o.length;m++){if(U(o[m]))continue;var d=C(o[m]);const N=d[0];if(d=d[1],typeof d!="string")continue;d=d.trim();const M=u[N]||[];u[N]=M,M.push(d)}A(u,function(m){return m.join(", ")})}n.Ba=function(){return this.m},n.Ka=function(){return typeof this.l=="string"?this.l:String(this.l)};function Bn(o,u,d){return d&&d.internalChannelParams&&d.internalChannelParams[o]||u}function Mn(o){this.Aa=0,this.i=[],this.j=new As,this.ia=this.qa=this.I=this.W=this.g=this.ya=this.D=this.H=this.m=this.S=this.o=null,this.Ya=this.U=0,this.Va=Bn("failFast",!1,o),this.F=this.C=this.u=this.s=this.l=null,this.X=!0,this.za=this.T=-1,this.Y=this.v=this.B=0,this.Ta=Bn("baseRetryDelayMs",5e3,o),this.cb=Bn("retryDelaySeedMs",1e4,o),this.Wa=Bn("forwardChannelMaxRetries",2,o),this.wa=Bn("forwardChannelRequestTimeoutMs",2e4,o),this.pa=o&&o.xmlHttpFactory||void 0,this.Xa=o&&o.Tb||void 0,this.Ca=o&&o.useFetchStreams||!1,this.L=void 0,this.J=o&&o.supportsCrossDomainXhr||!1,this.K="",this.h=new Dt(o&&o.concurrentRequestLimit),this.Da=new Xe,this.P=o&&o.fastHandshake||!1,this.O=o&&o.encodeInitMessageHeaders||!1,this.P&&this.O&&(this.O=!1),this.Ua=o&&o.Rb||!1,o&&o.xa&&this.j.xa(),o&&o.forceLongPolling&&(this.X=!1),this.ba=!this.P&&this.X&&o&&o.detectBufferingProxy||!1,this.ja=void 0,o&&o.longPollingTimeout&&0<o.longPollingTimeout&&(this.ja=o.longPollingTimeout),this.ca=void 0,this.R=0,this.M=!1,this.ka=this.A=null}n=Mn.prototype,n.la=8,n.G=1,n.connect=function(o,u,d,m){rn(0),this.W=o,this.H=u||{},d&&m!==void 0&&(this.H.OSID=d,this.H.OAID=m),this.F=this.X,this.I=ua(this,null,this.W),Jn(this)};function hr(o){if(Ui(o),o.G==3){var u=o.U++,d=Ye(o.I);if(me(d,"SID",o.K),me(d,"RID",u),me(d,"TYPE","terminate"),Rr(o,d),u=new $(o,o.j,u),u.L=2,u.v=ur(Ye(d)),d=!1,l.navigator&&l.navigator.sendBeacon)try{d=l.navigator.sendBeacon(u.v.toString(),"")}catch{}!d&&l.Image&&(new Image().src=u.v,d=!0),d||(u.g=Ul(u.j,null),u.g.ea(u.v)),u.F=Date.now(),dt(u)}bs(o)}function Br(o){o.g&&(Fe(o),o.g.cancel(),o.g=null)}function Ui(o){Br(o),o.u&&(l.clearTimeout(o.u),o.u=null),zn(o),o.h.cancel(),o.s&&(typeof o.s=="number"&&l.clearTimeout(o.s),o.s=null)}function Jn(o){if(!Qt(o.h)&&!o.s){o.s=!0;var u=o.Ga;ar||Qn(),lr||(ar(),lr=!0),Gt.add(u,o),o.B=0}}function fi(o,u){return Ot(o.h)>=o.h.j-(o.s?1:0)?!1:o.s?(o.i=u.D.concat(o.i),!0):o.G==1||o.G==2||o.B>=(o.Va?0:o.Wa)?!1:(o.s=Is(_(o.Ga,o,u),jn(o,o.B)),o.B++,!0)}n.Ga=function(o){if(this.s)if(this.s=null,this.G==1){if(!o){this.U=Math.floor(1e5*Math.random()),o=this.U++;const N=new $(this,this.j,o);let M=this.o;if(this.S&&(M?(M=v(M),b(M,this.S)):M=this.S),this.m!==null||this.O||(N.H=M,M=null),this.P)e:{for(var u=0,d=0;d<this.i.length;d++){t:{var m=this.i[d];if("__data__"in m.map&&(m=m.map.__data__,typeof m=="string")){m=m.length;break t}m=void 0}if(m===void 0)break;if(u+=m,4096<u){u=d;break e}if(u===4096||d===this.i.length-1){u=d+1;break e}}u=1e3}else u=1e3;u=le(this,N,u),d=Ye(this.I),me(d,"RID",o),me(d,"CVER",22),this.D&&me(d,"X-HTTP-Session-Id",this.D),Rr(this,d),M&&(this.O?u="headers="+encodeURIComponent(String(wt(M)))+"&"+u:this.m&&Lt(d,this.m,M)),Vt(this.h,N),this.Ua&&me(d,"TYPE","init"),this.P?(me(d,"$req",u),me(d,"SID","null"),N.T=!0,ot(N,d,null)):ot(N,d,u),this.G=2}}else this.G==3&&(o?Sr(this,o):this.i.length==0||Qt(this.h)||Sr(this))};function Sr(o,u){var d;u?d=u.l:d=o.U++;const m=Ye(o.I);me(m,"SID",o.K),me(m,"RID",d),me(m,"AID",o.T),Rr(o,m),o.m&&o.o&&Lt(m,o.m,o.o),d=new $(o,o.j,d,o.B+1),o.m===null&&(d.H=o.o),u&&(o.i=u.D.concat(o.i)),u=le(o,d,1e3),d.I=Math.round(.5*o.wa)+Math.round(.5*o.wa*Math.random()),Vt(o.h,d),ot(d,m,u)}function Rr(o,u){o.H&&Q(o.H,function(d,m){me(u,m,d)}),o.l&&lt({},function(d,m){me(u,m,d)})}function le(o,u,d){d=Math.min(o.i.length,d);var m=o.l?_(o.l.Na,o.l,o):null;e:{var N=o.i;let M=-1;for(;;){const z=["count="+d];M==-1?0<d?(M=N[0].g,z.push("ofs="+M)):M=0:z.push("ofs="+M);let ut=!0;for(let gn=0;gn<d;gn++){let ze=N[gn].g;const In=N[gn].map;if(ze-=M,0>ze)M=Math.max(0,N[gn].g-100),ut=!1;else try{ke(In,z,"req"+ze+"_")}catch{m&&m(In)}}if(ut){m=z.join("&");break e}}}return o=o.i.splice(0,d),u.D=o,m}function ce(o){if(!o.g&&!o.u){o.Y=1;var u=o.Fa;ar||Qn(),lr||(ar(),lr=!0),Gt.add(u,o),o.v=0}}function se(o){return o.g||o.u||3<=o.v?!1:(o.Y++,o.u=Is(_(o.Fa,o),jn(o,o.v)),o.v++,!0)}n.Fa=function(){if(this.u=null,an(this),this.ba&&!(this.M||this.g==null||0>=this.R)){var o=2*this.R;this.j.info("BP detection timer enabled: "+o),this.A=Is(_(this.ab,this),o)}},n.ab=function(){this.A&&(this.A=null,this.j.info("BP detection timeout reached."),this.j.info("Buffering proxy detected and switch to long-polling!"),this.F=!1,this.M=!0,rn(10),Br(this),an(this))};function Fe(o){o.A!=null&&(l.clearTimeout(o.A),o.A=null)}function an(o){o.g=new $(o,o.j,"rpc",o.Y),o.m===null&&(o.g.H=o.o),o.g.O=0;var u=Ye(o.qa);me(u,"RID","rpc"),me(u,"SID",o.K),me(u,"AID",o.T),me(u,"CI",o.F?"0":"1"),!o.F&&o.ja&&me(u,"TO",o.ja),me(u,"TYPE","xmlhttp"),Rr(o,u),o.m&&o.o&&Lt(u,o.m,o.o),o.L&&(o.g.I=o.L);var d=o.g;o=o.ia,d.L=1,d.v=ur(Ye(u)),d.m=null,d.P=!0,ht(d,o)}n.Za=function(){this.C!=null&&(this.C=null,Br(this),se(this),rn(19))};function zn(o){o.C!=null&&(l.clearTimeout(o.C),o.C=null)}function Xn(o,u){var d=null;if(o.g==u){zn(o),Fe(o),o.g=null;var m=2}else if(kt(o.h,u))d=u.D,xe(o.h,u),m=1;else return;if(o.G!=0){if(u.o)if(m==1){d=u.m?u.m.length:0,u=Date.now()-u.F;var N=o.B;m=ws(),fn(m,new xl(m,d)),Jn(o)}else ce(o);else if(N=u.s,N==3||N==0&&0<u.X||!(m==1&&fi(o,u)||m==2&&se(o)))switch(d&&0<d.length&&(u=o.h,u.i=u.i.concat(d)),N){case 1:dr(o,5);break;case 4:dr(o,10);break;case 3:dr(o,6);break;default:dr(o,2)}}}function jn(o,u){let d=o.Ta+Math.floor(Math.random()*o.cb);return o.isActive()||(d*=2),d*u}function dr(o,u){if(o.j.info("Error code "+u),u==2){var d=_(o.fb,o),m=o.Xa;const N=!m;m=new ct(m||"//www.google.com/images/cleardot.gif"),l.location&&l.location.protocol=="http"||ge(m,"https"),ur(m),N?Yt(m.toString(),d):mn(m.toString(),d)}else rn(2);o.G=0,o.l&&o.l.sa(u),bs(o),Ui(o)}n.fb=function(o){o?(this.j.info("Successfully pinged google.com"),rn(2)):(this.j.info("Failed to ping google.com"),rn(1))};function bs(o){if(o.G=0,o.ka=[],o.l){const u=te(o.h);(u.length!=0||o.i.length!=0)&&(I(o.ka,u),I(o.ka,o.i),o.h.i.length=0,P(o.i),o.i.length=0),o.l.ra()}}function ua(o,u,d){var m=d instanceof ct?Ye(d):new ct(d);if(m.g!="")u&&(m.g=u+"."+m.g),Pe(m,m.s);else{var N=l.location;m=N.protocol,u=u?u+"."+N.hostname:N.hostname,N=+N.port;var M=new ct(null);m&&ge(M,m),u&&(M.g=u),N&&Pe(M,N),d&&(M.l=d),m=M}return d=o.D,u=o.ya,d&&u&&me(m,d,u),me(m,"VER",o.la),Rr(o,m),m}function Ul(o,u,d){if(u&&!o.J)throw Error("Can't create secondary domain capable XhrIo object.");return u=o.Ca&&!o.pa?new Ee(new Jt({eb:d})):new Ee(o.pa),u.Ha(o.J),u}n.isActive=function(){return!!this.l&&this.l.isActive(this)};function ha(){}n=ha.prototype,n.ua=function(){},n.ta=function(){},n.sa=function(){},n.ra=function(){},n.isActive=function(){return!0},n.Na=function(){};function so(){}so.prototype.g=function(o,u){return new Tn(o,u)};function Tn(o,u){tn.call(this),this.g=new Mn(u),this.l=o,this.h=u&&u.messageUrlParams||null,o=u&&u.messageHeaders||null,u&&u.clientProtocolHeaderRequired&&(o?o["X-Client-Protocol"]="webchannel":o={"X-Client-Protocol":"webchannel"}),this.g.o=o,o=u&&u.initMessageHeaders||null,u&&u.messageContentType&&(o?o["X-WebChannel-Content-Type"]=u.messageContentType:o={"X-WebChannel-Content-Type":u.messageContentType}),u&&u.va&&(o?o["X-WebChannel-Client-Profile"]=u.va:o={"X-WebChannel-Client-Profile":u.va}),this.g.S=o,(o=u&&u.Sb)&&!U(o)&&(this.g.m=o),this.v=u&&u.supportsCrossDomainXhr||!1,this.u=u&&u.sendRawJson||!1,(u=u&&u.httpSessionIdParam)&&!U(u)&&(this.g.D=u,o=this.h,o!==null&&u in o&&(o=this.h,u in o&&delete o[u])),this.j=new pi(this)}S(Tn,tn),Tn.prototype.m=function(){this.g.l=this.j,this.v&&(this.g.J=!0),this.g.connect(this.l,this.h||void 0)},Tn.prototype.close=function(){hr(this.g)},Tn.prototype.o=function(o){var u=this.g;if(typeof o=="string"){var d={};d.__data__=o,o=d}else this.u&&(d={},d.__data__=aa(o),o=d);u.i.push(new Kt(u.Ya++,o)),u.G==3&&Jn(u)},Tn.prototype.N=function(){this.g.l=null,delete this.j,hr(this.g),delete this.g,Tn.aa.N.call(this)};function $l(o){Fi.call(this),o.__headers__&&(this.headers=o.__headers__,this.statusCode=o.__status__,delete o.__headers__,delete o.__status__);var u=o.__sm__;if(u){e:{for(const d in u){o=d;break e}o=void 0}(this.i=o)&&(o=this.i,u=u!==null&&o in u?u[o]:void 0),this.data=u}else this.data=o}S($l,Fi);function da(){Un.call(this),this.status=1}S(da,Un);function pi(o){this.g=o}S(pi,ha),pi.prototype.ua=function(){fn(this.g,"a")},pi.prototype.ta=function(o){fn(this.g,new $l(o))},pi.prototype.sa=function(o){fn(this.g,new da)},pi.prototype.ra=function(){fn(this.g,"b")},so.prototype.createWebChannel=so.prototype.g,Tn.prototype.send=Tn.prototype.o,Tn.prototype.open=Tn.prototype.m,Tn.prototype.close=Tn.prototype.close,uv=function(){return new so},cv=function(){return ws()},lv=hi,Mh={mb:0,pb:1,qb:2,Jb:3,Ob:4,Lb:5,Mb:6,Kb:7,Ib:8,Nb:9,PROXY:10,NOPROXY:11,Gb:12,Cb:13,Db:14,Bb:15,Eb:16,Fb:17,ib:18,hb:19,jb:20},io.NO_ERROR=0,io.TIMEOUT=8,io.HTTP_ERROR=6,hc=io,Fl.COMPLETE="complete",av=Fl,nn.EventType=pn,pn.OPEN="a",pn.CLOSE="b",pn.ERROR="c",pn.MESSAGE="d",tn.prototype.listen=tn.prototype.K,Ca=nn,Ee.prototype.listenOnce=Ee.prototype.L,Ee.prototype.getLastError=Ee.prototype.Ka,Ee.prototype.getLastErrorCode=Ee.prototype.Ba,Ee.prototype.getStatus=Ee.prototype.Z,Ee.prototype.getResponseJson=Ee.prototype.Oa,Ee.prototype.getResponseText=Ee.prototype.oa,Ee.prototype.send=Ee.prototype.ea,Ee.prototype.setWithCredentials=Ee.prototype.Ha,ov=Ee}).apply(typeof Ql<"u"?Ql:typeof self<"u"?self:typeof window<"u"?window:{});const hp="@firebase/firestore",dp="4.8.0";/**
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
 */class Hn{constructor(e){this.uid=e}isAuthenticated(){return this.uid!=null}toKey(){return this.isAuthenticated()?"uid:"+this.uid:"anonymous-user"}isEqual(e){return e.uid===this.uid}}Hn.UNAUTHENTICATED=new Hn(null),Hn.GOOGLE_CREDENTIALS=new Hn("google-credentials-uid"),Hn.FIRST_PARTY=new Hn("first-party-uid"),Hn.MOCK_USER=new Hn("mock-user");/**
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
 */let na="11.10.0";/**
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
 */const Ks=new nu("@firebase/firestore");function fo(){return Ks.logLevel}function W(n,...e){if(Ks.logLevel<=Oe.DEBUG){const t=e.map(Pd);Ks.debug(`Firestore (${na}): ${n}`,...t)}}function Pi(n,...e){if(Ks.logLevel<=Oe.ERROR){const t=e.map(Pd);Ks.error(`Firestore (${na}): ${n}`,...t)}}function Qs(n,...e){if(Ks.logLevel<=Oe.WARN){const t=e.map(Pd);Ks.warn(`Firestore (${na}): ${n}`,...t)}}function Pd(n){if(typeof n=="string")return n;try{/**
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
*/return(function(t){return JSON.stringify(t)})(n)}catch{return n}}/**
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
 */function ie(n,e,t){let r="Unexpected state";typeof e=="string"?r=e:t=e,hv(n,r,t)}function hv(n,e,t){let r=`FIRESTORE (${na}) INTERNAL ASSERTION FAILED: ${e} (ID: ${n.toString(16)})`;if(t!==void 0)try{r+=" CONTEXT: "+JSON.stringify(t)}catch{r+=" CONTEXT: "+t}throw Pi(r),new Error(r)}function it(n,e,t,r){let i="Unexpected state";typeof t=="string"?i=t:r=t,n||hv(e,i,r)}function Ce(n,e){return n}/**
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
 */const x={OK:"ok",CANCELLED:"cancelled",UNKNOWN:"unknown",INVALID_ARGUMENT:"invalid-argument",DEADLINE_EXCEEDED:"deadline-exceeded",NOT_FOUND:"not-found",ALREADY_EXISTS:"already-exists",PERMISSION_DENIED:"permission-denied",UNAUTHENTICATED:"unauthenticated",RESOURCE_EXHAUSTED:"resource-exhausted",FAILED_PRECONDITION:"failed-precondition",ABORTED:"aborted",OUT_OF_RANGE:"out-of-range",UNIMPLEMENTED:"unimplemented",INTERNAL:"internal",UNAVAILABLE:"unavailable",DATA_LOSS:"data-loss"};class B extends ki{constructor(e,t){super(e,t),this.code=e,this.message=t,this.toString=()=>`${this.name}: [code=${this.code}]: ${this.message}`}}/**
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
 */class ti{constructor(){this.promise=new Promise(((e,t)=>{this.resolve=e,this.reject=t}))}}/**
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
 */class mb{constructor(e,t){this.user=t,this.type="OAuth",this.headers=new Map,this.headers.set("Authorization",`Bearer ${e}`)}}class gb{getToken(){return Promise.resolve(null)}invalidateToken(){}start(e,t){e.enqueueRetryable((()=>t(Hn.UNAUTHENTICATED)))}shutdown(){}}class _b{constructor(e){this.t=e,this.currentUser=Hn.UNAUTHENTICATED,this.i=0,this.forceRefresh=!1,this.auth=null}start(e,t){it(this.o===void 0,42304);let r=this.i;const i=c=>this.i!==r?(r=this.i,t(c)):Promise.resolve();let s=new ti;this.o=()=>{this.i++,this.currentUser=this.u(),s.resolve(),s=new ti,e.enqueueRetryable((()=>i(this.currentUser)))};const a=()=>{const c=s;e.enqueueRetryable((async()=>{await c.promise,await i(this.currentUser)}))},l=c=>{W("FirebaseAuthCredentialsProvider","Auth detected"),this.auth=c,this.o&&(this.auth.addAuthTokenListener(this.o),a())};this.t.onInit((c=>l(c))),setTimeout((()=>{if(!this.auth){const c=this.t.getImmediate({optional:!0});c?l(c):(W("FirebaseAuthCredentialsProvider","Auth not yet detected"),s.resolve(),s=new ti)}}),0),a()}getToken(){const e=this.i,t=this.forceRefresh;return this.forceRefresh=!1,this.auth?this.auth.getToken(t).then((r=>this.i!==e?(W("FirebaseAuthCredentialsProvider","getToken aborted due to token change."),this.getToken()):r?(it(typeof r.accessToken=="string",31837,{l:r}),new mb(r.accessToken,this.currentUser)):null)):Promise.resolve(null)}invalidateToken(){this.forceRefresh=!0}shutdown(){this.auth&&this.o&&this.auth.removeAuthTokenListener(this.o),this.o=void 0}u(){const e=this.auth&&this.auth.getUid();return it(e===null||typeof e=="string",2055,{h:e}),new Hn(e)}}class vb{constructor(e,t,r){this.P=e,this.T=t,this.I=r,this.type="FirstParty",this.user=Hn.FIRST_PARTY,this.A=new Map}R(){return this.I?this.I():null}get headers(){this.A.set("X-Goog-AuthUser",this.P);const e=this.R();return e&&this.A.set("Authorization",e),this.T&&this.A.set("X-Goog-Iam-Authorization-Token",this.T),this.A}}class yb{constructor(e,t,r){this.P=e,this.T=t,this.I=r}getToken(){return Promise.resolve(new vb(this.P,this.T,this.I))}start(e,t){e.enqueueRetryable((()=>t(Hn.FIRST_PARTY)))}shutdown(){}invalidateToken(){}}class fp{constructor(e){this.value=e,this.type="AppCheck",this.headers=new Map,e&&e.length>0&&this.headers.set("x-firebase-appcheck",this.value)}}class Eb{constructor(e,t){this.V=t,this.forceRefresh=!1,this.appCheck=null,this.m=null,this.p=null,vr(e)&&e.settings.appCheckToken&&(this.p=e.settings.appCheckToken)}start(e,t){it(this.o===void 0,3512);const r=s=>{s.error!=null&&W("FirebaseAppCheckTokenProvider",`Error getting App Check token; using placeholder token instead. Error: ${s.error.message}`);const a=s.token!==this.m;return this.m=s.token,W("FirebaseAppCheckTokenProvider",`Received ${a?"new":"existing"} token.`),a?t(s.token):Promise.resolve()};this.o=s=>{e.enqueueRetryable((()=>r(s)))};const i=s=>{W("FirebaseAppCheckTokenProvider","AppCheck detected"),this.appCheck=s,this.o&&this.appCheck.addTokenListener(this.o)};this.V.onInit((s=>i(s))),setTimeout((()=>{if(!this.appCheck){const s=this.V.getImmediate({optional:!0});s?i(s):W("FirebaseAppCheckTokenProvider","AppCheck not yet detected")}}),0)}getToken(){if(this.p)return Promise.resolve(new fp(this.p));const e=this.forceRefresh;return this.forceRefresh=!1,this.appCheck?this.appCheck.getToken(e).then((t=>t?(it(typeof t.token=="string",44558,{tokenResult:t}),this.m=t.token,new fp(t.token)):null)):Promise.resolve(null)}invalidateToken(){this.forceRefresh=!0}shutdown(){this.appCheck&&this.o&&this.appCheck.removeTokenListener(this.o),this.o=void 0}}/**
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
 */function wb(n){const e=typeof self<"u"&&(self.crypto||self.msCrypto),t=new Uint8Array(n);if(e&&typeof e.getRandomValues=="function")e.getRandomValues(t);else for(let r=0;r<n;r++)t[r]=Math.floor(256*Math.random());return t}/**
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
 */function dv(){return new TextEncoder}/**
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
 */class kd{static newId(){const e="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",t=62*Math.floor(4.129032258064516);let r="";for(;r.length<20;){const i=wb(40);for(let s=0;s<i.length;++s)r.length<20&&i[s]<t&&(r+=e.charAt(i[s]%62))}return r}}function Re(n,e){return n<e?-1:n>e?1:0}function xh(n,e){let t=0;for(;t<n.length&&t<e.length;){const r=n.codePointAt(t),i=e.codePointAt(t);if(r!==i){if(r<128&&i<128)return Re(r,i);{const s=dv(),a=Tb(s.encode(pp(n,t)),s.encode(pp(e,t)));return a!==0?a:Re(r,i)}}t+=r>65535?2:1}return Re(n.length,e.length)}function pp(n,e){return n.codePointAt(e)>65535?n.substring(e,e+2):n.substring(e,e+1)}function Tb(n,e){for(let t=0;t<n.length&&t<e.length;++t)if(n[t]!==e[t])return Re(n[t],e[t]);return Re(n.length,e.length)}function Fo(n,e,t){return n.length===e.length&&n.every(((r,i)=>t(r,e[i])))}/**
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
 */const mp="__name__";class zr{constructor(e,t,r){t===void 0?t=0:t>e.length&&ie(637,{offset:t,range:e.length}),r===void 0?r=e.length-t:r>e.length-t&&ie(1746,{length:r,range:e.length-t}),this.segments=e,this.offset=t,this.len=r}get length(){return this.len}isEqual(e){return zr.comparator(this,e)===0}child(e){const t=this.segments.slice(this.offset,this.limit());return e instanceof zr?e.forEach((r=>{t.push(r)})):t.push(e),this.construct(t)}limit(){return this.offset+this.length}popFirst(e){return e=e===void 0?1:e,this.construct(this.segments,this.offset+e,this.length-e)}popLast(){return this.construct(this.segments,this.offset,this.length-1)}firstSegment(){return this.segments[this.offset]}lastSegment(){return this.get(this.length-1)}get(e){return this.segments[this.offset+e]}isEmpty(){return this.length===0}isPrefixOf(e){if(e.length<this.length)return!1;for(let t=0;t<this.length;t++)if(this.get(t)!==e.get(t))return!1;return!0}isImmediateParentOf(e){if(this.length+1!==e.length)return!1;for(let t=0;t<this.length;t++)if(this.get(t)!==e.get(t))return!1;return!0}forEach(e){for(let t=this.offset,r=this.limit();t<r;t++)e(this.segments[t])}toArray(){return this.segments.slice(this.offset,this.limit())}static comparator(e,t){const r=Math.min(e.length,t.length);for(let i=0;i<r;i++){const s=zr.compareSegments(e.get(i),t.get(i));if(s!==0)return s}return Re(e.length,t.length)}static compareSegments(e,t){const r=zr.isNumericId(e),i=zr.isNumericId(t);return r&&!i?-1:!r&&i?1:r&&i?zr.extractNumericId(e).compare(zr.extractNumericId(t)):xh(e,t)}static isNumericId(e){return e.startsWith("__id")&&e.endsWith("__")}static extractNumericId(e){return ts.fromString(e.substring(4,e.length-2))}}class tt extends zr{construct(e,t,r){return new tt(e,t,r)}canonicalString(){return this.toArray().join("/")}toString(){return this.canonicalString()}toUriEncodedString(){return this.toArray().map(encodeURIComponent).join("/")}static fromString(...e){const t=[];for(const r of e){if(r.indexOf("//")>=0)throw new B(x.INVALID_ARGUMENT,`Invalid segment (${r}). Paths must not contain // in them.`);t.push(...r.split("/").filter((i=>i.length>0)))}return new tt(t)}static emptyPath(){return new tt([])}}const Ib=/^[_a-zA-Z][_a-zA-Z0-9]*$/;class Cn extends zr{construct(e,t,r){return new Cn(e,t,r)}static isValidIdentifier(e){return Ib.test(e)}canonicalString(){return this.toArray().map((e=>(e=e.replace(/\\/g,"\\\\").replace(/`/g,"\\`"),Cn.isValidIdentifier(e)||(e="`"+e+"`"),e))).join(".")}toString(){return this.canonicalString()}isKeyField(){return this.length===1&&this.get(0)===mp}static keyField(){return new Cn([mp])}static fromServerFormat(e){const t=[];let r="",i=0;const s=()=>{if(r.length===0)throw new B(x.INVALID_ARGUMENT,`Invalid field path (${e}). Paths must not be empty, begin with '.', end with '.', or contain '..'`);t.push(r),r=""};let a=!1;for(;i<e.length;){const l=e[i];if(l==="\\"){if(i+1===e.length)throw new B(x.INVALID_ARGUMENT,"Path has trailing escape character: "+e);const c=e[i+1];if(c!=="\\"&&c!=="."&&c!=="`")throw new B(x.INVALID_ARGUMENT,"Path has invalid escape sequence: "+e);r+=c,i+=2}else l==="`"?(a=!a,i++):l!=="."||a?(r+=l,i++):(s(),i++)}if(s(),a)throw new B(x.INVALID_ARGUMENT,"Unterminated ` in path: "+e);return new Cn(t)}static emptyPath(){return new Cn([])}}/**
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
 */class Z{constructor(e){this.path=e}static fromPath(e){return new Z(tt.fromString(e))}static fromName(e){return new Z(tt.fromString(e).popFirst(5))}static empty(){return new Z(tt.emptyPath())}get collectionGroup(){return this.path.popLast().lastSegment()}hasCollectionId(e){return this.path.length>=2&&this.path.get(this.path.length-2)===e}getCollectionGroup(){return this.path.get(this.path.length-2)}getCollectionPath(){return this.path.popLast()}isEqual(e){return e!==null&&tt.comparator(this.path,e.path)===0}toString(){return this.path.toString()}static comparator(e,t){return tt.comparator(e.path,t.path)}static isDocumentKey(e){return e.length%2==0}static fromSegments(e){return new Z(new tt(e.slice()))}}/**
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
 */function fv(n,e,t){if(!t)throw new B(x.INVALID_ARGUMENT,`Function ${n}() cannot be called with an empty ${e}.`)}function Ab(n,e,t,r){if(e===!0&&r===!0)throw new B(x.INVALID_ARGUMENT,`${n} and ${t} cannot be used together.`)}function gp(n){if(!Z.isDocumentKey(n))throw new B(x.INVALID_ARGUMENT,`Invalid document reference. Document references must have an even number of segments, but ${n} has ${n.length}.`)}function _p(n){if(Z.isDocumentKey(n))throw new B(x.INVALID_ARGUMENT,`Invalid collection reference. Collection references must have an odd number of segments, but ${n} has ${n.length}.`)}function pv(n){return typeof n=="object"&&n!==null&&(Object.getPrototypeOf(n)===Object.prototype||Object.getPrototypeOf(n)===null)}function ou(n){if(n===void 0)return"undefined";if(n===null)return"null";if(typeof n=="string")return n.length>20&&(n=`${n.substring(0,20)}...`),JSON.stringify(n);if(typeof n=="number"||typeof n=="boolean")return""+n;if(typeof n=="object"){if(n instanceof Array)return"an array";{const e=(function(r){return r.constructor?r.constructor.name:null})(n);return e?`a custom ${e} object`:"an object"}}return typeof n=="function"?"a function":ie(12329,{type:typeof n})}function Uo(n,e){if("_delegate"in n&&(n=n._delegate),!(n instanceof e)){if(e.name===n.constructor.name)throw new B(x.INVALID_ARGUMENT,"Type does not match the expected instance. Did you pass a reference from a different Firestore SDK?");{const t=ou(n);throw new B(x.INVALID_ARGUMENT,`Expected type '${e.name}', but it was: ${t}`)}}return n}function bb(n,e){if(e<=0)throw new B(x.INVALID_ARGUMENT,`Function ${n}() requires a positive number, but it was: ${e}.`)}/**
 * @license
 * Copyright 2025 Google LLC
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
 */function Ht(n,e){const t={typeString:n};return e&&(t.value=e),t}function vl(n,e){if(!pv(n))throw new B(x.INVALID_ARGUMENT,"JSON must be an object");let t;for(const r in e)if(e[r]){const i=e[r].typeString,s="value"in e[r]?{value:e[r].value}:void 0;if(!(r in n)){t=`JSON missing required field: '${r}'`;break}const a=n[r];if(i&&typeof a!==i){t=`JSON field '${r}' must be a ${i}.`;break}if(s!==void 0&&a!==s.value){t=`Expected '${r}' field to equal '${s.value}'`;break}}if(t)throw new B(x.INVALID_ARGUMENT,t);return!0}/**
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
 */const vp=-62135596800,yp=1e6;class yt{static now(){return yt.fromMillis(Date.now())}static fromDate(e){return yt.fromMillis(e.getTime())}static fromMillis(e){const t=Math.floor(e/1e3),r=Math.floor((e-1e3*t)*yp);return new yt(t,r)}constructor(e,t){if(this.seconds=e,this.nanoseconds=t,t<0)throw new B(x.INVALID_ARGUMENT,"Timestamp nanoseconds out of range: "+t);if(t>=1e9)throw new B(x.INVALID_ARGUMENT,"Timestamp nanoseconds out of range: "+t);if(e<vp)throw new B(x.INVALID_ARGUMENT,"Timestamp seconds out of range: "+e);if(e>=253402300800)throw new B(x.INVALID_ARGUMENT,"Timestamp seconds out of range: "+e)}toDate(){return new Date(this.toMillis())}toMillis(){return 1e3*this.seconds+this.nanoseconds/yp}_compareTo(e){return this.seconds===e.seconds?Re(this.nanoseconds,e.nanoseconds):Re(this.seconds,e.seconds)}isEqual(e){return e.seconds===this.seconds&&e.nanoseconds===this.nanoseconds}toString(){return"Timestamp(seconds="+this.seconds+", nanoseconds="+this.nanoseconds+")"}toJSON(){return{type:yt._jsonSchemaVersion,seconds:this.seconds,nanoseconds:this.nanoseconds}}static fromJSON(e){if(vl(e,yt._jsonSchema))return new yt(e.seconds,e.nanoseconds)}valueOf(){const e=this.seconds-vp;return String(e).padStart(12,"0")+"."+String(this.nanoseconds).padStart(9,"0")}}yt._jsonSchemaVersion="firestore/timestamp/1.0",yt._jsonSchema={type:Ht("string",yt._jsonSchemaVersion),seconds:Ht("number"),nanoseconds:Ht("number")};/**
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
 */class ue{static fromTimestamp(e){return new ue(e)}static min(){return new ue(new yt(0,0))}static max(){return new ue(new yt(253402300799,999999999))}constructor(e){this.timestamp=e}compareTo(e){return this.timestamp._compareTo(e.timestamp)}isEqual(e){return this.timestamp.isEqual(e.timestamp)}toMicroseconds(){return 1e6*this.timestamp.seconds+this.timestamp.nanoseconds/1e3}toString(){return"SnapshotVersion("+this.timestamp.toString()+")"}toTimestamp(){return this.timestamp}}/**
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
 */const Qa=-1;function Sb(n,e){const t=n.toTimestamp().seconds,r=n.toTimestamp().nanoseconds+1,i=ue.fromTimestamp(r===1e9?new yt(t+1,0):new yt(t,r));return new cs(i,Z.empty(),e)}function Rb(n){return new cs(n.readTime,n.key,Qa)}class cs{constructor(e,t,r){this.readTime=e,this.documentKey=t,this.largestBatchId=r}static min(){return new cs(ue.min(),Z.empty(),Qa)}static max(){return new cs(ue.max(),Z.empty(),Qa)}}function Cb(n,e){let t=n.readTime.compareTo(e.readTime);return t!==0?t:(t=Z.comparator(n.documentKey,e.documentKey),t!==0?t:Re(n.largestBatchId,e.largestBatchId))}/**
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
 */const Pb="The current tab is not in the required state to perform this operation. It might be necessary to refresh the browser tab.";class kb{constructor(){this.onCommittedListeners=[]}addOnCommittedListener(e){this.onCommittedListeners.push(e)}raiseOnCommittedEvent(){this.onCommittedListeners.forEach((e=>e()))}}/**
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
 */async function au(n){if(n.code!==x.FAILED_PRECONDITION||n.message!==Pb)throw n;W("LocalStore","Unexpectedly lost primary lease")}/**
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
 */class F{constructor(e){this.nextCallback=null,this.catchCallback=null,this.result=void 0,this.error=void 0,this.isDone=!1,this.callbackAttached=!1,e((t=>{this.isDone=!0,this.result=t,this.nextCallback&&this.nextCallback(t)}),(t=>{this.isDone=!0,this.error=t,this.catchCallback&&this.catchCallback(t)}))}catch(e){return this.next(void 0,e)}next(e,t){return this.callbackAttached&&ie(59440),this.callbackAttached=!0,this.isDone?this.error?this.wrapFailure(t,this.error):this.wrapSuccess(e,this.result):new F(((r,i)=>{this.nextCallback=s=>{this.wrapSuccess(e,s).next(r,i)},this.catchCallback=s=>{this.wrapFailure(t,s).next(r,i)}}))}toPromise(){return new Promise(((e,t)=>{this.next(e,t)}))}wrapUserFunction(e){try{const t=e();return t instanceof F?t:F.resolve(t)}catch(t){return F.reject(t)}}wrapSuccess(e,t){return e?this.wrapUserFunction((()=>e(t))):F.resolve(t)}wrapFailure(e,t){return e?this.wrapUserFunction((()=>e(t))):F.reject(t)}static resolve(e){return new F(((t,r)=>{t(e)}))}static reject(e){return new F(((t,r)=>{r(e)}))}static waitFor(e){return new F(((t,r)=>{let i=0,s=0,a=!1;e.forEach((l=>{++i,l.next((()=>{++s,a&&s===i&&t()}),(c=>r(c)))})),a=!0,s===i&&t()}))}static or(e){let t=F.resolve(!1);for(const r of e)t=t.next((i=>i?F.resolve(i):r()));return t}static forEach(e,t){const r=[];return e.forEach(((i,s)=>{r.push(t.call(this,i,s))})),this.waitFor(r)}static mapArray(e,t){return new F(((r,i)=>{const s=e.length,a=new Array(s);let l=0;for(let c=0;c<s;c++){const h=c;t(e[h]).next((f=>{a[h]=f,++l,l===s&&r(a)}),(f=>i(f)))}}))}static doWhile(e,t){return new F(((r,i)=>{const s=()=>{e()===!0?t().next((()=>{s()}),i):r()};s()}))}}function Nb(n){const e=n.match(/Android ([\d.]+)/i),t=e?e[1].split(".").slice(0,2).join("."):"-1";return Number(t)}function ra(n){return n.name==="IndexedDbTransactionError"}/**
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
 */class lu{constructor(e,t){this.previousValue=e,t&&(t.sequenceNumberHandler=r=>this._e(r),this.ae=r=>t.writeSequenceNumber(r))}_e(e){return this.previousValue=Math.max(e,this.previousValue),this.previousValue}next(){const e=++this.previousValue;return this.ae&&this.ae(e),e}}lu.ue=-1;/**
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
 */const Db=-1;function yl(n){return n==null}function kc(n){return n===0&&1/n==-1/0}function Ob(n){return typeof n=="number"&&Number.isInteger(n)&&!kc(n)&&n<=Number.MAX_SAFE_INTEGER&&n>=Number.MIN_SAFE_INTEGER}/**
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
 */const mv="";function Vb(n){let e="";for(let t=0;t<n.length;t++)e.length>0&&(e=Ep(e)),e=Mb(n.get(t),e);return Ep(e)}function Mb(n,e){let t=e;const r=n.length;for(let i=0;i<r;i++){const s=n.charAt(i);switch(s){case"\0":t+="";break;case mv:t+="";break;default:t+=s}}return t}function Ep(n){return n+mv+""}/**
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
 */function wp(n){let e=0;for(const t in n)Object.prototype.hasOwnProperty.call(n,t)&&e++;return e}function Js(n,e){for(const t in n)Object.prototype.hasOwnProperty.call(n,t)&&e(t,n[t])}function xb(n,e){const t=[];for(const r in n)Object.prototype.hasOwnProperty.call(n,r)&&t.push(e(n[r],r,n));return t}function gv(n){for(const e in n)if(Object.prototype.hasOwnProperty.call(n,e))return!1;return!0}/**
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
 */class qt{constructor(e,t){this.comparator=e,this.root=t||vn.EMPTY}insert(e,t){return new qt(this.comparator,this.root.insert(e,t,this.comparator).copy(null,null,vn.BLACK,null,null))}remove(e){return new qt(this.comparator,this.root.remove(e,this.comparator).copy(null,null,vn.BLACK,null,null))}get(e){let t=this.root;for(;!t.isEmpty();){const r=this.comparator(e,t.key);if(r===0)return t.value;r<0?t=t.left:r>0&&(t=t.right)}return null}indexOf(e){let t=0,r=this.root;for(;!r.isEmpty();){const i=this.comparator(e,r.key);if(i===0)return t+r.left.size;i<0?r=r.left:(t+=r.left.size+1,r=r.right)}return-1}isEmpty(){return this.root.isEmpty()}get size(){return this.root.size}minKey(){return this.root.minKey()}maxKey(){return this.root.maxKey()}inorderTraversal(e){return this.root.inorderTraversal(e)}forEach(e){this.inorderTraversal(((t,r)=>(e(t,r),!1)))}toString(){const e=[];return this.inorderTraversal(((t,r)=>(e.push(`${t}:${r}`),!1))),`{${e.join(", ")}}`}reverseTraversal(e){return this.root.reverseTraversal(e)}getIterator(){return new Yl(this.root,null,this.comparator,!1)}getIteratorFrom(e){return new Yl(this.root,e,this.comparator,!1)}getReverseIterator(){return new Yl(this.root,null,this.comparator,!0)}getReverseIteratorFrom(e){return new Yl(this.root,e,this.comparator,!0)}}class Yl{constructor(e,t,r,i){this.isReverse=i,this.nodeStack=[];let s=1;for(;!e.isEmpty();)if(s=t?r(e.key,t):1,t&&i&&(s*=-1),s<0)e=this.isReverse?e.left:e.right;else{if(s===0){this.nodeStack.push(e);break}this.nodeStack.push(e),e=this.isReverse?e.right:e.left}}getNext(){let e=this.nodeStack.pop();const t={key:e.key,value:e.value};if(this.isReverse)for(e=e.left;!e.isEmpty();)this.nodeStack.push(e),e=e.right;else for(e=e.right;!e.isEmpty();)this.nodeStack.push(e),e=e.left;return t}hasNext(){return this.nodeStack.length>0}peek(){if(this.nodeStack.length===0)return null;const e=this.nodeStack[this.nodeStack.length-1];return{key:e.key,value:e.value}}}class vn{constructor(e,t,r,i,s){this.key=e,this.value=t,this.color=r??vn.RED,this.left=i??vn.EMPTY,this.right=s??vn.EMPTY,this.size=this.left.size+1+this.right.size}copy(e,t,r,i,s){return new vn(e??this.key,t??this.value,r??this.color,i??this.left,s??this.right)}isEmpty(){return!1}inorderTraversal(e){return this.left.inorderTraversal(e)||e(this.key,this.value)||this.right.inorderTraversal(e)}reverseTraversal(e){return this.right.reverseTraversal(e)||e(this.key,this.value)||this.left.reverseTraversal(e)}min(){return this.left.isEmpty()?this:this.left.min()}minKey(){return this.min().key}maxKey(){return this.right.isEmpty()?this.key:this.right.maxKey()}insert(e,t,r){let i=this;const s=r(e,i.key);return i=s<0?i.copy(null,null,null,i.left.insert(e,t,r),null):s===0?i.copy(null,t,null,null,null):i.copy(null,null,null,null,i.right.insert(e,t,r)),i.fixUp()}removeMin(){if(this.left.isEmpty())return vn.EMPTY;let e=this;return e.left.isRed()||e.left.left.isRed()||(e=e.moveRedLeft()),e=e.copy(null,null,null,e.left.removeMin(),null),e.fixUp()}remove(e,t){let r,i=this;if(t(e,i.key)<0)i.left.isEmpty()||i.left.isRed()||i.left.left.isRed()||(i=i.moveRedLeft()),i=i.copy(null,null,null,i.left.remove(e,t),null);else{if(i.left.isRed()&&(i=i.rotateRight()),i.right.isEmpty()||i.right.isRed()||i.right.left.isRed()||(i=i.moveRedRight()),t(e,i.key)===0){if(i.right.isEmpty())return vn.EMPTY;r=i.right.min(),i=i.copy(r.key,r.value,null,null,i.right.removeMin())}i=i.copy(null,null,null,null,i.right.remove(e,t))}return i.fixUp()}isRed(){return this.color}fixUp(){let e=this;return e.right.isRed()&&!e.left.isRed()&&(e=e.rotateLeft()),e.left.isRed()&&e.left.left.isRed()&&(e=e.rotateRight()),e.left.isRed()&&e.right.isRed()&&(e=e.colorFlip()),e}moveRedLeft(){let e=this.colorFlip();return e.right.left.isRed()&&(e=e.copy(null,null,null,null,e.right.rotateRight()),e=e.rotateLeft(),e=e.colorFlip()),e}moveRedRight(){let e=this.colorFlip();return e.left.left.isRed()&&(e=e.rotateRight(),e=e.colorFlip()),e}rotateLeft(){const e=this.copy(null,null,vn.RED,null,this.right.left);return this.right.copy(null,null,this.color,e,null)}rotateRight(){const e=this.copy(null,null,vn.RED,this.left.right,null);return this.left.copy(null,null,this.color,null,e)}colorFlip(){const e=this.left.copy(null,null,!this.left.color,null,null),t=this.right.copy(null,null,!this.right.color,null,null);return this.copy(null,null,!this.color,e,t)}checkMaxDepth(){const e=this.check();return Math.pow(2,e)<=this.size+1}check(){if(this.isRed()&&this.left.isRed())throw ie(43730,{key:this.key,value:this.value});if(this.right.isRed())throw ie(14113,{key:this.key,value:this.value});const e=this.left.check();if(e!==this.right.check())throw ie(27949);return e+(this.isRed()?0:1)}}vn.EMPTY=null,vn.RED=!0,vn.BLACK=!1;vn.EMPTY=new class{constructor(){this.size=0}get key(){throw ie(57766)}get value(){throw ie(16141)}get color(){throw ie(16727)}get left(){throw ie(29726)}get right(){throw ie(36894)}copy(e,t,r,i,s){return this}insert(e,t,r){return new vn(e,t)}remove(e,t){return this}isEmpty(){return!0}inorderTraversal(e){return!1}reverseTraversal(e){return!1}minKey(){return null}maxKey(){return null}isRed(){return!1}checkMaxDepth(){return!0}check(){return 0}};/**
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
 */class en{constructor(e){this.comparator=e,this.data=new qt(this.comparator)}has(e){return this.data.get(e)!==null}first(){return this.data.minKey()}last(){return this.data.maxKey()}get size(){return this.data.size}indexOf(e){return this.data.indexOf(e)}forEach(e){this.data.inorderTraversal(((t,r)=>(e(t),!1)))}forEachInRange(e,t){const r=this.data.getIteratorFrom(e[0]);for(;r.hasNext();){const i=r.getNext();if(this.comparator(i.key,e[1])>=0)return;t(i.key)}}forEachWhile(e,t){let r;for(r=t!==void 0?this.data.getIteratorFrom(t):this.data.getIterator();r.hasNext();)if(!e(r.getNext().key))return}firstAfterOrEqual(e){const t=this.data.getIteratorFrom(e);return t.hasNext()?t.getNext().key:null}getIterator(){return new Tp(this.data.getIterator())}getIteratorFrom(e){return new Tp(this.data.getIteratorFrom(e))}add(e){return this.copy(this.data.remove(e).insert(e,!0))}delete(e){return this.has(e)?this.copy(this.data.remove(e)):this}isEmpty(){return this.data.isEmpty()}unionWith(e){let t=this;return t.size<e.size&&(t=e,e=this),e.forEach((r=>{t=t.add(r)})),t}isEqual(e){if(!(e instanceof en)||this.size!==e.size)return!1;const t=this.data.getIterator(),r=e.data.getIterator();for(;t.hasNext();){const i=t.getNext().key,s=r.getNext().key;if(this.comparator(i,s)!==0)return!1}return!0}toArray(){const e=[];return this.forEach((t=>{e.push(t)})),e}toString(){const e=[];return this.forEach((t=>e.push(t))),"SortedSet("+e.toString()+")"}copy(e){const t=new en(this.comparator);return t.data=e,t}}class Tp{constructor(e){this.iter=e}getNext(){return this.iter.getNext().key}hasNext(){return this.iter.hasNext()}}/**
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
 */class Er{constructor(e){this.fields=e,e.sort(Cn.comparator)}static empty(){return new Er([])}unionWith(e){let t=new en(Cn.comparator);for(const r of this.fields)t=t.add(r);for(const r of e)t=t.add(r);return new Er(t.toArray())}covers(e){for(const t of this.fields)if(t.isPrefixOf(e))return!0;return!1}isEqual(e){return Fo(this.fields,e.fields,((t,r)=>t.isEqual(r)))}}/**
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
 */class _v extends Error{constructor(){super(...arguments),this.name="Base64DecodeError"}}/**
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
 */class wn{constructor(e){this.binaryString=e}static fromBase64String(e){const t=(function(i){try{return atob(i)}catch(s){throw typeof DOMException<"u"&&s instanceof DOMException?new _v("Invalid base64 string: "+s):s}})(e);return new wn(t)}static fromUint8Array(e){const t=(function(i){let s="";for(let a=0;a<i.length;++a)s+=String.fromCharCode(i[a]);return s})(e);return new wn(t)}[Symbol.iterator](){let e=0;return{next:()=>e<this.binaryString.length?{value:this.binaryString.charCodeAt(e++),done:!1}:{value:void 0,done:!0}}}toBase64(){return(function(t){return btoa(t)})(this.binaryString)}toUint8Array(){return(function(t){const r=new Uint8Array(t.length);for(let i=0;i<t.length;i++)r[i]=t.charCodeAt(i);return r})(this.binaryString)}approximateByteSize(){return 2*this.binaryString.length}compareTo(e){return Re(this.binaryString,e.binaryString)}isEqual(e){return this.binaryString===e.binaryString}}wn.EMPTY_BYTE_STRING=new wn("");const Lb=new RegExp(/^\d{4}-\d\d-\d\dT\d\d:\d\d:\d\d(?:\.(\d+))?Z$/);function us(n){if(it(!!n,39018),typeof n=="string"){let e=0;const t=Lb.exec(n);if(it(!!t,46558,{timestamp:n}),t[1]){let i=t[1];i=(i+"000000000").substr(0,9),e=Number(i)}const r=new Date(n);return{seconds:Math.floor(r.getTime()/1e3),nanos:e}}return{seconds:Ft(n.seconds),nanos:Ft(n.nanos)}}function Ft(n){return typeof n=="number"?n:typeof n=="string"?Number(n):0}function hs(n){return typeof n=="string"?wn.fromBase64String(n):wn.fromUint8Array(n)}/**
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
 */const vv="server_timestamp",yv="__type__",Ev="__previous_value__",wv="__local_write_time__";function cu(n){var e,t;return((t=(((e=n==null?void 0:n.mapValue)===null||e===void 0?void 0:e.fields)||{})[yv])===null||t===void 0?void 0:t.stringValue)===vv}function uu(n){const e=n.mapValue.fields[Ev];return cu(e)?uu(e):e}function Ya(n){const e=us(n.mapValue.fields[wv].timestampValue);return new yt(e.seconds,e.nanos)}/**
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
 */class Fb{constructor(e,t,r,i,s,a,l,c,h,f){this.databaseId=e,this.appId=t,this.persistenceKey=r,this.host=i,this.ssl=s,this.forceLongPolling=a,this.autoDetectLongPolling=l,this.longPollingOptions=c,this.useFetchStreams=h,this.isUsingEmulator=f}}const Nc="(default)";class Ja{constructor(e,t){this.projectId=e,this.database=t||Nc}static empty(){return new Ja("","")}get isDefaultDatabase(){return this.database===Nc}isEqual(e){return e instanceof Ja&&e.projectId===this.projectId&&e.database===this.database}}/**
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
 */const Tv="__type__",Ub="__max__",Jl={mapValue:{}},Iv="__vector__",Dc="value";function ds(n){return"nullValue"in n?0:"booleanValue"in n?1:"integerValue"in n||"doubleValue"in n?2:"timestampValue"in n?3:"stringValue"in n?5:"bytesValue"in n?6:"referenceValue"in n?7:"geoPointValue"in n?8:"arrayValue"in n?9:"mapValue"in n?cu(n)?4:qb(n)?9007199254740991:$b(n)?10:11:ie(28295,{value:n})}function oi(n,e){if(n===e)return!0;const t=ds(n);if(t!==ds(e))return!1;switch(t){case 0:case 9007199254740991:return!0;case 1:return n.booleanValue===e.booleanValue;case 4:return Ya(n).isEqual(Ya(e));case 3:return(function(i,s){if(typeof i.timestampValue=="string"&&typeof s.timestampValue=="string"&&i.timestampValue.length===s.timestampValue.length)return i.timestampValue===s.timestampValue;const a=us(i.timestampValue),l=us(s.timestampValue);return a.seconds===l.seconds&&a.nanos===l.nanos})(n,e);case 5:return n.stringValue===e.stringValue;case 6:return(function(i,s){return hs(i.bytesValue).isEqual(hs(s.bytesValue))})(n,e);case 7:return n.referenceValue===e.referenceValue;case 8:return(function(i,s){return Ft(i.geoPointValue.latitude)===Ft(s.geoPointValue.latitude)&&Ft(i.geoPointValue.longitude)===Ft(s.geoPointValue.longitude)})(n,e);case 2:return(function(i,s){if("integerValue"in i&&"integerValue"in s)return Ft(i.integerValue)===Ft(s.integerValue);if("doubleValue"in i&&"doubleValue"in s){const a=Ft(i.doubleValue),l=Ft(s.doubleValue);return a===l?kc(a)===kc(l):isNaN(a)&&isNaN(l)}return!1})(n,e);case 9:return Fo(n.arrayValue.values||[],e.arrayValue.values||[],oi);case 10:case 11:return(function(i,s){const a=i.mapValue.fields||{},l=s.mapValue.fields||{};if(wp(a)!==wp(l))return!1;for(const c in a)if(a.hasOwnProperty(c)&&(l[c]===void 0||!oi(a[c],l[c])))return!1;return!0})(n,e);default:return ie(52216,{left:n})}}function Xa(n,e){return(n.values||[]).find((t=>oi(t,e)))!==void 0}function $o(n,e){if(n===e)return 0;const t=ds(n),r=ds(e);if(t!==r)return Re(t,r);switch(t){case 0:case 9007199254740991:return 0;case 1:return Re(n.booleanValue,e.booleanValue);case 2:return(function(s,a){const l=Ft(s.integerValue||s.doubleValue),c=Ft(a.integerValue||a.doubleValue);return l<c?-1:l>c?1:l===c?0:isNaN(l)?isNaN(c)?0:-1:1})(n,e);case 3:return Ip(n.timestampValue,e.timestampValue);case 4:return Ip(Ya(n),Ya(e));case 5:return xh(n.stringValue,e.stringValue);case 6:return(function(s,a){const l=hs(s),c=hs(a);return l.compareTo(c)})(n.bytesValue,e.bytesValue);case 7:return(function(s,a){const l=s.split("/"),c=a.split("/");for(let h=0;h<l.length&&h<c.length;h++){const f=Re(l[h],c[h]);if(f!==0)return f}return Re(l.length,c.length)})(n.referenceValue,e.referenceValue);case 8:return(function(s,a){const l=Re(Ft(s.latitude),Ft(a.latitude));return l!==0?l:Re(Ft(s.longitude),Ft(a.longitude))})(n.geoPointValue,e.geoPointValue);case 9:return Ap(n.arrayValue,e.arrayValue);case 10:return(function(s,a){var l,c,h,f;const g=s.fields||{},_=a.fields||{},E=(l=g[Dc])===null||l===void 0?void 0:l.arrayValue,S=(c=_[Dc])===null||c===void 0?void 0:c.arrayValue,P=Re(((h=E==null?void 0:E.values)===null||h===void 0?void 0:h.length)||0,((f=S==null?void 0:S.values)===null||f===void 0?void 0:f.length)||0);return P!==0?P:Ap(E,S)})(n.mapValue,e.mapValue);case 11:return(function(s,a){if(s===Jl.mapValue&&a===Jl.mapValue)return 0;if(s===Jl.mapValue)return 1;if(a===Jl.mapValue)return-1;const l=s.fields||{},c=Object.keys(l),h=a.fields||{},f=Object.keys(h);c.sort(),f.sort();for(let g=0;g<c.length&&g<f.length;++g){const _=xh(c[g],f[g]);if(_!==0)return _;const E=$o(l[c[g]],h[f[g]]);if(E!==0)return E}return Re(c.length,f.length)})(n.mapValue,e.mapValue);default:throw ie(23264,{le:t})}}function Ip(n,e){if(typeof n=="string"&&typeof e=="string"&&n.length===e.length)return Re(n,e);const t=us(n),r=us(e),i=Re(t.seconds,r.seconds);return i!==0?i:Re(t.nanos,r.nanos)}function Ap(n,e){const t=n.values||[],r=e.values||[];for(let i=0;i<t.length&&i<r.length;++i){const s=$o(t[i],r[i]);if(s)return s}return Re(t.length,r.length)}function qo(n){return Lh(n)}function Lh(n){return"nullValue"in n?"null":"booleanValue"in n?""+n.booleanValue:"integerValue"in n?""+n.integerValue:"doubleValue"in n?""+n.doubleValue:"timestampValue"in n?(function(t){const r=us(t);return`time(${r.seconds},${r.nanos})`})(n.timestampValue):"stringValue"in n?n.stringValue:"bytesValue"in n?(function(t){return hs(t).toBase64()})(n.bytesValue):"referenceValue"in n?(function(t){return Z.fromName(t).toString()})(n.referenceValue):"geoPointValue"in n?(function(t){return`geo(${t.latitude},${t.longitude})`})(n.geoPointValue):"arrayValue"in n?(function(t){let r="[",i=!0;for(const s of t.values||[])i?i=!1:r+=",",r+=Lh(s);return r+"]"})(n.arrayValue):"mapValue"in n?(function(t){const r=Object.keys(t.fields||{}).sort();let i="{",s=!0;for(const a of r)s?s=!1:i+=",",i+=`${a}:${Lh(t.fields[a])}`;return i+"}"})(n.mapValue):ie(61005,{value:n})}function dc(n){switch(ds(n)){case 0:case 1:return 4;case 2:return 8;case 3:case 8:return 16;case 4:const e=uu(n);return e?16+dc(e):16;case 5:return 2*n.stringValue.length;case 6:return hs(n.bytesValue).approximateByteSize();case 7:return n.referenceValue.length;case 9:return(function(r){return(r.values||[]).reduce(((i,s)=>i+dc(s)),0)})(n.arrayValue);case 10:case 11:return(function(r){let i=0;return Js(r.fields,((s,a)=>{i+=s.length+dc(a)})),i})(n.mapValue);default:throw ie(13486,{value:n})}}function Oc(n,e){return{referenceValue:`projects/${n.projectId}/databases/${n.database}/documents/${e.path.canonicalString()}`}}function Fh(n){return!!n&&"integerValue"in n}function Nd(n){return!!n&&"arrayValue"in n}function bp(n){return!!n&&"nullValue"in n}function Sp(n){return!!n&&"doubleValue"in n&&isNaN(Number(n.doubleValue))}function ih(n){return!!n&&"mapValue"in n}function $b(n){var e,t;return((t=(((e=n==null?void 0:n.mapValue)===null||e===void 0?void 0:e.fields)||{})[Tv])===null||t===void 0?void 0:t.stringValue)===Iv}function Fa(n){if(n.geoPointValue)return{geoPointValue:Object.assign({},n.geoPointValue)};if(n.timestampValue&&typeof n.timestampValue=="object")return{timestampValue:Object.assign({},n.timestampValue)};if(n.mapValue){const e={mapValue:{fields:{}}};return Js(n.mapValue.fields,((t,r)=>e.mapValue.fields[t]=Fa(r))),e}if(n.arrayValue){const e={arrayValue:{values:[]}};for(let t=0;t<(n.arrayValue.values||[]).length;++t)e.arrayValue.values[t]=Fa(n.arrayValue.values[t]);return e}return Object.assign({},n)}function qb(n){return(((n.mapValue||{}).fields||{}).__type__||{}).stringValue===Ub}/**
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
 */class Kn{constructor(e){this.value=e}static empty(){return new Kn({mapValue:{}})}field(e){if(e.isEmpty())return this.value;{let t=this.value;for(let r=0;r<e.length-1;++r)if(t=(t.mapValue.fields||{})[e.get(r)],!ih(t))return null;return t=(t.mapValue.fields||{})[e.lastSegment()],t||null}}set(e,t){this.getFieldsMap(e.popLast())[e.lastSegment()]=Fa(t)}setAll(e){let t=Cn.emptyPath(),r={},i=[];e.forEach(((a,l)=>{if(!t.isImmediateParentOf(l)){const c=this.getFieldsMap(t);this.applyChanges(c,r,i),r={},i=[],t=l.popLast()}a?r[l.lastSegment()]=Fa(a):i.push(l.lastSegment())}));const s=this.getFieldsMap(t);this.applyChanges(s,r,i)}delete(e){const t=this.field(e.popLast());ih(t)&&t.mapValue.fields&&delete t.mapValue.fields[e.lastSegment()]}isEqual(e){return oi(this.value,e.value)}getFieldsMap(e){let t=this.value;t.mapValue.fields||(t.mapValue={fields:{}});for(let r=0;r<e.length;++r){let i=t.mapValue.fields[e.get(r)];ih(i)&&i.mapValue.fields||(i={mapValue:{fields:{}}},t.mapValue.fields[e.get(r)]=i),t=i}return t.mapValue.fields}applyChanges(e,t,r){Js(t,((i,s)=>e[i]=s));for(const i of r)delete e[i]}clone(){return new Kn(Fa(this.value))}}/**
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
 */class cn{constructor(e,t,r,i,s,a,l){this.key=e,this.documentType=t,this.version=r,this.readTime=i,this.createTime=s,this.data=a,this.documentState=l}static newInvalidDocument(e){return new cn(e,0,ue.min(),ue.min(),ue.min(),Kn.empty(),0)}static newFoundDocument(e,t,r,i){return new cn(e,1,t,ue.min(),r,i,0)}static newNoDocument(e,t){return new cn(e,2,t,ue.min(),ue.min(),Kn.empty(),0)}static newUnknownDocument(e,t){return new cn(e,3,t,ue.min(),ue.min(),Kn.empty(),2)}convertToFoundDocument(e,t){return!this.createTime.isEqual(ue.min())||this.documentType!==2&&this.documentType!==0||(this.createTime=e),this.version=e,this.documentType=1,this.data=t,this.documentState=0,this}convertToNoDocument(e){return this.version=e,this.documentType=2,this.data=Kn.empty(),this.documentState=0,this}convertToUnknownDocument(e){return this.version=e,this.documentType=3,this.data=Kn.empty(),this.documentState=2,this}setHasCommittedMutations(){return this.documentState=2,this}setHasLocalMutations(){return this.documentState=1,this.version=ue.min(),this}setReadTime(e){return this.readTime=e,this}get hasLocalMutations(){return this.documentState===1}get hasCommittedMutations(){return this.documentState===2}get hasPendingWrites(){return this.hasLocalMutations||this.hasCommittedMutations}isValidDocument(){return this.documentType!==0}isFoundDocument(){return this.documentType===1}isNoDocument(){return this.documentType===2}isUnknownDocument(){return this.documentType===3}isEqual(e){return e instanceof cn&&this.key.isEqual(e.key)&&this.version.isEqual(e.version)&&this.documentType===e.documentType&&this.documentState===e.documentState&&this.data.isEqual(e.data)}mutableCopy(){return new cn(this.key,this.documentType,this.version,this.readTime,this.createTime,this.data.clone(),this.documentState)}toString(){return`Document(${this.key}, ${this.version}, ${JSON.stringify(this.data.value)}, {createTime: ${this.createTime}}), {documentType: ${this.documentType}}), {documentState: ${this.documentState}})`}}/**
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
 */class Bo{constructor(e,t){this.position=e,this.inclusive=t}}function Rp(n,e,t){let r=0;for(let i=0;i<n.position.length;i++){const s=e[i],a=n.position[i];if(s.field.isKeyField()?r=Z.comparator(Z.fromName(a.referenceValue),t.key):r=$o(a,t.data.field(s.field)),s.dir==="desc"&&(r*=-1),r!==0)break}return r}function Cp(n,e){if(n===null)return e===null;if(e===null||n.inclusive!==e.inclusive||n.position.length!==e.position.length)return!1;for(let t=0;t<n.position.length;t++)if(!oi(n.position[t],e.position[t]))return!1;return!0}/**
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
 */class Za{constructor(e,t="asc"){this.field=e,this.dir=t}}function Bb(n,e){return n.dir===e.dir&&n.field.isEqual(e.field)}/**
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
 */class Av{}class jt extends Av{constructor(e,t,r){super(),this.field=e,this.op=t,this.value=r}static create(e,t,r){return e.isKeyField()?t==="in"||t==="not-in"?this.createKeyFieldInFilter(e,t,r):new jb(e,t,r):t==="array-contains"?new Gb(e,r):t==="in"?new Kb(e,r):t==="not-in"?new Qb(e,r):t==="array-contains-any"?new Yb(e,r):new jt(e,t,r)}static createKeyFieldInFilter(e,t,r){return t==="in"?new Hb(e,r):new Wb(e,r)}matches(e){const t=e.data.field(this.field);return this.op==="!="?t!==null&&t.nullValue===void 0&&this.matchesComparison($o(t,this.value)):t!==null&&ds(this.value)===ds(t)&&this.matchesComparison($o(t,this.value))}matchesComparison(e){switch(this.op){case"<":return e<0;case"<=":return e<=0;case"==":return e===0;case"!=":return e!==0;case">":return e>0;case">=":return e>=0;default:return ie(47266,{operator:this.op})}}isInequality(){return["<","<=",">",">=","!=","not-in"].indexOf(this.op)>=0}getFlattenedFilters(){return[this]}getFilters(){return[this]}}class Fr extends Av{constructor(e,t){super(),this.filters=e,this.op=t,this.he=null}static create(e,t){return new Fr(e,t)}matches(e){return bv(this)?this.filters.find((t=>!t.matches(e)))===void 0:this.filters.find((t=>t.matches(e)))!==void 0}getFlattenedFilters(){return this.he!==null||(this.he=this.filters.reduce(((e,t)=>e.concat(t.getFlattenedFilters())),[])),this.he}getFilters(){return Object.assign([],this.filters)}}function bv(n){return n.op==="and"}function Sv(n){return zb(n)&&bv(n)}function zb(n){for(const e of n.filters)if(e instanceof Fr)return!1;return!0}function Uh(n){if(n instanceof jt)return n.field.canonicalString()+n.op.toString()+qo(n.value);if(Sv(n))return n.filters.map((e=>Uh(e))).join(",");{const e=n.filters.map((t=>Uh(t))).join(",");return`${n.op}(${e})`}}function Rv(n,e){return n instanceof jt?(function(r,i){return i instanceof jt&&r.op===i.op&&r.field.isEqual(i.field)&&oi(r.value,i.value)})(n,e):n instanceof Fr?(function(r,i){return i instanceof Fr&&r.op===i.op&&r.filters.length===i.filters.length?r.filters.reduce(((s,a,l)=>s&&Rv(a,i.filters[l])),!0):!1})(n,e):void ie(19439)}function Cv(n){return n instanceof jt?(function(t){return`${t.field.canonicalString()} ${t.op} ${qo(t.value)}`})(n):n instanceof Fr?(function(t){return t.op.toString()+" {"+t.getFilters().map(Cv).join(" ,")+"}"})(n):"Filter"}class jb extends jt{constructor(e,t,r){super(e,t,r),this.key=Z.fromName(r.referenceValue)}matches(e){const t=Z.comparator(e.key,this.key);return this.matchesComparison(t)}}class Hb extends jt{constructor(e,t){super(e,"in",t),this.keys=Pv("in",t)}matches(e){return this.keys.some((t=>t.isEqual(e.key)))}}class Wb extends jt{constructor(e,t){super(e,"not-in",t),this.keys=Pv("not-in",t)}matches(e){return!this.keys.some((t=>t.isEqual(e.key)))}}function Pv(n,e){var t;return(((t=e.arrayValue)===null||t===void 0?void 0:t.values)||[]).map((r=>Z.fromName(r.referenceValue)))}class Gb extends jt{constructor(e,t){super(e,"array-contains",t)}matches(e){const t=e.data.field(this.field);return Nd(t)&&Xa(t.arrayValue,this.value)}}class Kb extends jt{constructor(e,t){super(e,"in",t)}matches(e){const t=e.data.field(this.field);return t!==null&&Xa(this.value.arrayValue,t)}}class Qb extends jt{constructor(e,t){super(e,"not-in",t)}matches(e){if(Xa(this.value.arrayValue,{nullValue:"NULL_VALUE"}))return!1;const t=e.data.field(this.field);return t!==null&&t.nullValue===void 0&&!Xa(this.value.arrayValue,t)}}class Yb extends jt{constructor(e,t){super(e,"array-contains-any",t)}matches(e){const t=e.data.field(this.field);return!(!Nd(t)||!t.arrayValue.values)&&t.arrayValue.values.some((r=>Xa(this.value.arrayValue,r)))}}/**
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
 */class Jb{constructor(e,t=null,r=[],i=[],s=null,a=null,l=null){this.path=e,this.collectionGroup=t,this.orderBy=r,this.filters=i,this.limit=s,this.startAt=a,this.endAt=l,this.Pe=null}}function Pp(n,e=null,t=[],r=[],i=null,s=null,a=null){return new Jb(n,e,t,r,i,s,a)}function Dd(n){const e=Ce(n);if(e.Pe===null){let t=e.path.canonicalString();e.collectionGroup!==null&&(t+="|cg:"+e.collectionGroup),t+="|f:",t+=e.filters.map((r=>Uh(r))).join(","),t+="|ob:",t+=e.orderBy.map((r=>(function(s){return s.field.canonicalString()+s.dir})(r))).join(","),yl(e.limit)||(t+="|l:",t+=e.limit),e.startAt&&(t+="|lb:",t+=e.startAt.inclusive?"b:":"a:",t+=e.startAt.position.map((r=>qo(r))).join(",")),e.endAt&&(t+="|ub:",t+=e.endAt.inclusive?"a:":"b:",t+=e.endAt.position.map((r=>qo(r))).join(",")),e.Pe=t}return e.Pe}function Od(n,e){if(n.limit!==e.limit||n.orderBy.length!==e.orderBy.length)return!1;for(let t=0;t<n.orderBy.length;t++)if(!Bb(n.orderBy[t],e.orderBy[t]))return!1;if(n.filters.length!==e.filters.length)return!1;for(let t=0;t<n.filters.length;t++)if(!Rv(n.filters[t],e.filters[t]))return!1;return n.collectionGroup===e.collectionGroup&&!!n.path.isEqual(e.path)&&!!Cp(n.startAt,e.startAt)&&Cp(n.endAt,e.endAt)}function $h(n){return Z.isDocumentKey(n.path)&&n.collectionGroup===null&&n.filters.length===0}/**
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
 */class Xs{constructor(e,t=null,r=[],i=[],s=null,a="F",l=null,c=null){this.path=e,this.collectionGroup=t,this.explicitOrderBy=r,this.filters=i,this.limit=s,this.limitType=a,this.startAt=l,this.endAt=c,this.Te=null,this.Ie=null,this.de=null,this.startAt,this.endAt}}function Xb(n,e,t,r,i,s,a,l){return new Xs(n,e,t,r,i,s,a,l)}function Vd(n){return new Xs(n)}function kp(n){return n.filters.length===0&&n.limit===null&&n.startAt==null&&n.endAt==null&&(n.explicitOrderBy.length===0||n.explicitOrderBy.length===1&&n.explicitOrderBy[0].field.isKeyField())}function Md(n){return n.collectionGroup!==null}function Ao(n){const e=Ce(n);if(e.Te===null){e.Te=[];const t=new Set;for(const s of e.explicitOrderBy)e.Te.push(s),t.add(s.field.canonicalString());const r=e.explicitOrderBy.length>0?e.explicitOrderBy[e.explicitOrderBy.length-1].dir:"asc";(function(a){let l=new en(Cn.comparator);return a.filters.forEach((c=>{c.getFlattenedFilters().forEach((h=>{h.isInequality()&&(l=l.add(h.field))}))})),l})(e).forEach((s=>{t.has(s.canonicalString())||s.isKeyField()||e.Te.push(new Za(s,r))})),t.has(Cn.keyField().canonicalString())||e.Te.push(new Za(Cn.keyField(),r))}return e.Te}function ni(n){const e=Ce(n);return e.Ie||(e.Ie=kv(e,Ao(n))),e.Ie}function Zb(n){const e=Ce(n);return e.de||(e.de=kv(e,n.explicitOrderBy)),e.de}function kv(n,e){if(n.limitType==="F")return Pp(n.path,n.collectionGroup,e,n.filters,n.limit,n.startAt,n.endAt);{e=e.map((i=>{const s=i.dir==="desc"?"asc":"desc";return new Za(i.field,s)}));const t=n.endAt?new Bo(n.endAt.position,n.endAt.inclusive):null,r=n.startAt?new Bo(n.startAt.position,n.startAt.inclusive):null;return Pp(n.path,n.collectionGroup,e,n.filters,n.limit,t,r)}}function qh(n,e){const t=n.filters.concat([e]);return new Xs(n.path,n.collectionGroup,n.explicitOrderBy.slice(),t,n.limit,n.limitType,n.startAt,n.endAt)}function Vc(n,e,t){return new Xs(n.path,n.collectionGroup,n.explicitOrderBy.slice(),n.filters.slice(),e,t,n.startAt,n.endAt)}function hu(n,e){return Od(ni(n),ni(e))&&n.limitType===e.limitType}function Nv(n){return`${Dd(ni(n))}|lt:${n.limitType}`}function po(n){return`Query(target=${(function(t){let r=t.path.canonicalString();return t.collectionGroup!==null&&(r+=" collectionGroup="+t.collectionGroup),t.filters.length>0&&(r+=`, filters: [${t.filters.map((i=>Cv(i))).join(", ")}]`),yl(t.limit)||(r+=", limit: "+t.limit),t.orderBy.length>0&&(r+=`, orderBy: [${t.orderBy.map((i=>(function(a){return`${a.field.canonicalString()} (${a.dir})`})(i))).join(", ")}]`),t.startAt&&(r+=", startAt: ",r+=t.startAt.inclusive?"b:":"a:",r+=t.startAt.position.map((i=>qo(i))).join(",")),t.endAt&&(r+=", endAt: ",r+=t.endAt.inclusive?"a:":"b:",r+=t.endAt.position.map((i=>qo(i))).join(",")),`Target(${r})`})(ni(n))}; limitType=${n.limitType})`}function du(n,e){return e.isFoundDocument()&&(function(r,i){const s=i.key.path;return r.collectionGroup!==null?i.key.hasCollectionId(r.collectionGroup)&&r.path.isPrefixOf(s):Z.isDocumentKey(r.path)?r.path.isEqual(s):r.path.isImmediateParentOf(s)})(n,e)&&(function(r,i){for(const s of Ao(r))if(!s.field.isKeyField()&&i.data.field(s.field)===null)return!1;return!0})(n,e)&&(function(r,i){for(const s of r.filters)if(!s.matches(i))return!1;return!0})(n,e)&&(function(r,i){return!(r.startAt&&!(function(a,l,c){const h=Rp(a,l,c);return a.inclusive?h<=0:h<0})(r.startAt,Ao(r),i)||r.endAt&&!(function(a,l,c){const h=Rp(a,l,c);return a.inclusive?h>=0:h>0})(r.endAt,Ao(r),i))})(n,e)}function e1(n){return n.collectionGroup||(n.path.length%2==1?n.path.lastSegment():n.path.get(n.path.length-2))}function Dv(n){return(e,t)=>{let r=!1;for(const i of Ao(n)){const s=t1(i,e,t);if(s!==0)return s;r=r||i.field.isKeyField()}return 0}}function t1(n,e,t){const r=n.field.isKeyField()?Z.comparator(e.key,t.key):(function(s,a,l){const c=a.data.field(s),h=l.data.field(s);return c!==null&&h!==null?$o(c,h):ie(42886)})(n.field,e,t);switch(n.dir){case"asc":return r;case"desc":return-1*r;default:return ie(19790,{direction:n.dir})}}/**
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
 */class Zs{constructor(e,t){this.mapKeyFn=e,this.equalsFn=t,this.inner={},this.innerSize=0}get(e){const t=this.mapKeyFn(e),r=this.inner[t];if(r!==void 0){for(const[i,s]of r)if(this.equalsFn(i,e))return s}}has(e){return this.get(e)!==void 0}set(e,t){const r=this.mapKeyFn(e),i=this.inner[r];if(i===void 0)return this.inner[r]=[[e,t]],void this.innerSize++;for(let s=0;s<i.length;s++)if(this.equalsFn(i[s][0],e))return void(i[s]=[e,t]);i.push([e,t]),this.innerSize++}delete(e){const t=this.mapKeyFn(e),r=this.inner[t];if(r===void 0)return!1;for(let i=0;i<r.length;i++)if(this.equalsFn(r[i][0],e))return r.length===1?delete this.inner[t]:r.splice(i,1),this.innerSize--,!0;return!1}forEach(e){Js(this.inner,((t,r)=>{for(const[i,s]of r)e(i,s)}))}isEmpty(){return gv(this.inner)}size(){return this.innerSize}}/**
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
 */const n1=new qt(Z.comparator);function fs(){return n1}const Ov=new qt(Z.comparator);function Pa(...n){let e=Ov;for(const t of n)e=e.insert(t.key,t);return e}function r1(n){let e=Ov;return n.forEach(((t,r)=>e=e.insert(t,r.overlayedDocument))),e}function Os(){return Ua()}function Vv(){return Ua()}function Ua(){return new Zs((n=>n.toString()),((n,e)=>n.isEqual(e)))}const i1=new en(Z.comparator);function Be(...n){let e=i1;for(const t of n)e=e.add(t);return e}const s1=new en(Re);function o1(){return s1}/**
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
 */function xd(n,e){if(n.useProto3Json){if(isNaN(e))return{doubleValue:"NaN"};if(e===1/0)return{doubleValue:"Infinity"};if(e===-1/0)return{doubleValue:"-Infinity"}}return{doubleValue:kc(e)?"-0":e}}function Mv(n){return{integerValue:""+n}}function a1(n,e){return Ob(e)?Mv(e):xd(n,e)}/**
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
 */class fu{constructor(){this._=void 0}}function l1(n,e,t){return n instanceof el?(function(i,s){const a={fields:{[yv]:{stringValue:vv},[wv]:{timestampValue:{seconds:i.seconds,nanos:i.nanoseconds}}}};return s&&cu(s)&&(s=uu(s)),s&&(a.fields[Ev]=s),{mapValue:a}})(t,e):n instanceof tl?xv(n,e):n instanceof nl?Lv(n,e):(function(i,s){const a=u1(i,s),l=Np(a)+Np(i.Ee);return Fh(a)&&Fh(i.Ee)?Mv(l):xd(i.serializer,l)})(n,e)}function c1(n,e,t){return n instanceof tl?xv(n,e):n instanceof nl?Lv(n,e):t}function u1(n,e){return n instanceof Mc?(function(r){return Fh(r)||(function(s){return!!s&&"doubleValue"in s})(r)})(e)?e:{integerValue:0}:null}class el extends fu{}class tl extends fu{constructor(e){super(),this.elements=e}}function xv(n,e){const t=Fv(e);for(const r of n.elements)t.some((i=>oi(i,r)))||t.push(r);return{arrayValue:{values:t}}}class nl extends fu{constructor(e){super(),this.elements=e}}function Lv(n,e){let t=Fv(e);for(const r of n.elements)t=t.filter((i=>!oi(i,r)));return{arrayValue:{values:t}}}class Mc extends fu{constructor(e,t){super(),this.serializer=e,this.Ee=t}}function Np(n){return Ft(n.integerValue||n.doubleValue)}function Fv(n){return Nd(n)&&n.arrayValue.values?n.arrayValue.values.slice():[]}/**
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
 */class h1{constructor(e,t){this.field=e,this.transform=t}}function d1(n,e){return n.field.isEqual(e.field)&&(function(r,i){return r instanceof tl&&i instanceof tl||r instanceof nl&&i instanceof nl?Fo(r.elements,i.elements,oi):r instanceof Mc&&i instanceof Mc?oi(r.Ee,i.Ee):r instanceof el&&i instanceof el})(n.transform,e.transform)}class yr{constructor(e,t){this.updateTime=e,this.exists=t}static none(){return new yr}static exists(e){return new yr(void 0,e)}static updateTime(e){return new yr(e)}get isNone(){return this.updateTime===void 0&&this.exists===void 0}isEqual(e){return this.exists===e.exists&&(this.updateTime?!!e.updateTime&&this.updateTime.isEqual(e.updateTime):!e.updateTime)}}function fc(n,e){return n.updateTime!==void 0?e.isFoundDocument()&&e.version.isEqual(n.updateTime):n.exists===void 0||n.exists===e.isFoundDocument()}class pu{}function Uv(n,e){if(!n.hasLocalMutations||e&&e.fields.length===0)return null;if(e===null)return n.isNoDocument()?new Ld(n.key,yr.none()):new El(n.key,n.data,yr.none());{const t=n.data,r=Kn.empty();let i=new en(Cn.comparator);for(let s of e.fields)if(!i.has(s)){let a=t.field(s);a===null&&s.length>1&&(s=s.popLast(),a=t.field(s)),a===null?r.delete(s):r.set(s,a),i=i.add(s)}return new eo(n.key,r,new Er(i.toArray()),yr.none())}}function f1(n,e,t){n instanceof El?(function(i,s,a){const l=i.value.clone(),c=Op(i.fieldTransforms,s,a.transformResults);l.setAll(c),s.convertToFoundDocument(a.version,l).setHasCommittedMutations()})(n,e,t):n instanceof eo?(function(i,s,a){if(!fc(i.precondition,s))return void s.convertToUnknownDocument(a.version);const l=Op(i.fieldTransforms,s,a.transformResults),c=s.data;c.setAll($v(i)),c.setAll(l),s.convertToFoundDocument(a.version,c).setHasCommittedMutations()})(n,e,t):(function(i,s,a){s.convertToNoDocument(a.version).setHasCommittedMutations()})(0,e,t)}function $a(n,e,t,r){return n instanceof El?(function(s,a,l,c){if(!fc(s.precondition,a))return l;const h=s.value.clone(),f=Vp(s.fieldTransforms,c,a);return h.setAll(f),a.convertToFoundDocument(a.version,h).setHasLocalMutations(),null})(n,e,t,r):n instanceof eo?(function(s,a,l,c){if(!fc(s.precondition,a))return l;const h=Vp(s.fieldTransforms,c,a),f=a.data;return f.setAll($v(s)),f.setAll(h),a.convertToFoundDocument(a.version,f).setHasLocalMutations(),l===null?null:l.unionWith(s.fieldMask.fields).unionWith(s.fieldTransforms.map((g=>g.field)))})(n,e,t,r):(function(s,a,l){return fc(s.precondition,a)?(a.convertToNoDocument(a.version).setHasLocalMutations(),null):l})(n,e,t)}function Dp(n,e){return n.type===e.type&&!!n.key.isEqual(e.key)&&!!n.precondition.isEqual(e.precondition)&&!!(function(r,i){return r===void 0&&i===void 0||!(!r||!i)&&Fo(r,i,((s,a)=>d1(s,a)))})(n.fieldTransforms,e.fieldTransforms)&&(n.type===0?n.value.isEqual(e.value):n.type!==1||n.data.isEqual(e.data)&&n.fieldMask.isEqual(e.fieldMask))}class El extends pu{constructor(e,t,r,i=[]){super(),this.key=e,this.value=t,this.precondition=r,this.fieldTransforms=i,this.type=0}getFieldMask(){return null}}class eo extends pu{constructor(e,t,r,i,s=[]){super(),this.key=e,this.data=t,this.fieldMask=r,this.precondition=i,this.fieldTransforms=s,this.type=1}getFieldMask(){return this.fieldMask}}function $v(n){const e=new Map;return n.fieldMask.fields.forEach((t=>{if(!t.isEmpty()){const r=n.data.field(t);e.set(t,r)}})),e}function Op(n,e,t){const r=new Map;it(n.length===t.length,32656,{Ae:t.length,Re:n.length});for(let i=0;i<t.length;i++){const s=n[i],a=s.transform,l=e.data.field(s.field);r.set(s.field,c1(a,l,t[i]))}return r}function Vp(n,e,t){const r=new Map;for(const i of n){const s=i.transform,a=t.data.field(i.field);r.set(i.field,l1(s,a,e))}return r}class Ld extends pu{constructor(e,t){super(),this.key=e,this.precondition=t,this.type=2,this.fieldTransforms=[]}getFieldMask(){return null}}class qv extends pu{constructor(e,t){super(),this.key=e,this.precondition=t,this.type=3,this.fieldTransforms=[]}getFieldMask(){return null}}/**
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
 */class p1{constructor(e,t,r,i){this.batchId=e,this.localWriteTime=t,this.baseMutations=r,this.mutations=i}applyToRemoteDocument(e,t){const r=t.mutationResults;for(let i=0;i<this.mutations.length;i++){const s=this.mutations[i];s.key.isEqual(e.key)&&f1(s,e,r[i])}}applyToLocalView(e,t){for(const r of this.baseMutations)r.key.isEqual(e.key)&&(t=$a(r,e,t,this.localWriteTime));for(const r of this.mutations)r.key.isEqual(e.key)&&(t=$a(r,e,t,this.localWriteTime));return t}applyToLocalDocumentSet(e,t){const r=Vv();return this.mutations.forEach((i=>{const s=e.get(i.key),a=s.overlayedDocument;let l=this.applyToLocalView(a,s.mutatedFields);l=t.has(i.key)?null:l;const c=Uv(a,l);c!==null&&r.set(i.key,c),a.isValidDocument()||a.convertToNoDocument(ue.min())})),r}keys(){return this.mutations.reduce(((e,t)=>e.add(t.key)),Be())}isEqual(e){return this.batchId===e.batchId&&Fo(this.mutations,e.mutations,((t,r)=>Dp(t,r)))&&Fo(this.baseMutations,e.baseMutations,((t,r)=>Dp(t,r)))}}/**
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
 */class m1{constructor(e,t){this.largestBatchId=e,this.mutation=t}getKey(){return this.mutation.key}isEqual(e){return e!==null&&this.mutation===e.mutation}toString(){return`Overlay{
      largestBatchId: ${this.largestBatchId},
      mutation: ${this.mutation.toString()}
    }`}}/**
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
 */class g1{constructor(e,t,r){this.alias=e,this.aggregateType=t,this.fieldPath=r}}/**
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
 */class _1{constructor(e,t){this.count=e,this.unchangedNames=t}}/**
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
 */var Bt,Ue;function v1(n){switch(n){case x.OK:return ie(64938);case x.CANCELLED:case x.UNKNOWN:case x.DEADLINE_EXCEEDED:case x.RESOURCE_EXHAUSTED:case x.INTERNAL:case x.UNAVAILABLE:case x.UNAUTHENTICATED:return!1;case x.INVALID_ARGUMENT:case x.NOT_FOUND:case x.ALREADY_EXISTS:case x.PERMISSION_DENIED:case x.FAILED_PRECONDITION:case x.ABORTED:case x.OUT_OF_RANGE:case x.UNIMPLEMENTED:case x.DATA_LOSS:return!0;default:return ie(15467,{code:n})}}function Bv(n){if(n===void 0)return Pi("GRPC error has no .code"),x.UNKNOWN;switch(n){case Bt.OK:return x.OK;case Bt.CANCELLED:return x.CANCELLED;case Bt.UNKNOWN:return x.UNKNOWN;case Bt.DEADLINE_EXCEEDED:return x.DEADLINE_EXCEEDED;case Bt.RESOURCE_EXHAUSTED:return x.RESOURCE_EXHAUSTED;case Bt.INTERNAL:return x.INTERNAL;case Bt.UNAVAILABLE:return x.UNAVAILABLE;case Bt.UNAUTHENTICATED:return x.UNAUTHENTICATED;case Bt.INVALID_ARGUMENT:return x.INVALID_ARGUMENT;case Bt.NOT_FOUND:return x.NOT_FOUND;case Bt.ALREADY_EXISTS:return x.ALREADY_EXISTS;case Bt.PERMISSION_DENIED:return x.PERMISSION_DENIED;case Bt.FAILED_PRECONDITION:return x.FAILED_PRECONDITION;case Bt.ABORTED:return x.ABORTED;case Bt.OUT_OF_RANGE:return x.OUT_OF_RANGE;case Bt.UNIMPLEMENTED:return x.UNIMPLEMENTED;case Bt.DATA_LOSS:return x.DATA_LOSS;default:return ie(39323,{code:n})}}(Ue=Bt||(Bt={}))[Ue.OK=0]="OK",Ue[Ue.CANCELLED=1]="CANCELLED",Ue[Ue.UNKNOWN=2]="UNKNOWN",Ue[Ue.INVALID_ARGUMENT=3]="INVALID_ARGUMENT",Ue[Ue.DEADLINE_EXCEEDED=4]="DEADLINE_EXCEEDED",Ue[Ue.NOT_FOUND=5]="NOT_FOUND",Ue[Ue.ALREADY_EXISTS=6]="ALREADY_EXISTS",Ue[Ue.PERMISSION_DENIED=7]="PERMISSION_DENIED",Ue[Ue.UNAUTHENTICATED=16]="UNAUTHENTICATED",Ue[Ue.RESOURCE_EXHAUSTED=8]="RESOURCE_EXHAUSTED",Ue[Ue.FAILED_PRECONDITION=9]="FAILED_PRECONDITION",Ue[Ue.ABORTED=10]="ABORTED",Ue[Ue.OUT_OF_RANGE=11]="OUT_OF_RANGE",Ue[Ue.UNIMPLEMENTED=12]="UNIMPLEMENTED",Ue[Ue.INTERNAL=13]="INTERNAL",Ue[Ue.UNAVAILABLE=14]="UNAVAILABLE",Ue[Ue.DATA_LOSS=15]="DATA_LOSS";/**
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
 */const y1=new ts([4294967295,4294967295],0);function Mp(n){const e=dv().encode(n),t=new sv;return t.update(e),new Uint8Array(t.digest())}function xp(n){const e=new DataView(n.buffer),t=e.getUint32(0,!0),r=e.getUint32(4,!0),i=e.getUint32(8,!0),s=e.getUint32(12,!0);return[new ts([t,r],0),new ts([i,s],0)]}class Fd{constructor(e,t,r){if(this.bitmap=e,this.padding=t,this.hashCount=r,t<0||t>=8)throw new ka(`Invalid padding: ${t}`);if(r<0)throw new ka(`Invalid hash count: ${r}`);if(e.length>0&&this.hashCount===0)throw new ka(`Invalid hash count: ${r}`);if(e.length===0&&t!==0)throw new ka(`Invalid padding when bitmap length is 0: ${t}`);this.fe=8*e.length-t,this.ge=ts.fromNumber(this.fe)}pe(e,t,r){let i=e.add(t.multiply(ts.fromNumber(r)));return i.compare(y1)===1&&(i=new ts([i.getBits(0),i.getBits(1)],0)),i.modulo(this.ge).toNumber()}ye(e){return!!(this.bitmap[Math.floor(e/8)]&1<<e%8)}mightContain(e){if(this.fe===0)return!1;const t=Mp(e),[r,i]=xp(t);for(let s=0;s<this.hashCount;s++){const a=this.pe(r,i,s);if(!this.ye(a))return!1}return!0}static create(e,t,r){const i=e%8==0?0:8-e%8,s=new Uint8Array(Math.ceil(e/8)),a=new Fd(s,i,t);return r.forEach((l=>a.insert(l))),a}insert(e){if(this.fe===0)return;const t=Mp(e),[r,i]=xp(t);for(let s=0;s<this.hashCount;s++){const a=this.pe(r,i,s);this.we(a)}}we(e){const t=Math.floor(e/8),r=e%8;this.bitmap[t]|=1<<r}}class ka extends Error{constructor(){super(...arguments),this.name="BloomFilterError"}}/**
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
 */class mu{constructor(e,t,r,i,s){this.snapshotVersion=e,this.targetChanges=t,this.targetMismatches=r,this.documentUpdates=i,this.resolvedLimboDocuments=s}static createSynthesizedRemoteEventForCurrentChange(e,t,r){const i=new Map;return i.set(e,wl.createSynthesizedTargetChangeForCurrentChange(e,t,r)),new mu(ue.min(),i,new qt(Re),fs(),Be())}}class wl{constructor(e,t,r,i,s){this.resumeToken=e,this.current=t,this.addedDocuments=r,this.modifiedDocuments=i,this.removedDocuments=s}static createSynthesizedTargetChangeForCurrentChange(e,t,r){return new wl(r,t,Be(),Be(),Be())}}/**
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
 */class pc{constructor(e,t,r,i){this.Se=e,this.removedTargetIds=t,this.key=r,this.be=i}}class zv{constructor(e,t){this.targetId=e,this.De=t}}class jv{constructor(e,t,r=wn.EMPTY_BYTE_STRING,i=null){this.state=e,this.targetIds=t,this.resumeToken=r,this.cause=i}}class Lp{constructor(){this.ve=0,this.Ce=Fp(),this.Fe=wn.EMPTY_BYTE_STRING,this.Me=!1,this.xe=!0}get current(){return this.Me}get resumeToken(){return this.Fe}get Oe(){return this.ve!==0}get Ne(){return this.xe}Be(e){e.approximateByteSize()>0&&(this.xe=!0,this.Fe=e)}Le(){let e=Be(),t=Be(),r=Be();return this.Ce.forEach(((i,s)=>{switch(s){case 0:e=e.add(i);break;case 2:t=t.add(i);break;case 1:r=r.add(i);break;default:ie(38017,{changeType:s})}})),new wl(this.Fe,this.Me,e,t,r)}ke(){this.xe=!1,this.Ce=Fp()}qe(e,t){this.xe=!0,this.Ce=this.Ce.insert(e,t)}Qe(e){this.xe=!0,this.Ce=this.Ce.remove(e)}$e(){this.ve+=1}Ue(){this.ve-=1,it(this.ve>=0,3241,{ve:this.ve})}Ke(){this.xe=!0,this.Me=!0}}class E1{constructor(e){this.We=e,this.Ge=new Map,this.ze=fs(),this.je=Xl(),this.Je=Xl(),this.He=new qt(Re)}Ye(e){for(const t of e.Se)e.be&&e.be.isFoundDocument()?this.Ze(t,e.be):this.Xe(t,e.key,e.be);for(const t of e.removedTargetIds)this.Xe(t,e.key,e.be)}et(e){this.forEachTarget(e,(t=>{const r=this.tt(t);switch(e.state){case 0:this.nt(t)&&r.Be(e.resumeToken);break;case 1:r.Ue(),r.Oe||r.ke(),r.Be(e.resumeToken);break;case 2:r.Ue(),r.Oe||this.removeTarget(t);break;case 3:this.nt(t)&&(r.Ke(),r.Be(e.resumeToken));break;case 4:this.nt(t)&&(this.rt(t),r.Be(e.resumeToken));break;default:ie(56790,{state:e.state})}}))}forEachTarget(e,t){e.targetIds.length>0?e.targetIds.forEach(t):this.Ge.forEach(((r,i)=>{this.nt(i)&&t(i)}))}it(e){const t=e.targetId,r=e.De.count,i=this.st(t);if(i){const s=i.target;if($h(s))if(r===0){const a=new Z(s.path);this.Xe(t,a,cn.newNoDocument(a,ue.min()))}else it(r===1,20013,{expectedCount:r});else{const a=this.ot(t);if(a!==r){const l=this._t(e),c=l?this.ut(l,e,a):1;if(c!==0){this.rt(t);const h=c===2?"TargetPurposeExistenceFilterMismatchBloom":"TargetPurposeExistenceFilterMismatch";this.He=this.He.insert(t,h)}}}}}_t(e){const t=e.De.unchangedNames;if(!t||!t.bits)return null;const{bits:{bitmap:r="",padding:i=0},hashCount:s=0}=t;let a,l;try{a=hs(r).toUint8Array()}catch(c){if(c instanceof _v)return Qs("Decoding the base64 bloom filter in existence filter failed ("+c.message+"); ignoring the bloom filter and falling back to full re-query."),null;throw c}try{l=new Fd(a,i,s)}catch(c){return Qs(c instanceof ka?"BloomFilter error: ":"Applying bloom filter failed: ",c),null}return l.fe===0?null:l}ut(e,t,r){return t.De.count===r-this.ht(e,t.targetId)?0:2}ht(e,t){const r=this.We.getRemoteKeysForTarget(t);let i=0;return r.forEach((s=>{const a=this.We.lt(),l=`projects/${a.projectId}/databases/${a.database}/documents/${s.path.canonicalString()}`;e.mightContain(l)||(this.Xe(t,s,null),i++)})),i}Pt(e){const t=new Map;this.Ge.forEach(((s,a)=>{const l=this.st(a);if(l){if(s.current&&$h(l.target)){const c=new Z(l.target.path);this.Tt(c).has(a)||this.It(a,c)||this.Xe(a,c,cn.newNoDocument(c,e))}s.Ne&&(t.set(a,s.Le()),s.ke())}}));let r=Be();this.Je.forEach(((s,a)=>{let l=!0;a.forEachWhile((c=>{const h=this.st(c);return!h||h.purpose==="TargetPurposeLimboResolution"||(l=!1,!1)})),l&&(r=r.add(s))})),this.ze.forEach(((s,a)=>a.setReadTime(e)));const i=new mu(e,t,this.He,this.ze,r);return this.ze=fs(),this.je=Xl(),this.Je=Xl(),this.He=new qt(Re),i}Ze(e,t){if(!this.nt(e))return;const r=this.It(e,t.key)?2:0;this.tt(e).qe(t.key,r),this.ze=this.ze.insert(t.key,t),this.je=this.je.insert(t.key,this.Tt(t.key).add(e)),this.Je=this.Je.insert(t.key,this.dt(t.key).add(e))}Xe(e,t,r){if(!this.nt(e))return;const i=this.tt(e);this.It(e,t)?i.qe(t,1):i.Qe(t),this.Je=this.Je.insert(t,this.dt(t).delete(e)),this.Je=this.Je.insert(t,this.dt(t).add(e)),r&&(this.ze=this.ze.insert(t,r))}removeTarget(e){this.Ge.delete(e)}ot(e){const t=this.tt(e).Le();return this.We.getRemoteKeysForTarget(e).size+t.addedDocuments.size-t.removedDocuments.size}$e(e){this.tt(e).$e()}tt(e){let t=this.Ge.get(e);return t||(t=new Lp,this.Ge.set(e,t)),t}dt(e){let t=this.Je.get(e);return t||(t=new en(Re),this.Je=this.Je.insert(e,t)),t}Tt(e){let t=this.je.get(e);return t||(t=new en(Re),this.je=this.je.insert(e,t)),t}nt(e){const t=this.st(e)!==null;return t||W("WatchChangeAggregator","Detected inactive target",e),t}st(e){const t=this.Ge.get(e);return t&&t.Oe?null:this.We.Et(e)}rt(e){this.Ge.set(e,new Lp),this.We.getRemoteKeysForTarget(e).forEach((t=>{this.Xe(e,t,null)}))}It(e,t){return this.We.getRemoteKeysForTarget(e).has(t)}}function Xl(){return new qt(Z.comparator)}function Fp(){return new qt(Z.comparator)}const w1={asc:"ASCENDING",desc:"DESCENDING"},T1={"<":"LESS_THAN","<=":"LESS_THAN_OR_EQUAL",">":"GREATER_THAN",">=":"GREATER_THAN_OR_EQUAL","==":"EQUAL","!=":"NOT_EQUAL","array-contains":"ARRAY_CONTAINS",in:"IN","not-in":"NOT_IN","array-contains-any":"ARRAY_CONTAINS_ANY"},I1={and:"AND",or:"OR"};class A1{constructor(e,t){this.databaseId=e,this.useProto3Json=t}}function Bh(n,e){return n.useProto3Json||yl(e)?e:{value:e}}function xc(n,e){return n.useProto3Json?`${new Date(1e3*e.seconds).toISOString().replace(/\.\d*/,"").replace("Z","")}.${("000000000"+e.nanoseconds).slice(-9)}Z`:{seconds:""+e.seconds,nanos:e.nanoseconds}}function Hv(n,e){return n.useProto3Json?e.toBase64():e.toUint8Array()}function b1(n,e){return xc(n,e.toTimestamp())}function Ai(n){return it(!!n,49232),ue.fromTimestamp((function(t){const r=us(t);return new yt(r.seconds,r.nanos)})(n))}function Ud(n,e){return zh(n,e).canonicalString()}function zh(n,e){const t=(function(i){return new tt(["projects",i.projectId,"databases",i.database])})(n).child("documents");return e===void 0?t:t.child(e)}function Wv(n){const e=tt.fromString(n);return it(Xv(e),10190,{key:e.toString()}),e}function Lc(n,e){return Ud(n.databaseId,e.path)}function qa(n,e){const t=Wv(e);if(t.get(1)!==n.databaseId.projectId)throw new B(x.INVALID_ARGUMENT,"Tried to deserialize key from different project: "+t.get(1)+" vs "+n.databaseId.projectId);if(t.get(3)!==n.databaseId.database)throw new B(x.INVALID_ARGUMENT,"Tried to deserialize key from different database: "+t.get(3)+" vs "+n.databaseId.database);return new Z(Kv(t))}function Gv(n,e){return Ud(n.databaseId,e)}function S1(n){const e=Wv(n);return e.length===4?tt.emptyPath():Kv(e)}function Up(n){return new tt(["projects",n.databaseId.projectId,"databases",n.databaseId.database]).canonicalString()}function Kv(n){return it(n.length>4&&n.get(4)==="documents",29091,{key:n.toString()}),n.popFirst(5)}function $p(n,e,t){return{name:Lc(n,e),fields:t.value.mapValue.fields}}function R1(n,e){return"found"in e?(function(r,i){it(!!i.found,43571),i.found.name,i.found.updateTime;const s=qa(r,i.found.name),a=Ai(i.found.updateTime),l=i.found.createTime?Ai(i.found.createTime):ue.min(),c=new Kn({mapValue:{fields:i.found.fields}});return cn.newFoundDocument(s,a,l,c)})(n,e):"missing"in e?(function(r,i){it(!!i.missing,3894),it(!!i.readTime,22933);const s=qa(r,i.missing),a=Ai(i.readTime);return cn.newNoDocument(s,a)})(n,e):ie(7234,{result:e})}function C1(n,e){let t;if("targetChange"in e){e.targetChange;const r=(function(h){return h==="NO_CHANGE"?0:h==="ADD"?1:h==="REMOVE"?2:h==="CURRENT"?3:h==="RESET"?4:ie(39313,{state:h})})(e.targetChange.targetChangeType||"NO_CHANGE"),i=e.targetChange.targetIds||[],s=(function(h,f){return h.useProto3Json?(it(f===void 0||typeof f=="string",58123),wn.fromBase64String(f||"")):(it(f===void 0||f instanceof Buffer||f instanceof Uint8Array,16193),wn.fromUint8Array(f||new Uint8Array))})(n,e.targetChange.resumeToken),a=e.targetChange.cause,l=a&&(function(h){const f=h.code===void 0?x.UNKNOWN:Bv(h.code);return new B(f,h.message||"")})(a);t=new jv(r,i,s,l||null)}else if("documentChange"in e){e.documentChange;const r=e.documentChange;r.document,r.document.name,r.document.updateTime;const i=qa(n,r.document.name),s=Ai(r.document.updateTime),a=r.document.createTime?Ai(r.document.createTime):ue.min(),l=new Kn({mapValue:{fields:r.document.fields}}),c=cn.newFoundDocument(i,s,a,l),h=r.targetIds||[],f=r.removedTargetIds||[];t=new pc(h,f,c.key,c)}else if("documentDelete"in e){e.documentDelete;const r=e.documentDelete;r.document;const i=qa(n,r.document),s=r.readTime?Ai(r.readTime):ue.min(),a=cn.newNoDocument(i,s),l=r.removedTargetIds||[];t=new pc([],l,a.key,a)}else if("documentRemove"in e){e.documentRemove;const r=e.documentRemove;r.document;const i=qa(n,r.document),s=r.removedTargetIds||[];t=new pc([],s,i,null)}else{if(!("filter"in e))return ie(11601,{At:e});{e.filter;const r=e.filter;r.targetId;const{count:i=0,unchangedNames:s}=r,a=new _1(i,s),l=r.targetId;t=new zv(l,a)}}return t}function P1(n,e){let t;if(e instanceof El)t={update:$p(n,e.key,e.value)};else if(e instanceof Ld)t={delete:Lc(n,e.key)};else if(e instanceof eo)t={update:$p(n,e.key,e.data),updateMask:L1(e.fieldMask)};else{if(!(e instanceof qv))return ie(16599,{Rt:e.type});t={verify:Lc(n,e.key)}}return e.fieldTransforms.length>0&&(t.updateTransforms=e.fieldTransforms.map((r=>(function(s,a){const l=a.transform;if(l instanceof el)return{fieldPath:a.field.canonicalString(),setToServerValue:"REQUEST_TIME"};if(l instanceof tl)return{fieldPath:a.field.canonicalString(),appendMissingElements:{values:l.elements}};if(l instanceof nl)return{fieldPath:a.field.canonicalString(),removeAllFromArray:{values:l.elements}};if(l instanceof Mc)return{fieldPath:a.field.canonicalString(),increment:l.Ee};throw ie(20930,{transform:a.transform})})(0,r)))),e.precondition.isNone||(t.currentDocument=(function(i,s){return s.updateTime!==void 0?{updateTime:b1(i,s.updateTime)}:s.exists!==void 0?{exists:s.exists}:ie(27497)})(n,e.precondition)),t}function k1(n,e){return{documents:[Gv(n,e.path)]}}function Qv(n,e){const t={structuredQuery:{}},r=e.path;let i;e.collectionGroup!==null?(i=r,t.structuredQuery.from=[{collectionId:e.collectionGroup,allDescendants:!0}]):(i=r.popLast(),t.structuredQuery.from=[{collectionId:r.lastSegment()}]),t.parent=Gv(n,i);const s=(function(h){if(h.length!==0)return Jv(Fr.create(h,"and"))})(e.filters);s&&(t.structuredQuery.where=s);const a=(function(h){if(h.length!==0)return h.map((f=>(function(_){return{field:Ki(_.field),direction:V1(_.dir)}})(f)))})(e.orderBy);a&&(t.structuredQuery.orderBy=a);const l=Bh(n,e.limit);return l!==null&&(t.structuredQuery.limit=l),e.startAt&&(t.structuredQuery.startAt=(function(h){return{before:h.inclusive,values:h.position}})(e.startAt)),e.endAt&&(t.structuredQuery.endAt=(function(h){return{before:!h.inclusive,values:h.position}})(e.endAt)),{Vt:t,parent:i}}function N1(n,e,t,r){const{Vt:i,parent:s}=Qv(n,e),a={},l=[];let c=0;return t.forEach((h=>{const f="aggregate_"+c++;a[f]=h.alias,h.aggregateType==="count"?l.push({alias:f,count:{}}):h.aggregateType==="avg"?l.push({alias:f,avg:{field:Ki(h.fieldPath)}}):h.aggregateType==="sum"&&l.push({alias:f,sum:{field:Ki(h.fieldPath)}})})),{request:{structuredAggregationQuery:{aggregations:l,structuredQuery:i.structuredQuery},parent:i.parent},ft:a,parent:s}}function D1(n){let e=S1(n.parent);const t=n.structuredQuery,r=t.from?t.from.length:0;let i=null;if(r>0){it(r===1,65062);const f=t.from[0];f.allDescendants?i=f.collectionId:e=e.child(f.collectionId)}let s=[];t.where&&(s=(function(g){const _=Yv(g);return _ instanceof Fr&&Sv(_)?_.getFilters():[_]})(t.where));let a=[];t.orderBy&&(a=(function(g){return g.map((_=>(function(S){return new Za(mo(S.field),(function(I){switch(I){case"ASCENDING":return"asc";case"DESCENDING":return"desc";default:return}})(S.direction))})(_)))})(t.orderBy));let l=null;t.limit&&(l=(function(g){let _;return _=typeof g=="object"?g.value:g,yl(_)?null:_})(t.limit));let c=null;t.startAt&&(c=(function(g){const _=!!g.before,E=g.values||[];return new Bo(E,_)})(t.startAt));let h=null;return t.endAt&&(h=(function(g){const _=!g.before,E=g.values||[];return new Bo(E,_)})(t.endAt)),Xb(e,i,a,s,l,"F",c,h)}function O1(n,e){const t=(function(i){switch(i){case"TargetPurposeListen":return null;case"TargetPurposeExistenceFilterMismatch":return"existence-filter-mismatch";case"TargetPurposeExistenceFilterMismatchBloom":return"existence-filter-mismatch-bloom";case"TargetPurposeLimboResolution":return"limbo-document";default:return ie(28987,{purpose:i})}})(e.purpose);return t==null?null:{"goog-listen-tags":t}}function Yv(n){return n.unaryFilter!==void 0?(function(t){switch(t.unaryFilter.op){case"IS_NAN":const r=mo(t.unaryFilter.field);return jt.create(r,"==",{doubleValue:NaN});case"IS_NULL":const i=mo(t.unaryFilter.field);return jt.create(i,"==",{nullValue:"NULL_VALUE"});case"IS_NOT_NAN":const s=mo(t.unaryFilter.field);return jt.create(s,"!=",{doubleValue:NaN});case"IS_NOT_NULL":const a=mo(t.unaryFilter.field);return jt.create(a,"!=",{nullValue:"NULL_VALUE"});case"OPERATOR_UNSPECIFIED":return ie(61313);default:return ie(60726)}})(n):n.fieldFilter!==void 0?(function(t){return jt.create(mo(t.fieldFilter.field),(function(i){switch(i){case"EQUAL":return"==";case"NOT_EQUAL":return"!=";case"GREATER_THAN":return">";case"GREATER_THAN_OR_EQUAL":return">=";case"LESS_THAN":return"<";case"LESS_THAN_OR_EQUAL":return"<=";case"ARRAY_CONTAINS":return"array-contains";case"IN":return"in";case"NOT_IN":return"not-in";case"ARRAY_CONTAINS_ANY":return"array-contains-any";case"OPERATOR_UNSPECIFIED":return ie(58110);default:return ie(50506)}})(t.fieldFilter.op),t.fieldFilter.value)})(n):n.compositeFilter!==void 0?(function(t){return Fr.create(t.compositeFilter.filters.map((r=>Yv(r))),(function(i){switch(i){case"AND":return"and";case"OR":return"or";default:return ie(1026)}})(t.compositeFilter.op))})(n):ie(30097,{filter:n})}function V1(n){return w1[n]}function M1(n){return T1[n]}function x1(n){return I1[n]}function Ki(n){return{fieldPath:n.canonicalString()}}function mo(n){return Cn.fromServerFormat(n.fieldPath)}function Jv(n){return n instanceof jt?(function(t){if(t.op==="=="){if(Sp(t.value))return{unaryFilter:{field:Ki(t.field),op:"IS_NAN"}};if(bp(t.value))return{unaryFilter:{field:Ki(t.field),op:"IS_NULL"}}}else if(t.op==="!="){if(Sp(t.value))return{unaryFilter:{field:Ki(t.field),op:"IS_NOT_NAN"}};if(bp(t.value))return{unaryFilter:{field:Ki(t.field),op:"IS_NOT_NULL"}}}return{fieldFilter:{field:Ki(t.field),op:M1(t.op),value:t.value}}})(n):n instanceof Fr?(function(t){const r=t.getFilters().map((i=>Jv(i)));return r.length===1?r[0]:{compositeFilter:{op:x1(t.op),filters:r}}})(n):ie(54877,{filter:n})}function L1(n){const e=[];return n.fields.forEach((t=>e.push(t.canonicalString()))),{fieldPaths:e}}function Xv(n){return n.length>=4&&n.get(0)==="projects"&&n.get(2)==="databases"}/**
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
 */class Yi{constructor(e,t,r,i,s=ue.min(),a=ue.min(),l=wn.EMPTY_BYTE_STRING,c=null){this.target=e,this.targetId=t,this.purpose=r,this.sequenceNumber=i,this.snapshotVersion=s,this.lastLimboFreeSnapshotVersion=a,this.resumeToken=l,this.expectedCount=c}withSequenceNumber(e){return new Yi(this.target,this.targetId,this.purpose,e,this.snapshotVersion,this.lastLimboFreeSnapshotVersion,this.resumeToken,this.expectedCount)}withResumeToken(e,t){return new Yi(this.target,this.targetId,this.purpose,this.sequenceNumber,t,this.lastLimboFreeSnapshotVersion,e,null)}withExpectedCount(e){return new Yi(this.target,this.targetId,this.purpose,this.sequenceNumber,this.snapshotVersion,this.lastLimboFreeSnapshotVersion,this.resumeToken,e)}withLastLimboFreeSnapshotVersion(e){return new Yi(this.target,this.targetId,this.purpose,this.sequenceNumber,this.snapshotVersion,e,this.resumeToken,this.expectedCount)}}/**
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
 */class F1{constructor(e){this.gt=e}}function U1(n){const e=D1({parent:n.parent,structuredQuery:n.structuredQuery});return n.limitType==="LAST"?Vc(e,e.limit,"L"):e}/**
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
 */class $1{constructor(){this.Dn=new q1}addToCollectionParentIndex(e,t){return this.Dn.add(t),F.resolve()}getCollectionParents(e,t){return F.resolve(this.Dn.getEntries(t))}addFieldIndex(e,t){return F.resolve()}deleteFieldIndex(e,t){return F.resolve()}deleteAllFieldIndexes(e){return F.resolve()}createTargetIndexes(e,t){return F.resolve()}getDocumentsMatchingTarget(e,t){return F.resolve(null)}getIndexType(e,t){return F.resolve(0)}getFieldIndexes(e,t){return F.resolve([])}getNextCollectionGroupToUpdate(e){return F.resolve(null)}getMinOffset(e,t){return F.resolve(cs.min())}getMinOffsetFromCollectionGroup(e,t){return F.resolve(cs.min())}updateCollectionGroup(e,t,r){return F.resolve()}updateIndexEntries(e,t){return F.resolve()}}class q1{constructor(){this.index={}}add(e){const t=e.lastSegment(),r=e.popLast(),i=this.index[t]||new en(tt.comparator),s=!i.has(r);return this.index[t]=i.add(r),s}has(e){const t=e.lastSegment(),r=e.popLast(),i=this.index[t];return i&&i.has(r)}getEntries(e){return(this.index[e]||new en(tt.comparator)).toArray()}}/**
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
 */const qp={didRun:!1,sequenceNumbersCollected:0,targetsRemoved:0,documentsRemoved:0},Zv=41943040;class Wn{static withCacheSize(e){return new Wn(e,Wn.DEFAULT_COLLECTION_PERCENTILE,Wn.DEFAULT_MAX_SEQUENCE_NUMBERS_TO_COLLECT)}constructor(e,t,r){this.cacheSizeCollectionThreshold=e,this.percentileToCollect=t,this.maximumSequenceNumbersToCollect=r}}/**
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
 */Wn.DEFAULT_COLLECTION_PERCENTILE=10,Wn.DEFAULT_MAX_SEQUENCE_NUMBERS_TO_COLLECT=1e3,Wn.DEFAULT=new Wn(Zv,Wn.DEFAULT_COLLECTION_PERCENTILE,Wn.DEFAULT_MAX_SEQUENCE_NUMBERS_TO_COLLECT),Wn.DISABLED=new Wn(-1,0,0);/**
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
 */class zo{constructor(e){this._r=e}next(){return this._r+=2,this._r}static ar(){return new zo(0)}static ur(){return new zo(-1)}}/**
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
 */const Bp="LruGarbageCollector",ey=1048576;function zp([n,e],[t,r]){const i=Re(n,t);return i===0?Re(e,r):i}class B1{constructor(e){this.Tr=e,this.buffer=new en(zp),this.Ir=0}dr(){return++this.Ir}Er(e){const t=[e,this.dr()];if(this.buffer.size<this.Tr)this.buffer=this.buffer.add(t);else{const r=this.buffer.last();zp(t,r)<0&&(this.buffer=this.buffer.delete(r).add(t))}}get maxValue(){return this.buffer.last()[0]}}class z1{constructor(e,t,r){this.garbageCollector=e,this.asyncQueue=t,this.localStore=r,this.Ar=null}start(){this.garbageCollector.params.cacheSizeCollectionThreshold!==-1&&this.Rr(6e4)}stop(){this.Ar&&(this.Ar.cancel(),this.Ar=null)}get started(){return this.Ar!==null}Rr(e){W(Bp,`Garbage collection scheduled in ${e}ms`),this.Ar=this.asyncQueue.enqueueAfterDelay("lru_garbage_collection",e,(async()=>{this.Ar=null;try{await this.localStore.collectGarbage(this.garbageCollector)}catch(t){ra(t)?W(Bp,"Ignoring IndexedDB error during garbage collection: ",t):await au(t)}await this.Rr(3e5)}))}}class j1{constructor(e,t){this.Vr=e,this.params=t}calculateTargetCount(e,t){return this.Vr.mr(e).next((r=>Math.floor(t/100*r)))}nthSequenceNumber(e,t){if(t===0)return F.resolve(lu.ue);const r=new B1(t);return this.Vr.forEachTarget(e,(i=>r.Er(i.sequenceNumber))).next((()=>this.Vr.gr(e,(i=>r.Er(i))))).next((()=>r.maxValue))}removeTargets(e,t,r){return this.Vr.removeTargets(e,t,r)}removeOrphanedDocuments(e,t){return this.Vr.removeOrphanedDocuments(e,t)}collect(e,t){return this.params.cacheSizeCollectionThreshold===-1?(W("LruGarbageCollector","Garbage collection skipped; disabled"),F.resolve(qp)):this.getCacheSize(e).next((r=>r<this.params.cacheSizeCollectionThreshold?(W("LruGarbageCollector",`Garbage collection skipped; Cache size ${r} is lower than threshold ${this.params.cacheSizeCollectionThreshold}`),qp):this.pr(e,t)))}getCacheSize(e){return this.Vr.getCacheSize(e)}pr(e,t){let r,i,s,a,l,c,h;const f=Date.now();return this.calculateTargetCount(e,this.params.percentileToCollect).next((g=>(g>this.params.maximumSequenceNumbersToCollect?(W("LruGarbageCollector",`Capping sequence numbers to collect down to the maximum of ${this.params.maximumSequenceNumbersToCollect} from ${g}`),i=this.params.maximumSequenceNumbersToCollect):i=g,a=Date.now(),this.nthSequenceNumber(e,i)))).next((g=>(r=g,l=Date.now(),this.removeTargets(e,r,t)))).next((g=>(s=g,c=Date.now(),this.removeOrphanedDocuments(e,r)))).next((g=>(h=Date.now(),fo()<=Oe.DEBUG&&W("LruGarbageCollector",`LRU Garbage Collection
	Counted targets in ${a-f}ms
	Determined least recently used ${i} in `+(l-a)+`ms
	Removed ${s} targets in `+(c-l)+`ms
	Removed ${g} documents in `+(h-c)+`ms
Total Duration: ${h-f}ms`),F.resolve({didRun:!0,sequenceNumbersCollected:i,targetsRemoved:s,documentsRemoved:g}))))}}function H1(n,e){return new j1(n,e)}/**
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
 */class W1{constructor(){this.changes=new Zs((e=>e.toString()),((e,t)=>e.isEqual(t))),this.changesApplied=!1}addEntry(e){this.assertNotApplied(),this.changes.set(e.key,e)}removeEntry(e,t){this.assertNotApplied(),this.changes.set(e,cn.newInvalidDocument(e).setReadTime(t))}getEntry(e,t){this.assertNotApplied();const r=this.changes.get(t);return r!==void 0?F.resolve(r):this.getFromCache(e,t)}getEntries(e,t){return this.getAllFromCache(e,t)}apply(e){return this.assertNotApplied(),this.changesApplied=!0,this.applyChanges(e)}assertNotApplied(){}}/**
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
 */class G1{constructor(e,t){this.overlayedDocument=e,this.mutatedFields=t}}/**
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
 */class K1{constructor(e,t,r,i){this.remoteDocumentCache=e,this.mutationQueue=t,this.documentOverlayCache=r,this.indexManager=i}getDocument(e,t){let r=null;return this.documentOverlayCache.getOverlay(e,t).next((i=>(r=i,this.remoteDocumentCache.getEntry(e,t)))).next((i=>(r!==null&&$a(r.mutation,i,Er.empty(),yt.now()),i)))}getDocuments(e,t){return this.remoteDocumentCache.getEntries(e,t).next((r=>this.getLocalViewOfDocuments(e,r,Be()).next((()=>r))))}getLocalViewOfDocuments(e,t,r=Be()){const i=Os();return this.populateOverlays(e,i,t).next((()=>this.computeViews(e,t,i,r).next((s=>{let a=Pa();return s.forEach(((l,c)=>{a=a.insert(l,c.overlayedDocument)})),a}))))}getOverlayedDocuments(e,t){const r=Os();return this.populateOverlays(e,r,t).next((()=>this.computeViews(e,t,r,Be())))}populateOverlays(e,t,r){const i=[];return r.forEach((s=>{t.has(s)||i.push(s)})),this.documentOverlayCache.getOverlays(e,i).next((s=>{s.forEach(((a,l)=>{t.set(a,l)}))}))}computeViews(e,t,r,i){let s=fs();const a=Ua(),l=(function(){return Ua()})();return t.forEach(((c,h)=>{const f=r.get(h.key);i.has(h.key)&&(f===void 0||f.mutation instanceof eo)?s=s.insert(h.key,h):f!==void 0?(a.set(h.key,f.mutation.getFieldMask()),$a(f.mutation,h,f.mutation.getFieldMask(),yt.now())):a.set(h.key,Er.empty())})),this.recalculateAndSaveOverlays(e,s).next((c=>(c.forEach(((h,f)=>a.set(h,f))),t.forEach(((h,f)=>{var g;return l.set(h,new G1(f,(g=a.get(h))!==null&&g!==void 0?g:null))})),l)))}recalculateAndSaveOverlays(e,t){const r=Ua();let i=new qt(((a,l)=>a-l)),s=Be();return this.mutationQueue.getAllMutationBatchesAffectingDocumentKeys(e,t).next((a=>{for(const l of a)l.keys().forEach((c=>{const h=t.get(c);if(h===null)return;let f=r.get(c)||Er.empty();f=l.applyToLocalView(h,f),r.set(c,f);const g=(i.get(l.batchId)||Be()).add(c);i=i.insert(l.batchId,g)}))})).next((()=>{const a=[],l=i.getReverseIterator();for(;l.hasNext();){const c=l.getNext(),h=c.key,f=c.value,g=Vv();f.forEach((_=>{if(!s.has(_)){const E=Uv(t.get(_),r.get(_));E!==null&&g.set(_,E),s=s.add(_)}})),a.push(this.documentOverlayCache.saveOverlays(e,h,g))}return F.waitFor(a)})).next((()=>r))}recalculateAndSaveOverlaysForDocumentKeys(e,t){return this.remoteDocumentCache.getEntries(e,t).next((r=>this.recalculateAndSaveOverlays(e,r)))}getDocumentsMatchingQuery(e,t,r,i){return(function(a){return Z.isDocumentKey(a.path)&&a.collectionGroup===null&&a.filters.length===0})(t)?this.getDocumentsMatchingDocumentQuery(e,t.path):Md(t)?this.getDocumentsMatchingCollectionGroupQuery(e,t,r,i):this.getDocumentsMatchingCollectionQuery(e,t,r,i)}getNextDocuments(e,t,r,i){return this.remoteDocumentCache.getAllFromCollectionGroup(e,t,r,i).next((s=>{const a=i-s.size>0?this.documentOverlayCache.getOverlaysForCollectionGroup(e,t,r.largestBatchId,i-s.size):F.resolve(Os());let l=Qa,c=s;return a.next((h=>F.forEach(h,((f,g)=>(l<g.largestBatchId&&(l=g.largestBatchId),s.get(f)?F.resolve():this.remoteDocumentCache.getEntry(e,f).next((_=>{c=c.insert(f,_)}))))).next((()=>this.populateOverlays(e,h,s))).next((()=>this.computeViews(e,c,h,Be()))).next((f=>({batchId:l,changes:r1(f)})))))}))}getDocumentsMatchingDocumentQuery(e,t){return this.getDocument(e,new Z(t)).next((r=>{let i=Pa();return r.isFoundDocument()&&(i=i.insert(r.key,r)),i}))}getDocumentsMatchingCollectionGroupQuery(e,t,r,i){const s=t.collectionGroup;let a=Pa();return this.indexManager.getCollectionParents(e,s).next((l=>F.forEach(l,(c=>{const h=(function(g,_){return new Xs(_,null,g.explicitOrderBy.slice(),g.filters.slice(),g.limit,g.limitType,g.startAt,g.endAt)})(t,c.child(s));return this.getDocumentsMatchingCollectionQuery(e,h,r,i).next((f=>{f.forEach(((g,_)=>{a=a.insert(g,_)}))}))})).next((()=>a))))}getDocumentsMatchingCollectionQuery(e,t,r,i){let s;return this.documentOverlayCache.getOverlaysForCollection(e,t.path,r.largestBatchId).next((a=>(s=a,this.remoteDocumentCache.getDocumentsMatchingQuery(e,t,r,s,i)))).next((a=>{s.forEach(((c,h)=>{const f=h.getKey();a.get(f)===null&&(a=a.insert(f,cn.newInvalidDocument(f)))}));let l=Pa();return a.forEach(((c,h)=>{const f=s.get(c);f!==void 0&&$a(f.mutation,h,Er.empty(),yt.now()),du(t,h)&&(l=l.insert(c,h))})),l}))}}/**
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
 */class Q1{constructor(e){this.serializer=e,this.Br=new Map,this.Lr=new Map}getBundleMetadata(e,t){return F.resolve(this.Br.get(t))}saveBundleMetadata(e,t){return this.Br.set(t.id,(function(i){return{id:i.id,version:i.version,createTime:Ai(i.createTime)}})(t)),F.resolve()}getNamedQuery(e,t){return F.resolve(this.Lr.get(t))}saveNamedQuery(e,t){return this.Lr.set(t.name,(function(i){return{name:i.name,query:U1(i.bundledQuery),readTime:Ai(i.readTime)}})(t)),F.resolve()}}/**
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
 */class Y1{constructor(){this.overlays=new qt(Z.comparator),this.kr=new Map}getOverlay(e,t){return F.resolve(this.overlays.get(t))}getOverlays(e,t){const r=Os();return F.forEach(t,(i=>this.getOverlay(e,i).next((s=>{s!==null&&r.set(i,s)})))).next((()=>r))}saveOverlays(e,t,r){return r.forEach(((i,s)=>{this.wt(e,t,s)})),F.resolve()}removeOverlaysForBatchId(e,t,r){const i=this.kr.get(r);return i!==void 0&&(i.forEach((s=>this.overlays=this.overlays.remove(s))),this.kr.delete(r)),F.resolve()}getOverlaysForCollection(e,t,r){const i=Os(),s=t.length+1,a=new Z(t.child("")),l=this.overlays.getIteratorFrom(a);for(;l.hasNext();){const c=l.getNext().value,h=c.getKey();if(!t.isPrefixOf(h.path))break;h.path.length===s&&c.largestBatchId>r&&i.set(c.getKey(),c)}return F.resolve(i)}getOverlaysForCollectionGroup(e,t,r,i){let s=new qt(((h,f)=>h-f));const a=this.overlays.getIterator();for(;a.hasNext();){const h=a.getNext().value;if(h.getKey().getCollectionGroup()===t&&h.largestBatchId>r){let f=s.get(h.largestBatchId);f===null&&(f=Os(),s=s.insert(h.largestBatchId,f)),f.set(h.getKey(),h)}}const l=Os(),c=s.getIterator();for(;c.hasNext()&&(c.getNext().value.forEach(((h,f)=>l.set(h,f))),!(l.size()>=i)););return F.resolve(l)}wt(e,t,r){const i=this.overlays.get(r.key);if(i!==null){const a=this.kr.get(i.largestBatchId).delete(r.key);this.kr.set(i.largestBatchId,a)}this.overlays=this.overlays.insert(r.key,new m1(t,r));let s=this.kr.get(t);s===void 0&&(s=Be(),this.kr.set(t,s)),this.kr.set(t,s.add(r.key))}}/**
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
 */class J1{constructor(){this.sessionToken=wn.EMPTY_BYTE_STRING}getSessionToken(e){return F.resolve(this.sessionToken)}setSessionToken(e,t){return this.sessionToken=t,F.resolve()}}/**
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
 */class $d{constructor(){this.qr=new en(ln.Qr),this.$r=new en(ln.Ur)}isEmpty(){return this.qr.isEmpty()}addReference(e,t){const r=new ln(e,t);this.qr=this.qr.add(r),this.$r=this.$r.add(r)}Kr(e,t){e.forEach((r=>this.addReference(r,t)))}removeReference(e,t){this.Wr(new ln(e,t))}Gr(e,t){e.forEach((r=>this.removeReference(r,t)))}zr(e){const t=new Z(new tt([])),r=new ln(t,e),i=new ln(t,e+1),s=[];return this.$r.forEachInRange([r,i],(a=>{this.Wr(a),s.push(a.key)})),s}jr(){this.qr.forEach((e=>this.Wr(e)))}Wr(e){this.qr=this.qr.delete(e),this.$r=this.$r.delete(e)}Jr(e){const t=new Z(new tt([])),r=new ln(t,e),i=new ln(t,e+1);let s=Be();return this.$r.forEachInRange([r,i],(a=>{s=s.add(a.key)})),s}containsKey(e){const t=new ln(e,0),r=this.qr.firstAfterOrEqual(t);return r!==null&&e.isEqual(r.key)}}class ln{constructor(e,t){this.key=e,this.Hr=t}static Qr(e,t){return Z.comparator(e.key,t.key)||Re(e.Hr,t.Hr)}static Ur(e,t){return Re(e.Hr,t.Hr)||Z.comparator(e.key,t.key)}}/**
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
 */class X1{constructor(e,t){this.indexManager=e,this.referenceDelegate=t,this.mutationQueue=[],this.er=1,this.Yr=new en(ln.Qr)}checkEmpty(e){return F.resolve(this.mutationQueue.length===0)}addMutationBatch(e,t,r,i){const s=this.er;this.er++,this.mutationQueue.length>0&&this.mutationQueue[this.mutationQueue.length-1];const a=new p1(s,t,r,i);this.mutationQueue.push(a);for(const l of i)this.Yr=this.Yr.add(new ln(l.key,s)),this.indexManager.addToCollectionParentIndex(e,l.key.path.popLast());return F.resolve(a)}lookupMutationBatch(e,t){return F.resolve(this.Zr(t))}getNextMutationBatchAfterBatchId(e,t){const r=t+1,i=this.Xr(r),s=i<0?0:i;return F.resolve(this.mutationQueue.length>s?this.mutationQueue[s]:null)}getHighestUnacknowledgedBatchId(){return F.resolve(this.mutationQueue.length===0?Db:this.er-1)}getAllMutationBatches(e){return F.resolve(this.mutationQueue.slice())}getAllMutationBatchesAffectingDocumentKey(e,t){const r=new ln(t,0),i=new ln(t,Number.POSITIVE_INFINITY),s=[];return this.Yr.forEachInRange([r,i],(a=>{const l=this.Zr(a.Hr);s.push(l)})),F.resolve(s)}getAllMutationBatchesAffectingDocumentKeys(e,t){let r=new en(Re);return t.forEach((i=>{const s=new ln(i,0),a=new ln(i,Number.POSITIVE_INFINITY);this.Yr.forEachInRange([s,a],(l=>{r=r.add(l.Hr)}))})),F.resolve(this.ei(r))}getAllMutationBatchesAffectingQuery(e,t){const r=t.path,i=r.length+1;let s=r;Z.isDocumentKey(s)||(s=s.child(""));const a=new ln(new Z(s),0);let l=new en(Re);return this.Yr.forEachWhile((c=>{const h=c.key.path;return!!r.isPrefixOf(h)&&(h.length===i&&(l=l.add(c.Hr)),!0)}),a),F.resolve(this.ei(l))}ei(e){const t=[];return e.forEach((r=>{const i=this.Zr(r);i!==null&&t.push(i)})),t}removeMutationBatch(e,t){it(this.ti(t.batchId,"removed")===0,55003),this.mutationQueue.shift();let r=this.Yr;return F.forEach(t.mutations,(i=>{const s=new ln(i.key,t.batchId);return r=r.delete(s),this.referenceDelegate.markPotentiallyOrphaned(e,i.key)})).next((()=>{this.Yr=r}))}rr(e){}containsKey(e,t){const r=new ln(t,0),i=this.Yr.firstAfterOrEqual(r);return F.resolve(t.isEqual(i&&i.key))}performConsistencyCheck(e){return this.mutationQueue.length,F.resolve()}ti(e,t){return this.Xr(e)}Xr(e){return this.mutationQueue.length===0?0:e-this.mutationQueue[0].batchId}Zr(e){const t=this.Xr(e);return t<0||t>=this.mutationQueue.length?null:this.mutationQueue[t]}}/**
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
 */class Z1{constructor(e){this.ni=e,this.docs=(function(){return new qt(Z.comparator)})(),this.size=0}setIndexManager(e){this.indexManager=e}addEntry(e,t){const r=t.key,i=this.docs.get(r),s=i?i.size:0,a=this.ni(t);return this.docs=this.docs.insert(r,{document:t.mutableCopy(),size:a}),this.size+=a-s,this.indexManager.addToCollectionParentIndex(e,r.path.popLast())}removeEntry(e){const t=this.docs.get(e);t&&(this.docs=this.docs.remove(e),this.size-=t.size)}getEntry(e,t){const r=this.docs.get(t);return F.resolve(r?r.document.mutableCopy():cn.newInvalidDocument(t))}getEntries(e,t){let r=fs();return t.forEach((i=>{const s=this.docs.get(i);r=r.insert(i,s?s.document.mutableCopy():cn.newInvalidDocument(i))})),F.resolve(r)}getDocumentsMatchingQuery(e,t,r,i){let s=fs();const a=t.path,l=new Z(a.child("__id-9223372036854775808__")),c=this.docs.getIteratorFrom(l);for(;c.hasNext();){const{key:h,value:{document:f}}=c.getNext();if(!a.isPrefixOf(h.path))break;h.path.length>a.length+1||Cb(Rb(f),r)<=0||(i.has(f.key)||du(t,f))&&(s=s.insert(f.key,f.mutableCopy()))}return F.resolve(s)}getAllFromCollectionGroup(e,t,r,i){ie(9500)}ri(e,t){return F.forEach(this.docs,(r=>t(r)))}newChangeBuffer(e){return new eS(this)}getSize(e){return F.resolve(this.size)}}class eS extends W1{constructor(e){super(),this.Or=e}applyChanges(e){const t=[];return this.changes.forEach(((r,i)=>{i.isValidDocument()?t.push(this.Or.addEntry(e,i)):this.Or.removeEntry(r)})),F.waitFor(t)}getFromCache(e,t){return this.Or.getEntry(e,t)}getAllFromCache(e,t){return this.Or.getEntries(e,t)}}/**
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
 */class tS{constructor(e){this.persistence=e,this.ii=new Zs((t=>Dd(t)),Od),this.lastRemoteSnapshotVersion=ue.min(),this.highestTargetId=0,this.si=0,this.oi=new $d,this.targetCount=0,this._i=zo.ar()}forEachTarget(e,t){return this.ii.forEach(((r,i)=>t(i))),F.resolve()}getLastRemoteSnapshotVersion(e){return F.resolve(this.lastRemoteSnapshotVersion)}getHighestSequenceNumber(e){return F.resolve(this.si)}allocateTargetId(e){return this.highestTargetId=this._i.next(),F.resolve(this.highestTargetId)}setTargetsMetadata(e,t,r){return r&&(this.lastRemoteSnapshotVersion=r),t>this.si&&(this.si=t),F.resolve()}hr(e){this.ii.set(e.target,e);const t=e.targetId;t>this.highestTargetId&&(this._i=new zo(t),this.highestTargetId=t),e.sequenceNumber>this.si&&(this.si=e.sequenceNumber)}addTargetData(e,t){return this.hr(t),this.targetCount+=1,F.resolve()}updateTargetData(e,t){return this.hr(t),F.resolve()}removeTargetData(e,t){return this.ii.delete(t.target),this.oi.zr(t.targetId),this.targetCount-=1,F.resolve()}removeTargets(e,t,r){let i=0;const s=[];return this.ii.forEach(((a,l)=>{l.sequenceNumber<=t&&r.get(l.targetId)===null&&(this.ii.delete(a),s.push(this.removeMatchingKeysForTargetId(e,l.targetId)),i++)})),F.waitFor(s).next((()=>i))}getTargetCount(e){return F.resolve(this.targetCount)}getTargetData(e,t){const r=this.ii.get(t)||null;return F.resolve(r)}addMatchingKeys(e,t,r){return this.oi.Kr(t,r),F.resolve()}removeMatchingKeys(e,t,r){this.oi.Gr(t,r);const i=this.persistence.referenceDelegate,s=[];return i&&t.forEach((a=>{s.push(i.markPotentiallyOrphaned(e,a))})),F.waitFor(s)}removeMatchingKeysForTargetId(e,t){return this.oi.zr(t),F.resolve()}getMatchingKeysForTargetId(e,t){const r=this.oi.Jr(t);return F.resolve(r)}containsKey(e,t){return F.resolve(this.oi.containsKey(t))}}/**
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
 */class ty{constructor(e,t){this.ai={},this.overlays={},this.ui=new lu(0),this.ci=!1,this.ci=!0,this.li=new J1,this.referenceDelegate=e(this),this.hi=new tS(this),this.indexManager=new $1,this.remoteDocumentCache=(function(i){return new Z1(i)})((r=>this.referenceDelegate.Pi(r))),this.serializer=new F1(t),this.Ti=new Q1(this.serializer)}start(){return Promise.resolve()}shutdown(){return this.ci=!1,Promise.resolve()}get started(){return this.ci}setDatabaseDeletedListener(){}setNetworkEnabled(){}getIndexManager(e){return this.indexManager}getDocumentOverlayCache(e){let t=this.overlays[e.toKey()];return t||(t=new Y1,this.overlays[e.toKey()]=t),t}getMutationQueue(e,t){let r=this.ai[e.toKey()];return r||(r=new X1(t,this.referenceDelegate),this.ai[e.toKey()]=r),r}getGlobalsCache(){return this.li}getTargetCache(){return this.hi}getRemoteDocumentCache(){return this.remoteDocumentCache}getBundleCache(){return this.Ti}runTransaction(e,t,r){W("MemoryPersistence","Starting transaction:",e);const i=new nS(this.ui.next());return this.referenceDelegate.Ii(),r(i).next((s=>this.referenceDelegate.di(i).next((()=>s)))).toPromise().then((s=>(i.raiseOnCommittedEvent(),s)))}Ei(e,t){return F.or(Object.values(this.ai).map((r=>()=>r.containsKey(e,t))))}}class nS extends kb{constructor(e){super(),this.currentSequenceNumber=e}}class qd{constructor(e){this.persistence=e,this.Ai=new $d,this.Ri=null}static Vi(e){return new qd(e)}get mi(){if(this.Ri)return this.Ri;throw ie(60996)}addReference(e,t,r){return this.Ai.addReference(r,t),this.mi.delete(r.toString()),F.resolve()}removeReference(e,t,r){return this.Ai.removeReference(r,t),this.mi.add(r.toString()),F.resolve()}markPotentiallyOrphaned(e,t){return this.mi.add(t.toString()),F.resolve()}removeTarget(e,t){this.Ai.zr(t.targetId).forEach((i=>this.mi.add(i.toString())));const r=this.persistence.getTargetCache();return r.getMatchingKeysForTargetId(e,t.targetId).next((i=>{i.forEach((s=>this.mi.add(s.toString())))})).next((()=>r.removeTargetData(e,t)))}Ii(){this.Ri=new Set}di(e){const t=this.persistence.getRemoteDocumentCache().newChangeBuffer();return F.forEach(this.mi,(r=>{const i=Z.fromPath(r);return this.fi(e,i).next((s=>{s||t.removeEntry(i,ue.min())}))})).next((()=>(this.Ri=null,t.apply(e))))}updateLimboDocument(e,t){return this.fi(e,t).next((r=>{r?this.mi.delete(t.toString()):this.mi.add(t.toString())}))}Pi(e){return 0}fi(e,t){return F.or([()=>F.resolve(this.Ai.containsKey(t)),()=>this.persistence.getTargetCache().containsKey(e,t),()=>this.persistence.Ei(e,t)])}}class Fc{constructor(e,t){this.persistence=e,this.gi=new Zs((r=>Vb(r.path)),((r,i)=>r.isEqual(i))),this.garbageCollector=H1(this,t)}static Vi(e,t){return new Fc(e,t)}Ii(){}di(e){return F.resolve()}forEachTarget(e,t){return this.persistence.getTargetCache().forEachTarget(e,t)}mr(e){const t=this.yr(e);return this.persistence.getTargetCache().getTargetCount(e).next((r=>t.next((i=>r+i))))}yr(e){let t=0;return this.gr(e,(r=>{t++})).next((()=>t))}gr(e,t){return F.forEach(this.gi,((r,i)=>this.Sr(e,r,i).next((s=>s?F.resolve():t(i)))))}removeTargets(e,t,r){return this.persistence.getTargetCache().removeTargets(e,t,r)}removeOrphanedDocuments(e,t){let r=0;const i=this.persistence.getRemoteDocumentCache(),s=i.newChangeBuffer();return i.ri(e,(a=>this.Sr(e,a,t).next((l=>{l||(r++,s.removeEntry(a,ue.min()))})))).next((()=>s.apply(e))).next((()=>r))}markPotentiallyOrphaned(e,t){return this.gi.set(t,e.currentSequenceNumber),F.resolve()}removeTarget(e,t){const r=t.withSequenceNumber(e.currentSequenceNumber);return this.persistence.getTargetCache().updateTargetData(e,r)}addReference(e,t,r){return this.gi.set(r,e.currentSequenceNumber),F.resolve()}removeReference(e,t,r){return this.gi.set(r,e.currentSequenceNumber),F.resolve()}updateLimboDocument(e,t){return this.gi.set(t,e.currentSequenceNumber),F.resolve()}Pi(e){let t=e.key.toString().length;return e.isFoundDocument()&&(t+=dc(e.data.value)),t}Sr(e,t,r){return F.or([()=>this.persistence.Ei(e,t),()=>this.persistence.getTargetCache().containsKey(e,t),()=>{const i=this.gi.get(t);return F.resolve(i!==void 0&&i>r)}])}getCacheSize(e){return this.persistence.getRemoteDocumentCache().getSize(e)}}/**
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
 */class Bd{constructor(e,t,r,i){this.targetId=e,this.fromCache=t,this.Is=r,this.ds=i}static Es(e,t){let r=Be(),i=Be();for(const s of t.docChanges)switch(s.type){case 0:r=r.add(s.doc.key);break;case 1:i=i.add(s.doc.key)}return new Bd(e,t.fromCache,r,i)}}/**
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
 */class rS{constructor(){this._documentReadCount=0}get documentReadCount(){return this._documentReadCount}incrementDocumentReadCount(e){this._documentReadCount+=e}}/**
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
 */class iS{constructor(){this.As=!1,this.Rs=!1,this.Vs=100,this.fs=(function(){return VT()?8:Nb(Dn())>0?6:4})()}initialize(e,t){this.gs=e,this.indexManager=t,this.As=!0}getDocumentsMatchingQuery(e,t,r,i){const s={result:null};return this.ps(e,t).next((a=>{s.result=a})).next((()=>{if(!s.result)return this.ys(e,t,i,r).next((a=>{s.result=a}))})).next((()=>{if(s.result)return;const a=new rS;return this.ws(e,t,a).next((l=>{if(s.result=l,this.Rs)return this.Ss(e,t,a,l.size)}))})).next((()=>s.result))}Ss(e,t,r,i){return r.documentReadCount<this.Vs?(fo()<=Oe.DEBUG&&W("QueryEngine","SDK will not create cache indexes for query:",po(t),"since it only creates cache indexes for collection contains","more than or equal to",this.Vs,"documents"),F.resolve()):(fo()<=Oe.DEBUG&&W("QueryEngine","Query:",po(t),"scans",r.documentReadCount,"local documents and returns",i,"documents as results."),r.documentReadCount>this.fs*i?(fo()<=Oe.DEBUG&&W("QueryEngine","The SDK decides to create cache indexes for query:",po(t),"as using cache indexes may help improve performance."),this.indexManager.createTargetIndexes(e,ni(t))):F.resolve())}ps(e,t){if(kp(t))return F.resolve(null);let r=ni(t);return this.indexManager.getIndexType(e,r).next((i=>i===0?null:(t.limit!==null&&i===1&&(t=Vc(t,null,"F"),r=ni(t)),this.indexManager.getDocumentsMatchingTarget(e,r).next((s=>{const a=Be(...s);return this.gs.getDocuments(e,a).next((l=>this.indexManager.getMinOffset(e,r).next((c=>{const h=this.bs(t,l);return this.Ds(t,h,a,c.readTime)?this.ps(e,Vc(t,null,"F")):this.vs(e,h,t,c)}))))})))))}ys(e,t,r,i){return kp(t)||i.isEqual(ue.min())?F.resolve(null):this.gs.getDocuments(e,r).next((s=>{const a=this.bs(t,s);return this.Ds(t,a,r,i)?F.resolve(null):(fo()<=Oe.DEBUG&&W("QueryEngine","Re-using previous result from %s to execute query: %s",i.toString(),po(t)),this.vs(e,a,t,Sb(i,Qa)).next((l=>l)))}))}bs(e,t){let r=new en(Dv(e));return t.forEach(((i,s)=>{du(e,s)&&(r=r.add(s))})),r}Ds(e,t,r,i){if(e.limit===null)return!1;if(r.size!==t.size)return!0;const s=e.limitType==="F"?t.last():t.first();return!!s&&(s.hasPendingWrites||s.version.compareTo(i)>0)}ws(e,t,r){return fo()<=Oe.DEBUG&&W("QueryEngine","Using full collection scan to execute query:",po(t)),this.gs.getDocumentsMatchingQuery(e,t,cs.min(),r)}vs(e,t,r,i){return this.gs.getDocumentsMatchingQuery(e,r,i).next((s=>(t.forEach((a=>{s=s.insert(a.key,a)})),s)))}}/**
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
 */const zd="LocalStore",sS=3e8;class oS{constructor(e,t,r,i){this.persistence=e,this.Cs=t,this.serializer=i,this.Fs=new qt(Re),this.Ms=new Zs((s=>Dd(s)),Od),this.xs=new Map,this.Os=e.getRemoteDocumentCache(),this.hi=e.getTargetCache(),this.Ti=e.getBundleCache(),this.Ns(r)}Ns(e){this.documentOverlayCache=this.persistence.getDocumentOverlayCache(e),this.indexManager=this.persistence.getIndexManager(e),this.mutationQueue=this.persistence.getMutationQueue(e,this.indexManager),this.localDocuments=new K1(this.Os,this.mutationQueue,this.documentOverlayCache,this.indexManager),this.Os.setIndexManager(this.indexManager),this.Cs.initialize(this.localDocuments,this.indexManager)}collectGarbage(e){return this.persistence.runTransaction("Collect garbage","readwrite-primary",(t=>e.collect(t,this.Fs)))}}function aS(n,e,t,r){return new oS(n,e,t,r)}async function ny(n,e){const t=Ce(n);return await t.persistence.runTransaction("Handle user change","readonly",(r=>{let i;return t.mutationQueue.getAllMutationBatches(r).next((s=>(i=s,t.Ns(e),t.mutationQueue.getAllMutationBatches(r)))).next((s=>{const a=[],l=[];let c=Be();for(const h of i){a.push(h.batchId);for(const f of h.mutations)c=c.add(f.key)}for(const h of s){l.push(h.batchId);for(const f of h.mutations)c=c.add(f.key)}return t.localDocuments.getDocuments(r,c).next((h=>({Bs:h,removedBatchIds:a,addedBatchIds:l})))}))}))}function ry(n){const e=Ce(n);return e.persistence.runTransaction("Get last remote snapshot version","readonly",(t=>e.hi.getLastRemoteSnapshotVersion(t)))}function lS(n,e){const t=Ce(n),r=e.snapshotVersion;let i=t.Fs;return t.persistence.runTransaction("Apply remote event","readwrite-primary",(s=>{const a=t.Os.newChangeBuffer({trackRemovals:!0});i=t.Fs;const l=[];e.targetChanges.forEach(((f,g)=>{const _=i.get(g);if(!_)return;l.push(t.hi.removeMatchingKeys(s,f.removedDocuments,g).next((()=>t.hi.addMatchingKeys(s,f.addedDocuments,g))));let E=_.withSequenceNumber(s.currentSequenceNumber);e.targetMismatches.get(g)!==null?E=E.withResumeToken(wn.EMPTY_BYTE_STRING,ue.min()).withLastLimboFreeSnapshotVersion(ue.min()):f.resumeToken.approximateByteSize()>0&&(E=E.withResumeToken(f.resumeToken,r)),i=i.insert(g,E),(function(P,I,L){return P.resumeToken.approximateByteSize()===0||I.snapshotVersion.toMicroseconds()-P.snapshotVersion.toMicroseconds()>=sS?!0:L.addedDocuments.size+L.modifiedDocuments.size+L.removedDocuments.size>0})(_,E,f)&&l.push(t.hi.updateTargetData(s,E))}));let c=fs(),h=Be();if(e.documentUpdates.forEach((f=>{e.resolvedLimboDocuments.has(f)&&l.push(t.persistence.referenceDelegate.updateLimboDocument(s,f))})),l.push(cS(s,a,e.documentUpdates).next((f=>{c=f.Ls,h=f.ks}))),!r.isEqual(ue.min())){const f=t.hi.getLastRemoteSnapshotVersion(s).next((g=>t.hi.setTargetsMetadata(s,s.currentSequenceNumber,r)));l.push(f)}return F.waitFor(l).next((()=>a.apply(s))).next((()=>t.localDocuments.getLocalViewOfDocuments(s,c,h))).next((()=>c))})).then((s=>(t.Fs=i,s)))}function cS(n,e,t){let r=Be(),i=Be();return t.forEach((s=>r=r.add(s))),e.getEntries(n,r).next((s=>{let a=fs();return t.forEach(((l,c)=>{const h=s.get(l);c.isFoundDocument()!==h.isFoundDocument()&&(i=i.add(l)),c.isNoDocument()&&c.version.isEqual(ue.min())?(e.removeEntry(l,c.readTime),a=a.insert(l,c)):!h.isValidDocument()||c.version.compareTo(h.version)>0||c.version.compareTo(h.version)===0&&h.hasPendingWrites?(e.addEntry(c),a=a.insert(l,c)):W(zd,"Ignoring outdated watch update for ",l,". Current version:",h.version," Watch version:",c.version)})),{Ls:a,ks:i}}))}function uS(n,e){const t=Ce(n);return t.persistence.runTransaction("Allocate target","readwrite",(r=>{let i;return t.hi.getTargetData(r,e).next((s=>s?(i=s,F.resolve(i)):t.hi.allocateTargetId(r).next((a=>(i=new Yi(e,a,"TargetPurposeListen",r.currentSequenceNumber),t.hi.addTargetData(r,i).next((()=>i)))))))})).then((r=>{const i=t.Fs.get(r.targetId);return(i===null||r.snapshotVersion.compareTo(i.snapshotVersion)>0)&&(t.Fs=t.Fs.insert(r.targetId,r),t.Ms.set(e,r.targetId)),r}))}async function jh(n,e,t){const r=Ce(n),i=r.Fs.get(e),s=t?"readwrite":"readwrite-primary";try{t||await r.persistence.runTransaction("Release target",s,(a=>r.persistence.referenceDelegate.removeTarget(a,i)))}catch(a){if(!ra(a))throw a;W(zd,`Failed to update sequence numbers for target ${e}: ${a}`)}r.Fs=r.Fs.remove(e),r.Ms.delete(i.target)}function jp(n,e,t){const r=Ce(n);let i=ue.min(),s=Be();return r.persistence.runTransaction("Execute query","readwrite",(a=>(function(c,h,f){const g=Ce(c),_=g.Ms.get(f);return _!==void 0?F.resolve(g.Fs.get(_)):g.hi.getTargetData(h,f)})(r,a,ni(e)).next((l=>{if(l)return i=l.lastLimboFreeSnapshotVersion,r.hi.getMatchingKeysForTargetId(a,l.targetId).next((c=>{s=c}))})).next((()=>r.Cs.getDocumentsMatchingQuery(a,e,t?i:ue.min(),t?s:Be()))).next((l=>(hS(r,e1(e),l),{documents:l,qs:s})))))}function hS(n,e,t){let r=n.xs.get(e)||ue.min();t.forEach(((i,s)=>{s.readTime.compareTo(r)>0&&(r=s.readTime)})),n.xs.set(e,r)}class Hp{constructor(){this.activeTargetIds=o1()}Gs(e){this.activeTargetIds=this.activeTargetIds.add(e)}zs(e){this.activeTargetIds=this.activeTargetIds.delete(e)}Ws(){const e={activeTargetIds:this.activeTargetIds.toArray(),updateTimeMs:Date.now()};return JSON.stringify(e)}}class dS{constructor(){this.Fo=new Hp,this.Mo={},this.onlineStateHandler=null,this.sequenceNumberHandler=null}addPendingMutation(e){}updateMutationState(e,t,r){}addLocalQueryTarget(e,t=!0){return t&&this.Fo.Gs(e),this.Mo[e]||"not-current"}updateQueryState(e,t,r){this.Mo[e]=t}removeLocalQueryTarget(e){this.Fo.zs(e)}isLocalQueryTarget(e){return this.Fo.activeTargetIds.has(e)}clearQueryState(e){delete this.Mo[e]}getAllActiveQueryTargets(){return this.Fo.activeTargetIds}isActiveQueryTarget(e){return this.Fo.activeTargetIds.has(e)}start(){return this.Fo=new Hp,Promise.resolve()}handleUserChange(e,t,r){}setOnlineState(e){}shutdown(){}writeSequenceNumber(e){}notifyBundleLoaded(e){}}/**
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
 */class fS{xo(e){}shutdown(){}}/**
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
 */const Wp="ConnectivityMonitor";class Gp{constructor(){this.Oo=()=>this.No(),this.Bo=()=>this.Lo(),this.ko=[],this.qo()}xo(e){this.ko.push(e)}shutdown(){window.removeEventListener("online",this.Oo),window.removeEventListener("offline",this.Bo)}qo(){window.addEventListener("online",this.Oo),window.addEventListener("offline",this.Bo)}No(){W(Wp,"Network connectivity changed: AVAILABLE");for(const e of this.ko)e(0)}Lo(){W(Wp,"Network connectivity changed: UNAVAILABLE");for(const e of this.ko)e(1)}static C(){return typeof window<"u"&&window.addEventListener!==void 0&&window.removeEventListener!==void 0}}/**
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
 */let Zl=null;function Hh(){return Zl===null?Zl=(function(){return 268435456+Math.round(2147483648*Math.random())})():Zl++,"0x"+Zl.toString(16)}/**
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
 */const sh="RestConnection",pS={BatchGetDocuments:"batchGet",Commit:"commit",RunQuery:"runQuery",RunAggregationQuery:"runAggregationQuery"};class mS{get Qo(){return!1}constructor(e){this.databaseInfo=e,this.databaseId=e.databaseId;const t=e.ssl?"https":"http",r=encodeURIComponent(this.databaseId.projectId),i=encodeURIComponent(this.databaseId.database);this.$o=t+"://"+e.host,this.Uo=`projects/${r}/databases/${i}`,this.Ko=this.databaseId.database===Nc?`project_id=${r}`:`project_id=${r}&database_id=${i}`}Wo(e,t,r,i,s){const a=Hh(),l=this.Go(e,t.toUriEncodedString());W(sh,`Sending RPC '${e}' ${a}:`,l,r);const c={"google-cloud-resource-prefix":this.Uo,"x-goog-request-params":this.Ko};this.zo(c,i,s);const{host:h}=new URL(l),f=Xo(h);return this.jo(e,l,c,r,f).then((g=>(W(sh,`Received RPC '${e}' ${a}: `,g),g)),(g=>{throw Qs(sh,`RPC '${e}' ${a} failed with error: `,g,"url: ",l,"request:",r),g}))}Jo(e,t,r,i,s,a){return this.Wo(e,t,r,i,s)}zo(e,t,r){e["X-Goog-Api-Client"]=(function(){return"gl-js/ fire/"+na})(),e["Content-Type"]="text/plain",this.databaseInfo.appId&&(e["X-Firebase-GMPID"]=this.databaseInfo.appId),t&&t.headers.forEach(((i,s)=>e[s]=i)),r&&r.headers.forEach(((i,s)=>e[s]=i))}Go(e,t){const r=pS[e];return`${this.$o}/v1/${t}:${r}`}terminate(){}}/**
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
 */class gS{constructor(e){this.Ho=e.Ho,this.Yo=e.Yo}Zo(e){this.Xo=e}e_(e){this.t_=e}n_(e){this.r_=e}onMessage(e){this.i_=e}close(){this.Yo()}send(e){this.Ho(e)}s_(){this.Xo()}o_(){this.t_()}__(e){this.r_(e)}a_(e){this.i_(e)}}/**
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
 */const Sn="WebChannelConnection";class _S extends mS{constructor(e){super(e),this.u_=[],this.forceLongPolling=e.forceLongPolling,this.autoDetectLongPolling=e.autoDetectLongPolling,this.useFetchStreams=e.useFetchStreams,this.longPollingOptions=e.longPollingOptions}jo(e,t,r,i,s){const a=Hh();return new Promise(((l,c)=>{const h=new ov;h.setWithCredentials(!0),h.listenOnce(av.COMPLETE,(()=>{try{switch(h.getLastErrorCode()){case hc.NO_ERROR:const g=h.getResponseJson();W(Sn,`XHR for RPC '${e}' ${a} received:`,JSON.stringify(g)),l(g);break;case hc.TIMEOUT:W(Sn,`RPC '${e}' ${a} timed out`),c(new B(x.DEADLINE_EXCEEDED,"Request time out"));break;case hc.HTTP_ERROR:const _=h.getStatus();if(W(Sn,`RPC '${e}' ${a} failed with status:`,_,"response text:",h.getResponseText()),_>0){let E=h.getResponseJson();Array.isArray(E)&&(E=E[0]);const S=E==null?void 0:E.error;if(S&&S.status&&S.message){const P=(function(L){const U=L.toLowerCase().replace(/_/g,"-");return Object.values(x).indexOf(U)>=0?U:x.UNKNOWN})(S.status);c(new B(P,S.message))}else c(new B(x.UNKNOWN,"Server responded with status "+h.getStatus()))}else c(new B(x.UNAVAILABLE,"Connection failed."));break;default:ie(9055,{c_:e,streamId:a,l_:h.getLastErrorCode(),h_:h.getLastError()})}}finally{W(Sn,`RPC '${e}' ${a} completed.`)}}));const f=JSON.stringify(i);W(Sn,`RPC '${e}' ${a} sending request:`,i),h.send(t,"POST",f,r,15)}))}P_(e,t,r){const i=Hh(),s=[this.$o,"/","google.firestore.v1.Firestore","/",e,"/channel"],a=uv(),l=cv(),c={httpSessionIdParam:"gsessionid",initMessageHeaders:{},messageUrlParams:{database:`projects/${this.databaseId.projectId}/databases/${this.databaseId.database}`},sendRawJson:!0,supportsCrossDomainXhr:!0,internalChannelParams:{forwardChannelRequestTimeoutMs:6e5},forceLongPolling:this.forceLongPolling,detectBufferingProxy:this.autoDetectLongPolling},h=this.longPollingOptions.timeoutSeconds;h!==void 0&&(c.longPollingTimeout=Math.round(1e3*h)),this.useFetchStreams&&(c.useFetchStreams=!0),this.zo(c.initMessageHeaders,t,r),c.encodeInitMessageHeaders=!0;const f=s.join("");W(Sn,`Creating RPC '${e}' stream ${i}: ${f}`,c);const g=a.createWebChannel(f,c);this.T_(g);let _=!1,E=!1;const S=new gS({Ho:I=>{E?W(Sn,`Not sending because RPC '${e}' stream ${i} is closed:`,I):(_||(W(Sn,`Opening RPC '${e}' stream ${i} transport.`),g.open(),_=!0),W(Sn,`RPC '${e}' stream ${i} sending:`,I),g.send(I))},Yo:()=>g.close()}),P=(I,L,U)=>{I.listen(L,(q=>{try{U(q)}catch(Y){setTimeout((()=>{throw Y}),0)}}))};return P(g,Ca.EventType.OPEN,(()=>{E||(W(Sn,`RPC '${e}' stream ${i} transport opened.`),S.s_())})),P(g,Ca.EventType.CLOSE,(()=>{E||(E=!0,W(Sn,`RPC '${e}' stream ${i} transport closed`),S.__(),this.I_(g))})),P(g,Ca.EventType.ERROR,(I=>{E||(E=!0,Qs(Sn,`RPC '${e}' stream ${i} transport errored. Name:`,I.name,"Message:",I.message),S.__(new B(x.UNAVAILABLE,"The operation could not be completed")))})),P(g,Ca.EventType.MESSAGE,(I=>{var L;if(!E){const U=I.data[0];it(!!U,16349);const q=U,Y=(q==null?void 0:q.error)||((L=q[0])===null||L===void 0?void 0:L.error);if(Y){W(Sn,`RPC '${e}' stream ${i} received error:`,Y);const Me=Y.status;let Q=(function(w){const b=Bt[w];if(b!==void 0)return Bv(b)})(Me),A=Y.message;Q===void 0&&(Q=x.INTERNAL,A="Unknown error status: "+Me+" with message "+Y.message),E=!0,S.__(new B(Q,A)),g.close()}else W(Sn,`RPC '${e}' stream ${i} received:`,U),S.a_(U)}})),P(l,lv.STAT_EVENT,(I=>{I.stat===Mh.PROXY?W(Sn,`RPC '${e}' stream ${i} detected buffering proxy`):I.stat===Mh.NOPROXY&&W(Sn,`RPC '${e}' stream ${i} detected no buffering proxy`)})),setTimeout((()=>{S.o_()}),0),S}terminate(){this.u_.forEach((e=>e.close())),this.u_=[]}T_(e){this.u_.push(e)}I_(e){this.u_=this.u_.filter((t=>t===e))}}function oh(){return typeof document<"u"?document:null}/**
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
 */function gu(n){return new A1(n,!0)}/**
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
 */class jd{constructor(e,t,r=1e3,i=1.5,s=6e4){this.Fi=e,this.timerId=t,this.d_=r,this.E_=i,this.A_=s,this.R_=0,this.V_=null,this.m_=Date.now(),this.reset()}reset(){this.R_=0}f_(){this.R_=this.A_}g_(e){this.cancel();const t=Math.floor(this.R_+this.p_()),r=Math.max(0,Date.now()-this.m_),i=Math.max(0,t-r);i>0&&W("ExponentialBackoff",`Backing off for ${i} ms (base delay: ${this.R_} ms, delay with jitter: ${t} ms, last attempt: ${r} ms ago)`),this.V_=this.Fi.enqueueAfterDelay(this.timerId,i,(()=>(this.m_=Date.now(),e()))),this.R_*=this.E_,this.R_<this.d_&&(this.R_=this.d_),this.R_>this.A_&&(this.R_=this.A_)}y_(){this.V_!==null&&(this.V_.skipDelay(),this.V_=null)}cancel(){this.V_!==null&&(this.V_.cancel(),this.V_=null)}p_(){return(Math.random()-.5)*this.R_}}/**
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
 */const Kp="PersistentStream";class vS{constructor(e,t,r,i,s,a,l,c){this.Fi=e,this.w_=r,this.S_=i,this.connection=s,this.authCredentialsProvider=a,this.appCheckCredentialsProvider=l,this.listener=c,this.state=0,this.b_=0,this.D_=null,this.v_=null,this.stream=null,this.C_=0,this.F_=new jd(e,t)}M_(){return this.state===1||this.state===5||this.x_()}x_(){return this.state===2||this.state===3}start(){this.C_=0,this.state!==4?this.auth():this.O_()}async stop(){this.M_()&&await this.close(0)}N_(){this.state=0,this.F_.reset()}B_(){this.x_()&&this.D_===null&&(this.D_=this.Fi.enqueueAfterDelay(this.w_,6e4,(()=>this.L_())))}k_(e){this.q_(),this.stream.send(e)}async L_(){if(this.x_())return this.close(0)}q_(){this.D_&&(this.D_.cancel(),this.D_=null)}Q_(){this.v_&&(this.v_.cancel(),this.v_=null)}async close(e,t){this.q_(),this.Q_(),this.F_.cancel(),this.b_++,e!==4?this.F_.reset():t&&t.code===x.RESOURCE_EXHAUSTED?(Pi(t.toString()),Pi("Using maximum backoff delay to prevent overloading the backend."),this.F_.f_()):t&&t.code===x.UNAUTHENTICATED&&this.state!==3&&(this.authCredentialsProvider.invalidateToken(),this.appCheckCredentialsProvider.invalidateToken()),this.stream!==null&&(this.U_(),this.stream.close(),this.stream=null),this.state=e,await this.listener.n_(t)}U_(){}auth(){this.state=1;const e=this.K_(this.b_),t=this.b_;Promise.all([this.authCredentialsProvider.getToken(),this.appCheckCredentialsProvider.getToken()]).then((([r,i])=>{this.b_===t&&this.W_(r,i)}),(r=>{e((()=>{const i=new B(x.UNKNOWN,"Fetching auth token failed: "+r.message);return this.G_(i)}))}))}W_(e,t){const r=this.K_(this.b_);this.stream=this.z_(e,t),this.stream.Zo((()=>{r((()=>this.listener.Zo()))})),this.stream.e_((()=>{r((()=>(this.state=2,this.v_=this.Fi.enqueueAfterDelay(this.S_,1e4,(()=>(this.x_()&&(this.state=3),Promise.resolve()))),this.listener.e_())))})),this.stream.n_((i=>{r((()=>this.G_(i)))})),this.stream.onMessage((i=>{r((()=>++this.C_==1?this.j_(i):this.onNext(i)))}))}O_(){this.state=5,this.F_.g_((async()=>{this.state=0,this.start()}))}G_(e){return W(Kp,`close with error: ${e}`),this.stream=null,this.close(4,e)}K_(e){return t=>{this.Fi.enqueueAndForget((()=>this.b_===e?t():(W(Kp,"stream callback skipped by getCloseGuardedDispatcher."),Promise.resolve())))}}}class yS extends vS{constructor(e,t,r,i,s,a){super(e,"listen_stream_connection_backoff","listen_stream_idle","health_check_timeout",t,r,i,a),this.serializer=s}z_(e,t){return this.connection.P_("Listen",e,t)}j_(e){return this.onNext(e)}onNext(e){this.F_.reset();const t=C1(this.serializer,e),r=(function(s){if(!("targetChange"in s))return ue.min();const a=s.targetChange;return a.targetIds&&a.targetIds.length?ue.min():a.readTime?Ai(a.readTime):ue.min()})(e);return this.listener.J_(t,r)}H_(e){const t={};t.database=Up(this.serializer),t.addTarget=(function(s,a){let l;const c=a.target;if(l=$h(c)?{documents:k1(s,c)}:{query:Qv(s,c).Vt},l.targetId=a.targetId,a.resumeToken.approximateByteSize()>0){l.resumeToken=Hv(s,a.resumeToken);const h=Bh(s,a.expectedCount);h!==null&&(l.expectedCount=h)}else if(a.snapshotVersion.compareTo(ue.min())>0){l.readTime=xc(s,a.snapshotVersion.toTimestamp());const h=Bh(s,a.expectedCount);h!==null&&(l.expectedCount=h)}return l})(this.serializer,e);const r=O1(this.serializer,e);r&&(t.labels=r),this.k_(t)}Y_(e){const t={};t.database=Up(this.serializer),t.removeTarget=e,this.k_(t)}}/**
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
 */class ES{}class wS extends ES{constructor(e,t,r,i){super(),this.authCredentials=e,this.appCheckCredentials=t,this.connection=r,this.serializer=i,this.ra=!1}ia(){if(this.ra)throw new B(x.FAILED_PRECONDITION,"The client has already been terminated.")}Wo(e,t,r,i){return this.ia(),Promise.all([this.authCredentials.getToken(),this.appCheckCredentials.getToken()]).then((([s,a])=>this.connection.Wo(e,zh(t,r),i,s,a))).catch((s=>{throw s.name==="FirebaseError"?(s.code===x.UNAUTHENTICATED&&(this.authCredentials.invalidateToken(),this.appCheckCredentials.invalidateToken()),s):new B(x.UNKNOWN,s.toString())}))}Jo(e,t,r,i,s){return this.ia(),Promise.all([this.authCredentials.getToken(),this.appCheckCredentials.getToken()]).then((([a,l])=>this.connection.Jo(e,zh(t,r),i,a,l,s))).catch((a=>{throw a.name==="FirebaseError"?(a.code===x.UNAUTHENTICATED&&(this.authCredentials.invalidateToken(),this.appCheckCredentials.invalidateToken()),a):new B(x.UNKNOWN,a.toString())}))}terminate(){this.ra=!0,this.connection.terminate()}}class TS{constructor(e,t){this.asyncQueue=e,this.onlineStateHandler=t,this.state="Unknown",this.sa=0,this.oa=null,this._a=!0}aa(){this.sa===0&&(this.ua("Unknown"),this.oa=this.asyncQueue.enqueueAfterDelay("online_state_timeout",1e4,(()=>(this.oa=null,this.ca("Backend didn't respond within 10 seconds."),this.ua("Offline"),Promise.resolve()))))}la(e){this.state==="Online"?this.ua("Unknown"):(this.sa++,this.sa>=1&&(this.ha(),this.ca(`Connection failed 1 times. Most recent error: ${e.toString()}`),this.ua("Offline")))}set(e){this.ha(),this.sa=0,e==="Online"&&(this._a=!1),this.ua(e)}ua(e){e!==this.state&&(this.state=e,this.onlineStateHandler(e))}ca(e){const t=`Could not reach Cloud Firestore backend. ${e}
This typically indicates that your device does not have a healthy Internet connection at the moment. The client will operate in offline mode until it is able to successfully connect to the backend.`;this._a?(Pi(t),this._a=!1):W("OnlineStateTracker",t)}ha(){this.oa!==null&&(this.oa.cancel(),this.oa=null)}}/**
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
 */const jo="RemoteStore";class IS{constructor(e,t,r,i,s){this.localStore=e,this.datastore=t,this.asyncQueue=r,this.remoteSyncer={},this.Pa=[],this.Ta=new Map,this.Ia=new Set,this.da=[],this.Ea=s,this.Ea.xo((a=>{r.enqueueAndForget((async()=>{Il(this)&&(W(jo,"Restarting streams for network reachability change."),await(async function(c){const h=Ce(c);h.Ia.add(4),await Tl(h),h.Aa.set("Unknown"),h.Ia.delete(4),await _u(h)})(this))}))})),this.Aa=new TS(r,i)}}async function _u(n){if(Il(n))for(const e of n.da)await e(!0)}async function Tl(n){for(const e of n.da)await e(!1)}function iy(n,e){const t=Ce(n);t.Ta.has(e.targetId)||(t.Ta.set(e.targetId,e),Kd(t)?Gd(t):ia(t).x_()&&Wd(t,e))}function Hd(n,e){const t=Ce(n),r=ia(t);t.Ta.delete(e),r.x_()&&sy(t,e),t.Ta.size===0&&(r.x_()?r.B_():Il(t)&&t.Aa.set("Unknown"))}function Wd(n,e){if(n.Ra.$e(e.targetId),e.resumeToken.approximateByteSize()>0||e.snapshotVersion.compareTo(ue.min())>0){const t=n.remoteSyncer.getRemoteKeysForTarget(e.targetId).size;e=e.withExpectedCount(t)}ia(n).H_(e)}function sy(n,e){n.Ra.$e(e),ia(n).Y_(e)}function Gd(n){n.Ra=new E1({getRemoteKeysForTarget:e=>n.remoteSyncer.getRemoteKeysForTarget(e),Et:e=>n.Ta.get(e)||null,lt:()=>n.datastore.serializer.databaseId}),ia(n).start(),n.Aa.aa()}function Kd(n){return Il(n)&&!ia(n).M_()&&n.Ta.size>0}function Il(n){return Ce(n).Ia.size===0}function oy(n){n.Ra=void 0}async function AS(n){n.Aa.set("Online")}async function bS(n){n.Ta.forEach(((e,t)=>{Wd(n,e)}))}async function SS(n,e){oy(n),Kd(n)?(n.Aa.la(e),Gd(n)):n.Aa.set("Unknown")}async function RS(n,e,t){if(n.Aa.set("Online"),e instanceof jv&&e.state===2&&e.cause)try{await(async function(i,s){const a=s.cause;for(const l of s.targetIds)i.Ta.has(l)&&(await i.remoteSyncer.rejectListen(l,a),i.Ta.delete(l),i.Ra.removeTarget(l))})(n,e)}catch(r){W(jo,"Failed to remove targets %s: %s ",e.targetIds.join(","),r),await Qp(n,r)}else if(e instanceof pc?n.Ra.Ye(e):e instanceof zv?n.Ra.it(e):n.Ra.et(e),!t.isEqual(ue.min()))try{const r=await ry(n.localStore);t.compareTo(r)>=0&&await(function(s,a){const l=s.Ra.Pt(a);return l.targetChanges.forEach(((c,h)=>{if(c.resumeToken.approximateByteSize()>0){const f=s.Ta.get(h);f&&s.Ta.set(h,f.withResumeToken(c.resumeToken,a))}})),l.targetMismatches.forEach(((c,h)=>{const f=s.Ta.get(c);if(!f)return;s.Ta.set(c,f.withResumeToken(wn.EMPTY_BYTE_STRING,f.snapshotVersion)),sy(s,c);const g=new Yi(f.target,c,h,f.sequenceNumber);Wd(s,g)})),s.remoteSyncer.applyRemoteEvent(l)})(n,t)}catch(r){W(jo,"Failed to raise snapshot:",r),await Qp(n,r)}}async function Qp(n,e,t){if(!ra(e))throw e;n.Ia.add(1),await Tl(n),n.Aa.set("Offline"),t||(t=()=>ry(n.localStore)),n.asyncQueue.enqueueRetryable((async()=>{W(jo,"Retrying IndexedDB access"),await t(),n.Ia.delete(1),await _u(n)}))}async function Yp(n,e){const t=Ce(n);t.asyncQueue.verifyOperationInProgress(),W(jo,"RemoteStore received new credentials");const r=Il(t);t.Ia.add(3),await Tl(t),r&&t.Aa.set("Unknown"),await t.remoteSyncer.handleCredentialChange(e),t.Ia.delete(3),await _u(t)}async function CS(n,e){const t=Ce(n);e?(t.Ia.delete(2),await _u(t)):e||(t.Ia.add(2),await Tl(t),t.Aa.set("Unknown"))}function ia(n){return n.Va||(n.Va=(function(t,r,i){const s=Ce(t);return s.ia(),new yS(r,s.connection,s.authCredentials,s.appCheckCredentials,s.serializer,i)})(n.datastore,n.asyncQueue,{Zo:AS.bind(null,n),e_:bS.bind(null,n),n_:SS.bind(null,n),J_:RS.bind(null,n)}),n.da.push((async e=>{e?(n.Va.N_(),Kd(n)?Gd(n):n.Aa.set("Unknown")):(await n.Va.stop(),oy(n))}))),n.Va}/**
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
 */class Qd{constructor(e,t,r,i,s){this.asyncQueue=e,this.timerId=t,this.targetTimeMs=r,this.op=i,this.removalCallback=s,this.deferred=new ti,this.then=this.deferred.promise.then.bind(this.deferred.promise),this.deferred.promise.catch((a=>{}))}get promise(){return this.deferred.promise}static createAndSchedule(e,t,r,i,s){const a=Date.now()+r,l=new Qd(e,t,a,i,s);return l.start(r),l}start(e){this.timerHandle=setTimeout((()=>this.handleDelayElapsed()),e)}skipDelay(){return this.handleDelayElapsed()}cancel(e){this.timerHandle!==null&&(this.clearTimeout(),this.deferred.reject(new B(x.CANCELLED,"Operation cancelled"+(e?": "+e:""))))}handleDelayElapsed(){this.asyncQueue.enqueueAndForget((()=>this.timerHandle!==null?(this.clearTimeout(),this.op().then((e=>this.deferred.resolve(e)))):Promise.resolve()))}clearTimeout(){this.timerHandle!==null&&(this.removalCallback(this),clearTimeout(this.timerHandle),this.timerHandle=null)}}function ay(n,e){if(Pi("AsyncQueue",`${e}: ${n}`),ra(n))return new B(x.UNAVAILABLE,`${e}: ${n}`);throw n}/**
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
 */class bo{static emptySet(e){return new bo(e.comparator)}constructor(e){this.comparator=e?(t,r)=>e(t,r)||Z.comparator(t.key,r.key):(t,r)=>Z.comparator(t.key,r.key),this.keyedMap=Pa(),this.sortedSet=new qt(this.comparator)}has(e){return this.keyedMap.get(e)!=null}get(e){return this.keyedMap.get(e)}first(){return this.sortedSet.minKey()}last(){return this.sortedSet.maxKey()}isEmpty(){return this.sortedSet.isEmpty()}indexOf(e){const t=this.keyedMap.get(e);return t?this.sortedSet.indexOf(t):-1}get size(){return this.sortedSet.size}forEach(e){this.sortedSet.inorderTraversal(((t,r)=>(e(t),!1)))}add(e){const t=this.delete(e.key);return t.copy(t.keyedMap.insert(e.key,e),t.sortedSet.insert(e,null))}delete(e){const t=this.get(e);return t?this.copy(this.keyedMap.remove(e),this.sortedSet.remove(t)):this}isEqual(e){if(!(e instanceof bo)||this.size!==e.size)return!1;const t=this.sortedSet.getIterator(),r=e.sortedSet.getIterator();for(;t.hasNext();){const i=t.getNext().key,s=r.getNext().key;if(!i.isEqual(s))return!1}return!0}toString(){const e=[];return this.forEach((t=>{e.push(t.toString())})),e.length===0?"DocumentSet ()":`DocumentSet (
  `+e.join(`  
`)+`
)`}copy(e,t){const r=new bo;return r.comparator=this.comparator,r.keyedMap=e,r.sortedSet=t,r}}/**
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
 */class Jp{constructor(){this.fa=new qt(Z.comparator)}track(e){const t=e.doc.key,r=this.fa.get(t);r?e.type!==0&&r.type===3?this.fa=this.fa.insert(t,e):e.type===3&&r.type!==1?this.fa=this.fa.insert(t,{type:r.type,doc:e.doc}):e.type===2&&r.type===2?this.fa=this.fa.insert(t,{type:2,doc:e.doc}):e.type===2&&r.type===0?this.fa=this.fa.insert(t,{type:0,doc:e.doc}):e.type===1&&r.type===0?this.fa=this.fa.remove(t):e.type===1&&r.type===2?this.fa=this.fa.insert(t,{type:1,doc:r.doc}):e.type===0&&r.type===1?this.fa=this.fa.insert(t,{type:2,doc:e.doc}):ie(63341,{At:e,ga:r}):this.fa=this.fa.insert(t,e)}pa(){const e=[];return this.fa.inorderTraversal(((t,r)=>{e.push(r)})),e}}class Ho{constructor(e,t,r,i,s,a,l,c,h){this.query=e,this.docs=t,this.oldDocs=r,this.docChanges=i,this.mutatedKeys=s,this.fromCache=a,this.syncStateChanged=l,this.excludesMetadataChanges=c,this.hasCachedResults=h}static fromInitialDocuments(e,t,r,i,s){const a=[];return t.forEach((l=>{a.push({type:0,doc:l})})),new Ho(e,t,bo.emptySet(t),a,r,i,!0,!1,s)}get hasPendingWrites(){return!this.mutatedKeys.isEmpty()}isEqual(e){if(!(this.fromCache===e.fromCache&&this.hasCachedResults===e.hasCachedResults&&this.syncStateChanged===e.syncStateChanged&&this.mutatedKeys.isEqual(e.mutatedKeys)&&hu(this.query,e.query)&&this.docs.isEqual(e.docs)&&this.oldDocs.isEqual(e.oldDocs)))return!1;const t=this.docChanges,r=e.docChanges;if(t.length!==r.length)return!1;for(let i=0;i<t.length;i++)if(t[i].type!==r[i].type||!t[i].doc.isEqual(r[i].doc))return!1;return!0}}/**
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
 */class PS{constructor(){this.ya=void 0,this.wa=[]}Sa(){return this.wa.some((e=>e.ba()))}}class kS{constructor(){this.queries=Xp(),this.onlineState="Unknown",this.Da=new Set}terminate(){(function(t,r){const i=Ce(t),s=i.queries;i.queries=Xp(),s.forEach(((a,l)=>{for(const c of l.wa)c.onError(r)}))})(this,new B(x.ABORTED,"Firestore shutting down"))}}function Xp(){return new Zs((n=>Nv(n)),hu)}async function ly(n,e){const t=Ce(n);let r=3;const i=e.query;let s=t.queries.get(i);s?!s.Sa()&&e.ba()&&(r=2):(s=new PS,r=e.ba()?0:1);try{switch(r){case 0:s.ya=await t.onListen(i,!0);break;case 1:s.ya=await t.onListen(i,!1);break;case 2:await t.onFirstRemoteStoreListen(i)}}catch(a){const l=ay(a,`Initialization of query '${po(e.query)}' failed`);return void e.onError(l)}t.queries.set(i,s),s.wa.push(e),e.va(t.onlineState),s.ya&&e.Ca(s.ya)&&Yd(t)}async function cy(n,e){const t=Ce(n),r=e.query;let i=3;const s=t.queries.get(r);if(s){const a=s.wa.indexOf(e);a>=0&&(s.wa.splice(a,1),s.wa.length===0?i=e.ba()?0:1:!s.Sa()&&e.ba()&&(i=2))}switch(i){case 0:return t.queries.delete(r),t.onUnlisten(r,!0);case 1:return t.queries.delete(r),t.onUnlisten(r,!1);case 2:return t.onLastRemoteStoreUnlisten(r);default:return}}function NS(n,e){const t=Ce(n);let r=!1;for(const i of e){const s=i.query,a=t.queries.get(s);if(a){for(const l of a.wa)l.Ca(i)&&(r=!0);a.ya=i}}r&&Yd(t)}function DS(n,e,t){const r=Ce(n),i=r.queries.get(e);if(i)for(const s of i.wa)s.onError(t);r.queries.delete(e)}function Yd(n){n.Da.forEach((e=>{e.next()}))}var Wh,Zp;(Zp=Wh||(Wh={})).Fa="default",Zp.Cache="cache";class uy{constructor(e,t,r){this.query=e,this.Ma=t,this.xa=!1,this.Oa=null,this.onlineState="Unknown",this.options=r||{}}Ca(e){if(!this.options.includeMetadataChanges){const r=[];for(const i of e.docChanges)i.type!==3&&r.push(i);e=new Ho(e.query,e.docs,e.oldDocs,r,e.mutatedKeys,e.fromCache,e.syncStateChanged,!0,e.hasCachedResults)}let t=!1;return this.xa?this.Na(e)&&(this.Ma.next(e),t=!0):this.Ba(e,this.onlineState)&&(this.La(e),t=!0),this.Oa=e,t}onError(e){this.Ma.error(e)}va(e){this.onlineState=e;let t=!1;return this.Oa&&!this.xa&&this.Ba(this.Oa,e)&&(this.La(this.Oa),t=!0),t}Ba(e,t){if(!e.fromCache||!this.ba())return!0;const r=t!=="Offline";return(!this.options.ka||!r)&&(!e.docs.isEmpty()||e.hasCachedResults||t==="Offline")}Na(e){if(e.docChanges.length>0)return!0;const t=this.Oa&&this.Oa.hasPendingWrites!==e.hasPendingWrites;return!(!e.syncStateChanged&&!t)&&this.options.includeMetadataChanges===!0}La(e){e=Ho.fromInitialDocuments(e.query,e.docs,e.mutatedKeys,e.fromCache,e.hasCachedResults),this.xa=!0,this.Ma.next(e)}ba(){return this.options.source!==Wh.Cache}}/**
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
 */class hy{constructor(e){this.key=e}}class dy{constructor(e){this.key=e}}class OS{constructor(e,t){this.query=e,this.Ha=t,this.Ya=null,this.hasCachedResults=!1,this.current=!1,this.Za=Be(),this.mutatedKeys=Be(),this.Xa=Dv(e),this.eu=new bo(this.Xa)}get tu(){return this.Ha}nu(e,t){const r=t?t.ru:new Jp,i=t?t.eu:this.eu;let s=t?t.mutatedKeys:this.mutatedKeys,a=i,l=!1;const c=this.query.limitType==="F"&&i.size===this.query.limit?i.last():null,h=this.query.limitType==="L"&&i.size===this.query.limit?i.first():null;if(e.inorderTraversal(((f,g)=>{const _=i.get(f),E=du(this.query,g)?g:null,S=!!_&&this.mutatedKeys.has(_.key),P=!!E&&(E.hasLocalMutations||this.mutatedKeys.has(E.key)&&E.hasCommittedMutations);let I=!1;_&&E?_.data.isEqual(E.data)?S!==P&&(r.track({type:3,doc:E}),I=!0):this.iu(_,E)||(r.track({type:2,doc:E}),I=!0,(c&&this.Xa(E,c)>0||h&&this.Xa(E,h)<0)&&(l=!0)):!_&&E?(r.track({type:0,doc:E}),I=!0):_&&!E&&(r.track({type:1,doc:_}),I=!0,(c||h)&&(l=!0)),I&&(E?(a=a.add(E),s=P?s.add(f):s.delete(f)):(a=a.delete(f),s=s.delete(f)))})),this.query.limit!==null)for(;a.size>this.query.limit;){const f=this.query.limitType==="F"?a.last():a.first();a=a.delete(f.key),s=s.delete(f.key),r.track({type:1,doc:f})}return{eu:a,ru:r,Ds:l,mutatedKeys:s}}iu(e,t){return e.hasLocalMutations&&t.hasCommittedMutations&&!t.hasLocalMutations}applyChanges(e,t,r,i){const s=this.eu;this.eu=e.eu,this.mutatedKeys=e.mutatedKeys;const a=e.ru.pa();a.sort(((f,g)=>(function(E,S){const P=I=>{switch(I){case 0:return 1;case 2:case 3:return 2;case 1:return 0;default:return ie(20277,{At:I})}};return P(E)-P(S)})(f.type,g.type)||this.Xa(f.doc,g.doc))),this.su(r),i=i!=null&&i;const l=t&&!i?this.ou():[],c=this.Za.size===0&&this.current&&!i?1:0,h=c!==this.Ya;return this.Ya=c,a.length!==0||h?{snapshot:new Ho(this.query,e.eu,s,a,e.mutatedKeys,c===0,h,!1,!!r&&r.resumeToken.approximateByteSize()>0),_u:l}:{_u:l}}va(e){return this.current&&e==="Offline"?(this.current=!1,this.applyChanges({eu:this.eu,ru:new Jp,mutatedKeys:this.mutatedKeys,Ds:!1},!1)):{_u:[]}}au(e){return!this.Ha.has(e)&&!!this.eu.has(e)&&!this.eu.get(e).hasLocalMutations}su(e){e&&(e.addedDocuments.forEach((t=>this.Ha=this.Ha.add(t))),e.modifiedDocuments.forEach((t=>{})),e.removedDocuments.forEach((t=>this.Ha=this.Ha.delete(t))),this.current=e.current)}ou(){if(!this.current)return[];const e=this.Za;this.Za=Be(),this.eu.forEach((r=>{this.au(r.key)&&(this.Za=this.Za.add(r.key))}));const t=[];return e.forEach((r=>{this.Za.has(r)||t.push(new dy(r))})),this.Za.forEach((r=>{e.has(r)||t.push(new hy(r))})),t}uu(e){this.Ha=e.qs,this.Za=Be();const t=this.nu(e.documents);return this.applyChanges(t,!0)}cu(){return Ho.fromInitialDocuments(this.query,this.eu,this.mutatedKeys,this.Ya===0,this.hasCachedResults)}}const Jd="SyncEngine";class VS{constructor(e,t,r){this.query=e,this.targetId=t,this.view=r}}class MS{constructor(e){this.key=e,this.lu=!1}}class xS{constructor(e,t,r,i,s,a){this.localStore=e,this.remoteStore=t,this.eventManager=r,this.sharedClientState=i,this.currentUser=s,this.maxConcurrentLimboResolutions=a,this.hu={},this.Pu=new Zs((l=>Nv(l)),hu),this.Tu=new Map,this.Iu=new Set,this.du=new qt(Z.comparator),this.Eu=new Map,this.Au=new $d,this.Ru={},this.Vu=new Map,this.mu=zo.ur(),this.onlineState="Unknown",this.fu=void 0}get isPrimaryClient(){return this.fu===!0}}async function LS(n,e,t=!0){const r=_y(n);let i;const s=r.Pu.get(e);return s?(r.sharedClientState.addLocalQueryTarget(s.targetId),i=s.view.cu()):i=await fy(r,e,t,!0),i}async function FS(n,e){const t=_y(n);await fy(t,e,!0,!1)}async function fy(n,e,t,r){const i=await uS(n.localStore,ni(e)),s=i.targetId,a=n.sharedClientState.addLocalQueryTarget(s,t);let l;return r&&(l=await US(n,e,s,a==="current",i.resumeToken)),n.isPrimaryClient&&t&&iy(n.remoteStore,i),l}async function US(n,e,t,r,i){n.gu=(g,_,E)=>(async function(P,I,L,U){let q=I.view.nu(L);q.Ds&&(q=await jp(P.localStore,I.query,!1).then((({documents:A})=>I.view.nu(A,q))));const Y=U&&U.targetChanges.get(I.targetId),Me=U&&U.targetMismatches.get(I.targetId)!=null,Q=I.view.applyChanges(q,P.isPrimaryClient,Y,Me);return tm(P,I.targetId,Q._u),Q.snapshot})(n,g,_,E);const s=await jp(n.localStore,e,!0),a=new OS(e,s.qs),l=a.nu(s.documents),c=wl.createSynthesizedTargetChangeForCurrentChange(t,r&&n.onlineState!=="Offline",i),h=a.applyChanges(l,n.isPrimaryClient,c);tm(n,t,h._u);const f=new VS(e,t,a);return n.Pu.set(e,f),n.Tu.has(t)?n.Tu.get(t).push(e):n.Tu.set(t,[e]),h.snapshot}async function $S(n,e,t){const r=Ce(n),i=r.Pu.get(e),s=r.Tu.get(i.targetId);if(s.length>1)return r.Tu.set(i.targetId,s.filter((a=>!hu(a,e)))),void r.Pu.delete(e);r.isPrimaryClient?(r.sharedClientState.removeLocalQueryTarget(i.targetId),r.sharedClientState.isActiveQueryTarget(i.targetId)||await jh(r.localStore,i.targetId,!1).then((()=>{r.sharedClientState.clearQueryState(i.targetId),t&&Hd(r.remoteStore,i.targetId),Gh(r,i.targetId)})).catch(au)):(Gh(r,i.targetId),await jh(r.localStore,i.targetId,!0))}async function qS(n,e){const t=Ce(n),r=t.Pu.get(e),i=t.Tu.get(r.targetId);t.isPrimaryClient&&i.length===1&&(t.sharedClientState.removeLocalQueryTarget(r.targetId),Hd(t.remoteStore,r.targetId))}async function py(n,e){const t=Ce(n);try{const r=await lS(t.localStore,e);e.targetChanges.forEach(((i,s)=>{const a=t.Eu.get(s);a&&(it(i.addedDocuments.size+i.modifiedDocuments.size+i.removedDocuments.size<=1,22616),i.addedDocuments.size>0?a.lu=!0:i.modifiedDocuments.size>0?it(a.lu,14607):i.removedDocuments.size>0&&(it(a.lu,42227),a.lu=!1))})),await gy(t,r,e)}catch(r){await au(r)}}function em(n,e,t){const r=Ce(n);if(r.isPrimaryClient&&t===0||!r.isPrimaryClient&&t===1){const i=[];r.Pu.forEach(((s,a)=>{const l=a.view.va(e);l.snapshot&&i.push(l.snapshot)})),(function(a,l){const c=Ce(a);c.onlineState=l;let h=!1;c.queries.forEach(((f,g)=>{for(const _ of g.wa)_.va(l)&&(h=!0)})),h&&Yd(c)})(r.eventManager,e),i.length&&r.hu.J_(i),r.onlineState=e,r.isPrimaryClient&&r.sharedClientState.setOnlineState(e)}}async function BS(n,e,t){const r=Ce(n);r.sharedClientState.updateQueryState(e,"rejected",t);const i=r.Eu.get(e),s=i&&i.key;if(s){let a=new qt(Z.comparator);a=a.insert(s,cn.newNoDocument(s,ue.min()));const l=Be().add(s),c=new mu(ue.min(),new Map,new qt(Re),a,l);await py(r,c),r.du=r.du.remove(s),r.Eu.delete(e),Xd(r)}else await jh(r.localStore,e,!1).then((()=>Gh(r,e,t))).catch(au)}function Gh(n,e,t=null){n.sharedClientState.removeLocalQueryTarget(e);for(const r of n.Tu.get(e))n.Pu.delete(r),t&&n.hu.pu(r,t);n.Tu.delete(e),n.isPrimaryClient&&n.Au.zr(e).forEach((r=>{n.Au.containsKey(r)||my(n,r)}))}function my(n,e){n.Iu.delete(e.path.canonicalString());const t=n.du.get(e);t!==null&&(Hd(n.remoteStore,t),n.du=n.du.remove(e),n.Eu.delete(t),Xd(n))}function tm(n,e,t){for(const r of t)r instanceof hy?(n.Au.addReference(r.key,e),zS(n,r)):r instanceof dy?(W(Jd,"Document no longer in limbo: "+r.key),n.Au.removeReference(r.key,e),n.Au.containsKey(r.key)||my(n,r.key)):ie(19791,{yu:r})}function zS(n,e){const t=e.key,r=t.path.canonicalString();n.du.get(t)||n.Iu.has(r)||(W(Jd,"New document in limbo: "+t),n.Iu.add(r),Xd(n))}function Xd(n){for(;n.Iu.size>0&&n.du.size<n.maxConcurrentLimboResolutions;){const e=n.Iu.values().next().value;n.Iu.delete(e);const t=new Z(tt.fromString(e)),r=n.mu.next();n.Eu.set(r,new MS(t)),n.du=n.du.insert(t,r),iy(n.remoteStore,new Yi(ni(Vd(t.path)),r,"TargetPurposeLimboResolution",lu.ue))}}async function gy(n,e,t){const r=Ce(n),i=[],s=[],a=[];r.Pu.isEmpty()||(r.Pu.forEach(((l,c)=>{a.push(r.gu(c,e,t).then((h=>{var f;if((h||t)&&r.isPrimaryClient){const g=h?!h.fromCache:(f=t==null?void 0:t.targetChanges.get(c.targetId))===null||f===void 0?void 0:f.current;r.sharedClientState.updateQueryState(c.targetId,g?"current":"not-current")}if(h){i.push(h);const g=Bd.Es(c.targetId,h);s.push(g)}})))})),await Promise.all(a),r.hu.J_(i),await(async function(c,h){const f=Ce(c);try{await f.persistence.runTransaction("notifyLocalViewChanges","readwrite",(g=>F.forEach(h,(_=>F.forEach(_.Is,(E=>f.persistence.referenceDelegate.addReference(g,_.targetId,E))).next((()=>F.forEach(_.ds,(E=>f.persistence.referenceDelegate.removeReference(g,_.targetId,E)))))))))}catch(g){if(!ra(g))throw g;W(zd,"Failed to update sequence numbers: "+g)}for(const g of h){const _=g.targetId;if(!g.fromCache){const E=f.Fs.get(_),S=E.snapshotVersion,P=E.withLastLimboFreeSnapshotVersion(S);f.Fs=f.Fs.insert(_,P)}}})(r.localStore,s))}async function jS(n,e){const t=Ce(n);if(!t.currentUser.isEqual(e)){W(Jd,"User change. New user:",e.toKey());const r=await ny(t.localStore,e);t.currentUser=e,(function(s,a){s.Vu.forEach((l=>{l.forEach((c=>{c.reject(new B(x.CANCELLED,a))}))})),s.Vu.clear()})(t,"'waitForPendingWrites' promise is rejected due to a user change."),t.sharedClientState.handleUserChange(e,r.removedBatchIds,r.addedBatchIds),await gy(t,r.Bs)}}function HS(n,e){const t=Ce(n),r=t.Eu.get(e);if(r&&r.lu)return Be().add(r.key);{let i=Be();const s=t.Tu.get(e);if(!s)return i;for(const a of s){const l=t.Pu.get(a);i=i.unionWith(l.view.tu)}return i}}function _y(n){const e=Ce(n);return e.remoteStore.remoteSyncer.applyRemoteEvent=py.bind(null,e),e.remoteStore.remoteSyncer.getRemoteKeysForTarget=HS.bind(null,e),e.remoteStore.remoteSyncer.rejectListen=BS.bind(null,e),e.hu.J_=NS.bind(null,e.eventManager),e.hu.pu=DS.bind(null,e.eventManager),e}class Uc{constructor(){this.kind="memory",this.synchronizeTabs=!1}async initialize(e){this.serializer=gu(e.databaseInfo.databaseId),this.sharedClientState=this.bu(e),this.persistence=this.Du(e),await this.persistence.start(),this.localStore=this.vu(e),this.gcScheduler=this.Cu(e,this.localStore),this.indexBackfillerScheduler=this.Fu(e,this.localStore)}Cu(e,t){return null}Fu(e,t){return null}vu(e){return aS(this.persistence,new iS,e.initialUser,this.serializer)}Du(e){return new ty(qd.Vi,this.serializer)}bu(e){return new dS}async terminate(){var e,t;(e=this.gcScheduler)===null||e===void 0||e.stop(),(t=this.indexBackfillerScheduler)===null||t===void 0||t.stop(),this.sharedClientState.shutdown(),await this.persistence.shutdown()}}Uc.provider={build:()=>new Uc};class WS extends Uc{constructor(e){super(),this.cacheSizeBytes=e}Cu(e,t){it(this.persistence.referenceDelegate instanceof Fc,46915);const r=this.persistence.referenceDelegate.garbageCollector;return new z1(r,e.asyncQueue,t)}Du(e){const t=this.cacheSizeBytes!==void 0?Wn.withCacheSize(this.cacheSizeBytes):Wn.DEFAULT;return new ty((r=>Fc.Vi(r,t)),this.serializer)}}class Kh{async initialize(e,t){this.localStore||(this.localStore=e.localStore,this.sharedClientState=e.sharedClientState,this.datastore=this.createDatastore(t),this.remoteStore=this.createRemoteStore(t),this.eventManager=this.createEventManager(t),this.syncEngine=this.createSyncEngine(t,!e.synchronizeTabs),this.sharedClientState.onlineStateHandler=r=>em(this.syncEngine,r,1),this.remoteStore.remoteSyncer.handleCredentialChange=jS.bind(null,this.syncEngine),await CS(this.remoteStore,this.syncEngine.isPrimaryClient))}createEventManager(e){return(function(){return new kS})()}createDatastore(e){const t=gu(e.databaseInfo.databaseId),r=(function(s){return new _S(s)})(e.databaseInfo);return(function(s,a,l,c){return new wS(s,a,l,c)})(e.authCredentials,e.appCheckCredentials,r,t)}createRemoteStore(e){return(function(r,i,s,a,l){return new IS(r,i,s,a,l)})(this.localStore,this.datastore,e.asyncQueue,(t=>em(this.syncEngine,t,0)),(function(){return Gp.C()?new Gp:new fS})())}createSyncEngine(e,t){return(function(i,s,a,l,c,h,f){const g=new xS(i,s,a,l,c,h);return f&&(g.fu=!0),g})(this.localStore,this.remoteStore,this.eventManager,this.sharedClientState,e.initialUser,e.maxConcurrentLimboResolutions,t)}async terminate(){var e,t;await(async function(i){const s=Ce(i);W(jo,"RemoteStore shutting down."),s.Ia.add(5),await Tl(s),s.Ea.shutdown(),s.Aa.set("Unknown")})(this.remoteStore),(e=this.datastore)===null||e===void 0||e.terminate(),(t=this.eventManager)===null||t===void 0||t.terminate()}}Kh.provider={build:()=>new Kh};/**
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
 */class vy{constructor(e){this.observer=e,this.muted=!1}next(e){this.muted||this.observer.next&&this.xu(this.observer.next,e)}error(e){this.muted||(this.observer.error?this.xu(this.observer.error,e):Pi("Uncaught Error in snapshot listener:",e.toString()))}Ou(){this.muted=!0}xu(e,t){setTimeout((()=>{this.muted||e(t)}),0)}}/**
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
 */class GS{constructor(e){this.datastore=e,this.readVersions=new Map,this.mutations=[],this.committed=!1,this.lastTransactionError=null,this.writtenDocs=new Set}async lookup(e){if(this.ensureCommitNotCalled(),this.mutations.length>0)throw this.lastTransactionError=new B(x.INVALID_ARGUMENT,"Firestore transactions require all reads to be executed before all writes."),this.lastTransactionError;const t=await(async function(i,s){const a=Ce(i),l={documents:s.map((g=>Lc(a.serializer,g)))},c=await a.Jo("BatchGetDocuments",a.serializer.databaseId,tt.emptyPath(),l,s.length),h=new Map;c.forEach((g=>{const _=R1(a.serializer,g);h.set(_.key.toString(),_)}));const f=[];return s.forEach((g=>{const _=h.get(g.toString());it(!!_,55234,{key:g}),f.push(_)})),f})(this.datastore,e);return t.forEach((r=>this.recordVersion(r))),t}set(e,t){this.write(t.toMutation(e,this.precondition(e))),this.writtenDocs.add(e.toString())}update(e,t){try{this.write(t.toMutation(e,this.preconditionForUpdate(e)))}catch(r){this.lastTransactionError=r}this.writtenDocs.add(e.toString())}delete(e){this.write(new Ld(e,this.precondition(e))),this.writtenDocs.add(e.toString())}async commit(){if(this.ensureCommitNotCalled(),this.lastTransactionError)throw this.lastTransactionError;const e=this.readVersions;this.mutations.forEach((t=>{e.delete(t.key.toString())})),e.forEach(((t,r)=>{const i=Z.fromPath(r);this.mutations.push(new qv(i,this.precondition(i)))})),await(async function(r,i){const s=Ce(r),a={writes:i.map((l=>P1(s.serializer,l)))};await s.Wo("Commit",s.serializer.databaseId,tt.emptyPath(),a)})(this.datastore,this.mutations),this.committed=!0}recordVersion(e){let t;if(e.isFoundDocument())t=e.version;else{if(!e.isNoDocument())throw ie(50498,{Wu:e.constructor.name});t=ue.min()}const r=this.readVersions.get(e.key.toString());if(r){if(!t.isEqual(r))throw new B(x.ABORTED,"Document version changed between two reads.")}else this.readVersions.set(e.key.toString(),t)}precondition(e){const t=this.readVersions.get(e.toString());return!this.writtenDocs.has(e.toString())&&t?t.isEqual(ue.min())?yr.exists(!1):yr.updateTime(t):yr.none()}preconditionForUpdate(e){const t=this.readVersions.get(e.toString());if(!this.writtenDocs.has(e.toString())&&t){if(t.isEqual(ue.min()))throw new B(x.INVALID_ARGUMENT,"Can't update a document that doesn't exist.");return yr.updateTime(t)}return yr.exists(!0)}write(e){this.ensureCommitNotCalled(),this.mutations.push(e)}ensureCommitNotCalled(){}}/**
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
 */class KS{constructor(e,t,r,i,s){this.asyncQueue=e,this.datastore=t,this.options=r,this.updateFunction=i,this.deferred=s,this.Gu=r.maxAttempts,this.F_=new jd(this.asyncQueue,"transaction_retry")}zu(){this.Gu-=1,this.ju()}ju(){this.F_.g_((async()=>{const e=new GS(this.datastore),t=this.Ju(e);t&&t.then((r=>{this.asyncQueue.enqueueAndForget((()=>e.commit().then((()=>{this.deferred.resolve(r)})).catch((i=>{this.Hu(i)}))))})).catch((r=>{this.Hu(r)}))}))}Ju(e){try{const t=this.updateFunction(e);return!yl(t)&&t.catch&&t.then?t:(this.deferred.reject(Error("Transaction callback must return a Promise")),null)}catch(t){return this.deferred.reject(t),null}}Hu(e){this.Gu>0&&this.Yu(e)?(this.Gu-=1,this.asyncQueue.enqueueAndForget((()=>(this.ju(),Promise.resolve())))):this.deferred.reject(e)}Yu(e){if(e.name==="FirebaseError"){const t=e.code;return t==="aborted"||t==="failed-precondition"||t==="already-exists"||!v1(t)}return!1}}/**
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
 */const ps="FirestoreClient";class QS{constructor(e,t,r,i,s){this.authCredentials=e,this.appCheckCredentials=t,this.asyncQueue=r,this.databaseInfo=i,this.user=Hn.UNAUTHENTICATED,this.clientId=kd.newId(),this.authCredentialListener=()=>Promise.resolve(),this.appCheckCredentialListener=()=>Promise.resolve(),this._uninitializedComponentsProvider=s,this.authCredentials.start(r,(async a=>{W(ps,"Received user=",a.uid),await this.authCredentialListener(a),this.user=a})),this.appCheckCredentials.start(r,(a=>(W(ps,"Received new app check token=",a),this.appCheckCredentialListener(a,this.user))))}get configuration(){return{asyncQueue:this.asyncQueue,databaseInfo:this.databaseInfo,clientId:this.clientId,authCredentials:this.authCredentials,appCheckCredentials:this.appCheckCredentials,initialUser:this.user,maxConcurrentLimboResolutions:100}}setCredentialChangeListener(e){this.authCredentialListener=e}setAppCheckTokenChangeListener(e){this.appCheckCredentialListener=e}terminate(){this.asyncQueue.enterRestrictedMode();const e=new ti;return this.asyncQueue.enqueueAndForgetEvenWhileRestricted((async()=>{try{this._onlineComponents&&await this._onlineComponents.terminate(),this._offlineComponents&&await this._offlineComponents.terminate(),this.authCredentials.shutdown(),this.appCheckCredentials.shutdown(),e.resolve()}catch(t){const r=ay(t,"Failed to shutdown persistence");e.reject(r)}})),e.promise}}async function ah(n,e){n.asyncQueue.verifyOperationInProgress(),W(ps,"Initializing OfflineComponentProvider");const t=n.configuration;await e.initialize(t);let r=t.initialUser;n.setCredentialChangeListener((async i=>{r.isEqual(i)||(await ny(e.localStore,i),r=i)})),e.persistence.setDatabaseDeletedListener((()=>{Qs("Terminating Firestore due to IndexedDb database deletion"),n.terminate().then((()=>{W("Terminating Firestore due to IndexedDb database deletion completed successfully")})).catch((i=>{Qs("Terminating Firestore due to IndexedDb database deletion failed",i)}))})),n._offlineComponents=e}async function nm(n,e){n.asyncQueue.verifyOperationInProgress();const t=await YS(n);W(ps,"Initializing OnlineComponentProvider"),await e.initialize(t,n.configuration),n.setCredentialChangeListener((r=>Yp(e.remoteStore,r))),n.setAppCheckTokenChangeListener(((r,i)=>Yp(e.remoteStore,i))),n._onlineComponents=e}async function YS(n){if(!n._offlineComponents)if(n._uninitializedComponentsProvider){W(ps,"Using user provided OfflineComponentProvider");try{await ah(n,n._uninitializedComponentsProvider._offline)}catch(e){const t=e;if(!(function(i){return i.name==="FirebaseError"?i.code===x.FAILED_PRECONDITION||i.code===x.UNIMPLEMENTED:!(typeof DOMException<"u"&&i instanceof DOMException)||i.code===22||i.code===20||i.code===11})(t))throw t;Qs("Error using user provided cache. Falling back to memory cache: "+t),await ah(n,new Uc)}}else W(ps,"Using default OfflineComponentProvider"),await ah(n,new WS(void 0));return n._offlineComponents}async function yy(n){return n._onlineComponents||(n._uninitializedComponentsProvider?(W(ps,"Using user provided OnlineComponentProvider"),await nm(n,n._uninitializedComponentsProvider._online)):(W(ps,"Using default OnlineComponentProvider"),await nm(n,new Kh))),n._onlineComponents}function Ey(n){return yy(n).then((e=>e.datastore))}async function wy(n){const e=await yy(n),t=e.eventManager;return t.onListen=LS.bind(null,e.syncEngine),t.onUnlisten=$S.bind(null,e.syncEngine),t.onFirstRemoteStoreListen=FS.bind(null,e.syncEngine),t.onLastRemoteStoreUnlisten=qS.bind(null,e.syncEngine),t}function JS(n,e,t={}){const r=new ti;return n.asyncQueue.enqueueAndForget((async()=>(function(s,a,l,c,h){const f=new vy({next:_=>{f.Ou(),a.enqueueAndForget((()=>cy(s,g)));const E=_.docs.has(l);!E&&_.fromCache?h.reject(new B(x.UNAVAILABLE,"Failed to get document because the client is offline.")):E&&_.fromCache&&c&&c.source==="server"?h.reject(new B(x.UNAVAILABLE,'Failed to get document from server. (However, this document does exist in the local cache. Run again without setting source to "server" to retrieve the cached document.)')):h.resolve(_)},error:_=>h.reject(_)}),g=new uy(Vd(l.path),f,{includeMetadataChanges:!0,ka:!0});return ly(s,g)})(await wy(n),n.asyncQueue,e,t,r))),r.promise}function XS(n,e,t={}){const r=new ti;return n.asyncQueue.enqueueAndForget((async()=>(function(s,a,l,c,h){const f=new vy({next:_=>{f.Ou(),a.enqueueAndForget((()=>cy(s,g))),_.fromCache&&c.source==="server"?h.reject(new B(x.UNAVAILABLE,'Failed to get documents from server. (However, these documents may exist in the local cache. Run again without setting source to "server" to retrieve the cached documents.)')):h.resolve(_)},error:_=>h.reject(_)}),g=new uy(l,f,{includeMetadataChanges:!0,ka:!0});return ly(s,g)})(await wy(n),n.asyncQueue,e,t,r))),r.promise}function ZS(n,e,t){const r=new ti;return n.asyncQueue.enqueueAndForget((async()=>{try{const i=await Ey(n);r.resolve((async function(a,l,c){var h;const f=Ce(a),{request:g,ft:_,parent:E}=N1(f.serializer,Zb(l),c);f.connection.Qo||delete g.parent;const S=(await f.Jo("RunAggregationQuery",f.serializer.databaseId,E,g,1)).filter((I=>!!I.result));it(S.length===1,64727);const P=(h=S[0].result)===null||h===void 0?void 0:h.aggregateFields;return Object.keys(P).reduce(((I,L)=>(I[_[L]]=P[L],I)),{})})(i,e,t))}catch(i){r.reject(i)}})),r.promise}/**
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
 */function Ty(n){const e={};return n.timeoutSeconds!==void 0&&(e.timeoutSeconds=n.timeoutSeconds),e}/**
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
 */const rm=new Map;/**
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
 */const eR="firestore.googleapis.com",im=!0;class sm{constructor(e){var t,r;if(e.host===void 0){if(e.ssl!==void 0)throw new B(x.INVALID_ARGUMENT,"Can't provide ssl option if host option is not set");this.host=eR,this.ssl=im}else this.host=e.host,this.ssl=(t=e.ssl)!==null&&t!==void 0?t:im;if(this.isUsingEmulator=e.emulatorOptions!==void 0,this.credentials=e.credentials,this.ignoreUndefinedProperties=!!e.ignoreUndefinedProperties,this.localCache=e.localCache,e.cacheSizeBytes===void 0)this.cacheSizeBytes=Zv;else{if(e.cacheSizeBytes!==-1&&e.cacheSizeBytes<ey)throw new B(x.INVALID_ARGUMENT,"cacheSizeBytes must be at least 1048576");this.cacheSizeBytes=e.cacheSizeBytes}Ab("experimentalForceLongPolling",e.experimentalForceLongPolling,"experimentalAutoDetectLongPolling",e.experimentalAutoDetectLongPolling),this.experimentalForceLongPolling=!!e.experimentalForceLongPolling,this.experimentalForceLongPolling?this.experimentalAutoDetectLongPolling=!1:e.experimentalAutoDetectLongPolling===void 0?this.experimentalAutoDetectLongPolling=!0:this.experimentalAutoDetectLongPolling=!!e.experimentalAutoDetectLongPolling,this.experimentalLongPollingOptions=Ty((r=e.experimentalLongPollingOptions)!==null&&r!==void 0?r:{}),(function(s){if(s.timeoutSeconds!==void 0){if(isNaN(s.timeoutSeconds))throw new B(x.INVALID_ARGUMENT,`invalid long polling timeout: ${s.timeoutSeconds} (must not be NaN)`);if(s.timeoutSeconds<5)throw new B(x.INVALID_ARGUMENT,`invalid long polling timeout: ${s.timeoutSeconds} (minimum allowed value is 5)`);if(s.timeoutSeconds>30)throw new B(x.INVALID_ARGUMENT,`invalid long polling timeout: ${s.timeoutSeconds} (maximum allowed value is 30)`)}})(this.experimentalLongPollingOptions),this.useFetchStreams=!!e.useFetchStreams}isEqual(e){return this.host===e.host&&this.ssl===e.ssl&&this.credentials===e.credentials&&this.cacheSizeBytes===e.cacheSizeBytes&&this.experimentalForceLongPolling===e.experimentalForceLongPolling&&this.experimentalAutoDetectLongPolling===e.experimentalAutoDetectLongPolling&&(function(r,i){return r.timeoutSeconds===i.timeoutSeconds})(this.experimentalLongPollingOptions,e.experimentalLongPollingOptions)&&this.ignoreUndefinedProperties===e.ignoreUndefinedProperties&&this.useFetchStreams===e.useFetchStreams}}class Zd{constructor(e,t,r,i){this._authCredentials=e,this._appCheckCredentials=t,this._databaseId=r,this._app=i,this.type="firestore-lite",this._persistenceKey="(lite)",this._settings=new sm({}),this._settingsFrozen=!1,this._emulatorOptions={},this._terminateTask="notTerminated"}get app(){if(!this._app)throw new B(x.FAILED_PRECONDITION,"Firestore was not initialized using the Firebase SDK. 'app' is not available");return this._app}get _initialized(){return this._settingsFrozen}get _terminated(){return this._terminateTask!=="notTerminated"}_setSettings(e){if(this._settingsFrozen)throw new B(x.FAILED_PRECONDITION,"Firestore has already been started and its settings can no longer be changed. You can only modify settings before calling any other methods on a Firestore object.");this._settings=new sm(e),this._emulatorOptions=e.emulatorOptions||{},e.credentials!==void 0&&(this._authCredentials=(function(r){if(!r)return new gb;switch(r.type){case"firstParty":return new yb(r.sessionIndex||"0",r.iamToken||null,r.authTokenFactory||null);case"provider":return r.client;default:throw new B(x.INVALID_ARGUMENT,"makeAuthCredentialsProvider failed due to invalid credential type")}})(e.credentials))}_getSettings(){return this._settings}_getEmulatorOptions(){return this._emulatorOptions}_freezeSettings(){return this._settingsFrozen=!0,this._settings}_delete(){return this._terminateTask==="notTerminated"&&(this._terminateTask=this._terminate()),this._terminateTask}async _restart(){this._terminateTask==="notTerminated"?await this._terminate():this._terminateTask="notTerminated"}toJSON(){return{app:this._app,databaseId:this._databaseId,settings:this._settings}}_terminate(){return(function(t){const r=rm.get(t);r&&(W("ComponentProvider","Removing Datastore"),rm.delete(t),r.terminate())})(this),Promise.resolve()}}/**
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
 */class Oi{constructor(e,t,r){this.converter=t,this._query=r,this.type="query",this.firestore=e}withConverter(e){return new Oi(this.firestore,e,this._query)}}class Wt{constructor(e,t,r){this.converter=t,this._key=r,this.type="document",this.firestore=e}get _path(){return this._key.path}get id(){return this._key.path.lastSegment()}get path(){return this._key.path.canonicalString()}get parent(){return new ns(this.firestore,this.converter,this._key.path.popLast())}withConverter(e){return new Wt(this.firestore,e,this._key)}toJSON(){return{type:Wt._jsonSchemaVersion,referencePath:this._key.toString()}}static fromJSON(e,t,r){if(vl(t,Wt._jsonSchema))return new Wt(e,r||null,new Z(tt.fromString(t.referencePath)))}}Wt._jsonSchemaVersion="firestore/documentReference/1.0",Wt._jsonSchema={type:Ht("string",Wt._jsonSchemaVersion),referencePath:Ht("string")};class ns extends Oi{constructor(e,t,r){super(e,t,Vd(r)),this._path=r,this.type="collection"}get id(){return this._query.path.lastSegment()}get path(){return this._query.path.canonicalString()}get parent(){const e=this._path.popLast();return e.isEmpty()?null:new Wt(this.firestore,null,new Z(e))}withConverter(e){return new ns(this.firestore,e,this._path)}}function Ys(n,e,...t){if(n=$t(n),fv("collection","path",e),n instanceof Zd){const r=tt.fromString(e,...t);return _p(r),new ns(n,null,r)}{if(!(n instanceof Wt||n instanceof ns))throw new B(x.INVALID_ARGUMENT,"Expected first argument to collection() to be a CollectionReference, a DocumentReference or FirebaseFirestore");const r=n._path.child(tt.fromString(e,...t));return _p(r),new ns(n.firestore,null,r)}}function un(n,e,...t){if(n=$t(n),arguments.length===1&&(e=kd.newId()),fv("doc","path",e),n instanceof Zd){const r=tt.fromString(e,...t);return gp(r),new Wt(n,null,new Z(r))}{if(!(n instanceof Wt||n instanceof ns))throw new B(x.INVALID_ARGUMENT,"Expected first argument to collection() to be a CollectionReference, a DocumentReference or FirebaseFirestore");const r=n._path.child(tt.fromString(e,...t));return gp(r),new Wt(n.firestore,n instanceof ns?n.converter:null,new Z(r))}}/**
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
 */const om="AsyncQueue";class am{constructor(e=Promise.resolve()){this.Zu=[],this.Xu=!1,this.ec=[],this.tc=null,this.nc=!1,this.rc=!1,this.sc=[],this.F_=new jd(this,"async_queue_retry"),this.oc=()=>{const r=oh();r&&W(om,"Visibility state changed to "+r.visibilityState),this.F_.y_()},this._c=e;const t=oh();t&&typeof t.addEventListener=="function"&&t.addEventListener("visibilitychange",this.oc)}get isShuttingDown(){return this.Xu}enqueueAndForget(e){this.enqueue(e)}enqueueAndForgetEvenWhileRestricted(e){this.ac(),this.uc(e)}enterRestrictedMode(e){if(!this.Xu){this.Xu=!0,this.rc=e||!1;const t=oh();t&&typeof t.removeEventListener=="function"&&t.removeEventListener("visibilitychange",this.oc)}}enqueue(e){if(this.ac(),this.Xu)return new Promise((()=>{}));const t=new ti;return this.uc((()=>this.Xu&&this.rc?Promise.resolve():(e().then(t.resolve,t.reject),t.promise))).then((()=>t.promise))}enqueueRetryable(e){this.enqueueAndForget((()=>(this.Zu.push(e),this.cc())))}async cc(){if(this.Zu.length!==0){try{await this.Zu[0](),this.Zu.shift(),this.F_.reset()}catch(e){if(!ra(e))throw e;W(om,"Operation failed with retryable error: "+e)}this.Zu.length>0&&this.F_.g_((()=>this.cc()))}}uc(e){const t=this._c.then((()=>(this.nc=!0,e().catch((r=>{throw this.tc=r,this.nc=!1,Pi("INTERNAL UNHANDLED ERROR: ",lm(r)),r})).then((r=>(this.nc=!1,r))))));return this._c=t,t}enqueueAfterDelay(e,t,r){this.ac(),this.sc.indexOf(e)>-1&&(t=0);const i=Qd.createAndSchedule(this,e,t,r,(s=>this.lc(s)));return this.ec.push(i),i}ac(){this.tc&&ie(47125,{hc:lm(this.tc)})}verifyOperationInProgress(){}async Pc(){let e;do e=this._c,await e;while(e!==this._c)}Tc(e){for(const t of this.ec)if(t.timerId===e)return!0;return!1}Ic(e){return this.Pc().then((()=>{this.ec.sort(((t,r)=>t.targetTimeMs-r.targetTimeMs));for(const t of this.ec)if(t.skipDelay(),e!=="all"&&t.timerId===e)break;return this.Pc()}))}dc(e){this.sc.push(e)}lc(e){const t=this.ec.indexOf(e);this.ec.splice(t,1)}}function lm(n){let e=n.message||"";return n.stack&&(e=n.stack.includes(n.message)?n.stack:n.message+`
`+n.stack),e}class Al extends Zd{constructor(e,t,r,i){super(e,t,r,i),this.type="firestore",this._queue=new am,this._persistenceKey=(i==null?void 0:i.name)||"[DEFAULT]"}async _terminate(){if(this._firestoreClient){const e=this._firestoreClient.terminate();this._queue=new am(e),this._firestoreClient=void 0,await e}}}function tR(n,e,t){t||(t=Nc);const r=vd(n,"firestore");if(r.isInitialized(t)){const i=r.getImmediate({identifier:t}),s=r.getOptions(t);if(Hs(s,e))return i;throw new B(x.FAILED_PRECONDITION,"initializeFirestore() has already been called with different options. To avoid this error, call initializeFirestore() with the same options as when it was originally called, or call getFirestore() to return the already initialized instance.")}if(e.cacheSizeBytes!==void 0&&e.localCache!==void 0)throw new B(x.INVALID_ARGUMENT,"cache and cacheSizeBytes cannot be specified at the same time as cacheSizeBytes willbe deprecated. Instead, specify the cache size in the cache object");if(e.cacheSizeBytes!==void 0&&e.cacheSizeBytes!==-1&&e.cacheSizeBytes<ey)throw new B(x.INVALID_ARGUMENT,"cacheSizeBytes must be at least 1048576");return e.host&&Xo(e.host)&&p_(e.host),r.initialize({options:e,instanceIdentifier:t})}function vu(n){if(n._terminated)throw new B(x.FAILED_PRECONDITION,"The client has already been terminated.");return n._firestoreClient||nR(n),n._firestoreClient}function nR(n){var e,t,r;const i=n._freezeSettings(),s=(function(l,c,h,f){return new Fb(l,c,h,f.host,f.ssl,f.experimentalForceLongPolling,f.experimentalAutoDetectLongPolling,Ty(f.experimentalLongPollingOptions),f.useFetchStreams,f.isUsingEmulator)})(n._databaseId,((e=n._app)===null||e===void 0?void 0:e.options.appId)||"",n._persistenceKey,i);n._componentsProvider||!((t=i.localCache)===null||t===void 0)&&t._offlineComponentProvider&&(!((r=i.localCache)===null||r===void 0)&&r._onlineComponentProvider)&&(n._componentsProvider={_offline:i.localCache._offlineComponentProvider,_online:i.localCache._onlineComponentProvider}),n._firestoreClient=new QS(n._authCredentials,n._appCheckCredentials,n._queue,s,n._componentsProvider&&(function(l){const c=l==null?void 0:l._online.build();return{_offline:l==null?void 0:l._offline.build(c),_online:c}})(n._componentsProvider))}/**
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
 */class rR{constructor(e="count",t){this._internalFieldPath=t,this.type="AggregateField",this.aggregateType=e}}class iR{constructor(e,t,r){this._userDataWriter=t,this._data=r,this.type="AggregateQuerySnapshot",this.query=e}data(){return this._userDataWriter.convertObjectMap(this._data)}}/**
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
 */class ir{constructor(e){this._byteString=e}static fromBase64String(e){try{return new ir(wn.fromBase64String(e))}catch(t){throw new B(x.INVALID_ARGUMENT,"Failed to construct data from Base64 string: "+t)}}static fromUint8Array(e){return new ir(wn.fromUint8Array(e))}toBase64(){return this._byteString.toBase64()}toUint8Array(){return this._byteString.toUint8Array()}toString(){return"Bytes(base64: "+this.toBase64()+")"}isEqual(e){return this._byteString.isEqual(e._byteString)}toJSON(){return{type:ir._jsonSchemaVersion,bytes:this.toBase64()}}static fromJSON(e){if(vl(e,ir._jsonSchema))return ir.fromBase64String(e.bytes)}}ir._jsonSchemaVersion="firestore/bytes/1.0",ir._jsonSchema={type:Ht("string",ir._jsonSchemaVersion),bytes:Ht("string")};/**
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
 */class yu{constructor(...e){for(let t=0;t<e.length;++t)if(e[t].length===0)throw new B(x.INVALID_ARGUMENT,"Invalid field name at argument $(i + 1). Field names must not be empty.");this._internalPath=new Cn(e)}isEqual(e){return this._internalPath.isEqual(e._internalPath)}}/**
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
 */class Eu{constructor(e){this._methodName=e}}/**
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
 */class ri{constructor(e,t){if(!isFinite(e)||e<-90||e>90)throw new B(x.INVALID_ARGUMENT,"Latitude must be a number between -90 and 90, but was: "+e);if(!isFinite(t)||t<-180||t>180)throw new B(x.INVALID_ARGUMENT,"Longitude must be a number between -180 and 180, but was: "+t);this._lat=e,this._long=t}get latitude(){return this._lat}get longitude(){return this._long}isEqual(e){return this._lat===e._lat&&this._long===e._long}_compareTo(e){return Re(this._lat,e._lat)||Re(this._long,e._long)}toJSON(){return{latitude:this._lat,longitude:this._long,type:ri._jsonSchemaVersion}}static fromJSON(e){if(vl(e,ri._jsonSchema))return new ri(e.latitude,e.longitude)}}ri._jsonSchemaVersion="firestore/geoPoint/1.0",ri._jsonSchema={type:Ht("string",ri._jsonSchemaVersion),latitude:Ht("number"),longitude:Ht("number")};/**
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
 */class ii{constructor(e){this._values=(e||[]).map((t=>t))}toArray(){return this._values.map((e=>e))}isEqual(e){return(function(r,i){if(r.length!==i.length)return!1;for(let s=0;s<r.length;++s)if(r[s]!==i[s])return!1;return!0})(this._values,e._values)}toJSON(){return{type:ii._jsonSchemaVersion,vectorValues:this._values}}static fromJSON(e){if(vl(e,ii._jsonSchema)){if(Array.isArray(e.vectorValues)&&e.vectorValues.every((t=>typeof t=="number")))return new ii(e.vectorValues);throw new B(x.INVALID_ARGUMENT,"Expected 'vectorValues' field to be a number array")}}}ii._jsonSchemaVersion="firestore/vectorValue/1.0",ii._jsonSchema={type:Ht("string",ii._jsonSchemaVersion),vectorValues:Ht("object")};/**
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
 */const sR=/^__.*__$/;class oR{constructor(e,t,r){this.data=e,this.fieldMask=t,this.fieldTransforms=r}toMutation(e,t){return this.fieldMask!==null?new eo(e,this.data,this.fieldMask,t,this.fieldTransforms):new El(e,this.data,t,this.fieldTransforms)}}class Iy{constructor(e,t,r){this.data=e,this.fieldMask=t,this.fieldTransforms=r}toMutation(e,t){return new eo(e,this.data,this.fieldMask,t,this.fieldTransforms)}}function Ay(n){switch(n){case 0:case 2:case 1:return!0;case 3:case 4:return!1;default:throw ie(40011,{Ec:n})}}class ef{constructor(e,t,r,i,s,a){this.settings=e,this.databaseId=t,this.serializer=r,this.ignoreUndefinedProperties=i,s===void 0&&this.Ac(),this.fieldTransforms=s||[],this.fieldMask=a||[]}get path(){return this.settings.path}get Ec(){return this.settings.Ec}Rc(e){return new ef(Object.assign(Object.assign({},this.settings),e),this.databaseId,this.serializer,this.ignoreUndefinedProperties,this.fieldTransforms,this.fieldMask)}Vc(e){var t;const r=(t=this.path)===null||t===void 0?void 0:t.child(e),i=this.Rc({path:r,mc:!1});return i.fc(e),i}gc(e){var t;const r=(t=this.path)===null||t===void 0?void 0:t.child(e),i=this.Rc({path:r,mc:!1});return i.Ac(),i}yc(e){return this.Rc({path:void 0,mc:!0})}wc(e){return $c(e,this.settings.methodName,this.settings.Sc||!1,this.path,this.settings.bc)}contains(e){return this.fieldMask.find((t=>e.isPrefixOf(t)))!==void 0||this.fieldTransforms.find((t=>e.isPrefixOf(t.field)))!==void 0}Ac(){if(this.path)for(let e=0;e<this.path.length;e++)this.fc(this.path.get(e))}fc(e){if(e.length===0)throw this.wc("Document fields must not be empty");if(Ay(this.Ec)&&sR.test(e))throw this.wc('Document fields cannot begin and end with "__"')}}class aR{constructor(e,t,r){this.databaseId=e,this.ignoreUndefinedProperties=t,this.serializer=r||gu(e)}Dc(e,t,r,i=!1){return new ef({Ec:e,methodName:t,bc:r,path:Cn.emptyPath(),mc:!1,Sc:i},this.databaseId,this.serializer,this.ignoreUndefinedProperties)}}function tf(n){const e=n._freezeSettings(),t=gu(n._databaseId);return new aR(n._databaseId,!!e.ignoreUndefinedProperties,t)}function lR(n,e,t,r,i,s={}){const a=n.Dc(s.merge||s.mergeFields?2:0,e,t,i);rf("Data must be an object, but it was:",a,r);const l=Sy(r,a);let c,h;if(s.merge)c=new Er(a.fieldMask),h=a.fieldTransforms;else if(s.mergeFields){const f=[];for(const g of s.mergeFields){const _=Qh(e,g,t);if(!a.contains(_))throw new B(x.INVALID_ARGUMENT,`Field '${_}' is specified in your field mask but missing from your input data.`);Cy(f,_)||f.push(_)}c=new Er(f),h=a.fieldTransforms.filter((g=>c.covers(g.field)))}else c=null,h=a.fieldTransforms;return new oR(new Kn(l),c,h)}class wu extends Eu{_toFieldTransform(e){if(e.Ec!==2)throw e.Ec===1?e.wc(`${this._methodName}() can only appear at the top level of your update data`):e.wc(`${this._methodName}() cannot be used with set() unless you pass {merge:true}`);return e.fieldMask.push(e.path),null}isEqual(e){return e instanceof wu}}class nf extends Eu{_toFieldTransform(e){return new h1(e.path,new el)}isEqual(e){return e instanceof nf}}function cR(n,e,t,r){const i=n.Dc(1,e,t);rf("Data must be an object, but it was:",i,r);const s=[],a=Kn.empty();Js(r,((c,h)=>{const f=sf(e,c,t);h=$t(h);const g=i.gc(f);if(h instanceof wu)s.push(f);else{const _=bl(h,g);_!=null&&(s.push(f),a.set(f,_))}}));const l=new Er(s);return new Iy(a,l,i.fieldTransforms)}function uR(n,e,t,r,i,s){const a=n.Dc(1,e,t),l=[Qh(e,r,t)],c=[i];if(s.length%2!=0)throw new B(x.INVALID_ARGUMENT,`Function ${e}() needs to be called with an even number of arguments that alternate between field names and values.`);for(let _=0;_<s.length;_+=2)l.push(Qh(e,s[_])),c.push(s[_+1]);const h=[],f=Kn.empty();for(let _=l.length-1;_>=0;--_)if(!Cy(h,l[_])){const E=l[_];let S=c[_];S=$t(S);const P=a.gc(E);if(S instanceof wu)h.push(E);else{const I=bl(S,P);I!=null&&(h.push(E),f.set(E,I))}}const g=new Er(h);return new Iy(f,g,a.fieldTransforms)}function by(n,e,t,r=!1){return bl(t,n.Dc(r?4:3,e))}function bl(n,e){if(Ry(n=$t(n)))return rf("Unsupported field value:",e,n),Sy(n,e);if(n instanceof Eu)return(function(r,i){if(!Ay(i.Ec))throw i.wc(`${r._methodName}() can only be used with update() and set()`);if(!i.path)throw i.wc(`${r._methodName}() is not currently supported inside arrays`);const s=r._toFieldTransform(i);s&&i.fieldTransforms.push(s)})(n,e),null;if(n===void 0&&e.ignoreUndefinedProperties)return null;if(e.path&&e.fieldMask.push(e.path),n instanceof Array){if(e.settings.mc&&e.Ec!==4)throw e.wc("Nested arrays are not supported");return(function(r,i){const s=[];let a=0;for(const l of r){let c=bl(l,i.yc(a));c==null&&(c={nullValue:"NULL_VALUE"}),s.push(c),a++}return{arrayValue:{values:s}}})(n,e)}return(function(r,i){if((r=$t(r))===null)return{nullValue:"NULL_VALUE"};if(typeof r=="number")return a1(i.serializer,r);if(typeof r=="boolean")return{booleanValue:r};if(typeof r=="string")return{stringValue:r};if(r instanceof Date){const s=yt.fromDate(r);return{timestampValue:xc(i.serializer,s)}}if(r instanceof yt){const s=new yt(r.seconds,1e3*Math.floor(r.nanoseconds/1e3));return{timestampValue:xc(i.serializer,s)}}if(r instanceof ri)return{geoPointValue:{latitude:r.latitude,longitude:r.longitude}};if(r instanceof ir)return{bytesValue:Hv(i.serializer,r._byteString)};if(r instanceof Wt){const s=i.databaseId,a=r.firestore._databaseId;if(!a.isEqual(s))throw i.wc(`Document reference is for database ${a.projectId}/${a.database} but should be for database ${s.projectId}/${s.database}`);return{referenceValue:Ud(r.firestore._databaseId||i.databaseId,r._key.path)}}if(r instanceof ii)return(function(a,l){return{mapValue:{fields:{[Tv]:{stringValue:Iv},[Dc]:{arrayValue:{values:a.toArray().map((h=>{if(typeof h!="number")throw l.wc("VectorValues must only contain numeric values.");return xd(l.serializer,h)}))}}}}}})(r,i);throw i.wc(`Unsupported field value: ${ou(r)}`)})(n,e)}function Sy(n,e){const t={};return gv(n)?e.path&&e.path.length>0&&e.fieldMask.push(e.path):Js(n,((r,i)=>{const s=bl(i,e.Vc(r));s!=null&&(t[r]=s)})),{mapValue:{fields:t}}}function Ry(n){return!(typeof n!="object"||n===null||n instanceof Array||n instanceof Date||n instanceof yt||n instanceof ri||n instanceof ir||n instanceof Wt||n instanceof Eu||n instanceof ii)}function rf(n,e,t){if(!Ry(t)||!pv(t)){const r=ou(t);throw r==="an object"?e.wc(n+" a custom object"):e.wc(n+" "+r)}}function Qh(n,e,t){if((e=$t(e))instanceof yu)return e._internalPath;if(typeof e=="string")return sf(n,e);throw $c("Field path arguments must be of type string or ",n,!1,void 0,t)}const hR=new RegExp("[~\\*/\\[\\]]");function sf(n,e,t){if(e.search(hR)>=0)throw $c(`Invalid field path (${e}). Paths must not contain '~', '*', '/', '[', or ']'`,n,!1,void 0,t);try{return new yu(...e.split("."))._internalPath}catch{throw $c(`Invalid field path (${e}). Paths must not be empty, begin with '.', end with '.', or contain '..'`,n,!1,void 0,t)}}function $c(n,e,t,r,i){const s=r&&!r.isEmpty(),a=i!==void 0;let l=`Function ${e}() called with invalid data`;t&&(l+=" (via `toFirestore()`)"),l+=". ";let c="";return(s||a)&&(c+=" (found",s&&(c+=` in field ${r}`),a&&(c+=` in document ${i}`),c+=")"),new B(x.INVALID_ARGUMENT,l+n+c)}function Cy(n,e){return n.some((t=>t.isEqual(e)))}/**
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
 */class rl{constructor(e,t,r,i,s){this._firestore=e,this._userDataWriter=t,this._key=r,this._document=i,this._converter=s}get id(){return this._key.path.lastSegment()}get ref(){return new Wt(this._firestore,this._converter,this._key)}exists(){return this._document!==null}data(){if(this._document){if(this._converter){const e=new dR(this._firestore,this._userDataWriter,this._key,this._document,null);return this._converter.fromFirestore(e)}return this._userDataWriter.convertValue(this._document.data.value)}}get(e){if(this._document){const t=this._document.data.field(Tu("DocumentSnapshot.get",e));if(t!==null)return this._userDataWriter.convertValue(t)}}}class dR extends rl{data(){return super.data()}}function Tu(n,e){return typeof e=="string"?sf(n,e):e instanceof yu?e._internalPath:e._delegate._internalPath}/**
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
 */function fR(n){if(n.limitType==="L"&&n.explicitOrderBy.length===0)throw new B(x.UNIMPLEMENTED,"limitToLast() queries require specifying at least one orderBy() clause")}class of{}class Iu extends of{}function Wo(n,e,...t){let r=[];e instanceof of&&r.push(e),r=r.concat(t),(function(s){const a=s.filter((c=>c instanceof af)).length,l=s.filter((c=>c instanceof Au)).length;if(a>1||a>0&&l>0)throw new B(x.INVALID_ARGUMENT,"InvalidQuery. When using composite filters, you cannot use more than one filter at the top level. Consider nesting the multiple filters within an `and(...)` statement. For example: change `query(query, where(...), or(...))` to `query(query, and(where(...), or(...)))`.")})(r);for(const i of r)n=i._apply(n);return n}class Au extends Iu{constructor(e,t,r){super(),this._field=e,this._op=t,this._value=r,this.type="where"}static _create(e,t,r){return new Au(e,t,r)}_apply(e){const t=this._parse(e);return ky(e._query,t),new Oi(e.firestore,e.converter,qh(e._query,t))}_parse(e){const t=tf(e.firestore);return(function(s,a,l,c,h,f,g){let _;if(h.isKeyField()){if(f==="array-contains"||f==="array-contains-any")throw new B(x.INVALID_ARGUMENT,`Invalid Query. You can't perform '${f}' queries on documentId().`);if(f==="in"||f==="not-in"){um(g,f);const S=[];for(const P of g)S.push(cm(c,s,P));_={arrayValue:{values:S}}}else _=cm(c,s,g)}else f!=="in"&&f!=="not-in"&&f!=="array-contains-any"||um(g,f),_=by(l,a,g,f==="in"||f==="not-in");return jt.create(h,f,_)})(e._query,"where",t,e.firestore._databaseId,this._field,this._op,this._value)}}function gr(n,e,t){const r=e,i=Tu("where",n);return Au._create(i,r,t)}class af extends of{constructor(e,t){super(),this.type=e,this._queryConstraints=t}static _create(e,t){return new af(e,t)}_parse(e){const t=this._queryConstraints.map((r=>r._parse(e))).filter((r=>r.getFilters().length>0));return t.length===1?t[0]:Fr.create(t,this._getOperator())}_apply(e){const t=this._parse(e);return t.getFilters().length===0?e:((function(i,s){let a=i;const l=s.getFlattenedFilters();for(const c of l)ky(a,c),a=qh(a,c)})(e._query,t),new Oi(e.firestore,e.converter,qh(e._query,t)))}_getQueryConstraints(){return this._queryConstraints}_getOperator(){return this.type==="and"?"and":"or"}}class lf extends Iu{constructor(e,t){super(),this._field=e,this._direction=t,this.type="orderBy"}static _create(e,t){return new lf(e,t)}_apply(e){const t=(function(i,s,a){if(i.startAt!==null)throw new B(x.INVALID_ARGUMENT,"Invalid query. You must not call startAt() or startAfter() before calling orderBy().");if(i.endAt!==null)throw new B(x.INVALID_ARGUMENT,"Invalid query. You must not call endAt() or endBefore() before calling orderBy().");return new Za(s,a)})(e._query,this._field,this._direction);return new Oi(e.firestore,e.converter,(function(i,s){const a=i.explicitOrderBy.concat([s]);return new Xs(i.path,i.collectionGroup,a,i.filters.slice(),i.limit,i.limitType,i.startAt,i.endAt)})(e._query,t))}}function bu(n,e="asc"){const t=e,r=Tu("orderBy",n);return lf._create(r,t)}class cf extends Iu{constructor(e,t,r){super(),this.type=e,this._limit=t,this._limitType=r}static _create(e,t,r){return new cf(e,t,r)}_apply(e){return new Oi(e.firestore,e.converter,Vc(e._query,this._limit,this._limitType))}}function il(n){return bb("limit",n),cf._create("limit",n,"F")}class uf extends Iu{constructor(e,t,r){super(),this.type=e,this._docOrFields=t,this._inclusive=r}static _create(e,t,r){return new uf(e,t,r)}_apply(e){const t=pR(e,this.type,this._docOrFields,this._inclusive);return new Oi(e.firestore,e.converter,(function(i,s){return new Xs(i.path,i.collectionGroup,i.explicitOrderBy.slice(),i.filters.slice(),i.limit,i.limitType,s,i.endAt)})(e._query,t))}}function Py(...n){return uf._create("startAfter",n,!1)}function pR(n,e,t,r){if(t[0]=$t(t[0]),t[0]instanceof rl)return(function(s,a,l,c,h){if(!c)throw new B(x.NOT_FOUND,`Can't use a DocumentSnapshot that doesn't exist for ${l}().`);const f=[];for(const g of Ao(s))if(g.field.isKeyField())f.push(Oc(a,c.key));else{const _=c.data.field(g.field);if(cu(_))throw new B(x.INVALID_ARGUMENT,'Invalid query. You are trying to start or end a query using a document for which the field "'+g.field+'" is an uncommitted server timestamp. (Since the value of this field is unknown, you cannot start/end a query with it.)');if(_===null){const E=g.field.canonicalString();throw new B(x.INVALID_ARGUMENT,`Invalid query. You are trying to start or end a query using a document for which the field '${E}' (used as the orderBy) does not exist.`)}f.push(_)}return new Bo(f,h)})(n._query,n.firestore._databaseId,e,t[0]._document,r);{const i=tf(n.firestore);return(function(a,l,c,h,f,g){const _=a.explicitOrderBy;if(f.length>_.length)throw new B(x.INVALID_ARGUMENT,`Too many arguments provided to ${h}(). The number of arguments must be less than or equal to the number of orderBy() clauses`);const E=[];for(let S=0;S<f.length;S++){const P=f[S];if(_[S].field.isKeyField()){if(typeof P!="string")throw new B(x.INVALID_ARGUMENT,`Invalid query. Expected a string for document ID in ${h}(), but got a ${typeof P}`);if(!Md(a)&&P.indexOf("/")!==-1)throw new B(x.INVALID_ARGUMENT,`Invalid query. When querying a collection and ordering by documentId(), the value passed to ${h}() must be a plain document ID, but '${P}' contains a slash.`);const I=a.path.child(tt.fromString(P));if(!Z.isDocumentKey(I))throw new B(x.INVALID_ARGUMENT,`Invalid query. When querying a collection group and ordering by documentId(), the value passed to ${h}() must result in a valid document path, but '${I}' is not because it contains an odd number of segments.`);const L=new Z(I);E.push(Oc(l,L))}else{const I=by(c,h,P);E.push(I)}}return new Bo(E,g)})(n._query,n.firestore._databaseId,i,e,t,r)}}function cm(n,e,t){if(typeof(t=$t(t))=="string"){if(t==="")throw new B(x.INVALID_ARGUMENT,"Invalid query. When querying with documentId(), you must provide a valid document ID, but it was an empty string.");if(!Md(e)&&t.indexOf("/")!==-1)throw new B(x.INVALID_ARGUMENT,`Invalid query. When querying a collection by documentId(), you must provide a plain document ID, but '${t}' contains a '/' character.`);const r=e.path.child(tt.fromString(t));if(!Z.isDocumentKey(r))throw new B(x.INVALID_ARGUMENT,`Invalid query. When querying a collection group by documentId(), the value provided must result in a valid document path, but '${r}' is not because it has an odd number of segments (${r.length}).`);return Oc(n,new Z(r))}if(t instanceof Wt)return Oc(n,t._key);throw new B(x.INVALID_ARGUMENT,`Invalid query. When querying with documentId(), you must provide a valid string or a DocumentReference, but it was: ${ou(t)}.`)}function um(n,e){if(!Array.isArray(n)||n.length===0)throw new B(x.INVALID_ARGUMENT,`Invalid Query. A non-empty array is required for '${e.toString()}' filters.`)}function ky(n,e){const t=(function(i,s){for(const a of i)for(const l of a.getFlattenedFilters())if(s.indexOf(l.op)>=0)return l.op;return null})(n.filters,(function(i){switch(i){case"!=":return["!=","not-in"];case"array-contains-any":case"in":return["not-in"];case"not-in":return["array-contains-any","in","not-in","!="];default:return[]}})(e.op));if(t!==null)throw t===e.op?new B(x.INVALID_ARGUMENT,`Invalid query. You cannot use more than one '${e.op.toString()}' filter.`):new B(x.INVALID_ARGUMENT,`Invalid query. You cannot use '${e.op.toString()}' filters with '${t.toString()}' filters.`)}class Ny{convertValue(e,t="none"){switch(ds(e)){case 0:return null;case 1:return e.booleanValue;case 2:return Ft(e.integerValue||e.doubleValue);case 3:return this.convertTimestamp(e.timestampValue);case 4:return this.convertServerTimestamp(e,t);case 5:return e.stringValue;case 6:return this.convertBytes(hs(e.bytesValue));case 7:return this.convertReference(e.referenceValue);case 8:return this.convertGeoPoint(e.geoPointValue);case 9:return this.convertArray(e.arrayValue,t);case 11:return this.convertObject(e.mapValue,t);case 10:return this.convertVectorValue(e.mapValue);default:throw ie(62114,{value:e})}}convertObject(e,t){return this.convertObjectMap(e.fields,t)}convertObjectMap(e,t="none"){const r={};return Js(e,((i,s)=>{r[i]=this.convertValue(s,t)})),r}convertVectorValue(e){var t,r,i;const s=(i=(r=(t=e.fields)===null||t===void 0?void 0:t[Dc].arrayValue)===null||r===void 0?void 0:r.values)===null||i===void 0?void 0:i.map((a=>Ft(a.doubleValue)));return new ii(s)}convertGeoPoint(e){return new ri(Ft(e.latitude),Ft(e.longitude))}convertArray(e,t){return(e.values||[]).map((r=>this.convertValue(r,t)))}convertServerTimestamp(e,t){switch(t){case"previous":const r=uu(e);return r==null?null:this.convertValue(r,t);case"estimate":return this.convertTimestamp(Ya(e));default:return null}}convertTimestamp(e){const t=us(e);return new yt(t.seconds,t.nanos)}convertDocumentKey(e,t){const r=tt.fromString(e);it(Xv(r),9688,{name:e});const i=new Ja(r.get(1),r.get(3)),s=new Z(r.popFirst(5));return i.isEqual(t)||Pi(`Document ${s} contains a document reference within a different database (${i.projectId}/${i.database}) which is not supported. It will be treated as a reference in the current database (${t.projectId}/${t.database}) instead.`),s}}/**
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
 */function mR(n,e,t){let r;return r=n?t&&(t.merge||t.mergeFields)?n.toFirestore(e,t):n.toFirestore(e):e,r}class gR extends Ny{constructor(e){super(),this.firestore=e}convertBytes(e){return new ir(e)}convertReference(e){const t=this.convertDocumentKey(e,this.firestore._databaseId);return new Wt(this.firestore,null,t)}}function _R(){return new rR("count")}class _o{constructor(e,t){this.hasPendingWrites=e,this.fromCache=t}isEqual(e){return this.hasPendingWrites===e.hasPendingWrites&&this.fromCache===e.fromCache}}class rs extends rl{constructor(e,t,r,i,s,a){super(e,t,r,i,a),this._firestore=e,this._firestoreImpl=e,this.metadata=s}exists(){return super.exists()}data(e={}){if(this._document){if(this._converter){const t=new mc(this._firestore,this._userDataWriter,this._key,this._document,this.metadata,null);return this._converter.fromFirestore(t,e)}return this._userDataWriter.convertValue(this._document.data.value,e.serverTimestamps)}}get(e,t={}){if(this._document){const r=this._document.data.field(Tu("DocumentSnapshot.get",e));if(r!==null)return this._userDataWriter.convertValue(r,t.serverTimestamps)}}toJSON(){if(this.metadata.hasPendingWrites)throw new B(x.FAILED_PRECONDITION,"DocumentSnapshot.toJSON() attempted to serialize a document with pending writes. Await waitForPendingWrites() before invoking toJSON().");const e=this._document,t={};return t.type=rs._jsonSchemaVersion,t.bundle="",t.bundleSource="DocumentSnapshot",t.bundleName=this._key.toString(),!e||!e.isValidDocument()||!e.isFoundDocument()?t:(this._userDataWriter.convertObjectMap(e.data.value.mapValue.fields,"previous"),t.bundle=(this._firestore,this.ref.path,"NOT SUPPORTED"),t)}}rs._jsonSchemaVersion="firestore/documentSnapshot/1.0",rs._jsonSchema={type:Ht("string",rs._jsonSchemaVersion),bundleSource:Ht("string","DocumentSnapshot"),bundleName:Ht("string"),bundle:Ht("string")};class mc extends rs{data(e={}){return super.data(e)}}class So{constructor(e,t,r,i){this._firestore=e,this._userDataWriter=t,this._snapshot=i,this.metadata=new _o(i.hasPendingWrites,i.fromCache),this.query=r}get docs(){const e=[];return this.forEach((t=>e.push(t))),e}get size(){return this._snapshot.docs.size}get empty(){return this.size===0}forEach(e,t){this._snapshot.docs.forEach((r=>{e.call(t,new mc(this._firestore,this._userDataWriter,r.key,r,new _o(this._snapshot.mutatedKeys.has(r.key),this._snapshot.fromCache),this.query.converter))}))}docChanges(e={}){const t=!!e.includeMetadataChanges;if(t&&this._snapshot.excludesMetadataChanges)throw new B(x.INVALID_ARGUMENT,"To include metadata changes with your document changes, you must also pass { includeMetadataChanges:true } to onSnapshot().");return this._cachedChanges&&this._cachedChangesIncludeMetadataChanges===t||(this._cachedChanges=(function(i,s){if(i._snapshot.oldDocs.isEmpty()){let a=0;return i._snapshot.docChanges.map((l=>{const c=new mc(i._firestore,i._userDataWriter,l.doc.key,l.doc,new _o(i._snapshot.mutatedKeys.has(l.doc.key),i._snapshot.fromCache),i.query.converter);return l.doc,{type:"added",doc:c,oldIndex:-1,newIndex:a++}}))}{let a=i._snapshot.oldDocs;return i._snapshot.docChanges.filter((l=>s||l.type!==3)).map((l=>{const c=new mc(i._firestore,i._userDataWriter,l.doc.key,l.doc,new _o(i._snapshot.mutatedKeys.has(l.doc.key),i._snapshot.fromCache),i.query.converter);let h=-1,f=-1;return l.type!==0&&(h=a.indexOf(l.doc.key),a=a.delete(l.doc.key)),l.type!==1&&(a=a.add(l.doc),f=a.indexOf(l.doc.key)),{type:vR(l.type),doc:c,oldIndex:h,newIndex:f}}))}})(this,t),this._cachedChangesIncludeMetadataChanges=t),this._cachedChanges}toJSON(){if(this.metadata.hasPendingWrites)throw new B(x.FAILED_PRECONDITION,"QuerySnapshot.toJSON() attempted to serialize a document with pending writes. Await waitForPendingWrites() before invoking toJSON().");const e={};e.type=So._jsonSchemaVersion,e.bundleSource="QuerySnapshot",e.bundleName=kd.newId(),this._firestore._databaseId.database,this._firestore._databaseId.projectId;const t=[],r=[],i=[];return this.docs.forEach((s=>{s._document!==null&&(t.push(s._document),r.push(this._userDataWriter.convertObjectMap(s._document.data.value.mapValue.fields,"previous")),i.push(s.ref.path))})),e.bundle=(this._firestore,this.query._query,e.bundleName,"NOT SUPPORTED"),e}}function vR(n){switch(n){case 0:return"added";case 2:case 3:return"modified";case 1:return"removed";default:return ie(61501,{type:n})}}/**
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
 */function is(n){n=Uo(n,Wt);const e=Uo(n.firestore,Al);return JS(vu(e),n._key).then((t=>yR(e,n,t)))}So._jsonSchemaVersion="firestore/querySnapshot/1.0",So._jsonSchema={type:Ht("string",So._jsonSchemaVersion),bundleSource:Ht("string","QuerySnapshot"),bundleName:Ht("string"),bundle:Ht("string")};class Su extends Ny{constructor(e){super(),this.firestore=e}convertBytes(e){return new ir(e)}convertReference(e){const t=this.convertDocumentKey(e,this.firestore._databaseId);return new Wt(this.firestore,null,t)}}function sl(n){n=Uo(n,Oi);const e=Uo(n.firestore,Al),t=vu(e),r=new Su(e);return fR(n._query),XS(t,n._query).then((i=>new So(e,r,n,i)))}function yR(n,e,t){const r=t.docs.get(e._key),i=new Su(n);return new rs(n,i,e._key,r,new _o(t.hasPendingWrites,t.fromCache),e.converter)}function ER(n){return wR(n,{count:_R()})}function wR(n,e){const t=Uo(n.firestore,Al),r=vu(t),i=xb(e,((s,a)=>new g1(a,s.aggregateType,s._internalFieldPath)));return ZS(r,n._query,i).then((s=>(function(l,c,h){const f=new Su(l);return new iR(c,f,h)})(t,n,s)))}/**
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
 */const TR={maxAttempts:5};function Na(n,e){if((n=$t(n)).firestore!==e)throw new B(x.INVALID_ARGUMENT,"Provided document reference is from a different Firestore instance.");return n}/**
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
 */class IR{constructor(e,t){this._firestore=e,this._transaction=t,this._dataReader=tf(e)}get(e){const t=Na(e,this._firestore),r=new gR(this._firestore);return this._transaction.lookup([t._key]).then((i=>{if(!i||i.length!==1)return ie(24041);const s=i[0];if(s.isFoundDocument())return new rl(this._firestore,r,s.key,s,t.converter);if(s.isNoDocument())return new rl(this._firestore,r,t._key,null,t.converter);throw ie(18433,{doc:s})}))}set(e,t,r){const i=Na(e,this._firestore),s=mR(i.converter,t,r),a=lR(this._dataReader,"Transaction.set",i._key,s,i.converter!==null,r);return this._transaction.set(i._key,a),this}update(e,t,r,...i){const s=Na(e,this._firestore);let a;return a=typeof(t=$t(t))=="string"||t instanceof yu?uR(this._dataReader,"Transaction.update",s._key,t,r,i):cR(this._dataReader,"Transaction.update",s._key,t),this._transaction.update(s._key,a),this}delete(e){const t=Na(e,this._firestore);return this._transaction.delete(t._key),this}}/**
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
 */class AR extends IR{constructor(e,t){super(e,t),this._firestore=e}get(e){const t=Na(e,this._firestore),r=new Su(this._firestore);return super.get(e).then((i=>new rs(this._firestore,r,t._key,i._document,new _o(!1,!1),t.converter)))}}function hf(n,e,t){n=Uo(n,Al);const r=Object.assign(Object.assign({},TR),t);return(function(s){if(s.maxAttempts<1)throw new B(x.INVALID_ARGUMENT,"Max attempts must be at least 1")})(r),(function(s,a,l){const c=new ti;return s.asyncQueue.enqueueAndForget((async()=>{const h=await Ey(s);new KS(s.asyncQueue,h,l,a,c).zu()})),c.promise})(vu(n),(i=>e(new AR(n,i))),r)}function qs(){return new nf("serverTimestamp")}(function(e,t=!0){(function(i){na=i})(ea),ls(new Si("firestore",((r,{instanceIdentifier:i,options:s})=>{const a=r.getProvider("app").getImmediate(),l=new Al(new _b(r.getProvider("auth-internal")),new Eb(a,r.getProvider("app-check-internal")),(function(h,f){if(!Object.prototype.hasOwnProperty.apply(h.options,["projectId"]))throw new B(x.INVALID_ARGUMENT,'"projectId" not provided in firebase.initializeApp.');return new Ja(h.options.projectId,f)})(a,i),a);return s=Object.assign({useFetchStreams:t},s),l._setSettings(s),l}),"PUBLIC").setMultipleInstances(!0)),Ti(hp,dp,e),Ti(hp,dp,"esm2017")})();/**
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
 */const bR=new Map,SR={activated:!1,tokenObservers:[]};function Ur(n){return bR.get(n)||Object.assign({},SR)}const hm={RETRIAL_MIN_WAIT:30*1e3,RETRIAL_MAX_WAIT:960*1e3};/**
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
 */class RR{constructor(e,t,r,i,s){if(this.operation=e,this.retryPolicy=t,this.getWaitDuration=r,this.lowerBound=i,this.upperBound=s,this.pending=null,this.nextErrorWaitInterval=i,i>s)throw new Error("Proactive refresh lower bound greater than upper bound!")}start(){this.nextErrorWaitInterval=this.lowerBound,this.process(!0).catch(()=>{})}stop(){this.pending&&(this.pending.reject("cancelled"),this.pending=null)}isRunning(){return!!this.pending}async process(e){this.stop();try{this.pending=new Sh,this.pending.promise.catch(t=>{}),await CR(this.getNextRun(e)),this.pending.resolve(),await this.pending.promise,this.pending=new Sh,this.pending.promise.catch(t=>{}),await this.operation(),this.pending.resolve(),await this.pending.promise,this.process(!0).catch(()=>{})}catch(t){this.retryPolicy(t)?this.process(!1).catch(()=>{}):this.stop()}}getNextRun(e){if(e)return this.nextErrorWaitInterval=this.lowerBound,this.getWaitDuration();{const t=this.nextErrorWaitInterval;return this.nextErrorWaitInterval*=2,this.nextErrorWaitInterval>this.upperBound&&(this.nextErrorWaitInterval=this.upperBound),t}}}function CR(n){return new Promise(e=>{setTimeout(e,n)})}/**
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
 */const PR={"already-initialized":"You have already called initializeAppCheck() for FirebaseApp {$appName} with different options. To avoid this error, call initializeAppCheck() with the same options as when it was originally called. This will return the already initialized instance.","use-before-activation":"App Check is being used before initializeAppCheck() is called for FirebaseApp {$appName}. Call initializeAppCheck() before instantiating other Firebase services.","fetch-network-error":"Fetch failed to connect to a network. Check Internet connection. Original error: {$originalErrorMessage}.","fetch-parse-error":"Fetch client could not parse response. Original error: {$originalErrorMessage}.","fetch-status-error":"Fetch server returned an HTTP error status. HTTP status: {$httpStatus}.","storage-open":"Error thrown when opening storage. Original error: {$originalErrorMessage}.","storage-get":"Error thrown when reading from storage. Original error: {$originalErrorMessage}.","storage-set":"Error thrown when writing to storage. Original error: {$originalErrorMessage}.","recaptcha-error":"ReCAPTCHA error.","initial-throttle":"{$httpStatus} error. Attempts allowed again after {$time}",throttled:"Requests throttled due to previous {$httpStatus} error. Attempts allowed again after {$time}"},qc=new Zo("appCheck","AppCheck",PR);function Dy(n){if(!Ur(n).activated)throw qc.create("use-before-activation",{appName:n.name})}/**
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
 */const kR="firebase-app-check-database",NR=1,Yh="firebase-app-check-store";let ec=null;function DR(){return ec||(ec=new Promise((n,e)=>{try{const t=indexedDB.open(kR,NR);t.onsuccess=r=>{n(r.target.result)},t.onerror=r=>{var i;e(qc.create("storage-open",{originalErrorMessage:(i=r.target.error)===null||i===void 0?void 0:i.message}))},t.onupgradeneeded=r=>{const i=r.target.result;switch(r.oldVersion){case 0:i.createObjectStore(Yh,{keyPath:"compositeKey"})}}}catch(t){e(qc.create("storage-open",{originalErrorMessage:t==null?void 0:t.message}))}}),ec)}function OR(n,e){return VR(MR(n),e)}async function VR(n,e){const r=(await DR()).transaction(Yh,"readwrite"),s=r.objectStore(Yh).put({compositeKey:n,value:e});return new Promise((a,l)=>{s.onsuccess=c=>{a()},r.onerror=c=>{var h;l(qc.create("storage-set",{originalErrorMessage:(h=c.target.error)===null||h===void 0?void 0:h.message}))}})}function MR(n){return`${n.options.appId}-${n.name}`}/**
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
 */const Jh=new nu("@firebase/app-check");function dm(n,e){return m_()?OR(n,e).catch(t=>{Jh.warn(`Failed to write token to IndexedDB. Error: ${t}`)}):Promise.resolve()}/**
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
 */const xR={error:"UNKNOWN_ERROR"};function LR(n){return gd.encodeString(JSON.stringify(n),!1)}async function Xh(n,e=!1,t=!1){const r=n.app;Dy(r);const i=Ur(r);let s=i.token,a;if(s&&!Da(s)&&(i.token=void 0,s=void 0),!s){const h=await i.cachedTokenPromise;h&&(Da(h)?s=h:await dm(r,void 0))}if(!e&&s&&Da(s))return{token:s.token};let l=!1;try{i.exchangeTokenPromise||(i.exchangeTokenPromise=i.provider.getToken().finally(()=>{i.exchangeTokenPromise=void 0}),l=!0),s=await Ur(r).exchangeTokenPromise}catch(h){h.code==="appCheck/throttled"||h.code==="appCheck/initial-throttle"?Jh.warn(h.message):t&&Jh.error(h),a=h}let c;return s?a?Da(s)?c={token:s.token,internalError:a}:c=pm(a):(c={token:s.token},i.token=s,await dm(r,s)):c=pm(a),l&&qR(r,c),c}async function FR(n){const e=n.app;Dy(e);const{provider:t}=Ur(e);{const{token:r}=await t.getToken();return{token:r}}}function UR(n,e,t,r){const{app:i}=n,s=Ur(i),a={next:t,error:r,type:e};if(s.tokenObservers=[...s.tokenObservers,a],s.token&&Da(s.token)){const l=s.token;Promise.resolve().then(()=>{t({token:l.token}),fm(n)}).catch(()=>{})}s.cachedTokenPromise.then(()=>fm(n))}function Oy(n,e){const t=Ur(n),r=t.tokenObservers.filter(i=>i.next!==e);r.length===0&&t.tokenRefresher&&t.tokenRefresher.isRunning()&&t.tokenRefresher.stop(),t.tokenObservers=r}function fm(n){const{app:e}=n,t=Ur(e);let r=t.tokenRefresher;r||(r=$R(n),t.tokenRefresher=r),!r.isRunning()&&t.isTokenAutoRefreshEnabled&&r.start()}function $R(n){const{app:e}=n;return new RR(async()=>{const t=Ur(e);let r;if(t.token?r=await Xh(n,!0):r=await Xh(n),r.error)throw r.error;if(r.internalError)throw r.internalError},()=>!0,()=>{const t=Ur(e);if(t.token){let r=t.token.issuedAtTimeMillis+(t.token.expireTimeMillis-t.token.issuedAtTimeMillis)*.5+3e5;const i=t.token.expireTimeMillis-300*1e3;return r=Math.min(r,i),Math.max(0,r-Date.now())}else return 0},hm.RETRIAL_MIN_WAIT,hm.RETRIAL_MAX_WAIT)}function qR(n,e){const t=Ur(n).tokenObservers;for(const r of t)try{r.type==="EXTERNAL"&&e.error!=null?r.error(e.error):r.next(e)}catch{}}function Da(n){return n.expireTimeMillis-Date.now()>0}function pm(n){return{token:LR(xR),error:n}}/**
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
 */class BR{constructor(e,t){this.app=e,this.heartbeatServiceProvider=t}_delete(){const{tokenObservers:e}=Ur(this.app);for(const t of e)Oy(this.app,t.next);return Promise.resolve()}}function zR(n,e){return new BR(n,e)}function jR(n){return{getToken:e=>Xh(n,e),getLimitedUseToken:()=>FR(n),addTokenListener:e=>UR(n,"INTERNAL",e),removeTokenListener:e=>Oy(n.app,e)}}const HR="@firebase/app-check",WR="0.10.1",GR="app-check",mm="app-check-internal";function KR(){ls(new Si(GR,n=>{const e=n.getProvider("app").getImmediate(),t=n.getProvider("heartbeat");return zR(e,t)},"PUBLIC").setInstantiationMode("EXPLICIT").setInstanceCreatedCallback((n,e,t)=>{n.getProvider(mm).initialize()})),ls(new Si(mm,n=>{const e=n.getProvider("app-check").getImmediate();return jR(e)},"PUBLIC").setInstantiationMode("EXPLICIT")),Ti(HR,WR)}KR();const Vy={apiKey:void 0,authDomain:void 0,projectId:void 0,appId:void 0,messagingSenderId:void 0},My=Object.values(Vy).every(Boolean),Go=My?y_().length?v_():yd(Vy):null,Bc=Go?iv(Go):null,gm=Go?tR(Go,{ignoreUndefinedProperties:!0}):null,_m=Go?y_().find(n=>n.name==="employee-account-provisioning")??yd(Go.options,"employee-account-provisioning"):null,vm=_m?iv(_m):null;function or(){if(!Bc||!gm)throw new Error("Configure as variáveis Firebase no arquivo .env antes de usar o sistema.");return{auth:Bc,db:gm}}function QR(){if(!vm)throw new Error("Configure as variáveis Firebase no arquivo .env antes de cadastrar mantenedores.");return vm}const zc="@staff.estoquearmazem.invalid";function bi(n){return n.trim().toLocaleLowerCase("pt-BR").normalize("NFD").replace(/[\u0300-\u036f]/g,"")}function df(n){return(n==null?void 0:n.endsWith(zc))===!0}function Ba(n){return`${bi(n)}${zc}`}async function ym(n){const e=await crypto.subtle.digest("SHA-256",new TextEncoder().encode(n));return[...new Uint8Array(e)].map(t=>t.toString(16).padStart(2,"0")).join("")}function YR(n){const e=new Set,t=n.flatMap(r=>bi(r).split(/[^a-z0-9]+/)).filter(Boolean);for(const r of t)for(let i=2;i<=Math.min(r.length,20);i++)e.add(r.slice(0,i));return[...e].slice(0,300)}function Zh(n){return Number.isFinite(n)&&n>=0&&n<=1e9&&Math.abs(n*1e3-Math.round(n*1e3))<1e-6}async function JR(n,e){const{auth:t}=or(),r=Ba(n);try{return await W_(t,r,e)}catch(i){const s=i.code;throw s==="auth/invalid-credential"||s==="auth/user-not-found"||s==="auth/invalid-email"?new Error("Matrícula ou senha incorretos."):i}}async function XR(n,e){const{auth:t}=or();return(await W_(t,n,e)).user}async function ZR(n){const{db:e}=or();if(df(n.email)){const r=await is(un(e,"employeeAuth",n.uid));if(!r.exists()||r.get("active")!==!0)throw new Error("Acesso de mantenedor inativo ou não cadastrado.");const i=await is(un(e,"employees",r.get("employeeId")));if(!i.exists()||i.get("active")!==!0||i.get("authUid")!==n.uid||i.get("loginEmail")!==n.email||Ba(String(i.get("matricula")))!==n.email)throw new Error("Acesso de mantenedor inativo ou não cadastrado.");return{role:"employee",employee:{id:i.id,...i.data()}}}const t=await is(un(e,"admins",n.uid));if(!t.exists()||t.get("active")===!1)throw new Error("Esta conta não está autorizada como administradora.");return{role:"admin",employee:null}}async function Em(n,e){const{db:t}=or(),r=Ys(t,"items"),i=bi(n);if(i){const a=i.split(/\s+/)[0].slice(0,20);return a.length<2?{items:[],cursor:void 0}:{items:(await sl(Wo(r,gr("active","==",!0),gr("searchTokens","array-contains",a),il(40)))).docs.map(c=>({id:c.id,...c.data()})),cursor:void 0}}const s=await sl(Wo(r,gr("active","==",!0),bu("name"),...e?[Py(e)]:[],il(40)));return{items:s.docs.map(a=>({id:a.id,...a.data()})),cursor:s.docs.at(-1)}}async function wm(){const{db:n}=or();return(await sl(Wo(Ys(n,"items"),bu("name"),il(300)))).docs.map(t=>({id:t.id,...t.data()}))}async function Tm(){const{db:n}=or();return(await sl(Wo(Ys(n,"employees"),bu("name"),il(300)))).docs.map(t=>({id:t.id,...t.data()}))}async function lh(n,e){const{db:t,auth:r}=or(),i=Ys(t,"stockMovements"),s=r.currentUser,a=df((s==null?void 0:s.email)??null),l=[];if(a&&s){const h=await is(un(t,"employeeAuth",s.uid));if(!h.exists()||h.get("active")!==!0)throw new Error("Acesso de mantenedor inativo ou não cadastrado.");l.push(gr("employeeId","==",h.get("employeeId")))}const c=await sl(Wo(i,...l,bu("createdAt","desc"),...e?[Py(e)]:[],il(100)));return{movements:c.docs.map(h=>({id:h.id,...h.data()})),cursor:c.docs.at(-1)}}async function eC(){const{db:n}=or(),e=Ys(n,"items"),t=Ys(n,"stockMovements"),r=new Date().getTimezoneOffset(),i=new Date(Date.now()-r*6e4),s=Date.UTC(i.getUTCFullYear(),i.getUTCMonth(),i.getUTCDate())+r*6e4,a=[gr("createdAt",">=",yt.fromMillis(s))],l=async(P,I)=>(await ER(Wo(P,...I))).data().count,[c,h,f,g,_,E,S]=await Promise.all([l(e,[]),l(e,[gr("active","==",!0)]),l(e,[gr("active","==",!0),gr("stockStatus","==","empty")]),l(e,[gr("active","==",!0),gr("stockStatus","==","low")]),l(t,a),l(t,[...a,gr("movementType","==","entry")]),l(t,[...a,gr("movementType","==","withdrawal")])]);return{data:{itemCount:c,activeItemCount:h,stockOutCount:f,lowStockCount:g,movementCount:_,todayEntries:E,todayWithdrawals:S}}}async function Im(n){const{auth:e,db:t}=or(),r=e.currentUser;if(!r)throw new Error("Entre no sistema para movimentar o estoque.");if(!Zh(n.quantity)||n.quantity<=0)throw new Error("Quantidade inválida.");const i=df(r.email),s=un(t,"employeeAuth",r.uid),a=i?await is(s):void 0;if(i&&(!(a!=null&&a.exists())||a.get("active")!==!0))throw new Error("Acesso de mantenedor inativo ou não cadastrado.");const l=i?String((a==null?void 0:a.get("employeeId"))??""):"",c=i?un(t,"employees",l):void 0,h=un(t,"items",n.itemId),f=`${r.uid}_${n.idempotencyKey}`,g=un(t,"stockMovements",f),_=typeof n.reason=="string"?n.reason.trim().slice(0,250):"";return{data:{quantityAfter:await hf(t,async S=>{const[P,I,L]=await Promise.all([S.get(h),S.get(g),c?S.get(c):Promise.resolve(void 0)]);if(I.exists())return Number(I.get("quantityAfter"));if(!P.exists()||P.get("active")!==!0)throw new Error("Item indisponível.");const U=L==null?void 0:L.data();if(i){if(!U||U.authUid!==r.uid||U.active!==!0)throw new Error("Funcionário inativo.");if(n.movementType==="entry"&&U.canAdd!==!0)throw new Error("Sem permissão para adicionar materiais.");if(n.movementType==="withdrawal"&&U.canWithdraw!==!0)throw new Error("Sem permissão para retirar materiais.")}const q=Number(P.get("quantity")),Y=q+(n.movementType==="entry"?n.quantity:-n.quantity);if(Y<0)throw new Error("Estoque insuficiente para essa retirada.");const Me={itemId:n.itemId,itemNameSnapshot:P.get("name"),itemCode:P.get("code"),employeeId:i?l:r.uid,employeeNameSnapshot:i?String((U==null?void 0:U.name)??""):r.displayName??r.email??"Administração",matriculaSnapshot:i?String((U==null?void 0:U.matricula)??""):"ADMIN",movementType:n.movementType,quantity:n.quantity,quantityBefore:q,quantityAfter:Y,reason:_,createdAt:qs(),idempotencyKey:n.idempotencyKey};return S.update(h,{quantity:Y,stockStatus:Y<=0?"empty":Y<=Number(P.get("minimumStock"))?"low":"normal",updatedAt:qs(),lastMovementId:f}),S.set(g,Me),Y})}}}async function tC(n){const{auth:e,db:t}=or();if(!e.currentUser)throw new Error("Entre com a conta administrativa para cadastrar itens.");const r=typeof n.name=="string"?n.name.trim():"",i=typeof n.code=="string"?n.code.trim():"",s=Number(n.quantity),a=Number(n.minimumStock);if(!r||r.length>120||!i||i.length>64||!Zh(s)||!Zh(a))throw new Error("Confira nome, código e quantidades do item.");const l=Array.isArray(n.customFields)?n.customFields:[];if(l.length>30||l.some(I=>!I||typeof I!="object"||typeof I.label!="string"||!I.label.trim()||typeof I.value!="string"||!I.value.trim()))throw new Error("Cada informação adicional precisa de nome e valor (limite de 30 campos).");const c=typeof n.itemId=="string"&&n.itemId?n.itemId:crypto.randomUUID(),h=un(t,"items",c),f=bi(i),g=un(t,"itemCodes",await ym(f)),_=await is(h),E=_.exists()?un(t,"itemCodes",await ym(bi(String(_.get("code"))))):void 0,S=_.exists()?bi(String(_.get("code"))):"",P={name:r,code:i,description:String(n.description??"").slice(0,2e3),category:String(n.category??"").slice(0,80),itemType:["piece","component","tool","machine"].includes(String(n.itemType))?n.itemType:"piece",trackingMode:n.trackingMode==="asset"?"asset":"quantity",unit:String(n.unit??"UN").slice(0,20),quantity:s,minimumStock:a,stockStatus:s<=0?"empty":s<=a?"low":"normal",rackNumber:String(n.rackNumber??"").slice(0,20),shelfNumber:String(n.shelfNumber??"").slice(0,20),locationNote:String(n.locationNote??"").slice(0,100),imageUrl:String(n.imageUrl??""),imageObjectKey:"",customFields:l.map(I=>({id:typeof I.id=="string"?I.id:crypto.randomUUID(),label:I.label.trim(),value:I.value.trim()})),active:n.active!==!1,searchTokens:YR([r,i,String(n.description??""),...l.flatMap(I=>[I.label,I.value])]),updatedAt:qs()};return await hf(t,async I=>{var Y,Me;const L=await I.get(h),U=await I.get(g),q=E&&E.path!==g.path?await I.get(E):void 0;if(U.exists()&&U.get("itemId")!==c)throw new Error("Já existe um item com esse código.");if(typeof n.itemId=="string"&&!L.exists())throw new Error("Item não encontrado.");if(L.exists()&&Number(L.get("quantity"))!==s)throw new Error("Altere o saldo por uma movimentação de estoque.");I.set(h,{...P,...L.exists()?{}:{createdAt:qs()}},{merge:!0}),I.set(g,{itemId:c}),!L.exists()&&s>0&&I.set(un(t,"stockMovements",`initial_${c}`),{itemId:c,itemNameSnapshot:r,itemCode:i,employeeId:(Y=e.currentUser)==null?void 0:Y.uid,employeeNameSnapshot:((Me=e.currentUser)==null?void 0:Me.email)??"Administração",matriculaSnapshot:"ADMIN",movementType:"entry",quantity:s,quantityBefore:0,quantityAfter:s,reason:"Saldo inicial do cadastro",createdAt:qs(),idempotencyKey:`initial_${c}`}),(q!=null&&q.exists()&&E&&q.get("itemId")===c||S&&S!==f&&E)&&I.delete(E)}),{data:{itemId:c}}}async function nC(n){const{db:e}=or(),t=typeof n.name=="string"?n.name.trim():"",r=typeof n.matricula=="string"?n.matricula.trim():"",i=n.active!==!1;if(!t||t.length>120||!/^[a-zA-Z0-9._-]{2,32}$/.test(r))throw new Error("Confira nome e matrícula.");const s=typeof n.employeeId=="string"&&n.employeeId?n.employeeId:un(Ys(e,"employees")).id,a=un(e,"employees",s),l=un(e,"employeeLookup",bi(r)),h=(await is(a)).data(),f=h!=null&&h.matricula?un(e,"employeeLookup",bi(String(h.matricula))):void 0;let g=typeof(h==null?void 0:h.authUid)=="string"?h.authUid:"",_=typeof(h==null?void 0:h.loginEmail)=="string"?h.loginEmail:"",E=null;const S=QR();if(g&&_.endsWith(zc)&&_!==Ba(r))throw new Error("A matrícula não pode ser alterada depois de criar o acesso. Desative este cadastro e crie outro para trocar a matrícula.");if(!g||!_.endsWith(zc)){const P=typeof n.password=="string"?n.password:"";if(P.length<6)throw new Error("Defina uma senha inicial com pelo menos 6 caracteres para o mantenedor.");const I=await is(l);if(I.exists()&&I.get("employeeId")!==s)throw new Error("Essa matrícula já está cadastrada.");const L=await JA(S,Ba(r),P);E=L.user,g=L.user.uid,_=L.user.email??Ba(r)}try{await hf(e,async P=>{const[I,L,U]=await Promise.all([P.get(a),P.get(l),f&&f.path!==l.path?P.get(f):Promise.resolve(void 0)]);if(L.exists()&&L.get("employeeId")!==s)throw new Error("Essa matrícula já está cadastrada.");if(typeof n.employeeId=="string"&&!I.exists())throw new Error("Funcionário não encontrado.");const q={name:t,matricula:r,matriculaNormalized:bi(r),active:i,canAdd:n.canAdd===!0,canWithdraw:n.canWithdraw===!0,authUid:g,loginEmail:_,createdAt:I.exists()?I.get("createdAt"):qs(),updatedAt:qs()};P.set(a,q),P.set(un(e,"employeeAuth",g),{employeeId:s,active:i}),h!=null&&h.authUid&&h.authUid!==g&&P.set(un(e,"employeeAuth",String(h.authUid)),{employeeId:s,active:!1}),P.set(l,{employeeId:s,loginEmail:_}),U!=null&&U.exists()&&f&&f.path!==l.path&&P.delete(f)})}catch(P){if(E)try{await t0(E)}catch(I){throw new AggregateError([P,I],"Não foi possível salvar o mantenedor nem remover a conta Auth criada.")}throw P}finally{S.currentUser&&await G_(S)}return{data:{employeeId:s}}}async function rC(n,e){const t=await createImageBitmap(n),r=Math.min(1,1e3/Math.max(t.width,t.height)),i=document.createElement("canvas");i.width=Math.round(t.width*r),i.height=Math.round(t.height*r);const s=i.getContext("2d");if(!s)throw new Error("Não foi possível preparar a imagem.");s.drawImage(t,0,0,i.width,i.height),t.close();const a=await new Promise((c,h)=>i.toBlob(f=>f?c(f):h(new Error("Falha ao comprimir a imagem.")),"image/webp",.72));if(a.size>450*1024)throw new Error("A imagem comprimida excede 450 KB para armazenamento no Firestore.");return{imageUrl:await new Promise((c,h)=>{const f=new FileReader;f.onload=()=>typeof f.result=="string"?c(f.result):h(new Error("Falha ao ler a imagem.")),f.onerror=()=>h(new Error("Falha ao ler a imagem.")),f.readAsDataURL(a)}),imageObjectKey:""}}async function iC(n){const{auth:e}=or();return YA(e,n)}async function Am(){const{auth:n}=or();return G_(n)}var sC=J('<meta name="apple-mobile-web-app-title" content="Estoque"/> <meta name="theme-color" content="#f3f5f2"/>',1),oC=J('<article class="movement-row"><span><!></span><div class="movement-copy"><strong> </strong><span> </span><small> </small></div><div><strong> </strong><small> </small></div></article>'),aC=J('<div class="movement-list"></div>'),lC=J('<main class="entry-screen"><section class="entry-content" role="status" aria-live="polite"><div class="brand-mark"><!></div> <p class="eyebrow">ARMAZÉM · CONTROLE INTERNO</p> <h1>VERIFICANDO<br/>ACESSO</h1> <p class="entry-hint">Aguarde enquanto verificamos sua sessão.</p></section></main>'),cC=J('<form class="access-form"><label for="email">E-MAIL</label> <div class="input-wrap"><!><input id="email" type="email" autocomplete="username" placeholder="nome@empresa.com" required=""/></div> <label for="password" class="second-label">SENHA</label> <div class="input-wrap"><!><input id="password" type="password" autocomplete="current-password" placeholder="Sua senha" required=""/></div> <button class="primary-button" type="submit"> <span aria-hidden="true">↗</span></button> <button class="text-button reset-button" type="button">Recuperar senha</button></form>'),uC=J('<form class="access-form"><label for="matricula">MATRÍCULA</label> <div class="input-wrap"><!><input id="matricula" inputmode="text" autocomplete="off" placeholder="Digite sua matrícula" required=""/></div> <label for="employee-password" class="second-label">SENHA</label> <div class="input-wrap"><!><input id="employee-password" type="password" autocomplete="current-password" placeholder="Senha do mantenedor" required=""/></div> <button class="primary-button" type="submit"> <span aria-hidden="true">↗</span></button></form>'),tc=J('<p class="form-message error-message" role="alert"> </p>'),hC=J('<p class="form-message success-message" role="status"> </p>'),dC=J('<p class="form-message setup-message">Configure as variáveis Firebase do arquivo `.env` para conectar este sistema.</p>'),fC=J('<main class="entry-screen"><button class="admin-shortcut" aria-label="Acesso administrativo" title="Acesso administrativo"><!></button> <section class="entry-content" aria-labelledby="page-title"><div class="brand-mark"><!></div> <p class="eyebrow">ARMAZÉM · CONTROLE INTERNO</p> <h1 id="page-title"> </h1> <p class="entry-hint"> </p> <!> <!> <!> <!> <p class="connection-note"><span></span> ACESSO RESTRITO A USUÁRIOS AUTORIZADOS</p></section> <footer>ESTOQUE · OPERAÇÃO E MANUTENÇÃO</footer></main>'),bm=J('<div class="inline-message error-message" role="alert"><!><span> </span><button aria-label="Fechar aviso"><!></button></div>'),Sm=J('<div class="inline-message success-message" role="status"><!> <button aria-label="Fechar aviso"><!></button></div>'),pC=J('<tr><td><button class="table-link"> </button></td><td> </td><td> </td><td><span> </span></td><td> </td></tr>'),mC=J('<div class="table-scroll"><table><thead><tr><th>ITEM</th><th>CÓDIGO</th><th>LOCALIZAÇÃO</th><th>DISPONÍVEL</th><th>MÍNIMO</th></tr></thead><tbody></tbody></table></div>'),gC=J('<p class="empty-state">Nenhum item precisa de reposição.</p>'),_C=J('<button class="quiet-button">Carregar movimentações <!></button>'),vC=J('<section class="overview-page"><div class="metric-grid"><article class="metric"><p>TOTAL DE ITENS</p><strong> </strong><span>no catálogo</span><!></article> <article class="metric"><p>ITENS ATIVOS</p><strong> </strong><span>disponíveis para consulta</span><!></article> <article class="metric alert-metric"><p>SEM ESTOQUE</p><strong> </strong><span>reposição imediata</span><!></article> <article class="metric warn-metric"><p>ESTOQUE BAIXO</p><strong> </strong><span>no limite mínimo</span><!></article> <article class="metric"><p>MOVIMENTAÇÕES HOJE</p><strong> </strong><span>registradas no servidor</span><!></article> <article class="metric"><p>ENTRADAS HOJE</p><strong> </strong><span>materiais adicionados</span><!></article> <article class="metric"><p>RETIRADAS HOJE</p><strong> </strong><span>materiais retirados</span><!></article></div> <section class="content-section restock-section"><div class="section-heading"><div><p class="eyebrow">ATENÇÃO</p><h2>Reposição necessária</h2></div><button class="quiet-button">Ver todos <!></button></div> <!></section> <section class="content-section today-section"><div class="section-heading"><div><p class="eyebrow">ATIVIDADE</p><h2>Movimentações recentes</h2></div><button class="quiet-button">Abrir histórico <!></button></div> <!></section></section>'),Rm=J('<img alt="" loading="lazy"/>'),yC=J('<span class="mini-placeholder"><!></span>'),EC=J('<tr><td><div class="item-cell"><!><div><strong> </strong><small> </small></div></div></td><td> </td><td> </td><td> </td><td><span> </span></td><td><div class="row-actions"><button class="icon-action" aria-label="Adicionar ao estoque" title="Adicionar ao estoque"><!></button><button class="icon-action" aria-label="Retirar do estoque" title="Retirar do estoque"><!></button><button class="icon-action" aria-label="Editar item" title="Editar item"><!></button></div></td></tr>'),wC=J('<tr><td colspan="6"><p class="empty-state">Nenhum item encontrado.</p></td></tr>'),TC=J('<section class="content-section records-page"><div class="section-heading"><div><p class="eyebrow">CATÁLOGO</p><h2>Materiais cadastrados</h2></div><button class="primary-action"><!> Novo item</button></div> <div class="toolbar"><div class="search-box"><!><input placeholder="Buscar por nome, código ou informação"/></div><label class="location-filter"><!><input placeholder="Estante ou prateleira"/></label></div> <div class="table-scroll"><table><thead><tr><th>ITEM</th><th>CÓDIGO</th><th>LOCALIZAÇÃO</th><th>QUANTIDADE</th><th>SITUAÇÃO</th><th></th></tr></thead><tbody></tbody></table></div></section>'),IC=J('<tr><td><strong> </strong></td><td> </td><td> </td><td> </td><td><span> </span></td><td><button class="icon-action" aria-label="Editar funcionário" title="Editar funcionário"><!></button></td></tr>'),AC=J('<tr><td colspan="6"><p class="empty-state">Nenhum funcionário cadastrado.</p></td></tr>'),bC=J('<section class="content-section records-page"><div class="section-heading"><div><p class="eyebrow">ACESSO INTERNO</p><h2>Cadastro de funcionários</h2></div><button class="primary-action"><!> Novo funcionário</button></div> <div class="table-scroll"><table><thead><tr><th>NOME</th><th>MATRÍCULA</th><th>ADICIONAR</th><th>RETIRAR</th><th>ACESSO</th><th></th></tr></thead><tbody></tbody></table></div></section>'),SC=J('<p class="empty-state">Nenhuma movimentação corresponde ao filtro.</p>'),Cm=J('<button class="load-more"> <!></button>'),RC=J('<section class="content-section records-page"><div class="section-heading"><div><p class="eyebrow">AUDITORIA</p><h2>Histórico imutável</h2></div></div> <div class="toolbar movement-filters"><div class="search-box"><!><input placeholder="Filtrar funcionário, matrícula, item ou código"/></div><select aria-label="Tipo de movimentação"><option>Todos os tipos</option><option>Entradas</option><option>Retiradas</option></select><label class="date-filter">DE<input type="date"/></label><label class="date-filter">ATÉ<input type="date"/></label><button class="quiet-button">Atualizar <!></button></div> <!> <!></section>'),CC=J('<main class="admin-layout"><aside class="admin-rail"><a class="rail-brand" href="#inicio" aria-label="Controle de estoque"><!></a> <nav aria-label="Administração"><button title="Visão geral" aria-label="Visão geral"><!></button> <button title="Itens" aria-label="Itens"><!></button> <button title="Funcionários" aria-label="Funcionários"><!></button> <button title="Movimentações" aria-label="Movimentações"><!></button></nav> <button class="rail-logout" aria-label="Sair" title="Sair"><!></button></aside> <section class="admin-main"><header class="topbar"><div><p class="eyebrow">ARMAZÉM / ADMINISTRAÇÃO</p><h1> </h1></div> <div class="user-chip"><!><span>Administrador</span><button aria-label="Sair"><!></button></div></header> <!> <!> <!></section></main>'),PC=J("<img/>"),kC=J('<div class="large-placeholder"><!></div>'),NC=J('<p class="detail-description"> </p>'),DC=J('<p class="location-note"> </p>'),OC=J("<div><dt> </dt><dd> </dd></div>"),VC=J('<section class="custom-fields"><p class="eyebrow">INFORMAÇÕES ADICIONAIS</p><dl></dl></section>'),MC=J('<button type="button"><!> Retirar</button>'),xC=J('<button type="button"><!> Adicionar</button>'),LC=J('<p class="form-hint">Seu acesso não permite movimentações. Solicite a liberação ao administrador.</p>'),FC=J("<span>→</span> após operação <strong> </strong>",1),UC=J('<section class="detail-page"><button class="back-button"><!> VOLTAR À LISTA</button> <div class="detail-grid"><div class="detail-image"><!></div> <div class="detail-main"><div class="detail-title-row"><div><p class="eyebrow"> </p><h1> </h1></div><span> </span></div> <!> <div class="detail-facts"><div class="quantity-fact"><span>DISPONÍVEL</span><strong> <small> </small></strong></div><div><span>LOCALIZAÇÃO</span><strong class="location-emphasis"> </strong></div><div><span>ESTOQUE MÍNIMO</span><strong> </strong></div><div><span>TIPO</span><strong> </strong></div></div> <!> <!> <form class="movement-panel"><div class="section-heading"><div><p class="eyebrow">MOVIMENTAÇÃO</p><h2>Registrar operação</h2></div></div> <div class="segmented"><!> <!></div> <!> <div class="movement-inputs"><label>QUANTIDADE<input type="number" min="0.001" step="0.001" required=""/></label><label>MOTIVO <span>(opcional)</span><input maxlength="250" placeholder="Ex.: manutenção preventiva"/></label></div> <p class="balance-preview">Saldo atual <strong> </strong><!></p> <button class="primary-action confirm-movement" type="submit"> <!></button></form></div></div></section>'),$C=J('<div class="card-placeholder"><!></div>'),qC=J(" <span> </span>",1),BC=J('<button class="inventory-card"><div class="card-image"><!></div> <div class="card-body"><div class="card-heading"><span class="eyebrow"> </span><span></span></div><h2> </h2><p class="card-location"> </p><div class="card-footer"><strong><!></strong><span> </span></div></div></button>'),zC=J('<div class="inventory-grid"></div>'),jC=J('<div class="empty-stock"><!><p>Nenhum material encontrado.</p><span>Confira o código ou tente outro termo.</span></div>'),HC=J('<section class="inventory-page"><div class="inventory-intro"><div><p class="eyebrow">CONSULTA RÁPIDA</p><h1>Encontre seu material.</h1></div><p> </p></div> <div class="search-box main-search"><!><input placeholder="Nome, código ou informação adicional" aria-label="Buscar materiais"/><kbd>↵</kbd></div> <div class="quick-filter-row"><label class="location-filter"><!><input placeholder="Filtrar por estante ou prateleira"/></label><span><span class="dot normal-dot"></span>Disponível <span class="dot low-dot"></span>Baixo <span class="dot empty-dot"></span>Zerado</span></div> <!> <!></section>'),WC=J('<main class="stock-app"><header class="stock-header"><div class="stock-brand"><div class="brand-mark"><!></div><div><p class="eyebrow">ARMAZÉM · ESTOQUE</p><strong> </strong></div></div> <div class="employee-chip"><span> </span><button title="Sair ou trocar funcionário" aria-label="Sair ou trocar funcionário"><!></button></div></header> <!> <!> <!></main>'),GC=J('<p class="entry-hint">Aguarde enquanto confirmamos seu acesso.</p>'),KC=J('<p class="form-message error-message" role="alert"> </p> <button class="primary-button">VOLTAR AO LOGIN <span aria-hidden="true">↗</span></button>',1),QC=J('<main class="entry-screen"><section class="entry-content"><div class="brand-mark"><!></div> <p class="eyebrow">ARMAZÉM · CONTROLE INTERNO</p> <h1> </h1> <!></section></main>'),YC=J('<div class="image-actions"><img class="upload-preview" alt="Prévia do item"/><button type="button" class="remove-image"><!> Excluir fotografia</button></div>'),JC=J('<div class="custom-row"><label>Nome do campo<input maxlength="60" placeholder="Ex.: Fabricante"/></label><label>Informação<input maxlength="250" placeholder="Valor"/></label><button type="button" class="remove-field" aria-label="Remover campo" title="Remover campo"><!></button></div>'),XC=J('<p class="form-hint">Nenhuma informação adicional.</p>'),ZC=J('<div class="dialog-backdrop" role="presentation"><dialog open="" class="edit-dialog" aria-labelledby="item-dialog-title"><header class="dialog-header"><div><p class="eyebrow">CATÁLOGO DE ESTOQUE</p><h2 id="item-dialog-title"> </h2></div><button class="icon-action" aria-label="Fechar"><!></button></header> <form class="dialog-form"><div class="form-grid"><label>Nome do item<input maxlength="120" required=""/></label><label>Código único<input maxlength="64" required=""/></label><label>Categoria<input maxlength="80"/></label><label>Tipo<select><option>Peça</option><option>Componente</option><option>Ferramenta</option><option>Máquina</option></select></label><label>Controle<select><option>Quantidade</option><option>Individual (série/patrimônio)</option></select></label><label>Unidade<input maxlength="20" required=""/></label><label>Quantidade inicial<input type="number" min="0" step="0.001" required=""/></label><label>Estoque mínimo<input type="number" min="0" step="0.001" required=""/></label><label>Estante<input maxlength="20"/></label><label>Prateleira<input maxlength="20"/></label><label>Localização complementar<input maxlength="100"/></label><label class="wide-field">Descrição<textarea maxlength="2000" rows="3"></textarea></label><label class="wide-field upload-control"><span>Fotografia do item</span><span class="upload-box"><!> <input type="file" accept="image/*"/></span><!></label><label class="check-label"><input type="checkbox"/> Item ativo</label></div> <section class="custom-editor"><div class="section-heading"><div><p class="eyebrow">FLEXÍVEL POR ITEM</p><h3>Informações adicionais</h3></div><button type="button" class="add-field-button"><!> Adicionar campo</button></div> <!> <!></section> <!> <div class="dialog-actions"><button class="quiet-button" type="button">Cancelar</button><button class="primary-action" type="submit"> <!></button></div></form></dialog></div>'),eP=J('<label class="wide-field">Senha inicial do mantenedor<input type="password" minlength="6" autocomplete="new-password" required=""/><span class="form-hint">Necessária para criar o acesso deste mantenedor. Ele entrará com matrícula e senha.</span></label>'),tP=J('<div class="dialog-backdrop" role="presentation"><dialog open="" class="edit-dialog employee-dialog" aria-labelledby="employee-dialog-title"><header class="dialog-header"><div><p class="eyebrow">ACESSO INTERNO</p><h2 id="employee-dialog-title"> </h2></div><button class="icon-action" aria-label="Fechar"><!></button></header> <form class="dialog-form"><div class="form-grid"><label class="wide-field">Nome completo<input maxlength="120" required=""/></label><label class="wide-field">Matrícula<input maxlength="32" required=""/></label> <!> <label class="check-label"><input type="checkbox"/> Acesso ativo</label><label class="check-label"><input type="checkbox"/> Pode adicionar materiais</label><label class="check-label"><input type="checkbox"/> Pode retirar materiais</label></div> <!> <div class="dialog-actions"><button class="quiet-button" type="button">Cancelar</button><button class="primary-action" type="submit"> <!></button></div></form></dialog></div>'),nP=J('<div class="dialog-backdrop" role="presentation"><dialog open="" class="edit-dialog employee-dialog" aria-labelledby="admin-movement-title"><header class="dialog-header"><div><p class="eyebrow">AJUSTE AUDITÁVEL</p><h2 id="admin-movement-title">Movimentar estoque</h2></div><button class="icon-action" aria-label="Fechar"><!></button></header> <form class="dialog-form"><p class="admin-movement-item"><strong> </strong><span> </span></p> <div class="segmented"><button type="button"><!> Retirar</button><button type="button"><!> Adicionar</button></div> <div class="form-grid admin-movement-fields"><label>Quantidade<input type="number" min="0.001" step="0.001" required=""/></label><label>Motivo<input maxlength="250" placeholder="Motivo do ajuste"/></label></div> <!> <div class="dialog-actions"><button class="quiet-button" type="button">Cancelar</button><button class="primary-action" type="submit"> <!></button></div></form></dialog></div>'),rP=J("<!> <!> <!> <!>",1);function iP(n,e){id(e,!0);const t=(O,$=td)=>{var fe=aC();zi(fe,21,$,ve=>ve.id,(ve,ne)=>{var ot=oC(),ht=R(ot);let He;var sn=R(ht);{var dt=pe=>{Yu(pe,{size:18})},at=pe=>{jl(pe,{size:18})};Te(sn,pe=>{p(ne).movementType==="entry"?pe(dt):pe(at,-1)})}var ft=y(ht),nt=R(ft),We=G(nt,!0),It=y(nt),Kt=G(It),Dt=y(It),Qt=G(Dt),Ot=y(ft);let kt;var Vt=R(Ot),xe=G(Vt),te=y(Vt),_e=G(te);we(pe=>{He=_n(ht,1,"movement-icon",null,He,{"movement-in":p(ne).movementType==="entry"}),j(We,p(ne).itemNameSnapshot),j(Kt,`${p(ne).employeeNameSnapshot??""} · ${p(ne).matriculaSnapshot??""} · ${p(ne).itemCode??""}`),j(Qt,`${(p(ne).reason||(p(ne).movementType==="entry"?"Entrada":"Retirada"))??""} · ${pe??""}`),kt=_n(Ot,1,"movement-quantity",null,kt,{"entry-quantity":p(ne).movementType==="entry"}),j(xe,`${p(ne).movementType==="entry"?"+":"−"}${p(ne).quantity??""}`),j(_e,`${p(ne).quantityBefore??""} → ${p(ne).quantityAfter??""}`)},[()=>{var pe;return hi((pe=p(ne).createdAt)==null?void 0:pe.seconds)}]),H(ve,ot)}),H(O,fe)},r=()=>({name:"",code:"",description:"",category:"",itemType:"piece",trackingMode:"quantity",unit:"UN",quantity:0,minimumStock:0,rackNumber:"",shelfNumber:"",locationNote:"",imageUrl:"",imageObjectKey:"",customFields:[],active:!0});let i=X(null),s=X(null),a=X(null),l=X("overview"),c=X(!1),h=X(""),f=X(""),g=X(""),_=X(""),E=X(!1),S=X(!0),P=X(""),I=X(""),L=X(""),U=X(""),q=X(_r([])),Y=X(void 0),Me=X(!1),Q=X(!1),A=X(_r([])),v=X(_r([])),w=X(_r([])),b=X(void 0),C=X(!1),k=X(!1),T=X(_r({itemCount:0,activeItemCount:0,stockOutCount:0,lowStockCount:0,movementCount:0,todayEntries:0,todayWithdrawals:0})),ee=X(null),Pt=X("withdrawal"),hn=X(1),ar=X(""),lr=X(""),Gt=X(""),Qn=X(!1),li=X(!1),On=X(!1),st=X(null),$r=X("entry"),cr=X(1),to=X(""),oe=X(_r(r())),gs=X(""),dn=X(_r({name:"",matricula:"",password:"",active:!0,canAdd:!0,canWithdraw:!0})),qr=X(""),ci=X(!0),Tr=X(null),_s=X(""),Vi=X("all"),Mi=X(""),vs=X("");Vw(()=>{if(!Bc){D(S,!1);return}return e0(Bc,async O=>{var fe,ve;if(D(i,O,!0),D(s,null),D(a,null),!O){D(s,null),D(a,null),D(q,[],!0),D(S,!1);return}D(S,!0),D(P,"");let $;try{$=await ZR(O)}catch(ne){nn(ne);try{await Am()}finally{D(S,!1)}return}try{D(s,$.role,!0),D(a,$.role==="employee"?$.employee:null,!0),(fe=p(a))!=null&&fe.canAdd&&!p(a).canWithdraw?D(Pt,"entry"):(ve=p(a))!=null&&ve.canWithdraw&&D(Pt,"withdrawal"),await sa(),p(s)==="admin"&&await no()}catch(ne){nn(ne)}finally{D(S,!1)}})}),_h(()=>{const O=p(L);if(!p(i)||!p(s)||p(ee))return;const $=setTimeout(()=>sa(O),250);return()=>clearTimeout($)}),_h(()=>{p(s)==="admin"&&(p(l)==="employees"&&Sl(),p(l)==="movements"&&Li())});async function sa(O=p(L)){try{if(D(Y,void 0),D(Me,!1),p(s)==="admin"){const $=await wm();D(A,$,!0),D(q,O.trim()?ys($,O):$.filter(fe=>fe.active),!0)}else{const $=await Em(O);D(q,O.trim()?ys($.items,O):$.items,!0),D(Y,$.cursor,!0),D(Me,!!($.cursor&&$.items.length===40),!0)}}catch($){nn($)}}async function Ru(){if(!(!p(Y)||p(Q)||p(L).trim())){D(Q,!0);try{const O=await Em("",p(Y));D(q,[...p(q),...O.items],!0),D(Y,O.cursor,!0),D(Me,!!(O.cursor&&O.items.length===40),!0)}catch(O){nn(O)}finally{D(Q,!1)}}}function ys(O,$){const ve=xi($).split(/\s+/).filter(Boolean);return O.filter(ne=>{const ot=xi([ne.name,ne.code,ne.description,ne.category,...ne.customFields.flatMap(He=>[He.label,He.value])].join(" ")),ht=`${ne.rackNumber} ${ne.shelfNumber}`.toLowerCase();return ve.every(He=>ot.includes(He)||ht.includes(He))})}function xi(O){return O.trim().toLocaleLowerCase("pt-BR").normalize("NFD").replace(/[\u0300-\u036f]/g,"")}async function no(){try{const[O,$,fe,ve]=await Promise.all([wm(),Tm(),lh(),eC()]);D(A,O,!0),D(v,$,!0),D(w,fe.movements,!0),D(b,fe.cursor,!0),D(C,fe.movements.length===100),D(T,ve.data,!0),D(q,p(L).trim()?ys(p(A),p(L)):p(A).filter(ne=>ne.active),!0)}catch(O){nn(O)}}async function Sl(){try{D(v,await Tm(),!0)}catch(O){nn(O)}}async function Li(){D(b,void 0);try{const O=await lh();D(w,O.movements,!0),D(b,O.cursor,!0),D(C,O.movements.length===100)}catch(O){nn(O)}}async function oa(){if(!(!p(b)||p(k))){D(k,!0);try{const O=await lh(void 0,p(b));D(w,[...p(w),...O.movements],!0),D(b,O.cursor,!0),D(C,O.movements.length===100)}catch(O){nn(O)}finally{D(k,!1)}}}async function Rl(O){O.preventDefault(),D(E,!0),pn();try{await JR(p(h).trim(),p(f)),D(h,""),D(f,"")}catch($){nn($)}finally{D(E,!1)}}async function tn(O){O.preventDefault(),D(E,!0),pn();try{await XR(p(g).trim(),p(_))}catch($){nn($)}finally{D(E,!1)}}async function fn(){if(!p(g).trim()){D(P,"Informe o e-mail administrativo para recuperar a senha.");return}D(E,!0);try{await iC(p(g).trim()),D(I,"Enviamos as instruções de recuperação para o e-mail.")}catch(O){nn(O)}finally{D(E,!1)}}async function ui(){await Am(),D(ee,null),D(l,"overview"),pn()}async function Cl(O){if(O.preventDefault(),!(!p(ee)||p(hn)<=0)){if(p(Pt)==="withdrawal"&&p(hn)>p(ee).quantity){D(P,"Não há quantidade suficiente para essa retirada.");return}D(E,!0),pn();try{const $=JSON.stringify([p(ee).id,p(Pt),p(hn),p(Gt).trim()]);$!==p(lr)&&(D(lr,$,!0),D(ar,crypto.randomUUID(),!0));const fe=await Im({itemId:p(ee).id,movementType:p(Pt),quantity:p(hn),reason:p(Gt).trim(),idempotencyKey:p(ar)});D(ar,""),D(lr,""),D(I,p(Pt)==="entry"?"Entrada registrada.":"Retirada registrada.",!0),D(hn,1),D(Gt,""),await sa(),D(ee,{...p(ee),quantity:fe.data.quantityAfter},!0);const ve=p(q).find(ne=>{var ot;return ne.id===((ot=p(ee))==null?void 0:ot.id)});ve&&D(ee,ve,!0),p(s)==="admin"&&await Li()}catch($){nn($)}finally{D(E,!1)}}}function Pl(){D(oe,r(),!0),D(gs,crypto.randomUUID(),!0),D(Tr,null),D(Qn,!0)}function kl(O){D(oe,{name:O.name,code:O.code,description:O.description,category:O.category,itemType:O.itemType,trackingMode:O.trackingMode,unit:O.unit,quantity:O.quantity,minimumStock:O.minimumStock,rackNumber:O.rackNumber,shelfNumber:O.shelfNumber,locationNote:O.locationNote,imageUrl:O.imageUrl,imageObjectKey:O.imageObjectKey,customFields:O.customFields.map($=>({...$})),active:O.active},!0),D(gs,O.id,!0),D(Tr,null),D(ee,null),D(Qn,!0)}function Es(){if(p(oe).customFields.length>=30){D(P,"Limite de 30 informações adicionais por item.");return}p(oe).customFields=[...p(oe).customFields,{id:crypto.randomUUID(),label:"",value:""}]}async function Nl(O){if(O.preventDefault(),pn(),p(oe).customFields.some($=>!$.label.trim()||!$.value.trim())){D(P,"Preencha o nome e o valor de cada informação adicional ou remova o campo vazio.");return}D(E,!0);try{if(p(Tr)){const $=await rC(p(Tr),p(gs));p(oe).imageUrl=$.imageUrl,p(oe).imageObjectKey=$.imageObjectKey}await tC({...p(oe),itemId:p(gs)}),D(Qn,!1),p(I)||D(I,"Cadastro do item salvo."),await no()}catch($){nn($)}finally{D(E,!1)}}async function Dl(){p(oe).imageUrl="",p(oe).imageObjectKey="",D(Tr,null)}function aa(){D(dn,{name:"",matricula:"",password:"",active:!0,canAdd:!0,canWithdraw:!0},!0),D(qr,""),D(ci,!0),D(li,!0)}function Cu(O){D(dn,{name:O.name,matricula:O.matricula,password:"",active:O.active,canAdd:O.canAdd,canWithdraw:O.canWithdraw},!0),D(qr,O.id,!0);const $=`${O.matricula.toLowerCase()}@staff.estoquearmazem.invalid`;D(ci,O.loginEmail!==$),D(li,!0)}async function Pu(O){O.preventDefault(),D(E,!0),pn();try{await nC({...p(dn),...p(qr)?{employeeId:p(qr)}:{}}),D(li,!1),D(I,"Cadastro do funcionário salvo."),await Sl()}catch($){nn($)}finally{D(E,!1)}}function ro(O,$){D(st,O,!0),D($r,$,!0),D(cr,1),D(to,""),pn(),D(On,!0)}async function Ol(O){if(O.preventDefault(),!!p(st)){if(p($r)==="withdrawal"&&p(cr)>p(st).quantity){D(P,"Não há quantidade suficiente para essa retirada.");return}D(E,!0),pn();try{await Im({itemId:p(st).id,movementType:p($r),quantity:p(cr),reason:p(to).trim(),idempotencyKey:crypto.randomUUID()}),D(On,!1),D(I,"Movimentação administrativa registrada no histórico."),await no()}catch($){nn($)}finally{D(E,!1)}}}function nn(O){const $=O,fe={"auth/invalid-credential":"E-mail ou senha incorretos.","auth/network-request-failed":"Sem conexão com o servidor. Movimentações exigem conexão ativa."};D(P,$.code&&fe[$.code]?fe[$.code]:$.message??"Ocorreu um erro. Tente novamente.",!0)}function pn(){D(P,""),D(I,"")}function Fi(O){return O.rackNumber&&O.shelfNumber?`E-${O.rackNumber.padStart(2,"0")} / P-${O.shelfNumber.padStart(2,"0")}`:"LOCALIZAÇÃO NÃO CADASTRADA"}function Un(O){return O.quantity<=0?"empty":O.quantity<=O.minimumStock?"low":"normal"}function hi(O){return O?new Intl.DateTimeFormat("pt-BR",{dateStyle:"short",timeStyle:"short"}).format(new Date(O*1e3)):"Agora"}function Vl(O){var ve;const $=(ve=O.createdAt)!=null&&ve.seconds?new Date(O.createdAt.seconds*1e3):new Date,fe=`${$.getFullYear()}-${String($.getMonth()+1).padStart(2,"0")}-${String($.getDate()).padStart(2,"0")}`;return(!p(Mi)||fe>=p(Mi))&&(!p(vs)||fe<=p(vs))}let ws=rr(()=>p(w).filter(O=>xi(`${O.employeeNameSnapshot} ${O.matriculaSnapshot} ${O.itemNameSnapshot} ${O.itemCode} ${O.movementType}`).includes(xi(p(_s)))&&(p(Vi)==="all"||O.movementType===p(Vi))&&Vl(O))),Ml=rr(()=>p(T).stockOutCount),Ts=rr(()=>p(T).lowStockCount);var la=rP();Ew("1n46o8q",O=>{var $=sC();Zc(()=>{cg.title="Controle de Estoque"}),H(O,$)});var rn=Ia(la);{var xl=O=>{var $=lC(),fe=R($),ve=R(fe),ne=R(ve);uo(ne,{size:25,strokeWidth:1.8}),H(O,$)},Is=O=>{var $=fC(),fe=R($),ve=R(fe);{var ne=te=>{kf(te,{size:19})},ot=te=>{Ku(te,{size:19})};Te(ve,te=>{p(c)?te(ne):te(ot,-1)})}var ht=y(fe,2),He=R(ht),sn=R(He);uo(sn,{size:25,strokeWidth:1.8});var dt=y(He,4),at=G(dt,!0),ft=y(dt,2),nt=G(ft,!0),We=y(ft,2);{var It=te=>{var _e=cC(),pe=y(R(_e),2),lt=R(pe);cT(lt,{size:19});var rt=y(lt),pt=y(pe,4),ct=R(pt);Ku(ct,{size:18});var Ye=y(ct),ge=y(pt,2),Pe=R(ge),mt=y(ge,2);we(()=>{ge.disabled=p(E),j(Pe,`${p(E)?"VALIDANDO...":"ENTRAR"} `)}),lo("submit",_e,tn),Qe(rt,()=>p(g),me=>D(g,me)),Qe(Ye,()=>p(_),me=>D(_,me)),he("click",mt,fn),H(te,_e)},Kt=te=>{var _e=uC(),pe=y(R(_e),2),lt=R(pe);Wl(lt,{size:19,"aria-hidden":"true"});var rt=y(lt),pt=y(pe,4),ct=R(pt);Ku(ct,{size:18});var Ye=y(ct),ge=y(pt,2),Pe=R(ge);we(mt=>{ge.disabled=mt,j(Pe,`${p(E)?"VALIDANDO...":"ACESSAR"} `)},[()=>p(E)||!p(h).trim()]),lo("submit",_e,Rl),Qe(rt,()=>p(h),mt=>D(h,mt)),Qe(Ye,()=>p(f),mt=>D(f,mt)),H(te,_e)};Te(We,te=>{p(c)?te(It):te(Kt,-1)})}var Dt=y(We,2);{var Qt=te=>{var _e=tc(),pe=G(_e,!0);we(()=>j(pe,p(P))),H(te,_e)};Te(Dt,te=>{p(P)&&te(Qt)})}var Ot=y(Dt,2);{var kt=te=>{var _e=hC(),pe=G(_e,!0);we(()=>j(pe,p(I))),H(te,_e)};Te(Ot,te=>{p(I)&&te(kt)})}var Vt=y(Ot,2);{var xe=te=>{var _e=dC();H(te,_e)};Te(Vt,te=>{My||te(xe)})}we(()=>{j(at,p(c)?`ACESSO
ADMINISTRATIVO`:`CONTROLE
DE ESTOQUE`),j(nt,p(c)?"Entre com sua conta administrativa.":"Identifique-se para consultar os materiais.")}),he("click",fe,()=>{D(c,!p(c)),pn()}),H(O,$)},As=O=>{var $=CC(),fe=R($),ve=R(fe),ne=R(ve);uo(ne,{size:22});var ot=y(ve,2),ht=R(ot);let He;var sn=R(ht);co(sn,{size:20});var dt=y(ht,2);let at;var ft=R(dt);pT(ft,{size:20});var nt=y(dt,2);let We;var It=R(nt);hT(It,{size:20});var Kt=y(nt,2);let Dt;var Qt=R(Kt);Nf(Qt,{size:20});var Ot=y(ot,2),kt=R(Ot);Qu(kt,{size:19});var Vt=y(fe,2),xe=R(Vt),te=R(xe),_e=y(R(te)),pe=G(_e,!0),lt=y(te,2),rt=R(lt);iT(rt,{size:17});var pt=y(rt,2),ct=R(pt);Qu(ct,{size:17});var Ye=y(xe,2);{var ge=Ge=>{var Ie=bm(),Le=R(Ie);Gu(Le,{size:18});var Ne=y(Le),Ae=G(Ne,!0),Je=y(Ne),Ke=R(Je);Rs(Ke,{size:17}),we(()=>j(Ae,p(P))),he("click",Je,()=>D(P,"")),H(Ge,Ie)};Te(Ye,Ge=>{p(P)&&Ge(ge)})}var Pe=y(Ye,2);{var mt=Ge=>{var Ie=Sm(),Le=R(Ie);_a(Le,{size:18});var Ne=y(Le,1,!0),Ae=y(Ne),Je=R(Ae);Rs(Je,{size:17}),we(()=>j(Ne,p(I))),he("click",Ae,()=>D(I,"")),H(Ge,Ie)};Te(Pe,Ge=>{p(I)&&Ge(mt)})}var me=y(Pe,2);{var ur=Ge=>{var Ie=vC(),Le=R(Ie),Ne=R(Le),Ae=y(R(Ne)),Je=G(Ae,!0),Ke=y(Ae,2);co(Ke,{size:20});var Mt=y(Ne,2),At=y(R(Mt)),gt=G(At,!0),Et=y(At,2);uo(Et,{size:20});var on=y(Mt,2),Yt=y(R(on)),mn=G(Yt,!0),_t=y(Yt,2);Gu(_t,{size:20});var Xe=y(on,2),ke=y(R(Xe)),Jt=G(ke,!0),xt=y(ke,2);jl(xt,{size:20});var Xt=y(Xe,2),Nt=y(R(Xt)),ye=G(Nt,!0),wt=y(Nt,2);Nf(wt,{size:20});var Lt=y(Xt,2),Ee=y(R(Lt)),Vn=G(Ee,!0),K=y(Ee,2);Yu(K,{size:20});var Ze=y(Lt,2),qe=y(R(Ze)),et=G(qe,!0),bt=y(qe,2);jl(bt,{size:20});var qn=y(Le,2),St=R(qn),Ar=y(R(St)),br=y(R(Ar));Hl(br,{size:16});var Bn=y(St,2);{var Mn=se=>{var Fe=mC(),an=R(Fe),zn=y(R(an));zi(zn,21,()=>p(A).filter(Xn=>Xn.active&&Xn.quantity<=Xn.minimumStock).slice(0,10),Xn=>Xn.id,(Xn,jn)=>{var dr=pC(),bs=R(dr),ua=R(bs),Ul=G(ua,!0),ha=y(bs),so=G(ha,!0),Tn=y(ha),$l=G(Tn,!0),da=y(Tn),pi=R(da);let o;var u=G(pi),d=y(da),m=G(d);we(N=>{j(Ul,p(jn).name),j(so,p(jn).code),j($l,N),o=_n(pi,1,"",null,o,{"danger-text":p(jn).quantity===0}),j(u,`${p(jn).quantity??""} ${p(jn).unit??""}`),j(m,`${p(jn).minimumStock??""} ${p(jn).unit??""}`)},[()=>Fi(p(jn))]),he("click",ua,()=>kl(p(jn))),H(Xn,dr)}),H(se,Fe)},hr=rr(()=>p(A).filter(se=>se.active&&se.quantity<=se.minimumStock).length),Br=se=>{var Fe=gC();H(se,Fe)};Te(Bn,se=>{p(hr)?se(Mn):se(Br,-1)})}var Ui=y(qn,2),Jn=R(Ui),fi=y(R(Jn)),Sr=y(R(fi));Hl(Sr,{size:16});var Rr=y(Jn,2);{var le=se=>{{let Fe=rr(()=>p(w).slice(0,5));t(se,()=>p(Fe))}},ce=se=>{var Fe=_C(),an=y(R(Fe));Hl(an,{size:16}),he("click",Fe,Li),H(se,Fe)};Te(Rr,se=>{p(w).length?se(le):se(ce,-1)})}we(()=>{j(Je,p(T).itemCount),j(gt,p(T).activeItemCount),j(mn,p(Ml)),j(Jt,p(Ts)),j(ye,p(T).movementCount),j(Vn,p(T).todayEntries),j(et,p(T).todayWithdrawals)}),he("click",Ar,()=>D(l,"items")),he("click",fi,()=>D(l,"movements")),H(Ge,Ie)},$n=Ge=>{var Ie=TC(),Le=R(Ie),Ne=y(R(Le)),Ae=R(Ne);va(Ae,{size:18});var Je=y(Le,2),Ke=R(Je),Mt=R(Ke);Wl(Mt,{size:19});var At=y(Mt),gt=y(Ke),Et=R(gt);Gl(Et,{size:17});var on=y(Et),Yt=y(Je,2),mn=R(Yt),_t=y(R(mn));zi(_t,21,()=>p(A).filter(Xe=>(!p(L).trim()||ys([Xe],p(L)).length)&&(!p(U)||`${Xe.rackNumber} ${Xe.shelfNumber}`.toLowerCase().includes(p(U).toLowerCase()))),Xe=>Xe.id,(Xe,ke)=>{var Jt=EC(),xt=R(Jt),Xt=R(xt),Nt=R(Xt);{var ye=se=>{var Fe=Rm();we(()=>gi(Fe,"src",p(ke).imageUrl)),H(se,Fe)},wt=se=>{var Fe=yC(),an=R(Fe);co(an,{size:18}),H(se,Fe)};Te(Nt,se=>{p(ke).imageUrl?se(ye):se(wt,-1)})}var Lt=y(Nt),Ee=R(Lt),Vn=G(Ee,!0),K=y(Ee),Ze=G(K,!0),qe=y(xt),et=G(qe,!0),bt=y(qe),qn=G(bt,!0),St=y(bt),Ar=G(St),br=y(St),Bn=R(br);let Mn;var hr=G(Bn,!0),Br=y(br),Ui=R(Br),Jn=R(Ui),fi=R(Jn);Yu(fi,{size:17});var Sr=y(Jn),Rr=R(Sr);jl(Rr,{size:17});var le=y(Sr),ce=R(le);Gl(ce,{size:18}),we((se,Fe,an,zn)=>{j(Vn,p(ke).name),j(Ze,p(ke).category||"Sem categoria"),j(et,p(ke).code),j(qn,se),j(Ar,`${p(ke).quantity??""} ${p(ke).unit??""}`),Mn=_n(Bn,1,"status-pill",null,Mn,{"status-empty":Fe,"status-low":an}),j(hr,zn)},[()=>Fi(p(ke)),()=>Un(p(ke))==="empty",()=>Un(p(ke))==="low",()=>p(ke).active?Un(p(ke))==="empty"?"SEM ESTOQUE":Un(p(ke))==="low"?"ESTOQUE BAIXO":"NORMAL":"INATIVO"]),he("click",Jn,()=>ro(p(ke),"entry")),he("click",Sr,()=>ro(p(ke),"withdrawal")),he("click",le,()=>kl(p(ke))),H(Xe,Jt)},Xe=>{var ke=wC();H(Xe,ke)}),he("click",Ne,Pl),Qe(At,()=>p(L),Xe=>D(L,Xe)),Qe(on,()=>p(U),Xe=>D(U,Xe)),H(Ge,Ie)},Yn=Ge=>{var Ie=bC(),Le=R(Ie),Ne=y(R(Le)),Ae=R(Ne);va(Ae,{size:18});var Je=y(Le,2),Ke=R(Je),Mt=y(R(Ke));zi(Mt,21,()=>p(v),At=>At.id,(At,gt)=>{var Et=IC(),on=R(Et),Yt=R(on),mn=G(Yt,!0),_t=y(on),Xe=G(_t,!0),ke=y(_t),Jt=G(ke,!0),xt=y(ke),Xt=G(xt,!0),Nt=y(xt),ye=R(Nt);let wt;var Lt=G(ye,!0),Ee=y(Nt),Vn=R(Ee),K=R(Vn);Gl(K,{size:18}),we(()=>{j(mn,p(gt).name),j(Xe,p(gt).matricula),j(Jt,p(gt).canAdd?"Permitido":"Não permitido"),j(Xt,p(gt).canWithdraw?"Permitido":"Não permitido"),wt=_n(ye,1,"status-pill",null,wt,{"status-empty":!p(gt).active}),j(Lt,p(gt).active?"ATIVO":"DESATIVADO")}),he("click",Vn,()=>Cu(p(gt))),H(At,Et)},At=>{var gt=AC();H(At,gt)}),he("click",Ne,aa),H(Ge,Ie)},Ir=Ge=>{var Ie=RC(),Le=y(R(Ie),2),Ne=R(Le),Ae=R(Ne);Wl(Ae,{size:19});var Je=y(Ae),Ke=y(Ne),Mt=R(Ke);Mt.value=Mt.__value="all";var At=y(Mt);At.value=At.__value="entry";var gt=y(At);gt.value=gt.__value="withdrawal",oc(Ke);var Et=y(Ke),on=y(R(Et)),Yt=y(Et),mn=y(R(Yt)),_t=y(Yt),Xe=y(R(_t));Wu(Xe,{size:16});var ke=y(Le,2);{var Jt=ye=>{t(ye,()=>p(ws))},xt=ye=>{var wt=SC();H(ye,wt)};Te(ke,ye=>{p(ws).length?ye(Jt):ye(xt,-1)})}var Xt=y(ke,2);{var Nt=ye=>{var wt=Cm(),Lt=R(wt),Ee=y(Lt);Wu(Ee,{size:18}),we(()=>{wt.disabled=p(k),j(Lt,`${p(k)?"CARREGANDO...":"CARREGAR MAIS MOVIMENTAÇÕES"} `)}),he("click",wt,oa),H(ye,wt)};Te(Xt,ye=>{p(C)&&ye(Nt)})}Qe(Je,()=>p(_s),ye=>D(_s,ye)),Bu(Ke,()=>p(Vi),ye=>D(Vi,ye)),Qe(on,()=>p(Mi),ye=>D(Mi,ye)),Qe(mn,()=>p(vs),ye=>D(vs,ye)),he("click",_t,Li),H(Ge,Ie)};Te(me,Ge=>{p(l)==="overview"?Ge(ur):p(l)==="items"?Ge($n,1):p(l)==="employees"?Ge(Yn,2):Ge(Ir,-1)})}we(()=>{He=_n(ht,1,"",null,He,{active:p(l)==="overview"}),at=_n(dt,1,"",null,at,{active:p(l)==="items"}),We=_n(nt,1,"",null,We,{active:p(l)==="employees"}),Dt=_n(Kt,1,"",null,Dt,{active:p(l)==="movements"}),j(pe,p(l)==="overview"?"Visão geral":p(l)==="items"?"Itens do estoque":p(l)==="employees"?"Funcionários":"Movimentações")}),he("click",ht,()=>D(l,"overview")),he("click",dt,()=>D(l,"items")),he("click",nt,()=>D(l,"employees")),he("click",Kt,()=>D(l,"movements")),he("click",Ot,ui),he("click",pt,ui),H(O,$)},ku=O=>{var $=WC(),fe=R($),ve=R(fe),ne=R(ve),ot=R(ne);uo(ot,{size:21});var ht=y(ne),He=y(R(ht)),sn=G(He,!0),dt=y(ve,2),at=R(dt),ft=G(at),nt=y(at),We=R(nt);Qu(We,{size:18});var It=y(fe,2);{var Kt=xe=>{var te=bm(),_e=R(te);Gu(_e,{size:18});var pe=y(_e),lt=G(pe,!0),rt=y(pe),pt=R(rt);Rs(pt,{size:17}),we(()=>j(lt,p(P))),he("click",rt,()=>D(P,"")),H(xe,te)};Te(It,xe=>{p(P)&&xe(Kt)})}var Dt=y(It,2);{var Qt=xe=>{var te=Sm(),_e=R(te);_a(_e,{size:18});var pe=y(_e,1,!0),lt=y(pe),rt=R(lt);Rs(rt,{size:17}),we(()=>j(pe,p(I))),he("click",lt,()=>D(I,"")),H(xe,te)};Te(Dt,xe=>{p(I)&&xe(Qt)})}var Ot=y(Dt,2);{var kt=xe=>{var te=UC(),_e=R(te),pe=R(_e);kf(pe,{size:18});var lt=y(_e,2),rt=R(lt),pt=R(rt);{var ct=le=>{var ce=PC();we(()=>{gi(ce,"src",p(ee).imageUrl),gi(ce,"alt",p(ee).name)}),H(le,ce)},Ye=le=>{var ce=kC(),se=R(ce);co(se,{size:44}),H(le,ce)};Te(pt,le=>{p(ee).imageUrl?le(ct):le(Ye,-1)})}var ge=y(rt,2),Pe=R(ge),mt=R(Pe),me=R(mt),ur=G(me),$n=y(me),Yn=G($n,!0),Ir=y(mt);let Ge;var Ie=G(Ir,!0),Le=y(Pe,2);{var Ne=le=>{var ce=NC(),se=G(ce,!0);we(()=>j(se,p(ee).description)),H(le,ce)};Te(Le,le=>{p(ee).description&&le(Ne)})}var Ae=y(Le,2),Je=R(Ae),Ke=y(R(Je)),Mt=R(Ke),At=y(Mt),gt=G(At,!0),Et=y(Je),on=y(R(Et)),Yt=G(on,!0),mn=y(Et),_t=y(R(mn)),Xe=G(_t),ke=y(mn),Jt=y(R(ke)),xt=G(Jt,!0),Xt=y(Ae,2);{var Nt=le=>{var ce=DC(),se=G(ce,!0);we(()=>j(se,p(ee).locationNote)),H(le,ce)};Te(Xt,le=>{p(ee).locationNote&&le(Nt)})}var ye=y(Xt,2);{var wt=le=>{var ce=VC(),se=y(R(ce));zi(se,21,()=>p(ee).customFields,Fe=>Fe.id,(Fe,an)=>{var zn=OC(),Xn=R(zn),jn=G(Xn,!0),dr=y(Xn),bs=G(dr,!0);we(()=>{j(jn,p(an).label),j(bs,p(an).value)}),H(Fe,zn)}),H(le,ce)};Te(ye,le=>{p(ee).customFields.length&&le(wt)})}var Lt=y(ye,2),Ee=y(R(Lt),2),Vn=R(Ee);{var K=le=>{var ce=MC();let se;var Fe=R(ce);Df(Fe,{size:17}),we(()=>se=_n(ce,1,"",null,se,{chosen:p(Pt)==="withdrawal"})),he("click",ce,()=>D(Pt,"withdrawal")),H(le,ce)};Te(Vn,le=>{var ce;(p(s)!=="employee"||(ce=p(a))!=null&&ce.canWithdraw)&&le(K)})}var Ze=y(Vn,2);{var qe=le=>{var ce=xC();let se;var Fe=R(ce);va(Fe,{size:17}),we(()=>se=_n(ce,1,"",null,se,{chosen:p(Pt)==="entry"})),he("click",ce,()=>D(Pt,"entry")),H(le,ce)};Te(Ze,le=>{var ce;(p(s)!=="employee"||(ce=p(a))!=null&&ce.canAdd)&&le(qe)})}var et=y(Ee,2);{var bt=le=>{var ce=LC();H(le,ce)};Te(et,le=>{var ce,se;p(s)==="employee"&&!((ce=p(a))!=null&&ce.canAdd)&&!((se=p(a))!=null&&se.canWithdraw)&&le(bt)})}var qn=y(et,2),St=R(qn),Ar=y(R(St)),br=y(St),Bn=y(R(br),2),Mn=y(qn,2),hr=y(R(Mn)),Br=G(hr),Ui=y(hr);{var Jn=le=>{var ce=FC(),se=y(Ia(ce),2),Fe=G(se);we(an=>j(Fe,`${an??""} ${p(ee).unit??""}`),[()=>Math.max(0,p(ee).quantity+(p(Pt)==="entry"?Number(p(hn)):-Number(p(hn))))]),H(le,ce)};Te(Ui,le=>{p(hn)>0&&le(Jn)})}var fi=y(Mn,2),Sr=R(fi),Rr=y(Sr);Hl(Rr,{size:18}),we((le,ce,se,Fe)=>{var an,zn;j(ur,`${p(ee).code??""} · ${(p(ee).category||"MATERIAL")??""}`),j(Yn,p(ee).name),Ge=_n(Ir,1,"status-pill",null,Ge,{"status-empty":le,"status-low":ce}),j(Ie,se),j(Mt,p(ee).quantity),j(gt,p(ee).unit),j(Yt,Fe),j(Xe,`${p(ee).minimumStock??""} ${p(ee).unit??""}`),j(xt,p(ee).itemType),j(Br,`${p(ee).quantity??""} ${p(ee).unit??""}`),fi.disabled=p(E)||p(hn)<1||p(s)==="employee"&&!((an=p(a))!=null&&an.canAdd)&&!((zn=p(a))!=null&&zn.canWithdraw)||p(Pt)==="withdrawal"&&p(hn)>p(ee).quantity,j(Sr,`${p(E)?"REGISTRANDO...":p(Pt)==="entry"?"CONFIRMAR ENTRADA":"CONFIRMAR RETIRADA"} `)},[()=>Un(p(ee))==="empty",()=>Un(p(ee))==="low",()=>Un(p(ee))==="empty"?"SEM ESTOQUE":Un(p(ee))==="low"?"ESTOQUE BAIXO":"NORMAL",()=>Fi(p(ee))]),he("click",_e,()=>{D(ee,null),pn()}),lo("submit",Lt,Cl),Qe(Ar,()=>p(hn),le=>D(hn,le)),Qe(Bn,()=>p(Gt),le=>D(Gt,le)),H(xe,te)},Vt=xe=>{var te=HC(),_e=R(te),pe=y(R(_e)),lt=G(pe),rt=y(_e,2),pt=R(rt);Wl(pt,{size:21});var ct=y(pt),Ye=y(rt,2),ge=R(Ye),Pe=R(ge);Gl(Pe,{size:17});var mt=y(Pe),me=y(Ye,2);{var ur=Ie=>{var Le=zC();zi(Le,21,()=>p(q).filter(Ne=>!p(U)||`${Ne.rackNumber} ${Ne.shelfNumber}`.toLowerCase().includes(p(U).toLowerCase())),Ne=>Ne.id,(Ne,Ae)=>{var Je=BC(),Ke=R(Je),Mt=R(Ke);{var At=qe=>{var et=Rm();we(()=>gi(et,"src",p(Ae).imageUrl)),H(qe,et)},gt=qe=>{var et=$C(),bt=R(et);co(bt,{size:25}),H(qe,et)};Te(Mt,qe=>{p(Ae).imageUrl?qe(At):qe(gt,-1)})}var Et=y(Ke,2),on=R(Et),Yt=R(on),mn=G(Yt,!0),_t=y(Yt);let Xe;var ke=y(on),Jt=G(ke,!0),xt=y(ke),Xt=G(xt,!0),Nt=y(xt),ye=R(Nt);let wt;var Lt=R(ye);{var Ee=qe=>{var et=nw("SEM ESTOQUE");H(qe,et)},Vn=qe=>{var et=qC(),bt=Ia(et),qn=y(bt),St=G(qn,!0);we(()=>{j(bt,`${p(Ae).quantity??""} `),j(St,p(Ae).unit)}),H(qe,et)};Te(Lt,qe=>{p(Ae).quantity===0?qe(Ee):qe(Vn,-1)})}var K=y(ye),Ze=G(K);we((qe,et,bt)=>{j(mn,p(Ae).code),Xe=_n(_t,1,"status-mark",null,Xe,{"mark-empty":qe,"mark-low":et}),j(Jt,p(Ae).name),j(Xt,bt),wt=_n(ye,1,"",null,wt,{"danger-text":p(Ae).quantity===0}),j(Ze,`mín. ${p(Ae).minimumStock??""}`)},[()=>Un(p(Ae))==="empty",()=>Un(p(Ae))==="low",()=>Fi(p(Ae))]),he("click",Je,()=>{D(ee,p(Ae),!0),pn()}),H(Ne,Je)}),H(Ie,Le)},$n=Ie=>{var Le=jC(),Ne=R(Le);co(Ne,{size:27}),H(Ie,Le)};Te(me,Ie=>{p(q).length?Ie(ur):Ie($n,-1)})}var Yn=y(me,2);{var Ir=Ie=>{var Le=Cm(),Ne=R(Le),Ae=y(Ne);Wu(Ae,{size:18}),we(()=>{Le.disabled=p(Q),j(Ne,`${p(Q)?"CARREGANDO...":"CARREGAR MAIS ITENS"} `)}),he("click",Le,Ru),H(Ie,Le)},Ge=rr(()=>p(Me)&&!p(L).trim());Te(Yn,Ie=>{p(Ge)&&Ie(Ir)})}we(()=>j(lt,`${p(q).length??""} ${p(q).length===1?"resultado":"resultados"}`)),Qe(ct,()=>p(L),Ie=>D(L,Ie)),Qe(mt,()=>p(U),Ie=>D(U,Ie)),H(xe,te)};Te(Ot,xe=>{p(ee)?xe(kt):xe(Vt,-1)})}we(()=>{var xe,te;j(sn,p(ee)?"Detalhes do item":"Consulta de materiais"),j(ft,`${((xe=p(a))==null?void 0:xe.name)??"Funcionário"??""} · ${((te=p(a))==null?void 0:te.matricula)??""}`)}),he("click",nt,ui),H(O,$)},Nu=O=>{var $=QC(),fe=R($),ve=R(fe),ne=R(ve);uo(ne,{size:25,strokeWidth:1.8});var ot=y(ve,4),ht=G(ot,!0),He=y(ot,2);{var sn=at=>{var ft=GC();H(at,ft)},dt=at=>{var ft=KC(),nt=Ia(ft),We=G(nt,!0),It=y(nt,2);we(()=>j(We,p(P)||"Não foi possível validar seu perfil. Tente novamente.")),he("click",It,ui),H(at,ft)};Te(He,at=>{p(S)?at(sn):at(dt,-1)})}we(()=>{gi(fe,"role",p(S)?"status":void 0),j(ht,p(S)?`VALIDANDO
ACESSO`:`NÃO FOI POSSÍVEL
ABRIR O PAINEL`)}),H(O,$)};Te(rn,O=>{p(S)&&!p(i)?O(xl):p(i)?p(s)==="admin"?O(As,2):p(s)==="employee"?O(ku,3):O(Nu,-1):O(Is,1)})}var di=y(rn,2);{var Du=O=>{var $=ZC(),fe=R($),ve=R(fe),ne=R(ve),ot=y(R(ne)),ht=G(ot,!0),He=y(ne),sn=R(He);Rs(sn,{size:20});var dt=y(ve,2),at=R(dt),ft=R(at),nt=y(R(ft)),We=y(ft),It=y(R(We)),Kt=y(We),Dt=y(R(Kt)),Qt=y(Kt),Ot=y(R(Qt)),kt=R(Ot);kt.value=kt.__value="piece";var Vt=y(kt);Vt.value=Vt.__value="component";var xe=y(Vt);xe.value=xe.__value="tool";var te=y(xe);te.value=te.__value="machine",oc(Ot);var _e=y(Qt),pe=y(R(_e)),lt=R(pe);lt.value=lt.__value="quantity";var rt=y(lt);rt.value=rt.__value="asset",oc(pe);var pt=y(_e),ct=y(R(pt)),Ye=y(pt),ge=y(R(Ye)),Pe=y(Ye),mt=y(R(Pe)),me=y(Pe),ur=y(R(me)),$n=y(me),Yn=y(R($n)),Ir=y($n),Ge=y(R(Ir)),Ie=y(Ir),Le=y(R(Ie)),Ne=y(Ie),Ae=y(R(Ne)),Je=R(Ae);aT(Je,{size:19});var Ke=y(Je,1,!0),Mt=y(Ke),At=y(Ae);{var gt=K=>{var Ze=YC(),qe=R(Ze),et=y(qe),bt=R(et);Of(bt,{size:16}),we(()=>{gi(qe,"src",p(oe).imageUrl),et.disabled=p(E)}),he("click",et,Dl),H(K,Ze)};Te(At,K=>{p(oe).imageUrl&&K(gt)})}var Et=y(Ne),on=R(Et),Yt=y(at,2),mn=R(Yt),_t=y(R(mn)),Xe=R(_t);va(Xe,{size:16});var ke=y(mn,2);zi(ke,19,()=>p(oe).customFields,K=>K.id,(K,Ze,qe)=>{var et=JC(),bt=R(et),qn=y(R(bt)),St=y(bt),Ar=y(R(St)),br=y(St),Bn=R(br);Of(Bn,{size:17}),Qe(qn,()=>p(Ze).label,Mn=>p(Ze).label=Mn),Qe(Ar,()=>p(Ze).value,Mn=>p(Ze).value=Mn),he("click",br,()=>p(oe).customFields=p(oe).customFields.filter((Mn,hr)=>hr!==p(qe))),H(K,et)});var Jt=y(ke,2);{var xt=K=>{var Ze=XC();H(K,Ze)};Te(Jt,K=>{p(oe).customFields.length||K(xt)})}var Xt=y(Yt,2);{var Nt=K=>{var Ze=tc(),qe=G(Ze,!0);we(()=>j(qe,p(P))),H(K,Ze)};Te(Xt,K=>{p(P)&&K(Nt)})}var ye=y(Xt,2),wt=R(ye),Lt=y(wt),Ee=R(Lt),Vn=y(Ee);_a(Vn,{size:17}),we(K=>{var Ze;j(ht,p(oe).name?"Editar item":"Novo item"),ge.disabled=K,j(Ke,((Ze=p(Tr))==null?void 0:Ze.name)??(p(oe).imageUrl?"Substituir fotografia":"Selecionar imagem")),Lt.disabled=p(E),j(Ee,`${p(E)?"SALVANDO...":"SALVAR ITEM"} `)},[()=>!!p(A).find(K=>K.id===p(gs))]),he("click",$,K=>{K.target===K.currentTarget&&D(Qn,!1)}),he("click",He,()=>D(Qn,!1)),lo("submit",dt,Nl),Qe(nt,()=>p(oe).name,K=>p(oe).name=K),Qe(It,()=>p(oe).code,K=>p(oe).code=K),Qe(Dt,()=>p(oe).category,K=>p(oe).category=K),Bu(Ot,()=>p(oe).itemType,K=>p(oe).itemType=K),Bu(pe,()=>p(oe).trackingMode,K=>p(oe).trackingMode=K),Qe(ct,()=>p(oe).unit,K=>p(oe).unit=K),Qe(ge,()=>p(oe).quantity,K=>p(oe).quantity=K),Qe(mt,()=>p(oe).minimumStock,K=>p(oe).minimumStock=K),Qe(ur,()=>p(oe).rackNumber,K=>p(oe).rackNumber=K),Qe(Yn,()=>p(oe).shelfNumber,K=>p(oe).shelfNumber=K),Qe(Ge,()=>p(oe).locationNote,K=>p(oe).locationNote=K),Qe(Le,()=>p(oe).description,K=>p(oe).description=K),he("change",Mt,K=>{var Ze;return D(Tr,((Ze=K.currentTarget.files)==null?void 0:Ze[0])??null,!0)}),zl(on,()=>p(oe).active,K=>p(oe).active=K),he("click",_t,Es),he("click",wt,()=>D(Qn,!1)),H(O,$)};Te(di,O=>{p(Qn)&&O(Du)})}var Ll=y(di,2);{var io=O=>{var $=tP(),fe=R($),ve=R(fe),ne=R(ve),ot=y(R(ne)),ht=G(ot,!0),He=y(ne),sn=R(He);Rs(sn,{size:20});var dt=y(ve,2),at=R(dt),ft=R(at),nt=y(R(ft)),We=y(ft),It=y(R(We)),Kt=y(We,2);{var Dt=ge=>{var Pe=eP(),mt=y(R(Pe));Qe(mt,()=>p(dn).password,me=>p(dn).password=me),H(ge,Pe)};Te(Kt,ge=>{p(ci)&&ge(Dt)})}var Qt=y(Kt,2),Ot=R(Qt),kt=y(Qt),Vt=R(kt),xe=y(kt),te=R(xe),_e=y(at,2);{var pe=ge=>{var Pe=tc(),mt=G(Pe,!0);we(()=>j(mt,p(P))),H(ge,Pe)};Te(_e,ge=>{p(P)&&ge(pe)})}var lt=y(_e,2),rt=R(lt),pt=y(rt),ct=R(pt),Ye=y(ct);_a(Ye,{size:17}),we(()=>{j(ht,p(qr)?"Editar funcionário":"Novo funcionário"),It.disabled=!p(ci),pt.disabled=p(E),j(ct,`${p(E)?"SALVANDO...":"SALVAR FUNCIONÁRIO"} `)}),he("click",$,ge=>{ge.target===ge.currentTarget&&D(li,!1)}),he("click",He,()=>D(li,!1)),lo("submit",dt,Pu),Qe(nt,()=>p(dn).name,ge=>p(dn).name=ge),Qe(It,()=>p(dn).matricula,ge=>p(dn).matricula=ge),zl(Ot,()=>p(dn).active,ge=>p(dn).active=ge),zl(Vt,()=>p(dn).canAdd,ge=>p(dn).canAdd=ge),zl(te,()=>p(dn).canWithdraw,ge=>p(dn).canWithdraw=ge),he("click",rt,()=>D(li,!1)),H(O,$)};Te(Ll,O=>{p(li)&&O(io)})}var Fl=y(Ll,2);{var ca=O=>{var $=nP(),fe=R($),ve=R(fe),ne=y(R(ve)),ot=R(ne);Rs(ot,{size:20});var ht=y(ve,2),He=R(ht),sn=R(He),dt=G(sn,!0),at=y(sn),ft=G(at),nt=y(He,2),We=R(nt);let It;var Kt=R(We);Df(Kt,{size:17});var Dt=y(We);let Qt;var Ot=R(Dt);va(Ot,{size:17});var kt=y(nt,2),Vt=R(kt),xe=y(R(Vt)),te=y(Vt),_e=y(R(te)),pe=y(kt,2);{var lt=Pe=>{var mt=tc(),me=G(mt,!0);we(()=>j(me,p(P))),H(Pe,mt)};Te(pe,Pe=>{p(P)&&Pe(lt)})}var rt=y(pe,2),pt=R(rt),ct=y(pt),Ye=R(ct),ge=y(Ye);_a(ge,{size:17}),we(()=>{j(dt,p(st).name),j(ft,`${p(st).code??""} · saldo ${p(st).quantity??""} ${p(st).unit??""}`),It=_n(We,1,"",null,It,{chosen:p($r)==="withdrawal"}),Qt=_n(Dt,1,"",null,Qt,{chosen:p($r)==="entry"}),ct.disabled=p(E)||p($r)==="withdrawal"&&p(cr)>p(st).quantity,j(Ye,`${p(E)?"REGISTRANDO...":"CONFIRMAR"} `)}),he("click",$,Pe=>{Pe.target===Pe.currentTarget&&D(On,!1)}),he("click",ne,()=>D(On,!1)),lo("submit",ht,Ol),he("click",We,()=>D($r,"withdrawal")),he("click",Dt,()=>D($r,"entry")),Qe(xe,()=>p(cr),Pe=>D(cr,Pe)),Qe(_e,()=>p(to),Pe=>D(to,Pe)),he("click",pt,()=>D(On,!1)),H(O,$)};Te(Fl,O=>{p(On)&&p(st)&&O(ca)})}H(n,la),sd()}kg(["click","change"]);hw(iP,{target:document.getElementById("app")});
