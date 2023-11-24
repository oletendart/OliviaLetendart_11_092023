import Navbar from "../../layouts/Navbar/Navbar.jsx";
import Footer from "../../layouts/Footer/Footer.jsx";
import starActive from '../../assets/starActive.png';
import starInactive from '../../assets/starInactive.png';
import imageVendeur from '../../assets/imageVendeur.png';
import './PresentationLogement.css'
import Dropdown from "../../components/Dropdown/Dropdown.jsx";
import Caroussel from "../../components/Caroussel/Caroussel.jsx";
import Tag from "../../components/Tag/Tag.jsx";
import Rate from "../../components/Rate/Rate.jsx";

export default function PresentationLogement() {
    return (
        <>
        <Navbar />
            <div id="carousselParent">
                <Caroussel />

                <section id="flexLogement">
                    <div id="nameLogement">
                        <h1>
                            Cozy loft on the Canal Saint-Martin
                        </h1>

                        <h2>
                            Paris, Île-de-france
                        </h2>
                    </div>

                    <div className="vendeur">
                        <h3>
                            Alexandre Dumas
                        </h3>
                        <img src={imageVendeur}
                             alt="vendeur image"/>
                    </div>
                </section>

                <section id="flexRateAndTag">
                    <div className="tagParent">
                        <Tag name="cozy"/>
                        <Tag name="douillet"/>
                        <Tag name="confort"/>
                    </div>

                    <div id="rate">
                        <Rate />
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