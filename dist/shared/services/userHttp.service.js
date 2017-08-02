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
var http_1 = require("@angular/http");
var Observable_1 = require("rxjs/Observable");
var UserHttpService = (function () {
    function UserHttpService(http) {
        this.http = http;
        this.usersUrl = 'https://reqres.in/api/users';
    }
    UserHttpService.prototype.gettUsers = function () {
        return this.http.get(this.usersUrl)
            .map(function (res) { return res.json().data; })
            .catch(this.handleError);
    };
    // // observable source
    // private userCreatedSource = new Subject<UserHttp>();
    // private userDeletedSource = new Subject();
    // //observable Stream
    // userCreated$ = this.userCreatedSource.asObservable();
    // userDeleted$ = this.userDeletedSource.asObservable();
    // /**
    // *	Get all users 
    // */
    // getUsers(): Observable<UserHttp[]> {
    // 	return this.http.get(this.usersUrl)
    // 		.map(res => res.json().data)
    // 		.map(users => users.map(this.toUser))
    // 		.catch(this.handleError);
    // }
    // /**
    // *	get a single user
    // */
    // getUser(id: number): Observable<User> {
    // 	let headers = new Headers();
    // 	let token = localStorage.getItem('auth_token');
    // 	headers.append('Content-type', 'application/json');
    // 	headers.append('Authorization', `Bearer ${token}`);
    // 	return this.http.get(`${this.usersUrl}/${id}`, { headers })
    // 		.map(res => res.json().data)
    // 		.map(this.toUser)
    // 		.catch(this.handleError);
    // }
    // //create a user
    // createUser(user: User): Observable<User> {
    // 	return this.http.post(this.usersUrl, user)
    // 		.map(res => res.json())
    // 		.do(user => this.userCreated(user))
    // 		.catch(this.handleError);
    // }
    // //update user
    // updateUser(user: User): Observable<User> {
    // 	return this.http.put(`${this.usersUrl}/${user.id}`, user)
    // 		//return this.http.get(`${this.usersUrl}/23`)
    // 		.map(res => res.json())
    // 		.catch(this.handleError);
    // }
    // //detele a user
    // deleteUser(id: number): Observable<User> {
    // 	return this.http.delete(`${this.usersUrl}/${id}`)
    // 		.do(res => this.userDeleted())
    // 		.catch(this.handleError);
    // }
    // userCreated(user: User) {
    // 	//console.log("user has been created")
    // 	this.userCreatedSource.next(user);
    // }
    // userDeleted() {
    // 	//console.log("user has been deleted")
    // 	this.userDeletedSource.next();
    // }
    // /**
    // *	private convert user info from the API to our standard/format
    // **/
    // private toUser(user): User {
    // 	return {
    // 		id: user.id,
    // 		name: `${user.first_name} ${user.last_name}`,
    // 		username: user.first_name,
    // 		avatar: user.avatar
    // 	};
    // }
    UserHttpService.prototype.handleError = function (err) {
        var errMessage;
        if (err instanceof http_1.Response) {
            var body = err.json() || '';
            var error = body.error || JSON.stringify(body);
            errMessage = err.status + " - " + (err.statusText || '') + " " + error;
        }
        else {
            errMessage = err.message ? err.message : err.toString();
        }
        return Observable_1.Observable.throw(errMessage);
    };
    return UserHttpService;
}());
UserHttpService = __decorate([
    core_1.Injectable(),
    __metadata("design:paramtypes", [http_1.Http])
], UserHttpService);
exports.UserHttpService = UserHttpService;
//# sourceMappingURL=userHttp.service.js.map