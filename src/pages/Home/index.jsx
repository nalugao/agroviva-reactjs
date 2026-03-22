import "./styles.css";

import missao from "../../assets/missao.png";
import agricultor from "../../assets/agricultor1.png";
import comunidade from "../../assets/comunidade.png";
import video1 from "../../assets/PITCH-FEATURES.mp4";
import video2 from "../../assets/PITCH-VIDEO.mp4";
import bg from "../../assets/imagem-fundo.png";

function Home() {
return (
    <div className="home-page">
      {/* HERO */}
    <section
        id="inicio"
        className="hero text-center d-flex align-items-center justify-content-center position-relative"
        style={{ backgroundImage: `url(${bg})` }}
    >
        <div className="hero__overlay position-absolute top-0 start-0 w-100 h-100"></div>

        <div className="container position-relative text-white py-5 hero-content">
        <h1 className="fw-bold display-5 mb-3">
            Um elo entre quem produz e quem precisa
        </h1>

        <p className="subtitle mx-auto mb-4">
            Plataforma que une agricultores e comunidades, promovendo consumo
            consciente e produtos frescos direto da fonte.
        </p>

        <div className="d-flex justify-content-center">
            <a href="/fale" className="btn--primary px-4 py-2 fw-bold">
            Fale Conosco
            </a>
        </div>
        </div>
    </section>

      {/* CONTEÚDO APÓS A IMAGEM */}
    <main className="home-content">
        {/* CARDS */}
        <section id="cards" className="cards container py-5">
        <div className="row g-4 justify-content-center">
            {/* MISSÃO */}
            <div className="col-12 col-md-6 col-lg-4">
            <article className="card h-100 text-center p-4">
                <div className="card__icon mx-auto mb-3">
                <img src={missao} alt="Missão" className="img-fluid" />
                </div>
                <h3 className="fw-bold">Nossa Missão</h3>
                <p className="text-muted">
                Cultivamos propósito e impacto. Acreditamos que cada alimento
                pode transformar vidas e aproximar pessoas.
                </p>
                <a href="/impacto" className="card__link fw-bold">
                SAIBA MAIS
                </a>
            </article>
            </div>

            {/* AGRICULTOR / BENEFÍCIOS */}
            <div className="col-12 col-md-6 col-lg-4">
            <article className="card h-100 text-center p-4">
                <div className="card__icon mx-auto mb-3">
                <img
                    src={agricultor}
                    alt="Agricultor"
                    className="img-fluid"
                />
                </div>
                <h3 className="fw-bold">Benefícios</h3>
                <p className="text-muted">
                Plante, compartilhe e cresça com a gente. A AgroViva Web é o
                seu espaço para prosperar de forma colaborativa.
                </p>
                <a href="/beneficios" className="card__link fw-bold">
                SAIBA MAIS
                </a>
            </article>
            </div>

            {/* COMUNIDADE */}
            <div className="col-12 col-md-6 col-lg-4">
            <article className="card h-100 text-center p-4">
                <div className="card__icon mx-auto mb-3">
                <img
                    src={comunidade}
                    alt="Comunidade"
                    className="img-fluid"
                />
                </div>
                <h3 className="fw-bold">Para a Comunidade</h3>
                <p className="text-muted">
                Mais do que consumo, é parceria. Apoie famílias agricultoras e
                ajude a cultivar um futuro mais humano e sustentável.
                </p>
                <a href="/beneficios" className="card__link fw-bold">
                SAIBA MAIS
                </a>
            </article>
            </div>
        </div>
        </section>

        {/* VÍDEOS */}
        <section id="video" className="py-5">
        <div className="container text-center">
            <h2 className="fw-bold mb-4">Conheça mais o nosso projeto</h2>

            <div className="row g-4">
            <div className="col-md-6">
                <h4 className="mb-3">
                Entenda nosso propósito{" "}
                <a
                    href="https://www.youtube.com/watch?v=QzzBAoidNws&t=2s"
                    target="_blank"
                    rel="noopener noreferrer"
                >
                    <i className="bi bi-box-arrow-up-right"></i>
                </a>
                </h4>

                <div className="ratio ratio-16x9">
                <video src={video1} controls />
                </div>
            </div>

            <div className="col-md-6">
                <h4 className="mb-3">
                Entenda as funcionalidades{" "}
                <a
                    href="https://www.youtube.com/watch?v=Tvkzpwii_YM"
                    target="_blank"
                    rel="noopener noreferrer"
                >
                    <i className="bi bi-box-arrow-up-right"></i>
                </a>
                </h4>

                <div className="ratio ratio-16x9">
                <video src={video2} controls />
                </div>
            </div>
            </div>
        </div>
        </section>
    </main>
    </div>
);
}

export default Home;
