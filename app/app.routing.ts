import { ModuleWithProviders } from '@angular/core';

import { Routes, RouterModule } from '@angular/router';

import { HomeComponent } from './home/home.component';
import { ContactComponent } from './contact/contact.component';
import { NotFoundComponent } from './not-found/not-found.component';

const appRouters: Routes = [
	{ 
		path: '', 
		component: HomeComponent 
	},
	{
		path: 'about',
		loadChildren: 'app/about/about.module#AboutModule' 
	},




	{ path: 'contact', component: ContactComponent },
	{ path: '**', component: NotFoundComponent } // has to be the last one , it will match the first matching path
];


export const appRouting: ModuleWithProviders = RouterModule.forRoot(appRouters);