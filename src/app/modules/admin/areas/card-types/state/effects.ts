import { Effect, Actions } from '@ngrx/effects';
import { Injectable } from "@angular/core";

import { EffectsModule } from '@ngrx/effects';
import { Observable } from "rxjs";
import { Store } from "@ngrx/store";

import { Actions as CardTypesActions } from "./actions";
import { CardTypesService } from "../services/card-types.service";
import { ActionImpl } from "./../../../../../state/action.impl";

@Injectable()
class Effects {
	constructor(
		private update$: Actions,
		private actions: CardTypesActions,
		private svc: CardTypesService
	) { }

	@Effect() getUsers$ = this.update$
		.ofType(CardTypesActions.GET_CARD_TYPES_INIT)
		.switchMap(x => this.svc.cardTypes()
			.map((data) => {
				return new ActionImpl(CardTypesActions.GET_CARD_TYPES_END, data);
			})
			.catch((err, observable) => { return Observable.of(new ActionImpl(CardTypesActions.GET_CARD_TYPES_END, {})); })
		);

	@Effect() archive$ = this.update$
		.ofType(CardTypesActions.ARCHIVE_CARD_TYPE_INIT)
		.switchMap(x =>
			this.svc.archive(x.payload).map((data) => {
				return new ActionImpl(CardTypesActions.ARCHIVE_CARD_TYPE_END, data);
			})
			.catch((err, observable) => {
				return Observable.of(new ActionImpl(CardTypesActions.ARCHIVE_CARD_TYPE_END, {}));
			})
		);

	@Effect() create$ = this.update$
		.ofType(CardTypesActions.CREATE_CARD_TYPES_INIT)
		.switchMap(x =>
			this.svc.create(x.payload).map((data) => {
				return new ActionImpl(CardTypesActions.CREATE_CARD_TYPES_END, data);
			})
			.catch((err, observable) => {
				return Observable.of(new ActionImpl(CardTypesActions.CREATE_CARD_TYPES_END, {}));
			})
		);
}

export const EFFECTS_MODULE = EffectsModule.run(Effects);
