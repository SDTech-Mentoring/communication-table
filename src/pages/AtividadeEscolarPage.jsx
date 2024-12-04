import React from "react";
import { useNavigate } from "react-router-dom";
import Card from "../components/Card";
import { AtividadeData } from "../data/atividadeEscolarData";

function AtividadeEscolarPage() {
  const navigate = useNavigate();
  return (
    <div className="categoriesContainer">
      <h2>ATIVIDADE ESCOLAR</h2>
      <div className="cardsContainer">
        {AtividadeData.map((card) => (
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
export default AtividadeEscolarPage;
