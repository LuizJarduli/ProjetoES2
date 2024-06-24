import {
  Router
} from "./chunk-BRA2YWNW.js";
import {
  ɵsetClassDebugInfo,
  ɵɵStandaloneFeature,
  ɵɵdefineComponent,
  ɵɵdirectiveInject,
  ɵɵelement,
  ɵɵelementEnd,
  ɵɵelementStart,
  ɵɵlistener,
  ɵɵtext
} from "./chunk-2MJKKCX3.js";

// src/app/pages/auth/setup-account/setup-account.component.ts
var _SetupAccountComponent = class _SetupAccountComponent {
  constructor(router) {
    this.router = router;
  }
  handleContinue() {
    this.router.navigate(["pages/ride-selection"]);
  }
};
_SetupAccountComponent.\u0275fac = function SetupAccountComponent_Factory(t) {
  return new (t || _SetupAccountComponent)(\u0275\u0275directiveInject(Router));
};
_SetupAccountComponent.\u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _SetupAccountComponent, selectors: [["app-setup-account"]], standalone: true, features: [\u0275\u0275StandaloneFeature], decls: 45, vars: 0, consts: [[1, "flex", "h-screen", "flex-col", "items-center", "justify-center", "bg-gray-100"], [1, "h-screen", "w-full", "rounded-lg", "bg-white", "p-8", "shadow-md"], [1, "mb-4", "text-2xl", "font-bold"], ["for", "phone", 1, "mb-2", "block", "text-sm"], [1, "mb-4", "flex"], ["name", "phone", 1, "block", "w-16", "rounded-l-lg", "border", "border-gray-300", "bg-gray-50", "p-2"], ["type", "text", "placeholder", "N\xFAmero", 1, "block", "w-full", "rounded-r-lg", "border", "border-gray-300", "p-2", "focus:outline-none"], [1, "mb-4", "w-full", "rounded-lg", "bg-gray-700", "p-2", "text-white", 3, "click", "keyup"], [1, "mb-4", "flex", "items-center"], [1, "flex-grow", "border-t", "border-gray-300"], [1, "px-2", "text-gray-500"], [1, "mb-2", "flex", "w-full", "items-center", "justify-center", "rounded-lg", "bg-gray-200", "p-2", 3, "click", "keyup"], [1, "material-symbols-outlined"], [1, "ml-2"], [1, "font-extrabold", "text-blue-400"], [1, "mb-4", "flex", "w-full", "items-center", "justify-center", "rounded-lg", "bg-gray-200", "p-2", 3, "click", "keyup"], [1, "font-extrabold"], [1, "mb-4", "text-center", "text-xs", "text-gray-500"], ["href", "#", 1, "underline"], [1, "text-center", "text-sm"], ["href", "#", 1, "text-blue-500"]], template: function SetupAccountComponent_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 0)(1, "div", 1)(2, "h1", 2);
    \u0275\u0275text(3, "Configure sua conta");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(4, "label", 3);
    \u0275\u0275text(5, "Digite seu n\xFAmero de telefone");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(6, "div", 4)(7, "select", 5)(8, "option");
    \u0275\u0275text(9, "+55");
    \u0275\u0275elementEnd()();
    \u0275\u0275element(10, "input", 6);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(11, "button", 7);
    \u0275\u0275listener("click", function SetupAccountComponent_Template_button_click_11_listener() {
      return ctx.handleContinue();
    })("keyup", function SetupAccountComponent_Template_button_keyup_11_listener() {
      return ctx.handleContinue();
    });
    \u0275\u0275text(12, " Continuar ");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(13, "div", 8);
    \u0275\u0275element(14, "div", 9);
    \u0275\u0275elementStart(15, "span", 10);
    \u0275\u0275text(16, "ou");
    \u0275\u0275elementEnd();
    \u0275\u0275element(17, "div", 9);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(18, "button", 11);
    \u0275\u0275listener("click", function SetupAccountComponent_Template_button_click_18_listener() {
      return ctx.handleContinue();
    })("keyup", function SetupAccountComponent_Template_button_keyup_18_listener() {
      return ctx.handleContinue();
    });
    \u0275\u0275elementStart(19, "span", 12);
    \u0275\u0275text(20, "ios");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(21, "span", 13);
    \u0275\u0275text(22, "Continue com Apple");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(23, "button", 11);
    \u0275\u0275listener("click", function SetupAccountComponent_Template_button_click_23_listener() {
      return ctx.handleContinue();
    })("keyup", function SetupAccountComponent_Template_button_keyup_23_listener() {
      return ctx.handleContinue();
    });
    \u0275\u0275elementStart(24, "span", 14);
    \u0275\u0275text(25, "f");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(26, "span", 13);
    \u0275\u0275text(27, "Continue com Facebook");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(28, "button", 15);
    \u0275\u0275listener("click", function SetupAccountComponent_Template_button_click_28_listener() {
      return ctx.handleContinue();
    })("keyup", function SetupAccountComponent_Template_button_keyup_28_listener() {
      return ctx.handleContinue();
    });
    \u0275\u0275elementStart(29, "span", 16);
    \u0275\u0275text(30, "g");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(31, "span", 13);
    \u0275\u0275text(32, "Continue com Google");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(33, "p", 17);
    \u0275\u0275text(34, " Ao se inscrever, voc\xEA concorda com nossos ");
    \u0275\u0275elementStart(35, "a", 18);
    \u0275\u0275text(36, "Termos de servi\xE7o");
    \u0275\u0275elementEnd();
    \u0275\u0275text(37, " e ");
    \u0275\u0275elementStart(38, "a", 18);
    \u0275\u0275text(39, "Pol\xEDticas de privacidade");
    \u0275\u0275elementEnd();
    \u0275\u0275text(40, ". ");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(41, "p", 19);
    \u0275\u0275text(42, " J\xE1 possui uma conta? ");
    \u0275\u0275elementStart(43, "a", 20);
    \u0275\u0275text(44, "Efetue o login");
    \u0275\u0275elementEnd()()()();
  }
}, encapsulation: 2 });
var SetupAccountComponent = _SetupAccountComponent;
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(SetupAccountComponent, { className: "SetupAccountComponent", filePath: "src/app/pages/auth/setup-account/setup-account.component.ts", lineNumber: 10 });
})();
export {
  SetupAccountComponent
};
//# sourceMappingURL=chunk-47QIAQXH.js.map
