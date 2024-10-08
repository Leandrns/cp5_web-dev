import { ApresentacaoCard } from "../ApresentacaoCard/ApresentacaoCard.jsx";
import styled from 'styled-components';

const Funcionalidades = styled.div`
  display: flex;
  justify-content: space-evenly;
  align-items: center;
  background: url(../../images/tela_estrela.png);
  min-height: 750px;
  padding-bottom: 35px;

  @media screen and (max-width: 720px) {
    flex-direction: column;
    background: url(../../images/tela_estrela_mobile.png);
  }
`;

const TwoCard = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-evenly;
  gap: 38px;
  padding: 35px 0 0 0;

  @media screen and (min-width: 1925px) {
    flex-direction: row;
    gap: 150px;
  }
`;

export function Apresentacao() {
    return (
        <Funcionalidades>
            <TwoCard>
                <ApresentacaoCard icon="fa-solid fa-utensils" msg="Aproveite pratos deliciosos e frescos, com ingredientes de alta qualidade para uma experiência única."/>

                <ApresentacaoCard icon="fa-solid fa-store" msg="Explore restaurantes próximos e descubra novos sabores que combinam com o seu gosto."/>
            </TwoCard>

            <TwoCard>
                <ApresentacaoCard icon="fa-solid fa-cart-shopping" msg="Peça suas refeições favoritas de forma simples e rápida, com uma interface intuitiva que facilita sua escolha."/>

                <ApresentacaoCard icon="fa-solid fa-heart" msg="Guarde seus pratos e restaurantes preferidos e compartilhe essas delícias com seus amigos."/>
            </TwoCard>
            </Funcionalidades>
    )
}