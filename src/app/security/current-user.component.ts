import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService, IUser } from './auth';

@Component({
  selector: 'gym-current-user',
  template: require('./current-user.component.html')
})
export class CurrentUserComponent implements OnInit {
	private username: string = null;

	constructor(private auth: AuthService) { }

	ngOnInit() {
		this.auth.current().subscribe(x => {
			this.username = x.username;
		});
	}
}
