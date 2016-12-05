import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
// import { AuthService } from './../auth/auth.service';
import { Store } from "@ngrx/store";
import { ActionImpl } from "./../../../state/action.impl";
import { AuthActions } from "./../../state/auth.actions";
import { AuthService } from "./../../services/auth.service.ts"
@Component({
	selector: 'gym-login',
	template: require('./login.component.html')
})
export class LoginComponent implements OnInit {
	private message: string;

	constructor(private store: Store<any>, private router: Router, private route: ActivatedRoute) {
	}

	ngOnInit() {
		this.message = this.route.snapshot.queryParams["message"];
	}

	login (email, password) {
		this.store.dispatch(new ActionImpl(AuthActions.LOGIN_INIT, { email, password }));
	}
}
