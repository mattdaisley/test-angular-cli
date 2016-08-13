import { provideRouter, RouterConfig }  from '@angular/router';

import { HomeComponent } from './home/index';
import { UsersRouterConfig } from './users/index';
import { ResumeRouterConfig } from './resume/index';
import { AuthRouterConfig } from './auth/index';

const routes: RouterConfig = [
  {
    path: '',
    component: HomeComponent
  },
  ...UsersRouterConfig,
  ...ResumeRouterConfig,
  ...AuthRouterConfig,
  {
    path: '**',
    redirectTo: ''
  }
];

export const appRouterProviders = [
  provideRouter(routes)
];
