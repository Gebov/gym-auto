import { Component, OnInit, ViewChild } from '@angular/core';
import { Router } from '@angular/router';
import { Store } from "@ngrx/store";
import { Observable } from "rxjs";

import { CardType } from "./../../state/model";
import { Actions } from "./../../state/actions";
import { ActionImpl } from "./../../../../../../state/action.impl";

@Component({
	selector: 'gym-card-type-create',
	templateUrl: './create.component.html'
})
export class CreateComponent {
	cardType: any = {};
	visible: boolean;

	constructor(private store: Store<any>) {
	}

	onVisible(visible: boolean) {
		this.visible = visible;
	}

	onDone(): void {
		this.store.dispatch(new ActionImpl(Actions.CREATE_CARD_TYPES_INIT, this.cardType));
		this.cardType = {};
		this.onVisible(false);
	}
}
