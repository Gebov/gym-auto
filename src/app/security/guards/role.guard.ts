import { Injectable } from '@angular/core';
import { Router, CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot } from '@angular/router';
import { AuthModel } from './../state/auth.model';
import { Store } from "@ngrx/store";
import { Observable } from "rxjs";

@Injectable()
export class RoleGuard implements CanActivate {
	constructor(private router: Router, private store: Store<any>) { }

	canActivate(route: ActivatedRouteSnapshot, routerState: RouterStateSnapshot) {
		let roles = route.data["roles"] as Array<string>;
		if (!roles)
			return Observable.of(true);

		return this.store.select("authState")
			.skipWhile((x: AuthModel) => !x.isInitialized)
			.map((user: AuthModel) => {
				for (let role of user.data.roles) {
					if (roles.indexOf(role) !== -1) {
						return true;
					}
				}

				this.router.navigate(['404']);
				return false;
			}).first();
	}
}
