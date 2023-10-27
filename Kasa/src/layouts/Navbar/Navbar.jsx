import logo from '../../assets/LOGO.png'
import './Navbar.css'
import {NavLink} from "react-router-dom";

export default function Navbar() {
    return (
        <div id="navbar">
            <div id="flex-nav">
                <NavLink to="/">
                    <img src={logo}
                         alt="Logo du site"
                    className="logoSite"/>
                </NavLink>

                <nav>
                    <ul>
                        <li>
                            <NavLink to="/" className="linkNavbar" activeClassName="underline">
                                Accueil
                            </NavLink>
                        </li>
                        <li>
                            <NavLink to="/about" className="linkNavbar">
                                A propos
                            </NavLink>
                        </li>
                    </ul>
                </nav>
            </div>
        </div>
    )
}