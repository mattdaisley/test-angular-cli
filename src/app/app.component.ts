import { Component, OnInit } from '@angular/core';
import { ROUTER_DIRECTIVES } from '@angular/router';

import './shared/rxjs-extensions';

import { SideNavComponent } from './side-nav/index';
import { ToolbarComponent } from './toolbar/index';
import { AuthenticateService } from './auth';

@Component({
  moduleId: module.id,
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.css'],
  directives: [
    ROUTER_DIRECTIVES,
    ToolbarComponent,
    SideNavComponent
  ],
  providers: [
    AuthenticateService
  ]
})
export class AppComponent implements OnInit {
  title = 'Angular CLI Testing';
  sideNavActive: boolean;
  isLoggedIn: boolean;

  constructor(
    private authService: AuthenticateService
  ) { 
    this.isLoggedIn = this.authService.getIsLoggedIn();
  }

  ngOnInit() {
    this.sideNavActive = true;
  }

  toggled( sideNavActive: boolean ) {
    this.sideNavActive = sideNavActive;
  }
}
