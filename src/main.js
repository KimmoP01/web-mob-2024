import { useState, useEffect } from 'react';
import { Link, NavLink, Routes, Route, BrowserRouter as Router, useNavigate, useLocation, Navigate } from 'react-router-dom';
import './styles.css';
import salibandylogo from './salibandylogo.png';
import fliigalogo from './fliigalogo.png';

export function useTitle(title) {
    useEffect(() => {
        const prevTitle = document.title;
        document.title = title;
        return () => {
            document.title = prevTitle;
        }
    });
}

function Main() {
    useTitle("Salibandy - projektityö");
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
                        <Link to="historia">Lue lisää</Link>
                    </article>
                </div>
                <div className='content'>
                    <h3>Salibandy Suomessa</h3>
                    <article>
                        Salibandy levisi Ruotsista Suomeen 1970-luvulla, jonka jälkeen laji alkoi kerätä suosiota maassa.
                        Suomen salibandyliitto perustettiin vuonna 1985 ja Suomen maajoukkue aloitti toimintansa samana vuonna.
                        Salibandyliitto järjestää salibandyn sarjatoimintaa Suomessa. Suomella on myös maajoukkuetoimintaa miesten, naisten ja
                        nuorten osalta.
                        <br></br>
                        <br></br>
                        <Link to="salibandysuomessa">Lue lisää</Link>
                    </article>
                </div>
                <div className='content'>
                    <h3>Sarjatoiminta</h3>
                    <article>
                        Suomessa pelataan kilpailullisia otteluita miesten, naisten ja nuorten sarjoissa. Miehillä korkein sarja on F-liiga, mutta sarjoja on F-liigan lisäksi yhteensä seitsemän.
                        Naisten korkein sarja on nimeltään myös F-liiga. Naisilla sarjoja on yhteensä F-liigan lisäksi viisi. Nuorten osalta sarjat menevät ikäluokittain.
                        <br></br>
                        <br></br>
                        <Link to="sarjat">Lue lisää</Link>
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
                    <img src={salibandylogo} alt='salibandyliitto-logo' className='logo' />
                    <h2>Salibandy Suomessa</h2>
                    <br></br>
                    <article>
                        Salibandy levisi Ruotsista Suomeen 1970-luvulla, jonka jälkeen laji alkoi kerätä suosiota maassa.
                        Suomen salibandyliitto perustettiin vuonna 1985 ja Suomen miesten maajoukkue aloitti toimintansa samana vuonna.
                        <br></br><br></br>
                        Salibandyliitto järjestää Suomessa salibandyn sarjatoiminnan. F-liiga toimii korkeimpana sarjatasona sekä miesten, että
                        naisten sarjoissa. Toiseksi korkeimpana sarjatasona miehillä on Inssi-divari ja naisilla naisten divari. Näistä sarjoista alemmat
                        järjestetään alueittain jaettujen lohkojen kesken. Miesten puolella sarjat ulottuvat aiemmin mainittujen jälkeen aina Suomisarjasta 6.divisioonaan saakka.
                        Naisten puolelta sarjat ulottuvat aiemmin mainittujen jälkeen Suomisarjasta 4.divisioonaan asti. Salibandyliitto järjestää myös junioreiden ja senioreiden sarjatoimintaa.

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
                        Naisten maajoukkue perustettiin vuonna 1992, ja joukkueen ensimmäinen arvokisaturnaus oli vuoden 1995 Euroopanmestaruuskisat.
                        Sveitsissä pelatuissa kisoissa joukkue voitti pronssia. Suomi osallistui ensimmäistä kertaa naisten maailmanmestaruuskisoihin
                        vuonna 1997. Kisat pelattiin Ahvenanmaalla ja Suomi sijoittui hopealle. Naisten joukkue voitti ensimmäisen maailmanmestaruutensa
                        heti seuraavissa kisoissa vuonna 1999. Loppuottelussa Suomi voitti Sveitsin. Suomi voitti toisen mestaruuden heti seuraavissa kisoissa
                        vuonna 2001. Latviassa pelattujen kisojen loppuottelussa Suomi voitti Ruotsin 2-0. Toisen maailmanmestaruuden jälkeen joukkue on saavuttanut
                        kahdeksan hopeamitalia ja kolme pronssimitalia.
                    </article>
                    <br></br>
                    <h4>Saavutukset:</h4>
                    <h4>Maailmanmestaruuskilpailut</h4>
                    <ul>
                        <li>Kultaa: 1999, 2001</li>
                        <li>Hopeaa: 1997, 2005, 2007, 2011, 2013, 2015, 2017, 2021, 2023</li>
                        <li>Pronssia: 2003, 2009, 2019</li>
                    </ul>
                    <h4>Euroopanmestaruuskilpailut</h4>
                    <ul>
                        <li>Prossia: 1995</li>
                    </ul>
                    <br></br>
                    <p>Lähde: salibandy.fi/fi/maajoukkueet/naiset/</p>
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
        <div className='container9'>
            <div className='container5'>
                <div className='container6'>
                    <div className='content3'>
                        <div className='content5'>
                            <a href="https://fliiga.com/fi/miehet/" target="_blank"><img src={fliigalogo} alt="f-liiga logo" style={{ width: '100px' }}></img></a>
                            <h2>F-liiga</h2>
                            <article>
                                <h3>Miesten F-liiga</h3>
                                F-liiga toimii miesten sarjoissa korkeimpana tasona Suomessa. Kaudella 2023-2024 liigassa pelaa 12 joukkuetta,yhdeksästä eri kaupungista. Kaudelle hallitsevana mestarina lähti
                                Turun Palloseura (TPS). Turusta on myös kotoisin FBC Turku. Seinäjoelta on kaksi joukkuetta, SPV ja Nurmon Jymy. Espoosta kaksi joukkuetta Oilers ja Indians.
                                Liigassa pelaavat myös Tampereen Classic, Nokian KrP, Jyväskylän Happee, Oulun OLS, Helsingin EräViikingit ja Lahden LASB. <br></br><br></br> Kausi jakaantuu kahteen osaan: runkosarjaan ja pudotuspeleihin.
                                Runkosarja pelataan ensin, ja sen aikana jokainen joukkue pelaa 33 ottelua. Tällöin joukkueet kohtaavat toisensa kolmesti runkosarjan aikana. Runkosarjan päätyttyä sijoille 1.-8. sijoittuneet
                                joukkueet jatkavat pudotuspeleihin. Sijoille 11. ja 12. sijoittuneet joukkueet jatkavat kauttaan pudotuskarsinnoissa. Siellä joukkueet pelaavat alemman sarjatason, Inssi-Divarin, kuuden parhaan joukkueen kanssa.
                                Pudotuskarsintojen kaksi parasta joukkuetta pelaavat F-liigan seuraavalla kaudella. <br></br><br></br> Pudotuspeleissä runkosarjan voittanut joukkue valitsee puolivälierävastustajansa 5.-8. sijoittuneista joukkueista. Seuraavaksi runkosarjassa toiseksi sijoittunut
                                valitsee jäljelle jääneistä kolmesta joukkueesta oman vastustajansa ja viimeisenä runkosarjan kolmanneksi sijoittunut joukkue valitsee kahdesta jäljelle jääneestä vastustajansa. Runkosarjassa neljänneksi sijoittunut saa vastustajakseen valitsematta jääneen joukkueen.
                                Pudotuspelit koostuu kolmesta vaiheesta: puolivärierät, välierät ja loppuottelu. Kaikki vaiheet pelataan paras seitsemästä -järjestelmällä, eli ensimmäisenä neljä ottelua otteluparista voittanut joukkue jatkaa eteenpäin. Välierissä otteluparit muodostuvat runkosarjasijoitusten mukaisesti,
                                missä parhaiten sijoittunut kohtaa heikoimmin sijoittuneen. Täydessä seitsemän ottelun otteluparissa joukkueet pelaavat kolme ottelua kotikentällään. Jos seitsemäs ottelu on tarpeellinen, pelataan se runkosarjassa korkeammalle sijoittuneen kotikentällä. Välierien hävinneet joukkueet kohtaavat toisensa yksittäisessä pronssiottelussa.

                            </article>
                        </div>
                        <div className='content4'>
                            <h3>Miesten F-liigan sarjataulukko 2023-2024</h3>
                            <table>
                                <thead>
                                    <tr>
                                        <th></th><th className='taulu'>Joukkue</th><th>O</th><th>V</th><th>JV</th><th>JH</th><th>H</th><th>TM</th><th>PM</th><th>P</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    <tr className='playoffs'>
                                        <td>1.</td><td className='taulu'>Classic</td><td>29</td><td>24</td><td>1</td><td>0</td><td>4</td><td>230</td><td>119</td><td>74</td>
                                    </tr>
                                    <tr className='playoffs'>
                                        <td>2.</td><td className='taulu'>Oilers</td><td>29</td><td>23</td><td>0</td><td>1</td><td>5</td><td>212</td><td>129</td><td>70</td>
                                    </tr>
                                    <tr className='playoffs'>
                                        <td>3.</td><td className='taulu'>Nokian KrP</td><td>29</td><td>21</td><td>1</td><td>0</td><td>7</td><td>225</td><td>140</td><td>65</td>
                                    </tr>
                                    <tr className='playoffs'>
                                        <td>4.</td><td className='taulu'>Indians</td><td>29</td><td>14</td><td>4</td><td>3</td><td>8</td><td>190</td><td>136</td><td>53</td>
                                    </tr>
                                    <tr className='playoffs'>
                                        <td>5.</td><td className='taulu'>SPV</td><td>29</td><td>15</td><td>2</td><td>2</td><td>10</td><td>181</td><td>149</td><td>51</td>
                                    </tr>
                                    <tr className='playoffs'>
                                        <td>6.</td><td className='taulu'>TPS</td><td>29</td><td>15</td><td>2</td><td>1</td><td>11</td><td>170</td><td>135</td><td>50</td>
                                    </tr>
                                    <tr className='playoffs'>
                                        <td>7.</td><td className='taulu'>Happee</td><td>29</td><td>13</td><td>3</td><td>2</td><td>11</td><td>164</td><td>155</td><td>45</td>
                                    </tr>
                                    <tr className='playoffs'>
                                        <td>8.</td><td className='taulu'>OLS</td><td>29</td><td>10</td><td>1</td><td>4</td><td>14</td><td>150</td><td>163</td><td>36</td>
                                    </tr>
                                    <tr>
                                        <td>9.</td><td className='taulu'>LASB</td><td>29</td><td>9</td><td>1</td><td>0</td><td>19</td><td>113</td><td>190</td><td>29</td>
                                    </tr>
                                    <tr>
                                        <td>10.</td><td className='taulu'>Jymy</td><td>29</td><td>6</td><td>2</td><td>1</td><td>20</td><td>118</td><td>181</td><td>23</td>
                                    </tr>
                                    <tr className='karsija'>
                                        <td>11.</td><td className='taulu'>EräViikingit</td><td>29</td><td>5</td><td>0</td><td>1</td><td>23</td><td>117</td><td>232</td><td>16</td>
                                    </tr>
                                    <tr className='karsija'>
                                        <td>12.</td><td className='taulu'>FBC Turku</td><td>29</td><td>1</td><td>1</td><td>3</td><td>24</td><td>101</td><td>242</td><td>8</td>
                                    </tr>
                                </tbody>
                            </table>
                            <p>Sarjataulukko 22.2.2024 <a href="https://tulospalvelu.fliiga.com/category/402!sb2023/group/2" target="_blank" className='links'>  Katso lisää F-liigan sivuilta</a></p>
                            <article>
                                <h4>Taulukon lyhenteet</h4>
                                O = Ottelut <br></br> V = Voitot <br></br> JV = Jatkoaikavoitot <br></br>
                                JH = Jatkoaikahäviöt <br></br> H = Häviöt <br></br> TM = Tehdyt maalit <br></br>
                                PM = Päästetyt maalit <br></br> P = Pisteet
                            </article>
                        </div>
                    </div>
                </div>
                <div className='container7'>
                    <div className='content3'>
                        <div className='content5'>
                            <a href="https://fliiga.com/fi/naiset/" target="_blank"><img src={fliigalogo} alt="f-liiga logo" style={{ width: '100px' }}></img></a>
                            <h2>F-liiga</h2>
                            <article>
                                <h3>Naisten F-liiga</h3>
                                F-liiga toimii naisten sarjoissa korkeimpana tasona Suomessa. Kaudella 2023-2024 liigassa pelaa 12 joukkuetta, 10 eri kaupungista. Kauteen hallitsevana mestarina lähti Turun Palloseura (TPS).
                                Turusta on myös kotoisin FBC Loisto. Tampereelta ovat kotoisin Classic ja Koovee. Muut liigassa pelaavat joukkueet ovat Helsingin EräViikingit, O2-Jyväskylä, Porvoon PSS, Lappeenrannan SaiPa,
                                Nurmijärven SB-Pro, Oulun SSRA, Kuopion Welhot ja Sipoon ÅIF. <br></br><br></br>
                                Kausi jakaantuu kahteen osaan: runkosarjaan ja pudotuspeleihin. Runkosarjassa jokainen joukkue pelaa 22 ottelua. Tällöin joukkueet kohtaavat toisensa kahdesti runkosarjan aikana. Runkosarjan päätyttyä sijoille 1.-8.
                                sijoittuneet joukkueet jatkavat pudotuspeleihin. Sijoille 11. ja 12. jatkavat kauttaan pudotuskarsinnoissa. Siellä joukkueet kohtaavat alemman sarjatason, naisten Divarin, kuusi parasta joukkuetta. Näiden joukkueiden välisten pudotuspelien
                                kaksi parasta pelaa F-liigassa kaudella 2024-2025. <br></br><br></br>
                                Puolivälierissä otteluparien muodostaminen menee miesten F-liigan tapaan. Runkosarjan voittaja valitsee itselleen puolivälierävastustajan sijoille 5.-8. sijoittuneista joukkueista. Seuraavaksi runkosarjan toiseksi sijoittunut joukkue valitsee vastustajansa
                                kolmesta jäljelle jääneestä joukkueesta. Sen jälkeen runkosarjan kolmanneksi sijoittunut valitsee vastustajansa kahdesta jäljellä olevasta joukkueesta. Runkosarjan neljänneksi sijoittunut kohtaa ainoan jäljelle jääneen joukkueen.
                                Välierissä otteluparit muodostuvat runkosarjasijoitusten mukaisesti, missä parhaiten sijoittunut kohtaa heikoimmin sijoittuneen. Puolivälierät ja välierät pelataan paras viidestä- järjestelmällä. Loppuottelu pelataan paras seitsemästä -järjestelmällä.
                                Välierissä hävinneet joukkueet kohtaavat toisensa yksittäisessä pronssiottelussa.
                            </article>
                        </div>
                        <div className='content4'>
                            <h3>Naisten F-liigan sarjataulukko 2023-2024</h3>
                            <table>
                                <thead>
                                    <tr>
                                        <th></th><th className='taulu'>Joukkue</th><th>O</th><th>V</th><th>JV</th><th>JH</th><th>H</th><th>TM</th><th>PM</th><th>P</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    <tr className='playoffs'>
                                        <td>1.</td><td className='taulu'>Classic</td><td>29</td><td>24</td><td>1</td><td>0</td><td>4</td><td>230</td><td>119</td><td>74</td>
                                    </tr>
                                    <tr className='playoffs'>
                                        <td>2.</td><td className='taulu'>Oilers</td><td>29</td><td>23</td><td>0</td><td>1</td><td>5</td><td>212</td><td>129</td><td>70</td>
                                    </tr>
                                    <tr className='playoffs'>
                                        <td>3.</td><td className='taulu'>Nokian KrP</td><td>29</td><td>21</td><td>1</td><td>0</td><td>7</td><td>225</td><td>140</td><td>65</td>
                                    </tr>
                                    <tr className='playoffs'>
                                        <td>4.</td><td className='taulu'>Indians</td><td>29</td><td>14</td><td>4</td><td>3</td><td>8</td><td>190</td><td>136</td><td>53</td>
                                    </tr>
                                    <tr className='playoffs'>
                                        <td>5.</td><td className='taulu'>SPV</td><td>29</td><td>15</td><td>2</td><td>2</td><td>10</td><td>181</td><td>149</td><td>51</td>
                                    </tr>
                                    <tr className='playoffs'>
                                        <td>6.</td><td className='taulu'>TPS</td><td>29</td><td>15</td><td>2</td><td>1</td><td>11</td><td>170</td><td>135</td><td>50</td>
                                    </tr>
                                    <tr className='playoffs'>
                                        <td>7.</td><td className='taulu'>Happee</td><td>29</td><td>13</td><td>3</td><td>2</td><td>11</td><td>164</td><td>155</td><td>45</td>
                                    </tr>
                                    <tr className='playoffs'>
                                        <td>8.</td><td className='taulu'>OLS</td><td>29</td><td>10</td><td>1</td><td>4</td><td>14</td><td>150</td><td>163</td><td>36</td>
                                    </tr>
                                    <tr>
                                        <td>9.</td><td className='taulu'>LASB</td><td>29</td><td>9</td><td>1</td><td>0</td><td>19</td><td>113</td><td>190</td><td>29</td>
                                    </tr>
                                    <tr>
                                        <td>10.</td><td className='taulu'>Jymy</td><td>29</td><td>6</td><td>2</td><td>1</td><td>20</td><td>118</td><td>181</td><td>23</td>
                                    </tr>
                                    <tr className='karsija'>
                                        <td>11.</td><td className='taulu'>EräViikingit</td><td>29</td><td>5</td><td>0</td><td>1</td><td>23</td><td>117</td><td>232</td><td>16</td>
                                    </tr>
                                    <tr className='karsija'>
                                        <td>12.</td><td className='taulu'>FBC Turku</td><td>29</td><td>1</td><td>1</td><td>3</td><td>24</td><td>101</td><td>242</td><td>8</td>
                                    </tr>
                                </tbody>
                            </table>
                            <p>Sarjataulukko 22.2.2024 <a href="https://tulospalvelu.fliiga.com/category/384!sb2023/group/1" target="_blank" className='links'>  Katso lisää F-liigan sivuilta</a></p>
                            <article>
                                <h4>Taulukon lyhenteet</h4>
                                O = Ottelut <br></br> V = Voitot <br></br> JV = Jatkoaikavoitot <br></br>
                                JH = Jatkoaikahäviöt <br></br> H = Häviöt <br></br> TM = Tehdyt maalit <br></br>
                                PM = Päästetyt maalit <br></br> P = Pisteet
                            </article>
                        </div>
                    </div>
                </div>
            </div>
            <div>
            <img src={salibandylogo} alt='salibandyliitto-logo' className='logo2'/>
            </div>
            <div className='container8'>
                <div className='container6'>
                    <div className='content6'>
                        <div className='content7'>
                            <h3>Muut miesten sarjatasot</h3>
                        </div>
                        <div className='content8'>
                            <h3>Muut naisten sarjatasot</h3>
                        </div>
                    </div>
                </div>
            </div>
            <Footer></Footer>
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
                    Alakiventie 2, 00920 Helsinki
                    <br></br>
                    Puhelin: 0400 529 017
                    <br></br>
                    Sähköposti: asiakaspalvelu@salibandy.fi
                    <br></br>
                    <a href="https://salibandy.fi/fi/etusivu/" target="_blank">salibandy.fi</a>
                </p>
            </div>
            <div>
                <p>
                    F-liiga
                    <br></br>
                    <a href="https://fliiga.com/fi/miehet/" target="_blank">fliiga.com</a>
                    <br></br>
                    <a href="https://tulospalvelu.salibandy.fi/home" target="_blank">Tulospalvelu</a>
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