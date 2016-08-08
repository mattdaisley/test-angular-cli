import { Injectable } from '@angular/core';
import { Http, Response } from '@angular/http';

import 'rxjs/add/operator/map';
import { Observable }     from 'rxjs/Observable';

import { Hero } from './hero.model';

@Injectable()
export class HeroService {

  constructor(private http: Http) { }

  getHeroes() : Observable<Hero[]> {
    return this.http.get('app/heroes/hero/heroes.json')
              .map((res: Response) => res.json());
  }

  getHero(id: number) : Observable<Hero> {
    return Observable.create(observer => {
      this.getHeroes()
          .subscribe(heroes => {
            let hero = heroes.find(hero => hero.id === id );
            observer.next(hero);
            //call complete if you want to close this stream (like a promise)
            observer.complete();
          });
    });
  }
}
