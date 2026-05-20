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

// Top 3 most populated cities in each state, with the best-documented
// founding / incorporation date for each. Where only a year is reliably
// known the date is shown as the year only.
export const topStateCities: Place[] = [
  // Alabama
  { name: "Huntsville", kind: "city", state: "Alabama", foundedOn: "1811-11-25", foundedLabel: "November 25, 1811" },
  { name: "Birmingham", kind: "city", state: "Alabama", foundedOn: "1871-06-01", foundedLabel: "June 1, 1871" },
  { name: "Montgomery", kind: "city", state: "Alabama", foundedOn: "1819-12-03", foundedLabel: "December 3, 1819" },
  // Alaska
  { name: "Anchorage", kind: "city", state: "Alaska", foundedOn: "1914-07-09", foundedLabel: "July 9, 1914" },
  { name: "Fairbanks", kind: "city", state: "Alaska", foundedOn: "1901-08-26", foundedLabel: "August 26, 1901" },
  { name: "Juneau", kind: "city", state: "Alaska", foundedOn: "1881-10-18", foundedLabel: "October 18, 1881" },
  // Arizona
  { name: "Phoenix", kind: "city", state: "Arizona", foundedOn: "1881-02-25", foundedLabel: "February 25, 1881" },
  { name: "Tucson", kind: "city", state: "Arizona", foundedOn: "1775-08-20", foundedLabel: "August 20, 1775" },
  { name: "Mesa", kind: "city", state: "Arizona", foundedOn: "1878-07-17", foundedLabel: "July 17, 1878" },
  // Arkansas
  { name: "Little Rock", kind: "city", state: "Arkansas", foundedOn: "1821-11-07", foundedLabel: "November 7, 1821" },
  { name: "Fort Smith", kind: "city", state: "Arkansas", foundedOn: "1817-12-25", foundedLabel: "December 25, 1817" },
  { name: "Fayetteville", kind: "city", state: "Arkansas", foundedOn: "1828-10-17", foundedLabel: "October 17, 1828" },
  // California
  { name: "Los Angeles", kind: "city", state: "California", foundedOn: "1781-09-04", foundedLabel: "September 4, 1781" },
  { name: "San Diego", kind: "city", state: "California", foundedOn: "1769-07-16", foundedLabel: "July 16, 1769" },
  { name: "San Jose", kind: "city", state: "California", foundedOn: "1777-11-29", foundedLabel: "November 29, 1777" },
  // Colorado
  { name: "Denver", kind: "city", state: "Colorado", foundedOn: "1858-11-22", foundedLabel: "November 22, 1858" },
  { name: "Colorado Springs", kind: "city", state: "Colorado", foundedOn: "1871-07-31", foundedLabel: "July 31, 1871" },
  { name: "Aurora", kind: "city", state: "Colorado", foundedOn: "1891-05-02", foundedLabel: "May 2, 1891" },
  // Connecticut
  { name: "Bridgeport", kind: "city", state: "Connecticut", foundedOn: "1836-05-01", foundedLabel: "May 1, 1836" },
  { name: "Stamford", kind: "city", state: "Connecticut", foundedOn: "1641-04-06", foundedLabel: "April 6, 1641" },
  { name: "New Haven", kind: "city", state: "Connecticut", foundedOn: "1638-04-24", foundedLabel: "April 24, 1638" },
  // Delaware
  { name: "Wilmington", kind: "city", state: "Delaware", foundedOn: "1638-03-29", foundedLabel: "March 29, 1638" },
  { name: "Dover", kind: "city", state: "Delaware", foundedOn: "1683-01-01", foundedLabel: "1683" },
  { name: "Newark", kind: "city", state: "Delaware", foundedOn: "1758-01-01", foundedLabel: "1758" },
  // Florida
  { name: "Jacksonville", kind: "city", state: "Florida", foundedOn: "1822-06-15", foundedLabel: "June 15, 1822" },
  { name: "Miami", kind: "city", state: "Florida", foundedOn: "1896-07-28", foundedLabel: "July 28, 1896" },
  { name: "Tampa", kind: "city", state: "Florida", foundedOn: "1849-01-18", foundedLabel: "January 18, 1849" },
  // Georgia
  { name: "Atlanta", kind: "city", state: "Georgia", foundedOn: "1837-12-29", foundedLabel: "December 29, 1837" },
  { name: "Augusta", kind: "city", state: "Georgia", foundedOn: "1736-06-14", foundedLabel: "June 14, 1736" },
  { name: "Columbus", kind: "city", state: "Georgia", foundedOn: "1828-02-10", foundedLabel: "February 10, 1828" },
  // Hawaii
  { name: "Honolulu", kind: "city", state: "Hawaii", foundedOn: "1850-08-30", foundedLabel: "August 30, 1850" },
  { name: "Pearl City", kind: "city", state: "Hawaii", foundedOn: "1890-01-01", foundedLabel: "1890" },
  { name: "Hilo", kind: "city", state: "Hawaii", foundedOn: "1822-01-01", foundedLabel: "1822" },
  // Idaho
  { name: "Boise", kind: "city", state: "Idaho", foundedOn: "1863-07-07", foundedLabel: "July 7, 1863" },
  { name: "Meridian", kind: "city", state: "Idaho", foundedOn: "1903-08-19", foundedLabel: "August 19, 1903" },
  { name: "Nampa", kind: "city", state: "Idaho", foundedOn: "1885-01-01", foundedLabel: "1885" },
  // Illinois
  { name: "Chicago", kind: "city", state: "Illinois", foundedOn: "1837-03-04", foundedLabel: "March 4, 1837" },
  { name: "Aurora", kind: "city", state: "Illinois", foundedOn: "1837-04-03", foundedLabel: "April 3, 1837" },
  { name: "Naperville", kind: "city", state: "Illinois", foundedOn: "1831-01-01", foundedLabel: "1831" },
  // Indiana
  { name: "Indianapolis", kind: "city", state: "Indiana", foundedOn: "1821-01-06", foundedLabel: "January 6, 1821" },
  { name: "Fort Wayne", kind: "city", state: "Indiana", foundedOn: "1794-10-22", foundedLabel: "October 22, 1794" },
  { name: "Evansville", kind: "city", state: "Indiana", foundedOn: "1812-01-01", foundedLabel: "1812" },
  // Iowa
  { name: "Des Moines", kind: "city", state: "Iowa", foundedOn: "1843-05-20", foundedLabel: "May 20, 1843" },
  { name: "Cedar Rapids", kind: "city", state: "Iowa", foundedOn: "1849-01-15", foundedLabel: "January 15, 1849" },
  { name: "Davenport", kind: "city", state: "Iowa", foundedOn: "1836-05-14", foundedLabel: "May 14, 1836" },
  // Kansas
  { name: "Wichita", kind: "city", state: "Kansas", foundedOn: "1870-07-21", foundedLabel: "July 21, 1870" },
  { name: "Overland Park", kind: "city", state: "Kansas", foundedOn: "1960-05-20", foundedLabel: "May 20, 1960" },
  { name: "Kansas City", kind: "city", state: "Kansas", foundedOn: "1872-10-22", foundedLabel: "October 22, 1872" },
  // Kentucky
  { name: "Louisville", kind: "city", state: "Kentucky", foundedOn: "1778-05-01", foundedLabel: "May 1, 1778" },
  { name: "Lexington", kind: "city", state: "Kentucky", foundedOn: "1775-06-05", foundedLabel: "June 5, 1775" },
  { name: "Bowling Green", kind: "city", state: "Kentucky", foundedOn: "1798-03-06", foundedLabel: "March 6, 1798" },
  // Louisiana
  { name: "New Orleans", kind: "city", state: "Louisiana", foundedOn: "1718-05-07", foundedLabel: "May 7, 1718" },
  { name: "Baton Rouge", kind: "city", state: "Louisiana", foundedOn: "1817-01-16", foundedLabel: "January 16, 1817" },
  { name: "Shreveport", kind: "city", state: "Louisiana", foundedOn: "1839-05-19", foundedLabel: "May 19, 1839" },
  // Maine
  { name: "Portland", kind: "city", state: "Maine", foundedOn: "1786-07-04", foundedLabel: "July 4, 1786" },
  { name: "Lewiston", kind: "city", state: "Maine", foundedOn: "1795-02-18", foundedLabel: "February 18, 1795" },
  { name: "Bangor", kind: "city", state: "Maine", foundedOn: "1791-02-25", foundedLabel: "February 25, 1791" },
  // Maryland
  { name: "Baltimore", kind: "city", state: "Maryland", foundedOn: "1729-07-30", foundedLabel: "July 30, 1729" },
  { name: "Columbia", kind: "city", state: "Maryland", foundedOn: "1967-06-21", foundedLabel: "June 21, 1967" },
  { name: "Germantown", kind: "city", state: "Maryland", foundedOn: "1840-01-01", foundedLabel: "1840" },
  // Massachusetts
  { name: "Boston", kind: "city", state: "Massachusetts", foundedOn: "1630-09-17", foundedLabel: "September 17, 1630" },
  { name: "Worcester", kind: "city", state: "Massachusetts", foundedOn: "1722-06-14", foundedLabel: "June 14, 1722" },
  { name: "Springfield", kind: "city", state: "Massachusetts", foundedOn: "1636-05-14", foundedLabel: "May 14, 1636" },
  // Michigan
  { name: "Detroit", kind: "city", state: "Michigan", foundedOn: "1701-07-24", foundedLabel: "July 24, 1701" },
  { name: "Grand Rapids", kind: "city", state: "Michigan", foundedOn: "1826-01-01", foundedLabel: "1826" },
  { name: "Warren", kind: "city", state: "Michigan", foundedOn: "1837-03-11", foundedLabel: "March 11, 1837" },
  // Minnesota
  { name: "Minneapolis", kind: "city", state: "Minnesota", foundedOn: "1867-03-06", foundedLabel: "March 6, 1867" },
  { name: "Saint Paul", kind: "city", state: "Minnesota", foundedOn: "1854-03-04", foundedLabel: "March 4, 1854" },
  { name: "Rochester", kind: "city", state: "Minnesota", foundedOn: "1854-07-19", foundedLabel: "July 19, 1854" },
  // Mississippi
  { name: "Jackson", kind: "city", state: "Mississippi", foundedOn: "1821-11-28", foundedLabel: "November 28, 1821" },
  { name: "Gulfport", kind: "city", state: "Mississippi", foundedOn: "1898-07-28", foundedLabel: "July 28, 1898" },
  { name: "Southaven", kind: "city", state: "Mississippi", foundedOn: "1980-09-02", foundedLabel: "September 2, 1980" },
  // Missouri
  { name: "Kansas City", kind: "city", state: "Missouri", foundedOn: "1850-06-01", foundedLabel: "June 1, 1850" },
  { name: "St. Louis", kind: "city", state: "Missouri", foundedOn: "1764-02-14", foundedLabel: "February 14, 1764" },
  { name: "Springfield", kind: "city", state: "Missouri", foundedOn: "1838-02-20", foundedLabel: "February 20, 1838" },
  // Montana
  { name: "Billings", kind: "city", state: "Montana", foundedOn: "1882-03-22", foundedLabel: "March 22, 1882" },
  { name: "Missoula", kind: "city", state: "Montana", foundedOn: "1866-01-01", foundedLabel: "1866" },
  { name: "Great Falls", kind: "city", state: "Montana", foundedOn: "1883-10-15", foundedLabel: "October 15, 1883" },
  // Nebraska
  { name: "Omaha", kind: "city", state: "Nebraska", foundedOn: "1854-07-04", foundedLabel: "July 4, 1854" },
  { name: "Lincoln", kind: "city", state: "Nebraska", foundedOn: "1856-08-06", foundedLabel: "August 6, 1856" },
  { name: "Bellevue", kind: "city", state: "Nebraska", foundedOn: "1822-01-01", foundedLabel: "1822" },
  // Nevada
  { name: "Las Vegas", kind: "city", state: "Nevada", foundedOn: "1905-05-15", foundedLabel: "May 15, 1905" },
  { name: "Henderson", kind: "city", state: "Nevada", foundedOn: "1953-04-16", foundedLabel: "April 16, 1953" },
  { name: "Reno", kind: "city", state: "Nevada", foundedOn: "1868-05-09", foundedLabel: "May 9, 1868" },
  // New Hampshire
  { name: "Manchester", kind: "city", state: "New Hampshire", foundedOn: "1722-01-01", foundedLabel: "1722" },
  { name: "Nashua", kind: "city", state: "New Hampshire", foundedOn: "1673-01-01", foundedLabel: "1673" },
  { name: "Concord", kind: "city", state: "New Hampshire", foundedOn: "1659-01-01", foundedLabel: "1659" },
  // New Jersey
  { name: "Newark", kind: "city", state: "New Jersey", foundedOn: "1666-05-17", foundedLabel: "May 17, 1666" },
  { name: "Jersey City", kind: "city", state: "New Jersey", foundedOn: "1820-01-28", foundedLabel: "January 28, 1820" },
  { name: "Paterson", kind: "city", state: "New Jersey", foundedOn: "1791-07-04", foundedLabel: "July 4, 1791" },
  // New Mexico
  { name: "Albuquerque", kind: "city", state: "New Mexico", foundedOn: "1706-04-23", foundedLabel: "April 23, 1706" },
  { name: "Las Cruces", kind: "city", state: "New Mexico", foundedOn: "1849-04-26", foundedLabel: "April 26, 1849" },
  { name: "Rio Rancho", kind: "city", state: "New Mexico", foundedOn: "1981-06-09", foundedLabel: "June 9, 1981" },
  // New York
  { name: "New York City", kind: "city", state: "New York", foundedOn: "1624-01-01", foundedLabel: "1624 (as New Amsterdam)" },
  { name: "Buffalo", kind: "city", state: "New York", foundedOn: "1789-01-01", foundedLabel: "1789" },
  { name: "Yonkers", kind: "city", state: "New York", foundedOn: "1646-07-08", foundedLabel: "July 8, 1646" },
  // North Carolina
  { name: "Charlotte", kind: "city", state: "North Carolina", foundedOn: "1768-12-03", foundedLabel: "December 3, 1768" },
  { name: "Raleigh", kind: "city", state: "North Carolina", foundedOn: "1792-04-04", foundedLabel: "April 4, 1792" },
  { name: "Greensboro", kind: "city", state: "North Carolina", foundedOn: "1808-01-01", foundedLabel: "1808" },
  // North Dakota
  { name: "Fargo", kind: "city", state: "North Dakota", foundedOn: "1871-01-01", foundedLabel: "1871" },
  { name: "Bismarck", kind: "city", state: "North Dakota", foundedOn: "1872-06-03", foundedLabel: "June 3, 1872" },
  { name: "Grand Forks", kind: "city", state: "North Dakota", foundedOn: "1870-01-01", foundedLabel: "1870" },
  // Ohio
  { name: "Columbus", kind: "city", state: "Ohio", foundedOn: "1812-02-14", foundedLabel: "February 14, 1812" },
  { name: "Cleveland", kind: "city", state: "Ohio", foundedOn: "1796-07-22", foundedLabel: "July 22, 1796" },
  { name: "Cincinnati", kind: "city", state: "Ohio", foundedOn: "1788-12-28", foundedLabel: "December 28, 1788" },
  // Oklahoma
  { name: "Oklahoma City", kind: "city", state: "Oklahoma", foundedOn: "1889-04-22", foundedLabel: "April 22, 1889" },
  { name: "Tulsa", kind: "city", state: "Oklahoma", foundedOn: "1898-01-18", foundedLabel: "January 18, 1898" },
  { name: "Norman", kind: "city", state: "Oklahoma", foundedOn: "1889-04-22", foundedLabel: "April 22, 1889" },
  // Oregon
  { name: "Portland", kind: "city", state: "Oregon", foundedOn: "1845-02-08", foundedLabel: "February 8, 1845" },
  { name: "Salem", kind: "city", state: "Oregon", foundedOn: "1842-01-01", foundedLabel: "1842" },
  { name: "Eugene", kind: "city", state: "Oregon", foundedOn: "1846-01-01", foundedLabel: "1846" },
  // Pennsylvania
  { name: "Philadelphia", kind: "city", state: "Pennsylvania", foundedOn: "1682-10-27", foundedLabel: "October 27, 1682" },
  { name: "Pittsburgh", kind: "city", state: "Pennsylvania", foundedOn: "1758-11-25", foundedLabel: "November 25, 1758" },
  { name: "Allentown", kind: "city", state: "Pennsylvania", foundedOn: "1762-01-01", foundedLabel: "1762" },
  // Rhode Island
  { name: "Providence", kind: "city", state: "Rhode Island", foundedOn: "1636-06-23", foundedLabel: "June 23, 1636" },
  { name: "Warwick", kind: "city", state: "Rhode Island", foundedOn: "1642-01-12", foundedLabel: "January 12, 1642" },
  { name: "Cranston", kind: "city", state: "Rhode Island", foundedOn: "1754-06-14", foundedLabel: "June 14, 1754" },
  // South Carolina
  { name: "Charleston", kind: "city", state: "South Carolina", foundedOn: "1670-04-01", foundedLabel: "April 1, 1670" },
  { name: "Columbia", kind: "city", state: "South Carolina", foundedOn: "1786-03-22", foundedLabel: "March 22, 1786" },
  { name: "North Charleston", kind: "city", state: "South Carolina", foundedOn: "1972-06-12", foundedLabel: "June 12, 1972" },
  // South Dakota
  { name: "Sioux Falls", kind: "city", state: "South Dakota", foundedOn: "1856-01-01", foundedLabel: "1856" },
  { name: "Rapid City", kind: "city", state: "South Dakota", foundedOn: "1876-02-25", foundedLabel: "February 25, 1876" },
  { name: "Aberdeen", kind: "city", state: "South Dakota", foundedOn: "1881-07-06", foundedLabel: "July 6, 1881" },
  // Tennessee
  { name: "Nashville", kind: "city", state: "Tennessee", foundedOn: "1779-12-25", foundedLabel: "December 25, 1779" },
  { name: "Memphis", kind: "city", state: "Tennessee", foundedOn: "1819-05-22", foundedLabel: "May 22, 1819" },
  { name: "Knoxville", kind: "city", state: "Tennessee", foundedOn: "1791-10-03", foundedLabel: "October 3, 1791" },
  // Texas
  { name: "Houston", kind: "city", state: "Texas", foundedOn: "1836-08-30", foundedLabel: "August 30, 1836" },
  { name: "San Antonio", kind: "city", state: "Texas", foundedOn: "1718-05-01", foundedLabel: "May 1, 1718" },
  { name: "Dallas", kind: "city", state: "Texas", foundedOn: "1841-11-01", foundedLabel: "November 1, 1841" },
  // Utah
  { name: "Salt Lake City", kind: "city", state: "Utah", foundedOn: "1847-07-24", foundedLabel: "July 24, 1847" },
  { name: "West Valley City", kind: "city", state: "Utah", foundedOn: "1980-07-01", foundedLabel: "July 1, 1980" },
  { name: "West Jordan", kind: "city", state: "Utah", foundedOn: "1848-01-01", foundedLabel: "1848" },
  // Vermont
  { name: "Burlington", kind: "city", state: "Vermont", foundedOn: "1763-06-07", foundedLabel: "June 7, 1763" },
  { name: "South Burlington", kind: "city", state: "Vermont", foundedOn: "1865-01-01", foundedLabel: "1865" },
  { name: "Rutland", kind: "city", state: "Vermont", foundedOn: "1761-09-07", foundedLabel: "September 7, 1761" },
  // Virginia
  { name: "Virginia Beach", kind: "city", state: "Virginia", foundedOn: "1963-01-01", foundedLabel: "January 1, 1963" },
  { name: "Chesapeake", kind: "city", state: "Virginia", foundedOn: "1963-01-01", foundedLabel: "January 1, 1963" },
  { name: "Norfolk", kind: "city", state: "Virginia", foundedOn: "1682-08-15", foundedLabel: "August 15, 1682" },
  // Washington
  { name: "Seattle", kind: "city", state: "Washington", foundedOn: "1851-11-13", foundedLabel: "November 13, 1851" },
  { name: "Spokane", kind: "city", state: "Washington", foundedOn: "1881-11-29", foundedLabel: "November 29, 1881" },
  { name: "Tacoma", kind: "city", state: "Washington", foundedOn: "1875-11-12", foundedLabel: "November 12, 1875" },
  // West Virginia
  { name: "Charleston", kind: "city", state: "West Virginia", foundedOn: "1788-01-01", foundedLabel: "1788" },
  { name: "Huntington", kind: "city", state: "West Virginia", foundedOn: "1871-02-27", foundedLabel: "February 27, 1871" },
  { name: "Morgantown", kind: "city", state: "West Virginia", foundedOn: "1785-10-17", foundedLabel: "October 17, 1785" },
  // Wisconsin
  { name: "Milwaukee", kind: "city", state: "Wisconsin", foundedOn: "1846-01-31", foundedLabel: "January 31, 1846" },
  { name: "Madison", kind: "city", state: "Wisconsin", foundedOn: "1856-03-07", foundedLabel: "March 7, 1856" },
  { name: "Green Bay", kind: "city", state: "Wisconsin", foundedOn: "1634-01-01", foundedLabel: "1634" },
  // Wyoming
  { name: "Cheyenne", kind: "city", state: "Wyoming", foundedOn: "1867-07-04", foundedLabel: "July 4, 1867" },
  { name: "Casper", kind: "city", state: "Wyoming", foundedOn: "1888-06-08", foundedLabel: "June 8, 1888" },
  { name: "Laramie", kind: "city", state: "Wyoming", foundedOn: "1868-05-10", foundedLabel: "May 10, 1868" },
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