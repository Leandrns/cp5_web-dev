import styled from 'styled-components';

const MainFooter = styled.div`
  background-color: #3f3f3f;
  display: flex;
  flex-direction: column;
  text-align: center;
  color: white;
`;

const FooterColumns = styled.div`
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  justify-content: space-between;
  align-items: center;

  > * {
    flex-basis: 25%;
  }

  @media (max-width: 768px) {
    flex-direction: column;

    > * {
      flex-basis: 100%;
      margin-bottom: 20px;
    }
  }
  
  @media (max-width: 480px) {
    > * {
      margin-bottom: 10px;
    }
  }
`;

const FooterLinks = styled.div`
  padding: 10px;
  margin: 10px;

  h4 {
    margin-bottom: 10px;
  }

  p, a {
    margin: 0; /* Remove margens para p */
    color: white;
    text-decoration: none;

    &:hover {
      color: #e16d02;
    }
  }
`;

const SocialMedia = styled.div`
  flex: 1;
  margin: 10px;

  h4 {
    margin-bottom: 10px;
  }

  i {
    padding: 10px;
    transition: 0.5s;

    &:hover {
      color: #e16d02;
      transform: scale(1.5);
    }
  }
`;

const TermoUso = styled.div`
  flex: 1;
  margin: 10px;

  h4 {
    margin-bottom: 10px;
  }

  h6 {
    margin: 0;

    a {
      color: white;
      text-decoration: none;

      &:hover {
        color: #e16d02;
      }
    }
  }
`;

const FooterText = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: #e16d02;
  height: 35px;
  margin-top: 20px; /* Espaçamento acima do texto do footer */

  h6 {
    margin: 0;
  }
`;

export function Footer() {
  return (
    <MainFooter>
      <FooterColumns>
        <FooterLinks>
          <h4>Contato</h4>
          <p>Telefone</p>
          <a href="#">+55 1194529021</a>
          <p>Email</p>
          <a href="#">GourmetON@food.com.br</a>
        </FooterLinks>
        <SocialMedia>
          <h4>Redes Sociais</h4>
          <i className="fa-brands fa-instagram" />
          <i className="fa-brands fa-facebook" />
        </SocialMedia>
        <TermoUso>
          <h4>Políticas</h4>
          <h6><a href="#">Termos de uso</a></h6>
          <h6><a href="#">Lei do Consumidor</a></h6>
        </TermoUso>
      </FooterColumns>
      <FooterText>
        <h6>© Copyright CLIRV | GOURMETON</h6>
      </FooterText>
    </MainFooter>
  );
}
