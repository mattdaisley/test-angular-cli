import { Injectable } from '@angular/core';
import { Http, Response, Headers, RequestOptions } from '@angular/http';

import 'rxjs/add/operator/map';
import { Observable }     from 'rxjs/Observable';

import { User } from './user.model';

@Injectable()
export class UserService {
  private usersUrl = 'http://localhost:7768/api/v0.1/users';  // URL to web api
  private authToken = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6MSwiaXNzIjoiaHR0cDovLzEyNy4wLjAuMTo3NzY4IiwicGVybWlzc2lvbnMiOiJzZWxmLGFkbWluIiwiaWF0IjoxNDcwNzAzMTY1LCJleHAiOjE0NzA3MDY3NjV9.mcs2fzXT_7WxV9euf5yrQtWMiy8gXB-RBht3C8YQat4';

  constructor(private http: Http) { }

  getUsers() : Observable<User[]> {
    let headers = new Headers({  
      'Content-Type': 'application/json',
      'x-access-token': this.authToken,
     });
    let options = new RequestOptions({ headers: headers });

    return this.http.get(this.usersUrl, options)
              .map((res: Response) => res.json().users as User[]);
  }

  getUser(id: number) : Observable<User> {
    let headers = new Headers({  
      'Content-Type': 'application/json',
      'x-access-token': this.authToken,
     });
    let options = new RequestOptions({ headers: headers });
    let url = this.usersUrl + '/' + id;

    return this.http.get(url, options)
              .map((res: Response) => res.json().users[0] as User);
    // return Observable.create(observer => {
    //   this.getUsers()
    //       .subscribe(users => {
    //         let User = users.find(User => User.id === id );
    //         observer.next(User);
    //         //call complete if you want to close this stream (like a promise)
    //         observer.complete();
    //       });
    // });
  }


}
