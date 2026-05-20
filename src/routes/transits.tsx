import { createFileRoute } from "@tanstack/react-router";
import { transits } from "@/data/transits";
import { TransitCard } from "@/components/TransitCard";

export const Route = createFileRoute("/transits")({
  head: () => ({
    meta: [
      { title: "Active Transits — Observatory No. 9" },
      {
        name: "description",
        content:
          "Every active planetary transit, with windows, themes, and a detailed reading of what to expect.",
      },
      { property: "og:title", content: "Active Transits — Observatory No. 9" },
      {
        property: "og:description",
        content: "Every active planetary transit with full readings and planet visuals.",
      },
    ],
  }),
  component: TransitsPage,
});

function TransitsPage() {
  return (
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
  );
}