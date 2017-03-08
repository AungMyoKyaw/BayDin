const expect = require('chai').expect;
const tatyout = require('../baydinjs/tatyout');

describe('tatyout',()=>{
	it('should equal to 1',()=>{
		let result = tatyout(1,1);
		expect(result).to.equal(1);
	});
});
