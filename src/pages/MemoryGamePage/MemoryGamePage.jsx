/* eslint-disable max-len */
import React from 'react';

import { Link } from 'react-router-dom';
import Header from '../../components/Header/Header';
import Footer from '../../components/Footer/Footer';
import GameImg from '../../assets/games-big-picture.png';
import clickIcon from '../../assets/click-icon.png';

import './MemoryGamePage.css';

function MemoryGamePage() {
  return (
    <>
      <Header />
      <div className="container">
        <main className="detailed-game-page">
          <img src={GameImg} alt="" />
          <h1>Jogo da memória</h1>
          <Link to="/jogo-da-memoria">
            <div className="play-button">
              <i className="bx bx-play" />
              <h3>PLAY</h3>
            </div>
          </Link>
          <h2>Sobre o jogo</h2>
          <p>Este é um jogo da memória onde você terá a oportunidade de aprender sobre as placas de trânsito de forma divertida e interativa. Desafie sua memória enquanto se familiariza com os diferentes sinais que ajudam a manter nossas estradas seguras.</p>
          <h2>Controles</h2>
          <section className="control-section">
            <img src={clickIcon} alt="" />
            <p>Click</p>
          </section>
        </main>
        <Footer />
      </div>
    </>
  );
}

export default MemoryGamePage;
