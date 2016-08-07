import { Injectable } from '@angular/core';
import { Http, Response } from '@angular/http';

import 'rxjs/add/operator/map';

import { Hero } from './hero.model';

@Injectable()
export class HeroService {

  constructor(private http: Http) { }

  getHeroes() {
    return this.http.get('app/heroes/hero/heroes.json')
              .map((res: Response) => res.json());
    // return [
    //   {id: 0, name: 'matt'},
    //   {id: 1, name: 'jon'}
    // ];
  }
}
