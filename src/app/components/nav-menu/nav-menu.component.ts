import { Component, OnInit } from '@angular/core';
import { Store } from "@ngrx/store";
import { AuthModel } from "./../../modules/security/state/auth.model";
import { Router, Route } from "@angular/router";
import { SitemapService } from "./../../services/sitemap.service";

@Component({
	selector: 'gym-nav',
	templateUrl: './nav-menu.component.html',
	styleUrls: ['./nav-menu.component.css']
})
export class NavMenuComponent implements OnInit {
	routes: Array<any>;
	constructor(
		private store: Store<any>,
		private router: Router,
		private sitemap: SitemapService) { }

	ngOnInit() {
		this.store.select(x => <AuthModel>x.authState).subscribe(x => {
			this.routes = this.sitemap.getRoutes(this.router, x);
		});
	}
}

