var expect = require('chai').expect;
var nayNum  = require('../baydinjs/nayNum');

describe('nayNum',()=>{
	it('should equal to 55555',()=>{
		var result = nayNum('မင်းဖြူမှန်မှန်ပြော');
		expect(result).to.equal(55555);
	});
});
