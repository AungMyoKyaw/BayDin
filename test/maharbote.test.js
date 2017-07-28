var expect = require('chai').expect;
var maharbote = require('../baydinjs/maharbote');

describe('maharbote',()=>{
	it('should equal to မရဏ',()=>{
		var result=maharbote(1356,1);
		expect(result).to.equal('မရဏ');
	});
});
