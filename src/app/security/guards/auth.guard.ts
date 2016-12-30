import { Injectable } from '@angular/core';
import { Router, CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot } from '@angular/router';
import { Store } from "@ngrx/store";
import { Observable } from "rxjs";

import { AuthModel } from './../state/auth.model';
import { AuthActions } from "./../state/auth.actions";
import { ActionImpl } from "./../../state/action.impl";

@Injectable()
export class AuthGuard implements CanActivate {
	constructor(private router: Router, private store: Store<any>) { }

	canActivate(route: ActivatedRouteSnapshot, routerState: RouterStateSnapshot) {
		// TODO: extract to constant
		// check if user is logged in
		this.store.select("authState").first().subscribe((x: AuthModel) => {
			if (!x.isInitialized)
				this.store.dispatch(new ActionImpl(AuthActions.GET_USER_DATA));
		});

		return this.store.select("authState")
			.skipWhile((x: AuthModel) => !x.isInitialized)
			.map((x: AuthModel) => {
				let currentUrl = routerState.url;
				if (allowedAnonymousRoutes.indexOf(currentUrl) !== -1) {
					if (!x.isLoggedIn)
						return true;

					this.router.navigate(["/"]);
					return false;
				} else if (!x.isLoggedIn)
					this.router.navigate(["/login"]);

				return x.isLoggedIn;
			}).first();
	}
}

const allowedAnonymousRoutes = [
	"/register",
	"/login"
]
