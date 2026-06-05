import React, { useState } from "react";

const ORDEM_SEV = ["Perigo", "Alerta Severo", "Alerta", "Atenção"];

export default function PainelAlertas({
  estadoSelecionado,
  nomeEstado,
  dadosEstado,
  totalAlertas,
  ultimaAtualizacao,
  onFechar,
  onRefresh,
  loading,
}) {
  const alertas = dadosEstado?.alertas || [];

  const formatarHora = (data) =>
    data
      ? data.toLocaleTimeString("pt-BR", { hour: "2-digit", minute: "2-digit" })
      : "—";

  const formatarData = (iso) => {
    if (!iso) return "—";
    return new Date(iso).toLocaleString("pt-BR", {
      day: "2-digit",
      month: "2-digit",
      hour: "2-digit",
      minute: "2-digit",
    });
  };

  return (
    <div className="as-painel-col">
      {/* Cabeçalho */}
      <div className="as-painel__header">
        <div>
          <div className="as-painel__title">
            {estadoSelecionado ? (
              <>
                <span className="as-painel__sigla">{estadoSelecionado}</span>
                {nomeEstado}
              </>
            ) : (
              "Alertas — Brasil"
            )}
          </div>
          <p className="as-painel__sub">
            {ultimaAtualizacao
              ? `Atualizado às ${formatarHora(ultimaAtualizacao)}`
              : "Carregando..."}
          </p>
        </div>

        <div className="as-painel__actions">
          <button
            type="button"
            className="as-icon-btn"
            onClick={onRefresh}
            title="Atualizar alertas"
            disabled={loading}
            aria-label="Atualizar alertas"
          >
            <span className={loading ? "as-icon-btn__spin" : ""}>↻</span>
          </button>

          {estadoSelecionado && (
            <button
              type="button"
              className="as-icon-btn"
              onClick={onFechar}
              title="Ver todos os estados"
              aria-label="Fechar filtro de estado"
            >
              ✕
            </button>
          )}
        </div>
      </div>

      {/* Resumo */}
      {estadoSelecionado && alertas.length > 0 ? (
        <ChipsResumo alertas={alertas} />
      ) : !estadoSelecionado ? (
        <div className="as-total">
          <p className="as-total__num">{totalAlertas}</p>
          <p className="as-total__label">alertas ativos no Brasil</p>
        </div>
      ) : null}

      {/* Lista */}
      <div className="as-lista">
        {loading ? (
          <div className="as-empty">
            <div className="as-spinner" />
            <span className="as-loading-text">Buscando alertas...</span>
          </div>
        ) : !estadoSelecionado ? (
          <div className="as-instrucao">
            <span className="as-instrucao__icon">🗺</span>
            <p className="as-instrucao__text">
              Toque em um estado no mapa para ver os alertas detalhados
            </p>
          </div>
        ) : alertas.length === 0 ? (
          <div className="as-empty">
            <span className="as-empty__icon">✓</span>
            <p className="as-empty__text">
              Nenhum alerta ativo para <strong>{nomeEstado}</strong>
            </p>
          </div>
        ) : (
          alertas.map((alerta) => (
            <CardAlerta key={alerta.id} alerta={alerta} formatarData={formatarData} />
          ))
        )}
      </div>
    </div>
  );
}

function ChipsResumo({ alertas }) {
  const contagem = ORDEM_SEV.reduce((acc, sev) => {
    acc[sev] = alertas.filter((a) => a.severidade === sev).length;
    return acc;
  }, {});

  const comAlertas = ORDEM_SEV.filter((sev) => contagem[sev] > 0);
  if (comAlertas.length === 0) return null;

  return (
    <div className="as-chips">
      {comAlertas.map((sev) => (
        <span key={sev} className="as-chip" data-sev={sev}>
          <span className="as-chip__num">{contagem[sev]}</span>
          {sev}
        </span>
      ))}
    </div>
  );
}

function CardAlerta({ alerta, formatarData }) {
  const [expandido, setExpandido] = useState(false);

  return (
    <article
      className="as-card"
      data-sev={alerta.severidade}
      onClick={() => setExpandido((v) => !v)}
      role="button"
      aria-expanded={expandido}
      tabIndex={0}
      onKeyDown={(e) => e.key === "Enter" && setExpandido((v) => !v)}
    >
      <div className="as-card__top">
        <p className="as-card__evento">{alerta.evento}</p>
        <span className="as-card__badge" data-sev={alerta.severidade}>
          {alerta.severidade}
        </span>
      </div>

      <div className="as-card__meta">
        <span>🕐 {formatarData(alerta.inicio)}</span>
        <span>até {formatarData(alerta.fim)}</span>
      </div>

      {expandido && (
        <div className="as-card__body">
          <p className="as-card__desc">{alerta.descricao}</p>
          {alerta.municipios?.length > 0 && (
            <p className="as-card__munis">📍 {alerta.municipios.join(", ")}</p>
          )}
        </div>
      )}

      <p className="as-card__toggle">{expandido ? "▲ menos" : "▼ detalhes"}</p>
    </article>
  );
}