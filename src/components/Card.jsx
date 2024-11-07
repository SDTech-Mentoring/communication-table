import React from "react"; // Importa a biblioteca React
import './Card.css'; // Importa o arquivo de estilo

// Função que será chamada quando o card for clicado para ler o texto
function speakText(text) {
  const utterance = new SpeechSynthesisUtterance(text);
  utterance.lang = 'pt-BR'; // Define o idioma para português
  window.speechSynthesis.speak(utterance);
}

// Função do componente Card que recebe duas propriedades: imgSrc e text
function Card({ imgSrc, text }) {
  return (
    <div className="card"
      onClick={() => speakText(text)} //Adiciona o evento de clique que lê o texto
      >
      <img src={imgSrc} alt={text} /> {/* Exibe a imagem */}
      <p>{text}</p> {/* Exibe o texto */}
    </div>
  );
 }
 export default Card;
