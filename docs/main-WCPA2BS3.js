import{a as b,b as w,c as P,g as T}from"./chunk-VB6YDEAQ.js";import{Cb as S,Fa as g,Ha as f,Ja as y,La as C,Ma as v,T as l,U as p,_ as h,bb as R,da as m,ga as c,nb as A,za as u}from"./chunk-4UMO7UT2.js";var E=[{path:"login",loadComponent:()=>import("./chunk-J526VIGN.js").then(o=>o.LoginComponent)},{path:"setup-account",loadComponent:()=>import("./chunk-ZD4JRYU4.js").then(o=>o.SetupAccountComponent)},{path:"**",redirectTo:"login"}];var F=[{path:"user-type",loadComponent:()=>import("./chunk-6MWNRO3D.js").then(o=>o.ProfileSelectionComponent)},{path:"ride-selection",loadComponent:()=>import("./chunk-OPYHBYMD.js").then(o=>o.RideSelectionComponent)},{path:"ride-track",loadComponent:()=>import("./chunk-UNK7MCPG.js").then(o=>o.RideTrackComponent)},{path:"ride-rating",loadComponent:()=>import("./chunk-SMAMCNTM.js").then(o=>o.RideRatingComponent)},{path:"ride-transactions",loadComponent:()=>import("./chunk-PEA4EV4K.js").then(o=>o.RideTransactionsComponent)},{path:"driver-home",loadComponent:()=>import("./chunk-TFDY3ABT.js").then(o=>o.DriverHomeComponent)}];var I=[{path:"auth",children:[...E]},{path:"pages",children:[...F]},{path:"**",redirectTo:"auth"}];var _="@",U=(()=>{let e=class e{constructor(r,n,i,s,a){this.doc=r,this.delegate=n,this.zone=i,this.animationType=s,this.moduleImpl=a,this._rendererFactoryPromise=null,this.scheduler=h(f,{optional:!0})}ngOnDestroy(){this._engine?.flush()}loadImpl(){return(this.moduleImpl??import("./chunk-ACQRK225.js")).catch(n=>{throw new l(5300,!1)}).then(({\u0275createEngine:n,\u0275AnimationRendererFactory:i})=>{this._engine=n(this.animationType,this.doc,this.scheduler);let s=new i(this.delegate,this._engine,this.zone);return this.delegate=s,s})}createRenderer(r,n){let i=this.delegate.createRenderer(r,n);if(i.\u0275type===0)return i;typeof i.throwOnSyntheticProps=="boolean"&&(i.throwOnSyntheticProps=!1);let s=new d(i);return n?.data?.animation&&!this._rendererFactoryPromise&&(this._rendererFactoryPromise=this.loadImpl()),this._rendererFactoryPromise?.then(a=>{let x=a.createRenderer(r,n);s.use(x)}).catch(a=>{s.use(i)}),s}begin(){this.delegate.begin?.()}end(){this.delegate.end?.()}whenRenderingDone(){return this.delegate.whenRenderingDone?.()??Promise.resolve()}};e.\u0275fac=function(n){g()},e.\u0275prov=p({token:e,factory:e.\u0275fac});let o=e;return o})(),d=class{constructor(e){this.delegate=e,this.replay=[],this.\u0275type=1}use(e){if(this.delegate=e,this.replay!==null){for(let t of this.replay)t(e);this.replay=null}}get data(){return this.delegate.data}destroy(){this.replay=null,this.delegate.destroy()}createElement(e,t){return this.delegate.createElement(e,t)}createComment(e){return this.delegate.createComment(e)}createText(e){return this.delegate.createText(e)}get destroyNode(){return this.delegate.destroyNode}appendChild(e,t){this.delegate.appendChild(e,t)}insertBefore(e,t,r,n){this.delegate.insertBefore(e,t,r,n)}removeChild(e,t,r){this.delegate.removeChild(e,t,r)}selectRootElement(e,t){return this.delegate.selectRootElement(e,t)}parentNode(e){return this.delegate.parentNode(e)}nextSibling(e){return this.delegate.nextSibling(e)}setAttribute(e,t,r,n){this.delegate.setAttribute(e,t,r,n)}removeAttribute(e,t,r){this.delegate.removeAttribute(e,t,r)}addClass(e,t){this.delegate.addClass(e,t)}removeClass(e,t){this.delegate.removeClass(e,t)}setStyle(e,t,r,n){this.delegate.setStyle(e,t,r,n)}removeStyle(e,t,r){this.delegate.removeStyle(e,t,r)}setProperty(e,t,r){this.shouldReplay(t)&&this.replay.push(n=>n.setProperty(e,t,r)),this.delegate.setProperty(e,t,r)}setValue(e,t){this.delegate.setValue(e,t)}listen(e,t,r){return this.shouldReplay(t)&&this.replay.push(n=>n.listen(e,t,r)),this.delegate.listen(e,t,r)}shouldReplay(e){return this.replay!==null&&e.startsWith(_)}};function O(o="animations"){return C("NgAsyncAnimations"),c([{provide:y,useFactory:(e,t,r)=>new U(e,t,r,o),deps:[S,b,v]},{provide:u,useValue:o==="noop"?"NoopAnimations":"BrowserAnimations"}])}var D={providers:[T(I),O()]};var M=(()=>{let e=class e{};e.\u0275fac=function(n){return new(n||e)},e.\u0275cmp=m({type:e,selectors:[["app-root"]],standalone:!0,features:[A],decls:1,vars:0,template:function(n,i){n&1&&R(0,"router-outlet")},dependencies:[P],styles:["[_nghost-%COMP%]{width:100dvw;height:100dvh;overflow:hidden;position:relative;display:block}"]});let o=e;return o})();w(M,D).catch(o=>console.error(o));
