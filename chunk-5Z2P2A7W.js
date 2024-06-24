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
  ɵɵdefineComponent,
  ɵɵdirectiveInject,
  ɵɵelement,
  ɵɵelementEnd,
  ɵɵelementStart,
  ɵɵlistener,
  ɵɵnamespaceHTML,
  ɵɵnamespaceSVG,
  ɵɵproperty,
  ɵɵpureFunction0,
  ɵɵtext
} from "./chunk-2MJKKCX3.js";

// src/app/pages/ride-cancel/ride-cancel.component.ts
var _c0 = () => ["/pages/ride-selection"];
var _RideCancelComponent = class _RideCancelComponent {
  constructor(_bottomSheet) {
    this._bottomSheet = _bottomSheet;
  }
  close() {
    this._bottomSheet.dismiss();
  }
};
_RideCancelComponent.\u0275fac = function RideCancelComponent_Factory(t) {
  return new (t || _RideCancelComponent)(\u0275\u0275directiveInject(MatBottomSheetRef));
};
_RideCancelComponent.\u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _RideCancelComponent, selectors: [["app-ride-cancel"]], standalone: true, features: [\u0275\u0275StandaloneFeature], decls: 47, vars: 12, consts: [[1, "flex", "h-auto", "flex-col", "bg-gray-100", "p-4", "text-black"], [1, "mb-4", "flex", "items-center", "justify-between", "rounded-md", "bg-white", "p-4", "shadow-sm"], [1, "flex", "cursor-pointer", "items-center"], [1, "mr-2", 3, "click"], ["xmlns", "http://www.w3.org/2000/svg", "fill", "none", "viewBox", "0 0 24 24", "stroke", "currentColor", 1, "h-6", "w-6", "text-black"], ["stroke-linecap", "round", "stroke-linejoin", "round", "stroke-width", "2", "d", "M15 19l-7-7 7-7"], [1, "text-lg", "font-medium"], [1, "text-gray-500"], [1, "mb-4", "flex-1", "rounded-md", "bg-white", "p-4", "shadow-sm"], [1, "mb-4", "text-lg", "font-medium"], [1, "space-y-4"], ["tabindex", "", 1, "flex", "cursor-pointer", "items-center", 3, "click", "keypress", "routerLink"], ["xmlns", "http://www.w3.org/2000/svg", "viewBox", "0 0 24 24", "fill", "currentColor", 1, "mr-2", "h-6", "w-6", "text-gray-700"], ["d", "M4 3a1 1 0 00-1 1v2.5C3 8.328 5.354 10 8.5 10 10.042 10 11.514 9.367 12.5 8.4c.986.967 2.458 1.6 4 1.6 3.146 0 5.5-1.672 5.5-3.5V4a1 1 0 00-1-1H4zM2 7.5V20a1 1 0 001 1h18a1 1 0 001-1V7.5c-1.54 1.428-4.156 2.5-7 2.5-2.372 0-4.473-.642-6-1.7-1.527 1.058-3.628 1.7-6 1.7-2.844 0-5.46-1.072-7-2.5z"], ["tabindex", "", "routerLinkActive", "router-link-active", 1, "flex", "cursor-pointer", "items-center", 3, "click", "keypress", "routerLink"], ["d", "M10 11h4v1h-4v-1zm-5 7h4v1H5v-1zm9 0h4v1h-4v-1zm-4-4h4v1h-4v-1zm-5 4h4v1H5v-1zm0-8v1h4V5H4v1H3V4.5A1.5 1.5 0 014.5 3h1A1.5 1.5 0 017 4.5V6h4V4.5A1.5 1.5 0 0112.5 3h1A1.5 1.5 0 0115 4.5V6h4V4.5A1.5 1.5 0 0120.5 3h1A1.5 1.5 0 0123 4.5v1H22v1h-1v10.5A1.5 1.5 0 0119.5 17h-15A1.5 1.5 0 013 15.5V5z"], ["d", "M12 2C6.486 2 2 6.486 2 12c0 5.514 4.486 10 10 10s10-4.486 10-10c0-5.514-4.486-10-10-10zm1 17h-2v-2h2v2zm0-4h-2v-7h2v7z"], ["d", "M10 2a1 1 0 00-1 1v2.5c0 1.833 2.354 3.5 5.5 3.5s5.5-1.667 5.5-3.5V3a1 1 0 00-1-1h-9zM3 8.5V21a1 1 0 001 1h16a1 1 0 001-1V8.5c-1.54 1.428-4.156 2.5-7 2.5-2.372 0-4.473-.642-6-1.7-1.527 1.058-3.628 1.7-6 1.7-2.844 0-5.46-1.072-7-2.5z"], ["d", "M12 2a10 10 0 00-4 19.025v-1.05A9 9 0 0112 3c2.236 0 4.28.73 5.924 1.975H16.95A8.978 8.978 0 0012 5c-2.23 0-4.28.73-5.924 1.975H5a9 9 0 00-1.075 17.95v1.05A10 10 0 0012 2z"], ["d", "M12 2C6.486 2 2 6.486 2 12s4.486 10 10 10 10-4.486 10-10S17.514 2 12 2zm1 15h-2v-2h2v2zm0-4h-2V7h2v6z"], [1, "rounded-md", "bg-white", "p-4", "shadow-sm"], [1, "w-full", "rounded-md", "bg-black", "p-2", "text-white", 3, "click"]], template: function RideCancelComponent_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 0)(1, "div", 1)(2, "div", 2)(3, "button", 3);
    \u0275\u0275listener("click", function RideCancelComponent_Template_button_click_3_listener() {
      return ctx.close();
    });
    \u0275\u0275namespaceSVG();
    \u0275\u0275elementStart(4, "svg", 4);
    \u0275\u0275element(5, "path", 5);
    \u0275\u0275elementEnd()();
    \u0275\u0275namespaceHTML();
    \u0275\u0275elementStart(6, "span", 6);
    \u0275\u0275text(7, "Cancelar carona");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(8, "button", 7);
    \u0275\u0275text(9, "pular");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(10, "div", 8)(11, "h2", 9);
    \u0275\u0275text(12, "Por que vai cancelar?");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(13, "ul", 10)(14, "li", 11);
    \u0275\u0275listener("click", function RideCancelComponent_Template_li_click_14_listener() {
      return ctx.close();
    })("keypress", function RideCancelComponent_Template_li_keypress_14_listener() {
      return ctx.close();
    });
    \u0275\u0275namespaceSVG();
    \u0275\u0275elementStart(15, "svg", 12);
    \u0275\u0275element(16, "path", 13);
    \u0275\u0275elementEnd();
    \u0275\u0275namespaceHTML();
    \u0275\u0275elementStart(17, "span");
    \u0275\u0275text(18, "N\xE3o consigo contato com o passageiro");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(19, "li", 14);
    \u0275\u0275listener("click", function RideCancelComponent_Template_li_click_19_listener() {
      return ctx.close();
    })("keypress", function RideCancelComponent_Template_li_keypress_19_listener() {
      return ctx.close();
    });
    \u0275\u0275namespaceSVG();
    \u0275\u0275elementStart(20, "svg", 12);
    \u0275\u0275element(21, "path", 15);
    \u0275\u0275elementEnd();
    \u0275\u0275namespaceHTML();
    \u0275\u0275elementStart(22, "span");
    \u0275\u0275text(23, "Passageiro sumiu");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(24, "li", 14);
    \u0275\u0275listener("click", function RideCancelComponent_Template_li_click_24_listener() {
      return ctx.close();
    })("keypress", function RideCancelComponent_Template_li_keypress_24_listener() {
      return ctx.close();
    });
    \u0275\u0275namespaceSVG();
    \u0275\u0275elementStart(25, "svg", 12);
    \u0275\u0275element(26, "path", 16);
    \u0275\u0275elementEnd();
    \u0275\u0275namespaceHTML();
    \u0275\u0275elementStart(27, "span");
    \u0275\u0275text(28, "O passageiro pediu pra cancelar");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(29, "li", 14);
    \u0275\u0275listener("click", function RideCancelComponent_Template_li_click_29_listener() {
      return ctx.close();
    })("keypress", function RideCancelComponent_Template_li_keypress_29_listener() {
      return ctx.close();
    });
    \u0275\u0275namespaceSVG();
    \u0275\u0275elementStart(30, "svg", 12);
    \u0275\u0275element(31, "path", 17);
    \u0275\u0275elementEnd();
    \u0275\u0275namespaceHTML();
    \u0275\u0275elementStart(32, "span");
    \u0275\u0275text(33, "Deu confus\xE3o, expulsei do carro");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(34, "li", 14);
    \u0275\u0275listener("click", function RideCancelComponent_Template_li_click_34_listener() {
      return ctx.close();
    })("keypress", function RideCancelComponent_Template_li_keypress_34_listener() {
      return ctx.close();
    });
    \u0275\u0275namespaceSVG();
    \u0275\u0275elementStart(35, "svg", 12);
    \u0275\u0275element(36, "path", 18);
    \u0275\u0275elementEnd();
    \u0275\u0275namespaceHTML();
    \u0275\u0275elementStart(37, "span");
    \u0275\u0275text(38, "Passageiro muito atrasado");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(39, "li", 14);
    \u0275\u0275listener("click", function RideCancelComponent_Template_li_click_39_listener() {
      return ctx.close();
    })("keypress", function RideCancelComponent_Template_li_keypress_39_listener() {
      return ctx.close();
    });
    \u0275\u0275namespaceSVG();
    \u0275\u0275elementStart(40, "svg", 12);
    \u0275\u0275element(41, "path", 19);
    \u0275\u0275elementEnd();
    \u0275\u0275namespaceHTML();
    \u0275\u0275elementStart(42, "span");
    \u0275\u0275text(43, "Outro");
    \u0275\u0275elementEnd()()()();
    \u0275\u0275elementStart(44, "div", 20)(45, "button", 21);
    \u0275\u0275listener("click", function RideCancelComponent_Template_button_click_45_listener() {
      return ctx.close();
    });
    \u0275\u0275text(46, " Manter minha viagem ");
    \u0275\u0275elementEnd()()();
  }
  if (rf & 2) {
    \u0275\u0275advance(14);
    \u0275\u0275property("routerLink", \u0275\u0275pureFunction0(6, _c0));
    \u0275\u0275advance(5);
    \u0275\u0275property("routerLink", \u0275\u0275pureFunction0(7, _c0));
    \u0275\u0275advance(5);
    \u0275\u0275property("routerLink", \u0275\u0275pureFunction0(8, _c0));
    \u0275\u0275advance(5);
    \u0275\u0275property("routerLink", \u0275\u0275pureFunction0(9, _c0));
    \u0275\u0275advance(5);
    \u0275\u0275property("routerLink", \u0275\u0275pureFunction0(10, _c0));
    \u0275\u0275advance(5);
    \u0275\u0275property("routerLink", \u0275\u0275pureFunction0(11, _c0));
  }
}, dependencies: [MatBottomSheetModule, RouterModule, RouterLink, RouterLinkActive], styles: ["\n\n  .mat-bottom-sheet-container {\n  padding: unset;\n}\n/*# sourceMappingURL=ride-cancel.component.css.map */"] });
var RideCancelComponent = _RideCancelComponent;
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(RideCancelComponent, { className: "RideCancelComponent", filePath: "src/app/pages/ride-cancel/ride-cancel.component.ts", lineNumber: 19 });
})();

// src/app/pages/ride-finish/ride-finish.component.ts
var _c02 = () => ["/pages/ride-rating"];
var _RideFinishComponent = class _RideFinishComponent {
  constructor(_bottomSheet) {
    this._bottomSheet = _bottomSheet;
  }
  close() {
    this._bottomSheet.dismiss();
  }
};
_RideFinishComponent.\u0275fac = function RideFinishComponent_Factory(t) {
  return new (t || _RideFinishComponent)(\u0275\u0275directiveInject(MatBottomSheetRef));
};
_RideFinishComponent.\u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _RideFinishComponent, selectors: [["app-ride-finish"]], standalone: true, features: [\u0275\u0275StandaloneFeature], decls: 18, vars: 2, consts: [[1, "flex", "h-auto", "flex-col", "bg-gray-100", "p-4", "text-black"], [1, "mb-4", "flex", "items-center", "justify-between", "rounded-md", "bg-white", "p-4", "shadow-sm"], [1, "flex", "cursor-pointer", "items-center"], [1, "mr-2", 3, "click"], ["xmlns", "http://www.w3.org/2000/svg", "fill", "none", "viewBox", "0 0 24 24", "stroke", "currentColor", 1, "h-6", "w-6", "text-black"], ["stroke-linecap", "round", "stroke-linejoin", "round", "stroke-width", "2", "d", "M15 19l-7-7 7-7"], [1, "text-lg", "font-medium"], [1, "text-gray-500"], [1, "mb-4", "flex-1", "rounded-md", "bg-white", "p-4", "shadow-sm"], [1, "mb-4", "text-lg", "font-medium"], [1, "flex", "items-center", "justify-center", "gap-2", "rounded-md", "bg-white", "p-4", "text-center", "shadow-sm"], [1, "flex-1", "rounded-md", "bg-blue-400", "p-2", "text-white", 3, "click"], ["tabindex", "", 1, "flex-1", "rounded-md", "bg-black", "p-2", "text-white", 3, "click", "keydown", "routerLink"]], template: function RideFinishComponent_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 0)(1, "div", 1)(2, "div", 2)(3, "button", 3);
    \u0275\u0275listener("click", function RideFinishComponent_Template_button_click_3_listener() {
      return ctx.close();
    });
    \u0275\u0275namespaceSVG();
    \u0275\u0275elementStart(4, "svg", 4);
    \u0275\u0275element(5, "path", 5);
    \u0275\u0275elementEnd()();
    \u0275\u0275namespaceHTML();
    \u0275\u0275elementStart(6, "span", 6);
    \u0275\u0275text(7, "Finalizar carona");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(8, "button", 7);
    \u0275\u0275text(9, "pular");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(10, "div", 8)(11, "h2", 9);
    \u0275\u0275text(12, "Deseja finalizar a corrida?");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(13, "div", 10)(14, "button", 11);
    \u0275\u0275listener("click", function RideFinishComponent_Template_button_click_14_listener() {
      return ctx.close();
    });
    \u0275\u0275text(15, " Cancelar ");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(16, "a", 12);
    \u0275\u0275listener("click", function RideFinishComponent_Template_a_click_16_listener() {
      return ctx.close();
    })("keydown", function RideFinishComponent_Template_a_keydown_16_listener() {
      return ctx.close();
    });
    \u0275\u0275text(17, " Finalizar ");
    \u0275\u0275elementEnd()()();
  }
  if (rf & 2) {
    \u0275\u0275advance(16);
    \u0275\u0275property("routerLink", \u0275\u0275pureFunction0(1, _c02));
  }
}, dependencies: [MatBottomSheetModule, RouterModule, RouterLink], styles: ["\n\n  .mat-bottom-sheet-container {\n  padding: unset;\n}\n/*# sourceMappingURL=ride-finish.component.css.map */"] });
var RideFinishComponent = _RideFinishComponent;
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(RideFinishComponent, { className: "RideFinishComponent", filePath: "src/app/pages/ride-finish/ride-finish.component.ts", lineNumber: 19 });
})();

// src/app/pages/ride-track/ride-track.component.ts
var _RideTrackComponent = class _RideTrackComponent {
  constructor(_bottomSheet) {
    this._bottomSheet = _bottomSheet;
  }
  cancelTrip() {
    this._bottomSheet.open(RideCancelComponent);
  }
  finishTrip() {
    this._bottomSheet.open(RideFinishComponent);
  }
};
_RideTrackComponent.\u0275fac = function RideTrackComponent_Factory(t) {
  return new (t || _RideTrackComponent)(\u0275\u0275directiveInject(MatBottomSheet));
};
_RideTrackComponent.\u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _RideTrackComponent, selectors: [["app-ride-track"]], standalone: true, features: [\u0275\u0275StandaloneFeature], decls: 11, vars: 0, consts: [[1, "flex", "h-screen", "flex-col", "rounded-md", "bg-gray-100", "p-4", "shadow-md"], [1, "mb-4", "flex", "items-center", "justify-between", "rounded-md", "bg-white", "p-4", "shadow-sm"], [1, "text-lg", "font-medium"], [1, "mb-4", "flex", "flex-1", "items-center", "justify-center", "rounded-md", "bg-white", "p-4", "shadow-sm"], ["src", "assets/navigation.gif", "alt", "Map", 1, "h-full", "w-full", "border", "object-cover"], [1, "flex", "justify-between"], [1, "rounded-full", "bg-blue-400", "px-4", "py-2", "font-medium", "text-white", 3, "click"], [1, "rounded-full", "bg-black", "px-4", "py-2", "font-medium", "text-white", 3, "click"]], template: function RideTrackComponent_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 0)(1, "div", 1)(2, "span", 2);
    \u0275\u0275text(3, "Acompanhamento da Viagem");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(4, "div", 3);
    \u0275\u0275element(5, "img", 4);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(6, "div", 5)(7, "button", 6);
    \u0275\u0275listener("click", function RideTrackComponent_Template_button_click_7_listener() {
      return ctx.cancelTrip();
    });
    \u0275\u0275text(8, " Cancelar ");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(9, "button", 7);
    \u0275\u0275listener("click", function RideTrackComponent_Template_button_click_9_listener() {
      return ctx.finishTrip();
    });
    \u0275\u0275text(10, " Finalizar Viagem ");
    \u0275\u0275elementEnd()()();
  }
}, dependencies: [MatBottomSheetModule], encapsulation: 2 });
var RideTrackComponent = _RideTrackComponent;
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(RideTrackComponent, { className: "RideTrackComponent", filePath: "src/app/pages/ride-track/ride-track.component.ts", lineNumber: 15 });
})();
export {
  RideTrackComponent
};
//# sourceMappingURL=chunk-5Z2P2A7W.js.map
