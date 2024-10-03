import img_cr7 from "../../images/cr7.png";
import img_messi from "../../images/messi.png";
import img_neymar from "../../images/neymar.png";
import { Depoimento } from "../Depoimento/Depoimento.jsx";

export function Depoimentos() {
    return (
        <div className="depoimentos">
            <div id="carouselExampleInterval" class="carousel slide" data-bs-ride="carousel">
                <div class="carousel-inner">
                    <div class="carousel-item active" data-bs-interval="5000">
                        <Depoimento img={img_cr7} msg='"Comida excepcional! Pedi um prato com ingredientes frescos e sofisticados, e tudo veio no ponto perfeito. A apresentação estava digna de um restaurante de alta gastronomia."' autor=" -Cristiano Ronaldo" />
                    </div>
                    <div class="carousel-item" data-bs-interval="5000">
                        <Depoimento img={img_messi} msg='"O atendimento foi impecável, desde o pedido até a entrega. A comida chegou em embalagens elegantes e em temperatura ideal. Excelente para quem aprecia o luxo em cada detalhe."' autor="-Lionel Messi" />
                    </div>
                    <div class="carousel-item" data-bs-interval="5000">
                        <Depoimento img={img_neymar} msg='"Fiquei impressionado com a qualidade dos ingredientes. Pedi um filé mignon com molho especial e foi uma das melhores refeições que já tive, comparável aos melhores restaurantes."'  autor="-Neymar Jr" />
                    </div>
                </div>
                <button class="carousel-control-prev" type="button" data-bs-target="#carouselExampleInterval" data-bs-slide="prev">
                    <span class="carousel-control-prev-icon" aria-hidden="true"></span>
                    <span class="visually-hidden">Antes</span>
                </button>
                <button class="carousel-control-next" type="button" data-bs-target="#carouselExampleInterval" data-bs-slide="next">
                    <span class="carousel-control-next-icon" aria-hidden="true"></span>
                    <span class="visually-hidden">Próxima</span>
                </button>
            </div>

        </div>


    )
}