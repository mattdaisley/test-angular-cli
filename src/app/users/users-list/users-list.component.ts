import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import { User, UserService } from '../user/index';

@Component({
  moduleId: module.id,
  selector: 'users-list',
  templateUrl: 'users-list.component.html',
  styleUrls: ['users-list.component.css']
})

export class UsersListComponent implements OnInit {
  users: User[];

  selectedUser: User;

  constructor(
    private userService: UserService,
    private router: Router
  ) {}

  ngOnInit() {
    this.userService.getUsers()
      .subscribe(users => this.users = users);
  }

  selectUser(user: User) {
    this.router.navigate(['/users', user.id]);
  }
}
