(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"],{

/***/ "./src/$$_lazy_route_resource lazy recursive":
/*!**********************************************************!*\
  !*** ./src/$$_lazy_route_resource lazy namespace object ***!
  \**********************************************************/
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
webpackEmptyAsyncContext.id = "./src/$$_lazy_route_resource lazy recursive";

/***/ }),

/***/ "./src/app/app-routing.module.ts":
/*!***************************************!*\
  !*** ./src/app/app-routing.module.ts ***!
  \***************************************/
/*! exports provided: AppRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppRoutingModule", function() { return AppRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");



var routes = [];
var AppRoutingModule = /** @class */ (function () {
    function AppRoutingModule() {
    }
    AppRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forRoot(routes)],
            exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
        })
    ], AppRoutingModule);
    return AppRoutingModule;
}());



/***/ }),

/***/ "./src/app/app.component.css":
/*!***********************************!*\
  !*** ./src/app/app.component.css ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n.main{\n\n  text-align:center;\n}\n\n\n\n\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvYXBwLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IjtBQUNBOztFQUVFLGlCQUFpQjtBQUNuQiIsImZpbGUiOiJzcmMvYXBwL2FwcC5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiXG4ubWFpbntcblxuICB0ZXh0LWFsaWduOmNlbnRlcjtcbn1cblxuXG5cblxuIl19 */"

/***/ }),

/***/ "./src/app/app.component.html":
/*!************************************!*\
  !*** ./src/app/app.component.html ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div *ngIf = \"!DisplayLogin\" class=\"main\" (click)=\"Clicked()\">\n    <app-sidebar [Collections] = \"Collections\"></app-sidebar>\n    <app-content [LoggedIn]=\"LoggedIn\" [Collections] = \"Collections\"></app-content>\n\n</div>\n<app-login-signup *ngIf = \"DisplayLogin\"></app-login-signup>\n\n<!-- <router-outlet></router-outlet> -->\n"

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
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _search_search_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./search/search.component */ "./src/app/search/search.component.ts");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");




var AppComponent = /** @class */ (function () {
    function AppComponent(SearchComp, http) {
        this.SearchComp = SearchComp;
        this.http = http;
        this.accessPointUrl = 'https://localhost:5001/api/users';
        this.collectionUrl = 'https://localhost:5001/api/collections';
        this.Collections = {};
        this.DisplayLogin = false;
        this.LoggedIn = false;
    }
    AppComponent.prototype.ngOnInit = function () {
        var _this = this;
        try {
            this.http.get(this.accessPointUrl, { headers: { 'Content-Type': 'application/json' } }).subscribe(function (result) {
                console.log(result);
                if (result === true) {
                    _this.LoggedIn = true;
                    _this.RetrieveCollections();
                }
                else {
                    _this.error = "Incorrect Email or Password.";
                }
            });
        }
        catch (err) {
            console.log(err);
        }
    };
    AppComponent.prototype.RetrieveCollections = function () {
        var _this = this;
        try {
            this.http.get(this.collectionUrl, { headers: { 'Content-Type': 'application/json' } }).subscribe(function (result) {
                console.log('INSIDE RESULTS ', result);
                _this.Collections = result;
            });
        }
        catch (err) {
            console.log(err);
        }
    };
    AppComponent.prototype.ReceiveMessage = function () {
        {
            this.DisplayLogin ? this.DisplayLogin = false : this.DisplayLogin = true;
        }
    };
    AppComponent.prototype.Clicked = function () {
        this.SearchComp.ClearSearch();
    };
    AppComponent.prototype.DismissLogin = function () {
        this.DisplayLogin = false;
    };
    AppComponent.prototype.Logout = function () {
        var _this = this;
        try {
            this.http.delete(this.accessPointUrl, { headers: { 'Content-Type': 'application/json' } }).subscribe(function (result) {
                _this.LoggedIn = false;
            });
        }
        catch (err) {
            console.log(err);
        }
    };
    AppComponent.prototype.CreateCollection = function (list_name) {
        var _this = this;
        try {
            this.http.post(this.collectionUrl, JSON.stringify(list_name), { headers: { 'Content-Type': 'application/json' } }).subscribe(function (result) {
                if (result === true) {
                    _this.RetrieveCollections();
                }
            });
        }
        catch (err) {
            console.log(err);
        }
    };
    AppComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-root',
            template: __webpack_require__(/*! ./app.component.html */ "./src/app/app.component.html"),
            providers: [_search_search_component__WEBPACK_IMPORTED_MODULE_2__["SearchComponent"]],
            styles: [__webpack_require__(/*! ./app.component.css */ "./src/app/app.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_search_search_component__WEBPACK_IMPORTED_MODULE_2__["SearchComponent"], _angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpClient"]])
    ], AppComponent);
    return AppComponent;
}());



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
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/fesm5/platform-browser.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var _app_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./app-routing.module */ "./src/app/app-routing.module.ts");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./app.component */ "./src/app/app.component.ts");
/* harmony import */ var _nav_bar_nav_bar_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./nav-bar/nav-bar.component */ "./src/app/nav-bar/nav-bar.component.ts");
/* harmony import */ var _hero_form_hero_form_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./hero-form/hero-form.component */ "./src/app/hero-form/hero-form.component.ts");
/* harmony import */ var _search_search_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./search/search.component */ "./src/app/search/search.component.ts");
/* harmony import */ var _content_content_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./content/content.component */ "./src/app/content/content.component.ts");
/* harmony import */ var _sidebar_sidebar_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./sidebar/sidebar.component */ "./src/app/sidebar/sidebar.component.ts");
/* harmony import */ var _login_signup_login_signup_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./login-signup/login-signup.component */ "./src/app/login-signup/login-signup.component.ts");













var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["NgModule"])({
            declarations: [
                _app_component__WEBPACK_IMPORTED_MODULE_6__["AppComponent"],
                _nav_bar_nav_bar_component__WEBPACK_IMPORTED_MODULE_7__["NavBarComponent"],
                _hero_form_hero_form_component__WEBPACK_IMPORTED_MODULE_8__["HeroFormComponent"],
                _search_search_component__WEBPACK_IMPORTED_MODULE_9__["SearchComponent"],
                _content_content_component__WEBPACK_IMPORTED_MODULE_10__["ContentComponent"],
                _sidebar_sidebar_component__WEBPACK_IMPORTED_MODULE_11__["SidebarComponent"],
                _login_signup_login_signup_component__WEBPACK_IMPORTED_MODULE_12__["LoginSignupComponent"]
            ],
            imports: [
                _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__["BrowserModule"],
                _app_routing_module__WEBPACK_IMPORTED_MODULE_5__["AppRoutingModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
                _angular_common_http__WEBPACK_IMPORTED_MODULE_4__["HttpClientModule"]
            ],
            providers: [],
            bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_6__["AppComponent"]]
        })
    ], AppModule);
    return AppModule;
}());



/***/ }),

/***/ "./src/app/content/content.component.css":
/*!***********************************************!*\
  !*** ./src/app/content/content.component.css ***!
  \***********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n.content{\n  width: 73%;\n  height: 100vh;\n  float: right;\n  background-color: #121212;\n  text-align: center;\n}\n\n.login_signup{\n  top: 8px;\n  right: 0px;\n  position: fixed;\n  cursor: pointer;\n  -webkit-user-select: none;\n  -moz-user-select: none;\n  -ms-user-select: none;\n  user-select: none;\n  /* float: right; */\n  width: 111px;\n  height: 34px;\n}\n\n.login_signup>p{\n  color: white;\n  padding-top: -9px;\n  margin-top: 8px;\n}\n\n.logout{\n  top: 8px;\n  right: 0px;\n  position: fixed;\n  cursor: pointer;\n  -webkit-user-select: none;\n  -moz-user-select: none;\n  -ms-user-select: none;\n  user-select: none;\n  /* float: right; */\n  width: 111px;\n  height: 34px;\n}\n\n.logout>p{\n  color: white;\n  padding-top: -9px;\n  margin-top: 8px;\n}\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29udGVudC9jb250ZW50LmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IjtBQUNBO0VBQ0UsVUFBVTtFQUNWLGFBQWE7RUFDYixZQUFZO0VBQ1oseUJBQXlCO0VBQ3pCLGtCQUFrQjtBQUNwQjs7QUFFQTtFQUNFLFFBQVE7RUFDUixVQUFVO0VBQ1YsZUFBZTtFQUNmLGVBQWU7RUFDZix5QkFBeUI7RUFDekIsc0JBQXNCO0VBQ3RCLHFCQUFxQjtFQUNyQixpQkFBaUI7RUFDakIsa0JBQWtCO0VBQ2xCLFlBQVk7RUFDWixZQUFZO0FBQ2Q7O0FBRUE7RUFDRSxZQUFZO0VBQ1osaUJBQWlCO0VBQ2pCLGVBQWU7QUFDakI7O0FBQ0E7RUFDRSxRQUFRO0VBQ1IsVUFBVTtFQUNWLGVBQWU7RUFDZixlQUFlO0VBQ2YseUJBQXlCO0VBQ3pCLHNCQUFzQjtFQUN0QixxQkFBcUI7RUFDckIsaUJBQWlCO0VBQ2pCLGtCQUFrQjtFQUNsQixZQUFZO0VBQ1osWUFBWTtBQUNkOztBQUVBO0VBQ0UsWUFBWTtFQUNaLGlCQUFpQjtFQUNqQixlQUFlO0FBQ2pCIiwiZmlsZSI6InNyYy9hcHAvY29udGVudC9jb250ZW50LmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyJcbi5jb250ZW50e1xuICB3aWR0aDogNzMlO1xuICBoZWlnaHQ6IDEwMHZoO1xuICBmbG9hdDogcmlnaHQ7XG4gIGJhY2tncm91bmQtY29sb3I6ICMxMjEyMTI7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbn1cblxuLmxvZ2luX3NpZ251cHtcbiAgdG9wOiA4cHg7XG4gIHJpZ2h0OiAwcHg7XG4gIHBvc2l0aW9uOiBmaXhlZDtcbiAgY3Vyc29yOiBwb2ludGVyO1xuICAtd2Via2l0LXVzZXItc2VsZWN0OiBub25lO1xuICAtbW96LXVzZXItc2VsZWN0OiBub25lO1xuICAtbXMtdXNlci1zZWxlY3Q6IG5vbmU7XG4gIHVzZXItc2VsZWN0OiBub25lO1xuICAvKiBmbG9hdDogcmlnaHQ7ICovXG4gIHdpZHRoOiAxMTFweDtcbiAgaGVpZ2h0OiAzNHB4O1xufVxuXG4ubG9naW5fc2lnbnVwPnB7XG4gIGNvbG9yOiB3aGl0ZTtcbiAgcGFkZGluZy10b3A6IC05cHg7XG4gIG1hcmdpbi10b3A6IDhweDtcbn1cbi5sb2dvdXR7XG4gIHRvcDogOHB4O1xuICByaWdodDogMHB4O1xuICBwb3NpdGlvbjogZml4ZWQ7XG4gIGN1cnNvcjogcG9pbnRlcjtcbiAgLXdlYmtpdC11c2VyLXNlbGVjdDogbm9uZTtcbiAgLW1vei11c2VyLXNlbGVjdDogbm9uZTtcbiAgLW1zLXVzZXItc2VsZWN0OiBub25lO1xuICB1c2VyLXNlbGVjdDogbm9uZTtcbiAgLyogZmxvYXQ6IHJpZ2h0OyAqL1xuICB3aWR0aDogMTExcHg7XG4gIGhlaWdodDogMzRweDtcbn1cblxuLmxvZ291dD5we1xuICBjb2xvcjogd2hpdGU7XG4gIHBhZGRpbmctdG9wOiAtOXB4O1xuICBtYXJnaW4tdG9wOiA4cHg7XG59XG4iXX0= */"

/***/ }),

/***/ "./src/app/content/content.component.html":
/*!************************************************!*\
  !*** ./src/app/content/content.component.html ***!
  \************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n<div class=\"content\">\n\n    <app-search [Collections] = \"Collections\"></app-search>\n    <div class=\"login_signup\" (click)='Login()' *ngIf=\"!LoggedIn\" >\n        <p>Login/ SignUp</p>\n    </div>\n    <div class=\"logout\" (click)='Logout()' *ngIf=\"LoggedIn\" >\n        <p>Logout</p>\n    </div>\n</div>\n"

/***/ }),

/***/ "./src/app/content/content.component.ts":
/*!**********************************************!*\
  !*** ./src/app/content/content.component.ts ***!
  \**********************************************/
/*! exports provided: ContentComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ContentComponent", function() { return ContentComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../app.component */ "./src/app/app.component.ts");



var ContentComponent = /** @class */ (function () {
    function ContentComponent(comp) {
        this.comp = comp;
        this.title = 'World';
    }
    ContentComponent.prototype.Login = function () {
        this.comp.ReceiveMessage();
    };
    ContentComponent.prototype.Logout = function () {
        this.comp.Logout();
    };
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Boolean)
    ], ContentComponent.prototype, "LoggedIn", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Boolean)
    ], ContentComponent.prototype, "Collections", void 0);
    ContentComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-content',
            template: __webpack_require__(/*! ./content.component.html */ "./src/app/content/content.component.html"),
            styles: [__webpack_require__(/*! ./content.component.css */ "./src/app/content/content.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_app_component__WEBPACK_IMPORTED_MODULE_2__["AppComponent"]])
    ], ContentComponent);
    return ContentComponent;
}());



/***/ }),

/***/ "./src/app/hero-form/hero-form.component.css":
/*!***************************************************!*\
  !*** ./src/app/hero-form/hero-form.component.css ***!
  \***************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".container{\n  background-color: white;\n  padding-top: 31px;\n  width: 300px;\n  height: 83px;\n  text-align: center;\n  margin: 0 auto;\n  margin-top: 80px;\n  position: fixed;\n}\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvaGVyby1mb3JtL2hlcm8tZm9ybS5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0UsdUJBQXVCO0VBQ3ZCLGlCQUFpQjtFQUNqQixZQUFZO0VBQ1osWUFBWTtFQUNaLGtCQUFrQjtFQUNsQixjQUFjO0VBQ2QsZ0JBQWdCO0VBQ2hCLGVBQWU7QUFDakIiLCJmaWxlIjoic3JjL2FwcC9oZXJvLWZvcm0vaGVyby1mb3JtLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuY29udGFpbmVye1xuICBiYWNrZ3JvdW5kLWNvbG9yOiB3aGl0ZTtcbiAgcGFkZGluZy10b3A6IDMxcHg7XG4gIHdpZHRoOiAzMDBweDtcbiAgaGVpZ2h0OiA4M3B4O1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gIG1hcmdpbjogMCBhdXRvO1xuICBtYXJnaW4tdG9wOiA4MHB4O1xuICBwb3NpdGlvbjogZml4ZWQ7XG59XG4iXX0= */"

/***/ }),

/***/ "./src/app/hero-form/hero-form.component.html":
/*!****************************************************!*\
  !*** ./src/app/hero-form/hero-form.component.html ***!
  \****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"container\" >\n    <form #f=\"ngForm\" #heroForm=\"ngForm\">\n      <div class=\"form-group\">\n        <label for=\"name\">Email</label>\n        <input type=\"text\" class=\"form-control\" ng-model=\"email\" id=\"email\" (keyup)='EmailChanged($event)' required>\n      </div>\n\n      <div class=\"form-group\">\n        <label for=\"alterEgo\">Password</label>\n        <input type=\"text\" class=\"form-control\" ng-model=\"pass\" id=\"pass\" (keyup)='PassChanged($event)'>\n      </div>\n\n      <button type=\"submit\" (click)=\"Signup($event)\">Sign Up</button>\n      <button type=\"submit\" (click)=\"Login($event)\">Login</button>\n\n    </form>\n</div>\n"

/***/ }),

/***/ "./src/app/hero-form/hero-form.component.ts":
/*!**************************************************!*\
  !*** ./src/app/hero-form/hero-form.component.ts ***!
  \**************************************************/
/*! exports provided: HeroFormComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HeroFormComponent", function() { return HeroFormComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../app.component */ "./src/app/app.component.ts");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");




var HeroFormComponent = /** @class */ (function () {
    function HeroFormComponent(comp, http) {
        this.comp = comp;
        this.http = http;
        this.accessPointUrl = 'https://localhost:5001/api/users';
        this.Email = '';
        this.Pass = '';
    }
    HeroFormComponent.prototype.EmailChanged = function (event) {
        this.Email = event.target.value;
    };
    HeroFormComponent.prototype.PassChanged = function (event) {
        this.Pass = event.target.value;
    };
    HeroFormComponent.prototype.Signup = function () {
        var _this = this;
        try {
            var payload = this.Email + '?' + this.Pass;
            this.http.post(this.accessPointUrl, JSON.stringify(payload), { headers: { 'Content-Type': 'application/json' } }).subscribe(function (result) {
                if (result === true) {
                    _this.comp.DisplayLogin = false;
                    _this.comp.LoggedIn = true;
                }
                else {
                    _this.comp.error = 'Incorrect Email or Password.';
                }
            });
        }
        catch (err) {
            console.log(err);
        }
    };
    HeroFormComponent.prototype.Login = function () {
        var _this = this;
        try {
            var payload = this.Email + '?' + this.Pass;
            this.http.post(this.accessPointUrl + '/verify', JSON.stringify(payload), { headers: { 'Content-Type': 'application/json' } }).subscribe(function (result) {
                if (result === true) {
                    _this.comp.DisplayLogin = false;
                    _this.comp.LoggedIn = true;
                    _this.comp.RetrieveCollections();
                }
                else {
                    _this.comp.error = 'Incorrect Email or Password.';
                }
            });
        }
        catch (err) {
            console.log(err);
        }
    };
    HeroFormComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-hero-form',
            template: __webpack_require__(/*! ./hero-form.component.html */ "./src/app/hero-form/hero-form.component.html"),
            styles: [__webpack_require__(/*! ./hero-form.component.css */ "./src/app/hero-form/hero-form.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_app_component__WEBPACK_IMPORTED_MODULE_2__["AppComponent"], _angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpClient"]])
    ], HeroFormComponent);
    return HeroFormComponent;
}());



/***/ }),

/***/ "./src/app/login-signup/login-signup.component.css":
/*!*********************************************************!*\
  !*** ./src/app/login-signup/login-signup.component.css ***!
  \*********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".login_page{\n  background-color:#121212;\n  position: fixed;\n  width:100vw;\n  height:100vh;\n\n}\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvbG9naW4tc2lnbnVwL2xvZ2luLXNpZ251cC5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0Usd0JBQXdCO0VBQ3hCLGVBQWU7RUFDZixXQUFXO0VBQ1gsWUFBWTs7QUFFZCIsImZpbGUiOiJzcmMvYXBwL2xvZ2luLXNpZ251cC9sb2dpbi1zaWdudXAuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIi5sb2dpbl9wYWdle1xuICBiYWNrZ3JvdW5kLWNvbG9yOiMxMjEyMTI7XG4gIHBvc2l0aW9uOiBmaXhlZDtcbiAgd2lkdGg6MTAwdnc7XG4gIGhlaWdodDoxMDB2aDtcblxufVxuIl19 */"

/***/ }),

/***/ "./src/app/login-signup/login-signup.component.html":
/*!**********************************************************!*\
  !*** ./src/app/login-signup/login-signup.component.html ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"login_page\" (click)=\"Dismiss()\">\n</div>\n<app-hero-form></app-hero-form>\n"

/***/ }),

/***/ "./src/app/login-signup/login-signup.component.ts":
/*!********************************************************!*\
  !*** ./src/app/login-signup/login-signup.component.ts ***!
  \********************************************************/
/*! exports provided: LoginSignupComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LoginSignupComponent", function() { return LoginSignupComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../app.component */ "./src/app/app.component.ts");



var LoginSignupComponent = /** @class */ (function () {
    function LoginSignupComponent(comp) {
        this.comp = comp;
    }
    LoginSignupComponent.prototype.ngOnInit = function () {
    };
    LoginSignupComponent.prototype.Dismiss = function () {
        this.comp.DismissLogin();
    };
    LoginSignupComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-login-signup',
            template: __webpack_require__(/*! ./login-signup.component.html */ "./src/app/login-signup/login-signup.component.html"),
            styles: [__webpack_require__(/*! ./login-signup.component.css */ "./src/app/login-signup/login-signup.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_app_component__WEBPACK_IMPORTED_MODULE_2__["AppComponent"]])
    ], LoginSignupComponent);
    return LoginSignupComponent;
}());



/***/ }),

/***/ "./src/app/nav-bar/nav-bar.component.css":
/*!***********************************************!*\
  !*** ./src/app/nav-bar/nav-bar.component.css ***!
  \***********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n.navBar{\n  width:100%;\n  height:60px;\n  background-color:#002960;\n}\n\n.nav_Detail{\n  width:100%;\n  height:30px;\n  background-color:#F5F5F5;\n  display: inline-block;\n}\n\n.nav_Buttons {\n  margin: 0 auto;\n  text-align: center;\n  float:center;\n}\n\n.nav_Detail > div > div:hover{\n  background-color: #002960;\n  color: white;\n}\n\n.nav_Detail > div > div {\n  cursor: pointer;\n  display: inline-block;\n  width: 125px;\n  height: 30px;\n  padding-top: 5px;\n}\n\n.login{\n  cursor: pointer;\n  float:right;\n  margin-top:5px;\n  margin-right:10px;\n}\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvbmF2LWJhci9uYXYtYmFyLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IjtBQUNBO0VBQ0UsVUFBVTtFQUNWLFdBQVc7RUFDWCx3QkFBd0I7QUFDMUI7O0FBRUE7RUFDRSxVQUFVO0VBQ1YsV0FBVztFQUNYLHdCQUF3QjtFQUN4QixxQkFBcUI7QUFDdkI7O0FBRUE7RUFDRSxjQUFjO0VBQ2Qsa0JBQWtCO0VBQ2xCLFlBQVk7QUFDZDs7QUFFQTtFQUNFLHlCQUF5QjtFQUN6QixZQUFZO0FBQ2Q7O0FBQ0E7RUFDRSxlQUFlO0VBQ2YscUJBQXFCO0VBQ3JCLFlBQVk7RUFDWixZQUFZO0VBQ1osZ0JBQWdCO0FBQ2xCOztBQUNBO0VBQ0UsZUFBZTtFQUNmLFdBQVc7RUFDWCxjQUFjO0VBQ2QsaUJBQWlCO0FBQ25CIiwiZmlsZSI6InNyYy9hcHAvbmF2LWJhci9uYXYtYmFyLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyJcbi5uYXZCYXJ7XG4gIHdpZHRoOjEwMCU7XG4gIGhlaWdodDo2MHB4O1xuICBiYWNrZ3JvdW5kLWNvbG9yOiMwMDI5NjA7XG59XG5cbi5uYXZfRGV0YWlse1xuICB3aWR0aDoxMDAlO1xuICBoZWlnaHQ6MzBweDtcbiAgYmFja2dyb3VuZC1jb2xvcjojRjVGNUY1O1xuICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XG59XG5cbi5uYXZfQnV0dG9ucyB7XG4gIG1hcmdpbjogMCBhdXRvO1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gIGZsb2F0OmNlbnRlcjtcbn1cblxuLm5hdl9EZXRhaWwgPiBkaXYgPiBkaXY6aG92ZXJ7XG4gIGJhY2tncm91bmQtY29sb3I6ICMwMDI5NjA7XG4gIGNvbG9yOiB3aGl0ZTtcbn1cbi5uYXZfRGV0YWlsID4gZGl2ID4gZGl2IHtcbiAgY3Vyc29yOiBwb2ludGVyO1xuICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XG4gIHdpZHRoOiAxMjVweDtcbiAgaGVpZ2h0OiAzMHB4O1xuICBwYWRkaW5nLXRvcDogNXB4O1xufVxuLmxvZ2lue1xuICBjdXJzb3I6IHBvaW50ZXI7XG4gIGZsb2F0OnJpZ2h0O1xuICBtYXJnaW4tdG9wOjVweDtcbiAgbWFyZ2luLXJpZ2h0OjEwcHg7XG59XG4iXX0= */"

/***/ }),

/***/ "./src/app/nav-bar/nav-bar.component.html":
/*!************************************************!*\
  !*** ./src/app/nav-bar/nav-bar.component.html ***!
  \************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n  <div class=\"navBar\"></div>\n  <div class=\"nav_Detail\">\n  <div class=\"nav_Buttons\">\n      <div class=\"create\" (click)=\"CreateList()\">Create New List</div>\n      <div class=\"view\" (click)=\"ViewLists()\">View Lists</div>\n  </div>\n  <div class=\"login\" (click)=\"Login()\">Login/Sign Up</div>\n  </div>\n"

/***/ }),

/***/ "./src/app/nav-bar/nav-bar.component.ts":
/*!**********************************************!*\
  !*** ./src/app/nav-bar/nav-bar.component.ts ***!
  \**********************************************/
/*! exports provided: NavBarComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NavBarComponent", function() { return NavBarComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var NavBarComponent = /** @class */ (function () {
    function NavBarComponent() {
        this.messageEvent = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
    }
    NavBarComponent.prototype.CreateList = function () {
    };
    NavBarComponent.prototype.ViewLists = function () {
    };
    NavBarComponent.prototype.Login = function () {
        this.messageEvent.emit();
    };
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Object)
    ], NavBarComponent.prototype, "messageEvent", void 0);
    NavBarComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-nav-bar',
            template: __webpack_require__(/*! ./nav-bar.component.html */ "./src/app/nav-bar/nav-bar.component.html"),
            styles: [__webpack_require__(/*! ./nav-bar.component.css */ "./src/app/nav-bar/nav-bar.component.css")]
        })
    ], NavBarComponent);
    return NavBarComponent;
}());



/***/ }),

/***/ "./src/app/search/search.component.css":
/*!*********************************************!*\
  !*** ./src/app/search/search.component.css ***!
  \*********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "input{\n  cursor: pointer;\n  width: 450px;\n  height: 25px;\n}\n\n.search_results{\n  margin: 0 auto;\n  margin-top: -16px;\n  background-color:white;\n  width: 456px;\n}\n\n.search_cell{\n  cursor: pointer;\n  background-color:white;\n  margin-top: -15px;\n  width:100%;\n  height:50px;\n\n}\n\n.search_cell>img{\n  height:100%;\n  float: left;\n}\n\n.search_cell > p{\n  padding-top: 15px;\n\n}\n\n.collection_selection{\n    float: left;\n    background-color: white;\n    border: 1px solid black;\n    border-radius: 10px;\n    width: 400px;\n    height: 250px;\n    margin-top: 80px;\n    margin-left: 36px;\n    position: fixed;\n}\n\n.back{\n  cursor:point;\n  -webkit-user-select: none;\n     -moz-user-select: none;\n      -ms-user-select: none;\n          user-select: none;\n  float: right;\n  margin-top: -33px;\n  margin-right: 8px;\n}\n\n.save_collection{\n  width: 100%;\n  height: 28px;\n  background-color: green;\n  color: white;\n  border-radius: 0px 0px 9px 9px;\n  cursor: point;\n  -webkit-user-select: none;\n  -moz-user-select: none;\n  -ms-user-select: none;\n  user-select: none;\n  margin-top: 179px;\n  padding-top: 9px;\n  text-align: center;\n  float: center;\n}\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvc2VhcmNoL3NlYXJjaC5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0UsZUFBZTtFQUNmLFlBQVk7RUFDWixZQUFZO0FBQ2Q7O0FBRUE7RUFDRSxjQUFjO0VBQ2QsaUJBQWlCO0VBQ2pCLHNCQUFzQjtFQUN0QixZQUFZO0FBQ2Q7O0FBRUE7RUFDRSxlQUFlO0VBQ2Ysc0JBQXNCO0VBQ3RCLGlCQUFpQjtFQUNqQixVQUFVO0VBQ1YsV0FBVzs7QUFFYjs7QUFFQTtFQUNFLFdBQVc7RUFDWCxXQUFXO0FBQ2I7O0FBRUE7RUFDRSxpQkFBaUI7O0FBRW5COztBQUVBO0lBQ0ksV0FBVztJQUNYLHVCQUF1QjtJQUN2Qix1QkFBdUI7SUFDdkIsbUJBQW1CO0lBQ25CLFlBQVk7SUFDWixhQUFhO0lBQ2IsZ0JBQWdCO0lBQ2hCLGlCQUFpQjtJQUNqQixlQUFlO0FBQ25COztBQUVBO0VBQ0UsWUFBWTtFQUNaLHlCQUFpQjtLQUFqQixzQkFBaUI7TUFBakIscUJBQWlCO1VBQWpCLGlCQUFpQjtFQUNqQixZQUFZO0VBQ1osaUJBQWlCO0VBQ2pCLGlCQUFpQjtBQUNuQjs7QUFFQTtFQUNFLFdBQVc7RUFDWCxZQUFZO0VBQ1osdUJBQXVCO0VBQ3ZCLFlBQVk7RUFDWiw4QkFBOEI7RUFDOUIsYUFBYTtFQUNiLHlCQUF5QjtFQUN6QixzQkFBc0I7RUFDdEIscUJBQXFCO0VBQ3JCLGlCQUFpQjtFQUNqQixpQkFBaUI7RUFDakIsZ0JBQWdCO0VBQ2hCLGtCQUFrQjtFQUNsQixhQUFhO0FBQ2YiLCJmaWxlIjoic3JjL2FwcC9zZWFyY2gvc2VhcmNoLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyJpbnB1dHtcbiAgY3Vyc29yOiBwb2ludGVyO1xuICB3aWR0aDogNDUwcHg7XG4gIGhlaWdodDogMjVweDtcbn1cblxuLnNlYXJjaF9yZXN1bHRze1xuICBtYXJnaW46IDAgYXV0bztcbiAgbWFyZ2luLXRvcDogLTE2cHg7XG4gIGJhY2tncm91bmQtY29sb3I6d2hpdGU7XG4gIHdpZHRoOiA0NTZweDtcbn1cblxuLnNlYXJjaF9jZWxse1xuICBjdXJzb3I6IHBvaW50ZXI7XG4gIGJhY2tncm91bmQtY29sb3I6d2hpdGU7XG4gIG1hcmdpbi10b3A6IC0xNXB4O1xuICB3aWR0aDoxMDAlO1xuICBoZWlnaHQ6NTBweDtcblxufVxuXG4uc2VhcmNoX2NlbGw+aW1ne1xuICBoZWlnaHQ6MTAwJTtcbiAgZmxvYXQ6IGxlZnQ7XG59XG5cbi5zZWFyY2hfY2VsbCA+IHB7XG4gIHBhZGRpbmctdG9wOiAxNXB4O1xuXG59XG5cbi5jb2xsZWN0aW9uX3NlbGVjdGlvbntcbiAgICBmbG9hdDogbGVmdDtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB3aGl0ZTtcbiAgICBib3JkZXI6IDFweCBzb2xpZCBibGFjaztcbiAgICBib3JkZXItcmFkaXVzOiAxMHB4O1xuICAgIHdpZHRoOiA0MDBweDtcbiAgICBoZWlnaHQ6IDI1MHB4O1xuICAgIG1hcmdpbi10b3A6IDgwcHg7XG4gICAgbWFyZ2luLWxlZnQ6IDM2cHg7XG4gICAgcG9zaXRpb246IGZpeGVkO1xufVxuXG4uYmFja3tcbiAgY3Vyc29yOnBvaW50O1xuICB1c2VyLXNlbGVjdDogbm9uZTtcbiAgZmxvYXQ6IHJpZ2h0O1xuICBtYXJnaW4tdG9wOiAtMzNweDtcbiAgbWFyZ2luLXJpZ2h0OiA4cHg7XG59XG5cbi5zYXZlX2NvbGxlY3Rpb257XG4gIHdpZHRoOiAxMDAlO1xuICBoZWlnaHQ6IDI4cHg7XG4gIGJhY2tncm91bmQtY29sb3I6IGdyZWVuO1xuICBjb2xvcjogd2hpdGU7XG4gIGJvcmRlci1yYWRpdXM6IDBweCAwcHggOXB4IDlweDtcbiAgY3Vyc29yOiBwb2ludDtcbiAgLXdlYmtpdC11c2VyLXNlbGVjdDogbm9uZTtcbiAgLW1vei11c2VyLXNlbGVjdDogbm9uZTtcbiAgLW1zLXVzZXItc2VsZWN0OiBub25lO1xuICB1c2VyLXNlbGVjdDogbm9uZTtcbiAgbWFyZ2luLXRvcDogMTc5cHg7XG4gIHBhZGRpbmctdG9wOiA5cHg7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgZmxvYXQ6IGNlbnRlcjtcbn1cbiJdfQ== */"

/***/ }),

/***/ "./src/app/search/search.component.html":
/*!**********************************************!*\
  !*** ./src/app/search/search.component.html ***!
  \**********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<input\n(keyup)='PerformSearch($event)'\ntype=\"text\"\nplaceholder=\"Search...\"\nng-model=\"search\"\nid=\"search\"/>\n\n<form *ngIf=\"SelectedMovie\" (ngSubmit)=\"SaveCollection($event)\" class=\"collection_selection\">\n  <p>Collections</p>\n  <div class=\"back\" (click)=\"CloseCollections()\">Return</div>\n  <hr/>\n\n  <div *ngFor=\"let key of keys()\" class=\"collection_cells\">\n    <input type=\"checkbox\" name=\"key\" value=\"key\" ()=\"\"><label>{{key}}</label>\n  </div>\n  <button type=\"submit\" class=\"save_collection\">Save</button>\n</form>\n\n<div *ngIf=\"SearchResults\" class=\"search_results\">\n\n  <div class=\"search_results\">\n      <div *ngFor=\"let element of SearchResults\" class=\"search_cell\" (click)=\"MovieClicked(element.imdbID)\">\n        <img src={{element.Poster}}>\n        <p>{{element.Title}}</p>\n      </div>\n  </div>\n</div>\n"

/***/ }),

/***/ "./src/app/search/search.component.ts":
/*!********************************************!*\
  !*** ./src/app/search/search.component.ts ***!
  \********************************************/
/*! exports provided: SearchComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SearchComponent", function() { return SearchComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");



var SearchComponent = /** @class */ (function () {
    function SearchComponent(httpClient) {
        this.httpClient = httpClient;
    }
    SearchComponent.prototype.keys = function () {
        return Object.keys(this.Collections);
    };
    SearchComponent.prototype.PerformSearch = function (form) {
        var _this = this;
        try {
            this.httpClient.get('https://www.omdbapi.com/?apikey=6c3999b3&s=' + form.target.value).subscribe(function (res) {
                if (res.Search) {
                    _this.SearchResults = res.Search;
                }
                else {
                    _this.SearchResults = null;
                }
            });
        }
        catch (error) {
            console.log(error);
        }
    };
    SearchComponent.prototype.MovieClicked = function (id) {
        this.SelectedMovie = id;
    };
    SearchComponent.prototype.ClearSearch = function () {
        this.SearchResults = null;
    };
    SearchComponent.prototype.SaveCollection = function (event) {
        this.SelectedMovie = null;
        console.log(event);
    };
    SearchComponent.prototype.CloseCollections = function () {
        this.SelectedMovie = null;
    };
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Boolean)
    ], SearchComponent.prototype, "Collections", void 0);
    SearchComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-search',
            template: __webpack_require__(/*! ./search.component.html */ "./src/app/search/search.component.html"),
            styles: [__webpack_require__(/*! ./search.component.css */ "./src/app/search/search.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"]])
    ], SearchComponent);
    return SearchComponent;
}());



/***/ }),

/***/ "./src/app/sidebar/sidebar.component.css":
/*!***********************************************!*\
  !*** ./src/app/sidebar/sidebar.component.css ***!
  \***********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".side_bar{\n  background-color:#222222;\n  position: fixed;\n  top:0px;\n  width:27%;\n  height:100%;\n}\n\n.head{\n\n  background-color:#E2E2E2;\n  position: fixed;\n  width:27%;\n  height:50px;\n}\n\n.head > p{\n  -webkit-user-select: none;\n     -moz-user-select: none;\n      -ms-user-select: none;\n          user-select: none;\n  display: inline-block;\n}\n\n.collection{\n  color: #222222;\n  float: left;\n  font-size: 28px;\n  margin-top: 9px;\n  margin-left: 10px;\n}\n\n.collections{\n  width:100%;\n  margin-top: 65px;\n}\n\n.collections_cell{\n  border-radius: 0px 32px 32px 0px;\n  margin-top: 3px;\n  width: 97%;\n  height: 35px;\n  background-color: white;\n}\n\n.collections_cell > input{\n  float: left;\n  height: 33px;\n  width: 285px;\n  border: none;\n}\n\n.add_collections{\n  float: right;\n  margin-right: 12px;\n  font-size: 40px;\n  margin-top: 0px;\n  cursor:pointer;\n}\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvc2lkZWJhci9zaWRlYmFyLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSx3QkFBd0I7RUFDeEIsZUFBZTtFQUNmLE9BQU87RUFDUCxTQUFTO0VBQ1QsV0FBVztBQUNiOztBQUVBOztFQUVFLHdCQUF3QjtFQUN4QixlQUFlO0VBQ2YsU0FBUztFQUNULFdBQVc7QUFDYjs7QUFFQTtFQUNFLHlCQUFpQjtLQUFqQixzQkFBaUI7TUFBakIscUJBQWlCO1VBQWpCLGlCQUFpQjtFQUNqQixxQkFBcUI7QUFDdkI7O0FBRUE7RUFDRSxjQUFjO0VBQ2QsV0FBVztFQUNYLGVBQWU7RUFDZixlQUFlO0VBQ2YsaUJBQWlCO0FBQ25COztBQUVBO0VBQ0UsVUFBVTtFQUNWLGdCQUFnQjtBQUNsQjs7QUFFQTtFQUNFLGdDQUFnQztFQUNoQyxlQUFlO0VBQ2YsVUFBVTtFQUNWLFlBQVk7RUFDWix1QkFBdUI7QUFDekI7O0FBRUE7RUFDRSxXQUFXO0VBQ1gsWUFBWTtFQUNaLFlBQVk7RUFDWixZQUFZO0FBQ2Q7O0FBQ0E7RUFDRSxZQUFZO0VBQ1osa0JBQWtCO0VBQ2xCLGVBQWU7RUFDZixlQUFlO0VBQ2YsY0FBYztBQUNoQiIsImZpbGUiOiJzcmMvYXBwL3NpZGViYXIvc2lkZWJhci5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLnNpZGVfYmFye1xuICBiYWNrZ3JvdW5kLWNvbG9yOiMyMjIyMjI7XG4gIHBvc2l0aW9uOiBmaXhlZDtcbiAgdG9wOjBweDtcbiAgd2lkdGg6MjclO1xuICBoZWlnaHQ6MTAwJTtcbn1cblxuLmhlYWR7XG5cbiAgYmFja2dyb3VuZC1jb2xvcjojRTJFMkUyO1xuICBwb3NpdGlvbjogZml4ZWQ7XG4gIHdpZHRoOjI3JTtcbiAgaGVpZ2h0OjUwcHg7XG59XG5cbi5oZWFkID4gcHtcbiAgdXNlci1zZWxlY3Q6IG5vbmU7XG4gIGRpc3BsYXk6IGlubGluZS1ibG9jaztcbn1cblxuLmNvbGxlY3Rpb257XG4gIGNvbG9yOiAjMjIyMjIyO1xuICBmbG9hdDogbGVmdDtcbiAgZm9udC1zaXplOiAyOHB4O1xuICBtYXJnaW4tdG9wOiA5cHg7XG4gIG1hcmdpbi1sZWZ0OiAxMHB4O1xufVxuXG4uY29sbGVjdGlvbnN7XG4gIHdpZHRoOjEwMCU7XG4gIG1hcmdpbi10b3A6IDY1cHg7XG59XG5cbi5jb2xsZWN0aW9uc19jZWxse1xuICBib3JkZXItcmFkaXVzOiAwcHggMzJweCAzMnB4IDBweDtcbiAgbWFyZ2luLXRvcDogM3B4O1xuICB3aWR0aDogOTclO1xuICBoZWlnaHQ6IDM1cHg7XG4gIGJhY2tncm91bmQtY29sb3I6IHdoaXRlO1xufVxuXG4uY29sbGVjdGlvbnNfY2VsbCA+IGlucHV0e1xuICBmbG9hdDogbGVmdDtcbiAgaGVpZ2h0OiAzM3B4O1xuICB3aWR0aDogMjg1cHg7XG4gIGJvcmRlcjogbm9uZTtcbn1cbi5hZGRfY29sbGVjdGlvbnN7XG4gIGZsb2F0OiByaWdodDtcbiAgbWFyZ2luLXJpZ2h0OiAxMnB4O1xuICBmb250LXNpemU6IDQwcHg7XG4gIG1hcmdpbi10b3A6IDBweDtcbiAgY3Vyc29yOnBvaW50ZXI7XG59XG4iXX0= */"

/***/ }),

/***/ "./src/app/sidebar/sidebar.component.html":
/*!************************************************!*\
  !*** ./src/app/sidebar/sidebar.component.html ***!
  \************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"side_bar\">\n  <div class=\"head\">\n    <p class=\"collection\">Collections</p>\n    <p class=\"add_collections\" (click)='AddCollection()'>+</p>\n  </div>\n  <div *ngIf=\"Collections\" class=\"collections\">\n    <div *ngFor=\"let key of keys()\" class=\"collections_cell\">\n      <input *ngIf=\"!key\" type=\"text\" (keyup.enter)='CreateCollection($event)' autofocus=\"autofocus\">\n      <p *ngIf=\"key\">{{key}}</p>\n\n    </div>\n  </div>\n</div>\n"

/***/ }),

/***/ "./src/app/sidebar/sidebar.component.ts":
/*!**********************************************!*\
  !*** ./src/app/sidebar/sidebar.component.ts ***!
  \**********************************************/
/*! exports provided: SidebarComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SidebarComponent", function() { return SidebarComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../app.component */ "./src/app/app.component.ts");



var SidebarComponent = /** @class */ (function () {
    function SidebarComponent(comp) {
        this.comp = comp;
        this.AddingCollection = false;
    }
    SidebarComponent.prototype.ngOnInit = function () { };
    SidebarComponent.prototype.AddCollection = function () {
        this.Collections[''] = '';
    };
    SidebarComponent.prototype.CreateCollection = function (event) {
        this.comp.CreateCollection(event.target.value);
    };
    SidebarComponent.prototype.keys = function () {
        return Object.keys(this.Collections);
    };
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Object)
    ], SidebarComponent.prototype, "Collections", void 0);
    SidebarComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-sidebar',
            template: __webpack_require__(/*! ./sidebar.component.html */ "./src/app/sidebar/sidebar.component.html"),
            styles: [__webpack_require__(/*! ./sidebar.component.css */ "./src/app/sidebar/sidebar.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_app_component__WEBPACK_IMPORTED_MODULE_2__["AppComponent"]])
    ], SidebarComponent);
    return SidebarComponent;
}());



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


/***/ }),

/***/ "./src/main.ts":
/*!*********************!*\
  !*** ./src/main.ts ***!
  \*********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser-dynamic */ "./node_modules/@angular/platform-browser-dynamic/fesm5/platform-browser-dynamic.js");
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app/app.module */ "./src/app/app.module.ts");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./environments/environment */ "./src/environments/environment.ts");




if (_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].production) {
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["enableProdMode"])();
}
Object(_angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__["platformBrowserDynamic"])().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_2__["AppModule"])
    .catch(function (err) { return console.error(err); });


/***/ }),

/***/ 0:
/*!***************************!*\
  !*** multi ./src/main.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! /Users/bryanstevens/Documents/Sites/MovieList/src/main.ts */"./src/main.ts");


/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main.js.map