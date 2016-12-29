import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Store } from "@ngrx/store";
import { ActionImpl } from "./../../../state/action.impl";
import { AuthActions } from "./../../state/auth.actions";

@Component({
	selector: 'gym-register',
	templateUrl: './register.component.html'
})
export class RegisterComponent {
	private user: any;

	constructor(private router: Router, private store: Store<any>) {
		this.user =
		{
			email: '',
			password: '',
			confirmPassword: '',
			username: ''
		};
	}

	register() {
		this.store.dispatch(new ActionImpl(AuthActions.REGISTER_INIT, this.user));
	}
}
