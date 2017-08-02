import { Injectable } from '@angular/core';
import { Product } from '../models/product';

const productsPromise: Promise<Product[]> = Promise.resolve([
	{
		id: 1,
		name: 'Birkin 30 Orange Clemence',
		price: 15000,
		quantity: 4,
		brand: 'Hermès',
		category: 'Handbag',
		description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Sunt praesentium doloremque error nulla, '+
		'possimus ad fugiat iure porro voluptates voluptate alias quisquam incidunt et in quos adipisci. Nihil illum eum '+
		'quaerat quis veritatis repellendus, libero hic, dolores beatae nemo tenetur?',
		seller_username: 'Nomi',
		img: ['https://cdn6.giltcdn.com/images/share/uploads/0000/0005/0808/508088505/lg.jpg?oq=86'],
		created_date: '2016-11-16',
	},
	{
		id: 2,
		name: 'Birkin 35 Brown Togo',
		price: 14000,
		quantity: 1,
		brand: 'Hermès',
		category: 'Handbag',
		description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Sunt praesentium doloremque error nulla, ' +
		'possimus ad fugiat iure porro voluptates voluptate alias quisquam incidunt et in quos adipisci. Nihil illum eum ' +
		'quaerat quis veritatis repellendus, libero hic, dolores beatae nemo tenetur?',
		seller_username: 'Nomi',
		img: ['https://cdn8.giltcdn.com/images/share/uploads/0000/0005/1017/510174519/lg.jpg?oq=86'],
		created_date: '2016-11-16',
	},
	{
		id: 3,
		name: 'Birkin 35 Gold Ardennes',
		price: 14000,
		quantity: 1,
		brand: 'Hermès',
		category: 'Handbag',
		description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Sunt praesentium doloremque error nulla, ' +
		'possimus ad fugiat iure porro voluptates voluptate alias quisquam incidunt et in quos adipisci. Nihil illum eum ' +
		'quaerat quis veritatis repellendus, libero hic, dolores beatae nemo tenetur?',
		seller_username: 'Nomi',
		img: ['https://cdn5.giltcdn.com/images/share/uploads/0000/0005/0918/509185828/674x898.jpg?oq=85'],
		created_date: '2016-11-16',
	},
	{
		id: 4,
		name: 'Birkin 35 Green Clemence',
		price: 18000,
		quantity: 1,
		brand: 'Hermès',
		category: 'Handbag',
		description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Sunt praesentium doloremque error nulla, ' +
		'possimus ad fugiat iure porro voluptates voluptate alias quisquam incidunt et in quos adipisci. Nihil illum eum ' +
		'quaerat quis veritatis repellendus, libero hic, dolores beatae nemo tenetur?',
		seller_username: 'Nomi',
		img: ['https://cdn8.giltcdn.com/images/share/uploads/0000/0005/0728/507285703/674x898.jpg?oq=85'],
		created_date: '2016-11-16',
	},
	{
		id: 5,
		name: 'Birkin 35 Rose Chevre',
		price: 12000,
		quantity: 1,
		brand: 'Hermès',
		category: 'Handbag',
		description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Sunt praesentium doloremque error nulla, ' +
		'possimus ad fugiat iure porro voluptates voluptate alias quisquam incidunt et in quos adipisci. Nihil illum eum ' +
		'quaerat quis veritatis repellendus, libero hic, dolores beatae nemo tenetur?',
		seller_username: 'Nomi',
		img: ['https://cdn5.giltcdn.com/images/share/uploads/0000/0005/1017/510174524/674x898.jpg?oq=85'],
		created_date: '2016-11-16',
	},
	{
		id: 6,
		name: 'Gemstone Bangle Bracelet',
		price: 7000,
		quantity: 1,
		brand: 'Cartier',
		category: 'Jewelry',
		description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Sunt praesentium doloremque error nulla, ' +
		'possimus ad fugiat iure porro voluptates voluptate alias quisquam incidunt et in quos adipisci. Nihil illum eum ' +
		'quaerat quis veritatis repellendus, libero hic, dolores beatae nemo tenetur?',
		seller_username: 'Nomi',
		img: ['https://cdn6.giltcdn.com/images/share/uploads/0000/0005/1004/510049001/674x898.jpg?oq=85'],
		created_date: '2016-11-16',
	},
	{
		id: 7,
		name: 'Alligator CDC Bracelet',
		price: 800,
		quantity: 1,
		brand: 'Hermès',
		category: 'Jewelry',
		description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Sunt praesentium doloremque error nulla, ' +
		'possimus ad fugiat iure porro voluptates voluptate alias quisquam incidunt et in quos adipisci. Nihil illum eum ' +
		'quaerat quis veritatis repellendus, libero hic, dolores beatae nemo tenetur?',
		seller_username: 'Nomi',
		img: ['https://product-images.therealreal.com/HER76978_1_enlarged.jpg'],
		created_date: '2016-11-16',
	}
]);

@Injectable()

export class ProductService{


	// get all user
	getProducts(){
		return productsPromise;
	}

	// get specific user
	getProduct(name){
		return productsPromise.then(products => products.find(product => product.name === name));
	}
}