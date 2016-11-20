import { Injectable } from '@angular/core';
import { Observable, Observer } from 'rxjs';
import { IUser } from './user';
import { Http, Response, Headers, RequestOptions } from '@angular/http';
import { AppSettings } from './../../data/app-settings.service';

@Injectable()
export class AuthService {
	private authUrl;
	private isLoggedInField: boolean = false;

	constructor (private http: Http, private settings: AppSettings) {
		this.authUrl = settings.getApiUrl() + '/auth';
	}

	public isLoggedIn(): boolean {
		return this.isLoggedInField;
	}

	public login(user: IUser): Observable<boolean> {
		let loginUrl = this.authUrl + '/login';
		let headers = new Headers({ 'Content-Type': 'application/json' });
    	let options = new RequestOptions({ headers: headers });
		this.isLoggedInField = false;

		return new Observable<boolean>((scrb) => {
			this.http.post(loginUrl, user, options)
                    // .map((res) => res.json())
					.subscribe((result) => {
						this.isLoggedInField = true;
						scrb.next(this.isLoggedInField);
						scrb.complete();
						// handle any other claims here
					});
		});
	}

	public current(): Observable<UserData> {
		let currentUserlUrl = this.authUrl + '/current';
		return new Observable<UserData>((scrb) => {
			this.http.get(currentUserlUrl, { withCredentials: true })
				.map(x => x.json())
				.subscribe(x => {
					scrb.next(x);
				}, null, () => {
					scrb.complete();
				})
		});
	}
}

interface UserData {
	email:string,
	username: string
}
