import { Injectable } from '@angular/core';
import { Observable, Observer } from 'rxjs';
import { IUser } from './user';
import { Http, Response, Headers, RequestOptions } from '@angular/http';
import { AppSettings } from './../../data/app-settings.service';

@Injectable()
export class AuthService {
	private authSegment = 'auth';
	private isLoggedInField: boolean = false;

	constructor(private http: Http) {
	}

	public isLoggedIn(): boolean {
		return this.isLoggedInField;
	}

	public login(user: IUser): Observable<boolean> {
		this.isLoggedInField = false;

		return new Observable<boolean>((scrb) => {
			let url = this.getUrl("login");
			this.http.post(url, user)
				.subscribe((result) => {
					this.isLoggedInField = true;
					scrb.next(this.isLoggedInField);
					scrb.complete();
				});
		});
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
