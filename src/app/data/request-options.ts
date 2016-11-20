import { BaseRequestOptions, RequestOptions, RequestOptionsArgs } from '@angular/http';
import { Injectable } from "@angular/core";
import { AppSettings } from "./app-settings.service";

@Injectable()
export class RequestOptionsOverride extends BaseRequestOptions {
	private apiBaseUrl;
	constructor() {
		super();
		// this.apiBaseUrl = settings.getApiUrl() + "/";
		this.apiBaseUrl = "http://localhost:5000/api/";
	}

	merge(options?: RequestOptionsArgs): RequestOptions {
		options.url = this.apiBaseUrl + options.url;
		options.withCredentials = true;
		let methods = ["put", "post", "patch"];
		if (methods.indexOf(options.method.toString()) > 0) {
			let headers: any = options.headers;
			if (!headers)
				headers = {};

			headers['Content-Type'] = 'application/json';

		}

		return super.merge(options);
	}
}
