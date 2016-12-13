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

const defaultUsersState: ServerCollection<UserData> = {
	data: [],
	totalCount: 0
}

export const usersReducer = (state: ServerCollection<UserData> = defaultUsersState, action: Action): ServerCollection<UserData> => {
	switch (action.type) {
		case AuthActions.GET_USERS_END:
			return tassign(state, action.payload);
		case AuthActions.DELETE_USER_END:
			let deleteIndex = state.data.findIndex((user) => {
				return user.email == action.payload.email;
			});
			if (deleteIndex !== -1) {
				state.data.splice(deleteIndex, 1);
				return tassign(state);
			}
			return state;
		case AuthActions.UPDATE_USER_END:
			let updateIndex = state.data.findIndex((user) => {
				return user.email == action.payload.email;
			});
			if (updateIndex != -1) {
				state.data.splice(updateIndex, 0, action.payload);
				return tassign(state);
			}
			return state;
		default:
			return state;
	}
};
