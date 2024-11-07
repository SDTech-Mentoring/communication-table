import React from 'react';
// import { Link } from 'react-router-dom'; // Importe o Link
/*import './Sentimentos.css'; //  criar um arquivo CSS se necessário*/
import Card from '../components/Card';
import sentimentosData from "../data/feeling";


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



// import React from 'react';
// import Card from '../components/Card';
// import sentimentosData from '../data/feeling';
// import './Sentimentos.css';
// src/pages/Sentimentos.js // Estilização opcional

// function Sentimentos() {
//   return (
//     <div>
//       <h1>Sentimentos</h1>
//       <div className="cardsContainer">
//         {sentimentosData.map((card) => (
//           <Card key={card.id} imgSrc={card.imgSrc} text={card.text} />
//         ))}
//       </div>
//     </div>
//   );
// }

// export default Sentimentos;

// import React from 'react';
// import Card from '../components/Card';
// import sentimentosData from '../data/feeling';
// src/pages/Sentimentos.jsx // Atualize o caminho conforme o nome correto
// //import './Sentimentos.css'; // Verifique se o arquivo existe

// function Sentimentos() {
//   return (
//     <div>
//       <h1>Sentimentos</h1>
//       <div className="cardsContainer">
//         {sentimentosData.map((card) => (
//           <Card key={card.id} imgSrc={card.imgSrc} text={card.text} />
//         ))}
//       </div>
//     </div>
//   );
// }

// export default Sentimentos;

// import React, { useContext } from 'react';
// import sentimentosData from '../data/feeling'; // Importando a lista de sentimentos
// import { PhraseContext } from '../App'; // Importando o contexto para armazenar a frase
// // import './Sentimentos.css'; // Estilos para o componente

// function Sentimentos() {
//   const { addCardToPhrase } = useContext(PhraseContext); // Obtendo a função para adicionar à frase

//   const handleCardClick = (text) => {
//     addCardToPhrase(text); // Adiciona o texto à frase
//     const utterance = new SpeechSynthesisUtterance(text); // Usando síntese de fala
//     utterance.lang = 'pt-BR';
//     window.speechSynthesis.speak(utterance); // Realiza a fala do texto
//   };

//   return (
//     <div>
//       <h1>Sentimentos</h1>
//       <div className="sentimentosContainer">
//         {sentimentosData.map((sentimento) => (
//           <div
//             key={sentimento.id}
//             className="sentimentoCard"
//             onClick={() => handleCardClick(sentimento.text)} // Chama a função no clique
//           >
//             <img src={sentimento.imgSrc} alt={sentimento.text} />
//             <p>{sentimento.text}</p>
//           </div>
//         ))}
//       </div>
//     </div>
//   );
// }

// export default Sentimentos;


// import React from "react";
// import sentimentosData from "../data/feeling"; // Ajuste o caminho conforme necessário

// function Sentimentos() {
//   const handleCardClick = (text) => {
//     console.log(`Você clicou em: ${text}`);
//     // Você pode adicionar a lógica aqui que já estava implementada
//   };

//   return (
//     <div className="cardsContainer">
//       {sentimentosData.map((sentimento) => (
//         <div
//           key={sentimento.id}
//           className="sentimentoCard"
//           onClick={() => handleCardClick(sentimento.text)} // Manter lógica de clique
//         >
//           <img src={sentimento.imgSrc} alt={sentimento.text} />
//           <p>{sentimento.text}</p>
//         </div>
//       ))}
//     </div>
//   );
// }

// export default Sentimentos;
