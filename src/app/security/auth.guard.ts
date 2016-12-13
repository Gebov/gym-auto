import { Injectable } from '@angular/core';
import { Router, CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot } from '@angular/router';
import { AuthStore } from './state/auth.state';
import { AuthModel } from './state/auth.model';
import { Store } from "@ngrx/store";
import { Observable } from "rxjs";
import { AuthActions } from "./state/auth.actions";
import { ActionImpl } from "./../state/action.impl";

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
				if (!x.isLoggedIn)
				 	this.router.navigate(["/login"]);
				else if (routerState.url == "/login" || routerState.url == "/register")
					this.router.navigate(["/"]);

				return x.isLoggedIn;
			}).first();
	}
}
