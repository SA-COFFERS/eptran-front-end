import React from 'react';

import logoPrefeitura from '../../assets/logo-prefeitura-vertical-branco.png';
import logoEptran from '../../assets/logo-eptran.png';

import './Footer.css';

function Footer() {
  return (
    <footer>
      <div className="logos">
        <img src={logoPrefeitura} alt="logo" className="logo-jlle" />
        <img src={logoEptran} alt="logo" />
      </div>
      <div className="phone-number">
        <p className="bx bx-phone" />
        <p>(47) 3431-1541</p>
      </div>
      <div className="email">
        <p className="bx bx-envelope" />
        <p>eptran@joinville.sc.gov.br</p>
      </div>
      <p className="address">R. Caçador, 112 - Atiradores, Joinville - SC, 89203-610</p>
    </footer>
  );
}

export default Footer;
