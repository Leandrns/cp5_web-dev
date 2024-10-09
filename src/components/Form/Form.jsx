import React, { useState } from 'react';
import styled from 'styled-components'
import FormImage from '../../images/capa-form.png';

const FormularioContainer = styled.div`
  background-color: #fd8f0e;
  padding: 20px;
  border: 1px solid #fd8f0e;
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
`

const TelaContato = styled.div`
  display: flex;
  border: solid 4px #fff4e1;
  border-radius: 15px;
  justify-content: space-around;

  @media screen and (max-width: 767px) {
    flex-direction: column;
    margin: 30px 30px;
  }
`

const Formulario = styled.form`
  padding: 40px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  width: 500px;
  height: 450px;
  background-color: #fff4e1;

  @media (max-width: 768px) {
    width: 100%;
    height: auto;
  }

  @media (max-width: 480px) {
    padding: 10px;
  }
`

const TituloFormulario = styled.div`
  display: flex;
  align-items: center;
  font-size: 30px;
  gap: 20px;
  padding-left: 20px;
`

const Capa = styled.div`
  background-color: #fff4e1;
  display: flex;
  flex-direction: column;
  justify-content: center;

  @media (max-width: 769px) {
    #capa {
      display: none;
    }
  }
`

const CapaImage = styled.img`
  width: 100%;
  height: 325px;
  border-radius: 0 12px 12px 0;
`

const Botao = styled.button`
  background-color: #fff4e1;
  border: solid 2px #e16e02;
  padding: 10px;
  border-radius: 10px;
  margin-top: 20px;
  width: 100%;
  transition: all 0.3s;

  &:hover {
    background-color: #ecd8b6;
    color: black;
    transform: scale(1.03);
  }
`

const Input = styled.input`
  height: 3rem;

  &:focus {
    border-color: #fff4e1;
    box-shadow: 0 0 2px 3px #fff4e1;
  }

  &:hover {
    border-color: #fff4e1;
  }
`

const Textarea = styled.textarea`
  height: auto;
`

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
    <FormularioContainer>
      <TelaContato>
        <Capa>
          <TituloFormulario>
            <i className="fa-solid fa-phone"></i>
            <h2 className='titulo'>Entre em contato conosco</h2>
          </TituloFormulario>
          <CapaImage src={FormImage} alt="" id='capa'/>
        </Capa>
        
        <Formulario onSubmit={handleSubmit}>
          <label htmlFor="nome">Nome:</label>
          <Input
            type="text"
            id="nome"
            name="nome"
            value={formData.nome}
            onChange={handleChange}
            required
          />

          <label htmlFor="email">E-mail:</label>
          <Input
            type="email"
            id="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            required
          />

          <label htmlFor="assunto">Assunto:</label>
          <Input
            type="text"
            id="assunto"
            name="assunto"
            value={formData.assunto}
            onChange={handleChange}
            required
          />

          <label htmlFor="mensagem">Mensagem:</label>
          <Textarea
            id="mensagem"
            name="mensagem"
            value={formData.mensagem}
            onChange={handleChange}
            rows="4"
            required
          ></Textarea>

          <Botao type="submit">Enviar</Botao>
        </Formulario>
      </TelaContato>
    </FormularioContainer>
  );
};

export default FormularioContato;
