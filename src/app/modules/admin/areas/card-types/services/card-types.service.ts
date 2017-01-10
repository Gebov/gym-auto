import { Injectable } from '@angular/core';
import { Observable, Observer } from 'rxjs';
import { Http } from '@angular/http';

import { CardType } from "./../state/model";
import { ServerCollection } from "./../../../../../data/server-collection";

@Injectable()
export class CardTypesService {
	private baseSegment = 'cardtypes';

	constructor(private http: Http) {
	}

	public cardTypes(): Observable<ServerCollection<CardType>> {
		let url = this.getUrl();

		return this.http.get(url)
			.map(x => <ServerCollection<CardType>>x.json());
	}

	public create(cardType: CardType): Observable<CardType> {
		let url = this.getUrl();
		return this.http.post(url, cardType)
			.map(x => x.json());
	}

	public archive(cardType: CardType): Observable<CardType> {
		let url = this.getUrl(cardType.id);
		return this.http.patch(url, { archived: cardType.archived })
			.map(x => cardType);
	}

	private getUrl(methodSegment?: string): string {
		if (!methodSegment)
			return this.baseSegment;

		return this.baseSegment + "/" + methodSegment;
	}
}
