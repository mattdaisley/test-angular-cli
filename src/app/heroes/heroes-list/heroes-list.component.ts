import { Component, OnInit } from '@angular/core';

import { Hero, HeroService } from '../hero/index';
import { HeroDetailsComponent } from '../hero-details/index';

@Component({
  moduleId: module.id,
  selector: 'heroes-list',
  templateUrl: 'heroes-list.component.html',
  styleUrls: ['heroes-list.component.css'],
  directives: [HeroDetailsComponent]
})

export class HeroesListComponent implements OnInit {
  heroes: Hero[];

  selectedHero: Hero;

  constructor( private heroService: HeroService ) {}

  ngOnInit() {
    this.heroService.getHeroes()
      .subscribe(heroes => this.heroes = heroes);
    // this.heroes = this.heroService.getHeroes();
  }

  selectHero(hero: Hero) {
    this.selectedHero = hero;
  }
}