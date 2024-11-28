import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Header from "./components/Header";
import Footer from "./components/Footer";
import Categories from "./components/Categories";
import Sentimentos from "./pages/Sentimentos";
import Acoes from "./pages/Acoes";
import Alimentos from "./pages/Alimentos";
import RotinaEscolar from "./pages/RotinaEscolar";
import MaterialEscolar from "./pages/materialEscolar"; // Importe a página MaterialEscolar
import Sobremesa from "./pages/Sobremesa";
import Lugares from "./pages/Lugares";
import HouseRoutine from "./pages/HouseRoutine";
import ToysGames from "./pages/ToysGames";
import Pronoun from "./pages/Pronoun";
import "./global.css";

function App() {
  return (
    <Router>
      <div className="App">
        <Header />
        <Routes>
          <Route path="/" element={<Categories />} />
          <Route path="/sentimentos" element={<Sentimentos />} />
          <Route path="/acoes" element={<Acoes />} />
          <Route path="/alimentos" element={<Alimentos />} />
          <Route path="/escola" element={<RotinaEscolar />} />
          <Route path="/sobremesa" element={<Sobremesa />} />
          <Route path="/lugares" element={<Lugares />} />
          <Route path="/casa" element={<HouseRoutine />} />
          <Route path="/jogosebrinquedos" element={<ToysGames />} />
          <Route path="/eu" element={<Pronoun />} />
          <Route path="/materialEscolar" element={<MaterialEscolar />} /> {/* Nova rota */}
        </Routes>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
