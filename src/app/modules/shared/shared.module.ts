import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from "@angular/forms";
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
		ReactiveFormsModule
	],
	exports: [
		...COMPONENTS,
		...DIRECTIVES
	]
})
export class SharedModule {

}
