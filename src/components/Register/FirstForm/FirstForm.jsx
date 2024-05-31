/* eslint-disable react/prop-types */
/* eslint-disable jsx-a11y/label-has-associated-control */
import React from 'react';
import { Link } from 'react-router-dom';

import './FirstForm.css';

function FirstForm({ setSecondForm }) {
  return (
    <label className="first-form">
      <form>
        <p className="main-text">Cadastre-se</p>
        <input type="email" id="email" placeholder=" E-mail:" className="dark-input" />
        <input
          type="password"
          id="password"
          placeholder=" Senha:"
          className="dark-input"
        />
        <input type="password" id="confirmpassword" className="dark-input" placeholder=" Confirme a senha: " />
        <button className="color-button" type="button" onClick={() => setSecondForm(true)}>Seguinte</button>
        <Link to="/login">
          <p>
            Já possui uma conta?/Login
          </p>
        </Link>
      </form>
    </label>
  );
}

export default FirstForm;
