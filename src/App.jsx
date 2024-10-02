import { useEffect, useState } from 'react';
import './App.css';

function App() {
  const [comidas, setComidas] = useState([]);
  useEffect(() => {
    const fetchData = async () => {
      const response = await fetch('https://api.spoonacular.com/recipes/random?number=10&apiKey=50eba9122f3d4bbdbfba96987caade42');
      const data = await response.json();
      setComidas(data.recipes);
    };
    fetchData();
  }, []);

  return (
    <div className="App">
      {comidas.map(receita => (
        <div>
          <p>{receita.title}</p>
          <img src={receita.image} alt="" />
        </div>

      ))}
    </div>
  );
}

export default App;
