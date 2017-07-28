var expect = require('chai').expect;
var numFormat = require('../baydinjs/numFormat');

describe('numFormat',()=>{
	it('should equal to တစ်ရာငါးဆယ်နှစ်',()=>{
		var result =	numFormat(152);
		expect(result).to.equal('တစ်ရာငါးဆယ်နှစ်');
	});
});
