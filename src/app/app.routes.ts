import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './components/home';
import { NoContentComponent } from './components/no-content';
import { AuthGuard } from "./security/index";

export const ROUTES: Routes = [
    { path: '', component: HomeComponent, canActivate: [AuthGuard] },
    { path: 'home', component: HomeComponent, canActivate: [AuthGuard] },
    { path: '**',    component: NoContentComponent }
];
