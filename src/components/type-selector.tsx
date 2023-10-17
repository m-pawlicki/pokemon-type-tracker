import React, { useState } from "react";
import { TYPES } from "../components/poke-type";
import "../styles/type-selector.css";
import EffectBox from "./effect-box";

export enum PageType {
  ATTACK,
  DEFENSE
}

export interface TypeSelection {
  firstType: string;
  secondType: string;
  page: PageType;
}

function TypeSelector({isDEFPage} : {isDEFPage: boolean} ) {

  const typeList = TYPES.map(type => <option key={type}>{type}</option> );
  let DEFcontent;

  const handleTypeOneChange = (typeOne: React.ChangeEvent<HTMLSelectElement>) => {
    const firstType = typeOne.target.value;
    const newTypes = {...types, firstType: firstType, page: selectPageType(firstType, types.secondType)}
    setTypes(newTypes);
  }

  const handleTypeTwoChange = (typeTwo: React.ChangeEvent<HTMLSelectElement>) => {
    const secondType = typeTwo.target.value;
    const newTypes = {...types, secondType: secondType, page: selectPageType(types.firstType, secondType)}
    setTypes(newTypes);
  }

  const [types, setTypes] = useState<TypeSelection>( {firstType: "none", secondType: "none", page: PageType.ATTACK} );

  function selectPageType(typeOne: string, typeTwo: string): PageType {
    if(isDEFPage) {
      return PageType.DEFENSE;
    }
    else {
      return PageType.ATTACK;
    }
  }

  if(isDEFPage) {
    DEFcontent = (
      <div className="typeTwoContainer">
      <label>Type 2: </label>
      <div className="select-wrapper">
        <select id="typeTwoSelect" title="Select a type" onChange={(typeTwo) => handleTypeTwoChange(typeTwo)}>
            <option key="none">none</option>
            {typeList}
        </select>
      </div>
    </div>
    )
}
  
  return(
    <>
      <div className ="center">
        <div className="typeOneContainer">
          <label>Type 1: </label>
          <div className="select-wrapper">
            <select id="typeOneSelect" title="Select a type" onChange={(typeOne) => handleTypeOneChange(typeOne)}>
                <option key="none">none</option>
                {typeList}
            </select>
        </div>
      </div>
        {DEFcontent}
      </div>
      <div className="center">
          <EffectBox typeSelector={types} />
      </div>
    </>
  );
}

export default TypeSelector;