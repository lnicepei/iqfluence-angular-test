import { CommonModule } from '@angular/common';
import { Component, Input, OnInit } from '@angular/core';
import { AbstractControl, FormGroup, ReactiveFormsModule } from '@angular/forms';
import { FieldType, FormField } from '../../models/form-field.model';

@Component({
  selector: 'app-dynamic-field',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule],
  templateUrl: './dynamic-field.component.html'
})
export class DynamicFieldComponent implements OnInit {
  @Input() field!: FormField;
  @Input() form!: FormGroup;
  
  control!: AbstractControl;
  fieldTypes = FieldType;
  
  ngOnInit(): void {
    this.control = this.form.get(this.field.name)!;
  }
  
  get isInvalid(): boolean {
    return this.control?.invalid && (this.control?.touched || this.control?.dirty);
  }
  
  get isRequired(): boolean {
    return this.field.required || false;
  }
}