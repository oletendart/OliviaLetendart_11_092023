import backgroundCart from '../../assets/backgroundCart.png'
import './Cart.css'

export default function Cart() {
    return (
        <div id="parentCart">
            <img src={backgroundCart} alt="image de la location" class="imageCart"/>
            <h3 id="titleCart">Titre de la location</h3>
        </div>
    )
}