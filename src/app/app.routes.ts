import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './components/home';
import { NoContentComponent } from './components/no-content';
import { AuthGuard } from "./modules/security/index";
import { ADMIN_ROUTES } from "./modules/admin/admin-routing.module";

export const ROUTES: Routes = [
    { path: '', component: HomeComponent, canActivate: [AuthGuard] },
    { path: 'home', component: HomeComponent, canActivate: [AuthGuard] },
	{ path: 'admin', canActivate: [AuthGuard], children: ADMIN_ROUTES },
    { path: '**',    component: NoContentComponent }
];
