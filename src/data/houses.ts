export type House = {
  number: number;
  roman: string;
  name: string;
  sign: string;
  ruler: string;
  keyword: string;
  rules: string;
  description: string;
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
  },
];