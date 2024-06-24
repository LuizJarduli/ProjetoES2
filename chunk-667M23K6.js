import {
  RouterLink,
  RouterLinkActive,
  RouterModule
} from "./chunk-BRA2YWNW.js";
import {
  ɵsetClassDebugInfo,
  ɵɵStandaloneFeature,
  ɵɵadvance,
  ɵɵdefineComponent,
  ɵɵelement,
  ɵɵelementEnd,
  ɵɵelementStart,
  ɵɵnamespaceHTML,
  ɵɵnamespaceSVG,
  ɵɵproperty,
  ɵɵpureFunction0,
  ɵɵtext,
  ɵɵtextInterpolate
} from "./chunk-2MJKKCX3.js";

// src/app/pages/ride-transactions/ride-transactions.component.ts
var _c0 = () => ["/pages/ride-selection"];
var _c1 = () => ["/pages/ride-transactions"];
var _RideTransactionsComponent = class _RideTransactionsComponent {
  get now() {
    return (/* @__PURE__ */ new Date()).toLocaleDateString("pt-BR", { dateStyle: "medium" });
  }
};
_RideTransactionsComponent.\u0275fac = function RideTransactionsComponent_Factory(t) {
  return new (t || _RideTransactionsComponent)();
};
_RideTransactionsComponent.\u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _RideTransactionsComponent, selectors: [["app-ride-transactions"]], standalone: true, features: [\u0275\u0275StandaloneFeature], decls: 47, vars: 7, consts: [[1, "relative", "flex", "h-full", "flex-col", "overflow-auto", "bg-white"], [1, "overflow-auto", "p-4"], [1, "mb-4", "flex", "items-center", "justify-between", "bg-white"], [1, "flex", "cursor-pointer", "items-center"], [1, "mr-2", 3, "routerLink"], ["xmlns", "http://www.w3.org/2000/svg", "fill", "none", "viewBox", "0 0 24 24", "stroke", "currentColor", 1, "h-6", "w-6", "text-black"], ["stroke-linecap", "round", "stroke-linejoin", "round", "stroke-width", "2", "d", "M15 19l-7-7 7-7"], [1, "text-lg", "font-medium"], [1, "mt-2", "flex", "flex-col", "gap-y-4"], [1, "relative", "flex", "items-center", "justify-start", "gap-2", "rounded-md", "bg-gray-200"], [1, "material-symbols-outlined", "ml-2"], ["name", "search", "type", "text", "placeholder", "Procurar", 1, "h-full", "w-full", "appearance-none", "rounded-md", "bg-inherit", "p-3", "text-black", "outline-none"], [1, "flex", "flex-row", "items-center", "gap-6"], [1, "flex-shrink"], [1, "material-symbols-outlined"], [1, "flex-grow"], [1, "rounded-full", "border", "border-black", "p-1"], [1, "flex-2"], [1, "absolute", "bottom-0", "flex", "w-full", "items-center", "justify-around", "border-t-2", "border-t-stone-950", "bg-white", "p-4", "shadow-md"], ["routerLinkActive", "router-link-active", 1, "flex", "flex-col", "items-center", 3, "routerLink"], [1, "flex", "flex-col", "items-center"]], template: function RideTransactionsComponent_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 0)(1, "div", 1)(2, "header", 2)(3, "div", 3)(4, "a", 4);
    \u0275\u0275namespaceSVG();
    \u0275\u0275elementStart(5, "svg", 5);
    \u0275\u0275element(6, "path", 6);
    \u0275\u0275elementEnd()();
    \u0275\u0275namespaceHTML();
    \u0275\u0275elementStart(7, "span", 7);
    \u0275\u0275text(8, "Hist\xF3rico de viagens");
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(9, "main", 8)(10, "div", 9)(11, "span", 10);
    \u0275\u0275text(12, " search ");
    \u0275\u0275elementEnd();
    \u0275\u0275element(13, "input", 11);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(14, "p")(15, "strong");
    \u0275\u0275text(16);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(17, "div", 12)(18, "div", 13)(19, "span", 14);
    \u0275\u0275text(20, "money");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(21, "div", 15)(22, "p")(23, "strong");
    \u0275\u0275text(24, "Glauco");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(25, "span", 16);
    \u0275\u0275text(26, "Carona");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(27, "div", 17)(28, "p")(29, "strong");
    \u0275\u0275text(30, "R$ 35,99");
    \u0275\u0275elementEnd()()()()()();
    \u0275\u0275elementStart(31, "footer", 18)(32, "button", 19)(33, "span", 14);
    \u0275\u0275text(34, "home");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(35, "span");
    \u0275\u0275text(36, "In\xEDcio");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(37, "button", 19)(38, "span", 14);
    \u0275\u0275text(39, "assignment");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(40, "span");
    \u0275\u0275text(41, "Registro");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(42, "button", 20)(43, "span", 14);
    \u0275\u0275text(44, "person");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(45, "span");
    \u0275\u0275text(46, "Perfil");
    \u0275\u0275elementEnd()()()();
  }
  if (rf & 2) {
    \u0275\u0275advance(4);
    \u0275\u0275property("routerLink", \u0275\u0275pureFunction0(4, _c0));
    \u0275\u0275advance(12);
    \u0275\u0275textInterpolate(ctx.now);
    \u0275\u0275advance(16);
    \u0275\u0275property("routerLink", \u0275\u0275pureFunction0(5, _c0));
    \u0275\u0275advance(5);
    \u0275\u0275property("routerLink", \u0275\u0275pureFunction0(6, _c1));
  }
}, dependencies: [RouterModule, RouterLink, RouterLinkActive], encapsulation: 2 });
var RideTransactionsComponent = _RideTransactionsComponent;
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(RideTransactionsComponent, { className: "RideTransactionsComponent", filePath: "src/app/pages/ride-transactions/ride-transactions.component.ts", lineNumber: 10 });
})();
export {
  RideTransactionsComponent
};
//# sourceMappingURL=chunk-667M23K6.js.map
