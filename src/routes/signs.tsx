import { createFileRoute } from "@tanstack/react-router";
import { signs, elementMeaning, modalityMeaning } from "@/data/signs";

const elementClass: Record<string, string> = {
  Fire: "text-amber-500",
  Earth: "text-emerald-500",
  Air: "text-sky-400",
  Water: "text-indigo-400",
};

export const Route = createFileRoute("/signs")({
  head: () => ({
    meta: [
      { title: "The Zodiac Signs — Observatory No. 9" },
      {
        name: "description",
        content:
          "All twelve zodiac signs, the planet that rules each one, and the part of the body it governs.",
      },
      { property: "og:title", content: "The Zodiac Signs — Observatory No. 9" },
      {
        property: "og:description",
        content: "Each zodiac sign, its ruling planet, and the body it rules.",
      },
    ],
  }),
  component: SignsPage,
});

function SignsPage() {
  return (
    <section className="py-24">
      <div className="max-w-6xl mx-auto px-6">
        <header className="mb-16 border-b border-border pb-10">
          <p className="text-[10px] font-mono uppercase tracking-[0.3em] text-primary mb-6">
            The Zodiac
          </p>
          <h1 className="text-5xl md:text-6xl font-serif italic text-balance leading-none mb-6">
            The Twelve Signs
          </h1>
          <p className="max-w-[62ch] text-lg text-muted-foreground text-pretty">
            Each sign is a season — a quality of light, a kind of temperament, a part of the body.
            The ancients noticed that the wheel of the year repeats itself in the wheel of the
            human form. The head with Aries, the feet with Pisces, and every part between.
          </p>
        </header>

        {/* Element / modality legend */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-px bg-border rounded-lg overflow-hidden ring-1 ring-border mb-16">
          {(Object.keys(elementMeaning) as Array<keyof typeof elementMeaning>).map((el) => (
            <div key={el} className="bg-background p-5">
              <p
                className={`text-[10px] font-mono uppercase tracking-[0.25em] mb-1 ${elementClass[el]}`}
              >
                {el}
              </p>
              <p className="text-sm text-muted-foreground">{elementMeaning[el]}</p>
            </div>
          ))}
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-px bg-border rounded-lg overflow-hidden ring-1 ring-border">
          {signs.map((s) => (
            <article key={s.name} className="bg-background p-8 flex flex-col h-full">
              <div className="flex items-start justify-between mb-6">
                <div>
                  <div className="font-serif text-5xl text-primary leading-none mb-3">
                    {s.glyph}
                  </div>
                  <h2 className="text-2xl font-serif italic">{s.name}</h2>
                  <p className="text-[10px] font-mono uppercase tracking-[0.25em] text-muted-foreground mt-1">
                    {s.dates}
                  </p>
                </div>
                <div className="text-right space-y-1">
                  <p className={`text-[10px] font-mono uppercase tracking-[0.25em] ${elementClass[s.element]}`}>
                    {s.element}
                  </p>
                  <p className="text-[10px] font-mono uppercase tracking-[0.25em] text-muted-foreground">
                    {s.modality}
                  </p>
                </div>
              </div>

              <p className="text-[10px] font-mono uppercase tracking-[0.25em] text-primary mb-3">
                "{s.keyword}"
              </p>
              <p className="text-sm text-muted-foreground leading-relaxed mb-6">
                {s.description}
              </p>

              <div className="mt-auto pt-6 border-t border-border space-y-3 text-sm">
                <div className="flex justify-between gap-4">
                  <span className="text-[10px] font-mono uppercase tracking-[0.2em] text-muted-foreground shrink-0">
                    Ruler
                  </span>
                  <span className="text-foreground text-right">
                    {s.ruler}
                    {s.modernRuler ? (
                      <span className="text-muted-foreground italic">
                        {" "}· modern: {s.modernRuler}
                      </span>
                    ) : null}
                  </span>
                </div>
                <div className="flex justify-between gap-4">
                  <span className="text-[10px] font-mono uppercase tracking-[0.2em] text-muted-foreground shrink-0">
                    Body
                  </span>
                  <span className="text-foreground text-right">{s.bodyParts}</span>
                </div>
                <div className="flex justify-between gap-4">
                  <span className="text-[10px] font-mono uppercase tracking-[0.2em] text-muted-foreground shrink-0">
                    Mode
                  </span>
                  <span className="text-foreground text-right italic">
                    {s.modality === "—" ? "—" : modalityMeaning[s.modality]}
                  </span>
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}