webpackJsonp([0],{

/***/ 100:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return HomePage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(20);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__providers_api_api__ = __webpack_require__(196);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_forms__ = __webpack_require__(15);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var HomePage = (function () {
    function HomePage(navCtrl, platform, apiProvider) {
        var _this = this;
        this.navCtrl = navCtrl;
        this.platform = platform;
        this.apiProvider = apiProvider;
        platform.ready().then(function () {
            _this.countries = apiProvider.get({ table: 'countries' }, function (data) {
                console.log(data.countries);
            });
        });
        this.langForm = new __WEBPACK_IMPORTED_MODULE_3__angular_forms__["b" /* FormGroup */]({
            "langs": new __WEBPACK_IMPORTED_MODULE_3__angular_forms__["a" /* FormControl */]({ value: 'rust', disabled: false })
        });
    }
    HomePage.prototype.clickCountry = function (country) {
        this.country = country;
        //TODO: get only channels of country again
        this.channels = this.apiProvider.get({ table: 'channels', filter: 'country,eq,' + country }, function (data) {
            console.log(data.channels);
        });
    };
    HomePage.prototype.doSubmit = function (event) {
        console.log('Submitting form', this.langForm.value);
        event.preventDefault();
    };
    return HomePage;
}());
HomePage = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
        selector: 'page-home',template:/*ion-inline-start:"/Users/dataclub/public_html/mancloudTVBox/src/pages/home/home.html"*/'<ion-header>\n    <ion-toolbar no-border-top class="segment segment-ios-danger ">\n      <ion-segment [(ngModel)]="country">\n          <ion-segment-button value="{{country.name}}" *ngFor="let country of (countries | async)?.countries" (click)="clickCountry(country.name)">\n            <h1 class="flag-icon flag-icon-{{ country.name }}"> </h1>\n          </ion-segment-button>\n\n      </ion-segment>\n\n      <ion-buttons no-border-top end>\n        <button ion-button icon-only>\n          <ion-icon name="more"></ion-icon>\n        </button>\n      </ion-buttons> \n    </ion-toolbar>\n</ion-header>\n\n<!--ion-content class="tutorial-page">\n  <img src="assets/img/ica-slidebox-img-4.png" class="slide-image"/>\n      <h2 class="slide-title">Ready to Play?</h2>\n      <button ion-button large clear icon-end color="primary">\n        Continue\n        <ion-icon name="arrow-forward"></ion-icon>\n      </button>\n   \n</ion-content-->\n\n<ion-content>\n  <form (submit)="doSubmit($event)" [formGroup]="langForm">\n      <!--ion-list radio-group formControlName="langs">\n        <ion-item>\n          <ion-label>Go</ion-label>\n          <ion-radio value="golang" checked="true"></ion-radio>\n        </ion-item>\n        <ion-item>\n          <ion-label>Rust</ion-label>\n          <ion-radio value="rust"></ion-radio>\n        </ion-item>\n        <ion-item>\n          <ion-label>Python</ion-label>\n          <ion-radio value="python"></ion-radio>\n        </ion-item>\n        <ion-item>\n          <ion-label>Ruby</ion-label>\n          <ion-radio value="ruby"></ion-radio>\n        </ion-item>\n        <ion-item>\n          <ion-label>Clojure</ion-label>\n          <ion-radio value="clojure"></ion-radio>\n        </ion-item>\n        <ion-item>\n          <ion-label>Java</ion-label>\n          <ion-radio value="java"></ion-radio>\n        </ion-item>\n        <ion-item>\n          <ion-label>PHP</ion-label>\n          <ion-radio value="php"></ion-radio>\n        </ion-item>\n        <ion-item>\n          <ion-label>.NET</ion-label>\n          <ion-radio value="dotnet"></ion-radio>\n        </ion-item>\n        <ion-item>\n          <ion-label>C++</ion-label>\n          <ion-radio value="cplusplus"></ion-radio>\n        </ion-item>\n        <ion-item>\n          <ion-label>Scala</ion-label>\n          <ion-radio value="scala"></ion-radio>\n        </ion-item>\n        <ion-item>\n          <ion-label>Haskell</ion-label>\n          <ion-radio value="haskell"></ion-radio>\n        </ion-item>\n        <ion-item>\n          <ion-label>Erlang</ion-label>\n          <ion-radio value="erlang"></ion-radio>\n        </ion-item>\n    </ion-list-->\n\n       <ion-list radio-group formControlName="langs">\n         \n          <ion-item *ngFor="let channel of (channels | async)?.channels">\n            <ion-label>{{ channel.name }}</ion-label>\n            <ion-radio value="{{ channel.name }}"></ion-radio>\n            <ion-thumbnail item-start>\n              <img src="assets/img/thumbnail-puppy-1.jpg">\n            </ion-thumbnail>\n            <h2>{{ channel.name }}</h2>\n        </ion-item>\n          \n      </ion-list>\n  </form>\n</ion-content>'/*ion-inline-end:"/Users/dataclub/public_html/mancloudTVBox/src/pages/home/home.html"*/
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* Platform */], __WEBPACK_IMPORTED_MODULE_2__providers_api_api__["a" /* ApiProvider */]])
], HomePage);

//# sourceMappingURL=home.js.map

/***/ }),

/***/ 108:
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	return new Promise(function(resolve, reject) { reject(new Error("Cannot find module '" + req + "'.")); });
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = 108;

/***/ }),

/***/ 150:
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	return new Promise(function(resolve, reject) { reject(new Error("Cannot find module '" + req + "'.")); });
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = 150;

/***/ }),

/***/ 195:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SlidePage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(20);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__home_home__ = __webpack_require__(100);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var SlidePage = (function () {
    function SlidePage(nav) {
        this.nav = nav;
    }
    SlidePage.prototype.pushPage = function () {
        // Let's navigate from HomePage after first time
        this.nav.push(__WEBPACK_IMPORTED_MODULE_2__home_home__["a" /* HomePage */]);
    };
    return SlidePage;
}());
SlidePage = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
        selector: 'page-slide',template:/*ion-inline-start:"/Users/dataclub/public_html/mancloudTVBox/src/pages/slide/slide.html"*/'<ion-content class="tutorial-page">\n  <ion-slides pager>\n    <ion-slide *ngFor="let slide of slides">\n      <ion-toolbar>\n        <ion-buttons end>\n          <button ion-button color="primary">Skip</button>\n        </ion-buttons>\n      </ion-toolbar>\n      <img [src]="slide.image" class="slide-image"/>\n      <h2 class="slide-title" [innerHTML]="slide.title"></h2>\n      <p [innerHTML]="slide.description"></p>\n    </ion-slide>\n    <ion-slide>\n      <ion-toolbar>\n      </ion-toolbar>\n      <img src="assets/img/ica-slidebox-img-4.png" class="slide-image"/>\n      <h2 class="slide-title">Ready to Play?</h2>\n      <button ion-button large clear icon-end color="primary">\n        Continue\n        <ion-icon name="arrow-forward"></ion-icon>\n      </button>\n    </ion-slide>\n    <ion-slide>\n      <ion-toolbar>\n      </ion-toolbar>\n      <img src="assets/img/ica-slidebox-img-4.png" class="slide-image"/>\n      <h2 class="slide-title">Ready to Play?</h2>\n      <button ion-button large clear icon-end color="primary" (click)="pushPage()">\n        Continue\n        <ion-icon name="arrow-forward"></ion-icon>\n      </button>\n    </ion-slide>\n  </ion-slides>\n</ion-content>\n'/*ion-inline-end:"/Users/dataclub/public_html/mancloudTVBox/src/pages/slide/slide.html"*/
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* NavController */]])
], SlidePage);

//# sourceMappingURL=slide.js.map

/***/ }),

/***/ 196:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ApiProvider; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_http__ = __webpack_require__(197);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_map__ = __webpack_require__(269);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_map___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_map__);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



/*
  Generated class for the ApiProvider provider.

  See https://angular.io/docs/ts/latest/guide/dependency-injection.html
  for more info on providers and Angular DI.
*/
var ApiProvider = (function () {
    function ApiProvider(http) {
        this.http = http;
        this.uri = 'http://localhost/mancloudTVBoxDB/api.php/';
        this.transform = true;
        this.countries = [];
    }
    ApiProvider.prototype.get = function (params, callback) {
        var returnValue = null;
        switch (params.table) {
            case 'countries':
                returnValue = this.getCountries(callback);
                break;
            case 'channels':
                returnValue = this.getChannels(params.filter, callback);
                break;
            default:
                break;
        }
        return returnValue;
    };
    ApiProvider.prototype.getCountries = function (callback) {
        var _this = this;
        var withoutCallBack = this.http.get(this.uri + 'countries' + this.getTransform())
            .map(function (res) { return res.json(); });
        withoutCallBack.subscribe(function (data) {
            _this.countries = data.countries;
            if (typeof (callback) != 'undefined') {
                callback(data);
            }
        });
        return withoutCallBack;
    };
    ApiProvider.prototype.getChannels = function (filter, callback) {
        var _this = this;
        var uri = this.uri + 'channels' + this.getTransform();
        if (typeof (filter) != 'undefined') {
            uri += "&filter[]=" + filter;
        }
        var withoutCallBack = this.http.get(uri)
            .map(function (res) { return res.json(); });
        withoutCallBack.subscribe(function (data) {
            _this.countries = data.countries;
            if (typeof (callback) != 'undefined') {
                callback(data);
            }
        });
        return withoutCallBack;
    };
    ApiProvider.prototype.getTransform = function () {
        return '?transform=1';
    };
    return ApiProvider;
}());
ApiProvider = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["B" /* Injectable */])(),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__angular_http__["a" /* Http */]])
], ApiProvider);

//# sourceMappingURL=api.js.map

/***/ }),

/***/ 198:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser_dynamic__ = __webpack_require__(199);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__app_module__ = __webpack_require__(217);


Object(__WEBPACK_IMPORTED_MODULE_0__angular_platform_browser_dynamic__["a" /* platformBrowserDynamic */])().bootstrapModule(__WEBPACK_IMPORTED_MODULE_1__app_module__["a" /* AppModule */]);
//# sourceMappingURL=main.js.map

/***/ }),

/***/ 217:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__ = __webpack_require__(25);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_ionic_angular__ = __webpack_require__(20);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__ionic_native_splash_screen__ = __webpack_require__(190);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__ionic_native_status_bar__ = __webpack_require__(192);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__ionic_storage__ = __webpack_require__(193);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__ionic_native_device__ = __webpack_require__(194);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__app_component__ = __webpack_require__(268);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__pages_slide_slide__ = __webpack_require__(195);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__pages_home_home__ = __webpack_require__(100);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__pages_basic_basic_module__ = __webpack_require__(270);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__providers_api_api__ = __webpack_require__(196);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__angular_http__ = __webpack_require__(197);
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
            __WEBPACK_IMPORTED_MODULE_7__app_component__["a" /* mancloudTVBox */],
            __WEBPACK_IMPORTED_MODULE_8__pages_slide_slide__["a" /* SlidePage */],
            __WEBPACK_IMPORTED_MODULE_9__pages_home_home__["a" /* HomePage */],
        ],
        imports: [
            __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__["a" /* BrowserModule */],
            __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["c" /* IonicModule */].forRoot(__WEBPACK_IMPORTED_MODULE_7__app_component__["a" /* mancloudTVBox */]),
            __WEBPACK_IMPORTED_MODULE_5__ionic_storage__["a" /* IonicStorageModule */].forRoot(),
            __WEBPACK_IMPORTED_MODULE_12__angular_http__["b" /* HttpModule */],
            __WEBPACK_IMPORTED_MODULE_10__pages_basic_basic_module__["a" /* BasicModule */]
        ],
        bootstrap: [__WEBPACK_IMPORTED_MODULE_2_ionic_angular__["a" /* IonicApp */]],
        entryComponents: [
            __WEBPACK_IMPORTED_MODULE_7__app_component__["a" /* mancloudTVBox */],
            __WEBPACK_IMPORTED_MODULE_8__pages_slide_slide__["a" /* SlidePage */],
            __WEBPACK_IMPORTED_MODULE_9__pages_home_home__["a" /* HomePage */],
        ],
        providers: [
            __WEBPACK_IMPORTED_MODULE_4__ionic_native_status_bar__["a" /* StatusBar */],
            __WEBPACK_IMPORTED_MODULE_3__ionic_native_splash_screen__["a" /* SplashScreen */],
            __WEBPACK_IMPORTED_MODULE_6__ionic_native_device__["a" /* Device */],
            __WEBPACK_IMPORTED_MODULE_11__providers_api_api__["a" /* ApiProvider */],
            { provide: __WEBPACK_IMPORTED_MODULE_1__angular_core__["v" /* ErrorHandler */], useClass: __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["b" /* IonicErrorHandler */] },
        ]
    })
], AppModule);

//# sourceMappingURL=app.module.js.map

/***/ }),

/***/ 268:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return mancloudTVBox; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(20);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__ionic_native_status_bar__ = __webpack_require__(192);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__ionic_native_splash_screen__ = __webpack_require__(190);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__ionic_storage__ = __webpack_require__(193);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__ionic_native_device__ = __webpack_require__(194);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__pages_slide_slide__ = __webpack_require__(195);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__pages_home_home__ = __webpack_require__(100);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};









var mancloudTVBox = (function () {
    function mancloudTVBox(platform, statusBar, splashScreen, storage, device) {
        var _this = this;
        platform.ready().then(function () {
            // Okay, so the platform is ready and our plugins are available.
            // Here you can do any higher level native things you might need.
            statusBar.styleDefault();
            splashScreen.hide();
            /*
      alert('Device UUID is: ' + device.uuid);
      alert('Device plattform is: ' + device.platform);
      alert('Device cordova is ' + device.cordova);
      alert('Device cordova is ' + device.model);
      alert('Device cordova is ' + device.version);
      alert('Device cordova is ' + device.manufacturer);
      alert('Device cordova is ' + device.isVirtual);
      alert('Device cordova is ' + device.serial);
      */
            var firstLoadVar = 'firstLoad';
            storage.get(firstLoadVar).then(function (firstLoad) {
                if (firstLoad == null) {
                    _this.nav.setRoot(__WEBPACK_IMPORTED_MODULE_6__pages_slide_slide__["a" /* SlidePage */]);
                    storage.set(firstLoadVar, true);
                }
                else {
                    _this.nav.setRoot(__WEBPACK_IMPORTED_MODULE_7__pages_home_home__["a" /* HomePage */]);
                }
            });
        });
    }
    return mancloudTVBox;
}());
__decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_13" /* ViewChild */])('content'),
    __metadata("design:type", __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* NavController */])
], mancloudTVBox.prototype, "nav", void 0);
mancloudTVBox = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({template:/*ion-inline-start:"/Users/dataclub/public_html/mancloudTVBox/src/app/app.html"*/'<ion-menu [content]="content" id="menu1">\n\n  <ion-header>\n    <ion-toolbar color="secondary">\n      <ion-title>Menu 1</ion-title>\n    </ion-toolbar>\n  </ion-header>\n\n  <ion-content>\n    <ion-list>\n      <button ion-item menuClose="menu1" detail-none>\n        Close Menu 1\n      </button>\n    </ion-list>\n  </ion-content>\n\n</ion-menu>\n\n\n<ion-menu [content]="content" id="menu2">\n\n  <ion-header>\n    <ion-toolbar color="danger">\n      <ion-title>Menu 2</ion-title>\n    </ion-toolbar>\n  </ion-header>\n\n  <ion-content>\n    <ion-list>\n      <button ion-item menuClose="menu2" detail-none>\n        Close Menu 2\n      </button>\n    </ion-list>\n  </ion-content>\n\n</ion-menu>\n<ion-nav #content [root]="rootPage" swipeBackEnabled="false"></ion-nav>\n'/*ion-inline-end:"/Users/dataclub/public_html/mancloudTVBox/src/app/app.html"*/
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* Platform */],
        __WEBPACK_IMPORTED_MODULE_2__ionic_native_status_bar__["a" /* StatusBar */],
        __WEBPACK_IMPORTED_MODULE_3__ionic_native_splash_screen__["a" /* SplashScreen */],
        __WEBPACK_IMPORTED_MODULE_4__ionic_storage__["b" /* Storage */],
        __WEBPACK_IMPORTED_MODULE_5__ionic_native_device__["a" /* Device */]])
], mancloudTVBox);

//# sourceMappingURL=app.component.js.map

/***/ }),

/***/ 270:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return BasicModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(20);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__basic__ = __webpack_require__(271);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var BasicModule = (function () {
    function BasicModule() {
    }
    return BasicModule;
}());
BasicModule = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["L" /* NgModule */])({
        declarations: [
            __WEBPACK_IMPORTED_MODULE_2__basic__["a" /* BasicPage */],
        ],
        imports: [
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["d" /* IonicPageModule */].forChild(__WEBPACK_IMPORTED_MODULE_2__basic__["a" /* BasicPage */]),
        ],
        entryComponents: [
            __WEBPACK_IMPORTED_MODULE_2__basic__["a" /* BasicPage */],
        ]
    })
], BasicModule);

//# sourceMappingURL=basic.module.js.map

/***/ }),

/***/ 271:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return BasicPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(20);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var BasicPage = (function () {
    function BasicPage(menu) {
        this.menu = menu;
        this.menu1Active();
    }
    BasicPage.prototype.menu1Active = function () {
        this.activeMenu = 'menu1';
        this.menu.enable(true, 'menu1');
        this.menu.enable(false, 'menu2');
    };
    BasicPage.prototype.menu2Active = function () {
        this.activeMenu = 'menu2';
        this.menu.enable(false, 'menu1');
        this.menu.enable(true, 'menu2');
    };
    return BasicPage;
}());
BasicPage = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({template:/*ion-inline-start:"/Users/dataclub/public_html/mancloudTVBox/src/pages/basic/basic.html"*/'<ion-header>\n\n  <ion-navbar>\n    <button ion-button [menuToggle]="activeMenu">\n      <ion-icon name="menu"></ion-icon>\n    </button>\n    <ion-title>\n      Menu\n    </ion-title>\n  </ion-navbar>\n\n</ion-header>\n\n\n<ion-content padding>\n\n  <h4>Active Menu: <b color="primary">{{ (activeMenu == \'menu1\') ? \'Menu 1\' : \'Menu 2\' }}</b></h4>\n\n  <p>This page has two menus with different id\'s, but only one is active at a time.</p>\n\n  <button ion-button block color="secondary" (click)="menu1Active()">Make Menu 1 Active</button>\n\n  <button ion-button block color="danger" (click)="menu2Active()">Make Menu 2 Active</button>\n\n  <button ion-button block [menuToggle]="activeMenu">Toggle Menu</button>\n\n</ion-content>'/*ion-inline-end:"/Users/dataclub/public_html/mancloudTVBox/src/pages/basic/basic.html"*/
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["e" /* MenuController */]])
], BasicPage);

//# sourceMappingURL=basic.js.map

/***/ })

},[198]);
//# sourceMappingURL=main.js.map