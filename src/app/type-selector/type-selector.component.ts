import { Component } from '@angular/core';
import { TYPES } from ' poke-type';

@Component({
  selector: 'app-type-selector',
  templateUrl: './type-selector.component.html',
  styleUrls: ['./type-selector.component.css']
})
export class TypeSelectorComponent {
  types = TYPES;
  typeOneSelect = '';
  typeTwoSelect = '';
  none = "blank";
}