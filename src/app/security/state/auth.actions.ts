import { Injectable } from "@angular/core";

@Injectable()
export class AuthActions {
	public static LOGIN_INIT = "[Auth] Login user begin";
	public static LOGIN_END = "[Auth] Login user end";
	public static LOGOUT_INIT = "[Auth] Logout user begin";
	public static LOGOUT_END = "[Auth] Logout user end";
	public static GET_USER_DATA = "[Auth] Get user data";
	public static GET_USER_DATA_END = "[Auth] Get user data end";
	public static REGISTER_INIT = "[Auth] register";
	public static REGISTER_END = "[Auth] register end";

	public static GET_USERS_INIT = "[Auth] get users";
	public static GET_USERS_END = "[Auth] get users end";
	public static DELETE_USER_INIT = "[Auth] delete user";
	public static DELETE_USER_END = "[Auth] delete users end";
}
