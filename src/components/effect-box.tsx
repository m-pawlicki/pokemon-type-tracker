import React from "react";
import "../styles/effect-box.css";
import TypeBadge from "./type-badge";

interface EffectBoxProps {
    handleTypeOneChange: string,
    handleTypeTwoChange: string,
}

function EffectBox({handleTypeOneChange, handleTypeTwoChange}: EffectBoxProps) {
    const firstType = handleTypeOneChange;
    const secondType = handleTypeTwoChange;
    let showBox;
    let type = '';

    if(firstType != "none" || secondType != "none") {
        type="DEF";
        showBox = (
            <>
                <p>T1: {firstType} T2: {secondType}</p>
                <TypeBadge firstType={firstType} secondType={secondType} type={type} />
            </>
        );
    };

    return (
        < >
            <div className="dex-screen">
                {showBox}
            </div>
        </>
    );
}

export default EffectBox;