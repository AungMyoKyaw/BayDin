/**
 * Converts a number to Myanmar words.
 *
 * This function takes a numeric value and returns its representation
 * in Myanmar language words, supporting various magnitudes including
 * ဆယ် (ten), ရာ (hundred), ထောင် (thousand), သောင်း (ten thousand),
 * သိန်း (hundred thousand), သန်း (million), and ကုဋေ (ten million).
 *
 * @param {number} num - Number to convert (supports up to 14 digits)
 * @returns {string} Number in Myanmar words, or original number if too large
 * @throws {Error} If input is not a number
 * @example
 * numFormat(152); // "တစ်ရာငါးဆယ်နှစ်"
 * numFormat(1000); // "တစ်ထောင်"
 */
function numFormat(num) {
  // Validate input
  if (typeof num !== "number" || !Number.isFinite(num)) {
    throw new Error("Input must be a valid number");
  }

  // Handle negative numbers
  if (num < 0) {
    return "အနုတ်" + numFormat(Math.abs(num));
  }

  // Handle zero
  if (num === 0) {
    return "သုည";
  }

  // Ensure we work with integer
  num = Math.floor(num);

  var value = [
    "တစ်",
    "နှစ်",
    "သုံး",
    "လေး",
    "ငါး",
    "ခြောက်",
    "ခုနှစ်",
    "ရှစ်",
    "ကိုး"
  ];
  var format = ["ကုဋေ", "သန်း", "သိန်း", "သောင်း", "ထောင်", "ရာ", "ဆယ်", ""];

  /**
   * Formats a number segment into Myanmar words
   * @param {number} numStr - Number to format
   * @returns {string} Formatted string in Myanmar
   */
  function formatter(numStr) {
    var result = "";
    var numString = numStr.toString();
    if (numString.length) {
      numString.split("").forEach(function (element, index, arr) {
        if (Number(element) !== 0) {
          result += value[element - 1] + format[8 + index - arr.length];
        }
      });
    }
    return result;
  }

  var ans = "";
  var numlength = num.toString().length;

  if (numlength > 7) {
    var kuday = num.toString().slice(0, numlength - 7);
    if (kuday.length < 8) {
      ans +=
        formatter(kuday) +
        format[0] +
        formatter(num.toString().slice(numlength - 7));
    } else {
      return num;
    }
  } else {
    ans += formatter(num);
  }

  return ans;
}

module.exports = numFormat;
