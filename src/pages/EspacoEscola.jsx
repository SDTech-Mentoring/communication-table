import React from "react";
import { useNavigate } from "react-router-dom";
import Card from "../components/Card";
import { EspacoData } from "../data/espacoData";

function EspacoPage() {
  const navigate = useNavigate();
  return (
    <div className="categoriesContainer">
      <h2>ESPAÇO ESCOLA</h2>
      <div className="cardsContainer">
        {EspacoData.map((card) => (
          <div
            key={card.id}
            onClick={() => {
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
export default EspacoPage;
