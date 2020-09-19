(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"],{

/***/ "./$$_lazy_route_resource lazy recursive":
/*!******************************************************!*\
  !*** ./$$_lazy_route_resource lazy namespace object ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncaught exception popping up in devtools
	return Promise.resolve().then(function() {
		var e = new Error("Cannot find module '" + req + "'");
		e.code = 'MODULE_NOT_FOUND';
		throw e;
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = "./$$_lazy_route_resource lazy recursive";

/***/ }),

/***/ "./src/app/app-routing/app-routing.module.ts":
/*!***************************************************!*\
  !*** ./src/app/app-routing/app-routing.module.ts ***!
  \***************************************************/
/*! exports provided: AppRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppRoutingModule", function() { return AppRoutingModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
/* harmony import */ var _landing_page_landing_page_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../landing-page/landing-page.component */ "./src/app/landing-page/landing-page.component.ts");
/* harmony import */ var _program_generator_program_generator_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../program-generator/program-generator.component */ "./src/app/program-generator/program-generator.component.ts");
/* harmony import */ var _program_page_program_page_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../program-page/program-page.component */ "./src/app/program-page/program-page.component.ts");
/* harmony import */ var _reference_page_reference_page_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../reference-page/reference-page.component */ "./src/app/reference-page/reference-page.component.ts");









const routes = [
    { path: 'athlete-information', component: _program_generator_program_generator_component__WEBPACK_IMPORTED_MODULE_4__["ProgramGeneratorComponent"] },
    { path: '', component: _landing_page_landing_page_component__WEBPACK_IMPORTED_MODULE_3__["LandingPageComponent"] },
    { path: 'training-program', component: _program_page_program_page_component__WEBPACK_IMPORTED_MODULE_5__["ProgramPageComponent"] },
    { path: 'reference-page/:age/:bodyweight/:trainingStyle/:availability/:squat1RM/:bench1RM/:deadlift1RM', component: _reference_page_reference_page_component__WEBPACK_IMPORTED_MODULE_6__["ReferencePageComponent"] }
];
class AppRoutingModule {
}
AppRoutingModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({ type: AppRoutingModule });
AppRoutingModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({ factory: function AppRoutingModule_Factory(t) { return new (t || AppRoutingModule)(); }, imports: [[
            _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
            _angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forRoot(routes)
        ], _angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](AppRoutingModule, { imports: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"], _angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]], exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]] }); })();
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](AppRoutingModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"],
        args: [{
                declarations: [],
                imports: [
                    _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
                    _angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forRoot(routes)
                ],
                exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
            }]
    }], null, null); })();


/***/ }),

/***/ "./src/app/app.component.ts":
/*!**********************************!*\
  !*** ./src/app/app.component.ts ***!
  \**********************************/
/*! exports provided: AppComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppComponent", function() { return AppComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/flex-layout/flex */ "./node_modules/@angular/flex-layout/__ivy_ngcc__/esm2015/flex.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
/* harmony import */ var _angular_flex_layout_extended__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/flex-layout/extended */ "./node_modules/@angular/flex-layout/__ivy_ngcc__/esm2015/extended.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");






const _c0 = function () { return { "background-color": "black" }; };
const _c1 = function () { return { "font-weight": "normal", "color": "white" }; };
class AppComponent {
    constructor() {
        this.title = 'atlasClient';
    }
}
AppComponent.ɵfac = function AppComponent_Factory(t) { return new (t || AppComponent)(); };
AppComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: AppComponent, selectors: [["app-root"]], decls: 4, vars: 4, consts: [["fxLayout", "row", "fxLayoutAlign", "center center", 3, "ngStyle"], [3, "ngStyle"]], template: function AppComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "h2", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, "Atlas Program Generator");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](3, "router-outlet");
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngStyle", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction0"](2, _c0));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngStyle", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction0"](3, _c1));
    } }, directives: [_angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_1__["DefaultLayoutDirective"], _angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_1__["DefaultLayoutAlignDirective"], _angular_common__WEBPACK_IMPORTED_MODULE_2__["NgStyle"], _angular_flex_layout_extended__WEBPACK_IMPORTED_MODULE_3__["DefaultStyleDirective"], _angular_router__WEBPACK_IMPORTED_MODULE_4__["RouterOutlet"]], styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiIuLi9zcmMvYXBwL2FwcC5jb21wb25lbnQuY3NzIn0= */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](AppComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-root',
                templateUrl: './app.component.html',
                styleUrls: ['./app.component.css']
            }]
    }], null, null); })();


/***/ }),

/***/ "./src/app/app.module.ts":
/*!*******************************!*\
  !*** ./src/app/app.module.ts ***!
  \*******************************/
/*! exports provided: AppModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppModule", function() { return AppModule; });
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/__ivy_ngcc__/fesm2015/platform-browser.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app.component */ "./src/app/app.component.ts");
/* harmony import */ var _landing_page_landing_page_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./landing-page/landing-page.component */ "./src/app/landing-page/landing-page.component.ts");
/* harmony import */ var _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/platform-browser/animations */ "./node_modules/@angular/platform-browser/__ivy_ngcc__/fesm2015/animations.js");
/* harmony import */ var _angular_flex_layout__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/flex-layout */ "./node_modules/@angular/flex-layout/__ivy_ngcc__/esm2015/flex-layout.js");
/* harmony import */ var _angular_material_card__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/material/card */ "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/card.js");
/* harmony import */ var _angular_material_button__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/material/button */ "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/button.js");
/* harmony import */ var _program_generator_program_generator_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./program-generator/program-generator.component */ "./src/app/program-generator/program-generator.component.ts");
/* harmony import */ var _app_routing_app_routing_module__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./app-routing/app-routing.module */ "./src/app/app-routing/app-routing.module.ts");
/* harmony import */ var _angular_material_form_field__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/material/form-field */ "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/form-field.js");
/* harmony import */ var _angular_material_select__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @angular/material/select */ "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/select.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");
/* harmony import */ var _angular_material_input__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @angular/material/input */ "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/input.js");
/* harmony import */ var _program_page_program_page_component__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./program-page/program-page.component */ "./src/app/program-page/program-page.component.ts");
/* harmony import */ var _angular_material_table__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! @angular/material/table */ "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/table.js");
/* harmony import */ var _reference_page_reference_page_component__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ./reference-page/reference-page.component */ "./src/app/reference-page/reference-page.component.ts");
/* harmony import */ var _angular_cdk_clipboard__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! @angular/cdk/clipboard */ "./node_modules/@angular/cdk/__ivy_ngcc__/fesm2015/clipboard.js");
/* harmony import */ var _angular_material_icon__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! @angular/material/icon */ "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/icon.js");
/* harmony import */ var _angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! @angular/material/snack-bar */ "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/snack-bar.js");





















class AppModule {
}
AppModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineNgModule"]({ type: AppModule, bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_2__["AppComponent"]] });
AppModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjector"]({ factory: function AppModule_Factory(t) { return new (t || AppModule)(); }, providers: [], imports: [[
            _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"],
            _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_4__["NoopAnimationsModule"],
            _angular_flex_layout__WEBPACK_IMPORTED_MODULE_5__["FlexLayoutModule"],
            _angular_material_card__WEBPACK_IMPORTED_MODULE_6__["MatCardModule"],
            _angular_material_button__WEBPACK_IMPORTED_MODULE_7__["MatButtonModule"],
            _app_routing_app_routing_module__WEBPACK_IMPORTED_MODULE_9__["AppRoutingModule"],
            _angular_material_form_field__WEBPACK_IMPORTED_MODULE_10__["MatFormFieldModule"],
            _angular_material_select__WEBPACK_IMPORTED_MODULE_11__["MatSelectModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_12__["FormsModule"],
            _angular_material_input__WEBPACK_IMPORTED_MODULE_13__["MatInputModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_12__["ReactiveFormsModule"],
            _angular_material_table__WEBPACK_IMPORTED_MODULE_15__["MatTableModule"],
            _angular_cdk_clipboard__WEBPACK_IMPORTED_MODULE_17__["ClipboardModule"],
            _angular_material_icon__WEBPACK_IMPORTED_MODULE_18__["MatIconModule"],
            _angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_19__["MatSnackBarModule"]
        ]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵsetNgModuleScope"](AppModule, { declarations: [_app_component__WEBPACK_IMPORTED_MODULE_2__["AppComponent"],
        _landing_page_landing_page_component__WEBPACK_IMPORTED_MODULE_3__["LandingPageComponent"],
        _program_generator_program_generator_component__WEBPACK_IMPORTED_MODULE_8__["ProgramGeneratorComponent"],
        _program_page_program_page_component__WEBPACK_IMPORTED_MODULE_14__["ProgramPageComponent"],
        _reference_page_reference_page_component__WEBPACK_IMPORTED_MODULE_16__["ReferencePageComponent"]], imports: [_angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"],
        _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_4__["NoopAnimationsModule"],
        _angular_flex_layout__WEBPACK_IMPORTED_MODULE_5__["FlexLayoutModule"],
        _angular_material_card__WEBPACK_IMPORTED_MODULE_6__["MatCardModule"],
        _angular_material_button__WEBPACK_IMPORTED_MODULE_7__["MatButtonModule"],
        _app_routing_app_routing_module__WEBPACK_IMPORTED_MODULE_9__["AppRoutingModule"],
        _angular_material_form_field__WEBPACK_IMPORTED_MODULE_10__["MatFormFieldModule"],
        _angular_material_select__WEBPACK_IMPORTED_MODULE_11__["MatSelectModule"],
        _angular_forms__WEBPACK_IMPORTED_MODULE_12__["FormsModule"],
        _angular_material_input__WEBPACK_IMPORTED_MODULE_13__["MatInputModule"],
        _angular_forms__WEBPACK_IMPORTED_MODULE_12__["ReactiveFormsModule"],
        _angular_material_table__WEBPACK_IMPORTED_MODULE_15__["MatTableModule"],
        _angular_cdk_clipboard__WEBPACK_IMPORTED_MODULE_17__["ClipboardModule"],
        _angular_material_icon__WEBPACK_IMPORTED_MODULE_18__["MatIconModule"],
        _angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_19__["MatSnackBarModule"]] }); })();
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](AppModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"],
        args: [{
                declarations: [
                    _app_component__WEBPACK_IMPORTED_MODULE_2__["AppComponent"],
                    _landing_page_landing_page_component__WEBPACK_IMPORTED_MODULE_3__["LandingPageComponent"],
                    _program_generator_program_generator_component__WEBPACK_IMPORTED_MODULE_8__["ProgramGeneratorComponent"],
                    _program_page_program_page_component__WEBPACK_IMPORTED_MODULE_14__["ProgramPageComponent"],
                    _reference_page_reference_page_component__WEBPACK_IMPORTED_MODULE_16__["ReferencePageComponent"]
                ],
                imports: [
                    _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"],
                    _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_4__["NoopAnimationsModule"],
                    _angular_flex_layout__WEBPACK_IMPORTED_MODULE_5__["FlexLayoutModule"],
                    _angular_material_card__WEBPACK_IMPORTED_MODULE_6__["MatCardModule"],
                    _angular_material_button__WEBPACK_IMPORTED_MODULE_7__["MatButtonModule"],
                    _app_routing_app_routing_module__WEBPACK_IMPORTED_MODULE_9__["AppRoutingModule"],
                    _angular_material_form_field__WEBPACK_IMPORTED_MODULE_10__["MatFormFieldModule"],
                    _angular_material_select__WEBPACK_IMPORTED_MODULE_11__["MatSelectModule"],
                    _angular_forms__WEBPACK_IMPORTED_MODULE_12__["FormsModule"],
                    _angular_material_input__WEBPACK_IMPORTED_MODULE_13__["MatInputModule"],
                    _angular_forms__WEBPACK_IMPORTED_MODULE_12__["ReactiveFormsModule"],
                    _angular_material_table__WEBPACK_IMPORTED_MODULE_15__["MatTableModule"],
                    _angular_cdk_clipboard__WEBPACK_IMPORTED_MODULE_17__["ClipboardModule"],
                    _angular_material_icon__WEBPACK_IMPORTED_MODULE_18__["MatIconModule"],
                    _angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_19__["MatSnackBarModule"]
                ],
                providers: [],
                bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_2__["AppComponent"]]
            }]
    }], null, null); })();


/***/ }),

/***/ "./src/app/landing-page/landing-page.component.ts":
/*!********************************************************!*\
  !*** ./src/app/landing-page/landing-page.component.ts ***!
  \********************************************************/
/*! exports provided: LandingPageComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LandingPageComponent", function() { return LandingPageComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/flex-layout/flex */ "./node_modules/@angular/flex-layout/__ivy_ngcc__/esm2015/flex.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
/* harmony import */ var _angular_flex_layout_extended__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/flex-layout/extended */ "./node_modules/@angular/flex-layout/__ivy_ngcc__/esm2015/extended.js");
/* harmony import */ var _angular_material_button__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/material/button */ "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/button.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
/* harmony import */ var _angular_material_card__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/material/card */ "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/card.js");








const _c0 = function () { return { "margin-left": "10%", "margin-right": "10%", "margin-top": "60px", "margin-bottom": "80px" }; };
const _c1 = function () { return { "background-color": "#f1f1f1", "padding-left": "60px", "padding-bottom": "30px" }; };
const _c2 = function () { return { "font-weight": "normal" }; };
const _c3 = function () { return { "padding-bottom": "16px", "padding-right": "80px" }; };
const _c4 = function () { return { "margin-bottom": "16px", "background-color": "#bc0000", "color": "white" }; };
const _c5 = function () { return ["/athlete-information"]; };
const _c6 = function () { return { "background-color": "#bc0000" }; };
const _c7 = function () { return { "max-width": "55%", "display": "block", "margin-left": "auto", "margin-right": "auto", "margin-top": "24px", "margin-bottom": "24px" }; };
const _c8 = function () { return { "margin-left": "12%", "margin-right": "12%" }; };
const _c9 = function () { return { "padding-top": "42px", "padding-bottom": "36px" }; };
const _c10 = function () { return { "display": "block", "margin-left": "auto", "margin-right": "auto" }; };
const _c11 = function () { return { "margin-top": "24px", "margin-bottom": "12px" }; };
const _c12 = function () { return { "background-color": "black", "padding-left": "10%", "padding-right": "10%", "margin-top": "60px" }; };
const _c13 = function () { return { "font-weight": "normal", "color": "white", "margin-right": "24px" }; };
const _c14 = function () { return { "background-color": "#bc0000", "color": "white" }; };
class LandingPageComponent {
    constructor() { }
    ngOnInit() {
    }
}
LandingPageComponent.ɵfac = function LandingPageComponent_Factory(t) { return new (t || LandingPageComponent)(); };
LandingPageComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: LandingPageComponent, selectors: [["app-landing-page"]], decls: 41, vars: 46, consts: [["fxLayout", "row", "fxLayout.xs", "column", 3, "ngStyle"], ["fxFlex", "50%", 3, "ngStyle"], [3, "ngStyle"], ["mat-raised-button", "", 3, "ngStyle", "routerLink"], ["fxFlex", "50%", "fxLayoutAlign", "center center", 3, "ngStyle"], ["src", "/assets/laptop.png", 3, "ngStyle"], ["fxLayout", "row", "fxLayoutAlign", "center center"], ["fxLayout", "row", "fxLayout.xs", "column", "fxLayoutGap", "48px", "fxLayoutAlign", "center center", 3, "ngStyle"], ["fxFlex", "25%", 3, "ngStyle"], ["mat-card-image", "", "src", "/assets/hourglass.svg", 2, "width", "120px", "height", "120px", 3, "ngStyle"], ["fxLayoutAlign", "center center", 3, "ngStyle"], ["mat-card-image", "", "src", "/assets/battery.svg", 2, "width", "120px", "height", "120px", 3, "ngStyle"], ["mat-card-image", "", "src", "/assets/muscle.svg", 2, "width", "120px", "height", "120px", 3, "ngStyle"], ["fxLayout", "row", "fxLayout.xs", "column", "fxLayoutAlign", "center center", 3, "ngStyle"]], template: function LandingPageComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "h1", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3, "We help you do the heavy lifting \uD83C\uDFCB");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "p", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5, "We generate a training regimen custom fit to your goals, experience and availability so that you can focus on what's important...training!");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "button", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](7, "Get Started");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](9, "img", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "div", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "h1", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](12, "Why train with a program?");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "div", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "mat-card", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](15, "img", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](16, "mat-card-title", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](17, "Saves time");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](18, "mat-card-content");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](19, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](20, " Generate a tried and true training regimen so you don\u2019t have to spend time planning your next workout ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](21, "mat-card", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](22, "img", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](23, "mat-card-title", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](24, "Sustainable");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](25, "mat-card-content");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](26, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](27, " Structured and scheduled programming ensures you are not neglecting or over training muscles. ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](28, "mat-card", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](29, "img", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](30, "mat-card-title", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](31, "It works");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](32, "mat-card-content");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](33, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](34, " When followed, programs act as a guideline for continued progress to your fitness goals. ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](35, "div", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](36, "h1", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](37, "Train with purpose");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](38, "div");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](39, "button", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](40, "Get Started");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngStyle", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction0"](23, _c0));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngStyle", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction0"](24, _c1));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngStyle", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction0"](25, _c2));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngStyle", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction0"](26, _c3));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngStyle", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction0"](27, _c4))("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction0"](28, _c5));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngStyle", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction0"](29, _c6));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngStyle", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction0"](30, _c7));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngStyle", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction0"](31, _c2));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngStyle", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction0"](32, _c8));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngStyle", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction0"](33, _c9));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngStyle", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction0"](34, _c10));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngStyle", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction0"](35, _c11));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngStyle", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction0"](36, _c9));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngStyle", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction0"](37, _c10));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngStyle", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction0"](38, _c11));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngStyle", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction0"](39, _c9));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngStyle", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction0"](40, _c10));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngStyle", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction0"](41, _c11));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngStyle", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction0"](42, _c12));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngStyle", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction0"](43, _c13));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngStyle", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction0"](44, _c14))("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction0"](45, _c5));
    } }, directives: [_angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_1__["DefaultLayoutDirective"], _angular_common__WEBPACK_IMPORTED_MODULE_2__["NgStyle"], _angular_flex_layout_extended__WEBPACK_IMPORTED_MODULE_3__["DefaultStyleDirective"], _angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_1__["DefaultFlexDirective"], _angular_material_button__WEBPACK_IMPORTED_MODULE_4__["MatButton"], _angular_router__WEBPACK_IMPORTED_MODULE_5__["RouterLink"], _angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_1__["DefaultLayoutAlignDirective"], _angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_1__["DefaultLayoutGapDirective"], _angular_material_card__WEBPACK_IMPORTED_MODULE_6__["MatCard"], _angular_material_card__WEBPACK_IMPORTED_MODULE_6__["MatCardImage"], _angular_material_card__WEBPACK_IMPORTED_MODULE_6__["MatCardTitle"], _angular_material_card__WEBPACK_IMPORTED_MODULE_6__["MatCardContent"]], styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiIuLi9zcmMvYXBwL2xhbmRpbmctcGFnZS9sYW5kaW5nLXBhZ2UuY29tcG9uZW50LmNzcyJ9 */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](LandingPageComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-landing-page',
                templateUrl: './landing-page.component.html',
                styleUrls: ['./landing-page.component.css']
            }]
    }], function () { return []; }, null); })();


/***/ }),

/***/ "./src/app/program-generator/program-generator.component.ts":
/*!******************************************************************!*\
  !*** ./src/app/program-generator/program-generator.component.ts ***!
  \******************************************************************/
/*! exports provided: ProgramGeneratorComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ProgramGeneratorComponent", function() { return ProgramGeneratorComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
/* harmony import */ var _angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/flex-layout/flex */ "./node_modules/@angular/flex-layout/__ivy_ngcc__/esm2015/flex.js");
/* harmony import */ var _angular_material_card__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/material/card */ "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/card.js");
/* harmony import */ var _angular_flex_layout_extended__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/flex-layout/extended */ "./node_modules/@angular/flex-layout/__ivy_ngcc__/esm2015/extended.js");
/* harmony import */ var _angular_material_form_field__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/material/form-field */ "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/form-field.js");
/* harmony import */ var _angular_material_select__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/material/select */ "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/select.js");
/* harmony import */ var _angular_material_input__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/material/input */ "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/input.js");
/* harmony import */ var _angular_material_button__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/material/button */ "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/button.js");
/* harmony import */ var _angular_material_core__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @angular/material/core */ "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _program_page_program_page_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ../program-page/program-page.component */ "./src/app/program-page/program-page.component.ts");















function ProgramGeneratorComponent_form_1_mat_option_10_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "mat-option", 20);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const style_r13 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("value", style_r13.name);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", style_r13.name, " ");
} }
function ProgramGeneratorComponent_form_1_mat_error_11_mat_error_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "mat-error");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "Training style is required");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function ProgramGeneratorComponent_form_1_mat_error_11_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "mat-error");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, ProgramGeneratorComponent_form_1_mat_error_11_mat_error_1_Template, 2, 0, "mat-error", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r3.f.selectedStyle.errors.required);
} }
function ProgramGeneratorComponent_form_1_mat_option_16_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "mat-option", 20);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const availability_r15 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("value", availability_r15);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", availability_r15, " ");
} }
function ProgramGeneratorComponent_form_1_mat_error_17_mat_error_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "mat-error");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "Availability is required");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function ProgramGeneratorComponent_form_1_mat_error_17_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "mat-error");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, ProgramGeneratorComponent_form_1_mat_error_17_mat_error_1_Template, 2, 0, "mat-error", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r5 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r5.f.selectedAvailability.errors.required);
} }
function ProgramGeneratorComponent_form_1_mat_error_23_mat_error_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "mat-error");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "Bodyweight is required");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function ProgramGeneratorComponent_form_1_mat_error_23_mat_error_2_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "mat-error");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "Choose a valid weight");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function ProgramGeneratorComponent_form_1_mat_error_23_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "mat-error");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, ProgramGeneratorComponent_form_1_mat_error_23_mat_error_1_Template, 2, 0, "mat-error", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](2, ProgramGeneratorComponent_form_1_mat_error_23_mat_error_2_Template, 2, 0, "mat-error", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r6 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r6.f.bodyweight.errors.required);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r6.f.bodyweight.errors.min);
} }
function ProgramGeneratorComponent_form_1_mat_error_33_mat_error_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "mat-error");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "Choose a valid weight");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function ProgramGeneratorComponent_form_1_mat_error_33_mat_error_2_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "mat-error");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "Deadlift max is required");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function ProgramGeneratorComponent_form_1_mat_error_33_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "mat-error");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, ProgramGeneratorComponent_form_1_mat_error_33_mat_error_1_Template, 2, 0, "mat-error", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](2, ProgramGeneratorComponent_form_1_mat_error_33_mat_error_2_Template, 2, 0, "mat-error", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r7 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r7.f.deadliftWeight.errors.min);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r7.f.deadliftWeight.errors.required);
} }
function ProgramGeneratorComponent_form_1_mat_error_38_mat_error_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "mat-error");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "Choose a valid rep number");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function ProgramGeneratorComponent_form_1_mat_error_38_mat_error_2_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "mat-error");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "Deadlift reps is required");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function ProgramGeneratorComponent_form_1_mat_error_38_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "mat-error");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, ProgramGeneratorComponent_form_1_mat_error_38_mat_error_1_Template, 2, 0, "mat-error", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](2, ProgramGeneratorComponent_form_1_mat_error_38_mat_error_2_Template, 2, 0, "mat-error", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r8 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r8.f.deadliftReps.errors.min);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r8.f.deadliftReps.errors.required);
} }
function ProgramGeneratorComponent_form_1_mat_error_44_mat_error_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "mat-error");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "Choose a valid weight");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function ProgramGeneratorComponent_form_1_mat_error_44_mat_error_2_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "mat-error");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "Bench max is required");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function ProgramGeneratorComponent_form_1_mat_error_44_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "mat-error");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, ProgramGeneratorComponent_form_1_mat_error_44_mat_error_1_Template, 2, 0, "mat-error", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](2, ProgramGeneratorComponent_form_1_mat_error_44_mat_error_2_Template, 2, 0, "mat-error", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r9 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r9.f.benchWeight.errors.min);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r9.f.benchWeight.errors.required);
} }
function ProgramGeneratorComponent_form_1_mat_error_49_mat_error_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "mat-error");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "Choose a valid weight");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function ProgramGeneratorComponent_form_1_mat_error_49_mat_error_2_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "mat-error");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "Bench reps is required");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function ProgramGeneratorComponent_form_1_mat_error_49_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "mat-error");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, ProgramGeneratorComponent_form_1_mat_error_49_mat_error_1_Template, 2, 0, "mat-error", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](2, ProgramGeneratorComponent_form_1_mat_error_49_mat_error_2_Template, 2, 0, "mat-error", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r10 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r10.f.benchReps.errors.min);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r10.f.benchReps.errors.required);
} }
function ProgramGeneratorComponent_form_1_mat_error_55_mat_error_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "mat-error");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "Choose a valid weight");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function ProgramGeneratorComponent_form_1_mat_error_55_mat_error_2_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "mat-error");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "Squat max is required");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function ProgramGeneratorComponent_form_1_mat_error_55_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "mat-error");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, ProgramGeneratorComponent_form_1_mat_error_55_mat_error_1_Template, 2, 0, "mat-error", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](2, ProgramGeneratorComponent_form_1_mat_error_55_mat_error_2_Template, 2, 0, "mat-error", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r11 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r11.f.squatWeight.errors.min);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r11.f.squatWeight.errors.required);
} }
function ProgramGeneratorComponent_form_1_mat_error_60_mat_error_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "mat-error");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "Choose a valid weight");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function ProgramGeneratorComponent_form_1_mat_error_60_mat_error_2_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "mat-error");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "Squat reps is required");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function ProgramGeneratorComponent_form_1_mat_error_60_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "mat-error");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, ProgramGeneratorComponent_form_1_mat_error_60_mat_error_1_Template, 2, 0, "mat-error", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](2, ProgramGeneratorComponent_form_1_mat_error_60_mat_error_2_Template, 2, 0, "mat-error", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r12 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r12.f.squatReps.errors.min);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r12.f.squatReps.errors.required);
} }
const _c0 = function () { return { "margin-top": "48px", "margin-bottom": "24px", "margin-left": "24px", "margin-right": "24px" }; };
const _c1 = function () { return { "font-weight": "normal" }; };
const _c2 = function () { return { "margin-right": "48px" }; };
function ProgramGeneratorComponent_form_1_Template(rf, ctx) { if (rf & 1) {
    const _r32 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "form", 2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngSubmit", function ProgramGeneratorComponent_form_1_Template_form_ngSubmit_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r32); const ctx_r31 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r31.athleteInfoSubmit(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "mat-card", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "h1", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4, "Athlete Information");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "div", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "mat-form-field", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "mat-label");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](8, "Training Style");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "mat-select", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("selectionChange", function ProgramGeneratorComponent_form_1_Template_mat_select_selectionChange_9_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r32); const ctx_r33 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r33.trainingStyleChoice(ctx_r33.trainingStyle); })("ngModelChange", function ProgramGeneratorComponent_form_1_Template_mat_select_ngModelChange_9_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r32); const ctx_r34 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r34.trainingStyle = $event; });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](10, ProgramGeneratorComponent_form_1_mat_option_10_Template, 2, 2, "mat-option", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](11, ProgramGeneratorComponent_form_1_mat_error_11_Template, 2, 1, "mat-error", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "mat-form-field");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "mat-label");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](14, "Availability");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "mat-select", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](16, ProgramGeneratorComponent_form_1_mat_option_16_Template, 2, 2, "mat-option", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](17, ProgramGeneratorComponent_form_1_mat_error_17_Template, 2, 1, "mat-error", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](18, "div", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](19, "mat-form-field", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](20, "mat-label");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](21, "Bodyweight (lbs)");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](22, "input", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](23, ProgramGeneratorComponent_form_1_mat_error_23_Template, 3, 2, "mat-error", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](24, "mat-form-field");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](25, "mat-label");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](26, "Age");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](27, "input", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](28, "div", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](29, "mat-form-field", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](30, "mat-label");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](31, "Deadlift Max (lbs)");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](32, "input", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](33, ProgramGeneratorComponent_form_1_mat_error_33_Template, 3, 2, "mat-error", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](34, "mat-form-field");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](35, "mat-label");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](36, "Deadlift Max Reps");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](37, "input", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](38, ProgramGeneratorComponent_form_1_mat_error_38_Template, 3, 2, "mat-error", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](39, "div", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](40, "mat-form-field", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](41, "mat-label");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](42, "Bench Max (lbs)");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](43, "input", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](44, ProgramGeneratorComponent_form_1_mat_error_44_Template, 3, 2, "mat-error", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](45, "mat-form-field");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](46, "mat-label");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](47, "Bench Max Reps");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](48, "input", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](49, ProgramGeneratorComponent_form_1_mat_error_49_Template, 3, 2, "mat-error", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](50, "div", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](51, "mat-form-field", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](52, "mat-label");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](53, "Squat Max (lbs)");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](54, "input", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](55, ProgramGeneratorComponent_form_1_mat_error_55_Template, 3, 2, "mat-error", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](56, "mat-form-field");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](57, "mat-label");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](58, "Squat Max Reps");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](59, "input", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](60, ProgramGeneratorComponent_form_1_mat_error_60_Template, 3, 2, "mat-error", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](61, "button", 19);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](62, "Submit");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("formGroup", ctx_r0.athleteForm);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngStyle", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction0"](20, _c0));
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngStyle", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction0"](21, _c1));
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngStyle", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction0"](22, _c2));
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx_r0.trainingStyle);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx_r0.trainingOptions);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r0.submitted && ctx_r0.f.selectedStyle.errors);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx_r0.availability);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r0.submitted && ctx_r0.f.selectedAvailability.errors);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngStyle", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction0"](23, _c2));
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r0.submitted && ctx_r0.f.bodyweight.errors);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngStyle", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction0"](24, _c2));
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r0.submitted && ctx_r0.f.deadliftWeight.errors);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r0.submitted && ctx_r0.f.deadliftReps.errors);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngStyle", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction0"](25, _c2));
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r0.submitted && ctx_r0.f.benchWeight.errors);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r0.submitted && ctx_r0.f.benchReps.errors);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngStyle", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction0"](26, _c2));
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r0.submitted && ctx_r0.f.squatWeight.errors);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r0.submitted && ctx_r0.f.squatReps.errors);
} }
function ProgramGeneratorComponent_app_program_page_2_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "app-program-page", 21);
} if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("athleteInfo", ctx_r1.athleteInfo);
} }
class ProgramGeneratorComponent {
    constructor(router) {
        this.router = router;
        this.submitted = false;
        this.valid = false;
        this.availability = [];
        this.trainingOptions = [
            {
                name: 'Strength',
                availability: [3, 4]
            },
            {
                name: 'Aesthetics',
                availability: [3, 4, 5]
            }
        ];
    }
    ngOnInit() {
        this.athleteForm = new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormGroup"]({
            selectedStyle: new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"]('', [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required]),
            selectedAvailability: new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"]('', [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required]),
            bodyweight: new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"]('', [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].min(1)]),
            age: new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"](),
            deadliftWeight: new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"]('', [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].min(1)]),
            deadliftReps: new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"]('', [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].min(1)]),
            squatWeight: new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"]('', [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].min(1)]),
            squatReps: new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"]('', [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].min(1)]),
            benchWeight: new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"]('', [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].min(1)]),
            benchReps: new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"]('', [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].min(1)])
        });
    }
    get bodyweight() { return this.athleteForm.get('bodyweight').value; }
    get f() { return this.athleteForm.controls; }
    athleteInfoSubmit() {
        this.submitted = true;
        if (this.athleteForm.invalid) {
            console.log('invalid form');
            return;
        }
        this.athleteInfo = {
            selectedStyle: this.athleteForm.value.selectedStyle,
            selectedAvailability: this.athleteForm.value.selectedAvailability,
            bodyweight: this.athleteForm.value.bodyweight,
            age: this.athleteForm.value.age,
            Deadlift: {
                weight: this.athleteForm.value.deadliftWeight,
                reps: this.athleteForm.value.deadliftReps,
            },
            Squat: {
                weight: this.athleteForm.value.squatWeight,
                reps: this.athleteForm.value.squatReps,
            },
            Bench: {
                weight: this.athleteForm.value.benchWeight,
                reps: this.athleteForm.value.benchReps,
            },
        };
        this.valid = true;
    }
    trainingStyleChoice(trainingStyle) {
        let dropDownData = this.trainingOptions.find((data) => data.name === trainingStyle);
        if (dropDownData) {
            this.availability = dropDownData.availability;
        }
        else {
            this.availability = [];
        }
    }
}
ProgramGeneratorComponent.ɵfac = function ProgramGeneratorComponent_Factory(t) { return new (t || ProgramGeneratorComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"])); };
ProgramGeneratorComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: ProgramGeneratorComponent, selectors: [["app-program-generator"]], decls: 3, vars: 2, consts: [[3, "formGroup", "ngSubmit", 4, "ngIf"], [3, "athleteInfo", 4, "ngIf"], [3, "formGroup", "ngSubmit"], ["fxLayoutAlign", "center center", "fxLayout", "column"], [1, "mat-elevation-z8", 3, "ngStyle"], [3, "ngStyle"], ["fxLayout", "row", "fxLayout.xs", "column"], ["formControlName", "selectedStyle", "name", "trainingStyle", 3, "ngModel", "selectionChange", "ngModelChange"], [3, "value", 4, "ngFor", "ngForOf"], [4, "ngIf"], ["formControlName", "selectedAvailability", "name", "trainingStyle", "required", ""], ["matInput", "", "id", "bodyweight", "type", "number", "min", "0", "formControlName", "bodyweight", "required", "", "maxlength", "3", "placeholder", "Ex. 180"], ["matInput", "", "type", "number", "min", "0", "formControlName", "age", "maxlength", "2", "placeholder", "Ex. 22"], ["type", "number", "min", "0", "matInput", "", "formControlName", "deadliftWeight", "maxlength", "3", "placeholder", "Ex. 225"], ["type", "number", "min", "0", "matInput", "", "formControlName", "deadliftReps", "maxlength", "2", "placeholder", "Ex. 2"], ["type", "number", "min", "0", "matInput", "", "formControlName", "benchWeight", "maxlength", "3", "placeholder", "Ex. 225"], ["type", "number", "min", "0", "matInput", "", "formControlName", "benchReps", "maxlength", "2", "placeholder", "Ex. 2"], ["type", "number", "min", "0", "matInput", "", "formControlName", "squatWeight", "maxlength", "3", "placeholder", "Ex. 225"], ["type", "number", "min", "0", "matInput", "", "formControlName", "squatReps", "maxlength", "2", "placeholder", "Ex. 2"], ["mat-raised-button", "", "color", "accent", "type", "submit"], [3, "value"], [3, "athleteInfo"]], template: function ProgramGeneratorComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "body");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, ProgramGeneratorComponent_form_1_Template, 63, 27, "form", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](2, ProgramGeneratorComponent_app_program_page_2_Template, 1, 1, "app-program-page", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", !ctx.valid);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.valid);
    } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_3__["NgIf"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["ɵangular_packages_forms_forms_y"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["NgControlStatusGroup"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormGroupDirective"], _angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_4__["DefaultLayoutAlignDirective"], _angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_4__["DefaultLayoutDirective"], _angular_material_card__WEBPACK_IMPORTED_MODULE_5__["MatCard"], _angular_common__WEBPACK_IMPORTED_MODULE_3__["NgStyle"], _angular_flex_layout_extended__WEBPACK_IMPORTED_MODULE_6__["DefaultStyleDirective"], _angular_material_form_field__WEBPACK_IMPORTED_MODULE_7__["MatFormField"], _angular_material_form_field__WEBPACK_IMPORTED_MODULE_7__["MatLabel"], _angular_material_select__WEBPACK_IMPORTED_MODULE_8__["MatSelect"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControlName"], _angular_common__WEBPACK_IMPORTED_MODULE_3__["NgForOf"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["RequiredValidator"], _angular_material_input__WEBPACK_IMPORTED_MODULE_9__["MatInput"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["NumberValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["DefaultValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["MaxLengthValidator"], _angular_material_button__WEBPACK_IMPORTED_MODULE_10__["MatButton"], _angular_material_core__WEBPACK_IMPORTED_MODULE_11__["MatOption"], _angular_material_form_field__WEBPACK_IMPORTED_MODULE_7__["MatError"], _program_page_program_page_component__WEBPACK_IMPORTED_MODULE_12__["ProgramPageComponent"]], styles: ["body[_ngcontent-%COMP%] {\r\n  display: block;\r\n  overflow: auto;\r\n  background-color:#f1f1f1 !important;\r\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uL3NyYy9hcHAvcHJvZ3JhbS1nZW5lcmF0b3IvcHJvZ3JhbS1nZW5lcmF0b3IuY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLGNBQWM7RUFDZCxjQUFjO0VBQ2QsbUNBQW1DO0FBQ3JDIiwiZmlsZSI6Ii4uL3NyYy9hcHAvcHJvZ3JhbS1nZW5lcmF0b3IvcHJvZ3JhbS1nZW5lcmF0b3IuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbImJvZHkge1xyXG4gIGRpc3BsYXk6IGJsb2NrO1xyXG4gIG92ZXJmbG93OiBhdXRvO1xyXG4gIGJhY2tncm91bmQtY29sb3I6I2YxZjFmMSAhaW1wb3J0YW50O1xyXG59XHJcbiJdfQ== */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](ProgramGeneratorComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-program-generator',
                templateUrl: './program-generator.component.html',
                styleUrls: ['./program-generator.component.css']
            }]
    }], function () { return [{ type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"] }]; }, null); })();


/***/ }),

/***/ "./src/app/program-page/program-page.component.ts":
/*!********************************************************!*\
  !*** ./src/app/program-page/program-page.component.ts ***!
  \********************************************************/
/*! exports provided: ProgramPageComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ProgramPageComponent", function() { return ProgramPageComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var jspdf__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! jspdf */ "./node_modules/jspdf/dist/jspdf.es.min.js");
/* harmony import */ var html2canvas__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! html2canvas */ "./node_modules/html2canvas/dist/html2canvas.js");
/* harmony import */ var html2canvas__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(html2canvas__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
/* harmony import */ var _angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/material/snack-bar */ "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/snack-bar.js");
/* harmony import */ var _angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/flex-layout/flex */ "./node_modules/@angular/flex-layout/__ivy_ngcc__/esm2015/flex.js");
/* harmony import */ var _angular_flex_layout_extended__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/flex-layout/extended */ "./node_modules/@angular/flex-layout/__ivy_ngcc__/esm2015/extended.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");
/* harmony import */ var _angular_material_form_field__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/material/form-field */ "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/form-field.js");
/* harmony import */ var _angular_material_select__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/material/select */ "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/select.js");
/* harmony import */ var _angular_material_button__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/material/button */ "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/button.js");
/* harmony import */ var _angular_material_icon__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @angular/material/icon */ "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/icon.js");
/* harmony import */ var _angular_cdk_clipboard__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @angular/cdk/clipboard */ "./node_modules/@angular/cdk/__ivy_ngcc__/fesm2015/clipboard.js");
/* harmony import */ var _angular_material_core__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @angular/material/core */ "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_material_table__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! @angular/material/table */ "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/table.js");
















function ProgramPageComponent_mat_option_10_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "mat-option", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const i_r3 = ctx.index;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("value", i_r3 + 1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](i_r3 + 1);
} }
const _c0 = function () { return { "color": "black", "font-size": "16px", "text-align": "center" }; };
function ProgramPageComponent_table_15_th_2_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "th", 22);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const j_r5 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]().index;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngStyle", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction0"](2, _c0));
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"]("Day ", j_r5 + 1, "");
} }
function ProgramPageComponent_table_15_th_4_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "th", 23);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "Movement");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function ProgramPageComponent_table_15_td_5_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "td", 24);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const element_r19 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](element_r19.Movement);
} }
function ProgramPageComponent_table_15_th_7_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "th", 23);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "Sets");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function ProgramPageComponent_table_15_td_8_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "td", 24);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const element_r20 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](element_r20.Sets);
} }
function ProgramPageComponent_table_15_th_10_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "th", 23);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "Reps");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function ProgramPageComponent_table_15_td_11_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "td", 24);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const element_r21 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](element_r21.Reps);
} }
function ProgramPageComponent_table_15_th_13_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "th", 23);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "Weight");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function ProgramPageComponent_table_15_td_14_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "td", 24);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const element_r22 = ctx.$implicit;
    const ctx_r14 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx_r14.getWorkingWeight(element_r22.Movement, element_r22.relativeLift, element_r22.RM, element_r22.weightIncrement, element_r22.RPE));
} }
function ProgramPageComponent_table_15_tr_15_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "tr", 25);
} }
function ProgramPageComponent_table_15_tr_16_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "tr", 25);
} }
function ProgramPageComponent_table_15_tr_17_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "tr", 26);
} }
const _c1 = function () { return { "margin": "12px" }; };
const _c2 = function () { return ["parentDay"]; };
function ProgramPageComponent_table_15_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "table", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerStart"](1, 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](2, ProgramPageComponent_table_15_th_2_Template, 2, 3, "th", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerStart"](3, 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](4, ProgramPageComponent_table_15_th_4_Template, 2, 0, "th", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](5, ProgramPageComponent_table_15_td_5_Template, 2, 1, "td", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerStart"](6, 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](7, ProgramPageComponent_table_15_th_7_Template, 2, 0, "th", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](8, ProgramPageComponent_table_15_td_8_Template, 2, 1, "td", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerStart"](9, 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](10, ProgramPageComponent_table_15_th_10_Template, 2, 0, "th", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](11, ProgramPageComponent_table_15_td_11_Template, 2, 1, "td", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerStart"](12, 19);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](13, ProgramPageComponent_table_15_th_13_Template, 2, 0, "th", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](14, ProgramPageComponent_table_15_td_14_Template, 2, 1, "td", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](15, ProgramPageComponent_table_15_tr_15_Template, 1, 0, "tr", 20);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](16, ProgramPageComponent_table_15_tr_16_Template, 1, 0, "tr", 20);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](17, ProgramPageComponent_table_15_tr_17_Template, 1, 0, "tr", 21);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const trainingDay_r4 = ctx.$implicit;
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("dataSource", trainingDay_r4)("ngStyle", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction0"](5, _c1));
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](15);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("matHeaderRowDef", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction0"](6, _c2));
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("matHeaderRowDef", ctx_r1.displayedColumns);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("matRowDefColumns", ctx_r1.displayedColumns);
} }
const _c3 = function () { return { "font-weight": "normal" }; };
const _c4 = function () { return { "margin-left": "12px", "margin-top": "12px" }; };
const AESTHETICS_3_DAY = [
    [
        [{ Movement: 'Bench Press', Sets: 4, Reps: 8, RM: 0.6, RPE: 7, relativeLift: '', weightIncrement: 0 }, { Movement: 'Seated DB Press', Sets: 4, Reps: 12, RM: 0, RPE: 8, relativeLift: '', weightIncrement: 0 }, { Movement: 'Dumbbell Flyes', Sets: 3, Reps: 15, RM: 0, RPE: 8, relativeLift: '', weightIncrement: 0 }, { Movement: 'Tricep Pulldown', Sets: 4, Reps: 15, RM: 0, RPE: 8, relativeLift: '', weightIncrement: 0 }],
        [{ Movement: 'Lat Pulldown', Sets: 4, Reps: 12, RM: 0, RPE: 8, relativeLift: '', weightIncrement: 0 }, { Movement: 'Seated Row', Sets: 4, Reps: 12, RM: 0, RPE: 8, relativeLift: '', weightIncrement: 0 }, { Movement: 'Bent Over Lateral Raise', Sets: 3, Reps: 15, RM: 0, RPE: 8, relativeLift: '', weightIncrement: 0 }, { Movement: 'Incline Dumbbell Curl', Sets: 3, Reps: 15, RM: 0, RPE: 8, relativeLift: '', weightIncrement: 0 }],
        [{ Movement: 'Back Squat', Sets: 4, Reps: 8, RM: 0.6, RPE: 8, relativeLift: '', weightIncrement: 0 }, { Movement: 'Leg Press', Sets: 4, Reps: 12, RM: 0, RPE: 8, relativeLift: '', weightIncrement: 0 }, { Movement: 'Romanian Deadlift', Sets: 4, Reps: 12, RM: 0.25, RPE: 8, relativeLift: 'Deadlift', weightIncrement: 0 }, { Movement: 'Leg Curl', Sets: 3, Reps: 12, RM: 0, RPE: 8, relativeLift: '', weightIncrement: 0 }, { Movement: 'Calf Raise', Sets: 3, Reps: 15, RM: 0, RPE: 8, relativeLift: '', weightIncrement: 0 }],
    ],
    [
        [{ Movement: 'Bench Press', Sets: 4, Reps: 8, RM: 0.6, RPE: 7, relativeLift: '', weightIncrement: 5 }, { Movement: 'Seated DB Press', Sets: 4, Reps: 12, RM: 0, RPE: 8, relativeLift: '', weightIncrement: 0 }, { Movement: 'Dumbbell Flyes', Sets: 3, Reps: 15, RM: 0, RPE: 8, relativeLift: '', weightIncrement: 0 }, { Movement: 'Tricep Pulldown', Sets: 4, Reps: 15, RM: 0, RPE: 8, relativeLift: '', weightIncrement: 0 }],
        [{ Movement: 'Lat Pulldown', Sets: 4, Reps: 12, RM: 0, RPE: 8, relativeLift: '', weightIncrement: 0 }, { Movement: 'Seated Row', Sets: 4, Reps: 12, RM: 0, RPE: 8, relativeLift: '', weightIncrement: 0 }, { Movement: 'Bent Over Lateral Raise', Sets: 3, Reps: 15, RM: 0, RPE: 8, relativeLift: '', weightIncrement: 0 }, { Movement: 'Incline Dumbbell Curl', Sets: 3, Reps: 15, RM: 0, RPE: 8, relativeLift: '', weightIncrement: 0 }],
        [{ Movement: 'Back Squat', Sets: 4, Reps: 8, RM: 0.6, RPE: 8, relativeLift: '', weightIncrement: 10 }, { Movement: 'Leg Press', Sets: 4, Reps: 12, RM: 0, RPE: 8, relativeLift: '', weightIncrement: 0 }, { Movement: 'Romanian Deadlift', Sets: 4, Reps: 12, RM: 0.25, RPE: 8, relativeLift: 'Deadlift', weightIncrement: 10 }, { Movement: 'Leg Curl', Sets: 3, Reps: 12, RM: 0, RPE: 8, relativeLift: '', weightIncrement: 0 }, { Movement: 'Calf Raise', Sets: 3, Reps: 15, RM: 0, RPE: 8, relativeLift: '', weightIncrement: 0 }],
    ],
    [
        [{ Movement: 'Bench Press', Sets: 4, Reps: 8, RM: 0.6, RPE: 7, relativeLift: '', weightIncrement: 10 }, { Movement: 'Seated DB Press', Sets: 4, Reps: 12, RM: 0, RPE: 8, relativeLift: '', weightIncrement: 0 }, { Movement: 'Dumbbell Flyes', Sets: 3, Reps: 15, RM: 0, RPE: 8, relativeLift: '', weightIncrement: 0 }, { Movement: 'Tricep Pulldown', Sets: 4, Reps: 15, RM: 0, RPE: 8, relativeLift: '', weightIncrement: 0 }],
        [{ Movement: 'Lat Pulldown', Sets: 4, Reps: 12, RM: 0, RPE: 8, relativeLift: '', weightIncrement: 0 }, { Movement: 'Seated Row', Sets: 4, Reps: 12, RM: 0, RPE: 8, relativeLift: '', weightIncrement: 0 }, { Movement: 'Bent Over Lateral Raise', Sets: 3, Reps: 15, RM: 0, RPE: 8, relativeLift: '', weightIncrement: 0 }, { Movement: 'Incline Dumbbell Curl', Sets: 3, Reps: 15, RM: 0, RPE: 8, relativeLift: '', weightIncrement: 0 }],
        [{ Movement: 'Back Squat', Sets: 4, Reps: 8, RM: 0.6, RPE: 8, relativeLift: '', weightIncrement: 20 }, { Movement: 'Leg Press', Sets: 4, Reps: 12, RM: 0, RPE: 8, relativeLift: '', weightIncrement: 0 }, { Movement: 'Romanian Deadlift', Sets: 4, Reps: 12, RM: 0.25, RPE: 8, relativeLift: 'Deadlift', weightIncrement: 20 }, { Movement: 'Leg Curl', Sets: 3, Reps: 12, RM: 0, RPE: 8, relativeLift: '', weightIncrement: 0 }, { Movement: 'Calf Raise', Sets: 3, Reps: 15, RM: 0, RPE: 8, relativeLift: '', weightIncrement: 0 }],
    ],
    [
        [{ Movement: 'Bench Press', Sets: 4, Reps: 8, RM: 0.6, RPE: 7, relativeLift: '', weightIncrement: 15 }, { Movement: 'Seated DB Press', Sets: 4, Reps: 12, RM: 0, RPE: 8, relativeLift: '', weightIncrement: 0 }, { Movement: 'Dumbbell Flyes', Sets: 3, Reps: 15, RM: 0, RPE: 8, relativeLift: '', weightIncrement: 0 }, { Movement: 'Tricep Pulldown', Sets: 4, Reps: 15, RM: 0, RPE: 8, relativeLift: '', weightIncrement: 0 }],
        [{ Movement: 'Lat Pulldown', Sets: 4, Reps: 12, RM: 0, RPE: 8, relativeLift: '', weightIncrement: 0 }, { Movement: 'Seated Row', Sets: 4, Reps: 12, RM: 0, RPE: 8, relativeLift: '', weightIncrement: 0 }, { Movement: 'Bent Over Lateral Raise', Sets: 3, Reps: 15, RM: 0, RPE: 8, relativeLift: '', weightIncrement: 0 }, { Movement: 'Incline Dumbbell Curl', Sets: 3, Reps: 15, RM: 0, RPE: 8, relativeLift: '', weightIncrement: 0 }],
        [{ Movement: 'Back Squat', Sets: 4, Reps: 8, RM: 0.6, RPE: 8, relativeLift: '', weightIncrement: 30 }, { Movement: 'Leg Press', Sets: 4, Reps: 12, RM: 0, RPE: 8, relativeLift: '', weightIncrement: 0 }, { Movement: 'Romanian Deadlift', Sets: 4, Reps: 12, RM: 0.25, RPE: 8, relativeLift: 'Deadlift', weightIncrement: 25 }, { Movement: 'Leg Curl', Sets: 3, Reps: 12, RM: 0, RPE: 8, relativeLift: '', weightIncrement: 0 }, { Movement: 'Calf Raise', Sets: 3, Reps: 15, RM: 0, RPE: 8, relativeLift: '', weightIncrement: 0 }],
    ],
    [
        [{ Movement: 'Bench Press', Sets: 4, Reps: 8, RM: 0.6, RPE: 7, relativeLift: '', weightIncrement: 20 }, { Movement: 'Seated DB Press', Sets: 4, Reps: 12, RM: 0, RPE: 8, relativeLift: '', weightIncrement: 0 }, { Movement: 'Dumbbell Flyes', Sets: 3, Reps: 15, RM: 0, RPE: 8, relativeLift: '', weightIncrement: 0 }, { Movement: 'Tricep Pulldown', Sets: 4, Reps: 15, RM: 0, RPE: 8, relativeLift: '', weightIncrement: 0 }],
        [{ Movement: 'Lat Pulldown', Sets: 4, Reps: 12, RM: 0, RPE: 8, relativeLift: '', weightIncrement: 0 }, { Movement: 'Seated Row', Sets: 4, Reps: 12, RM: 0, RPE: 8, relativeLift: '', weightIncrement: 0 }, { Movement: 'Bent Over Lateral Raise', Sets: 3, Reps: 15, RM: 0, RPE: 8, relativeLift: '', weightIncrement: 0 }, { Movement: 'Incline Dumbbell Curl', Sets: 3, Reps: 15, RM: 0, RPE: 8, relativeLift: '', weightIncrement: 0 }],
        [{ Movement: 'Back Squat', Sets: 4, Reps: 8, RM: 0.6, RPE: 8, relativeLift: '', weightIncrement: 40 }, { Movement: 'Leg Press', Sets: 4, Reps: 12, RM: 0, RPE: 8, relativeLift: '', weightIncrement: 0 }, { Movement: 'Romanian Deadlift', Sets: 4, Reps: 12, RM: 0.25, RPE: 8, relativeLift: 'Deadlift', weightIncrement: 30 }, { Movement: 'Leg Curl', Sets: 3, Reps: 12, RM: 0, RPE: 8, relativeLift: '', weightIncrement: 0 }, { Movement: 'Calf Raise', Sets: 3, Reps: 15, RM: 0, RPE: 8, relativeLift: '', weightIncrement: 0 }],
    ],
    [
        [{ Movement: 'Bench Press', Sets: 4, Reps: 8, RM: 0.6, RPE: 7, relativeLift: '', weightIncrement: 25 }, { Movement: 'Seated DB Press', Sets: 4, Reps: 12, RM: 0, RPE: 8, relativeLift: '', weightIncrement: 0 }, { Movement: 'Dumbbell Flyes', Sets: 3, Reps: 15, RM: 0, RPE: 8, relativeLift: '', weightIncrement: 0 }, { Movement: 'Tricep Pulldown', Sets: 4, Reps: 15, RM: 0, RPE: 8, relativeLift: '', weightIncrement: 0 }],
        [{ Movement: 'Lat Pulldown', Sets: 4, Reps: 12, RM: 0, RPE: 8, relativeLift: '', weightIncrement: 0 }, { Movement: 'Seated Row', Sets: 4, Reps: 12, RM: 0, RPE: 8, relativeLift: '', weightIncrement: 0 }, { Movement: 'Bent Over Lateral Raise', Sets: 3, Reps: 15, RM: 0, RPE: 8, relativeLift: '', weightIncrement: 0 }, { Movement: 'Incline Dumbbell Curl', Sets: 3, Reps: 15, RM: 0, RPE: 8, relativeLift: '', weightIncrement: 0 }],
        [{ Movement: 'Back Squat', Sets: 4, Reps: 8, RM: 0.6, RPE: 8, relativeLift: '', weightIncrement: 45 }, { Movement: 'Leg Press', Sets: 4, Reps: 12, RM: 0, RPE: 8, relativeLift: '', weightIncrement: 0 }, { Movement: 'Romanian Deadlift', Sets: 4, Reps: 12, RM: 0.25, RPE: 8, relativeLift: 'Deadlift', weightIncrement: 35 }, { Movement: 'Leg Curl', Sets: 3, Reps: 12, RM: 0, RPE: 8, relativeLift: '', weightIncrement: 0 }, { Movement: 'Calf Raise', Sets: 3, Reps: 15, RM: 0, RPE: 8, relativeLift: '', weightIncrement: 0 }],
    ],
    [
        [{ Movement: 'Bench Press', Sets: 4, Reps: 8, RM: 0.6, RPE: 7, relativeLift: '', weightIncrement: 30 }, { Movement: 'Seated DB Press', Sets: 4, Reps: 12, RM: 0, RPE: 8, relativeLift: '', weightIncrement: 0 }, { Movement: 'Dumbbell Flyes', Sets: 3, Reps: 15, RM: 0, RPE: 8, relativeLift: '', weightIncrement: 0 }, { Movement: 'Tricep Pulldown', Sets: 4, Reps: 15, RM: 0, RPE: 8, relativeLift: '', weightIncrement: 0 }],
        [{ Movement: 'Lat Pulldown', Sets: 4, Reps: 12, RM: 0, RPE: 8, relativeLift: '', weightIncrement: 0 }, { Movement: 'Seated Row', Sets: 4, Reps: 12, RM: 0, RPE: 8, relativeLift: '', weightIncrement: 0 }, { Movement: 'Bent Over Lateral Raise', Sets: 3, Reps: 15, RM: 0, RPE: 8, relativeLift: '', weightIncrement: 0 }, { Movement: 'Incline Dumbbell Curl', Sets: 3, Reps: 15, RM: 0, RPE: 8, relativeLift: '', weightIncrement: 0 }],
        [{ Movement: 'Back Squat', Sets: 4, Reps: 8, RM: 0.6, RPE: 8, relativeLift: '', weightIncrement: 50 }, { Movement: 'Leg Press', Sets: 4, Reps: 12, RM: 0, RPE: 8, relativeLift: '', weightIncrement: 0 }, { Movement: 'Romanian Deadlift', Sets: 4, Reps: 12, RM: 0.25, RPE: 8, relativeLift: 'Deadlift', weightIncrement: 40 }, { Movement: 'Leg Curl', Sets: 3, Reps: 12, RM: 0, RPE: 8, relativeLift: '', weightIncrement: 0 }, { Movement: 'Calf Raise', Sets: 3, Reps: 15, RM: 0, RPE: 8, relativeLift: '', weightIncrement: 0 }],
    ],
    [
        [{ Movement: 'Bench Press', Sets: 4, Reps: 8, RM: 0.6, RPE: 7, relativeLift: '', weightIncrement: 35 }, { Movement: 'Seated DB Press', Sets: 4, Reps: 12, RM: 0, RPE: 8, relativeLift: '', weightIncrement: 0 }, { Movement: 'Dumbbell Flyes', Sets: 3, Reps: 15, RM: 0, RPE: 8, relativeLift: '', weightIncrement: 0 }, { Movement: 'Tricep Pulldown', Sets: 4, Reps: 15, RM: 0, RPE: 8, relativeLift: '', weightIncrement: 0 }],
        [{ Movement: 'Lat Pulldown', Sets: 4, Reps: 12, RM: 0, RPE: 8, relativeLift: '', weightIncrement: 0 }, { Movement: 'Seated Row', Sets: 4, Reps: 12, RM: 0, RPE: 8, relativeLift: '', weightIncrement: 0 }, { Movement: 'Bent Over Lateral Raise', Sets: 3, Reps: 15, RM: 0, RPE: 8, relativeLift: '', weightIncrement: 0 }, { Movement: 'Incline Dumbbell Curl', Sets: 3, Reps: 15, RM: 0, RPE: 8, relativeLift: '', weightIncrement: 0 }],
        [{ Movement: 'Back Squat', Sets: 4, Reps: 8, RM: 0.6, RPE: 8, relativeLift: '', weightIncrement: 55 }, { Movement: 'Leg Press', Sets: 4, Reps: 12, RM: 0, RPE: 8, relativeLift: '', weightIncrement: 0 }, { Movement: 'Romanian Deadlift', Sets: 4, Reps: 12, RM: 0.25, RPE: 8, relativeLift: 'Deadlift', weightIncrement: 40 }, { Movement: 'Leg Curl', Sets: 3, Reps: 12, RM: 0, RPE: 8, relativeLift: '', weightIncrement: 0 }, { Movement: 'Calf Raise', Sets: 3, Reps: 15, RM: 0, RPE: 8, relativeLift: '', weightIncrement: 0 }],
    ],
    [
        [{ Movement: 'Bench Press', Sets: 4, Reps: 8, RM: 0.6, RPE: 7, relativeLift: '', weightIncrement: 40 }, { Movement: 'Seated DB Press', Sets: 4, Reps: 12, RM: 0, RPE: 8, relativeLift: '', weightIncrement: 0 }, { Movement: 'Dumbbell Flyes', Sets: 3, Reps: 15, RM: 0, RPE: 8, relativeLift: '', weightIncrement: 0 }, { Movement: 'Tricep Pulldown', Sets: 4, Reps: 15, RM: 0, RPE: 8, relativeLift: '', weightIncrement: 0 }],
        [{ Movement: 'Lat Pulldown', Sets: 4, Reps: 12, RM: 0, RPE: 8, relativeLift: '', weightIncrement: 0 }, { Movement: 'Seated Row', Sets: 4, Reps: 12, RM: 0, RPE: 8, relativeLift: '', weightIncrement: 0 }, { Movement: 'Bent Over Lateral Raise', Sets: 3, Reps: 15, RM: 0, RPE: 8, relativeLift: '', weightIncrement: 0 }, { Movement: 'Incline Dumbbell Curl', Sets: 3, Reps: 15, RM: 0, RPE: 8, relativeLift: '', weightIncrement: 0 }],
        [{ Movement: 'Back Squat', Sets: 4, Reps: 8, RM: 0.6, RPE: 8, relativeLift: '', weightIncrement: 60 }, { Movement: 'Leg Press', Sets: 4, Reps: 12, RM: 0, RPE: 8, relativeLift: '', weightIncrement: 0 }, { Movement: 'Romanian Deadlift', Sets: 4, Reps: 12, RM: 0.25, RPE: 8, relativeLift: 'Deadlift', weightIncrement: 45 }, { Movement: 'Leg Curl', Sets: 3, Reps: 12, RM: 0, RPE: 8, relativeLift: '', weightIncrement: 0 }, { Movement: 'Calf Raise', Sets: 3, Reps: 15, RM: 0, RPE: 8, relativeLift: '', weightIncrement: 0 }],
    ],
    [
        [{ Movement: 'Bench Press', Sets: 4, Reps: 8, RM: 0.6, RPE: 7, relativeLift: '', weightIncrement: 45 }, { Movement: 'Seated DB Press', Sets: 4, Reps: 12, RM: 0, RPE: 8, relativeLift: '', weightIncrement: 0 }, { Movement: 'Dumbbell Flyes', Sets: 3, Reps: 15, RM: 0, RPE: 8, relativeLift: '', weightIncrement: 0 }, { Movement: 'Tricep Pulldown', Sets: 4, Reps: 15, RM: 0, RPE: 8, relativeLift: '', weightIncrement: 0 }],
        [{ Movement: 'Lat Pulldown', Sets: 4, Reps: 12, RM: 0, RPE: 8, relativeLift: '', weightIncrement: 0 }, { Movement: 'Seated Row', Sets: 4, Reps: 12, RM: 0, RPE: 8, relativeLift: '', weightIncrement: 0 }, { Movement: 'Bent Over Lateral Raise', Sets: 3, Reps: 15, RM: 0, RPE: 8, relativeLift: '', weightIncrement: 0 }, { Movement: 'Incline Dumbbell Curl', Sets: 3, Reps: 15, RM: 0, RPE: 8, relativeLift: '', weightIncrement: 0 }],
        [{ Movement: 'Back Squat', Sets: 4, Reps: 8, RM: 0.6, RPE: 8, relativeLift: '', weightIncrement: 70 }, { Movement: 'Leg Press', Sets: 4, Reps: 12, RM: 0, RPE: 8, relativeLift: '', weightIncrement: 0 }, { Movement: 'Romanian Deadlift', Sets: 4, Reps: 12, RM: 0.25, RPE: 8, relativeLift: 'Deadlift', weightIncrement: 50 }, { Movement: 'Leg Curl', Sets: 3, Reps: 12, RM: 0, RPE: 8, relativeLift: '', weightIncrement: 0 }, { Movement: 'Calf Raise', Sets: 3, Reps: 15, RM: 0, RPE: 8, relativeLift: '', weightIncrement: 0 }],
    ],
    [
        [{ Movement: 'Bench Press', Sets: 4, Reps: 8, RM: 0.6, RPE: 7, relativeLift: '', weightIncrement: 50 }, { Movement: 'Seated DB Press', Sets: 4, Reps: 12, RM: 0, RPE: 8, relativeLift: '', weightIncrement: 0 }, { Movement: 'Dumbbell Flyes', Sets: 3, Reps: 15, RM: 0, RPE: 8, relativeLift: '', weightIncrement: 0 }, { Movement: 'Tricep Pulldown', Sets: 4, Reps: 15, RM: 0, RPE: 8, relativeLift: '', weightIncrement: 0 }],
        [{ Movement: 'Lat Pulldown', Sets: 4, Reps: 12, RM: 0, RPE: 8, relativeLift: '', weightIncrement: 0 }, { Movement: 'Seated Row', Sets: 4, Reps: 12, RM: 0, RPE: 8, relativeLift: '', weightIncrement: 0 }, { Movement: 'Bent Over Lateral Raise', Sets: 3, Reps: 15, RM: 0, RPE: 8, relativeLift: '', weightIncrement: 0 }, { Movement: 'Incline Dumbbell Curl', Sets: 3, Reps: 15, RM: 0, RPE: 8, relativeLift: '', weightIncrement: 0 }],
        [{ Movement: 'Back Squat', Sets: 4, Reps: 8, RM: 0.6, RPE: 8, relativeLift: '', weightIncrement: 80 }, { Movement: 'Leg Press', Sets: 4, Reps: 12, RM: 0, RPE: 8, relativeLift: '', weightIncrement: 0 }, { Movement: 'Romanian Deadlift', Sets: 4, Reps: 12, RM: 0.25, RPE: 8, relativeLift: 'Deadlift', weightIncrement: 60 }, { Movement: 'Leg Curl', Sets: 3, Reps: 12, RM: 0, RPE: 8, relativeLift: '', weightIncrement: 0 }, { Movement: 'Calf Raise', Sets: 3, Reps: 15, RM: 0, RPE: 8, relativeLift: '', weightIncrement: 0 }],
    ],
    [
        [{ Movement: 'Bench Press', Sets: 4, Reps: 8, RM: 0.6, RPE: 7, relativeLift: '', weightIncrement: 55 }, { Movement: 'Seated DB Press', Sets: 4, Reps: 12, RM: 0, RPE: 8, relativeLift: '', weightIncrement: 0 }, { Movement: 'Dumbbell Flyes', Sets: 3, Reps: 15, RM: 0, RPE: 8, relativeLift: '', weightIncrement: 0 }, { Movement: 'Tricep Pulldown', Sets: 4, Reps: 15, RM: 0, RPE: 8, relativeLift: '', weightIncrement: 0 }],
        [{ Movement: 'Lat Pulldown', Sets: 4, Reps: 12, RM: 0, RPE: 8, relativeLift: '', weightIncrement: 0 }, { Movement: 'Seated Row', Sets: 4, Reps: 12, RM: 0, RPE: 8, relativeLift: '', weightIncrement: 0 }, { Movement: 'Bent Over Lateral Raise', Sets: 3, Reps: 15, RM: 0, RPE: 8, relativeLift: '', weightIncrement: 0 }, { Movement: 'Incline Dumbbell Curl', Sets: 3, Reps: 15, RM: 0, RPE: 8, relativeLift: '', weightIncrement: 0 }],
        [{ Movement: 'Back Squat', Sets: 4, Reps: 8, RM: 0.6, RPE: 8, relativeLift: '', weightIncrement: 90 }, { Movement: 'Leg Press', Sets: 4, Reps: 12, RM: 0, RPE: 8, relativeLift: '', weightIncrement: 0 }, { Movement: 'Romanian Deadlift', Sets: 4, Reps: 12, RM: 0.25, RPE: 8, relativeLift: 'Deadlift', weightIncrement: 70 }, { Movement: 'Leg Curl', Sets: 3, Reps: 12, RM: 0, RPE: 8, relativeLift: '', weightIncrement: 0 }, { Movement: 'Calf Raise', Sets: 3, Reps: 15, RM: 0, RPE: 8, relativeLift: '', weightIncrement: 0 }],
    ]
];
const AESTHETICS_4_DAY = [
    [
        [{ Movement: 'Bench Press', Sets: 4, Reps: 8, RM: 0.6, RPE: 7, relativeLift: '', weightIncrement: 0 }, { Movement: 'Seated DB Press', Sets: 4, Reps: 12, RM: 0, RPE: 8, relativeLift: '', weightIncrement: 0 }, { Movement: 'Dumbbell Flyes', Sets: 3, Reps: 15, RM: 0, RPE: 8, relativeLift: '', weightIncrement: 0 }, { Movement: 'Tricep Pulldown', Sets: 4, Reps: 15, RM: 0, RPE: 8, relativeLift: '', weightIncrement: 0 }],
        [{ Movement: 'Lat Pulldown', Sets: 4, Reps: 12, RM: 0, RPE: 8, relativeLift: '', weightIncrement: 0 }, { Movement: 'Seated Row', Sets: 4, Reps: 12, RM: 0, RPE: 8, relativeLift: '', weightIncrement: 0 }, { Movement: 'Bent Over Lateral Raise', Sets: 3, Reps: 15, RM: 0, RPE: 8, relativeLift: '', weightIncrement: 0 }, { Movement: 'Incline Dumbbell Curl', Sets: 3, Reps: 15, RM: 0, RPE: 8, relativeLift: '', weightIncrement: 0 }],
        [{ Movement: 'Back Squat', Sets: 4, Reps: 8, RM: 0.6, RPE: 8, relativeLift: '', weightIncrement: 0 }, { Movement: 'Leg Press', Sets: 4, Reps: 12, RM: 0, RPE: 8, relativeLift: '', weightIncrement: 0 }, { Movement: 'Romanian Deadlift', Sets: 4, Reps: 12, RM: 0.25, RPE: 8, relativeLift: 'Deadlift', weightIncrement: 0 }, { Movement: 'Leg Curl', Sets: 3, Reps: 12, RM: 0, RPE: 8, relativeLift: '', weightIncrement: 0 }, { Movement: 'Calf Raise', Sets: 3, Reps: 15, RM: 0, RPE: 8, relativeLift: '', weightIncrement: 0 }],
        [{ Movement: 'Lat Pulldown', Sets: 4, Reps: 12, RM: 0, RPE: 8, relativeLift: '', weightIncrement: 0 }, { Movement: 'Seated Row', Sets: 4, Reps: 12, RM: 0, RPE: 8, relativeLift: '', weightIncrement: 0 }, { Movement: 'Bent Over Lateral Raise', Sets: 3, Reps: 15, RM: 0, RPE: 8, relativeLift: '', weightIncrement: 0 }, { Movement: 'Incline Dumbbell Curl', Sets: 3, Reps: 15, RM: 0, RPE: 8, relativeLift: '', weightIncrement: 0 }]
    ],
    [
        [{ Movement: 'Bench Press', Sets: 4, Reps: 8, RM: 0.6, RPE: 7, relativeLift: '', weightIncrement: 5 }, { Movement: 'Seated DB Press', Sets: 4, Reps: 12, RM: 0, RPE: 8, relativeLift: '', weightIncrement: 0 }, { Movement: 'Dumbbell Flyes', Sets: 3, Reps: 15, RM: 0, RPE: 8, relativeLift: '', weightIncrement: 0 }, { Movement: 'Tricep Pulldown', Sets: 4, Reps: 15, RM: 0, RPE: 8, relativeLift: '', weightIncrement: 0 }],
        [{ Movement: 'Lat Pulldown', Sets: 4, Reps: 12, RM: 0, RPE: 8, relativeLift: '', weightIncrement: 0 }, { Movement: 'Seated Row', Sets: 4, Reps: 12, RM: 0, RPE: 8, relativeLift: '', weightIncrement: 0 }, { Movement: 'Bent Over Lateral Raise', Sets: 3, Reps: 15, RM: 0, RPE: 8, relativeLift: '', weightIncrement: 0 }, { Movement: 'Incline Dumbbell Curl', Sets: 3, Reps: 15, RM: 0, RPE: 8, relativeLift: '', weightIncrement: 0 }],
        [{ Movement: 'Back Squat', Sets: 4, Reps: 8, RM: 0.6, RPE: 8, relativeLift: '', weightIncrement: 10 }, { Movement: 'Leg Press', Sets: 4, Reps: 12, RM: 0, RPE: 8, relativeLift: '', weightIncrement: 0 }, { Movement: 'Romanian Deadlift', Sets: 4, Reps: 12, RM: 0.25, RPE: 8, relativeLift: 'Deadlift', weightIncrement: 10 }, { Movement: 'Leg Curl', Sets: 3, Reps: 12, RM: 0, RPE: 8, relativeLift: '', weightIncrement: 0 }, { Movement: 'Calf Raise', Sets: 3, Reps: 15, RM: 0, RPE: 8, relativeLift: '', weightIncrement: 0 }],
        [{ Movement: 'Lat Pulldown', Sets: 4, Reps: 12, RM: 0, RPE: 8, relativeLift: '', weightIncrement: 0 }, { Movement: 'Seated Row', Sets: 4, Reps: 12, RM: 0, RPE: 8, relativeLift: '', weightIncrement: 0 }, { Movement: 'Bent Over Lateral Raise', Sets: 3, Reps: 15, RM: 0, RPE: 8, relativeLift: '', weightIncrement: 0 }, { Movement: 'Incline Dumbbell Curl', Sets: 3, Reps: 15, RM: 0, RPE: 8, relativeLift: '', weightIncrement: 0 }]
    ],
    [
        [{ Movement: 'Bench Press', Sets: 4, Reps: 8, RM: 0.6, RPE: 7, relativeLift: '', weightIncrement: 10 }, { Movement: 'Seated DB Press', Sets: 4, Reps: 12, RM: 0, RPE: 8, relativeLift: '', weightIncrement: 0 }, { Movement: 'Dumbbell Flyes', Sets: 3, Reps: 15, RM: 0, RPE: 8, relativeLift: '', weightIncrement: 0 }, { Movement: 'Tricep Pulldown', Sets: 4, Reps: 15, RM: 0, RPE: 8, relativeLift: '', weightIncrement: 0 }],
        [{ Movement: 'Lat Pulldown', Sets: 4, Reps: 12, RM: 0, RPE: 8, relativeLift: '', weightIncrement: 0 }, { Movement: 'Seated Row', Sets: 4, Reps: 12, RM: 0, RPE: 8, relativeLift: '', weightIncrement: 0 }, { Movement: 'Bent Over Lateral Raise', Sets: 3, Reps: 15, RM: 0, RPE: 8, relativeLift: '', weightIncrement: 0 }, { Movement: 'Incline Dumbbell Curl', Sets: 3, Reps: 15, RM: 0, RPE: 8, relativeLift: '', weightIncrement: 0 }],
        [{ Movement: 'Back Squat', Sets: 4, Reps: 8, RM: 0.6, RPE: 8, relativeLift: '', weightIncrement: 20 }, { Movement: 'Leg Press', Sets: 4, Reps: 12, RM: 0, RPE: 8, relativeLift: '', weightIncrement: 0 }, { Movement: 'Romanian Deadlift', Sets: 4, Reps: 12, RM: 0.25, RPE: 8, relativeLift: 'Deadlift', weightIncrement: 20 }, { Movement: 'Leg Curl', Sets: 3, Reps: 12, RM: 0, RPE: 8, relativeLift: '', weightIncrement: 0 }, { Movement: 'Calf Raise', Sets: 3, Reps: 15, RM: 0, RPE: 8, relativeLift: '', weightIncrement: 0 }],
        [{ Movement: 'Lat Pulldown', Sets: 4, Reps: 12, RM: 0, RPE: 8, relativeLift: '', weightIncrement: 0 }, { Movement: 'Seated Row', Sets: 4, Reps: 12, RM: 0, RPE: 8, relativeLift: '', weightIncrement: 0 }, { Movement: 'Bent Over Lateral Raise', Sets: 3, Reps: 15, RM: 0, RPE: 8, relativeLift: '', weightIncrement: 0 }, { Movement: 'Incline Dumbbell Curl', Sets: 3, Reps: 15, RM: 0, RPE: 8, relativeLift: '', weightIncrement: 0 }]
    ],
    [
        [{ Movement: 'Bench Press', Sets: 4, Reps: 8, RM: 0.6, RPE: 7, relativeLift: '', weightIncrement: 15 }, { Movement: 'Seated DB Press', Sets: 4, Reps: 12, RM: 0, RPE: 8, relativeLift: '', weightIncrement: 0 }, { Movement: 'Dumbbell Flyes', Sets: 3, Reps: 15, RM: 0, RPE: 8, relativeLift: '', weightIncrement: 0 }, { Movement: 'Tricep Pulldown', Sets: 4, Reps: 15, RM: 0, RPE: 8, relativeLift: '', weightIncrement: 0 }],
        [{ Movement: 'Lat Pulldown', Sets: 4, Reps: 12, RM: 0, RPE: 8, relativeLift: '', weightIncrement: 0 }, { Movement: 'Seated Row', Sets: 4, Reps: 12, RM: 0, RPE: 8, relativeLift: '', weightIncrement: 0 }, { Movement: 'Bent Over Lateral Raise', Sets: 3, Reps: 15, RM: 0, RPE: 8, relativeLift: '', weightIncrement: 0 }, { Movement: 'Incline Dumbbell Curl', Sets: 3, Reps: 15, RM: 0, RPE: 8, relativeLift: '', weightIncrement: 0 }],
        [{ Movement: 'Back Squat', Sets: 4, Reps: 8, RM: 0.6, RPE: 8, relativeLift: '', weightIncrement: 30 }, { Movement: 'Leg Press', Sets: 4, Reps: 12, RM: 0, RPE: 8, relativeLift: '', weightIncrement: 0 }, { Movement: 'Romanian Deadlift', Sets: 4, Reps: 12, RM: 0.25, RPE: 8, relativeLift: 'Deadlift', weightIncrement: 25 }, { Movement: 'Leg Curl', Sets: 3, Reps: 12, RM: 0, RPE: 8, relativeLift: '', weightIncrement: 0 }, { Movement: 'Calf Raise', Sets: 3, Reps: 15, RM: 0, RPE: 8, relativeLift: '', weightIncrement: 0 }],
        [{ Movement: 'Lat Pulldown', Sets: 4, Reps: 12, RM: 0, RPE: 8, relativeLift: '', weightIncrement: 0 }, { Movement: 'Seated Row', Sets: 4, Reps: 12, RM: 0, RPE: 8, relativeLift: '', weightIncrement: 0 }, { Movement: 'Bent Over Lateral Raise', Sets: 3, Reps: 15, RM: 0, RPE: 8, relativeLift: '', weightIncrement: 0 }, { Movement: 'Incline Dumbbell Curl', Sets: 3, Reps: 15, RM: 0, RPE: 8, relativeLift: '', weightIncrement: 0 }]
    ],
    [
        [{ Movement: 'Bench Press', Sets: 4, Reps: 8, RM: 0.6, RPE: 7, relativeLift: '', weightIncrement: 20 }, { Movement: 'Seated DB Press', Sets: 4, Reps: 12, RM: 0, RPE: 8, relativeLift: '', weightIncrement: 0 }, { Movement: 'Dumbbell Flyes', Sets: 3, Reps: 15, RM: 0, RPE: 8, relativeLift: '', weightIncrement: 0 }, { Movement: 'Tricep Pulldown', Sets: 4, Reps: 15, RM: 0, RPE: 8, relativeLift: '', weightIncrement: 0 }],
        [{ Movement: 'Lat Pulldown', Sets: 4, Reps: 12, RM: 0, RPE: 8, relativeLift: '', weightIncrement: 0 }, { Movement: 'Seated Row', Sets: 4, Reps: 12, RM: 0, RPE: 8, relativeLift: '', weightIncrement: 0 }, { Movement: 'Bent Over Lateral Raise', Sets: 3, Reps: 15, RM: 0, RPE: 8, relativeLift: '', weightIncrement: 0 }, { Movement: 'Incline Dumbbell Curl', Sets: 3, Reps: 15, RM: 0, RPE: 8, relativeLift: '', weightIncrement: 0 }],
        [{ Movement: 'Back Squat', Sets: 4, Reps: 8, RM: 0.6, RPE: 8, relativeLift: '', weightIncrement: 40 }, { Movement: 'Leg Press', Sets: 4, Reps: 12, RM: 0, RPE: 8, relativeLift: '', weightIncrement: 0 }, { Movement: 'Romanian Deadlift', Sets: 4, Reps: 12, RM: 0.25, RPE: 8, relativeLift: 'Deadlift', weightIncrement: 30 }, { Movement: 'Leg Curl', Sets: 3, Reps: 12, RM: 0, RPE: 8, relativeLift: '', weightIncrement: 0 }, { Movement: 'Calf Raise', Sets: 3, Reps: 15, RM: 0, RPE: 8, relativeLift: '', weightIncrement: 0 }],
        [{ Movement: 'Lat Pulldown', Sets: 4, Reps: 12, RM: 0, RPE: 8, relativeLift: '', weightIncrement: 0 }, { Movement: 'Seated Row', Sets: 4, Reps: 12, RM: 0, RPE: 8, relativeLift: '', weightIncrement: 0 }, { Movement: 'Bent Over Lateral Raise', Sets: 3, Reps: 15, RM: 0, RPE: 8, relativeLift: '', weightIncrement: 0 }, { Movement: 'Incline Dumbbell Curl', Sets: 3, Reps: 15, RM: 0, RPE: 8, relativeLift: '', weightIncrement: 0 }]
    ],
    [
        [{ Movement: 'Bench Press', Sets: 4, Reps: 8, RM: 0.6, RPE: 7, relativeLift: '', weightIncrement: 25 }, { Movement: 'Seated DB Press', Sets: 4, Reps: 12, RM: 0, RPE: 8, relativeLift: '', weightIncrement: 0 }, { Movement: 'Dumbbell Flyes', Sets: 3, Reps: 15, RM: 0, RPE: 8, relativeLift: '', weightIncrement: 0 }, { Movement: 'Tricep Pulldown', Sets: 4, Reps: 15, RM: 0, RPE: 8, relativeLift: '', weightIncrement: 0 }],
        [{ Movement: 'Lat Pulldown', Sets: 4, Reps: 12, RM: 0, RPE: 8, relativeLift: '', weightIncrement: 0 }, { Movement: 'Seated Row', Sets: 4, Reps: 12, RM: 0, RPE: 8, relativeLift: '', weightIncrement: 0 }, { Movement: 'Bent Over Lateral Raise', Sets: 3, Reps: 15, RM: 0, RPE: 8, relativeLift: '', weightIncrement: 0 }, { Movement: 'Incline Dumbbell Curl', Sets: 3, Reps: 15, RM: 0, RPE: 8, relativeLift: '', weightIncrement: 0 }],
        [{ Movement: 'Back Squat', Sets: 4, Reps: 8, RM: 0.6, RPE: 8, relativeLift: '', weightIncrement: 45 }, { Movement: 'Leg Press', Sets: 4, Reps: 12, RM: 0, RPE: 8, relativeLift: '', weightIncrement: 0 }, { Movement: 'Romanian Deadlift', Sets: 4, Reps: 12, RM: 0.25, RPE: 8, relativeLift: 'Deadlift', weightIncrement: 35 }, { Movement: 'Leg Curl', Sets: 3, Reps: 12, RM: 0, RPE: 8, relativeLift: '', weightIncrement: 0 }, { Movement: 'Calf Raise', Sets: 3, Reps: 15, RM: 0, RPE: 8, relativeLift: '', weightIncrement: 0 }],
        [{ Movement: 'Lat Pulldown', Sets: 4, Reps: 12, RM: 0, RPE: 8, relativeLift: '', weightIncrement: 0 }, { Movement: 'Seated Row', Sets: 4, Reps: 12, RM: 0, RPE: 8, relativeLift: '', weightIncrement: 0 }, { Movement: 'Bent Over Lateral Raise', Sets: 3, Reps: 15, RM: 0, RPE: 8, relativeLift: '', weightIncrement: 0 }, { Movement: 'Incline Dumbbell Curl', Sets: 3, Reps: 15, RM: 0, RPE: 8, relativeLift: '', weightIncrement: 0 }]
    ],
    [
        [{ Movement: 'Bench Press', Sets: 4, Reps: 8, RM: 0.6, RPE: 7, relativeLift: '', weightIncrement: 30 }, { Movement: 'Seated DB Press', Sets: 4, Reps: 12, RM: 0, RPE: 8, relativeLift: '', weightIncrement: 0 }, { Movement: 'Dumbbell Flyes', Sets: 3, Reps: 15, RM: 0, RPE: 8, relativeLift: '', weightIncrement: 0 }, { Movement: 'Tricep Pulldown', Sets: 4, Reps: 15, RM: 0, RPE: 8, relativeLift: '', weightIncrement: 0 }],
        [{ Movement: 'Lat Pulldown', Sets: 4, Reps: 12, RM: 0, RPE: 8, relativeLift: '', weightIncrement: 0 }, { Movement: 'Seated Row', Sets: 4, Reps: 12, RM: 0, RPE: 8, relativeLift: '', weightIncrement: 0 }, { Movement: 'Bent Over Lateral Raise', Sets: 3, Reps: 15, RM: 0, RPE: 8, relativeLift: '', weightIncrement: 0 }, { Movement: 'Incline Dumbbell Curl', Sets: 3, Reps: 15, RM: 0, RPE: 8, relativeLift: '', weightIncrement: 0 }],
        [{ Movement: 'Back Squat', Sets: 4, Reps: 8, RM: 0.6, RPE: 8, relativeLift: '', weightIncrement: 50 }, { Movement: 'Leg Press', Sets: 4, Reps: 12, RM: 0, RPE: 8, relativeLift: '', weightIncrement: 0 }, { Movement: 'Romanian Deadlift', Sets: 4, Reps: 12, RM: 0.25, RPE: 8, relativeLift: 'Deadlift', weightIncrement: 40 }, { Movement: 'Leg Curl', Sets: 3, Reps: 12, RM: 0, RPE: 8, relativeLift: '', weightIncrement: 0 }, { Movement: 'Calf Raise', Sets: 3, Reps: 15, RM: 0, RPE: 8, relativeLift: '', weightIncrement: 0 }],
        [{ Movement: 'Lat Pulldown', Sets: 4, Reps: 12, RM: 0, RPE: 8, relativeLift: '', weightIncrement: 0 }, { Movement: 'Seated Row', Sets: 4, Reps: 12, RM: 0, RPE: 8, relativeLift: '', weightIncrement: 0 }, { Movement: 'Bent Over Lateral Raise', Sets: 3, Reps: 15, RM: 0, RPE: 8, relativeLift: '', weightIncrement: 0 }, { Movement: 'Incline Dumbbell Curl', Sets: 3, Reps: 15, RM: 0, RPE: 8, relativeLift: '', weightIncrement: 0 }]
    ],
    [
        [{ Movement: 'Bench Press', Sets: 4, Reps: 8, RM: 0.6, RPE: 7, relativeLift: '', weightIncrement: 35 }, { Movement: 'Seated DB Press', Sets: 4, Reps: 12, RM: 0, RPE: 8, relativeLift: '', weightIncrement: 0 }, { Movement: 'Dumbbell Flyes', Sets: 3, Reps: 15, RM: 0, RPE: 8, relativeLift: '', weightIncrement: 0 }, { Movement: 'Tricep Pulldown', Sets: 4, Reps: 15, RM: 0, RPE: 8, relativeLift: '', weightIncrement: 0 }],
        [{ Movement: 'Lat Pulldown', Sets: 4, Reps: 12, RM: 0, RPE: 8, relativeLift: '', weightIncrement: 0 }, { Movement: 'Seated Row', Sets: 4, Reps: 12, RM: 0, RPE: 8, relativeLift: '', weightIncrement: 0 }, { Movement: 'Bent Over Lateral Raise', Sets: 3, Reps: 15, RM: 0, RPE: 8, relativeLift: '', weightIncrement: 0 }, { Movement: 'Incline Dumbbell Curl', Sets: 3, Reps: 15, RM: 0, RPE: 8, relativeLift: '', weightIncrement: 0 }],
        [{ Movement: 'Back Squat', Sets: 4, Reps: 8, RM: 0.6, RPE: 8, relativeLift: '', weightIncrement: 55 }, { Movement: 'Leg Press', Sets: 4, Reps: 12, RM: 0, RPE: 8, relativeLift: '', weightIncrement: 0 }, { Movement: 'Romanian Deadlift', Sets: 4, Reps: 12, RM: 0.25, RPE: 8, relativeLift: 'Deadlift', weightIncrement: 40 }, { Movement: 'Leg Curl', Sets: 3, Reps: 12, RM: 0, RPE: 8, relativeLift: '', weightIncrement: 0 }, { Movement: 'Calf Raise', Sets: 3, Reps: 15, RM: 0, RPE: 8, relativeLift: '', weightIncrement: 0 }],
        [{ Movement: 'Lat Pulldown', Sets: 4, Reps: 12, RM: 0, RPE: 8, relativeLift: '', weightIncrement: 0 }, { Movement: 'Seated Row', Sets: 4, Reps: 12, RM: 0, RPE: 8, relativeLift: '', weightIncrement: 0 }, { Movement: 'Bent Over Lateral Raise', Sets: 3, Reps: 15, RM: 0, RPE: 8, relativeLift: '', weightIncrement: 0 }, { Movement: 'Incline Dumbbell Curl', Sets: 3, Reps: 15, RM: 0, RPE: 8, relativeLift: '', weightIncrement: 0 }]
    ],
    [
        [{ Movement: 'Bench Press', Sets: 4, Reps: 8, RM: 0.6, RPE: 7, relativeLift: '', weightIncrement: 40 }, { Movement: 'Seated DB Press', Sets: 4, Reps: 12, RM: 0, RPE: 8, relativeLift: '', weightIncrement: 0 }, { Movement: 'Dumbbell Flyes', Sets: 3, Reps: 15, RM: 0, RPE: 8, relativeLift: '', weightIncrement: 0 }, { Movement: 'Tricep Pulldown', Sets: 4, Reps: 15, RM: 0, RPE: 8, relativeLift: '', weightIncrement: 0 }],
        [{ Movement: 'Lat Pulldown', Sets: 4, Reps: 12, RM: 0, RPE: 8, relativeLift: '', weightIncrement: 0 }, { Movement: 'Seated Row', Sets: 4, Reps: 12, RM: 0, RPE: 8, relativeLift: '', weightIncrement: 0 }, { Movement: 'Bent Over Lateral Raise', Sets: 3, Reps: 15, RM: 0, RPE: 8, relativeLift: '', weightIncrement: 0 }, { Movement: 'Incline Dumbbell Curl', Sets: 3, Reps: 15, RM: 0, RPE: 8, relativeLift: '', weightIncrement: 0 }],
        [{ Movement: 'Back Squat', Sets: 4, Reps: 8, RM: 0.6, RPE: 8, relativeLift: '', weightIncrement: 60 }, { Movement: 'Leg Press', Sets: 4, Reps: 12, RM: 0, RPE: 8, relativeLift: '', weightIncrement: 0 }, { Movement: 'Romanian Deadlift', Sets: 4, Reps: 12, RM: 0.25, RPE: 8, relativeLift: 'Deadlift', weightIncrement: 45 }, { Movement: 'Leg Curl', Sets: 3, Reps: 12, RM: 0, RPE: 8, relativeLift: '', weightIncrement: 0 }, { Movement: 'Calf Raise', Sets: 3, Reps: 15, RM: 0, RPE: 8, relativeLift: '', weightIncrement: 0 }],
        [{ Movement: 'Lat Pulldown', Sets: 4, Reps: 12, RM: 0, RPE: 8, relativeLift: '', weightIncrement: 0 }, { Movement: 'Seated Row', Sets: 4, Reps: 12, RM: 0, RPE: 8, relativeLift: '', weightIncrement: 0 }, { Movement: 'Bent Over Lateral Raise', Sets: 3, Reps: 15, RM: 0, RPE: 8, relativeLift: '', weightIncrement: 0 }, { Movement: 'Incline Dumbbell Curl', Sets: 3, Reps: 15, RM: 0, RPE: 8, relativeLift: '', weightIncrement: 0 }]
    ],
    [
        [{ Movement: 'Bench Press', Sets: 4, Reps: 8, RM: 0.6, RPE: 7, relativeLift: '', weightIncrement: 45 }, { Movement: 'Seated DB Press', Sets: 4, Reps: 12, RM: 0, RPE: 8, relativeLift: '', weightIncrement: 0 }, { Movement: 'Dumbbell Flyes', Sets: 3, Reps: 15, RM: 0, RPE: 8, relativeLift: '', weightIncrement: 0 }, { Movement: 'Tricep Pulldown', Sets: 4, Reps: 15, RM: 0, RPE: 8, relativeLift: '', weightIncrement: 0 }],
        [{ Movement: 'Lat Pulldown', Sets: 4, Reps: 12, RM: 0, RPE: 8, relativeLift: '', weightIncrement: 0 }, { Movement: 'Seated Row', Sets: 4, Reps: 12, RM: 0, RPE: 8, relativeLift: '', weightIncrement: 0 }, { Movement: 'Bent Over Lateral Raise', Sets: 3, Reps: 15, RM: 0, RPE: 8, relativeLift: '', weightIncrement: 0 }, { Movement: 'Incline Dumbbell Curl', Sets: 3, Reps: 15, RM: 0, RPE: 8, relativeLift: '', weightIncrement: 0 }],
        [{ Movement: 'Back Squat', Sets: 4, Reps: 8, RM: 0.6, RPE: 8, relativeLift: '', weightIncrement: 70 }, { Movement: 'Leg Press', Sets: 4, Reps: 12, RM: 0, RPE: 8, relativeLift: '', weightIncrement: 0 }, { Movement: 'Romanian Deadlift', Sets: 4, Reps: 12, RM: 0.25, RPE: 8, relativeLift: 'Deadlift', weightIncrement: 50 }, { Movement: 'Leg Curl', Sets: 3, Reps: 12, RM: 0, RPE: 8, relativeLift: '', weightIncrement: 0 }, { Movement: 'Calf Raise', Sets: 3, Reps: 15, RM: 0, RPE: 8, relativeLift: '', weightIncrement: 0 }],
        [{ Movement: 'Lat Pulldown', Sets: 4, Reps: 12, RM: 0, RPE: 8, relativeLift: '', weightIncrement: 0 }, { Movement: 'Seated Row', Sets: 4, Reps: 12, RM: 0, RPE: 8, relativeLift: '', weightIncrement: 0 }, { Movement: 'Bent Over Lateral Raise', Sets: 3, Reps: 15, RM: 0, RPE: 8, relativeLift: '', weightIncrement: 0 }, { Movement: 'Incline Dumbbell Curl', Sets: 3, Reps: 15, RM: 0, RPE: 8, relativeLift: '', weightIncrement: 0 }]
    ],
    [
        [{ Movement: 'Bench Press', Sets: 4, Reps: 8, RM: 0.6, RPE: 7, relativeLift: '', weightIncrement: 50 }, { Movement: 'Seated DB Press', Sets: 4, Reps: 12, RM: 0, RPE: 8, relativeLift: '', weightIncrement: 0 }, { Movement: 'Dumbbell Flyes', Sets: 3, Reps: 15, RM: 0, RPE: 8, relativeLift: '', weightIncrement: 0 }, { Movement: 'Tricep Pulldown', Sets: 4, Reps: 15, RM: 0, RPE: 8, relativeLift: '', weightIncrement: 0 }],
        [{ Movement: 'Lat Pulldown', Sets: 4, Reps: 12, RM: 0, RPE: 8, relativeLift: '', weightIncrement: 0 }, { Movement: 'Seated Row', Sets: 4, Reps: 12, RM: 0, RPE: 8, relativeLift: '', weightIncrement: 0 }, { Movement: 'Bent Over Lateral Raise', Sets: 3, Reps: 15, RM: 0, RPE: 8, relativeLift: '', weightIncrement: 0 }, { Movement: 'Incline Dumbbell Curl', Sets: 3, Reps: 15, RM: 0, RPE: 8, relativeLift: '', weightIncrement: 0 }],
        [{ Movement: 'Back Squat', Sets: 4, Reps: 8, RM: 0.6, RPE: 8, relativeLift: '', weightIncrement: 80 }, { Movement: 'Leg Press', Sets: 4, Reps: 12, RM: 0, RPE: 8, relativeLift: '', weightIncrement: 0 }, { Movement: 'Romanian Deadlift', Sets: 4, Reps: 12, RM: 0.25, RPE: 8, relativeLift: 'Deadlift', weightIncrement: 60 }, { Movement: 'Leg Curl', Sets: 3, Reps: 12, RM: 0, RPE: 8, relativeLift: '', weightIncrement: 0 }, { Movement: 'Calf Raise', Sets: 3, Reps: 15, RM: 0, RPE: 8, relativeLift: '', weightIncrement: 0 }],
        [{ Movement: 'Lat Pulldown', Sets: 4, Reps: 12, RM: 0, RPE: 8, relativeLift: '', weightIncrement: 0 }, { Movement: 'Seated Row', Sets: 4, Reps: 12, RM: 0, RPE: 8, relativeLift: '', weightIncrement: 0 }, { Movement: 'Bent Over Lateral Raise', Sets: 3, Reps: 15, RM: 0, RPE: 8, relativeLift: '', weightIncrement: 0 }, { Movement: 'Incline Dumbbell Curl', Sets: 3, Reps: 15, RM: 0, RPE: 8, relativeLift: '', weightIncrement: 0 }]
    ],
    [
        [{ Movement: 'Bench Press', Sets: 4, Reps: 8, RM: 0.6, RPE: 7, relativeLift: '', weightIncrement: 55 }, { Movement: 'Seated DB Press', Sets: 4, Reps: 12, RM: 0, RPE: 8, relativeLift: '', weightIncrement: 0 }, { Movement: 'Dumbbell Flyes', Sets: 3, Reps: 15, RM: 0, RPE: 8, relativeLift: '', weightIncrement: 0 }, { Movement: 'Tricep Pulldown', Sets: 4, Reps: 15, RM: 0, RPE: 8, relativeLift: '', weightIncrement: 0 }],
        [{ Movement: 'Lat Pulldown', Sets: 4, Reps: 12, RM: 0, RPE: 8, relativeLift: '', weightIncrement: 0 }, { Movement: 'Seated Row', Sets: 4, Reps: 12, RM: 0, RPE: 8, relativeLift: '', weightIncrement: 0 }, { Movement: 'Bent Over Lateral Raise', Sets: 3, Reps: 15, RM: 0, RPE: 8, relativeLift: '', weightIncrement: 0 }, { Movement: 'Incline Dumbbell Curl', Sets: 3, Reps: 15, RM: 0, RPE: 8, relativeLift: '', weightIncrement: 0 }],
        [{ Movement: 'Back Squat', Sets: 4, Reps: 8, RM: 0.6, RPE: 8, relativeLift: '', weightIncrement: 90 }, { Movement: 'Leg Press', Sets: 4, Reps: 12, RM: 0, RPE: 8, relativeLift: '', weightIncrement: 0 }, { Movement: 'Romanian Deadlift', Sets: 4, Reps: 12, RM: 0.25, RPE: 8, relativeLift: 'Deadlift', weightIncrement: 70 }, { Movement: 'Leg Curl', Sets: 3, Reps: 12, RM: 0, RPE: 8, relativeLift: '', weightIncrement: 0 }, { Movement: 'Calf Raise', Sets: 3, Reps: 15, RM: 0, RPE: 8, relativeLift: '', weightIncrement: 0 }],
        [{ Movement: 'Lat Pulldown', Sets: 4, Reps: 12, RM: 0, RPE: 8, relativeLift: '', weightIncrement: 0 }, { Movement: 'Seated Row', Sets: 4, Reps: 12, RM: 0, RPE: 8, relativeLift: '', weightIncrement: 0 }, { Movement: 'Bent Over Lateral Raise', Sets: 3, Reps: 15, RM: 0, RPE: 8, relativeLift: '', weightIncrement: 0 }, { Movement: 'Incline Dumbbell Curl', Sets: 3, Reps: 15, RM: 0, RPE: 8, relativeLift: '', weightIncrement: 0 }]
    ]
];
const AESTHETICS_5_DAY = [
    [
        [{ Movement: 'Bench Press', Sets: 5, Reps: 5, RM: 0.5, RPE: 7, relativeLift: '', weightIncrement: 0 }, { Movement: 'Military Press', Sets: 4, Reps: 8, RM: 0.5, RPE: 7, relativeLift: 'Bench Press', weightIncrement: 0 }, { Movement: 'Pullups', Sets: 4, Reps: 8, RM: 0, RPE: 9, relativeLift: '', weightIncrement: 0 }, { Movement: 'Dips', Sets: 4, Reps: 8, RM: 0, RPE: 9, relativeLift: '', weightIncrement: 0 }, { Movement: 'Curls', Sets: 4, Reps: 12, RM: 0, RPE: 8, relativeLift: '', weightIncrement: 0 }],
        [{ Movement: 'Back Squat', Sets: 5, Reps: 5, RM: 0.5, RPE: 7, relativeLift: '', weightIncrement: 0 }, { Movement: 'Deadlift', Sets: 3, Reps: 8, RM: 0.4, RPE: 7, relativeLift: '', weightIncrement: 0 }, { Movement: 'Hamstring Curls', Sets: 4, Reps: 12, RM: 0, RPE: 8, relativeLift: '', weightIncrement: 0 }, { Movement: 'Calf Raise', Sets: 3, Reps: 15, RM: 0, RPE: 9, relativeLift: '', weightIncrement: 0 }],
        [{ Movement: 'Bench Press', Sets: 4, Reps: 8, RM: 0.6, RPE: 7, relativeLift: '', weightIncrement: 0 }, { Movement: 'Seated DB Press', Sets: 4, Reps: 12, RM: 0, RPE: 8, relativeLift: '', weightIncrement: 0 }, { Movement: 'Dumbbell Flyes', Sets: 3, Reps: 15, RM: 0, RPE: 8, relativeLift: '', weightIncrement: 0 }, { Movement: 'Tricep Pulldown', Sets: 4, Reps: 15, RM: 0, RPE: 8, relativeLift: '', weightIncrement: 0 }],
        [{ Movement: 'Lat Pulldown', Sets: 4, Reps: 12, RM: 0, RPE: 8, relativeLift: '', weightIncrement: 0 }, { Movement: 'Seated Row', Sets: 4, Reps: 12, RM: 0, RPE: 8, relativeLift: '', weightIncrement: 0 }, { Movement: 'Bent Over Lateral Raise', Sets: 3, Reps: 15, RM: 0, RPE: 8, relativeLift: '', weightIncrement: 0 }, { Movement: 'Incline Dumbbell Curl', Sets: 3, Reps: 15, RM: 0, RPE: 8, relativeLift: '', weightIncrement: 0 }],
        [{ Movement: 'Back Squat', Sets: 4, Reps: 8, RM: 0.6, RPE: 8, relativeLift: '', weightIncrement: 0 }, { Movement: 'Leg Press', Sets: 4, Reps: 12, RM: 0, RPE: 8, relativeLift: '', weightIncrement: 0 }, { Movement: 'Romanian Deadlift', Sets: 4, Reps: 12, RM: 0.25, RPE: 8, relativeLift: 'Deadlift', weightIncrement: 0 }, { Movement: 'Leg Curl', Sets: 3, Reps: 12, RM: 0, RPE: 8, relativeLift: '', weightIncrement: 0 }, { Movement: 'Calf Raise', Sets: 3, Reps: 15, RM: 0, RPE: 8, relativeLift: '', weightIncrement: 0 }],
    ],
    [
        [{ Movement: 'Bench Press', Sets: 5, Reps: 5, RM: 0.5, RPE: 7, relativeLift: '', weightIncrement: 5 }, { Movement: 'Military Press', Sets: 4, Reps: 8, RM: 0.5, RPE: 7, relativeLift: 'Bench Press', weightIncrement: 5 }, { Movement: 'Pullups', Sets: 4, Reps: 8, RM: 0, RPE: 9, relativeLift: '', weightIncrement: 0 }, { Movement: 'Dips', Sets: 4, Reps: 8, RM: 0, RPE: 9, relativeLift: '', weightIncrement: 0 }, { Movement: 'Curls', Sets: 4, Reps: 12, RM: 0, RPE: 8, relativeLift: '', weightIncrement: 0 }],
        [{ Movement: 'Back Squat', Sets: 5, Reps: 5, RM: 0.5, RPE: 7, relativeLift: '', weightIncrement: 10 }, { Movement: 'Deadlift', Sets: 3, Reps: 8, RM: 0.4, RPE: 7, relativeLift: '', weightIncrement: 10 }, { Movement: 'Hamstring Curls', Sets: 4, Reps: 12, RM: 0, RPE: 8, relativeLift: '', weightIncrement: 0 }, { Movement: 'Calf Raise', Sets: 3, Reps: 15, RM: 0, RPE: 9, relativeLift: '', weightIncrement: 0 }],
        [{ Movement: 'Bench Press', Sets: 4, Reps: 8, RM: 0.6, RPE: 7, relativeLift: '', weightIncrement: 5 }, { Movement: 'Seated DB Press', Sets: 4, Reps: 12, RM: 0, RPE: 8, relativeLift: '', weightIncrement: 0 }, { Movement: 'Dumbbell Flyes', Sets: 3, Reps: 15, RM: 0, RPE: 8, relativeLift: '', weightIncrement: 0 }, { Movement: 'Tricep Pulldown', Sets: 4, Reps: 15, RM: 0, RPE: 8, relativeLift: '', weightIncrement: 0 }],
        [{ Movement: 'Lat Pulldown', Sets: 4, Reps: 12, RM: 0, RPE: 8, relativeLift: '', weightIncrement: 0 }, { Movement: 'Seated Row', Sets: 4, Reps: 12, RM: 0, RPE: 8, relativeLift: '', weightIncrement: 0 }, { Movement: 'Bent Over Lateral Raise', Sets: 3, Reps: 15, RM: 0, RPE: 8, relativeLift: '', weightIncrement: 0 }, { Movement: 'Incline Dumbbell Curl', Sets: 3, Reps: 15, RM: 0, RPE: 8, relativeLift: '', weightIncrement: 0 }],
        [{ Movement: 'Back Squat', Sets: 4, Reps: 8, RM: 0.6, RPE: 8, relativeLift: '', weightIncrement: 10 }, { Movement: 'Leg Press', Sets: 4, Reps: 12, RM: 0, RPE: 8, relativeLift: '', weightIncrement: 0 }, { Movement: 'Romanian Deadlift', Sets: 4, Reps: 12, RM: 0.25, RPE: 8, relativeLift: 'Deadlift', weightIncrement: 10 }, { Movement: 'Leg Curl', Sets: 3, Reps: 12, RM: 0, RPE: 8, relativeLift: '', weightIncrement: 0 }, { Movement: 'Calf Raise', Sets: 3, Reps: 15, RM: 0, RPE: 8, relativeLift: '', weightIncrement: 0 }],
    ],
    [
        [{ Movement: 'Bench Press', Sets: 5, Reps: 5, RM: 0.5, RPE: 7, relativeLift: '', weightIncrement: 10 }, { Movement: 'Military Press', Sets: 4, Reps: 8, RM: 0.5, RPE: 7, relativeLift: 'Bench Press', weightIncrement: 10 }, { Movement: 'Pullups', Sets: 4, Reps: 8, RM: 0, RPE: 9, relativeLift: '', weightIncrement: 0 }, { Movement: 'Dips', Sets: 4, Reps: 8, RM: 0, RPE: 9, relativeLift: '', weightIncrement: 0 }, { Movement: 'Curls', Sets: 4, Reps: 12, RM: 0, RPE: 8, relativeLift: '', weightIncrement: 0 }],
        [{ Movement: 'Back Squat', Sets: 5, Reps: 5, RM: 0.5, RPE: 7, relativeLift: '', weightIncrement: 20 }, { Movement: 'Deadlift', Sets: 3, Reps: 8, RM: 0.4, RPE: 7, relativeLift: '', weightIncrement: 20 }, { Movement: 'Hamstring Curls', Sets: 4, Reps: 12, RM: 0, RPE: 8, relativeLift: '', weightIncrement: 0 }, { Movement: 'Calf Raise', Sets: 3, Reps: 15, RM: 0, RPE: 9, relativeLift: '', weightIncrement: 0 }],
        [{ Movement: 'Bench Press', Sets: 4, Reps: 8, RM: 0.6, RPE: 7, relativeLift: '', weightIncrement: 10 }, { Movement: 'Seated DB Press', Sets: 4, Reps: 12, RM: 0, RPE: 8, relativeLift: '', weightIncrement: 0 }, { Movement: 'Dumbbell Flyes', Sets: 3, Reps: 15, RM: 0, RPE: 8, relativeLift: '', weightIncrement: 0 }, { Movement: 'Tricep Pulldown', Sets: 4, Reps: 15, RM: 0, RPE: 8, relativeLift: '', weightIncrement: 0 }],
        [{ Movement: 'Lat Pulldown', Sets: 4, Reps: 12, RM: 0, RPE: 8, relativeLift: '', weightIncrement: 0 }, { Movement: 'Seated Row', Sets: 4, Reps: 12, RM: 0, RPE: 8, relativeLift: '', weightIncrement: 0 }, { Movement: 'Bent Over Lateral Raise', Sets: 3, Reps: 15, RM: 0, RPE: 8, relativeLift: '', weightIncrement: 0 }, { Movement: 'Incline Dumbbell Curl', Sets: 3, Reps: 15, RM: 0, RPE: 8, relativeLift: '', weightIncrement: 0 }],
        [{ Movement: 'Back Squat', Sets: 4, Reps: 8, RM: 0.6, RPE: 8, relativeLift: '', weightIncrement: 20 }, { Movement: 'Leg Press', Sets: 4, Reps: 12, RM: 0, RPE: 8, relativeLift: '', weightIncrement: 0 }, { Movement: 'Romanian Deadlift', Sets: 4, Reps: 12, RM: 0.25, RPE: 8, relativeLift: 'Deadlift', weightIncrement: 20 }, { Movement: 'Leg Curl', Sets: 3, Reps: 12, RM: 0, RPE: 8, relativeLift: '', weightIncrement: 0 }, { Movement: 'Calf Raise', Sets: 3, Reps: 15, RM: 0, RPE: 8, relativeLift: '', weightIncrement: 0 }],
    ],
    [
        [{ Movement: 'Bench Press', Sets: 5, Reps: 5, RM: 0.5, RPE: 7, relativeLift: '', weightIncrement: 15 }, { Movement: 'Military Press', Sets: 4, Reps: 8, RM: 0.5, RPE: 7, relativeLift: 'Bench Press', weightIncrement: 15 }, { Movement: 'Pullups', Sets: 4, Reps: 8, RM: 0, RPE: 9, relativeLift: '', weightIncrement: 0 }, { Movement: 'Dips', Sets: 4, Reps: 8, RM: 0, RPE: 9, relativeLift: '', weightIncrement: 0 }, { Movement: 'Curls', Sets: 4, Reps: 12, RM: 0, RPE: 8, relativeLift: '', weightIncrement: 0 }],
        [{ Movement: 'Back Squat', Sets: 5, Reps: 5, RM: 0.5, RPE: 7, relativeLift: '', weightIncrement: 30 }, { Movement: 'Deadlift', Sets: 3, Reps: 8, RM: 0.4, RPE: 7, relativeLift: '', weightIncrement: 30 }, { Movement: 'Hamstring Curls', Sets: 4, Reps: 12, RM: 0, RPE: 8, relativeLift: '', weightIncrement: 0 }, { Movement: 'Calf Raise', Sets: 3, Reps: 15, RM: 0, RPE: 9, relativeLift: '', weightIncrement: 0 }],
        [{ Movement: 'Bench Press', Sets: 4, Reps: 8, RM: 0.6, RPE: 7, relativeLift: '', weightIncrement: 15 }, { Movement: 'Seated DB Press', Sets: 4, Reps: 12, RM: 0, RPE: 8, relativeLift: '', weightIncrement: 0 }, { Movement: 'Dumbbell Flyes', Sets: 3, Reps: 15, RM: 0, RPE: 8, relativeLift: '', weightIncrement: 0 }, { Movement: 'Tricep Pulldown', Sets: 4, Reps: 15, RM: 0, RPE: 8, relativeLift: '', weightIncrement: 0 }],
        [{ Movement: 'Lat Pulldown', Sets: 4, Reps: 12, RM: 0, RPE: 8, relativeLift: '', weightIncrement: 0 }, { Movement: 'Seated Row', Sets: 4, Reps: 12, RM: 0, RPE: 8, relativeLift: '', weightIncrement: 0 }, { Movement: 'Bent Over Lateral Raise', Sets: 3, Reps: 15, RM: 0, RPE: 8, relativeLift: '', weightIncrement: 0 }, { Movement: 'Incline Dumbbell Curl', Sets: 3, Reps: 15, RM: 0, RPE: 8, relativeLift: '', weightIncrement: 0 }],
        [{ Movement: 'Back Squat', Sets: 4, Reps: 8, RM: 0.6, RPE: 8, relativeLift: '', weightIncrement: 30 }, { Movement: 'Leg Press', Sets: 4, Reps: 12, RM: 0, RPE: 8, relativeLift: '', weightIncrement: 0 }, { Movement: 'Romanian Deadlift', Sets: 4, Reps: 12, RM: 0.25, RPE: 8, relativeLift: 'Deadlift', weightIncrement: 25 }, { Movement: 'Leg Curl', Sets: 3, Reps: 12, RM: 0, RPE: 8, relativeLift: '', weightIncrement: 0 }, { Movement: 'Calf Raise', Sets: 3, Reps: 15, RM: 0, RPE: 8, relativeLift: '', weightIncrement: 0 }],
    ],
    [
        [{ Movement: 'Bench Press', Sets: 5, Reps: 5, RM: 0.5, RPE: 7, relativeLift: '', weightIncrement: 20 }, { Movement: 'Military Press', Sets: 4, Reps: 8, RM: 0.5, RPE: 7, relativeLift: 'Bench Press', weightIncrement: 20 }, { Movement: 'Pullups', Sets: 4, Reps: 8, RM: 0, RPE: 9, relativeLift: '', weightIncrement: 0 }, { Movement: 'Dips', Sets: 4, Reps: 8, RM: 0, RPE: 9, relativeLift: '', weightIncrement: 0 }, { Movement: 'Curls', Sets: 4, Reps: 12, RM: 0, RPE: 8, relativeLift: '', weightIncrement: 0 }],
        [{ Movement: 'Back Squat', Sets: 5, Reps: 5, RM: 0.5, RPE: 7, relativeLift: '', weightIncrement: 40 }, { Movement: 'Deadlift', Sets: 3, Reps: 8, RM: 0.4, RPE: 7, relativeLift: '', weightIncrement: 40 }, { Movement: 'Hamstring Curls', Sets: 4, Reps: 12, RM: 0, RPE: 8, relativeLift: '', weightIncrement: 0 }, { Movement: 'Calf Raise', Sets: 3, Reps: 15, RM: 0, RPE: 9, relativeLift: '', weightIncrement: 0 }],
        [{ Movement: 'Bench Press', Sets: 4, Reps: 8, RM: 0.6, RPE: 7, relativeLift: '', weightIncrement: 20 }, { Movement: 'Seated DB Press', Sets: 4, Reps: 12, RM: 0, RPE: 8, relativeLift: '', weightIncrement: 0 }, { Movement: 'Dumbbell Flyes', Sets: 3, Reps: 15, RM: 0, RPE: 8, relativeLift: '', weightIncrement: 0 }, { Movement: 'Tricep Pulldown', Sets: 4, Reps: 15, RM: 0, RPE: 8, relativeLift: '', weightIncrement: 0 }],
        [{ Movement: 'Lat Pulldown', Sets: 4, Reps: 12, RM: 0, RPE: 8, relativeLift: '', weightIncrement: 0 }, { Movement: 'Seated Row', Sets: 4, Reps: 12, RM: 0, RPE: 8, relativeLift: '', weightIncrement: 0 }, { Movement: 'Bent Over Lateral Raise', Sets: 3, Reps: 15, RM: 0, RPE: 8, relativeLift: '', weightIncrement: 0 }, { Movement: 'Incline Dumbbell Curl', Sets: 3, Reps: 15, RM: 0, RPE: 8, relativeLift: '', weightIncrement: 0 }],
        [{ Movement: 'Back Squat', Sets: 4, Reps: 8, RM: 0.6, RPE: 8, relativeLift: '', weightIncrement: 40 }, { Movement: 'Leg Press', Sets: 4, Reps: 12, RM: 0, RPE: 8, relativeLift: '', weightIncrement: 0 }, { Movement: 'Romanian Deadlift', Sets: 4, Reps: 12, RM: 0.25, RPE: 8, relativeLift: 'Deadlift', weightIncrement: 30 }, { Movement: 'Leg Curl', Sets: 3, Reps: 12, RM: 0, RPE: 8, relativeLift: '', weightIncrement: 0 }, { Movement: 'Calf Raise', Sets: 3, Reps: 15, RM: 0, RPE: 8, relativeLift: '', weightIncrement: 0 }],
    ],
    [
        [{ Movement: 'Bench Press', Sets: 5, Reps: 5, RM: 0.5, RPE: 7, relativeLift: '', weightIncrement: 25 }, { Movement: 'Military Press', Sets: 4, Reps: 8, RM: 0.5, RPE: 7, relativeLift: 'Bench Press', weightIncrement: 25 }, { Movement: 'Pullups', Sets: 4, Reps: 8, RM: 0, RPE: 9, relativeLift: '', weightIncrement: 0 }, { Movement: 'Dips', Sets: 4, Reps: 8, RM: 0, RPE: 9, relativeLift: '', weightIncrement: 0 }, { Movement: 'Curls', Sets: 4, Reps: 12, RM: 0, RPE: 8, relativeLift: '', weightIncrement: 0 }],
        [{ Movement: 'Back Squat', Sets: 5, Reps: 5, RM: 0.5, RPE: 7, relativeLift: '', weightIncrement: 45 }, { Movement: 'Deadlift', Sets: 3, Reps: 8, RM: 0.4, RPE: 7, relativeLift: '', weightIncrement: 45 }, { Movement: 'Hamstring Curls', Sets: 4, Reps: 12, RM: 0, RPE: 8, relativeLift: '', weightIncrement: 0 }, { Movement: 'Calf Raise', Sets: 3, Reps: 15, RM: 0, RPE: 9, relativeLift: '', weightIncrement: 0 }],
        [{ Movement: 'Bench Press', Sets: 4, Reps: 8, RM: 0.6, RPE: 7, relativeLift: '', weightIncrement: 25 }, { Movement: 'Seated DB Press', Sets: 4, Reps: 12, RM: 0, RPE: 8, relativeLift: '', weightIncrement: 0 }, { Movement: 'Dumbbell Flyes', Sets: 3, Reps: 15, RM: 0, RPE: 8, relativeLift: '', weightIncrement: 0 }, { Movement: 'Tricep Pulldown', Sets: 4, Reps: 15, RM: 0, RPE: 8, relativeLift: '', weightIncrement: 0 }],
        [{ Movement: 'Lat Pulldown', Sets: 4, Reps: 12, RM: 0, RPE: 8, relativeLift: '', weightIncrement: 0 }, { Movement: 'Seated Row', Sets: 4, Reps: 12, RM: 0, RPE: 8, relativeLift: '', weightIncrement: 0 }, { Movement: 'Bent Over Lateral Raise', Sets: 3, Reps: 15, RM: 0, RPE: 8, relativeLift: '', weightIncrement: 0 }, { Movement: 'Incline Dumbbell Curl', Sets: 3, Reps: 15, RM: 0, RPE: 8, relativeLift: '', weightIncrement: 0 }],
        [{ Movement: 'Back Squat', Sets: 4, Reps: 8, RM: 0.6, RPE: 8, relativeLift: '', weightIncrement: 45 }, { Movement: 'Leg Press', Sets: 4, Reps: 12, RM: 0, RPE: 8, relativeLift: '', weightIncrement: 0 }, { Movement: 'Romanian Deadlift', Sets: 4, Reps: 12, RM: 0.25, RPE: 8, relativeLift: 'Deadlift', weightIncrement: 35 }, { Movement: 'Leg Curl', Sets: 3, Reps: 12, RM: 0, RPE: 8, relativeLift: '', weightIncrement: 0 }, { Movement: 'Calf Raise', Sets: 3, Reps: 15, RM: 0, RPE: 8, relativeLift: '', weightIncrement: 0 }],
    ],
    [
        [{ Movement: 'Bench Press', Sets: 5, Reps: 5, RM: 0.5, RPE: 7, relativeLift: '', weightIncrement: 30 }, { Movement: 'Military Press', Sets: 4, Reps: 8, RM: 0.5, RPE: 7, relativeLift: 'Bench Press', weightIncrement: 30 }, { Movement: 'Pullups', Sets: 4, Reps: 8, RM: 0, RPE: 9, relativeLift: '', weightIncrement: 0 }, { Movement: 'Dips', Sets: 4, Reps: 8, RM: 0, RPE: 9, relativeLift: '', weightIncrement: 0 }, { Movement: 'Curls', Sets: 4, Reps: 12, RM: 0, RPE: 8, relativeLift: '', weightIncrement: 0 }],
        [{ Movement: 'Back Squat', Sets: 5, Reps: 5, RM: 0.5, RPE: 7, relativeLift: '', weightIncrement: 50 }, { Movement: 'Deadlift', Sets: 3, Reps: 8, RM: 0.4, RPE: 7, relativeLift: '', weightIncrement: 50 }, { Movement: 'Hamstring Curls', Sets: 4, Reps: 12, RM: 0, RPE: 8, relativeLift: '', weightIncrement: 0 }, { Movement: 'Calf Raise', Sets: 3, Reps: 15, RM: 0, RPE: 9, relativeLift: '', weightIncrement: 0 }],
        [{ Movement: 'Bench Press', Sets: 4, Reps: 8, RM: 0.6, RPE: 7, relativeLift: '', weightIncrement: 30 }, { Movement: 'Seated DB Press', Sets: 4, Reps: 12, RM: 0, RPE: 8, relativeLift: '', weightIncrement: 0 }, { Movement: 'Dumbbell Flyes', Sets: 3, Reps: 15, RM: 0, RPE: 8, relativeLift: '', weightIncrement: 0 }, { Movement: 'Tricep Pulldown', Sets: 4, Reps: 15, RM: 0, RPE: 8, relativeLift: '', weightIncrement: 0 }],
        [{ Movement: 'Lat Pulldown', Sets: 4, Reps: 12, RM: 0, RPE: 8, relativeLift: '', weightIncrement: 0 }, { Movement: 'Seated Row', Sets: 4, Reps: 12, RM: 0, RPE: 8, relativeLift: '', weightIncrement: 0 }, { Movement: 'Bent Over Lateral Raise', Sets: 3, Reps: 15, RM: 0, RPE: 8, relativeLift: '', weightIncrement: 0 }, { Movement: 'Incline Dumbbell Curl', Sets: 3, Reps: 15, RM: 0, RPE: 8, relativeLift: '', weightIncrement: 0 }],
        [{ Movement: 'Back Squat', Sets: 4, Reps: 8, RM: 0.6, RPE: 8, relativeLift: '', weightIncrement: 50 }, { Movement: 'Leg Press', Sets: 4, Reps: 12, RM: 0, RPE: 8, relativeLift: '', weightIncrement: 0 }, { Movement: 'Romanian Deadlift', Sets: 4, Reps: 12, RM: 0.25, RPE: 8, relativeLift: 'Deadlift', weightIncrement: 40 }, { Movement: 'Leg Curl', Sets: 3, Reps: 12, RM: 0, RPE: 8, relativeLift: '', weightIncrement: 0 }, { Movement: 'Calf Raise', Sets: 3, Reps: 15, RM: 0, RPE: 8, relativeLift: '', weightIncrement: 0 }],
    ],
    [
        [{ Movement: 'Bench Press', Sets: 5, Reps: 5, RM: 0.5, RPE: 7, relativeLift: '', weightIncrement: 35 }, { Movement: 'Military Press', Sets: 4, Reps: 8, RM: 0.5, RPE: 7, relativeLift: 'Bench Press', weightIncrement: 35 }, { Movement: 'Pullups', Sets: 4, Reps: 8, RM: 0, RPE: 9, relativeLift: '', weightIncrement: 0 }, { Movement: 'Dips', Sets: 4, Reps: 8, RM: 0, RPE: 9, relativeLift: '', weightIncrement: 0 }, { Movement: 'Curls', Sets: 4, Reps: 12, RM: 0, RPE: 8, relativeLift: '', weightIncrement: 0 }],
        [{ Movement: 'Back Squat', Sets: 5, Reps: 5, RM: 0.5, RPE: 7, relativeLift: '', weightIncrement: 55 }, { Movement: 'Deadlift', Sets: 3, Reps: 8, RM: 0.4, RPE: 7, relativeLift: '', weightIncrement: 55 }, { Movement: 'Hamstring Curls', Sets: 4, Reps: 12, RM: 0, RPE: 8, relativeLift: '', weightIncrement: 0 }, { Movement: 'Calf Raise', Sets: 3, Reps: 15, RM: 0, RPE: 9, relativeLift: '', weightIncrement: 0 }],
        [{ Movement: 'Bench Press', Sets: 4, Reps: 8, RM: 0.6, RPE: 7, relativeLift: '', weightIncrement: 35 }, { Movement: 'Seated DB Press', Sets: 4, Reps: 12, RM: 0, RPE: 8, relativeLift: '', weightIncrement: 0 }, { Movement: 'Dumbbell Flyes', Sets: 3, Reps: 15, RM: 0, RPE: 8, relativeLift: '', weightIncrement: 0 }, { Movement: 'Tricep Pulldown', Sets: 4, Reps: 15, RM: 0, RPE: 8, relativeLift: '', weightIncrement: 0 }],
        [{ Movement: 'Lat Pulldown', Sets: 4, Reps: 12, RM: 0, RPE: 8, relativeLift: '', weightIncrement: 0 }, { Movement: 'Seated Row', Sets: 4, Reps: 12, RM: 0, RPE: 8, relativeLift: '', weightIncrement: 0 }, { Movement: 'Bent Over Lateral Raise', Sets: 3, Reps: 15, RM: 0, RPE: 8, relativeLift: '', weightIncrement: 0 }, { Movement: 'Incline Dumbbell Curl', Sets: 3, Reps: 15, RM: 0, RPE: 8, relativeLift: '', weightIncrement: 0 }],
        [{ Movement: 'Back Squat', Sets: 4, Reps: 8, RM: 0.6, RPE: 8, relativeLift: '', weightIncrement: 55 }, { Movement: 'Leg Press', Sets: 4, Reps: 12, RM: 0, RPE: 8, relativeLift: '', weightIncrement: 0 }, { Movement: 'Romanian Deadlift', Sets: 4, Reps: 12, RM: 0.25, RPE: 8, relativeLift: 'Deadlift', weightIncrement: 40 }, { Movement: 'Leg Curl', Sets: 3, Reps: 12, RM: 0, RPE: 8, relativeLift: '', weightIncrement: 0 }, { Movement: 'Calf Raise', Sets: 3, Reps: 15, RM: 0, RPE: 8, relativeLift: '', weightIncrement: 0 }],
    ],
    [
        [{ Movement: 'Bench Press', Sets: 5, Reps: 5, RM: 0.5, RPE: 7, relativeLift: '', weightIncrement: 40 }, { Movement: 'Military Press', Sets: 4, Reps: 8, RM: 0.5, RPE: 7, relativeLift: 'Bench Press', weightIncrement: 40 }, { Movement: 'Pullups', Sets: 4, Reps: 8, RM: 0, RPE: 9, relativeLift: '', weightIncrement: 0 }, { Movement: 'Dips', Sets: 4, Reps: 8, RM: 0, RPE: 9, relativeLift: '', weightIncrement: 0 }, { Movement: 'Curls', Sets: 4, Reps: 12, RM: 0, RPE: 8, relativeLift: '', weightIncrement: 0 }],
        [{ Movement: 'Back Squat', Sets: 5, Reps: 5, RM: 0.5, RPE: 7, relativeLift: '', weightIncrement: 60 }, { Movement: 'Deadlift', Sets: 3, Reps: 8, RM: 0.4, RPE: 7, relativeLift: '', weightIncrement: 60 }, { Movement: 'Hamstring Curls', Sets: 4, Reps: 12, RM: 0, RPE: 8, relativeLift: '', weightIncrement: 0 }, { Movement: 'Calf Raise', Sets: 3, Reps: 15, RM: 0, RPE: 9, relativeLift: '', weightIncrement: 0 }],
        [{ Movement: 'Bench Press', Sets: 4, Reps: 8, RM: 0.6, RPE: 7, relativeLift: '', weightIncrement: 40 }, { Movement: 'Seated DB Press', Sets: 4, Reps: 12, RM: 0, RPE: 8, relativeLift: '', weightIncrement: 0 }, { Movement: 'Dumbbell Flyes', Sets: 3, Reps: 15, RM: 0, RPE: 8, relativeLift: '', weightIncrement: 0 }, { Movement: 'Tricep Pulldown', Sets: 4, Reps: 15, RM: 0, RPE: 8, relativeLift: '', weightIncrement: 0 }],
        [{ Movement: 'Lat Pulldown', Sets: 4, Reps: 12, RM: 0, RPE: 8, relativeLift: '', weightIncrement: 0 }, { Movement: 'Seated Row', Sets: 4, Reps: 12, RM: 0, RPE: 8, relativeLift: '', weightIncrement: 0 }, { Movement: 'Bent Over Lateral Raise', Sets: 3, Reps: 15, RM: 0, RPE: 8, relativeLift: '', weightIncrement: 0 }, { Movement: 'Incline Dumbbell Curl', Sets: 3, Reps: 15, RM: 0, RPE: 8, relativeLift: '', weightIncrement: 0 }],
        [{ Movement: 'Back Squat', Sets: 4, Reps: 8, RM: 0.6, RPE: 8, relativeLift: '', weightIncrement: 60 }, { Movement: 'Leg Press', Sets: 4, Reps: 12, RM: 0, RPE: 8, relativeLift: '', weightIncrement: 0 }, { Movement: 'Romanian Deadlift', Sets: 4, Reps: 12, RM: 0.25, RPE: 8, relativeLift: 'Deadlift', weightIncrement: 45 }, { Movement: 'Leg Curl', Sets: 3, Reps: 12, RM: 0, RPE: 8, relativeLift: '', weightIncrement: 0 }, { Movement: 'Calf Raise', Sets: 3, Reps: 15, RM: 0, RPE: 8, relativeLift: '', weightIncrement: 0 }],
    ],
    [
        [{ Movement: 'Bench Press', Sets: 5, Reps: 5, RM: 0.5, RPE: 7, relativeLift: '', weightIncrement: 45 }, { Movement: 'Military Press', Sets: 4, Reps: 8, RM: 0.5, RPE: 7, relativeLift: 'Bench Press', weightIncrement: 45 }, { Movement: 'Pullups', Sets: 4, Reps: 8, RM: 0, RPE: 9, relativeLift: '', weightIncrement: 0 }, { Movement: 'Dips', Sets: 4, Reps: 8, RM: 0, RPE: 9, relativeLift: '', weightIncrement: 0 }, { Movement: 'Curls', Sets: 4, Reps: 12, RM: 0, RPE: 8, relativeLift: '', weightIncrement: 0 }],
        [{ Movement: 'Back Squat', Sets: 5, Reps: 5, RM: 0.5, RPE: 7, relativeLift: '', weightIncrement: 65 }, { Movement: 'Deadlift', Sets: 3, Reps: 8, RM: 0.4, RPE: 7, relativeLift: '', weightIncrement: 65 }, { Movement: 'Hamstring Curls', Sets: 4, Reps: 12, RM: 0, RPE: 8, relativeLift: '', weightIncrement: 0 }, { Movement: 'Calf Raise', Sets: 3, Reps: 15, RM: 0, RPE: 9, relativeLift: '', weightIncrement: 0 }],
        [{ Movement: 'Bench Press', Sets: 4, Reps: 8, RM: 0.6, RPE: 7, relativeLift: '', weightIncrement: 45 }, { Movement: 'Seated DB Press', Sets: 4, Reps: 12, RM: 0, RPE: 8, relativeLift: '', weightIncrement: 0 }, { Movement: 'Dumbbell Flyes', Sets: 3, Reps: 15, RM: 0, RPE: 8, relativeLift: '', weightIncrement: 0 }, { Movement: 'Tricep Pulldown', Sets: 4, Reps: 15, RM: 0, RPE: 8, relativeLift: '', weightIncrement: 0 }],
        [{ Movement: 'Lat Pulldown', Sets: 4, Reps: 12, RM: 0, RPE: 8, relativeLift: '', weightIncrement: 0 }, { Movement: 'Seated Row', Sets: 4, Reps: 12, RM: 0, RPE: 8, relativeLift: '', weightIncrement: 0 }, { Movement: 'Bent Over Lateral Raise', Sets: 3, Reps: 15, RM: 0, RPE: 8, relativeLift: '', weightIncrement: 0 }, { Movement: 'Incline Dumbbell Curl', Sets: 3, Reps: 15, RM: 0, RPE: 8, relativeLift: '', weightIncrement: 0 }],
        [{ Movement: 'Back Squat', Sets: 4, Reps: 8, RM: 0.6, RPE: 8, relativeLift: '', weightIncrement: 70 }, { Movement: 'Leg Press', Sets: 4, Reps: 12, RM: 0, RPE: 8, relativeLift: '', weightIncrement: 0 }, { Movement: 'Romanian Deadlift', Sets: 4, Reps: 12, RM: 0.25, RPE: 8, relativeLift: 'Deadlift', weightIncrement: 50 }, { Movement: 'Leg Curl', Sets: 3, Reps: 12, RM: 0, RPE: 8, relativeLift: '', weightIncrement: 0 }, { Movement: 'Calf Raise', Sets: 3, Reps: 15, RM: 0, RPE: 8, relativeLift: '', weightIncrement: 0 }],
    ],
    [
        [{ Movement: 'Bench Press', Sets: 5, Reps: 5, RM: 0.5, RPE: 7, relativeLift: '', weightIncrement: 45 }, { Movement: 'Military Press', Sets: 4, Reps: 8, RM: 0.5, RPE: 7, relativeLift: 'Bench Press', weightIncrement: 45 }, { Movement: 'Pullups', Sets: 4, Reps: 8, RM: 0, RPE: 9, relativeLift: '', weightIncrement: 0 }, { Movement: 'Dips', Sets: 4, Reps: 8, RM: 0, RPE: 9, relativeLift: '', weightIncrement: 0 }, { Movement: 'Curls', Sets: 4, Reps: 12, RM: 0, RPE: 8, relativeLift: '', weightIncrement: 0 }],
        [{ Movement: 'Back Squat', Sets: 5, Reps: 5, RM: 0.5, RPE: 7, relativeLift: '', weightIncrement: 65 }, { Movement: 'Deadlift', Sets: 3, Reps: 8, RM: 0.4, RPE: 7, relativeLift: '', weightIncrement: 65 }, { Movement: 'Hamstring Curls', Sets: 4, Reps: 12, RM: 0, RPE: 8, relativeLift: '', weightIncrement: 0 }, { Movement: 'Calf Raise', Sets: 3, Reps: 15, RM: 0, RPE: 9, relativeLift: '', weightIncrement: 0 }],
        [{ Movement: 'Bench Press', Sets: 4, Reps: 8, RM: 0.6, RPE: 7, relativeLift: '', weightIncrement: 50 }, { Movement: 'Seated DB Press', Sets: 4, Reps: 12, RM: 0, RPE: 8, relativeLift: '', weightIncrement: 0 }, { Movement: 'Dumbbell Flyes', Sets: 3, Reps: 15, RM: 0, RPE: 8, relativeLift: '', weightIncrement: 0 }, { Movement: 'Tricep Pulldown', Sets: 4, Reps: 15, RM: 0, RPE: 8, relativeLift: '', weightIncrement: 0 }],
        [{ Movement: 'Lat Pulldown', Sets: 4, Reps: 12, RM: 0, RPE: 8, relativeLift: '', weightIncrement: 0 }, { Movement: 'Seated Row', Sets: 4, Reps: 12, RM: 0, RPE: 8, relativeLift: '', weightIncrement: 0 }, { Movement: 'Bent Over Lateral Raise', Sets: 3, Reps: 15, RM: 0, RPE: 8, relativeLift: '', weightIncrement: 0 }, { Movement: 'Incline Dumbbell Curl', Sets: 3, Reps: 15, RM: 0, RPE: 8, relativeLift: '', weightIncrement: 0 }],
        [{ Movement: 'Back Squat', Sets: 4, Reps: 8, RM: 0.6, RPE: 8, relativeLift: '', weightIncrement: 80 }, { Movement: 'Leg Press', Sets: 4, Reps: 12, RM: 0, RPE: 8, relativeLift: '', weightIncrement: 0 }, { Movement: 'Romanian Deadlift', Sets: 4, Reps: 12, RM: 0.25, RPE: 8, relativeLift: 'Deadlift', weightIncrement: 60 }, { Movement: 'Leg Curl', Sets: 3, Reps: 12, RM: 0, RPE: 8, relativeLift: '', weightIncrement: 0 }, { Movement: 'Calf Raise', Sets: 3, Reps: 15, RM: 0, RPE: 8, relativeLift: '', weightIncrement: 0 }],
    ],
    [
        [{ Movement: 'Bench Press', Sets: 5, Reps: 5, RM: 0.5, RPE: 7, relativeLift: '', weightIncrement: 50 }, { Movement: 'Military Press', Sets: 4, Reps: 8, RM: 0.5, RPE: 7, relativeLift: 'Bench Press', weightIncrement: 50 }, { Movement: 'Pullups', Sets: 4, Reps: 8, RM: 0, RPE: 9, relativeLift: '', weightIncrement: 0 }, { Movement: 'Dips', Sets: 4, Reps: 8, RM: 0, RPE: 9, relativeLift: '', weightIncrement: 0 }, { Movement: 'Curls', Sets: 4, Reps: 12, RM: 0, RPE: 8, relativeLift: '', weightIncrement: 0 }],
        [{ Movement: 'Back Squat', Sets: 5, Reps: 5, RM: 0.5, RPE: 7, relativeLift: '', weightIncrement: 70 }, { Movement: 'Deadlift', Sets: 3, Reps: 8, RM: 0.4, RPE: 7, relativeLift: '', weightIncrement: 70 }, { Movement: 'Hamstring Curls', Sets: 4, Reps: 12, RM: 0, RPE: 8, relativeLift: '', weightIncrement: 0 }, { Movement: 'Calf Raise', Sets: 3, Reps: 15, RM: 0, RPE: 9, relativeLift: '', weightIncrement: 0 }],
        [{ Movement: 'Bench Press', Sets: 4, Reps: 8, RM: 0.6, RPE: 7, relativeLift: '', weightIncrement: 55 }, { Movement: 'Seated DB Press', Sets: 4, Reps: 12, RM: 0, RPE: 8, relativeLift: '', weightIncrement: 0 }, { Movement: 'Dumbbell Flyes', Sets: 3, Reps: 15, RM: 0, RPE: 8, relativeLift: '', weightIncrement: 0 }, { Movement: 'Tricep Pulldown', Sets: 4, Reps: 15, RM: 0, RPE: 8, relativeLift: '', weightIncrement: 0 }],
        [{ Movement: 'Lat Pulldown', Sets: 4, Reps: 12, RM: 0, RPE: 8, relativeLift: '', weightIncrement: 0 }, { Movement: 'Seated Row', Sets: 4, Reps: 12, RM: 0, RPE: 8, relativeLift: '', weightIncrement: 0 }, { Movement: 'Bent Over Lateral Raise', Sets: 3, Reps: 15, RM: 0, RPE: 8, relativeLift: '', weightIncrement: 0 }, { Movement: 'Incline Dumbbell Curl', Sets: 3, Reps: 15, RM: 0, RPE: 8, relativeLift: '', weightIncrement: 0 }],
        [{ Movement: 'Back Squat', Sets: 4, Reps: 8, RM: 0.6, RPE: 8, relativeLift: '', weightIncrement: 90 }, { Movement: 'Leg Press', Sets: 4, Reps: 12, RM: 0, RPE: 8, relativeLift: '', weightIncrement: 0 }, { Movement: 'Romanian Deadlift', Sets: 4, Reps: 12, RM: 0.25, RPE: 8, relativeLift: 'Deadlift', weightIncrement: 70 }, { Movement: 'Leg Curl', Sets: 3, Reps: 12, RM: 0, RPE: 8, relativeLift: '', weightIncrement: 0 }, { Movement: 'Calf Raise', Sets: 3, Reps: 15, RM: 0, RPE: 8, relativeLift: '', weightIncrement: 0 }],
    ]
];
const STRENGTH_3_DAY = [
    [
        [{ Movement: 'Back Squat', Sets: 5, Reps: 5, RM: 0.5, RPE: 6, relativeLift: '', weightIncrement: 0 }, { Movement: 'Bench Press', Sets: 5, Reps: 5, RM: 0.5, RPE: 6, relativeLift: '', weightIncrement: 0 }, { Movement: 'Barbell Row', Sets: 5, Reps: 5, RM: 0.44, RPE: 6, relativeLift: 'Bench Press', weightIncrement: 0 }],
        [{ Movement: 'Back Squat', Sets: 5, Reps: 5, RM: 0.5, RPE: 8, relativeLift: '', weightIncrement: 5 }, { Movement: 'Overhead Press', Sets: 5, Reps: 5, RM: 0.5, RPE: 8, relativeLift: 'Bench Press', weightIncrement: 0 }, { Movement: 'Deadlift', Sets: 1, Reps: 5, RM: 0.44, RPE: 8, relativeLift: 'Bench Press', weightIncrement: 10 }],
        [{ Movement: 'Back Squat', Sets: 5, Reps: 5, RM: 0.5, RPE: 8, relativeLift: '', weightIncrement: 10 }, { Movement: 'Bench Press', Sets: 5, Reps: 5, RM: 0.5, RPE: 8, relativeLift: '', weightIncrement: 5 }, { Movement: 'Barbell Row', Sets: 5, Reps: 5, RM: 0.44, RPE: 8, relativeLift: 'Bench Press', weightIncrement: 5 }],
    ],
    [
        [{ Movement: 'Back Squat', Sets: 5, Reps: 5, RM: 0.5, RPE: 8, relativeLift: '', weightIncrement: 15 }, { Movement: 'Overhead Press', Sets: 5, Reps: 5, RM: 0.5, RPE: 8, relativeLift: 'Bench Press', weightIncrement: 5 }, { Movement: 'Deadlift', Sets: 1, Reps: 5, RM: 0.44, RPE: 8, relativeLift: 'Bench Press', weightIncrement: 20 }],
        [{ Movement: 'Back Squat', Sets: 5, Reps: 5, RM: 0.5, RPE: 8, relativeLift: '', weightIncrement: 20 }, { Movement: 'Bench Press', Sets: 5, Reps: 5, RM: 0.5, RPE: 8, relativeLift: '', weightIncrement: 10 }, { Movement: 'Barbell Row', Sets: 5, Reps: 5, RM: 0.44, RPE: 8, relativeLift: 'Bench Press', weightIncrement: 10 }],
        [{ Movement: 'Back Squat', Sets: 5, Reps: 5, RM: 0.5, RPE: 8, relativeLift: '', weightIncrement: 25 }, { Movement: 'Overhead Press', Sets: 5, Reps: 5, RM: 0.5, RPE: 8, relativeLift: 'Bench Press', weightIncrement: 10 }, { Movement: 'Deadlift', Sets: 1, Reps: 5, RM: 0.44, RPE: 8, relativeLift: 'Bench Press', weightIncrement: 30 }]
    ],
    [
        [{ Movement: 'Back Squat', Sets: 5, Reps: 5, RM: 0.5, RPE: 6, relativeLift: '', weightIncrement: 30 }, { Movement: 'Bench Press', Sets: 5, Reps: 5, RM: 0.5, RPE: 6, relativeLift: '', weightIncrement: 15 }, { Movement: 'Barbell Row', Sets: 5, Reps: 5, RM: 0.44, RPE: 6, relativeLift: 'Bench Press', weightIncrement: 15 }],
        [{ Movement: 'Back Squat', Sets: 5, Reps: 5, RM: 0.5, RPE: 8, relativeLift: '', weightIncrement: 35 }, { Movement: 'Overhead Press', Sets: 5, Reps: 5, RM: 0.5, RPE: 8, relativeLift: 'Bench Press', weightIncrement: 15 }, { Movement: 'Deadlift', Sets: 1, Reps: 5, RM: 0.44, RPE: 8, relativeLift: 'Bench Press', weightIncrement: 40 }],
        [{ Movement: 'Back Squat', Sets: 5, Reps: 5, RM: 0.5, RPE: 8, relativeLift: '', weightIncrement: 40 }, { Movement: 'Bench Press', Sets: 5, Reps: 5, RM: 0.5, RPE: 8, relativeLift: '', weightIncrement: 20 }, { Movement: 'Barbell Row', Sets: 5, Reps: 5, RM: 0.44, RPE: 8, relativeLift: 'Bench Press', weightIncrement: 20 }],
    ],
    [
        [{ Movement: 'Back Squat', Sets: 5, Reps: 5, RM: 0.5, RPE: 8, relativeLift: '', weightIncrement: 45 }, { Movement: 'Overhead Press', Sets: 5, Reps: 5, RM: 0.5, RPE: 8, relativeLift: 'Bench Press', weightIncrement: 20 }, { Movement: 'Deadlift', Sets: 1, Reps: 5, RM: 0.44, RPE: 8, relativeLift: 'Bench Press', weightIncrement: 50 }],
        [{ Movement: 'Back Squat', Sets: 5, Reps: 5, RM: 0.5, RPE: 8, relativeLift: '', weightIncrement: 50 }, { Movement: 'Bench Press', Sets: 5, Reps: 5, RM: 0.5, RPE: 8, relativeLift: '', weightIncrement: 25 }, { Movement: 'Barbell Row', Sets: 5, Reps: 5, RM: 0.44, RPE: 8, relativeLift: 'Bench Press', weightIncrement: 25 }],
        [{ Movement: 'Back Squat', Sets: 5, Reps: 5, RM: 0.5, RPE: 8, relativeLift: '', weightIncrement: 55 }, { Movement: 'Overhead Press', Sets: 5, Reps: 5, RM: 0.5, RPE: 8, relativeLift: 'Bench Press', weightIncrement: 25 }, { Movement: 'Deadlift', Sets: 1, Reps: 5, RM: 0.44, RPE: 8, relativeLift: 'Bench Press', weightIncrement: 60 }]
    ],
    [
        [{ Movement: 'Back Squat', Sets: 5, Reps: 5, RM: 0.5, RPE: 6, relativeLift: '', weightIncrement: 60 }, { Movement: 'Bench Press', Sets: 5, Reps: 5, RM: 0.5, RPE: 6, relativeLift: '', weightIncrement: 30 }, { Movement: 'Barbell Row', Sets: 5, Reps: 5, RM: 0.44, RPE: 6, relativeLift: 'Bench Press', weightIncrement: 30 }],
        [{ Movement: 'Back Squat', Sets: 5, Reps: 5, RM: 0.5, RPE: 8, relativeLift: '', weightIncrement: 65 }, { Movement: 'Overhead Press', Sets: 5, Reps: 5, RM: 0.5, RPE: 8, relativeLift: 'Bench Press', weightIncrement: 30 }, { Movement: 'Deadlift', Sets: 1, Reps: 5, RM: 0.44, RPE: 8, relativeLift: 'Bench Press', weightIncrement: 70 }],
        [{ Movement: 'Back Squat', Sets: 5, Reps: 5, RM: 0.5, RPE: 8, relativeLift: '', weightIncrement: 70 }, { Movement: 'Bench Press', Sets: 5, Reps: 5, RM: 0.5, RPE: 8, relativeLift: '', weightIncrement: 35 }, { Movement: 'Barbell Row', Sets: 5, Reps: 5, RM: 0.44, RPE: 8, relativeLift: 'Bench Press', weightIncrement: 35 }],
    ],
    [
        [{ Movement: 'Back Squat', Sets: 5, Reps: 5, RM: 0.5, RPE: 8, relativeLift: '', weightIncrement: 75 }, { Movement: 'Overhead Press', Sets: 5, Reps: 5, RM: 0.5, RPE: 8, relativeLift: 'Bench Press', weightIncrement: 35 }, { Movement: 'Deadlift', Sets: 1, Reps: 5, RM: 0.44, RPE: 8, relativeLift: 'Bench Press', weightIncrement: 80 }],
        [{ Movement: 'Back Squat', Sets: 5, Reps: 5, RM: 0.5, RPE: 8, relativeLift: '', weightIncrement: 80 }, { Movement: 'Bench Press', Sets: 5, Reps: 5, RM: 0.5, RPE: 8, relativeLift: '', weightIncrement: 5 }, { Movement: 'Barbell Row', Sets: 5, Reps: 5, RM: 0.44, RPE: 8, relativeLift: 'Bench Press', weightIncrement: 40 }],
        [{ Movement: 'Back Squat', Sets: 5, Reps: 5, RM: 0.5, RPE: 8, relativeLift: '', weightIncrement: 85 }, { Movement: 'Overhead Press', Sets: 5, Reps: 5, RM: 0.5, RPE: 8, relativeLift: 'Bench Press', weightIncrement: 40 }, { Movement: 'Deadlift', Sets: 1, Reps: 5, RM: 0.44, RPE: 8, relativeLift: 'Bench Press', weightIncrement: 90 }]
    ],
    [
        [{ Movement: 'Back Squat', Sets: 5, Reps: 5, RM: 0.5, RPE: 6, relativeLift: '', weightIncrement: 90 }, { Movement: 'Bench Press', Sets: 5, Reps: 5, RM: 0.5, RPE: 6, relativeLift: '', weightIncrement: 0 }, { Movement: 'Barbell Row', Sets: 5, Reps: 5, RM: 0.44, RPE: 6, relativeLift: 'Bench Press', weightIncrement: 45 }],
        [{ Movement: 'Back Squat', Sets: 5, Reps: 5, RM: 0.5, RPE: 8, relativeLift: '', weightIncrement: 95 }, { Movement: 'Overhead Press', Sets: 5, Reps: 5, RM: 0.5, RPE: 8, relativeLift: 'Bench Press', weightIncrement: 55 }, { Movement: 'Deadlift', Sets: 1, Reps: 5, RM: 0.44, RPE: 8, relativeLift: 'Bench Press', weightIncrement: 100 }],
        [{ Movement: 'Back Squat', Sets: 5, Reps: 5, RM: 0.5, RPE: 8, relativeLift: '', weightIncrement: 100 }, { Movement: 'Bench Press', Sets: 5, Reps: 5, RM: 0.5, RPE: 8, relativeLift: '', weightIncrement: 5 }, { Movement: 'Barbell Row', Sets: 5, Reps: 5, RM: 0.44, RPE: 8, relativeLift: 'Bench Press', weightIncrement: 50 }],
    ],
    [
        [{ Movement: 'Back Squat', Sets: 5, Reps: 5, RM: 0.5, RPE: 8, relativeLift: '', weightIncrement: 105 }, { Movement: 'Overhead Press', Sets: 5, Reps: 5, RM: 0.5, RPE: 8, relativeLift: 'Bench Press', weightIncrement: 50 }, { Movement: 'Deadlift', Sets: 1, Reps: 5, RM: 0.44, RPE: 8, relativeLift: 'Bench Press', weightIncrement: 110 }],
        [{ Movement: 'Back Squat', Sets: 5, Reps: 5, RM: 0.5, RPE: 8, relativeLift: '', weightIncrement: 115 }, { Movement: 'Bench Press', Sets: 5, Reps: 5, RM: 0.5, RPE: 8, relativeLift: '', weightIncrement: 5 }, { Movement: 'Barbell Row', Sets: 5, Reps: 5, RM: 0.44, RPE: 8, relativeLift: 'Bench Press', weightIncrement: 55 }],
        [{ Movement: 'Back Squat', Sets: 5, Reps: 5, RM: 0.5, RPE: 8, relativeLift: '', weightIncrement: 120 }, { Movement: 'Overhead Press', Sets: 5, Reps: 5, RM: 0.5, RPE: 8, relativeLift: 'Bench Press', weightIncrement: 55 }, { Movement: 'Deadlift', Sets: 1, Reps: 5, RM: 0.44, RPE: 8, relativeLift: 'Bench Press', weightIncrement: 120 }]
    ],
    [
        [{ Movement: 'Back Squat', Sets: 5, Reps: 5, RM: 0.5, RPE: 6, relativeLift: '', weightIncrement: 125 }, { Movement: 'Bench Press', Sets: 5, Reps: 5, RM: 0.5, RPE: 6, relativeLift: '', weightIncrement: 0 }, { Movement: 'Barbell Row', Sets: 5, Reps: 5, RM: 0.44, RPE: 6, relativeLift: 'Bench Press', weightIncrement: 60 }],
        [{ Movement: 'Back Squat', Sets: 5, Reps: 5, RM: 0.5, RPE: 8, relativeLift: '', weightIncrement: 130 }, { Movement: 'Overhead Press', Sets: 5, Reps: 5, RM: 0.5, RPE: 8, relativeLift: 'Bench Press', weightIncrement: 60 }, { Movement: 'Deadlift', Sets: 1, Reps: 5, RM: 0.44, RPE: 8, relativeLift: 'Bench Press', weightIncrement: 130 }],
        [{ Movement: 'Back Squat', Sets: 5, Reps: 5, RM: 0.5, RPE: 8, relativeLift: '', weightIncrement: 135 }, { Movement: 'Bench Press', Sets: 5, Reps: 5, RM: 0.5, RPE: 8, relativeLift: '', weightIncrement: 5 }, { Movement: 'Barbell Row', Sets: 5, Reps: 5, RM: 0.44, RPE: 8, relativeLift: 'Bench Press', weightIncrement: 65 }],
    ],
    [
        [{ Movement: 'Back Squat', Sets: 5, Reps: 5, RM: 0.5, RPE: 8, relativeLift: '', weightIncrement: 140 }, { Movement: 'Overhead Press', Sets: 5, Reps: 5, RM: 0.5, RPE: 8, relativeLift: 'Bench Press', weightIncrement: 65 }, { Movement: 'Deadlift', Sets: 1, Reps: 5, RM: 0.44, RPE: 8, relativeLift: 'Bench Press', weightIncrement: 140 }],
        [{ Movement: 'Back Squat', Sets: 5, Reps: 5, RM: 0.5, RPE: 8, relativeLift: '', weightIncrement: 20 }, { Movement: 'Bench Press', Sets: 5, Reps: 5, RM: 0.5, RPE: 8, relativeLift: '', weightIncrement: 5 }, { Movement: 'Barbell Row', Sets: 5, Reps: 5, RM: 0.44, RPE: 8, relativeLift: 'Bench Press', weightIncrement: 70 }],
        [{ Movement: 'Back Squat', Sets: 5, Reps: 5, RM: 0.5, RPE: 8, relativeLift: '', weightIncrement: 25 }, { Movement: 'Overhead Press', Sets: 5, Reps: 5, RM: 0.5, RPE: 8, relativeLift: 'Bench Press', weightIncrement: 70 }, { Movement: 'Deadlift', Sets: 1, Reps: 5, RM: 0.44, RPE: 8, relativeLift: 'Bench Press', weightIncrement: 150 }]
    ],
    [
        [{ Movement: 'Back Squat', Sets: 5, Reps: 5, RM: 0.5, RPE: 6, relativeLift: '', weightIncrement: 145 }, { Movement: 'Bench Press', Sets: 5, Reps: 5, RM: 0.5, RPE: 6, relativeLift: '', weightIncrement: 0 }, { Movement: 'Barbell Row', Sets: 5, Reps: 5, RM: 0.44, RPE: 6, relativeLift: 'Bench Press', weightIncrement: 75 }],
        [{ Movement: 'Back Squat', Sets: 5, Reps: 5, RM: 0.5, RPE: 8, relativeLift: '', weightIncrement: 155 }, { Movement: 'Overhead Press', Sets: 5, Reps: 5, RM: 0.5, RPE: 8, relativeLift: 'Bench Press', weightIncrement: 75 }, { Movement: 'Deadlift', Sets: 1, Reps: 5, RM: 0.44, RPE: 8, relativeLift: 'Bench Press', weightIncrement: 160 }],
        [{ Movement: 'Back Squat', Sets: 5, Reps: 5, RM: 0.5, RPE: 8, relativeLift: '', weightIncrement: 160 }, { Movement: 'Bench Press', Sets: 5, Reps: 5, RM: 0.5, RPE: 8, relativeLift: '', weightIncrement: 5 }, { Movement: 'Barbell Row', Sets: 5, Reps: 5, RM: 0.44, RPE: 8, relativeLift: 'Bench Press', weightIncrement: 80 }],
    ],
    [
        [{ Movement: 'Back Squat', Sets: 5, Reps: 5, RM: 0.5, RPE: 8, relativeLift: '', weightIncrement: 165 }, { Movement: 'Overhead Press', Sets: 5, Reps: 5, RM: 0.5, RPE: 8, relativeLift: 'Bench Press', weightIncrement: 80 }, { Movement: 'Deadlift', Sets: 1, Reps: 5, RM: 0.44, RPE: 8, relativeLift: 'Bench Press', weightIncrement: 170 }],
        [{ Movement: 'Back Squat', Sets: 5, Reps: 5, RM: 0.5, RPE: 8, relativeLift: '', weightIncrement: 170 }, { Movement: 'Bench Press', Sets: 5, Reps: 5, RM: 0.5, RPE: 8, relativeLift: '', weightIncrement: 5 }, { Movement: 'Barbell Row', Sets: 5, Reps: 5, RM: 0.44, RPE: 8, relativeLift: 'Bench Press', weightIncrement: 85 }],
        [{ Movement: 'Back Squat', Sets: 5, Reps: 5, RM: 0.5, RPE: 8, relativeLift: '', weightIncrement: 175 }, { Movement: 'Overhead Press', Sets: 5, Reps: 5, RM: 0.5, RPE: 8, relativeLift: 'Bench Press', weightIncrement: 85 }, { Movement: 'Deadlift', Sets: 1, Reps: 5, RM: 0.44, RPE: 8, relativeLift: 'Bench Press', weightIncrement: 180 }]
    ],
];
const STRENGTH_4_DAY = [
    [
        [{ Movement: 'Back Squat', Sets: 5, Reps: 5, RM: 0.5, RPE: 6, relativeLift: '', weightIncrement: 0 }, { Movement: 'Bench Press', Sets: 5, Reps: 5, RM: 0.5, RPE: 6, relativeLift: '', weightIncrement: 0 }, { Movement: 'Barbell Row', Sets: 5, Reps: 5, RM: 0.44, RPE: 6, relativeLift: 'Bench Press', weightIncrement: 0 }],
        [{ Movement: 'Back Squat', Sets: 5, Reps: 5, RM: 0.5, RPE: 8, relativeLift: '', weightIncrement: 5 }, { Movement: 'Overhead Press', Sets: 5, Reps: 5, RM: 0.5, RPE: 8, relativeLift: 'Bench Press', weightIncrement: 0 }, { Movement: 'Deadlift', Sets: 1, Reps: 5, RM: 0.44, RPE: 8, relativeLift: 'Bench Press', weightIncrement: 10 }],
        [{ Movement: 'Back Squat', Sets: 5, Reps: 5, RM: 0.5, RPE: 8, relativeLift: '', weightIncrement: 10 }, { Movement: 'Bench Press', Sets: 5, Reps: 5, RM: 0.5, RPE: 8, relativeLift: '', weightIncrement: 5 }, { Movement: 'Barbell Row', Sets: 5, Reps: 5, RM: 0.44, RPE: 8, relativeLift: 'Bench Press', weightIncrement: 5 }],
        [{ Movement: 'DB Deadlift', Sets: 4, Reps: 12, RM: 0, RPE: 8, relativeLift: '', weightIncrement: 0 }, { Movement: 'DB Bench Press', Sets: 4, Reps: 12, RM: 0, RPE: 8, relativeLift: '', weightIncrement: 0 }, { Movement: 'Chin-Ups', Sets: 3, Reps: 12, RM: 0, RPE: 8, relativeLift: '', weightIncrement: 0 }, { Movement: 'Bicep Curls', Sets: 4, Reps: 12, RM: 0, RPE: 8, relativeLift: '', weightIncrement: 0 }, { Movement: 'Tricep Pulldown', Sets: 4, Reps: 12, RM: 0, RPE: 8, relativeLift: '', weightIncrement: 0 }]
    ],
    [
        [{ Movement: 'Back Squat', Sets: 5, Reps: 5, RM: 0.5, RPE: 8, relativeLift: '', weightIncrement: 15 }, { Movement: 'Overhead Press', Sets: 5, Reps: 5, RM: 0.5, RPE: 8, relativeLift: 'Bench Press', weightIncrement: 5 }, { Movement: 'Deadlift', Sets: 1, Reps: 5, RM: 0.44, RPE: 8, relativeLift: 'Bench Press', weightIncrement: 20 }],
        [{ Movement: 'Back Squat', Sets: 5, Reps: 5, RM: 0.5, RPE: 8, relativeLift: '', weightIncrement: 20 }, { Movement: 'Bench Press', Sets: 5, Reps: 5, RM: 0.5, RPE: 8, relativeLift: '', weightIncrement: 10 }, { Movement: 'Barbell Row', Sets: 5, Reps: 5, RM: 0.44, RPE: 8, relativeLift: 'Bench Press', weightIncrement: 10 }],
        [{ Movement: 'Back Squat', Sets: 5, Reps: 5, RM: 0.5, RPE: 8, relativeLift: '', weightIncrement: 25 }, { Movement: 'Overhead Press', Sets: 5, Reps: 5, RM: 0.5, RPE: 8, relativeLift: 'Bench Press', weightIncrement: 10 }, { Movement: 'Deadlift', Sets: 1, Reps: 5, RM: 0.44, RPE: 8, relativeLift: 'Bench Press', weightIncrement: 30 }],
        [{ Movement: 'DB Deadlift', Sets: 4, Reps: 12, RM: 0, RPE: 8, relativeLift: '', weightIncrement: 0 }, { Movement: 'DB Bench Press', Sets: 4, Reps: 12, RM: 0, RPE: 8, relativeLift: '', weightIncrement: 0 }, { Movement: 'Chin-Ups', Sets: 3, Reps: 12, RM: 0, RPE: 8, relativeLift: '', weightIncrement: 0 }, { Movement: 'Bicep Curls', Sets: 4, Reps: 12, RM: 0, RPE: 8, relativeLift: '', weightIncrement: 0 }, { Movement: 'Tricep Pulldown', Sets: 4, Reps: 12, RM: 0, RPE: 8, relativeLift: '', weightIncrement: 0 }]
    ],
    [
        [{ Movement: 'Back Squat', Sets: 5, Reps: 5, RM: 0.5, RPE: 6, relativeLift: '', weightIncrement: 30 }, { Movement: 'Bench Press', Sets: 5, Reps: 5, RM: 0.5, RPE: 6, relativeLift: '', weightIncrement: 15 }, { Movement: 'Barbell Row', Sets: 5, Reps: 5, RM: 0.44, RPE: 6, relativeLift: 'Bench Press', weightIncrement: 15 }],
        [{ Movement: 'Back Squat', Sets: 5, Reps: 5, RM: 0.5, RPE: 8, relativeLift: '', weightIncrement: 35 }, { Movement: 'Overhead Press', Sets: 5, Reps: 5, RM: 0.5, RPE: 8, relativeLift: 'Bench Press', weightIncrement: 15 }, { Movement: 'Deadlift', Sets: 1, Reps: 5, RM: 0.44, RPE: 8, relativeLift: 'Bench Press', weightIncrement: 40 }],
        [{ Movement: 'Back Squat', Sets: 5, Reps: 5, RM: 0.5, RPE: 8, relativeLift: '', weightIncrement: 40 }, { Movement: 'Bench Press', Sets: 5, Reps: 5, RM: 0.5, RPE: 8, relativeLift: '', weightIncrement: 20 }, { Movement: 'Barbell Row', Sets: 5, Reps: 5, RM: 0.44, RPE: 8, relativeLift: 'Bench Press', weightIncrement: 20 }],
        [{ Movement: 'DB Deadlift', Sets: 4, Reps: 12, RM: 0, RPE: 8, relativeLift: '', weightIncrement: 0 }, { Movement: 'DB Bench Press', Sets: 4, Reps: 12, RM: 0, RPE: 8, relativeLift: '', weightIncrement: 0 }, { Movement: 'Chin-Ups', Sets: 3, Reps: 12, RM: 0, RPE: 8, relativeLift: '', weightIncrement: 0 }, { Movement: 'Bicep Curls', Sets: 4, Reps: 12, RM: 0, RPE: 8, relativeLift: '', weightIncrement: 0 }, { Movement: 'Tricep Pulldown', Sets: 4, Reps: 12, RM: 0, RPE: 8, relativeLift: '', weightIncrement: 0 }]
    ],
    [
        [{ Movement: 'Back Squat', Sets: 5, Reps: 5, RM: 0.5, RPE: 8, relativeLift: '', weightIncrement: 45 }, { Movement: 'Overhead Press', Sets: 5, Reps: 5, RM: 0.5, RPE: 8, relativeLift: 'Bench Press', weightIncrement: 20 }, { Movement: 'Deadlift', Sets: 1, Reps: 5, RM: 0.44, RPE: 8, relativeLift: 'Bench Press', weightIncrement: 50 }],
        [{ Movement: 'Back Squat', Sets: 5, Reps: 5, RM: 0.5, RPE: 8, relativeLift: '', weightIncrement: 50 }, { Movement: 'Bench Press', Sets: 5, Reps: 5, RM: 0.5, RPE: 8, relativeLift: '', weightIncrement: 25 }, { Movement: 'Barbell Row', Sets: 5, Reps: 5, RM: 0.44, RPE: 8, relativeLift: 'Bench Press', weightIncrement: 25 }],
        [{ Movement: 'Back Squat', Sets: 5, Reps: 5, RM: 0.5, RPE: 8, relativeLift: '', weightIncrement: 55 }, { Movement: 'Overhead Press', Sets: 5, Reps: 5, RM: 0.5, RPE: 8, relativeLift: 'Bench Press', weightIncrement: 25 }, { Movement: 'Deadlift', Sets: 1, Reps: 5, RM: 0.44, RPE: 8, relativeLift: 'Bench Press', weightIncrement: 60 }],
        [{ Movement: 'DB Deadlift', Sets: 4, Reps: 12, RM: 0, RPE: 8, relativeLift: '', weightIncrement: 0 }, { Movement: 'DB Bench Press', Sets: 4, Reps: 12, RM: 0, RPE: 8, relativeLift: '', weightIncrement: 0 }, { Movement: 'Chin-Ups', Sets: 3, Reps: 12, RM: 0, RPE: 8, relativeLift: '', weightIncrement: 0 }, { Movement: 'Bicep Curls', Sets: 4, Reps: 12, RM: 0, RPE: 8, relativeLift: '', weightIncrement: 0 }, { Movement: 'Tricep Pulldown', Sets: 4, Reps: 12, RM: 0, RPE: 8, relativeLift: '', weightIncrement: 0 }]
    ],
    [
        [{ Movement: 'Back Squat', Sets: 5, Reps: 5, RM: 0.5, RPE: 6, relativeLift: '', weightIncrement: 60 }, { Movement: 'Bench Press', Sets: 5, Reps: 5, RM: 0.5, RPE: 6, relativeLift: '', weightIncrement: 30 }, { Movement: 'Barbell Row', Sets: 5, Reps: 5, RM: 0.44, RPE: 6, relativeLift: 'Bench Press', weightIncrement: 30 }],
        [{ Movement: 'Back Squat', Sets: 5, Reps: 5, RM: 0.5, RPE: 8, relativeLift: '', weightIncrement: 65 }, { Movement: 'Overhead Press', Sets: 5, Reps: 5, RM: 0.5, RPE: 8, relativeLift: 'Bench Press', weightIncrement: 30 }, { Movement: 'Deadlift', Sets: 1, Reps: 5, RM: 0.44, RPE: 8, relativeLift: 'Bench Press', weightIncrement: 70 }],
        [{ Movement: 'Back Squat', Sets: 5, Reps: 5, RM: 0.5, RPE: 8, relativeLift: '', weightIncrement: 70 }, { Movement: 'Bench Press', Sets: 5, Reps: 5, RM: 0.5, RPE: 8, relativeLift: '', weightIncrement: 35 }, { Movement: 'Barbell Row', Sets: 5, Reps: 5, RM: 0.44, RPE: 8, relativeLift: 'Bench Press', weightIncrement: 35 }],
        [{ Movement: 'DB Deadlift', Sets: 4, Reps: 12, RM: 0, RPE: 8, relativeLift: '', weightIncrement: 0 }, { Movement: 'DB Bench Press', Sets: 4, Reps: 12, RM: 0, RPE: 8, relativeLift: '', weightIncrement: 0 }, { Movement: 'Chin-Ups', Sets: 3, Reps: 12, RM: 0, RPE: 8, relativeLift: '', weightIncrement: 0 }, { Movement: 'Bicep Curls', Sets: 4, Reps: 12, RM: 0, RPE: 8, relativeLift: '', weightIncrement: 0 }, { Movement: 'Tricep Pulldown', Sets: 4, Reps: 12, RM: 0, RPE: 8, relativeLift: '', weightIncrement: 0 }]
    ],
    [
        [{ Movement: 'Back Squat', Sets: 5, Reps: 5, RM: 0.5, RPE: 8, relativeLift: '', weightIncrement: 75 }, { Movement: 'Overhead Press', Sets: 5, Reps: 5, RM: 0.5, RPE: 8, relativeLift: 'Bench Press', weightIncrement: 35 }, { Movement: 'Deadlift', Sets: 1, Reps: 5, RM: 0.44, RPE: 8, relativeLift: 'Bench Press', weightIncrement: 80 }],
        [{ Movement: 'Back Squat', Sets: 5, Reps: 5, RM: 0.5, RPE: 8, relativeLift: '', weightIncrement: 80 }, { Movement: 'Bench Press', Sets: 5, Reps: 5, RM: 0.5, RPE: 8, relativeLift: '', weightIncrement: 5 }, { Movement: 'Barbell Row', Sets: 5, Reps: 5, RM: 0.44, RPE: 8, relativeLift: 'Bench Press', weightIncrement: 40 }],
        [{ Movement: 'Back Squat', Sets: 5, Reps: 5, RM: 0.5, RPE: 8, relativeLift: '', weightIncrement: 85 }, { Movement: 'Overhead Press', Sets: 5, Reps: 5, RM: 0.5, RPE: 8, relativeLift: 'Bench Press', weightIncrement: 40 }, { Movement: 'Deadlift', Sets: 1, Reps: 5, RM: 0.44, RPE: 8, relativeLift: 'Bench Press', weightIncrement: 90 }],
        [{ Movement: 'DB Deadlift', Sets: 4, Reps: 12, RM: 0, RPE: 8, relativeLift: '', weightIncrement: 0 }, { Movement: 'DB Bench Press', Sets: 4, Reps: 12, RM: 0, RPE: 8, relativeLift: '', weightIncrement: 0 }, { Movement: 'Chin-Ups', Sets: 3, Reps: 12, RM: 0, RPE: 8, relativeLift: '', weightIncrement: 0 }, { Movement: 'Bicep Curls', Sets: 4, Reps: 12, RM: 0, RPE: 8, relativeLift: '', weightIncrement: 0 }, { Movement: 'Tricep Pulldown', Sets: 4, Reps: 12, RM: 0, RPE: 8, relativeLift: '', weightIncrement: 0 }]
    ],
    [
        [{ Movement: 'Back Squat', Sets: 5, Reps: 5, RM: 0.5, RPE: 6, relativeLift: '', weightIncrement: 90 }, { Movement: 'Bench Press', Sets: 5, Reps: 5, RM: 0.5, RPE: 6, relativeLift: '', weightIncrement: 0 }, { Movement: 'Barbell Row', Sets: 5, Reps: 5, RM: 0.44, RPE: 6, relativeLift: 'Bench Press', weightIncrement: 45 }],
        [{ Movement: 'Back Squat', Sets: 5, Reps: 5, RM: 0.5, RPE: 8, relativeLift: '', weightIncrement: 95 }, { Movement: 'Overhead Press', Sets: 5, Reps: 5, RM: 0.5, RPE: 8, relativeLift: 'Bench Press', weightIncrement: 45 }, { Movement: 'Deadlift', Sets: 1, Reps: 5, RM: 0.44, RPE: 8, relativeLift: 'Bench Press', weightIncrement: 100 }],
        [{ Movement: 'Back Squat', Sets: 5, Reps: 5, RM: 0.5, RPE: 8, relativeLift: '', weightIncrement: 100 }, { Movement: 'Bench Press', Sets: 5, Reps: 5, RM: 0.5, RPE: 8, relativeLift: '', weightIncrement: 5 }, { Movement: 'Barbell Row', Sets: 5, Reps: 5, RM: 0.44, RPE: 8, relativeLift: 'Bench Press', weightIncrement: 50 }],
        [{ Movement: 'DB Deadlift', Sets: 4, Reps: 12, RM: 0, RPE: 8, relativeLift: '', weightIncrement: 0 }, { Movement: 'DB Bench Press', Sets: 4, Reps: 12, RM: 0, RPE: 8, relativeLift: '', weightIncrement: 0 }, { Movement: 'Chin-Ups', Sets: 3, Reps: 12, RM: 0, RPE: 8, relativeLift: '', weightIncrement: 0 }, { Movement: 'Bicep Curls', Sets: 4, Reps: 12, RM: 0, RPE: 8, relativeLift: '', weightIncrement: 0 }, { Movement: 'Tricep Pulldown', Sets: 4, Reps: 12, RM: 0, RPE: 8, relativeLift: '', weightIncrement: 0 }]
    ],
    [
        [{ Movement: 'Back Squat', Sets: 5, Reps: 5, RM: 0.5, RPE: 8, relativeLift: '', weightIncrement: 105 }, { Movement: 'Overhead Press', Sets: 5, Reps: 5, RM: 0.5, RPE: 8, relativeLift: 'Bench Press', weightIncrement: 50 }, { Movement: 'Deadlift', Sets: 1, Reps: 5, RM: 0.44, RPE: 8, relativeLift: 'Bench Press', weightIncrement: 110 }],
        [{ Movement: 'Back Squat', Sets: 5, Reps: 5, RM: 0.5, RPE: 8, relativeLift: '', weightIncrement: 115 }, { Movement: 'Bench Press', Sets: 5, Reps: 5, RM: 0.5, RPE: 8, relativeLift: '', weightIncrement: 5 }, { Movement: 'Barbell Row', Sets: 5, Reps: 5, RM: 0.44, RPE: 8, relativeLift: 'Bench Press', weightIncrement: 55 }],
        [{ Movement: 'Back Squat', Sets: 5, Reps: 5, RM: 0.5, RPE: 8, relativeLift: '', weightIncrement: 120 }, { Movement: 'Overhead Press', Sets: 5, Reps: 5, RM: 0.5, RPE: 8, relativeLift: 'Bench Press', weightIncrement: 55 }, { Movement: 'Deadlift', Sets: 1, Reps: 5, RM: 0.44, RPE: 8, relativeLift: 'Bench Press', weightIncrement: 120 }],
        [{ Movement: 'DB Deadlift', Sets: 4, Reps: 12, RM: 0, RPE: 8, relativeLift: '', weightIncrement: 0 }, { Movement: 'DB Bench Press', Sets: 4, Reps: 12, RM: 0, RPE: 8, relativeLift: '', weightIncrement: 0 }, { Movement: 'Chin-Ups', Sets: 3, Reps: 12, RM: 0, RPE: 8, relativeLift: '', weightIncrement: 0 }, { Movement: 'Bicep Curls', Sets: 4, Reps: 12, RM: 0, RPE: 8, relativeLift: '', weightIncrement: 0 }, { Movement: 'Tricep Pulldown', Sets: 4, Reps: 12, RM: 0, RPE: 8, relativeLift: '', weightIncrement: 0 }]
    ],
    [
        [{ Movement: 'Back Squat', Sets: 5, Reps: 5, RM: 0.5, RPE: 6, relativeLift: '', weightIncrement: 125 }, { Movement: 'Bench Press', Sets: 5, Reps: 5, RM: 0.5, RPE: 6, relativeLift: '', weightIncrement: 0 }, { Movement: 'Barbell Row', Sets: 5, Reps: 5, RM: 0.44, RPE: 6, relativeLift: 'Bench Press', weightIncrement: 60 }],
        [{ Movement: 'Back Squat', Sets: 5, Reps: 5, RM: 0.5, RPE: 8, relativeLift: '', weightIncrement: 130 }, { Movement: 'Overhead Press', Sets: 5, Reps: 5, RM: 0.5, RPE: 8, relativeLift: 'Bench Press', weightIncrement: 60 }, { Movement: 'Deadlift', Sets: 1, Reps: 5, RM: 0.44, RPE: 8, relativeLift: 'Bench Press', weightIncrement: 130 }],
        [{ Movement: 'Back Squat', Sets: 5, Reps: 5, RM: 0.5, RPE: 8, relativeLift: '', weightIncrement: 135 }, { Movement: 'Bench Press', Sets: 5, Reps: 5, RM: 0.5, RPE: 8, relativeLift: '', weightIncrement: 5 }, { Movement: 'Barbell Row', Sets: 5, Reps: 5, RM: 0.44, RPE: 8, relativeLift: 'Bench Press', weightIncrement: 65 }],
        [{ Movement: 'DB Deadlift', Sets: 4, Reps: 12, RM: 0, RPE: 8, relativeLift: '', weightIncrement: 0 }, { Movement: 'DB Bench Press', Sets: 4, Reps: 12, RM: 0, RPE: 8, relativeLift: '', weightIncrement: 0 }, { Movement: 'Chin-Ups', Sets: 3, Reps: 12, RM: 0, RPE: 8, relativeLift: '', weightIncrement: 0 }, { Movement: 'Bicep Curls', Sets: 4, Reps: 12, RM: 0, RPE: 8, relativeLift: '', weightIncrement: 0 }, { Movement: 'Tricep Pulldown', Sets: 4, Reps: 12, RM: 0, RPE: 8, relativeLift: '', weightIncrement: 0 }]
    ],
    [
        [{ Movement: 'Back Squat', Sets: 5, Reps: 5, RM: 0.5, RPE: 8, relativeLift: '', weightIncrement: 140 }, { Movement: 'Overhead Press', Sets: 5, Reps: 5, RM: 0.5, RPE: 8, relativeLift: 'Bench Press', weightIncrement: 65 }, { Movement: 'Deadlift', Sets: 1, Reps: 5, RM: 0.44, RPE: 8, relativeLift: 'Bench Press', weightIncrement: 140 }],
        [{ Movement: 'Back Squat', Sets: 5, Reps: 5, RM: 0.5, RPE: 8, relativeLift: '', weightIncrement: 20 }, { Movement: 'Bench Press', Sets: 5, Reps: 5, RM: 0.5, RPE: 8, relativeLift: '', weightIncrement: 5 }, { Movement: 'Barbell Row', Sets: 5, Reps: 5, RM: 0.44, RPE: 8, relativeLift: 'Bench Press', weightIncrement: 70 }],
        [{ Movement: 'Back Squat', Sets: 5, Reps: 5, RM: 0.5, RPE: 8, relativeLift: '', weightIncrement: 25 }, { Movement: 'Overhead Press', Sets: 5, Reps: 5, RM: 0.5, RPE: 8, relativeLift: 'Bench Press', weightIncrement: 70 }, { Movement: 'Deadlift', Sets: 1, Reps: 5, RM: 0.44, RPE: 8, relativeLift: 'Bench Press', weightIncrement: 150 }],
        [{ Movement: 'DB Deadlift', Sets: 4, Reps: 12, RM: 0, RPE: 8, relativeLift: '', weightIncrement: 0 }, { Movement: 'DB Bench Press', Sets: 4, Reps: 12, RM: 0, RPE: 8, relativeLift: '', weightIncrement: 0 }, { Movement: 'Chin-Ups', Sets: 3, Reps: 12, RM: 0, RPE: 8, relativeLift: '', weightIncrement: 0 }, { Movement: 'Bicep Curls', Sets: 4, Reps: 12, RM: 0, RPE: 8, relativeLift: '', weightIncrement: 0 }, { Movement: 'Tricep Pulldown', Sets: 4, Reps: 12, RM: 0, RPE: 8, relativeLift: '', weightIncrement: 0 }]
    ],
    [
        [{ Movement: 'Back Squat', Sets: 5, Reps: 5, RM: 0.5, RPE: 6, relativeLift: '', weightIncrement: 145 }, { Movement: 'Bench Press', Sets: 5, Reps: 5, RM: 0.5, RPE: 6, relativeLift: '', weightIncrement: 0 }, { Movement: 'Barbell Row', Sets: 5, Reps: 5, RM: 0.44, RPE: 6, relativeLift: 'Bench Press', weightIncrement: 75 }],
        [{ Movement: 'Back Squat', Sets: 5, Reps: 5, RM: 0.5, RPE: 8, relativeLift: '', weightIncrement: 155 }, { Movement: 'Overhead Press', Sets: 5, Reps: 5, RM: 0.5, RPE: 8, relativeLift: 'Bench Press', weightIncrement: 75 }, { Movement: 'Deadlift', Sets: 1, Reps: 5, RM: 0.44, RPE: 8, relativeLift: 'Bench Press', weightIncrement: 160 }],
        [{ Movement: 'Back Squat', Sets: 5, Reps: 5, RM: 0.5, RPE: 8, relativeLift: '', weightIncrement: 160 }, { Movement: 'Bench Press', Sets: 5, Reps: 5, RM: 0.5, RPE: 8, relativeLift: '', weightIncrement: 5 }, { Movement: 'Barbell Row', Sets: 5, Reps: 5, RM: 0.44, RPE: 8, relativeLift: 'Bench Press', weightIncrement: 80 }],
        [{ Movement: 'DB Deadlift', Sets: 4, Reps: 12, RM: 0, RPE: 8, relativeLift: '', weightIncrement: 0 }, { Movement: 'DB Bench Press', Sets: 4, Reps: 12, RM: 0, RPE: 8, relativeLift: '', weightIncrement: 0 }, { Movement: 'Chin-Ups', Sets: 3, Reps: 12, RM: 0, RPE: 8, relativeLift: '', weightIncrement: 0 }, { Movement: 'Bicep Curls', Sets: 4, Reps: 12, RM: 0, RPE: 8, relativeLift: '', weightIncrement: 0 }, { Movement: 'Tricep Pulldown', Sets: 4, Reps: 12, RM: 0, RPE: 8, relativeLift: '', weightIncrement: 0 }]
    ],
    [
        [{ Movement: 'Back Squat', Sets: 5, Reps: 5, RM: 0.5, RPE: 8, relativeLift: '', weightIncrement: 165 }, { Movement: 'Overhead Press', Sets: 5, Reps: 5, RM: 0.5, RPE: 8, relativeLift: 'Bench Press', weightIncrement: 80 }, { Movement: 'Deadlift', Sets: 1, Reps: 5, RM: 0.44, RPE: 8, relativeLift: 'Bench Press', weightIncrement: 170 }],
        [{ Movement: 'Back Squat', Sets: 5, Reps: 5, RM: 0.5, RPE: 8, relativeLift: '', weightIncrement: 170 }, { Movement: 'Bench Press', Sets: 5, Reps: 5, RM: 0.5, RPE: 8, relativeLift: '', weightIncrement: 5 }, { Movement: 'Barbell Row', Sets: 5, Reps: 5, RM: 0.44, RPE: 8, relativeLift: 'Bench Press', weightIncrement: 85 }],
        [{ Movement: 'Back Squat', Sets: 5, Reps: 5, RM: 0.5, RPE: 8, relativeLift: '', weightIncrement: 175 }, { Movement: 'Overhead Press', Sets: 5, Reps: 5, RM: 0.5, RPE: 8, relativeLift: 'Bench Press', weightIncrement: 85 }, { Movement: 'Deadlift', Sets: 1, Reps: 5, RM: 0.44, RPE: 8, relativeLift: 'Bench Press', weightIncrement: 180 }],
        [{ Movement: 'DB Deadlift', Sets: 4, Reps: 12, RM: 0, RPE: 8, relativeLift: '', weightIncrement: 0 }, { Movement: 'DB Bench Press', Sets: 4, Reps: 12, RM: 0, RPE: 8, relativeLift: '', weightIncrement: 0 }, { Movement: 'Chin-Ups', Sets: 3, Reps: 12, RM: 0, RPE: 8, relativeLift: '', weightIncrement: 0 }, { Movement: 'Bicep Curls', Sets: 4, Reps: 12, RM: 0, RPE: 8, relativeLift: '', weightIncrement: 0 }, { Movement: 'Tricep Pulldown', Sets: 4, Reps: 12, RM: 0, RPE: 8, relativeLift: '', weightIncrement: 0 }]
    ],
];
class ProgramPageComponent {
    constructor(winndow, platformLocation, _snackBar) {
        this.winndow = winndow;
        this.platformLocation = platformLocation;
        this._snackBar = _snackBar;
        this.displayedColumns = ['Movement', 'Sets', 'Reps', 'Weight'];
    }
    ngOnInit() {
        if (this.athleteInfo.selectedStyle === 'Strength') {
            if (this.athleteInfo.selectedAvailability === 3) {
                this.data = STRENGTH_3_DAY;
            }
            else if (this.athleteInfo.selectedAvailability === 4) {
                this.data = STRENGTH_4_DAY;
            }
        }
        else if (this.athleteInfo.selectedStyle === 'Aesthetics') {
            if (this.athleteInfo.selectedAvailability === 3) {
                this.data = AESTHETICS_3_DAY;
            }
            else if (this.athleteInfo.selectedAvailability === 4) {
                this.data = AESTHETICS_4_DAY;
            }
            else if (this.athleteInfo.selectedAvailability === 5) {
                this.data = AESTHETICS_5_DAY;
            }
        }
        this.selectedWeek = 1;
        this.deadliftMax = this.initiatlize1RM(this.athleteInfo.Deadlift.weight, this.athleteInfo.Deadlift.reps);
        this.benchMax = this.initiatlize1RM(this.athleteInfo.Bench.weight, this.athleteInfo.Bench.reps);
        this.squatMax = this.initiatlize1RM(this.athleteInfo.Squat.weight, this.athleteInfo.Squat.reps);
        this.address = this.platformLocation.location.origin + ('/reference-page' + '/' + this.athleteInfo.age + '/' + this.athleteInfo.bodyweight + '/' + this.athleteInfo.selectedStyle + '/' + this.athleteInfo.selectedAvailability + '/' + this.squatMax + '/' + this.benchMax + '/' + this.deadliftMax);
    }
    initiatlize1RM(weight, reps) {
        if (weight <= 45) {
            return 45;
        }
        else {
            return Math.floor(weight * (1 + ((reps) / 30)));
        }
    }
    getWorkingWeight(movement, relativeLift, RM, weightIncrement, RPE) {
        if (movement === 'Bench Press' || relativeLift === 'Bench Press') {
            return this.round5(Math.max(45 + weightIncrement, (this.benchMax * RM) + weightIncrement));
        }
        else if (movement === 'Back Squat' || relativeLift === ' Back Squat') {
            return this.round5(Math.max(45 + weightIncrement, (this.squatMax * RM) + weightIncrement));
        }
        else if (movement === 'Deadlift' || relativeLift === 'Deadlift') {
            return this.round5(Math.max(45 + weightIncrement, (this.deadliftMax * RM) + weightIncrement));
        }
        else {
            return 'RPE ' + RPE;
        }
    }
    round5(weight) {
        return Math.ceil(weight / 5) * 5;
    }
    openSnackBar() {
        this._snackBar.open('Copied to clipboard', 'Close', {
            duration: 2000,
        });
    }
    captureScreen() {
        const data = document.getElementById('contentToConvert');
        html2canvas__WEBPACK_IMPORTED_MODULE_2___default()(data).then(canvas => {
            // Few necessary setting options
            const imgWidth = 208;
            const pageHeight = 295;
            const imgHeight = canvas.height * imgWidth / canvas.width;
            const heightLeft = imgHeight;
            const contentDataURL = canvas.toDataURL('image/png');
            const pdf = new jspdf__WEBPACK_IMPORTED_MODULE_1__["default"](); // A4 size page of PDF
            const position = 0;
            pdf.addImage(contentDataURL, 'PNG', 0, position, imgWidth, imgHeight);
            pdf.save('Training Program.pdf'); // Generated PDF
        }, reason => {
            return;
        });
    }
}
ProgramPageComponent.ɵfac = function ProgramPageComponent_Factory(t) { return new (t || ProgramPageComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"]('Window'), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_common__WEBPACK_IMPORTED_MODULE_3__["PlatformLocation"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_4__["MatSnackBar"])); };
ProgramPageComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: ProgramPageComponent, selectors: [["app-program-page"]], inputs: { athleteInfo: "athleteInfo" }, features: [_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵProvidersFeature"]([
            { provide: 'Window', useValue: window }
        ])], decls: 16, vars: 8, consts: [["fxLayoutAlign", "center center", "fxLayout", "row"], [3, "ngStyle"], ["fxLayoutAlign", "center start", "fxLayout", "row"], ["appearance", "outline"], ["name", "week", 3, "ngModel", "ngModelChange"], [3, "value", 4, "ngFor", "ngForOf"], ["mat-icon-button", "", 3, "ngStyle", "click"], [3, "cdkCopyToClipboard"], ["fxLayoutAlign", "center", "fxLayout", "row wrap", "fxLayout.xs", "column", "id", "contentToConvert"], ["mat-table", "", "class", "mat-elevation-z8", 3, "dataSource", "ngStyle", 4, "ngFor", "ngForOf"], [3, "value"], ["mat-table", "", 1, "mat-elevation-z8", 3, "dataSource", "ngStyle"], ["matColumnDef", "parentDay"], ["mat-header-cell", "", "colspan", "5", 3, "ngStyle", 4, "matHeaderCellDef"], ["matColumnDef", "Movement"], ["mat-header-cell", "", 4, "matHeaderCellDef"], ["mat-cell", "", 4, "matCellDef"], ["matColumnDef", "Sets"], ["matColumnDef", "Reps"], ["matColumnDef", "Weight"], ["mat-header-row", "", 4, "matHeaderRowDef"], ["mat-row", "", 4, "matRowDef", "matRowDefColumns"], ["mat-header-cell", "", "colspan", "5", 3, "ngStyle"], ["mat-header-cell", ""], ["mat-cell", ""], ["mat-header-row", ""], ["mat-row", ""]], template: function ProgramPageComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "body");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "h1", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3, "Your Custom Program");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "form");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "mat-form-field", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "mat-label");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](8, "Week");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "mat-select", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function ProgramPageComponent_Template_mat_select_ngModelChange_9_listener($event) { return ctx.selectedWeek = $event; });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](10, ProgramPageComponent_mat_option_10_Template, 2, 2, "mat-option", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "button", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function ProgramPageComponent_Template_button_click_11_listener() { return ctx.openSnackBar(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "mat-icon", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](13, "content_copy");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "div", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](15, ProgramPageComponent_table_15_Template, 18, 7, "table", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngStyle", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction0"](6, _c3));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx.selectedWeek);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.data);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngStyle", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction0"](7, _c4));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("cdkCopyToClipboard", ctx.address);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.data[ctx.selectedWeek - 1]);
    } }, directives: [_angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_5__["DefaultLayoutAlignDirective"], _angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_5__["DefaultLayoutDirective"], _angular_common__WEBPACK_IMPORTED_MODULE_3__["NgStyle"], _angular_flex_layout_extended__WEBPACK_IMPORTED_MODULE_6__["DefaultStyleDirective"], _angular_forms__WEBPACK_IMPORTED_MODULE_7__["ɵangular_packages_forms_forms_y"], _angular_forms__WEBPACK_IMPORTED_MODULE_7__["NgControlStatusGroup"], _angular_forms__WEBPACK_IMPORTED_MODULE_7__["NgForm"], _angular_material_form_field__WEBPACK_IMPORTED_MODULE_8__["MatFormField"], _angular_material_form_field__WEBPACK_IMPORTED_MODULE_8__["MatLabel"], _angular_material_select__WEBPACK_IMPORTED_MODULE_9__["MatSelect"], _angular_forms__WEBPACK_IMPORTED_MODULE_7__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_7__["NgModel"], _angular_common__WEBPACK_IMPORTED_MODULE_3__["NgForOf"], _angular_material_button__WEBPACK_IMPORTED_MODULE_10__["MatButton"], _angular_material_icon__WEBPACK_IMPORTED_MODULE_11__["MatIcon"], _angular_cdk_clipboard__WEBPACK_IMPORTED_MODULE_12__["CdkCopyToClipboard"], _angular_material_core__WEBPACK_IMPORTED_MODULE_13__["MatOption"], _angular_material_table__WEBPACK_IMPORTED_MODULE_14__["MatTable"], _angular_material_table__WEBPACK_IMPORTED_MODULE_14__["MatColumnDef"], _angular_material_table__WEBPACK_IMPORTED_MODULE_14__["MatHeaderCellDef"], _angular_material_table__WEBPACK_IMPORTED_MODULE_14__["MatCellDef"], _angular_material_table__WEBPACK_IMPORTED_MODULE_14__["MatHeaderRowDef"], _angular_material_table__WEBPACK_IMPORTED_MODULE_14__["MatRowDef"], _angular_material_table__WEBPACK_IMPORTED_MODULE_14__["MatHeaderCell"], _angular_material_table__WEBPACK_IMPORTED_MODULE_14__["MatCell"], _angular_material_table__WEBPACK_IMPORTED_MODULE_14__["MatHeaderRow"], _angular_material_table__WEBPACK_IMPORTED_MODULE_14__["MatRow"]], styles: ["body[_ngcontent-%COMP%] {\r\n  display: block;\r\n  overflow: auto;\r\n  background-color:#f1f1f1 !important;\r\n}\r\n\r\ntd[_ngcontent-%COMP%] {\r\n padding: 0 15px;\r\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uL3NyYy9hcHAvcHJvZ3JhbS1wYWdlL3Byb2dyYW0tcGFnZS5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0UsY0FBYztFQUNkLGNBQWM7RUFDZCxtQ0FBbUM7QUFDckM7O0FBRUE7Q0FDQyxlQUFlO0FBQ2hCIiwiZmlsZSI6Ii4uL3NyYy9hcHAvcHJvZ3JhbS1wYWdlL3Byb2dyYW0tcGFnZS5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiYm9keSB7XHJcbiAgZGlzcGxheTogYmxvY2s7XHJcbiAgb3ZlcmZsb3c6IGF1dG87XHJcbiAgYmFja2dyb3VuZC1jb2xvcjojZjFmMWYxICFpbXBvcnRhbnQ7XHJcbn1cclxuXHJcbnRkIHtcclxuIHBhZGRpbmc6IDAgMTVweDtcclxufVxyXG5cclxuIl19 */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](ProgramPageComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-program-page',
                templateUrl: './program-page.component.html',
                styleUrls: ['./program-page.component.css'],
                providers: [
                    { provide: 'Window', useValue: window }
                ]
            }]
    }], function () { return [{ type: Window, decorators: [{
                type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Inject"],
                args: ['Window']
            }] }, { type: _angular_common__WEBPACK_IMPORTED_MODULE_3__["PlatformLocation"] }, { type: _angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_4__["MatSnackBar"] }]; }, { athleteInfo: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }] }); })();


/***/ }),

/***/ "./src/app/reference-page/reference-page.component.ts":
/*!************************************************************!*\
  !*** ./src/app/reference-page/reference-page.component.ts ***!
  \************************************************************/
/*! exports provided: ReferencePageComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ReferencePageComponent", function() { return ReferencePageComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
/* harmony import */ var _program_page_program_page_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../program-page/program-page.component */ "./src/app/program-page/program-page.component.ts");




class ReferencePageComponent {
    constructor(route) {
        this.route = route;
        this.age = this.route.snapshot.params.age;
        this.bodyweight = this.route.snapshot.params.bodyweight;
        this.trainingStyle = this.route.snapshot.params.trainingStyle;
        this.availability = this.route.snapshot.params.availability;
        this.squat1RM = this.route.snapshot.params.squat1RM;
        this.bench1RM = this.route.snapshot.params.bench1RM;
        this.deadlift1RM = this.route.snapshot.params.deadlift1RM;
    }
    ngOnInit() {
        this.athleteInfo = {
            selectedStyle: this.trainingStyle,
            selectedAvailability: Number(this.availability),
            bodyweight: Number(this.bodyweight),
            age: Number(this.age),
            Deadlift: {
                weight: Number(this.deadlift1RM),
                reps: 1,
            },
            Squat: {
                weight: Number(this.squat1RM),
                reps: 1,
            },
            Bench: {
                weight: Number(this.bench1RM),
                reps: 1,
            },
        };
    }
}
ReferencePageComponent.ɵfac = function ReferencePageComponent_Factory(t) { return new (t || ReferencePageComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_1__["ActivatedRoute"])); };
ReferencePageComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: ReferencePageComponent, selectors: [["app-reference-page"]], decls: 1, vars: 1, consts: [[3, "athleteInfo"]], template: function ReferencePageComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "app-program-page", 0);
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("athleteInfo", ctx.athleteInfo);
    } }, directives: [_program_page_program_page_component__WEBPACK_IMPORTED_MODULE_2__["ProgramPageComponent"]], styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiIuLi9zcmMvYXBwL3JlZmVyZW5jZS1wYWdlL3JlZmVyZW5jZS1wYWdlLmNvbXBvbmVudC5jc3MifQ== */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](ReferencePageComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-reference-page',
                templateUrl: './reference-page.component.html',
                styleUrls: ['./reference-page.component.css']
            }]
    }], function () { return [{ type: _angular_router__WEBPACK_IMPORTED_MODULE_1__["ActivatedRoute"] }]; }, null); })();


/***/ }),

/***/ "./src/environments/environment.ts":
/*!*****************************************!*\
  !*** ./src/environments/environment.ts ***!
  \*****************************************/
/*! exports provided: environment */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "environment", function() { return environment; });
// This file can be replaced during build by using the `fileReplacements` array.
// `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.
const environment = {
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


/***/ }),

/***/ "./src/main.ts":
/*!*********************!*\
  !*** ./src/main.ts ***!
  \*********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./environments/environment */ "./src/environments/environment.ts");
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app/app.module */ "./src/app/app.module.ts");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/__ivy_ngcc__/fesm2015/platform-browser.js");




if (_environments_environment__WEBPACK_IMPORTED_MODULE_1__["environment"].production) {
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["enableProdMode"])();
}
_angular_platform_browser__WEBPACK_IMPORTED_MODULE_3__["platformBrowser"]().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_2__["AppModule"])
    .catch(err => console.error(err));


/***/ }),

/***/ 0:
/*!***************************!*\
  !*** multi ./src/main.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! C:\Users\jeffr\projects\atlasClient\src\main.ts */"./src/main.ts");


/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main.js.map