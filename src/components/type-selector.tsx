import React, { ChangeEvent, useState } from "react";
import { TYPEATK, TYPEDEF, TYPES } from "../components/poke-type";
import "../styles/type-selector.css";
import { type } from "os";

function TypeSelector({isDEFPage} : {isDEFPage: string}) {

  const typeList = TYPES.map(type => <option>{type}</option> );
  let DEFcontent;

  const getInitialState = () => {
    return "none";
  };

  const handleTypeOneChange = (typeOne: ChangeEvent<HTMLSelectElement>) => {
    setTypeOne(typeOne.target.value);
  };

  const handleTypeTwoChange = (typeTwo: ChangeEvent<HTMLSelectElement>) => {
    setTypeTwo(typeTwo.target.value);
  };

  const [typeOne, setTypeOne] = useState(getInitialState);
  const [typeTwo, setTypeTwo] = useState(getInitialState);

  if(isDEFPage === "true") {
    DEFcontent = (
      <div className="typeTwoContainer">
      <label>Type 2: </label>
      <div className="select-wrapper">
        <select id="typeTwoSelect" title="Select a type" value={typeTwo} onChange={(typeTwo) => handleTypeTwoChange(typeTwo)}>
            <option>none</option>
            {typeList}
        </select>
      </div>
      <p>T2: {typeTwo} </p>
    </div>
    )
}
  
  return(
    <React.Fragment>
      <div className ="center">
        <div className="typeOneContainer">
          <label>Type 1: </label>
          <div className="select-wrapper">
            <select id="typeOneSelect" title="Select a type" value={typeOne} onChange={(typeOne) => handleTypeOneChange(typeOne)}>
                <option>none</option>
                {typeList}
            </select>
        </div>
        <p>T1: {typeOne} </p>
      </div>

        {DEFcontent}
      </div>
    </React.Fragment>
  );
}

export default TypeSelector;