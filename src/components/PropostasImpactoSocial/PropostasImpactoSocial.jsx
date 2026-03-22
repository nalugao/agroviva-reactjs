import { BotaoFaleConosco } from "../BotaoFaleConosco/BotaoFaleConosco";
import "./propostas.css";

export default function PropostasImpactoSocial() {

  const propostas = [
    "Zero desperdício",
    "Alimentação acessível",
    "Incentivo à agricultura familiar",
    "Interface inclusiva"
  ];

  return (
    <div className="propostas-container">

      <h1 className="propostas-titulo">
        Nossas propostas
      </h1>

      <ul className="propostas-lista">
        {propostas.map((item, index) => (
          <li className="card" key={index}>
            <i className="bi bi-check-lg"></i>
            {item}
          </li>
        ))}
      </ul>

      <BotaoFaleConosco />

    </div>
  );
}