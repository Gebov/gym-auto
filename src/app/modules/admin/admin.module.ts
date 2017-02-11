import { NgModule, ApplicationRef } from '@angular/core';
import { HttpModule } from "@angular/http";
import { CommonModule } from '@angular/common';
import { EffectsModule } from '@ngrx/effects';
import { FormsModule } from "@angular/forms";
import { SharedModule } from "../shared";
import { AuthModule } from "./../security/auth.module";

// import { AdminRoutingModule } from "./admin-routing.module";

import { COMPONENTS, EFFECTS, PROVIDERS } from "./areas";

@NgModule({
	declarations: [
		...COMPONENTS
	],
	imports: [
		AuthModule,
		CommonModule,
		HttpModule,
		FormsModule,
		SharedModule,
		// AdminRoutingModule,
		...EFFECTS
	],
	providers: [
		...PROVIDERS
	]
})
export class AdminModule {

}
