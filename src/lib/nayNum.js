/**
 * Converts Myanmar text to its numerological equivalent (nay num).
 *
 * This function extracts consonants from Myanmar text and converts them
 * to their corresponding numerological values based on traditional
 * Myanmar astrology.
 *
 * @param {string} str - Myanmar text string
 * @returns {number} The numerological number
 * @throws {Error} If input is not a string or is empty
 * @example
 * nayNum("မင်းဖြူမှန်မှန်ပြော"); // 55555
 */
function nayNum(str) {
  // Validate input
  if (typeof str !== "string") {
    throw new Error("Input must be a string");
  }
  if (str.length === 0) {
    throw new Error("Input string cannot be empty");
  }

  // Regex to filter vowel characters in Myanmar script
  var vowel = /[က-အ](?!်|္)/g;

  /**
   * Returns a regex pattern for the given numerological group
   * @param {number} i - Group number (1-7)
   * @returns {RegExp} Regex pattern for the group
   */
  function setRex(i) {
    var patterns = {
      1: /[အ]/,
      2: /[က-င]/,
      3: /[စ-ည]/,
      4: /[ယ-ဝ]/,
      5: /[ပ-မ]/,
      6: /[သဟ]/,
      7: /[တ-န]/
    };
    return patterns[i];
  }

  var matchedChars = str.match(vowel);
  if (!matchedChars || matchedChars.length === 0) {
    return 0;
  }

  var ans = "";
  matchedChars.forEach(function (a) {
    var test = false;
    var i = 1;
    while (test === false && i <= 7) {
      var patt = setRex(i);
      if (patt.test(a) === true) {
        test = true;
        if (i === 7) {
          ans += 0;
        } else {
          ans += i;
        }
      } else {
        i++;
      }
    }
  });
  return Number(ans);
}

module.exports = nayNum;
