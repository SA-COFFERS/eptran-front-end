/* eslint-disable no-nested-ternary */
/* eslint-disable react/button-has-type */
/* eslint-disable jsx-a11y/label-has-associated-control */
import React, { useState } from 'react';
import Header from '../../components/Header/Header';

import './Register.css';
import FirstForm from '../../components/Register/FirstForm/FirstForm';
import SecondForm from '../../components/Register/SecondForm/SecondForm';
import ThirdForm from '../../components/Register/ThridForm/ThirdForm';

function Register() {
  const [form, setForm] = useState(0);

  return (
    <>
      <Header />
      <div className="container register-container">
        <main>
          {form === 0 ? (
            <FirstForm setForm={setForm} />

          ) : form === 1 ? (
            <SecondForm setForm={setForm} />
          ) : (
            <ThirdForm />
          )}
        </main>
      </div>
    </>
  );
}

export default Register;
