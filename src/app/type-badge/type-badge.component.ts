import { Component, Input } from '@angular/core';
import { TYPEATK, TYPEDEF, TYPES } from ' poke-type';

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
    let combo = this.typeAtk[input].superEff.concat(this.typeAtk[input].notVeryEff, this.typeAtk[input].neverEff);
    let filtered = [... new Set(combo)];
    return filtered;
  }

  getMultiplier(input: string, type: string) {
    if (this.typeAtk[input].superEff.includes(type)) { return 2; }
    else if (this.typeAtk[input].notVeryEff.includes(type)) {return 0.5;}
    else if (this.typeAtk[input].neverEff.includes(type)) { return 0; }
    else { return 1; }
  }

filterTypes(firstType: string, secondType: string) {
  let filterSuper = [... new Set(this.typeAtk[firstType].superEff.concat(this.typeAtk[secondType].superEff))];
  let filterResist = [... new Set(this.typeAtk[firstType].notVeryEff.concat(this.typeAtk[secondType].notVeryEff))];
  let filterImmune = [... new Set(this.typeAtk[firstType].neverEff.concat(this.typeAtk[secondType].neverEff))];
  return {filterSuper, filterResist, filterImmune};
}

combineSuper(typeOne: string, typeTwo: string) {
  if (typeTwo === null || typeTwo === undefined) { 
    return this.typeAtk[typeOne].superEff; }
  else if (typeOne === null || typeOne === undefined) {
    return this.typeAtk[typeTwo].superEff; }
    else if ((typeOne == null || typeOne == undefined) && (typeTwo == null || typeTwo == undefined)) {
      return;
    }
  else {
      return this.filterTypes(typeOne, typeTwo).filterSuper;
  }
}

combineResist(typeOne: string, typeTwo: string) {
  if (typeTwo === null || typeTwo === undefined) { 
    return this.typeAtk[typeOne].notVeryEff; }
  else if (typeOne === null || typeOne === undefined) {
    return this.typeAtk[typeTwo].notVeryEff; }
  else {
    return this.filterTypes(typeOne, typeTwo).filterResist;
  }
}

combineImmune(typeOne: string, typeTwo: string) {
  if (typeTwo === null || typeTwo === undefined) { 
    return this.typeAtk[typeOne].neverEff; }
  else if (typeOne === null || typeOne === undefined) {
    return this.typeAtk[typeTwo].neverEff; }
  else {
    return this.filterTypes(typeOne, typeTwo).filterImmune;
  }
}

  combineEffectiveness(typeOne: string, typeTwo: string) {
    //takes both types, combining entries with each other (and truncating duplicates?), uses that to filter and obtain the 1x effective entries
    if (typeTwo === null || typeTwo === undefined) {
      return this.getEffectiveness(typeOne);
    }
    else if (typeOne === null || typeOne === undefined)
    { return this.getEffectiveness(typeTwo); 
    }
    else {
      let comboTypes = this.getEffectiveness(typeOne).concat(this.getEffectiveness(typeTwo));
      let filteredTypes = [... new Set(comboTypes)];
      return comboTypes;
    }
  }

  combineMultiplier(typeOne:string, typeTwo: string, type: string) {
    //takes both types, applies relevant multipliers to unique ones and multiplies duplicate ones togehter
    // i.e. a type combo that has /two/ super-effective (2x) toward grass will be 4x total
    let firstMulti = this.getMultiplier(typeOne, type);
  if(typeTwo === undefined || typeTwo === null) { 
    return firstMulti;
   }
  else { 
    let secondMulti = this.getMultiplier(typeTwo, type);
    return firstMulti * secondMulti;
   }
  }

}