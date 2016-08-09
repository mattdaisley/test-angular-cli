import { RouterConfig }  from '@angular/router';

import { ResumeComponent } from './resume.component';

export const ResumeRouterConfig: RouterConfig = [
  {
    path: 'resume',
    children: [
      {
        path: '',
        component: ResumeComponent
      }
    ]
  }
];
