import logo from '../../assets/LOGO.png'
import './Navbar.css'
import {Link} from "react-router-dom";

export default function Navbar() {
    return (
        <div id="navbar">
            <div id="flex-nav">
                <Link to="/">
                    <img src={logo}
                         alt="Logo du site"
                    className="logoSite"/>
                </Link>

                <nav>
                    <ul>
                        <li>
                            <Link to="/" className="linkNavbar">
                                Accueil
                            </Link>
                        </li>
                        <li>
                            <Link to="/findoutmore" className="linkNavbar">
                                A propos
                            </Link>
                        </li>
                    </ul>
                </nav>
            </div>
        </div>
    )
}