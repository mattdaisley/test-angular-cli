import { provideRouter, RouterConfig }  from '@angular/router';

import { HomeComponent } from './home/index';
import { UsersRouterConfig, UsersListComponent, UserDetailsComponent } from './users/index';

const routes: RouterConfig = [
  {
    path: '',
    component: HomeComponent
  },
  ...UsersRouterConfig,
  {
    path: '**',
    redirectTo: ''
  }
];

export const appRouterProviders = [
  provideRouter(routes)
];
