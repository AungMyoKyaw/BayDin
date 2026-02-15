var expect = require("chai").expect;
var baydin = require("../dist/node/baydin.js");

describe("chineseZodiac", function() {
  it("should return Dragon for year 2024", function() {
    var result = baydin.chineseZodiac(2024);
    expect(result.sign).to.equal("Dragon");
    expect(result.signInBurmese).to.equal("နဂါး");
  });

  it("should return Rat for year 2020", function() {
    var result = baydin.chineseZodiac(2020);
    expect(result.sign).to.equal("Rat");
    expect(result.signInBurmese).to.equal("ကြွက်");
  });

  it("should return Ox for year 2021", function() {
    var result = baydin.chineseZodiac(2021);
    expect(result.sign).to.equal("Ox");
    expect(result.signInBurmese).to.equal("နွား");
  });

  it("should throw error for non-number input", function() {
    expect(function() {
      baydin.chineseZodiac("2024");
    }).to.throw("Please provide a valid year as a positive integer");
  });

  it("should throw error for negative year", function() {
    expect(function() {
      baydin.chineseZodiac(-100);
    }).to.throw("Please provide a valid year as a positive integer");
  });

  it("should throw error for zero year", function() {
    expect(function() {
      baydin.chineseZodiac(0);
    }).to.throw("Please provide a valid year as a positive integer");
  });
});
