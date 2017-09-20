webpackJsonp(["main"],{

/***/ "../../../../../src/$$_gendir lazy recursive":
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncatched exception popping up in devtools
	return Promise.resolve().then(function() {
		throw new Error("Cannot find module '" + req + "'.");
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = "../../../../../src/$$_gendir lazy recursive";

/***/ }),

/***/ "../../../../../src/app/app.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/app.component.html":
/***/ (function(module, exports) {

module.exports = "<div>\n</div>\n\n<app-login-screen>  \n</app-login-screen>\n  "

/***/ }),

/***/ "../../../../../src/app/app.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__services_app_properties_service__ = __webpack_require__("../../../../../src/app/services/app-properties.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var AppComponent = (function () {
    function AppComponent() {
    }
    AppComponent.prototype.setGoogleMetaData = function () {
        var googleMetaTag;
        if (document.querySelectorAll('meta[name="google-signin-client_id"]').length === 0) {
            googleMetaTag = document.createElement('meta');
            googleMetaTag.setAttribute('name', 'google-signin-client_id');
            googleMetaTag.setAttribute('content', __WEBPACK_IMPORTED_MODULE_1__services_app_properties_service__["a" /* AppPropertiesService */].AuthConstants()["google-signin-client_id"]);
            document.head.appendChild(googleMetaTag);
        }
    };
    AppComponent.prototype.ngOnInit = function () {
        this.setGoogleMetaData();
    };
    return AppComponent;
}());
AppComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
        selector: 'app-root',
        template: __webpack_require__("../../../../../src/app/app.component.html"),
        styles: [__webpack_require__("../../../../../src/app/app.component.css")]
    }),
    __metadata("design:paramtypes", [])
], AppComponent);

//# sourceMappingURL=app.component.js.map

/***/ }),

/***/ "../../../../../src/app/app.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__ = __webpack_require__("../../../platform-browser/@angular/platform-browser.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__app_component__ = __webpack_require__("../../../../../src/app/app.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__comps_login_screen_login_screen_component__ = __webpack_require__("../../../../../src/app/comps/login-screen/login-screen.component.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};




var AppModule = (function () {
    function AppModule() {
    }
    return AppModule;
}());
AppModule = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["L" /* NgModule */])({
        declarations: [
            __WEBPACK_IMPORTED_MODULE_2__app_component__["a" /* AppComponent */],
            __WEBPACK_IMPORTED_MODULE_3__comps_login_screen_login_screen_component__["a" /* LoginScreenComponent */]
        ],
        imports: [
            __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__["a" /* BrowserModule */]
        ],
        providers: [],
        bootstrap: [__WEBPACK_IMPORTED_MODULE_2__app_component__["a" /* AppComponent */]]
    })
], AppModule);

//# sourceMappingURL=app.module.js.map

/***/ }),

/***/ "../../../../../src/app/comps/login-screen/login-screen.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/comps/login-screen/login-screen.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"login-screen {{loginAppearClass}}\">\n  \n  <div>\n   <span class=\"WText\">{{signin}}</span>\n    <div class=\"login-wrap\">  \n      <h1 class=\"BrandHOne1\">Location NoteBook</h1>\n      \n      <div id=\"signinPanel\" class=\"{{googleSignPanelClass}}\">\n        <h4 class=\"WText\">Check it!</h4>\n        <p class=\"small WText\">Please check whether Popup Blocker is deactiavted in the browser or not. Google Signin required Popups, so activation of Popup Blocker may stop the functioning. Please check before signin the application.</p>\n        <br/>\n        <div class=\"g-signin2\" data-onsuccess=\"onSignIn\"></div>   \n      </div>\n\n        \n        <div id=\"okPanel\" *ngIf=\"signin\">\n          <h3 class=\"WText\">Oh! Great!</h3>\n          <div class=\"profile-image-container\">\n            <img src=\"{{googleProfile.image}}\"/>\n          </div>\n          <br/>\n          <p class=\"small WText\">So you are signed in as {{googleProfile.name}} with emial <a href=\"mailto:{{googleProfile.email}}\">{{googleProfile.email}}</a>. Please start your journey by clicking the following button. Hope you will enjoy.</p>\n          <div class=\"btn-group\">\n          <a class=\"btn btn-success\" href=\"#\">Start Journey</a>\n          <a class=\"btn btn-info\"  href=\"\" (click)=\"onGooogleSignOut()\">Sign out</a>\n          </div>\n        </div>\n        \n      \n    </div>\n  </div>\n</div>"

/***/ }),

/***/ "../../../../../src/app/comps/login-screen/login-screen.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return LoginScreenComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__services_app_properties_service__ = __webpack_require__("../../../../../src/app/services/app-properties.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var LoginScreenComponent = (function () {
    function LoginScreenComponent() {
        this.googleSignPanelClass = "signin-panel";
        this.loginAppearClass = "";
        this.signin = false;
        this.decided = false;
        this.googleProfile = { name: '', id: '', image: '', email: '' };
        this.GAPI = {};
        this.signin = (window["GOOGLE-AUTH-STATUS"] === __WEBPACK_IMPORTED_MODULE_1__services_app_properties_service__["a" /* AppPropertiesService */].AuthConstants().signin);
    }
    LoginScreenComponent.prototype.onGooogleSignOut = function () {
        var _this = this;
        var RawAuthObj = this.GAPI.auth2.getAuthInstance();
        RawAuthObj.signOut().then(function () {
            _this.googleSignPanelClass = "signin-panel";
            _this.signin = false;
        });
    };
    LoginScreenComponent.prototype.onGoogleSignIn = function (googleUser) {
        var RawGoogleProfile = googleUser.getBasicProfile();
        this.googleProfile.name = RawGoogleProfile.getName();
        this.googleProfile.id = RawGoogleProfile.getId();
        this.googleProfile.image = RawGoogleProfile.getImageUrl();
        this.googleProfile.email = RawGoogleProfile.getEmail();
        this.signin = true;
        this.googleSignPanelClass = "hide signin-panel";
    };
    LoginScreenComponent.prototype.createGoogleScript = function () {
        var _this = this;
        this.GAPI = window['gapi'];
        var jstag, scripts = document.querySelectorAll('[data-dyn-script="location-note-book"]');
        if (!scripts.length && !this.GAPI) {
            jstag = document.createElement('script');
            jstag.setAttribute('data-dyn-script', 'location-note-book');
            document.body.appendChild(jstag);
            jstag.src = __WEBPACK_IMPORTED_MODULE_1__services_app_properties_service__["a" /* AppPropertiesService */].AuthConstants().jsPath;
            setTimeout(function () {
                _this.GAPI = window['gapi'];
                _this.GAPI.auth2.init({
                    client_id: __WEBPACK_IMPORTED_MODULE_1__services_app_properties_service__["a" /* AppPropertiesService */].AuthConstants()['google-signin-client_id']
                });
                _this.loginAppearClass = "appear";
            }, __WEBPACK_IMPORTED_MODULE_1__services_app_properties_service__["a" /* AppPropertiesService */].AuthConstants().standardAPIDelay);
        }
        else {
            alert('available');
        }
    };
    LoginScreenComponent.prototype.ngOnInit = function () {
        var base = this;
        base.createGoogleScript();
        if (!window["onSignIn"]) {
            window["onSignIn"] = function (user) {
                base.onGoogleSignIn(user);
            };
        }
    };
    return LoginScreenComponent;
}());
LoginScreenComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
        selector: 'app-login-screen',
        template: __webpack_require__("../../../../../src/app/comps/login-screen/login-screen.component.html"),
        styles: [__webpack_require__("../../../../../src/app/comps/login-screen/login-screen.component.css")]
    }),
    __metadata("design:paramtypes", [])
], LoginScreenComponent);

//# sourceMappingURL=login-screen.component.js.map

/***/ }),

/***/ "../../../../../src/app/services/app-properties.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppPropertiesService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var AppPropertiesService = (function () {
    function AppPropertiesService() {
    }
    AppPropertiesService.AuthConstants = function () {
        return {
            standardAPIDelay: 2500,
            signin: 'SIGNEDIN',
            signout: 'SIGNEDOUT',
            jsPath: 'https://apis.google.com/js/platform.js',
            'google-signin-client_id': "1056442085004-uhaouf70lsue1q9meanbd247bfiaqloh.apps.googleusercontent.com"
        };
    };
    return AppPropertiesService;
}());
AppPropertiesService = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["B" /* Injectable */])(),
    __metadata("design:paramtypes", [])
], AppPropertiesService);

//# sourceMappingURL=app-properties.service.js.map

/***/ }),

/***/ "../../../../../src/environments/environment.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return environment; });
// The file contents for the current environment will overwrite these during build.
// The build system defaults to the dev environment which uses `environment.ts`, but if you do
// `ng build --env=prod` then `environment.prod.ts` will be used instead.
// The list of which env maps to which file can be found in `.angular-cli.json`.
// The file contents for the current environment will overwrite these during build.
var environment = {
    production: false
};
//# sourceMappingURL=environment.js.map

/***/ }),

/***/ "../../../../../src/main.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_platform_browser_dynamic__ = __webpack_require__("../../../platform-browser-dynamic/@angular/platform-browser-dynamic.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__app_app_module__ = __webpack_require__("../../../../../src/app/app.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__environments_environment__ = __webpack_require__("../../../../../src/environments/environment.ts");




if (__WEBPACK_IMPORTED_MODULE_3__environments_environment__["a" /* environment */].production) {
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_19" /* enableProdMode */])();
}
Object(__WEBPACK_IMPORTED_MODULE_1__angular_platform_browser_dynamic__["a" /* platformBrowserDynamic */])().bootstrapModule(__WEBPACK_IMPORTED_MODULE_2__app_app_module__["a" /* AppModule */])
    .catch(function (err) { return console.log(err); });
//# sourceMappingURL=main.js.map

/***/ }),

/***/ 0:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__("../../../../../src/main.ts");


/***/ })

},[0]);
//# sourceMappingURL=main.bundle.js.map