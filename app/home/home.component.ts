import { Component, OnInit } from '@angular/core';
import { Product } from '../shared/models/product';
import { ProductService } from '../shared/services/product.service';

@Component({
	selector: 'home-page',
	styles: [`
		.profile-card {
			background:#f3f3f3;
			border-radius: 4px;
			padding 30px;
			margin:20px;
			text-align: center;
			height:350px;
			cursor:pointer;
		}

		.profile-card img {
			max-width : 50%;
			margin: 15px auto;
		}
	`
	],
	template: `
		<div class="row">
			<div class="col-sm-4" *ngFor="let product of products">
				<div class="profile-card" [routerLink] = "['/product', product.name]">
					<img [src]="product.img[0]" class="img-responnsive ">
					<h3>{{product.name}}</h3>
					<p>{{ product.price | currency:'USD':true:'1.2-2'}}</p>
				</div>
			</div>
		</div>
	`

})

export class HomeComponent implements OnInit{

	products: Product[];
	constructor(private service: ProductService) { };

	ngOnInit() {
		this.service.getProducts().then(products => this.products = products);
	}
}