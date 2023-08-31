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
    else if (inputTypeTwo === "none") {
      return Object.entries(TYPEDEF[inputTypeOne])
      .filter(([k, v]) => v === multiplier)
      .map(([k, v]) => k);
    }
    else if (inputTypeOne === "none") {
      return Object.entries(TYPEDEF[inputTypeTwo])
      .filter(([k, v]) => v === multiplier)
      .map(([k, v]) => k);
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
}