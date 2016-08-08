import { bootstrap } from '@angular/platform-browser-dynamic';
import { enableProdMode, provide } from '@angular/core';
import { HTTP_PROVIDERS } from '@angular/http';
import { disableDeprecatedForms, provideForms } from '@angular/forms';

import { LocationStrategy, HashLocationStrategy } from '@angular/common';

import { AppComponent, environment, appRouterProviders } from './app/';

if (environment.production) {
  enableProdMode();
}

bootstrap(AppComponent, [
  appRouterProviders,
  HTTP_PROVIDERS,
  disableDeprecatedForms(),
  provideForms(),
  provide(LocationStrategy, { useClass: HashLocationStrategy })
]);
