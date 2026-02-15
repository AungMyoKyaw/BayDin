/**
 * Gets the Chinese zodiac sign for a given year.
 *
 * The Chinese zodiac is a repeating 12-year cycle where each year
 * is represented by an animal. This function calculates the zodiac
 * sign based on the Gregorian calendar year.
 *
 * @param {number} year - Gregorian calendar year (positive integer)
 * @returns {Object} Object containing zodiac information
 * @returns {string} returns.sign - Zodiac sign name in English
 * @returns {string} returns.signInBurmese - Zodiac sign name in Burmese
 * @throws {Error} If year is not a valid positive integer
 * @example
 * chineseZodiac(2024);
 * // { sign: "Dragon", signInBurmese: "နဂါး" }
 *
 * chineseZodiac(1990);
 * // { sign: "Horse", signInBurmese: "မြင်း" }
 */
function getChineseZodiac(year) {
  // Validate the input
  if (typeof year !== "number" || !Number.isInteger(year) || year <= 0) {
    throw new Error("Please provide a valid year as a positive integer.");
  }

  // Array of Chinese Zodiac signs in the order they repeat
  var zodiacSigns = [
    "Rat",
    "Ox",
    "Tiger",
    "Rabbit",
    "Dragon",
    "Snake",
    "Horse",
    "Goat",
    "Monkey",
    "Rooster",
    "Dog",
    "Pig"
  ];

  var zodiacSignsInBurmese = [
    "ကြွက်",
    "နွား",
    "ကျား",
    "ယုန်",
    "နဂါး",
    "မြွေ",
    "မြင်း",
    "ဆိတ်",
    "မြောက်",
    "ကြက်",
    "ခွေး",
    "ဝက်"
  ];

  // Calculate the index for the zodiac sign
  var index = ((year - 4) % 12 + 12) % 12; // Handle negative modulo

  // Return the corresponding zodiac sign
  return {
    sign: zodiacSigns[index],
    signInBurmese: zodiacSignsInBurmese[index]
  };
}

// Export the function to make it available to other modules
module.exports = getChineseZodiac;
