import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import { AuthenticateService } from '../authenticate.service';

@Component({
  moduleId: module.id,
  selector: 'sign-in',
  templateUrl: 'sign-in.component.html',
  styleUrls: ['sign-in.component.css']
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
