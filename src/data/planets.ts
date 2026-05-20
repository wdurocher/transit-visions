import { planetImages } from "@/data/transits";

export type PlanetEntry = {
  name: string;
  glyph: string;
  epithet: string;
  /** One-line essence */
  essence: string;
  /** Longer rephrased meaning */
  meaning: string;
  /** What this planet actually does / shows in a chart */
  shows: string[];
  /** Experience tags */
  experiences: string[];
  /** Day of the week this planet rules, if any */
  rulesDay?: string;
  /** Optional gradient fallback when no image exists */
  fallback: string;
  image?: string;
};

const g = (a: string, b: string) =>
  `radial-gradient(circle at 30% 30%, ${a}, ${b} 70%)`;

export const planets: PlanetEntry[] = [
  {
    name: "Sun",
    glyph: "☉",
    epithet: "The Luminary",
    essence: "Outward awareness and vital life-force.",
    meaning:
      "The Sun is the core of your personality — the steady 'I' behind everything you do. It shows what you're naturally proud of, what you want to be recognised for, and the kind of self-expression that gives you energy instead of draining it. Where your Sun sits by sign and house tells you the part of life where you most need to shine and feel like the main character.",
    shows: [
      "Your core identity and ego",
      "What you're here to develop confidence in",
      "Where you want to be seen and acknowledged",
      "The activities that recharge your vitality",
    ],
    experiences: ["passion", "creativity", "vitality", "focus", "will", "expressiveness"],
    fallback: g("#ffe7a8", "#c79331"),
  },
  {
    name: "Moon",
    glyph: "☽",
    epithet: "The Mirror",
    essence: "Inner awareness and the body's intelligence.",
    meaning:
      "The Moon is your inner world — your moods, instincts, and what makes you feel safe. While the Sun is who you are in public, the Moon is who you are at home, in private, when no one's performing. It shows how you self-soothe, what you need emotionally to feel okay, and the patterns you absorbed from family early in life. It also rules habits, the body's rhythms, and your gut reactions.",
    shows: [
      "Emotional needs and what comforts you",
      "Instinctive reactions and gut feelings",
      "Home life, family, and roots",
      "Daily habits and the body's rhythms",
    ],
    experiences: ["emotion", "nurturance", "receptivity", "security", "memory", "care"],
    fallback: g("#e8edf3", "#8a96a8"),
  },
  {
    name: "Mercury",
    glyph: "☿",
    epithet: "The Messenger",
    essence: "Interactive learning and exchange.",
    meaning:
      "Mercury runs your mind. It shows how you think, how you take in information, how you speak and write, and how you make decisions in everyday situations. It also rules short trips, siblings, schoolwork, contracts, texting, and basically anything involving moving information from point A to point B. When Mercury goes retrograde, communication, tech, and travel are the areas that get glitchy.",
    shows: [
      "How you learn and process information",
      "Your style of speaking and writing",
      "Short trips, errands, and daily logistics",
      "Contracts, messages, and small agreements",
    ],
    experiences: ["curiosity", "thought", "language", "insight", "exchange", "practicality"],
    fallback: g("#cfd2d6", "#6f7378"),
  },
  {
    name: "Venus",
    glyph: "♀",
    epithet: "The Beloved",
    essence: "What we draw close, value, and enjoy.",
    meaning:
      "Venus is about what you love and what you find beautiful. She shows your romantic style — what attracts you, how you flirt, what you want from a partner — and also your relationship to money, possessions, and pleasure in general. Venus rules taste: the clothes, art, food, and aesthetics you naturally gravitate toward. She's also tied to self-worth, because how you value yourself shapes what you'll accept from others.",
    shows: [
      "Romantic style and what you find attractive",
      "Money, income, and material values",
      "Aesthetic taste in art, fashion, and design",
      "Self-worth and what you think you deserve",
    ],
    experiences: ["desire", "pleasure", "beauty", "attraction", "mutuality", "value"],
    fallback: g("#f6dcb5", "#b48244"),
  },
  {
    name: "Mars",
    glyph: "♂",
    epithet: "The Warrior",
    essence: "Self-determined action and drive.",
    meaning:
      "Mars is your drive — the part of you that goes after what it wants. It shows how you take action, how you compete, how you handle anger, and what you're willing to fight for. Mars also rules physical energy, sex drive, and the kind of work that requires effort and follow-through. A strong Mars helps you start things and finish them; a stressed Mars shows up as frustration, burnout, or fights you didn't mean to pick.",
    shows: [
      "How you take action and assert yourself",
      "Anger style and how you handle conflict",
      "Physical energy and sex drive",
      "What you'll fight for and how you compete",
    ],
    experiences: ["drive", "motivation", "courage", "ambition", "intent", "victory"],
    fallback: g("#f4a07a", "#8b3a1f"),
  },
  {
    name: "Jupiter",
    glyph: "♃",
    epithet: "The Benefic",
    essence: "Expansive worldview and possibility.",
    meaning:
      "Jupiter is the planet of growth, luck, and meaning. It shows where life tends to expand for you — where opportunities show up, where you feel optimistic, and where you're naturally generous. Jupiter rules higher education, travel to faraway places, philosophy, religion, and the big-picture beliefs you build your life around. The downside of Jupiter is excess: overpromising, overspending, overeating, or believing your own hype. It moves through one sign per year.",
    shows: [
      "Where you grow and find opportunity",
      "Beliefs, philosophy, and worldview",
      "Higher education and long-distance travel",
      "Where you risk overdoing it",
    ],
    experiences: ["optimism", "wisdom", "opportunity", "adventure", "expansion", "meaning"],
    fallback: g("#f3d39a", "#a06a2a"),
  },
  {
    name: "Saturn",
    glyph: "♄",
    epithet: "The Architect",
    essence: "Structure, time, and earned mastery.",
    meaning:
      "Saturn shows you where your limits are in life — the areas where things take longer, require more effort, and don't come easily. That's not a punishment; it's where you're meant to build real skill. Saturn rules time, discipline, responsibility, authority figures, career structure, and long-term commitments. Saturn lessons feel heavy in the moment, but the things you build under Saturn last. It returns to its starting spot every ~29 years (the famous 'Saturn return' around ages 28-30 and 58-60), and those are the years you're asked to grow up in a specific area.",
    shows: [
      "Where you face limits and have to work harder",
      "Discipline, responsibility, and long-term goals",
      "Career structure and your relationship to authority",
      "The areas where mastery is earned slowly over time",
    ],
    experiences: ["discipline", "patience", "responsibility", "maturity", "perseverance", "structure"],
    fallback: g("#e6caa0", "#7a5a30"),
  },
  {
    name: "Uranus",
    glyph: "♅",
    epithet: "The Liberator",
    essence: "Sudden change and revolutionary insight.",
    meaning:
      "Uranus is the planet of sudden change and the part of you that refuses to fit in. It shows where you need freedom, where your most original ideas come from, and where life is likely to deliver surprises that shake up a stuck situation. Uranus rules technology, science, social movements, and anything that disrupts the status quo. It spends about seven years in each sign, so it shapes whole generations more than individual weeks. When Uranus activates a part of your chart, expect the unexpected — and resist the urge to control it.",
    shows: [
      "Where you need freedom and originality",
      "Sudden change, surprise, and disruption",
      "Technology, innovation, and progressive ideas",
      "The part of you that refuses to conform",
    ],
    experiences: ["freedom", "breakthrough", "revolution", "inspiration", "originality", "awakening"],
    fallback: g("#bfe6e8", "#3a7a8c"),
  },
  {
    name: "Neptune",
    glyph: "♆",
    epithet: "The Dreamer",
    essence: "Dissolution and unconditional acceptance.",
    meaning:
      "Neptune is the planet of dreams, imagination, and what's bigger than you. It shows where you're most inspired, most compassionate, and most artistic — and also where you're most likely to be confused, deceived, or to deceive yourself. Neptune rules film, music, spirituality, addiction, escapism, and the dissolution of boundaries. Where Neptune sits in your chart, things are rarely as solid as they look — which is sometimes magic, sometimes a fog you have to walk through carefully.",
    shows: [
      "Imagination, dreams, and artistic inspiration",
      "Spirituality and the longing for something larger",
      "Where you idealise, romanticise, or get confused",
      "Escapism, addiction, and where boundaries blur",
    ],
    experiences: ["acceptance", "compassion", "vision", "stillness", "faith", "release"],
    fallback: g("#a8c5e8", "#3a5a8c"),
  },
  {
    name: "Pluto",
    glyph: "♇",
    epithet: "The Transformer",
    essence: "Endings, depth, and irreversible change.",
    meaning:
      "Pluto is the planet of deep, permanent change — the kind that strips something down to nothing so it can be rebuilt from scratch. It shows where you're most intense, where you're most afraid to lose control, and where life eventually forces a complete transformation. Pluto rules power, sex, death, secrets, debt, inheritance, and anything that runs underneath the surface. Pluto's process is slow and uncomfortable, but what comes out the other side is more honest and more your own.",
    shows: [
      "Where deep transformation and rebirth happen",
      "Power dynamics and control issues",
      "Hidden, taboo, or buried parts of life",
      "What you obsess over and can't let go of",
    ],
    experiences: ["intensity", "transformation", "endings", "depth", "power", "rebirth"],
    fallback: g("#b8a8c8", "#3a2a4a"),
  },
  {
    name: "Chiron",
    glyph: "⚷",
    epithet: "The Wounded Healer",
    essence: "Where we are hurt becomes where we can heal.",
    meaning:
      "Chiron points to a core wound — usually something you can't fully fix in yourself but become unusually skilled at helping others with. It's often tied to early experiences of feeling different, rejected, or not-enough in a specific area. Over time, working with that pain becomes the source of your most genuine compassion and your most useful gifts to other people. Chiron is not the showiest body in a chart, but it's one of the most quietly important.",
    shows: [
      "A core wound that shapes how you relate",
      "Where you feel different, rejected, or not-enough",
      "The area you're naturally able to help others heal",
      "Skills that come from your own struggle",
    ],
    experiences: ["sensitivity", "wounding", "healing", "rejuvenation", "compassion", "skill"],
    fallback: g("#d8c8b0", "#6a5a40"),
  },
  {
    name: "North Node",
    glyph: "☊",
    epithet: "The Growing Edge",
    essence: "What you are here to learn from scratch.",
    meaning:
      "The North Node isn't a planet — it's a calculated point that, along with the South Node, marks your soul's growth direction in this life. The North Node is unfamiliar territory: the qualities you didn't bring with you fully formed and have to develop on purpose. It feels awkward and beginner-ish, but moving toward it is what makes a life feel meaningful instead of just comfortable.",
    shows: [
      "Qualities you're here to develop from scratch",
      "The direction of meaningful growth in this life",
      "What feels awkward but right when you try it",
      "The opposite of your default comfort zone",
    ],
    experiences: ["growth", "development", "novelty", "eagerness", "progress", "learning"],
    fallback: g("#cfe8c8", "#3a6a4a"),
  },
  {
    name: "South Node",
    glyph: "☋",
    epithet: "The Familiar Pattern",
    essence: "What you can do in your sleep — and must release.",
    meaning:
      "The South Node is the opposite point to the North Node. It represents skills and patterns you already have in abundance — what you can do in your sleep. The trap is leaning on the South Node as the only safe move, because what's easy isn't always what you're here to do. The job isn't to throw these skills away; it's to use them in service of where the North Node is pointing.",
    shows: [
      "Skills and patterns that already come easily",
      "Where you over-rely on what's familiar",
      "Old habits that quietly hold you back",
      "Strengths to draw from, not hide in",
    ],
    experiences: ["familiarity", "comfort", "release", "yearning", "past cycles", "liberation"],
    fallback: g("#d0c8b8", "#5a503e"),
  },
];

export function planetImage(name: string): string | undefined {
  return planetImages[name];
}
