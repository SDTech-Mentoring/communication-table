import React from "react";
import Card from '../components/Card';
import{Link} from 'react-router-dom';
import { alimentosData} from "../data/food";

// const alimentosData=[
//   {
//     id:1,
//     imgSrc:require('../images/food/arroz.png'),
//     text:"ARROZ",
//   },
//   {
//     id:2,
//     imgSrc:require('../images/food/feijao.png'),
//     text:"FEIJÃO",
//   },
//   {
//     id:3,
//     imgSrc:require('../images/food/arrozComFeijao.png'),
//     text:"ARROZ COM FEIJÃO",
//   },
//   {
//     id:4,
//     imgSrc:require('../images/food/macarrao.png'),
//     text:"MACARRÃO",
//   },
//   {
//     id:5,
//     imgSrc:require('../images/food/macarraoSemMolho.png'),
//     text:"MACARRÃO NA MANTEIGA",
//   },


//   {
//     id:6,
//     imgSrc:require('../images/food/ovoEstrelado.png'),
//     text:"OVO",
//   },
//   {
//     id:7,
//     imgSrc:require('../images/food/salsicha.png'),
//     text:"SALSICHA",
//   },
//   {
//     id:8,
//     imgSrc:require('../images/food/carneDeBoi.png'),
//     text:"CARNE DE BOI",
//   },
//   {
//     id:9,
//     imgSrc:require('../images/food/carneMoida.png'),
//     text:"CARNE MOIDA",
//   },
//   {
//     id:10,
//     imgSrc:require('../images/food/frango.png'),
//     text:"FRANGO",
//   },
//   {
//     id:11,
//     imgSrc:require('../images/food/empanadoDeFrango.png'),
//     text:"EMPANADO DE FRANGO",
//   },
//   {
//     id:12,
//     imgSrc:require('../images/food/empanadodeBoi.png'),
//     text:"EMPANADO DE BOI",
//   },
//   {
//     id:13,
//     imgSrc:require('../images/food/empanadoDePeixe.png'),
//     text:"EMPANADO DE PEIXE",
//   },
//   {
//     id:14,
//     imgSrc:require('../images/food/sopa.png'),
//     text:"SOPA",
//   },
//   {
//     id:15,
//     imgSrc:require('../images/food/sopaDeCarneDeBoi.png'),
//     text:"SOPA DE CARNE DE BOI",
//   },
//   {
//     id:16,
//     imgSrc:require('../images/food/sopaDePeixe.png'),
//     text:"SOPA DE PEIXE",
//   },
//   {
//     id:17,
//     imgSrc:require('../images/food/sopaDeFrango.png'),
//     text:"SOPA DE FRANGO",
//   },
//   {
//     id:18,
//     imgSrc:require('../images/food/sopaDeLetrinhas.png'),
//     text:"SOPA DE LETRINHAS",
//   },
//   {
//     id:19,
//     imgSrc:require('../images/food/sanduiche.png'),
//     text:"SANDUICHE",
//   },
//   {
//     id:20,
//     imgSrc:require('../images/food/lanche.png'),
//     text:"LANCHE",
//   },
//   {
//     id:21,
//     imgSrc:require('../images/food/batatasFritas.png'),
//     text:"BATATAS FRITAS",
//   },
//   {
//     id:22,
//     imgSrc:require('../images/food/hamburguer.png'),
//     text:"HAMBURGUER",
//   },
//   {
//     id:23,
//     imgSrc:require('../images/food/paoDeHamburguer.png'),
//     text:"PÃO DE HAMBURGUER",
//   },

//   {
//     id:24,
//     imgSrc:require('../images/food/hamburquerSimples.png'),
//     text:"HAMBURGUER SIMPLES",
//   },

//   {
//     id:25,
//     imgSrc:require('../images/food/banana.png'),
//     text:"BANANA",
//   },
//   {
//     id:26,
//     imgSrc:require('../images/food/maca.png'),
//     text:"MAÇA",
//   },
//   {
//     id:27,
//     imgSrc:require('../images/food/laranja.png'),
//     text:"LARANJA",
//   },
//   {
//     id:28,
//     imgSrc:require('../images/food/manga.png'),
//     text:"MANGA",
//   },
//   {
//     id:29,
//     imgSrc:require('../images/food/melancia.png'),
//     text:"MELANCIA",
//   },
//   {
//     id:30,
//     imgSrc:require('../images/food/melao.png'),
//     text:"MELÃO",
//   },
//   {
//     id:31,
//     imgSrc:require('../images/food/pera.png'),
//     text:"PERA",
//   },
//   {
//     id:32,
//     imgSrc:require('../images/food/morango.png'),
//     text:"MORANGO",
//   },
//   {
//     id:33,
//     imgSrc:require('../images/food/uvas.png'),
//     text:"UVA",
//   },
//   {
//     id:34,
//     imgSrc:require('../images/food/abacate.png'),
//     text:"ABACATE",
//   },
//   {
//     id:35,
//     imgSrc:require('../images/food/kiwi.png'),
//     text:"kIWI",
//   },
//   {
//     id:36,
//     imgSrc:require('../images/food/alface.png'),
//     text:"ALFACE",
//   },
//   {
//     id:37,
//     imgSrc:require('../images/food/couve.png'),
//     text:"COUVE",
//   },
//   {
//     id:38,
//     imgSrc:require('../images/food/acelga.png'),
//     text:"ACELGA",
//   },
//   {
//     id:39,
//     imgSrc:require('../images/food/couve-flor.png'),
//     text:"COUVE-FLOR",
//   },
//   {
//     id:40,
//     imgSrc:require('../images/food/cenoura.png'),
//     text:"CENOURA",
//   },
//   {
//     id:41,
//     imgSrc:require('../images/food/milho.png'),
//     text:"MILHO",
//   },
//   {
//     id:42,
//     imgSrc:require('../images/food/tomate.png'),
//     text:"TOMATE",
//   },
// ];

function Alimentos(){
  return(
    <div className="categoriesContainer">
      <h2>ALIMENTOS</h2>
      <div className="cardsContainer">
        {alimentosData.map((card)=>(
          <Card key={card.id} imgSrc={card.imgSrc}text={card.text}/>

        ))}
      </div>
      <Link to="/"  className="containerButton">
     <button className="backButton">Voltar para Categorias</button>
      </Link>

    </div>
  );

}
export default Alimentos;  // Certifique-se de que esta linha está presente para exportar o componente