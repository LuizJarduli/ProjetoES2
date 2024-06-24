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
  ɵɵelementEnd,
  ɵɵelementStart,
  ɵɵproperty,
  ɵɵpureFunction0,
  ɵɵtext
} from "./chunk-2MJKKCX3.js";

// src/app/pages/profile-selection/profile-selection.component.ts
var _c0 = () => ["/pages/ride-selection"];
var _c1 = () => ["/ride-open"];
var _ProfileSelectionComponent = class _ProfileSelectionComponent {
};
_ProfileSelectionComponent.\u0275fac = function ProfileSelectionComponent_Factory(t) {
  return new (t || _ProfileSelectionComponent)();
};
_ProfileSelectionComponent.\u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _ProfileSelectionComponent, selectors: [["app-profile-selection"]], standalone: true, features: [\u0275\u0275StandaloneFeature], decls: 8, vars: 4, consts: [[1, "flex", "h-full", "flex-col", "items-center", "gap-y-3", "p-4"], [1, "flex-1"], [1, "flex", "w-full", "flex-1", "flex-col", "items-center", "justify-start", "gap-y-2"], ["routerLinkActive", "router-link-active", 1, "w-1/2", "rounded-md", "bg-black", "p-3", "text-center", "font-bold", "text-white", 3, "routerLink"]], template: function ProfileSelectionComponent_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "main", 0)(1, "h1", 1);
    \u0275\u0275text(2, " Selecione seu perfil que se encaixa com sua necessidade: ");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "div", 2)(4, "a", 3);
    \u0275\u0275text(5, " Passageiro ");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(6, "a", 3);
    \u0275\u0275text(7, " Motorista ");
    \u0275\u0275elementEnd()()();
  }
  if (rf & 2) {
    \u0275\u0275advance(4);
    \u0275\u0275property("routerLink", \u0275\u0275pureFunction0(2, _c0));
    \u0275\u0275advance(2);
    \u0275\u0275property("routerLink", \u0275\u0275pureFunction0(3, _c1));
  }
}, dependencies: [RouterModule, RouterLink, RouterLinkActive], encapsulation: 2 });
var ProfileSelectionComponent = _ProfileSelectionComponent;
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(ProfileSelectionComponent, { className: "ProfileSelectionComponent", filePath: "src/app/pages/profile-selection/profile-selection.component.ts", lineNumber: 10 });
})();
export {
  ProfileSelectionComponent
};
//# sourceMappingURL=chunk-CQNAMV4M.js.map
