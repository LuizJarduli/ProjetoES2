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

// src/app/pages/auth/login/login.component.ts
var _LoginComponent = class _LoginComponent {
  constructor(router) {
    this.router = router;
  }
  handleSubmit() {
    this.router.navigate(["pages/user-type"]);
  }
  handleSignUp() {
    this.router.navigate(["auth/setup-account"]);
  }
};
_LoginComponent.\u0275fac = function LoginComponent_Factory(t) {
  return new (t || _LoginComponent)(\u0275\u0275directiveInject(Router));
};
_LoginComponent.\u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _LoginComponent, selectors: [["app-login"]], standalone: true, features: [\u0275\u0275StandaloneFeature], decls: 28, vars: 0, consts: [[1, "relative", "flex", "h-full", "w-full", "flex-col"], [1, "w-full"], ["src", "/assets/login-banner.png", "alt", "Logo fatecaronas"], [1, "flex", "w-full", "flex-1", "flex-col", "p-5"], [1, "flex-[2]"], [1, "text-2xl", "font-bold"], [1, "mb-3", "text-lg", "font-normal"], ["for", "email", 1, "font-bold", "text-gray-700"], [1, "relative", "flex", "items-center", "justify-start", "gap-2", "rounded-md", "bg-gray-300"], [1, "material-symbols-outlined", "ml-2"], ["name", "email", "type", "text", "placeholder", "Insira seu email", 1, "h-full", "w-full", "appearance-none", "rounded-md", "bg-inherit", "p-3", "outline-none"], ["for", "senha", 1, "font-bold", "text-gray-700"], ["name", "senha", "type", "password", "placeholder", "Insira sua senha", 1, "h-full", "w-full", "appearance-none", "rounded-md", "bg-inherit", "p-3", "outline-none"], [1, "m-0", "mt-1", "text-right", "text-xs"], [1, "w-full", "rounded-md", "bg-black", "p-3", "font-bold", "text-white", 3, "click"], [1, "m-0", "mt-1", "cursor-pointer", "appearance-none", "text-right", "text-xs", 3, "click"]], template: function LoginComponent_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "section", 0)(1, "header", 1);
    \u0275\u0275element(2, "img", 2);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "div", 3)(4, "div", 4)(5, "h1", 5);
    \u0275\u0275text(6, "Ol\xE1!");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(7, "h3", 6);
    \u0275\u0275text(8, "Bem vindo de volta");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(9, "label", 7);
    \u0275\u0275text(10, "Email");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(11, "div", 8)(12, "span", 9);
    \u0275\u0275text(13, " mail ");
    \u0275\u0275elementEnd();
    \u0275\u0275element(14, "input", 10);
    \u0275\u0275elementEnd();
    \u0275\u0275element(15, "br");
    \u0275\u0275elementStart(16, "label", 11);
    \u0275\u0275text(17, "Senha");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(18, "div", 8)(19, "span", 9);
    \u0275\u0275text(20, " lock ");
    \u0275\u0275elementEnd();
    \u0275\u0275element(21, "input", 12);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(22, "p", 13);
    \u0275\u0275text(23, "Esqueci minha senha");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(24, "button", 14);
    \u0275\u0275listener("click", function LoginComponent_Template_button_click_24_listener() {
      return ctx.handleSubmit();
    });
    \u0275\u0275text(25, " Entrar ");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(26, "button", 15);
    \u0275\u0275listener("click", function LoginComponent_Template_button_click_26_listener() {
      return ctx.handleSignUp();
    });
    \u0275\u0275text(27, " N\xE3o possui uma conta? Inscreva-se ");
    \u0275\u0275elementEnd()()();
  }
}, encapsulation: 2 });
var LoginComponent = _LoginComponent;
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(LoginComponent, { className: "LoginComponent", filePath: "src/app/pages/auth/login/login.component.ts", lineNumber: 10 });
})();
export {
  LoginComponent
};
//# sourceMappingURL=chunk-Z4OWP5CM.js.map
