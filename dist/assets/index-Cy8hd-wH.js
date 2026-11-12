var Iy=Object.defineProperty;var zd=n=>{throw TypeError(n)};var Ay=(n,e,t)=>e in n?Iy(n,e,{enumerable:!0,configurable:!0,writable:!0,value:t}):n[e]=t;var bn=(n,e,t)=>Ay(n,typeof e!="symbol"?e+"":e,t),hu=(n,e,t)=>e.has(n)||zd("Cannot "+t);var D=(n,e,t)=>(hu(n,e,"read from private field"),t?t.call(n):e.get(n)),Ce=(n,e,t)=>e.has(n)?zd("Cannot add the same private member more than once"):e instanceof WeakSet?e.add(n):e.set(n,t),ye=(n,e,t,r)=>(hu(n,e,"write to private field"),r?r.call(n,t):e.set(n,t),t),se=(n,e,t)=>(hu(n,e,"access private method"),t);(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const i of document.querySelectorAll('link[rel="modulepreload"]'))r(i);new MutationObserver(i=>{for(const s of i)if(s.type==="childList")for(const a of s.addedNodes)a.tagName==="LINK"&&a.rel==="modulepreload"&&r(a)}).observe(document,{childList:!0,subtree:!0});function t(i){const s={};return i.integrity&&(s.integrity=i.integrity),i.referrerPolicy&&(s.referrerPolicy=i.referrerPolicy),i.crossOrigin==="use-credentials"?s.credentials="include":i.crossOrigin==="anonymous"?s.credentials="omit":s.credentials="same-origin",s}function r(i){if(i.ep)return;i.ep=!0;const s=t(i);fetch(i.href,s)}})();const dm=!1;var Cc=Array.isArray,by=Array.prototype.indexOf,xa=Array.prototype.includes,Pc=Array.from,fm=Object.defineProperty,Ns=Object.getOwnPropertyDescriptor,Sy=Object.getOwnPropertyDescriptors,Ry=Object.prototype,Cy=Array.prototype,pm=Object.getPrototypeOf,jd=Object.isExtensible;function ua(n){return typeof n=="function"}const Mh=()=>{};function Py(n){for(var e=0;e<n.length;e++)n[e]()}function mm(){var n,e,t=new Promise((r,i)=>{n=r,e=i});return{promise:t,resolve:n,reject:e}}function ky(n,e,t=!1){return n===void 0?t?e():e:n}function Hd(n,e){if(Array.isArray(n))return n;if(e===void 0||!(Symbol.iterator in n))return Array.from(n);const t=[];for(const r of n)if(t.push(r),t.length===e)break;return t}const On=2,Co=4,kc=8,xh=1<<24,br=16,Nr=32,Xi=64,Fu=128,Lh=256,Cr=512,Yt=1024,ct=2048,sr=4096,Un=8192,kn=16384,zo=32768,Zl=1<<25,Zi=65536,ec=1<<17,gm=1<<18,jo=1<<19,Ny=1<<20,Hr=1<<25,tc=1<<21,co=1<<22,Gi=1<<23,uo=Symbol("$state"),_m=Symbol("component"),Oy=Symbol("legacy props"),Dy=Symbol(""),Ul=Symbol("attributes"),Uu=Symbol("class"),$u=Symbol("style"),ga=Symbol("text"),$l=Symbol("form reset"),Ya=new class extends Error{constructor(){super(...arguments);bn(this,"name","StaleReactionError");bn(this,"message","The reaction that called `getAbortSignal()` was re-run or destroyed")}};var cm;const Nc=!!((cm=globalThis.document)!=null&&cm.contentType)&&globalThis.document.contentType.includes("xml"),Vy=1,My=2,vm=4,xy=8,Ly=16,Fy=1,Uy=2,ym={},zt=Symbol("uninitialized"),Em="http://www.w3.org/1999/xhtml",$y="http://www.w3.org/2000/svg",By="@attach";function qy(){console.warn("https://svelte.dev/e/derived_inert")}function zy(){console.warn("https://svelte.dev/e/select_multiple_invalid_value")}function jy(){console.warn("https://svelte.dev/e/svelte_boundary_reset_noop")}let wm=!1;function Tm(n){return n===this.v}function Hy(n,e){return n!=n?e==e:n!==e||n!==null&&typeof n=="object"||typeof n=="function"}function Im(n){return!Hy(n,this.v)}function Am(n){throw new Error("https://svelte.dev/e/lifecycle_outside_component")}function Wy(){throw new Error("https://svelte.dev/e/async_derived_orphan")}function Gy(n,e,t){throw new Error("https://svelte.dev/e/each_key_duplicate")}function Ky(n){throw new Error("https://svelte.dev/e/effect_in_teardown")}function Qy(){throw new Error("https://svelte.dev/e/effect_in_unowned_derived")}function Yy(n){throw new Error("https://svelte.dev/e/effect_orphan")}function Jy(){throw new Error("https://svelte.dev/e/effect_update_depth_exceeded")}function Xy(){throw new Error("https://svelte.dev/e/state_descriptors_fixed")}function Zy(){throw new Error("https://svelte.dev/e/state_prototype_fixed")}function eE(){throw new Error("https://svelte.dev/e/state_unsafe_mutation")}function tE(){throw new Error("https://svelte.dev/e/svelte_boundary_reset_onerror")}let nE=!1;function rE(n){let e=n.p;for(;e!==null&&e.c===null;)e=e.p;return(e==null?void 0:e.c)??null}function iE(n,e){return n===null&&Am(),n.c??(n.c=new Map(rE(n)||void 0))}let Nn=null;function Po(n){Nn=n}function sE(n){return iE(Nn).get(n)}function Fh(n,e=!1,t){Nn={p:Nn,i:!1,c:null,e:null,s:n,x:null,r:Be,l:null}}function Uh(n){var e=Nn,t=e.e;if(t!==null){e.e=null;for(var r of t)Qm(r)}return e.i=!0,Nn=e.p,bm(n)}function bm(n={}){return fm(n,_m,{value:!0}),n}function Sm(){return!0}let Is=[];function Rm(){var n=Is;Is=[],Py(n)}function Wr(n){if(Is.length===0&&!Ca){var e=Is;queueMicrotask(()=>{e===Is&&Rm()})}Is.push(n)}function oE(){for(;Is.length>0;)Rm()}const aE=-7169;function xt(n,e){n.f=n.f&aE|e}function $h(n){(n.f&Cr)!==0||n.deps===null?xt(n,Yt):xt(n,sr)}function Cm(n,e){(n.f&ct)!==0?e.set(n,ct):(n.f&sr)!==0&&e.get(n)!==ct&&e.set(n,sr),xt(n,Yt)}function lE(n,e){if(e){const t=document.body;n.autofocus=!0,Wr(()=>{document.activeElement===t&&n.focus()})}}let Wd=!1;function cE(){Wd||(Wd=!0,document.addEventListener("reset",n=>{Promise.resolve().then(()=>{var e;if(!n.defaultPrevented)for(const t of n.target.elements)(e=t[$l])==null||e.call(t)})},{capture:!0}))}function Ho(n){var e=we,t=Be;mr(null),ei(null);try{return n()}finally{mr(e),ei(t)}}function Bh(n,e,t,r=t){n.addEventListener(e,()=>Ho(t));const i=n[$l];i?n[$l]=()=>{i(),r(!0)}:n[$l]=()=>r(!0),cE()}function Pm(n,e,t,r){const i=Oc;var s=n.filter(E=>!E.settled),a=e.map(i);if(t.length===0&&s.length===0){r(a);return}var l=Be,c=uE(),h=s.length===1?s[0].promise:s.length>1?Promise.all(s.map(E=>E.promise)):null;function f(E){if((l.f&kn)===0){c();try{r([...a,...E])}catch(R){zr(R,l)}nc()}}var g=km();if(t.length===0){h.then(()=>f([])).finally(g);return}function _(){Promise.all(t.map(E=>hE(E))).then(f).catch(E=>zr(E,l)).finally(g)}h?h.then(()=>{if((l.f&kn)!==0){g();return}c(),_(),nc()}):_()}function uE(){var n=Be,e=we,t=Nn,r=te;return function(s=!0){ei(n),mr(e),Po(t),s&&(n.f&kn)===0&&(r==null||r.activate(),r==null||r.apply())}}function nc(n=!0){ei(null),mr(null),Po(null),n&&(te==null||te.deactivate())}function km(){var n=Be,e=n.b,t=te,r=!!(e!=null&&e.is_rendered());return e==null||e.update_pending_count(1,t),t.increment(r,n),()=>{e==null||e.update_pending_count(-1,t),t.decrement(r,n)}}function Oc(n){var e=On|ct;return Be!==null&&(Be.f|=jo),{ctx:Nn,deps:null,effects:null,equals:Tm,f:e,fn:n,reactions:null,rv:0,v:zt,wv:0,parent:Be,ac:null}}const _a=Symbol("obsolete");function hE(n,e,t){let r=Be;r===null&&Wy();var i=void 0,s=Ls(zt),a=!we,l=new Set;return RE(()=>{var E,R;var c=Be,h=mm();i=h.promise;try{Promise.resolve(n()).then(h.resolve,N=>{N!==Ya&&h.reject(N)}).finally(nc)}catch(N){h.reject(N),nc()}var f=te;if(a){if((c.f&zo)!==0)var g=km();if((E=r.b)!=null&&E.is_rendered())(R=f.async_deriveds.get(c))==null||R.reject(_a);else for(const N of l.values())N.reject(_a);l.add(h),f.async_deriveds.set(c,h)}const _=(N,P=void 0)=>{g==null||g(),l.delete(h),P!==_a&&(f.activate(),P?(s.f|=Gi,ko(s,P)):((s.f&Gi)!==0&&(s.f^=Gi),ko(s,N)),f.deactivate())};h.promise.then(_,N=>_(null,N||"unknown"))}),Dc(()=>{for(const c of l)c.reject(_a)}),new Promise(c=>{function h(f){function g(){f===i?c(s):h(i)}f.then(g,g)}h(i)})}function rr(n){const e=Oc(n);return tg(e),e}function dE(n){const e=Oc(n);return e.equals=Im,e}function fE(n){var e=n.effects;if(e!==null){n.effects=null;for(var t=0;t<e.length;t+=1)pn(e[t])}}function qh(n){var e,t=Be,r=n.parent;if(!es&&r!==null&&n.v!==zt&&(r.f&(kn|Un))!==0)return qy(),n.v;ei(r);try{fE(n),e=sg(n)}finally{ei(t)}return e}function Nm(n){var e=qh(n);if(!n.equals(e)&&(n.wv=rg(),(!(te!=null&&te.is_fork)||n.deps===null)&&(te!==null?(te.capture(n,e,!0),Ki==null||Ki.capture(n,e,!0)):n.v=e,n.deps===null))){xt(n,Yt);return}es||(fn!==null?(Hh()||te!=null&&te.is_fork)&&fn.set(n,e):$h(n))}function pE(n){var e;if(n.effects!==null)for(const t of n.effects)(t.teardown||t.ac)&&((e=t.teardown)==null||e.call(t),t.ac!==null&&Ho(()=>{t.ac.abort(Ya),t.ac=null}),t.fn!==null&&(t.teardown=Mh),La(t,0),Gh(t))}function Om(n){if(n.effects!==null)for(const e of n.effects)e.teardown&&e.fn!==null&&No(e)}let du=null,Xs=null,te=null,Ki=null,fn=null,Bu=null,Ca=!1,fu=!1,Pa=null,Bl=null;var Gd=0;let mE=1;var To,Io,Ao,hi,bo,di,Wa,Ur,$r,So,Rs,ke,qu,Dm,zu,va,ju,Vm,Mm,xm,no,gE,ya;const bc=class bc{constructor(){Ce(this,ke);bn(this,"id",mE++);bn(this,"started",!1);bn(this,"linked",!0);bn(this,"prev",null);bn(this,"next",null);bn(this,"async_deriveds",new Map);bn(this,"current",new Map);bn(this,"previous",new Map);Ce(this,To,new Set);Ce(this,Io,new Set);Ce(this,Ao,0);Ce(this,hi,new Map);Ce(this,bo,null);Ce(this,di,[]);Ce(this,Wa,[]);Ce(this,Ur,new Map);Ce(this,$r,new Map);Ce(this,So,new Set);bn(this,"is_fork",!1);Ce(this,Rs,!1);Xs===null?du=Xs=this:(Xs.next=this,this.prev=Xs),Xs=this}skip_effect(e){D(this,$r).has(e)||D(this,$r).set(e,{d:[],m:[]}),D(this,So).delete(e)}unskip_effect(e,t=r=>this.schedule(r)){var r=D(this,$r).get(e);if(r){D(this,$r).delete(e);for(var i of r.d)xt(i,ct),t(i);for(i of r.m)xt(i,sr),t(i)}D(this,So).add(e)}capture(e,t,r=!1){e.v!==zt&&!this.previous.has(e)&&this.previous.set(e,e.v),(e.f&Gi)===0&&(this.current.set(e,[t,r]),fn==null||fn.set(e,t)),this.is_fork||(e.v=t)}activate(){te=this}deactivate(){te=null,fn=null}flush(){try{fu=!0,te=this,se(this,ke,va).call(this)}finally{Gd=0,Bu=null,Pa=null,Bl=null,fu=!1,te=null,fn=null,Gr.clear()}}discard(){var e;for(const t of D(this,Io))t(this);D(this,Io).clear();for(const t of this.async_deriveds.values())t.reject(_a);se(this,ke,ya).call(this),(e=D(this,bo))==null||e.resolve()}register_created_effect(e){D(this,Wa).push(e)}increment(e,t){if(ye(this,Ao,D(this,Ao)+1),e){let r=D(this,hi).get(t)??0;D(this,hi).set(t,r+1)}}decrement(e,t){if(ye(this,Ao,D(this,Ao)-1),e){let r=D(this,hi).get(t)??0;r===1?D(this,hi).delete(t):D(this,hi).set(t,r-1)}D(this,Rs)||(ye(this,Rs,!0),Wr(()=>{ye(this,Rs,!1),this.linked&&this.flush()}))}transfer_reactions(e){for(const[t,r]of e)this.add_dirty_reaction(t,r);e.clear()}add_dirty_reaction(e,t){(t===ct||D(this,Ur).get(e)!==ct)&&D(this,Ur).set(e,t)}oncommit(e){D(this,To).add(e)}ondiscard(e){D(this,Io).add(e)}settled(){return(D(this,bo)??ye(this,bo,mm())).promise}static ensure(){if(te===null){const e=te=new bc;!fu&&!Ca&&Wr(()=>{e.started||e.flush()})}return te}apply(){{fn=null;return}}schedule(e){var t;if(Bu=e,(t=e.b)!=null&&t.is_pending&&(e.f&(Co|kc|xh))!==0&&(e.f&zo)===0){e.b.defer_effect(e);return}D(this,di).push(e)}};To=new WeakMap,Io=new WeakMap,Ao=new WeakMap,hi=new WeakMap,bo=new WeakMap,di=new WeakMap,Wa=new WeakMap,Ur=new WeakMap,$r=new WeakMap,So=new WeakMap,Rs=new WeakMap,ke=new WeakSet,qu=function(){if(this.is_fork)return!0;for(const e of D(this,hi).keys())if(!se(this,ke,Dm).call(this,e))return!0;return!1},Dm=function(e){for(var t=e;t!==null;t=t.parent)if(D(this,$r).has(t))return!0;return!1},zu=function(){var e=[];for(const s of D(this,di))if(!((s.f&kn)!==0||(s.f&(ct|sr))===0)){for(var t=s,r=!1;t.parent!==null;){t=t.parent;var i=t.f;if((i&(Xi|Nr))!==0){if((i&Yt)===0){r=!0;break}t.f^=Yt}}r||e.push(t)}return ye(this,di,[]),e},va=function(){var l,c,h,f;this.started=!0;for(const[g,_]of D(this,Ur))xt(g,_),this.schedule(g);this.apply();for(var e=Pa=[],t=[],r=Bl=[];D(this,di).length>0;){Gd++>1e3&&(se(this,ke,ya).call(this),vE());for(const g of se(this,ke,zu).call(this))try{se(this,ke,ju).call(this,g,e,t)}catch(_){throw Um(g),se(this,ke,qu).call(this)||this.discard(),_}}if(te=null,r.length>0){var i=bc.ensure();for(const g of r)i.schedule(g)}if(Pa=null,Bl=null,se(this,ke,qu).call(this)){se(this,ke,no).call(this,t),se(this,ke,no).call(this,e);for(const[g,_]of D(this,$r))Fm(g,_);r.length>0&&se(l=te,ke,va).call(l);return}const s=se(this,ke,Vm).call(this);if(s){se(this,ke,no).call(this,t),se(this,ke,no).call(this,e),se(c=s,ke,xm).call(c,this);return}D(this,Ur).clear();for(const g of D(this,To))g(this);D(this,To).clear(),Ki=this,Kd(t),Kd(e),Ki=null,(h=D(this,bo))==null||h.resolve();var a=te;D(this,Ao)===0&&(D(this,di).length===0||a!==null)&&se(this,ke,ya).call(this),a!==null&&(Gr.clear(),se(f=a,ke,va).call(f))},ju=function(e,t,r){e.f^=Yt;for(var i=e.first;i!==null;){var s=i.f,a=(s&(Nr|Xi))!==0,l=a&&(s&Yt)!==0,c=l||(s&Un)!==0||D(this,$r).has(i);if(!c&&i.fn!==null){a?i.f^=Yt:(s&Co)!==0?t.push(i):Xa(i)&&((s&br)!==0&&this.add_dirty_reaction(i,sr),No(i));var h=i.first;if(h!==null){i=h;continue}}for(;i!==null;){var f=i.next;if(f!==null){i=f;break}i=i.parent}}},Vm=function(){for(var e=this.prev;e!==null;e=e.prev)if(!e.is_fork&&se(this,ke,Mm).call(this,e))return e;return null},Mm=function(e){for(const[t,[,r]]of this.current)if(!r&&e.current.has(t))return!0;return!1},xm=function(e){var r;for(const[i,s]of e.current)!this.previous.has(i)&&e.previous.has(i)&&this.previous.set(i,e.previous.get(i)),this.current.set(i,s);for(const[i,s]of e.async_deriveds){const a=this.async_deriveds.get(i);a&&s.promise.then(a.resolve).catch(a.reject)}e.async_deriveds.clear(),this.transfer_reactions(D(e,Ur));const t=i=>{var s=i.reactions;if(s!==null&&!((i.f&On)!==0&&(i.f&(ct|sr))===0))for(const c of s){var a=c.f;if((a&On)!==0)t(c);else{var l=c;a&(co|br)&&!this.async_deriveds.has(l)&&(D(this,Ur).delete(l),xt(l,ct),this.schedule(l))}}};for(const i of this.current.keys())t(i);this.oncommit(()=>e.discard()),se(r=e,ke,ya).call(r),te=this,se(this,ke,va).call(this)},no=function(e){for(var t=0;t<e.length;t+=1)Cm(e[t],D(this,Ur))},gE=function(){var g,_;for(let E=du;E!==null;E=E.next){var e=E.id<this.id,t=[];for(const[R,[N,P]]of this.current){if(E.current.has(R)){var r=E.current.get(R)[0];if(e&&N!==r)E.current.set(R,[N,P]);else continue}t.push(R)}if(e)for(const[R,N]of this.async_deriveds){const P=E.async_deriveds.get(R);P&&N.promise.then(P.resolve).catch(P.reject)}var i=[...E.current.keys()].filter(R=>!E.current.get(R)[1]);if(!(!E.started||i.length===0)){var s=i.filter(R=>!this.current.has(R));if(s.length===0)e&&E.discard();else if(t.length>0){if(e)for(const R of D(this,So))E.unskip_effect(R,N=>{var P;(N.f&(br|co))!==0?E.schedule(N):se(P=E,ke,no).call(P,[N])});E.activate();var a=new Set,l=new Map;for(var c of t)Lm(c,s,a,l);l=new Map;var h=[...E.current].filter(([R,N])=>{const P=this.current.get(R);return P?P[0]!==N[0]||P[1]!==N[1]:!0}).map(([R])=>R);if(h.length>0)for(const R of D(this,Wa))(R.f&(kn|Un|ec))===0&&zh(R,h,l)&&((R.f&(co|br))!==0?(xt(R,ct),E.schedule(R)):E.add_dirty_reaction(R,ct));if(D(E,di).length>0&&!D(E,Rs)){E.apply();for(var f of se(g=E,ke,zu).call(g))se(_=E,ke,ju).call(_,f,[],[])}E.deactivate()}}}},ya=function(){if(this.linked){var e=this.prev,t=this.next;e===null?du=t:e.next=t,t===null?Xs=e:t.prev=e,this.linked=!1}};let xs=bc;function _E(n){var e=Ca,t=Ki;Ki=null,Ca=!0;try{for(var r;;){if(oE(),te===null)return r;te.flush()}}finally{Ca=e,Ki=t}}function vE(){try{Jy()}catch(n){zr(n,Bu)}}let Ir=null;function Kd(n){var e=n.length;if(e!==0){for(var t=0;t<e;){var r=n[t++];if((r.f&(kn|Un))===0&&Xa(r)&&(Ir=new Set,No(r),r.deps===null&&r.first===null&&r.nodes===null&&r.teardown===null&&r.ac===null&&Xm(r),(Ir==null?void 0:Ir.size)>0)){Gr.clear();for(const i of Ir){if((i.f&(kn|Un))!==0)continue;const s=[i];let a=i.parent;for(;a!==null;)Ir.has(a)&&(Ir.delete(a),s.push(a)),a=a.parent;for(let l=s.length-1;l>=0;l--){const c=s[l];(c.f&(kn|Un))===0&&No(c)}}Ir.clear()}}Ir=null}}function Lm(n,e,t,r){if(!t.has(n)&&(t.add(n),n.reactions!==null))for(const i of n.reactions){const s=i.f;(s&On)!==0?Lm(i,e,t,r):(s&(co|br))!==0&&(s&ct)===0&&zh(i,e,r)&&(xt(i,ct),jh(i))}}function zh(n,e,t){const r=t.get(n);if(r!==void 0)return r;if(n.deps!==null)for(const i of n.deps){if(xa.call(e,i))return!0;if((i.f&On)!==0&&zh(i,e,t))return t.set(i,!0),!0}return t.set(n,!1),!1}function jh(n){te.schedule(n)}function Fm(n,e){if(!((n.f&Nr)!==0&&(n.f&Yt)!==0)){(n.f&ct)!==0?e.d.push(n):(n.f&sr)!==0&&e.m.push(n),xt(n,Yt);for(var t=n.first;t!==null;)Fm(t,e),t=t.next}}function Um(n){xt(n,Yt);for(var e=n.first;e!==null;)Um(e),e=e.next}let rc=new Set;const Gr=new Map;let $m=!1;function Ls(n,e){var t={f:0,v:n,reactions:null,equals:Tm,rv:0,wv:0};return t}function re(n,e){const t=Ls(n);return tg(t),t}function yE(n,e=!1,t=!0){const r=Ls(n);return e||(r.equals=Im),r}function O(n,e,t=!1){we!==null&&(!Sr||(we.f&ec)!==0)&&Sm()&&(we.f&(On|br|co|ec))!==0&&(Kr===null||!Kr.has(n))&&eE();let r=t?fr(e):e;return ko(n,r,Bl)}var Ts=null,Hu=0;function ko(n,e,t=null){if(!n.equals(e)){es?Gr.set(n,e):Gr.has(n)||Gr.set(n,n.v);var r=xs.ensure();if(r.capture(n,e),(n.f&On)!==0){const i=n;(n.f&ct)!==0&&qh(i),fn===null&&$h(i)}n.wv=rg(),Ts=null,Hu=0,Bm(n,ct,t),Ts=null,Be!==null&&(Be.f&Yt)!==0&&(Be.f&(Nr|Xi))===0&&(ur===null?kE([n]):ur.push(n)),!r.is_fork&&rc.size>0&&!$m&&EE()}return e}function EE(){$m=!1;for(const n of rc){(n.f&Yt)!==0&&xt(n,sr);let e;try{e=Xa(n)}catch{e=!0}e&&No(n)}rc.clear()}function ka(n){O(n,n.v+1)}function Bm(n,e,t){var r=n.reactions;if(r!==null){var i=r.length;if(Hu+=i,Hu>1e5&&Ts===null&&(Ts=new Set),Ts!==null){if(Ts.has(n))return;Ts.add(n)}for(var s=0;s<i;s++){var a=r[s],l=a.f,c=(l&ct)===0;if(c&&xt(a,e),(l&ec)!==0)rc.add(a);else if((l&On)!==0){var h=a;fn==null||fn.delete(h),Bm(h,sr,t)}else if(c){var f=a;(l&br)!==0&&Ir!==null&&Ir.add(f),t!==null?t.push(f):jh(f)}}}}function fr(n){if(typeof n!="object"||n===null||uo in n||_m in n)return n;const e=pm(n);if(e!==Ry&&e!==Cy)return n;var t=new Map,r=Cc(n),i=re(0),s=Ds,a=l=>{if(Ds===s)return l();var c=we,h=Ds;mr(null),Xd(s);var f=l();return mr(c),Xd(h),f};return r&&t.set("length",re(n.length)),new Proxy(n,{defineProperty(l,c,h){(!("value"in h)||h.configurable===!1||h.enumerable===!1||h.writable===!1)&&Xy();var f=t.get(c);return f===void 0?a(()=>{var g=re(h.value);return t.set(c,g),g}):O(f,h.value,!0),!0},deleteProperty(l,c){var h=t.get(c);if(h===void 0){if(c in l){const f=a(()=>re(zt));t.set(c,f),ka(i)}}else O(h,zt),ka(i);return!0},get(l,c,h){var E;if(c===uo)return n;var f=t.get(c),g=c in l;if(f===void 0&&(!g||(E=Ns(l,c))!=null&&E.writable)&&(f=a(()=>{var R=fr(g?l[c]:zt),N=re(R);return N}),t.set(c,f)),f!==void 0){var _=p(f);return _===zt?void 0:_}return Reflect.get(l,c,h)},getOwnPropertyDescriptor(l,c){var _;(_=this.has)==null||_.call(this,l,c);var h=Reflect.getOwnPropertyDescriptor(l,c),f=t.get(c);if(f!==void 0){var g=p(f);if(g===zt)return;if(h&&"value"in h)h.value=g;else return{enumerable:!0,configurable:!0,value:g,writable:!0}}return h},has(l,c){var _;if(c===uo)return!0;var h=t.get(c),f=h!==void 0&&h.v!==zt||Reflect.has(l,c);if(h!==void 0||(Be!==null||we!==null)&&(!f||(_=Ns(l,c))!=null&&_.writable)){h===void 0&&(h=a(()=>{var E=f?fr(l[c]):zt,R=re(E);return R}),t.set(c,h));var g=p(h);if(g===zt)return!1}return f},set(l,c,h,f){var z;var g=t.get(c),_=c in l;if(r&&c==="length")for(var E=h;E<g.v;E+=1){var R=t.get(E+"");R!==void 0?O(R,zt):E in l&&(R=a(()=>re(zt)),t.set(E+"",R))}if(g===void 0)(!_||(z=Ns(l,c))!=null&&z.writable)&&(g=a(()=>re(void 0)),O(g,fr(h)),t.set(c,g));else{_=g.v!==zt;var N=a(()=>fr(h));O(g,N)}var P=Reflect.getOwnPropertyDescriptor(l,c);if(P!=null&&P.set&&P.set.call(f,h),!_){if(r&&typeof c=="string"){var U=t.get("length"),B=Number(c);Number.isInteger(B)&&B>=U.v&&O(U,B+1)}ka(i)}return!0},ownKeys(l){p(i);var c=Reflect.ownKeys(l).filter(g=>{var _=t.get(g);return _===void 0||_.v!==zt});for(var[h,f]of t)f.v!==zt&&!(h in l)&&c.push(h);return c},setPrototypeOf(){Zy()}})}function Qd(n){try{if(n!==null&&typeof n=="object"&&uo in n)return n[uo]}catch{}return n}function qm(n,e){return Object.is(Qd(n),Qd(e))}var Yd,zm,jm,Hm,Wm;function wE(){if(Yd===void 0){Yd=window,zm=document,jm=/Firefox/.test(navigator.userAgent);var n=Element.prototype,e=Node.prototype,t=Text.prototype;Hm=Ns(e,"firstChild").get,Wm=Ns(e,"nextSibling").get,jd(n)&&(n[Uu]=void 0,n[Ul]=null,n[$u]=void 0,n.__e=void 0),jd(t)&&(t[ga]=void 0)}}function Pr(n=""){return document.createTextNode(n)}function Fs(n){return Hm.call(n)}function Ja(n){return Wm.call(n)}function b(n,e){return Fs(n)}function ro(n,e=!1){{var t=Fs(n);return t instanceof Comment&&t.data===""?Ja(t):t}}function K(n,e=!1){return Fs(n)}function y(n,e=1,t=!1){let r=n;for(;e--;)r=Ja(r);return r}function TE(n){n.textContent=""}function Gm(){return!1}function Km(n,e,t){return e==null||e===Em?t?document.createElement(n,{is:t}):document.createElement(n):t?document.createElementNS(e,n,{is:t}):document.createElementNS(e,n)}function IE(n){var e=Be;if(e===null)return we.f|=Gi,n;if((e.f&zo)===0&&(e.f&Co)===0)throw n;zr(n,e)}function zr(n,e){if(n===ym)throw n;if(!(e!==null&&(e.f&kn)!==0)){for(;e!==null;){if((e.f&Fu)!==0&&(e.f&(kn|Zl))===0){if((e.f&zo)===0)throw n;try{e.b.error(n);return}catch(t){n=t}}e=e.parent}throw n}}function AE(n){Be===null&&(we===null&&Yy(),Qy()),es&&Ky()}function bE(n,e){var t=e.last;t===null?e.last=e.first=n:(t.next=n,n.prev=t,e.last=n)}function ri(n,e){var t=Be;t!==null&&(t.f&Un)!==0&&(n|=Un);var r={ctx:Nn,deps:null,nodes:null,f:n|ct|Cr,first:null,fn:e,last:null,next:null,parent:t,b:t&&t.b,prev:null,teardown:null,wv:0,ac:null};te==null||te.register_created_effect(r);var i=r;if((n&Co)!==0)Pa!==null?Pa.push(r):xs.ensure().schedule(r);else if(e!==null){try{No(r)}catch(a){throw pn(r),a}i.deps===null&&i.teardown===null&&i.nodes===null&&i.first===i.last&&(i.f&jo)===0&&(i=i.first,(n&br)!==0&&(n&Zi)!==0&&i!==null&&(i.f|=Zi))}if(i!==null&&(i.parent=t,t!==null&&bE(i,t),we!==null&&(we.f&On)!==0&&(n&Xi)===0)){var s=we;(s.effects??(s.effects=[])).push(i)}return r}function Hh(){return we!==null&&!Sr}function Dc(n){const e=ri(kc,null);return xt(e,Yt),e.teardown=n,e}function Wu(n){AE();var e=Be.f,t=!we&&(e&Nr)!==0&&Nn!==null&&!Nn.i;if(t){var r=Nn;(r.e??(r.e=[])).push(n)}else return Qm(n)}function Qm(n){return ri(Co|Ny,n)}function SE(n){xs.ensure();const e=ri(Xi|jo,n);return(t={})=>new Promise(r=>{t.outro?Os(e,()=>{pn(e),r(void 0)}):(pn(e),r(void 0))})}function Vc(n){return ri(Co,n)}function RE(n){return ri(co|jo,n)}function Wh(n,e=0){return ri(kc|e,n)}function Ee(n,e=[],t=[],r=[]){Pm(r,e,t,i=>{ri(kc,()=>{n(...i.map(p))})})}function Wo(n,e=0){var t=ri(br|e,n);return t}function Ym(n,e=0){var t=ri(xh|e,n);return t}function Ln(n){return ri(Nr|jo,n)}function Jm(n){var e=n.teardown;if(e!==null){const t=es,r=we;Jd(!0),mr(null);try{e.call(null)}catch(i){zr(i,n.parent)}finally{Jd(t),mr(r)}}}function Gh(n,e=!1){var t=n.first;for(n.first=n.last=null;t!==null;){const i=t.ac;i!==null&&Ho(()=>{i.abort(Ya)});var r=t.next;(t.f&Xi)!==0?t.parent=null:pn(t,e),t=r}}function CE(n){for(var e=n.first;e!==null;){var t=e.next;(e.f&Nr)===0&&pn(e),e=t}}function pn(n,e=!0){var t=!1;(e||(n.f&gm)!==0)&&n.nodes!==null&&n.nodes.end!==null&&(PE(n.nodes.start,n.nodes.end),t=!0),n.f|=Zl,Gh(n,e&&!t),La(n,0);var r=n.nodes&&n.nodes.t;if(r!==null)for(const s of r)s.stop();Jm(n),n.f^=Zl,n.f|=kn;var i=n.parent;i!==null&&i.first!==null&&Xm(n),n.next=n.prev=n.teardown=n.ctx=n.deps=n.fn=n.nodes=n.ac=n.b=null}function PE(n,e){for(;n!==null;){var t=n===e?null:Ja(n);n.remove(),n=t}}function Xm(n){var e=n.parent,t=n.prev,r=n.next;t!==null&&(t.next=r),r!==null&&(r.prev=t),e!==null&&(e.first===n&&(e.first=r),e.last===n&&(e.last=t))}function Os(n,e,t=!0){var r=[];n.f|=Lh,Zm(n,r,!0);var i=()=>{t&&pn(n),e&&e()},s=r.length;if(s>0){var a=()=>--s||i();for(var l of r)l.out(a)}else i()}function Zm(n,e,t){if((n.f&Un)===0){n.f^=Un;var r=n.nodes&&n.nodes.t;if(r!==null)for(const l of r)(l.is_global||t)&&e.push(l);for(var i=n.first;i!==null;){var s=i.next;if((i.f&Xi)===0){var a=(i.f&Zi)!==0||(i.f&Nr)!==0&&(n.f&br)!==0;Zm(i,e,a?t:!1)}i=s}}}function ic(n){n.f&=~Lh,eg(n,!0)}function eg(n,e){if((n.f&Lh)===0&&(n.f&Un)!==0){n.f^=Un,(n.f&Yt)===0&&(xt(n,ct),xs.ensure().schedule(n));for(var t=n.first;t!==null;){var r=t.next,i=(t.f&Zi)!==0||(t.f&Nr)!==0;eg(t,i?e:!1),t=r}var s=n.nodes&&n.nodes.t;if(s!==null)for(const a of s)(a.is_global||e)&&a.in()}}function Kh(n,e){if(n.nodes)for(var t=n.nodes.start,r=n.nodes.end;t!==null;){var i=t===r?null:Ja(t);e.append(t),t=i}}let es=!1;function Jd(n){es=n}let we=null,Sr=!1;function mr(n){we=n}let Be=null;function ei(n){Be=n}let Kr=null;function tg(n){we!==null&&((we.f&tc)!==0||(we.f&On)!==0)&&(Kr??(Kr=new Set)).add(n)}let Wn=null,nr=0,ur=null;function kE(n){ur=n}let ng=1,As=0,Ds=As;function Xd(n){Ds=n}function rg(){return++ng}function Xa(n){var e=n.f;if((e&ct)!==0)return!0;if((e&sr)!==0){for(var t=n.deps,r=t.length,i=0;i<r;i++){var s=t[i];if(Xa(s)&&Nm(s),s.wv>n.wv)return!0}(e&Cr)!==0&&fn===null&&xt(n,Yt)}return!1}function ig(n,e,t=!0){var r=n.reactions;if(r!==null&&!(Kr!==null&&Kr.has(n)))for(var i=0;i<r.length;i++){var s=r[i];(s.f&On)!==0?ig(s,e,!1):e===s&&(t?xt(s,ct):(s.f&Yt)!==0&&xt(s,sr),jh(s))}}function sg(n){var e=Wn,t=nr,r=ur,i=we,s=Kr,a=Nn,l=Sr,c=Ds,h=n.f;Wn=null,nr=0,ur=null,we=(h&(Nr|Xi))===0?n:null,Kr=null,Po(n.ctx),Sr=!1,Ds=++As,n.ac!==null&&(Ho(()=>{n.ac.abort(Ya)}),n.ac=null);try{n.f|=tc;var f=n.fn,g=f();n.f|=zo;var _=Zd(n);if(Sm()&&ur!==null&&!Sr&&_!==null&&(n.f&(On|sr|ct))===0)for(var E=0;E<ur.length;E++)ig(ur[E],n);if(i!==null&&i!==n){if(As++,i.deps!==null)for(let R=0;R<t;R+=1)i.deps[R].rv=As;if(e!==null)for(const R of e)R.rv=As;ur!==null&&(r===null?r=ur:r.push(...ur))}return(n.f&Gi)!==0&&(n.f^=Gi),g}catch(R){return Zd(n),IE(R)}finally{n.f^=tc,Wn=e,nr=t,ur=r,we=i,Kr=s,Po(a),Sr=l,Ds=c}}function Zd(n){var i;var e=n.deps,t=te==null?void 0:te.is_fork;if(Wn!==null){var r;if(t||La(n,nr),e!==null&&nr>0)for(e.length=nr+Wn.length,r=0;r<Wn.length;r++)e[nr+r]=Wn[r];else n.deps=e=Wn;if(Hh()&&(n.f&Cr)!==0)for(r=nr;r<e.length;r++)((i=e[r]).reactions??(i.reactions=[])).push(n)}else!t&&e!==null&&nr<e.length&&(La(n,nr),e.length=nr);return e}function NE(n,e){let t=e.reactions;if(t!==null){var r=by.call(t,n);if(r!==-1){var i=t.length-1;i===0?t=e.reactions=null:(t[r]=t[i],t.pop())}}if(t===null&&(e.f&On)!==0&&(Wn===null||!xa.call(Wn,e))){var s=e;(s.f&Cr)!==0&&(s.f^=Cr),s.v!==zt&&$h(s),s.ac!==null&&Ho(()=>{s.ac.abort(Ya),s.ac=null,xt(s,ct)}),pE(s),La(s,0)}}function La(n,e){var t=n.deps;if(t!==null)for(var r=e;r<t.length;r++)NE(n,t[r])}function No(n){var e=n.f;if((e&kn)===0){xt(n,Yt);var t=Be;Be=n;try{(e&(br|xh))!==0?CE(n):Gh(n),Jm(n);var r=sg(n);n.teardown=typeof r=="function"?r:null,n.wv=ng;var i;dm&&nE&&(n.f&ct)!==0&&n.deps}finally{Be=t}}}async function OE(){await Promise.resolve(),_E()}function p(n){var e=n.f,t=(e&On)!==0;if(we!==null&&!Sr){var r=Be!==null&&(Be.f&kn)!==0;if(!r&&(Kr===null||!Kr.has(n))){var i=we.deps;if((we.f&tc)!==0)n.rv<As&&(n.rv=As,Wn===null&&i!==null&&i[nr]===n?nr++:Wn===null?Wn=[n]:Wn.push(n));else{we.deps??(we.deps=[]),xa.call(we.deps,n)||we.deps.push(n);var s=n.reactions;s===null?n.reactions=[we]:xa.call(s,we)||s.push(we)}}}if(es&&Gr.has(n))return Gr.get(n);if(t){var a=n;if(es){var l=a.v;return((a.f&Yt)===0&&a.reactions!==null||ag(a))&&(l=qh(a)),Gr.set(a,l),l}var c=(a.f&Cr)===0&&!Sr&&we!==null&&(we.f&Cr)!==0,h=(a.f&zo)===0;Xa(a)&&(c&&(a.f|=Cr),Nm(a)),c&&!h&&(Om(a),og(a))}if(fn!=null&&fn.has(n))return fn.get(n);if((n.f&Gi)!==0)throw n.v;return n.v}function og(n){if(n.f|=Cr,n.deps!==null)for(const t of n.deps){var e=t.reactions;e===null?t.reactions=[n]:xa.call(e,n)||e.push(n),(t.f&On)!==0&&(t.f&Cr)===0&&(Om(t),og(t))}}function ag(n){if(n.v===zt)return!0;if(n.deps===null)return!1;for(const e of n.deps)if(Gr.has(e)||(e.f&On)!==0&&ag(e))return!0;return!1}function Mc(n){var e=Sr;try{return Sr=!0,n()}finally{Sr=e}}function DE(n){return n.endsWith("capture")&&n!=="gotpointercapture"&&n!=="lostpointercapture"}const VE=["beforeinput","click","change","dblclick","contextmenu","focusin","focusout","input","keydown","keyup","mousedown","mousemove","mouseout","mouseover","mouseup","pointerdown","pointermove","pointerout","pointerover","pointerup","touchend","touchmove","touchstart"];function ME(n){return VE.includes(n)}const xE={formnovalidate:"formNoValidate",ismap:"isMap",nomodule:"noModule",playsinline:"playsInline",readonly:"readOnly",defaultvalue:"defaultValue",defaultchecked:"defaultChecked",srcobject:"srcObject",novalidate:"noValidate",allowfullscreen:"allowFullscreen",disablepictureinpicture:"disablePictureInPicture",disableremoteplayback:"disableRemotePlayback"};function LE(n){return n=n.toLowerCase(),xE[n]??n}const FE=["touchstart","touchmove"];function UE(n){return FE.includes(n)}const bs=Symbol("events"),lg=new Set,Gu=new Set;function cg(n,e,t,r={}){function i(s){if(r.capture||Ku.call(e,s),!s.cancelBubble)return Ho(()=>t==null?void 0:t.call(this,s))}return n.startsWith("pointer")||n.startsWith("touch")||n==="wheel"?(i.__removed=!1,Wr(()=>{i.__removed||e.addEventListener(n,i,r)})):e.addEventListener(n,i,r),i}function Zs(n,e,t,r,i){var s={capture:r,passive:i},a=cg(n,e,t,s);(e===document.body||e===window||e===document||e instanceof HTMLMediaElement)&&Dc(()=>{a.__removed=!0,e.removeEventListener(n,a,s)})}function oe(n,e,t){(e[bs]??(e[bs]={}))[n]=t}function ug(n){for(var e=0;e<n.length;e++)lg.add(n[e]);for(var t of Gu)t(n)}let pu=null,mu=!1;function Ku(n){var N,P;var e=this,t=e.ownerDocument,r=n.type,i=((N=n.composedPath)==null?void 0:N.call(n))||[],s=i[0]||n.target;pu=n,mu||(mu=!0,setTimeout(()=>{mu=!1,pu=null}));var a=0,l=pu===n&&n[bs];if(l){var c=i.indexOf(l);if(c!==-1&&(e===document||e===window)){n[bs]=e;return}var h=i.indexOf(e);if(h===-1)return;c<=h&&(a=c)}if(s=i[a]||n.target,s!==e){fm(n,"currentTarget",{configurable:!0,get(){return s||t}});var f=we,g=Be;mr(null),ei(null);try{for(var _,E=[];s!==null&&s!==e;){try{var R=(P=s[bs])==null?void 0:P[r];R!=null&&(!s.disabled||n.target===s)&&R.call(s,n)}catch(U){_?E.push(U):_=U}if(n.cancelBubble)break;a++,s=a<i.length?i[a]:null}if(_){for(let U of E)queueMicrotask(()=>{throw U});throw _}}finally{n[bs]=e,delete n.currentTarget,mr(f),ei(g)}}}var um;const gu=((um=globalThis==null?void 0:globalThis.window)==null?void 0:um.trustedTypes)&&globalThis.window.trustedTypes.createPolicy("svelte-trusted-html",{createHTML:n=>n});function $E(n){return(gu==null?void 0:gu.createHTML(n))??n}function hg(n){var e=Km("template");return e.innerHTML=$E(n.replaceAll("<!>","<!---->")),e.content}function Oo(n,e){var t=Be;t.nodes===null&&(t.nodes={start:n,end:e,a:null,t:null})}function ee(n,e){var t=(e&Fy)!==0,r=(e&Uy)!==0,i,s=!n.startsWith("<!>");return()=>{i===void 0&&(i=hg(s?n:"<!>"+n),t||(i=Fs(i)));var a=r||jm?document.importNode(i,!0):i.cloneNode(!0);if(t){var l=Fs(a),c=a.lastChild;Oo(l,c)}else Oo(a,a);return a}}function BE(n,e,t="svg"){var r=!n.startsWith("<!>"),i=`<${t}>${r?n:"<!>"+n}</${t}>`,s;return()=>{if(!s){var a=hg(i),l=Fs(a);s=Fs(l)}var c=s.cloneNode(!0);return Oo(c,c),c}}function qE(n,e){return BE(n,e,"svg")}function zE(n=""){{var e=Pr(n+"");return Oo(e,e),e}}function dg(){var n=document.createDocumentFragment(),e=document.createComment(""),t=Pr();return n.append(e,t),Oo(e,t),n}function Q(n,e){n!==null&&n.before(e)}function jE(n){let e=0,t=Ls(0),r;return()=>{Hh()&&(p(t),Wh(()=>(e===0&&(r=Mc(()=>n(()=>ka(t)))),e+=1,()=>{Wr(()=>{e-=1,e===0&&(r==null||r(),r=void 0,ka(t))})})))}}var HE=Zi|jo;function WE(n,e,t,r){new GE(n,e,t,r)}var hr,Vh,dr,Cs,Rn,Zn,xn,er,Br,Ps,ji,Ro,Ga,fi,Sc,Me,KE,QE,Qu,qi,YE,Yu,Ea,ql,Ju,Xu;class GE{constructor(e,t,r,i){Ce(this,Me);bn(this,"parent");bn(this,"is_pending",!1);bn(this,"transform_error");Ce(this,hr);Ce(this,Vh,null);Ce(this,dr);Ce(this,Cs);Ce(this,Rn);Ce(this,Zn,null);Ce(this,xn,null);Ce(this,er,null);Ce(this,Br,null);Ce(this,Ps,0);Ce(this,ji,0);Ce(this,Ro,!1);Ce(this,Ga,new Map);Ce(this,fi,null);Ce(this,Sc,jE(()=>(ye(this,fi,Ls(D(this,Ps))),()=>{ye(this,fi,null)})));var s;ye(this,hr,e),ye(this,dr,t),ye(this,Cs,a=>{var l=Be;l.b=this,l.f|=Fu,r(a)}),this.parent=Be.b,this.transform_error=i??((s=this.parent)==null?void 0:s.transform_error)??(a=>a),ye(this,Rn,Wo(()=>{se(this,Me,Yu).call(this)},HE))}defer_effect(e){Cm(e,D(this,Ga))}is_rendered(){return!this.is_pending&&(!this.parent||this.parent.is_rendered())}has_pending_snippet(){return!!D(this,dr).pending}update_pending_count(e,t){se(this,Me,Ju).call(this,e,t),ye(this,Ps,D(this,Ps)+e),!(!D(this,fi)||D(this,Ro))&&(ye(this,Ro,!0),Wr(()=>{ye(this,Ro,!1),D(this,fi)&&ko(D(this,fi),D(this,Ps))}))}get_effect_pending(){return D(this,Sc).call(this),p(D(this,fi))}error(e){if(e===ym||!D(this,dr).onerror&&!D(this,dr).failed)throw e;te!=null&&te.is_fork?(D(this,Zn)&&te.skip_effect(D(this,Zn)),D(this,xn)&&te.skip_effect(D(this,xn)),D(this,er)&&te.skip_effect(D(this,er)),te.oncommit(()=>{se(this,Me,qi).call(this)||se(this,Me,Xu).call(this,e)})):se(this,Me,Xu).call(this,e)}}hr=new WeakMap,Vh=new WeakMap,dr=new WeakMap,Cs=new WeakMap,Rn=new WeakMap,Zn=new WeakMap,xn=new WeakMap,er=new WeakMap,Br=new WeakMap,Ps=new WeakMap,ji=new WeakMap,Ro=new WeakMap,Ga=new WeakMap,fi=new WeakMap,Sc=new WeakMap,Me=new WeakSet,KE=function(){try{ye(this,Zn,Ln(()=>D(this,Cs).call(this,D(this,hr))))}catch(e){this.error(e)}},QE=function(e){const t=D(this,dr).failed,{reset:r,invoke_onerror:i}=se(this,Me,Qu).call(this,e);Wr(i),t&&ye(this,er,Ln(()=>{t(D(this,hr),()=>e,()=>r)}))},Qu=function(e){var t=!1,r=!1;const i=()=>{if(!se(this,Me,qi).call(this)){if(t){jy();return}t=!0,r&&tE(),D(this,er)!==null&&Os(D(this,er),()=>{ye(this,er,null)}),se(this,Me,ql).call(this,()=>{se(this,Me,Yu).call(this)})}};return{reset:i,invoke_onerror:()=>{var a,l;if(!se(this,Me,qi).call(this))try{r=!0,(l=(a=D(this,dr)).onerror)==null||l.call(a,e,i),r=!1}catch(c){zr(c,D(this,Rn)&&D(this,Rn).parent)}}}},qi=function(){return(D(this,Rn).f&(kn|Zl))!==0},YE=function(){const e=D(this,dr).pending;e&&(this.is_pending=!0,ye(this,xn,Ln(()=>e(D(this,hr)))),Wr(()=>{if(!se(this,Me,qi).call(this)){var t=ye(this,Br,document.createDocumentFragment()),r=Pr(),i=!1;if(t.append(r),ye(this,Zn,se(this,Me,ql).call(this,()=>{try{return Ln(()=>D(this,Cs).call(this,r))}catch(s){try{this.error(s),i=!0}catch(a){zr(a,D(this,Rn).parent)}return null}})),D(this,Zn)===null){ye(this,Br,null),i&&se(this,Me,Ea).call(this,te);return}D(this,ji)===0&&(D(this,hr).before(t),ye(this,Br,null),Os(D(this,xn),()=>{ye(this,xn,null)}),se(this,Me,Ea).call(this,te))}}))},Yu=function(){try{if(this.is_pending=this.has_pending_snippet(),ye(this,ji,0),ye(this,Ps,0),ye(this,Zn,Ln(()=>{D(this,Cs).call(this,D(this,hr))})),D(this,ji)>0){var e=ye(this,Br,document.createDocumentFragment());Kh(D(this,Zn),e);const t=D(this,dr).pending;ye(this,xn,Ln(()=>t(D(this,hr))))}else se(this,Me,Ea).call(this,te)}catch(t){this.error(t)}},Ea=function(e){this.is_pending=!1,e.transfer_reactions(D(this,Ga))},ql=function(e){var t=Be,r=we,i=Nn;ei(D(this,Rn)),mr(D(this,Rn)),Po(D(this,Rn).ctx);try{return xs.ensure(),e()}finally{ei(t),mr(r),Po(i)}},Ju=function(e,t){var r;if(!this.has_pending_snippet()){this.parent&&se(r=this.parent,Me,Ju).call(r,e,t);return}ye(this,ji,D(this,ji)+e),D(this,ji)===0&&(se(this,Me,Ea).call(this,t),D(this,xn)&&Os(D(this,xn),()=>{ye(this,xn,null)}),D(this,Br)&&(D(this,hr).before(D(this,Br)),ye(this,Br,null)))},Xu=function(e){D(this,Zn)&&(pn(D(this,Zn)),ye(this,Zn,null)),D(this,xn)&&(pn(D(this,xn)),ye(this,xn,null)),D(this,er)&&(pn(D(this,er)),ye(this,er,null));let t=D(this,dr).failed;const r=i=>{if(se(this,Me,qi).call(this))return;const{reset:s,invoke_onerror:a}=se(this,Me,Qu).call(this,i);a(),t&&!se(this,Me,qi).call(this)&&ye(this,er,se(this,Me,ql).call(this,()=>{try{return Ln(()=>{var l=Be;l.b=this,l.f|=Fu,t(D(this,hr),()=>i,()=>s)})}catch(l){return zr(l,D(this,Rn).parent),null}}))};Wr(()=>{if(!se(this,Me,qi).call(this)){var i;try{i=this.transform_error(e)}catch(s){zr(s,D(this,Rn)&&D(this,Rn).parent);return}i!==null&&typeof i=="object"&&typeof i.then=="function"?i.then(r,s=>zr(s,D(this,Rn)&&D(this,Rn).parent)):r(i)}})};function j(n,e){var t=e==null?"":typeof e=="object"?`${e}`:e;t!==(n[ga]??(n[ga]=n.nodeValue))&&(n[ga]=t,n.nodeValue=`${t}`)}function JE(n,e){return XE(n,e)}const Al=new Map;function XE(n,{target:e,anchor:t,props:r={},events:i,context:s,intro:a=!0,transformError:l}){wE();var c=void 0,h=SE(()=>{var f=t??e.appendChild(Pr());WE(f,{pending:()=>{}},E=>{Fh({});var R=Nn;s&&(R.c=s),i&&(r.$$events=i),c=n(E,r)||bm(),Uh()},l);var g=new Set,_=E=>{for(var R=0;R<E.length;R++){var N=E[R];if(!g.has(N)){g.add(N);var P=UE(N);for(const z of[e,document]){var U=Al.get(z);U===void 0&&(U=new Map,Al.set(z,U));var B=U.get(N);B===void 0?(z.addEventListener(N,Ku,{passive:P}),U.set(N,1)):U.set(N,B+1)}}}};return _(Pc(lg)),Gu.add(_),()=>{var P;for(var E of g)for(const U of[e,document]){var R=Al.get(U),N=R.get(E);--N==0?(U.removeEventListener(E,Ku),R.delete(E),R.size===0&&Al.delete(U)):R.set(E,N)}Gu.delete(_),f!==t&&((P=f.parentNode)==null||P.removeChild(f))}});return ZE.set(c,h),c}let ZE=new WeakMap;var Ar,qr,tr,ks,Ka,Qa,Rc;class Qh{constructor(e,t=!0){bn(this,"anchor");Ce(this,Ar,new Map);Ce(this,qr,new Map);Ce(this,tr,new Map);Ce(this,ks,new Set);Ce(this,Ka,!0);Ce(this,Qa,e=>{if(D(this,Ar).has(e)){var t=D(this,Ar).get(e),r=D(this,qr).get(t);if(r)ic(r),D(this,ks).delete(t);else{var i=D(this,tr).get(t);i&&(ic(i.effect),D(this,qr).set(t,i.effect),D(this,tr).delete(t),i.fragment.lastChild.remove(),this.anchor.before(i.fragment),r=i.effect)}for(const[s,a]of D(this,Ar)){if(D(this,Ar).delete(s),s===e)break;const l=D(this,tr).get(a);l&&(pn(l.effect),D(this,tr).delete(a))}for(const[s,a]of D(this,qr)){if(s===t||D(this,ks).has(s))continue;const l=()=>{if(Array.from(D(this,Ar).values()).includes(s)){var h=document.createDocumentFragment();Kh(a,h),h.append(Pr()),D(this,tr).set(s,{effect:a,fragment:h})}else pn(a);D(this,ks).delete(s),D(this,qr).delete(s)};D(this,Ka)||!r?(D(this,ks).add(s),Os(a,l,!1)):l()}}});Ce(this,Rc,e=>{D(this,Ar).delete(e);const t=Array.from(D(this,Ar).values());for(const[r,i]of D(this,tr))t.includes(r)||(pn(i.effect),D(this,tr).delete(r))});this.anchor=e,ye(this,Ka,t)}ensure(e,t){var r=te,i=Gm();if(t&&!D(this,qr).has(e)&&!D(this,tr).has(e))if(i){var s=document.createDocumentFragment(),a=Pr();s.append(a),D(this,tr).set(e,{effect:Ln(()=>t(a)),fragment:s})}else D(this,qr).set(e,Ln(()=>t(this.anchor)));if(D(this,Ar).set(r,e),i){for(const[l,c]of D(this,qr))l===e?r.unskip_effect(c):r.skip_effect(c);for(const[l,c]of D(this,tr))l===e?r.unskip_effect(c.effect):r.skip_effect(c.effect);r.oncommit(D(this,Qa)),r.ondiscard(D(this,Rc))}else D(this,Qa).call(this,r)}}Ar=new WeakMap,qr=new WeakMap,tr=new WeakMap,ks=new WeakMap,Ka=new WeakMap,Qa=new WeakMap,Rc=new WeakMap;function me(n,e,t=!1){var r=new Qh(n),i=t?Zi:0;function s(a,l){r.ensure(a,l)}Wo(()=>{var a=!1;e((l,c=0)=>{a=!0,s(c,l)}),a||s(-1,null)},i)}function ew(n,e){return e}function tw(n,e,t){for(var r=[],i=e.length,s,a=e.length,l=0;l<i;l++){let g=e[l];Os(g,()=>{if(s){if(s.pending.delete(g),s.done.add(g),s.pending.size===0){var _=n.outrogroups;Zu(n,Pc(s.done)),_.delete(s),_.size===0&&(n.outrogroups=null)}}else a-=1},!1)}if(a===0){var c=r.length===0&&t!==null&&n.pending.size===0;if(c){var h=t,f=h.parentNode;TE(f),f.append(h),n.items.clear()}Zu(n,e,!c)}else s={pending:new Set(e),done:new Set},(n.outrogroups??(n.outrogroups=new Set)).add(s)}function Zu(n,e,t=!0){var r;if(n.pending.size>0){r=new Set;for(const a of n.pending.values())for(const l of a)r.add(n.items.get(l).e)}for(var i=0;i<e.length;i++){var s=e[i];if(r!=null&&r.has(s)){s.f|=Hr;const a=document.createDocumentFragment();Kh(s,a)}else pn(e[i],t)}}var ef;function zi(n,e,t,r,i,s=null){var a=n,l=new Map,c=(e&vm)!==0;if(c){var h=n;a=h.appendChild(Pr())}var f=null,g=dE(()=>{var B=t();return Cc(B)?B:B==null?[]:Pc(B)}),_=new Map,E=!0;function R(B){if((U.effect.f&kn)===0){U.pending.delete(B);var z=p(g);U.fallback=f,nw(U,z,a,e,r),f!==null&&(z.length===0?(f.f&Hr)===0?ic(f):(f.f^=Hr,wa(f,null,a)):Os(f,()=>{f=null}))}}function N(B){U.pending.delete(B)}var P=Wo(()=>{for(var B=p(g),z=B.length,J=new Set,qe=te,Y=Gm(),I=0;I<z;I+=1){var v=B[I],w=r(v,I),A=E?null:l.get(w);A?(A.v&&ko(A.v,v),A.i&&ko(A.i,I),Y&&qe.unskip_effect(A.e)):(A=rw(l,E?a:ef??(ef=Pr()),v,w,I,i,e,t),E||(A.e.f|=Hr),l.set(w,A)),J.add(w)}if(z===0&&s&&!f&&(E?f=Ln(()=>s(a)):(f=Ln(()=>s(ef??(ef=Pr()))),f.f|=Hr)),z>J.size&&Gy(),!E)if(_.set(qe,J),Y){for(const[C,S]of l)J.has(C)||qe.skip_effect(S.e);qe.oncommit(R),qe.ondiscard(N)}else R(qe);p(g)}),U={effect:P,items:l,pending:_,outrogroups:null,fallback:f};E=!1}function ha(n){for(;n!==null&&(n.f&Nr)===0;)n=n.next;return n}function nw(n,e,t,r,i){var A,C,S,T,Ze,or,Pi,Bn,_n;var s=(r&xy)!==0,a=e.length,l=n.items,c=ha(n.effect.first),h,f=null,g,_=[],E=[],R,N,P,U;if(s)for(U=0;U<a;U+=1)R=e[U],N=i(R,U),P=l.get(N).e,(P.f&Hr)===0&&((C=(A=P.nodes)==null?void 0:A.a)==null||C.measure(),(g??(g=new Set)).add(P));for(U=0;U<a;U+=1){if(R=e[U],N=i(R,U),P=l.get(N).e,n.outrogroups!==null)for(const Nt of n.outrogroups)Nt.pending.delete(P),Nt.done.delete(P);if((P.f&Un)!==0&&(ic(P),s&&((T=(S=P.nodes)==null?void 0:S.a)==null||T.unfix(),(g??(g=new Set)).delete(P))),(P.f&Hr)!==0)if(P.f^=Hr,P===c)wa(P,null,t);else{var B=f?f.next:c;P===n.effect.last&&(n.effect.last=P.prev),P.prev&&(P.prev.next=P.next),P.next&&(P.next.prev=P.prev),$i(n,f,P),$i(n,P,B),wa(P,B,t),f=P,_=[],E=[],c=ha(f.next);continue}if(P!==c){if(h!==void 0&&h.has(P)){if(_.length<E.length){var z=E[0],J;f=z.prev;var qe=_[0],Y=_[_.length-1];for(J=0;J<_.length;J+=1)wa(_[J],z,t);for(J=0;J<E.length;J+=1)h.delete(E[J]);$i(n,qe.prev,Y.next),$i(n,f,qe),$i(n,Y,z),c=z,f=Y,U-=1,_=[],E=[]}else h.delete(P),wa(P,c,t),$i(n,P.prev,P.next),$i(n,P,f===null?n.effect.first:f.next),$i(n,f,P),f=P;continue}for(_=[],E=[];c!==null&&c!==P;)(h??(h=new Set)).add(c),E.push(c),c=ha(c.next);if(c===null)continue}(P.f&Hr)===0&&_.push(P),f=P,c=ha(P.next)}if(n.outrogroups!==null){for(const Nt of n.outrogroups)Nt.pending.size===0&&(Zu(n,Pc(Nt.done)),(Ze=n.outrogroups)==null||Ze.delete(Nt));n.outrogroups.size===0&&(n.outrogroups=null)}if(c!==null||h!==void 0){var I=[];if(h!==void 0)for(P of h)(P.f&Un)===0&&I.push(P);for(;c!==null;)(c.f&Un)===0&&c!==n.fallback&&I.push(c),c=ha(c.next);var v=I.length;if(v>0){var w=(r&vm)!==0&&a===0?t:null;if(s){for(U=0;U<v;U+=1)(Pi=(or=I[U].nodes)==null?void 0:or.a)==null||Pi.measure();for(U=0;U<v;U+=1)(_n=(Bn=I[U].nodes)==null?void 0:Bn.a)==null||_n.fix()}tw(n,I,w)}}s&&Wr(()=>{var Nt,ar;if(g!==void 0)for(P of g)(ar=(Nt=P.nodes)==null?void 0:Nt.a)==null||ar.apply()})}function rw(n,e,t,r,i,s,a,l){var c=(a&Vy)!==0?(a&Ly)===0?yE(t,!1,!1):Ls(t):null,h=(a&My)!==0?Ls(i):null;return{v:c,i:h,e:Ln(()=>(s(e,c??t,h??i,l),()=>{n.delete(r)}))}}function wa(n,e,t){if(n.nodes)for(var r=n.nodes.start,i=n.nodes.end,s=e&&(e.f&Hr)===0?e.nodes.start:t;r!==null;){var a=Ja(r);if(s.before(r),r===i)return;r=a}}function $i(n,e,t){e===null?n.effect.first=t:e.next=t,t===null?n.effect.last=e:t.prev=e}function iw(n,e,...t){var r=new Qh(n);Wo(()=>{const i=e()??null;r.ensure(i,i&&(s=>i(s,...t)))},Zi)}function sw(n,e,t,r,i,s){var a=null,l=n,c=new Qh(l,!1);Wo(()=>{const h=e()||null;var f=$y;if(h===null){c.ensure(null,null);return}return c.ensure(h,g=>{if(h){var _=wm;if(a=Km(h,f),Oo(a,a),r){var E=null,R=a.appendChild(Pr());r(a,R),E==null||E.remove()}Be.nodes.end=a,_||g.before(a)}}),()=>{}},Zi),Dc(()=>{})}function ow(n,e){var t;t=document.head.appendChild(Pr());try{Wo(()=>{var r=Ln(()=>e(t));r.f|=gm,wm||(r.nodes===null?r.nodes={start:t,end:t,a:null,t:null}:r.nodes.end=t)})}finally{}}function aw(n,e){var t=void 0,r;Ym(()=>{t!==(t=e())&&(r&&(pn(r),r=null),t&&(r=Ln(()=>{Vc(()=>t(n))})))})}function fg(n){var e,t,r="";if(typeof n=="string"||typeof n=="number")r+=n;else if(typeof n=="object")if(Array.isArray(n)){var i=n.length;for(e=0;e<i;e++)n[e]&&(t=fg(n[e]))&&(r&&(r+=" "),r+=t)}else for(t in n)n[t]&&(r&&(r+=" "),r+=t);return r}function lw(){for(var n,e,t=0,r="",i=arguments.length;t<i;t++)(n=arguments[t])&&(e=fg(n))&&(r&&(r+=" "),r+=e);return r}function cw(n){return typeof n=="object"?lw(n):n??""}const tf=[...` 	
\r\f \v\uFEFF`];function uw(n,e,t){var r=n==null?"":""+n;if(e&&(r=r?r+" "+e:e),t){for(var i of Object.keys(t))if(t[i])r=r?r+" "+i:i;else if(r.length)for(var s=i.length,a=0;(a=r.indexOf(i,a))>=0;){var l=a+s;(a===0||tf.includes(r[a-1]))&&(l===r.length||tf.includes(r[l]))?r=(a===0?"":r.substring(0,a))+r.substring(l+1):a=l}}return r===""?null:r}function nf(n,e=!1){var t=e?" !important;":";",r="";for(var i of Object.keys(n)){var s=n[i];s!=null&&s!==""&&(r+=" "+i+": "+s+t)}return r}function _u(n){return n[0]!=="-"||n[1]!=="-"?n.toLowerCase():n}function hw(n,e){if(e){var t="",r,i;if(Array.isArray(e)?(r=e[0],i=e[1]):r=e,n){n=String(n).replaceAll(/\/\*.*?\*\//g,"").trim();var s=!1,a=0,l=!1,c=[];r&&c.push(...Object.keys(r).map(_u)),i&&c.push(...Object.keys(i).map(_u));var h=0,f=-1;const N=n.length;for(var g=0;g<N;g++){var _=n[g];if(l?_==="/"&&n[g-1]==="*"&&(l=!1):s?s===_&&(s=!1):_==="/"&&n[g+1]==="*"?l=!0:_==='"'||_==="'"?s=_:_==="("?a++:_===")"&&a--,!l&&s===!1&&a===0){if(_===":"&&f===-1)f=g;else if(_===";"||g===N-1){if(f!==-1){var E=_u(n.substring(h,f).trim());if(!c.includes(E)){_!==";"&&g++;var R=n.substring(h,g).trim();t+=" "+R+";"}}h=g+1,f=-1}}}}return r&&(t+=nf(r)),i&&(t+=nf(i,!0)),t=t.trim(),t===""?null:t}return n==null?null:String(n)}function hn(n,e,t,r,i,s){var a=n[Uu];if(a!==t||a===void 0){var l=uw(t,r,s);l==null?n.removeAttribute("class"):e?n.className=l:n.setAttribute("class",l),n[Uu]=t}else if(s&&i!==s)for(var c in s){var h=!!s[c];(i==null||h!==!!i[c])&&n.classList.toggle(c,h)}return s}function vu(n,e={},t,r){for(var i in t){var s=t[i];e[i]!==s&&(t[i]==null?n.style.removeProperty(i):n.style.setProperty(i,s,r))}}function dw(n,e,t,r){var i=n[$u];if(i!==e){var s=hw(e,r);s==null?n.removeAttribute("style"):n.style.cssText=s,n[$u]=e}else r&&(Array.isArray(r)?(vu(n,t==null?void 0:t[0],r[0]),vu(n,t==null?void 0:t[1],r[1],"important")):vu(n,t,r));return r}function pg(n,e){e?n.hasAttribute("selected")||n.setAttribute("selected",""):n.removeAttribute("selected")}function rf(n,e){var t=!("__defaultValue"in n);!t&&n.__defaultValue===e||(n.__defaultValue=e,mg(n,!t||"__value"in n))}function mg(n,e){var t=n.__defaultValue,r=n.multiple,i=r?t??[]:null;if(!(r&&!Cc(i))){var s=n.selectedIndex,a=e&&r?new Set(n.selectedOptions):null;for(var l of n.options){var c=ho(l);pg(l,r?i.includes(c):qm(c,t))}if(e)if(a!==null)for(l of n.options){var h=a.has(l);l.selected!==h&&(l.selected=h)}else n.selectedIndex!==s&&(n.selectedIndex=s)}}function sc(n,e,t=!1){if(n.multiple){if(e==null)return;if(!Cc(e))return zy();for(var r of n.options)r.selected=e.includes(ho(r));return}for(r of n.options){var i=ho(r);if(qm(i,e)){r.selected=!0;return}}(!t||e!==void 0)&&(n.selectedIndex=-1)}function zl(n){var e=new MutationObserver(t=>{t.every(fw)||("__defaultValue"in n&&mg(n,!1),"__value"in n&&sc(n,n.__value))});e.observe(n,{childList:!0,subtree:!0,attributes:!0,attributeFilter:["value"]}),Dc(()=>{e.disconnect()})}function yu(n,e,t=e){var r=new WeakSet,i=!0;Bh(n,"change",s=>{var a=s?"[selected]":":checked",l;if(n.multiple)l=[].map.call(n.querySelectorAll(a),ho);else{var c=n.querySelector(a)??n.querySelector("option:not([disabled])");l=c&&ho(c)}t(l),n.__value=l,te!==null&&r.add(te)}),Vc(()=>{var s=e();if(n===document.activeElement){var a=te;if(r.has(a))return}if(sc(n,s,i),i&&s===void 0){var l=n.querySelector(":checked");l!==null&&(s=ho(l),t(s))}n.__value=s,i=!1})}function ho(n){return"__value"in n?n.__value:n.value}function fw(n){if(n.target.closest("selectedcontent")!==null)return!0;if(n.type==="childList"){var e=[...n.addedNodes,...n.removedNodes];return e.length>0&&e.every(t=>t.nodeName==="SELECTEDCONTENT")}return!1}const da=Symbol("class"),fa=Symbol("style"),gg=Symbol("is custom element"),_g=Symbol("is html"),pw=Nc?"input":"INPUT",mw=Nc?"option":"OPTION",vg=Nc?"select":"SELECT",gw=Nc?"progress":"PROGRESS";function Lr(n,e,t,r){var i=yg(n),s=i[e];s!==(i[e]=t)&&(e==="loading"&&(n[Dy]=t),t==null?n.removeAttribute(e):typeof t!="string"&&Eg(n).has(e)?n[e]=t:n.setAttribute(e,t))}function _w(n,e,t,r,i=!1,s=!1){var a=yg(n),l=a[gg],c=!a[_g],h=e||{},f=n.nodeName===mw,g=n.nodeName===vg;try{for(var _ in e)!(_ in t)&&_[0]+_[1]!=="$$"&&(t[_]=null);t.class?t.class=cw(t.class):(r||t[da])&&(t.class=null),t[fa]&&(t.style??(t.style=null));var E=Eg(n);if(n.nodeName===pw&&"type"in t&&("value"in t||"__value"in t)){var R=t.type;(R!==h.type||R===void 0&&n.hasAttribute("type"))&&(h.type=R,Lr(n,"type",R,s))}for(const Y in t){let I=t[Y];if(f&&Y==="value"&&I==null){n.value=n.__value="",h[Y]=I;continue}if(Y==="class"){var N=n.namespaceURI==="http://www.w3.org/1999/xhtml";hn(n,N,I,r,e==null?void 0:e[da],t[da]),h[Y]=I,h[da]=t[da];continue}if(Y==="style"){dw(n,I,e==null?void 0:e[fa],t[fa]),h[Y]=I,h[fa]=t[fa];continue}var P=h[Y];if(!(I===P&&!(I===void 0&&n.hasAttribute(Y)))){h[Y]=I;var U=Y[0]+Y[1];if(U!=="$$")if(U==="on"){const v={},w="$$"+Y;let A=Y.slice(2);var B=ME(A);if(DE(A)&&(A=A.slice(0,-7),v.capture=!0),!B&&P){if(I!=null)continue;n.removeEventListener(A,h[w],v),h[w]=null}if(B)oe(A,n,I),ug([A]);else if(I!=null){let C=function(S){h[Y].call(this,S)};var qe=C;h[w]=cg(A,n,C,v)}}else if(Y==="style")Lr(n,Y,I);else if(Y==="autofocus")lE(n,!!I);else if(!l&&(Y==="__value"||Y==="value"&&I!=null))n.__value=I,(P==null||n.value!==I||I===0&&n.nodeName===gw)&&(n.value=I);else if(Y==="selected"&&f)pg(n,I);else{var z=Y;c||(z=LE(z));var J=z==="defaultValue"||z==="defaultChecked";if(g&&z==="defaultValue")continue;if(I==null&&!l&&!J)if(a[Y]=null,z==="value"||z==="checked"){let v=n;const w=e===void 0;if(z==="value"){let A=v.defaultValue;v.removeAttribute(z),v.defaultValue=A,v.value=v.__value=w?A:null}else{let A=v.defaultChecked;v.removeAttribute(z),v.defaultChecked=A,v.checked=w?A:!1}}else n.removeAttribute(Y);else J||(l||typeof I!="string")&&E.has(z)?(n[z]=I,z in a&&(a[z]=zt)):typeof I!="function"&&Lr(n,z,I,s)}}}}finally{}return h}function sf(n,e,t=[],r=[],i=[],s,a=!1,l=!1){Pm(i,t,r,c=>{var h=void 0,f={},g=n.nodeName===vg,_=!1;if(Ym(()=>{var R=e(...c.map(p)),N=_w(n,h,R,s,a,l);if(_&&g){var P=n;"defaultValue"in R&&rf(P,R.defaultValue),"value"in R&&sc(P,R.value)}for(let B of Object.getOwnPropertySymbols(f))R[B]||pn(f[B]);for(let B of Object.getOwnPropertySymbols(R)){var U=R[B];B.description===By&&(!h||U!==h[B])&&(f[B]&&pn(f[B]),f[B]=Ln(()=>aw(n,()=>U))),N[B]=U}h=N}),g){var E=n;Vc(()=>{var R=h;"defaultValue"in R&&rf(E,R.defaultValue),sc(E,R.value,!0),zl(E)})}_=!0})}function yg(n){return n[Ul]??(n[Ul]={[gg]:n.nodeName.includes("-"),[_g]:n.namespaceURI===Em})}var of=new Map;function Eg(n){var e=n.getAttribute("is")||n.nodeName,t=of.get(e);if(t)return t;of.set(e,t=new Set);for(var r,i=n,s=Element.prototype;s!==i;){r=Sy(i);for(var a in r)r[a].set&&a!=="innerHTML"&&a!=="textContent"&&a!=="innerText"&&t.add(a);i=pm(i)}return t}function Qe(n,e,t=e){var r=new WeakSet;Bh(n,"input",async i=>{var s=i?n.defaultValue:n.value;if(s=Eu(n)?wu(s):s,t(s),te!==null&&r.add(te),await OE(),s!==(s=e())){var a=n.selectionStart,l=n.selectionEnd,c=n.value.length;if(n.value=s??"",l!==null){var h=n.value.length;a===l&&l===c&&h>c?(n.selectionStart=h,n.selectionEnd=h):(n.selectionStart=a,n.selectionEnd=Math.min(l,h))}}}),Mc(e)==null&&n.value&&(t(Eu(n)?wu(n.value):n.value),te!==null&&r.add(te)),Wh(()=>{var i=e();if(n===document.activeElement){var s=te;if(r.has(s))return}Eu(n)&&i===wu(n.value)||n.type==="date"&&!i&&!n.value||i!==n.value&&(n.value=i??"")})}function bl(n,e,t=e){Bh(n,"change",r=>{var i=r?n.defaultChecked:n.checked;t(i)}),Mc(e)==null&&t(n.checked),Wh(()=>{var r=e();n.checked=!!r})}function Eu(n){var e=n.type;return e==="number"||e==="range"}function wu(n){return n===""?null:+n}const vw={get(n,e){if(!n.exclude.has(e))return n.props[e]},set(n,e){return!1},getOwnPropertyDescriptor(n,e){if(!n.exclude.has(e)&&e in n.props)return{enumerable:!0,configurable:!0,value:n.props[e]}},has(n,e){return n.exclude.has(e)?!1:e in n.props},ownKeys(n){return Reflect.ownKeys(n.props).filter(e=>!n.exclude.has(e))}};function vt(n,e,t){return new Proxy({props:n,exclude:e},vw)}const yw={get(n,e){let t=n.props.length;for(;t--;){let r=n.props[t];if(ua(r)&&(r=r()),typeof r=="object"&&r!==null&&e in r)return r[e]}},set(n,e,t){let r=n.props.length;for(;r--;){let i=n.props[r];ua(i)&&(i=i());const s=Ns(i,e);if(s&&s.set)return s.set(t),!0}return!1},getOwnPropertyDescriptor(n,e){let t=n.props.length;for(;t--;){let r=n.props[t];if(ua(r)&&(r=r()),typeof r=="object"&&r!==null&&e in r){const i=Ns(r,e);return i&&!i.configurable&&(i.configurable=!0),i}}},has(n,e){if(e===uo||e===Oy)return!1;for(let t of n.props)if(ua(t)&&(t=t()),t!=null&&e in t)return!0;return!1},ownKeys(n){const e=[];for(let t of n.props)if(ua(t)&&(t=t()),!!t){for(const r in t)e.includes(r)||e.push(r);for(const r of Object.getOwnPropertySymbols(t))e.includes(r)||e.push(r)}return e}};function It(...n){return new Proxy({props:n},yw)}function ui(n,e,t,r){var i=void 0,s=()=>(i??(i=Oc(r)),p(i)),a;a=n[e],a===void 0&&r!==void 0&&(a=s());var l;return l=()=>{var c=n[e];return c===void 0?s():c},l}function Ew(n){Nn===null&&Am(),Wu(()=>{const e=Mc(n);if(typeof e=="function")return e})}const ww="5";var hm;typeof window<"u"&&((hm=window.__svelte??(window.__svelte={})).v??(hm.v=new Set)).add(ww);/**
 * @file
 * @license @lucide/svelte v1.69.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const ys={xmlns:"http://www.w3.org/2000/svg",width:24,height:24,viewBox:"0 0 24 24",fill:"none",stroke:"currentColor","stroke-width":2,"stroke-linecap":"round","stroke-linejoin":"round"};/**
 * @file
 * @license @lucide/svelte v1.69.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const eh=(...n)=>n.filter((e,t,r)=>!!e&&e.trim()!==""&&r.indexOf(e)===t).join(" ").trim();/**
 * @file
 * @license @lucide/svelte v1.69.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */function Tu(n){return n!=null}function Tw(n,e={}){var _,E;const t=e.attributeNames??{},r=R=>t[R]??R,i=n.size??n.width??ys.width,s=n.size??n.height??ys.height,a=((_=n.aliases)==null?void 0:_.filter(R=>typeof R=="string"&&R.trim()!=="").map(R=>`lucide-${R}`))??[],l=[...n.name?[`lucide-${n.name}`]:[],...a],c=((E=e.className)==null?void 0:E.split(" ").filter(Boolean))??[],h=e.includeDefaultClasses===!1?eh(...c):eh("lucide",...l,...c),f=e.absoluteStrokeWidth?Number(e.strokeWidth??ys["stroke-width"])*Number(n.size??n.width??ys.width)/Number(e.size??e.width??ys.width):e.strokeWidth??ys["stroke-width"];return["svg",{...Object.entries(ys).reduce((R,[N,P])=>(R[r(N)]=P,R),{}),..."color"in e&&e.color&&{[r("stroke")]:e.color},..."size"in e&&Tu(e.size)&&{[r("width")]:e.size,[r("height")]:e.size},..."width"in e&&Tu(e.width)&&{[r("width")]:e.width},..."height"in e&&Tu(e.height)&&{[r("height")]:e.height},[r("stroke-width")]:f,...h&&{[r("class")]:h},[r("viewBox")]:`0 0 ${i} ${s}`,...e.hasA11yProp===!1?{[r("aria-hidden")]:"true"}:{},..."attributes"in e&&e.attributes},n.node.map(R=>{const[N,P,U]=R,B=e.nonScalingStroke?{[r("vector-effect")]:"non-scaling-stroke",...P}:P;return U?[N,B,U]:[N,B]})]}/**
 * @file
 * @license @lucide/svelte v1.69.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Iw=n=>{for(const e in n)if(e.startsWith("aria-")||e==="role"||e==="title")return!0;return!1};/**
 * @file
 * @license @lucide/svelte v1.69.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Aw=Symbol("lucide-context"),bw=()=>sE(Aw);var Sw=new Set(["$$slots","$$events","$$legacy","color","size","width","height","strokeWidth","absoluteStrokeWidth","nonScalingStroke","iconNode","icon","class","children"]),Rw=qE("<svg><!><!></svg>");function At(n,e){Fh(e,!0);const t=bw()??{},r=ui(e,"color",19,()=>t.color??"currentColor"),i=ui(e,"size",19,()=>t.size??24),s=ui(e,"width",19,i),a=ui(e,"height",19,i),l=ui(e,"strokeWidth",19,()=>t.strokeWidth??2),c=ui(e,"absoluteStrokeWidth",19,()=>t.absoluteStrokeWidth??!1),h=ui(e,"nonScalingStroke",19,()=>t.nonScalingStroke??!1),f=ui(e,"iconNode",19,()=>[]),g=ui(e,"icon",19,()=>({node:f(),aliases:[],size:24})),_=vt(e,Sw),E=rr(()=>!!e.children||Iw(_)),R=rr(()=>Tw(g(),{color:r(),width:s(),height:a(),strokeWidth:l(),absoluteStrokeWidth:c(),nonScalingStroke:h(),className:eh("lucide-icon",t.class),hasA11yProp:p(E),attributes:_})),N=rr(()=>Hd(p(R),3)),P=rr(()=>p(N)[1]),U=rr(()=>ky(p(N)[2],()=>[],!0)),B=rr(()=>({...p(P),class:[...p(P).class.split(" "),e.class]}));var z=Rw();sf(z,()=>({...p(B)}));var J=b(z);zi(J,17,()=>p(U),ew,(Y,I)=>{var v=rr(()=>Hd(p(I),2));let w=()=>p(v)[0],A=()=>p(v)[1];var C=dg(),S=ro(C);sw(S,w,!0,(T,Ze)=>{sf(T,()=>({...A()}))}),Q(Y,C)});var qe=y(J);iw(qe,()=>e.children??Mh),Q(n,z),Uh()}const wg={name:"arrow-down-left",size:24,node:[["path",{d:"M17 7 7 17"}],["path",{d:"M17 17H7V7"}]]};wg.node;var Cw=new Set(["$$slots","$$events","$$legacy"]);function Sl(n,e){let t=vt(e,Cw);At(n,It(()=>t,{get icon(){return wg}}))}const Tg={name:"arrow-left",size:24,node:[["path",{d:"m12 19-7-7 7-7"}],["path",{d:"M19 12H5"}]]};Tg.node;var Pw=new Set(["$$slots","$$events","$$legacy"]);function af(n,e){let t=vt(e,Pw);At(n,It(()=>t,{get icon(){return Tg}}))}const Ig={name:"arrow-right",size:24,node:[["path",{d:"M5 12h14"}],["path",{d:"m12 5 7 7-7 7"}]]};Ig.node;var kw=new Set(["$$slots","$$events","$$legacy"]);function Rl(n,e){let t=vt(e,kw);At(n,It(()=>t,{get icon(){return Ig}}))}const Ag={name:"boxes",size:24,node:[["path",{d:"M2.97 12.92A2 2 0 0 0 2 14.63v3.24a2 2 0 0 0 .97 1.71l3 1.8a2 2 0 0 0 2.06 0L12 19v-5.5l-5-3-4.03 2.42Z"}],["path",{d:"m7 16.5-4.74-2.85"}],["path",{d:"m7 16.5 5-3"}],["path",{d:"M7 16.5v5.17"}],["path",{d:"M12 13.5V19l3.97 2.38a2 2 0 0 0 2.06 0l3-1.8a2 2 0 0 0 .97-1.71v-3.24a2 2 0 0 0-.97-1.71L17 10.5l-5 3Z"}],["path",{d:"m17 16.5-5-3"}],["path",{d:"m17 16.5 4.74-2.85"}],["path",{d:"M17 16.5v5.17"}],["path",{d:"M7.97 4.42A2 2 0 0 0 7 6.13v4.37l5 3 5-3V6.13a2 2 0 0 0-.97-1.71l-3-1.8a2 2 0 0 0-2.06 0l-3 1.8Z"}],["path",{d:"M12 8 7.26 5.15"}],["path",{d:"m12 8 4.74-2.85"}],["path",{d:"M12 13.5V8"}]]};Ag.node;var Nw=new Set(["$$slots","$$events","$$legacy"]);function eo(n,e){let t=vt(e,Nw);At(n,It(()=>t,{get icon(){return Ag}}))}const bg={name:"check",size:24,node:[["path",{d:"M20 6 9 17l-5-5"}]]};bg.node;var Ow=new Set(["$$slots","$$events","$$legacy"]);function pa(n,e){let t=vt(e,Ow);At(n,It(()=>t,{get icon(){return bg}}))}const Sg={name:"chevron-down",size:24,node:[["path",{d:"m6 9 6 6 6-6"}]]};Sg.node;var Dw=new Set(["$$slots","$$events","$$legacy"]);function lf(n,e){let t=vt(e,Dw);At(n,It(()=>t,{get icon(){return Sg}}))}const Rg={name:"circle-exclamation-point",size:24,node:[["circle",{cx:"12",cy:"12",r:"10"}],["line",{x1:"12",x2:"12",y1:"8",y2:"12"}],["line",{x1:"12",x2:"12.01",y1:"16",y2:"16"}]],aliases:["alert-circle","circle-alert"]};Rg.node;var Vw=new Set(["$$slots","$$events","$$legacy"]);function Iu(n,e){let t=vt(e,Vw);At(n,It(()=>t,{get icon(){return Rg}}))}const Cg={name:"clipboard-list",size:24,node:[["rect",{width:"8",height:"4",x:"8",y:"2",rx:"1",ry:"1"}],["path",{d:"M16 4h2a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2V6a2 2 0 0 1 2-2h2"}],["path",{d:"M12 11h4"}],["path",{d:"M12 16h4"}],["path",{d:"M8 11h.01"}],["path",{d:"M8 16h.01"}]]};Cg.node;var Mw=new Set(["$$slots","$$events","$$legacy"]);function cf(n,e){let t=vt(e,Mw);At(n,It(()=>t,{get icon(){return Cg}}))}const Pg={name:"lock-keyhole",size:24,node:[["circle",{cx:"12",cy:"16",r:"1"}],["rect",{x:"3",y:"10",width:"18",height:"12",rx:"2"}],["path",{d:"M7 10V7a5 5 0 0 1 10 0v3"}]]};Pg.node;var xw=new Set(["$$slots","$$events","$$legacy"]);function uf(n,e){let t=vt(e,xw);At(n,It(()=>t,{get icon(){return Pg}}))}const kg={name:"log-out",size:24,node:[["path",{d:"m16 17 5-5-5-5"}],["path",{d:"M21 12H9"}],["path",{d:"M9 21H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h4"}]]};kg.node;var Lw=new Set(["$$slots","$$events","$$legacy"]);function Au(n,e){let t=vt(e,Lw);At(n,It(()=>t,{get icon(){return kg}}))}const Ng={name:"minus",size:24,node:[["path",{d:"M5 12h14"}]]};Ng.node;var Fw=new Set(["$$slots","$$events","$$legacy"]);function hf(n,e){let t=vt(e,Fw);At(n,It(()=>t,{get icon(){return Ng}}))}const Og={name:"package-plus",size:24,node:[["path",{d:"M12 22V12"}],["path",{d:"M16 17h6"}],["path",{d:"M19 14v6"}],["path",{d:"M21 10.535V8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.729l7 4a2 2 0 0 0 2 .001l1.675-.955"}],["path",{d:"M3.29 7 12 12l8.71-5"}],["path",{d:"m7.5 4.27 8.997 5.148"}]]};Og.node;var Uw=new Set(["$$slots","$$events","$$legacy"]);function bu(n,e){let t=vt(e,Uw);At(n,It(()=>t,{get icon(){return Og}}))}const Dg={name:"plus",size:24,node:[["path",{d:"M5 12h14"}],["path",{d:"M12 5v14"}]]};Dg.node;var $w=new Set(["$$slots","$$events","$$legacy"]);function ma(n,e){let t=vt(e,$w);At(n,It(()=>t,{get icon(){return Dg}}))}const Vg={name:"search",size:24,node:[["path",{d:"m21 21-4.34-4.34"}],["circle",{cx:"11",cy:"11",r:"8"}]]};Vg.node;var Bw=new Set(["$$slots","$$events","$$legacy"]);function Cl(n,e){let t=vt(e,Bw);At(n,It(()=>t,{get icon(){return Vg}}))}const Mg={name:"settings-2",size:24,node:[["path",{d:"M14 17H5"}],["path",{d:"M19 7h-9"}],["circle",{cx:"17",cy:"17",r:"3"}],["circle",{cx:"7",cy:"7",r:"3"}]]};Mg.node;var qw=new Set(["$$slots","$$events","$$legacy"]);function Pl(n,e){let t=vt(e,qw);At(n,It(()=>t,{get icon(){return Mg}}))}const xg={name:"shield-check",size:24,node:[["path",{d:"M20 13c0 5-3.5 7.5-7.66 8.95a1 1 0 0 1-.67-.01C7.5 20.5 4 18 4 13V6a1 1 0 0 1 1-1c2 0 4.5-1.2 6.24-2.72a1.17 1.17 0 0 1 1.52 0C14.51 3.81 17 5 19 5a1 1 0 0 1 1 1z"}],["path",{d:"m9 12 2 2 4-4"}]]};xg.node;var zw=new Set(["$$slots","$$events","$$legacy"]);function jw(n,e){let t=vt(e,zw);At(n,It(()=>t,{get icon(){return xg}}))}const Lg={name:"trash",size:24,node:[["path",{d:"M10 11v6"}],["path",{d:"M14 11v6"}],["path",{d:"M19 6v14a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2V6"}],["path",{d:"M3 6h18"}],["path",{d:"M8 6V4a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v2"}]],aliases:["trash-2"]};Lg.node;var Hw=new Set(["$$slots","$$events","$$legacy"]);function df(n,e){let t=vt(e,Hw);At(n,It(()=>t,{get icon(){return Lg}}))}const Fg={name:"upload",size:24,node:[["path",{d:"M12 3v12"}],["path",{d:"m17 8-5-5-5 5"}],["path",{d:"M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"}]]};Fg.node;var Ww=new Set(["$$slots","$$events","$$legacy"]);function Gw(n,e){let t=vt(e,Ww);At(n,It(()=>t,{get icon(){return Fg}}))}const Ug={name:"user-round",size:24,node:[["circle",{cx:"12",cy:"8",r:"5"}],["path",{d:"M20 21a8 8 0 0 0-16 0"}]],aliases:["user-2"]};Ug.node;var Kw=new Set(["$$slots","$$events","$$legacy"]);function Qw(n,e){let t=vt(e,Kw);At(n,It(()=>t,{get icon(){return Ug}}))}const $g={name:"users",size:24,node:[["path",{d:"M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2"}],["path",{d:"M16 3.128a4 4 0 0 1 0 7.744"}],["path",{d:"M22 21v-2a4 4 0 0 0-3-3.87"}],["circle",{cx:"9",cy:"7",r:"4"}]]};$g.node;var Yw=new Set(["$$slots","$$events","$$legacy"]);function Jw(n,e){let t=vt(e,Yw);At(n,It(()=>t,{get icon(){return $g}}))}const Bg={name:"warehouse",size:24,node:[["path",{d:"M18 21V10a1 1 0 0 0-1-1H7a1 1 0 0 0-1 1v11"}],["path",{d:"M22 19a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V8a2 2 0 0 1 1.132-1.803l7.95-3.974a2 2 0 0 1 1.837 0l7.948 3.974A2 2 0 0 1 22 8z"}],["path",{d:"M6 13h12"}],["path",{d:"M6 17h12"}]]};Bg.node;var Xw=new Set(["$$slots","$$events","$$legacy"]);function to(n,e){let t=vt(e,Xw);At(n,It(()=>t,{get icon(){return Bg}}))}const qg={name:"wrench",size:24,node:[["path",{d:"M14.7 6.3a1 1 0 0 0 0 1.4l1.6 1.6a1 1 0 0 0 1.4 0l3.106-3.105c.32-.322.863-.22.983.218a6 6 0 0 1-8.259 7.057l-7.91 7.91a1 1 0 0 1-2.999-3l7.91-7.91a6 6 0 0 1 7.057-8.259c.438.12.54.662.219.984z"}]]};qg.node;var Zw=new Set(["$$slots","$$events","$$legacy"]);function eT(n,e){let t=vt(e,Zw);At(n,It(()=>t,{get icon(){return qg}}))}const zg={name:"x",size:24,node:[["path",{d:"M18 6 6 18"}],["path",{d:"m6 6 12 12"}]]};zg.node;var tT=new Set(["$$slots","$$events","$$legacy"]);function Es(n,e){let t=vt(e,tT);At(n,It(()=>t,{get icon(){return zg}}))}const nT=()=>{};var ff={};/**
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
 */const jg=function(n){const e=[];let t=0;for(let r=0;r<n.length;r++){let i=n.charCodeAt(r);i<128?e[t++]=i:i<2048?(e[t++]=i>>6|192,e[t++]=i&63|128):(i&64512)===55296&&r+1<n.length&&(n.charCodeAt(r+1)&64512)===56320?(i=65536+((i&1023)<<10)+(n.charCodeAt(++r)&1023),e[t++]=i>>18|240,e[t++]=i>>12&63|128,e[t++]=i>>6&63|128,e[t++]=i&63|128):(e[t++]=i>>12|224,e[t++]=i>>6&63|128,e[t++]=i&63|128)}return e},rT=function(n){const e=[];let t=0,r=0;for(;t<n.length;){const i=n[t++];if(i<128)e[r++]=String.fromCharCode(i);else if(i>191&&i<224){const s=n[t++];e[r++]=String.fromCharCode((i&31)<<6|s&63)}else if(i>239&&i<365){const s=n[t++],a=n[t++],l=n[t++],c=((i&7)<<18|(s&63)<<12|(a&63)<<6|l&63)-65536;e[r++]=String.fromCharCode(55296+(c>>10)),e[r++]=String.fromCharCode(56320+(c&1023))}else{const s=n[t++],a=n[t++];e[r++]=String.fromCharCode((i&15)<<12|(s&63)<<6|a&63)}}return e.join("")},Yh={byteToCharMap_:null,charToByteMap_:null,byteToCharMapWebSafe_:null,charToByteMapWebSafe_:null,ENCODED_VALS_BASE:"ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",get ENCODED_VALS(){return this.ENCODED_VALS_BASE+"+/="},get ENCODED_VALS_WEBSAFE(){return this.ENCODED_VALS_BASE+"-_."},HAS_NATIVE_SUPPORT:typeof atob=="function",encodeByteArray(n,e){if(!Array.isArray(n))throw Error("encodeByteArray takes an array as a parameter");this.init_();const t=e?this.byteToCharMapWebSafe_:this.byteToCharMap_,r=[];for(let i=0;i<n.length;i+=3){const s=n[i],a=i+1<n.length,l=a?n[i+1]:0,c=i+2<n.length,h=c?n[i+2]:0,f=s>>2,g=(s&3)<<4|l>>4;let _=(l&15)<<2|h>>6,E=h&63;c||(E=64,a||(_=64)),r.push(t[f],t[g],t[_],t[E])}return r.join("")},encodeString(n,e){return this.HAS_NATIVE_SUPPORT&&!e?btoa(n):this.encodeByteArray(jg(n),e)},decodeString(n,e){return this.HAS_NATIVE_SUPPORT&&!e?atob(n):rT(this.decodeStringToByteArray(n,e))},decodeStringToByteArray(n,e){this.init_();const t=e?this.charToByteMapWebSafe_:this.charToByteMap_,r=[];for(let i=0;i<n.length;){const s=t[n.charAt(i++)],l=i<n.length?t[n.charAt(i)]:0;++i;const h=i<n.length?t[n.charAt(i)]:64;++i;const g=i<n.length?t[n.charAt(i)]:64;if(++i,s==null||l==null||h==null||g==null)throw new iT;const _=s<<2|l>>4;if(r.push(_),h!==64){const E=l<<4&240|h>>2;if(r.push(E),g!==64){const R=h<<6&192|g;r.push(R)}}}return r},init_(){if(!this.byteToCharMap_){this.byteToCharMap_={},this.charToByteMap_={},this.byteToCharMapWebSafe_={},this.charToByteMapWebSafe_={};for(let n=0;n<this.ENCODED_VALS.length;n++)this.byteToCharMap_[n]=this.ENCODED_VALS.charAt(n),this.charToByteMap_[this.byteToCharMap_[n]]=n,this.byteToCharMapWebSafe_[n]=this.ENCODED_VALS_WEBSAFE.charAt(n),this.charToByteMapWebSafe_[this.byteToCharMapWebSafe_[n]]=n,n>=this.ENCODED_VALS_BASE.length&&(this.charToByteMap_[this.ENCODED_VALS_WEBSAFE.charAt(n)]=n,this.charToByteMapWebSafe_[this.ENCODED_VALS.charAt(n)]=n)}}};class iT extends Error{constructor(){super(...arguments),this.name="DecodeBase64StringError"}}const sT=function(n){const e=jg(n);return Yh.encodeByteArray(e,!0)},Hg=function(n){return sT(n).replace(/\./g,"")},Wg=function(n){try{return Yh.decodeString(n,!0)}catch(e){console.error("base64Decode failed: ",e)}return null};/**
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
 */function oT(){if(typeof self<"u")return self;if(typeof window<"u")return window;if(typeof global<"u")return global;throw new Error("Unable to locate global object.")}/**
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
 */const aT=()=>oT().__FIREBASE_DEFAULTS__,lT=()=>{if(typeof process>"u"||typeof ff>"u")return;const n=ff.__FIREBASE_DEFAULTS__;if(n)return JSON.parse(n)},cT=()=>{if(typeof document>"u")return;let n;try{n=document.cookie.match(/__FIREBASE_DEFAULTS__=([^;]+)/)}catch{return}const e=n&&Wg(n[1]);return e&&JSON.parse(e)},xc=()=>{try{return nT()||aT()||lT()||cT()}catch(n){console.info(`Unable to get __FIREBASE_DEFAULTS__ due to: ${n}`);return}},Gg=n=>{var e,t;return(t=(e=xc())===null||e===void 0?void 0:e.emulatorHosts)===null||t===void 0?void 0:t[n]},uT=n=>{const e=Gg(n);if(!e)return;const t=e.lastIndexOf(":");if(t<=0||t+1===e.length)throw new Error(`Invalid host ${e} with no separate hostname and port!`);const r=parseInt(e.substring(t+1),10);return e[0]==="["?[e.substring(1,t-1),r]:[e.substring(0,t),r]},Kg=()=>{var n;return(n=xc())===null||n===void 0?void 0:n.config},Qg=n=>{var e;return(e=xc())===null||e===void 0?void 0:e[`_${n}`]};/**
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
 */class th{constructor(){this.reject=()=>{},this.resolve=()=>{},this.promise=new Promise((e,t)=>{this.resolve=e,this.reject=t})}wrapCallback(e){return(t,r)=>{t?this.reject(t):this.resolve(r),typeof e=="function"&&(this.promise.catch(()=>{}),e.length===1?e(t):e(t,r))}}}/**
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
 */function zs(n){try{return(n.startsWith("http://")||n.startsWith("https://")?new URL(n).hostname:n).endsWith(".cloudworkstations.dev")}catch{return!1}}async function Jh(n){return(await fetch(n,{credentials:"include"})).ok}const Na={};function hT(){const n={prod:[],emulator:[]};for(const e of Object.keys(Na))Na[e]?n.emulator.push(e):n.prod.push(e);return n}function dT(n){let e=document.getElementById(n),t=!1;return e||(e=document.createElement("div"),e.setAttribute("id",n),t=!0),{created:t,element:e}}let pf=!1;function Yg(n,e){if(typeof window>"u"||typeof document>"u"||!zs(window.location.host)||Na[n]===e||Na[n]||pf)return;Na[n]=e;function t(_){return`__firebase__banner__${_}`}const r="__firebase__banner",s=hT().prod.length>0;function a(){const _=document.getElementById(r);_&&_.remove()}function l(_){_.style.display="flex",_.style.background="#7faaf0",_.style.position="fixed",_.style.bottom="5px",_.style.left="5px",_.style.padding=".5em",_.style.borderRadius="5px",_.style.alignItems="center"}function c(_,E){_.setAttribute("width","24"),_.setAttribute("id",E),_.setAttribute("height","24"),_.setAttribute("viewBox","0 0 24 24"),_.setAttribute("fill","none"),_.style.marginLeft="-6px"}function h(){const _=document.createElement("span");return _.style.cursor="pointer",_.style.marginLeft="16px",_.style.fontSize="24px",_.innerHTML=" &times;",_.onclick=()=>{pf=!0,a()},_}function f(_,E){_.setAttribute("id",E),_.innerText="Learn more",_.href="https://firebase.google.com/docs/studio/preview-apps#preview-backend",_.setAttribute("target","__blank"),_.style.paddingLeft="5px",_.style.textDecoration="underline"}function g(){const _=dT(r),E=t("text"),R=document.getElementById(E)||document.createElement("span"),N=t("learnmore"),P=document.getElementById(N)||document.createElement("a"),U=t("preprendIcon"),B=document.getElementById(U)||document.createElementNS("http://www.w3.org/2000/svg","svg");if(_.created){const z=_.element;l(z),f(P,N);const J=h();c(B,U),z.append(B,R,P,J),document.body.appendChild(z)}s?(R.innerText="Preview backend disconnected.",B.innerHTML=`<g clip-path="url(#clip0_6013_33858)">
<path d="M4.8 17.6L12 5.6L19.2 17.6H4.8ZM6.91667 16.4H17.0833L12 7.93333L6.91667 16.4ZM12 15.6C12.1667 15.6 12.3056 15.5444 12.4167 15.4333C12.5389 15.3111 12.6 15.1667 12.6 15C12.6 14.8333 12.5389 14.6944 12.4167 14.5833C12.3056 14.4611 12.1667 14.4 12 14.4C11.8333 14.4 11.6889 14.4611 11.5667 14.5833C11.4556 14.6944 11.4 14.8333 11.4 15C11.4 15.1667 11.4556 15.3111 11.5667 15.4333C11.6889 15.5444 11.8333 15.6 12 15.6ZM11.4 13.6H12.6V10.4H11.4V13.6Z" fill="#212121"/>
</g>
<defs>
<clipPath id="clip0_6013_33858">
<rect width="24" height="24" fill="white"/>
</clipPath>
</defs>`):(B.innerHTML=`<g clip-path="url(#clip0_6083_34804)">
<path d="M11.4 15.2H12.6V11.2H11.4V15.2ZM12 10C12.1667 10 12.3056 9.94444 12.4167 9.83333C12.5389 9.71111 12.6 9.56667 12.6 9.4C12.6 9.23333 12.5389 9.09444 12.4167 8.98333C12.3056 8.86111 12.1667 8.8 12 8.8C11.8333 8.8 11.6889 8.86111 11.5667 8.98333C11.4556 9.09444 11.4 9.23333 11.4 9.4C11.4 9.56667 11.4556 9.71111 11.5667 9.83333C11.6889 9.94444 11.8333 10 12 10ZM12 18.4C11.1222 18.4 10.2944 18.2333 9.51667 17.9C8.73889 17.5667 8.05556 17.1111 7.46667 16.5333C6.88889 15.9444 6.43333 15.2611 6.1 14.4833C5.76667 13.7056 5.6 12.8778 5.6 12C5.6 11.1111 5.76667 10.2833 6.1 9.51667C6.43333 8.73889 6.88889 8.06111 7.46667 7.48333C8.05556 6.89444 8.73889 6.43333 9.51667 6.1C10.2944 5.76667 11.1222 5.6 12 5.6C12.8889 5.6 13.7167 5.76667 14.4833 6.1C15.2611 6.43333 15.9389 6.89444 16.5167 7.48333C17.1056 8.06111 17.5667 8.73889 17.9 9.51667C18.2333 10.2833 18.4 11.1111 18.4 12C18.4 12.8778 18.2333 13.7056 17.9 14.4833C17.5667 15.2611 17.1056 15.9444 16.5167 16.5333C15.9389 17.1111 15.2611 17.5667 14.4833 17.9C13.7167 18.2333 12.8889 18.4 12 18.4ZM12 17.2C13.4444 17.2 14.6722 16.6944 15.6833 15.6833C16.6944 14.6722 17.2 13.4444 17.2 12C17.2 10.5556 16.6944 9.32778 15.6833 8.31667C14.6722 7.30555 13.4444 6.8 12 6.8C10.5556 6.8 9.32778 7.30555 8.31667 8.31667C7.30556 9.32778 6.8 10.5556 6.8 12C6.8 13.4444 7.30556 14.6722 8.31667 15.6833C9.32778 16.6944 10.5556 17.2 12 17.2Z" fill="#212121"/>
</g>
<defs>
<clipPath id="clip0_6083_34804">
<rect width="24" height="24" fill="white"/>
</clipPath>
</defs>`,R.innerText="Preview backend running in this workspace."),R.setAttribute("id",E)}document.readyState==="loading"?window.addEventListener("DOMContentLoaded",g):g()}/**
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
 */function Dn(){return typeof navigator<"u"&&typeof navigator.userAgent=="string"?navigator.userAgent:""}function fT(){return typeof window<"u"&&!!(window.cordova||window.phonegap||window.PhoneGap)&&/ios|iphone|ipod|ipad|android|blackberry|iemobile/i.test(Dn())}function pT(){var n;const e=(n=xc())===null||n===void 0?void 0:n.forceEnvironment;if(e==="node")return!0;if(e==="browser")return!1;try{return Object.prototype.toString.call(global.process)==="[object process]"}catch{return!1}}function mT(){return typeof navigator<"u"&&navigator.userAgent==="Cloudflare-Workers"}function gT(){const n=typeof chrome=="object"?chrome.runtime:typeof browser=="object"?browser.runtime:void 0;return typeof n=="object"&&n.id!==void 0}function _T(){return typeof navigator=="object"&&navigator.product==="ReactNative"}function vT(){const n=Dn();return n.indexOf("MSIE ")>=0||n.indexOf("Trident/")>=0}function yT(){return!pT()&&!!navigator.userAgent&&navigator.userAgent.includes("Safari")&&!navigator.userAgent.includes("Chrome")}function Jg(){try{return typeof indexedDB=="object"}catch{return!1}}function ET(){return new Promise((n,e)=>{try{let t=!0;const r="validate-browser-context-for-indexeddb-analytics-module",i=self.indexedDB.open(r);i.onsuccess=()=>{i.result.close(),t||self.indexedDB.deleteDatabase(r),n(!0)},i.onupgradeneeded=()=>{t=!1},i.onerror=()=>{var s;e(((s=i.error)===null||s===void 0?void 0:s.message)||"")}}catch(t){e(t)}})}/**
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
 */const wT="FirebaseError";class ii extends Error{constructor(e,t,r){super(t),this.code=e,this.customData=r,this.name=wT,Object.setPrototypeOf(this,ii.prototype),Error.captureStackTrace&&Error.captureStackTrace(this,Go.prototype.create)}}class Go{constructor(e,t,r){this.service=e,this.serviceName=t,this.errors=r}create(e,...t){const r=t[0]||{},i=`${this.service}/${e}`,s=this.errors[e],a=s?TT(s,r):"Error",l=`${this.serviceName}: ${a} (${i}).`;return new ii(i,l,r)}}function TT(n,e){return n.replace(IT,(t,r)=>{const i=e[r];return i!=null?String(i):`<${r}?>`})}const IT=/\{\$([^}]+)}/g;function AT(n){for(const e in n)if(Object.prototype.hasOwnProperty.call(n,e))return!1;return!0}function Us(n,e){if(n===e)return!0;const t=Object.keys(n),r=Object.keys(e);for(const i of t){if(!r.includes(i))return!1;const s=n[i],a=e[i];if(mf(s)&&mf(a)){if(!Us(s,a))return!1}else if(s!==a)return!1}for(const i of r)if(!t.includes(i))return!1;return!0}function mf(n){return n!==null&&typeof n=="object"}/**
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
 */function Za(n){const e=[];for(const[t,r]of Object.entries(n))Array.isArray(r)?r.forEach(i=>{e.push(encodeURIComponent(t)+"="+encodeURIComponent(i))}):e.push(encodeURIComponent(t)+"="+encodeURIComponent(r));return e.length?"&"+e.join("&"):""}function Ta(n){const e={};return n.replace(/^\?/,"").split("&").forEach(r=>{if(r){const[i,s]=r.split("=");e[decodeURIComponent(i)]=decodeURIComponent(s)}}),e}function Ia(n){const e=n.indexOf("?");if(!e)return"";const t=n.indexOf("#",e);return n.substring(e,t>0?t:void 0)}function bT(n,e){const t=new ST(n,e);return t.subscribe.bind(t)}class ST{constructor(e,t){this.observers=[],this.unsubscribes=[],this.observerCount=0,this.task=Promise.resolve(),this.finalized=!1,this.onNoObservers=t,this.task.then(()=>{e(this)}).catch(r=>{this.error(r)})}next(e){this.forEachObserver(t=>{t.next(e)})}error(e){this.forEachObserver(t=>{t.error(e)}),this.close(e)}complete(){this.forEachObserver(e=>{e.complete()}),this.close()}subscribe(e,t,r){let i;if(e===void 0&&t===void 0&&r===void 0)throw new Error("Missing Observer.");RT(e,["next","error","complete"])?i=e:i={next:e,error:t,complete:r},i.next===void 0&&(i.next=Su),i.error===void 0&&(i.error=Su),i.complete===void 0&&(i.complete=Su);const s=this.unsubscribeOne.bind(this,this.observers.length);return this.finalized&&this.task.then(()=>{try{this.finalError?i.error(this.finalError):i.complete()}catch{}}),this.observers.push(i),s}unsubscribeOne(e){this.observers===void 0||this.observers[e]===void 0||(delete this.observers[e],this.observerCount-=1,this.observerCount===0&&this.onNoObservers!==void 0&&this.onNoObservers(this))}forEachObserver(e){if(!this.finalized)for(let t=0;t<this.observers.length;t++)this.sendOne(t,e)}sendOne(e,t){this.task.then(()=>{if(this.observers!==void 0&&this.observers[e]!==void 0)try{t(this.observers[e])}catch(r){typeof console<"u"&&console.error&&console.error(r)}})}close(e){this.finalized||(this.finalized=!0,e!==void 0&&(this.finalError=e),this.task.then(()=>{this.observers=void 0,this.onNoObservers=void 0}))}}function RT(n,e){if(typeof n!="object"||n===null)return!1;for(const t of e)if(t in n&&typeof n[t]=="function")return!0;return!1}function Su(){}/**
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
 */function mn(n){return n&&n._delegate?n._delegate:n}class ti{constructor(e,t,r){this.name=e,this.instanceFactory=t,this.type=r,this.multipleInstances=!1,this.serviceProps={},this.instantiationMode="LAZY",this.onInstanceCreated=null}setInstantiationMode(e){return this.instantiationMode=e,this}setMultipleInstances(e){return this.multipleInstances=e,this}setServiceProps(e){return this.serviceProps=e,this}setInstanceCreatedCallback(e){return this.onInstanceCreated=e,this}}/**
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
 */const ws="[DEFAULT]";/**
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
 */class CT{constructor(e,t){this.name=e,this.container=t,this.component=null,this.instances=new Map,this.instancesDeferred=new Map,this.instancesOptions=new Map,this.onInitCallbacks=new Map}get(e){const t=this.normalizeInstanceIdentifier(e);if(!this.instancesDeferred.has(t)){const r=new th;if(this.instancesDeferred.set(t,r),this.isInitialized(t)||this.shouldAutoInitialize())try{const i=this.getOrInitializeService({instanceIdentifier:t});i&&r.resolve(i)}catch{}}return this.instancesDeferred.get(t).promise}getImmediate(e){var t;const r=this.normalizeInstanceIdentifier(e==null?void 0:e.identifier),i=(t=e==null?void 0:e.optional)!==null&&t!==void 0?t:!1;if(this.isInitialized(r)||this.shouldAutoInitialize())try{return this.getOrInitializeService({instanceIdentifier:r})}catch(s){if(i)return null;throw s}else{if(i)return null;throw Error(`Service ${this.name} is not available`)}}getComponent(){return this.component}setComponent(e){if(e.name!==this.name)throw Error(`Mismatching Component ${e.name} for Provider ${this.name}.`);if(this.component)throw Error(`Component for ${this.name} has already been provided`);if(this.component=e,!!this.shouldAutoInitialize()){if(kT(e))try{this.getOrInitializeService({instanceIdentifier:ws})}catch{}for(const[t,r]of this.instancesDeferred.entries()){const i=this.normalizeInstanceIdentifier(t);try{const s=this.getOrInitializeService({instanceIdentifier:i});r.resolve(s)}catch{}}}}clearInstance(e=ws){this.instancesDeferred.delete(e),this.instancesOptions.delete(e),this.instances.delete(e)}async delete(){const e=Array.from(this.instances.values());await Promise.all([...e.filter(t=>"INTERNAL"in t).map(t=>t.INTERNAL.delete()),...e.filter(t=>"_delete"in t).map(t=>t._delete())])}isComponentSet(){return this.component!=null}isInitialized(e=ws){return this.instances.has(e)}getOptions(e=ws){return this.instancesOptions.get(e)||{}}initialize(e={}){const{options:t={}}=e,r=this.normalizeInstanceIdentifier(e.instanceIdentifier);if(this.isInitialized(r))throw Error(`${this.name}(${r}) has already been initialized`);if(!this.isComponentSet())throw Error(`Component ${this.name} has not been registered yet`);const i=this.getOrInitializeService({instanceIdentifier:r,options:t});for(const[s,a]of this.instancesDeferred.entries()){const l=this.normalizeInstanceIdentifier(s);r===l&&a.resolve(i)}return i}onInit(e,t){var r;const i=this.normalizeInstanceIdentifier(t),s=(r=this.onInitCallbacks.get(i))!==null&&r!==void 0?r:new Set;s.add(e),this.onInitCallbacks.set(i,s);const a=this.instances.get(i);return a&&e(a,i),()=>{s.delete(e)}}invokeOnInitCallbacks(e,t){const r=this.onInitCallbacks.get(t);if(r)for(const i of r)try{i(e,t)}catch{}}getOrInitializeService({instanceIdentifier:e,options:t={}}){let r=this.instances.get(e);if(!r&&this.component&&(r=this.component.instanceFactory(this.container,{instanceIdentifier:PT(e),options:t}),this.instances.set(e,r),this.instancesOptions.set(e,t),this.invokeOnInitCallbacks(r,e),this.component.onInstanceCreated))try{this.component.onInstanceCreated(this.container,e,r)}catch{}return r||null}normalizeInstanceIdentifier(e=ws){return this.component?this.component.multipleInstances?e:ws:e}shouldAutoInitialize(){return!!this.component&&this.component.instantiationMode!=="EXPLICIT"}}function PT(n){return n===ws?void 0:n}function kT(n){return n.instantiationMode==="EAGER"}/**
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
 */class NT{constructor(e){this.name=e,this.providers=new Map}addComponent(e){const t=this.getProvider(e.name);if(t.isComponentSet())throw new Error(`Component ${e.name} has already been registered with ${this.name}`);t.setComponent(e)}addOrOverwriteComponent(e){this.getProvider(e.name).isComponentSet()&&this.providers.delete(e.name),this.addComponent(e)}getProvider(e){if(this.providers.has(e))return this.providers.get(e);const t=new CT(e,this);return this.providers.set(e,t),t}getProviders(){return Array.from(this.providers.values())}}/**
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
 */var Pe;(function(n){n[n.DEBUG=0]="DEBUG",n[n.VERBOSE=1]="VERBOSE",n[n.INFO=2]="INFO",n[n.WARN=3]="WARN",n[n.ERROR=4]="ERROR",n[n.SILENT=5]="SILENT"})(Pe||(Pe={}));const OT={debug:Pe.DEBUG,verbose:Pe.VERBOSE,info:Pe.INFO,warn:Pe.WARN,error:Pe.ERROR,silent:Pe.SILENT},DT=Pe.INFO,VT={[Pe.DEBUG]:"log",[Pe.VERBOSE]:"log",[Pe.INFO]:"info",[Pe.WARN]:"warn",[Pe.ERROR]:"error"},MT=(n,e,...t)=>{if(e<n.logLevel)return;const r=new Date().toISOString(),i=VT[e];if(i)console[i](`[${r}]  ${n.name}:`,...t);else throw new Error(`Attempted to log a message with an invalid logType (value: ${e})`)};class Lc{constructor(e){this.name=e,this._logLevel=DT,this._logHandler=MT,this._userLogHandler=null}get logLevel(){return this._logLevel}set logLevel(e){if(!(e in Pe))throw new TypeError(`Invalid value "${e}" assigned to \`logLevel\``);this._logLevel=e}setLogLevel(e){this._logLevel=typeof e=="string"?OT[e]:e}get logHandler(){return this._logHandler}set logHandler(e){if(typeof e!="function")throw new TypeError("Value assigned to `logHandler` must be a function");this._logHandler=e}get userLogHandler(){return this._userLogHandler}set userLogHandler(e){this._userLogHandler=e}debug(...e){this._userLogHandler&&this._userLogHandler(this,Pe.DEBUG,...e),this._logHandler(this,Pe.DEBUG,...e)}log(...e){this._userLogHandler&&this._userLogHandler(this,Pe.VERBOSE,...e),this._logHandler(this,Pe.VERBOSE,...e)}info(...e){this._userLogHandler&&this._userLogHandler(this,Pe.INFO,...e),this._logHandler(this,Pe.INFO,...e)}warn(...e){this._userLogHandler&&this._userLogHandler(this,Pe.WARN,...e),this._logHandler(this,Pe.WARN,...e)}error(...e){this._userLogHandler&&this._userLogHandler(this,Pe.ERROR,...e),this._logHandler(this,Pe.ERROR,...e)}}const xT=(n,e)=>e.some(t=>n instanceof t);let gf,_f;function LT(){return gf||(gf=[IDBDatabase,IDBObjectStore,IDBIndex,IDBCursor,IDBTransaction])}function FT(){return _f||(_f=[IDBCursor.prototype.advance,IDBCursor.prototype.continue,IDBCursor.prototype.continuePrimaryKey])}const Xg=new WeakMap,nh=new WeakMap,Zg=new WeakMap,Ru=new WeakMap,Xh=new WeakMap;function UT(n){const e=new Promise((t,r)=>{const i=()=>{n.removeEventListener("success",s),n.removeEventListener("error",a)},s=()=>{t(Qi(n.result)),i()},a=()=>{r(n.error),i()};n.addEventListener("success",s),n.addEventListener("error",a)});return e.then(t=>{t instanceof IDBCursor&&Xg.set(t,n)}).catch(()=>{}),Xh.set(e,n),e}function $T(n){if(nh.has(n))return;const e=new Promise((t,r)=>{const i=()=>{n.removeEventListener("complete",s),n.removeEventListener("error",a),n.removeEventListener("abort",a)},s=()=>{t(),i()},a=()=>{r(n.error||new DOMException("AbortError","AbortError")),i()};n.addEventListener("complete",s),n.addEventListener("error",a),n.addEventListener("abort",a)});nh.set(n,e)}let rh={get(n,e,t){if(n instanceof IDBTransaction){if(e==="done")return nh.get(n);if(e==="objectStoreNames")return n.objectStoreNames||Zg.get(n);if(e==="store")return t.objectStoreNames[1]?void 0:t.objectStore(t.objectStoreNames[0])}return Qi(n[e])},set(n,e,t){return n[e]=t,!0},has(n,e){return n instanceof IDBTransaction&&(e==="done"||e==="store")?!0:e in n}};function BT(n){rh=n(rh)}function qT(n){return n===IDBDatabase.prototype.transaction&&!("objectStoreNames"in IDBTransaction.prototype)?function(e,...t){const r=n.call(Cu(this),e,...t);return Zg.set(r,e.sort?e.sort():[e]),Qi(r)}:FT().includes(n)?function(...e){return n.apply(Cu(this),e),Qi(Xg.get(this))}:function(...e){return Qi(n.apply(Cu(this),e))}}function zT(n){return typeof n=="function"?qT(n):(n instanceof IDBTransaction&&$T(n),xT(n,LT())?new Proxy(n,rh):n)}function Qi(n){if(n instanceof IDBRequest)return UT(n);if(Ru.has(n))return Ru.get(n);const e=zT(n);return e!==n&&(Ru.set(n,e),Xh.set(e,n)),e}const Cu=n=>Xh.get(n);function jT(n,e,{blocked:t,upgrade:r,blocking:i,terminated:s}={}){const a=indexedDB.open(n,e),l=Qi(a);return r&&a.addEventListener("upgradeneeded",c=>{r(Qi(a.result),c.oldVersion,c.newVersion,Qi(a.transaction),c)}),t&&a.addEventListener("blocked",c=>t(c.oldVersion,c.newVersion,c)),l.then(c=>{s&&c.addEventListener("close",()=>s()),i&&c.addEventListener("versionchange",h=>i(h.oldVersion,h.newVersion,h))}).catch(()=>{}),l}const HT=["get","getKey","getAll","getAllKeys","count"],WT=["put","add","delete","clear"],Pu=new Map;function vf(n,e){if(!(n instanceof IDBDatabase&&!(e in n)&&typeof e=="string"))return;if(Pu.get(e))return Pu.get(e);const t=e.replace(/FromIndex$/,""),r=e!==t,i=WT.includes(t);if(!(t in(r?IDBIndex:IDBObjectStore).prototype)||!(i||HT.includes(t)))return;const s=async function(a,...l){const c=this.transaction(a,i?"readwrite":"readonly");let h=c.store;return r&&(h=h.index(l.shift())),(await Promise.all([h[t](...l),i&&c.done]))[0]};return Pu.set(e,s),s}BT(n=>({...n,get:(e,t,r)=>vf(e,t)||n.get(e,t,r),has:(e,t)=>!!vf(e,t)||n.has(e,t)}));/**
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
 */class GT{constructor(e){this.container=e}getPlatformInfoString(){return this.container.getProviders().map(t=>{if(KT(t)){const r=t.getImmediate();return`${r.library}/${r.version}`}else return null}).filter(t=>t).join(" ")}}function KT(n){const e=n.getComponent();return(e==null?void 0:e.type)==="VERSION"}const ih="@firebase/app",yf="0.13.2";/**
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
 */const wi=new Lc("@firebase/app"),QT="@firebase/app-compat",YT="@firebase/analytics-compat",JT="@firebase/analytics",XT="@firebase/app-check-compat",ZT="@firebase/app-check",eI="@firebase/auth",tI="@firebase/auth-compat",nI="@firebase/database",rI="@firebase/data-connect",iI="@firebase/database-compat",sI="@firebase/functions",oI="@firebase/functions-compat",aI="@firebase/installations",lI="@firebase/installations-compat",cI="@firebase/messaging",uI="@firebase/messaging-compat",hI="@firebase/performance",dI="@firebase/performance-compat",fI="@firebase/remote-config",pI="@firebase/remote-config-compat",mI="@firebase/storage",gI="@firebase/storage-compat",_I="@firebase/firestore",vI="@firebase/ai",yI="@firebase/firestore-compat",EI="firebase",wI="11.10.0";/**
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
 */const sh="[DEFAULT]",TI={[ih]:"fire-core",[QT]:"fire-core-compat",[JT]:"fire-analytics",[YT]:"fire-analytics-compat",[ZT]:"fire-app-check",[XT]:"fire-app-check-compat",[eI]:"fire-auth",[tI]:"fire-auth-compat",[nI]:"fire-rtdb",[rI]:"fire-data-connect",[iI]:"fire-rtdb-compat",[sI]:"fire-fn",[oI]:"fire-fn-compat",[aI]:"fire-iid",[lI]:"fire-iid-compat",[cI]:"fire-fcm",[uI]:"fire-fcm-compat",[hI]:"fire-perf",[dI]:"fire-perf-compat",[fI]:"fire-rc",[pI]:"fire-rc-compat",[mI]:"fire-gcs",[gI]:"fire-gcs-compat",[_I]:"fire-fst",[yI]:"fire-fst-compat",[vI]:"fire-vertex","fire-js":"fire-js",[EI]:"fire-js-all"};/**
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
 */const Fa=new Map,II=new Map,oh=new Map;function Ef(n,e){try{n.container.addComponent(e)}catch(t){wi.debug(`Component ${e.name} failed to register with FirebaseApp ${n.name}`,t)}}function Ti(n){const e=n.name;if(oh.has(e))return wi.debug(`There were multiple attempts to register component ${e}.`),!1;oh.set(e,n);for(const t of Fa.values())Ef(t,n);for(const t of II.values())Ef(t,n);return!0}function Fc(n,e){const t=n.container.getProvider("heartbeat").getImmediate({optional:!0});return t&&t.triggerHeartbeat(),n.container.getProvider(e)}function ir(n){return n==null?!1:n.settings!==void 0}/**
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
 */const AI={"no-app":"No Firebase App '{$appName}' has been created - call initializeApp() first","bad-app-name":"Illegal App name: '{$appName}'","duplicate-app":"Firebase App named '{$appName}' already exists with different options or config","app-deleted":"Firebase App named '{$appName}' already deleted","server-app-deleted":"Firebase Server App has been deleted","no-options":"Need to provide options, when not being deployed to hosting via source.","invalid-app-argument":"firebase.{$appName}() takes either no argument or a Firebase App instance.","invalid-log-argument":"First argument to `onLog` must be null or a function.","idb-open":"Error thrown when opening IndexedDB. Original error: {$originalErrorMessage}.","idb-get":"Error thrown when reading from IndexedDB. Original error: {$originalErrorMessage}.","idb-set":"Error thrown when writing to IndexedDB. Original error: {$originalErrorMessage}.","idb-delete":"Error thrown when deleting from IndexedDB. Original error: {$originalErrorMessage}.","finalization-registry-not-supported":"FirebaseServerApp deleteOnDeref field defined but the JS runtime does not support FinalizationRegistry.","invalid-server-app-environment":"FirebaseServerApp is not for use in browser environments."},Yi=new Go("app","Firebase",AI);/**
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
 */class bI{constructor(e,t,r){this._isDeleted=!1,this._options=Object.assign({},e),this._config=Object.assign({},t),this._name=t.name,this._automaticDataCollectionEnabled=t.automaticDataCollectionEnabled,this._container=r,this.container.addComponent(new ti("app",()=>this,"PUBLIC"))}get automaticDataCollectionEnabled(){return this.checkDestroyed(),this._automaticDataCollectionEnabled}set automaticDataCollectionEnabled(e){this.checkDestroyed(),this._automaticDataCollectionEnabled=e}get name(){return this.checkDestroyed(),this._name}get options(){return this.checkDestroyed(),this._options}get config(){return this.checkDestroyed(),this._config}get container(){return this._container}get isDeleted(){return this._isDeleted}set isDeleted(e){this._isDeleted=e}checkDestroyed(){if(this.isDeleted)throw Yi.create("app-deleted",{appName:this._name})}}/**
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
 */const Ko=wI;function e_(n,e={}){let t=n;typeof e!="object"&&(e={name:e});const r=Object.assign({name:sh,automaticDataCollectionEnabled:!0},e),i=r.name;if(typeof i!="string"||!i)throw Yi.create("bad-app-name",{appName:String(i)});if(t||(t=Kg()),!t)throw Yi.create("no-options");const s=Fa.get(i);if(s){if(Us(t,s.options)&&Us(r,s.config))return s;throw Yi.create("duplicate-app",{appName:i})}const a=new NT(i);for(const c of oh.values())a.addComponent(c);const l=new bI(t,r,a);return Fa.set(i,l),l}function Zh(n=sh){const e=Fa.get(n);if(!e&&n===sh&&Kg())return e_();if(!e)throw Yi.create("no-app",{appName:n});return e}function SI(){return Array.from(Fa.values())}function kr(n,e,t){var r;let i=(r=TI[n])!==null&&r!==void 0?r:n;t&&(i+=`-${t}`);const s=i.match(/\s|\//),a=e.match(/\s|\//);if(s||a){const l=[`Unable to register library "${i}" with version "${e}":`];s&&l.push(`library name "${i}" contains illegal characters (whitespace or "/")`),s&&a&&l.push("and"),a&&l.push(`version name "${e}" contains illegal characters (whitespace or "/")`),wi.warn(l.join(" "));return}Ti(new ti(`${i}-version`,()=>({library:i,version:e}),"VERSION"))}/**
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
 */const RI="firebase-heartbeat-database",CI=1,Ua="firebase-heartbeat-store";let ku=null;function t_(){return ku||(ku=jT(RI,CI,{upgrade:(n,e)=>{switch(e){case 0:try{n.createObjectStore(Ua)}catch(t){console.warn(t)}}}}).catch(n=>{throw Yi.create("idb-open",{originalErrorMessage:n.message})})),ku}async function PI(n){try{const t=(await t_()).transaction(Ua),r=await t.objectStore(Ua).get(n_(n));return await t.done,r}catch(e){if(e instanceof ii)wi.warn(e.message);else{const t=Yi.create("idb-get",{originalErrorMessage:e==null?void 0:e.message});wi.warn(t.message)}}}async function wf(n,e){try{const r=(await t_()).transaction(Ua,"readwrite");await r.objectStore(Ua).put(e,n_(n)),await r.done}catch(t){if(t instanceof ii)wi.warn(t.message);else{const r=Yi.create("idb-set",{originalErrorMessage:t==null?void 0:t.message});wi.warn(r.message)}}}function n_(n){return`${n.name}!${n.options.appId}`}/**
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
 */const kI=1024,NI=30;class OI{constructor(e){this.container=e,this._heartbeatsCache=null;const t=this.container.getProvider("app").getImmediate();this._storage=new VI(t),this._heartbeatsCachePromise=this._storage.read().then(r=>(this._heartbeatsCache=r,r))}async triggerHeartbeat(){var e,t;try{const i=this.container.getProvider("platform-logger").getImmediate().getPlatformInfoString(),s=Tf();if(((e=this._heartbeatsCache)===null||e===void 0?void 0:e.heartbeats)==null&&(this._heartbeatsCache=await this._heartbeatsCachePromise,((t=this._heartbeatsCache)===null||t===void 0?void 0:t.heartbeats)==null)||this._heartbeatsCache.lastSentHeartbeatDate===s||this._heartbeatsCache.heartbeats.some(a=>a.date===s))return;if(this._heartbeatsCache.heartbeats.push({date:s,agent:i}),this._heartbeatsCache.heartbeats.length>NI){const a=MI(this._heartbeatsCache.heartbeats);this._heartbeatsCache.heartbeats.splice(a,1)}return this._storage.overwrite(this._heartbeatsCache)}catch(r){wi.warn(r)}}async getHeartbeatsHeader(){var e;try{if(this._heartbeatsCache===null&&await this._heartbeatsCachePromise,((e=this._heartbeatsCache)===null||e===void 0?void 0:e.heartbeats)==null||this._heartbeatsCache.heartbeats.length===0)return"";const t=Tf(),{heartbeatsToSend:r,unsentEntries:i}=DI(this._heartbeatsCache.heartbeats),s=Hg(JSON.stringify({version:2,heartbeats:r}));return this._heartbeatsCache.lastSentHeartbeatDate=t,i.length>0?(this._heartbeatsCache.heartbeats=i,await this._storage.overwrite(this._heartbeatsCache)):(this._heartbeatsCache.heartbeats=[],this._storage.overwrite(this._heartbeatsCache)),s}catch(t){return wi.warn(t),""}}}function Tf(){return new Date().toISOString().substring(0,10)}function DI(n,e=kI){const t=[];let r=n.slice();for(const i of n){const s=t.find(a=>a.agent===i.agent);if(s){if(s.dates.push(i.date),If(t)>e){s.dates.pop();break}}else if(t.push({agent:i.agent,dates:[i.date]}),If(t)>e){t.pop();break}r=r.slice(1)}return{heartbeatsToSend:t,unsentEntries:r}}class VI{constructor(e){this.app=e,this._canUseIndexedDBPromise=this.runIndexedDBEnvironmentCheck()}async runIndexedDBEnvironmentCheck(){return Jg()?ET().then(()=>!0).catch(()=>!1):!1}async read(){if(await this._canUseIndexedDBPromise){const t=await PI(this.app);return t!=null&&t.heartbeats?t:{heartbeats:[]}}else return{heartbeats:[]}}async overwrite(e){var t;if(await this._canUseIndexedDBPromise){const i=await this.read();return wf(this.app,{lastSentHeartbeatDate:(t=e.lastSentHeartbeatDate)!==null&&t!==void 0?t:i.lastSentHeartbeatDate,heartbeats:e.heartbeats})}else return}async add(e){var t;if(await this._canUseIndexedDBPromise){const i=await this.read();return wf(this.app,{lastSentHeartbeatDate:(t=e.lastSentHeartbeatDate)!==null&&t!==void 0?t:i.lastSentHeartbeatDate,heartbeats:[...i.heartbeats,...e.heartbeats]})}else return}}function If(n){return Hg(JSON.stringify({version:2,heartbeats:n})).length}function MI(n){if(n.length===0)return-1;let e=0,t=n[0].date;for(let r=1;r<n.length;r++)n[r].date<t&&(t=n[r].date,e=r);return e}/**
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
 */function xI(n){Ti(new ti("platform-logger",e=>new GT(e),"PRIVATE")),Ti(new ti("heartbeat",e=>new OI(e),"PRIVATE")),kr(ih,yf,n),kr(ih,yf,"esm2017"),kr("fire-js","")}xI("");function ed(n,e){var t={};for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&e.indexOf(r)<0&&(t[r]=n[r]);if(n!=null&&typeof Object.getOwnPropertySymbols=="function")for(var i=0,r=Object.getOwnPropertySymbols(n);i<r.length;i++)e.indexOf(r[i])<0&&Object.prototype.propertyIsEnumerable.call(n,r[i])&&(t[r[i]]=n[r[i]]);return t}function r_(){return{"dependent-sdk-initialized-before-auth":"Another Firebase SDK was initialized and is trying to use Auth before Auth is initialized. Please be sure to call `initializeAuth` or `getAuth` before starting any other Firebase SDK."}}const i_=r_,s_=new Go("auth","Firebase",r_());/**
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
 */const oc=new Lc("@firebase/auth");function LI(n,...e){oc.logLevel<=Pe.WARN&&oc.warn(`Auth (${Ko}): ${n}`,...e)}function jl(n,...e){oc.logLevel<=Pe.ERROR&&oc.error(`Auth (${Ko}): ${n}`,...e)}/**
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
 */function Or(n,...e){throw td(n,...e)}function Qr(n,...e){return td(n,...e)}function o_(n,e,t){const r=Object.assign(Object.assign({},i_()),{[e]:t});return new Go("auth","Firebase",r).create(e,{appName:n.name})}function Ei(n){return o_(n,"operation-not-supported-in-this-environment","Operations that alter the current user are not supported in conjunction with FirebaseServerApp")}function td(n,...e){if(typeof n!="string"){const t=e[0],r=[...e.slice(1)];return r[0]&&(r[0].appName=n.name),n._errorFactory.create(t,...r)}return s_.create(n,...e)}function ne(n,e,...t){if(!n)throw td(e,...t)}function vi(n){const e="INTERNAL ASSERTION FAILED: "+n;throw jl(e),new Error(e)}function Ii(n,e){n||vi(e)}/**
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
 */function ah(){var n;return typeof self<"u"&&((n=self.location)===null||n===void 0?void 0:n.href)||""}function FI(){return Af()==="http:"||Af()==="https:"}function Af(){var n;return typeof self<"u"&&((n=self.location)===null||n===void 0?void 0:n.protocol)||null}/**
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
 */function UI(){return typeof navigator<"u"&&navigator&&"onLine"in navigator&&typeof navigator.onLine=="boolean"&&(FI()||gT()||"connection"in navigator)?navigator.onLine:!0}function $I(){if(typeof navigator>"u")return null;const n=navigator;return n.languages&&n.languages[0]||n.language||null}/**
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
 */class el{constructor(e,t){this.shortDelay=e,this.longDelay=t,Ii(t>e,"Short delay should be less than long delay!"),this.isMobile=fT()||_T()}get(){return UI()?this.isMobile?this.longDelay:this.shortDelay:Math.min(5e3,this.shortDelay)}}/**
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
 */function nd(n,e){Ii(n.emulator,"Emulator should always be set here");const{url:t}=n.emulator;return e?`${t}${e.startsWith("/")?e.slice(1):e}`:t}/**
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
 */class a_{static initialize(e,t,r){this.fetchImpl=e,t&&(this.headersImpl=t),r&&(this.responseImpl=r)}static fetch(){if(this.fetchImpl)return this.fetchImpl;if(typeof self<"u"&&"fetch"in self)return self.fetch;if(typeof globalThis<"u"&&globalThis.fetch)return globalThis.fetch;if(typeof fetch<"u")return fetch;vi("Could not find fetch implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}static headers(){if(this.headersImpl)return this.headersImpl;if(typeof self<"u"&&"Headers"in self)return self.Headers;if(typeof globalThis<"u"&&globalThis.Headers)return globalThis.Headers;if(typeof Headers<"u")return Headers;vi("Could not find Headers implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}static response(){if(this.responseImpl)return this.responseImpl;if(typeof self<"u"&&"Response"in self)return self.Response;if(typeof globalThis<"u"&&globalThis.Response)return globalThis.Response;if(typeof Response<"u")return Response;vi("Could not find Response implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}}/**
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
 */const BI={CREDENTIAL_MISMATCH:"custom-token-mismatch",MISSING_CUSTOM_TOKEN:"internal-error",INVALID_IDENTIFIER:"invalid-email",MISSING_CONTINUE_URI:"internal-error",INVALID_PASSWORD:"wrong-password",MISSING_PASSWORD:"missing-password",INVALID_LOGIN_CREDENTIALS:"invalid-credential",EMAIL_EXISTS:"email-already-in-use",PASSWORD_LOGIN_DISABLED:"operation-not-allowed",INVALID_IDP_RESPONSE:"invalid-credential",INVALID_PENDING_TOKEN:"invalid-credential",FEDERATED_USER_ID_ALREADY_LINKED:"credential-already-in-use",MISSING_REQ_TYPE:"internal-error",EMAIL_NOT_FOUND:"user-not-found",RESET_PASSWORD_EXCEED_LIMIT:"too-many-requests",EXPIRED_OOB_CODE:"expired-action-code",INVALID_OOB_CODE:"invalid-action-code",MISSING_OOB_CODE:"internal-error",CREDENTIAL_TOO_OLD_LOGIN_AGAIN:"requires-recent-login",INVALID_ID_TOKEN:"invalid-user-token",TOKEN_EXPIRED:"user-token-expired",USER_NOT_FOUND:"user-token-expired",TOO_MANY_ATTEMPTS_TRY_LATER:"too-many-requests",PASSWORD_DOES_NOT_MEET_REQUIREMENTS:"password-does-not-meet-requirements",INVALID_CODE:"invalid-verification-code",INVALID_SESSION_INFO:"invalid-verification-id",INVALID_TEMPORARY_PROOF:"invalid-credential",MISSING_SESSION_INFO:"missing-verification-id",SESSION_EXPIRED:"code-expired",MISSING_ANDROID_PACKAGE_NAME:"missing-android-pkg-name",UNAUTHORIZED_DOMAIN:"unauthorized-continue-uri",INVALID_OAUTH_CLIENT_ID:"invalid-oauth-client-id",ADMIN_ONLY_OPERATION:"admin-restricted-operation",INVALID_MFA_PENDING_CREDENTIAL:"invalid-multi-factor-session",MFA_ENROLLMENT_NOT_FOUND:"multi-factor-info-not-found",MISSING_MFA_ENROLLMENT_ID:"missing-multi-factor-info",MISSING_MFA_PENDING_CREDENTIAL:"missing-multi-factor-session",SECOND_FACTOR_EXISTS:"second-factor-already-in-use",SECOND_FACTOR_LIMIT_EXCEEDED:"maximum-second-factor-count-exceeded",BLOCKING_FUNCTION_ERROR_RESPONSE:"internal-error",RECAPTCHA_NOT_ENABLED:"recaptcha-not-enabled",MISSING_RECAPTCHA_TOKEN:"missing-recaptcha-token",INVALID_RECAPTCHA_TOKEN:"invalid-recaptcha-token",INVALID_RECAPTCHA_ACTION:"invalid-recaptcha-action",MISSING_CLIENT_TYPE:"missing-client-type",MISSING_RECAPTCHA_VERSION:"missing-recaptcha-version",INVALID_RECAPTCHA_VERSION:"invalid-recaptcha-version",INVALID_REQ_TYPE:"invalid-req-type"};/**
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
 */const qI=["/v1/accounts:signInWithCustomToken","/v1/accounts:signInWithEmailLink","/v1/accounts:signInWithIdp","/v1/accounts:signInWithPassword","/v1/accounts:signInWithPhoneNumber","/v1/token"],zI=new el(3e4,6e4);function bi(n,e){return n.tenantId&&!e.tenantId?Object.assign(Object.assign({},e),{tenantId:n.tenantId}):e}async function Si(n,e,t,r,i={}){return l_(n,i,async()=>{let s={},a={};r&&(e==="GET"?a=r:s={body:JSON.stringify(r)});const l=Za(Object.assign({key:n.config.apiKey},a)).slice(1),c=await n._getAdditionalHeaders();c["Content-Type"]="application/json",n.languageCode&&(c["X-Firebase-Locale"]=n.languageCode);const h=Object.assign({method:e,headers:c},s);return mT()||(h.referrerPolicy="no-referrer"),n.emulatorConfig&&zs(n.emulatorConfig.host)&&(h.credentials="include"),a_.fetch()(await c_(n,n.config.apiHost,t,l),h)})}async function l_(n,e,t){n._canInitEmulator=!1;const r=Object.assign(Object.assign({},BI),e);try{const i=new HI(n),s=await Promise.race([t(),i.promise]);i.clearNetworkTimeout();const a=await s.json();if("needConfirmation"in a)throw kl(n,"account-exists-with-different-credential",a);if(s.ok&&!("errorMessage"in a))return a;{const l=s.ok?a.errorMessage:a.error.message,[c,h]=l.split(" : ");if(c==="FEDERATED_USER_ID_ALREADY_LINKED")throw kl(n,"credential-already-in-use",a);if(c==="EMAIL_EXISTS")throw kl(n,"email-already-in-use",a);if(c==="USER_DISABLED")throw kl(n,"user-disabled",a);const f=r[c]||c.toLowerCase().replace(/[_\s]+/g,"-");if(h)throw o_(n,f,h);Or(n,f)}}catch(i){if(i instanceof ii)throw i;Or(n,"network-request-failed",{message:String(i)})}}async function tl(n,e,t,r,i={}){const s=await Si(n,e,t,r,i);return"mfaPendingCredential"in s&&Or(n,"multi-factor-auth-required",{_serverResponse:s}),s}async function c_(n,e,t,r){const i=`${e}${t}?${r}`,s=n,a=s.config.emulator?nd(n.config,i):`${n.config.apiScheme}://${i}`;return qI.includes(t)&&(await s._persistenceManagerAvailable,s._getPersistenceType()==="COOKIE")?s._getPersistence()._getFinalTarget(a).toString():a}function jI(n){switch(n){case"ENFORCE":return"ENFORCE";case"AUDIT":return"AUDIT";case"OFF":return"OFF";default:return"ENFORCEMENT_STATE_UNSPECIFIED"}}class HI{clearNetworkTimeout(){clearTimeout(this.timer)}constructor(e){this.auth=e,this.timer=null,this.promise=new Promise((t,r)=>{this.timer=setTimeout(()=>r(Qr(this.auth,"network-request-failed")),zI.get())})}}function kl(n,e,t){const r={appName:n.name};t.email&&(r.email=t.email),t.phoneNumber&&(r.phoneNumber=t.phoneNumber);const i=Qr(n,e,r);return i.customData._tokenResponse=t,i}function bf(n){return n!==void 0&&n.enterprise!==void 0}class WI{constructor(e){if(this.siteKey="",this.recaptchaEnforcementState=[],e.recaptchaKey===void 0)throw new Error("recaptchaKey undefined");this.siteKey=e.recaptchaKey.split("/")[3],this.recaptchaEnforcementState=e.recaptchaEnforcementState}getProviderEnforcementState(e){if(!this.recaptchaEnforcementState||this.recaptchaEnforcementState.length===0)return null;for(const t of this.recaptchaEnforcementState)if(t.provider&&t.provider===e)return jI(t.enforcementState);return null}isProviderEnabled(e){return this.getProviderEnforcementState(e)==="ENFORCE"||this.getProviderEnforcementState(e)==="AUDIT"}isAnyProviderEnabled(){return this.isProviderEnabled("EMAIL_PASSWORD_PROVIDER")||this.isProviderEnabled("PHONE_PROVIDER")}}async function GI(n,e){return Si(n,"GET","/v2/recaptchaConfig",bi(n,e))}/**
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
 */async function KI(n,e){return Si(n,"POST","/v1/accounts:delete",e)}async function ac(n,e){return Si(n,"POST","/v1/accounts:lookup",e)}/**
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
 */function Oa(n){if(n)try{const e=new Date(Number(n));if(!isNaN(e.getTime()))return e.toUTCString()}catch{}}async function u_(n,e=!1){const t=mn(n),r=await t.getIdToken(e),i=rd(r);ne(i&&i.exp&&i.auth_time&&i.iat,t.auth,"internal-error");const s=typeof i.firebase=="object"?i.firebase:void 0,a=s==null?void 0:s.sign_in_provider;return{claims:i,token:r,authTime:Oa(Nu(i.auth_time)),issuedAtTime:Oa(Nu(i.iat)),expirationTime:Oa(Nu(i.exp)),signInProvider:a||null,signInSecondFactor:(s==null?void 0:s.sign_in_second_factor)||null}}function Nu(n){return Number(n)*1e3}function rd(n){const[e,t,r]=n.split(".");if(e===void 0||t===void 0||r===void 0)return jl("JWT malformed, contained fewer than 3 sections"),null;try{const i=Wg(t);return i?JSON.parse(i):(jl("Failed to decode base64 JWT payload"),null)}catch(i){return jl("Caught error parsing JWT payload as JSON",i==null?void 0:i.toString()),null}}function Sf(n){const e=rd(n);return ne(e,"internal-error"),ne(typeof e.exp<"u","internal-error"),ne(typeof e.iat<"u","internal-error"),Number(e.exp)-Number(e.iat)}/**
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
 */async function $a(n,e,t=!1){if(t)return e;try{return await e}catch(r){throw r instanceof ii&&QI(r)&&n.auth.currentUser===n&&await n.auth.signOut(),r}}function QI({code:n}){return n==="auth/user-disabled"||n==="auth/user-token-expired"}/**
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
 */class YI{constructor(e){this.user=e,this.isRunning=!1,this.timerId=null,this.errorBackoff=3e4}_start(){this.isRunning||(this.isRunning=!0,this.schedule())}_stop(){this.isRunning&&(this.isRunning=!1,this.timerId!==null&&clearTimeout(this.timerId))}getInterval(e){var t;if(e){const r=this.errorBackoff;return this.errorBackoff=Math.min(this.errorBackoff*2,96e4),r}else{this.errorBackoff=3e4;const i=((t=this.user.stsTokenManager.expirationTime)!==null&&t!==void 0?t:0)-Date.now()-3e5;return Math.max(0,i)}}schedule(e=!1){if(!this.isRunning)return;const t=this.getInterval(e);this.timerId=setTimeout(async()=>{await this.iteration()},t)}async iteration(){try{await this.user.getIdToken(!0)}catch(e){(e==null?void 0:e.code)==="auth/network-request-failed"&&this.schedule(!0);return}this.schedule()}}/**
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
 */class lh{constructor(e,t){this.createdAt=e,this.lastLoginAt=t,this._initializeTime()}_initializeTime(){this.lastSignInTime=Oa(this.lastLoginAt),this.creationTime=Oa(this.createdAt)}_copy(e){this.createdAt=e.createdAt,this.lastLoginAt=e.lastLoginAt,this._initializeTime()}toJSON(){return{createdAt:this.createdAt,lastLoginAt:this.lastLoginAt}}}/**
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
 */async function lc(n){var e;const t=n.auth,r=await n.getIdToken(),i=await $a(n,ac(t,{idToken:r}));ne(i==null?void 0:i.users.length,t,"internal-error");const s=i.users[0];n._notifyReloadListener(s);const a=!((e=s.providerUserInfo)===null||e===void 0)&&e.length?d_(s.providerUserInfo):[],l=JI(n.providerData,a),c=n.isAnonymous,h=!(n.email&&s.passwordHash)&&!(l!=null&&l.length),f=c?h:!1,g={uid:s.localId,displayName:s.displayName||null,photoURL:s.photoUrl||null,email:s.email||null,emailVerified:s.emailVerified||!1,phoneNumber:s.phoneNumber||null,tenantId:s.tenantId||null,providerData:l,metadata:new lh(s.createdAt,s.lastLoginAt),isAnonymous:f};Object.assign(n,g)}async function h_(n){const e=mn(n);await lc(e),await e.auth._persistUserIfCurrent(e),e.auth._notifyListenersIfCurrent(e)}function JI(n,e){return[...n.filter(r=>!e.some(i=>i.providerId===r.providerId)),...e]}function d_(n){return n.map(e=>{var{providerId:t}=e,r=ed(e,["providerId"]);return{providerId:t,uid:r.rawId||"",displayName:r.displayName||null,email:r.email||null,phoneNumber:r.phoneNumber||null,photoURL:r.photoUrl||null}})}/**
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
 */async function XI(n,e){const t=await l_(n,{},async()=>{const r=Za({grant_type:"refresh_token",refresh_token:e}).slice(1),{tokenApiHost:i,apiKey:s}=n.config,a=await c_(n,i,"/v1/token",`key=${s}`),l=await n._getAdditionalHeaders();l["Content-Type"]="application/x-www-form-urlencoded";const c={method:"POST",headers:l,body:r};return n.emulatorConfig&&zs(n.emulatorConfig.host)&&(c.credentials="include"),a_.fetch()(a,c)});return{accessToken:t.access_token,expiresIn:t.expires_in,refreshToken:t.refresh_token}}async function ZI(n,e){return Si(n,"POST","/v2/accounts:revokeToken",bi(n,e))}/**
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
 */class fo{constructor(){this.refreshToken=null,this.accessToken=null,this.expirationTime=null}get isExpired(){return!this.expirationTime||Date.now()>this.expirationTime-3e4}updateFromServerResponse(e){ne(e.idToken,"internal-error"),ne(typeof e.idToken<"u","internal-error"),ne(typeof e.refreshToken<"u","internal-error");const t="expiresIn"in e&&typeof e.expiresIn<"u"?Number(e.expiresIn):Sf(e.idToken);this.updateTokensAndExpiration(e.idToken,e.refreshToken,t)}updateFromIdToken(e){ne(e.length!==0,"internal-error");const t=Sf(e);this.updateTokensAndExpiration(e,null,t)}async getToken(e,t=!1){return!t&&this.accessToken&&!this.isExpired?this.accessToken:(ne(this.refreshToken,e,"user-token-expired"),this.refreshToken?(await this.refresh(e,this.refreshToken),this.accessToken):null)}clearRefreshToken(){this.refreshToken=null}async refresh(e,t){const{accessToken:r,refreshToken:i,expiresIn:s}=await XI(e,t);this.updateTokensAndExpiration(r,i,Number(s))}updateTokensAndExpiration(e,t,r){this.refreshToken=t||null,this.accessToken=e||null,this.expirationTime=Date.now()+r*1e3}static fromJSON(e,t){const{refreshToken:r,accessToken:i,expirationTime:s}=t,a=new fo;return r&&(ne(typeof r=="string","internal-error",{appName:e}),a.refreshToken=r),i&&(ne(typeof i=="string","internal-error",{appName:e}),a.accessToken=i),s&&(ne(typeof s=="number","internal-error",{appName:e}),a.expirationTime=s),a}toJSON(){return{refreshToken:this.refreshToken,accessToken:this.accessToken,expirationTime:this.expirationTime}}_assign(e){this.accessToken=e.accessToken,this.refreshToken=e.refreshToken,this.expirationTime=e.expirationTime}_clone(){return Object.assign(new fo,this.toJSON())}_performRefresh(){return vi("not implemented")}}/**
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
 */function Bi(n,e){ne(typeof n=="string"||typeof n>"u","internal-error",{appName:e})}class Rr{constructor(e){var{uid:t,auth:r,stsTokenManager:i}=e,s=ed(e,["uid","auth","stsTokenManager"]);this.providerId="firebase",this.proactiveRefresh=new YI(this),this.reloadUserInfo=null,this.reloadListener=null,this.uid=t,this.auth=r,this.stsTokenManager=i,this.accessToken=i.accessToken,this.displayName=s.displayName||null,this.email=s.email||null,this.emailVerified=s.emailVerified||!1,this.phoneNumber=s.phoneNumber||null,this.photoURL=s.photoURL||null,this.isAnonymous=s.isAnonymous||!1,this.tenantId=s.tenantId||null,this.providerData=s.providerData?[...s.providerData]:[],this.metadata=new lh(s.createdAt||void 0,s.lastLoginAt||void 0)}async getIdToken(e){const t=await $a(this,this.stsTokenManager.getToken(this.auth,e));return ne(t,this.auth,"internal-error"),this.accessToken!==t&&(this.accessToken=t,await this.auth._persistUserIfCurrent(this),this.auth._notifyListenersIfCurrent(this)),t}getIdTokenResult(e){return u_(this,e)}reload(){return h_(this)}_assign(e){this!==e&&(ne(this.uid===e.uid,this.auth,"internal-error"),this.displayName=e.displayName,this.photoURL=e.photoURL,this.email=e.email,this.emailVerified=e.emailVerified,this.phoneNumber=e.phoneNumber,this.isAnonymous=e.isAnonymous,this.tenantId=e.tenantId,this.providerData=e.providerData.map(t=>Object.assign({},t)),this.metadata._copy(e.metadata),this.stsTokenManager._assign(e.stsTokenManager))}_clone(e){const t=new Rr(Object.assign(Object.assign({},this),{auth:e,stsTokenManager:this.stsTokenManager._clone()}));return t.metadata._copy(this.metadata),t}_onReload(e){ne(!this.reloadListener,this.auth,"internal-error"),this.reloadListener=e,this.reloadUserInfo&&(this._notifyReloadListener(this.reloadUserInfo),this.reloadUserInfo=null)}_notifyReloadListener(e){this.reloadListener?this.reloadListener(e):this.reloadUserInfo=e}_startProactiveRefresh(){this.proactiveRefresh._start()}_stopProactiveRefresh(){this.proactiveRefresh._stop()}async _updateTokensIfNecessary(e,t=!1){let r=!1;e.idToken&&e.idToken!==this.stsTokenManager.accessToken&&(this.stsTokenManager.updateFromServerResponse(e),r=!0),t&&await lc(this),await this.auth._persistUserIfCurrent(this),r&&this.auth._notifyListenersIfCurrent(this)}async delete(){if(ir(this.auth.app))return Promise.reject(Ei(this.auth));const e=await this.getIdToken();return await $a(this,KI(this.auth,{idToken:e})),this.stsTokenManager.clearRefreshToken(),this.auth.signOut()}toJSON(){return Object.assign(Object.assign({uid:this.uid,email:this.email||void 0,emailVerified:this.emailVerified,displayName:this.displayName||void 0,isAnonymous:this.isAnonymous,photoURL:this.photoURL||void 0,phoneNumber:this.phoneNumber||void 0,tenantId:this.tenantId||void 0,providerData:this.providerData.map(e=>Object.assign({},e)),stsTokenManager:this.stsTokenManager.toJSON(),_redirectEventId:this._redirectEventId},this.metadata.toJSON()),{apiKey:this.auth.config.apiKey,appName:this.auth.name})}get refreshToken(){return this.stsTokenManager.refreshToken||""}static _fromJSON(e,t){var r,i,s,a,l,c,h,f;const g=(r=t.displayName)!==null&&r!==void 0?r:void 0,_=(i=t.email)!==null&&i!==void 0?i:void 0,E=(s=t.phoneNumber)!==null&&s!==void 0?s:void 0,R=(a=t.photoURL)!==null&&a!==void 0?a:void 0,N=(l=t.tenantId)!==null&&l!==void 0?l:void 0,P=(c=t._redirectEventId)!==null&&c!==void 0?c:void 0,U=(h=t.createdAt)!==null&&h!==void 0?h:void 0,B=(f=t.lastLoginAt)!==null&&f!==void 0?f:void 0,{uid:z,emailVerified:J,isAnonymous:qe,providerData:Y,stsTokenManager:I}=t;ne(z&&I,e,"internal-error");const v=fo.fromJSON(this.name,I);ne(typeof z=="string",e,"internal-error"),Bi(g,e.name),Bi(_,e.name),ne(typeof J=="boolean",e,"internal-error"),ne(typeof qe=="boolean",e,"internal-error"),Bi(E,e.name),Bi(R,e.name),Bi(N,e.name),Bi(P,e.name),Bi(U,e.name),Bi(B,e.name);const w=new Rr({uid:z,auth:e,email:_,emailVerified:J,displayName:g,isAnonymous:qe,photoURL:R,phoneNumber:E,tenantId:N,stsTokenManager:v,createdAt:U,lastLoginAt:B});return Y&&Array.isArray(Y)&&(w.providerData=Y.map(A=>Object.assign({},A))),P&&(w._redirectEventId=P),w}static async _fromIdTokenResponse(e,t,r=!1){const i=new fo;i.updateFromServerResponse(t);const s=new Rr({uid:t.localId,auth:e,stsTokenManager:i,isAnonymous:r});return await lc(s),s}static async _fromGetAccountInfoResponse(e,t,r){const i=t.users[0];ne(i.localId!==void 0,"internal-error");const s=i.providerUserInfo!==void 0?d_(i.providerUserInfo):[],a=!(i.email&&i.passwordHash)&&!(s!=null&&s.length),l=new fo;l.updateFromIdToken(r);const c=new Rr({uid:i.localId,auth:e,stsTokenManager:l,isAnonymous:a}),h={uid:i.localId,displayName:i.displayName||null,photoURL:i.photoUrl||null,email:i.email||null,emailVerified:i.emailVerified||!1,phoneNumber:i.phoneNumber||null,tenantId:i.tenantId||null,providerData:s,metadata:new lh(i.createdAt,i.lastLoginAt),isAnonymous:!(i.email&&i.passwordHash)&&!(s!=null&&s.length)};return Object.assign(c,h),c}}/**
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
 */const Rf=new Map;function yi(n){Ii(n instanceof Function,"Expected a class definition");let e=Rf.get(n);return e?(Ii(e instanceof n,"Instance stored in cache mismatched with class"),e):(e=new n,Rf.set(n,e),e)}/**
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
 */class f_{constructor(){this.type="NONE",this.storage={}}async _isAvailable(){return!0}async _set(e,t){this.storage[e]=t}async _get(e){const t=this.storage[e];return t===void 0?null:t}async _remove(e){delete this.storage[e]}_addListener(e,t){}_removeListener(e,t){}}f_.type="NONE";const ch=f_;/**
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
 */function Hl(n,e,t){return`firebase:${n}:${e}:${t}`}class po{constructor(e,t,r){this.persistence=e,this.auth=t,this.userKey=r;const{config:i,name:s}=this.auth;this.fullUserKey=Hl(this.userKey,i.apiKey,s),this.fullPersistenceKey=Hl("persistence",i.apiKey,s),this.boundEventHandler=t._onStorageEvent.bind(t),this.persistence._addListener(this.fullUserKey,this.boundEventHandler)}setCurrentUser(e){return this.persistence._set(this.fullUserKey,e.toJSON())}async getCurrentUser(){const e=await this.persistence._get(this.fullUserKey);if(!e)return null;if(typeof e=="string"){const t=await ac(this.auth,{idToken:e}).catch(()=>{});return t?Rr._fromGetAccountInfoResponse(this.auth,t,e):null}return Rr._fromJSON(this.auth,e)}removeCurrentUser(){return this.persistence._remove(this.fullUserKey)}savePersistenceForRedirect(){return this.persistence._set(this.fullPersistenceKey,this.persistence.type)}async setPersistence(e){if(this.persistence===e)return;const t=await this.getCurrentUser();if(await this.removeCurrentUser(),this.persistence=e,t)return this.setCurrentUser(t)}delete(){this.persistence._removeListener(this.fullUserKey,this.boundEventHandler)}static async create(e,t,r="authUser"){if(!t.length)return new po(yi(ch),e,r);const i=(await Promise.all(t.map(async h=>{if(await h._isAvailable())return h}))).filter(h=>h);let s=i[0]||yi(ch);const a=Hl(r,e.config.apiKey,e.name);let l=null;for(const h of t)try{const f=await h._get(a);if(f){let g;if(typeof f=="string"){const _=await ac(e,{idToken:f}).catch(()=>{});if(!_)break;g=await Rr._fromGetAccountInfoResponse(e,_,f)}else g=Rr._fromJSON(e,f);h!==s&&(l=g),s=h;break}}catch{}const c=i.filter(h=>h._shouldAllowMigration);return!s._shouldAllowMigration||!c.length?new po(s,e,r):(s=c[0],l&&await s._set(a,l.toJSON()),await Promise.all(t.map(async h=>{if(h!==s)try{await h._remove(a)}catch{}})),new po(s,e,r))}}/**
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
 */function Cf(n){const e=n.toLowerCase();if(e.includes("opera/")||e.includes("opr/")||e.includes("opios/"))return"Opera";if(__(e))return"IEMobile";if(e.includes("msie")||e.includes("trident/"))return"IE";if(e.includes("edge/"))return"Edge";if(p_(e))return"Firefox";if(e.includes("silk/"))return"Silk";if(y_(e))return"Blackberry";if(E_(e))return"Webos";if(m_(e))return"Safari";if((e.includes("chrome/")||g_(e))&&!e.includes("edge/"))return"Chrome";if(v_(e))return"Android";{const t=/([a-zA-Z\d\.]+)\/[a-zA-Z\d\.]*$/,r=n.match(t);if((r==null?void 0:r.length)===2)return r[1]}return"Other"}function p_(n=Dn()){return/firefox\//i.test(n)}function m_(n=Dn()){const e=n.toLowerCase();return e.includes("safari/")&&!e.includes("chrome/")&&!e.includes("crios/")&&!e.includes("android")}function g_(n=Dn()){return/crios\//i.test(n)}function __(n=Dn()){return/iemobile/i.test(n)}function v_(n=Dn()){return/android/i.test(n)}function y_(n=Dn()){return/blackberry/i.test(n)}function E_(n=Dn()){return/webos/i.test(n)}function id(n=Dn()){return/iphone|ipad|ipod/i.test(n)||/macintosh/i.test(n)&&/mobile/i.test(n)}function e0(n=Dn()){var e;return id(n)&&!!(!((e=window.navigator)===null||e===void 0)&&e.standalone)}function t0(){return vT()&&document.documentMode===10}function w_(n=Dn()){return id(n)||v_(n)||E_(n)||y_(n)||/windows phone/i.test(n)||__(n)}/**
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
 */function T_(n,e=[]){let t;switch(n){case"Browser":t=Cf(Dn());break;case"Worker":t=`${Cf(Dn())}-${n}`;break;default:t=n}const r=e.length?e.join(","):"FirebaseCore-web";return`${t}/JsCore/${Ko}/${r}`}/**
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
 */class n0{constructor(e){this.auth=e,this.queue=[]}pushCallback(e,t){const r=s=>new Promise((a,l)=>{try{const c=e(s);a(c)}catch(c){l(c)}});r.onAbort=t,this.queue.push(r);const i=this.queue.length-1;return()=>{this.queue[i]=()=>Promise.resolve()}}async runMiddleware(e){if(this.auth.currentUser===e)return;const t=[];try{for(const r of this.queue)await r(e),r.onAbort&&t.push(r.onAbort)}catch(r){t.reverse();for(const i of t)try{i()}catch{}throw this.auth._errorFactory.create("login-blocked",{originalMessage:r==null?void 0:r.message})}}}/**
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
 */async function r0(n,e={}){return Si(n,"GET","/v2/passwordPolicy",bi(n,e))}/**
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
 */const i0=6;class s0{constructor(e){var t,r,i,s;const a=e.customStrengthOptions;this.customStrengthOptions={},this.customStrengthOptions.minPasswordLength=(t=a.minPasswordLength)!==null&&t!==void 0?t:i0,a.maxPasswordLength&&(this.customStrengthOptions.maxPasswordLength=a.maxPasswordLength),a.containsLowercaseCharacter!==void 0&&(this.customStrengthOptions.containsLowercaseLetter=a.containsLowercaseCharacter),a.containsUppercaseCharacter!==void 0&&(this.customStrengthOptions.containsUppercaseLetter=a.containsUppercaseCharacter),a.containsNumericCharacter!==void 0&&(this.customStrengthOptions.containsNumericCharacter=a.containsNumericCharacter),a.containsNonAlphanumericCharacter!==void 0&&(this.customStrengthOptions.containsNonAlphanumericCharacter=a.containsNonAlphanumericCharacter),this.enforcementState=e.enforcementState,this.enforcementState==="ENFORCEMENT_STATE_UNSPECIFIED"&&(this.enforcementState="OFF"),this.allowedNonAlphanumericCharacters=(i=(r=e.allowedNonAlphanumericCharacters)===null||r===void 0?void 0:r.join(""))!==null&&i!==void 0?i:"",this.forceUpgradeOnSignin=(s=e.forceUpgradeOnSignin)!==null&&s!==void 0?s:!1,this.schemaVersion=e.schemaVersion}validatePassword(e){var t,r,i,s,a,l;const c={isValid:!0,passwordPolicy:this};return this.validatePasswordLengthOptions(e,c),this.validatePasswordCharacterOptions(e,c),c.isValid&&(c.isValid=(t=c.meetsMinPasswordLength)!==null&&t!==void 0?t:!0),c.isValid&&(c.isValid=(r=c.meetsMaxPasswordLength)!==null&&r!==void 0?r:!0),c.isValid&&(c.isValid=(i=c.containsLowercaseLetter)!==null&&i!==void 0?i:!0),c.isValid&&(c.isValid=(s=c.containsUppercaseLetter)!==null&&s!==void 0?s:!0),c.isValid&&(c.isValid=(a=c.containsNumericCharacter)!==null&&a!==void 0?a:!0),c.isValid&&(c.isValid=(l=c.containsNonAlphanumericCharacter)!==null&&l!==void 0?l:!0),c}validatePasswordLengthOptions(e,t){const r=this.customStrengthOptions.minPasswordLength,i=this.customStrengthOptions.maxPasswordLength;r&&(t.meetsMinPasswordLength=e.length>=r),i&&(t.meetsMaxPasswordLength=e.length<=i)}validatePasswordCharacterOptions(e,t){this.updatePasswordCharacterOptionsStatuses(t,!1,!1,!1,!1);let r;for(let i=0;i<e.length;i++)r=e.charAt(i),this.updatePasswordCharacterOptionsStatuses(t,r>="a"&&r<="z",r>="A"&&r<="Z",r>="0"&&r<="9",this.allowedNonAlphanumericCharacters.includes(r))}updatePasswordCharacterOptionsStatuses(e,t,r,i,s){this.customStrengthOptions.containsLowercaseLetter&&(e.containsLowercaseLetter||(e.containsLowercaseLetter=t)),this.customStrengthOptions.containsUppercaseLetter&&(e.containsUppercaseLetter||(e.containsUppercaseLetter=r)),this.customStrengthOptions.containsNumericCharacter&&(e.containsNumericCharacter||(e.containsNumericCharacter=i)),this.customStrengthOptions.containsNonAlphanumericCharacter&&(e.containsNonAlphanumericCharacter||(e.containsNonAlphanumericCharacter=s))}}/**
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
 */class o0{constructor(e,t,r,i){this.app=e,this.heartbeatServiceProvider=t,this.appCheckServiceProvider=r,this.config=i,this.currentUser=null,this.emulatorConfig=null,this.operations=Promise.resolve(),this.authStateSubscription=new Pf(this),this.idTokenSubscription=new Pf(this),this.beforeStateQueue=new n0(this),this.redirectUser=null,this.isProactiveRefreshEnabled=!1,this.EXPECTED_PASSWORD_POLICY_SCHEMA_VERSION=1,this._canInitEmulator=!0,this._isInitialized=!1,this._deleted=!1,this._initializationPromise=null,this._popupRedirectResolver=null,this._errorFactory=s_,this._agentRecaptchaConfig=null,this._tenantRecaptchaConfigs={},this._projectPasswordPolicy=null,this._tenantPasswordPolicies={},this._resolvePersistenceManagerAvailable=void 0,this.lastNotifiedUid=void 0,this.languageCode=null,this.tenantId=null,this.settings={appVerificationDisabledForTesting:!1},this.frameworks=[],this.name=e.name,this.clientVersion=i.sdkClientVersion,this._persistenceManagerAvailable=new Promise(s=>this._resolvePersistenceManagerAvailable=s)}_initializeWithPersistence(e,t){return t&&(this._popupRedirectResolver=yi(t)),this._initializationPromise=this.queue(async()=>{var r,i,s;if(!this._deleted&&(this.persistenceManager=await po.create(this,e),(r=this._resolvePersistenceManagerAvailable)===null||r===void 0||r.call(this),!this._deleted)){if(!((i=this._popupRedirectResolver)===null||i===void 0)&&i._shouldInitProactively)try{await this._popupRedirectResolver._initialize(this)}catch{}await this.initializeCurrentUser(t),this.lastNotifiedUid=((s=this.currentUser)===null||s===void 0?void 0:s.uid)||null,!this._deleted&&(this._isInitialized=!0)}}),this._initializationPromise}async _onStorageEvent(){if(this._deleted)return;const e=await this.assertedPersistence.getCurrentUser();if(!(!this.currentUser&&!e)){if(this.currentUser&&e&&this.currentUser.uid===e.uid){this._currentUser._assign(e),await this.currentUser.getIdToken();return}await this._updateCurrentUser(e,!0)}}async initializeCurrentUserFromIdToken(e){try{const t=await ac(this,{idToken:e}),r=await Rr._fromGetAccountInfoResponse(this,t,e);await this.directlySetCurrentUser(r)}catch(t){console.warn("FirebaseServerApp could not login user with provided authIdToken: ",t),await this.directlySetCurrentUser(null)}}async initializeCurrentUser(e){var t;if(ir(this.app)){const a=this.app.settings.authIdToken;return a?new Promise(l=>{setTimeout(()=>this.initializeCurrentUserFromIdToken(a).then(l,l))}):this.directlySetCurrentUser(null)}const r=await this.assertedPersistence.getCurrentUser();let i=r,s=!1;if(e&&this.config.authDomain){await this.getOrInitRedirectPersistenceManager();const a=(t=this.redirectUser)===null||t===void 0?void 0:t._redirectEventId,l=i==null?void 0:i._redirectEventId,c=await this.tryRedirectSignIn(e);(!a||a===l)&&(c!=null&&c.user)&&(i=c.user,s=!0)}if(!i)return this.directlySetCurrentUser(null);if(!i._redirectEventId){if(s)try{await this.beforeStateQueue.runMiddleware(i)}catch(a){i=r,this._popupRedirectResolver._overrideRedirectResult(this,()=>Promise.reject(a))}return i?this.reloadAndSetCurrentUserOrClear(i):this.directlySetCurrentUser(null)}return ne(this._popupRedirectResolver,this,"argument-error"),await this.getOrInitRedirectPersistenceManager(),this.redirectUser&&this.redirectUser._redirectEventId===i._redirectEventId?this.directlySetCurrentUser(i):this.reloadAndSetCurrentUserOrClear(i)}async tryRedirectSignIn(e){let t=null;try{t=await this._popupRedirectResolver._completeRedirectFn(this,e,!0)}catch{await this._setRedirectUser(null)}return t}async reloadAndSetCurrentUserOrClear(e){try{await lc(e)}catch(t){if((t==null?void 0:t.code)!=="auth/network-request-failed")return this.directlySetCurrentUser(null)}return this.directlySetCurrentUser(e)}useDeviceLanguage(){this.languageCode=$I()}async _delete(){this._deleted=!0}async updateCurrentUser(e){if(ir(this.app))return Promise.reject(Ei(this));const t=e?mn(e):null;return t&&ne(t.auth.config.apiKey===this.config.apiKey,this,"invalid-user-token"),this._updateCurrentUser(t&&t._clone(this))}async _updateCurrentUser(e,t=!1){if(!this._deleted)return e&&ne(this.tenantId===e.tenantId,this,"tenant-id-mismatch"),t||await this.beforeStateQueue.runMiddleware(e),this.queue(async()=>{await this.directlySetCurrentUser(e),this.notifyAuthListeners()})}async signOut(){return ir(this.app)?Promise.reject(Ei(this)):(await this.beforeStateQueue.runMiddleware(null),(this.redirectPersistenceManager||this._popupRedirectResolver)&&await this._setRedirectUser(null),this._updateCurrentUser(null,!0))}setPersistence(e){return ir(this.app)?Promise.reject(Ei(this)):this.queue(async()=>{await this.assertedPersistence.setPersistence(yi(e))})}_getRecaptchaConfig(){return this.tenantId==null?this._agentRecaptchaConfig:this._tenantRecaptchaConfigs[this.tenantId]}async validatePassword(e){this._getPasswordPolicyInternal()||await this._updatePasswordPolicy();const t=this._getPasswordPolicyInternal();return t.schemaVersion!==this.EXPECTED_PASSWORD_POLICY_SCHEMA_VERSION?Promise.reject(this._errorFactory.create("unsupported-password-policy-schema-version",{})):t.validatePassword(e)}_getPasswordPolicyInternal(){return this.tenantId===null?this._projectPasswordPolicy:this._tenantPasswordPolicies[this.tenantId]}async _updatePasswordPolicy(){const e=await r0(this),t=new s0(e);this.tenantId===null?this._projectPasswordPolicy=t:this._tenantPasswordPolicies[this.tenantId]=t}_getPersistenceType(){return this.assertedPersistence.persistence.type}_getPersistence(){return this.assertedPersistence.persistence}_updateErrorMap(e){this._errorFactory=new Go("auth","Firebase",e())}onAuthStateChanged(e,t,r){return this.registerStateListener(this.authStateSubscription,e,t,r)}beforeAuthStateChanged(e,t){return this.beforeStateQueue.pushCallback(e,t)}onIdTokenChanged(e,t,r){return this.registerStateListener(this.idTokenSubscription,e,t,r)}authStateReady(){return new Promise((e,t)=>{if(this.currentUser)e();else{const r=this.onAuthStateChanged(()=>{r(),e()},t)}})}async revokeAccessToken(e){if(this.currentUser){const t=await this.currentUser.getIdToken(),r={providerId:"apple.com",tokenType:"ACCESS_TOKEN",token:e,idToken:t};this.tenantId!=null&&(r.tenantId=this.tenantId),await ZI(this,r)}}toJSON(){var e;return{apiKey:this.config.apiKey,authDomain:this.config.authDomain,appName:this.name,currentUser:(e=this._currentUser)===null||e===void 0?void 0:e.toJSON()}}async _setRedirectUser(e,t){const r=await this.getOrInitRedirectPersistenceManager(t);return e===null?r.removeCurrentUser():r.setCurrentUser(e)}async getOrInitRedirectPersistenceManager(e){if(!this.redirectPersistenceManager){const t=e&&yi(e)||this._popupRedirectResolver;ne(t,this,"argument-error"),this.redirectPersistenceManager=await po.create(this,[yi(t._redirectPersistence)],"redirectUser"),this.redirectUser=await this.redirectPersistenceManager.getCurrentUser()}return this.redirectPersistenceManager}async _redirectUserForId(e){var t,r;return this._isInitialized&&await this.queue(async()=>{}),((t=this._currentUser)===null||t===void 0?void 0:t._redirectEventId)===e?this._currentUser:((r=this.redirectUser)===null||r===void 0?void 0:r._redirectEventId)===e?this.redirectUser:null}async _persistUserIfCurrent(e){if(e===this.currentUser)return this.queue(async()=>this.directlySetCurrentUser(e))}_notifyListenersIfCurrent(e){e===this.currentUser&&this.notifyAuthListeners()}_key(){return`${this.config.authDomain}:${this.config.apiKey}:${this.name}`}_startProactiveRefresh(){this.isProactiveRefreshEnabled=!0,this.currentUser&&this._currentUser._startProactiveRefresh()}_stopProactiveRefresh(){this.isProactiveRefreshEnabled=!1,this.currentUser&&this._currentUser._stopProactiveRefresh()}get _currentUser(){return this.currentUser}notifyAuthListeners(){var e,t;if(!this._isInitialized)return;this.idTokenSubscription.next(this.currentUser);const r=(t=(e=this.currentUser)===null||e===void 0?void 0:e.uid)!==null&&t!==void 0?t:null;this.lastNotifiedUid!==r&&(this.lastNotifiedUid=r,this.authStateSubscription.next(this.currentUser))}registerStateListener(e,t,r,i){if(this._deleted)return()=>{};const s=typeof t=="function"?t:t.next.bind(t);let a=!1;const l=this._isInitialized?Promise.resolve():this._initializationPromise;if(ne(l,this,"internal-error"),l.then(()=>{a||s(this.currentUser)}),typeof t=="function"){const c=e.addObserver(t,r,i);return()=>{a=!0,c()}}else{const c=e.addObserver(t);return()=>{a=!0,c()}}}async directlySetCurrentUser(e){this.currentUser&&this.currentUser!==e&&this._currentUser._stopProactiveRefresh(),e&&this.isProactiveRefreshEnabled&&e._startProactiveRefresh(),this.currentUser=e,e?await this.assertedPersistence.setCurrentUser(e):await this.assertedPersistence.removeCurrentUser()}queue(e){return this.operations=this.operations.then(e,e),this.operations}get assertedPersistence(){return ne(this.persistenceManager,this,"internal-error"),this.persistenceManager}_logFramework(e){!e||this.frameworks.includes(e)||(this.frameworks.push(e),this.frameworks.sort(),this.clientVersion=T_(this.config.clientPlatform,this._getFrameworks()))}_getFrameworks(){return this.frameworks}async _getAdditionalHeaders(){var e;const t={"X-Client-Version":this.clientVersion};this.app.options.appId&&(t["X-Firebase-gmpid"]=this.app.options.appId);const r=await((e=this.heartbeatServiceProvider.getImmediate({optional:!0}))===null||e===void 0?void 0:e.getHeartbeatsHeader());r&&(t["X-Firebase-Client"]=r);const i=await this._getAppCheckToken();return i&&(t["X-Firebase-AppCheck"]=i),t}async _getAppCheckToken(){var e;if(ir(this.app)&&this.app.settings.appCheckToken)return this.app.settings.appCheckToken;const t=await((e=this.appCheckServiceProvider.getImmediate({optional:!0}))===null||e===void 0?void 0:e.getToken());return t!=null&&t.error&&LI(`Error while retrieving App Check token: ${t.error}`),t==null?void 0:t.token}}function ls(n){return mn(n)}class Pf{constructor(e){this.auth=e,this.observer=null,this.addObserver=bT(t=>this.observer=t)}get next(){return ne(this.observer,this.auth,"internal-error"),this.observer.next.bind(this.observer)}}/**
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
 */let Uc={async loadJS(){throw new Error("Unable to load external scripts")},recaptchaV2Script:"",recaptchaEnterpriseScript:"",gapiScript:""};function a0(n){Uc=n}function I_(n){return Uc.loadJS(n)}function l0(){return Uc.recaptchaEnterpriseScript}function c0(){return Uc.gapiScript}function u0(n){return`__${n}${Math.floor(Math.random()*1e6)}`}class h0{constructor(){this.enterprise=new d0}ready(e){e()}execute(e,t){return Promise.resolve("token")}render(e,t){return""}}class d0{ready(e){e()}execute(e,t){return Promise.resolve("token")}render(e,t){return""}}const f0="recaptcha-enterprise",A_="NO_RECAPTCHA";class p0{constructor(e){this.type=f0,this.auth=ls(e)}async verify(e="verify",t=!1){async function r(s){if(!t){if(s.tenantId==null&&s._agentRecaptchaConfig!=null)return s._agentRecaptchaConfig.siteKey;if(s.tenantId!=null&&s._tenantRecaptchaConfigs[s.tenantId]!==void 0)return s._tenantRecaptchaConfigs[s.tenantId].siteKey}return new Promise(async(a,l)=>{GI(s,{clientType:"CLIENT_TYPE_WEB",version:"RECAPTCHA_ENTERPRISE"}).then(c=>{if(c.recaptchaKey===void 0)l(new Error("recaptcha Enterprise site key undefined"));else{const h=new WI(c);return s.tenantId==null?s._agentRecaptchaConfig=h:s._tenantRecaptchaConfigs[s.tenantId]=h,a(h.siteKey)}}).catch(c=>{l(c)})})}function i(s,a,l){const c=window.grecaptcha;bf(c)?c.enterprise.ready(()=>{c.enterprise.execute(s,{action:e}).then(h=>{a(h)}).catch(()=>{a(A_)})}):l(Error("No reCAPTCHA enterprise script loaded."))}return this.auth.settings.appVerificationDisabledForTesting?new h0().execute("siteKey",{action:"verify"}):new Promise((s,a)=>{r(this.auth).then(l=>{if(!t&&bf(window.grecaptcha))i(l,s,a);else{if(typeof window>"u"){a(new Error("RecaptchaVerifier is only supported in browser"));return}let c=l0();c.length!==0&&(c+=l),I_(c).then(()=>{i(l,s,a)}).catch(h=>{a(h)})}}).catch(l=>{a(l)})})}}async function kf(n,e,t,r=!1,i=!1){const s=new p0(n);let a;if(i)a=A_;else try{a=await s.verify(t)}catch{a=await s.verify(t,!0)}const l=Object.assign({},e);if(t==="mfaSmsEnrollment"||t==="mfaSmsSignIn"){if("phoneEnrollmentInfo"in l){const c=l.phoneEnrollmentInfo.phoneNumber,h=l.phoneEnrollmentInfo.recaptchaToken;Object.assign(l,{phoneEnrollmentInfo:{phoneNumber:c,recaptchaToken:h,captchaResponse:a,clientType:"CLIENT_TYPE_WEB",recaptchaVersion:"RECAPTCHA_ENTERPRISE"}})}else if("phoneSignInInfo"in l){const c=l.phoneSignInInfo.recaptchaToken;Object.assign(l,{phoneSignInInfo:{recaptchaToken:c,captchaResponse:a,clientType:"CLIENT_TYPE_WEB",recaptchaVersion:"RECAPTCHA_ENTERPRISE"}})}return l}return r?Object.assign(l,{captchaResp:a}):Object.assign(l,{captchaResponse:a}),Object.assign(l,{clientType:"CLIENT_TYPE_WEB"}),Object.assign(l,{recaptchaVersion:"RECAPTCHA_ENTERPRISE"}),l}async function uh(n,e,t,r,i){var s;if(!((s=n._getRecaptchaConfig())===null||s===void 0)&&s.isProviderEnabled("EMAIL_PASSWORD_PROVIDER")){const a=await kf(n,e,t,t==="getOobCode");return r(n,a)}else return r(n,e).catch(async a=>{if(a.code==="auth/missing-recaptcha-token"){console.log(`${t} is protected by reCAPTCHA Enterprise for this project. Automatically triggering the reCAPTCHA flow and restarting the flow.`);const l=await kf(n,e,t,t==="getOobCode");return r(n,l)}else return Promise.reject(a)})}/**
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
 */function b_(n,e){const t=Fc(n,"auth");if(t.isInitialized()){const i=t.getImmediate(),s=t.getOptions();if(Us(s,e??{}))return i;Or(i,"already-initialized")}return t.initialize({options:e})}function m0(n,e){const t=(e==null?void 0:e.persistence)||[],r=(Array.isArray(t)?t:[t]).map(yi);e!=null&&e.errorMap&&n._updateErrorMap(e.errorMap),n._initializeWithPersistence(r,e==null?void 0:e.popupRedirectResolver)}function S_(n,e,t){const r=ls(n);ne(/^https?:\/\//.test(e),r,"invalid-emulator-scheme");const i=!1,s=R_(e),{host:a,port:l}=g0(e),c=l===null?"":`:${l}`,h={url:`${s}//${a}${c}/`},f=Object.freeze({host:a,port:l,protocol:s.replace(":",""),options:Object.freeze({disableWarnings:i})});if(!r._canInitEmulator){ne(r.config.emulator&&r.emulatorConfig,r,"emulator-config-failed"),ne(Us(h,r.config.emulator)&&Us(f,r.emulatorConfig),r,"emulator-config-failed");return}r.config.emulator=h,r.emulatorConfig=f,r.settings.appVerificationDisabledForTesting=!0,zs(a)?(Jh(`${s}//${a}${c}`),Yg("Auth",!0)):_0()}function R_(n){const e=n.indexOf(":");return e<0?"":n.substr(0,e+1)}function g0(n){const e=R_(n),t=/(\/\/)?([^?#/]+)/.exec(n.substr(e.length));if(!t)return{host:"",port:null};const r=t[2].split("@").pop()||"",i=/^(\[[^\]]+\])(:|$)/.exec(r);if(i){const s=i[1];return{host:s,port:Nf(r.substr(s.length+1))}}else{const[s,a]=r.split(":");return{host:s,port:Nf(a)}}}function Nf(n){if(!n)return null;const e=Number(n);return isNaN(e)?null:e}function _0(){function n(){const e=document.createElement("p"),t=e.style;e.innerText="Running in emulator mode. Do not use with production credentials.",t.position="fixed",t.width="100%",t.backgroundColor="#ffffff",t.border=".1em solid #000000",t.color="#b50000",t.bottom="0px",t.left="0px",t.margin="0px",t.zIndex="10000",t.textAlign="center",e.classList.add("firebase-emulator-warning"),document.body.appendChild(e)}typeof console<"u"&&typeof console.info=="function"&&console.info("WARNING: You are using the Auth Emulator, which is intended for local testing only.  Do not use with production credentials."),typeof window<"u"&&typeof document<"u"&&(document.readyState==="loading"?window.addEventListener("DOMContentLoaded",n):n())}/**
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
 */class $c{constructor(e,t){this.providerId=e,this.signInMethod=t}toJSON(){return vi("not implemented")}_getIdTokenResponse(e){return vi("not implemented")}_linkToIdToken(e,t){return vi("not implemented")}_getReauthenticationResolver(e){return vi("not implemented")}}async function v0(n,e){return Si(n,"POST","/v1/accounts:signUp",e)}/**
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
 */async function y0(n,e){return tl(n,"POST","/v1/accounts:signInWithPassword",bi(n,e))}async function E0(n,e){return Si(n,"POST","/v1/accounts:sendOobCode",bi(n,e))}async function w0(n,e){return E0(n,e)}/**
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
 */async function T0(n,e){return tl(n,"POST","/v1/accounts:signInWithEmailLink",bi(n,e))}async function I0(n,e){return tl(n,"POST","/v1/accounts:signInWithEmailLink",bi(n,e))}/**
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
 */class Do extends $c{constructor(e,t,r,i=null){super("password",r),this._email=e,this._password=t,this._tenantId=i}static _fromEmailAndPassword(e,t){return new Do(e,t,"password")}static _fromEmailAndCode(e,t,r=null){return new Do(e,t,"emailLink",r)}toJSON(){return{email:this._email,password:this._password,signInMethod:this.signInMethod,tenantId:this._tenantId}}static fromJSON(e){const t=typeof e=="string"?JSON.parse(e):e;if(t!=null&&t.email&&(t!=null&&t.password)){if(t.signInMethod==="password")return this._fromEmailAndPassword(t.email,t.password);if(t.signInMethod==="emailLink")return this._fromEmailAndCode(t.email,t.password,t.tenantId)}return null}async _getIdTokenResponse(e){switch(this.signInMethod){case"password":const t={returnSecureToken:!0,email:this._email,password:this._password,clientType:"CLIENT_TYPE_WEB"};return uh(e,t,"signInWithPassword",y0);case"emailLink":return T0(e,{email:this._email,oobCode:this._password});default:Or(e,"internal-error")}}async _linkToIdToken(e,t){switch(this.signInMethod){case"password":const r={idToken:t,returnSecureToken:!0,email:this._email,password:this._password,clientType:"CLIENT_TYPE_WEB"};return uh(e,r,"signUpPassword",v0);case"emailLink":return I0(e,{idToken:t,email:this._email,oobCode:this._password});default:Or(e,"internal-error")}}_getReauthenticationResolver(e){return this._getIdTokenResponse(e)}}/**
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
 */async function mo(n,e){return tl(n,"POST","/v1/accounts:signInWithIdp",bi(n,e))}/**
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
 */const A0="http://localhost";class ts extends $c{constructor(){super(...arguments),this.pendingToken=null}static _fromParams(e){const t=new ts(e.providerId,e.signInMethod);return e.idToken||e.accessToken?(e.idToken&&(t.idToken=e.idToken),e.accessToken&&(t.accessToken=e.accessToken),e.nonce&&!e.pendingToken&&(t.nonce=e.nonce),e.pendingToken&&(t.pendingToken=e.pendingToken)):e.oauthToken&&e.oauthTokenSecret?(t.accessToken=e.oauthToken,t.secret=e.oauthTokenSecret):Or("argument-error"),t}toJSON(){return{idToken:this.idToken,accessToken:this.accessToken,secret:this.secret,nonce:this.nonce,pendingToken:this.pendingToken,providerId:this.providerId,signInMethod:this.signInMethod}}static fromJSON(e){const t=typeof e=="string"?JSON.parse(e):e,{providerId:r,signInMethod:i}=t,s=ed(t,["providerId","signInMethod"]);if(!r||!i)return null;const a=new ts(r,i);return a.idToken=s.idToken||void 0,a.accessToken=s.accessToken||void 0,a.secret=s.secret,a.nonce=s.nonce,a.pendingToken=s.pendingToken||null,a}_getIdTokenResponse(e){const t=this.buildRequest();return mo(e,t)}_linkToIdToken(e,t){const r=this.buildRequest();return r.idToken=t,mo(e,r)}_getReauthenticationResolver(e){const t=this.buildRequest();return t.autoCreate=!1,mo(e,t)}buildRequest(){const e={requestUri:A0,returnSecureToken:!0};if(this.pendingToken)e.pendingToken=this.pendingToken;else{const t={};this.idToken&&(t.id_token=this.idToken),this.accessToken&&(t.access_token=this.accessToken),this.secret&&(t.oauth_token_secret=this.secret),t.providerId=this.providerId,this.nonce&&!this.pendingToken&&(t.nonce=this.nonce),e.postBody=Za(t)}return e}}/**
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
 */function b0(n){switch(n){case"recoverEmail":return"RECOVER_EMAIL";case"resetPassword":return"PASSWORD_RESET";case"signIn":return"EMAIL_SIGNIN";case"verifyEmail":return"VERIFY_EMAIL";case"verifyAndChangeEmail":return"VERIFY_AND_CHANGE_EMAIL";case"revertSecondFactorAddition":return"REVERT_SECOND_FACTOR_ADDITION";default:return null}}function S0(n){const e=Ta(Ia(n)).link,t=e?Ta(Ia(e)).deep_link_id:null,r=Ta(Ia(n)).deep_link_id;return(r?Ta(Ia(r)).link:null)||r||t||e||n}class Bc{constructor(e){var t,r,i,s,a,l;const c=Ta(Ia(e)),h=(t=c.apiKey)!==null&&t!==void 0?t:null,f=(r=c.oobCode)!==null&&r!==void 0?r:null,g=b0((i=c.mode)!==null&&i!==void 0?i:null);ne(h&&f&&g,"argument-error"),this.apiKey=h,this.operation=g,this.code=f,this.continueUrl=(s=c.continueUrl)!==null&&s!==void 0?s:null,this.languageCode=(a=c.lang)!==null&&a!==void 0?a:null,this.tenantId=(l=c.tenantId)!==null&&l!==void 0?l:null}static parseLink(e){const t=S0(e);try{return new Bc(t)}catch{return null}}}/**
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
 */class js{constructor(){this.providerId=js.PROVIDER_ID}static credential(e,t){return Do._fromEmailAndPassword(e,t)}static credentialWithLink(e,t){const r=Bc.parseLink(t);return ne(r,"argument-error"),Do._fromEmailAndCode(e,r.code,r.tenantId)}}js.PROVIDER_ID="password";js.EMAIL_PASSWORD_SIGN_IN_METHOD="password";js.EMAIL_LINK_SIGN_IN_METHOD="emailLink";/**
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
 */class C_{constructor(e){this.providerId=e,this.defaultLanguageCode=null,this.customParameters={}}setDefaultLanguage(e){this.defaultLanguageCode=e}setCustomParameters(e){return this.customParameters=e,this}getCustomParameters(){return this.customParameters}}/**
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
 */class nl extends C_{constructor(){super(...arguments),this.scopes=[]}addScope(e){return this.scopes.includes(e)||this.scopes.push(e),this}getScopes(){return[...this.scopes]}}/**
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
 */class pi extends nl{constructor(){super("facebook.com")}static credential(e){return ts._fromParams({providerId:pi.PROVIDER_ID,signInMethod:pi.FACEBOOK_SIGN_IN_METHOD,accessToken:e})}static credentialFromResult(e){return pi.credentialFromTaggedObject(e)}static credentialFromError(e){return pi.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e||!("oauthAccessToken"in e)||!e.oauthAccessToken)return null;try{return pi.credential(e.oauthAccessToken)}catch{return null}}}pi.FACEBOOK_SIGN_IN_METHOD="facebook.com";pi.PROVIDER_ID="facebook.com";/**
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
 */class mi extends nl{constructor(){super("google.com"),this.addScope("profile")}static credential(e,t){return ts._fromParams({providerId:mi.PROVIDER_ID,signInMethod:mi.GOOGLE_SIGN_IN_METHOD,idToken:e,accessToken:t})}static credentialFromResult(e){return mi.credentialFromTaggedObject(e)}static credentialFromError(e){return mi.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e)return null;const{oauthIdToken:t,oauthAccessToken:r}=e;if(!t&&!r)return null;try{return mi.credential(t,r)}catch{return null}}}mi.GOOGLE_SIGN_IN_METHOD="google.com";mi.PROVIDER_ID="google.com";/**
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
 */class gi extends nl{constructor(){super("github.com")}static credential(e){return ts._fromParams({providerId:gi.PROVIDER_ID,signInMethod:gi.GITHUB_SIGN_IN_METHOD,accessToken:e})}static credentialFromResult(e){return gi.credentialFromTaggedObject(e)}static credentialFromError(e){return gi.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e||!("oauthAccessToken"in e)||!e.oauthAccessToken)return null;try{return gi.credential(e.oauthAccessToken)}catch{return null}}}gi.GITHUB_SIGN_IN_METHOD="github.com";gi.PROVIDER_ID="github.com";/**
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
 */class _i extends nl{constructor(){super("twitter.com")}static credential(e,t){return ts._fromParams({providerId:_i.PROVIDER_ID,signInMethod:_i.TWITTER_SIGN_IN_METHOD,oauthToken:e,oauthTokenSecret:t})}static credentialFromResult(e){return _i.credentialFromTaggedObject(e)}static credentialFromError(e){return _i.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e)return null;const{oauthAccessToken:t,oauthTokenSecret:r}=e;if(!t||!r)return null;try{return _i.credential(t,r)}catch{return null}}}_i.TWITTER_SIGN_IN_METHOD="twitter.com";_i.PROVIDER_ID="twitter.com";/**
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
 */class $s{constructor(e){this.user=e.user,this.providerId=e.providerId,this._tokenResponse=e._tokenResponse,this.operationType=e.operationType}static async _fromIdTokenResponse(e,t,r,i=!1){const s=await Rr._fromIdTokenResponse(e,r,i),a=Of(r);return new $s({user:s,providerId:a,_tokenResponse:r,operationType:t})}static async _forOperation(e,t,r){await e._updateTokensIfNecessary(r,!0);const i=Of(r);return new $s({user:e,providerId:i,_tokenResponse:r,operationType:t})}}function Of(n){return n.providerId?n.providerId:"phoneNumber"in n?"phone":null}/**
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
 */class cc extends ii{constructor(e,t,r,i){var s;super(t.code,t.message),this.operationType=r,this.user=i,Object.setPrototypeOf(this,cc.prototype),this.customData={appName:e.name,tenantId:(s=e.tenantId)!==null&&s!==void 0?s:void 0,_serverResponse:t.customData._serverResponse,operationType:r}}static _fromErrorAndOperation(e,t,r,i){return new cc(e,t,r,i)}}function P_(n,e,t,r){return(e==="reauthenticate"?t._getReauthenticationResolver(n):t._getIdTokenResponse(n)).catch(s=>{throw s.code==="auth/multi-factor-auth-required"?cc._fromErrorAndOperation(n,s,e,r):s})}async function R0(n,e,t=!1){const r=await $a(n,e._linkToIdToken(n.auth,await n.getIdToken()),t);return $s._forOperation(n,"link",r)}/**
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
 */async function C0(n,e,t=!1){const{auth:r}=n;if(ir(r.app))return Promise.reject(Ei(r));const i="reauthenticate";try{const s=await $a(n,P_(r,i,e,n),t);ne(s.idToken,r,"internal-error");const a=rd(s.idToken);ne(a,r,"internal-error");const{sub:l}=a;return ne(n.uid===l,r,"user-mismatch"),$s._forOperation(n,i,s)}catch(s){throw(s==null?void 0:s.code)==="auth/user-not-found"&&Or(r,"user-mismatch"),s}}/**
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
 */async function k_(n,e,t=!1){if(ir(n.app))return Promise.reject(Ei(n));const r="signIn",i=await P_(n,r,e),s=await $s._fromIdTokenResponse(n,r,i);return t||await n._updateCurrentUser(s.user),s}async function N_(n,e){return k_(ls(n),e)}/**
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
 */async function P0(n,e){return tl(n,"POST","/v1/accounts:signInWithCustomToken",bi(n,e))}/**
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
 */async function O_(n,e){if(ir(n.app))return Promise.reject(Ei(n));const t=ls(n),r=await P0(t,{token:e,returnSecureToken:!0}),i=await $s._fromIdTokenResponse(t,"signIn",r);return await t._updateCurrentUser(i.user),i}/**
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
 */function k0(n,e,t){var r;ne(((r=t.url)===null||r===void 0?void 0:r.length)>0,n,"invalid-continue-uri"),ne(typeof t.dynamicLinkDomain>"u"||t.dynamicLinkDomain.length>0,n,"invalid-dynamic-link-domain"),ne(typeof t.linkDomain>"u"||t.linkDomain.length>0,n,"invalid-hosting-link-domain"),e.continueUrl=t.url,e.dynamicLinkDomain=t.dynamicLinkDomain,e.linkDomain=t.linkDomain,e.canHandleCodeInApp=t.handleCodeInApp,t.iOS&&(ne(t.iOS.bundleId.length>0,n,"missing-ios-bundle-id"),e.iOSBundleId=t.iOS.bundleId),t.android&&(ne(t.android.packageName.length>0,n,"missing-android-pkg-name"),e.androidInstallApp=t.android.installApp,e.androidMinimumVersionCode=t.android.minimumVersion,e.androidPackageName=t.android.packageName)}/**
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
 */async function N0(n){const e=ls(n);e._getPasswordPolicyInternal()&&await e._updatePasswordPolicy()}async function O0(n,e,t){const r=ls(n),i={requestType:"PASSWORD_RESET",email:e,clientType:"CLIENT_TYPE_WEB"};t&&k0(r,i,t),await uh(r,i,"getOobCode",w0)}function D_(n,e,t){return ir(n.app)?Promise.reject(Ei(n)):N_(mn(n),js.credential(e,t)).catch(async r=>{throw r.code==="auth/password-does-not-meet-requirements"&&N0(n),r})}function V_(n,e,t,r){return mn(n).onIdTokenChanged(e,t,r)}function M_(n,e,t){return mn(n).beforeAuthStateChanged(e,t)}function x_(n,e,t,r){return mn(n).onAuthStateChanged(e,t,r)}function L_(n){return mn(n).signOut()}const uc="__sak";/**
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
 */class F_{constructor(e,t){this.storageRetriever=e,this.type=t}_isAvailable(){try{return this.storage?(this.storage.setItem(uc,"1"),this.storage.removeItem(uc),Promise.resolve(!0)):Promise.resolve(!1)}catch{return Promise.resolve(!1)}}_set(e,t){return this.storage.setItem(e,JSON.stringify(t)),Promise.resolve()}_get(e){const t=this.storage.getItem(e);return Promise.resolve(t?JSON.parse(t):null)}_remove(e){return this.storage.removeItem(e),Promise.resolve()}get storage(){return this.storageRetriever()}}/**
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
 */const D0=1e3,V0=10;class U_ extends F_{constructor(){super(()=>window.localStorage,"LOCAL"),this.boundEventHandler=(e,t)=>this.onStorageEvent(e,t),this.listeners={},this.localCache={},this.pollTimer=null,this.fallbackToPolling=w_(),this._shouldAllowMigration=!0}forAllChangedKeys(e){for(const t of Object.keys(this.listeners)){const r=this.storage.getItem(t),i=this.localCache[t];r!==i&&e(t,i,r)}}onStorageEvent(e,t=!1){if(!e.key){this.forAllChangedKeys((a,l,c)=>{this.notifyListeners(a,c)});return}const r=e.key;t?this.detachListener():this.stopPolling();const i=()=>{const a=this.storage.getItem(r);!t&&this.localCache[r]===a||this.notifyListeners(r,a)},s=this.storage.getItem(r);t0()&&s!==e.newValue&&e.newValue!==e.oldValue?setTimeout(i,V0):i()}notifyListeners(e,t){this.localCache[e]=t;const r=this.listeners[e];if(r)for(const i of Array.from(r))i(t&&JSON.parse(t))}startPolling(){this.stopPolling(),this.pollTimer=setInterval(()=>{this.forAllChangedKeys((e,t,r)=>{this.onStorageEvent(new StorageEvent("storage",{key:e,oldValue:t,newValue:r}),!0)})},D0)}stopPolling(){this.pollTimer&&(clearInterval(this.pollTimer),this.pollTimer=null)}attachListener(){window.addEventListener("storage",this.boundEventHandler)}detachListener(){window.removeEventListener("storage",this.boundEventHandler)}_addListener(e,t){Object.keys(this.listeners).length===0&&(this.fallbackToPolling?this.startPolling():this.attachListener()),this.listeners[e]||(this.listeners[e]=new Set,this.localCache[e]=this.storage.getItem(e)),this.listeners[e].add(t)}_removeListener(e,t){this.listeners[e]&&(this.listeners[e].delete(t),this.listeners[e].size===0&&delete this.listeners[e]),Object.keys(this.listeners).length===0&&(this.detachListener(),this.stopPolling())}async _set(e,t){await super._set(e,t),this.localCache[e]=JSON.stringify(t)}async _get(e){const t=await super._get(e);return this.localCache[e]=JSON.stringify(t),t}async _remove(e){await super._remove(e),delete this.localCache[e]}}U_.type="LOCAL";const $_=U_;/**
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
 */class B_ extends F_{constructor(){super(()=>window.sessionStorage,"SESSION")}_addListener(e,t){}_removeListener(e,t){}}B_.type="SESSION";const sd=B_;/**
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
 */function M0(n){return Promise.all(n.map(async e=>{try{return{fulfilled:!0,value:await e}}catch(t){return{fulfilled:!1,reason:t}}}))}/**
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
 */class qc{constructor(e){this.eventTarget=e,this.handlersMap={},this.boundEventHandler=this.handleEvent.bind(this)}static _getInstance(e){const t=this.receivers.find(i=>i.isListeningto(e));if(t)return t;const r=new qc(e);return this.receivers.push(r),r}isListeningto(e){return this.eventTarget===e}async handleEvent(e){const t=e,{eventId:r,eventType:i,data:s}=t.data,a=this.handlersMap[i];if(!(a!=null&&a.size))return;t.ports[0].postMessage({status:"ack",eventId:r,eventType:i});const l=Array.from(a).map(async h=>h(t.origin,s)),c=await M0(l);t.ports[0].postMessage({status:"done",eventId:r,eventType:i,response:c})}_subscribe(e,t){Object.keys(this.handlersMap).length===0&&this.eventTarget.addEventListener("message",this.boundEventHandler),this.handlersMap[e]||(this.handlersMap[e]=new Set),this.handlersMap[e].add(t)}_unsubscribe(e,t){this.handlersMap[e]&&t&&this.handlersMap[e].delete(t),(!t||this.handlersMap[e].size===0)&&delete this.handlersMap[e],Object.keys(this.handlersMap).length===0&&this.eventTarget.removeEventListener("message",this.boundEventHandler)}}qc.receivers=[];/**
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
 */function od(n="",e=10){let t="";for(let r=0;r<e;r++)t+=Math.floor(Math.random()*10);return n+t}/**
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
 */class x0{constructor(e){this.target=e,this.handlers=new Set}removeMessageHandler(e){e.messageChannel&&(e.messageChannel.port1.removeEventListener("message",e.onMessage),e.messageChannel.port1.close()),this.handlers.delete(e)}async _send(e,t,r=50){const i=typeof MessageChannel<"u"?new MessageChannel:null;if(!i)throw new Error("connection_unavailable");let s,a;return new Promise((l,c)=>{const h=od("",20);i.port1.start();const f=setTimeout(()=>{c(new Error("unsupported_event"))},r);a={messageChannel:i,onMessage(g){const _=g;if(_.data.eventId===h)switch(_.data.status){case"ack":clearTimeout(f),s=setTimeout(()=>{c(new Error("timeout"))},3e3);break;case"done":clearTimeout(s),l(_.data.response);break;default:clearTimeout(f),clearTimeout(s),c(new Error("invalid_response"));break}}},this.handlers.add(a),i.port1.addEventListener("message",a.onMessage),this.target.postMessage({eventType:e,eventId:h,data:t},[i.port2])}).finally(()=>{a&&this.removeMessageHandler(a)})}}/**
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
 */function Yr(){return window}function L0(n){Yr().location.href=n}/**
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
 */function q_(){return typeof Yr().WorkerGlobalScope<"u"&&typeof Yr().importScripts=="function"}async function F0(){if(!(navigator!=null&&navigator.serviceWorker))return null;try{return(await navigator.serviceWorker.ready).active}catch{return null}}function U0(){var n;return((n=navigator==null?void 0:navigator.serviceWorker)===null||n===void 0?void 0:n.controller)||null}function $0(){return q_()?self:null}/**
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
 */const z_="firebaseLocalStorageDb",B0=1,hc="firebaseLocalStorage",j_="fbase_key";class rl{constructor(e){this.request=e}toPromise(){return new Promise((e,t)=>{this.request.addEventListener("success",()=>{e(this.request.result)}),this.request.addEventListener("error",()=>{t(this.request.error)})})}}function zc(n,e){return n.transaction([hc],e?"readwrite":"readonly").objectStore(hc)}function q0(){const n=indexedDB.deleteDatabase(z_);return new rl(n).toPromise()}function hh(){const n=indexedDB.open(z_,B0);return new Promise((e,t)=>{n.addEventListener("error",()=>{t(n.error)}),n.addEventListener("upgradeneeded",()=>{const r=n.result;try{r.createObjectStore(hc,{keyPath:j_})}catch(i){t(i)}}),n.addEventListener("success",async()=>{const r=n.result;r.objectStoreNames.contains(hc)?e(r):(r.close(),await q0(),e(await hh()))})})}async function Df(n,e,t){const r=zc(n,!0).put({[j_]:e,value:t});return new rl(r).toPromise()}async function z0(n,e){const t=zc(n,!1).get(e),r=await new rl(t).toPromise();return r===void 0?null:r.value}function Vf(n,e){const t=zc(n,!0).delete(e);return new rl(t).toPromise()}const j0=800,H0=3;class H_{constructor(){this.type="LOCAL",this._shouldAllowMigration=!0,this.listeners={},this.localCache={},this.pollTimer=null,this.pendingWrites=0,this.receiver=null,this.sender=null,this.serviceWorkerReceiverAvailable=!1,this.activeServiceWorker=null,this._workerInitializationPromise=this.initializeServiceWorkerMessaging().then(()=>{},()=>{})}async _openDb(){return this.db?this.db:(this.db=await hh(),this.db)}async _withRetries(e){let t=0;for(;;)try{const r=await this._openDb();return await e(r)}catch(r){if(t++>H0)throw r;this.db&&(this.db.close(),this.db=void 0)}}async initializeServiceWorkerMessaging(){return q_()?this.initializeReceiver():this.initializeSender()}async initializeReceiver(){this.receiver=qc._getInstance($0()),this.receiver._subscribe("keyChanged",async(e,t)=>({keyProcessed:(await this._poll()).includes(t.key)})),this.receiver._subscribe("ping",async(e,t)=>["keyChanged"])}async initializeSender(){var e,t;if(this.activeServiceWorker=await F0(),!this.activeServiceWorker)return;this.sender=new x0(this.activeServiceWorker);const r=await this.sender._send("ping",{},800);r&&!((e=r[0])===null||e===void 0)&&e.fulfilled&&!((t=r[0])===null||t===void 0)&&t.value.includes("keyChanged")&&(this.serviceWorkerReceiverAvailable=!0)}async notifyServiceWorker(e){if(!(!this.sender||!this.activeServiceWorker||U0()!==this.activeServiceWorker))try{await this.sender._send("keyChanged",{key:e},this.serviceWorkerReceiverAvailable?800:50)}catch{}}async _isAvailable(){try{if(!indexedDB)return!1;const e=await hh();return await Df(e,uc,"1"),await Vf(e,uc),!0}catch{}return!1}async _withPendingWrite(e){this.pendingWrites++;try{await e()}finally{this.pendingWrites--}}async _set(e,t){return this._withPendingWrite(async()=>(await this._withRetries(r=>Df(r,e,t)),this.localCache[e]=t,this.notifyServiceWorker(e)))}async _get(e){const t=await this._withRetries(r=>z0(r,e));return this.localCache[e]=t,t}async _remove(e){return this._withPendingWrite(async()=>(await this._withRetries(t=>Vf(t,e)),delete this.localCache[e],this.notifyServiceWorker(e)))}async _poll(){const e=await this._withRetries(i=>{const s=zc(i,!1).getAll();return new rl(s).toPromise()});if(!e)return[];if(this.pendingWrites!==0)return[];const t=[],r=new Set;if(e.length!==0)for(const{fbase_key:i,value:s}of e)r.add(i),JSON.stringify(this.localCache[i])!==JSON.stringify(s)&&(this.notifyListeners(i,s),t.push(i));for(const i of Object.keys(this.localCache))this.localCache[i]&&!r.has(i)&&(this.notifyListeners(i,null),t.push(i));return t}notifyListeners(e,t){this.localCache[e]=t;const r=this.listeners[e];if(r)for(const i of Array.from(r))i(t)}startPolling(){this.stopPolling(),this.pollTimer=setInterval(async()=>this._poll(),j0)}stopPolling(){this.pollTimer&&(clearInterval(this.pollTimer),this.pollTimer=null)}_addListener(e,t){Object.keys(this.listeners).length===0&&this.startPolling(),this.listeners[e]||(this.listeners[e]=new Set,this._get(e)),this.listeners[e].add(t)}_removeListener(e,t){this.listeners[e]&&(this.listeners[e].delete(t),this.listeners[e].size===0&&delete this.listeners[e]),Object.keys(this.listeners).length===0&&this.stopPolling()}}H_.type="LOCAL";const W_=H_;new el(3e4,6e4);/**
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
 */function W0(n,e){return e?yi(e):(ne(n._popupRedirectResolver,n,"argument-error"),n._popupRedirectResolver)}/**
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
 */class ad extends $c{constructor(e){super("custom","custom"),this.params=e}_getIdTokenResponse(e){return mo(e,this._buildIdpRequest())}_linkToIdToken(e,t){return mo(e,this._buildIdpRequest(t))}_getReauthenticationResolver(e){return mo(e,this._buildIdpRequest())}_buildIdpRequest(e){const t={requestUri:this.params.requestUri,sessionId:this.params.sessionId,postBody:this.params.postBody,tenantId:this.params.tenantId,pendingToken:this.params.pendingToken,returnSecureToken:!0,returnIdpCredential:!0};return e&&(t.idToken=e),t}}function G0(n){return k_(n.auth,new ad(n),n.bypassAuthState)}function K0(n){const{auth:e,user:t}=n;return ne(t,e,"internal-error"),C0(t,new ad(n),n.bypassAuthState)}async function Q0(n){const{auth:e,user:t}=n;return ne(t,e,"internal-error"),R0(t,new ad(n),n.bypassAuthState)}/**
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
 */class G_{constructor(e,t,r,i,s=!1){this.auth=e,this.resolver=r,this.user=i,this.bypassAuthState=s,this.pendingPromise=null,this.eventManager=null,this.filter=Array.isArray(t)?t:[t]}execute(){return new Promise(async(e,t)=>{this.pendingPromise={resolve:e,reject:t};try{this.eventManager=await this.resolver._initialize(this.auth),await this.onExecution(),this.eventManager.registerConsumer(this)}catch(r){this.reject(r)}})}async onAuthEvent(e){const{urlResponse:t,sessionId:r,postBody:i,tenantId:s,error:a,type:l}=e;if(a){this.reject(a);return}const c={auth:this.auth,requestUri:t,sessionId:r,tenantId:s||void 0,postBody:i||void 0,user:this.user,bypassAuthState:this.bypassAuthState};try{this.resolve(await this.getIdpTask(l)(c))}catch(h){this.reject(h)}}onError(e){this.reject(e)}getIdpTask(e){switch(e){case"signInViaPopup":case"signInViaRedirect":return G0;case"linkViaPopup":case"linkViaRedirect":return Q0;case"reauthViaPopup":case"reauthViaRedirect":return K0;default:Or(this.auth,"internal-error")}}resolve(e){Ii(this.pendingPromise,"Pending promise was never set"),this.pendingPromise.resolve(e),this.unregisterAndCleanUp()}reject(e){Ii(this.pendingPromise,"Pending promise was never set"),this.pendingPromise.reject(e),this.unregisterAndCleanUp()}unregisterAndCleanUp(){this.eventManager&&this.eventManager.unregisterConsumer(this),this.pendingPromise=null,this.cleanUp()}}/**
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
 */const Y0=new el(2e3,1e4);class lo extends G_{constructor(e,t,r,i,s){super(e,t,i,s),this.provider=r,this.authWindow=null,this.pollId=null,lo.currentPopupAction&&lo.currentPopupAction.cancel(),lo.currentPopupAction=this}async executeNotNull(){const e=await this.execute();return ne(e,this.auth,"internal-error"),e}async onExecution(){Ii(this.filter.length===1,"Popup operations only handle one event");const e=od();this.authWindow=await this.resolver._openPopup(this.auth,this.provider,this.filter[0],e),this.authWindow.associatedEvent=e,this.resolver._originValidation(this.auth).catch(t=>{this.reject(t)}),this.resolver._isIframeWebStorageSupported(this.auth,t=>{t||this.reject(Qr(this.auth,"web-storage-unsupported"))}),this.pollUserCancellation()}get eventId(){var e;return((e=this.authWindow)===null||e===void 0?void 0:e.associatedEvent)||null}cancel(){this.reject(Qr(this.auth,"cancelled-popup-request"))}cleanUp(){this.authWindow&&this.authWindow.close(),this.pollId&&window.clearTimeout(this.pollId),this.authWindow=null,this.pollId=null,lo.currentPopupAction=null}pollUserCancellation(){const e=()=>{var t,r;if(!((r=(t=this.authWindow)===null||t===void 0?void 0:t.window)===null||r===void 0)&&r.closed){this.pollId=window.setTimeout(()=>{this.pollId=null,this.reject(Qr(this.auth,"popup-closed-by-user"))},8e3);return}this.pollId=window.setTimeout(e,Y0.get())};e()}}lo.currentPopupAction=null;/**
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
 */const J0="pendingRedirect",Wl=new Map;class X0 extends G_{constructor(e,t,r=!1){super(e,["signInViaRedirect","linkViaRedirect","reauthViaRedirect","unknown"],t,void 0,r),this.eventId=null}async execute(){let e=Wl.get(this.auth._key());if(!e){try{const r=await Z0(this.resolver,this.auth)?await super.execute():null;e=()=>Promise.resolve(r)}catch(t){e=()=>Promise.reject(t)}Wl.set(this.auth._key(),e)}return this.bypassAuthState||Wl.set(this.auth._key(),()=>Promise.resolve(null)),e()}async onAuthEvent(e){if(e.type==="signInViaRedirect")return super.onAuthEvent(e);if(e.type==="unknown"){this.resolve(null);return}if(e.eventId){const t=await this.auth._redirectUserForId(e.eventId);if(t)return this.user=t,super.onAuthEvent(e);this.resolve(null)}}async onExecution(){}cleanUp(){}}async function Z0(n,e){const t=nA(e),r=tA(n);if(!await r._isAvailable())return!1;const i=await r._get(t)==="true";return await r._remove(t),i}function eA(n,e){Wl.set(n._key(),e)}function tA(n){return yi(n._redirectPersistence)}function nA(n){return Hl(J0,n.config.apiKey,n.name)}async function rA(n,e,t=!1){if(ir(n.app))return Promise.reject(Ei(n));const r=ls(n),i=W0(r,e),a=await new X0(r,i,t).execute();return a&&!t&&(delete a.user._redirectEventId,await r._persistUserIfCurrent(a.user),await r._setRedirectUser(null,e)),a}/**
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
 */const iA=600*1e3;class sA{constructor(e){this.auth=e,this.cachedEventUids=new Set,this.consumers=new Set,this.queuedRedirectEvent=null,this.hasHandledPotentialRedirect=!1,this.lastProcessedEventTime=Date.now()}registerConsumer(e){this.consumers.add(e),this.queuedRedirectEvent&&this.isEventForConsumer(this.queuedRedirectEvent,e)&&(this.sendToConsumer(this.queuedRedirectEvent,e),this.saveEventToCache(this.queuedRedirectEvent),this.queuedRedirectEvent=null)}unregisterConsumer(e){this.consumers.delete(e)}onEvent(e){if(this.hasEventBeenHandled(e))return!1;let t=!1;return this.consumers.forEach(r=>{this.isEventForConsumer(e,r)&&(t=!0,this.sendToConsumer(e,r),this.saveEventToCache(e))}),this.hasHandledPotentialRedirect||!oA(e)||(this.hasHandledPotentialRedirect=!0,t||(this.queuedRedirectEvent=e,t=!0)),t}sendToConsumer(e,t){var r;if(e.error&&!K_(e)){const i=((r=e.error.code)===null||r===void 0?void 0:r.split("auth/")[1])||"internal-error";t.onError(Qr(this.auth,i))}else t.onAuthEvent(e)}isEventForConsumer(e,t){const r=t.eventId===null||!!e.eventId&&e.eventId===t.eventId;return t.filter.includes(e.type)&&r}hasEventBeenHandled(e){return Date.now()-this.lastProcessedEventTime>=iA&&this.cachedEventUids.clear(),this.cachedEventUids.has(Mf(e))}saveEventToCache(e){this.cachedEventUids.add(Mf(e)),this.lastProcessedEventTime=Date.now()}}function Mf(n){return[n.type,n.eventId,n.sessionId,n.tenantId].filter(e=>e).join("-")}function K_({type:n,error:e}){return n==="unknown"&&(e==null?void 0:e.code)==="auth/no-auth-event"}function oA(n){switch(n.type){case"signInViaRedirect":case"linkViaRedirect":case"reauthViaRedirect":return!0;case"unknown":return K_(n);default:return!1}}/**
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
 */async function aA(n,e={}){return Si(n,"GET","/v1/projects",e)}/**
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
 */const lA=/^\d{1,3}\.\d{1,3}\.\d{1,3}\.\d{1,3}$/,cA=/^https?/;async function uA(n){if(n.config.emulator)return;const{authorizedDomains:e}=await aA(n);for(const t of e)try{if(hA(t))return}catch{}Or(n,"unauthorized-domain")}function hA(n){const e=ah(),{protocol:t,hostname:r}=new URL(e);if(n.startsWith("chrome-extension://")){const a=new URL(n);return a.hostname===""&&r===""?t==="chrome-extension:"&&n.replace("chrome-extension://","")===e.replace("chrome-extension://",""):t==="chrome-extension:"&&a.hostname===r}if(!cA.test(t))return!1;if(lA.test(n))return r===n;const i=n.replace(/\./g,"\\.");return new RegExp("^(.+\\."+i+"|"+i+")$","i").test(r)}/**
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
 */const dA=new el(3e4,6e4);function xf(){const n=Yr().___jsl;if(n!=null&&n.H){for(const e of Object.keys(n.H))if(n.H[e].r=n.H[e].r||[],n.H[e].L=n.H[e].L||[],n.H[e].r=[...n.H[e].L],n.CP)for(let t=0;t<n.CP.length;t++)n.CP[t]=null}}function fA(n){return new Promise((e,t)=>{var r,i,s;function a(){xf(),gapi.load("gapi.iframes",{callback:()=>{e(gapi.iframes.getContext())},ontimeout:()=>{xf(),t(Qr(n,"network-request-failed"))},timeout:dA.get()})}if(!((i=(r=Yr().gapi)===null||r===void 0?void 0:r.iframes)===null||i===void 0)&&i.Iframe)e(gapi.iframes.getContext());else if(!((s=Yr().gapi)===null||s===void 0)&&s.load)a();else{const l=u0("iframefcb");return Yr()[l]=()=>{gapi.load?a():t(Qr(n,"network-request-failed"))},I_(`${c0()}?onload=${l}`).catch(c=>t(c))}}).catch(e=>{throw Gl=null,e})}let Gl=null;function pA(n){return Gl=Gl||fA(n),Gl}/**
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
 */const mA=new el(5e3,15e3),gA="__/auth/iframe",_A="emulator/auth/iframe",vA={style:{position:"absolute",top:"-100px",width:"1px",height:"1px"},"aria-hidden":"true",tabindex:"-1"},yA=new Map([["identitytoolkit.googleapis.com","p"],["staging-identitytoolkit.sandbox.googleapis.com","s"],["test-identitytoolkit.sandbox.googleapis.com","t"]]);function EA(n){const e=n.config;ne(e.authDomain,n,"auth-domain-config-required");const t=e.emulator?nd(e,_A):`https://${n.config.authDomain}/${gA}`,r={apiKey:e.apiKey,appName:n.name,v:Ko},i=yA.get(n.config.apiHost);i&&(r.eid=i);const s=n._getFrameworks();return s.length&&(r.fw=s.join(",")),`${t}?${Za(r).slice(1)}`}async function wA(n){const e=await pA(n),t=Yr().gapi;return ne(t,n,"internal-error"),e.open({where:document.body,url:EA(n),messageHandlersFilter:t.iframes.CROSS_ORIGIN_IFRAMES_FILTER,attributes:vA,dontclear:!0},r=>new Promise(async(i,s)=>{await r.restyle({setHideOnLeave:!1});const a=Qr(n,"network-request-failed"),l=Yr().setTimeout(()=>{s(a)},mA.get());function c(){Yr().clearTimeout(l),i(r)}r.ping(c).then(c,()=>{s(a)})}))}/**
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
 */const TA={location:"yes",resizable:"yes",statusbar:"yes",toolbar:"no"},IA=500,AA=600,bA="_blank",SA="http://localhost";class Lf{constructor(e){this.window=e,this.associatedEvent=null}close(){if(this.window)try{this.window.close()}catch{}}}function RA(n,e,t,r=IA,i=AA){const s=Math.max((window.screen.availHeight-i)/2,0).toString(),a=Math.max((window.screen.availWidth-r)/2,0).toString();let l="";const c=Object.assign(Object.assign({},TA),{width:r.toString(),height:i.toString(),top:s,left:a}),h=Dn().toLowerCase();t&&(l=g_(h)?bA:t),p_(h)&&(e=e||SA,c.scrollbars="yes");const f=Object.entries(c).reduce((_,[E,R])=>`${_}${E}=${R},`,"");if(e0(h)&&l!=="_self")return CA(e||"",l),new Lf(null);const g=window.open(e||"",l,f);ne(g,n,"popup-blocked");try{g.focus()}catch{}return new Lf(g)}function CA(n,e){const t=document.createElement("a");t.href=n,t.target=e;const r=document.createEvent("MouseEvent");r.initMouseEvent("click",!0,!0,window,1,0,0,0,0,!1,!1,!1,!1,1,null),t.dispatchEvent(r)}/**
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
 */const PA="__/auth/handler",kA="emulator/auth/handler",NA=encodeURIComponent("fac");async function Ff(n,e,t,r,i,s){ne(n.config.authDomain,n,"auth-domain-config-required"),ne(n.config.apiKey,n,"invalid-api-key");const a={apiKey:n.config.apiKey,appName:n.name,authType:t,redirectUrl:r,v:Ko,eventId:i};if(e instanceof C_){e.setDefaultLanguage(n.languageCode),a.providerId=e.providerId||"",AT(e.getCustomParameters())||(a.customParameters=JSON.stringify(e.getCustomParameters()));for(const[f,g]of Object.entries({}))a[f]=g}if(e instanceof nl){const f=e.getScopes().filter(g=>g!=="");f.length>0&&(a.scopes=f.join(","))}n.tenantId&&(a.tid=n.tenantId);const l=a;for(const f of Object.keys(l))l[f]===void 0&&delete l[f];const c=await n._getAppCheckToken(),h=c?`#${NA}=${encodeURIComponent(c)}`:"";return`${OA(n)}?${Za(l).slice(1)}${h}`}function OA({config:n}){return n.emulator?nd(n,kA):`https://${n.authDomain}/${PA}`}/**
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
 */const Ou="webStorageSupport";class DA{constructor(){this.eventManagers={},this.iframes={},this.originValidationPromises={},this._redirectPersistence=sd,this._completeRedirectFn=rA,this._overrideRedirectResult=eA}async _openPopup(e,t,r,i){var s;Ii((s=this.eventManagers[e._key()])===null||s===void 0?void 0:s.manager,"_initialize() not called before _openPopup()");const a=await Ff(e,t,r,ah(),i);return RA(e,a,od())}async _openRedirect(e,t,r,i){await this._originValidation(e);const s=await Ff(e,t,r,ah(),i);return L0(s),new Promise(()=>{})}_initialize(e){const t=e._key();if(this.eventManagers[t]){const{manager:i,promise:s}=this.eventManagers[t];return i?Promise.resolve(i):(Ii(s,"If manager is not set, promise should be"),s)}const r=this.initAndGetManager(e);return this.eventManagers[t]={promise:r},r.catch(()=>{delete this.eventManagers[t]}),r}async initAndGetManager(e){const t=await wA(e),r=new sA(e);return t.register("authEvent",i=>(ne(i==null?void 0:i.authEvent,e,"invalid-auth-event"),{status:r.onEvent(i.authEvent)?"ACK":"ERROR"}),gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER),this.eventManagers[e._key()]={manager:r},this.iframes[e._key()]=t,r}_isIframeWebStorageSupported(e,t){this.iframes[e._key()].send(Ou,{type:Ou},i=>{var s;const a=(s=i==null?void 0:i[0])===null||s===void 0?void 0:s[Ou];a!==void 0&&t(!!a),Or(e,"internal-error")},gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER)}_originValidation(e){const t=e._key();return this.originValidationPromises[t]||(this.originValidationPromises[t]=uA(e)),this.originValidationPromises[t]}get _shouldInitProactively(){return w_()||m_()||id()}}const Q_=DA;var Uf="@firebase/auth",$f="1.10.8";/**
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
 */class VA{constructor(e){this.auth=e,this.internalListeners=new Map}getUid(){var e;return this.assertAuthConfigured(),((e=this.auth.currentUser)===null||e===void 0?void 0:e.uid)||null}async getToken(e){return this.assertAuthConfigured(),await this.auth._initializationPromise,this.auth.currentUser?{accessToken:await this.auth.currentUser.getIdToken(e)}:null}addAuthTokenListener(e){if(this.assertAuthConfigured(),this.internalListeners.has(e))return;const t=this.auth.onIdTokenChanged(r=>{e((r==null?void 0:r.stsTokenManager.accessToken)||null)});this.internalListeners.set(e,t),this.updateProactiveRefresh()}removeAuthTokenListener(e){this.assertAuthConfigured();const t=this.internalListeners.get(e);t&&(this.internalListeners.delete(e),t(),this.updateProactiveRefresh())}assertAuthConfigured(){ne(this.auth._initializationPromise,"dependent-sdk-initialized-before-auth")}updateProactiveRefresh(){this.internalListeners.size>0?this.auth._startProactiveRefresh():this.auth._stopProactiveRefresh()}}/**
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
 */function MA(n){switch(n){case"Node":return"node";case"ReactNative":return"rn";case"Worker":return"webworker";case"Cordova":return"cordova";case"WebExtension":return"web-extension";default:return}}function xA(n){Ti(new ti("auth",(e,{options:t})=>{const r=e.getProvider("app").getImmediate(),i=e.getProvider("heartbeat"),s=e.getProvider("app-check-internal"),{apiKey:a,authDomain:l}=r.options;ne(a&&!a.includes(":"),"invalid-api-key",{appName:r.name});const c={apiKey:a,authDomain:l,clientPlatform:n,apiHost:"identitytoolkit.googleapis.com",tokenApiHost:"securetoken.googleapis.com",apiScheme:"https",sdkClientVersion:T_(n)},h=new o0(r,i,s,c);return m0(h,t),h},"PUBLIC").setInstantiationMode("EXPLICIT").setInstanceCreatedCallback((e,t,r)=>{e.getProvider("auth-internal").initialize()})),Ti(new ti("auth-internal",e=>{const t=ls(e.getProvider("auth").getImmediate());return(r=>new VA(r))(t)},"PRIVATE").setInstantiationMode("EXPLICIT")),kr(Uf,$f,MA(n)),kr(Uf,$f,"esm2017")}/**
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
 */const LA=300,FA=Qg("authIdTokenMaxAge")||LA;let Bf=null;const UA=n=>async e=>{const t=e&&await e.getIdTokenResult(),r=t&&(new Date().getTime()-Date.parse(t.issuedAtTime))/1e3;if(r&&r>FA)return;const i=t==null?void 0:t.token;Bf!==i&&(Bf=i,await fetch(n,{method:i?"POST":"DELETE",headers:i?{Authorization:`Bearer ${i}`}:{}}))};function Y_(n=Zh()){const e=Fc(n,"auth");if(e.isInitialized())return e.getImmediate();const t=b_(n,{popupRedirectResolver:Q_,persistence:[W_,$_,sd]}),r=Qg("authTokenSyncURL");if(r&&typeof isSecureContext=="boolean"&&isSecureContext){const s=new URL(r,location.origin);if(location.origin===s.origin){const a=UA(s.toString());M_(t,a,()=>a(t.currentUser)),V_(t,l=>a(l))}}const i=Gg("auth");return i&&S_(t,`http://${i}`),t}function $A(){var n,e;return(e=(n=document.getElementsByTagName("head"))===null||n===void 0?void 0:n[0])!==null&&e!==void 0?e:document}a0({loadJS(n){return new Promise((e,t)=>{const r=document.createElement("script");r.setAttribute("src",n),r.onload=e,r.onerror=i=>{const s=Qr("internal-error");s.customData=i,t(s)},r.type="text/javascript",r.charset="UTF-8",$A().appendChild(r)})},gapiScript:"https://apis.google.com/js/api.js",recaptchaV2Script:"https://www.google.com/recaptcha/api.js",recaptchaEnterpriseScript:"https://www.google.com/recaptcha/enterprise.js?render="});xA("Browser");const BA=Object.freeze(Object.defineProperty({__proto__:null,ActionCodeURL:Bc,AuthCredential:$c,EmailAuthCredential:Do,EmailAuthProvider:js,FacebookAuthProvider:pi,GithubAuthProvider:gi,GoogleAuthProvider:mi,OAuthCredential:ts,TwitterAuthProvider:_i,beforeAuthStateChanged:M_,browserLocalPersistence:$_,browserPopupRedirectResolver:Q_,browserSessionPersistence:sd,connectAuthEmulator:S_,getAuth:Y_,getIdTokenResult:u_,inMemoryPersistence:ch,indexedDBLocalPersistence:W_,initializeAuth:b_,onAuthStateChanged:x_,onIdTokenChanged:V_,prodErrorMap:i_,reload:h_,sendPasswordResetEmail:O0,signInWithCredential:N_,signInWithCustomToken:O_,signInWithEmailAndPassword:D_,signOut:L_},Symbol.toStringTag,{value:"Module"}));var qA="firebase",zA="11.10.0";/**
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
 */kr(qA,zA,"app");var qf=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{};/** @license
Copyright The Closure Library Authors.
SPDX-License-Identifier: Apache-2.0
*/var Ji,J_;(function(){var n;/** @license

 Copyright The Closure Library Authors.
 SPDX-License-Identifier: Apache-2.0
*/function e(I,v){function w(){}w.prototype=v.prototype,I.D=v.prototype,I.prototype=new w,I.prototype.constructor=I,I.C=function(A,C,S){for(var T=Array(arguments.length-2),Ze=2;Ze<arguments.length;Ze++)T[Ze-2]=arguments[Ze];return v.prototype[C].apply(A,T)}}function t(){this.blockSize=-1}function r(){this.blockSize=-1,this.blockSize=64,this.g=Array(4),this.B=Array(this.blockSize),this.o=this.h=0,this.s()}e(r,t),r.prototype.s=function(){this.g[0]=1732584193,this.g[1]=4023233417,this.g[2]=2562383102,this.g[3]=271733878,this.o=this.h=0};function i(I,v,w){w||(w=0);var A=Array(16);if(typeof v=="string")for(var C=0;16>C;++C)A[C]=v.charCodeAt(w++)|v.charCodeAt(w++)<<8|v.charCodeAt(w++)<<16|v.charCodeAt(w++)<<24;else for(C=0;16>C;++C)A[C]=v[w++]|v[w++]<<8|v[w++]<<16|v[w++]<<24;v=I.g[0],w=I.g[1],C=I.g[2];var S=I.g[3],T=v+(S^w&(C^S))+A[0]+3614090360&4294967295;v=w+(T<<7&4294967295|T>>>25),T=S+(C^v&(w^C))+A[1]+3905402710&4294967295,S=v+(T<<12&4294967295|T>>>20),T=C+(w^S&(v^w))+A[2]+606105819&4294967295,C=S+(T<<17&4294967295|T>>>15),T=w+(v^C&(S^v))+A[3]+3250441966&4294967295,w=C+(T<<22&4294967295|T>>>10),T=v+(S^w&(C^S))+A[4]+4118548399&4294967295,v=w+(T<<7&4294967295|T>>>25),T=S+(C^v&(w^C))+A[5]+1200080426&4294967295,S=v+(T<<12&4294967295|T>>>20),T=C+(w^S&(v^w))+A[6]+2821735955&4294967295,C=S+(T<<17&4294967295|T>>>15),T=w+(v^C&(S^v))+A[7]+4249261313&4294967295,w=C+(T<<22&4294967295|T>>>10),T=v+(S^w&(C^S))+A[8]+1770035416&4294967295,v=w+(T<<7&4294967295|T>>>25),T=S+(C^v&(w^C))+A[9]+2336552879&4294967295,S=v+(T<<12&4294967295|T>>>20),T=C+(w^S&(v^w))+A[10]+4294925233&4294967295,C=S+(T<<17&4294967295|T>>>15),T=w+(v^C&(S^v))+A[11]+2304563134&4294967295,w=C+(T<<22&4294967295|T>>>10),T=v+(S^w&(C^S))+A[12]+1804603682&4294967295,v=w+(T<<7&4294967295|T>>>25),T=S+(C^v&(w^C))+A[13]+4254626195&4294967295,S=v+(T<<12&4294967295|T>>>20),T=C+(w^S&(v^w))+A[14]+2792965006&4294967295,C=S+(T<<17&4294967295|T>>>15),T=w+(v^C&(S^v))+A[15]+1236535329&4294967295,w=C+(T<<22&4294967295|T>>>10),T=v+(C^S&(w^C))+A[1]+4129170786&4294967295,v=w+(T<<5&4294967295|T>>>27),T=S+(w^C&(v^w))+A[6]+3225465664&4294967295,S=v+(T<<9&4294967295|T>>>23),T=C+(v^w&(S^v))+A[11]+643717713&4294967295,C=S+(T<<14&4294967295|T>>>18),T=w+(S^v&(C^S))+A[0]+3921069994&4294967295,w=C+(T<<20&4294967295|T>>>12),T=v+(C^S&(w^C))+A[5]+3593408605&4294967295,v=w+(T<<5&4294967295|T>>>27),T=S+(w^C&(v^w))+A[10]+38016083&4294967295,S=v+(T<<9&4294967295|T>>>23),T=C+(v^w&(S^v))+A[15]+3634488961&4294967295,C=S+(T<<14&4294967295|T>>>18),T=w+(S^v&(C^S))+A[4]+3889429448&4294967295,w=C+(T<<20&4294967295|T>>>12),T=v+(C^S&(w^C))+A[9]+568446438&4294967295,v=w+(T<<5&4294967295|T>>>27),T=S+(w^C&(v^w))+A[14]+3275163606&4294967295,S=v+(T<<9&4294967295|T>>>23),T=C+(v^w&(S^v))+A[3]+4107603335&4294967295,C=S+(T<<14&4294967295|T>>>18),T=w+(S^v&(C^S))+A[8]+1163531501&4294967295,w=C+(T<<20&4294967295|T>>>12),T=v+(C^S&(w^C))+A[13]+2850285829&4294967295,v=w+(T<<5&4294967295|T>>>27),T=S+(w^C&(v^w))+A[2]+4243563512&4294967295,S=v+(T<<9&4294967295|T>>>23),T=C+(v^w&(S^v))+A[7]+1735328473&4294967295,C=S+(T<<14&4294967295|T>>>18),T=w+(S^v&(C^S))+A[12]+2368359562&4294967295,w=C+(T<<20&4294967295|T>>>12),T=v+(w^C^S)+A[5]+4294588738&4294967295,v=w+(T<<4&4294967295|T>>>28),T=S+(v^w^C)+A[8]+2272392833&4294967295,S=v+(T<<11&4294967295|T>>>21),T=C+(S^v^w)+A[11]+1839030562&4294967295,C=S+(T<<16&4294967295|T>>>16),T=w+(C^S^v)+A[14]+4259657740&4294967295,w=C+(T<<23&4294967295|T>>>9),T=v+(w^C^S)+A[1]+2763975236&4294967295,v=w+(T<<4&4294967295|T>>>28),T=S+(v^w^C)+A[4]+1272893353&4294967295,S=v+(T<<11&4294967295|T>>>21),T=C+(S^v^w)+A[7]+4139469664&4294967295,C=S+(T<<16&4294967295|T>>>16),T=w+(C^S^v)+A[10]+3200236656&4294967295,w=C+(T<<23&4294967295|T>>>9),T=v+(w^C^S)+A[13]+681279174&4294967295,v=w+(T<<4&4294967295|T>>>28),T=S+(v^w^C)+A[0]+3936430074&4294967295,S=v+(T<<11&4294967295|T>>>21),T=C+(S^v^w)+A[3]+3572445317&4294967295,C=S+(T<<16&4294967295|T>>>16),T=w+(C^S^v)+A[6]+76029189&4294967295,w=C+(T<<23&4294967295|T>>>9),T=v+(w^C^S)+A[9]+3654602809&4294967295,v=w+(T<<4&4294967295|T>>>28),T=S+(v^w^C)+A[12]+3873151461&4294967295,S=v+(T<<11&4294967295|T>>>21),T=C+(S^v^w)+A[15]+530742520&4294967295,C=S+(T<<16&4294967295|T>>>16),T=w+(C^S^v)+A[2]+3299628645&4294967295,w=C+(T<<23&4294967295|T>>>9),T=v+(C^(w|~S))+A[0]+4096336452&4294967295,v=w+(T<<6&4294967295|T>>>26),T=S+(w^(v|~C))+A[7]+1126891415&4294967295,S=v+(T<<10&4294967295|T>>>22),T=C+(v^(S|~w))+A[14]+2878612391&4294967295,C=S+(T<<15&4294967295|T>>>17),T=w+(S^(C|~v))+A[5]+4237533241&4294967295,w=C+(T<<21&4294967295|T>>>11),T=v+(C^(w|~S))+A[12]+1700485571&4294967295,v=w+(T<<6&4294967295|T>>>26),T=S+(w^(v|~C))+A[3]+2399980690&4294967295,S=v+(T<<10&4294967295|T>>>22),T=C+(v^(S|~w))+A[10]+4293915773&4294967295,C=S+(T<<15&4294967295|T>>>17),T=w+(S^(C|~v))+A[1]+2240044497&4294967295,w=C+(T<<21&4294967295|T>>>11),T=v+(C^(w|~S))+A[8]+1873313359&4294967295,v=w+(T<<6&4294967295|T>>>26),T=S+(w^(v|~C))+A[15]+4264355552&4294967295,S=v+(T<<10&4294967295|T>>>22),T=C+(v^(S|~w))+A[6]+2734768916&4294967295,C=S+(T<<15&4294967295|T>>>17),T=w+(S^(C|~v))+A[13]+1309151649&4294967295,w=C+(T<<21&4294967295|T>>>11),T=v+(C^(w|~S))+A[4]+4149444226&4294967295,v=w+(T<<6&4294967295|T>>>26),T=S+(w^(v|~C))+A[11]+3174756917&4294967295,S=v+(T<<10&4294967295|T>>>22),T=C+(v^(S|~w))+A[2]+718787259&4294967295,C=S+(T<<15&4294967295|T>>>17),T=w+(S^(C|~v))+A[9]+3951481745&4294967295,I.g[0]=I.g[0]+v&4294967295,I.g[1]=I.g[1]+(C+(T<<21&4294967295|T>>>11))&4294967295,I.g[2]=I.g[2]+C&4294967295,I.g[3]=I.g[3]+S&4294967295}r.prototype.u=function(I,v){v===void 0&&(v=I.length);for(var w=v-this.blockSize,A=this.B,C=this.h,S=0;S<v;){if(C==0)for(;S<=w;)i(this,I,S),S+=this.blockSize;if(typeof I=="string"){for(;S<v;)if(A[C++]=I.charCodeAt(S++),C==this.blockSize){i(this,A),C=0;break}}else for(;S<v;)if(A[C++]=I[S++],C==this.blockSize){i(this,A),C=0;break}}this.h=C,this.o+=v},r.prototype.v=function(){var I=Array((56>this.h?this.blockSize:2*this.blockSize)-this.h);I[0]=128;for(var v=1;v<I.length-8;++v)I[v]=0;var w=8*this.o;for(v=I.length-8;v<I.length;++v)I[v]=w&255,w/=256;for(this.u(I),I=Array(16),v=w=0;4>v;++v)for(var A=0;32>A;A+=8)I[w++]=this.g[v]>>>A&255;return I};function s(I,v){var w=l;return Object.prototype.hasOwnProperty.call(w,I)?w[I]:w[I]=v(I)}function a(I,v){this.h=v;for(var w=[],A=!0,C=I.length-1;0<=C;C--){var S=I[C]|0;A&&S==v||(w[C]=S,A=!1)}this.g=w}var l={};function c(I){return-128<=I&&128>I?s(I,function(v){return new a([v|0],0>v?-1:0)}):new a([I|0],0>I?-1:0)}function h(I){if(isNaN(I)||!isFinite(I))return g;if(0>I)return P(h(-I));for(var v=[],w=1,A=0;I>=w;A++)v[A]=I/w|0,w*=4294967296;return new a(v,0)}function f(I,v){if(I.length==0)throw Error("number format error: empty string");if(v=v||10,2>v||36<v)throw Error("radix out of range: "+v);if(I.charAt(0)=="-")return P(f(I.substring(1),v));if(0<=I.indexOf("-"))throw Error('number format error: interior "-" character');for(var w=h(Math.pow(v,8)),A=g,C=0;C<I.length;C+=8){var S=Math.min(8,I.length-C),T=parseInt(I.substring(C,C+S),v);8>S?(S=h(Math.pow(v,S)),A=A.j(S).add(h(T))):(A=A.j(w),A=A.add(h(T)))}return A}var g=c(0),_=c(1),E=c(16777216);n=a.prototype,n.m=function(){if(N(this))return-P(this).m();for(var I=0,v=1,w=0;w<this.g.length;w++){var A=this.i(w);I+=(0<=A?A:4294967296+A)*v,v*=4294967296}return I},n.toString=function(I){if(I=I||10,2>I||36<I)throw Error("radix out of range: "+I);if(R(this))return"0";if(N(this))return"-"+P(this).toString(I);for(var v=h(Math.pow(I,6)),w=this,A="";;){var C=J(w,v).g;w=U(w,C.j(v));var S=((0<w.g.length?w.g[0]:w.h)>>>0).toString(I);if(w=C,R(w))return S+A;for(;6>S.length;)S="0"+S;A=S+A}},n.i=function(I){return 0>I?0:I<this.g.length?this.g[I]:this.h};function R(I){if(I.h!=0)return!1;for(var v=0;v<I.g.length;v++)if(I.g[v]!=0)return!1;return!0}function N(I){return I.h==-1}n.l=function(I){return I=U(this,I),N(I)?-1:R(I)?0:1};function P(I){for(var v=I.g.length,w=[],A=0;A<v;A++)w[A]=~I.g[A];return new a(w,~I.h).add(_)}n.abs=function(){return N(this)?P(this):this},n.add=function(I){for(var v=Math.max(this.g.length,I.g.length),w=[],A=0,C=0;C<=v;C++){var S=A+(this.i(C)&65535)+(I.i(C)&65535),T=(S>>>16)+(this.i(C)>>>16)+(I.i(C)>>>16);A=T>>>16,S&=65535,T&=65535,w[C]=T<<16|S}return new a(w,w[w.length-1]&-2147483648?-1:0)};function U(I,v){return I.add(P(v))}n.j=function(I){if(R(this)||R(I))return g;if(N(this))return N(I)?P(this).j(P(I)):P(P(this).j(I));if(N(I))return P(this.j(P(I)));if(0>this.l(E)&&0>I.l(E))return h(this.m()*I.m());for(var v=this.g.length+I.g.length,w=[],A=0;A<2*v;A++)w[A]=0;for(A=0;A<this.g.length;A++)for(var C=0;C<I.g.length;C++){var S=this.i(A)>>>16,T=this.i(A)&65535,Ze=I.i(C)>>>16,or=I.i(C)&65535;w[2*A+2*C]+=T*or,B(w,2*A+2*C),w[2*A+2*C+1]+=S*or,B(w,2*A+2*C+1),w[2*A+2*C+1]+=T*Ze,B(w,2*A+2*C+1),w[2*A+2*C+2]+=S*Ze,B(w,2*A+2*C+2)}for(A=0;A<v;A++)w[A]=w[2*A+1]<<16|w[2*A];for(A=v;A<2*v;A++)w[A]=0;return new a(w,0)};function B(I,v){for(;(I[v]&65535)!=I[v];)I[v+1]+=I[v]>>>16,I[v]&=65535,v++}function z(I,v){this.g=I,this.h=v}function J(I,v){if(R(v))throw Error("division by zero");if(R(I))return new z(g,g);if(N(I))return v=J(P(I),v),new z(P(v.g),P(v.h));if(N(v))return v=J(I,P(v)),new z(P(v.g),v.h);if(30<I.g.length){if(N(I)||N(v))throw Error("slowDivide_ only works with positive integers.");for(var w=_,A=v;0>=A.l(I);)w=qe(w),A=qe(A);var C=Y(w,1),S=Y(A,1);for(A=Y(A,2),w=Y(w,2);!R(A);){var T=S.add(A);0>=T.l(I)&&(C=C.add(w),S=T),A=Y(A,1),w=Y(w,1)}return v=U(I,C.j(v)),new z(C,v)}for(C=g;0<=I.l(v);){for(w=Math.max(1,Math.floor(I.m()/v.m())),A=Math.ceil(Math.log(w)/Math.LN2),A=48>=A?1:Math.pow(2,A-48),S=h(w),T=S.j(v);N(T)||0<T.l(I);)w-=A,S=h(w),T=S.j(v);R(S)&&(S=_),C=C.add(S),I=U(I,T)}return new z(C,I)}n.A=function(I){return J(this,I).h},n.and=function(I){for(var v=Math.max(this.g.length,I.g.length),w=[],A=0;A<v;A++)w[A]=this.i(A)&I.i(A);return new a(w,this.h&I.h)},n.or=function(I){for(var v=Math.max(this.g.length,I.g.length),w=[],A=0;A<v;A++)w[A]=this.i(A)|I.i(A);return new a(w,this.h|I.h)},n.xor=function(I){for(var v=Math.max(this.g.length,I.g.length),w=[],A=0;A<v;A++)w[A]=this.i(A)^I.i(A);return new a(w,this.h^I.h)};function qe(I){for(var v=I.g.length+1,w=[],A=0;A<v;A++)w[A]=I.i(A)<<1|I.i(A-1)>>>31;return new a(w,I.h)}function Y(I,v){var w=v>>5;v%=32;for(var A=I.g.length-w,C=[],S=0;S<A;S++)C[S]=0<v?I.i(S+w)>>>v|I.i(S+w+1)<<32-v:I.i(S+w);return new a(C,I.h)}r.prototype.digest=r.prototype.v,r.prototype.reset=r.prototype.s,r.prototype.update=r.prototype.u,J_=r,a.prototype.add=a.prototype.add,a.prototype.multiply=a.prototype.j,a.prototype.modulo=a.prototype.A,a.prototype.compare=a.prototype.l,a.prototype.toNumber=a.prototype.m,a.prototype.toString=a.prototype.toString,a.prototype.getBits=a.prototype.i,a.fromNumber=h,a.fromString=f,Ji=a}).apply(typeof qf<"u"?qf:typeof self<"u"?self:typeof window<"u"?window:{});var Nl=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{};/** @license
Copyright The Closure Library Authors.
SPDX-License-Identifier: Apache-2.0
*/var X_,Aa,Z_,Kl,dh,ev,tv,nv;(function(){var n,e=typeof Object.defineProperties=="function"?Object.defineProperty:function(o,u,d){return o==Array.prototype||o==Object.prototype||(o[u]=d.value),o};function t(o){o=[typeof globalThis=="object"&&globalThis,o,typeof window=="object"&&window,typeof self=="object"&&self,typeof Nl=="object"&&Nl];for(var u=0;u<o.length;++u){var d=o[u];if(d&&d.Math==Math)return d}throw Error("Cannot find global object")}var r=t(this);function i(o,u){if(u)e:{var d=r;o=o.split(".");for(var m=0;m<o.length-1;m++){var k=o[m];if(!(k in d))break e;d=d[k]}o=o[o.length-1],m=d[o],u=u(m),u!=m&&u!=null&&e(d,o,{configurable:!0,writable:!0,value:u})}}function s(o,u){o instanceof String&&(o+="");var d=0,m=!1,k={next:function(){if(!m&&d<o.length){var V=d++;return{value:u(V,o[V]),done:!1}}return m=!0,{done:!0,value:void 0}}};return k[Symbol.iterator]=function(){return k},k}i("Array.prototype.values",function(o){return o||function(){return s(this,function(u,d){return d})}});/** @license

 Copyright The Closure Library Authors.
 SPDX-License-Identifier: Apache-2.0
*/var a=a||{},l=this||self;function c(o){var u=typeof o;return u=u!="object"?u:o?Array.isArray(o)?"array":u:"null",u=="array"||u=="object"&&typeof o.length=="number"}function h(o){var u=typeof o;return u=="object"&&o!=null||u=="function"}function f(o,u,d){return o.call.apply(o.bind,arguments)}function g(o,u,d){if(!o)throw Error();if(2<arguments.length){var m=Array.prototype.slice.call(arguments,2);return function(){var k=Array.prototype.slice.call(arguments);return Array.prototype.unshift.apply(k,m),o.apply(u,k)}}return function(){return o.apply(u,arguments)}}function _(o,u,d){return _=Function.prototype.bind&&Function.prototype.bind.toString().indexOf("native code")!=-1?f:g,_.apply(null,arguments)}function E(o,u){var d=Array.prototype.slice.call(arguments,1);return function(){var m=d.slice();return m.push.apply(m,arguments),o.apply(this,m)}}function R(o,u){function d(){}d.prototype=u.prototype,o.aa=u.prototype,o.prototype=new d,o.prototype.constructor=o,o.Qb=function(m,k,V){for(var q=Array(arguments.length-2),Xe=2;Xe<arguments.length;Xe++)q[Xe-2]=arguments[Xe];return u.prototype[k].apply(m,q)}}function N(o){const u=o.length;if(0<u){const d=Array(u);for(let m=0;m<u;m++)d[m]=o[m];return d}return[]}function P(o,u){for(let d=1;d<arguments.length;d++){const m=arguments[d];if(c(m)){const k=o.length||0,V=m.length||0;o.length=k+V;for(let q=0;q<V;q++)o[k+q]=m[q]}else o.push(m)}}class U{constructor(u,d){this.i=u,this.j=d,this.h=0,this.g=null}get(){let u;return 0<this.h?(this.h--,u=this.g,this.g=u.next,u.next=null):u=this.i(),u}}function B(o){return/^[\s\xa0]*$/.test(o)}function z(){var o=l.navigator;return o&&(o=o.userAgent)?o:""}function J(o){return J[" "](o),o}J[" "]=function(){};var qe=z().indexOf("Gecko")!=-1&&!(z().toLowerCase().indexOf("webkit")!=-1&&z().indexOf("Edge")==-1)&&!(z().indexOf("Trident")!=-1||z().indexOf("MSIE")!=-1)&&z().indexOf("Edge")==-1;function Y(o,u,d){for(const m in o)u.call(d,o[m],m,o)}function I(o,u){for(const d in o)u.call(void 0,o[d],d,o)}function v(o){const u={};for(const d in o)u[d]=o[d];return u}const w="constructor hasOwnProperty isPrototypeOf propertyIsEnumerable toLocaleString toString valueOf".split(" ");function A(o,u){let d,m;for(let k=1;k<arguments.length;k++){m=arguments[k];for(d in m)o[d]=m[d];for(let V=0;V<w.length;V++)d=w[V],Object.prototype.hasOwnProperty.call(m,d)&&(o[d]=m[d])}}function C(o){var u=1;o=o.split(":");const d=[];for(;0<u&&o.length;)d.push(o.shift()),u--;return o.length&&d.push(o.join(":")),d}function S(o){l.setTimeout(()=>{throw o},0)}function T(){var o=Nt;let u=null;return o.g&&(u=o.g,o.g=o.g.next,o.g||(o.h=null),u.next=null),u}class Ze{constructor(){this.h=this.g=null}add(u,d){const m=or.get();m.set(u,d),this.h?this.h.next=m:this.g=m,this.h=m}}var or=new U(()=>new Pi,o=>o.reset());class Pi{constructor(){this.next=this.g=this.h=null}set(u,d){this.h=u,this.g=d,this.next=null}reset(){this.next=this.g=this.h=null}}let Bn,_n=!1,Nt=new Ze,ar=()=>{const o=l.Promise.resolve(void 0);Bn=()=>{o.then(lr)}};var lr=()=>{for(var o;o=T();){try{o.h.call(o.g)}catch(d){S(d)}var u=or;u.j(o),100>u.h&&(u.h++,o.next=u.g,u.g=o)}_n=!1};function an(){this.s=this.s,this.C=this.C}an.prototype.s=!1,an.prototype.ma=function(){this.s||(this.s=!0,this.N())},an.prototype.N=function(){if(this.C)for(;this.C.length;)this.C.shift()()};function yt(o,u){this.type=o,this.g=this.target=u,this.defaultPrevented=!1}yt.prototype.h=function(){this.defaultPrevented=!0};var Gs=(function(){if(!l.addEventListener||!Object.defineProperty)return!1;var o=!1,u=Object.defineProperty({},"passive",{get:function(){o=!0}});try{const d=()=>{};l.addEventListener("test",d,u),l.removeEventListener("test",d,u)}catch{}return o})();function X(o,u){if(yt.call(this,o?o.type:""),this.relatedTarget=this.g=this.target=null,this.button=this.screenY=this.screenX=this.clientY=this.clientX=0,this.key="",this.metaKey=this.shiftKey=this.altKey=this.ctrlKey=!1,this.state=null,this.pointerId=0,this.pointerType="",this.i=null,o){var d=this.type=o.type,m=o.changedTouches&&o.changedTouches.length?o.changedTouches[0]:null;if(this.target=o.target||o.srcElement,this.g=u,u=o.relatedTarget){if(qe){e:{try{J(u.nodeName);var k=!0;break e}catch{}k=!1}k||(u=null)}}else d=="mouseover"?u=o.fromElement:d=="mouseout"&&(u=o.toElement);this.relatedTarget=u,m?(this.clientX=m.clientX!==void 0?m.clientX:m.pageX,this.clientY=m.clientY!==void 0?m.clientY:m.pageY,this.screenX=m.screenX||0,this.screenY=m.screenY||0):(this.clientX=o.clientX!==void 0?o.clientX:o.pageX,this.clientY=o.clientY!==void 0?o.clientY:o.pageY,this.screenX=o.screenX||0,this.screenY=o.screenY||0),this.button=o.button,this.key=o.key||"",this.ctrlKey=o.ctrlKey,this.altKey=o.altKey,this.shiftKey=o.shiftKey,this.metaKey=o.metaKey,this.pointerId=o.pointerId||0,this.pointerType=typeof o.pointerType=="string"?o.pointerType:si[o.pointerType]||"",this.state=o.state,this.i=o,o.defaultPrevented&&X.aa.h.call(this)}}R(X,yt);var si={2:"touch",3:"pen",4:"mouse"};X.prototype.h=function(){X.aa.h.call(this);var o=this.i;o.preventDefault?o.preventDefault():o.returnValue=!1};var Xt="closure_listenable_"+(1e6*Math.random()|0),cs=0;function gr(o,u,d,m,k){this.listener=o,this.proxy=null,this.src=u,this.type=d,this.capture=!!m,this.ha=k,this.key=++cs,this.da=this.fa=!1}function ki(o){o.da=!0,o.listener=null,o.proxy=null,o.src=null,o.ha=null}function oi(o){this.src=o,this.g={},this.h=0}oi.prototype.add=function(o,u,d,m,k){var V=o.toString();o=this.g[V],o||(o=this.g[V]=[],this.h++);var q=Oi(o,u,m,k);return-1<q?(u=o[q],d||(u.fa=!1)):(u=new gr(u,this.src,V,!!m,k),u.fa=d,o.push(u)),u};function Ni(o,u){var d=u.type;if(d in o.g){var m=o.g[d],k=Array.prototype.indexOf.call(m,u,void 0),V;(V=0<=k)&&Array.prototype.splice.call(m,k,1),V&&(ki(u),o.g[d].length==0&&(delete o.g[d],o.h--))}}function Oi(o,u,d,m){for(var k=0;k<o.length;++k){var V=o[k];if(!V.da&&V.listener==u&&V.capture==!!d&&V.ha==m)return k}return-1}var us="closure_lm_"+(1e6*Math.random()|0),Zo={};function hs(o,u,d,m,k){if(Array.isArray(u)){for(var V=0;V<u.length;V++)hs(o,u[V],d,m,k);return null}return d=cl(d),o&&o[Xt]?o.K(u,d,h(m)?!!m.capture:!1,k):Ks(o,u,d,!1,m,k)}function Ks(o,u,d,m,k,V){if(!u)throw Error("Invalid event type");var q=h(k)?!!k.capture:!!k,Xe=na(o);if(Xe||(o[us]=Xe=new oi(o)),d=Xe.add(u,d,m,q,V),d.proxy)return d;if(m=ea(),d.proxy=m,m.src=o,m.listener=d,o.addEventListener)Gs||(k=q),k===void 0&&(k=!1),o.addEventListener(u.toString(),m,k);else if(o.attachEvent)o.attachEvent(ll(u.toString()),m);else if(o.addListener&&o.removeListener)o.addListener(m);else throw Error("addEventListener and attachEvent are unavailable.");return d}function ea(){function o(d){return u.call(o.src,o.listener,d)}const u=ou;return o}function ta(o,u,d,m,k){if(Array.isArray(u))for(var V=0;V<u.length;V++)ta(o,u[V],d,m,k);else m=h(m)?!!m.capture:!!m,d=cl(d),o&&o[Xt]?(o=o.i,u=String(u).toString(),u in o.g&&(V=o.g[u],d=Oi(V,d,m,k),-1<d&&(ki(V[d]),Array.prototype.splice.call(V,d,1),V.length==0&&(delete o.g[u],o.h--)))):o&&(o=na(o))&&(u=o.g[u.toString()],o=-1,u&&(o=Oi(u,d,m,k)),(d=-1<o?u[o]:null)&&Di(d))}function Di(o){if(typeof o!="number"&&o&&!o.da){var u=o.src;if(u&&u[Xt])Ni(u.i,o);else{var d=o.type,m=o.proxy;u.removeEventListener?u.removeEventListener(d,m,o.capture):u.detachEvent?u.detachEvent(ll(d),m):u.addListener&&u.removeListener&&u.removeListener(m),(d=na(u))?(Ni(d,o),d.h==0&&(d.src=null,u[us]=null)):ki(o)}}}function ll(o){return o in Zo?Zo[o]:Zo[o]="on"+o}function ou(o,u){if(o.da)o=!0;else{u=new X(u,this);var d=o.listener,m=o.ha||o.src;o.fa&&Di(o),o=d.call(m,u)}return o}function na(o){return o=o[us],o instanceof oi?o:null}var Vi="__closure_events_fn_"+(1e9*Math.random()>>>0);function cl(o){return typeof o=="function"?o:(o[Vi]||(o[Vi]=function(u){return o.handleEvent(u)}),o[Vi])}function Zt(){an.call(this),this.i=new oi(this),this.M=this,this.F=null}R(Zt,an),Zt.prototype[Xt]=!0,Zt.prototype.removeEventListener=function(o,u,d,m){ta(this,o,u,d,m)};function en(o,u){var d,m=o.F;if(m)for(d=[];m;m=m.F)d.push(m);if(o=o.M,m=u.type||u,typeof u=="string")u=new yt(u,o);else if(u instanceof yt)u.target=u.target||o;else{var k=u;u=new yt(m,o),A(u,k)}if(k=!0,d)for(var V=d.length-1;0<=V;V--){var q=u.g=d[V];k=Qs(q,m,!0,u)&&k}if(q=u.g=o,k=Qs(q,m,!0,u)&&k,k=Qs(q,m,!1,u)&&k,d)for(V=0;V<d.length;V++)q=u.g=d[V],k=Qs(q,m,!1,u)&&k}Zt.prototype.N=function(){if(Zt.aa.N.call(this),this.i){var o=this.i,u;for(u in o.g){for(var d=o.g[u],m=0;m<d.length;m++)ki(d[m]);delete o.g[u],o.h--}}this.F=null},Zt.prototype.K=function(o,u,d,m){return this.i.add(String(o),u,!1,d,m)},Zt.prototype.L=function(o,u,d,m){return this.i.add(String(o),u,!0,d,m)};function Qs(o,u,d,m){if(u=o.i.g[String(u)],!u)return!0;u=u.concat();for(var k=!0,V=0;V<u.length;++V){var q=u[V];if(q&&!q.da&&q.capture==d){var Xe=q.listener,un=q.ha||q.src;q.fa&&Ni(o.i,q),k=Xe.call(un,m)!==!1&&k}}return k&&!m.defaultPrevented}function ul(o,u,d){if(typeof o=="function")d&&(o=_(o,d));else if(o&&typeof o.handleEvent=="function")o=_(o.handleEvent,o);else throw Error("Invalid listener argument");return 2147483647<Number(u)?-1:l.setTimeout(o,u||0)}function hl(o){o.g=ul(()=>{o.g=null,o.i&&(o.i=!1,hl(o))},o.l);const u=o.h;o.h=null,o.m.apply(null,u)}class au extends an{constructor(u,d){super(),this.m=u,this.l=d,this.h=null,this.i=!1,this.g=null}j(u){this.h=arguments,this.g?this.i=!0:hl(this)}N(){super.N(),this.g&&(l.clearTimeout(this.g),this.g=null,this.i=!1,this.h=null)}}function ds(o){an.call(this),this.h=o,this.g={}}R(ds,an);var dl=[];function ra(o){Y(o.g,function(u,d){this.g.hasOwnProperty(d)&&Di(u)},o),o.g={}}ds.prototype.N=function(){ds.aa.N.call(this),ra(this)},ds.prototype.handleEvent=function(){throw Error("EventHandler.handleEvent not implemented")};var ia=l.JSON.stringify,vn=l.JSON.parse,Kn=class{stringify(o){return l.JSON.stringify(o,void 0)}parse(o){return l.JSON.parse(o,void 0)}};function Mi(){}Mi.prototype.h=null;function Qn(o){return o.h||(o.h=o.i())}function fl(){}var fs={OPEN:"a",kb:"b",Ja:"c",wb:"d"};function Ys(){yt.call(this,"d")}R(Ys,yt);function sa(){yt.call(this,"c")}R(sa,yt);var ai={},oa=null;function ps(){return oa=oa||new Zt}ai.La="serverreachability";function pl(o){yt.call(this,ai.La,o)}R(pl,yt);function ms(o){const u=ps();en(u,new pl(u))}ai.STAT_EVENT="statevent";function ml(o,u){yt.call(this,ai.STAT_EVENT,o),this.stat=u}R(ml,yt);function ln(o){const u=ps();en(u,new ml(u,o))}ai.Ma="timingevent";function gl(o,u){yt.call(this,ai.Ma,o),this.size=u}R(gl,yt);function xi(o,u){if(typeof o!="function")throw Error("Fn must not be null and must be a function");return l.setTimeout(function(){o()},u)}function gs(){this.g=!0}gs.prototype.xa=function(){this.g=!1};function _l(o,u,d,m,k,V){o.info(function(){if(o.g)if(V)for(var q="",Xe=V.split("&"),un=0;un<Xe.length;un++){var $e=Xe[un].split("=");if(1<$e.length){var In=$e[0];$e=$e[1];var An=In.split("_");q=2<=An.length&&An[1]=="type"?q+(In+"="+$e+"&"):q+(In+"=redacted&")}}else q=null;else q=V;return"XMLHTTP REQ ("+m+") [attempt "+k+"]: "+u+`
`+d+`
`+q})}function lu(o,u,d,m,k,V,q){o.info(function(){return"XMLHTTP RESP ("+m+") [ attempt "+k+"]: "+u+`
`+d+`
`+V+" "+q})}function Li(o,u,d,m){o.info(function(){return"XMLHTTP TEXT ("+u+"): "+M(o,d)+(m?" "+m:"")})}function cu(o,u){o.info(function(){return"TIMEOUT: "+u})}gs.prototype.info=function(){};function M(o,u){if(!o.g)return u;if(!u)return null;try{var d=JSON.parse(u);if(d){for(o=0;o<d.length;o++)if(Array.isArray(d[o])){var m=d[o];if(!(2>m.length)){var k=m[1];if(Array.isArray(k)&&!(1>k.length)){var V=k[0];if(V!="noop"&&V!="stop"&&V!="close")for(var q=1;q<k.length;q++)k[q]=""}}}}return ia(d)}catch{return u}}var $={NO_ERROR:0,gb:1,tb:2,sb:3,nb:4,rb:5,ub:6,Ia:7,TIMEOUT:8,xb:9},ae={lb:"complete",Hb:"success",Ja:"error",Ia:"abort",zb:"ready",Ab:"readystatechange",TIMEOUT:"timeout",vb:"incrementaldata",yb:"progress",ob:"downloadprogress",Pb:"uploadprogress"},le;function Z(){}R(Z,Mi),Z.prototype.g=function(){return new XMLHttpRequest},Z.prototype.i=function(){return{}},le=new Z;function Ne(o,u,d,m){this.j=o,this.i=u,this.l=d,this.R=m||1,this.U=new ds(this),this.I=45e3,this.H=null,this.o=!1,this.m=this.A=this.v=this.L=this.F=this.S=this.B=null,this.D=[],this.g=null,this.C=0,this.s=this.u=null,this.X=-1,this.J=!1,this.O=0,this.M=null,this.W=this.K=this.T=this.P=!1,this.h=new et}function et(){this.i=null,this.g="",this.h=!1}var He={},Ft={};function it(o,u,d){o.L=1,o.v=Fe(Ae(u)),o.m=d,o.P=!0,Ye(o,null)}function Ye(o,u){o.F=Date.now(),Je(o),o.A=Ae(o.v);var d=o.A,m=o.R;Array.isArray(m)||(m=[String(m)]),tn(d.i,"t",m),o.C=0,d=o.j.J,o.h=new et,o.g=El(o.j,d?u:null,!o.m),0<o.O&&(o.M=new au(_(o.Y,o,o.g),o.O)),u=o.U,d=o.g,m=o.ca;var k="readystatechange";Array.isArray(k)||(k&&(dl[0]=k.toString()),k=dl);for(var V=0;V<k.length;V++){var q=hs(d,k[V],m||u.handleEvent,!1,u.h||u);if(!q)break;u.g[q.key]=q}u=o.H?v(o.H):{},o.m?(o.u||(o.u="POST"),u["Content-Type"]="application/x-www-form-urlencoded",o.g.ea(o.A,o.u,o.m,u)):(o.u="GET",o.g.ea(o.A,o.u,null,u)),ms(),_l(o.i,o.u,o.A,o.l,o.R,o.m)}Ne.prototype.ca=function(o){o=o.target;const u=this.M;u&&Bt(o)==3?u.j():this.Y(o)},Ne.prototype.Y=function(o){try{if(o==this.g)e:{const An=Bt(this.g);var u=this.g.Ba();const Js=this.g.Z();if(!(3>An)&&(An!=3||this.g&&(this.h.h||this.g.oa()||yr(this.g)))){this.J||An!=4||u==7||(u==8||0>=Js?ms(3):ms(2)),Et(this);var d=this.g.Z();this.X=d;t:if(st(this)){var m=yr(this.g);o="";var k=m.length,V=Bt(this.g)==4;if(!this.h.i){if(typeof TextDecoder>"u"){ft(this),dt(this);var q="";break t}this.h.i=new l.TextDecoder}for(u=0;u<k;u++)this.h.h=!0,o+=this.h.i.decode(m[u],{stream:!(V&&u==k-1)});m.length=0,this.h.g+=o,this.C=0,q=this.h.g}else q=this.g.oa();if(this.o=d==200,lu(this.i,this.u,this.A,this.l,this.R,An,d),this.o){if(this.T&&!this.K){t:{if(this.g){var Xe,un=this.g;if((Xe=un.g?un.g.getResponseHeader("X-HTTP-Initial-Response"):null)&&!B(Xe)){var $e=Xe;break t}}$e=null}if(d=$e)Li(this.i,this.l,d,"Initial handshake response via X-HTTP-Initial-Response"),this.K=!0,St(this,d);else{this.o=!1,this.s=3,ln(12),ft(this),dt(this);break e}}if(this.P){d=!0;let Tr;for(;!this.J&&this.C<q.length;)if(Tr=ht(this,q),Tr==Ft){An==4&&(this.s=4,ln(14),d=!1),Li(this.i,this.l,null,"[Incomplete Response]");break}else if(Tr==He){this.s=4,ln(15),Li(this.i,this.l,q,"[Invalid Chunk]"),d=!1;break}else Li(this.i,this.l,Tr,null),St(this,Tr);if(st(this)&&this.C!=0&&(this.h.g=this.h.g.slice(this.C),this.C=0),An!=4||q.length!=0||this.h.h||(this.s=1,ln(16),d=!1),this.o=this.o&&d,!d)Li(this.i,this.l,q,"[Invalid Chunked Response]"),ft(this),dt(this);else if(0<q.length&&!this.W){this.W=!0;var In=this.j;In.g==this&&In.ba&&!In.M&&(In.j.info("Great, no buffering proxy detected. Bytes received: "+q.length),Mn(In),In.M=!0,ln(11))}}else Li(this.i,this.l,q,null),St(this,q);An==4&&ft(this),this.o&&!this.J&&(An==4?aa(this.j,this):(this.o=!1,Je(this)))}else cr(this.g),d==400&&0<q.indexOf("Unknown SID")?(this.s=3,ln(12)):(this.s=0,ln(13)),ft(this),dt(this)}}}catch{}finally{}};function st(o){return o.g?o.u=="GET"&&o.L!=2&&o.j.Ca:!1}function ht(o,u){var d=o.C,m=u.indexOf(`
`,d);return m==-1?Ft:(d=Number(u.substring(d,m)),isNaN(d)?He:(m+=1,m+d>u.length?Ft:(u=u.slice(m,m+d),o.C=m+d,u)))}Ne.prototype.cancel=function(){this.J=!0,ft(this)};function Je(o){o.S=Date.now()+o.I,bt(o,o.I)}function bt(o,u){if(o.B!=null)throw Error("WatchDog timer not null");o.B=xi(_(o.ba,o),u)}function Et(o){o.B&&(l.clearTimeout(o.B),o.B=null)}Ne.prototype.ba=function(){this.B=null;const o=Date.now();0<=o-this.S?(cu(this.i,this.A),this.L!=2&&(ms(),ln(17)),ft(this),this.s=2,dt(this)):bt(this,this.S-o)};function dt(o){o.j.G==0||o.J||aa(o.j,o)}function ft(o){Et(o);var u=o.M;u&&typeof u.ma=="function"&&u.ma(),o.M=null,ra(o.U),o.g&&(u=o.g,o.g=null,u.abort(),u.ma())}function St(o,u){try{var d=o.j;if(d.G!=0&&(d.g==o||We(d.h,o))){if(!o.K&&We(d.h,o)&&d.G==3){try{var m=d.Da.g.parse(u)}catch{m=null}if(Array.isArray(m)&&m.length==3){var k=m;if(k[0]==0){e:if(!d.u){if(d.g)if(d.g.F+3e3<o.F)ci(d),Xn(d);else break e;zn(d),ln(18)}}else d.za=k[1],0<d.za-d.T&&37500>k[2]&&d.F&&d.v==0&&!d.C&&(d.C=xi(_(d.Za,d),6e3));if(1>=ze(d.h)&&d.ca){try{d.ca()}catch{}d.ca=void 0}}else xr(d,11)}else if((o.K||d.g==o)&&ci(d),!B(u))for(k=d.Da.g.parse(u),u=0;u<k.length;u++){let $e=k[u];if(d.T=$e[0],$e=$e[1],d.G==2)if($e[0]=="c"){d.K=$e[1],d.ia=$e[2];const In=$e[3];In!=null&&(d.la=In,d.j.info("VER="+d.la));const An=$e[4];An!=null&&(d.Aa=An,d.j.info("SVER="+d.Aa));const Js=$e[5];Js!=null&&typeof Js=="number"&&0<Js&&(m=1.5*Js,d.L=m,d.j.info("backChannelRequestTimeoutMs_="+m)),m=d;const Tr=o.g;if(Tr){const Il=Tr.g?Tr.g.getResponseHeader("X-Client-Wire-Protocol"):null;if(Il){var V=m.h;V.g||Il.indexOf("spdy")==-1&&Il.indexOf("quic")==-1&&Il.indexOf("h2")==-1||(V.j=V.l,V.g=new Set,V.h&&(G(V,V.h),V.h=null))}if(m.D){const uu=Tr.g?Tr.g.getResponseHeader("X-HTTP-Session-Id"):null;uu&&(m.ya=uu,De(m.I,m.D,uu))}}d.G=3,d.l&&d.l.ua(),d.ba&&(d.R=Date.now()-o.F,d.j.info("Handshake RTT: "+d.R+"ms")),m=d;var q=o;if(m.qa=la(m,m.J?m.ia:null,m.W),q.K){Ie(m.h,q);var Xe=q,un=m.L;un&&(Xe.I=un),Xe.B&&(Et(Xe),Je(Xe)),m.g=q}else li(m);0<d.i.length&&ve(d)}else $e[0]!="stop"&&$e[0]!="close"||xr(d,7);else d.G==3&&($e[0]=="stop"||$e[0]=="close"?$e[0]=="stop"?xr(d,7):wr(d):$e[0]!="noop"&&d.l&&d.l.ta($e),d.v=0)}}ms(4)}catch{}}var Wt=class{constructor(o,u){this.g=o,this.map=u}};function Ot(o){this.l=o||10,l.PerformanceNavigationTiming?(o=l.performance.getEntriesByType("navigation"),o=0<o.length&&(o[0].nextHopProtocol=="hq"||o[0].nextHopProtocol=="h2")):o=!!(l.chrome&&l.chrome.loadTimes&&l.chrome.loadTimes()&&l.chrome.loadTimes().wasFetchedViaSpdy),this.j=o?this.l:1,this.g=null,1<this.j&&(this.g=new Set),this.h=null,this.i=[]}function be(o){return o.h?!0:o.g?o.g.size>=o.j:!1}function ze(o){return o.h?1:o.g?o.g.size:0}function We(o,u){return o.h?o.h==u:o.g?o.g.has(u):!1}function G(o,u){o.g?o.g.add(u):o.h=u}function Ie(o,u){o.h&&o.h==u?o.h=null:o.g&&o.g.has(u)&&o.g.delete(u)}Ot.prototype.cancel=function(){if(this.i=Oe(this),this.h)this.h.cancel(),this.h=null;else if(this.g&&this.g.size!==0){for(const o of this.g.values())o.cancel();this.g.clear()}};function Oe(o){if(o.h!=null)return o.i.concat(o.h.D);if(o.g!=null&&o.g.size!==0){let u=o.i;for(const d of o.g.values())u=u.concat(d.D);return u}return N(o.i)}function tt(o){if(o.V&&typeof o.V=="function")return o.V();if(typeof Map<"u"&&o instanceof Map||typeof Set<"u"&&o instanceof Set)return Array.from(o.values());if(typeof o=="string")return o.split("");if(c(o)){for(var u=[],d=o.length,m=0;m<d;m++)u.push(o[m]);return u}u=[],d=0;for(m in o)u[d++]=o[m];return u}function Ut(o){if(o.na&&typeof o.na=="function")return o.na();if(!o.V||typeof o.V!="function"){if(typeof Map<"u"&&o instanceof Map)return Array.from(o.keys());if(!(typeof Set<"u"&&o instanceof Set)){if(c(o)||typeof o=="string"){var u=[];o=o.length;for(var d=0;d<o;d++)u.push(d);return u}u=[],d=0;for(const m in o)u[d++]=m;return u}}}function pt(o,u){if(o.forEach&&typeof o.forEach=="function")o.forEach(u,void 0);else if(c(o)||typeof o=="string")Array.prototype.forEach.call(o,u,void 0);else for(var d=Ut(o),m=tt(o),k=m.length,V=0;V<k;V++)u.call(void 0,m[V],d&&d[V],o)}var fe=RegExp("^(?:([^:/?#.]+):)?(?://(?:([^\\\\/?#]*)@)?([^\\\\/?#]*?)(?::([0-9]+))?(?=[\\\\/?#]|$))?([^?#]+)?(?:\\?([^#]*))?(?:#([\\s\\S]*))?$");function ot(o,u){if(o){o=o.split("&");for(var d=0;d<o.length;d++){var m=o[d].indexOf("="),k=null;if(0<=m){var V=o[d].substring(0,m);k=o[d].substring(m+1)}else V=o[d];u(V,k?decodeURIComponent(k.replace(/\+/g," ")):"")}}}function mt(o){if(this.g=this.o=this.j="",this.s=null,this.m=this.l="",this.h=!1,o instanceof mt){this.h=o.h,cn(this,o.j),this.o=o.o,this.g=o.g,Gt(this,o.s),this.l=o.l;var u=o.i,d=new Ke;d.i=u.i,u.g&&(d.g=new Map(u.g),d.h=u.h),Mr(this,d),this.m=o.m}else o&&(u=String(o).match(fe))?(this.h=!1,cn(this,u[1]||"",!0),this.o=he(u[2]||""),this.g=he(u[3]||"",!0),Gt(this,u[4]),this.l=he(u[5]||"",!0),Mr(this,u[6]||"",!0),this.m=he(u[7]||"")):(this.h=!1,this.i=new Ke(null,this.h))}mt.prototype.toString=function(){var o=[],u=this.j;u&&o.push(ge(u,_e,!0),":");var d=this.g;return(d||u=="file")&&(o.push("//"),(u=this.o)&&o.push(ge(u,_e,!0),"@"),o.push(encodeURIComponent(String(d)).replace(/%25([0-9a-fA-F]{2})/g,"%$1")),d=this.s,d!=null&&o.push(":",String(d))),(d=this.l)&&(this.g&&d.charAt(0)!="/"&&o.push("/"),o.push(ge(d,d.charAt(0)=="/"?gt:at,!0))),(d=this.i.toString())&&o.push("?",d),(d=this.m)&&o.push("#",ge(d,Ct)),o.join("")};function Ae(o){return new mt(o)}function cn(o,u,d){o.j=d?he(u,!0):u,o.j&&(o.j=o.j.replace(/:$/,""))}function Gt(o,u){if(u){if(u=Number(u),isNaN(u)||0>u)throw Error("Bad port number "+u);o.s=u}else o.s=null}function Mr(o,u,d){u instanceof Ke?(o.i=u,Ge(o.i,o.h)):(d||(u=ge(u,Rt)),o.i=new Ke(u,o.h))}function De(o,u,d){o.i.set(u,d)}function Fe(o){return De(o,"zx",Math.floor(2147483648*Math.random()).toString(36)+Math.abs(Math.floor(2147483648*Math.random())^Date.now()).toString(36)),o}function he(o,u){return o?u?decodeURI(o.replace(/%25/g,"%2525")):decodeURIComponent(o):""}function ge(o,u,d){return typeof o=="string"?(o=encodeURI(o).replace(u,Se),d&&(o=o.replace(/%25([0-9a-fA-F]{2})/g,"%$1")),o):null}function Se(o){return o=o.charCodeAt(0),"%"+(o>>4&15).toString(16)+(o&15).toString(16)}var _e=/[#\/\?@]/g,at=/[#\?:]/g,gt=/[#\?]/g,Rt=/[#\?@]/g,Ct=/#/g;function Ke(o,u){this.h=this.g=null,this.i=o||null,this.j=!!u}function nt(o){o.g||(o.g=new Map,o.h=0,o.i&&ot(o.i,function(u,d){o.add(decodeURIComponent(u.replace(/\+/g," ")),d)}))}n=Ke.prototype,n.add=function(o,u){nt(this),this.i=null,o=wt(this,o);var d=this.g.get(o);return d||this.g.set(o,d=[]),d.push(u),this.h+=1,this};function Kt(o,u){nt(o),u=wt(o,u),o.g.has(u)&&(o.i=null,o.h-=o.g.get(u).length,o.g.delete(u))}function $t(o,u){return nt(o),u=wt(o,u),o.g.has(u)}n.forEach=function(o,u){nt(this),this.g.forEach(function(d,m){d.forEach(function(k){o.call(u,k,m,this)},this)},this)},n.na=function(){nt(this);const o=Array.from(this.g.values()),u=Array.from(this.g.keys()),d=[];for(let m=0;m<u.length;m++){const k=o[m];for(let V=0;V<k.length;V++)d.push(u[m])}return d},n.V=function(o){nt(this);let u=[];if(typeof o=="string")$t(this,o)&&(u=u.concat(this.g.get(wt(this,o))));else{o=Array.from(this.g.values());for(let d=0;d<o.length;d++)u=u.concat(o[d])}return u},n.set=function(o,u){return nt(this),this.i=null,o=wt(this,o),$t(this,o)&&(this.h-=this.g.get(o).length),this.g.set(o,[u]),this.h+=1,this},n.get=function(o,u){return o?(o=this.V(o),0<o.length?String(o[0]):u):u};function tn(o,u,d){Kt(o,u),0<d.length&&(o.i=null,o.g.set(wt(o,u),N(d)),o.h+=d.length)}n.toString=function(){if(this.i)return this.i;if(!this.g)return"";const o=[],u=Array.from(this.g.keys());for(var d=0;d<u.length;d++){var m=u[d];const V=encodeURIComponent(String(m)),q=this.V(m);for(m=0;m<q.length;m++){var k=V;q[m]!==""&&(k+="="+encodeURIComponent(String(q[m]))),o.push(k)}}return this.i=o.join("&")};function wt(o,u){return u=String(u),o.j&&(u=u.toLowerCase()),u}function Ge(o,u){u&&!o.j&&(nt(o),o.i=null,o.g.forEach(function(d,m){var k=m.toLowerCase();m!=k&&(Kt(this,m),tn(this,k,d))},o)),o.j=u}function Re(o,u){const d=new gs;if(l.Image){const m=new Image;m.onload=E(lt,d,"TestLoadImage: loaded",!0,u,m),m.onerror=E(lt,d,"TestLoadImage: error",!1,u,m),m.onabort=E(lt,d,"TestLoadImage: abort",!1,u,m),m.ontimeout=E(lt,d,"TestLoadImage: timeout",!1,u,m),l.setTimeout(function(){m.ontimeout&&m.ontimeout()},1e4),m.src=o}else u(!1)}function yn(o,u){const d=new gs,m=new AbortController,k=setTimeout(()=>{m.abort(),lt(d,"TestPingServer: timeout",!1,u)},1e4);fetch(o,{signal:m.signal}).then(V=>{clearTimeout(k),V.ok?lt(d,"TestPingServer: ok",!0,u):lt(d,"TestPingServer: server error",!1,u)}).catch(()=>{clearTimeout(k),lt(d,"TestPingServer: error",!1,u)})}function lt(o,u,d,m,k){try{k&&(k.onload=null,k.onerror=null,k.onabort=null,k.ontimeout=null),m(d)}catch{}}function je(){this.g=new Kn}function nn(o,u,d){const m=d||"";try{pt(o,function(k,V){let q=k;h(k)&&(q=ia(k)),u.push(m+V+"="+encodeURIComponent(q))})}catch(k){throw u.push(m+"type="+encodeURIComponent("_badmap")),k}}function Dt(o){this.l=o.Ub||null,this.j=o.eb||!1}R(Dt,Mi),Dt.prototype.g=function(){return new rn(this.l,this.j)},Dt.prototype.i=(function(o){return function(){return o}})({});function rn(o,u){Zt.call(this),this.D=o,this.o=u,this.m=void 0,this.status=this.readyState=0,this.responseType=this.responseText=this.response=this.statusText="",this.onreadystatechange=null,this.u=new Headers,this.h=null,this.B="GET",this.A="",this.g=!1,this.v=this.j=this.l=null}R(rn,Zt),n=rn.prototype,n.open=function(o,u){if(this.readyState!=0)throw this.abort(),Error("Error reopening a connection");this.B=o,this.A=u,this.readyState=1,Pt(this)},n.send=function(o){if(this.readyState!=1)throw this.abort(),Error("need to call open() first. ");this.g=!0;const u={headers:this.u,method:this.B,credentials:this.m,cache:void 0};o&&(u.body=o),(this.D||l).fetch(new Request(this.A,u)).then(this.Sa.bind(this),this.ga.bind(this))},n.abort=function(){this.response=this.responseText="",this.u=new Headers,this.status=0,this.j&&this.j.cancel("Request was aborted.").catch(()=>{}),1<=this.readyState&&this.g&&this.readyState!=4&&(this.g=!1,Vt(this)),this.readyState=0},n.Sa=function(o){if(this.g&&(this.l=o,this.h||(this.status=this.l.status,this.statusText=this.l.statusText,this.h=o.headers,this.readyState=2,Pt(this)),this.g&&(this.readyState=3,Pt(this),this.g)))if(this.responseType==="arraybuffer")o.arrayBuffer().then(this.Qa.bind(this),this.ga.bind(this));else if(typeof l.ReadableStream<"u"&&"body"in o){if(this.j=o.body.getReader(),this.o){if(this.responseType)throw Error('responseType must be empty for "streamBinaryChunks" mode responses.');this.response=[]}else this.response=this.responseText="",this.v=new TextDecoder;En(this)}else o.text().then(this.Ra.bind(this),this.ga.bind(this))};function En(o){o.j.read().then(o.Pa.bind(o)).catch(o.ga.bind(o))}n.Pa=function(o){if(this.g){if(this.o&&o.value)this.response.push(o.value);else if(!this.o){var u=o.value?o.value:new Uint8Array(0);(u=this.v.decode(u,{stream:!o.done}))&&(this.response=this.responseText+=u)}o.done?Vt(this):Pt(this),this.readyState==3&&En(this)}},n.Ra=function(o){this.g&&(this.response=this.responseText=o,Vt(this))},n.Qa=function(o){this.g&&(this.response=o,Vt(this))},n.ga=function(){this.g&&Vt(this)};function Vt(o){o.readyState=4,o.l=null,o.j=null,o.v=null,Pt(o)}n.setRequestHeader=function(o,u){this.u.append(o,u)},n.getResponseHeader=function(o){return this.h&&this.h.get(o.toLowerCase())||""},n.getAllResponseHeaders=function(){if(!this.h)return"";const o=[],u=this.h.entries();for(var d=u.next();!d.done;)d=d.value,o.push(d[0]+": "+d[1]),d=u.next();return o.join(`\r
`)};function Pt(o){o.onreadystatechange&&o.onreadystatechange.call(o)}Object.defineProperty(rn.prototype,"withCredentials",{get:function(){return this.m==="include"},set:function(o){this.m=o?"include":"same-origin"}});function wn(o){let u="";return Y(o,function(d,m){u+=m,u+=":",u+=d,u+=`\r
`}),u}function Yn(o,u,d){e:{for(m in d){var m=!1;break e}m=!0}m||(d=wn(d),typeof o=="string"?d!=null&&encodeURIComponent(String(d)):De(o,u,d))}function L(o){Zt.call(this),this.headers=new Map,this.o=o||null,this.h=!1,this.v=this.g=null,this.D="",this.m=0,this.l="",this.j=this.B=this.u=this.A=!1,this.I=null,this.H="",this.J=!1}R(L,Zt);var pe=/^https?$/i,kt=["POST","PUT"];n=L.prototype,n.Ha=function(o){this.J=o},n.ea=function(o,u,d,m){if(this.g)throw Error("[goog.net.XhrIo] Object is active with another request="+this.D+"; newUri="+o);u=u?u.toUpperCase():"GET",this.D=o,this.l="",this.m=0,this.A=!1,this.h=!0,this.g=this.o?this.o.g():le.g(),this.v=this.o?Qn(this.o):Qn(le),this.g.onreadystatechange=_(this.Ea,this);try{this.B=!0,this.g.open(u,String(o),!0),this.B=!1}catch(V){Qt(this,V);return}if(o=d||"",d=new Map(this.headers),m)if(Object.getPrototypeOf(m)===Object.prototype)for(var k in m)d.set(k,m[k]);else if(typeof m.keys=="function"&&typeof m.get=="function")for(const V of m.keys())d.set(V,m.get(V));else throw Error("Unknown input type for opt_headers: "+String(m));m=Array.from(d.keys()).find(V=>V.toLowerCase()=="content-type"),k=l.FormData&&o instanceof l.FormData,!(0<=Array.prototype.indexOf.call(kt,u,void 0))||m||k||d.set("Content-Type","application/x-www-form-urlencoded;charset=utf-8");for(const[V,q]of d)this.g.setRequestHeader(V,q);this.H&&(this.g.responseType=this.H),"withCredentials"in this.g&&this.g.withCredentials!==this.J&&(this.g.withCredentials=this.J);try{vr(this),this.u=!0,this.g.send(o),this.u=!1}catch(V){Qt(this,V)}};function Qt(o,u){o.h=!1,o.g&&(o.j=!0,o.g.abort(),o.j=!1),o.l=u,o.m=5,sn(o),qn(o)}function sn(o){o.A||(o.A=!0,en(o,"complete"),en(o,"error"))}n.abort=function(o){this.g&&this.h&&(this.h=!1,this.j=!0,this.g.abort(),this.j=!1,this.m=o||7,en(this,"complete"),en(this,"abort"),qn(this))},n.N=function(){this.g&&(this.h&&(this.h=!1,this.j=!0,this.g.abort(),this.j=!1),qn(this,!0)),L.aa.N.call(this)},n.Ea=function(){this.s||(this.B||this.u||this.j?_r(this):this.bb())},n.bb=function(){_r(this)};function _r(o){if(o.h&&typeof a<"u"&&(!o.v[1]||Bt(o)!=4||o.Z()!=2)){if(o.u&&Bt(o)==4)ul(o.Ea,0,o);else if(en(o,"readystatechange"),Bt(o)==4){o.h=!1;try{const q=o.Z();e:switch(q){case 200:case 201:case 202:case 204:case 206:case 304:case 1223:var u=!0;break e;default:u=!1}var d;if(!(d=u)){var m;if(m=q===0){var k=String(o.D).match(fe)[1]||null;!k&&l.self&&l.self.location&&(k=l.self.location.protocol.slice(0,-1)),m=!pe.test(k?k.toLowerCase():"")}d=m}if(d)en(o,"complete"),en(o,"success");else{o.m=6;try{var V=2<Bt(o)?o.g.statusText:""}catch{V=""}o.l=V+" ["+o.Z()+"]",sn(o)}}finally{qn(o)}}}}function qn(o,u){if(o.g){vr(o);const d=o.g,m=o.v[0]?()=>{}:null;o.g=null,o.v=null,u||en(o,"ready");try{d.onreadystatechange=m}catch{}}}function vr(o){o.I&&(l.clearTimeout(o.I),o.I=null)}n.isActive=function(){return!!this.g};function Bt(o){return o.g?o.g.readyState:0}n.Z=function(){try{return 2<Bt(this)?this.g.status:-1}catch{return-1}},n.oa=function(){try{return this.g?this.g.responseText:""}catch{return""}},n.Oa=function(o){if(this.g){var u=this.g.responseText;return o&&u.indexOf(o)==0&&(u=u.substring(o.length)),vn(u)}};function yr(o){try{if(!o.g)return null;if("response"in o.g)return o.g.response;switch(o.H){case"":case"text":return o.g.responseText;case"arraybuffer":if("mozResponseArrayBuffer"in o.g)return o.g.mozResponseArrayBuffer}return null}catch{return null}}function cr(o){const u={};o=(o.g&&2<=Bt(o)&&o.g.getAllResponseHeaders()||"").split(`\r
`);for(let m=0;m<o.length;m++){if(B(o[m]))continue;var d=C(o[m]);const k=d[0];if(d=d[1],typeof d!="string")continue;d=d.trim();const V=u[k]||[];u[k]=V,V.push(d)}I(u,function(m){return m.join(", ")})}n.Ba=function(){return this.m},n.Ka=function(){return typeof this.l=="string"?this.l:String(this.l)};function Jn(o,u,d){return d&&d.internalChannelParams&&d.internalChannelParams[o]||u}function Er(o){this.Aa=0,this.i=[],this.j=new gs,this.ia=this.qa=this.I=this.W=this.g=this.ya=this.D=this.H=this.m=this.S=this.o=null,this.Ya=this.U=0,this.Va=Jn("failFast",!1,o),this.F=this.C=this.u=this.s=this.l=null,this.X=!0,this.za=this.T=-1,this.Y=this.v=this.B=0,this.Ta=Jn("baseRetryDelayMs",5e3,o),this.cb=Jn("retryDelaySeedMs",1e4,o),this.Wa=Jn("forwardChannelMaxRetries",2,o),this.wa=Jn("forwardChannelRequestTimeoutMs",2e4,o),this.pa=o&&o.xmlHttpFactory||void 0,this.Xa=o&&o.Tb||void 0,this.Ca=o&&o.useFetchStreams||!1,this.L=void 0,this.J=o&&o.supportsCrossDomainXhr||!1,this.K="",this.h=new Ot(o&&o.concurrentRequestLimit),this.Da=new je,this.P=o&&o.fastHandshake||!1,this.O=o&&o.encodeInitMessageHeaders||!1,this.P&&this.O&&(this.O=!1),this.Ua=o&&o.Rb||!1,o&&o.xa&&this.j.xa(),o&&o.forceLongPolling&&(this.X=!1),this.ba=!this.P&&this.X&&o&&o.detectBufferingProxy||!1,this.ja=void 0,o&&o.longPollingTimeout&&0<o.longPollingTimeout&&(this.ja=o.longPollingTimeout),this.ca=void 0,this.R=0,this.M=!1,this.ka=this.A=null}n=Er.prototype,n.la=8,n.G=1,n.connect=function(o,u,d,m){ln(0),this.W=o,this.H=u||{},d&&m!==void 0&&(this.H.OSID=d,this.H.OAID=m),this.F=this.X,this.I=la(this,null,this.W),ve(this)};function wr(o){if(Fi(o),o.G==3){var u=o.U++,d=Ae(o.I);if(De(d,"SID",o.K),De(d,"RID",u),De(d,"TYPE","terminate"),Ue(o,d),u=new Ne(o,o.j,u),u.L=2,u.v=Fe(Ae(d)),d=!1,l.navigator&&l.navigator.sendBeacon)try{d=l.navigator.sendBeacon(u.v.toString(),"")}catch{}!d&&l.Image&&(new Image().src=u.v,d=!0),d||(u.g=El(u.j,null),u.g.ea(u.v)),u.F=Date.now(),Je(u)}yl(o)}function Xn(o){o.g&&(Mn(o),o.g.cancel(),o.g=null)}function Fi(o){Xn(o),o.u&&(l.clearTimeout(o.u),o.u=null),ci(o),o.h.cancel(),o.s&&(typeof o.s=="number"&&l.clearTimeout(o.s),o.s=null)}function ve(o){if(!be(o.h)&&!o.s){o.s=!0;var u=o.Ga;Bn||ar(),_n||(Bn(),_n=!0),Nt.add(u,o),o.B=0}}function rt(o,u){return ze(o.h)>=o.h.j-(o.s?1:0)?!1:o.s?(o.i=u.D.concat(o.i),!0):o.G==1||o.G==2||o.B>=(o.Va?0:o.Wa)?!1:(o.s=xi(_(o.Ga,o,u),vl(o,o.B)),o.B++,!0)}n.Ga=function(o){if(this.s)if(this.s=null,this.G==1){if(!o){this.U=Math.floor(1e5*Math.random()),o=this.U++;const k=new Ne(this,this.j,o);let V=this.o;if(this.S&&(V?(V=v(V),A(V,this.S)):V=this.S),this.m!==null||this.O||(k.H=V,V=null),this.P)e:{for(var u=0,d=0;d<this.i.length;d++){t:{var m=this.i[d];if("__data__"in m.map&&(m=m.map.__data__,typeof m=="string")){m=m.length;break t}m=void 0}if(m===void 0)break;if(u+=m,4096<u){u=d;break e}if(u===4096||d===this.i.length-1){u=d+1;break e}}u=1e3}else u=1e3;u=Vn(this,k,u),d=Ae(this.I),De(d,"RID",o),De(d,"CVER",22),this.D&&De(d,"X-HTTP-Session-Id",this.D),Ue(this,d),V&&(this.O?u="headers="+encodeURIComponent(String(wn(V)))+"&"+u:this.m&&Yn(d,this.m,V)),G(this.h,k),this.Ua&&De(d,"TYPE","init"),this.P?(De(d,"$req",u),De(d,"SID","null"),k.T=!0,it(k,d,null)):it(k,d,u),this.G=2}}else this.G==3&&(o?de(this,o):this.i.length==0||be(this.h)||de(this))};function de(o,u){var d;u?d=u.l:d=o.U++;const m=Ae(o.I);De(m,"SID",o.K),De(m,"RID",d),De(m,"AID",o.T),Ue(o,m),o.m&&o.o&&Yn(m,o.m,o.o),d=new Ne(o,o.j,d,o.B+1),o.m===null&&(d.H=o.o),u&&(o.i=u.D.concat(o.i)),u=Vn(o,d,1e3),d.I=Math.round(.5*o.wa)+Math.round(.5*o.wa*Math.random()),G(o.h,d),it(d,m,u)}function Ue(o,u){o.H&&Y(o.H,function(d,m){De(u,m,d)}),o.l&&pt({},function(d,m){De(u,m,d)})}function Vn(o,u,d){d=Math.min(o.i.length,d);var m=o.l?_(o.l.Na,o.l,o):null;e:{var k=o.i;let V=-1;for(;;){const q=["count="+d];V==-1?0<d?(V=k[0].g,q.push("ofs="+V)):V=0:q.push("ofs="+V);let Xe=!0;for(let un=0;un<d;un++){let $e=k[un].g;const In=k[un].map;if($e-=V,0>$e)V=Math.max(0,k[un].g-100),Xe=!1;else try{nn(In,q,"req"+$e+"_")}catch{m&&m(In)}}if(Xe){m=q.join("&");break e}}}return o=o.i.splice(0,d),u.D=o,m}function li(o){if(!o.g&&!o.u){o.Y=1;var u=o.Fa;Bn||ar(),_n||(Bn(),_n=!0),Nt.add(u,o),o.v=0}}function zn(o){return o.g||o.u||3<=o.v?!1:(o.Y++,o.u=xi(_(o.Fa,o),vl(o,o.v)),o.v++,!0)}n.Fa=function(){if(this.u=null,_s(this),this.ba&&!(this.M||this.g==null||0>=this.R)){var o=2*this.R;this.j.info("BP detection timer enabled: "+o),this.A=xi(_(this.ab,this),o)}},n.ab=function(){this.A&&(this.A=null,this.j.info("BP detection timeout reached."),this.j.info("Buffering proxy detected and switch to long-polling!"),this.F=!1,this.M=!0,ln(10),Xn(this),_s(this))};function Mn(o){o.A!=null&&(l.clearTimeout(o.A),o.A=null)}function _s(o){o.g=new Ne(o,o.j,"rpc",o.Y),o.m===null&&(o.g.H=o.o),o.g.O=0;var u=Ae(o.qa);De(u,"RID","rpc"),De(u,"SID",o.K),De(u,"AID",o.T),De(u,"CI",o.F?"0":"1"),!o.F&&o.ja&&De(u,"TO",o.ja),De(u,"TYPE","xmlhttp"),Ue(o,u),o.m&&o.o&&Yn(u,o.m,o.o),o.L&&(o.g.I=o.L);var d=o.g;o=o.ia,d.L=1,d.v=Fe(Ae(u)),d.m=null,d.P=!0,Ye(d,o)}n.Za=function(){this.C!=null&&(this.C=null,Xn(this),zn(this),ln(19))};function ci(o){o.C!=null&&(l.clearTimeout(o.C),o.C=null)}function aa(o,u){var d=null;if(o.g==u){ci(o),Mn(o),o.g=null;var m=2}else if(We(o.h,u))d=u.D,Ie(o.h,u),m=1;else return;if(o.G!=0){if(u.o)if(m==1){d=u.m?u.m.length:0,u=Date.now()-u.F;var k=o.B;m=ps(),en(m,new gl(m,d)),ve(o)}else li(o);else if(k=u.s,k==3||k==0&&0<u.X||!(m==1&&rt(o,u)||m==2&&zn(o)))switch(d&&0<d.length&&(u=o.h,u.i=u.i.concat(d)),k){case 1:xr(o,5);break;case 4:xr(o,10);break;case 3:xr(o,6);break;default:xr(o,2)}}}function vl(o,u){let d=o.Ta+Math.floor(Math.random()*o.cb);return o.isActive()||(d*=2),d*u}function xr(o,u){if(o.j.info("Error code "+u),u==2){var d=_(o.fb,o),m=o.Xa;const k=!m;m=new mt(m||"//www.google.com/images/cleardot.gif"),l.location&&l.location.protocol=="http"||cn(m,"https"),Fe(m),k?Re(m.toString(),d):yn(m.toString(),d)}else ln(2);o.G=0,o.l&&o.l.sa(u),yl(o),Fi(o)}n.fb=function(o){o?(this.j.info("Successfully pinged google.com"),ln(2)):(this.j.info("Failed to ping google.com"),ln(1))};function yl(o){if(o.G=0,o.ka=[],o.l){const u=Oe(o.h);(u.length!=0||o.i.length!=0)&&(P(o.ka,u),P(o.ka,o.i),o.h.i.length=0,N(o.i),o.i.length=0),o.l.ra()}}function la(o,u,d){var m=d instanceof mt?Ae(d):new mt(d);if(m.g!="")u&&(m.g=u+"."+m.g),Gt(m,m.s);else{var k=l.location;m=k.protocol,u=u?u+"."+k.hostname:k.hostname,k=+k.port;var V=new mt(null);m&&cn(V,m),u&&(V.g=u),k&&Gt(V,k),d&&(V.l=d),m=V}return d=o.D,u=o.ya,d&&u&&De(m,d,u),De(m,"VER",o.la),Ue(o,m),m}function El(o,u,d){if(u&&!o.J)throw Error("Can't create secondary domain capable XhrIo object.");return u=o.Ca&&!o.pa?new L(new Dt({eb:d})):new L(o.pa),u.Ha(o.J),u}n.isActive=function(){return!!this.l&&this.l.isActive(this)};function ca(){}n=ca.prototype,n.ua=function(){},n.ta=function(){},n.sa=function(){},n.ra=function(){},n.isActive=function(){return!0},n.Na=function(){};function vs(){}vs.prototype.g=function(o,u){return new Tn(o,u)};function Tn(o,u){Zt.call(this),this.g=new Er(u),this.l=o,this.h=u&&u.messageUrlParams||null,o=u&&u.messageHeaders||null,u&&u.clientProtocolHeaderRequired&&(o?o["X-Client-Protocol"]="webchannel":o={"X-Client-Protocol":"webchannel"}),this.g.o=o,o=u&&u.initMessageHeaders||null,u&&u.messageContentType&&(o?o["X-WebChannel-Content-Type"]=u.messageContentType:o={"X-WebChannel-Content-Type":u.messageContentType}),u&&u.va&&(o?o["X-WebChannel-Client-Profile"]=u.va:o={"X-WebChannel-Client-Profile":u.va}),this.g.S=o,(o=u&&u.Sb)&&!B(o)&&(this.g.m=o),this.v=u&&u.supportsCrossDomainXhr||!1,this.u=u&&u.sendRawJson||!1,(u=u&&u.httpSessionIdParam)&&!B(u)&&(this.g.D=u,o=this.h,o!==null&&u in o&&(o=this.h,u in o&&delete o[u])),this.j=new Ui(this)}R(Tn,Zt),Tn.prototype.m=function(){this.g.l=this.j,this.v&&(this.g.J=!0),this.g.connect(this.l,this.h||void 0)},Tn.prototype.close=function(){wr(this.g)},Tn.prototype.o=function(o){var u=this.g;if(typeof o=="string"){var d={};d.__data__=o,o=d}else this.u&&(d={},d.__data__=ia(o),o=d);u.i.push(new Wt(u.Ya++,o)),u.G==3&&ve(u)},Tn.prototype.N=function(){this.g.l=null,delete this.j,wr(this.g),delete this.g,Tn.aa.N.call(this)};function wl(o){Ys.call(this),o.__headers__&&(this.headers=o.__headers__,this.statusCode=o.__status__,delete o.__headers__,delete o.__status__);var u=o.__sm__;if(u){e:{for(const d in u){o=d;break e}o=void 0}(this.i=o)&&(o=this.i,u=u!==null&&o in u?u[o]:void 0),this.data=u}else this.data=o}R(wl,Ys);function Tl(){sa.call(this),this.status=1}R(Tl,sa);function Ui(o){this.g=o}R(Ui,ca),Ui.prototype.ua=function(){en(this.g,"a")},Ui.prototype.ta=function(o){en(this.g,new wl(o))},Ui.prototype.sa=function(o){en(this.g,new Tl)},Ui.prototype.ra=function(){en(this.g,"b")},vs.prototype.createWebChannel=vs.prototype.g,Tn.prototype.send=Tn.prototype.o,Tn.prototype.open=Tn.prototype.m,Tn.prototype.close=Tn.prototype.close,nv=function(){return new vs},tv=function(){return ps()},ev=ai,dh={mb:0,pb:1,qb:2,Jb:3,Ob:4,Lb:5,Mb:6,Kb:7,Ib:8,Nb:9,PROXY:10,NOPROXY:11,Gb:12,Cb:13,Db:14,Bb:15,Eb:16,Fb:17,ib:18,hb:19,jb:20},$.NO_ERROR=0,$.TIMEOUT=8,$.HTTP_ERROR=6,Kl=$,ae.COMPLETE="complete",Z_=ae,fl.EventType=fs,fs.OPEN="a",fs.CLOSE="b",fs.ERROR="c",fs.MESSAGE="d",Zt.prototype.listen=Zt.prototype.K,Aa=fl,L.prototype.listenOnce=L.prototype.L,L.prototype.getLastError=L.prototype.Ka,L.prototype.getLastErrorCode=L.prototype.Ba,L.prototype.getStatus=L.prototype.Z,L.prototype.getResponseJson=L.prototype.Oa,L.prototype.getResponseText=L.prototype.oa,L.prototype.send=L.prototype.ea,L.prototype.setWithCredentials=L.prototype.Ha,X_=L}).apply(typeof Nl<"u"?Nl:typeof self<"u"?self:typeof window<"u"?window:{});const zf="@firebase/firestore",jf="4.8.0";/**
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
 */class jn{constructor(e){this.uid=e}isAuthenticated(){return this.uid!=null}toKey(){return this.isAuthenticated()?"uid:"+this.uid:"anonymous-user"}isEqual(e){return e.uid===this.uid}}jn.UNAUTHENTICATED=new jn(null),jn.GOOGLE_CREDENTIALS=new jn("google-credentials-uid"),jn.FIRST_PARTY=new jn("first-party-uid"),jn.MOCK_USER=new jn("mock-user");/**
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
 */let Qo="11.10.0";/**
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
 */const Bs=new Lc("@firebase/firestore");function io(){return Bs.logLevel}function W(n,...e){if(Bs.logLevel<=Pe.DEBUG){const t=e.map(ld);Bs.debug(`Firestore (${Qo}): ${n}`,...t)}}function Ai(n,...e){if(Bs.logLevel<=Pe.ERROR){const t=e.map(ld);Bs.error(`Firestore (${Qo}): ${n}`,...t)}}function qs(n,...e){if(Bs.logLevel<=Pe.WARN){const t=e.map(ld);Bs.warn(`Firestore (${Qo}): ${n}`,...t)}}function ld(n){if(typeof n=="string")return n;try{/**
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
 */function ue(n,e,t){let r="Unexpected state";typeof e=="string"?r=e:t=e,rv(n,r,t)}function rv(n,e,t){let r=`FIRESTORE (${Qo}) INTERNAL ASSERTION FAILED: ${e} (ID: ${n.toString(16)})`;if(t!==void 0)try{r+=" CONTEXT: "+JSON.stringify(t)}catch{r+=" CONTEXT: "+t}throw Ai(r),new Error(r)}function Tt(n,e,t,r){let i="Unexpected state";typeof t=="string"?i=t:r=t,n||rv(e,i,r)}function xe(n,e){return n}/**
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
 */const F={OK:"ok",CANCELLED:"cancelled",UNKNOWN:"unknown",INVALID_ARGUMENT:"invalid-argument",DEADLINE_EXCEEDED:"deadline-exceeded",NOT_FOUND:"not-found",ALREADY_EXISTS:"already-exists",PERMISSION_DENIED:"permission-denied",UNAUTHENTICATED:"unauthenticated",RESOURCE_EXHAUSTED:"resource-exhausted",FAILED_PRECONDITION:"failed-precondition",ABORTED:"aborted",OUT_OF_RANGE:"out-of-range",UNIMPLEMENTED:"unimplemented",INTERNAL:"internal",UNAVAILABLE:"unavailable",DATA_LOSS:"data-loss"};class H extends ii{constructor(e,t){super(e,t),this.code=e,this.message=t,this.toString=()=>`${this.name}: [code=${this.code}]: ${this.message}`}}/**
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
 */class Vs{constructor(){this.promise=new Promise(((e,t)=>{this.resolve=e,this.reject=t}))}}/**
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
 */class jA{constructor(e,t){this.user=t,this.type="OAuth",this.headers=new Map,this.headers.set("Authorization",`Bearer ${e}`)}}class HA{getToken(){return Promise.resolve(null)}invalidateToken(){}start(e,t){e.enqueueRetryable((()=>t(jn.UNAUTHENTICATED)))}shutdown(){}}class WA{constructor(e){this.t=e,this.currentUser=jn.UNAUTHENTICATED,this.i=0,this.forceRefresh=!1,this.auth=null}start(e,t){Tt(this.o===void 0,42304);let r=this.i;const i=c=>this.i!==r?(r=this.i,t(c)):Promise.resolve();let s=new Vs;this.o=()=>{this.i++,this.currentUser=this.u(),s.resolve(),s=new Vs,e.enqueueRetryable((()=>i(this.currentUser)))};const a=()=>{const c=s;e.enqueueRetryable((async()=>{await c.promise,await i(this.currentUser)}))},l=c=>{W("FirebaseAuthCredentialsProvider","Auth detected"),this.auth=c,this.o&&(this.auth.addAuthTokenListener(this.o),a())};this.t.onInit((c=>l(c))),setTimeout((()=>{if(!this.auth){const c=this.t.getImmediate({optional:!0});c?l(c):(W("FirebaseAuthCredentialsProvider","Auth not yet detected"),s.resolve(),s=new Vs)}}),0),a()}getToken(){const e=this.i,t=this.forceRefresh;return this.forceRefresh=!1,this.auth?this.auth.getToken(t).then((r=>this.i!==e?(W("FirebaseAuthCredentialsProvider","getToken aborted due to token change."),this.getToken()):r?(Tt(typeof r.accessToken=="string",31837,{l:r}),new jA(r.accessToken,this.currentUser)):null)):Promise.resolve(null)}invalidateToken(){this.forceRefresh=!0}shutdown(){this.auth&&this.o&&this.auth.removeAuthTokenListener(this.o),this.o=void 0}u(){const e=this.auth&&this.auth.getUid();return Tt(e===null||typeof e=="string",2055,{h:e}),new jn(e)}}class GA{constructor(e,t,r){this.P=e,this.T=t,this.I=r,this.type="FirstParty",this.user=jn.FIRST_PARTY,this.A=new Map}R(){return this.I?this.I():null}get headers(){this.A.set("X-Goog-AuthUser",this.P);const e=this.R();return e&&this.A.set("Authorization",e),this.T&&this.A.set("X-Goog-Iam-Authorization-Token",this.T),this.A}}class KA{constructor(e,t,r){this.P=e,this.T=t,this.I=r}getToken(){return Promise.resolve(new GA(this.P,this.T,this.I))}start(e,t){e.enqueueRetryable((()=>t(jn.FIRST_PARTY)))}shutdown(){}invalidateToken(){}}class Hf{constructor(e){this.value=e,this.type="AppCheck",this.headers=new Map,e&&e.length>0&&this.headers.set("x-firebase-appcheck",this.value)}}class QA{constructor(e,t){this.V=t,this.forceRefresh=!1,this.appCheck=null,this.m=null,this.p=null,ir(e)&&e.settings.appCheckToken&&(this.p=e.settings.appCheckToken)}start(e,t){Tt(this.o===void 0,3512);const r=s=>{s.error!=null&&W("FirebaseAppCheckTokenProvider",`Error getting App Check token; using placeholder token instead. Error: ${s.error.message}`);const a=s.token!==this.m;return this.m=s.token,W("FirebaseAppCheckTokenProvider",`Received ${a?"new":"existing"} token.`),a?t(s.token):Promise.resolve()};this.o=s=>{e.enqueueRetryable((()=>r(s)))};const i=s=>{W("FirebaseAppCheckTokenProvider","AppCheck detected"),this.appCheck=s,this.o&&this.appCheck.addTokenListener(this.o)};this.V.onInit((s=>i(s))),setTimeout((()=>{if(!this.appCheck){const s=this.V.getImmediate({optional:!0});s?i(s):W("FirebaseAppCheckTokenProvider","AppCheck not yet detected")}}),0)}getToken(){if(this.p)return Promise.resolve(new Hf(this.p));const e=this.forceRefresh;return this.forceRefresh=!1,this.appCheck?this.appCheck.getToken(e).then((t=>t?(Tt(typeof t.token=="string",44558,{tokenResult:t}),this.m=t.token,new Hf(t.token)):null)):Promise.resolve(null)}invalidateToken(){this.forceRefresh=!0}shutdown(){this.appCheck&&this.o&&this.appCheck.removeTokenListener(this.o),this.o=void 0}}/**
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
 */function YA(n){const e=typeof self<"u"&&(self.crypto||self.msCrypto),t=new Uint8Array(n);if(e&&typeof e.getRandomValues=="function")e.getRandomValues(t);else for(let r=0;r<n;r++)t[r]=Math.floor(256*Math.random());return t}/**
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
 */function iv(){return new TextEncoder}/**
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
 */class sv{static newId(){const e="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",t=62*Math.floor(4.129032258064516);let r="";for(;r.length<20;){const i=YA(40);for(let s=0;s<i.length;++s)r.length<20&&i[s]<t&&(r+=e.charAt(i[s]%62))}return r}}function Te(n,e){return n<e?-1:n>e?1:0}function fh(n,e){let t=0;for(;t<n.length&&t<e.length;){const r=n.codePointAt(t),i=e.codePointAt(t);if(r!==i){if(r<128&&i<128)return Te(r,i);{const s=iv(),a=JA(s.encode(Wf(n,t)),s.encode(Wf(e,t)));return a!==0?a:Te(r,i)}}t+=r>65535?2:1}return Te(n.length,e.length)}function Wf(n,e){return n.codePointAt(e)>65535?n.substring(e,e+2):n.substring(e,e+1)}function JA(n,e){for(let t=0;t<n.length&&t<e.length;++t)if(n[t]!==e[t])return Te(n[t],e[t]);return Te(n.length,e.length)}function Vo(n,e,t){return n.length===e.length&&n.every(((r,i)=>t(r,e[i])))}/**
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
 */const Gf="__name__";class Fr{constructor(e,t,r){t===void 0?t=0:t>e.length&&ue(637,{offset:t,range:e.length}),r===void 0?r=e.length-t:r>e.length-t&&ue(1746,{length:r,range:e.length-t}),this.segments=e,this.offset=t,this.len=r}get length(){return this.len}isEqual(e){return Fr.comparator(this,e)===0}child(e){const t=this.segments.slice(this.offset,this.limit());return e instanceof Fr?e.forEach((r=>{t.push(r)})):t.push(e),this.construct(t)}limit(){return this.offset+this.length}popFirst(e){return e=e===void 0?1:e,this.construct(this.segments,this.offset+e,this.length-e)}popLast(){return this.construct(this.segments,this.offset,this.length-1)}firstSegment(){return this.segments[this.offset]}lastSegment(){return this.get(this.length-1)}get(e){return this.segments[this.offset+e]}isEmpty(){return this.length===0}isPrefixOf(e){if(e.length<this.length)return!1;for(let t=0;t<this.length;t++)if(this.get(t)!==e.get(t))return!1;return!0}isImmediateParentOf(e){if(this.length+1!==e.length)return!1;for(let t=0;t<this.length;t++)if(this.get(t)!==e.get(t))return!1;return!0}forEach(e){for(let t=this.offset,r=this.limit();t<r;t++)e(this.segments[t])}toArray(){return this.segments.slice(this.offset,this.limit())}static comparator(e,t){const r=Math.min(e.length,t.length);for(let i=0;i<r;i++){const s=Fr.compareSegments(e.get(i),t.get(i));if(s!==0)return s}return Te(e.length,t.length)}static compareSegments(e,t){const r=Fr.isNumericId(e),i=Fr.isNumericId(t);return r&&!i?-1:!r&&i?1:r&&i?Fr.extractNumericId(e).compare(Fr.extractNumericId(t)):fh(e,t)}static isNumericId(e){return e.startsWith("__id")&&e.endsWith("__")}static extractNumericId(e){return Ji.fromString(e.substring(4,e.length-2))}}class ut extends Fr{construct(e,t,r){return new ut(e,t,r)}canonicalString(){return this.toArray().join("/")}toString(){return this.canonicalString()}toUriEncodedString(){return this.toArray().map(encodeURIComponent).join("/")}static fromString(...e){const t=[];for(const r of e){if(r.indexOf("//")>=0)throw new H(F.INVALID_ARGUMENT,`Invalid segment (${r}). Paths must not contain // in them.`);t.push(...r.split("/").filter((i=>i.length>0)))}return new ut(t)}static emptyPath(){return new ut([])}}const XA=/^[_a-zA-Z][_a-zA-Z0-9]*$/;class Pn extends Fr{construct(e,t,r){return new Pn(e,t,r)}static isValidIdentifier(e){return XA.test(e)}canonicalString(){return this.toArray().map((e=>(e=e.replace(/\\/g,"\\\\").replace(/`/g,"\\`"),Pn.isValidIdentifier(e)||(e="`"+e+"`"),e))).join(".")}toString(){return this.canonicalString()}isKeyField(){return this.length===1&&this.get(0)===Gf}static keyField(){return new Pn([Gf])}static fromServerFormat(e){const t=[];let r="",i=0;const s=()=>{if(r.length===0)throw new H(F.INVALID_ARGUMENT,`Invalid field path (${e}). Paths must not be empty, begin with '.', end with '.', or contain '..'`);t.push(r),r=""};let a=!1;for(;i<e.length;){const l=e[i];if(l==="\\"){if(i+1===e.length)throw new H(F.INVALID_ARGUMENT,"Path has trailing escape character: "+e);const c=e[i+1];if(c!=="\\"&&c!=="."&&c!=="`")throw new H(F.INVALID_ARGUMENT,"Path has invalid escape sequence: "+e);r+=c,i+=2}else l==="`"?(a=!a,i++):l!=="."||a?(r+=l,i++):(s(),i++)}if(s(),a)throw new H(F.INVALID_ARGUMENT,"Unterminated ` in path: "+e);return new Pn(t)}static emptyPath(){return new Pn([])}}/**
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
 */class ie{constructor(e){this.path=e}static fromPath(e){return new ie(ut.fromString(e))}static fromName(e){return new ie(ut.fromString(e).popFirst(5))}static empty(){return new ie(ut.emptyPath())}get collectionGroup(){return this.path.popLast().lastSegment()}hasCollectionId(e){return this.path.length>=2&&this.path.get(this.path.length-2)===e}getCollectionGroup(){return this.path.get(this.path.length-2)}getCollectionPath(){return this.path.popLast()}isEqual(e){return e!==null&&ut.comparator(this.path,e.path)===0}toString(){return this.path.toString()}static comparator(e,t){return ut.comparator(e.path,t.path)}static isDocumentKey(e){return e.length%2==0}static fromSegments(e){return new ie(new ut(e.slice()))}}/**
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
 */function ZA(n,e,t){if(!t)throw new H(F.INVALID_ARGUMENT,`Function ${n}() cannot be called with an empty ${e}.`)}function eb(n,e,t,r){if(e===!0&&r===!0)throw new H(F.INVALID_ARGUMENT,`${n} and ${t} cannot be used together.`)}function Kf(n){if(ie.isDocumentKey(n))throw new H(F.INVALID_ARGUMENT,`Invalid collection reference. Collection references must have an odd number of segments, but ${n} has ${n.length}.`)}function ov(n){return typeof n=="object"&&n!==null&&(Object.getPrototypeOf(n)===Object.prototype||Object.getPrototypeOf(n)===null)}function jc(n){if(n===void 0)return"undefined";if(n===null)return"null";if(typeof n=="string")return n.length>20&&(n=`${n.substring(0,20)}...`),JSON.stringify(n);if(typeof n=="number"||typeof n=="boolean")return""+n;if(typeof n=="object"){if(n instanceof Array)return"an array";{const e=(function(r){return r.constructor?r.constructor.name:null})(n);return e?`a custom ${e} object`:"an object"}}return typeof n=="function"?"a function":ue(12329,{type:typeof n})}function Qf(n,e){if("_delegate"in n&&(n=n._delegate),!(n instanceof e)){if(e.name===n.constructor.name)throw new H(F.INVALID_ARGUMENT,"Type does not match the expected instance. Did you pass a reference from a different Firestore SDK?");{const t=jc(n);throw new H(F.INVALID_ARGUMENT,`Expected type '${e.name}', but it was: ${t}`)}}return n}function tb(n,e){if(e<=0)throw new H(F.INVALID_ARGUMENT,`Function ${n}() requires a positive number, but it was: ${e}.`)}/**
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
 */function Ht(n,e){const t={typeString:n};return e&&(t.value=e),t}function il(n,e){if(!ov(n))throw new H(F.INVALID_ARGUMENT,"JSON must be an object");let t;for(const r in e)if(e[r]){const i=e[r].typeString,s="value"in e[r]?{value:e[r].value}:void 0;if(!(r in n)){t=`JSON missing required field: '${r}'`;break}const a=n[r];if(i&&typeof a!==i){t=`JSON field '${r}' must be a ${i}.`;break}if(s!==void 0&&a!==s.value){t=`Expected '${r}' field to equal '${s.value}'`;break}}if(t)throw new H(F.INVALID_ARGUMENT,t);return!0}/**
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
 */const Yf=-62135596800,Jf=1e6;class _t{static now(){return _t.fromMillis(Date.now())}static fromDate(e){return _t.fromMillis(e.getTime())}static fromMillis(e){const t=Math.floor(e/1e3),r=Math.floor((e-1e3*t)*Jf);return new _t(t,r)}constructor(e,t){if(this.seconds=e,this.nanoseconds=t,t<0)throw new H(F.INVALID_ARGUMENT,"Timestamp nanoseconds out of range: "+t);if(t>=1e9)throw new H(F.INVALID_ARGUMENT,"Timestamp nanoseconds out of range: "+t);if(e<Yf)throw new H(F.INVALID_ARGUMENT,"Timestamp seconds out of range: "+e);if(e>=253402300800)throw new H(F.INVALID_ARGUMENT,"Timestamp seconds out of range: "+e)}toDate(){return new Date(this.toMillis())}toMillis(){return 1e3*this.seconds+this.nanoseconds/Jf}_compareTo(e){return this.seconds===e.seconds?Te(this.nanoseconds,e.nanoseconds):Te(this.seconds,e.seconds)}isEqual(e){return e.seconds===this.seconds&&e.nanoseconds===this.nanoseconds}toString(){return"Timestamp(seconds="+this.seconds+", nanoseconds="+this.nanoseconds+")"}toJSON(){return{type:_t._jsonSchemaVersion,seconds:this.seconds,nanoseconds:this.nanoseconds}}static fromJSON(e){if(il(e,_t._jsonSchema))return new _t(e.seconds,e.nanoseconds)}valueOf(){const e=this.seconds-Yf;return String(e).padStart(12,"0")+"."+String(this.nanoseconds).padStart(9,"0")}}_t._jsonSchemaVersion="firestore/timestamp/1.0",_t._jsonSchema={type:Ht("string",_t._jsonSchemaVersion),seconds:Ht("number"),nanoseconds:Ht("number")};/**
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
 */class ce{static fromTimestamp(e){return new ce(e)}static min(){return new ce(new _t(0,0))}static max(){return new ce(new _t(253402300799,999999999))}constructor(e){this.timestamp=e}compareTo(e){return this.timestamp._compareTo(e.timestamp)}isEqual(e){return this.timestamp.isEqual(e.timestamp)}toMicroseconds(){return 1e6*this.timestamp.seconds+this.timestamp.nanoseconds/1e3}toString(){return"SnapshotVersion("+this.timestamp.toString()+")"}toTimestamp(){return this.timestamp}}/**
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
 */const Ba=-1;function nb(n,e){const t=n.toTimestamp().seconds,r=n.toTimestamp().nanoseconds+1,i=ce.fromTimestamp(r===1e9?new _t(t+1,0):new _t(t,r));return new ns(i,ie.empty(),e)}function rb(n){return new ns(n.readTime,n.key,Ba)}class ns{constructor(e,t,r){this.readTime=e,this.documentKey=t,this.largestBatchId=r}static min(){return new ns(ce.min(),ie.empty(),Ba)}static max(){return new ns(ce.max(),ie.empty(),Ba)}}function ib(n,e){let t=n.readTime.compareTo(e.readTime);return t!==0?t:(t=ie.comparator(n.documentKey,e.documentKey),t!==0?t:Te(n.largestBatchId,e.largestBatchId))}/**
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
 */const sb="The current tab is not in the required state to perform this operation. It might be necessary to refresh the browser tab.";class ob{constructor(){this.onCommittedListeners=[]}addOnCommittedListener(e){this.onCommittedListeners.push(e)}raiseOnCommittedEvent(){this.onCommittedListeners.forEach((e=>e()))}}/**
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
 */async function Hc(n){if(n.code!==F.FAILED_PRECONDITION||n.message!==sb)throw n;W("LocalStore","Unexpectedly lost primary lease")}/**
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
 */class x{constructor(e){this.nextCallback=null,this.catchCallback=null,this.result=void 0,this.error=void 0,this.isDone=!1,this.callbackAttached=!1,e((t=>{this.isDone=!0,this.result=t,this.nextCallback&&this.nextCallback(t)}),(t=>{this.isDone=!0,this.error=t,this.catchCallback&&this.catchCallback(t)}))}catch(e){return this.next(void 0,e)}next(e,t){return this.callbackAttached&&ue(59440),this.callbackAttached=!0,this.isDone?this.error?this.wrapFailure(t,this.error):this.wrapSuccess(e,this.result):new x(((r,i)=>{this.nextCallback=s=>{this.wrapSuccess(e,s).next(r,i)},this.catchCallback=s=>{this.wrapFailure(t,s).next(r,i)}}))}toPromise(){return new Promise(((e,t)=>{this.next(e,t)}))}wrapUserFunction(e){try{const t=e();return t instanceof x?t:x.resolve(t)}catch(t){return x.reject(t)}}wrapSuccess(e,t){return e?this.wrapUserFunction((()=>e(t))):x.resolve(t)}wrapFailure(e,t){return e?this.wrapUserFunction((()=>e(t))):x.reject(t)}static resolve(e){return new x(((t,r)=>{t(e)}))}static reject(e){return new x(((t,r)=>{r(e)}))}static waitFor(e){return new x(((t,r)=>{let i=0,s=0,a=!1;e.forEach((l=>{++i,l.next((()=>{++s,a&&s===i&&t()}),(c=>r(c)))})),a=!0,s===i&&t()}))}static or(e){let t=x.resolve(!1);for(const r of e)t=t.next((i=>i?x.resolve(i):r()));return t}static forEach(e,t){const r=[];return e.forEach(((i,s)=>{r.push(t.call(this,i,s))})),this.waitFor(r)}static mapArray(e,t){return new x(((r,i)=>{const s=e.length,a=new Array(s);let l=0;for(let c=0;c<s;c++){const h=c;t(e[h]).next((f=>{a[h]=f,++l,l===s&&r(a)}),(f=>i(f)))}}))}static doWhile(e,t){return new x(((r,i)=>{const s=()=>{e()===!0?t().next((()=>{s()}),i):r()};s()}))}}function ab(n){const e=n.match(/Android ([\d.]+)/i),t=e?e[1].split(".").slice(0,2).join("."):"-1";return Number(t)}function Yo(n){return n.name==="IndexedDbTransactionError"}/**
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
 */class Wc{constructor(e,t){this.previousValue=e,t&&(t.sequenceNumberHandler=r=>this._e(r),this.ae=r=>t.writeSequenceNumber(r))}_e(e){return this.previousValue=Math.max(e,this.previousValue),this.previousValue}next(){const e=++this.previousValue;return this.ae&&this.ae(e),e}}Wc.ue=-1;/**
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
 */const lb=-1;function Gc(n){return n==null}function dc(n){return n===0&&1/n==-1/0}function cb(n){return typeof n=="number"&&Number.isInteger(n)&&!dc(n)&&n<=Number.MAX_SAFE_INTEGER&&n>=Number.MIN_SAFE_INTEGER}/**
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
 */const av="";function ub(n){let e="";for(let t=0;t<n.length;t++)e.length>0&&(e=Xf(e)),e=hb(n.get(t),e);return Xf(e)}function hb(n,e){let t=e;const r=n.length;for(let i=0;i<r;i++){const s=n.charAt(i);switch(s){case"\0":t+="";break;case av:t+="";break;default:t+=s}}return t}function Xf(n){return n+av+""}/**
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
 */function Zf(n){let e=0;for(const t in n)Object.prototype.hasOwnProperty.call(n,t)&&e++;return e}function Jo(n,e){for(const t in n)Object.prototype.hasOwnProperty.call(n,t)&&e(t,n[t])}function lv(n){for(const e in n)if(Object.prototype.hasOwnProperty.call(n,e))return!1;return!0}/**
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
 */class Lt{constructor(e,t){this.comparator=e,this.root=t||dn.EMPTY}insert(e,t){return new Lt(this.comparator,this.root.insert(e,t,this.comparator).copy(null,null,dn.BLACK,null,null))}remove(e){return new Lt(this.comparator,this.root.remove(e,this.comparator).copy(null,null,dn.BLACK,null,null))}get(e){let t=this.root;for(;!t.isEmpty();){const r=this.comparator(e,t.key);if(r===0)return t.value;r<0?t=t.left:r>0&&(t=t.right)}return null}indexOf(e){let t=0,r=this.root;for(;!r.isEmpty();){const i=this.comparator(e,r.key);if(i===0)return t+r.left.size;i<0?r=r.left:(t+=r.left.size+1,r=r.right)}return-1}isEmpty(){return this.root.isEmpty()}get size(){return this.root.size}minKey(){return this.root.minKey()}maxKey(){return this.root.maxKey()}inorderTraversal(e){return this.root.inorderTraversal(e)}forEach(e){this.inorderTraversal(((t,r)=>(e(t,r),!1)))}toString(){const e=[];return this.inorderTraversal(((t,r)=>(e.push(`${t}:${r}`),!1))),`{${e.join(", ")}}`}reverseTraversal(e){return this.root.reverseTraversal(e)}getIterator(){return new Ol(this.root,null,this.comparator,!1)}getIteratorFrom(e){return new Ol(this.root,e,this.comparator,!1)}getReverseIterator(){return new Ol(this.root,null,this.comparator,!0)}getReverseIteratorFrom(e){return new Ol(this.root,e,this.comparator,!0)}}class Ol{constructor(e,t,r,i){this.isReverse=i,this.nodeStack=[];let s=1;for(;!e.isEmpty();)if(s=t?r(e.key,t):1,t&&i&&(s*=-1),s<0)e=this.isReverse?e.left:e.right;else{if(s===0){this.nodeStack.push(e);break}this.nodeStack.push(e),e=this.isReverse?e.right:e.left}}getNext(){let e=this.nodeStack.pop();const t={key:e.key,value:e.value};if(this.isReverse)for(e=e.left;!e.isEmpty();)this.nodeStack.push(e),e=e.right;else for(e=e.right;!e.isEmpty();)this.nodeStack.push(e),e=e.left;return t}hasNext(){return this.nodeStack.length>0}peek(){if(this.nodeStack.length===0)return null;const e=this.nodeStack[this.nodeStack.length-1];return{key:e.key,value:e.value}}}class dn{constructor(e,t,r,i,s){this.key=e,this.value=t,this.color=r??dn.RED,this.left=i??dn.EMPTY,this.right=s??dn.EMPTY,this.size=this.left.size+1+this.right.size}copy(e,t,r,i,s){return new dn(e??this.key,t??this.value,r??this.color,i??this.left,s??this.right)}isEmpty(){return!1}inorderTraversal(e){return this.left.inorderTraversal(e)||e(this.key,this.value)||this.right.inorderTraversal(e)}reverseTraversal(e){return this.right.reverseTraversal(e)||e(this.key,this.value)||this.left.reverseTraversal(e)}min(){return this.left.isEmpty()?this:this.left.min()}minKey(){return this.min().key}maxKey(){return this.right.isEmpty()?this.key:this.right.maxKey()}insert(e,t,r){let i=this;const s=r(e,i.key);return i=s<0?i.copy(null,null,null,i.left.insert(e,t,r),null):s===0?i.copy(null,t,null,null,null):i.copy(null,null,null,null,i.right.insert(e,t,r)),i.fixUp()}removeMin(){if(this.left.isEmpty())return dn.EMPTY;let e=this;return e.left.isRed()||e.left.left.isRed()||(e=e.moveRedLeft()),e=e.copy(null,null,null,e.left.removeMin(),null),e.fixUp()}remove(e,t){let r,i=this;if(t(e,i.key)<0)i.left.isEmpty()||i.left.isRed()||i.left.left.isRed()||(i=i.moveRedLeft()),i=i.copy(null,null,null,i.left.remove(e,t),null);else{if(i.left.isRed()&&(i=i.rotateRight()),i.right.isEmpty()||i.right.isRed()||i.right.left.isRed()||(i=i.moveRedRight()),t(e,i.key)===0){if(i.right.isEmpty())return dn.EMPTY;r=i.right.min(),i=i.copy(r.key,r.value,null,null,i.right.removeMin())}i=i.copy(null,null,null,null,i.right.remove(e,t))}return i.fixUp()}isRed(){return this.color}fixUp(){let e=this;return e.right.isRed()&&!e.left.isRed()&&(e=e.rotateLeft()),e.left.isRed()&&e.left.left.isRed()&&(e=e.rotateRight()),e.left.isRed()&&e.right.isRed()&&(e=e.colorFlip()),e}moveRedLeft(){let e=this.colorFlip();return e.right.left.isRed()&&(e=e.copy(null,null,null,null,e.right.rotateRight()),e=e.rotateLeft(),e=e.colorFlip()),e}moveRedRight(){let e=this.colorFlip();return e.left.left.isRed()&&(e=e.rotateRight(),e=e.colorFlip()),e}rotateLeft(){const e=this.copy(null,null,dn.RED,null,this.right.left);return this.right.copy(null,null,this.color,e,null)}rotateRight(){const e=this.copy(null,null,dn.RED,this.left.right,null);return this.left.copy(null,null,this.color,null,e)}colorFlip(){const e=this.left.copy(null,null,!this.left.color,null,null),t=this.right.copy(null,null,!this.right.color,null,null);return this.copy(null,null,!this.color,e,t)}checkMaxDepth(){const e=this.check();return Math.pow(2,e)<=this.size+1}check(){if(this.isRed()&&this.left.isRed())throw ue(43730,{key:this.key,value:this.value});if(this.right.isRed())throw ue(14113,{key:this.key,value:this.value});const e=this.left.check();if(e!==this.right.check())throw ue(27949);return e+(this.isRed()?0:1)}}dn.EMPTY=null,dn.RED=!0,dn.BLACK=!1;dn.EMPTY=new class{constructor(){this.size=0}get key(){throw ue(57766)}get value(){throw ue(16141)}get color(){throw ue(16727)}get left(){throw ue(29726)}get right(){throw ue(36894)}copy(e,t,r,i,s){return this}insert(e,t,r){return new dn(e,t)}remove(e,t){return this}isEmpty(){return!0}inorderTraversal(e){return!1}reverseTraversal(e){return!1}minKey(){return null}maxKey(){return null}isRed(){return!1}checkMaxDepth(){return!0}check(){return 0}};/**
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
 */class Jt{constructor(e){this.comparator=e,this.data=new Lt(this.comparator)}has(e){return this.data.get(e)!==null}first(){return this.data.minKey()}last(){return this.data.maxKey()}get size(){return this.data.size}indexOf(e){return this.data.indexOf(e)}forEach(e){this.data.inorderTraversal(((t,r)=>(e(t),!1)))}forEachInRange(e,t){const r=this.data.getIteratorFrom(e[0]);for(;r.hasNext();){const i=r.getNext();if(this.comparator(i.key,e[1])>=0)return;t(i.key)}}forEachWhile(e,t){let r;for(r=t!==void 0?this.data.getIteratorFrom(t):this.data.getIterator();r.hasNext();)if(!e(r.getNext().key))return}firstAfterOrEqual(e){const t=this.data.getIteratorFrom(e);return t.hasNext()?t.getNext().key:null}getIterator(){return new ep(this.data.getIterator())}getIteratorFrom(e){return new ep(this.data.getIteratorFrom(e))}add(e){return this.copy(this.data.remove(e).insert(e,!0))}delete(e){return this.has(e)?this.copy(this.data.remove(e)):this}isEmpty(){return this.data.isEmpty()}unionWith(e){let t=this;return t.size<e.size&&(t=e,e=this),e.forEach((r=>{t=t.add(r)})),t}isEqual(e){if(!(e instanceof Jt)||this.size!==e.size)return!1;const t=this.data.getIterator(),r=e.data.getIterator();for(;t.hasNext();){const i=t.getNext().key,s=r.getNext().key;if(this.comparator(i,s)!==0)return!1}return!0}toArray(){const e=[];return this.forEach((t=>{e.push(t)})),e}toString(){const e=[];return this.forEach((t=>e.push(t))),"SortedSet("+e.toString()+")"}copy(e){const t=new Jt(this.comparator);return t.data=e,t}}class ep{constructor(e){this.iter=e}getNext(){return this.iter.getNext().key}hasNext(){return this.iter.hasNext()}}/**
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
 */class Hi{constructor(e){this.fields=e,e.sort(Pn.comparator)}static empty(){return new Hi([])}unionWith(e){let t=new Jt(Pn.comparator);for(const r of this.fields)t=t.add(r);for(const r of e)t=t.add(r);return new Hi(t.toArray())}covers(e){for(const t of this.fields)if(t.isPrefixOf(e))return!0;return!1}isEqual(e){return Vo(this.fields,e.fields,((t,r)=>t.isEqual(r)))}}/**
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
 */class cv extends Error{constructor(){super(...arguments),this.name="Base64DecodeError"}}/**
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
 */class gn{constructor(e){this.binaryString=e}static fromBase64String(e){const t=(function(i){try{return atob(i)}catch(s){throw typeof DOMException<"u"&&s instanceof DOMException?new cv("Invalid base64 string: "+s):s}})(e);return new gn(t)}static fromUint8Array(e){const t=(function(i){let s="";for(let a=0;a<i.length;++a)s+=String.fromCharCode(i[a]);return s})(e);return new gn(t)}[Symbol.iterator](){let e=0;return{next:()=>e<this.binaryString.length?{value:this.binaryString.charCodeAt(e++),done:!1}:{value:void 0,done:!0}}}toBase64(){return(function(t){return btoa(t)})(this.binaryString)}toUint8Array(){return(function(t){const r=new Uint8Array(t.length);for(let i=0;i<t.length;i++)r[i]=t.charCodeAt(i);return r})(this.binaryString)}approximateByteSize(){return 2*this.binaryString.length}compareTo(e){return Te(this.binaryString,e.binaryString)}isEqual(e){return this.binaryString===e.binaryString}}gn.EMPTY_BYTE_STRING=new gn("");const db=new RegExp(/^\d{4}-\d\d-\d\dT\d\d:\d\d:\d\d(?:\.(\d+))?Z$/);function rs(n){if(Tt(!!n,39018),typeof n=="string"){let e=0;const t=db.exec(n);if(Tt(!!t,46558,{timestamp:n}),t[1]){let i=t[1];i=(i+"000000000").substr(0,9),e=Number(i)}const r=new Date(n);return{seconds:Math.floor(r.getTime()/1e3),nanos:e}}return{seconds:Mt(n.seconds),nanos:Mt(n.nanos)}}function Mt(n){return typeof n=="number"?n:typeof n=="string"?Number(n):0}function is(n){return typeof n=="string"?gn.fromBase64String(n):gn.fromUint8Array(n)}/**
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
 */const uv="server_timestamp",hv="__type__",dv="__previous_value__",fv="__local_write_time__";function Kc(n){var e,t;return((t=(((e=n==null?void 0:n.mapValue)===null||e===void 0?void 0:e.fields)||{})[hv])===null||t===void 0?void 0:t.stringValue)===uv}function Qc(n){const e=n.mapValue.fields[dv];return Kc(e)?Qc(e):e}function qa(n){const e=rs(n.mapValue.fields[fv].timestampValue);return new _t(e.seconds,e.nanos)}/**
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
 */class fb{constructor(e,t,r,i,s,a,l,c,h,f){this.databaseId=e,this.appId=t,this.persistenceKey=r,this.host=i,this.ssl=s,this.forceLongPolling=a,this.autoDetectLongPolling=l,this.longPollingOptions=c,this.useFetchStreams=h,this.isUsingEmulator=f}}const fc="(default)";class za{constructor(e,t){this.projectId=e,this.database=t||fc}static empty(){return new za("","")}get isDefaultDatabase(){return this.database===fc}isEqual(e){return e instanceof za&&e.projectId===this.projectId&&e.database===this.database}}/**
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
 */const pv="__type__",pb="__max__",Dl={mapValue:{}},mv="__vector__",pc="value";function ss(n){return"nullValue"in n?0:"booleanValue"in n?1:"integerValue"in n||"doubleValue"in n?2:"timestampValue"in n?3:"stringValue"in n?5:"bytesValue"in n?6:"referenceValue"in n?7:"geoPointValue"in n?8:"arrayValue"in n?9:"mapValue"in n?Kc(n)?4:gb(n)?9007199254740991:mb(n)?10:11:ue(28295,{value:n})}function ni(n,e){if(n===e)return!0;const t=ss(n);if(t!==ss(e))return!1;switch(t){case 0:case 9007199254740991:return!0;case 1:return n.booleanValue===e.booleanValue;case 4:return qa(n).isEqual(qa(e));case 3:return(function(i,s){if(typeof i.timestampValue=="string"&&typeof s.timestampValue=="string"&&i.timestampValue.length===s.timestampValue.length)return i.timestampValue===s.timestampValue;const a=rs(i.timestampValue),l=rs(s.timestampValue);return a.seconds===l.seconds&&a.nanos===l.nanos})(n,e);case 5:return n.stringValue===e.stringValue;case 6:return(function(i,s){return is(i.bytesValue).isEqual(is(s.bytesValue))})(n,e);case 7:return n.referenceValue===e.referenceValue;case 8:return(function(i,s){return Mt(i.geoPointValue.latitude)===Mt(s.geoPointValue.latitude)&&Mt(i.geoPointValue.longitude)===Mt(s.geoPointValue.longitude)})(n,e);case 2:return(function(i,s){if("integerValue"in i&&"integerValue"in s)return Mt(i.integerValue)===Mt(s.integerValue);if("doubleValue"in i&&"doubleValue"in s){const a=Mt(i.doubleValue),l=Mt(s.doubleValue);return a===l?dc(a)===dc(l):isNaN(a)&&isNaN(l)}return!1})(n,e);case 9:return Vo(n.arrayValue.values||[],e.arrayValue.values||[],ni);case 10:case 11:return(function(i,s){const a=i.mapValue.fields||{},l=s.mapValue.fields||{};if(Zf(a)!==Zf(l))return!1;for(const c in a)if(a.hasOwnProperty(c)&&(l[c]===void 0||!ni(a[c],l[c])))return!1;return!0})(n,e);default:return ue(52216,{left:n})}}function ja(n,e){return(n.values||[]).find((t=>ni(t,e)))!==void 0}function Mo(n,e){if(n===e)return 0;const t=ss(n),r=ss(e);if(t!==r)return Te(t,r);switch(t){case 0:case 9007199254740991:return 0;case 1:return Te(n.booleanValue,e.booleanValue);case 2:return(function(s,a){const l=Mt(s.integerValue||s.doubleValue),c=Mt(a.integerValue||a.doubleValue);return l<c?-1:l>c?1:l===c?0:isNaN(l)?isNaN(c)?0:-1:1})(n,e);case 3:return tp(n.timestampValue,e.timestampValue);case 4:return tp(qa(n),qa(e));case 5:return fh(n.stringValue,e.stringValue);case 6:return(function(s,a){const l=is(s),c=is(a);return l.compareTo(c)})(n.bytesValue,e.bytesValue);case 7:return(function(s,a){const l=s.split("/"),c=a.split("/");for(let h=0;h<l.length&&h<c.length;h++){const f=Te(l[h],c[h]);if(f!==0)return f}return Te(l.length,c.length)})(n.referenceValue,e.referenceValue);case 8:return(function(s,a){const l=Te(Mt(s.latitude),Mt(a.latitude));return l!==0?l:Te(Mt(s.longitude),Mt(a.longitude))})(n.geoPointValue,e.geoPointValue);case 9:return np(n.arrayValue,e.arrayValue);case 10:return(function(s,a){var l,c,h,f;const g=s.fields||{},_=a.fields||{},E=(l=g[pc])===null||l===void 0?void 0:l.arrayValue,R=(c=_[pc])===null||c===void 0?void 0:c.arrayValue,N=Te(((h=E==null?void 0:E.values)===null||h===void 0?void 0:h.length)||0,((f=R==null?void 0:R.values)===null||f===void 0?void 0:f.length)||0);return N!==0?N:np(E,R)})(n.mapValue,e.mapValue);case 11:return(function(s,a){if(s===Dl.mapValue&&a===Dl.mapValue)return 0;if(s===Dl.mapValue)return 1;if(a===Dl.mapValue)return-1;const l=s.fields||{},c=Object.keys(l),h=a.fields||{},f=Object.keys(h);c.sort(),f.sort();for(let g=0;g<c.length&&g<f.length;++g){const _=fh(c[g],f[g]);if(_!==0)return _;const E=Mo(l[c[g]],h[f[g]]);if(E!==0)return E}return Te(c.length,f.length)})(n.mapValue,e.mapValue);default:throw ue(23264,{le:t})}}function tp(n,e){if(typeof n=="string"&&typeof e=="string"&&n.length===e.length)return Te(n,e);const t=rs(n),r=rs(e),i=Te(t.seconds,r.seconds);return i!==0?i:Te(t.nanos,r.nanos)}function np(n,e){const t=n.values||[],r=e.values||[];for(let i=0;i<t.length&&i<r.length;++i){const s=Mo(t[i],r[i]);if(s)return s}return Te(t.length,r.length)}function xo(n){return ph(n)}function ph(n){return"nullValue"in n?"null":"booleanValue"in n?""+n.booleanValue:"integerValue"in n?""+n.integerValue:"doubleValue"in n?""+n.doubleValue:"timestampValue"in n?(function(t){const r=rs(t);return`time(${r.seconds},${r.nanos})`})(n.timestampValue):"stringValue"in n?n.stringValue:"bytesValue"in n?(function(t){return is(t).toBase64()})(n.bytesValue):"referenceValue"in n?(function(t){return ie.fromName(t).toString()})(n.referenceValue):"geoPointValue"in n?(function(t){return`geo(${t.latitude},${t.longitude})`})(n.geoPointValue):"arrayValue"in n?(function(t){let r="[",i=!0;for(const s of t.values||[])i?i=!1:r+=",",r+=ph(s);return r+"]"})(n.arrayValue):"mapValue"in n?(function(t){const r=Object.keys(t.fields||{}).sort();let i="{",s=!0;for(const a of r)s?s=!1:i+=",",i+=`${a}:${ph(t.fields[a])}`;return i+"}"})(n.mapValue):ue(61005,{value:n})}function Ql(n){switch(ss(n)){case 0:case 1:return 4;case 2:return 8;case 3:case 8:return 16;case 4:const e=Qc(n);return e?16+Ql(e):16;case 5:return 2*n.stringValue.length;case 6:return is(n.bytesValue).approximateByteSize();case 7:return n.referenceValue.length;case 9:return(function(r){return(r.values||[]).reduce(((i,s)=>i+Ql(s)),0)})(n.arrayValue);case 10:case 11:return(function(r){let i=0;return Jo(r.fields,((s,a)=>{i+=s.length+Ql(a)})),i})(n.mapValue);default:throw ue(13486,{value:n})}}function mc(n,e){return{referenceValue:`projects/${n.projectId}/databases/${n.database}/documents/${e.path.canonicalString()}`}}function mh(n){return!!n&&"integerValue"in n}function cd(n){return!!n&&"arrayValue"in n}function rp(n){return!!n&&"nullValue"in n}function ip(n){return!!n&&"doubleValue"in n&&isNaN(Number(n.doubleValue))}function Du(n){return!!n&&"mapValue"in n}function mb(n){var e,t;return((t=(((e=n==null?void 0:n.mapValue)===null||e===void 0?void 0:e.fields)||{})[pv])===null||t===void 0?void 0:t.stringValue)===mv}function Da(n){if(n.geoPointValue)return{geoPointValue:Object.assign({},n.geoPointValue)};if(n.timestampValue&&typeof n.timestampValue=="object")return{timestampValue:Object.assign({},n.timestampValue)};if(n.mapValue){const e={mapValue:{fields:{}}};return Jo(n.mapValue.fields,((t,r)=>e.mapValue.fields[t]=Da(r))),e}if(n.arrayValue){const e={arrayValue:{values:[]}};for(let t=0;t<(n.arrayValue.values||[]).length;++t)e.arrayValue.values[t]=Da(n.arrayValue.values[t]);return e}return Object.assign({},n)}function gb(n){return(((n.mapValue||{}).fields||{}).__type__||{}).stringValue===pb}/**
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
 */class jr{constructor(e){this.value=e}static empty(){return new jr({mapValue:{}})}field(e){if(e.isEmpty())return this.value;{let t=this.value;for(let r=0;r<e.length-1;++r)if(t=(t.mapValue.fields||{})[e.get(r)],!Du(t))return null;return t=(t.mapValue.fields||{})[e.lastSegment()],t||null}}set(e,t){this.getFieldsMap(e.popLast())[e.lastSegment()]=Da(t)}setAll(e){let t=Pn.emptyPath(),r={},i=[];e.forEach(((a,l)=>{if(!t.isImmediateParentOf(l)){const c=this.getFieldsMap(t);this.applyChanges(c,r,i),r={},i=[],t=l.popLast()}a?r[l.lastSegment()]=Da(a):i.push(l.lastSegment())}));const s=this.getFieldsMap(t);this.applyChanges(s,r,i)}delete(e){const t=this.field(e.popLast());Du(t)&&t.mapValue.fields&&delete t.mapValue.fields[e.lastSegment()]}isEqual(e){return ni(this.value,e.value)}getFieldsMap(e){let t=this.value;t.mapValue.fields||(t.mapValue={fields:{}});for(let r=0;r<e.length;++r){let i=t.mapValue.fields[e.get(r)];Du(i)&&i.mapValue.fields||(i={mapValue:{fields:{}}},t.mapValue.fields[e.get(r)]=i),t=i}return t.mapValue.fields}applyChanges(e,t,r){Jo(t,((i,s)=>e[i]=s));for(const i of r)delete e[i]}clone(){return new jr(Da(this.value))}}/**
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
 */class Cn{constructor(e,t,r,i,s,a,l){this.key=e,this.documentType=t,this.version=r,this.readTime=i,this.createTime=s,this.data=a,this.documentState=l}static newInvalidDocument(e){return new Cn(e,0,ce.min(),ce.min(),ce.min(),jr.empty(),0)}static newFoundDocument(e,t,r,i){return new Cn(e,1,t,ce.min(),r,i,0)}static newNoDocument(e,t){return new Cn(e,2,t,ce.min(),ce.min(),jr.empty(),0)}static newUnknownDocument(e,t){return new Cn(e,3,t,ce.min(),ce.min(),jr.empty(),2)}convertToFoundDocument(e,t){return!this.createTime.isEqual(ce.min())||this.documentType!==2&&this.documentType!==0||(this.createTime=e),this.version=e,this.documentType=1,this.data=t,this.documentState=0,this}convertToNoDocument(e){return this.version=e,this.documentType=2,this.data=jr.empty(),this.documentState=0,this}convertToUnknownDocument(e){return this.version=e,this.documentType=3,this.data=jr.empty(),this.documentState=2,this}setHasCommittedMutations(){return this.documentState=2,this}setHasLocalMutations(){return this.documentState=1,this.version=ce.min(),this}setReadTime(e){return this.readTime=e,this}get hasLocalMutations(){return this.documentState===1}get hasCommittedMutations(){return this.documentState===2}get hasPendingWrites(){return this.hasLocalMutations||this.hasCommittedMutations}isValidDocument(){return this.documentType!==0}isFoundDocument(){return this.documentType===1}isNoDocument(){return this.documentType===2}isUnknownDocument(){return this.documentType===3}isEqual(e){return e instanceof Cn&&this.key.isEqual(e.key)&&this.version.isEqual(e.version)&&this.documentType===e.documentType&&this.documentState===e.documentState&&this.data.isEqual(e.data)}mutableCopy(){return new Cn(this.key,this.documentType,this.version,this.readTime,this.createTime,this.data.clone(),this.documentState)}toString(){return`Document(${this.key}, ${this.version}, ${JSON.stringify(this.data.value)}, {createTime: ${this.createTime}}), {documentType: ${this.documentType}}), {documentState: ${this.documentState}})`}}/**
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
 */class Lo{constructor(e,t){this.position=e,this.inclusive=t}}function sp(n,e,t){let r=0;for(let i=0;i<n.position.length;i++){const s=e[i],a=n.position[i];if(s.field.isKeyField()?r=ie.comparator(ie.fromName(a.referenceValue),t.key):r=Mo(a,t.data.field(s.field)),s.dir==="desc"&&(r*=-1),r!==0)break}return r}function op(n,e){if(n===null)return e===null;if(e===null||n.inclusive!==e.inclusive||n.position.length!==e.position.length)return!1;for(let t=0;t<n.position.length;t++)if(!ni(n.position[t],e.position[t]))return!1;return!0}/**
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
 */class Ha{constructor(e,t="asc"){this.field=e,this.dir=t}}function _b(n,e){return n.dir===e.dir&&n.field.isEqual(e.field)}/**
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
 */class gv{}class jt extends gv{constructor(e,t,r){super(),this.field=e,this.op=t,this.value=r}static create(e,t,r){return e.isKeyField()?t==="in"||t==="not-in"?this.createKeyFieldInFilter(e,t,r):new yb(e,t,r):t==="array-contains"?new Tb(e,r):t==="in"?new Ib(e,r):t==="not-in"?new Ab(e,r):t==="array-contains-any"?new bb(e,r):new jt(e,t,r)}static createKeyFieldInFilter(e,t,r){return t==="in"?new Eb(e,r):new wb(e,r)}matches(e){const t=e.data.field(this.field);return this.op==="!="?t!==null&&t.nullValue===void 0&&this.matchesComparison(Mo(t,this.value)):t!==null&&ss(this.value)===ss(t)&&this.matchesComparison(Mo(t,this.value))}matchesComparison(e){switch(this.op){case"<":return e<0;case"<=":return e<=0;case"==":return e===0;case"!=":return e!==0;case">":return e>0;case">=":return e>=0;default:return ue(47266,{operator:this.op})}}isInequality(){return["<","<=",">",">=","!=","not-in"].indexOf(this.op)>=0}getFlattenedFilters(){return[this]}getFilters(){return[this]}}class Dr extends gv{constructor(e,t){super(),this.filters=e,this.op=t,this.he=null}static create(e,t){return new Dr(e,t)}matches(e){return _v(this)?this.filters.find((t=>!t.matches(e)))===void 0:this.filters.find((t=>t.matches(e)))!==void 0}getFlattenedFilters(){return this.he!==null||(this.he=this.filters.reduce(((e,t)=>e.concat(t.getFlattenedFilters())),[])),this.he}getFilters(){return Object.assign([],this.filters)}}function _v(n){return n.op==="and"}function vv(n){return vb(n)&&_v(n)}function vb(n){for(const e of n.filters)if(e instanceof Dr)return!1;return!0}function gh(n){if(n instanceof jt)return n.field.canonicalString()+n.op.toString()+xo(n.value);if(vv(n))return n.filters.map((e=>gh(e))).join(",");{const e=n.filters.map((t=>gh(t))).join(",");return`${n.op}(${e})`}}function yv(n,e){return n instanceof jt?(function(r,i){return i instanceof jt&&r.op===i.op&&r.field.isEqual(i.field)&&ni(r.value,i.value)})(n,e):n instanceof Dr?(function(r,i){return i instanceof Dr&&r.op===i.op&&r.filters.length===i.filters.length?r.filters.reduce(((s,a,l)=>s&&yv(a,i.filters[l])),!0):!1})(n,e):void ue(19439)}function Ev(n){return n instanceof jt?(function(t){return`${t.field.canonicalString()} ${t.op} ${xo(t.value)}`})(n):n instanceof Dr?(function(t){return t.op.toString()+" {"+t.getFilters().map(Ev).join(" ,")+"}"})(n):"Filter"}class yb extends jt{constructor(e,t,r){super(e,t,r),this.key=ie.fromName(r.referenceValue)}matches(e){const t=ie.comparator(e.key,this.key);return this.matchesComparison(t)}}class Eb extends jt{constructor(e,t){super(e,"in",t),this.keys=wv("in",t)}matches(e){return this.keys.some((t=>t.isEqual(e.key)))}}class wb extends jt{constructor(e,t){super(e,"not-in",t),this.keys=wv("not-in",t)}matches(e){return!this.keys.some((t=>t.isEqual(e.key)))}}function wv(n,e){var t;return(((t=e.arrayValue)===null||t===void 0?void 0:t.values)||[]).map((r=>ie.fromName(r.referenceValue)))}class Tb extends jt{constructor(e,t){super(e,"array-contains",t)}matches(e){const t=e.data.field(this.field);return cd(t)&&ja(t.arrayValue,this.value)}}class Ib extends jt{constructor(e,t){super(e,"in",t)}matches(e){const t=e.data.field(this.field);return t!==null&&ja(this.value.arrayValue,t)}}class Ab extends jt{constructor(e,t){super(e,"not-in",t)}matches(e){if(ja(this.value.arrayValue,{nullValue:"NULL_VALUE"}))return!1;const t=e.data.field(this.field);return t!==null&&t.nullValue===void 0&&!ja(this.value.arrayValue,t)}}class bb extends jt{constructor(e,t){super(e,"array-contains-any",t)}matches(e){const t=e.data.field(this.field);return!(!cd(t)||!t.arrayValue.values)&&t.arrayValue.values.some((r=>ja(this.value.arrayValue,r)))}}/**
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
 */class Sb{constructor(e,t=null,r=[],i=[],s=null,a=null,l=null){this.path=e,this.collectionGroup=t,this.orderBy=r,this.filters=i,this.limit=s,this.startAt=a,this.endAt=l,this.Pe=null}}function ap(n,e=null,t=[],r=[],i=null,s=null,a=null){return new Sb(n,e,t,r,i,s,a)}function ud(n){const e=xe(n);if(e.Pe===null){let t=e.path.canonicalString();e.collectionGroup!==null&&(t+="|cg:"+e.collectionGroup),t+="|f:",t+=e.filters.map((r=>gh(r))).join(","),t+="|ob:",t+=e.orderBy.map((r=>(function(s){return s.field.canonicalString()+s.dir})(r))).join(","),Gc(e.limit)||(t+="|l:",t+=e.limit),e.startAt&&(t+="|lb:",t+=e.startAt.inclusive?"b:":"a:",t+=e.startAt.position.map((r=>xo(r))).join(",")),e.endAt&&(t+="|ub:",t+=e.endAt.inclusive?"a:":"b:",t+=e.endAt.position.map((r=>xo(r))).join(",")),e.Pe=t}return e.Pe}function hd(n,e){if(n.limit!==e.limit||n.orderBy.length!==e.orderBy.length)return!1;for(let t=0;t<n.orderBy.length;t++)if(!_b(n.orderBy[t],e.orderBy[t]))return!1;if(n.filters.length!==e.filters.length)return!1;for(let t=0;t<n.filters.length;t++)if(!yv(n.filters[t],e.filters[t]))return!1;return n.collectionGroup===e.collectionGroup&&!!n.path.isEqual(e.path)&&!!op(n.startAt,e.startAt)&&op(n.endAt,e.endAt)}function _h(n){return ie.isDocumentKey(n.path)&&n.collectionGroup===null&&n.filters.length===0}/**
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
 */class Hs{constructor(e,t=null,r=[],i=[],s=null,a="F",l=null,c=null){this.path=e,this.collectionGroup=t,this.explicitOrderBy=r,this.filters=i,this.limit=s,this.limitType=a,this.startAt=l,this.endAt=c,this.Te=null,this.Ie=null,this.de=null,this.startAt,this.endAt}}function Rb(n,e,t,r,i,s,a,l){return new Hs(n,e,t,r,i,s,a,l)}function Tv(n){return new Hs(n)}function lp(n){return n.filters.length===0&&n.limit===null&&n.startAt==null&&n.endAt==null&&(n.explicitOrderBy.length===0||n.explicitOrderBy.length===1&&n.explicitOrderBy[0].field.isKeyField())}function dd(n){return n.collectionGroup!==null}function go(n){const e=xe(n);if(e.Te===null){e.Te=[];const t=new Set;for(const s of e.explicitOrderBy)e.Te.push(s),t.add(s.field.canonicalString());const r=e.explicitOrderBy.length>0?e.explicitOrderBy[e.explicitOrderBy.length-1].dir:"asc";(function(a){let l=new Jt(Pn.comparator);return a.filters.forEach((c=>{c.getFlattenedFilters().forEach((h=>{h.isInequality()&&(l=l.add(h.field))}))})),l})(e).forEach((s=>{t.has(s.canonicalString())||s.isKeyField()||e.Te.push(new Ha(s,r))})),t.has(Pn.keyField().canonicalString())||e.Te.push(new Ha(Pn.keyField(),r))}return e.Te}function Jr(n){const e=xe(n);return e.Ie||(e.Ie=Cb(e,go(n))),e.Ie}function Cb(n,e){if(n.limitType==="F")return ap(n.path,n.collectionGroup,e,n.filters,n.limit,n.startAt,n.endAt);{e=e.map((i=>{const s=i.dir==="desc"?"asc":"desc";return new Ha(i.field,s)}));const t=n.endAt?new Lo(n.endAt.position,n.endAt.inclusive):null,r=n.startAt?new Lo(n.startAt.position,n.startAt.inclusive):null;return ap(n.path,n.collectionGroup,e,n.filters,n.limit,t,r)}}function vh(n,e){const t=n.filters.concat([e]);return new Hs(n.path,n.collectionGroup,n.explicitOrderBy.slice(),t,n.limit,n.limitType,n.startAt,n.endAt)}function gc(n,e,t){return new Hs(n.path,n.collectionGroup,n.explicitOrderBy.slice(),n.filters.slice(),e,t,n.startAt,n.endAt)}function Yc(n,e){return hd(Jr(n),Jr(e))&&n.limitType===e.limitType}function Iv(n){return`${ud(Jr(n))}|lt:${n.limitType}`}function so(n){return`Query(target=${(function(t){let r=t.path.canonicalString();return t.collectionGroup!==null&&(r+=" collectionGroup="+t.collectionGroup),t.filters.length>0&&(r+=`, filters: [${t.filters.map((i=>Ev(i))).join(", ")}]`),Gc(t.limit)||(r+=", limit: "+t.limit),t.orderBy.length>0&&(r+=`, orderBy: [${t.orderBy.map((i=>(function(a){return`${a.field.canonicalString()} (${a.dir})`})(i))).join(", ")}]`),t.startAt&&(r+=", startAt: ",r+=t.startAt.inclusive?"b:":"a:",r+=t.startAt.position.map((i=>xo(i))).join(",")),t.endAt&&(r+=", endAt: ",r+=t.endAt.inclusive?"a:":"b:",r+=t.endAt.position.map((i=>xo(i))).join(",")),`Target(${r})`})(Jr(n))}; limitType=${n.limitType})`}function Jc(n,e){return e.isFoundDocument()&&(function(r,i){const s=i.key.path;return r.collectionGroup!==null?i.key.hasCollectionId(r.collectionGroup)&&r.path.isPrefixOf(s):ie.isDocumentKey(r.path)?r.path.isEqual(s):r.path.isImmediateParentOf(s)})(n,e)&&(function(r,i){for(const s of go(r))if(!s.field.isKeyField()&&i.data.field(s.field)===null)return!1;return!0})(n,e)&&(function(r,i){for(const s of r.filters)if(!s.matches(i))return!1;return!0})(n,e)&&(function(r,i){return!(r.startAt&&!(function(a,l,c){const h=sp(a,l,c);return a.inclusive?h<=0:h<0})(r.startAt,go(r),i)||r.endAt&&!(function(a,l,c){const h=sp(a,l,c);return a.inclusive?h>=0:h>0})(r.endAt,go(r),i))})(n,e)}function Pb(n){return n.collectionGroup||(n.path.length%2==1?n.path.lastSegment():n.path.get(n.path.length-2))}function Av(n){return(e,t)=>{let r=!1;for(const i of go(n)){const s=kb(i,e,t);if(s!==0)return s;r=r||i.field.isKeyField()}return 0}}function kb(n,e,t){const r=n.field.isKeyField()?ie.comparator(e.key,t.key):(function(s,a,l){const c=a.data.field(s),h=l.data.field(s);return c!==null&&h!==null?Mo(c,h):ue(42886)})(n.field,e,t);switch(n.dir){case"asc":return r;case"desc":return-1*r;default:return ue(19790,{direction:n.dir})}}/**
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
 */class Ws{constructor(e,t){this.mapKeyFn=e,this.equalsFn=t,this.inner={},this.innerSize=0}get(e){const t=this.mapKeyFn(e),r=this.inner[t];if(r!==void 0){for(const[i,s]of r)if(this.equalsFn(i,e))return s}}has(e){return this.get(e)!==void 0}set(e,t){const r=this.mapKeyFn(e),i=this.inner[r];if(i===void 0)return this.inner[r]=[[e,t]],void this.innerSize++;for(let s=0;s<i.length;s++)if(this.equalsFn(i[s][0],e))return void(i[s]=[e,t]);i.push([e,t]),this.innerSize++}delete(e){const t=this.mapKeyFn(e),r=this.inner[t];if(r===void 0)return!1;for(let i=0;i<r.length;i++)if(this.equalsFn(r[i][0],e))return r.length===1?delete this.inner[t]:r.splice(i,1),this.innerSize--,!0;return!1}forEach(e){Jo(this.inner,((t,r)=>{for(const[i,s]of r)e(i,s)}))}isEmpty(){return lv(this.inner)}size(){return this.innerSize}}/**
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
 */const Nb=new Lt(ie.comparator);function os(){return Nb}const bv=new Lt(ie.comparator);function ba(...n){let e=bv;for(const t of n)e=e.insert(t.key,t);return e}function Ob(n){let e=bv;return n.forEach(((t,r)=>e=e.insert(t,r.overlayedDocument))),e}function Ss(){return Va()}function Sv(){return Va()}function Va(){return new Ws((n=>n.toString()),((n,e)=>n.isEqual(e)))}const Db=new Jt(ie.comparator);function Le(...n){let e=Db;for(const t of n)e=e.add(t);return e}const Vb=new Jt(Te);function Mb(){return Vb}/**
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
 */function fd(n,e){if(n.useProto3Json){if(isNaN(e))return{doubleValue:"NaN"};if(e===1/0)return{doubleValue:"Infinity"};if(e===-1/0)return{doubleValue:"-Infinity"}}return{doubleValue:dc(e)?"-0":e}}function Rv(n){return{integerValue:""+n}}function xb(n,e){return cb(e)?Rv(e):fd(n,e)}/**
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
 */class Xc{constructor(){this._=void 0}}function Lb(n,e,t){return n instanceof yh?(function(i,s){const a={fields:{[hv]:{stringValue:uv},[fv]:{timestampValue:{seconds:i.seconds,nanos:i.nanoseconds}}}};return s&&Kc(s)&&(s=Qc(s)),s&&(a.fields[dv]=s),{mapValue:a}})(t,e):n instanceof _c?Cv(n,e):n instanceof vc?Pv(n,e):(function(i,s){const a=Ub(i,s),l=cp(a)+cp(i.Ee);return mh(a)&&mh(i.Ee)?Rv(l):fd(i.serializer,l)})(n,e)}function Fb(n,e,t){return n instanceof _c?Cv(n,e):n instanceof vc?Pv(n,e):t}function Ub(n,e){return n instanceof Eh?(function(r){return mh(r)||(function(s){return!!s&&"doubleValue"in s})(r)})(e)?e:{integerValue:0}:null}class yh extends Xc{}class _c extends Xc{constructor(e){super(),this.elements=e}}function Cv(n,e){const t=kv(e);for(const r of n.elements)t.some((i=>ni(i,r)))||t.push(r);return{arrayValue:{values:t}}}class vc extends Xc{constructor(e){super(),this.elements=e}}function Pv(n,e){let t=kv(e);for(const r of n.elements)t=t.filter((i=>!ni(i,r)));return{arrayValue:{values:t}}}class Eh extends Xc{constructor(e,t){super(),this.serializer=e,this.Ee=t}}function cp(n){return Mt(n.integerValue||n.doubleValue)}function kv(n){return cd(n)&&n.arrayValue.values?n.arrayValue.values.slice():[]}function $b(n,e){return n.field.isEqual(e.field)&&(function(r,i){return r instanceof _c&&i instanceof _c||r instanceof vc&&i instanceof vc?Vo(r.elements,i.elements,ni):r instanceof Eh&&i instanceof Eh?ni(r.Ee,i.Ee):r instanceof yh&&i instanceof yh})(n.transform,e.transform)}class Ms{constructor(e,t){this.updateTime=e,this.exists=t}static none(){return new Ms}static exists(e){return new Ms(void 0,e)}static updateTime(e){return new Ms(e)}get isNone(){return this.updateTime===void 0&&this.exists===void 0}isEqual(e){return this.exists===e.exists&&(this.updateTime?!!e.updateTime&&this.updateTime.isEqual(e.updateTime):!e.updateTime)}}function Yl(n,e){return n.updateTime!==void 0?e.isFoundDocument()&&e.version.isEqual(n.updateTime):n.exists===void 0||n.exists===e.isFoundDocument()}class pd{}function Nv(n,e){if(!n.hasLocalMutations||e&&e.fields.length===0)return null;if(e===null)return n.isNoDocument()?new qb(n.key,Ms.none()):new md(n.key,n.data,Ms.none());{const t=n.data,r=jr.empty();let i=new Jt(Pn.comparator);for(let s of e.fields)if(!i.has(s)){let a=t.field(s);a===null&&s.length>1&&(s=s.popLast(),a=t.field(s)),a===null?r.delete(s):r.set(s,a),i=i.add(s)}return new Zc(n.key,r,new Hi(i.toArray()),Ms.none())}}function Bb(n,e,t){n instanceof md?(function(i,s,a){const l=i.value.clone(),c=hp(i.fieldTransforms,s,a.transformResults);l.setAll(c),s.convertToFoundDocument(a.version,l).setHasCommittedMutations()})(n,e,t):n instanceof Zc?(function(i,s,a){if(!Yl(i.precondition,s))return void s.convertToUnknownDocument(a.version);const l=hp(i.fieldTransforms,s,a.transformResults),c=s.data;c.setAll(Ov(i)),c.setAll(l),s.convertToFoundDocument(a.version,c).setHasCommittedMutations()})(n,e,t):(function(i,s,a){s.convertToNoDocument(a.version).setHasCommittedMutations()})(0,e,t)}function Ma(n,e,t,r){return n instanceof md?(function(s,a,l,c){if(!Yl(s.precondition,a))return l;const h=s.value.clone(),f=dp(s.fieldTransforms,c,a);return h.setAll(f),a.convertToFoundDocument(a.version,h).setHasLocalMutations(),null})(n,e,t,r):n instanceof Zc?(function(s,a,l,c){if(!Yl(s.precondition,a))return l;const h=dp(s.fieldTransforms,c,a),f=a.data;return f.setAll(Ov(s)),f.setAll(h),a.convertToFoundDocument(a.version,f).setHasLocalMutations(),l===null?null:l.unionWith(s.fieldMask.fields).unionWith(s.fieldTransforms.map((g=>g.field)))})(n,e,t,r):(function(s,a,l){return Yl(s.precondition,a)?(a.convertToNoDocument(a.version).setHasLocalMutations(),null):l})(n,e,t)}function up(n,e){return n.type===e.type&&!!n.key.isEqual(e.key)&&!!n.precondition.isEqual(e.precondition)&&!!(function(r,i){return r===void 0&&i===void 0||!(!r||!i)&&Vo(r,i,((s,a)=>$b(s,a)))})(n.fieldTransforms,e.fieldTransforms)&&(n.type===0?n.value.isEqual(e.value):n.type!==1||n.data.isEqual(e.data)&&n.fieldMask.isEqual(e.fieldMask))}class md extends pd{constructor(e,t,r,i=[]){super(),this.key=e,this.value=t,this.precondition=r,this.fieldTransforms=i,this.type=0}getFieldMask(){return null}}class Zc extends pd{constructor(e,t,r,i,s=[]){super(),this.key=e,this.data=t,this.fieldMask=r,this.precondition=i,this.fieldTransforms=s,this.type=1}getFieldMask(){return this.fieldMask}}function Ov(n){const e=new Map;return n.fieldMask.fields.forEach((t=>{if(!t.isEmpty()){const r=n.data.field(t);e.set(t,r)}})),e}function hp(n,e,t){const r=new Map;Tt(n.length===t.length,32656,{Ae:t.length,Re:n.length});for(let i=0;i<t.length;i++){const s=n[i],a=s.transform,l=e.data.field(s.field);r.set(s.field,Fb(a,l,t[i]))}return r}function dp(n,e,t){const r=new Map;for(const i of n){const s=i.transform,a=t.data.field(i.field);r.set(i.field,Lb(s,a,e))}return r}class qb extends pd{constructor(e,t){super(),this.key=e,this.precondition=t,this.type=2,this.fieldTransforms=[]}getFieldMask(){return null}}/**
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
 */class zb{constructor(e,t,r,i){this.batchId=e,this.localWriteTime=t,this.baseMutations=r,this.mutations=i}applyToRemoteDocument(e,t){const r=t.mutationResults;for(let i=0;i<this.mutations.length;i++){const s=this.mutations[i];s.key.isEqual(e.key)&&Bb(s,e,r[i])}}applyToLocalView(e,t){for(const r of this.baseMutations)r.key.isEqual(e.key)&&(t=Ma(r,e,t,this.localWriteTime));for(const r of this.mutations)r.key.isEqual(e.key)&&(t=Ma(r,e,t,this.localWriteTime));return t}applyToLocalDocumentSet(e,t){const r=Sv();return this.mutations.forEach((i=>{const s=e.get(i.key),a=s.overlayedDocument;let l=this.applyToLocalView(a,s.mutatedFields);l=t.has(i.key)?null:l;const c=Nv(a,l);c!==null&&r.set(i.key,c),a.isValidDocument()||a.convertToNoDocument(ce.min())})),r}keys(){return this.mutations.reduce(((e,t)=>e.add(t.key)),Le())}isEqual(e){return this.batchId===e.batchId&&Vo(this.mutations,e.mutations,((t,r)=>up(t,r)))&&Vo(this.baseMutations,e.baseMutations,((t,r)=>up(t,r)))}}/**
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
 */class jb{constructor(e,t){this.largestBatchId=e,this.mutation=t}getKey(){return this.mutation.key}isEqual(e){return e!==null&&this.mutation===e.mutation}toString(){return`Overlay{
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
 */class Hb{constructor(e,t){this.count=e,this.unchangedNames=t}}/**
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
 */var qt,Ve;function Dv(n){if(n===void 0)return Ai("GRPC error has no .code"),F.UNKNOWN;switch(n){case qt.OK:return F.OK;case qt.CANCELLED:return F.CANCELLED;case qt.UNKNOWN:return F.UNKNOWN;case qt.DEADLINE_EXCEEDED:return F.DEADLINE_EXCEEDED;case qt.RESOURCE_EXHAUSTED:return F.RESOURCE_EXHAUSTED;case qt.INTERNAL:return F.INTERNAL;case qt.UNAVAILABLE:return F.UNAVAILABLE;case qt.UNAUTHENTICATED:return F.UNAUTHENTICATED;case qt.INVALID_ARGUMENT:return F.INVALID_ARGUMENT;case qt.NOT_FOUND:return F.NOT_FOUND;case qt.ALREADY_EXISTS:return F.ALREADY_EXISTS;case qt.PERMISSION_DENIED:return F.PERMISSION_DENIED;case qt.FAILED_PRECONDITION:return F.FAILED_PRECONDITION;case qt.ABORTED:return F.ABORTED;case qt.OUT_OF_RANGE:return F.OUT_OF_RANGE;case qt.UNIMPLEMENTED:return F.UNIMPLEMENTED;case qt.DATA_LOSS:return F.DATA_LOSS;default:return ue(39323,{code:n})}}(Ve=qt||(qt={}))[Ve.OK=0]="OK",Ve[Ve.CANCELLED=1]="CANCELLED",Ve[Ve.UNKNOWN=2]="UNKNOWN",Ve[Ve.INVALID_ARGUMENT=3]="INVALID_ARGUMENT",Ve[Ve.DEADLINE_EXCEEDED=4]="DEADLINE_EXCEEDED",Ve[Ve.NOT_FOUND=5]="NOT_FOUND",Ve[Ve.ALREADY_EXISTS=6]="ALREADY_EXISTS",Ve[Ve.PERMISSION_DENIED=7]="PERMISSION_DENIED",Ve[Ve.UNAUTHENTICATED=16]="UNAUTHENTICATED",Ve[Ve.RESOURCE_EXHAUSTED=8]="RESOURCE_EXHAUSTED",Ve[Ve.FAILED_PRECONDITION=9]="FAILED_PRECONDITION",Ve[Ve.ABORTED=10]="ABORTED",Ve[Ve.OUT_OF_RANGE=11]="OUT_OF_RANGE",Ve[Ve.UNIMPLEMENTED=12]="UNIMPLEMENTED",Ve[Ve.INTERNAL=13]="INTERNAL",Ve[Ve.UNAVAILABLE=14]="UNAVAILABLE",Ve[Ve.DATA_LOSS=15]="DATA_LOSS";/**
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
 */const Wb=new Ji([4294967295,4294967295],0);function fp(n){const e=iv().encode(n),t=new J_;return t.update(e),new Uint8Array(t.digest())}function pp(n){const e=new DataView(n.buffer),t=e.getUint32(0,!0),r=e.getUint32(4,!0),i=e.getUint32(8,!0),s=e.getUint32(12,!0);return[new Ji([t,r],0),new Ji([i,s],0)]}class gd{constructor(e,t,r){if(this.bitmap=e,this.padding=t,this.hashCount=r,t<0||t>=8)throw new Sa(`Invalid padding: ${t}`);if(r<0)throw new Sa(`Invalid hash count: ${r}`);if(e.length>0&&this.hashCount===0)throw new Sa(`Invalid hash count: ${r}`);if(e.length===0&&t!==0)throw new Sa(`Invalid padding when bitmap length is 0: ${t}`);this.fe=8*e.length-t,this.ge=Ji.fromNumber(this.fe)}pe(e,t,r){let i=e.add(t.multiply(Ji.fromNumber(r)));return i.compare(Wb)===1&&(i=new Ji([i.getBits(0),i.getBits(1)],0)),i.modulo(this.ge).toNumber()}ye(e){return!!(this.bitmap[Math.floor(e/8)]&1<<e%8)}mightContain(e){if(this.fe===0)return!1;const t=fp(e),[r,i]=pp(t);for(let s=0;s<this.hashCount;s++){const a=this.pe(r,i,s);if(!this.ye(a))return!1}return!0}static create(e,t,r){const i=e%8==0?0:8-e%8,s=new Uint8Array(Math.ceil(e/8)),a=new gd(s,i,t);return r.forEach((l=>a.insert(l))),a}insert(e){if(this.fe===0)return;const t=fp(e),[r,i]=pp(t);for(let s=0;s<this.hashCount;s++){const a=this.pe(r,i,s);this.we(a)}}we(e){const t=Math.floor(e/8),r=e%8;this.bitmap[t]|=1<<r}}class Sa extends Error{constructor(){super(...arguments),this.name="BloomFilterError"}}/**
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
 */class eu{constructor(e,t,r,i,s){this.snapshotVersion=e,this.targetChanges=t,this.targetMismatches=r,this.documentUpdates=i,this.resolvedLimboDocuments=s}static createSynthesizedRemoteEventForCurrentChange(e,t,r){const i=new Map;return i.set(e,sl.createSynthesizedTargetChangeForCurrentChange(e,t,r)),new eu(ce.min(),i,new Lt(Te),os(),Le())}}class sl{constructor(e,t,r,i,s){this.resumeToken=e,this.current=t,this.addedDocuments=r,this.modifiedDocuments=i,this.removedDocuments=s}static createSynthesizedTargetChangeForCurrentChange(e,t,r){return new sl(r,t,Le(),Le(),Le())}}/**
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
 */class Jl{constructor(e,t,r,i){this.Se=e,this.removedTargetIds=t,this.key=r,this.be=i}}class Vv{constructor(e,t){this.targetId=e,this.De=t}}class Mv{constructor(e,t,r=gn.EMPTY_BYTE_STRING,i=null){this.state=e,this.targetIds=t,this.resumeToken=r,this.cause=i}}class mp{constructor(){this.ve=0,this.Ce=gp(),this.Fe=gn.EMPTY_BYTE_STRING,this.Me=!1,this.xe=!0}get current(){return this.Me}get resumeToken(){return this.Fe}get Oe(){return this.ve!==0}get Ne(){return this.xe}Be(e){e.approximateByteSize()>0&&(this.xe=!0,this.Fe=e)}Le(){let e=Le(),t=Le(),r=Le();return this.Ce.forEach(((i,s)=>{switch(s){case 0:e=e.add(i);break;case 2:t=t.add(i);break;case 1:r=r.add(i);break;default:ue(38017,{changeType:s})}})),new sl(this.Fe,this.Me,e,t,r)}ke(){this.xe=!1,this.Ce=gp()}qe(e,t){this.xe=!0,this.Ce=this.Ce.insert(e,t)}Qe(e){this.xe=!0,this.Ce=this.Ce.remove(e)}$e(){this.ve+=1}Ue(){this.ve-=1,Tt(this.ve>=0,3241,{ve:this.ve})}Ke(){this.xe=!0,this.Me=!0}}class Gb{constructor(e){this.We=e,this.Ge=new Map,this.ze=os(),this.je=Vl(),this.Je=Vl(),this.He=new Lt(Te)}Ye(e){for(const t of e.Se)e.be&&e.be.isFoundDocument()?this.Ze(t,e.be):this.Xe(t,e.key,e.be);for(const t of e.removedTargetIds)this.Xe(t,e.key,e.be)}et(e){this.forEachTarget(e,(t=>{const r=this.tt(t);switch(e.state){case 0:this.nt(t)&&r.Be(e.resumeToken);break;case 1:r.Ue(),r.Oe||r.ke(),r.Be(e.resumeToken);break;case 2:r.Ue(),r.Oe||this.removeTarget(t);break;case 3:this.nt(t)&&(r.Ke(),r.Be(e.resumeToken));break;case 4:this.nt(t)&&(this.rt(t),r.Be(e.resumeToken));break;default:ue(56790,{state:e.state})}}))}forEachTarget(e,t){e.targetIds.length>0?e.targetIds.forEach(t):this.Ge.forEach(((r,i)=>{this.nt(i)&&t(i)}))}it(e){const t=e.targetId,r=e.De.count,i=this.st(t);if(i){const s=i.target;if(_h(s))if(r===0){const a=new ie(s.path);this.Xe(t,a,Cn.newNoDocument(a,ce.min()))}else Tt(r===1,20013,{expectedCount:r});else{const a=this.ot(t);if(a!==r){const l=this._t(e),c=l?this.ut(l,e,a):1;if(c!==0){this.rt(t);const h=c===2?"TargetPurposeExistenceFilterMismatchBloom":"TargetPurposeExistenceFilterMismatch";this.He=this.He.insert(t,h)}}}}}_t(e){const t=e.De.unchangedNames;if(!t||!t.bits)return null;const{bits:{bitmap:r="",padding:i=0},hashCount:s=0}=t;let a,l;try{a=is(r).toUint8Array()}catch(c){if(c instanceof cv)return qs("Decoding the base64 bloom filter in existence filter failed ("+c.message+"); ignoring the bloom filter and falling back to full re-query."),null;throw c}try{l=new gd(a,i,s)}catch(c){return qs(c instanceof Sa?"BloomFilter error: ":"Applying bloom filter failed: ",c),null}return l.fe===0?null:l}ut(e,t,r){return t.De.count===r-this.ht(e,t.targetId)?0:2}ht(e,t){const r=this.We.getRemoteKeysForTarget(t);let i=0;return r.forEach((s=>{const a=this.We.lt(),l=`projects/${a.projectId}/databases/${a.database}/documents/${s.path.canonicalString()}`;e.mightContain(l)||(this.Xe(t,s,null),i++)})),i}Pt(e){const t=new Map;this.Ge.forEach(((s,a)=>{const l=this.st(a);if(l){if(s.current&&_h(l.target)){const c=new ie(l.target.path);this.Tt(c).has(a)||this.It(a,c)||this.Xe(a,c,Cn.newNoDocument(c,e))}s.Ne&&(t.set(a,s.Le()),s.ke())}}));let r=Le();this.Je.forEach(((s,a)=>{let l=!0;a.forEachWhile((c=>{const h=this.st(c);return!h||h.purpose==="TargetPurposeLimboResolution"||(l=!1,!1)})),l&&(r=r.add(s))})),this.ze.forEach(((s,a)=>a.setReadTime(e)));const i=new eu(e,t,this.He,this.ze,r);return this.ze=os(),this.je=Vl(),this.Je=Vl(),this.He=new Lt(Te),i}Ze(e,t){if(!this.nt(e))return;const r=this.It(e,t.key)?2:0;this.tt(e).qe(t.key,r),this.ze=this.ze.insert(t.key,t),this.je=this.je.insert(t.key,this.Tt(t.key).add(e)),this.Je=this.Je.insert(t.key,this.dt(t.key).add(e))}Xe(e,t,r){if(!this.nt(e))return;const i=this.tt(e);this.It(e,t)?i.qe(t,1):i.Qe(t),this.Je=this.Je.insert(t,this.dt(t).delete(e)),this.Je=this.Je.insert(t,this.dt(t).add(e)),r&&(this.ze=this.ze.insert(t,r))}removeTarget(e){this.Ge.delete(e)}ot(e){const t=this.tt(e).Le();return this.We.getRemoteKeysForTarget(e).size+t.addedDocuments.size-t.removedDocuments.size}$e(e){this.tt(e).$e()}tt(e){let t=this.Ge.get(e);return t||(t=new mp,this.Ge.set(e,t)),t}dt(e){let t=this.Je.get(e);return t||(t=new Jt(Te),this.Je=this.Je.insert(e,t)),t}Tt(e){let t=this.je.get(e);return t||(t=new Jt(Te),this.je=this.je.insert(e,t)),t}nt(e){const t=this.st(e)!==null;return t||W("WatchChangeAggregator","Detected inactive target",e),t}st(e){const t=this.Ge.get(e);return t&&t.Oe?null:this.We.Et(e)}rt(e){this.Ge.set(e,new mp),this.We.getRemoteKeysForTarget(e).forEach((t=>{this.Xe(e,t,null)}))}It(e,t){return this.We.getRemoteKeysForTarget(e).has(t)}}function Vl(){return new Lt(ie.comparator)}function gp(){return new Lt(ie.comparator)}const Kb={asc:"ASCENDING",desc:"DESCENDING"},Qb={"<":"LESS_THAN","<=":"LESS_THAN_OR_EQUAL",">":"GREATER_THAN",">=":"GREATER_THAN_OR_EQUAL","==":"EQUAL","!=":"NOT_EQUAL","array-contains":"ARRAY_CONTAINS",in:"IN","not-in":"NOT_IN","array-contains-any":"ARRAY_CONTAINS_ANY"},Yb={and:"AND",or:"OR"};class Jb{constructor(e,t){this.databaseId=e,this.useProto3Json=t}}function wh(n,e){return n.useProto3Json||Gc(e)?e:{value:e}}function Th(n,e){return n.useProto3Json?`${new Date(1e3*e.seconds).toISOString().replace(/\.\d*/,"").replace("Z","")}.${("000000000"+e.nanoseconds).slice(-9)}Z`:{seconds:""+e.seconds,nanos:e.nanoseconds}}function xv(n,e){return n.useProto3Json?e.toBase64():e.toUint8Array()}function _o(n){return Tt(!!n,49232),ce.fromTimestamp((function(t){const r=rs(t);return new _t(r.seconds,r.nanos)})(n))}function Lv(n,e){return Ih(n,e).canonicalString()}function Ih(n,e){const t=(function(i){return new ut(["projects",i.projectId,"databases",i.database])})(n).child("documents");return e===void 0?t:t.child(e)}function Fv(n){const e=ut.fromString(n);return Tt(zv(e),10190,{key:e.toString()}),e}function Vu(n,e){const t=Fv(e);if(t.get(1)!==n.databaseId.projectId)throw new H(F.INVALID_ARGUMENT,"Tried to deserialize key from different project: "+t.get(1)+" vs "+n.databaseId.projectId);if(t.get(3)!==n.databaseId.database)throw new H(F.INVALID_ARGUMENT,"Tried to deserialize key from different database: "+t.get(3)+" vs "+n.databaseId.database);return new ie($v(t))}function Uv(n,e){return Lv(n.databaseId,e)}function Xb(n){const e=Fv(n);return e.length===4?ut.emptyPath():$v(e)}function _p(n){return new ut(["projects",n.databaseId.projectId,"databases",n.databaseId.database]).canonicalString()}function $v(n){return Tt(n.length>4&&n.get(4)==="documents",29091,{key:n.toString()}),n.popFirst(5)}function Zb(n,e){let t;if("targetChange"in e){e.targetChange;const r=(function(h){return h==="NO_CHANGE"?0:h==="ADD"?1:h==="REMOVE"?2:h==="CURRENT"?3:h==="RESET"?4:ue(39313,{state:h})})(e.targetChange.targetChangeType||"NO_CHANGE"),i=e.targetChange.targetIds||[],s=(function(h,f){return h.useProto3Json?(Tt(f===void 0||typeof f=="string",58123),gn.fromBase64String(f||"")):(Tt(f===void 0||f instanceof Buffer||f instanceof Uint8Array,16193),gn.fromUint8Array(f||new Uint8Array))})(n,e.targetChange.resumeToken),a=e.targetChange.cause,l=a&&(function(h){const f=h.code===void 0?F.UNKNOWN:Dv(h.code);return new H(f,h.message||"")})(a);t=new Mv(r,i,s,l||null)}else if("documentChange"in e){e.documentChange;const r=e.documentChange;r.document,r.document.name,r.document.updateTime;const i=Vu(n,r.document.name),s=_o(r.document.updateTime),a=r.document.createTime?_o(r.document.createTime):ce.min(),l=new jr({mapValue:{fields:r.document.fields}}),c=Cn.newFoundDocument(i,s,a,l),h=r.targetIds||[],f=r.removedTargetIds||[];t=new Jl(h,f,c.key,c)}else if("documentDelete"in e){e.documentDelete;const r=e.documentDelete;r.document;const i=Vu(n,r.document),s=r.readTime?_o(r.readTime):ce.min(),a=Cn.newNoDocument(i,s),l=r.removedTargetIds||[];t=new Jl([],l,a.key,a)}else if("documentRemove"in e){e.documentRemove;const r=e.documentRemove;r.document;const i=Vu(n,r.document),s=r.removedTargetIds||[];t=new Jl([],s,i,null)}else{if(!("filter"in e))return ue(11601,{At:e});{e.filter;const r=e.filter;r.targetId;const{count:i=0,unchangedNames:s}=r,a=new Hb(i,s),l=r.targetId;t=new Vv(l,a)}}return t}function e1(n,e){return{documents:[Uv(n,e.path)]}}function t1(n,e){const t={structuredQuery:{}},r=e.path;let i;e.collectionGroup!==null?(i=r,t.structuredQuery.from=[{collectionId:e.collectionGroup,allDescendants:!0}]):(i=r.popLast(),t.structuredQuery.from=[{collectionId:r.lastSegment()}]),t.parent=Uv(n,i);const s=(function(h){if(h.length!==0)return qv(Dr.create(h,"and"))})(e.filters);s&&(t.structuredQuery.where=s);const a=(function(h){if(h.length!==0)return h.map((f=>(function(_){return{field:oo(_.field),direction:i1(_.dir)}})(f)))})(e.orderBy);a&&(t.structuredQuery.orderBy=a);const l=wh(n,e.limit);return l!==null&&(t.structuredQuery.limit=l),e.startAt&&(t.structuredQuery.startAt=(function(h){return{before:h.inclusive,values:h.position}})(e.startAt)),e.endAt&&(t.structuredQuery.endAt=(function(h){return{before:!h.inclusive,values:h.position}})(e.endAt)),{Vt:t,parent:i}}function n1(n){let e=Xb(n.parent);const t=n.structuredQuery,r=t.from?t.from.length:0;let i=null;if(r>0){Tt(r===1,65062);const f=t.from[0];f.allDescendants?i=f.collectionId:e=e.child(f.collectionId)}let s=[];t.where&&(s=(function(g){const _=Bv(g);return _ instanceof Dr&&vv(_)?_.getFilters():[_]})(t.where));let a=[];t.orderBy&&(a=(function(g){return g.map((_=>(function(R){return new Ha(ao(R.field),(function(P){switch(P){case"ASCENDING":return"asc";case"DESCENDING":return"desc";default:return}})(R.direction))})(_)))})(t.orderBy));let l=null;t.limit&&(l=(function(g){let _;return _=typeof g=="object"?g.value:g,Gc(_)?null:_})(t.limit));let c=null;t.startAt&&(c=(function(g){const _=!!g.before,E=g.values||[];return new Lo(E,_)})(t.startAt));let h=null;return t.endAt&&(h=(function(g){const _=!g.before,E=g.values||[];return new Lo(E,_)})(t.endAt)),Rb(e,i,a,s,l,"F",c,h)}function r1(n,e){const t=(function(i){switch(i){case"TargetPurposeListen":return null;case"TargetPurposeExistenceFilterMismatch":return"existence-filter-mismatch";case"TargetPurposeExistenceFilterMismatchBloom":return"existence-filter-mismatch-bloom";case"TargetPurposeLimboResolution":return"limbo-document";default:return ue(28987,{purpose:i})}})(e.purpose);return t==null?null:{"goog-listen-tags":t}}function Bv(n){return n.unaryFilter!==void 0?(function(t){switch(t.unaryFilter.op){case"IS_NAN":const r=ao(t.unaryFilter.field);return jt.create(r,"==",{doubleValue:NaN});case"IS_NULL":const i=ao(t.unaryFilter.field);return jt.create(i,"==",{nullValue:"NULL_VALUE"});case"IS_NOT_NAN":const s=ao(t.unaryFilter.field);return jt.create(s,"!=",{doubleValue:NaN});case"IS_NOT_NULL":const a=ao(t.unaryFilter.field);return jt.create(a,"!=",{nullValue:"NULL_VALUE"});case"OPERATOR_UNSPECIFIED":return ue(61313);default:return ue(60726)}})(n):n.fieldFilter!==void 0?(function(t){return jt.create(ao(t.fieldFilter.field),(function(i){switch(i){case"EQUAL":return"==";case"NOT_EQUAL":return"!=";case"GREATER_THAN":return">";case"GREATER_THAN_OR_EQUAL":return">=";case"LESS_THAN":return"<";case"LESS_THAN_OR_EQUAL":return"<=";case"ARRAY_CONTAINS":return"array-contains";case"IN":return"in";case"NOT_IN":return"not-in";case"ARRAY_CONTAINS_ANY":return"array-contains-any";case"OPERATOR_UNSPECIFIED":return ue(58110);default:return ue(50506)}})(t.fieldFilter.op),t.fieldFilter.value)})(n):n.compositeFilter!==void 0?(function(t){return Dr.create(t.compositeFilter.filters.map((r=>Bv(r))),(function(i){switch(i){case"AND":return"and";case"OR":return"or";default:return ue(1026)}})(t.compositeFilter.op))})(n):ue(30097,{filter:n})}function i1(n){return Kb[n]}function s1(n){return Qb[n]}function o1(n){return Yb[n]}function oo(n){return{fieldPath:n.canonicalString()}}function ao(n){return Pn.fromServerFormat(n.fieldPath)}function qv(n){return n instanceof jt?(function(t){if(t.op==="=="){if(ip(t.value))return{unaryFilter:{field:oo(t.field),op:"IS_NAN"}};if(rp(t.value))return{unaryFilter:{field:oo(t.field),op:"IS_NULL"}}}else if(t.op==="!="){if(ip(t.value))return{unaryFilter:{field:oo(t.field),op:"IS_NOT_NAN"}};if(rp(t.value))return{unaryFilter:{field:oo(t.field),op:"IS_NOT_NULL"}}}return{fieldFilter:{field:oo(t.field),op:s1(t.op),value:t.value}}})(n):n instanceof Dr?(function(t){const r=t.getFilters().map((i=>qv(i)));return r.length===1?r[0]:{compositeFilter:{op:o1(t.op),filters:r}}})(n):ue(54877,{filter:n})}function zv(n){return n.length>=4&&n.get(0)==="projects"&&n.get(2)==="databases"}/**
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
 */class Wi{constructor(e,t,r,i,s=ce.min(),a=ce.min(),l=gn.EMPTY_BYTE_STRING,c=null){this.target=e,this.targetId=t,this.purpose=r,this.sequenceNumber=i,this.snapshotVersion=s,this.lastLimboFreeSnapshotVersion=a,this.resumeToken=l,this.expectedCount=c}withSequenceNumber(e){return new Wi(this.target,this.targetId,this.purpose,e,this.snapshotVersion,this.lastLimboFreeSnapshotVersion,this.resumeToken,this.expectedCount)}withResumeToken(e,t){return new Wi(this.target,this.targetId,this.purpose,this.sequenceNumber,t,this.lastLimboFreeSnapshotVersion,e,null)}withExpectedCount(e){return new Wi(this.target,this.targetId,this.purpose,this.sequenceNumber,this.snapshotVersion,this.lastLimboFreeSnapshotVersion,this.resumeToken,e)}withLastLimboFreeSnapshotVersion(e){return new Wi(this.target,this.targetId,this.purpose,this.sequenceNumber,this.snapshotVersion,e,this.resumeToken,this.expectedCount)}}/**
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
 */class a1{constructor(e){this.gt=e}}function l1(n){const e=n1({parent:n.parent,structuredQuery:n.structuredQuery});return n.limitType==="LAST"?gc(e,e.limit,"L"):e}/**
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
 */class c1{constructor(){this.Dn=new u1}addToCollectionParentIndex(e,t){return this.Dn.add(t),x.resolve()}getCollectionParents(e,t){return x.resolve(this.Dn.getEntries(t))}addFieldIndex(e,t){return x.resolve()}deleteFieldIndex(e,t){return x.resolve()}deleteAllFieldIndexes(e){return x.resolve()}createTargetIndexes(e,t){return x.resolve()}getDocumentsMatchingTarget(e,t){return x.resolve(null)}getIndexType(e,t){return x.resolve(0)}getFieldIndexes(e,t){return x.resolve([])}getNextCollectionGroupToUpdate(e){return x.resolve(null)}getMinOffset(e,t){return x.resolve(ns.min())}getMinOffsetFromCollectionGroup(e,t){return x.resolve(ns.min())}updateCollectionGroup(e,t,r){return x.resolve()}updateIndexEntries(e,t){return x.resolve()}}class u1{constructor(){this.index={}}add(e){const t=e.lastSegment(),r=e.popLast(),i=this.index[t]||new Jt(ut.comparator),s=!i.has(r);return this.index[t]=i.add(r),s}has(e){const t=e.lastSegment(),r=e.popLast(),i=this.index[t];return i&&i.has(r)}getEntries(e){return(this.index[e]||new Jt(ut.comparator)).toArray()}}/**
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
 */const vp={didRun:!1,sequenceNumbersCollected:0,targetsRemoved:0,documentsRemoved:0},jv=41943040;class Hn{static withCacheSize(e){return new Hn(e,Hn.DEFAULT_COLLECTION_PERCENTILE,Hn.DEFAULT_MAX_SEQUENCE_NUMBERS_TO_COLLECT)}constructor(e,t,r){this.cacheSizeCollectionThreshold=e,this.percentileToCollect=t,this.maximumSequenceNumbersToCollect=r}}/**
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
 */Hn.DEFAULT_COLLECTION_PERCENTILE=10,Hn.DEFAULT_MAX_SEQUENCE_NUMBERS_TO_COLLECT=1e3,Hn.DEFAULT=new Hn(jv,Hn.DEFAULT_COLLECTION_PERCENTILE,Hn.DEFAULT_MAX_SEQUENCE_NUMBERS_TO_COLLECT),Hn.DISABLED=new Hn(-1,0,0);/**
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
 */class Fo{constructor(e){this._r=e}next(){return this._r+=2,this._r}static ar(){return new Fo(0)}static ur(){return new Fo(-1)}}/**
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
 */const yp="LruGarbageCollector",Hv=1048576;function Ep([n,e],[t,r]){const i=Te(n,t);return i===0?Te(e,r):i}class h1{constructor(e){this.Tr=e,this.buffer=new Jt(Ep),this.Ir=0}dr(){return++this.Ir}Er(e){const t=[e,this.dr()];if(this.buffer.size<this.Tr)this.buffer=this.buffer.add(t);else{const r=this.buffer.last();Ep(t,r)<0&&(this.buffer=this.buffer.delete(r).add(t))}}get maxValue(){return this.buffer.last()[0]}}class d1{constructor(e,t,r){this.garbageCollector=e,this.asyncQueue=t,this.localStore=r,this.Ar=null}start(){this.garbageCollector.params.cacheSizeCollectionThreshold!==-1&&this.Rr(6e4)}stop(){this.Ar&&(this.Ar.cancel(),this.Ar=null)}get started(){return this.Ar!==null}Rr(e){W(yp,`Garbage collection scheduled in ${e}ms`),this.Ar=this.asyncQueue.enqueueAfterDelay("lru_garbage_collection",e,(async()=>{this.Ar=null;try{await this.localStore.collectGarbage(this.garbageCollector)}catch(t){Yo(t)?W(yp,"Ignoring IndexedDB error during garbage collection: ",t):await Hc(t)}await this.Rr(3e5)}))}}class f1{constructor(e,t){this.Vr=e,this.params=t}calculateTargetCount(e,t){return this.Vr.mr(e).next((r=>Math.floor(t/100*r)))}nthSequenceNumber(e,t){if(t===0)return x.resolve(Wc.ue);const r=new h1(t);return this.Vr.forEachTarget(e,(i=>r.Er(i.sequenceNumber))).next((()=>this.Vr.gr(e,(i=>r.Er(i))))).next((()=>r.maxValue))}removeTargets(e,t,r){return this.Vr.removeTargets(e,t,r)}removeOrphanedDocuments(e,t){return this.Vr.removeOrphanedDocuments(e,t)}collect(e,t){return this.params.cacheSizeCollectionThreshold===-1?(W("LruGarbageCollector","Garbage collection skipped; disabled"),x.resolve(vp)):this.getCacheSize(e).next((r=>r<this.params.cacheSizeCollectionThreshold?(W("LruGarbageCollector",`Garbage collection skipped; Cache size ${r} is lower than threshold ${this.params.cacheSizeCollectionThreshold}`),vp):this.pr(e,t)))}getCacheSize(e){return this.Vr.getCacheSize(e)}pr(e,t){let r,i,s,a,l,c,h;const f=Date.now();return this.calculateTargetCount(e,this.params.percentileToCollect).next((g=>(g>this.params.maximumSequenceNumbersToCollect?(W("LruGarbageCollector",`Capping sequence numbers to collect down to the maximum of ${this.params.maximumSequenceNumbersToCollect} from ${g}`),i=this.params.maximumSequenceNumbersToCollect):i=g,a=Date.now(),this.nthSequenceNumber(e,i)))).next((g=>(r=g,l=Date.now(),this.removeTargets(e,r,t)))).next((g=>(s=g,c=Date.now(),this.removeOrphanedDocuments(e,r)))).next((g=>(h=Date.now(),io()<=Pe.DEBUG&&W("LruGarbageCollector",`LRU Garbage Collection
	Counted targets in ${a-f}ms
	Determined least recently used ${i} in `+(l-a)+`ms
	Removed ${s} targets in `+(c-l)+`ms
	Removed ${g} documents in `+(h-c)+`ms
Total Duration: ${h-f}ms`),x.resolve({didRun:!0,sequenceNumbersCollected:i,targetsRemoved:s,documentsRemoved:g}))))}}function p1(n,e){return new f1(n,e)}/**
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
 */class m1{constructor(){this.changes=new Ws((e=>e.toString()),((e,t)=>e.isEqual(t))),this.changesApplied=!1}addEntry(e){this.assertNotApplied(),this.changes.set(e.key,e)}removeEntry(e,t){this.assertNotApplied(),this.changes.set(e,Cn.newInvalidDocument(e).setReadTime(t))}getEntry(e,t){this.assertNotApplied();const r=this.changes.get(t);return r!==void 0?x.resolve(r):this.getFromCache(e,t)}getEntries(e,t){return this.getAllFromCache(e,t)}apply(e){return this.assertNotApplied(),this.changesApplied=!0,this.applyChanges(e)}assertNotApplied(){}}/**
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
 */class g1{constructor(e,t){this.overlayedDocument=e,this.mutatedFields=t}}/**
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
 */class _1{constructor(e,t,r,i){this.remoteDocumentCache=e,this.mutationQueue=t,this.documentOverlayCache=r,this.indexManager=i}getDocument(e,t){let r=null;return this.documentOverlayCache.getOverlay(e,t).next((i=>(r=i,this.remoteDocumentCache.getEntry(e,t)))).next((i=>(r!==null&&Ma(r.mutation,i,Hi.empty(),_t.now()),i)))}getDocuments(e,t){return this.remoteDocumentCache.getEntries(e,t).next((r=>this.getLocalViewOfDocuments(e,r,Le()).next((()=>r))))}getLocalViewOfDocuments(e,t,r=Le()){const i=Ss();return this.populateOverlays(e,i,t).next((()=>this.computeViews(e,t,i,r).next((s=>{let a=ba();return s.forEach(((l,c)=>{a=a.insert(l,c.overlayedDocument)})),a}))))}getOverlayedDocuments(e,t){const r=Ss();return this.populateOverlays(e,r,t).next((()=>this.computeViews(e,t,r,Le())))}populateOverlays(e,t,r){const i=[];return r.forEach((s=>{t.has(s)||i.push(s)})),this.documentOverlayCache.getOverlays(e,i).next((s=>{s.forEach(((a,l)=>{t.set(a,l)}))}))}computeViews(e,t,r,i){let s=os();const a=Va(),l=(function(){return Va()})();return t.forEach(((c,h)=>{const f=r.get(h.key);i.has(h.key)&&(f===void 0||f.mutation instanceof Zc)?s=s.insert(h.key,h):f!==void 0?(a.set(h.key,f.mutation.getFieldMask()),Ma(f.mutation,h,f.mutation.getFieldMask(),_t.now())):a.set(h.key,Hi.empty())})),this.recalculateAndSaveOverlays(e,s).next((c=>(c.forEach(((h,f)=>a.set(h,f))),t.forEach(((h,f)=>{var g;return l.set(h,new g1(f,(g=a.get(h))!==null&&g!==void 0?g:null))})),l)))}recalculateAndSaveOverlays(e,t){const r=Va();let i=new Lt(((a,l)=>a-l)),s=Le();return this.mutationQueue.getAllMutationBatchesAffectingDocumentKeys(e,t).next((a=>{for(const l of a)l.keys().forEach((c=>{const h=t.get(c);if(h===null)return;let f=r.get(c)||Hi.empty();f=l.applyToLocalView(h,f),r.set(c,f);const g=(i.get(l.batchId)||Le()).add(c);i=i.insert(l.batchId,g)}))})).next((()=>{const a=[],l=i.getReverseIterator();for(;l.hasNext();){const c=l.getNext(),h=c.key,f=c.value,g=Sv();f.forEach((_=>{if(!s.has(_)){const E=Nv(t.get(_),r.get(_));E!==null&&g.set(_,E),s=s.add(_)}})),a.push(this.documentOverlayCache.saveOverlays(e,h,g))}return x.waitFor(a)})).next((()=>r))}recalculateAndSaveOverlaysForDocumentKeys(e,t){return this.remoteDocumentCache.getEntries(e,t).next((r=>this.recalculateAndSaveOverlays(e,r)))}getDocumentsMatchingQuery(e,t,r,i){return(function(a){return ie.isDocumentKey(a.path)&&a.collectionGroup===null&&a.filters.length===0})(t)?this.getDocumentsMatchingDocumentQuery(e,t.path):dd(t)?this.getDocumentsMatchingCollectionGroupQuery(e,t,r,i):this.getDocumentsMatchingCollectionQuery(e,t,r,i)}getNextDocuments(e,t,r,i){return this.remoteDocumentCache.getAllFromCollectionGroup(e,t,r,i).next((s=>{const a=i-s.size>0?this.documentOverlayCache.getOverlaysForCollectionGroup(e,t,r.largestBatchId,i-s.size):x.resolve(Ss());let l=Ba,c=s;return a.next((h=>x.forEach(h,((f,g)=>(l<g.largestBatchId&&(l=g.largestBatchId),s.get(f)?x.resolve():this.remoteDocumentCache.getEntry(e,f).next((_=>{c=c.insert(f,_)}))))).next((()=>this.populateOverlays(e,h,s))).next((()=>this.computeViews(e,c,h,Le()))).next((f=>({batchId:l,changes:Ob(f)})))))}))}getDocumentsMatchingDocumentQuery(e,t){return this.getDocument(e,new ie(t)).next((r=>{let i=ba();return r.isFoundDocument()&&(i=i.insert(r.key,r)),i}))}getDocumentsMatchingCollectionGroupQuery(e,t,r,i){const s=t.collectionGroup;let a=ba();return this.indexManager.getCollectionParents(e,s).next((l=>x.forEach(l,(c=>{const h=(function(g,_){return new Hs(_,null,g.explicitOrderBy.slice(),g.filters.slice(),g.limit,g.limitType,g.startAt,g.endAt)})(t,c.child(s));return this.getDocumentsMatchingCollectionQuery(e,h,r,i).next((f=>{f.forEach(((g,_)=>{a=a.insert(g,_)}))}))})).next((()=>a))))}getDocumentsMatchingCollectionQuery(e,t,r,i){let s;return this.documentOverlayCache.getOverlaysForCollection(e,t.path,r.largestBatchId).next((a=>(s=a,this.remoteDocumentCache.getDocumentsMatchingQuery(e,t,r,s,i)))).next((a=>{s.forEach(((c,h)=>{const f=h.getKey();a.get(f)===null&&(a=a.insert(f,Cn.newInvalidDocument(f)))}));let l=ba();return a.forEach(((c,h)=>{const f=s.get(c);f!==void 0&&Ma(f.mutation,h,Hi.empty(),_t.now()),Jc(t,h)&&(l=l.insert(c,h))})),l}))}}/**
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
 */class v1{constructor(e){this.serializer=e,this.Br=new Map,this.Lr=new Map}getBundleMetadata(e,t){return x.resolve(this.Br.get(t))}saveBundleMetadata(e,t){return this.Br.set(t.id,(function(i){return{id:i.id,version:i.version,createTime:_o(i.createTime)}})(t)),x.resolve()}getNamedQuery(e,t){return x.resolve(this.Lr.get(t))}saveNamedQuery(e,t){return this.Lr.set(t.name,(function(i){return{name:i.name,query:l1(i.bundledQuery),readTime:_o(i.readTime)}})(t)),x.resolve()}}/**
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
 */class y1{constructor(){this.overlays=new Lt(ie.comparator),this.kr=new Map}getOverlay(e,t){return x.resolve(this.overlays.get(t))}getOverlays(e,t){const r=Ss();return x.forEach(t,(i=>this.getOverlay(e,i).next((s=>{s!==null&&r.set(i,s)})))).next((()=>r))}saveOverlays(e,t,r){return r.forEach(((i,s)=>{this.wt(e,t,s)})),x.resolve()}removeOverlaysForBatchId(e,t,r){const i=this.kr.get(r);return i!==void 0&&(i.forEach((s=>this.overlays=this.overlays.remove(s))),this.kr.delete(r)),x.resolve()}getOverlaysForCollection(e,t,r){const i=Ss(),s=t.length+1,a=new ie(t.child("")),l=this.overlays.getIteratorFrom(a);for(;l.hasNext();){const c=l.getNext().value,h=c.getKey();if(!t.isPrefixOf(h.path))break;h.path.length===s&&c.largestBatchId>r&&i.set(c.getKey(),c)}return x.resolve(i)}getOverlaysForCollectionGroup(e,t,r,i){let s=new Lt(((h,f)=>h-f));const a=this.overlays.getIterator();for(;a.hasNext();){const h=a.getNext().value;if(h.getKey().getCollectionGroup()===t&&h.largestBatchId>r){let f=s.get(h.largestBatchId);f===null&&(f=Ss(),s=s.insert(h.largestBatchId,f)),f.set(h.getKey(),h)}}const l=Ss(),c=s.getIterator();for(;c.hasNext()&&(c.getNext().value.forEach(((h,f)=>l.set(h,f))),!(l.size()>=i)););return x.resolve(l)}wt(e,t,r){const i=this.overlays.get(r.key);if(i!==null){const a=this.kr.get(i.largestBatchId).delete(r.key);this.kr.set(i.largestBatchId,a)}this.overlays=this.overlays.insert(r.key,new jb(t,r));let s=this.kr.get(t);s===void 0&&(s=Le(),this.kr.set(t,s)),this.kr.set(t,s.add(r.key))}}/**
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
 */class E1{constructor(){this.sessionToken=gn.EMPTY_BYTE_STRING}getSessionToken(e){return x.resolve(this.sessionToken)}setSessionToken(e,t){return this.sessionToken=t,x.resolve()}}/**
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
 */class _d{constructor(){this.qr=new Jt(on.Qr),this.$r=new Jt(on.Ur)}isEmpty(){return this.qr.isEmpty()}addReference(e,t){const r=new on(e,t);this.qr=this.qr.add(r),this.$r=this.$r.add(r)}Kr(e,t){e.forEach((r=>this.addReference(r,t)))}removeReference(e,t){this.Wr(new on(e,t))}Gr(e,t){e.forEach((r=>this.removeReference(r,t)))}zr(e){const t=new ie(new ut([])),r=new on(t,e),i=new on(t,e+1),s=[];return this.$r.forEachInRange([r,i],(a=>{this.Wr(a),s.push(a.key)})),s}jr(){this.qr.forEach((e=>this.Wr(e)))}Wr(e){this.qr=this.qr.delete(e),this.$r=this.$r.delete(e)}Jr(e){const t=new ie(new ut([])),r=new on(t,e),i=new on(t,e+1);let s=Le();return this.$r.forEachInRange([r,i],(a=>{s=s.add(a.key)})),s}containsKey(e){const t=new on(e,0),r=this.qr.firstAfterOrEqual(t);return r!==null&&e.isEqual(r.key)}}class on{constructor(e,t){this.key=e,this.Hr=t}static Qr(e,t){return ie.comparator(e.key,t.key)||Te(e.Hr,t.Hr)}static Ur(e,t){return Te(e.Hr,t.Hr)||ie.comparator(e.key,t.key)}}/**
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
 */class w1{constructor(e,t){this.indexManager=e,this.referenceDelegate=t,this.mutationQueue=[],this.er=1,this.Yr=new Jt(on.Qr)}checkEmpty(e){return x.resolve(this.mutationQueue.length===0)}addMutationBatch(e,t,r,i){const s=this.er;this.er++,this.mutationQueue.length>0&&this.mutationQueue[this.mutationQueue.length-1];const a=new zb(s,t,r,i);this.mutationQueue.push(a);for(const l of i)this.Yr=this.Yr.add(new on(l.key,s)),this.indexManager.addToCollectionParentIndex(e,l.key.path.popLast());return x.resolve(a)}lookupMutationBatch(e,t){return x.resolve(this.Zr(t))}getNextMutationBatchAfterBatchId(e,t){const r=t+1,i=this.Xr(r),s=i<0?0:i;return x.resolve(this.mutationQueue.length>s?this.mutationQueue[s]:null)}getHighestUnacknowledgedBatchId(){return x.resolve(this.mutationQueue.length===0?lb:this.er-1)}getAllMutationBatches(e){return x.resolve(this.mutationQueue.slice())}getAllMutationBatchesAffectingDocumentKey(e,t){const r=new on(t,0),i=new on(t,Number.POSITIVE_INFINITY),s=[];return this.Yr.forEachInRange([r,i],(a=>{const l=this.Zr(a.Hr);s.push(l)})),x.resolve(s)}getAllMutationBatchesAffectingDocumentKeys(e,t){let r=new Jt(Te);return t.forEach((i=>{const s=new on(i,0),a=new on(i,Number.POSITIVE_INFINITY);this.Yr.forEachInRange([s,a],(l=>{r=r.add(l.Hr)}))})),x.resolve(this.ei(r))}getAllMutationBatchesAffectingQuery(e,t){const r=t.path,i=r.length+1;let s=r;ie.isDocumentKey(s)||(s=s.child(""));const a=new on(new ie(s),0);let l=new Jt(Te);return this.Yr.forEachWhile((c=>{const h=c.key.path;return!!r.isPrefixOf(h)&&(h.length===i&&(l=l.add(c.Hr)),!0)}),a),x.resolve(this.ei(l))}ei(e){const t=[];return e.forEach((r=>{const i=this.Zr(r);i!==null&&t.push(i)})),t}removeMutationBatch(e,t){Tt(this.ti(t.batchId,"removed")===0,55003),this.mutationQueue.shift();let r=this.Yr;return x.forEach(t.mutations,(i=>{const s=new on(i.key,t.batchId);return r=r.delete(s),this.referenceDelegate.markPotentiallyOrphaned(e,i.key)})).next((()=>{this.Yr=r}))}rr(e){}containsKey(e,t){const r=new on(t,0),i=this.Yr.firstAfterOrEqual(r);return x.resolve(t.isEqual(i&&i.key))}performConsistencyCheck(e){return this.mutationQueue.length,x.resolve()}ti(e,t){return this.Xr(e)}Xr(e){return this.mutationQueue.length===0?0:e-this.mutationQueue[0].batchId}Zr(e){const t=this.Xr(e);return t<0||t>=this.mutationQueue.length?null:this.mutationQueue[t]}}/**
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
 */class T1{constructor(e){this.ni=e,this.docs=(function(){return new Lt(ie.comparator)})(),this.size=0}setIndexManager(e){this.indexManager=e}addEntry(e,t){const r=t.key,i=this.docs.get(r),s=i?i.size:0,a=this.ni(t);return this.docs=this.docs.insert(r,{document:t.mutableCopy(),size:a}),this.size+=a-s,this.indexManager.addToCollectionParentIndex(e,r.path.popLast())}removeEntry(e){const t=this.docs.get(e);t&&(this.docs=this.docs.remove(e),this.size-=t.size)}getEntry(e,t){const r=this.docs.get(t);return x.resolve(r?r.document.mutableCopy():Cn.newInvalidDocument(t))}getEntries(e,t){let r=os();return t.forEach((i=>{const s=this.docs.get(i);r=r.insert(i,s?s.document.mutableCopy():Cn.newInvalidDocument(i))})),x.resolve(r)}getDocumentsMatchingQuery(e,t,r,i){let s=os();const a=t.path,l=new ie(a.child("__id-9223372036854775808__")),c=this.docs.getIteratorFrom(l);for(;c.hasNext();){const{key:h,value:{document:f}}=c.getNext();if(!a.isPrefixOf(h.path))break;h.path.length>a.length+1||ib(rb(f),r)<=0||(i.has(f.key)||Jc(t,f))&&(s=s.insert(f.key,f.mutableCopy()))}return x.resolve(s)}getAllFromCollectionGroup(e,t,r,i){ue(9500)}ri(e,t){return x.forEach(this.docs,(r=>t(r)))}newChangeBuffer(e){return new I1(this)}getSize(e){return x.resolve(this.size)}}class I1 extends m1{constructor(e){super(),this.Or=e}applyChanges(e){const t=[];return this.changes.forEach(((r,i)=>{i.isValidDocument()?t.push(this.Or.addEntry(e,i)):this.Or.removeEntry(r)})),x.waitFor(t)}getFromCache(e,t){return this.Or.getEntry(e,t)}getAllFromCache(e,t){return this.Or.getEntries(e,t)}}/**
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
 */class A1{constructor(e){this.persistence=e,this.ii=new Ws((t=>ud(t)),hd),this.lastRemoteSnapshotVersion=ce.min(),this.highestTargetId=0,this.si=0,this.oi=new _d,this.targetCount=0,this._i=Fo.ar()}forEachTarget(e,t){return this.ii.forEach(((r,i)=>t(i))),x.resolve()}getLastRemoteSnapshotVersion(e){return x.resolve(this.lastRemoteSnapshotVersion)}getHighestSequenceNumber(e){return x.resolve(this.si)}allocateTargetId(e){return this.highestTargetId=this._i.next(),x.resolve(this.highestTargetId)}setTargetsMetadata(e,t,r){return r&&(this.lastRemoteSnapshotVersion=r),t>this.si&&(this.si=t),x.resolve()}hr(e){this.ii.set(e.target,e);const t=e.targetId;t>this.highestTargetId&&(this._i=new Fo(t),this.highestTargetId=t),e.sequenceNumber>this.si&&(this.si=e.sequenceNumber)}addTargetData(e,t){return this.hr(t),this.targetCount+=1,x.resolve()}updateTargetData(e,t){return this.hr(t),x.resolve()}removeTargetData(e,t){return this.ii.delete(t.target),this.oi.zr(t.targetId),this.targetCount-=1,x.resolve()}removeTargets(e,t,r){let i=0;const s=[];return this.ii.forEach(((a,l)=>{l.sequenceNumber<=t&&r.get(l.targetId)===null&&(this.ii.delete(a),s.push(this.removeMatchingKeysForTargetId(e,l.targetId)),i++)})),x.waitFor(s).next((()=>i))}getTargetCount(e){return x.resolve(this.targetCount)}getTargetData(e,t){const r=this.ii.get(t)||null;return x.resolve(r)}addMatchingKeys(e,t,r){return this.oi.Kr(t,r),x.resolve()}removeMatchingKeys(e,t,r){this.oi.Gr(t,r);const i=this.persistence.referenceDelegate,s=[];return i&&t.forEach((a=>{s.push(i.markPotentiallyOrphaned(e,a))})),x.waitFor(s)}removeMatchingKeysForTargetId(e,t){return this.oi.zr(t),x.resolve()}getMatchingKeysForTargetId(e,t){const r=this.oi.Jr(t);return x.resolve(r)}containsKey(e,t){return x.resolve(this.oi.containsKey(t))}}/**
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
 */class Wv{constructor(e,t){this.ai={},this.overlays={},this.ui=new Wc(0),this.ci=!1,this.ci=!0,this.li=new E1,this.referenceDelegate=e(this),this.hi=new A1(this),this.indexManager=new c1,this.remoteDocumentCache=(function(i){return new T1(i)})((r=>this.referenceDelegate.Pi(r))),this.serializer=new a1(t),this.Ti=new v1(this.serializer)}start(){return Promise.resolve()}shutdown(){return this.ci=!1,Promise.resolve()}get started(){return this.ci}setDatabaseDeletedListener(){}setNetworkEnabled(){}getIndexManager(e){return this.indexManager}getDocumentOverlayCache(e){let t=this.overlays[e.toKey()];return t||(t=new y1,this.overlays[e.toKey()]=t),t}getMutationQueue(e,t){let r=this.ai[e.toKey()];return r||(r=new w1(t,this.referenceDelegate),this.ai[e.toKey()]=r),r}getGlobalsCache(){return this.li}getTargetCache(){return this.hi}getRemoteDocumentCache(){return this.remoteDocumentCache}getBundleCache(){return this.Ti}runTransaction(e,t,r){W("MemoryPersistence","Starting transaction:",e);const i=new b1(this.ui.next());return this.referenceDelegate.Ii(),r(i).next((s=>this.referenceDelegate.di(i).next((()=>s)))).toPromise().then((s=>(i.raiseOnCommittedEvent(),s)))}Ei(e,t){return x.or(Object.values(this.ai).map((r=>()=>r.containsKey(e,t))))}}class b1 extends ob{constructor(e){super(),this.currentSequenceNumber=e}}class vd{constructor(e){this.persistence=e,this.Ai=new _d,this.Ri=null}static Vi(e){return new vd(e)}get mi(){if(this.Ri)return this.Ri;throw ue(60996)}addReference(e,t,r){return this.Ai.addReference(r,t),this.mi.delete(r.toString()),x.resolve()}removeReference(e,t,r){return this.Ai.removeReference(r,t),this.mi.add(r.toString()),x.resolve()}markPotentiallyOrphaned(e,t){return this.mi.add(t.toString()),x.resolve()}removeTarget(e,t){this.Ai.zr(t.targetId).forEach((i=>this.mi.add(i.toString())));const r=this.persistence.getTargetCache();return r.getMatchingKeysForTargetId(e,t.targetId).next((i=>{i.forEach((s=>this.mi.add(s.toString())))})).next((()=>r.removeTargetData(e,t)))}Ii(){this.Ri=new Set}di(e){const t=this.persistence.getRemoteDocumentCache().newChangeBuffer();return x.forEach(this.mi,(r=>{const i=ie.fromPath(r);return this.fi(e,i).next((s=>{s||t.removeEntry(i,ce.min())}))})).next((()=>(this.Ri=null,t.apply(e))))}updateLimboDocument(e,t){return this.fi(e,t).next((r=>{r?this.mi.delete(t.toString()):this.mi.add(t.toString())}))}Pi(e){return 0}fi(e,t){return x.or([()=>x.resolve(this.Ai.containsKey(t)),()=>this.persistence.getTargetCache().containsKey(e,t),()=>this.persistence.Ei(e,t)])}}class yc{constructor(e,t){this.persistence=e,this.gi=new Ws((r=>ub(r.path)),((r,i)=>r.isEqual(i))),this.garbageCollector=p1(this,t)}static Vi(e,t){return new yc(e,t)}Ii(){}di(e){return x.resolve()}forEachTarget(e,t){return this.persistence.getTargetCache().forEachTarget(e,t)}mr(e){const t=this.yr(e);return this.persistence.getTargetCache().getTargetCount(e).next((r=>t.next((i=>r+i))))}yr(e){let t=0;return this.gr(e,(r=>{t++})).next((()=>t))}gr(e,t){return x.forEach(this.gi,((r,i)=>this.Sr(e,r,i).next((s=>s?x.resolve():t(i)))))}removeTargets(e,t,r){return this.persistence.getTargetCache().removeTargets(e,t,r)}removeOrphanedDocuments(e,t){let r=0;const i=this.persistence.getRemoteDocumentCache(),s=i.newChangeBuffer();return i.ri(e,(a=>this.Sr(e,a,t).next((l=>{l||(r++,s.removeEntry(a,ce.min()))})))).next((()=>s.apply(e))).next((()=>r))}markPotentiallyOrphaned(e,t){return this.gi.set(t,e.currentSequenceNumber),x.resolve()}removeTarget(e,t){const r=t.withSequenceNumber(e.currentSequenceNumber);return this.persistence.getTargetCache().updateTargetData(e,r)}addReference(e,t,r){return this.gi.set(r,e.currentSequenceNumber),x.resolve()}removeReference(e,t,r){return this.gi.set(r,e.currentSequenceNumber),x.resolve()}updateLimboDocument(e,t){return this.gi.set(t,e.currentSequenceNumber),x.resolve()}Pi(e){let t=e.key.toString().length;return e.isFoundDocument()&&(t+=Ql(e.data.value)),t}Sr(e,t,r){return x.or([()=>this.persistence.Ei(e,t),()=>this.persistence.getTargetCache().containsKey(e,t),()=>{const i=this.gi.get(t);return x.resolve(i!==void 0&&i>r)}])}getCacheSize(e){return this.persistence.getRemoteDocumentCache().getSize(e)}}/**
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
 */class yd{constructor(e,t,r,i){this.targetId=e,this.fromCache=t,this.Is=r,this.ds=i}static Es(e,t){let r=Le(),i=Le();for(const s of t.docChanges)switch(s.type){case 0:r=r.add(s.doc.key);break;case 1:i=i.add(s.doc.key)}return new yd(e,t.fromCache,r,i)}}/**
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
 */class S1{constructor(){this._documentReadCount=0}get documentReadCount(){return this._documentReadCount}incrementDocumentReadCount(e){this._documentReadCount+=e}}/**
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
 */class R1{constructor(){this.As=!1,this.Rs=!1,this.Vs=100,this.fs=(function(){return yT()?8:ab(Dn())>0?6:4})()}initialize(e,t){this.gs=e,this.indexManager=t,this.As=!0}getDocumentsMatchingQuery(e,t,r,i){const s={result:null};return this.ps(e,t).next((a=>{s.result=a})).next((()=>{if(!s.result)return this.ys(e,t,i,r).next((a=>{s.result=a}))})).next((()=>{if(s.result)return;const a=new S1;return this.ws(e,t,a).next((l=>{if(s.result=l,this.Rs)return this.Ss(e,t,a,l.size)}))})).next((()=>s.result))}Ss(e,t,r,i){return r.documentReadCount<this.Vs?(io()<=Pe.DEBUG&&W("QueryEngine","SDK will not create cache indexes for query:",so(t),"since it only creates cache indexes for collection contains","more than or equal to",this.Vs,"documents"),x.resolve()):(io()<=Pe.DEBUG&&W("QueryEngine","Query:",so(t),"scans",r.documentReadCount,"local documents and returns",i,"documents as results."),r.documentReadCount>this.fs*i?(io()<=Pe.DEBUG&&W("QueryEngine","The SDK decides to create cache indexes for query:",so(t),"as using cache indexes may help improve performance."),this.indexManager.createTargetIndexes(e,Jr(t))):x.resolve())}ps(e,t){if(lp(t))return x.resolve(null);let r=Jr(t);return this.indexManager.getIndexType(e,r).next((i=>i===0?null:(t.limit!==null&&i===1&&(t=gc(t,null,"F"),r=Jr(t)),this.indexManager.getDocumentsMatchingTarget(e,r).next((s=>{const a=Le(...s);return this.gs.getDocuments(e,a).next((l=>this.indexManager.getMinOffset(e,r).next((c=>{const h=this.bs(t,l);return this.Ds(t,h,a,c.readTime)?this.ps(e,gc(t,null,"F")):this.vs(e,h,t,c)}))))})))))}ys(e,t,r,i){return lp(t)||i.isEqual(ce.min())?x.resolve(null):this.gs.getDocuments(e,r).next((s=>{const a=this.bs(t,s);return this.Ds(t,a,r,i)?x.resolve(null):(io()<=Pe.DEBUG&&W("QueryEngine","Re-using previous result from %s to execute query: %s",i.toString(),so(t)),this.vs(e,a,t,nb(i,Ba)).next((l=>l)))}))}bs(e,t){let r=new Jt(Av(e));return t.forEach(((i,s)=>{Jc(e,s)&&(r=r.add(s))})),r}Ds(e,t,r,i){if(e.limit===null)return!1;if(r.size!==t.size)return!0;const s=e.limitType==="F"?t.last():t.first();return!!s&&(s.hasPendingWrites||s.version.compareTo(i)>0)}ws(e,t,r){return io()<=Pe.DEBUG&&W("QueryEngine","Using full collection scan to execute query:",so(t)),this.gs.getDocumentsMatchingQuery(e,t,ns.min(),r)}vs(e,t,r,i){return this.gs.getDocumentsMatchingQuery(e,r,i).next((s=>(t.forEach((a=>{s=s.insert(a.key,a)})),s)))}}/**
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
 */const Ed="LocalStore",C1=3e8;class P1{constructor(e,t,r,i){this.persistence=e,this.Cs=t,this.serializer=i,this.Fs=new Lt(Te),this.Ms=new Ws((s=>ud(s)),hd),this.xs=new Map,this.Os=e.getRemoteDocumentCache(),this.hi=e.getTargetCache(),this.Ti=e.getBundleCache(),this.Ns(r)}Ns(e){this.documentOverlayCache=this.persistence.getDocumentOverlayCache(e),this.indexManager=this.persistence.getIndexManager(e),this.mutationQueue=this.persistence.getMutationQueue(e,this.indexManager),this.localDocuments=new _1(this.Os,this.mutationQueue,this.documentOverlayCache,this.indexManager),this.Os.setIndexManager(this.indexManager),this.Cs.initialize(this.localDocuments,this.indexManager)}collectGarbage(e){return this.persistence.runTransaction("Collect garbage","readwrite-primary",(t=>e.collect(t,this.Fs)))}}function k1(n,e,t,r){return new P1(n,e,t,r)}async function Gv(n,e){const t=xe(n);return await t.persistence.runTransaction("Handle user change","readonly",(r=>{let i;return t.mutationQueue.getAllMutationBatches(r).next((s=>(i=s,t.Ns(e),t.mutationQueue.getAllMutationBatches(r)))).next((s=>{const a=[],l=[];let c=Le();for(const h of i){a.push(h.batchId);for(const f of h.mutations)c=c.add(f.key)}for(const h of s){l.push(h.batchId);for(const f of h.mutations)c=c.add(f.key)}return t.localDocuments.getDocuments(r,c).next((h=>({Bs:h,removedBatchIds:a,addedBatchIds:l})))}))}))}function Kv(n){const e=xe(n);return e.persistence.runTransaction("Get last remote snapshot version","readonly",(t=>e.hi.getLastRemoteSnapshotVersion(t)))}function N1(n,e){const t=xe(n),r=e.snapshotVersion;let i=t.Fs;return t.persistence.runTransaction("Apply remote event","readwrite-primary",(s=>{const a=t.Os.newChangeBuffer({trackRemovals:!0});i=t.Fs;const l=[];e.targetChanges.forEach(((f,g)=>{const _=i.get(g);if(!_)return;l.push(t.hi.removeMatchingKeys(s,f.removedDocuments,g).next((()=>t.hi.addMatchingKeys(s,f.addedDocuments,g))));let E=_.withSequenceNumber(s.currentSequenceNumber);e.targetMismatches.get(g)!==null?E=E.withResumeToken(gn.EMPTY_BYTE_STRING,ce.min()).withLastLimboFreeSnapshotVersion(ce.min()):f.resumeToken.approximateByteSize()>0&&(E=E.withResumeToken(f.resumeToken,r)),i=i.insert(g,E),(function(N,P,U){return N.resumeToken.approximateByteSize()===0||P.snapshotVersion.toMicroseconds()-N.snapshotVersion.toMicroseconds()>=C1?!0:U.addedDocuments.size+U.modifiedDocuments.size+U.removedDocuments.size>0})(_,E,f)&&l.push(t.hi.updateTargetData(s,E))}));let c=os(),h=Le();if(e.documentUpdates.forEach((f=>{e.resolvedLimboDocuments.has(f)&&l.push(t.persistence.referenceDelegate.updateLimboDocument(s,f))})),l.push(O1(s,a,e.documentUpdates).next((f=>{c=f.Ls,h=f.ks}))),!r.isEqual(ce.min())){const f=t.hi.getLastRemoteSnapshotVersion(s).next((g=>t.hi.setTargetsMetadata(s,s.currentSequenceNumber,r)));l.push(f)}return x.waitFor(l).next((()=>a.apply(s))).next((()=>t.localDocuments.getLocalViewOfDocuments(s,c,h))).next((()=>c))})).then((s=>(t.Fs=i,s)))}function O1(n,e,t){let r=Le(),i=Le();return t.forEach((s=>r=r.add(s))),e.getEntries(n,r).next((s=>{let a=os();return t.forEach(((l,c)=>{const h=s.get(l);c.isFoundDocument()!==h.isFoundDocument()&&(i=i.add(l)),c.isNoDocument()&&c.version.isEqual(ce.min())?(e.removeEntry(l,c.readTime),a=a.insert(l,c)):!h.isValidDocument()||c.version.compareTo(h.version)>0||c.version.compareTo(h.version)===0&&h.hasPendingWrites?(e.addEntry(c),a=a.insert(l,c)):W(Ed,"Ignoring outdated watch update for ",l,". Current version:",h.version," Watch version:",c.version)})),{Ls:a,ks:i}}))}function D1(n,e){const t=xe(n);return t.persistence.runTransaction("Allocate target","readwrite",(r=>{let i;return t.hi.getTargetData(r,e).next((s=>s?(i=s,x.resolve(i)):t.hi.allocateTargetId(r).next((a=>(i=new Wi(e,a,"TargetPurposeListen",r.currentSequenceNumber),t.hi.addTargetData(r,i).next((()=>i)))))))})).then((r=>{const i=t.Fs.get(r.targetId);return(i===null||r.snapshotVersion.compareTo(i.snapshotVersion)>0)&&(t.Fs=t.Fs.insert(r.targetId,r),t.Ms.set(e,r.targetId)),r}))}async function Ah(n,e,t){const r=xe(n),i=r.Fs.get(e),s=t?"readwrite":"readwrite-primary";try{t||await r.persistence.runTransaction("Release target",s,(a=>r.persistence.referenceDelegate.removeTarget(a,i)))}catch(a){if(!Yo(a))throw a;W(Ed,`Failed to update sequence numbers for target ${e}: ${a}`)}r.Fs=r.Fs.remove(e),r.Ms.delete(i.target)}function wp(n,e,t){const r=xe(n);let i=ce.min(),s=Le();return r.persistence.runTransaction("Execute query","readwrite",(a=>(function(c,h,f){const g=xe(c),_=g.Ms.get(f);return _!==void 0?x.resolve(g.Fs.get(_)):g.hi.getTargetData(h,f)})(r,a,Jr(e)).next((l=>{if(l)return i=l.lastLimboFreeSnapshotVersion,r.hi.getMatchingKeysForTargetId(a,l.targetId).next((c=>{s=c}))})).next((()=>r.Cs.getDocumentsMatchingQuery(a,e,t?i:ce.min(),t?s:Le()))).next((l=>(V1(r,Pb(e),l),{documents:l,qs:s})))))}function V1(n,e,t){let r=n.xs.get(e)||ce.min();t.forEach(((i,s)=>{s.readTime.compareTo(r)>0&&(r=s.readTime)})),n.xs.set(e,r)}class Tp{constructor(){this.activeTargetIds=Mb()}Gs(e){this.activeTargetIds=this.activeTargetIds.add(e)}zs(e){this.activeTargetIds=this.activeTargetIds.delete(e)}Ws(){const e={activeTargetIds:this.activeTargetIds.toArray(),updateTimeMs:Date.now()};return JSON.stringify(e)}}class M1{constructor(){this.Fo=new Tp,this.Mo={},this.onlineStateHandler=null,this.sequenceNumberHandler=null}addPendingMutation(e){}updateMutationState(e,t,r){}addLocalQueryTarget(e,t=!0){return t&&this.Fo.Gs(e),this.Mo[e]||"not-current"}updateQueryState(e,t,r){this.Mo[e]=t}removeLocalQueryTarget(e){this.Fo.zs(e)}isLocalQueryTarget(e){return this.Fo.activeTargetIds.has(e)}clearQueryState(e){delete this.Mo[e]}getAllActiveQueryTargets(){return this.Fo.activeTargetIds}isActiveQueryTarget(e){return this.Fo.activeTargetIds.has(e)}start(){return this.Fo=new Tp,Promise.resolve()}handleUserChange(e,t,r){}setOnlineState(e){}shutdown(){}writeSequenceNumber(e){}notifyBundleLoaded(e){}}/**
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
 */class x1{xo(e){}shutdown(){}}/**
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
 */const Ip="ConnectivityMonitor";class Ap{constructor(){this.Oo=()=>this.No(),this.Bo=()=>this.Lo(),this.ko=[],this.qo()}xo(e){this.ko.push(e)}shutdown(){window.removeEventListener("online",this.Oo),window.removeEventListener("offline",this.Bo)}qo(){window.addEventListener("online",this.Oo),window.addEventListener("offline",this.Bo)}No(){W(Ip,"Network connectivity changed: AVAILABLE");for(const e of this.ko)e(0)}Lo(){W(Ip,"Network connectivity changed: UNAVAILABLE");for(const e of this.ko)e(1)}static C(){return typeof window<"u"&&window.addEventListener!==void 0&&window.removeEventListener!==void 0}}/**
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
 */let Ml=null;function bh(){return Ml===null?Ml=(function(){return 268435456+Math.round(2147483648*Math.random())})():Ml++,"0x"+Ml.toString(16)}/**
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
 */const Mu="RestConnection",L1={BatchGetDocuments:"batchGet",Commit:"commit",RunQuery:"runQuery",RunAggregationQuery:"runAggregationQuery"};class F1{get Qo(){return!1}constructor(e){this.databaseInfo=e,this.databaseId=e.databaseId;const t=e.ssl?"https":"http",r=encodeURIComponent(this.databaseId.projectId),i=encodeURIComponent(this.databaseId.database);this.$o=t+"://"+e.host,this.Uo=`projects/${r}/databases/${i}`,this.Ko=this.databaseId.database===fc?`project_id=${r}`:`project_id=${r}&database_id=${i}`}Wo(e,t,r,i,s){const a=bh(),l=this.Go(e,t.toUriEncodedString());W(Mu,`Sending RPC '${e}' ${a}:`,l,r);const c={"google-cloud-resource-prefix":this.Uo,"x-goog-request-params":this.Ko};this.zo(c,i,s);const{host:h}=new URL(l),f=zs(h);return this.jo(e,l,c,r,f).then((g=>(W(Mu,`Received RPC '${e}' ${a}: `,g),g)),(g=>{throw qs(Mu,`RPC '${e}' ${a} failed with error: `,g,"url: ",l,"request:",r),g}))}Jo(e,t,r,i,s,a){return this.Wo(e,t,r,i,s)}zo(e,t,r){e["X-Goog-Api-Client"]=(function(){return"gl-js/ fire/"+Qo})(),e["Content-Type"]="text/plain",this.databaseInfo.appId&&(e["X-Firebase-GMPID"]=this.databaseInfo.appId),t&&t.headers.forEach(((i,s)=>e[s]=i)),r&&r.headers.forEach(((i,s)=>e[s]=i))}Go(e,t){const r=L1[e];return`${this.$o}/v1/${t}:${r}`}terminate(){}}/**
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
 */class U1{constructor(e){this.Ho=e.Ho,this.Yo=e.Yo}Zo(e){this.Xo=e}e_(e){this.t_=e}n_(e){this.r_=e}onMessage(e){this.i_=e}close(){this.Yo()}send(e){this.Ho(e)}s_(){this.Xo()}o_(){this.t_()}__(e){this.r_(e)}a_(e){this.i_(e)}}/**
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
 */const Sn="WebChannelConnection";class $1 extends F1{constructor(e){super(e),this.u_=[],this.forceLongPolling=e.forceLongPolling,this.autoDetectLongPolling=e.autoDetectLongPolling,this.useFetchStreams=e.useFetchStreams,this.longPollingOptions=e.longPollingOptions}jo(e,t,r,i,s){const a=bh();return new Promise(((l,c)=>{const h=new X_;h.setWithCredentials(!0),h.listenOnce(Z_.COMPLETE,(()=>{try{switch(h.getLastErrorCode()){case Kl.NO_ERROR:const g=h.getResponseJson();W(Sn,`XHR for RPC '${e}' ${a} received:`,JSON.stringify(g)),l(g);break;case Kl.TIMEOUT:W(Sn,`RPC '${e}' ${a} timed out`),c(new H(F.DEADLINE_EXCEEDED,"Request time out"));break;case Kl.HTTP_ERROR:const _=h.getStatus();if(W(Sn,`RPC '${e}' ${a} failed with status:`,_,"response text:",h.getResponseText()),_>0){let E=h.getResponseJson();Array.isArray(E)&&(E=E[0]);const R=E==null?void 0:E.error;if(R&&R.status&&R.message){const N=(function(U){const B=U.toLowerCase().replace(/_/g,"-");return Object.values(F).indexOf(B)>=0?B:F.UNKNOWN})(R.status);c(new H(N,R.message))}else c(new H(F.UNKNOWN,"Server responded with status "+h.getStatus()))}else c(new H(F.UNAVAILABLE,"Connection failed."));break;default:ue(9055,{c_:e,streamId:a,l_:h.getLastErrorCode(),h_:h.getLastError()})}}finally{W(Sn,`RPC '${e}' ${a} completed.`)}}));const f=JSON.stringify(i);W(Sn,`RPC '${e}' ${a} sending request:`,i),h.send(t,"POST",f,r,15)}))}P_(e,t,r){const i=bh(),s=[this.$o,"/","google.firestore.v1.Firestore","/",e,"/channel"],a=nv(),l=tv(),c={httpSessionIdParam:"gsessionid",initMessageHeaders:{},messageUrlParams:{database:`projects/${this.databaseId.projectId}/databases/${this.databaseId.database}`},sendRawJson:!0,supportsCrossDomainXhr:!0,internalChannelParams:{forwardChannelRequestTimeoutMs:6e5},forceLongPolling:this.forceLongPolling,detectBufferingProxy:this.autoDetectLongPolling},h=this.longPollingOptions.timeoutSeconds;h!==void 0&&(c.longPollingTimeout=Math.round(1e3*h)),this.useFetchStreams&&(c.useFetchStreams=!0),this.zo(c.initMessageHeaders,t,r),c.encodeInitMessageHeaders=!0;const f=s.join("");W(Sn,`Creating RPC '${e}' stream ${i}: ${f}`,c);const g=a.createWebChannel(f,c);this.T_(g);let _=!1,E=!1;const R=new U1({Ho:P=>{E?W(Sn,`Not sending because RPC '${e}' stream ${i} is closed:`,P):(_||(W(Sn,`Opening RPC '${e}' stream ${i} transport.`),g.open(),_=!0),W(Sn,`RPC '${e}' stream ${i} sending:`,P),g.send(P))},Yo:()=>g.close()}),N=(P,U,B)=>{P.listen(U,(z=>{try{B(z)}catch(J){setTimeout((()=>{throw J}),0)}}))};return N(g,Aa.EventType.OPEN,(()=>{E||(W(Sn,`RPC '${e}' stream ${i} transport opened.`),R.s_())})),N(g,Aa.EventType.CLOSE,(()=>{E||(E=!0,W(Sn,`RPC '${e}' stream ${i} transport closed`),R.__(),this.I_(g))})),N(g,Aa.EventType.ERROR,(P=>{E||(E=!0,qs(Sn,`RPC '${e}' stream ${i} transport errored. Name:`,P.name,"Message:",P.message),R.__(new H(F.UNAVAILABLE,"The operation could not be completed")))})),N(g,Aa.EventType.MESSAGE,(P=>{var U;if(!E){const B=P.data[0];Tt(!!B,16349);const z=B,J=(z==null?void 0:z.error)||((U=z[0])===null||U===void 0?void 0:U.error);if(J){W(Sn,`RPC '${e}' stream ${i} received error:`,J);const qe=J.status;let Y=(function(w){const A=qt[w];if(A!==void 0)return Dv(A)})(qe),I=J.message;Y===void 0&&(Y=F.INTERNAL,I="Unknown error status: "+qe+" with message "+J.message),E=!0,R.__(new H(Y,I)),g.close()}else W(Sn,`RPC '${e}' stream ${i} received:`,B),R.a_(B)}})),N(l,ev.STAT_EVENT,(P=>{P.stat===dh.PROXY?W(Sn,`RPC '${e}' stream ${i} detected buffering proxy`):P.stat===dh.NOPROXY&&W(Sn,`RPC '${e}' stream ${i} detected no buffering proxy`)})),setTimeout((()=>{R.o_()}),0),R}terminate(){this.u_.forEach((e=>e.close())),this.u_=[]}T_(e){this.u_.push(e)}I_(e){this.u_=this.u_.filter((t=>t===e))}}function xu(){return typeof document<"u"?document:null}/**
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
 */function tu(n){return new Jb(n,!0)}/**
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
 */class Qv{constructor(e,t,r=1e3,i=1.5,s=6e4){this.Fi=e,this.timerId=t,this.d_=r,this.E_=i,this.A_=s,this.R_=0,this.V_=null,this.m_=Date.now(),this.reset()}reset(){this.R_=0}f_(){this.R_=this.A_}g_(e){this.cancel();const t=Math.floor(this.R_+this.p_()),r=Math.max(0,Date.now()-this.m_),i=Math.max(0,t-r);i>0&&W("ExponentialBackoff",`Backing off for ${i} ms (base delay: ${this.R_} ms, delay with jitter: ${t} ms, last attempt: ${r} ms ago)`),this.V_=this.Fi.enqueueAfterDelay(this.timerId,i,(()=>(this.m_=Date.now(),e()))),this.R_*=this.E_,this.R_<this.d_&&(this.R_=this.d_),this.R_>this.A_&&(this.R_=this.A_)}y_(){this.V_!==null&&(this.V_.skipDelay(),this.V_=null)}cancel(){this.V_!==null&&(this.V_.cancel(),this.V_=null)}p_(){return(Math.random()-.5)*this.R_}}/**
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
 */const bp="PersistentStream";class B1{constructor(e,t,r,i,s,a,l,c){this.Fi=e,this.w_=r,this.S_=i,this.connection=s,this.authCredentialsProvider=a,this.appCheckCredentialsProvider=l,this.listener=c,this.state=0,this.b_=0,this.D_=null,this.v_=null,this.stream=null,this.C_=0,this.F_=new Qv(e,t)}M_(){return this.state===1||this.state===5||this.x_()}x_(){return this.state===2||this.state===3}start(){this.C_=0,this.state!==4?this.auth():this.O_()}async stop(){this.M_()&&await this.close(0)}N_(){this.state=0,this.F_.reset()}B_(){this.x_()&&this.D_===null&&(this.D_=this.Fi.enqueueAfterDelay(this.w_,6e4,(()=>this.L_())))}k_(e){this.q_(),this.stream.send(e)}async L_(){if(this.x_())return this.close(0)}q_(){this.D_&&(this.D_.cancel(),this.D_=null)}Q_(){this.v_&&(this.v_.cancel(),this.v_=null)}async close(e,t){this.q_(),this.Q_(),this.F_.cancel(),this.b_++,e!==4?this.F_.reset():t&&t.code===F.RESOURCE_EXHAUSTED?(Ai(t.toString()),Ai("Using maximum backoff delay to prevent overloading the backend."),this.F_.f_()):t&&t.code===F.UNAUTHENTICATED&&this.state!==3&&(this.authCredentialsProvider.invalidateToken(),this.appCheckCredentialsProvider.invalidateToken()),this.stream!==null&&(this.U_(),this.stream.close(),this.stream=null),this.state=e,await this.listener.n_(t)}U_(){}auth(){this.state=1;const e=this.K_(this.b_),t=this.b_;Promise.all([this.authCredentialsProvider.getToken(),this.appCheckCredentialsProvider.getToken()]).then((([r,i])=>{this.b_===t&&this.W_(r,i)}),(r=>{e((()=>{const i=new H(F.UNKNOWN,"Fetching auth token failed: "+r.message);return this.G_(i)}))}))}W_(e,t){const r=this.K_(this.b_);this.stream=this.z_(e,t),this.stream.Zo((()=>{r((()=>this.listener.Zo()))})),this.stream.e_((()=>{r((()=>(this.state=2,this.v_=this.Fi.enqueueAfterDelay(this.S_,1e4,(()=>(this.x_()&&(this.state=3),Promise.resolve()))),this.listener.e_())))})),this.stream.n_((i=>{r((()=>this.G_(i)))})),this.stream.onMessage((i=>{r((()=>++this.C_==1?this.j_(i):this.onNext(i)))}))}O_(){this.state=5,this.F_.g_((async()=>{this.state=0,this.start()}))}G_(e){return W(bp,`close with error: ${e}`),this.stream=null,this.close(4,e)}K_(e){return t=>{this.Fi.enqueueAndForget((()=>this.b_===e?t():(W(bp,"stream callback skipped by getCloseGuardedDispatcher."),Promise.resolve())))}}}class q1 extends B1{constructor(e,t,r,i,s,a){super(e,"listen_stream_connection_backoff","listen_stream_idle","health_check_timeout",t,r,i,a),this.serializer=s}z_(e,t){return this.connection.P_("Listen",e,t)}j_(e){return this.onNext(e)}onNext(e){this.F_.reset();const t=Zb(this.serializer,e),r=(function(s){if(!("targetChange"in s))return ce.min();const a=s.targetChange;return a.targetIds&&a.targetIds.length?ce.min():a.readTime?_o(a.readTime):ce.min()})(e);return this.listener.J_(t,r)}H_(e){const t={};t.database=_p(this.serializer),t.addTarget=(function(s,a){let l;const c=a.target;if(l=_h(c)?{documents:e1(s,c)}:{query:t1(s,c).Vt},l.targetId=a.targetId,a.resumeToken.approximateByteSize()>0){l.resumeToken=xv(s,a.resumeToken);const h=wh(s,a.expectedCount);h!==null&&(l.expectedCount=h)}else if(a.snapshotVersion.compareTo(ce.min())>0){l.readTime=Th(s,a.snapshotVersion.toTimestamp());const h=wh(s,a.expectedCount);h!==null&&(l.expectedCount=h)}return l})(this.serializer,e);const r=r1(this.serializer,e);r&&(t.labels=r),this.k_(t)}Y_(e){const t={};t.database=_p(this.serializer),t.removeTarget=e,this.k_(t)}}/**
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
 */class z1{}class j1 extends z1{constructor(e,t,r,i){super(),this.authCredentials=e,this.appCheckCredentials=t,this.connection=r,this.serializer=i,this.ra=!1}ia(){if(this.ra)throw new H(F.FAILED_PRECONDITION,"The client has already been terminated.")}Wo(e,t,r,i){return this.ia(),Promise.all([this.authCredentials.getToken(),this.appCheckCredentials.getToken()]).then((([s,a])=>this.connection.Wo(e,Ih(t,r),i,s,a))).catch((s=>{throw s.name==="FirebaseError"?(s.code===F.UNAUTHENTICATED&&(this.authCredentials.invalidateToken(),this.appCheckCredentials.invalidateToken()),s):new H(F.UNKNOWN,s.toString())}))}Jo(e,t,r,i,s){return this.ia(),Promise.all([this.authCredentials.getToken(),this.appCheckCredentials.getToken()]).then((([a,l])=>this.connection.Jo(e,Ih(t,r),i,a,l,s))).catch((a=>{throw a.name==="FirebaseError"?(a.code===F.UNAUTHENTICATED&&(this.authCredentials.invalidateToken(),this.appCheckCredentials.invalidateToken()),a):new H(F.UNKNOWN,a.toString())}))}terminate(){this.ra=!0,this.connection.terminate()}}class H1{constructor(e,t){this.asyncQueue=e,this.onlineStateHandler=t,this.state="Unknown",this.sa=0,this.oa=null,this._a=!0}aa(){this.sa===0&&(this.ua("Unknown"),this.oa=this.asyncQueue.enqueueAfterDelay("online_state_timeout",1e4,(()=>(this.oa=null,this.ca("Backend didn't respond within 10 seconds."),this.ua("Offline"),Promise.resolve()))))}la(e){this.state==="Online"?this.ua("Unknown"):(this.sa++,this.sa>=1&&(this.ha(),this.ca(`Connection failed 1 times. Most recent error: ${e.toString()}`),this.ua("Offline")))}set(e){this.ha(),this.sa=0,e==="Online"&&(this._a=!1),this.ua(e)}ua(e){e!==this.state&&(this.state=e,this.onlineStateHandler(e))}ca(e){const t=`Could not reach Cloud Firestore backend. ${e}
This typically indicates that your device does not have a healthy Internet connection at the moment. The client will operate in offline mode until it is able to successfully connect to the backend.`;this._a?(Ai(t),this._a=!1):W("OnlineStateTracker",t)}ha(){this.oa!==null&&(this.oa.cancel(),this.oa=null)}}/**
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
 */const Uo="RemoteStore";class W1{constructor(e,t,r,i,s){this.localStore=e,this.datastore=t,this.asyncQueue=r,this.remoteSyncer={},this.Pa=[],this.Ta=new Map,this.Ia=new Set,this.da=[],this.Ea=s,this.Ea.xo((a=>{r.enqueueAndForget((async()=>{al(this)&&(W(Uo,"Restarting streams for network reachability change."),await(async function(c){const h=xe(c);h.Ia.add(4),await ol(h),h.Aa.set("Unknown"),h.Ia.delete(4),await nu(h)})(this))}))})),this.Aa=new H1(r,i)}}async function nu(n){if(al(n))for(const e of n.da)await e(!0)}async function ol(n){for(const e of n.da)await e(!1)}function Yv(n,e){const t=xe(n);t.Ta.has(e.targetId)||(t.Ta.set(e.targetId,e),Ad(t)?Id(t):Xo(t).x_()&&Td(t,e))}function wd(n,e){const t=xe(n),r=Xo(t);t.Ta.delete(e),r.x_()&&Jv(t,e),t.Ta.size===0&&(r.x_()?r.B_():al(t)&&t.Aa.set("Unknown"))}function Td(n,e){if(n.Ra.$e(e.targetId),e.resumeToken.approximateByteSize()>0||e.snapshotVersion.compareTo(ce.min())>0){const t=n.remoteSyncer.getRemoteKeysForTarget(e.targetId).size;e=e.withExpectedCount(t)}Xo(n).H_(e)}function Jv(n,e){n.Ra.$e(e),Xo(n).Y_(e)}function Id(n){n.Ra=new Gb({getRemoteKeysForTarget:e=>n.remoteSyncer.getRemoteKeysForTarget(e),Et:e=>n.Ta.get(e)||null,lt:()=>n.datastore.serializer.databaseId}),Xo(n).start(),n.Aa.aa()}function Ad(n){return al(n)&&!Xo(n).M_()&&n.Ta.size>0}function al(n){return xe(n).Ia.size===0}function Xv(n){n.Ra=void 0}async function G1(n){n.Aa.set("Online")}async function K1(n){n.Ta.forEach(((e,t)=>{Td(n,e)}))}async function Q1(n,e){Xv(n),Ad(n)?(n.Aa.la(e),Id(n)):n.Aa.set("Unknown")}async function Y1(n,e,t){if(n.Aa.set("Online"),e instanceof Mv&&e.state===2&&e.cause)try{await(async function(i,s){const a=s.cause;for(const l of s.targetIds)i.Ta.has(l)&&(await i.remoteSyncer.rejectListen(l,a),i.Ta.delete(l),i.Ra.removeTarget(l))})(n,e)}catch(r){W(Uo,"Failed to remove targets %s: %s ",e.targetIds.join(","),r),await Sp(n,r)}else if(e instanceof Jl?n.Ra.Ye(e):e instanceof Vv?n.Ra.it(e):n.Ra.et(e),!t.isEqual(ce.min()))try{const r=await Kv(n.localStore);t.compareTo(r)>=0&&await(function(s,a){const l=s.Ra.Pt(a);return l.targetChanges.forEach(((c,h)=>{if(c.resumeToken.approximateByteSize()>0){const f=s.Ta.get(h);f&&s.Ta.set(h,f.withResumeToken(c.resumeToken,a))}})),l.targetMismatches.forEach(((c,h)=>{const f=s.Ta.get(c);if(!f)return;s.Ta.set(c,f.withResumeToken(gn.EMPTY_BYTE_STRING,f.snapshotVersion)),Jv(s,c);const g=new Wi(f.target,c,h,f.sequenceNumber);Td(s,g)})),s.remoteSyncer.applyRemoteEvent(l)})(n,t)}catch(r){W(Uo,"Failed to raise snapshot:",r),await Sp(n,r)}}async function Sp(n,e,t){if(!Yo(e))throw e;n.Ia.add(1),await ol(n),n.Aa.set("Offline"),t||(t=()=>Kv(n.localStore)),n.asyncQueue.enqueueRetryable((async()=>{W(Uo,"Retrying IndexedDB access"),await t(),n.Ia.delete(1),await nu(n)}))}async function Rp(n,e){const t=xe(n);t.asyncQueue.verifyOperationInProgress(),W(Uo,"RemoteStore received new credentials");const r=al(t);t.Ia.add(3),await ol(t),r&&t.Aa.set("Unknown"),await t.remoteSyncer.handleCredentialChange(e),t.Ia.delete(3),await nu(t)}async function J1(n,e){const t=xe(n);e?(t.Ia.delete(2),await nu(t)):e||(t.Ia.add(2),await ol(t),t.Aa.set("Unknown"))}function Xo(n){return n.Va||(n.Va=(function(t,r,i){const s=xe(t);return s.ia(),new q1(r,s.connection,s.authCredentials,s.appCheckCredentials,s.serializer,i)})(n.datastore,n.asyncQueue,{Zo:G1.bind(null,n),e_:K1.bind(null,n),n_:Q1.bind(null,n),J_:Y1.bind(null,n)}),n.da.push((async e=>{e?(n.Va.N_(),Ad(n)?Id(n):n.Aa.set("Unknown")):(await n.Va.stop(),Xv(n))}))),n.Va}/**
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
 */class bd{constructor(e,t,r,i,s){this.asyncQueue=e,this.timerId=t,this.targetTimeMs=r,this.op=i,this.removalCallback=s,this.deferred=new Vs,this.then=this.deferred.promise.then.bind(this.deferred.promise),this.deferred.promise.catch((a=>{}))}get promise(){return this.deferred.promise}static createAndSchedule(e,t,r,i,s){const a=Date.now()+r,l=new bd(e,t,a,i,s);return l.start(r),l}start(e){this.timerHandle=setTimeout((()=>this.handleDelayElapsed()),e)}skipDelay(){return this.handleDelayElapsed()}cancel(e){this.timerHandle!==null&&(this.clearTimeout(),this.deferred.reject(new H(F.CANCELLED,"Operation cancelled"+(e?": "+e:""))))}handleDelayElapsed(){this.asyncQueue.enqueueAndForget((()=>this.timerHandle!==null?(this.clearTimeout(),this.op().then((e=>this.deferred.resolve(e)))):Promise.resolve()))}clearTimeout(){this.timerHandle!==null&&(this.removalCallback(this),clearTimeout(this.timerHandle),this.timerHandle=null)}}function Zv(n,e){if(Ai("AsyncQueue",`${e}: ${n}`),Yo(n))return new H(F.UNAVAILABLE,`${e}: ${n}`);throw n}/**
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
 */class vo{static emptySet(e){return new vo(e.comparator)}constructor(e){this.comparator=e?(t,r)=>e(t,r)||ie.comparator(t.key,r.key):(t,r)=>ie.comparator(t.key,r.key),this.keyedMap=ba(),this.sortedSet=new Lt(this.comparator)}has(e){return this.keyedMap.get(e)!=null}get(e){return this.keyedMap.get(e)}first(){return this.sortedSet.minKey()}last(){return this.sortedSet.maxKey()}isEmpty(){return this.sortedSet.isEmpty()}indexOf(e){const t=this.keyedMap.get(e);return t?this.sortedSet.indexOf(t):-1}get size(){return this.sortedSet.size}forEach(e){this.sortedSet.inorderTraversal(((t,r)=>(e(t),!1)))}add(e){const t=this.delete(e.key);return t.copy(t.keyedMap.insert(e.key,e),t.sortedSet.insert(e,null))}delete(e){const t=this.get(e);return t?this.copy(this.keyedMap.remove(e),this.sortedSet.remove(t)):this}isEqual(e){if(!(e instanceof vo)||this.size!==e.size)return!1;const t=this.sortedSet.getIterator(),r=e.sortedSet.getIterator();for(;t.hasNext();){const i=t.getNext().key,s=r.getNext().key;if(!i.isEqual(s))return!1}return!0}toString(){const e=[];return this.forEach((t=>{e.push(t.toString())})),e.length===0?"DocumentSet ()":`DocumentSet (
  `+e.join(`  
`)+`
)`}copy(e,t){const r=new vo;return r.comparator=this.comparator,r.keyedMap=e,r.sortedSet=t,r}}/**
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
 */class Cp{constructor(){this.fa=new Lt(ie.comparator)}track(e){const t=e.doc.key,r=this.fa.get(t);r?e.type!==0&&r.type===3?this.fa=this.fa.insert(t,e):e.type===3&&r.type!==1?this.fa=this.fa.insert(t,{type:r.type,doc:e.doc}):e.type===2&&r.type===2?this.fa=this.fa.insert(t,{type:2,doc:e.doc}):e.type===2&&r.type===0?this.fa=this.fa.insert(t,{type:0,doc:e.doc}):e.type===1&&r.type===0?this.fa=this.fa.remove(t):e.type===1&&r.type===2?this.fa=this.fa.insert(t,{type:1,doc:r.doc}):e.type===0&&r.type===1?this.fa=this.fa.insert(t,{type:2,doc:e.doc}):ue(63341,{At:e,ga:r}):this.fa=this.fa.insert(t,e)}pa(){const e=[];return this.fa.inorderTraversal(((t,r)=>{e.push(r)})),e}}class $o{constructor(e,t,r,i,s,a,l,c,h){this.query=e,this.docs=t,this.oldDocs=r,this.docChanges=i,this.mutatedKeys=s,this.fromCache=a,this.syncStateChanged=l,this.excludesMetadataChanges=c,this.hasCachedResults=h}static fromInitialDocuments(e,t,r,i,s){const a=[];return t.forEach((l=>{a.push({type:0,doc:l})})),new $o(e,t,vo.emptySet(t),a,r,i,!0,!1,s)}get hasPendingWrites(){return!this.mutatedKeys.isEmpty()}isEqual(e){if(!(this.fromCache===e.fromCache&&this.hasCachedResults===e.hasCachedResults&&this.syncStateChanged===e.syncStateChanged&&this.mutatedKeys.isEqual(e.mutatedKeys)&&Yc(this.query,e.query)&&this.docs.isEqual(e.docs)&&this.oldDocs.isEqual(e.oldDocs)))return!1;const t=this.docChanges,r=e.docChanges;if(t.length!==r.length)return!1;for(let i=0;i<t.length;i++)if(t[i].type!==r[i].type||!t[i].doc.isEqual(r[i].doc))return!1;return!0}}/**
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
 */class X1{constructor(){this.ya=void 0,this.wa=[]}Sa(){return this.wa.some((e=>e.ba()))}}class Z1{constructor(){this.queries=Pp(),this.onlineState="Unknown",this.Da=new Set}terminate(){(function(t,r){const i=xe(t),s=i.queries;i.queries=Pp(),s.forEach(((a,l)=>{for(const c of l.wa)c.onError(r)}))})(this,new H(F.ABORTED,"Firestore shutting down"))}}function Pp(){return new Ws((n=>Iv(n)),Yc)}async function eS(n,e){const t=xe(n);let r=3;const i=e.query;let s=t.queries.get(i);s?!s.Sa()&&e.ba()&&(r=2):(s=new X1,r=e.ba()?0:1);try{switch(r){case 0:s.ya=await t.onListen(i,!0);break;case 1:s.ya=await t.onListen(i,!1);break;case 2:await t.onFirstRemoteStoreListen(i)}}catch(a){const l=Zv(a,`Initialization of query '${so(e.query)}' failed`);return void e.onError(l)}t.queries.set(i,s),s.wa.push(e),e.va(t.onlineState),s.ya&&e.Ca(s.ya)&&Sd(t)}async function tS(n,e){const t=xe(n),r=e.query;let i=3;const s=t.queries.get(r);if(s){const a=s.wa.indexOf(e);a>=0&&(s.wa.splice(a,1),s.wa.length===0?i=e.ba()?0:1:!s.Sa()&&e.ba()&&(i=2))}switch(i){case 0:return t.queries.delete(r),t.onUnlisten(r,!0);case 1:return t.queries.delete(r),t.onUnlisten(r,!1);case 2:return t.onLastRemoteStoreUnlisten(r);default:return}}function nS(n,e){const t=xe(n);let r=!1;for(const i of e){const s=i.query,a=t.queries.get(s);if(a){for(const l of a.wa)l.Ca(i)&&(r=!0);a.ya=i}}r&&Sd(t)}function rS(n,e,t){const r=xe(n),i=r.queries.get(e);if(i)for(const s of i.wa)s.onError(t);r.queries.delete(e)}function Sd(n){n.Da.forEach((e=>{e.next()}))}var Sh,kp;(kp=Sh||(Sh={})).Fa="default",kp.Cache="cache";class iS{constructor(e,t,r){this.query=e,this.Ma=t,this.xa=!1,this.Oa=null,this.onlineState="Unknown",this.options=r||{}}Ca(e){if(!this.options.includeMetadataChanges){const r=[];for(const i of e.docChanges)i.type!==3&&r.push(i);e=new $o(e.query,e.docs,e.oldDocs,r,e.mutatedKeys,e.fromCache,e.syncStateChanged,!0,e.hasCachedResults)}let t=!1;return this.xa?this.Na(e)&&(this.Ma.next(e),t=!0):this.Ba(e,this.onlineState)&&(this.La(e),t=!0),this.Oa=e,t}onError(e){this.Ma.error(e)}va(e){this.onlineState=e;let t=!1;return this.Oa&&!this.xa&&this.Ba(this.Oa,e)&&(this.La(this.Oa),t=!0),t}Ba(e,t){if(!e.fromCache||!this.ba())return!0;const r=t!=="Offline";return(!this.options.ka||!r)&&(!e.docs.isEmpty()||e.hasCachedResults||t==="Offline")}Na(e){if(e.docChanges.length>0)return!0;const t=this.Oa&&this.Oa.hasPendingWrites!==e.hasPendingWrites;return!(!e.syncStateChanged&&!t)&&this.options.includeMetadataChanges===!0}La(e){e=$o.fromInitialDocuments(e.query,e.docs,e.mutatedKeys,e.fromCache,e.hasCachedResults),this.xa=!0,this.Ma.next(e)}ba(){return this.options.source!==Sh.Cache}}/**
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
 */class ey{constructor(e){this.key=e}}class ty{constructor(e){this.key=e}}class sS{constructor(e,t){this.query=e,this.Ha=t,this.Ya=null,this.hasCachedResults=!1,this.current=!1,this.Za=Le(),this.mutatedKeys=Le(),this.Xa=Av(e),this.eu=new vo(this.Xa)}get tu(){return this.Ha}nu(e,t){const r=t?t.ru:new Cp,i=t?t.eu:this.eu;let s=t?t.mutatedKeys:this.mutatedKeys,a=i,l=!1;const c=this.query.limitType==="F"&&i.size===this.query.limit?i.last():null,h=this.query.limitType==="L"&&i.size===this.query.limit?i.first():null;if(e.inorderTraversal(((f,g)=>{const _=i.get(f),E=Jc(this.query,g)?g:null,R=!!_&&this.mutatedKeys.has(_.key),N=!!E&&(E.hasLocalMutations||this.mutatedKeys.has(E.key)&&E.hasCommittedMutations);let P=!1;_&&E?_.data.isEqual(E.data)?R!==N&&(r.track({type:3,doc:E}),P=!0):this.iu(_,E)||(r.track({type:2,doc:E}),P=!0,(c&&this.Xa(E,c)>0||h&&this.Xa(E,h)<0)&&(l=!0)):!_&&E?(r.track({type:0,doc:E}),P=!0):_&&!E&&(r.track({type:1,doc:_}),P=!0,(c||h)&&(l=!0)),P&&(E?(a=a.add(E),s=N?s.add(f):s.delete(f)):(a=a.delete(f),s=s.delete(f)))})),this.query.limit!==null)for(;a.size>this.query.limit;){const f=this.query.limitType==="F"?a.last():a.first();a=a.delete(f.key),s=s.delete(f.key),r.track({type:1,doc:f})}return{eu:a,ru:r,Ds:l,mutatedKeys:s}}iu(e,t){return e.hasLocalMutations&&t.hasCommittedMutations&&!t.hasLocalMutations}applyChanges(e,t,r,i){const s=this.eu;this.eu=e.eu,this.mutatedKeys=e.mutatedKeys;const a=e.ru.pa();a.sort(((f,g)=>(function(E,R){const N=P=>{switch(P){case 0:return 1;case 2:case 3:return 2;case 1:return 0;default:return ue(20277,{At:P})}};return N(E)-N(R)})(f.type,g.type)||this.Xa(f.doc,g.doc))),this.su(r),i=i!=null&&i;const l=t&&!i?this.ou():[],c=this.Za.size===0&&this.current&&!i?1:0,h=c!==this.Ya;return this.Ya=c,a.length!==0||h?{snapshot:new $o(this.query,e.eu,s,a,e.mutatedKeys,c===0,h,!1,!!r&&r.resumeToken.approximateByteSize()>0),_u:l}:{_u:l}}va(e){return this.current&&e==="Offline"?(this.current=!1,this.applyChanges({eu:this.eu,ru:new Cp,mutatedKeys:this.mutatedKeys,Ds:!1},!1)):{_u:[]}}au(e){return!this.Ha.has(e)&&!!this.eu.has(e)&&!this.eu.get(e).hasLocalMutations}su(e){e&&(e.addedDocuments.forEach((t=>this.Ha=this.Ha.add(t))),e.modifiedDocuments.forEach((t=>{})),e.removedDocuments.forEach((t=>this.Ha=this.Ha.delete(t))),this.current=e.current)}ou(){if(!this.current)return[];const e=this.Za;this.Za=Le(),this.eu.forEach((r=>{this.au(r.key)&&(this.Za=this.Za.add(r.key))}));const t=[];return e.forEach((r=>{this.Za.has(r)||t.push(new ty(r))})),this.Za.forEach((r=>{e.has(r)||t.push(new ey(r))})),t}uu(e){this.Ha=e.qs,this.Za=Le();const t=this.nu(e.documents);return this.applyChanges(t,!0)}cu(){return $o.fromInitialDocuments(this.query,this.eu,this.mutatedKeys,this.Ya===0,this.hasCachedResults)}}const Rd="SyncEngine";class oS{constructor(e,t,r){this.query=e,this.targetId=t,this.view=r}}class aS{constructor(e){this.key=e,this.lu=!1}}class lS{constructor(e,t,r,i,s,a){this.localStore=e,this.remoteStore=t,this.eventManager=r,this.sharedClientState=i,this.currentUser=s,this.maxConcurrentLimboResolutions=a,this.hu={},this.Pu=new Ws((l=>Iv(l)),Yc),this.Tu=new Map,this.Iu=new Set,this.du=new Lt(ie.comparator),this.Eu=new Map,this.Au=new _d,this.Ru={},this.Vu=new Map,this.mu=Fo.ur(),this.onlineState="Unknown",this.fu=void 0}get isPrimaryClient(){return this.fu===!0}}async function cS(n,e,t=!0){const r=oy(n);let i;const s=r.Pu.get(e);return s?(r.sharedClientState.addLocalQueryTarget(s.targetId),i=s.view.cu()):i=await ny(r,e,t,!0),i}async function uS(n,e){const t=oy(n);await ny(t,e,!0,!1)}async function ny(n,e,t,r){const i=await D1(n.localStore,Jr(e)),s=i.targetId,a=n.sharedClientState.addLocalQueryTarget(s,t);let l;return r&&(l=await hS(n,e,s,a==="current",i.resumeToken)),n.isPrimaryClient&&t&&Yv(n.remoteStore,i),l}async function hS(n,e,t,r,i){n.gu=(g,_,E)=>(async function(N,P,U,B){let z=P.view.nu(U);z.Ds&&(z=await wp(N.localStore,P.query,!1).then((({documents:I})=>P.view.nu(I,z))));const J=B&&B.targetChanges.get(P.targetId),qe=B&&B.targetMismatches.get(P.targetId)!=null,Y=P.view.applyChanges(z,N.isPrimaryClient,J,qe);return Op(N,P.targetId,Y._u),Y.snapshot})(n,g,_,E);const s=await wp(n.localStore,e,!0),a=new sS(e,s.qs),l=a.nu(s.documents),c=sl.createSynthesizedTargetChangeForCurrentChange(t,r&&n.onlineState!=="Offline",i),h=a.applyChanges(l,n.isPrimaryClient,c);Op(n,t,h._u);const f=new oS(e,t,a);return n.Pu.set(e,f),n.Tu.has(t)?n.Tu.get(t).push(e):n.Tu.set(t,[e]),h.snapshot}async function dS(n,e,t){const r=xe(n),i=r.Pu.get(e),s=r.Tu.get(i.targetId);if(s.length>1)return r.Tu.set(i.targetId,s.filter((a=>!Yc(a,e)))),void r.Pu.delete(e);r.isPrimaryClient?(r.sharedClientState.removeLocalQueryTarget(i.targetId),r.sharedClientState.isActiveQueryTarget(i.targetId)||await Ah(r.localStore,i.targetId,!1).then((()=>{r.sharedClientState.clearQueryState(i.targetId),t&&wd(r.remoteStore,i.targetId),Rh(r,i.targetId)})).catch(Hc)):(Rh(r,i.targetId),await Ah(r.localStore,i.targetId,!0))}async function fS(n,e){const t=xe(n),r=t.Pu.get(e),i=t.Tu.get(r.targetId);t.isPrimaryClient&&i.length===1&&(t.sharedClientState.removeLocalQueryTarget(r.targetId),wd(t.remoteStore,r.targetId))}async function ry(n,e){const t=xe(n);try{const r=await N1(t.localStore,e);e.targetChanges.forEach(((i,s)=>{const a=t.Eu.get(s);a&&(Tt(i.addedDocuments.size+i.modifiedDocuments.size+i.removedDocuments.size<=1,22616),i.addedDocuments.size>0?a.lu=!0:i.modifiedDocuments.size>0?Tt(a.lu,14607):i.removedDocuments.size>0&&(Tt(a.lu,42227),a.lu=!1))})),await sy(t,r,e)}catch(r){await Hc(r)}}function Np(n,e,t){const r=xe(n);if(r.isPrimaryClient&&t===0||!r.isPrimaryClient&&t===1){const i=[];r.Pu.forEach(((s,a)=>{const l=a.view.va(e);l.snapshot&&i.push(l.snapshot)})),(function(a,l){const c=xe(a);c.onlineState=l;let h=!1;c.queries.forEach(((f,g)=>{for(const _ of g.wa)_.va(l)&&(h=!0)})),h&&Sd(c)})(r.eventManager,e),i.length&&r.hu.J_(i),r.onlineState=e,r.isPrimaryClient&&r.sharedClientState.setOnlineState(e)}}async function pS(n,e,t){const r=xe(n);r.sharedClientState.updateQueryState(e,"rejected",t);const i=r.Eu.get(e),s=i&&i.key;if(s){let a=new Lt(ie.comparator);a=a.insert(s,Cn.newNoDocument(s,ce.min()));const l=Le().add(s),c=new eu(ce.min(),new Map,new Lt(Te),a,l);await ry(r,c),r.du=r.du.remove(s),r.Eu.delete(e),Cd(r)}else await Ah(r.localStore,e,!1).then((()=>Rh(r,e,t))).catch(Hc)}function Rh(n,e,t=null){n.sharedClientState.removeLocalQueryTarget(e);for(const r of n.Tu.get(e))n.Pu.delete(r),t&&n.hu.pu(r,t);n.Tu.delete(e),n.isPrimaryClient&&n.Au.zr(e).forEach((r=>{n.Au.containsKey(r)||iy(n,r)}))}function iy(n,e){n.Iu.delete(e.path.canonicalString());const t=n.du.get(e);t!==null&&(wd(n.remoteStore,t),n.du=n.du.remove(e),n.Eu.delete(t),Cd(n))}function Op(n,e,t){for(const r of t)r instanceof ey?(n.Au.addReference(r.key,e),mS(n,r)):r instanceof ty?(W(Rd,"Document no longer in limbo: "+r.key),n.Au.removeReference(r.key,e),n.Au.containsKey(r.key)||iy(n,r.key)):ue(19791,{yu:r})}function mS(n,e){const t=e.key,r=t.path.canonicalString();n.du.get(t)||n.Iu.has(r)||(W(Rd,"New document in limbo: "+t),n.Iu.add(r),Cd(n))}function Cd(n){for(;n.Iu.size>0&&n.du.size<n.maxConcurrentLimboResolutions;){const e=n.Iu.values().next().value;n.Iu.delete(e);const t=new ie(ut.fromString(e)),r=n.mu.next();n.Eu.set(r,new aS(t)),n.du=n.du.insert(t,r),Yv(n.remoteStore,new Wi(Jr(Tv(t.path)),r,"TargetPurposeLimboResolution",Wc.ue))}}async function sy(n,e,t){const r=xe(n),i=[],s=[],a=[];r.Pu.isEmpty()||(r.Pu.forEach(((l,c)=>{a.push(r.gu(c,e,t).then((h=>{var f;if((h||t)&&r.isPrimaryClient){const g=h?!h.fromCache:(f=t==null?void 0:t.targetChanges.get(c.targetId))===null||f===void 0?void 0:f.current;r.sharedClientState.updateQueryState(c.targetId,g?"current":"not-current")}if(h){i.push(h);const g=yd.Es(c.targetId,h);s.push(g)}})))})),await Promise.all(a),r.hu.J_(i),await(async function(c,h){const f=xe(c);try{await f.persistence.runTransaction("notifyLocalViewChanges","readwrite",(g=>x.forEach(h,(_=>x.forEach(_.Is,(E=>f.persistence.referenceDelegate.addReference(g,_.targetId,E))).next((()=>x.forEach(_.ds,(E=>f.persistence.referenceDelegate.removeReference(g,_.targetId,E)))))))))}catch(g){if(!Yo(g))throw g;W(Ed,"Failed to update sequence numbers: "+g)}for(const g of h){const _=g.targetId;if(!g.fromCache){const E=f.Fs.get(_),R=E.snapshotVersion,N=E.withLastLimboFreeSnapshotVersion(R);f.Fs=f.Fs.insert(_,N)}}})(r.localStore,s))}async function gS(n,e){const t=xe(n);if(!t.currentUser.isEqual(e)){W(Rd,"User change. New user:",e.toKey());const r=await Gv(t.localStore,e);t.currentUser=e,(function(s,a){s.Vu.forEach((l=>{l.forEach((c=>{c.reject(new H(F.CANCELLED,a))}))})),s.Vu.clear()})(t,"'waitForPendingWrites' promise is rejected due to a user change."),t.sharedClientState.handleUserChange(e,r.removedBatchIds,r.addedBatchIds),await sy(t,r.Bs)}}function _S(n,e){const t=xe(n),r=t.Eu.get(e);if(r&&r.lu)return Le().add(r.key);{let i=Le();const s=t.Tu.get(e);if(!s)return i;for(const a of s){const l=t.Pu.get(a);i=i.unionWith(l.view.tu)}return i}}function oy(n){const e=xe(n);return e.remoteStore.remoteSyncer.applyRemoteEvent=ry.bind(null,e),e.remoteStore.remoteSyncer.getRemoteKeysForTarget=_S.bind(null,e),e.remoteStore.remoteSyncer.rejectListen=pS.bind(null,e),e.hu.J_=nS.bind(null,e.eventManager),e.hu.pu=rS.bind(null,e.eventManager),e}class Ec{constructor(){this.kind="memory",this.synchronizeTabs=!1}async initialize(e){this.serializer=tu(e.databaseInfo.databaseId),this.sharedClientState=this.bu(e),this.persistence=this.Du(e),await this.persistence.start(),this.localStore=this.vu(e),this.gcScheduler=this.Cu(e,this.localStore),this.indexBackfillerScheduler=this.Fu(e,this.localStore)}Cu(e,t){return null}Fu(e,t){return null}vu(e){return k1(this.persistence,new R1,e.initialUser,this.serializer)}Du(e){return new Wv(vd.Vi,this.serializer)}bu(e){return new M1}async terminate(){var e,t;(e=this.gcScheduler)===null||e===void 0||e.stop(),(t=this.indexBackfillerScheduler)===null||t===void 0||t.stop(),this.sharedClientState.shutdown(),await this.persistence.shutdown()}}Ec.provider={build:()=>new Ec};class vS extends Ec{constructor(e){super(),this.cacheSizeBytes=e}Cu(e,t){Tt(this.persistence.referenceDelegate instanceof yc,46915);const r=this.persistence.referenceDelegate.garbageCollector;return new d1(r,e.asyncQueue,t)}Du(e){const t=this.cacheSizeBytes!==void 0?Hn.withCacheSize(this.cacheSizeBytes):Hn.DEFAULT;return new Wv((r=>yc.Vi(r,t)),this.serializer)}}class Ch{async initialize(e,t){this.localStore||(this.localStore=e.localStore,this.sharedClientState=e.sharedClientState,this.datastore=this.createDatastore(t),this.remoteStore=this.createRemoteStore(t),this.eventManager=this.createEventManager(t),this.syncEngine=this.createSyncEngine(t,!e.synchronizeTabs),this.sharedClientState.onlineStateHandler=r=>Np(this.syncEngine,r,1),this.remoteStore.remoteSyncer.handleCredentialChange=gS.bind(null,this.syncEngine),await J1(this.remoteStore,this.syncEngine.isPrimaryClient))}createEventManager(e){return(function(){return new Z1})()}createDatastore(e){const t=tu(e.databaseInfo.databaseId),r=(function(s){return new $1(s)})(e.databaseInfo);return(function(s,a,l,c){return new j1(s,a,l,c)})(e.authCredentials,e.appCheckCredentials,r,t)}createRemoteStore(e){return(function(r,i,s,a,l){return new W1(r,i,s,a,l)})(this.localStore,this.datastore,e.asyncQueue,(t=>Np(this.syncEngine,t,0)),(function(){return Ap.C()?new Ap:new x1})())}createSyncEngine(e,t){return(function(i,s,a,l,c,h,f){const g=new lS(i,s,a,l,c,h);return f&&(g.fu=!0),g})(this.localStore,this.remoteStore,this.eventManager,this.sharedClientState,e.initialUser,e.maxConcurrentLimboResolutions,t)}async terminate(){var e,t;await(async function(i){const s=xe(i);W(Uo,"RemoteStore shutting down."),s.Ia.add(5),await ol(s),s.Ea.shutdown(),s.Aa.set("Unknown")})(this.remoteStore),(e=this.datastore)===null||e===void 0||e.terminate(),(t=this.eventManager)===null||t===void 0||t.terminate()}}Ch.provider={build:()=>new Ch};/**
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
 */class yS{constructor(e){this.observer=e,this.muted=!1}next(e){this.muted||this.observer.next&&this.xu(this.observer.next,e)}error(e){this.muted||(this.observer.error?this.xu(this.observer.error,e):Ai("Uncaught Error in snapshot listener:",e.toString()))}Ou(){this.muted=!0}xu(e,t){setTimeout((()=>{this.muted||e(t)}),0)}}/**
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
 */const as="FirestoreClient";class ES{constructor(e,t,r,i,s){this.authCredentials=e,this.appCheckCredentials=t,this.asyncQueue=r,this.databaseInfo=i,this.user=jn.UNAUTHENTICATED,this.clientId=sv.newId(),this.authCredentialListener=()=>Promise.resolve(),this.appCheckCredentialListener=()=>Promise.resolve(),this._uninitializedComponentsProvider=s,this.authCredentials.start(r,(async a=>{W(as,"Received user=",a.uid),await this.authCredentialListener(a),this.user=a})),this.appCheckCredentials.start(r,(a=>(W(as,"Received new app check token=",a),this.appCheckCredentialListener(a,this.user))))}get configuration(){return{asyncQueue:this.asyncQueue,databaseInfo:this.databaseInfo,clientId:this.clientId,authCredentials:this.authCredentials,appCheckCredentials:this.appCheckCredentials,initialUser:this.user,maxConcurrentLimboResolutions:100}}setCredentialChangeListener(e){this.authCredentialListener=e}setAppCheckTokenChangeListener(e){this.appCheckCredentialListener=e}terminate(){this.asyncQueue.enterRestrictedMode();const e=new Vs;return this.asyncQueue.enqueueAndForgetEvenWhileRestricted((async()=>{try{this._onlineComponents&&await this._onlineComponents.terminate(),this._offlineComponents&&await this._offlineComponents.terminate(),this.authCredentials.shutdown(),this.appCheckCredentials.shutdown(),e.resolve()}catch(t){const r=Zv(t,"Failed to shutdown persistence");e.reject(r)}})),e.promise}}async function Lu(n,e){n.asyncQueue.verifyOperationInProgress(),W(as,"Initializing OfflineComponentProvider");const t=n.configuration;await e.initialize(t);let r=t.initialUser;n.setCredentialChangeListener((async i=>{r.isEqual(i)||(await Gv(e.localStore,i),r=i)})),e.persistence.setDatabaseDeletedListener((()=>{qs("Terminating Firestore due to IndexedDb database deletion"),n.terminate().then((()=>{W("Terminating Firestore due to IndexedDb database deletion completed successfully")})).catch((i=>{qs("Terminating Firestore due to IndexedDb database deletion failed",i)}))})),n._offlineComponents=e}async function Dp(n,e){n.asyncQueue.verifyOperationInProgress();const t=await wS(n);W(as,"Initializing OnlineComponentProvider"),await e.initialize(t,n.configuration),n.setCredentialChangeListener((r=>Rp(e.remoteStore,r))),n.setAppCheckTokenChangeListener(((r,i)=>Rp(e.remoteStore,i))),n._onlineComponents=e}async function wS(n){if(!n._offlineComponents)if(n._uninitializedComponentsProvider){W(as,"Using user provided OfflineComponentProvider");try{await Lu(n,n._uninitializedComponentsProvider._offline)}catch(e){const t=e;if(!(function(i){return i.name==="FirebaseError"?i.code===F.FAILED_PRECONDITION||i.code===F.UNIMPLEMENTED:!(typeof DOMException<"u"&&i instanceof DOMException)||i.code===22||i.code===20||i.code===11})(t))throw t;qs("Error using user provided cache. Falling back to memory cache: "+t),await Lu(n,new Ec)}}else W(as,"Using default OfflineComponentProvider"),await Lu(n,new vS(void 0));return n._offlineComponents}async function TS(n){return n._onlineComponents||(n._uninitializedComponentsProvider?(W(as,"Using user provided OnlineComponentProvider"),await Dp(n,n._uninitializedComponentsProvider._online)):(W(as,"Using default OnlineComponentProvider"),await Dp(n,new Ch))),n._onlineComponents}async function IS(n){const e=await TS(n),t=e.eventManager;return t.onListen=cS.bind(null,e.syncEngine),t.onUnlisten=dS.bind(null,e.syncEngine),t.onFirstRemoteStoreListen=uS.bind(null,e.syncEngine),t.onLastRemoteStoreUnlisten=fS.bind(null,e.syncEngine),t}function AS(n,e,t={}){const r=new Vs;return n.asyncQueue.enqueueAndForget((async()=>(function(s,a,l,c,h){const f=new yS({next:_=>{f.Ou(),a.enqueueAndForget((()=>tS(s,g))),_.fromCache&&c.source==="server"?h.reject(new H(F.UNAVAILABLE,'Failed to get documents from server. (However, these documents may exist in the local cache. Run again without setting source to "server" to retrieve the cached documents.)')):h.resolve(_)},error:_=>h.reject(_)}),g=new iS(l,f,{includeMetadataChanges:!0,ka:!0});return eS(s,g)})(await IS(n),n.asyncQueue,e,t,r))),r.promise}/**
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
 */function ay(n){const e={};return n.timeoutSeconds!==void 0&&(e.timeoutSeconds=n.timeoutSeconds),e}/**
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
 */const Vp=new Map;/**
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
 */const bS="firestore.googleapis.com",Mp=!0;class xp{constructor(e){var t,r;if(e.host===void 0){if(e.ssl!==void 0)throw new H(F.INVALID_ARGUMENT,"Can't provide ssl option if host option is not set");this.host=bS,this.ssl=Mp}else this.host=e.host,this.ssl=(t=e.ssl)!==null&&t!==void 0?t:Mp;if(this.isUsingEmulator=e.emulatorOptions!==void 0,this.credentials=e.credentials,this.ignoreUndefinedProperties=!!e.ignoreUndefinedProperties,this.localCache=e.localCache,e.cacheSizeBytes===void 0)this.cacheSizeBytes=jv;else{if(e.cacheSizeBytes!==-1&&e.cacheSizeBytes<Hv)throw new H(F.INVALID_ARGUMENT,"cacheSizeBytes must be at least 1048576");this.cacheSizeBytes=e.cacheSizeBytes}eb("experimentalForceLongPolling",e.experimentalForceLongPolling,"experimentalAutoDetectLongPolling",e.experimentalAutoDetectLongPolling),this.experimentalForceLongPolling=!!e.experimentalForceLongPolling,this.experimentalForceLongPolling?this.experimentalAutoDetectLongPolling=!1:e.experimentalAutoDetectLongPolling===void 0?this.experimentalAutoDetectLongPolling=!0:this.experimentalAutoDetectLongPolling=!!e.experimentalAutoDetectLongPolling,this.experimentalLongPollingOptions=ay((r=e.experimentalLongPollingOptions)!==null&&r!==void 0?r:{}),(function(s){if(s.timeoutSeconds!==void 0){if(isNaN(s.timeoutSeconds))throw new H(F.INVALID_ARGUMENT,`invalid long polling timeout: ${s.timeoutSeconds} (must not be NaN)`);if(s.timeoutSeconds<5)throw new H(F.INVALID_ARGUMENT,`invalid long polling timeout: ${s.timeoutSeconds} (minimum allowed value is 5)`);if(s.timeoutSeconds>30)throw new H(F.INVALID_ARGUMENT,`invalid long polling timeout: ${s.timeoutSeconds} (maximum allowed value is 30)`)}})(this.experimentalLongPollingOptions),this.useFetchStreams=!!e.useFetchStreams}isEqual(e){return this.host===e.host&&this.ssl===e.ssl&&this.credentials===e.credentials&&this.cacheSizeBytes===e.cacheSizeBytes&&this.experimentalForceLongPolling===e.experimentalForceLongPolling&&this.experimentalAutoDetectLongPolling===e.experimentalAutoDetectLongPolling&&(function(r,i){return r.timeoutSeconds===i.timeoutSeconds})(this.experimentalLongPollingOptions,e.experimentalLongPollingOptions)&&this.ignoreUndefinedProperties===e.ignoreUndefinedProperties&&this.useFetchStreams===e.useFetchStreams}}class ly{constructor(e,t,r,i){this._authCredentials=e,this._appCheckCredentials=t,this._databaseId=r,this._app=i,this.type="firestore-lite",this._persistenceKey="(lite)",this._settings=new xp({}),this._settingsFrozen=!1,this._emulatorOptions={},this._terminateTask="notTerminated"}get app(){if(!this._app)throw new H(F.FAILED_PRECONDITION,"Firestore was not initialized using the Firebase SDK. 'app' is not available");return this._app}get _initialized(){return this._settingsFrozen}get _terminated(){return this._terminateTask!=="notTerminated"}_setSettings(e){if(this._settingsFrozen)throw new H(F.FAILED_PRECONDITION,"Firestore has already been started and its settings can no longer be changed. You can only modify settings before calling any other methods on a Firestore object.");this._settings=new xp(e),this._emulatorOptions=e.emulatorOptions||{},e.credentials!==void 0&&(this._authCredentials=(function(r){if(!r)return new HA;switch(r.type){case"firstParty":return new KA(r.sessionIndex||"0",r.iamToken||null,r.authTokenFactory||null);case"provider":return r.client;default:throw new H(F.INVALID_ARGUMENT,"makeAuthCredentialsProvider failed due to invalid credential type")}})(e.credentials))}_getSettings(){return this._settings}_getEmulatorOptions(){return this._emulatorOptions}_freezeSettings(){return this._settingsFrozen=!0,this._settings}_delete(){return this._terminateTask==="notTerminated"&&(this._terminateTask=this._terminate()),this._terminateTask}async _restart(){this._terminateTask==="notTerminated"?await this._terminate():this._terminateTask="notTerminated"}toJSON(){return{app:this._app,databaseId:this._databaseId,settings:this._settings}}_terminate(){return(function(t){const r=Vp.get(t);r&&(W("ComponentProvider","Removing Datastore"),Vp.delete(t),r.terminate())})(this),Promise.resolve()}}/**
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
 */class Ri{constructor(e,t,r){this.converter=t,this._query=r,this.type="query",this.firestore=e}withConverter(e){return new Ri(this.firestore,e,this._query)}}class Fn{constructor(e,t,r){this.converter=t,this._key=r,this.type="document",this.firestore=e}get _path(){return this._key.path}get id(){return this._key.path.lastSegment()}get path(){return this._key.path.canonicalString()}get parent(){return new yo(this.firestore,this.converter,this._key.path.popLast())}withConverter(e){return new Fn(this.firestore,e,this._key)}toJSON(){return{type:Fn._jsonSchemaVersion,referencePath:this._key.toString()}}static fromJSON(e,t,r){if(il(t,Fn._jsonSchema))return new Fn(e,r||null,new ie(ut.fromString(t.referencePath)))}}Fn._jsonSchemaVersion="firestore/documentReference/1.0",Fn._jsonSchema={type:Ht("string",Fn._jsonSchemaVersion),referencePath:Ht("string")};class yo extends Ri{constructor(e,t,r){super(e,t,Tv(r)),this._path=r,this.type="collection"}get id(){return this._query.path.lastSegment()}get path(){return this._query.path.canonicalString()}get parent(){const e=this._path.popLast();return e.isEmpty()?null:new Fn(this.firestore,null,new ie(e))}withConverter(e){return new yo(this.firestore,e,this._path)}}function Pd(n,e,...t){if(n=mn(n),ZA("collection","path",e),n instanceof ly){const r=ut.fromString(e,...t);return Kf(r),new yo(n,null,r)}{if(!(n instanceof Fn||n instanceof yo))throw new H(F.INVALID_ARGUMENT,"Expected first argument to collection() to be a CollectionReference, a DocumentReference or FirebaseFirestore");const r=n._path.child(ut.fromString(e,...t));return Kf(r),new yo(n.firestore,null,r)}}/**
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
 */const Lp="AsyncQueue";class Fp{constructor(e=Promise.resolve()){this.Zu=[],this.Xu=!1,this.ec=[],this.tc=null,this.nc=!1,this.rc=!1,this.sc=[],this.F_=new Qv(this,"async_queue_retry"),this.oc=()=>{const r=xu();r&&W(Lp,"Visibility state changed to "+r.visibilityState),this.F_.y_()},this._c=e;const t=xu();t&&typeof t.addEventListener=="function"&&t.addEventListener("visibilitychange",this.oc)}get isShuttingDown(){return this.Xu}enqueueAndForget(e){this.enqueue(e)}enqueueAndForgetEvenWhileRestricted(e){this.ac(),this.uc(e)}enterRestrictedMode(e){if(!this.Xu){this.Xu=!0,this.rc=e||!1;const t=xu();t&&typeof t.removeEventListener=="function"&&t.removeEventListener("visibilitychange",this.oc)}}enqueue(e){if(this.ac(),this.Xu)return new Promise((()=>{}));const t=new Vs;return this.uc((()=>this.Xu&&this.rc?Promise.resolve():(e().then(t.resolve,t.reject),t.promise))).then((()=>t.promise))}enqueueRetryable(e){this.enqueueAndForget((()=>(this.Zu.push(e),this.cc())))}async cc(){if(this.Zu.length!==0){try{await this.Zu[0](),this.Zu.shift(),this.F_.reset()}catch(e){if(!Yo(e))throw e;W(Lp,"Operation failed with retryable error: "+e)}this.Zu.length>0&&this.F_.g_((()=>this.cc()))}}uc(e){const t=this._c.then((()=>(this.nc=!0,e().catch((r=>{throw this.tc=r,this.nc=!1,Ai("INTERNAL UNHANDLED ERROR: ",Up(r)),r})).then((r=>(this.nc=!1,r))))));return this._c=t,t}enqueueAfterDelay(e,t,r){this.ac(),this.sc.indexOf(e)>-1&&(t=0);const i=bd.createAndSchedule(this,e,t,r,(s=>this.lc(s)));return this.ec.push(i),i}ac(){this.tc&&ue(47125,{hc:Up(this.tc)})}verifyOperationInProgress(){}async Pc(){let e;do e=this._c,await e;while(e!==this._c)}Tc(e){for(const t of this.ec)if(t.timerId===e)return!0;return!1}Ic(e){return this.Pc().then((()=>{this.ec.sort(((t,r)=>t.targetTimeMs-r.targetTimeMs));for(const t of this.ec)if(t.skipDelay(),e!=="all"&&t.timerId===e)break;return this.Pc()}))}dc(e){this.sc.push(e)}lc(e){const t=this.ec.indexOf(e);this.ec.splice(t,1)}}function Up(n){let e=n.message||"";return n.stack&&(e=n.stack.includes(n.message)?n.stack:n.message+`
`+n.stack),e}class cy extends ly{constructor(e,t,r,i){super(e,t,r,i),this.type="firestore",this._queue=new Fp,this._persistenceKey=(i==null?void 0:i.name)||"[DEFAULT]"}async _terminate(){if(this._firestoreClient){const e=this._firestoreClient.terminate();this._queue=new Fp(e),this._firestoreClient=void 0,await e}}}function SS(n,e,t){t||(t=fc);const r=Fc(n,"firestore");if(r.isInitialized(t)){const i=r.getImmediate({identifier:t}),s=r.getOptions(t);if(Us(s,e))return i;throw new H(F.FAILED_PRECONDITION,"initializeFirestore() has already been called with different options. To avoid this error, call initializeFirestore() with the same options as when it was originally called, or call getFirestore() to return the already initialized instance.")}if(e.cacheSizeBytes!==void 0&&e.localCache!==void 0)throw new H(F.INVALID_ARGUMENT,"cache and cacheSizeBytes cannot be specified at the same time as cacheSizeBytes willbe deprecated. Instead, specify the cache size in the cache object");if(e.cacheSizeBytes!==void 0&&e.cacheSizeBytes!==-1&&e.cacheSizeBytes<Hv)throw new H(F.INVALID_ARGUMENT,"cacheSizeBytes must be at least 1048576");return e.host&&zs(e.host)&&Jh(e.host),r.initialize({options:e,instanceIdentifier:t})}function RS(n){if(n._terminated)throw new H(F.FAILED_PRECONDITION,"The client has already been terminated.");return n._firestoreClient||CS(n),n._firestoreClient}function CS(n){var e,t,r;const i=n._freezeSettings(),s=(function(l,c,h,f){return new fb(l,c,h,f.host,f.ssl,f.experimentalForceLongPolling,f.experimentalAutoDetectLongPolling,ay(f.experimentalLongPollingOptions),f.useFetchStreams,f.isUsingEmulator)})(n._databaseId,((e=n._app)===null||e===void 0?void 0:e.options.appId)||"",n._persistenceKey,i);n._componentsProvider||!((t=i.localCache)===null||t===void 0)&&t._offlineComponentProvider&&(!((r=i.localCache)===null||r===void 0)&&r._onlineComponentProvider)&&(n._componentsProvider={_offline:i.localCache._offlineComponentProvider,_online:i.localCache._onlineComponentProvider}),n._firestoreClient=new ES(n._authCredentials,n._appCheckCredentials,n._queue,s,n._componentsProvider&&(function(l){const c=l==null?void 0:l._online.build();return{_offline:l==null?void 0:l._offline.build(c),_online:c}})(n._componentsProvider))}/**
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
 */class pr{constructor(e){this._byteString=e}static fromBase64String(e){try{return new pr(gn.fromBase64String(e))}catch(t){throw new H(F.INVALID_ARGUMENT,"Failed to construct data from Base64 string: "+t)}}static fromUint8Array(e){return new pr(gn.fromUint8Array(e))}toBase64(){return this._byteString.toBase64()}toUint8Array(){return this._byteString.toUint8Array()}toString(){return"Bytes(base64: "+this.toBase64()+")"}isEqual(e){return this._byteString.isEqual(e._byteString)}toJSON(){return{type:pr._jsonSchemaVersion,bytes:this.toBase64()}}static fromJSON(e){if(il(e,pr._jsonSchema))return pr.fromBase64String(e.bytes)}}pr._jsonSchemaVersion="firestore/bytes/1.0",pr._jsonSchema={type:Ht("string",pr._jsonSchemaVersion),bytes:Ht("string")};/**
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
 */class uy{constructor(...e){for(let t=0;t<e.length;++t)if(e[t].length===0)throw new H(F.INVALID_ARGUMENT,"Invalid field name at argument $(i + 1). Field names must not be empty.");this._internalPath=new Pn(e)}isEqual(e){return this._internalPath.isEqual(e._internalPath)}}/**
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
 */class hy{constructor(e){this._methodName=e}}/**
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
 */class Xr{constructor(e,t){if(!isFinite(e)||e<-90||e>90)throw new H(F.INVALID_ARGUMENT,"Latitude must be a number between -90 and 90, but was: "+e);if(!isFinite(t)||t<-180||t>180)throw new H(F.INVALID_ARGUMENT,"Longitude must be a number between -180 and 180, but was: "+t);this._lat=e,this._long=t}get latitude(){return this._lat}get longitude(){return this._long}isEqual(e){return this._lat===e._lat&&this._long===e._long}_compareTo(e){return Te(this._lat,e._lat)||Te(this._long,e._long)}toJSON(){return{latitude:this._lat,longitude:this._long,type:Xr._jsonSchemaVersion}}static fromJSON(e){if(il(e,Xr._jsonSchema))return new Xr(e.latitude,e.longitude)}}Xr._jsonSchemaVersion="firestore/geoPoint/1.0",Xr._jsonSchema={type:Ht("string",Xr._jsonSchemaVersion),latitude:Ht("number"),longitude:Ht("number")};/**
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
 */class Zr{constructor(e){this._values=(e||[]).map((t=>t))}toArray(){return this._values.map((e=>e))}isEqual(e){return(function(r,i){if(r.length!==i.length)return!1;for(let s=0;s<r.length;++s)if(r[s]!==i[s])return!1;return!0})(this._values,e._values)}toJSON(){return{type:Zr._jsonSchemaVersion,vectorValues:this._values}}static fromJSON(e){if(il(e,Zr._jsonSchema)){if(Array.isArray(e.vectorValues)&&e.vectorValues.every((t=>typeof t=="number")))return new Zr(e.vectorValues);throw new H(F.INVALID_ARGUMENT,"Expected 'vectorValues' field to be a number array")}}}Zr._jsonSchemaVersion="firestore/vectorValue/1.0",Zr._jsonSchema={type:Ht("string",Zr._jsonSchemaVersion),vectorValues:Ht("object")};/**
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
 */const PS=/^__.*__$/;function dy(n){switch(n){case 0:case 2:case 1:return!0;case 3:case 4:return!1;default:throw ue(40011,{Ec:n})}}class kd{constructor(e,t,r,i,s,a){this.settings=e,this.databaseId=t,this.serializer=r,this.ignoreUndefinedProperties=i,s===void 0&&this.Ac(),this.fieldTransforms=s||[],this.fieldMask=a||[]}get path(){return this.settings.path}get Ec(){return this.settings.Ec}Rc(e){return new kd(Object.assign(Object.assign({},this.settings),e),this.databaseId,this.serializer,this.ignoreUndefinedProperties,this.fieldTransforms,this.fieldMask)}Vc(e){var t;const r=(t=this.path)===null||t===void 0?void 0:t.child(e),i=this.Rc({path:r,mc:!1});return i.fc(e),i}gc(e){var t;const r=(t=this.path)===null||t===void 0?void 0:t.child(e),i=this.Rc({path:r,mc:!1});return i.Ac(),i}yc(e){return this.Rc({path:void 0,mc:!0})}wc(e){return Ph(e,this.settings.methodName,this.settings.Sc||!1,this.path,this.settings.bc)}contains(e){return this.fieldMask.find((t=>e.isPrefixOf(t)))!==void 0||this.fieldTransforms.find((t=>e.isPrefixOf(t.field)))!==void 0}Ac(){if(this.path)for(let e=0;e<this.path.length;e++)this.fc(this.path.get(e))}fc(e){if(e.length===0)throw this.wc("Document fields must not be empty");if(dy(this.Ec)&&PS.test(e))throw this.wc('Document fields cannot begin and end with "__"')}}class kS{constructor(e,t,r){this.databaseId=e,this.ignoreUndefinedProperties=t,this.serializer=r||tu(e)}Dc(e,t,r,i=!1){return new kd({Ec:e,methodName:t,bc:r,path:Pn.emptyPath(),mc:!1,Sc:i},this.databaseId,this.serializer,this.ignoreUndefinedProperties)}}function fy(n){const e=n._freezeSettings(),t=tu(n._databaseId);return new kS(n._databaseId,!!e.ignoreUndefinedProperties,t)}function py(n,e,t,r=!1){return Nd(t,n.Dc(r?4:3,e))}function Nd(n,e){if(my(n=mn(n)))return OS("Unsupported field value:",e,n),NS(n,e);if(n instanceof hy)return(function(r,i){if(!dy(i.Ec))throw i.wc(`${r._methodName}() can only be used with update() and set()`);if(!i.path)throw i.wc(`${r._methodName}() is not currently supported inside arrays`);const s=r._toFieldTransform(i);s&&i.fieldTransforms.push(s)})(n,e),null;if(n===void 0&&e.ignoreUndefinedProperties)return null;if(e.path&&e.fieldMask.push(e.path),n instanceof Array){if(e.settings.mc&&e.Ec!==4)throw e.wc("Nested arrays are not supported");return(function(r,i){const s=[];let a=0;for(const l of r){let c=Nd(l,i.yc(a));c==null&&(c={nullValue:"NULL_VALUE"}),s.push(c),a++}return{arrayValue:{values:s}}})(n,e)}return(function(r,i){if((r=mn(r))===null)return{nullValue:"NULL_VALUE"};if(typeof r=="number")return xb(i.serializer,r);if(typeof r=="boolean")return{booleanValue:r};if(typeof r=="string")return{stringValue:r};if(r instanceof Date){const s=_t.fromDate(r);return{timestampValue:Th(i.serializer,s)}}if(r instanceof _t){const s=new _t(r.seconds,1e3*Math.floor(r.nanoseconds/1e3));return{timestampValue:Th(i.serializer,s)}}if(r instanceof Xr)return{geoPointValue:{latitude:r.latitude,longitude:r.longitude}};if(r instanceof pr)return{bytesValue:xv(i.serializer,r._byteString)};if(r instanceof Fn){const s=i.databaseId,a=r.firestore._databaseId;if(!a.isEqual(s))throw i.wc(`Document reference is for database ${a.projectId}/${a.database} but should be for database ${s.projectId}/${s.database}`);return{referenceValue:Lv(r.firestore._databaseId||i.databaseId,r._key.path)}}if(r instanceof Zr)return(function(a,l){return{mapValue:{fields:{[pv]:{stringValue:mv},[pc]:{arrayValue:{values:a.toArray().map((h=>{if(typeof h!="number")throw l.wc("VectorValues must only contain numeric values.");return fd(l.serializer,h)}))}}}}}})(r,i);throw i.wc(`Unsupported field value: ${jc(r)}`)})(n,e)}function NS(n,e){const t={};return lv(n)?e.path&&e.path.length>0&&e.fieldMask.push(e.path):Jo(n,((r,i)=>{const s=Nd(i,e.Vc(r));s!=null&&(t[r]=s)})),{mapValue:{fields:t}}}function my(n){return!(typeof n!="object"||n===null||n instanceof Array||n instanceof Date||n instanceof _t||n instanceof Xr||n instanceof pr||n instanceof Fn||n instanceof hy||n instanceof Zr)}function OS(n,e,t){if(!my(t)||!ov(t)){const r=jc(t);throw r==="an object"?e.wc(n+" a custom object"):e.wc(n+" "+r)}}const DS=new RegExp("[~\\*/\\[\\]]");function VS(n,e,t){if(e.search(DS)>=0)throw Ph(`Invalid field path (${e}). Paths must not contain '~', '*', '/', '[', or ']'`,n,!1,void 0,t);try{return new uy(...e.split("."))._internalPath}catch{throw Ph(`Invalid field path (${e}). Paths must not be empty, begin with '.', end with '.', or contain '..'`,n,!1,void 0,t)}}function Ph(n,e,t,r,i){const s=r&&!r.isEmpty(),a=i!==void 0;let l=`Function ${e}() called with invalid data`;t&&(l+=" (via `toFirestore()`)"),l+=". ";let c="";return(s||a)&&(c+=" (found",s&&(c+=` in field ${r}`),a&&(c+=` in document ${i}`),c+=")"),new H(F.INVALID_ARGUMENT,l+n+c)}/**
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
 */class Od{constructor(e,t,r,i,s){this._firestore=e,this._userDataWriter=t,this._key=r,this._document=i,this._converter=s}get id(){return this._key.path.lastSegment()}get ref(){return new Fn(this._firestore,this._converter,this._key)}exists(){return this._document!==null}data(){if(this._document){if(this._converter){const e=new MS(this._firestore,this._userDataWriter,this._key,this._document,null);return this._converter.fromFirestore(e)}return this._userDataWriter.convertValue(this._document.data.value)}}get(e){if(this._document){const t=this._document.data.field(ru("DocumentSnapshot.get",e));if(t!==null)return this._userDataWriter.convertValue(t)}}}class MS extends Od{data(){return super.data()}}function ru(n,e){return typeof e=="string"?VS(n,e):e instanceof uy?e._internalPath:e._delegate._internalPath}/**
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
 */function xS(n){if(n.limitType==="L"&&n.explicitOrderBy.length===0)throw new H(F.UNIMPLEMENTED,"limitToLast() queries require specifying at least one orderBy() clause")}class Dd{}class iu extends Dd{}function Vd(n,e,...t){let r=[];e instanceof Dd&&r.push(e),r=r.concat(t),(function(s){const a=s.filter((c=>c instanceof Md)).length,l=s.filter((c=>c instanceof su)).length;if(a>1||a>0&&l>0)throw new H(F.INVALID_ARGUMENT,"InvalidQuery. When using composite filters, you cannot use more than one filter at the top level. Consider nesting the multiple filters within an `and(...)` statement. For example: change `query(query, where(...), or(...))` to `query(query, and(where(...), or(...)))`.")})(r);for(const i of r)n=i._apply(n);return n}class su extends iu{constructor(e,t,r){super(),this._field=e,this._op=t,this._value=r,this.type="where"}static _create(e,t,r){return new su(e,t,r)}_apply(e){const t=this._parse(e);return gy(e._query,t),new Ri(e.firestore,e.converter,vh(e._query,t))}_parse(e){const t=fy(e.firestore);return(function(s,a,l,c,h,f,g){let _;if(h.isKeyField()){if(f==="array-contains"||f==="array-contains-any")throw new H(F.INVALID_ARGUMENT,`Invalid Query. You can't perform '${f}' queries on documentId().`);if(f==="in"||f==="not-in"){Bp(g,f);const R=[];for(const N of g)R.push($p(c,s,N));_={arrayValue:{values:R}}}else _=$p(c,s,g)}else f!=="in"&&f!=="not-in"&&f!=="array-contains-any"||Bp(g,f),_=py(l,a,g,f==="in"||f==="not-in");return jt.create(h,f,_)})(e._query,"where",t,e.firestore._databaseId,this._field,this._op,this._value)}}function LS(n,e,t){const r=e,i=ru("where",n);return su._create(i,r,t)}class Md extends Dd{constructor(e,t){super(),this.type=e,this._queryConstraints=t}static _create(e,t){return new Md(e,t)}_parse(e){const t=this._queryConstraints.map((r=>r._parse(e))).filter((r=>r.getFilters().length>0));return t.length===1?t[0]:Dr.create(t,this._getOperator())}_apply(e){const t=this._parse(e);return t.getFilters().length===0?e:((function(i,s){let a=i;const l=s.getFlattenedFilters();for(const c of l)gy(a,c),a=vh(a,c)})(e._query,t),new Ri(e.firestore,e.converter,vh(e._query,t)))}_getQueryConstraints(){return this._queryConstraints}_getOperator(){return this.type==="and"?"and":"or"}}class xd extends iu{constructor(e,t){super(),this._field=e,this._direction=t,this.type="orderBy"}static _create(e,t){return new xd(e,t)}_apply(e){const t=(function(i,s,a){if(i.startAt!==null)throw new H(F.INVALID_ARGUMENT,"Invalid query. You must not call startAt() or startAfter() before calling orderBy().");if(i.endAt!==null)throw new H(F.INVALID_ARGUMENT,"Invalid query. You must not call endAt() or endBefore() before calling orderBy().");return new Ha(s,a)})(e._query,this._field,this._direction);return new Ri(e.firestore,e.converter,(function(i,s){const a=i.explicitOrderBy.concat([s]);return new Hs(i.path,i.collectionGroup,a,i.filters.slice(),i.limit,i.limitType,i.startAt,i.endAt)})(e._query,t))}}function Ld(n,e="asc"){const t=e,r=ru("orderBy",n);return xd._create(r,t)}class Fd extends iu{constructor(e,t,r){super(),this.type=e,this._limit=t,this._limitType=r}static _create(e,t,r){return new Fd(e,t,r)}_apply(e){return new Ri(e.firestore,e.converter,gc(e._query,this._limit,this._limitType))}}function Ud(n){return tb("limit",n),Fd._create("limit",n,"F")}class $d extends iu{constructor(e,t,r){super(),this.type=e,this._docOrFields=t,this._inclusive=r}static _create(e,t,r){return new $d(e,t,r)}_apply(e){const t=US(e,this.type,this._docOrFields,this._inclusive);return new Ri(e.firestore,e.converter,(function(i,s){return new Hs(i.path,i.collectionGroup,i.explicitOrderBy.slice(),i.filters.slice(),i.limit,i.limitType,s,i.endAt)})(e._query,t))}}function FS(...n){return $d._create("startAfter",n,!1)}function US(n,e,t,r){if(t[0]=mn(t[0]),t[0]instanceof Od)return(function(s,a,l,c,h){if(!c)throw new H(F.NOT_FOUND,`Can't use a DocumentSnapshot that doesn't exist for ${l}().`);const f=[];for(const g of go(s))if(g.field.isKeyField())f.push(mc(a,c.key));else{const _=c.data.field(g.field);if(Kc(_))throw new H(F.INVALID_ARGUMENT,'Invalid query. You are trying to start or end a query using a document for which the field "'+g.field+'" is an uncommitted server timestamp. (Since the value of this field is unknown, you cannot start/end a query with it.)');if(_===null){const E=g.field.canonicalString();throw new H(F.INVALID_ARGUMENT,`Invalid query. You are trying to start or end a query using a document for which the field '${E}' (used as the orderBy) does not exist.`)}f.push(_)}return new Lo(f,h)})(n._query,n.firestore._databaseId,e,t[0]._document,r);{const i=fy(n.firestore);return(function(a,l,c,h,f,g){const _=a.explicitOrderBy;if(f.length>_.length)throw new H(F.INVALID_ARGUMENT,`Too many arguments provided to ${h}(). The number of arguments must be less than or equal to the number of orderBy() clauses`);const E=[];for(let R=0;R<f.length;R++){const N=f[R];if(_[R].field.isKeyField()){if(typeof N!="string")throw new H(F.INVALID_ARGUMENT,`Invalid query. Expected a string for document ID in ${h}(), but got a ${typeof N}`);if(!dd(a)&&N.indexOf("/")!==-1)throw new H(F.INVALID_ARGUMENT,`Invalid query. When querying a collection and ordering by documentId(), the value passed to ${h}() must be a plain document ID, but '${N}' contains a slash.`);const P=a.path.child(ut.fromString(N));if(!ie.isDocumentKey(P))throw new H(F.INVALID_ARGUMENT,`Invalid query. When querying a collection group and ordering by documentId(), the value passed to ${h}() must result in a valid document path, but '${P}' is not because it contains an odd number of segments.`);const U=new ie(P);E.push(mc(l,U))}else{const P=py(c,h,N);E.push(P)}}return new Lo(E,g)})(n._query,n.firestore._databaseId,i,e,t,r)}}function $p(n,e,t){if(typeof(t=mn(t))=="string"){if(t==="")throw new H(F.INVALID_ARGUMENT,"Invalid query. When querying with documentId(), you must provide a valid document ID, but it was an empty string.");if(!dd(e)&&t.indexOf("/")!==-1)throw new H(F.INVALID_ARGUMENT,`Invalid query. When querying a collection by documentId(), you must provide a plain document ID, but '${t}' contains a '/' character.`);const r=e.path.child(ut.fromString(t));if(!ie.isDocumentKey(r))throw new H(F.INVALID_ARGUMENT,`Invalid query. When querying a collection group by documentId(), the value provided must result in a valid document path, but '${r}' is not because it has an odd number of segments (${r.length}).`);return mc(n,new ie(r))}if(t instanceof Fn)return mc(n,t._key);throw new H(F.INVALID_ARGUMENT,`Invalid query. When querying with documentId(), you must provide a valid string or a DocumentReference, but it was: ${jc(t)}.`)}function Bp(n,e){if(!Array.isArray(n)||n.length===0)throw new H(F.INVALID_ARGUMENT,`Invalid Query. A non-empty array is required for '${e.toString()}' filters.`)}function gy(n,e){const t=(function(i,s){for(const a of i)for(const l of a.getFlattenedFilters())if(s.indexOf(l.op)>=0)return l.op;return null})(n.filters,(function(i){switch(i){case"!=":return["!=","not-in"];case"array-contains-any":case"in":return["not-in"];case"not-in":return["array-contains-any","in","not-in","!="];default:return[]}})(e.op));if(t!==null)throw t===e.op?new H(F.INVALID_ARGUMENT,`Invalid query. You cannot use more than one '${e.op.toString()}' filter.`):new H(F.INVALID_ARGUMENT,`Invalid query. You cannot use '${e.op.toString()}' filters with '${t.toString()}' filters.`)}class $S{convertValue(e,t="none"){switch(ss(e)){case 0:return null;case 1:return e.booleanValue;case 2:return Mt(e.integerValue||e.doubleValue);case 3:return this.convertTimestamp(e.timestampValue);case 4:return this.convertServerTimestamp(e,t);case 5:return e.stringValue;case 6:return this.convertBytes(is(e.bytesValue));case 7:return this.convertReference(e.referenceValue);case 8:return this.convertGeoPoint(e.geoPointValue);case 9:return this.convertArray(e.arrayValue,t);case 11:return this.convertObject(e.mapValue,t);case 10:return this.convertVectorValue(e.mapValue);default:throw ue(62114,{value:e})}}convertObject(e,t){return this.convertObjectMap(e.fields,t)}convertObjectMap(e,t="none"){const r={};return Jo(e,((i,s)=>{r[i]=this.convertValue(s,t)})),r}convertVectorValue(e){var t,r,i;const s=(i=(r=(t=e.fields)===null||t===void 0?void 0:t[pc].arrayValue)===null||r===void 0?void 0:r.values)===null||i===void 0?void 0:i.map((a=>Mt(a.doubleValue)));return new Zr(s)}convertGeoPoint(e){return new Xr(Mt(e.latitude),Mt(e.longitude))}convertArray(e,t){return(e.values||[]).map((r=>this.convertValue(r,t)))}convertServerTimestamp(e,t){switch(t){case"previous":const r=Qc(e);return r==null?null:this.convertValue(r,t);case"estimate":return this.convertTimestamp(qa(e));default:return null}}convertTimestamp(e){const t=rs(e);return new _t(t.seconds,t.nanos)}convertDocumentKey(e,t){const r=ut.fromString(e);Tt(zv(r),9688,{name:e});const i=new za(r.get(1),r.get(3)),s=new ie(r.popFirst(5));return i.isEqual(t)||Ai(`Document ${s} contains a document reference within a different database (${i.projectId}/${i.database}) which is not supported. It will be treated as a reference in the current database (${t.projectId}/${t.database}) instead.`),s}}class xl{constructor(e,t){this.hasPendingWrites=e,this.fromCache=t}isEqual(e){return this.hasPendingWrites===e.hasPendingWrites&&this.fromCache===e.fromCache}}class Eo extends Od{constructor(e,t,r,i,s,a){super(e,t,r,i,a),this._firestore=e,this._firestoreImpl=e,this.metadata=s}exists(){return super.exists()}data(e={}){if(this._document){if(this._converter){const t=new Xl(this._firestore,this._userDataWriter,this._key,this._document,this.metadata,null);return this._converter.fromFirestore(t,e)}return this._userDataWriter.convertValue(this._document.data.value,e.serverTimestamps)}}get(e,t={}){if(this._document){const r=this._document.data.field(ru("DocumentSnapshot.get",e));if(r!==null)return this._userDataWriter.convertValue(r,t.serverTimestamps)}}toJSON(){if(this.metadata.hasPendingWrites)throw new H(F.FAILED_PRECONDITION,"DocumentSnapshot.toJSON() attempted to serialize a document with pending writes. Await waitForPendingWrites() before invoking toJSON().");const e=this._document,t={};return t.type=Eo._jsonSchemaVersion,t.bundle="",t.bundleSource="DocumentSnapshot",t.bundleName=this._key.toString(),!e||!e.isValidDocument()||!e.isFoundDocument()?t:(this._userDataWriter.convertObjectMap(e.data.value.mapValue.fields,"previous"),t.bundle=(this._firestore,this.ref.path,"NOT SUPPORTED"),t)}}Eo._jsonSchemaVersion="firestore/documentSnapshot/1.0",Eo._jsonSchema={type:Ht("string",Eo._jsonSchemaVersion),bundleSource:Ht("string","DocumentSnapshot"),bundleName:Ht("string"),bundle:Ht("string")};class Xl extends Eo{data(e={}){return super.data(e)}}class wo{constructor(e,t,r,i){this._firestore=e,this._userDataWriter=t,this._snapshot=i,this.metadata=new xl(i.hasPendingWrites,i.fromCache),this.query=r}get docs(){const e=[];return this.forEach((t=>e.push(t))),e}get size(){return this._snapshot.docs.size}get empty(){return this.size===0}forEach(e,t){this._snapshot.docs.forEach((r=>{e.call(t,new Xl(this._firestore,this._userDataWriter,r.key,r,new xl(this._snapshot.mutatedKeys.has(r.key),this._snapshot.fromCache),this.query.converter))}))}docChanges(e={}){const t=!!e.includeMetadataChanges;if(t&&this._snapshot.excludesMetadataChanges)throw new H(F.INVALID_ARGUMENT,"To include metadata changes with your document changes, you must also pass { includeMetadataChanges:true } to onSnapshot().");return this._cachedChanges&&this._cachedChangesIncludeMetadataChanges===t||(this._cachedChanges=(function(i,s){if(i._snapshot.oldDocs.isEmpty()){let a=0;return i._snapshot.docChanges.map((l=>{const c=new Xl(i._firestore,i._userDataWriter,l.doc.key,l.doc,new xl(i._snapshot.mutatedKeys.has(l.doc.key),i._snapshot.fromCache),i.query.converter);return l.doc,{type:"added",doc:c,oldIndex:-1,newIndex:a++}}))}{let a=i._snapshot.oldDocs;return i._snapshot.docChanges.filter((l=>s||l.type!==3)).map((l=>{const c=new Xl(i._firestore,i._userDataWriter,l.doc.key,l.doc,new xl(i._snapshot.mutatedKeys.has(l.doc.key),i._snapshot.fromCache),i.query.converter);let h=-1,f=-1;return l.type!==0&&(h=a.indexOf(l.doc.key),a=a.delete(l.doc.key)),l.type!==1&&(a=a.add(l.doc),f=a.indexOf(l.doc.key)),{type:BS(l.type),doc:c,oldIndex:h,newIndex:f}}))}})(this,t),this._cachedChangesIncludeMetadataChanges=t),this._cachedChanges}toJSON(){if(this.metadata.hasPendingWrites)throw new H(F.FAILED_PRECONDITION,"QuerySnapshot.toJSON() attempted to serialize a document with pending writes. Await waitForPendingWrites() before invoking toJSON().");const e={};e.type=wo._jsonSchemaVersion,e.bundleSource="QuerySnapshot",e.bundleName=sv.newId(),this._firestore._databaseId.database,this._firestore._databaseId.projectId;const t=[],r=[],i=[];return this.docs.forEach((s=>{s._document!==null&&(t.push(s._document),r.push(this._userDataWriter.convertObjectMap(s._document.data.value.mapValue.fields,"previous")),i.push(s.ref.path))})),e.bundle=(this._firestore,this.query._query,e.bundleName,"NOT SUPPORTED"),e}}function BS(n){switch(n){case 0:return"added";case 2:case 3:return"modified";case 1:return"removed";default:return ue(61501,{type:n})}}wo._jsonSchemaVersion="firestore/querySnapshot/1.0",wo._jsonSchema={type:Ht("string",wo._jsonSchemaVersion),bundleSource:Ht("string","QuerySnapshot"),bundleName:Ht("string"),bundle:Ht("string")};class qS extends $S{constructor(e){super(),this.firestore=e}convertBytes(e){return new pr(e)}convertReference(e){const t=this.convertDocumentKey(e,this.firestore._databaseId);return new Fn(this.firestore,null,t)}}function Bd(n){n=Qf(n,Ri);const e=Qf(n.firestore,cy),t=RS(e),r=new qS(e);return xS(n._query),AS(t,n._query).then((i=>new wo(e,r,n,i)))}(function(e,t=!0){(function(i){Qo=i})(Ko),Ti(new ti("firestore",((r,{instanceIdentifier:i,options:s})=>{const a=r.getProvider("app").getImmediate(),l=new cy(new WA(r.getProvider("auth-internal")),new QA(a,r.getProvider("app-check-internal")),(function(h,f){if(!Object.prototype.hasOwnProperty.apply(h.options,["projectId"]))throw new H(F.INVALID_ARGUMENT,'"projectId" not provided in firebase.initializeApp.');return new za(h.options.projectId,f)})(a,i),a);return s=Object.assign({useFetchStreams:t},s),l._setSettings(s),l}),"PUBLIC").setMultipleInstances(!0)),kr(zf,jf,e),kr(zf,jf,"esm2017")})();/**
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
 */const zS="type.googleapis.com/google.protobuf.Int64Value",jS="type.googleapis.com/google.protobuf.UInt64Value";function _y(n,e){const t={};for(const r in n)n.hasOwnProperty(r)&&(t[r]=e(n[r]));return t}function wc(n){if(n==null)return null;if(n instanceof Number&&(n=n.valueOf()),typeof n=="number"&&isFinite(n)||n===!0||n===!1||Object.prototype.toString.call(n)==="[object String]")return n;if(n instanceof Date)return n.toISOString();if(Array.isArray(n))return n.map(e=>wc(e));if(typeof n=="function"||typeof n=="object")return _y(n,e=>wc(e));throw new Error("Data cannot be encoded in JSON: "+n)}function Bo(n){if(n==null)return n;if(n["@type"])switch(n["@type"]){case zS:case jS:{const e=Number(n.value);if(isNaN(e))throw new Error("Data cannot be decoded from JSON: "+n);return e}default:throw new Error("Data cannot be decoded from JSON: "+n)}return Array.isArray(n)?n.map(e=>Bo(e)):typeof n=="function"||typeof n=="object"?_y(n,e=>Bo(e)):n}/**
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
 */const qd="functions";/**
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
 */const qp={OK:"ok",CANCELLED:"cancelled",UNKNOWN:"unknown",INVALID_ARGUMENT:"invalid-argument",DEADLINE_EXCEEDED:"deadline-exceeded",NOT_FOUND:"not-found",ALREADY_EXISTS:"already-exists",PERMISSION_DENIED:"permission-denied",UNAUTHENTICATED:"unauthenticated",RESOURCE_EXHAUSTED:"resource-exhausted",FAILED_PRECONDITION:"failed-precondition",ABORTED:"aborted",OUT_OF_RANGE:"out-of-range",UNIMPLEMENTED:"unimplemented",INTERNAL:"internal",UNAVAILABLE:"unavailable",DATA_LOSS:"data-loss"};class Gn extends ii{constructor(e,t,r){super(`${qd}/${e}`,t||""),this.details=r,Object.setPrototypeOf(this,Gn.prototype)}}function HS(n){if(n>=200&&n<300)return"ok";switch(n){case 0:return"internal";case 400:return"invalid-argument";case 401:return"unauthenticated";case 403:return"permission-denied";case 404:return"not-found";case 409:return"aborted";case 429:return"resource-exhausted";case 499:return"cancelled";case 500:return"internal";case 501:return"unimplemented";case 503:return"unavailable";case 504:return"deadline-exceeded"}return"unknown"}function Tc(n,e){let t=HS(n),r=t,i;try{const s=e&&e.error;if(s){const a=s.status;if(typeof a=="string"){if(!qp[a])return new Gn("internal","internal");t=qp[a],r=a}const l=s.message;typeof l=="string"&&(r=l),i=s.details,i!==void 0&&(i=Bo(i))}}catch{}return t==="ok"?null:new Gn(t,r,i)}/**
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
 */class WS{constructor(e,t,r,i){this.app=e,this.auth=null,this.messaging=null,this.appCheck=null,this.serverAppAppCheckToken=null,ir(e)&&e.settings.appCheckToken&&(this.serverAppAppCheckToken=e.settings.appCheckToken),this.auth=t.getImmediate({optional:!0}),this.messaging=r.getImmediate({optional:!0}),this.auth||t.get().then(s=>this.auth=s,()=>{}),this.messaging||r.get().then(s=>this.messaging=s,()=>{}),this.appCheck||i==null||i.get().then(s=>this.appCheck=s,()=>{})}async getAuthToken(){if(this.auth)try{const e=await this.auth.getToken();return e==null?void 0:e.accessToken}catch{return}}async getMessagingToken(){if(!(!this.messaging||!("Notification"in self)||Notification.permission!=="granted"))try{return await this.messaging.getToken()}catch{return}}async getAppCheckToken(e){if(this.serverAppAppCheckToken)return this.serverAppAppCheckToken;if(this.appCheck){const t=e?await this.appCheck.getLimitedUseToken():await this.appCheck.getToken();return t.error?null:t.token}return null}async getContext(e){const t=await this.getAuthToken(),r=await this.getMessagingToken(),i=await this.getAppCheckToken(e);return{authToken:t,messagingToken:r,appCheckToken:i}}}/**
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
 */const kh="us-central1",GS=/^data: (.*?)(?:\n|$)/;function KS(n){let e=null;return{promise:new Promise((t,r)=>{e=setTimeout(()=>{r(new Gn("deadline-exceeded","deadline-exceeded"))},n)}),cancel:()=>{e&&clearTimeout(e)}}}class QS{constructor(e,t,r,i,s=kh,a=(...l)=>fetch(...l)){this.app=e,this.fetchImpl=a,this.emulatorOrigin=null,this.contextProvider=new WS(e,t,r,i),this.cancelAllRequests=new Promise(l=>{this.deleteService=()=>Promise.resolve(l())});try{const l=new URL(s);this.customDomain=l.origin+(l.pathname==="/"?"":l.pathname),this.region=kh}catch{this.customDomain=null,this.region=s}}_delete(){return this.deleteService()}_url(e){const t=this.app.options.projectId;return this.emulatorOrigin!==null?`${this.emulatorOrigin}/${t}/${this.region}/${e}`:this.customDomain!==null?`${this.customDomain}/${e}`:`https://${this.region}-${t}.cloudfunctions.net/${e}`}}function YS(n,e,t){const r=zs(e);n.emulatorOrigin=`http${r?"s":""}://${e}:${t}`,r&&(Jh(n.emulatorOrigin),Yg("Functions",!0))}function JS(n,e,t){const r=i=>ZS(n,e,i,{});return r.stream=(i,s)=>tR(n,e,i,s),r}async function XS(n,e,t,r){t["Content-Type"]="application/json";let i;try{i=await r(n,{method:"POST",body:JSON.stringify(e),headers:t})}catch{return{status:0,json:null}}let s=null;try{s=await i.json()}catch{}return{status:i.status,json:s}}async function vy(n,e){const t={},r=await n.contextProvider.getContext(e.limitedUseAppCheckTokens);return r.authToken&&(t.Authorization="Bearer "+r.authToken),r.messagingToken&&(t["Firebase-Instance-ID-Token"]=r.messagingToken),r.appCheckToken!==null&&(t["X-Firebase-AppCheck"]=r.appCheckToken),t}function ZS(n,e,t,r){const i=n._url(e);return eR(n,i,t,r)}async function eR(n,e,t,r){t=wc(t);const i={data:t},s=await vy(n,r),a=r.timeout||7e4,l=KS(a),c=await Promise.race([XS(e,i,s,n.fetchImpl),l.promise,n.cancelAllRequests]);if(l.cancel(),!c)throw new Gn("cancelled","Firebase Functions instance was deleted.");const h=Tc(c.status,c.json);if(h)throw h;if(!c.json)throw new Gn("internal","Response is not valid JSON object.");let f=c.json.data;if(typeof f>"u"&&(f=c.json.result),typeof f>"u")throw new Gn("internal","Response is missing data field.");return{data:Bo(f)}}function tR(n,e,t,r){const i=n._url(e);return nR(n,i,t,r||{})}async function nR(n,e,t,r){var i;t=wc(t);const s={data:t},a=await vy(n,r);a["Content-Type"]="application/json",a.Accept="text/event-stream";let l;try{l=await n.fetchImpl(e,{method:"POST",body:JSON.stringify(s),headers:a,signal:r==null?void 0:r.signal})}catch(E){if(E instanceof Error&&E.name==="AbortError"){const N=new Gn("cancelled","Request was cancelled.");return{data:Promise.reject(N),stream:{[Symbol.asyncIterator](){return{next(){return Promise.reject(N)}}}}}}const R=Tc(0,null);return{data:Promise.reject(R),stream:{[Symbol.asyncIterator](){return{next(){return Promise.reject(R)}}}}}}let c,h;const f=new Promise((E,R)=>{c=E,h=R});(i=r==null?void 0:r.signal)===null||i===void 0||i.addEventListener("abort",()=>{const E=new Gn("cancelled","Request was cancelled.");h(E)});const g=l.body.getReader(),_=rR(g,c,h,r==null?void 0:r.signal);return{stream:{[Symbol.asyncIterator](){const E=_.getReader();return{async next(){const{value:R,done:N}=await E.read();return{value:R,done:N}},async return(){return await E.cancel(),{done:!0,value:void 0}}}}},data:f}}function rR(n,e,t,r){const i=(a,l)=>{const c=a.match(GS);if(!c)return;const h=c[1];try{const f=JSON.parse(h);if("result"in f){e(Bo(f.result));return}if("message"in f){l.enqueue(Bo(f.message));return}if("error"in f){const g=Tc(0,f);l.error(g),t(g);return}}catch(f){if(f instanceof Gn){l.error(f),t(f);return}}},s=new TextDecoder;return new ReadableStream({start(a){let l="";return c();async function c(){if(r!=null&&r.aborted){const h=new Gn("cancelled","Request was cancelled");return a.error(h),t(h),Promise.resolve()}try{const{value:h,done:f}=await n.read();if(f){l.trim()&&i(l.trim(),a),a.close();return}if(r!=null&&r.aborted){const _=new Gn("cancelled","Request was cancelled");a.error(_),t(_),await n.cancel();return}l+=s.decode(h,{stream:!0});const g=l.split(`
`);l=g.pop()||"";for(const _ of g)_.trim()&&i(_.trim(),a);return c()}catch(h){const f=h instanceof Gn?h:Tc(0,null);a.error(f),t(f)}}},cancel(){return n.cancel()}})}const zp="@firebase/functions",jp="0.12.9";/**
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
 */const iR="auth-internal",sR="app-check-internal",oR="messaging-internal";function aR(n){const e=(t,{instanceIdentifier:r})=>{const i=t.getProvider("app").getImmediate(),s=t.getProvider(iR),a=t.getProvider(oR),l=t.getProvider(sR);return new QS(i,s,a,l,r)};Ti(new ti(qd,e,"PUBLIC").setMultipleInstances(!0)),kr(zp,jp,n),kr(zp,jp,"esm2017")}/**
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
 */function lR(n=Zh(),e=kh){const r=Fc(mn(n),qd).getImmediate({identifier:e}),i=uT("functions");return i&&cR(r,...i),r}function cR(n,e,t){YS(mn(n),e,t)}function uR(n,e,t){return JS(mn(n),e)}aR();/**
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
 */const hR=new Map,dR={activated:!1,tokenObservers:[]};function Vr(n){return hR.get(n)||Object.assign({},dR)}const Hp={RETRIAL_MIN_WAIT:30*1e3,RETRIAL_MAX_WAIT:960*1e3};/**
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
 */class fR{constructor(e,t,r,i,s){if(this.operation=e,this.retryPolicy=t,this.getWaitDuration=r,this.lowerBound=i,this.upperBound=s,this.pending=null,this.nextErrorWaitInterval=i,i>s)throw new Error("Proactive refresh lower bound greater than upper bound!")}start(){this.nextErrorWaitInterval=this.lowerBound,this.process(!0).catch(()=>{})}stop(){this.pending&&(this.pending.reject("cancelled"),this.pending=null)}isRunning(){return!!this.pending}async process(e){this.stop();try{this.pending=new th,this.pending.promise.catch(t=>{}),await pR(this.getNextRun(e)),this.pending.resolve(),await this.pending.promise,this.pending=new th,this.pending.promise.catch(t=>{}),await this.operation(),this.pending.resolve(),await this.pending.promise,this.process(!0).catch(()=>{})}catch(t){this.retryPolicy(t)?this.process(!1).catch(()=>{}):this.stop()}}getNextRun(e){if(e)return this.nextErrorWaitInterval=this.lowerBound,this.getWaitDuration();{const t=this.nextErrorWaitInterval;return this.nextErrorWaitInterval*=2,this.nextErrorWaitInterval>this.upperBound&&(this.nextErrorWaitInterval=this.upperBound),t}}}function pR(n){return new Promise(e=>{setTimeout(e,n)})}/**
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
 */const mR={"already-initialized":"You have already called initializeAppCheck() for FirebaseApp {$appName} with different options. To avoid this error, call initializeAppCheck() with the same options as when it was originally called. This will return the already initialized instance.","use-before-activation":"App Check is being used before initializeAppCheck() is called for FirebaseApp {$appName}. Call initializeAppCheck() before instantiating other Firebase services.","fetch-network-error":"Fetch failed to connect to a network. Check Internet connection. Original error: {$originalErrorMessage}.","fetch-parse-error":"Fetch client could not parse response. Original error: {$originalErrorMessage}.","fetch-status-error":"Fetch server returned an HTTP error status. HTTP status: {$httpStatus}.","storage-open":"Error thrown when opening storage. Original error: {$originalErrorMessage}.","storage-get":"Error thrown when reading from storage. Original error: {$originalErrorMessage}.","storage-set":"Error thrown when writing to storage. Original error: {$originalErrorMessage}.","recaptcha-error":"ReCAPTCHA error.","initial-throttle":"{$httpStatus} error. Attempts allowed again after {$time}",throttled:"Requests throttled due to previous {$httpStatus} error. Attempts allowed again after {$time}"},Ic=new Go("appCheck","AppCheck",mR);function yy(n){if(!Vr(n).activated)throw Ic.create("use-before-activation",{appName:n.name})}/**
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
 */const gR="firebase-app-check-database",_R=1,Nh="firebase-app-check-store";let Ll=null;function vR(){return Ll||(Ll=new Promise((n,e)=>{try{const t=indexedDB.open(gR,_R);t.onsuccess=r=>{n(r.target.result)},t.onerror=r=>{var i;e(Ic.create("storage-open",{originalErrorMessage:(i=r.target.error)===null||i===void 0?void 0:i.message}))},t.onupgradeneeded=r=>{const i=r.target.result;switch(r.oldVersion){case 0:i.createObjectStore(Nh,{keyPath:"compositeKey"})}}}catch(t){e(Ic.create("storage-open",{originalErrorMessage:t==null?void 0:t.message}))}}),Ll)}function yR(n,e){return ER(wR(n),e)}async function ER(n,e){const r=(await vR()).transaction(Nh,"readwrite"),s=r.objectStore(Nh).put({compositeKey:n,value:e});return new Promise((a,l)=>{s.onsuccess=c=>{a()},r.onerror=c=>{var h;l(Ic.create("storage-set",{originalErrorMessage:(h=c.target.error)===null||h===void 0?void 0:h.message}))}})}function wR(n){return`${n.options.appId}-${n.name}`}/**
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
 */const Oh=new Lc("@firebase/app-check");function Wp(n,e){return Jg()?yR(n,e).catch(t=>{Oh.warn(`Failed to write token to IndexedDB. Error: ${t}`)}):Promise.resolve()}/**
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
 */const TR={error:"UNKNOWN_ERROR"};function IR(n){return Yh.encodeString(JSON.stringify(n),!1)}async function Dh(n,e=!1,t=!1){const r=n.app;yy(r);const i=Vr(r);let s=i.token,a;if(s&&!Ra(s)&&(i.token=void 0,s=void 0),!s){const h=await i.cachedTokenPromise;h&&(Ra(h)?s=h:await Wp(r,void 0))}if(!e&&s&&Ra(s))return{token:s.token};let l=!1;try{i.exchangeTokenPromise||(i.exchangeTokenPromise=i.provider.getToken().finally(()=>{i.exchangeTokenPromise=void 0}),l=!0),s=await Vr(r).exchangeTokenPromise}catch(h){h.code==="appCheck/throttled"||h.code==="appCheck/initial-throttle"?Oh.warn(h.message):t&&Oh.error(h),a=h}let c;return s?a?Ra(s)?c={token:s.token,internalError:a}:c=Kp(a):(c={token:s.token},i.token=s,await Wp(r,s)):c=Kp(a),l&&RR(r,c),c}async function AR(n){const e=n.app;yy(e);const{provider:t}=Vr(e);{const{token:r}=await t.getToken();return{token:r}}}function bR(n,e,t,r){const{app:i}=n,s=Vr(i),a={next:t,error:r,type:e};if(s.tokenObservers=[...s.tokenObservers,a],s.token&&Ra(s.token)){const l=s.token;Promise.resolve().then(()=>{t({token:l.token}),Gp(n)}).catch(()=>{})}s.cachedTokenPromise.then(()=>Gp(n))}function Ey(n,e){const t=Vr(n),r=t.tokenObservers.filter(i=>i.next!==e);r.length===0&&t.tokenRefresher&&t.tokenRefresher.isRunning()&&t.tokenRefresher.stop(),t.tokenObservers=r}function Gp(n){const{app:e}=n,t=Vr(e);let r=t.tokenRefresher;r||(r=SR(n),t.tokenRefresher=r),!r.isRunning()&&t.isTokenAutoRefreshEnabled&&r.start()}function SR(n){const{app:e}=n;return new fR(async()=>{const t=Vr(e);let r;if(t.token?r=await Dh(n,!0):r=await Dh(n),r.error)throw r.error;if(r.internalError)throw r.internalError},()=>!0,()=>{const t=Vr(e);if(t.token){let r=t.token.issuedAtTimeMillis+(t.token.expireTimeMillis-t.token.issuedAtTimeMillis)*.5+3e5;const i=t.token.expireTimeMillis-300*1e3;return r=Math.min(r,i),Math.max(0,r-Date.now())}else return 0},Hp.RETRIAL_MIN_WAIT,Hp.RETRIAL_MAX_WAIT)}function RR(n,e){const t=Vr(n).tokenObservers;for(const r of t)try{r.type==="EXTERNAL"&&e.error!=null?r.error(e.error):r.next(e)}catch{}}function Ra(n){return n.expireTimeMillis-Date.now()>0}function Kp(n){return{token:IR(TR),error:n}}/**
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
 */class CR{constructor(e,t){this.app=e,this.heartbeatServiceProvider=t}_delete(){const{tokenObservers:e}=Vr(this.app);for(const t of e)Ey(this.app,t.next);return Promise.resolve()}}function PR(n,e){return new CR(n,e)}function kR(n){return{getToken:e=>Dh(n,e),getLimitedUseToken:()=>AR(n),addTokenListener:e=>bR(n,"INTERNAL",e),removeTokenListener:e=>Ey(n.app,e)}}const NR="@firebase/app-check",OR="0.10.1",DR="app-check",Qp="app-check-internal";function VR(){Ti(new ti(DR,n=>{const e=n.getProvider("app").getImmediate(),t=n.getProvider("heartbeat");return PR(e,t)},"PUBLIC").setInstantiationMode("EXPLICIT").setInstanceCreatedCallback((n,e,t)=>{n.getProvider(Qp).initialize()})),Ti(new ti(Qp,n=>{const e=n.getProvider("app-check").getImmediate();return kR(e)},"PUBLIC").setInstantiationMode("EXPLICIT")),kr(NR,OR)}VR();const wy={apiKey:void 0,authDomain:void 0,projectId:void 0,appId:void 0,messagingSenderId:void 0},Ty=Object.values(wy).every(Boolean),qo=Ty?SI().length?Zh():e_(wy):null,Ac=qo?Y_(qo):null,Yp=qo?SS(qo,{ignoreUndefinedProperties:!0}):null,Jp=qo?lR(qo,"us-central1"):null;function $n(){if(!Ac||!Yp||!Jp)throw new Error("Configure as variáveis Firebase no arquivo .env antes de usar o sistema.");return{auth:Ac,db:Yp,functions:Jp}}const MR="modulepreload",xR=function(n){return"/"+n},Xp={},LR=function(e,t,r){let i=Promise.resolve();if(t&&t.length>0){let a=function(h){return Promise.all(h.map(f=>Promise.resolve(f).then(g=>({status:"fulfilled",value:g}),g=>({status:"rejected",reason:g}))))};document.getElementsByTagName("link");const l=document.querySelector("meta[property=csp-nonce]"),c=(l==null?void 0:l.nonce)||(l==null?void 0:l.getAttribute("nonce"));i=a(t.map(h=>{if(h=xR(h),h in Xp)return;Xp[h]=!0;const f=h.endsWith(".css"),g=f?'[rel="stylesheet"]':"";if(document.querySelector(`link[href="${h}"]${g}`))return;const _=document.createElement("link");if(_.rel=f?"stylesheet":MR,f||(_.as="script"),_.crossOrigin="",_.href=h,c&&_.setAttribute("nonce",c),document.head.appendChild(_),f)return new Promise((E,R)=>{_.addEventListener("load",E),_.addEventListener("error",()=>R(new Error(`Unable to preload CSS for ${h}`)))})}))}function s(a){const l=new Event("vite:preloadError",{cancelable:!0});if(l.payload=a,window.dispatchEvent(l),!l.defaultPrevented)throw a}return i.then(a=>{for(const l of a||[])l.status==="rejected"&&s(l.reason);return e().catch(s)})},Ci=n=>uR($n().functions,n);async function FR(n){const{auth:e}=$n(),t=await Ci("verifyEmployee")({matricula:n});return O_(e,t.data.token)}async function UR(n,e){const{auth:t}=$n();return(await D_(t,n,e)).user}async function Zp(n,e){const{db:t}=$n(),r=n.trim().toLocaleLowerCase("pt-BR").normalize("NFD").replace(/[\u0300-\u036f]/g,""),i=Pd(t,"items");if(r)return{items:(await Ci("searchItems")({prefix:r.split(/\s+/)[0].slice(0,20)})).data.items,cursor:void 0};const s=[LS("active","==",!0),Ld("name"),...e?[FS(e)]:[],Ud(40)],a=await Bd(Vd(i,...s));return{items:a.docs.map(l=>({id:l.id,...l.data()})),cursor:a.docs.at(-1)}}async function em(){const{db:n}=$n();return(await Bd(Vd(Pd(n,"items"),Ld("name"),Ud(300)))).docs.map(t=>({id:t.id,...t.data()}))}async function tm(){const{db:n}=$n();return(await Bd(Vd(Pd(n,"employees"),Ld("name"),Ud(300)))).docs.map(t=>({id:t.id,...t.data()}))}async function nm(n){return $n(),(await Ci("listMovements")({itemId:n})).data.movements}async function $R(){return $n(),Ci("getDashboardSummary")({timezoneOffsetMinutes:new Date().getTimezoneOffset()})}async function rm(n){return $n(),Ci("recordMovement")(n)}async function BR(n){return $n(),Ci("saveItem")(n)}async function qR(n){return $n(),Ci("saveEmployee")(n)}async function zR(n,e){$n();const t=await Ci("createImageUpload")({itemId:e,contentType:n.type,size:n.size});if(!(await fetch(t.data.uploadUrl,{method:"PUT",headers:{"Content-Type":"image/webp"},body:n})).ok)throw new Error("O armazenamento recusou o envio da imagem. Confira a configuração CORS do bucket R2.");return{imageUrl:t.data.imageUrl,imageObjectKey:t.data.imageObjectKey}}async function im(n,e){return $n(),Ci("deleteItemImage")({itemId:n,imageObjectKey:e})}async function jR(n,e){const t=await createImageBitmap(n),r=Math.min(1,1200/Math.max(t.width,t.height)),i=document.createElement("canvas");i.width=Math.round(t.width*r),i.height=Math.round(t.height*r);const s=i.getContext("2d");if(!s)throw new Error("Não foi possível preparar a imagem.");s.drawImage(t,0,0,i.width,i.height);const a=await new Promise((l,c)=>i.toBlob(h=>h?l(h):c(new Error("Falha ao comprimir a imagem.")),"image/webp",.82));if(a.size>5*1024*1024)throw new Error("A imagem comprimida excede 5 MB.");return zR(new File([a],"item.webp",{type:"image/webp"}),e)}async function HR(n){const{auth:e}=$n(),{sendPasswordResetEmail:t}=await LR(async()=>{const{sendPasswordResetEmail:r}=await Promise.resolve().then(()=>BA);return{sendPasswordResetEmail:r}},void 0);return t(e,n)}async function sm(){const{auth:n}=$n();return L_(n)}var WR=ee('<a class="cloud-function-link" target="_blank" rel="noreferrer">Abrir Cloud Functions no Firebase Console</a>'),GR=ee('<meta name="apple-mobile-web-app-title" content="Estoque"/> <meta name="theme-color" content="#f3f5f2"/>',1),KR=ee('<article class="movement-row"><span><!></span><div class="movement-copy"><strong> </strong><span> </span><small> </small></div><div><strong> </strong><small> </small></div></article>'),QR=ee('<div class="movement-list"></div>'),YR=ee('<main class="entry-screen"><section class="entry-content" role="status" aria-live="polite"><div class="brand-mark"><!></div> <p class="eyebrow">ARMAZÉM · CONTROLE INTERNO</p> <h1>VERIFICANDO<br/>ACESSO</h1> <p class="entry-hint">Aguarde enquanto verificamos sua sessão.</p></section></main>'),JR=ee('<form class="access-form"><label for="email">E-MAIL</label> <div class="input-wrap"><!><input id="email" type="email" autocomplete="username" placeholder="nome@empresa.com" required=""/></div> <label for="password" class="second-label">SENHA</label> <div class="input-wrap"><!><input id="password" type="password" autocomplete="current-password" placeholder="Sua senha" required=""/></div> <button class="primary-button" type="submit"> <span aria-hidden="true">↗</span></button> <button class="text-button reset-button" type="button">Recuperar senha</button></form>'),XR=ee('<form class="access-form"><label for="matricula">MATRÍCULA</label> <div class="input-wrap"><!><input id="matricula" inputmode="text" autocomplete="off" placeholder="Digite sua matrícula" required=""/></div> <button class="primary-button" type="submit"> <span aria-hidden="true">↗</span></button></form>'),Fl=ee('<p class="form-message error-message" role="alert"> </p>'),ZR=ee('<p class="form-message success-message" role="status"> </p>'),eC=ee('<p class="form-message setup-message">Configure as variáveis Firebase do arquivo `.env` para conectar este sistema.</p>'),tC=ee('<main class="entry-screen"><button class="admin-shortcut" aria-label="Acesso administrativo" title="Acesso administrativo"><!></button> <section class="entry-content" aria-labelledby="page-title"><div class="brand-mark"><!></div> <p class="eyebrow">ARMAZÉM · CONTROLE INTERNO</p> <h1 id="page-title"> </h1> <p class="entry-hint"> </p> <!> <!> <!> <!> <!> <p class="connection-note"><span></span> ACESSO RESTRITO A USUÁRIOS AUTORIZADOS</p></section> <footer>ESTOQUE · OPERAÇÃO E MANUTENÇÃO</footer></main>'),om=ee('<div class="inline-message error-message" role="alert"><!><span> </span><!><button aria-label="Fechar aviso"><!></button></div>'),am=ee('<div class="inline-message success-message" role="status"><!> <button aria-label="Fechar aviso"><!></button></div>'),nC=ee('<tr><td><button class="table-link"> </button></td><td> </td><td> </td><td><span> </span></td><td> </td></tr>'),rC=ee('<div class="table-scroll"><table><thead><tr><th>ITEM</th><th>CÓDIGO</th><th>LOCALIZAÇÃO</th><th>DISPONÍVEL</th><th>MÍNIMO</th></tr></thead><tbody></tbody></table></div>'),iC=ee('<p class="empty-state">Nenhum item precisa de reposição.</p>'),sC=ee('<button class="quiet-button">Carregar movimentações <!></button>'),oC=ee('<section class="overview-page"><div class="metric-grid"><article class="metric"><p>TOTAL DE ITENS</p><strong> </strong><span>no catálogo</span><!></article> <article class="metric"><p>ITENS ATIVOS</p><strong> </strong><span>disponíveis para consulta</span><!></article> <article class="metric alert-metric"><p>SEM ESTOQUE</p><strong> </strong><span>reposição imediata</span><!></article> <article class="metric warn-metric"><p>ESTOQUE BAIXO</p><strong> </strong><span>no limite mínimo</span><!></article> <article class="metric"><p>MOVIMENTAÇÕES HOJE</p><strong> </strong><span>registradas no servidor</span><!></article> <article class="metric"><p>ENTRADAS HOJE</p><strong> </strong><span>materiais adicionados</span><!></article> <article class="metric"><p>RETIRADAS HOJE</p><strong> </strong><span>materiais retirados</span><!></article></div> <section class="content-section restock-section"><div class="section-heading"><div><p class="eyebrow">ATENÇÃO</p><h2>Reposição necessária</h2></div><button class="quiet-button">Ver todos <!></button></div> <!></section> <section class="content-section today-section"><div class="section-heading"><div><p class="eyebrow">ATIVIDADE</p><h2>Movimentações recentes</h2></div><button class="quiet-button">Abrir histórico <!></button></div> <!></section></section>'),lm=ee('<img alt="" loading="lazy"/>'),aC=ee('<span class="mini-placeholder"><!></span>'),lC=ee('<tr><td><div class="item-cell"><!><div><strong> </strong><small> </small></div></div></td><td> </td><td> </td><td> </td><td><span> </span></td><td><div class="row-actions"><button class="icon-action" aria-label="Adicionar ao estoque" title="Adicionar ao estoque"><!></button><button class="icon-action" aria-label="Retirar do estoque" title="Retirar do estoque"><!></button><button class="icon-action" aria-label="Editar item" title="Editar item"><!></button></div></td></tr>'),cC=ee('<tr><td colspan="6"><p class="empty-state">Nenhum item encontrado.</p></td></tr>'),uC=ee('<section class="content-section records-page"><div class="section-heading"><div><p class="eyebrow">CATÁLOGO</p><h2>Materiais cadastrados</h2></div><button class="primary-action"><!> Novo item</button></div> <div class="toolbar"><div class="search-box"><!><input placeholder="Buscar por nome, código ou informação"/></div><label class="location-filter"><!><input placeholder="Estante ou prateleira"/></label></div> <div class="table-scroll"><table><thead><tr><th>ITEM</th><th>CÓDIGO</th><th>LOCALIZAÇÃO</th><th>QUANTIDADE</th><th>SITUAÇÃO</th><th></th></tr></thead><tbody></tbody></table></div></section>'),hC=ee('<tr><td><strong> </strong></td><td> </td><td> </td><td> </td><td><span> </span></td><td><button class="icon-action" aria-label="Editar funcionário" title="Editar funcionário"><!></button></td></tr>'),dC=ee('<tr><td colspan="6"><p class="empty-state">Nenhum funcionário cadastrado.</p></td></tr>'),fC=ee('<section class="content-section records-page"><div class="section-heading"><div><p class="eyebrow">ACESSO INTERNO</p><h2>Cadastro de funcionários</h2></div><button class="primary-action"><!> Novo funcionário</button></div> <div class="table-scroll"><table><thead><tr><th>NOME</th><th>MATRÍCULA</th><th>ADICIONAR</th><th>RETIRAR</th><th>ACESSO</th><th></th></tr></thead><tbody></tbody></table></div></section>'),pC=ee('<p class="empty-state">Nenhuma movimentação corresponde ao filtro.</p>'),mC=ee('<section class="content-section records-page"><div class="section-heading"><div><p class="eyebrow">AUDITORIA</p><h2>Histórico imutável</h2></div></div> <div class="toolbar movement-filters"><div class="search-box"><!><input placeholder="Filtrar funcionário, matrícula, item ou código"/></div><select aria-label="Tipo de movimentação"><option>Todos os tipos</option><option>Entradas</option><option>Retiradas</option></select><label class="date-filter">DE<input type="date"/></label><label class="date-filter">ATÉ<input type="date"/></label><button class="quiet-button">Atualizar <!></button></div> <!></section>'),gC=ee('<main class="admin-layout"><aside class="admin-rail"><a class="rail-brand" href="#inicio" aria-label="Controle de estoque"><!></a> <nav aria-label="Administração"><button title="Visão geral" aria-label="Visão geral"><!></button> <button title="Itens" aria-label="Itens"><!></button> <button title="Funcionários" aria-label="Funcionários"><!></button> <button title="Movimentações" aria-label="Movimentações"><!></button></nav> <button class="rail-logout" aria-label="Sair" title="Sair"><!></button></aside> <section class="admin-main"><header class="topbar"><div><p class="eyebrow">ARMAZÉM / ADMINISTRAÇÃO</p><h1> </h1></div> <div class="user-chip"><!><span>Administrador</span><button aria-label="Sair"><!></button></div></header> <!> <!> <!></section></main>'),_C=ee("<img/>"),vC=ee('<div class="large-placeholder"><!></div>'),yC=ee('<p class="detail-description"> </p>'),EC=ee('<p class="location-note"> </p>'),wC=ee("<div><dt> </dt><dd> </dd></div>"),TC=ee('<section class="custom-fields"><p class="eyebrow">INFORMAÇÕES ADICIONAIS</p><dl></dl></section>'),IC=ee("<span>→</span> após operação <strong> </strong>",1),AC=ee('<section class="detail-page"><button class="back-button"><!> VOLTAR À LISTA</button> <div class="detail-grid"><div class="detail-image"><!></div> <div class="detail-main"><div class="detail-title-row"><div><p class="eyebrow"> </p><h1> </h1></div><span> </span></div> <!> <div class="detail-facts"><div class="quantity-fact"><span>DISPONÍVEL</span><strong> <small> </small></strong></div><div><span>LOCALIZAÇÃO</span><strong class="location-emphasis"> </strong></div><div><span>ESTOQUE MÍNIMO</span><strong> </strong></div><div><span>TIPO</span><strong> </strong></div></div> <!> <!> <form class="movement-panel"><div class="section-heading"><div><p class="eyebrow">MOVIMENTAÇÃO</p><h2>Registrar operação</h2></div></div> <div class="segmented"><button type="button"><!> Retirar</button><button type="button"><!> Adicionar</button></div> <div class="movement-inputs"><label>QUANTIDADE<input type="number" min="0.001" step="0.001" required=""/></label><label>MOTIVO <span>(opcional)</span><input maxlength="250" placeholder="Ex.: manutenção preventiva"/></label></div> <p class="balance-preview">Saldo atual <strong> </strong><!></p> <button class="primary-action confirm-movement" type="submit"> <!></button></form></div></div></section>'),bC=ee('<div class="card-placeholder"><!></div>'),SC=ee(" <span> </span>",1),RC=ee('<button class="inventory-card"><div class="card-image"><!></div> <div class="card-body"><div class="card-heading"><span class="eyebrow"> </span><span></span></div><h2> </h2><p class="card-location"> </p><div class="card-footer"><strong><!></strong><span> </span></div></div></button>'),CC=ee('<div class="inventory-grid"></div>'),PC=ee('<div class="empty-stock"><!><p>Nenhum material encontrado.</p><span>Confira o código ou tente outro termo.</span></div>'),kC=ee('<button class="load-more"> <!></button>'),NC=ee('<section class="inventory-page"><div class="inventory-intro"><div><p class="eyebrow">CONSULTA RÁPIDA</p><h1>Encontre seu material.</h1></div><p> </p></div> <div class="search-box main-search"><!><input placeholder="Nome, código ou informação adicional" aria-label="Buscar materiais"/><kbd>↵</kbd></div> <div class="quick-filter-row"><label class="location-filter"><!><input placeholder="Filtrar por estante ou prateleira"/></label><span><span class="dot normal-dot"></span>Disponível <span class="dot low-dot"></span>Baixo <span class="dot empty-dot"></span>Zerado</span></div> <!> <!></section>'),OC=ee('<main class="stock-app"><header class="stock-header"><div class="stock-brand"><div class="brand-mark"><!></div><div><p class="eyebrow">ARMAZÉM · ESTOQUE</p><strong> </strong></div></div> <div class="employee-chip"><span> </span><button title="Sair ou trocar funcionário" aria-label="Sair ou trocar funcionário"><!></button></div></header> <!> <!> <!></main>'),DC=ee('<p class="entry-hint">Aguarde enquanto confirmamos seu acesso.</p>'),VC=ee('<p class="form-message error-message" role="alert"> </p> <!> <button class="primary-button">VOLTAR AO LOGIN <span aria-hidden="true">↗</span></button>',1),MC=ee('<main class="entry-screen"><section class="entry-content"><div class="brand-mark"><!></div> <p class="eyebrow">ARMAZÉM · CONTROLE INTERNO</p> <h1> </h1> <!></section></main>'),xC=ee('<div class="image-actions"><img class="upload-preview" alt="Prévia do item"/><button type="button" class="remove-image"><!> Excluir fotografia</button></div>'),LC=ee('<div class="custom-row"><label>Nome do campo<input maxlength="60" placeholder="Ex.: Fabricante"/></label><label>Informação<input maxlength="250" placeholder="Valor"/></label><button type="button" class="remove-field" aria-label="Remover campo" title="Remover campo"><!></button></div>'),FC=ee('<p class="form-hint">Nenhuma informação adicional.</p>'),UC=ee('<div class="dialog-backdrop" role="presentation"><dialog open="" class="edit-dialog" aria-labelledby="item-dialog-title"><header class="dialog-header"><div><p class="eyebrow">CATÁLOGO DE ESTOQUE</p><h2 id="item-dialog-title"> </h2></div><button class="icon-action" aria-label="Fechar"><!></button></header> <form class="dialog-form"><div class="form-grid"><label>Nome do item<input maxlength="120" required=""/></label><label>Código único<input maxlength="64" required=""/></label><label>Categoria<input maxlength="80"/></label><label>Tipo<select><option>Peça</option><option>Componente</option><option>Ferramenta</option><option>Máquina</option></select></label><label>Controle<select><option>Quantidade</option><option>Individual (série/patrimônio)</option></select></label><label>Unidade<input maxlength="20" required=""/></label><label>Quantidade inicial<input type="number" min="0" step="0.001" required=""/></label><label>Estoque mínimo<input type="number" min="0" step="0.001" required=""/></label><label>Estante<input maxlength="20"/></label><label>Prateleira<input maxlength="20"/></label><label>Localização complementar<input maxlength="100"/></label><label class="wide-field">Descrição<textarea maxlength="2000" rows="3"></textarea></label><label class="wide-field upload-control"><span>Fotografia do item</span><span class="upload-box"><!> <input type="file" accept="image/*"/></span><!></label><label class="check-label"><input type="checkbox"/> Item ativo</label></div> <section class="custom-editor"><div class="section-heading"><div><p class="eyebrow">FLEXÍVEL POR ITEM</p><h3>Informações adicionais</h3></div><button type="button" class="add-field-button"><!> Adicionar campo</button></div> <!> <!></section> <!> <!> <div class="dialog-actions"><button class="quiet-button" type="button">Cancelar</button><button class="primary-action" type="submit"> <!></button></div></form></dialog></div>'),$C=ee('<div class="dialog-backdrop" role="presentation"><dialog open="" class="edit-dialog employee-dialog" aria-labelledby="employee-dialog-title"><header class="dialog-header"><div><p class="eyebrow">ACESSO INTERNO</p><h2 id="employee-dialog-title"> </h2></div><button class="icon-action" aria-label="Fechar"><!></button></header> <form class="dialog-form"><div class="form-grid"><label class="wide-field">Nome completo<input maxlength="120" required=""/></label><label class="wide-field">Matrícula<input maxlength="32" required=""/></label><label class="check-label"><input type="checkbox"/> Acesso ativo</label><label class="check-label"><input type="checkbox"/> Pode adicionar materiais</label><label class="check-label"><input type="checkbox"/> Pode retirar materiais</label></div> <!> <!> <div class="dialog-actions"><button class="quiet-button" type="button">Cancelar</button><button class="primary-action" type="submit"> <!></button></div></form></dialog></div>'),BC=ee('<div class="dialog-backdrop" role="presentation"><dialog open="" class="edit-dialog employee-dialog" aria-labelledby="admin-movement-title"><header class="dialog-header"><div><p class="eyebrow">AJUSTE AUDITÁVEL</p><h2 id="admin-movement-title">Movimentar estoque</h2></div><button class="icon-action" aria-label="Fechar"><!></button></header> <form class="dialog-form"><p class="admin-movement-item"><strong> </strong><span> </span></p> <div class="segmented"><button type="button"><!> Retirar</button><button type="button"><!> Adicionar</button></div> <div class="form-grid admin-movement-fields"><label>Quantidade<input type="number" min="0.001" step="0.001" required=""/></label><label>Motivo<input maxlength="250" placeholder="Motivo do ajuste"/></label></div> <!> <!> <div class="dialog-actions"><button class="quiet-button" type="button">Cancelar</button><button class="primary-action" type="submit"> <!></button></div></form></dialog></div>'),qC=ee("<!> <!> <!> <!>",1);function zC(n,e){Fh(e,!0);const t=M=>{var $=dg(),ae=ro($);{var le=Z=>{var Ne=WR();Ee(()=>Lr(Ne,"href",p(P))),Q(Z,Ne)};me(ae,Z=>{p(P)&&Z(le)})}Q(M,$)},r=(M,$=Mh)=>{var ae=QR();zi(ae,21,$,le=>le.id,(le,Z)=>{var Ne=KR(),et=b(Ne);let He;var Ft=b(et);{var it=G=>{bu(G,{size:18})},Ye=G=>{Sl(G,{size:18})};me(Ft,G=>{p(Z).movementType==="entry"?G(it):G(Ye,-1)})}var st=y(et),ht=b(st),Je=K(ht,!0),bt=y(ht),Et=K(bt),dt=y(bt),ft=K(dt),St=y(st);let Wt;var Ot=b(St),be=K(Ot),ze=y(Ot),We=K(ze);Ee(G=>{He=hn(et,1,"movement-icon",null,He,{"movement-in":p(Z).movementType==="entry"}),j(Je,p(Z).itemNameSnapshot),j(Et,`${p(Z).employeeNameSnapshot??""} · ${p(Z).matriculaSnapshot??""} · ${p(Z).itemCode??""}`),j(ft,`${(p(Z).reason||(p(Z).movementType==="entry"?"Entrada":"Retirada"))??""} · ${G??""}`),Wt=hn(St,1,"movement-quantity",null,Wt,{"entry-quantity":p(Z).movementType==="entry"}),j(be,`${p(Z).movementType==="entry"?"+":"−"}${p(Z).quantity??""}`),j(We,`${p(Z).quantityBefore??""} → ${p(Z).quantityAfter??""}`)},[()=>{var G;return fl((G=p(Z).createdAt)==null?void 0:G.seconds)}]),Q(le,Ne)}),Q(M,ae)},i=()=>({name:"",code:"",description:"",category:"",itemType:"piece",trackingMode:"quantity",unit:"UN",quantity:0,minimumStock:0,rackNumber:"",shelfNumber:"",locationNote:"",imageUrl:"",imageObjectKey:"",customFields:[],active:!0});let s=re(null),a=re(null),l=re(null),c=re("overview"),h=re(!1),f=re(""),g=re(""),_=re(""),E=re(!1),R=re(!0),N=re(""),P=re(""),U=re(""),B=re(""),z=re(""),J=re(fr([])),qe=re(void 0),Y=re(!1),I=re(!1),v=re(fr([])),w=re(fr([])),A=re(fr([])),C=re(fr({itemCount:0,activeItemCount:0,stockOutCount:0,lowStockCount:0,movementCount:0,todayEntries:0,todayWithdrawals:0})),S=re(null),T=re("withdrawal"),Ze=re(1),or=re(""),Pi=re(""),Bn=re(""),_n=re(!1),Nt=re(!1),ar=re(!1),lr=re(null),an=re("entry"),yt=re(1),Gs=re(""),X=re(fr(i())),si=re(""),Xt=re(fr({name:"",matricula:"",active:!0,canAdd:!0,canWithdraw:!0})),cs=re(""),gr=re(null),ki=re(""),oi=re("all"),Ni=re(""),Oi=re("");Ew(()=>{if(!Ac){O(R,!1);return}return x_(Ac,async M=>{if(O(s,M,!0),!M){O(a,null),O(l,null),O(J,[],!0),O(R,!1);return}O(R,!0),O(N,"");try{const $=await M.getIdTokenResult();if(O(a,$.claims.role==="admin"||$.signInProvider==="password"?"admin":$.claims.role==="employee"?"employee":null,!0),O(l,p(a)==="employee"?{id:String($.claims.employeeId??""),name:String($.claims.name??"Funcionário"),matricula:String($.claims.matricula??"")}:null,!0),!p(a))throw await sm(),new Error("Esta conta não possui um perfil autorizado.");await us(),p(a)==="admin"&&await ea()}catch($){vn($)}finally{O(R,!1)}})}),Wu(()=>{const M=p(B);if(!p(s)||!p(a)||p(S))return;const $=setTimeout(()=>us(M),250);return()=>clearTimeout($)}),Wu(()=>{p(a)==="admin"&&(p(c)==="employees"&&ta(),p(c)==="movements"&&Di())});async function us(M=p(B)){try{if(O(qe,void 0),O(Y,!1),p(a)==="admin"){const $=await em();O(v,$,!0),O(J,M.trim()?hs($,M):$.filter(ae=>ae.active),!0)}else{const $=await Zp(M);O(J,M.trim()?hs($.items,M):$.items,!0),O(qe,$.cursor,!0),O(Y,!!($.cursor&&$.items.length===40),!0)}}catch($){vn($)}}async function Zo(){if(!(!p(qe)||p(I)||p(B).trim())){O(I,!0);try{const M=await Zp("",p(qe));O(J,[...p(J),...M.items],!0),O(qe,M.cursor,!0),O(Y,!!(M.cursor&&M.items.length===40),!0)}catch(M){vn(M)}finally{O(I,!1)}}}function hs(M,$){const le=Ks($).split(/\s+/).filter(Boolean);return M.filter(Z=>{const Ne=Ks([Z.name,Z.code,Z.description,Z.category,...Z.customFields.flatMap(He=>[He.label,He.value])].join(" ")),et=`${Z.rackNumber} ${Z.shelfNumber}`.toLowerCase();return le.every(He=>Ne.includes(He)||et.includes(He))})}function Ks(M){return M.trim().toLocaleLowerCase("pt-BR").normalize("NFD").replace(/[\u0300-\u036f]/g,"")}async function ea(){try{const[M,$,ae,le]=await Promise.all([em(),tm(),nm(),$R()]);O(v,M,!0),O(w,$,!0),O(A,ae,!0),O(C,le.data,!0),O(J,p(B).trim()?hs(p(v),p(B)):p(v).filter(Z=>Z.active),!0)}catch(M){vn(M)}}async function ta(){try{O(w,await tm(),!0)}catch(M){vn(M)}}async function Di(){try{O(A,await nm(),!0)}catch(M){vn(M)}}async function ll(M){M.preventDefault(),O(E,!0),Kn();try{await FR(p(f).trim()),O(f,"")}catch($){vn($)}finally{O(E,!1)}}async function ou(M){M.preventDefault(),O(E,!0),Kn();try{await UR(p(g).trim(),p(_))}catch($){vn($)}finally{O(E,!1)}}async function na(){if(!p(g).trim()){O(N,"Informe o e-mail administrativo para recuperar a senha.");return}O(E,!0);try{await HR(p(g).trim()),O(U,"Enviamos as instruções de recuperação para o e-mail.")}catch(M){vn(M)}finally{O(E,!1)}}async function Vi(){await sm(),O(S,null),O(c,"overview"),Kn()}async function cl(M){if(M.preventDefault(),!(!p(S)||p(Ze)<=0)){if(p(T)==="withdrawal"&&p(Ze)>p(S).quantity){O(N,"Não há quantidade suficiente para essa retirada.");return}O(E,!0),Kn();try{const $=JSON.stringify([p(S).id,p(T),p(Ze),p(Bn).trim()]);$!==p(Pi)&&(O(Pi,$,!0),O(or,crypto.randomUUID(),!0));const ae=await rm({itemId:p(S).id,movementType:p(T),quantity:p(Ze),reason:p(Bn).trim(),idempotencyKey:p(or)});O(or,""),O(Pi,""),O(U,p(T)==="entry"?"Entrada registrada.":"Retirada registrada.",!0),O(Ze,1),O(Bn,""),await us(),O(S,{...p(S),quantity:ae.data.quantityAfter},!0);const le=p(J).find(Z=>{var Ne;return Z.id===((Ne=p(S))==null?void 0:Ne.id)});le&&O(S,le,!0),p(a)==="admin"&&await Di()}catch($){vn($)}finally{O(E,!1)}}}function Zt(){O(X,i(),!0),O(si,crypto.randomUUID(),!0),O(gr,null),O(_n,!0)}function en(M){O(X,{name:M.name,code:M.code,description:M.description,category:M.category,itemType:M.itemType,trackingMode:M.trackingMode,unit:M.unit,quantity:M.quantity,minimumStock:M.minimumStock,rackNumber:M.rackNumber,shelfNumber:M.shelfNumber,locationNote:M.locationNote,imageUrl:M.imageUrl,imageObjectKey:M.imageObjectKey,customFields:M.customFields.map($=>({...$})),active:M.active},!0),O(si,M.id,!0),O(gr,null),O(S,null),O(_n,!0)}function Qs(){if(p(X).customFields.length>=30){O(N,"Limite de 30 informações adicionais por item.");return}p(X).customFields=[...p(X).customFields,{id:crypto.randomUUID(),label:"",value:""}]}async function ul(M){if(M.preventDefault(),Kn(),p(X).customFields.some($=>!$.label.trim()||!$.value.trim())){O(N,"Preencha o nome e o valor de cada informação adicional ou remova o campo vazio.");return}O(E,!0);try{const $=p(X).imageObjectKey;if(p(gr)){const ae=await jR(p(gr),p(si));p(X).imageUrl=ae.imageUrl,p(X).imageObjectKey=ae.imageObjectKey}if(await BR({...p(X),itemId:p(si)}),p(gr)&&$)try{await im(p(si),$)}catch{O(U,"Item salvo; a imagem anterior precisa ser removida manualmente do bucket.")}O(_n,!1),p(U)||O(U,"Cadastro do item salvo."),await ea()}catch($){vn($)}finally{O(E,!1)}}async function hl(){if(!p(X).imageObjectKey){p(X).imageUrl="",O(gr,null);return}O(E,!0);try{await im(p(si),p(X).imageObjectKey),p(X).imageUrl="",p(X).imageObjectKey="",O(gr,null)}catch(M){vn(M)}finally{O(E,!1)}}function au(){O(Xt,{name:"",matricula:"",active:!0,canAdd:!0,canWithdraw:!0},!0),O(cs,""),O(Nt,!0)}function ds(M){O(Xt,{name:M.name,matricula:M.matricula,active:M.active,canAdd:M.canAdd,canWithdraw:M.canWithdraw},!0),O(cs,M.id,!0),O(Nt,!0)}async function dl(M){M.preventDefault(),O(E,!0),Kn();try{await qR({...p(Xt),...p(cs)?{employeeId:p(cs)}:{}}),O(Nt,!1),O(U,"Cadastro do funcionário salvo."),await ta()}catch($){vn($)}finally{O(E,!1)}}function ra(M,$){O(lr,M,!0),O(an,$,!0),O(yt,1),O(Gs,""),Kn(),O(ar,!0)}async function ia(M){if(M.preventDefault(),!!p(lr)){if(p(an)==="withdrawal"&&p(yt)>p(lr).quantity){O(N,"Não há quantidade suficiente para essa retirada.");return}O(E,!0),Kn();try{await rm({itemId:p(lr).id,movementType:p(an),quantity:p(yt),reason:p(Gs).trim(),idempotencyKey:crypto.randomUUID()}),O(ar,!1),O(U,"Movimentação administrativa registrada no histórico."),await ea()}catch($){vn($)}finally{O(E,!1)}}}function vn(M){var le;const $=M;(le=$.code)==null||le.startsWith("functions/"),O(P,"",!0);const ae={"functions/permission-denied":"Acesso não autorizado. Confira se a matrícula está ativa ou se a conta tem permissão.","functions/resource-exhausted":"Muitas tentativas. Aguarde alguns minutos e tente novamente.","functions/failed-precondition":"A operação não pode ser concluída com o saldo atual.","functions/already-exists":"Esse código ou matrícula já está cadastrado.","auth/invalid-credential":"E-mail ou senha incorretos.","auth/network-request-failed":"Sem conexão com o servidor. Movimentações exigem conexão ativa."};O(N,$.code&&ae[$.code]?ae[$.code]:$.message??"Ocorreu um erro. Tente novamente.",!0)}function Kn(){O(N,""),O(P,""),O(U,"")}function Mi(M){return M.rackNumber&&M.shelfNumber?`E-${M.rackNumber.padStart(2,"0")} / P-${M.shelfNumber.padStart(2,"0")}`:"LOCALIZAÇÃO NÃO CADASTRADA"}function Qn(M){return M.quantity<=0?"empty":M.quantity<=M.minimumStock?"low":"normal"}function fl(M){return M?new Intl.DateTimeFormat("pt-BR",{dateStyle:"short",timeStyle:"short"}).format(new Date(M*1e3)):"Agora"}function fs(M){var le;const $=(le=M.createdAt)!=null&&le.seconds?new Date(M.createdAt.seconds*1e3):new Date,ae=`${$.getFullYear()}-${String($.getMonth()+1).padStart(2,"0")}-${String($.getDate()).padStart(2,"0")}`;return(!p(Ni)||ae>=p(Ni))&&(!p(Oi)||ae<=p(Oi))}let Ys=rr(()=>p(A).filter(M=>Ks(`${M.employeeNameSnapshot} ${M.matriculaSnapshot} ${M.itemNameSnapshot} ${M.itemCode} ${M.movementType}`).includes(Ks(p(ki)))&&(p(oi)==="all"||M.movementType===p(oi))&&fs(M))),sa=rr(()=>p(C).stockOutCount),ai=rr(()=>p(C).lowStockCount);var oa=qC();ow("1n46o8q",M=>{var $=GR();Vc(()=>{zm.title="Controle de Estoque"}),Q(M,$)});var ps=ro(oa);{var pl=M=>{var $=YR(),ae=b($),le=b(ae),Z=b(le);to(Z,{size:25,strokeWidth:1.8}),Q(M,$)},ms=M=>{var $=tC(),ae=b($),le=b(ae);{var Z=G=>{af(G,{size:19})},Ne=G=>{uf(G,{size:19})};me(le,G=>{p(h)?G(Z):G(Ne,-1)})}var et=y(ae,2),He=b(et),Ft=b(He);to(Ft,{size:25,strokeWidth:1.8});var it=y(He,4),Ye=K(it,!0),st=y(it,2),ht=K(st,!0),Je=y(st,2);{var bt=G=>{var Ie=JR(),Oe=y(b(Ie),2),tt=b(Oe);Qw(tt,{size:19});var Ut=y(tt),pt=y(Oe,4),fe=b(pt);uf(fe,{size:18});var ot=y(fe),mt=y(pt,2),Ae=b(mt),cn=y(mt,2);Ee(()=>{mt.disabled=p(E),j(Ae,`${p(E)?"VALIDANDO...":"ENTRAR"} `)}),Zs("submit",Ie,ou),Qe(Ut,()=>p(g),Gt=>O(g,Gt)),Qe(ot,()=>p(_),Gt=>O(_,Gt)),oe("click",cn,na),Q(G,Ie)},Et=G=>{var Ie=XR(),Oe=y(b(Ie),2),tt=b(Oe);Cl(tt,{size:19,"aria-hidden":"true"});var Ut=y(tt),pt=y(Oe,2),fe=b(pt);Ee(ot=>{pt.disabled=ot,j(fe,`${p(E)?"VALIDANDO...":"ACESSAR"} `)},[()=>p(E)||!p(f).trim()]),Zs("submit",Ie,ll),Qe(Ut,()=>p(f),ot=>O(f,ot)),Q(G,Ie)};me(Je,G=>{p(h)?G(bt):G(Et,-1)})}var dt=y(Je,2);{var ft=G=>{var Ie=Fl(),Oe=K(Ie,!0);Ee(()=>j(Oe,p(N))),Q(G,Ie)};me(dt,G=>{p(N)&&G(ft)})}var St=y(dt,2);{var Wt=G=>{t(G)};me(St,G=>{p(N)&&G(Wt)})}var Ot=y(St,2);{var be=G=>{var Ie=ZR(),Oe=K(Ie,!0);Ee(()=>j(Oe,p(U))),Q(G,Ie)};me(Ot,G=>{p(U)&&G(be)})}var ze=y(Ot,2);{var We=G=>{var Ie=eC();Q(G,Ie)};me(ze,G=>{Ty||G(We)})}Ee(()=>{j(Ye,p(h)?`ACESSO
ADMINISTRATIVO`:`CONTROLE
DE ESTOQUE`),j(ht,p(h)?"Entre com sua conta administrativa.":"Identifique-se para consultar os materiais.")}),oe("click",ae,()=>{O(h,!p(h)),Kn()}),Q(M,$)},ml=M=>{var $=gC(),ae=b($),le=b(ae),Z=b(le);to(Z,{size:22});var Ne=y(le,2),et=b(Ne);let He;var Ft=b(et);eo(Ft,{size:20});var it=y(et,2);let Ye;var st=b(it);eT(st,{size:20});var ht=y(it,2);let Je;var bt=b(ht);Jw(bt,{size:20});var Et=y(ht,2);let dt;var ft=b(Et);cf(ft,{size:20});var St=y(Ne,2),Wt=b(St);Au(Wt,{size:19});var Ot=y(ae,2),be=b(Ot),ze=b(be),We=y(b(ze)),G=K(We,!0),Ie=y(ze,2),Oe=b(Ie);jw(Oe,{size:17});var tt=y(Oe,2),Ut=b(tt);Au(Ut,{size:17});var pt=y(be,2);{var fe=Fe=>{var he=om(),ge=b(he);Iu(ge,{size:18});var Se=y(ge),_e=K(Se,!0),at=y(Se);t(at);var gt=y(at),Rt=b(gt);Es(Rt,{size:17}),Ee(()=>j(_e,p(N))),oe("click",gt,()=>{O(N,""),O(P,"")}),Q(Fe,he)};me(pt,Fe=>{p(N)&&Fe(fe)})}var ot=y(pt,2);{var mt=Fe=>{var he=am(),ge=b(he);pa(ge,{size:18});var Se=y(ge,1,!0),_e=y(Se),at=b(_e);Es(at,{size:17}),Ee(()=>j(Se,p(U))),oe("click",_e,()=>O(U,"")),Q(Fe,he)};me(ot,Fe=>{p(U)&&Fe(mt)})}var Ae=y(ot,2);{var cn=Fe=>{var he=oC(),ge=b(he),Se=b(ge),_e=y(b(Se)),at=K(_e,!0),gt=y(_e,2);eo(gt,{size:20});var Rt=y(Se,2),Ct=y(b(Rt)),Ke=K(Ct,!0),nt=y(Ct,2);to(nt,{size:20});var Kt=y(Rt,2),$t=y(b(Kt)),tn=K($t,!0),wt=y($t,2);Iu(wt,{size:20});var Ge=y(Kt,2),Re=y(b(Ge)),yn=K(Re,!0),lt=y(Re,2);Sl(lt,{size:20});var je=y(Ge,2),nn=y(b(je)),Dt=K(nn,!0),rn=y(nn,2);cf(rn,{size:20});var En=y(je,2),Vt=y(b(En)),Pt=K(Vt,!0),wn=y(Vt,2);bu(wn,{size:20});var Yn=y(En,2),L=y(b(Yn)),pe=K(L,!0),kt=y(L,2);Sl(kt,{size:20});var Qt=y(ge,2),sn=b(Qt),_r=y(b(sn)),qn=y(b(_r));Rl(qn,{size:16});var vr=y(sn,2);{var Bt=de=>{var Ue=rC(),Vn=b(Ue),li=y(b(Vn));zi(li,21,()=>p(v).filter(zn=>zn.active&&zn.quantity<=zn.minimumStock).slice(0,10),zn=>zn.id,(zn,Mn)=>{var _s=nC(),ci=b(_s),aa=b(ci),vl=K(aa,!0),xr=y(ci),yl=K(xr,!0),la=y(xr),El=K(la,!0),ca=y(la),vs=b(ca);let Tn;var wl=K(vs),Tl=y(ca),Ui=K(Tl);Ee(o=>{j(vl,p(Mn).name),j(yl,p(Mn).code),j(El,o),Tn=hn(vs,1,"",null,Tn,{"danger-text":p(Mn).quantity===0}),j(wl,`${p(Mn).quantity??""} ${p(Mn).unit??""}`),j(Ui,`${p(Mn).minimumStock??""} ${p(Mn).unit??""}`)},[()=>Mi(p(Mn))]),oe("click",aa,()=>en(p(Mn))),Q(zn,_s)}),Q(de,Ue)},yr=rr(()=>p(v).filter(de=>de.active&&de.quantity<=de.minimumStock).length),cr=de=>{var Ue=iC();Q(de,Ue)};me(vr,de=>{p(yr)?de(Bt):de(cr,-1)})}var Jn=y(Qt,2),Er=b(Jn),wr=y(b(Er)),Xn=y(b(wr));Rl(Xn,{size:16});var Fi=y(Er,2);{var ve=de=>{{let Ue=rr(()=>p(A).slice(0,5));r(de,()=>p(Ue))}},rt=de=>{var Ue=sC(),Vn=y(b(Ue));Rl(Vn,{size:16}),oe("click",Ue,Di),Q(de,Ue)};me(Fi,de=>{p(A).length?de(ve):de(rt,-1)})}Ee(()=>{j(at,p(C).itemCount),j(Ke,p(C).activeItemCount),j(tn,p(sa)),j(yn,p(ai)),j(Dt,p(C).movementCount),j(Pt,p(C).todayEntries),j(pe,p(C).todayWithdrawals)}),oe("click",_r,()=>O(c,"items")),oe("click",wr,()=>O(c,"movements")),Q(Fe,he)},Gt=Fe=>{var he=uC(),ge=b(he),Se=y(b(ge)),_e=b(Se);ma(_e,{size:18});var at=y(ge,2),gt=b(at),Rt=b(gt);Cl(Rt,{size:19});var Ct=y(Rt),Ke=y(gt),nt=b(Ke);Pl(nt,{size:17});var Kt=y(nt),$t=y(at,2),tn=b($t),wt=y(b(tn));zi(wt,21,()=>p(v).filter(Ge=>(!p(B).trim()||hs([Ge],p(B)).length)&&(!p(z)||`${Ge.rackNumber} ${Ge.shelfNumber}`.toLowerCase().includes(p(z).toLowerCase()))),Ge=>Ge.id,(Ge,Re)=>{var yn=lC(),lt=b(yn),je=b(lt),nn=b(je);{var Dt=de=>{var Ue=lm();Ee(()=>Lr(Ue,"src",p(Re).imageUrl)),Q(de,Ue)},rn=de=>{var Ue=aC(),Vn=b(Ue);eo(Vn,{size:18}),Q(de,Ue)};me(nn,de=>{p(Re).imageUrl?de(Dt):de(rn,-1)})}var En=y(nn),Vt=b(En),Pt=K(Vt,!0),wn=y(Vt),Yn=K(wn,!0),L=y(lt),pe=K(L,!0),kt=y(L),Qt=K(kt,!0),sn=y(kt),_r=K(sn),qn=y(sn),vr=b(qn);let Bt;var yr=K(vr,!0),cr=y(qn),Jn=b(cr),Er=b(Jn),wr=b(Er);bu(wr,{size:17});var Xn=y(Er),Fi=b(Xn);Sl(Fi,{size:17});var ve=y(Xn),rt=b(ve);Pl(rt,{size:18}),Ee((de,Ue,Vn,li)=>{j(Pt,p(Re).name),j(Yn,p(Re).category||"Sem categoria"),j(pe,p(Re).code),j(Qt,de),j(_r,`${p(Re).quantity??""} ${p(Re).unit??""}`),Bt=hn(vr,1,"status-pill",null,Bt,{"status-empty":Ue,"status-low":Vn}),j(yr,li)},[()=>Mi(p(Re)),()=>Qn(p(Re))==="empty",()=>Qn(p(Re))==="low",()=>p(Re).active?Qn(p(Re))==="empty"?"SEM ESTOQUE":Qn(p(Re))==="low"?"ESTOQUE BAIXO":"NORMAL":"INATIVO"]),oe("click",Er,()=>ra(p(Re),"entry")),oe("click",Xn,()=>ra(p(Re),"withdrawal")),oe("click",ve,()=>en(p(Re))),Q(Ge,yn)},Ge=>{var Re=cC();Q(Ge,Re)}),oe("click",Se,Zt),Qe(Ct,()=>p(B),Ge=>O(B,Ge)),Qe(Kt,()=>p(z),Ge=>O(z,Ge)),Q(Fe,he)},Mr=Fe=>{var he=fC(),ge=b(he),Se=y(b(ge)),_e=b(Se);ma(_e,{size:18});var at=y(ge,2),gt=b(at),Rt=y(b(gt));zi(Rt,21,()=>p(w),Ct=>Ct.id,(Ct,Ke)=>{var nt=hC(),Kt=b(nt),$t=b(Kt),tn=K($t,!0),wt=y(Kt),Ge=K(wt,!0),Re=y(wt),yn=K(Re,!0),lt=y(Re),je=K(lt,!0),nn=y(lt),Dt=b(nn);let rn;var En=K(Dt,!0),Vt=y(nn),Pt=b(Vt),wn=b(Pt);Pl(wn,{size:18}),Ee(()=>{j(tn,p(Ke).name),j(Ge,p(Ke).matricula),j(yn,p(Ke).canAdd?"Permitido":"Não permitido"),j(je,p(Ke).canWithdraw?"Permitido":"Não permitido"),rn=hn(Dt,1,"status-pill",null,rn,{"status-empty":!p(Ke).active}),j(En,p(Ke).active?"ATIVO":"DESATIVADO")}),oe("click",Pt,()=>ds(p(Ke))),Q(Ct,nt)},Ct=>{var Ke=dC();Q(Ct,Ke)}),oe("click",Se,au),Q(Fe,he)},De=Fe=>{var he=mC(),ge=y(b(he),2),Se=b(ge),_e=b(Se);Cl(_e,{size:19});var at=y(_e),gt=y(Se),Rt=b(gt);Rt.value=Rt.__value="all";var Ct=y(Rt);Ct.value=Ct.__value="entry";var Ke=y(Ct);Ke.value=Ke.__value="withdrawal",zl(gt);var nt=y(gt),Kt=y(b(nt)),$t=y(nt),tn=y(b($t)),wt=y($t),Ge=y(b(wt));lf(Ge,{size:16});var Re=y(ge,2);{var yn=je=>{r(je,()=>p(Ys))},lt=je=>{var nn=pC();Q(je,nn)};me(Re,je=>{p(Ys).length?je(yn):je(lt,-1)})}Qe(at,()=>p(ki),je=>O(ki,je)),yu(gt,()=>p(oi),je=>O(oi,je)),Qe(Kt,()=>p(Ni),je=>O(Ni,je)),Qe(tn,()=>p(Oi),je=>O(Oi,je)),oe("click",wt,Di),Q(Fe,he)};me(Ae,Fe=>{p(c)==="overview"?Fe(cn):p(c)==="items"?Fe(Gt,1):p(c)==="employees"?Fe(Mr,2):Fe(De,-1)})}Ee(()=>{He=hn(et,1,"",null,He,{active:p(c)==="overview"}),Ye=hn(it,1,"",null,Ye,{active:p(c)==="items"}),Je=hn(ht,1,"",null,Je,{active:p(c)==="employees"}),dt=hn(Et,1,"",null,dt,{active:p(c)==="movements"}),j(G,p(c)==="overview"?"Visão geral":p(c)==="items"?"Itens do estoque":p(c)==="employees"?"Funcionários":"Movimentações")}),oe("click",et,()=>O(c,"overview")),oe("click",it,()=>O(c,"items")),oe("click",ht,()=>O(c,"employees")),oe("click",Et,()=>O(c,"movements")),oe("click",St,Vi),oe("click",tt,Vi),Q(M,$)},ln=M=>{var $=OC(),ae=b($),le=b(ae),Z=b(le),Ne=b(Z);to(Ne,{size:21});var et=y(Z),He=y(b(et)),Ft=K(He,!0),it=y(le,2),Ye=b(it),st=K(Ye),ht=y(Ye),Je=b(ht);Au(Je,{size:18});var bt=y(ae,2);{var Et=be=>{var ze=om(),We=b(ze);Iu(We,{size:18});var G=y(We),Ie=K(G,!0),Oe=y(G);t(Oe);var tt=y(Oe),Ut=b(tt);Es(Ut,{size:17}),Ee(()=>j(Ie,p(N))),oe("click",tt,()=>{O(N,""),O(P,"")}),Q(be,ze)};me(bt,be=>{p(N)&&be(Et)})}var dt=y(bt,2);{var ft=be=>{var ze=am(),We=b(ze);pa(We,{size:18});var G=y(We,1,!0),Ie=y(G),Oe=b(Ie);Es(Oe,{size:17}),Ee(()=>j(G,p(U))),oe("click",Ie,()=>O(U,"")),Q(be,ze)};me(dt,be=>{p(U)&&be(ft)})}var St=y(dt,2);{var Wt=be=>{var ze=AC(),We=b(ze),G=b(We);af(G,{size:18});var Ie=y(We,2),Oe=b(Ie),tt=b(Oe);{var Ut=ve=>{var rt=_C();Ee(()=>{Lr(rt,"src",p(S).imageUrl),Lr(rt,"alt",p(S).name)}),Q(ve,rt)},pt=ve=>{var rt=vC(),de=b(rt);eo(de,{size:44}),Q(ve,rt)};me(tt,ve=>{p(S).imageUrl?ve(Ut):ve(pt,-1)})}var fe=y(Oe,2),ot=b(fe),mt=b(ot),Ae=b(mt),cn=K(Ae),Gt=y(Ae),Mr=K(Gt,!0),De=y(mt);let Fe;var he=K(De,!0),ge=y(ot,2);{var Se=ve=>{var rt=yC(),de=K(rt,!0);Ee(()=>j(de,p(S).description)),Q(ve,rt)};me(ge,ve=>{p(S).description&&ve(Se)})}var _e=y(ge,2),at=b(_e),gt=y(b(at)),Rt=b(gt),Ct=y(Rt),Ke=K(Ct,!0),nt=y(at),Kt=y(b(nt)),$t=K(Kt,!0),tn=y(nt),wt=y(b(tn)),Ge=K(wt),Re=y(tn),yn=y(b(Re)),lt=K(yn,!0),je=y(_e,2);{var nn=ve=>{var rt=EC(),de=K(rt,!0);Ee(()=>j(de,p(S).locationNote)),Q(ve,rt)};me(je,ve=>{p(S).locationNote&&ve(nn)})}var Dt=y(je,2);{var rn=ve=>{var rt=TC(),de=y(b(rt));zi(de,21,()=>p(S).customFields,Ue=>Ue.id,(Ue,Vn)=>{var li=wC(),zn=b(li),Mn=K(zn,!0),_s=y(zn),ci=K(_s,!0);Ee(()=>{j(Mn,p(Vn).label),j(ci,p(Vn).value)}),Q(Ue,li)}),Q(ve,rt)};me(Dt,ve=>{p(S).customFields.length&&ve(rn)})}var En=y(Dt,2),Vt=y(b(En),2),Pt=b(Vt);let wn;var Yn=b(Pt);hf(Yn,{size:17});var L=y(Pt);let pe;var kt=b(L);ma(kt,{size:17});var Qt=y(Vt,2),sn=b(Qt),_r=y(b(sn)),qn=y(sn),vr=y(b(qn),2),Bt=y(Qt,2),yr=y(b(Bt)),cr=K(yr),Jn=y(yr);{var Er=ve=>{var rt=IC(),de=y(ro(rt),2),Ue=K(de);Ee(Vn=>j(Ue,`${Vn??""} ${p(S).unit??""}`),[()=>Math.max(0,p(S).quantity+(p(T)==="entry"?Number(p(Ze)):-Number(p(Ze))))]),Q(ve,rt)};me(Jn,ve=>{p(Ze)>0&&ve(Er)})}var wr=y(Bt,2),Xn=b(wr),Fi=y(Xn);Rl(Fi,{size:18}),Ee((ve,rt,de,Ue)=>{j(cn,`${p(S).code??""} · ${(p(S).category||"MATERIAL")??""}`),j(Mr,p(S).name),Fe=hn(De,1,"status-pill",null,Fe,{"status-empty":ve,"status-low":rt}),j(he,de),j(Rt,p(S).quantity),j(Ke,p(S).unit),j($t,Ue),j(Ge,`${p(S).minimumStock??""} ${p(S).unit??""}`),j(lt,p(S).itemType),wn=hn(Pt,1,"",null,wn,{chosen:p(T)==="withdrawal"}),pe=hn(L,1,"",null,pe,{chosen:p(T)==="entry"}),j(cr,`${p(S).quantity??""} ${p(S).unit??""}`),wr.disabled=p(E)||p(Ze)<1||p(T)==="withdrawal"&&p(Ze)>p(S).quantity,j(Xn,`${p(E)?"REGISTRANDO...":p(T)==="entry"?"CONFIRMAR ENTRADA":"CONFIRMAR RETIRADA"} `)},[()=>Qn(p(S))==="empty",()=>Qn(p(S))==="low",()=>Qn(p(S))==="empty"?"SEM ESTOQUE":Qn(p(S))==="low"?"ESTOQUE BAIXO":"NORMAL",()=>Mi(p(S))]),oe("click",We,()=>{O(S,null),Kn()}),Zs("submit",En,cl),oe("click",Pt,()=>O(T,"withdrawal")),oe("click",L,()=>O(T,"entry")),Qe(_r,()=>p(Ze),ve=>O(Ze,ve)),Qe(vr,()=>p(Bn),ve=>O(Bn,ve)),Q(be,ze)},Ot=be=>{var ze=NC(),We=b(ze),G=y(b(We)),Ie=K(G),Oe=y(We,2),tt=b(Oe);Cl(tt,{size:21});var Ut=y(tt),pt=y(Oe,2),fe=b(pt),ot=b(fe);Pl(ot,{size:17});var mt=y(ot),Ae=y(pt,2);{var cn=he=>{var ge=CC();zi(ge,21,()=>p(J).filter(Se=>!p(z)||`${Se.rackNumber} ${Se.shelfNumber}`.toLowerCase().includes(p(z).toLowerCase())),Se=>Se.id,(Se,_e)=>{var at=RC(),gt=b(at),Rt=b(gt);{var Ct=L=>{var pe=lm();Ee(()=>Lr(pe,"src",p(_e).imageUrl)),Q(L,pe)},Ke=L=>{var pe=bC(),kt=b(pe);eo(kt,{size:25}),Q(L,pe)};me(Rt,L=>{p(_e).imageUrl?L(Ct):L(Ke,-1)})}var nt=y(gt,2),Kt=b(nt),$t=b(Kt),tn=K($t,!0),wt=y($t);let Ge;var Re=y(Kt),yn=K(Re,!0),lt=y(Re),je=K(lt,!0),nn=y(lt),Dt=b(nn);let rn;var En=b(Dt);{var Vt=L=>{var pe=zE("SEM ESTOQUE");Q(L,pe)},Pt=L=>{var pe=SC(),kt=ro(pe),Qt=y(kt),sn=K(Qt,!0);Ee(()=>{j(kt,`${p(_e).quantity??""} `),j(sn,p(_e).unit)}),Q(L,pe)};me(En,L=>{p(_e).quantity===0?L(Vt):L(Pt,-1)})}var wn=y(Dt),Yn=K(wn);Ee((L,pe,kt)=>{j(tn,p(_e).code),Ge=hn(wt,1,"status-mark",null,Ge,{"mark-empty":L,"mark-low":pe}),j(yn,p(_e).name),j(je,kt),rn=hn(Dt,1,"",null,rn,{"danger-text":p(_e).quantity===0}),j(Yn,`mín. ${p(_e).minimumStock??""}`)},[()=>Qn(p(_e))==="empty",()=>Qn(p(_e))==="low",()=>Mi(p(_e))]),oe("click",at,()=>{O(S,p(_e),!0),Kn()}),Q(Se,at)}),Q(he,ge)},Gt=he=>{var ge=PC(),Se=b(ge);eo(Se,{size:27}),Q(he,ge)};me(Ae,he=>{p(J).length?he(cn):he(Gt,-1)})}var Mr=y(Ae,2);{var De=he=>{var ge=kC(),Se=b(ge),_e=y(Se);lf(_e,{size:18}),Ee(()=>{ge.disabled=p(I),j(Se,`${p(I)?"CARREGANDO...":"CARREGAR MAIS ITENS"} `)}),oe("click",ge,Zo),Q(he,ge)},Fe=rr(()=>p(Y)&&!p(B).trim());me(Mr,he=>{p(Fe)&&he(De)})}Ee(()=>j(Ie,`${p(J).length??""} ${p(J).length===1?"resultado":"resultados"}`)),Qe(Ut,()=>p(B),he=>O(B,he)),Qe(mt,()=>p(z),he=>O(z,he)),Q(be,ze)};me(St,be=>{p(S)?be(Wt):be(Ot,-1)})}Ee(()=>{var be,ze;j(Ft,p(S)?"Detalhes do item":"Consulta de materiais"),j(st,`${((be=p(l))==null?void 0:be.name)??"Funcionário"??""} · ${((ze=p(l))==null?void 0:ze.matricula)??""}`)}),oe("click",ht,Vi),Q(M,$)},gl=M=>{var $=MC(),ae=b($),le=b(ae),Z=b(le);to(Z,{size:25,strokeWidth:1.8});var Ne=y(le,4),et=K(Ne,!0),He=y(Ne,2);{var Ft=Ye=>{var st=DC();Q(Ye,st)},it=Ye=>{var st=VC(),ht=ro(st),Je=K(ht,!0),bt=y(ht,2);t(bt);var Et=y(bt,2);Ee(()=>j(Je,p(N)||"Não foi possível validar seu perfil. Tente novamente.")),oe("click",Et,Vi),Q(Ye,st)};me(He,Ye=>{p(R)?Ye(Ft):Ye(it,-1)})}Ee(()=>{Lr(ae,"role",p(R)?"status":void 0),j(et,p(R)?`VALIDANDO
ACESSO`:`NÃO FOI POSSÍVEL
ABRIR O PAINEL`)}),Q(M,$)};me(ps,M=>{p(R)&&!p(s)?M(pl):p(s)?p(a)==="admin"?M(ml,2):p(a)==="employee"?M(ln,3):M(gl,-1):M(ms,1)})}var xi=y(ps,2);{var gs=M=>{var $=UC(),ae=b($),le=b(ae),Z=b(le),Ne=y(b(Z)),et=K(Ne,!0),He=y(Z),Ft=b(He);Es(Ft,{size:20});var it=y(le,2),Ye=b(it),st=b(Ye),ht=y(b(st)),Je=y(st),bt=y(b(Je)),Et=y(Je),dt=y(b(Et)),ft=y(Et),St=y(b(ft)),Wt=b(St);Wt.value=Wt.__value="piece";var Ot=y(Wt);Ot.value=Ot.__value="component";var be=y(Ot);be.value=be.__value="tool";var ze=y(be);ze.value=ze.__value="machine",zl(St);var We=y(ft),G=y(b(We)),Ie=b(G);Ie.value=Ie.__value="quantity";var Oe=y(Ie);Oe.value=Oe.__value="asset",zl(G);var tt=y(We),Ut=y(b(tt)),pt=y(tt),fe=y(b(pt)),ot=y(pt),mt=y(b(ot)),Ae=y(ot),cn=y(b(Ae)),Gt=y(Ae),Mr=y(b(Gt)),De=y(Gt),Fe=y(b(De)),he=y(De),ge=y(b(he)),Se=y(he),_e=y(b(Se)),at=b(_e);Gw(at,{size:19});var gt=y(at,1,!0),Rt=y(gt),Ct=y(_e);{var Ke=L=>{var pe=xC(),kt=b(pe),Qt=y(kt),sn=b(Qt);df(sn,{size:16}),Ee(()=>{Lr(kt,"src",p(X).imageUrl),Qt.disabled=p(E)}),oe("click",Qt,hl),Q(L,pe)};me(Ct,L=>{p(X).imageUrl&&L(Ke)})}var nt=y(Se),Kt=b(nt),$t=y(Ye,2),tn=b($t),wt=y(b(tn)),Ge=b(wt);ma(Ge,{size:16});var Re=y(tn,2);zi(Re,19,()=>p(X).customFields,L=>L.id,(L,pe,kt)=>{var Qt=LC(),sn=b(Qt),_r=y(b(sn)),qn=y(sn),vr=y(b(qn)),Bt=y(qn),yr=b(Bt);df(yr,{size:17}),Qe(_r,()=>p(pe).label,cr=>p(pe).label=cr),Qe(vr,()=>p(pe).value,cr=>p(pe).value=cr),oe("click",Bt,()=>p(X).customFields=p(X).customFields.filter((cr,Jn)=>Jn!==p(kt))),Q(L,Qt)});var yn=y(Re,2);{var lt=L=>{var pe=FC();Q(L,pe)};me(yn,L=>{p(X).customFields.length||L(lt)})}var je=y($t,2);{var nn=L=>{var pe=Fl(),kt=K(pe,!0);Ee(()=>j(kt,p(N))),Q(L,pe)};me(je,L=>{p(N)&&L(nn)})}var Dt=y(je,2);{var rn=L=>{t(L)};me(Dt,L=>{p(N)&&L(rn)})}var En=y(Dt,2),Vt=b(En),Pt=y(Vt),wn=b(Pt),Yn=y(wn);pa(Yn,{size:17}),Ee(L=>{var pe;j(et,p(X).name?"Editar item":"Novo item"),fe.disabled=L,j(gt,((pe=p(gr))==null?void 0:pe.name)??(p(X).imageUrl?"Substituir fotografia":"Selecionar imagem")),Pt.disabled=p(E),j(wn,`${p(E)?"SALVANDO...":"SALVAR ITEM"} `)},[()=>!!p(v).find(L=>L.id===p(si))]),oe("click",$,L=>{L.target===L.currentTarget&&O(_n,!1)}),oe("click",He,()=>O(_n,!1)),Zs("submit",it,ul),Qe(ht,()=>p(X).name,L=>p(X).name=L),Qe(bt,()=>p(X).code,L=>p(X).code=L),Qe(dt,()=>p(X).category,L=>p(X).category=L),yu(St,()=>p(X).itemType,L=>p(X).itemType=L),yu(G,()=>p(X).trackingMode,L=>p(X).trackingMode=L),Qe(Ut,()=>p(X).unit,L=>p(X).unit=L),Qe(fe,()=>p(X).quantity,L=>p(X).quantity=L),Qe(mt,()=>p(X).minimumStock,L=>p(X).minimumStock=L),Qe(cn,()=>p(X).rackNumber,L=>p(X).rackNumber=L),Qe(Mr,()=>p(X).shelfNumber,L=>p(X).shelfNumber=L),Qe(Fe,()=>p(X).locationNote,L=>p(X).locationNote=L),Qe(ge,()=>p(X).description,L=>p(X).description=L),oe("change",Rt,L=>{var pe;return O(gr,((pe=L.currentTarget.files)==null?void 0:pe[0])??null,!0)}),bl(Kt,()=>p(X).active,L=>p(X).active=L),oe("click",wt,Qs),oe("click",Vt,()=>O(_n,!1)),Q(M,$)};me(xi,M=>{p(_n)&&M(gs)})}var _l=y(xi,2);{var lu=M=>{var $=$C(),ae=b($),le=b(ae),Z=b(le),Ne=y(b(Z)),et=K(Ne,!0),He=y(Z),Ft=b(He);Es(Ft,{size:20});var it=y(le,2),Ye=b(it),st=b(Ye),ht=y(b(st)),Je=y(st),bt=y(b(Je)),Et=y(Je),dt=b(Et),ft=y(Et),St=b(ft),Wt=y(ft),Ot=b(Wt),be=y(Ye,2);{var ze=fe=>{var ot=Fl(),mt=K(ot,!0);Ee(()=>j(mt,p(N))),Q(fe,ot)};me(be,fe=>{p(N)&&fe(ze)})}var We=y(be,2);{var G=fe=>{t(fe)};me(We,fe=>{p(N)&&fe(G)})}var Ie=y(We,2),Oe=b(Ie),tt=y(Oe),Ut=b(tt),pt=y(Ut);pa(pt,{size:17}),Ee(()=>{j(et,p(cs)?"Editar funcionário":"Novo funcionário"),tt.disabled=p(E),j(Ut,`${p(E)?"SALVANDO...":"SALVAR FUNCIONÁRIO"} `)}),oe("click",$,fe=>{fe.target===fe.currentTarget&&O(Nt,!1)}),oe("click",He,()=>O(Nt,!1)),Zs("submit",it,dl),Qe(ht,()=>p(Xt).name,fe=>p(Xt).name=fe),Qe(bt,()=>p(Xt).matricula,fe=>p(Xt).matricula=fe),bl(dt,()=>p(Xt).active,fe=>p(Xt).active=fe),bl(St,()=>p(Xt).canAdd,fe=>p(Xt).canAdd=fe),bl(Ot,()=>p(Xt).canWithdraw,fe=>p(Xt).canWithdraw=fe),oe("click",Oe,()=>O(Nt,!1)),Q(M,$)};me(_l,M=>{p(Nt)&&M(lu)})}var Li=y(_l,2);{var cu=M=>{var $=BC(),ae=b($),le=b(ae),Z=y(b(le)),Ne=b(Z);Es(Ne,{size:20});var et=y(le,2),He=b(et),Ft=b(He),it=K(Ft,!0),Ye=y(Ft),st=K(Ye),ht=y(He,2),Je=b(ht);let bt;var Et=b(Je);hf(Et,{size:17});var dt=y(Je);let ft;var St=b(dt);ma(St,{size:17});var Wt=y(ht,2),Ot=b(Wt),be=y(b(Ot)),ze=y(Ot),We=y(b(ze)),G=y(Wt,2);{var Ie=Ae=>{var cn=Fl(),Gt=K(cn,!0);Ee(()=>j(Gt,p(N))),Q(Ae,cn)};me(G,Ae=>{p(N)&&Ae(Ie)})}var Oe=y(G,2);{var tt=Ae=>{t(Ae)};me(Oe,Ae=>{p(N)&&Ae(tt)})}var Ut=y(Oe,2),pt=b(Ut),fe=y(pt),ot=b(fe),mt=y(ot);pa(mt,{size:17}),Ee(()=>{j(it,p(lr).name),j(st,`${p(lr).code??""} · saldo ${p(lr).quantity??""} ${p(lr).unit??""}`),bt=hn(Je,1,"",null,bt,{chosen:p(an)==="withdrawal"}),ft=hn(dt,1,"",null,ft,{chosen:p(an)==="entry"}),fe.disabled=p(E)||p(an)==="withdrawal"&&p(yt)>p(lr).quantity,j(ot,`${p(E)?"REGISTRANDO...":"CONFIRMAR"} `)}),oe("click",$,Ae=>{Ae.target===Ae.currentTarget&&O(ar,!1)}),oe("click",Z,()=>O(ar,!1)),Zs("submit",et,ia),oe("click",Je,()=>O(an,"withdrawal")),oe("click",dt,()=>O(an,"entry")),Qe(be,()=>p(yt),Ae=>O(yt,Ae)),Qe(We,()=>p(Gs),Ae=>O(Gs,Ae)),oe("click",pt,()=>O(ar,!1)),Q(M,$)};me(Li,M=>{p(ar)&&p(lr)&&M(cu)})}Q(n,oa),Uh()}ug(["click","change"]);JE(zC,{target:document.getElementById("app")});
