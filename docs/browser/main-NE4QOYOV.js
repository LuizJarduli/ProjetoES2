import{a as b,b as w,c as P,g as T}from"./chunk-HPXJYVOQ.js";import{Bb as S,Ea as g,Ga as f,Ia as y,Ka as C,La as v,S as d,T as p,Z as h,ab as R,ca as m,fa as c,mb as A,ya as u}from"./chunk-PU2CYBAG.js";var E=[{path:"login",loadComponent:()=>import("./chunk-WYNSJYRO.js").then(r=>r.LoginComponent)},{path:"setup-account",loadComponent:()=>import("./chunk-BGD7VQR6.js").then(r=>r.SetupAccountComponent)},{path:"**",redirectTo:"login"}];var F=[{path:"user-type",loadComponent:()=>import("./chunk-V34WSYXS.js").then(r=>r.ProfileSelectionComponent)},{path:"ride-selection",loadComponent:()=>import("./chunk-6QFXXN4J.js").then(r=>r.RideSelectionComponent)},{path:"ride-track",loadComponent:()=>import("./chunk-ZMY5FI7A.js").then(r=>r.RideTrackComponent)},{path:"ride-rating",loadComponent:()=>import("./chunk-4A4RRI4M.js").then(r=>r.RideRatingComponent)},{path:"ride-transactions",loadComponent:()=>import("./chunk-6Z56H4OG.js").then(r=>r.RideTransactionsComponent)}];var I=[{path:"auth",children:[...E]},{path:"pages",children:[...F]},{path:"**",redirectTo:"auth"}];var _="@",U=(()=>{let e=class e{constructor(o,n,i,s,a){this.doc=o,this.delegate=n,this.zone=i,this.animationType=s,this.moduleImpl=a,this._rendererFactoryPromise=null,this.scheduler=h(f,{optional:!0})}ngOnDestroy(){this._engine?.flush()}loadImpl(){return(this.moduleImpl??import("./chunk-TRODHJUC.js")).catch(n=>{throw new d(5300,!1)}).then(({\u0275createEngine:n,\u0275AnimationRendererFactory:i})=>{this._engine=n(this.animationType,this.doc,this.scheduler);let s=new i(this.delegate,this._engine,this.zone);return this.delegate=s,s})}createRenderer(o,n){let i=this.delegate.createRenderer(o,n);if(i.\u0275type===0)return i;typeof i.throwOnSyntheticProps=="boolean"&&(i.throwOnSyntheticProps=!1);let s=new l(i);return n?.data?.animation&&!this._rendererFactoryPromise&&(this._rendererFactoryPromise=this.loadImpl()),this._rendererFactoryPromise?.then(a=>{let D=a.createRenderer(o,n);s.use(D)}).catch(a=>{s.use(i)}),s}begin(){this.delegate.begin?.()}end(){this.delegate.end?.()}whenRenderingDone(){return this.delegate.whenRenderingDone?.()??Promise.resolve()}};e.\u0275fac=function(n){g()},e.\u0275prov=p({token:e,factory:e.\u0275fac});let r=e;return r})(),l=class{constructor(e){this.delegate=e,this.replay=[],this.\u0275type=1}use(e){if(this.delegate=e,this.replay!==null){for(let t of this.replay)t(e);this.replay=null}}get data(){return this.delegate.data}destroy(){this.replay=null,this.delegate.destroy()}createElement(e,t){return this.delegate.createElement(e,t)}createComment(e){return this.delegate.createComment(e)}createText(e){return this.delegate.createText(e)}get destroyNode(){return this.delegate.destroyNode}appendChild(e,t){this.delegate.appendChild(e,t)}insertBefore(e,t,o,n){this.delegate.insertBefore(e,t,o,n)}removeChild(e,t,o){this.delegate.removeChild(e,t,o)}selectRootElement(e,t){return this.delegate.selectRootElement(e,t)}parentNode(e){return this.delegate.parentNode(e)}nextSibling(e){return this.delegate.nextSibling(e)}setAttribute(e,t,o,n){this.delegate.setAttribute(e,t,o,n)}removeAttribute(e,t,o){this.delegate.removeAttribute(e,t,o)}addClass(e,t){this.delegate.addClass(e,t)}removeClass(e,t){this.delegate.removeClass(e,t)}setStyle(e,t,o,n){this.delegate.setStyle(e,t,o,n)}removeStyle(e,t,o){this.delegate.removeStyle(e,t,o)}setProperty(e,t,o){this.shouldReplay(t)&&this.replay.push(n=>n.setProperty(e,t,o)),this.delegate.setProperty(e,t,o)}setValue(e,t){this.delegate.setValue(e,t)}listen(e,t,o){return this.shouldReplay(t)&&this.replay.push(n=>n.listen(e,t,o)),this.delegate.listen(e,t,o)}shouldReplay(e){return this.replay!==null&&e.startsWith(_)}};function O(r="animations"){return C("NgAsyncAnimations"),c([{provide:y,useFactory:(e,t,o)=>new U(e,t,o,r),deps:[S,b,v]},{provide:u,useValue:r==="noop"?"NoopAnimations":"BrowserAnimations"}])}var M={providers:[T(I),O()]};var x=(()=>{let e=class e{};e.\u0275fac=function(n){return new(n||e)},e.\u0275cmp=m({type:e,selectors:[["app-root"]],standalone:!0,features:[A],decls:1,vars:0,template:function(n,i){n&1&&R(0,"router-outlet")},dependencies:[P],styles:["[_nghost-%COMP%]{width:100vw;height:100vh;overflow:hidden;position:relative;display:block}"]});let r=e;return r})();w(x,M).catch(r=>console.error(r));
