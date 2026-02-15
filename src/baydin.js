/**
 * @fileoverview BayDinJS - Myanmar Astrology Library
 * @description A JavaScript library for Myanmar traditional astrology calculations
 * including maharbote, numerology, zodiac signs, and more.
 * @author Aung Myo Kyaw
 * @license MIT
 * @see {@link https://github.com/AungMyoKyaw/BayDin|GitHub Repository}
 */

var maharbote = require("./lib/maharbote");
var nayNum = require("./lib/nayNum");
var numerology = require("./lib/numerology");
var numFormat = require("./lib/numFormat");
var tatyout = require("./lib/tatyout");
var chineseZodiac = require("./lib/chineseZodiac");
var zodiac = require("./lib/zodiac");

module.exports = {
  maharbote: maharbote,
  nayNum: nayNum,
  numerology: numerology,
  numFormat: numFormat,
  tatyout: tatyout,
  chineseZodiac: chineseZodiac,
  zodiac: zodiac
};
