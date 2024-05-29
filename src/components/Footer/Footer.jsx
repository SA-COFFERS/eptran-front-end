import React from 'react'

import logoPrefeitura from '../../assets/logo-prefeitura-vertical-branco.png'
import logoEptran from '../../assets/logo-eptran.png'

import './Footer.css';

const Footer = () => {
  return (
    <>
        <div className="container footer">
            <footer>
             <div class="logos">
                    <img src={logoPrefeitura} alt="" class="logo-jlle" />
                    <img src={logoEptran} alt="" />
                </div>
                <div class="phone-number">
                    <i class='bx bx-phone'></i>
                    <p>(47) 3431-1541</p>
                </div>
                <div class="email">
                    <i class='bx bx-envelope'></i>
                    <p>eptran@joinville.sc.gov.br</p>
                </div>
                <p class="address">R. Caçador, 112 - Atiradores, Joinville - SC, 89203-610</p>
                </footer>
        </div>
    </>
  )
}

export default Footer;