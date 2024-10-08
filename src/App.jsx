import './App.css';
import { HeroSection } from './components/HeroSection/HeroSection';
import FormularioContato from './components/Form/Form';
import React from 'react';
import { Footer } from './components/Footer/Footer';

function App() {
  return (
    <div className="App">
      <HeroSection />
      <FormularioContato />
      <Footer />
    </div>
  );
}

export default App;

