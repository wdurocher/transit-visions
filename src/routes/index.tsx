import { createFileRoute } from "@tanstack/react-router";
import { Link } from "@tanstack/react-router";
import { transits, featuredTransit } from "@/data/transits";
import { TransitCard } from "@/components/TransitCard";
import { PlanetOrb } from "@/components/PlanetOrb";
import telescopeImg from "@/assets/telescope.jpg";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Observatory No. 9 — Today's Sky & Active Transits" },
      {
        name: "description",
        content:
          "Today's planetary transits, what they mean for the weeks ahead, and the planets behind them — visualized.",
      },
      { property: "og:title", content: "Observatory No. 9 — Today's Sky" },
      {
        property: "og:description",
        content: "Live planetary transits explained, with portraits of every planet.",
      },
    ],
  }),
  component: Index,
});

function Index() {
  const featured = featuredTransit;
  const cards = transits.slice(1, 4);

  return (
    <>
      {/* Hero */}
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
                <Link
                  to="/transits"
                  className="h-10 px-6 inline-flex items-center text-sm font-medium text-foreground rounded ring-1 ring-border hover:bg-card/40 transition-colors"
                >
                  View All Transits
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

      {/* Ephemeris Table */}
      <section className="py-24 bg-card/30 ring-1 ring-border">
        <div className="max-w-6xl mx-auto px-6">
          <div className="flex items-end justify-between mb-12 border-b border-border pb-8">
            <h2 className="text-3xl font-serif text-balance leading-tight">Active Transits</h2>
            <span className="text-xs font-mono text-muted-foreground tracking-tighter">
              CURRENT EPOCH: 2460341.5 JD
            </span>
          </div>

          <div className="grid md:grid-cols-3 gap-px bg-border rounded-lg overflow-hidden ring-1 ring-border">
            {cards.map((t) => (
              <TransitCard key={t.slug} t={t} />
            ))}
          </div>

          <div className="mt-10 flex justify-center">
            <Link
              to="/transits"
              className="text-xs font-medium text-primary uppercase tracking-widest hover:underline"
            >
              See the full ephemeris →
            </Link>
          </div>
        </div>
      </section>

      {/* Mechanics */}
      <section className="py-24">
        <div className="max-w-6xl mx-auto px-6">
          <div className="grid lg:grid-cols-[1fr_400px] gap-20 items-start">
            <div className="space-y-12">
              <div className="max-w-[56ch]">
                <h2 className="text-4xl font-serif italic mb-6">The Mechanics of Fate</h2>
                <p className="text-muted-foreground text-lg leading-relaxed text-pretty">
                  Astrology is the study of the bridge between celestial motion and human
                  experience. When we speak of a transit, we describe the geometric relationship
                  between a planet's current position in the sky and the coordinate it occupied at
                  the moment of an event or birth.
                </p>
              </div>

              <div className="grid sm:grid-cols-2 gap-8">
                <div className="p-6 rounded-lg bg-card/40 ring-1 ring-border">
                  <h3 className="text-sm font-medium mb-3 text-foreground">Planetary Dignity</h3>
                  <p className="text-sm text-muted-foreground leading-relaxed">
                    How comfortable a planet feels in its current sign affects the intensity and
                    clarity of its expression.
                  </p>
                </div>
                <div className="p-6 rounded-lg bg-card/40 ring-1 ring-border">
                  <h3 className="text-sm font-medium mb-3 text-foreground">Aspect Geometry</h3>
                  <p className="text-sm text-muted-foreground leading-relaxed">
                    Squares and oppositions create necessary tension; trines and sextiles offer
                    effortless flow.
                  </p>
                </div>
              </div>
            </div>

            <div className="relative p-1 bg-card rounded-xl ring-1 ring-border">
              <img
                src={telescopeImg}
                alt="Brass telescope eyepiece focused on a star cluster"
                loading="lazy"
                className="w-full aspect-[3/4] object-cover rounded-lg outline outline-1 -outline-offset-1 outline-border"
              />
              <div className="absolute -bottom-6 -left-6 bg-primary p-6 rounded ring-1 ring-black/10 shadow-2xl">
                <div className="text-primary-foreground font-serif text-3xl leading-none italic">
                  94%
                </div>
                <div className="text-primary-foreground/60 text-[10px] font-semibold uppercase tracking-widest mt-1">
                  Precision
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
