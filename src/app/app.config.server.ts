import { mergeApplicationConfig, ApplicationConfig, REQUEST, isDevMode } from '@angular/core';
import { provideServerRendering, withRoutes } from '@angular/ssr';
import { TRANSLOCO_CONFIG, translocoConfig } from '@jsverse/transloco';
import { parse as parseCookies } from 'cookie';
import { appConfig } from './app.config';
import { serverRoutes } from './app.routes.server';
import { AVAILABLE_LANGS, DEFAULT_LANG, LANG_COOKIE_NAME } from './core/i18n.config';

function getLangFromCookieHeader(cookieHeader: string): string {
  const cookies = parseCookies(cookieHeader);
  const lang = cookies[LANG_COOKIE_NAME];
  return lang && (AVAILABLE_LANGS as readonly string[]).includes(lang) ? lang : DEFAULT_LANG;
}

const serverConfig: ApplicationConfig = {
  providers: [
    provideServerRendering(withRoutes(serverRoutes)),
    {
      provide: TRANSLOCO_CONFIG,
      useFactory: (request: Request) =>
        translocoConfig({
          availableLangs: [...AVAILABLE_LANGS],
          defaultLang: getLangFromCookieHeader(request?.headers?.get('cookie') ?? ''),
          fallbackLang: DEFAULT_LANG,
          reRenderOnLangChange: true,
          prodMode: !isDevMode(),
          missingHandler: { useFallbackTranslation: true },
        }),
      deps: [REQUEST],
    },
  ],
};

export const config = mergeApplicationConfig(appConfig, serverConfig);
