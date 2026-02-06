import {
  ApplicationConfig,
  isDevMode,
  provideBrowserGlobalErrorListeners,
  provideZonelessChangeDetection,
} from '@angular/core';
import { provideRouter } from '@angular/router';
import { provideHttpClient, withFetch } from '@angular/common/http';
import { providePrimeNG } from 'primeng/config';
import { provideTransloco } from '@jsverse/transloco';
import { provideTranslocoPersistLang, cookiesStorage } from '@jsverse/transloco-persist-lang';
import Aura from '@primeuix/themes/aura';

import { routes } from './app.routes';
import { APP_NAME, APP_VERSION } from './core/app-name.token';
import { provideClientHydration, withEventReplay } from '@angular/platform-browser';
import { TranslocoHttpLoader } from './core/transloco-loader';
import { AVAILABLE_LANGS, DEFAULT_LANG } from './core/i18n.config';

export const appConfig: ApplicationConfig = {
  providers: [
    { provide: APP_NAME, useValue: 'BacklogBurner' },
    { provide: APP_VERSION, useValue: '0.1' },
    provideBrowserGlobalErrorListeners(),
    provideZonelessChangeDetection(),
    provideRouter(routes),
    provideClientHydration(withEventReplay()),
    provideHttpClient(withFetch()),
    providePrimeNG({
      theme: {
        preset: Aura,
        options: {
          darkModeSelector: '.dark',
        },
      },
    }),
    provideTransloco({
      config: {
        availableLangs: [...AVAILABLE_LANGS],
        defaultLang: DEFAULT_LANG,
        fallbackLang: DEFAULT_LANG,
        reRenderOnLangChange: true,
        prodMode: !isDevMode(),
        missingHandler: {
          useFallbackTranslation: true,
        },
      },
      loader: TranslocoHttpLoader,
    }),
    provideTranslocoPersistLang({ storage: { useValue: cookiesStorage() } }),
  ],
};
