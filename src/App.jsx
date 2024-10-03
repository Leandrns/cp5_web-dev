import './App.css';
import { Depoimentos } from './components/Depoimentos/Depoimentos';
import { HeroSection } from './components/HeroSection/HeroSection';

function App() {
  return (
    <div className="App">
      <HeroSection />
      <Depoimentos />
    </div>
  );
}

export default App;
