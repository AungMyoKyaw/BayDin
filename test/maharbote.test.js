var expect = require("chai").expect;
var baydin = require("../dist/node/baydin.js");

describe("maharbote", function() {
  it("should equal to မရဏ", function() {
    var result = baydin.maharbote(1356, 1);
    expect(result).to.equal("မရဏ");
  });

  it("should throw error for invalid day", function() {
    expect(function() {
      baydin.maharbote(1356, 8);
    }).to.throw("Day must be between 1 and 7");
  });

  it("should throw error for non-number inputs", function() {
    expect(function() {
      baydin.maharbote("1356", 1);
    }).to.throw("Year and day must be numbers");
  });

  it("should throw error for negative year", function() {
    expect(function() {
      baydin.maharbote(-100, 1);
    }).to.throw("Year must be a positive number");
  });
});
