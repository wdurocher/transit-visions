import { Ecliptic, GeoVector, Body } from "astronomy-engine";

export const SIGNS = [
  "Aries", "Taurus", "Gemini", "Cancer", "Leo", "Virgo",
  "Libra", "Scorpio", "Sagittarius", "Capricorn", "Aquarius", "Pisces",
] as const;

export const SIGN_GLYPHS: Record<string, string> = {
  Aries: "♈", Taurus: "♉", Gemini: "♊", Cancer: "♋",
  Leo: "♌", Virgo: "♍", Libra: "♎", Scorpio: "♏",
  Sagittarius: "♐", Capricorn: "♑", Aquarius: "♒", Pisces: "♓",
};

// True Sky sidereal ayanamsa (~24.2° in 2026). Matches the rest of the site.
const AYANAMSA = 24.2;

export const PLANET_BODIES: { label: string; body: Body }[] = [
  { label: "Sun", body: Body.Sun },
  { label: "Moon", body: Body.Moon },
  { label: "Mercury", body: Body.Mercury },
  { label: "Venus", body: Body.Venus },
  { label: "Mars", body: Body.Mars },
  { label: "Jupiter", body: Body.Jupiter },
  { label: "Saturn", body: Body.Saturn },
  { label: "Uranus", body: Body.Uranus },
  { label: "Neptune", body: Body.Neptune },
  { label: "Pluto", body: Body.Pluto },
];

export function siderealLongitude(body: Body, date: Date): number {
  const trop = Ecliptic(GeoVector(body, date, true)).elon;
  return (((trop - AYANAMSA) % 360) + 360) % 360;
}

export function signIndexAt(body: Body, date: Date): number {
  return Math.floor(siderealLongitude(body, date) / 30);
}

export type PlanetPosition = {
  planet: string;
  sign: string;
  glyph: string;
  degree: number; // 0-30 within sign
  enteredOn: Date;
  leavesOn: Date;
  retrograde: boolean;
};

// Scan day-by-day to find when this planet entered its current sign and when it leaves.
// Bounded by maxDays to keep the search cheap; slow planets get a longer horizon.
function findIngressBoundaries(body: Body, date: Date, maxDays: number) {
  const currentSign = signIndexAt(body, date);
  const dayMs = 86400000;

  // Walk backwards to find entry
  let enteredOn = new Date(date);
  for (let i = 1; i <= maxDays; i++) {
    const d = new Date(date.getTime() - i * dayMs);
    if (signIndexAt(body, d) !== currentSign) {
      enteredOn = new Date(date.getTime() - (i - 1) * dayMs);
      break;
    }
    if (i === maxDays) enteredOn = d;
  }

  // Walk forwards to find exit
  let leavesOn = new Date(date);
  for (let i = 1; i <= maxDays; i++) {
    const d = new Date(date.getTime() + i * dayMs);
    if (signIndexAt(body, d) !== currentSign) {
      leavesOn = d;
      break;
    }
    if (i === maxDays) leavesOn = d;
  }

  return { currentSign, enteredOn, leavesOn };
}

function isRetrograde(body: Body, date: Date): boolean {
  if (body === Body.Sun || body === Body.Moon) return false;
  const dayMs = 86400000;
  const a = siderealLongitude(body, new Date(date.getTime() - dayMs));
  const b = siderealLongitude(body, new Date(date.getTime() + dayMs));
  let diff = b - a;
  if (diff > 180) diff -= 360;
  if (diff < -180) diff += 360;
  return diff < 0;
}

// Horizon (days) to search for sign change. Slow planets need more.
const HORIZON: Record<string, number> = {
  Moon: 5, Sun: 45, Mercury: 60, Venus: 60, Mars: 120,
  Jupiter: 420, Saturn: 1100, Uranus: 1100, Neptune: 1100, Pluto: 1100,
};

export function computeAllPositions(date: Date): PlanetPosition[] {
  return PLANET_BODIES.map(({ label, body }) => {
    const lon = siderealLongitude(body, date);
    const maxDays = HORIZON[label] ?? 365;
    const { currentSign, enteredOn, leavesOn } = findIngressBoundaries(body, date, maxDays);
    return {
      planet: label,
      sign: SIGNS[currentSign],
      glyph: SIGN_GLYPHS[SIGNS[currentSign]],
      degree: lon - currentSign * 30,
      enteredOn,
      leavesOn,
      retrograde: isRetrograde(body, date),
    };
  });
}

const fmt = (d: Date) =>
  d.toLocaleDateString("en-US", { month: "short", day: "numeric", year: "numeric" });

export function formatWindow(p: PlanetPosition): string {
  return `${fmt(p.enteredOn)} — ${fmt(p.leavesOn)}`;
}

export function formatDegree(p: PlanetPosition): string {
  return `${p.degree.toFixed(1)}° ${p.sign}`;
}