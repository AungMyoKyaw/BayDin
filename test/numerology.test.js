var expect = require('chai').expect;
var numerology = require('../baydinjs/numerology');

describe('Numerology',()=>{
	it('should equal to 2',()=>{
		var result = numerology(11);
		expect(result).to.equal(2);
	});
});
