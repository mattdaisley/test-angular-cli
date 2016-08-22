/* tslint:disable:no-unused-variable */

// import { addProviders, async, inject } from '@angular/core/testing';
/// <reference path="../../typings/globals/jasmine/index.d.ts" />
import {
  inject, addProviders
} from '@angular/core/testing';

import { AppComponent } from './app.component';

describe('App: TestAngularCli', () => {
  beforeEach(() => {
    addProviders([AppComponent]);
  });

  it('should create the app',
    inject([AppComponent], (app: AppComponent) => {
      expect(app).toBeTruthy();
    }));

  it('should have as title \'app works!\'',
    inject([AppComponent], (app: AppComponent) => {
      expect(app.title).toEqual('Angular CLI Testing');
    }));

  it('sideNavActive should default to true',
    inject([AppComponent], (app: AppComponent) => {
      app.ngOnInit();
      expect(app.sideNavActive).toBeTruthy();
    }));

  it('should set sideNavActive state to false',
    inject([AppComponent], (app: AppComponent) => {
      app.ngOnInit();
      app.toggled( false );
      expect(app.sideNavActive).toBeFalsy();
    }));
});
