/* eslint-disable react/prop-types */
/* eslint-disable react/destructuring-assignment */

import React from 'react';
import './AboutUsText.css';

function AboutUsText(props) {
  return (
    <section className="about-us-text-secion">
      <h1>{props.title}</h1>
      <p>{props.text}</p>
    </section>
  );
}

export default AboutUsText;
