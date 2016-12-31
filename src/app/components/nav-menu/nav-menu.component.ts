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
		let routes: Array<IRoute> = [
			{
				title: 'home',
				url: '/home'
			},
			{
				title: 'Administration',
				url: '/admin'
			}
		];
		debugger;
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
