import { Apresentacao } from './components/Apresentacao/Apresentacao';
import { Depoimentos } from './components/Depoimentos/Depoimentos';
import { Footer } from './components/Footer/Footer';
import Funcionalidades from './components/Funcionalidades/Funcionalidades';
import 'bootstrap/dist/css/bootstrap.min.css';
import FormularioContato from './components/Form/Form';
import { Header } from './components/Header/Header';
import { HeroSection } from './components/HeroSection/HeroSection';
import { createGlobalStyle } from 'styled-components';

const GlobalStyle = createGlobalStyle`
  * {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}
`

function App() {
  return (
    <div className="App">
      <GlobalStyle />
      <Header />
      <div id='hero'></div>
      <HeroSection />
      <div id='apresentacao'></div>
      <Apresentacao />
      <div id='funcionalidades'></div>
      <Funcionalidades />
      <div id='depoimentos'></div>
      <Depoimentos />
      <div id='contato'></div>
      <FormularioContato />
      <Footer />
    </div>
  );
}

export default App;

