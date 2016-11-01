import { Routes } from '@angular/router';
import { RouterModule } from "@angular/router";

import { LoginComponent } from './auth/login.component';
import { HomeComponent } from './home.component';
import { AuthGuard } from './auth/auth.guard';

const routes: Routes = [
    { path: '', component: HomeComponent, canActivate: [AuthGuard] },
    { path: 'home', component: HomeComponent, canActivate: [AuthGuard] },
    { path: 'login',  component: LoginComponent }
    // { path: '**',  component: null }
]

export const routing = RouterModule.forRoot(routes);