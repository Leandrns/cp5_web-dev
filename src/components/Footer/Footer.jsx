import "./Footer.css";

export function Footer() {
  return (
    <div className="main-footer">
      <div className="footer-columns">
        <div className="footer-links">
          <h4>Contato</h4>
          <p>Telefone</p>
          <a href="#">+55 1194529021</a>
          <p>Email</p>
          <a href="#">GourmetON@food.com.br</a>
        </div>
        <div className="social-media">
          <h4>Redes Sociais</h4>
          <i className="fa-brands fa-instagram" />
          <i className="fa-brands fa-facebook" />
        </div>
        <div className="termo-uso">
            <h4>Politicas</h4>
          <h6><a href="#">Termos de uso</a></h6>
          <h6><a href="#">Lei do Consumidor</a></h6>
        </div>
      </div>
      <div className="footer">
        <h6>© Copyright CLIRV | GOURMETON</h6>
      </div>
    </div>
  );
}