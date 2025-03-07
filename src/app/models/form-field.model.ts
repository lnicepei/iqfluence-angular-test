export enum FieldType {
  Input = 'input',
  Select = 'select',
  Checkbox = 'checkbox',
  Email = 'email',
  Phone = 'phone',
  Textarea = 'textarea'
}

export interface FieldOption {
  value: string;
  label: string;
}

export interface FormFieldBase {
  type: FieldType;
  name: string;
  label: string;
  placeholder?: string;
  required?: boolean;
  options?: FieldOption[];
  validationMessage?: string;
}

export interface InputField extends FormFieldBase {
  type: FieldType.Input;
}

export interface EmailField extends FormFieldBase {
  type: FieldType.Email;
}

export interface PhoneField extends FormFieldBase {
  type: FieldType.Phone;
}

export interface TextareaField extends FormFieldBase {
  type: FieldType.Textarea;
  rows?: number;
}

export interface SelectField extends FormFieldBase {
  type: FieldType.Select;
  options: FieldOption[];
}

export interface CheckboxField extends FormFieldBase {
  type: FieldType.Checkbox;
}

export type FormField = 
  | InputField 
  | EmailField 
  | PhoneField 
  | TextareaField 
  | SelectField 
  | CheckboxField;