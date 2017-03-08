const expect = require('chai').expect;
const nayNum  = require('../baydinjs/nayNum');

describe('nayNum',()=>{
	it('should equal to 55555',()=>{
		let result = nayNum('မင်းဖြူမှန်မှန်ပြော');
		expect(result).to.equal(55555);
	});
});
