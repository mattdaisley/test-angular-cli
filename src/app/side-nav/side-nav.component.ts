import { Component, OnInit } from '@angular/core';

import { NavItem } from './nav-item';

@Component({
  moduleId: module.id,
  selector: 'side-nav',
  templateUrl: 'side-nav.component.html',
  styleUrls: ['side-nav.component.css']
})
export class SideNavComponent implements OnInit {
  navItems: NavItem[];

  constructor(

  ) { }

  ngOnInit() {
    this.navItems = [
      {
        route: '/users',
        title: 'Users'
      },
      {
        route: '/resume',
        title: 'Resume'
      }
    ];
  }

}
