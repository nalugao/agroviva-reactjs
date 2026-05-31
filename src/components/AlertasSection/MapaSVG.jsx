import React, { useMemo, useState } from "react";
import { useBrasilGeo, projectFeatures } from "../../hooks/useBrasilGeo";

const W = 560;
const H = 520;

export default function MapaSVG({ alertasPorEstado, estadoSelecionado, onEstadoClick }) {
  const { features, loading } = useBrasilGeo();
  const [hovered, setHovered] = useState(null);

  const projected = useMemo(
    () => projectFeatures(features, W, H, 16),
    [features]
  );

  if (loading) {
    return (
      <div className="as-mapa-loading">
        <div className="as-spinner" />
        <span className="as-loading-text">Carregando mapa...</span>
      </div>
    );
  }

  const getFontSize = (sigla) => {
    const grandes = ["AM","PA","MT","MS","GO","MG","BA","SP","PR","RS","MA","PI","TO","RO","AC"];
    const pequenos = ["DF","SE","AL","PB","RN","ES","RJ","SC","AP","RR"];
    if (grandes.includes(sigla)) return "10";
    if (pequenos.includes(sigla)) return "7";
    return "8.5";
  };

  // SVG não suporta className para fill/stroke — atributos de apresentação são obrigatórios aqui.
  // Cores vêm do SEVERIDADE_CONFIG (dados), não de lógica de estilo arbitrária.
  const getPathAtrs = (sigla) => {
    const dados = alertasPorEstado[sigla];
    const sev = dados?.severidadeMax;
    const isSelected = estadoSelecionado === sigla;
    const isHovered  = hovered === sigla;
    const temAlerta  = !!dados;

    // Paleta harmoniosa com a home: vermelho / terra / âmbar / verde
    const COR_MAPA = {
      "Perigo":        "#C0392B",
      "Alerta Severo": "#c4843a",
      "Alerta":        "#d4a017",
      "Atenção":       "#4a8c3f",
      "Observação":    "#2d5a27",
    };

    const COR_BORDA = {
      "Perigo":        "#9b2b20",
      "Alerta Severo": "#9e6420",
      "Alerta":        "#a07d10",
      "Atenção":       "#2d5a27",
      "Observação":    "#1a3a16",
    };

    return {
      fill:        temAlerta ? (COR_MAPA[sev] ?? "#8ab87f") : "#e8dfc8",
      stroke:      isSelected ? "#2d5a27" : isHovered ? "#4a8c3f" : temAlerta ? (COR_BORDA[sev] ?? "#8ab87f") : "#c8bc9e",
      strokeWidth: isSelected ? 2.5 : isHovered ? 2 : 0.7,
      opacity:     isSelected ? 1   : isHovered ? 0.88 : 0.95,
      filter:      isSelected ? "url(#as-shadow)" : undefined,
    };
  };

  return (
    <div className="as-mapa-wrap">
      <svg
        className="as-mapa-svg"
        viewBox={`0 0 ${W} ${H}`}
        role="img"
        aria-label="Mapa do Brasil com alertas climáticos por estado"
      >
        <defs>
          <filter id="as-shadow" x="-5%" y="-5%" width="110%" height="110%">
            <feDropShadow dx="0" dy="2" stdDeviation="3" floodColor="#00000025" />
          </filter>
        </defs>

        {projected.map(({ d, sigla, cx, cy }) => {
          const dados     = alertasPorEstado[sigla];
          const sev       = dados?.severidadeMax;
          const temAlerta = !!dados;
          const atr       = getPathAtrs(sigla);

          return (
            <g
              key={sigla}
              onClick={() => onEstadoClick(sigla)}
              onMouseEnter={() => setHovered(sigla)}
              onMouseLeave={() => setHovered(null)}
              className={temAlerta ? "as-estado as-estado--ativo" : "as-estado"}
              aria-label={`${sigla}${sev ? `: ${sev}` : ""}`}
            >
              {/* fill/stroke são atributos de apresentação SVG — não existe equivalente CSS puro
                  para valores calculados a partir de dados dinâmicos (cor de cada estado). */}
              <path
                d={d}
                fill={atr.fill}
                stroke={atr.stroke}
                strokeWidth={atr.strokeWidth}
                opacity={atr.opacity}
                filter={atr.filter}
              />

              {cx && cy && (
                <text
                  x={cx}
                  y={cy}
                  textAnchor="middle"
                  dominantBaseline="central"
                  fontSize={getFontSize(sigla)}
                  fontFamily="'IBM Plex Sans', sans-serif"
                  fontWeight={temAlerta ? "700" : "500"}
                  fill={temAlerta ? "#fff" : "#8A9BB0"}
                  className="as-estado__label"
                >
                  {sigla}
                </text>
              )}

              {temAlerta && sev === "Perigo" && cx && cy && (
                <text
                  x={cx + 8}
                  y={cy - 8}
                  fontSize="9"
                  textAnchor="middle"
                  className="as-estado__label"
                >
                  ⚠
                </text>
              )}
            </g>
          );
        })}
      </svg>

      {hovered && (
        <Tooltip
          sigla={hovered}
          nome={projected.find((p) => p.sigla === hovered)?.nome}
          dados={alertasPorEstado[hovered]}
        />
      )}
    </div>
  );
}

function Tooltip({ sigla, nome, dados }) {
  const sev   = dados?.severidadeMax;
  const count = dados?.alertas?.length ?? 0;

  return (
    <div className="as-tooltip" data-sev={sev ?? "vazio"}>
      <p className="as-tooltip__estado">
        {nome} <span className="as-tooltip__sigla">({sigla})</span>
      </p>
      {count > 0 ? (
        <>
          <span className="as-tooltip__badge" data-sev={sev}>
            {sev} · {count} alerta{count > 1 ? "s" : ""}
          </span>
          <p className="as-tooltip__dica">Clique para ver detalhes</p>
        </>
      ) : (
        <p className="as-tooltip__vazio">Sem alertas ativos</p>
      )}
    </div>
  );
}