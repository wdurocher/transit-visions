import { createFileRoute, Link } from "@tanstack/react-router";

export const Route = createFileRoute("/about")({
  head: () => ({
    meta: [
      { title: "Info — Zodiac17" },
      {
        name: "description",
        content:
          "How Zodiac17 reads the sky, plus a plain-language guide to reading a birth chart.",
      },
      { property: "og:title", content: "Info — Zodiac17" },
      {
        property: "og:description",
        content: "Our method, and how to read a birth chart.",
      },
    ],
  }),
  component: AboutPage,
});

type Step = { kicker: string; title: string; body: string };

const fundamentals: Step[] = [
  {
    kicker: "Step 1",
    title: "The Sun — your outward self",
    body:
      "The Sun is the most visible part of you: the personality you express out loud, the way you take up space. Note the sign your Sun sits in (your characteristic) and the house it falls in (the area of life where you most need to shine).",
  },
  {
    kicker: "Step 2",
    title: "The Moon — your inward self",
    body:
      "The Moon is your private interior — moods, instincts, what makes you feel safe. Write down the sign (how you process feeling) and house (the area of life where your emotional needs are centred).",
  },
  {
    kicker: "Step 3",
    title: "The Ascendant — who you're becoming",
    body:
      "Also called the Rising Sign, this is the sign on the eastern horizon at your moment of birth. It only has a sign, not a house — it begins the 1st house. Read it as the qualities life is asking you to develop, the persona that grows in over time.",
  },
  {
    kicker: "Step 4",
    title: "The Chart Ruler — your life's direction",
    body:
      "The Chart Ruler is the planet that rules your Ascendant sign (for example, Mars rules Aries; Venus rules Taurus and Libra). Its sign and house show what kind of experiences shape who you're becoming, and through which area of life.",
  },
];

const layers = [
  { name: "Inner planets", planets: "Mercury · Venus · Mars", note: "How you think, love, and act day to day." },
  { name: "Middle planets", planets: "Jupiter · Saturn", note: "Where you grow, and where you face limits." },
  { name: "Outer planets", planets: "Uranus · Neptune", note: "Generational shifts: freedom, imagination, dissolution." },
  { name: "Deep layer", planets: "Chiron · Pluto", note: "Core wound and the slow, deep transformations." },
];

function AboutPage() {
  return (
    <>
      <section className="py-24">
        <div className="max-w-3xl mx-auto px-6 space-y-10">
          <p className="text-[10px] font-mono uppercase tracking-[0.3em] text-primary">Info</p>
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

      <section className="py-20 border-t border-border">
        <div className="max-w-4xl mx-auto px-6">
          <header className="mb-14 border-b border-border pb-10">
            <p className="text-[10px] font-mono uppercase tracking-[0.3em] text-primary mb-6">
              Foundations
            </p>
            <h2 className="text-4xl md:text-6xl font-serif italic text-balance leading-[1.05] mb-6">
              How to read a birth chart
            </h2>
            <p className="max-w-[64ch] text-lg text-muted-foreground text-pretty">
              A birth chart looks like a wheel cut into twelve slices, with strange symbols
              scattered around it. Underneath the visual, the structure is simple. Three things
              are happening, and once you can name them, the rest reads itself.
            </p>
          </header>

          <section className="mb-16 grid sm:grid-cols-3 gap-px bg-border rounded-lg overflow-hidden ring-1 ring-border">
            <div className="bg-background p-6">
              <p className="text-[10px] font-mono uppercase tracking-[0.25em] text-primary mb-3">Houses</p>
              <p className="text-lg font-serif italic mb-2">Areas of life</p>
              <p className="text-sm text-muted-foreground leading-relaxed">
                The twelve numbered slices. Each one stands for a different department of your
                life: self, money, communication, home, creativity, work, relationships, and so on.
              </p>
            </div>
            <div className="bg-background p-6">
              <p className="text-[10px] font-mono uppercase tracking-[0.25em] text-primary mb-3">Signs</p>
              <p className="text-lg font-serif italic mb-2">Characteristics</p>
              <p className="text-sm text-muted-foreground leading-relaxed">
                The ring around the outside. A sign describes the <em>quality</em> or flavour
                applied to whatever it touches — bold like Aries, careful like Virgo.
              </p>
            </div>
            <div className="bg-background p-6">
              <p className="text-[10px] font-mono uppercase tracking-[0.25em] text-primary mb-3">Planets</p>
              <p className="text-lg font-serif italic mb-2">Experiences</p>
              <p className="text-sm text-muted-foreground leading-relaxed">
                The little symbols inside the wheel. Each planet is a kind of experience that
                shapes your personality — love, drive, structure, imagination.
              </p>
            </div>
          </section>

          <section className="mb-20">
            <p className="text-[10px] font-mono uppercase tracking-[0.3em] text-primary mb-3">The formula</p>
            <p className="text-2xl md:text-3xl font-serif italic leading-snug text-pretty">
              A planet (experience) in a sign (characteristic) in a house (area of life).
            </p>
            <p className="mt-4 text-muted-foreground leading-relaxed max-w-[64ch]">
              Example: <span className="text-foreground">Mars (drive) in Leo (bold, creative) in the 10th house (career)</span>
              {" "}reads as: "I'm driven to be visible and original in my work."
            </p>
          </section>

          <section className="mb-20">
            <h3 className="text-2xl md:text-3xl font-serif italic mb-3">Start with the four fundamentals</h3>
            <p className="text-muted-foreground mb-10 max-w-[64ch] leading-relaxed">
              You don't need to read every planet to understand a chart. The Sun, Moon,
              Ascendant, and Chart Ruler give you the bulk of someone's personality and life
              direction. Work through these four first.
            </p>
            <ol className="space-y-8">
              {fundamentals.map((s) => (
                <li
                  key={s.title}
                  className="grid md:grid-cols-[110px_1fr] gap-4 md:gap-8 border-l border-border pl-6 md:border-l-0 md:pl-0"
                >
                  <p className="text-[10px] font-mono uppercase tracking-[0.3em] text-primary md:text-right pt-1">
                    {s.kicker}
                  </p>
                  <div>
                    <h4 className="text-xl font-serif italic mb-2">{s.title}</h4>
                    <p className="text-sm text-foreground/85 leading-relaxed">{s.body}</p>
                  </div>
                </li>
              ))}
            </ol>
          </section>

          <section className="mb-20">
            <h3 className="text-2xl md:text-3xl font-serif italic mb-3">Then peel the onion</h3>
            <p className="text-muted-foreground mb-8 max-w-[64ch] leading-relaxed">
              Once you have the four fundamentals, work outward. The closer a planet is to the
              Sun, the more obviously its energy shows up in your day-to-day. The further out,
              the more quiet and structural its influence — generational instead of personal.
            </p>
            <div className="grid sm:grid-cols-2 gap-px bg-border rounded-lg overflow-hidden ring-1 ring-border">
              {layers.map((l) => (
                <div key={l.name} className="bg-background p-6">
                  <p className="text-[10px] font-mono uppercase tracking-[0.25em] text-primary mb-2">{l.name}</p>
                  <p className="text-base font-serif italic mb-2">{l.planets}</p>
                  <p className="text-sm text-muted-foreground leading-relaxed">{l.note}</p>
                </div>
              ))}
            </div>
            <p className="mt-6 text-sm text-muted-foreground italic">
              One bonus rule: any planet sitting in your 1st house tends to come through
              strongly in your personality, regardless of how far out it is.
            </p>
          </section>

          <section className="mb-20">
            <h3 className="text-2xl md:text-3xl font-serif italic mb-3">Aspects, briefly</h3>
            <p className="text-muted-foreground max-w-[64ch] leading-relaxed">
              The lines crossing the middle of the chart are <em>aspects</em> — geometric angles
              between planets. A <span className="text-foreground">conjunction</span> fuses two
              planets; a <span className="text-foreground">trine</span> or{" "}
              <span className="text-foreground">sextile</span> lets them cooperate easily; a{" "}
              <span className="text-foreground">square</span> or{" "}
              <span className="text-foreground">opposition</span> creates tension that demands
              growth. Aspects are the second pass — read the fundamentals first.
            </p>
          </section>

          <aside className="p-8 rounded-lg ring-1 ring-border bg-card/40">
            <p className="text-[10px] font-mono uppercase tracking-[0.3em] text-primary mb-3">Keep going</p>
            <p className="text-sm text-muted-foreground leading-relaxed">
              Look up what each placement means using the{" "}
              <Link to="/signs" className="underline hover:text-foreground">signs</Link>,{" "}
              <Link to="/houses" className="underline hover:text-foreground">houses</Link>, and{" "}
              <Link to="/library" className="underline hover:text-foreground">planet library</Link>.
              If your chart looks different from horoscopes you've read before, you might be
              looking at a <Link to="/learn/sidereal" className="underline hover:text-foreground">sidereal chart</Link> — here's why the two systems disagree.
            </p>
            <p className="mt-5 text-xs text-muted-foreground">
              Adapted from{" "}
              <a
                href="https://masteringthezodiac.com/how-to-read-a-birth-chart"
                target="_blank"
                rel="noreferrer"
                className="underline hover:text-foreground"
              >
                Mastering the Zodiac · How to Read a Birth Chart
              </a>
              .
            </p>
          </aside>
        </div>
      </section>
    </>
  );
}