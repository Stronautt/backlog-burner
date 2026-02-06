import { Component, inject } from '@angular/core';
import { TranslocoService, TranslocoPipe } from '@jsverse/transloco';

@Component({
  selector: 'app-language-switcher',
  imports: [TranslocoPipe],
  template: `
    <button (click)="toggle()" [attr.aria-label]="'lang.switchTo' | transloco">
      {{ 'lang.switchTo' | transloco }}
    </button>
  `,
  styles: `
    button {
      display: flex;
      align-items: center;
      justify-content: center;
      background: none;
      border: 1px solid var(--color-border);
      border-radius: 4px;
      padding: 5px 8px;
      color: var(--color-text-dim);
      cursor: pointer;
      transition: all 0.2s;
      font-family: var(--font-mono);
      font-size: 10px;
      font-weight: 600;
      letter-spacing: 0.5px;
    }

    button:hover {
      color: var(--color-accent);
      border-color: var(--color-border-hover);
    }
  `,
})
export class LanguageSwitcherComponent {
  private readonly transloco = inject(TranslocoService);

  toggle(): void {
    const next = this.transloco.getActiveLang() === 'en' ? 'uk' : 'en';
    this.transloco.setActiveLang(next);
  }
}
