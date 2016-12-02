import { Injectable } from "@angular/core";

@Injectable()
export class AuthActions {
	public static LOGIN = "[Auth] Login user";
	public static LOGIN_SUCCESS = "[Auth] Login success";
	public static LOGOUT = "[Auth] Logout user";
}
