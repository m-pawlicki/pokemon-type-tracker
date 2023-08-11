import { Component, Input } from '@angular/core';
import { TYPEATK, TYPEDEF, TYPES } from 'src/ poke-type';

@Component({
  selector: 'app-type-badge',
  templateUrl: './type-badge.component.html',
  styleUrls: ['./type-badge.component.css']
})

export class TypeBadgeComponent {
  @Input() typeOneBadge = '';
  @Input() typeTwoBadge = '';
  attackingType = TYPEATK;
  defendingType = TYPEDEF;

  get1xEffectiveness (attackType: string): string[] {
    if (attackType === 'none') {return [] }
    let combinedTypes = TYPEATK[attackType].superEff
    .concat(TYPEATK[attackType].notVeryEff)
    .concat(TYPEATK[attackType].neverEff);
    let filteredTypes = TYPES.filter((type) => !combinedTypes.includes(type));
    return filteredTypes;
  }

  getMultiplier(inputType: string, searchedType: string) {
    if (TYPEATK[inputType].superEff.includes(searchedType)) { return 2; }
    else if (TYPEATK[inputType].notVeryEff.includes(searchedType)) {return 0.5;}
    else if (TYPEATK[inputType].neverEff.includes(searchedType)) { return 0; }
    else { return 1; }
  }

}