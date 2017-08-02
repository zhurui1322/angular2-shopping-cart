import { Component, OnInit } from '@angular/core';
import { Http } from '@angular/http';
import { UserHttp } from './shared/models/userHttp';
import { UserHttpService } from './shared/services/userHttp.service';

import 'rxjs/add/operator/map';
@Component({
  selector: 'my-app',
  styles: [`
    .active {
      color: #FFF !important;
    }
  `],
  templateUrl: './app/app.component.html'
})
export class AppComponent implements OnInit {
	users: UserHttp[];
  	constructor(private service: UserHttpService){}
  	ngOnInit() {
		this.service.gettUsers()
			.subscribe(users => this.users = users);
  	}
}