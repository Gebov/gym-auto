import { Effect, Actions } from '@ngrx/effects';
import { Injectable } from "@angular/core";

import { EffectsModule } from '@ngrx/effects';
import { Observable } from "rxjs";
import { Store } from "@ngrx/store";

import { UsersActions } from "./users.actions";
import { UsersService } from "./../services/users.service";
import { ActionImpl } from "./../../../../../state/action.impl";

@Injectable()
class UsersEffects {
	constructor(
		private update$: Actions,
		private actions: UsersActions,
		private usersSvc: UsersService
	) { }

	@Effect() getUsers$ = this.update$
		.ofType(UsersActions.GET_USERS_INIT)
		.switchMap(x => this.usersSvc.get()
			.map((data) => {
				return new ActionImpl(UsersActions.GET_USERS_END, data);
			})
			.catch((err, observable) => { return Observable.of(new ActionImpl(UsersActions.GET_USERS_END, {})); })
		);

	@Effect() deleteUser$ = this.update$
		.ofType(UsersActions.DELETE_USER_INIT)
		.switchMap(x => this.usersSvc.delete(x.payload)
			.map((data) => {
				return new ActionImpl(UsersActions.DELETE_USER_END, data);
			})
			.catch((err, observable) => { return Observable.of(new ActionImpl(UsersActions.DELETE_USER_END, null)); })
		);

	@Effect() updateUser$ = this.update$
		.ofType(UsersActions.UPDATE_USER_INIT)
		.switchMap(x => this.usersSvc.update(x.payload)
			.map((data) => {
				return new ActionImpl(UsersActions.UPDATE_USER_END, data);
			})
			.catch((err, observable) => { return Observable.of(new ActionImpl(UsersActions.UPDATE_USER_END, null)); })
		);
}

export const EFFECTS_MODULE = EffectsModule.run(UsersEffects);
