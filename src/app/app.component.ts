import { Component } from '@angular/core';
import { ROUTER_DIRECTIVES } from '@angular/router';

import './shared/rxjs-extensions';

import { SideNavComponent } from './side-nav/index';

@Component({
  moduleId: module.id,
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.css'],
  directives: [
    ROUTER_DIRECTIVES, 
    SideNavComponent
  ]
})
export class AppComponent {
  title = 'Angular CLI Testing';
}
