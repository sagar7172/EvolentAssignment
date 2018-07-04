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
		var e = new Error('Cannot find module "' + req + '".');
		e.code = 'MODULE_NOT_FOUND';
		throw e;
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = "./src/$$_lazy_route_resource lazy recursive";

/***/ }),

/***/ "./src/app/app.component.css":
/*!***********************************!*\
  !*** ./src/app/app.component.css ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/app.component.html":
/*!************************************!*\
  !*** ./src/app/app.component.html ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<router-outlet></router-outlet>"

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
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
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
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-root',
            template: __webpack_require__(/*! ./app.component.html */ "./src/app/app.component.html"),
            styles: [__webpack_require__(/*! ./app.component.css */ "./src/app/app.component.css")],
        })
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
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/fesm5/platform-browser.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _app_routing__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./app.routing */ "./src/app/app.routing.ts");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./app.component */ "./src/app/app.component.ts");
/* harmony import */ var _component_home_home_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./component/home/home.component */ "./src/app/component/home/home.component.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};






var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["NgModule"])({
            declarations: [
                _app_component__WEBPACK_IMPORTED_MODULE_4__["AppComponent"],
                _component_home_home_component__WEBPACK_IMPORTED_MODULE_5__["HomeComponent"],
            ],
            imports: [
                _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"],
                _app_routing__WEBPACK_IMPORTED_MODULE_3__["routing"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormsModule"]
            ],
            providers: [],
            bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_4__["AppComponent"]]
        })
    ], AppModule);
    return AppModule;
}());



/***/ }),

/***/ "./src/app/app.routing.ts":
/*!********************************!*\
  !*** ./src/app/app.routing.ts ***!
  \********************************/
/*! exports provided: routing */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "routing", function() { return routing; });
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _component_home_home_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./component/home/home.component */ "./src/app/component/home/home.component.ts");


var appRoutes = [
    {
        path: '',
        component: _component_home_home_component__WEBPACK_IMPORTED_MODULE_1__["HomeComponent"]
    },
    {
        path: 'home',
        component: _component_home_home_component__WEBPACK_IMPORTED_MODULE_1__["HomeComponent"]
    }
];
var routing = _angular_router__WEBPACK_IMPORTED_MODULE_0__["RouterModule"].forRoot(appRoutes, { useHash: true });


/***/ }),

/***/ "./src/app/component/home/home.component.css":
/*!***************************************************!*\
  !*** ./src/app/component/home/home.component.css ***!
  \***************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "/*Header start*/\r\nheader {\r\n    background: #FFF;\r\n    \r\n    width: 100%;\r\n    /*padding: 3px 10px;*/\r\n    /*border-bottom: 2px solid #009ed3;*/\r\n    box-shadow: 1px 2px 1px #949393;\r\n    display: inline-block;\r\n    z-index: 888888;\r\n}\r\n.padd3px {\r\n    padding: 3px;\r\n}\r\n.logo {\r\n    width: 70px;\r\n}\r\n.chip {\r\n    display: inline-block;\r\n    padding: 0 25px;\r\n    height: 35px;\r\n    font-size: 16px;\r\n    line-height: 35px;\r\n    border-radius: 25px;\r\n    /*background-color: rgb(0, 158, 211);*/\r\n    /*color: #FFF;*/\r\n        margin-top: 7px;\r\n    margin-right: 7px;\r\n    color:#FFF;\r\n}\r\n.chip img {\r\n        float: left;\r\n        margin: 3px 10px 0 -17px;\r\n        height: 29px;\r\n        width: 26px;\r\n        border-radius: 50%;\r\n    }\r\n.hfilter{\r\n        border: 1px solid #CCC;\r\n    padding: 15px;\r\n    margin: 0 6px;\r\n    border-radius: 7px;\r\n    margin-top: 10px;\r\n    background: #50a0d30f;\r\n    }\r\n/*Header End*/\r\n/*footer start*/\r\nfooter {\r\n    position: absolute;\r\n    bottom: 0;\r\n    width: 100%;\r\n    padding: 10px;\r\n    border-top: 1px solid #CCC;\r\n}\r\n.footer_b {\r\n    position: fixed;\r\n    bottom: 0;\r\n    z-index: 999999;\r\n    width: 100%;\r\n}\r\n.main-footer {\r\n    background: #fff;\r\n    padding: 3px 10px;\r\n    color: #8C8585;\r\n    border-top: 1px solid #CCC;\r\n    font-size: 11px;\r\n}\r\n.pull-right {\r\n    float: right !important;\r\n}\r\n.copyright {\r\n    float: left;\r\n    width: 68%;\r\n    margin: 0 0;\r\n}\r\n/*.copyright span {\r\n        color: #009ed3;\r\n    }*/\r\n.poweredby {\r\n    margin-top: 0px;\r\n    margin-right: 0px;\r\n}\r\n.mars img {\r\n    width: 28px;\r\n    height: 27px;\r\n}\r\n/*footer end*/\r\n/*** Table Styles **/\r\ntd {\r\n  padding:5px;\r\n  text-align:left;\r\n  vertical-align:middle;\r\n  font-weight:300;\r\n  font-size:20px;\r\n}\r\n#gradient-style\r\n{\r\n\twidth: 100%;\r\n\ttext-align: left;\r\n\tborder-collapse: collapse;\r\n    background:#FFF;\r\n}\r\n#gradient-style tr\r\n{\r\n\tborder: 1px rgba(0, 0, 0, 0.1) solid;\r\n}\r\nthead{\r\n       background: #ba2423;\r\n    color: #FFF;\r\n}\r\n#gradient-style th\r\n{\r\n\tfont-size: 15px;\r\n\tpadding: 12px;\r\n    font-weight: 600;\r\n    white-space: nowrap;\r\n}\r\n#gradient-style td\r\n{\r\n\tpadding: 10px; \r\n}\r\n#gradient-style tr:hover td\r\n{\r\n\tbackground: rgba(189, 189, 189, 0.32);\r\n\tcursor: pointer;\r\n}\r\n/*** Table Styles end **/\r\n.main\r\n{\r\n    padding: 15px;\r\n}\r\n.btn-circle {\n  width: 30px;\n  height: 30px;\n  text-align: center;\n  padding: 6px 0;\n  font-size: 12px;\n  line-height: 1.428571429;\n  border-radius: 15px;\n}\r\n.btn-circle.btn-lg {\n      width: 40px;\r\n    height: 40px;\r\n    padding: 8px 10px;\n  font-size: 18px;\n  line-height: 1.33;\n  border-radius: 50%;\n  margin-right:10px;\n}\r\n.red{\r\n    color:red;\r\n}"

/***/ }),

/***/ "./src/app/component/home/home.component.html":
/*!****************************************************!*\
  !*** ./src/app/component/home/home.component.html ***!
  \****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div>\r\n    <header style=\"background:#d20404;\" class=\"\">\r\n        <img class=\"logo\" src=\"assets/images/logo.png\" />\r\n        <div id=\"divMenu\" style=\"display: inline-block; margin-left:10px; cursor:pointer\">\r\n            <a><img src=\"assets/images/menu.png\" height=\"23\" style=\"margin-top: 2px;\" /></a>\r\n        </div>\r\n        <div class=\"pull-right padd6px\">\r\n            <div class=\"chip\" style=\"background:#b92222 !important\" data-toggle=\"dropdown\">\r\n                <img src=\"assets/images/user.png\" width=\"96\" height=\"50\" />\r\n                Admin\r\n            </div>\r\n        </div>\r\n    </header>\r\n\r\n    <div class=\"main\">\r\n        <div class=\"panel panel-danger\">\r\n            <div class=\"panel-body\">\r\n\r\n                <div class=\"row\">\r\n                    <div class=\"col-md-2 form-group\">\r\n                        <label>First Name<span class=\"red\">*</span></label>\r\n                        <input type=\"text\" class=\"form-control\" id=\"fname\" placeholder=\"Enter First Name\" [(ngModel)] =\"fname\" required>\r\n                    </div>\r\n                    <div class=\"col-md-2 form-group\">\r\n                        <label>Last Name<span class=\"red\">*</span></label>\r\n                        <input type=\"text\" class=\"form-control\" id=\"lname\" placeholder=\"Enter First Last\" [(ngModel)] =\"lname\" required>\r\n                    </div>\r\n                    <div class=\"col-md-2 form-group\">\r\n                        <label>Email<span class=\"red\">*</span></label>\r\n                        <input type=\"email\" class=\"form-control\" id=\"email\" placeholder=\"Enter email\" [(ngModel)] =\"email\" required>\r\n                    </div>\r\n                    <div class=\"col-md-2 form-group\">\r\n                        <label>Phone Number<span class=\"red\">*</span></label>\r\n                        <input type=\"number\" class=\"form-control\" id=\"phone\" placeholder=\"Enter Phone Number\" [(ngModel)] =\"phone\" required>\r\n                    </div>\r\n                    <div class=\"col-md-2 form-group\">\r\n                        <label>Status</label>\r\n                        <label class=\"checkbox-inline\" style=\"display: block;\"><input type=\"checkbox\" value=\"active\" [(ngModel)] =\"status\" required>Active/Inactive</label>\r\n                    </div>\r\n                    \r\n                    <div class=\"col-md-2 form-group\">\r\n                        <label></label>\r\n                        <button *ngIf=\"add\" type=\"submit\" style=\"display: block;\" class=\"btn btn-primary\" (click)=\"addContact()\">Add Contact</button>\r\n\r\n                        <button *ngIf=\"update\" type=\"submit\" style=\"display: block;\" class=\"btn btn-primary\" (click)=\"updateContact()\">Update Contact</button>\r\n                    </div>\r\n\r\n\r\n                </div>\r\n\r\n            </div>\r\n        </div>\r\n        <table id=\"gradient-style\">\r\n            <thead>\r\n                <tr>\r\n                    <th>First Name</th>\r\n                    <th>Last Name</th>\r\n                    <th>Email</th>\r\n                    <th>Phone Number </th>\r\n                    <th>Status</th>\r\n                    <th>Action</th>\r\n                </tr>\r\n            </thead>\r\n            <tbody>\r\n\r\n                <tr *ngFor=\"let contact of arrContact; let i = index\">\r\n                    <td>{{contact.fname}}</td>\r\n                    <td>{{contact.lname}}</td>\r\n                    <td>{{contact.email}}</td>\r\n                    <td>{{contact.phone}}</td>\r\n                    <td>{{contact.status == true ? 'Active' : 'Inactive'}}</td>\r\n                    <td>\r\n                        <button type=\"button\" class=\"btn btn-success btn-circle btn-lg\" data-toggle=\"tooltip\" data-placement=\"top\" title=\"Edit\" (click)=\"editContact(i)\"><i class=\"glyphicon glyphicon-pencil\"></i></button>\r\n                        <button type=\"button\" class=\"btn btn-danger btn-circle btn-lg\" data-toggle=\"tooltip\" data-placement=\"top\" title=\"Delete\" (click)=\"deleteContact(i)\"><i class=\"glyphicon glyphicon-trash\"></i></button>\r\n                    </td>\r\n                </tr>\r\n                \r\n                <tr *ngIf=\"arrContact?.length == 0\">\r\n                    <td colspan=\"6\" style=\"text-align:center\">No Data Found</td>\r\n                </tr>\r\n                \r\n            </tbody>\r\n        </table>\r\n\r\n    </div>\r\n\r\n    <footer class=\"flex-noshrink main-footer\">\r\n        <div class=\"footer-container\">\r\n            <div class=\"copyright\">\r\n                Copyright &copy; 2018-2019\r\n            </div>\r\n        </div>\r\n    </footer>\r\n</div>\r\n"

/***/ }),

/***/ "./src/app/component/home/home.component.ts":
/*!**************************************************!*\
  !*** ./src/app/component/home/home.component.ts ***!
  \**************************************************/
/*! exports provided: HomeComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HomeComponent", function() { return HomeComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var HomeComponent = /** @class */ (function () {
    function HomeComponent() {
        this.arrContact = [];
        this.id = 1;
        this.fname = "";
        this.lname = "";
        this.email = "";
        this.phone = "";
        this.status = "";
        this.add = true;
        this.update = false;
    }
    HomeComponent.prototype.ngOnInit = function () {
    };
    HomeComponent.prototype.addContact = function () {
        debugger;
        if (this.fname != "" &&
            this.lname != "" &&
            this.email != "" &&
            this.phone != "") {
            this.arrContact.push({
                id: this.id,
                fname: this.fname,
                lname: this.lname,
                email: this.email,
                phone: this.phone,
                status: this.status
            });
            this.id = this.id + 1;
            console.log(this.arrContact);
            this.fname = "";
            this.lname = "";
            this.email = "";
            this.phone = "";
            this.status = "";
        }
        else {
            alert('Please insert all mandatory fields.');
        }
    };
    HomeComponent.prototype.editContact = function (index) {
        this.id = this.arrContact[index].id;
        this.fname = this.arrContact[index].fname;
        this.lname = this.arrContact[index].lname;
        this.email = this.arrContact[index].email;
        this.phone = this.arrContact[index].phone;
        this.status = this.arrContact[index].status;
        this.add = false;
        this.update = true;
    };
    HomeComponent.prototype.updateContact = function () {
        if (this.fname != "" &&
            this.lname != "" &&
            this.email != "" &&
            this.phone != "") {
            this.add = true;
            this.update = false;
            for (var i in this.arrContact) {
                if (this.arrContact[i].id == this.id) {
                    this.arrContact[i].id = this.id;
                    this.arrContact[i].fname = this.fname;
                    this.arrContact[i].lname = this.lname;
                    this.arrContact[i].email = this.email;
                    this.arrContact[i].phone = this.phone;
                    this.arrContact[i].status = this.status;
                }
            }
            this.fname = "";
            this.lname = "";
            this.email = "";
            this.phone = "";
            this.status = "";
        }
        else {
            alert('Please insert all mandatory fields.');
        }
    };
    HomeComponent.prototype.deleteContact = function (index) {
        var result = confirm("Want to delete?");
        if (result == true) {
            this.arrContact.splice(index, 1);
        }
        this.fname = "";
        this.lname = "";
        this.email = "";
        this.phone = "";
        this.status = "";
    };
    HomeComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-home',
            template: __webpack_require__(/*! ./home.component.html */ "./src/app/component/home/home.component.html"),
            styles: [__webpack_require__(/*! ./home.component.css */ "./src/app/component/home/home.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], HomeComponent);
    return HomeComponent;
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
// `ng build ---prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.
var environment = {
    production: false
};
/*
 * In development mode, to ignore zone related error stack frames such as
 * `zone.run`, `zoneDelegate.invokeTask` for easier debugging, you can
 * import the following file, but please comment it out in production mode
 * because it will have performance impact when throw error
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
    .catch(function (err) { return console.log(err); });


/***/ }),

/***/ 0:
/*!***************************!*\
  !*** multi ./src/main.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! D:\Sagar Sawant\WORK\Angular2\WebApplication1\WebApplication1\src\main.ts */"./src/main.ts");


/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main.js.map