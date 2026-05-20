export type ZodiacSign = {
  name: string;
  glyph: string;
  dates: string;
  element: "Fire" | "Earth" | "Air" | "Water";
  modality: "Cardinal" | "Fixed" | "Mutable" | "—";
  ruler: string;
  modernRuler?: string;
  bodyParts: string;
  keyword: string;
  description: string;
  purpose: string;
  balanced: string[];
  overEmphasized: string[];
  underEmphasized: string[];
};

export const signs: ZodiacSign[] = [
  {
    name: "Aries",
    glyph: "♈",
    dates: "Mar 21 — Apr 19",
    element: "Fire",
    modality: "Cardinal",
    ruler: "Mars",
    bodyParts: "Head, face, brain, eyes",
    keyword: "I am",
    description:
      "The first spark. Aries is the impulse before the plan — the willingness to begin without a guarantee. Headaches and fevers belong to this sign; so does courage that arrives before fear can catch up.",
  },
  {
    name: "Taurus",
    glyph: "♉",
    dates: "Apr 20 — May 20",
    element: "Earth",
    modality: "Fixed",
    ruler: "Venus",
    bodyParts: "Neck, throat, vocal cords, thyroid",
    keyword: "I have",
    description:
      "Slow weight. Taurus is the body settling into the chair, the meal eaten without hurry, the voice that doesn't strain. Throat issues and laryngitis live here. So does the gift of saying exactly the right thing, slowly.",
  },
  {
    name: "Gemini",
    glyph: "♊",
    dates: "May 21 — Jun 20",
    element: "Air",
    modality: "Mutable",
    ruler: "Mercury",
    bodyParts: "Shoulders, arms, hands, lungs, nervous system",
    keyword: "I think",
    description:
      "The double. Gemini is breath and speech — the lungs taking in the world, the hands moving while the mouth talks. Nervous exhaustion and shoulder tension are its symptoms. Quickness is its gift.",
  },
  {
    name: "Cancer",
    glyph: "♋",
    dates: "Jun 21 — Jul 22",
    element: "Water",
    modality: "Cardinal",
    ruler: "Moon",
    bodyParts: "Chest, breasts, stomach, digestive system",
    keyword: "I feel",
    description:
      "The carrier. Cancer rules the chest — what we hold close, what we nourish. Digestion lives here, both the literal kind and the emotional. When the inner life isn't processed, the stomach often takes the call.",
  },
  {
    name: "Leo",
    glyph: "♌",
    dates: "Jul 23 — Aug 22",
    element: "Fire",
    modality: "Fixed",
    ruler: "Sun",
    bodyParts: "Heart, spine, upper back",
    keyword: "I will",
    description:
      "The radiant center. Leo is the heart — both the pump and the courage. The spine, too: the structure that lets you stand up straight in front of a room. Heart conditions and back pain are its old vocabulary.",
  },
  {
    name: "Virgo",
    glyph: "♍",
    dates: "Aug 23 — Sep 22",
    element: "Earth",
    modality: "Mutable",
    ruler: "Mercury",
    bodyParts: "Intestines, abdomen, spleen, pancreas",
    keyword: "I analyze",
    description:
      "The fine sorter. Virgo rules what breaks food down and decides what to keep — the gut, the intestines, the spleen. Anxiety surfaces here as IBS, as the stomach knot. Discernment is the gift; over-discernment, the wound.",
  },
  {
    name: "Libra",
    glyph: "♎",
    dates: "Sep 23 — Oct 22",
    element: "Air",
    modality: "Cardinal",
    ruler: "Venus",
    bodyParts: "Kidneys, lower back, skin, adrenal glands",
    keyword: "I balance",
    description:
      "The scales. Libra rules the kidneys — the body's filter, the keeper of balance. The lower back, too: the literal axis of the body. When equilibrium fails, this is where it shows.",
  },
  {
    name: "Scorpio",
    glyph: "♏",
    dates: "Oct 23 — Nov 21",
    element: "Water",
    modality: "Fixed",
    ruler: "Mars",
    modernRuler: "Pluto",
    bodyParts: "Reproductive organs, pelvis, colon, bladder",
    keyword: "I desire",
    description:
      "The depth. Scorpio rules the parts of the body that handle elimination and creation — pelvis, reproductive organs, colon. The places that operate in the dark, that hold and release. Transformation, literally and otherwise.",
  },
  {
    name: "Ophiuchus",
    glyph: "⛎",
    dates: "Nov 30 — Dec 17",
    element: "Water",
    modality: "—",
    ruler: "Mars",
    bodyParts: "Spine, central nervous system, regenerative tissue",
    keyword: "I heal",
    description:
      "The thirteenth sign. Ophiuchus — the Serpent Bearer — is recognized in sidereal traditions as a brief constellation the sun crosses between Scorpio and Sagittarius. Its association is with the physician archetype: poison turned medicine, wounds turned wisdom. Treated here as the reference includes it, alongside the twelve.",
  },
  {
    name: "Sagittarius",
    glyph: "♐",
    dates: "Nov 22 — Dec 21",
    element: "Fire",
    modality: "Mutable",
    ruler: "Jupiter",
    bodyParts: "Hips, thighs, liver, sciatic nerve",
    keyword: "I seek",
    description:
      "The traveler. Sagittarius rules the hips and thighs — the engine of long stride, the muscles you need to actually go somewhere. The liver, too: filter for excess. Sciatica is the warning when the journey has been pushed too hard.",
  },
  {
    name: "Capricorn",
    glyph: "♑",
    dates: "Dec 22 — Jan 19",
    element: "Earth",
    modality: "Cardinal",
    ruler: "Saturn",
    bodyParts: "Knees, joints, bones, teeth, skin",
    keyword: "I build",
    description:
      "The architect. Capricorn rules the skeletal system — bones, joints, knees, the structures that carry everything else. Arthritis and stiffness are its old companions. Endurance is its gift; rigidity, its caution.",
  },
  {
    name: "Aquarius",
    glyph: "♒",
    dates: "Jan 20 — Feb 18",
    element: "Air",
    modality: "Fixed",
    ruler: "Saturn",
    modernRuler: "Uranus",
    bodyParts: "Calves, ankles, circulatory system",
    keyword: "I know",
    description:
      "The current. Aquarius rules circulation — the way ideas, blood, and electricity move through a system. Ankles and calves are its territory. Sudden cramps and circulatory issues belong here, alongside genius and revolution.",
  },
  {
    name: "Pisces",
    glyph: "♓",
    dates: "Feb 19 — Mar 20",
    element: "Water",
    modality: "Mutable",
    ruler: "Jupiter",
    modernRuler: "Neptune",
    bodyParts: "Feet, lymphatic system, pineal gland",
    keyword: "I dream",
    description:
      "The dissolution. Pisces rules the feet — the part of the body that touches the ground we walk on — and the lymphatic system, the body's quiet drainage. Foot pain, swelling, and dreaminess are its signs.",
  },
];

export const elementMeaning: Record<ZodiacSign["element"], string> = {
  Fire: "Spirit, action, will",
  Earth: "Body, material, endurance",
  Air: "Mind, language, exchange",
  Water: "Feeling, memory, depth",
};

export const modalityMeaning: Record<"Cardinal" | "Fixed" | "Mutable", string> = {
  Cardinal: "Initiates the season — the move that starts things.",
  Fixed: "Holds the season — the move that keeps things stable.",
  Mutable: "Ends the season — the move that adapts and dissolves.",
};