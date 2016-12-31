import { ServerCollection, UserData, EditedUser } from "./users.model";
import { tassign } from "./../../../../../state";
import { Action } from '@ngrx/store';
import { UsersActions } from "./users.actions";

const defaultUsersState: ServerCollection<UserData> = {
	data: [],
	totalCount: 0
}

export const usersReducer = (state: ServerCollection<UserData> = defaultUsersState, action: Action): ServerCollection<UserData> => {
	switch (action.type) {
		case UsersActions.GET_USERS_END:
			return tassign(state, action.payload);
		case UsersActions.DELETE_USER_END:
			let deleteIndex = state.data.findIndex((user) => {
				return user.email == action.payload.email;
			});
			if (deleteIndex !== -1) {
				state.data.splice(deleteIndex, 1);
				return tassign(state);
			}
			return state;
		case UsersActions.UPDATE_USER_END:
			let updateIndex = state.data.findIndex((user) => {
				return user.email == action.payload.email;
			});

			if (updateIndex != -1) {
				let toUpdate = state.data[updateIndex];
				toUpdate = Object.assign(toUpdate, action.payload);
				return tassign(state);
			}

			return state;
		default:
			return state;
	}
};

const editUserState: EditedUser = {
	isBusy: false,
	errors: [],
	user: null
}

export const editedUserReducer = (state: EditedUser = editUserState, action: Action): EditedUser => {
	switch (action.type) {
		case UsersActions.UPDATE_USER_INIT:
			return tassign(state, { isBusy: true });
		case UsersActions.UPDATE_USER_END:
			return tassign(state, { isBusy: false, user: null });
		case UsersActions.EDIT_USER_INIT:
			return tassign(state, { user: action.payload });
		case UsersActions.EDIT_USER_END:
			return tassign(state, { user: null });
	}

	return state;
}
