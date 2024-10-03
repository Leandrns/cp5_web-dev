import { CardsApp } from "../CardsApp/CardsApp";
import './style.css'

export function MobileApp() {
    return (
        <div className="mobile-app">
            <div className="top">
                <img src="" alt="" id="logo-app" />
            </div>
            <CardsApp />
            <div className="navigation">
                <i class="fa-solid fa-house"></i>
                <i class="fa-solid fa-compass"></i>
                <i class="fa-solid fa-user"></i>
            </div>
        </div>
    )
}