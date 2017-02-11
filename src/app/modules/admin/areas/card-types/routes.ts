import { CardTypesComponent } from "./components/grid";
import { Routes } from '@angular/router';

export const ROUTES: Routes = [
	{ path: '', component: CardTypesComponent },
	{
		path: 'card-templates', component: CardTypesComponent, data: {
			navData: {
				title: 'Card Templates'
			}
		}
	}
];
