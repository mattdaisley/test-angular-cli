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
  },
  {
    path: 'users2',
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
  },
  {
    path: 'users3',
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
  },
];