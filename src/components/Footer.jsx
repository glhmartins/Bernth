import style from './css/Footer.module.css'
import {Link} from 'react-router-dom'
import SweatRecords from '../assets/Sweat-Records.png'

function Footer(){
    return(
        <>
            <footer className={style.footer}>
            
                {/* Sweat Records logo */}
                <img src={SweatRecords} className={style.img} alt="logo sweat records"/>
                
                {/* Social Medias */}
                <div className={style.social}>
                    <Link to="http://www.facebook.com/bernthofficial"></Link>
                    <Link to="http://www.instagram.com/bernthofficial"></Link>
                    <Link to="http://www.youtube.com/bernthguitar"></Link>
                    <Link to="https://www.patreon.com/bernth"></Link>
                </div>

                {/* Links */}
                <div classNames={style.page}>
                    <Link to="/Terms-And-Service">Terms and Service</Link>
                    <Link to="/Imprint">Imprint</Link>
                    <Link to="/Legal-Disclosure">Legal Disclosure</Link>
                    <Link to="/Privacy-Policy">Privacy Policy</Link>
                </div>

                {/* Copyright */}
                <p>&copy; Online Music Lessons Vienna GenbR 2025</p>
                
                {/* Content below the gray part */}
                <div className={style.Digi}>
                    <strong>
                        POWERED BY
                        <Link to="https://www.digistore24.com/redir/22481/Bernth/d3d3LmJlcm50aC5hdA==" className={style.text}>DIGIMEMBER</Link>
                    </strong>
                </div>

            </footer>
        </>
    )
}

export default Footer;