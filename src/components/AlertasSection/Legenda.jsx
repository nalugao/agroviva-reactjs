import React from "react";

const NIVEIS = ["Perigo", "Alerta Severo", "Alerta", "Atenção", "Observação"];

export default function Legenda({ filtroAtivo, onFiltroChange }) {
  return (
    <div className="as-legenda">
      <p className="as-legenda__title">Nível de alerta</p>

      {NIVEIS.map((nivel) => (
        <button
          key={nivel}
          type="button"
          className={`as-legenda__item${filtroAtivo !== null && filtroAtivo !== nivel ? " as-legenda__item--inativo" : ""}`}
          onClick={() => onFiltroChange(filtroAtivo === nivel ? null : nivel)}
          aria-pressed={filtroAtivo === nivel}
        >
          <span className="as-legenda__dot" data-sev={nivel} />
          <span className="as-legenda__label">{nivel}</span>
        </button>
      ))}

      <div className="as-legenda__item as-legenda__item--inativo" style={{ cursor: "default", opacity: 0.6 }}>
        <span className="as-legenda__dot" data-sev="vazio" />
        <span className="as-legenda__label">Sem alertas</span>
      </div>
    </div>
  );
}