import './Caroussel.css';
import arrowPrevious from "../../assets/arrowPrevious.png";
import arrowNext from "../../assets/arrowNext.png";
import {useState} from "react";

export default function Caroussel(props) {

    const [currentIndex, setCurrentIndex] = useState(0)

        const handleNext = () => {
        setCurrentIndex((nextIndex) => (
            nextIndex === props.imgs.length - 1 ? 0 : nextIndex + 1
        ))
    }

        const handlePrevious = () => {
            setCurrentIndex((prevIndex) => (
                prevIndex === 0 ? props.imgs.length - 1 : prevIndex - 1
            ))
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

                <img className="imageCaroussel" key={currentIndex} src={props.imgs[currentIndex]} alt={`image caroussel ${currentIndex}`}/>

                <p id="pagination">{`${currentIndex + 1} / ${props.imgs.length}`}</p>

            </section>
        </>
    )
}