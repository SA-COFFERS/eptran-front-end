/* eslint-disable react/prop-types */
/* eslint-disable react/button-has-type */
/* eslint-disable jsx-a11y/label-has-associated-control */
import React from 'react';

import './SecondForm.css';

function SecondForm({ setForm }) {
  return (
    <form className="second-form">
      <p className="main-text">Quase lá</p>
      <div className="name">
        <p className="form-text">Nome Completo:</p>
        <input className="dark-input" type="text" id="name" placeholder="  Fulano de Tal" />
      </div>
      <div className="birth">
        <p className="form-text">Data de nascimento:</p>
        <input className="dark-input" type="date" id="birthday" />
      </div>
      <div className="sex-options-div">
        <p className="form-text">Sexo:</p>
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
            <label htmlFor="other">Outro</label>
          </div>
        </section>
      </div>
      <div className="school">
        <p className="form-text">Escolaridade</p>
        <select id="school" className="dark-input">
          <option value="lvl2">Fundamental 1</option>
          <option value="lvl3">Fundamental 2</option>
          <option value="lvl4">Ensino Médio</option>
        </select>
      </div>

      <div className="buttons">
        <button className="back-button">Voltar</button>
        <button className="color-button finish-button" onClick={() => setForm(2)}>Finalizar</button>
      </div>

      <a to="/login" className="login-link">
        <p>
          Já possui uma conta?/Login
        </p>
      </a>
    </form>
  );
}

export default SecondForm;
