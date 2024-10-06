import { HeaderOptions } from "../HeaderOptions/HeaderOptions";
import logo from '../../images/GOURMETON.png'
import './Header.css'

export function Header() {
    return (
        <div className="header">
            <img src={logo} alt="logo" id="logo" />
            <HeaderOptions />
        </div>
    )
}