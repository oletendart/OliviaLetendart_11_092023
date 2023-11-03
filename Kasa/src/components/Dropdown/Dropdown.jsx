import './Dropdown.css';
import closedArrow from '../../assets/arrow_back.png'

export default function Dropdown(props) {
    return (
        <>
            <div className="t-dropdown-block">
                <div className="t-dropdown-select">
                    <p>{props.name}</p>
                    <img src={closedArrow} alt="arrow" className="arrow"/>
                </div>
                <ul className="t-dropdown-list">

                    <li className="t-dropdown-item">{props.description}</li>
                </ul>
            </div>
        </>
    )
}