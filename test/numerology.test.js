const expect = require('chai').expect;
const numerology = require('../baydinjs/numerology');

describe('Numerology',()=>{
	it('should equal to 2',()=>{
		let result = numerology(11);
		expect(result).to.equal(2);
	});
});
