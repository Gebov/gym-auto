import { NgModule } from '@angular/core';
import { FormsModule } from "@angular/forms";
import { CommonModule } from '@angular/common';

import { COMPONENTS, DIRECTIVES } from "./components";


@NgModule({
	declarations: [
		...COMPONENTS,
		...DIRECTIVES
	],
	imports: [
		CommonModule,
		FormsModule,
	],
	exports: [
		...COMPONENTS,
		...DIRECTIVES
	]
})
export class SharedModule {

}
