import { Injectable } from '@angular/core';
import { Http } from '@angular/http';

import { CardType } from "./../state/model";
import { CrudService } from "./../../../../../services/crud.service";

@Injectable()
export class CardTypesService extends CrudService<CardType> {
	constructor(http: Http) {
		super("cardtypes", "id", http);
	}
}
