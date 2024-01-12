import starActive from "../../assets/starActive.png";
import starInactive from "../../assets/starInactive.png";
import './Rate.css'

export default function Rate(props) {

    const rateProps = props.rate;

    const stars = [1, 2, 3, 4, 5];

    return (
        <>
            <div className="rate">
                {stars.map((star, index) => (<img src={rateProps >= star ? starActive : starInactive}
                                           alt="etoile pleine" key={index}/>))}
            </div>
        </>
    )
}