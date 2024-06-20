/* eslint-disable react/prop-types */
/* eslint-disable jsx-a11y/label-has-associated-control */
import React from 'react';
import { Link } from 'react-router-dom';

import './FirstForm.css';

function FirstForm({ setSecondForm }) {
  return (
    <div className="first-form">
      <form>
        <p className="main-text">Cadastre-se</p>
        <div className="email">
          <label htmlFor="email">Email:</label>
          <input type="email" id="email" placeholder=" taldefulano@gmail.com" className="dark-input" />
        </div>
        <div className="password">
          <label htmlFor="password">Senha:</label>
          <input
            type="password"
            id="password"
            placeholder=" ***********"
            className="dark-input"
          />
        </div>
        <div className="password-confirm">
          <label htmlFor="password-confirm">Confirme a senha</label>
          <input type="password" id="confirmpassword" className="dark-input" placeholder=" *********** " />
        </div>
        <button className="color-button" type="button" onClick={() => setSecondForm(true)}>Seguinte</button>
        <Link to="/login">
          <p>
            Já possui uma conta?/Login
          </p>
        </Link>
      </form>
    </div>
  );
}

export default FirstForm;
