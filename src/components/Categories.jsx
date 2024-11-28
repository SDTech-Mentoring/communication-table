import React from "react";
import { Link } from "react-router-dom";
import "./Categories.css"; // Você pode criar um arquivo CSS para estilização
import Card from "./Card"; // Certifique-se de que o caminho esteja correto

function Categories() {
  return (
    <div className="categoriesContainer">
      <h1>Categorias</h1>
      <ul className="cardsContainer">
        <Link to="/eu">
          {/*Aqui está o Card Rotina da Casa*/}
          <Card imgSrc={require("../images/category/eu.png")} text="EU" />
        </Link>

        <Link to="/eu">
          {/*Aqui está o Card Rotina da Casa*/}
          <Card imgSrc={require("../images/category/eu(1).png")} text="EU" />
        </Link>

        <Link to="/sentimentos">
          {/* Aqui está o Card  Sentimentos */}
          <Card
            imgSrc={require("../images/category/sentimentos.png")}
            text="SENTIMENTOS"
          />
        </Link>

        <Link to="/acoes">
          {/*Aqui está o Card Ações*/}
          <Card imgSrc={require("../images/category/acoes.png")} text="AÇÕES" />
        </Link>

        <Link to="/alimentos">
          {/*Aqui está o Card Alimentos*/}
          <Card
            imgSrc={require("../images/category/alimentos.png")}
            text="ALIMENTOS"
          />
        </Link>

        <Link to="/escola">
          {/*Aqui está o Card rotinaEscolar*/}
          <Card
            imgSrc={require("../images/category/escola.png")}
            text="ESCOLA"
          />
        </Link>

        <Link to="/sobremesa">
          {/*Aqui está o Card sobremesa*/}
          <Card
            imgSrc={require("../images/category/sobremesa.png")}
            text="SOBREMESA"
          />
        </Link>

        <Link to="/lugares">
          {/*Aqui está o Card sobremesa*/}
          <Card
            imgSrc={require("../images/category/lugares.png")}
            text="LUGARES"
          />
        </Link>

        <Link to="/casa">
          {/*Aqui está o Card Brinquedos e Jogos*/}
          <Card
            imgSrc={require("../images/category/rotinasCasa.png")}
            text="ROTINAS DA CASA"
          />
        </Link>

        <Link to="/jogosebrinquedos">
          {/*Aqui está o Card Rotina da Casa*/}
          <Card
            imgSrc={require("../images/category/jogosBrinquedos.png")}
            text="JOGOS E BRINQUEDOS"
          />
        </Link>

        {/* <li> */}
        {/* <Link to="/perguntas">Perguntas</Link> */}
        {/* </li> */}
      </ul>

      {/* <Link to="/main">Voltar para Main Content</Link> */}
    </div>
  );
}

export default Categories;
