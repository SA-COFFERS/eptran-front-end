import React from 'react';

import { Link } from 'react-router-dom';
import Header from '../../components/Header/Header';
import Carousel from '../../components/Carousel/Carousel';
import NewsContainer from '../../components/NewsContainer/NewsContainer';
import Footer from '../../components/Footer/Footer';

import img from '../../assets/games.png';
import './News.css';

function News() {
  return (
    <>
      <Header />
      <div className="container">
        <main style={{ paddingTop: '70px' }}>
          <Carousel />
          <Link to="/noticias/1" className="news-link">
            <NewsContainer text="Lançamos o novo jogo lorem ipsum de consientização do trânsito" img={img} date="09/11/2024 12:45" />
          </Link>
          <Link to="/noticias/1" className="news-link">
            <NewsContainer text="Lançamos o novo jogo lorem ipsum de consientização do trânsito" img={img} date="09/11/2024 12:45" />
          </Link>
          <Link to="/noticias/1" className="news-link">
            <NewsContainer text="Lançamos o novo jogo lorem ipsum de consientização do trânsito" img={img} date="09/11/2024 12:45" />
          </Link>
        </main>
        <Footer />
      </div>
    </>
  );
}

export default News;
