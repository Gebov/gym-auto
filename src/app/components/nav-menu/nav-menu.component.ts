import { Component } from '@angular/core';

@Component({
	selector: 'gym-nav',
	templateUrl: './nav-menu.component.html'
})
export class NavMenuComponent {
	routes: Array<IRoute> = [
		{
			title: 'home',
			url: '/home'
		}
	];
}



interface IRoute {
	url: string,
	title: string
}
