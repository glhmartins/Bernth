import style from './css/Footer.module.css';
import {Link} from 'react-router-dom';
import SweatRecords from '../assets/Sweat-Records.png';
import {FaYoutube, FaInstagram, FaFacebook} from 'react-icons/fa6';
import {FaPatreon} from 'react-icons/fa';

function Footer(){
    return(
        <footer>
            <div className={style.footer}>
            
                {/* Sweat Records logo */}
                <img src={SweatRecords} className={style.img} alt="logo sweat records"/>
                
                {/* Social Medias */}
                <div className={style.socials}>
                    <Link className={style.social} target='_blank' to="http://www.facebook.com/bernthofficial"><FaFacebook/></Link>
                    <Link className={style.social} target='_blank' to="http://www.instagram.com/bernthofficial"><FaInstagram/></Link>
                    <Link className={style.social} target='_blank' to="http://www.youtube.com/bernthguitar"><FaYoutube/></Link>
                    <Link className={style.social} target='_blank' to="https://www.patreon.com/bernth"><FaPatreon/></Link>
                </div>

                {/* Links */}
                <div classNames={style.pages}>
                    <Link className={style.page} to="/Terms-And-Service">Terms and Service</Link>
                    <Link className={style.page} to="/Imprint">Imprint</Link>
                    <Link className={style.page} to="/Legal-Disclosure">Legal Disclosure</Link>
                    <Link className={style.page} to="/Privacy-Policy">Privacy Policy</Link>
                </div>

                {/* Copyright */}
                <p className={style.copyright}>&copy; Online Music Lessons Vienna GenbR 2025</p>

            </div>

            {/* Content below the gray part */}
                <strong className={style.Digi}>
                    POWERED BY
                    <Link to="https://www.digistore24.com/redir/22481/Bernth/d3d3LmJlcm50aC5hdA==" className={style.text}>DIGIMEMBER</Link>
                </strong>
        </footer>
    )
}

export default Footer;