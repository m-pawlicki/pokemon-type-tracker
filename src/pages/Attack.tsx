import React from "react";
import EffectBox from "../components/effect-box";
import TypeSelector from "../components/type-selector";

function Attack() {
    return (
      <React.Fragment>
        <TypeSelector isDEFPage="false"/>
        <EffectBox />
      </React.Fragment>
    );
}

export default Attack;