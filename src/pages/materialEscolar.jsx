import React from "react";
import Card from "../components/Card"; // Importa o componente Card
import { MaterialEscolarData } from "../data/materialEscolarData"; // Importa os dados do Material Escolar

function MaterialEscolar() {
  return (
    <div className="categoriesContainer">
      <h2>MATERIAL ESCOLAR</h2>
      <div className="cardsContainer">
        {MaterialEscolarData.map((card) => (
          <Card key={card.id} imgSrc={card.imgSrc} text={card.text} />
        ))}
      </div>
    </div>
  );
}

export default MaterialEscolar;
