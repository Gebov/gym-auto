import {Effect, Actions} from '@ngrx/effects';
import { Injectable } from "@angular/core";
import { AuthActions } from "./auth.actions";
import { AuthService } from "./auth.service";
import { Action } from "@ngrx/store";

export class AuthEffects {
	constructor (
        private update$: Actions,
        private actions: AuthActions,
        private svc: AuthService,
    ) {}

	@Effect() login$ = this.update$
        .ofType(AuthActions.LOGIN)
        .switchMap(x => this.svc.login(x.payload.email, x.payload.password))
		.map(x => new ActionStub(AuthActions.LOGIN_SUCCESS, x));
}

class ActionStub implements Action {
	constructor(public type: string, public payload: any) {

	}
}
