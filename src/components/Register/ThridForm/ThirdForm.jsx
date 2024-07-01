/* eslint-disable react/button-has-type */
/* eslint-disable react/jsx-props-no-spreading */
import React from 'react';
import { useForm } from 'react-hook-form';
import './ThirdForm.css';

function ThirdForm() {
  const {
    register, handleSubmit, setValue, setFocus,
  } = useForm();

  const onSubmit = (data) => {
    console.log(data);
  };

  const checkCEP = (e) => {
    const cep = e.target.value.replace(/\D/g, '');
    if (cep.length === 8) {
      fetch(`https://viacep.com.br/ws/${cep}/json/`)
        .then((res) => res.json())
        .then((data) => {
          setValue('address', data.logradouro);
          setValue('neighborhood', data.bairro);
          setValue('city', data.localidade);
          setValue('uf', data.uf);
          setFocus('addressNumber');
        });
    }
  };

  return (
    <form className="third-form" onSubmit={handleSubmit(onSubmit)}>
      <h2 className="main-text">Finalize o Cadastro</h2>
      <div className="cep">
        <p className="cep-text">CEP:</p>
        <input type="text" placeholder="00000-000" {...register('cep')} onBlur={checkCEP} />
      </div>
      <div className="uf-city">
        <div className="uf">
          <p>UF:</p>
          <input type="text" placeholder="UF" {...register('uf')} />
        </div>
        <div className="city">
          <p>Cidade:</p>
          <input type="text" placeholder="Cidade" {...register('city')} />
        </div>
      </div>
      <div className="street">
        <p>Rua:</p>
        <input type="text" placeholder="Rua" {...register('address')} />
      </div>
      <div className="district-number">
        <div className="district">
          <p>Bairro:</p>
          <input type="text" placeholder="Bairro" {...register('neighborhood')} />
        </div>
        <div className="number">
          <p>Nº</p>
          <input type="text" placeholder="0000" {...register('addressNumber')} />
        </div>
      </div>
      <div className="school">
        <p>Escola:</p>
        <input type="text" {...register('school')} />
      </div>
      <div className="buttons">
        <button className="back-button">Voltar</button>
        <button className="color-button finish-button">Finalizar</button>
      </div>

      <a to="/login" className="login-link">
        <p>
          Já possui uma conta?/Login
        </p>
      </a>
    </form>
  );
}

export default ThirdForm;
