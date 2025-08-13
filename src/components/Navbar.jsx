import Logo from '../assets/logo.png'
import style from './css/Navbar.module.css'
import {Link} from 'react-router-dom'

function Navbar(){
    return(
        <nav className={style.navbar}>

            {/* Navbar image */}
            <Link to="/" className={style.img}>
                <img src={Logo} alt="Logo Bernth"/>
            </Link>

            {/* Navbar links */}
            <ul className={style.list}>
                <li>
                    <Link to="/" className={style.item}>HOME</Link>
                </li>
                <li>
                    <Link to="/Products" className={style.item}>PRODUCTS</Link>
                </li>
                <li>
                    <Link to="https://bernth.myshopify.com/" className={style.item}>MERCH</Link>
                </li>
                <li>
                    <Link to="/Terms-And-Service" className={style.item}>TERMS AND SERVICE</Link>
                </li>
                <li>
                    <Link to="/Login" className={style.item}>LOGIN</Link>
                </li>
            </ul>
        </nav>
    )
}

export default Navbar;