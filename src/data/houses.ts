export type House = {
  number: number;
  roman: string;
  name: string;
  sign: string;
  ruler: string;
  keyword: string;
  rules: string;
  description: string;
  lifeArea: string;
  internal: string[];
  external: string[];
  balancedBy: number;
};

export const houses: House[] = [
  {
    number: 1,
    roman: "I",
    name: "House of Self",
    sign: "Aries",
    ruler: "Mars",
    keyword: "Identity",
    rules: "Appearance, first impressions, the body you arrive in.",
    description:
      "The Ascendant. How you walk into a room before you've said a word. The first house is the lens you wear without knowing it — your physical presence, your reflex, the version of you that exists before you decide who to be.",
    lifeArea: "Self-awareness and pressing your will into the world.",
    internal: ["self-awareness", "physical energy", "independence", "self-confidence", "assertiveness"],
    external: ["self-image", "appearance", "aspirations", "personality", "physical body", "new beginnings"],
    balancedBy: 7,
  },
  {
    number: 2,
    roman: "II",
    name: "House of Value",
    sign: "Taurus",
    ruler: "Venus",
    keyword: "Resources",
    rules: "Money, possessions, self-worth, the senses.",
    description:
      "What you own and what you believe you're worth. The second house governs income, the things you keep close to your body, and the slow accumulation of value — material and inner.",
    lifeArea: "Self-reliance and working hands-on with the natural world.",
    internal: ["self-reliance", "resourcefulness", "abundance", "inner resources", "talents", "values", "self-worth"],
    external: ["personal finances", "wealth", "possessions", "material values", "sensual pleasures"],
    balancedBy: 8,
  },
  {
    number: 3,
    roman: "III",
    name: "House of Communication",
    sign: "Gemini",
    ruler: "Mercury",
    keyword: "Exchange",
    rules: "Siblings, short trips, daily speech, the local world.",
    description:
      "The neighborhood of the mind. How you think, how you write, how you talk to the person at the corner store. This house rules everything within a short journey — by car, by thought, by sentence.",
    lifeArea: "The rational mind — talking with and learning from the people around you.",
    internal: ["practicality", "sociability", "communication", "flexibility", "lightheartedness", "left-brain intelligence"],
    external: ["thoughts", "practical ideas", "writing", "correspondence", "immediate environment", "peers", "siblings"],
    balancedBy: 9,
  },
  {
    number: 4,
    roman: "IV",
    name: "House of Home",
    sign: "Cancer",
    ruler: "Moon",
    keyword: "Root",
    rules: "Family, lineage, the dwelling, the inner private self.",
    description:
      "The Imum Coeli. Where you came from and where you go when no one is watching. Family of origin, ancestors, the literal house and the inner room. The foundation everything else is built on.",
    lifeArea: "Feelings, roots, and the act of caring for others.",
    internal: ["receptiveness", "affection", "sentimentality", "introversion", "feelings", "emotional security", "the soul"],
    external: ["home", "family", "past", "roots", "traditions", "land", "domestic life", "privacy"],
    balancedBy: 10,
  },
  {
    number: 5,
    roman: "V",
    name: "House of Pleasure",
    sign: "Leo",
    ruler: "Sun",
    keyword: "Creation",
    rules: "Children, romance, play, creative output.",
    description:
      "What you make for the joy of making. Romance, flirtation, the artwork, the child. The fifth house is generative — it's the part of life where you spend energy not because you must, but because something in you wants to.",
    lifeArea: "Self-expression, passion, and creative play.",
    internal: ["self-expression", "creativity", "passion", "playfulness", "romantic love", "pleasure", "fun"],
    external: ["children", "romance", "creative projects", "start-ups", "arts", "entertainment", "recreation", "speculation"],
    balancedBy: 11,
  },
  {
    number: 6,
    roman: "VI",
    name: "House of Service",
    sign: "Virgo",
    ruler: "Mercury",
    keyword: "Craft",
    rules: "Daily work, health, routine, small animals.",
    description:
      "The dailiness of being alive. The job you go to, the habits that keep your body running, the small competences. Less glamorous than the fifth, often more important. Where care becomes ritual.",
    lifeArea: "Refining yourself, your crafts, and the work that helps others improve.",
    internal: ["self-improvement", "refinement", "growth", "organization", "service", "helpfulness", "charitableness"],
    external: ["routine", "everyday work", "health", "diet", "habits", "crafts", "skills", "assistance"],
    balancedBy: 12,
  },
  {
    number: 7,
    roman: "VII",
    name: "House of Others",
    sign: "Libra",
    ruler: "Venus",
    keyword: "Partnership",
    rules: "Marriage, business partners, open enemies, the You.",
    description:
      "The Descendant. The mirror across the chart from the self. Whoever you sit across from — beloved, collaborator, rival — lives here. This house is about the negotiation of being two.",
    lifeArea: "Justice, mutuality, and one-on-one relationships.",
    internal: ["balance", "harmony", "fairness", "conscientiousness", "morality", "impartiality", "cooperativeness"],
    external: ["relationships", "partnerships", "marriage", "agreements", "legal matters", "business dealings"],
    balancedBy: 1,
  },
  {
    number: 8,
    roman: "VIII",
    name: "House of Depth",
    sign: "Scorpio",
    ruler: "Pluto / Mars",
    keyword: "Transformation",
    rules: "Shared resources, sex, death, the occult, inheritance.",
    description:
      "What changes you without your permission. Intimacy that rewrites you, money entangled with others, the things you inherit, the things that end. The eighth is the dark river under the chart.",
    lifeArea: "Transparency, healing, and the deeper layers of life.",
    internal: ["transparency", "regeneration", "non-attachment", "communion", "acceptance", "the deeper self"],
    external: ["deep connections", "shared resources", "bonds", "endings and beginnings", "hidden things", "healing"],
    balancedBy: 2,
  },
  {
    number: 9,
    roman: "IX",
    name: "House of Meaning",
    sign: "Sagittarius",
    ruler: "Jupiter",
    keyword: "Horizon",
    rules: "Long journeys, philosophy, higher education, religion.",
    description:
      "The far horizon. Travel that changes your worldview, the book that reshapes you, the belief system you build to make sense of being here. The ninth house is the search for the bigger picture.",
    lifeArea: "Exploring life and seeking out its larger purpose.",
    internal: ["adventurousness", "open-mindedness", "optimism", "purpose", "freedom", "expansion", "spirit", "wisdom"],
    external: ["philosophy", "higher learning", "teachings", "gurus", "travel", "matters abroad", "publishing", "broadcasting"],
    balancedBy: 3,
  },
  {
    number: 10,
    roman: "X",
    name: "House of Vocation",
    sign: "Capricorn",
    ruler: "Saturn",
    keyword: "Calling",
    rules: "Career, public reputation, achievement, the father archetype.",
    description:
      "The Midheaven. The highest point of the chart and the most visible. What you're known for, what you build over decades, the structure your life takes in the eyes of the world.",
    lifeArea: "Legacy, life's work, and public life.",
    internal: ["commitment", "determination", "dedication", "responsibility", "mastery", "maturity", "discipline"],
    external: ["career", "vocation", "public image", "recognition", "achievements", "legacy", "authorities", "experts"],
    balancedBy: 4,
  },
  {
    number: 11,
    roman: "XI",
    name: "House of Community",
    sign: "Aquarius",
    ruler: "Uranus / Saturn",
    keyword: "Network",
    rules: "Friends, groups, alliances, hopes for the future.",
    description:
      "The chosen tribe. Friendships, movements, the people you find your way to. The eleventh is also the house of long-range hopes — the future you're working toward, even quietly.",
    lifeArea: "Groups, community, and the causes you give yourself to.",
    internal: ["contribution", "ideals", "visions", "aspirations", "group orientation", "humanitarianism"],
    external: ["groups", "friends", "networks", "community", "causes", "career values", "philanthropy", "organizations"],
    balancedBy: 5,
  },
  {
    number: 12,
    roman: "XII",
    name: "House of the Unseen",
    sign: "Pisces",
    ruler: "Neptune / Jupiter",
    keyword: "Dissolution",
    rules: "The unconscious, retreat, hidden enemies, hospitals, dreams.",
    description:
      "What runs underneath everything. The dream, the secret, the self that exists behind closed doors. The twelfth house is endings, retreats, monasteries and hospitals — the places we go to dissolve before we begin again.",
    lifeArea: "Inner peace and felt connection to the larger whole.",
    internal: ["intuition", "presence", "mindfulness", "faith", "empathy", "compassion", "spiritual connection"],
    external: ["meditation", "rest", "dreams", "isolation", "spirituality", "unresolved things", "psychic abilities"],
    balancedBy: 6,
  },
];