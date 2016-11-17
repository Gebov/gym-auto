import { Injectable } from "@angular/core";

@Injectable()
export class AppSettings {
	private readonly urlCacheKey = "apiurl";

	getApiUrl(): string {
		return localStorage.getItem(this.urlCacheKey);
	}

	setApiUrl(url: string): void {
		localStorage.setItem(this.urlCacheKey, url);
	}
}
