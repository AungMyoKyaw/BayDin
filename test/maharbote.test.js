const expect = require('chai').expect;
const maharbote = require('../baydinjs/maharbote');

describe('maharbote',()=>{
	it('should equal to မရဏ',()=>{
		let result=maharbote(1356,1);
		expect(result).to.equal('မရဏ');
	});
});
