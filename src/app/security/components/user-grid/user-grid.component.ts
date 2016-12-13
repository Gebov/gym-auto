import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Store } from "@ngrx/store";
import { ActionImpl } from "./../../../state/action.impl";
import { AuthActions } from "./../../state/auth.actions";
import { ServerCollection, UserData } from "../../state/auth.model";
import { Observable } from "rxjs";
import { GridDataResult } from "@progress/kendo-angular-grid"
@Component({
	selector: 'gym-user-grid',
	template: require('./user-grid.component.html')
})
export class UserGridComponent implements OnInit {
	private users$: Observable<GridDataResult>;

	constructor(private store: Store<any>) {

	}

	ngOnInit() {
		this.users$ = this.store.select(x => {
			let state = (<ServerCollection<UserData>>x.usersState);
			return {
				data: state.data,
				total: state.totalCount
			};
		});

		this.store.dispatch(new ActionImpl(AuthActions.GET_USERS_INIT));
	}

	onDelete(user: UserData) {
		this.store.dispatch(new ActionImpl(AuthActions.DELETE_USER_INIT, user));
	}
}
