import { NgModule }             from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { LoginComponent } from './components/login';
import { RegisterComponent }  from './components/register';
import { UserGridComponent } from "./components/user-grid";
import { AuthGuard } from "./auth.guard";

const heroesRoutes: Routes = [
  { path: 'login',  component: LoginComponent, canActivate: [AuthGuard] },
  { path: 'register', component: RegisterComponent, canActivate: [AuthGuard] },
	{ path: 'manage-users', component: UserGridComponent, canActivate: [AuthGuard] }
];

@NgModule({
  imports: [
    RouterModule.forChild(heroesRoutes)
  ],
  exports: [
    RouterModule
  ]
})
export class AuthRoutingModule { }
