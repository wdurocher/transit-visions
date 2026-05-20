// @ts-expect-error - library has no types
import { Origin, Horoscope } from "circular-natal-horoscope-js";

export type ChartInput = {
  year: number;
  month: number; // 1-12 (we'll convert)
  date: number;
  hour: number;
  minute: number;
  latitude: number;
  longitude: number;
};

export type Placement = {
  key: string;
  label: string;
  glyph: string;
  sign: string;
  signGlyph: string;
  degreeInSign: number; // 0-30
  eclipticLon: number; // 0-360
  house: number; // 1-12
  retrograde: boolean;
};

export type AspectInfo = {
  a: string;
  b: string;
  type: "conjunction" | "opposition" | "trine" | "square" | "sextile";
  orb: number;
};

export type ChartData = {
  ascendant: { sign: string; signGlyph: string; eclipticLon: number; degreeInSign: number };
  midheaven: { sign: string; signGlyph: string; eclipticLon: number; degreeInSign: number };
  houses: { id: number; cuspLon: number; sign: string; signGlyph: string }[];
  placements: Placement[];
  aspects: AspectInfo[];
};

const SIGN_GLYPHS: Record<string, string> = {
  aries: "♈", taurus: "♉", gemini: "♊", cancer: "♋",
  leo: "♌", virgo: "♍", libra: "♎", scorpio: "♏",
  sagittarius: "♐", capricorn: "♑", aquarius: "♒", pisces: "♓",
};

const PLANET_GLYPHS: Record<string, string> = {
  sun: "☉", moon: "☽", mercury: "☿", venus: "♀", mars: "♂",
  jupiter: "♃", saturn: "♄", uranus: "♅", neptune: "♆", pluto: "♇",
  chiron: "⚷", northnode: "☊", southnode: "☋",
};

const TRACKED = ["sun","moon","mercury","venus","mars","jupiter","saturn","uranus","neptune","pluto","chiron"] as const;
const POINTS = ["northnode","southnode"] as const;

export function computeChart(input: ChartInput): ChartData {
  // library wants month 0-indexed
  const origin = new Origin({
    year: input.year,
    month: input.month - 1,
    date: input.date,
    hour: input.hour,
    minute: input.minute,
    latitude: input.latitude,
    longitude: input.longitude,
  });
  const h = new Horoscope({
    origin,
    houseSystem: "placidus",
    zodiac: "tropical",
    aspectPoints: ["bodies", "points", "angles"],
    aspectWithPoints: ["bodies", "points", "angles"],
    aspectTypes: ["major"],
    language: "en",
  });

  const placements: Placement[] = [];
  for (const key of [...TRACKED, ...POINTS]) {
    const body = (h.CelestialBodies as Record<string, any>)[key] ?? (h.CelestialPoints as Record<string, any>)[key];
    if (!body) continue;
    const eclipticLon = body.ChartPosition.Ecliptic.DecimalDegrees as number;
    const signKey = (body.Sign?.key ?? "").toLowerCase();
    const degIn = eclipticLon - Math.floor(eclipticLon / 30) * 30;
    placements.push({
      key,
      label: body.label,
      glyph: PLANET_GLYPHS[key] ?? "•",
      sign: signKey.charAt(0).toUpperCase() + signKey.slice(1),
      signGlyph: SIGN_GLYPHS[signKey] ?? "",
      degreeInSign: degIn,
      eclipticLon,
      house: houseForLongitude(eclipticLon, h.Houses),
      retrograde: Boolean(body.isRetrograde),
    });
  }

  const houses = (h.Houses as any[]).map((H) => {
    const cuspLon = H.ChartPosition.StartPosition.Ecliptic.DecimalDegrees as number;
    const signKey = H.Sign.key.toLowerCase();
    return { id: H.id, cuspLon, sign: signKey, signGlyph: SIGN_GLYPHS[signKey] ?? "" };
  });

  const ascLon = h.Ascendant.ChartPosition.Ecliptic.DecimalDegrees as number;
  const ascSign = h.Ascendant.Sign.key.toLowerCase();
  const mcLon = h.Midheaven.ChartPosition.Ecliptic.DecimalDegrees as number;
  const mcSign = h.Midheaven.Sign.key.toLowerCase();

  const aspects: AspectInfo[] = (h.Aspects.all as any[])
    .filter((a) => ["conjunction","opposition","trine","square","sextile"].includes(a.aspectKey))
    .map((a) => ({
      a: a.point1Key,
      b: a.point2Key,
      type: a.aspectKey,
      orb: a.orb,
    }));

  return {
    ascendant: { sign: ascSign, signGlyph: SIGN_GLYPHS[ascSign] ?? "", eclipticLon: ascLon, degreeInSign: ascLon - Math.floor(ascLon / 30) * 30 },
    midheaven: { sign: mcSign, signGlyph: SIGN_GLYPHS[mcSign] ?? "", eclipticLon: mcLon, degreeInSign: mcLon - Math.floor(mcLon / 30) * 30 },
    houses,
    placements,
    aspects,
  };
}

function houseForLongitude(lon: number, houses: any[]): number {
  for (let i = 0; i < 12; i++) {
    const start = houses[i].ChartPosition.StartPosition.Ecliptic.DecimalDegrees as number;
    const end = houses[(i + 1) % 12].ChartPosition.StartPosition.Ecliptic.DecimalDegrees as number;
    if (inArc(lon, start, end)) return houses[i].id;
  }
  return 1;
}

function inArc(lon: number, start: number, end: number): boolean {
  const norm = (x: number) => ((x % 360) + 360) % 360;
  const a = norm(lon - start);
  const b = norm(end - start);
  return a < b;
}

export const SIGNS = [
  "aries","taurus","gemini","cancer","leo","virgo",
  "libra","scorpio","sagittarius","capricorn","aquarius","pisces",
];
export const SIGN_GLYPH_MAP = SIGN_GLYPHS;
export const PLANET_GLYPH_MAP = PLANET_GLYPHS;

export function detectShape(placements: Placement[]): { name: string; description: string } {
  // Only consider classical 10 bodies for shape detection
  const bodies = placements.filter((p) => ["sun","moon","mercury","venus","mars","jupiter","saturn","uranus","neptune","pluto"].includes(p.key));
  if (bodies.length < 2) return { name: "—", description: "Not enough placements." };
  const longs = bodies.map((p) => p.eclipticLon).sort((a, b) => a - b);
  // largest gap
  let maxGap = 0;
  for (let i = 0; i < longs.length; i++) {
    const next = longs[(i + 1) % longs.length];
    const gap = ((next - longs[i] + 360) % 360);
    if (gap > maxGap) maxGap = gap;
  }
  const span = 360 - maxGap;
  if (span <= 120) return { name: "Bundle", description: "All planets packed inside ~120°. Focused, narrow life-theme — depth in one area over breadth." };
  if (span <= 180 && maxGap >= 180) return { name: "Bowl", description: "All planets sit in one half of the wheel. You're filling something missing on the empty side." };
  if (maxGap >= 120) return { name: "Bucket", description: "Most planets clustered with one or two on the far side acting as a 'handle' — that handle drives your purpose." };
  if (span >= 240 && maxGap < 120 && maxGap >= 60) return { name: "Locomotive", description: "Planets cover ~two-thirds of the wheel with a clear gap. Self-driven momentum." };
  return { name: "Splash / Splay", description: "Planets are spread widely around the wheel. Broad interests, many talents, harder to specialise." };
}