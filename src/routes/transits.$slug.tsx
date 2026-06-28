import { createFileRoute, Link, notFound } from "@tanstack/react-router";
import { transits, applyLivePosition, type Transit } from "@/data/transits";
import { PlanetOrb } from "@/components/PlanetOrb";
import { TransitCard } from "@/components/TransitCard";
import { useEffect, useState } from "react";
import { computeAllPositions } from "@/lib/sky";

export const Route = createFileRoute("/transits/$slug")({
  loader: ({ params }): { transit: Transit } => {
    const t = transits.find((x) => x.slug === params.slug);
    if (!t) throw notFound();
    return { transit: t };
  },
  head: ({ loaderData }) => {
    const t = loaderData?.transit;
    if (!t) return { meta: [{ title: "Transit not found" }] };
    return {
      meta: [
        { title: `${t.title} — Zodiac17` },
        { name: "description", content: t.short },
        { property: "og:title", content: `${t.title} — Zodiac17` },
        { property: "og:description", content: t.short },
        { property: "og:image", content: t.image },
        { name: "twitter:image", content: t.image },
      ],
    };
  },
  notFoundComponent: () => (
    <div className="py-32 text-center">
      <h1 className="text-4xl font-serif italic mb-4">Transit not found</h1>
      <Link to="/transits" className="text-primary hover:underline">
        Return to the ephemeris
      </Link>
    </div>
  ),
  errorComponent: ({ error, reset }) => (
    <div className="py-32 text-center max-w-md mx-auto">
      <h1 className="text-2xl font-serif italic mb-2">Something disturbed the reading</h1>
      <p className="text-sm text-muted-foreground mb-6">{error.message}</p>
      <button onClick={reset} className="text-primary hover:underline">
        Try again
      </button>
    </div>
  ),
  component: TransitDetail,
});

function TransitDetail() {
  const data = Route.useLoaderData() as { transit: Transit };
  const base = data.transit;
  const [t, setT] = useState<Transit>(base);
  const [related, setRelated] = useState<Transit[]>(
    transits.filter((x) => x.slug !== base.slug).slice(0, 3)
  );
  useEffect(() => {
    const positions = computeAllPositions(new Date());
    setT(applyLivePosition(base, positions));
    setRelated(
      transits
        .filter((x) => x.slug !== base.slug)
        .slice(0, 3)
        .map((r) => applyLivePosition(r, positions))
    );
  }, [base]);

  return (
    <>
      {/* Hero */}
      <section className="relative py-24 overflow-hidden border-b border-border">
        <div className="absolute inset-0 star-field pointer-events-none" />
        <div className="max-w-6xl mx-auto px-6 relative">
          <Link
            to="/transits"
            className="text-[10px] font-mono uppercase tracking-[0.3em] text-muted-foreground hover:text-primary transition-colors"
          >
            ← Ephemeris
          </Link>
          <div className="mt-8 grid lg:grid-cols-[1fr_400px] gap-16 items-center">
            <div className="animate-dawn">
              <div className="flex items-center gap-3 mb-6">
                <span className="font-serif text-3xl text-primary">{t.glyph}</span>
                <span className="text-[10px] font-mono uppercase tracking-[0.25em] text-muted-foreground">
                  {t.planet} in {t.sign} · {t.status}
                </span>
              </div>
              <h1 className="text-5xl md:text-7xl font-serif italic text-balance leading-[1.05] mb-8">
                {t.title}
              </h1>
              <p className="text-xl text-muted-foreground text-pretty max-w-[58ch] leading-relaxed">
                {t.short}
              </p>
              <div className="mt-10 flex flex-wrap items-center gap-6 text-xs font-mono uppercase tracking-tighter text-muted-foreground">
                <span>
                  <span className="text-foreground">Window:</span> {t.window}
                </span>
                <span>
                  <span className="text-foreground">Sign:</span> {t.sign}
                </span>
                <span>
                  <span className="text-foreground">Status:</span> {t.status}
                </span>
              </div>
            </div>
            <div className="flex justify-center animate-dawn">
              <PlanetOrb
                src={t.image}
                alt={`${t.planet} portrait`}
                loading="eager"
                fit={t.planet === "Saturn" ? "contain" : "cover"}
                className="size-72 md:size-80"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Reading */}
      <section className="py-20">
        <div className="max-w-6xl mx-auto px-6 grid lg:grid-cols-[2fr_1fr] gap-16">
          <article className="space-y-8">
            <h2 className="text-3xl font-serif italic">What happens during this transit</h2>
            <div className="space-y-5 text-lg text-muted-foreground leading-relaxed text-pretty">
              {t.long.split("\n\n").map((para, i) => (
                <p key={i}>{para}</p>
              ))}
            </div>

            <div className="pt-6 border-t border-border">
              <h3 className="text-sm font-mono uppercase tracking-widest text-primary mb-4">
                Themes
              </h3>
              <ul className="flex flex-wrap gap-2">
                {t.themes.map((th) => (
                  <li
                    key={th}
                    className="px-3 py-1 rounded-full text-xs bg-card ring-1 ring-border text-foreground"
                  >
                    {th}
                  </li>
                ))}
              </ul>
            </div>
          </article>

          <aside className="space-y-5 h-fit">
            {t.affects.map((a) => (
              <div key={a.area} className="bg-background p-6 border border-border rounded-lg">
                <h3 className="text-xs font-mono uppercase tracking-widest text-primary mb-2">
                  {a.area}
                </h3>
                <p className="text-sm text-muted-foreground leading-relaxed">{a.note}</p>
              </div>
            ))}
          </aside>
        </div>
      </section>

      {/* Related */}
      <section className="py-20 bg-card/30 ring-1 ring-border">
        <div className="max-w-6xl mx-auto px-6">
          <h2 className="text-2xl font-serif italic mb-10">Other active transits</h2>
          <div className="grid md:grid-cols-3 gap-5">
            {related.map((r) => (
              <div key={r.slug} className="border border-border rounded-lg overflow-hidden">
                <TransitCard t={r} />
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}