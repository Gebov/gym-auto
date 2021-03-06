import { NgModule }             from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { LoginComponent } from './components/login';
import { RegisterComponent }  from './components/register';
import { AuthGuard } from "./guards/auth.guard";
import { RoleGuard } from "./guards/role.guard";

const heroesRoutes: Routes = [
  { path: 'login',  component: LoginComponent, canActivate: [AuthGuard] },
  { path: 'register', component: RegisterComponent, canActivate: [AuthGuard] }
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
