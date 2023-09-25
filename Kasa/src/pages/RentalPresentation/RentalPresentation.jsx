import backgroundImage from '../../assets/backgroundImageRental.png'
import './RentalPresentation.css'
import Footer from "../../layouts/Footer/Footer.jsx";
import Navbar from "../../layouts/Navbar/Navbar.jsx";
import Cart from "../../components/Cart/Cart.jsx";
export default function RentalPresentation() {
    return (
        <>
            <Navbar />
        <div id="parent">
            <img src={backgroundImage}
                 alt="image background de la bannière" id="background-image"/>
                <p>Chez vous partout et ailleurs</p>
        </div>

            <div id="backgroundCart">
                <div id="gridCart">
                    <Cart />
                    <Cart />
                    <Cart />
                    <Cart />
                </div>
            </div>
            <Footer />
        </>
    )
}