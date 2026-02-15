/**
 * Gets the Western zodiac sign based on birth date.
 *
 * This function determines the zodiac sign based on the day and month
 * of birth, following the tropical zodiac system used in Western astrology.
 *
 * @param {number} day - Day of birth (1-31)
 * @param {number} month - Month of birth (1-12)
 * @returns {Object} Object containing zodiac information
 * @returns {string} returns.sign - Zodiac sign name in English
 * @returns {string} returns.sign_mm - Zodiac sign name in Myanmar
 * @throws {Error} If invalid date or month input
 * @example
 * zodiac(15, 3);
 * // { sign: "Pisces", sign_mm: "မိန်" }
 *
 * zodiac(25, 12);
 * // { sign: "Capricorn", sign_mm: "မကာရ" }
 */
function getZodiacSign(day, month) {
  // Validate input
  if (
    typeof day !== "number" ||
    typeof month !== "number" ||
    day < 1 ||
    day > 31 ||
    month < 1 ||
    month > 12
  ) {
    throw new Error("Invalid date or month input");
  }

  // Additional validation for days in month
  var daysInMonth = [31, 29, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31];
  if (day > daysInMonth[month - 1]) {
    throw new Error("Invalid day for the given month");
  }

  // Array of zodiac signs and their date ranges
  var zodiacSigns = [
    {
      sign: "Capricorn",
      sign_mm: "မကာရ",
      start: { month: 1, day: 1 },
      end: { month: 1, day: 19 }
    },
    {
      sign: "Aquarius",
      sign_mm: "ကုံ",
      start: { month: 1, day: 20 },
      end: { month: 2, day: 18 }
    },
    {
      sign: "Pisces",
      sign_mm: "မိန်",
      start: { month: 2, day: 19 },
      end: { month: 3, day: 20 }
    },
    {
      sign: "Aries",
      sign_mm: "မိဿ",
      start: { month: 3, day: 21 },
      end: { month: 4, day: 19 }
    },
    {
      sign: "Taurus",
      sign_mm: "ပြိဿ",
      start: { month: 4, day: 20 },
      end: { month: 5, day: 20 }
    },
    {
      sign: "Gemini",
      sign_mm: "မေထုန်",
      start: { month: 5, day: 21 },
      end: { month: 6, day: 20 }
    },
    {
      sign: "Cancer",
      sign_mm: "ကရကဋ်",
      start: { month: 6, day: 21 },
      end: { month: 7, day: 22 }
    },
    {
      sign: "Leo",
      sign_mm: "သိဟ်",
      start: { month: 7, day: 23 },
      end: { month: 8, day: 22 }
    },
    {
      sign: "Virgo",
      sign_mm: "ကန်",
      start: { month: 8, day: 23 },
      end: { month: 9, day: 22 }
    },
    {
      sign: "Libra",
      sign_mm: "တူ",
      start: { month: 9, day: 23 },
      end: { month: 10, day: 22 }
    },
    {
      sign: "Scorpio",
      sign_mm: "ဗြိစ္ဆာ",
      start: { month: 10, day: 23 },
      end: { month: 11, day: 21 }
    },
    {
      sign: "Sagittarius",
      sign_mm: "ဓနု",
      start: { month: 11, day: 22 },
      end: { month: 12, day: 21 }
    },
    {
      sign: "Capricorn",
      sign_mm: "မကာရ",
      start: { month: 12, day: 22 },
      end: { month: 12, day: 31 }
    }
  ];

  // Determine zodiac sign based on date and month
  for (var i = 0; i < zodiacSigns.length; i++) {
    var zodiac = zodiacSigns[i];
    if (
      (month === zodiac.start.month && day >= zodiac.start.day) ||
      (month === zodiac.end.month && day <= zodiac.end.day)
    ) {
      return {
        sign: zodiac.sign,
        sign_mm: zodiac.sign_mm
      };
    }
  }

  // In case no sign is found (shouldn't happen with valid input)
  throw new Error("Could not determine zodiac sign");
}

module.exports = getZodiacSign;
