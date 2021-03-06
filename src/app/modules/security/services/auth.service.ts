import { Injectable } from '@angular/core';
import { Observable, Observer } from 'rxjs';
import { Http, Response, Headers, RequestOptions } from '@angular/http';
import { UserData } from "./../state/auth.model";

@Injectable()
export class AuthService {
	private authSegment = 'auth';

	constructor(private http: Http) {
	}

	public login(email: string, password: string, isPersistent: boolean): Observable<boolean> {
		let url = this.getUrl("login");
		return this.http.post(url, { email, password, isPersistent })
			.map(x => x.status == 200);
	}

	public register(user: any): Observable<boolean> {
		let url = this.getUrl("register");

		return this.http.post(url, user)
			.map(x => x.status == 200);
	}

	public logout(): Observable<boolean> {
		let url = this.getUrl("logout");

		return this.http.post(url, null)
			.map(x => x.status == 200);;
	}

	public current(): Observable<UserData> {
		let url = this.getUrl("current");

		return this.http.get(url)
			.map(x => <UserData>x.json());
	}

	private getUrl(methodSegment: string): string {
		return this.authSegment + "/" + methodSegment;
	}
}
