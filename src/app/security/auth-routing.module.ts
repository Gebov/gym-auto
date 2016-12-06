import { NgModule }             from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { LoginComponent } from './components/login';
import { RegisterComponent }  from './components/register';
import { UserGridComponent } from "./components/user-grid";

const heroesRoutes: Routes = [
  { path: 'login',  component: LoginComponent },
  { path: 'register', component: RegisterComponent },
	{ path: 'manage-users', component: UserGridComponent },
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
