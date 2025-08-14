import style from './css/Imprint.module.css';
import {Link} from 'react-router-dom';

function Imprint(){
    return(
        <div className={style.imprint}>
            <h1 className={style.title}>Imprint</h1>
            <p className={style.text}>
                Online Music Lessons Vienna GnbR<br/>
                Goldeggasse 19/1/19<br/>
                1040 Vienna<br/>
                Austria <br/>
                VAT Reg No.: ATU73466117<br/>
                <Link className={style.link} to="/Terms-And-Service">Terms And Service</Link>
            </p>
            <b className={style.contact}>Contact</b>
            <p className={style.text}>E-Mail:
                <Link className={style.link} to="mailto:contact@bernth.at" target="_blank">contact@bernth.at</Link>
            </p>
        </div>
    )
}

export default Imprint;