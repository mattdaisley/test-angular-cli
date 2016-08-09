import { Injectable } from '@angular/core';
import { Http, Response, Headers, RequestOptions } from '@angular/http';

import 'rxjs/add/operator/map';
import { Observable } from 'rxjs/Observable';

import { User } from './user.model';

@Injectable()
export class UserService {
  private usersUrl = 'http://localhost:7768/api/v0.1/users';  // URL to web api
  private authToken = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6MSwiaXNzIjoiaHR0cDovLzEyNy4wLjAuMTo3NzY4IiwicGVybWlzc2lvbnMiOiJzZWxmLGFkbWluIiwiaWF0IjoxNDcwNzUyMTUyLCJleHAiOjE0NzA3NTU3NTJ9.YOItJfWftjbAm95nnqZD4j7s8PAG6YQDz0V5hLxYEOI';

  constructor(private http: Http) { }

  buildHeaders(): Headers {
    return new Headers({
      'Content-Type': 'application/json',
      'x-access-token': this.authToken,
    });
  }

  getUsers(): Observable<User[]> {
    let headers = this.buildHeaders();
    let options = new RequestOptions({ headers: headers });

    return this.http.get(this.usersUrl, options)
              .map((res: Response) => res.json().users as User[]);
  }

  getUser(id: number): Observable<User> {
    let headers = this.buildHeaders();
    let options = new RequestOptions({ headers: headers });
    let url = this.usersUrl + '/' + id;

    return this.http.get(url, options)
              .map((res: Response) => res.json().users[0] as User);
  }


}
