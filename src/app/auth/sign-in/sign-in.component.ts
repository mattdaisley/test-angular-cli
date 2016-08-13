import { Component, OnInit } from '@angular/core';
import { ROUTER_DIRECTIVES, Router } from '@angular/router';

import { MD_CARD_DIRECTIVES } from '@angular2-material/card';
import { MD_BUTTON_DIRECTIVES } from '@angular2-material/button';
import { MdInput } from '@angular2-material/input';

import { AuthenticateService } from '../authenticate.service';

@Component({
  moduleId: module.id,
  selector: 'sign-in',
  templateUrl: 'sign-in.component.html',
  styleUrls: ['sign-in.component.css'],
  directives: [
    ROUTER_DIRECTIVES,
    MD_CARD_DIRECTIVES,
    MD_BUTTON_DIRECTIVES,
    MdInput
  ],
  providers: [
    AuthenticateService
  ]
})
export class SignInComponent implements OnInit {
  private email;
  private password;

  constructor(
    private authService: AuthenticateService,
    private router: Router
  ) { }

  ngOnInit() {
  }

  signIn() {
    this.authService.signIn(this.email, this.password)
                  .subscribe((result) => {
                    if (result) {
                      this.router.navigate(['']);
                    }
                  });
  }

}
