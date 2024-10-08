import styled from 'styled-components'
import logo from '../../images/GOURMETON.png'

const HeaderContainer = styled.header`
    display: flex;
    justify-content: space-around;
    align-items: center;
    font-weight: 600;
    position: sticky;
    top: 0;
    z-index: 2;
    box-shadow: 0 0 8px black;

    nav {
        width: 100%;
        height: 80px;
        display: flex;
        align-items: center;
        padding: 0;
        background-color: #e16e02;
    }

    #logo {
        height: 80px;
        margin-right: 20px;
        margin-left: 15px;
    }

    .nav-link {
        color: #fff4e1;
    }

    .nav-link:hover {
        color: #ffa946;
    }

    form {
        margin-right: 20px;
    }

    form input {
        width: 150px;
    }

    form button {
        width: auto;
        color: #fff4e1;
        border: none;
        font-size: 20px;
        border-radius: 10px;
    }

    form button:hover {
        background-color: #fff4e1ab;
        color: #e16e02;
    }

    .container-fluid {
        padding: 0;
    }

    .navbar-toggler {
        color: #fff4e1 !important;
        border: none;
        margin-right: 15px;
        font-size: 26px;
    }

    @media screen and (max-width: 992px) {
        .navbar-collapse {
            background-color: #e16e02d7;
            backdrop-filter: blur(10px);
            padding: 20px 30px;
            text-align: start;
        }
    }
`





export function Header() {
    return (
        <HeaderContainer>
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
        </HeaderContainer>
    )
}