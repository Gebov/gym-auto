import { Directive, forwardRef, Attribute } from '@angular/core';
import { Validator, AbstractControl, NG_VALIDATORS } from '@angular/forms';

@Directive({
	selector: '[validateEqual][formControlName],[validateEqual][formControl],[validateEqual][ngModel]',
	providers: [
		{ provide: NG_VALIDATORS, useExisting: forwardRef(() => EqualValidator), multi: true }
	]
})
export class EqualValidator implements Validator {
	constructor(
		@Attribute('validateEqual') public validateEqual: string,
		@Attribute('reverse') public reverse: string) { }

	validate(control: AbstractControl): { [key: string]: any } {
		// self value
		let ownValue = control.value;
		// control value
		let toCompare = control.root.get(this.validateEqual);
		// value not equal
		if (toCompare && ownValue !== toCompare.value && !this.isReverse) return {
			validateEqual: false
		}

		// value equal and reverse
		if (toCompare && ownValue === toCompare.value && this.isReverse) {
			delete toCompare.errors['validateEqual'];
			if (!Object.keys(toCompare.errors).length) toCompare.setErrors(null);
		}
		// value not equal and reverse
		if (toCompare && ownValue !== toCompare.value && this.isReverse) {
			toCompare.setErrors({ validateEqual: false })
		}
		return null;
	}

	private get isReverse() {
		if (!this.reverse) return false;
		return this.reverse === 'true' ? true : false;
	}
}
