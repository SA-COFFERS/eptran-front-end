/* eslint-disable react/button-has-type */
/* eslint-disable jsx-a11y/label-has-associated-control */
import React from 'react';

import './SecondForm.css';

function SecondForm() {
  return (
    <form className="second-form">
      <p className="main-text">Complete o cadastro</p>
      <div className="name">
        <p className="form-text">Nome Completo:</p>
        <input className="dark-input" type="text" id="name" placeholder="  Nome completo" />
      </div>
      <div className="birth">
        <p className="form-text">Data de nascimento:</p>
        <input className="dark-input" type="date" id="birthday" />
      </div>
      <div className="sex-options-div">
        <p className="form-text">Informe seu sexo:</p>
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

      <select id="school" className="dark-input">
        <option value="lvl1">Escolaridade:</option>
        <option value="lvl2">Fundamental 1</option>
        <option value="lvl3">Fundamental 2</option>
        <option value="lvl4">Ensino Médio</option>
      </select>

      <button className="color-button"><a href="../index.html" className="finish">Finalizar</a></button>
    </form>
  );
}

export default SecondForm;
