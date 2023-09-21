import logoFooter from '../../assets/LOGO_FOOTER.png'
import './Footer.css'

export default function Footer() {
    return (
        <div id="footer">
            <img src={logoFooter}
                 alt="Logo dans le footer de la page"/>
            <p>© 2020 Kasa. All rights reserved</p>
        </div>
    )
}