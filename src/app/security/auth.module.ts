import { NgModule, ApplicationRef } from '@angular/core';
import { FormsModule } from "@angular/forms";
import { HttpModule } from "@angular/http";
import { BrowserModule } from '@angular/platform-browser';

import { AuthRoutingModule } from "./auth-routing.module";

import { AuthService } from "./auth/auth.service";
import { AuthGuard } from "./auth/auth.guard";

import { LoginComponent } from './login/login.component';
import { CurrentUserComponent } from './current-user/current-user.component';
import { RegisterComponent } from './register/register.component';

@NgModule({
	declarations: [
		LoginComponent,
		CurrentUserComponent,
		RegisterComponent
	],
	imports: [
		BrowserModule,
		FormsModule,
		HttpModule,
		AuthRoutingModule
	],
	exports: [
		CurrentUserComponent
	],
	providers: [
		AuthGuard,
		AuthService
	]
})
export class AuthModule {
}
