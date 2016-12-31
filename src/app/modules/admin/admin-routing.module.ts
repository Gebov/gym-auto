import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { UserGridComponent } from "./components/user-grid";
import { ManageOutletComponent } from "./components/manage-outlet";

export const ADMIN_ROUTES: Routes = [
	{ path: '', component: UserGridComponent },
	{ path: 'users', component: UserGridComponent }
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
