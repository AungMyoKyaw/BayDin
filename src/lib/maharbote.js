/**
 * Calculates the maharbote (astrological influence) based on Myanmar calendar year
 * and birth day of the week.
 *
 * Maharbote refers to seven astrological influences:
 * ပုတိ, ဘင်္ဂ, မရဏ, အထွန်း, သိုက်, ရာဇာ, အဓိပတိ
 *
 * @param {number} year - Myanmar calendar year (e.g., 1356)
 * @param {number} day - Day of the week (1-7, where 1 = Sunday, 7 = Saturday)
 * @returns {string} The maharbote name in Myanmar
 * @throws {Error} If year or day are invalid
 * @example
 * maharbote(1356, 1); // "မရဏ"
 */
function maharbote(year, day) {
  // Validate inputs
  if (typeof year !== "number" || typeof day !== "number") {
    throw new Error("Year and day must be numbers");
  }
  if (day < 1 || day > 7) {
    throw new Error("Day must be between 1 and 7");
  }
  if (year <= 0) {
    throw new Error("Year must be a positive number");
  }

  var အကြွင်း = year % 7;
  if (အကြွင်း === 0) {
    အကြွင်း = 7;
  }
  var တိုင်စဉ် = [];
  var အဖွား = ["ဘင်္ဂ", "မရဏ", "အထွန်း", "သိုက်", "ရာဇာ", "ပုတိ", "အဓိပတိ"];
  တိုင်စဉ်.push(အကြွင်း);
  for (var i = 0; i < 6; i++) {
    var ထည့်ရန် = တိုင်စဉ်[i] + 3;
    if (ထည့်ရန် > 7) {
      တိုင်စဉ်.push(ထည့်ရန် - 7);
    } else {
      တိုင်စဉ်.push(ထည့်ရန်);
    }
  }
  return အဖွား[တိုင်စဉ်.indexOf(day)];
}

module.exports = maharbote;
