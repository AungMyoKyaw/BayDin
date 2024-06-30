"use strict";

// Function to get the Chinese Zodiac sign for a given year
function getChineseZodiac(year) {
  // Validate the input
  if (typeof year !== "number" || !Number.isInteger(year) || year <= 0) {
    throw new Error("Please provide a valid year as a positive integer.");
  }

  // Array of Chinese Zodiac signs in the order they repeat
  var zodiacSigns = ["Rat", "Ox", "Tiger", "Rabbit", "Dragon", "Snake", "Horse", "Goat", "Monkey", "Rooster", "Dog", "Pig"];
  var zodiacSignsInBurmese = ["ကြွက်", "နွား", "ကျား", "ယုန်", "နဂါး", "မြွေ", "မြင်း", "ဆိတ်", "မြောက်", "ကြက်", "ခွေး", "ဝက်"];

  // Calculate the index for the zodiac sign
  var index = (year - 4) % 12;

  // Return the corresponding zodiac sign
  return {
    sign: zodiacSigns[index],
    signInBurmese: zodiacSignsInBurmese[index]
  };
}

// Export the function to make it available to other modules
module.exports = getChineseZodiac;