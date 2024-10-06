import { Header } from "../Header/Header";
import { MobileApp } from "../MobileApp/MobileApp";
import './HeroSection.css'

export function HeroSection() {
    return (
        <div className="hero-section">
            <Header />
            <div className="hero-content">
                <div className="texts">
                    <h1>O melhor do mundo gastronômico em um só app</h1>
                    <h3>Descubra diversos tipos de culinária, peça e receba em sua casa!</h3>
                    <button>Baixe agora</button>
                </div>
                <MobileApp />
            </div>
        </div>
    )
}