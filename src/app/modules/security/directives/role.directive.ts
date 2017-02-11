import { Directive, Input, ElementRef, Renderer } from '@angular/core';
import { Store } from "@ngrx/store";
import { AuthModel } from "./../state/auth.model";

@Directive({ selector: '[gymRole]' })
export class RoleDirective {
	constructor(private element: ElementRef, public renderer: Renderer, private store: Store<any>) {

	}

	@Input() set gymRole(role: string) {
		this.store.select<Array<string>>(x => {
			return (<AuthModel>x.authState).data.roles;
		}).subscribe(roles => {
			if (roles.indexOf(role) === -1) {
				this.renderer.setElementStyle(this.element.nativeElement, 'display', 'none');
			}
		});
  	}
}
