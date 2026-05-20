import { createFileRoute, Link } from "@tanstack/react-router";
import saturnImg from "@/assets/saturn.jpg";

export const Route = createFileRoute("/cycles/saturn-taurus")({
  head: () => ({
    meta: [
      { title: "Saturn in Taurus — Cycles of Financial Reset · Zodiac17" },
      {
        name: "description",
        content:
          "Every time Saturn enters Vedic Taurus, the global financial system gets restructured. The pattern from 1913 to 2032.",
      },
      { property: "og:title", content: "Saturn in Taurus — Cycles of Financial Reset" },
      {
        property: "og:description",
        content:
          "Federal Reserve, Bretton Woods, the end of the gold standard, dot-com bust — and what 2029-2032 may bring.",
      },
      { property: "og:image", content: saturnImg },
    ],
  }),
  component: SaturnTaurusPage,
});

type Cycle = {
  years: string;
  headline: string;
  events: string[];
  takeaway: string;
};

const cycles: Cycle[] = [
  {
    years: "1911 — 1913",
    headline: "The Federal Reserve is born",
    events: [
      "Federal Reserve Act signed (Dec 23, 1913), creating the U.S. central banking system.",
      "16th Amendment ratified — federal income tax becomes permanent.",
      "Foundations of modern paper-credit banking laid in Europe and the U.S.",
    ],
    takeaway:
      "The architecture of modern banking — central banks, fiat credit, federal taxation — was bolted into place. Money was never the same again.",
  },
  {
    years: "1941 — 1943",
    headline: "World War II and the road to Bretton Woods",
    events: [
      "U.S. enters WWII (Dec 1941); global economies put on a war footing.",
      "Massive deficit spending and rationing redefine national balance sheets.",
      "Planning begins for the 1944 Bretton Woods Agreement — the post-war monetary order.",
    ],
    takeaway:
      "The war broke the old monetary order and forced a complete restructuring: the U.S. dollar becomes the world's reserve currency, pegged to gold.",
  },
  {
    years: "1971 — 1973",
    headline: "The Nixon Shock — end of the gold standard",
    events: [
      "Aug 15, 1971 — Nixon ends dollar-to-gold convertibility. The pure fiat era begins.",
      "1973 — Bretton Woods fully collapses; currencies float freely.",
      "1973 oil crisis triggers stagflation; petrodollar system emerges.",
    ],
    takeaway:
      "For the first time in modern history, no major currency was backed by anything physical. Inflation, gold, and oil all moved together.",
  },
  {
    years: "2000 — 2002",
    headline: "Dot-com crash and a new monetary regime",
    events: [
      "Nasdaq peaks (Mar 2000), then loses ~78% over 2 years.",
      "Euro launches as physical currency (Jan 2002) — largest currency reform in modern history.",
      "Post-9/11 emergency rate cuts inflate the housing bubble that breaks in 2008.",
    ],
    takeaway:
      "A speculative tech mania broke, and central banks responded with cheap money — laying the groundwork for the next crisis.",
  },
  {
    years: "Aug 2029 — May 2032",
    headline: "The next window",
    events: [
      "Saturn re-enters Vedic Taurus for the first time in ~29 years.",
      "Overlaps with predicted peaks in sovereign debt, AI displacement, and CBDC rollouts.",
      "Pluto in Aquarius (technology, networks) is in tension with Saturn in Taurus (money, the physical body).",
    ],
    takeaway:
      "Historically, this window has not been about small adjustments. It's been about who sets the rules of money for the next generation.",
  },
];

function SaturnTaurusPage() {
  return (
    <section className="py-20">
      <div className="max-w-4xl mx-auto px-6">
        <header className="mb-14 border-b border-border pb-10">
          <p className="text-[10px] font-mono uppercase tracking-[0.3em] text-primary mb-6">
            Cycles · The Long View
          </p>
          <h1 className="text-4xl md:text-6xl font-serif italic text-balance leading-[1.05] mb-6">
            Saturn in Taurus
            <br />
            <span className="text-muted-foreground">— A Pattern of Financial Reset</span>
          </h1>
          <p className="max-w-[64ch] text-lg text-muted-foreground text-pretty">
            Roughly every 29 years, Saturn — the planet of structure, limits, and slow consequence —
            moves into Vedic Taurus, the sign that rules money, value, and the physical body.
            Every time it has done so in the last century, the world's financial architecture has
            been rebuilt. Here is the pattern.
          </p>
        </header>

        <div className="grid sm:grid-cols-3 gap-px bg-border rounded-lg overflow-hidden ring-1 ring-border mb-16">
          {[
            { k: "Cycle length", v: "~29.5 years" },
            { k: "Time in Taurus", v: "~2.5 years" },
            { k: "Next entry", v: "Aug 2029" },
          ].map((s) => (
            <div key={s.k} className="bg-background p-6">
              <p className="text-[10px] font-mono uppercase tracking-[0.25em] text-primary mb-2">
                {s.k}
              </p>
              <p className="text-2xl font-serif italic">{s.v}</p>
            </div>
          ))}
        </div>

        <ol className="space-y-12">
          {cycles.map((c, i) => (
            <li
              key={c.years}
              className="relative grid md:grid-cols-[140px_1fr] gap-6 md:gap-10"
            >
              <div className="md:text-right">
                <p className="text-[10px] font-mono uppercase tracking-[0.3em] text-primary mb-2">
                  Cycle {i + 1}
                </p>
                <p className="text-xl font-serif italic">{c.years}</p>
              </div>
              <div className="border-l border-border pl-6 md:pl-8 pb-2">
                <h2 className="text-2xl md:text-3xl font-serif italic mb-5 leading-snug">
                  {c.headline}
                </h2>
                <ul className="space-y-2 mb-6">
                  {c.events.map((e) => (
                    <li
                      key={e}
                      className="flex gap-3 text-sm text-foreground/90 leading-relaxed"
                    >
                      <span
                        className="mt-2 size-1.5 rounded-full bg-primary shrink-0"
                        aria-hidden
                      />
                      <span>{e}</span>
                    </li>
                  ))}
                </ul>
                <p className="text-sm text-muted-foreground italic border-l-2 border-primary/40 pl-4 leading-relaxed">
                  {c.takeaway}
                </p>
              </div>
            </li>
          ))}
        </ol>

        <aside className="mt-20 p-8 rounded-lg ring-1 ring-border bg-card/40">
          <p className="text-[10px] font-mono uppercase tracking-[0.3em] text-primary mb-3">
            A note on method
          </p>
          <p className="text-sm text-muted-foreground leading-relaxed">
            This is the <em>Vedic</em> (sidereal) zodiac, which is offset from the tropical zodiac
            most Western horoscopes use by roughly 24 degrees. Saturn enters sidereal Taurus on a
            different calendar date than tropical Taurus — the cycles above use sidereal dates. The
            pattern is descriptive, not predictive: when a slow, heavy planet crosses the sign tied
            to money, the systems built on money tend to creak. Read it as a weather forecast, not
            a horoscope.
          </p>
          <p className="mt-6 text-xs text-muted-foreground">
            See also the{" "}
            <Link to="/library" className="underline hover:text-foreground">
              planet library
            </Link>{" "}
            for what Saturn governs, and the{" "}
            <Link to="/signs" className="underline hover:text-foreground">
              sign meanings
            </Link>{" "}
            for what Taurus rules.
          </p>
        </aside>
      </div>
    </section>
  );
}
