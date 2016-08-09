import { Component, OnInit } from '@angular/core';
import { ROUTER_DIRECTIVES } from '@angular/router';

import './shared/rxjs-extensions';

import { SideNavComponent } from './side-nav/index';
import { ToolbarComponent } from './toolbar/index';

@Component({
  moduleId: module.id,
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.css'],
  directives: [
    ROUTER_DIRECTIVES,
    ToolbarComponent,
    SideNavComponent
  ]
})
export class AppComponent implements OnInit {
  title = 'Angular CLI Testing';
  sideNavActive: boolean;

  constructor(

  ) { }

  ngOnInit() {
    this.sideNavActive = true;
  }

  toggled( sideNavActive: boolean ) {
    this.sideNavActive = sideNavActive;
  }
}
