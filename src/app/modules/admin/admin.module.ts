import { NgModule, ApplicationRef } from '@angular/core';
import { HttpModule } from "@angular/http";
import { CommonModule } from '@angular/common';

import { GridModule } from '@progress/kendo-angular-grid';
import { DialogModule } from '@progress/kendo-angular-dialog';
import { EffectsModule } from '@ngrx/effects';

import { AdminRoutingModule } from "./admin-routing.module";

import { SERVICES } from "./services";
import { COMPONENTS } from "./components";

import { addReducer } from "./../../state";
import { usersReducer, editedUserReducer } from "./state/users.reducer";
import { UsersEffects } from "./state/users.effects";

import { STATE_PROVIDERS } from "./state";

addReducer("usersState", usersReducer);
addReducer("editUserState", editedUserReducer);

@NgModule({
	declarations: [
		...COMPONENTS
	],
	imports: [
		CommonModule,
		HttpModule,
		GridModule,
		DialogModule,
		// AdminRoutingModule,
		EffectsModule.run(UsersEffects)
	],
	providers: [
		...STATE_PROVIDERS,
		...SERVICES
	]
})
export class AdminModule {

}
