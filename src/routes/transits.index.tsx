import { createFileRoute, Link } from "@tanstack/react-router";
import { transits, featuredTransit } from "@/data/transits";
import { TransitCard } from "@/components/TransitCard";
import { PlanetOrb } from "@/components/PlanetOrb";

export const Route = createFileRoute("/transits/")({
  head: () => ({
    meta: [
      { title: "Active Transits — Zodiac17" },
      {
        name: "description",
        content:
          "Every active planetary transit, with windows, themes, and a detailed reading of what to expect.",
      },
      { property: "og:title", content: "Active Transits — Zodiac17" },
      {
        property: "og:description",
        content: "Every active planetary transit with full readings and planet visuals.",
      },
    ],
  }),
  component: TransitsPage,
});

function TransitsPage() {
  const featured = featuredTransit;
  return (
    <>
      {/* Live Sky Position hero */}
      <section className="relative py-24 overflow-hidden border-b border-border">
        <div className="absolute inset-0 star-field pointer-events-none" />
        <div className="max-w-6xl mx-auto px-6 relative">
          <div className="flex flex-col lg:flex-row items-end gap-16">
            <div className="flex-1 animate-dawn">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-card/50 ring-1 ring-border text-[10px] font-semibold uppercase tracking-widest text-muted-foreground mb-8">
                <span className="size-1.5 rounded-full bg-amber-500 animate-pulse" />
                Live Sky Position
              </div>
              <h1 className="text-5xl md:text-7xl font-serif text-balance leading-none mb-8 text-foreground italic">
                {featured.title}
              </h1>
              <p className="max-w-[56ch] text-lg text-muted-foreground text-pretty mb-10">
                {featured.long}
              </p>
              <div className="flex items-center gap-4">
                <Link
                  to="/transits/$slug"
                  params={{ slug: featured.slug }}
                  className="h-10 px-6 inline-flex items-center text-sm font-medium bg-foreground text-background rounded ring-1 ring-foreground/20 transition-transform hover:scale-[1.02]"
                >
                  Read Interpretation
                </Link>
              </div>
            </div>
            <div className="lg:w-[40%] flex justify-center animate-dawn">
              <PlanetOrb
                src={featured.image}
                alt={`${featured.planet} portrait`}
                loading="eager"
                className="size-64 md:size-96"
              />
            </div>
          </div>
        </div>
      </section>

    <section className="py-24">
      <div className="max-w-6xl mx-auto px-6">
        <header className="mb-16 border-b border-border pb-10">
          <p className="text-[10px] font-mono uppercase tracking-[0.3em] text-primary mb-6">
            The Ephemeris
          </p>
          <h1 className="text-5xl md:text-6xl font-serif italic text-balance leading-none mb-6">
            All Active Transits
          </h1>
          <p className="max-w-[60ch] text-lg text-muted-foreground text-pretty">
            Every transit currently shaping the collective field. Select any to read the full
            interpretation, see the planet it concerns, and view which areas of life it touches.
          </p>
        </header>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-px bg-border rounded-lg overflow-hidden ring-1 ring-border">
          {transits.map((t) => (
            <TransitCard key={t.slug} t={t} />
          ))}
        </div>
      </div>
    </section>
    </>
  );
}