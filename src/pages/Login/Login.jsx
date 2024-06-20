/* eslint-disable jsx-a11y/label-has-associated-control */
/* eslint-disable react/button-has-type */
import React from 'react';
import { Link } from 'react-router-dom';
import Header from '../../components/Header/Header';

import './Login.css';

function Login() {
  return (
    <>
      <Header />
      <div className="container login-container">
        <main>
          <form>
            <p className="main-text">Login</p>
            <div className="email">
              <label htmlFor="email">Email:</label>
              <input type="email" id="email" className="email-input dark-input" placeholder="  taldefulano@gmail.com" />
            </div>
            <div className="password">
              <label htmlFor="password">Senha:</label>
              <input
                type="password"
                id="password"
                placeholder="  ******** "
                className="dark-input"
              />
            </div>

            <button>
              Seguinte
            </button>
            <Link className="forget-password" to>
              Esqueci minha senha
              <i className="bx bxs-lock-alt" />
            </Link>
            <Link to="/cadastro">
              <p className="login-text">
                Não possui uma conta?/cadastro
              </p>
            </Link>
          </form>
        </main>
      </div>
    </>
  );
}

export default Login;
