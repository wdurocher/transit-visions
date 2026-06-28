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
// The numbers follow the alphabet — 1 is A, 2 is B, 3 is C, and so on.
// Each number carries the archetype of the letter it sits on.
const lifePathMeanings: Record<string, string> = {
  "1": "Alpha. The athlete, the leader, the first one through the door. 1 is the letter A — the beginning, the self, the will to go first. Independent, driven, and built to initiate.",
  "2": "Beta. The feminine, the peacemaker, the diplomat. 2 is the letter B — the second voice, the partner, the mirror. Sensitive, cooperative, and tuned to relationships.",
  "3": "Communication and child-like energy. 3 is the letter C — the creative voice, the storyteller, the playful spark. Expressive, social, and quick to inspire.",
  "4": "Law and order. 4 is the letter D — the foundation, the structure, the rules. Steady, disciplined, and built to make things last.",
  "5": "The entertainer. Travel, sex, the model, the performer. 5 is the letter E — energy in motion, the senses wide open. Free, curious, magnetic, and always changing.",
  "6": "Home, family, loyalty, love. 6 is the letter F — the heart, the caretaker, the protector of the people and places it belongs to. Responsible and deeply devoted.",
  "7": "Genius, gambler, deep thinker. 7 is the letter G — the seeker, the analyst, the mystic. Introspective, spiritual, and drawn to what's beneath the surface.",
  "8": "Money, the hustler, karma. 8 is the letter H — power, resources, and the exact return of what you put out. Ambitious, capable, and tested by what you build.",
  "9": "Infant. Adaptable, compassionate, and broad-minded. 9 is the letter I — the open hand, the humanitarian, the soul that takes in everything around it.",
  "11": "Charisma, the athlete, the old soul. 11 is a master number — two 1s standing side by side. Intuitive, visionary, and built to lead with presence rather than force.",
  "22": "The master builder. 22 is two 2s — partnership and structure doubled. Big visions made real through discipline and patient, practical action.",
  "28": "Master number. Leadership (2) and authority (8) combined. Rare ability to inspire people and organize resources at the same scale.",
  "33": "The master teacher. 33 is three 3s — communication, creativity, and love amplified. Here to guide, heal, and serve through what you express.",
  "20/11": "A hidden 11. On the surface a 2 (peacemaker, partner), but 20 carries the charge of an 11 underneath — intuitive, charismatic, and built to eventually guide others.",
};

// Secondary number — the "underneath" or "reduced" energy that still influences you.
const secondaryLifePath = (lp: string): { number: string; description: string } | null => {
  if (lp.includes("/")) {
    const [, second] = lp.split("/");
    return {
      number: second,
      description: `Underneath the ${lp.split("/")[0]} sits a ${second} — ${lifePathMeanings[second] ?? ""}`,
    };
  }
  const masterMap: Record<string, string> = { "11": "2", "22": "4", "28": "1", "33": "6" };
  if (masterMap[lp]) {
    const reduced = masterMap[lp];
    return {
      number: reduced,
      description: `As a master number, ${lp} also carries the everyday energy of a ${reduced}. ${lifePathMeanings[reduced] ?? ""}`,
    };
  }
  return null;
};

const chineseMeanings: Record<string, string> = {
  Rat: "Quick, resourceful, and sharp. Rats notice opportunity before anyone else and know how to move on it. Charming in social settings, careful with money, and quietly ambitious — they often build wealth and influence by being the first to act.",
  Ox: "Steady, reliable, and patient. The Ox doesn't rush — it works the long game. Strong-willed and hard to push around, the Ox finishes what it starts and earns trust through consistency rather than charm.",
  Tiger: "Bold, confident, and magnetic. Tigers lead with courage and protect the people they love fiercely. They're emotional, expressive, and unafraid of conflict — natural-born leaders who'd rather act than wait for permission.",
  Rabbit: "Gentle, clever, and diplomatic. Rabbits move through the world with grace and avoid unnecessary drama. Behind the softness is a sharp mind — they pick up on what others miss and value beauty, harmony, and peace.",
  Dragon: "Charismatic, powerful, and lucky. Dragons tend to stand out without trying. Confident, ambitious, and naturally inspiring, they think big and aren't afraid to chase it — though pride can be the lesson.",
  Snake: "Intuitive, private, and wise. Snakes see beneath the surface and plan several steps ahead. They're elegant, observant, and slow to trust — but deeply loyal once they do. Often drawn to mystery, strategy, and the unseen.",
  Horse: "Energetic, independent, and warm. Horses need freedom and movement to thrive. Optimistic, social, and a little restless, they fall in love with adventure and don't do well in cages — even gilded ones.",
  Goat: "Creative, gentle, and cooperative. Goats are drawn to beauty, art, and emotional connection. Sensitive and imaginative, they thrive in supportive environments and bring softness and depth wherever they go.",
  Monkey: "Clever, playful, and inventive. Monkeys solve problems no one else can crack and keep the people around them laughing. Curious and adaptable, they get bored easily and need mental stimulation to stay grounded.",
  Rooster: "Observant, hardworking, and honest. Roosters show up prepared and notice every detail. They value precision, order, and integrity — and they're not afraid to speak up when something's off.",
  Dog: "Loyal, fair, and protective. Dogs are the friends who stand by you when it counts. Honest, principled, and quick to defend the underdog, they care more about doing right than looking right.",
  Pig: "Generous, sincere, and easygoing. Pigs enjoy life and treat people with genuine kindness. They're warm, indulgent in the best way, and surprisingly resilient — soft on the outside, steady on the inside.",
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
              {(() => {
                const sec = secondaryLifePath(results.lifePath);
                if (!sec) return null;
                return (
                  <div className="mt-5 pt-5 border-t border-border">
                    <p className="text-[10px] font-mono uppercase tracking-[0.25em] text-muted-foreground mb-2">
                      Secondary · {sec.number}
                    </p>
                    <p className="text-sm text-muted-foreground leading-relaxed">
                      {sec.description}
                    </p>
                  </div>
                );
              })()}
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
            {(() => {
              const sign = results.sign;
              return (Object.keys(elementMeaning) as Array<keyof typeof elementMeaning>).map(
                (el) => (
                  <div
                    key={el}
                    className={`bg-background p-5 border border-border rounded-lg ${
                      sign.element === el ? "ring-1 ring-primary/40" : ""
                    }`}
                  >
                    <p
                      className={`text-[10px] font-mono uppercase tracking-[0.25em] mb-1 ${elementClass[el]}`}
                    >
                      {el} {sign.element === el ? "• Your element" : ""}
                    </p>
                    <p className="text-sm text-muted-foreground">
                      {elementMeaning[el]}
                    </p>
                  </div>
                ),
              );
            })()}
          </div>
        )}
      </div>
    </section>
  );
}
