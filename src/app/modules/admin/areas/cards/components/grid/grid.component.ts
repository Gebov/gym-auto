import { Component, OnInit, ViewChild } from '@angular/core';
import { Router } from '@angular/router';
import { Store } from "@ngrx/store";
import { Observable } from "rxjs";

import { Card } from "./../../state/model";
import { ServerCollection } from "./../../../../../../data/model";
import { Actions } from "./../../state/actions";
import { ActionImpl } from "./../../../../../../state/action.impl";

@Component({
	selector: 'gym-cards',
	templateUrl: './grid.component.html'
})
export class CardsGridComponent {
	cards$: Observable<Array<Card>>;

	constructor(private store: Store<any>) {
	}

	ngOnInit(): void {
		this.cards$ = this.store.select(x => {
			return (<ServerCollection<Card>>x.cardsState).data;
		});

		this.store.dispatch(new ActionImpl(Actions.GET_CARDS_INIT));
	}

	onEdit(card: Card): void {
		this.store.dispatch(new ActionImpl(Actions.EDIT_CARD_INIT, card));
	}

	onDelete(card: Card): void {
		this.store.dispatch(new ActionImpl(Actions.DELETE_CARD_INIT, card));
	}

	onShowVisits(card: Card): void {
		this.store.dispatch(new ActionImpl(Actions.SHOW_VISITS_INIT, card));
	}
}
