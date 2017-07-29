var expect = require('chai').expect;
var baydin = require('../dist/node/baydin.js');

describe('nayNum',()=>{
	it('should equal to 55555',()=>{
		var result = baydin.nayNum('မင်းဖြူမှန်မှန်ပြော');
		expect(result).to.equal(55555);
	});
});
