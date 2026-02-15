var expect = require("chai").expect;
var baydin = require("../dist/node/baydin.js");

describe("nayNum", function() {
  it("should equal to 55555", function() {
    var result = baydin.nayNum("မင်းဖြူမှန်မှန်ပြော");
    expect(result).to.equal(55555);
  });

  it("should throw error for non-string input", function() {
    expect(function() {
      baydin.nayNum(123);
    }).to.throw("Input must be a string");
  });

  it("should throw error for empty string", function() {
    expect(function() {
      baydin.nayNum("");
    }).to.throw("Input string cannot be empty");
  });

  it("should return 0 for non-Myanmar characters", function() {
    var result = baydin.nayNum("hello");
    expect(result).to.equal(0);
  });
});
