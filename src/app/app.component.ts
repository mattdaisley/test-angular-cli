import { Component } from '@angular/core';

import './shared/rxjs-extensions';

import { HeroesListComponent } from './heroes/heroes-list';
import { HeroService } from './heroes/hero/index';

@Component({
  moduleId: module.id,
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.css'],
  directives: [HeroesListComponent],
  providers: [HeroService]
})
export class AppComponent {
  title = 'Angular CLI Testing';
}
