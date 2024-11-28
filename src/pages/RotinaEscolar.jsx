

import React from "react";
import { useNavigate } from "react-router-dom";
import Card from "../components/Card";
import { RotinaData } from "../data/schoolRoutine";

function RotinaEscolar() {
  const navigate = useNavigate();

  return (
    <div className="categoriesContainer">
      <h2>ESCOLA</h2>
      <div className="cardsContainer">
        {RotinaData.map((card) => (
          <div
            key={card.id}
            onClick={() => {
              // Redireciona apenas se o texto for "MATERIAL ESCOLAR"
              if (card.rota) {
                navigate(card.rota);
              }
            }}
          >
            <Card imgSrc={card.imgSrc} text={card.text} />
          </div>
        ))}
      </div>
    </div>
  );
}

export default RotinaEscolar;
