import { Injectable } from '@angular/core';
import { Observable, Observer } from 'rxjs';
import { Http, Response, Headers, RequestOptions } from '@angular/http';
import { UserData } from "./auth.model";

@Injectable()
export class AuthService {
	private authSegment = 'auth';

	constructor(private http: Http) {
	}

	public login(email: string, password: string): Observable<any> {
		let url = this.getUrl("login");
		return this.http.post(url, { email: email, password: password });

		// return new Observable<any>((scrb) => {

		// 	this.http.post(url, { email: email, password: password })
		// 		.subscribe((result) => {
		// 			this.isLoggedInField = true;
		// 			scrb.next();
		// 			scrb.complete();
		// 		}, (err) => {
		// 			scrb.error(err);
		// 		});
		// });
	}

	public register(user: any): Observable<any> {
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
