import { ModuleWithProviders } from '@angular/core';

import { Routes, RouterModule } from '@angular/router';

import { HomeComponent } from './home/home.component';
import { ProductComponent } from './product/product.component';

import { ContactComponent } from './contact/contact.component';
import { NotFoundComponent } from './not-found/not-found.component';
import { ShoppingCartComponent } from './cart/cart.component';
import { UsersComponent } from './users/users.component';


// import { UserListComponent } from './users/user-list/user-list.component';
// import { UserSingleComponent } from './users/user-single/user-single.component';
// import { UserEditComponent } from './users/user-edit/user-edit.component';
// import { UserCreateComponent } from './users/user-create/user-create.component';

const appRouters: Routes = [
	{ 
		path: '', 
		component: HomeComponent 
	},
	{
		path: 'about',
		loadChildren: 'app/about/about.module#AboutModule' 
	},
	{
		path: 'product/:name',
		component : ProductComponent
	},
	{
		path: 'cart',
		component: ShoppingCartComponent
	},
	{
		path: 'users',
		component: UsersComponent,
		// children: [
		// 	{
		// 		path: '',
		// 		component: UserListComponent
		// 	},
		// 	{
		// 		path: 'create',
		// 		component: UserCreateComponent
		// 	},
		// 	{
		// 		path: ':id',
		// 		component: UserSingleComponent
		// 	},
		// 	{
		// 		path: ':id/edit',
		// 		component: UserEditComponent
		// 	}
		// ]
	},
	{ 	
		path: 'contact', 
		component: ContactComponent 
	},
	{ 	
		path: '**', 
		component: NotFoundComponent 
	} 
	// has to be the last one , it will match the first matching path
];


export const appRouting: ModuleWithProviders = RouterModule.forRoot(appRouters);