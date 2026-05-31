import { useState, useEffect, useCallback } from "react";
import { ALERTAS_MOCK } from "../data/alertasMock";

const INTERVALO_MS = 30 * 60 * 1000; // 30 minutos

/**
 * Hook para buscar alertas do INMET.
 *
 * Em desenvolvimento, usa dados mockados.
 * Em produção, descomente o fetch e aponte para seu proxy.
 *
 * @param {string|null} geocode - Geocode do estado (2 dígitos) ou município (7 dígitos)
 */
export function useInmetAlertas(geocode = null) {
  const [alertas, setAlertas] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [ultimaAtualizacao, setUltimaAtualizacao] = useState(null);

  const buscarAlertas = useCallback(async () => {
    try {
      setLoading(true);

      // ── DESENVOLVIMENTO (mock) ────────────────────────────────────────────
      await new Promise((r) => setTimeout(r, 400)); // simula latência
      setAlertas(ALERTAS_MOCK);
      // ─────────────────────────────────────────────────────────────────────

      setUltimaAtualizacao(new Date());
      setError(null);
    } catch (err) {
      setError(err.message);
    } finally {
      setLoading(false);
    }
  }, [geocode]);

  useEffect(() => {
    buscarAlertas();
    const intervalo = setInterval(buscarAlertas, INTERVALO_MS);
    return () => clearInterval(intervalo);
  }, [buscarAlertas]);

  return { alertas, loading, error, ultimaAtualizacao, refetch: buscarAlertas };
}

export function agruparPorEstado(alertas) {
  const ORDEM = { "Perigo": 1, "Alerta Severo": 2, "Alerta": 3, "Atenção": 4, "Observação": 5 };
  const mapa = {};

  alertas.forEach((a) => {
    const uf = a.estado;
    if (!mapa[uf]) {
      mapa[uf] = { uf, alertas: [], severidadeMax: null };
    }
    mapa[uf].alertas.push(a);

    const ordemAtual = ORDEM[a.severidade] ?? 99;
    const ordemMax = ORDEM[mapa[uf].severidadeMax] ?? 99;
    if (ordemAtual < ordemMax) {
      mapa[uf].severidadeMax = a.severidade;
    }
  });

  return mapa;
}
