import { createFileRoute, Link } from "@tanstack/react-router";

export const Route = createFileRoute("/learn/sidereal")({
  head: () => ({
    meta: [
      { title: "Sidereal vs Tropical Astrology — Zodiac17" },
      {
        name: "description",
        content:
          "Why your Western horoscope and a Vedic chart disagree by a whole sign — precession, ayanamsas, and the 13th sign Ophiuchus.",
      },
      { property: "og:title", content: "Sidereal vs Tropical Astrology" },
      {
        property: "og:description",
        content:
          "The two zodiacs explained: seasons vs visible sky, why they've drifted ~24°, and what each system is actually good at.",
      },
    ],
  }),
  component: SiderealPage,
});

type Row = {
  sign: string;
  tropical: string;
  lahiri: string;
  fagan: string;
  iau: string;
};

const dateTable: Row[] = [
  { sign: "Aries",       tropical: "Mar 21 – Apr 19", lahiri: "Apr 14 – May 14", fagan: "Apr 15 – May 15", iau: "Apr 18 – May 13" },
  { sign: "Taurus",      tropical: "Apr 20 – May 20", lahiri: "May 15 – Jun 15", fagan: "May 16 – Jun 16", iau: "May 13 – Jun 21" },
  { sign: "Gemini",      tropical: "May 21 – Jun 20", lahiri: "Jun 16 – Jul 16", fagan: "Jun 17 – Jul 17", iau: "Jun 21 – Jul 20" },
  { sign: "Cancer",      tropical: "Jun 21 – Jul 22", lahiri: "Jul 17 – Aug 16", fagan: "Jul 18 – Aug 17", iau: "Jul 20 – Aug 10" },
  { sign: "Leo",         tropical: "Jul 23 – Aug 22", lahiri: "Aug 17 – Sep 16", fagan: "Aug 18 – Sep 17", iau: "Aug 10 – Sep 16" },
  { sign: "Virgo",       tropical: "Aug 23 – Sep 22", lahiri: "Sep 17 – Oct 17", fagan: "Sep 18 – Oct 18", iau: "Sep 16 – Oct 30" },
  { sign: "Libra",       tropical: "Sep 23 – Oct 22", lahiri: "Oct 18 – Nov 16", fagan: "Oct 19 – Nov 17", iau: "Oct 30 – Nov 23" },
  { sign: "Scorpio",     tropical: "Oct 23 – Nov 21", lahiri: "Nov 17 – Dec 15", fagan: "Nov 18 – Dec 16", iau: "Nov 23 – Nov 29" },
  { sign: "Ophiuchus",   tropical: "—",                lahiri: "—",                fagan: "—",                iau: "Nov 29 – Dec 17" },
  { sign: "Sagittarius", tropical: "Nov 22 – Dec 21", lahiri: "Dec 16 – Jan 14", fagan: "Dec 17 – Jan 15", iau: "Dec 17 – Jan 20" },
  { sign: "Capricorn",   tropical: "Dec 22 – Jan 19", lahiri: "Jan 15 – Feb 12", fagan: "Jan 16 – Feb 13", iau: "Jan 20 – Feb 16" },
  { sign: "Aquarius",    tropical: "Jan 20 – Feb 18", lahiri: "Feb 13 – Mar 14", fagan: "Feb 14 – Mar 15", iau: "Feb 16 – Mar 11" },
  { sign: "Pisces",      tropical: "Feb 19 – Mar 20", lahiri: "Mar 15 – Apr 13", fagan: "Mar 16 – Apr 14", iau: "Mar 11 – Apr 18" },
];

const ayanamsas = [
  { name: "Lahiri",        use: "Most popular in Vedic / Hindu astrology" },
  { name: "Fagan-Bradley", use: "Most popular among Western sidereal astrologers" },
  { name: "IAU",           use: "Uses the actual constellation sizes; includes Ophiuchus" },
  { name: "Midpoint",      use: "Mastering the Zodiac's system, true-sky and ecliptic-aligned" },
];

function SiderealPage() {
  return (
    <section className="py-20">
      <div className="max-w-4xl mx-auto px-6">
        <header className="mb-14 border-b border-border pb-10">
          <p className="text-[10px] font-mono uppercase tracking-[0.3em] text-primary mb-6">
            Learn · The Two Zodiacs
          </p>
          <h1 className="text-4xl md:text-6xl font-serif italic text-balance leading-[1.05] mb-6">
            Sidereal vs Tropical
          </h1>
          <p className="max-w-[64ch] text-lg text-muted-foreground text-pretty">
            If a Western horoscope says you're a Taurus and a Vedic astrologer insists you're
            an Aries, neither of them is wrong. They're using two different zodiacs — and they
            disagree by almost a whole sign. Here's why.
          </p>
        </header>

        <section className="mb-16 grid sm:grid-cols-2 gap-px bg-border rounded-lg overflow-hidden ring-1 ring-border">
          <div className="bg-background p-6">
            <p className="text-[10px] font-mono uppercase tracking-[0.25em] text-primary mb-3">
              Tropical
            </p>
            <p className="text-lg font-serif italic mb-2">Based on the seasons</p>
            <p className="text-sm text-muted-foreground leading-relaxed">
              Aries begins at the spring equinox. The zodiac is anchored to Earth's tilt, not
              to the constellations. This is the system used by most Western horoscopes.
            </p>
          </div>
          <div className="bg-background p-6">
            <p className="text-[10px] font-mono uppercase tracking-[0.25em] text-primary mb-3">
              Sidereal
            </p>
            <p className="text-lg font-serif italic mb-2">Based on the visible sky</p>
            <p className="text-sm text-muted-foreground leading-relaxed">
              Aries begins where the constellation Aries actually appears. Used in Vedic
              (Indian) astrology and by Western astrologers who want to track the real stars.
            </p>
          </div>
        </section>

        <section className="mb-20">
          <h2 className="text-2xl md:text-3xl font-serif italic mb-3">
            Why they've drifted apart
          </h2>
          <p className="text-muted-foreground mb-4 max-w-[64ch] leading-relaxed">
            About two thousand years ago, the two zodiacs lined up. The spring equinox really
            did happen with the Sun in the constellation Aries. Then{" "}
            <span className="text-foreground italic">precession</span> took over.
          </p>
          <p className="text-muted-foreground max-w-[64ch] leading-relaxed">
            Earth wobbles on its axis like a slow spinning top, completing one full wobble
            roughly every 26,000 years. That tiny wobble shifts the equinox point against the
            background stars by about one degree every 72 years. Over twenty centuries, that
            adds up to roughly 24 degrees — almost an entire sign. The seasons stayed put;
            the stars moved on.
          </p>
        </section>

        <section className="mb-20">
          <h2 className="text-2xl md:text-3xl font-serif italic mb-3">
            Which is "more accurate"?
          </h2>
          <p className="text-muted-foreground max-w-[64ch] leading-relaxed">
            Both. They measure different things. Tropical describes your relationship to the
            yearly cycle of seasons — useful for the practical, "3D" parts of personality.
            Sidereal describes your relationship to the actual stars overhead at birth —
            often used to describe the essence or soul layer. Many serious astrologers read
            both, looking for where the two charts agree and where they diverge.
          </p>
        </section>

        <section className="mb-20">
          <h2 className="text-2xl md:text-3xl font-serif italic mb-3">
            Where sidereal starts — the ayanamsa
          </h2>
          <p className="text-muted-foreground mb-8 max-w-[64ch] leading-relaxed">
            Because the sky is interpretable, there are several sidereal systems. The starting
            point of the zodiac is called the <span className="italic">ayanamsa</span>. The
            most common ones:
          </p>
          <div className="grid sm:grid-cols-2 gap-px bg-border rounded-lg overflow-hidden ring-1 ring-border">
            {ayanamsas.map((a) => (
              <div key={a.name} className="bg-background p-5">
                <p className="text-base font-serif italic mb-1">{a.name}</p>
                <p className="text-sm text-muted-foreground leading-relaxed">{a.use}</p>
              </div>
            ))}
          </div>
        </section>

        <section className="mb-20">
          <h2 className="text-2xl md:text-3xl font-serif italic mb-3">
            And the 13th sign — Ophiuchus
          </h2>
          <p className="text-muted-foreground max-w-[64ch] leading-relaxed">
            There's a constellation called Ophiuchus that sits on the ecliptic — the path the
            Sun and planets travel across the sky — between Scorpio and Sagittarius. The
            original twelve-sign zodiac left it out because thirteen doesn't divide cleanly.
            True-sky sidereal systems (IAU and Midpoint) put it back in. If you were born
            roughly between Nov 29 and Dec 17, you'd have an Ophiuchus Sun in those systems.
          </p>
        </section>

        <section className="mb-12">
          <h2 className="text-2xl md:text-3xl font-serif italic mb-6">
            Sun-sign dates across systems
          </h2>
          <div className="overflow-x-auto rounded-lg ring-1 ring-border">
            <table className="w-full text-sm">
              <thead>
                <tr className="bg-card/60 text-left">
                  <th className="p-3 font-mono text-[10px] uppercase tracking-[0.2em] text-primary">Sign</th>
                  <th className="p-3 font-mono text-[10px] uppercase tracking-[0.2em] text-primary">Tropical</th>
                  <th className="p-3 font-mono text-[10px] uppercase tracking-[0.2em] text-primary">Lahiri</th>
                  <th className="p-3 font-mono text-[10px] uppercase tracking-[0.2em] text-primary">Fagan-Bradley</th>
                  <th className="p-3 font-mono text-[10px] uppercase tracking-[0.2em] text-primary">IAU</th>
                </tr>
              </thead>
              <tbody>
                {dateTable.map((r) => (
                  <tr key={r.sign} className="border-t border-border">
                    <td className="p-3 font-serif italic">{r.sign}</td>
                    <td className="p-3 text-muted-foreground whitespace-nowrap">{r.tropical}</td>
                    <td className="p-3 text-muted-foreground whitespace-nowrap">{r.lahiri}</td>
                    <td className="p-3 text-muted-foreground whitespace-nowrap">{r.fagan}</td>
                    <td className="p-3 text-muted-foreground whitespace-nowrap">{r.iau}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          <p className="mt-4 text-xs text-muted-foreground">
            Dates use J2000 positions (Jan 1, 2000) and are in GMT. Days right at a boundary
            blend both signs.
          </p>
        </section>

        <aside className="p-8 rounded-lg ring-1 ring-border bg-card/40">
          <p className="text-[10px] font-mono uppercase tracking-[0.3em] text-primary mb-3">
            Next
          </p>
          <p className="text-sm text-muted-foreground leading-relaxed">
            Once you've picked a system, the{" "}
            <Link to="/learn/read-chart" className="underline hover:text-foreground">
              birth chart guide
            </Link>{" "}
            walks you through reading it. The{" "}
            <Link to="/cycles/saturn-taurus" className="underline hover:text-foreground">
              Saturn-in-Taurus cycles page
            </Link>{" "}
            uses sidereal dates if you want to see why the system you choose actually matters.
          </p>
          <p className="mt-5 text-xs text-muted-foreground">
            Adapted from{" "}
            <a
              href="https://masteringthezodiac.com/sidereal-astrology"
              target="_blank"
              rel="noreferrer"
              className="underline hover:text-foreground"
            >
              Mastering the Zodiac · What is Sidereal Astrology?
            </a>
          </p>
        </aside>
      </div>
    </section>
  );
}
