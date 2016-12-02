import { AuthModel } from "./auth.model";
import { tassign } from "./../../state";
import { Action } from '@ngrx/store';

const defaultState: AuthModel = {
	isLoggedIn: false,
	token: null,
	data: null
};

export const authReducer = (state: AuthModel = defaultState, action: Action): AuthModel => {
	switch (action.type) {
		case 'SET_TOKEN':
			return tassign(state, { token: action.payload });
		case 'SET_LOGGED_IN':
			return tassign(state, { isLoggedIn: action.payload });
		case 'SET_USER_DATA':
			return tassign(state, { data: action.payload });
		default:
			return state;
	}
};
