import backgroundImage from '../../assets/backgroundImageRental.png'
import './Home.css'
import Footer from "../../layouts/Footer/Footer.jsx";
import Navbar from "../../layouts/Navbar/Navbar.jsx";
import Cart from "../../components/Cart/Cart.jsx";
import {Link} from "react-router-dom";
import {useEffect, useState} from "react";

export default function Home() {

    const [error, setError] = useState(true);

    const [logement, setLogement] = useState();


    useEffect( () => {
        const fetchData = async () => {
            try {
                const response = await fetch('../data/logements.json');
                if (!response.ok) {
                    throw new Error('Network response was not ok');
                }

                const data = await response.json();

                setError(false);
                setLogement(data);
            } catch (error) {
                console.error('Error fetching data:', error);
                setError(true);
            }
        };

        fetchData();
    }, []);

    return (
        <>
            {!error ? (
                <section>
                <div id="conteneur">
                    <Navbar/>
                    <div id="parent">
                        <img src={backgroundImage}
                             alt="image background de la bannière"
                             id="background-image"/>
                        <p>Chez vous partout et ailleurs</p>
                    </div>

                    <div id="backgroundCart">
                        <div id="gridCart">
                            {logement && logement.map((el) => (
                                <Link
                                    key={el.id}
                                    to={`/logement/${el.id}`}
                                          id="idCart">
                                        <Cart cover={el.cover}
                                              title={el.title}/>
                                    </Link>))
                                }
                        </div>
                    </div>
                </div>
                <Footer/>
                </section> ) : <div>
                Les données n'ont pu être chargées
                </div>
            }
        </>
            )
            }