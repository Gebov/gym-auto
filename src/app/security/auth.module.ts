import { NgModule, ApplicationRef } from '@angular/core';
import { FormsModule } from "@angular/forms";
import { HttpModule } from "@angular/http";
import { BrowserModule } from '@angular/platform-browser';

import { AuthRoutingModule } from "./auth-routing.module";

import { AuthService } from "./auth/auth.service";
import { AuthGuard } from "./auth/auth.guard";
import { RoleDirective } from "./auth/role.directive";

import { LoginComponent } from './login/login.component';
import { CurrentUserComponent } from './current-user/current-user.component';
import { RegisterComponent } from './register/register.component';
import { addReducer } from "./../reducers";
import { authReducer } from "./auth/auth.store";

addReducer("authModel", authReducer);

@NgModule({
	declarations: [
		LoginComponent,
		CurrentUserComponent,
		RegisterComponent,
		RoleDirective
	],
	imports: [
		BrowserModule,
		FormsModule,
		HttpModule,
		AuthRoutingModule
	],
	exports: [
		CurrentUserComponent,
		RoleDirective
	],
	providers: [
		AuthGuard,
		AuthService
	]
})
export class AuthModule {

}
