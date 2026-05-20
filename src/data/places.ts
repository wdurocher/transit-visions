export type Place = {
  name: string;
  kind: "state" | "city";
  state?: string;
  capital?: string;
  // ISO date YYYY-MM-DD of founding / statehood / incorporation
  foundedOn: string;
  foundedLabel: string; // human readable
};

export const states: Place[] = [
  { name: "Delaware", kind: "state", capital: "Dover", foundedOn: "1787-12-07", foundedLabel: "December 7, 1787" },
  { name: "Pennsylvania", kind: "state", capital: "Harrisburg", foundedOn: "1787-12-12", foundedLabel: "December 12, 1787" },
  { name: "New Jersey", kind: "state", capital: "Trenton", foundedOn: "1787-12-18", foundedLabel: "December 18, 1787" },
  { name: "Georgia", kind: "state", capital: "Atlanta", foundedOn: "1788-01-02", foundedLabel: "January 2, 1788" },
  { name: "Connecticut", kind: "state", capital: "Hartford", foundedOn: "1788-01-09", foundedLabel: "January 9, 1788" },
  { name: "Massachusetts", kind: "state", capital: "Boston", foundedOn: "1788-02-06", foundedLabel: "February 6, 1788" },
  { name: "Maryland", kind: "state", capital: "Annapolis", foundedOn: "1788-04-28", foundedLabel: "April 28, 1788" },
  { name: "South Carolina", kind: "state", capital: "Columbia", foundedOn: "1788-05-23", foundedLabel: "May 23, 1788" },
  { name: "New Hampshire", kind: "state", capital: "Concord", foundedOn: "1788-06-21", foundedLabel: "June 21, 1788" },
  { name: "Virginia", kind: "state", capital: "Richmond", foundedOn: "1788-06-25", foundedLabel: "June 25, 1788" },
  { name: "New York", kind: "state", capital: "Albany", foundedOn: "1788-07-26", foundedLabel: "July 26, 1788" },
  { name: "North Carolina", kind: "state", capital: "Raleigh", foundedOn: "1789-11-21", foundedLabel: "November 21, 1789" },
  { name: "Rhode Island", kind: "state", capital: "Providence", foundedOn: "1790-05-29", foundedLabel: "May 29, 1790" },
  { name: "Vermont", kind: "state", capital: "Montpelier", foundedOn: "1791-03-04", foundedLabel: "March 4, 1791" },
  { name: "Kentucky", kind: "state", capital: "Frankfort", foundedOn: "1792-06-01", foundedLabel: "June 1, 1792" },
  { name: "Tennessee", kind: "state", capital: "Nashville", foundedOn: "1796-06-01", foundedLabel: "June 1, 1796" },
  { name: "Ohio", kind: "state", capital: "Columbus", foundedOn: "1803-03-01", foundedLabel: "March 1, 1803" },
  { name: "Louisiana", kind: "state", capital: "Baton Rouge", foundedOn: "1812-04-30", foundedLabel: "April 30, 1812" },
  { name: "Indiana", kind: "state", capital: "Indianapolis", foundedOn: "1816-12-11", foundedLabel: "December 11, 1816" },
  { name: "Mississippi", kind: "state", capital: "Jackson", foundedOn: "1817-12-10", foundedLabel: "December 10, 1817" },
  { name: "Illinois", kind: "state", capital: "Springfield", foundedOn: "1818-12-03", foundedLabel: "December 3, 1818" },
  { name: "Alabama", kind: "state", capital: "Montgomery", foundedOn: "1819-12-14", foundedLabel: "December 14, 1819" },
  { name: "Maine", kind: "state", capital: "Augusta", foundedOn: "1820-03-15", foundedLabel: "March 15, 1820" },
  { name: "Missouri", kind: "state", capital: "Jefferson City", foundedOn: "1821-08-10", foundedLabel: "August 10, 1821" },
  { name: "Arkansas", kind: "state", capital: "Little Rock", foundedOn: "1836-06-15", foundedLabel: "June 15, 1836" },
  { name: "Michigan", kind: "state", capital: "Lansing", foundedOn: "1837-01-26", foundedLabel: "January 26, 1837" },
  { name: "Florida", kind: "state", capital: "Tallahassee", foundedOn: "1845-03-03", foundedLabel: "March 3, 1845" },
  { name: "Texas", kind: "state", capital: "Austin", foundedOn: "1845-12-29", foundedLabel: "December 29, 1845" },
  { name: "Iowa", kind: "state", capital: "Des Moines", foundedOn: "1846-12-28", foundedLabel: "December 28, 1846" },
  { name: "Wisconsin", kind: "state", capital: "Madison", foundedOn: "1848-05-29", foundedLabel: "May 29, 1848" },
  { name: "California", kind: "state", capital: "Sacramento", foundedOn: "1850-09-09", foundedLabel: "September 9, 1850" },
  { name: "Minnesota", kind: "state", capital: "Saint Paul", foundedOn: "1858-05-11", foundedLabel: "May 11, 1858" },
  { name: "Oregon", kind: "state", capital: "Salem", foundedOn: "1859-02-14", foundedLabel: "February 14, 1859" },
  { name: "Kansas", kind: "state", capital: "Topeka", foundedOn: "1861-01-29", foundedLabel: "January 29, 1861" },
  { name: "West Virginia", kind: "state", capital: "Charleston", foundedOn: "1863-06-20", foundedLabel: "June 20, 1863" },
  { name: "Nevada", kind: "state", capital: "Carson City", foundedOn: "1864-10-31", foundedLabel: "October 31, 1864" },
  { name: "Nebraska", kind: "state", capital: "Lincoln", foundedOn: "1867-03-01", foundedLabel: "March 1, 1867" },
  { name: "Colorado", kind: "state", capital: "Denver", foundedOn: "1876-08-01", foundedLabel: "August 1, 1876" },
  { name: "North Dakota", kind: "state", capital: "Bismarck", foundedOn: "1889-11-02", foundedLabel: "November 2, 1889" },
  { name: "South Dakota", kind: "state", capital: "Pierre", foundedOn: "1889-11-02", foundedLabel: "November 2, 1889" },
  { name: "Montana", kind: "state", capital: "Helena", foundedOn: "1889-11-08", foundedLabel: "November 8, 1889" },
  { name: "Washington", kind: "state", capital: "Olympia", foundedOn: "1889-11-11", foundedLabel: "November 11, 1889" },
  { name: "Idaho", kind: "state", capital: "Boise", foundedOn: "1890-07-03", foundedLabel: "July 3, 1890" },
  { name: "Wyoming", kind: "state", capital: "Cheyenne", foundedOn: "1890-07-10", foundedLabel: "July 10, 1890" },
  { name: "Utah", kind: "state", capital: "Salt Lake City", foundedOn: "1896-01-04", foundedLabel: "January 4, 1896" },
  { name: "Oklahoma", kind: "state", capital: "Oklahoma City", foundedOn: "1907-11-16", foundedLabel: "November 16, 1907" },
  { name: "New Mexico", kind: "state", capital: "Santa Fe", foundedOn: "1912-01-06", foundedLabel: "January 6, 1912" },
  { name: "Arizona", kind: "state", capital: "Phoenix", foundedOn: "1912-02-14", foundedLabel: "February 14, 1912" },
  { name: "Alaska", kind: "state", capital: "Juneau", foundedOn: "1959-01-03", foundedLabel: "January 3, 1959" },
  { name: "Hawaii", kind: "state", capital: "Honolulu", foundedOn: "1959-08-21", foundedLabel: "August 21, 1959" },
];

export const popularCities: Place[] = [
  { name: "New York City", kind: "city", state: "New York", foundedOn: "1624-01-01", foundedLabel: "1624 (as New Amsterdam)" },
  { name: "Los Angeles", kind: "city", state: "California", foundedOn: "1781-09-04", foundedLabel: "September 4, 1781" },
  { name: "Chicago", kind: "city", state: "Illinois", foundedOn: "1837-03-04", foundedLabel: "March 4, 1837" },
  { name: "Houston", kind: "city", state: "Texas", foundedOn: "1836-08-30", foundedLabel: "August 30, 1836" },
  { name: "Philadelphia", kind: "city", state: "Pennsylvania", foundedOn: "1682-10-27", foundedLabel: "October 27, 1682" },
  { name: "Phoenix", kind: "city", state: "Arizona", foundedOn: "1881-02-25", foundedLabel: "February 25, 1881" },
  { name: "San Antonio", kind: "city", state: "Texas", foundedOn: "1718-05-01", foundedLabel: "May 1, 1718" },
  { name: "San Diego", kind: "city", state: "California", foundedOn: "1769-07-16", foundedLabel: "July 16, 1769" },
  { name: "Dallas", kind: "city", state: "Texas", foundedOn: "1856-02-02", foundedLabel: "February 2, 1856" },
  { name: "Boston", kind: "city", state: "Massachusetts", foundedOn: "1630-09-17", foundedLabel: "September 17, 1630" },
];

const chineseAnimals = [
  { animal: "Rat", emoji: "🐀" },
  { animal: "Ox", emoji: "🐂" },
  { animal: "Tiger", emoji: "🐅" },
  { animal: "Rabbit", emoji: "🐇" },
  { animal: "Dragon", emoji: "🐉" },
  { animal: "Snake", emoji: "🐍" },
  { animal: "Horse", emoji: "🐎" },
  { animal: "Goat", emoji: "🐐" },
  { animal: "Monkey", emoji: "🐒" },
  { animal: "Rooster", emoji: "🐓" },
  { animal: "Dog", emoji: "🐕" },
  { animal: "Pig", emoji: "🐖" },
];

export function chineseZodiacForYear(year: number): { animal: string; emoji: string } {
  const idx = ((year - 4) % 12 + 12) % 12;
  return chineseAnimals[idx];
}

type WesternSign = { name: string; glyph: string };

const westernSigns: { name: string; glyph: string; from: [number, number]; to: [number, number] }[] = [
  { name: "Capricorn", glyph: "♑", from: [12, 22], to: [1, 19] },
  { name: "Aquarius", glyph: "♒", from: [1, 20], to: [2, 18] },
  { name: "Pisces", glyph: "♓", from: [2, 19], to: [3, 20] },
  { name: "Aries", glyph: "♈", from: [3, 21], to: [4, 19] },
  { name: "Taurus", glyph: "♉", from: [4, 20], to: [5, 20] },
  { name: "Gemini", glyph: "♊", from: [5, 21], to: [6, 20] },
  { name: "Cancer", glyph: "♋", from: [6, 21], to: [7, 22] },
  { name: "Leo", glyph: "♌", from: [7, 23], to: [8, 22] },
  { name: "Virgo", glyph: "♍", from: [8, 23], to: [9, 22] },
  { name: "Libra", glyph: "♎", from: [9, 23], to: [10, 22] },
  { name: "Scorpio", glyph: "♏", from: [10, 23], to: [11, 21] },
  { name: "Sagittarius", glyph: "♐", from: [11, 22], to: [12, 21] },
];

export function westernSignForDate(iso: string): WesternSign {
  const [, m, d] = iso.split("-").map(Number);
  for (const s of westernSigns) {
    const [fm, fd] = s.from;
    const [tm, td] = s.to;
    if (fm === tm) {
      if (m === fm && d >= fd && d <= td) return { name: s.name, glyph: s.glyph };
    } else if (fm < tm) {
      if ((m === fm && d >= fd) || (m === tm && d <= td)) return { name: s.name, glyph: s.glyph };
    } else {
      // wraps year (Capricorn)
      if ((m === fm && d >= fd) || (m === tm && d <= td)) return { name: s.name, glyph: s.glyph };
    }
  }
  return { name: "Capricorn", glyph: "♑" };
}

export function yearOf(iso: string): number {
  return Number(iso.slice(0, 4));
}