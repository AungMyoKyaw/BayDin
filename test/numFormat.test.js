var expect = require("chai").expect;
var baydin = require("../dist/node/baydin.js");

describe("numFormat", function() {
  it("should equal to တစ်ရာငါးဆယ်နှစ်", function() {
    var result = baydin.numFormat(152);
    expect(result).to.equal("တစ်ရာငါးဆယ်နှစ်");
  });

  it("should handle single digit numbers", function() {
    expect(baydin.numFormat(1)).to.equal("တစ်");
    expect(baydin.numFormat(5)).to.equal("ငါး");
    expect(baydin.numFormat(9)).to.equal("ကိုး");
  });

  it("should handle zero", function() {
    expect(baydin.numFormat(0)).to.equal("သုည");
  });

  it("should throw error for non-number input", function() {
    expect(function() {
      baydin.numFormat("123");
    }).to.throw("Input must be a valid number");
  });

  it("should handle negative numbers", function() {
    var result = baydin.numFormat(-10);
    expect(result).to.contain("အနုတ်");
  });
});
