"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var core_1 = require("@angular/core");
var router_1 = require("@angular/router");
var product_service_1 = require("../shared/services/product.service");
var ProductComponent = (function () {
    function ProductComponent(route, router, service) {
        this.route = route;
        this.router = router;
        this.service = service;
    }
    ProductComponent.prototype.ngOnInit = function () {
        var _this = this;
        var name = this.route.snapshot.params['name'];
        console.log(name);
        this.service.getProduct(name).then(function (product) { return _this.product = product; });
    };
    ProductComponent.prototype.goBack = function () {
        this.router.navigate(['/']);
    };
    return ProductComponent;
}());
ProductComponent = __decorate([
    core_1.Component({
        styles: ["\n\t\timg {\n\t\t\tmax-width: 300px;\n\t\t\tmargin: 20px auto;\n\t\t}\n\t"],
        templateUrl: './app/home/product.component.html',
    }),
    __metadata("design:paramtypes", [router_1.ActivatedRoute,
        router_1.Router,
        product_service_1.ProductService])
], ProductComponent);
exports.ProductComponent = ProductComponent;
//# sourceMappingURL=product.component.js.map