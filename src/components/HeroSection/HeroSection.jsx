import styled from "styled-components";
import { MobileApp } from "../MobileApp/MobileApp";

const HeroContent = styled.div`
    display: flex;
    justify-content: space-around;
    align-items: center;
    padding: 20px;
    background-color: #FD8F0E;

    @media screen and (max-width: 680px) {
        flex-direction: column;
        gap: 20px;
    }
`

const HeroTexts = styled.div`
    color: #fff4e1;
    width: 40%;
    text-align: start;

    button {
        border: #e16e02 solid 3px;
        background-color: transparent;
        color: #fff4e1;
        padding: 15px 18px;
        border-radius: 15px;
        font-weight: 600;
        transition: all .3s ease;
    }

    button:hover {
        background-color: #fff4e1de;
        color: #e16e02;
        scale: 1.05;
    }
    
    @media screen and (max-width: 680px) {
        text-align: center;
        width: 80%;
    }
`

export function HeroSection() {
    return (
        <HeroContent>
            <HeroTexts>
                <h1>O melhor do mundo gastronômico em um só app</h1>
                <h3>Descubra diversos tipos de culinária, peça e receba em sua casa!</h3>
                <button>Baixe agora</button>
            </HeroTexts>
            <MobileApp />
        </HeroContent>
    )
}