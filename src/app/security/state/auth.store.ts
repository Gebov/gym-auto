import { AuthModel, ServerCollection, UserData } from "./auth.model";
import { tassign } from "./../../state";
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
			return tassign(state, { isLoggedIn: action.payload });
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

const defaultUsersState: ServerCollection<UserData> = {
	data: [],
	totalCount: 0
}

export const usersReducer = (state: ServerCollection<UserData> = defaultUsersState, action: Action): ServerCollection<UserData> => {
	switch (action.type) {
		case AuthActions.GET_USERS_END:
			return tassign(state, action.payload);
		case AuthActions.DELETE_USER_END:
			let index = state.data.findIndex((user) => {
				return user.email == action.payload.email;
			});
			if (index !== -1) {
				state.data.splice(index, 1);
				return tassign(state);
			}
		default:
			return state;
	}
};
