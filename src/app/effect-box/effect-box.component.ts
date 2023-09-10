import { Component, Input } from '@angular/core';
import { TYPES } from 'src/ poke-type';

@Component({
  selector: 'app-effect-box',
  templateUrl: './effect-box.component.html',
  styleUrls: ['./effect-box.component.css']
})
export class EffectBoxComponent {
  @Input() typeOneBox = '';
  @Input() typeTwoBox = '';
  @Input() resultTypes = '';
}