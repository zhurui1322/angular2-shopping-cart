import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Product } from '../shared/models/product';
import { ProductService } from '../shared/services/product.service';

import { User } from '../shared/models/user';
import { UserService } from '../shared/services/user.service';

@Component({
	styles: [`
		.product_img {
			max-width: 50%px;
			margin: 20px auto;
		}
		.avatar {
			max-width: 100px;
			margin: 20px auto;
			cursor:pointer;
		}
	`],
	templateUrl: './app/product/product.component.html',
})
export class ProductComponent implements OnInit {
	product: Product;
	seller: User;
	quantity: number;
	num: number[] = [];

	constructor(
		private route: ActivatedRoute,
		private router: Router,
		private productService: ProductService,
		private userService: UserService) {}



	ngOnInit() {
		let name = this.route.snapshot.params['name'];
		console.log(name);
		this.productService.getProduct(name).then(product => {
			this.product = product;
			this.quantity = product.quantity;
			for (var i = 1; i <= this.quantity; i++){
				this.num.push(i);
			}
			console.log(this.product.seller_username);
			this.userService.getUser(this.product.seller_username).then(user => {
				this.seller = user;
				document.body.scrollTop = 0;
			});
		});
	}



	goBack() {
		
		this.router.navigate(['/']);
	}
}