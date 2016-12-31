import { Component, OnInit } from '@angular/core';
import { Store } from "@ngrx/store";
import { AuthModel } from "./../../modules/security/state/auth.model";

@Component({
	selector: 'gym-nav',
	templateUrl: './nav-menu.component.html',
	styleUrls: ['./nav-menu.component.css']
})
export class NavMenuComponent implements OnInit {
	routes: Array<IRoute>;
	constructor(private store: Store<any>) {
	}

	ngOnInit() {
		let routes: Array<IRoute> = [
			{
				title: 'Home',
				url: '/home'
			},
			{
				title: 'Administration',
				url: '/admin',
				roles: ['Administrator']
			}
		];

		this.store.select(x => <AuthModel>x.authState).subscribe(x => {
			let userRoles = x.data.roles;
			let endRoutes: Array<IRoute> = [];

			for (let route of routes) {
				if (!route.roles) {
					endRoutes.push(route);
					continue;
				}

				for (let role of route.roles) {
					if (userRoles.indexOf(role) !== -1) {
						endRoutes.push(route);
						break;
					}
				}
			}

			this.routes = endRoutes;
		})
	}
}

interface IRoute {
	url: string,
	title: string,
	roles?: Array<string>
}
