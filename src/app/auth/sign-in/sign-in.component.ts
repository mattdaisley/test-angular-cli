import { Component, OnInit } from '@angular/core';
import { ROUTER_DIRECTIVES } from '@angular/router';

import { MD_CARD_DIRECTIVES } from '@angular2-material/card';
import { MD_BUTTON_DIRECTIVES } from '@angular2-material/button';
import { MdInput } from '@angular2-material/input';

@Component({
  moduleId: module.id,
  selector: 'sign-in',
  templateUrl: 'sign-in.component.html',
  styleUrls: ['sign-in.component.css'],
  directives: [
    ROUTER_DIRECTIVES,
    MD_CARD_DIRECTIVES,
    MD_BUTTON_DIRECTIVES,
    MdInput
  ]
})
export class SignInComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
