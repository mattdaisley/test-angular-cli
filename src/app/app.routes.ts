import { provideRouter, RouterConfig }  from '@angular/router';

import { HomeComponent } from './home/index';
import { HeroesListComponent } from './heroes/heroes-list/index';
import { HeroDetailsComponent } from './heroes/hero-details/index';

const routes: RouterConfig = [
  {
    path: '',
    redirectTo: '/home',
    pathMatch: 'full'
  },
  {
    path: 'home',
    component: HomeComponent
  },
  {
    path: 'heroes',
    component: HeroesListComponent
  },
  {
    path: 'heroes/:id',
    component: HeroDetailsComponent
  }
];

export const appRouterProviders = [
  provideRouter(routes)
];
