import { createFileRoute } from "@tanstack/react-router";
import { useMemo, useState } from "react";
import { computeChart, detectShape, type ChartData } from "@/lib/chart";
import { ChartWheel } from "@/components/ChartWheel";
import { HOUSE_MEANINGS, ASPECT_INFO, planetInSign, planetInHouseGist } from "@/data/interpretations";

export const Route = createFileRoute("/chart")({
  head: () => ({
    meta: [
      { title: "Read a Birth Chart — Zodiac17" },
      {
        name: "description",
        content:
          "Enter your birth details to see your natal chart, the sky right now, and a plain-English reading of every planet, house, and aspect.",
      },
      { property: "og:title", content: "Read a Birth Chart — Zodiac17" },
      { property: "og:description", content: "Generate a natal chart and a beginner-friendly interpretation." },
    ],
  }),
  component: ChartPage,
});

type FormState = {
  name: string;
  date: string; // yyyy-mm-dd
  time: string; // hh:mm
  latitude: string;
  longitude: string;
};

const DEFAULT: FormState = {
  name: "",
  date: "1995-06-15",
  time: "12:00",
  latitude: "40.7128",
  longitude: "-74.0060",
};

function ChartPage() {
  const [form, setForm] = useState<FormState>(DEFAULT);
  const [submitted, setSubmitted] = useState<FormState | null>(DEFAULT);

  const personChart = useMemo<ChartData | null>(() => {
    if (!submitted) return null;
    try {
      const [y, mo, d] = submitted.date.split("-").map(Number);
      const [hh, mm] = submitted.time.split(":").map(Number);
      return computeChart({
        year: y, month: mo, date: d, hour: hh, minute: mm,
        latitude: parseFloat(submitted.latitude),
        longitude: parseFloat(submitted.longitude),
      });
    } catch {
      return null;
    }
  }, [submitted]);

  const todayChart = useMemo<ChartData | null>(() => {
    try {
      const now = new Date();
      const lat = submitted ? parseFloat(submitted.latitude) : 40.7128;
      const lng = submitted ? parseFloat(submitted.longitude) : -74.006;
      return computeChart({
        year: now.getUTCFullYear(),
        month: now.getUTCMonth() + 1,
        date: now.getUTCDate(),
        hour: now.getUTCHours(),
        minute: now.getUTCMinutes(),
        latitude: lat,
        longitude: lng,
      });
    } catch {
      return null;
    }
  }, [submitted]);

  return (
    <div className="max-w-6xl mx-auto px-6 py-12">
      <header className="mb-10">
        <div className="text-xs font-mono uppercase tracking-widest text-muted-foreground mb-3">Birth Chart Reader</div>
        <h1 className="font-serif text-4xl md:text-5xl tracking-tight text-foreground mb-3">Read a Chart</h1>
        <p className="text-muted-foreground max-w-2xl">
          Enter a birth date, time, and place. You'll get a natal wheel, today's sky for comparison, and a plain-English
          breakdown of every planet, house, and major aspect.
        </p>
      </header>

      <form
        onSubmit={(e) => {
          e.preventDefault();
          setSubmitted({ ...form });
        }}
        className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-3 mb-10 p-5 rounded-lg ring-1 ring-border bg-card/40"
      >
        <label className="flex flex-col gap-1 text-xs">
          <span className="font-mono uppercase tracking-widest text-muted-foreground">Name</span>
          <input
            value={form.name}
            onChange={(e) => setForm({ ...form, name: e.target.value })}
            placeholder="optional"
            className="h-10 px-3 rounded-md bg-background ring-1 ring-border text-foreground"
          />
        </label>
        <label className="flex flex-col gap-1 text-xs">
          <span className="font-mono uppercase tracking-widest text-muted-foreground">Date</span>
          <input
            type="date"
            required
            value={form.date}
            onChange={(e) => setForm({ ...form, date: e.target.value })}
            className="h-10 px-3 rounded-md bg-background ring-1 ring-border text-foreground"
          />
        </label>
        <label className="flex flex-col gap-1 text-xs">
          <span className="font-mono uppercase tracking-widest text-muted-foreground">Time (24h, local)</span>
          <input
            type="time"
            required
            value={form.time}
            onChange={(e) => setForm({ ...form, time: e.target.value })}
            className="h-10 px-3 rounded-md bg-background ring-1 ring-border text-foreground"
          />
        </label>
        <label className="flex flex-col gap-1 text-xs">
          <span className="font-mono uppercase tracking-widest text-muted-foreground">Latitude</span>
          <input
            required
            value={form.latitude}
            onChange={(e) => setForm({ ...form, latitude: e.target.value })}
            placeholder="40.71"
            className="h-10 px-3 rounded-md bg-background ring-1 ring-border text-foreground"
          />
        </label>
        <label className="flex flex-col gap-1 text-xs">
          <span className="font-mono uppercase tracking-widest text-muted-foreground">Longitude</span>
          <input
            required
            value={form.longitude}
            onChange={(e) => setForm({ ...form, longitude: e.target.value })}
            placeholder="-74.00"
            className="h-10 px-3 rounded-md bg-background ring-1 ring-border text-foreground"
          />
        </label>
        <div className="sm:col-span-2 lg:col-span-5 flex items-center justify-between gap-3 pt-2">
          <p className="text-xs text-muted-foreground">
            Tip: search your birth city + "lat long" if you don't know it. Unknown birth time? Use 12:00 — houses and
            Ascendant won't be accurate, but planets-in-signs will.
          </p>
          <button
            type="submit"
            className="h-10 px-5 rounded-md bg-primary text-primary-foreground text-sm font-medium ring-1 ring-primary/50 hover:scale-[1.02] active:scale-[0.98] transition-transform"
          >
            Cast Chart
          </button>
        </div>
      </form>

      {/* Two wheels side by side */}
      <section className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-12">
        <div className="p-4 rounded-lg ring-1 ring-border bg-card/30">
          {personChart ? (
            <ChartWheel data={personChart} label={`${submitted?.name || "Natal Chart"} • ${submitted?.date}`} />
          ) : (
            <div className="text-sm text-muted-foreground p-6">Submit the form to see this chart.</div>
          )}
        </div>
        <div className="p-4 rounded-lg ring-1 ring-border bg-card/30">
          {todayChart ? (
            <ChartWheel data={todayChart} label={`Sky Right Now • ${new Date().toUTCString().slice(5, 22)} UTC`} />
          ) : null}
        </div>
      </section>

      {/* Interpretation */}
      {personChart ? <Interpretation data={personChart} /> : null}
    </div>
  );
}

function Interpretation({ data }: { data: ChartData }) {
  const shape = detectShape(data.placements);
  return (
    <div className="space-y-12">
      {/* Big 3 */}
      <section>
        <h2 className="font-serif text-2xl mb-4">The Big Three</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          {[
            { label: "Sun (Identity)", p: data.placements.find((p) => p.key === "sun") },
            { label: "Moon (Inner World)", p: data.placements.find((p) => p.key === "moon") },
            { label: "Ascendant (Mask)", p: null, asc: true },
          ].map((row, i) => {
            if (row.asc) {
              return (
                <div key={i} className="p-4 rounded-lg ring-1 ring-border bg-card/40">
                  <div className="text-xs font-mono uppercase tracking-widest text-muted-foreground mb-2">{row.label}</div>
                  <div className="text-2xl font-serif mb-1">
                    {data.ascendant.signGlyph} {cap(data.ascendant.sign)}
                  </div>
                  <p className="text-sm text-muted-foreground">
                    How you come across at first meeting and the body/style you lead with.
                  </p>
                </div>
              );
            }
            const p = row.p!;
            return (
              <div key={i} className="p-4 rounded-lg ring-1 ring-border bg-card/40">
                <div className="text-xs font-mono uppercase tracking-widest text-muted-foreground mb-2">{row.label}</div>
                <div className="text-2xl font-serif mb-1">
                  {p.glyph} {p.label} in {p.signGlyph} {p.sign}
                </div>
                <div className="text-xs text-muted-foreground mb-2">
                  House {p.house} — {HOUSE_MEANINGS[p.house].name}
                </div>
                <p className="text-sm text-foreground/85">{planetInSign(p.key, p.sign.toLowerCase())}</p>
              </div>
            );
          })}
        </div>
      </section>

      {/* Chart shape */}
      <section className="p-5 rounded-lg ring-1 ring-border bg-card/40">
        <div className="text-xs font-mono uppercase tracking-widest text-muted-foreground mb-2">Chart Shape</div>
        <div className="font-serif text-xl mb-1">{shape.name}</div>
        <p className="text-sm text-muted-foreground">{shape.description}</p>
      </section>

      {/* Every planet */}
      <section>
        <h2 className="font-serif text-2xl mb-4">Every Placement</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
          {data.placements.map((p) => (
            <div key={p.key} className="p-4 rounded-md ring-1 ring-border bg-card/30">
              <div className="flex items-baseline justify-between mb-1">
                <div className="text-lg font-serif">
                  {p.glyph} {p.label} in {p.signGlyph} {p.sign}
                  {p.retrograde ? <span className="ml-2 text-xs text-red-400">℞ retrograde</span> : null}
                </div>
                <div className="text-xs font-mono text-muted-foreground">{p.degreeInSign.toFixed(1)}°</div>
              </div>
              <div className="text-xs text-muted-foreground mb-2">
                House {p.house} — {HOUSE_MEANINGS[p.house].name}
              </div>
              <p className="text-sm text-foreground/85 mb-1">{planetInSign(p.key, p.sign.toLowerCase())}</p>
              <p className="text-sm text-muted-foreground">{planetInHouseGist(p.key, p.house)}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Aspects */}
      <section>
        <h2 className="font-serif text-2xl mb-4">Aspects & Conjunctions</h2>
        <p className="text-sm text-muted-foreground mb-4 max-w-2xl">
          Aspects are the angles between planets. They show which energies inside you cooperate, clash, or fuse together.
        </p>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
          {data.aspects.length === 0 ? (
            <div className="text-sm text-muted-foreground">No major aspects detected.</div>
          ) : (
            data.aspects
              .sort((a, b) => a.orb - b.orb)
              .map((a, i) => {
                const info = ASPECT_INFO[a.type];
                return (
                  <div key={i} className="p-3 rounded-md ring-1 ring-border bg-card/30">
                    <div className="flex items-baseline justify-between mb-1">
                      <div className="font-serif">
                        {cap(a.a)} {sym(a.type)} {cap(a.b)}
                      </div>
                      <div className="text-xs font-mono text-muted-foreground">orb {a.orb.toFixed(1)}°</div>
                    </div>
                    <div className="text-xs uppercase tracking-widest text-muted-foreground mb-1">
                      {a.type} • {info.nature}
                    </div>
                    <p className="text-sm text-foreground/85">{info.description}</p>
                  </div>
                );
              })
          )}
        </div>
      </section>

      {/* House summary */}
      <section>
        <h2 className="font-serif text-2xl mb-4">Houses In Your Chart</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-2">
          {data.houses.map((H) => {
            const planetsHere = data.placements.filter((p) => p.house === H.id);
            return (
              <div key={H.id} className="p-3 rounded-md ring-1 ring-border bg-card/30">
                <div className="flex items-baseline justify-between">
                  <div className="font-serif">
                    House {H.id} — {HOUSE_MEANINGS[H.id].name}
                  </div>
                  <div className="text-xs font-mono text-muted-foreground">
                    cusp in {H.signGlyph} {cap(H.sign)}
                  </div>
                </div>
                <p className="text-xs text-muted-foreground mt-1 mb-2">{HOUSE_MEANINGS[H.id].gist}</p>
                <div className="text-sm">
                  {planetsHere.length === 0 ? (
                    <span className="text-muted-foreground">No planets here — handled through its ruler.</span>
                  ) : (
                    planetsHere.map((p) => `${p.glyph} ${p.label}`).join("  •  ")
                  )}
                </div>
              </div>
            );
          })}
        </div>
      </section>
    </div>
  );
}

function cap(s: string): string {
  return s.charAt(0).toUpperCase() + s.slice(1);
}
function sym(type: string): string {
  return ({ conjunction: "☌", opposition: "☍", trine: "△", square: "□", sextile: "✶" } as Record<string, string>)[type] ?? "•";
}