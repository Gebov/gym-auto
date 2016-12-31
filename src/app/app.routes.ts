import { Routes } from '@angular/router';
import { HomeComponent } from './components/home';
import { NoContentComponent } from './components/no-content';
import { NavHeaderComponent } from "./components/nav-header";
import { AuthGuard, RoleGuard } from "./modules/security";

import { ADMIN_ROUTES } from "./modules/admin/admin-routing.module";

export const ROUTES: Routes = [
	{
		path: '', component: NavHeaderComponent, canActivate: [AuthGuard], children: [
			{ path: '', component: HomeComponent },
			{ path: 'home', component: HomeComponent },
			{ path: 'admin', children: ADMIN_ROUTES, canActivate: [RoleGuard], data: { roles: ["Administrator"] } },
		]
	},
	{ path: '**', component: NoContentComponent }
];
