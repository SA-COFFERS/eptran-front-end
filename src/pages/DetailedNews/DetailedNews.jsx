import React from 'react';

import Header from '../../components/Header/Header';
import Footer from '../../components/Footer/Footer';
import newsImg from '../../assets/games.png';

import './DetailedNews.css';

function DetailedNews() {
  return (
    <>
      <Header />
      <div className="container">
        <main className="detailed-news">
          <h1>Lançamos o novo jogo lorem ipsum de consientização do trânsito</h1>
          <p>O jogo é muito bom e você pode acessar ele na página de jogos</p>
          <span className="news-date">
            <i className="bx bx-time-five" />
            <p>09/11/2024</p>
          </span>
          <img src={newsImg} alt="" />
        </main>
        <Footer />
      </div>
    </>
  );
}

export default DetailedNews;
