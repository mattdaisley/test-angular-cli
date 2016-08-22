import { Component, Input, Output, EventEmitter, OnInit } from '@angular/core';
import { ROUTER_DIRECTIVES } from '@angular/router';

import { MD_BUTTON_DIRECTIVES } from '@angular2-material/button';

import { AuthenticateService } from '../auth';

@Component({
  moduleId: module.id,
  selector: 'toolbar-component',
  templateUrl: 'toolbar.component.html',
  styleUrls: ['toolbar.component.css'],
  directives: [
    ROUTER_DIRECTIVES,
    MD_BUTTON_DIRECTIVES
  ],
  providers: [
    AuthenticateService
  ]
})
export class ToolbarComponent implements OnInit {
  @Input() sideNavActive: boolean;
  @Input() isLoggedIn: boolean;
  @Output() toggled = new EventEmitter<boolean>();

  constructor(
    private authService: AuthenticateService
  ) { }

  ngOnInit() {
    this.sideNavActive = true;
  }

  toggle() {
    this.sideNavActive = !this.sideNavActive;
    this.toggled.emit(this.sideNavActive);
  }

  // checkIsLoggedIn() {
  //   return this.authService.getIsLoggedIn();
  // }

}
