import {
  MatBottomSheet,
  MatBottomSheetModule,
  MatBottomSheetRef
} from "./chunk-R65ZSYDP.js";
import "./chunk-MM2S4HOC.js";
import {
  RouterLink,
  RouterLinkActive,
  RouterModule
} from "./chunk-BRA2YWNW.js";
import {
  ɵsetClassDebugInfo,
  ɵɵStandaloneFeature,
  ɵɵadvance,
  ɵɵconditional,
  ɵɵdefineComponent,
  ɵɵdirectiveInject,
  ɵɵelement,
  ɵɵelementEnd,
  ɵɵelementStart,
  ɵɵgetCurrentView,
  ɵɵlistener,
  ɵɵnamespaceHTML,
  ɵɵnamespaceSVG,
  ɵɵnextContext,
  ɵɵproperty,
  ɵɵpureFunction0,
  ɵɵresetView,
  ɵɵrestoreView,
  ɵɵtemplate,
  ɵɵtext
} from "./chunk-2MJKKCX3.js";

// src/app/pages/ride-details/ride-details.component.ts
var _c0 = () => ["/pages/ride-track"];
function RideDetailsComponent_Conditional_1_Template(rf, ctx) {
  if (rf & 1) {
    const _r1 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 1)(1, "span", 2);
    \u0275\u0275text(2, "Carona est\xE1 passando j\xE1 j\xE1");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "span", 3);
    \u0275\u0275text(4, "2 mins");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(5, "div", 4);
    \u0275\u0275element(6, "img", 5);
    \u0275\u0275elementStart(7, "div", 6)(8, "div", 7)(9, "div")(10, "div", 8);
    \u0275\u0275text(11, "Glauco");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(12, "div", 9);
    \u0275\u0275text(13, "4.9 \u2B50");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(14, "div", 10)(15, "div", 8);
    \u0275\u0275text(16, "382-SOD23");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(17, "div", 9);
    \u0275\u0275text(18, "BMW-R2");
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(19, "div", 11)(20, "button", 12);
    \u0275\u0275namespaceSVG();
    \u0275\u0275elementStart(21, "svg", 13);
    \u0275\u0275element(22, "path", 14);
    \u0275\u0275elementEnd();
    \u0275\u0275text(23, " Bater um papo com o motorista ");
    \u0275\u0275elementEnd();
    \u0275\u0275namespaceHTML();
    \u0275\u0275elementStart(24, "button", 3);
    \u0275\u0275namespaceSVG();
    \u0275\u0275elementStart(25, "svg", 15);
    \u0275\u0275element(26, "path", 16);
    \u0275\u0275elementEnd()()()()();
    \u0275\u0275namespaceHTML();
    \u0275\u0275elementStart(27, "div", 17)(28, "div", 18);
    \u0275\u0275text(29, "Sugest\xE3o: combine paradas");
    \u0275\u0275elementEnd();
    \u0275\u0275element(30, "img", 19);
    \u0275\u0275elementStart(31, "button", 20);
    \u0275\u0275text(32, "Saiba mais");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(33, "div", 17)(34, "div", 21)(35, "div")(36, "div", 8);
    \u0275\u0275text(37, "Fatec");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(38, "div", 9);
    \u0275\u0275text(39, "4.3km Rua XYX, AZ 18550-000");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(40, "button", 20);
    \u0275\u0275text(41, "Alterar");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(42, "div", 7)(43, "div")(44, "div", 8);
    \u0275\u0275text(45, "R$12.32");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(46, "div", 9);
    \u0275\u0275text(47, "MasterCard 2321");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(48, "button", 20);
    \u0275\u0275text(49, "Alterar");
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(50, "div", 17)(51, "div", 7)(52, "div", 8);
    \u0275\u0275text(53, "Compartilhe a localiza\xE7\xE3o");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(54, "button", 20);
    \u0275\u0275text(55, "Compartilhar");
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(56, "div", 22)(57, "button", 23);
    \u0275\u0275listener("click", function RideDetailsComponent_Conditional_1_Template_button_click_57_listener() {
      \u0275\u0275restoreView(_r1);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.close());
    });
    \u0275\u0275text(58, " Cancelar ");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(59, "button", 24);
    \u0275\u0275listener("click", function RideDetailsComponent_Conditional_1_Template_button_click_59_listener() {
      \u0275\u0275restoreView(_r1);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.accepted = true);
    });
    \u0275\u0275text(60, " Aceitar ");
    \u0275\u0275elementEnd()();
  }
}
function RideDetailsComponent_Conditional_2_Template(rf, ctx) {
  if (rf & 1) {
    const _r3 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "section", 25)(1, "span", 26);
    \u0275\u0275text(2, "check");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "p", 27);
    \u0275\u0275text(4, "Viagem iniciada com sucesso!");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(5, "a", 28);
    \u0275\u0275listener("click", function RideDetailsComponent_Conditional_2_Template_a_click_5_listener() {
      \u0275\u0275restoreView(_r3);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.close());
    });
    \u0275\u0275text(6, "Finalizar");
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    \u0275\u0275advance(5);
    \u0275\u0275property("routerLink", \u0275\u0275pureFunction0(1, _c0));
  }
}
var _RideDetailsComponent = class _RideDetailsComponent {
  constructor(_bottomSheet) {
    this._bottomSheet = _bottomSheet;
    this._accepted = false;
  }
  close() {
    this._bottomSheet.dismiss();
  }
  set accepted(hasAccepted) {
    this._accepted = hasAccepted;
  }
  get accepted() {
    return this._accepted;
  }
};
_RideDetailsComponent.\u0275fac = function RideDetailsComponent_Factory(t) {
  return new (t || _RideDetailsComponent)(\u0275\u0275directiveInject(MatBottomSheetRef));
};
_RideDetailsComponent.\u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _RideDetailsComponent, selectors: [["app-ride-details"]], standalone: true, features: [\u0275\u0275StandaloneFeature], decls: 3, vars: 1, consts: [[1, "rounded-md", "bg-gray-100", "p-4", "text-black", "shadow-md"], [1, "mb-4", "flex", "items-center", "justify-between", "rounded-md", "bg-white", "p-4", "shadow-sm"], [1, "text-lg", "font-medium"], [1, "rounded-full", "bg-gray-200", "px-3", "py-1", "text-sm", "font-medium", "text-gray-800"], [1, "mb-4", "flex", "items-center", "rounded-md", "bg-white", "p-4", "shadow-sm"], ["src", "assets/glauco.png", "alt", "Driver Image", 1, "mr-4", "h-12", "w-12", "rounded-full"], [1, "flex-1"], [1, "flex", "items-center", "justify-between"], [1, "font-medium"], [1, "text-sm", "text-gray-500"], [1, "text-right"], [1, "mt-2", "flex"], [1, "mr-2", "flex", "items-center", "rounded-full", "bg-gray-200", "px-3", "py-1", "text-sm", "font-medium", "text-gray-800"], ["fill", "none", "stroke", "currentColor", "viewBox", "0 0 24 24", "xmlns", "http://www.w3.org/2000/svg", 1, "mr-1", "h-4", "w-4"], ["stroke-linecap", "round", "stroke-linejoin", "round", "stroke-width", "2", "d", "M8 10h.01M12 10h.01M16 10h.01M21 16.362a3.499 3.499 0 01-4.9.58 8.003 8.003 0 01-9.795 0A3.499 3.499 0 012.924 13H21z"], ["fill", "none", "stroke", "currentColor", "viewBox", "0 0 24 24", "xmlns", "http://www.w3.org/2000/svg", 1, "h-4", "w-4"], ["stroke-linecap", "round", "stroke-linejoin", "round", "stroke-width", "2", "d", "M3 10h12M9 16h6M21 12v1a1 1 0 01-1 1h-3a2 2 0 00-2 2v3a1 1 0 001 1h3a1 1 0 001 1v1m-9-9v.01M7 7v.01"], [1, "mb-4", "rounded-md", "bg-white", "p-4", "shadow-sm"], [1, "mb-2", "font-medium"], ["src", "assets/ride-details-banner.png", "alt", "Combine Paradas", 1, "mb-2", "h-32", "w-full", "rounded-md", "object-cover"], [1, "font-medium", "text-blue-600"], [1, "mb-2", "flex", "items-center", "justify-between"], [1, "flex", "justify-between"], [1, "rounded-md", "bg-secondary", "px-4", "py-2", "font-medium", "text-gray-800", 3, "click"], [1, "rounded-md", "bg-primary", "px-4", "py-2", "font-medium", "text-white", 3, "click"], [1, "flex", "h-80", "flex-col", "items-center", "justify-center"], [1, "material-symbols-outlined"], [1, "mb-4"], ["routerLinkActive", "router-link-active", 1, "w-1/2", "rounded-md", "bg-black", "p-3", "text-center", "font-bold", "text-white", 3, "click", "routerLink"]], template: function RideDetailsComponent_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 0);
    \u0275\u0275template(1, RideDetailsComponent_Conditional_1_Template, 61, 0)(2, RideDetailsComponent_Conditional_2_Template, 7, 2);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    \u0275\u0275advance();
    \u0275\u0275conditional(1, !ctx.accepted ? 1 : 2);
  }
}, dependencies: [MatBottomSheetModule, RouterModule, RouterLink, RouterLinkActive], styles: ["\n\n  .mat-bottom-sheet-container {\n  padding: unset;\n}\n/*# sourceMappingURL=ride-details.component.css.map */"] });
var RideDetailsComponent = _RideDetailsComponent;
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(RideDetailsComponent, { className: "RideDetailsComponent", filePath: "src/app/pages/ride-details/ride-details.component.ts", lineNumber: 19 });
})();

// src/app/pages/ride-selection/ride-selection.component.ts
var _c02 = () => ["/pages/ride-selection"];
var _c1 = () => ["/pages/ride-transactions"];
var _RideSelectionComponent = class _RideSelectionComponent {
  constructor(_bottomSheet) {
    this._bottomSheet = _bottomSheet;
  }
  openRideDetails() {
    this._bottomSheet.open(RideDetailsComponent, { hasBackdrop: true });
  }
};
_RideSelectionComponent.\u0275fac = function RideSelectionComponent_Factory(t) {
  return new (t || _RideSelectionComponent)(\u0275\u0275directiveInject(MatBottomSheet));
};
_RideSelectionComponent.\u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _RideSelectionComponent, selectors: [["app-ride-selection"]], standalone: true, features: [\u0275\u0275StandaloneFeature], decls: 61, vars: 4, consts: [[1, "relative", "flex", "h-full", "flex-col", "overflow-auto", "bg-white"], [1, "overflow-auto"], [1, "flex", "items-center", "justify-between", "bg-white", "p-4"], ["src", "assets/ride-banner.png", "alt", "Ride Banner", 1, "w-full"], [1, "flex", "flex-col", "items-center", "bg-white", "p-4"], [1, "mb-4", "flex", "space-x-4"], [1, "flex", "flex-col", "items-center"], ["src", "assets/car-1.png", "alt", "Car 1", 1, "h-16", "w-24"], [1, "text-[10px]"], ["src", "assets/car-2.png", "alt", "Car 2", 1, "h-16", "w-24"], ["src", "assets/car-3.png", "alt", "Car 3", 1, "h-16", "w-24"], [1, "mb-4", "flex", "w-full", "items-center"], [1, "material-symbols-outlined", "mr-2"], ["type", "text", "placeholder", "Bora pra FATEC?", 1, "w-full", "border-b", "border-gray-300", "bg-white", "p-2", "focus:outline-none"], [1, "m-2", "rounded", "bg-gray-200", "p-2"], [1, "mb-4", "flex", "w-full", "appearance-none", "items-center"], [1, "mb-8", "mt-4", "flex-grow", "bg-white", "p-4", "shadow-md"], [1, "mb-4"], [1, "text-lg", "font-bold"], [1, "mt-2", "rounded", "bg-gray-200", "p-2"], [1, "mb-4", "text-lg", "font-bold"], ["tabindex", "15", 1, "relative", "h-48", "w-full", "cursor-pointer", "bg-gray-100", 3, "click", "keypress"], ["src", "assets/ride-map.png", "alt", "Map", 1, "cover-fill"], [1, "absolute", "bottom-0", "flex", "w-full", "items-center", "justify-around", "border-t-2", "border-t-stone-950", "bg-white", "p-4", "shadow-md"], ["routerLinkActive", "router-link-active", 1, "flex", "flex-col", "items-center", 3, "routerLink"], [1, "material-symbols-outlined"]], template: function RideSelectionComponent_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 0)(1, "div", 1)(2, "header", 2);
    \u0275\u0275element(3, "img", 3);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(4, "section", 4)(5, "div", 5)(6, "div", 6);
    \u0275\u0275element(7, "img", 7);
    \u0275\u0275elementStart(8, "span", 8);
    \u0275\u0275text(9, "Padr\xE3o 4 portas");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(10, "div", 6);
    \u0275\u0275element(11, "img", 9);
    \u0275\u0275elementStart(12, "span", 8);
    \u0275\u0275text(13, "Chique 4 portas");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(14, "div", 6);
    \u0275\u0275element(15, "img", 10);
    \u0275\u0275elementStart(16, "span", 8);
    \u0275\u0275text(17, "Padr\xE3o 6 portas");
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(18, "div", 11)(19, "span", 12);
    \u0275\u0275text(20, "search");
    \u0275\u0275elementEnd();
    \u0275\u0275element(21, "input", 13);
    \u0275\u0275elementStart(22, "button", 14);
    \u0275\u0275text(23, "Agora");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(24, "button", 15)(25, "span", 12);
    \u0275\u0275text(26, "bookmark");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(27, "span");
    \u0275\u0275text(28, "Selecionar um lugar salvo");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(29, "button", 15)(30, "span", 12);
    \u0275\u0275text(31, "location_on");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(32, "span");
    \u0275\u0275text(33, "Selecionar um destino no mapa");
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(34, "section", 16)(35, "div", 17)(36, "h2", 18);
    \u0275\u0275text(37, "Voc\xEA pode combinar paradas");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(38, "button", 19);
    \u0275\u0275text(39, "Saiba mais");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(40, "div")(41, "h2", 20);
    \u0275\u0275text(42, "Poss\xEDveis caronas perto de voc\xEA");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(43, "div", 21);
    \u0275\u0275listener("click", function RideSelectionComponent_Template_div_click_43_listener() {
      return ctx.openRideDetails();
    })("keypress", function RideSelectionComponent_Template_div_keypress_43_listener() {
      return ctx.openRideDetails();
    });
    \u0275\u0275element(44, "img", 22);
    \u0275\u0275elementEnd()()()();
    \u0275\u0275elementStart(45, "footer", 23)(46, "button", 24)(47, "span", 25);
    \u0275\u0275text(48, "home");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(49, "span");
    \u0275\u0275text(50, "In\xEDcio");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(51, "button", 24)(52, "span", 25);
    \u0275\u0275text(53, "assignment");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(54, "span");
    \u0275\u0275text(55, "Registro");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(56, "button", 6)(57, "span", 25);
    \u0275\u0275text(58, "person");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(59, "span");
    \u0275\u0275text(60, "Perfil");
    \u0275\u0275elementEnd()()()();
  }
  if (rf & 2) {
    \u0275\u0275advance(46);
    \u0275\u0275property("routerLink", \u0275\u0275pureFunction0(2, _c02));
    \u0275\u0275advance(5);
    \u0275\u0275property("routerLink", \u0275\u0275pureFunction0(3, _c1));
  }
}, dependencies: [MatBottomSheetModule, RouterModule, RouterLink, RouterLinkActive], encapsulation: 2 });
var RideSelectionComponent = _RideSelectionComponent;
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(RideSelectionComponent, { className: "RideSelectionComponent", filePath: "src/app/pages/ride-selection/ride-selection.component.ts", lineNumber: 15 });
})();
export {
  RideSelectionComponent
};
//# sourceMappingURL=chunk-YLU4FJAM.js.map
