import React from 'react';
// import { Link } from 'react-router-dom'; // Importe o Link
/*import './Sentimentos.css'; //  criar um arquivo CSS se necessário*/
import Card from '../components/Card';
import {sentimentosData} from "../data/feeling";


function Sentimentos() {
  return (
    <div className="categoriesContainer">
      <h2>SENTIMENTOS</h2>
      <div className="cardsContainer">
        {sentimentosData.map((card) => (
          <Card key={card.id} imgSrc={card.imgSrc} text={card.text} />
        ))}
      </div>

    </div>
  );
}

export default Sentimentos;
