import React from "react";
import Card from '../components/Card';
// import { Link } from "react-router-dom";
import {RotinaData} from "../data/schoolRoutine";





function RotinaEscolar(){

  return(
    <div className="categoriesContainer">
      <h2>ROTINA ESCOLAR</h2>
      <div className="cardsContainer">
        {RotinaData.map((card)=>(
          <Card key={card.id} imgSrc={card.imgSrc}text={card.text}/>
        ))}
      </div>


    </div>
  );
}
export default RotinaEscolar;