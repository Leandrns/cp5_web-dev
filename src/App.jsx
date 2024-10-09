import './App.css';
import { Apresentacao } from './components/Apresentacao/Apresentacao';
import { Depoimentos } from './components/Depoimentos/Depoimentos';
import { HeroSection } from './components/HeroSection/HeroSection';
import Funcionalidades from './components/Funcionalidades/Funcionalidades';
import 'bootstrap/dist/css/bootstrap.min.css';
import FormularioContato from './components/Form/Form';
import React from 'react';
import { Footer } from './components/Footer/Footer';

function App() {
  return (
    <div className="App">
      <HeroSection />
      <Apresentacao/>
      <Funcionalidades />
      <Depoimentos />
      <FormularioContato />
      <Footer />
    </div>
  );
}

export default App;

