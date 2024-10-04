// src/components/CardPratos/Card.jsx
import React from 'react';
import { Card} from 'react-bootstrap';
import './style.css'

function Prato({ prato }) {
    return (
        <Card className='card' style={{ width: '20rem'}}>
            <Card.Img variant="top" src={prato.strCategoryThumb} alt={prato.strCategory} />
            <Card.Body>
                <Card.Title style={{color: 'orange'}}>{prato.strCategory}</Card.Title>
                <Card.Text></Card.Text>
                <button>Ver mais</button>
            </Card.Body>
        </Card>
    );
}

export default Prato;
