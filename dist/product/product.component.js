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
var user_service_1 = require("../shared/services/user.service");
var ProductComponent = (function () {
    function ProductComponent(route, router, productService, userService) {
        this.route = route;
        this.router = router;
        this.productService = productService;
        this.userService = userService;
        this.num = [];
    }
    ProductComponent.prototype.ngOnInit = function () {
        var _this = this;
        var name = this.route.snapshot.params['name'];
        console.log(name);
        this.productService.getProduct(name).then(function (product) {
            _this.product = product;
            _this.quantity = product.quantity;
            for (var i = 1; i <= _this.quantity; i++) {
                _this.num.push(i);
            }
            console.log(_this.product.seller_username);
            _this.userService.getUser(_this.product.seller_username).then(function (user) {
                _this.seller = user;
                document.body.scrollTop = 0;
            });
        });
    };
    ProductComponent.prototype.goBack = function () {
        this.router.navigate(['/']);
    };
    return ProductComponent;
}());
ProductComponent = __decorate([
    core_1.Component({
        styles: ["\n\t\t.product_img {\n\t\t\tmax-width: 50%px;\n\t\t\tmargin: 20px auto;\n\t\t}\n\t\t.avatar {\n\t\t\tmax-width: 100px;\n\t\t\tmargin: 20px auto;\n\t\t\tcursor:pointer;\n\t\t}\n\t"],
        templateUrl: './app/product/product.component.html',
    }),
    __metadata("design:paramtypes", [router_1.ActivatedRoute,
        router_1.Router,
        product_service_1.ProductService,
        user_service_1.UserService])
], ProductComponent);
exports.ProductComponent = ProductComponent;
//# sourceMappingURL=product.component.js.map