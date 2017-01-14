import { Component, OnInit, ViewChild } from '@angular/core';
import { Router } from '@angular/router';
import { Store } from "@ngrx/store";
import { Observable } from "rxjs";

import { CardType } from "./../../state/model";
import { Actions } from "./../../state/actions";
import { ActionImpl } from "./../../../../../../state/action.impl";
import { IItemMetaData, FieldType, INumberValidation } from "./../../../../../shared/components/create/create.component";

@Component({
	selector: 'gym-card-type-create',
	templateUrl: './create.component.html'
})
export class CreateComponent implements OnInit {
	metadata: IItemMetaData;

	constructor(private store: Store<any>) {
	}

	ngOnInit() {
		this.metadata = {
			fields: [
				{
					name: "title",
					title: "Title",
					type: FieldType.Text,
					validation: {
						required: true,
						minLength: 3
					}
				},
				{
					name: "visitCount",
					title: "VisitsCount",
					type: FieldType.Number,
					validation: {
						min: 1
					},
					defaultValue: 1
				},
				{
					name: "validity",
					title: "Validity",
					type: FieldType.Number,
					validation: {
						min: 1
					},
					defaultValue: 1
				},
				{
					name: "price",
					title: "Price",
					type: FieldType.Number,
					validation: {
						min: 0
					},
					defaultValue: 0
				}
			]
		}
	}

	onDone(data): void {
		this.store.dispatch(new ActionImpl(Actions.CREATE_CARD_TYPES_INIT, data));
	}
}
