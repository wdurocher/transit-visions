import { createFileRoute } from "@tanstack/react-router";

export const Route = createFileRoute("/about")({
  head: () => ({
    meta: [
      { title: "Method — Zodiac17" },
      {
        name: "description",
        content:
          "How Zodiac17 reads the sky: tropical zodiac, modern psychological astrology, and a respect for the bodies themselves.",
      },
      { property: "og:title", content: "Method — Zodiac17" },
      {
        property: "og:description",
        content: "Our approach to reading planetary transits.",
      },
    ],
  }),
  component: AboutPage,
});

function AboutPage() {
  return (
    <section className="py-24">
      <div className="max-w-3xl mx-auto px-6 space-y-10">
        <p className="text-[10px] font-mono uppercase tracking-[0.3em] text-primary">Method</p>
        <h1 className="text-5xl md:text-6xl font-serif italic text-balance leading-none">
          How we read the sky
        </h1>

        <p className="text-lg text-muted-foreground leading-relaxed text-pretty">
          Zodiac17 is a quiet, modern almanac of planetary transits. We use the{" "}
          <em>tropical zodiac</em> — the same one Hellenistic astrologers worked with — and
          interpret each transit through a psychological lens: not prediction, but a description
          of the field a planet creates while it crosses a sign.
        </p>

        <p className="text-lg text-muted-foreground leading-relaxed text-pretty">
          We try to keep two things in balance: respect for the long lineage of the craft, and
          respect for the actual bodies in the sky. Saturn is not a metaphor. It is a real
          planet, two billion kilometers away, with rings of ice you could see for yourself if
          you had a small telescope.
        </p>

        <p className="text-lg text-muted-foreground leading-relaxed text-pretty">
          Astrology, read this way, is a language for paying attention. Use what's useful. Leave
          the rest.
        </p>
      </div>
    </section>
  );
}