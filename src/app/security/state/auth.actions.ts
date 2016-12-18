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
	public static DELETE_USER_END = "[Auth] delete user end";

	public static EDIT_USER_INIT = "[Auth] edit user init";
	public static EDIT_USER_END = "[Auth] edit user end";

	public static UPDATE_USER_INIT = "[Auth] update user";
	public static UPDATE_USER_END = "[Auth] update user end";
}
