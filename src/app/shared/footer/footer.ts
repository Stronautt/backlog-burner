import { Component, inject } from '@angular/core';
import { TranslocoPipe } from '@jsverse/transloco';
import { APP_NAME, APP_VERSION } from '../../core/app-name.token';

@Component({
  selector: 'app-footer',
  imports: [TranslocoPipe],
  templateUrl: './footer.html',
  styleUrl: './footer.css',
})
export class FooterComponent {
  protected appName = inject(APP_NAME);
  protected appVersion = inject(APP_VERSION);
  protected currentYear = new Date().getFullYear();
}
