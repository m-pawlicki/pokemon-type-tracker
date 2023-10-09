import React from "react";
import TypeSelector from "../components/type-selector";
import EffectBox from "../components/effect-box";

function Defense() {
    return (
      <React.Fragment>
        <TypeSelector isDEFPage="true" />
        <EffectBox />
      </React.Fragment>
    );
}

export default Defense;