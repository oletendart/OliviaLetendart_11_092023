import backgroundImage from '../../assets/backgroundImageRental.png'
import './RentalPresentation.css'
import Footer from "../../layouts/Footer/Footer.jsx";
import Navbar from "../../layouts/Navbar/Navbar.jsx";
export default function RentalPresentation() {
    return (
        <>
            <Navbar />
        <div id="parent">
            <img src={backgroundImage}
                 alt="image background de la bannière" id="background-image"/>
                <p>Chez vous partout et ailleurs</p>
        </div>
            <Footer />
        </>
    )
}