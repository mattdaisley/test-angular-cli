import { RouterConfig }  from '@angular/router';

import { HeroesListComponent } from './heroes-list/index';
import { HeroDetailsComponent } from './hero-details/index';

export const HeroesRouterConfig: RouterConfig = [
  {
    path: 'heroes',
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