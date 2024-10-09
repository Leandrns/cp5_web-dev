import { useEffect, useState } from 'react';
import styled from 'styled-components';

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

const CardsApp = styled.div`
    display: flex;
    flex-direction: column;
    height: 360px;
    overflow-x: hidden;
    gap: 10px;
    margin: 10px 0;

    &::-webkit-scrollbar-track {
        background-color: #fff4e1;
    }

    &::-webkit-scrollbar-thumb {
        background-color: #E16D02;
        border-radius: 5px;
    }

    &::-webkit-scrollbar {
        width: 5px;
    }
`

const CardComida = styled.div`
    display: flex;
    height: 50px;
    align-items: center;
    justify-content: space-between;
    margin: 0 10px;
    background-color: #fd8d0e6b;
    padding: 10px 20px 10px 5px;
    border-radius: 8px;
    transition: all .3s ease;

    &:hover {
        background-color: #fd8d0e2a;
        box-shadow: inset 0 0 0 2px #E16D02;
    }

    img {
        height: 90%;
    }

    p {
        padding: 0;
        margin: 0;
        font-weight: 600;
    }
`

    return (
        <CardsApp>
            {comidas.map(comida => (
                <CardComida>
                    <img src={comida.strCategoryThumb} alt={comida.strCategory} />
                    <p>{comida.strCategory}</p>
                </CardComida>
            ))}
        </CardsApp>
    )
}