"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
//import component module from library its found in
var core_1 = require("@angular/core");
var product_service_1 = require("./products/product.service");
//"@Component" decorator used from import^^
var AppComponent = (function () {
    function AppComponent() {
        this.pageTitle = 'Acme Product Management';
    }
    return AppComponent;
}());
AppComponent = __decorate([
    core_1.Component({
        //selector name = custom HTML tag you can insert else where
        selector: 'pm-app',
        //when inserted, template defines what is being inserted as HTML 
        //interpolation: double set of curly braces "{{template expression}}" = one-way data binding from class to template
        //ex: pageTitle is defined in class AppComponent -> used in template
        //interpolation can also do concat, math, function calls
        template: "\n    <div>\n        <nav class='navbar navbar-fluid'>\n            <div class='container-fluid'>\n                <a class = 'navbar-brand'>{{pageTitle}}</a>\n                    <ul class='nav navbar-nav'>\n                        <li><a [routerLink]=\"['/welcome']\">Home</a></li>\n                        <li><a [routerLink]=\"['/products']\">Product List</a></li>\n                    </ul>\n            </div>\n        </nav>\n        <div>\n            <router-outlet></router-outlet>\n        </div>\n    </div>\n    ",
        providers: [product_service_1.ProductService]
    })
    //must export class if we wish to use it elsewhere in the appliaction
], AppComponent);
exports.AppComponent = AppComponent;
//# sourceMappingURL=app.component.js.map