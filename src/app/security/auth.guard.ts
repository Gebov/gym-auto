import { Injectable } from '@angular/core';
import { Router, CanActivate } from '@angular/router';
import { AuthStore } from './state/auth.state';
import { AuthModel } from './state/auth.model';
import { Store } from "@ngrx/store";
import { Observable } from "rxjs";
import { AuthActions } from "./state/auth.actions";
import { ActionImpl } from "./../state/action.impl";

@Injectable()
export class AuthGuard implements CanActivate {
	constructor(private router: Router, private store: Store<any>) { }

	canActivate() {
		// TODO: extract to constant
		return this.store.select("authState")
			.map((x: AuthModel) => {
				if (!x.isLoggedIn)
				 	this.router.navigate(["/login"]);
				else
					this.store.dispatch(new ActionImpl(AuthActions.GET_USER_DATA));

				return x.isLoggedIn;
			}).first();
	}
}
