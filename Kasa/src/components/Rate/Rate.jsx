import starActive from "../../assets/starActive.png";
import starInactive from "../../assets/starInactive.png";
import './Rate.css'

export default function Rate() {
    return (
        <>
            <div className="rate">
                <img src={starActive} alt="etoile pleine" />
                <img src={starActive} alt="etoile pleine" />
                <img src={starActive} alt="etoile pleine" />
                <img src={starInactive} alt="etoile vide" />
                <img src={starInactive} alt="etoile vide" />
            </div>
        </>
    )
}