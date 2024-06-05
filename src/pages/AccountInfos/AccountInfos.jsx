/* eslint-disable jsx-a11y/control-has-associated-label */
/* eslint-disable jsx-a11y/label-has-associated-control */
/* eslint-disable react/button-has-type */
import React from 'react';
import { Link } from 'react-router-dom';

import Header from '../../components/Header/Header';

import './AccountInfos.css';

function AccountInfos() {
  return (
    <>
      <Header />
      <div className="container account-infos-container">
        <main>
          <h1>Informações Pessoais</h1>
          <div className="email">
            <h2>Email</h2>
            <input type="email" />
          </div>
          <div className="name">
            <h2>Nome</h2>
            <input type="text" className="text-name" />
          </div>
          <div className="birth">
            <h2>Data Nascimento</h2>
            <input type="date" />
          </div>
          <div className="sex">
            <h2>Sexo</h2>
            <section className="sex-options-section">
              <div className="sex-option">
                <input className="dark-input" type="radio" id="male" name="gender" value="male" />
                <label htmlFor="male">Masculino</label>
              </div>
              <div className="sex-option">
                <input className="dark-input" type="radio" id="female" name="gender" value="female" />
                <label htmlFor="female">Feminino</label>
              </div>
              <div className="sex-option">
                <input className="dark-input" type="radio" id="other" name="gender" value="other" />
                <label htmlFor="other">Outros</label>
              </div>
            </section>
          </div>
          <div className="school">
            <h2>Escolaridade</h2>
            <select id="school" className="dark-input">
              <option value="lvl1" />
              <option value="lvl2">Fundamental 1</option>
              <option value="lvl3">Fundamental 2</option>
              <option value="lvl4">Ensino Médio</option>
            </select>
          </div>
          <div className="forget-password">
            <Link to className="link-password">
              <h3>Alterar senha </h3>
            </Link>
            <i className="bx bxs-lock-alt" />
          </div>
          <div className="buttons">
            <button onClick="" className="save-button">Salvar alterações</button>
            <button onClick="" className="descart-button">Descartar Alterações</button>
          </div>
          <div className="delete-account">
            <Link to>Excluir Conta</Link>
            <i className="bx bxs-trash" />
          </div>
        </main>
      </div>
    </>
  );
}

export default AccountInfos;
