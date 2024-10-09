import React, { useState } from 'react';
import './Form.css'
import Form from '../../images/capa-form.png'


const FormularioContato = () => {
  const [formData, setFormData] = useState({
    nome: '',
    email: '',
    assunto: '',
    mensagem: ''
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(formData); 
    setFormData({
      nome: '',
      email: '',
      assunto: '',
      mensagem: ''
    });
  };

  return (
    <div className="formulario-container"> 
      <div className="tela-contato">
        <div className="capa">
        <div className='titulo_formulario'>
          <i class="fa-solid fa-phone"></i>
          <h2 className='titulo'>Entre em contato conosco</h2>
        </div>
          <img src={Form} alt="" id="capa" />
        </div>
        
        <form className="formulario" onSubmit={handleSubmit}>
          <label htmlFor="nome">Nome:</label>
          <input
            type="text"
            id="nome"
            name="nome"
            className="form-control"
            value={formData.nome}
            onChange={handleChange}
            required
          />

          <label htmlFor="email">E-mail:</label>
          <input
            type="email"
            id="email"
            name="email"
            className="form-control"
            value={formData.email}
            onChange={handleChange}
            required
          />

          <label htmlFor="assunto">Assunto:</label>
          <input
            type="text"
            id="assunto"
            name="assunto"
            className="form-control"
            value={formData.assunto}
            onChange={handleChange}
            required
          />

          <label htmlFor="mensagem">Mensagem:</label>
          <textarea
            id="mensagem"
            name="mensagem"
            className="form-control"
            value={formData.mensagem}
            onChange={handleChange}
            rows="4"
            required
          ></textarea>

          <button type="submit">Enviar</button>
        </form>
      </div>
    </div>
  );
};

export default FormularioContato;