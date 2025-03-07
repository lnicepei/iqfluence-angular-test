import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { delay } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class FormSubmissionService {
  submitForm(formData: Record<string, any>): Observable<{ success: boolean, message: string }> {
    console.log('Отправка формы:', formData);
    
    return of({ 
      success: true, 
      message: 'Форма отправлена успешно!' 
    }).pipe(
      delay(1000)
    );
  }
} 