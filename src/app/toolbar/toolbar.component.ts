import { Component, Input, Output, EventEmitter, OnInit } from '@angular/core';
import { ROUTER_DIRECTIVES } from '@angular/router';

@Component({
  moduleId: module.id,
  selector: 'toolbar',
  templateUrl: 'toolbar.component.html',
  styleUrls: ['toolbar.component.css'],
  directives: [
    ROUTER_DIRECTIVES
  ]
})
export class ToolbarComponent implements OnInit {
  @Input() sideNavActive: boolean;
  @Output() toggled = new EventEmitter<boolean>();
  
  constructor(

  ) { }

  ngOnInit() {
    this.sideNavActive = true;
  }

  toggle() {
    this.sideNavActive = !this.sideNavActive;
    this.toggled.emit(this.sideNavActive);
  }

}
