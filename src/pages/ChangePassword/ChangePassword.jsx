/* eslint-disable react/button-has-type */
import React from 'react';
import './ChangePassword.css';

import Header from '../../components/Header/Header';

function ChangePassword() {
  return (
    <>
      <Header />
      <div className="container change-password">
        <main>
          <h1 className="change">Alterar Senha</h1>
          <div className="passwords">
            <div className="input-password">
              <h2>Senha Atual</h2>
              <input type="password" />
            </div>
            <div className="input-password">
              <h2>Senha Nova</h2>
              <input type="password" />
            </div>
          </div>
          <div className="buttons">
            <button className="button1"><p>Salvar Alteração</p></button>
            <button className="button2">Descartar Alteração</button>
          </div>
        </main>
      </div>
    </>
  );
}

export default ChangePassword;
