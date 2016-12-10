import { Effect, Actions } from '@ngrx/effects';
import { Injectable } from "@angular/core";
import { AuthActions } from "./auth.actions";
import { AuthService } from "./../services/auth.service";
import { ActionImpl } from "./../../state/action.impl";

import { Router } from "@angular/router";
import { Observable } from "rxjs";
import { go } from '@ngrx/router-store';
import { Store } from "@ngrx/store";

@Injectable()
export class AuthEffects {
	constructor(
		private update$: Actions,
		private actions: AuthActions,
		private svc: AuthService,
		private router: Router
	) { }

	@Effect() login$ = this.update$
		.ofType(AuthActions.LOGIN_INIT)
		.switchMap(x => this.svc.login(x.payload.email, x.payload.password)
			.map((success) => {
				if (success)
					this.router.navigate(['/home'])

				return new ActionImpl(AuthActions.LOGIN_END, success);
			})
			.catch((err, observable) => { return Observable.of(new ActionImpl(AuthActions.LOGIN_END, false)); })
		);

	@Effect() logout$ = this.update$
		.ofType(AuthActions.LOGOUT_INIT)
		.switchMap(x => this.svc.logout()
			.map((success) => {
				if (success)
					this.router.navigate(['/login'])

				return new ActionImpl(AuthActions.LOGOUT_END, success);
			})
			.catch((err, observable) => { return Observable.of(new ActionImpl(AuthActions.LOGOUT_END, false)); })
		);

	@Effect() getUserData$ = this.update$
		.ofType(AuthActions.GET_USER_DATA)
		.switchMap(x => this.svc.current()
			.map((data) => {
				return new ActionImpl(AuthActions.GET_USER_DATA_END, data);
			})
			.catch((err, observable) => { return Observable.of(new ActionImpl(AuthActions.GET_USER_DATA_END, {})); })
		);

	@Effect() register$ = this.update$
		.ofType(AuthActions.REGISTER_INIT)
		.switchMap(x => this.svc.register(x.payload)
			.map((success) => {
				if (success)
					this.router.navigate(['/login']); // TODO: consider adding the parameters here to auto fill in user data

				return new ActionImpl(AuthActions.REGISTER_END, success);
			})
			.catch((err, observable) => { return Observable.of(new ActionImpl(AuthActions.REGISTER_END, false)); })
		);

	@Effect() getUsers$ = this.update$
		.ofType(AuthActions.GET_USERS_INIT)
		.switchMap(x => this.svc.users()
			.map((data) => {
				return new ActionImpl(AuthActions.GET_USERS_END, data);
			})
			.catch((err, observable) => { return Observable.of(new ActionImpl(AuthActions.GET_USERS_END, {})); })
		);
}
