import { Component, Input, Output, EventEmitter, OnInit, OnDestroy } from '@angular/core';

import { Subscription } from 'rxjs/Subscription';

import { AuthenticateService } from '../auth';

@Component({
  moduleId: module.id,
  selector: 'toolbar-component',
  templateUrl: 'toolbar.component.html',
  styleUrls: ['toolbar.component.css']
})
export class ToolbarComponent implements OnInit, OnDestroy {
  @Input() sideNavActive: boolean;
  // @Input() isLoggedIn: boolean;
  @Output() toggled = new EventEmitter<boolean>();

  loggedInStatus: boolean;
  subscription: Subscription;

  constructor( private authService: AuthenticateService ) { }

  ngOnInit() {
    this.sideNavActive = true;
    this.subscription = this.authService.loggedInStatus$.subscribe(
      loggedInStatus => {this.loggedInStatus = loggedInStatus; console.log('here', loggedInStatus);}
    );
  }

  toggle() {
    this.sideNavActive = !this.sideNavActive;
    this.toggled.emit(this.sideNavActive);
  }

  // checkIsLoggedIn() {
  //   return this.authService.getIsLoggedIn();
  // }

  ngOnDestroy() {
    // prevent memory leak when component is destroyed
    this.subscription.unsubscribe();
  }
}
