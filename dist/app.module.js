"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var core_1 = require("@angular/core");
var platform_browser_1 = require("@angular/platform-browser");
var forms_1 = require("@angular/forms");
var http_1 = require("@angular/http");
var dashboard_module_1 = require("./dashboard/dashboard.module");
var app_routing_1 = require("./app.routing");
var app_component_1 = require("./app.component");
var home_component_1 = require("./home/home.component");
var product_component_1 = require("./product/product.component");
var contact_component_1 = require("./contact/contact.component");
var not_found_component_1 = require("./not-found/not-found.component");
var cart_component_1 = require("./cart/cart.component");
var users_component_1 = require("./users/users.component");
var auth_guard_service_1 = require("./shared/guards/auth-guard.service");
var can_deactivate_guard_service_1 = require("./shared/guards/can-deactivate-guard.service");
var product_service_1 = require("./shared/services/product.service");
var user_service_1 = require("./shared/services/user.service");
var userHttp_service_1 = require("./shared/services/userHttp.service");
require("rxjs/add/operator/map");
require("rxjs/add/operator/toPromise");
require("rxjs/add/operator/catch");
require("rxjs/add/operator/do");
require("rxjs/add/observable/throw");
var AppModule = (function () {
    function AppModule() {
    }
    return AppModule;
}());
AppModule = __decorate([
    core_1.NgModule({
        imports: [
            platform_browser_1.BrowserModule,
            forms_1.FormsModule,
            dashboard_module_1.DashboardModule,
            app_routing_1.appRouting,
            forms_1.FormsModule,
            http_1.HttpModule
        ],
        declarations: [
            app_component_1.AppComponent,
            home_component_1.HomeComponent,
            contact_component_1.ContactComponent,
            not_found_component_1.NotFoundComponent,
            product_component_1.ProductComponent,
            cart_component_1.ShoppingCartComponent,
            users_component_1.UsersComponent,
        ],
        providers: [
            auth_guard_service_1.AuthGuard,
            can_deactivate_guard_service_1.CanDeactivateGuard,
            product_service_1.ProductService,
            user_service_1.UserService,
            userHttp_service_1.UserHttpService
        ],
        bootstrap: [app_component_1.AppComponent]
    })
], AppModule);
exports.AppModule = AppModule;
//# sourceMappingURL=app.module.js.map