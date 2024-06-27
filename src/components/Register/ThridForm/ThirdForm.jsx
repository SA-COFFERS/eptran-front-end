import React from 'react';

import './ThirdForm.css';

function ThirdForm() {
  return (
    <form className="third-form">
      <h2 className="main-text">Finalize o Cadastro</h2>
      <div className="cep">
        <p className="cep-text">CEP:</p>
        <input type="number" min="8" max="8" />
      </div>

    </form>
  );
}

export default ThirdForm;
