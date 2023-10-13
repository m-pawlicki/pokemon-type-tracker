import { TYPEATK, TYPEDEF } from './poke-type';
import "../styles/type-badge.css";

export type TypeChoice = "ATK" | "DEF";

interface TypeBadgeProps {
    firstType: string;
    secondType: string;
    type: TypeChoice;
}

function TypeBadge({firstType, secondType, type}: TypeBadgeProps) {

    function getATKEffectiveness(inputType: string, multiplier: number) {
        if (inputType === "none") { return []; }
        return Object.entries(TYPEATK[inputType])
        .filter(([k, v]) => v === multiplier)
        .map(([k, v]) => k);
    }

    function getDEFEffectiveness(inputTypeOne: string, inputTypeTwo: string, multiplier: number) {
        if (inputTypeOne === "none" && inputTypeTwo === "none") { return []; }
        else if (inputTypeOne === inputTypeTwo) {
        //If they're the same, just return either one once. Might make it so one is unable to pick the same type twice from the drop-downs in the future.
        return filteredTypes(inputTypeOne, multiplier);
        }
        else if (inputTypeTwo === "none") {
        return filteredTypes(inputTypeOne, multiplier);
        }
        else if (inputTypeOne === "none") {
        return filteredTypes(inputTypeTwo, multiplier);
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

    function filteredTypes(input: string, multiplier: number) {
        return Object.entries(TYPEDEF[input])
        .filter(([k, v]) => Number(v) === multiplier)
        .map(([k, v]) => k);
    }

    let showBadge: JSX.Element = (
        <>
        </>
    );

    if (type === "ATK") {
        showBadge = (
            <>
            </>
        );
            };
    
    if (type === "DEF") {
        showBadge = (
            <>
            </>
        );
    }

    return showBadge;
}

    
//Keeping this here for reasons.
    {/* <div *ngIf="badgeType === 'atk'">
<h2 *ngIf="getATKEffectiveness(typeOneBadge,2).length != 0">2× Damage To</h2>
<div class="badge">
    <p class="inner" *ngFor="let type of getATKEffectiveness(typeOneBadge, 2)">
        <span class="{{type}} name"><img src="assets/icons/{{type}}.svg" class="icon"> {{type}}</span>
    </p>
</div>

<h2 *ngIf="getATKEffectiveness(typeOneBadge,1).length != 0">1× Damage To</h2>
<div class="badge">
    <p class="inner" *ngFor="let type of getATKEffectiveness(typeOneBadge, 1)">
        <span class="{{type}} name"><img src="assets/icons/{{type}}.svg" class="icon"> {{type}}</span>
    </p>
</div>

<h2 *ngIf="getATKEffectiveness(typeOneBadge,0.5).length != 0">½× Damage To</h2>
<div class="badge">
    <p class="inner" *ngFor="let type of getATKEffectiveness(typeOneBadge, 0.5)">
        <span class="{{type}} name"><img src="assets/icons/{{type}}.svg" class="icon"> {{type}}</span>
    </p>
</div>

<h2 *ngIf="getATKEffectiveness(typeOneBadge,0).length != 0">0× Damage To</h2>
<div class="badge">
    <p class="inner" *ngFor="let type of getATKEffectiveness(typeOneBadge, 0)">
        <span class="{{type}} name"><img src="assets/icons/{{type}}.svg" class="icon"> {{type}}</span>
    </p>
</div>
</div>

<div *ngIf="badgeType === 'def'">
    <h2 *ngIf="getDEFEffectiveness(typeOneBadge, typeTwoBadge, 4).length != 0">4× Damage From</h2>
    <div class="badge">
        <p class="inner" *ngFor="let type of getDEFEffectiveness(typeOneBadge, typeTwoBadge, 4)">
            <span class="{{type}} name"><img src="assets/icons/{{type}}.svg" class="icon"> {{type}}</span>
        </p>
    </div>
    <h2 *ngIf="getDEFEffectiveness(typeOneBadge, typeTwoBadge, 2).length != 0">2× Damage From</h2>
    <div class="badge">
        <p class="inner" *ngFor="let type of getDEFEffectiveness(typeOneBadge, typeTwoBadge, 2)">
            <span class="{{type}} name"><img src="assets/icons/{{type}}.svg" class="icon"> {{type}}</span>
        </p>
    </div>
    <h2 *ngIf="getDEFEffectiveness(typeOneBadge, typeTwoBadge, 1).length != 0">1× Damage From</h2>
    <div class="badge">
        <p class="inner" *ngFor="let type of getDEFEffectiveness(typeOneBadge, typeTwoBadge, 1)">
            <span class="{{type}} name"><img src="assets/icons/{{type}}.svg" class="icon"> {{type}}</span>
        </p>
    </div>
    <h2 *ngIf="getDEFEffectiveness(typeOneBadge, typeTwoBadge, 0.5).length != 0">½× Damage From</h2>
    <div class="badge">
        <p class="inner" *ngFor="let type of getDEFEffectiveness(typeOneBadge, typeTwoBadge, 0.5)">
            <span class="{{type}} name"><img src="assets/icons/{{type}}.svg" class="icon"> {{type}}</span>
        </p>
    </div>
    <h2 *ngIf="getDEFEffectiveness(typeOneBadge, typeTwoBadge, 0.25).length != 0">¼× Damage From</h2>
    <div class="badge">
        <p class="inner" *ngFor="let type of getDEFEffectiveness(typeOneBadge, typeTwoBadge, 0.25)">
            <span class="{{type}} name"><img src="assets/icons/{{type}}.svg" class="icon"> {{type}}</span>
        </p>
    </div>
    <h2 *ngIf="getDEFEffectiveness(typeOneBadge, typeTwoBadge, 0).length != 0">0× Damage From</h2>
    <div class="badge">
        <p class="inner" *ngFor="let type of getDEFEffectiveness(typeOneBadge, typeTwoBadge, 0)">
            <span class="{{type}} name"><img src="assets/icons/{{type}}.svg" class="icon"> {{type}}</span>
        </p>
    </div>
</div> */}

export default TypeBadge;