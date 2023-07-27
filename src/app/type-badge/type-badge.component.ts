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

  getEffectiveness(type: string): string[] {
    let combo: string[] = [];
    let filtered: string[] = [];
    if (this.typeAtk[type]) {
      combo = this.typeAtk[type].superEff.concat(this.typeAtk[type].notVeryEff, this.typeAtk[type].neverEff);
      filtered = [... new Set(combo)];
    }
    return filtered;
  }

  getMultiplier(input: string, type: string) {
    if (this.typeAtk[input].superEff.includes(type)) { return 2; }
    else if (this.typeAtk[input].notVeryEff.includes(type)) {return 0.5;}
    else if (this.typeAtk[input].neverEff.includes(type)) { return 0; }
    else { return 1; }
  }

filterTypes(firstType: string, secondType: string) {
  let filterSuper: string[] = [];
  let filterResist: string[] = [];
  let filterImmune: string[] = [];

  if (this.typeAtk[firstType]) {
    filterSuper = this.typeAtk[firstType].superEff;
    filterResist = this.typeAtk[firstType].notVeryEff;
    filterImmune = this.typeAtk[firstType].neverEff;
  }

  if (this.typeAtk[secondType]) {
    filterSuper = [...new Set(filterSuper.concat(this.typeAtk[secondType].superEff))];
    filterResist = [...new Set(filterResist.concat(this.typeAtk[secondType].notVeryEff))];
    filterImmune = [...new Set(filterImmune.concat(this.typeAtk[secondType].neverEff))];
  }

  return { filterSuper, filterResist, filterImmune };

}

combineSuper(typeOne: string, typeTwo: string) {
  const superEffOne: string[] = TYPEATK[typeOne]?.superEff || [];
  const superEffTwo: string[] = TYPEATK[typeTwo]?.superEff || [];
  return [...new Set(superEffOne.concat(superEffTwo))];
}

combineResist(typeOne: string, typeTwo: string) {
  const notVeryEffOne: string[] = TYPEATK[typeOne]?.notVeryEff || [];
  const notVeryEffTwo: string[] = TYPEATK[typeTwo]?.notVeryEff || [];
  return [...new Set(notVeryEffOne.concat(notVeryEffTwo))];
}

combineImmune(typeOne: string, typeTwo: string) {
  const neverEffOne: string[] = TYPEATK[typeOne]?.neverEff || [];
  const neverEffTwo: string[] = TYPEATK[typeTwo]?.neverEff || [];
  return [...new Set(neverEffOne.concat(neverEffTwo))];
}

combineEffectiveness(typeOne: string, typeTwo: string) {
  const comboTypes = this.getEffectiveness(typeOne).concat(this.getEffectiveness(typeTwo));
  const filteredTypes = [...new Set(comboTypes)];
  return filteredTypes;
}

// combineSuper(typeOne: string, typeTwo: string) {
//   if (typeof typeTwo == null) { 
//     return this.typeAtk[typeOne].superEff; }
//   else if (typeof typeOne == null) {
//     return this.typeAtk[typeTwo].superEff; }
//     else if ((typeof typeOne == null) && (typeof typeTwo == null)) {
//       return;
//     }
//   else {
//       return this.filterTypes(typeOne, typeTwo).filterSuper;
//   }
// }

// combineResist(typeOne: string, typeTwo: string) {
//   if (typeof typeTwo == null) { 
//     return this.typeAtk[typeOne].notVeryEff; }
//   else if (typeof typeOne == null) {
//     return this.typeAtk[typeTwo].notVeryEff; }
//   else {
//     return this.filterTypes(typeOne, typeTwo).filterResist;
//   }
// }

// combineImmune(typeOne: string, typeTwo: string) {
//   if (typeof typeTwo == null) { 
//     return this.typeAtk[typeOne].neverEff; }
//   else if (typeof typeOne == null) {
//     return this.typeAtk[typeTwo].neverEff; }
//   else {
//     return this.filterTypes(typeOne, typeTwo).filterImmune;
//   }
// }

  // combineEffectiveness(typeOne: string, typeTwo: string) {
  //   //takes both types, combining entries with each other (and truncating duplicates?), uses that to filter and obtain the 1x effective entries
  //   if (typeof typeTwo == null) {
  //     return this.getEffectiveness(typeOne);
  //   }
  //   else if (typeof typeOne == null)
  //   { return this.getEffectiveness(typeTwo); 
  //   }
  //   else {
  //     let comboTypes = this.getEffectiveness(typeOne).concat(this.getEffectiveness(typeTwo));
  //     let filteredTypes = [... new Set(comboTypes)];
  //     return filteredTypes;
  //   }
  // }

  combineMultiplier(typeOne:string, typeTwo: string, type: string) {
    //takes both types, applies relevant multipliers to unique ones and multiplies duplicate ones togehter
    // i.e. a type combo that has /two/ super-effective (2x) toward grass will be 4x total
    let firstMulti = this.getMultiplier(typeOne, type);
    let secondMulti = this.getMultiplier(typeTwo, type);
  if(typeOne) { 
    return firstMulti;
   }
  else { 
    return firstMulti * secondMulti;
   }
  }

}