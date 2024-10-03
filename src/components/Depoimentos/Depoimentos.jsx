import img_cr7 from "../../images/cr7.png";
import img_messi from "../../images/messi.png";
import img_neymar from "../../images/neymar.png";
import { Depoimento } from "../Depoimento/Depoimento.jsx";

export function Depoimentos() {
    return (
        <div className="depoimentos">
            <div id="carouselExampleInterval" class="carousel slide" data-bs-ride="carousel">
                <div class="carousel-inner">
                    <div class="carousel-item active" data-bs-interval="3000">
                        <Depoimento img={img_cr7} msg="'Esse app é o melhor que tem. Amei usar ele e recomendo pra todos!' -Cristiano Ronaldo" />
                    </div>
                    <div class="carousel-item" data-bs-interval="3000">
                        <Depoimento img={img_messi} msg="'Estou usando esse app ah 1 mês e amei!' -Lionel Messi" />
                    </div>
                    <div class="carousel-item" data-bs-interval="3000">
                        <Depoimento img={img_neymar} msg="'Que app incrível!' -Neymar jr" />
                    </div>
                </div>
                <button class="carousel-control-prev" type="button" data-bs-target="#carouselExampleInterval" data-bs-slide="prev">
                    <span class="carousel-control-prev-icon" aria-hidden="true"></span>
                    <span class="visually-hidden">Previous</span>
                </button>
                <button class="carousel-control-next" type="button" data-bs-target="#carouselExampleInterval" data-bs-slide="next">
                    <span class="carousel-control-next-icon" aria-hidden="true"></span>
                    <span class="visually-hidden">Next</span>
                </button>
            </div>

        </div>


    )
}