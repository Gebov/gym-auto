import { Component, OnInit, ViewChild } from '@angular/core';
import { Router } from '@angular/router';
import { Store } from "@ngrx/store";
import { ActionImpl } from "./../../../state/action.impl";
import { AuthActions } from "./../../state/auth.actions";
import { ServerCollection, UserData } from "../../state/auth.model";
import { Observable } from "rxjs";
import { GridDataResult } from "@progress/kendo-angular-grid"
import { AuthModel } from "./../../state/auth.model";
import { EditUserComponent } from "../edit-user";

@Component({
	selector: 'gym-user-grid',
	templateUrl: './user-grid.component.html'
})
export class UserGridComponent implements OnInit {
	users$: Observable<GridDataResult>;
	editedUser$: Observable<any>;

	@ViewChild(EditUserComponent) userProfile: EditUserComponent;

	constructor(private store: Store<any>) {
	}

	ngOnInit(): void {
		let users = this.store.select(x => {
			return (<ServerCollection<UserData>>x.usersState);
		});

		let current = this.store.select(x => {
			return (<AuthModel>x.authState);
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

			return {
				data: filtered,
				total: users.totalCount
			};
		})

		this.store.dispatch(new ActionImpl(AuthActions.GET_USERS_INIT));
	}

	onDelete(user: UserData): void {
		this.store.dispatch(new ActionImpl(AuthActions.DELETE_USER_INIT, user));
	}

	onEdit(user: UserData): void {
		this.store.dispatch(new ActionImpl(AuthActions.EDIT_USER_INIT, user));
	}
}
