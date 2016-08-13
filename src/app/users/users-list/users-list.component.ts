import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import { MD_CARD_DIRECTIVES } from '@angular2-material/card';
import { MD_LIST_DIRECTIVES } from '@angular2-material/list/list';

import { User, UserService } from '../user/index';
import { UserDetailsComponent } from '../user-details/index';
import { AuthenticateService } from '../../auth';

@Component({
  moduleId: module.id,
  selector: 'users-list',
  templateUrl: 'users-list.component.html',
  styleUrls: ['users-list.component.css'],
  directives: [
    MD_CARD_DIRECTIVES,
    MD_LIST_DIRECTIVES,
    UserDetailsComponent
  ],
  providers: [
    UserService,
    AuthenticateService
  ]
})

export class UsersListComponent implements OnInit {
  users: User[];

  selectedUser: User;

  constructor(
    private UserService: UserService,
    private router: Router
  ) {}

  ngOnInit() {
    this.UserService.getUsers()
      .subscribe(users => this.users = users);
  }

  selectUser(user: User) {
    this.router.navigate(['/users', user.id]);
  }
}
