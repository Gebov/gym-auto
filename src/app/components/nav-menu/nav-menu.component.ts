import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from "@angular/router";

@Component({
	selector: 'gym-nav',
	templateUrl: './nav-menu.component.html'
})
export class NavMenuComponent implements OnInit {
	routes: Array<IRoute>;
	constructor(private currentRoute: ActivatedRoute) {
	}

	ngOnInit() {
		this.routes = [
			{
				title: 'Home',
				url: '/home'
			},
			{
				title: 'Administration',
				url: '/admin'
			}
		];

		this.currentRoute.url.subscribe(x => {
			debugger;
		});
	}
}

interface IRoute {
	url: string,
	title: string,
	current?: boolean
}
