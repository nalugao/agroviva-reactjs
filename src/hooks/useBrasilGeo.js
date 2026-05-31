import { useState, useEffect } from "react";

export function useBrasilGeo() {
  const [features, setFeatures] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch("/brasil-estados.json")
      .then((r) => r.json())
      .then((geojson) => {
        setFeatures(geojson.features);
        setLoading(false);
      })
      .catch(() => setLoading(false));
  }, []);

  return { features, loading };
}

// Projeta coordenadas lon/lat para x,y dentro de um viewBox dado
// Usa projeção cilíndrica equidistante simples (boa o suficiente para o Brasil)
export function projectFeatures(features, width, height, padding = 20) {
  if (!features.length) return [];

  // Calcula bounding box de todas as coordenadas
  let minLon = Infinity, maxLon = -Infinity;
  let minLat = Infinity, maxLat = -Infinity;

  const getAllCoords = (geometry) => {
    if (!geometry) return;
    if (geometry.type === "Polygon") {
      geometry.coordinates.forEach((ring) =>
        ring.forEach(([lon, lat]) => {
          minLon = Math.min(minLon, lon); maxLon = Math.max(maxLon, lon);
          minLat = Math.min(minLat, lat); maxLat = Math.max(maxLat, lat);
        })
      );
    } else if (geometry.type === "MultiPolygon") {
      geometry.coordinates.forEach((poly) =>
        poly.forEach((ring) =>
          ring.forEach(([lon, lat]) => {
            minLon = Math.min(minLon, lon); maxLon = Math.max(maxLon, lon);
            minLat = Math.min(minLat, lat); maxLat = Math.max(maxLat, lat);
          })
        )
      );
    }
  };

  features.forEach((f) => getAllCoords(f.geometry));

  const lonRange = maxLon - minLon;
  const latRange = maxLat - minLat;
  const scaleX = (width - padding * 2) / lonRange;
  const scaleY = (height - padding * 2) / latRange;
  const scale = Math.min(scaleX, scaleY);

  const offsetX = padding + ((width - padding * 2) - lonRange * scale) / 2;
  const offsetY = padding + ((height - padding * 2) - latRange * scale) / 2;

  const project = ([lon, lat]) => [
    offsetX + (lon - minLon) * scale,
    offsetY + (maxLat - lat) * scale, // Y invertido (lat cresce para cima)
  ];

  const ringToPath = (ring) =>
    ring.map((coord, i) => {
      const [x, y] = project(coord);
      return `${i === 0 ? "M" : "L"}${x.toFixed(2)},${y.toFixed(2)}`;
    }).join(" ") + "Z";

  return features.map((feature) => {
    const { geometry, properties } = feature;
    let d = "";

    if (geometry.type === "Polygon") {
      d = geometry.coordinates.map(ringToPath).join(" ");
    } else if (geometry.type === "MultiPolygon") {
      d = geometry.coordinates
        .map((poly) => poly.map(ringToPath).join(" "))
        .join(" ");
    }

    // Calcula centroide aproximado para label
    const coords = [];
    if (geometry.type === "Polygon") {
      geometry.coordinates[0].forEach((c) => coords.push(c));
    } else if (geometry.type === "MultiPolygon") {
      // Pega o maior polígono para o centroide
      let maxLen = 0, mainRing = [];
      geometry.coordinates.forEach((poly) => {
        if (poly[0].length > maxLen) { maxLen = poly[0].length; mainRing = poly[0]; }
      });
      mainRing.forEach((c) => coords.push(c));
    }

    const cx =
      coords.reduce((s, [lon]) => s + lon, 0) / coords.length;
    const cy =
      coords.reduce((s, [, lat]) => s + lat, 0) / coords.length;
    const [px, py] = project([cx, cy]);

    return {
      d,
      sigla: properties.sigla,
      nome: properties.name,
      cx: px,
      cy: py,
    };
  });
}
