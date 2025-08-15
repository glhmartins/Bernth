import style from './css/LegalDisclosure.module.css';
import {Link} from 'react-router-dom';

function LegalDisclosure(){
    return(
        <div className={style.legalDisclosure}>
            <h1 className={style.title}>Legal Disclosure</h1>
            <p className={style.text}>
                Online Music Lessons Vienna GnbR<br/>
                Goldeggasse 19/1/19<br/>
                1040 Vienna<br/>
                Austria <br/>
                <Link className={style.link} to="/Terms-And-Service">Terms And Service</Link>
            </p>
            <b className={style.contact}>Contact</b>
            <p className={style.text}>E-Mail:
                <Link className={style.link} to="mailto:contact@bernth.at" target="_blank"> contact@bernth.at</Link>
            </p>
        </div>
    )
}

export default LegalDisclosure;