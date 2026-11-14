var Fy=Object.defineProperty;var df=n=>{throw TypeError(n)};var Uy=(n,e,t)=>e in n?Fy(n,e,{enumerable:!0,configurable:!0,writable:!0,value:t}):n[e]=t;var Rn=(n,e,t)=>Uy(n,typeof e!="symbol"?e+"":e,t),Vu=(n,e,t)=>e.has(n)||df("Cannot "+t);var V=(n,e,t)=>(Vu(n,e,"read from private field"),t?t.call(n):e.get(n)),Oe=(n,e,t)=>e.has(n)?df("Cannot add the same private member more than once"):e instanceof WeakSet?e.add(n):e.set(n,t),be=(n,e,t,r)=>(Vu(n,e,"write to private field"),r?r.call(n,t):e.set(n,t),t),_e=(n,e,t)=>(Vu(n,e,"access private method"),t);(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const i of document.querySelectorAll('link[rel="modulepreload"]'))r(i);new MutationObserver(i=>{for(const s of i)if(s.type==="childList")for(const a of s.addedNodes)a.tagName==="LINK"&&a.rel==="modulepreload"&&r(a)}).observe(document,{childList:!0,subtree:!0});function t(i){const s={};return i.integrity&&(s.integrity=i.integrity),i.referrerPolicy&&(s.referrerPolicy=i.referrerPolicy),i.crossOrigin==="use-credentials"?s.credentials="include":i.crossOrigin==="anonymous"?s.credentials="omit":s.credentials="same-origin",s}function r(i){if(i.ep)return;i.ep=!0;const s=t(i);fetch(i.href,s)}})();const Om=!1;var Wc=Array.isArray,$y=Array.prototype.indexOf,Ga=Array.prototype.includes,Gc=Array.from,Vm=Object.defineProperty,$s=Object.getOwnPropertyDescriptor,qy=Object.getOwnPropertyDescriptors,By=Object.prototype,zy=Array.prototype,Mm=Object.getPrototypeOf,ff=Object.isExtensible;function va(n){return typeof n=="function"}const ed=()=>{};function jy(n){for(var e=0;e<n.length;e++)n[e]()}function xm(){var n,e,t=new Promise((r,i)=>{n=r,e=i});return{promise:t,resolve:n,reject:e}}function Hy(n,e,t=!1){return n===void 0?t?e():e:n}function pf(n,e){if(Array.isArray(n))return n;if(e===void 0||!(Symbol.iterator in n))return Array.from(n);const t=[];for(const r of n)if(t.push(r),t.length===e)break;return t}const On=2,Lo=4,Kc=8,td=1<<24,Nr=16,xr=32,os=64,ah=128,nd=256,Vr=512,an=1024,wt=2048,cr=4096,Un=8192,Nn=16384,Xo=32768,mc=1<<25,as=65536,gc=1<<17,Lm=1<<18,Zo=1<<19,Wy=1<<20,ei=1<<25,_c=1<<21,To=1<<22,Xi=1<<23,Io=Symbol("$state"),Fm=Symbol("component"),Gy=Symbol("legacy props"),Ky=Symbol(""),nc=Symbol("attributes"),lh=Symbol("class"),ch=Symbol("style"),Aa=Symbol("text"),rc=Symbol("form reset"),pl=new class extends Error{constructor(){super(...arguments);Rn(this,"name","StaleReactionError");Rn(this,"message","The reaction that called `getAbortSignal()` was re-run or destroyed")}};var km;const Qc=!!((km=globalThis.document)!=null&&km.contentType)&&globalThis.document.contentType.includes("xml"),Qy=1,Yy=2,Um=4,Jy=8,Xy=16,Zy=1,eE=2,$m={},Yt=Symbol("uninitialized"),qm="http://www.w3.org/1999/xhtml",tE="http://www.w3.org/2000/svg",nE="@attach";function rE(){console.warn("https://svelte.dev/e/derived_inert")}function iE(){console.warn("https://svelte.dev/e/select_multiple_invalid_value")}function sE(){console.warn("https://svelte.dev/e/svelte_boundary_reset_noop")}let Bm=!1;function zm(n){return n===this.v}function oE(n,e){return n!=n?e==e:n!==e||n!==null&&typeof n=="object"||typeof n=="function"}function jm(n){return!oE(n,this.v)}function Hm(n){throw new Error("https://svelte.dev/e/lifecycle_outside_component")}function aE(){throw new Error("https://svelte.dev/e/async_derived_orphan")}function lE(n,e,t){throw new Error("https://svelte.dev/e/each_key_duplicate")}function cE(n){throw new Error("https://svelte.dev/e/effect_in_teardown")}function uE(){throw new Error("https://svelte.dev/e/effect_in_unowned_derived")}function hE(n){throw new Error("https://svelte.dev/e/effect_orphan")}function dE(){throw new Error("https://svelte.dev/e/effect_update_depth_exceeded")}function fE(){throw new Error("https://svelte.dev/e/state_descriptors_fixed")}function pE(){throw new Error("https://svelte.dev/e/state_prototype_fixed")}function mE(){throw new Error("https://svelte.dev/e/state_unsafe_mutation")}function gE(){throw new Error("https://svelte.dev/e/svelte_boundary_reset_onerror")}let _E=!1;function vE(n){let e=n.p;for(;e!==null&&e.c===null;)e=e.p;return(e==null?void 0:e.c)??null}function yE(n,e){return n===null&&Hm(),n.c??(n.c=new Map(vE(n)||void 0))}let Dn=null;function Fo(n){Dn=n}function EE(n){return yE(Dn).get(n)}function rd(n,e=!1,t){Dn={p:Dn,i:!1,c:null,e:null,s:n,x:null,r:Ye,l:null}}function id(n){var e=Dn,t=e.e;if(t!==null){e.e=null;for(var r of t)gg(r)}return e.i=!0,Dn=e.p,Wm(n)}function Wm(n={}){return Vm(n,Fm,{value:!0}),n}function Gm(){return!0}let Ds=[];function Km(){var n=Ds;Ds=[],jy(n)}function ti(n){if(Ds.length===0&&!La){var e=Ds;queueMicrotask(()=>{e===Ds&&Km()})}Ds.push(n)}function wE(){for(;Ds.length>0;)Km()}const TE=-7169;function qt(n,e){n.f=n.f&TE|e}function sd(n){(n.f&Vr)!==0||n.deps===null?qt(n,an):qt(n,cr)}function Qm(n,e){(n.f&wt)!==0?e.set(n,wt):(n.f&cr)!==0&&e.get(n)!==wt&&e.set(n,cr),qt(n,an)}function IE(n,e){if(e){const t=document.body;n.autofocus=!0,ti(()=>{document.activeElement===t&&n.focus()})}}let mf=!1;function AE(){mf||(mf=!0,document.addEventListener("reset",n=>{Promise.resolve().then(()=>{var e;if(!n.defaultPrevented)for(const t of n.target.elements)(e=t[rc])==null||e.call(t)})},{capture:!0}))}function ea(n){var e=Se,t=Ye;Tr(null),ui(null);try{return n()}finally{Tr(e),ui(t)}}function od(n,e,t,r=t){n.addEventListener(e,()=>ea(t));const i=n[rc];i?n[rc]=()=>{i(),r(!0)}:n[rc]=()=>r(!0),AE()}function Ym(n,e,t,r){const i=Yc;var s=n.filter(I=>!I.settled),a=e.map(i);if(t.length===0&&s.length===0){r(a);return}var l=Ye,c=bE(),h=s.length===1?s[0].promise:s.length>1?Promise.all(s.map(I=>I.promise)):null;function f(I){if((l.f&Nn)===0){c();try{r([...a,...I])}catch(w){Zr(w,l)}vc()}}var m=Jm();if(t.length===0){h.then(()=>f([])).finally(m);return}function _(){Promise.all(t.map(I=>SE(I))).then(f).catch(I=>Zr(I,l)).finally(m)}h?h.then(()=>{if((l.f&Nn)!==0){m();return}c(),_(),vc()}):_()}function bE(){var n=Ye,e=Se,t=Dn,r=oe;return function(s=!0){ui(n),Tr(e),Fo(t),s&&(n.f&Nn)===0&&(r==null||r.activate(),r==null||r.apply())}}function vc(n=!0){ui(null),Tr(null),Fo(null),n&&(oe==null||oe.deactivate())}function Jm(){var n=Ye,e=n.b,t=oe,r=!!(e!=null&&e.is_rendered());return e==null||e.update_pending_count(1,t),t.increment(r,n),()=>{e==null||e.update_pending_count(-1,t),t.decrement(r,n)}}function Yc(n){var e=On|wt;return Ye!==null&&(Ye.f|=Zo),{ctx:Dn,deps:null,effects:null,equals:zm,f:e,fn:n,reactions:null,rv:0,v:Yt,wv:0,parent:Ye,ac:null}}const ba=Symbol("obsolete");function SE(n,e,t){let r=Ye;r===null&&aE();var i=void 0,s=Hs(Yt),a=!Se,l=new Set;return BE(()=>{var I,w;var c=Ye,h=xm();i=h.promise;try{Promise.resolve(n()).then(h.resolve,D=>{D!==pl&&h.reject(D)}).finally(vc)}catch(D){h.reject(D),vc()}var f=oe;if(a){if((c.f&Xo)!==0)var m=Jm();if((I=r.b)!=null&&I.is_rendered())(w=f.async_deriveds.get(c))==null||w.reject(ba);else for(const D of l.values())D.reject(ba);l.add(h),f.async_deriveds.set(c,h)}const _=(D,T=void 0)=>{m==null||m(),l.delete(h),T!==ba&&(f.activate(),T?(s.f|=Xi,Uo(s,T)):((s.f&Xi)!==0&&(s.f^=Xi),Uo(s,D)),f.deactivate())};h.promise.then(_,D=>_(null,D||"unknown"))}),Jc(()=>{for(const c of l)c.reject(ba)}),new Promise(c=>{function h(f){function m(){f===i?c(s):h(i)}f.then(m,m)}h(i)})}function Hn(n){const e=Yc(n);return Tg(e),e}function RE(n){const e=Yc(n);return e.equals=jm,e}function CE(n){var e=n.effects;if(e!==null){n.effects=null;for(var t=0;t<e.length;t+=1)In(e[t])}}function ad(n){var e,t=Ye,r=n.parent;if(!ls&&r!==null&&n.v!==Yt&&(r.f&(Nn|Un))!==0)return rE(),n.v;ui(r);try{CE(n),e=Sg(n)}finally{ui(t)}return e}function Xm(n){var e=ad(n);if(!n.equals(e)&&(n.wv=Ag(),(!(oe!=null&&oe.is_fork)||n.deps===null)&&(oe!==null?(oe.capture(n,e,!0),Zi==null||Zi.capture(n,e,!0)):n.v=e,n.deps===null))){qt(n,an);return}ls||(Tn!==null?(ud()||oe!=null&&oe.is_fork)&&Tn.set(n,e):sd(n))}function PE(n){var e;if(n.effects!==null)for(const t of n.effects)(t.teardown||t.ac)&&((e=t.teardown)==null||e.call(t),t.ac!==null&&ea(()=>{t.ac.abort(pl),t.ac=null}),t.fn!==null&&(t.teardown=ed),Ka(t,0),dd(t))}function Zm(n){if(n.effects!==null)for(const e of n.effects)e.teardown&&e.fn!==null&&$o(e)}let Mu=null,ho=null,oe=null,Zi=null,Tn=null,uh=null,La=!1,xu=!1,Fa=null,ic=null;var gf=0;let kE=1;var No,Do,Oo,yi,Vo,Ei,ul,Qr,Yr,Mo,xs,Me,hh,eg,dh,Sa,fh,tg,ng,rg,go,NE,Ra;const zc=class zc{constructor(){Oe(this,Me);Rn(this,"id",kE++);Rn(this,"started",!1);Rn(this,"linked",!0);Rn(this,"prev",null);Rn(this,"next",null);Rn(this,"async_deriveds",new Map);Rn(this,"current",new Map);Rn(this,"previous",new Map);Oe(this,No,new Set);Oe(this,Do,new Set);Oe(this,Oo,0);Oe(this,yi,new Map);Oe(this,Vo,null);Oe(this,Ei,[]);Oe(this,ul,[]);Oe(this,Qr,new Map);Oe(this,Yr,new Map);Oe(this,Mo,new Set);Rn(this,"is_fork",!1);Oe(this,xs,!1);ho===null?Mu=ho=this:(ho.next=this,this.prev=ho),ho=this}skip_effect(e){V(this,Yr).has(e)||V(this,Yr).set(e,{d:[],m:[]}),V(this,Mo).delete(e)}unskip_effect(e,t=r=>this.schedule(r)){var r=V(this,Yr).get(e);if(r){V(this,Yr).delete(e);for(var i of r.d)qt(i,wt),t(i);for(i of r.m)qt(i,cr),t(i)}V(this,Mo).add(e)}capture(e,t,r=!1){e.v!==Yt&&!this.previous.has(e)&&this.previous.set(e,e.v),(e.f&Xi)===0&&(this.current.set(e,[t,r]),Tn==null||Tn.set(e,t)),this.is_fork||(e.v=t)}activate(){oe=this}deactivate(){oe=null,Tn=null}flush(){try{xu=!0,oe=this,_e(this,Me,Sa).call(this)}finally{gf=0,uh=null,Fa=null,ic=null,xu=!1,oe=null,Tn=null,ni.clear()}}discard(){var e;for(const t of V(this,Do))t(this);V(this,Do).clear();for(const t of this.async_deriveds.values())t.reject(ba);_e(this,Me,Ra).call(this),(e=V(this,Vo))==null||e.resolve()}register_created_effect(e){V(this,ul).push(e)}increment(e,t){if(be(this,Oo,V(this,Oo)+1),e){let r=V(this,yi).get(t)??0;V(this,yi).set(t,r+1)}}decrement(e,t){if(be(this,Oo,V(this,Oo)-1),e){let r=V(this,yi).get(t)??0;r===1?V(this,yi).delete(t):V(this,yi).set(t,r-1)}V(this,xs)||(be(this,xs,!0),ti(()=>{be(this,xs,!1),this.linked&&this.flush()}))}transfer_reactions(e){for(const[t,r]of e)this.add_dirty_reaction(t,r);e.clear()}add_dirty_reaction(e,t){(t===wt||V(this,Qr).get(e)!==wt)&&V(this,Qr).set(e,t)}oncommit(e){V(this,No).add(e)}ondiscard(e){V(this,Do).add(e)}settled(){return(V(this,Vo)??be(this,Vo,xm())).promise}static ensure(){if(oe===null){const e=oe=new zc;!xu&&!La&&ti(()=>{e.started||e.flush()})}return oe}apply(){{Tn=null;return}}schedule(e){var t;if(uh=e,(t=e.b)!=null&&t.is_pending&&(e.f&(Lo|Kc|td))!==0&&(e.f&Xo)===0){e.b.defer_effect(e);return}V(this,Ei).push(e)}};No=new WeakMap,Do=new WeakMap,Oo=new WeakMap,yi=new WeakMap,Vo=new WeakMap,Ei=new WeakMap,ul=new WeakMap,Qr=new WeakMap,Yr=new WeakMap,Mo=new WeakMap,xs=new WeakMap,Me=new WeakSet,hh=function(){if(this.is_fork)return!0;for(const e of V(this,yi).keys())if(!_e(this,Me,eg).call(this,e))return!0;return!1},eg=function(e){for(var t=e;t!==null;t=t.parent)if(V(this,Yr).has(t))return!0;return!1},dh=function(){var e=[];for(const s of V(this,Ei))if(!((s.f&Nn)!==0||(s.f&(wt|cr))===0)){for(var t=s,r=!1;t.parent!==null;){t=t.parent;var i=t.f;if((i&(os|xr))!==0){if((i&an)===0){r=!0;break}t.f^=an}}r||e.push(t)}return be(this,Ei,[]),e},Sa=function(){var l,c,h,f;this.started=!0;for(const[m,_]of V(this,Qr))qt(m,_),this.schedule(m);this.apply();for(var e=Fa=[],t=[],r=ic=[];V(this,Ei).length>0;){gf++>1e3&&(_e(this,Me,Ra).call(this),OE());for(const m of _e(this,Me,dh).call(this))try{_e(this,Me,fh).call(this,m,e,t)}catch(_){throw og(m),_e(this,Me,hh).call(this)||this.discard(),_}}if(oe=null,r.length>0){var i=zc.ensure();for(const m of r)i.schedule(m)}if(Fa=null,ic=null,_e(this,Me,hh).call(this)){_e(this,Me,go).call(this,t),_e(this,Me,go).call(this,e);for(const[m,_]of V(this,Yr))sg(m,_);r.length>0&&_e(l=oe,Me,Sa).call(l);return}const s=_e(this,Me,tg).call(this);if(s){_e(this,Me,go).call(this,t),_e(this,Me,go).call(this,e),_e(c=s,Me,rg).call(c,this);return}V(this,Qr).clear();for(const m of V(this,No))m(this);V(this,No).clear(),Zi=this,_f(t),_f(e),Zi=null,(h=V(this,Vo))==null||h.resolve();var a=oe;V(this,Oo)===0&&(V(this,Ei).length===0||a!==null)&&_e(this,Me,Ra).call(this),a!==null&&(ni.clear(),_e(f=a,Me,Sa).call(f))},fh=function(e,t,r){e.f^=an;for(var i=e.first;i!==null;){var s=i.f,a=(s&(xr|os))!==0,l=a&&(s&an)!==0,c=l||(s&Un)!==0||V(this,Yr).has(i);if(!c&&i.fn!==null){a?i.f^=an:(s&Lo)!==0?t.push(i):gl(i)&&((s&Nr)!==0&&this.add_dirty_reaction(i,cr),$o(i));var h=i.first;if(h!==null){i=h;continue}}for(;i!==null;){var f=i.next;if(f!==null){i=f;break}i=i.parent}}},tg=function(){for(var e=this.prev;e!==null;e=e.prev)if(!e.is_fork&&_e(this,Me,ng).call(this,e))return e;return null},ng=function(e){for(const[t,[,r]]of this.current)if(!r&&e.current.has(t))return!0;return!1},rg=function(e){var r;for(const[i,s]of e.current)!this.previous.has(i)&&e.previous.has(i)&&this.previous.set(i,e.previous.get(i)),this.current.set(i,s);for(const[i,s]of e.async_deriveds){const a=this.async_deriveds.get(i);a&&s.promise.then(a.resolve).catch(a.reject)}e.async_deriveds.clear(),this.transfer_reactions(V(e,Qr));const t=i=>{var s=i.reactions;if(s!==null&&!((i.f&On)!==0&&(i.f&(wt|cr))===0))for(const c of s){var a=c.f;if((a&On)!==0)t(c);else{var l=c;a&(To|Nr)&&!this.async_deriveds.has(l)&&(V(this,Qr).delete(l),qt(l,wt),this.schedule(l))}}};for(const i of this.current.keys())t(i);this.oncommit(()=>e.discard()),_e(r=e,Me,Ra).call(r),oe=this,_e(this,Me,Sa).call(this)},go=function(e){for(var t=0;t<e.length;t+=1)Qm(e[t],V(this,Qr))},NE=function(){var m,_;for(let I=Mu;I!==null;I=I.next){var e=I.id<this.id,t=[];for(const[w,[D,T]]of this.current){if(I.current.has(w)){var r=I.current.get(w)[0];if(e&&D!==r)I.current.set(w,[D,T]);else continue}t.push(w)}if(e)for(const[w,D]of this.async_deriveds){const T=I.async_deriveds.get(w);T&&D.promise.then(T.resolve).catch(T.reject)}var i=[...I.current.keys()].filter(w=>!I.current.get(w)[1]);if(!(!I.started||i.length===0)){var s=i.filter(w=>!this.current.has(w));if(s.length===0)e&&I.discard();else if(t.length>0){if(e)for(const w of V(this,Mo))I.unskip_effect(w,D=>{var T;(D.f&(Nr|To))!==0?I.schedule(D):_e(T=I,Me,go).call(T,[D])});I.activate();var a=new Set,l=new Map;for(var c of t)ig(c,s,a,l);l=new Map;var h=[...I.current].filter(([w,D])=>{const T=this.current.get(w);return T?T[0]!==D[0]||T[1]!==D[1]:!0}).map(([w])=>w);if(h.length>0)for(const w of V(this,ul))(w.f&(Nn|Un|gc))===0&&ld(w,h,l)&&((w.f&(To|Nr))!==0?(qt(w,wt),I.schedule(w)):I.add_dirty_reaction(w,wt));if(V(I,Ei).length>0&&!V(I,xs)){I.apply();for(var f of _e(m=I,Me,dh).call(m))_e(_=I,Me,fh).call(_,f,[],[])}I.deactivate()}}}},Ra=function(){if(this.linked){var e=this.prev,t=this.next;e===null?Mu=t:e.next=t,t===null?ho=e:t.prev=e,this.linked=!1}};let js=zc;function DE(n){var e=La,t=Zi;Zi=null,La=!0;try{for(var r;;){if(wE(),oe===null)return r;oe.flush()}}finally{La=e,Zi=t}}function OE(){try{dE()}catch(n){Zr(n,uh)}}let Pr=null;function _f(n){var e=n.length;if(e!==0){for(var t=0;t<e;){var r=n[t++];if((r.f&(Nn|Un))===0&&gl(r)&&(Pr=new Set,$o(r),r.deps===null&&r.first===null&&r.nodes===null&&r.teardown===null&&r.ac===null&&yg(r),(Pr==null?void 0:Pr.size)>0)){ni.clear();for(const i of Pr){if((i.f&(Nn|Un))!==0)continue;const s=[i];let a=i.parent;for(;a!==null;)Pr.has(a)&&(Pr.delete(a),s.push(a)),a=a.parent;for(let l=s.length-1;l>=0;l--){const c=s[l];(c.f&(Nn|Un))===0&&$o(c)}}Pr.clear()}}Pr=null}}function ig(n,e,t,r){if(!t.has(n)&&(t.add(n),n.reactions!==null))for(const i of n.reactions){const s=i.f;(s&On)!==0?ig(i,e,t,r):(s&(To|Nr))!==0&&(s&wt)===0&&ld(i,e,r)&&(qt(i,wt),cd(i))}}function ld(n,e,t){const r=t.get(n);if(r!==void 0)return r;if(n.deps!==null)for(const i of n.deps){if(Ga.call(e,i))return!0;if((i.f&On)!==0&&ld(i,e,t))return t.set(i,!0),!0}return t.set(n,!1),!1}function cd(n){oe.schedule(n)}function sg(n,e){if(!((n.f&xr)!==0&&(n.f&an)!==0)){(n.f&wt)!==0?e.d.push(n):(n.f&cr)!==0&&e.m.push(n),qt(n,an);for(var t=n.first;t!==null;)sg(t,e),t=t.next}}function og(n){qt(n,an);for(var e=n.first;e!==null;)og(e),e=e.next}let yc=new Set;const ni=new Map;let ag=!1;function Hs(n,e){var t={f:0,v:n,reactions:null,equals:zm,rv:0,wv:0};return t}function Z(n,e){const t=Hs(n);return Tg(t),t}function VE(n,e=!1,t=!0){const r=Hs(n);return e||(r.equals=jm),r}function k(n,e,t=!1){Se!==null&&(!Dr||(Se.f&gc)!==0)&&Gm()&&(Se.f&(On|Nr|To|gc))!==0&&(ri===null||!ri.has(n))&&mE();let r=t?vr(e):e;return Uo(n,r,ic)}var Ns=null,ph=0;function Uo(n,e,t=null){if(!n.equals(e)){ls?ni.set(n,e):ni.has(n)||ni.set(n,n.v);var r=js.ensure();if(r.capture(n,e),(n.f&On)!==0){const i=n;(n.f&wt)!==0&&ad(i),Tn===null&&sd(i)}n.wv=Ag(),Ns=null,ph=0,lg(n,wt,t),Ns=null,Ye!==null&&(Ye.f&an)!==0&&(Ye.f&(xr|os))===0&&(pr===null?HE([n]):pr.push(n)),!r.is_fork&&yc.size>0&&!ag&&ME()}return e}function ME(){ag=!1;for(const n of yc){(n.f&an)!==0&&qt(n,cr);let e;try{e=gl(n)}catch{e=!0}e&&$o(n)}yc.clear()}function Ua(n){k(n,n.v+1)}function lg(n,e,t){var r=n.reactions;if(r!==null){var i=r.length;if(ph+=i,ph>1e5&&Ns===null&&(Ns=new Set),Ns!==null){if(Ns.has(n))return;Ns.add(n)}for(var s=0;s<i;s++){var a=r[s],l=a.f,c=(l&wt)===0;if(c&&qt(a,e),(l&gc)!==0)yc.add(a);else if((l&On)!==0){var h=a;Tn==null||Tn.delete(h),lg(h,cr,t)}else if(c){var f=a;(l&Nr)!==0&&Pr!==null&&Pr.add(f),t!==null?t.push(f):cd(f)}}}}function vr(n){if(typeof n!="object"||n===null||Io in n||Fm in n)return n;const e=Mm(n);if(e!==By&&e!==zy)return n;var t=new Map,r=Wc(n),i=Z(0),s=Bs,a=l=>{if(Bs===s)return l();var c=Se,h=Bs;Tr(null),wf(s);var f=l();return Tr(c),wf(h),f};return r&&t.set("length",Z(n.length)),new Proxy(n,{defineProperty(l,c,h){(!("value"in h)||h.configurable===!1||h.enumerable===!1||h.writable===!1)&&fE();var f=t.get(c);return f===void 0?a(()=>{var m=Z(h.value);return t.set(c,m),m}):k(f,h.value,!0),!0},deleteProperty(l,c){var h=t.get(c);if(h===void 0){if(c in l){const f=a(()=>Z(Yt));t.set(c,f),Ua(i)}}else k(h,Yt),Ua(i);return!0},get(l,c,h){var I;if(c===Io)return n;var f=t.get(c),m=c in l;if(f===void 0&&(!m||(I=$s(l,c))!=null&&I.writable)&&(f=a(()=>{var w=vr(m?l[c]:Yt),D=Z(w);return D}),t.set(c,f)),f!==void 0){var _=p(f);return _===Yt?void 0:_}return Reflect.get(l,c,h)},getOwnPropertyDescriptor(l,c){var _;(_=this.has)==null||_.call(this,l,c);var h=Reflect.getOwnPropertyDescriptor(l,c),f=t.get(c);if(f!==void 0){var m=p(f);if(m===Yt)return;if(h&&"value"in h)h.value=m;else return{enumerable:!0,configurable:!0,value:m,writable:!0}}return h},has(l,c){var _;if(c===Io)return!0;var h=t.get(c),f=h!==void 0&&h.v!==Yt||Reflect.has(l,c);if(h!==void 0||(Ye!==null||Se!==null)&&(!f||(_=$s(l,c))!=null&&_.writable)){h===void 0&&(h=a(()=>{var I=f?vr(l[c]):Yt,w=Z(I);return w}),t.set(c,h));var m=p(h);if(m===Yt)return!1}return f},set(l,c,h,f){var q;var m=t.get(c),_=c in l;if(r&&c==="length")for(var I=h;I<m.v;I+=1){var w=t.get(I+"");w!==void 0?k(w,Yt):I in l&&(w=a(()=>Z(Yt)),t.set(I+"",w))}if(m===void 0)(!_||(q=$s(l,c))!=null&&q.writable)&&(m=a(()=>Z(void 0)),k(m,vr(h)),t.set(c,m));else{_=m.v!==Yt;var D=a(()=>vr(h));k(m,D)}var T=Reflect.getOwnPropertyDescriptor(l,c);if(T!=null&&T.set&&T.set.call(f,h),!_){if(r&&typeof c=="string"){var L=t.get("length"),U=Number(c);Number.isInteger(U)&&U>=L.v&&k(L,U+1)}Ua(i)}return!0},ownKeys(l){p(i);var c=Reflect.ownKeys(l).filter(m=>{var _=t.get(m);return _===void 0||_.v!==Yt});for(var[h,f]of t)f.v!==Yt&&!(h in l)&&c.push(h);return c},setPrototypeOf(){pE()}})}function vf(n){try{if(n!==null&&typeof n=="object"&&Io in n)return n[Io]}catch{}return n}function cg(n,e){return Object.is(vf(n),vf(e))}var yf,ug,hg,dg,fg;function xE(){if(yf===void 0){yf=window,ug=document,hg=/Firefox/.test(navigator.userAgent);var n=Element.prototype,e=Node.prototype,t=Text.prototype;dg=$s(e,"firstChild").get,fg=$s(e,"nextSibling").get,ff(n)&&(n[lh]=void 0,n[nc]=null,n[ch]=void 0,n.__e=void 0),ff(t)&&(t[Aa]=void 0)}}function Mr(n=""){return document.createTextNode(n)}function Ws(n){return dg.call(n)}function ml(n){return fg.call(n)}function R(n,e){return Ws(n)}function nr(n,e=!1){{var t=Ws(n);return t instanceof Comment&&t.data===""?ml(t):t}}function Q(n,e=!1){return Ws(n)}function y(n,e=1,t=!1){let r=n;for(;e--;)r=ml(r);return r}function LE(n){n.textContent=""}function pg(){return!1}function mg(n,e,t){return e==null||e===qm?t?document.createElement(n,{is:t}):document.createElement(n):t?document.createElementNS(e,n,{is:t}):document.createElementNS(e,n)}function FE(n){var e=Ye;if(e===null)return Se.f|=Xi,n;if((e.f&Xo)===0&&(e.f&Lo)===0)throw n;Zr(n,e)}function Zr(n,e){if(n===$m)throw n;if(!(e!==null&&(e.f&Nn)!==0)){for(;e!==null;){if((e.f&ah)!==0&&(e.f&(Nn|mc))===0){if((e.f&Xo)===0)throw n;try{e.b.error(n);return}catch(t){n=t}}e=e.parent}throw n}}function UE(n){Ye===null&&(Se===null&&hE(),uE()),ls&&cE()}function $E(n,e){var t=e.last;t===null?e.last=e.first=n:(t.next=n,n.prev=t,e.last=n)}function di(n,e){var t=Ye;t!==null&&(t.f&Un)!==0&&(n|=Un);var r={ctx:Dn,deps:null,nodes:null,f:n|wt|Vr,first:null,fn:e,last:null,next:null,parent:t,b:t&&t.b,prev:null,teardown:null,wv:0,ac:null};oe==null||oe.register_created_effect(r);var i=r;if((n&Lo)!==0)Fa!==null?Fa.push(r):js.ensure().schedule(r);else if(e!==null){try{$o(r)}catch(a){throw In(r),a}i.deps===null&&i.teardown===null&&i.nodes===null&&i.first===i.last&&(i.f&Zo)===0&&(i=i.first,(n&Nr)!==0&&(n&as)!==0&&i!==null&&(i.f|=as))}if(i!==null&&(i.parent=t,t!==null&&$E(i,t),Se!==null&&(Se.f&On)!==0&&(n&os)===0)){var s=Se;(s.effects??(s.effects=[])).push(i)}return r}function ud(){return Se!==null&&!Dr}function Jc(n){const e=di(Kc,null);return qt(e,an),e.teardown=n,e}function mh(n){UE();var e=Ye.f,t=!Se&&(e&xr)!==0&&Dn!==null&&!Dn.i;if(t){var r=Dn;(r.e??(r.e=[])).push(n)}else return gg(n)}function gg(n){return di(Lo|Wy,n)}function qE(n){js.ensure();const e=di(os|Zo,n);return(t={})=>new Promise(r=>{t.outro?qs(e,()=>{In(e),r(void 0)}):(In(e),r(void 0))})}function Xc(n){return di(Lo,n)}function BE(n){return di(To|Zo,n)}function hd(n,e=0){return di(Kc|e,n)}function ye(n,e=[],t=[],r=[]){Ym(r,e,t,i=>{di(Kc,()=>{n(...i.map(p))})})}function ta(n,e=0){var t=di(Nr|e,n);return t}function _g(n,e=0){var t=di(td|e,n);return t}function Fn(n){return di(xr|Zo,n)}function vg(n){var e=n.teardown;if(e!==null){const t=ls,r=Se;Ef(!0),Tr(null);try{e.call(null)}catch(i){Zr(i,n.parent)}finally{Ef(t),Tr(r)}}}function dd(n,e=!1){var t=n.first;for(n.first=n.last=null;t!==null;){const i=t.ac;i!==null&&ea(()=>{i.abort(pl)});var r=t.next;(t.f&os)!==0?t.parent=null:In(t,e),t=r}}function zE(n){for(var e=n.first;e!==null;){var t=e.next;(e.f&xr)===0&&In(e),e=t}}function In(n,e=!0){var t=!1;(e||(n.f&Lm)!==0)&&n.nodes!==null&&n.nodes.end!==null&&(jE(n.nodes.start,n.nodes.end),t=!0),n.f|=mc,dd(n,e&&!t),Ka(n,0);var r=n.nodes&&n.nodes.t;if(r!==null)for(const s of r)s.stop();vg(n),n.f^=mc,n.f|=Nn;var i=n.parent;i!==null&&i.first!==null&&yg(n),n.next=n.prev=n.teardown=n.ctx=n.deps=n.fn=n.nodes=n.ac=n.b=null}function jE(n,e){for(;n!==null;){var t=n===e?null:ml(n);n.remove(),n=t}}function yg(n){var e=n.parent,t=n.prev,r=n.next;t!==null&&(t.next=r),r!==null&&(r.prev=t),e!==null&&(e.first===n&&(e.first=r),e.last===n&&(e.last=t))}function qs(n,e,t=!0){var r=[];n.f|=nd,Eg(n,r,!0);var i=()=>{t&&In(n),e&&e()},s=r.length;if(s>0){var a=()=>--s||i();for(var l of r)l.out(a)}else i()}function Eg(n,e,t){if((n.f&Un)===0){n.f^=Un;var r=n.nodes&&n.nodes.t;if(r!==null)for(const l of r)(l.is_global||t)&&e.push(l);for(var i=n.first;i!==null;){var s=i.next;if((i.f&os)===0){var a=(i.f&as)!==0||(i.f&xr)!==0&&(n.f&Nr)!==0;Eg(i,e,a?t:!1)}i=s}}}function Ec(n){n.f&=~nd,wg(n,!0)}function wg(n,e){if((n.f&nd)===0&&(n.f&Un)!==0){n.f^=Un,(n.f&an)===0&&(qt(n,wt),js.ensure().schedule(n));for(var t=n.first;t!==null;){var r=t.next,i=(t.f&as)!==0||(t.f&xr)!==0;wg(t,i?e:!1),t=r}var s=n.nodes&&n.nodes.t;if(s!==null)for(const a of s)(a.is_global||e)&&a.in()}}function fd(n,e){if(n.nodes)for(var t=n.nodes.start,r=n.nodes.end;t!==null;){var i=t===r?null:ml(t);e.append(t),t=i}}let ls=!1;function Ef(n){ls=n}let Se=null,Dr=!1;function Tr(n){Se=n}let Ye=null;function ui(n){Ye=n}let ri=null;function Tg(n){Se!==null&&((Se.f&_c)!==0||(Se.f&On)!==0)&&(ri??(ri=new Set)).add(n)}let Wn=null,ar=0,pr=null;function HE(n){pr=n}let Ig=1,Os=0,Bs=Os;function wf(n){Bs=n}function Ag(){return++Ig}function gl(n){var e=n.f;if((e&wt)!==0)return!0;if((e&cr)!==0){for(var t=n.deps,r=t.length,i=0;i<r;i++){var s=t[i];if(gl(s)&&Xm(s),s.wv>n.wv)return!0}(e&Vr)!==0&&Tn===null&&qt(n,an)}return!1}function bg(n,e,t=!0){var r=n.reactions;if(r!==null&&!(ri!==null&&ri.has(n)))for(var i=0;i<r.length;i++){var s=r[i];(s.f&On)!==0?bg(s,e,!1):e===s&&(t?qt(s,wt):(s.f&an)!==0&&qt(s,cr),cd(s))}}function Sg(n){var e=Wn,t=ar,r=pr,i=Se,s=ri,a=Dn,l=Dr,c=Bs,h=n.f;Wn=null,ar=0,pr=null,Se=(h&(xr|os))===0?n:null,ri=null,Fo(n.ctx),Dr=!1,Bs=++Os,n.ac!==null&&(ea(()=>{n.ac.abort(pl)}),n.ac=null);try{n.f|=_c;var f=n.fn,m=f();n.f|=Xo;var _=Tf(n);if(Gm()&&pr!==null&&!Dr&&_!==null&&(n.f&(On|cr|wt))===0)for(var I=0;I<pr.length;I++)bg(pr[I],n);if(i!==null&&i!==n){if(Os++,i.deps!==null)for(let w=0;w<t;w+=1)i.deps[w].rv=Os;if(e!==null)for(const w of e)w.rv=Os;pr!==null&&(r===null?r=pr:r.push(...pr))}return(n.f&Xi)!==0&&(n.f^=Xi),m}catch(w){return Tf(n),FE(w)}finally{n.f^=_c,Wn=e,ar=t,pr=r,Se=i,ri=s,Fo(a),Dr=l,Bs=c}}function Tf(n){var i;var e=n.deps,t=oe==null?void 0:oe.is_fork;if(Wn!==null){var r;if(t||Ka(n,ar),e!==null&&ar>0)for(e.length=ar+Wn.length,r=0;r<Wn.length;r++)e[ar+r]=Wn[r];else n.deps=e=Wn;if(ud()&&(n.f&Vr)!==0)for(r=ar;r<e.length;r++)((i=e[r]).reactions??(i.reactions=[])).push(n)}else!t&&e!==null&&ar<e.length&&(Ka(n,ar),e.length=ar);return e}function WE(n,e){let t=e.reactions;if(t!==null){var r=$y.call(t,n);if(r!==-1){var i=t.length-1;i===0?t=e.reactions=null:(t[r]=t[i],t.pop())}}if(t===null&&(e.f&On)!==0&&(Wn===null||!Ga.call(Wn,e))){var s=e;(s.f&Vr)!==0&&(s.f^=Vr),s.v!==Yt&&sd(s),s.ac!==null&&ea(()=>{s.ac.abort(pl),s.ac=null,qt(s,wt)}),PE(s),Ka(s,0)}}function Ka(n,e){var t=n.deps;if(t!==null)for(var r=e;r<t.length;r++)WE(n,t[r])}function $o(n){var e=n.f;if((e&Nn)===0){qt(n,an);var t=Ye;Ye=n;try{(e&(Nr|td))!==0?zE(n):dd(n),vg(n);var r=Sg(n);n.teardown=typeof r=="function"?r:null,n.wv=Ig;var i;Om&&_E&&(n.f&wt)!==0&&n.deps}finally{Ye=t}}}async function GE(){await Promise.resolve(),DE()}function p(n){var e=n.f,t=(e&On)!==0;if(Se!==null&&!Dr){var r=Ye!==null&&(Ye.f&Nn)!==0;if(!r&&(ri===null||!ri.has(n))){var i=Se.deps;if((Se.f&_c)!==0)n.rv<Os&&(n.rv=Os,Wn===null&&i!==null&&i[ar]===n?ar++:Wn===null?Wn=[n]:Wn.push(n));else{Se.deps??(Se.deps=[]),Ga.call(Se.deps,n)||Se.deps.push(n);var s=n.reactions;s===null?n.reactions=[Se]:Ga.call(s,Se)||s.push(Se)}}}if(ls&&ni.has(n))return ni.get(n);if(t){var a=n;if(ls){var l=a.v;return((a.f&an)===0&&a.reactions!==null||Cg(a))&&(l=ad(a)),ni.set(a,l),l}var c=(a.f&Vr)===0&&!Dr&&Se!==null&&(Se.f&Vr)!==0,h=(a.f&Xo)===0;gl(a)&&(c&&(a.f|=Vr),Xm(a)),c&&!h&&(Zm(a),Rg(a))}if(Tn!=null&&Tn.has(n))return Tn.get(n);if((n.f&Xi)!==0)throw n.v;return n.v}function Rg(n){if(n.f|=Vr,n.deps!==null)for(const t of n.deps){var e=t.reactions;e===null?t.reactions=[n]:Ga.call(e,n)||e.push(n),(t.f&On)!==0&&(t.f&Vr)===0&&(Zm(t),Rg(t))}}function Cg(n){if(n.v===Yt)return!0;if(n.deps===null)return!1;for(const e of n.deps)if(ni.has(e)||(e.f&On)!==0&&Cg(e))return!0;return!1}function Zc(n){var e=Dr;try{return Dr=!0,n()}finally{Dr=e}}function KE(n){return n.endsWith("capture")&&n!=="gotpointercapture"&&n!=="lostpointercapture"}const QE=["beforeinput","click","change","dblclick","contextmenu","focusin","focusout","input","keydown","keyup","mousedown","mousemove","mouseout","mouseover","mouseup","pointerdown","pointermove","pointerout","pointerover","pointerup","touchend","touchmove","touchstart"];function YE(n){return QE.includes(n)}const JE={formnovalidate:"formNoValidate",ismap:"isMap",nomodule:"noModule",playsinline:"playsInline",readonly:"readOnly",defaultvalue:"defaultValue",defaultchecked:"defaultChecked",srcobject:"srcObject",novalidate:"noValidate",allowfullscreen:"allowFullscreen",disablepictureinpicture:"disablePictureInPicture",disableremoteplayback:"disableRemotePlayback"};function XE(n){return n=n.toLowerCase(),JE[n]??n}const ZE=["touchstart","touchmove"];function ew(n){return ZE.includes(n)}const Vs=Symbol("events"),Pg=new Set,gh=new Set;function kg(n,e,t,r={}){function i(s){if(r.capture||_h.call(e,s),!s.cancelBubble)return ea(()=>t==null?void 0:t.call(this,s))}return n.startsWith("pointer")||n.startsWith("touch")||n==="wheel"?(i.__removed=!1,ti(()=>{i.__removed||e.addEventListener(n,i,r)})):e.addEventListener(n,i,r),i}function fo(n,e,t,r,i){var s={capture:r,passive:i},a=kg(n,e,t,s);(e===document.body||e===window||e===document||e instanceof HTMLMediaElement)&&Jc(()=>{a.__removed=!0,e.removeEventListener(n,a,s)})}function fe(n,e,t){(e[Vs]??(e[Vs]={}))[n]=t}function Ng(n){for(var e=0;e<n.length;e++)Pg.add(n[e]);for(var t of gh)t(n)}let Lu=null,Fu=!1;function _h(n){var D,T;var e=this,t=e.ownerDocument,r=n.type,i=((D=n.composedPath)==null?void 0:D.call(n))||[],s=i[0]||n.target;Lu=n,Fu||(Fu=!0,setTimeout(()=>{Fu=!1,Lu=null}));var a=0,l=Lu===n&&n[Vs];if(l){var c=i.indexOf(l);if(c!==-1&&(e===document||e===window)){n[Vs]=e;return}var h=i.indexOf(e);if(h===-1)return;c<=h&&(a=c)}if(s=i[a]||n.target,s!==e){Vm(n,"currentTarget",{configurable:!0,get(){return s||t}});var f=Se,m=Ye;Tr(null),ui(null);try{for(var _,I=[];s!==null&&s!==e;){try{var w=(T=s[Vs])==null?void 0:T[r];w!=null&&(!s.disabled||n.target===s)&&w.call(s,n)}catch(L){_?I.push(L):_=L}if(n.cancelBubble)break;a++,s=a<i.length?i[a]:null}if(_){for(let L of I)queueMicrotask(()=>{throw L});throw _}}finally{n[Vs]=e,delete n.currentTarget,Tr(f),ui(m)}}}var Nm;const Uu=((Nm=globalThis==null?void 0:globalThis.window)==null?void 0:Nm.trustedTypes)&&globalThis.window.trustedTypes.createPolicy("svelte-trusted-html",{createHTML:n=>n});function tw(n){return(Uu==null?void 0:Uu.createHTML(n))??n}function Dg(n){var e=mg("template");return e.innerHTML=tw(n.replaceAll("<!>","<!---->")),e.content}function qo(n,e){var t=Ye;t.nodes===null&&(t.nodes={start:n,end:e,a:null,t:null})}function J(n,e){var t=(e&Zy)!==0,r=(e&eE)!==0,i,s=!n.startsWith("<!>");return()=>{i===void 0&&(i=Dg(s?n:"<!>"+n),t||(i=Ws(i)));var a=r||hg?document.importNode(i,!0):i.cloneNode(!0);if(t){var l=Ws(a),c=a.lastChild;qo(l,c)}else qo(a,a);return a}}function nw(n,e,t="svg"){var r=!n.startsWith("<!>"),i=`<${t}>${r?n:"<!>"+n}</${t}>`,s;return()=>{if(!s){var a=Dg(i),l=Ws(a);s=Ws(l)}var c=s.cloneNode(!0);return qo(c,c),c}}function rw(n,e){return nw(n,e,"svg")}function iw(n=""){{var e=Mr(n+"");return qo(e,e),e}}function Og(){var n=document.createDocumentFragment(),e=document.createComment(""),t=Mr();return n.append(e,t),qo(e,t),n}function H(n,e){n!==null&&n.before(e)}function sw(n){let e=0,t=Hs(0),r;return()=>{ud()&&(p(t),hd(()=>(e===0&&(r=Zc(()=>n(()=>Ua(t)))),e+=1,()=>{ti(()=>{e-=1,e===0&&(r==null||r(),r=void 0,Ua(t))})})))}}var ow=as|Zo;function aw(n,e,t,r){new lw(n,e,t,r)}var mr,Zh,gr,Ls,Pn,ir,Ln,sr,Jr,Fs,Yi,xo,hl,wi,jc,He,cw,uw,vh,zi,hw,yh,Ca,sc,Eh,wh;class lw{constructor(e,t,r,i){Oe(this,He);Rn(this,"parent");Rn(this,"is_pending",!1);Rn(this,"transform_error");Oe(this,mr);Oe(this,Zh,null);Oe(this,gr);Oe(this,Ls);Oe(this,Pn);Oe(this,ir,null);Oe(this,Ln,null);Oe(this,sr,null);Oe(this,Jr,null);Oe(this,Fs,0);Oe(this,Yi,0);Oe(this,xo,!1);Oe(this,hl,new Map);Oe(this,wi,null);Oe(this,jc,sw(()=>(be(this,wi,Hs(V(this,Fs))),()=>{be(this,wi,null)})));var s;be(this,mr,e),be(this,gr,t),be(this,Ls,a=>{var l=Ye;l.b=this,l.f|=ah,r(a)}),this.parent=Ye.b,this.transform_error=i??((s=this.parent)==null?void 0:s.transform_error)??(a=>a),be(this,Pn,ta(()=>{_e(this,He,yh).call(this)},ow))}defer_effect(e){Qm(e,V(this,hl))}is_rendered(){return!this.is_pending&&(!this.parent||this.parent.is_rendered())}has_pending_snippet(){return!!V(this,gr).pending}update_pending_count(e,t){_e(this,He,Eh).call(this,e,t),be(this,Fs,V(this,Fs)+e),!(!V(this,wi)||V(this,xo))&&(be(this,xo,!0),ti(()=>{be(this,xo,!1),V(this,wi)&&Uo(V(this,wi),V(this,Fs))}))}get_effect_pending(){return V(this,jc).call(this),p(V(this,wi))}error(e){if(e===$m||!V(this,gr).onerror&&!V(this,gr).failed)throw e;oe!=null&&oe.is_fork?(V(this,ir)&&oe.skip_effect(V(this,ir)),V(this,Ln)&&oe.skip_effect(V(this,Ln)),V(this,sr)&&oe.skip_effect(V(this,sr)),oe.oncommit(()=>{_e(this,He,zi).call(this)||_e(this,He,wh).call(this,e)})):_e(this,He,wh).call(this,e)}}mr=new WeakMap,Zh=new WeakMap,gr=new WeakMap,Ls=new WeakMap,Pn=new WeakMap,ir=new WeakMap,Ln=new WeakMap,sr=new WeakMap,Jr=new WeakMap,Fs=new WeakMap,Yi=new WeakMap,xo=new WeakMap,hl=new WeakMap,wi=new WeakMap,jc=new WeakMap,He=new WeakSet,cw=function(){try{be(this,ir,Fn(()=>V(this,Ls).call(this,V(this,mr))))}catch(e){this.error(e)}},uw=function(e){const t=V(this,gr).failed,{reset:r,invoke_onerror:i}=_e(this,He,vh).call(this,e);ti(i),t&&be(this,sr,Fn(()=>{t(V(this,mr),()=>e,()=>r)}))},vh=function(e){var t=!1,r=!1;const i=()=>{if(!_e(this,He,zi).call(this)){if(t){sE();return}t=!0,r&&gE(),V(this,sr)!==null&&qs(V(this,sr),()=>{be(this,sr,null)}),_e(this,He,sc).call(this,()=>{_e(this,He,yh).call(this)})}};return{reset:i,invoke_onerror:()=>{var a,l;if(!_e(this,He,zi).call(this))try{r=!0,(l=(a=V(this,gr)).onerror)==null||l.call(a,e,i),r=!1}catch(c){Zr(c,V(this,Pn)&&V(this,Pn).parent)}}}},zi=function(){return(V(this,Pn).f&(Nn|mc))!==0},hw=function(){const e=V(this,gr).pending;e&&(this.is_pending=!0,be(this,Ln,Fn(()=>e(V(this,mr)))),ti(()=>{if(!_e(this,He,zi).call(this)){var t=be(this,Jr,document.createDocumentFragment()),r=Mr(),i=!1;if(t.append(r),be(this,ir,_e(this,He,sc).call(this,()=>{try{return Fn(()=>V(this,Ls).call(this,r))}catch(s){try{this.error(s),i=!0}catch(a){Zr(a,V(this,Pn).parent)}return null}})),V(this,ir)===null){be(this,Jr,null),i&&_e(this,He,Ca).call(this,oe);return}V(this,Yi)===0&&(V(this,mr).before(t),be(this,Jr,null),qs(V(this,Ln),()=>{be(this,Ln,null)}),_e(this,He,Ca).call(this,oe))}}))},yh=function(){try{if(this.is_pending=this.has_pending_snippet(),be(this,Yi,0),be(this,Fs,0),be(this,ir,Fn(()=>{V(this,Ls).call(this,V(this,mr))})),V(this,Yi)>0){var e=be(this,Jr,document.createDocumentFragment());fd(V(this,ir),e);const t=V(this,gr).pending;be(this,Ln,Fn(()=>t(V(this,mr))))}else _e(this,He,Ca).call(this,oe)}catch(t){this.error(t)}},Ca=function(e){this.is_pending=!1,e.transfer_reactions(V(this,hl))},sc=function(e){var t=Ye,r=Se,i=Dn;ui(V(this,Pn)),Tr(V(this,Pn)),Fo(V(this,Pn).ctx);try{return js.ensure(),e()}finally{ui(t),Tr(r),Fo(i)}},Eh=function(e,t){var r;if(!this.has_pending_snippet()){this.parent&&_e(r=this.parent,He,Eh).call(r,e,t);return}be(this,Yi,V(this,Yi)+e),V(this,Yi)===0&&(_e(this,He,Ca).call(this,t),V(this,Ln)&&qs(V(this,Ln),()=>{be(this,Ln,null)}),V(this,Jr)&&(V(this,mr).before(V(this,Jr)),be(this,Jr,null)))},wh=function(e){V(this,ir)&&(In(V(this,ir)),be(this,ir,null)),V(this,Ln)&&(In(V(this,Ln)),be(this,Ln,null)),V(this,sr)&&(In(V(this,sr)),be(this,sr,null));let t=V(this,gr).failed;const r=i=>{if(_e(this,He,zi).call(this))return;const{reset:s,invoke_onerror:a}=_e(this,He,vh).call(this,i);a(),t&&!_e(this,He,zi).call(this)&&be(this,sr,_e(this,He,sc).call(this,()=>{try{return Fn(()=>{var l=Ye;l.b=this,l.f|=ah,t(V(this,mr),()=>i,()=>s)})}catch(l){return Zr(l,V(this,Pn).parent),null}}))};ti(()=>{if(!_e(this,He,zi).call(this)){var i;try{i=this.transform_error(e)}catch(s){Zr(s,V(this,Pn)&&V(this,Pn).parent);return}i!==null&&typeof i=="object"&&typeof i.then=="function"?i.then(r,s=>Zr(s,V(this,Pn)&&V(this,Pn).parent)):r(i)}})};function j(n,e){var t=e==null?"":typeof e=="object"?`${e}`:e;t!==(n[Aa]??(n[Aa]=n.nodeValue))&&(n[Aa]=t,n.nodeValue=`${t}`)}function dw(n,e){return fw(n,e)}const ql=new Map;function fw(n,{target:e,anchor:t,props:r={},events:i,context:s,intro:a=!0,transformError:l}){xE();var c=void 0,h=qE(()=>{var f=t??e.appendChild(Mr());aw(f,{pending:()=>{}},I=>{rd({});var w=Dn;s&&(w.c=s),i&&(r.$$events=i),c=n(I,r)||Wm(),id()},l);var m=new Set,_=I=>{for(var w=0;w<I.length;w++){var D=I[w];if(!m.has(D)){m.add(D);var T=ew(D);for(const q of[e,document]){var L=ql.get(q);L===void 0&&(L=new Map,ql.set(q,L));var U=L.get(D);U===void 0?(q.addEventListener(D,_h,{passive:T}),L.set(D,1)):L.set(D,U+1)}}}};return _(Gc(Pg)),gh.add(_),()=>{var T;for(var I of m)for(const L of[e,document]){var w=ql.get(L),D=w.get(I);--D==0?(L.removeEventListener(I,_h),w.delete(I),w.size===0&&ql.delete(L)):w.set(I,D)}gh.delete(_),f!==t&&((T=f.parentNode)==null||T.removeChild(f))}});return pw.set(c,h),c}let pw=new WeakMap;var kr,Xr,or,Us,dl,fl,Hc;class pd{constructor(e,t=!0){Rn(this,"anchor");Oe(this,kr,new Map);Oe(this,Xr,new Map);Oe(this,or,new Map);Oe(this,Us,new Set);Oe(this,dl,!0);Oe(this,fl,e=>{if(V(this,kr).has(e)){var t=V(this,kr).get(e),r=V(this,Xr).get(t);if(r)Ec(r),V(this,Us).delete(t);else{var i=V(this,or).get(t);i&&(Ec(i.effect),V(this,Xr).set(t,i.effect),V(this,or).delete(t),i.fragment.lastChild.remove(),this.anchor.before(i.fragment),r=i.effect)}for(const[s,a]of V(this,kr)){if(V(this,kr).delete(s),s===e)break;const l=V(this,or).get(a);l&&(In(l.effect),V(this,or).delete(a))}for(const[s,a]of V(this,Xr)){if(s===t||V(this,Us).has(s))continue;const l=()=>{if(Array.from(V(this,kr).values()).includes(s)){var h=document.createDocumentFragment();fd(a,h),h.append(Mr()),V(this,or).set(s,{effect:a,fragment:h})}else In(a);V(this,Us).delete(s),V(this,Xr).delete(s)};V(this,dl)||!r?(V(this,Us).add(s),qs(a,l,!1)):l()}}});Oe(this,Hc,e=>{V(this,kr).delete(e);const t=Array.from(V(this,kr).values());for(const[r,i]of V(this,or))t.includes(r)||(In(i.effect),V(this,or).delete(r))});this.anchor=e,be(this,dl,t)}ensure(e,t){var r=oe,i=pg();if(t&&!V(this,Xr).has(e)&&!V(this,or).has(e))if(i){var s=document.createDocumentFragment(),a=Mr();s.append(a),V(this,or).set(e,{effect:Fn(()=>t(a)),fragment:s})}else V(this,Xr).set(e,Fn(()=>t(this.anchor)));if(V(this,kr).set(r,e),i){for(const[l,c]of V(this,Xr))l===e?r.unskip_effect(c):r.skip_effect(c);for(const[l,c]of V(this,or))l===e?r.unskip_effect(c.effect):r.skip_effect(c.effect);r.oncommit(V(this,fl)),r.ondiscard(V(this,Hc))}else V(this,fl).call(this,r)}}kr=new WeakMap,Xr=new WeakMap,or=new WeakMap,Us=new WeakMap,dl=new WeakMap,fl=new WeakMap,Hc=new WeakMap;function ve(n,e,t=!1){var r=new pd(n),i=t?as:0;function s(a,l){r.ensure(a,l)}ta(()=>{var a=!1;e((l,c=0)=>{a=!0,s(c,l)}),a||s(-1,null)},i)}function mw(n,e){return e}function gw(n,e,t){for(var r=[],i=e.length,s,a=e.length,l=0;l<i;l++){let m=e[l];qs(m,()=>{if(s){if(s.pending.delete(m),s.done.add(m),s.pending.size===0){var _=n.outrogroups;Th(n,Gc(s.done)),_.delete(s),_.size===0&&(n.outrogroups=null)}}else a-=1},!1)}if(a===0){var c=r.length===0&&t!==null&&n.pending.size===0;if(c){var h=t,f=h.parentNode;LE(f),f.append(h),n.items.clear()}Th(n,e,!c)}else s={pending:new Set(e),done:new Set},(n.outrogroups??(n.outrogroups=new Set)).add(s)}function Th(n,e,t=!0){var r;if(n.pending.size>0){r=new Set;for(const a of n.pending.values())for(const l of a)r.add(n.items.get(l).e)}for(var i=0;i<e.length;i++){var s=e[i];if(r!=null&&r.has(s)){s.f|=ei;const a=document.createDocumentFragment();fd(s,a)}else In(e[i],t)}}var If;function ji(n,e,t,r,i,s=null){var a=n,l=new Map,c=(e&Um)!==0;if(c){var h=n;a=h.appendChild(Mr())}var f=null,m=RE(()=>{var U=t();return Wc(U)?U:U==null?[]:Gc(U)}),_=new Map,I=!0;function w(U){if((L.effect.f&Nn)===0){L.pending.delete(U);var q=p(m);L.fallback=f,_w(L,q,a,e,r),f!==null&&(q.length===0?(f.f&ei)===0?Ec(f):(f.f^=ei,Pa(f,null,a)):qs(f,()=>{f=null}))}}function D(U){L.pending.delete(U)}var T=ta(()=>{for(var U=p(m),q=U.length,ee=new Set,ge=oe,W=pg(),A=0;A<q;A+=1){var v=U[A],E=r(v,A),S=I?null:l.get(E);S?(S.v&&Uo(S.v,v),S.i&&Uo(S.i,A),W&&ge.unskip_effect(S.e)):(S=vw(l,I?a:If??(If=Mr()),v,E,A,i,e,t),I||(S.e.f|=ei),l.set(E,S)),ee.add(E)}if(q===0&&s&&!f&&(I?f=Fn(()=>s(a)):(f=Fn(()=>s(If??(If=Mr()))),f.f|=ei)),q>ee.size&&lE(),!I)if(_.set(ge,ee),W){for(const[C,P]of l)ee.has(C)||ge.skip_effect(P.e);ge.oncommit(w),ge.ondiscard(D)}else w(ge);p(m)}),L={effect:T,items:l,pending:_,outrogroups:null,fallback:f};I=!1}function ya(n){for(;n!==null&&(n.f&xr)===0;)n=n.next;return n}function _w(n,e,t,r,i){var S,C,P,b,Vt,Mn,fi,$n,vn;var s=(r&Jy)!==0,a=e.length,l=n.items,c=ya(n.effect.first),h,f=null,m,_=[],I=[],w,D,T,L;if(s)for(L=0;L<a;L+=1)w=e[L],D=i(w,L),T=l.get(D).e,(T.f&ei)===0&&((C=(S=T.nodes)==null?void 0:S.a)==null||C.measure(),(m??(m=new Set)).add(T));for(L=0;L<a;L+=1){if(w=e[L],D=i(w,L),T=l.get(D).e,n.outrogroups!==null)for(const te of n.outrogroups)te.pending.delete(T),te.done.delete(T);if((T.f&Un)!==0&&(Ec(T),s&&((b=(P=T.nodes)==null?void 0:P.a)==null||b.unfix(),(m??(m=new Set)).delete(T))),(T.f&ei)!==0)if(T.f^=ei,T===c)Pa(T,null,t);else{var U=f?f.next:c;T===n.effect.last&&(n.effect.last=T.prev),T.prev&&(T.prev.next=T.next),T.next&&(T.next.prev=T.prev),qi(n,f,T),qi(n,T,U),Pa(T,U,t),f=T,_=[],I=[],c=ya(f.next);continue}if(T!==c){if(h!==void 0&&h.has(T)){if(_.length<I.length){var q=I[0],ee;f=q.prev;var ge=_[0],W=_[_.length-1];for(ee=0;ee<_.length;ee+=1)Pa(_[ee],q,t);for(ee=0;ee<I.length;ee+=1)h.delete(I[ee]);qi(n,ge.prev,W.next),qi(n,f,ge),qi(n,W,q),c=q,f=W,L-=1,_=[],I=[]}else h.delete(T),Pa(T,c,t),qi(n,T.prev,T.next),qi(n,T,f===null?n.effect.first:f.next),qi(n,f,T),f=T;continue}for(_=[],I=[];c!==null&&c!==T;)(h??(h=new Set)).add(c),I.push(c),c=ya(c.next);if(c===null)continue}(T.f&ei)===0&&_.push(T),f=T,c=ya(T.next)}if(n.outrogroups!==null){for(const te of n.outrogroups)te.pending.size===0&&(Th(n,Gc(te.done)),(Vt=n.outrogroups)==null||Vt.delete(te));n.outrogroups.size===0&&(n.outrogroups=null)}if(c!==null||h!==void 0){var A=[];if(h!==void 0)for(T of h)(T.f&Un)===0&&A.push(T);for(;c!==null;)(c.f&Un)===0&&c!==n.fallback&&A.push(c),c=ya(c.next);var v=A.length;if(v>0){var E=(r&Um)!==0&&a===0?t:null;if(s){for(L=0;L<v;L+=1)(fi=(Mn=A[L].nodes)==null?void 0:Mn.a)==null||fi.measure();for(L=0;L<v;L+=1)(vn=($n=A[L].nodes)==null?void 0:$n.a)==null||vn.fix()}gw(n,A,E)}}s&&ti(()=>{var te,jt;if(m!==void 0)for(T of m)(jt=(te=T.nodes)==null?void 0:te.a)==null||jt.apply()})}function vw(n,e,t,r,i,s,a,l){var c=(a&Qy)!==0?(a&Xy)===0?VE(t,!1,!1):Hs(t):null,h=(a&Yy)!==0?Hs(i):null;return{v:c,i:h,e:Fn(()=>(s(e,c??t,h??i,l),()=>{n.delete(r)}))}}function Pa(n,e,t){if(n.nodes)for(var r=n.nodes.start,i=n.nodes.end,s=e&&(e.f&ei)===0?e.nodes.start:t;r!==null;){var a=ml(r);if(s.before(r),r===i)return;r=a}}function qi(n,e,t){e===null?n.effect.first=t:e.next=t,t===null?n.effect.last=e:t.prev=e}function yw(n,e,...t){var r=new pd(n);ta(()=>{const i=e()??null;r.ensure(i,i&&(s=>i(s,...t)))},as)}function Ew(n,e,t,r,i,s){var a=null,l=n,c=new pd(l,!1);ta(()=>{const h=e()||null;var f=tE;if(h===null){c.ensure(null,null);return}return c.ensure(h,m=>{if(h){var _=Bm;if(a=mg(h,f),qo(a,a),r){var I=null,w=a.appendChild(Mr());r(a,w),I==null||I.remove()}Ye.nodes.end=a,_||m.before(a)}}),()=>{}},as),Jc(()=>{})}function ww(n,e){var t;t=document.head.appendChild(Mr());try{ta(()=>{var r=Fn(()=>e(t));r.f|=Lm,Bm||(r.nodes===null?r.nodes={start:t,end:t,a:null,t:null}:r.nodes.end=t)})}finally{}}function Tw(n,e){var t=void 0,r;_g(()=>{t!==(t=e())&&(r&&(In(r),r=null),t&&(r=Fn(()=>{Xc(()=>t(n))})))})}function Vg(n){var e,t,r="";if(typeof n=="string"||typeof n=="number")r+=n;else if(typeof n=="object")if(Array.isArray(n)){var i=n.length;for(e=0;e<i;e++)n[e]&&(t=Vg(n[e]))&&(r&&(r+=" "),r+=t)}else for(t in n)n[t]&&(r&&(r+=" "),r+=t);return r}function Iw(){for(var n,e,t=0,r="",i=arguments.length;t<i;t++)(n=arguments[t])&&(e=Vg(n))&&(r&&(r+=" "),r+=e);return r}function Aw(n){return typeof n=="object"?Iw(n):n??""}const Af=[...` 	
\r\f \v\uFEFF`];function bw(n,e,t){var r=n==null?"":""+n;if(e&&(r=r?r+" "+e:e),t){for(var i of Object.keys(t))if(t[i])r=r?r+" "+i:i;else if(r.length)for(var s=i.length,a=0;(a=r.indexOf(i,a))>=0;){var l=a+s;(a===0||Af.includes(r[a-1]))&&(l===r.length||Af.includes(r[l]))?r=(a===0?"":r.substring(0,a))+r.substring(l+1):a=l}}return r===""?null:r}function bf(n,e=!1){var t=e?" !important;":";",r="";for(var i of Object.keys(n)){var s=n[i];s!=null&&s!==""&&(r+=" "+i+": "+s+t)}return r}function $u(n){return n[0]!=="-"||n[1]!=="-"?n.toLowerCase():n}function Sw(n,e){if(e){var t="",r,i;if(Array.isArray(e)?(r=e[0],i=e[1]):r=e,n){n=String(n).replaceAll(/\/\*.*?\*\//g,"").trim();var s=!1,a=0,l=!1,c=[];r&&c.push(...Object.keys(r).map($u)),i&&c.push(...Object.keys(i).map($u));var h=0,f=-1;const D=n.length;for(var m=0;m<D;m++){var _=n[m];if(l?_==="/"&&n[m-1]==="*"&&(l=!1):s?s===_&&(s=!1):_==="/"&&n[m+1]==="*"?l=!0:_==='"'||_==="'"?s=_:_==="("?a++:_===")"&&a--,!l&&s===!1&&a===0){if(_===":"&&f===-1)f=m;else if(_===";"||m===D-1){if(f!==-1){var I=$u(n.substring(h,f).trim());if(!c.includes(I)){_!==";"&&m++;var w=n.substring(h,m).trim();t+=" "+w+";"}}h=m+1,f=-1}}}}return r&&(t+=bf(r)),i&&(t+=bf(i,!0)),t=t.trim(),t===""?null:t}return n==null?null:String(n)}function pn(n,e,t,r,i,s){var a=n[lh];if(a!==t||a===void 0){var l=bw(t,r,s);l==null?n.removeAttribute("class"):e?n.className=l:n.setAttribute("class",l),n[lh]=t}else if(s&&i!==s)for(var c in s){var h=!!s[c];(i==null||h!==!!i[c])&&n.classList.toggle(c,h)}return s}function qu(n,e={},t,r){for(var i in t){var s=t[i];e[i]!==s&&(t[i]==null?n.style.removeProperty(i):n.style.setProperty(i,s,r))}}function Rw(n,e,t,r){var i=n[ch];if(i!==e){var s=Sw(e,r);s==null?n.removeAttribute("style"):n.style.cssText=s,n[ch]=e}else r&&(Array.isArray(r)?(qu(n,t==null?void 0:t[0],r[0]),qu(n,t==null?void 0:t[1],r[1],"important")):qu(n,t,r));return r}function Mg(n,e){e?n.hasAttribute("selected")||n.setAttribute("selected",""):n.removeAttribute("selected")}function Sf(n,e){var t=!("__defaultValue"in n);!t&&n.__defaultValue===e||(n.__defaultValue=e,xg(n,!t||"__value"in n))}function xg(n,e){var t=n.__defaultValue,r=n.multiple,i=r?t??[]:null;if(!(r&&!Wc(i))){var s=n.selectedIndex,a=e&&r?new Set(n.selectedOptions):null;for(var l of n.options){var c=Ao(l);Mg(l,r?i.includes(c):cg(c,t))}if(e)if(a!==null)for(l of n.options){var h=a.has(l);l.selected!==h&&(l.selected=h)}else n.selectedIndex!==s&&(n.selectedIndex=s)}}function wc(n,e,t=!1){if(n.multiple){if(e==null)return;if(!Wc(e))return iE();for(var r of n.options)r.selected=e.includes(Ao(r));return}for(r of n.options){var i=Ao(r);if(cg(i,e)){r.selected=!0;return}}(!t||e!==void 0)&&(n.selectedIndex=-1)}function Ih(n){var e=new MutationObserver(t=>{t.every(Cw)||("__defaultValue"in n&&xg(n,!1),"__value"in n&&wc(n,n.__value))});e.observe(n,{childList:!0,subtree:!0,attributes:!0,attributeFilter:["value"]}),Jc(()=>{e.disconnect()})}function Rf(n,e,t=e){var r=new WeakSet,i=!0;od(n,"change",s=>{var a=s?"[selected]":":checked",l;if(n.multiple)l=[].map.call(n.querySelectorAll(a),Ao);else{var c=n.querySelector(a)??n.querySelector("option:not([disabled])");l=c&&Ao(c)}t(l),n.__value=l,oe!==null&&r.add(oe)}),Xc(()=>{var s=e();if(n===document.activeElement){var a=oe;if(r.has(a))return}if(wc(n,s,i),i&&s===void 0){var l=n.querySelector(":checked");l!==null&&(s=Ao(l),t(s))}n.__value=s,i=!1})}function Ao(n){return"__value"in n?n.__value:n.value}function Cw(n){if(n.target.closest("selectedcontent")!==null)return!0;if(n.type==="childList"){var e=[...n.addedNodes,...n.removedNodes];return e.length>0&&e.every(t=>t.nodeName==="SELECTEDCONTENT")}return!1}const Ea=Symbol("class"),wa=Symbol("style"),Lg=Symbol("is custom element"),Fg=Symbol("is html"),Pw=Qc?"input":"INPUT",kw=Qc?"option":"OPTION",Ug=Qc?"select":"SELECT",Nw=Qc?"progress":"PROGRESS";function rr(n,e,t,r){var i=$g(n),s=i[e];s!==(i[e]=t)&&(e==="loading"&&(n[Ky]=t),t==null?n.removeAttribute(e):typeof t!="string"&&qg(n).has(e)?n[e]=t:n.setAttribute(e,t))}function Dw(n,e,t,r,i=!1,s=!1){var a=$g(n),l=a[Lg],c=!a[Fg],h=e||{},f=n.nodeName===kw,m=n.nodeName===Ug;try{for(var _ in e)!(_ in t)&&_[0]+_[1]!=="$$"&&(t[_]=null);t.class?t.class=Aw(t.class):(r||t[Ea])&&(t.class=null),t[wa]&&(t.style??(t.style=null));var I=qg(n);if(n.nodeName===Pw&&"type"in t&&("value"in t||"__value"in t)){var w=t.type;(w!==h.type||w===void 0&&n.hasAttribute("type"))&&(h.type=w,rr(n,"type",w,s))}for(const W in t){let A=t[W];if(f&&W==="value"&&A==null){n.value=n.__value="",h[W]=A;continue}if(W==="class"){var D=n.namespaceURI==="http://www.w3.org/1999/xhtml";pn(n,D,A,r,e==null?void 0:e[Ea],t[Ea]),h[W]=A,h[Ea]=t[Ea];continue}if(W==="style"){Rw(n,A,e==null?void 0:e[wa],t[wa]),h[W]=A,h[wa]=t[wa];continue}var T=h[W];if(!(A===T&&!(A===void 0&&n.hasAttribute(W)))){h[W]=A;var L=W[0]+W[1];if(L!=="$$")if(L==="on"){const v={},E="$$"+W;let S=W.slice(2);var U=YE(S);if(KE(S)&&(S=S.slice(0,-7),v.capture=!0),!U&&T){if(A!=null)continue;n.removeEventListener(S,h[E],v),h[E]=null}if(U)fe(S,n,A),Ng([S]);else if(A!=null){let C=function(P){h[W].call(this,P)};var ge=C;h[E]=kg(S,n,C,v)}}else if(W==="style")rr(n,W,A);else if(W==="autofocus")IE(n,!!A);else if(!l&&(W==="__value"||W==="value"&&A!=null))n.__value=A,(T==null||n.value!==A||A===0&&n.nodeName===Nw)&&(n.value=A);else if(W==="selected"&&f)Mg(n,A);else{var q=W;c||(q=XE(q));var ee=q==="defaultValue"||q==="defaultChecked";if(m&&q==="defaultValue")continue;if(A==null&&!l&&!ee)if(a[W]=null,q==="value"||q==="checked"){let v=n;const E=e===void 0;if(q==="value"){let S=v.defaultValue;v.removeAttribute(q),v.defaultValue=S,v.value=v.__value=E?S:null}else{let S=v.defaultChecked;v.removeAttribute(q),v.defaultChecked=S,v.checked=E?S:!1}}else n.removeAttribute(W);else ee||(l||typeof A!="string")&&I.has(q)?(n[q]=A,q in a&&(a[q]=Yt)):typeof A!="function"&&rr(n,q,A,s)}}}}finally{}return h}function Cf(n,e,t=[],r=[],i=[],s,a=!1,l=!1){Ym(i,t,r,c=>{var h=void 0,f={},m=n.nodeName===Ug,_=!1;if(_g(()=>{var w=e(...c.map(p)),D=Dw(n,h,w,s,a,l);if(_&&m){var T=n;"defaultValue"in w&&Sf(T,w.defaultValue),"value"in w&&wc(T,w.value)}for(let U of Object.getOwnPropertySymbols(f))w[U]||In(f[U]);for(let U of Object.getOwnPropertySymbols(w)){var L=w[U];U.description===nE&&(!h||L!==h[U])&&(f[U]&&In(f[U]),f[U]=Fn(()=>Tw(n,()=>L))),D[U]=L}h=D}),m){var I=n;Xc(()=>{var w=h;"defaultValue"in w&&Sf(I,w.defaultValue),wc(I,w.value,!0),Ih(I)})}_=!0})}function $g(n){return n[nc]??(n[nc]={[Lg]:n.nodeName.includes("-"),[Fg]:n.namespaceURI===qm})}var Pf=new Map;function qg(n){var e=n.getAttribute("is")||n.nodeName,t=Pf.get(e);if(t)return t;Pf.set(e,t=new Set);for(var r,i=n,s=Element.prototype;s!==i;){r=qy(i);for(var a in r)r[a].set&&a!=="innerHTML"&&a!=="textContent"&&a!=="innerText"&&t.add(a);i=Mm(i)}return t}function ct(n,e,t=e){var r=new WeakSet;od(n,"input",async i=>{var s=i?n.defaultValue:n.value;if(s=Bu(n)?zu(s):s,t(s),oe!==null&&r.add(oe),await GE(),s!==(s=e())){var a=n.selectionStart,l=n.selectionEnd,c=n.value.length;if(n.value=s??"",l!==null){var h=n.value.length;a===l&&l===c&&h>c?(n.selectionStart=h,n.selectionEnd=h):(n.selectionStart=a,n.selectionEnd=Math.min(l,h))}}}),Zc(e)==null&&n.value&&(t(Bu(n)?zu(n.value):n.value),oe!==null&&r.add(oe)),hd(()=>{var i=e();if(n===document.activeElement){var s=oe;if(r.has(s))return}Bu(n)&&i===zu(n.value)||n.type==="date"&&!i&&!n.value||i!==n.value&&(n.value=i??"")})}function Bl(n,e,t=e){od(n,"change",r=>{var i=r?n.defaultChecked:n.checked;t(i)}),Zc(e)==null&&t(n.checked),hd(()=>{var r=e();n.checked=!!r})}function Bu(n){var e=n.type;return e==="number"||e==="range"}function zu(n){return n===""?null:+n}const Ow={get(n,e){if(!n.exclude.has(e))return n.props[e]},set(n,e){return!1},getOwnPropertyDescriptor(n,e){if(!n.exclude.has(e)&&e in n.props)return{enumerable:!0,configurable:!0,value:n.props[e]}},has(n,e){return n.exclude.has(e)?!1:e in n.props},ownKeys(n){return Reflect.ownKeys(n.props).filter(e=>!n.exclude.has(e))}};function Ct(n,e,t){return new Proxy({props:n,exclude:e},Ow)}const Vw={get(n,e){let t=n.props.length;for(;t--;){let r=n.props[t];if(va(r)&&(r=r()),typeof r=="object"&&r!==null&&e in r)return r[e]}},set(n,e,t){let r=n.props.length;for(;r--;){let i=n.props[r];va(i)&&(i=i());const s=$s(i,e);if(s&&s.set)return s.set(t),!0}return!1},getOwnPropertyDescriptor(n,e){let t=n.props.length;for(;t--;){let r=n.props[t];if(va(r)&&(r=r()),typeof r=="object"&&r!==null&&e in r){const i=$s(r,e);return i&&!i.configurable&&(i.configurable=!0),i}}},has(n,e){if(e===Io||e===Gy)return!1;for(let t of n.props)if(va(t)&&(t=t()),t!=null&&e in t)return!0;return!1},ownKeys(n){const e=[];for(let t of n.props)if(va(t)&&(t=t()),!!t){for(const r in t)e.includes(r)||e.push(r);for(const r of Object.getOwnPropertySymbols(t))e.includes(r)||e.push(r)}return e}};function Nt(...n){return new Proxy({props:n},Vw)}function vi(n,e,t,r){var i=void 0,s=()=>(i??(i=Yc(r)),p(i)),a;a=n[e],a===void 0&&r!==void 0&&(a=s());var l;return l=()=>{var c=n[e];return c===void 0?s():c},l}function Mw(n){Dn===null&&Hm(),mh(()=>{const e=Zc(n);if(typeof e=="function")return e})}const xw="modulepreload",Lw=function(n){return"/"+n},kf={},Fw=function(e,t,r){let i=Promise.resolve();if(t&&t.length>0){let a=function(h){return Promise.all(h.map(f=>Promise.resolve(f).then(m=>({status:"fulfilled",value:m}),m=>({status:"rejected",reason:m}))))};document.getElementsByTagName("link");const l=document.querySelector("meta[property=csp-nonce]"),c=(l==null?void 0:l.nonce)||(l==null?void 0:l.getAttribute("nonce"));i=a(t.map(h=>{if(h=Lw(h),h in kf)return;kf[h]=!0;const f=h.endsWith(".css"),m=f?'[rel="stylesheet"]':"";if(document.querySelector(`link[href="${h}"]${m}`))return;const _=document.createElement("link");if(_.rel=f?"stylesheet":xw,f||(_.as="script"),_.crossOrigin="",_.href=h,c&&_.setAttribute("nonce",c),document.head.appendChild(_),f)return new Promise((I,w)=>{_.addEventListener("load",I),_.addEventListener("error",()=>w(new Error(`Unable to preload CSS for ${h}`)))})}))}function s(a){const l=new Event("vite:preloadError",{cancelable:!0});if(l.payload=a,window.dispatchEvent(l),!l.defaultPrevented)throw a}return i.then(a=>{for(const l of a||[])l.status==="rejected"&&s(l.reason);return e().catch(s)})};function Uw(n={}){const{immediate:e=!1,onNeedRefresh:t,onOfflineReady:r,onRegistered:i,onRegisteredSW:s,onRegisterError:a}=n;let l,c;const h=async(m=!0)=>{await c};async function f(){if("serviceWorker"in navigator){if(l=await Fw(async()=>{const{Workbox:m}=await import("./workbox-window.prod.es5-BBnX5xw4.js");return{Workbox:m}},[]).then(({Workbox:m})=>new m("/sw.js",{scope:"/",type:"classic"})).catch(m=>{a==null||a(m)}),!l)return;l.addEventListener("activated",m=>{(m.isUpdate||m.isExternal)&&window.location.reload()}),l.addEventListener("installed",m=>{m.isUpdate||r==null||r()}),l.register({immediate:e}).then(m=>{s?s("/sw.js",m):i==null||i(m)}).catch(m=>{a==null||a(m)})}}return c=f(),h}const $w="5";var Dm;typeof window<"u"&&((Dm=window.__svelte??(window.__svelte={})).v??(Dm.v=new Set)).add($w);/**
 * @file
 * @license @lucide/svelte v1.69.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Cs={xmlns:"http://www.w3.org/2000/svg",width:24,height:24,viewBox:"0 0 24 24",fill:"none",stroke:"currentColor","stroke-width":2,"stroke-linecap":"round","stroke-linejoin":"round"};/**
 * @file
 * @license @lucide/svelte v1.69.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Ah=(...n)=>n.filter((e,t,r)=>!!e&&e.trim()!==""&&r.indexOf(e)===t).join(" ").trim();/**
 * @file
 * @license @lucide/svelte v1.69.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */function ju(n){return n!=null}function qw(n,e={}){var _,I;const t=e.attributeNames??{},r=w=>t[w]??w,i=n.size??n.width??Cs.width,s=n.size??n.height??Cs.height,a=((_=n.aliases)==null?void 0:_.filter(w=>typeof w=="string"&&w.trim()!=="").map(w=>`lucide-${w}`))??[],l=[...n.name?[`lucide-${n.name}`]:[],...a],c=((I=e.className)==null?void 0:I.split(" ").filter(Boolean))??[],h=e.includeDefaultClasses===!1?Ah(...c):Ah("lucide",...l,...c),f=e.absoluteStrokeWidth?Number(e.strokeWidth??Cs["stroke-width"])*Number(n.size??n.width??Cs.width)/Number(e.size??e.width??Cs.width):e.strokeWidth??Cs["stroke-width"];return["svg",{...Object.entries(Cs).reduce((w,[D,T])=>(w[r(D)]=T,w),{}),..."color"in e&&e.color&&{[r("stroke")]:e.color},..."size"in e&&ju(e.size)&&{[r("width")]:e.size,[r("height")]:e.size},..."width"in e&&ju(e.width)&&{[r("width")]:e.width},..."height"in e&&ju(e.height)&&{[r("height")]:e.height},[r("stroke-width")]:f,...h&&{[r("class")]:h},[r("viewBox")]:`0 0 ${i} ${s}`,...e.hasA11yProp===!1?{[r("aria-hidden")]:"true"}:{},..."attributes"in e&&e.attributes},n.node.map(w=>{const[D,T,L]=w,U=e.nonScalingStroke?{[r("vector-effect")]:"non-scaling-stroke",...T}:T;return L?[D,U,L]:[D,U]})]}/**
 * @file
 * @license @lucide/svelte v1.69.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Bw=n=>{for(const e in n)if(e.startsWith("aria-")||e==="role"||e==="title")return!0;return!1};/**
 * @file
 * @license @lucide/svelte v1.69.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const zw=Symbol("lucide-context"),jw=()=>EE(zw);var Hw=new Set(["$$slots","$$events","$$legacy","color","size","width","height","strokeWidth","absoluteStrokeWidth","nonScalingStroke","iconNode","icon","class","children"]),Ww=rw("<svg><!><!></svg>");function Dt(n,e){rd(e,!0);const t=jw()??{},r=vi(e,"color",19,()=>t.color??"currentColor"),i=vi(e,"size",19,()=>t.size??24),s=vi(e,"width",19,i),a=vi(e,"height",19,i),l=vi(e,"strokeWidth",19,()=>t.strokeWidth??2),c=vi(e,"absoluteStrokeWidth",19,()=>t.absoluteStrokeWidth??!1),h=vi(e,"nonScalingStroke",19,()=>t.nonScalingStroke??!1),f=vi(e,"iconNode",19,()=>[]),m=vi(e,"icon",19,()=>({node:f(),aliases:[],size:24})),_=Ct(e,Hw),I=Hn(()=>!!e.children||Bw(_)),w=Hn(()=>qw(m(),{color:r(),width:s(),height:a(),strokeWidth:l(),absoluteStrokeWidth:c(),nonScalingStroke:h(),className:Ah("lucide-icon",t.class),hasA11yProp:p(I),attributes:_})),D=Hn(()=>pf(p(w),3)),T=Hn(()=>p(D)[1]),L=Hn(()=>Hy(p(D)[2],()=>[],!0)),U=Hn(()=>({...p(T),class:[...p(T).class.split(" "),e.class]}));var q=Ww();Cf(q,()=>({...p(U)}));var ee=R(q);ji(ee,17,()=>p(L),mw,(W,A)=>{var v=Hn(()=>pf(p(A),2));let E=()=>p(v)[0],S=()=>p(v)[1];var C=Og(),P=nr(C);Ew(P,E,!0,(b,Vt)=>{Cf(b,()=>({...S()}))}),H(W,C)});var ge=y(ee);yw(ge,()=>e.children??ed),H(n,q),id()}const Bg={name:"arrow-down-left",size:24,node:[["path",{d:"M17 7 7 17"}],["path",{d:"M17 17H7V7"}]]};Bg.node;var Gw=new Set(["$$slots","$$events","$$legacy"]);function zl(n,e){let t=Ct(e,Gw);Dt(n,Nt(()=>t,{get icon(){return Bg}}))}const zg={name:"arrow-left",size:24,node:[["path",{d:"m12 19-7-7 7-7"}],["path",{d:"M19 12H5"}]]};zg.node;var Kw=new Set(["$$slots","$$events","$$legacy"]);function Nf(n,e){let t=Ct(e,Kw);Dt(n,Nt(()=>t,{get icon(){return zg}}))}const jg={name:"arrow-right",size:24,node:[["path",{d:"M5 12h14"}],["path",{d:"m12 5 7 7-7 7"}]]};jg.node;var Qw=new Set(["$$slots","$$events","$$legacy"]);function jl(n,e){let t=Ct(e,Qw);Dt(n,Nt(()=>t,{get icon(){return jg}}))}const Hg={name:"boxes",size:24,node:[["path",{d:"M2.97 12.92A2 2 0 0 0 2 14.63v3.24a2 2 0 0 0 .97 1.71l3 1.8a2 2 0 0 0 2.06 0L12 19v-5.5l-5-3-4.03 2.42Z"}],["path",{d:"m7 16.5-4.74-2.85"}],["path",{d:"m7 16.5 5-3"}],["path",{d:"M7 16.5v5.17"}],["path",{d:"M12 13.5V19l3.97 2.38a2 2 0 0 0 2.06 0l3-1.8a2 2 0 0 0 .97-1.71v-3.24a2 2 0 0 0-.97-1.71L17 10.5l-5 3Z"}],["path",{d:"m17 16.5-5-3"}],["path",{d:"m17 16.5 4.74-2.85"}],["path",{d:"M17 16.5v5.17"}],["path",{d:"M7.97 4.42A2 2 0 0 0 7 6.13v4.37l5 3 5-3V6.13a2 2 0 0 0-.97-1.71l-3-1.8a2 2 0 0 0-2.06 0l-3 1.8Z"}],["path",{d:"M12 8 7.26 5.15"}],["path",{d:"m12 8 4.74-2.85"}],["path",{d:"M12 13.5V8"}]]};Hg.node;var Yw=new Set(["$$slots","$$events","$$legacy"]);function po(n,e){let t=Ct(e,Yw);Dt(n,Nt(()=>t,{get icon(){return Hg}}))}const Wg={name:"check",size:24,node:[["path",{d:"M20 6 9 17l-5-5"}]]};Wg.node;var Jw=new Set(["$$slots","$$events","$$legacy"]);function Ta(n,e){let t=Ct(e,Jw);Dt(n,Nt(()=>t,{get icon(){return Wg}}))}const Gg={name:"chevron-down",size:24,node:[["path",{d:"m6 9 6 6 6-6"}]]};Gg.node;var Xw=new Set(["$$slots","$$events","$$legacy"]);function Hu(n,e){let t=Ct(e,Xw);Dt(n,Nt(()=>t,{get icon(){return Gg}}))}const Kg={name:"circle-exclamation-point",size:24,node:[["circle",{cx:"12",cy:"12",r:"10"}],["line",{x1:"12",x2:"12",y1:"8",y2:"12"}],["line",{x1:"12",x2:"12.01",y1:"16",y2:"16"}]],aliases:["alert-circle","circle-alert"]};Kg.node;var Zw=new Set(["$$slots","$$events","$$legacy"]);function Wu(n,e){let t=Ct(e,Zw);Dt(n,Nt(()=>t,{get icon(){return Kg}}))}const Qg={name:"clipboard-list",size:24,node:[["rect",{width:"8",height:"4",x:"8",y:"2",rx:"1",ry:"1"}],["path",{d:"M16 4h2a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2V6a2 2 0 0 1 2-2h2"}],["path",{d:"M12 11h4"}],["path",{d:"M12 16h4"}],["path",{d:"M8 11h.01"}],["path",{d:"M8 16h.01"}]]};Qg.node;var eT=new Set(["$$slots","$$events","$$legacy"]);function Df(n,e){let t=Ct(e,eT);Dt(n,Nt(()=>t,{get icon(){return Qg}}))}const Yg={name:"lock-keyhole",size:24,node:[["circle",{cx:"12",cy:"16",r:"1"}],["rect",{x:"3",y:"10",width:"18",height:"12",rx:"2"}],["path",{d:"M7 10V7a5 5 0 0 1 10 0v3"}]]};Yg.node;var tT=new Set(["$$slots","$$events","$$legacy"]);function Gu(n,e){let t=Ct(e,tT);Dt(n,Nt(()=>t,{get icon(){return Yg}}))}const Jg={name:"log-out",size:24,node:[["path",{d:"m16 17 5-5-5-5"}],["path",{d:"M21 12H9"}],["path",{d:"M9 21H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h4"}]]};Jg.node;var nT=new Set(["$$slots","$$events","$$legacy"]);function Ku(n,e){let t=Ct(e,nT);Dt(n,Nt(()=>t,{get icon(){return Jg}}))}const Xg={name:"minus",size:24,node:[["path",{d:"M5 12h14"}]]};Xg.node;var rT=new Set(["$$slots","$$events","$$legacy"]);function Of(n,e){let t=Ct(e,rT);Dt(n,Nt(()=>t,{get icon(){return Xg}}))}const Zg={name:"package-plus",size:24,node:[["path",{d:"M12 22V12"}],["path",{d:"M16 17h6"}],["path",{d:"M19 14v6"}],["path",{d:"M21 10.535V8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.729l7 4a2 2 0 0 0 2 .001l1.675-.955"}],["path",{d:"M3.29 7 12 12l8.71-5"}],["path",{d:"m7.5 4.27 8.997 5.148"}]]};Zg.node;var iT=new Set(["$$slots","$$events","$$legacy"]);function Hl(n,e){let t=Ct(e,iT);Dt(n,Nt(()=>t,{get icon(){return Zg}}))}const e_={name:"plus",size:24,node:[["path",{d:"M5 12h14"}],["path",{d:"M12 5v14"}]]};e_.node;var sT=new Set(["$$slots","$$events","$$legacy"]);function Ia(n,e){let t=Ct(e,sT);Dt(n,Nt(()=>t,{get icon(){return e_}}))}const t_={name:"search",size:24,node:[["path",{d:"m21 21-4.34-4.34"}],["circle",{cx:"11",cy:"11",r:"8"}]]};t_.node;var oT=new Set(["$$slots","$$events","$$legacy"]);function Wl(n,e){let t=Ct(e,oT);Dt(n,Nt(()=>t,{get icon(){return t_}}))}const n_={name:"settings-2",size:24,node:[["path",{d:"M14 17H5"}],["path",{d:"M19 7h-9"}],["circle",{cx:"17",cy:"17",r:"3"}],["circle",{cx:"7",cy:"7",r:"3"}]]};n_.node;var aT=new Set(["$$slots","$$events","$$legacy"]);function Gl(n,e){let t=Ct(e,aT);Dt(n,Nt(()=>t,{get icon(){return n_}}))}const r_={name:"shield-check",size:24,node:[["path",{d:"M20 13c0 5-3.5 7.5-7.66 8.95a1 1 0 0 1-.67-.01C7.5 20.5 4 18 4 13V6a1 1 0 0 1 1-1c2 0 4.5-1.2 6.24-2.72a1.17 1.17 0 0 1 1.52 0C14.51 3.81 17 5 19 5a1 1 0 0 1 1 1z"}],["path",{d:"m9 12 2 2 4-4"}]]};r_.node;var lT=new Set(["$$slots","$$events","$$legacy"]);function cT(n,e){let t=Ct(e,lT);Dt(n,Nt(()=>t,{get icon(){return r_}}))}const i_={name:"trash",size:24,node:[["path",{d:"M10 11v6"}],["path",{d:"M14 11v6"}],["path",{d:"M19 6v14a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2V6"}],["path",{d:"M3 6h18"}],["path",{d:"M8 6V4a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v2"}]],aliases:["trash-2"]};i_.node;var uT=new Set(["$$slots","$$events","$$legacy"]);function Vf(n,e){let t=Ct(e,uT);Dt(n,Nt(()=>t,{get icon(){return i_}}))}const s_={name:"upload",size:24,node:[["path",{d:"M12 3v12"}],["path",{d:"m17 8-5-5-5 5"}],["path",{d:"M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"}]]};s_.node;var hT=new Set(["$$slots","$$events","$$legacy"]);function dT(n,e){let t=Ct(e,hT);Dt(n,Nt(()=>t,{get icon(){return s_}}))}const o_={name:"user-round",size:24,node:[["circle",{cx:"12",cy:"8",r:"5"}],["path",{d:"M20 21a8 8 0 0 0-16 0"}]],aliases:["user-2"]};o_.node;var fT=new Set(["$$slots","$$events","$$legacy"]);function pT(n,e){let t=Ct(e,fT);Dt(n,Nt(()=>t,{get icon(){return o_}}))}const a_={name:"users",size:24,node:[["path",{d:"M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2"}],["path",{d:"M16 3.128a4 4 0 0 1 0 7.744"}],["path",{d:"M22 21v-2a4 4 0 0 0-3-3.87"}],["circle",{cx:"9",cy:"7",r:"4"}]]};a_.node;var mT=new Set(["$$slots","$$events","$$legacy"]);function gT(n,e){let t=Ct(e,mT);Dt(n,Nt(()=>t,{get icon(){return a_}}))}const l_={name:"warehouse",size:24,node:[["path",{d:"M18 21V10a1 1 0 0 0-1-1H7a1 1 0 0 0-1 1v11"}],["path",{d:"M22 19a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V8a2 2 0 0 1 1.132-1.803l7.95-3.974a2 2 0 0 1 1.837 0l7.948 3.974A2 2 0 0 1 22 8z"}],["path",{d:"M6 13h12"}],["path",{d:"M6 17h12"}]]};l_.node;var _T=new Set(["$$slots","$$events","$$legacy"]);function mo(n,e){let t=Ct(e,_T);Dt(n,Nt(()=>t,{get icon(){return l_}}))}const c_={name:"wrench",size:24,node:[["path",{d:"M14.7 6.3a1 1 0 0 0 0 1.4l1.6 1.6a1 1 0 0 0 1.4 0l3.106-3.105c.32-.322.863-.22.983.218a6 6 0 0 1-8.259 7.057l-7.91 7.91a1 1 0 0 1-2.999-3l7.91-7.91a6 6 0 0 1 7.057-8.259c.438.12.54.662.219.984z"}]]};c_.node;var vT=new Set(["$$slots","$$events","$$legacy"]);function yT(n,e){let t=Ct(e,vT);Dt(n,Nt(()=>t,{get icon(){return c_}}))}const u_={name:"x",size:24,node:[["path",{d:"M18 6 6 18"}],["path",{d:"m6 6 12 12"}]]};u_.node;var ET=new Set(["$$slots","$$events","$$legacy"]);function Ps(n,e){let t=Ct(e,ET);Dt(n,Nt(()=>t,{get icon(){return u_}}))}const wT=()=>{};var Mf={};/**
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
 */const h_=function(n){const e=[];let t=0;for(let r=0;r<n.length;r++){let i=n.charCodeAt(r);i<128?e[t++]=i:i<2048?(e[t++]=i>>6|192,e[t++]=i&63|128):(i&64512)===55296&&r+1<n.length&&(n.charCodeAt(r+1)&64512)===56320?(i=65536+((i&1023)<<10)+(n.charCodeAt(++r)&1023),e[t++]=i>>18|240,e[t++]=i>>12&63|128,e[t++]=i>>6&63|128,e[t++]=i&63|128):(e[t++]=i>>12|224,e[t++]=i>>6&63|128,e[t++]=i&63|128)}return e},TT=function(n){const e=[];let t=0,r=0;for(;t<n.length;){const i=n[t++];if(i<128)e[r++]=String.fromCharCode(i);else if(i>191&&i<224){const s=n[t++];e[r++]=String.fromCharCode((i&31)<<6|s&63)}else if(i>239&&i<365){const s=n[t++],a=n[t++],l=n[t++],c=((i&7)<<18|(s&63)<<12|(a&63)<<6|l&63)-65536;e[r++]=String.fromCharCode(55296+(c>>10)),e[r++]=String.fromCharCode(56320+(c&1023))}else{const s=n[t++],a=n[t++];e[r++]=String.fromCharCode((i&15)<<12|(s&63)<<6|a&63)}}return e.join("")},md={byteToCharMap_:null,charToByteMap_:null,byteToCharMapWebSafe_:null,charToByteMapWebSafe_:null,ENCODED_VALS_BASE:"ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",get ENCODED_VALS(){return this.ENCODED_VALS_BASE+"+/="},get ENCODED_VALS_WEBSAFE(){return this.ENCODED_VALS_BASE+"-_."},HAS_NATIVE_SUPPORT:typeof atob=="function",encodeByteArray(n,e){if(!Array.isArray(n))throw Error("encodeByteArray takes an array as a parameter");this.init_();const t=e?this.byteToCharMapWebSafe_:this.byteToCharMap_,r=[];for(let i=0;i<n.length;i+=3){const s=n[i],a=i+1<n.length,l=a?n[i+1]:0,c=i+2<n.length,h=c?n[i+2]:0,f=s>>2,m=(s&3)<<4|l>>4;let _=(l&15)<<2|h>>6,I=h&63;c||(I=64,a||(_=64)),r.push(t[f],t[m],t[_],t[I])}return r.join("")},encodeString(n,e){return this.HAS_NATIVE_SUPPORT&&!e?btoa(n):this.encodeByteArray(h_(n),e)},decodeString(n,e){return this.HAS_NATIVE_SUPPORT&&!e?atob(n):TT(this.decodeStringToByteArray(n,e))},decodeStringToByteArray(n,e){this.init_();const t=e?this.charToByteMapWebSafe_:this.charToByteMap_,r=[];for(let i=0;i<n.length;){const s=t[n.charAt(i++)],l=i<n.length?t[n.charAt(i)]:0;++i;const h=i<n.length?t[n.charAt(i)]:64;++i;const m=i<n.length?t[n.charAt(i)]:64;if(++i,s==null||l==null||h==null||m==null)throw new IT;const _=s<<2|l>>4;if(r.push(_),h!==64){const I=l<<4&240|h>>2;if(r.push(I),m!==64){const w=h<<6&192|m;r.push(w)}}}return r},init_(){if(!this.byteToCharMap_){this.byteToCharMap_={},this.charToByteMap_={},this.byteToCharMapWebSafe_={},this.charToByteMapWebSafe_={};for(let n=0;n<this.ENCODED_VALS.length;n++)this.byteToCharMap_[n]=this.ENCODED_VALS.charAt(n),this.charToByteMap_[this.byteToCharMap_[n]]=n,this.byteToCharMapWebSafe_[n]=this.ENCODED_VALS_WEBSAFE.charAt(n),this.charToByteMapWebSafe_[this.byteToCharMapWebSafe_[n]]=n,n>=this.ENCODED_VALS_BASE.length&&(this.charToByteMap_[this.ENCODED_VALS_WEBSAFE.charAt(n)]=n,this.charToByteMapWebSafe_[this.ENCODED_VALS.charAt(n)]=n)}}};class IT extends Error{constructor(){super(...arguments),this.name="DecodeBase64StringError"}}const AT=function(n){const e=h_(n);return md.encodeByteArray(e,!0)},d_=function(n){return AT(n).replace(/\./g,"")},f_=function(n){try{return md.decodeString(n,!0)}catch(e){console.error("base64Decode failed: ",e)}return null};/**
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
 */function bT(){if(typeof self<"u")return self;if(typeof window<"u")return window;if(typeof global<"u")return global;throw new Error("Unable to locate global object.")}/**
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
 */const ST=()=>bT().__FIREBASE_DEFAULTS__,RT=()=>{if(typeof process>"u"||typeof Mf>"u")return;const n=Mf.__FIREBASE_DEFAULTS__;if(n)return JSON.parse(n)},CT=()=>{if(typeof document>"u")return;let n;try{n=document.cookie.match(/__FIREBASE_DEFAULTS__=([^;]+)/)}catch{return}const e=n&&f_(n[1]);return e&&JSON.parse(e)},eu=()=>{try{return wT()||ST()||RT()||CT()}catch(n){console.info(`Unable to get __FIREBASE_DEFAULTS__ due to: ${n}`);return}},PT=n=>{var e,t;return(t=(e=eu())===null||e===void 0?void 0:e.emulatorHosts)===null||t===void 0?void 0:t[n]},p_=()=>{var n;return(n=eu())===null||n===void 0?void 0:n.config},m_=n=>{var e;return(e=eu())===null||e===void 0?void 0:e[`_${n}`]};/**
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
 */class bh{constructor(){this.reject=()=>{},this.resolve=()=>{},this.promise=new Promise((e,t)=>{this.resolve=e,this.reject=t})}wrapCallback(e){return(t,r)=>{t?this.reject(t):this.resolve(r),typeof e=="function"&&(this.promise.catch(()=>{}),e.length===1?e(t):e(t,r))}}}/**
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
 */function na(n){try{return(n.startsWith("http://")||n.startsWith("https://")?new URL(n).hostname:n).endsWith(".cloudworkstations.dev")}catch{return!1}}async function g_(n){return(await fetch(n,{credentials:"include"})).ok}const $a={};function kT(){const n={prod:[],emulator:[]};for(const e of Object.keys($a))$a[e]?n.emulator.push(e):n.prod.push(e);return n}function NT(n){let e=document.getElementById(n),t=!1;return e||(e=document.createElement("div"),e.setAttribute("id",n),t=!0),{created:t,element:e}}let xf=!1;function DT(n,e){if(typeof window>"u"||typeof document>"u"||!na(window.location.host)||$a[n]===e||$a[n]||xf)return;$a[n]=e;function t(_){return`__firebase__banner__${_}`}const r="__firebase__banner",s=kT().prod.length>0;function a(){const _=document.getElementById(r);_&&_.remove()}function l(_){_.style.display="flex",_.style.background="#7faaf0",_.style.position="fixed",_.style.bottom="5px",_.style.left="5px",_.style.padding=".5em",_.style.borderRadius="5px",_.style.alignItems="center"}function c(_,I){_.setAttribute("width","24"),_.setAttribute("id",I),_.setAttribute("height","24"),_.setAttribute("viewBox","0 0 24 24"),_.setAttribute("fill","none"),_.style.marginLeft="-6px"}function h(){const _=document.createElement("span");return _.style.cursor="pointer",_.style.marginLeft="16px",_.style.fontSize="24px",_.innerHTML=" &times;",_.onclick=()=>{xf=!0,a()},_}function f(_,I){_.setAttribute("id",I),_.innerText="Learn more",_.href="https://firebase.google.com/docs/studio/preview-apps#preview-backend",_.setAttribute("target","__blank"),_.style.paddingLeft="5px",_.style.textDecoration="underline"}function m(){const _=NT(r),I=t("text"),w=document.getElementById(I)||document.createElement("span"),D=t("learnmore"),T=document.getElementById(D)||document.createElement("a"),L=t("preprendIcon"),U=document.getElementById(L)||document.createElementNS("http://www.w3.org/2000/svg","svg");if(_.created){const q=_.element;l(q),f(T,D);const ee=h();c(U,L),q.append(U,w,T,ee),document.body.appendChild(q)}s?(w.innerText="Preview backend disconnected.",U.innerHTML=`<g clip-path="url(#clip0_6013_33858)">
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
</defs>`,w.innerText="Preview backend running in this workspace."),w.setAttribute("id",I)}document.readyState==="loading"?window.addEventListener("DOMContentLoaded",m):m()}/**
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
 */function Vn(){return typeof navigator<"u"&&typeof navigator.userAgent=="string"?navigator.userAgent:""}function OT(){return typeof window<"u"&&!!(window.cordova||window.phonegap||window.PhoneGap)&&/ios|iphone|ipod|ipad|android|blackberry|iemobile/i.test(Vn())}function VT(){var n;const e=(n=eu())===null||n===void 0?void 0:n.forceEnvironment;if(e==="node")return!0;if(e==="browser")return!1;try{return Object.prototype.toString.call(global.process)==="[object process]"}catch{return!1}}function MT(){return typeof navigator<"u"&&navigator.userAgent==="Cloudflare-Workers"}function xT(){const n=typeof chrome=="object"?chrome.runtime:typeof browser=="object"?browser.runtime:void 0;return typeof n=="object"&&n.id!==void 0}function LT(){return typeof navigator=="object"&&navigator.product==="ReactNative"}function FT(){const n=Vn();return n.indexOf("MSIE ")>=0||n.indexOf("Trident/")>=0}function UT(){return!VT()&&!!navigator.userAgent&&navigator.userAgent.includes("Safari")&&!navigator.userAgent.includes("Chrome")}function __(){try{return typeof indexedDB=="object"}catch{return!1}}function $T(){return new Promise((n,e)=>{try{let t=!0;const r="validate-browser-context-for-indexeddb-analytics-module",i=self.indexedDB.open(r);i.onsuccess=()=>{i.result.close(),t||self.indexedDB.deleteDatabase(r),n(!0)},i.onupgradeneeded=()=>{t=!1},i.onerror=()=>{var s;e(((s=i.error)===null||s===void 0?void 0:s.message)||"")}}catch(t){e(t)}})}/**
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
 */const qT="FirebaseError";class Di extends Error{constructor(e,t,r){super(t),this.code=e,this.customData=r,this.name=qT,Object.setPrototypeOf(this,Di.prototype),Error.captureStackTrace&&Error.captureStackTrace(this,ra.prototype.create)}}class ra{constructor(e,t,r){this.service=e,this.serviceName=t,this.errors=r}create(e,...t){const r=t[0]||{},i=`${this.service}/${e}`,s=this.errors[e],a=s?BT(s,r):"Error",l=`${this.serviceName}: ${a} (${i}).`;return new Di(i,l,r)}}function BT(n,e){return n.replace(zT,(t,r)=>{const i=e[r];return i!=null?String(i):`<${r}?>`})}const zT=/\{\$([^}]+)}/g;function jT(n){for(const e in n)if(Object.prototype.hasOwnProperty.call(n,e))return!1;return!0}function Gs(n,e){if(n===e)return!0;const t=Object.keys(n),r=Object.keys(e);for(const i of t){if(!r.includes(i))return!1;const s=n[i],a=e[i];if(Lf(s)&&Lf(a)){if(!Gs(s,a))return!1}else if(s!==a)return!1}for(const i of r)if(!t.includes(i))return!1;return!0}function Lf(n){return n!==null&&typeof n=="object"}/**
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
 */function _l(n){const e=[];for(const[t,r]of Object.entries(n))Array.isArray(r)?r.forEach(i=>{e.push(encodeURIComponent(t)+"="+encodeURIComponent(i))}):e.push(encodeURIComponent(t)+"="+encodeURIComponent(r));return e.length?"&"+e.join("&"):""}function ka(n){const e={};return n.replace(/^\?/,"").split("&").forEach(r=>{if(r){const[i,s]=r.split("=");e[decodeURIComponent(i)]=decodeURIComponent(s)}}),e}function Na(n){const e=n.indexOf("?");if(!e)return"";const t=n.indexOf("#",e);return n.substring(e,t>0?t:void 0)}function HT(n,e){const t=new WT(n,e);return t.subscribe.bind(t)}class WT{constructor(e,t){this.observers=[],this.unsubscribes=[],this.observerCount=0,this.task=Promise.resolve(),this.finalized=!1,this.onNoObservers=t,this.task.then(()=>{e(this)}).catch(r=>{this.error(r)})}next(e){this.forEachObserver(t=>{t.next(e)})}error(e){this.forEachObserver(t=>{t.error(e)}),this.close(e)}complete(){this.forEachObserver(e=>{e.complete()}),this.close()}subscribe(e,t,r){let i;if(e===void 0&&t===void 0&&r===void 0)throw new Error("Missing Observer.");GT(e,["next","error","complete"])?i=e:i={next:e,error:t,complete:r},i.next===void 0&&(i.next=Qu),i.error===void 0&&(i.error=Qu),i.complete===void 0&&(i.complete=Qu);const s=this.unsubscribeOne.bind(this,this.observers.length);return this.finalized&&this.task.then(()=>{try{this.finalError?i.error(this.finalError):i.complete()}catch{}}),this.observers.push(i),s}unsubscribeOne(e){this.observers===void 0||this.observers[e]===void 0||(delete this.observers[e],this.observerCount-=1,this.observerCount===0&&this.onNoObservers!==void 0&&this.onNoObservers(this))}forEachObserver(e){if(!this.finalized)for(let t=0;t<this.observers.length;t++)this.sendOne(t,e)}sendOne(e,t){this.task.then(()=>{if(this.observers!==void 0&&this.observers[e]!==void 0)try{t(this.observers[e])}catch(r){typeof console<"u"&&console.error&&console.error(r)}})}close(e){this.finalized||(this.finalized=!0,e!==void 0&&(this.finalError=e),this.task.then(()=>{this.observers=void 0,this.onNoObservers=void 0}))}}function GT(n,e){if(typeof n!="object"||n===null)return!1;for(const t of e)if(t in n&&typeof n[t]=="function")return!0;return!1}function Qu(){}/**
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
 */function Bt(n){return n&&n._delegate?n._delegate:n}class Ci{constructor(e,t,r){this.name=e,this.instanceFactory=t,this.type=r,this.multipleInstances=!1,this.serviceProps={},this.instantiationMode="LAZY",this.onInstanceCreated=null}setInstantiationMode(e){return this.instantiationMode=e,this}setMultipleInstances(e){return this.multipleInstances=e,this}setServiceProps(e){return this.serviceProps=e,this}setInstanceCreatedCallback(e){return this.onInstanceCreated=e,this}}/**
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
 */const ks="[DEFAULT]";/**
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
 */class KT{constructor(e,t){this.name=e,this.container=t,this.component=null,this.instances=new Map,this.instancesDeferred=new Map,this.instancesOptions=new Map,this.onInitCallbacks=new Map}get(e){const t=this.normalizeInstanceIdentifier(e);if(!this.instancesDeferred.has(t)){const r=new bh;if(this.instancesDeferred.set(t,r),this.isInitialized(t)||this.shouldAutoInitialize())try{const i=this.getOrInitializeService({instanceIdentifier:t});i&&r.resolve(i)}catch{}}return this.instancesDeferred.get(t).promise}getImmediate(e){var t;const r=this.normalizeInstanceIdentifier(e==null?void 0:e.identifier),i=(t=e==null?void 0:e.optional)!==null&&t!==void 0?t:!1;if(this.isInitialized(r)||this.shouldAutoInitialize())try{return this.getOrInitializeService({instanceIdentifier:r})}catch(s){if(i)return null;throw s}else{if(i)return null;throw Error(`Service ${this.name} is not available`)}}getComponent(){return this.component}setComponent(e){if(e.name!==this.name)throw Error(`Mismatching Component ${e.name} for Provider ${this.name}.`);if(this.component)throw Error(`Component for ${this.name} has already been provided`);if(this.component=e,!!this.shouldAutoInitialize()){if(YT(e))try{this.getOrInitializeService({instanceIdentifier:ks})}catch{}for(const[t,r]of this.instancesDeferred.entries()){const i=this.normalizeInstanceIdentifier(t);try{const s=this.getOrInitializeService({instanceIdentifier:i});r.resolve(s)}catch{}}}}clearInstance(e=ks){this.instancesDeferred.delete(e),this.instancesOptions.delete(e),this.instances.delete(e)}async delete(){const e=Array.from(this.instances.values());await Promise.all([...e.filter(t=>"INTERNAL"in t).map(t=>t.INTERNAL.delete()),...e.filter(t=>"_delete"in t).map(t=>t._delete())])}isComponentSet(){return this.component!=null}isInitialized(e=ks){return this.instances.has(e)}getOptions(e=ks){return this.instancesOptions.get(e)||{}}initialize(e={}){const{options:t={}}=e,r=this.normalizeInstanceIdentifier(e.instanceIdentifier);if(this.isInitialized(r))throw Error(`${this.name}(${r}) has already been initialized`);if(!this.isComponentSet())throw Error(`Component ${this.name} has not been registered yet`);const i=this.getOrInitializeService({instanceIdentifier:r,options:t});for(const[s,a]of this.instancesDeferred.entries()){const l=this.normalizeInstanceIdentifier(s);r===l&&a.resolve(i)}return i}onInit(e,t){var r;const i=this.normalizeInstanceIdentifier(t),s=(r=this.onInitCallbacks.get(i))!==null&&r!==void 0?r:new Set;s.add(e),this.onInitCallbacks.set(i,s);const a=this.instances.get(i);return a&&e(a,i),()=>{s.delete(e)}}invokeOnInitCallbacks(e,t){const r=this.onInitCallbacks.get(t);if(r)for(const i of r)try{i(e,t)}catch{}}getOrInitializeService({instanceIdentifier:e,options:t={}}){let r=this.instances.get(e);if(!r&&this.component&&(r=this.component.instanceFactory(this.container,{instanceIdentifier:QT(e),options:t}),this.instances.set(e,r),this.instancesOptions.set(e,t),this.invokeOnInitCallbacks(r,e),this.component.onInstanceCreated))try{this.component.onInstanceCreated(this.container,e,r)}catch{}return r||null}normalizeInstanceIdentifier(e=ks){return this.component?this.component.multipleInstances?e:ks:e}shouldAutoInitialize(){return!!this.component&&this.component.instantiationMode!=="EXPLICIT"}}function QT(n){return n===ks?void 0:n}function YT(n){return n.instantiationMode==="EAGER"}/**
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
 */class JT{constructor(e){this.name=e,this.providers=new Map}addComponent(e){const t=this.getProvider(e.name);if(t.isComponentSet())throw new Error(`Component ${e.name} has already been registered with ${this.name}`);t.setComponent(e)}addOrOverwriteComponent(e){this.getProvider(e.name).isComponentSet()&&this.providers.delete(e.name),this.addComponent(e)}getProvider(e){if(this.providers.has(e))return this.providers.get(e);const t=new KT(e,this);return this.providers.set(e,t),t}getProviders(){return Array.from(this.providers.values())}}/**
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
 */var Ve;(function(n){n[n.DEBUG=0]="DEBUG",n[n.VERBOSE=1]="VERBOSE",n[n.INFO=2]="INFO",n[n.WARN=3]="WARN",n[n.ERROR=4]="ERROR",n[n.SILENT=5]="SILENT"})(Ve||(Ve={}));const XT={debug:Ve.DEBUG,verbose:Ve.VERBOSE,info:Ve.INFO,warn:Ve.WARN,error:Ve.ERROR,silent:Ve.SILENT},ZT=Ve.INFO,eI={[Ve.DEBUG]:"log",[Ve.VERBOSE]:"log",[Ve.INFO]:"info",[Ve.WARN]:"warn",[Ve.ERROR]:"error"},tI=(n,e,...t)=>{if(e<n.logLevel)return;const r=new Date().toISOString(),i=eI[e];if(i)console[i](`[${r}]  ${n.name}:`,...t);else throw new Error(`Attempted to log a message with an invalid logType (value: ${e})`)};class tu{constructor(e){this.name=e,this._logLevel=ZT,this._logHandler=tI,this._userLogHandler=null}get logLevel(){return this._logLevel}set logLevel(e){if(!(e in Ve))throw new TypeError(`Invalid value "${e}" assigned to \`logLevel\``);this._logLevel=e}setLogLevel(e){this._logLevel=typeof e=="string"?XT[e]:e}get logHandler(){return this._logHandler}set logHandler(e){if(typeof e!="function")throw new TypeError("Value assigned to `logHandler` must be a function");this._logHandler=e}get userLogHandler(){return this._userLogHandler}set userLogHandler(e){this._userLogHandler=e}debug(...e){this._userLogHandler&&this._userLogHandler(this,Ve.DEBUG,...e),this._logHandler(this,Ve.DEBUG,...e)}log(...e){this._userLogHandler&&this._userLogHandler(this,Ve.VERBOSE,...e),this._logHandler(this,Ve.VERBOSE,...e)}info(...e){this._userLogHandler&&this._userLogHandler(this,Ve.INFO,...e),this._logHandler(this,Ve.INFO,...e)}warn(...e){this._userLogHandler&&this._userLogHandler(this,Ve.WARN,...e),this._logHandler(this,Ve.WARN,...e)}error(...e){this._userLogHandler&&this._userLogHandler(this,Ve.ERROR,...e),this._logHandler(this,Ve.ERROR,...e)}}const nI=(n,e)=>e.some(t=>n instanceof t);let Ff,Uf;function rI(){return Ff||(Ff=[IDBDatabase,IDBObjectStore,IDBIndex,IDBCursor,IDBTransaction])}function iI(){return Uf||(Uf=[IDBCursor.prototype.advance,IDBCursor.prototype.continue,IDBCursor.prototype.continuePrimaryKey])}const v_=new WeakMap,Sh=new WeakMap,y_=new WeakMap,Yu=new WeakMap,gd=new WeakMap;function sI(n){const e=new Promise((t,r)=>{const i=()=>{n.removeEventListener("success",s),n.removeEventListener("error",a)},s=()=>{t(es(n.result)),i()},a=()=>{r(n.error),i()};n.addEventListener("success",s),n.addEventListener("error",a)});return e.then(t=>{t instanceof IDBCursor&&v_.set(t,n)}).catch(()=>{}),gd.set(e,n),e}function oI(n){if(Sh.has(n))return;const e=new Promise((t,r)=>{const i=()=>{n.removeEventListener("complete",s),n.removeEventListener("error",a),n.removeEventListener("abort",a)},s=()=>{t(),i()},a=()=>{r(n.error||new DOMException("AbortError","AbortError")),i()};n.addEventListener("complete",s),n.addEventListener("error",a),n.addEventListener("abort",a)});Sh.set(n,e)}let Rh={get(n,e,t){if(n instanceof IDBTransaction){if(e==="done")return Sh.get(n);if(e==="objectStoreNames")return n.objectStoreNames||y_.get(n);if(e==="store")return t.objectStoreNames[1]?void 0:t.objectStore(t.objectStoreNames[0])}return es(n[e])},set(n,e,t){return n[e]=t,!0},has(n,e){return n instanceof IDBTransaction&&(e==="done"||e==="store")?!0:e in n}};function aI(n){Rh=n(Rh)}function lI(n){return n===IDBDatabase.prototype.transaction&&!("objectStoreNames"in IDBTransaction.prototype)?function(e,...t){const r=n.call(Ju(this),e,...t);return y_.set(r,e.sort?e.sort():[e]),es(r)}:iI().includes(n)?function(...e){return n.apply(Ju(this),e),es(v_.get(this))}:function(...e){return es(n.apply(Ju(this),e))}}function cI(n){return typeof n=="function"?lI(n):(n instanceof IDBTransaction&&oI(n),nI(n,rI())?new Proxy(n,Rh):n)}function es(n){if(n instanceof IDBRequest)return sI(n);if(Yu.has(n))return Yu.get(n);const e=cI(n);return e!==n&&(Yu.set(n,e),gd.set(e,n)),e}const Ju=n=>gd.get(n);function uI(n,e,{blocked:t,upgrade:r,blocking:i,terminated:s}={}){const a=indexedDB.open(n,e),l=es(a);return r&&a.addEventListener("upgradeneeded",c=>{r(es(a.result),c.oldVersion,c.newVersion,es(a.transaction),c)}),t&&a.addEventListener("blocked",c=>t(c.oldVersion,c.newVersion,c)),l.then(c=>{s&&c.addEventListener("close",()=>s()),i&&c.addEventListener("versionchange",h=>i(h.oldVersion,h.newVersion,h))}).catch(()=>{}),l}const hI=["get","getKey","getAll","getAllKeys","count"],dI=["put","add","delete","clear"],Xu=new Map;function $f(n,e){if(!(n instanceof IDBDatabase&&!(e in n)&&typeof e=="string"))return;if(Xu.get(e))return Xu.get(e);const t=e.replace(/FromIndex$/,""),r=e!==t,i=dI.includes(t);if(!(t in(r?IDBIndex:IDBObjectStore).prototype)||!(i||hI.includes(t)))return;const s=async function(a,...l){const c=this.transaction(a,i?"readwrite":"readonly");let h=c.store;return r&&(h=h.index(l.shift())),(await Promise.all([h[t](...l),i&&c.done]))[0]};return Xu.set(e,s),s}aI(n=>({...n,get:(e,t,r)=>$f(e,t)||n.get(e,t,r),has:(e,t)=>!!$f(e,t)||n.has(e,t)}));/**
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
 */class fI{constructor(e){this.container=e}getPlatformInfoString(){return this.container.getProviders().map(t=>{if(pI(t)){const r=t.getImmediate();return`${r.library}/${r.version}`}else return null}).filter(t=>t).join(" ")}}function pI(n){const e=n.getComponent();return(e==null?void 0:e.type)==="VERSION"}const Ch="@firebase/app",qf="0.13.2";/**
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
 */const Pi=new tu("@firebase/app"),mI="@firebase/app-compat",gI="@firebase/analytics-compat",_I="@firebase/analytics",vI="@firebase/app-check-compat",yI="@firebase/app-check",EI="@firebase/auth",wI="@firebase/auth-compat",TI="@firebase/database",II="@firebase/data-connect",AI="@firebase/database-compat",bI="@firebase/functions",SI="@firebase/functions-compat",RI="@firebase/installations",CI="@firebase/installations-compat",PI="@firebase/messaging",kI="@firebase/messaging-compat",NI="@firebase/performance",DI="@firebase/performance-compat",OI="@firebase/remote-config",VI="@firebase/remote-config-compat",MI="@firebase/storage",xI="@firebase/storage-compat",LI="@firebase/firestore",FI="@firebase/ai",UI="@firebase/firestore-compat",$I="firebase",qI="11.10.0";/**
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
 */const Ph="[DEFAULT]",BI={[Ch]:"fire-core",[mI]:"fire-core-compat",[_I]:"fire-analytics",[gI]:"fire-analytics-compat",[yI]:"fire-app-check",[vI]:"fire-app-check-compat",[EI]:"fire-auth",[wI]:"fire-auth-compat",[TI]:"fire-rtdb",[II]:"fire-data-connect",[AI]:"fire-rtdb-compat",[bI]:"fire-fn",[SI]:"fire-fn-compat",[RI]:"fire-iid",[CI]:"fire-iid-compat",[PI]:"fire-fcm",[kI]:"fire-fcm-compat",[NI]:"fire-perf",[DI]:"fire-perf-compat",[OI]:"fire-rc",[VI]:"fire-rc-compat",[MI]:"fire-gcs",[xI]:"fire-gcs-compat",[LI]:"fire-fst",[UI]:"fire-fst-compat",[FI]:"fire-vertex","fire-js":"fire-js",[$I]:"fire-js-all"};/**
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
 */const Qa=new Map,zI=new Map,kh=new Map;function Bf(n,e){try{n.container.addComponent(e)}catch(t){Pi.debug(`Component ${e.name} failed to register with FirebaseApp ${n.name}`,t)}}function cs(n){const e=n.name;if(kh.has(e))return Pi.debug(`There were multiple attempts to register component ${e}.`),!1;kh.set(e,n);for(const t of Qa.values())Bf(t,n);for(const t of zI.values())Bf(t,n);return!0}function _d(n,e){const t=n.container.getProvider("heartbeat").getImmediate({optional:!0});return t&&t.triggerHeartbeat(),n.container.getProvider(e)}function yr(n){return n==null?!1:n.settings!==void 0}/**
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
 */const jI={"no-app":"No Firebase App '{$appName}' has been created - call initializeApp() first","bad-app-name":"Illegal App name: '{$appName}'","duplicate-app":"Firebase App named '{$appName}' already exists with different options or config","app-deleted":"Firebase App named '{$appName}' already deleted","server-app-deleted":"Firebase Server App has been deleted","no-options":"Need to provide options, when not being deployed to hosting via source.","invalid-app-argument":"firebase.{$appName}() takes either no argument or a Firebase App instance.","invalid-log-argument":"First argument to `onLog` must be null or a function.","idb-open":"Error thrown when opening IndexedDB. Original error: {$originalErrorMessage}.","idb-get":"Error thrown when reading from IndexedDB. Original error: {$originalErrorMessage}.","idb-set":"Error thrown when writing to IndexedDB. Original error: {$originalErrorMessage}.","idb-delete":"Error thrown when deleting from IndexedDB. Original error: {$originalErrorMessage}.","finalization-registry-not-supported":"FirebaseServerApp deleteOnDeref field defined but the JS runtime does not support FinalizationRegistry.","invalid-server-app-environment":"FirebaseServerApp is not for use in browser environments."},ts=new ra("app","Firebase",jI);/**
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
 */class HI{constructor(e,t,r){this._isDeleted=!1,this._options=Object.assign({},e),this._config=Object.assign({},t),this._name=t.name,this._automaticDataCollectionEnabled=t.automaticDataCollectionEnabled,this._container=r,this.container.addComponent(new Ci("app",()=>this,"PUBLIC"))}get automaticDataCollectionEnabled(){return this.checkDestroyed(),this._automaticDataCollectionEnabled}set automaticDataCollectionEnabled(e){this.checkDestroyed(),this._automaticDataCollectionEnabled=e}get name(){return this.checkDestroyed(),this._name}get options(){return this.checkDestroyed(),this._options}get config(){return this.checkDestroyed(),this._config}get container(){return this._container}get isDeleted(){return this._isDeleted}set isDeleted(e){this._isDeleted=e}checkDestroyed(){if(this.isDeleted)throw ts.create("app-deleted",{appName:this._name})}}/**
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
 */const ia=qI;function vd(n,e={}){let t=n;typeof e!="object"&&(e={name:e});const r=Object.assign({name:Ph,automaticDataCollectionEnabled:!0},e),i=r.name;if(typeof i!="string"||!i)throw ts.create("bad-app-name",{appName:String(i)});if(t||(t=p_()),!t)throw ts.create("no-options");const s=Qa.get(i);if(s){if(Gs(t,s.options)&&Gs(r,s.config))return s;throw ts.create("duplicate-app",{appName:i})}const a=new JT(i);for(const c of kh.values())a.addComponent(c);const l=new HI(t,r,a);return Qa.set(i,l),l}function E_(n=Ph){const e=Qa.get(n);if(!e&&n===Ph&&p_())return vd();if(!e)throw ts.create("no-app",{appName:n});return e}function w_(){return Array.from(Qa.values())}function Ai(n,e,t){var r;let i=(r=BI[n])!==null&&r!==void 0?r:n;t&&(i+=`-${t}`);const s=i.match(/\s|\//),a=e.match(/\s|\//);if(s||a){const l=[`Unable to register library "${i}" with version "${e}":`];s&&l.push(`library name "${i}" contains illegal characters (whitespace or "/")`),s&&a&&l.push("and"),a&&l.push(`version name "${e}" contains illegal characters (whitespace or "/")`),Pi.warn(l.join(" "));return}cs(new Ci(`${i}-version`,()=>({library:i,version:e}),"VERSION"))}/**
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
 */const WI="firebase-heartbeat-database",GI=1,Ya="firebase-heartbeat-store";let Zu=null;function T_(){return Zu||(Zu=uI(WI,GI,{upgrade:(n,e)=>{switch(e){case 0:try{n.createObjectStore(Ya)}catch(t){console.warn(t)}}}}).catch(n=>{throw ts.create("idb-open",{originalErrorMessage:n.message})})),Zu}async function KI(n){try{const t=(await T_()).transaction(Ya),r=await t.objectStore(Ya).get(I_(n));return await t.done,r}catch(e){if(e instanceof Di)Pi.warn(e.message);else{const t=ts.create("idb-get",{originalErrorMessage:e==null?void 0:e.message});Pi.warn(t.message)}}}async function zf(n,e){try{const r=(await T_()).transaction(Ya,"readwrite");await r.objectStore(Ya).put(e,I_(n)),await r.done}catch(t){if(t instanceof Di)Pi.warn(t.message);else{const r=ts.create("idb-set",{originalErrorMessage:t==null?void 0:t.message});Pi.warn(r.message)}}}function I_(n){return`${n.name}!${n.options.appId}`}/**
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
 */const QI=1024,YI=30;class JI{constructor(e){this.container=e,this._heartbeatsCache=null;const t=this.container.getProvider("app").getImmediate();this._storage=new ZI(t),this._heartbeatsCachePromise=this._storage.read().then(r=>(this._heartbeatsCache=r,r))}async triggerHeartbeat(){var e,t;try{const i=this.container.getProvider("platform-logger").getImmediate().getPlatformInfoString(),s=jf();if(((e=this._heartbeatsCache)===null||e===void 0?void 0:e.heartbeats)==null&&(this._heartbeatsCache=await this._heartbeatsCachePromise,((t=this._heartbeatsCache)===null||t===void 0?void 0:t.heartbeats)==null)||this._heartbeatsCache.lastSentHeartbeatDate===s||this._heartbeatsCache.heartbeats.some(a=>a.date===s))return;if(this._heartbeatsCache.heartbeats.push({date:s,agent:i}),this._heartbeatsCache.heartbeats.length>YI){const a=eA(this._heartbeatsCache.heartbeats);this._heartbeatsCache.heartbeats.splice(a,1)}return this._storage.overwrite(this._heartbeatsCache)}catch(r){Pi.warn(r)}}async getHeartbeatsHeader(){var e;try{if(this._heartbeatsCache===null&&await this._heartbeatsCachePromise,((e=this._heartbeatsCache)===null||e===void 0?void 0:e.heartbeats)==null||this._heartbeatsCache.heartbeats.length===0)return"";const t=jf(),{heartbeatsToSend:r,unsentEntries:i}=XI(this._heartbeatsCache.heartbeats),s=d_(JSON.stringify({version:2,heartbeats:r}));return this._heartbeatsCache.lastSentHeartbeatDate=t,i.length>0?(this._heartbeatsCache.heartbeats=i,await this._storage.overwrite(this._heartbeatsCache)):(this._heartbeatsCache.heartbeats=[],this._storage.overwrite(this._heartbeatsCache)),s}catch(t){return Pi.warn(t),""}}}function jf(){return new Date().toISOString().substring(0,10)}function XI(n,e=QI){const t=[];let r=n.slice();for(const i of n){const s=t.find(a=>a.agent===i.agent);if(s){if(s.dates.push(i.date),Hf(t)>e){s.dates.pop();break}}else if(t.push({agent:i.agent,dates:[i.date]}),Hf(t)>e){t.pop();break}r=r.slice(1)}return{heartbeatsToSend:t,unsentEntries:r}}class ZI{constructor(e){this.app=e,this._canUseIndexedDBPromise=this.runIndexedDBEnvironmentCheck()}async runIndexedDBEnvironmentCheck(){return __()?$T().then(()=>!0).catch(()=>!1):!1}async read(){if(await this._canUseIndexedDBPromise){const t=await KI(this.app);return t!=null&&t.heartbeats?t:{heartbeats:[]}}else return{heartbeats:[]}}async overwrite(e){var t;if(await this._canUseIndexedDBPromise){const i=await this.read();return zf(this.app,{lastSentHeartbeatDate:(t=e.lastSentHeartbeatDate)!==null&&t!==void 0?t:i.lastSentHeartbeatDate,heartbeats:e.heartbeats})}else return}async add(e){var t;if(await this._canUseIndexedDBPromise){const i=await this.read();return zf(this.app,{lastSentHeartbeatDate:(t=e.lastSentHeartbeatDate)!==null&&t!==void 0?t:i.lastSentHeartbeatDate,heartbeats:[...i.heartbeats,...e.heartbeats]})}else return}}function Hf(n){return d_(JSON.stringify({version:2,heartbeats:n})).length}function eA(n){if(n.length===0)return-1;let e=0,t=n[0].date;for(let r=1;r<n.length;r++)n[r].date<t&&(t=n[r].date,e=r);return e}/**
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
 */function tA(n){cs(new Ci("platform-logger",e=>new fI(e),"PRIVATE")),cs(new Ci("heartbeat",e=>new JI(e),"PRIVATE")),Ai(Ch,qf,n),Ai(Ch,qf,"esm2017"),Ai("fire-js","")}tA("");function yd(n,e){var t={};for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&e.indexOf(r)<0&&(t[r]=n[r]);if(n!=null&&typeof Object.getOwnPropertySymbols=="function")for(var i=0,r=Object.getOwnPropertySymbols(n);i<r.length;i++)e.indexOf(r[i])<0&&Object.prototype.propertyIsEnumerable.call(n,r[i])&&(t[r[i]]=n[r[i]]);return t}function A_(){return{"dependent-sdk-initialized-before-auth":"Another Firebase SDK was initialized and is trying to use Auth before Auth is initialized. Please be sure to call `initializeAuth` or `getAuth` before starting any other Firebase SDK."}}const nA=A_,b_=new ra("auth","Firebase",A_());/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Tc=new tu("@firebase/auth");function rA(n,...e){Tc.logLevel<=Ve.WARN&&Tc.warn(`Auth (${ia}): ${n}`,...e)}function oc(n,...e){Tc.logLevel<=Ve.ERROR&&Tc.error(`Auth (${ia}): ${n}`,...e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Lr(n,...e){throw Ed(n,...e)}function ii(n,...e){return Ed(n,...e)}function S_(n,e,t){const r=Object.assign(Object.assign({},nA()),{[e]:t});return new ra("auth","Firebase",r).create(e,{appName:n.name})}function bi(n){return S_(n,"operation-not-supported-in-this-environment","Operations that alter the current user are not supported in conjunction with FirebaseServerApp")}function Ed(n,...e){if(typeof n!="string"){const t=e[0],r=[...e.slice(1)];return r[0]&&(r[0].appName=n.name),n._errorFactory.create(t,...r)}return b_.create(n,...e)}function ce(n,e,...t){if(!n)throw Ed(e,...t)}function Ti(n){const e="INTERNAL ASSERTION FAILED: "+n;throw oc(e),new Error(e)}function ki(n,e){n||Ti(e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Nh(){var n;return typeof self<"u"&&((n=self.location)===null||n===void 0?void 0:n.href)||""}function iA(){return Wf()==="http:"||Wf()==="https:"}function Wf(){var n;return typeof self<"u"&&((n=self.location)===null||n===void 0?void 0:n.protocol)||null}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function sA(){return typeof navigator<"u"&&navigator&&"onLine"in navigator&&typeof navigator.onLine=="boolean"&&(iA()||xT()||"connection"in navigator)?navigator.onLine:!0}function oA(){if(typeof navigator>"u")return null;const n=navigator;return n.languages&&n.languages[0]||n.language||null}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class vl{constructor(e,t){this.shortDelay=e,this.longDelay=t,ki(t>e,"Short delay should be less than long delay!"),this.isMobile=OT()||LT()}get(){return sA()?this.isMobile?this.longDelay:this.shortDelay:Math.min(5e3,this.shortDelay)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function wd(n,e){ki(n.emulator,"Emulator should always be set here");const{url:t}=n.emulator;return e?`${t}${e.startsWith("/")?e.slice(1):e}`:t}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class R_{static initialize(e,t,r){this.fetchImpl=e,t&&(this.headersImpl=t),r&&(this.responseImpl=r)}static fetch(){if(this.fetchImpl)return this.fetchImpl;if(typeof self<"u"&&"fetch"in self)return self.fetch;if(typeof globalThis<"u"&&globalThis.fetch)return globalThis.fetch;if(typeof fetch<"u")return fetch;Ti("Could not find fetch implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}static headers(){if(this.headersImpl)return this.headersImpl;if(typeof self<"u"&&"Headers"in self)return self.Headers;if(typeof globalThis<"u"&&globalThis.Headers)return globalThis.Headers;if(typeof Headers<"u")return Headers;Ti("Could not find Headers implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}static response(){if(this.responseImpl)return this.responseImpl;if(typeof self<"u"&&"Response"in self)return self.Response;if(typeof globalThis<"u"&&globalThis.Response)return globalThis.Response;if(typeof Response<"u")return Response;Ti("Could not find Response implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const aA={CREDENTIAL_MISMATCH:"custom-token-mismatch",MISSING_CUSTOM_TOKEN:"internal-error",INVALID_IDENTIFIER:"invalid-email",MISSING_CONTINUE_URI:"internal-error",INVALID_PASSWORD:"wrong-password",MISSING_PASSWORD:"missing-password",INVALID_LOGIN_CREDENTIALS:"invalid-credential",EMAIL_EXISTS:"email-already-in-use",PASSWORD_LOGIN_DISABLED:"operation-not-allowed",INVALID_IDP_RESPONSE:"invalid-credential",INVALID_PENDING_TOKEN:"invalid-credential",FEDERATED_USER_ID_ALREADY_LINKED:"credential-already-in-use",MISSING_REQ_TYPE:"internal-error",EMAIL_NOT_FOUND:"user-not-found",RESET_PASSWORD_EXCEED_LIMIT:"too-many-requests",EXPIRED_OOB_CODE:"expired-action-code",INVALID_OOB_CODE:"invalid-action-code",MISSING_OOB_CODE:"internal-error",CREDENTIAL_TOO_OLD_LOGIN_AGAIN:"requires-recent-login",INVALID_ID_TOKEN:"invalid-user-token",TOKEN_EXPIRED:"user-token-expired",USER_NOT_FOUND:"user-token-expired",TOO_MANY_ATTEMPTS_TRY_LATER:"too-many-requests",PASSWORD_DOES_NOT_MEET_REQUIREMENTS:"password-does-not-meet-requirements",INVALID_CODE:"invalid-verification-code",INVALID_SESSION_INFO:"invalid-verification-id",INVALID_TEMPORARY_PROOF:"invalid-credential",MISSING_SESSION_INFO:"missing-verification-id",SESSION_EXPIRED:"code-expired",MISSING_ANDROID_PACKAGE_NAME:"missing-android-pkg-name",UNAUTHORIZED_DOMAIN:"unauthorized-continue-uri",INVALID_OAUTH_CLIENT_ID:"invalid-oauth-client-id",ADMIN_ONLY_OPERATION:"admin-restricted-operation",INVALID_MFA_PENDING_CREDENTIAL:"invalid-multi-factor-session",MFA_ENROLLMENT_NOT_FOUND:"multi-factor-info-not-found",MISSING_MFA_ENROLLMENT_ID:"missing-multi-factor-info",MISSING_MFA_PENDING_CREDENTIAL:"missing-multi-factor-session",SECOND_FACTOR_EXISTS:"second-factor-already-in-use",SECOND_FACTOR_LIMIT_EXCEEDED:"maximum-second-factor-count-exceeded",BLOCKING_FUNCTION_ERROR_RESPONSE:"internal-error",RECAPTCHA_NOT_ENABLED:"recaptcha-not-enabled",MISSING_RECAPTCHA_TOKEN:"missing-recaptcha-token",INVALID_RECAPTCHA_TOKEN:"invalid-recaptcha-token",INVALID_RECAPTCHA_ACTION:"invalid-recaptcha-action",MISSING_CLIENT_TYPE:"missing-client-type",MISSING_RECAPTCHA_VERSION:"missing-recaptcha-version",INVALID_RECAPTCHA_VERSION:"invalid-recaptcha-version",INVALID_REQ_TYPE:"invalid-req-type"};/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const lA=["/v1/accounts:signInWithCustomToken","/v1/accounts:signInWithEmailLink","/v1/accounts:signInWithIdp","/v1/accounts:signInWithPassword","/v1/accounts:signInWithPhoneNumber","/v1/token"],cA=new vl(3e4,6e4);function Oi(n,e){return n.tenantId&&!e.tenantId?Object.assign(Object.assign({},e),{tenantId:n.tenantId}):e}async function Vi(n,e,t,r,i={}){return C_(n,i,async()=>{let s={},a={};r&&(e==="GET"?a=r:s={body:JSON.stringify(r)});const l=_l(Object.assign({key:n.config.apiKey},a)).slice(1),c=await n._getAdditionalHeaders();c["Content-Type"]="application/json",n.languageCode&&(c["X-Firebase-Locale"]=n.languageCode);const h=Object.assign({method:e,headers:c},s);return MT()||(h.referrerPolicy="no-referrer"),n.emulatorConfig&&na(n.emulatorConfig.host)&&(h.credentials="include"),R_.fetch()(await P_(n,n.config.apiHost,t,l),h)})}async function C_(n,e,t){n._canInitEmulator=!1;const r=Object.assign(Object.assign({},aA),e);try{const i=new hA(n),s=await Promise.race([t(),i.promise]);i.clearNetworkTimeout();const a=await s.json();if("needConfirmation"in a)throw Kl(n,"account-exists-with-different-credential",a);if(s.ok&&!("errorMessage"in a))return a;{const l=s.ok?a.errorMessage:a.error.message,[c,h]=l.split(" : ");if(c==="FEDERATED_USER_ID_ALREADY_LINKED")throw Kl(n,"credential-already-in-use",a);if(c==="EMAIL_EXISTS")throw Kl(n,"email-already-in-use",a);if(c==="USER_DISABLED")throw Kl(n,"user-disabled",a);const f=r[c]||c.toLowerCase().replace(/[_\s]+/g,"-");if(h)throw S_(n,f,h);Lr(n,f)}}catch(i){if(i instanceof Di)throw i;Lr(n,"network-request-failed",{message:String(i)})}}async function yl(n,e,t,r,i={}){const s=await Vi(n,e,t,r,i);return"mfaPendingCredential"in s&&Lr(n,"multi-factor-auth-required",{_serverResponse:s}),s}async function P_(n,e,t,r){const i=`${e}${t}?${r}`,s=n,a=s.config.emulator?wd(n.config,i):`${n.config.apiScheme}://${i}`;return lA.includes(t)&&(await s._persistenceManagerAvailable,s._getPersistenceType()==="COOKIE")?s._getPersistence()._getFinalTarget(a).toString():a}function uA(n){switch(n){case"ENFORCE":return"ENFORCE";case"AUDIT":return"AUDIT";case"OFF":return"OFF";default:return"ENFORCEMENT_STATE_UNSPECIFIED"}}class hA{clearNetworkTimeout(){clearTimeout(this.timer)}constructor(e){this.auth=e,this.timer=null,this.promise=new Promise((t,r)=>{this.timer=setTimeout(()=>r(ii(this.auth,"network-request-failed")),cA.get())})}}function Kl(n,e,t){const r={appName:n.name};t.email&&(r.email=t.email),t.phoneNumber&&(r.phoneNumber=t.phoneNumber);const i=ii(n,e,r);return i.customData._tokenResponse=t,i}function Gf(n){return n!==void 0&&n.enterprise!==void 0}class dA{constructor(e){if(this.siteKey="",this.recaptchaEnforcementState=[],e.recaptchaKey===void 0)throw new Error("recaptchaKey undefined");this.siteKey=e.recaptchaKey.split("/")[3],this.recaptchaEnforcementState=e.recaptchaEnforcementState}getProviderEnforcementState(e){if(!this.recaptchaEnforcementState||this.recaptchaEnforcementState.length===0)return null;for(const t of this.recaptchaEnforcementState)if(t.provider&&t.provider===e)return uA(t.enforcementState);return null}isProviderEnabled(e){return this.getProviderEnforcementState(e)==="ENFORCE"||this.getProviderEnforcementState(e)==="AUDIT"}isAnyProviderEnabled(){return this.isProviderEnabled("EMAIL_PASSWORD_PROVIDER")||this.isProviderEnabled("PHONE_PROVIDER")}}async function fA(n,e){return Vi(n,"GET","/v2/recaptchaConfig",Oi(n,e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function pA(n,e){return Vi(n,"POST","/v1/accounts:delete",e)}async function Ic(n,e){return Vi(n,"POST","/v1/accounts:lookup",e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function qa(n){if(n)try{const e=new Date(Number(n));if(!isNaN(e.getTime()))return e.toUTCString()}catch{}}async function mA(n,e=!1){const t=Bt(n),r=await t.getIdToken(e),i=Td(r);ce(i&&i.exp&&i.auth_time&&i.iat,t.auth,"internal-error");const s=typeof i.firebase=="object"?i.firebase:void 0,a=s==null?void 0:s.sign_in_provider;return{claims:i,token:r,authTime:qa(eh(i.auth_time)),issuedAtTime:qa(eh(i.iat)),expirationTime:qa(eh(i.exp)),signInProvider:a||null,signInSecondFactor:(s==null?void 0:s.sign_in_second_factor)||null}}function eh(n){return Number(n)*1e3}function Td(n){const[e,t,r]=n.split(".");if(e===void 0||t===void 0||r===void 0)return oc("JWT malformed, contained fewer than 3 sections"),null;try{const i=f_(t);return i?JSON.parse(i):(oc("Failed to decode base64 JWT payload"),null)}catch(i){return oc("Caught error parsing JWT payload as JSON",i==null?void 0:i.toString()),null}}function Kf(n){const e=Td(n);return ce(e,"internal-error"),ce(typeof e.exp<"u","internal-error"),ce(typeof e.iat<"u","internal-error"),Number(e.exp)-Number(e.iat)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Ja(n,e,t=!1){if(t)return e;try{return await e}catch(r){throw r instanceof Di&&gA(r)&&n.auth.currentUser===n&&await n.auth.signOut(),r}}function gA({code:n}){return n==="auth/user-disabled"||n==="auth/user-token-expired"}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class _A{constructor(e){this.user=e,this.isRunning=!1,this.timerId=null,this.errorBackoff=3e4}_start(){this.isRunning||(this.isRunning=!0,this.schedule())}_stop(){this.isRunning&&(this.isRunning=!1,this.timerId!==null&&clearTimeout(this.timerId))}getInterval(e){var t;if(e){const r=this.errorBackoff;return this.errorBackoff=Math.min(this.errorBackoff*2,96e4),r}else{this.errorBackoff=3e4;const i=((t=this.user.stsTokenManager.expirationTime)!==null&&t!==void 0?t:0)-Date.now()-3e5;return Math.max(0,i)}}schedule(e=!1){if(!this.isRunning)return;const t=this.getInterval(e);this.timerId=setTimeout(async()=>{await this.iteration()},t)}async iteration(){try{await this.user.getIdToken(!0)}catch(e){(e==null?void 0:e.code)==="auth/network-request-failed"&&this.schedule(!0);return}this.schedule()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Dh{constructor(e,t){this.createdAt=e,this.lastLoginAt=t,this._initializeTime()}_initializeTime(){this.lastSignInTime=qa(this.lastLoginAt),this.creationTime=qa(this.createdAt)}_copy(e){this.createdAt=e.createdAt,this.lastLoginAt=e.lastLoginAt,this._initializeTime()}toJSON(){return{createdAt:this.createdAt,lastLoginAt:this.lastLoginAt}}}/**
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
 */async function Ac(n){var e;const t=n.auth,r=await n.getIdToken(),i=await Ja(n,Ic(t,{idToken:r}));ce(i==null?void 0:i.users.length,t,"internal-error");const s=i.users[0];n._notifyReloadListener(s);const a=!((e=s.providerUserInfo)===null||e===void 0)&&e.length?k_(s.providerUserInfo):[],l=yA(n.providerData,a),c=n.isAnonymous,h=!(n.email&&s.passwordHash)&&!(l!=null&&l.length),f=c?h:!1,m={uid:s.localId,displayName:s.displayName||null,photoURL:s.photoUrl||null,email:s.email||null,emailVerified:s.emailVerified||!1,phoneNumber:s.phoneNumber||null,tenantId:s.tenantId||null,providerData:l,metadata:new Dh(s.createdAt,s.lastLoginAt),isAnonymous:f};Object.assign(n,m)}async function vA(n){const e=Bt(n);await Ac(e),await e.auth._persistUserIfCurrent(e),e.auth._notifyListenersIfCurrent(e)}function yA(n,e){return[...n.filter(r=>!e.some(i=>i.providerId===r.providerId)),...e]}function k_(n){return n.map(e=>{var{providerId:t}=e,r=yd(e,["providerId"]);return{providerId:t,uid:r.rawId||"",displayName:r.displayName||null,email:r.email||null,phoneNumber:r.phoneNumber||null,photoURL:r.photoUrl||null}})}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function EA(n,e){const t=await C_(n,{},async()=>{const r=_l({grant_type:"refresh_token",refresh_token:e}).slice(1),{tokenApiHost:i,apiKey:s}=n.config,a=await P_(n,i,"/v1/token",`key=${s}`),l=await n._getAdditionalHeaders();l["Content-Type"]="application/x-www-form-urlencoded";const c={method:"POST",headers:l,body:r};return n.emulatorConfig&&na(n.emulatorConfig.host)&&(c.credentials="include"),R_.fetch()(a,c)});return{accessToken:t.access_token,expiresIn:t.expires_in,refreshToken:t.refresh_token}}async function wA(n,e){return Vi(n,"POST","/v2/accounts:revokeToken",Oi(n,e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class bo{constructor(){this.refreshToken=null,this.accessToken=null,this.expirationTime=null}get isExpired(){return!this.expirationTime||Date.now()>this.expirationTime-3e4}updateFromServerResponse(e){ce(e.idToken,"internal-error"),ce(typeof e.idToken<"u","internal-error"),ce(typeof e.refreshToken<"u","internal-error");const t="expiresIn"in e&&typeof e.expiresIn<"u"?Number(e.expiresIn):Kf(e.idToken);this.updateTokensAndExpiration(e.idToken,e.refreshToken,t)}updateFromIdToken(e){ce(e.length!==0,"internal-error");const t=Kf(e);this.updateTokensAndExpiration(e,null,t)}async getToken(e,t=!1){return!t&&this.accessToken&&!this.isExpired?this.accessToken:(ce(this.refreshToken,e,"user-token-expired"),this.refreshToken?(await this.refresh(e,this.refreshToken),this.accessToken):null)}clearRefreshToken(){this.refreshToken=null}async refresh(e,t){const{accessToken:r,refreshToken:i,expiresIn:s}=await EA(e,t);this.updateTokensAndExpiration(r,i,Number(s))}updateTokensAndExpiration(e,t,r){this.refreshToken=t||null,this.accessToken=e||null,this.expirationTime=Date.now()+r*1e3}static fromJSON(e,t){const{refreshToken:r,accessToken:i,expirationTime:s}=t,a=new bo;return r&&(ce(typeof r=="string","internal-error",{appName:e}),a.refreshToken=r),i&&(ce(typeof i=="string","internal-error",{appName:e}),a.accessToken=i),s&&(ce(typeof s=="number","internal-error",{appName:e}),a.expirationTime=s),a}toJSON(){return{refreshToken:this.refreshToken,accessToken:this.accessToken,expirationTime:this.expirationTime}}_assign(e){this.accessToken=e.accessToken,this.refreshToken=e.refreshToken,this.expirationTime=e.expirationTime}_clone(){return Object.assign(new bo,this.toJSON())}_performRefresh(){return Ti("not implemented")}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Bi(n,e){ce(typeof n=="string"||typeof n>"u","internal-error",{appName:e})}class Or{constructor(e){var{uid:t,auth:r,stsTokenManager:i}=e,s=yd(e,["uid","auth","stsTokenManager"]);this.providerId="firebase",this.proactiveRefresh=new _A(this),this.reloadUserInfo=null,this.reloadListener=null,this.uid=t,this.auth=r,this.stsTokenManager=i,this.accessToken=i.accessToken,this.displayName=s.displayName||null,this.email=s.email||null,this.emailVerified=s.emailVerified||!1,this.phoneNumber=s.phoneNumber||null,this.photoURL=s.photoURL||null,this.isAnonymous=s.isAnonymous||!1,this.tenantId=s.tenantId||null,this.providerData=s.providerData?[...s.providerData]:[],this.metadata=new Dh(s.createdAt||void 0,s.lastLoginAt||void 0)}async getIdToken(e){const t=await Ja(this,this.stsTokenManager.getToken(this.auth,e));return ce(t,this.auth,"internal-error"),this.accessToken!==t&&(this.accessToken=t,await this.auth._persistUserIfCurrent(this),this.auth._notifyListenersIfCurrent(this)),t}getIdTokenResult(e){return mA(this,e)}reload(){return vA(this)}_assign(e){this!==e&&(ce(this.uid===e.uid,this.auth,"internal-error"),this.displayName=e.displayName,this.photoURL=e.photoURL,this.email=e.email,this.emailVerified=e.emailVerified,this.phoneNumber=e.phoneNumber,this.isAnonymous=e.isAnonymous,this.tenantId=e.tenantId,this.providerData=e.providerData.map(t=>Object.assign({},t)),this.metadata._copy(e.metadata),this.stsTokenManager._assign(e.stsTokenManager))}_clone(e){const t=new Or(Object.assign(Object.assign({},this),{auth:e,stsTokenManager:this.stsTokenManager._clone()}));return t.metadata._copy(this.metadata),t}_onReload(e){ce(!this.reloadListener,this.auth,"internal-error"),this.reloadListener=e,this.reloadUserInfo&&(this._notifyReloadListener(this.reloadUserInfo),this.reloadUserInfo=null)}_notifyReloadListener(e){this.reloadListener?this.reloadListener(e):this.reloadUserInfo=e}_startProactiveRefresh(){this.proactiveRefresh._start()}_stopProactiveRefresh(){this.proactiveRefresh._stop()}async _updateTokensIfNecessary(e,t=!1){let r=!1;e.idToken&&e.idToken!==this.stsTokenManager.accessToken&&(this.stsTokenManager.updateFromServerResponse(e),r=!0),t&&await Ac(this),await this.auth._persistUserIfCurrent(this),r&&this.auth._notifyListenersIfCurrent(this)}async delete(){if(yr(this.auth.app))return Promise.reject(bi(this.auth));const e=await this.getIdToken();return await Ja(this,pA(this.auth,{idToken:e})),this.stsTokenManager.clearRefreshToken(),this.auth.signOut()}toJSON(){return Object.assign(Object.assign({uid:this.uid,email:this.email||void 0,emailVerified:this.emailVerified,displayName:this.displayName||void 0,isAnonymous:this.isAnonymous,photoURL:this.photoURL||void 0,phoneNumber:this.phoneNumber||void 0,tenantId:this.tenantId||void 0,providerData:this.providerData.map(e=>Object.assign({},e)),stsTokenManager:this.stsTokenManager.toJSON(),_redirectEventId:this._redirectEventId},this.metadata.toJSON()),{apiKey:this.auth.config.apiKey,appName:this.auth.name})}get refreshToken(){return this.stsTokenManager.refreshToken||""}static _fromJSON(e,t){var r,i,s,a,l,c,h,f;const m=(r=t.displayName)!==null&&r!==void 0?r:void 0,_=(i=t.email)!==null&&i!==void 0?i:void 0,I=(s=t.phoneNumber)!==null&&s!==void 0?s:void 0,w=(a=t.photoURL)!==null&&a!==void 0?a:void 0,D=(l=t.tenantId)!==null&&l!==void 0?l:void 0,T=(c=t._redirectEventId)!==null&&c!==void 0?c:void 0,L=(h=t.createdAt)!==null&&h!==void 0?h:void 0,U=(f=t.lastLoginAt)!==null&&f!==void 0?f:void 0,{uid:q,emailVerified:ee,isAnonymous:ge,providerData:W,stsTokenManager:A}=t;ce(q&&A,e,"internal-error");const v=bo.fromJSON(this.name,A);ce(typeof q=="string",e,"internal-error"),Bi(m,e.name),Bi(_,e.name),ce(typeof ee=="boolean",e,"internal-error"),ce(typeof ge=="boolean",e,"internal-error"),Bi(I,e.name),Bi(w,e.name),Bi(D,e.name),Bi(T,e.name),Bi(L,e.name),Bi(U,e.name);const E=new Or({uid:q,auth:e,email:_,emailVerified:ee,displayName:m,isAnonymous:ge,photoURL:w,phoneNumber:I,tenantId:D,stsTokenManager:v,createdAt:L,lastLoginAt:U});return W&&Array.isArray(W)&&(E.providerData=W.map(S=>Object.assign({},S))),T&&(E._redirectEventId=T),E}static async _fromIdTokenResponse(e,t,r=!1){const i=new bo;i.updateFromServerResponse(t);const s=new Or({uid:t.localId,auth:e,stsTokenManager:i,isAnonymous:r});return await Ac(s),s}static async _fromGetAccountInfoResponse(e,t,r){const i=t.users[0];ce(i.localId!==void 0,"internal-error");const s=i.providerUserInfo!==void 0?k_(i.providerUserInfo):[],a=!(i.email&&i.passwordHash)&&!(s!=null&&s.length),l=new bo;l.updateFromIdToken(r);const c=new Or({uid:i.localId,auth:e,stsTokenManager:l,isAnonymous:a}),h={uid:i.localId,displayName:i.displayName||null,photoURL:i.photoUrl||null,email:i.email||null,emailVerified:i.emailVerified||!1,phoneNumber:i.phoneNumber||null,tenantId:i.tenantId||null,providerData:s,metadata:new Dh(i.createdAt,i.lastLoginAt),isAnonymous:!(i.email&&i.passwordHash)&&!(s!=null&&s.length)};return Object.assign(c,h),c}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Qf=new Map;function Ii(n){ki(n instanceof Function,"Expected a class definition");let e=Qf.get(n);return e?(ki(e instanceof n,"Instance stored in cache mismatched with class"),e):(e=new n,Qf.set(n,e),e)}/**
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
 */class N_{constructor(){this.type="NONE",this.storage={}}async _isAvailable(){return!0}async _set(e,t){this.storage[e]=t}async _get(e){const t=this.storage[e];return t===void 0?null:t}async _remove(e){delete this.storage[e]}_addListener(e,t){}_removeListener(e,t){}}N_.type="NONE";const Yf=N_;/**
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
 */function ac(n,e,t){return`firebase:${n}:${e}:${t}`}class So{constructor(e,t,r){this.persistence=e,this.auth=t,this.userKey=r;const{config:i,name:s}=this.auth;this.fullUserKey=ac(this.userKey,i.apiKey,s),this.fullPersistenceKey=ac("persistence",i.apiKey,s),this.boundEventHandler=t._onStorageEvent.bind(t),this.persistence._addListener(this.fullUserKey,this.boundEventHandler)}setCurrentUser(e){return this.persistence._set(this.fullUserKey,e.toJSON())}async getCurrentUser(){const e=await this.persistence._get(this.fullUserKey);if(!e)return null;if(typeof e=="string"){const t=await Ic(this.auth,{idToken:e}).catch(()=>{});return t?Or._fromGetAccountInfoResponse(this.auth,t,e):null}return Or._fromJSON(this.auth,e)}removeCurrentUser(){return this.persistence._remove(this.fullUserKey)}savePersistenceForRedirect(){return this.persistence._set(this.fullPersistenceKey,this.persistence.type)}async setPersistence(e){if(this.persistence===e)return;const t=await this.getCurrentUser();if(await this.removeCurrentUser(),this.persistence=e,t)return this.setCurrentUser(t)}delete(){this.persistence._removeListener(this.fullUserKey,this.boundEventHandler)}static async create(e,t,r="authUser"){if(!t.length)return new So(Ii(Yf),e,r);const i=(await Promise.all(t.map(async h=>{if(await h._isAvailable())return h}))).filter(h=>h);let s=i[0]||Ii(Yf);const a=ac(r,e.config.apiKey,e.name);let l=null;for(const h of t)try{const f=await h._get(a);if(f){let m;if(typeof f=="string"){const _=await Ic(e,{idToken:f}).catch(()=>{});if(!_)break;m=await Or._fromGetAccountInfoResponse(e,_,f)}else m=Or._fromJSON(e,f);h!==s&&(l=m),s=h;break}}catch{}const c=i.filter(h=>h._shouldAllowMigration);return!s._shouldAllowMigration||!c.length?new So(s,e,r):(s=c[0],l&&await s._set(a,l.toJSON()),await Promise.all(t.map(async h=>{if(h!==s)try{await h._remove(a)}catch{}})),new So(s,e,r))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Jf(n){const e=n.toLowerCase();if(e.includes("opera/")||e.includes("opr/")||e.includes("opios/"))return"Opera";if(M_(e))return"IEMobile";if(e.includes("msie")||e.includes("trident/"))return"IE";if(e.includes("edge/"))return"Edge";if(D_(e))return"Firefox";if(e.includes("silk/"))return"Silk";if(L_(e))return"Blackberry";if(F_(e))return"Webos";if(O_(e))return"Safari";if((e.includes("chrome/")||V_(e))&&!e.includes("edge/"))return"Chrome";if(x_(e))return"Android";{const t=/([a-zA-Z\d\.]+)\/[a-zA-Z\d\.]*$/,r=n.match(t);if((r==null?void 0:r.length)===2)return r[1]}return"Other"}function D_(n=Vn()){return/firefox\//i.test(n)}function O_(n=Vn()){const e=n.toLowerCase();return e.includes("safari/")&&!e.includes("chrome/")&&!e.includes("crios/")&&!e.includes("android")}function V_(n=Vn()){return/crios\//i.test(n)}function M_(n=Vn()){return/iemobile/i.test(n)}function x_(n=Vn()){return/android/i.test(n)}function L_(n=Vn()){return/blackberry/i.test(n)}function F_(n=Vn()){return/webos/i.test(n)}function Id(n=Vn()){return/iphone|ipad|ipod/i.test(n)||/macintosh/i.test(n)&&/mobile/i.test(n)}function TA(n=Vn()){var e;return Id(n)&&!!(!((e=window.navigator)===null||e===void 0)&&e.standalone)}function IA(){return FT()&&document.documentMode===10}function U_(n=Vn()){return Id(n)||x_(n)||F_(n)||L_(n)||/windows phone/i.test(n)||M_(n)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function $_(n,e=[]){let t;switch(n){case"Browser":t=Jf(Vn());break;case"Worker":t=`${Jf(Vn())}-${n}`;break;default:t=n}const r=e.length?e.join(","):"FirebaseCore-web";return`${t}/JsCore/${ia}/${r}`}/**
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
 */class AA{constructor(e){this.auth=e,this.queue=[]}pushCallback(e,t){const r=s=>new Promise((a,l)=>{try{const c=e(s);a(c)}catch(c){l(c)}});r.onAbort=t,this.queue.push(r);const i=this.queue.length-1;return()=>{this.queue[i]=()=>Promise.resolve()}}async runMiddleware(e){if(this.auth.currentUser===e)return;const t=[];try{for(const r of this.queue)await r(e),r.onAbort&&t.push(r.onAbort)}catch(r){t.reverse();for(const i of t)try{i()}catch{}throw this.auth._errorFactory.create("login-blocked",{originalMessage:r==null?void 0:r.message})}}}/**
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
 */async function bA(n,e={}){return Vi(n,"GET","/v2/passwordPolicy",Oi(n,e))}/**
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
 */const SA=6;class RA{constructor(e){var t,r,i,s;const a=e.customStrengthOptions;this.customStrengthOptions={},this.customStrengthOptions.minPasswordLength=(t=a.minPasswordLength)!==null&&t!==void 0?t:SA,a.maxPasswordLength&&(this.customStrengthOptions.maxPasswordLength=a.maxPasswordLength),a.containsLowercaseCharacter!==void 0&&(this.customStrengthOptions.containsLowercaseLetter=a.containsLowercaseCharacter),a.containsUppercaseCharacter!==void 0&&(this.customStrengthOptions.containsUppercaseLetter=a.containsUppercaseCharacter),a.containsNumericCharacter!==void 0&&(this.customStrengthOptions.containsNumericCharacter=a.containsNumericCharacter),a.containsNonAlphanumericCharacter!==void 0&&(this.customStrengthOptions.containsNonAlphanumericCharacter=a.containsNonAlphanumericCharacter),this.enforcementState=e.enforcementState,this.enforcementState==="ENFORCEMENT_STATE_UNSPECIFIED"&&(this.enforcementState="OFF"),this.allowedNonAlphanumericCharacters=(i=(r=e.allowedNonAlphanumericCharacters)===null||r===void 0?void 0:r.join(""))!==null&&i!==void 0?i:"",this.forceUpgradeOnSignin=(s=e.forceUpgradeOnSignin)!==null&&s!==void 0?s:!1,this.schemaVersion=e.schemaVersion}validatePassword(e){var t,r,i,s,a,l;const c={isValid:!0,passwordPolicy:this};return this.validatePasswordLengthOptions(e,c),this.validatePasswordCharacterOptions(e,c),c.isValid&&(c.isValid=(t=c.meetsMinPasswordLength)!==null&&t!==void 0?t:!0),c.isValid&&(c.isValid=(r=c.meetsMaxPasswordLength)!==null&&r!==void 0?r:!0),c.isValid&&(c.isValid=(i=c.containsLowercaseLetter)!==null&&i!==void 0?i:!0),c.isValid&&(c.isValid=(s=c.containsUppercaseLetter)!==null&&s!==void 0?s:!0),c.isValid&&(c.isValid=(a=c.containsNumericCharacter)!==null&&a!==void 0?a:!0),c.isValid&&(c.isValid=(l=c.containsNonAlphanumericCharacter)!==null&&l!==void 0?l:!0),c}validatePasswordLengthOptions(e,t){const r=this.customStrengthOptions.minPasswordLength,i=this.customStrengthOptions.maxPasswordLength;r&&(t.meetsMinPasswordLength=e.length>=r),i&&(t.meetsMaxPasswordLength=e.length<=i)}validatePasswordCharacterOptions(e,t){this.updatePasswordCharacterOptionsStatuses(t,!1,!1,!1,!1);let r;for(let i=0;i<e.length;i++)r=e.charAt(i),this.updatePasswordCharacterOptionsStatuses(t,r>="a"&&r<="z",r>="A"&&r<="Z",r>="0"&&r<="9",this.allowedNonAlphanumericCharacters.includes(r))}updatePasswordCharacterOptionsStatuses(e,t,r,i,s){this.customStrengthOptions.containsLowercaseLetter&&(e.containsLowercaseLetter||(e.containsLowercaseLetter=t)),this.customStrengthOptions.containsUppercaseLetter&&(e.containsUppercaseLetter||(e.containsUppercaseLetter=r)),this.customStrengthOptions.containsNumericCharacter&&(e.containsNumericCharacter||(e.containsNumericCharacter=i)),this.customStrengthOptions.containsNonAlphanumericCharacter&&(e.containsNonAlphanumericCharacter||(e.containsNonAlphanumericCharacter=s))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class CA{constructor(e,t,r,i){this.app=e,this.heartbeatServiceProvider=t,this.appCheckServiceProvider=r,this.config=i,this.currentUser=null,this.emulatorConfig=null,this.operations=Promise.resolve(),this.authStateSubscription=new Xf(this),this.idTokenSubscription=new Xf(this),this.beforeStateQueue=new AA(this),this.redirectUser=null,this.isProactiveRefreshEnabled=!1,this.EXPECTED_PASSWORD_POLICY_SCHEMA_VERSION=1,this._canInitEmulator=!0,this._isInitialized=!1,this._deleted=!1,this._initializationPromise=null,this._popupRedirectResolver=null,this._errorFactory=b_,this._agentRecaptchaConfig=null,this._tenantRecaptchaConfigs={},this._projectPasswordPolicy=null,this._tenantPasswordPolicies={},this._resolvePersistenceManagerAvailable=void 0,this.lastNotifiedUid=void 0,this.languageCode=null,this.tenantId=null,this.settings={appVerificationDisabledForTesting:!1},this.frameworks=[],this.name=e.name,this.clientVersion=i.sdkClientVersion,this._persistenceManagerAvailable=new Promise(s=>this._resolvePersistenceManagerAvailable=s)}_initializeWithPersistence(e,t){return t&&(this._popupRedirectResolver=Ii(t)),this._initializationPromise=this.queue(async()=>{var r,i,s;if(!this._deleted&&(this.persistenceManager=await So.create(this,e),(r=this._resolvePersistenceManagerAvailable)===null||r===void 0||r.call(this),!this._deleted)){if(!((i=this._popupRedirectResolver)===null||i===void 0)&&i._shouldInitProactively)try{await this._popupRedirectResolver._initialize(this)}catch{}await this.initializeCurrentUser(t),this.lastNotifiedUid=((s=this.currentUser)===null||s===void 0?void 0:s.uid)||null,!this._deleted&&(this._isInitialized=!0)}}),this._initializationPromise}async _onStorageEvent(){if(this._deleted)return;const e=await this.assertedPersistence.getCurrentUser();if(!(!this.currentUser&&!e)){if(this.currentUser&&e&&this.currentUser.uid===e.uid){this._currentUser._assign(e),await this.currentUser.getIdToken();return}await this._updateCurrentUser(e,!0)}}async initializeCurrentUserFromIdToken(e){try{const t=await Ic(this,{idToken:e}),r=await Or._fromGetAccountInfoResponse(this,t,e);await this.directlySetCurrentUser(r)}catch(t){console.warn("FirebaseServerApp could not login user with provided authIdToken: ",t),await this.directlySetCurrentUser(null)}}async initializeCurrentUser(e){var t;if(yr(this.app)){const a=this.app.settings.authIdToken;return a?new Promise(l=>{setTimeout(()=>this.initializeCurrentUserFromIdToken(a).then(l,l))}):this.directlySetCurrentUser(null)}const r=await this.assertedPersistence.getCurrentUser();let i=r,s=!1;if(e&&this.config.authDomain){await this.getOrInitRedirectPersistenceManager();const a=(t=this.redirectUser)===null||t===void 0?void 0:t._redirectEventId,l=i==null?void 0:i._redirectEventId,c=await this.tryRedirectSignIn(e);(!a||a===l)&&(c!=null&&c.user)&&(i=c.user,s=!0)}if(!i)return this.directlySetCurrentUser(null);if(!i._redirectEventId){if(s)try{await this.beforeStateQueue.runMiddleware(i)}catch(a){i=r,this._popupRedirectResolver._overrideRedirectResult(this,()=>Promise.reject(a))}return i?this.reloadAndSetCurrentUserOrClear(i):this.directlySetCurrentUser(null)}return ce(this._popupRedirectResolver,this,"argument-error"),await this.getOrInitRedirectPersistenceManager(),this.redirectUser&&this.redirectUser._redirectEventId===i._redirectEventId?this.directlySetCurrentUser(i):this.reloadAndSetCurrentUserOrClear(i)}async tryRedirectSignIn(e){let t=null;try{t=await this._popupRedirectResolver._completeRedirectFn(this,e,!0)}catch{await this._setRedirectUser(null)}return t}async reloadAndSetCurrentUserOrClear(e){try{await Ac(e)}catch(t){if((t==null?void 0:t.code)!=="auth/network-request-failed")return this.directlySetCurrentUser(null)}return this.directlySetCurrentUser(e)}useDeviceLanguage(){this.languageCode=oA()}async _delete(){this._deleted=!0}async updateCurrentUser(e){if(yr(this.app))return Promise.reject(bi(this));const t=e?Bt(e):null;return t&&ce(t.auth.config.apiKey===this.config.apiKey,this,"invalid-user-token"),this._updateCurrentUser(t&&t._clone(this))}async _updateCurrentUser(e,t=!1){if(!this._deleted)return e&&ce(this.tenantId===e.tenantId,this,"tenant-id-mismatch"),t||await this.beforeStateQueue.runMiddleware(e),this.queue(async()=>{await this.directlySetCurrentUser(e),this.notifyAuthListeners()})}async signOut(){return yr(this.app)?Promise.reject(bi(this)):(await this.beforeStateQueue.runMiddleware(null),(this.redirectPersistenceManager||this._popupRedirectResolver)&&await this._setRedirectUser(null),this._updateCurrentUser(null,!0))}setPersistence(e){return yr(this.app)?Promise.reject(bi(this)):this.queue(async()=>{await this.assertedPersistence.setPersistence(Ii(e))})}_getRecaptchaConfig(){return this.tenantId==null?this._agentRecaptchaConfig:this._tenantRecaptchaConfigs[this.tenantId]}async validatePassword(e){this._getPasswordPolicyInternal()||await this._updatePasswordPolicy();const t=this._getPasswordPolicyInternal();return t.schemaVersion!==this.EXPECTED_PASSWORD_POLICY_SCHEMA_VERSION?Promise.reject(this._errorFactory.create("unsupported-password-policy-schema-version",{})):t.validatePassword(e)}_getPasswordPolicyInternal(){return this.tenantId===null?this._projectPasswordPolicy:this._tenantPasswordPolicies[this.tenantId]}async _updatePasswordPolicy(){const e=await bA(this),t=new RA(e);this.tenantId===null?this._projectPasswordPolicy=t:this._tenantPasswordPolicies[this.tenantId]=t}_getPersistenceType(){return this.assertedPersistence.persistence.type}_getPersistence(){return this.assertedPersistence.persistence}_updateErrorMap(e){this._errorFactory=new ra("auth","Firebase",e())}onAuthStateChanged(e,t,r){return this.registerStateListener(this.authStateSubscription,e,t,r)}beforeAuthStateChanged(e,t){return this.beforeStateQueue.pushCallback(e,t)}onIdTokenChanged(e,t,r){return this.registerStateListener(this.idTokenSubscription,e,t,r)}authStateReady(){return new Promise((e,t)=>{if(this.currentUser)e();else{const r=this.onAuthStateChanged(()=>{r(),e()},t)}})}async revokeAccessToken(e){if(this.currentUser){const t=await this.currentUser.getIdToken(),r={providerId:"apple.com",tokenType:"ACCESS_TOKEN",token:e,idToken:t};this.tenantId!=null&&(r.tenantId=this.tenantId),await wA(this,r)}}toJSON(){var e;return{apiKey:this.config.apiKey,authDomain:this.config.authDomain,appName:this.name,currentUser:(e=this._currentUser)===null||e===void 0?void 0:e.toJSON()}}async _setRedirectUser(e,t){const r=await this.getOrInitRedirectPersistenceManager(t);return e===null?r.removeCurrentUser():r.setCurrentUser(e)}async getOrInitRedirectPersistenceManager(e){if(!this.redirectPersistenceManager){const t=e&&Ii(e)||this._popupRedirectResolver;ce(t,this,"argument-error"),this.redirectPersistenceManager=await So.create(this,[Ii(t._redirectPersistence)],"redirectUser"),this.redirectUser=await this.redirectPersistenceManager.getCurrentUser()}return this.redirectPersistenceManager}async _redirectUserForId(e){var t,r;return this._isInitialized&&await this.queue(async()=>{}),((t=this._currentUser)===null||t===void 0?void 0:t._redirectEventId)===e?this._currentUser:((r=this.redirectUser)===null||r===void 0?void 0:r._redirectEventId)===e?this.redirectUser:null}async _persistUserIfCurrent(e){if(e===this.currentUser)return this.queue(async()=>this.directlySetCurrentUser(e))}_notifyListenersIfCurrent(e){e===this.currentUser&&this.notifyAuthListeners()}_key(){return`${this.config.authDomain}:${this.config.apiKey}:${this.name}`}_startProactiveRefresh(){this.isProactiveRefreshEnabled=!0,this.currentUser&&this._currentUser._startProactiveRefresh()}_stopProactiveRefresh(){this.isProactiveRefreshEnabled=!1,this.currentUser&&this._currentUser._stopProactiveRefresh()}get _currentUser(){return this.currentUser}notifyAuthListeners(){var e,t;if(!this._isInitialized)return;this.idTokenSubscription.next(this.currentUser);const r=(t=(e=this.currentUser)===null||e===void 0?void 0:e.uid)!==null&&t!==void 0?t:null;this.lastNotifiedUid!==r&&(this.lastNotifiedUid=r,this.authStateSubscription.next(this.currentUser))}registerStateListener(e,t,r,i){if(this._deleted)return()=>{};const s=typeof t=="function"?t:t.next.bind(t);let a=!1;const l=this._isInitialized?Promise.resolve():this._initializationPromise;if(ce(l,this,"internal-error"),l.then(()=>{a||s(this.currentUser)}),typeof t=="function"){const c=e.addObserver(t,r,i);return()=>{a=!0,c()}}else{const c=e.addObserver(t);return()=>{a=!0,c()}}}async directlySetCurrentUser(e){this.currentUser&&this.currentUser!==e&&this._currentUser._stopProactiveRefresh(),e&&this.isProactiveRefreshEnabled&&e._startProactiveRefresh(),this.currentUser=e,e?await this.assertedPersistence.setCurrentUser(e):await this.assertedPersistence.removeCurrentUser()}queue(e){return this.operations=this.operations.then(e,e),this.operations}get assertedPersistence(){return ce(this.persistenceManager,this,"internal-error"),this.persistenceManager}_logFramework(e){!e||this.frameworks.includes(e)||(this.frameworks.push(e),this.frameworks.sort(),this.clientVersion=$_(this.config.clientPlatform,this._getFrameworks()))}_getFrameworks(){return this.frameworks}async _getAdditionalHeaders(){var e;const t={"X-Client-Version":this.clientVersion};this.app.options.appId&&(t["X-Firebase-gmpid"]=this.app.options.appId);const r=await((e=this.heartbeatServiceProvider.getImmediate({optional:!0}))===null||e===void 0?void 0:e.getHeartbeatsHeader());r&&(t["X-Firebase-Client"]=r);const i=await this._getAppCheckToken();return i&&(t["X-Firebase-AppCheck"]=i),t}async _getAppCheckToken(){var e;if(yr(this.app)&&this.app.settings.appCheckToken)return this.app.settings.appCheckToken;const t=await((e=this.appCheckServiceProvider.getImmediate({optional:!0}))===null||e===void 0?void 0:e.getToken());return t!=null&&t.error&&rA(`Error while retrieving App Check token: ${t.error}`),t==null?void 0:t.token}}function gs(n){return Bt(n)}class Xf{constructor(e){this.auth=e,this.observer=null,this.addObserver=HT(t=>this.observer=t)}get next(){return ce(this.observer,this.auth,"internal-error"),this.observer.next.bind(this.observer)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let nu={async loadJS(){throw new Error("Unable to load external scripts")},recaptchaV2Script:"",recaptchaEnterpriseScript:"",gapiScript:""};function PA(n){nu=n}function q_(n){return nu.loadJS(n)}function kA(){return nu.recaptchaEnterpriseScript}function NA(){return nu.gapiScript}function DA(n){return`__${n}${Math.floor(Math.random()*1e6)}`}class OA{constructor(){this.enterprise=new VA}ready(e){e()}execute(e,t){return Promise.resolve("token")}render(e,t){return""}}class VA{ready(e){e()}execute(e,t){return Promise.resolve("token")}render(e,t){return""}}const MA="recaptcha-enterprise",B_="NO_RECAPTCHA";class xA{constructor(e){this.type=MA,this.auth=gs(e)}async verify(e="verify",t=!1){async function r(s){if(!t){if(s.tenantId==null&&s._agentRecaptchaConfig!=null)return s._agentRecaptchaConfig.siteKey;if(s.tenantId!=null&&s._tenantRecaptchaConfigs[s.tenantId]!==void 0)return s._tenantRecaptchaConfigs[s.tenantId].siteKey}return new Promise(async(a,l)=>{fA(s,{clientType:"CLIENT_TYPE_WEB",version:"RECAPTCHA_ENTERPRISE"}).then(c=>{if(c.recaptchaKey===void 0)l(new Error("recaptcha Enterprise site key undefined"));else{const h=new dA(c);return s.tenantId==null?s._agentRecaptchaConfig=h:s._tenantRecaptchaConfigs[s.tenantId]=h,a(h.siteKey)}}).catch(c=>{l(c)})})}function i(s,a,l){const c=window.grecaptcha;Gf(c)?c.enterprise.ready(()=>{c.enterprise.execute(s,{action:e}).then(h=>{a(h)}).catch(()=>{a(B_)})}):l(Error("No reCAPTCHA enterprise script loaded."))}return this.auth.settings.appVerificationDisabledForTesting?new OA().execute("siteKey",{action:"verify"}):new Promise((s,a)=>{r(this.auth).then(l=>{if(!t&&Gf(window.grecaptcha))i(l,s,a);else{if(typeof window>"u"){a(new Error("RecaptchaVerifier is only supported in browser"));return}let c=kA();c.length!==0&&(c+=l),q_(c).then(()=>{i(l,s,a)}).catch(h=>{a(h)})}}).catch(l=>{a(l)})})}}async function Zf(n,e,t,r=!1,i=!1){const s=new xA(n);let a;if(i)a=B_;else try{a=await s.verify(t)}catch{a=await s.verify(t,!0)}const l=Object.assign({},e);if(t==="mfaSmsEnrollment"||t==="mfaSmsSignIn"){if("phoneEnrollmentInfo"in l){const c=l.phoneEnrollmentInfo.phoneNumber,h=l.phoneEnrollmentInfo.recaptchaToken;Object.assign(l,{phoneEnrollmentInfo:{phoneNumber:c,recaptchaToken:h,captchaResponse:a,clientType:"CLIENT_TYPE_WEB",recaptchaVersion:"RECAPTCHA_ENTERPRISE"}})}else if("phoneSignInInfo"in l){const c=l.phoneSignInInfo.recaptchaToken;Object.assign(l,{phoneSignInInfo:{recaptchaToken:c,captchaResponse:a,clientType:"CLIENT_TYPE_WEB",recaptchaVersion:"RECAPTCHA_ENTERPRISE"}})}return l}return r?Object.assign(l,{captchaResp:a}):Object.assign(l,{captchaResponse:a}),Object.assign(l,{clientType:"CLIENT_TYPE_WEB"}),Object.assign(l,{recaptchaVersion:"RECAPTCHA_ENTERPRISE"}),l}async function bc(n,e,t,r,i){var s;if(!((s=n._getRecaptchaConfig())===null||s===void 0)&&s.isProviderEnabled("EMAIL_PASSWORD_PROVIDER")){const a=await Zf(n,e,t,t==="getOobCode");return r(n,a)}else return r(n,e).catch(async a=>{if(a.code==="auth/missing-recaptcha-token"){console.log(`${t} is protected by reCAPTCHA Enterprise for this project. Automatically triggering the reCAPTCHA flow and restarting the flow.`);const l=await Zf(n,e,t,t==="getOobCode");return r(n,l)}else return Promise.reject(a)})}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function LA(n,e){const t=_d(n,"auth");if(t.isInitialized()){const i=t.getImmediate(),s=t.getOptions();if(Gs(s,e??{}))return i;Lr(i,"already-initialized")}return t.initialize({options:e})}function FA(n,e){const t=(e==null?void 0:e.persistence)||[],r=(Array.isArray(t)?t:[t]).map(Ii);e!=null&&e.errorMap&&n._updateErrorMap(e.errorMap),n._initializeWithPersistence(r,e==null?void 0:e.popupRedirectResolver)}function UA(n,e,t){const r=gs(n);ce(/^https?:\/\//.test(e),r,"invalid-emulator-scheme");const i=!1,s=z_(e),{host:a,port:l}=$A(e),c=l===null?"":`:${l}`,h={url:`${s}//${a}${c}/`},f=Object.freeze({host:a,port:l,protocol:s.replace(":",""),options:Object.freeze({disableWarnings:i})});if(!r._canInitEmulator){ce(r.config.emulator&&r.emulatorConfig,r,"emulator-config-failed"),ce(Gs(h,r.config.emulator)&&Gs(f,r.emulatorConfig),r,"emulator-config-failed");return}r.config.emulator=h,r.emulatorConfig=f,r.settings.appVerificationDisabledForTesting=!0,na(a)?(g_(`${s}//${a}${c}`),DT("Auth",!0)):qA()}function z_(n){const e=n.indexOf(":");return e<0?"":n.substr(0,e+1)}function $A(n){const e=z_(n),t=/(\/\/)?([^?#/]+)/.exec(n.substr(e.length));if(!t)return{host:"",port:null};const r=t[2].split("@").pop()||"",i=/^(\[[^\]]+\])(:|$)/.exec(r);if(i){const s=i[1];return{host:s,port:ep(r.substr(s.length+1))}}else{const[s,a]=r.split(":");return{host:s,port:ep(a)}}}function ep(n){if(!n)return null;const e=Number(n);return isNaN(e)?null:e}function qA(){function n(){const e=document.createElement("p"),t=e.style;e.innerText="Running in emulator mode. Do not use with production credentials.",t.position="fixed",t.width="100%",t.backgroundColor="#ffffff",t.border=".1em solid #000000",t.color="#b50000",t.bottom="0px",t.left="0px",t.margin="0px",t.zIndex="10000",t.textAlign="center",e.classList.add("firebase-emulator-warning"),document.body.appendChild(e)}typeof console<"u"&&typeof console.info=="function"&&console.info("WARNING: You are using the Auth Emulator, which is intended for local testing only.  Do not use with production credentials."),typeof window<"u"&&typeof document<"u"&&(document.readyState==="loading"?window.addEventListener("DOMContentLoaded",n):n())}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ad{constructor(e,t){this.providerId=e,this.signInMethod=t}toJSON(){return Ti("not implemented")}_getIdTokenResponse(e){return Ti("not implemented")}_linkToIdToken(e,t){return Ti("not implemented")}_getReauthenticationResolver(e){return Ti("not implemented")}}async function BA(n,e){return Vi(n,"POST","/v1/accounts:signUp",e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function zA(n,e){return yl(n,"POST","/v1/accounts:signInWithPassword",Oi(n,e))}async function jA(n,e){return Vi(n,"POST","/v1/accounts:sendOobCode",Oi(n,e))}async function HA(n,e){return jA(n,e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function WA(n,e){return yl(n,"POST","/v1/accounts:signInWithEmailLink",Oi(n,e))}async function GA(n,e){return yl(n,"POST","/v1/accounts:signInWithEmailLink",Oi(n,e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Xa extends Ad{constructor(e,t,r,i=null){super("password",r),this._email=e,this._password=t,this._tenantId=i}static _fromEmailAndPassword(e,t){return new Xa(e,t,"password")}static _fromEmailAndCode(e,t,r=null){return new Xa(e,t,"emailLink",r)}toJSON(){return{email:this._email,password:this._password,signInMethod:this.signInMethod,tenantId:this._tenantId}}static fromJSON(e){const t=typeof e=="string"?JSON.parse(e):e;if(t!=null&&t.email&&(t!=null&&t.password)){if(t.signInMethod==="password")return this._fromEmailAndPassword(t.email,t.password);if(t.signInMethod==="emailLink")return this._fromEmailAndCode(t.email,t.password,t.tenantId)}return null}async _getIdTokenResponse(e){switch(this.signInMethod){case"password":const t={returnSecureToken:!0,email:this._email,password:this._password,clientType:"CLIENT_TYPE_WEB"};return bc(e,t,"signInWithPassword",zA);case"emailLink":return WA(e,{email:this._email,oobCode:this._password});default:Lr(e,"internal-error")}}async _linkToIdToken(e,t){switch(this.signInMethod){case"password":const r={idToken:t,returnSecureToken:!0,email:this._email,password:this._password,clientType:"CLIENT_TYPE_WEB"};return bc(e,r,"signUpPassword",BA);case"emailLink":return GA(e,{idToken:t,email:this._email,oobCode:this._password});default:Lr(e,"internal-error")}}_getReauthenticationResolver(e){return this._getIdTokenResponse(e)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Ro(n,e){return yl(n,"POST","/v1/accounts:signInWithIdp",Oi(n,e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const KA="http://localhost";class Ks extends Ad{constructor(){super(...arguments),this.pendingToken=null}static _fromParams(e){const t=new Ks(e.providerId,e.signInMethod);return e.idToken||e.accessToken?(e.idToken&&(t.idToken=e.idToken),e.accessToken&&(t.accessToken=e.accessToken),e.nonce&&!e.pendingToken&&(t.nonce=e.nonce),e.pendingToken&&(t.pendingToken=e.pendingToken)):e.oauthToken&&e.oauthTokenSecret?(t.accessToken=e.oauthToken,t.secret=e.oauthTokenSecret):Lr("argument-error"),t}toJSON(){return{idToken:this.idToken,accessToken:this.accessToken,secret:this.secret,nonce:this.nonce,pendingToken:this.pendingToken,providerId:this.providerId,signInMethod:this.signInMethod}}static fromJSON(e){const t=typeof e=="string"?JSON.parse(e):e,{providerId:r,signInMethod:i}=t,s=yd(t,["providerId","signInMethod"]);if(!r||!i)return null;const a=new Ks(r,i);return a.idToken=s.idToken||void 0,a.accessToken=s.accessToken||void 0,a.secret=s.secret,a.nonce=s.nonce,a.pendingToken=s.pendingToken||null,a}_getIdTokenResponse(e){const t=this.buildRequest();return Ro(e,t)}_linkToIdToken(e,t){const r=this.buildRequest();return r.idToken=t,Ro(e,r)}_getReauthenticationResolver(e){const t=this.buildRequest();return t.autoCreate=!1,Ro(e,t)}buildRequest(){const e={requestUri:KA,returnSecureToken:!0};if(this.pendingToken)e.pendingToken=this.pendingToken;else{const t={};this.idToken&&(t.id_token=this.idToken),this.accessToken&&(t.access_token=this.accessToken),this.secret&&(t.oauth_token_secret=this.secret),t.providerId=this.providerId,this.nonce&&!this.pendingToken&&(t.nonce=this.nonce),e.postBody=_l(t)}return e}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function QA(n){switch(n){case"recoverEmail":return"RECOVER_EMAIL";case"resetPassword":return"PASSWORD_RESET";case"signIn":return"EMAIL_SIGNIN";case"verifyEmail":return"VERIFY_EMAIL";case"verifyAndChangeEmail":return"VERIFY_AND_CHANGE_EMAIL";case"revertSecondFactorAddition":return"REVERT_SECOND_FACTOR_ADDITION";default:return null}}function YA(n){const e=ka(Na(n)).link,t=e?ka(Na(e)).deep_link_id:null,r=ka(Na(n)).deep_link_id;return(r?ka(Na(r)).link:null)||r||t||e||n}class bd{constructor(e){var t,r,i,s,a,l;const c=ka(Na(e)),h=(t=c.apiKey)!==null&&t!==void 0?t:null,f=(r=c.oobCode)!==null&&r!==void 0?r:null,m=QA((i=c.mode)!==null&&i!==void 0?i:null);ce(h&&f&&m,"argument-error"),this.apiKey=h,this.operation=m,this.code=f,this.continueUrl=(s=c.continueUrl)!==null&&s!==void 0?s:null,this.languageCode=(a=c.lang)!==null&&a!==void 0?a:null,this.tenantId=(l=c.tenantId)!==null&&l!==void 0?l:null}static parseLink(e){const t=YA(e);try{return new bd(t)}catch{return null}}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class sa{constructor(){this.providerId=sa.PROVIDER_ID}static credential(e,t){return Xa._fromEmailAndPassword(e,t)}static credentialWithLink(e,t){const r=bd.parseLink(t);return ce(r,"argument-error"),Xa._fromEmailAndCode(e,r.code,r.tenantId)}}sa.PROVIDER_ID="password";sa.EMAIL_PASSWORD_SIGN_IN_METHOD="password";sa.EMAIL_LINK_SIGN_IN_METHOD="emailLink";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class j_{constructor(e){this.providerId=e,this.defaultLanguageCode=null,this.customParameters={}}setDefaultLanguage(e){this.defaultLanguageCode=e}setCustomParameters(e){return this.customParameters=e,this}getCustomParameters(){return this.customParameters}}/**
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
 */class El extends j_{constructor(){super(...arguments),this.scopes=[]}addScope(e){return this.scopes.includes(e)||this.scopes.push(e),this}getScopes(){return[...this.scopes]}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Hi extends El{constructor(){super("facebook.com")}static credential(e){return Ks._fromParams({providerId:Hi.PROVIDER_ID,signInMethod:Hi.FACEBOOK_SIGN_IN_METHOD,accessToken:e})}static credentialFromResult(e){return Hi.credentialFromTaggedObject(e)}static credentialFromError(e){return Hi.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e||!("oauthAccessToken"in e)||!e.oauthAccessToken)return null;try{return Hi.credential(e.oauthAccessToken)}catch{return null}}}Hi.FACEBOOK_SIGN_IN_METHOD="facebook.com";Hi.PROVIDER_ID="facebook.com";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Wi extends El{constructor(){super("google.com"),this.addScope("profile")}static credential(e,t){return Ks._fromParams({providerId:Wi.PROVIDER_ID,signInMethod:Wi.GOOGLE_SIGN_IN_METHOD,idToken:e,accessToken:t})}static credentialFromResult(e){return Wi.credentialFromTaggedObject(e)}static credentialFromError(e){return Wi.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e)return null;const{oauthIdToken:t,oauthAccessToken:r}=e;if(!t&&!r)return null;try{return Wi.credential(t,r)}catch{return null}}}Wi.GOOGLE_SIGN_IN_METHOD="google.com";Wi.PROVIDER_ID="google.com";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Gi extends El{constructor(){super("github.com")}static credential(e){return Ks._fromParams({providerId:Gi.PROVIDER_ID,signInMethod:Gi.GITHUB_SIGN_IN_METHOD,accessToken:e})}static credentialFromResult(e){return Gi.credentialFromTaggedObject(e)}static credentialFromError(e){return Gi.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e||!("oauthAccessToken"in e)||!e.oauthAccessToken)return null;try{return Gi.credential(e.oauthAccessToken)}catch{return null}}}Gi.GITHUB_SIGN_IN_METHOD="github.com";Gi.PROVIDER_ID="github.com";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ki extends El{constructor(){super("twitter.com")}static credential(e,t){return Ks._fromParams({providerId:Ki.PROVIDER_ID,signInMethod:Ki.TWITTER_SIGN_IN_METHOD,oauthToken:e,oauthTokenSecret:t})}static credentialFromResult(e){return Ki.credentialFromTaggedObject(e)}static credentialFromError(e){return Ki.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e)return null;const{oauthAccessToken:t,oauthTokenSecret:r}=e;if(!t||!r)return null;try{return Ki.credential(t,r)}catch{return null}}}Ki.TWITTER_SIGN_IN_METHOD="twitter.com";Ki.PROVIDER_ID="twitter.com";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function JA(n,e){return yl(n,"POST","/v1/accounts:signUp",Oi(n,e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Qs{constructor(e){this.user=e.user,this.providerId=e.providerId,this._tokenResponse=e._tokenResponse,this.operationType=e.operationType}static async _fromIdTokenResponse(e,t,r,i=!1){const s=await Or._fromIdTokenResponse(e,r,i),a=tp(r);return new Qs({user:s,providerId:a,_tokenResponse:r,operationType:t})}static async _forOperation(e,t,r){await e._updateTokensIfNecessary(r,!0);const i=tp(r);return new Qs({user:e,providerId:i,_tokenResponse:r,operationType:t})}}function tp(n){return n.providerId?n.providerId:"phoneNumber"in n?"phone":null}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Sc extends Di{constructor(e,t,r,i){var s;super(t.code,t.message),this.operationType=r,this.user=i,Object.setPrototypeOf(this,Sc.prototype),this.customData={appName:e.name,tenantId:(s=e.tenantId)!==null&&s!==void 0?s:void 0,_serverResponse:t.customData._serverResponse,operationType:r}}static _fromErrorAndOperation(e,t,r,i){return new Sc(e,t,r,i)}}function H_(n,e,t,r){return(e==="reauthenticate"?t._getReauthenticationResolver(n):t._getIdTokenResponse(n)).catch(s=>{throw s.code==="auth/multi-factor-auth-required"?Sc._fromErrorAndOperation(n,s,e,r):s})}async function XA(n,e,t=!1){const r=await Ja(n,e._linkToIdToken(n.auth,await n.getIdToken()),t);return Qs._forOperation(n,"link",r)}/**
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
 */async function ZA(n,e,t=!1){const{auth:r}=n;if(yr(r.app))return Promise.reject(bi(r));const i="reauthenticate";try{const s=await Ja(n,H_(r,i,e,n),t);ce(s.idToken,r,"internal-error");const a=Td(s.idToken);ce(a,r,"internal-error");const{sub:l}=a;return ce(n.uid===l,r,"user-mismatch"),Qs._forOperation(n,i,s)}catch(s){throw(s==null?void 0:s.code)==="auth/user-not-found"&&Lr(r,"user-mismatch"),s}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function W_(n,e,t=!1){if(yr(n.app))return Promise.reject(bi(n));const r="signIn",i=await H_(n,r,e),s=await Qs._fromIdTokenResponse(n,r,i);return t||await n._updateCurrentUser(s.user),s}async function e0(n,e){return W_(gs(n),e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function G_(n){const e=gs(n);e._getPasswordPolicyInternal()&&await e._updatePasswordPolicy()}async function t0(n,e,t){const r=gs(n);await bc(r,{requestType:"PASSWORD_RESET",email:e,clientType:"CLIENT_TYPE_WEB"},"getOobCode",HA)}async function n0(n,e,t){if(yr(n.app))return Promise.reject(bi(n));const r=gs(n),a=await bc(r,{returnSecureToken:!0,email:e,password:t,clientType:"CLIENT_TYPE_WEB"},"signUpPassword",JA).catch(c=>{throw c.code==="auth/password-does-not-meet-requirements"&&G_(n),c}),l=await Qs._fromIdTokenResponse(r,"signIn",a);return await r._updateCurrentUser(l.user),l}function K_(n,e,t){return yr(n.app)?Promise.reject(bi(n)):e0(Bt(n),sa.credential(e,t)).catch(async r=>{throw r.code==="auth/password-does-not-meet-requirements"&&G_(n),r})}function r0(n,e,t,r){return Bt(n).onIdTokenChanged(e,t,r)}function i0(n,e,t){return Bt(n).beforeAuthStateChanged(e,t)}function s0(n,e,t,r){return Bt(n).onAuthStateChanged(e,t,r)}function Q_(n){return Bt(n).signOut()}async function o0(n){return Bt(n).delete()}const Rc="__sak";/**
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
 */class Y_{constructor(e,t){this.storageRetriever=e,this.type=t}_isAvailable(){try{return this.storage?(this.storage.setItem(Rc,"1"),this.storage.removeItem(Rc),Promise.resolve(!0)):Promise.resolve(!1)}catch{return Promise.resolve(!1)}}_set(e,t){return this.storage.setItem(e,JSON.stringify(t)),Promise.resolve()}_get(e){const t=this.storage.getItem(e);return Promise.resolve(t?JSON.parse(t):null)}_remove(e){return this.storage.removeItem(e),Promise.resolve()}get storage(){return this.storageRetriever()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const a0=1e3,l0=10;class J_ extends Y_{constructor(){super(()=>window.localStorage,"LOCAL"),this.boundEventHandler=(e,t)=>this.onStorageEvent(e,t),this.listeners={},this.localCache={},this.pollTimer=null,this.fallbackToPolling=U_(),this._shouldAllowMigration=!0}forAllChangedKeys(e){for(const t of Object.keys(this.listeners)){const r=this.storage.getItem(t),i=this.localCache[t];r!==i&&e(t,i,r)}}onStorageEvent(e,t=!1){if(!e.key){this.forAllChangedKeys((a,l,c)=>{this.notifyListeners(a,c)});return}const r=e.key;t?this.detachListener():this.stopPolling();const i=()=>{const a=this.storage.getItem(r);!t&&this.localCache[r]===a||this.notifyListeners(r,a)},s=this.storage.getItem(r);IA()&&s!==e.newValue&&e.newValue!==e.oldValue?setTimeout(i,l0):i()}notifyListeners(e,t){this.localCache[e]=t;const r=this.listeners[e];if(r)for(const i of Array.from(r))i(t&&JSON.parse(t))}startPolling(){this.stopPolling(),this.pollTimer=setInterval(()=>{this.forAllChangedKeys((e,t,r)=>{this.onStorageEvent(new StorageEvent("storage",{key:e,oldValue:t,newValue:r}),!0)})},a0)}stopPolling(){this.pollTimer&&(clearInterval(this.pollTimer),this.pollTimer=null)}attachListener(){window.addEventListener("storage",this.boundEventHandler)}detachListener(){window.removeEventListener("storage",this.boundEventHandler)}_addListener(e,t){Object.keys(this.listeners).length===0&&(this.fallbackToPolling?this.startPolling():this.attachListener()),this.listeners[e]||(this.listeners[e]=new Set,this.localCache[e]=this.storage.getItem(e)),this.listeners[e].add(t)}_removeListener(e,t){this.listeners[e]&&(this.listeners[e].delete(t),this.listeners[e].size===0&&delete this.listeners[e]),Object.keys(this.listeners).length===0&&(this.detachListener(),this.stopPolling())}async _set(e,t){await super._set(e,t),this.localCache[e]=JSON.stringify(t)}async _get(e){const t=await super._get(e);return this.localCache[e]=JSON.stringify(t),t}async _remove(e){await super._remove(e),delete this.localCache[e]}}J_.type="LOCAL";const c0=J_;/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class X_ extends Y_{constructor(){super(()=>window.sessionStorage,"SESSION")}_addListener(e,t){}_removeListener(e,t){}}X_.type="SESSION";const Z_=X_;/**
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
 */function u0(n){return Promise.all(n.map(async e=>{try{return{fulfilled:!0,value:await e}}catch(t){return{fulfilled:!1,reason:t}}}))}/**
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
 */class ru{constructor(e){this.eventTarget=e,this.handlersMap={},this.boundEventHandler=this.handleEvent.bind(this)}static _getInstance(e){const t=this.receivers.find(i=>i.isListeningto(e));if(t)return t;const r=new ru(e);return this.receivers.push(r),r}isListeningto(e){return this.eventTarget===e}async handleEvent(e){const t=e,{eventId:r,eventType:i,data:s}=t.data,a=this.handlersMap[i];if(!(a!=null&&a.size))return;t.ports[0].postMessage({status:"ack",eventId:r,eventType:i});const l=Array.from(a).map(async h=>h(t.origin,s)),c=await u0(l);t.ports[0].postMessage({status:"done",eventId:r,eventType:i,response:c})}_subscribe(e,t){Object.keys(this.handlersMap).length===0&&this.eventTarget.addEventListener("message",this.boundEventHandler),this.handlersMap[e]||(this.handlersMap[e]=new Set),this.handlersMap[e].add(t)}_unsubscribe(e,t){this.handlersMap[e]&&t&&this.handlersMap[e].delete(t),(!t||this.handlersMap[e].size===0)&&delete this.handlersMap[e],Object.keys(this.handlersMap).length===0&&this.eventTarget.removeEventListener("message",this.boundEventHandler)}}ru.receivers=[];/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Sd(n="",e=10){let t="";for(let r=0;r<e;r++)t+=Math.floor(Math.random()*10);return n+t}/**
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
 */class h0{constructor(e){this.target=e,this.handlers=new Set}removeMessageHandler(e){e.messageChannel&&(e.messageChannel.port1.removeEventListener("message",e.onMessage),e.messageChannel.port1.close()),this.handlers.delete(e)}async _send(e,t,r=50){const i=typeof MessageChannel<"u"?new MessageChannel:null;if(!i)throw new Error("connection_unavailable");let s,a;return new Promise((l,c)=>{const h=Sd("",20);i.port1.start();const f=setTimeout(()=>{c(new Error("unsupported_event"))},r);a={messageChannel:i,onMessage(m){const _=m;if(_.data.eventId===h)switch(_.data.status){case"ack":clearTimeout(f),s=setTimeout(()=>{c(new Error("timeout"))},3e3);break;case"done":clearTimeout(s),l(_.data.response);break;default:clearTimeout(f),clearTimeout(s),c(new Error("invalid_response"));break}}},this.handlers.add(a),i.port1.addEventListener("message",a.onMessage),this.target.postMessage({eventType:e,eventId:h,data:t},[i.port2])}).finally(()=>{a&&this.removeMessageHandler(a)})}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function si(){return window}function d0(n){si().location.href=n}/**
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
 */function ev(){return typeof si().WorkerGlobalScope<"u"&&typeof si().importScripts=="function"}async function f0(){if(!(navigator!=null&&navigator.serviceWorker))return null;try{return(await navigator.serviceWorker.ready).active}catch{return null}}function p0(){var n;return((n=navigator==null?void 0:navigator.serviceWorker)===null||n===void 0?void 0:n.controller)||null}function m0(){return ev()?self:null}/**
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
 */const tv="firebaseLocalStorageDb",g0=1,Cc="firebaseLocalStorage",nv="fbase_key";class wl{constructor(e){this.request=e}toPromise(){return new Promise((e,t)=>{this.request.addEventListener("success",()=>{e(this.request.result)}),this.request.addEventListener("error",()=>{t(this.request.error)})})}}function iu(n,e){return n.transaction([Cc],e?"readwrite":"readonly").objectStore(Cc)}function _0(){const n=indexedDB.deleteDatabase(tv);return new wl(n).toPromise()}function Oh(){const n=indexedDB.open(tv,g0);return new Promise((e,t)=>{n.addEventListener("error",()=>{t(n.error)}),n.addEventListener("upgradeneeded",()=>{const r=n.result;try{r.createObjectStore(Cc,{keyPath:nv})}catch(i){t(i)}}),n.addEventListener("success",async()=>{const r=n.result;r.objectStoreNames.contains(Cc)?e(r):(r.close(),await _0(),e(await Oh()))})})}async function np(n,e,t){const r=iu(n,!0).put({[nv]:e,value:t});return new wl(r).toPromise()}async function v0(n,e){const t=iu(n,!1).get(e),r=await new wl(t).toPromise();return r===void 0?null:r.value}function rp(n,e){const t=iu(n,!0).delete(e);return new wl(t).toPromise()}const y0=800,E0=3;class rv{constructor(){this.type="LOCAL",this._shouldAllowMigration=!0,this.listeners={},this.localCache={},this.pollTimer=null,this.pendingWrites=0,this.receiver=null,this.sender=null,this.serviceWorkerReceiverAvailable=!1,this.activeServiceWorker=null,this._workerInitializationPromise=this.initializeServiceWorkerMessaging().then(()=>{},()=>{})}async _openDb(){return this.db?this.db:(this.db=await Oh(),this.db)}async _withRetries(e){let t=0;for(;;)try{const r=await this._openDb();return await e(r)}catch(r){if(t++>E0)throw r;this.db&&(this.db.close(),this.db=void 0)}}async initializeServiceWorkerMessaging(){return ev()?this.initializeReceiver():this.initializeSender()}async initializeReceiver(){this.receiver=ru._getInstance(m0()),this.receiver._subscribe("keyChanged",async(e,t)=>({keyProcessed:(await this._poll()).includes(t.key)})),this.receiver._subscribe("ping",async(e,t)=>["keyChanged"])}async initializeSender(){var e,t;if(this.activeServiceWorker=await f0(),!this.activeServiceWorker)return;this.sender=new h0(this.activeServiceWorker);const r=await this.sender._send("ping",{},800);r&&!((e=r[0])===null||e===void 0)&&e.fulfilled&&!((t=r[0])===null||t===void 0)&&t.value.includes("keyChanged")&&(this.serviceWorkerReceiverAvailable=!0)}async notifyServiceWorker(e){if(!(!this.sender||!this.activeServiceWorker||p0()!==this.activeServiceWorker))try{await this.sender._send("keyChanged",{key:e},this.serviceWorkerReceiverAvailable?800:50)}catch{}}async _isAvailable(){try{if(!indexedDB)return!1;const e=await Oh();return await np(e,Rc,"1"),await rp(e,Rc),!0}catch{}return!1}async _withPendingWrite(e){this.pendingWrites++;try{await e()}finally{this.pendingWrites--}}async _set(e,t){return this._withPendingWrite(async()=>(await this._withRetries(r=>np(r,e,t)),this.localCache[e]=t,this.notifyServiceWorker(e)))}async _get(e){const t=await this._withRetries(r=>v0(r,e));return this.localCache[e]=t,t}async _remove(e){return this._withPendingWrite(async()=>(await this._withRetries(t=>rp(t,e)),delete this.localCache[e],this.notifyServiceWorker(e)))}async _poll(){const e=await this._withRetries(i=>{const s=iu(i,!1).getAll();return new wl(s).toPromise()});if(!e)return[];if(this.pendingWrites!==0)return[];const t=[],r=new Set;if(e.length!==0)for(const{fbase_key:i,value:s}of e)r.add(i),JSON.stringify(this.localCache[i])!==JSON.stringify(s)&&(this.notifyListeners(i,s),t.push(i));for(const i of Object.keys(this.localCache))this.localCache[i]&&!r.has(i)&&(this.notifyListeners(i,null),t.push(i));return t}notifyListeners(e,t){this.localCache[e]=t;const r=this.listeners[e];if(r)for(const i of Array.from(r))i(t)}startPolling(){this.stopPolling(),this.pollTimer=setInterval(async()=>this._poll(),y0)}stopPolling(){this.pollTimer&&(clearInterval(this.pollTimer),this.pollTimer=null)}_addListener(e,t){Object.keys(this.listeners).length===0&&this.startPolling(),this.listeners[e]||(this.listeners[e]=new Set,this._get(e)),this.listeners[e].add(t)}_removeListener(e,t){this.listeners[e]&&(this.listeners[e].delete(t),this.listeners[e].size===0&&delete this.listeners[e]),Object.keys(this.listeners).length===0&&this.stopPolling()}}rv.type="LOCAL";const w0=rv;new vl(3e4,6e4);/**
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
 */function T0(n,e){return e?Ii(e):(ce(n._popupRedirectResolver,n,"argument-error"),n._popupRedirectResolver)}/**
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
 */class Rd extends Ad{constructor(e){super("custom","custom"),this.params=e}_getIdTokenResponse(e){return Ro(e,this._buildIdpRequest())}_linkToIdToken(e,t){return Ro(e,this._buildIdpRequest(t))}_getReauthenticationResolver(e){return Ro(e,this._buildIdpRequest())}_buildIdpRequest(e){const t={requestUri:this.params.requestUri,sessionId:this.params.sessionId,postBody:this.params.postBody,tenantId:this.params.tenantId,pendingToken:this.params.pendingToken,returnSecureToken:!0,returnIdpCredential:!0};return e&&(t.idToken=e),t}}function I0(n){return W_(n.auth,new Rd(n),n.bypassAuthState)}function A0(n){const{auth:e,user:t}=n;return ce(t,e,"internal-error"),ZA(t,new Rd(n),n.bypassAuthState)}async function b0(n){const{auth:e,user:t}=n;return ce(t,e,"internal-error"),XA(t,new Rd(n),n.bypassAuthState)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class iv{constructor(e,t,r,i,s=!1){this.auth=e,this.resolver=r,this.user=i,this.bypassAuthState=s,this.pendingPromise=null,this.eventManager=null,this.filter=Array.isArray(t)?t:[t]}execute(){return new Promise(async(e,t)=>{this.pendingPromise={resolve:e,reject:t};try{this.eventManager=await this.resolver._initialize(this.auth),await this.onExecution(),this.eventManager.registerConsumer(this)}catch(r){this.reject(r)}})}async onAuthEvent(e){const{urlResponse:t,sessionId:r,postBody:i,tenantId:s,error:a,type:l}=e;if(a){this.reject(a);return}const c={auth:this.auth,requestUri:t,sessionId:r,tenantId:s||void 0,postBody:i||void 0,user:this.user,bypassAuthState:this.bypassAuthState};try{this.resolve(await this.getIdpTask(l)(c))}catch(h){this.reject(h)}}onError(e){this.reject(e)}getIdpTask(e){switch(e){case"signInViaPopup":case"signInViaRedirect":return I0;case"linkViaPopup":case"linkViaRedirect":return b0;case"reauthViaPopup":case"reauthViaRedirect":return A0;default:Lr(this.auth,"internal-error")}}resolve(e){ki(this.pendingPromise,"Pending promise was never set"),this.pendingPromise.resolve(e),this.unregisterAndCleanUp()}reject(e){ki(this.pendingPromise,"Pending promise was never set"),this.pendingPromise.reject(e),this.unregisterAndCleanUp()}unregisterAndCleanUp(){this.eventManager&&this.eventManager.unregisterConsumer(this),this.pendingPromise=null,this.cleanUp()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const S0=new vl(2e3,1e4);class Eo extends iv{constructor(e,t,r,i,s){super(e,t,i,s),this.provider=r,this.authWindow=null,this.pollId=null,Eo.currentPopupAction&&Eo.currentPopupAction.cancel(),Eo.currentPopupAction=this}async executeNotNull(){const e=await this.execute();return ce(e,this.auth,"internal-error"),e}async onExecution(){ki(this.filter.length===1,"Popup operations only handle one event");const e=Sd();this.authWindow=await this.resolver._openPopup(this.auth,this.provider,this.filter[0],e),this.authWindow.associatedEvent=e,this.resolver._originValidation(this.auth).catch(t=>{this.reject(t)}),this.resolver._isIframeWebStorageSupported(this.auth,t=>{t||this.reject(ii(this.auth,"web-storage-unsupported"))}),this.pollUserCancellation()}get eventId(){var e;return((e=this.authWindow)===null||e===void 0?void 0:e.associatedEvent)||null}cancel(){this.reject(ii(this.auth,"cancelled-popup-request"))}cleanUp(){this.authWindow&&this.authWindow.close(),this.pollId&&window.clearTimeout(this.pollId),this.authWindow=null,this.pollId=null,Eo.currentPopupAction=null}pollUserCancellation(){const e=()=>{var t,r;if(!((r=(t=this.authWindow)===null||t===void 0?void 0:t.window)===null||r===void 0)&&r.closed){this.pollId=window.setTimeout(()=>{this.pollId=null,this.reject(ii(this.auth,"popup-closed-by-user"))},8e3);return}this.pollId=window.setTimeout(e,S0.get())};e()}}Eo.currentPopupAction=null;/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const R0="pendingRedirect",lc=new Map;class C0 extends iv{constructor(e,t,r=!1){super(e,["signInViaRedirect","linkViaRedirect","reauthViaRedirect","unknown"],t,void 0,r),this.eventId=null}async execute(){let e=lc.get(this.auth._key());if(!e){try{const r=await P0(this.resolver,this.auth)?await super.execute():null;e=()=>Promise.resolve(r)}catch(t){e=()=>Promise.reject(t)}lc.set(this.auth._key(),e)}return this.bypassAuthState||lc.set(this.auth._key(),()=>Promise.resolve(null)),e()}async onAuthEvent(e){if(e.type==="signInViaRedirect")return super.onAuthEvent(e);if(e.type==="unknown"){this.resolve(null);return}if(e.eventId){const t=await this.auth._redirectUserForId(e.eventId);if(t)return this.user=t,super.onAuthEvent(e);this.resolve(null)}}async onExecution(){}cleanUp(){}}async function P0(n,e){const t=D0(e),r=N0(n);if(!await r._isAvailable())return!1;const i=await r._get(t)==="true";return await r._remove(t),i}function k0(n,e){lc.set(n._key(),e)}function N0(n){return Ii(n._redirectPersistence)}function D0(n){return ac(R0,n.config.apiKey,n.name)}async function O0(n,e,t=!1){if(yr(n.app))return Promise.reject(bi(n));const r=gs(n),i=T0(r,e),a=await new C0(r,i,t).execute();return a&&!t&&(delete a.user._redirectEventId,await r._persistUserIfCurrent(a.user),await r._setRedirectUser(null,e)),a}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const V0=600*1e3;class M0{constructor(e){this.auth=e,this.cachedEventUids=new Set,this.consumers=new Set,this.queuedRedirectEvent=null,this.hasHandledPotentialRedirect=!1,this.lastProcessedEventTime=Date.now()}registerConsumer(e){this.consumers.add(e),this.queuedRedirectEvent&&this.isEventForConsumer(this.queuedRedirectEvent,e)&&(this.sendToConsumer(this.queuedRedirectEvent,e),this.saveEventToCache(this.queuedRedirectEvent),this.queuedRedirectEvent=null)}unregisterConsumer(e){this.consumers.delete(e)}onEvent(e){if(this.hasEventBeenHandled(e))return!1;let t=!1;return this.consumers.forEach(r=>{this.isEventForConsumer(e,r)&&(t=!0,this.sendToConsumer(e,r),this.saveEventToCache(e))}),this.hasHandledPotentialRedirect||!x0(e)||(this.hasHandledPotentialRedirect=!0,t||(this.queuedRedirectEvent=e,t=!0)),t}sendToConsumer(e,t){var r;if(e.error&&!sv(e)){const i=((r=e.error.code)===null||r===void 0?void 0:r.split("auth/")[1])||"internal-error";t.onError(ii(this.auth,i))}else t.onAuthEvent(e)}isEventForConsumer(e,t){const r=t.eventId===null||!!e.eventId&&e.eventId===t.eventId;return t.filter.includes(e.type)&&r}hasEventBeenHandled(e){return Date.now()-this.lastProcessedEventTime>=V0&&this.cachedEventUids.clear(),this.cachedEventUids.has(ip(e))}saveEventToCache(e){this.cachedEventUids.add(ip(e)),this.lastProcessedEventTime=Date.now()}}function ip(n){return[n.type,n.eventId,n.sessionId,n.tenantId].filter(e=>e).join("-")}function sv({type:n,error:e}){return n==="unknown"&&(e==null?void 0:e.code)==="auth/no-auth-event"}function x0(n){switch(n.type){case"signInViaRedirect":case"linkViaRedirect":case"reauthViaRedirect":return!0;case"unknown":return sv(n);default:return!1}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function L0(n,e={}){return Vi(n,"GET","/v1/projects",e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const F0=/^\d{1,3}\.\d{1,3}\.\d{1,3}\.\d{1,3}$/,U0=/^https?/;async function $0(n){if(n.config.emulator)return;const{authorizedDomains:e}=await L0(n);for(const t of e)try{if(q0(t))return}catch{}Lr(n,"unauthorized-domain")}function q0(n){const e=Nh(),{protocol:t,hostname:r}=new URL(e);if(n.startsWith("chrome-extension://")){const a=new URL(n);return a.hostname===""&&r===""?t==="chrome-extension:"&&n.replace("chrome-extension://","")===e.replace("chrome-extension://",""):t==="chrome-extension:"&&a.hostname===r}if(!U0.test(t))return!1;if(F0.test(n))return r===n;const i=n.replace(/\./g,"\\.");return new RegExp("^(.+\\."+i+"|"+i+")$","i").test(r)}/**
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
 */const B0=new vl(3e4,6e4);function sp(){const n=si().___jsl;if(n!=null&&n.H){for(const e of Object.keys(n.H))if(n.H[e].r=n.H[e].r||[],n.H[e].L=n.H[e].L||[],n.H[e].r=[...n.H[e].L],n.CP)for(let t=0;t<n.CP.length;t++)n.CP[t]=null}}function z0(n){return new Promise((e,t)=>{var r,i,s;function a(){sp(),gapi.load("gapi.iframes",{callback:()=>{e(gapi.iframes.getContext())},ontimeout:()=>{sp(),t(ii(n,"network-request-failed"))},timeout:B0.get()})}if(!((i=(r=si().gapi)===null||r===void 0?void 0:r.iframes)===null||i===void 0)&&i.Iframe)e(gapi.iframes.getContext());else if(!((s=si().gapi)===null||s===void 0)&&s.load)a();else{const l=DA("iframefcb");return si()[l]=()=>{gapi.load?a():t(ii(n,"network-request-failed"))},q_(`${NA()}?onload=${l}`).catch(c=>t(c))}}).catch(e=>{throw cc=null,e})}let cc=null;function j0(n){return cc=cc||z0(n),cc}/**
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
 */const H0=new vl(5e3,15e3),W0="__/auth/iframe",G0="emulator/auth/iframe",K0={style:{position:"absolute",top:"-100px",width:"1px",height:"1px"},"aria-hidden":"true",tabindex:"-1"},Q0=new Map([["identitytoolkit.googleapis.com","p"],["staging-identitytoolkit.sandbox.googleapis.com","s"],["test-identitytoolkit.sandbox.googleapis.com","t"]]);function Y0(n){const e=n.config;ce(e.authDomain,n,"auth-domain-config-required");const t=e.emulator?wd(e,G0):`https://${n.config.authDomain}/${W0}`,r={apiKey:e.apiKey,appName:n.name,v:ia},i=Q0.get(n.config.apiHost);i&&(r.eid=i);const s=n._getFrameworks();return s.length&&(r.fw=s.join(",")),`${t}?${_l(r).slice(1)}`}async function J0(n){const e=await j0(n),t=si().gapi;return ce(t,n,"internal-error"),e.open({where:document.body,url:Y0(n),messageHandlersFilter:t.iframes.CROSS_ORIGIN_IFRAMES_FILTER,attributes:K0,dontclear:!0},r=>new Promise(async(i,s)=>{await r.restyle({setHideOnLeave:!1});const a=ii(n,"network-request-failed"),l=si().setTimeout(()=>{s(a)},H0.get());function c(){si().clearTimeout(l),i(r)}r.ping(c).then(c,()=>{s(a)})}))}/**
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
 */const X0={location:"yes",resizable:"yes",statusbar:"yes",toolbar:"no"},Z0=500,eb=600,tb="_blank",nb="http://localhost";class op{constructor(e){this.window=e,this.associatedEvent=null}close(){if(this.window)try{this.window.close()}catch{}}}function rb(n,e,t,r=Z0,i=eb){const s=Math.max((window.screen.availHeight-i)/2,0).toString(),a=Math.max((window.screen.availWidth-r)/2,0).toString();let l="";const c=Object.assign(Object.assign({},X0),{width:r.toString(),height:i.toString(),top:s,left:a}),h=Vn().toLowerCase();t&&(l=V_(h)?tb:t),D_(h)&&(e=e||nb,c.scrollbars="yes");const f=Object.entries(c).reduce((_,[I,w])=>`${_}${I}=${w},`,"");if(TA(h)&&l!=="_self")return ib(e||"",l),new op(null);const m=window.open(e||"",l,f);ce(m,n,"popup-blocked");try{m.focus()}catch{}return new op(m)}function ib(n,e){const t=document.createElement("a");t.href=n,t.target=e;const r=document.createEvent("MouseEvent");r.initMouseEvent("click",!0,!0,window,1,0,0,0,0,!1,!1,!1,!1,1,null),t.dispatchEvent(r)}/**
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
 */const sb="__/auth/handler",ob="emulator/auth/handler",ab=encodeURIComponent("fac");async function ap(n,e,t,r,i,s){ce(n.config.authDomain,n,"auth-domain-config-required"),ce(n.config.apiKey,n,"invalid-api-key");const a={apiKey:n.config.apiKey,appName:n.name,authType:t,redirectUrl:r,v:ia,eventId:i};if(e instanceof j_){e.setDefaultLanguage(n.languageCode),a.providerId=e.providerId||"",jT(e.getCustomParameters())||(a.customParameters=JSON.stringify(e.getCustomParameters()));for(const[f,m]of Object.entries({}))a[f]=m}if(e instanceof El){const f=e.getScopes().filter(m=>m!=="");f.length>0&&(a.scopes=f.join(","))}n.tenantId&&(a.tid=n.tenantId);const l=a;for(const f of Object.keys(l))l[f]===void 0&&delete l[f];const c=await n._getAppCheckToken(),h=c?`#${ab}=${encodeURIComponent(c)}`:"";return`${lb(n)}?${_l(l).slice(1)}${h}`}function lb({config:n}){return n.emulator?wd(n,ob):`https://${n.authDomain}/${sb}`}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const th="webStorageSupport";class cb{constructor(){this.eventManagers={},this.iframes={},this.originValidationPromises={},this._redirectPersistence=Z_,this._completeRedirectFn=O0,this._overrideRedirectResult=k0}async _openPopup(e,t,r,i){var s;ki((s=this.eventManagers[e._key()])===null||s===void 0?void 0:s.manager,"_initialize() not called before _openPopup()");const a=await ap(e,t,r,Nh(),i);return rb(e,a,Sd())}async _openRedirect(e,t,r,i){await this._originValidation(e);const s=await ap(e,t,r,Nh(),i);return d0(s),new Promise(()=>{})}_initialize(e){const t=e._key();if(this.eventManagers[t]){const{manager:i,promise:s}=this.eventManagers[t];return i?Promise.resolve(i):(ki(s,"If manager is not set, promise should be"),s)}const r=this.initAndGetManager(e);return this.eventManagers[t]={promise:r},r.catch(()=>{delete this.eventManagers[t]}),r}async initAndGetManager(e){const t=await J0(e),r=new M0(e);return t.register("authEvent",i=>(ce(i==null?void 0:i.authEvent,e,"invalid-auth-event"),{status:r.onEvent(i.authEvent)?"ACK":"ERROR"}),gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER),this.eventManagers[e._key()]={manager:r},this.iframes[e._key()]=t,r}_isIframeWebStorageSupported(e,t){this.iframes[e._key()].send(th,{type:th},i=>{var s;const a=(s=i==null?void 0:i[0])===null||s===void 0?void 0:s[th];a!==void 0&&t(!!a),Lr(e,"internal-error")},gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER)}_originValidation(e){const t=e._key();return this.originValidationPromises[t]||(this.originValidationPromises[t]=$0(e)),this.originValidationPromises[t]}get _shouldInitProactively(){return U_()||O_()||Id()}}const ub=cb;var lp="@firebase/auth",cp="1.10.8";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class hb{constructor(e){this.auth=e,this.internalListeners=new Map}getUid(){var e;return this.assertAuthConfigured(),((e=this.auth.currentUser)===null||e===void 0?void 0:e.uid)||null}async getToken(e){return this.assertAuthConfigured(),await this.auth._initializationPromise,this.auth.currentUser?{accessToken:await this.auth.currentUser.getIdToken(e)}:null}addAuthTokenListener(e){if(this.assertAuthConfigured(),this.internalListeners.has(e))return;const t=this.auth.onIdTokenChanged(r=>{e((r==null?void 0:r.stsTokenManager.accessToken)||null)});this.internalListeners.set(e,t),this.updateProactiveRefresh()}removeAuthTokenListener(e){this.assertAuthConfigured();const t=this.internalListeners.get(e);t&&(this.internalListeners.delete(e),t(),this.updateProactiveRefresh())}assertAuthConfigured(){ce(this.auth._initializationPromise,"dependent-sdk-initialized-before-auth")}updateProactiveRefresh(){this.internalListeners.size>0?this.auth._startProactiveRefresh():this.auth._stopProactiveRefresh()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function db(n){switch(n){case"Node":return"node";case"ReactNative":return"rn";case"Worker":return"webworker";case"Cordova":return"cordova";case"WebExtension":return"web-extension";default:return}}function fb(n){cs(new Ci("auth",(e,{options:t})=>{const r=e.getProvider("app").getImmediate(),i=e.getProvider("heartbeat"),s=e.getProvider("app-check-internal"),{apiKey:a,authDomain:l}=r.options;ce(a&&!a.includes(":"),"invalid-api-key",{appName:r.name});const c={apiKey:a,authDomain:l,clientPlatform:n,apiHost:"identitytoolkit.googleapis.com",tokenApiHost:"securetoken.googleapis.com",apiScheme:"https",sdkClientVersion:$_(n)},h=new CA(r,i,s,c);return FA(h,t),h},"PUBLIC").setInstantiationMode("EXPLICIT").setInstanceCreatedCallback((e,t,r)=>{e.getProvider("auth-internal").initialize()})),cs(new Ci("auth-internal",e=>{const t=gs(e.getProvider("auth").getImmediate());return(r=>new hb(r))(t)},"PRIVATE").setInstantiationMode("EXPLICIT")),Ai(lp,cp,db(n)),Ai(lp,cp,"esm2017")}/**
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
 */const pb=300,mb=m_("authIdTokenMaxAge")||pb;let up=null;const gb=n=>async e=>{const t=e&&await e.getIdTokenResult(),r=t&&(new Date().getTime()-Date.parse(t.issuedAtTime))/1e3;if(r&&r>mb)return;const i=t==null?void 0:t.token;up!==i&&(up=i,await fetch(n,{method:i?"POST":"DELETE",headers:i?{Authorization:`Bearer ${i}`}:{}}))};function ov(n=E_()){const e=_d(n,"auth");if(e.isInitialized())return e.getImmediate();const t=LA(n,{popupRedirectResolver:ub,persistence:[w0,c0,Z_]}),r=m_("authTokenSyncURL");if(r&&typeof isSecureContext=="boolean"&&isSecureContext){const s=new URL(r,location.origin);if(location.origin===s.origin){const a=gb(s.toString());i0(t,a,()=>a(t.currentUser)),r0(t,l=>a(l))}}const i=PT("auth");return i&&UA(t,`http://${i}`),t}function _b(){var n,e;return(e=(n=document.getElementsByTagName("head"))===null||n===void 0?void 0:n[0])!==null&&e!==void 0?e:document}PA({loadJS(n){return new Promise((e,t)=>{const r=document.createElement("script");r.setAttribute("src",n),r.onload=e,r.onerror=i=>{const s=ii("internal-error");s.customData=i,t(s)},r.type="text/javascript",r.charset="UTF-8",_b().appendChild(r)})},gapiScript:"https://apis.google.com/js/api.js",recaptchaV2Script:"https://www.google.com/recaptcha/api.js",recaptchaEnterpriseScript:"https://www.google.com/recaptcha/enterprise.js?render="});fb("Browser");var vb="firebase",yb="11.10.0";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */Ai(vb,yb,"app");var hp=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{};/** @license
Copyright The Closure Library Authors.
SPDX-License-Identifier: Apache-2.0
*/var ns,av;(function(){var n;/** @license

 Copyright The Closure Library Authors.
 SPDX-License-Identifier: Apache-2.0
*/function e(A,v){function E(){}E.prototype=v.prototype,A.D=v.prototype,A.prototype=new E,A.prototype.constructor=A,A.C=function(S,C,P){for(var b=Array(arguments.length-2),Vt=2;Vt<arguments.length;Vt++)b[Vt-2]=arguments[Vt];return v.prototype[C].apply(S,b)}}function t(){this.blockSize=-1}function r(){this.blockSize=-1,this.blockSize=64,this.g=Array(4),this.B=Array(this.blockSize),this.o=this.h=0,this.s()}e(r,t),r.prototype.s=function(){this.g[0]=1732584193,this.g[1]=4023233417,this.g[2]=2562383102,this.g[3]=271733878,this.o=this.h=0};function i(A,v,E){E||(E=0);var S=Array(16);if(typeof v=="string")for(var C=0;16>C;++C)S[C]=v.charCodeAt(E++)|v.charCodeAt(E++)<<8|v.charCodeAt(E++)<<16|v.charCodeAt(E++)<<24;else for(C=0;16>C;++C)S[C]=v[E++]|v[E++]<<8|v[E++]<<16|v[E++]<<24;v=A.g[0],E=A.g[1],C=A.g[2];var P=A.g[3],b=v+(P^E&(C^P))+S[0]+3614090360&4294967295;v=E+(b<<7&4294967295|b>>>25),b=P+(C^v&(E^C))+S[1]+3905402710&4294967295,P=v+(b<<12&4294967295|b>>>20),b=C+(E^P&(v^E))+S[2]+606105819&4294967295,C=P+(b<<17&4294967295|b>>>15),b=E+(v^C&(P^v))+S[3]+3250441966&4294967295,E=C+(b<<22&4294967295|b>>>10),b=v+(P^E&(C^P))+S[4]+4118548399&4294967295,v=E+(b<<7&4294967295|b>>>25),b=P+(C^v&(E^C))+S[5]+1200080426&4294967295,P=v+(b<<12&4294967295|b>>>20),b=C+(E^P&(v^E))+S[6]+2821735955&4294967295,C=P+(b<<17&4294967295|b>>>15),b=E+(v^C&(P^v))+S[7]+4249261313&4294967295,E=C+(b<<22&4294967295|b>>>10),b=v+(P^E&(C^P))+S[8]+1770035416&4294967295,v=E+(b<<7&4294967295|b>>>25),b=P+(C^v&(E^C))+S[9]+2336552879&4294967295,P=v+(b<<12&4294967295|b>>>20),b=C+(E^P&(v^E))+S[10]+4294925233&4294967295,C=P+(b<<17&4294967295|b>>>15),b=E+(v^C&(P^v))+S[11]+2304563134&4294967295,E=C+(b<<22&4294967295|b>>>10),b=v+(P^E&(C^P))+S[12]+1804603682&4294967295,v=E+(b<<7&4294967295|b>>>25),b=P+(C^v&(E^C))+S[13]+4254626195&4294967295,P=v+(b<<12&4294967295|b>>>20),b=C+(E^P&(v^E))+S[14]+2792965006&4294967295,C=P+(b<<17&4294967295|b>>>15),b=E+(v^C&(P^v))+S[15]+1236535329&4294967295,E=C+(b<<22&4294967295|b>>>10),b=v+(C^P&(E^C))+S[1]+4129170786&4294967295,v=E+(b<<5&4294967295|b>>>27),b=P+(E^C&(v^E))+S[6]+3225465664&4294967295,P=v+(b<<9&4294967295|b>>>23),b=C+(v^E&(P^v))+S[11]+643717713&4294967295,C=P+(b<<14&4294967295|b>>>18),b=E+(P^v&(C^P))+S[0]+3921069994&4294967295,E=C+(b<<20&4294967295|b>>>12),b=v+(C^P&(E^C))+S[5]+3593408605&4294967295,v=E+(b<<5&4294967295|b>>>27),b=P+(E^C&(v^E))+S[10]+38016083&4294967295,P=v+(b<<9&4294967295|b>>>23),b=C+(v^E&(P^v))+S[15]+3634488961&4294967295,C=P+(b<<14&4294967295|b>>>18),b=E+(P^v&(C^P))+S[4]+3889429448&4294967295,E=C+(b<<20&4294967295|b>>>12),b=v+(C^P&(E^C))+S[9]+568446438&4294967295,v=E+(b<<5&4294967295|b>>>27),b=P+(E^C&(v^E))+S[14]+3275163606&4294967295,P=v+(b<<9&4294967295|b>>>23),b=C+(v^E&(P^v))+S[3]+4107603335&4294967295,C=P+(b<<14&4294967295|b>>>18),b=E+(P^v&(C^P))+S[8]+1163531501&4294967295,E=C+(b<<20&4294967295|b>>>12),b=v+(C^P&(E^C))+S[13]+2850285829&4294967295,v=E+(b<<5&4294967295|b>>>27),b=P+(E^C&(v^E))+S[2]+4243563512&4294967295,P=v+(b<<9&4294967295|b>>>23),b=C+(v^E&(P^v))+S[7]+1735328473&4294967295,C=P+(b<<14&4294967295|b>>>18),b=E+(P^v&(C^P))+S[12]+2368359562&4294967295,E=C+(b<<20&4294967295|b>>>12),b=v+(E^C^P)+S[5]+4294588738&4294967295,v=E+(b<<4&4294967295|b>>>28),b=P+(v^E^C)+S[8]+2272392833&4294967295,P=v+(b<<11&4294967295|b>>>21),b=C+(P^v^E)+S[11]+1839030562&4294967295,C=P+(b<<16&4294967295|b>>>16),b=E+(C^P^v)+S[14]+4259657740&4294967295,E=C+(b<<23&4294967295|b>>>9),b=v+(E^C^P)+S[1]+2763975236&4294967295,v=E+(b<<4&4294967295|b>>>28),b=P+(v^E^C)+S[4]+1272893353&4294967295,P=v+(b<<11&4294967295|b>>>21),b=C+(P^v^E)+S[7]+4139469664&4294967295,C=P+(b<<16&4294967295|b>>>16),b=E+(C^P^v)+S[10]+3200236656&4294967295,E=C+(b<<23&4294967295|b>>>9),b=v+(E^C^P)+S[13]+681279174&4294967295,v=E+(b<<4&4294967295|b>>>28),b=P+(v^E^C)+S[0]+3936430074&4294967295,P=v+(b<<11&4294967295|b>>>21),b=C+(P^v^E)+S[3]+3572445317&4294967295,C=P+(b<<16&4294967295|b>>>16),b=E+(C^P^v)+S[6]+76029189&4294967295,E=C+(b<<23&4294967295|b>>>9),b=v+(E^C^P)+S[9]+3654602809&4294967295,v=E+(b<<4&4294967295|b>>>28),b=P+(v^E^C)+S[12]+3873151461&4294967295,P=v+(b<<11&4294967295|b>>>21),b=C+(P^v^E)+S[15]+530742520&4294967295,C=P+(b<<16&4294967295|b>>>16),b=E+(C^P^v)+S[2]+3299628645&4294967295,E=C+(b<<23&4294967295|b>>>9),b=v+(C^(E|~P))+S[0]+4096336452&4294967295,v=E+(b<<6&4294967295|b>>>26),b=P+(E^(v|~C))+S[7]+1126891415&4294967295,P=v+(b<<10&4294967295|b>>>22),b=C+(v^(P|~E))+S[14]+2878612391&4294967295,C=P+(b<<15&4294967295|b>>>17),b=E+(P^(C|~v))+S[5]+4237533241&4294967295,E=C+(b<<21&4294967295|b>>>11),b=v+(C^(E|~P))+S[12]+1700485571&4294967295,v=E+(b<<6&4294967295|b>>>26),b=P+(E^(v|~C))+S[3]+2399980690&4294967295,P=v+(b<<10&4294967295|b>>>22),b=C+(v^(P|~E))+S[10]+4293915773&4294967295,C=P+(b<<15&4294967295|b>>>17),b=E+(P^(C|~v))+S[1]+2240044497&4294967295,E=C+(b<<21&4294967295|b>>>11),b=v+(C^(E|~P))+S[8]+1873313359&4294967295,v=E+(b<<6&4294967295|b>>>26),b=P+(E^(v|~C))+S[15]+4264355552&4294967295,P=v+(b<<10&4294967295|b>>>22),b=C+(v^(P|~E))+S[6]+2734768916&4294967295,C=P+(b<<15&4294967295|b>>>17),b=E+(P^(C|~v))+S[13]+1309151649&4294967295,E=C+(b<<21&4294967295|b>>>11),b=v+(C^(E|~P))+S[4]+4149444226&4294967295,v=E+(b<<6&4294967295|b>>>26),b=P+(E^(v|~C))+S[11]+3174756917&4294967295,P=v+(b<<10&4294967295|b>>>22),b=C+(v^(P|~E))+S[2]+718787259&4294967295,C=P+(b<<15&4294967295|b>>>17),b=E+(P^(C|~v))+S[9]+3951481745&4294967295,A.g[0]=A.g[0]+v&4294967295,A.g[1]=A.g[1]+(C+(b<<21&4294967295|b>>>11))&4294967295,A.g[2]=A.g[2]+C&4294967295,A.g[3]=A.g[3]+P&4294967295}r.prototype.u=function(A,v){v===void 0&&(v=A.length);for(var E=v-this.blockSize,S=this.B,C=this.h,P=0;P<v;){if(C==0)for(;P<=E;)i(this,A,P),P+=this.blockSize;if(typeof A=="string"){for(;P<v;)if(S[C++]=A.charCodeAt(P++),C==this.blockSize){i(this,S),C=0;break}}else for(;P<v;)if(S[C++]=A[P++],C==this.blockSize){i(this,S),C=0;break}}this.h=C,this.o+=v},r.prototype.v=function(){var A=Array((56>this.h?this.blockSize:2*this.blockSize)-this.h);A[0]=128;for(var v=1;v<A.length-8;++v)A[v]=0;var E=8*this.o;for(v=A.length-8;v<A.length;++v)A[v]=E&255,E/=256;for(this.u(A),A=Array(16),v=E=0;4>v;++v)for(var S=0;32>S;S+=8)A[E++]=this.g[v]>>>S&255;return A};function s(A,v){var E=l;return Object.prototype.hasOwnProperty.call(E,A)?E[A]:E[A]=v(A)}function a(A,v){this.h=v;for(var E=[],S=!0,C=A.length-1;0<=C;C--){var P=A[C]|0;S&&P==v||(E[C]=P,S=!1)}this.g=E}var l={};function c(A){return-128<=A&&128>A?s(A,function(v){return new a([v|0],0>v?-1:0)}):new a([A|0],0>A?-1:0)}function h(A){if(isNaN(A)||!isFinite(A))return m;if(0>A)return T(h(-A));for(var v=[],E=1,S=0;A>=E;S++)v[S]=A/E|0,E*=4294967296;return new a(v,0)}function f(A,v){if(A.length==0)throw Error("number format error: empty string");if(v=v||10,2>v||36<v)throw Error("radix out of range: "+v);if(A.charAt(0)=="-")return T(f(A.substring(1),v));if(0<=A.indexOf("-"))throw Error('number format error: interior "-" character');for(var E=h(Math.pow(v,8)),S=m,C=0;C<A.length;C+=8){var P=Math.min(8,A.length-C),b=parseInt(A.substring(C,C+P),v);8>P?(P=h(Math.pow(v,P)),S=S.j(P).add(h(b))):(S=S.j(E),S=S.add(h(b)))}return S}var m=c(0),_=c(1),I=c(16777216);n=a.prototype,n.m=function(){if(D(this))return-T(this).m();for(var A=0,v=1,E=0;E<this.g.length;E++){var S=this.i(E);A+=(0<=S?S:4294967296+S)*v,v*=4294967296}return A},n.toString=function(A){if(A=A||10,2>A||36<A)throw Error("radix out of range: "+A);if(w(this))return"0";if(D(this))return"-"+T(this).toString(A);for(var v=h(Math.pow(A,6)),E=this,S="";;){var C=ee(E,v).g;E=L(E,C.j(v));var P=((0<E.g.length?E.g[0]:E.h)>>>0).toString(A);if(E=C,w(E))return P+S;for(;6>P.length;)P="0"+P;S=P+S}},n.i=function(A){return 0>A?0:A<this.g.length?this.g[A]:this.h};function w(A){if(A.h!=0)return!1;for(var v=0;v<A.g.length;v++)if(A.g[v]!=0)return!1;return!0}function D(A){return A.h==-1}n.l=function(A){return A=L(this,A),D(A)?-1:w(A)?0:1};function T(A){for(var v=A.g.length,E=[],S=0;S<v;S++)E[S]=~A.g[S];return new a(E,~A.h).add(_)}n.abs=function(){return D(this)?T(this):this},n.add=function(A){for(var v=Math.max(this.g.length,A.g.length),E=[],S=0,C=0;C<=v;C++){var P=S+(this.i(C)&65535)+(A.i(C)&65535),b=(P>>>16)+(this.i(C)>>>16)+(A.i(C)>>>16);S=b>>>16,P&=65535,b&=65535,E[C]=b<<16|P}return new a(E,E[E.length-1]&-2147483648?-1:0)};function L(A,v){return A.add(T(v))}n.j=function(A){if(w(this)||w(A))return m;if(D(this))return D(A)?T(this).j(T(A)):T(T(this).j(A));if(D(A))return T(this.j(T(A)));if(0>this.l(I)&&0>A.l(I))return h(this.m()*A.m());for(var v=this.g.length+A.g.length,E=[],S=0;S<2*v;S++)E[S]=0;for(S=0;S<this.g.length;S++)for(var C=0;C<A.g.length;C++){var P=this.i(S)>>>16,b=this.i(S)&65535,Vt=A.i(C)>>>16,Mn=A.i(C)&65535;E[2*S+2*C]+=b*Mn,U(E,2*S+2*C),E[2*S+2*C+1]+=P*Mn,U(E,2*S+2*C+1),E[2*S+2*C+1]+=b*Vt,U(E,2*S+2*C+1),E[2*S+2*C+2]+=P*Vt,U(E,2*S+2*C+2)}for(S=0;S<v;S++)E[S]=E[2*S+1]<<16|E[2*S];for(S=v;S<2*v;S++)E[S]=0;return new a(E,0)};function U(A,v){for(;(A[v]&65535)!=A[v];)A[v+1]+=A[v]>>>16,A[v]&=65535,v++}function q(A,v){this.g=A,this.h=v}function ee(A,v){if(w(v))throw Error("division by zero");if(w(A))return new q(m,m);if(D(A))return v=ee(T(A),v),new q(T(v.g),T(v.h));if(D(v))return v=ee(A,T(v)),new q(T(v.g),v.h);if(30<A.g.length){if(D(A)||D(v))throw Error("slowDivide_ only works with positive integers.");for(var E=_,S=v;0>=S.l(A);)E=ge(E),S=ge(S);var C=W(E,1),P=W(S,1);for(S=W(S,2),E=W(E,2);!w(S);){var b=P.add(S);0>=b.l(A)&&(C=C.add(E),P=b),S=W(S,1),E=W(E,1)}return v=L(A,C.j(v)),new q(C,v)}for(C=m;0<=A.l(v);){for(E=Math.max(1,Math.floor(A.m()/v.m())),S=Math.ceil(Math.log(E)/Math.LN2),S=48>=S?1:Math.pow(2,S-48),P=h(E),b=P.j(v);D(b)||0<b.l(A);)E-=S,P=h(E),b=P.j(v);w(P)&&(P=_),C=C.add(P),A=L(A,b)}return new q(C,A)}n.A=function(A){return ee(this,A).h},n.and=function(A){for(var v=Math.max(this.g.length,A.g.length),E=[],S=0;S<v;S++)E[S]=this.i(S)&A.i(S);return new a(E,this.h&A.h)},n.or=function(A){for(var v=Math.max(this.g.length,A.g.length),E=[],S=0;S<v;S++)E[S]=this.i(S)|A.i(S);return new a(E,this.h|A.h)},n.xor=function(A){for(var v=Math.max(this.g.length,A.g.length),E=[],S=0;S<v;S++)E[S]=this.i(S)^A.i(S);return new a(E,this.h^A.h)};function ge(A){for(var v=A.g.length+1,E=[],S=0;S<v;S++)E[S]=A.i(S)<<1|A.i(S-1)>>>31;return new a(E,A.h)}function W(A,v){var E=v>>5;v%=32;for(var S=A.g.length-E,C=[],P=0;P<S;P++)C[P]=0<v?A.i(P+E)>>>v|A.i(P+E+1)<<32-v:A.i(P+E);return new a(C,A.h)}r.prototype.digest=r.prototype.v,r.prototype.reset=r.prototype.s,r.prototype.update=r.prototype.u,av=r,a.prototype.add=a.prototype.add,a.prototype.multiply=a.prototype.j,a.prototype.modulo=a.prototype.A,a.prototype.compare=a.prototype.l,a.prototype.toNumber=a.prototype.m,a.prototype.toString=a.prototype.toString,a.prototype.getBits=a.prototype.i,a.fromNumber=h,a.fromString=f,ns=a}).apply(typeof hp<"u"?hp:typeof self<"u"?self:typeof window<"u"?window:{});var Ql=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{};/** @license
Copyright The Closure Library Authors.
SPDX-License-Identifier: Apache-2.0
*/var lv,Da,cv,uc,Vh,uv,hv,dv;(function(){var n,e=typeof Object.defineProperties=="function"?Object.defineProperty:function(o,u,d){return o==Array.prototype||o==Object.prototype||(o[u]=d.value),o};function t(o){o=[typeof globalThis=="object"&&globalThis,o,typeof window=="object"&&window,typeof self=="object"&&self,typeof Ql=="object"&&Ql];for(var u=0;u<o.length;++u){var d=o[u];if(d&&d.Math==Math)return d}throw Error("Cannot find global object")}var r=t(this);function i(o,u){if(u)e:{var d=r;o=o.split(".");for(var g=0;g<o.length-1;g++){var N=o[g];if(!(N in d))break e;d=d[N]}o=o[o.length-1],g=d[o],u=u(g),u!=g&&u!=null&&e(d,o,{configurable:!0,writable:!0,value:u})}}function s(o,u){o instanceof String&&(o+="");var d=0,g=!1,N={next:function(){if(!g&&d<o.length){var M=d++;return{value:u(M,o[M]),done:!1}}return g=!0,{done:!0,value:void 0}}};return N[Symbol.iterator]=function(){return N},N}i("Array.prototype.values",function(o){return o||function(){return s(this,function(u,d){return d})}});/** @license

 Copyright The Closure Library Authors.
 SPDX-License-Identifier: Apache-2.0
*/var a=a||{},l=this||self;function c(o){var u=typeof o;return u=u!="object"?u:o?Array.isArray(o)?"array":u:"null",u=="array"||u=="object"&&typeof o.length=="number"}function h(o){var u=typeof o;return u=="object"&&o!=null||u=="function"}function f(o,u,d){return o.call.apply(o.bind,arguments)}function m(o,u,d){if(!o)throw Error();if(2<arguments.length){var g=Array.prototype.slice.call(arguments,2);return function(){var N=Array.prototype.slice.call(arguments);return Array.prototype.unshift.apply(N,g),o.apply(u,N)}}return function(){return o.apply(u,arguments)}}function _(o,u,d){return _=Function.prototype.bind&&Function.prototype.bind.toString().indexOf("native code")!=-1?f:m,_.apply(null,arguments)}function I(o,u){var d=Array.prototype.slice.call(arguments,1);return function(){var g=d.slice();return g.push.apply(g,arguments),o.apply(this,g)}}function w(o,u){function d(){}d.prototype=u.prototype,o.aa=u.prototype,o.prototype=new d,o.prototype.constructor=o,o.Qb=function(g,N,M){for(var z=Array(arguments.length-2),st=2;st<arguments.length;st++)z[st-2]=arguments[st];return u.prototype[N].apply(g,z)}}function D(o){const u=o.length;if(0<u){const d=Array(u);for(let g=0;g<u;g++)d[g]=o[g];return d}return[]}function T(o,u){for(let d=1;d<arguments.length;d++){const g=arguments[d];if(c(g)){const N=o.length||0,M=g.length||0;o.length=N+M;for(let z=0;z<M;z++)o[N+z]=g[z]}else o.push(g)}}class L{constructor(u,d){this.i=u,this.j=d,this.h=0,this.g=null}get(){let u;return 0<this.h?(this.h--,u=this.g,this.g=u.next,u.next=null):u=this.i(),u}}function U(o){return/^[\s\xa0]*$/.test(o)}function q(){var o=l.navigator;return o&&(o=o.userAgent)?o:""}function ee(o){return ee[" "](o),o}ee[" "]=function(){};var ge=q().indexOf("Gecko")!=-1&&!(q().toLowerCase().indexOf("webkit")!=-1&&q().indexOf("Edge")==-1)&&!(q().indexOf("Trident")!=-1||q().indexOf("MSIE")!=-1)&&q().indexOf("Edge")==-1;function W(o,u,d){for(const g in o)u.call(d,o[g],g,o)}function A(o,u){for(const d in o)u.call(void 0,o[d],d,o)}function v(o){const u={};for(const d in o)u[d]=o[d];return u}const E="constructor hasOwnProperty isPrototypeOf propertyIsEnumerable toLocaleString toString valueOf".split(" ");function S(o,u){let d,g;for(let N=1;N<arguments.length;N++){g=arguments[N];for(d in g)o[d]=g[d];for(let M=0;M<E.length;M++)d=E[M],Object.prototype.hasOwnProperty.call(g,d)&&(o[d]=g[d])}}function C(o){var u=1;o=o.split(":");const d=[];for(;0<u&&o.length;)d.push(o.shift()),u--;return o.length&&d.push(o.join(":")),d}function P(o){l.setTimeout(()=>{throw o},0)}function b(){var o=te;let u=null;return o.g&&(u=o.g,o.g=o.g.next,o.g||(o.h=null),u.next=null),u}class Vt{constructor(){this.h=this.g=null}add(u,d){const g=Mn.get();g.set(u,d),this.h?this.h.next=g:this.g=g,this.h=g}}var Mn=new L(()=>new fi,o=>o.reset());class fi{constructor(){this.next=this.g=this.h=null}set(u,d){this.h=u,this.g=d,this.next=null}reset(){this.next=this.g=this.h=null}}let $n,vn=!1,te=new Vt,jt=()=>{const o=l.Promise.resolve(void 0);$n=()=>{o.then(qn)}};var qn=()=>{for(var o;o=b();){try{o.h.call(o.g)}catch(d){P(d)}var u=Mn;u.j(o),100>u.h&&(u.h++,o.next=u.g,u.g=o)}vn=!1};function hr(){this.s=this.s,this.C=this.C}hr.prototype.s=!1,hr.prototype.ma=function(){this.s||(this.s=!0,this.N())},hr.prototype.N=function(){if(this.C)for(;this.C.length;)this.C.shift()()};function Ht(o,u){this.type=o,this.g=this.target=u,this.defaultPrevented=!1}Ht.prototype.h=function(){this.defaultPrevented=!0};var _s=(function(){if(!l.addEventListener||!Object.defineProperty)return!1;var o=!1,u=Object.defineProperty({},"passive",{get:function(){o=!0}});try{const d=()=>{};l.addEventListener("test",d,u),l.removeEventListener("test",d,u)}catch{}return o})();function Kn(o,u){if(Ht.call(this,o?o.type:""),this.relatedTarget=this.g=this.target=null,this.button=this.screenY=this.screenX=this.clientY=this.clientX=0,this.key="",this.metaKey=this.shiftKey=this.altKey=this.ctrlKey=!1,this.state=null,this.pointerId=0,this.pointerType="",this.i=null,o){var d=this.type=o.type,g=o.changedTouches&&o.changedTouches.length?o.changedTouches[0]:null;if(this.target=o.target||o.srcElement,this.g=u,u=o.relatedTarget){if(ge){e:{try{ee(u.nodeName);var N=!0;break e}catch{}N=!1}N||(u=null)}}else d=="mouseover"?u=o.fromElement:d=="mouseout"&&(u=o.toElement);this.relatedTarget=u,g?(this.clientX=g.clientX!==void 0?g.clientX:g.pageX,this.clientY=g.clientY!==void 0?g.clientY:g.pageY,this.screenX=g.screenX||0,this.screenY=g.screenY||0):(this.clientX=o.clientX!==void 0?o.clientX:o.pageX,this.clientY=o.clientY!==void 0?o.clientY:o.pageY,this.screenX=o.screenX||0,this.screenY=o.screenY||0),this.button=o.button,this.key=o.key||"",this.ctrlKey=o.ctrlKey,this.altKey=o.altKey,this.shiftKey=o.shiftKey,this.metaKey=o.metaKey,this.pointerId=o.pointerId||0,this.pointerType=typeof o.pointerType=="string"?o.pointerType:pi[o.pointerType]||"",this.state=o.state,this.i=o,o.defaultPrevented&&Kn.aa.h.call(this)}}w(Kn,Ht);var pi={2:"touch",3:"pen",4:"mouse"};Kn.prototype.h=function(){Kn.aa.h.call(this);var o=this.i;o.preventDefault?o.preventDefault():o.returnValue=!1};var Ir="closure_listenable_"+(1e6*Math.random()|0),dr=0;function $r(o,u,d,g,N){this.listener=o,this.proxy=null,this.src=u,this.type=d,this.capture=!!g,this.ha=N,this.key=++dr,this.da=this.fa=!1}function Ar(o){o.da=!0,o.listener=null,o.proxy=null,o.src=null,o.ha=null}function mi(o){this.src=o,this.g={},this.h=0}mi.prototype.add=function(o,u,d,g,N){var M=o.toString();o=this.g[M],o||(o=this.g[M]=[],this.h++);var z=qr(o,u,g,N);return-1<z?(u=o[z],d||(u.fa=!1)):(u=new $r(u,this.src,M,!!g,N),u.fa=d,o.push(u)),u};function Ee(o,u){var d=u.type;if(d in o.g){var g=o.g[d],N=Array.prototype.indexOf.call(g,u,void 0),M;(M=0<=N)&&Array.prototype.splice.call(g,N,1),M&&(Ar(u),o.g[d].length==0&&(delete o.g[d],o.h--))}}function qr(o,u,d,g){for(var N=0;N<o.length;++N){var M=o[N];if(!M.da&&M.listener==u&&M.capture==!!d&&M.ha==g)return N}return-1}var ro="closure_lm_"+(1e6*Math.random()|0),en={};function xi(o,u,d,g,N){if(Array.isArray(u)){for(var M=0;M<u.length;M++)xi(o,u[M],d,g,N);return null}return d=Es(d),o&&o[Ir]?o.K(u,d,h(g)?!!g.capture:!1,N):io(o,u,d,!1,g,N)}function io(o,u,d,g,N,M){if(!u)throw Error("Invalid event type");var z=h(N)?!!N.capture:!!N,st=ys(o);if(st||(o[ro]=st=new mi(o)),d=st.add(u,d,g,z,M),d.proxy)return d;if(g=gi(),d.proxy=g,g.src=o,g.listener=d,o.addEventListener)_s||(N=z),N===void 0&&(N=!1),o.addEventListener(u.toString(),g,N);else if(o.attachEvent)o.attachEvent(vs(u.toString()),g);else if(o.addListener&&o.removeListener)o.addListener(g);else throw Error("addEventListener and attachEvent are unavailable.");return d}function gi(){function o(d){return u.call(o.src,o.listener,d)}const u=oo;return o}function so(o,u,d,g,N){if(Array.isArray(u))for(var M=0;M<u.length;M++)so(o,u[M],d,g,N);else g=h(g)?!!g.capture:!!g,d=Es(d),o&&o[Ir]?(o=o.i,u=String(u).toString(),u in o.g&&(M=o.g[u],d=qr(M,d,g,N),-1<d&&(Ar(M[d]),Array.prototype.splice.call(M,d,1),M.length==0&&(delete o.g[u],o.h--)))):o&&(o=ys(o))&&(u=o.g[u.toString()],o=-1,u&&(o=qr(u,d,g,N)),(d=-1<o?u[o]:null)&&Li(d))}function Li(o){if(typeof o!="number"&&o&&!o.da){var u=o.src;if(u&&u[Ir])Ee(u.i,o);else{var d=o.type,g=o.proxy;u.removeEventListener?u.removeEventListener(d,g,o.capture):u.detachEvent?u.detachEvent(vs(d),g):u.addListener&&u.removeListener&&u.removeListener(g),(d=ys(u))?(Ee(d,o),d.h==0&&(d.src=null,u[ro]=null)):Ar(o)}}}function vs(o){return o in en?en[o]:en[o]="on"+o}function oo(o,u){if(o.da)o=!0;else{u=new Kn(u,this);var d=o.listener,g=o.ha||o.src;o.fa&&Li(o),o=d.call(g,u)}return o}function ys(o){return o=o[ro],o instanceof mi?o:null}var ca="__closure_events_fn_"+(1e9*Math.random()>>>0);function Es(o){return typeof o=="function"?o:(o[ca]||(o[ca]=function(u){return o.handleEvent(u)}),o[ca])}function Mt(){hr.call(this),this.i=new mi(this),this.M=this,this.F=null}w(Mt,hr),Mt.prototype[Ir]=!0,Mt.prototype.removeEventListener=function(o,u,d,g){so(this,o,u,d,g)};function tn(o,u){var d,g=o.F;if(g)for(d=[];g;g=g.F)d.push(g);if(o=o.M,g=u.type||u,typeof u=="string")u=new Ht(u,o);else if(u instanceof Ht)u.target=u.target||o;else{var N=u;u=new Ht(g,o),S(u,N)}if(N=!0,d)for(var M=d.length-1;0<=M;M--){var z=u.g=d[M];N=ws(z,g,!0,u)&&N}if(z=u.g=o,N=ws(z,g,!0,u)&&N,N=ws(z,g,!1,u)&&N,d)for(M=0;M<d.length;M++)z=u.g=d[M],N=ws(z,g,!1,u)&&N}Mt.prototype.N=function(){if(Mt.aa.N.call(this),this.i){var o=this.i,u;for(u in o.g){for(var d=o.g[u],g=0;g<d.length;g++)Ar(d[g]);delete o.g[u],o.h--}}this.F=null},Mt.prototype.K=function(o,u,d,g){return this.i.add(String(o),u,!1,d,g)},Mt.prototype.L=function(o,u,d,g){return this.i.add(String(o),u,!0,d,g)};function ws(o,u,d,g){if(u=o.i.g[String(u)],!u)return!0;u=u.concat();for(var N=!0,M=0;M<u.length;++M){var z=u[M];if(z&&!z.da&&z.capture==d){var st=z.listener,Kt=z.ha||z.src;z.fa&&Ee(o.i,z),N=st.call(Kt,g)!==!1&&N}}return N&&!g.defaultPrevented}function Ts(o,u,d){if(typeof o=="function")d&&(o=_(o,d));else if(o&&typeof o.handleEvent=="function")o=_(o.handleEvent,o);else throw Error("Invalid listener argument");return 2147483647<Number(u)?-1:l.setTimeout(o,u||0)}function kl(o){o.g=Ts(()=>{o.g=null,o.i&&(o.i=!1,kl(o))},o.l);const u=o.h;o.h=null,o.m.apply(null,u)}class Su extends hr{constructor(u,d){super(),this.m=u,this.l=d,this.h=null,this.i=!1,this.g=null}j(u){this.h=arguments,this.g?this.i=!0:kl(this)}N(){super.N(),this.g&&(l.clearTimeout(this.g),this.g=null,this.i=!1,this.h=null)}}function Is(o){hr.call(this),this.h=o,this.g={}}w(Is,hr);var Nl=[];function As(o){W(o.g,function(u,d){this.g.hasOwnProperty(d)&&Li(u)},o),o.g={}}Is.prototype.N=function(){Is.aa.N.call(this),As(this)},Is.prototype.handleEvent=function(){throw Error("EventHandler.handleEvent not implemented")};var ua=l.JSON.stringify,Ru=l.JSON.parse,Dl=class{stringify(o){return l.JSON.stringify(o,void 0)}parse(o){return l.JSON.parse(o,void 0)}};function ha(){}ha.prototype.h=null;function Ol(o){return o.h||(o.h=o.i())}function Vl(){}var bs={OPEN:"a",kb:"b",Ja:"c",wb:"d"};function da(){Ht.call(this,"d")}w(da,Ht);function fa(){Ht.call(this,"c")}w(fa,Ht);var Br={},Ml=null;function Wt(){return Ml=Ml||new Mt}Br.La="serverreachability";function xl(o){Ht.call(this,Br.La,o)}w(xl,Ht);function Ss(o){const u=Wt();tn(u,new xl(u))}Br.STAT_EVENT="statevent";function Ll(o,u){Ht.call(this,Br.STAT_EVENT,o),this.stat=u}w(Ll,Ht);function yn(o){const u=Wt();tn(u,new Ll(u,o))}Br.Ma="timingevent";function En(o,u){Ht.call(this,Br.Ma,o),this.size=u}w(En,Ht);function zr(o,u){if(typeof o!="function")throw Error("Fn must not be null and must be a function");return l.setTimeout(function(){o()},u)}function bn(){this.g=!0}bn.prototype.xa=function(){this.g=!1};function Cu(o,u,d,g,N,M){o.info(function(){if(o.g)if(M)for(var z="",st=M.split("&"),Kt=0;Kt<st.length;Kt++){var $e=st[Kt].split("=");if(1<$e.length){var on=$e[0];$e=$e[1];var fn=on.split("_");z=2<=fn.length&&fn[1]=="type"?z+(on+"="+$e+"&"):z+(on+"=redacted&")}}else z=null;else z=M;return"XMLHTTP REQ ("+g+") [attempt "+N+"]: "+u+`
`+d+`
`+z})}function Pu(o,u,d,g,N,M,z){o.info(function(){return"XMLHTTP RESP ("+g+") [ attempt "+N+"]: "+u+`
`+d+`
`+M+" "+z})}function _i(o,u,d,g){o.info(function(){return"XMLHTTP TEXT ("+u+"): "+Nu(o,d)+(g?" "+g:"")})}function ku(o,u){o.info(function(){return"TIMEOUT: "+u})}bn.prototype.info=function(){};function Nu(o,u){if(!o.g)return u;if(!u)return null;try{var d=JSON.parse(u);if(d){for(o=0;o<d.length;o++)if(Array.isArray(d[o])){var g=d[o];if(!(2>g.length)){var N=g[1];if(Array.isArray(N)&&!(1>N.length)){var M=N[0];if(M!="noop"&&M!="stop"&&M!="close")for(var z=1;z<N.length;z++)N[z]=""}}}}return ua(d)}catch{return u}}var Rs={NO_ERROR:0,gb:1,tb:2,sb:3,nb:4,rb:5,ub:6,Ia:7,TIMEOUT:8,xb:9},pa={lb:"complete",Hb:"success",Ja:"error",Ia:"abort",zb:"ready",Ab:"readystatechange",TIMEOUT:"timeout",vb:"incrementaldata",yb:"progress",ob:"downloadprogress",Pb:"uploadprogress"},ma;function ao(){}w(ao,ha),ao.prototype.g=function(){return new XMLHttpRequest},ao.prototype.i=function(){return{}},ma=new ao;function jr(o,u,d,g){this.j=o,this.i=u,this.l=d,this.R=g||1,this.U=new Is(this),this.I=45e3,this.H=null,this.o=!1,this.m=this.A=this.v=this.L=this.F=this.S=this.B=null,this.D=[],this.g=null,this.C=0,this.s=this.u=null,this.X=-1,this.J=!1,this.O=0,this.M=null,this.W=this.K=this.T=this.P=!1,this.h=new Fl}function Fl(){this.i=null,this.g="",this.h=!1}var Ul={},lo={};function ga(o,u,d){o.L=1,o.v=me(at(u)),o.m=d,o.P=!0,_a(o,null)}function _a(o,u){o.F=Date.now(),co(o),o.A=at(o.v);var d=o.A,g=o.R;Array.isArray(g)||(g=[String(g)]),Sr(d.i,"t",g),o.C=0,d=o.j.J,o.h=new Fl,o.g=de(o.j,d?u:null,!o.m),0<o.O&&(o.M=new Su(_(o.Y,o,o.g),o.O)),u=o.U,d=o.g,g=o.ca;var N="readystatechange";Array.isArray(N)||(N&&(Nl[0]=N.toString()),N=Nl);for(var M=0;M<N.length;M++){var z=xi(d,N[M],g||u.handleEvent,!1,u.h||u);if(!z)break;u.g[z.key]=z}u=o.H?v(o.H):{},o.m?(o.u||(o.u="POST"),u["Content-Type"]="application/x-www-form-urlencoded",o.g.ea(o.A,o.u,o.m,u)):(o.u="GET",o.g.ea(o.A,o.u,null,u)),Ss(),Cu(o.i,o.u,o.A,o.l,o.R,o.m)}jr.prototype.ca=function(o){o=o.target;const u=this.M;u&&ze(o)==3?u.j():this.Y(o)},jr.prototype.Y=function(o){try{if(o==this.g)e:{const fn=ze(this.g);var u=this.g.Ba();const $i=this.g.Z();if(!(3>fn)&&(fn!=3||this.g&&(this.h.h||this.g.oa()||Ut(this.g)))){this.J||fn!=4||u==7||(u==8||0>=$i?Ss(3):Ss(2)),$(this);var d=this.g.Z();this.X=d;t:if($l(this)){var g=Ut(this.g);o="";var N=g.length,M=ze(this.g)==4;if(!this.h.i){if(typeof TextDecoder>"u"){ie(this),re(this);var z="";break t}this.h.i=new l.TextDecoder}for(u=0;u<N;u++)this.h.h=!0,o+=this.h.i.decode(g[u],{stream:!(M&&u==N-1)});g.length=0,this.h.g+=o,this.C=0,z=this.h.g}else z=this.g.oa();if(this.o=d==200,Pu(this.i,this.u,this.A,this.l,this.R,fn,d),this.o){if(this.T&&!this.K){t:{if(this.g){var st,Kt=this.g;if((st=Kt.g?Kt.g.getResponseHeader("X-HTTP-Initial-Response"):null)&&!U(st)){var $e=st;break t}}$e=null}if(d=$e)_i(this.i,this.l,d,"Initial handshake response via X-HTTP-Initial-Response"),this.K=!0,Y(this,d);else{this.o=!1,this.s=3,yn(12),ie(this),re(this);break e}}if(this.P){d=!0;let tr;for(;!this.J&&this.C<z.length;)if(tr=Du(this,z),tr==lo){fn==4&&(this.s=4,yn(14),d=!1),_i(this.i,this.l,null,"[Incomplete Response]");break}else if(tr==Ul){this.s=4,yn(15),_i(this.i,this.l,z,"[Invalid Chunk]"),d=!1;break}else _i(this.i,this.l,tr,null),Y(this,tr);if($l(this)&&this.C!=0&&(this.h.g=this.h.g.slice(this.C),this.C=0),fn!=4||z.length!=0||this.h.h||(this.s=1,yn(16),d=!1),this.o=this.o&&d,!d)_i(this.i,this.l,z,"[Invalid Chunked Response]"),ie(this),re(this);else if(0<z.length&&!this.W){this.W=!0;var on=this.j;on.g==this&&on.ba&&!on.M&&(on.j.info("Great, no buffering proxy detected. Bytes received: "+z.length),Hr(on),on.M=!0,yn(11))}}else _i(this.i,this.l,z,null),Y(this,z);fn==4&&ie(this),this.o&&!this.J&&(fn==4?Cr(this.j,this):(this.o=!1,co(this)))}else Gt(this.g),d==400&&0<z.indexOf("Unknown SID")?(this.s=3,yn(12)):(this.s=0,yn(13)),ie(this),re(this)}}}catch{}finally{}};function $l(o){return o.g?o.u=="GET"&&o.L!=2&&o.j.Ca:!1}function Du(o,u){var d=o.C,g=u.indexOf(`
`,d);return g==-1?lo:(d=Number(u.substring(d,g)),isNaN(d)?Ul:(g+=1,g+d>u.length?lo:(u=u.slice(g,g+d),o.C=g+d,u)))}jr.prototype.cancel=function(){this.J=!0,ie(this)};function co(o){o.S=Date.now()+o.I,O(o,o.I)}function O(o,u){if(o.B!=null)throw Error("WatchDog timer not null");o.B=zr(_(o.ba,o),u)}function $(o){o.B&&(l.clearTimeout(o.B),o.B=null)}jr.prototype.ba=function(){this.B=null;const o=Date.now();0<=o-this.S?(ku(this.i,this.A),this.L!=2&&(Ss(),yn(17)),ie(this),this.s=2,re(this)):O(this,this.S-o)};function re(o){o.j.G==0||o.J||Cr(o.j,o)}function ie(o){$(o);var u=o.M;u&&typeof u.ma=="function"&&u.ma(),o.M=null,As(o.U),o.g&&(u=o.g,o.g=null,u.abort(),u.ma())}function Y(o,u){try{var d=o.j;if(d.G!=0&&(d.g==o||ht(d.h,o))){if(!o.K&&ht(d.h,o)&&d.G==3){try{var g=d.Da.g.parse(u)}catch{g=null}if(Array.isArray(g)&&g.length==3){var N=g;if(N[0]==0){e:if(!d.u){if(d.g)if(d.g.F+3e3<o.F)Wr(d),sn(d);else break e;Zn(d),yn(18)}}else d.za=N[1],0<d.za-d.T&&37500>N[2]&&d.F&&d.v==0&&!d.C&&(d.C=zr(_(d.Za,d),6e3));if(1>=It(d.h)&&d.ca){try{d.ca()}catch{}d.ca=void 0}}else Sn(d,11)}else if((o.K||d.g==o)&&Wr(d),!U(u))for(N=d.Da.g.parse(u),u=0;u<N.length;u++){let $e=N[u];if(d.T=$e[0],$e=$e[1],d.G==2)if($e[0]=="c"){d.K=$e[1],d.ia=$e[2];const on=$e[3];on!=null&&(d.la=on,d.j.info("VER="+d.la));const fn=$e[4];fn!=null&&(d.Aa=fn,d.j.info("SVER="+d.Aa));const $i=$e[5];$i!=null&&typeof $i=="number"&&0<$i&&(g=1.5*$i,d.L=g,d.j.info("backChannelRequestTimeoutMs_="+g)),g=d;const tr=o.g;if(tr){const uo=tr.g?tr.g.getResponseHeader("X-Client-Wire-Protocol"):null;if(uo){var M=g.h;M.g||uo.indexOf("spdy")==-1&&uo.indexOf("quic")==-1&&uo.indexOf("h2")==-1||(M.j=M.l,M.g=new Set,M.h&&(tt(M,M.h),M.h=null))}if(g.D){const Ou=tr.g?tr.g.getResponseHeader("X-HTTP-Session-Id"):null;Ou&&(g.ya=Ou,K(g.I,g.D,Ou))}}d.G=3,d.l&&d.l.ua(),d.ba&&(d.R=Date.now()-o.F,d.j.info("Handshake RTT: "+d.R+"ms")),g=d;var z=o;if(g.qa=he(g,g.J?g.ia:null,g.W),z.K){dt(g.h,z);var st=z,Kt=g.L;Kt&&(st.I=Kt),st.B&&($(st),co(st)),g.g=z}else Bn(g);0<d.i.length&&Xn(d)}else $e[0]!="stop"&&$e[0]!="close"||Sn(d,7);else d.G==3&&($e[0]=="stop"||$e[0]=="close"?$e[0]=="stop"?Sn(d,7):Yn(d):$e[0]!="noop"&&d.l&&d.l.ta($e),d.v=0)}}Ss(4)}catch{}}var et=class{constructor(o,u){this.g=o,this.map=u}};function Je(o){this.l=o||10,l.PerformanceNavigationTiming?(o=l.performance.getEntriesByType("navigation"),o=0<o.length&&(o[0].nextHopProtocol=="hq"||o[0].nextHopProtocol=="h2")):o=!!(l.chrome&&l.chrome.loadTimes&&l.chrome.loadTimes()&&l.chrome.loadTimes().wasFetchedViaSpdy),this.j=o?this.l:1,this.g=null,1<this.j&&(this.g=new Set),this.h=null,this.i=[]}function ke(o){return o.h?!0:o.g?o.g.size>=o.j:!1}function It(o){return o.h?1:o.g?o.g.size:0}function ht(o,u){return o.h?o.h==u:o.g?o.g.has(u):!1}function tt(o,u){o.g?o.g.add(u):o.h=u}function dt(o,u){o.h&&o.h==u?o.h=null:o.g&&o.g.has(u)&&o.g.delete(u)}Je.prototype.cancel=function(){if(this.i=Pe(this),this.h)this.h.cancel(),this.h=null;else if(this.g&&this.g.size!==0){for(const o of this.g.values())o.cancel();this.g.clear()}};function Pe(o){if(o.h!=null)return o.i.concat(o.h.D);if(o.g!=null&&o.g.size!==0){let u=o.i;for(const d of o.g.values())u=u.concat(d.D);return u}return D(o.i)}function We(o){if(o.V&&typeof o.V=="function")return o.V();if(typeof Map<"u"&&o instanceof Map||typeof Set<"u"&&o instanceof Set)return Array.from(o.values());if(typeof o=="string")return o.split("");if(c(o)){for(var u=[],d=o.length,g=0;g<d;g++)u.push(o[g]);return u}u=[],d=0;for(g in o)u[d++]=o[g];return u}function vt(o){if(o.na&&typeof o.na=="function")return o.na();if(!o.V||typeof o.V!="function"){if(typeof Map<"u"&&o instanceof Map)return Array.from(o.keys());if(!(typeof Set<"u"&&o instanceof Set)){if(c(o)||typeof o=="string"){var u=[];o=o.length;for(var d=0;d<o;d++)u.push(d);return u}u=[],d=0;for(const g in o)u[d++]=g;return u}}}function At(o,u){if(o.forEach&&typeof o.forEach=="function")o.forEach(u,void 0);else if(c(o)||typeof o=="string")Array.prototype.forEach.call(o,u,void 0);else for(var d=vt(o),g=We(o),N=g.length,M=0;M<N;M++)u.call(void 0,g[M],d&&d[M],o)}var yt=RegExp("^(?:([^:/?#.]+):)?(?://(?:([^\\\\/?#]*)@)?([^\\\\/?#]*?)(?::([0-9]+))?(?=[\\\\/?#]|$))?([^?#]+)?(?:\\?([^#]*))?(?:#([\\s\\S]*))?$");function xt(o,u){if(o){o=o.split("&");for(var d=0;d<o.length;d++){var g=o[d].indexOf("="),N=null;if(0<=g){var M=o[d].substring(0,g);N=o[d].substring(g+1)}else M=o[d];u(M,N?decodeURIComponent(N.replace(/\+/g," ")):"")}}}function gt(o){if(this.g=this.o=this.j="",this.s=null,this.m=this.l="",this.h=!1,o instanceof gt){this.h=o.h,Lt(this,o.j),this.o=o.o,this.g=o.g,Ne(this,o.s),this.l=o.l;var u=o.i,d=new pt;d.i=u.i,u.g&&(d.g=new Map(u.g),d.h=u.h),se(this,d),this.m=o.m}else o&&(u=String(o).match(yt))?(this.h=!1,Lt(this,u[1]||"",!0),this.o=Qe(u[2]||""),this.g=Qe(u[3]||"",!0),Ne(this,u[4]),this.l=Qe(u[5]||"",!0),se(this,u[6]||"",!0),this.m=Qe(u[7]||"")):(this.h=!1,this.i=new pt(null,this.h))}gt.prototype.toString=function(){var o=[],u=this.j;u&&o.push(Xe(u,bt,!0),":");var d=this.g;return(d||u=="file")&&(o.push("//"),(u=this.o)&&o.push(Xe(u,bt,!0),"@"),o.push(encodeURIComponent(String(d)).replace(/%25([0-9a-fA-F]{2})/g,"%$1")),d=this.s,d!=null&&o.push(":",String(d))),(d=this.l)&&(this.g&&d.charAt(0)!="/"&&o.push("/"),o.push(Xe(d,d.charAt(0)=="/"?Ie:Pt,!0))),(d=this.i.toString())&&o.push("?",d),(d=this.m)&&o.push("#",Xe(d,_t)),o.join("")};function at(o){return new gt(o)}function Lt(o,u,d){o.j=d?Qe(u,!0):u,o.j&&(o.j=o.j.replace(/:$/,""))}function Ne(o,u){if(u){if(u=Number(u),isNaN(u)||0>u)throw Error("Bad port number "+u);o.s=u}else o.s=null}function se(o,u,d){u instanceof pt?(o.i=u,Ae(o.i,o.h)):(d||(u=Xe(u,qe)),o.i=new pt(u,o.h))}function K(o,u,d){o.i.set(u,d)}function me(o){return K(o,"zx",Math.floor(2147483648*Math.random()).toString(36)+Math.abs(Math.floor(2147483648*Math.random())^Date.now()).toString(36)),o}function Qe(o,u){return o?u?decodeURI(o.replace(/%25/g,"%2525")):decodeURIComponent(o):""}function Xe(o,u,d){return typeof o=="string"?(o=encodeURI(o).replace(u,ft),d&&(o=o.replace(/%25([0-9a-fA-F]{2})/g,"%$1")),o):null}function ft(o){return o=o.charCodeAt(0),"%"+(o>>4&15).toString(16)+(o&15).toString(16)}var bt=/[#\/\?@]/g,Pt=/[#\?:]/g,Ie=/[#\?]/g,qe=/[#\?@]/g,_t=/#/g;function pt(o,u){this.h=this.g=null,this.i=o||null,this.j=!!u}function Ft(o){o.g||(o.g=new Map,o.h=0,o.i&&xt(o.i,function(u,d){o.add(decodeURIComponent(u.replace(/\+/g," ")),d)}))}n=pt.prototype,n.add=function(o,u){Ft(this),this.i=null,o=Be(this,o);var d=this.g.get(o);return d||this.g.set(o,d=[]),d.push(u),this.h+=1,this};function Qn(o,u){Ft(o),u=Be(o,u),o.g.has(u)&&(o.i=null,o.h-=o.g.get(u).length,o.g.delete(u))}function br(o,u){return Ft(o),u=Be(o,u),o.g.has(u)}n.forEach=function(o,u){Ft(this),this.g.forEach(function(d,g){d.forEach(function(N){o.call(u,N,g,this)},this)},this)},n.na=function(){Ft(this);const o=Array.from(this.g.values()),u=Array.from(this.g.keys()),d=[];for(let g=0;g<u.length;g++){const N=o[g];for(let M=0;M<N.length;M++)d.push(u[g])}return d},n.V=function(o){Ft(this);let u=[];if(typeof o=="string")br(this,o)&&(u=u.concat(this.g.get(Be(this,o))));else{o=Array.from(this.g.values());for(let d=0;d<o.length;d++)u=u.concat(o[d])}return u},n.set=function(o,u){return Ft(this),this.i=null,o=Be(this,o),br(this,o)&&(this.h-=this.g.get(o).length),this.g.set(o,[u]),this.h+=1,this},n.get=function(o,u){return o?(o=this.V(o),0<o.length?String(o[0]):u):u};function Sr(o,u,d){Qn(o,u),0<d.length&&(o.i=null,o.g.set(Be(o,u),D(d)),o.h+=d.length)}n.toString=function(){if(this.i)return this.i;if(!this.g)return"";const o=[],u=Array.from(this.g.keys());for(var d=0;d<u.length;d++){var g=u[d];const M=encodeURIComponent(String(g)),z=this.V(g);for(g=0;g<z.length;g++){var N=M;z[g]!==""&&(N+="="+encodeURIComponent(String(z[g]))),o.push(N)}}return this.i=o.join("&")};function Be(o,u){return u=String(u),o.j&&(u=u.toLowerCase()),u}function Ae(o,u){u&&!o.j&&(Ft(o),o.i=null,o.g.forEach(function(d,g){var N=g.toLowerCase();g!=N&&(Qn(this,g),Sr(this,N,d))},o)),o.j=u}function xe(o,u){const d=new bn;if(l.Image){const g=new Image;g.onload=I(ue,d,"TestLoadImage: loaded",!0,u,g),g.onerror=I(ue,d,"TestLoadImage: error",!1,u,g),g.onabort=I(ue,d,"TestLoadImage: abort",!1,u,g),g.ontimeout=I(ue,d,"TestLoadImage: timeout",!1,u,g),l.setTimeout(function(){g.ontimeout&&g.ontimeout()},1e4),g.src=o}else u(!1)}function Le(o,u){const d=new bn,g=new AbortController,N=setTimeout(()=>{g.abort(),ue(d,"TestPingServer: timeout",!1,u)},1e4);fetch(o,{signal:g.signal}).then(M=>{clearTimeout(N),M.ok?ue(d,"TestPingServer: ok",!0,u):ue(d,"TestPingServer: server error",!1,u)}).catch(()=>{clearTimeout(N),ue(d,"TestPingServer: error",!1,u)})}function ue(o,u,d,g,N){try{N&&(N.onload=null,N.onerror=null,N.onabort=null,N.ontimeout=null),g(d)}catch{}}function St(){this.g=new Dl}function Rt(o,u,d){const g=d||"";try{At(o,function(N,M){let z=N;h(N)&&(z=ua(N)),u.push(g+M+"="+encodeURIComponent(z))})}catch(N){throw u.push(g+"type="+encodeURIComponent("_badmap")),N}}function mt(o){this.l=o.Ub||null,this.j=o.eb||!1}w(mt,ha),mt.prototype.g=function(){return new nt(this.l,this.j)},mt.prototype.i=(function(o){return function(){return o}})({});function nt(o,u){Mt.call(this),this.D=o,this.o=u,this.m=void 0,this.status=this.readyState=0,this.responseType=this.responseText=this.response=this.statusText="",this.onreadystatechange=null,this.u=new Headers,this.h=null,this.B="GET",this.A="",this.g=!1,this.v=this.j=this.l=null}w(nt,Mt),n=nt.prototype,n.open=function(o,u){if(this.readyState!=0)throw this.abort(),Error("Error reopening a connection");this.B=o,this.A=u,this.readyState=1,Ot(this)},n.send=function(o){if(this.readyState!=1)throw this.abort(),Error("need to call open() first. ");this.g=!0;const u={headers:this.u,method:this.B,credentials:this.m,cache:void 0};o&&(u.body=o),(this.D||l).fetch(new Request(this.A,u)).then(this.Sa.bind(this),this.ga.bind(this))},n.abort=function(){this.response=this.responseText="",this.u=new Headers,this.status=0,this.j&&this.j.cancel("Request was aborted.").catch(()=>{}),1<=this.readyState&&this.g&&this.readyState!=4&&(this.g=!1,kt(this)),this.readyState=0},n.Sa=function(o){if(this.g&&(this.l=o,this.h||(this.status=this.l.status,this.statusText=this.l.statusText,this.h=o.headers,this.readyState=2,Ot(this)),this.g&&(this.readyState=3,Ot(this),this.g)))if(this.responseType==="arraybuffer")o.arrayBuffer().then(this.Qa.bind(this),this.ga.bind(this));else if(typeof l.ReadableStream<"u"&&"body"in o){if(this.j=o.body.getReader(),this.o){if(this.responseType)throw Error('responseType must be empty for "streamBinaryChunks" mode responses.');this.response=[]}else this.response=this.responseText="",this.v=new TextDecoder;Et(this)}else o.text().then(this.Ra.bind(this),this.ga.bind(this))};function Et(o){o.j.read().then(o.Pa.bind(o)).catch(o.ga.bind(o))}n.Pa=function(o){if(this.g){if(this.o&&o.value)this.response.push(o.value);else if(!this.o){var u=o.value?o.value:new Uint8Array(0);(u=this.v.decode(u,{stream:!o.done}))&&(this.response=this.responseText+=u)}o.done?kt(this):Ot(this),this.readyState==3&&Et(this)}},n.Ra=function(o){this.g&&(this.response=this.responseText=o,kt(this))},n.Qa=function(o){this.g&&(this.response=o,kt(this))},n.ga=function(){this.g&&kt(this)};function kt(o){o.readyState=4,o.l=null,o.j=null,o.v=null,Ot(o)}n.setRequestHeader=function(o,u){this.u.append(o,u)},n.getResponseHeader=function(o){return this.h&&this.h.get(o.toLowerCase())||""},n.getAllResponseHeaders=function(){if(!this.h)return"";const o=[],u=this.h.entries();for(var d=u.next();!d.done;)d=d.value,o.push(d[0]+": "+d[1]),d=u.next();return o.join(`\r
`)};function Ot(o){o.onreadystatechange&&o.onreadystatechange.call(o)}Object.defineProperty(nt.prototype,"withCredentials",{get:function(){return this.m==="include"},set:function(o){this.m=o?"include":"same-origin"}});function cn(o){let u="";return W(o,function(d,g){u+=g,u+=":",u+=d,u+=`\r
`}),u}function nn(o,u,d){e:{for(g in d){var g=!1;break e}g=!0}g||(d=cn(d),typeof o=="string"?d!=null&&encodeURIComponent(String(d)):K(o,u,d))}function Te(o){Mt.call(this),this.headers=new Map,this.o=o||null,this.h=!1,this.v=this.g=null,this.D="",this.m=0,this.l="",this.j=this.B=this.u=this.A=!1,this.I=null,this.H="",this.J=!1}w(Te,Mt);var rt=/^https?$/i,De=["POST","PUT"];n=Te.prototype,n.Ha=function(o){this.J=o},n.ea=function(o,u,d,g){if(this.g)throw Error("[goog.net.XhrIo] Object is active with another request="+this.D+"; newUri="+o);u=u?u.toUpperCase():"GET",this.D=o,this.l="",this.m=0,this.A=!1,this.h=!0,this.g=this.o?this.o.g():ma.g(),this.v=this.o?Ol(this.o):Ol(ma),this.g.onreadystatechange=_(this.Ea,this);try{this.B=!0,this.g.open(u,String(o),!0),this.B=!1}catch(M){un(this,M);return}if(o=d||"",d=new Map(this.headers),g)if(Object.getPrototypeOf(g)===Object.prototype)for(var N in g)d.set(N,g[N]);else if(typeof g.keys=="function"&&typeof g.get=="function")for(const M of g.keys())d.set(M,g.get(M));else throw Error("Unknown input type for opt_headers: "+String(g));g=Array.from(d.keys()).find(M=>M.toLowerCase()=="content-type"),N=l.FormData&&o instanceof l.FormData,!(0<=Array.prototype.indexOf.call(De,u,void 0))||g||N||d.set("Content-Type","application/x-www-form-urlencoded;charset=utf-8");for(const[M,z]of d)this.g.setRequestHeader(M,z);this.H&&(this.g.responseType=this.H),"withCredentials"in this.g&&this.g.withCredentials!==this.J&&(this.g.withCredentials=this.J);try{we(this),this.u=!0,this.g.send(o),this.u=!1}catch(M){un(this,M)}};function un(o,u){o.h=!1,o.g&&(o.j=!0,o.g.abort(),o.j=!1),o.l=u,o.m=5,X(o),lt(o)}function X(o){o.A||(o.A=!0,tn(o,"complete"),tn(o,"error"))}n.abort=function(o){this.g&&this.h&&(this.h=!1,this.j=!0,this.g.abort(),this.j=!1,this.m=o||7,tn(this,"complete"),tn(this,"abort"),lt(this))},n.N=function(){this.g&&(this.h&&(this.h=!1,this.j=!0,this.g.abort(),this.j=!1),lt(this,!0)),Te.aa.N.call(this)},n.Ea=function(){this.s||(this.B||this.u||this.j?Fe(this):this.bb())},n.bb=function(){Fe(this)};function Fe(o){if(o.h&&typeof a<"u"&&(!o.v[1]||ze(o)!=4||o.Z()!=2)){if(o.u&&ze(o)==4)Ts(o.Ea,0,o);else if(tn(o,"readystatechange"),ze(o)==4){o.h=!1;try{const z=o.Z();e:switch(z){case 200:case 201:case 202:case 204:case 206:case 304:case 1223:var u=!0;break e;default:u=!1}var d;if(!(d=u)){var g;if(g=z===0){var N=String(o.D).match(yt)[1]||null;!N&&l.self&&l.self.location&&(N=l.self.location.protocol.slice(0,-1)),g=!rt.test(N?N.toLowerCase():"")}d=g}if(d)tn(o,"complete"),tn(o,"success");else{o.m=6;try{var M=2<ze(o)?o.g.statusText:""}catch{M=""}o.l=M+" ["+o.Z()+"]",X(o)}}finally{lt(o)}}}}function lt(o,u){if(o.g){we(o);const d=o.g,g=o.v[0]?()=>{}:null;o.g=null,o.v=null,u||tn(o,"ready");try{d.onreadystatechange=g}catch{}}}function we(o){o.I&&(l.clearTimeout(o.I),o.I=null)}n.isActive=function(){return!!this.g};function ze(o){return o.g?o.g.readyState:0}n.Z=function(){try{return 2<ze(this)?this.g.status:-1}catch{return-1}},n.oa=function(){try{return this.g?this.g.responseText:""}catch{return""}},n.Oa=function(o){if(this.g){var u=this.g.responseText;return o&&u.indexOf(o)==0&&(u=u.substring(o.length)),Ru(u)}};function Ut(o){try{if(!o.g)return null;if("response"in o.g)return o.g.response;switch(o.H){case"":case"text":return o.g.responseText;case"arraybuffer":if("mozResponseArrayBuffer"in o.g)return o.g.mozResponseArrayBuffer}return null}catch{return null}}function Gt(o){const u={};o=(o.g&&2<=ze(o)&&o.g.getAllResponseHeaders()||"").split(`\r
`);for(let g=0;g<o.length;g++){if(U(o[g]))continue;var d=C(o[g]);const N=d[0];if(d=d[1],typeof d!="string")continue;d=d.trim();const M=u[N]||[];u[N]=M,M.push(d)}A(u,function(g){return g.join(", ")})}n.Ba=function(){return this.m},n.Ka=function(){return typeof this.l=="string"?this.l:String(this.l)};function rn(o,u,d){return d&&d.internalChannelParams&&d.internalChannelParams[o]||u}function xn(o){this.Aa=0,this.i=[],this.j=new bn,this.ia=this.qa=this.I=this.W=this.g=this.ya=this.D=this.H=this.m=this.S=this.o=null,this.Ya=this.U=0,this.Va=rn("failFast",!1,o),this.F=this.C=this.u=this.s=this.l=null,this.X=!0,this.za=this.T=-1,this.Y=this.v=this.B=0,this.Ta=rn("baseRetryDelayMs",5e3,o),this.cb=rn("retryDelaySeedMs",1e4,o),this.Wa=rn("forwardChannelMaxRetries",2,o),this.wa=rn("forwardChannelRequestTimeoutMs",2e4,o),this.pa=o&&o.xmlHttpFactory||void 0,this.Xa=o&&o.Tb||void 0,this.Ca=o&&o.useFetchStreams||!1,this.L=void 0,this.J=o&&o.supportsCrossDomainXhr||!1,this.K="",this.h=new Je(o&&o.concurrentRequestLimit),this.Da=new St,this.P=o&&o.fastHandshake||!1,this.O=o&&o.encodeInitMessageHeaders||!1,this.P&&this.O&&(this.O=!1),this.Ua=o&&o.Rb||!1,o&&o.xa&&this.j.xa(),o&&o.forceLongPolling&&(this.X=!1),this.ba=!this.P&&this.X&&o&&o.detectBufferingProxy||!1,this.ja=void 0,o&&o.longPollingTimeout&&0<o.longPollingTimeout&&(this.ja=o.longPollingTimeout),this.ca=void 0,this.R=0,this.M=!1,this.ka=this.A=null}n=xn.prototype,n.la=8,n.G=1,n.connect=function(o,u,d,g){yn(0),this.W=o,this.H=u||{},d&&g!==void 0&&(this.H.OSID=d,this.H.OAID=g),this.F=this.X,this.I=he(this,null,this.W),Xn(this)};function Yn(o){if(Jn(o),o.G==3){var u=o.U++,d=at(o.I);if(K(d,"SID",o.K),K(d,"RID",u),K(d,"TYPE","terminate"),Ge(o,d),u=new jr(o,o.j,u),u.L=2,u.v=me(at(d)),d=!1,l.navigator&&l.navigator.sendBeacon)try{d=l.navigator.sendBeacon(u.v.toString(),"")}catch{}!d&&l.Image&&(new Image().src=u.v,d=!0),d||(u.g=de(u.j,null),u.g.ea(u.v)),u.F=Date.now(),co(u)}Ui(o)}function sn(o){o.g&&(Hr(o),o.g.cancel(),o.g=null)}function Jn(o){sn(o),o.u&&(l.clearTimeout(o.u),o.u=null),Wr(o),o.h.cancel(),o.s&&(typeof o.s=="number"&&l.clearTimeout(o.s),o.s=null)}function Xn(o){if(!ke(o.h)&&!o.s){o.s=!0;var u=o.Ga;$n||jt(),vn||($n(),vn=!0),te.add(u,o),o.B=0}}function Rr(o,u){return It(o.h)>=o.h.j-(o.s?1:0)?!1:o.s?(o.i=u.D.concat(o.i),!0):o.G==1||o.G==2||o.B>=(o.Va?0:o.Wa)?!1:(o.s=zr(_(o.Ga,o,u),Gr(o,o.B)),o.B++,!0)}n.Ga=function(o){if(this.s)if(this.s=null,this.G==1){if(!o){this.U=Math.floor(1e5*Math.random()),o=this.U++;const N=new jr(this,this.j,o);let M=this.o;if(this.S&&(M?(M=v(M),S(M,this.S)):M=this.S),this.m!==null||this.O||(N.H=M,M=null),this.P)e:{for(var u=0,d=0;d<this.i.length;d++){t:{var g=this.i[d];if("__data__"in g.map&&(g=g.map.__data__,typeof g=="string")){g=g.length;break t}g=void 0}if(g===void 0)break;if(u+=g,4096<u){u=d;break e}if(u===4096||d===this.i.length-1){u=d+1;break e}}u=1e3}else u=1e3;u=hn(this,N,u),d=at(this.I),K(d,"RID",o),K(d,"CVER",22),this.D&&K(d,"X-HTTP-Session-Id",this.D),Ge(this,d),M&&(this.O?u="headers="+encodeURIComponent(String(cn(M)))+"&"+u:this.m&&nn(d,this.m,M)),tt(this.h,N),this.Ua&&K(d,"TYPE","init"),this.P?(K(d,"$req",u),K(d,"SID","null"),N.T=!0,ga(N,d,null)):ga(N,d,u),this.G=2}}else this.G==3&&(o?Ze(this,o):this.i.length==0||ke(this.h)||Ze(this))};function Ze(o,u){var d;u?d=u.l:d=o.U++;const g=at(o.I);K(g,"SID",o.K),K(g,"RID",d),K(g,"AID",o.T),Ge(o,g),o.m&&o.o&&nn(g,o.m,o.o),d=new jr(o,o.j,d,o.B+1),o.m===null&&(d.H=o.o),u&&(o.i=u.D.concat(o.i)),u=hn(o,d,1e3),d.I=Math.round(.5*o.wa)+Math.round(.5*o.wa*Math.random()),tt(o.h,d),ga(d,g,u)}function Ge(o,u){o.H&&W(o.H,function(d,g){K(u,g,d)}),o.l&&At({},function(d,g){K(u,g,d)})}function hn(o,u,d){d=Math.min(o.i.length,d);var g=o.l?_(o.l.Na,o.l,o):null;e:{var N=o.i;let M=-1;for(;;){const z=["count="+d];M==-1?0<d?(M=N[0].g,z.push("ofs="+M)):M=0:z.push("ofs="+M);let st=!0;for(let Kt=0;Kt<d;Kt++){let $e=N[Kt].g;const on=N[Kt].map;if($e-=M,0>$e)M=Math.max(0,N[Kt].g-100),st=!1;else try{Rt(on,z,"req"+$e+"_")}catch{g&&g(on)}}if(st){g=z.join("&");break e}}}return o=o.i.splice(0,d),u.D=o,g}function Bn(o){if(!o.g&&!o.u){o.Y=1;var u=o.Fa;$n||jt(),vn||($n(),vn=!0),te.add(u,o),o.v=0}}function Zn(o){return o.g||o.u||3<=o.v?!1:(o.Y++,o.u=zr(_(o.Fa,o),Gr(o,o.v)),o.v++,!0)}n.Fa=function(){if(this.u=null,Fi(this),this.ba&&!(this.M||this.g==null||0>=this.R)){var o=2*this.R;this.j.info("BP detection timer enabled: "+o),this.A=zr(_(this.ab,this),o)}},n.ab=function(){this.A&&(this.A=null,this.j.info("BP detection timeout reached."),this.j.info("Buffering proxy detected and switch to long-polling!"),this.F=!1,this.M=!0,yn(10),sn(this),Fi(this))};function Hr(o){o.A!=null&&(l.clearTimeout(o.A),o.A=null)}function Fi(o){o.g=new jr(o,o.j,"rpc",o.Y),o.m===null&&(o.g.H=o.o),o.g.O=0;var u=at(o.qa);K(u,"RID","rpc"),K(u,"SID",o.K),K(u,"AID",o.T),K(u,"CI",o.F?"0":"1"),!o.F&&o.ja&&K(u,"TO",o.ja),K(u,"TYPE","xmlhttp"),Ge(o,u),o.m&&o.o&&nn(u,o.m,o.o),o.L&&(o.g.I=o.L);var d=o.g;o=o.ia,d.L=1,d.v=me(at(u)),d.m=null,d.P=!0,_a(d,o)}n.Za=function(){this.C!=null&&(this.C=null,sn(this),Zn(this),yn(19))};function Wr(o){o.C!=null&&(l.clearTimeout(o.C),o.C=null)}function Cr(o,u){var d=null;if(o.g==u){Wr(o),Hr(o),o.g=null;var g=2}else if(ht(o.h,u))d=u.D,dt(o.h,u),g=1;else return;if(o.G!=0){if(u.o)if(g==1){d=u.m?u.m.length:0,u=Date.now()-u.F;var N=o.B;g=Wt(),tn(g,new En(g,d)),Xn(o)}else Bn(o);else if(N=u.s,N==3||N==0&&0<u.X||!(g==1&&Rr(o,u)||g==2&&Zn(o)))switch(d&&0<d.length&&(u=o.h,u.i=u.i.concat(d)),N){case 1:Sn(o,5);break;case 4:Sn(o,10);break;case 3:Sn(o,6);break;default:Sn(o,2)}}}function Gr(o,u){let d=o.Ta+Math.floor(Math.random()*o.cb);return o.isActive()||(d*=2),d*u}function Sn(o,u){if(o.j.info("Error code "+u),u==2){var d=_(o.fb,o),g=o.Xa;const N=!g;g=new gt(g||"//www.google.com/images/cleardot.gif"),l.location&&l.location.protocol=="http"||Lt(g,"https"),me(g),N?xe(g.toString(),d):Le(g.toString(),d)}else yn(2);o.G=0,o.l&&o.l.sa(u),Ui(o),Jn(o)}n.fb=function(o){o?(this.j.info("Successfully pinged google.com"),yn(2)):(this.j.info("Failed to ping google.com"),yn(1))};function Ui(o){if(o.G=0,o.ka=[],o.l){const u=Pe(o.h);(u.length!=0||o.i.length!=0)&&(T(o.ka,u),T(o.ka,o.i),o.h.i.length=0,D(o.i),o.i.length=0),o.l.ra()}}function he(o,u,d){var g=d instanceof gt?at(d):new gt(d);if(g.g!="")u&&(g.g=u+"."+g.g),Ne(g,g.s);else{var N=l.location;g=N.protocol,u=u?u+"."+N.hostname:N.hostname,N=+N.port;var M=new gt(null);g&&Lt(M,g),u&&(M.g=u),N&&Ne(M,N),d&&(M.l=d),g=M}return d=o.D,u=o.ya,d&&u&&K(g,d,u),K(g,"VER",o.la),Ge(o,g),g}function de(o,u,d){if(u&&!o.J)throw Error("Can't create secondary domain capable XhrIo object.");return u=o.Ca&&!o.pa?new Te(new mt({eb:d})):new Te(o.pa),u.Ha(o.J),u}n.isActive=function(){return!!this.l&&this.l.isActive(this)};function le(){}n=le.prototype,n.ua=function(){},n.ta=function(){},n.sa=function(){},n.ra=function(){},n.isActive=function(){return!0},n.Na=function(){};function Ue(){}Ue.prototype.g=function(o,u){return new it(o,u)};function it(o,u){Mt.call(this),this.g=new xn(u),this.l=o,this.h=u&&u.messageUrlParams||null,o=u&&u.messageHeaders||null,u&&u.clientProtocolHeaderRequired&&(o?o["X-Client-Protocol"]="webchannel":o={"X-Client-Protocol":"webchannel"}),this.g.o=o,o=u&&u.initMessageHeaders||null,u&&u.messageContentType&&(o?o["X-WebChannel-Content-Type"]=u.messageContentType:o={"X-WebChannel-Content-Type":u.messageContentType}),u&&u.va&&(o?o["X-WebChannel-Client-Profile"]=u.va:o={"X-WebChannel-Client-Profile":u.va}),this.g.S=o,(o=u&&u.Sb)&&!U(o)&&(this.g.m=o),this.v=u&&u.supportsCrossDomainXhr||!1,this.u=u&&u.sendRawJson||!1,(u=u&&u.httpSessionIdParam)&&!U(u)&&(this.g.D=u,o=this.h,o!==null&&u in o&&(o=this.h,u in o&&delete o[u])),this.j=new dn(this)}w(it,Mt),it.prototype.m=function(){this.g.l=this.j,this.v&&(this.g.J=!0),this.g.connect(this.l,this.h||void 0)},it.prototype.close=function(){Yn(this.g)},it.prototype.o=function(o){var u=this.g;if(typeof o=="string"){var d={};d.__data__=o,o=d}else this.u&&(d={},d.__data__=ua(o),o=d);u.i.push(new et(u.Ya++,o)),u.G==3&&Xn(u)},it.prototype.N=function(){this.g.l=null,delete this.j,Yn(this.g),delete this.g,it.aa.N.call(this)};function fr(o){da.call(this),o.__headers__&&(this.headers=o.__headers__,this.statusCode=o.__status__,delete o.__headers__,delete o.__status__);var u=o.__sm__;if(u){e:{for(const d in u){o=d;break e}o=void 0}(this.i=o)&&(o=this.i,u=u!==null&&o in u?u[o]:void 0),this.data=u}else this.data=o}w(fr,da);function er(){fa.call(this),this.status=1}w(er,fa);function dn(o){this.g=o}w(dn,le),dn.prototype.ua=function(){tn(this.g,"a")},dn.prototype.ta=function(o){tn(this.g,new fr(o))},dn.prototype.sa=function(o){tn(this.g,new er)},dn.prototype.ra=function(){tn(this.g,"b")},Ue.prototype.createWebChannel=Ue.prototype.g,it.prototype.send=it.prototype.o,it.prototype.open=it.prototype.m,it.prototype.close=it.prototype.close,dv=function(){return new Ue},hv=function(){return Wt()},uv=Br,Vh={mb:0,pb:1,qb:2,Jb:3,Ob:4,Lb:5,Mb:6,Kb:7,Ib:8,Nb:9,PROXY:10,NOPROXY:11,Gb:12,Cb:13,Db:14,Bb:15,Eb:16,Fb:17,ib:18,hb:19,jb:20},Rs.NO_ERROR=0,Rs.TIMEOUT=8,Rs.HTTP_ERROR=6,uc=Rs,pa.COMPLETE="complete",cv=pa,Vl.EventType=bs,bs.OPEN="a",bs.CLOSE="b",bs.ERROR="c",bs.MESSAGE="d",Mt.prototype.listen=Mt.prototype.K,Da=Vl,Te.prototype.listenOnce=Te.prototype.L,Te.prototype.getLastError=Te.prototype.Ka,Te.prototype.getLastErrorCode=Te.prototype.Ba,Te.prototype.getStatus=Te.prototype.Z,Te.prototype.getResponseJson=Te.prototype.Oa,Te.prototype.getResponseText=Te.prototype.oa,Te.prototype.send=Te.prototype.ea,Te.prototype.setWithCredentials=Te.prototype.Ha,lv=Te}).apply(typeof Ql<"u"?Ql:typeof self<"u"?self:typeof window<"u"?window:{});const dp="@firebase/firestore",fp="4.8.0";/**
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
 */class zn{constructor(e){this.uid=e}isAuthenticated(){return this.uid!=null}toKey(){return this.isAuthenticated()?"uid:"+this.uid:"anonymous-user"}isEqual(e){return e.uid===this.uid}}zn.UNAUTHENTICATED=new zn(null),zn.GOOGLE_CREDENTIALS=new zn("google-credentials-uid"),zn.FIRST_PARTY=new zn("first-party-uid"),zn.MOCK_USER=new zn("mock-user");/**
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
 */let oa="11.10.0";/**
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
 */const Ys=new tu("@firebase/firestore");function _o(){return Ys.logLevel}function G(n,...e){if(Ys.logLevel<=Ve.DEBUG){const t=e.map(Cd);Ys.debug(`Firestore (${oa}): ${n}`,...t)}}function Ni(n,...e){if(Ys.logLevel<=Ve.ERROR){const t=e.map(Cd);Ys.error(`Firestore (${oa}): ${n}`,...t)}}function Js(n,...e){if(Ys.logLevel<=Ve.WARN){const t=e.map(Cd);Ys.warn(`Firestore (${oa}): ${n}`,...t)}}function Cd(n){if(typeof n=="string")return n;try{/**
* @license
* Copyright 2020 Google LLC
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
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
 */function ae(n,e,t){let r="Unexpected state";typeof e=="string"?r=e:t=e,fv(n,r,t)}function fv(n,e,t){let r=`FIRESTORE (${oa}) INTERNAL ASSERTION FAILED: ${e} (ID: ${n.toString(16)})`;if(t!==void 0)try{r+=" CONTEXT: "+JSON.stringify(t)}catch{r+=" CONTEXT: "+t}throw Ni(r),new Error(r)}function ut(n,e,t,r){let i="Unexpected state";typeof t=="string"?i=t:r=t,n||fv(e,i,r)}function Ce(n,e){return n}/**
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
 */const x={OK:"ok",CANCELLED:"cancelled",UNKNOWN:"unknown",INVALID_ARGUMENT:"invalid-argument",DEADLINE_EXCEEDED:"deadline-exceeded",NOT_FOUND:"not-found",ALREADY_EXISTS:"already-exists",PERMISSION_DENIED:"permission-denied",UNAUTHENTICATED:"unauthenticated",RESOURCE_EXHAUSTED:"resource-exhausted",FAILED_PRECONDITION:"failed-precondition",ABORTED:"aborted",OUT_OF_RANGE:"out-of-range",UNIMPLEMENTED:"unimplemented",INTERNAL:"internal",UNAVAILABLE:"unavailable",DATA_LOSS:"data-loss"};class B extends Di{constructor(e,t){super(e,t),this.code=e,this.message=t,this.toString=()=>`${this.name}: [code=${this.code}]: ${this.message}`}}/**
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
 */class oi{constructor(){this.promise=new Promise(((e,t)=>{this.resolve=e,this.reject=t}))}}/**
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
 */class Eb{constructor(e,t){this.user=t,this.type="OAuth",this.headers=new Map,this.headers.set("Authorization",`Bearer ${e}`)}}class wb{getToken(){return Promise.resolve(null)}invalidateToken(){}start(e,t){e.enqueueRetryable((()=>t(zn.UNAUTHENTICATED)))}shutdown(){}}class Tb{constructor(e){this.t=e,this.currentUser=zn.UNAUTHENTICATED,this.i=0,this.forceRefresh=!1,this.auth=null}start(e,t){ut(this.o===void 0,42304);let r=this.i;const i=c=>this.i!==r?(r=this.i,t(c)):Promise.resolve();let s=new oi;this.o=()=>{this.i++,this.currentUser=this.u(),s.resolve(),s=new oi,e.enqueueRetryable((()=>i(this.currentUser)))};const a=()=>{const c=s;e.enqueueRetryable((async()=>{await c.promise,await i(this.currentUser)}))},l=c=>{G("FirebaseAuthCredentialsProvider","Auth detected"),this.auth=c,this.o&&(this.auth.addAuthTokenListener(this.o),a())};this.t.onInit((c=>l(c))),setTimeout((()=>{if(!this.auth){const c=this.t.getImmediate({optional:!0});c?l(c):(G("FirebaseAuthCredentialsProvider","Auth not yet detected"),s.resolve(),s=new oi)}}),0),a()}getToken(){const e=this.i,t=this.forceRefresh;return this.forceRefresh=!1,this.auth?this.auth.getToken(t).then((r=>this.i!==e?(G("FirebaseAuthCredentialsProvider","getToken aborted due to token change."),this.getToken()):r?(ut(typeof r.accessToken=="string",31837,{l:r}),new Eb(r.accessToken,this.currentUser)):null)):Promise.resolve(null)}invalidateToken(){this.forceRefresh=!0}shutdown(){this.auth&&this.o&&this.auth.removeAuthTokenListener(this.o),this.o=void 0}u(){const e=this.auth&&this.auth.getUid();return ut(e===null||typeof e=="string",2055,{h:e}),new zn(e)}}class Ib{constructor(e,t,r){this.P=e,this.T=t,this.I=r,this.type="FirstParty",this.user=zn.FIRST_PARTY,this.A=new Map}R(){return this.I?this.I():null}get headers(){this.A.set("X-Goog-AuthUser",this.P);const e=this.R();return e&&this.A.set("Authorization",e),this.T&&this.A.set("X-Goog-Iam-Authorization-Token",this.T),this.A}}class Ab{constructor(e,t,r){this.P=e,this.T=t,this.I=r}getToken(){return Promise.resolve(new Ib(this.P,this.T,this.I))}start(e,t){e.enqueueRetryable((()=>t(zn.FIRST_PARTY)))}shutdown(){}invalidateToken(){}}class pp{constructor(e){this.value=e,this.type="AppCheck",this.headers=new Map,e&&e.length>0&&this.headers.set("x-firebase-appcheck",this.value)}}class bb{constructor(e,t){this.V=t,this.forceRefresh=!1,this.appCheck=null,this.m=null,this.p=null,yr(e)&&e.settings.appCheckToken&&(this.p=e.settings.appCheckToken)}start(e,t){ut(this.o===void 0,3512);const r=s=>{s.error!=null&&G("FirebaseAppCheckTokenProvider",`Error getting App Check token; using placeholder token instead. Error: ${s.error.message}`);const a=s.token!==this.m;return this.m=s.token,G("FirebaseAppCheckTokenProvider",`Received ${a?"new":"existing"} token.`),a?t(s.token):Promise.resolve()};this.o=s=>{e.enqueueRetryable((()=>r(s)))};const i=s=>{G("FirebaseAppCheckTokenProvider","AppCheck detected"),this.appCheck=s,this.o&&this.appCheck.addTokenListener(this.o)};this.V.onInit((s=>i(s))),setTimeout((()=>{if(!this.appCheck){const s=this.V.getImmediate({optional:!0});s?i(s):G("FirebaseAppCheckTokenProvider","AppCheck not yet detected")}}),0)}getToken(){if(this.p)return Promise.resolve(new pp(this.p));const e=this.forceRefresh;return this.forceRefresh=!1,this.appCheck?this.appCheck.getToken(e).then((t=>t?(ut(typeof t.token=="string",44558,{tokenResult:t}),this.m=t.token,new pp(t.token)):null)):Promise.resolve(null)}invalidateToken(){this.forceRefresh=!0}shutdown(){this.appCheck&&this.o&&this.appCheck.removeTokenListener(this.o),this.o=void 0}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Sb(n){const e=typeof self<"u"&&(self.crypto||self.msCrypto),t=new Uint8Array(n);if(e&&typeof e.getRandomValues=="function")e.getRandomValues(t);else for(let r=0;r<n;r++)t[r]=Math.floor(256*Math.random());return t}/**
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
 */function pv(){return new TextEncoder}/**
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
 */class Pd{static newId(){const e="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",t=62*Math.floor(4.129032258064516);let r="";for(;r.length<20;){const i=Sb(40);for(let s=0;s<i.length;++s)r.length<20&&i[s]<t&&(r+=e.charAt(i[s]%62))}return r}}function Re(n,e){return n<e?-1:n>e?1:0}function Mh(n,e){let t=0;for(;t<n.length&&t<e.length;){const r=n.codePointAt(t),i=e.codePointAt(t);if(r!==i){if(r<128&&i<128)return Re(r,i);{const s=pv(),a=Rb(s.encode(mp(n,t)),s.encode(mp(e,t)));return a!==0?a:Re(r,i)}}t+=r>65535?2:1}return Re(n.length,e.length)}function mp(n,e){return n.codePointAt(e)>65535?n.substring(e,e+2):n.substring(e,e+1)}function Rb(n,e){for(let t=0;t<n.length&&t<e.length;++t)if(n[t]!==e[t])return Re(n[t],e[t]);return Re(n.length,e.length)}function Bo(n,e,t){return n.length===e.length&&n.every(((r,i)=>t(r,e[i])))}/**
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
 */const gp="__name__";class Kr{constructor(e,t,r){t===void 0?t=0:t>e.length&&ae(637,{offset:t,range:e.length}),r===void 0?r=e.length-t:r>e.length-t&&ae(1746,{length:r,range:e.length-t}),this.segments=e,this.offset=t,this.len=r}get length(){return this.len}isEqual(e){return Kr.comparator(this,e)===0}child(e){const t=this.segments.slice(this.offset,this.limit());return e instanceof Kr?e.forEach((r=>{t.push(r)})):t.push(e),this.construct(t)}limit(){return this.offset+this.length}popFirst(e){return e=e===void 0?1:e,this.construct(this.segments,this.offset+e,this.length-e)}popLast(){return this.construct(this.segments,this.offset,this.length-1)}firstSegment(){return this.segments[this.offset]}lastSegment(){return this.get(this.length-1)}get(e){return this.segments[this.offset+e]}isEmpty(){return this.length===0}isPrefixOf(e){if(e.length<this.length)return!1;for(let t=0;t<this.length;t++)if(this.get(t)!==e.get(t))return!1;return!0}isImmediateParentOf(e){if(this.length+1!==e.length)return!1;for(let t=0;t<this.length;t++)if(this.get(t)!==e.get(t))return!1;return!0}forEach(e){for(let t=this.offset,r=this.limit();t<r;t++)e(this.segments[t])}toArray(){return this.segments.slice(this.offset,this.limit())}static comparator(e,t){const r=Math.min(e.length,t.length);for(let i=0;i<r;i++){const s=Kr.compareSegments(e.get(i),t.get(i));if(s!==0)return s}return Re(e.length,t.length)}static compareSegments(e,t){const r=Kr.isNumericId(e),i=Kr.isNumericId(t);return r&&!i?-1:!r&&i?1:r&&i?Kr.extractNumericId(e).compare(Kr.extractNumericId(t)):Mh(e,t)}static isNumericId(e){return e.startsWith("__id")&&e.endsWith("__")}static extractNumericId(e){return ns.fromString(e.substring(4,e.length-2))}}class ot extends Kr{construct(e,t,r){return new ot(e,t,r)}canonicalString(){return this.toArray().join("/")}toString(){return this.canonicalString()}toUriEncodedString(){return this.toArray().map(encodeURIComponent).join("/")}static fromString(...e){const t=[];for(const r of e){if(r.indexOf("//")>=0)throw new B(x.INVALID_ARGUMENT,`Invalid segment (${r}). Paths must not contain // in them.`);t.push(...r.split("/").filter((i=>i.length>0)))}return new ot(t)}static emptyPath(){return new ot([])}}const Cb=/^[_a-zA-Z][_a-zA-Z0-9]*$/;class kn extends Kr{construct(e,t,r){return new kn(e,t,r)}static isValidIdentifier(e){return Cb.test(e)}canonicalString(){return this.toArray().map((e=>(e=e.replace(/\\/g,"\\\\").replace(/`/g,"\\`"),kn.isValidIdentifier(e)||(e="`"+e+"`"),e))).join(".")}toString(){return this.canonicalString()}isKeyField(){return this.length===1&&this.get(0)===gp}static keyField(){return new kn([gp])}static fromServerFormat(e){const t=[];let r="",i=0;const s=()=>{if(r.length===0)throw new B(x.INVALID_ARGUMENT,`Invalid field path (${e}). Paths must not be empty, begin with '.', end with '.', or contain '..'`);t.push(r),r=""};let a=!1;for(;i<e.length;){const l=e[i];if(l==="\\"){if(i+1===e.length)throw new B(x.INVALID_ARGUMENT,"Path has trailing escape character: "+e);const c=e[i+1];if(c!=="\\"&&c!=="."&&c!=="`")throw new B(x.INVALID_ARGUMENT,"Path has invalid escape sequence: "+e);r+=c,i+=2}else l==="`"?(a=!a,i++):l!=="."||a?(r+=l,i++):(s(),i++)}if(s(),a)throw new B(x.INVALID_ARGUMENT,"Unterminated ` in path: "+e);return new kn(t)}static emptyPath(){return new kn([])}}/**
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
 */class ne{constructor(e){this.path=e}static fromPath(e){return new ne(ot.fromString(e))}static fromName(e){return new ne(ot.fromString(e).popFirst(5))}static empty(){return new ne(ot.emptyPath())}get collectionGroup(){return this.path.popLast().lastSegment()}hasCollectionId(e){return this.path.length>=2&&this.path.get(this.path.length-2)===e}getCollectionGroup(){return this.path.get(this.path.length-2)}getCollectionPath(){return this.path.popLast()}isEqual(e){return e!==null&&ot.comparator(this.path,e.path)===0}toString(){return this.path.toString()}static comparator(e,t){return ot.comparator(e.path,t.path)}static isDocumentKey(e){return e.length%2==0}static fromSegments(e){return new ne(new ot(e.slice()))}}/**
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
 */function mv(n,e,t){if(!t)throw new B(x.INVALID_ARGUMENT,`Function ${n}() cannot be called with an empty ${e}.`)}function Pb(n,e,t,r){if(e===!0&&r===!0)throw new B(x.INVALID_ARGUMENT,`${n} and ${t} cannot be used together.`)}function _p(n){if(!ne.isDocumentKey(n))throw new B(x.INVALID_ARGUMENT,`Invalid document reference. Document references must have an even number of segments, but ${n} has ${n.length}.`)}function vp(n){if(ne.isDocumentKey(n))throw new B(x.INVALID_ARGUMENT,`Invalid collection reference. Collection references must have an odd number of segments, but ${n} has ${n.length}.`)}function gv(n){return typeof n=="object"&&n!==null&&(Object.getPrototypeOf(n)===Object.prototype||Object.getPrototypeOf(n)===null)}function su(n){if(n===void 0)return"undefined";if(n===null)return"null";if(typeof n=="string")return n.length>20&&(n=`${n.substring(0,20)}...`),JSON.stringify(n);if(typeof n=="number"||typeof n=="boolean")return""+n;if(typeof n=="object"){if(n instanceof Array)return"an array";{const e=(function(r){return r.constructor?r.constructor.name:null})(n);return e?`a custom ${e} object`:"an object"}}return typeof n=="function"?"a function":ae(12329,{type:typeof n})}function zo(n,e){if("_delegate"in n&&(n=n._delegate),!(n instanceof e)){if(e.name===n.constructor.name)throw new B(x.INVALID_ARGUMENT,"Type does not match the expected instance. Did you pass a reference from a different Firestore SDK?");{const t=su(n);throw new B(x.INVALID_ARGUMENT,`Expected type '${e.name}', but it was: ${t}`)}}return n}function kb(n,e){if(e<=0)throw new B(x.INVALID_ARGUMENT,`Function ${n}() requires a positive number, but it was: ${e}.`)}/**
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
 */function Xt(n,e){const t={typeString:n};return e&&(t.value=e),t}function Tl(n,e){if(!gv(n))throw new B(x.INVALID_ARGUMENT,"JSON must be an object");let t;for(const r in e)if(e[r]){const i=e[r].typeString,s="value"in e[r]?{value:e[r].value}:void 0;if(!(r in n)){t=`JSON missing required field: '${r}'`;break}const a=n[r];if(i&&typeof a!==i){t=`JSON field '${r}' must be a ${i}.`;break}if(s!==void 0&&a!==s.value){t=`Expected '${r}' field to equal '${s.value}'`;break}}if(t)throw new B(x.INVALID_ARGUMENT,t);return!0}/**
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
 */const yp=-62135596800,Ep=1e6;class Tt{static now(){return Tt.fromMillis(Date.now())}static fromDate(e){return Tt.fromMillis(e.getTime())}static fromMillis(e){const t=Math.floor(e/1e3),r=Math.floor((e-1e3*t)*Ep);return new Tt(t,r)}constructor(e,t){if(this.seconds=e,this.nanoseconds=t,t<0)throw new B(x.INVALID_ARGUMENT,"Timestamp nanoseconds out of range: "+t);if(t>=1e9)throw new B(x.INVALID_ARGUMENT,"Timestamp nanoseconds out of range: "+t);if(e<yp)throw new B(x.INVALID_ARGUMENT,"Timestamp seconds out of range: "+e);if(e>=253402300800)throw new B(x.INVALID_ARGUMENT,"Timestamp seconds out of range: "+e)}toDate(){return new Date(this.toMillis())}toMillis(){return 1e3*this.seconds+this.nanoseconds/Ep}_compareTo(e){return this.seconds===e.seconds?Re(this.nanoseconds,e.nanoseconds):Re(this.seconds,e.seconds)}isEqual(e){return e.seconds===this.seconds&&e.nanoseconds===this.nanoseconds}toString(){return"Timestamp(seconds="+this.seconds+", nanoseconds="+this.nanoseconds+")"}toJSON(){return{type:Tt._jsonSchemaVersion,seconds:this.seconds,nanoseconds:this.nanoseconds}}static fromJSON(e){if(Tl(e,Tt._jsonSchema))return new Tt(e.seconds,e.nanoseconds)}valueOf(){const e=this.seconds-yp;return String(e).padStart(12,"0")+"."+String(this.nanoseconds).padStart(9,"0")}}Tt._jsonSchemaVersion="firestore/timestamp/1.0",Tt._jsonSchema={type:Xt("string",Tt._jsonSchemaVersion),seconds:Xt("number"),nanoseconds:Xt("number")};/**
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
 */class pe{static fromTimestamp(e){return new pe(e)}static min(){return new pe(new Tt(0,0))}static max(){return new pe(new Tt(253402300799,999999999))}constructor(e){this.timestamp=e}compareTo(e){return this.timestamp._compareTo(e.timestamp)}isEqual(e){return this.timestamp.isEqual(e.timestamp)}toMicroseconds(){return 1e6*this.timestamp.seconds+this.timestamp.nanoseconds/1e3}toString(){return"SnapshotVersion("+this.timestamp.toString()+")"}toTimestamp(){return this.timestamp}}/**
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
 */const Za=-1;function Nb(n,e){const t=n.toTimestamp().seconds,r=n.toTimestamp().nanoseconds+1,i=pe.fromTimestamp(r===1e9?new Tt(t+1,0):new Tt(t,r));return new us(i,ne.empty(),e)}function Db(n){return new us(n.readTime,n.key,Za)}class us{constructor(e,t,r){this.readTime=e,this.documentKey=t,this.largestBatchId=r}static min(){return new us(pe.min(),ne.empty(),Za)}static max(){return new us(pe.max(),ne.empty(),Za)}}function Ob(n,e){let t=n.readTime.compareTo(e.readTime);return t!==0?t:(t=ne.comparator(n.documentKey,e.documentKey),t!==0?t:Re(n.largestBatchId,e.largestBatchId))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Vb="The current tab is not in the required state to perform this operation. It might be necessary to refresh the browser tab.";class Mb{constructor(){this.onCommittedListeners=[]}addOnCommittedListener(e){this.onCommittedListeners.push(e)}raiseOnCommittedEvent(){this.onCommittedListeners.forEach((e=>e()))}}/**
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
 */async function ou(n){if(n.code!==x.FAILED_PRECONDITION||n.message!==Vb)throw n;G("LocalStore","Unexpectedly lost primary lease")}/**
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
 */class F{constructor(e){this.nextCallback=null,this.catchCallback=null,this.result=void 0,this.error=void 0,this.isDone=!1,this.callbackAttached=!1,e((t=>{this.isDone=!0,this.result=t,this.nextCallback&&this.nextCallback(t)}),(t=>{this.isDone=!0,this.error=t,this.catchCallback&&this.catchCallback(t)}))}catch(e){return this.next(void 0,e)}next(e,t){return this.callbackAttached&&ae(59440),this.callbackAttached=!0,this.isDone?this.error?this.wrapFailure(t,this.error):this.wrapSuccess(e,this.result):new F(((r,i)=>{this.nextCallback=s=>{this.wrapSuccess(e,s).next(r,i)},this.catchCallback=s=>{this.wrapFailure(t,s).next(r,i)}}))}toPromise(){return new Promise(((e,t)=>{this.next(e,t)}))}wrapUserFunction(e){try{const t=e();return t instanceof F?t:F.resolve(t)}catch(t){return F.reject(t)}}wrapSuccess(e,t){return e?this.wrapUserFunction((()=>e(t))):F.resolve(t)}wrapFailure(e,t){return e?this.wrapUserFunction((()=>e(t))):F.reject(t)}static resolve(e){return new F(((t,r)=>{t(e)}))}static reject(e){return new F(((t,r)=>{r(e)}))}static waitFor(e){return new F(((t,r)=>{let i=0,s=0,a=!1;e.forEach((l=>{++i,l.next((()=>{++s,a&&s===i&&t()}),(c=>r(c)))})),a=!0,s===i&&t()}))}static or(e){let t=F.resolve(!1);for(const r of e)t=t.next((i=>i?F.resolve(i):r()));return t}static forEach(e,t){const r=[];return e.forEach(((i,s)=>{r.push(t.call(this,i,s))})),this.waitFor(r)}static mapArray(e,t){return new F(((r,i)=>{const s=e.length,a=new Array(s);let l=0;for(let c=0;c<s;c++){const h=c;t(e[h]).next((f=>{a[h]=f,++l,l===s&&r(a)}),(f=>i(f)))}}))}static doWhile(e,t){return new F(((r,i)=>{const s=()=>{e()===!0?t().next((()=>{s()}),i):r()};s()}))}}function xb(n){const e=n.match(/Android ([\d.]+)/i),t=e?e[1].split(".").slice(0,2).join("."):"-1";return Number(t)}function aa(n){return n.name==="IndexedDbTransactionError"}/**
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
 */class au{constructor(e,t){this.previousValue=e,t&&(t.sequenceNumberHandler=r=>this._e(r),this.ae=r=>t.writeSequenceNumber(r))}_e(e){return this.previousValue=Math.max(e,this.previousValue),this.previousValue}next(){const e=++this.previousValue;return this.ae&&this.ae(e),e}}au.ue=-1;/**
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
 */const Lb=-1;function Il(n){return n==null}function Pc(n){return n===0&&1/n==-1/0}function Fb(n){return typeof n=="number"&&Number.isInteger(n)&&!Pc(n)&&n<=Number.MAX_SAFE_INTEGER&&n>=Number.MIN_SAFE_INTEGER}/**
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
 */const _v="";function Ub(n){let e="";for(let t=0;t<n.length;t++)e.length>0&&(e=wp(e)),e=$b(n.get(t),e);return wp(e)}function $b(n,e){let t=e;const r=n.length;for(let i=0;i<r;i++){const s=n.charAt(i);switch(s){case"\0":t+="";break;case _v:t+="";break;default:t+=s}}return t}function wp(n){return n+_v+""}/**
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
 */function Tp(n){let e=0;for(const t in n)Object.prototype.hasOwnProperty.call(n,t)&&e++;return e}function Zs(n,e){for(const t in n)Object.prototype.hasOwnProperty.call(n,t)&&e(t,n[t])}function qb(n,e){const t=[];for(const r in n)Object.prototype.hasOwnProperty.call(n,r)&&t.push(e(n[r],r,n));return t}function vv(n){for(const e in n)if(Object.prototype.hasOwnProperty.call(n,e))return!1;return!0}/**
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
 */class zt{constructor(e,t){this.comparator=e,this.root=t||wn.EMPTY}insert(e,t){return new zt(this.comparator,this.root.insert(e,t,this.comparator).copy(null,null,wn.BLACK,null,null))}remove(e){return new zt(this.comparator,this.root.remove(e,this.comparator).copy(null,null,wn.BLACK,null,null))}get(e){let t=this.root;for(;!t.isEmpty();){const r=this.comparator(e,t.key);if(r===0)return t.value;r<0?t=t.left:r>0&&(t=t.right)}return null}indexOf(e){let t=0,r=this.root;for(;!r.isEmpty();){const i=this.comparator(e,r.key);if(i===0)return t+r.left.size;i<0?r=r.left:(t+=r.left.size+1,r=r.right)}return-1}isEmpty(){return this.root.isEmpty()}get size(){return this.root.size}minKey(){return this.root.minKey()}maxKey(){return this.root.maxKey()}inorderTraversal(e){return this.root.inorderTraversal(e)}forEach(e){this.inorderTraversal(((t,r)=>(e(t,r),!1)))}toString(){const e=[];return this.inorderTraversal(((t,r)=>(e.push(`${t}:${r}`),!1))),`{${e.join(", ")}}`}reverseTraversal(e){return this.root.reverseTraversal(e)}getIterator(){return new Yl(this.root,null,this.comparator,!1)}getIteratorFrom(e){return new Yl(this.root,e,this.comparator,!1)}getReverseIterator(){return new Yl(this.root,null,this.comparator,!0)}getReverseIteratorFrom(e){return new Yl(this.root,e,this.comparator,!0)}}class Yl{constructor(e,t,r,i){this.isReverse=i,this.nodeStack=[];let s=1;for(;!e.isEmpty();)if(s=t?r(e.key,t):1,t&&i&&(s*=-1),s<0)e=this.isReverse?e.left:e.right;else{if(s===0){this.nodeStack.push(e);break}this.nodeStack.push(e),e=this.isReverse?e.right:e.left}}getNext(){let e=this.nodeStack.pop();const t={key:e.key,value:e.value};if(this.isReverse)for(e=e.left;!e.isEmpty();)this.nodeStack.push(e),e=e.right;else for(e=e.right;!e.isEmpty();)this.nodeStack.push(e),e=e.left;return t}hasNext(){return this.nodeStack.length>0}peek(){if(this.nodeStack.length===0)return null;const e=this.nodeStack[this.nodeStack.length-1];return{key:e.key,value:e.value}}}class wn{constructor(e,t,r,i,s){this.key=e,this.value=t,this.color=r??wn.RED,this.left=i??wn.EMPTY,this.right=s??wn.EMPTY,this.size=this.left.size+1+this.right.size}copy(e,t,r,i,s){return new wn(e??this.key,t??this.value,r??this.color,i??this.left,s??this.right)}isEmpty(){return!1}inorderTraversal(e){return this.left.inorderTraversal(e)||e(this.key,this.value)||this.right.inorderTraversal(e)}reverseTraversal(e){return this.right.reverseTraversal(e)||e(this.key,this.value)||this.left.reverseTraversal(e)}min(){return this.left.isEmpty()?this:this.left.min()}minKey(){return this.min().key}maxKey(){return this.right.isEmpty()?this.key:this.right.maxKey()}insert(e,t,r){let i=this;const s=r(e,i.key);return i=s<0?i.copy(null,null,null,i.left.insert(e,t,r),null):s===0?i.copy(null,t,null,null,null):i.copy(null,null,null,null,i.right.insert(e,t,r)),i.fixUp()}removeMin(){if(this.left.isEmpty())return wn.EMPTY;let e=this;return e.left.isRed()||e.left.left.isRed()||(e=e.moveRedLeft()),e=e.copy(null,null,null,e.left.removeMin(),null),e.fixUp()}remove(e,t){let r,i=this;if(t(e,i.key)<0)i.left.isEmpty()||i.left.isRed()||i.left.left.isRed()||(i=i.moveRedLeft()),i=i.copy(null,null,null,i.left.remove(e,t),null);else{if(i.left.isRed()&&(i=i.rotateRight()),i.right.isEmpty()||i.right.isRed()||i.right.left.isRed()||(i=i.moveRedRight()),t(e,i.key)===0){if(i.right.isEmpty())return wn.EMPTY;r=i.right.min(),i=i.copy(r.key,r.value,null,null,i.right.removeMin())}i=i.copy(null,null,null,null,i.right.remove(e,t))}return i.fixUp()}isRed(){return this.color}fixUp(){let e=this;return e.right.isRed()&&!e.left.isRed()&&(e=e.rotateLeft()),e.left.isRed()&&e.left.left.isRed()&&(e=e.rotateRight()),e.left.isRed()&&e.right.isRed()&&(e=e.colorFlip()),e}moveRedLeft(){let e=this.colorFlip();return e.right.left.isRed()&&(e=e.copy(null,null,null,null,e.right.rotateRight()),e=e.rotateLeft(),e=e.colorFlip()),e}moveRedRight(){let e=this.colorFlip();return e.left.left.isRed()&&(e=e.rotateRight(),e=e.colorFlip()),e}rotateLeft(){const e=this.copy(null,null,wn.RED,null,this.right.left);return this.right.copy(null,null,this.color,e,null)}rotateRight(){const e=this.copy(null,null,wn.RED,this.left.right,null);return this.left.copy(null,null,this.color,null,e)}colorFlip(){const e=this.left.copy(null,null,!this.left.color,null,null),t=this.right.copy(null,null,!this.right.color,null,null);return this.copy(null,null,!this.color,e,t)}checkMaxDepth(){const e=this.check();return Math.pow(2,e)<=this.size+1}check(){if(this.isRed()&&this.left.isRed())throw ae(43730,{key:this.key,value:this.value});if(this.right.isRed())throw ae(14113,{key:this.key,value:this.value});const e=this.left.check();if(e!==this.right.check())throw ae(27949);return e+(this.isRed()?0:1)}}wn.EMPTY=null,wn.RED=!0,wn.BLACK=!1;wn.EMPTY=new class{constructor(){this.size=0}get key(){throw ae(57766)}get value(){throw ae(16141)}get color(){throw ae(16727)}get left(){throw ae(29726)}get right(){throw ae(36894)}copy(e,t,r,i,s){return this}insert(e,t,r){return new wn(e,t)}remove(e,t){return this}isEmpty(){return!0}inorderTraversal(e){return!1}reverseTraversal(e){return!1}minKey(){return null}maxKey(){return null}isRed(){return!1}checkMaxDepth(){return!0}check(){return 0}};/**
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
 */class ln{constructor(e){this.comparator=e,this.data=new zt(this.comparator)}has(e){return this.data.get(e)!==null}first(){return this.data.minKey()}last(){return this.data.maxKey()}get size(){return this.data.size}indexOf(e){return this.data.indexOf(e)}forEach(e){this.data.inorderTraversal(((t,r)=>(e(t),!1)))}forEachInRange(e,t){const r=this.data.getIteratorFrom(e[0]);for(;r.hasNext();){const i=r.getNext();if(this.comparator(i.key,e[1])>=0)return;t(i.key)}}forEachWhile(e,t){let r;for(r=t!==void 0?this.data.getIteratorFrom(t):this.data.getIterator();r.hasNext();)if(!e(r.getNext().key))return}firstAfterOrEqual(e){const t=this.data.getIteratorFrom(e);return t.hasNext()?t.getNext().key:null}getIterator(){return new Ip(this.data.getIterator())}getIteratorFrom(e){return new Ip(this.data.getIteratorFrom(e))}add(e){return this.copy(this.data.remove(e).insert(e,!0))}delete(e){return this.has(e)?this.copy(this.data.remove(e)):this}isEmpty(){return this.data.isEmpty()}unionWith(e){let t=this;return t.size<e.size&&(t=e,e=this),e.forEach((r=>{t=t.add(r)})),t}isEqual(e){if(!(e instanceof ln)||this.size!==e.size)return!1;const t=this.data.getIterator(),r=e.data.getIterator();for(;t.hasNext();){const i=t.getNext().key,s=r.getNext().key;if(this.comparator(i,s)!==0)return!1}return!0}toArray(){const e=[];return this.forEach((t=>{e.push(t)})),e}toString(){const e=[];return this.forEach((t=>e.push(t))),"SortedSet("+e.toString()+")"}copy(e){const t=new ln(this.comparator);return t.data=e,t}}class Ip{constructor(e){this.iter=e}getNext(){return this.iter.getNext().key}hasNext(){return this.iter.hasNext()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class wr{constructor(e){this.fields=e,e.sort(kn.comparator)}static empty(){return new wr([])}unionWith(e){let t=new ln(kn.comparator);for(const r of this.fields)t=t.add(r);for(const r of e)t=t.add(r);return new wr(t.toArray())}covers(e){for(const t of this.fields)if(t.isPrefixOf(e))return!0;return!1}isEqual(e){return Bo(this.fields,e.fields,((t,r)=>t.isEqual(r)))}}/**
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
 */class yv extends Error{constructor(){super(...arguments),this.name="Base64DecodeError"}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class An{constructor(e){this.binaryString=e}static fromBase64String(e){const t=(function(i){try{return atob(i)}catch(s){throw typeof DOMException<"u"&&s instanceof DOMException?new yv("Invalid base64 string: "+s):s}})(e);return new An(t)}static fromUint8Array(e){const t=(function(i){let s="";for(let a=0;a<i.length;++a)s+=String.fromCharCode(i[a]);return s})(e);return new An(t)}[Symbol.iterator](){let e=0;return{next:()=>e<this.binaryString.length?{value:this.binaryString.charCodeAt(e++),done:!1}:{value:void 0,done:!0}}}toBase64(){return(function(t){return btoa(t)})(this.binaryString)}toUint8Array(){return(function(t){const r=new Uint8Array(t.length);for(let i=0;i<t.length;i++)r[i]=t.charCodeAt(i);return r})(this.binaryString)}approximateByteSize(){return 2*this.binaryString.length}compareTo(e){return Re(this.binaryString,e.binaryString)}isEqual(e){return this.binaryString===e.binaryString}}An.EMPTY_BYTE_STRING=new An("");const Bb=new RegExp(/^\d{4}-\d\d-\d\dT\d\d:\d\d:\d\d(?:\.(\d+))?Z$/);function hs(n){if(ut(!!n,39018),typeof n=="string"){let e=0;const t=Bb.exec(n);if(ut(!!t,46558,{timestamp:n}),t[1]){let i=t[1];i=(i+"000000000").substr(0,9),e=Number(i)}const r=new Date(n);return{seconds:Math.floor(r.getTime()/1e3),nanos:e}}return{seconds:$t(n.seconds),nanos:$t(n.nanos)}}function $t(n){return typeof n=="number"?n:typeof n=="string"?Number(n):0}function ds(n){return typeof n=="string"?An.fromBase64String(n):An.fromUint8Array(n)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Ev="server_timestamp",wv="__type__",Tv="__previous_value__",Iv="__local_write_time__";function lu(n){var e,t;return((t=(((e=n==null?void 0:n.mapValue)===null||e===void 0?void 0:e.fields)||{})[wv])===null||t===void 0?void 0:t.stringValue)===Ev}function cu(n){const e=n.mapValue.fields[Tv];return lu(e)?cu(e):e}function el(n){const e=hs(n.mapValue.fields[Iv].timestampValue);return new Tt(e.seconds,e.nanos)}/**
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
 */class zb{constructor(e,t,r,i,s,a,l,c,h,f){this.databaseId=e,this.appId=t,this.persistenceKey=r,this.host=i,this.ssl=s,this.forceLongPolling=a,this.autoDetectLongPolling=l,this.longPollingOptions=c,this.useFetchStreams=h,this.isUsingEmulator=f}}const kc="(default)";class tl{constructor(e,t){this.projectId=e,this.database=t||kc}static empty(){return new tl("","")}get isDefaultDatabase(){return this.database===kc}isEqual(e){return e instanceof tl&&e.projectId===this.projectId&&e.database===this.database}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Av="__type__",jb="__max__",Jl={mapValue:{}},bv="__vector__",Nc="value";function fs(n){return"nullValue"in n?0:"booleanValue"in n?1:"integerValue"in n||"doubleValue"in n?2:"timestampValue"in n?3:"stringValue"in n?5:"bytesValue"in n?6:"referenceValue"in n?7:"geoPointValue"in n?8:"arrayValue"in n?9:"mapValue"in n?lu(n)?4:Wb(n)?9007199254740991:Hb(n)?10:11:ae(28295,{value:n})}function hi(n,e){if(n===e)return!0;const t=fs(n);if(t!==fs(e))return!1;switch(t){case 0:case 9007199254740991:return!0;case 1:return n.booleanValue===e.booleanValue;case 4:return el(n).isEqual(el(e));case 3:return(function(i,s){if(typeof i.timestampValue=="string"&&typeof s.timestampValue=="string"&&i.timestampValue.length===s.timestampValue.length)return i.timestampValue===s.timestampValue;const a=hs(i.timestampValue),l=hs(s.timestampValue);return a.seconds===l.seconds&&a.nanos===l.nanos})(n,e);case 5:return n.stringValue===e.stringValue;case 6:return(function(i,s){return ds(i.bytesValue).isEqual(ds(s.bytesValue))})(n,e);case 7:return n.referenceValue===e.referenceValue;case 8:return(function(i,s){return $t(i.geoPointValue.latitude)===$t(s.geoPointValue.latitude)&&$t(i.geoPointValue.longitude)===$t(s.geoPointValue.longitude)})(n,e);case 2:return(function(i,s){if("integerValue"in i&&"integerValue"in s)return $t(i.integerValue)===$t(s.integerValue);if("doubleValue"in i&&"doubleValue"in s){const a=$t(i.doubleValue),l=$t(s.doubleValue);return a===l?Pc(a)===Pc(l):isNaN(a)&&isNaN(l)}return!1})(n,e);case 9:return Bo(n.arrayValue.values||[],e.arrayValue.values||[],hi);case 10:case 11:return(function(i,s){const a=i.mapValue.fields||{},l=s.mapValue.fields||{};if(Tp(a)!==Tp(l))return!1;for(const c in a)if(a.hasOwnProperty(c)&&(l[c]===void 0||!hi(a[c],l[c])))return!1;return!0})(n,e);default:return ae(52216,{left:n})}}function nl(n,e){return(n.values||[]).find((t=>hi(t,e)))!==void 0}function jo(n,e){if(n===e)return 0;const t=fs(n),r=fs(e);if(t!==r)return Re(t,r);switch(t){case 0:case 9007199254740991:return 0;case 1:return Re(n.booleanValue,e.booleanValue);case 2:return(function(s,a){const l=$t(s.integerValue||s.doubleValue),c=$t(a.integerValue||a.doubleValue);return l<c?-1:l>c?1:l===c?0:isNaN(l)?isNaN(c)?0:-1:1})(n,e);case 3:return Ap(n.timestampValue,e.timestampValue);case 4:return Ap(el(n),el(e));case 5:return Mh(n.stringValue,e.stringValue);case 6:return(function(s,a){const l=ds(s),c=ds(a);return l.compareTo(c)})(n.bytesValue,e.bytesValue);case 7:return(function(s,a){const l=s.split("/"),c=a.split("/");for(let h=0;h<l.length&&h<c.length;h++){const f=Re(l[h],c[h]);if(f!==0)return f}return Re(l.length,c.length)})(n.referenceValue,e.referenceValue);case 8:return(function(s,a){const l=Re($t(s.latitude),$t(a.latitude));return l!==0?l:Re($t(s.longitude),$t(a.longitude))})(n.geoPointValue,e.geoPointValue);case 9:return bp(n.arrayValue,e.arrayValue);case 10:return(function(s,a){var l,c,h,f;const m=s.fields||{},_=a.fields||{},I=(l=m[Nc])===null||l===void 0?void 0:l.arrayValue,w=(c=_[Nc])===null||c===void 0?void 0:c.arrayValue,D=Re(((h=I==null?void 0:I.values)===null||h===void 0?void 0:h.length)||0,((f=w==null?void 0:w.values)===null||f===void 0?void 0:f.length)||0);return D!==0?D:bp(I,w)})(n.mapValue,e.mapValue);case 11:return(function(s,a){if(s===Jl.mapValue&&a===Jl.mapValue)return 0;if(s===Jl.mapValue)return 1;if(a===Jl.mapValue)return-1;const l=s.fields||{},c=Object.keys(l),h=a.fields||{},f=Object.keys(h);c.sort(),f.sort();for(let m=0;m<c.length&&m<f.length;++m){const _=Mh(c[m],f[m]);if(_!==0)return _;const I=jo(l[c[m]],h[f[m]]);if(I!==0)return I}return Re(c.length,f.length)})(n.mapValue,e.mapValue);default:throw ae(23264,{le:t})}}function Ap(n,e){if(typeof n=="string"&&typeof e=="string"&&n.length===e.length)return Re(n,e);const t=hs(n),r=hs(e),i=Re(t.seconds,r.seconds);return i!==0?i:Re(t.nanos,r.nanos)}function bp(n,e){const t=n.values||[],r=e.values||[];for(let i=0;i<t.length&&i<r.length;++i){const s=jo(t[i],r[i]);if(s)return s}return Re(t.length,r.length)}function Ho(n){return xh(n)}function xh(n){return"nullValue"in n?"null":"booleanValue"in n?""+n.booleanValue:"integerValue"in n?""+n.integerValue:"doubleValue"in n?""+n.doubleValue:"timestampValue"in n?(function(t){const r=hs(t);return`time(${r.seconds},${r.nanos})`})(n.timestampValue):"stringValue"in n?n.stringValue:"bytesValue"in n?(function(t){return ds(t).toBase64()})(n.bytesValue):"referenceValue"in n?(function(t){return ne.fromName(t).toString()})(n.referenceValue):"geoPointValue"in n?(function(t){return`geo(${t.latitude},${t.longitude})`})(n.geoPointValue):"arrayValue"in n?(function(t){let r="[",i=!0;for(const s of t.values||[])i?i=!1:r+=",",r+=xh(s);return r+"]"})(n.arrayValue):"mapValue"in n?(function(t){const r=Object.keys(t.fields||{}).sort();let i="{",s=!0;for(const a of r)s?s=!1:i+=",",i+=`${a}:${xh(t.fields[a])}`;return i+"}"})(n.mapValue):ae(61005,{value:n})}function hc(n){switch(fs(n)){case 0:case 1:return 4;case 2:return 8;case 3:case 8:return 16;case 4:const e=cu(n);return e?16+hc(e):16;case 5:return 2*n.stringValue.length;case 6:return ds(n.bytesValue).approximateByteSize();case 7:return n.referenceValue.length;case 9:return(function(r){return(r.values||[]).reduce(((i,s)=>i+hc(s)),0)})(n.arrayValue);case 10:case 11:return(function(r){let i=0;return Zs(r.fields,((s,a)=>{i+=s.length+hc(a)})),i})(n.mapValue);default:throw ae(13486,{value:n})}}function Dc(n,e){return{referenceValue:`projects/${n.projectId}/databases/${n.database}/documents/${e.path.canonicalString()}`}}function Lh(n){return!!n&&"integerValue"in n}function kd(n){return!!n&&"arrayValue"in n}function Sp(n){return!!n&&"nullValue"in n}function Rp(n){return!!n&&"doubleValue"in n&&isNaN(Number(n.doubleValue))}function nh(n){return!!n&&"mapValue"in n}function Hb(n){var e,t;return((t=(((e=n==null?void 0:n.mapValue)===null||e===void 0?void 0:e.fields)||{})[Av])===null||t===void 0?void 0:t.stringValue)===bv}function Ba(n){if(n.geoPointValue)return{geoPointValue:Object.assign({},n.geoPointValue)};if(n.timestampValue&&typeof n.timestampValue=="object")return{timestampValue:Object.assign({},n.timestampValue)};if(n.mapValue){const e={mapValue:{fields:{}}};return Zs(n.mapValue.fields,((t,r)=>e.mapValue.fields[t]=Ba(r))),e}if(n.arrayValue){const e={arrayValue:{values:[]}};for(let t=0;t<(n.arrayValue.values||[]).length;++t)e.arrayValue.values[t]=Ba(n.arrayValue.values[t]);return e}return Object.assign({},n)}function Wb(n){return(((n.mapValue||{}).fields||{}).__type__||{}).stringValue===jb}/**
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
 */class Gn{constructor(e){this.value=e}static empty(){return new Gn({mapValue:{}})}field(e){if(e.isEmpty())return this.value;{let t=this.value;for(let r=0;r<e.length-1;++r)if(t=(t.mapValue.fields||{})[e.get(r)],!nh(t))return null;return t=(t.mapValue.fields||{})[e.lastSegment()],t||null}}set(e,t){this.getFieldsMap(e.popLast())[e.lastSegment()]=Ba(t)}setAll(e){let t=kn.emptyPath(),r={},i=[];e.forEach(((a,l)=>{if(!t.isImmediateParentOf(l)){const c=this.getFieldsMap(t);this.applyChanges(c,r,i),r={},i=[],t=l.popLast()}a?r[l.lastSegment()]=Ba(a):i.push(l.lastSegment())}));const s=this.getFieldsMap(t);this.applyChanges(s,r,i)}delete(e){const t=this.field(e.popLast());nh(t)&&t.mapValue.fields&&delete t.mapValue.fields[e.lastSegment()]}isEqual(e){return hi(this.value,e.value)}getFieldsMap(e){let t=this.value;t.mapValue.fields||(t.mapValue={fields:{}});for(let r=0;r<e.length;++r){let i=t.mapValue.fields[e.get(r)];nh(i)&&i.mapValue.fields||(i={mapValue:{fields:{}}},t.mapValue.fields[e.get(r)]=i),t=i}return t.mapValue.fields}applyChanges(e,t,r){Zs(t,((i,s)=>e[i]=s));for(const i of r)delete e[i]}clone(){return new Gn(Ba(this.value))}}/**
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
 */class gn{constructor(e,t,r,i,s,a,l){this.key=e,this.documentType=t,this.version=r,this.readTime=i,this.createTime=s,this.data=a,this.documentState=l}static newInvalidDocument(e){return new gn(e,0,pe.min(),pe.min(),pe.min(),Gn.empty(),0)}static newFoundDocument(e,t,r,i){return new gn(e,1,t,pe.min(),r,i,0)}static newNoDocument(e,t){return new gn(e,2,t,pe.min(),pe.min(),Gn.empty(),0)}static newUnknownDocument(e,t){return new gn(e,3,t,pe.min(),pe.min(),Gn.empty(),2)}convertToFoundDocument(e,t){return!this.createTime.isEqual(pe.min())||this.documentType!==2&&this.documentType!==0||(this.createTime=e),this.version=e,this.documentType=1,this.data=t,this.documentState=0,this}convertToNoDocument(e){return this.version=e,this.documentType=2,this.data=Gn.empty(),this.documentState=0,this}convertToUnknownDocument(e){return this.version=e,this.documentType=3,this.data=Gn.empty(),this.documentState=2,this}setHasCommittedMutations(){return this.documentState=2,this}setHasLocalMutations(){return this.documentState=1,this.version=pe.min(),this}setReadTime(e){return this.readTime=e,this}get hasLocalMutations(){return this.documentState===1}get hasCommittedMutations(){return this.documentState===2}get hasPendingWrites(){return this.hasLocalMutations||this.hasCommittedMutations}isValidDocument(){return this.documentType!==0}isFoundDocument(){return this.documentType===1}isNoDocument(){return this.documentType===2}isUnknownDocument(){return this.documentType===3}isEqual(e){return e instanceof gn&&this.key.isEqual(e.key)&&this.version.isEqual(e.version)&&this.documentType===e.documentType&&this.documentState===e.documentState&&this.data.isEqual(e.data)}mutableCopy(){return new gn(this.key,this.documentType,this.version,this.readTime,this.createTime,this.data.clone(),this.documentState)}toString(){return`Document(${this.key}, ${this.version}, ${JSON.stringify(this.data.value)}, {createTime: ${this.createTime}}), {documentType: ${this.documentType}}), {documentState: ${this.documentState}})`}}/**
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
 */class Wo{constructor(e,t){this.position=e,this.inclusive=t}}function Cp(n,e,t){let r=0;for(let i=0;i<n.position.length;i++){const s=e[i],a=n.position[i];if(s.field.isKeyField()?r=ne.comparator(ne.fromName(a.referenceValue),t.key):r=jo(a,t.data.field(s.field)),s.dir==="desc"&&(r*=-1),r!==0)break}return r}function Pp(n,e){if(n===null)return e===null;if(e===null||n.inclusive!==e.inclusive||n.position.length!==e.position.length)return!1;for(let t=0;t<n.position.length;t++)if(!hi(n.position[t],e.position[t]))return!1;return!0}/**
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
 */class rl{constructor(e,t="asc"){this.field=e,this.dir=t}}function Gb(n,e){return n.dir===e.dir&&n.field.isEqual(e.field)}/**
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
 */class Sv{}class Jt extends Sv{constructor(e,t,r){super(),this.field=e,this.op=t,this.value=r}static create(e,t,r){return e.isKeyField()?t==="in"||t==="not-in"?this.createKeyFieldInFilter(e,t,r):new Qb(e,t,r):t==="array-contains"?new Xb(e,r):t==="in"?new Zb(e,r):t==="not-in"?new e1(e,r):t==="array-contains-any"?new t1(e,r):new Jt(e,t,r)}static createKeyFieldInFilter(e,t,r){return t==="in"?new Yb(e,r):new Jb(e,r)}matches(e){const t=e.data.field(this.field);return this.op==="!="?t!==null&&t.nullValue===void 0&&this.matchesComparison(jo(t,this.value)):t!==null&&fs(this.value)===fs(t)&&this.matchesComparison(jo(t,this.value))}matchesComparison(e){switch(this.op){case"<":return e<0;case"<=":return e<=0;case"==":return e===0;case"!=":return e!==0;case">":return e>0;case">=":return e>=0;default:return ae(47266,{operator:this.op})}}isInequality(){return["<","<=",">",">=","!=","not-in"].indexOf(this.op)>=0}getFlattenedFilters(){return[this]}getFilters(){return[this]}}class Fr extends Sv{constructor(e,t){super(),this.filters=e,this.op=t,this.he=null}static create(e,t){return new Fr(e,t)}matches(e){return Rv(this)?this.filters.find((t=>!t.matches(e)))===void 0:this.filters.find((t=>t.matches(e)))!==void 0}getFlattenedFilters(){return this.he!==null||(this.he=this.filters.reduce(((e,t)=>e.concat(t.getFlattenedFilters())),[])),this.he}getFilters(){return Object.assign([],this.filters)}}function Rv(n){return n.op==="and"}function Cv(n){return Kb(n)&&Rv(n)}function Kb(n){for(const e of n.filters)if(e instanceof Fr)return!1;return!0}function Fh(n){if(n instanceof Jt)return n.field.canonicalString()+n.op.toString()+Ho(n.value);if(Cv(n))return n.filters.map((e=>Fh(e))).join(",");{const e=n.filters.map((t=>Fh(t))).join(",");return`${n.op}(${e})`}}function Pv(n,e){return n instanceof Jt?(function(r,i){return i instanceof Jt&&r.op===i.op&&r.field.isEqual(i.field)&&hi(r.value,i.value)})(n,e):n instanceof Fr?(function(r,i){return i instanceof Fr&&r.op===i.op&&r.filters.length===i.filters.length?r.filters.reduce(((s,a,l)=>s&&Pv(a,i.filters[l])),!0):!1})(n,e):void ae(19439)}function kv(n){return n instanceof Jt?(function(t){return`${t.field.canonicalString()} ${t.op} ${Ho(t.value)}`})(n):n instanceof Fr?(function(t){return t.op.toString()+" {"+t.getFilters().map(kv).join(" ,")+"}"})(n):"Filter"}class Qb extends Jt{constructor(e,t,r){super(e,t,r),this.key=ne.fromName(r.referenceValue)}matches(e){const t=ne.comparator(e.key,this.key);return this.matchesComparison(t)}}class Yb extends Jt{constructor(e,t){super(e,"in",t),this.keys=Nv("in",t)}matches(e){return this.keys.some((t=>t.isEqual(e.key)))}}class Jb extends Jt{constructor(e,t){super(e,"not-in",t),this.keys=Nv("not-in",t)}matches(e){return!this.keys.some((t=>t.isEqual(e.key)))}}function Nv(n,e){var t;return(((t=e.arrayValue)===null||t===void 0?void 0:t.values)||[]).map((r=>ne.fromName(r.referenceValue)))}class Xb extends Jt{constructor(e,t){super(e,"array-contains",t)}matches(e){const t=e.data.field(this.field);return kd(t)&&nl(t.arrayValue,this.value)}}class Zb extends Jt{constructor(e,t){super(e,"in",t)}matches(e){const t=e.data.field(this.field);return t!==null&&nl(this.value.arrayValue,t)}}class e1 extends Jt{constructor(e,t){super(e,"not-in",t)}matches(e){if(nl(this.value.arrayValue,{nullValue:"NULL_VALUE"}))return!1;const t=e.data.field(this.field);return t!==null&&t.nullValue===void 0&&!nl(this.value.arrayValue,t)}}class t1 extends Jt{constructor(e,t){super(e,"array-contains-any",t)}matches(e){const t=e.data.field(this.field);return!(!kd(t)||!t.arrayValue.values)&&t.arrayValue.values.some((r=>nl(this.value.arrayValue,r)))}}/**
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
 */class n1{constructor(e,t=null,r=[],i=[],s=null,a=null,l=null){this.path=e,this.collectionGroup=t,this.orderBy=r,this.filters=i,this.limit=s,this.startAt=a,this.endAt=l,this.Pe=null}}function kp(n,e=null,t=[],r=[],i=null,s=null,a=null){return new n1(n,e,t,r,i,s,a)}function Nd(n){const e=Ce(n);if(e.Pe===null){let t=e.path.canonicalString();e.collectionGroup!==null&&(t+="|cg:"+e.collectionGroup),t+="|f:",t+=e.filters.map((r=>Fh(r))).join(","),t+="|ob:",t+=e.orderBy.map((r=>(function(s){return s.field.canonicalString()+s.dir})(r))).join(","),Il(e.limit)||(t+="|l:",t+=e.limit),e.startAt&&(t+="|lb:",t+=e.startAt.inclusive?"b:":"a:",t+=e.startAt.position.map((r=>Ho(r))).join(",")),e.endAt&&(t+="|ub:",t+=e.endAt.inclusive?"a:":"b:",t+=e.endAt.position.map((r=>Ho(r))).join(",")),e.Pe=t}return e.Pe}function Dd(n,e){if(n.limit!==e.limit||n.orderBy.length!==e.orderBy.length)return!1;for(let t=0;t<n.orderBy.length;t++)if(!Gb(n.orderBy[t],e.orderBy[t]))return!1;if(n.filters.length!==e.filters.length)return!1;for(let t=0;t<n.filters.length;t++)if(!Pv(n.filters[t],e.filters[t]))return!1;return n.collectionGroup===e.collectionGroup&&!!n.path.isEqual(e.path)&&!!Pp(n.startAt,e.startAt)&&Pp(n.endAt,e.endAt)}function Uh(n){return ne.isDocumentKey(n.path)&&n.collectionGroup===null&&n.filters.length===0}/**
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
 */class eo{constructor(e,t=null,r=[],i=[],s=null,a="F",l=null,c=null){this.path=e,this.collectionGroup=t,this.explicitOrderBy=r,this.filters=i,this.limit=s,this.limitType=a,this.startAt=l,this.endAt=c,this.Te=null,this.Ie=null,this.de=null,this.startAt,this.endAt}}function r1(n,e,t,r,i,s,a,l){return new eo(n,e,t,r,i,s,a,l)}function Od(n){return new eo(n)}function Np(n){return n.filters.length===0&&n.limit===null&&n.startAt==null&&n.endAt==null&&(n.explicitOrderBy.length===0||n.explicitOrderBy.length===1&&n.explicitOrderBy[0].field.isKeyField())}function Vd(n){return n.collectionGroup!==null}function Co(n){const e=Ce(n);if(e.Te===null){e.Te=[];const t=new Set;for(const s of e.explicitOrderBy)e.Te.push(s),t.add(s.field.canonicalString());const r=e.explicitOrderBy.length>0?e.explicitOrderBy[e.explicitOrderBy.length-1].dir:"asc";(function(a){let l=new ln(kn.comparator);return a.filters.forEach((c=>{c.getFlattenedFilters().forEach((h=>{h.isInequality()&&(l=l.add(h.field))}))})),l})(e).forEach((s=>{t.has(s.canonicalString())||s.isKeyField()||e.Te.push(new rl(s,r))})),t.has(kn.keyField().canonicalString())||e.Te.push(new rl(kn.keyField(),r))}return e.Te}function ai(n){const e=Ce(n);return e.Ie||(e.Ie=Dv(e,Co(n))),e.Ie}function i1(n){const e=Ce(n);return e.de||(e.de=Dv(e,n.explicitOrderBy)),e.de}function Dv(n,e){if(n.limitType==="F")return kp(n.path,n.collectionGroup,e,n.filters,n.limit,n.startAt,n.endAt);{e=e.map((i=>{const s=i.dir==="desc"?"asc":"desc";return new rl(i.field,s)}));const t=n.endAt?new Wo(n.endAt.position,n.endAt.inclusive):null,r=n.startAt?new Wo(n.startAt.position,n.startAt.inclusive):null;return kp(n.path,n.collectionGroup,e,n.filters,n.limit,t,r)}}function $h(n,e){const t=n.filters.concat([e]);return new eo(n.path,n.collectionGroup,n.explicitOrderBy.slice(),t,n.limit,n.limitType,n.startAt,n.endAt)}function Oc(n,e,t){return new eo(n.path,n.collectionGroup,n.explicitOrderBy.slice(),n.filters.slice(),e,t,n.startAt,n.endAt)}function uu(n,e){return Dd(ai(n),ai(e))&&n.limitType===e.limitType}function Ov(n){return`${Nd(ai(n))}|lt:${n.limitType}`}function vo(n){return`Query(target=${(function(t){let r=t.path.canonicalString();return t.collectionGroup!==null&&(r+=" collectionGroup="+t.collectionGroup),t.filters.length>0&&(r+=`, filters: [${t.filters.map((i=>kv(i))).join(", ")}]`),Il(t.limit)||(r+=", limit: "+t.limit),t.orderBy.length>0&&(r+=`, orderBy: [${t.orderBy.map((i=>(function(a){return`${a.field.canonicalString()} (${a.dir})`})(i))).join(", ")}]`),t.startAt&&(r+=", startAt: ",r+=t.startAt.inclusive?"b:":"a:",r+=t.startAt.position.map((i=>Ho(i))).join(",")),t.endAt&&(r+=", endAt: ",r+=t.endAt.inclusive?"a:":"b:",r+=t.endAt.position.map((i=>Ho(i))).join(",")),`Target(${r})`})(ai(n))}; limitType=${n.limitType})`}function hu(n,e){return e.isFoundDocument()&&(function(r,i){const s=i.key.path;return r.collectionGroup!==null?i.key.hasCollectionId(r.collectionGroup)&&r.path.isPrefixOf(s):ne.isDocumentKey(r.path)?r.path.isEqual(s):r.path.isImmediateParentOf(s)})(n,e)&&(function(r,i){for(const s of Co(r))if(!s.field.isKeyField()&&i.data.field(s.field)===null)return!1;return!0})(n,e)&&(function(r,i){for(const s of r.filters)if(!s.matches(i))return!1;return!0})(n,e)&&(function(r,i){return!(r.startAt&&!(function(a,l,c){const h=Cp(a,l,c);return a.inclusive?h<=0:h<0})(r.startAt,Co(r),i)||r.endAt&&!(function(a,l,c){const h=Cp(a,l,c);return a.inclusive?h>=0:h>0})(r.endAt,Co(r),i))})(n,e)}function s1(n){return n.collectionGroup||(n.path.length%2==1?n.path.lastSegment():n.path.get(n.path.length-2))}function Vv(n){return(e,t)=>{let r=!1;for(const i of Co(n)){const s=o1(i,e,t);if(s!==0)return s;r=r||i.field.isKeyField()}return 0}}function o1(n,e,t){const r=n.field.isKeyField()?ne.comparator(e.key,t.key):(function(s,a,l){const c=a.data.field(s),h=l.data.field(s);return c!==null&&h!==null?jo(c,h):ae(42886)})(n.field,e,t);switch(n.dir){case"asc":return r;case"desc":return-1*r;default:return ae(19790,{direction:n.dir})}}/**
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
 */class to{constructor(e,t){this.mapKeyFn=e,this.equalsFn=t,this.inner={},this.innerSize=0}get(e){const t=this.mapKeyFn(e),r=this.inner[t];if(r!==void 0){for(const[i,s]of r)if(this.equalsFn(i,e))return s}}has(e){return this.get(e)!==void 0}set(e,t){const r=this.mapKeyFn(e),i=this.inner[r];if(i===void 0)return this.inner[r]=[[e,t]],void this.innerSize++;for(let s=0;s<i.length;s++)if(this.equalsFn(i[s][0],e))return void(i[s]=[e,t]);i.push([e,t]),this.innerSize++}delete(e){const t=this.mapKeyFn(e),r=this.inner[t];if(r===void 0)return!1;for(let i=0;i<r.length;i++)if(this.equalsFn(r[i][0],e))return r.length===1?delete this.inner[t]:r.splice(i,1),this.innerSize--,!0;return!1}forEach(e){Zs(this.inner,((t,r)=>{for(const[i,s]of r)e(i,s)}))}isEmpty(){return vv(this.inner)}size(){return this.innerSize}}/**
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
 */const a1=new zt(ne.comparator);function ps(){return a1}const Mv=new zt(ne.comparator);function Oa(...n){let e=Mv;for(const t of n)e=e.insert(t.key,t);return e}function l1(n){let e=Mv;return n.forEach(((t,r)=>e=e.insert(t,r.overlayedDocument))),e}function Ms(){return za()}function xv(){return za()}function za(){return new to((n=>n.toString()),((n,e)=>n.isEqual(e)))}const c1=new ln(ne.comparator);function Ke(...n){let e=c1;for(const t of n)e=e.add(t);return e}const u1=new ln(Re);function h1(){return u1}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Md(n,e){if(n.useProto3Json){if(isNaN(e))return{doubleValue:"NaN"};if(e===1/0)return{doubleValue:"Infinity"};if(e===-1/0)return{doubleValue:"-Infinity"}}return{doubleValue:Pc(e)?"-0":e}}function Lv(n){return{integerValue:""+n}}function d1(n,e){return Fb(e)?Lv(e):Md(n,e)}/**
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
 */class du{constructor(){this._=void 0}}function f1(n,e,t){return n instanceof il?(function(i,s){const a={fields:{[wv]:{stringValue:Ev},[Iv]:{timestampValue:{seconds:i.seconds,nanos:i.nanoseconds}}}};return s&&lu(s)&&(s=cu(s)),s&&(a.fields[Tv]=s),{mapValue:a}})(t,e):n instanceof sl?Fv(n,e):n instanceof ol?Uv(n,e):(function(i,s){const a=m1(i,s),l=Dp(a)+Dp(i.Ee);return Lh(a)&&Lh(i.Ee)?Lv(l):Md(i.serializer,l)})(n,e)}function p1(n,e,t){return n instanceof sl?Fv(n,e):n instanceof ol?Uv(n,e):t}function m1(n,e){return n instanceof Vc?(function(r){return Lh(r)||(function(s){return!!s&&"doubleValue"in s})(r)})(e)?e:{integerValue:0}:null}class il extends du{}class sl extends du{constructor(e){super(),this.elements=e}}function Fv(n,e){const t=$v(e);for(const r of n.elements)t.some((i=>hi(i,r)))||t.push(r);return{arrayValue:{values:t}}}class ol extends du{constructor(e){super(),this.elements=e}}function Uv(n,e){let t=$v(e);for(const r of n.elements)t=t.filter((i=>!hi(i,r)));return{arrayValue:{values:t}}}class Vc extends du{constructor(e,t){super(),this.serializer=e,this.Ee=t}}function Dp(n){return $t(n.integerValue||n.doubleValue)}function $v(n){return kd(n)&&n.arrayValue.values?n.arrayValue.values.slice():[]}/**
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
 */class g1{constructor(e,t){this.field=e,this.transform=t}}function _1(n,e){return n.field.isEqual(e.field)&&(function(r,i){return r instanceof sl&&i instanceof sl||r instanceof ol&&i instanceof ol?Bo(r.elements,i.elements,hi):r instanceof Vc&&i instanceof Vc?hi(r.Ee,i.Ee):r instanceof il&&i instanceof il})(n.transform,e.transform)}class Er{constructor(e,t){this.updateTime=e,this.exists=t}static none(){return new Er}static exists(e){return new Er(void 0,e)}static updateTime(e){return new Er(e)}get isNone(){return this.updateTime===void 0&&this.exists===void 0}isEqual(e){return this.exists===e.exists&&(this.updateTime?!!e.updateTime&&this.updateTime.isEqual(e.updateTime):!e.updateTime)}}function dc(n,e){return n.updateTime!==void 0?e.isFoundDocument()&&e.version.isEqual(n.updateTime):n.exists===void 0||n.exists===e.isFoundDocument()}class fu{}function qv(n,e){if(!n.hasLocalMutations||e&&e.fields.length===0)return null;if(e===null)return n.isNoDocument()?new xd(n.key,Er.none()):new Al(n.key,n.data,Er.none());{const t=n.data,r=Gn.empty();let i=new ln(kn.comparator);for(let s of e.fields)if(!i.has(s)){let a=t.field(s);a===null&&s.length>1&&(s=s.popLast(),a=t.field(s)),a===null?r.delete(s):r.set(s,a),i=i.add(s)}return new no(n.key,r,new wr(i.toArray()),Er.none())}}function v1(n,e,t){n instanceof Al?(function(i,s,a){const l=i.value.clone(),c=Vp(i.fieldTransforms,s,a.transformResults);l.setAll(c),s.convertToFoundDocument(a.version,l).setHasCommittedMutations()})(n,e,t):n instanceof no?(function(i,s,a){if(!dc(i.precondition,s))return void s.convertToUnknownDocument(a.version);const l=Vp(i.fieldTransforms,s,a.transformResults),c=s.data;c.setAll(Bv(i)),c.setAll(l),s.convertToFoundDocument(a.version,c).setHasCommittedMutations()})(n,e,t):(function(i,s,a){s.convertToNoDocument(a.version).setHasCommittedMutations()})(0,e,t)}function ja(n,e,t,r){return n instanceof Al?(function(s,a,l,c){if(!dc(s.precondition,a))return l;const h=s.value.clone(),f=Mp(s.fieldTransforms,c,a);return h.setAll(f),a.convertToFoundDocument(a.version,h).setHasLocalMutations(),null})(n,e,t,r):n instanceof no?(function(s,a,l,c){if(!dc(s.precondition,a))return l;const h=Mp(s.fieldTransforms,c,a),f=a.data;return f.setAll(Bv(s)),f.setAll(h),a.convertToFoundDocument(a.version,f).setHasLocalMutations(),l===null?null:l.unionWith(s.fieldMask.fields).unionWith(s.fieldTransforms.map((m=>m.field)))})(n,e,t,r):(function(s,a,l){return dc(s.precondition,a)?(a.convertToNoDocument(a.version).setHasLocalMutations(),null):l})(n,e,t)}function Op(n,e){return n.type===e.type&&!!n.key.isEqual(e.key)&&!!n.precondition.isEqual(e.precondition)&&!!(function(r,i){return r===void 0&&i===void 0||!(!r||!i)&&Bo(r,i,((s,a)=>_1(s,a)))})(n.fieldTransforms,e.fieldTransforms)&&(n.type===0?n.value.isEqual(e.value):n.type!==1||n.data.isEqual(e.data)&&n.fieldMask.isEqual(e.fieldMask))}class Al extends fu{constructor(e,t,r,i=[]){super(),this.key=e,this.value=t,this.precondition=r,this.fieldTransforms=i,this.type=0}getFieldMask(){return null}}class no extends fu{constructor(e,t,r,i,s=[]){super(),this.key=e,this.data=t,this.fieldMask=r,this.precondition=i,this.fieldTransforms=s,this.type=1}getFieldMask(){return this.fieldMask}}function Bv(n){const e=new Map;return n.fieldMask.fields.forEach((t=>{if(!t.isEmpty()){const r=n.data.field(t);e.set(t,r)}})),e}function Vp(n,e,t){const r=new Map;ut(n.length===t.length,32656,{Ae:t.length,Re:n.length});for(let i=0;i<t.length;i++){const s=n[i],a=s.transform,l=e.data.field(s.field);r.set(s.field,p1(a,l,t[i]))}return r}function Mp(n,e,t){const r=new Map;for(const i of n){const s=i.transform,a=t.data.field(i.field);r.set(i.field,f1(s,a,e))}return r}class xd extends fu{constructor(e,t){super(),this.key=e,this.precondition=t,this.type=2,this.fieldTransforms=[]}getFieldMask(){return null}}class zv extends fu{constructor(e,t){super(),this.key=e,this.precondition=t,this.type=3,this.fieldTransforms=[]}getFieldMask(){return null}}/**
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
 */class y1{constructor(e,t,r,i){this.batchId=e,this.localWriteTime=t,this.baseMutations=r,this.mutations=i}applyToRemoteDocument(e,t){const r=t.mutationResults;for(let i=0;i<this.mutations.length;i++){const s=this.mutations[i];s.key.isEqual(e.key)&&v1(s,e,r[i])}}applyToLocalView(e,t){for(const r of this.baseMutations)r.key.isEqual(e.key)&&(t=ja(r,e,t,this.localWriteTime));for(const r of this.mutations)r.key.isEqual(e.key)&&(t=ja(r,e,t,this.localWriteTime));return t}applyToLocalDocumentSet(e,t){const r=xv();return this.mutations.forEach((i=>{const s=e.get(i.key),a=s.overlayedDocument;let l=this.applyToLocalView(a,s.mutatedFields);l=t.has(i.key)?null:l;const c=qv(a,l);c!==null&&r.set(i.key,c),a.isValidDocument()||a.convertToNoDocument(pe.min())})),r}keys(){return this.mutations.reduce(((e,t)=>e.add(t.key)),Ke())}isEqual(e){return this.batchId===e.batchId&&Bo(this.mutations,e.mutations,((t,r)=>Op(t,r)))&&Bo(this.baseMutations,e.baseMutations,((t,r)=>Op(t,r)))}}/**
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
 */class E1{constructor(e,t){this.largestBatchId=e,this.mutation=t}getKey(){return this.mutation.key}isEqual(e){return e!==null&&this.mutation===e.mutation}toString(){return`Overlay{
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
 */class w1{constructor(e,t,r){this.alias=e,this.aggregateType=t,this.fieldPath=r}}/**
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
 */class T1{constructor(e,t){this.count=e,this.unchangedNames=t}}/**
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
 */var Qt,je;function I1(n){switch(n){case x.OK:return ae(64938);case x.CANCELLED:case x.UNKNOWN:case x.DEADLINE_EXCEEDED:case x.RESOURCE_EXHAUSTED:case x.INTERNAL:case x.UNAVAILABLE:case x.UNAUTHENTICATED:return!1;case x.INVALID_ARGUMENT:case x.NOT_FOUND:case x.ALREADY_EXISTS:case x.PERMISSION_DENIED:case x.FAILED_PRECONDITION:case x.ABORTED:case x.OUT_OF_RANGE:case x.UNIMPLEMENTED:case x.DATA_LOSS:return!0;default:return ae(15467,{code:n})}}function jv(n){if(n===void 0)return Ni("GRPC error has no .code"),x.UNKNOWN;switch(n){case Qt.OK:return x.OK;case Qt.CANCELLED:return x.CANCELLED;case Qt.UNKNOWN:return x.UNKNOWN;case Qt.DEADLINE_EXCEEDED:return x.DEADLINE_EXCEEDED;case Qt.RESOURCE_EXHAUSTED:return x.RESOURCE_EXHAUSTED;case Qt.INTERNAL:return x.INTERNAL;case Qt.UNAVAILABLE:return x.UNAVAILABLE;case Qt.UNAUTHENTICATED:return x.UNAUTHENTICATED;case Qt.INVALID_ARGUMENT:return x.INVALID_ARGUMENT;case Qt.NOT_FOUND:return x.NOT_FOUND;case Qt.ALREADY_EXISTS:return x.ALREADY_EXISTS;case Qt.PERMISSION_DENIED:return x.PERMISSION_DENIED;case Qt.FAILED_PRECONDITION:return x.FAILED_PRECONDITION;case Qt.ABORTED:return x.ABORTED;case Qt.OUT_OF_RANGE:return x.OUT_OF_RANGE;case Qt.UNIMPLEMENTED:return x.UNIMPLEMENTED;case Qt.DATA_LOSS:return x.DATA_LOSS;default:return ae(39323,{code:n})}}(je=Qt||(Qt={}))[je.OK=0]="OK",je[je.CANCELLED=1]="CANCELLED",je[je.UNKNOWN=2]="UNKNOWN",je[je.INVALID_ARGUMENT=3]="INVALID_ARGUMENT",je[je.DEADLINE_EXCEEDED=4]="DEADLINE_EXCEEDED",je[je.NOT_FOUND=5]="NOT_FOUND",je[je.ALREADY_EXISTS=6]="ALREADY_EXISTS",je[je.PERMISSION_DENIED=7]="PERMISSION_DENIED",je[je.UNAUTHENTICATED=16]="UNAUTHENTICATED",je[je.RESOURCE_EXHAUSTED=8]="RESOURCE_EXHAUSTED",je[je.FAILED_PRECONDITION=9]="FAILED_PRECONDITION",je[je.ABORTED=10]="ABORTED",je[je.OUT_OF_RANGE=11]="OUT_OF_RANGE",je[je.UNIMPLEMENTED=12]="UNIMPLEMENTED",je[je.INTERNAL=13]="INTERNAL",je[je.UNAVAILABLE=14]="UNAVAILABLE",je[je.DATA_LOSS=15]="DATA_LOSS";/**
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
 */const A1=new ns([4294967295,4294967295],0);function xp(n){const e=pv().encode(n),t=new av;return t.update(e),new Uint8Array(t.digest())}function Lp(n){const e=new DataView(n.buffer),t=e.getUint32(0,!0),r=e.getUint32(4,!0),i=e.getUint32(8,!0),s=e.getUint32(12,!0);return[new ns([t,r],0),new ns([i,s],0)]}class Ld{constructor(e,t,r){if(this.bitmap=e,this.padding=t,this.hashCount=r,t<0||t>=8)throw new Va(`Invalid padding: ${t}`);if(r<0)throw new Va(`Invalid hash count: ${r}`);if(e.length>0&&this.hashCount===0)throw new Va(`Invalid hash count: ${r}`);if(e.length===0&&t!==0)throw new Va(`Invalid padding when bitmap length is 0: ${t}`);this.fe=8*e.length-t,this.ge=ns.fromNumber(this.fe)}pe(e,t,r){let i=e.add(t.multiply(ns.fromNumber(r)));return i.compare(A1)===1&&(i=new ns([i.getBits(0),i.getBits(1)],0)),i.modulo(this.ge).toNumber()}ye(e){return!!(this.bitmap[Math.floor(e/8)]&1<<e%8)}mightContain(e){if(this.fe===0)return!1;const t=xp(e),[r,i]=Lp(t);for(let s=0;s<this.hashCount;s++){const a=this.pe(r,i,s);if(!this.ye(a))return!1}return!0}static create(e,t,r){const i=e%8==0?0:8-e%8,s=new Uint8Array(Math.ceil(e/8)),a=new Ld(s,i,t);return r.forEach((l=>a.insert(l))),a}insert(e){if(this.fe===0)return;const t=xp(e),[r,i]=Lp(t);for(let s=0;s<this.hashCount;s++){const a=this.pe(r,i,s);this.we(a)}}we(e){const t=Math.floor(e/8),r=e%8;this.bitmap[t]|=1<<r}}class Va extends Error{constructor(){super(...arguments),this.name="BloomFilterError"}}/**
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
 */class pu{constructor(e,t,r,i,s){this.snapshotVersion=e,this.targetChanges=t,this.targetMismatches=r,this.documentUpdates=i,this.resolvedLimboDocuments=s}static createSynthesizedRemoteEventForCurrentChange(e,t,r){const i=new Map;return i.set(e,bl.createSynthesizedTargetChangeForCurrentChange(e,t,r)),new pu(pe.min(),i,new zt(Re),ps(),Ke())}}class bl{constructor(e,t,r,i,s){this.resumeToken=e,this.current=t,this.addedDocuments=r,this.modifiedDocuments=i,this.removedDocuments=s}static createSynthesizedTargetChangeForCurrentChange(e,t,r){return new bl(r,t,Ke(),Ke(),Ke())}}/**
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
 */class fc{constructor(e,t,r,i){this.Se=e,this.removedTargetIds=t,this.key=r,this.be=i}}class Hv{constructor(e,t){this.targetId=e,this.De=t}}class Wv{constructor(e,t,r=An.EMPTY_BYTE_STRING,i=null){this.state=e,this.targetIds=t,this.resumeToken=r,this.cause=i}}class Fp{constructor(){this.ve=0,this.Ce=Up(),this.Fe=An.EMPTY_BYTE_STRING,this.Me=!1,this.xe=!0}get current(){return this.Me}get resumeToken(){return this.Fe}get Oe(){return this.ve!==0}get Ne(){return this.xe}Be(e){e.approximateByteSize()>0&&(this.xe=!0,this.Fe=e)}Le(){let e=Ke(),t=Ke(),r=Ke();return this.Ce.forEach(((i,s)=>{switch(s){case 0:e=e.add(i);break;case 2:t=t.add(i);break;case 1:r=r.add(i);break;default:ae(38017,{changeType:s})}})),new bl(this.Fe,this.Me,e,t,r)}ke(){this.xe=!1,this.Ce=Up()}qe(e,t){this.xe=!0,this.Ce=this.Ce.insert(e,t)}Qe(e){this.xe=!0,this.Ce=this.Ce.remove(e)}$e(){this.ve+=1}Ue(){this.ve-=1,ut(this.ve>=0,3241,{ve:this.ve})}Ke(){this.xe=!0,this.Me=!0}}class b1{constructor(e){this.We=e,this.Ge=new Map,this.ze=ps(),this.je=Xl(),this.Je=Xl(),this.He=new zt(Re)}Ye(e){for(const t of e.Se)e.be&&e.be.isFoundDocument()?this.Ze(t,e.be):this.Xe(t,e.key,e.be);for(const t of e.removedTargetIds)this.Xe(t,e.key,e.be)}et(e){this.forEachTarget(e,(t=>{const r=this.tt(t);switch(e.state){case 0:this.nt(t)&&r.Be(e.resumeToken);break;case 1:r.Ue(),r.Oe||r.ke(),r.Be(e.resumeToken);break;case 2:r.Ue(),r.Oe||this.removeTarget(t);break;case 3:this.nt(t)&&(r.Ke(),r.Be(e.resumeToken));break;case 4:this.nt(t)&&(this.rt(t),r.Be(e.resumeToken));break;default:ae(56790,{state:e.state})}}))}forEachTarget(e,t){e.targetIds.length>0?e.targetIds.forEach(t):this.Ge.forEach(((r,i)=>{this.nt(i)&&t(i)}))}it(e){const t=e.targetId,r=e.De.count,i=this.st(t);if(i){const s=i.target;if(Uh(s))if(r===0){const a=new ne(s.path);this.Xe(t,a,gn.newNoDocument(a,pe.min()))}else ut(r===1,20013,{expectedCount:r});else{const a=this.ot(t);if(a!==r){const l=this._t(e),c=l?this.ut(l,e,a):1;if(c!==0){this.rt(t);const h=c===2?"TargetPurposeExistenceFilterMismatchBloom":"TargetPurposeExistenceFilterMismatch";this.He=this.He.insert(t,h)}}}}}_t(e){const t=e.De.unchangedNames;if(!t||!t.bits)return null;const{bits:{bitmap:r="",padding:i=0},hashCount:s=0}=t;let a,l;try{a=ds(r).toUint8Array()}catch(c){if(c instanceof yv)return Js("Decoding the base64 bloom filter in existence filter failed ("+c.message+"); ignoring the bloom filter and falling back to full re-query."),null;throw c}try{l=new Ld(a,i,s)}catch(c){return Js(c instanceof Va?"BloomFilter error: ":"Applying bloom filter failed: ",c),null}return l.fe===0?null:l}ut(e,t,r){return t.De.count===r-this.ht(e,t.targetId)?0:2}ht(e,t){const r=this.We.getRemoteKeysForTarget(t);let i=0;return r.forEach((s=>{const a=this.We.lt(),l=`projects/${a.projectId}/databases/${a.database}/documents/${s.path.canonicalString()}`;e.mightContain(l)||(this.Xe(t,s,null),i++)})),i}Pt(e){const t=new Map;this.Ge.forEach(((s,a)=>{const l=this.st(a);if(l){if(s.current&&Uh(l.target)){const c=new ne(l.target.path);this.Tt(c).has(a)||this.It(a,c)||this.Xe(a,c,gn.newNoDocument(c,e))}s.Ne&&(t.set(a,s.Le()),s.ke())}}));let r=Ke();this.Je.forEach(((s,a)=>{let l=!0;a.forEachWhile((c=>{const h=this.st(c);return!h||h.purpose==="TargetPurposeLimboResolution"||(l=!1,!1)})),l&&(r=r.add(s))})),this.ze.forEach(((s,a)=>a.setReadTime(e)));const i=new pu(e,t,this.He,this.ze,r);return this.ze=ps(),this.je=Xl(),this.Je=Xl(),this.He=new zt(Re),i}Ze(e,t){if(!this.nt(e))return;const r=this.It(e,t.key)?2:0;this.tt(e).qe(t.key,r),this.ze=this.ze.insert(t.key,t),this.je=this.je.insert(t.key,this.Tt(t.key).add(e)),this.Je=this.Je.insert(t.key,this.dt(t.key).add(e))}Xe(e,t,r){if(!this.nt(e))return;const i=this.tt(e);this.It(e,t)?i.qe(t,1):i.Qe(t),this.Je=this.Je.insert(t,this.dt(t).delete(e)),this.Je=this.Je.insert(t,this.dt(t).add(e)),r&&(this.ze=this.ze.insert(t,r))}removeTarget(e){this.Ge.delete(e)}ot(e){const t=this.tt(e).Le();return this.We.getRemoteKeysForTarget(e).size+t.addedDocuments.size-t.removedDocuments.size}$e(e){this.tt(e).$e()}tt(e){let t=this.Ge.get(e);return t||(t=new Fp,this.Ge.set(e,t)),t}dt(e){let t=this.Je.get(e);return t||(t=new ln(Re),this.Je=this.Je.insert(e,t)),t}Tt(e){let t=this.je.get(e);return t||(t=new ln(Re),this.je=this.je.insert(e,t)),t}nt(e){const t=this.st(e)!==null;return t||G("WatchChangeAggregator","Detected inactive target",e),t}st(e){const t=this.Ge.get(e);return t&&t.Oe?null:this.We.Et(e)}rt(e){this.Ge.set(e,new Fp),this.We.getRemoteKeysForTarget(e).forEach((t=>{this.Xe(e,t,null)}))}It(e,t){return this.We.getRemoteKeysForTarget(e).has(t)}}function Xl(){return new zt(ne.comparator)}function Up(){return new zt(ne.comparator)}const S1={asc:"ASCENDING",desc:"DESCENDING"},R1={"<":"LESS_THAN","<=":"LESS_THAN_OR_EQUAL",">":"GREATER_THAN",">=":"GREATER_THAN_OR_EQUAL","==":"EQUAL","!=":"NOT_EQUAL","array-contains":"ARRAY_CONTAINS",in:"IN","not-in":"NOT_IN","array-contains-any":"ARRAY_CONTAINS_ANY"},C1={and:"AND",or:"OR"};class P1{constructor(e,t){this.databaseId=e,this.useProto3Json=t}}function qh(n,e){return n.useProto3Json||Il(e)?e:{value:e}}function Mc(n,e){return n.useProto3Json?`${new Date(1e3*e.seconds).toISOString().replace(/\.\d*/,"").replace("Z","")}.${("000000000"+e.nanoseconds).slice(-9)}Z`:{seconds:""+e.seconds,nanos:e.nanoseconds}}function Gv(n,e){return n.useProto3Json?e.toBase64():e.toUint8Array()}function k1(n,e){return Mc(n,e.toTimestamp())}function Si(n){return ut(!!n,49232),pe.fromTimestamp((function(t){const r=hs(t);return new Tt(r.seconds,r.nanos)})(n))}function Fd(n,e){return Bh(n,e).canonicalString()}function Bh(n,e){const t=(function(i){return new ot(["projects",i.projectId,"databases",i.database])})(n).child("documents");return e===void 0?t:t.child(e)}function Kv(n){const e=ot.fromString(n);return ut(ey(e),10190,{key:e.toString()}),e}function xc(n,e){return Fd(n.databaseId,e.path)}function Ha(n,e){const t=Kv(e);if(t.get(1)!==n.databaseId.projectId)throw new B(x.INVALID_ARGUMENT,"Tried to deserialize key from different project: "+t.get(1)+" vs "+n.databaseId.projectId);if(t.get(3)!==n.databaseId.database)throw new B(x.INVALID_ARGUMENT,"Tried to deserialize key from different database: "+t.get(3)+" vs "+n.databaseId.database);return new ne(Yv(t))}function Qv(n,e){return Fd(n.databaseId,e)}function N1(n){const e=Kv(n);return e.length===4?ot.emptyPath():Yv(e)}function $p(n){return new ot(["projects",n.databaseId.projectId,"databases",n.databaseId.database]).canonicalString()}function Yv(n){return ut(n.length>4&&n.get(4)==="documents",29091,{key:n.toString()}),n.popFirst(5)}function qp(n,e,t){return{name:xc(n,e),fields:t.value.mapValue.fields}}function D1(n,e){return"found"in e?(function(r,i){ut(!!i.found,43571),i.found.name,i.found.updateTime;const s=Ha(r,i.found.name),a=Si(i.found.updateTime),l=i.found.createTime?Si(i.found.createTime):pe.min(),c=new Gn({mapValue:{fields:i.found.fields}});return gn.newFoundDocument(s,a,l,c)})(n,e):"missing"in e?(function(r,i){ut(!!i.missing,3894),ut(!!i.readTime,22933);const s=Ha(r,i.missing),a=Si(i.readTime);return gn.newNoDocument(s,a)})(n,e):ae(7234,{result:e})}function O1(n,e){let t;if("targetChange"in e){e.targetChange;const r=(function(h){return h==="NO_CHANGE"?0:h==="ADD"?1:h==="REMOVE"?2:h==="CURRENT"?3:h==="RESET"?4:ae(39313,{state:h})})(e.targetChange.targetChangeType||"NO_CHANGE"),i=e.targetChange.targetIds||[],s=(function(h,f){return h.useProto3Json?(ut(f===void 0||typeof f=="string",58123),An.fromBase64String(f||"")):(ut(f===void 0||f instanceof Buffer||f instanceof Uint8Array,16193),An.fromUint8Array(f||new Uint8Array))})(n,e.targetChange.resumeToken),a=e.targetChange.cause,l=a&&(function(h){const f=h.code===void 0?x.UNKNOWN:jv(h.code);return new B(f,h.message||"")})(a);t=new Wv(r,i,s,l||null)}else if("documentChange"in e){e.documentChange;const r=e.documentChange;r.document,r.document.name,r.document.updateTime;const i=Ha(n,r.document.name),s=Si(r.document.updateTime),a=r.document.createTime?Si(r.document.createTime):pe.min(),l=new Gn({mapValue:{fields:r.document.fields}}),c=gn.newFoundDocument(i,s,a,l),h=r.targetIds||[],f=r.removedTargetIds||[];t=new fc(h,f,c.key,c)}else if("documentDelete"in e){e.documentDelete;const r=e.documentDelete;r.document;const i=Ha(n,r.document),s=r.readTime?Si(r.readTime):pe.min(),a=gn.newNoDocument(i,s),l=r.removedTargetIds||[];t=new fc([],l,a.key,a)}else if("documentRemove"in e){e.documentRemove;const r=e.documentRemove;r.document;const i=Ha(n,r.document),s=r.removedTargetIds||[];t=new fc([],s,i,null)}else{if(!("filter"in e))return ae(11601,{At:e});{e.filter;const r=e.filter;r.targetId;const{count:i=0,unchangedNames:s}=r,a=new T1(i,s),l=r.targetId;t=new Hv(l,a)}}return t}function V1(n,e){let t;if(e instanceof Al)t={update:qp(n,e.key,e.value)};else if(e instanceof xd)t={delete:xc(n,e.key)};else if(e instanceof no)t={update:qp(n,e.key,e.data),updateMask:B1(e.fieldMask)};else{if(!(e instanceof zv))return ae(16599,{Rt:e.type});t={verify:xc(n,e.key)}}return e.fieldTransforms.length>0&&(t.updateTransforms=e.fieldTransforms.map((r=>(function(s,a){const l=a.transform;if(l instanceof il)return{fieldPath:a.field.canonicalString(),setToServerValue:"REQUEST_TIME"};if(l instanceof sl)return{fieldPath:a.field.canonicalString(),appendMissingElements:{values:l.elements}};if(l instanceof ol)return{fieldPath:a.field.canonicalString(),removeAllFromArray:{values:l.elements}};if(l instanceof Vc)return{fieldPath:a.field.canonicalString(),increment:l.Ee};throw ae(20930,{transform:a.transform})})(0,r)))),e.precondition.isNone||(t.currentDocument=(function(i,s){return s.updateTime!==void 0?{updateTime:k1(i,s.updateTime)}:s.exists!==void 0?{exists:s.exists}:ae(27497)})(n,e.precondition)),t}function M1(n,e){return{documents:[Qv(n,e.path)]}}function Jv(n,e){const t={structuredQuery:{}},r=e.path;let i;e.collectionGroup!==null?(i=r,t.structuredQuery.from=[{collectionId:e.collectionGroup,allDescendants:!0}]):(i=r.popLast(),t.structuredQuery.from=[{collectionId:r.lastSegment()}]),t.parent=Qv(n,i);const s=(function(h){if(h.length!==0)return Zv(Fr.create(h,"and"))})(e.filters);s&&(t.structuredQuery.where=s);const a=(function(h){if(h.length!==0)return h.map((f=>(function(_){return{field:Qi(_.field),direction:U1(_.dir)}})(f)))})(e.orderBy);a&&(t.structuredQuery.orderBy=a);const l=qh(n,e.limit);return l!==null&&(t.structuredQuery.limit=l),e.startAt&&(t.structuredQuery.startAt=(function(h){return{before:h.inclusive,values:h.position}})(e.startAt)),e.endAt&&(t.structuredQuery.endAt=(function(h){return{before:!h.inclusive,values:h.position}})(e.endAt)),{Vt:t,parent:i}}function x1(n,e,t,r){const{Vt:i,parent:s}=Jv(n,e),a={},l=[];let c=0;return t.forEach((h=>{const f="aggregate_"+c++;a[f]=h.alias,h.aggregateType==="count"?l.push({alias:f,count:{}}):h.aggregateType==="avg"?l.push({alias:f,avg:{field:Qi(h.fieldPath)}}):h.aggregateType==="sum"&&l.push({alias:f,sum:{field:Qi(h.fieldPath)}})})),{request:{structuredAggregationQuery:{aggregations:l,structuredQuery:i.structuredQuery},parent:i.parent},ft:a,parent:s}}function L1(n){let e=N1(n.parent);const t=n.structuredQuery,r=t.from?t.from.length:0;let i=null;if(r>0){ut(r===1,65062);const f=t.from[0];f.allDescendants?i=f.collectionId:e=e.child(f.collectionId)}let s=[];t.where&&(s=(function(m){const _=Xv(m);return _ instanceof Fr&&Cv(_)?_.getFilters():[_]})(t.where));let a=[];t.orderBy&&(a=(function(m){return m.map((_=>(function(w){return new rl(yo(w.field),(function(T){switch(T){case"ASCENDING":return"asc";case"DESCENDING":return"desc";default:return}})(w.direction))})(_)))})(t.orderBy));let l=null;t.limit&&(l=(function(m){let _;return _=typeof m=="object"?m.value:m,Il(_)?null:_})(t.limit));let c=null;t.startAt&&(c=(function(m){const _=!!m.before,I=m.values||[];return new Wo(I,_)})(t.startAt));let h=null;return t.endAt&&(h=(function(m){const _=!m.before,I=m.values||[];return new Wo(I,_)})(t.endAt)),r1(e,i,a,s,l,"F",c,h)}function F1(n,e){const t=(function(i){switch(i){case"TargetPurposeListen":return null;case"TargetPurposeExistenceFilterMismatch":return"existence-filter-mismatch";case"TargetPurposeExistenceFilterMismatchBloom":return"existence-filter-mismatch-bloom";case"TargetPurposeLimboResolution":return"limbo-document";default:return ae(28987,{purpose:i})}})(e.purpose);return t==null?null:{"goog-listen-tags":t}}function Xv(n){return n.unaryFilter!==void 0?(function(t){switch(t.unaryFilter.op){case"IS_NAN":const r=yo(t.unaryFilter.field);return Jt.create(r,"==",{doubleValue:NaN});case"IS_NULL":const i=yo(t.unaryFilter.field);return Jt.create(i,"==",{nullValue:"NULL_VALUE"});case"IS_NOT_NAN":const s=yo(t.unaryFilter.field);return Jt.create(s,"!=",{doubleValue:NaN});case"IS_NOT_NULL":const a=yo(t.unaryFilter.field);return Jt.create(a,"!=",{nullValue:"NULL_VALUE"});case"OPERATOR_UNSPECIFIED":return ae(61313);default:return ae(60726)}})(n):n.fieldFilter!==void 0?(function(t){return Jt.create(yo(t.fieldFilter.field),(function(i){switch(i){case"EQUAL":return"==";case"NOT_EQUAL":return"!=";case"GREATER_THAN":return">";case"GREATER_THAN_OR_EQUAL":return">=";case"LESS_THAN":return"<";case"LESS_THAN_OR_EQUAL":return"<=";case"ARRAY_CONTAINS":return"array-contains";case"IN":return"in";case"NOT_IN":return"not-in";case"ARRAY_CONTAINS_ANY":return"array-contains-any";case"OPERATOR_UNSPECIFIED":return ae(58110);default:return ae(50506)}})(t.fieldFilter.op),t.fieldFilter.value)})(n):n.compositeFilter!==void 0?(function(t){return Fr.create(t.compositeFilter.filters.map((r=>Xv(r))),(function(i){switch(i){case"AND":return"and";case"OR":return"or";default:return ae(1026)}})(t.compositeFilter.op))})(n):ae(30097,{filter:n})}function U1(n){return S1[n]}function $1(n){return R1[n]}function q1(n){return C1[n]}function Qi(n){return{fieldPath:n.canonicalString()}}function yo(n){return kn.fromServerFormat(n.fieldPath)}function Zv(n){return n instanceof Jt?(function(t){if(t.op==="=="){if(Rp(t.value))return{unaryFilter:{field:Qi(t.field),op:"IS_NAN"}};if(Sp(t.value))return{unaryFilter:{field:Qi(t.field),op:"IS_NULL"}}}else if(t.op==="!="){if(Rp(t.value))return{unaryFilter:{field:Qi(t.field),op:"IS_NOT_NAN"}};if(Sp(t.value))return{unaryFilter:{field:Qi(t.field),op:"IS_NOT_NULL"}}}return{fieldFilter:{field:Qi(t.field),op:$1(t.op),value:t.value}}})(n):n instanceof Fr?(function(t){const r=t.getFilters().map((i=>Zv(i)));return r.length===1?r[0]:{compositeFilter:{op:q1(t.op),filters:r}}})(n):ae(54877,{filter:n})}function B1(n){const e=[];return n.fields.forEach((t=>e.push(t.canonicalString()))),{fieldPaths:e}}function ey(n){return n.length>=4&&n.get(0)==="projects"&&n.get(2)==="databases"}/**
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
 */class Ji{constructor(e,t,r,i,s=pe.min(),a=pe.min(),l=An.EMPTY_BYTE_STRING,c=null){this.target=e,this.targetId=t,this.purpose=r,this.sequenceNumber=i,this.snapshotVersion=s,this.lastLimboFreeSnapshotVersion=a,this.resumeToken=l,this.expectedCount=c}withSequenceNumber(e){return new Ji(this.target,this.targetId,this.purpose,e,this.snapshotVersion,this.lastLimboFreeSnapshotVersion,this.resumeToken,this.expectedCount)}withResumeToken(e,t){return new Ji(this.target,this.targetId,this.purpose,this.sequenceNumber,t,this.lastLimboFreeSnapshotVersion,e,null)}withExpectedCount(e){return new Ji(this.target,this.targetId,this.purpose,this.sequenceNumber,this.snapshotVersion,this.lastLimboFreeSnapshotVersion,this.resumeToken,e)}withLastLimboFreeSnapshotVersion(e){return new Ji(this.target,this.targetId,this.purpose,this.sequenceNumber,this.snapshotVersion,e,this.resumeToken,this.expectedCount)}}/**
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
 */class z1{constructor(e){this.gt=e}}function j1(n){const e=L1({parent:n.parent,structuredQuery:n.structuredQuery});return n.limitType==="LAST"?Oc(e,e.limit,"L"):e}/**
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
 */class H1{constructor(){this.Dn=new W1}addToCollectionParentIndex(e,t){return this.Dn.add(t),F.resolve()}getCollectionParents(e,t){return F.resolve(this.Dn.getEntries(t))}addFieldIndex(e,t){return F.resolve()}deleteFieldIndex(e,t){return F.resolve()}deleteAllFieldIndexes(e){return F.resolve()}createTargetIndexes(e,t){return F.resolve()}getDocumentsMatchingTarget(e,t){return F.resolve(null)}getIndexType(e,t){return F.resolve(0)}getFieldIndexes(e,t){return F.resolve([])}getNextCollectionGroupToUpdate(e){return F.resolve(null)}getMinOffset(e,t){return F.resolve(us.min())}getMinOffsetFromCollectionGroup(e,t){return F.resolve(us.min())}updateCollectionGroup(e,t,r){return F.resolve()}updateIndexEntries(e,t){return F.resolve()}}class W1{constructor(){this.index={}}add(e){const t=e.lastSegment(),r=e.popLast(),i=this.index[t]||new ln(ot.comparator),s=!i.has(r);return this.index[t]=i.add(r),s}has(e){const t=e.lastSegment(),r=e.popLast(),i=this.index[t];return i&&i.has(r)}getEntries(e){return(this.index[e]||new ln(ot.comparator)).toArray()}}/**
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
 */const Bp={didRun:!1,sequenceNumbersCollected:0,targetsRemoved:0,documentsRemoved:0},ty=41943040;class jn{static withCacheSize(e){return new jn(e,jn.DEFAULT_COLLECTION_PERCENTILE,jn.DEFAULT_MAX_SEQUENCE_NUMBERS_TO_COLLECT)}constructor(e,t,r){this.cacheSizeCollectionThreshold=e,this.percentileToCollect=t,this.maximumSequenceNumbersToCollect=r}}/**
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
 */jn.DEFAULT_COLLECTION_PERCENTILE=10,jn.DEFAULT_MAX_SEQUENCE_NUMBERS_TO_COLLECT=1e3,jn.DEFAULT=new jn(ty,jn.DEFAULT_COLLECTION_PERCENTILE,jn.DEFAULT_MAX_SEQUENCE_NUMBERS_TO_COLLECT),jn.DISABLED=new jn(-1,0,0);/**
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
 */class Go{constructor(e){this._r=e}next(){return this._r+=2,this._r}static ar(){return new Go(0)}static ur(){return new Go(-1)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const zp="LruGarbageCollector",ny=1048576;function jp([n,e],[t,r]){const i=Re(n,t);return i===0?Re(e,r):i}class G1{constructor(e){this.Tr=e,this.buffer=new ln(jp),this.Ir=0}dr(){return++this.Ir}Er(e){const t=[e,this.dr()];if(this.buffer.size<this.Tr)this.buffer=this.buffer.add(t);else{const r=this.buffer.last();jp(t,r)<0&&(this.buffer=this.buffer.delete(r).add(t))}}get maxValue(){return this.buffer.last()[0]}}class K1{constructor(e,t,r){this.garbageCollector=e,this.asyncQueue=t,this.localStore=r,this.Ar=null}start(){this.garbageCollector.params.cacheSizeCollectionThreshold!==-1&&this.Rr(6e4)}stop(){this.Ar&&(this.Ar.cancel(),this.Ar=null)}get started(){return this.Ar!==null}Rr(e){G(zp,`Garbage collection scheduled in ${e}ms`),this.Ar=this.asyncQueue.enqueueAfterDelay("lru_garbage_collection",e,(async()=>{this.Ar=null;try{await this.localStore.collectGarbage(this.garbageCollector)}catch(t){aa(t)?G(zp,"Ignoring IndexedDB error during garbage collection: ",t):await ou(t)}await this.Rr(3e5)}))}}class Q1{constructor(e,t){this.Vr=e,this.params=t}calculateTargetCount(e,t){return this.Vr.mr(e).next((r=>Math.floor(t/100*r)))}nthSequenceNumber(e,t){if(t===0)return F.resolve(au.ue);const r=new G1(t);return this.Vr.forEachTarget(e,(i=>r.Er(i.sequenceNumber))).next((()=>this.Vr.gr(e,(i=>r.Er(i))))).next((()=>r.maxValue))}removeTargets(e,t,r){return this.Vr.removeTargets(e,t,r)}removeOrphanedDocuments(e,t){return this.Vr.removeOrphanedDocuments(e,t)}collect(e,t){return this.params.cacheSizeCollectionThreshold===-1?(G("LruGarbageCollector","Garbage collection skipped; disabled"),F.resolve(Bp)):this.getCacheSize(e).next((r=>r<this.params.cacheSizeCollectionThreshold?(G("LruGarbageCollector",`Garbage collection skipped; Cache size ${r} is lower than threshold ${this.params.cacheSizeCollectionThreshold}`),Bp):this.pr(e,t)))}getCacheSize(e){return this.Vr.getCacheSize(e)}pr(e,t){let r,i,s,a,l,c,h;const f=Date.now();return this.calculateTargetCount(e,this.params.percentileToCollect).next((m=>(m>this.params.maximumSequenceNumbersToCollect?(G("LruGarbageCollector",`Capping sequence numbers to collect down to the maximum of ${this.params.maximumSequenceNumbersToCollect} from ${m}`),i=this.params.maximumSequenceNumbersToCollect):i=m,a=Date.now(),this.nthSequenceNumber(e,i)))).next((m=>(r=m,l=Date.now(),this.removeTargets(e,r,t)))).next((m=>(s=m,c=Date.now(),this.removeOrphanedDocuments(e,r)))).next((m=>(h=Date.now(),_o()<=Ve.DEBUG&&G("LruGarbageCollector",`LRU Garbage Collection
	Counted targets in ${a-f}ms
	Determined least recently used ${i} in `+(l-a)+`ms
	Removed ${s} targets in `+(c-l)+`ms
	Removed ${m} documents in `+(h-c)+`ms
Total Duration: ${h-f}ms`),F.resolve({didRun:!0,sequenceNumbersCollected:i,targetsRemoved:s,documentsRemoved:m}))))}}function Y1(n,e){return new Q1(n,e)}/**
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
 */class J1{constructor(){this.changes=new to((e=>e.toString()),((e,t)=>e.isEqual(t))),this.changesApplied=!1}addEntry(e){this.assertNotApplied(),this.changes.set(e.key,e)}removeEntry(e,t){this.assertNotApplied(),this.changes.set(e,gn.newInvalidDocument(e).setReadTime(t))}getEntry(e,t){this.assertNotApplied();const r=this.changes.get(t);return r!==void 0?F.resolve(r):this.getFromCache(e,t)}getEntries(e,t){return this.getAllFromCache(e,t)}apply(e){return this.assertNotApplied(),this.changesApplied=!0,this.applyChanges(e)}assertNotApplied(){}}/**
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
 */class X1{constructor(e,t){this.overlayedDocument=e,this.mutatedFields=t}}/**
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
 */class Z1{constructor(e,t,r,i){this.remoteDocumentCache=e,this.mutationQueue=t,this.documentOverlayCache=r,this.indexManager=i}getDocument(e,t){let r=null;return this.documentOverlayCache.getOverlay(e,t).next((i=>(r=i,this.remoteDocumentCache.getEntry(e,t)))).next((i=>(r!==null&&ja(r.mutation,i,wr.empty(),Tt.now()),i)))}getDocuments(e,t){return this.remoteDocumentCache.getEntries(e,t).next((r=>this.getLocalViewOfDocuments(e,r,Ke()).next((()=>r))))}getLocalViewOfDocuments(e,t,r=Ke()){const i=Ms();return this.populateOverlays(e,i,t).next((()=>this.computeViews(e,t,i,r).next((s=>{let a=Oa();return s.forEach(((l,c)=>{a=a.insert(l,c.overlayedDocument)})),a}))))}getOverlayedDocuments(e,t){const r=Ms();return this.populateOverlays(e,r,t).next((()=>this.computeViews(e,t,r,Ke())))}populateOverlays(e,t,r){const i=[];return r.forEach((s=>{t.has(s)||i.push(s)})),this.documentOverlayCache.getOverlays(e,i).next((s=>{s.forEach(((a,l)=>{t.set(a,l)}))}))}computeViews(e,t,r,i){let s=ps();const a=za(),l=(function(){return za()})();return t.forEach(((c,h)=>{const f=r.get(h.key);i.has(h.key)&&(f===void 0||f.mutation instanceof no)?s=s.insert(h.key,h):f!==void 0?(a.set(h.key,f.mutation.getFieldMask()),ja(f.mutation,h,f.mutation.getFieldMask(),Tt.now())):a.set(h.key,wr.empty())})),this.recalculateAndSaveOverlays(e,s).next((c=>(c.forEach(((h,f)=>a.set(h,f))),t.forEach(((h,f)=>{var m;return l.set(h,new X1(f,(m=a.get(h))!==null&&m!==void 0?m:null))})),l)))}recalculateAndSaveOverlays(e,t){const r=za();let i=new zt(((a,l)=>a-l)),s=Ke();return this.mutationQueue.getAllMutationBatchesAffectingDocumentKeys(e,t).next((a=>{for(const l of a)l.keys().forEach((c=>{const h=t.get(c);if(h===null)return;let f=r.get(c)||wr.empty();f=l.applyToLocalView(h,f),r.set(c,f);const m=(i.get(l.batchId)||Ke()).add(c);i=i.insert(l.batchId,m)}))})).next((()=>{const a=[],l=i.getReverseIterator();for(;l.hasNext();){const c=l.getNext(),h=c.key,f=c.value,m=xv();f.forEach((_=>{if(!s.has(_)){const I=qv(t.get(_),r.get(_));I!==null&&m.set(_,I),s=s.add(_)}})),a.push(this.documentOverlayCache.saveOverlays(e,h,m))}return F.waitFor(a)})).next((()=>r))}recalculateAndSaveOverlaysForDocumentKeys(e,t){return this.remoteDocumentCache.getEntries(e,t).next((r=>this.recalculateAndSaveOverlays(e,r)))}getDocumentsMatchingQuery(e,t,r,i){return(function(a){return ne.isDocumentKey(a.path)&&a.collectionGroup===null&&a.filters.length===0})(t)?this.getDocumentsMatchingDocumentQuery(e,t.path):Vd(t)?this.getDocumentsMatchingCollectionGroupQuery(e,t,r,i):this.getDocumentsMatchingCollectionQuery(e,t,r,i)}getNextDocuments(e,t,r,i){return this.remoteDocumentCache.getAllFromCollectionGroup(e,t,r,i).next((s=>{const a=i-s.size>0?this.documentOverlayCache.getOverlaysForCollectionGroup(e,t,r.largestBatchId,i-s.size):F.resolve(Ms());let l=Za,c=s;return a.next((h=>F.forEach(h,((f,m)=>(l<m.largestBatchId&&(l=m.largestBatchId),s.get(f)?F.resolve():this.remoteDocumentCache.getEntry(e,f).next((_=>{c=c.insert(f,_)}))))).next((()=>this.populateOverlays(e,h,s))).next((()=>this.computeViews(e,c,h,Ke()))).next((f=>({batchId:l,changes:l1(f)})))))}))}getDocumentsMatchingDocumentQuery(e,t){return this.getDocument(e,new ne(t)).next((r=>{let i=Oa();return r.isFoundDocument()&&(i=i.insert(r.key,r)),i}))}getDocumentsMatchingCollectionGroupQuery(e,t,r,i){const s=t.collectionGroup;let a=Oa();return this.indexManager.getCollectionParents(e,s).next((l=>F.forEach(l,(c=>{const h=(function(m,_){return new eo(_,null,m.explicitOrderBy.slice(),m.filters.slice(),m.limit,m.limitType,m.startAt,m.endAt)})(t,c.child(s));return this.getDocumentsMatchingCollectionQuery(e,h,r,i).next((f=>{f.forEach(((m,_)=>{a=a.insert(m,_)}))}))})).next((()=>a))))}getDocumentsMatchingCollectionQuery(e,t,r,i){let s;return this.documentOverlayCache.getOverlaysForCollection(e,t.path,r.largestBatchId).next((a=>(s=a,this.remoteDocumentCache.getDocumentsMatchingQuery(e,t,r,s,i)))).next((a=>{s.forEach(((c,h)=>{const f=h.getKey();a.get(f)===null&&(a=a.insert(f,gn.newInvalidDocument(f)))}));let l=Oa();return a.forEach(((c,h)=>{const f=s.get(c);f!==void 0&&ja(f.mutation,h,wr.empty(),Tt.now()),hu(t,h)&&(l=l.insert(c,h))})),l}))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class eS{constructor(e){this.serializer=e,this.Br=new Map,this.Lr=new Map}getBundleMetadata(e,t){return F.resolve(this.Br.get(t))}saveBundleMetadata(e,t){return this.Br.set(t.id,(function(i){return{id:i.id,version:i.version,createTime:Si(i.createTime)}})(t)),F.resolve()}getNamedQuery(e,t){return F.resolve(this.Lr.get(t))}saveNamedQuery(e,t){return this.Lr.set(t.name,(function(i){return{name:i.name,query:j1(i.bundledQuery),readTime:Si(i.readTime)}})(t)),F.resolve()}}/**
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
 */class tS{constructor(){this.overlays=new zt(ne.comparator),this.kr=new Map}getOverlay(e,t){return F.resolve(this.overlays.get(t))}getOverlays(e,t){const r=Ms();return F.forEach(t,(i=>this.getOverlay(e,i).next((s=>{s!==null&&r.set(i,s)})))).next((()=>r))}saveOverlays(e,t,r){return r.forEach(((i,s)=>{this.wt(e,t,s)})),F.resolve()}removeOverlaysForBatchId(e,t,r){const i=this.kr.get(r);return i!==void 0&&(i.forEach((s=>this.overlays=this.overlays.remove(s))),this.kr.delete(r)),F.resolve()}getOverlaysForCollection(e,t,r){const i=Ms(),s=t.length+1,a=new ne(t.child("")),l=this.overlays.getIteratorFrom(a);for(;l.hasNext();){const c=l.getNext().value,h=c.getKey();if(!t.isPrefixOf(h.path))break;h.path.length===s&&c.largestBatchId>r&&i.set(c.getKey(),c)}return F.resolve(i)}getOverlaysForCollectionGroup(e,t,r,i){let s=new zt(((h,f)=>h-f));const a=this.overlays.getIterator();for(;a.hasNext();){const h=a.getNext().value;if(h.getKey().getCollectionGroup()===t&&h.largestBatchId>r){let f=s.get(h.largestBatchId);f===null&&(f=Ms(),s=s.insert(h.largestBatchId,f)),f.set(h.getKey(),h)}}const l=Ms(),c=s.getIterator();for(;c.hasNext()&&(c.getNext().value.forEach(((h,f)=>l.set(h,f))),!(l.size()>=i)););return F.resolve(l)}wt(e,t,r){const i=this.overlays.get(r.key);if(i!==null){const a=this.kr.get(i.largestBatchId).delete(r.key);this.kr.set(i.largestBatchId,a)}this.overlays=this.overlays.insert(r.key,new E1(t,r));let s=this.kr.get(t);s===void 0&&(s=Ke(),this.kr.set(t,s)),this.kr.set(t,s.add(r.key))}}/**
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
 */class nS{constructor(){this.sessionToken=An.EMPTY_BYTE_STRING}getSessionToken(e){return F.resolve(this.sessionToken)}setSessionToken(e,t){return this.sessionToken=t,F.resolve()}}/**
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
 */class Ud{constructor(){this.qr=new ln(mn.Qr),this.$r=new ln(mn.Ur)}isEmpty(){return this.qr.isEmpty()}addReference(e,t){const r=new mn(e,t);this.qr=this.qr.add(r),this.$r=this.$r.add(r)}Kr(e,t){e.forEach((r=>this.addReference(r,t)))}removeReference(e,t){this.Wr(new mn(e,t))}Gr(e,t){e.forEach((r=>this.removeReference(r,t)))}zr(e){const t=new ne(new ot([])),r=new mn(t,e),i=new mn(t,e+1),s=[];return this.$r.forEachInRange([r,i],(a=>{this.Wr(a),s.push(a.key)})),s}jr(){this.qr.forEach((e=>this.Wr(e)))}Wr(e){this.qr=this.qr.delete(e),this.$r=this.$r.delete(e)}Jr(e){const t=new ne(new ot([])),r=new mn(t,e),i=new mn(t,e+1);let s=Ke();return this.$r.forEachInRange([r,i],(a=>{s=s.add(a.key)})),s}containsKey(e){const t=new mn(e,0),r=this.qr.firstAfterOrEqual(t);return r!==null&&e.isEqual(r.key)}}class mn{constructor(e,t){this.key=e,this.Hr=t}static Qr(e,t){return ne.comparator(e.key,t.key)||Re(e.Hr,t.Hr)}static Ur(e,t){return Re(e.Hr,t.Hr)||ne.comparator(e.key,t.key)}}/**
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
 */class rS{constructor(e,t){this.indexManager=e,this.referenceDelegate=t,this.mutationQueue=[],this.er=1,this.Yr=new ln(mn.Qr)}checkEmpty(e){return F.resolve(this.mutationQueue.length===0)}addMutationBatch(e,t,r,i){const s=this.er;this.er++,this.mutationQueue.length>0&&this.mutationQueue[this.mutationQueue.length-1];const a=new y1(s,t,r,i);this.mutationQueue.push(a);for(const l of i)this.Yr=this.Yr.add(new mn(l.key,s)),this.indexManager.addToCollectionParentIndex(e,l.key.path.popLast());return F.resolve(a)}lookupMutationBatch(e,t){return F.resolve(this.Zr(t))}getNextMutationBatchAfterBatchId(e,t){const r=t+1,i=this.Xr(r),s=i<0?0:i;return F.resolve(this.mutationQueue.length>s?this.mutationQueue[s]:null)}getHighestUnacknowledgedBatchId(){return F.resolve(this.mutationQueue.length===0?Lb:this.er-1)}getAllMutationBatches(e){return F.resolve(this.mutationQueue.slice())}getAllMutationBatchesAffectingDocumentKey(e,t){const r=new mn(t,0),i=new mn(t,Number.POSITIVE_INFINITY),s=[];return this.Yr.forEachInRange([r,i],(a=>{const l=this.Zr(a.Hr);s.push(l)})),F.resolve(s)}getAllMutationBatchesAffectingDocumentKeys(e,t){let r=new ln(Re);return t.forEach((i=>{const s=new mn(i,0),a=new mn(i,Number.POSITIVE_INFINITY);this.Yr.forEachInRange([s,a],(l=>{r=r.add(l.Hr)}))})),F.resolve(this.ei(r))}getAllMutationBatchesAffectingQuery(e,t){const r=t.path,i=r.length+1;let s=r;ne.isDocumentKey(s)||(s=s.child(""));const a=new mn(new ne(s),0);let l=new ln(Re);return this.Yr.forEachWhile((c=>{const h=c.key.path;return!!r.isPrefixOf(h)&&(h.length===i&&(l=l.add(c.Hr)),!0)}),a),F.resolve(this.ei(l))}ei(e){const t=[];return e.forEach((r=>{const i=this.Zr(r);i!==null&&t.push(i)})),t}removeMutationBatch(e,t){ut(this.ti(t.batchId,"removed")===0,55003),this.mutationQueue.shift();let r=this.Yr;return F.forEach(t.mutations,(i=>{const s=new mn(i.key,t.batchId);return r=r.delete(s),this.referenceDelegate.markPotentiallyOrphaned(e,i.key)})).next((()=>{this.Yr=r}))}rr(e){}containsKey(e,t){const r=new mn(t,0),i=this.Yr.firstAfterOrEqual(r);return F.resolve(t.isEqual(i&&i.key))}performConsistencyCheck(e){return this.mutationQueue.length,F.resolve()}ti(e,t){return this.Xr(e)}Xr(e){return this.mutationQueue.length===0?0:e-this.mutationQueue[0].batchId}Zr(e){const t=this.Xr(e);return t<0||t>=this.mutationQueue.length?null:this.mutationQueue[t]}}/**
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
 */class iS{constructor(e){this.ni=e,this.docs=(function(){return new zt(ne.comparator)})(),this.size=0}setIndexManager(e){this.indexManager=e}addEntry(e,t){const r=t.key,i=this.docs.get(r),s=i?i.size:0,a=this.ni(t);return this.docs=this.docs.insert(r,{document:t.mutableCopy(),size:a}),this.size+=a-s,this.indexManager.addToCollectionParentIndex(e,r.path.popLast())}removeEntry(e){const t=this.docs.get(e);t&&(this.docs=this.docs.remove(e),this.size-=t.size)}getEntry(e,t){const r=this.docs.get(t);return F.resolve(r?r.document.mutableCopy():gn.newInvalidDocument(t))}getEntries(e,t){let r=ps();return t.forEach((i=>{const s=this.docs.get(i);r=r.insert(i,s?s.document.mutableCopy():gn.newInvalidDocument(i))})),F.resolve(r)}getDocumentsMatchingQuery(e,t,r,i){let s=ps();const a=t.path,l=new ne(a.child("__id-9223372036854775808__")),c=this.docs.getIteratorFrom(l);for(;c.hasNext();){const{key:h,value:{document:f}}=c.getNext();if(!a.isPrefixOf(h.path))break;h.path.length>a.length+1||Ob(Db(f),r)<=0||(i.has(f.key)||hu(t,f))&&(s=s.insert(f.key,f.mutableCopy()))}return F.resolve(s)}getAllFromCollectionGroup(e,t,r,i){ae(9500)}ri(e,t){return F.forEach(this.docs,(r=>t(r)))}newChangeBuffer(e){return new sS(this)}getSize(e){return F.resolve(this.size)}}class sS extends J1{constructor(e){super(),this.Or=e}applyChanges(e){const t=[];return this.changes.forEach(((r,i)=>{i.isValidDocument()?t.push(this.Or.addEntry(e,i)):this.Or.removeEntry(r)})),F.waitFor(t)}getFromCache(e,t){return this.Or.getEntry(e,t)}getAllFromCache(e,t){return this.Or.getEntries(e,t)}}/**
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
 */class oS{constructor(e){this.persistence=e,this.ii=new to((t=>Nd(t)),Dd),this.lastRemoteSnapshotVersion=pe.min(),this.highestTargetId=0,this.si=0,this.oi=new Ud,this.targetCount=0,this._i=Go.ar()}forEachTarget(e,t){return this.ii.forEach(((r,i)=>t(i))),F.resolve()}getLastRemoteSnapshotVersion(e){return F.resolve(this.lastRemoteSnapshotVersion)}getHighestSequenceNumber(e){return F.resolve(this.si)}allocateTargetId(e){return this.highestTargetId=this._i.next(),F.resolve(this.highestTargetId)}setTargetsMetadata(e,t,r){return r&&(this.lastRemoteSnapshotVersion=r),t>this.si&&(this.si=t),F.resolve()}hr(e){this.ii.set(e.target,e);const t=e.targetId;t>this.highestTargetId&&(this._i=new Go(t),this.highestTargetId=t),e.sequenceNumber>this.si&&(this.si=e.sequenceNumber)}addTargetData(e,t){return this.hr(t),this.targetCount+=1,F.resolve()}updateTargetData(e,t){return this.hr(t),F.resolve()}removeTargetData(e,t){return this.ii.delete(t.target),this.oi.zr(t.targetId),this.targetCount-=1,F.resolve()}removeTargets(e,t,r){let i=0;const s=[];return this.ii.forEach(((a,l)=>{l.sequenceNumber<=t&&r.get(l.targetId)===null&&(this.ii.delete(a),s.push(this.removeMatchingKeysForTargetId(e,l.targetId)),i++)})),F.waitFor(s).next((()=>i))}getTargetCount(e){return F.resolve(this.targetCount)}getTargetData(e,t){const r=this.ii.get(t)||null;return F.resolve(r)}addMatchingKeys(e,t,r){return this.oi.Kr(t,r),F.resolve()}removeMatchingKeys(e,t,r){this.oi.Gr(t,r);const i=this.persistence.referenceDelegate,s=[];return i&&t.forEach((a=>{s.push(i.markPotentiallyOrphaned(e,a))})),F.waitFor(s)}removeMatchingKeysForTargetId(e,t){return this.oi.zr(t),F.resolve()}getMatchingKeysForTargetId(e,t){const r=this.oi.Jr(t);return F.resolve(r)}containsKey(e,t){return F.resolve(this.oi.containsKey(t))}}/**
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
 */class ry{constructor(e,t){this.ai={},this.overlays={},this.ui=new au(0),this.ci=!1,this.ci=!0,this.li=new nS,this.referenceDelegate=e(this),this.hi=new oS(this),this.indexManager=new H1,this.remoteDocumentCache=(function(i){return new iS(i)})((r=>this.referenceDelegate.Pi(r))),this.serializer=new z1(t),this.Ti=new eS(this.serializer)}start(){return Promise.resolve()}shutdown(){return this.ci=!1,Promise.resolve()}get started(){return this.ci}setDatabaseDeletedListener(){}setNetworkEnabled(){}getIndexManager(e){return this.indexManager}getDocumentOverlayCache(e){let t=this.overlays[e.toKey()];return t||(t=new tS,this.overlays[e.toKey()]=t),t}getMutationQueue(e,t){let r=this.ai[e.toKey()];return r||(r=new rS(t,this.referenceDelegate),this.ai[e.toKey()]=r),r}getGlobalsCache(){return this.li}getTargetCache(){return this.hi}getRemoteDocumentCache(){return this.remoteDocumentCache}getBundleCache(){return this.Ti}runTransaction(e,t,r){G("MemoryPersistence","Starting transaction:",e);const i=new aS(this.ui.next());return this.referenceDelegate.Ii(),r(i).next((s=>this.referenceDelegate.di(i).next((()=>s)))).toPromise().then((s=>(i.raiseOnCommittedEvent(),s)))}Ei(e,t){return F.or(Object.values(this.ai).map((r=>()=>r.containsKey(e,t))))}}class aS extends Mb{constructor(e){super(),this.currentSequenceNumber=e}}class $d{constructor(e){this.persistence=e,this.Ai=new Ud,this.Ri=null}static Vi(e){return new $d(e)}get mi(){if(this.Ri)return this.Ri;throw ae(60996)}addReference(e,t,r){return this.Ai.addReference(r,t),this.mi.delete(r.toString()),F.resolve()}removeReference(e,t,r){return this.Ai.removeReference(r,t),this.mi.add(r.toString()),F.resolve()}markPotentiallyOrphaned(e,t){return this.mi.add(t.toString()),F.resolve()}removeTarget(e,t){this.Ai.zr(t.targetId).forEach((i=>this.mi.add(i.toString())));const r=this.persistence.getTargetCache();return r.getMatchingKeysForTargetId(e,t.targetId).next((i=>{i.forEach((s=>this.mi.add(s.toString())))})).next((()=>r.removeTargetData(e,t)))}Ii(){this.Ri=new Set}di(e){const t=this.persistence.getRemoteDocumentCache().newChangeBuffer();return F.forEach(this.mi,(r=>{const i=ne.fromPath(r);return this.fi(e,i).next((s=>{s||t.removeEntry(i,pe.min())}))})).next((()=>(this.Ri=null,t.apply(e))))}updateLimboDocument(e,t){return this.fi(e,t).next((r=>{r?this.mi.delete(t.toString()):this.mi.add(t.toString())}))}Pi(e){return 0}fi(e,t){return F.or([()=>F.resolve(this.Ai.containsKey(t)),()=>this.persistence.getTargetCache().containsKey(e,t),()=>this.persistence.Ei(e,t)])}}class Lc{constructor(e,t){this.persistence=e,this.gi=new to((r=>Ub(r.path)),((r,i)=>r.isEqual(i))),this.garbageCollector=Y1(this,t)}static Vi(e,t){return new Lc(e,t)}Ii(){}di(e){return F.resolve()}forEachTarget(e,t){return this.persistence.getTargetCache().forEachTarget(e,t)}mr(e){const t=this.yr(e);return this.persistence.getTargetCache().getTargetCount(e).next((r=>t.next((i=>r+i))))}yr(e){let t=0;return this.gr(e,(r=>{t++})).next((()=>t))}gr(e,t){return F.forEach(this.gi,((r,i)=>this.Sr(e,r,i).next((s=>s?F.resolve():t(i)))))}removeTargets(e,t,r){return this.persistence.getTargetCache().removeTargets(e,t,r)}removeOrphanedDocuments(e,t){let r=0;const i=this.persistence.getRemoteDocumentCache(),s=i.newChangeBuffer();return i.ri(e,(a=>this.Sr(e,a,t).next((l=>{l||(r++,s.removeEntry(a,pe.min()))})))).next((()=>s.apply(e))).next((()=>r))}markPotentiallyOrphaned(e,t){return this.gi.set(t,e.currentSequenceNumber),F.resolve()}removeTarget(e,t){const r=t.withSequenceNumber(e.currentSequenceNumber);return this.persistence.getTargetCache().updateTargetData(e,r)}addReference(e,t,r){return this.gi.set(r,e.currentSequenceNumber),F.resolve()}removeReference(e,t,r){return this.gi.set(r,e.currentSequenceNumber),F.resolve()}updateLimboDocument(e,t){return this.gi.set(t,e.currentSequenceNumber),F.resolve()}Pi(e){let t=e.key.toString().length;return e.isFoundDocument()&&(t+=hc(e.data.value)),t}Sr(e,t,r){return F.or([()=>this.persistence.Ei(e,t),()=>this.persistence.getTargetCache().containsKey(e,t),()=>{const i=this.gi.get(t);return F.resolve(i!==void 0&&i>r)}])}getCacheSize(e){return this.persistence.getRemoteDocumentCache().getSize(e)}}/**
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
 */class qd{constructor(e,t,r,i){this.targetId=e,this.fromCache=t,this.Is=r,this.ds=i}static Es(e,t){let r=Ke(),i=Ke();for(const s of t.docChanges)switch(s.type){case 0:r=r.add(s.doc.key);break;case 1:i=i.add(s.doc.key)}return new qd(e,t.fromCache,r,i)}}/**
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
 */class lS{constructor(){this._documentReadCount=0}get documentReadCount(){return this._documentReadCount}incrementDocumentReadCount(e){this._documentReadCount+=e}}/**
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
 */class cS{constructor(){this.As=!1,this.Rs=!1,this.Vs=100,this.fs=(function(){return UT()?8:xb(Vn())>0?6:4})()}initialize(e,t){this.gs=e,this.indexManager=t,this.As=!0}getDocumentsMatchingQuery(e,t,r,i){const s={result:null};return this.ps(e,t).next((a=>{s.result=a})).next((()=>{if(!s.result)return this.ys(e,t,i,r).next((a=>{s.result=a}))})).next((()=>{if(s.result)return;const a=new lS;return this.ws(e,t,a).next((l=>{if(s.result=l,this.Rs)return this.Ss(e,t,a,l.size)}))})).next((()=>s.result))}Ss(e,t,r,i){return r.documentReadCount<this.Vs?(_o()<=Ve.DEBUG&&G("QueryEngine","SDK will not create cache indexes for query:",vo(t),"since it only creates cache indexes for collection contains","more than or equal to",this.Vs,"documents"),F.resolve()):(_o()<=Ve.DEBUG&&G("QueryEngine","Query:",vo(t),"scans",r.documentReadCount,"local documents and returns",i,"documents as results."),r.documentReadCount>this.fs*i?(_o()<=Ve.DEBUG&&G("QueryEngine","The SDK decides to create cache indexes for query:",vo(t),"as using cache indexes may help improve performance."),this.indexManager.createTargetIndexes(e,ai(t))):F.resolve())}ps(e,t){if(Np(t))return F.resolve(null);let r=ai(t);return this.indexManager.getIndexType(e,r).next((i=>i===0?null:(t.limit!==null&&i===1&&(t=Oc(t,null,"F"),r=ai(t)),this.indexManager.getDocumentsMatchingTarget(e,r).next((s=>{const a=Ke(...s);return this.gs.getDocuments(e,a).next((l=>this.indexManager.getMinOffset(e,r).next((c=>{const h=this.bs(t,l);return this.Ds(t,h,a,c.readTime)?this.ps(e,Oc(t,null,"F")):this.vs(e,h,t,c)}))))})))))}ys(e,t,r,i){return Np(t)||i.isEqual(pe.min())?F.resolve(null):this.gs.getDocuments(e,r).next((s=>{const a=this.bs(t,s);return this.Ds(t,a,r,i)?F.resolve(null):(_o()<=Ve.DEBUG&&G("QueryEngine","Re-using previous result from %s to execute query: %s",i.toString(),vo(t)),this.vs(e,a,t,Nb(i,Za)).next((l=>l)))}))}bs(e,t){let r=new ln(Vv(e));return t.forEach(((i,s)=>{hu(e,s)&&(r=r.add(s))})),r}Ds(e,t,r,i){if(e.limit===null)return!1;if(r.size!==t.size)return!0;const s=e.limitType==="F"?t.last():t.first();return!!s&&(s.hasPendingWrites||s.version.compareTo(i)>0)}ws(e,t,r){return _o()<=Ve.DEBUG&&G("QueryEngine","Using full collection scan to execute query:",vo(t)),this.gs.getDocumentsMatchingQuery(e,t,us.min(),r)}vs(e,t,r,i){return this.gs.getDocumentsMatchingQuery(e,r,i).next((s=>(t.forEach((a=>{s=s.insert(a.key,a)})),s)))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Bd="LocalStore",uS=3e8;class hS{constructor(e,t,r,i){this.persistence=e,this.Cs=t,this.serializer=i,this.Fs=new zt(Re),this.Ms=new to((s=>Nd(s)),Dd),this.xs=new Map,this.Os=e.getRemoteDocumentCache(),this.hi=e.getTargetCache(),this.Ti=e.getBundleCache(),this.Ns(r)}Ns(e){this.documentOverlayCache=this.persistence.getDocumentOverlayCache(e),this.indexManager=this.persistence.getIndexManager(e),this.mutationQueue=this.persistence.getMutationQueue(e,this.indexManager),this.localDocuments=new Z1(this.Os,this.mutationQueue,this.documentOverlayCache,this.indexManager),this.Os.setIndexManager(this.indexManager),this.Cs.initialize(this.localDocuments,this.indexManager)}collectGarbage(e){return this.persistence.runTransaction("Collect garbage","readwrite-primary",(t=>e.collect(t,this.Fs)))}}function dS(n,e,t,r){return new hS(n,e,t,r)}async function iy(n,e){const t=Ce(n);return await t.persistence.runTransaction("Handle user change","readonly",(r=>{let i;return t.mutationQueue.getAllMutationBatches(r).next((s=>(i=s,t.Ns(e),t.mutationQueue.getAllMutationBatches(r)))).next((s=>{const a=[],l=[];let c=Ke();for(const h of i){a.push(h.batchId);for(const f of h.mutations)c=c.add(f.key)}for(const h of s){l.push(h.batchId);for(const f of h.mutations)c=c.add(f.key)}return t.localDocuments.getDocuments(r,c).next((h=>({Bs:h,removedBatchIds:a,addedBatchIds:l})))}))}))}function sy(n){const e=Ce(n);return e.persistence.runTransaction("Get last remote snapshot version","readonly",(t=>e.hi.getLastRemoteSnapshotVersion(t)))}function fS(n,e){const t=Ce(n),r=e.snapshotVersion;let i=t.Fs;return t.persistence.runTransaction("Apply remote event","readwrite-primary",(s=>{const a=t.Os.newChangeBuffer({trackRemovals:!0});i=t.Fs;const l=[];e.targetChanges.forEach(((f,m)=>{const _=i.get(m);if(!_)return;l.push(t.hi.removeMatchingKeys(s,f.removedDocuments,m).next((()=>t.hi.addMatchingKeys(s,f.addedDocuments,m))));let I=_.withSequenceNumber(s.currentSequenceNumber);e.targetMismatches.get(m)!==null?I=I.withResumeToken(An.EMPTY_BYTE_STRING,pe.min()).withLastLimboFreeSnapshotVersion(pe.min()):f.resumeToken.approximateByteSize()>0&&(I=I.withResumeToken(f.resumeToken,r)),i=i.insert(m,I),(function(D,T,L){return D.resumeToken.approximateByteSize()===0||T.snapshotVersion.toMicroseconds()-D.snapshotVersion.toMicroseconds()>=uS?!0:L.addedDocuments.size+L.modifiedDocuments.size+L.removedDocuments.size>0})(_,I,f)&&l.push(t.hi.updateTargetData(s,I))}));let c=ps(),h=Ke();if(e.documentUpdates.forEach((f=>{e.resolvedLimboDocuments.has(f)&&l.push(t.persistence.referenceDelegate.updateLimboDocument(s,f))})),l.push(pS(s,a,e.documentUpdates).next((f=>{c=f.Ls,h=f.ks}))),!r.isEqual(pe.min())){const f=t.hi.getLastRemoteSnapshotVersion(s).next((m=>t.hi.setTargetsMetadata(s,s.currentSequenceNumber,r)));l.push(f)}return F.waitFor(l).next((()=>a.apply(s))).next((()=>t.localDocuments.getLocalViewOfDocuments(s,c,h))).next((()=>c))})).then((s=>(t.Fs=i,s)))}function pS(n,e,t){let r=Ke(),i=Ke();return t.forEach((s=>r=r.add(s))),e.getEntries(n,r).next((s=>{let a=ps();return t.forEach(((l,c)=>{const h=s.get(l);c.isFoundDocument()!==h.isFoundDocument()&&(i=i.add(l)),c.isNoDocument()&&c.version.isEqual(pe.min())?(e.removeEntry(l,c.readTime),a=a.insert(l,c)):!h.isValidDocument()||c.version.compareTo(h.version)>0||c.version.compareTo(h.version)===0&&h.hasPendingWrites?(e.addEntry(c),a=a.insert(l,c)):G(Bd,"Ignoring outdated watch update for ",l,". Current version:",h.version," Watch version:",c.version)})),{Ls:a,ks:i}}))}function mS(n,e){const t=Ce(n);return t.persistence.runTransaction("Allocate target","readwrite",(r=>{let i;return t.hi.getTargetData(r,e).next((s=>s?(i=s,F.resolve(i)):t.hi.allocateTargetId(r).next((a=>(i=new Ji(e,a,"TargetPurposeListen",r.currentSequenceNumber),t.hi.addTargetData(r,i).next((()=>i)))))))})).then((r=>{const i=t.Fs.get(r.targetId);return(i===null||r.snapshotVersion.compareTo(i.snapshotVersion)>0)&&(t.Fs=t.Fs.insert(r.targetId,r),t.Ms.set(e,r.targetId)),r}))}async function zh(n,e,t){const r=Ce(n),i=r.Fs.get(e),s=t?"readwrite":"readwrite-primary";try{t||await r.persistence.runTransaction("Release target",s,(a=>r.persistence.referenceDelegate.removeTarget(a,i)))}catch(a){if(!aa(a))throw a;G(Bd,`Failed to update sequence numbers for target ${e}: ${a}`)}r.Fs=r.Fs.remove(e),r.Ms.delete(i.target)}function Hp(n,e,t){const r=Ce(n);let i=pe.min(),s=Ke();return r.persistence.runTransaction("Execute query","readwrite",(a=>(function(c,h,f){const m=Ce(c),_=m.Ms.get(f);return _!==void 0?F.resolve(m.Fs.get(_)):m.hi.getTargetData(h,f)})(r,a,ai(e)).next((l=>{if(l)return i=l.lastLimboFreeSnapshotVersion,r.hi.getMatchingKeysForTargetId(a,l.targetId).next((c=>{s=c}))})).next((()=>r.Cs.getDocumentsMatchingQuery(a,e,t?i:pe.min(),t?s:Ke()))).next((l=>(gS(r,s1(e),l),{documents:l,qs:s})))))}function gS(n,e,t){let r=n.xs.get(e)||pe.min();t.forEach(((i,s)=>{s.readTime.compareTo(r)>0&&(r=s.readTime)})),n.xs.set(e,r)}class Wp{constructor(){this.activeTargetIds=h1()}Gs(e){this.activeTargetIds=this.activeTargetIds.add(e)}zs(e){this.activeTargetIds=this.activeTargetIds.delete(e)}Ws(){const e={activeTargetIds:this.activeTargetIds.toArray(),updateTimeMs:Date.now()};return JSON.stringify(e)}}class _S{constructor(){this.Fo=new Wp,this.Mo={},this.onlineStateHandler=null,this.sequenceNumberHandler=null}addPendingMutation(e){}updateMutationState(e,t,r){}addLocalQueryTarget(e,t=!0){return t&&this.Fo.Gs(e),this.Mo[e]||"not-current"}updateQueryState(e,t,r){this.Mo[e]=t}removeLocalQueryTarget(e){this.Fo.zs(e)}isLocalQueryTarget(e){return this.Fo.activeTargetIds.has(e)}clearQueryState(e){delete this.Mo[e]}getAllActiveQueryTargets(){return this.Fo.activeTargetIds}isActiveQueryTarget(e){return this.Fo.activeTargetIds.has(e)}start(){return this.Fo=new Wp,Promise.resolve()}handleUserChange(e,t,r){}setOnlineState(e){}shutdown(){}writeSequenceNumber(e){}notifyBundleLoaded(e){}}/**
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
 */class vS{xo(e){}shutdown(){}}/**
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
 */const Gp="ConnectivityMonitor";class Kp{constructor(){this.Oo=()=>this.No(),this.Bo=()=>this.Lo(),this.ko=[],this.qo()}xo(e){this.ko.push(e)}shutdown(){window.removeEventListener("online",this.Oo),window.removeEventListener("offline",this.Bo)}qo(){window.addEventListener("online",this.Oo),window.addEventListener("offline",this.Bo)}No(){G(Gp,"Network connectivity changed: AVAILABLE");for(const e of this.ko)e(0)}Lo(){G(Gp,"Network connectivity changed: UNAVAILABLE");for(const e of this.ko)e(1)}static C(){return typeof window<"u"&&window.addEventListener!==void 0&&window.removeEventListener!==void 0}}/**
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
 */let Zl=null;function jh(){return Zl===null?Zl=(function(){return 268435456+Math.round(2147483648*Math.random())})():Zl++,"0x"+Zl.toString(16)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const rh="RestConnection",yS={BatchGetDocuments:"batchGet",Commit:"commit",RunQuery:"runQuery",RunAggregationQuery:"runAggregationQuery"};class ES{get Qo(){return!1}constructor(e){this.databaseInfo=e,this.databaseId=e.databaseId;const t=e.ssl?"https":"http",r=encodeURIComponent(this.databaseId.projectId),i=encodeURIComponent(this.databaseId.database);this.$o=t+"://"+e.host,this.Uo=`projects/${r}/databases/${i}`,this.Ko=this.databaseId.database===kc?`project_id=${r}`:`project_id=${r}&database_id=${i}`}Wo(e,t,r,i,s){const a=jh(),l=this.Go(e,t.toUriEncodedString());G(rh,`Sending RPC '${e}' ${a}:`,l,r);const c={"google-cloud-resource-prefix":this.Uo,"x-goog-request-params":this.Ko};this.zo(c,i,s);const{host:h}=new URL(l),f=na(h);return this.jo(e,l,c,r,f).then((m=>(G(rh,`Received RPC '${e}' ${a}: `,m),m)),(m=>{throw Js(rh,`RPC '${e}' ${a} failed with error: `,m,"url: ",l,"request:",r),m}))}Jo(e,t,r,i,s,a){return this.Wo(e,t,r,i,s)}zo(e,t,r){e["X-Goog-Api-Client"]=(function(){return"gl-js/ fire/"+oa})(),e["Content-Type"]="text/plain",this.databaseInfo.appId&&(e["X-Firebase-GMPID"]=this.databaseInfo.appId),t&&t.headers.forEach(((i,s)=>e[s]=i)),r&&r.headers.forEach(((i,s)=>e[s]=i))}Go(e,t){const r=yS[e];return`${this.$o}/v1/${t}:${r}`}terminate(){}}/**
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
 */class wS{constructor(e){this.Ho=e.Ho,this.Yo=e.Yo}Zo(e){this.Xo=e}e_(e){this.t_=e}n_(e){this.r_=e}onMessage(e){this.i_=e}close(){this.Yo()}send(e){this.Ho(e)}s_(){this.Xo()}o_(){this.t_()}__(e){this.r_(e)}a_(e){this.i_(e)}}/**
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
 */const Cn="WebChannelConnection";class TS extends ES{constructor(e){super(e),this.u_=[],this.forceLongPolling=e.forceLongPolling,this.autoDetectLongPolling=e.autoDetectLongPolling,this.useFetchStreams=e.useFetchStreams,this.longPollingOptions=e.longPollingOptions}jo(e,t,r,i,s){const a=jh();return new Promise(((l,c)=>{const h=new lv;h.setWithCredentials(!0),h.listenOnce(cv.COMPLETE,(()=>{try{switch(h.getLastErrorCode()){case uc.NO_ERROR:const m=h.getResponseJson();G(Cn,`XHR for RPC '${e}' ${a} received:`,JSON.stringify(m)),l(m);break;case uc.TIMEOUT:G(Cn,`RPC '${e}' ${a} timed out`),c(new B(x.DEADLINE_EXCEEDED,"Request time out"));break;case uc.HTTP_ERROR:const _=h.getStatus();if(G(Cn,`RPC '${e}' ${a} failed with status:`,_,"response text:",h.getResponseText()),_>0){let I=h.getResponseJson();Array.isArray(I)&&(I=I[0]);const w=I==null?void 0:I.error;if(w&&w.status&&w.message){const D=(function(L){const U=L.toLowerCase().replace(/_/g,"-");return Object.values(x).indexOf(U)>=0?U:x.UNKNOWN})(w.status);c(new B(D,w.message))}else c(new B(x.UNKNOWN,"Server responded with status "+h.getStatus()))}else c(new B(x.UNAVAILABLE,"Connection failed."));break;default:ae(9055,{c_:e,streamId:a,l_:h.getLastErrorCode(),h_:h.getLastError()})}}finally{G(Cn,`RPC '${e}' ${a} completed.`)}}));const f=JSON.stringify(i);G(Cn,`RPC '${e}' ${a} sending request:`,i),h.send(t,"POST",f,r,15)}))}P_(e,t,r){const i=jh(),s=[this.$o,"/","google.firestore.v1.Firestore","/",e,"/channel"],a=dv(),l=hv(),c={httpSessionIdParam:"gsessionid",initMessageHeaders:{},messageUrlParams:{database:`projects/${this.databaseId.projectId}/databases/${this.databaseId.database}`},sendRawJson:!0,supportsCrossDomainXhr:!0,internalChannelParams:{forwardChannelRequestTimeoutMs:6e5},forceLongPolling:this.forceLongPolling,detectBufferingProxy:this.autoDetectLongPolling},h=this.longPollingOptions.timeoutSeconds;h!==void 0&&(c.longPollingTimeout=Math.round(1e3*h)),this.useFetchStreams&&(c.useFetchStreams=!0),this.zo(c.initMessageHeaders,t,r),c.encodeInitMessageHeaders=!0;const f=s.join("");G(Cn,`Creating RPC '${e}' stream ${i}: ${f}`,c);const m=a.createWebChannel(f,c);this.T_(m);let _=!1,I=!1;const w=new wS({Ho:T=>{I?G(Cn,`Not sending because RPC '${e}' stream ${i} is closed:`,T):(_||(G(Cn,`Opening RPC '${e}' stream ${i} transport.`),m.open(),_=!0),G(Cn,`RPC '${e}' stream ${i} sending:`,T),m.send(T))},Yo:()=>m.close()}),D=(T,L,U)=>{T.listen(L,(q=>{try{U(q)}catch(ee){setTimeout((()=>{throw ee}),0)}}))};return D(m,Da.EventType.OPEN,(()=>{I||(G(Cn,`RPC '${e}' stream ${i} transport opened.`),w.s_())})),D(m,Da.EventType.CLOSE,(()=>{I||(I=!0,G(Cn,`RPC '${e}' stream ${i} transport closed`),w.__(),this.I_(m))})),D(m,Da.EventType.ERROR,(T=>{I||(I=!0,Js(Cn,`RPC '${e}' stream ${i} transport errored. Name:`,T.name,"Message:",T.message),w.__(new B(x.UNAVAILABLE,"The operation could not be completed")))})),D(m,Da.EventType.MESSAGE,(T=>{var L;if(!I){const U=T.data[0];ut(!!U,16349);const q=U,ee=(q==null?void 0:q.error)||((L=q[0])===null||L===void 0?void 0:L.error);if(ee){G(Cn,`RPC '${e}' stream ${i} received error:`,ee);const ge=ee.status;let W=(function(E){const S=Qt[E];if(S!==void 0)return jv(S)})(ge),A=ee.message;W===void 0&&(W=x.INTERNAL,A="Unknown error status: "+ge+" with message "+ee.message),I=!0,w.__(new B(W,A)),m.close()}else G(Cn,`RPC '${e}' stream ${i} received:`,U),w.a_(U)}})),D(l,uv.STAT_EVENT,(T=>{T.stat===Vh.PROXY?G(Cn,`RPC '${e}' stream ${i} detected buffering proxy`):T.stat===Vh.NOPROXY&&G(Cn,`RPC '${e}' stream ${i} detected no buffering proxy`)})),setTimeout((()=>{w.o_()}),0),w}terminate(){this.u_.forEach((e=>e.close())),this.u_=[]}T_(e){this.u_.push(e)}I_(e){this.u_=this.u_.filter((t=>t===e))}}function ih(){return typeof document<"u"?document:null}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function mu(n){return new P1(n,!0)}/**
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
 */class zd{constructor(e,t,r=1e3,i=1.5,s=6e4){this.Fi=e,this.timerId=t,this.d_=r,this.E_=i,this.A_=s,this.R_=0,this.V_=null,this.m_=Date.now(),this.reset()}reset(){this.R_=0}f_(){this.R_=this.A_}g_(e){this.cancel();const t=Math.floor(this.R_+this.p_()),r=Math.max(0,Date.now()-this.m_),i=Math.max(0,t-r);i>0&&G("ExponentialBackoff",`Backing off for ${i} ms (base delay: ${this.R_} ms, delay with jitter: ${t} ms, last attempt: ${r} ms ago)`),this.V_=this.Fi.enqueueAfterDelay(this.timerId,i,(()=>(this.m_=Date.now(),e()))),this.R_*=this.E_,this.R_<this.d_&&(this.R_=this.d_),this.R_>this.A_&&(this.R_=this.A_)}y_(){this.V_!==null&&(this.V_.skipDelay(),this.V_=null)}cancel(){this.V_!==null&&(this.V_.cancel(),this.V_=null)}p_(){return(Math.random()-.5)*this.R_}}/**
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
 */const Qp="PersistentStream";class IS{constructor(e,t,r,i,s,a,l,c){this.Fi=e,this.w_=r,this.S_=i,this.connection=s,this.authCredentialsProvider=a,this.appCheckCredentialsProvider=l,this.listener=c,this.state=0,this.b_=0,this.D_=null,this.v_=null,this.stream=null,this.C_=0,this.F_=new zd(e,t)}M_(){return this.state===1||this.state===5||this.x_()}x_(){return this.state===2||this.state===3}start(){this.C_=0,this.state!==4?this.auth():this.O_()}async stop(){this.M_()&&await this.close(0)}N_(){this.state=0,this.F_.reset()}B_(){this.x_()&&this.D_===null&&(this.D_=this.Fi.enqueueAfterDelay(this.w_,6e4,(()=>this.L_())))}k_(e){this.q_(),this.stream.send(e)}async L_(){if(this.x_())return this.close(0)}q_(){this.D_&&(this.D_.cancel(),this.D_=null)}Q_(){this.v_&&(this.v_.cancel(),this.v_=null)}async close(e,t){this.q_(),this.Q_(),this.F_.cancel(),this.b_++,e!==4?this.F_.reset():t&&t.code===x.RESOURCE_EXHAUSTED?(Ni(t.toString()),Ni("Using maximum backoff delay to prevent overloading the backend."),this.F_.f_()):t&&t.code===x.UNAUTHENTICATED&&this.state!==3&&(this.authCredentialsProvider.invalidateToken(),this.appCheckCredentialsProvider.invalidateToken()),this.stream!==null&&(this.U_(),this.stream.close(),this.stream=null),this.state=e,await this.listener.n_(t)}U_(){}auth(){this.state=1;const e=this.K_(this.b_),t=this.b_;Promise.all([this.authCredentialsProvider.getToken(),this.appCheckCredentialsProvider.getToken()]).then((([r,i])=>{this.b_===t&&this.W_(r,i)}),(r=>{e((()=>{const i=new B(x.UNKNOWN,"Fetching auth token failed: "+r.message);return this.G_(i)}))}))}W_(e,t){const r=this.K_(this.b_);this.stream=this.z_(e,t),this.stream.Zo((()=>{r((()=>this.listener.Zo()))})),this.stream.e_((()=>{r((()=>(this.state=2,this.v_=this.Fi.enqueueAfterDelay(this.S_,1e4,(()=>(this.x_()&&(this.state=3),Promise.resolve()))),this.listener.e_())))})),this.stream.n_((i=>{r((()=>this.G_(i)))})),this.stream.onMessage((i=>{r((()=>++this.C_==1?this.j_(i):this.onNext(i)))}))}O_(){this.state=5,this.F_.g_((async()=>{this.state=0,this.start()}))}G_(e){return G(Qp,`close with error: ${e}`),this.stream=null,this.close(4,e)}K_(e){return t=>{this.Fi.enqueueAndForget((()=>this.b_===e?t():(G(Qp,"stream callback skipped by getCloseGuardedDispatcher."),Promise.resolve())))}}}class AS extends IS{constructor(e,t,r,i,s,a){super(e,"listen_stream_connection_backoff","listen_stream_idle","health_check_timeout",t,r,i,a),this.serializer=s}z_(e,t){return this.connection.P_("Listen",e,t)}j_(e){return this.onNext(e)}onNext(e){this.F_.reset();const t=O1(this.serializer,e),r=(function(s){if(!("targetChange"in s))return pe.min();const a=s.targetChange;return a.targetIds&&a.targetIds.length?pe.min():a.readTime?Si(a.readTime):pe.min()})(e);return this.listener.J_(t,r)}H_(e){const t={};t.database=$p(this.serializer),t.addTarget=(function(s,a){let l;const c=a.target;if(l=Uh(c)?{documents:M1(s,c)}:{query:Jv(s,c).Vt},l.targetId=a.targetId,a.resumeToken.approximateByteSize()>0){l.resumeToken=Gv(s,a.resumeToken);const h=qh(s,a.expectedCount);h!==null&&(l.expectedCount=h)}else if(a.snapshotVersion.compareTo(pe.min())>0){l.readTime=Mc(s,a.snapshotVersion.toTimestamp());const h=qh(s,a.expectedCount);h!==null&&(l.expectedCount=h)}return l})(this.serializer,e);const r=F1(this.serializer,e);r&&(t.labels=r),this.k_(t)}Y_(e){const t={};t.database=$p(this.serializer),t.removeTarget=e,this.k_(t)}}/**
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
 */class bS{}class SS extends bS{constructor(e,t,r,i){super(),this.authCredentials=e,this.appCheckCredentials=t,this.connection=r,this.serializer=i,this.ra=!1}ia(){if(this.ra)throw new B(x.FAILED_PRECONDITION,"The client has already been terminated.")}Wo(e,t,r,i){return this.ia(),Promise.all([this.authCredentials.getToken(),this.appCheckCredentials.getToken()]).then((([s,a])=>this.connection.Wo(e,Bh(t,r),i,s,a))).catch((s=>{throw s.name==="FirebaseError"?(s.code===x.UNAUTHENTICATED&&(this.authCredentials.invalidateToken(),this.appCheckCredentials.invalidateToken()),s):new B(x.UNKNOWN,s.toString())}))}Jo(e,t,r,i,s){return this.ia(),Promise.all([this.authCredentials.getToken(),this.appCheckCredentials.getToken()]).then((([a,l])=>this.connection.Jo(e,Bh(t,r),i,a,l,s))).catch((a=>{throw a.name==="FirebaseError"?(a.code===x.UNAUTHENTICATED&&(this.authCredentials.invalidateToken(),this.appCheckCredentials.invalidateToken()),a):new B(x.UNKNOWN,a.toString())}))}terminate(){this.ra=!0,this.connection.terminate()}}class RS{constructor(e,t){this.asyncQueue=e,this.onlineStateHandler=t,this.state="Unknown",this.sa=0,this.oa=null,this._a=!0}aa(){this.sa===0&&(this.ua("Unknown"),this.oa=this.asyncQueue.enqueueAfterDelay("online_state_timeout",1e4,(()=>(this.oa=null,this.ca("Backend didn't respond within 10 seconds."),this.ua("Offline"),Promise.resolve()))))}la(e){this.state==="Online"?this.ua("Unknown"):(this.sa++,this.sa>=1&&(this.ha(),this.ca(`Connection failed 1 times. Most recent error: ${e.toString()}`),this.ua("Offline")))}set(e){this.ha(),this.sa=0,e==="Online"&&(this._a=!1),this.ua(e)}ua(e){e!==this.state&&(this.state=e,this.onlineStateHandler(e))}ca(e){const t=`Could not reach Cloud Firestore backend. ${e}
This typically indicates that your device does not have a healthy Internet connection at the moment. The client will operate in offline mode until it is able to successfully connect to the backend.`;this._a?(Ni(t),this._a=!1):G("OnlineStateTracker",t)}ha(){this.oa!==null&&(this.oa.cancel(),this.oa=null)}}/**
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
 */const Ko="RemoteStore";class CS{constructor(e,t,r,i,s){this.localStore=e,this.datastore=t,this.asyncQueue=r,this.remoteSyncer={},this.Pa=[],this.Ta=new Map,this.Ia=new Set,this.da=[],this.Ea=s,this.Ea.xo((a=>{r.enqueueAndForget((async()=>{Rl(this)&&(G(Ko,"Restarting streams for network reachability change."),await(async function(c){const h=Ce(c);h.Ia.add(4),await Sl(h),h.Aa.set("Unknown"),h.Ia.delete(4),await gu(h)})(this))}))})),this.Aa=new RS(r,i)}}async function gu(n){if(Rl(n))for(const e of n.da)await e(!0)}async function Sl(n){for(const e of n.da)await e(!1)}function oy(n,e){const t=Ce(n);t.Ta.has(e.targetId)||(t.Ta.set(e.targetId,e),Gd(t)?Wd(t):la(t).x_()&&Hd(t,e))}function jd(n,e){const t=Ce(n),r=la(t);t.Ta.delete(e),r.x_()&&ay(t,e),t.Ta.size===0&&(r.x_()?r.B_():Rl(t)&&t.Aa.set("Unknown"))}function Hd(n,e){if(n.Ra.$e(e.targetId),e.resumeToken.approximateByteSize()>0||e.snapshotVersion.compareTo(pe.min())>0){const t=n.remoteSyncer.getRemoteKeysForTarget(e.targetId).size;e=e.withExpectedCount(t)}la(n).H_(e)}function ay(n,e){n.Ra.$e(e),la(n).Y_(e)}function Wd(n){n.Ra=new b1({getRemoteKeysForTarget:e=>n.remoteSyncer.getRemoteKeysForTarget(e),Et:e=>n.Ta.get(e)||null,lt:()=>n.datastore.serializer.databaseId}),la(n).start(),n.Aa.aa()}function Gd(n){return Rl(n)&&!la(n).M_()&&n.Ta.size>0}function Rl(n){return Ce(n).Ia.size===0}function ly(n){n.Ra=void 0}async function PS(n){n.Aa.set("Online")}async function kS(n){n.Ta.forEach(((e,t)=>{Hd(n,e)}))}async function NS(n,e){ly(n),Gd(n)?(n.Aa.la(e),Wd(n)):n.Aa.set("Unknown")}async function DS(n,e,t){if(n.Aa.set("Online"),e instanceof Wv&&e.state===2&&e.cause)try{await(async function(i,s){const a=s.cause;for(const l of s.targetIds)i.Ta.has(l)&&(await i.remoteSyncer.rejectListen(l,a),i.Ta.delete(l),i.Ra.removeTarget(l))})(n,e)}catch(r){G(Ko,"Failed to remove targets %s: %s ",e.targetIds.join(","),r),await Yp(n,r)}else if(e instanceof fc?n.Ra.Ye(e):e instanceof Hv?n.Ra.it(e):n.Ra.et(e),!t.isEqual(pe.min()))try{const r=await sy(n.localStore);t.compareTo(r)>=0&&await(function(s,a){const l=s.Ra.Pt(a);return l.targetChanges.forEach(((c,h)=>{if(c.resumeToken.approximateByteSize()>0){const f=s.Ta.get(h);f&&s.Ta.set(h,f.withResumeToken(c.resumeToken,a))}})),l.targetMismatches.forEach(((c,h)=>{const f=s.Ta.get(c);if(!f)return;s.Ta.set(c,f.withResumeToken(An.EMPTY_BYTE_STRING,f.snapshotVersion)),ay(s,c);const m=new Ji(f.target,c,h,f.sequenceNumber);Hd(s,m)})),s.remoteSyncer.applyRemoteEvent(l)})(n,t)}catch(r){G(Ko,"Failed to raise snapshot:",r),await Yp(n,r)}}async function Yp(n,e,t){if(!aa(e))throw e;n.Ia.add(1),await Sl(n),n.Aa.set("Offline"),t||(t=()=>sy(n.localStore)),n.asyncQueue.enqueueRetryable((async()=>{G(Ko,"Retrying IndexedDB access"),await t(),n.Ia.delete(1),await gu(n)}))}async function Jp(n,e){const t=Ce(n);t.asyncQueue.verifyOperationInProgress(),G(Ko,"RemoteStore received new credentials");const r=Rl(t);t.Ia.add(3),await Sl(t),r&&t.Aa.set("Unknown"),await t.remoteSyncer.handleCredentialChange(e),t.Ia.delete(3),await gu(t)}async function OS(n,e){const t=Ce(n);e?(t.Ia.delete(2),await gu(t)):e||(t.Ia.add(2),await Sl(t),t.Aa.set("Unknown"))}function la(n){return n.Va||(n.Va=(function(t,r,i){const s=Ce(t);return s.ia(),new AS(r,s.connection,s.authCredentials,s.appCheckCredentials,s.serializer,i)})(n.datastore,n.asyncQueue,{Zo:PS.bind(null,n),e_:kS.bind(null,n),n_:NS.bind(null,n),J_:DS.bind(null,n)}),n.da.push((async e=>{e?(n.Va.N_(),Gd(n)?Wd(n):n.Aa.set("Unknown")):(await n.Va.stop(),ly(n))}))),n.Va}/**
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
 */class Kd{constructor(e,t,r,i,s){this.asyncQueue=e,this.timerId=t,this.targetTimeMs=r,this.op=i,this.removalCallback=s,this.deferred=new oi,this.then=this.deferred.promise.then.bind(this.deferred.promise),this.deferred.promise.catch((a=>{}))}get promise(){return this.deferred.promise}static createAndSchedule(e,t,r,i,s){const a=Date.now()+r,l=new Kd(e,t,a,i,s);return l.start(r),l}start(e){this.timerHandle=setTimeout((()=>this.handleDelayElapsed()),e)}skipDelay(){return this.handleDelayElapsed()}cancel(e){this.timerHandle!==null&&(this.clearTimeout(),this.deferred.reject(new B(x.CANCELLED,"Operation cancelled"+(e?": "+e:""))))}handleDelayElapsed(){this.asyncQueue.enqueueAndForget((()=>this.timerHandle!==null?(this.clearTimeout(),this.op().then((e=>this.deferred.resolve(e)))):Promise.resolve()))}clearTimeout(){this.timerHandle!==null&&(this.removalCallback(this),clearTimeout(this.timerHandle),this.timerHandle=null)}}function cy(n,e){if(Ni("AsyncQueue",`${e}: ${n}`),aa(n))return new B(x.UNAVAILABLE,`${e}: ${n}`);throw n}/**
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
 */class Po{static emptySet(e){return new Po(e.comparator)}constructor(e){this.comparator=e?(t,r)=>e(t,r)||ne.comparator(t.key,r.key):(t,r)=>ne.comparator(t.key,r.key),this.keyedMap=Oa(),this.sortedSet=new zt(this.comparator)}has(e){return this.keyedMap.get(e)!=null}get(e){return this.keyedMap.get(e)}first(){return this.sortedSet.minKey()}last(){return this.sortedSet.maxKey()}isEmpty(){return this.sortedSet.isEmpty()}indexOf(e){const t=this.keyedMap.get(e);return t?this.sortedSet.indexOf(t):-1}get size(){return this.sortedSet.size}forEach(e){this.sortedSet.inorderTraversal(((t,r)=>(e(t),!1)))}add(e){const t=this.delete(e.key);return t.copy(t.keyedMap.insert(e.key,e),t.sortedSet.insert(e,null))}delete(e){const t=this.get(e);return t?this.copy(this.keyedMap.remove(e),this.sortedSet.remove(t)):this}isEqual(e){if(!(e instanceof Po)||this.size!==e.size)return!1;const t=this.sortedSet.getIterator(),r=e.sortedSet.getIterator();for(;t.hasNext();){const i=t.getNext().key,s=r.getNext().key;if(!i.isEqual(s))return!1}return!0}toString(){const e=[];return this.forEach((t=>{e.push(t.toString())})),e.length===0?"DocumentSet ()":`DocumentSet (
  `+e.join(`  
`)+`
)`}copy(e,t){const r=new Po;return r.comparator=this.comparator,r.keyedMap=e,r.sortedSet=t,r}}/**
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
 */class Xp{constructor(){this.fa=new zt(ne.comparator)}track(e){const t=e.doc.key,r=this.fa.get(t);r?e.type!==0&&r.type===3?this.fa=this.fa.insert(t,e):e.type===3&&r.type!==1?this.fa=this.fa.insert(t,{type:r.type,doc:e.doc}):e.type===2&&r.type===2?this.fa=this.fa.insert(t,{type:2,doc:e.doc}):e.type===2&&r.type===0?this.fa=this.fa.insert(t,{type:0,doc:e.doc}):e.type===1&&r.type===0?this.fa=this.fa.remove(t):e.type===1&&r.type===2?this.fa=this.fa.insert(t,{type:1,doc:r.doc}):e.type===0&&r.type===1?this.fa=this.fa.insert(t,{type:2,doc:e.doc}):ae(63341,{At:e,ga:r}):this.fa=this.fa.insert(t,e)}pa(){const e=[];return this.fa.inorderTraversal(((t,r)=>{e.push(r)})),e}}class Qo{constructor(e,t,r,i,s,a,l,c,h){this.query=e,this.docs=t,this.oldDocs=r,this.docChanges=i,this.mutatedKeys=s,this.fromCache=a,this.syncStateChanged=l,this.excludesMetadataChanges=c,this.hasCachedResults=h}static fromInitialDocuments(e,t,r,i,s){const a=[];return t.forEach((l=>{a.push({type:0,doc:l})})),new Qo(e,t,Po.emptySet(t),a,r,i,!0,!1,s)}get hasPendingWrites(){return!this.mutatedKeys.isEmpty()}isEqual(e){if(!(this.fromCache===e.fromCache&&this.hasCachedResults===e.hasCachedResults&&this.syncStateChanged===e.syncStateChanged&&this.mutatedKeys.isEqual(e.mutatedKeys)&&uu(this.query,e.query)&&this.docs.isEqual(e.docs)&&this.oldDocs.isEqual(e.oldDocs)))return!1;const t=this.docChanges,r=e.docChanges;if(t.length!==r.length)return!1;for(let i=0;i<t.length;i++)if(t[i].type!==r[i].type||!t[i].doc.isEqual(r[i].doc))return!1;return!0}}/**
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
 */class VS{constructor(){this.ya=void 0,this.wa=[]}Sa(){return this.wa.some((e=>e.ba()))}}class MS{constructor(){this.queries=Zp(),this.onlineState="Unknown",this.Da=new Set}terminate(){(function(t,r){const i=Ce(t),s=i.queries;i.queries=Zp(),s.forEach(((a,l)=>{for(const c of l.wa)c.onError(r)}))})(this,new B(x.ABORTED,"Firestore shutting down"))}}function Zp(){return new to((n=>Ov(n)),uu)}async function uy(n,e){const t=Ce(n);let r=3;const i=e.query;let s=t.queries.get(i);s?!s.Sa()&&e.ba()&&(r=2):(s=new VS,r=e.ba()?0:1);try{switch(r){case 0:s.ya=await t.onListen(i,!0);break;case 1:s.ya=await t.onListen(i,!1);break;case 2:await t.onFirstRemoteStoreListen(i)}}catch(a){const l=cy(a,`Initialization of query '${vo(e.query)}' failed`);return void e.onError(l)}t.queries.set(i,s),s.wa.push(e),e.va(t.onlineState),s.ya&&e.Ca(s.ya)&&Qd(t)}async function hy(n,e){const t=Ce(n),r=e.query;let i=3;const s=t.queries.get(r);if(s){const a=s.wa.indexOf(e);a>=0&&(s.wa.splice(a,1),s.wa.length===0?i=e.ba()?0:1:!s.Sa()&&e.ba()&&(i=2))}switch(i){case 0:return t.queries.delete(r),t.onUnlisten(r,!0);case 1:return t.queries.delete(r),t.onUnlisten(r,!1);case 2:return t.onLastRemoteStoreUnlisten(r);default:return}}function xS(n,e){const t=Ce(n);let r=!1;for(const i of e){const s=i.query,a=t.queries.get(s);if(a){for(const l of a.wa)l.Ca(i)&&(r=!0);a.ya=i}}r&&Qd(t)}function LS(n,e,t){const r=Ce(n),i=r.queries.get(e);if(i)for(const s of i.wa)s.onError(t);r.queries.delete(e)}function Qd(n){n.Da.forEach((e=>{e.next()}))}var Hh,em;(em=Hh||(Hh={})).Fa="default",em.Cache="cache";class dy{constructor(e,t,r){this.query=e,this.Ma=t,this.xa=!1,this.Oa=null,this.onlineState="Unknown",this.options=r||{}}Ca(e){if(!this.options.includeMetadataChanges){const r=[];for(const i of e.docChanges)i.type!==3&&r.push(i);e=new Qo(e.query,e.docs,e.oldDocs,r,e.mutatedKeys,e.fromCache,e.syncStateChanged,!0,e.hasCachedResults)}let t=!1;return this.xa?this.Na(e)&&(this.Ma.next(e),t=!0):this.Ba(e,this.onlineState)&&(this.La(e),t=!0),this.Oa=e,t}onError(e){this.Ma.error(e)}va(e){this.onlineState=e;let t=!1;return this.Oa&&!this.xa&&this.Ba(this.Oa,e)&&(this.La(this.Oa),t=!0),t}Ba(e,t){if(!e.fromCache||!this.ba())return!0;const r=t!=="Offline";return(!this.options.ka||!r)&&(!e.docs.isEmpty()||e.hasCachedResults||t==="Offline")}Na(e){if(e.docChanges.length>0)return!0;const t=this.Oa&&this.Oa.hasPendingWrites!==e.hasPendingWrites;return!(!e.syncStateChanged&&!t)&&this.options.includeMetadataChanges===!0}La(e){e=Qo.fromInitialDocuments(e.query,e.docs,e.mutatedKeys,e.fromCache,e.hasCachedResults),this.xa=!0,this.Ma.next(e)}ba(){return this.options.source!==Hh.Cache}}/**
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
 */class fy{constructor(e){this.key=e}}class py{constructor(e){this.key=e}}class FS{constructor(e,t){this.query=e,this.Ha=t,this.Ya=null,this.hasCachedResults=!1,this.current=!1,this.Za=Ke(),this.mutatedKeys=Ke(),this.Xa=Vv(e),this.eu=new Po(this.Xa)}get tu(){return this.Ha}nu(e,t){const r=t?t.ru:new Xp,i=t?t.eu:this.eu;let s=t?t.mutatedKeys:this.mutatedKeys,a=i,l=!1;const c=this.query.limitType==="F"&&i.size===this.query.limit?i.last():null,h=this.query.limitType==="L"&&i.size===this.query.limit?i.first():null;if(e.inorderTraversal(((f,m)=>{const _=i.get(f),I=hu(this.query,m)?m:null,w=!!_&&this.mutatedKeys.has(_.key),D=!!I&&(I.hasLocalMutations||this.mutatedKeys.has(I.key)&&I.hasCommittedMutations);let T=!1;_&&I?_.data.isEqual(I.data)?w!==D&&(r.track({type:3,doc:I}),T=!0):this.iu(_,I)||(r.track({type:2,doc:I}),T=!0,(c&&this.Xa(I,c)>0||h&&this.Xa(I,h)<0)&&(l=!0)):!_&&I?(r.track({type:0,doc:I}),T=!0):_&&!I&&(r.track({type:1,doc:_}),T=!0,(c||h)&&(l=!0)),T&&(I?(a=a.add(I),s=D?s.add(f):s.delete(f)):(a=a.delete(f),s=s.delete(f)))})),this.query.limit!==null)for(;a.size>this.query.limit;){const f=this.query.limitType==="F"?a.last():a.first();a=a.delete(f.key),s=s.delete(f.key),r.track({type:1,doc:f})}return{eu:a,ru:r,Ds:l,mutatedKeys:s}}iu(e,t){return e.hasLocalMutations&&t.hasCommittedMutations&&!t.hasLocalMutations}applyChanges(e,t,r,i){const s=this.eu;this.eu=e.eu,this.mutatedKeys=e.mutatedKeys;const a=e.ru.pa();a.sort(((f,m)=>(function(I,w){const D=T=>{switch(T){case 0:return 1;case 2:case 3:return 2;case 1:return 0;default:return ae(20277,{At:T})}};return D(I)-D(w)})(f.type,m.type)||this.Xa(f.doc,m.doc))),this.su(r),i=i!=null&&i;const l=t&&!i?this.ou():[],c=this.Za.size===0&&this.current&&!i?1:0,h=c!==this.Ya;return this.Ya=c,a.length!==0||h?{snapshot:new Qo(this.query,e.eu,s,a,e.mutatedKeys,c===0,h,!1,!!r&&r.resumeToken.approximateByteSize()>0),_u:l}:{_u:l}}va(e){return this.current&&e==="Offline"?(this.current=!1,this.applyChanges({eu:this.eu,ru:new Xp,mutatedKeys:this.mutatedKeys,Ds:!1},!1)):{_u:[]}}au(e){return!this.Ha.has(e)&&!!this.eu.has(e)&&!this.eu.get(e).hasLocalMutations}su(e){e&&(e.addedDocuments.forEach((t=>this.Ha=this.Ha.add(t))),e.modifiedDocuments.forEach((t=>{})),e.removedDocuments.forEach((t=>this.Ha=this.Ha.delete(t))),this.current=e.current)}ou(){if(!this.current)return[];const e=this.Za;this.Za=Ke(),this.eu.forEach((r=>{this.au(r.key)&&(this.Za=this.Za.add(r.key))}));const t=[];return e.forEach((r=>{this.Za.has(r)||t.push(new py(r))})),this.Za.forEach((r=>{e.has(r)||t.push(new fy(r))})),t}uu(e){this.Ha=e.qs,this.Za=Ke();const t=this.nu(e.documents);return this.applyChanges(t,!0)}cu(){return Qo.fromInitialDocuments(this.query,this.eu,this.mutatedKeys,this.Ya===0,this.hasCachedResults)}}const Yd="SyncEngine";class US{constructor(e,t,r){this.query=e,this.targetId=t,this.view=r}}class $S{constructor(e){this.key=e,this.lu=!1}}class qS{constructor(e,t,r,i,s,a){this.localStore=e,this.remoteStore=t,this.eventManager=r,this.sharedClientState=i,this.currentUser=s,this.maxConcurrentLimboResolutions=a,this.hu={},this.Pu=new to((l=>Ov(l)),uu),this.Tu=new Map,this.Iu=new Set,this.du=new zt(ne.comparator),this.Eu=new Map,this.Au=new Ud,this.Ru={},this.Vu=new Map,this.mu=Go.ur(),this.onlineState="Unknown",this.fu=void 0}get isPrimaryClient(){return this.fu===!0}}async function BS(n,e,t=!0){const r=yy(n);let i;const s=r.Pu.get(e);return s?(r.sharedClientState.addLocalQueryTarget(s.targetId),i=s.view.cu()):i=await my(r,e,t,!0),i}async function zS(n,e){const t=yy(n);await my(t,e,!0,!1)}async function my(n,e,t,r){const i=await mS(n.localStore,ai(e)),s=i.targetId,a=n.sharedClientState.addLocalQueryTarget(s,t);let l;return r&&(l=await jS(n,e,s,a==="current",i.resumeToken)),n.isPrimaryClient&&t&&oy(n.remoteStore,i),l}async function jS(n,e,t,r,i){n.gu=(m,_,I)=>(async function(D,T,L,U){let q=T.view.nu(L);q.Ds&&(q=await Hp(D.localStore,T.query,!1).then((({documents:A})=>T.view.nu(A,q))));const ee=U&&U.targetChanges.get(T.targetId),ge=U&&U.targetMismatches.get(T.targetId)!=null,W=T.view.applyChanges(q,D.isPrimaryClient,ee,ge);return nm(D,T.targetId,W._u),W.snapshot})(n,m,_,I);const s=await Hp(n.localStore,e,!0),a=new FS(e,s.qs),l=a.nu(s.documents),c=bl.createSynthesizedTargetChangeForCurrentChange(t,r&&n.onlineState!=="Offline",i),h=a.applyChanges(l,n.isPrimaryClient,c);nm(n,t,h._u);const f=new US(e,t,a);return n.Pu.set(e,f),n.Tu.has(t)?n.Tu.get(t).push(e):n.Tu.set(t,[e]),h.snapshot}async function HS(n,e,t){const r=Ce(n),i=r.Pu.get(e),s=r.Tu.get(i.targetId);if(s.length>1)return r.Tu.set(i.targetId,s.filter((a=>!uu(a,e)))),void r.Pu.delete(e);r.isPrimaryClient?(r.sharedClientState.removeLocalQueryTarget(i.targetId),r.sharedClientState.isActiveQueryTarget(i.targetId)||await zh(r.localStore,i.targetId,!1).then((()=>{r.sharedClientState.clearQueryState(i.targetId),t&&jd(r.remoteStore,i.targetId),Wh(r,i.targetId)})).catch(ou)):(Wh(r,i.targetId),await zh(r.localStore,i.targetId,!0))}async function WS(n,e){const t=Ce(n),r=t.Pu.get(e),i=t.Tu.get(r.targetId);t.isPrimaryClient&&i.length===1&&(t.sharedClientState.removeLocalQueryTarget(r.targetId),jd(t.remoteStore,r.targetId))}async function gy(n,e){const t=Ce(n);try{const r=await fS(t.localStore,e);e.targetChanges.forEach(((i,s)=>{const a=t.Eu.get(s);a&&(ut(i.addedDocuments.size+i.modifiedDocuments.size+i.removedDocuments.size<=1,22616),i.addedDocuments.size>0?a.lu=!0:i.modifiedDocuments.size>0?ut(a.lu,14607):i.removedDocuments.size>0&&(ut(a.lu,42227),a.lu=!1))})),await vy(t,r,e)}catch(r){await ou(r)}}function tm(n,e,t){const r=Ce(n);if(r.isPrimaryClient&&t===0||!r.isPrimaryClient&&t===1){const i=[];r.Pu.forEach(((s,a)=>{const l=a.view.va(e);l.snapshot&&i.push(l.snapshot)})),(function(a,l){const c=Ce(a);c.onlineState=l;let h=!1;c.queries.forEach(((f,m)=>{for(const _ of m.wa)_.va(l)&&(h=!0)})),h&&Qd(c)})(r.eventManager,e),i.length&&r.hu.J_(i),r.onlineState=e,r.isPrimaryClient&&r.sharedClientState.setOnlineState(e)}}async function GS(n,e,t){const r=Ce(n);r.sharedClientState.updateQueryState(e,"rejected",t);const i=r.Eu.get(e),s=i&&i.key;if(s){let a=new zt(ne.comparator);a=a.insert(s,gn.newNoDocument(s,pe.min()));const l=Ke().add(s),c=new pu(pe.min(),new Map,new zt(Re),a,l);await gy(r,c),r.du=r.du.remove(s),r.Eu.delete(e),Jd(r)}else await zh(r.localStore,e,!1).then((()=>Wh(r,e,t))).catch(ou)}function Wh(n,e,t=null){n.sharedClientState.removeLocalQueryTarget(e);for(const r of n.Tu.get(e))n.Pu.delete(r),t&&n.hu.pu(r,t);n.Tu.delete(e),n.isPrimaryClient&&n.Au.zr(e).forEach((r=>{n.Au.containsKey(r)||_y(n,r)}))}function _y(n,e){n.Iu.delete(e.path.canonicalString());const t=n.du.get(e);t!==null&&(jd(n.remoteStore,t),n.du=n.du.remove(e),n.Eu.delete(t),Jd(n))}function nm(n,e,t){for(const r of t)r instanceof fy?(n.Au.addReference(r.key,e),KS(n,r)):r instanceof py?(G(Yd,"Document no longer in limbo: "+r.key),n.Au.removeReference(r.key,e),n.Au.containsKey(r.key)||_y(n,r.key)):ae(19791,{yu:r})}function KS(n,e){const t=e.key,r=t.path.canonicalString();n.du.get(t)||n.Iu.has(r)||(G(Yd,"New document in limbo: "+t),n.Iu.add(r),Jd(n))}function Jd(n){for(;n.Iu.size>0&&n.du.size<n.maxConcurrentLimboResolutions;){const e=n.Iu.values().next().value;n.Iu.delete(e);const t=new ne(ot.fromString(e)),r=n.mu.next();n.Eu.set(r,new $S(t)),n.du=n.du.insert(t,r),oy(n.remoteStore,new Ji(ai(Od(t.path)),r,"TargetPurposeLimboResolution",au.ue))}}async function vy(n,e,t){const r=Ce(n),i=[],s=[],a=[];r.Pu.isEmpty()||(r.Pu.forEach(((l,c)=>{a.push(r.gu(c,e,t).then((h=>{var f;if((h||t)&&r.isPrimaryClient){const m=h?!h.fromCache:(f=t==null?void 0:t.targetChanges.get(c.targetId))===null||f===void 0?void 0:f.current;r.sharedClientState.updateQueryState(c.targetId,m?"current":"not-current")}if(h){i.push(h);const m=qd.Es(c.targetId,h);s.push(m)}})))})),await Promise.all(a),r.hu.J_(i),await(async function(c,h){const f=Ce(c);try{await f.persistence.runTransaction("notifyLocalViewChanges","readwrite",(m=>F.forEach(h,(_=>F.forEach(_.Is,(I=>f.persistence.referenceDelegate.addReference(m,_.targetId,I))).next((()=>F.forEach(_.ds,(I=>f.persistence.referenceDelegate.removeReference(m,_.targetId,I)))))))))}catch(m){if(!aa(m))throw m;G(Bd,"Failed to update sequence numbers: "+m)}for(const m of h){const _=m.targetId;if(!m.fromCache){const I=f.Fs.get(_),w=I.snapshotVersion,D=I.withLastLimboFreeSnapshotVersion(w);f.Fs=f.Fs.insert(_,D)}}})(r.localStore,s))}async function QS(n,e){const t=Ce(n);if(!t.currentUser.isEqual(e)){G(Yd,"User change. New user:",e.toKey());const r=await iy(t.localStore,e);t.currentUser=e,(function(s,a){s.Vu.forEach((l=>{l.forEach((c=>{c.reject(new B(x.CANCELLED,a))}))})),s.Vu.clear()})(t,"'waitForPendingWrites' promise is rejected due to a user change."),t.sharedClientState.handleUserChange(e,r.removedBatchIds,r.addedBatchIds),await vy(t,r.Bs)}}function YS(n,e){const t=Ce(n),r=t.Eu.get(e);if(r&&r.lu)return Ke().add(r.key);{let i=Ke();const s=t.Tu.get(e);if(!s)return i;for(const a of s){const l=t.Pu.get(a);i=i.unionWith(l.view.tu)}return i}}function yy(n){const e=Ce(n);return e.remoteStore.remoteSyncer.applyRemoteEvent=gy.bind(null,e),e.remoteStore.remoteSyncer.getRemoteKeysForTarget=YS.bind(null,e),e.remoteStore.remoteSyncer.rejectListen=GS.bind(null,e),e.hu.J_=xS.bind(null,e.eventManager),e.hu.pu=LS.bind(null,e.eventManager),e}class Fc{constructor(){this.kind="memory",this.synchronizeTabs=!1}async initialize(e){this.serializer=mu(e.databaseInfo.databaseId),this.sharedClientState=this.bu(e),this.persistence=this.Du(e),await this.persistence.start(),this.localStore=this.vu(e),this.gcScheduler=this.Cu(e,this.localStore),this.indexBackfillerScheduler=this.Fu(e,this.localStore)}Cu(e,t){return null}Fu(e,t){return null}vu(e){return dS(this.persistence,new cS,e.initialUser,this.serializer)}Du(e){return new ry($d.Vi,this.serializer)}bu(e){return new _S}async terminate(){var e,t;(e=this.gcScheduler)===null||e===void 0||e.stop(),(t=this.indexBackfillerScheduler)===null||t===void 0||t.stop(),this.sharedClientState.shutdown(),await this.persistence.shutdown()}}Fc.provider={build:()=>new Fc};class JS extends Fc{constructor(e){super(),this.cacheSizeBytes=e}Cu(e,t){ut(this.persistence.referenceDelegate instanceof Lc,46915);const r=this.persistence.referenceDelegate.garbageCollector;return new K1(r,e.asyncQueue,t)}Du(e){const t=this.cacheSizeBytes!==void 0?jn.withCacheSize(this.cacheSizeBytes):jn.DEFAULT;return new ry((r=>Lc.Vi(r,t)),this.serializer)}}class Gh{async initialize(e,t){this.localStore||(this.localStore=e.localStore,this.sharedClientState=e.sharedClientState,this.datastore=this.createDatastore(t),this.remoteStore=this.createRemoteStore(t),this.eventManager=this.createEventManager(t),this.syncEngine=this.createSyncEngine(t,!e.synchronizeTabs),this.sharedClientState.onlineStateHandler=r=>tm(this.syncEngine,r,1),this.remoteStore.remoteSyncer.handleCredentialChange=QS.bind(null,this.syncEngine),await OS(this.remoteStore,this.syncEngine.isPrimaryClient))}createEventManager(e){return(function(){return new MS})()}createDatastore(e){const t=mu(e.databaseInfo.databaseId),r=(function(s){return new TS(s)})(e.databaseInfo);return(function(s,a,l,c){return new SS(s,a,l,c)})(e.authCredentials,e.appCheckCredentials,r,t)}createRemoteStore(e){return(function(r,i,s,a,l){return new CS(r,i,s,a,l)})(this.localStore,this.datastore,e.asyncQueue,(t=>tm(this.syncEngine,t,0)),(function(){return Kp.C()?new Kp:new vS})())}createSyncEngine(e,t){return(function(i,s,a,l,c,h,f){const m=new qS(i,s,a,l,c,h);return f&&(m.fu=!0),m})(this.localStore,this.remoteStore,this.eventManager,this.sharedClientState,e.initialUser,e.maxConcurrentLimboResolutions,t)}async terminate(){var e,t;await(async function(i){const s=Ce(i);G(Ko,"RemoteStore shutting down."),s.Ia.add(5),await Sl(s),s.Ea.shutdown(),s.Aa.set("Unknown")})(this.remoteStore),(e=this.datastore)===null||e===void 0||e.terminate(),(t=this.eventManager)===null||t===void 0||t.terminate()}}Gh.provider={build:()=>new Gh};/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
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
 */class Ey{constructor(e){this.observer=e,this.muted=!1}next(e){this.muted||this.observer.next&&this.xu(this.observer.next,e)}error(e){this.muted||(this.observer.error?this.xu(this.observer.error,e):Ni("Uncaught Error in snapshot listener:",e.toString()))}Ou(){this.muted=!0}xu(e,t){setTimeout((()=>{this.muted||e(t)}),0)}}/**
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
 */class XS{constructor(e){this.datastore=e,this.readVersions=new Map,this.mutations=[],this.committed=!1,this.lastTransactionError=null,this.writtenDocs=new Set}async lookup(e){if(this.ensureCommitNotCalled(),this.mutations.length>0)throw this.lastTransactionError=new B(x.INVALID_ARGUMENT,"Firestore transactions require all reads to be executed before all writes."),this.lastTransactionError;const t=await(async function(i,s){const a=Ce(i),l={documents:s.map((m=>xc(a.serializer,m)))},c=await a.Jo("BatchGetDocuments",a.serializer.databaseId,ot.emptyPath(),l,s.length),h=new Map;c.forEach((m=>{const _=D1(a.serializer,m);h.set(_.key.toString(),_)}));const f=[];return s.forEach((m=>{const _=h.get(m.toString());ut(!!_,55234,{key:m}),f.push(_)})),f})(this.datastore,e);return t.forEach((r=>this.recordVersion(r))),t}set(e,t){this.write(t.toMutation(e,this.precondition(e))),this.writtenDocs.add(e.toString())}update(e,t){try{this.write(t.toMutation(e,this.preconditionForUpdate(e)))}catch(r){this.lastTransactionError=r}this.writtenDocs.add(e.toString())}delete(e){this.write(new xd(e,this.precondition(e))),this.writtenDocs.add(e.toString())}async commit(){if(this.ensureCommitNotCalled(),this.lastTransactionError)throw this.lastTransactionError;const e=this.readVersions;this.mutations.forEach((t=>{e.delete(t.key.toString())})),e.forEach(((t,r)=>{const i=ne.fromPath(r);this.mutations.push(new zv(i,this.precondition(i)))})),await(async function(r,i){const s=Ce(r),a={writes:i.map((l=>V1(s.serializer,l)))};await s.Wo("Commit",s.serializer.databaseId,ot.emptyPath(),a)})(this.datastore,this.mutations),this.committed=!0}recordVersion(e){let t;if(e.isFoundDocument())t=e.version;else{if(!e.isNoDocument())throw ae(50498,{Wu:e.constructor.name});t=pe.min()}const r=this.readVersions.get(e.key.toString());if(r){if(!t.isEqual(r))throw new B(x.ABORTED,"Document version changed between two reads.")}else this.readVersions.set(e.key.toString(),t)}precondition(e){const t=this.readVersions.get(e.toString());return!this.writtenDocs.has(e.toString())&&t?t.isEqual(pe.min())?Er.exists(!1):Er.updateTime(t):Er.none()}preconditionForUpdate(e){const t=this.readVersions.get(e.toString());if(!this.writtenDocs.has(e.toString())&&t){if(t.isEqual(pe.min()))throw new B(x.INVALID_ARGUMENT,"Can't update a document that doesn't exist.");return Er.updateTime(t)}return Er.exists(!0)}write(e){this.ensureCommitNotCalled(),this.mutations.push(e)}ensureCommitNotCalled(){}}/**
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
 */class ZS{constructor(e,t,r,i,s){this.asyncQueue=e,this.datastore=t,this.options=r,this.updateFunction=i,this.deferred=s,this.Gu=r.maxAttempts,this.F_=new zd(this.asyncQueue,"transaction_retry")}zu(){this.Gu-=1,this.ju()}ju(){this.F_.g_((async()=>{const e=new XS(this.datastore),t=this.Ju(e);t&&t.then((r=>{this.asyncQueue.enqueueAndForget((()=>e.commit().then((()=>{this.deferred.resolve(r)})).catch((i=>{this.Hu(i)}))))})).catch((r=>{this.Hu(r)}))}))}Ju(e){try{const t=this.updateFunction(e);return!Il(t)&&t.catch&&t.then?t:(this.deferred.reject(Error("Transaction callback must return a Promise")),null)}catch(t){return this.deferred.reject(t),null}}Hu(e){this.Gu>0&&this.Yu(e)?(this.Gu-=1,this.asyncQueue.enqueueAndForget((()=>(this.ju(),Promise.resolve())))):this.deferred.reject(e)}Yu(e){if(e.name==="FirebaseError"){const t=e.code;return t==="aborted"||t==="failed-precondition"||t==="already-exists"||!I1(t)}return!1}}/**
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
 */const ms="FirestoreClient";class eR{constructor(e,t,r,i,s){this.authCredentials=e,this.appCheckCredentials=t,this.asyncQueue=r,this.databaseInfo=i,this.user=zn.UNAUTHENTICATED,this.clientId=Pd.newId(),this.authCredentialListener=()=>Promise.resolve(),this.appCheckCredentialListener=()=>Promise.resolve(),this._uninitializedComponentsProvider=s,this.authCredentials.start(r,(async a=>{G(ms,"Received user=",a.uid),await this.authCredentialListener(a),this.user=a})),this.appCheckCredentials.start(r,(a=>(G(ms,"Received new app check token=",a),this.appCheckCredentialListener(a,this.user))))}get configuration(){return{asyncQueue:this.asyncQueue,databaseInfo:this.databaseInfo,clientId:this.clientId,authCredentials:this.authCredentials,appCheckCredentials:this.appCheckCredentials,initialUser:this.user,maxConcurrentLimboResolutions:100}}setCredentialChangeListener(e){this.authCredentialListener=e}setAppCheckTokenChangeListener(e){this.appCheckCredentialListener=e}terminate(){this.asyncQueue.enterRestrictedMode();const e=new oi;return this.asyncQueue.enqueueAndForgetEvenWhileRestricted((async()=>{try{this._onlineComponents&&await this._onlineComponents.terminate(),this._offlineComponents&&await this._offlineComponents.terminate(),this.authCredentials.shutdown(),this.appCheckCredentials.shutdown(),e.resolve()}catch(t){const r=cy(t,"Failed to shutdown persistence");e.reject(r)}})),e.promise}}async function sh(n,e){n.asyncQueue.verifyOperationInProgress(),G(ms,"Initializing OfflineComponentProvider");const t=n.configuration;await e.initialize(t);let r=t.initialUser;n.setCredentialChangeListener((async i=>{r.isEqual(i)||(await iy(e.localStore,i),r=i)})),e.persistence.setDatabaseDeletedListener((()=>{Js("Terminating Firestore due to IndexedDb database deletion"),n.terminate().then((()=>{G("Terminating Firestore due to IndexedDb database deletion completed successfully")})).catch((i=>{Js("Terminating Firestore due to IndexedDb database deletion failed",i)}))})),n._offlineComponents=e}async function rm(n,e){n.asyncQueue.verifyOperationInProgress();const t=await tR(n);G(ms,"Initializing OnlineComponentProvider"),await e.initialize(t,n.configuration),n.setCredentialChangeListener((r=>Jp(e.remoteStore,r))),n.setAppCheckTokenChangeListener(((r,i)=>Jp(e.remoteStore,i))),n._onlineComponents=e}async function tR(n){if(!n._offlineComponents)if(n._uninitializedComponentsProvider){G(ms,"Using user provided OfflineComponentProvider");try{await sh(n,n._uninitializedComponentsProvider._offline)}catch(e){const t=e;if(!(function(i){return i.name==="FirebaseError"?i.code===x.FAILED_PRECONDITION||i.code===x.UNIMPLEMENTED:!(typeof DOMException<"u"&&i instanceof DOMException)||i.code===22||i.code===20||i.code===11})(t))throw t;Js("Error using user provided cache. Falling back to memory cache: "+t),await sh(n,new Fc)}}else G(ms,"Using default OfflineComponentProvider"),await sh(n,new JS(void 0));return n._offlineComponents}async function wy(n){return n._onlineComponents||(n._uninitializedComponentsProvider?(G(ms,"Using user provided OnlineComponentProvider"),await rm(n,n._uninitializedComponentsProvider._online)):(G(ms,"Using default OnlineComponentProvider"),await rm(n,new Gh))),n._onlineComponents}function Ty(n){return wy(n).then((e=>e.datastore))}async function Iy(n){const e=await wy(n),t=e.eventManager;return t.onListen=BS.bind(null,e.syncEngine),t.onUnlisten=HS.bind(null,e.syncEngine),t.onFirstRemoteStoreListen=zS.bind(null,e.syncEngine),t.onLastRemoteStoreUnlisten=WS.bind(null,e.syncEngine),t}function nR(n,e,t={}){const r=new oi;return n.asyncQueue.enqueueAndForget((async()=>(function(s,a,l,c,h){const f=new Ey({next:_=>{f.Ou(),a.enqueueAndForget((()=>hy(s,m)));const I=_.docs.has(l);!I&&_.fromCache?h.reject(new B(x.UNAVAILABLE,"Failed to get document because the client is offline.")):I&&_.fromCache&&c&&c.source==="server"?h.reject(new B(x.UNAVAILABLE,'Failed to get document from server. (However, this document does exist in the local cache. Run again without setting source to "server" to retrieve the cached document.)')):h.resolve(_)},error:_=>h.reject(_)}),m=new dy(Od(l.path),f,{includeMetadataChanges:!0,ka:!0});return uy(s,m)})(await Iy(n),n.asyncQueue,e,t,r))),r.promise}function rR(n,e,t={}){const r=new oi;return n.asyncQueue.enqueueAndForget((async()=>(function(s,a,l,c,h){const f=new Ey({next:_=>{f.Ou(),a.enqueueAndForget((()=>hy(s,m))),_.fromCache&&c.source==="server"?h.reject(new B(x.UNAVAILABLE,'Failed to get documents from server. (However, these documents may exist in the local cache. Run again without setting source to "server" to retrieve the cached documents.)')):h.resolve(_)},error:_=>h.reject(_)}),m=new dy(l,f,{includeMetadataChanges:!0,ka:!0});return uy(s,m)})(await Iy(n),n.asyncQueue,e,t,r))),r.promise}function iR(n,e,t){const r=new oi;return n.asyncQueue.enqueueAndForget((async()=>{try{const i=await Ty(n);r.resolve((async function(a,l,c){var h;const f=Ce(a),{request:m,ft:_,parent:I}=x1(f.serializer,i1(l),c);f.connection.Qo||delete m.parent;const w=(await f.Jo("RunAggregationQuery",f.serializer.databaseId,I,m,1)).filter((T=>!!T.result));ut(w.length===1,64727);const D=(h=w[0].result)===null||h===void 0?void 0:h.aggregateFields;return Object.keys(D).reduce(((T,L)=>(T[_[L]]=D[L],T)),{})})(i,e,t))}catch(i){r.reject(i)}})),r.promise}/**
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
 */function Ay(n){const e={};return n.timeoutSeconds!==void 0&&(e.timeoutSeconds=n.timeoutSeconds),e}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const im=new Map;/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const sR="firestore.googleapis.com",sm=!0;class om{constructor(e){var t,r;if(e.host===void 0){if(e.ssl!==void 0)throw new B(x.INVALID_ARGUMENT,"Can't provide ssl option if host option is not set");this.host=sR,this.ssl=sm}else this.host=e.host,this.ssl=(t=e.ssl)!==null&&t!==void 0?t:sm;if(this.isUsingEmulator=e.emulatorOptions!==void 0,this.credentials=e.credentials,this.ignoreUndefinedProperties=!!e.ignoreUndefinedProperties,this.localCache=e.localCache,e.cacheSizeBytes===void 0)this.cacheSizeBytes=ty;else{if(e.cacheSizeBytes!==-1&&e.cacheSizeBytes<ny)throw new B(x.INVALID_ARGUMENT,"cacheSizeBytes must be at least 1048576");this.cacheSizeBytes=e.cacheSizeBytes}Pb("experimentalForceLongPolling",e.experimentalForceLongPolling,"experimentalAutoDetectLongPolling",e.experimentalAutoDetectLongPolling),this.experimentalForceLongPolling=!!e.experimentalForceLongPolling,this.experimentalForceLongPolling?this.experimentalAutoDetectLongPolling=!1:e.experimentalAutoDetectLongPolling===void 0?this.experimentalAutoDetectLongPolling=!0:this.experimentalAutoDetectLongPolling=!!e.experimentalAutoDetectLongPolling,this.experimentalLongPollingOptions=Ay((r=e.experimentalLongPollingOptions)!==null&&r!==void 0?r:{}),(function(s){if(s.timeoutSeconds!==void 0){if(isNaN(s.timeoutSeconds))throw new B(x.INVALID_ARGUMENT,`invalid long polling timeout: ${s.timeoutSeconds} (must not be NaN)`);if(s.timeoutSeconds<5)throw new B(x.INVALID_ARGUMENT,`invalid long polling timeout: ${s.timeoutSeconds} (minimum allowed value is 5)`);if(s.timeoutSeconds>30)throw new B(x.INVALID_ARGUMENT,`invalid long polling timeout: ${s.timeoutSeconds} (maximum allowed value is 30)`)}})(this.experimentalLongPollingOptions),this.useFetchStreams=!!e.useFetchStreams}isEqual(e){return this.host===e.host&&this.ssl===e.ssl&&this.credentials===e.credentials&&this.cacheSizeBytes===e.cacheSizeBytes&&this.experimentalForceLongPolling===e.experimentalForceLongPolling&&this.experimentalAutoDetectLongPolling===e.experimentalAutoDetectLongPolling&&(function(r,i){return r.timeoutSeconds===i.timeoutSeconds})(this.experimentalLongPollingOptions,e.experimentalLongPollingOptions)&&this.ignoreUndefinedProperties===e.ignoreUndefinedProperties&&this.useFetchStreams===e.useFetchStreams}}class Xd{constructor(e,t,r,i){this._authCredentials=e,this._appCheckCredentials=t,this._databaseId=r,this._app=i,this.type="firestore-lite",this._persistenceKey="(lite)",this._settings=new om({}),this._settingsFrozen=!1,this._emulatorOptions={},this._terminateTask="notTerminated"}get app(){if(!this._app)throw new B(x.FAILED_PRECONDITION,"Firestore was not initialized using the Firebase SDK. 'app' is not available");return this._app}get _initialized(){return this._settingsFrozen}get _terminated(){return this._terminateTask!=="notTerminated"}_setSettings(e){if(this._settingsFrozen)throw new B(x.FAILED_PRECONDITION,"Firestore has already been started and its settings can no longer be changed. You can only modify settings before calling any other methods on a Firestore object.");this._settings=new om(e),this._emulatorOptions=e.emulatorOptions||{},e.credentials!==void 0&&(this._authCredentials=(function(r){if(!r)return new wb;switch(r.type){case"firstParty":return new Ab(r.sessionIndex||"0",r.iamToken||null,r.authTokenFactory||null);case"provider":return r.client;default:throw new B(x.INVALID_ARGUMENT,"makeAuthCredentialsProvider failed due to invalid credential type")}})(e.credentials))}_getSettings(){return this._settings}_getEmulatorOptions(){return this._emulatorOptions}_freezeSettings(){return this._settingsFrozen=!0,this._settings}_delete(){return this._terminateTask==="notTerminated"&&(this._terminateTask=this._terminate()),this._terminateTask}async _restart(){this._terminateTask==="notTerminated"?await this._terminate():this._terminateTask="notTerminated"}toJSON(){return{app:this._app,databaseId:this._databaseId,settings:this._settings}}_terminate(){return(function(t){const r=im.get(t);r&&(G("ComponentProvider","Removing Datastore"),im.delete(t),r.terminate())})(this),Promise.resolve()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Mi{constructor(e,t,r){this.converter=t,this._query=r,this.type="query",this.firestore=e}withConverter(e){return new Mi(this.firestore,e,this._query)}}class Zt{constructor(e,t,r){this.converter=t,this._key=r,this.type="document",this.firestore=e}get _path(){return this._key.path}get id(){return this._key.path.lastSegment()}get path(){return this._key.path.canonicalString()}get parent(){return new rs(this.firestore,this.converter,this._key.path.popLast())}withConverter(e){return new Zt(this.firestore,e,this._key)}toJSON(){return{type:Zt._jsonSchemaVersion,referencePath:this._key.toString()}}static fromJSON(e,t,r){if(Tl(t,Zt._jsonSchema))return new Zt(e,r||null,new ne(ot.fromString(t.referencePath)))}}Zt._jsonSchemaVersion="firestore/documentReference/1.0",Zt._jsonSchema={type:Xt("string",Zt._jsonSchemaVersion),referencePath:Xt("string")};class rs extends Mi{constructor(e,t,r){super(e,t,Od(r)),this._path=r,this.type="collection"}get id(){return this._query.path.lastSegment()}get path(){return this._query.path.canonicalString()}get parent(){const e=this._path.popLast();return e.isEmpty()?null:new Zt(this.firestore,null,new ne(e))}withConverter(e){return new rs(this.firestore,e,this._path)}}function Xs(n,e,...t){if(n=Bt(n),mv("collection","path",e),n instanceof Xd){const r=ot.fromString(e,...t);return vp(r),new rs(n,null,r)}{if(!(n instanceof Zt||n instanceof rs))throw new B(x.INVALID_ARGUMENT,"Expected first argument to collection() to be a CollectionReference, a DocumentReference or FirebaseFirestore");const r=n._path.child(ot.fromString(e,...t));return vp(r),new rs(n.firestore,null,r)}}function _n(n,e,...t){if(n=Bt(n),arguments.length===1&&(e=Pd.newId()),mv("doc","path",e),n instanceof Xd){const r=ot.fromString(e,...t);return _p(r),new Zt(n,null,new ne(r))}{if(!(n instanceof Zt||n instanceof rs))throw new B(x.INVALID_ARGUMENT,"Expected first argument to collection() to be a CollectionReference, a DocumentReference or FirebaseFirestore");const r=n._path.child(ot.fromString(e,...t));return _p(r),new Zt(n.firestore,n instanceof rs?n.converter:null,new ne(r))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const am="AsyncQueue";class lm{constructor(e=Promise.resolve()){this.Zu=[],this.Xu=!1,this.ec=[],this.tc=null,this.nc=!1,this.rc=!1,this.sc=[],this.F_=new zd(this,"async_queue_retry"),this.oc=()=>{const r=ih();r&&G(am,"Visibility state changed to "+r.visibilityState),this.F_.y_()},this._c=e;const t=ih();t&&typeof t.addEventListener=="function"&&t.addEventListener("visibilitychange",this.oc)}get isShuttingDown(){return this.Xu}enqueueAndForget(e){this.enqueue(e)}enqueueAndForgetEvenWhileRestricted(e){this.ac(),this.uc(e)}enterRestrictedMode(e){if(!this.Xu){this.Xu=!0,this.rc=e||!1;const t=ih();t&&typeof t.removeEventListener=="function"&&t.removeEventListener("visibilitychange",this.oc)}}enqueue(e){if(this.ac(),this.Xu)return new Promise((()=>{}));const t=new oi;return this.uc((()=>this.Xu&&this.rc?Promise.resolve():(e().then(t.resolve,t.reject),t.promise))).then((()=>t.promise))}enqueueRetryable(e){this.enqueueAndForget((()=>(this.Zu.push(e),this.cc())))}async cc(){if(this.Zu.length!==0){try{await this.Zu[0](),this.Zu.shift(),this.F_.reset()}catch(e){if(!aa(e))throw e;G(am,"Operation failed with retryable error: "+e)}this.Zu.length>0&&this.F_.g_((()=>this.cc()))}}uc(e){const t=this._c.then((()=>(this.nc=!0,e().catch((r=>{throw this.tc=r,this.nc=!1,Ni("INTERNAL UNHANDLED ERROR: ",cm(r)),r})).then((r=>(this.nc=!1,r))))));return this._c=t,t}enqueueAfterDelay(e,t,r){this.ac(),this.sc.indexOf(e)>-1&&(t=0);const i=Kd.createAndSchedule(this,e,t,r,(s=>this.lc(s)));return this.ec.push(i),i}ac(){this.tc&&ae(47125,{hc:cm(this.tc)})}verifyOperationInProgress(){}async Pc(){let e;do e=this._c,await e;while(e!==this._c)}Tc(e){for(const t of this.ec)if(t.timerId===e)return!0;return!1}Ic(e){return this.Pc().then((()=>{this.ec.sort(((t,r)=>t.targetTimeMs-r.targetTimeMs));for(const t of this.ec)if(t.skipDelay(),e!=="all"&&t.timerId===e)break;return this.Pc()}))}dc(e){this.sc.push(e)}lc(e){const t=this.ec.indexOf(e);this.ec.splice(t,1)}}function cm(n){let e=n.message||"";return n.stack&&(e=n.stack.includes(n.message)?n.stack:n.message+`
`+n.stack),e}class Cl extends Xd{constructor(e,t,r,i){super(e,t,r,i),this.type="firestore",this._queue=new lm,this._persistenceKey=(i==null?void 0:i.name)||"[DEFAULT]"}async _terminate(){if(this._firestoreClient){const e=this._firestoreClient.terminate();this._queue=new lm(e),this._firestoreClient=void 0,await e}}}function oR(n,e,t){t||(t=kc);const r=_d(n,"firestore");if(r.isInitialized(t)){const i=r.getImmediate({identifier:t}),s=r.getOptions(t);if(Gs(s,e))return i;throw new B(x.FAILED_PRECONDITION,"initializeFirestore() has already been called with different options. To avoid this error, call initializeFirestore() with the same options as when it was originally called, or call getFirestore() to return the already initialized instance.")}if(e.cacheSizeBytes!==void 0&&e.localCache!==void 0)throw new B(x.INVALID_ARGUMENT,"cache and cacheSizeBytes cannot be specified at the same time as cacheSizeBytes willbe deprecated. Instead, specify the cache size in the cache object");if(e.cacheSizeBytes!==void 0&&e.cacheSizeBytes!==-1&&e.cacheSizeBytes<ny)throw new B(x.INVALID_ARGUMENT,"cacheSizeBytes must be at least 1048576");return e.host&&na(e.host)&&g_(e.host),r.initialize({options:e,instanceIdentifier:t})}function _u(n){if(n._terminated)throw new B(x.FAILED_PRECONDITION,"The client has already been terminated.");return n._firestoreClient||aR(n),n._firestoreClient}function aR(n){var e,t,r;const i=n._freezeSettings(),s=(function(l,c,h,f){return new zb(l,c,h,f.host,f.ssl,f.experimentalForceLongPolling,f.experimentalAutoDetectLongPolling,Ay(f.experimentalLongPollingOptions),f.useFetchStreams,f.isUsingEmulator)})(n._databaseId,((e=n._app)===null||e===void 0?void 0:e.options.appId)||"",n._persistenceKey,i);n._componentsProvider||!((t=i.localCache)===null||t===void 0)&&t._offlineComponentProvider&&(!((r=i.localCache)===null||r===void 0)&&r._onlineComponentProvider)&&(n._componentsProvider={_offline:i.localCache._offlineComponentProvider,_online:i.localCache._onlineComponentProvider}),n._firestoreClient=new eR(n._authCredentials,n._appCheckCredentials,n._queue,s,n._componentsProvider&&(function(l){const c=l==null?void 0:l._online.build();return{_offline:l==null?void 0:l._offline.build(c),_online:c}})(n._componentsProvider))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
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
 */class lR{constructor(e="count",t){this._internalFieldPath=t,this.type="AggregateField",this.aggregateType=e}}class cR{constructor(e,t,r){this._userDataWriter=t,this._data=r,this.type="AggregateQuerySnapshot",this.query=e}data(){return this._userDataWriter.convertObjectMap(this._data)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class lr{constructor(e){this._byteString=e}static fromBase64String(e){try{return new lr(An.fromBase64String(e))}catch(t){throw new B(x.INVALID_ARGUMENT,"Failed to construct data from Base64 string: "+t)}}static fromUint8Array(e){return new lr(An.fromUint8Array(e))}toBase64(){return this._byteString.toBase64()}toUint8Array(){return this._byteString.toUint8Array()}toString(){return"Bytes(base64: "+this.toBase64()+")"}isEqual(e){return this._byteString.isEqual(e._byteString)}toJSON(){return{type:lr._jsonSchemaVersion,bytes:this.toBase64()}}static fromJSON(e){if(Tl(e,lr._jsonSchema))return lr.fromBase64String(e.bytes)}}lr._jsonSchemaVersion="firestore/bytes/1.0",lr._jsonSchema={type:Xt("string",lr._jsonSchemaVersion),bytes:Xt("string")};/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class vu{constructor(...e){for(let t=0;t<e.length;++t)if(e[t].length===0)throw new B(x.INVALID_ARGUMENT,"Invalid field name at argument $(i + 1). Field names must not be empty.");this._internalPath=new kn(e)}isEqual(e){return this._internalPath.isEqual(e._internalPath)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class yu{constructor(e){this._methodName=e}}/**
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
 */class li{constructor(e,t){if(!isFinite(e)||e<-90||e>90)throw new B(x.INVALID_ARGUMENT,"Latitude must be a number between -90 and 90, but was: "+e);if(!isFinite(t)||t<-180||t>180)throw new B(x.INVALID_ARGUMENT,"Longitude must be a number between -180 and 180, but was: "+t);this._lat=e,this._long=t}get latitude(){return this._lat}get longitude(){return this._long}isEqual(e){return this._lat===e._lat&&this._long===e._long}_compareTo(e){return Re(this._lat,e._lat)||Re(this._long,e._long)}toJSON(){return{latitude:this._lat,longitude:this._long,type:li._jsonSchemaVersion}}static fromJSON(e){if(Tl(e,li._jsonSchema))return new li(e.latitude,e.longitude)}}li._jsonSchemaVersion="firestore/geoPoint/1.0",li._jsonSchema={type:Xt("string",li._jsonSchemaVersion),latitude:Xt("number"),longitude:Xt("number")};/**
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
 */class ci{constructor(e){this._values=(e||[]).map((t=>t))}toArray(){return this._values.map((e=>e))}isEqual(e){return(function(r,i){if(r.length!==i.length)return!1;for(let s=0;s<r.length;++s)if(r[s]!==i[s])return!1;return!0})(this._values,e._values)}toJSON(){return{type:ci._jsonSchemaVersion,vectorValues:this._values}}static fromJSON(e){if(Tl(e,ci._jsonSchema)){if(Array.isArray(e.vectorValues)&&e.vectorValues.every((t=>typeof t=="number")))return new ci(e.vectorValues);throw new B(x.INVALID_ARGUMENT,"Expected 'vectorValues' field to be a number array")}}}ci._jsonSchemaVersion="firestore/vectorValue/1.0",ci._jsonSchema={type:Xt("string",ci._jsonSchemaVersion),vectorValues:Xt("object")};/**
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
 */const uR=/^__.*__$/;class hR{constructor(e,t,r){this.data=e,this.fieldMask=t,this.fieldTransforms=r}toMutation(e,t){return this.fieldMask!==null?new no(e,this.data,this.fieldMask,t,this.fieldTransforms):new Al(e,this.data,t,this.fieldTransforms)}}class by{constructor(e,t,r){this.data=e,this.fieldMask=t,this.fieldTransforms=r}toMutation(e,t){return new no(e,this.data,this.fieldMask,t,this.fieldTransforms)}}function Sy(n){switch(n){case 0:case 2:case 1:return!0;case 3:case 4:return!1;default:throw ae(40011,{Ec:n})}}class Zd{constructor(e,t,r,i,s,a){this.settings=e,this.databaseId=t,this.serializer=r,this.ignoreUndefinedProperties=i,s===void 0&&this.Ac(),this.fieldTransforms=s||[],this.fieldMask=a||[]}get path(){return this.settings.path}get Ec(){return this.settings.Ec}Rc(e){return new Zd(Object.assign(Object.assign({},this.settings),e),this.databaseId,this.serializer,this.ignoreUndefinedProperties,this.fieldTransforms,this.fieldMask)}Vc(e){var t;const r=(t=this.path)===null||t===void 0?void 0:t.child(e),i=this.Rc({path:r,mc:!1});return i.fc(e),i}gc(e){var t;const r=(t=this.path)===null||t===void 0?void 0:t.child(e),i=this.Rc({path:r,mc:!1});return i.Ac(),i}yc(e){return this.Rc({path:void 0,mc:!0})}wc(e){return Uc(e,this.settings.methodName,this.settings.Sc||!1,this.path,this.settings.bc)}contains(e){return this.fieldMask.find((t=>e.isPrefixOf(t)))!==void 0||this.fieldTransforms.find((t=>e.isPrefixOf(t.field)))!==void 0}Ac(){if(this.path)for(let e=0;e<this.path.length;e++)this.fc(this.path.get(e))}fc(e){if(e.length===0)throw this.wc("Document fields must not be empty");if(Sy(this.Ec)&&uR.test(e))throw this.wc('Document fields cannot begin and end with "__"')}}class dR{constructor(e,t,r){this.databaseId=e,this.ignoreUndefinedProperties=t,this.serializer=r||mu(e)}Dc(e,t,r,i=!1){return new Zd({Ec:e,methodName:t,bc:r,path:kn.emptyPath(),mc:!1,Sc:i},this.databaseId,this.serializer,this.ignoreUndefinedProperties)}}function ef(n){const e=n._freezeSettings(),t=mu(n._databaseId);return new dR(n._databaseId,!!e.ignoreUndefinedProperties,t)}function fR(n,e,t,r,i,s={}){const a=n.Dc(s.merge||s.mergeFields?2:0,e,t,i);nf("Data must be an object, but it was:",a,r);const l=Cy(r,a);let c,h;if(s.merge)c=new wr(a.fieldMask),h=a.fieldTransforms;else if(s.mergeFields){const f=[];for(const m of s.mergeFields){const _=Kh(e,m,t);if(!a.contains(_))throw new B(x.INVALID_ARGUMENT,`Field '${_}' is specified in your field mask but missing from your input data.`);ky(f,_)||f.push(_)}c=new wr(f),h=a.fieldTransforms.filter((m=>c.covers(m.field)))}else c=null,h=a.fieldTransforms;return new hR(new Gn(l),c,h)}class Eu extends yu{_toFieldTransform(e){if(e.Ec!==2)throw e.Ec===1?e.wc(`${this._methodName}() can only appear at the top level of your update data`):e.wc(`${this._methodName}() cannot be used with set() unless you pass {merge:true}`);return e.fieldMask.push(e.path),null}isEqual(e){return e instanceof Eu}}class tf extends yu{_toFieldTransform(e){return new g1(e.path,new il)}isEqual(e){return e instanceof tf}}function pR(n,e,t,r){const i=n.Dc(1,e,t);nf("Data must be an object, but it was:",i,r);const s=[],a=Gn.empty();Zs(r,((c,h)=>{const f=rf(e,c,t);h=Bt(h);const m=i.gc(f);if(h instanceof Eu)s.push(f);else{const _=Pl(h,m);_!=null&&(s.push(f),a.set(f,_))}}));const l=new wr(s);return new by(a,l,i.fieldTransforms)}function mR(n,e,t,r,i,s){const a=n.Dc(1,e,t),l=[Kh(e,r,t)],c=[i];if(s.length%2!=0)throw new B(x.INVALID_ARGUMENT,`Function ${e}() needs to be called with an even number of arguments that alternate between field names and values.`);for(let _=0;_<s.length;_+=2)l.push(Kh(e,s[_])),c.push(s[_+1]);const h=[],f=Gn.empty();for(let _=l.length-1;_>=0;--_)if(!ky(h,l[_])){const I=l[_];let w=c[_];w=Bt(w);const D=a.gc(I);if(w instanceof Eu)h.push(I);else{const T=Pl(w,D);T!=null&&(h.push(I),f.set(I,T))}}const m=new wr(h);return new by(f,m,a.fieldTransforms)}function Ry(n,e,t,r=!1){return Pl(t,n.Dc(r?4:3,e))}function Pl(n,e){if(Py(n=Bt(n)))return nf("Unsupported field value:",e,n),Cy(n,e);if(n instanceof yu)return(function(r,i){if(!Sy(i.Ec))throw i.wc(`${r._methodName}() can only be used with update() and set()`);if(!i.path)throw i.wc(`${r._methodName}() is not currently supported inside arrays`);const s=r._toFieldTransform(i);s&&i.fieldTransforms.push(s)})(n,e),null;if(n===void 0&&e.ignoreUndefinedProperties)return null;if(e.path&&e.fieldMask.push(e.path),n instanceof Array){if(e.settings.mc&&e.Ec!==4)throw e.wc("Nested arrays are not supported");return(function(r,i){const s=[];let a=0;for(const l of r){let c=Pl(l,i.yc(a));c==null&&(c={nullValue:"NULL_VALUE"}),s.push(c),a++}return{arrayValue:{values:s}}})(n,e)}return(function(r,i){if((r=Bt(r))===null)return{nullValue:"NULL_VALUE"};if(typeof r=="number")return d1(i.serializer,r);if(typeof r=="boolean")return{booleanValue:r};if(typeof r=="string")return{stringValue:r};if(r instanceof Date){const s=Tt.fromDate(r);return{timestampValue:Mc(i.serializer,s)}}if(r instanceof Tt){const s=new Tt(r.seconds,1e3*Math.floor(r.nanoseconds/1e3));return{timestampValue:Mc(i.serializer,s)}}if(r instanceof li)return{geoPointValue:{latitude:r.latitude,longitude:r.longitude}};if(r instanceof lr)return{bytesValue:Gv(i.serializer,r._byteString)};if(r instanceof Zt){const s=i.databaseId,a=r.firestore._databaseId;if(!a.isEqual(s))throw i.wc(`Document reference is for database ${a.projectId}/${a.database} but should be for database ${s.projectId}/${s.database}`);return{referenceValue:Fd(r.firestore._databaseId||i.databaseId,r._key.path)}}if(r instanceof ci)return(function(a,l){return{mapValue:{fields:{[Av]:{stringValue:bv},[Nc]:{arrayValue:{values:a.toArray().map((h=>{if(typeof h!="number")throw l.wc("VectorValues must only contain numeric values.");return Md(l.serializer,h)}))}}}}}})(r,i);throw i.wc(`Unsupported field value: ${su(r)}`)})(n,e)}function Cy(n,e){const t={};return vv(n)?e.path&&e.path.length>0&&e.fieldMask.push(e.path):Zs(n,((r,i)=>{const s=Pl(i,e.Vc(r));s!=null&&(t[r]=s)})),{mapValue:{fields:t}}}function Py(n){return!(typeof n!="object"||n===null||n instanceof Array||n instanceof Date||n instanceof Tt||n instanceof li||n instanceof lr||n instanceof Zt||n instanceof yu||n instanceof ci)}function nf(n,e,t){if(!Py(t)||!gv(t)){const r=su(t);throw r==="an object"?e.wc(n+" a custom object"):e.wc(n+" "+r)}}function Kh(n,e,t){if((e=Bt(e))instanceof vu)return e._internalPath;if(typeof e=="string")return rf(n,e);throw Uc("Field path arguments must be of type string or ",n,!1,void 0,t)}const gR=new RegExp("[~\\*/\\[\\]]");function rf(n,e,t){if(e.search(gR)>=0)throw Uc(`Invalid field path (${e}). Paths must not contain '~', '*', '/', '[', or ']'`,n,!1,void 0,t);try{return new vu(...e.split("."))._internalPath}catch{throw Uc(`Invalid field path (${e}). Paths must not be empty, begin with '.', end with '.', or contain '..'`,n,!1,void 0,t)}}function Uc(n,e,t,r,i){const s=r&&!r.isEmpty(),a=i!==void 0;let l=`Function ${e}() called with invalid data`;t&&(l+=" (via `toFirestore()`)"),l+=". ";let c="";return(s||a)&&(c+=" (found",s&&(c+=` in field ${r}`),a&&(c+=` in document ${i}`),c+=")"),new B(x.INVALID_ARGUMENT,l+n+c)}function ky(n,e){return n.some((t=>t.isEqual(e)))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class al{constructor(e,t,r,i,s){this._firestore=e,this._userDataWriter=t,this._key=r,this._document=i,this._converter=s}get id(){return this._key.path.lastSegment()}get ref(){return new Zt(this._firestore,this._converter,this._key)}exists(){return this._document!==null}data(){if(this._document){if(this._converter){const e=new _R(this._firestore,this._userDataWriter,this._key,this._document,null);return this._converter.fromFirestore(e)}return this._userDataWriter.convertValue(this._document.data.value)}}get(e){if(this._document){const t=this._document.data.field(wu("DocumentSnapshot.get",e));if(t!==null)return this._userDataWriter.convertValue(t)}}}class _R extends al{data(){return super.data()}}function wu(n,e){return typeof e=="string"?rf(n,e):e instanceof vu?e._internalPath:e._delegate._internalPath}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function vR(n){if(n.limitType==="L"&&n.explicitOrderBy.length===0)throw new B(x.UNIMPLEMENTED,"limitToLast() queries require specifying at least one orderBy() clause")}class sf{}class Tu extends sf{}function Yo(n,e,...t){let r=[];e instanceof sf&&r.push(e),r=r.concat(t),(function(s){const a=s.filter((c=>c instanceof of)).length,l=s.filter((c=>c instanceof Iu)).length;if(a>1||a>0&&l>0)throw new B(x.INVALID_ARGUMENT,"InvalidQuery. When using composite filters, you cannot use more than one filter at the top level. Consider nesting the multiple filters within an `and(...)` statement. For example: change `query(query, where(...), or(...))` to `query(query, and(where(...), or(...)))`.")})(r);for(const i of r)n=i._apply(n);return n}class Iu extends Tu{constructor(e,t,r){super(),this._field=e,this._op=t,this._value=r,this.type="where"}static _create(e,t,r){return new Iu(e,t,r)}_apply(e){const t=this._parse(e);return Dy(e._query,t),new Mi(e.firestore,e.converter,$h(e._query,t))}_parse(e){const t=ef(e.firestore);return(function(s,a,l,c,h,f,m){let _;if(h.isKeyField()){if(f==="array-contains"||f==="array-contains-any")throw new B(x.INVALID_ARGUMENT,`Invalid Query. You can't perform '${f}' queries on documentId().`);if(f==="in"||f==="not-in"){hm(m,f);const w=[];for(const D of m)w.push(um(c,s,D));_={arrayValue:{values:w}}}else _=um(c,s,m)}else f!=="in"&&f!=="not-in"&&f!=="array-contains-any"||hm(m,f),_=Ry(l,a,m,f==="in"||f==="not-in");return Jt.create(h,f,_)})(e._query,"where",t,e.firestore._databaseId,this._field,this._op,this._value)}}function _r(n,e,t){const r=e,i=wu("where",n);return Iu._create(i,r,t)}class of extends sf{constructor(e,t){super(),this.type=e,this._queryConstraints=t}static _create(e,t){return new of(e,t)}_parse(e){const t=this._queryConstraints.map((r=>r._parse(e))).filter((r=>r.getFilters().length>0));return t.length===1?t[0]:Fr.create(t,this._getOperator())}_apply(e){const t=this._parse(e);return t.getFilters().length===0?e:((function(i,s){let a=i;const l=s.getFlattenedFilters();for(const c of l)Dy(a,c),a=$h(a,c)})(e._query,t),new Mi(e.firestore,e.converter,$h(e._query,t)))}_getQueryConstraints(){return this._queryConstraints}_getOperator(){return this.type==="and"?"and":"or"}}class af extends Tu{constructor(e,t){super(),this._field=e,this._direction=t,this.type="orderBy"}static _create(e,t){return new af(e,t)}_apply(e){const t=(function(i,s,a){if(i.startAt!==null)throw new B(x.INVALID_ARGUMENT,"Invalid query. You must not call startAt() or startAfter() before calling orderBy().");if(i.endAt!==null)throw new B(x.INVALID_ARGUMENT,"Invalid query. You must not call endAt() or endBefore() before calling orderBy().");return new rl(s,a)})(e._query,this._field,this._direction);return new Mi(e.firestore,e.converter,(function(i,s){const a=i.explicitOrderBy.concat([s]);return new eo(i.path,i.collectionGroup,a,i.filters.slice(),i.limit,i.limitType,i.startAt,i.endAt)})(e._query,t))}}function Au(n,e="asc"){const t=e,r=wu("orderBy",n);return af._create(r,t)}class lf extends Tu{constructor(e,t,r){super(),this.type=e,this._limit=t,this._limitType=r}static _create(e,t,r){return new lf(e,t,r)}_apply(e){return new Mi(e.firestore,e.converter,Oc(e._query,this._limit,this._limitType))}}function ll(n){return kb("limit",n),lf._create("limit",n,"F")}class cf extends Tu{constructor(e,t,r){super(),this.type=e,this._docOrFields=t,this._inclusive=r}static _create(e,t,r){return new cf(e,t,r)}_apply(e){const t=yR(e,this.type,this._docOrFields,this._inclusive);return new Mi(e.firestore,e.converter,(function(i,s){return new eo(i.path,i.collectionGroup,i.explicitOrderBy.slice(),i.filters.slice(),i.limit,i.limitType,s,i.endAt)})(e._query,t))}}function Ny(...n){return cf._create("startAfter",n,!1)}function yR(n,e,t,r){if(t[0]=Bt(t[0]),t[0]instanceof al)return(function(s,a,l,c,h){if(!c)throw new B(x.NOT_FOUND,`Can't use a DocumentSnapshot that doesn't exist for ${l}().`);const f=[];for(const m of Co(s))if(m.field.isKeyField())f.push(Dc(a,c.key));else{const _=c.data.field(m.field);if(lu(_))throw new B(x.INVALID_ARGUMENT,'Invalid query. You are trying to start or end a query using a document for which the field "'+m.field+'" is an uncommitted server timestamp. (Since the value of this field is unknown, you cannot start/end a query with it.)');if(_===null){const I=m.field.canonicalString();throw new B(x.INVALID_ARGUMENT,`Invalid query. You are trying to start or end a query using a document for which the field '${I}' (used as the orderBy) does not exist.`)}f.push(_)}return new Wo(f,h)})(n._query,n.firestore._databaseId,e,t[0]._document,r);{const i=ef(n.firestore);return(function(a,l,c,h,f,m){const _=a.explicitOrderBy;if(f.length>_.length)throw new B(x.INVALID_ARGUMENT,`Too many arguments provided to ${h}(). The number of arguments must be less than or equal to the number of orderBy() clauses`);const I=[];for(let w=0;w<f.length;w++){const D=f[w];if(_[w].field.isKeyField()){if(typeof D!="string")throw new B(x.INVALID_ARGUMENT,`Invalid query. Expected a string for document ID in ${h}(), but got a ${typeof D}`);if(!Vd(a)&&D.indexOf("/")!==-1)throw new B(x.INVALID_ARGUMENT,`Invalid query. When querying a collection and ordering by documentId(), the value passed to ${h}() must be a plain document ID, but '${D}' contains a slash.`);const T=a.path.child(ot.fromString(D));if(!ne.isDocumentKey(T))throw new B(x.INVALID_ARGUMENT,`Invalid query. When querying a collection group and ordering by documentId(), the value passed to ${h}() must result in a valid document path, but '${T}' is not because it contains an odd number of segments.`);const L=new ne(T);I.push(Dc(l,L))}else{const T=Ry(c,h,D);I.push(T)}}return new Wo(I,m)})(n._query,n.firestore._databaseId,i,e,t,r)}}function um(n,e,t){if(typeof(t=Bt(t))=="string"){if(t==="")throw new B(x.INVALID_ARGUMENT,"Invalid query. When querying with documentId(), you must provide a valid document ID, but it was an empty string.");if(!Vd(e)&&t.indexOf("/")!==-1)throw new B(x.INVALID_ARGUMENT,`Invalid query. When querying a collection by documentId(), you must provide a plain document ID, but '${t}' contains a '/' character.`);const r=e.path.child(ot.fromString(t));if(!ne.isDocumentKey(r))throw new B(x.INVALID_ARGUMENT,`Invalid query. When querying a collection group by documentId(), the value provided must result in a valid document path, but '${r}' is not because it has an odd number of segments (${r.length}).`);return Dc(n,new ne(r))}if(t instanceof Zt)return Dc(n,t._key);throw new B(x.INVALID_ARGUMENT,`Invalid query. When querying with documentId(), you must provide a valid string or a DocumentReference, but it was: ${su(t)}.`)}function hm(n,e){if(!Array.isArray(n)||n.length===0)throw new B(x.INVALID_ARGUMENT,`Invalid Query. A non-empty array is required for '${e.toString()}' filters.`)}function Dy(n,e){const t=(function(i,s){for(const a of i)for(const l of a.getFlattenedFilters())if(s.indexOf(l.op)>=0)return l.op;return null})(n.filters,(function(i){switch(i){case"!=":return["!=","not-in"];case"array-contains-any":case"in":return["not-in"];case"not-in":return["array-contains-any","in","not-in","!="];default:return[]}})(e.op));if(t!==null)throw t===e.op?new B(x.INVALID_ARGUMENT,`Invalid query. You cannot use more than one '${e.op.toString()}' filter.`):new B(x.INVALID_ARGUMENT,`Invalid query. You cannot use '${e.op.toString()}' filters with '${t.toString()}' filters.`)}class Oy{convertValue(e,t="none"){switch(fs(e)){case 0:return null;case 1:return e.booleanValue;case 2:return $t(e.integerValue||e.doubleValue);case 3:return this.convertTimestamp(e.timestampValue);case 4:return this.convertServerTimestamp(e,t);case 5:return e.stringValue;case 6:return this.convertBytes(ds(e.bytesValue));case 7:return this.convertReference(e.referenceValue);case 8:return this.convertGeoPoint(e.geoPointValue);case 9:return this.convertArray(e.arrayValue,t);case 11:return this.convertObject(e.mapValue,t);case 10:return this.convertVectorValue(e.mapValue);default:throw ae(62114,{value:e})}}convertObject(e,t){return this.convertObjectMap(e.fields,t)}convertObjectMap(e,t="none"){const r={};return Zs(e,((i,s)=>{r[i]=this.convertValue(s,t)})),r}convertVectorValue(e){var t,r,i;const s=(i=(r=(t=e.fields)===null||t===void 0?void 0:t[Nc].arrayValue)===null||r===void 0?void 0:r.values)===null||i===void 0?void 0:i.map((a=>$t(a.doubleValue)));return new ci(s)}convertGeoPoint(e){return new li($t(e.latitude),$t(e.longitude))}convertArray(e,t){return(e.values||[]).map((r=>this.convertValue(r,t)))}convertServerTimestamp(e,t){switch(t){case"previous":const r=cu(e);return r==null?null:this.convertValue(r,t);case"estimate":return this.convertTimestamp(el(e));default:return null}}convertTimestamp(e){const t=hs(e);return new Tt(t.seconds,t.nanos)}convertDocumentKey(e,t){const r=ot.fromString(e);ut(ey(r),9688,{name:e});const i=new tl(r.get(1),r.get(3)),s=new ne(r.popFirst(5));return i.isEqual(t)||Ni(`Document ${s} contains a document reference within a different database (${i.projectId}/${i.database}) which is not supported. It will be treated as a reference in the current database (${t.projectId}/${t.database}) instead.`),s}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function ER(n,e,t){let r;return r=n?t&&(t.merge||t.mergeFields)?n.toFirestore(e,t):n.toFirestore(e):e,r}class wR extends Oy{constructor(e){super(),this.firestore=e}convertBytes(e){return new lr(e)}convertReference(e){const t=this.convertDocumentKey(e,this.firestore._databaseId);return new Zt(this.firestore,null,t)}}function TR(){return new lR("count")}class wo{constructor(e,t){this.hasPendingWrites=e,this.fromCache=t}isEqual(e){return this.hasPendingWrites===e.hasPendingWrites&&this.fromCache===e.fromCache}}class is extends al{constructor(e,t,r,i,s,a){super(e,t,r,i,a),this._firestore=e,this._firestoreImpl=e,this.metadata=s}exists(){return super.exists()}data(e={}){if(this._document){if(this._converter){const t=new pc(this._firestore,this._userDataWriter,this._key,this._document,this.metadata,null);return this._converter.fromFirestore(t,e)}return this._userDataWriter.convertValue(this._document.data.value,e.serverTimestamps)}}get(e,t={}){if(this._document){const r=this._document.data.field(wu("DocumentSnapshot.get",e));if(r!==null)return this._userDataWriter.convertValue(r,t.serverTimestamps)}}toJSON(){if(this.metadata.hasPendingWrites)throw new B(x.FAILED_PRECONDITION,"DocumentSnapshot.toJSON() attempted to serialize a document with pending writes. Await waitForPendingWrites() before invoking toJSON().");const e=this._document,t={};return t.type=is._jsonSchemaVersion,t.bundle="",t.bundleSource="DocumentSnapshot",t.bundleName=this._key.toString(),!e||!e.isValidDocument()||!e.isFoundDocument()?t:(this._userDataWriter.convertObjectMap(e.data.value.mapValue.fields,"previous"),t.bundle=(this._firestore,this.ref.path,"NOT SUPPORTED"),t)}}is._jsonSchemaVersion="firestore/documentSnapshot/1.0",is._jsonSchema={type:Xt("string",is._jsonSchemaVersion),bundleSource:Xt("string","DocumentSnapshot"),bundleName:Xt("string"),bundle:Xt("string")};class pc extends is{data(e={}){return super.data(e)}}class ko{constructor(e,t,r,i){this._firestore=e,this._userDataWriter=t,this._snapshot=i,this.metadata=new wo(i.hasPendingWrites,i.fromCache),this.query=r}get docs(){const e=[];return this.forEach((t=>e.push(t))),e}get size(){return this._snapshot.docs.size}get empty(){return this.size===0}forEach(e,t){this._snapshot.docs.forEach((r=>{e.call(t,new pc(this._firestore,this._userDataWriter,r.key,r,new wo(this._snapshot.mutatedKeys.has(r.key),this._snapshot.fromCache),this.query.converter))}))}docChanges(e={}){const t=!!e.includeMetadataChanges;if(t&&this._snapshot.excludesMetadataChanges)throw new B(x.INVALID_ARGUMENT,"To include metadata changes with your document changes, you must also pass { includeMetadataChanges:true } to onSnapshot().");return this._cachedChanges&&this._cachedChangesIncludeMetadataChanges===t||(this._cachedChanges=(function(i,s){if(i._snapshot.oldDocs.isEmpty()){let a=0;return i._snapshot.docChanges.map((l=>{const c=new pc(i._firestore,i._userDataWriter,l.doc.key,l.doc,new wo(i._snapshot.mutatedKeys.has(l.doc.key),i._snapshot.fromCache),i.query.converter);return l.doc,{type:"added",doc:c,oldIndex:-1,newIndex:a++}}))}{let a=i._snapshot.oldDocs;return i._snapshot.docChanges.filter((l=>s||l.type!==3)).map((l=>{const c=new pc(i._firestore,i._userDataWriter,l.doc.key,l.doc,new wo(i._snapshot.mutatedKeys.has(l.doc.key),i._snapshot.fromCache),i.query.converter);let h=-1,f=-1;return l.type!==0&&(h=a.indexOf(l.doc.key),a=a.delete(l.doc.key)),l.type!==1&&(a=a.add(l.doc),f=a.indexOf(l.doc.key)),{type:IR(l.type),doc:c,oldIndex:h,newIndex:f}}))}})(this,t),this._cachedChangesIncludeMetadataChanges=t),this._cachedChanges}toJSON(){if(this.metadata.hasPendingWrites)throw new B(x.FAILED_PRECONDITION,"QuerySnapshot.toJSON() attempted to serialize a document with pending writes. Await waitForPendingWrites() before invoking toJSON().");const e={};e.type=ko._jsonSchemaVersion,e.bundleSource="QuerySnapshot",e.bundleName=Pd.newId(),this._firestore._databaseId.database,this._firestore._databaseId.projectId;const t=[],r=[],i=[];return this.docs.forEach((s=>{s._document!==null&&(t.push(s._document),r.push(this._userDataWriter.convertObjectMap(s._document.data.value.mapValue.fields,"previous")),i.push(s.ref.path))})),e.bundle=(this._firestore,this.query._query,e.bundleName,"NOT SUPPORTED"),e}}function IR(n){switch(n){case 0:return"added";case 2:case 3:return"modified";case 1:return"removed";default:return ae(61501,{type:n})}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function ss(n){n=zo(n,Zt);const e=zo(n.firestore,Cl);return nR(_u(e),n._key).then((t=>AR(e,n,t)))}ko._jsonSchemaVersion="firestore/querySnapshot/1.0",ko._jsonSchema={type:Xt("string",ko._jsonSchemaVersion),bundleSource:Xt("string","QuerySnapshot"),bundleName:Xt("string"),bundle:Xt("string")};class bu extends Oy{constructor(e){super(),this.firestore=e}convertBytes(e){return new lr(e)}convertReference(e){const t=this.convertDocumentKey(e,this.firestore._databaseId);return new Zt(this.firestore,null,t)}}function cl(n){n=zo(n,Mi);const e=zo(n.firestore,Cl),t=_u(e),r=new bu(e);return vR(n._query),rR(t,n._query).then((i=>new ko(e,r,n,i)))}function AR(n,e,t){const r=t.docs.get(e._key),i=new bu(n);return new is(n,i,e._key,r,new wo(t.hasPendingWrites,t.fromCache),e.converter)}function bR(n){return SR(n,{count:TR()})}function SR(n,e){const t=zo(n.firestore,Cl),r=_u(t),i=qb(e,((s,a)=>new w1(a,s.aggregateType,s._internalFieldPath)));return iR(r,n._query,i).then((s=>(function(l,c,h){const f=new bu(l);return new cR(c,f,h)})(t,n,s)))}/**
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
 */const RR={maxAttempts:5};function Ma(n,e){if((n=Bt(n)).firestore!==e)throw new B(x.INVALID_ARGUMENT,"Provided document reference is from a different Firestore instance.");return n}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class CR{constructor(e,t){this._firestore=e,this._transaction=t,this._dataReader=ef(e)}get(e){const t=Ma(e,this._firestore),r=new wR(this._firestore);return this._transaction.lookup([t._key]).then((i=>{if(!i||i.length!==1)return ae(24041);const s=i[0];if(s.isFoundDocument())return new al(this._firestore,r,s.key,s,t.converter);if(s.isNoDocument())return new al(this._firestore,r,t._key,null,t.converter);throw ae(18433,{doc:s})}))}set(e,t,r){const i=Ma(e,this._firestore),s=ER(i.converter,t,r),a=fR(this._dataReader,"Transaction.set",i._key,s,i.converter!==null,r);return this._transaction.set(i._key,a),this}update(e,t,r,...i){const s=Ma(e,this._firestore);let a;return a=typeof(t=Bt(t))=="string"||t instanceof vu?mR(this._dataReader,"Transaction.update",s._key,t,r,i):pR(this._dataReader,"Transaction.update",s._key,t),this._transaction.update(s._key,a),this}delete(e){const t=Ma(e,this._firestore);return this._transaction.delete(t._key),this}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class PR extends CR{constructor(e,t){super(e,t),this._firestore=e}get(e){const t=Ma(e,this._firestore),r=new bu(this._firestore);return super.get(e).then((i=>new is(this._firestore,r,t._key,i._document,new wo(!1,!1),t.converter)))}}function uf(n,e,t){n=zo(n,Cl);const r=Object.assign(Object.assign({},RR),t);return(function(s){if(s.maxAttempts<1)throw new B(x.INVALID_ARGUMENT,"Max attempts must be at least 1")})(r),(function(s,a,l){const c=new oi;return s.asyncQueue.enqueueAndForget((async()=>{const h=await Ty(s);new ZS(s.asyncQueue,h,l,a,c).zu()})),c.promise})(_u(n),(i=>e(new PR(n,i))),r)}function zs(){return new tf("serverTimestamp")}(function(e,t=!0){(function(i){oa=i})(ia),cs(new Ci("firestore",((r,{instanceIdentifier:i,options:s})=>{const a=r.getProvider("app").getImmediate(),l=new Cl(new Tb(r.getProvider("auth-internal")),new bb(a,r.getProvider("app-check-internal")),(function(h,f){if(!Object.prototype.hasOwnProperty.apply(h.options,["projectId"]))throw new B(x.INVALID_ARGUMENT,'"projectId" not provided in firebase.initializeApp.');return new tl(h.options.projectId,f)})(a,i),a);return s=Object.assign({useFetchStreams:t},s),l._setSettings(s),l}),"PUBLIC").setMultipleInstances(!0)),Ai(dp,fp,e),Ai(dp,fp,"esm2017")})();/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const kR=new Map,NR={activated:!1,tokenObservers:[]};function Ur(n){return kR.get(n)||Object.assign({},NR)}const dm={RETRIAL_MIN_WAIT:30*1e3,RETRIAL_MAX_WAIT:960*1e3};/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class DR{constructor(e,t,r,i,s){if(this.operation=e,this.retryPolicy=t,this.getWaitDuration=r,this.lowerBound=i,this.upperBound=s,this.pending=null,this.nextErrorWaitInterval=i,i>s)throw new Error("Proactive refresh lower bound greater than upper bound!")}start(){this.nextErrorWaitInterval=this.lowerBound,this.process(!0).catch(()=>{})}stop(){this.pending&&(this.pending.reject("cancelled"),this.pending=null)}isRunning(){return!!this.pending}async process(e){this.stop();try{this.pending=new bh,this.pending.promise.catch(t=>{}),await OR(this.getNextRun(e)),this.pending.resolve(),await this.pending.promise,this.pending=new bh,this.pending.promise.catch(t=>{}),await this.operation(),this.pending.resolve(),await this.pending.promise,this.process(!0).catch(()=>{})}catch(t){this.retryPolicy(t)?this.process(!1).catch(()=>{}):this.stop()}}getNextRun(e){if(e)return this.nextErrorWaitInterval=this.lowerBound,this.getWaitDuration();{const t=this.nextErrorWaitInterval;return this.nextErrorWaitInterval*=2,this.nextErrorWaitInterval>this.upperBound&&(this.nextErrorWaitInterval=this.upperBound),t}}}function OR(n){return new Promise(e=>{setTimeout(e,n)})}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const VR={"already-initialized":"You have already called initializeAppCheck() for FirebaseApp {$appName} with different options. To avoid this error, call initializeAppCheck() with the same options as when it was originally called. This will return the already initialized instance.","use-before-activation":"App Check is being used before initializeAppCheck() is called for FirebaseApp {$appName}. Call initializeAppCheck() before instantiating other Firebase services.","fetch-network-error":"Fetch failed to connect to a network. Check Internet connection. Original error: {$originalErrorMessage}.","fetch-parse-error":"Fetch client could not parse response. Original error: {$originalErrorMessage}.","fetch-status-error":"Fetch server returned an HTTP error status. HTTP status: {$httpStatus}.","storage-open":"Error thrown when opening storage. Original error: {$originalErrorMessage}.","storage-get":"Error thrown when reading from storage. Original error: {$originalErrorMessage}.","storage-set":"Error thrown when writing to storage. Original error: {$originalErrorMessage}.","recaptcha-error":"ReCAPTCHA error.","initial-throttle":"{$httpStatus} error. Attempts allowed again after {$time}",throttled:"Requests throttled due to previous {$httpStatus} error. Attempts allowed again after {$time}"},$c=new ra("appCheck","AppCheck",VR);function Vy(n){if(!Ur(n).activated)throw $c.create("use-before-activation",{appName:n.name})}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const MR="firebase-app-check-database",xR=1,Qh="firebase-app-check-store";let ec=null;function LR(){return ec||(ec=new Promise((n,e)=>{try{const t=indexedDB.open(MR,xR);t.onsuccess=r=>{n(r.target.result)},t.onerror=r=>{var i;e($c.create("storage-open",{originalErrorMessage:(i=r.target.error)===null||i===void 0?void 0:i.message}))},t.onupgradeneeded=r=>{const i=r.target.result;switch(r.oldVersion){case 0:i.createObjectStore(Qh,{keyPath:"compositeKey"})}}}catch(t){e($c.create("storage-open",{originalErrorMessage:t==null?void 0:t.message}))}}),ec)}function FR(n,e){return UR($R(n),e)}async function UR(n,e){const r=(await LR()).transaction(Qh,"readwrite"),s=r.objectStore(Qh).put({compositeKey:n,value:e});return new Promise((a,l)=>{s.onsuccess=c=>{a()},r.onerror=c=>{var h;l($c.create("storage-set",{originalErrorMessage:(h=c.target.error)===null||h===void 0?void 0:h.message}))}})}function $R(n){return`${n.options.appId}-${n.name}`}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Yh=new tu("@firebase/app-check");function fm(n,e){return __()?FR(n,e).catch(t=>{Yh.warn(`Failed to write token to IndexedDB. Error: ${t}`)}):Promise.resolve()}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const qR={error:"UNKNOWN_ERROR"};function BR(n){return md.encodeString(JSON.stringify(n),!1)}async function Jh(n,e=!1,t=!1){const r=n.app;Vy(r);const i=Ur(r);let s=i.token,a;if(s&&!xa(s)&&(i.token=void 0,s=void 0),!s){const h=await i.cachedTokenPromise;h&&(xa(h)?s=h:await fm(r,void 0))}if(!e&&s&&xa(s))return{token:s.token};let l=!1;try{i.exchangeTokenPromise||(i.exchangeTokenPromise=i.provider.getToken().finally(()=>{i.exchangeTokenPromise=void 0}),l=!0),s=await Ur(r).exchangeTokenPromise}catch(h){h.code==="appCheck/throttled"||h.code==="appCheck/initial-throttle"?Yh.warn(h.message):t&&Yh.error(h),a=h}let c;return s?a?xa(s)?c={token:s.token,internalError:a}:c=mm(a):(c={token:s.token},i.token=s,await fm(r,s)):c=mm(a),l&&WR(r,c),c}async function zR(n){const e=n.app;Vy(e);const{provider:t}=Ur(e);{const{token:r}=await t.getToken();return{token:r}}}function jR(n,e,t,r){const{app:i}=n,s=Ur(i),a={next:t,error:r,type:e};if(s.tokenObservers=[...s.tokenObservers,a],s.token&&xa(s.token)){const l=s.token;Promise.resolve().then(()=>{t({token:l.token}),pm(n)}).catch(()=>{})}s.cachedTokenPromise.then(()=>pm(n))}function My(n,e){const t=Ur(n),r=t.tokenObservers.filter(i=>i.next!==e);r.length===0&&t.tokenRefresher&&t.tokenRefresher.isRunning()&&t.tokenRefresher.stop(),t.tokenObservers=r}function pm(n){const{app:e}=n,t=Ur(e);let r=t.tokenRefresher;r||(r=HR(n),t.tokenRefresher=r),!r.isRunning()&&t.isTokenAutoRefreshEnabled&&r.start()}function HR(n){const{app:e}=n;return new DR(async()=>{const t=Ur(e);let r;if(t.token?r=await Jh(n,!0):r=await Jh(n),r.error)throw r.error;if(r.internalError)throw r.internalError},()=>!0,()=>{const t=Ur(e);if(t.token){let r=t.token.issuedAtTimeMillis+(t.token.expireTimeMillis-t.token.issuedAtTimeMillis)*.5+3e5;const i=t.token.expireTimeMillis-300*1e3;return r=Math.min(r,i),Math.max(0,r-Date.now())}else return 0},dm.RETRIAL_MIN_WAIT,dm.RETRIAL_MAX_WAIT)}function WR(n,e){const t=Ur(n).tokenObservers;for(const r of t)try{r.type==="EXTERNAL"&&e.error!=null?r.error(e.error):r.next(e)}catch{}}function xa(n){return n.expireTimeMillis-Date.now()>0}function mm(n){return{token:BR(qR),error:n}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class GR{constructor(e,t){this.app=e,this.heartbeatServiceProvider=t}_delete(){const{tokenObservers:e}=Ur(this.app);for(const t of e)My(this.app,t.next);return Promise.resolve()}}function KR(n,e){return new GR(n,e)}function QR(n){return{getToken:e=>Jh(n,e),getLimitedUseToken:()=>zR(n),addTokenListener:e=>jR(n,"INTERNAL",e),removeTokenListener:e=>My(n.app,e)}}const YR="@firebase/app-check",JR="0.10.1",XR="app-check",gm="app-check-internal";function ZR(){cs(new Ci(XR,n=>{const e=n.getProvider("app").getImmediate(),t=n.getProvider("heartbeat");return KR(e,t)},"PUBLIC").setInstantiationMode("EXPLICIT").setInstanceCreatedCallback((n,e,t)=>{n.getProvider(gm).initialize()})),cs(new Ci(gm,n=>{const e=n.getProvider("app-check").getImmediate();return QR(e)},"PUBLIC").setInstantiationMode("EXPLICIT")),Ai(YR,JR)}ZR();const xy={apiKey:void 0,authDomain:void 0,projectId:void 0,appId:void 0,messagingSenderId:void 0},Ly=Object.values(xy).every(Boolean),Jo=Ly?w_().length?E_():vd(xy):null,qc=Jo?ov(Jo):null,_m=Jo?oR(Jo,{ignoreUndefinedProperties:!0}):null,vm=Jo?w_().find(n=>n.name==="employee-account-provisioning")??vd(Jo.options,"employee-account-provisioning"):null,ym=vm?ov(vm):null;function ur(){if(!qc||!_m)throw new Error("Configure as variáveis Firebase no arquivo .env antes de usar o sistema.");return{auth:qc,db:_m}}function eC(){if(!ym)throw new Error("Configure as variáveis Firebase no arquivo .env antes de cadastrar mantenedores.");return ym}const Bc="@staff.estoquearmazem.invalid";class tC extends Error{constructor(e){super(`A conta autenticou, mas falta autorizá-la como administradora. Crie admins/${e} com active: true.`),this.code="app/admin-profile-required",this.name="AdminProfileRequiredError"}}function Ri(n){return n.trim().toLocaleLowerCase("pt-BR").normalize("NFD").replace(/[\u0300-\u036f]/g,"")}function hf(n){return(n==null?void 0:n.endsWith(Bc))===!0}function Wa(n){return`${Ri(n)}${Bc}`}async function Em(n){const e=await crypto.subtle.digest("SHA-256",new TextEncoder().encode(n));return[...new Uint8Array(e)].map(t=>t.toString(16).padStart(2,"0")).join("")}function nC(n){const e=new Set,t=n.flatMap(r=>Ri(r).split(/[^a-z0-9]+/)).filter(Boolean);for(const r of t)for(let i=2;i<=Math.min(r.length,20);i++)e.add(r.slice(0,i));return[...e].slice(0,300)}function Xh(n){return Number.isFinite(n)&&n>=0&&n<=1e9&&Math.abs(n*1e3-Math.round(n*1e3))<1e-6}async function rC(n,e){const{auth:t}=ur(),r=Wa(n);try{return await K_(t,r,e)}catch(i){const s=i.code;throw s==="auth/invalid-credential"||s==="auth/user-not-found"||s==="auth/invalid-email"?new Error("Matrícula ou senha incorretos."):i}}async function iC(n,e){const{auth:t}=ur();return(await K_(t,n,e)).user}async function sC(n){const{db:e}=ur();if(hf(n.email)){const r=await ss(_n(e,"employeeAuth",n.uid));if(!r.exists()||r.get("active")!==!0)throw new Error("Acesso de mantenedor inativo ou não cadastrado.");const i=await ss(_n(e,"employees",r.get("employeeId")));if(!i.exists()||i.get("active")!==!0||i.get("authUid")!==n.uid||i.get("loginEmail")!==n.email||Wa(String(i.get("matricula")))!==n.email)throw new Error("Acesso de mantenedor inativo ou não cadastrado.");return{role:"employee",employee:{id:i.id,...i.data()}}}const t=await ss(_n(e,"admins",n.uid));if(!t.exists()||t.get("active")!==!0)throw new tC(n.uid);return{role:"admin",employee:null}}async function wm(n,e){const{db:t}=ur(),r=Xs(t,"items"),i=Ri(n);if(i){const a=i.split(/\s+/)[0].slice(0,20);return a.length<2?{items:[],cursor:void 0}:{items:(await cl(Yo(r,_r("active","==",!0),_r("searchTokens","array-contains",a),ll(40)))).docs.map(c=>({id:c.id,...c.data()})),cursor:void 0}}const s=await cl(Yo(r,_r("active","==",!0),Au("name"),...e?[Ny(e)]:[],ll(40)));return{items:s.docs.map(a=>({id:a.id,...a.data()})),cursor:s.docs.at(-1)}}async function Tm(){const{db:n}=ur();return(await cl(Yo(Xs(n,"items"),Au("name"),ll(300)))).docs.map(t=>({id:t.id,...t.data()}))}async function Im(){const{db:n}=ur();return(await cl(Yo(Xs(n,"employees"),Au("name"),ll(300)))).docs.map(t=>({id:t.id,...t.data()}))}async function oh(n,e){const{db:t,auth:r}=ur(),i=Xs(t,"stockMovements"),s=r.currentUser,a=hf((s==null?void 0:s.email)??null),l=[];if(a&&s){const h=await ss(_n(t,"employeeAuth",s.uid));if(!h.exists()||h.get("active")!==!0)throw new Error("Acesso de mantenedor inativo ou não cadastrado.");l.push(_r("employeeId","==",h.get("employeeId")))}const c=await cl(Yo(i,...l,Au("createdAt","desc"),...e?[Ny(e)]:[],ll(100)));return{movements:c.docs.map(h=>({id:h.id,...h.data()})),cursor:c.docs.at(-1)}}async function oC(){const{db:n}=ur(),e=Xs(n,"items"),t=Xs(n,"stockMovements"),r=new Date().getTimezoneOffset(),i=new Date(Date.now()-r*6e4),s=Date.UTC(i.getUTCFullYear(),i.getUTCMonth(),i.getUTCDate())+r*6e4,a=[_r("createdAt",">=",Tt.fromMillis(s))],l=async(D,T)=>(await bR(Yo(D,...T))).data().count,[c,h,f,m,_,I,w]=await Promise.all([l(e,[]),l(e,[_r("active","==",!0)]),l(e,[_r("active","==",!0),_r("stockStatus","==","empty")]),l(e,[_r("active","==",!0),_r("stockStatus","==","low")]),l(t,a),l(t,[...a,_r("movementType","==","entry")]),l(t,[...a,_r("movementType","==","withdrawal")])]);return{data:{itemCount:c,activeItemCount:h,stockOutCount:f,lowStockCount:m,movementCount:_,todayEntries:I,todayWithdrawals:w}}}async function Am(n){const{auth:e,db:t}=ur(),r=e.currentUser;if(!r)throw new Error("Entre no sistema para movimentar o estoque.");if(!Xh(n.quantity)||n.quantity<=0)throw new Error("Quantidade inválida.");const i=hf(r.email),s=_n(t,"employeeAuth",r.uid),a=i?await ss(s):void 0;if(i&&(!(a!=null&&a.exists())||a.get("active")!==!0))throw new Error("Acesso de mantenedor inativo ou não cadastrado.");const l=i?String((a==null?void 0:a.get("employeeId"))??""):"",c=i?_n(t,"employees",l):void 0,h=_n(t,"items",n.itemId),f=`${r.uid}_${n.idempotencyKey}`,m=_n(t,"stockMovements",f),_=typeof n.reason=="string"?n.reason.trim().slice(0,250):"";return{data:{quantityAfter:await uf(t,async w=>{const[D,T,L]=await Promise.all([w.get(h),w.get(m),c?w.get(c):Promise.resolve(void 0)]);if(T.exists())return Number(T.get("quantityAfter"));if(!D.exists()||D.get("active")!==!0)throw new Error("Item indisponível.");const U=L==null?void 0:L.data();if(i){if(!U||U.authUid!==r.uid||U.active!==!0)throw new Error("Funcionário inativo.");if(n.movementType==="entry"&&U.canAdd!==!0)throw new Error("Sem permissão para adicionar materiais.");if(n.movementType==="withdrawal"&&U.canWithdraw!==!0)throw new Error("Sem permissão para retirar materiais.")}const q=Number(D.get("quantity")),ee=q+(n.movementType==="entry"?n.quantity:-n.quantity);if(ee<0)throw new Error("Estoque insuficiente para essa retirada.");const ge={itemId:n.itemId,itemNameSnapshot:D.get("name"),itemCode:D.get("code"),employeeId:i?l:r.uid,employeeNameSnapshot:i?String((U==null?void 0:U.name)??""):r.displayName??r.email??"Administração",matriculaSnapshot:i?String((U==null?void 0:U.matricula)??""):"ADMIN",movementType:n.movementType,quantity:n.quantity,quantityBefore:q,quantityAfter:ee,reason:_,createdAt:zs(),idempotencyKey:n.idempotencyKey};return w.update(h,{quantity:ee,stockStatus:ee<=0?"empty":ee<=Number(D.get("minimumStock"))?"low":"normal",updatedAt:zs(),lastMovementId:f}),w.set(m,ge),ee})}}}async function aC(n){const{auth:e,db:t}=ur();if(!e.currentUser)throw new Error("Entre com a conta administrativa para cadastrar itens.");const r=typeof n.name=="string"?n.name.trim():"",i=typeof n.code=="string"?n.code.trim():"",s=Number(n.quantity),a=Number(n.minimumStock);if(!r||r.length>120||!i||i.length>64||!Xh(s)||!Xh(a))throw new Error("Confira nome, código e quantidades do item.");const l=Array.isArray(n.customFields)?n.customFields:[];if(l.length>30||l.some(T=>!T||typeof T!="object"||typeof T.label!="string"||!T.label.trim()||typeof T.value!="string"||!T.value.trim()))throw new Error("Cada informação adicional precisa de nome e valor (limite de 30 campos).");const c=typeof n.itemId=="string"&&n.itemId?n.itemId:crypto.randomUUID(),h=_n(t,"items",c),f=Ri(i),m=_n(t,"itemCodes",await Em(f)),_=await ss(h),I=_.exists()?_n(t,"itemCodes",await Em(Ri(String(_.get("code"))))):void 0,w=_.exists()?Ri(String(_.get("code"))):"",D={name:r,code:i,description:String(n.description??"").slice(0,2e3),category:String(n.category??"").slice(0,80),itemType:["piece","component","tool","machine"].includes(String(n.itemType))?n.itemType:"piece",trackingMode:n.trackingMode==="asset"?"asset":"quantity",unit:String(n.unit??"UN").slice(0,20),quantity:s,minimumStock:a,stockStatus:s<=0?"empty":s<=a?"low":"normal",rackNumber:String(n.rackNumber??"").slice(0,20),shelfNumber:String(n.shelfNumber??"").slice(0,20),locationNote:String(n.locationNote??"").slice(0,100),imageUrl:String(n.imageUrl??""),imageObjectKey:"",customFields:l.map(T=>({id:typeof T.id=="string"?T.id:crypto.randomUUID(),label:T.label.trim(),value:T.value.trim()})),active:n.active!==!1,searchTokens:nC([r,i,String(n.description??""),...l.flatMap(T=>[T.label,T.value])]),updatedAt:zs()};return await uf(t,async T=>{var ee,ge;const L=await T.get(h),U=await T.get(m),q=I&&I.path!==m.path?await T.get(I):void 0;if(U.exists()&&U.get("itemId")!==c)throw new Error("Já existe um item com esse código.");if(n.isUpdate===!0&&!L.exists())throw new Error("Item não encontrado.");if(n.isUpdate!==!0&&L.exists())throw new Error("Já existe um item com esse identificador.");if(L.exists()&&Number(L.get("quantity"))!==s)throw new Error("Altere o saldo por uma movimentação de estoque.");T.set(h,{...D,...L.exists()?{}:{createdAt:zs()}},{merge:!0}),T.set(m,{itemId:c}),!L.exists()&&s>0&&T.set(_n(t,"stockMovements",`initial_${c}`),{itemId:c,itemNameSnapshot:r,itemCode:i,employeeId:(ee=e.currentUser)==null?void 0:ee.uid,employeeNameSnapshot:((ge=e.currentUser)==null?void 0:ge.email)??"Administração",matriculaSnapshot:"ADMIN",movementType:"entry",quantity:s,quantityBefore:0,quantityAfter:s,reason:"Saldo inicial do cadastro",createdAt:zs(),idempotencyKey:`initial_${c}`}),(q!=null&&q.exists()&&I&&q.get("itemId")===c||w&&w!==f&&I)&&T.delete(I)}),{data:{itemId:c}}}async function lC(n){const{db:e}=ur(),t=typeof n.name=="string"?n.name.trim():"",r=typeof n.matricula=="string"?n.matricula.trim():"",i=n.active!==!1;if(!t||t.length>120||!/^[a-zA-Z0-9._-]{2,32}$/.test(r))throw new Error("Confira nome e matrícula.");const s=typeof n.employeeId=="string"&&n.employeeId?n.employeeId:_n(Xs(e,"employees")).id,a=_n(e,"employees",s),l=_n(e,"employeeLookup",Ri(r)),h=(await ss(a)).data(),f=h!=null&&h.matricula?_n(e,"employeeLookup",Ri(String(h.matricula))):void 0;let m=typeof(h==null?void 0:h.authUid)=="string"?h.authUid:"",_=typeof(h==null?void 0:h.loginEmail)=="string"?h.loginEmail:"",I=null;const w=eC();if(m&&_.endsWith(Bc)&&_!==Wa(r))throw new Error("A matrícula não pode ser alterada depois de criar o acesso. Desative este cadastro e crie outro para trocar a matrícula.");if(!m||!_.endsWith(Bc)){const D=typeof n.password=="string"?n.password:"";if(D.length<6)throw new Error("Defina uma senha inicial com pelo menos 6 caracteres para o mantenedor.");const T=await ss(l);if(T.exists()&&T.get("employeeId")!==s)throw new Error("Essa matrícula já está cadastrada.");const L=await n0(w,Wa(r),D);I=L.user,m=L.user.uid,_=L.user.email??Wa(r)}try{await uf(e,async D=>{const[T,L,U]=await Promise.all([D.get(a),D.get(l),f&&f.path!==l.path?D.get(f):Promise.resolve(void 0)]);if(L.exists()&&L.get("employeeId")!==s)throw new Error("Essa matrícula já está cadastrada.");if(typeof n.employeeId=="string"&&!T.exists())throw new Error("Funcionário não encontrado.");const q={name:t,matricula:r,matriculaNormalized:Ri(r),active:i,canAdd:n.canAdd===!0,canWithdraw:n.canWithdraw===!0,authUid:m,loginEmail:_,createdAt:T.exists()?T.get("createdAt"):zs(),updatedAt:zs()};D.set(a,q),D.set(_n(e,"employeeAuth",m),{employeeId:s,active:i}),h!=null&&h.authUid&&h.authUid!==m&&D.set(_n(e,"employeeAuth",String(h.authUid)),{employeeId:s,active:!1}),D.set(l,{employeeId:s,loginEmail:_}),U!=null&&U.exists()&&f&&f.path!==l.path&&D.delete(f)})}catch(D){if(I)try{await o0(I)}catch(T){throw new AggregateError([D,T],"Não foi possível salvar o mantenedor nem remover a conta Auth criada.")}throw D}finally{w.currentUser&&await Q_(w)}return{data:{employeeId:s}}}async function cC(n,e){const t=await createImageBitmap(n),r=Math.min(1,1e3/Math.max(t.width,t.height)),i=document.createElement("canvas");i.width=Math.round(t.width*r),i.height=Math.round(t.height*r);const s=i.getContext("2d");if(!s)throw new Error("Não foi possível preparar a imagem.");s.drawImage(t,0,0,i.width,i.height),t.close();const a=await new Promise((c,h)=>i.toBlob(f=>f?c(f):h(new Error("Falha ao comprimir a imagem.")),"image/webp",.72));if(a.size>450*1024)throw new Error("A imagem comprimida excede 450 KB para armazenamento no Firestore.");return{imageUrl:await new Promise((c,h)=>{const f=new FileReader;f.onload=()=>typeof f.result=="string"?c(f.result):h(new Error("Falha ao ler a imagem.")),f.onerror=()=>h(new Error("Falha ao ler a imagem.")),f.readAsDataURL(a)}),imageObjectKey:""}}async function uC(n){const{auth:e}=ur();return t0(e,n)}async function bm(){const{auth:n}=ur();return Q_(n)}var hC=J('<meta name="apple-mobile-web-app-title" content="Estoque"/> <meta name="theme-color" content="#f3f5f2"/>',1),dC=J('<a target="_blank" rel="noreferrer">Abrir índices do Firestore</a>'),fC=J('<a target="_blank" rel="noreferrer">Abrir regras do Firestore</a>'),pC=J('<p>UID da conta: <code> </code>. No documento, adicione o campo booleano <code>active: true</code>.</p> <a target="_blank" rel="noreferrer">Autorizar esta conta ADM no Firestore</a>',1),mC=J('<div class="firebase-error-actions"><!> <!> <!></div>'),gC=J('<article class="movement-row"><span><!></span><div class="movement-copy"><strong> </strong><span> </span><small> </small></div><div><strong> </strong><small> </small></div></article>'),_C=J('<div class="movement-list"></div>'),vC=J('<main class="entry-screen"><section class="entry-content" role="status" aria-live="polite"><div class="brand-mark"><!></div> <p class="eyebrow">ARMAZÉM · CONTROLE INTERNO</p> <h1>VERIFICANDO<br/>ACESSO</h1> <p class="entry-hint">Aguarde enquanto verificamos sua sessão.</p></section></main>'),yC=J('<form class="access-form"><label for="email">E-MAIL</label> <div class="input-wrap"><!><input id="email" type="email" autocomplete="username" placeholder="nome@empresa.com" required=""/></div> <label for="password" class="second-label">SENHA</label> <div class="input-wrap"><!><input id="password" type="password" autocomplete="current-password" placeholder="Sua senha" required=""/></div> <button class="primary-button" type="submit"> <span aria-hidden="true">↗</span></button> <button class="text-button reset-button" type="button">Recuperar senha</button></form>'),EC=J('<form class="access-form"><label for="matricula">MATRÍCULA</label> <div class="input-wrap"><!><input id="matricula" inputmode="text" autocomplete="off" placeholder="Digite sua matrícula" required=""/></div> <label for="employee-password" class="second-label">SENHA</label> <div class="input-wrap"><!><input id="employee-password" type="password" autocomplete="current-password" placeholder="Senha do mantenedor" required=""/></div> <button class="primary-button" type="submit"> <span aria-hidden="true">↗</span></button></form>'),tc=J('<p class="form-message error-message" role="alert"> </p><!>',1),wC=J('<p class="form-message success-message" role="status"> </p>'),TC=J('<p class="form-message setup-message">Configure as variáveis Firebase do arquivo `.env` para conectar este sistema.</p>'),IC=J('<main class="entry-screen"><button class="admin-shortcut" aria-label="Acesso administrativo" title="Acesso administrativo"><!></button> <section class="entry-content" aria-labelledby="page-title"><div class="brand-mark"><!></div> <p class="eyebrow">ARMAZÉM · CONTROLE INTERNO</p> <h1 id="page-title"> </h1> <p class="entry-hint"> </p> <!> <!> <!> <!> <p class="connection-note"><span></span> ACESSO RESTRITO A USUÁRIOS AUTORIZADOS</p></section> <footer>ESTOQUE · OPERAÇÃO E MANUTENÇÃO</footer></main>'),Sm=J('<div class="inline-message error-message" role="alert"><!><span> </span><button aria-label="Fechar aviso"><!></button></div><!>',1),Rm=J('<div class="inline-message success-message" role="status"><!> <button aria-label="Fechar aviso"><!></button></div>'),AC=J('<tr><td><button class="table-link"> </button></td><td> </td><td> </td><td><span> </span></td><td> </td></tr>'),bC=J('<div class="table-scroll"><table><thead><tr><th>ITEM</th><th>CÓDIGO</th><th>LOCALIZAÇÃO</th><th>DISPONÍVEL</th><th>MÍNIMO</th></tr></thead><tbody></tbody></table></div>'),SC=J('<p class="empty-state">Nenhum item precisa de reposição.</p>'),RC=J('<button class="quiet-button">Carregar movimentações <!></button>'),CC=J('<section class="overview-page"><div class="metric-grid"><article class="metric"><p>TOTAL DE ITENS</p><strong> </strong><span>no catálogo</span><!></article> <article class="metric"><p>ITENS ATIVOS</p><strong> </strong><span>disponíveis para consulta</span><!></article> <article class="metric alert-metric"><p>SEM ESTOQUE</p><strong> </strong><span>reposição imediata</span><!></article> <article class="metric warn-metric"><p>ESTOQUE BAIXO</p><strong> </strong><span>no limite mínimo</span><!></article> <article class="metric"><p>MOVIMENTAÇÕES HOJE</p><strong> </strong><span>registradas no servidor</span><!></article> <article class="metric"><p>ENTRADAS HOJE</p><strong> </strong><span>materiais adicionados</span><!></article> <article class="metric"><p>RETIRADAS HOJE</p><strong> </strong><span>materiais retirados</span><!></article></div> <section class="content-section restock-section"><div class="section-heading"><div><p class="eyebrow">ATENÇÃO</p><h2>Reposição necessária</h2></div><button class="quiet-button">Ver todos <!></button></div> <!></section> <section class="content-section today-section"><div class="section-heading"><div><p class="eyebrow">ATIVIDADE</p><h2>Movimentações recentes</h2></div><button class="quiet-button">Abrir histórico <!></button></div> <!></section></section>'),Cm=J('<img alt="" loading="lazy"/>'),PC=J('<span class="mini-placeholder"><!></span>'),kC=J('<tr><td><div class="item-cell"><!><div><strong> </strong><small> </small></div></div></td><td> </td><td> </td><td> </td><td><span> </span></td><td><div class="row-actions"><button class="icon-action" aria-label="Adicionar ao estoque" title="Adicionar ao estoque"><!></button><button class="icon-action" aria-label="Retirar do estoque" title="Retirar do estoque"><!></button><button class="icon-action" aria-label="Editar item" title="Editar item"><!></button></div></td></tr>'),NC=J('<tr><td colspan="6"><p class="empty-state">Nenhum item encontrado.</p></td></tr>'),DC=J('<section class="content-section records-page"><div class="section-heading"><div><p class="eyebrow">CATÁLOGO</p><h2>Materiais cadastrados</h2></div><button class="primary-action"><!> Novo item</button></div> <div class="toolbar"><div class="search-box"><!><input placeholder="Buscar por nome, código ou informação"/></div><label class="location-filter"><!><input placeholder="Estante ou prateleira"/></label></div> <div class="table-scroll"><table><thead><tr><th>ITEM</th><th>CÓDIGO</th><th>LOCALIZAÇÃO</th><th>QUANTIDADE</th><th>SITUAÇÃO</th><th></th></tr></thead><tbody></tbody></table></div></section>'),OC=J('<tr><td><strong> </strong></td><td> </td><td> </td><td> </td><td><span> </span></td><td><button class="icon-action" aria-label="Editar funcionário" title="Editar funcionário"><!></button></td></tr>'),VC=J('<tr><td colspan="6"><p class="empty-state">Nenhum funcionário cadastrado.</p></td></tr>'),MC=J('<section class="content-section records-page"><div class="section-heading"><div><p class="eyebrow">ACESSO INTERNO</p><h2>Cadastro de funcionários</h2></div><button class="primary-action"><!> Novo funcionário</button></div> <div class="table-scroll"><table><thead><tr><th>NOME</th><th>MATRÍCULA</th><th>ADICIONAR</th><th>RETIRAR</th><th>ACESSO</th><th></th></tr></thead><tbody></tbody></table></div></section>'),xC=J('<p class="empty-state">Nenhuma movimentação corresponde ao filtro.</p>'),Pm=J('<button class="load-more"> <!></button>'),LC=J('<section class="content-section records-page"><div class="section-heading"><div><p class="eyebrow">AUDITORIA</p><h2>Histórico imutável</h2></div></div> <div class="toolbar movement-filters"><div class="search-box"><!><input placeholder="Filtrar funcionário, matrícula, item ou código"/></div><select aria-label="Tipo de movimentação"><option>Todos os tipos</option><option>Entradas</option><option>Retiradas</option></select><label class="date-filter">DE<input type="date"/></label><label class="date-filter">ATÉ<input type="date"/></label><button class="quiet-button">Atualizar <!></button></div> <!> <!></section>'),FC=J('<main class="admin-layout"><aside class="admin-rail"><a class="rail-brand" href="#inicio" aria-label="Controle de estoque"><!></a> <nav aria-label="Administração"><button title="Visão geral" aria-label="Visão geral"><!></button> <button title="Itens" aria-label="Itens"><!></button> <button title="Funcionários" aria-label="Funcionários"><!></button> <button title="Movimentações" aria-label="Movimentações"><!></button></nav> <button class="rail-logout" aria-label="Sair" title="Sair"><!></button></aside> <section class="admin-main"><header class="topbar"><div><p class="eyebrow">ARMAZÉM / ADMINISTRAÇÃO</p><h1> </h1></div> <div class="user-chip"><!><span>Administrador</span><button aria-label="Sair"><!></button></div></header> <!> <!> <!></section></main>'),UC=J("<img/>"),$C=J('<div class="large-placeholder"><!></div>'),qC=J('<p class="detail-description"> </p>'),BC=J('<p class="location-note"> </p>'),zC=J("<div><dt> </dt><dd> </dd></div>"),jC=J('<section class="custom-fields"><p class="eyebrow">INFORMAÇÕES ADICIONAIS</p><dl></dl></section>'),HC=J('<button type="button"><!> Retirar</button>'),WC=J('<button type="button"><!> Adicionar</button>'),GC=J('<p class="form-hint">Seu acesso não permite movimentações. Solicite a liberação ao administrador.</p>'),KC=J("<span>→</span> após operação <strong> </strong>",1),QC=J('<section class="detail-page"><button class="back-button"><!> VOLTAR À LISTA</button> <div class="detail-grid"><div class="detail-image"><!></div> <div class="detail-main"><div class="detail-title-row"><div><p class="eyebrow"> </p><h1> </h1></div><span> </span></div> <!> <div class="detail-facts"><div class="quantity-fact"><span>DISPONÍVEL</span><strong> <small> </small></strong></div><div><span>LOCALIZAÇÃO</span><strong class="location-emphasis"> </strong></div><div><span>ESTOQUE MÍNIMO</span><strong> </strong></div><div><span>TIPO</span><strong> </strong></div></div> <!> <!> <form class="movement-panel"><div class="section-heading"><div><p class="eyebrow">MOVIMENTAÇÃO</p><h2>Registrar operação</h2></div></div> <div class="segmented"><!> <!></div> <!> <div class="movement-inputs"><label>QUANTIDADE<input type="number" min="0.001" step="0.001" required=""/></label><label>MOTIVO <span>(opcional)</span><input maxlength="250" placeholder="Ex.: manutenção preventiva"/></label></div> <p class="balance-preview">Saldo atual <strong> </strong><!></p> <button class="primary-action confirm-movement" type="submit"> <!></button></form></div></div></section>'),YC=J('<div class="card-placeholder"><!></div>'),JC=J(" <span> </span>",1),XC=J('<button type="button" class="icon-action inventory-add-action" title="Adicionar ao estoque"><!></button>'),ZC=J('<div><button type="button" class="inventory-card"><div class="card-image"><!></div> <div class="card-body"><div class="card-heading"><span class="eyebrow"> </span><span></span></div><h2> </h2><p class="card-location"> </p><div class="card-footer"><strong><!></strong><span> </span></div></div></button> <!></div>'),eP=J('<div class="inventory-grid"></div>'),tP=J('<div class="empty-stock"><!><p>Nenhum material encontrado.</p><span>Confira o código ou tente outro termo.</span></div>'),nP=J('<section class="inventory-page"><div class="inventory-intro"><div><p class="eyebrow">CONSULTA RÁPIDA</p><h1>Encontre seu material.</h1></div><p> </p></div> <div class="search-box main-search"><!><input placeholder="Nome, código ou informação adicional" aria-label="Buscar materiais"/><kbd>↵</kbd></div> <div class="quick-filter-row"><label class="location-filter"><!><input placeholder="Filtrar por estante ou prateleira"/></label><span><span class="dot normal-dot"></span>Disponível <span class="dot low-dot"></span>Baixo <span class="dot empty-dot"></span>Zerado</span></div> <!> <!></section>'),rP=J('<main class="stock-app"><header class="stock-header"><div class="stock-brand"><div class="brand-mark"><!></div><div><p class="eyebrow">ARMAZÉM · ESTOQUE</p><strong> </strong></div></div> <div class="employee-chip"><span> </span><button title="Sair ou trocar funcionário" aria-label="Sair ou trocar funcionário"><!></button></div></header> <!> <!> <!></main>'),iP=J('<p class="entry-hint">Aguarde enquanto confirmamos seu acesso.</p>'),sP=J('<p class="form-message error-message" role="alert"> </p> <!> <button class="primary-button">VOLTAR AO LOGIN <span aria-hidden="true">↗</span></button>',1),oP=J('<main class="entry-screen"><section class="entry-content"><div class="brand-mark"><!></div> <p class="eyebrow">ARMAZÉM · CONTROLE INTERNO</p> <h1> </h1> <!></section></main>'),aP=J('<div class="image-actions"><img class="upload-preview" alt="Prévia do item"/><button type="button" class="remove-image"><!> Excluir fotografia</button></div>'),lP=J('<div class="custom-row"><label>Nome do campo<input maxlength="60" placeholder="Ex.: Fabricante"/></label><label>Informação<input maxlength="250" placeholder="Valor"/></label><button type="button" class="remove-field" aria-label="Remover campo" title="Remover campo"><!></button></div>'),cP=J('<p class="form-hint">Nenhuma informação adicional.</p>'),uP=J('<div class="dialog-backdrop" role="presentation"><dialog open="" class="edit-dialog" aria-labelledby="item-dialog-title"><header class="dialog-header"><div><p class="eyebrow">CATÁLOGO DE ESTOQUE</p><h2 id="item-dialog-title"> </h2></div><button class="icon-action" aria-label="Fechar"><!></button></header> <form class="dialog-form"><div class="form-grid"><label>Nome do item<input maxlength="120" required=""/></label><label>Código único<input maxlength="64" required=""/></label><label>Tipo<select><option>Peça</option><option>Componente</option><option>Ferramenta</option><option>Máquina</option></select></label><label>Unidade<input maxlength="20" required=""/></label><label>Quantidade inicial<input type="number" min="0" step="0.001" required=""/></label><label>Estante<input maxlength="20"/></label><label>Prateleira<input maxlength="20"/></label><label>Localização complementar<input maxlength="100"/></label><label class="wide-field">Descrição<textarea maxlength="2000" rows="3"></textarea></label><label class="wide-field upload-control"><span>Fotografia do item</span><span class="upload-box"><!> <input type="file" accept="image/*"/></span><!></label><label class="check-label"><input type="checkbox"/> Item ativo</label></div> <section class="custom-editor"><div class="section-heading"><div><p class="eyebrow">FLEXÍVEL POR ITEM</p><h3>Informações adicionais</h3></div><button type="button" class="add-field-button"><!> Adicionar campo</button></div> <!> <!></section> <!> <div class="dialog-actions"><button class="quiet-button" type="button">Cancelar</button><button class="primary-action" type="submit"> <!></button></div></form></dialog></div>'),hP=J('<label class="wide-field">Senha inicial do mantenedor<input type="password" minlength="6" autocomplete="new-password" required=""/><span class="form-hint">Necessária para criar o acesso deste mantenedor. Ele entrará com matrícula e senha.</span></label>'),dP=J('<div class="dialog-backdrop" role="presentation"><dialog open="" class="edit-dialog employee-dialog" aria-labelledby="employee-dialog-title"><header class="dialog-header"><div><p class="eyebrow">ACESSO INTERNO</p><h2 id="employee-dialog-title"> </h2></div><button class="icon-action" aria-label="Fechar"><!></button></header> <form class="dialog-form"><div class="form-grid"><label class="wide-field">Nome completo<input maxlength="120" required=""/></label><label class="wide-field">Matrícula<input maxlength="32" required=""/></label> <!> <label class="check-label"><input type="checkbox"/> Acesso ativo</label><label class="check-label"><input type="checkbox"/> Pode adicionar materiais</label><label class="check-label"><input type="checkbox"/> Pode retirar materiais</label></div> <!> <div class="dialog-actions"><button class="quiet-button" type="button">Cancelar</button><button class="primary-action" type="submit"> <!></button></div></form></dialog></div>'),fP=J('<div class="dialog-backdrop" role="presentation"><dialog open="" class="edit-dialog employee-dialog" aria-labelledby="admin-movement-title"><header class="dialog-header"><div><p class="eyebrow">AJUSTE AUDITÁVEL</p><h2 id="admin-movement-title">Movimentar estoque</h2></div><button class="icon-action" aria-label="Fechar"><!></button></header> <form class="dialog-form"><p class="admin-movement-item"><strong> </strong><span> </span></p> <div class="segmented"><button type="button"><!> Retirar</button><button type="button"><!> Adicionar</button></div> <div class="form-grid admin-movement-fields"><label>Quantidade<input type="number" min="0.001" step="0.001" required=""/></label><label>Motivo<input maxlength="250" placeholder="Motivo do ajuste"/></label></div> <!> <div class="dialog-actions"><button class="quiet-button" type="button">Cancelar</button><button class="primary-action" type="submit"> <!></button></div></form></dialog></div>'),pP=J("<!> <!> <!> <!>",1);function mP(n,e){rd(e,!0);const t=O=>{var $=Og(),re=nr($);{var ie=Y=>{var et=mC(),Je=R(et);{var ke=Pe=>{var We=dC();ye(()=>rr(We,"href",p(L))),H(Pe,We)};ve(Je,Pe=>{p(L)&&Pe(ke)})}var It=y(Je,2);{var ht=Pe=>{var We=fC();ye(()=>rr(We,"href",p(U))),H(Pe,We)};ve(It,Pe=>{p(U)&&Pe(ht)})}var tt=y(It,2);{var dt=Pe=>{var We=pC(),vt=nr(We),At=y(R(vt)),yt=Q(At,!0),xt=y(vt,2);ye(()=>{j(yt,p(ee)),rr(xt,"href",p(q))}),H(Pe,We)};ve(tt,Pe=>{p(q)&&Pe(dt)})}H(Y,et)};ve(re,Y=>{(p(L)||p(U)||p(q))&&Y(ie)})}H(O,$)},r=(O,$=ed)=>{var re=_C();ji(re,21,$,ie=>ie.id,(ie,Y)=>{var et=gC(),Je=R(et);let ke;var It=R(Je);{var ht=me=>{Hl(me,{size:18})},tt=me=>{zl(me,{size:18})};ve(It,me=>{p(Y).movementType==="entry"?me(ht):me(tt,-1)})}var dt=y(Je),Pe=R(dt),We=Q(Pe,!0),vt=y(Pe),At=Q(vt),yt=y(vt),xt=Q(yt),gt=y(dt);let at;var Lt=R(gt),Ne=Q(Lt),se=y(Lt),K=Q(se);ye(me=>{ke=pn(Je,1,"movement-icon",null,ke,{"movement-in":p(Y).movementType==="entry"}),j(We,p(Y).itemNameSnapshot),j(At,`${p(Y).employeeNameSnapshot??""} · ${p(Y).matriculaSnapshot??""} · ${p(Y).itemCode??""}`),j(xt,`${(p(Y).reason||(p(Y).movementType==="entry"?"Entrada":"Retirada"))??""} · ${me??""}`),at=pn(gt,1,"movement-quantity",null,at,{"entry-quantity":p(Y).movementType==="entry"}),j(Ne,`${p(Y).movementType==="entry"?"+":"−"}${p(Y).quantity??""}`),j(K,`${p(Y).quantityBefore??""} → ${p(Y).quantityAfter??""}`)},[()=>{var me;return Cu((me=p(Y).createdAt)==null?void 0:me.seconds)}]),H(ie,et)}),H(O,re)},i=()=>({name:"",code:"",description:"",category:"",itemType:"piece",trackingMode:"quantity",unit:"UN",quantity:0,minimumStock:0,rackNumber:"",shelfNumber:"",locationNote:"",imageUrl:"",imageObjectKey:"",customFields:[],active:!0});let s=Z(null),a=Z(null),l=Z(null),c=Z("overview"),h=Z(!1),f=Z(""),m=Z(""),_=Z(""),I=Z(""),w=Z(!1),D=Z(!0),T=Z(""),L=Z(""),U=Z(""),q=Z(""),ee=Z(""),ge=Z(""),W=Z(""),A=Z(""),v=Z(vr([])),E=Z(void 0),S=Z(!1),C=Z(!1),P=Z(vr([])),b=Z(vr([])),Vt=Z(vr([])),Mn=Z(void 0),fi=Z(!1),$n=Z(!1),vn=Z(vr({itemCount:0,activeItemCount:0,stockOutCount:0,lowStockCount:0,movementCount:0,todayEntries:0,todayWithdrawals:0})),te=Z(null),jt=Z("withdrawal"),qn=Z(1),hr=Z(""),Ht=Z(""),_s=Z(""),Kn=Z(!1),pi=Z(!1),Ir=Z(!1),dr=Z(null),$r=Z("entry"),Ar=Z(1),mi=Z(""),Ee=Z(vr(i())),qr=Z(""),ro=Hn(()=>p(P).some(O=>O.id===p(qr))),en=Z(vr({name:"",matricula:"",password:"",active:!0,canAdd:!0,canWithdraw:!0})),xi=Z(""),io=Z(!0),gi=Z(null),so=Z(""),Li=Z("all"),vs=Z(""),oo=Z("");Mw(()=>{if(!qc){k(D,!1);return}return s0(qc,async O=>{var re,ie;if(k(s,O,!0),k(a,null),k(l,null),!O){k(a,null),k(l,null),k(v,[],!0),k(D,!1);return}k(D,!0),k(T,"");let $;try{$=await sC(O)}catch(Y){Wt(Y),Y.code==="app/admin-profile-required"&&(k(ee,O.uid,!0),k(q,yn(O.uid),!0));try{await bm()}finally{k(D,!1)}return}try{k(a,$.role,!0),k(l,$.role==="employee"?$.employee:null,!0),(re=p(l))!=null&&re.canAdd&&!p(l).canWithdraw?k(jt,"entry"):(ie=p(l))!=null&&ie.canWithdraw&&k(jt,"withdrawal"),await ys(),p(a)==="admin"&&await tn()}catch(Y){Wt(Y)}finally{k(D,!1)}})}),mh(()=>{const O=p(W);if(!p(s)||!p(a)||p(te))return;const $=setTimeout(()=>ys(O),250);return()=>clearTimeout($)}),mh(()=>{p(a)==="admin"&&(p(c)==="employees"&&ws(),p(c)==="movements"&&Ts())});async function ys(O=p(W)){try{if(k(E,void 0),k(S,!1),p(a)==="admin"){const $=await Tm();k(P,$,!0),k(v,O.trim()?Es($,O):$.filter(re=>re.active),!0)}else{const $=await wm(O);k(v,O.trim()?Es($.items,O):$.items,!0),k(E,$.cursor,!0),k(S,!!($.cursor&&$.items.length===40),!0)}}catch($){Wt($)}}async function ca(){if(!(!p(E)||p(C)||p(W).trim())){k(C,!0);try{const O=await wm("",p(E));k(v,[...p(v),...O.items],!0),k(E,O.cursor,!0),k(S,!!(O.cursor&&O.items.length===40),!0)}catch(O){Wt(O)}finally{k(C,!1)}}}function Es(O,$){const ie=Mt($).split(/\s+/).filter(Boolean);return O.filter(Y=>{const et=Mt([Y.name,Y.code,Y.description,Y.category,...Y.customFields.flatMap(ke=>[ke.label,ke.value])].join(" ")),Je=`${Y.rackNumber} ${Y.shelfNumber}`.toLowerCase();return ie.every(ke=>et.includes(ke)||Je.includes(ke))})}function Mt(O){return O.trim().toLocaleLowerCase("pt-BR").normalize("NFD").replace(/[\u0300-\u036f]/g,"")}async function tn(){try{const[O,$,re,ie]=await Promise.all([Tm(),Im(),oh(),oC()]);k(P,O,!0),k(b,$,!0),k(Vt,re.movements,!0),k(Mn,re.cursor,!0),k(fi,re.movements.length===100),k(vn,ie.data,!0),k(v,p(W).trim()?Es(p(P),p(W)):p(P).filter(Y=>Y.active),!0)}catch(O){Wt(O)}}async function ws(){try{k(b,await Im(),!0)}catch(O){Wt(O)}}async function Ts(){k(Mn,void 0);try{const O=await oh();k(Vt,O.movements,!0),k(Mn,O.cursor,!0),k(fi,O.movements.length===100)}catch(O){Wt(O)}}async function kl(){if(!(!p(Mn)||p($n))){k($n,!0);try{const O=await oh(void 0,p(Mn));k(Vt,[...p(Vt),...O.movements],!0),k(Mn,O.cursor,!0),k(fi,O.movements.length===100)}catch(O){Wt(O)}finally{k($n,!1)}}}async function Su(O){O.preventDefault(),k(w,!0),En();try{await rC(p(f).trim(),p(m)),k(f,""),k(m,"")}catch($){Wt($)}finally{k(w,!1)}}async function Is(O){O.preventDefault(),k(w,!0),En();try{await iC(p(_).trim(),p(I))}catch($){Wt($)}finally{k(w,!1)}}async function Nl(){if(!p(_).trim()){k(T,"Informe o e-mail administrativo para recuperar a senha.");return}k(w,!0);try{await uC(p(_).trim()),k(ge,"Enviamos as instruções de recuperação para o e-mail.")}catch(O){Wt(O)}finally{k(w,!1)}}async function As(){await bm(),k(te,null),k(c,"overview"),En()}async function ua(O){if(O.preventDefault(),!(!p(te)||p(qn)<=0)){if(p(jt)==="withdrawal"&&p(qn)>p(te).quantity){k(T,"Não há quantidade suficiente para essa retirada.");return}k(w,!0),En();try{const $=JSON.stringify([p(te).id,p(jt),p(qn),p(_s).trim()]);$!==p(Ht)&&(k(Ht,$,!0),k(hr,crypto.randomUUID(),!0));const re=await Am({itemId:p(te).id,movementType:p(jt),quantity:p(qn),reason:p(_s).trim(),idempotencyKey:p(hr)});k(hr,""),k(Ht,""),k(ge,p(jt)==="entry"?"Entrada registrada.":"Retirada registrada.",!0),k(qn,1),k(_s,""),await ys(),k(te,{...p(te),quantity:re.data.quantityAfter},!0);const ie=p(v).find(Y=>{var et;return Y.id===((et=p(te))==null?void 0:et.id)});ie&&k(te,ie,!0),p(a)==="admin"&&await Ts()}catch($){Wt($)}finally{k(w,!1)}}}function Ru(){k(Ee,i(),!0),k(qr,crypto.randomUUID(),!0),k(gi,null),k(Kn,!0)}function Dl(O){k(Ee,{name:O.name,code:O.code,description:O.description,category:O.category,itemType:O.itemType,trackingMode:O.trackingMode,unit:O.unit,quantity:O.quantity,minimumStock:O.minimumStock,rackNumber:O.rackNumber,shelfNumber:O.shelfNumber,locationNote:O.locationNote,imageUrl:O.imageUrl,imageObjectKey:O.imageObjectKey,customFields:O.customFields.map($=>({...$})),active:O.active},!0),k(qr,O.id,!0),k(gi,null),k(te,null),k(Kn,!0)}function ha(){if(p(Ee).customFields.length>=30){k(T,"Limite de 30 informações adicionais por item.");return}p(Ee).customFields=[...p(Ee).customFields,{id:crypto.randomUUID(),label:"",value:""}]}async function Ol(O){if(O.preventDefault(),En(),p(Ee).customFields.some($=>!$.label.trim()||!$.value.trim())){k(T,"Preencha o nome e o valor de cada informação adicional ou remova o campo vazio.");return}k(w,!0);try{if(p(gi)){const $=await cC(p(gi),p(qr));p(Ee).imageUrl=$.imageUrl,p(Ee).imageObjectKey=$.imageObjectKey}await aC({...p(Ee),itemId:p(qr),isUpdate:p(ro)}),k(Kn,!1),p(ge)||k(ge,"Cadastro do item salvo."),await tn()}catch($){Wt($)}finally{k(w,!1)}}async function Vl(){p(Ee).imageUrl="",p(Ee).imageObjectKey="",k(gi,null)}function bs(){k(en,{name:"",matricula:"",password:"",active:!0,canAdd:!0,canWithdraw:!0},!0),k(xi,""),k(io,!0),k(pi,!0)}function da(O){k(en,{name:O.name,matricula:O.matricula,password:"",active:O.active,canAdd:O.canAdd,canWithdraw:O.canWithdraw},!0),k(xi,O.id,!0);const $=`${O.matricula.toLowerCase()}@staff.estoquearmazem.invalid`;k(io,O.loginEmail!==$),k(pi,!0)}async function fa(O){O.preventDefault(),k(w,!0),En();try{await lC({...p(en),...p(xi)?{employeeId:p(xi)}:{}}),k(pi,!1),k(ge,"Cadastro do funcionário salvo."),await ws()}catch($){Wt($)}finally{k(w,!1)}}function Br(O,$){k(dr,O,!0),k($r,$,!0),k(Ar,1),k(mi,""),En(),k(Ir,!0)}async function Ml(O){if(O.preventDefault(),!!p(dr)){if(p($r)==="withdrawal"&&p(Ar)>p(dr).quantity){k(T,"Não há quantidade suficiente para essa retirada.");return}k(w,!0),En();try{await Am({itemId:p(dr).id,movementType:p($r),quantity:p(Ar),reason:p(mi).trim(),idempotencyKey:crypto.randomUUID()}),k(Ir,!1),k(ge,"Movimentação administrativa registrada no histórico."),await tn()}catch($){Wt($)}finally{k(w,!1)}}}function Wt(O){const $=O,re=$.message??"",ie=$.code??"",Y=ie.replace(/^firestore\//,"").split("/").at(-1)??"",et=/index/i.test(re)&&/require|create it here/i.test(re),Je=Y==="permission-denied"||/missing or insufficient permissions/i.test(re);if(k(L,Ss(re)||(et?xl():""),!0),k(U,Je?Ll():"",!0),k(q,""),k(ee,""),p(L)){k(T,"Esta consulta precisa de um índice do Firestore. Crie o índice pelo link abaixo.");return}const ke={"auth/invalid-credential":"E-mail ou senha incorretos.","auth/network-request-failed":"Sem conexão com o servidor. Movimentações exigem conexão ativa.","permission-denied":"O Firestore recusou o acesso. As regras do projeto podem estar desatualizadas; publique firestore.rules e confirme a autorização da conta ADM.","failed-precondition":/index/i.test(re)?"Esta consulta precisa de um índice do Firestore. Abra a página de índices pelo link abaixo.":re},It=ke[ie]??ke[Y]??(Y?ke[`auth/${Y}`]:void 0);k(T,It??(re||"Ocorreu um erro. Tente novamente."),!0)}function xl(){return""}function Ss(O){const $=O.match(/https:\/\/console\.firebase\.google\.com\/[^\s"'<>]+/);if(!$)return"";const re=$[0].replace(/[),.;\]]+$/,"");try{const ie=new URL(re);return ie.hostname!=="console.firebase.google.com"||!ie.pathname.includes("/firestore/indexes")?"":ie.toString()}catch{return""}}function Ll(){return""}function yn(O){return""}function En(){k(T,""),k(L,""),k(U,""),k(q,""),k(ee,""),k(ge,"")}function zr(O){return O.rackNumber&&O.shelfNumber?`E-${O.rackNumber.padStart(2,"0")} / P-${O.shelfNumber.padStart(2,"0")}`:"LOCALIZAÇÃO NÃO CADASTRADA"}function bn(O){return O.quantity<=0?"empty":O.quantity<=O.minimumStock?"low":"normal"}function Cu(O){return O?new Intl.DateTimeFormat("pt-BR",{dateStyle:"short",timeStyle:"short"}).format(new Date(O*1e3)):"Agora"}function Pu(O){var ie;const $=(ie=O.createdAt)!=null&&ie.seconds?new Date(O.createdAt.seconds*1e3):new Date,re=`${$.getFullYear()}-${String($.getMonth()+1).padStart(2,"0")}-${String($.getDate()).padStart(2,"0")}`;return(!p(vs)||re>=p(vs))&&(!p(oo)||re<=p(oo))}let _i=Hn(()=>p(Vt).filter(O=>Mt(`${O.employeeNameSnapshot} ${O.matriculaSnapshot} ${O.itemNameSnapshot} ${O.itemCode} ${O.movementType}`).includes(Mt(p(so)))&&(p(Li)==="all"||O.movementType===p(Li))&&Pu(O))),ku=Hn(()=>p(vn).stockOutCount),Nu=Hn(()=>p(vn).lowStockCount);var Rs=pP();ww("1n46o8q",O=>{var $=hC();Xc(()=>{ug.title="Controle de Estoque"}),H(O,$)});var pa=nr(Rs);{var ma=O=>{var $=vC(),re=R($),ie=R(re),Y=R(ie);mo(Y,{size:25,strokeWidth:1.8}),H(O,$)},ao=O=>{var $=IC(),re=R($),ie=R(re);{var Y=se=>{Nf(se,{size:19})},et=se=>{Gu(se,{size:19})};ve(ie,se=>{p(h)?se(Y):se(et,-1)})}var Je=y(re,2),ke=R(Je),It=R(ke);mo(It,{size:25,strokeWidth:1.8});var ht=y(ke,4),tt=Q(ht,!0),dt=y(ht,2),Pe=Q(dt,!0),We=y(dt,2);{var vt=se=>{var K=yC(),me=y(R(K),2),Qe=R(me);pT(Qe,{size:19});var Xe=y(Qe),ft=y(me,4),bt=R(ft);Gu(bt,{size:18});var Pt=y(bt),Ie=y(ft,2),qe=R(Ie),_t=y(Ie,2);ye(()=>{Ie.disabled=p(w),j(qe,`${p(w)?"VALIDANDO...":"ENTRAR"} `)}),fo("submit",K,Is),ct(Xe,()=>p(_),pt=>k(_,pt)),ct(Pt,()=>p(I),pt=>k(I,pt)),fe("click",_t,Nl),H(se,K)},At=se=>{var K=EC(),me=y(R(K),2),Qe=R(me);Wl(Qe,{size:19,"aria-hidden":"true"});var Xe=y(Qe),ft=y(me,4),bt=R(ft);Gu(bt,{size:18});var Pt=y(bt),Ie=y(ft,2),qe=R(Ie);ye(_t=>{Ie.disabled=_t,j(qe,`${p(w)?"VALIDANDO...":"ACESSAR"} `)},[()=>p(w)||!p(f).trim()]),fo("submit",K,Su),ct(Xe,()=>p(f),_t=>k(f,_t)),ct(Pt,()=>p(m),_t=>k(m,_t)),H(se,K)};ve(We,se=>{p(h)?se(vt):se(At,-1)})}var yt=y(We,2);{var xt=se=>{var K=tc(),me=nr(K),Qe=Q(me,!0),Xe=y(me);t(Xe),ye(()=>j(Qe,p(T))),H(se,K)};ve(yt,se=>{p(T)&&se(xt)})}var gt=y(yt,2);{var at=se=>{var K=wC(),me=Q(K,!0);ye(()=>j(me,p(ge))),H(se,K)};ve(gt,se=>{p(ge)&&se(at)})}var Lt=y(gt,2);{var Ne=se=>{var K=TC();H(se,K)};ve(Lt,se=>{Ly||se(Ne)})}ye(()=>{j(tt,p(h)?`ACESSO
ADMINISTRATIVO`:`CONTROLE
DE ESTOQUE`),j(Pe,p(h)?"Entre com sua conta administrativa.":"Identifique-se para consultar os materiais.")}),fe("click",re,()=>{k(h,!p(h)),En()}),H(O,$)},jr=O=>{var $=FC(),re=R($),ie=R(re),Y=R(ie);mo(Y,{size:22});var et=y(ie,2),Je=R(et);let ke;var It=R(Je);po(It,{size:20});var ht=y(Je,2);let tt;var dt=R(ht);yT(dt,{size:20});var Pe=y(ht,2);let We;var vt=R(Pe);gT(vt,{size:20});var At=y(Pe,2);let yt;var xt=R(At);Df(xt,{size:20});var gt=y(et,2),at=R(gt);Ku(at,{size:19});var Lt=y(re,2),Ne=R(Lt),se=R(Ne),K=y(R(se)),me=Q(K,!0),Qe=y(se,2),Xe=R(Qe);cT(Xe,{size:17});var ft=y(Xe,2),bt=R(ft);Ku(bt,{size:17});var Pt=y(Ne,2);{var Ie=Be=>{var Ae=Sm(),xe=nr(Ae),Le=R(xe);Wu(Le,{size:18});var ue=y(Le),St=Q(ue,!0),Rt=y(ue),mt=R(Rt);Ps(mt,{size:17});var nt=y(xe);t(nt),ye(()=>j(St,p(T))),fe("click",Rt,En),H(Be,Ae)};ve(Pt,Be=>{p(T)&&Be(Ie)})}var qe=y(Pt,2);{var _t=Be=>{var Ae=Rm(),xe=R(Ae);Ta(xe,{size:18});var Le=y(xe,1,!0),ue=y(Le),St=R(ue);Ps(St,{size:17}),ye(()=>j(Le,p(ge))),fe("click",ue,()=>k(ge,"")),H(Be,Ae)};ve(qe,Be=>{p(ge)&&Be(_t)})}var pt=y(qe,2);{var Ft=Be=>{var Ae=CC(),xe=R(Ae),Le=R(xe),ue=y(R(Le)),St=Q(ue,!0),Rt=y(ue,2);po(Rt,{size:20});var mt=y(Le,2),nt=y(R(mt)),Et=Q(nt,!0),kt=y(nt,2);mo(kt,{size:20});var Ot=y(mt,2),cn=y(R(Ot)),nn=Q(cn,!0),Te=y(cn,2);Wu(Te,{size:20});var rt=y(Ot,2),De=y(R(rt)),un=Q(De,!0),X=y(De,2);zl(X,{size:20});var Fe=y(rt,2),lt=y(R(Fe)),we=Q(lt,!0),ze=y(lt,2);Df(ze,{size:20});var Ut=y(Fe,2),Gt=y(R(Ut)),rn=Q(Gt,!0),xn=y(Gt,2);Hl(xn,{size:20});var Yn=y(Ut,2),sn=y(R(Yn)),Jn=Q(sn,!0),Xn=y(sn,2);zl(Xn,{size:20});var Rr=y(xe,2),Ze=R(Rr),Ge=y(R(Ze)),hn=y(R(Ge));jl(hn,{size:16});var Bn=y(Ze,2);{var Zn=le=>{var Ue=bC(),it=R(Ue),fr=y(R(it));ji(fr,21,()=>p(P).filter(er=>er.active&&er.quantity<=er.minimumStock).slice(0,10),er=>er.id,(er,dn)=>{var o=AC(),u=R(o),d=R(u),g=Q(d,!0),N=y(u),M=Q(N,!0),z=y(N),st=Q(z,!0),Kt=y(z),$e=R(Kt);let on;var fn=Q($e),$i=y(Kt),tr=Q($i);ye(uo=>{j(g,p(dn).name),j(M,p(dn).code),j(st,uo),on=pn($e,1,"",null,on,{"danger-text":p(dn).quantity===0}),j(fn,`${p(dn).quantity??""} ${p(dn).unit??""}`),j(tr,`${p(dn).minimumStock??""} ${p(dn).unit??""}`)},[()=>zr(p(dn))]),fe("click",d,()=>Dl(p(dn))),H(er,o)}),H(le,Ue)},Hr=Hn(()=>p(P).filter(le=>le.active&&le.quantity<=le.minimumStock).length),Fi=le=>{var Ue=SC();H(le,Ue)};ve(Bn,le=>{p(Hr)?le(Zn):le(Fi,-1)})}var Wr=y(Rr,2),Cr=R(Wr),Gr=y(R(Cr)),Sn=y(R(Gr));jl(Sn,{size:16});var Ui=y(Cr,2);{var he=le=>{{let Ue=Hn(()=>p(Vt).slice(0,5));r(le,()=>p(Ue))}},de=le=>{var Ue=RC(),it=y(R(Ue));jl(it,{size:16}),fe("click",Ue,Ts),H(le,Ue)};ve(Ui,le=>{p(Vt).length?le(he):le(de,-1)})}ye(()=>{j(St,p(vn).itemCount),j(Et,p(vn).activeItemCount),j(nn,p(ku)),j(un,p(Nu)),j(we,p(vn).movementCount),j(rn,p(vn).todayEntries),j(Jn,p(vn).todayWithdrawals)}),fe("click",Ge,()=>k(c,"items")),fe("click",Gr,()=>k(c,"movements")),H(Be,Ae)},Qn=Be=>{var Ae=DC(),xe=R(Ae),Le=y(R(xe)),ue=R(Le);Ia(ue,{size:18});var St=y(xe,2),Rt=R(St),mt=R(Rt);Wl(mt,{size:19});var nt=y(mt),Et=y(Rt),kt=R(Et);Gl(kt,{size:17});var Ot=y(kt),cn=y(St,2),nn=R(cn),Te=y(R(nn));ji(Te,21,()=>p(P).filter(rt=>(!p(W).trim()||Es([rt],p(W)).length)&&(!p(A)||`${rt.rackNumber} ${rt.shelfNumber}`.toLowerCase().includes(p(A).toLowerCase()))),rt=>rt.id,(rt,De)=>{var un=kC(),X=R(un),Fe=R(X),lt=R(Fe);{var we=le=>{var Ue=Cm();ye(()=>rr(Ue,"src",p(De).imageUrl)),H(le,Ue)},ze=le=>{var Ue=PC(),it=R(Ue);po(it,{size:18}),H(le,Ue)};ve(lt,le=>{p(De).imageUrl?le(we):le(ze,-1)})}var Ut=y(lt),Gt=R(Ut),rn=Q(Gt,!0),xn=y(Gt),Yn=Q(xn,!0),sn=y(X),Jn=Q(sn,!0),Xn=y(sn),Rr=Q(Xn,!0),Ze=y(Xn),Ge=Q(Ze),hn=y(Ze),Bn=R(hn);let Zn;var Hr=Q(Bn,!0),Fi=y(hn),Wr=R(Fi),Cr=R(Wr),Gr=R(Cr);Hl(Gr,{size:17});var Sn=y(Cr),Ui=R(Sn);zl(Ui,{size:17});var he=y(Sn),de=R(he);Gl(de,{size:18}),ye((le,Ue,it,fr)=>{j(rn,p(De).name),j(Yn,p(De).category||"Sem categoria"),j(Jn,p(De).code),j(Rr,le),j(Ge,`${p(De).quantity??""} ${p(De).unit??""}`),Zn=pn(Bn,1,"status-pill",null,Zn,{"status-empty":Ue,"status-low":it}),j(Hr,fr)},[()=>zr(p(De)),()=>bn(p(De))==="empty",()=>bn(p(De))==="low",()=>p(De).active?bn(p(De))==="empty"?"SEM ESTOQUE":bn(p(De))==="low"?"ESTOQUE BAIXO":"NORMAL":"INATIVO"]),fe("click",Cr,()=>Br(p(De),"entry")),fe("click",Sn,()=>Br(p(De),"withdrawal")),fe("click",he,()=>Dl(p(De))),H(rt,un)},rt=>{var De=NC();H(rt,De)}),fe("click",Le,Ru),ct(nt,()=>p(W),rt=>k(W,rt)),ct(Ot,()=>p(A),rt=>k(A,rt)),H(Be,Ae)},br=Be=>{var Ae=MC(),xe=R(Ae),Le=y(R(xe)),ue=R(Le);Ia(ue,{size:18});var St=y(xe,2),Rt=R(St),mt=y(R(Rt));ji(mt,21,()=>p(b),nt=>nt.id,(nt,Et)=>{var kt=OC(),Ot=R(kt),cn=R(Ot),nn=Q(cn,!0),Te=y(Ot),rt=Q(Te,!0),De=y(Te),un=Q(De,!0),X=y(De),Fe=Q(X,!0),lt=y(X),we=R(lt);let ze;var Ut=Q(we,!0),Gt=y(lt),rn=R(Gt),xn=R(rn);Gl(xn,{size:18}),ye(()=>{j(nn,p(Et).name),j(rt,p(Et).matricula),j(un,p(Et).canAdd?"Permitido":"Não permitido"),j(Fe,p(Et).canWithdraw?"Permitido":"Não permitido"),ze=pn(we,1,"status-pill",null,ze,{"status-empty":!p(Et).active}),j(Ut,p(Et).active?"ATIVO":"DESATIVADO")}),fe("click",rn,()=>da(p(Et))),H(nt,kt)},nt=>{var Et=VC();H(nt,Et)}),fe("click",Le,bs),H(Be,Ae)},Sr=Be=>{var Ae=LC(),xe=y(R(Ae),2),Le=R(xe),ue=R(Le);Wl(ue,{size:19});var St=y(ue),Rt=y(Le),mt=R(Rt);mt.value=mt.__value="all";var nt=y(mt);nt.value=nt.__value="entry";var Et=y(nt);Et.value=Et.__value="withdrawal",Ih(Rt);var kt=y(Rt),Ot=y(R(kt)),cn=y(kt),nn=y(R(cn)),Te=y(cn),rt=y(R(Te));Hu(rt,{size:16});var De=y(xe,2);{var un=we=>{r(we,()=>p(_i))},X=we=>{var ze=xC();H(we,ze)};ve(De,we=>{p(_i).length?we(un):we(X,-1)})}var Fe=y(De,2);{var lt=we=>{var ze=Pm(),Ut=R(ze),Gt=y(Ut);Hu(Gt,{size:18}),ye(()=>{ze.disabled=p($n),j(Ut,`${p($n)?"CARREGANDO...":"CARREGAR MAIS MOVIMENTAÇÕES"} `)}),fe("click",ze,kl),H(we,ze)};ve(Fe,we=>{p(fi)&&we(lt)})}ct(St,()=>p(so),we=>k(so,we)),Rf(Rt,()=>p(Li),we=>k(Li,we)),ct(Ot,()=>p(vs),we=>k(vs,we)),ct(nn,()=>p(oo),we=>k(oo,we)),fe("click",Te,Ts),H(Be,Ae)};ve(pt,Be=>{p(c)==="overview"?Be(Ft):p(c)==="items"?Be(Qn,1):p(c)==="employees"?Be(br,2):Be(Sr,-1)})}ye(()=>{ke=pn(Je,1,"",null,ke,{active:p(c)==="overview"}),tt=pn(ht,1,"",null,tt,{active:p(c)==="items"}),We=pn(Pe,1,"",null,We,{active:p(c)==="employees"}),yt=pn(At,1,"",null,yt,{active:p(c)==="movements"}),j(me,p(c)==="overview"?"Visão geral":p(c)==="items"?"Itens do estoque":p(c)==="employees"?"Funcionários":"Movimentações")}),fe("click",Je,()=>k(c,"overview")),fe("click",ht,()=>k(c,"items")),fe("click",Pe,()=>k(c,"employees")),fe("click",At,()=>k(c,"movements")),fe("click",gt,As),fe("click",ft,As),H(O,$)},Fl=O=>{var $=rP(),re=R($),ie=R(re),Y=R(ie),et=R(Y);mo(et,{size:21});var Je=y(Y),ke=y(R(Je)),It=Q(ke,!0),ht=y(ie,2),tt=R(ht),dt=Q(tt),Pe=y(tt),We=R(Pe);Ku(We,{size:18});var vt=y(re,2);{var At=Ne=>{var se=Sm(),K=nr(se),me=R(K);Wu(me,{size:18});var Qe=y(me),Xe=Q(Qe,!0),ft=y(Qe),bt=R(ft);Ps(bt,{size:17});var Pt=y(K);t(Pt),ye(()=>j(Xe,p(T))),fe("click",ft,En),H(Ne,se)};ve(vt,Ne=>{p(T)&&Ne(At)})}var yt=y(vt,2);{var xt=Ne=>{var se=Rm(),K=R(se);Ta(K,{size:18});var me=y(K,1,!0),Qe=y(me),Xe=R(Qe);Ps(Xe,{size:17}),ye(()=>j(me,p(ge))),fe("click",Qe,()=>k(ge,"")),H(Ne,se)};ve(yt,Ne=>{p(ge)&&Ne(xt)})}var gt=y(yt,2);{var at=Ne=>{var se=QC(),K=R(se),me=R(K);Nf(me,{size:18});var Qe=y(K,2),Xe=R(Qe),ft=R(Xe);{var bt=he=>{var de=UC();ye(()=>{rr(de,"src",p(te).imageUrl),rr(de,"alt",p(te).name)}),H(he,de)},Pt=he=>{var de=$C(),le=R(de);po(le,{size:44}),H(he,de)};ve(ft,he=>{p(te).imageUrl?he(bt):he(Pt,-1)})}var Ie=y(Xe,2),qe=R(Ie),_t=R(qe),pt=R(_t),Ft=Q(pt),Qn=y(pt),br=Q(Qn,!0),Sr=y(_t);let Be;var Ae=Q(Sr,!0),xe=y(qe,2);{var Le=he=>{var de=qC(),le=Q(de,!0);ye(()=>j(le,p(te).description)),H(he,de)};ve(xe,he=>{p(te).description&&he(Le)})}var ue=y(xe,2),St=R(ue),Rt=y(R(St)),mt=R(Rt),nt=y(mt),Et=Q(nt,!0),kt=y(St),Ot=y(R(kt)),cn=Q(Ot,!0),nn=y(kt),Te=y(R(nn)),rt=Q(Te),De=y(nn),un=y(R(De)),X=Q(un,!0),Fe=y(ue,2);{var lt=he=>{var de=BC(),le=Q(de,!0);ye(()=>j(le,p(te).locationNote)),H(he,de)};ve(Fe,he=>{p(te).locationNote&&he(lt)})}var we=y(Fe,2);{var ze=he=>{var de=jC(),le=y(R(de));ji(le,21,()=>p(te).customFields,Ue=>Ue.id,(Ue,it)=>{var fr=zC(),er=R(fr),dn=Q(er,!0),o=y(er),u=Q(o,!0);ye(()=>{j(dn,p(it).label),j(u,p(it).value)}),H(Ue,fr)}),H(he,de)};ve(we,he=>{p(te).customFields.length&&he(ze)})}var Ut=y(we,2),Gt=y(R(Ut),2),rn=R(Gt);{var xn=he=>{var de=HC();let le;var Ue=R(de);Of(Ue,{size:17}),ye(()=>le=pn(de,1,"",null,le,{chosen:p(jt)==="withdrawal"})),fe("click",de,()=>k(jt,"withdrawal")),H(he,de)};ve(rn,he=>{var de;(p(a)!=="employee"||(de=p(l))!=null&&de.canWithdraw)&&he(xn)})}var Yn=y(rn,2);{var sn=he=>{var de=WC();let le;var Ue=R(de);Ia(Ue,{size:17}),ye(()=>le=pn(de,1,"",null,le,{chosen:p(jt)==="entry"})),fe("click",de,()=>k(jt,"entry")),H(he,de)};ve(Yn,he=>{var de;(p(a)!=="employee"||(de=p(l))!=null&&de.canAdd)&&he(sn)})}var Jn=y(Gt,2);{var Xn=he=>{var de=GC();H(he,de)};ve(Jn,he=>{var de,le;p(a)==="employee"&&!((de=p(l))!=null&&de.canAdd)&&!((le=p(l))!=null&&le.canWithdraw)&&he(Xn)})}var Rr=y(Jn,2),Ze=R(Rr),Ge=y(R(Ze)),hn=y(Ze),Bn=y(R(hn),2),Zn=y(Rr,2),Hr=y(R(Zn)),Fi=Q(Hr),Wr=y(Hr);{var Cr=he=>{var de=KC(),le=y(nr(de),2),Ue=Q(le);ye(it=>j(Ue,`${it??""} ${p(te).unit??""}`),[()=>Math.max(0,p(te).quantity+(p(jt)==="entry"?Number(p(qn)):-Number(p(qn))))]),H(he,de)};ve(Wr,he=>{p(qn)>0&&he(Cr)})}var Gr=y(Zn,2),Sn=R(Gr),Ui=y(Sn);jl(Ui,{size:18}),ye((he,de,le,Ue)=>{var it,fr;j(Ft,`${p(te).code??""} · ${(p(te).category||"MATERIAL")??""}`),j(br,p(te).name),Be=pn(Sr,1,"status-pill",null,Be,{"status-empty":he,"status-low":de}),j(Ae,le),j(mt,p(te).quantity),j(Et,p(te).unit),j(cn,Ue),j(rt,`${p(te).minimumStock??""} ${p(te).unit??""}`),j(X,p(te).itemType),j(Fi,`${p(te).quantity??""} ${p(te).unit??""}`),Gr.disabled=p(w)||p(qn)<1||p(a)==="employee"&&!((it=p(l))!=null&&it.canAdd)&&!((fr=p(l))!=null&&fr.canWithdraw)||p(jt)==="withdrawal"&&p(qn)>p(te).quantity,j(Sn,`${p(w)?"REGISTRANDO...":p(jt)==="entry"?"CONFIRMAR ENTRADA":"CONFIRMAR RETIRADA"} `)},[()=>bn(p(te))==="empty",()=>bn(p(te))==="low",()=>bn(p(te))==="empty"?"SEM ESTOQUE":bn(p(te))==="low"?"ESTOQUE BAIXO":"NORMAL",()=>zr(p(te))]),fe("click",K,()=>{k(te,null),En()}),fo("submit",Ut,ua),ct(Ge,()=>p(qn),he=>k(qn,he)),ct(Bn,()=>p(_s),he=>k(_s,he)),H(Ne,se)},Lt=Ne=>{var se=nP(),K=R(se),me=y(R(K)),Qe=Q(me),Xe=y(K,2),ft=R(Xe);Wl(ft,{size:21});var bt=y(ft),Pt=y(Xe,2),Ie=R(Pt),qe=R(Ie);Gl(qe,{size:17});var _t=y(qe),pt=y(Pt,2);{var Ft=Ae=>{var xe=eP();ji(xe,21,()=>p(v).filter(Le=>!p(A)||`${Le.rackNumber} ${Le.shelfNumber}`.toLowerCase().includes(p(A).toLowerCase())),Le=>Le.id,(Le,ue)=>{var St=ZC();let Rt;var mt=R(St),nt=R(mt),Et=R(nt);{var kt=Ze=>{var Ge=Cm();ye(()=>rr(Ge,"src",p(ue).imageUrl)),H(Ze,Ge)},Ot=Ze=>{var Ge=YC(),hn=R(Ge);po(hn,{size:25}),H(Ze,Ge)};ve(Et,Ze=>{p(ue).imageUrl?Ze(kt):Ze(Ot,-1)})}var cn=y(nt,2),nn=R(cn),Te=R(nn),rt=Q(Te,!0),De=y(Te);let un;var X=y(nn),Fe=Q(X,!0),lt=y(X),we=Q(lt,!0),ze=y(lt),Ut=R(ze);let Gt;var rn=R(Ut);{var xn=Ze=>{var Ge=iw("SEM ESTOQUE");H(Ze,Ge)},Yn=Ze=>{var Ge=JC(),hn=nr(Ge),Bn=y(hn),Zn=Q(Bn,!0);ye(()=>{j(hn,`${p(ue).quantity??""} `),j(Zn,p(ue).unit)}),H(Ze,Ge)};ve(rn,Ze=>{p(ue).quantity===0?Ze(xn):Ze(Yn,-1)})}var sn=y(Ut),Jn=Q(sn),Xn=y(mt,2);{var Rr=Ze=>{var Ge=XC(),hn=R(Ge);Hl(hn,{size:19}),ye(()=>rr(Ge,"aria-label",`Adicionar ${p(ue).name} ao estoque`)),fe("click",Ge,()=>{k(te,p(ue),!0),k(jt,"entry"),En()}),H(Ze,Ge)};ve(Xn,Ze=>{var Ge;(Ge=p(l))!=null&&Ge.canAdd&&Ze(Rr)})}ye((Ze,Ge,hn)=>{var Bn;Rt=pn(St,1,"inventory-card-row",null,Rt,{"has-add-action":(Bn=p(l))==null?void 0:Bn.canAdd}),j(rt,p(ue).code),un=pn(De,1,"status-mark",null,un,{"mark-empty":Ze,"mark-low":Ge}),j(Fe,p(ue).name),j(we,hn),Gt=pn(Ut,1,"",null,Gt,{"danger-text":p(ue).quantity===0}),j(Jn,`mín. ${p(ue).minimumStock??""}`)},[()=>bn(p(ue))==="empty",()=>bn(p(ue))==="low",()=>zr(p(ue))]),fe("click",mt,()=>{k(te,p(ue),!0),En()}),H(Le,St)}),H(Ae,xe)},Qn=Ae=>{var xe=tP(),Le=R(xe);po(Le,{size:27}),H(Ae,xe)};ve(pt,Ae=>{p(v).length?Ae(Ft):Ae(Qn,-1)})}var br=y(pt,2);{var Sr=Ae=>{var xe=Pm(),Le=R(xe),ue=y(Le);Hu(ue,{size:18}),ye(()=>{xe.disabled=p(C),j(Le,`${p(C)?"CARREGANDO...":"CARREGAR MAIS ITENS"} `)}),fe("click",xe,ca),H(Ae,xe)},Be=Hn(()=>p(S)&&!p(W).trim());ve(br,Ae=>{p(Be)&&Ae(Sr)})}ye(()=>j(Qe,`${p(v).length??""} ${p(v).length===1?"resultado":"resultados"}`)),ct(bt,()=>p(W),Ae=>k(W,Ae)),ct(_t,()=>p(A),Ae=>k(A,Ae)),H(Ne,se)};ve(gt,Ne=>{p(te)?Ne(at):Ne(Lt,-1)})}ye(()=>{var Ne,se;j(It,p(te)?"Detalhes do item":"Consulta de materiais"),j(dt,`${((Ne=p(l))==null?void 0:Ne.name)??"Funcionário"??""} · ${((se=p(l))==null?void 0:se.matricula)??""}`)}),fe("click",Pe,As),H(O,$)},Ul=O=>{var $=oP(),re=R($),ie=R(re),Y=R(ie);mo(Y,{size:25,strokeWidth:1.8});var et=y(ie,4),Je=Q(et,!0),ke=y(et,2);{var It=tt=>{var dt=iP();H(tt,dt)},ht=tt=>{var dt=sP(),Pe=nr(dt),We=Q(Pe,!0),vt=y(Pe,2);t(vt);var At=y(vt,2);ye(()=>j(We,p(T)||"Não foi possível validar seu perfil. Tente novamente.")),fe("click",At,As),H(tt,dt)};ve(ke,tt=>{p(D)?tt(It):tt(ht,-1)})}ye(()=>{rr(re,"role",p(D)?"status":void 0),j(Je,p(D)?`VALIDANDO
ACESSO`:`NÃO FOI POSSÍVEL
ABRIR O PAINEL`)}),H(O,$)};ve(pa,O=>{p(D)&&!p(s)?O(ma):p(s)?p(a)==="admin"?O(jr,2):p(a)==="employee"?O(Fl,3):O(Ul,-1):O(ao,1)})}var lo=y(pa,2);{var ga=O=>{var $=uP(),re=R($),ie=R(re),Y=R(ie),et=y(R(Y)),Je=Q(et,!0),ke=y(Y),It=R(ke);Ps(It,{size:20});var ht=y(ie,2),tt=R(ht),dt=R(tt),Pe=y(R(dt)),We=y(dt),vt=y(R(We)),At=y(We),yt=y(R(At)),xt=R(yt);xt.value=xt.__value="piece";var gt=y(xt);gt.value=gt.__value="component";var at=y(gt);at.value=at.__value="tool";var Lt=y(at);Lt.value=Lt.__value="machine",Ih(yt);var Ne=y(At),se=y(R(Ne)),K=y(Ne),me=y(R(K)),Qe=y(K),Xe=y(R(Qe)),ft=y(Qe),bt=y(R(ft)),Pt=y(ft),Ie=y(R(Pt)),qe=y(Pt),_t=y(R(qe)),pt=y(qe),Ft=y(R(pt)),Qn=R(Ft);dT(Qn,{size:19});var br=y(Qn,1,!0),Sr=y(br),Be=y(Ft);{var Ae=X=>{var Fe=aP(),lt=R(Fe),we=y(lt),ze=R(we);Vf(ze,{size:16}),ye(()=>{rr(lt,"src",p(Ee).imageUrl),we.disabled=p(w)}),fe("click",we,Vl),H(X,Fe)};ve(Be,X=>{p(Ee).imageUrl&&X(Ae)})}var xe=y(pt),Le=R(xe),ue=y(tt,2),St=R(ue),Rt=y(R(St)),mt=R(Rt);Ia(mt,{size:16});var nt=y(St,2);ji(nt,19,()=>p(Ee).customFields,X=>X.id,(X,Fe,lt)=>{var we=lP(),ze=R(we),Ut=y(R(ze)),Gt=y(ze),rn=y(R(Gt)),xn=y(Gt),Yn=R(xn);Vf(Yn,{size:17}),ct(Ut,()=>p(Fe).label,sn=>p(Fe).label=sn),ct(rn,()=>p(Fe).value,sn=>p(Fe).value=sn),fe("click",xn,()=>p(Ee).customFields=p(Ee).customFields.filter((sn,Jn)=>Jn!==p(lt))),H(X,we)});var Et=y(nt,2);{var kt=X=>{var Fe=cP();H(X,Fe)};ve(Et,X=>{p(Ee).customFields.length||X(kt)})}var Ot=y(ue,2);{var cn=X=>{var Fe=tc(),lt=nr(Fe),we=Q(lt,!0),ze=y(lt);t(ze),ye(()=>j(we,p(T))),H(X,Fe)};ve(Ot,X=>{p(T)&&X(cn)})}var nn=y(Ot,2),Te=R(nn),rt=y(Te),De=R(rt),un=y(De);Ta(un,{size:17}),ye(X=>{var Fe;j(Je,p(ro)?"Editar item":"Novo item"),me.disabled=X,j(br,((Fe=p(gi))==null?void 0:Fe.name)??(p(Ee).imageUrl?"Substituir fotografia":"Selecionar imagem")),rt.disabled=p(w),j(De,`${p(w)?"SALVANDO...":"SALVAR ITEM"} `)},[()=>!!p(P).find(X=>X.id===p(qr))]),fe("click",$,X=>{X.target===X.currentTarget&&k(Kn,!1)}),fe("click",ke,()=>k(Kn,!1)),fo("submit",ht,Ol),ct(Pe,()=>p(Ee).name,X=>p(Ee).name=X),ct(vt,()=>p(Ee).code,X=>p(Ee).code=X),Rf(yt,()=>p(Ee).itemType,X=>p(Ee).itemType=X),ct(se,()=>p(Ee).unit,X=>p(Ee).unit=X),ct(me,()=>p(Ee).quantity,X=>p(Ee).quantity=X),ct(Xe,()=>p(Ee).rackNumber,X=>p(Ee).rackNumber=X),ct(bt,()=>p(Ee).shelfNumber,X=>p(Ee).shelfNumber=X),ct(Ie,()=>p(Ee).locationNote,X=>p(Ee).locationNote=X),ct(_t,()=>p(Ee).description,X=>p(Ee).description=X),fe("change",Sr,X=>{var Fe;return k(gi,((Fe=X.currentTarget.files)==null?void 0:Fe[0])??null,!0)}),Bl(Le,()=>p(Ee).active,X=>p(Ee).active=X),fe("click",Rt,ha),fe("click",Te,()=>k(Kn,!1)),H(O,$)};ve(lo,O=>{p(Kn)&&O(ga)})}var _a=y(lo,2);{var $l=O=>{var $=dP(),re=R($),ie=R(re),Y=R(ie),et=y(R(Y)),Je=Q(et,!0),ke=y(Y),It=R(ke);Ps(It,{size:20});var ht=y(ie,2),tt=R(ht),dt=R(tt),Pe=y(R(dt)),We=y(dt),vt=y(R(We)),At=y(We,2);{var yt=Ie=>{var qe=hP(),_t=y(R(qe));ct(_t,()=>p(en).password,pt=>p(en).password=pt),H(Ie,qe)};ve(At,Ie=>{p(io)&&Ie(yt)})}var xt=y(At,2),gt=R(xt),at=y(xt),Lt=R(at),Ne=y(at),se=R(Ne),K=y(tt,2);{var me=Ie=>{var qe=tc(),_t=nr(qe),pt=Q(_t,!0),Ft=y(_t);t(Ft),ye(()=>j(pt,p(T))),H(Ie,qe)};ve(K,Ie=>{p(T)&&Ie(me)})}var Qe=y(K,2),Xe=R(Qe),ft=y(Xe),bt=R(ft),Pt=y(bt);Ta(Pt,{size:17}),ye(()=>{j(Je,p(xi)?"Editar funcionário":"Novo funcionário"),vt.disabled=!p(io),ft.disabled=p(w),j(bt,`${p(w)?"SALVANDO...":"SALVAR FUNCIONÁRIO"} `)}),fe("click",$,Ie=>{Ie.target===Ie.currentTarget&&k(pi,!1)}),fe("click",ke,()=>k(pi,!1)),fo("submit",ht,fa),ct(Pe,()=>p(en).name,Ie=>p(en).name=Ie),ct(vt,()=>p(en).matricula,Ie=>p(en).matricula=Ie),Bl(gt,()=>p(en).active,Ie=>p(en).active=Ie),Bl(Lt,()=>p(en).canAdd,Ie=>p(en).canAdd=Ie),Bl(se,()=>p(en).canWithdraw,Ie=>p(en).canWithdraw=Ie),fe("click",Xe,()=>k(pi,!1)),H(O,$)};ve(_a,O=>{p(pi)&&O($l)})}var Du=y(_a,2);{var co=O=>{var $=fP(),re=R($),ie=R(re),Y=y(R(ie)),et=R(Y);Ps(et,{size:20});var Je=y(ie,2),ke=R(Je),It=R(ke),ht=Q(It,!0),tt=y(It),dt=Q(tt),Pe=y(ke,2),We=R(Pe);let vt;var At=R(We);Of(At,{size:17});var yt=y(We);let xt;var gt=R(yt);Ia(gt,{size:17});var at=y(Pe,2),Lt=R(at),Ne=y(R(Lt)),se=y(Lt),K=y(R(se)),me=y(at,2);{var Qe=qe=>{var _t=tc(),pt=nr(_t),Ft=Q(pt,!0),Qn=y(pt);t(Qn),ye(()=>j(Ft,p(T))),H(qe,_t)};ve(me,qe=>{p(T)&&qe(Qe)})}var Xe=y(me,2),ft=R(Xe),bt=y(ft),Pt=R(bt),Ie=y(Pt);Ta(Ie,{size:17}),ye(()=>{j(ht,p(dr).name),j(dt,`${p(dr).code??""} · saldo ${p(dr).quantity??""} ${p(dr).unit??""}`),vt=pn(We,1,"",null,vt,{chosen:p($r)==="withdrawal"}),xt=pn(yt,1,"",null,xt,{chosen:p($r)==="entry"}),bt.disabled=p(w)||p($r)==="withdrawal"&&p(Ar)>p(dr).quantity,j(Pt,`${p(w)?"REGISTRANDO...":"CONFIRMAR"} `)}),fe("click",$,qe=>{qe.target===qe.currentTarget&&k(Ir,!1)}),fe("click",Y,()=>k(Ir,!1)),fo("submit",Je,Ml),fe("click",We,()=>k($r,"withdrawal")),fe("click",yt,()=>k($r,"entry")),ct(Ne,()=>p(Ar),qe=>k(Ar,qe)),ct(K,()=>p(mi),qe=>k(mi,qe)),fe("click",ft,()=>k(Ir,!1)),H(O,$)};ve(Du,O=>{p(Ir)&&p(dr)&&O(co)})}H(n,Rs),id()}Ng(["click","change"]);Uw({immediate:!0});dw(mP,{target:document.getElementById("app")});
