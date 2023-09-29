import './Cart.css'

export default function Cart({cover, title}) {
    return (
        <>
            <div id="parentCart">
                <img src={cover} alt="image de la location" className="imageCart"/>
                <h3 id="titleCart">{title}</h3>
            </div>
        </>
    )
}