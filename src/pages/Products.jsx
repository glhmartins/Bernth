import style from './css/Products.module.css'
import sweepBanner from '../assets/sweep_logo.png'
import screenSweep from '../assets/screen_sweep.jpg'
import stepBanner from '../assets/10-STEPS-LOGO.png'
import screenStep from '../assets/screen_10steps.jpg'
import {Link} from 'react-router-dom'

function Products(){
    return(
        <div className={style.products}>
            <div className={style.sweepBanner}>
                <img src={sweepBanner} className={style.imgSweep} alt="Sweep picking masterclass banner"/>
            </div>
            <div className={style.sweepProduct}>
                <img src={screenSweep} className={style.sweepScreens} alt="Screens with the course image"/>
                <div className={style.sweepText}>
                    <h1 className={style.ph1}>Sweep Picking Masterclass</h1>
                    <h3 className={style.ph3}>Sweep Picking Masterclass is a 10 week online course and consists of:</h3>
                    <p className={style.pp}><br/>40 in-depth instructional videos (2,5h runtime)<br/>
                        Playalong Bundle: 46 practice playalong videos (5h runtime) - practice every single exercise together with me in different tempos<br/>
                        Sweep Picking Application Bundle: learn how to apply everything we learn about technique and theory in week 9 and 10 with creative practical example compositions<br/>
                        Level up 4 times every week on the Sweep Picking Skill Tree - with this visual element you can track your progress and it makes learning rewarding and fun<br/>
                        45 page PDF course workbook - transcriptions of every exercise with detailed explanations<br/>
                        Download the Guitar Pro files for every exercise<br/>
                        Scrolling tabs and standard notation in every video - see exactly what I'm playing in real time<br/>
                        Note overlay graphics - easily memorize and identify the shapes and arpeggios on the fretboard<br/>
                        Audio downloads for every playalong video - take the workouts with you to practice anywhere and anytime without internet connection<br/>
                    </p>
                    <sub className={style.psub}>
                        ** (The course videos can only be watched on the Sweep Picking Masterclass website. Videos cannot be downloaded for offline access.<br/>
                        The Payment will be managed by DigiStore24 GmbH (DigiStore24.com)<br/>
                        <Link className={style.link} to="/Terms-And-Service">Read about the terms of service</Link><br/>
                    </sub>
                    <button className={style.btn}><Link className={style.linkBtn} to="https://www.digistore24.com/product/298626">LEARN MORE</Link></button>
                </div>
            </div>
            <div className={style.stepBanner}>
                <img src={stepBanner} className={style.imgStep} />
            </div>
            <div className={style.stepProduct}>
                <img src={screenStep} className={style.stepScreens} alt="Screens with the course image"/>
                <div className={style.stepText}>
                    <h1 className={style.ph1}>10 Steps to Modern Shredding</h1>
                    <h3 className={style.ph3}>10 Steps to Modern Shredding is a 10 week online course and consists of:</h3>
                    <p className={style.pp}><br/>
                        40 different tutorial videos<br/>
                        10 steps divided into 4 chapters each, from beginner to advanced<br/>
                        In-depth explanation of sweeping, tapping, fast alternate picking and more<br/>
                        In-depth explanation of music theory and practical applications<br/>
                        Tabs and standard notation scrolling in real time on screen, you always see exactly what I play<br/>
                        72 pages of pdf files (transcriptions and graphics), 15 jamtracks<br/>
                        Practice anywhere, anytime<br/>
                        Improve your technique and theory knowledge to become a modern guitar virtuoso<br/>
                    </p>
                    <sub className={style.psub}>
                        ** (The course videos can only be watched on the 10 Steps to Modern Shredding website. Videos cannot be downloaded for offline access.<br/>
                        The Payment will be managed by DigiStore24 GmbH (DigiStore24.com)
                        <br/>
                        <Link className={style.link} to="/Terms-And-Service">Read about the terms of service</Link><br/>
                    </sub>
                    <button className={style.btn}><Link className={style.linkBtn} to="https://www.bernth.at/10-steps-click/">LEARN MORE</Link></button>
                </div> 
            </div>
        </div> 
    )
}

export default Products;