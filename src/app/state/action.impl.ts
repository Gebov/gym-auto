import { Action } from "@ngrx/store";

export class ActionImpl implements Action {
	constructor(public type: string, public payload?: any) {
	}
}
