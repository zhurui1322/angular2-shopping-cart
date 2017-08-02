"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var core_1 = require("@angular/core");
var usersPromise = Promise.resolve([
    {
        id: 1,
        name: 'Rafa Nadal',
        username: 'Nomi',
        avatar: 'https://pbs.twimg.com/profile_images/827193737084334081/FSGGo4KS_400x400.jpg'
    },
    {
        id: 2,
        name: 'Ana Ivanovic',
        username: 'AnaIvanovic',
        avatar: 'https://pbs.twimg.com/profile_images/739789889361842177/nRTxNuWo_400x400.jpg'
    },
    {
        id: 3,
        name: 'Federer',
        username: 'rogerfederer',
        avatar: 'https://pbs.twimg.com/profile_images/833104478328877056/8z-8v1Fw_400x400.jpg'
    },
]);
var UserService = (function () {
    function UserService() {
    }
    // get all user
    UserService.prototype.getUsers = function () {
        return usersPromise;
    };
    // get specific user
    UserService.prototype.getUser = function (username) {
        return usersPromise.then(function (users) { return users.find(function (user) { return user.username === username; }); });
    };
    return UserService;
}());
UserService = __decorate([
    core_1.Injectable()
], UserService);
exports.UserService = UserService;
//# sourceMappingURL=user.service.js.map