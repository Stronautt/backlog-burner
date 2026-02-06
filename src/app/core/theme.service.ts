import { DOCUMENT } from '@angular/common';
import { Injectable, inject, signal } from '@angular/core';

@Injectable({ providedIn: 'root' })
export class ThemeService {
  private readonly document = inject(DOCUMENT);
  private readonly window = this.document.defaultView;

  readonly isDark = signal(true);

  constructor() {
    if (!this.window) return;

    const stored = this.window.localStorage?.getItem('theme');
    if (stored === 'light') {
      this.isDark.set(false);
    } else if (stored === 'dark') {
      this.isDark.set(true);
    } else {
      this.isDark.set(this.window.matchMedia?.('(prefers-color-scheme: dark)')?.matches ?? true);
    }

    this.applyTheme();
  }

  toggle(): void {
    this.isDark.update((v) => !v);
    this.applyTheme();
    this.window?.localStorage?.setItem('theme', this.isDark() ? 'dark' : 'light');
  }

  private applyTheme(): void {
    this.document.documentElement.classList.toggle('dark', this.isDark());
  }
}
