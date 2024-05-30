/* eslint-disable react/prop-types */
/* eslint-disable react/destructuring-assignment */
import React from 'react';
import './NewsContainer.css';

function NewsContainer(props) {
  return (
    <section className="news-container">
      <div className="news-content">
        <img src={props.img} alt="imagem" />
        <p className="news-text">{props.text}</p>
        <span className="news-date">
          <i className="bx bx-time-five" />
          <p>{props.date}</p>
        </span>
      </div>
    </section>
  );
}

export default NewsContainer;
