import { createFileRoute } from "@tanstack/react-router";
import { useMemo, useState } from "react";
import { Calendar, Hash, Sparkles, Star } from "lucide-react";
import {
  chineseZodiacForYear,
  westernSignForDate,
  lifePathNumber,
} from "@/data/places";
import { signs, elementMeaning, modalityMeaning } from "@/data/signs";

const elementClass: Record<string, string> = {
  Fire: "text-amber-500",
  Earth: "text-emerald-500",
  Air: "text-sky-400",
  Water: "text-indigo-400",
};

const lifePathMeanings: Record<string, string> = {
  "1": "Independent, driven, and built to lead. You learn by doing and tend to carve your own path.",
  "2": "Sensitive, cooperative, and naturally tuned to relationships. You bring people together.",
  "3": "Creative, expressive, and social. Communication and inspiration are your main tools.",
  "4": "Steady, practical, and detail-oriented. You build things that last through patience and discipline.",
  "5": "Free, curious, and adaptable. Change and variety are part of your growth.",
  "6": "Caring, responsible, and drawn to home and service. You nurture the people and places you love.",
  "7": "Analytical, introspective, and spiritual. You seek meaning beneath the surface.",
  "8": "Ambitious, capable, and focused on achievement. Power and resources are your teachers.",
  "9": "Compassionate, broad-minded, and idealistic. You’re here to understand and serve the bigger picture.",
  "11": "Intuitive and visionary, with a spiritual charge. You sense things before they’re spoken.",
  "22": "The master builder — big dreams made real through discipline and practical action.",
  "28": "A rare combination of leadership and intuition. You can inspire and organize at scale.",
  "33": "The master teacher and healer. Love, guidance, and creative service are your path.",
  "20/11": "A hidden 11 — sensitive and intuitive, with the potential to become a guide for others.",
};

const chineseMeanings: Record<string, string> = {
  Rat: "Quick, resourceful, and adaptable. Rats are good at spotting opportunity and making the most of it.",
  Ox: "Steady, reliable, and patient. The Ox builds slowly and finishes what it starts.",
  Tiger: "Bold, confident, and magnetic. Tigers charge forward and protect what they love.",
  Rabbit: "Gentle, clever, and diplomatic. Rabbits move gracefully and value harmony.",
  Dragon: "Charismatic, powerful, and lucky. Dragons tend to stand out and inspire others.",
  Snake: "Intuitive, private, and wise. Snakes see beneath the surface and plan carefully.",
  Horse: "Energetic, independent, and warm. Horses need freedom and thrive in motion.",
  Goat: "Creative, gentle, and cooperative. Goats are drawn to beauty and emotional connection.",
  Monkey: "Clever, playful, and inventive. Monkeys solve problems and keep people laughing.",
  Rooster: "Observant, hardworking, and honest. Roosters show up prepared and value precision.",
  Dog: "Loyal, fair, and protective. Dogs are dependable friends who stand by their principles.",
  Pig: "Generous, sincere, and easygoing. Pigs enjoy life and treat people with kindness.",
};

export const Route = createFileRoute("/calculator")({
  head: () => ({
    meta: [
      { title: "Birth Chart Calculator — Zodiac17" },
      {
        name: "description",
        content:
          "Enter your birth date to get your life path number, Chinese zodiac animal, and Western zodiac sign.",
      },
      { property: "og:title", content: "Birth Chart Calculator — Zodiac17" },
      {
        property: "og:description",
        content:
          "Calculate your life path, Chinese zodiac, and Western zodiac sign in one place.",
      },
    ],
  }),
  component: CalculatorPage,
});

function CalculatorPage() {
  const [date, setDate] = useState<string>(() => {
    const today = new Date();
    const yyyy = today.getFullYear();
    const mm = String(today.getMonth() + 1).padStart(2, "0");
    const dd = String(today.getDate()).padStart(2, "0");
    return `${yyyy}-${mm}-${dd}`;
  });

  const results = useMemo(() => {
    if (!date) return null;
    const [year, month, day] = date.split("-").map(Number);
    if (!year || !month || !day) return null;

    const chinese = chineseZodiacForYear(year);
    const western = westernSignForDate(date);
    const lifePath = lifePathNumber(date);
    const sign = signs.find((s) => s.name === western.name);

    return {
      chinese,
      western,
      lifePath,
      sign,
      year,
    };
  }, [date]);

  return (
    <section className="py-24">
      <div className="max-w-6xl mx-auto px-6">
        <header className="mb-12 border-b border-border pb-10">
          <p className="text-[10px] font-mono uppercase tracking-[0.3em] text-primary mb-6">
            Birth Date
          </p>
          <h1 className="text-5xl md:text-6xl font-serif italic text-balance leading-none mb-6">
            Calculator
          </h1>
          <p className="max-w-[62ch] text-lg text-muted-foreground text-pretty">
            Enter a birth date to get the life path number, Chinese zodiac
            animal, and Western zodiac sign — plus a quick reading of what each
            one points to.
          </p>
        </header>

        <div className="mb-12 max-w-md">
          <label className="block text-[10px] font-mono uppercase tracking-[0.2em] text-muted-foreground mb-3">
            Select a date
          </label>
          <div className="relative">
            <Calendar className="absolute left-4 top-1/2 -translate-y-1/2 size-4 text-muted-foreground" />
            <input
              type="date"
              value={date}
              onChange={(e) => setDate(e.target.value)}
              className="w-full bg-background border border-border rounded-lg pl-11 pr-4 py-3 text-base outline-none focus:border-primary transition-colors"
            />
          </div>
        </div>

        {results && (
          <div className="grid md:grid-cols-3 gap-5">
            {/* Life Path */}
            <article className="bg-background p-6 border border-border rounded-lg min-w-0">
              <div className="flex items-center gap-3 mb-4">
                <Hash className="size-5 text-primary" />
                <h2 className="text-[10px] font-mono uppercase tracking-[0.25em] text-muted-foreground">
                  Life Path
                </h2>
              </div>
              <div className="mb-4">
                <span className="text-5xl font-serif italic text-foreground">
                  {results.lifePath}
                </span>
              </div>
              <p className="text-sm text-muted-foreground leading-relaxed">
                {lifePathMeanings[results.lifePath] ??
                  "A unique path with its own rhythm. Look at the full birth chart for the full picture."}
              </p>
            </article>

            {/* Chinese Zodiac */}
            <article className="bg-background p-6 border border-border rounded-lg min-w-0">
              <div className="flex items-center gap-3 mb-4">
                <Sparkles className="size-5 text-primary" />
                <h2 className="text-[10px] font-mono uppercase tracking-[0.25em] text-muted-foreground">
                  Chinese Zodiac
                </h2>
              </div>
              <div className="mb-4">
                <span className="text-4xl mr-3">{results.chinese.emoji}</span>
                <span className="text-3xl font-serif italic text-foreground">
                  {results.chinese.animal}
                </span>
              </div>
              <p className="text-sm text-muted-foreground leading-relaxed">
                {chineseMeanings[results.chinese.animal]}
              </p>
            </article>

            {/* Western Zodiac */}
            <article className="bg-background p-6 border border-border rounded-lg min-w-0">
              <div className="flex items-center gap-3 mb-4">
                <Star className="size-5 text-primary" />
                <h2 className="text-[10px] font-mono uppercase tracking-[0.25em] text-muted-foreground">
                  Western Zodiac
                </h2>
              </div>
              <div className="mb-4">
                <span className="text-4xl text-primary mr-3">
                  {results.western.glyph}
                </span>
                <span className="text-3xl font-serif italic text-foreground">
                  {results.western.name}
                </span>
              </div>
              {results.sign ? (
                <div className="space-y-3">
                  <p className="text-sm text-muted-foreground leading-relaxed">
                    {results.sign.description}
                  </p>
                  <div className="flex flex-wrap gap-2">
                    <span className="text-[10px] font-mono uppercase tracking-[0.2em] px-2 py-1 rounded bg-primary/10 text-primary">
                      {results.sign.element}
                    </span>
                    <span className="text-[10px] font-mono uppercase tracking-[0.2em] px-2 py-1 rounded bg-primary/10 text-primary">
                      {results.sign.modality}
                    </span>
                    <span className="text-[10px] font-mono uppercase tracking-[0.2em] px-2 py-1 rounded bg-primary/10 text-primary">
                      Ruler: {results.sign.modernRuler ?? results.sign.ruler}
                    </span>
                  </div>
                </div>
              ) : (
                <p className="text-sm text-muted-foreground">
                  {results.western.name} carries its own set of traits and
                  lessons.
                </p>
              )}
            </article>
          </div>
        )}

        {/* Legend */}
        {results && results.sign && (
          <div className="mt-10 grid sm:grid-cols-2 lg:grid-cols-4 gap-5">
            {(Object.keys(elementMeaning) as Array<keyof typeof elementMeaning>).map(
              (el) => (
                <div
                  key={el}
                  className={`bg-background p-5 border border-border rounded-lg ${
                    results.sign.element === el ? "ring-1 ring-primary/40" : ""
                  }`}
                >
                  <p
                    className={`text-[10px] font-mono uppercase tracking-[0.25em] mb-1 ${elementClass[el]}`}
                  >
                    {el} {results.sign.element === el ? "• Your element" : ""}
                  </p>
                  <p className="text-sm text-muted-foreground">
                    {elementMeaning[el]}
                  </p>
                </div>
              ),
            )}
          </div>
        )}
      </div>
    </section>
  );
}
