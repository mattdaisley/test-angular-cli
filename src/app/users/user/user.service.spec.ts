/* tslint:disable:no-unused-variable */
import {
    it,
    inject,
    describe,
    beforeEach,
    beforeEachProviders,
    expect,
} from '@angular/core/testing';
import { BaseRequestOptions, Response, ResponseOptions, Http } from '@angular/http';
import { MockBackend, MockConnection } from '@angular/http/testing';

import { provide } from '@angular/core';

import { UserService } from './user.service';

describe('UserService: getUsers()', () => {

    beforeEachProviders(() => [
        UserService,
        BaseRequestOptions,
        MockBackend,
        provide(Http, {
            deps: [MockBackend, BaseRequestOptions],
            useFactory: (backend: MockBackend, defaultOptions: BaseRequestOptions) => {
                return new Http(backend, defaultOptions);
            },
        }),
    ]);

    beforeEach(<any>inject([MockBackend], (backend: MockBackend) => {
        const baseResponse = new Response(new ResponseOptions(
          { 
            body: {
              "users": [
                {
                  "id": 1,
                  "email": "mattdaisley@gmail.com",
                  "password": "$2a$10$NXx/i88u1IUQQGKQULtYx.i33BPJQ4lqkBhOY6l//324hc6f0ThBe",
                  "name": "mattdaisley@gmail.com",
                  "permissions": "self,admin"
                },
                {
                  "id": 15,
                  "email": "mattdaisley-testing@gmail.com",
                  "password": "$2a$10$5ujIT4c/97NfCAMl1Bzjt.KO4XMq9ergFEUA9Umu7wzdTqOJBEk.u",
                  "name": "mattdaisley-testing@gmail.com",
                  "permissions": "self"
                },
                {
                  "id": 16,
                  "email": "Jbackensto@gmail.com",
                  "password": "$2a$10$wLpXTcFvd8.S.qEJEfOthuk.YK40k49.XYYDupQt4P1wR375cvE/a",
                  "name": "Jbackensto@gmail.com",
                  "permissions": "self"
                },
                {
                  "id": 17,
                  "email": "Jondaisley@gmail.com",
                  "password": "$2a$10$1ZcDylb0C0JA5hdLVwSyAecq8VbNRYy5bYEZqaqVY1vD7k.6rwZc2",
                  "name": "Jondaisley@gmail.com",
                  "permissions": "self"
                }
              ]
            }
          }
        ));
        backend.connections.subscribe((c: MockConnection) => c.mockRespond(baseResponse));
    }));

    it('should return mocked response', inject([UserService], (userService: UserService) => {
      userService.getUsers().subscribe((users) => {
        expect(users.length).toBe(4);
      });
    }));
});

describe('UserService: getUser(1)', () => {

    beforeEachProviders(() => [
        UserService,
        BaseRequestOptions,
        MockBackend,
        provide(Http, {
            deps: [MockBackend, BaseRequestOptions],
            useFactory: (backend: MockBackend, defaultOptions: BaseRequestOptions) => {
                return new Http(backend, defaultOptions);
            },
        }),
    ]);

    beforeEach(<any>inject([MockBackend], (backend: MockBackend) => {
        const baseResponse = new Response(new ResponseOptions(
          { 
            body: {
              "users": [
                {
                  "id": 1,
                  "email": "mattdaisley@gmail.com",
                  "password": "$2a$10$NXx/i88u1IUQQGKQULtYx.i33BPJQ4lqkBhOY6l//324hc6f0ThBe",
                  "name": "mattdaisley@gmail.com",
                  "permissions": "self,admin"
                }
              ]
            }
          }
        ));
        backend.connections.subscribe((c: MockConnection) => c.mockRespond(baseResponse));
    }));

    it('should return mocked response', inject([UserService], (userService: UserService) => {
      userService.getUser(1).subscribe((user) => {
        expect(user.id).toBe(1);
        expect(user.email).toBe("mattdaisley@gmail.com");
        expect(user.name).toBe("mattdaisley@gmail.com");
      });
    }));
});