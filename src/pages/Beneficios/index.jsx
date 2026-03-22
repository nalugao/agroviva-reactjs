import CardBeneficio from "../../components/CardBeneficio";
import { beneficiosAgroviva } from "../../data/beneficiosAgroviva";
import { useState } from "react";
import "./beneficios.css";
import fundoComunidade from "../../assets/fundo-comunidade-ben.jpg";
import fundoAgricultor from "../../assets/fundo-agricultor-ben.jpg";

function Beneficios() {
  const [tipoBeneficio, setTipoBeneficio] = useState("comunidade");

  const imagemAtual =
    tipoBeneficio === "comunidade" ? fundoComunidade : fundoAgricultor;

  return (
    <main
      className="py-5 beneficios-bg"
      style={{
        backgroundImage: `url(${imagemAtual})`,
      }}
    >
      <div className="container">
        <div className="text-center mb-5">
          <h1 className="fw-bold display-5" style={{ color: "#1a4731" }}>
            Benefícios
          </h1>
          <p className="text-muted">
            Escolha o seu perfil para ver as vantagens exclusivas
          </p>
        </div>

        {/* Seleção de Perfil */}
        <div className="filtro-container mb-5">
          <button
            className={`filtro-btn ${
              tipoBeneficio === "comunidade" ? "ativo" : ""
            }`}
            onClick={() => setTipoBeneficio("comunidade")}
          >
            <i className="bi bi-house-fill me-2"></i>
            Comunidade
          </button>

          <button
            className={`filtro-btn ${
              tipoBeneficio === "agricultor" ? "ativo" : ""
            }`}
            onClick={() => setTipoBeneficio("agricultor")}
          >
            <i className="bi bi-leaf-fill me-2"></i>
            Agricultor
          </button>
        </div>

        {/* Cards */}
        <section>
          <div className="row g-4 justify-content-center">
            {beneficiosAgroviva
              .filter((item) => item.tipo === tipoBeneficio)
              .map((item, index) => (
                <div className="col-12 col-md-6 col-lg-5" key={index}>
                  <CardBeneficio
                    icone={item.icone}
                    alt={item.alt}
                    titulo={item.titulo}
                    descricao={item.descricao}
                  />
                </div>
              ))}
          </div>
        </section>
      </div>
    </main>
  );
}

export default Beneficios;
