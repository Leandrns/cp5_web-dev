import { HeaderOptions } from "../HeaderOptions/HeaderOptions";
import logo from '../../images/GOURMETON.png'
import './Header.css'

export function Header() {
    return (
        <div className="header">
            <nav class="navbar navbar-expand-lg">
                <div class="container-fluid">
                    <img src={logo} alt="" id="logo"/>
                    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                        <span class="navbar-toggler-icon"></span>
                    </button>
                    <div class="collapse navbar-collapse" id="navbarSupportedContent">
                        <ul class="navbar-nav me-auto mb-2 mb-lg-0">
                            <li class="nav-item">
                                <a class="nav-link" href="#">Apresentação</a>
                            </li>
                            <li class="nav-item">
                                <a class="nav-link" href="#">Funcionalidades</a>
                            </li>
                            <li class="nav-item">
                                <a class="nav-link" href="#">Depoimentos</a>
                            </li>
                            <li class="nav-item">
                                <a class="nav-link" href="#">Contato</a>
                            </li>
                        </ul>
                        <form class="d-flex" role="search">
                            <input class="form-control me-2" type="search" placeholder="Pesquisar"/>
                            <button class="btn btn-outline-success" type="submit"><i class="fa-solid fa-magnifying-glass"></i></button>
                        </form>
                    </div>
                </div>
            </nav>
            {/* <img src={logo} alt="logo" id="logo" />
            <HeaderOptions /> */}
        </div>
    )
}