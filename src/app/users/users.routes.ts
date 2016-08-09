import { RouterConfig }  from '@angular/router';

import { UsersListComponent } from './users-list/index';
import { UserDetailsComponent } from './user-details/index';

export const UsersRouterConfig: RouterConfig = [
  {
    path: 'users',
    children: [
      {
        path: '',
        component: UsersListComponent
      },
      {
        path: ':id',
        component: UserDetailsComponent
      }
    ]
  }
];