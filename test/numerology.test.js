var expect = require("chai").expect;
var baydin = require("../dist/node/baydin.js");

describe("Numerology", function() {
  it("should equal to 2", function() {
    var result = baydin.numerology(11);
    expect(result).to.equal(2);
  });

  it("should reduce multi-digit numbers to single digit", function() {
    expect(baydin.numerology(29)).to.equal(2); // 2+9=11, 1+1=2
    expect(baydin.numerology(123)).to.equal(6); // 1+2+3=6
    expect(baydin.numerology(999)).to.equal(9); // 9+9+9=27, 2+7=9
  });

  it("should return 0 for input 0", function() {
    expect(baydin.numerology(0)).to.equal(0);
  });

  it("should throw error for non-number input", function() {
    expect(function() {
      baydin.numerology("123");
    }).to.throw("Input must be a valid number");
  });

  it("should throw error for negative input", function() {
    expect(function() {
      baydin.numerology(-11);
    }).to.throw("Input must be a non-negative number");
  });
});
