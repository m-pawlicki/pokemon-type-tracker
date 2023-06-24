import { Component } from '@angular/core';
import { TYPES } from 'type';

@Component({
  selector: 'app-type-badge',
  templateUrl: './type-badge.component.html',
  styleUrls: ['./type-badge.component.css']
})

export class TypeBadgeComponent {
  types = TYPES;
}