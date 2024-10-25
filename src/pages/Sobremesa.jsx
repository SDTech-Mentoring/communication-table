import React from "react";
import Card from "../components/Card";
// import { Link } from "react-router-dom";
import { SobremesaData} from "../data/dessert";
/*import "./Sobremesa.css";*/


function Sobremesa() {
  return (
    <div className="categoriesContainer">
      <h2>SOBREMESA</h2>
      <div className="cardsContainer">
        {SobremesaData.map((card) => (
          <Card key={card.id} imgSrc={card.imgSrc} text={card.text} />
        ))}
      </div>

    </div>
  );
}
export default Sobremesa;
