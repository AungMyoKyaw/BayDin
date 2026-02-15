var expect = require("chai").expect;
var baydin = require("../dist/node/baydin.js");

describe("tatyout", function() {
  it("should equal to 1", function() {
    var result = baydin.tatyout(1, 1);
    expect(result).to.equal(1);
  });

  it("should throw error for non-number inputs", function() {
    expect(function() {
      baydin.tatyout("1", 1);
    }).to.throw("Age and day must be numbers");
  });

  it("should throw error for invalid day", function() {
    expect(function() {
      baydin.tatyout(25, 8);
    }).to.throw("Day must be between 1 and 7");
  });

  it("should throw error for non-positive age", function() {
    expect(function() {
      baydin.tatyout(0, 1);
    }).to.throw("Age must be a positive integer");

    expect(function() {
      baydin.tatyout(-5, 1);
    }).to.throw("Age must be a positive integer");
  });

  it("should throw error for non-integer age", function() {
    expect(function() {
      baydin.tatyout(25.5, 1);
    }).to.throw("Age must be a positive integer");
  });
});
