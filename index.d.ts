/**
 * BayDinJS - Myanmar Astrology Library
 * TypeScript type definitions
 * @packageDocumentation
 */

/**
 * Result object for zodiac sign functions
 */
export interface ZodiacSignResult {
  /** Zodiac sign name in English */
  sign: string;
  /** Zodiac sign name in Myanmar */
  sign_mm: string;
}

/**
 * Result object for Chinese zodiac sign function
 */
export interface ChineseZodiacResult {
  /** Zodiac sign name in English */
  sign: string;
  /** Zodiac sign name in Burmese */
  signInBurmese: string;
}

/**
 * Calculates the maharbote (astrological influence) based on Myanmar calendar year
 * and birth day of the week.
 *
 * @param year - Myanmar calendar year (e.g., 1356)
 * @param day - Day of the week (1-7, where 1 = Sunday, 7 = Saturday)
 * @returns The maharbote name in Myanmar
 * @throws Error if year or day are invalid
 *
 * @example
 * maharbote(1356, 1); // "မရဏ"
 */
export function maharbote(year: number, day: number): string;

/**
 * Converts Myanmar text to its numerological equivalent (nay num).
 *
 * @param str - Myanmar text string
 * @returns The numerological number
 * @throws Error if input is not a string or is empty
 *
 * @example
 * nayNum("မင်းဖြူမှန်မှန်ပြော"); // 55555
 */
export function nayNum(str: string): number;

/**
 * Calculates the single-digit numerology number from any number.
 *
 * @param num - Any positive number
 * @returns Single digit number (1-9, or 0 if input is 0)
 * @throws Error if input is not a number or is negative
 *
 * @example
 * numerology(11); // 2
 * numerology(29); // 2
 */
export function numerology(num: number): number;

/**
 * Converts a number to Myanmar words.
 *
 * @param num - Number to convert (supports up to 14 digits)
 * @returns Number in Myanmar words, or original number if too large
 * @throws Error if input is not a number
 *
 * @example
 * numFormat(152); // "တစ်ရာငါးဆယ်နှစ်"
 */
export function numFormat(num: number): string;

/**
 * Calculates the tatyout (life influence) based on age and birth day of the week.
 *
 * @param age - Age in years (positive integer)
 * @param day - Day of the week (1-7, where 7 = Saturday)
 * @returns The tatyout number (1-7)
 * @throws Error if age or day are invalid
 *
 * @example
 * tatyout(1, 1); // 1
 */
export function tatyout(age: number, day: number): number;

/**
 * Gets the Chinese zodiac sign for a given year.
 *
 * @param year - Gregorian calendar year (positive integer)
 * @returns Object containing zodiac information
 * @throws Error if year is not a valid positive integer
 *
 * @example
 * chineseZodiac(2024); // { sign: "Dragon", signInBurmese: "နဂါး" }
 */
export function chineseZodiac(year: number): ChineseZodiacResult;

/**
 * Gets the Western zodiac sign based on birth date.
 *
 * @param day - Day of birth (1-31)
 * @param month - Month of birth (1-12)
 * @returns Object containing zodiac information
 * @throws Error if invalid date or month input
 *
 * @example
 * zodiac(15, 3); // { sign: "Pisces", sign_mm: "မိန်" }
 */
export function zodiac(day: number, month: number): ZodiacSignResult;

/**
 * Main module export containing all astrology functions
 */
export interface BayDin {
  maharbote: typeof maharbote;
  nayNum: typeof nayNum;
  numerology: typeof numerology;
  numFormat: typeof numFormat;
  tatyout: typeof tatyout;
  chineseZodiac: typeof chineseZodiac;
  zodiac: typeof zodiac;
}
