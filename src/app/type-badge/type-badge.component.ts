import { Component, Input } from '@angular/core';
import { TYPEATK, TYPEDEF, TYPES } from ' poke-type';

@Component({
  selector: 'app-type-badge',
  templateUrl: './type-badge.component.html',
  styleUrls: ['./type-badge.component.css']
})

export class TypeBadgeComponent {
  types = TYPES;
  typeAtk = TYPEATK;
  typeDef = TYPEDEF;
  @Input() typeOneBadge = '';
  @Input() typeTwoBadge = '';
}