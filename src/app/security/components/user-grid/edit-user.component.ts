import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Store } from "@ngrx/store";
import { ActionImpl } from "./../../../state/action.impl";
import { AuthActions } from "./../../state/auth.actions";
import { ServerCollection, UserData } from "../../state/auth.model";
import { Observable } from "rxjs";
import { AuthModel } from "./../../state/auth.model";

@Component({
	selector: 'gym-edit-user',
	template: require('./edit-user.component.html')
})
export class EditUserComponent implements OnInit {
	roles$: Observable<Array<RoleModel>>;

	constructor(private store: Store<any>) {

	}

	ngOnInit() {
		// TODO: these roles should come from the server
		let roles =  new Observable<Array<string>>(x => {
			x.next(["Administrator", "Teacher", "Student"]);
			x.complete();
		});

		let currentRoles = this.store.select(x => {
			return (<AuthModel>x.authState).data.roles;
		});

		this.roles$ = Observable.combineLatest(roles, currentRoles).map(x => {
			let roles: Array<string> = x[0];
			let currentRoles: Array<string> = x[1];

			let result: Array<RoleModel> = [];
			roles.forEach(role => {
				let selected = false;
				if (currentRoles.indexOf(role) !== -1)
					selected = true;

				result.push({
					name: role,
					selected: selected
				});
			})

			return result;
		})
	}

	onSubmit(roles) {
		// TODO: this must be a component with a custom value accessor for the checkboxes

		let currentUser$ = this.store.select(x => {
			return (<AuthModel>x.authState).data;
		});
		currentUser$.subscribe(user => {
			let selectedRoles = [];
			let hasChanges = false;
			for (var i = 0; i < roles.selectedOptions.length; i++) {
				let currentRole = roles.selectedOptions[i].value;
				selectedRoles.push(currentRole);
			}

			// TODO: check for diffrence
			user.roles = selectedRoles;

			this.store.dispatch(new ActionImpl(AuthActions.UPDATE_USER_INIT, user));
		});
	}
}

interface RoleModel {
	name: string;
	selected: boolean;
}
