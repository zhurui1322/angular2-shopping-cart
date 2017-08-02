"use strict";
var router_1 = require("@angular/router");
var home_component_1 = require("./home/home.component");
var product_component_1 = require("./product/product.component");
var contact_component_1 = require("./contact/contact.component");
var not_found_component_1 = require("./not-found/not-found.component");
var cart_component_1 = require("./cart/cart.component");
var users_component_1 = require("./users/users.component");
// import { UserListComponent } from './users/user-list/user-list.component';
// import { UserSingleComponent } from './users/user-single/user-single.component';
// import { UserEditComponent } from './users/user-edit/user-edit.component';
// import { UserCreateComponent } from './users/user-create/user-create.component';
var appRouters = [
    {
        path: '',
        component: home_component_1.HomeComponent
    },
    {
        path: 'about',
        loadChildren: 'app/about/about.module#AboutModule'
    },
    {
        path: 'product/:name',
        component: product_component_1.ProductComponent
    },
    {
        path: 'cart',
        component: cart_component_1.ShoppingCartComponent
    },
    {
        path: 'users',
        component: users_component_1.UsersComponent,
    },
    {
        path: 'contact',
        component: contact_component_1.ContactComponent
    },
    {
        path: '**',
        component: not_found_component_1.NotFoundComponent
    }
];
exports.appRouting = router_1.RouterModule.forRoot(appRouters);
//# sourceMappingURL=app.routing.js.map