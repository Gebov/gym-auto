import { Component, OnInit, ViewChild } from '@angular/core';
import { Router } from '@angular/router';
import { Store } from "@ngrx/store";
import { Observable } from "rxjs";

import { Card, Visit } from "./../../state/model";
import { Actions } from "./../../state/actions";
import { ActionImpl } from "./../../../../../../state/action.impl";

@Component({
	selector: 'gym-visits',
	templateUrl: './visit-grid.component.html'
})
export class VisitGridComponent {
	visits$: Observable<Array<Visit>>;

	constructor(private store: Store<any>) {
		this.visits$ = this.store.select(x => {
			let selectedCard = (x.selectedCard).card;
			if (selectedCard != null)
				return selectedCard.visits;
			return [];
		});
	}

	onDelete(visit: Visit) {

	}

	onHideVisits() {
		this.store.dispatch(new ActionImpl(Actions.SHOW_VISITS_END));
	}
}
