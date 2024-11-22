import React from "react";
import { Link } from "react-router-dom"; // Importar o Link
import Card from "../components/Card";  // Certifique-se de que o caminho está correto para o componente Card
import { RotinaData } from "../data/schoolRoutine";  // Verifique se o caminho de RotinaData está correto

function RotinaEscolar() {
  return (
    <div className="categoriesContainer">
      <h2>ROTINA ESCOLAR</h2>
      <div className="cardsContainer">
        {RotinaData.map((card) => (
          <Link key={card.id} to="/materialEscolar"> {/* Coloque o Link ao redor do Card */}
            <Card imgSrc={card.imgSrc} text={card.text} />
          </Link>
        ))}
      </div>
    </div>
  );
}

export default RotinaEscolar;

