import starActive from "../../assets/starActive.png";
import starInactive from "../../assets/starInactive.png";
import './Rate.css'

export default function Rate(props) {

    console.log(props)

    if(props === '5') {

    }

    return (
        <>
            <div className="rate">
                {props === '5' && (
                    <img src={starActive}
                         alt="etoile pleine"/>
                )}
                <img src={starActive}
                     alt="etoile pleine" />
                <img src={starActive} alt="etoile pleine" />
                <img src={starInactive} alt="etoile vide" />
                <img src={starInactive} alt="etoile vide" />
            </div>
        </>
    )
}