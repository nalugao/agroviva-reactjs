import "./Footer.css";
import logo from "../assets/logo.png";

function Footer() {
    return (
    <footer className="footer-bg text-white mt-auto py-5">
    <section className="container text-center mb-4">
        <h3 className="fw-bold">Fique por dentro das nossas redes!</h3>
        <div className="d-flex justify-content-center gap-4 mt-3 fs-3">
        <a href="https://x.com/" className="text-white">
            <i className="bi bi-twitter-x"></i>
        </a>
        <a href="https://www.instagram.com/" className="text-white">
            <i className="bi bi-instagram"></i>
        </a>
        <a href="https://pt-br.facebook.com/" className="text-white">
            <i className="bi bi-facebook"></i>
        </a>
        </div>
        <hr className="my-4 mx-auto opacity-75" style={{ width: "60%" }} />
    </section>
    <section className="container">
        <div className="row gy-4 text-center text-md-start">
        <div className="col-md-3 d-flex flex-column align-items-center align-items-md-start">
            <img
            src={logo}
            alt="Logotipo AgroViva Web"
            className="footer-logo mb-2"
            />
        </div>
        <nav className="col-md-3" aria-label="Navegação do rodapé">
            <h3 className="h5 fw-bold">Navegação</h3>
            <ul className="list-unstyled">
                <li>
                <a href="/" className="text-white text-decoration-none">
                Home
                </a>
                </li>
                <li>
                <a href="/impactosocial" className="text-white text-decoration-none">
                Impacto Social
                </a>
                </li>
                <li>
                <a href="/comunidade" className="text-white text-decoration-none">
                Benefícios
                </a>
                </li>
                <li>
                <a href="/agricultor" className="text-white text-decoration-none">
                Chatbot
                </a>
            </li>
            <li>
                <a href="/faleconosco" className="text-white text-decoration-none">
                Fale conosco
                </a>
            </li>
        </ul>
        </nav>
        <section className="col-md-3">
            <h3 className="h5 fw-bold">Serviços</h3>
            <ul className="list-unstyled">
                <li>Agricultores:</li>
                <li>Alertas Climáticos (INMET)</li>
                <li>Venda e Oferta Local</li>
                <li>Comunidade:</li>
                <li>Mapa de Distribuição de Alimentos</li>
                <li>Acesso a Alimentos Frescos</li>
            </ul>
        </section>
        <section className="col-md-3">
            <h3 className="h5 fw-bold">Contato</h3>
            <ul className="list-unstyled">
                <li>FAQ</li>
                <li>AgroViva@gmail.com</li>
                <li>+55 11 94733-4726</li>
            </ul>
        </section>
        </div>
        <div className="border-top mt-4 pt-3 text-center small opacity-75">
            © 2025 <strong>AgroVivaWeb</strong>. Todos os direitos reservados. |
            <a href="#" className="text-white text-decoration-none">
            Política de Privacidade
            </a>
            |
            <a href="#" className="text-white text-decoration-none">
            Termos de Uso
            </a>
        </div>
    </section>
</footer>
    );
    }
export default Footer;