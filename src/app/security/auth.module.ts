import { NgModule, ApplicationRef } from '@angular/core';
import { FormsModule } from "@angular/forms";
import { HttpModule } from "@angular/http";
import { BrowserModule } from '@angular/platform-browser';

import { AuthRoutingModule } from "./auth-routing.module";

import { GridModule } from '@progress/kendo-angular-grid';

import { AuthService } from "./services/auth.service";
import { AuthGuard } from "./auth.guard";
import { RoleDirective } from "./role.directive";
import { COMPONENTS } from "./components";
import { CurrentUserComponent } from './components/current-user';

import { addReducer } from "./../state";
import { authReducer } from "./state/auth.store";
import { STATE_PROVIDERS } from "./state";

addReducer("authState", authReducer);

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
		GridModule
	],
	exports: [
		CurrentUserComponent,
		RoleDirective
	],
	providers: [
		...STATE_PROVIDERS,
		AuthGuard,
		AuthService
	]
})
export class AuthModule {

}
