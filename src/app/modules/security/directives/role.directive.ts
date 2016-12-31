import { Directive, Input, TemplateRef, ViewContainerRef } from '@angular/core';

@Directive({ selector: '[gymRole]' })
export class RoleDirective {
	constructor(private templateRef: TemplateRef<any>, private viewContainer: ViewContainerRef) {

	}

	@Input() set gymRole(role: string) {
		// this.auth.current().subscribe(userData => {
		// 	if (userData.roles.indexOf(role) != -1) {
		// 		this.viewContainer.createEmbeddedView(this.templateRef);
		// 	}
		// });
  	}
}
