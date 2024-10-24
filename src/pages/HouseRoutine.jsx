import React from "react";
import Card from "../components/Card";
import { Link } from "react-router-dom";
import { HouseRoutineData} from "../data/houseRoutine";

function HouseRoutine() {
  return (
    <div className="categoriesContainer">
      <h2>ROTINAS DA CASA</h2>
      <div className="cardsContainer">
        {HouseRoutineData.map((card) => (
          <Card key={card.id} imgSrc={card.imgSrc} text={card.text.toUpperCase()} />
        ))}
      </div>
      <Link to="/"  className="containerButton">
        <button className="backButton">Voltar para Categorias</button>
      </Link>
    </div>
  );
}
export default HouseRoutine;
