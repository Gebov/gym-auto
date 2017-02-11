import { Effect, Actions } from '@ngrx/effects';
import { Injectable } from "@angular/core";

import { EffectsModule } from '@ngrx/effects';
import { Observable } from "rxjs";
import { Store } from "@ngrx/store";

import { Actions as CardActions } from "./actions";
import { CardsService } from "../services/cards.service";
import { ActionImpl } from "./../../../../../state/action.impl";

@Injectable()
class Effects {
	constructor(
		private update$: Actions,
		private actions: CardActions,
		private svc: CardsService
	) { }

	@Effect() getUsers$ = this.update$
		.ofType(CardActions.GET_CARDS_INIT)
		.switchMap(x => this.svc.get()
			.map((data) => {
				return new ActionImpl(CardActions.GET_CARDS_END, data);
			})
			.catch((err, observable) => { return Observable.of(new ActionImpl(CardActions.GET_CARDS_END, {})); })
		);

	@Effect() edit$ = this.update$
		.ofType(CardActions.UPDATE_CARD_INIT)
		.switchMap(x =>
			this.svc.update(x.payload).map((data) => {
				return new ActionImpl(CardActions.UPDATE_CARD_END, data);
			})
			.catch((err, observable) => {
				return Observable.of(new ActionImpl(CardActions.UPDATE_CARD_END, {}));
			})
		);

	@Effect() delete$ = this.update$
		.ofType(CardActions.DELETE_CARD_INIT)
		.switchMap(x =>
			this.svc.delete(x.payload).map((data) => {
				return new ActionImpl(CardActions.DELETE_CARD_END, data);
			})
			.catch((err, observable) => {
				return Observable.of(new ActionImpl(CardActions.DELETE_CARD_END, {}));
			})
		);

	@Effect() create$ = this.update$
		.ofType(CardActions.CREATE_CARD_INIT)
		.switchMap(x =>
			this.svc.create(x.payload).map((data) => {
				return new ActionImpl(CardActions.CREATE_CARD_END, data);
			})
			.catch((err, observable) => {
				return Observable.of(new ActionImpl(CardActions.CREATE_CARD_END, null));
			})
		);
}

export const EFFECTS_MODULE = EffectsModule.run(Effects);
