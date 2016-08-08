import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import { MD_CARD_DIRECTIVES } from '@angular2-material/card';

import { Hero, HeroService } from '../hero/index';
import { HeroDetailsComponent } from '../hero-details/index';

@Component({
  moduleId: module.id,
  selector: 'heroes-list',
  templateUrl: 'heroes-list.component.html',
  styleUrls: ['heroes-list.component.css'],
  directives: [
    MD_CARD_DIRECTIVES,
    HeroDetailsComponent
  ],
  providers: [HeroService]
})

export class HeroesListComponent implements OnInit {
  heroes: Hero[];

  selectedHero: Hero;

  constructor( 
    private heroService: HeroService,
    private router: Router
  ) {}

  ngOnInit() {
    this.heroService.getHeroes()
      .subscribe(heroes => this.heroes = heroes);
    // this.heroes = this.heroService.getHeroes();
  }

  selectHero(hero: Hero) {
    this.router.navigate(['/heroes', hero.id]);
  }
}