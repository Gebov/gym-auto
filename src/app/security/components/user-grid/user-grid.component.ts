import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Store } from "@ngrx/store";
import { ActionImpl } from "./../../../state/action.impl";
import { AuthActions } from "./../../state/auth.actions";

@Component({
	selector: 'gym-user-grid',
	template: require('./user-grid.component.html')
})
export class UserGridComponent {
	private gridData: any[] = [{
			"email": 1,
			"username": "Chai"
		}];
}
