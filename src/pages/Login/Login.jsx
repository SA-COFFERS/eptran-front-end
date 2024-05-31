/* eslint-disable react/button-has-type */
import React from 'react';
import { Link } from 'react-router-dom';
import Header from '../../components/Header/Header';
import Footer from '../../components/Footer/Footer';

import './Login.css';

function Login() {
  return (
    <>
      <Header />
      <div className="container login-container">
        <main>
          <form>
            <p className="main-text">Login</p>
            <input type="email" id="email" className="email-input dark-input" placeholder="  E-mail:" />
            <input
              type="password"
              id="password"
              placeholder="  Senha:"
              className="dark-input"
            />
            <Link className="forget-password" to>Esqueci minha senha</Link>
            <button>
              Seguinte
            </button>
            <Link to="/cadastro">
              <p className="login-text">
                Não possui uma conta?/cadastro
              </p>
            </Link>
          </form>
        </main>
        <Footer />
      </div>
    </>
  );
}

export default Login;
