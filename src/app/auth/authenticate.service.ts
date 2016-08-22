import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { Http, Response } from '@angular/http';

// import localStorage from 'localStorage';

import 'rxjs/add/operator/map';
import { Observable } from 'rxjs/Observable';
import { BehaviorSubject } from 'rxjs/BehaviorSubject';

export interface AuthStatus {
  isLoggedIn:boolean;
}

@Injectable()
export class AuthenticateService {
  private authUrl: string = 'http://127.0.0.1:7768/api/v0.1/auth/token';  // URL to web api

  private loggedInStatus = new BehaviorSubject<boolean>(false);
  
  loggedInStatus$ = this.loggedInStatus.asObservable();

  constructor(
    private http: Http,
    private router: Router
  ) {
    this.changeLoggedInStatus( !!localStorage.getItem('auth_token') );
  }
  // service command
  changeLoggedInStatus(status) {
    console.log('changing status to', status);
    this.loggedInStatus.next(status);
  }

  signIn(email, password) {
    let body = JSON.stringify({ email: email, password: password });

    return this.http.put( this.authUrl, body)
              .map((res: Response) => res.json())
              .map(result => {
                if ( result.success === true ) {
                  localStorage.setItem('auth_token', result.token);
                  this.changeLoggedInStatus(true);
                  return true;
                } else {
                  this.router.navigate(['signin']);
                }
              });
  }

  signOut() {
    localStorage.removeItem('auth_token');
    this.changeLoggedInStatus(false);
    this.router.navigate(['signin']);
  }

  getAuthToken() {
    if ( !localStorage.getItem('auth_token') ) this.router.navigate(['signin']);
    return localStorage.getItem('auth_token');
  }

}
