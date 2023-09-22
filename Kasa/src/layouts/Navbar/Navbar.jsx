import logo from '../../assets/LOGO.png'
import './Navbar.css'

export default function Navbar() {
    return (
        <div id="navbar">
            <div id="flex-nav">
            <img src={logo}
                 alt="Logo du site"/>

            <nav>
                <ul>
                    <li>Accueil</li>
                    <li>A propos</li>
                </ul>
            </nav>
            </div>
        </div>
    )
}