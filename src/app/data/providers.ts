import { Http, XHRBackend, RequestOptions } from "@angular/http";
import { HttpWrapper } from "./http-wrapper";

export const HTTP_PROVIDER_OVERRIDES = [
	{
		provide: Http,
		useFactory: (backend: XHRBackend, options: RequestOptions) => new HttpWrapper(backend, options),
		deps: [XHRBackend, RequestOptions]
	}
]
