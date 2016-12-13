import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Store } from "@ngrx/store";
import { ActionImpl } from "./../../../state/action.impl";
import { AuthActions } from "./../../state/auth.actions";
import { ServerCollection, UserData } from "../../state/auth.model";
import { Observable } from "rxjs";

@Component({
	selector: 'gym-edit-user',
	template: require('./edit-user.component.html')
})
export class EditUserComponent implements OnInit {

	constructor(private store: Store<any>) {

	}

	ngOnInit() {

	}
}
