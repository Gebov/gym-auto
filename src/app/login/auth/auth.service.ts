import { Injectable } from '@angular/core';
import { Observable, Observer } from 'rxjs';
import { IUser } from './user';
import { Http, Response, Headers, RequestOptions } from '@angular/http';

@Injectable()
export class AuthService {
	private loginUrl = "http://localhost:5000/api/jwt";
	constructor (private http: Http) {}

	private isLoggedInField: boolean = false;

	public isLoggedIn(): boolean {
		return this.isLoggedInField;
	}

	public login(user: IUser): Observable<boolean> {
		let headers = new Headers({ 'Content-Type': 'application/json' });
    	let options = new RequestOptions({ headers: headers });

		return new Observable<boolean>((scrb) => {
			this.http.post(this.loginUrl, user, options)
                    .map((res) => res.json())
					.subscribe((result) => {
						this.isLoggedInField = true;
						// handle any other claims here
					}, (err) => {
						this.logError(err);
						this.isLoggedInField = false;
					}, () => {
						scrb.next(this.isLoggedInField);
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
