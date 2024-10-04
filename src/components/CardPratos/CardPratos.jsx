import './style.css';
import React, { useState, useEffect } from 'react';
import { Card, Row, Col } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import Prato from '../Prato/Prato';

function CardPratos() {
  const [comidas, setComidas] = useState([]);
  const [category, setCategory] = useState('all');

  useEffect(() => {
    const fetchData = async () => {
      const response = await fetch('https://www.themealdb.com/api/json/v1/1/categories.php');
      const data = await response.json();
      setComidas(data.categories);
    };
    fetchData();
  }, []);

  const filteredComidas = comidas.filter(comida => {
    if (category === 'vegan') {
      return comida.strCategory.toLowerCase().includes('seafood') ||
        comida.strCategory.toLowerCase().includes('vegetarian') ||
        comida.strCategory.toLowerCase().includes('vegan');
    } else if (category === 'beef') {
      return comida.strCategory.toLowerCase().includes('beef') ||
        comida.strCategory.toLowerCase().includes('lamb') ||
        comida.strCategory.toLowerCase().includes('pork');
    } else if (category === 'dessert') {
      return comida.strCategory.toLowerCase().includes('side') ||
        comida.strCategory.toLowerCase().includes('dessert') ||
        comida.strCategory.toLowerCase().includes('starter');
    }
    return true; 
  });

  return (
    <div className='escolha_pratos'>
      <h3>Experimente pratos variados</h3>
      <div className="botoes">
        <button className='botao' onClick={() => setCategory('vegan')}>Pratos Veganos</button>
        <button className='botao' onClick={() => setCategory('beef')}>Pratos de Carne</button>
        <button className='botao' onClick={() => setCategory('dessert')}>Acompanhamento</button>
      </div>

      <Row className="justify-content-center">
        {filteredComidas.slice(0, 3).map((comida) => (
          <Col xs={12} sm={6} md={4} className="d-flex justify-content-center" key={comida.idCategory}>
            <Prato prato={comida} />
          </Col>
        ))}
      </Row>
    </div>
  );
}

export default CardPratos;
