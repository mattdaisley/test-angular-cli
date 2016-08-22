import { Component, OnInit } from '@angular/core';

import './shared/rxjs-extensions';

import { AuthenticateService } from './auth';

@Component({
  moduleId: module.id,
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.css']
})
export class AppComponent implements OnInit {
  title = 'Angular CLI Testing';
  sideNavActive: boolean;
  // isLoggedIn: boolean;

  constructor(
    private authService: AuthenticateService
  ) { 
    // this.isLoggedIn = this.authService.getIsLoggedIn();
  }

  ngOnInit() {
    this.sideNavActive = true;
  }

  toggled( sideNavActive: boolean ) {
    this.sideNavActive = sideNavActive;
  }
}
