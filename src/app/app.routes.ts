import { provideRouter, RouterConfig }  from '@angular/router';

import { HomeComponent } from './home/index';
import { UsersRouterConfig } from './users/index';
import { ResumeRouterConfig } from './resume/index';

const routes: RouterConfig = [
  {
    path: '',
    component: HomeComponent
  },
  ...UsersRouterConfig,
  ...ResumeRouterConfig,
  {
    path: '**',
    redirectTo: ''
  }
];

export const appRouterProviders = [
  provideRouter(routes)
];
