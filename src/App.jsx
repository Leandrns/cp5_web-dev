import './App.css';
import { Apresentacao } from './components/Apresentacao/Apresentacao';
import { Depoimentos } from './components/Depoimentos/Depoimentos';
import { Footer } from './components/Footer/Footer';
import FormularioContato from './components/Form/Form';
import Funcionalidades from './components/Funcionalidades/Funcionalidades';
import 'bootstrap/dist/css/bootstrap.min.css';
import FormularioContato from './components/Form/Form';
import { Footer } from './components/Footer/Footer';
import { Header } from './components/Header/Header';
import { HeroSection } from './components/HeroSection/HeroSection';

function App() {
  return (
    <div className="App">
      <Header />
      <HeroSection />
      <Apresentacao />
      <Funcionalidades />
      <Depoimentos />
      <FormularioContato />
      <Footer />
    </div>
  );
}

export default App;

