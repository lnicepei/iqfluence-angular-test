import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { FormConfigService } from './services/form-config.service';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet],
  templateUrl: './app.component.html'
})
export class AppComponent {
  constructor(public formConfigService: FormConfigService) {}
} 