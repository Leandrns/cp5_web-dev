import styled from 'styled-components'
import FormImage from '../../images/logo.png';

const FormularioContainer = styled.div`
  background-color: #fd8f0e;
  padding: 20px;
  border: 1px solid #fd8f0e;
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  font-family: "Fredoka";
`

const TelaContato = styled.div`
  display: flex;
  border: solid 4px #fff4e1;
  border-radius: 15px;
  justify-content: space-around;

  @media screen and (max-width: 836px) {
    flex-direction: column;
    margin: 30px 30px;
  }
`

const Formulario = styled.form`
  padding: 20px;
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
  gap: 10px;
  padding: 15px;
`

const Capa = styled.div`
  background-color: #fff4e1;
  display: flex;
  flex-direction: column;
  justify-content: space-evenly;
  align-items: center;

  @media (max-width: 836px) {
    #capa {
      display: none;
    }
  }
`

const CapaImage = styled.img`
  height: 250px;
  width: 250px;
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
  border-radius: 8px;
  border: solid 2px #979797;
  transition: all .3s ease;
  padding: 8px;

  &:focus {
    border-color: #ffc96c;
    box-shadow: 0 0 2px 3px #fff4e1;
  }

  &:hover {
    border-color: #e16e02;
  }
`

const Textarea = styled.textarea`
  height: auto;
  border-radius: 8px;
  border: solid 2px #979797;
  transition: all .3s ease;
  padding: 8px;

  &:hover {
    border-color: #e16e02;
  }
`

const FormularioContato = () => {

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
        
        <Formulario>
          <label htmlFor="nome">Nome:</label>
          <Input
            type="text"
            id="nome"
            name="nome"
          />

          <label htmlFor="email">E-mail:</label>
          <Input
            type="email"
            id="email"
            name="email"
          />

          <label htmlFor="assunto">Assunto:</label>
          <Input
            type="text"
            id="assunto"
            name="assunto"
          />

          <label htmlFor="mensagem">Mensagem:</label>
          <Textarea
            id="mensagem"
            name="mensagem"
            rows="4"
          ></Textarea>

          <Botao type="submit">Enviar</Botao>
        </Formulario>
      </TelaContato>
    </FormularioContainer>
  );
};

export default FormularioContato;
