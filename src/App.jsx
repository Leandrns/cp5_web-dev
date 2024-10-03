import './App.css';
import { Apresentacao } from './components/Apresentacao/Apresentacao';
import { Depoimentos } from './components/Depoimentos/Depoimentos';
import { HeroSection } from './components/HeroSection/HeroSection';

function App() {
  return (
    <div className="App">
      <HeroSection />
      <Apresentacao/>
      <Depoimentos />
    </div>
  );
}

export default App;
