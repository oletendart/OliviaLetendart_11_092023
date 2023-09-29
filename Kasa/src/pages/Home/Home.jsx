import backgroundImage from '../../assets/backgroundImageRental.png'
import './Home.css'
import Footer from "../../layouts/Footer/Footer.jsx";
import Navbar from "../../layouts/Navbar/Navbar.jsx";
import Cart from "../../components/Cart/Cart.jsx";
import logements from '../../data/logements.json'
import {Link} from "react-router-dom";

export default function Home() {


    return (
        <>
            <Navbar/>
            <div id="parent">
                <img src={backgroundImage}
                     alt="image background de la bannière"
                     id="background-image"/>
                <p>Chez vous partout et ailleurs</p>
            </div>

            <div id="backgroundCart">
                <div id="gridCart">
                    {logements &&
                        logements.map((el) => (
                            <Link to={`/logement/${el.id}`}
                                  id="idCart">
                                <Cart key={el.id}
                                      cover={el.cover}
                                      title={el.title}/>
                            </Link>
                        ))}
                </div>
            </div>
            <Footer/>
        </>
    )
}