
// TODO: temporary hack until ngrx update their store to support fractal state
// import { usersReducer, editedUserReducer } from "../modules/admin/state/users.reducer";

let reducers = {
	// usersState: usersReducer,
	// editUserState: editedUserReducer
};

export function getReducers() {
	return reducers;
}

export function addReducer(name: string, reducer: any): void {
	reducers[name] = reducer;
}

