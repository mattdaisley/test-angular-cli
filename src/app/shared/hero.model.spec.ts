/* tslint:disable:no-unused-variable */

import { addProviders, async, inject } from '@angular/core/testing';
import { Hero } from './hero.model';

describe('Hero', () => {
  it('should create an instance', () => {
    expect(new Hero()).toBeTruthy();
  });

  it('should have an id', () => {
    let hero = {id: 0, name: 'matt', email: 'mattdaisley@gmail.com'};
    expect(hero.id).toBe(0);
  });

  it('should have a name', () => {
    let hero = {id: 0, name: 'matt', email: 'mattdaisley@gmail.com'};
    expect(hero.name).toBe('matt');
  });

  it('should have an email', () => {
    let hero = {id: 0, name: 'matt', email: 'mattdaisley@gmail.com'};
    expect(hero.email).toBe('mattdaisley@gmail.com');
  });
});
