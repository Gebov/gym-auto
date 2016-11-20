import { Injectable } from '@angular/core';
import { Observable, Observer } from 'rxjs';
import { IUser } from './user';
import { Http, Response, Headers, RequestOptions } from '@angular/http';

@Injectable()
export class AuthService {
	private authSegment = 'auth';
	private isLoggedInField: boolean = false;

	constructor(private http: Http) {
	}

	public isLoggedIn(): boolean {
		return this.isLoggedInField;
	}

	public login(email: string, password: string): Observable<boolean> {
		this.isLoggedInField = false;

		return new Observable<boolean>((scrb) => {
			let url = this.getUrl("login");
			this.http.post(url, { email: email, password: password })
				.subscribe((result) => {
					this.isLoggedInField = true;
					scrb.next(this.isLoggedInField);
					scrb.complete();
				});
		});
	}

	public register(user: IUser): Observable<any> {
		return new Observable<any>((scrb) => {
			let url = this.getUrl("register");
			this.http.post(url, user)
				.subscribe((result) => {
					scrb.next();
					scrb.complete();
				});
		});
	}

	public logout(): Observable<any> {
		if (this.isLoggedInField) {
			this.isLoggedInField = false;
			return new Observable<any>((scrb) => {
				let url = this.getUrl("logout");
				this.http.post(url, null)
					.subscribe((result) => {
						scrb.next();
						scrb.complete();
					});
			});
		}
	}

	public current(): Observable<UserData> {
		return new Observable<UserData>((scrb) => {
			this.http.get(this.getUrl("current"))
				.map(x => x.json())
				.subscribe(x => {
					scrb.next(x);
					scrb.complete();
				});
		});
	}

	private getUrl(methodSegment: string): string {
		return this.authSegment + "/" + methodSegment;
	}
}

interface UserData {
	email: string,
	username: string
}
