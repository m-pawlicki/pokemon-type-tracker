import { Component, OnInit, Output, Input, EventEmitter } from '@angular/core';
import { TYPES } from ' poke-type';

@Component({
  selector: 'app-type-selector',
  templateUrl: './type-selector.component.html',
  styleUrls: ['./type-selector.component.css']
})

export class TypeSelectorComponent {
  types = TYPES;
  blank = 'none';
 @Output() typeOne = new EventEmitter<string>();
 @Output() typeTwo = new EventEmitter<string>();
//@Output() blank = "none";

  sendTypeOne(value: string) {
    this.typeOne.emit(value);
  }
  
  sendTypeTwo(value: string) {
    this.typeTwo.emit(value);
  }

  ngOnInit() {
  }

}
