import { createFileRoute } from "@tanstack/react-router";
import { useMemo, useState } from "react";
import { Search } from "lucide-react";
import {
  states,
  popularCities,
  topStateCities,
  chineseZodiacForYear,
  westernSignForDate,
  yearOf,
  type Place,
} from "@/data/places";

export const Route = createFileRoute("/compatibility")({
  head: () => ({
    meta: [
      { title: "State & City Compatibility — Zodiac17" },
      {
        name: "description",
        content:
          "Every U.S. state and major city by founding date, capital, Chinese zodiac year, and Western zodiac sign.",
      },
      { property: "og:title", content: "State & City Compatibility — Zodiac17" },
      {
        property: "og:description",
        content: "Founding dates, capitals, and zodiac signs for every U.S. state and city.",
      },
    ],
  }),
  component: CompatibilityPage,
});

function CompatibilityPage() {
  const [query, setQuery] = useState("");
  const all = useMemo<Place[]>(() => {
    const seen = new Set<string>();
    const out: Place[] = [];
    for (const p of [...states, ...popularCities, ...topStateCities]) {
      const key = `${p.kind}-${p.name}-${p.state ?? ""}`;
      if (seen.has(key)) continue;
      seen.add(key);
      out.push(p);
    }
    return out;
  }, []);

  const citiesByState = useMemo(() => {
    const map = new Map<string, Place[]>();
    for (const c of topStateCities) {
      if (!c.state) continue;
      const list = map.get(c.state) ?? [];
      list.push(c);
      map.set(c.state, list);
    }
    return map;
  }, []);

  const results = useMemo(() => {
    const q = query.trim().toLowerCase();
    if (!q) return [];
    // If the query matches a state name, show that state first followed by
    // its cities. Otherwise show only the cities whose name matches.
    const stateMatch = states.find((s) => s.name.toLowerCase() === q);
    const statePrefix = states.find((s) => s.name.toLowerCase().startsWith(q));
    const targetState = stateMatch ?? statePrefix;
    if (targetState) {
      const cities = all.filter(
        (p) => p.kind === "city" && p.state === targetState.name,
      );
      return [targetState, ...cities];
    }
    // City-only search: exact or substring match on the city name.
    return all
      .filter((p) => p.kind === "city" && p.name.toLowerCase().includes(q))
      .slice(0, 20);
  }, [all, query]);

  return (
    <section className="py-24">
      <div className="max-w-6xl mx-auto px-6">
        <header className="mb-12 border-b border-border pb-10">
          <p className="text-[10px] font-mono uppercase tracking-[0.3em] text-primary mb-6">
            Place & Sign
          </p>
          <h1 className="text-5xl md:text-6xl font-serif italic text-balance leading-none mb-6">
            Compatibility
          </h1>
          <p className="max-w-[62ch] text-lg text-muted-foreground text-pretty">
            Every U.S. state and a selection of its largest cities — by the date they were
            founded, the Chinese zodiac year that ruled that year, and the Western sign that
            ruled that day.
          </p>
        </header>

        {/* Search */}
        <div className="mb-10">
          <label className="relative block">
            <Search className="absolute left-4 top-1/2 -translate-y-1/2 size-4 text-muted-foreground" />
            <input
              type="text"
              value={query}
              onChange={(e) => setQuery(e.target.value)}
              placeholder="Search a state or city…"
              className="w-full bg-background border-2 border-primary/60 rounded-lg pl-11 pr-4 py-3 text-base outline-none focus:border-primary transition-colors"
            />
          </label>

          {query && (
            <div className="mt-4 grid gap-5">
              {results.length === 0 ? (
                <p className="text-sm text-muted-foreground px-2">No matches.</p>
              ) : (
                results.map((p) => (
                  <PlaceCard key={`${p.kind}-${p.state ?? ""}-${p.name}`} place={p} />
                ))
              )}
            </div>
          )}
        </div>

        {/* Popular cities */}
        {!query && (
          <div className="mb-16">
            <h2 className="text-[10px] font-mono uppercase tracking-[0.3em] text-primary mb-5">
              Ten Most Popular Cities
            </h2>
            <div className="grid md:grid-cols-2 gap-5">
              {popularCities.map((p) => (
                <PlaceCard key={p.name} place={p} />
              ))}
            </div>
          </div>
        )}

        {/* All 50 states */}
        {!query && (
          <div>
            <h2 className="text-[10px] font-mono uppercase tracking-[0.3em] text-primary mb-5">
              The Fifty States
            </h2>
            <div className="grid md:grid-cols-2 gap-5">
              {states.map((p) => (
                <PlaceCard key={p.name} place={p} />
              ))}
            </div>
          </div>
        )}

        {/* Top 10 cities per state */}
        {!query && (
          <div className="mt-16">
            <h2 className="text-[10px] font-mono uppercase tracking-[0.3em] text-primary mb-5">
              Top Ten Cities · Every State
            </h2>
            <div className="space-y-10">
              {states.map((s) => {
                const cities = citiesByState.get(s.name) ?? [];
                if (cities.length === 0) return null;
                return (
                  <div key={s.name}>
                    <h3 className="text-xl font-serif italic mb-4">{s.name}</h3>
                    <div className="grid md:grid-cols-2 gap-5">
                      {cities.map((c) => (
                        <PlaceCard key={`${c.state}-${c.name}`} place={c} />
                      ))}
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        )}
      </div>
    </section>
  );
}

function PlaceCard({ place }: { place: Place }) {
  const foundedChinese = chineseZodiacForYear(yearOf(place.foundedOn));
  const foundedWestern = westernSignForDate(place.foundedOn);

  const incYear = place.kind === "city" && place.incorporatedOn ? yearOf(place.incorporatedOn) : null;
  const incChinese = incYear ? chineseZodiacForYear(incYear) : null;
  const incWestern = place.kind === "city" && place.incorporatedOn ? westernSignForDate(place.incorporatedOn) : null;

  return (
    <article className="bg-background p-6 border-2 border-primary/60 rounded-lg">
      <div className="flex items-baseline justify-between mb-4 gap-4">
        <h3 className="text-2xl font-serif italic">{place.name}</h3>
        <span className="text-[10px] font-mono uppercase tracking-[0.25em] text-muted-foreground shrink-0">
          {place.kind === "state" ? "State" : place.state}
        </span>
      </div>

      <dl className="space-y-2 text-sm">
        {place.capital && (
          <div className="flex justify-between items-center">
            <dt className="text-[10px] font-mono uppercase tracking-[0.2em] text-muted-foreground">
              Capital
            </dt>
            <dd className="text-foreground">{place.capital}</dd>
          </div>
        )}
        <div className="flex justify-between items-center">
          <dt className="text-[10px] font-mono uppercase tracking-[0.2em] text-muted-foreground">
            Founded
          </dt>
          <dd className="text-foreground flex items-center gap-2 flex-wrap">
            {place.foundedLabel}
            <span className="inline-flex items-center gap-1 text-xs bg-primary/10 rounded px-1.5 py-0.5">
              <span>{foundedChinese.emoji}</span>
              <span className="text-primary">{foundedWestern.glyph}</span>
            </span>
          </dd>
        </div>

        {place.kind === "city" && place.incorporatedLabel && (
          <div className="flex justify-between items-center">
            <dt className="text-[10px] font-mono uppercase tracking-[0.2em] text-muted-foreground">
              Incorporated
            </dt>
            <dd className="text-foreground flex items-center gap-2 flex-wrap">
              {place.incorporatedLabel}
              {incChinese && incWestern && (
                <span className="inline-flex items-center gap-1 text-xs bg-primary/10 rounded px-1.5 py-0.5">
                  <span>{incChinese.emoji}</span>
                  <span className="text-primary">{incWestern.glyph}</span>
                </span>
              )}
            </dd>
          </div>
        )}
      </dl>
    </article>
  );
}