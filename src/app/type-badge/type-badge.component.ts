import { Component, Input } from '@angular/core';
import { TYPEATK, TYPEDEF } from 'src/ poke-type';

@Component({
  selector: 'app-type-badge',
  templateUrl: './type-badge.component.html',
  styleUrls: ['./type-badge.component.css']
})

export class TypeBadgeComponent {
  @Input() typeOneBadge = '';
  @Input() typeTwoBadge = '';
  @Input() badgeType = '';

  getATKEffectiveness(inputType: string, multiplier: number) {
    if (inputType === "none") { return []; }
    return Object.entries(TYPEATK[inputType])
      .filter(([k, v]) => v === multiplier)
      .map(([k, v]) => k);
  }

  getDEFEffectiveness(inputTypeOne: string, inputTypeTwo: string, multiplier: number) {
    if (inputTypeOne === "none" && inputTypeTwo === "none") { return []; }
    else if (inputTypeOne === inputTypeTwo) {
      //If they're the same, just return either one once. Might make it so one is unable to pick the same type twice from the drop-downs in the future.
      return this.filteredTypes(inputTypeOne, multiplier);
    }
    else if (inputTypeTwo === "none") {
      return this.filteredTypes(inputTypeOne, multiplier);
    }
    else if (inputTypeOne === "none") {
      return this.filteredTypes(inputTypeTwo, multiplier);
    }
    let entriesOne = Object.entries(TYPEDEF[inputTypeOne]);
    let entriesTwo = Object.entries(TYPEDEF[inputTypeTwo]);
    let result: any = {};
    for (const [ok, ov] of entriesOne) {
      for(const [ik, iv] of entriesTwo) {
        if (ok === ik) {
          result[ok] = (ov*iv);
        }
      }
    }
    return Object.entries(result)
    .filter(([k, v]) => v === multiplier)
    .map(([k, v]) => k);
  }

  filteredTypes(input: string, multiplier: number) {
    return Object.entries(TYPEDEF[input])
    .filter(([k, v]) => Number(v) === multiplier)
    .map(([k, v]) => k);
  }
}