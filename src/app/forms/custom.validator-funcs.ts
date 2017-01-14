import { ValidatorFn, AbstractControl } from '@angular/forms';

export class CustomValidators {
	static min(min: number): ValidatorFn {
		return (control: AbstractControl): { [key: string]: any } => {
			if (!control.touched)
				return null;

			let value: number = control.value;
			if (value >= min)
				return null;

			return { 'min': true };
		};
	}
}

