import { RouterConfig }  from '@angular/router';

import { SignInComponent } from './sign-in';

export const AuthRouterConfig: RouterConfig = [
  {
    path: '',
    children: [
      {
        path: 'signin',
        component: SignInComponent
      },
      {
        path: 'signup',
        component: SignInComponent
      }
    ]
  }
];
