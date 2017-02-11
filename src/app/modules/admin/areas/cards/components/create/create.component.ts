import { Component, OnInit, ViewChild } from '@angular/core';
import { Router } from '@angular/router';
import { Store } from "@ngrx/store";
import { Observable } from "rxjs";

import { Card } from "./../../state/model";
import { Actions } from "./../../state/actions";
import { ActionImpl } from "./../../../../../../state/action.impl";
import { IItemMetaData, FieldType, INumberValidation } from "./../../../../../shared/components/create/create.component";

@Component({
	selector: 'gym-card-create',
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
					name: "userId",
					title: "User",
					type: FieldType.Text,
					validation: {
						required: true,
						minLength: 3
					}
				},
				{
					name: "paid",
					title: "Paid",
					type: FieldType.Boolean,
					defaultValue: true
				},
				{
					name: "templateId",
					title: "Template",
					type: FieldType.Text
				},
				{
					name: "price",
					title: "Price",
					type: FieldType.Number,
					validation: {
						required: false
					},
					defaultValue: null
				}
			]
		}
	}

	onDone(data): void {
		this.store.dispatch(new ActionImpl(Actions.CREATE_CARD_INIT, data));
	}
}
