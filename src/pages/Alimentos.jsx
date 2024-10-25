import React from "react";
import Card from '../components/Card';
// import{Link} from 'react-router-dom';
import { alimentosData} from "../data/food";



function Alimentos(){
  return(
    <div className="categoriesContainer">
      <h2>ALIMENTOS</h2>
      <div className="cardsContainer">
        {alimentosData.map((card)=>(
          <Card key={card.id} imgSrc={card.imgSrc}text={card.text}/>

        ))}
      </div>


    </div>
  );

}
export default Alimentos;  // Certifique-se de que esta linha está presente para exportar o componente