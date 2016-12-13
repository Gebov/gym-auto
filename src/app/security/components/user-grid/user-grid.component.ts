import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Store } from "@ngrx/store";
import { ActionImpl } from "./../../../state/action.impl";
import { AuthActions } from "./../../state/auth.actions";
import { ServerCollection, UserData } from "../../state/auth.model";
import { Observable } from "rxjs";
import { GridDataResult } from "@progress/kendo-angular-grid"
import { AuthModel } from "./../../state/auth.model";

@Component({
	selector: 'gym-user-grid',
	template: require('./user-grid.component.html')
})
export class UserGridComponent implements OnInit {
	private users$: Observable<GridDataResult>;

	constructor(private store: Store<any>) {

	}

	ngOnInit() {
		let users = this.store.select(x => {
			return (<ServerCollection<UserData>>x.usersState);
		});

		let current = this.store.select(x => {
			return (<AuthModel>x.authState);
		});

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
}
