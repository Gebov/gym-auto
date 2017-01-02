import { Injectable } from '@angular/core';
import { Router, CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot } from '@angular/router';
import { AuthModel } from './../state/auth.model';
import { Store } from "@ngrx/store";
import { Observable } from "rxjs";
import { SitemapService } from "./../../../services/sitemap.service";

@Injectable()
export class RoleGuard implements CanActivate {
	constructor(private router: Router, private store: Store<any>, private sitemap: SitemapService) { }

	canActivate(route: ActivatedRouteSnapshot, routerState: RouterStateSnapshot) {
		let data = route.data;
		if (data) {
			let navData = data["navData"];
			if (navData) {
				let roles = navData.roles as Array<string>;
				if (roles) {
					return this.store.select("authState")
						.skipWhile((x: AuthModel) => !x.isInitialized)
						.map((user: AuthModel) => {
							let hasRights = this.sitemap.userHasRights(roles, user.data.roles);
							if (!hasRights)
								this.router.navigate(['404']);

							return hasRights;
						}).first();
				}
			}
		}

		return Observable.of(true);
	}
}
