export interface AuthModel {
	isLoggedIn: boolean;
	isInitialized: boolean;
	token: string,
	data: UserData
}

export interface UserData {
	email: string,
	username: string,
	roles: Array<string>
}

export interface ServerCollection<T> {
	data: Array<T>,
	totalCount: number
}

export interface EditedUser {
	isBusy: boolean,
	errors: Array<any>,
	user: UserData
}
