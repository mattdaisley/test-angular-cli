import { bootstrap } from '@angular/platform-browser-dynamic';
import { enableProdMode, provide } from '@angular/core';
import { Router } from '@angular/router';
import {HTTP_PROVIDERS, Http, Request, RequestOptionsArgs, Response, XHRBackend, RequestOptions, ConnectionBackend, Headers} from '@angular/http';
import { disableDeprecatedForms, provideForms } from '@angular/forms';
import { LocationStrategy, HashLocationStrategy } from '@angular/common';

import { Observable } from 'rxjs/Observable';

import { AppComponent, environment, appRouterProviders } from './app/';

if (environment.production) {
  enableProdMode();
}

// HttpInterceptor implemenation from https://www.illucit.com/blog/2016/03/angular2-http-authentication-interceptor/
class HttpInterceptor extends Http {

  constructor(backend: ConnectionBackend, defaultOptions: RequestOptions, private _router: Router) {
    super(backend, defaultOptions);
  }

  request(url: string | Request, options?: RequestOptionsArgs): Observable<Response> {
      return this.intercept(super.request(url, options));
  }

  get(url: string, options?: RequestOptionsArgs): Observable<Response> {
      return this.intercept(super.get(url,options));
  }

  post(url: string, body: string, options?: RequestOptionsArgs): Observable<Response> {   
      return this.intercept(super.post(url, body, this.getRequestOptionArgs(options)));
  }

  put(url: string, body: string, options?: RequestOptionsArgs): Observable<Response> {
      return this.intercept(super.put(url, body, this.getRequestOptionArgs(options)));
  }

  delete(url: string, options?: RequestOptionsArgs): Observable<Response> {
      return this.intercept(super.delete(url, options));
  }
  
  getRequestOptionArgs(options?: RequestOptionsArgs) : RequestOptionsArgs {
      if (options == null) {
          options = new RequestOptions();
      }
      if (options.headers == null) {
          options.headers = new Headers();
      }
      options.headers.append('Content-Type', 'application/json');
      return options;
  }

  intercept(observable: Observable<Response>): Observable<Response> {
    return observable.catch((err, source) => {
      if ( err.status  == 401 ) {
        this._router.navigate(['/signin']);
        return Observable.of();
      } else {
        return Observable.throw(err);
      }
    });
  }
}

bootstrap(AppComponent, [
  appRouterProviders,
  HTTP_PROVIDERS,
  disableDeprecatedForms(),
  provideForms(),
  provide(LocationStrategy, { useClass: HashLocationStrategy }),
  provide(Http, {
    useFactory: (xhrBackend: XHRBackend, requestOptions: RequestOptions, router: Router) => new HttpInterceptor(xhrBackend, requestOptions, router),
    deps: [XHRBackend, RequestOptions, Router]
  })
]);
