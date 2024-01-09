import logo from '../../assets/LOGO.png'
import './Navbar.css'
import {NavLink, useLocation} from "react-router-dom";
import {useEffect, useState} from "react";
import {act} from "react-dom/test-utils";

export default function Navbar() {
    const [activePage, setActivePage] = useState('/');
    const location = useLocation();

    useEffect(() => {
        setActivePage(location.pathname)
    }, [location.pathname]);

    return (
        <div id="navbar">
            <div id="flex-nav">
                <NavLink to="/">
                    <img src={logo}
                         alt="Logo du site"
                    className={`logoSite ${activePage === '/' && 'active'}`}/>
                </NavLink>

                <nav>
                    <ul>
                        <li>
                            <NavLink to="/" className={`linkNavbar ${activePage === '/' && 'active'}`}>
                                Accueil
                            </NavLink>
                        </li>
                        <li>
                            <NavLink to="/about" className={`linkNavbar ${activePage === '/about' && 'active'}`}>
                                A propos
                            </NavLink>
                        </li>
                    </ul>
                </nav>
            </div>
        </div>
    )
}