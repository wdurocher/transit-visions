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
    title: "Saturn Enters Pisces",
    sign: "Pisces",
    status: "Direct",
    window: "Mar 7, 2023 — Feb 13, 2026",
    short:
      "Saturn (structure, discipline) spends about three years in Pisces (imagination, spirituality), asking you to give real form to your beliefs and creative life.",
    long:
      "Saturn rules limits, time, and responsibility. Pisces rules dreams, intuition, and what has no clear edges. When Saturn moves through Pisces, the two energies meet: vague hopes get tested, and spiritual or creative ideas only stick around if you build a real routine around them. In practical terms, expect to be asked: what do you actually believe, what are you avoiding, and what daily structure would let your inner life grow up?",
    themes: ["Structured spirituality", "Creative discipline", "Dissolving illusions"],
    affects: [
      { area: "Work", note: "Weak systems and shortcuts tend to break. Anything built carefully gets stronger." },
      { area: "Inner life", note: "Spiritual or creative practice needs a regular schedule to actually pay off." },
      { area: "Relationships", note: "You see people more clearly — fantasies fade, real qualities stay." },
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
      "Mercury (thinking, talking) in Sagittarius (big-picture, beliefs) makes conversations more ambitious and opinionated, but easier to skip the details.",
    long:
      "Mercury controls how you think, write, and exchange information. Sagittarius is the sign of meaning, travel, and big ideas. Together, your thinking zooms out: you see patterns, want to share theories, and feel inspired to plan trips or take a class. The trade-off is accuracy — it's easy to overstate things or skim past fine print. Aim for the big idea, then double-check the specifics.",
    themes: ["Philosophical thinking", "Travel plans", "Optimism inflation"],
    affects: [
      { area: "Writing", note: "Good time to draft a big idea or outline; edit for accuracy later." },
      { area: "Travel", note: "Plans expand easily. Leave room in the schedule for changes." },
      { area: "Negotiations", note: "Read contracts twice and ask for specifics before agreeing." },
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
      "Mars (drive, action) appears to move backward through Leo (confidence, recognition). Energy turns inward — better for review than for launching.",
    long:
      "A retrograde is when a planet looks like it's moving backward from Earth. Mars only does this every two years or so. In Leo — the sign tied to ego, creativity, and being seen — your usual drive to perform slows down. This is a good window to revisit a project, finish what's half-done, and ask what you're really trying to prove. It's a poor window for picking fights, launching something new, or pushing your body too hard.",
    themes: ["Ego recalibration", "Held-back action", "Re-do, not new-do"],
    affects: [
      { area: "Creative work", note: "Revise and refine existing projects; hold big launches for after." },
      { area: "Conflict", note: "Old arguments come back up. Aim to resolve, not restart, them." },
      { area: "Body", note: "Dial training back ~20%. Injuries are more likely when you push too hard." },
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
      "Jupiter (growth) and Uranus (sudden change) line up in Taurus (money, body, possessions). Expect unexpected openings, especially around income and tech.",
    long:
      "A conjunction means two planets sit at almost the same point in the sky. Jupiter and Uranus only meet up roughly every 14 years, so this is a notable alignment. Jupiter expands whatever it touches; Uranus brings surprises and breakthroughs. In Taurus — the sign of money, work, and the physical body — things that felt stuck around resources can suddenly move. If you've been preparing quietly for an opportunity, this is the kind of window where it actually lands, often from an unexpected direction.",
    themes: ["Breakthrough", "Resource shift", "Unexpected luck"],
    affects: [
      { area: "Finances", note: "Watch for a new income stream, offer, or unexpected refund." },
      { area: "Technology", note: "A tool, platform, or update you've been avoiding may turn out to help." },
      { area: "Body", note: "Physical energy returns — a good time to restart movement habits." },
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
      "Venus (love, beauty, values) in Virgo (detail, service) makes affection more practical: people show love through small, useful acts rather than big gestures.",
    long:
      "Astrologers say Venus is in 'fall' in Virgo, which just means it's not in its most comfortable sign — but it still works, just differently. Romance shows up as helpfulness: doing the dishes, remembering the appointment, fixing the small thing. Style trends cleaner and more functional. It's a strong few weeks to edit what you already own, your wardrobe, or a project — and a weaker one for impulse upgrades.",
    themes: ["Precise affection", "Editing", "Practical beauty"],
    affects: [
      { area: "Relationships", note: "Notice acts of service — yours and theirs — over big romantic moments." },
      { area: "Style", note: "Edit before adding. Better materials beat more items." },
      { area: "Self-image", note: "Watch the inner critic. Being useful doesn't mean you have to be perfect." },
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
      "Neptune (dreams, ideals) spends about 14 years in Aries (identity, action). Expect collective questions about who we are and how we start over.",
    long:
      "Neptune is one of the slowest planets — it stays in a sign for roughly 14 years, so its transits shape whole eras, not just personal weeks. It last entered Aries in 1861. Aries rules identity, willpower, and starting fresh; Neptune softens and blurs whatever it touches. Together, expect a long stretch where the idea of a fixed 'self' feels less solid, new spiritual and political movements form around fresh beginnings, and decisive action can feel oddly foggy. Slow down before making big identity moves.",
    themes: ["Dissolving identity", "Spiritual restlessness", "Fresh myth"],
    affects: [
      { area: "Culture", note: "Expect new movements asking 'who are we now?' to gain traction." },
      { area: "Inner life", note: "Old self-images may blur. Don't rush to replace them with a label." },
      { area: "Action", note: "Decisions can feel foggy. Sleep on big choices before committing." },
    ],
    image: neptuneImg,
    color: "#5b8acb",
  },
];

export const featuredTransit = transits[0];