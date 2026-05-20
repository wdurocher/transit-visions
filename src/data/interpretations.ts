// Concise, beginner-friendly chart interpretations.

export const PLANET_IN_SIGN: Record<string, Record<string, string>> = {
  sun: {
    aries: "Identity expressed through initiative, courage, and being first.",
    taurus: "Identity expressed through steadiness, beauty, and building lasting value.",
    gemini: "Identity expressed through curiosity, language, and connecting ideas.",
    cancer: "Identity expressed through care, home, and emotional memory.",
    leo: "Identity expressed through creativity, warmth, and visible self-expression.",
    virgo: "Identity expressed through craft, service, and useful improvement.",
    libra: "Identity expressed through relationship, fairness, and aesthetic.",
    scorpio: "Identity expressed through depth, control, and transformation.",
    sagittarius: "Identity expressed through exploration, meaning, and truth-seeking.",
    capricorn: "Identity expressed through structure, mastery, and long-game ambition.",
    aquarius: "Identity expressed through originality, ideals, and the collective.",
    pisces: "Identity expressed through imagination, empathy, and dissolving boundaries.",
  },
  moon: {
    aries: "Feels safe when acting fast; emotions ignite then pass quickly.",
    taurus: "Feels safe with routine, comfort, and the senses; slow to change moods.",
    gemini: "Feels safe when talking it out; needs mental variety to settle.",
    cancer: "Feels safe at home with people who remember you; deeply moody, deeply caring.",
    leo: "Feels safe when seen and appreciated; emotions are warm and proud.",
    virgo: "Feels safe through order and being useful; processes feelings by analysing them.",
    libra: "Feels safe in calm, fair relationships; allergic to conflict.",
    scorpio: "Feels safe with privacy and depth; emotions are intense and all-or-nothing.",
    sagittarius: "Feels safe with freedom and meaning; restless emotionally.",
    capricorn: "Feels safe with control and competence; reserved with feelings.",
    aquarius: "Feels safe with space and independence; processes emotions intellectually.",
    pisces: "Feels safe when imagining, dreaming, or merging with something larger.",
  },
  mercury: { aries: "Quick, blunt thinking.", taurus: "Slow, thorough thinking.", gemini: "Fast, versatile, talkative.", cancer: "Memory-driven, intuitive thinking.", leo: "Confident, dramatic communication.", virgo: "Precise, analytical, detail-loving.", libra: "Diplomatic, comparative thinking.", scorpio: "Investigative, penetrating thinking.", sagittarius: "Big-picture, philosophical communication.", capricorn: "Structured, serious, strategic.", aquarius: "Original, abstract, future-facing.", pisces: "Imaginative, indirect, poetic." },
  venus: { aries: "Loves the chase and bold gestures.", taurus: "Loves through touch, food, and loyalty.", gemini: "Loves through conversation and variety.", cancer: "Loves through nurturing and emotional safety.", leo: "Loves grandly and wants devotion in return.", virgo: "Loves through small acts of service.", libra: "Loves harmony, beauty, and partnership.", scorpio: "Loves intensely, possessively, transformatively.", sagittarius: "Loves freedom, adventure, and growth together.", capricorn: "Loves with commitment and the long view.", aquarius: "Loves friendship-first and unconventionally.", pisces: "Loves romantically, sacrificially, dreamily." },
  mars: { aries: "Acts fast, fights openly, won't back down.", taurus: "Acts slowly, persistently, immovably.", gemini: "Acts through words, wit, and multitasking.", cancer: "Acts to protect what matters; indirect anger.", leo: "Acts boldly, on stage, for honour.", virgo: "Acts through skill, precision, and repetition.", libra: "Acts via negotiation; struggles with direct conflict.", scorpio: "Acts strategically and from the shadows.", sagittarius: "Acts with conviction, on a mission.", capricorn: "Acts with discipline and clear goals.", aquarius: "Acts for ideals and reform.", pisces: "Acts indirectly, intuitively, with surrender." },
  jupiter: { aries: "Grows through bold first moves.", taurus: "Grows through resources and pleasure.", gemini: "Grows through learning and exchange.", cancer: "Grows through family and emotional generosity.", leo: "Grows through creativity and leadership.", virgo: "Grows through craft and service.", libra: "Grows through partnership and fairness.", scorpio: "Grows through depth and transformation.", sagittarius: "Grows through travel, faith, and study.", capricorn: "Grows through discipline and structure.", aquarius: "Grows through community and ideals.", pisces: "Grows through compassion and imagination." },
  saturn: { aries: "Lessons around healthy self-assertion.", taurus: "Lessons around money, body, and what's truly yours.", gemini: "Lessons around speaking carefully and learning deeply.", cancer: "Lessons around home, mother, emotional walls.", leo: "Lessons around expressing yourself without needing approval.", virgo: "Lessons around perfectionism and self-criticism.", libra: "Lessons around fair, committed partnership.", scorpio: "Lessons around control, trust, and shared resources.", sagittarius: "Lessons around what you actually believe.", capricorn: "Lessons around authority, ambition, and patience.", aquarius: "Lessons around belonging without losing yourself.", pisces: "Lessons around boundaries and where reality ends." },
  uranus: { aries: "Disrupts how you start things.", taurus: "Disrupts money, values, and the body.", gemini: "Disrupts how you think and speak.", cancer: "Disrupts home and family roles.", leo: "Disrupts self-expression and creativity.", virgo: "Disrupts work and routine.", libra: "Disrupts relationships.", scorpio: "Disrupts intimacy and shared resources.", sagittarius: "Disrupts belief systems.", capricorn: "Disrupts structures and authority.", aquarius: "At home — radical reform of the collective.", pisces: "Disrupts spirituality and what feels real." },
  neptune: { aries: "Dissolves the edges of the self.", taurus: "Dissolves attachment to material things.", gemini: "Dissolves the line between thought and intuition.", cancer: "Dissolves home into something mystical.", leo: "Dissolves the ego into creative expression.", virgo: "Dissolves perfectionism into faith.", libra: "Dissolves the self into the partner.", scorpio: "Dissolves taboos and ego defences.", sagittarius: "Dissolves belief into mysticism.", capricorn: "Dissolves rigid structures.", aquarius: "Dissolves group identity.", pisces: "At home — pure imagination, empathy, and longing." },
  pluto: { aries: "Transforms how you assert.", taurus: "Transforms money, body, values (slow & complete).", gemini: "Transforms communication and thought.", cancer: "Transforms family and roots.", leo: "Transforms self-expression and creativity.", virgo: "Transforms work, health, and service.", libra: "Transforms partnerships and fairness.", scorpio: "At home — radical death/rebirth in intimacy.", sagittarius: "Transforms beliefs and worldview.", capricorn: "Transforms institutions, authority, and ambition.", aquarius: "Transforms the collective and technology.", pisces: "Transforms the unconscious and spirituality." },
};

export const HOUSE_MEANINGS: Record<number, { name: string; gist: string }> = {
  1: { name: "Self & Body", gist: "How you come across, your appearance, the front you lead with." },
  2: { name: "Money & Values", gist: "What you earn, own, and consider valuable. Self-worth." },
  3: { name: "Mind & Siblings", gist: "How you think, speak, learn; siblings, neighbours, short trips." },
  4: { name: "Home & Roots", gist: "Family of origin, home, the private self, ancestry." },
  5: { name: "Creativity & Romance", gist: "Play, art, romance, children, what you create for fun." },
  6: { name: "Work & Health", gist: "Daily routines, job (not career), health, service." },
  7: { name: "Partnership", gist: "One-on-one relationships — spouse, business partner, open enemies." },
  8: { name: "Intimacy & Transformation", gist: "Shared resources, deep bonds, death, rebirth, taboo." },
  9: { name: "Beliefs & Travel", gist: "Higher learning, long trips, religion, philosophy, publishing." },
  10: { name: "Career & Public Life", gist: "Reputation, profession, what you're known for, authority." },
  11: { name: "Community & Future", gist: "Friends, networks, groups, long-term hopes, social causes." },
  12: { name: "Inner World & Endings", gist: "The unconscious, retreat, hidden things, dissolution." },
};

export const ASPECT_INFO: Record<string, { degree: number; nature: string; description: string }> = {
  conjunction: { degree: 0, nature: "blending", description: "Two planets sit together — their energies fuse and act as one." },
  opposition: { degree: 180, nature: "tension", description: "Two planets face off across the chart — they pull you between extremes you must integrate." },
  trine: { degree: 120, nature: "harmony", description: "An easy, natural flow between two planets — talents you barely notice using." },
  square: { degree: 90, nature: "challenge", description: "Friction between two planets — the engine of growth; what frustrates you forces you to develop." },
  sextile: { degree: 60, nature: "opportunity", description: "A helpful link — easy to use if you make the effort." },
};

export function planetInSign(planetKey: string, signKey: string): string {
  return PLANET_IN_SIGN[planetKey]?.[signKey] ?? "";
}

export function planetInHouseGist(planetKey: string, house: number): string {
  const planet: Record<string, string> = {
    sun: "shines and seeks recognition",
    moon: "feels safe and emotionally tunes in",
    mercury: "thinks and communicates",
    venus: "loves, attracts, and finds beauty",
    mars: "takes action and asserts will",
    jupiter: "grows and finds opportunity",
    saturn: "meets limits and builds mastery",
    uranus: "disrupts and innovates",
    neptune: "dissolves and dreams",
    pluto: "transforms and intensifies",
    chiron: "carries a wound that becomes wisdom",
    northnode: "is pulled toward growth",
    southnode: "falls back into old comfort",
  };
  const verb = planet[planetKey] ?? "expresses";
  const h = HOUSE_MEANINGS[house];
  return `${verb} in the area of ${h.name.toLowerCase()} — ${h.gist}`;
}