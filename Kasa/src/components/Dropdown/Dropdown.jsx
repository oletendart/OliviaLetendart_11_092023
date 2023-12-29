import './Dropdown.css';
import closedArrow from '../../assets/arrow_back.png'
import {useState} from "react";

export default function Dropdown(props) {
    const [dropdown, setDropdown] = useState(false);
    function handleDropdown(e) {
        setDropdown(e => !e)
    }

    return (
        <>
            <div className="t-dropdown-block">
                <div className="t-dropdown-select">
                    <p>{props.name}</p>
                    <img src={closedArrow} alt="arrow" className={dropdown ? 'arrow openDropdown' : 'arrow'} onClick={handleDropdown}/>
                </div>
                <ul className={dropdown ? "t-dropdown-list openDropdown" : 't-dropdown-list'}>
                    {props.equipments ? (
                        props.equipments.map((equipment, index) => (
                            <li key={index} className="t-dropdown-item">{equipment}</li>
                        ))
                    ) : (
                        <li className="t-dropdown-item">{props.description}</li>
                    )
                    }
                </ul>
            </div>
        </>
    )
}