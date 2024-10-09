import styled from 'styled-components';
import React from 'react';
import { Card } from 'react-bootstrap';

const StyledCard = styled(Card)`
  background-color: #fff4e1;
  border: 4px solid #E16D02;
  padding: 30px;
  border-radius: 18px;  
  max-width: 300px;
  text-align: center;
  transition: all ease 0.3s;

  &:hover {
    box-shadow: 4px 4px 10px rgb(238, 67, 5);
  }
`;

const StyledImage = styled(Card.Img)`
  border-radius: 12px;
`;

const CardTitle = styled(Card.Title)`
  color: #E16D02;
`;

const StyledButton = styled.button`
  background-color: #E16D02;
  color: #ffffff;
  border: solid 3px rgb(238, 67, 5);
  border-radius: 10px;  
  padding: 5px 10px;
  transition: ease 0.6s;

  &:hover {
    background-color: #FFA033FF;
    color: #ffffff;
  }
`;

function Prato({ prato }) {
  return (
    <StyledCard>
      <StyledImage variant="top" src={prato.strCategoryThumb} alt={prato.strCategory} />
      <Card.Body>
        <CardTitle>{prato.strCategory}</CardTitle>
        <Card.Text></Card.Text>
        <StyledButton>Ver mais</StyledButton>
      </Card.Body>
    </StyledCard>
  );
}

export default Prato;
