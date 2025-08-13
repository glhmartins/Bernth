import style from './css/Home.module.css'
import Hero from '../assets/hero.jpg'

function Home(){
    return(
        <div className={style.home}> 
             
            <header>
                <p>
                    Balancing technique and theory is the key to modern shredding! 
                    Learn about the 10 steps that will change your playing forever:
                </p>
                <button type="button">GET STARTED</button>
            </header>

            {/* Informative text about Bernth */}
            <section>
                <span>"Bernth is an awarded studio and live guitar player from Vienna, Austria. Aside from his online presence on YouTube and Instagram, he is also known for his work with artists like David Hasselhoff, Seiler und Speer, Belphegor, and others."</span>
            </section>

            {/*Discography section*/}
            <section>
                <h2>Discography</h2>

                {/*Harakiri "For The Sky"*/}
                <div></div>

                {/*Seiler und Speer "Ham Kummst"*/}
                <div></div>

                {/*Seiler und Speer "Und Weida?"*/}
                <div></div>

                {/*Seiler und Speer "Horvathlos"*/}
                <div></div>

                {/*Seiler und Speer "Live In Wien"*/}
                <div></div>

            </section>

            {/*Biography section*/}
            <section>

                <h2>Biography</h2>
                
                <p>Bernth is an Austrian guitarist, composer, session musician, and YouTuber. He contributed guitar solos to 3 platinum albums and received 2 gold awards for his soundtrack work. Before starting his professional music career, he graduated with honors from the Vienna Music Institute.</p>
                <br/>
                <p>In the early days of his career, Bernth was touring through Europe, the USA, Canada, and Latin America as a live guitar player for the Austrian extreme metal band Belphegor. In 2015, he joined the Pop/Rock outlet Seiler und Speer, contributing guitar solos and overdubs to multiple chart-topping albums and singles. Together, they played for over 120,000 people in 2016 as the headliner of the legendary Viennese 'Donauinselfest'.</p>
                <br/>
                <p>Bernth started his YouTube channel in 2018. His mix of virtuosic guitar performance videos and educational content led to him receiving a Silver Creator Award for passing 100,000 subscribers in 2020. Aside from his success on YouTube, he was the world's biggest music creator on Patreon for several months in 2021.</p>
                <br/>
                <p>In late 2020, his project CueStack teamed up with David Hasselhoff to release the song 'Through the Night'. The music video of the Hoff's Metal debut went viral and attracted over 4 million viewers on YouTube in a matter of months. The song was also featured on the Joe Rogan Experience in 2021.</p>
                <br/>
                <p>Bernth's debut solo album 'Elevation' was released to high acclaim in 2021, resulting in features in Guitar World Magazine, Premier Guitar, and other genre-specific media outlets.</p>
                <br/>
                <p>Aside from his music career, Bernth released several guitar learning programs like '10 Steps to Modern Shredding' and 'Sweep Picking Masterclass', teaching the next generation of aspiring shredders. Over 15,000 students could benefit from his educational programs on multiple platforms so far.</p>
            
            </section>
        </div>
    )
}

export default Home;