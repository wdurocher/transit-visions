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
    slug: "saturn-in-pisces",
    planet: "Saturn",
    glyph: "♄",
    title: "Saturn Enters the House of Fish",
    sign: "Pisces",
    status: "Direct",
    window: "Mar 7, 2023 — Feb 13, 2026",
    short:
      "The ringed giant begins its slow descent into Pisces, marking a three-year cycle of structured spirituality.",
    long:
      "Saturn — the architect of consequence — moves through the most boundaryless sign of the zodiac. The result is a multi-year reckoning with what we believed, what we surrendered, and where we have been swimming without form. Pisces dissolves; Saturn insists on shape. Expect spiritual practice to be tested by routine, and creative work to demand discipline before it offers transcendence.",
    themes: ["Structured spirituality", "Creative discipline", "Dissolving illusions"],
    affects: [
      { area: "Work", note: "Foundations under review. Sloppy systems will collapse; well-built ones harden." },
      { area: "Inner life", note: "The mystical needs a container. Build one." },
      { area: "Relationships", note: "Idealizations are stripped back to what is actually there." },
    ],
    image: saturnImg,
    color: "#d4b48a",
  },
  {
    slug: "mercury-in-sagittarius",
    planet: "Mercury",
    glyph: "☿",
    title: "Mercury in Sagittarius",
    sign: "Sagittarius",
    status: "Direct",
    window: "Dec 12 — Jan 4",
    short:
      "Communication expands into philosophical territory. Expect bold claims and a disregard for minor details.",
    long:
      "The messenger planet moves through the sign of the seeker. Conversation gets larger, more theoretical, and prone to grand declarations. The upside is vision; the downside is overlooking the small thing that will trip you. Re-read contracts before signing.",
    themes: ["Philosophical thinking", "Travel plans", "Optimism inflation"],
    affects: [
      { area: "Writing", note: "Reach for the bigger argument. Trim later." },
      { area: "Travel", note: "Itineraries open up — leave room for the detour." },
      { area: "Negotiations", note: "Read the fine print twice." },
    ],
    image: mercuryImg,
    color: "#bdbdbd",
  },
  {
    slug: "mars-retrograde-in-leo",
    planet: "Mars",
    glyph: "♂",
    title: "Mars Retrograde in Leo",
    sign: "Leo",
    status: "Retrograde",
    window: "Jan 1 — Feb 24",
    short:
      "Internalized frustration. The drive for performance is redirected inward for deep ego examination.",
    long:
      "Mars rarely turns retrograde, and when it does in Leo, the heat goes underground. Ambition, recognition, the desire to be seen — all of it gets re-routed into a private examination. This is not the season for picking fights or launching premium products; it is the season for asking what you are actually trying to prove.",
    themes: ["Ego recalibration", "Held-back action", "Re-do, not new-do"],
    affects: [
      { area: "Creative work", note: "Revisit, refine, re-stage — don't release." },
      { area: "Conflict", note: "Old arguments resurface. Resolve, don't reignite." },
      { area: "Body", note: "Lower the intensity. Strain shows up as injury this cycle." },
    ],
    image: marsImg,
    color: "#c46a3f",
  },
  {
    slug: "jupiter-conjunct-uranus",
    planet: "Jupiter",
    glyph: "♃",
    title: "Jupiter Conjunct Uranus",
    sign: "Taurus",
    status: "Conjunction",
    window: "Peak: April 20",
    short:
      "Sudden breakthroughs in wealth and technology. A rare alignment of expansion and revolution.",
    long:
      "Jupiter (expansion) and Uranus (disruption) meet in Taurus (matter, money, the body). Conjunctions of these two are rare — roughly every 14 years — and tend to break open whatever feels stuck around resources. The keyword is leverage. Things you've been preparing for finally have the room to land, often through an unexpected channel.",
    themes: ["Breakthrough", "Resource shift", "Unexpected luck"],
    affects: [
      { area: "Finances", note: "Watch for an unusual opening — new income, new tool, new offer." },
      { area: "Technology", note: "An update or platform shift you've been resisting becomes useful." },
      { area: "Body", note: "Energy returns. Use some of it." },
    ],
    image: jupiterImg,
    color: "#d8a96a",
  },
  {
    slug: "venus-in-virgo",
    planet: "Venus",
    glyph: "♀",
    title: "Venus in Virgo",
    sign: "Virgo",
    status: "Direct",
    window: "Aug 4 — Aug 29",
    short:
      "Love finds expression through service and precision. Attention to detail in relationships and a focus on practical beauty.",
    long:
      "Venus is technically in 'fall' in Virgo, which sounds worse than it is. Affection becomes practical: people show love by doing the dishes, fixing the leaky thing, remembering the small detail. Romance is quieter. Aesthetics get cleaner, more functional. A good month to edit, not to add.",
    themes: ["Precise affection", "Editing", "Practical beauty"],
    affects: [
      { area: "Relationships", note: "Acts of service over grand gestures." },
      { area: "Style", note: "Pare back. Quality of materials over quantity." },
      { area: "Self-image", note: "Resist the inner critic. Useful ≠ unworthy." },
    ],
    image: venusImg,
    color: "#e6cfa6",
  },
  {
    slug: "neptune-in-aries",
    planet: "Neptune",
    glyph: "♆",
    title: "Neptune Enters Aries",
    sign: "Aries",
    status: "Direct",
    window: "Mar 30, 2025 — 2039",
    short:
      "A fourteen-year dream of new identity. The collective imagination turns toward fresh beginnings.",
    long:
      "Neptune last entered Aries in 1861. Its passage dissolves whatever Aries normally represents: self, will, first move. Expect a generational softening of certainty about the individual — and a rise in collective spiritual restlessness searching for new beginnings.",
    themes: ["Dissolving identity", "Spiritual restlessness", "Fresh myth"],
    affects: [
      { area: "Culture", note: "New movements form around 'who we are now'." },
      { area: "Inner life", note: "Old self-images blur. Don't rush to replace them." },
      { area: "Action", note: "Decisive moves feel oddly fogged — slow is fine." },
    ],
    image: neptuneImg,
    color: "#5b8acb",
  },
];

export const featuredTransit = transits[0];