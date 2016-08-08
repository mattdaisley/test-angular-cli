import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import { Hero, HeroService } from '../hero/index';
import { HeroDetailsComponent } from '../hero-details/index';

@Component({
  moduleId: module.id,
  selector: 'heroes-list',
  templateUrl: 'heroes-list.component.html',
  styleUrls: ['heroes-list.component.css'],
  directives: [HeroDetailsComponent],
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