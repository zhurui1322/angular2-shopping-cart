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
var user_service_1 = require("../shared/services/user.service");
var AboutUserComponent = (function () {
    function AboutUserComponent(route, service, router) {
        this.route = route;
        this.service = service;
        this.router = router;
    }
    AboutUserComponent.prototype.ngOnInit = function () {
        var _this = this;
        //grab the current username
        var username = this.route.snapshot.params['username'];
        this.service.getUser(username).then(function (user) { return _this.user = user; });
        //console.log(username);
    };
    AboutUserComponent.prototype.goBack = function () {
        this.router.navigate(['/about']);
    };
    return AboutUserComponent;
}());
AboutUserComponent = __decorate([
    core_1.Component({
        styles: ["\n\t\timg {\n\t\t\tmax-width: 300px;\n\t\t\tmargin: 20px auto;\n\t\t}\n\t"],
        template: "\n\t\t<a (click)=\"goBack()\" class=\"btn btn-sm btn-info\">Go Back</a>\n\t\t<div class=\"jumbotron text-center\" *ngIf=\"user\">\n\t\t\t<h1> {{ user.name }} ({{ user.username }})</h1>\n\n\t\t\t<img [src]=\"user.avatar\" class=\"img-responsive img-circle\" />\n\t\t</div>\n\t"
    }),
    __metadata("design:paramtypes", [router_1.ActivatedRoute,
        user_service_1.UserService,
        router_1.Router])
], AboutUserComponent);
exports.AboutUserComponent = AboutUserComponent;
//# sourceMappingURL=about-user.component.ts.js.map