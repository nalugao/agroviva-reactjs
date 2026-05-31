import React, { useState, useMemo } from "react";
import "./AlertasSection.css";
import MapaSVG from "./MapaSVG";
import Legenda from "./Legenda";
import PainelAlertas from "./PainelAlertas";
import { useInmetAlertas, agruparPorEstado } from "../../hooks/useInmetAlertas";

const ESTADOS_NOMES = {
  AC: "Acre",       AL: "Alagoas",            AM: "Amazonas",
  AP: "Amapá",      BA: "Bahia",              CE: "Ceará",
  DF: "Distrito Federal", ES: "Espírito Santo", GO: "Goiás",
  MA: "Maranhão",   MG: "Minas Gerais",       MS: "Mato Grosso do Sul",
  MT: "Mato Grosso", PA: "Pará",              PB: "Paraíba",
  PE: "Pernambuco", PI: "Piauí",              PR: "Paraná",
  RJ: "Rio de Janeiro", RN: "Rio Grande do Norte", RO: "Rondônia",
  RR: "Roraima",    RS: "Rio Grande do Sul",  SC: "Santa Catarina",
  SE: "Sergipe",    SP: "São Paulo",           TO: "Tocantins",
};

export default function AlertasSection({ className = "" }) {
  const [estadoSelecionado, setEstadoSelecionado] = useState(null);
  const [filtroSeveridade, setFiltroSeveridade] = useState(null);

  const { alertas, loading, ultimaAtualizacao, refetch } = useInmetAlertas();

  const alertasFiltrados = useMemo(() => {
    if (!filtroSeveridade) return alertas;
    return alertas.filter((a) => a.severidade === filtroSeveridade);
  }, [alertas, filtroSeveridade]);

  const alertasPorEstado = useMemo(
    () => agruparPorEstado(alertasFiltrados),
    [alertasFiltrados]
  );

  const estadosComAlertas = Object.keys(alertasPorEstado).length;

  const handleEstadoClick = (sigla) => {
    if (alertasPorEstado[sigla]) {
      setEstadoSelecionado((prev) => (prev === sigla ? null : sigla));
    }
  };

  return (
    <div className={`as-section-wrapper ${className}`}>
      <div className="as-section-intro text-center">
        <h2 className="as-section-intro__title ">Alertas climáticos do Brasil</h2>
        <p className="as-section-intro__desc">
          Acompanhe os avisos emitidos pelo INMET para todos os estados.
          Clique em um estado no mapa para ver os detalhes.
        </p>
      </div>

      {/* ── Bloco do mapa ── */}
      <section className="as-root" aria-label="Mapa de alertas climáticos INMET">
        <header className="as-header">
          <div className="as-header__logo">
            <span className="as-header__title">INMET</span>
            <span className="as-header__sub">Alertas Climáticos</span>
          </div>

          <div className="as-header__meta">
            <div className="as-stat">
              <span className="as-stat__num">{alertas.length}</span>
              <span className="as-stat__label">alertas ativos</span>
            </div>
            <div className="as-stat">
              <span className="as-stat__num">{estadosComAlertas}</span>
              <span className="as-stat__label">estados afetados</span>
            </div>
          </div>
        </header>

        <div className="as-body">
          <div className="as-mapa-col">
            <MapaSVG
              alertasPorEstado={alertasPorEstado}
              estadoSelecionado={estadoSelecionado}
              onEstadoClick={handleEstadoClick}
            />
            <Legenda
              filtroAtivo={filtroSeveridade}
              onFiltroChange={setFiltroSeveridade}
            />
          </div>

          <PainelAlertas
            estadoSelecionado={estadoSelecionado}
            nomeEstado={ESTADOS_NOMES[estadoSelecionado]}
            dadosEstado={alertasPorEstado[estadoSelecionado]}
            totalAlertas={alertas.length}
            ultimaAtualizacao={ultimaAtualizacao}
            onFechar={() => setEstadoSelecionado(null)}
            onRefresh={refetch}
            loading={loading}
          />
        </div>
      </section>

      <p className="as-rodape">
        Dados fornecidos pelo Instituto Nacional de Meteorologia (INMET) · atualização automática a cada 30 minutos
      </p>
    </div>
  );
}