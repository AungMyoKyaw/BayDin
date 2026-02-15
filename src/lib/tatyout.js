/**
 * Calculates the tatyout (life influence) based on age and birth day of the week.
 *
 * This function determines the astrological influence (သက်ရောက်) for a given
 * age and day of birth, returning a number from 1 to 7.
 *
 * @param {number} age - Age in years (positive integer)
 * @param {number} day - Day of the week (1-7, where 7 = Saturday)
 * @returns {number} The tatyout number (1-7)
 * @throws {Error} If age or day are invalid
 * @example
 * tatyout(1, 1); // 1
 * tatyout(25, 3); // 5
 */
function tatyout(age, day) {
  // Validate inputs
  if (typeof age !== "number" || typeof day !== "number") {
    throw new Error("Age and day must be numbers");
  }
  if (!Number.isInteger(age) || age <= 0) {
    throw new Error("Age must be a positive integer");
  }
  if (day < 1 || day > 7) {
    throw new Error("Day must be between 1 and 7");
  }

  var တိုင်စဉ် = [];
  var အကြွင်း = age % 7;

  for (var i = 0; i < 7; i++) {
    var ထည့်ရန် = day + i;
    if (ထည့်ရန် > 7) {
      တိုင်စဉ်.push(ထည့်ရန် - 7);
    } else {
      တိုင်စဉ်.push(ထည့်ရန်);
    }
  }

  return တိုင်စဉ်[အကြွင်း - 1 < 0 ? 6 : အကြွင်း - 1];
}

module.exports = tatyout;
