import { Injectable } from '@angular/core';
import { FieldType, FormField } from '../models/form-field.model';

@Injectable({
  providedIn: 'root'
})
export class FormConfigService {
  private _formConfig: FormField[] = [
    {
      type: FieldType.Input,
      name: 'name',
      label: 'Имя',
      placeholder: 'Введите ваше имя',
      required: true,
      validationMessage: 'Пожалуйста, введите ваше имя'
    },
    {
      type: FieldType.Email,
      name: 'email',
      label: 'Email',
      placeholder: 'example@example.com',
      required: true,
      validationMessage: 'Пожалуйста, введите корректный email'
    },
    {
      type: FieldType.Phone,
      name: 'phone',
      label: 'Телефон',
      placeholder: '+7XXXXXXXXXX',
      required: false,
      validationMessage: 'Пожалуйста, введите корректный номер телефона'
    },
    {
      type: FieldType.Select,
      name: 'maritalStatus',
      label: 'Семейное положение',
      options: [
        { value: 'single', label: 'Не женат/не замужем' },
        { value: 'married', label: 'Женат/замужем' },
        { value: 'divorced', label: 'Разведен/разведена' }
      ],
      required: true,
      validationMessage: 'Пожалуйста, выберите семейное положение'
    },
    {
      type: FieldType.Checkbox,
      name: 'foreignLanguages',
      label: 'Знание иностранных языков'
    },
    {
      type: FieldType.Textarea,
      name: 'additionalInfo',
      label: 'Дополнительная информация',
      placeholder: 'Расскажите о себе...',
      rows: 4
    }
  ];

  get formConfig(): FormField[] {
    return [...this._formConfig];
  }
} 