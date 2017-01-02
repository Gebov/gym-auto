import { NgModule, ApplicationRef } from '@angular/core';
import { FormsModule } from "@angular/forms";
import { HttpModule } from "@angular/http";
import { CommonModule } from '@angular/common';

import { AuthRoutingModule } from "./auth-routing.module";

import { SERVICES } from "./services";
import { GUARDS } from "./guards";
import { DIRECTIVES, EXPORTED_DIRECTIVES } from "./directives";
import { COMPONENTS, EXPORTED_COMPONENTS } from "./components";

import { addReducer } from "./../../state";
import { authReducer } from "./state/auth.store";
import { STATE_PROVIDERS } from "./state";

addReducer("authState", authReducer);

@NgModule({
	declarations: [
		...COMPONENTS,
		...DIRECTIVES
	],
	imports: [
		CommonModule,
		FormsModule,
		HttpModule,
		AuthRoutingModule
	],
	exports: [
		...EXPORTED_COMPONENTS,
		...EXPORTED_DIRECTIVES
	],
	providers: [
		...STATE_PROVIDERS,
		...SERVICES,
		...GUARDS
	]
})
export class AuthModule {

}
