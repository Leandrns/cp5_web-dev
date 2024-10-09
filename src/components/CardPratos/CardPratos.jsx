import React, { useState, useEffect } from 'react';
import { Card, Row, Col } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import Prato from '../Prato/Prato';
import styled from 'styled-components';


// Styled Components
const EscolhaPratos = styled.div`

  h3 {
    text-align: center;
    color: white;
    padding: 20px 30px;
  }

  i {
    padding: 0 10px;
  }
`;

const BotoesContainer = styled.div`
  padding: 10px 20px;
  margin: 10px auto 30px auto;
  display: flex;
  justify-content: center;
  flex-wrap: wrap;
  gap: 20px;
`;

const Botao = styled.button`
  color: white;
  background-color: #E16D02;
  border-radius: 15px;
  border: solid #FFA033FF 3px;
  width: 80%;
  max-width: 250px;
  padding: 10px;
  text-align: center;
  transition: all ease 0.5s;
  cursor: pointer;

  &:hover {
    background-color: #FD8F0E;
    border: solid 3px rgb(151, 104, 17);
  }

  @media (max-width: 768px) {
    min-width: 70vw;
  }
`;

const CardPratoContainer = styled.div`
  background-color:#E16D02;
  padding: 0px;
  margin: 20px 30px;
  max-width: 250px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
  text-align: center;
`;

const RowStyled = styled.div`
  display: flex;
  justify-content: center;
  flex-wrap: wrap;
  --bs-gutter-x: 0.0rem;
`;


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
  if (category === 'seafood') {
    return ['seafood', 'vegetarian', 'vegan'].includes(comida.strCategory.toLowerCase());
  } else if (category === 'beef') {
    return ['beef', 'lamb', 'pork'].includes(comida.strCategory.toLowerCase());
  } else if (category === 'side') {
    return ['side', 'dessert', 'starter'].includes(comida.strCategory.toLowerCase());
  }
  return true; 
});

  return (
    <EscolhaPratos>
      <h3><i class="fa-solid fa-utensils"></i>Experimente Pratos Variados!</h3>
      <BotoesContainer>
        <Botao onClick={() => setCategory('seafood')}>Pratos Leves</Botao>
        <Botao onClick={() => setCategory('beef')}>Pratos de Carne</Botao>
        <Botao onClick={() => setCategory('side')}>Acompanhamentos</Botao>
      </BotoesContainer>

      <RowStyled>
        {filteredComidas.slice(0, 3).map((comida) => (
          <CardPratoContainer key={comida.idCategory}>
            <Prato prato={comida} />
          </CardPratoContainer>
        ))}
      </RowStyled>
    </EscolhaPratos>
  );
}

export default CardPratos;
