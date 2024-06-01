import React from 'react';

import Header from '../../components/Header/Header';
import Carousel from '../../components/Carousel/Carousel';
import NewsContainer from '../../components/NewsContainer/NewsContainer';
import Footer from '../../components/Footer/Footer';

import img from '../../assets/games.png';

function News() {
  return (
    <>
      <Header />
      <div className="container">
        <main style={{ paddingTop: '70px' }}>
          <Carousel />
          <NewsContainer text="Lançamos o novo jogo lorem ipsum de consientização do trânsito" img={img} date="09/11/2024 12:45" />
          <NewsContainer text="Lançamos o novo jogo lorem ipsum de consientização do trânsito" img={img} date="09/11/2024 12:45" />
          <NewsContainer text="Lançamos o novo jogo lorem ipsum de consientização do trânsito" img={img} date="09/11/2024 12:45" />
        </main>
        <Footer />
      </div>
    </>
  );
}

export default News;
