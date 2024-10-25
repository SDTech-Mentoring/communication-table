import React from "react";
import Card from "../components/Card";
// import { Link } from "react-router-dom";
import {toysGameData} from "../data/toysGames";


function ToysGames(){
  return(
    <div className="categoriesContainer">
      <h2>JOGOS E BRINQUEDOS</h2>
      <div className="cardsContainer">
        {toysGameData.map((card) => (
          <Card key={card.id} imgSrc={card.imgSrc} text={card.text.toUpperCase()} />
        ))}
      </div>

    </div>
  );
}

export default ToysGames;
