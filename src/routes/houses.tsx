import { createFileRoute } from "@tanstack/react-router";
import { houses } from "@/data/houses";

export const Route = createFileRoute("/houses")({
  head: () => ({
    meta: [
      { title: "The Twelve Houses — Zodiac17" },
      {
        name: "description",
        content:
          "A guide to the twelve houses of the astrological chart — what each one rules, its natural sign, ruler, and the part of life it governs.",
      },
      { property: "og:title", content: "The Twelve Houses — Zodiac17" },
      {
        property: "og:description",
        content: "What each of the twelve astrological houses rules and means.",
      },
    ],
  }),
  component: HousesPage,
});

function HousesPage() {
  return (
    <section className="py-24">
      <div className="max-w-6xl mx-auto px-6">
        <header className="mb-16 border-b border-border pb-10">
          <p className="text-[10px] font-mono uppercase tracking-[0.3em] text-primary mb-6">
            The Architecture
          </p>
          <h1 className="text-5xl md:text-6xl font-serif italic text-balance leading-none mb-6">
            The Twelve Houses
          </h1>
          <p className="max-w-[62ch] text-lg text-muted-foreground text-pretty">
            A natal chart is divided into twelve houses — twelve slices of life. The planets pass
            through them as the earth turns, lighting up one area at a time. Each house carries
            its own subject, its own natural sign, and its own ruler.
          </p>
        </header>

        <div className="grid md:grid-cols-2 gap-5">
          {houses.map((h) => (
            <article key={h.number} className="bg-background p-8 border-2 border-primary/60 rounded-lg">
              <div className="flex items-baseline justify-between mb-6">
                <div className="flex items-baseline gap-4">
                  <span className="font-serif text-4xl italic text-primary leading-none">
                    {h.roman}
                  </span>
                  <span className="text-[10px] font-mono uppercase tracking-[0.25em] text-muted-foreground">
                    House {h.number}
                  </span>
                </div>
                <span className="text-[10px] font-mono uppercase tracking-[0.25em] text-muted-foreground">
                  {h.sign} · {h.ruler}
                </span>
              </div>
              <h2 className="text-2xl font-serif italic mb-2">{h.name}</h2>
              <p className="text-[10px] font-mono uppercase tracking-[0.25em] text-primary mb-4">
                {h.keyword}
              </p>
              <p className="text-sm text-foreground/80 mb-4">{h.rules}</p>
              <p className="text-sm text-muted-foreground leading-relaxed mb-6">{h.description}</p>

              <div className="mb-5">
                <p className="text-[10px] font-mono uppercase tracking-[0.25em] text-muted-foreground mb-1">
                  Area of life
                </p>
                <p className="text-sm text-foreground/90 italic leading-relaxed">{h.lifeArea}</p>
              </div>

              <dl className="space-y-3 text-sm border-t border-border pt-5">
                <div>
                  <dt className="text-[10px] font-mono uppercase tracking-[0.25em] text-primary mb-1">
                    Internal
                  </dt>
                  <dd className="text-foreground/85 leading-relaxed">{h.internal.join(", ")}</dd>
                </div>
                <div>
                  <dt className="text-[10px] font-mono uppercase tracking-[0.25em] text-primary mb-1">
                    External
                  </dt>
                  <dd className="text-foreground/85 leading-relaxed">{h.external.join(", ")}</dd>
                </div>
                <div>
                  <dt className="text-[10px] font-mono uppercase tracking-[0.25em] text-muted-foreground mb-1">
                    Balanced by
                  </dt>
                  <dd className="text-muted-foreground leading-relaxed italic">
                    the {h.balancedBy}
                    {h.balancedBy === 1 ? "st" : h.balancedBy === 2 ? "nd" : h.balancedBy === 3 ? "rd" : "th"} house
                  </dd>
                </div>
              </dl>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}