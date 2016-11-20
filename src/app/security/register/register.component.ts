import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from './../auth/auth.service';

@Component({
	selector: 'gym-register',
	template: require('./register.component.html')
})
export class RegisterComponent {
	private user: any;

	constructor(private auth: AuthService, private router: Router) {
		this.user =
		{
			email: '',
			password: '',
			confirmPassword: '',
			nickname: ''
		};
	}

	register() {
		this.auth.register(this.user)
		.subscribe(() => {
			this.router.navigate(['login']);
		});
	}
}
