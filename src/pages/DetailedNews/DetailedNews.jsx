/* eslint-disable max-len */
import React from 'react';

import Header from '../../components/Header/Header';
import Footer from '../../components/Footer/Footer';
import newsImg from '../../assets/games-big-picture.png';

import './DetailedNews.css';

function DetailedNews() {
  return (
    <>
      <Header />
      <div className="container">
        <main className="detailed-news">
          <h1>Lançamos o novo jogo lorem ipsum de consientização do trânsito</h1>
          <p className="subtitle">O jogo é muito bom e você pode acessar ele na página de jogos</p>
          <span className="news-date">
            <i className="bx bx-time-five" />
            <p>09/11/2024 12:45</p>
          </span>
          <img src={newsImg} alt="" />
          <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Eveniet adipisci in, hic laudantium unde voluptatem quidem nulla itaque quod commodi beatae. Dolores doloremque sunt explicabo repellat minus autem numquam! Quia.</p>
          <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Eveniet adipisci in, hic laudantium unde voluptatem quidem nulla itaque quod commodi beatae. Dolores doloremque sunt explicabo repellat minus autem numquam! Quia. Lorem ipsum dolor sit amet consectetur adipisicing elit. Tenetur quas deserunt velit sapiente distinctio ad, fugit tempore. Aliquam nisi, natus accusantium assumenda incidunt similique vel, nihil temporibus quidem quibusdam in!</p>
        </main>
        <Footer />
      </div>
    </>
  );
}

export default DetailedNews;
