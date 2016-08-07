import { Component, OnInit, Input } from '@angular/core';

import { Hero } from '../hero/index';

@Component({
  moduleId: module.id,
  selector: 'hero-details',
  templateUrl: 'hero-details.component.html',
  styleUrls: ['hero-details.component.css']
})
export class HeroDetailsComponent implements OnInit {
  @Input() hero: Hero;

  constructor() { }

  ngOnInit() {

  }

}
