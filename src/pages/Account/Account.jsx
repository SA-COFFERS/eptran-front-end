import React from 'react';
import { Link } from 'react-router-dom';
import Header from '../../components/Header/Header';

import cameraIcon from '../../assets/camera-icon.png';
import userPicture from '../../assets/default-user.png';

import './Account.css';

function Account() {
  return (
    <>
      <Header />
      <div className="container">
        <main className="account">
          <section className="profile">
            <div className="profile-picture">
              <img src={userPicture} alt="" className="profile-img" />
              <img src={cameraIcon} alt="" className="camera" />
            </div>
            <div className="name-n-email">
              <h2>Fulano de Tal</h2>
              <p>taldefulano@gmail.com</p>
            </div>
          </section>

          <Link to="/conta/detalhes">
            <section className="options">
              <i className="bx bx-notepad" />
              <div className="section-texts">
                <h3>Dados Pessoais</h3>
                <p>Edite as informações de seu registro aqui</p>
              </div>
              <i className="bx bx-chevron-right" />
            </section>
          </Link>

          <section className="options">
            <i className="bx bx-joystick" />
            <div className="section-texts">
              <h3>Progesso</h3>
              <p>Acompanhe aqui o seu progresso nos jogos</p>
            </div>
            <i className="bx bx-chevron-right" />
          </section>

          <section className="options">
            <i className="bx bx-news" />
            <div className="section-texts">
              <h3>Notícias Salvas</h3>
              <p>Veja as notícias que você salvou aqui</p>
            </div>
            <i className="bx bx-chevron-right" />
          </section>

          <section className="options">
            <i className="bx bx-log-out" />
            <div className="section-texts">
              <h3>Logout</h3>
              <p>Saia da sua conta aqui</p>
            </div>
            <i className="bx bx-chevron-right" />
          </section>
        </main>
      </div>
    </>
  );
}

export default Account;
