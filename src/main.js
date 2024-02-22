import { useState, useEffect } from 'react';
import { Link, NavLink, Routes, Route, BrowserRouter as Router, useNavigate, useLocation, Navigate } from 'react-router-dom';
import './styles.css';
import salibandylogo from './salibandylogo.png'

export function useTitle (title) {
    useEffect  (()=>{
        const prevTitle = document.title;
        document.title = title;
        return()=>{
            document.title = prevTitle;
        }
    });
}

function Main() {
    useTitle("Salibandy");
    return (
        <Router>
            <div className='navbar'>
                <NavLink to="web-mob-2024/">Etusivu</NavLink>
                <NavLink to="web-mob-2024/historia">Historia</NavLink>
                <NavLink to="web-mob-2024/salibandysuomessa">Salibandy Suomessa</NavLink>
                <NavLink to="web-mob-2024/sarjat">Sarjat</NavLink>
            </div>
            <Routes>
                <Route path="web-mob-2024/" element={<Koti />} />
                <Route path="web-mob-2024/historia" element={<Historia />} />
                <Route path="web-mob-2024/salibandysuomessa" element={<Suomessa />} />
                <Route path="web-mob-2024/sarjat" element={<Sarjat />} />
            </Routes>
        </Router>
    )
}

const Koti = () => {
    return (
        <div className='container'>
            <div className='container2'>
                <div className='content'>
                    <h3>Historia</h3>
                    <article>
                        Salibandy kehittyi Ruotsissa 1960-luvun loppupuolella. Aluksi lajin säännöt
                        olivat jääkiekon ja kaukalopallon kaltaiset.
                        <br></br>
                        <br></br>
                        <Link to="/historia">Lue lisää</Link>
                    </article>
                </div>
                <div className='content'>
                    <h3>Salibandy Suomessa</h3>
                    <article>
                        Salibandy levisi Ruotsista Suomeen 1970-luvulla, jonka jälkeen laji alkoi kerätä suosiota maassa.
                        Suomen salibandyliitto perustettiin vuonna 1985 ja Suomen maajoukkue aloitti toimintansa samana vuonna.
                        <br></br>
                        <br></br>
                        <Link to="/salibandysuomessa">Lue lisää</Link>
                    </article>
                </div>
                <div className='content'>
                    <h3>Sarjatoiminta</h3>
                    <article>
                        
                        <br></br>
                        <br></br>
                        <Link to="/sarjat">Lue lisää</Link>
                    </article>
                </div>
            </div>
            <Footer></Footer>
        </div>
    )
}

const Historia = () => {
    return (
        <div className='test'>
            <div className='container3'>
                <div className='container4'>
                    <div className='content2'>
                        <h2>Salibandyn historia</h2>
                        <br></br>
                        <article>
                            Salibandy kehittyi Ruotsissa 1960-luvun loppupuolella. Aluksi lajin säännöt
                            olivat jääkiekon ja kaukalopallon kaltaiset.
                        </article>
                        <br></br>
                        <p>Lähde:</p>
                        <br></br><br></br><br></br>
                        <h2>Säännöt</h2>
                        <br></br>
                        <article>
                            <h3>Pelin kulku</h3>
                            Salibandypelissä on kolme erää, ja jokaisen kesto on 20 minuuttia. Sarjajärjestäjä voi lyhentää erän keston 15 minuuttiin.
                            Erän päätyttyä on erätauko. Jos ottelu päättyy 60 minuutin jälkeen tasan, ja ottelusta on selvitettävä voittaja, pelataan 10 minuutin jatkoerä.
                            Jatkoerässä ensimmäisen maalin tekevä joukkue voittaa ottelun. Jos ottelu on jatkoerän jälkeen yhä tasan, suoritetaan rangaistuslaukauskilpailu.
                            Rangaistuslaukauskisassa molemmista joukkueista valitaan viisi kenttäpelaajaa, joista jokainen suorittaa yhden rangaistuslaukauksen. Joukkue, joka onnistuu
                            tekemään enemmän maaleja viiden rangaistuslaukauskierroksen jälkeen voittaa ottelun. Jos tilanne on viiden suorituksen jälkeen tasan, samat viisi pelaajaa molemmista
                            joukkueista suorittaa yhden rangaistuslaukauksen kerrallaan, kunnes tulos ratkeaa.
                        </article>
                        <article>
                            <h3>Joukkue, pelaajat ja välineet</h3>
                            Joukkueessa saa olla enintään 20 pelaajaa. Kentällä saa olla samanaikaisesti viisi kenttäpelaajaa ja maalivahti. Maalivahdin voi korvata ylimääräisellä kenttäpelaajalla.
                            Kaikilla joukkueen pelaajilla tulee olla kilpailullisissa otteluissa yhtenäinen asu.
                        </article>
                        <br></br>
                        <p>Lähde: salibandy.fi/fi/info/saannot/pelisaannot/</p>
                    </div>
                </div>
            </div>
            <Footer></Footer>
        </div>
    )
}

const Suomessa = () => {
    return (
        <div className='container1'>
            <div className='container4'>
                <div className='content1'>
                    <img src = {salibandylogo} alt='salibandyliitto-logo' className='logo'/>
                    <h2>Salibandy Suomessa</h2>
                    <br></br> 
                    <article>
                    Salibandy levisi Ruotsista Suomeen 1970-luvulla, jonka jälkeen laji alkoi kerätä suosiota maassa.
                    Suomen salibandyliitto perustettiin vuonna 1985 ja Suomen maajoukkue aloitti toimintansa samana vuonna.
                    </article>
                    <br></br>
                    <p>Lähde:</p>
                    <br></br><br></br>
                    <h2>Suomen salibandymaajoukkueet</h2>
                    <br></br>
                    <article>
                    <h3>Miesten maajoukkue</h3>
                    Miesten maajoukkue perustettiin vuonna 1985 ja ensimmäinen virallinen maaottelu pelattiin samana vuonna. Ottelu päättyi Ruotsin 13-1 voittoon.
                    Suomi voitti ensimmäisen Euroopan mestaruutensa vuonna 1995 Sveitsissä pelatuissa kisoissa. Suomi osallistui keväällä 
                    1996 ensimmäistä kertaa pelattuihin maailmanmestaruuskilpailuihin Ruotsin Globenissa. Suomi sijoittui kisoissa hopealle.
                    Vuonna 2002 Suomi isännöi maailmanmestaruuskilpailuja, ja lopputuloksena hopeamitalit. Vuonna 2008 Suomi voitti ensimmäisen 
                    miesten maailmanmestaruutensa Prahassa pelatuissa kisoissa, kun loppuottelussa Suomi voitti Ruotsin lukemin 7-6. Suomi uusi 
                    mestaruutensa seuraavissa kisoissa vuonna 2010. Helsingissä pelatuissa kisoissa Suomi voitti loppuottelussa Ruotsin lukemin 6-2.
                    Suomen seuraava maailmanmestaruus sai odottaa vuoteen 2016 asti. Joukkue saavutti kolmannen mestaruutensa Latviassa pelatuissa kisoissa,
                    voittaen loppuottelussa Ruotsin rangaistuslaukauskisan jälkeen. Joukkue voitti neljännen maailmanmestaruutensa jälleen Prahassa pelatuissa kisoissa vuonna 2018.
                    Loppuottelussa Suomi voitti Ruotsin lukemin 6-3.
                    <br></br>
                    <h4>Saavutukset:</h4>
                    <h4>Maailmanmestaruuskilpailut</h4>
                    <ul>
                        <li>Kultaa: 2008, 2010, 2016, 2018</li>
                        <li>Hopeaa: 1996, 2000, 2002, 2006, 2012, 2014, 2020</li>
                        <li>Pronssia: 1998, 2004, 2022</li>
                    </ul>
                    <h4>Euroopanmestaruuskilpailut</h4>
                    <ul>
                        <li>Kultaa: 1995</li>
                        <li>Hopeaa: 1994</li>
                    </ul>
                    </article>
                    <br></br>
                    <p>Lähde: salibandy.fi/fi/maajoukkueet/miehet/</p>
                    <br></br>
                    <article>
                    <h3>Naisten maajoukkue</h3>
                    tekstiä...
                    </article>
                    <br></br>
                    <p>Lähde:</p>
                    <br></br>
                    <article>
                    <h3>Nuorten maajoukkueet</h3>
                    tekstiä...
                    </article>
                </div>
            </div>
            <Footer></Footer>
        </div>
    )
}


const Sarjat = () => {
    return (
        <div className='container5'>
            
        </div>
    )
}

const Footer = () => {
    return (
        <footer className='footer'>
            <div>
                <p>
                    Suomen Salibandyliitto ry
                    <br></br>
                    <a href="https://salibandy.fi/fi/etusivu/" target="_blank">salibandy.fi</a>
                    <br></br>
                    <a href="https://tulospalvelu.salibandy.fi/home" target="_blank">Tulospalvelu</a>
                </p>
            </div>
            <div>
                <p>
                    F-Liiga
                    <br></br>
                    <a href="https://fliiga.com/fi/miehet/" target="_blank">fliiga.com</a>
                </p>
            </div>
            <div>
                <p>
                    2024
                </p>
            </div>
        </footer>
    )
}
export default Main;