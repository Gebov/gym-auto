import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ROUTES } from "./areas/";

export const ADMIN_ROUTES: Routes = [
	...ROUTES
];

@NgModule({
	imports: [
		RouterModule.forChild(ADMIN_ROUTES)
	],
	exports: [
		RouterModule
	]
})
export class AdminRoutingModule { }
