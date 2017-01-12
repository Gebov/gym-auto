import { Component, OnInit, ViewChild } from '@angular/core';
import { Router } from '@angular/router';
import { Store } from "@ngrx/store";
import { Observable } from "rxjs";

import { ActionImpl } from "./../../../../../../state/action.impl";
import { UsersActions } from "./../../state/users.actions";
import { UserData } from "../../state/users.model";
import { ServerCollection } from "./../../../../../../data/model";
import { AuthModel } from "./../../state/users.model";
import { EditUserComponent } from "../edit-user";

@Component({
	selector: 'gym-user-grid',
	templateUrl: './user-grid.component.html'
})
export class UserGridComponent implements OnInit {
	users$: Observable<Array<UserData>>;
	editedUser$: Observable<any>;

	@ViewChild(EditUserComponent) userProfile: EditUserComponent;

	constructor(private store: Store<any>) {
	}

	ngOnInit(): void {
		let users = this.store.select(x => {
			return (<ServerCollection<UserData>>x.usersState);
		});

		let current = this.store.select(x => {
			return x.authState;
		});

		this.editedUser$ = this.store.select(x => x.editUserState.user);
		// show all users except the current one
		this.users$ = Observable.combineLatest(users, current)
		.map(x => {
			let users: ServerCollection<UserData> = x[0];
			let current: AuthModel = x[1];

			let filtered = users.data.filter(user => {
				return user.email !== current.data.email;
			})

			return filtered;
		})

		this.store.dispatch(new ActionImpl(UsersActions.GET_USERS_INIT));
	}

	onDelete(user: UserData): void {
		this.store.dispatch(new ActionImpl(UsersActions.DELETE_USER_INIT, user));
	}

	onEdit(user: UserData): void {
		this.store.dispatch(new ActionImpl(UsersActions.EDIT_USER_INIT, user));
	}
}
