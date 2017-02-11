import { Injectable } from '@angular/core';
import { Http } from '@angular/http';

import { Card } from "./../state/model";
import { CrudService } from "./../../../../../services/crud.service";

@Injectable()
export class CardsService extends CrudService<Card> {
	constructor(http: Http) {
		super("cards", "id", http);
	}
}
