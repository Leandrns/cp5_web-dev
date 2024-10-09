import styled from "styled-components"
import FundoDesktop from "../../images/tela_circulo.png"
import FundoMobile from "../../images/tela_circulo_mobile.png"

const DepoimentoContainer=styled.div`
    background-image: url(${FundoDesktop});
    min-height: 750px;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    padding: 30px;
    .img{
        width: 400px;
    }

    @media screen and (max-width: 900px) {
        width: 100%;
        background-image: url(${FundoMobile});
    .img{
        width: 300px;
    }
}
`

const Stars=styled.div`
    color:rgb(255, 208, 0);
    font-size: 35px;
    padding: 5px;
    padding: 17px;
    i{
        color:rgb(255, 208, 0);
        font-size: 35px;
        padding: 5px;
    }

    @media screen and (max-width: 900px) {
        i{
            font-size: 31px;
        }
    }
`

const Comentario=styled.p`
    font-size: 30px;
    font-family: "Playfair Display";
    color: #000000;
    width: 900px;
    text-align: center;

    @media screen and (max-width: 900px) {
        width: 100%;
        font-size: 25px;
    }
`

export function Depoimento(props) {
    return (
        <DepoimentoContainer>
            <img src={props.img} class="img" alt="" />
            <Stars>
                <i class="fa-solid fa-star estrela"></i>
                <i class="fa-solid fa-star estrela"></i>
                <i class="fa-solid fa-star estrela"></i>
                <i class="fa-solid fa-star estrela"></i>
                <i class="fa-solid fa-star estrela"></i>
            </Stars>
            <div className="texto">
                <Comentario>{props.msg}</Comentario>
                <Comentario>{props.autor}</Comentario>
            </div>
        </DepoimentoContainer>
    )
}