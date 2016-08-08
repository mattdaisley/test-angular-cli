import { provideRouter, RouterConfig }  from '@angular/router';

import { HomeComponent } from './home/index';
import { HeroesRouterConfig } from './heroes/index';

const routes: RouterConfig = [
  {
    path: '',
    component: HomeComponent
  },
  ...HeroesRouterConfig
];

export const appRouterProviders = [
  provideRouter(routes)
];
