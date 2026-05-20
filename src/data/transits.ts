import saturnImg from "@/assets/saturn.jpg";
import jupiterImg from "@/assets/jupiter.jpg";
import marsImg from "@/assets/mars.jpg";
import mercuryImg from "@/assets/mercury.jpg";
import venusImg from "@/assets/venus.jpg";
import moonImg from "@/assets/moon.jpg";
import neptuneImg from "@/assets/neptune.jpg";
import sunImg from "@/assets/sun.jpg";

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
  Sun: sunImg,
};

export const transits: Transit[] = [
  {
    slug: "saturn-conjunct-neptune-aries",
    planet: "Saturn",
    glyph: "♄",
    title: "Saturn Conjunct Neptune in Aries",
    sign: "Aries",
    status: "Conjunction",
    window: "Exact: Feb 20 & Aug 6, 2026 — within orb through Oct 2026",
    short:
      "Saturn (reality, structure) and Neptune (dreams, ideals) meet in Aries (identity, new starts) — a once-every-36-years alignment forcing dreams to either prove themselves or dissolve.",
    long:
      "Saturn and Neptune only conjoin every ~36 years, and this is the first time they meet in Aries since 1846. Saturn is the planet of hard limits, accountability, and time; Neptune rules imagination, illusion, and what cannot be measured. When they sit on top of each other, vague visions either get built into something real or they evaporate. In Aries — the sign of will, courage, and beginnings — the question becomes personal: who are you actually willing to become, and what fantasy about yourself are you ready to let go of? On May 19, 2026 the two are roughly 7° apart and tightening, so the pressure is already on.\n\nWhy it happens: Saturn (29-year orbit) and Neptune (165-year orbit) line up from Earth's view roughly every 36 years. The previous conjunctions landed in Capricorn (1989, fall of communism / collapse of 'solid' systems) and Libra (1953, post-war ideological reordering). They meeting in Aries — the first sign of the zodiac — marks the start of a brand-new 36-year cycle, not the end of one. Whatever spiritual or ideological project you begin while they're tight tends to define the next three and a half decades.\n\nHow you'll feel it: a quiet but persistent pressure to prove or abandon a long-running dream. Saturn brings deadlines, contracts, and 'show your work'; Neptune dissolves anything that wasn't real to begin with. You may notice mentors disappointing you, faith communities reorganizing, or a creative vision that suddenly demands rent money.\n\nExamples in real life: an artist who's been 'about to launch' for years either ships a real product or quietly stops calling themselves an artist. A spiritual teacher's contradictions become impossible to ignore. Someone in recovery hits a milestone that turns a private practice into a lasting identity. A startup founder discovers their pitch deck was 60% wishful thinking — and rebuilds the 40% that's true.",
    themes: ["Reality-checking your dreams", "Identity reset", "Spiritual discipline"],
    affects: [
      { area: "Identity", note: "Self-images that aren't true to you fall apart. Build a smaller, realer one." },
      { area: "Vision", note: "Long-held dreams need a first concrete step, not another draft." },
      { area: "Faith", note: "Beliefs get tested. What survives is what you actually live by." },
    ],
    image: saturnImg,
    color: "#d4b48a",
  },
  {
    slug: "jupiter-in-cancer",
    planet: "Jupiter",
    glyph: "♃",
    title: "Jupiter in Cancer",
    sign: "Cancer",
    status: "Direct",
    window: "Jun 30, 2025 — Jun 30, 2026",
    short:
      "Jupiter (growth, luck) is exalted in Cancer (home, family, emotional roots). One of the most generous yearly transits — your inner life, household, and sense of belonging expand.",
    long:
      "Astrologers say Jupiter is 'exalted' in Cancer — meaning it works at its very best here. Jupiter wants to grow and protect; Cancer cares about home, family, and feeling safe. Together this is a 12-month window where things tied to roots tend to flourish.\n\nWhy it happens: Jupiter spends roughly one year per sign as it makes its 12-year lap around the zodiac. Cancer is its 'exaltation' sign — an ancient ranking meaning Jupiter's natural urges (generosity, protection, faith) sync perfectly with Cancer's natural concerns (family, home, emotional safety). The last time Jupiter was here was 2013–2014; the next time is 2037.\n\nHow you'll feel it: situations that used to feel scarce — time with family, room in your home, emotional bandwidth — quietly expand. Doors open around housing, hometowns, and ancestry. You may feel unusually nostalgic or protective.\n\nExamples in real life: someone finally buys their first place, or moves back to a city that feels like home. A frosty parent reaches out after years. A friendship deepens to chosen-family level. A side project rooted in cooking, caregiving, real estate, or heritage suddenly takes off. By mid-May 2026 Jupiter is in its final weeks here — lock in home, family, and emotional-foundation projects now.",
    themes: ["Home expansion", "Emotional generosity", "Family healing"],
    affects: [
      { area: "Home", note: "Strong window to move, renovate, or invest in where you live." },
      { area: "Family", note: "Old tensions with parents or siblings ease if you're willing to talk." },
      { area: "Inner life", note: "Self-care that actually nurtures (not just performs) pays off." },
    ],
    image: jupiterImg,
    color: "#d8a96a",
  },
  {
    slug: "uranus-in-gemini",
    planet: "Uranus",
    glyph: "♅",
    title: "Uranus in Gemini",
    sign: "Gemini",
    status: "Direct",
    window: "Apr 25, 2026 — May 22, 2033",
    short:
      "Uranus (sudden change, technology) just entered Gemini (communication, media, ideas) for the first time since 1949 — expect a 7-year revolution in how we talk, learn, and connect.",
    long:
      "Uranus is the planet of disruption and breakthroughs, and it only changes signs every 7 years. It moved into Gemini in late April 2026 — its first visit since 1942–1949, a stretch that produced the transistor, modern computing, and the early information age.\n\nWhy it happens: Uranus takes 84 years to circle the zodiac, so each sign-ingress reshapes one slice of life for almost a decade. Gemini rules language, short-form media, schools, siblings, and how ideas travel. Pair that with Uranus (the planet of sudden, irreversible change) and you get a generational rewrite of communication itself.\n\nHow you'll feel it: a restlessness in your own thinking. You'll abandon news sources, change how you write, pick up languages or coding, and probably ditch at least one social platform. Sudden insights arrive mid-shower or mid-walk; old conversations feel boring overnight.\n\nExamples in real life: a journalist quits their outlet to start a one-person publication. A teacher rebuilds their entire curriculum around AI tools. Two siblings who haven't spoken in years reconnect over a shared obsession. A neighborhood that used to feel sleepy turns into a hub for a new kind of work. Historically, the last Uranus-in-Gemini era gave us the first programmable computers — expect equivalent jumps in how humans and machines talk to each other.",
    themes: ["Communication revolution", "AI and language", "Restless thinking"],
    affects: [
      { area: "Tech", note: "New tools for writing, learning, and connecting arrive faster than you can adopt them. Pick carefully." },
      { area: "Education", note: "Old curricula crack. Self-teaching and short courses gain ground." },
      { area: "Mind", note: "You may feel mentally restless. Build one steady thinking practice (writing, reading, walks)." },
    ],
    image: jupiterImg,
    color: "#9bb8d4",
  },
  {
    slug: "pluto-retrograde-aquarius",
    planet: "Pluto",
    glyph: "♇",
    title: "Pluto Retrograde in Aquarius",
    sign: "Aquarius",
    status: "Retrograde",
    window: "May 3 — Oct 13, 2026",
    short:
      "Pluto (deep transformation, power) turns retrograde in Aquarius (society, networks, systems) — a five-month look back at what collective structures actually need to die.",
    long:
      "Pluto only moves about 2° a year, so its retrograde isn't a quick shake-up — it's a slow internal review.\n\nWhy it happens: Pluto retrogrades for ~5 months every year because Earth, on its faster orbit, periodically overtakes it. From our viewpoint Pluto appears to drift backward against the stars. Astrologically this is the cosmos's annual audit of whatever the planet rules — and Pluto rules power, decay, and what's hidden underneath. In Aquarius (groups, technology, governments, networks), the audit is structural.\n\nHow you'll feel it: a slow loss of patience with systems you've been quietly tolerating. You see the politics under your industry, the unspoken hierarchy in a friend group, the dependency baked into a platform you use daily. Resist the urge to torch anything publicly. Pluto rewards quiet exits and patient leverage, not announcements.\n\nExamples in real life: an employee at a 'mission-driven' company finally admits the mission is marketing, and starts plotting a move. A group chat that ran your social life for years loses its gravity. You delete an app you've used every day for a decade and feel nothing. A political belief you inherited from your parents quietly drops away — not in a fight, just in noticing.",
    themes: ["Power review", "Systems audit", "Quiet exit"],
    affects: [
      { area: "Community", note: "Friend groups and networks get a quiet audit. Some loosen naturally." },
      { area: "Work", note: "You see the politics underneath your industry more clearly. Don't react yet — observe." },
      { area: "Self", note: "Old roles you played in groups feel costume-like. Let them go without drama." },
    ],
    image: neptuneImg,
    color: "#7a5a9b",
  },
  {
    slug: "mercury-in-gemini",
    planet: "Mercury",
    glyph: "☿",
    title: "Mercury in Gemini",
    sign: "Gemini",
    status: "Direct",
    window: "May 11 — Jul 28, 2026",
    short:
      "Mercury (thinking, communication) is at home in Gemini — fast, curious, and great for writing, learning, and short conversations. (Mercury joins Uranus here too.)",
    long:
      "Mercury rules Gemini, so it operates at full power here: thoughts move quickly, you can juggle more conversations, and writing or learning feels easier.\n\nWhy it happens: Gemini is one of Mercury's two 'domicile' signs — its home turf — meaning its qualities (curiosity, wit, multi-tasking, language) match Mercury's natural style perfectly. The twist this year: Uranus has just entered Gemini, so Mercury is brushing past it. That conjunction electrifies the mind: unusually original ideas, sudden insights, occasional foot-in-mouth moments.\n\nHow you'll feel it: an itch to write things down. You wake up with ideas, you finish other people's sentences, you suddenly want to take a class. The downside: scattered focus and over-promising in conversation.\n\nExamples in real life: a draft you've avoided for months gets written in a single afternoon. You start three group chats in one week and forget half of them. A throwaway comment in a meeting becomes the actual plan. You finally text the person you've been meaning to follow up with — and they reply within minutes. The unusually long stay (through late July) thanks to an upcoming Mercury retrograde adds extra weight; pick two writing or learning threads at most.",
    themes: ["Quick thinking", "Original ideas", "Information overload"],
    affects: [
      { area: "Writing", note: "Strong window to draft, brainstorm, and outline. Edit later." },
      { area: "Conversation", note: "Listen for ideas, not just words. People surprise you." },
      { area: "Focus", note: "Pick two threads at most. Everything else is distraction." },
    ],
    image: mercuryImg,
    color: "#bdbdbd",
  },
  {
    slug: "venus-in-cancer",
    planet: "Venus",
    glyph: "♀",
    title: "Venus in Cancer",
    sign: "Cancer",
    status: "Direct",
    window: "May 16 — Jun 9, 2026",
    short:
      "Venus (love, comfort, values) in Cancer (home, care, nostalgia) softens the mood. Affection shows up as cooking, checking in, and protecting the people you love.",
    long:
      "Venus is happy in Cancer. The sign brings out Venus's nurturing side: love feels like being fed, remembered, and protected rather than chased or impressed.\n\nWhy it happens: Venus moves through a sign in about 3–4 weeks under normal speed. In Cancer her two main concerns — relationships and beauty — fuse with Cancer's themes of home, lineage, and emotional safety. With Jupiter also in Cancer right now, the doubling effect makes care, hospitality, and family unusually rewarding.\n\nHow you'll feel it: tender, slightly nostalgic, drawn to your own kitchen, your own people, your own bed. Less interested in being impressive, more interested in being known. Aesthetic taste shifts toward soft fabrics, warm light, and old photos.\n\nExamples in real life: you cook for friends instead of meeting at a restaurant. A long-distance partner suddenly feels too far away. You text your mom for a recipe and end up talking for an hour. A first date that includes a home-cooked meal goes farther than any expensive dinner would. You repaint a room you've been meaning to fix for years.",
    themes: ["Tender affection", "Home as love language", "Nostalgia"],
    affects: [
      { area: "Relationships", note: "Small caring acts land harder than grand gestures." },
      { area: "Home", note: "Good window to host, cook, or upgrade the space you actually live in." },
      { area: "Memory", note: "Old photos and old contacts may resurface. Reach out when it feels right." },
    ],
    image: venusImg,
    color: "#e6cfa6",
  },
  {
    slug: "mars-in-taurus",
    planet: "Mars",
    glyph: "♂",
    title: "Mars in Taurus",
    sign: "Taurus",
    status: "Direct",
    window: "Apr 22 — Jun 17, 2026",
    short:
      "Mars (drive, action) in Taurus (body, money, patience) slows you down on purpose — steady effort beats fast bursts. Best used for building, not blitzing.",
    long:
      "Mars in Taurus is often called Mars in 'detriment' — meaning Mars is uncomfortable here. Mars wants speed; Taurus wants to take its time.\n\nWhy it happens: Taurus is ruled by Venus, the planet most opposite Mars in temperament. Mars favors heat, urgency, and conflict; Taurus favors slowness, comfort, and stability. Forced into Taurus's pace, Mars can't sprint — but it gains endurance it doesn't usually have. The trick is to use the friction instead of fighting it.\n\nHow you'll feel it: a low, steady fuel rather than bursts. Things you start now stick. Things you try to rush turn into a wall — both yours and other people's stubbornness. Anger comes slower but lasts longer; cool off before reacting.\n\nExamples in real life: a strength routine you actually keep up with for the first time. Boring monthly transfers to savings that finally add up. A renovation project that took eight months instead of two but came out right. A negotiation that you 'win' by simply not budging. A relationship issue that resolves by waiting, not confronting.",
    themes: ["Steady effort", "Physical building", "Stubborn patience"],
    affects: [
      { area: "Fitness", note: "Strength and endurance training pay off. Skip novelty workouts." },
      { area: "Money", note: "Slow, boring saving and earning moves work. Avoid impulse spends." },
      { area: "Projects", note: "Pick one thing and grind. Don't start three." },
    ],
    image: marsImg,
    color: "#c46a3f",
  },
  {
    slug: "sun-in-taurus",
    planet: "Sun",
    glyph: "☉",
    title: "Sun in Taurus",
    sign: "Taurus",
    status: "Direct",
    window: "Apr 19 — May 20, 2026",
    short:
      "The Sun (vitality, focus, identity) moves through Taurus (body, money, the senses) — a month to slow down, simplify, and put energy into what's tangible and lasting.",
    long:
      "Every year the Sun spends about 30 days in each sign, lighting up that area of life for everyone. In Taurus, the spotlight turns to the physical world: your body, your money, your home, your food, the things you can touch.\n\nWhy it happens: the Sun is Earth's most reliable timekeeper — its movement through the zodiac defines our seasons. Taurus is a fixed earth sign that follows the burst of Aries energy, so this month-long stretch is when the year's new starts are supposed to be made real, slow, and durable. The window ends around May 20–21 when the Sun crosses into Gemini.\n\nHow you'll feel it: less rushed, more sensual. You notice food, fabric, light, weather. Patience runs higher and so does appetite. Decisions about money, ownership, and comfort feel sharper than usual.\n\nExamples in real life: finally fixing the thing in your apartment you've been ignoring for a year. Cooking a real meal instead of ordering in. A pay raise, a deposit, or a budget conversation that actually moves forward. A long walk that reorganizes a problem you couldn't think through at a desk. The last few days of this transit (May 19 falls in here) are about consolidating — not starting anything new.",
    themes: ["Embodied focus", "Money and value", "Slowing down"],
    affects: [
      { area: "Body", note: "Eating, sleeping, and moving regularly pays off more than usual." },
      { area: "Money", note: "Good window to review subscriptions, raise rates, or negotiate." },
      { area: "Pace", note: "Match the season — don't try to sprint through a month built for steadiness." },
    ],
    image: sunImg,
    color: "#e8b34a",
  },
  {
    slug: "moon-in-leo",
    planet: "Moon",
    glyph: "☽",
    title: "Moon in Leo",
    sign: "Leo",
    status: "Direct",
    window: "May 19 — May 21, 2026 (~2.5 days)",
    short:
      "The Moon (mood, instinct, the inner self) passes through Leo (warmth, expression, the spotlight) for about two and a half days — a short window for play, performance, and big-hearted gestures.",
    long:
      "The Moon is the fastest-moving body in astrology: it changes signs roughly every 2.5 days and circles the entire zodiac in about a month. That makes Moon transits the smallest unit of astrological time — the daily weather underneath everything else.\n\nWhy it happens: the Moon's quick orbit around Earth means it colors each sign briefly but vividly. In Leo — a fixed fire sign ruled by the Sun — the collective mood turns warm, expressive, dramatic, and a little proud. People want to be seen and want to celebrate.\n\nHow you'll feel it: more outgoing than usual, more generous, more theatrical. Compliments land harder (in both directions). Creative work, dressing up, and being affectionate in public all feel natural. The shadow side is touchy pride — minor slights can sting.\n\nExamples in real life: a casual dinner turns into a real party. You post something more personal than you normally would. You give an unexpectedly long, heartfelt toast. A child or pet gets your full attention for an afternoon. A creative project you've been hiding finally goes public. Use these two-and-a-half days for anything that benefits from warmth and visibility — and save sensitive conversations for when the Moon shifts into careful Virgo afterward.",
    themes: ["Warmth", "Self-expression", "Generous mood"],
    affects: [
      { area: "Mood", note: "Big-hearted and a little dramatic. Lean into the warmth, not the pride." },
      { area: "Social", note: "Strong window for celebrating, performing, or making a public gesture." },
      { area: "Creative", note: "Share something you've been hiding. The audience is friendlier than usual." },
    ],
    image: moonImg,
    color: "#e8d28a",
  },
];

export const featuredTransit = transits[0];