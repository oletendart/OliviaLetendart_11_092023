import Navbar from "../../layouts/Navbar/Navbar.jsx";
import Footer from "../../layouts/Footer/Footer.jsx";
import './PresentationLogement.css'
import Dropdown from "../../components/Dropdown/Dropdown.jsx";
import Caroussel from "../../components/Caroussel/Caroussel.jsx";
import Tag from "../../components/Tag/Tag.jsx";
import Rate from "../../components/Rate/Rate.jsx";
import {useEffect, useState} from "react";
import Error from "../Error/Error.jsx"
import { useNavigate, useParams} from "react-router-dom";

export default function PresentationLogement() {
    const [error, setError] = useState(true);
    const [logement, setLogement] = useState();
    const navigate = useNavigate();
    const params = useParams();

    useEffect( () => {
        const fetchData = async () => {
            try {
                const response = await fetch('../data/logements.json');
                if (!response.ok) {
                    throw new Error('Network response was not ok');
                }

                const data = await response.json();
                const log = data.find((logement) => logement.id === params.id);

                if(log === undefined) {
                    navigate('/error');
                } else {
                    setError(false);
                    setLogement(log);
                }
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
                    <div id="carousselParent">
                        <Navbar/>
                        <Caroussel imgs={logement.pictures}/>

                        <div id="flexParentLogement">
                            <section id="flexLogement">
                                <div id="nameLogement">
                                    <h1>
                                        {logement.title}
                                    </h1>

                                    <h2>
                                        {logement.location}
                                    </h2>
                                </div>

                                <div className="tagParent">
                                    {logement.tags.map((tagname, index) => (
                                        <Tag name={tagname} key={index}/>
                                    ))}
                                </div>
                            </section>

                            <section id="flexRateAndVendeur">
                                <div className="vendeur">
                                    <h3>
                                        {logement.host.name}
                                    </h3>
                                    <img src={logement.host.picture}
                                         alt="vendeur image"/>
                                </div>
                                <div id="rate">
                                    <Rate rate={logement.rating}/>
                                </div>
                            </section>
                        </div>

                        <section id="dropdownLogement">
                            <Dropdown name="Description"
                                      description={logement.description}/>

                                <Dropdown name="Equipements" equipments={logement.equipments}/>
                        </section>

                    </div>)
                : <div>
                    Les données n'ont pu être chargées
                </div>
            }
            <Footer/>
        </>
    )
}