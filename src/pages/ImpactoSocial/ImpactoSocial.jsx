import HeaderImpactoSocial from "../../components/HeaderImpactoSocial";
import ImpactoSocialPropostas from "../../components/PropostasImpactoSocial/PropostasImpactoSocial";
import IphoneMockup from "../../components/IphoneMockup";
import "./impacto-social.css";

export default function ImpactoSocial() {
  return (
    <main>
      <section className="header">
        <HeaderImpactoSocial />
      </section>

      <section className="corpo">
        <ImpactoSocialPropostas />
        <IphoneMockup />
      </section>
    </main>
  );
}