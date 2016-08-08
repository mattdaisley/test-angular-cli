import { Component, OnInit, Input, OnDestroy } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

import { Hero, HeroService } from '../hero/index';

@Component({
  moduleId: module.id,
  selector: 'hero-details',
  templateUrl: 'hero-details.component.html',
  styleUrls: ['hero-details.component.css'],
  providers: [HeroService]
})
export class HeroDetailsComponent implements OnInit, OnDestroy {
  @Input() hero: Hero;
  sub: any;

  constructor(
    private route: ActivatedRoute,
    private heroService: HeroService
  ) { }

  ngOnInit() {
    this.sub = this.route.params.subscribe(params => {
      this.heroService.getHero(+params['id'])
        .subscribe(hero => this.hero = hero);
    })
  }

  ngOnDestroy() {
    this.sub.unsubscribe();
  }

  goBack() {
    window.history.back();
  }

}
