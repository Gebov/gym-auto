import { Injectable } from '@angular/core';
import { Observable, Observer } from 'rxjs';
import { IUser } from './user';

@Injectable()
export class AuthService {
	private isLoggedInField: boolean = false;

	public isLoggedIn(): boolean {
		return this.isLoggedInField;
	}

	public login(user: IUser): Observable<boolean> {
		this.isLoggedInField = this.checkUser(user);
		return Observable.of(this.isLoggedInField);
	}

	private checkUser(user: IUser): boolean {
		if (user.email === 'test@test.com' && user.password == 'test')
			return true;

		return false;
	}
}
