import "./Footer.css";
import logo from "../../assets/logo.png";

function Footer() {
  return (
    <footer className="footer-bg text-white mt-auto py-5">
      {/* ── Redes Sociais ── */}
      <section className="container text-center mb-4">
        <h3 className="footer-social-title">Fique por dentro das nossas redes!</h3>
        <div className="footer-social-icons">
          <a href="https://x.com/" aria-label="Twitter / X">
            <i className="bi bi-twitter-x"></i>
          </a>
          <a href="https://www.instagram.com/" aria-label="Instagram">
            <i className="bi bi-instagram"></i>
          </a>
          <a href="https://pt-br.facebook.com/" aria-label="Facebook">
            <i className="bi bi-facebook"></i>
          </a>
        </div>
        <hr className="footer-divider" />
      </section>

      {/* ── Colunas ── */}
      <section className="container">
        <div className="row gy-4 text-center text-md-start">
          {/* Logo */}
          <div className="col-md-3 d-flex flex-column align-items-center align-items-md-start">
            <img
              src={logo}
              alt="Logotipo AgroViva Web"
              className="footer-logo"
            />
          </div>
          {/* Navegação */}
          <nav className="col-md-3" aria-label="Navegação do rodapé">
            <h3 className="footer-col-title">Navegação</h3>
            <ul className="footer-list">
              <li><a href="/">Home</a></li>
              <li><a href="/impacto">Impacto Social</a></li>
              <li><a href="/beneficios">Benefícios</a></li>
              <li><a href="/chatbot">Chatbot</a></li>
              <li><a href="/fale">Fale conosco</a></li>
            </ul>
          </nav>
          {/* Serviços */}
          <section className="col-md-3">
            <h3 className="footer-col-title">Serviços</h3>
            <ul className="footer-list">
              <li className="footer-list-category">Agricultores</li>
              <li>Alertas Climáticos (INMET)</li>
              <li>Venda e Oferta Local</li>
              <li className="footer-list-category">Comunidade</li>
              <li>Mapa de Distribuição de Alimentos</li>
              <li>Acesso a Alimentos Frescos</li>
            </ul>
          </section>
          {/* Contato */}
          <section className="col-md-3">
            <h3 className="footer-col-title">Contato</h3>
            <ul className="footer-list">
              <li>FAQ</li>
              <li>AgroViva@gmail.com</li>
              <li>+55 11 94733-4726</li>
            </ul>
          </section>
        </div>

        {/* Copyright */}
        <div className="footer-bottom">
          <span>© 2025 <strong>AgroVivaWeb</strong>. Todos os direitos reservados.</span>
          <span className="footer-sep">|</span>
          <a href="#">Política de Privacidade</a>
          <span className="footer-sep">|</span>
          <a href="#">Termos de Uso</a>
        </div>
      </section>
    </footer>
  );
}

export default Footer;