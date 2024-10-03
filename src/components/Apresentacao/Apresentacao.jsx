import { ApresentacaoCard } from "../ApresentacaoCard/ApresentacaoCard.jsx";

export function Apresentacao() {
    return (
        <div className="Apresentacao">
            <section className="twocard">
                <ApresentacaoCard icon="fa-solid fa-utensils" msg="Aproveite pratos deliciosos e frescos, com ingredientes de alta qualidade para uma experiência única."/>

                <ApresentacaoCard icon="fa-solid fa-store" msg="Explore restaurantes próximos e descubra novos sabores que combinam com o seu gosto."/>
            </section>

            <section className="twocard">
                <ApresentacaoCard icon="fa-solid fa-cart-shopping" msg="Peça suas refeições favoritas de forma simples e rápida, com uma interface intuitiva que facilita sua escolha."/>

                <ApresentacaoCard icon="fa-solid fa-heart" msg="Guarde seus pratos e restaurantes preferidos e compartilhe essas delícias com seus amigos."/>
            </section>
        </div>
    )
}