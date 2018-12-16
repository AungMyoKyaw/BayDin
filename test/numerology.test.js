var expect = require('chai').expect;
var baydin = require('../dist/node/baydin.js');

describe('Numerology', () => {
  it('should equal to 2', () => {
    var result = baydin.numerology(11);
    expect(result).to.equal(2);
  });
});
