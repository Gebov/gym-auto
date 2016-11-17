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

		return new Observable<boolean>((scrb) => {
			this.http.post(loginUrl, user, options)
                    // .map((res) => res.json())
					.subscribe((result) => {
						this.isLoggedInField = true;
						// handle any other claims here
					}, (err) => {
						this.logError(err);
						this.isLoggedInField = false;
						scrb.error(err);
					}, () => {
						scrb.next(this.isLoggedInField);
						scrb.complete();
					})
		});
	}

	public current(): Observable<UserData> {
		let currentUserlUrl = this.authUrl + '/current';
		return new Observable<UserData>((scrb) => {
			this.http.get(currentUserlUrl, { withCredentials: true })
				.map(x => x.json())
				.subscribe(x => {
					scrb.next(x);
				}, (err) => {
					this.logError(err);
				}, () => {
					scrb.complete();
				})
		});
	}

	private logError (error: Response | any): void {
		// In a real world app, we might use a remote logging infrastructure
		let errMsg: string;
		if (error instanceof Response) {
			const statusText = error.statusText || '';
			const body = (<any>error)._body;
			errMsg = `${error.status} - ${statusText} ${body}`;
		} else {
			errMsg = error.message ? error.message : error.toString();
		}

		console.log(errMsg);
	}
}

interface UserData {
	email:string,
	username: string
}
