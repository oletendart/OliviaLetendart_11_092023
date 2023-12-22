import Navbar from "../../layouts/Navbar/Navbar.jsx";
import Footer from "../../layouts/Footer/Footer.jsx";
import imageVendeur from '../../assets/imageVendeur.png';
import './PresentationLogement.css'
import Dropdown from "../../components/Dropdown/Dropdown.jsx";
import Caroussel from "../../components/Caroussel/Caroussel.jsx";
import Tag from "../../components/Tag/Tag.jsx";
import Rate from "../../components/Rate/Rate.jsx";
import {useEffect, useState} from "react";

export default function PresentationLogement() {

    const [APIState, setAPIState] = useState({
        error: false,
        data: undefined
    })

    useEffect(() => {
        setAPIState({...APIState})
        fetch('../data/logements.json')
            .then(response => {
                return response.json();
            })
            .then(data => {
                console.log(data)
                setAPIState({error: true, data: data})
            })
    }, []);

    let title = APIState.data[0].title;
    let location = APIState.data[0].location;
    let hostPicture = APIState.data[0].host.picture;
    let host = APIState.data[0].host.name;
    let description = APIState.data[0].description;

    return (
        <>
            <div id="carousselParent">
                <Navbar />
                <Caroussel />

                <div id="flexParentLogement">
                    <section id="flexLogement">
                        <div id="nameLogement">
                            <h1>
                                {title}
                            </h1>

                            <h2>
                                {location}
                            </h2>
                        </div>

                        <div className="tagParent">
                            <Tag name="cozy"/>
                            <Tag name="douillet"/>
                            <Tag name="confort"/>
                        </div>
                    </section>

                    <section id="flexRateAndVendeur">
                        <div className="vendeur">
                            <h3>
                                {host}
                            </h3>
                            <img src={hostPicture}
                                 alt="vendeur image"/>
                        </div>
                        <div id="rate">
                            <Rate />
                        </div>
                    </section>
                </div>

                <section id="dropdownLogement">
                    <Dropdown name="Description" description={description}/>
                    <Dropdown name="Equipements"/>
                </section>
            </div>
            <Footer/>
        </>
    )
}