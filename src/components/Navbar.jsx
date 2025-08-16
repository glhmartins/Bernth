import Logo from '../assets/logo.png'
import style from './css/Navbar.module.css'
import {NavLink} from 'react-router-dom'

function Navbar(){
    return(
        <nav className={style.navbar}>

            {/* Navbar image */}
            <NavLink to="/" className={style.img}>
                <img src={Logo} alt="Logo Bernth"/>
            </NavLink>

            {/* Navbar links */}
            <ul className={style.list}>
                <li>
                    <NavLink to="/"
                        className={({isActive}) => (isActive ? `${style.item} ${style.active}`: style.item)}>
                        HOME
                    </NavLink>
                </li>
                <li>
                    <NavLink to="/Products" 
                        className={({isActive})=> (isActive ? `${style.item} ${style.active}` : style.item)}>
                        PRODUCTS
                    </NavLink>
                </li>
                <li>
                    <a href="https://bernth.myshopify.com/" className={style.item}>MERCH</a>
                </li>
                <li>
                    <NavLink to="/Terms-And-Service" 
                        className={({isActive}) => (isActive ? `${style.item} ${style.active}` : style.item)}>
                        TERMS AND SERVICE
                    </NavLink>
                </li>
                <li>
                    <NavLink to="/Login" 
                        className={({isActive}) => (isActive ? `${style.item} ${style.active}` : style.item)}>
                        LOGIN
                    </NavLink>
                </li>
            </ul>
        </nav>
    )
}

export default Navbar;