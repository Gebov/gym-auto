import { AuthModel } from "./auth.model";
import { tassign } from "./../../../state";
import { Action } from '@ngrx/store';
import { AuthActions } from "./auth.actions";

const defaultState: AuthModel = {
	isLoggedIn: false,
	isInitialized: false,
	token: null,
	data: {
		email: '',
		username: '',
		roles: []
	}
};

export const authReducer = (state: AuthModel = defaultState, action: Action): AuthModel => {
	switch (action.type) {
		case AuthActions.LOGIN_END:
			return tassign(state, { isLoggedIn: action.payload, isInitialized: false });
		case AuthActions.LOGOUT_END:
			return tassign(state, defaultState);
		case AuthActions.GET_USER_DATA_END:
			// request failed
			if (action.payload == null)
				return tassign(state, { isInitialized: true });
			else
				return tassign(state, { data: action.payload, isInitialized: true, isLoggedIn: true });
		default:
			return state;
	}
};


