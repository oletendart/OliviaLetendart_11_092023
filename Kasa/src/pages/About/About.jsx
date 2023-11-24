import Navbar from "../../layouts/Navbar/Navbar.jsx";
import Footer from "../../layouts/Footer/Footer.jsx";
import './About.css'
import backgroundImage from "../../assets/backgroundFindOut.png";
import Dropdown from "../../components/Dropdown/Dropdown.jsx";

export default function About() {
    return (
        <>
            <Navbar />
            <div id="parentFindOut">
                <img src={backgroundImage}
                     alt="image background de la bannière" id="background-image-findOut"/>
            </div>

            <div className="dropdownBlock">
                <Dropdown name="Fiabilité" description="123456789"/>
                <Dropdown name="Respect"  description="hjkhjkhkj"/>
                <Dropdown name="Service"  description="151464564jkhjkhjkhkj"/>
                <Dropdown name="Sécurité"  description="tototoototototototototo"/>
            </div>
            <Footer />
        </>
    )
}