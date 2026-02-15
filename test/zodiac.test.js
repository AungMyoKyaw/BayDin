var expect = require("chai").expect;
var baydin = require("../dist/node/baydin.js");

describe("zodiac", function() {
  it("should return Pisces for March 15", function() {
    var result = baydin.zodiac(15, 3);
    expect(result.sign).to.equal("Pisces");
    expect(result.sign_mm).to.equal("မိန်");
  });

  it("should return Capricorn for January 1", function() {
    var result = baydin.zodiac(1, 1);
    expect(result.sign).to.equal("Capricorn");
    expect(result.sign_mm).to.equal("မကာရ");
  });

  it("should return Leo for August 1", function() {
    var result = baydin.zodiac(1, 8);
    expect(result.sign).to.equal("Leo");
    expect(result.sign_mm).to.equal("သိဟ်");
  });

  it("should throw error for invalid day", function() {
    expect(function() {
      baydin.zodiac(32, 1);
    }).to.throw("Invalid date or month input");
  });

  it("should throw error for invalid month", function() {
    expect(function() {
      baydin.zodiac(15, 13);
    }).to.throw("Invalid date or month input");
  });

  it("should throw error for invalid day for February", function() {
    expect(function() {
      baydin.zodiac(31, 2);
    }).to.throw("Invalid day for the given month");
  });

  it("should throw error for non-number input", function() {
    expect(function() {
      baydin.zodiac("15", 3);
    }).to.throw("Invalid date or month input");
  });
});
