var expect = require('chai').expect;
var baydin = require('../dist/node/baydin.js');

describe('maharbote',()=>{
	it('should equal to မရဏ',()=>{
		var result=baydin.maharbote(1356,1);
		expect(result).to.equal('မရဏ');
	});
});
