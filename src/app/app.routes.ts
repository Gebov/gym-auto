import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home';
import { AboutComponent } from './about';
import { NoContentComponent } from './no-content';
import { LoginComponent, AuthGuard } from './login';

import { DataResolver } from './app.resolver';

export const ROUTES: Routes = [
    { path: '', component: HomeComponent, canActivate: [AuthGuard] },
    { path: 'home', component: HomeComponent, canActivate: [AuthGuard] },
    { path: 'login',  component: LoginComponent },
    { path: '**',    component: NoContentComponent },
];
