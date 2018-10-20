webpackJsonp(["main"],{

/***/ "./src/$$_lazy_route_resource lazy recursive":
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
webpackEmptyAsyncContext.id = "./src/$$_lazy_route_resource lazy recursive";

/***/ }),

/***/ "./src/app/app.component.css":
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/app.component.html":
/***/ (function(module, exports) {

module.exports = "\r\n<router-outlet> </router-outlet> \r\n"

/***/ }),

/***/ "./src/app/app.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var AppComponent = /** @class */ (function () {
    function AppComponent() {
        this.title = 'app';
    }
    AppComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-root',
            template: __webpack_require__("./src/app/app.component.html"),
            styles: [__webpack_require__("./src/app/app.component.css")]
        })
    ], AppComponent);
    return AppComponent;
}());



/***/ }),

/***/ "./src/app/app.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__ = __webpack_require__("./node_modules/@angular/platform-browser/esm5/platform-browser.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__app_component__ = __webpack_require__("./src/app/app.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__index_index_component__ = __webpack_require__("./src/app/index/index.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__stats_stats_component__ = __webpack_require__("./src/app/stats/stats.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__compare_compare_component__ = __webpack_require__("./src/app/compare/compare.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__angular_router__ = __webpack_require__("./node_modules/@angular/router/esm5/router.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};







var appRoutes = [
    { path: 'index', component: __WEBPACK_IMPORTED_MODULE_3__index_index_component__["a" /* IndexComponent */] },
    { path: 'stats', component: __WEBPACK_IMPORTED_MODULE_4__stats_stats_component__["a" /* StatsComponent */] },
    { path: '', redirectTo: '/index', pathMatch: 'full' },
    { path: '**', redirectTo: '/index', pathMatch: 'full' }
];
var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["I" /* NgModule */])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_2__app_component__["a" /* AppComponent */],
                __WEBPACK_IMPORTED_MODULE_3__index_index_component__["a" /* IndexComponent */],
                __WEBPACK_IMPORTED_MODULE_4__stats_stats_component__["a" /* StatsComponent */],
                __WEBPACK_IMPORTED_MODULE_5__compare_compare_component__["a" /* CompareComponent */],
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__["a" /* BrowserModule */],
                __WEBPACK_IMPORTED_MODULE_6__angular_router__["a" /* RouterModule */].forRoot(appRoutes)
            ],
            providers: [],
            bootstrap: [__WEBPACK_IMPORTED_MODULE_2__app_component__["a" /* AppComponent */]]
        })
    ], AppModule);
    return AppModule;
}());



/***/ }),

/***/ "./src/app/compare/compare.component.css":
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/compare/compare.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"compare\">\r\n  <h1>ValYou Scores:</h1>\r\n  <div class=\"container\">\r\n  <div class=\"left\">\r\n    <h3>https://website.com</h3>\r\n      <div class=\"stack\" style=\"margin-top: 30px;\">\r\n        <ul>\r\n          <li>\r\n            <div>\r\n              <img src=\"assets/race.png\" alt=\"Race\" /><br />\r\n              <h3>Race:</h3>\r\n            </div>\r\n            <div>\r\n              <h1>100%</h1>\r\n              <a onclick=\"showDialog(); clickTab('raceOpen');\">Click to learn more</a>\r\n            </div>\r\n          </li>\r\n          <li>\r\n            <div>\r\n              <img src=\"assets/gender.png\" alt=\"Gender\" /><br />\r\n              <h3>Gender:</h3>\r\n            </div>\r\n            <div>\r\n              <h1>100%</h1>\r\n              <a onclick=\"showDialog(); clickTab('raceOpen');\">Click to learn more</a>\r\n            </div>\r\n          </li>\r\n          <li>\r\n            <div>\r\n              <img src=\"assets/age.png\" alt=\"Age\" /><br />\r\n              <h3>Age:</h3>\r\n            </div>\r\n            <div>\r\n              <h1>100%</h1>\r\n              <a onclick=\"showDialog(); clickTab('raceOpen');\">Click to learn more</a>\r\n            </div>\r\n          </li>\r\n        </ul>\r\n      </div>\r\n  </div>\r\n<div class=\"right\">\r\n  <h3>https://secondwebsite.com</h3>\r\n    <div class=\"stack\" style=\"margin-top: 30px;\">\r\n      <ul>\r\n        <li>\r\n          <div>\r\n            <img src=\"assets/race.png\" alt=\"Race\" /><br />\r\n            <h3>Race:</h3>\r\n          </div>\r\n          <div>\r\n            <h1>75%</h1>\r\n            <a onclick=\"showDialog2(); clickTab2('raceOpen2');\">Click to learn more</a>\r\n          </div>\r\n        </li>\r\n        <li>\r\n          <div>\r\n            <img src=\"assets/gender.png\" alt=\"Gender\" /><br />\r\n            <h3>Gender:</h3>\r\n          </div>\r\n          <div>\r\n            <h1>75%</h1>\r\n            <a onclick=\"showDialog2(); clickTab2('raceOpen2');\">Click to learn more</a>\r\n          </div>\r\n        </li>\r\n        <li>\r\n          <div>\r\n            <img src=\"assets/age.png\" alt=\"Age\" /><br />\r\n            <h3>Age:</h3>\r\n          </div>\r\n          <div>\r\n            <h1>75%</h1>\r\n            <a onclick=\"showDialog2(); clickTab2('raceOpen2');\">Click to learn more</a>\r\n          </div>\r\n        </li>\r\n      </ul>\r\n    </div>\r\n</div>\r\n</div>\r\n<button class=\"button\" onclick=\"location.href='index.html'\">Start Over</button>\r\n</div>\r\n\r\n<!--- First pop Up Box starts here (for website on left) -->\r\n<div id=\"loginwrap\" style=\"display: none;\">\r\n  <div id=\"dialog\">\r\n    <div class=\"login\">\r\n      <div class=\"tabbed\">\r\n      <div class=\"tab\">\r\n        <button class=\"tablinks\" onclick=\"openTab(event, 'race')\" id=\"raceOpen\">Race</button>\r\n        <button class=\"tablinks\" onclick=\"openTab(event, 'gender')\" id=\"genderOpen\">Gender</button>\r\n        <button class=\"tablinks\" onclick=\"openTab(event, 'age')\" id=\"ageOpen\">Age</button>\r\n        <button class=\"tablinks\" style=\"float: right;\" onclick=\"hideDialog()\">Close</button>\r\n      </div>\r\n      <div id=\"race\" class=\"tabcontent\">\r\n        <h3>Race Stats</h3>\r\n        <p>Black or African American: 25%</p>\r\n        <p>American Indian or Alaska Native: 25%</p>\r\n        <p>Asian: 25%</p>\r\n        <p>Hispanic/Latino/Spanish Origin: 25%</p>\r\n        <p>Native Hawaiin or Pacific Islander: 25%</p>\r\n        <p>Middle Eastern or North African</p>\r\n        <p>White: 25%</p>\r\n      </div>\r\n      <div id=\"gender\" class=\"tabcontent\">\r\n        <h3>Gender Stats</h3>\r\n        <p>Males: 25%</p>\r\n        <p>Females: 25%</p>\r\n      </div>\r\n      <div id=\"age\" class=\"tabcontent\">\r\n        <h3>Age Stats</h3>\r\n        <p>21 and under: 25%</p>\r\n        <p>22 to 34: 25%</p>\r\n        <p>35 to 44: 25%</p>\r\n        <p>45 to 54: 25%</p>\r\n        <p>55 to 64: 25%</p>\r\n        <p>65 and over: 25%</p>\r\n      </div>\r\n    </div>\r\n    </div>\r\n  </div>\r\n  <div id=\"black\" onclick=\"hideDialog()\"></div>\r\n  </div>\r\n  <!--- Second pop Up Box starts here (for website on right) -->\r\n  <div id=\"loginwrap2\" style=\"display: none;\">\r\n    <div id=\"dialog2\">\r\n      <div class=\"login\">\r\n        <div class=\"tabbed\">\r\n        <div class=\"tab\">\r\n          <button class=\"tablinks\" onclick=\"openTab2(event, 'race2')\" id=\"raceOpen2\">Race</button>\r\n          <button class=\"tablinks\" onclick=\"openTab2(event, 'gender2')\" id=\"genderOpen2\">Gender</button>\r\n          <button class=\"tablinks\" onclick=\"openTab2(event, 'age2')\" id=\"ageOpen2\">Age</button>\r\n          <button class=\"tablinks\" style=\"float: right;\" onclick=\"hideDialog2()\">Close</button>\r\n        </div>\r\n        <div id=\"race2\" class=\"tabcontent\">\r\n          <h3>Race Stats 2</h3>\r\n          <p>Black or African American: 25%</p>\r\n          <p>American Indian or Alaska Native: 25%</p>\r\n          <p>Asian: 25%</p>\r\n          <p>Hispanic/Latino/Spanish Origin: 25%</p>\r\n          <p>Native Hawaiin or Pacific Islander: 25%</p>\r\n          <p>Middle Eastern or North African</p>\r\n          <p>White: 25%</p>\r\n        </div>\r\n        <div id=\"gender2\" class=\"tabcontent\">\r\n          <h3>Gender Stats 2</h3>\r\n          <p>Males: 25%</p>\r\n          <p>Females: 25%</p>\r\n        </div>\r\n        <div id=\"age2\" class=\"tabcontent\">\r\n          <h3>Age Stats 2</h3>\r\n          <p>21 and under: 25%</p>\r\n          <p>22 to 34: 25%</p>\r\n          <p>35 to 44: 25%</p>\r\n          <p>45 to 54: 25%</p>\r\n          <p>55 to 64: 25%</p>\r\n          <p>65 and over: 25%</p>\r\n        </div>\r\n      </div>\r\n      </div>\r\n    </div>\r\n    <div id=\"black2\" onclick=\"hideDialog2()\"></div>\r\n    </div>\r\n<div class=\"footer\">\r\n  <h1>ValYou</h1>\r\n  <p>Made with ❤️ at HackGT 2018</p>\r\n</div>\r\n<script type=\"text/javascript\">\r\n  function showDialog() {\r\n    document.getElementById(\"loginwrap\").style.display = \"block\";\r\n    document.getElementById(\"dialog\").style.display = \"block\";\r\n    document.getElementById(\"black\").style.display = \"block\";\r\n  }\r\n  function hideDialog() {\r\n    document.getElementById(\"loginwrap\").style.display = \"none\";\r\n    document.getElementById(\"dialog\").style.display = \"block\";\r\n    document.getElementById(\"black\").style.display = \"none\";\r\n  }\r\n\r\n  function openTab(evt, action) {\r\n    var i, tabcontent, tablinks;\r\n    tabcontent = document.getElementsByClassName(\"tabcontent\");\r\n    for (i = 0; i < tabcontent.length; i++) {\r\n        tabcontent[i].style.display = \"none\";\r\n    }\r\n    tablinks = document.getElementsByClassName(\"tablinks\");\r\n    for (i = 0; i < tablinks.length; i++) {\r\n        tablinks[i].className = tablinks[i].className.replace(\" active\", \"\");\r\n    }\r\n    document.getElementById(action).style.display = \"block\";\r\n    evt.currentTarget.className += \" active\";\r\n  }\r\n\r\n  function clickTab(clicked) {\r\n    document.getElementById(clicked).click();\r\n  }\r\n\r\n  function showDialog2() {\r\n    document.getElementById(\"loginwrap2\").style.display = \"block\";\r\n    document.getElementById(\"dialog2\").style.display = \"block\";\r\n    document.getElementById(\"black2\").style.display = \"block\";\r\n  }\r\n  function hideDialog2() {\r\n    document.getElementById(\"loginwrap2\").style.display = \"none\";\r\n    document.getElementById(\"dialog2\").style.display = \"block\";\r\n    document.getElementById(\"black2\").style.display = \"none\";\r\n  }\r\n\r\n  function openTab2(evt, action) {\r\n    var i, tabcontent, tablinks;\r\n    tabcontent = document.getElementsByClassName(\"tabcontent\");\r\n    for (i = 0; i < tabcontent.length; i++) {\r\n        tabcontent[i].style.display = \"none\";\r\n    }\r\n    tablinks = document.getElementsByClassName(\"tablinks\");\r\n    for (i = 0; i < tablinks.length; i++) {\r\n        tablinks[i].className = tablinks[i].className.replace(\" active\", \"\");\r\n    }\r\n    document.getElementById(action).style.display = \"block\";\r\n    evt.currentTarget.className += \" active\";\r\n  }\r\n\r\n  function clickTab2(clicked) {\r\n    document.getElementById(clicked).click();\r\n  }\r\n</script>\r\n"

/***/ }),

/***/ "./src/app/compare/compare.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return CompareComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var CompareComponent = /** @class */ (function () {
    function CompareComponent() {
    }
    CompareComponent.prototype.ngOnInit = function () {
    };
    CompareComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-compare',
            template: __webpack_require__("./src/app/compare/compare.component.html"),
            styles: [__webpack_require__("./src/app/compare/compare.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], CompareComponent);
    return CompareComponent;
}());



/***/ }),

/***/ "./src/app/index/index.component.css":
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/index/index.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"gradient\">\r\n  <img src=\"assets/logo.png\" style=\"width: 120px;\" alt=\"Logo\" style=\"margin-bottom: -10px;\"/>\r\n  <h1>ValYou</h1>\r\n  <p>Providing insight on your website's diversity representation.</p>\r\n  <form>\r\n    <input type=\"text\" required placeholder=\"Enter a company URL (https://example.com)\" maxlength=\"1000\"/><br />\r\n    <button class=\"button\" type=\"submit\">Calculate Score</button>\r\n  </form>\r\n  <div style=\"margin-top: 60px;\">\r\n    <img src=\"assets/race.png\" alt=\"Race\" />\r\n    <img src=\"assets/gender.png\" alt=\"Gender\" />\r\n    <img src=\"assets/age.png\" alt=\"Age\" />\r\n  </div>\r\n  <h4>Understanding representation matters.<br />We make it easy.</h4>\r\n</div>\r\n<div class=\"landing\">\r\n  <h1>What We Do</h1>\r\n  <div class=\"foldcontainer\">\r\n    <div class=\"left\">\r\n      Using a web crawler and the <a href=\"https://clarifai.com/\">Clarifai API</a>, we analyze a website’s images to determine the demographics (race, age, gender) of people featured on a website. Using this information, we calculate scores that assess the website’s overall diversity.\r\n      <br /><br />\r\n      These scores can be valuable in crafting a web presence that is more welcoming to all.\r\n    </div>\r\n    <div class=\"right\">\r\n      <img src=\"assets/people.png\" alt=\"Analysis\" />\r\n    </div>\r\n  </div>\r\n</div>\r\n<div class=\"footer\">\r\n  <h1>ValYou</h1>\r\n  <p>Made with ❤️ at HackGT 2018</p>\r\n</div>\r\n"

/***/ }),

/***/ "./src/app/index/index.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return IndexComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var IndexComponent = /** @class */ (function () {
    function IndexComponent() {
    }
    IndexComponent.prototype.ngOnInit = function () {
    };
    IndexComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-index',
            template: __webpack_require__("./src/app/index/index.component.html"),
            styles: [__webpack_require__("./src/app/index/index.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], IndexComponent);
    return IndexComponent;
}());



/***/ }),

/***/ "./src/app/stats/stats.component.css":
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/stats/stats.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"return\">\r\n  <h3>https://website.com</h3>\r\n  <h1>ValYou Scores:</h1>\r\n  <div class=\"cards\" style=\"margin-top: 30px;\">\r\n    <ul>\r\n      <li>\r\n        <img src=\"assets/race.png\" alt=\"Race\" /><br />\r\n        <h3>Race:</h3>\r\n        <h1>100%</h1>\r\n        <a onclick=\"showDialog(); clickTab('raceOpen');\">Click to learn more</a>\r\n      </li>\r\n      <li>\r\n        <img src=\"assets/gender.png\" alt=\"Gender\" /><br />\r\n        <h3>Gender:</h3>\r\n        <h1>100%</h1>\r\n        <a onclick=\"showDialog(); clickTab('genderOpen');\">Click to learn more</a>\r\n      </li>\r\n      <li>\r\n        <img src=\"assets/age.png\" alt=\"Age\" /><br />\r\n        <h3>Age:</h3>\r\n        <h1>100%</h1>\r\n        <a onclick=\"showDialog(); clickTab('ageOpen');\">Click to learn more</a>\r\n      </li>\r\n    </ul>\r\n  </div>\r\n  <form>\r\n    <input type=\"text\" required placeholder=\"Enter another company URL (https://example.com)\" maxlength=\"1000\"/><br />\r\n    <button class=\"button\" type=\"submit\">Compare</button>\r\n  </form>\r\n</div>\r\n<!--- Pop Up Box starts here  -->\r\n<div id=\"loginwrap\" style=\"display: none;\">\r\n  <div id=\"dialog\">\r\n    <div class=\"login\">\r\n      <div class=\"tabbed\">\r\n      <div class=\"tab\">\r\n        <button class=\"tablinks\" onclick=\"openTab(event, 'race')\" id=\"raceOpen\">Race</button>\r\n        <button class=\"tablinks\" onclick=\"openTab(event, 'gender')\" id=\"genderOpen\">Gender</button>\r\n        <button class=\"tablinks\" onclick=\"openTab(event, 'age')\" id=\"ageOpen\">Age</button>\r\n        <button class=\"tablinks\" style=\"float: right;\" onclick=\"hideDialog()\">Close</button>\r\n      </div>\r\n      <div id=\"race\" class=\"tabcontent\">\r\n        <h3>Race Stats</h3>\r\n        <p>Black or African American: 25%</p>\r\n        <p>American Indian or Alaska Native: 25%</p>\r\n        <p>Asian: 25%</p>\r\n        <p>Hispanic/Latino/Spanish Origin: 25%</p>\r\n        <p>Native Hawaiin or Pacific Islander: 25%</p>\r\n        <p>Middle Eastern or North African</p>\r\n        <p>White: 25%</p>\r\n      </div>\r\n      <div id=\"gender\" class=\"tabcontent\">\r\n        <h3>Gender Stats</h3>\r\n        <p>Males: 25%</p>\r\n        <p>Females: 25%</p>\r\n      </div>\r\n      <div id=\"age\" class=\"tabcontent\">\r\n        <h3>Age Stats</h3>\r\n        <p>21 and under: 25%</p>\r\n        <p>22 to 34: 25%</p>\r\n        <p>35 to 44: 25%</p>\r\n        <p>45 to 54: 25%</p>\r\n        <p>55 to 64: 25%</p>\r\n        <p>65 and over: 25%</p>\r\n      </div>\r\n    </div>\r\n    </div>\r\n  </div>\r\n  <div id=\"black\" onclick=\"hideDialog()\"></div>\r\n  </div>\r\n<div class=\"footer\">\r\n  <h1>ValYou</h1>\r\n  <p>Made with ❤️ at HackGT 2018</p>\r\n</div>\r\n<script type=\"text/javascript\">\r\n  function showDialog() {\r\n    document.getElementById(\"loginwrap\").style.display = \"block\";\r\n    document.getElementById(\"dialog\").style.display = \"block\";\r\n    document.getElementById(\"black\").style.display = \"block\";\r\n  }\r\n  function hideDialog() {\r\n    document.getElementById(\"loginwrap\").style.display = \"none\";\r\n    document.getElementById(\"dialog\").style.display = \"block\";\r\n    document.getElementById(\"black\").style.display = \"none\";\r\n  }\r\n\r\n  function openTab(evt, action) {\r\n    var i, tabcontent, tablinks;\r\n    tabcontent = document.getElementsByClassName(\"tabcontent\");\r\n    for (i = 0; i < tabcontent.length; i++) {\r\n        tabcontent[i].style.display = \"none\";\r\n    }\r\n    tablinks = document.getElementsByClassName(\"tablinks\");\r\n    for (i = 0; i < tablinks.length; i++) {\r\n        tablinks[i].className = tablinks[i].className.replace(\" active\", \"\");\r\n    }\r\n    document.getElementById(action).style.display = \"block\";\r\n    evt.currentTarget.className += \" active\";\r\n  }\r\n\r\n  function clickTab(clicked) {\r\n    document.getElementById(clicked).click();\r\n  }\r\n</script>\r\n"

/***/ }),

/***/ "./src/app/stats/stats.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return StatsComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var StatsComponent = /** @class */ (function () {
    function StatsComponent() {
    }
    StatsComponent.prototype.ngOnInit = function () {
    };
    StatsComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-stats',
            template: __webpack_require__("./src/app/stats/stats.component.html"),
            styles: [__webpack_require__("./src/app/stats/stats.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], StatsComponent);
    return StatsComponent;
}());



/***/ }),

/***/ "./src/environments/environment.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return environment; });
// The file contents for the current environment will overwrite these during build.
// The build system defaults to the dev environment which uses `environment.ts`, but if you do
// `ng build --env=prod` then `environment.prod.ts` will be used instead.
// The list of which env maps to which file can be found in `.angular-cli.json`.
var environment = {
    production: false
};


/***/ }),

/***/ "./src/main.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_platform_browser_dynamic__ = __webpack_require__("./node_modules/@angular/platform-browser-dynamic/esm5/platform-browser-dynamic.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__app_app_module__ = __webpack_require__("./src/app/app.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__environments_environment__ = __webpack_require__("./src/environments/environment.ts");




if (__WEBPACK_IMPORTED_MODULE_3__environments_environment__["a" /* environment */].production) {
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_12" /* enableProdMode */])();
}
Object(__WEBPACK_IMPORTED_MODULE_1__angular_platform_browser_dynamic__["a" /* platformBrowserDynamic */])().bootstrapModule(__WEBPACK_IMPORTED_MODULE_2__app_app_module__["a" /* AppModule */])
    .catch(function (err) { return console.log(err); });


/***/ }),

/***/ 0:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__("./src/main.ts");


/***/ })

},[0]);
//# sourceMappingURL=main.bundle.js.map