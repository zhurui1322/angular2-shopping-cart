import { Injectable } from '@angular/core';
import { Http, Response, Headers } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import { UserHttp } from '../models/userHttp';
import { Subject } from 'rxjs/Subject';

@Injectable()

export class UserHttpService {
	private usersUrl: string = 'https://reqres.in/api/users';
	constructor(private http: Http) { }

	gettUsers(): Observable<UserHttp[]> {
		return this.http.get(this.usersUrl)
			.map(res => res.json().data)
			.catch(this.handleError);
	 }


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


	private handleError(err) {
		let errMessage: string;

		if (err instanceof Response) {
			let body = err.json() || '';
			let error = body.error || JSON.stringify(body);
			errMessage = `${err.status} - ${err.statusText || ''} ${error}`;
		} else {
			errMessage = err.message ? err.message : err.toString();
		}
		return Observable.throw(errMessage);
	}
}