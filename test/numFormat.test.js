const expect = require('chai').expect;
const numFormat = require('../baydinjs/numFormat');

describe('numFormat',()=>{
	it('should equal to တစ်ရာငါးဆယ်နှစ်',()=>{
		let result =	numFormat(152);
		expect(result).to.equal('တစ်ရာငါးဆယ်နှစ်');
	});
});
