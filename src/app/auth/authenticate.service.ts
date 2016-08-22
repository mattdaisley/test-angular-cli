import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { Http, Response } from '@angular/http';

// import localStorage from 'localStorage';

import 'rxjs/add/operator/map';
import { Observable } from 'rxjs/Observable';

@Injectable()
export class AuthenticateService {
  private authUrl: string = 'http://127.0.0.1:7768/api/v0.1/auth/token';  // URL to web api
  private authToken: string;
  private isLoggedIn = false;

  constructor(
    private http: Http,
    private router: Router
  ) {
    this.authToken = localStorage.getItem('auth_token');
    this.isLoggedIn = !!this.authToken;
  }

  signIn(email, password) {
    let body = JSON.stringify({ email: email, password: password });
    this.isLoggedIn = true;
    console.log('signed in!', this.isLoggedIn);
    return this.http.put( this.authUrl, body)
              .map((res: Response) => res.json())
              .map(result => {
                if ( result.success === true ) {
                  localStorage.setItem('auth_token', result.token);
                  this.authToken = result.token;
                  this.isLoggedIn = true;
                  return true;
                } else {
                  this.router.navigate(['signin']);
                }
              });
  }

  signOut() {
    localStorage.removeItem('auth_token');
    this.authToken = null;
    this.isLoggedIn = false;
    this.router.navigate(['signin']);
  }

  getAuthToken() {
    if ( this.isLoggedIn == false ) this.router.navigate(['signin']);
    return this.authToken;
  }

  getIsLoggedIn() {
    // console.log('in this call', this.isLoggedIn);
    return this.isLoggedIn;
  }

}
