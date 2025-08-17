import { useState } from 'react'
import Logo from '../assets/logo.png'
import style from './css/Navbar.module.css'
import {NavLink} from 'react-router-dom'
import Hamburger from 'hamburger-react';

function Navbar(){
    const [isOpen, setIsOpen] = useState(false);
    const [isMobile, setIsMobile] = useState(false);

    const handleResize = () => setIsMobile(window.innerWidth<=1024);

    window.addEventListener('resize', handleResize);

    const navDesktop = (
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
    )

    const navMobile = (
        <ul className={style.listHamburger}>
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
    )

    return(
        <nav className={style.navbar}>

            {/* Navbar image */}
            <NavLink to="/" className={style.img}>
                <img src={Logo} alt="Logo Bernth"/>
            </NavLink>

            {/* Navbar links */}
            {!isMobile && navDesktop}

            {/* Navbar Hamburger */}
            {isMobile && (
                <div className={style.Hamburger}>
                    <Hamburger 
                        size={27}
                        toggled={isOpen}
                        toggle={setIsOpen}
                        color="#9f935f"
                    />
                </div>
            )}

            {/* Navbar Hamburger is open*/}
            {isMobile && isOpen && navMobile}

        </nav>
    )
}

export default Navbar;