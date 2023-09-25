import Navbar from "../../layouts/Navbar/Navbar.jsx";
import Footer from "../../layouts/Footer/Footer.jsx";
import './FindOutMore.css'
import backgroundImage from "../../assets/backgroundFindOut.png";
import Dropdown from "../../components/Dropdown/Dropdown.jsx";

export default function FindOutMore() {
    return (
        <>
            <Navbar />
            <div id="parentFindOut">
                <img src={backgroundImage}
                     alt="image background de la bannière" id="background-image-findOut"/>
            </div>

            <div>
                <Dropdown />
            </div>
            <Footer />
        </>
    )
}