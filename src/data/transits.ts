import saturnImg from "@/assets/saturn.jpg";
import jupiterImg from "@/assets/jupiter.jpg";
import uranusImg from "@/assets/uranus.jpg";
import marsImg from "@/assets/mars.jpg";
import mercuryImg from "@/assets/mercury.jpg";
import venusImg from "@/assets/venus.jpg";
import moonImg from "@/assets/moon.jpg";
import neptuneImg from "@/assets/neptune.jpg";
import sunImg from "@/assets/sun.jpg";
import plutoImg from "@/assets/pluto.jpg";

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
  Uranus: uranusImg,
  Mars: marsImg,
  Mercury: mercuryImg,
  Venus: venusImg,
  Moon: moonImg,
  Neptune: neptuneImg,
  Sun: sunImg,
  Pluto: plutoImg,
};

// Positions reflect the True Sky sidereal zodiac (as shown on
// masteringthezodiac.com) for May 29, 2026. Sidereal signs lag
// the tropical zodiac by ~24°, so most placements sit one sign
// earlier than a typical Western (tropical) calendar.
export const transits: Transit[] = [
  {
    slug: "moon-in-libra",
    planet: "Moon",
    glyph: "☽",
    title: "Moon in Libra",
    sign: "Libra",
    status: "Direct",
    window: "May 28 — May 31, 2026 (~2.5 days)",
    short:
      "The Moon (mood, instinct) is crossing Libra (relationship, balance, fairness) — a sociable two-day window where pairing off, mediating, and aesthetic choices come naturally.",
    long:
      "The Moon is the fastest body in the sky — it changes sidereal sign every ~2.5 days and laps the zodiac in about a month. That makes Moon transits the daily weather underneath everything else.\n\nWhy it happens: in the True Sky sidereal zodiac the Moon on May 29, 2026 sits in early Libra, ruled by Venus. Libra is the sign of the other person — partnership, fairness, taste, and the polite negotiation that holds a room together. Moon in Libra tilts the inner weather toward company over solitude and harmony over heat.\n\nHow you'll feel it: more diplomatic, more attuned to the room, less willing to make a decision alone. Aesthetic input lands more strongly than usual — a clean space, a kind tone, and a well-set table actually change your mood. The shadow side is conflict avoidance: you can smile through something you should be naming.\n\nExamples in real life: a partner conversation that's been circling for weeks finally happens over a meal. You redecorate a corner of your room and feel different for days. You mediate between two friends without choosing a side and both feel heard. A first date or reunion goes unusually well. Use the window for pairing, design choices, and any conversation that needs grace more than force.",
    themes: ["Pairing", "Diplomacy", "Aesthetic mood"],
    affects: [
      { area: "Mood", note: "Sociable and even-tempered. Good day to host or be hosted." },
      { area: "Relationships", note: "Strong window for paired conversations and gentle repair." },
      { area: "Caution", note: "Don't smile past something that actually needs to be said." },
    ],
    image: moonImg,
    color: "#cfd6e6",
  },
  {
    slug: "sun-conjunct-mercury-taurus",
    planet: "Sun",
    glyph: "☉",
    title: "Sun in Taurus (Mercury just left for Gemini)",
    sign: "Taurus",
    status: "Direct",
    window: "Sun in Taurus: May 14 — Jun 14, 2026",
    short:
      "In the True Sky sidereal sky the Sun sits at 14° Taurus — a grounded, slow-moving window that favors money decisions, body discipline, and finishing what you've already started.",
    long:
      "Every year the Sun spends about 30 days in each sidereal sign. In True Sky terms the Sun is at 14° Taurus on May 29, 2026 — past its exact conjunction with Mercury (which happened around May 22) and now alone in Taurus while Mercury races ahead into Gemini.\n\nWhy it matters: Taurus is fixed earth, ruled by Venus. The Sun here turns identity toward the tangible — money, the body, food, possessions, what you actually own and value. With Mercury having just left, the thinking phase is over and the doing phase begins: the budget you talked about last week is the budget you sign this week.\n\nHow you'll feel it: a slower, steadier tempo. You can sit with a spreadsheet, a contract, or a long project without the usual restlessness. The shadow is stubbornness — once Taurus decides, it doesn't reopen the debate easily.\n\nExamples in real life: a money conversation you had earlier in May turns into an actual signed agreement. You commit to a body or training reset and stick to it. A creative idea that felt fluffy gets priced, packaged, and shipped. Use the next two weeks for decisions that benefit from a slow, grounded mind.",
    themes: ["Focused thinking", "Money decisions", "Grounded speech"],
    affects: [
      { area: "Mind", note: "Slower but sharper. Good for spreadsheets, contracts, and editing." },
      { area: "Money", note: "Strong window to negotiate, budget, or set a real price on your work." },
      { area: "Body", note: "Decisions about food, training, or health hold if you commit now." },
    ],
    image: sunImg,
    color: "#e8b34a",
  },
  {
    slug: "venus-in-gemini",
    planet: "Venus",
    glyph: "♀",
    title: "Venus in Gemini",
    sign: "Gemini",
    status: "Direct",
    window: "May 9 — Jun 4, 2026 (sidereal)",
    short:
      "Venus (love, taste) at 18° Gemini turns affection talkative — flirting, witty texts, and intellectual chemistry mean more than grand gestures right now. Final week before she enters Cancer.",
    long:
      "Venus moves through a sidereal sign in roughly 3–4 weeks. In Gemini she trades depth for breadth: she wants to talk, learn, and be amused.\n\nWhy it happens: Gemini is ruled by Mercury, so Venus borrows Mercury's restless, curious flavor. Love and beauty get filtered through language — what someone says (and how cleverly they say it) starts to matter more than what they look like or what they spend. Venus here also sextiles the Sun–Mercury conjunction in Taurus this week, so sweet, useful conversations are unusually easy.\n\nHow you'll feel it: more flirtatious, more verbal, more curious about people you'd normally ignore. Two casual interests instead of one obsession. Aesthetic taste shifts toward color, print, pattern, and clever design rather than minimalism.\n\nExamples in real life: a long text thread quietly turns into a crush. You go on a first date that's basically a four-hour conversation and barely notice the food. You redesign a room, a wardrobe, or a website with more playfulness than usual. A friendship deepens because you finally talked about the thing you'd both been avoiding.",
    themes: ["Verbal flirting", "Intellectual chemistry", "Playful taste"],
    affects: [
      { area: "Relationships", note: "Words are the love language. Write the message you've been drafting." },
      { area: "Social", note: "Two light dates beat one heavy one. Stay curious." },
      { area: "Aesthetics", note: "Add color, print, and humor. Skip 'serious' for now." },
    ],
    image: venusImg,
    color: "#e6cfa6",
  },
  {
    slug: "mars-in-aries",
    planet: "Mars",
    glyph: "♂",
    title: "Mars in Aries",
    sign: "Aries",
    status: "Direct",
    window: "Apr 28 — Jun 16, 2026 (sidereal)",
    short:
      "Mars (drive, will) is at 14° Aries — its home sign at full strength. Fast, direct, and brave. About three weeks left in a window where starting things, training hard, and saying no get easier.",
    long:
      "Mars rules Aries, so it operates at full strength here: action without hesitation. Where Mars in Taurus had to grind, Mars in Aries simply moves.\n\nWhy it happens: Aries is one of Mars's two domicile signs — its native turf. Cardinal fire matches Mars's natural mode (initiation, heat, courage). After spending early spring in slower signs, Mars hits Aries and the whole tempo of the year picks up. Mars also forms a friendly sextile to Venus in Gemini through late May, so attraction and pursuit feel coordinated rather than at odds.\n\nHow you'll feel it: more decisive, more physical, more willing to argue. You wake up earlier without trying. The downside is shorter fuse — small irritations can escalate before you notice.\n\nExamples in real life: you start the training program, project, or move you've been delaying for months. A boundary you've been hinting at for a year finally gets stated plainly. A solo trip, race, or competition lands well. A conflict you've been avoiding turns out to be smaller than the dread around it. Use the heat — but cool off for ten minutes before any reply you might regret.",
    themes: ["Decisive action", "Courage", "Physical energy"],
    affects: [
      { area: "Drive", note: "Start the thing now. Mars in Aries rewards momentum, not planning." },
      { area: "Fitness", note: "Best window of the year for intensity, sprinting, and strength PRs." },
      { area: "Conflict", note: "Speak directly — but wait ten minutes before sending anger." },
    ],
    image: marsImg,
    color: "#c46a3f",
  },
  {
    slug: "jupiter-in-gemini",
    planet: "Jupiter",
    glyph: "♃",
    title: "Jupiter in Gemini",
    sign: "Gemini",
    status: "Direct",
    window: "Jun 1, 2025 — Jun 9, 2026 (sidereal)",
    short:
      "Jupiter (growth, luck) is at 29° Gemini — the very last degree. In under two weeks it leaves for Cancer for a year. This is the closing window of one of the decade's best windows to learn, write, teach, and grow your reach.",
    long:
      "Jupiter spends about a year per sidereal sign as it makes its 12-year lap. In Gemini, Jupiter expands the parts of life Gemini rules: communication, language, learning, siblings, neighborhoods, short-form media, and how ideas travel.\n\nWhy it happens: Jupiter and Mercury (Gemini's ruler) aren't a natural pair — Jupiter wants the big picture, Mercury wants the detail. Together they produce people who can finally explain the thing they've always known. The last Jupiter-in-Gemini year (sidereal: 2013–2014) coincided with the rise of podcast culture and creator-led media; the next won't come until 2037.\n\nHow you'll feel it: an itch to publish, teach, or pitch. Audiences and connections show up more easily. Languages, courses, and writing projects you've been circling for years finally take. With Jupiter only weeks from leaving Gemini (entering Cancer around June 9), this is the closing chapter of a once-in-12-year window.\n\nHow it sharpens this week: Jupiter at 23° Gemini sits right next to the Moon on May 19 and within sextile range of Mars in Aries — the kind of configuration that turns a casual idea into a real plan within a day. Examples: a freelance writer lands an unexpectedly large contract. A long-quiet newsletter doubles its readership after one piece. A sibling reconnects after years over a shared project. A trip to a single city plants the seed for a year of work. Don't wait — ship, publish, pitch, or sign up before mid-June.",
    themes: ["Reach", "Learning", "Final-stretch luck"],
    affects: [
      { area: "Career", note: "Publish, pitch, or teach now. The window closes in weeks." },
      { area: "Learning", note: "Enroll, certify, or finish the language app streak — Jupiter still has your back." },
      { area: "Network", note: "Say yes to small invitations. Loose ties pay off bigger than usual." },
    ],
    image: jupiterImg,
    color: "#d8a96a",
  },
  {
    slug: "saturn-in-pisces",
    planet: "Saturn",
    glyph: "♄",
    title: "Saturn in Pisces (final months)",
    sign: "Pisces",
    status: "Direct",
    window: "Currently 17° Pisces · final exit ~Sept 2026, then Aries",
    short:
      "Saturn (structure, accountability) is finishing its ~2.5-year passage through Pisces (dreams, faith, surrender) — a closing exam on what you actually believe and what you're done pretending to.",
    long:
      "Saturn spends about 2.5 years in each sidereal sign. In Pisces it's an awkward placement — Saturn wants edges, Pisces dissolves them — so the lesson is usually about giving real shape to something previously imaginary: a spiritual practice, an artistic vocation, a recovery, a vow.\n\nWhy it happens: every Saturn transit is a long-form test of one area of life. Pisces rules faith, art, grief, the unconscious, and what can't be measured. Saturn's job is to ask whether what you say you believe survives contact with deadlines, money, and other people. On May 29, 2026 Saturn sits at about 17° Pisces, slowing down ahead of its July retrograde — the final review before it enters Aries for good in late 2026.\n\nHow you'll feel it: a quiet pressure to either build the dream into something real or admit it isn't yours. Spiritual teachers, sponsors, therapists, and creative mentors take on more weight. Old griefs surface to be processed, not re-buried.\n\nExamples in real life: an artist who's been 'about to launch' for years finally ships a real product — or quietly stops calling themselves an artist. A long meditation or recovery practice becomes the spine of a life instead of a hobby. Someone leaves a faith community that stopped feeling true and finds, to their surprise, that their faith deepens. A creative collaborator turns out to be more flattery than substance and the partnership ends without drama.",
    themes: ["Reality-checking dreams", "Spiritual discipline", "Closing chapter"],
    affects: [
      { area: "Faith", note: "What survives this year is what you actually live by, not what you claim." },
      { area: "Creative", note: "Ship the small real version. Stop polishing the imaginary big one." },
      { area: "Grief", note: "Old losses can finally be put down. Let them be witnessed, then move." },
    ],
    image: saturnImg,
    color: "#d4b48a",
  },
  {
    slug: "neptune-in-pisces",
    planet: "Neptune",
    glyph: "♆",
    title: "Neptune just entered Pisces",
    sign: "Pisces",
    status: "Direct",
    window: "Sidereal ingress: spring 2026 · in Pisces through ~2040",
    short:
      "Neptune (dreams, ideology, dissolution) has just crossed into its home sign Pisces (faith, art, the unconscious) — the start of a generational ~14-year tide that washes the internet-era dream away and reawakens the mystical one.",
    long:
      "Neptune spends ~14 years in each sidereal sign and is the slowest of the visible planets. After almost three decades in Aquarius (1998–early 2026 in True Sky terms), Neptune has just crossed into Pisces — the sign it rules. On May 29, 2026 Neptune sits at about 9° Pisces, in its first months of a stay that will last into the 2040s.\n\nWhy it matters: Pisces is Neptune's home. Where Neptune-in-Aquarius dissolved our faith in networks, platforms, and ideologies, Neptune-in-Pisces dissolves the boundary between self and everything else. Expect a slow return of the mystical, the artistic, and the genuinely religious — alongside the same sign's shadow: addiction, escapism, and beautiful lies.\n\nHow you'll feel it: dreams become more vivid, intuition louder, the appetite for art and silence stronger. Old certainties soften. People around you start meditating, going on retreats, returning to traditions, or quitting things they'd numbed themselves with.\n\nExamples in real life: an industry built on outrage starts losing its grip on you. A creative impulse you'd suppressed for a decade resurfaces and you make space for it. A friend disappears into a retreat, a faith, or a substance and you have to decide how to love them through it. The cultural mood begins a long shift from cynicism to longing.",
    themes: ["Return of the mystical", "Art reawakens", "Watch for escapism"],
    affects: [
      { area: "Inner life", note: "Dreams, intuition, and longing all get louder. Make room to listen." },
      { area: "Creative", note: "The art project you'd shelved wants back in. Start small." },
      { area: "Caution", note: "Pisces' shadow is escape. Notice what you're numbing." },
    ],
    image: neptuneImg,
    color: "#7eb6c4",
  },
  {
    slug: "uranus-in-taurus",
    planet: "Uranus",
    glyph: "♅",
    title: "Uranus in Taurus",
    sign: "Taurus",
    status: "Direct",
    window: "2018 — 2026 (sidereal) · final months before Gemini",
    short:
      "Uranus (sudden change, disruption) is at 7° Taurus, wrapping up ~7 years in the sign of money, body, and land. With the Sun nearby in Taurus this week, surprise news around finances or possessions stays elevated.",
    long:
      "Uranus only changes signs every ~7 years. In True Sky sidereal terms Uranus has been in Taurus since 2018 and is in its final stretch — ingress into Gemini comes later in 2026. Its job in Taurus has been to shake everything Taurus rules — money systems, food, land, ownership, the body — until what's no longer stable gets replaced.\n\nWhy it happens: Uranus takes 84 years to circle the zodiac, so each sign-ingress reshapes one slice of life for nearly a decade. The Taurus era brought inflation shocks, supply-chain rewires, new payment rails, crypto booms and busts, food-system anxiety, and a global re-evaluation of what's actually 'safe to own.' On May 29, 2026 Uranus at 7° Taurus is within range of the Sun at 14° Taurus — a configuration that historically delivers sudden news, abrupt market moves, or unexpected information about money and resources.\n\nHow you'll feel it: a restlessness about where your money sits, what you own, what you eat, what you depend on. Long-stable arrangements suddenly seem worth questioning. Expect at least one 'where did that come from?' moment around finances or possessions in the coming days.\n\nExamples in real life: an unexpected bill, refund, or job offer reshuffles a budget overnight. A bank, employer, or platform changes a policy and you scramble. You suddenly want to move, sell something big, or change your diet completely. A market headline lands at exactly the wrong (or right) time. Don't make permanent decisions during the spike — wait for the dust to settle in mid-June.",
    themes: ["Money shocks", "Body reset", "Closing chapter"],
    affects: [
      { area: "Finances", note: "Watch for surprise news this week. React in days, not minutes." },
      { area: "Body", note: "Sudden urge to change diet, training, or sleep. Test before committing." },
      { area: "Stability", note: "What still feels solid after the shake is what you actually own." },
    ],
    image: uranusImg,
    color: "#9bb8d4",
  },
  {
    slug: "pluto-retrograde-capricorn",
    planet: "Pluto",
    glyph: "♇",
    title: "Pluto Retrograde in Capricorn",
    sign: "Capricorn",
    status: "Retrograde",
    window: "May 3 — Oct 13, 2026 (sidereal)",
    short:
      "Pluto (deep transformation, power) is retrograde at 11° Capricorn (institutions, authority, structure) — a five-month internal audit of the systems you still owe loyalty to.",
    long:
      "Pluto only moves ~2° a year, so its annual retrograde isn't a quick shake-up — it's a slow internal review. In the True Sky sidereal zodiac Pluto is still in Capricorn for the rest of this decade, finishing a generational reworking of authority, government, corporations, and family hierarchies.\n\nWhy it happens: Pluto appears to retrograde for ~5 months each year because Earth, on its faster orbit, periodically overtakes it. Astrologically this is the cosmos's annual audit of whatever Pluto rules — power, decay, and what's hidden underneath. In Capricorn, the audit is structural: who's actually in charge, who pays the costs, what 'the rules' really protect. With the Sun and Mercury in Taurus forming a supportive earth trine to Pluto this week, the review is quiet but unusually clear-eyed.\n\nHow you'll feel it: a slow loss of patience with hierarchies you've been quietly tolerating — at work, in family systems, in institutions. You see the politics under your industry, the unspoken rank in a friend group, the deal your job has actually been offering. Resist the urge to torch anything publicly. Pluto rewards quiet leverage and patient exits.\n\nExamples in real life: an employee at a 'mission-driven' company finally admits the mission is marketing and starts plotting a move. A family role you've played for decades feels costume-like and you stop performing it. A political belief inherited from your parents quietly drops away — not in a fight, just in noticing. A boss, landlord, or institution shows their real face and you finally see it without flinching.",
    themes: ["Power review", "Systems audit", "Quiet exit"],
    affects: [
      { area: "Work", note: "You see your industry's politics more clearly. Observe first; don't react." },
      { area: "Family", note: "Old roles feel costume-like. Step out of them quietly." },
      { area: "Authority", note: "Question what you've been calling 'the rules.' Some weren't." },
    ],
    image: plutoImg,
    color: "#7a5a9b",
  },
];

// Featured transit rotates with the calendar — pick the one whose peak
// window actually contains today, falling back to the closest upcoming one.
const FEATURED_SCHEDULE: { slug: string; from: string; to: string }[] = [
  { slug: "sun-conjunct-mercury-taurus", from: "2026-05-14", to: "2026-05-25" },
  { slug: "mars-in-aries", from: "2026-05-26", to: "2026-06-08" },
  { slug: "jupiter-in-gemini", from: "2026-06-09", to: "2026-06-15" },
  { slug: "saturn-in-pisces", from: "2026-06-16", to: "2026-09-30" },
];

function pickFeaturedSlug(): string {
  const today = new Date().toISOString().slice(0, 10);
  const hit = FEATURED_SCHEDULE.find((s) => today >= s.from && today <= s.to);
  return hit?.slug ?? "mars-in-aries";
}

export const featuredTransit =
  transits.find((t) => t.slug === pickFeaturedSlug()) ??
  transits.find((t) => t.slug === "mars-in-aries") ??
  transits[0];
