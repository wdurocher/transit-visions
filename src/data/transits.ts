import saturnImg from "@/assets/saturn.jpg";
import jupiterImg from "@/assets/jupiter.jpg";
import marsImg from "@/assets/mars.jpg";
import mercuryImg from "@/assets/mercury.jpg";
import venusImg from "@/assets/venus.jpg";
import moonImg from "@/assets/moon.jpg";
import neptuneImg from "@/assets/neptune.jpg";

export type Transit = {
  slug: string;
  planet: string;
  glyph: string;
  title: string;
  sign: string;
  status: "Direct" | "Retrograde" | "Stationary" | "Conjunction" | "Opposition";
  window: string;
  short: string;
  long: string;
  themes: string[];
  affects: { area: string; note: string }[];
  image: string;
  color: string;
};

export const planetImages: Record<string, string> = {
  Saturn: saturnImg,
  Jupiter: jupiterImg,
  Mars: marsImg,
  Mercury: mercuryImg,
  Venus: venusImg,
  Moon: moonImg,
  Neptune: neptuneImg,
};

export const transits: Transit[] = [
  {
    slug: "saturn-conjunct-neptune-aries",
    planet: "Saturn",
    glyph: "♄",
    title: "Saturn Conjunct Neptune in Aries",
    sign: "Aries",
    status: "Conjunction",
    window: "Exact: Feb 20 & Aug 6, 2026 — within orb through Oct 2026",
    short:
      "Saturn (reality, structure) and Neptune (dreams, ideals) meet in Aries (identity, new starts) — a once-every-36-years alignment forcing dreams to either prove themselves or dissolve.",
    long:
      "Saturn and Neptune only conjoin every ~36 years, and this is the first time they meet in Aries since 1846. Saturn is the planet of hard limits, accountability, and time; Neptune rules imagination, illusion, and what cannot be measured. When they sit on top of each other, vague visions either get built into something real or they evaporate. In Aries — the sign of will, courage, and beginnings — the question becomes personal: who are you actually willing to become, and what fantasy about yourself are you ready to let go of? On May 19, 2026 the two are roughly 7° apart and tightening, so the pressure is already on.",
    themes: ["Reality-checking your dreams", "Identity reset", "Spiritual discipline"],
    affects: [
      { area: "Identity", note: "Self-images that aren't true to you fall apart. Build a smaller, realer one." },
      { area: "Vision", note: "Long-held dreams need a first concrete step, not another draft." },
      { area: "Faith", note: "Beliefs get tested. What survives is what you actually live by." },
    ],
    image: saturnImg,
    color: "#d4b48a",
  },
  {
    slug: "jupiter-in-cancer",
    planet: "Jupiter",
    glyph: "♃",
    title: "Jupiter in Cancer",
    sign: "Cancer",
    status: "Direct",
    window: "Jun 30, 2025 — Jun 30, 2026",
    short:
      "Jupiter (growth, luck) is exalted in Cancer (home, family, emotional roots). One of the most generous yearly transits — your inner life, household, and sense of belonging expand.",
    long:
      "Astrologers say Jupiter is 'exalted' in Cancer — meaning it works at its very best here. Jupiter wants to grow and protect; Cancer cares about home, family, and feeling safe. Together this is a 12-month window where things tied to roots tend to flourish: moving house, starting or expanding a family, healing with parents, deepening close friendships, or simply feeling more emotionally generous. By mid-May 2026 Jupiter is well into its run through Cancer and starting to wind down — use the remaining weeks to lock in any home, family, or emotional-foundation projects.",
    themes: ["Home expansion", "Emotional generosity", "Family healing"],
    affects: [
      { area: "Home", note: "Strong window to move, renovate, or invest in where you live." },
      { area: "Family", note: "Old tensions with parents or siblings ease if you're willing to talk." },
      { area: "Inner life", note: "Self-care that actually nurtures (not just performs) pays off." },
    ],
    image: jupiterImg,
    color: "#d8a96a",
  },
  {
    slug: "uranus-in-gemini",
    planet: "Uranus",
    glyph: "♅",
    title: "Uranus in Gemini",
    sign: "Gemini",
    status: "Direct",
    window: "Apr 25, 2026 — May 22, 2033",
    short:
      "Uranus (sudden change, technology) just entered Gemini (communication, media, ideas) for the first time since 1949 — expect a 7-year revolution in how we talk, learn, and connect.",
    long:
      "Uranus is the planet of disruption and breakthroughs, and it only changes signs every 7 years. It moved into Gemini in late April 2026 — its first visit since 1942–1949, a stretch that produced the transistor, modern computing, and the early information age. Gemini rules language, short-form media, schools, siblings, and how ideas travel. Expect the next seven years to scramble communication itself: new platforms, new ways of writing, AI-shaped language, sudden shifts in education and news. On a personal level, your own thinking and speaking style is about to evolve faster than you're used to.",
    themes: ["Communication revolution", "AI and language", "Restless thinking"],
    affects: [
      { area: "Tech", note: "New tools for writing, learning, and connecting arrive faster than you can adopt them. Pick carefully." },
      { area: "Education", note: "Old curricula crack. Self-teaching and short courses gain ground." },
      { area: "Mind", note: "You may feel mentally restless. Build one steady thinking practice (writing, reading, walks)." },
    ],
    image: jupiterImg,
    color: "#9bb8d4",
  },
  {
    slug: "pluto-retrograde-aquarius",
    planet: "Pluto",
    glyph: "♇",
    title: "Pluto Retrograde in Aquarius",
    sign: "Aquarius",
    status: "Retrograde",
    window: "May 3 — Oct 13, 2026",
    short:
      "Pluto (deep transformation, power) turns retrograde in Aquarius (society, networks, systems) — a five-month look back at what collective structures actually need to die.",
    long:
      "Pluto only moves about 2° a year, so its retrograde isn't a quick shake-up — it's a slow internal review. In Aquarius, the sign that rules groups, technology, governments, and the future, Pluto is already rewriting how power is organized. The retrograde (May 3 to Oct 13, 2026) pulls the lens inward: which systems in your own life — friend groups, online communities, jobs, institutions you depend on — are quietly outdated or built on someone else's terms? Don't try to blow them up. Notice, name, and quietly withdraw your energy from what's hollow.",
    themes: ["Power review", "Systems audit", "Quiet exit"],
    affects: [
      { area: "Community", note: "Friend groups and networks get a quiet audit. Some loosen naturally." },
      { area: "Work", note: "You see the politics underneath your industry more clearly. Don't react yet — observe." },
      { area: "Self", note: "Old roles you played in groups feel costume-like. Let them go without drama." },
    ],
    image: neptuneImg,
    color: "#7a5a9b",
  },
  {
    slug: "mercury-in-gemini",
    planet: "Mercury",
    glyph: "☿",
    title: "Mercury in Gemini",
    sign: "Gemini",
    status: "Direct",
    window: "May 11 — Jul 28, 2026",
    short:
      "Mercury (thinking, communication) is at home in Gemini — fast, curious, and great for writing, learning, and short conversations. (Mercury joins Uranus here too.)",
    long:
      "Mercury rules Gemini, so it operates at full power here: thoughts move quickly, you can juggle more conversations, and writing or learning feels easier. The twist this year: Uranus has just entered Gemini, so Mercury is brushing past it — expect unusually original ideas, sudden insights, and a tendency to talk faster than you think. Capture the good ideas in writing before they vanish, and slow down before sending anything sharp. An unusually long stay (through late July) thanks to an upcoming Mercury retrograde in July gives this transit extra weight.",
    themes: ["Quick thinking", "Original ideas", "Information overload"],
    affects: [
      { area: "Writing", note: "Strong window to draft, brainstorm, and outline. Edit later." },
      { area: "Conversation", note: "Listen for ideas, not just words. People surprise you." },
      { area: "Focus", note: "Pick two threads at most. Everything else is distraction." },
    ],
    image: mercuryImg,
    color: "#bdbdbd",
  },
  {
    slug: "venus-in-cancer",
    planet: "Venus",
    glyph: "♀",
    title: "Venus in Cancer",
    sign: "Cancer",
    status: "Direct",
    window: "May 16 — Jun 9, 2026",
    short:
      "Venus (love, comfort, values) in Cancer (home, care, nostalgia) softens the mood. Affection shows up as cooking, checking in, and protecting the people you love.",
    long:
      "Venus is happy in Cancer. The sign brings out Venus's nurturing side: love feels like being fed, remembered, and protected rather than chased or impressed. Style turns cozy and a little nostalgic, and you may suddenly want to redecorate, host, or reconnect with family. With Jupiter also in Cancer right now, the home and emotional themes are doubled — a strong few weeks to invest in people and places that already feel safe.",
    themes: ["Tender affection", "Home as love language", "Nostalgia"],
    affects: [
      { area: "Relationships", note: "Small caring acts land harder than grand gestures." },
      { area: "Home", note: "Good window to host, cook, or upgrade the space you actually live in." },
      { area: "Memory", note: "Old photos and old contacts may resurface. Reach out when it feels right." },
    ],
    image: venusImg,
    color: "#e6cfa6",
  },
  {
    slug: "mars-in-taurus",
    planet: "Mars",
    glyph: "♂",
    title: "Mars in Taurus",
    sign: "Taurus",
    status: "Direct",
    window: "Apr 22 — Jun 17, 2026",
    short:
      "Mars (drive, action) in Taurus (body, money, patience) slows you down on purpose — steady effort beats fast bursts. Best used for building, not blitzing.",
    long:
      "Mars in Taurus is often called Mars in 'detriment' — meaning Mars is uncomfortable here. Mars wants speed; Taurus wants to take its time. The trick is to use the friction instead of fighting it: this is excellent for slow, physical, repetitive work — training, building, saving, fixing things. Push for instant results and you'll get stubbornness (yours and other people's). Commit to a small daily routine and you'll be surprised by what compounds over these eight weeks.",
    themes: ["Steady effort", "Physical building", "Stubborn patience"],
    affects: [
      { area: "Fitness", note: "Strength and endurance training pay off. Skip novelty workouts." },
      { area: "Money", note: "Slow, boring saving and earning moves work. Avoid impulse spends." },
      { area: "Projects", note: "Pick one thing and grind. Don't start three." },
    ],
    image: marsImg,
    color: "#c46a3f",
  },
];

export const featuredTransit = transits[0];