import React from 'react';
import { Link } from 'react-router-dom'; // Importe o Link
/*import './Sentimentos.css'; //  criar um arquivo CSS se necessário*/
import Card from '../components/Card';
import {sentimentosData} from "../data/feeling";
// const sentimentosData = [
//   {
//     id:1,
//     imgSrc: require('../images/feelings/precisodeAjuda.png'),
//     text:"PRECISO DE AJUDA",
//   },

//   {
//     id:2,
//     imgSrc: require('../images/feelings/terfrio.png'),
//     text:"TER FRIO",
//   },

//   {
//     id:3,
//     imgSrc: require('../images/feelings/terCalor.png'),
//     text:"TER CALOR",
//   },

//   {
//     id:4,
//     imgSrc: require('../images/feelings/enjoado.png'),
//     text:"ENJOADO",
//   },

//   {
//     id:5,
//     imgSrc: require('../images/feelings/triste.png'),
//     text:"TRISTE",
//   },

//   {
//     id:6,
//     imgSrc: require('../images/feelings/vergonha.png'),
//     text:"ENVERGONHADO",
//   },
//   {
//     id:7,
//     imgSrc: require('../images/feelings/nervoso.png'),
//     text:"NERVOSO",
//   },

//   {
//     id:8,
//     imgSrc: require('../images/feelings/alegre.png'),
//     text:"ALEGRE",
//   },
//   {
//     id:9,
//     imgSrc: require('../images/feelings/confuso.png'),
//     text:"CONFUSO",
//   },
//   {
//     id:10,
//     imgSrc: require('../images/feelings/aborrecido.png'),
//     text:"ABORRECIDO",
//   },
//   {
//     id:11,
//     imgSrc: require('../images/feelings/cansado.png'),
//     text:"CANSADO",
//   },
//   {
//     id:12,
//     imgSrc: require('../images/feelings/chorar.png'),
//     text:"CHORAR",
//   },
//   {
//     id:13,
//     imgSrc: require('../images/feelings/contente.png'),
//     text:"CONTENTE",
//   },
//   {
//     id:14,
//     imgSrc: require('../images/feelings/surpreendido.png'),
//     text:"SURPREENDIDO",
//   },
//   // Adicione mais cards de sentimentos conforme necessário
// ];

function Sentimentos() {
  return (
    <div className="categoriesContainer">
      <h2>SENTIMENTOS</h2>
      <div className="cardsContainer">
        {sentimentosData.map((card) => (
          <Card key={card.id} imgSrc={card.imgSrc} text={card.text} />
        ))}
      </div>
      <Link to="/"  className="containerButton">
        <button className="backButton">Voltar para Categorias</button>
      </Link>
    </div>
  );
}

export default Sentimentos;
