import { Injectable } from '@angular/core';
import { Observable, Observer } from 'rxjs';
import { Http } from '@angular/http';
import { Router, Route } from "@angular/router";

import { ServerCollection } from "./../data/model";

export abstract class CrudService<T> {
	constructor(private baseSegment: string, private idFieldName: string, private http: Http) {
	}

	public get(): Observable<ServerCollection<T>> {
		let url = this.getUrl();

		return this.http.get(url)
			.map(x => <ServerCollection<T>>x.json());
	}

	public getSingle(data: T): Observable<T> {
		let url = this.getUrl(data[this.idFieldName]);

		return this.http.get(url)
			.map(x => <T>x.json());
	}

	public delete(data: T): Observable<T> {
		let url = this.getUrl(data[this.idFieldName]);

		return this.http.delete(url)
			.map(x => data);
	}

	public update(data: T): Observable<T> {
		let url = this.getUrl(data[this.idFieldName]);

		return this.http.patch(url, data)
			.map(x => data);
	}

	public create(data: T): Observable<T> {
		let url = this.getUrl();
		return this.http.post(url, data)
			.map(x => <T>x.json());
	}

	private getUrl(methodSegment?: string): string {
		if (!methodSegment)
			return this.baseSegment;

		return this.baseSegment + "/" + methodSegment;
	}
}

