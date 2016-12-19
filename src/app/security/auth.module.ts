import { NgModule, ApplicationRef } from '@angular/core';
import { FormsModule } from "@angular/forms";
import { HttpModule } from "@angular/http";
import { BrowserModule } from '@angular/platform-browser';

import { AuthRoutingModule } from "./auth-routing.module";

import { GridModule } from '@progress/kendo-angular-grid';
import { DialogModule } from '@progress/kendo-angular-dialog';

import { SERVICES } from "./services";
import { GUARDS } from "./guards";
import { RoleDirective } from "./role.directive";
import { COMPONENTS, EXPORTED_COMPONENTS } from "./components";

import { addReducer } from "./../state";
import { authReducer, usersReducer, editedUserReducer } from "./state/auth.store";
import { STATE_PROVIDERS } from "./state";

// TODO: consider combining these under a common reducer or namespace
addReducer("authState", authReducer);
addReducer("usersState", usersReducer);
addReducer("editUserState", editedUserReducer);

@NgModule({
	declarations: [
		...COMPONENTS,
		RoleDirective
	],
	imports: [
		BrowserModule,
		FormsModule,
		HttpModule,
		AuthRoutingModule,
		GridModule,
		DialogModule
	],
	exports: [
		...EXPORTED_COMPONENTS,
		RoleDirective
	],
	providers: [
		...STATE_PROVIDERS,
		...SERVICES,
		...GUARDS
	]
})
export class AuthModule {

}
