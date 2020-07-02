function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"], {
  /***/
  "./$$_lazy_route_resource lazy recursive":
  /*!******************************************************!*\
    !*** ./$$_lazy_route_resource lazy namespace object ***!
    \******************************************************/

  /*! no static exports found */

  /***/
  function $$_lazy_route_resourceLazyRecursive(module, exports) {
    function webpackEmptyAsyncContext(req) {
      // Here Promise.resolve().then() is used instead of new Promise() to prevent
      // uncaught exception popping up in devtools
      return Promise.resolve().then(function () {
        var e = new Error("Cannot find module '" + req + "'");
        e.code = 'MODULE_NOT_FOUND';
        throw e;
      });
    }

    webpackEmptyAsyncContext.keys = function () {
      return [];
    };

    webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
    module.exports = webpackEmptyAsyncContext;
    webpackEmptyAsyncContext.id = "./$$_lazy_route_resource lazy recursive";
    /***/
  },

  /***/
  "./src/app/app-routing.module.ts":
  /*!***************************************!*\
    !*** ./src/app/app-routing.module.ts ***!
    \***************************************/

  /*! exports provided: AppRoutingModule */

  /***/
  function srcAppAppRoutingModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "AppRoutingModule", function () {
      return AppRoutingModule;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");

    var routes = [];

    var AppRoutingModule = function AppRoutingModule() {
      _classCallCheck(this, AppRoutingModule);
    };

    AppRoutingModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({
      type: AppRoutingModule
    });
    AppRoutingModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({
      factory: function AppRoutingModule_Factory(t) {
        return new (t || AppRoutingModule)();
      },
      imports: [[_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forRoot(routes)], _angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]]
    });

    (function () {
      (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](AppRoutingModule, {
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]]
      });
    })();
    /*@__PURE__*/


    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](AppRoutingModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"],
        args: [{
          imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forRoot(routes)],
          exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]]
        }]
      }], null, null);
    })();
    /***/

  },

  /***/
  "./src/app/app.component.ts":
  /*!**********************************!*\
    !*** ./src/app/app.component.ts ***!
    \**********************************/

  /*! exports provided: AppComponent */

  /***/
  function srcAppAppComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "AppComponent", function () {
      return AppComponent;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");

    var AppComponent = function AppComponent() {
      _classCallCheck(this, AppComponent);

      this.title = 'logiin';
      this.imageSrc = 'assets/images/google1.png';
      this.imageAlt = 'Google';
    };

    AppComponent.ɵfac = function AppComponent_Factory(t) {
      return new (t || AppComponent)();
    };

    AppComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
      type: AppComponent,
      selectors: [["app-root"]],
      decls: 53,
      vars: 0,
      consts: [["name", "viewport", "content", "width=device-width,initial-scale=1"], ["id", "head1"], ["id", "head2"], ["id", "google"], ["href", "https://www.gmail.com"], ["id", "googlee", "type", "button", 1, "btn", "btn-primary", "btn-lg"], [1, "fa", "fa-google"], ["id", "faceboook"], ["href", "https://www.facebook.com"], ["id", "facebook", "type", "button", 1, "btn", "btn-primary", "btn-lg"], [1, "fa", "fa-facebook"], ["id", "o"], [1, "form-group", "input-group"], [1, "dekha"], ["id", "user", 1, "fa", "fa-user"], ["id", "fname", "type", "text", "name", "Fname", "placeholder", "   Full name"], [1, "jak"], ["id", "email", 1, "fa", "fa-envelope"], ["id", "mail", "type", "text", "name", "email", "placeholder", "   Email Address"], ["id", "phone", 1, "fa", "fa-phone"], ["id", "Ph-number", "type", "text", "name", "phone", "placeholder", "   Phone Number"], ["id", "pass", 1, "fa", "fa-lock"], ["id", "Password", "type", "password", "name", "pass", "placeholder", "   Create Password"], ["id", "rpass", 1, "fa", "fa-lock"], ["id", "RePassword", "type", "password", "name", "rpass", "placeholder", "   Repeat Password"], [1, "lastbutton"], ["id", "cacc", "type", "submit", 1, "btn", "btn-primary", "btn-lg"], [1, "lasttext"], ["id", "lt"], ["href", "#"]],
      template: function AppComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "meta", 0);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "h2");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3, "Create Account");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "div", 2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "h5");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6, "Get started with your free account");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "div", 3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "a", 4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "button", 5);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](10, "i", 6);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](11, "Login via Gmail");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "div", 7);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "a", 8);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "button", 9);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](15, "i", 10);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](16, "Login via Facebook");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](17, "p", 11);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](18, "OR");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](19, "form");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](20, "div", 12);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](21, "div", 13);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](22, "span");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](23, "i", 14);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](24, "input", 15);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](25, "div", 12);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](26, "div", 16);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](27, "span");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](28, "i", 17);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](29, "input", 18);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](30, "div", 12);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](31, "div", 16);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](32, "span");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](33, "i", 19);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](34, "input", 20);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](35, "div", 12);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](36, "div", 16);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](37, "span");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](38, "i", 21);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](39, "input", 22);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](40, "div", 12);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](41, "div", 16);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](42, "span");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](43, "i", 23);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](44, "input", 24);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](45, "div", 25);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](46, "button", 26);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](47, "Create Account");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](48, "div", 27);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](49, "p", 28);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](50, "Have an account? ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](51, "a", 29);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](52, "Log In");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }
      },
      styles: ["#head1[_ngcontent-%COMP%]{\r\n    text-align: center;\r\n}\r\n#head2[_ngcontent-%COMP%]{\r\n    text-align: center;\r\n    margin-top: 18px;\r\n}\r\n#google[_ngcontent-%COMP%]{\r\n    text-align: center;\r\n    \r\n}\r\n#googlee[_ngcontent-%COMP%]{\r\n    width: 310px;\r\n    margin-top: 10px;\r\n    background-color: rgb(231, 80, 60);\r\n    border: none;\r\n    height:42px ;\r\n    font-size: medium;\r\n        \r\n}\r\n#googlee[_ngcontent-%COMP%]:hover{\r\n    background-color:rgb(245, 88, 67);\r\n    transform: scale(1.08);\r\n    box-shadow: 0 4px 12px rgba(0, 0, 0, 0.35);\r\n}\r\n#facebook[_ngcontent-%COMP%]{\r\n    width: 310px;\r\n    margin-top:10px;\r\n    background-color: #3B5998;\r\n    border: none;\r\n    height:42px ;\r\n    font-size: medium;\r\n        \r\n}\r\n#facebook[_ngcontent-%COMP%]:hover{\r\n    background-color: #2952aa;\r\n    transform: scale(1.08);\r\n    box-shadow: 0 4px 12px rgba(0, 0, 0, 0.35);\r\n}\r\n#faceboook[_ngcontent-%COMP%]{\r\n    text-align: center;\r\n    \r\n}\r\n#o[_ngcontent-%COMP%]{\r\n    font-family: 'Times New Roman', Times, serif;\r\n    text-align: center;\r\n    position: relative;\r\n    margin-top: 20px;\r\n    opacity: 50%;\r\n    font-weight: 550;\r\n}\r\n#o[_ngcontent-%COMP%]::before{\r\n    content: \"\";\r\n    display: block;\r\n    width: 122px;\r\n    height: 1.4px;\r\n    background: rgba(0, 0, 0, 0.3);\r\n    position: absolute;\r\n    left: 37.3%;\r\n    top: 50%;\r\n    text-align: center;\r\n    z-index: -2;\r\n    \r\n}\r\n#o[_ngcontent-%COMP%]::after{\r\n    content: \"\";\r\n    display: block;\r\n    width: 122px;\r\n    height: 1.4px;\r\n    background: rgba(0, 0, 0, 0.3);\r\n    position: absolute;\r\n    right: 37.3%;\r\n    top: 50%;\r\n    text-align: center;\r\n    z-index: -2;\r\n}\r\n#fname[_ngcontent-%COMP%]{\r\n    width: 280px;\r\n    height: 30px;\r\n    border:1px solid rgba(0, 0, 0, 0.3);\r\n         \r\n}\r\n#user[_ngcontent-%COMP%]{\r\n    height: 30px;\r\n    width: 30px;\r\n    left: 9px;\r\n    position: relative;\r\n    border: 1px solid rgba(0, 0, 0, 0.3);\r\n    font-size: 20px;\r\n    padding-top: 4px;\r\n    background: rgb(221, 221, 221);\r\n    \r\n}\r\n#mail[_ngcontent-%COMP%]{\r\n    width: 280px;\r\n    height: 30px;\r\n    border:1px solid rgba(0, 0, 0, 0.3);\r\n\r\n}\r\n#email[_ngcontent-%COMP%]{\r\n    height: 30px;\r\n    width: 30px;\r\n    left: 9px;\r\n    position: relative;\r\n    border: 1px solid rgba(0, 0, 0, 0.3);\r\n    font-size: 20px;\r\n    text-align: center;\r\n    padding-top: 4px;\r\n    background: rgb(221, 221, 221);\r\n    \r\n}\r\ni[_ngcontent-%COMP%]{\r\n    font-size: 16px;\r\n    text-align: center;\r\n    margin-right: 8px;\r\n}\r\n.jak[_ngcontent-%COMP%]{\r\n    margin-left: 36.6%;\r\n}\r\n.dekha[_ngcontent-%COMP%]{\r\n   \r\n    margin-left: 36.6%;\r\n    \r\n}\r\n#phone[_ngcontent-%COMP%]{\r\n    height: 30px;\r\n    width: 30px;\r\n    left: 9px;\r\n    position: relative;\r\n    border: 1px solid rgba(0, 0, 0, 0.3);\r\n    font-size: 20px;\r\n    text-align: center;\r\n    padding-top: 4px;\r\n    background: rgb(221, 221, 221);\r\n}\r\n#Ph-number[_ngcontent-%COMP%]{\r\n    width: 280px;\r\n    height: 30px;\r\n    border: 1px solid rgba(0, 0, 0, 0.3);\r\n}\r\n#pass[_ngcontent-%COMP%]{\r\n    height: 30px;\r\n    width: 30px;\r\n    left: 9px;\r\n    position: relative;\r\n    border: 1px solid rgba(0, 0, 0, 0.3);\r\n    font-size: 20px;\r\n    text-align: center;\r\n    padding-top: 4px;\r\n    background: rgb(221, 221, 221);\r\n}\r\n#Password[_ngcontent-%COMP%]{\r\n    width: 280px;\r\n    height: 30px;\r\n    border: 1px solid rgba(0, 0, 0, 0.3);\r\n}\r\n#rpass[_ngcontent-%COMP%]{\r\n    height: 30px;\r\n    width: 30px;\r\n    left: 9px;\r\n    position: relative;\r\n    border: 1px solid rgba(0, 0, 0, 0.3);\r\n    font-size: 20px;\r\n    text-align: center;\r\n    padding-top: 4px;\r\n    background: rgb(221, 221, 221);\r\n}\r\n#RePassword[_ngcontent-%COMP%]{\r\n    width: 280px;\r\n    height: 30px;\r\n    border: 1px solid rgba(0, 0, 0, 0.3);\r\n}\r\n#cacc[_ngcontent-%COMP%]{\r\n    height: 50px;\r\n    width: 310px;\r\n    background-color:#174cbe;\r\n    border: none;\r\n    margin-left: 0.2%; \r\n}\r\n.lastbutton[_ngcontent-%COMP%]{\r\n    text-align: center;\r\n}\r\n#cacc[_ngcontent-%COMP%]:hover{\r\n    background-color: #0a4ee2e8;\r\n    transform: scale(1.08);\r\n    box-shadow: 0 4px 12px rgba(0, 0, 0, 0.35);\r\n}\r\n#lt[_ngcontent-%COMP%]{\r\n    position: relative;\r\n    text-align: center;\r\n    margin-top: 25px;\r\n    font-family: Arial, Helvetica, sans-serif;\r\n    color: rgba(70, 70, 70, 0.966);\r\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvYXBwLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7SUFDSSxrQkFBa0I7QUFDdEI7QUFDQTtJQUNJLGtCQUFrQjtJQUNsQixnQkFBZ0I7QUFDcEI7QUFDQTtJQUNJLGtCQUFrQjs7QUFFdEI7QUFDQTtJQUNJLFlBQVk7SUFDWixnQkFBZ0I7SUFDaEIsa0NBQWtDO0lBQ2xDLFlBQVk7SUFDWixZQUFZO0lBQ1osaUJBQWlCOztBQUVyQjtBQUNBO0lBQ0ksaUNBQWlDO0lBQ2pDLHNCQUFzQjtJQUN0QiwwQ0FBMEM7QUFDOUM7QUFFQTtJQUNJLFlBQVk7SUFDWixlQUFlO0lBQ2YseUJBQXlCO0lBQ3pCLFlBQVk7SUFDWixZQUFZO0lBQ1osaUJBQWlCOztBQUVyQjtBQUNBO0lBQ0kseUJBQXlCO0lBQ3pCLHNCQUFzQjtJQUN0QiwwQ0FBMEM7QUFDOUM7QUFDQTtJQUNJLGtCQUFrQjs7QUFFdEI7QUFDQTtJQUNJLDRDQUE0QztJQUM1QyxrQkFBa0I7SUFDbEIsa0JBQWtCO0lBQ2xCLGdCQUFnQjtJQUNoQixZQUFZO0lBQ1osZ0JBQWdCO0FBQ3BCO0FBQ0E7SUFDSSxXQUFXO0lBQ1gsY0FBYztJQUNkLFlBQVk7SUFDWixhQUFhO0lBQ2IsOEJBQThCO0lBQzlCLGtCQUFrQjtJQUNsQixXQUFXO0lBQ1gsUUFBUTtJQUNSLGtCQUFrQjtJQUNsQixXQUFXOztBQUVmO0FBQ0E7SUFDSSxXQUFXO0lBQ1gsY0FBYztJQUNkLFlBQVk7SUFDWixhQUFhO0lBQ2IsOEJBQThCO0lBQzlCLGtCQUFrQjtJQUNsQixZQUFZO0lBQ1osUUFBUTtJQUNSLGtCQUFrQjtJQUNsQixXQUFXO0FBQ2Y7QUFFQTtJQUNJLFlBQVk7SUFDWixZQUFZO0lBQ1osbUNBQW1DOztBQUV2QztBQUNBO0lBQ0ksWUFBWTtJQUNaLFdBQVc7SUFDWCxTQUFTO0lBQ1Qsa0JBQWtCO0lBQ2xCLG9DQUFvQztJQUNwQyxlQUFlO0lBQ2YsZ0JBQWdCO0lBQ2hCLDhCQUE4Qjs7QUFFbEM7QUFDQTtJQUNJLFlBQVk7SUFDWixZQUFZO0lBQ1osbUNBQW1DOztBQUV2QztBQUNBO0lBQ0ksWUFBWTtJQUNaLFdBQVc7SUFDWCxTQUFTO0lBQ1Qsa0JBQWtCO0lBQ2xCLG9DQUFvQztJQUNwQyxlQUFlO0lBQ2Ysa0JBQWtCO0lBQ2xCLGdCQUFnQjtJQUNoQiw4QkFBOEI7O0FBRWxDO0FBQ0E7SUFDSSxlQUFlO0lBQ2Ysa0JBQWtCO0lBQ2xCLGlCQUFpQjtBQUNyQjtBQUNBO0lBQ0ksa0JBQWtCO0FBQ3RCO0FBRUE7O0lBRUksa0JBQWtCOztBQUV0QjtBQUNBO0lBQ0ksWUFBWTtJQUNaLFdBQVc7SUFDWCxTQUFTO0lBQ1Qsa0JBQWtCO0lBQ2xCLG9DQUFvQztJQUNwQyxlQUFlO0lBQ2Ysa0JBQWtCO0lBQ2xCLGdCQUFnQjtJQUNoQiw4QkFBOEI7QUFDbEM7QUFDQTtJQUNJLFlBQVk7SUFDWixZQUFZO0lBQ1osb0NBQW9DO0FBQ3hDO0FBQ0E7SUFDSSxZQUFZO0lBQ1osV0FBVztJQUNYLFNBQVM7SUFDVCxrQkFBa0I7SUFDbEIsb0NBQW9DO0lBQ3BDLGVBQWU7SUFDZixrQkFBa0I7SUFDbEIsZ0JBQWdCO0lBQ2hCLDhCQUE4QjtBQUNsQztBQUNBO0lBQ0ksWUFBWTtJQUNaLFlBQVk7SUFDWixvQ0FBb0M7QUFDeEM7QUFDQTtJQUNJLFlBQVk7SUFDWixXQUFXO0lBQ1gsU0FBUztJQUNULGtCQUFrQjtJQUNsQixvQ0FBb0M7SUFDcEMsZUFBZTtJQUNmLGtCQUFrQjtJQUNsQixnQkFBZ0I7SUFDaEIsOEJBQThCO0FBQ2xDO0FBQ0E7SUFDSSxZQUFZO0lBQ1osWUFBWTtJQUNaLG9DQUFvQztBQUN4QztBQUNBO0lBQ0ksWUFBWTtJQUNaLFlBQVk7SUFDWix3QkFBd0I7SUFDeEIsWUFBWTtJQUNaLGlCQUFpQjtBQUNyQjtBQUNBO0lBQ0ksa0JBQWtCO0FBQ3RCO0FBQ0E7SUFDSSwyQkFBMkI7SUFDM0Isc0JBQXNCO0lBQ3RCLDBDQUEwQztBQUM5QztBQUNBO0lBQ0ksa0JBQWtCO0lBQ2xCLGtCQUFrQjtJQUNsQixnQkFBZ0I7SUFDaEIseUNBQXlDO0lBQ3pDLDhCQUE4QjtBQUNsQyIsImZpbGUiOiJzcmMvYXBwL2FwcC5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiI2hlYWQxe1xyXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG59XHJcbiNoZWFkMntcclxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICAgIG1hcmdpbi10b3A6IDE4cHg7XHJcbn1cclxuI2dvb2dsZXtcclxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICAgIFxyXG59XHJcbiNnb29nbGVle1xyXG4gICAgd2lkdGg6IDMxMHB4O1xyXG4gICAgbWFyZ2luLXRvcDogMTBweDtcclxuICAgIGJhY2tncm91bmQtY29sb3I6IHJnYigyMzEsIDgwLCA2MCk7XHJcbiAgICBib3JkZXI6IG5vbmU7XHJcbiAgICBoZWlnaHQ6NDJweCA7XHJcbiAgICBmb250LXNpemU6IG1lZGl1bTtcclxuICAgICAgICBcclxufVxyXG4jZ29vZ2xlZTpob3ZlcntcclxuICAgIGJhY2tncm91bmQtY29sb3I6cmdiKDI0NSwgODgsIDY3KTtcclxuICAgIHRyYW5zZm9ybTogc2NhbGUoMS4wOCk7XHJcbiAgICBib3gtc2hhZG93OiAwIDRweCAxMnB4IHJnYmEoMCwgMCwgMCwgMC4zNSk7XHJcbn1cclxuXHJcbiNmYWNlYm9va3tcclxuICAgIHdpZHRoOiAzMTBweDtcclxuICAgIG1hcmdpbi10b3A6MTBweDtcclxuICAgIGJhY2tncm91bmQtY29sb3I6ICMzQjU5OTg7XHJcbiAgICBib3JkZXI6IG5vbmU7XHJcbiAgICBoZWlnaHQ6NDJweCA7XHJcbiAgICBmb250LXNpemU6IG1lZGl1bTtcclxuICAgICAgICBcclxufVxyXG4jZmFjZWJvb2s6aG92ZXJ7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjMjk1MmFhO1xyXG4gICAgdHJhbnNmb3JtOiBzY2FsZSgxLjA4KTtcclxuICAgIGJveC1zaGFkb3c6IDAgNHB4IDEycHggcmdiYSgwLCAwLCAwLCAwLjM1KTtcclxufVxyXG4jZmFjZWJvb29re1xyXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gICAgXHJcbn1cclxuI297XHJcbiAgICBmb250LWZhbWlseTogJ1RpbWVzIE5ldyBSb21hbicsIFRpbWVzLCBzZXJpZjtcclxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcclxuICAgIG1hcmdpbi10b3A6IDIwcHg7XHJcbiAgICBvcGFjaXR5OiA1MCU7XHJcbiAgICBmb250LXdlaWdodDogNTUwO1xyXG59XHJcbiNvOjpiZWZvcmV7XHJcbiAgICBjb250ZW50OiBcIlwiO1xyXG4gICAgZGlzcGxheTogYmxvY2s7XHJcbiAgICB3aWR0aDogMTIycHg7XHJcbiAgICBoZWlnaHQ6IDEuNHB4O1xyXG4gICAgYmFja2dyb3VuZDogcmdiYSgwLCAwLCAwLCAwLjMpO1xyXG4gICAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gICAgbGVmdDogMzcuMyU7XHJcbiAgICB0b3A6IDUwJTtcclxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICAgIHotaW5kZXg6IC0yO1xyXG4gICAgXHJcbn1cclxuI286OmFmdGVye1xyXG4gICAgY29udGVudDogXCJcIjtcclxuICAgIGRpc3BsYXk6IGJsb2NrO1xyXG4gICAgd2lkdGg6IDEyMnB4O1xyXG4gICAgaGVpZ2h0OiAxLjRweDtcclxuICAgIGJhY2tncm91bmQ6IHJnYmEoMCwgMCwgMCwgMC4zKTtcclxuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICAgIHJpZ2h0OiAzNy4zJTtcclxuICAgIHRvcDogNTAlO1xyXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gICAgei1pbmRleDogLTI7XHJcbn1cclxuXHJcbiNmbmFtZXtcclxuICAgIHdpZHRoOiAyODBweDtcclxuICAgIGhlaWdodDogMzBweDtcclxuICAgIGJvcmRlcjoxcHggc29saWQgcmdiYSgwLCAwLCAwLCAwLjMpO1xyXG4gICAgICAgICBcclxufVxyXG4jdXNlcntcclxuICAgIGhlaWdodDogMzBweDtcclxuICAgIHdpZHRoOiAzMHB4O1xyXG4gICAgbGVmdDogOXB4O1xyXG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xyXG4gICAgYm9yZGVyOiAxcHggc29saWQgcmdiYSgwLCAwLCAwLCAwLjMpO1xyXG4gICAgZm9udC1zaXplOiAyMHB4O1xyXG4gICAgcGFkZGluZy10b3A6IDRweDtcclxuICAgIGJhY2tncm91bmQ6IHJnYigyMjEsIDIyMSwgMjIxKTtcclxuICAgIFxyXG59XHJcbiNtYWlse1xyXG4gICAgd2lkdGg6IDI4MHB4O1xyXG4gICAgaGVpZ2h0OiAzMHB4O1xyXG4gICAgYm9yZGVyOjFweCBzb2xpZCByZ2JhKDAsIDAsIDAsIDAuMyk7XHJcblxyXG59XHJcbiNlbWFpbHtcclxuICAgIGhlaWdodDogMzBweDtcclxuICAgIHdpZHRoOiAzMHB4O1xyXG4gICAgbGVmdDogOXB4O1xyXG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xyXG4gICAgYm9yZGVyOiAxcHggc29saWQgcmdiYSgwLCAwLCAwLCAwLjMpO1xyXG4gICAgZm9udC1zaXplOiAyMHB4O1xyXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gICAgcGFkZGluZy10b3A6IDRweDtcclxuICAgIGJhY2tncm91bmQ6IHJnYigyMjEsIDIyMSwgMjIxKTtcclxuICAgIFxyXG59XHJcbml7XHJcbiAgICBmb250LXNpemU6IDE2cHg7XHJcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgICBtYXJnaW4tcmlnaHQ6IDhweDtcclxufVxyXG4uamFre1xyXG4gICAgbWFyZ2luLWxlZnQ6IDM2LjYlO1xyXG59XHJcblxyXG4uZGVraGF7XHJcbiAgIFxyXG4gICAgbWFyZ2luLWxlZnQ6IDM2LjYlO1xyXG4gICAgXHJcbn1cclxuI3Bob25le1xyXG4gICAgaGVpZ2h0OiAzMHB4O1xyXG4gICAgd2lkdGg6IDMwcHg7XHJcbiAgICBsZWZ0OiA5cHg7XHJcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XHJcbiAgICBib3JkZXI6IDFweCBzb2xpZCByZ2JhKDAsIDAsIDAsIDAuMyk7XHJcbiAgICBmb250LXNpemU6IDIwcHg7XHJcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgICBwYWRkaW5nLXRvcDogNHB4O1xyXG4gICAgYmFja2dyb3VuZDogcmdiKDIyMSwgMjIxLCAyMjEpO1xyXG59XHJcbiNQaC1udW1iZXJ7XHJcbiAgICB3aWR0aDogMjgwcHg7XHJcbiAgICBoZWlnaHQ6IDMwcHg7XHJcbiAgICBib3JkZXI6IDFweCBzb2xpZCByZ2JhKDAsIDAsIDAsIDAuMyk7XHJcbn1cclxuI3Bhc3N7XHJcbiAgICBoZWlnaHQ6IDMwcHg7XHJcbiAgICB3aWR0aDogMzBweDtcclxuICAgIGxlZnQ6IDlweDtcclxuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcclxuICAgIGJvcmRlcjogMXB4IHNvbGlkIHJnYmEoMCwgMCwgMCwgMC4zKTtcclxuICAgIGZvbnQtc2l6ZTogMjBweDtcclxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICAgIHBhZGRpbmctdG9wOiA0cHg7XHJcbiAgICBiYWNrZ3JvdW5kOiByZ2IoMjIxLCAyMjEsIDIyMSk7XHJcbn1cclxuI1Bhc3N3b3Jke1xyXG4gICAgd2lkdGg6IDI4MHB4O1xyXG4gICAgaGVpZ2h0OiAzMHB4O1xyXG4gICAgYm9yZGVyOiAxcHggc29saWQgcmdiYSgwLCAwLCAwLCAwLjMpO1xyXG59XHJcbiNycGFzc3tcclxuICAgIGhlaWdodDogMzBweDtcclxuICAgIHdpZHRoOiAzMHB4O1xyXG4gICAgbGVmdDogOXB4O1xyXG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xyXG4gICAgYm9yZGVyOiAxcHggc29saWQgcmdiYSgwLCAwLCAwLCAwLjMpO1xyXG4gICAgZm9udC1zaXplOiAyMHB4O1xyXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gICAgcGFkZGluZy10b3A6IDRweDtcclxuICAgIGJhY2tncm91bmQ6IHJnYigyMjEsIDIyMSwgMjIxKTtcclxufVxyXG4jUmVQYXNzd29yZHtcclxuICAgIHdpZHRoOiAyODBweDtcclxuICAgIGhlaWdodDogMzBweDtcclxuICAgIGJvcmRlcjogMXB4IHNvbGlkIHJnYmEoMCwgMCwgMCwgMC4zKTtcclxufVxyXG4jY2FjY3tcclxuICAgIGhlaWdodDogNTBweDtcclxuICAgIHdpZHRoOiAzMTBweDtcclxuICAgIGJhY2tncm91bmQtY29sb3I6IzE3NGNiZTtcclxuICAgIGJvcmRlcjogbm9uZTtcclxuICAgIG1hcmdpbi1sZWZ0OiAwLjIlOyBcclxufVxyXG4ubGFzdGJ1dHRvbntcclxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxufVxyXG4jY2FjYzpob3ZlcntcclxuICAgIGJhY2tncm91bmQtY29sb3I6ICMwYTRlZTJlODtcclxuICAgIHRyYW5zZm9ybTogc2NhbGUoMS4wOCk7XHJcbiAgICBib3gtc2hhZG93OiAwIDRweCAxMnB4IHJnYmEoMCwgMCwgMCwgMC4zNSk7XHJcbn1cclxuI2x0e1xyXG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xyXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gICAgbWFyZ2luLXRvcDogMjVweDtcclxuICAgIGZvbnQtZmFtaWx5OiBBcmlhbCwgSGVsdmV0aWNhLCBzYW5zLXNlcmlmO1xyXG4gICAgY29sb3I6IHJnYmEoNzAsIDcwLCA3MCwgMC45NjYpO1xyXG59XHJcbiJdfQ== */"]
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](AppComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
          selector: 'app-root',
          templateUrl: './app.component.html',
          styleUrls: ['./app.component.css']
        }]
      }], null, null);
    })();
    /***/

  },

  /***/
  "./src/app/app.module.ts":
  /*!*******************************!*\
    !*** ./src/app/app.module.ts ***!
    \*******************************/

  /*! exports provided: AppModule */

  /***/
  function srcAppAppModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "AppModule", function () {
      return AppModule;
    });
    /* harmony import */


    var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/platform-browser */
    "./node_modules/@angular/platform-browser/__ivy_ngcc__/fesm2015/platform-browser.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _app_routing_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! ./app-routing.module */
    "./src/app/app-routing.module.ts");
    /* harmony import */


    var _app_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ./app.component */
    "./src/app/app.component.ts");

    var AppModule = function AppModule() {
      _classCallCheck(this, AppModule);
    };

    AppModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineNgModule"]({
      type: AppModule,
      bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_3__["AppComponent"]]
    });
    AppModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjector"]({
      factory: function AppModule_Factory(t) {
        return new (t || AppModule)();
      },
      providers: [],
      imports: [[_angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"], _app_routing_module__WEBPACK_IMPORTED_MODULE_2__["AppRoutingModule"]]]
    });

    (function () {
      (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵsetNgModuleScope"](AppModule, {
        declarations: [_app_component__WEBPACK_IMPORTED_MODULE_3__["AppComponent"]],
        imports: [_angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"], _app_routing_module__WEBPACK_IMPORTED_MODULE_2__["AppRoutingModule"]]
      });
    })();
    /*@__PURE__*/


    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](AppModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"],
        args: [{
          declarations: [_app_component__WEBPACK_IMPORTED_MODULE_3__["AppComponent"]],
          imports: [_angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"], _app_routing_module__WEBPACK_IMPORTED_MODULE_2__["AppRoutingModule"]],
          providers: [],
          bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_3__["AppComponent"]]
        }]
      }], null, null);
    })();
    /***/

  },

  /***/
  "./src/environments/environment.ts":
  /*!*****************************************!*\
    !*** ./src/environments/environment.ts ***!
    \*****************************************/

  /*! exports provided: environment */

  /***/
  function srcEnvironmentsEnvironmentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "environment", function () {
      return environment;
    }); // This file can be replaced during build by using the `fileReplacements` array.
    // `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
    // The list of file replacements can be found in `angular.json`.


    var environment = {
      production: false
    };
    /*
     * For easier debugging in development mode, you can import the following file
     * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
     *
     * This import should be commented out in production mode because it will have a negative impact
     * on performance if an error is thrown.
     */
    // import 'zone.js/dist/zone-error';  // Included with Angular CLI.

    /***/
  },

  /***/
  "./src/main.ts":
  /*!*********************!*\
    !*** ./src/main.ts ***!
    \*********************/

  /*! no exports provided */

  /***/
  function srcMainTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _environments_environment__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! ./environments/environment */
    "./src/environments/environment.ts");
    /* harmony import */


    var _app_app_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! ./app/app.module */
    "./src/app/app.module.ts");
    /* harmony import */


    var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! @angular/platform-browser */
    "./node_modules/@angular/platform-browser/__ivy_ngcc__/fesm2015/platform-browser.js");

    if (_environments_environment__WEBPACK_IMPORTED_MODULE_1__["environment"].production) {
      Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["enableProdMode"])();
    }

    _angular_platform_browser__WEBPACK_IMPORTED_MODULE_3__["platformBrowser"]().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_2__["AppModule"])["catch"](function (err) {
      return console.error(err);
    });
    /***/

  },

  /***/
  0:
  /*!***************************!*\
    !*** multi ./src/main.ts ***!
    \***************************/

  /*! no static exports found */

  /***/
  function _(module, exports, __webpack_require__) {
    module.exports = __webpack_require__(
    /*! C:\Users\Kamal\Desktop\login2\logiiin\src\main.ts */
    "./src/main.ts");
    /***/
  }
}, [[0, "runtime", "vendor"]]]);
//# sourceMappingURL=main-es5.js.map