import { createFileRoute } from "@tanstack/react-router";
import { useMemo, useState, type ReactNode } from "react";
import { Search } from "lucide-react";
import {
  states,
  popularCities,
  topStateCities,
  chineseZodiacForDate,
  westernSignForDate,
  type Place,
  companies,
  type Company,
  banks,
  assetManagers,
  techCompanies,
  countries,
  type Country,
  lifePathNumber,
  presidents,
  celebrities,
  singers,
  influencers,
  historicalFigures,
  type Person,
} from "@/data/places";

export const Route = createFileRoute("/compatibility")({
  head: () => ({
    meta: [
      { title: "Compatibility — Zodiac17" },
      {
        name: "description",
        content:
          "States, companies, celebrities, and cities — each tagged with Chinese zodiac year, Western sign, and life-path number.",
      },
      { property: "og:title", content: "Compatibility — Zodiac17" },
      {
        property: "og:description",
        content: "States, companies, celebrities, and cities — each tagged with Chinese zodiac year, Western sign, and life-path number.",
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

  const searchIndex = useMemo(() => buildSearchIndex(all), [all]);

  const searchResults = useMemo(
    () => runSearch(query, searchIndex, all),
    [query, searchIndex, all],
  );

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
            States, companies, celebrities, and cities — each tagged with Chinese
            zodiac year, Western sign, and life-path number.
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
              className="w-full bg-background border border-border rounded-lg pl-11 pr-4 py-3 text-base outline-none focus:border-primary transition-colors"
            />
          </label>

          {query && (
            <div className="mt-4 grid gap-5">
              {searchResults.length === 0 ? (
                <p className="text-sm text-muted-foreground px-2">
                  No matches. Try a sign + category, e.g. “dog states”, “goat
                  cities”, “leo presidents”, “dragon companies”.
                </p>
              ) : (
                searchResults.map((r) => (
                  <div key={r.key}>{r.node}</div>
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

        {/* Top 100 U.S. companies */}
        {!query && (
          <div className="mt-16">
            <h2 className="text-[10px] font-mono uppercase tracking-[0.3em] text-primary mb-5">
              Top 100 U.S. Companies
            </h2>
            <p className="max-w-[62ch] text-sm text-muted-foreground mb-6">
              Founding date, industry, headquarters, and the zodiac signs that ruled the day
              each was founded.
            </p>
            <div className="grid md:grid-cols-2 gap-5">
              {companies.map((c) => (
                <CompanyCard key={c.name} company={c} />
              ))}
            </div>
          </div>
        )}

        {/* Top 30 U.S. banks */}
        {!query && (
          <div className="mt-16">
            <h2 className="text-[10px] font-mono uppercase tracking-[0.3em] text-primary mb-5">
              Top 30 U.S. Banks
            </h2>
            <div className="grid md:grid-cols-2 gap-5">
              {banks.map((c) => (
                <CompanyCard key={`bank-${c.name}`} company={c} />
              ))}
            </div>
          </div>
        )}

        {/* Top 30 U.S. asset managers */}
        {!query && (
          <div className="mt-16">
            <h2 className="text-[10px] font-mono uppercase tracking-[0.3em] text-primary mb-5">
              Top 30 U.S. Asset Managers
            </h2>
            <p className="max-w-[62ch] text-sm text-muted-foreground mb-6">
              Mutual funds, ETF issuers, private equity, and hedge funds — including
              BlackRock, Vanguard, and Blackstone.
            </p>
            <div className="grid md:grid-cols-2 gap-5">
              {assetManagers.map((c) => (
                <CompanyCard key={`am-${c.name}`} company={c} />
              ))}
            </div>
          </div>
        )}

        {/* U.S. Presidents */}
        {!query && (
          <div className="mt-16">
            <h2 className="text-[10px] font-mono uppercase tracking-[0.3em] text-primary mb-5">
              U.S. Presidents
            </h2>
            <div className="grid md:grid-cols-2 gap-5">
              {presidents.map((p) => (
                <PersonCard key={`pres-${p.name}`} person={p} />
              ))}
            </div>
          </div>
        )}

        {/* Top Celebrities */}
        {!query && (
          <div className="mt-16">
            <h2 className="text-[10px] font-mono uppercase tracking-[0.3em] text-primary mb-5">
              Top Celebrities
            </h2>
            <div className="grid md:grid-cols-2 gap-5">
              {celebrities.map((p) => (
                <PersonCard key={`celeb-${p.name}`} person={p} />
              ))}
            </div>
          </div>
        )}

        {/* Top Singing Artists */}
        {!query && (
          <div className="mt-16">
            <h2 className="text-[10px] font-mono uppercase tracking-[0.3em] text-primary mb-5">
              Top 50 Singing Artists
            </h2>
            <div className="grid md:grid-cols-2 gap-5">
              {singers.map((p) => (
                <PersonCard key={`singer-${p.name}`} person={p} />
              ))}
            </div>
          </div>
        )}

        {/* Influencers */}
        {!query && (
          <div className="mt-16">
            <h2 className="text-[10px] font-mono uppercase tracking-[0.3em] text-primary mb-5">
              Top Influencers
            </h2>
            <div className="grid md:grid-cols-2 gap-5">
              {influencers.map((p) => (
                <PersonCard key={`influencer-${p.name}`} person={p} />
              ))}
            </div>
          </div>
        )}

        {/* Royalty, Ruling Families & Historical Power */}
        {!query && (
          <div className="mt-16">
            <h2 className="text-[10px] font-mono uppercase tracking-[0.3em] text-primary mb-5">
              Royalty, Ruling Families & Historical Power
            </h2>
            <div className="grid md:grid-cols-2 gap-5">
              {historicalFigures.map((p) => (
                <PersonCard key={`hist-${p.name}`} person={p} />
              ))}
            </div>
          </div>
        )}

        {/* Top Global Tech Companies */}
        {!query && (
          <div className="mt-16">
            <h2 className="text-[10px] font-mono uppercase tracking-[0.3em] text-primary mb-5">
              Top Global Technology Companies
            </h2>
            <p className="max-w-[62ch] text-sm text-muted-foreground mb-6">
              Semiconductors, software, AI, gaming, and platforms — beyond the
              U.S. Fortune list above.
            </p>
            <div className="grid md:grid-cols-2 gap-5">
              {techCompanies.map((c) => (
                <CompanyCard key={`tech-${c.name}`} company={c} />
              ))}
            </div>
          </div>
        )}

        {/* All Countries */}
        {!query && (
          <div className="mt-16">
            <h2 className="text-[10px] font-mono uppercase tracking-[0.3em] text-primary mb-5">
              Every Country
            </h2>
            <p className="max-w-[62ch] text-sm text-muted-foreground mb-6">
              Sovereign nations with their capital and national / independence
              day — tagged with the zodiac signs that ruled the date.
            </p>
            <div className="grid md:grid-cols-2 gap-5">
              {countries.map((c) => (
                <CountryCard key={`country-${c.name}`} country={c} />
              ))}
            </div>
          </div>
        )}
      </div>
    </section>
  );
}

function CountryCard({ country }: { country: Country }) {
  const chinese = chineseZodiacForDate(country.foundedOn);
  const western = westernSignForDate(country.foundedOn);
  const lifePath = lifePathNumber(country.foundedOn);
  return (
    <article className="bg-background p-6 border border-border rounded-lg min-w-0">
      <div className="flex items-baseline justify-between mb-4 gap-4 min-w-0">
        <h3 className="text-2xl font-serif italic min-w-0 break-words">{country.name}</h3>
        <span className="text-[10px] font-mono uppercase tracking-[0.25em] text-muted-foreground text-right break-words">
          Country
        </span>
      </div>
      <dl className="space-y-2 text-sm">
        <div className="flex justify-between items-center gap-4">
          <dt className="text-[10px] font-mono uppercase tracking-[0.2em] text-muted-foreground">
            Capital
          </dt>
          <dd className="text-foreground text-right">{country.capital}</dd>
        </div>
        <div className="flex justify-between items-center gap-4">
          <dt className="text-[10px] font-mono uppercase tracking-[0.2em] text-muted-foreground">
            Founded
          </dt>
          <dd className="text-foreground flex items-center gap-2 flex-wrap justify-end">
            {country.foundedLabel}
            <span className="inline-flex items-center gap-1 text-xs bg-primary/10 rounded px-1.5 py-0.5">
              <span>{chinese.emoji}</span>
              <span className="text-primary">{western.glyph}</span>
            </span>
          </dd>
        </div>
        <div className="flex justify-between items-center gap-4">
          <dt className="text-[10px] font-mono uppercase tracking-[0.2em] text-muted-foreground">
            Life Path
          </dt>
          <dd className="text-foreground">
            <span className="inline-flex items-center justify-center min-w-7 px-2 py-0.5 text-xs font-mono bg-primary/10 text-primary rounded">
              {lifePath}
            </span>
          </dd>
        </div>
      </dl>
    </article>
  );
}

// ---------- Unified search with sign + category filters ----------

type Category =
  | "state"
  | "city"
  | "country"
  | "company"
  | "bank"
  | "asset-manager"
  | "tech"
  | "president"
  | "celebrity"
  | "singer"
  | "influencer"
  | "historical";

type SearchItem = {
  key: string;
  name: string;
  category: Category;
  haystack: string;
  date: string;
  node: ReactNode;
};

const CHINESE_ANIMALS = [
  "rat","ox","tiger","rabbit","dragon","snake",
  "horse","goat","monkey","rooster","dog","pig",
];
const WESTERN_NAMES = [
  "aries","taurus","gemini","cancer","leo","virgo",
  "libra","scorpio","sagittarius","capricorn","aquarius","pisces",
];

const CATEGORY_KEYWORDS: Record<string, Category> = {
  state: "state", states: "state",
  city: "city", cities: "city",
  country: "country", countries: "country", nation: "country", nations: "country",
  company: "company", companies: "company", corp: "company", corporation: "company",
  bank: "bank", banks: "bank",
  asset: "asset-manager", manager: "asset-manager", managers: "asset-manager", fund: "asset-manager", funds: "asset-manager",
  tech: "tech", technology: "tech",
  president: "president", presidents: "president",
  celeb: "celebrity", celebrity: "celebrity", celebrities: "celebrity",
  singer: "singer", singers: "singer", artist: "singer", artists: "singer", musician: "singer", musicians: "singer",
  influencer: "influencer", influencers: "influencer",
  royal: "historical", royalty: "historical", king: "historical", kings: "historical",
  queen: "historical", queens: "historical", historical: "historical", history: "historical",
};

function buildSearchIndex(allPlaces: Place[]): SearchItem[] {
  const items: SearchItem[] = [];
  const seen = new Set<string>();
  const push = (key: string, item: SearchItem) => {
    if (seen.has(key)) return;
    seen.add(key);
    items.push(item);
  };

  for (const p of allPlaces) {
    const cat: Category = p.kind === "state" ? "state" : "city";
    const key = `${cat}-${p.state ?? ""}-${p.name}`;
    push(key, {
      key,
      name: p.name,
      category: cat,
      haystack: `${p.name} ${p.state ?? ""} ${p.capital ?? ""}`.toLowerCase(),
      date: p.foundedOn,
      node: <PlaceCard place={p} />,
    });
  }
  for (const c of countries) {
    push(`country-${c.name}`, {
      key: `country-${c.name}`,
      name: c.name,
      category: "country",
      haystack: `${c.name} ${c.capital}`.toLowerCase(),
      date: c.foundedOn,
      node: <CountryCard country={c} />,
    });
  }
  const addCompany = (c: Company, cat: Category, prefix: string) => {
    push(`${prefix}-${c.name}`, {
      key: `${prefix}-${c.name}`,
      name: c.name,
      category: cat,
      haystack: `${c.name} ${c.industry} ${c.headquarters}`.toLowerCase(),
      date: c.foundedOn,
      node: <CompanyCard company={c} />,
    });
  };
  companies.forEach((c) => addCompany(c, "company", "company"));
  banks.forEach((c) => addCompany(c, "bank", "bank"));
  assetManagers.forEach((c) => addCompany(c, "asset-manager", "am"));
  techCompanies.forEach((c) => addCompany(c, "tech", "tech"));

  const addPerson = (p: Person, cat: Category, prefix: string) => {
    push(`${prefix}-${p.name}`, {
      key: `${prefix}-${p.name}`,
      name: p.name,
      category: cat,
      haystack: `${p.name} ${p.role}`.toLowerCase(),
      date: p.birthOn,
      node: <PersonCard person={p} />,
    });
  };
  presidents.forEach((p) => addPerson(p, "president", "pres"));
  celebrities.forEach((p) => addPerson(p, "celebrity", "celeb"));
  singers.forEach((p) => addPerson(p, "singer", "singer"));
  influencers.forEach((p) => addPerson(p, "influencer", "inf"));
  historicalFigures.forEach((p) => addPerson(p, "historical", "hist"));

  return items;
}

function parseQuery(raw: string) {
  const tokens = raw.toLowerCase().split(/[\s,]+/).filter(Boolean);
  const chinese = new Set<string>();
  const western = new Set<string>();
  const categories = new Set<Category>();
  const rest: string[] = [];
  for (const t of tokens) {
    if (CHINESE_ANIMALS.includes(t)) chinese.add(t);
    else if (WESTERN_NAMES.includes(t)) western.add(t);
    else if (CATEGORY_KEYWORDS[t]) categories.add(CATEGORY_KEYWORDS[t]);
    else rest.push(t);
  }
  return { chinese, western, categories, rest };
}

function runSearch(
  raw: string,
  index: SearchItem[],
  allPlaces: Place[],
): SearchItem[] {
  const q = raw.trim();
  if (!q) return [];
  const { chinese, western, categories, rest } = parseQuery(q);
  const hasFilter = chinese.size + western.size + categories.size > 0;
  const text = rest.join(" ").trim();

  // Filtered (sign / category) mode
  if (hasFilter) {
    const filtered = index.filter((it) => {
      if (categories.size && !categories.has(it.category)) return false;
      if (text && !it.haystack.includes(text)) return false;
      if (chinese.size) {
        const animal = chineseZodiacForDate(it.date).animal.toLowerCase();
        if (!chinese.has(animal)) return false;
      }
      if (western.size) {
        const sign = westernSignForDate(it.date).name.toLowerCase();
        if (!western.has(sign)) return false;
      }
      return true;
    });
    return filtered.slice(0, 200);
  }

  // Plain text mode — preserve the old "state name first, then its cities" behavior.
  const lower = q.toLowerCase();
  const stateMatch =
    states.find((s) => s.name.toLowerCase() === lower) ??
    states.find((s) => s.name.toLowerCase().startsWith(lower));
  if (stateMatch) {
    const stateItem = index.find(
      (it) => it.category === "state" && it.name === stateMatch.name,
    );
    const cityItems = index.filter(
      (it) =>
        it.category === "city" &&
        allPlaces.find((p) => p.name === it.name)?.state === stateMatch.name,
    );
    return [stateItem, ...cityItems].filter(Boolean) as SearchItem[];
  }

  return index
    .filter((it) => it.haystack.includes(lower))
    .slice(0, 50);
}

function PlaceCard({ place }: { place: Place }) {
  const foundedChinese = chineseZodiacForDate(place.foundedOn);
  const foundedWestern = westernSignForDate(place.foundedOn);

  const incChinese = place.kind === "city" && place.incorporatedOn ? chineseZodiacForDate(place.incorporatedOn) : null;
  const incWestern = place.kind === "city" && place.incorporatedOn ? westernSignForDate(place.incorporatedOn) : null;

  return (
    <article className="bg-background p-6 border border-border rounded-lg min-w-0">
      <div className="flex items-baseline justify-between mb-4 gap-4 min-w-0">
        <h3 className="text-2xl font-serif italic min-w-0 break-words">{place.name}</h3>
        <span className="text-[10px] font-mono uppercase tracking-[0.25em] text-muted-foreground text-right break-words">
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

function CompanyCard({ company }: { company: Company }) {
  const chinese = chineseZodiacForDate(company.foundedOn);
  const western = westernSignForDate(company.foundedOn);
  const lifePath = lifePathNumber(company.foundedOn);
  return (
    <article className="bg-background p-6 border border-border rounded-lg min-w-0">
      <div className="flex items-baseline justify-between mb-4 gap-4 min-w-0">
        <h3 className="text-2xl font-serif italic min-w-0 break-words">{company.name}</h3>
        <span className="text-[10px] font-mono uppercase tracking-[0.25em] text-muted-foreground text-right break-words">
          Company
        </span>
      </div>
      <dl className="space-y-2 text-sm">
        <div className="flex justify-between items-center gap-4">
          <dt className="text-[10px] font-mono uppercase tracking-[0.2em] text-muted-foreground">
            Industry
          </dt>
          <dd className="text-foreground text-right">{company.industry}</dd>
        </div>
        <div className="flex justify-between items-center gap-4">
          <dt className="text-[10px] font-mono uppercase tracking-[0.2em] text-muted-foreground">
            HQ
          </dt>
          <dd className="text-foreground text-right">{company.headquarters}</dd>
        </div>
        <div className="flex justify-between items-center gap-4">
          <dt className="text-[10px] font-mono uppercase tracking-[0.2em] text-muted-foreground">
            Founded
          </dt>
          <dd className="text-foreground flex items-center gap-2 flex-wrap justify-end">
            {company.foundedLabel}
            <span className="inline-flex items-center gap-1 text-xs bg-primary/10 rounded px-1.5 py-0.5">
              <span>{chinese.emoji}</span>
              <span className="text-primary">{western.glyph}</span>
            </span>
          </dd>
        </div>
        <div className="flex justify-between items-center gap-4">
          <dt className="text-[10px] font-mono uppercase tracking-[0.2em] text-muted-foreground">
            Life Path
          </dt>
          <dd className="text-foreground">
            <span className="inline-flex items-center justify-center min-w-7 px-2 py-0.5 text-xs font-mono bg-primary/10 text-primary rounded">
              {lifePath}
            </span>
          </dd>
        </div>
      </dl>
    </article>
  );
}

function PersonCard({ person }: { person: Person }) {
  const chinese = chineseZodiacForDate(person.birthOn);
  const western = westernSignForDate(person.birthOn);
  const lifePath = lifePathNumber(person.birthOn);
  return (
    <article className="bg-background p-6 border border-border rounded-lg min-w-0">
      <div className="flex items-baseline justify-between mb-4 gap-4 min-w-0">
        <h3 className="text-2xl font-serif italic min-w-0 break-words">{person.name}</h3>
        <span className="text-[10px] font-mono uppercase tracking-[0.25em] text-muted-foreground text-right break-words max-w-[55%]">
          {person.role}
        </span>
      </div>
      <dl className="space-y-2 text-sm">
        <div className="flex justify-between items-center gap-4">
          <dt className="text-[10px] font-mono uppercase tracking-[0.2em] text-muted-foreground">
            Born
          </dt>
          <dd className="text-foreground flex items-center gap-2 flex-wrap justify-end">
            {person.birthLabel}
            <span className="inline-flex items-center gap-1 text-xs bg-primary/10 rounded px-1.5 py-0.5">
              <span>{chinese.emoji}</span>
              <span className="text-primary">{western.glyph}</span>
            </span>
          </dd>
        </div>
        <div className="flex justify-between items-center gap-4">
          <dt className="text-[10px] font-mono uppercase tracking-[0.2em] text-muted-foreground">
            Life Path
          </dt>
          <dd className="text-foreground">
            <span className="inline-flex items-center justify-center min-w-7 px-2 py-0.5 text-xs font-mono bg-primary/10 text-primary rounded">
              {lifePath}
            </span>
          </dd>
        </div>
      </dl>
    </article>
  );
}