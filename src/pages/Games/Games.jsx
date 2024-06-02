import React from 'react';
import './Games.css';

import { Link } from 'react-router-dom';
import Header from '../../components/Header/Header';
import Footer from '../../components/Footer/Footer';
import gameImg from '../../assets/games.png';

function Games() {
  return (
    <>
      <Header />
      <div className="container games-page">
        <main>
          <h1>Conheça nossos jogos educativos!</h1>
          <div className="content">
            <div className="jogos-infantis">
              <h3>Infantis </h3>
              <div className="games-container">
                <Link to="/jogos/jogo-da-memoria">
                  <div className="game-container">
                    <img src={gameImg} alt="" />
                    <h2>Jogo da memória</h2>
                  </div>
                </Link>
                <div className="game-container">
                  <img src={gameImg} alt="" />
                  <h2>Colorir</h2>
                </div>
              </div>
            </div>
            <div className="10-anos">
              <h3>Para maiores de 10 anos</h3>
              <div className="game-container">
                <img src={gameImg} alt="" />
                <h2>Quiz</h2>
              </div>
            </div>
            <div className="14-anos">
              <h3>Para maiores de 14 anos </h3>
              <div className="game-container">
                <img src={gameImg} alt="" />
                <h2>GAT</h2>
              </div>
            </div>
          </div>
        </main>
        <Footer />
      </div>
    </>
  );
}

export default Games;
