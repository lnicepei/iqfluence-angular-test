import { Injectable } from '@angular/core';
import { AbstractControl, ValidationErrors, ValidatorFn } from '@angular/forms';

@Injectable({
  providedIn: 'root'
})
export class FormValidationService {
  patternValidator(pattern: RegExp): ValidatorFn {
    return (control: AbstractControl): ValidationErrors | null => {
      if (!control.value) {
        return null;
      }
      
      const valid = pattern.test(control.value);
      
      return valid ? null : { pattern: { value: control.value } };
    };
  }
  
  emailValidator(): ValidatorFn {
    return this.patternValidator(/^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/);
  }
  
  phoneValidator(): ValidatorFn {
    return this.patternValidator(/^\+?[0-9]{10,15}$/);
  }
} 