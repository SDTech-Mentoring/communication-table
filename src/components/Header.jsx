import React from "react";
 import { Link,useLocation } from "react-router-dom";
import './Header.css';



const Header=()=>{
  const location = useLocation();
  return(
    <header>
    <h1>Nome Projeto</h1>
    {/* Botão "Voltar para Categorias" */}
    <Link to="/">
      <button className="backButton">{'<'}

      </button>
    </Link>
    </header>
  );
}

export default Header;