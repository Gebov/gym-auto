import { Injectable } from '@angular/core';
import { Observable, Observer } from 'rxjs';
import { Store } from "@ngrx/store";
import { AuthModel } from "./../modules/security/state/auth.model";
import { Router, Route } from "@angular/router";

@Injectable()
export class SitemapService {
	public userHasRights(navDataRoles: Array<string>, userRoles: Array<string>): boolean {
		if (!navDataRoles || navDataRoles.length == 0)
			return true;

		for (let role of navDataRoles) {
			if (userRoles.indexOf(role) !== -1)
				return true;
		}

		return false;
	}

	public getRoutes(router: Router, auth: AuthModel): Array<IRoute> {
		let routes: Array<IRoute> = [];
		let routeConfig = router.config;
		this.fillParsedRoutes(routeConfig, auth, routes);
		return routes;
	}

	private fillParsedRoutes(routeTree: Array<Route>, auth: AuthModel, routes: Array<IRoute>): void {
		for (let route of routeTree) {
			let parsedRouteChildren: Array<IRoute> = [];
			if (route.children && route.children.length > 0) {
				this.fillParsedRoutes(route.children, auth, parsedRouteChildren);
			}

			let isTransient = route.path === '';
			if (!isTransient && route.data) {
				let navData = route.data["navData"];
				if (!navData)
					continue;

				let explicitlyHidden = navData.hasOwnProperty("show") && !navData.show;
				if (explicitlyHidden)
					continue;

				if (!this.userHasRights(navData.roles, auth.data.roles))
					continue;

				let url = route.path;
				if (!url.startsWith('/'))
					url = `/${url}`;

				let parsedRoute: IRoute = {
					url: url,
					title: navData.title || url,
				};

				if (parsedRouteChildren.length > 0) {
					for (let child of parsedRouteChildren) {
						child.url = `${parsedRoute.url}${child.url}`;
					}
					parsedRoute.children = parsedRouteChildren;
				}

				routes.push(parsedRoute);
			} else if (parsedRouteChildren.length > 0) {
				for (let parsedChildRoute of parsedRouteChildren) {
					routes.push(parsedChildRoute);
				}
			}
		}
	}
}

interface IRoute {
	url: string,
	title: string,
	roles?: Array<string>,
	children?: Array<IRoute>
}

