import { UserGridComponent } from "./components/user-grid";
import { Routes } from '@angular/router';

export const ROUTES: Routes = [
	{ path: '', component: UserGridComponent },
	{ path: 'users', component: UserGridComponent }
];
