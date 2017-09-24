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
exports.push([module.i, ".main-nav{\r\n    padding-bottom:20px;\r\n    border-bottom:#e6e6e6 solid 1px; \r\n}\r\n\r\n.welcome-signature>*{\r\nfloat:right;\r\n}\r\n\r\n.welcome-signature .profile-image-container{\r\n    margin:10px 0px 0px 20px;\r\n}\r\n\r\n.welcome-signature .short-nav{\r\n    margin:20px 20px 0px 0px;\r\n    padding-top: 5px; \r\n}\r\n\r\n.welcome-signature .short-nav a{\r\n  margin-left:10px;\r\n  color:#6c6c6c;\r\n}\r\n\r\n*[data-login-container='true']{\r\n    display:none;\r\n}", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/app.component.html":
/***/ (function(module, exports) {

module.exports = "\r\n<nav class=\"main-nav container-fluid\" *ngIf=\"CurrentUserProfile!==null && JourneyCanStart\">\r\n    <div class=\"col-md-6\">\r\n    <h3 class=\"BrandHOne2\">Location NoteBook</h3>\r\n    </div>\r\n    <div class=\"col-md-6\">\r\n        <div class=\"float-right welcome-signature\">\r\n            <div class=\"profile-image-container short\">\r\n                <img src=\"{{CurrentUserProfile.image}}\" />\r\n            </div>  \r\n            <h3 class=\"G3Text\">Welcome {{CurrentUserProfile.name}}</h3>\r\n            <div class=\"short-nav\">\r\n                <a href=\"#\"><app-sign-out-action></app-sign-out-action></a><a href=\"#\">Help</a>\r\n            </div>      \r\n        </div>\r\n    </div>    \r\n</nav>\r\n<nav class=\"side-nav\" *ngIf=\"CurrentUserProfile!==null && JourneyCanStart\">    \r\n</nav>\r\n\r\n<div class=\"app--router-base\" *ngIf=\"CurrentUserProfile!==null && JourneyCanStart\">\r\n    <router-outlet (activate)='onActivate($event)'></router-outlet>\r\n</div>\r\n\r\n\r\n<div *ngIf=\"!JourneyCanStart\">\r\n    <app-login-screen (onJourneyStart)=\"onJourneyStart($event)\" (loginSuccess)=\"onLoginSuccess($event)\">  \r\n    </app-login-screen>\r\n</div>\r\n\r\n"

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
        this.CurrentUserProfile = null;
        this.JourneyCanStart = false;
    }
    AppComponent.prototype.onActivate = function (comp) {
        console.log('/////////////////////////////////////////////////');
        console.log(comp);
        console.log('/////////////////////////////////////////////////');
    };
    AppComponent.prototype.onJourneyStart = function () {
        this.JourneyCanStart = true;
    };
    AppComponent.prototype.onLoginSuccess = function (gp) {
        console.log('in app component');
        console.log(gp);
        this.CurrentUserProfile = gp;
    };
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
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["o" /* Component */])({
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
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_router__ = __webpack_require__("../../../router/@angular/router.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__comps_login_screen_login_screen_component__ = __webpack_require__("../../../../../src/app/comps/login-screen/login-screen.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__comps_common_preloader_common_preloader_component__ = __webpack_require__("../../../../../src/app/comps/common-preloader/common-preloader.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__comps_home_screen_home_screen_component__ = __webpack_require__("../../../../../src/app/comps/home-screen/home-screen.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__comps_sign_out_action_sign_out_action_component__ = __webpack_require__("../../../../../src/app/comps/sign-out-action/sign-out-action.component.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};








//const appRouterConfig = AppRouteConfig.getRouteConfigObject();
var appRouterConfig = [
    { path: 'welcome', component: __WEBPACK_IMPORTED_MODULE_6__comps_home_screen_home_screen_component__["a" /* HomeScreenComponent */] }
];
var AppModule = (function () {
    function AppModule() {
        console.log('APP main module started');
    }
    return AppModule;
}());
AppModule = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["M" /* NgModule */])({
        declarations: [
            __WEBPACK_IMPORTED_MODULE_2__app_component__["a" /* AppComponent */],
            __WEBPACK_IMPORTED_MODULE_4__comps_login_screen_login_screen_component__["a" /* LoginScreenComponent */],
            __WEBPACK_IMPORTED_MODULE_5__comps_common_preloader_common_preloader_component__["a" /* CommonPreloaderComponent */],
            __WEBPACK_IMPORTED_MODULE_6__comps_home_screen_home_screen_component__["a" /* HomeScreenComponent */],
            __WEBPACK_IMPORTED_MODULE_7__comps_sign_out_action_sign_out_action_component__["a" /* SignOutActionComponent */]
        ],
        imports: [
            __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__["a" /* BrowserModule */],
            __WEBPACK_IMPORTED_MODULE_3__angular_router__["a" /* RouterModule */].forRoot(appRouterConfig)
        ],
        providers: [],
        bootstrap: [__WEBPACK_IMPORTED_MODULE_2__app_component__["a" /* AppComponent */]]
    }),
    __metadata("design:paramtypes", [])
], AppModule);

//# sourceMappingURL=app.module.js.map

/***/ }),

/***/ "../../../../../src/app/comps/common-preloader/common-preloader.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "\r\n.common-preloader{\r\n  display: block;\r\n  width:120px;\r\n  height:20px;\r\n  margin:0 auto;\r\n}\r\n\r\n.common-preloader .circle-conatiner{\r\n  width: 22px;\r\n  height: 22px;\r\n  display: inline-block;\r\n  -webkit-animation-name:common-preloader-animation;\r\n          animation-name:common-preloader-animation;\r\n  animation-duration: 2s; \r\n  -webkit-animation-delay: 1s; \r\n          animation-delay: 1s;\r\n  animation-iteration-count:infinite;\r\n  -webkit-animation-name:example;\r\n  -webkit-animation-duration: 2s; \r\n  -webkit-animation-delay: 0s;\r\n  -webkit-animation-iteration-count:infinite;\r\n}\r\n\r\n.common-preloader .circle-conatiner.n2{\r\n  animation-delay: .5s;\r\n  -webkit-animation-delay: .5s;\r\n}\r\n\r\n.common-preloader .circle-conatiner.n3{\r\n  animation-delay: 1s;\r\n  -webkit-animation-delay: 1s;\r\n}\r\n\r\n.common-preloader .circle-conatiner.n4{\r\n  animation-delay: 1.5s;\r\n  -webkit-animation-delay: 1.5s;\r\n}\r\n\r\n.common-preloader .circle-conatiner svg{\r\n  width:22px;\r\n  height:22px;\r\n}\r\n\r\n.common-preloader .circle-conatiner svg circle{\r\n  fill:rgba(255,255,255,0.9);\r\n  stroke:rgba(0,0,0,0);\r\n  stroke-width:2px; \r\n  cx:11;\r\n  cy:11;\r\n  r:10;\r\n}\r\n\r\n\r\n.count-down-preloader{\r\n  width:80px;\r\n  padding: 10px;\r\n  border-radius:10px;\r\n  background: rgba(0,0,0,0.4); \r\n  margin: 5px auto;\r\n}\r\n\r\n.count-down-preloader span{\r\ndisplay: block;\r\n}\r\n\r\n.count-down-preloader span.digit{\r\n color:white;\r\n font-size:14px; \r\n}\r\n\r\n/* Safari 4.0 - 8.0 */\r\n@-webkit-keyframes example {\r\n    0% {-webkit-transform:translateY(0px) scale(1);transform:translateY(0px) scale(1);}\r\n    50% {-webkit-transform:translateY(30px) scale(0.9);transform:translateY(30px) scale(0.9);}\r\n    100% {-webkit-transform:translateY(0px) scale(1);transform:translateY(0px) scale(1);}\r\n}\r\n\r\n/* Standard syntax */\r\n@keyframes example {\r\n    0% {-webkit-transform:translateY(0px) scale(1);transform:translateY(0px) scale(1);}\r\n    50% {-webkit-transform:translateY(30px) scale(0.9);transform:translateY(30px) scale(0.9);}\r\n    100% {-webkit-transform:translateY(0px) scale(1);transform:translateY(0px) scale(1);}\r\n}", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/comps/common-preloader/common-preloader.component.html":
/***/ (function(module, exports) {

module.exports = "<section *ngIf=\"preloaderType==='loading'\">\r\n<div class=\"common-preloader\">\r\n      <div class=\"circle-conatiner n1\">\r\n          <svg><circle /></svg>    \r\n      </div>\r\n      <div class=\"circle-conatiner n2\">\r\n          <svg><circle /></svg>    \r\n      </div>\r\n      <div class=\"circle-conatiner n3\">\r\n          <svg><circle /></svg>    \r\n      </div>\r\n      <div class=\"circle-conatiner n4\">\r\n          <svg><circle /></svg>    \r\n      </div>\r\n    </div>\r\n</section>\r\n\r\n<section *ngIf=\"preloaderType==='countdown'\">\r\n    <div class=\"count-down-preloader\">\r\n        <span class=\"digit\">{{countOfCountDown}} s</span>\r\n        <span class=\"small WText\">remaining</span>\r\n    </div>    \r\n</section>\r\n    "

/***/ }),

/***/ "../../../../../src/app/comps/common-preloader/common-preloader.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return CommonPreloaderComponent; });
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


var CommonPreloaderComponent = (function () {
    function CommonPreloaderComponent() {
        this.countDownEnd = new __WEBPACK_IMPORTED_MODULE_0__angular_core__["x" /* EventEmitter */]();
        this.countDownCompReady = new __WEBPACK_IMPORTED_MODULE_0__angular_core__["x" /* EventEmitter */]();
        this.cntIntervalID = null;
        this.countOfCountDown = 0;
        this.maxCountDown = __WEBPACK_IMPORTED_MODULE_1__services_app_properties_service__["a" /* AppPropertiesService */].getPreloaderConfig().maxPreloaderCountDown;
    }
    CommonPreloaderComponent.prototype.startCountDown = function () {
        var _this = this;
        this.cntIntervalID = setInterval(function () {
            _this.countOfCountDown--;
            if (_this.countOfCountDown === 0) {
                _this.countDownEnd.emit('countDownEnd');
                clearInterval(_this.cntIntervalID);
            }
        }, 1000);
    };
    CommonPreloaderComponent.prototype.ngOnInit = function () {
        this.countOfCountDown = this.maxCountDown;
        if (this.preloaderType === "countdown") {
            this.countDownCompReady.emit({ desc: '', currentTarget: this });
        }
    };
    return CommonPreloaderComponent;
}());
__decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["F" /* Input */])(),
    __metadata("design:type", String)
], CommonPreloaderComponent.prototype, "preloaderType", void 0);
__decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["T" /* Output */])(),
    __metadata("design:type", typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_0__angular_core__["x" /* EventEmitter */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_0__angular_core__["x" /* EventEmitter */]) === "function" && _a || Object)
], CommonPreloaderComponent.prototype, "countDownEnd", void 0);
__decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["T" /* Output */])(),
    __metadata("design:type", typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_0__angular_core__["x" /* EventEmitter */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_0__angular_core__["x" /* EventEmitter */]) === "function" && _b || Object)
], CommonPreloaderComponent.prototype, "countDownCompReady", void 0);
CommonPreloaderComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["o" /* Component */])({
        selector: 'app-common-preloader',
        template: __webpack_require__("../../../../../src/app/comps/common-preloader/common-preloader.component.html"),
        styles: [__webpack_require__("../../../../../src/app/comps/common-preloader/common-preloader.component.css")]
    }),
    __metadata("design:paramtypes", [])
], CommonPreloaderComponent);

var _a, _b;
//# sourceMappingURL=common-preloader.component.js.map

/***/ }),

/***/ "../../../../../src/app/comps/home-screen/home-screen.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/comps/home-screen/home-screen.component.html":
/***/ (function(module, exports) {

module.exports = "<p>\n  home-screen works!\n  {{appName}}\n</p>\n"

/***/ }),

/***/ "../../../../../src/app/comps/home-screen/home-screen.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return HomeScreenComponent; });
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

var HomeScreenComponent = (function () {
    function HomeScreenComponent() {
        this.compName = "HomeScreenComponent";
    }
    HomeScreenComponent.prototype.ngOnInit = function () {
    };
    return HomeScreenComponent;
}());
HomeScreenComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["o" /* Component */])({
        selector: 'app-home-screen',
        template: __webpack_require__("../../../../../src/app/comps/home-screen/home-screen.component.html"),
        styles: [__webpack_require__("../../../../../src/app/comps/home-screen/home-screen.component.css")]
    }),
    __metadata("design:paramtypes", [])
], HomeScreenComponent);

//# sourceMappingURL=home-screen.component.js.map

/***/ }),

/***/ "../../../../../src/app/comps/login-screen/login-screen.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".login-screen{\r\n   \r\n}\r\n\r\n\r\n\r\n.login-screen .login-wrap{\r\n    transition: all 0.2s ease-out;\r\n    -webkit-transform: translateY(-70%) scale(0.1);\r\n            transform: translateY(-70%) scale(0.1);\r\n    opacity: 0;\r\n}\r\n\r\n.login-screen.appear .login-wrap{\r\n    -webkit-transform: translateY(0%) scale(1);\r\n            transform: translateY(0%) scale(1);\r\n    opacity: 1;\r\n}\r\n\r\n.login-preloader-container{\r\n    position:absolute;\r\n    top:50%;\r\n    left:0px;\r\n    width: 100%;\r\n}\r\n\r\n.login-screen{\r\n  position:absolute;\r\n  top:0px;\r\n  left:0px;\r\n  width: 100%;  \r\n  min-height: 100%;\r\n}\r\n\r\n.journey-start-button{\r\n    cursor:pointer;\r\n    border-radius:18px;    \r\n    position:relative;\r\n    width:100%;\r\n    min-height:80px;\r\n    overflow:hidden;  \r\n    background: #307d30;  \r\n    transition: all 0.5s ease-in-out;\r\n}\r\n\r\n.journey-start-button .surface{\r\n    background:#5cb85c;\r\n    width:100%;\r\n    position: absolute;\r\n    top:0px;\r\n    left: 0px;\r\n    height:90%;  \r\n    border-radius:0px 0px 18px 18px;  \r\n    padding: 6px;\r\n    transition: all 0.5s ease-in-out;\r\n}\r\n\r\n.journey-start-button:hover{\r\n    background: #0e2b24;\r\n}\r\n\r\n.journey-start-button:hover .surface{\r\n    background: #1e4c1e;\r\n}\r\n\r\n\r\n\r\n.journey-start-button .surface .label{\r\n    color:white;\r\n    text-shadow: 1px 1px 5px rgba(0, 0, 0, 0.46);\r\n    font-size:35px; \r\n    font-family: 'Lobster';\r\n    float: left;\r\n}\r\n\r\n.journey-start-button .surface>*{\r\n    float:right;\r\n}\r\n\r\n\r\n\r\n.login-screen .login-bg{\r\n  /*\r\n https://i.pinimg.com/originals/85/b3/31/85b3314cd32bc6f3bd59f21e9dbec0d0.jpg\r\n  https://ak7.picdn.net/shutterstock/videos/3865067/thumb/1.jpg*/  \r\n  background: url('https://i.pinimg.com/originals/85/b3/31/85b3314cd32bc6f3bd59f21e9dbec0d0.jpg') no-repeat;\r\n  background-blend-mode:multiply; \r\n  background-color:#296b5c;\r\n  background-size: 120% auto;\r\n  background-position: center center;\r\n  position: fixed;\r\n  width: 100%;\r\n  height: 100%;\r\n  transition: all 0.5s ease-in-out;\r\n}\r\n\r\n.login-screen.appear .login-bg{\r\nbackground-size: 100% auto;\r\n}\r\n\r\n.login-screen.appear .login-preloader-container{\r\n display: none;\r\n}\r\n\r\n\r\n.login-wrap{\r\n    width:430px;\r\n    margin:10% auto;\r\n    text-align: center;\r\n   padding: 30px;\r\n   background: rgba(0,0,0,0.6);\r\n   border-radius:10px;\r\n   transition: all 0.2s ease-in-out;\r\n}\r\n\r\n\r\n\r\n@media screen and (max-width: 750px){\r\n    .login-wrap{\r\n    position: absolute;\r\n    top:0px;\r\n    left: 0px;    \r\n    width:100%;\r\n    height:100%; \r\n    margin:0px;\r\n    text-align: center;\r\n    padding: 30px;\r\n    background: rgba(0,0,0,0.7);\r\n    border-radius:10px;\r\n    }\r\n\r\n    .login-screen .login-bg,.login-screen.appear .login-bg{\r\n      background-size: auto 100%;\r\n\r\n    }\r\n\r\n    \r\n}", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/comps/login-screen/login-screen.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"login-screen {{loginAppearClass}}\">\r\n  <div class=\"login-bg\"></div>\r\n\r\n  <div>\r\n    <div class=\"login-wrap\">  \r\n      <h1 class=\"BrandHOne1\">Location NoteBook</h1>\r\n      \r\n      <div id=\"signinPanel\" class=\"{{googleSignPanelClass}}\">\r\n        <br/>\r\n        <h4 class=\"WText\">Check it!</h4>\r\n        <p class=\"small WText\">Please check whether Popup Blocker is deactiavted in the browser or not. Google Signin required Popups, so activation of Popup Blocker may stop the functioning. Please check before signin the application.</p>\r\n        <br/>\r\n        <hr style=\"opacity:0.2;\"/>\r\n        <div class=\"g-signin2\" data-ux-mode=\"redirect\" data-theme=\"dark\" data-onsuccess=\"onSignInSuccess\"></div>   \r\n        \r\n      </div>\r\n   <!--data-onsuccess=\"onSignIn\" -->\r\n   <!--data-callback=\"onSignIn\" -->\r\n   <!--  -->        \r\n        <div id=\"okPanel\" *ngIf=\"signin\">\r\n          <h4 class=\"WText\">Welcome {{googleProfile.name}}!  &nbsp;&nbsp;<span class=\"small WText\">|</span> <a class=\"btn btn-sm\"  href=\"\" (click)=\"onGooogleSignOut()\">Sign out</a></h4>\r\n          \r\n          <div class=\"profile-image-container\">\r\n            <img src=\"{{googleProfile.image}}\"/>\r\n          </div>\r\n          <br/>\r\n          \r\n          <br/>\r\n          <p class=\"small WText\">So you are signed in as {{googleProfile.name}} with email <a href=\"mailto:{{googleProfile.email}}\">{{googleProfile.email}}</a>. Please start your journey by clicking the following button. Hope you will enjoy.</p>\r\n          <div class=\"journey-start-button\" (click)=\"homeScreenKikOff('fromStartButton')\">\r\n            <div class=\"surface\">\r\n              <div class=\"label\">Start Journey</div>\r\n              <app-common-preloader [preloaderType]=\"'countdown'\" (countDownEnd)=\"homeScreenKikOff($event)\"  (countDownCompReady)=\"onCountDownPreloaderReay($event)\"></app-common-preloader>\r\n            </div>\r\n          </div>\r\n          \r\n          \r\n          \r\n        </div>\r\n        \r\n      \r\n    </div>\r\n    <div class=\"login-preloader-container\">\r\n        <app-common-preloader [preloaderType]=\"'loading'\"></app-common-preloader>\r\n    </div>\r\n  </div>\r\n</div>"

/***/ }),

/***/ "../../../../../src/app/comps/login-screen/login-screen.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return LoginScreenComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__services_app_properties_service__ = __webpack_require__("../../../../../src/app/services/app-properties.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__common_preloader_common_preloader_component__ = __webpack_require__("../../../../../src/app/comps/common-preloader/common-preloader.component.ts");
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
        this.loginSuccess = new __WEBPACK_IMPORTED_MODULE_0__angular_core__["x" /* EventEmitter */]();
        this.onJourneyStart = new __WEBPACK_IMPORTED_MODULE_0__angular_core__["x" /* EventEmitter */]();
        this.compName = "LoginScreenComponent";
        this.googleSignPanelClass = "signin-panel";
        this.loginAppearClass = "";
        this.eventFromSigninButton = false;
        this.eventFromAppStartButton = false;
        this.signin = false;
        this.decided = false;
        this.googleProfile = { name: '', id: '', image: '', email: '' };
        this.GAPI = {};
        this.signin = (window["GOOGLE-AUTH-STATUS"] === __WEBPACK_IMPORTED_MODULE_1__services_app_properties_service__["a" /* AppPropertiesService */].AuthConstants().signin);
    }
    LoginScreenComponent.prototype.homeScreenKikOff = function (e) {
        console.log(e);
        if (!this.eventFromAppStartButton) {
            this.onJourneyStart.emit(this.googleProfile);
        }
        if (e === "fromStartButton") {
            this.eventFromAppStartButton = true;
        }
    };
    LoginScreenComponent.prototype.onCountDownPreloaderReay = function (e) {
        e.currentTarget.startCountDown();
    };
    LoginScreenComponent.prototype.onGooogleSignOut = function () {
        var _this = this;
        var RawAuthObj = this.GAPI.auth2.getAuthInstance();
        RawAuthObj.signOut().then(function () {
            _this.googleSignPanelClass = "signin-panel";
            _this.signin = false;
        });
    };
    LoginScreenComponent.prototype.onGoogleSignInSuccess = function (googleUser) {
        var RawGoogleProfile = googleUser.getBasicProfile();
        this.googleProfile.name = RawGoogleProfile.getName();
        this.googleProfile.id = RawGoogleProfile.getId();
        this.googleProfile.image = RawGoogleProfile.getImageUrl();
        this.googleProfile.email = RawGoogleProfile.getEmail();
        this.googleSignPanelClass = "hide signin-panel";
        console.log('onGoogleSignIn');
        this.signin = true;
        console.log('this.signin:' + this.signin);
        if (this.eventFromSigninButton) {
            window.location.reload();
        }
        else {
            console.log('Emiting event "loginSuccess"');
            this.loginSuccess.emit(this.googleProfile);
            console.log(this.preloaders.toArray());
        }
    };
    LoginScreenComponent.prototype.createGoogleScript = function () {
        var _this = this;
        var base = this;
        this.GAPI = window['gapi'];
        var GoogleAuthObject, jstag, scripts = document.querySelectorAll('[data-dyn-script="location-note-book"]');
        if (!scripts.length && !this.GAPI) {
            jstag = document.createElement('script');
            jstag.setAttribute('async', '');
            jstag.setAttribute('defer', '');
            jstag.setAttribute('data-dyn-script', 'location-note-book');
            document.body.appendChild(jstag);
            jstag.src = __WEBPACK_IMPORTED_MODULE_1__services_app_properties_service__["a" /* AppPropertiesService */].AuthConstants().jsPath;
            setTimeout(function () {
                _this.GAPI = window['gapi'];
                GoogleAuthObject = _this.GAPI.auth2.init();
                GoogleAuthObject.then(function () {
                    var btn = document.querySelector('*[class *="RioButtonContentWrapper"]');
                    btn.addEventListener('click', function () {
                        base.eventFromSigninButton = true;
                    });
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
        console.log('LoginScreen-init');
        if (!window["onSignInSuccess"]) {
            window["onSignInSuccess"] = function (user) {
                base.onGoogleSignInSuccess(user);
            };
        }
    };
    return LoginScreenComponent;
}());
__decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_17" /* ViewChildren */])(__WEBPACK_IMPORTED_MODULE_2__common_preloader_common_preloader_component__["a" /* CommonPreloaderComponent */]),
    __metadata("design:type", typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_0__angular_core__["Z" /* QueryList */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_0__angular_core__["Z" /* QueryList */]) === "function" && _a || Object)
], LoginScreenComponent.prototype, "preloaders", void 0);
__decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["T" /* Output */])(),
    __metadata("design:type", typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_0__angular_core__["x" /* EventEmitter */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_0__angular_core__["x" /* EventEmitter */]) === "function" && _b || Object)
], LoginScreenComponent.prototype, "loginSuccess", void 0);
__decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["T" /* Output */])(),
    __metadata("design:type", typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_0__angular_core__["x" /* EventEmitter */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_0__angular_core__["x" /* EventEmitter */]) === "function" && _c || Object)
], LoginScreenComponent.prototype, "onJourneyStart", void 0);
LoginScreenComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["o" /* Component */])({
        selector: 'app-login-screen',
        template: __webpack_require__("../../../../../src/app/comps/login-screen/login-screen.component.html"),
        styles: [__webpack_require__("../../../../../src/app/comps/login-screen/login-screen.component.css")]
    }),
    __metadata("design:paramtypes", [])
], LoginScreenComponent);

var _a, _b, _c;
//# sourceMappingURL=login-screen.component.js.map

/***/ }),

/***/ "../../../../../src/app/comps/sign-out-action/sign-out-action.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/comps/sign-out-action/sign-out-action.component.html":
/***/ (function(module, exports) {

module.exports = "<span (click)=\"onSignOutButtonClick()\">Signout</span>"

/***/ }),

/***/ "../../../../../src/app/comps/sign-out-action/sign-out-action.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SignOutActionComponent; });
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

var SignOutActionComponent = (function () {
    function SignOutActionComponent() {
        this.GAPI = null;
    }
    SignOutActionComponent.prototype.onSignOutButtonClick = function () {
        this.GAPI = window["gapi"];
        var RawAuthObj = this.GAPI.auth2.getAuthInstance();
        RawAuthObj.signOut().then(function () {
        });
    };
    SignOutActionComponent.prototype.ngOnInit = function () {
    };
    return SignOutActionComponent;
}());
SignOutActionComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["o" /* Component */])({
        selector: 'app-sign-out-action',
        template: __webpack_require__("../../../../../src/app/comps/sign-out-action/sign-out-action.component.html"),
        styles: [__webpack_require__("../../../../../src/app/comps/sign-out-action/sign-out-action.component.css")]
    }),
    __metadata("design:paramtypes", [])
], SignOutActionComponent);

//# sourceMappingURL=sign-out-action.component.js.map

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
            standardAPIDelay: 3500,
            signin: 'SIGNEDIN',
            signout: 'SIGNEDOUT',
            jsPath: 'https://apis.google.com/js/platform.js',
            'google-signin-client_id': "1056442085004-bpm9f77rfknv4f8i20te08uk2u0s3rcg.apps.googleusercontent.com"
        };
    };
    AppPropertiesService.getPreloaderConfig = function () {
        return {
            maxPreloaderCountDown: 5
        };
    };
    return AppPropertiesService;
}());
AppPropertiesService = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["C" /* Injectable */])(),
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
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_23" /* enableProdMode */])();
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