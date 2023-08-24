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
  @Input() badgeType = '';
  //attackingType = TYPEATK;
  //defendingType = TYPEDEF;

  getAttackEffectiveness(inputType: string, effectiveness: string): string[] {
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
        } else { effect = this.get1xAttackEffectiveness(inputType); }
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

  get1xAttackEffectiveness(inputType: string): string[] {
    if (inputType === 'none') { return []; }
    let combinedTypes = TYPEATK[inputType].superEff
    .concat(TYPEATK[inputType].notVeryEff)
    .concat(TYPEATK[inputType].neverEff);
    let filteredTypes = TYPES.filter((type) => !combinedTypes.includes(type));
    return filteredTypes;
  }

  getAttackMultiplier(inputType: string, searchedType: string) {
    if (TYPEATK[inputType].superEff.includes(searchedType)) { return 2; }
    else if (TYPEATK[inputType].notVeryEff.includes(searchedType)) {return 0.5;}
    else if (TYPEATK[inputType].neverEff.includes(searchedType)) { return 0; }
    else { return 1; }
  }

  getDefenseEffectiveness(inputType: string, effectiveness: string): string[] {
      let effect: string[];
      switch(effectiveness) {
        case 'doubleEff': { 
          if(inputType === "none") {
            effect = [];
          } else { effect = TYPEDEF[inputType].superEff; }
          break;
        }
        case 'regEff': {
          if(inputType === "none") {
            effect = [];
          } else { effect = this.get1xDefenseEffectiveness(inputType); }
          break;
        }
        case 'halfEff': {
          if(inputType === "none") {
            effect = [];
          } else { effect = TYPEDEF[inputType].notVeryEff; }
          break;
        }
        case 'neverEff': {
          if(inputType === "none") {
            effect = [];
          } else { effect = TYPEDEF[inputType].neverEff; }
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

  get1xDefenseEffectiveness(inputType: string): string[] {
    if (inputType === 'none') { return []; }
    let combinedTypes = TYPEDEF[inputType].superEff
    .concat(TYPEDEF[inputType].notVeryEff)
    .concat(TYPEDEF[inputType].neverEff);
    let filteredTypes = TYPES.filter((type) => !combinedTypes.includes(type));
    return filteredTypes;
  }

  getDefenseMultiplier(inputType: string, searchedType: string) {
    if (TYPEDEF[inputType].superEff.includes(searchedType)) { return 2; }
    else if (TYPEDEF[inputType].notVeryEff.includes(searchedType)) {return 0.5;}
    else if (TYPEDEF[inputType].neverEff.includes(searchedType)) { return 0; }
    else { return 1; }
  }
}