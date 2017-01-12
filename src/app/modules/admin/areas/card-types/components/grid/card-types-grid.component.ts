import { Component, OnInit, ViewChild } from '@angular/core';
import { Router } from '@angular/router';
import { Store } from "@ngrx/store";
import { Observable } from "rxjs";

import { CardType } from "./../../state/model";
import { ServerCollection } from "./../../../../../../data/model";
import { Actions } from "./../../state/actions";
import { ActionImpl } from "./../../../../../../state/action.impl";

@Component({
	selector: 'gym-card-types',
	templateUrl: './card-types-grid.component.html'
})
export class CardTypesComponent {
	cardTypes$: Observable<Array<CardType>>;

	constructor(private store: Store<any>) {
	}

	ngOnInit(): void {
		this.cardTypes$ = this.store.select(x => {
			return (<ServerCollection<CardType>>x.cardTypesState).data;
		});

		this.store.dispatch(new ActionImpl(Actions.GET_CARD_TYPES_INIT));
	}

	onArchive(cardType: CardType): void {
		this.store.dispatch(new ActionImpl(Actions.ARCHIVE_CARD_TYPE_INIT, {
			id: cardType.id,
			archived: !cardType.archived
		}));
	}
}
