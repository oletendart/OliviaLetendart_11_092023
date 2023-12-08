import './Caroussel.css';
import imageCaroussel from "../../assets/BackgroundCaroussel.png";
import arrowPrevious from "../../assets/arrowPrevious.png";
import arrowNext from "../../assets/arrowNext.png";

export default function Caroussel() {

        const images = [
            {id: 0, src: imageCaroussel}
        ]

        const handleNext = () => {
        }

        const handlePrevious = () => {

        }



    return (
        <>
            <section id="caroussel">
                <img src={arrowPrevious}
                     alt="previous arrow"
                     className="arrow"
                     onClick={handlePrevious}
                />
                <img src={arrowNext}
                     alt="next arrow"
                     className="arrow next"
                    onClick={handleNext}
                />

                <ul className="carousselImage">
                    {images.map((image, index) => (
                        <li>
                            <img
                                key={index}
                                src={image.src}
                                 alt="image caroussel"
                                 className="imageCaroussel"/>
                        </li>
                    ))}
                </ul>

            </section>
        </>
    )
}