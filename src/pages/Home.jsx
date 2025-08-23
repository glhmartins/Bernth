import style from './css/Home.module.css'
import {Link} from 'react-router-dom'
import Logo from '../assets/logo.png'
import ForTheSky from '../assets/Harakiri_For_The_Sky.jpg'
import HamKummst from '../assets/Seiler_und_speer.png'
import UndWeida from '../assets/seiler_und_speer_undWeida.jpg'
import LiveInWien from '../assets/seiler_und_speer_liveInWien.jpg'
import Horvathslos from '../assets/Horvathslos.jpg'

function Home(){
    return(
        <div className={style.home}> 
             
            <header className={style.header}>
                <img src={Logo} className={style.img} alt="Bernth logo"/>
                <p className={style.textHeader}>
                    Balancing technique and theory is the key to modern shredding! 
                    Learn about the 10 steps that will change your playing forever:
                </p>
                <button className={style.btn} type="button">
                    <Link className={style.btnLink} to="/Products">GET STARTED</Link>
                </button>
            </header>

            {/* Informative text about Bernth */}
            <section className={style.sectionBackground}>
                <div className={style.spanDiv}>
                    <span className={style.spanText}>"Bernth is an awarded studio and live guitar player from Vienna, Austria. Aside from his online presence on YouTube and Instagram, he is also known for his work with artists like David Hasselhoff, Seiler und Speer, Belphegor, and others."</span>
                </div>
            </section>

            {/*Discography section*/}
            <section className={style.sectionDiscography}>
                <h2 className={style.title}>Discography</h2>

                <div className={style.cards}>

                    {/*Harakiri "For The Sky"*/}
                    <div className={style.card}>
                        <img src={ForTheSky} className={style.imgCard} alt="For the sky album image"/>
                        <div className={style.cardText}>
                            <h3 className={style.h3}>Harakiri</h3>
                            <h4 className={style.h4}>FOR THE SKY</h4>
                            <p className={style.text}>
                                #2 Metal Hammer Soundcheck<br/>
                                #29 German Album Charts<br/>
                            </p>
                        </div>
                    </div>

                    {/*Seiler und Speer "Ham Kummst"*/}
                    <div className={style.card}>
                        <img src={HamKummst} className={style.imgCard} alt="For the sky album image"/>
                        <div className={style.cardText}>
                            <h3 className={style.h3}>Seiler und Speer</h3>
                            <h4 className={style.h4}>HAM KUMMST</h4>
                            <p className={style.text}>
                                #1 Album & Single <br/>Gold award & 4x Platinum Award<br/>
                                2x Amadeus Music Award<br/>
                            </p>
                        </div>
                    </div>

                    {/*Seiler und Speer "Und Weida?"*/}
                    <div className={style.card}>
                        <img src={UndWeida} className={style.imgCard} alt="For the sky album image"/>
                        <div className={style.cardText}>
                            <h3 className={style.h3}>Seiler und Speer</h3>
                            <h4 className={style.h4}>UND WEIDA?</h4>
                            <p className={style.text}>
                                #1 Album & #3 Single<br/>
                                Gold award & Platinum Award<br/>
                            </p>
                        </div>
                    </div>

                    {/*Seiler und Speer "Horvathlos"*/}
                    <div className={style.card}>
                        <img src={Horvathslos} className={style.imgCard} alt="For the sky album image"/>
                        <div className={style.cardText}>
                            <h3 className={style.h3}>Seiler und Speer</h3>
                            <h4 className={style.h4}>HORVATHLOS</h4>
                            <p className={style.text}>
                                Soundtrack Season 2-4<br/>
                                2x Gold Award<br/>
                            </p>
                        </div>
                    </div>

                    {/*Seiler und Speer "Live In Wien"*/}
                    <div className={style.card}>
                        <img src={LiveInWien} className={style.imgCard} alt="For the sky album image"/>
                        <div className={style.cardText}>
                            <h3 className={style.h3}>Seiler und Speer</h3>
                            <h4 className={style.h4}>LIVE IN WIEN</h4>
                            <p className={style.text}>
                                Live DVD<br/>
                                Sold out show in Vienna<br/>
                            </p>
                        </div>
                    </div>

                </div>

            </section>

            {/*Biography section*/}
            <section className={style.sectionBiography}>

                <h2 className={style.title}>Biography</h2>
                
                <div className={style.divBio}>
                    <p className={style.paragraphText}>
                        Bernth is an Austrian guitarist, composer, session musician, and YouTuber. He contributed guitar solos to 3 platinum albums and received 2 gold awards for his soundtrack work. Before starting his professional music career, he graduated with honors from the Vienna Music Institute.
                        <br/><br/>
                        In the early days of his career, Bernth was touring through Europe, the USA, Canada, and Latin America as a live guitar player for the Austrian extreme metal band Belphegor. In 2015, he joined the Pop/Rock outlet Seiler und Speer, contributing guitar solos and overdubs to multiple chart-topping albums and singles. Together, they played for over 120,000 people in 2016 as the headliner of the legendary Viennese 'Donauinselfest'.
                        <br/><br/>
                        Bernth started his YouTube channel in 2018. His mix of virtuosic guitar performance videos and educational content led to him receiving a Silver Creator Award for passing 100,000 subscribers in 2020. Aside from his success on YouTube, he was the world's biggest music creator on Patreon for several months in 2021.
                        <br/><br/>
                        In late 2020, his project CueStack teamed up with David Hasselhoff to release the song 'Through the Night'. The music video of the Hoff's Metal debut went viral and attracted over 4 million viewers on YouTube in a matter of months. The song was also featured on the Joe Rogan Experience in 2021.
                        <br/><br/>
                        Bernth's debut solo album 'Elevation' was released to high acclaim in 2021, resulting in features in Guitar World Magazine, Premier Guitar, and other genre-specific media outlets.
                        <br/><br/>
                        Aside from his music career, Bernth released several guitar learning programs like '10 Steps to Modern Shredding' and 'Sweep Picking Masterclass', teaching the next generation of aspiring shredders. Over 15,000 students could benefit from his educational programs on multiple platforms so far.
                    </p>
                </div>
            </section>
        </div>
    )
}

export default Home;