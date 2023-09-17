import { Component, OnInit, Output, Input, EventEmitter } from '@angular/core';
import { TYPEATK, TYPEDEF, TYPES } from 'src/poke-type';
import { TypeBadgeComponent } from '../type-badge/type-badge.component';

@Component({
  selector: 'app-type-selector',
  templateUrl: './type-selector.component.html',
  styleUrls: ['./type-selector.component.css']
})

export class TypeSelectorComponent {
  typeList = TYPES;
  @Output() newTypeOneEvent = new EventEmitter<string>();
  @Output() newTypeTwoEvent = new EventEmitter<string>();
  none = "none";
  @Input() selectCount = "";

  sendTypeOne(value: string) {
    this.newTypeOneEvent.emit(value);
  }

  sendTypeTwo(value: string) {
    this.newTypeTwoEvent.emit(value);
  }

  selectClicker() {
    const selectElement = document.querySelector('.select:first-child') as HTMLElement;
    if(selectElement) {
      selectElement.focus();
      selectElement.click();
    }
  }

}
