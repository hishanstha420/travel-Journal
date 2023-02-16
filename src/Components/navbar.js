import logo from '../images/logo.svg'
import "../css/navbar.css"
export default function Navbar(){
    return(
        <nav className="Navbar">
            <img src={logo} alt="svg" className="logo" />
            <p className="nav-content">my travel journal</p>
        </nav>
    )
}