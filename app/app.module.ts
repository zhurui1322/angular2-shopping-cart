import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';


import { DashboardModule } from './dashboard/dashboard.module';

import { appRouting } from './app.routing';

import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { ProductComponent } from './product/product.component';
import { ContactComponent } from './contact/contact.component';
import { NotFoundComponent } from './not-found/not-found.component';
import { ShoppingCartComponent } from './cart/cart.component';
import { UsersComponent } from './users/users.component';


import { AuthGuard } from './shared/guards/auth-guard.service';
import { CanDeactivateGuard } from './shared/guards/can-deactivate-guard.service';
import { ProductService } from './shared/services/product.service';

import { UserService } from './shared/services/user.service';
import { UserHttpService } from './shared/services/userHttp.service';

import 'rxjs/add/operator/map';
import 'rxjs/add/operator/toPromise';
import 'rxjs/add/operator/catch';
import 'rxjs/add/operator/do';
import 'rxjs/add/observable/throw';

@NgModule({
  	imports: [ 
  		BrowserModule,
		  FormsModule,
      DashboardModule,
		  appRouting,
      FormsModule,
      HttpModule
	  ],
  
  	declarations: [ 
  		AppComponent,
  		HomeComponent,
  		ContactComponent,
  		NotFoundComponent,
      ProductComponent,
      ShoppingCartComponent,
      UsersComponent,
  	],

    providers: [
      AuthGuard,
      CanDeactivateGuard,
      ProductService,
      UserService,
    UserHttpService
    ],

  
    bootstrap: [ AppComponent ]
})

export class AppModule {}