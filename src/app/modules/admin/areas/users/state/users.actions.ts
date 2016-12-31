import { Injectable } from "@angular/core";

@Injectable()
export class UsersActions {
	public static GET_USERS_INIT = "[Auth] get users";
	public static GET_USERS_END = "[Auth] get users end";

	public static DELETE_USER_INIT = "[Auth] delete user";
	public static DELETE_USER_END = "[Auth] delete user end";

	public static EDIT_USER_INIT = "[Auth] edit user init";
	public static EDIT_USER_END = "[Auth] edit user end";

	public static UPDATE_USER_INIT = "[Auth] update user";
	public static UPDATE_USER_END = "[Auth] update user end";
}
