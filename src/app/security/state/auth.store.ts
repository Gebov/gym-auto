import { AuthModel, ServerCollection, UserData } from "./auth.model";
import { tassign } from "./../../state";
import { Action } from '@ngrx/store';
import { AuthActions } from "./auth.actions";

const defaultState: AuthModel = {
	isLoggedIn: false,
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
			return tassign(state, { isLoggedIn: action.payload });
		case AuthActions.LOGOUT_END:
			return tassign(state, defaultState);
		case AuthActions.GET_USER_DATA_END:
			return tassign(state, { data: action.payload });
		default:
			return state;
	}
};

const defaultUsersState: ServerCollection<UserData> = {
	data: [],
	totalCount: 0
}

export const usersReducer = (state: ServerCollection<UserData> = defaultUsersState, action: Action): ServerCollection<UserData> => {
	switch (action.type) {
		case AuthActions.GET_USERS_END:
			return tassign(state, action.payload);
		default:
			return state;
	}
};
