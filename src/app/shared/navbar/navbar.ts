import { Component, signal, inject } from '@angular/core';
import { TranslocoPipe } from '@jsverse/transloco';
import { Toolbar } from 'primeng/toolbar';
import { ButtonDirective } from 'primeng/button';
import { ThemeToggleComponent } from '../theme-toggle';
import { LanguageSwitcherComponent } from '../language-switcher';
import { APP_NAME } from '../../core/app-name.token';

@Component({
  selector: 'app-navbar',
  imports: [TranslocoPipe, Toolbar, ButtonDirective, ThemeToggleComponent, LanguageSwitcherComponent],
  templateUrl: './navbar.html',
  styleUrl: './navbar.css',
})
export class NavbarComponent {
  protected appName = inject(APP_NAME);
  protected readonly mobileMenuOpen = signal(false);

  toggleMobileMenu(): void {
    this.mobileMenuOpen.update((v) => !v);
  }
}
