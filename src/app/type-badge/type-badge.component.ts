import { Component, Input } from '@angular/core';
import { TYPEATK, TYPEDEF, TYPES } from ' poke-type';
import { combineLatest } from 'rxjs';

@Component({
  selector: 'app-type-badge',
  templateUrl: './type-badge.component.html',
  styleUrls: ['./type-badge.component.css']
})

export class TypeBadgeComponent {
  typeList = TYPES;
  typeAtk = TYPEATK;
  typeDef = TYPEDEF;
  @Input() typeOneBadge = '';
  @Input() typeTwoBadge = '';

  getEffectiveness(input: string): string[] {
    let filteredTypes: string[];
    let combinedTypes: string[];
    combinedTypes = this.typeAtk[input].superEff.concat(
      this.typeAtk[input].notVeryEff
    ).concat(this.typeAtk[input].neverEff)
    filteredTypes = this.typeList.filter(function(type) {
      return !combinedTypes.includes(type) })
      return filteredTypes;
  }

}