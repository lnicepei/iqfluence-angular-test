import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { finalize } from 'rxjs/operators';
import { FieldType, FormField } from '../../models/form-field.model';
import { FormConfigService } from '../../services/form-config.service';
import { FormSubmissionService } from '../../services/form-submission.service';
import { FormValidationService } from '../../services/form-validation.service';
import { DynamicFieldComponent } from '../dynamic-field/dynamic-field.component';

@Component({
  selector: 'app-dynamic-form',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule, DynamicFieldComponent],
  templateUrl: './dynamic-form.component.html'
})
export class DynamicFormComponent implements OnInit {
  fields: FormField[] = [];
  form!: FormGroup;
  isSubmitting = false;
  submitSuccess = false;
  submitMessage = '';

  constructor(
    private fb: FormBuilder,
    private formConfigService: FormConfigService,
    private formSubmissionService: FormSubmissionService,
    private validationService: FormValidationService
  ) {}

  ngOnInit(): void {
    this.fields = this.formConfigService.formConfig;
    this.initForm();
  }

  private initForm(): void {
    const formControls: Record<string, any> = {};
    
    this.fields.forEach(field => {
      const validators = [];
      
      if (field.required) {
        validators.push(Validators.required);
      }
      
      switch (field.type) {
        case FieldType.Email:
          validators.push(this.validationService.emailValidator());
          break;
        case FieldType.Phone:
          validators.push(this.validationService.phoneValidator());
          break;
      }
      
      formControls[field.name] = ['', validators];
    });
    
    this.form = this.fb.group(formControls);
  }

  onSubmit(): void {
    if (this.form.valid) {
      this.isSubmitting = true;
      this.submitSuccess = false;
      this.submitMessage = '';
      
      this.formSubmissionService.submitForm(this.form.value)
        .pipe(
          finalize(() => this.isSubmitting = false)
        )
        .subscribe({
          next: (response) => {
            this.submitSuccess = response.success;
            this.submitMessage = response.message;
            
            if (response.success) {
              this.form.reset();
            }
          },
          error: (error) => {
            this.submitSuccess = false;
            this.submitMessage = 'Произошла ошибка при отправке формы. Пожалуйста, попробуйте еще раз.';
            console.error('Ошибка при отправке формы:', error);
          }
        });
    } else {
      this.markFormGroupTouched(this.form);
    }
  }

  private markFormGroupTouched(formGroup: FormGroup): void {
    Object.values(formGroup.controls).forEach(control => {
      control.markAsTouched();
      
      if ((control as FormGroup).controls) {
        this.markFormGroupTouched(control as FormGroup);
      }
    });
  }
}