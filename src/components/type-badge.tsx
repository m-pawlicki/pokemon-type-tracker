import "../styles/effect-box.css";
import ATKResults from './atk-results';
import DEFResults from './def-results';

export type TypeChoice = "ATK" | "DEF";

interface TypeBadgeProps {
    firstType: string;
    secondType: string;
    pageType: TypeChoice;
}

function TypeBadge({firstType, secondType, pageType}: TypeBadgeProps) {


    let showBadge: JSX.Element = (
        <>
        </>
    );

    if (pageType === "ATK") {
        showBadge = (
            <>
            <ATKResults type={firstType} multiplier={2}/>
            <ATKResults type={firstType} multiplier={1}/>
            <ATKResults type={firstType} multiplier={0.5}/>
            <ATKResults type={firstType} multiplier={0}/>
            </>
        );
            };
    
    if (pageType === "DEF") {
        showBadge = (
            <>
            <DEFResults typeOne={firstType} typeTwo={secondType} multiplier={4}/>
            <DEFResults typeOne={firstType} typeTwo={secondType} multiplier={2}/>
            <DEFResults typeOne={firstType} typeTwo={secondType} multiplier={1}/>
            <DEFResults typeOne={firstType} typeTwo={secondType} multiplier={0.5}/>
            <DEFResults typeOne={firstType} typeTwo={secondType} multiplier={0.25}/>
            <DEFResults typeOne={firstType} typeTwo={secondType} multiplier={0}/>
            </>
        );
    }

    return showBadge;
}

export default TypeBadge;