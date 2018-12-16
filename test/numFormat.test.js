var expect = require('chai').expect;
var baydin = require('../dist/node/baydin.js');

describe('numFormat', () => {
  it('should equal to တစ်ရာငါးဆယ်နှစ်', () => {
    var result = baydin.numFormat(152);
    expect(result).to.equal('တစ်ရာငါးဆယ်နှစ်');
  });
});
