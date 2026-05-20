import type { ChartData } from "@/lib/chart";
import { SIGN_GLYPH_MAP, SIGNS } from "@/lib/chart";

/**
 * Astrological wheel. Ascendant is fixed at the left (9 o'clock).
 * Ecliptic longitude increases counter-clockwise from there.
 */

const SIGN_COLORS: Record<string, string> = {
  aries: "#e85d5d", taurus: "#7d9b5e", gemini: "#e8c75d",
  cancer: "#b8c5e8", leo: "#e8945d", virgo: "#9b7d5e",
  libra: "#e8a5c7", scorpio: "#7d3c5e", sagittarius: "#b85ec7",
  capricorn: "#4a4a4a", aquarius: "#5e9bc7", pisces: "#5ec7b8",
};

const ASPECT_STROKE: Record<string, string> = {
  conjunction: "#aaa",
  opposition: "#e85d5d",
  square: "#e8945d",
  trine: "#5e9bc7",
  sextile: "#7d9b5e",
};

export function ChartWheel({ data, size = 520, label }: { data: ChartData; size?: number; label?: string }) {
  const cx = size / 2;
  const cy = size / 2;
  const rOuter = size / 2 - 4;
  const rZodiac = rOuter - 36;
  const rHouse = rZodiac - 60;
  const rInner = rHouse - 90;

  const ascLon = data.ascendant.eclipticLon;

  // Convert ecliptic longitude → SVG angle in radians.
  // Ascendant lands at SVG angle 180° (left). Longitude increases CCW.
  const lonToRad = (lon: number) => {
    const rel = ((lon - ascLon) % 360 + 360) % 360;
    const deg = 180 + rel; // SVG CCW from 3 o'clock; we want CCW from 9 o'clock
    return (deg * Math.PI) / 180;
  };
  const pt = (lon: number, r: number) => {
    const a = lonToRad(lon);
    return { x: cx + r * Math.cos(a), y: cy - r * Math.sin(a) };
  };

  // Zodiac segments (each 30°) — start at 0° Aries
  const signSegments = SIGNS.map((s, i) => {
    const startLon = i * 30;
    const endLon = (i + 1) * 30;
    const p1 = pt(startLon, rOuter);
    const p2 = pt(endLon, rOuter);
    const p3 = pt(endLon, rZodiac);
    const p4 = pt(startLon, rZodiac);
    const path = `M ${p1.x} ${p1.y} A ${rOuter} ${rOuter} 0 0 0 ${p2.x} ${p2.y} L ${p3.x} ${p3.y} A ${rZodiac} ${rZodiac} 0 0 1 ${p4.x} ${p4.y} Z`;
    const mid = pt(startLon + 15, (rOuter + rZodiac) / 2);
    return { sign: s, path, mid };
  });

  // House cusps
  const houseLines = data.houses.map((H) => {
    const inner = pt(H.cuspLon, rInner);
    const outer = pt(H.cuspLon, rHouse);
    return { id: H.id, x1: inner.x, y1: inner.y, x2: outer.x, y2: outer.y };
  });

  // House numbers (midpoint between consecutive cusps)
  const houseNumbers = data.houses.map((H, i) => {
    const next = data.houses[(i + 1) % 12].cuspLon;
    let span = ((next - H.cuspLon) % 360 + 360) % 360;
    if (span === 0) span = 30;
    const mid = pt(H.cuspLon + span / 2, rInner + 14);
    return { id: H.id, ...mid };
  });

  // Resolve overlapping planet positions by nudging glyphs along the ring
  const sortedPlanets = [...data.placements].sort((a, b) => a.eclipticLon - b.eclipticLon);
  const placed: { key: string; glyph: string; lon: number; retrograde: boolean; r: number }[] = [];
  const minSep = 7; // degrees
  let lastLon = -Infinity;
  for (const p of sortedPlanets) {
    let lon = p.eclipticLon;
    if (lon - lastLon < minSep) lon = lastLon + minSep;
    placed.push({ key: p.key, glyph: p.glyph, lon, retrograde: p.retrograde, r: rHouse - 22 });
    lastLon = lon;
  }

  // Aspect lines (skip conjunctions — too tight to draw)
  const planetByKey = new Map(data.placements.map((p) => [p.key, p]));
  const aspectLines = data.aspects
    .filter((a) => a.type !== "conjunction")
    .map((a, i) => {
      const A = planetByKey.get(a.a);
      const B = planetByKey.get(a.b);
      if (!A || !B) return null;
      const p1 = pt(A.eclipticLon, rInner - 4);
      const p2 = pt(B.eclipticLon, rInner - 4);
      return { i, x1: p1.x, y1: p1.y, x2: p2.x, y2: p2.y, stroke: ASPECT_STROKE[a.type] ?? "#888" };
    })
    .filter(Boolean) as { i: number; x1: number; y1: number; x2: number; y2: number; stroke: string }[];

  // Angle markers (ASC, MC, DSC, IC)
  const angleMarkers = [
    { lon: data.ascendant.eclipticLon, label: "ASC" },
    { lon: data.midheaven.eclipticLon, label: "MC" },
    { lon: (data.ascendant.eclipticLon + 180) % 360, label: "DSC" },
    { lon: (data.midheaven.eclipticLon + 180) % 360, label: "IC" },
  ];

  return (
    <div className="w-full overflow-x-auto">
      {label ? (
        <div className="text-xs font-mono uppercase tracking-widest text-muted-foreground mb-2 text-center">{label}</div>
      ) : null}
      <svg viewBox={`0 0 ${size} ${size}`} width="100%" height="auto" style={{ maxWidth: size }} className="mx-auto block">
        {/* zodiac ring */}
        {signSegments.map((s) => (
          <g key={s.sign}>
            <path d={s.path} fill={SIGN_COLORS[s.sign]} opacity={0.55} />
            <text x={s.mid.x} y={s.mid.y} dy="0.35em" textAnchor="middle" fontSize={20} fill="#fff" style={{ pointerEvents: "none" }}>
              {SIGN_GLYPH_MAP[s.sign]}
            </text>
          </g>
        ))}

        {/* inner & house circles */}
        <circle cx={cx} cy={cy} r={rHouse} fill="hsl(var(--background))" stroke="currentColor" strokeOpacity={0.25} />
        <circle cx={cx} cy={cy} r={rInner} fill="none" stroke="currentColor" strokeOpacity={0.15} />

        {/* house cusp lines */}
        {houseLines.map((l) => (
          <line
            key={l.id}
            x1={l.x1}
            y1={l.y1}
            x2={l.x2}
            y2={l.y2}
            stroke="currentColor"
            strokeOpacity={[1, 4, 7, 10].includes(l.id) ? 0.6 : 0.2}
            strokeWidth={[1, 4, 7, 10].includes(l.id) ? 1.5 : 1}
          />
        ))}

        {/* house numbers */}
        {houseNumbers.map((n) => (
          <text key={n.id} x={n.x} y={n.y} dy="0.35em" textAnchor="middle" fontSize={11} fill="currentColor" opacity={0.6}>
            {n.id}
          </text>
        ))}

        {/* aspect lines */}
        {aspectLines.map((a) => (
          <line key={a.i} x1={a.x1} y1={a.y1} x2={a.x2} y2={a.y2} stroke={a.stroke} strokeOpacity={0.55} strokeWidth={1} />
        ))}

        {/* angle markers */}
        {angleMarkers.map((m) => {
          const p = pt(m.lon, rZodiac + 2);
          const pL = pt(m.lon, rOuter + 14);
          return (
            <g key={m.label}>
              <line x1={p.x} y1={p.y} x2={pL.x} y2={pL.y} stroke="currentColor" strokeOpacity={0.8} strokeWidth={1.5} />
              <text x={pL.x} y={pL.y} dy="0.35em" textAnchor="middle" fontSize={9} fontWeight={700} fill="currentColor">
                {m.label}
              </text>
            </g>
          );
        })}

        {/* planets */}
        {placed.map((p) => {
          const pos = pt(p.lon, p.r);
          return (
            <g key={p.key}>
              <text x={pos.x} y={pos.y} dy="0.35em" textAnchor="middle" fontSize={20} fill="currentColor">
                {p.glyph}
              </text>
              {p.retrograde ? (
                <text x={pos.x + 12} y={pos.y - 8} fontSize={8} fill="#e85d5d">℞</text>
              ) : null}
            </g>
          );
        })}
      </svg>
    </div>
  );
}