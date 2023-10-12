import React, { useState } from "react";
import { TYPES } from "../components/poke-type";
import "../styles/type-selector.css";
import EffectBox from "./effect-box";

function TypeSelector({isDEFPage} : {isDEFPage: string} ) {

  const typeList = TYPES.map(type => <option key={type}>{type}</option> );
  let DEFcontent;

  const getInitialState = () => {
    return "none";
  };

  const handleTypeOneChange = (typeOne: React.ChangeEvent<HTMLSelectElement>) => {
    const firstType = typeOne.target;
    setTypeOne(firstType.value);
  };

  const handleTypeTwoChange = (typeTwo: React.ChangeEvent<HTMLSelectElement>) => {
    const secondType = typeTwo.target;
    setTypeTwo(secondType.value);
  };

  const [typeOne, setTypeOne] = useState(getInitialState);
  const [typeTwo, setTypeTwo] = useState(getInitialState);

  if(isDEFPage === "true") {
    DEFcontent = (
      <div className="typeTwoContainer">
      <label>Type 2: </label>
      <div className="select-wrapper">
        <select id="typeTwoSelect" title="Select a type" value={typeTwo} onChange={(typeTwo) => handleTypeTwoChange(typeTwo)}>
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
            <select id="typeOneSelect" title="Select a type" value={typeOne} onChange={(typeOne) => handleTypeOneChange(typeOne)}>
                <option key="none">none</option>
                {typeList}
            </select>
        </div>
      </div>
        {DEFcontent}
      </div>
      <div className="center">
          <EffectBox handleTypeOneChange={typeOne} handleTypeTwoChange={typeTwo} />
      </div>
    </>
  );
}

export default TypeSelector;