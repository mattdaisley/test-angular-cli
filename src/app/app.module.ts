import { NgModule }       from '@angular/core';
import { BrowserModule  } from '@angular/platform-browser';
import { AppComponent, environment, appRouterProviders } from './';
import { enableProdMode, provide } from '@angular/core';
import { LocationStrategy, HashLocationStrategy } from '@angular/common';
import { HTTP_PROVIDERS, Http, Request, RequestOptionsArgs, Response, XHRBackend, RequestOptions, ConnectionBackend, Headers } from '@angular/http';

import { Observable } from 'rxjs/Observable';

import { HttpModule } from '@angular/http';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { Router } from '@angular/router';

import { MdButtonModule } from '@angular2-material/button';
import { MdCardModule } from '@angular2-material/card';
import { MdCoreModule } from '@angular2-material/core';
import { MdInputModule } from '@angular2-material/input';
import { MdListModule } from '@angular2-material/list';

import { HomeComponent } from './home/index';
import { UsersListComponent } from './users/users-list/index';
import { UserDetailsComponent } from './users/user-details/index';
import { ResumeComponent } from './resume/resume.component';
import { SignInComponent } from './auth/sign-in';
import { SideNavComponent } from './side-nav/index';
import { ToolbarComponent } from './toolbar/index';

import { UserService } from './users/user/index';
import { AuthenticateService } from './auth';

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

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    UsersListComponent,
    UserDetailsComponent,
    ResumeComponent,
    SignInComponent,
    SideNavComponent,
    ToolbarComponent
  ],
  providers: [
    appRouterProviders,
    provide(LocationStrategy, { useClass: HashLocationStrategy }),
    provide(Http, {
      // useFactory: (xhrBackend: XHRBackend, requestOptions: RequestOptions, router: RouterModule) => new HttpInterceptor(xhrBackend, requestOptions, router),
      useFactory: (xhrBackend: XHRBackend, requestOptions: RequestOptions, router: Router) => new HttpInterceptor(xhrBackend, requestOptions, router),
      deps: [XHRBackend, RequestOptions, RouterModule]
    }),
    UserService,
    AuthenticateService
  ],
  imports:      [
    BrowserModule,
    HttpModule,
    FormsModule,
    RouterModule,
    MdButtonModule,
    MdCardModule,
    MdCoreModule,
    MdInputModule,
    MdListModule
  ],
  bootstrap:    [AppComponent],
})
export class AppModule {}




// import { bootstrap } from '@angular/platform-browser-dynamic';
// import { enableProdMode, provide } from '@angular/core';
// import { LocationStrategy, HashLocationStrategy } from '@angular/common';
// import { Router } from '@angular/router';
// import {HTTP_PROVIDERS, Http, Request, RequestOptionsArgs, Response, XHRBackend, RequestOptions, ConnectionBackend, Headers} from '@angular/http';
// import { disableDeprecatedForms, provideForms } from '@angular/forms';

// import { Observable } from 'rxjs/Observable';

// import { AppComponent, environment, appRouterProviders } from './app/';

// if (environment.production) {
//   enableProdMode();
// }

// // HttpInterceptor implemenation from https://www.illucit.com/blog/2016/03/angular2-http-authentication-interceptor/
// class HttpInterceptor extends Http {

//   constructor(backend: ConnectionBackend, defaultOptions: RequestOptions, private _router: Router) {
//     super(backend, defaultOptions);
//   }

//   request(url: string | Request, options?: RequestOptionsArgs): Observable<Response> {
//       return this.intercept(super.request(url, options));
//   }

//   get(url: string, options?: RequestOptionsArgs): Observable<Response> {
//       return this.intercept(super.get(url,options));
//   }

//   post(url: string, body: string, options?: RequestOptionsArgs): Observable<Response> {   
//       return this.intercept(super.post(url, body, this.getRequestOptionArgs(options)));
//   }

//   put(url: string, body: string, options?: RequestOptionsArgs): Observable<Response> {
//       return this.intercept(super.put(url, body, this.getRequestOptionArgs(options)));
//   }

//   delete(url: string, options?: RequestOptionsArgs): Observable<Response> {
//       return this.intercept(super.delete(url, options));
//   }
  
//   getRequestOptionArgs(options?: RequestOptionsArgs) : RequestOptionsArgs {
//       if (options == null) {
//           options = new RequestOptions();
//       }
//       if (options.headers == null) {
//           options.headers = new Headers();
//       }
//       options.headers.append('Content-Type', 'application/json');
//       return options;
//   }

//   intercept(observable: Observable<Response>): Observable<Response> {
//     return observable.catch((err, source) => {
//       if ( err.status  == 401 ) {
//         this._router.navigate(['/signin']);
//         return Observable.of();
//       } else {
//         return Observable.throw(err);
//       }
//     });
//   }
// }

// bootstrap(AppComponent, [
//   appRouterProviders,
//   HTTP_PROVIDERS,
//   disableDeprecatedForms(),
//   provideForms(),
//   provide(LocationStrategy, { useClass: HashLocationStrategy }),
//   provide(Http, {
//     useFactory: (xhrBackend: XHRBackend, requestOptions: RequestOptions, router: Router) => new HttpInterceptor(xhrBackend, requestOptions, router),
//     deps: [XHRBackend, RequestOptions, Router]
//   })
// ]);
