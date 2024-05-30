import React from 'react';
import gamePicture from '../../assets/games.png';
import paralelograms from '../../assets/paralelograms.png';
import aboutUsPicture from '../../assets/about-us.png';
import newsPicture from '../../assets/news.png';

import './Home.css';
import Header from '../../components/Header/Header';
import Footer from '../../components/Footer/Footer';

function Home() {
  return (
    <>
      <Header />
      <div className="container">
        <main>
          <img src={paralelograms} id="paralelograms" alt="" />
          <div className="texts">
            <section>
              <h2>
                <span id="underline">Nós</span>
                {' '}
                somos o
                {' '}
                <strong>Trânsito</strong>
              </h2>
            </section>
            <section>
              <h2 id="small-text">Nossa Missão é</h2>
              <h2>
                {' '}
                Educar para
                <strong>SALVAR VIDAS</strong>
              </h2>
            </section>
          </div>
          <div className="pictures">
            <section className="pictures-container">
              <img src={aboutUsPicture} alt="" />
              <p>Sobre nós</p>
            </section>
            <section className="pictures-container">
              <p>Jogos</p>
              <a href="pages/jogos.html"><img src={gamePicture} alt="Jogos" /></a>
            </section>
            <section className="pictures-container">
              <a href="pages/noticias.html"><img src={newsPicture} alt="Notícias" /></a>
              <p>Notícias</p>
            </section>
          </div>
        </main>
      </div>
      <Footer />
    </>
  );
}

export default Home;
