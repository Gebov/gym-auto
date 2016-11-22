import { Http, XHRBackend, RequestOptions } from "@angular/http";
import { HttpWrapper } from "./http-wrapper";
import { RequestOptionsOverride } from "./request-options";
import { AppSettings } from "./app-settings.service";

export const HTTP_PROVIDER_OVERRIDES = [
	// {
	// 	provide: RequestOptions,
	// 	useClass: RequestOptionsOverride
	// 	// deps: [AppSettings]
	// },
	{
		provide: Http,
		useFactory: (backend: XHRBackend, options: RequestOptions) => new HttpWrapper(backend, options),
		deps: [XHRBackend, RequestOptions]
	},

]
