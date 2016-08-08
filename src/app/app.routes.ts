import { provideRouter, RouterConfig }  from '@angular/router';

import { HomeComponent } from './home/index';
import { HeroesRouterConfig, HeroesListComponent, HeroDetailsComponent } from './heroes/index';

const routes: RouterConfig = [
  {
    path: '',
    component: HomeComponent
  },
  ...HeroesRouterConfig,
  {
    path: 'heroes2',
    children: [
      {
        path: '',
        component: HeroesListComponent
      },
      {
        path: ':id',
        component: HeroDetailsComponent
      }
    ]
  },
  {
    path: 'heroes3',
    children: [
      {
        path: '',
        component: HeroesListComponent
      },
      {
        path: ':id',
        component: HeroDetailsComponent
      }
    ]
  }
];

export const appRouterProviders = [
  provideRouter(routes)
];
