import React from 'react';
import gamePicture from '../../assets/games.png';
import paralelograms from '../../assets/paralelograms.png'
import aboutUsPicture from '../../assets/about-us.png';
import newsPicture from '../../assets/news.png';

import './Home.css';
import Header from '../../components/Header/Header';
import Footer from '../../components/Footer/Footer';

const Home = () => {
  return (
    <>
    <Header />
      <div className='container'>
        <main>
        <img src={paralelograms} id="paralelograms" alt=""/>
            <div class="texts">
                <section>
                    <h2><span id="underline">Nós</span> somos o <strong>Trânsito</strong></h2>
                </section>
                <section>
                    <h2 id="small-text">Nossa Missão é</h2>
                    <h2> Educar para <strong>SALVAR VIDAS</strong></h2>
                </section>
            </div>
            <div class="pictures">
                <section class="pictures-container">
                    <img src={aboutUsPicture} alt=""/>
                    <p>Sobre nós</p>
                </section>
                <section class="pictures-container">
                    <p>Jogos</p>
                    <a href="pages/jogos.html"><img src={gamePicture} alt="" /></a>
                </section>
                <section class="pictures-container">
                    <a href="pages/noticias.html"><img src={newsPicture} alt="" /></a>
                    <p>Notícias</p>
                </section>
            </div>
        </main>
    </div>
    <Footer />
    </>
  )
}

export default Home