import Navbar from "../../layouts/Navbar/Navbar.jsx";
import Footer from "../../layouts/Footer/Footer.jsx";
import imageCaroussel from '../../assets/BackgroundCaroussel.png';
import starActive from '../../assets/starActive.png';
import starInactive from '../../assets/starInactive.png';
import imageVendeur from '../../assets/imageVendeur.png';
import arrowNext from '../../assets/arrowNext.png';
import arrowPrevious from '../../assets/arrowPrevious.png';
import './PresentationLogement.css'
import Dropdown from "../../components/Dropdown/Dropdown.jsx";

export default function PresentationLogement() {
    return (
        <>
        <Navbar />
            <div id="carousselParent">
                <section id="caroussel">
                    <img src={imageCaroussel} alt="image caroussel" className="imageCaroussel"/>
                    <img src={arrowPrevious} alt="previous arrow" className="arrow"/>
                    <img src={arrowNext} alt="next arrow" className="arrow next"/>
                </section>
                <section id="nameLogement">
                    <h1>
                        Cozy loft on the Canal Saint-Martin
                    </h1>
                </section>

                <section id="presentationLogement">
                    <h2>
                        Paris, Île-de-france
                    </h2>

                    <div className="tagParent">
                        <span className="tag">
                            Cozy
                        </span>
                        <span className="tag">
                            Cozy
                        </span>
                        <span className="tag">
                            Cozy
                        </span>
                    </div>


                </section>
                <section id="rateAndVendeur">
                    <div className="vendeur">
                        <h3>
                            Alexandre Dumas
                        </h3>
                        <img src={imageVendeur}
                             alt="vendeur image"/>
                    </div>

                    <div className="rate">
                        <img src={starActive} alt="etoile pleine" />
                        <img src={starActive} alt="etoile pleine" />
                        <img src={starActive} alt="etoile pleine" />
                        <img src={starInactive} alt="etoile vide" />
                        <img src={starInactive} alt="etoile vide" />
                    </div>
                </section>
                <section id="dropdownLogement">
                    <Dropdown name="Description"/>
                    <Dropdown name="Equipements"/>
                </section>
            </div>
            <Footer/>
        </>
    )
}