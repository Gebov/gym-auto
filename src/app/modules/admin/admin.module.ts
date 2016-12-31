import { NgModule, ApplicationRef } from '@angular/core';
import { HttpModule } from "@angular/http";
import { CommonModule } from '@angular/common';

import { GridModule } from '@progress/kendo-angular-grid';
import { DialogModule } from '@progress/kendo-angular-dialog';
import { EffectsModule } from '@ngrx/effects';

// import { AdminRoutingModule } from "./admin-routing.module";

import { COMPONENTS } from "./areas";

import { EFFECTS } from "./areas";
import { PROVIDERS } from "./areas";

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
		...EFFECTS
	],
	providers: [
		...PROVIDERS
	]
})
export class AdminModule {

}
