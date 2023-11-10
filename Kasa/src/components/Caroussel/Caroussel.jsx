import './Caroussel.css';
import imageCaroussel from "../../assets/BackgroundCaroussel.png";
import arrowPrevious from "../../assets/arrowPrevious.png";
import arrowNext from "../../assets/arrowNext.png";

export default function Caroussel() {
    return (
        <>
            <section id="caroussel">
                <img src={imageCaroussel} alt="image caroussel" className="imageCaroussel"/>
                <img src={arrowPrevious} alt="previous arrow" className="arrow"/>
                <img src={arrowNext} alt="next arrow" className="arrow next"/>
            </section>
        </>
    )
}