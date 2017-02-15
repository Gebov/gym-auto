import { PageComponent } from "./components/page";
import { Routes } from '@angular/router';

export const ROUTES: Routes = [
	{ path: '', component: PageComponent },
	{
		path: 'cards', component: PageComponent, data: {
			navData: {
				title: 'Cards'
			}
		}
	}
];
