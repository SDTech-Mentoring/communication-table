import React from "react";
import Card from "../components/Card";
import { Link } from "react-router-dom";
import { lugaresData } from "../data/lugares";

function Lugares() {
  return (
    <div className="categoriesContainer">
      <h2>LUGARES</h2>
      <div className="cardsContainer">
        {lugaresData.map((card) => (
          <Card key={card.id} imgSrc={card.imgSrc} text={card.text.toUpperCase()} />
        ))}
      </div>
      <Link to="/"  className="containerButton">
        <button className="backButton">Voltar para Categorias</button>
      </Link>
    </div>
  );
}
export default Lugares;
