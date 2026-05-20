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
    purpose:
      "Growing self-awareness and confidence by pressing your own will into the world.",
    balanced: ["self-aware", "assertive", "initiating", "daring", "direct", "active", "independent"],
    overEmphasized: ["self-serving", "aggressive", "impatient", "combative", "overbearing", "rash", "reckless"],
    underEmphasized: ["passive", "passive-aggressive", "fearful", "victimized", "apprehensive", "self-denying"],
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
    purpose:
      "Building self-reliance and enjoyment of your values through hands-on work with the natural world.",
    balanced: ["self-reliant", "resourceful", "grateful", "sensual", "abundant", "supportive", "frugal"],
    overEmphasized: ["materialistic", "possessive", "stubborn", "self-indulgent", "lazy", "greedy", "spendthrift"],
    underEmphasized: ["ascetic", "austere", "miserly", "stingy", "stark", "wasteful", "anti-material"],
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
    purpose:
      "Mapping the rational side of life by talking with, listening to, and learning from others.",
    balanced: ["inquisitive", "curious", "sociable", "communicative", "practical", "flexible", "lighthearted"],
    overEmphasized: ["nosy", "impatient", "nervous", "flighty", "high-strung", "fickle", "over-talkative"],
    underEmphasized: ["deceptive", "anti-social", "disinterested", "indifferent", "vague", "withdrawn"],
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
    purpose:
      "Welcoming your feelings and sentiments by caring for and nurturing others.",
    balanced: ["receptive", "accepting", "nurturing", "caring", "gentle", "protective", "reflective"],
    overEmphasized: ["brooding", "hypersensitive", "smothering", "overly concerned", "stuck in the past"],
    underEmphasized: ["withdrawn", "defensive", "disconnected", "cold", "detached", "uncaring", "reclusive"],
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
    purpose:
      "Expressing who you are through creativity, play, and sharing yourself openly with others.",
    balanced: ["self-expressive", "creative", "playful", "self-assured", "loving", "generous", "passionate"],
    overEmphasized: ["self-centered", "arrogant", "melodramatic", "demanding", "boastful", "attention-seeking"],
    underEmphasized: ["self-rejecting", "apprehensive", "withholding", "lackluster", "despondent", "drab"],
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
    purpose:
      "Refining your skills by improving yourself, your environment, and the people you serve.",
    balanced: ["bettering", "improving", "organizing", "enhancing", "growing", "assisting", "helpful"],
    overEmphasized: ["perfectionistic", "controlling", "nitpicky", "obsessive", "workaholic"],
    underEmphasized: ["deteriorating", "stagnating", "disorganized", "careless", "depreciating", "disdaining"],
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
    purpose:
      "Keeping balance and mutuality through conscientious action inside relationships.",
    balanced: ["conscientious", "moral", "cooperative", "fair", "just", "agreeable", "harmonious"],
    overEmphasized: ["overly agreeable", "dependent", "giving power away", "selfless", "self-depreciating"],
    underEmphasized: ["indecisive", "passive", "unconcerned", "morally gray", "uninvolved", "straddling"],
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
    purpose:
      "Exposing the truth through deep involvements and penetrating the hidden layers of life.",
    balanced: ["transparent", "honest", "vulnerable", "penetrating", "bonding", "open", "non-attached"],
    overEmphasized: ["over-exposing", "grim", "cruel", "vindictive", "lustful", "disregarding"],
    underEmphasized: ["secretive", "suspicious", "possessive", "mistrusting", "spiteful", "power-seeking", "overly attached"],
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
    purpose:
      "Healing yourself and others by redeeming the physical body and the instinctual nature.",
    balanced: ["regenerated", "spirited", "transmuted", "revived", "renewed", "life-connected"],
    overEmphasized: ["purely instinctual", "mind-identified", "destructive", "sadistic", "enslaving the material"],
    underEmphasized: ["fearful", "guilt-ridden", "tempestuous", "desirous", "empty", "wanting to be ruled"],
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
    purpose:
      "Exploring life and its meaning by expanding mind, body, and spirit toward new horizons.",
    balanced: ["adventurous", "philosophical", "open-minded", "optimistic", "freedom-loving", "purposeful"],
    overEmphasized: ["self-righteous", "preachy", "dogmatic", "condescending", "excessive", "impractical"],
    underEmphasized: ["closed-minded", "adrift", "aimless", "restraining", "pessimistic", "doubtful", "inhibited"],
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
    purpose:
      "Building a lasting legacy through discipline, patience, and steady perseverance.",
    balanced: ["responsible", "committed", "hard-working", "mature", "determined", "dedicated", "persistent"],
    overEmphasized: ["harsh", "rigid", "overcautious", "inhibited", "cold", "detached", "success-obsessed"],
    underEmphasized: ["impatient", "faint-hearted", "uncommitted", "defeatist", "negligent", "immature", "irresponsible"],
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
    purpose:
      "Changing the world through original ideas and the steady push of social transformation.",
    balanced: ["progressive", "inventive", "humanitarian", "unconventional", "eccentric", "visionary"],
    overEmphasized: ["rebellious", "radical", "dictating", "fanatical", "extreme", "chaotic", "deviant"],
    underEmphasized: ["undisciplined", "impractical", "detached", "impersonal", "aloof", "disorganized", "anti-social"],
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
    purpose:
      "Seeking and finding peace by surrendering into the ebb and flow of life itself.",
    balanced: ["intuitive", "present", "tranquil", "trusting", "mindful", "empathic", "compassionate"],
    overEmphasized: ["unconscious", "ungrounded", "delusional", "escapist", "fantasy-bound", "mindless"],
    underEmphasized: ["faithless", "hopeless", "apathetic", "callous", "nihilistic", "over-thinking", "stressed"],
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