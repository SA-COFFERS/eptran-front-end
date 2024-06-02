/* eslint-disable react/no-array-index-key */
/* eslint-disable jsx-a11y/no-static-element-interactions */
/* eslint-disable jsx-a11y/click-events-have-key-events */
/* eslint-disable max-len */
/* eslint-disable no-unused-vars */
/* eslint-disable camelcase */
/* eslint-disable no-plusplus */
/* eslint-disable react/no-this-in-sfc */
/* eslint-disable func-names */
/* eslint-disable react/button-has-type */
import React, { useState, useEffect } from 'react';
import Header from '../../components/Header/Header';

import './MemoryGame.css';

const emojis = ['⚠️', '⚠️', '🚸', '🚸', '🚧', '🚧', '🛑', '🛑', '🚦', '🚦', '🚳', '🚳', '🚷', '🚷', '⛔', '⛔'];

function MemoryGame() {
  const [shuffledEmojis, setShuffledEmojis] = useState([]);
  const [openedCards, setOpenedCards] = useState([]);
  const [matchedCards, setMatchedCards] = useState([]);
  const [win, setWin] = useState(false);

  useEffect(() => {
    setShuffledEmojis(emojis.sort(() => Math.random() - 0.5));
  }, []);

  useEffect(() => {
    if (matchedCards.length === emojis.length) {
      setWin(true);
    }
  }, [matchedCards]);

  const handleCardClick = (index) => {
    if (openedCards.length === 2 || openedCards.includes(index)) return;
    setOpenedCards([...openedCards, index]);

    if (openedCards.length === 1) {
      const firstCardIndex = openedCards[0];
      const firstCardEmoji = shuffledEmojis[firstCardIndex];
      const secondCardEmoji = shuffledEmojis[index];

      if (firstCardEmoji === secondCardEmoji) {
        setMatchedCards([...matchedCards, firstCardIndex, index]);
      }

      setTimeout(() => setOpenedCards([]), 1000);
    }
  };

  const handleRestart = () => {
    setShuffledEmojis(emojis.sort(() => Math.random() - 0.5));
    setOpenedCards([]);
    setMatchedCards([]);
    setWin(false);
  };

  return (
    <>
      <Header />
      <div className="memory-game container">
        {!win ? (
          <div className="memory-game-container">
            <h2>Jogo da Memória</h2>
            <div className="game">
              {shuffledEmojis.map((emoji, index) => (
                <div
                  key={index}
                  className={`item ${openedCards.includes(index) || matchedCards.includes(index) ? 'boxOpen' : ''}`}
                  onClick={() => handleCardClick(index)}
                >
                  {openedCards.includes(index) || matchedCards.includes(index) ? emoji : ''}
                </div>
              ))}
            </div>
            <button className="reset" onClick={handleRestart}>Recomeçar</button>
          </div>
        ) : (
          <div className="memory-game-container win active">
            <h2>Você ganhou!</h2>
            <button className="reset" onClick={handleRestart}>Recomeçar</button>
          </div>
        )}
      </div>
    </>
  );
}

export default MemoryGame;
