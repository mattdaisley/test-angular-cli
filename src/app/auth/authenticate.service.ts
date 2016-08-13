import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { Http, Response } from '@angular/http';

// import localStorage from 'localStorage';

import 'rxjs/add/operator/map';
import { Observable } from 'rxjs/Observable';

@Injectable()
export class AuthenticateService {
  private usersUrl: string = 'http://127.0.0.1:7768/api/v0.1/auth/token';  // URL to web api
  private authToken: string;
  private loggedIn = false;

  constructor(
    private http: Http,
    private router: Router
  ) {
    this.authToken = localStorage.getItem('auth_token');
    this.loggedIn = !!this.authToken;
  }

  signIn(email, password) {
    let body = JSON.stringify({ email: email, password: password });

    return this.http.put( this.usersUrl, body)
              .map((res: Response) => res.json())
              .map(result => {
                console.log(result);
                if ( result.success === true ) {
                  localStorage.setItem('auth_token', result.token);
                  this.authToken = result.token;
                  this.loggedIn = true;
                  return true;
                } else {
                  this.router.navigate(['signin']);
                }
              });
  }

  getAuthToken() {
    if ( this.loggedIn == false ) this.router.navigate(['signin']);
    return this.authToken;
  }

}
