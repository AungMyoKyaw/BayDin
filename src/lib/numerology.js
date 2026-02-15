/**
 * Calculates the single-digit numerology number from any number.
 *
 * This function reduces any number to a single digit (1-9) by repeatedly
 * summing its digits. In Myanmar astrology, this is used to determine
 * a person's numerology group based on their birth date.
 *
 * @param {number} num - Any positive number
 * @returns {number} Single digit number (1-9, or 0 if input is 0)
 * @throws {Error} If input is not a number or is negative
 * @example
 * numerology(11); // 2 (1 + 1 = 2)
 * numerology(29); // 2 (2 + 9 = 11, 1 + 1 = 2)
 * numerology(0); // 0
 */
function numberbaydin(num) {
  // Validate input
  if (typeof num !== "number" || !Number.isFinite(num)) {
    throw new Error("Input must be a valid number");
  }
  if (num < 0) {
    throw new Error("Input must be a non-negative number");
  }

  // Handle 0 case
  if (num === 0) {
    return 0;
  }

  // Ensure we work with integer
  num = Math.floor(Math.abs(num));

  /**
   * Reducer function to sum digits
   * @param {string} a - First value
   * @param {string} b - Second value
   * @returns {number} Sum of the two values
   */
  function numsplitreduce(a, b) {
    return Number(a) + Number(b);
  }

  var numsplit = num.toString().split("");
  var sum = numsplit.reduce(numsplitreduce);

  while (sum > 9) {
    numsplit = sum.toString().split("");
    sum = numsplit.reduce(numsplitreduce);
  }

  return sum;
}

module.exports = numberbaydin;
