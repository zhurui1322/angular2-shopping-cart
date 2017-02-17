import { Injectable } from '@angular/core';
import { User } from  '../models/user';

const usersPromise: Promise<User[]> = Promise.resolve([
	{
		id: 1,
		name: 'Rafa Nadal',
		username: 'RafaelNadal',
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
		avatar: 'https://pbs.twimg.com/profile_images/711961869158711296/IVf9TtGK_400x400.jpg'
	}

]);

@Injectable()

export class UserService{


	// get all user
	getUsers(){
		return usersPromise;
	}

	// get specific user
	getUser(username){
		return usersPromise.then(users => users.find(user => user.username === username));
	}
}