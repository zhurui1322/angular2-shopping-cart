import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Product } from '../shared/models/product';
import { ProductService } from '../shared/services/product.service';

import { User } from '../shared/models/user';
import { UserService } from '../shared/services/user.service';


@Component({
	styles: [`
		img{
			width: 100px;
			margin: 20px auto;
		}
	`],
	templateUrl: './app/cart/cart.component.html',

})
export class ShoppingCartComponent implements OnInit {
	constructor(){}

	ngOnInit() {
		// let name = this.route.snapshot.params['name'];
		// console.log(name);
	}
}