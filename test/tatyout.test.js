var expect = require('chai').expect;
var baydin = require('../dist/node/baydin.js');

describe('tatyout',()=>{
	it('should equal to 1',()=>{
		var result = baydin.tatyout(1,1);
		expect(result).to.equal(1);
	});
});
