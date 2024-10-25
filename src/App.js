import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Header from './components/Header';
import MainContent from './pages/MainContent';
import Footer from './components/Footer';
import Categories from './components/Categories';
import Sentimentos from './pages/Sentimentos';
import Acoes from'./pages/Acoes';
import Alimentos from'./pages/Alimentos';
import RotinaEscolar from './pages/RotinaEscolar';
import Sobremesa from'./pages/Sobremesa';
import Lugares from'./pages/Lugares';
import HouseRoutine from './pages/HouseRoutine';
import ToysGames from'./pages/ToysGames';
import './global.css';

function App() {
  return (
    <Router>
      <div className='App'>
        <Header />
        <Routes>
          <Route path="/" element={<Categories />} />
          <Route path="/main" element={<MainContent />} />
          <Route path="/sentimentos" element={<Sentimentos />} />
          <Route path="/acoes" element={<Acoes/>}/>
          <Route path="/alimentos" element={<Alimentos/>}/>
          <Route path="/rotinaEscolar" element={<RotinaEscolar/>}/>
          <Route path="/sobremesa" element={<Sobremesa/>}/>
          <Route path="/lugares" element={<Lugares/>}/>
          <Route path="/casa" element={<HouseRoutine/>}/>
          <Route path="/jogosebrinquedos" element={<ToysGames/>}/>
        </Routes>
        <Footer />
      </div>
    </Router>
  );
}

export default App;