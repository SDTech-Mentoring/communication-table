import React from "react";
import Card from "../components/Card";
// import { Link } from "react-router-dom";
import {pronounData} from "../data/pronoun";


function Pronoun(){
  return(
    <div className="categoriesContainer">
      <h2>EU</h2>
      <div className="cardsContainer">
        {pronounData.map((card) => (
          <Card key={card.id} imgSrc={card.imgSrc} text={card.text.toUpperCase()} />
        ))}
      </div>

    </div>
  );
}

export default Pronoun;
