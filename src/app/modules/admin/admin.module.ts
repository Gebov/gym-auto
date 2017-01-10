import { NgModule, ApplicationRef } from '@angular/core';
import { HttpModule } from "@angular/http";
import { CommonModule } from '@angular/common';
import { EffectsModule } from '@ngrx/effects';
import { FormsModule } from "@angular/forms";
// import { AdminRoutingModule } from "./admin-routing.module";

import { COMPONENTS, EFFECTS, PROVIDERS } from "./areas";

@NgModule({
	declarations: [
		...COMPONENTS
	],
	imports: [
		CommonModule,
		HttpModule,
		FormsModule,
		// AdminRoutingModule,
		...EFFECTS
	],
	providers: [
		...PROVIDERS
	]
})
export class AdminModule {

}
