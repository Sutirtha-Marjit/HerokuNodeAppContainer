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

module.exports = "<div>\n  <nav class=\"navbar navbar-default\">\n    <div class=\"navbar-header\">\n      <a (click)=\"menuToggle()\" id=\"menu-opener\" class=\"navbar-brand open\" style=\"cursor:pointer;\">Menu</a>\n    </div>\n  </nav>\n  <app-image-grid></app-image-grid>\n</div>\n<div class=\"console no-margin open\">\n  <form (ngSubmit)=\"onSubmit()\"  class=\"form-horizontal\" novalidate [formGroup]=\"formgrp\">\n        <div class=\"form-group col-sm-12\">\n              <label style=\"text-align:left\" for=\"\" class=\"col-sm-12 control-label\">Path segments</label>\n        </div>\n        \n        <div class=\"form-group col-sm-12\">          \n            <div class=\"checkbox\" style=\"margin-left:20px;\">\n              <label><input formControlName=\"zeroPattern\" type=\"checkbox\"> Starting with zero pattern</label>            \n          </div>\n        </div>\n        <div class=\"col-sm-2\"><input formControlName=\"rangeStart\"   type=\"number\" class=\"form-control\"  placeholder=\"Range Start\"/></div>\n        <div class=\"col-sm-2\"><input formControlName=\"rangeEnd\"   type=\"number\" class=\"form-control\"  placeholder=\"Range End\"/></div>\n        \n        <div style=\"clear:both; margin-top:10px;\"></div>\n        <div class=\"col-sm-8\">\n            <input formControlName=\"pPath\"   type=\"text\" class=\"form-control\"  placeholder=\"Primary path\"/>\n        </div>   \n        \n        <div class=\"col-sm-4\">\n            <input formControlName=\"sPath\"  type=\"text\" class=\"form-control\" placeholder=\"Secondary path\">\n        </div>\n       \n        <div class=\"col-sm-2\" style=\"margin-top:20px;\">\n          <input type=\"submit\" class=\"form-control btn btn-success\" id=\"actionBtn\" value=\"Start Process\"/>\n        </div>\n        <div class=\"col-sm-2\" style=\"margin-top:20px;\">\n          <input type=\"reset\" class=\"form-control btn btn-default\" id=\"actionBtn\" value=\"Clean\"/>\n        </div>\n  </form>\n  <div style=\"clear:both;\"></div>\n</div>"

/***/ }),

/***/ "../../../../../src/app/app.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_forms__ = __webpack_require__("../../../forms/@angular/forms.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__services_common_image_tracker_service__ = __webpack_require__("../../../../../src/app/services/common-image-tracker.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__comps_image_grid_image_grid_component__ = __webpack_require__("../../../../../src/app/comps/image-grid/image-grid.component.ts");
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
    function AppComponent(imageTrckerService) {
        this.imageTrckerService = imageTrckerService;
        this.rangeDefault = { start: 1, end: 12 };
        this.linkArray = [];
        this.title = 'app works!';
        this.formgrp = new __WEBPACK_IMPORTED_MODULE_1__angular_forms__["b" /* FormGroup */]({
            pPath: new __WEBPACK_IMPORTED_MODULE_1__angular_forms__["a" /* FormControl */](''),
            sPath: new __WEBPACK_IMPORTED_MODULE_1__angular_forms__["a" /* FormControl */](''),
            zeroPattern: new __WEBPACK_IMPORTED_MODULE_1__angular_forms__["a" /* FormControl */](''),
            rangeStart: new __WEBPACK_IMPORTED_MODULE_1__angular_forms__["a" /* FormControl */](this.rangeDefault.start),
            rangeEnd: new __WEBPACK_IMPORTED_MODULE_1__angular_forms__["a" /* FormControl */](this.rangeDefault.end)
        });
    }
    AppComponent.prototype.rangeFilter = function () {
        var st, ed;
        st = this.formgrp.controls["rangeStart"].value;
        ed = this.formgrp.controls["rangeEnd"].value;
        if (st > ed) {
            this.formgrp.controls["rangeStart"].setValue(ed);
            this.formgrp.controls["rangeEnd"].setValue(st);
        }
    };
    ;
    AppComponent.prototype.onSubmit = function () {
        this.linkArray = [];
        this.imageGridComponent.linkArray = this.linkArray;
        this.imageGridComponent.populateImages();
        this.rangeFilter();
        this.linkArray = this.imageTrckerService.generatePath({
            primaryPath: this.formgrp.controls["pPath"].value,
            secondaryPath: this.formgrp.controls["sPath"].value,
            zeroPattern: this.formgrp.controls["zeroPattern"].value,
            rangeStart: this.formgrp.controls["rangeStart"].value,
            rangeEnd: this.formgrp.controls["rangeEnd"].value
        });
        this.imageGridComponent.linkArray = this.linkArray;
        this.imageGridComponent.populateImages();
        this.menuToggle();
    };
    AppComponent.prototype.ngOnInit = function () {
        this.consoleEl = document.querySelector('.console');
        this.consoleMenu = document.getElementById('menu-opener');
    };
    AppComponent.prototype.menuToggle = function () {
        this.imageTrckerService.elementToggle({ el: this.consoleEl, class: 'open', invoker: this.consoleMenu });
    };
    return AppComponent;
}());
__decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_13" /* ViewChild */])(__WEBPACK_IMPORTED_MODULE_3__comps_image_grid_image_grid_component__["a" /* ImageGridComponent */]),
    __metadata("design:type", typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_3__comps_image_grid_image_grid_component__["a" /* ImageGridComponent */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_3__comps_image_grid_image_grid_component__["a" /* ImageGridComponent */]) === "function" && _a || Object)
], AppComponent.prototype, "imageGridComponent", void 0);
AppComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
        selector: 'app-root',
        template: __webpack_require__("../../../../../src/app/app.component.html"),
        styles: [__webpack_require__("../../../../../src/app/app.component.css")]
    }),
    __metadata("design:paramtypes", [typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_2__services_common_image_tracker_service__["a" /* CommonImageTrackerService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__services_common_image_tracker_service__["a" /* CommonImageTrackerService */]) === "function" && _b || Object])
], AppComponent);

var _a, _b;
//# sourceMappingURL=app.component.js.map

/***/ }),

/***/ "../../../../../src/app/app.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__ = __webpack_require__("../../../platform-browser/@angular/platform-browser.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_forms__ = __webpack_require__("../../../forms/@angular/forms.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_http__ = __webpack_require__("../../../http/@angular/http.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__services_common_image_tracker_service__ = __webpack_require__("../../../../../src/app/services/common-image-tracker.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__app_component__ = __webpack_require__("../../../../../src/app/app.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__comps_image_grid_image_grid_component__ = __webpack_require__("../../../../../src/app/comps/image-grid/image-grid.component.ts");
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
            __WEBPACK_IMPORTED_MODULE_5__app_component__["a" /* AppComponent */],
            __WEBPACK_IMPORTED_MODULE_6__comps_image_grid_image_grid_component__["a" /* ImageGridComponent */]
        ],
        imports: [
            __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__["a" /* BrowserModule */],
            __WEBPACK_IMPORTED_MODULE_2__angular_forms__["c" /* FormsModule */],
            __WEBPACK_IMPORTED_MODULE_3__angular_http__["a" /* HttpModule */],
            __WEBPACK_IMPORTED_MODULE_2__angular_forms__["d" /* ReactiveFormsModule */]
        ],
        providers: [
            __WEBPACK_IMPORTED_MODULE_4__services_common_image_tracker_service__["a" /* CommonImageTrackerService */]
        ],
        bootstrap: [__WEBPACK_IMPORTED_MODULE_5__app_component__["a" /* AppComponent */]]
    })
], AppModule);

//# sourceMappingURL=app.module.js.map

/***/ }),

/***/ "../../../../../src/app/comps/image-grid/image-grid.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/comps/image-grid/image-grid.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"image-grid container-fluid\">\n  <div class=\"btn-group\">\n    <a id=\"linkPadOpener\" *ngIf=\"linkArray.length>0\" (click)=\"toggleLinkPad()\" class=\"btn btn-success\">Link report</a>\n    <a id=\"cleanGrid\" *ngIf=\"linkArray.length>0\" (click)=\"cleanGrid()\" class=\"btn btn-primary\">Clean grid</a>\n  </div>\n  <div id=\"linkpad\" style=\"margin-top:20px;\">\n    <ol class=\"list-group\">\n      <li class=\"list-group-item\" *ngFor=\"let link of linkArray; let serial = index\">\n        \n        <span *ngIf=\"imageObjectCollection[serial].exists\"><input type=\"checkbox\" [(ngModel)]=\"imageObjectCollection[serial].includedInZip\" ></span> \n        <span>&nbsp;&nbsp;&nbsp;<a href=\"{{link}}\" target=\"_blank\"><small>{{link}}</small></a></span>\n      </li>\n    </ol>\n  </div>\n  <hr *ngIf=\"linkArray.length>0\"/>\n  <div class=\"image-container\">\n    \n    <div *ngFor=\"let imgobj of imageObjectCollection; let idx = index\" class=\" col-sm-3 nomargin nopadding\">\n      \n      <div class=\"imgEl\">\n        <img *ngIf=\"(imgobj.status==='loaded')\" src=\"{{imgobj.image.src}}\"/>\n        <div *ngIf=\"(imgobj.status==='loaded')\" class=\"prop-board\">\n          <div class=\"short-preview\"><img src=\"{{imgobj.image.src}}\"/></div> \n          <input type=\"checkbox\"/>\n          <hr/>\n          <div><a class=\"btn btn-primary btn-sm\" href=\"{{imgobj.image.src}}\" download=\"\"><small>Download</small></a></div>\n          <small>{{imgobj.width}} × {{imgobj.height}}</small>\n        </div>\n        \n        <div *ngIf=\"(imgobj.status==='error')\" class=\"prop-board error\">\n          <h4>{{idx}}</h4>\n          <h6 class=\"text-danger\">Not available</h6>\n          <hr/>\n          <small class=\"text-danger\">{{imgobj.image.src}}</small>\n        </div>\n\n        <div *ngIf=\"(imgobj.status==='loading')\" class=\"prop-board fixed loading\">\n          <h4>Loading...</h4>\n        </div>  \n      </div>\n\n     \n    </div>\n    \n  </div>\n</div>"

/***/ }),

/***/ "../../../../../src/app/comps/image-grid/image-grid.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ImageGridComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__services_common_image_tracker_service__ = __webpack_require__("../../../../../src/app/services/common-image-tracker.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var ImageGridComponent = (function () {
    function ImageGridComponent(imageTrckerService) {
        this.imageTrckerService = imageTrckerService;
        this.linkArray = [];
        this.imageArray = [];
        this.imageObjectCollection = [];
    }
    ImageGridComponent.prototype.ngOnInit = function () {
        this.linkPad = document.getElementById("linkpad");
        this.linkPadMenu = document.getElementById('linkPadOpener');
    };
    ImageGridComponent.prototype.loadProcessEventListener = function (e) {
        var imobj = this.imageObjectCollection[e.currentTarget.getAttribute('data-index')];
        if (e.type === "error") {
            imobj.exists = false;
            imobj.status = "error";
        }
        if (e.type === "load") {
            imobj.exists = true;
            imobj.width = imobj.image.width;
            imobj.height = imobj.image.height;
            imobj.status = "loaded";
        }
        this.imageObjectCollection[e.currentTarget.getAttribute('data-index')] = imobj;
        console.log(this.imageObjectCollection);
    };
    ImageGridComponent.prototype.imagePropertyInject = function (path, index) {
        var base = this;
        var tempImg = new Image();
        tempImg.id = index + "_img_" + (new Date()).getTime();
        tempImg.setAttribute('data-index', '' + index);
        tempImg.onload = function (e) {
            base.loadProcessEventListener(e);
        };
        tempImg.onerror = function (e) {
            base.loadProcessEventListener(e);
        };
        tempImg.setAttribute("src", path);
        return tempImg;
    };
    ImageGridComponent.prototype.populateImages = function () {
        var base = this;
        base.imageObjectCollection = [];
        base.linkArray.forEach(function (path, index) {
            var img = base.imagePropertyInject(path, index);
            base.imageObjectCollection.push({
                path: path,
                image: img,
                width: 0,
                height: 0,
                exists: true,
                status: 'loading',
                includedInZip: true
            });
        });
    };
    ImageGridComponent.prototype.cleanGrid = function () {
        this.linkArray = [];
        this.imageArray = [];
        this.imageObjectCollection = [];
    };
    ImageGridComponent.prototype.toggleLinkPad = function () {
        this.linkPad = document.getElementById("linkpad");
        this.linkPadMenu = document.getElementById('linkPadOpener');
        this.imageTrckerService.elementToggle({
            el: this.linkPad,
            class: 'open',
            invoker: this.linkPadMenu
        });
    };
    return ImageGridComponent;
}());
ImageGridComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
        selector: 'app-image-grid',
        template: __webpack_require__("../../../../../src/app/comps/image-grid/image-grid.component.html"),
        styles: [__webpack_require__("../../../../../src/app/comps/image-grid/image-grid.component.css")]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__services_common_image_tracker_service__["a" /* CommonImageTrackerService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__services_common_image_tracker_service__["a" /* CommonImageTrackerService */]) === "function" && _a || Object])
], ImageGridComponent);

var _a;
//# sourceMappingURL=image-grid.component.js.map

/***/ }),

/***/ "../../../../../src/app/services/common-image-tracker.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return CommonImageTrackerService; });
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

var CommonImageTrackerService = (function () {
    function CommonImageTrackerService() {
    }
    CommonImageTrackerService.prototype.generatePath = function (obj) {
        var countStr, finalPath = "";
        var finalPathArray = [];
        for (var count = obj.rangeStart; count < obj.rangeEnd; count++) {
            countStr = "" + count;
            if (obj.zeroPattern) {
                countStr = (count < 10) ? "0" + count : count;
            }
            finalPath = obj.primaryPath + countStr + obj.secondaryPath;
            finalPathArray.push(finalPath);
        }
        return finalPathArray;
    };
    CommonImageTrackerService.prototype.elementToggle = function (obj) {
        var el = obj.el;
        if (el.classList.contains(obj.class)) {
            el.classList.remove(obj.class);
            obj.invoker.classList.remove(obj.class);
        }
        else {
            el.classList.add(obj.class);
            obj.invoker.classList.add(obj.class);
        }
    };
    return CommonImageTrackerService;
}());
CommonImageTrackerService = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["B" /* Injectable */])(),
    __metadata("design:paramtypes", [])
], CommonImageTrackerService);

//# sourceMappingURL=common-image-tracker.service.js.map

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
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_20" /* enableProdMode */])();
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