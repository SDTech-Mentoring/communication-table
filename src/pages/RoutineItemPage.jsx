import React from "react";
import { useNavigate } from "react-router-dom";
import Card from "../components/Card";
import { RoutineItemData } from "../data/routineItemData";

function RoutineItemPage() {
  const navigate = useNavigate();
  return (
    <div className="categoriesContainer">
      <h2>ROTINA ESCOLAR</h2>
      <div className="cardsContainer">
        {RoutineItemData.map((card) => (
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
export default RoutineItemPage;
