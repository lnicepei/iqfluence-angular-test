import { Routes } from '@angular/router';

export const APP_ROUTES: Routes = [
  { path: '', redirectTo: 'form', pathMatch: 'full' },
  { 
    path: 'form', 
    loadComponent: () => import('./components/dynamic-form/dynamic-form.component')
      .then(m => m.DynamicFormComponent)
  }
]; 