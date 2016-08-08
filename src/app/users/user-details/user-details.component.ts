import { Component, OnInit, Input, OnDestroy } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

import { MD_CARD_DIRECTIVES } from '@angular2-material/card';
import { MD_BUTTON_DIRECTIVES } from '@angular2-material/button';
import { MdInput } from '@angular2-material/input';

import { User, UserService } from '../user/index';

@Component({
  moduleId: module.id,
  selector: 'User-details',
  templateUrl: 'User-details.component.html',
  styleUrls: ['User-details.component.css'],
  directives: [
    MD_CARD_DIRECTIVES,
    MD_BUTTON_DIRECTIVES,
    MdInput
  ],
  providers: [UserService]
})
export class UserDetailsComponent implements OnInit, OnDestroy {
  @Input() User: User;
  sub: any;

  constructor(
    private route: ActivatedRoute,
    private UserService: UserService
  ) { }

  ngOnInit() {
    this.sub = this.route.params.subscribe(params => {
      this.UserService.getUser(+params['id'])
        .subscribe(User => this.User = User);
    })
  }

  ngOnDestroy() {
    this.sub.unsubscribe();
  }

  goBack() {
    window.history.back();
  }

}
