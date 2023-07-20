import { Component, Input } from '@angular/core';
import { TYPES } from ' poke-type';

@Component({
  selector: 'app-effect-box',
  templateUrl: './effect-box.component.html',
  styleUrls: ['./effect-box.component.css']
})
export class EffectBoxComponent {
  @Input() typeOne = '';
  @Input() typeTwo = '';
}