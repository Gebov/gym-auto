import { Directive, Input, TemplateRef, ViewContainerRef } from '@angular/core';
import { AuthService } from "./auth.service";

@Directive({ selector: '[gymRole]' })
export class RoleDirective {
	constructor(private templateRef: TemplateRef<any>, private viewContainer: ViewContainerRef, private auth: AuthService ) {

	}

	@Input() set gymRole(role: string) {
		this.auth.current().subscribe(userData => {
			if (userData.roles.indexOf(role) != -1) {
				this.viewContainer.createEmbeddedView(this.templateRef);
			}
		});
  	}
}
