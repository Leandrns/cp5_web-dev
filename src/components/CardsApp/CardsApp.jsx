import { useEffect, useState } from 'react';
import './style.css'

export function CardsApp() {
    const [comidas, setComidas] = useState([]);
    useEffect(() => {
        const fetchData = async () => {
            const response = await fetch('https://www.themealdb.com/api/json/v1/1/categories.php');
            const data = await response.json();
            setComidas(data.categories);
        };
        fetchData();
    }, []);

    return (
        <div className="cards-app">
            {comidas.map(comida => (
                <div className='card-comida'>
                    <img src={comida.strCategoryThumb} alt={comida.strCategory} />
                    <p className="title">{comida.strCategory}</p>
                </div>
            ))}
        </div>
    )
}