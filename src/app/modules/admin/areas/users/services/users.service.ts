import { Injectable } from '@angular/core';
import { Observable, Observer } from 'rxjs';
import { Http, Response, Headers, RequestOptions } from '@angular/http';
import { UserData } from "./../state/users.model";
import { ServerCollection } from "./../../../../../data/server-collection";

@Injectable()
export class UsersService {
	private baseSegment = 'users';

	constructor(private http: Http) {
	}

	public users(): Observable<ServerCollection<UserData>> {
		let url = this.getUrl();

		return this.http.get(url)
			.map(x => <ServerCollection<UserData>>x.json());
	}

	public deleteUser(data: UserData): Observable<UserData> {
		let url = this.getUrl(data.email);

		return this.http.delete(url)
			.map(x => data);
	}

	public updateUser(data: UserData): Observable<UserData> {
		let url = this.getUrl(data.email);

		return this.http.patch(url, data)
			.map(x => data);
	}

	private getUrl(methodSegment?: string): string {
		if (!methodSegment)
			return this.baseSegment;

		return this.baseSegment + "/" + methodSegment;
	}
}
