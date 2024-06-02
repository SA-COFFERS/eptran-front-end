import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';

import logoPrefeitura from '../../assets/logo-prefeitura-horizontal.png';

import './Header.css';

function Header() {
  useEffect(() => {
    const menu = document.querySelector('.open-menu');
    const regularHeader = document.querySelector('#regular-header');
    const openHeader = document.querySelector('#open-header');
    const container = document.querySelector('.container');
    const darkSide = document.querySelector('.dark-side');

    const input = document.querySelectorAll('.dark-input');

    const openMenu = () => {
      container.style.zIndex = '0';
      darkSide.classList.remove('hide');
      menu.style.left = '0';
      regularHeader.classList.add('hide');
      openHeader.classList.remove('hide');
      input.forEach((e) => {
        e.classList.add('dark-mode');
      });
      container.classList.add('dark-mode');
    };

    const closeMenu = () => {
      container.style.zIndex = '1';
      darkSide.classList.add('hide');
      openHeader.classList.add('hide');
      regularHeader.classList.remove('hide');
      input.forEach((e) => {
        e.classList.remove('dark-mode');
      });
      container.classList.remove('dark-mode');
      menu.style.left = '-70%';
    };

    const changeResolution = () => {
      container.style.zIndex = '1';
      openHeader.classList.add('hide');
      regularHeader.classList.remove('hide');
      input.forEach((e) => {
        e.classList.remove('dark-mode');
      });
      container.classList.remove('dark-mode');
      menu.style.left = '-70%';
    };

    window.addEventListener('resize', changeResolution);
    document.addEventListener('scroll', closeMenu);
    document.querySelector('.open').addEventListener('click', openMenu);
    document.querySelectorAll('.close').forEach((e) => {
      e.addEventListener('click', closeMenu);
    });
  }, []);

  return (
    <>
      <header id="regular-header">
        <i className="bx bx-menu menu-button open" />
        <img src={logoPrefeitura} alt="" />
      </header>

      <div className="open-header">
        <header id="open-header" className="hide">
          <i className="bx bx-left-arrow-alt menu-button close" />
          <img src={logoPrefeitura} alt="logo" />
        </header>
        <div className="open-menu">
          <div className="top-open-menu">
            <Link to="/">
              <section className="open-menu-options">
                <p className="bx bx-home-alt" />
                <p>Início</p>
              </section>
            </Link>
            <Link to="/sobre-nos">
              <section className="open-menu-options">
                <p className="bx bx-info-circle" />
                <p>Sobre nós</p>
              </section>
            </Link>
            <Link to="/jogos">
              <section className="open-menu-options">
                <p className="bx bx-joystick" />
                <p>Jogos</p>
              </section>
            </Link>
            <Link to="/noticias">
              <section className="open-menu-options">
                <p className="bx bx-news" />
                <p>Notícias</p>
              </section>
            </Link>
          </div>

          <Link to="/conta">
            <section className="open-menu-options user">
              <p className="bx bx-user-circle" />
              <p>Perfil</p>
            </section>
          </Link>

        </div>
        <div className="dark-side hide close" />
      </div>
    </>
  );
}

export default Header;
