import "../styles/effect-box.css";
import ATKResults from './atk-results';
import DEFResults from './def-results';

export type TypeChoice = "ATK" | "DEF";

interface TypeBadgeProps {
    firstType: string;
    secondType: string;
    pageType: TypeChoice;
}

export enum MULTIPLIER {
    QUADRUPLE = 4,
    DOUBLE = 2,
    BASE = 1,
    HALF = 0.5,
    QUARTER = 0.25,
    NONE = 0
}

function TypeBadge({firstType, secondType, pageType}: TypeBadgeProps) {


    let showBadge: JSX.Element = (
        <>
        </>
    );

    if (pageType === "ATK") {
        showBadge = (
            <>
            <ATKResults type={firstType} multiplier={MULTIPLIER.DOUBLE}/>
            <ATKResults type={firstType} multiplier={MULTIPLIER.BASE}/>
            <ATKResults type={firstType} multiplier={MULTIPLIER.HALF}/>
            <ATKResults type={firstType} multiplier={MULTIPLIER.NONE}/>
            </>
        );
            };
    
    if (pageType === "DEF") {
        showBadge = (
            <>
            <DEFResults typeOne={firstType} typeTwo={secondType} multiplier={MULTIPLIER.QUADRUPLE}/>
            <DEFResults typeOne={firstType} typeTwo={secondType} multiplier={MULTIPLIER.DOUBLE}/>
            <DEFResults typeOne={firstType} typeTwo={secondType} multiplier={MULTIPLIER.BASE}/>
            <DEFResults typeOne={firstType} typeTwo={secondType} multiplier={MULTIPLIER.HALF}/>
            <DEFResults typeOne={firstType} typeTwo={secondType} multiplier={MULTIPLIER.QUARTER}/>
            <DEFResults typeOne={firstType} typeTwo={secondType} multiplier={MULTIPLIER.NONE}/>
            </>
        );
    }

    return showBadge;
}

export default TypeBadge;