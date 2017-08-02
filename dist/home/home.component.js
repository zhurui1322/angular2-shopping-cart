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
var product_service_1 = require("../shared/services/product.service");
var HomeComponent = (function () {
    function HomeComponent(service) {
        this.service = service;
    }
    ;
    HomeComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.service.getProducts().then(function (products) { return _this.products = products; });
    };
    return HomeComponent;
}());
HomeComponent = __decorate([
    core_1.Component({
        selector: 'home-page',
        styles: ["\n\t\t.profile-card {\n\t\t\tbackground:#f3f3f3;\n\t\t\tborder-radius: 4px;\n\t\t\tpadding 30px;\n\t\t\tmargin:20px;\n\t\t\ttext-align: center;\n\t\t\theight:350px;\n\t\t\tcursor:pointer;\n\t\t}\n\n\t\t.profile-card img {\n\t\t\tmax-width : 50%;\n\t\t\tmargin: 15px auto;\n\t\t}\n\t"
        ],
        template: "\n\t\t<div class=\"row\">\n\t\t\t<div class=\"col-sm-4\" *ngFor=\"let product of products\">\n\t\t\t\t<div class=\"profile-card\" [routerLink] = \"['/product', product.name]\">\n\t\t\t\t\t<img [src]=\"product.img[0]\" class=\"img-responnsive \">\n\t\t\t\t\t<h3>{{product.name}}</h3>\n\t\t\t\t\t<p>{{ product.price | currency:'USD':true:'1.2-2'}}</p>\n\t\t\t\t</div>\n\t\t\t</div>\n\t\t</div>\n\t"
    }),
    __metadata("design:paramtypes", [product_service_1.ProductService])
], HomeComponent);
exports.HomeComponent = HomeComponent;
//# sourceMappingURL=home.component.js.map