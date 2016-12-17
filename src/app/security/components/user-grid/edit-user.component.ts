import { Component, OnChanges, Input, SimpleChanges, EventEmitter, Output } from '@angular/core';
import { Router } from '@angular/router';
import { Store } from "@ngrx/store";
import { ActionImpl } from "./../../../state/action.impl";
import { AuthActions } from "./../../state/auth.actions";
import { ServerCollection, UserData } from "../../state/auth.model";
import { Observable, Subject, ReplaySubject } from "rxjs";
import { AuthModel } from "./../../state/auth.model";

@Component({
	selector: 'gym-edit-user',
	template: require('./edit-user.component.html')
})
export class EditUserComponent implements OnChanges {
	roles$: Subject<Array<RoleModel>> = new ReplaySubject<Array<RoleModel>>(1);
	@Input() userData: UserData;
	@Output() close = new EventEmitter(false);

	constructor(private store: Store<any>) {

	}

	ngOnChanges(changes: SimpleChanges): void {
		let userData = <UserData>changes["userData"].currentValue;
		if (!userData)
			return;

		let currentRoles: Observable<Array<string>> = Observable.of(userData.roles);

		// TODO: these roles should come from the server
		let serverRoles: Observable<Array<string>> = Observable.of(["Administrator", "Teacher", "Student"]);

		Observable.combineLatest(serverRoles, currentRoles).subscribe(x => {
			let serverRoles: Array<string> = x[0];
			let currentRoles: Array<string> = x[1];

			let result: Array<RoleModel> = [];
			serverRoles.forEach(role => {
				let selected = false;
				if (currentRoles.indexOf(role) !== -1)
					selected = true;

				result.push({
					name: role,
					selected: selected
				});
			});

			this.roles$.next(result);
		});
	}

	onDone(roles) {
		if (roles) {
			// TODO: this must be a component with a custom value accessor for the checkboxes
			let selectedRoles = [];
			for (var i = 0; i < roles.selectedOptions.length; i++) {
				let currentRole = roles.selectedOptions[i].value;
				selectedRoles.push(currentRole);
			}

			this.userData.roles = selectedRoles;
			this.store.dispatch(new ActionImpl(AuthActions.UPDATE_USER_INIT, this.userData));
		}

		this.close.emit();
		return false;
	}
}

interface RoleModel {
	name: string;
	selected: boolean;
}
