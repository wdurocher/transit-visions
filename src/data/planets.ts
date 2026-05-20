import { planetImages } from "@/data/transits";

export type PlanetEntry = {
  name: string;
  glyph: string;
  epithet: string;
  /** One-line essence */
  essence: string;
  /** Longer rephrased meaning */
  meaning: string;
  /** Experience tags */
  experiences: string[];
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
      "The Sun radiates the core of who you are — the will to be visible, to create, to engage. It governs vitality, focus, and the willingness to take up space in your own life.",
    experiences: ["passion", "creativity", "vitality", "focus", "will", "expressiveness"],
    fallback: g("#ffe7a8", "#c79331"),
  },
  {
    name: "Moon",
    glyph: "☽",
    epithet: "The Mirror",
    essence: "Inner awareness and the body's intelligence.",
    meaning:
      "The Moon receives. It tracks mood, comfort, memory, and the felt-sense of safety. Where the Sun radiates, the Moon listens — to the body, to the inner tide, to what you actually need.",
    experiences: ["emotion", "nurturance", "receptivity", "security", "memory", "care"],
    fallback: g("#e8edf3", "#8a96a8"),
  },
  {
    name: "Mercury",
    glyph: "☿",
    epithet: "The Messenger",
    essence: "Interactive learning and exchange.",
    meaning:
      "Mercury moves information across thresholds — between people, between thoughts, between ideas and their use. It is curiosity made practical: noticing, naming, asking, replying.",
    experiences: ["curiosity", "thought", "language", "insight", "exchange", "practicality"],
    fallback: g("#cfd2d6", "#6f7378"),
  },
  {
    name: "Venus",
    glyph: "♀",
    epithet: "The Beloved",
    essence: "What we draw close, value, and enjoy.",
    meaning:
      "Venus describes affinity — the pull toward a person, an object, a texture, a sound. She governs pleasure, beauty, mutuality, and our sense of what is worth keeping near.",
    experiences: ["desire", "pleasure", "beauty", "attraction", "mutuality", "value"],
    fallback: g("#f6dcb5", "#b48244"),
  },
  {
    name: "Mars",
    glyph: "♂",
    epithet: "The Warrior",
    essence: "Self-determined action and drive.",
    meaning:
      "Mars is the willingness to begin and the courage to finish. It clears obstacles, holds ambition, and presses forward when something has to be done. Its shadow is force without aim.",
    experiences: ["drive", "motivation", "courage", "ambition", "intent", "victory"],
    fallback: g("#f4a07a", "#8b3a1f"),
  },
  {
    name: "Jupiter",
    glyph: "♃",
    epithet: "The Benefic",
    essence: "Expansive worldview and possibility.",
    meaning:
      "Jupiter widens the frame. It carries optimism, meaning, and the search for what is larger than the day. Where Jupiter sits, you reach for more — sometimes wisely, sometimes too far.",
    experiences: ["optimism", "wisdom", "opportunity", "adventure", "expansion", "meaning"],
    fallback: g("#f3d39a", "#a06a2a"),
  },
  {
    name: "Saturn",
    glyph: "♄",
    epithet: "The Architect",
    essence: "Structure, time, and earned mastery.",
    meaning:
      "Saturn builds. It asks for patience, discipline, and the slow accumulation of skill. Saturn is the test of what holds — the unglamorous work that, given time, becomes foundation.",
    experiences: ["discipline", "patience", "responsibility", "maturity", "perseverance", "structure"],
    fallback: g("#e6caa0", "#7a5a30"),
  },
  {
    name: "Uranus",
    glyph: "♅",
    epithet: "The Liberator",
    essence: "Sudden change and revolutionary insight.",
    meaning:
      "Uranus breaks the pattern. It introduces the unexpected, the original, the inconvenient flash of truth that forces a system to evolve. Where Uranus moves, freedom becomes non-negotiable.",
    experiences: ["freedom", "breakthrough", "revolution", "inspiration", "originality", "awakening"],
    fallback: g("#bfe6e8", "#3a7a8c"),
  },
  {
    name: "Neptune",
    glyph: "♆",
    epithet: "The Dreamer",
    essence: "Dissolution and unconditional acceptance.",
    meaning:
      "Neptune softens edges. It is the dream, the longing, the mystic blur where self gives way to something larger. Its gift is compassion; its risk is losing the thread of the real.",
    experiences: ["acceptance", "compassion", "vision", "stillness", "faith", "release"],
    fallback: g("#a8c5e8", "#3a5a8c"),
  },
  {
    name: "Pluto",
    glyph: "♇",
    epithet: "The Transformer",
    essence: "Endings, depth, and irreversible change.",
    meaning:
      "Pluto removes what cannot survive its own truth. It governs the long, intense passages — grief, power, secrecy, rebirth — and the kind of change that leaves you unrecognisable to who you were.",
    experiences: ["intensity", "transformation", "endings", "depth", "power", "rebirth"],
    fallback: g("#b8a8c8", "#3a2a4a"),
  },
  {
    name: "Chiron",
    glyph: "⚷",
    epithet: "The Wounded Healer",
    essence: "Where we are hurt becomes where we can heal.",
    meaning:
      "Chiron marks the wound that never fully closes — and the very capacity it builds for tenderness toward others. Over and under-compensation give way, with time, to skilled care.",
    experiences: ["sensitivity", "wounding", "healing", "rejuvenation", "compassion", "skill"],
    fallback: g("#d8c8b0", "#6a5a40"),
  },
  {
    name: "North Node",
    glyph: "☊",
    epithet: "The Growing Edge",
    essence: "What you are here to learn from scratch.",
    meaning:
      "The North Node points to unfamiliar territory — the qualities you need to develop on purpose. It feels awkward, eager, beginner-ish, and exactly right.",
    experiences: ["growth", "development", "novelty", "eagerness", "progress", "learning"],
    fallback: g("#cfe8c8", "#3a6a4a"),
  },
  {
    name: "South Node",
    glyph: "☋",
    epithet: "The Familiar Pattern",
    essence: "What you can do in your sleep — and must release.",
    meaning:
      "The South Node is the default — competence built long ago, now quietly limiting. The work is not to abandon it, but to stop leaning on it as the only safe move.",
    experiences: ["familiarity", "comfort", "release", "yearning", "past cycles", "liberation"],
    fallback: g("#d0c8b8", "#5a503e"),
  },
];

export function planetImage(name: string): string | undefined {
  return planetImages[name];
}
