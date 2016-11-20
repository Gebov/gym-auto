import { Http, ConnectionBackend, RequestOptions, RequestOptionsArgs, Request, Response } from "@angular/http";
import { Observable } from "rxjs";
import { Injectable } from "@angular/core";

@Injectable()
export class HttpWrapper extends Http {
	constructor(backend: ConnectionBackend, defaultOptions: RequestOptions) {
		super(backend, defaultOptions);
	}

	request(url: string | Request, options?: RequestOptionsArgs): Observable<Response> {
		return super.request(url, options).catch((response: Response, observable) => {
			let err = this.logError(response);
			return Observable.throw(err.error.message);
		});
	}

	private logError(response: Response): Err {
		let parsedErr: Err = response.json();
		let errMsg = `${response.status} ${response.statusText} - ${parsedErr.error.message}`;
		console.log(errMsg);
		return parsedErr;
	}
}

interface Err {
	error: {
		message: string;
	}
}
