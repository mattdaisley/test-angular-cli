import { Component, OnInit } from '@angular/core';
import { ROUTER_DIRECTIVES } from '@angular/router';

import { NavItem } from './nav-item';

@Component({
  moduleId: module.id,
  selector: 'side-nav',
  templateUrl: 'side-nav.component.html',
  styleUrls: ['side-nav.component.css'],
  directives: [
    ROUTER_DIRECTIVES
  ]
})
export class SideNavComponent implements OnInit {
  navItems: NavItem[];

  constructor(

  ) { }

  ngOnInit() {
    this.navItems = [
      {
        route: '/heroes',
        title: 'Heroes'
      },
      {
        route: '/heroes2',
        title: 'Second Heroes'
      },
      {
        route: '/heroes3',
        title: 'Third Heroes'
      },
    ]
  }

}
