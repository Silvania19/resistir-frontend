import { AbstractControl, ValidationErrors, ValidatorFn } from '@angular/forms';

export function maxHigherMin(): ValidatorFn {
  return (control: AbstractControl): ValidationErrors | null => {
    const minTemp = control.get('minTemp')?.value;
    const maxTemp = control.get('maxTemp')?.value;

    return maxTemp <= minTemp ? { maxHigherMinMatch: true } : null;
  };
}
