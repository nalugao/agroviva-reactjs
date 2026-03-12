import IphoneMockup from "../../components/IphoneMockup";
import ImpactoSocialPropostas from "../../components/ImpactoSocialPropostas";
import "./impacto-social.css";

export function ImpactoSocial() {
  return (
    <main>
      <section className="header">
        <div className="header__content">
          <h1 className="header__h1">
            Com
            <span className="highlight-yellow"> tecnologia simples</span>,<br />
            transformamos <span className="highlight-green">excedentes</span>
            <br />
            <span className="highlight-lime">em oportunidade</span>
          </h1>

          <h2 className="header__h2">
            Inovação para um futuro agrícola mais justo e sustentável!
          </h2>
        </div>
      </section>

      <section className="corpo">
        <ImpactoSocialPropostas />
        <IphoneMockup />
      </section>
    </main>
  );
}