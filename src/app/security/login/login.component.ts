import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { AuthService } from './../auth/auth.service';

@Component({
	selector: 'gym-login',
	template: require('./login.component.html')
	// styles: [require('./login.component.css').toString()]
})
export class LoginComponent implements OnInit {
	private message: string;

	constructor(private auth: AuthService, private router: Router, private route: ActivatedRoute) {
	}

	ngOnInit() {
		this.message = this.route.snapshot.queryParams["message"];
	}

	login(email, password): boolean {
		this.auth.login(email, password)
			.subscribe((success) => {
				if (success)
					this.router.navigate(['home']);
			}, (err) => {
				console.log("Error logging in");
			});
		return true;
	}
}
