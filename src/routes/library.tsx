import { createFileRoute, Link } from "@tanstack/react-router";
import { planetImages } from "@/data/transits";

const planets: { name: string; epithet: string; meaning: string }[] = [
  { name: "Mercury", epithet: "The Messenger", meaning: "Thought, language, exchange, transit itself." },
  { name: "Venus", epithet: "The Beloved", meaning: "Affection, value, beauty, what we draw close." },
  { name: "Mars", epithet: "The Warrior", meaning: "Drive, action, anger, the willingness to start." },
  { name: "Jupiter", epithet: "The Benefic", meaning: "Expansion, meaning, luck, the larger story." },
  { name: "Saturn", epithet: "The Architect", meaning: "Structure, time, discipline, consequence." },
  { name: "Neptune", epithet: "The Dreamer", meaning: "Dissolution, dream, longing, the mystic blur." },
  { name: "Moon", epithet: "The Mirror", meaning: "Mood, body, memory, the inner tide." },
  { name: "Saturn", epithet: "The Architect II", meaning: "Foundation, slow time, the test of what holds." },
];

export const Route = createFileRoute("/library")({
  head: () => ({
    meta: [
      { title: "Planet Library — Observatory No. 9" },
      {
        name: "description",
        content: "Portraits and meanings of every planet that shapes a transit.",
      },
      { property: "og:title", content: "Planet Library — Observatory No. 9" },
      { property: "og:description", content: "Portraits and meanings of every classical planet." },
    ],
  }),
  component: LibraryPage,
});

function LibraryPage() {
  const unique = Array.from(new Map(planets.map((p) => [p.name, p])).values());
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
          <p className="max-w-[60ch] text-lg text-muted-foreground text-pretty">
            Each body in the sky carries a meaning the ancients spent centuries refining. Hover
            over any portrait to read its dominion.
          </p>
        </header>

        <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-12">
          {unique.map((p) => {
            const img = planetImages[p.name];
            return (
              <Link
                key={p.name}
                to="/transits"
                className="group flex flex-col items-center text-center"
              >
                <div className="size-48 md:size-56 mb-6 rounded-full overflow-hidden bg-card ring-1 ring-border transition-transform group-hover:scale-[1.03]">
                  {img ? (
                    <img src={img} alt={p.name} loading="lazy" className="size-full object-cover" />
                  ) : null}
                </div>
                <h2 className="text-2xl font-serif italic mb-1">{p.name}</h2>
                <p className="text-[10px] font-mono uppercase tracking-[0.25em] text-primary mb-3">
                  {p.epithet}
                </p>
                <p className="text-sm text-muted-foreground max-w-[28ch]">{p.meaning}</p>
              </Link>
            );
          })}
        </div>
      </div>
    </section>
  );
}