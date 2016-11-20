import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home';
import { AboutComponent } from './about';
import { NoContentComponent } from './no-content';
import { AUTH_COMPONENTS, AuthGuard } from './security';
import { DataResolver } from './app.resolver';

export const ROUTES: Routes = [
    { path: '', component: HomeComponent, canActivate: [AuthGuard] },
    { path: 'home', component: HomeComponent, canActivate: [AuthGuard] },
    { path: 'login',  component: AUTH_COMPONENTS[0] },
	{ path: 'register',  component: AUTH_COMPONENTS[1] },
    { path: '**',    component: NoContentComponent },
];
