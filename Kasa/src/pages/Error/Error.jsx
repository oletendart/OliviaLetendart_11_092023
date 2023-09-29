import Navbar from "../../layouts/Navbar/Navbar.jsx";
import Footer from "../../layouts/Footer/Footer.jsx";
import {Link} from "react-router-dom";
import './Error.css'

export default function Error() {
    return (
        <>
            <Navbar />
                <div id="flex404">
                    <h1>404</h1>
                    <h2>Oups! La page que vous demandez n'existe pas.</h2>
                    <Link to='/' className="link404">Retourner sur la page d'accueil</Link>
                </div>
            <Footer />
        </>
    )
}