import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';
import { Router } from '@angular/router';
import { Store } from "@ngrx/store";
import { AuthActions } from "./../../state/auth.actions";
import { ActionImpl } from "./../../../state/action.impl";
import { AuthModel } from "./../../state/auth.model";
import { Observable } from "rxjs";

@Component({
  selector: 'gym-current-user',
  templateUrl: './current-user.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class CurrentUserComponent implements OnInit {
	private userName$: Observable<string>;
	constructor(private router: Router, private store: Store<any>) { }

	ngOnInit() {
		this.userName$ = this.store.select<string>(x => {
			return (<AuthModel>x.authState).data.username;
		});
	}

	logout(): void {
		this.store.dispatch(new ActionImpl(AuthActions.LOGOUT_INIT));
	}
}
