import { ApresentacaoCard } from "../ApresentacaoCard/ApresentacaoCard";

export function Apresentacao() {
    return (
        <div className="Apresentacao">
            <section className="twocard">
                <ApresentacaoCard icon="fa-solid fa-utensils" msg="Saboreie pratos incrivelmente preparados e feitos com ingredientes frescos, garantindo uma experiência culinária única em cada pedido."/>

                <ApresentacaoCard icon="fa-solid fa-store" msg="Descubra os melhores restaurantes e opções gastronômicas próximas a você, além de explorar novos sabores e pratos especiais do seu gosto."/>
            </section>

            <section className="twocard">
                <ApresentacaoCard icon="fa-solid fa-cart-shopping" msg="Compre seus pratos favoritos de maneira fácil e rápida com nossa interface intuitiva e fluida, proporcionando uma jornada de compra sem complicações."/>

                <ApresentacaoCard icon="fa-solid fa-heart" msg="Favoritos seus restaurantes e refeições mais amadas, e compartilhe com sua rede de amigos para que eles também possam experimentar as melhores opções."/>
            </section>
        </div>
    )
}