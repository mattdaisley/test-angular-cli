/* tslint:disable:no-unused-variable */

import { By }           from '@angular/platform-browser';
import { DebugElement } from '@angular/core';
import { addProviders, async, inject } from '@angular/core/testing';
import { HeroDetailsComponent } from './hero-details.component';

describe('Component: HeroDetails', () => {
  it('should create an instance', () => {
    let component = new HeroDetailsComponent();
    expect(component).toBeTruthy();
  });
});
