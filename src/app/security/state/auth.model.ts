export interface AuthModel {
	isLoggedIn: boolean;
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
