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
