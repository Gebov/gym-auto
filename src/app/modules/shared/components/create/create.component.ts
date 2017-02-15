import { Component, OnInit, ViewChildren, ContentChildren, QueryList, Input, Output, EventEmitter } from '@angular/core';
import { FormControl, Form, FormBuilder, FormGroup, Validators, ValidatorFn } from "@angular/forms";

import { CustomValidators } from "./../../../../forms/custom.validator-funcs";

@Component({
  selector: 'gym-create',
  templateUrl: './create.component.html'
})
export class CreateComponent implements OnInit {
	@Input() data: IItemMetaData;
	@Input() isEdit: boolean;
	@Output() done = new EventEmitter();
	visible: boolean;

	private group: FormGroup;
	ngOnInit() {
		if (!this.data || !this.data.fields)
			return;

		let controlsConfig = {};
		this.data.fields.forEach(x => {
			let validation = <IValidation>x.validation;
			let validators: Array<ValidatorFn> = [];

			if (validation) {
				if (x.type == FieldType.Number) {
					let validation = <INumberValidation>x.validation;
					if (validation.min) {
						validators.push(CustomValidators.min(validation.min));
					}
				} else if (x.type == FieldType.Text) {
					let validation = <ITextValidation>x.validation;
					if (validation.minLength) {
						validators.push(Validators.minLength(validation.minLength));
					}
				}

				let validation = <IValidation>x.validation;
				if (validation.required) {
					validators.push(Validators.required);
				}
			}

			controlsConfig[x.name] = new FormControl(null, validators);
		});

		let builder = new FormBuilder();
		this.group = builder.group(controlsConfig);
	}

	onVisible(visible: boolean) {
		this.visible = visible;
	}

	onDone(): void {
		if (!this.group.valid)
			return;

		let controls = this.group.controls;
		let controlNames = Object.keys(controls);
		let model = {};
		controlNames.forEach(controlName => {
			let control = controls[controlName];
			model[controlName] = control.value;
		});

		this.group.reset();
		controlNames.forEach(controlName => {
			let field = this.data.fields.find(x => x.name == controlName);
			controls[controlName].reset(field.defaultValue);
			if (model[controlName] == null) {
				model[controlName] = field.defaultValue;
			}
		});

		this.onVisible(false);
		this.done.emit(model);
	}
}

export interface IItemMetaData {
	fields: Array<IFieldMetaData>;
}

interface IFieldMetaData {
	name: string;
	title: string;
	type: FieldType;
	validation?: IValidation | INumberValidation | ITextValidation;
	defaultValue?: any;
	value?: any;
}

export enum FieldType {
	Number = 1,
	Text = 2,
	Boolean = 3,
	Dropdown = 4
}

export interface IValidation {
	required?: boolean;
}

export interface INumberValidation extends IValidation {
	min?: number;
	max?: number;
}

export interface ITextValidation extends IValidation {
	minLength?: number;
	maxLength?: number;
}
