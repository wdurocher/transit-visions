import { createFileRoute, Link } from "@tanstack/react-router";
import { planets, planetImage } from "@/data/planets";

export const Route = createFileRoute("/library")({
  head: () => ({
    meta: [
      { title: "Planet Library — Zodiac17" },
      {
        name: "description",
        content:
          "Portraits and meanings of every planet, luminary, and node that shapes a transit.",
      },
      { property: "og:title", content: "Planet Library — Zodiac17" },
      {
        property: "og:description",
        content:
          "Sun, Moon, Mercury through Pluto, Chiron, and the lunar Nodes — what each body governs.",
      },
    ],
  }),
  component: LibraryPage,
});

function LibraryPage() {
  return (
    <section className="py-24">
      <div className="max-w-6xl mx-auto px-6">
        <header className="mb-16 border-b border-border pb-10">
          <p className="text-[10px] font-mono uppercase tracking-[0.3em] text-primary mb-6">
            Library
          </p>
          <h1 className="text-5xl md:text-6xl font-serif italic text-balance leading-none mb-6">
            Portraits of the Planets
          </h1>
          <p className="max-w-[64ch] text-lg text-muted-foreground text-pretty">
            Each body in the sky carries a meaning the ancients spent centuries refining. From the
            radiant Sun to the slow turn of Pluto, here is what each planet, luminary, and node
            governs in a chart and a transit.
          </p>
        </header>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-px bg-border rounded-lg overflow-hidden ring-1 ring-border">
          {planets.map((p) => {
            const img = planetImage(p.name);
            return (
              <article
                key={p.name}
                className="bg-background p-8 flex flex-col"
              >
                <div className="flex items-start justify-between mb-8">
                  <div
                    className="size-20 rounded-full ring-1 ring-border overflow-hidden bg-card"
                    aria-hidden
                  >
                    {img ? (
                      <img
                        src={img}
                        alt=""
                        loading="lazy"
                        className="size-full object-cover"
                      />
                    ) : (
                      <div
                        className="size-full"
                        style={{ backgroundImage: p.fallback }}
                      />
                    )}
                  </div>
                  <span className="font-serif text-3xl text-primary leading-none">
                    {p.glyph}
                  </span>
                </div>

                <h2 className="text-2xl font-serif italic mb-1">{p.name}</h2>
                <p className="text-[10px] font-mono uppercase tracking-[0.25em] text-primary mb-4">
                  {p.epithet}
                </p>
                {p.rulesDay ? (
                  <p className="text-[11px] font-mono uppercase tracking-[0.2em] text-muted-foreground mb-3">
                    Rules <span className="text-foreground">{p.rulesDay}</span>
                  </p>
                ) : null}
                <p className="text-sm text-foreground mb-3 italic">{p.essence}</p>
                <p className="text-sm text-muted-foreground text-pretty mb-6 leading-relaxed">
                  {p.meaning}
                </p>

                <div className="mb-6">
                  <p className="text-[10px] font-mono uppercase tracking-widest text-primary mb-3">
                    What it shows in a chart
                  </p>
                  <ul className="space-y-1.5 text-sm text-foreground/90">
                    {p.shows.map((s) => (
                      <li key={s} className="flex gap-2 leading-snug">
                        <span className="text-primary mt-1.5 size-1 rounded-full bg-primary shrink-0" aria-hidden />
                        <span>{s}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="mt-auto pt-5 border-t border-border">
                  <p className="text-[10px] font-mono uppercase tracking-widest text-primary mb-3">
                    Experiences
                  </p>
                  <ul className="flex flex-wrap gap-1.5">
                    {p.experiences.map((e) => (
                      <li
                        key={e}
                        className="px-2 py-0.5 rounded-full text-[11px] bg-card ring-1 ring-border text-muted-foreground"
                      >
                        {e}
                      </li>
                    ))}
                  </ul>
                </div>
              </article>
            );
          })}
        </div>

        <p className="mt-12 text-xs text-muted-foreground">
          Rephrased from{" "}
          <a
            href="https://masteringthezodiac.com/pdfs/astrology-planet-meanings.pdf"
            target="_blank"
            rel="noreferrer"
            className="underline hover:text-foreground"
          >
            Mastering the Zodiac · Planet Meanings
          </a>
          . See also the{" "}
          <Link to="/signs" className="underline hover:text-foreground">
            sign meanings
          </Link>{" "}
          and{" "}
          <Link to="/houses" className="underline hover:text-foreground">
            house meanings
          </Link>
          .
        </p>
      </div>
    </section>
  );
}
