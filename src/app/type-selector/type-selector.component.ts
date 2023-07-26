import { Component, OnInit, Output, Input, EventEmitter } from '@angular/core';
import { TYPES } from ' poke-type';

@Component({
  selector: 'app-type-selector',
  templateUrl: './type-selector.component.html',
  styleUrls: ['./type-selector.component.css']
})

export class TypeSelectorComponent {
  typeList = TYPES;
  @Output() newTypeOneEvent = new EventEmitter<string>();
  @Output() newTypeTwoEvent = new EventEmitter<string>();
  none = null;

  sendTypeOne(value: string) {
    this.newTypeOneEvent.emit(value);
  }

  sendTypeTwo(value: string) {
    this.newTypeTwoEvent.emit(value);
  }

}
