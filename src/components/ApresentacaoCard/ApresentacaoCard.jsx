import styled from 'styled-components';

const Icon = styled.div`
  color: #fff4e1;
  font-size: 50px;
  transition: all 0.2s ease;

  &:hover {
    color: #FD8F0E;
    transform: scale(1.15);
  }
`;

const Description = styled.p`
  margin: 0;
  font-size: 18px;
  padding: 0 20px;
  font-family: "Fredoka";
`;

const Cartao = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  width: 290px;
  height: 290px;
  border: solid #E16D02;
  background-color: #E16D02;
  border-radius: 100%;
  transition: all 0.5s ease;

  &:hover {
    transform: scale(1.15);
    box-shadow: 0 0 8px #000;
  }
`;


export function ApresentacaoCard(props) {
  return (
    <Cartao>
      <Icon>
        <i className={props.icon}></i>
      </Icon>
      <Description>{props.msg}</Description>
    </Cartao>
  );
}
