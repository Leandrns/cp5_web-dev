import CardPratos from "../CardPratos/CardPratos";
import styled from 'styled-components';

const FuncionalidadesContainer = styled.div`
  background-color: #FD8F0E;
  font-family: "Fredoka";
  padding-top: 20px;
  padding-bottom: 20px;

`;

function Funcionalidades() {
  return (
    <FuncionalidadesContainer>
      <CardPratos />
    </FuncionalidadesContainer>
  );
}

  export default Funcionalidades;
  