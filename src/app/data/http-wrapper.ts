import { Http, ConnectionBackend, RequestOptions, RequestOptionsArgs, Request, Response, RequestMethod } from "@angular/http";
import { Observable } from "rxjs";
import { Injectable } from "@angular/core";

@Injectable()
export class HttpWrapper extends Http {
	constructor(backend: ConnectionBackend, defaultOptions: RequestOptions) {
		super(backend, defaultOptions);
	}

	request(url: string | Request, options?: RequestOptionsArgs): Observable<Response> {
		this.modifyRequest(<Request>url);
		return super.request(url, options)
		.catch((response: Response, observable) => {
			let err = this.handleError(response);
			return Observable.throw(err.error.message);
		});
	}

	private handleError(response: Response) : Err {
		let err = this.logError(response);
		if (response.status == 401) {
			let message = "The authentication session expires or the user is not authorised.";
			console.log(message);
			//this.router.navigate(["/login"], { queryParams: { message: message + "Please log in" } }) // TODO: navigate to login page
			window.location.href = window.location.href + "?message=" + message;
		}

		return err;
	}

	private logError(response: Response): Err {
		let parsedErr: Err = response.json();
		let errMsg = `${response.status} ${response.statusText} - ${parsedErr.error.message}`;
		console.log(errMsg);
		return parsedErr;
	}

	private modifyRequest(req: Request): void {
		req.url = "http://localhost:5000/api/" + req.url; // TODO: should be from configiration
		req.withCredentials = true;
		let methods = [RequestMethod.Put, RequestMethod.Post, RequestMethod.Patch];

		if (methods.indexOf(req.method) > 0) {
			let headers = req.headers;
			headers.set("Content-Type", "application/json");
		}
	}
}

interface Err {
	error: {
		message: string;
	}
}
