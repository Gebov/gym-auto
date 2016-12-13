import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
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

	constructor(private store: Store<any>, private route: ActivatedRoute) {
	}

	ngOnInit() {
		this.message = this.route.snapshot.queryParams["message"];
	}

	login (email, password, isPersistent) {
		this.store.dispatch(new ActionImpl(AuthActions.LOGIN_INIT, { email, password, isPersistent }));
	}
}
