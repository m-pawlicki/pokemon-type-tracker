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

  getEffectiveness(inputType: string, effectiveness: string): string[] {
    let effect: string[];
    switch(effectiveness) {
      case 'superEff': { 
        if(inputType === "none") {
          effect = [];
        } else { effect = TYPEATK[inputType].superEff; }
        break;
      }
      case 'regEff': {
        if(inputType === "none") {
          effect = [];
        } else { effect = this.get1xEffectiveness(inputType); }
        break;
      }
      case 'notVeryEff': {
        if(inputType === "none") {
          effect = [];
        } else { effect = TYPEATK[inputType].notVeryEff; }
        break;
      }
      case 'neverEff': {
        if(inputType === "none") {
          effect = [];
        } else { effect = TYPEATK[inputType].neverEff; }
        break;
      }
      case undefined: {
        effect = [];
        break;
      }
      default: {
        effect = [];
        break;
      }
    }
    return effect;
  }

  get1xEffectiveness (inputType: string): string[] {
    if (inputType === 'none') { return []; }
    let combinedTypes = TYPEATK[inputType].superEff
    .concat(TYPEATK[inputType].notVeryEff)
    .concat(TYPEATK[inputType].neverEff);
    let filteredTypes = TYPES.filter((type) => !combinedTypes.includes(type));
    return filteredTypes;
  }

  getMultiplier(inputType: string, searchedType: string) {
    if (searchedType === 'none') { 
      let el = document.getElementById('multiplier');
      if (el != null) { el.style.display = 'none';}
      return ''; 
    }
    else if (TYPEATK[inputType].superEff.includes(searchedType)) { return 2; }
    else if (TYPEATK[inputType].notVeryEff.includes(searchedType)) {return 0.5;}
    else if (TYPEATK[inputType].neverEff.includes(searchedType)) { return 0; }
    else { return 1; }
  }

}