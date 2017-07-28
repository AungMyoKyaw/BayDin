var expect = require('chai').expect;
var tatyout = require('../baydinjs/tatyout');

describe('tatyout',()=>{
	it('should equal to 1',()=>{
		var result = tatyout(1,1);
		expect(result).to.equal(1);
	});
});
