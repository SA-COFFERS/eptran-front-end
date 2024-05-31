/* eslint-disable react/button-has-type */
/* eslint-disable jsx-a11y/label-has-associated-control */
import React from 'react';
import Header from '../../components/Header/Header';
import Footer from '../../components/Footer/Footer';

import './Register.css';
import FirstForm from '../../components/Register/FirstForm/FirstForm';
import SecondForm from '../../components/Register/SecondForm/SecondForm';

function Register() {
  // const [secondForm, setSecondForm] = useState(false);
  const secondForm = false;

  return (
    <>
      <Header />
      <div className="container register-container">
        <main>
          {!secondForm ? (
            <FirstForm />

          ) : (
            <SecondForm />

          )}
        </main>
        <Footer />
      </div>
    </>
  );
}

export default Register;
