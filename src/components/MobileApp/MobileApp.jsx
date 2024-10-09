import { CardsApp } from "../CardsApp/CardsApp";
import logo from '../../images/GOURMETON.png'
import styled from "styled-components";

const MobileAppContainer = styled.div`
    width: 240px;
    border: solid 8px rgb(58, 58, 58);
    border-radius: 20px;
    background-color: #fff4e1;
`

const TopContainer = styled.div`
    text-align: center;
    height: 50px;
    background-color: #E16D02;
    border-radius: 8px 8px 0 0;

    img {
        height: 100%;
        transition: all .3s ease;
    }

    img:hover {
        scale: 1.1;
    }
`

const NavigationContainer = styled.div`
    display: flex;
    justify-content: space-around;
    align-items: center;
    font-size: 26px;
    padding: 15px 0;
    background-color: #E16D02;
    color: #fff4e1;
    border-radius: 0 0 8px 8px;

    :nth-child(2) {
        color: #fabc52;
    }

    i {
        transition: all .3s ease;
    }

    i:hover {
        color: #fabc52;
    }
`

export function MobileApp() {
    return (
        <MobileAppContainer>
            <TopContainer>
                <img src={logo} alt="" id="logo-app" />
            </TopContainer>
            <CardsApp />
            <NavigationContainer>
                <i class="fa-solid fa-house"></i>
                <i class="fa-solid fa-compass"></i>
                <i class="fa-solid fa-user"></i>
            </NavigationContainer>
        </MobileAppContainer>
    )
}