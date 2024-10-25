import React from "react";
import Card from "../components/Card";
// import { Link } from "react-router-dom";
import { acoesData} from "../data/Action";


function Acoes(){
  return(
    <div className="categoriesContainer">
      <h2>AÇÕES</h2>
      <div className="cardsContainer">
        {acoesData.map((card) => (
          <Card key={card.id} imgSrc={card.imgSrc} text={card.text} />
        ))}
      </div>

    </div>
  );
}

export default Acoes;
